const moduleName = 'plot-toolkit';
const name = "lineFormulaLayer";
module.exports.name = name;

var AbstractLayer = require('../line-layer');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;
var parseFormulaLatex = require('../common').parseFormulaLatex;
//require('ngclipboard');
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
        eqnName: "<"
    }
}));
function LFLayerController($scope, $timeout, $element) {
    let self = this;
    AbstractLayerController.call(this, $timeout, $element, $scope);

    this.watchProperties = this.watchProperties.concat([
        "resolution",
        "eqnOffsets"
    ]);

    this.defaultBindings = function() {
        this.lineStyleDefault();
        this.resolution = this.resolution || 50;
        this.eqnOffsets = this.eqnOffsets || [0,0];
        this.showEquation = this.showEquation || false;
    }
    function showEquation() {
        if (!self.showEquation) return;
        let html = katex.renderToString(parseFormulaLatex(self.formula),{displayMode: false});
        $element.find('.equation').empty().append(html);
    }

    this.registerWatch(function() {
        showEquation();
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
                return function (x) {
                    return formula.coefficient * (x ** formula.exponent);
                }
        }
    }
    this.parseFormulaLatex = function() {
        return parseFormulaLatex(this.formula);
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
            let f = parseFormula(this.formula);
            let step = (this.maxVal - this.minVal)/this.resolution;
            this.lineData = [];
            for (let x = this.minVal; (x - this.minVal)*(x - this.maxVal) <= 0 ; x += step) 
            {
                let y = f(x);
                if ( this.autofit || (y - this.minY)*(y - this.maxY) <= 0 ) 
                    this.lineData.push({ x, y })
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
    this.$onInit = function() {
        $scope.$watch(function() {
            return JSON.stringify(self.formula);
        }, function () {
            self._update = true;
            self.drawOptimized();
            showEquation();
        });
        this.doInit();
    }
}
