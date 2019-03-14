const moduleName = 'plot-toolkit';
const name = "lineFormulaLayer";
module.exports.name = name;

var AbstractLayer = require('../line-layer');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;
//require('ngclipboard');
require('./style.css');

var layerCollection = require('../layer-collection');
angular.module(moduleName).component(name, component({
    controller: LFLayerController, 
    template: require('./template.html'),
    bindings: {
        formula: "<",
        resolution: "<",
        eqnOffsets: "<"
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
    }
    function showEquation() {
        console.log('katex render');
        katex.render(parseFormulaLatex(self.formula), 
            $element.find('.equation')[0], {displayMode: false});
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
        }
    }
    this.parseFormulaLatex = function() {
        return parseFormulaLatex(this.formula);
    }
    function parseFormulaLatex(formula) {
        switch(formula.family) {
            case "linear":
                let intercept = formula.intercept;
                return `y = ${formula.slope} \\times x ${intercept==0?'':(intercept<0 ? '-' + (-intercept):'+' + intercept)}`;
            case "exponential":
                return `y = ${formula.ae} \\times e^\{${formula.b} x\}`;
                
        }
    }
    
    this.getData = function() {
        if (!this.lineData || this._update) {
            this._update = false;
            let f = parseFormula(this.formula);
            let step = (this.maxVal - this.minVal)/this.resolution;
            this.lineData = [];
            let x = this.minVal;
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
        }, function() {
            showEquation();
        });
        this.doInit();
    }
}
