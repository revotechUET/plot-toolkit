const moduleName = 'plot-toolkit';
const name = "lineFormulaLayer";
module.exports.name = name;

var AbstractLayer = require('../line-layer');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;
var parseFormulaLatex = require('../common').parseFormulaLatex;
require('./style.css');

var layerCollection = require('../layer-collection');
angular.module(moduleName).component(name, component({
    controller: LFLayerController, 
    template: require('./template.html'),
    bindings: {
        formula: "<",
        resolution: "<",
        eqnOffsets: "<",
        showEquation: '<',
        eqnName: "<",
        inverted: "<",
        mse: '<',
        lineLabel: '<',
        lineLabelStyle: '<'
    }
}));
function LFLayerController($scope, $timeout, $element) {
    let self = this;
    AbstractLayerController.call(this, $timeout, $element, $scope);

    this.watchProperties = this.watchProperties.concat([
        "resolution",
        "eqnOffsets",
        "inverted",
    ]);

    this.defaultBindings = function() {
        this.lineStyleDefault();
        this.resolution = this.resolution || 50;
        this.eqnOffsets = this.eqnOffsets || [0,0];
        this.showEquation = this.showEquation || false;
        this.formula = this.formula || {};
        this.lineLabelStyle = this.lineLabelStyle || {};
        this.prefixId = `Pickett-${self.label}-${Date.now()}`;
    }
    function showEquation() {
        if (!self.showEquation) return;
        let html = katex.renderToString(self.parseFormulaLatex(),{displayMode: false});
        $element.find('.equation').empty().append(html);
    }
    function showMSE() {
        if (!self.mse) return;
        let html = katex.renderToString(self.parseMSELatex(),{displayMode: false});
        $element.find('.mse').empty().append(html);
    }

    this.registerWatch(function() {
        showEquation();
        showMSE();
    });
    this.doAutofit = function() {
        this.updateMaxY(d3.max(this.getData(), function(point) {return self.getY(point);}));
    }
    this.getLine = function() {
        let transform = this.getTransform();
        let orthoTransform = this.getOrthoTransform();
        let line = d3.line().curve(d3.curveBasis)
            .x((d, i) => {
                return transform(self.getX(d));
            })
            .y((d, i) => {
                return orthoTransform(self.getY(d));
            })
            .defined(function (d) {
                return !isNaN(d.x) && !isNaN(d.y)                                   
                    && d.y != Infinity && d.y != -Infinity                          
                    && !isNaN(transform(d.x)) && !isNaN(orthoTransform(d.y))           
                    && transform(d.x) != -Infinity && transform(d.x) != Infinity  
                    && orthoTransform(d.y) != -Infinity && orthoTransform(d.y) != Infinity  
            });
        return line;
    }

    function parseFormula(formula) {
        switch(formula.family) {
            case "linear":
                return function(x) {
                    return formula.slope * x + formula.intercept;
                }
            case "exponential":
                return function(x) {
                    return formula.ae * Math.exp(formula.b*x);
                }
            case "power":
                return function(x) {
                    return formula.coefficient * (x ** formula.exponent);
                }
            case "pickett":
                return function(x) {
                    //let result = Math.pow(10, (-formula.m) * (Math.log10(x) - Math.log10(formula.a*formula.rw) - Math.log10(1 / (formula.sw ** formula.n))));
                    let result = Math.pow(10, (-formula.m) * (Math.log10(x)) + Math.log10((formula.a*formula.rw) / (formula.sw ** formula.n)));
                    if (formula.isSwap) {
                        result = Math.pow(10, (Math.log10(x) - (Math.log10((formula.a*formula.rw) / (formula.sw ** formula.n)))) / (-formula.m));
                    }
                    if (isNaN(result)) return undefined;
                    return result;
                }
            default: return formula.fn;
        }
    }
    this.parseFormulaLatex = function() {
        return parseFormulaLatex(this.formula) || '';
    }
    this.parseMSELatex = function() {
        return parseFormulaLatex(this.mse) || '';
    }
    /*
    function parseFormulaLatex(formula) {
        switch(formula.family) {
            case "linear":
                let intercept = formula.intercept;
                return `y = ${formula.slope} \\times x ${intercept==0?'':(intercept<0 ? '-' + (-intercept):'+' + intercept)}`;
            case "exponential":
                return `y = ${formula.ae} \\times e^\{${formula.b} x\}`;

        }
    }*/

    this.getData = function() {
        if (!this.lineData || this._update) {
            this._update = false;
            this.lineData = [];
            let f = parseFormula(this.formula);
            if (!f) return this.lineData;
            if (self.inverted) {
                let step = (this.maxDrawY - this.minDrawY) / this.resolution;
                for (let y = this.minDrawY; (y - this.minDrawY) * (y - this.maxDrawY) <= 0; y += step) {
                    let x = f(y);
                    if (!x) continue;
                    if (this.autofit || (x - this.minDraw) * (x - this.maxDraw) <= 0)
                        this.lineData.push({ x, y })
                }
            }
            else {
                let step = (this.maxDraw - this.minDraw) / this.resolution;
                for (let x = this.minDraw; (x - this.minDraw) * (x - this.maxDraw) <= 0; x += step) {
                    let y = f(x);
                    if (!x) continue;
                    if (this.autofit || (y - this.minDrawY) * (y - this.maxDrawY) <= 0)
                        this.lineData.push({ x, y })
                }
            }
        }
        return this.lineData;
    }
    this.eqnStyle = function() {
        return {
            transform: 'translate(' + this.eqnOffsets[0] + ", " + this.eqnOffsets[1] + ")",
            color: this.lineColor
        }
    }
    this.eqnCopySuccess = function() {
        console.log("Copy success");
        if (this.layerCollection) {
            this.layerCollection.notify("Coppied", 'ti-clip', 1000);
        }
    }
    this.parentDraw = this.draw;
    this.draw = function() {
        self._update = true;
        self.parentDraw();
    }
    this.labelOffset = function() {
        let transform = self.getTransform();
        let orthoTransform = self.getOrthoTransform();
        const idx = 0;
        let x = self.lineData[idx].x;
        let y = self.lineData[idx].y;
        if (_.isFinite(x) && _.isFinite(y)
            && _.isFinite(transform(x)) && _.isFinite(orthoTransform(y))) {
            return {
                x: transform(x) + 7, 
                y: orthoTransform(y) - 7
            }
        }
        return {x:0,y:0};
    }
    this.$onInit = function() {
        $scope.$watch(function() {
            return JSON.stringify(self.formula);
        }, function () {
            self._update = true;
            self.drawOptimized();
            showEquation();
            showMSE();
        });
        this.doInit();
    }
}
