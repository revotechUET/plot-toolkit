const moduleName = "plot-toolkit";
const name = "axisLayer";
module.exports.name = name;

require('./style.css');
var AbstractLayer = require('../abstract-layer');
var AbstractLayerController = AbstractLayer.klass;
var bindings = AbstractLayer.bindings;
var component = AbstractLayer.component;

var layerCollection = require('../layer-collection');
angular.module(moduleName).component(name, component({
    controller: AxisLayerController, 
    template: require('./template.html'),
    bindings: {
        precision: '<',
        nTicks: '<',
        grid: '<',
        minorTicks: '<'
    }
}));
function AxisLayerController($timeout, $element, $scope ) {
    let self = this;
    AbstractLayerController.call(this, $timeout, $element, $scope);
    this.tickValues = function() {
        if (!this.loga) {
            let step = (Math.ceil(self.maxVal)- Math.floor(self.minVal))/this.nTicks;
            return d3.range(Math.floor(self.minVal), Math.ceil(self.maxVal), step);
        }
        else {
            return genLogTickValues(self.minVal, self.maxVal);
        }
    }
    this.defaultBindings = function() {
        this.grid = (this.grid === undefined)?1:this.grid;
        this.nTicks = this.nTicks || 5;
        this.minorTicks = this.minorTicks || 2;
        this.precision = this.precision || 0;
    }
    this.$onInit = function() {
        this.doInit();
        $scope.$watch(function() {
            return self.maxVal;
        }, function() {
            console.log('redraw');
            self.drawOptimized();
        });
    }
    this._translate = function() {
        switch (this.axisDirection) {
            case 'right':
            case 'left':
                return this.placement?`translate(0, ${this.contentHeight()}px)`:"translate(0,0)";
            case 'up':
            case 'down':
                return this.placement?`translate(${this.contentWidth()}px, 0)`:"translate(0,0)";
        }
        return "translate(0,0)";
    }
    this._tickSize = function() {
        switch (this.axisDirection) {
            case 'right':
            case 'left':
                return this.grid?-this.contentHeight():5;
            case 'up':
            case 'down':
                return this.grid?-this.contentWidth():5;
        }
        return -height;
    }
    this._axisFunc = function() {
        switch (this.axisDirection) {
            case 'right':
            case 'left':
                return this.placement?d3.axisBottom:d3.axisTop;
            case 'up':
            case 'down':
                return this.placement?d3.axisRight:d3.axisLeft;
        }
        return d3.axisBottom;
    }
    this.draw = draw;
    function draw() {
        console.log('DRAW', self.axisDirection, self.maxVal);
        let svg = $element.find('svg');
        let transform = self.getTransform();

        let axisFunc = self._axisFunc()(transform)
            .tickValues(self.tickValues())
            .tickFormat(function(value, i) {
                if (self.loga) 
                    return Number.isInteger(Math.log10(value))?value:'';
                return i % self.minorTicks ? '': value.toFixed(self.precision);
            })
            .tickPadding(10)
            .tickSize(self._tickSize());
        d3.select(svg[0]).select('g.layer')
            .style('transform', self._translate())
            .call(axisFunc);
    }
}

function genLogTickValues(minVal, maxVal) {
    var tickValues = new Array();
    var leftExponent = Math.floor(Math.log10(minVal));
    var rightExponent = Math.ceil(Math.log10(maxVal));
    for (let i = leftExponent; i <= rightExponent; i++) {
        for (let j = 1; j < 10; j++) {
            let value = j * Math.pow(10, i);
            if (value >= minVal && value <= maxVal)
            tickValues.push(value);
        }
    }
    return tickValues;
}
