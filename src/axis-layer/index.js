const moduleName = "plot-toolkit";
const name = "axisLayer";
module.exports.name = name;

require('./style.css');
var AbstractLayer = require('../abstract-layer');
var AbstractLayerController = AbstractLayer.klass;
var bindings = AbstractLayer.bindings;
var component = AbstractLayer.component;

var layerCollection = require('../layer-collection');
let bestNumberFormat = require('../common').bestNumberFormat;
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

    this.watchProperties = this.watchProperties.concat([
        'precision',
        'nTicks',
        'grid',
        'minorTicks'
    ]);
    this.tickValues = function() {
        if (!this.loga) {
            const step = (self.maxVal - self.minVal) / this.nTicks;
            return d3.range(self.nTicks + 1).map((d, i) => self.minVal + i * step);
            // let step = (Math.ceil(self.maxVal)- Math.floor(self.minVal))/this.nTicks;
            // return d3.range(Math.floor(self.minVal), Math.ceil(self.maxVal), step);
        }
        else {
            return genLogTickValues(_.min([self.minVal, self.maxVal]), _.max([self.minVal, self.maxVal]));
        }
    }
    this.defaultBindings = function() {
        this.grid = (this.grid === undefined)?1:this.grid;
        this.nTicks = this.nTicks || 5;
        this.minorTicks = this.minorTicks || 2;
        this.precision = isNaN(this.precision) ? 1 : this.precision;
    }
    this.$onInit = function() {
        this.doInit();
        /*
        $scope.$watch(function() {
            return [self.maxVal, self.minVal];
        }, function() {
            console.log('redraw');
            self.getTransform(true);    
            self.drawOptimized();
        }, true);
        */
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
        // console.log('DRAW', self.axisDirection, self.maxVal);
        let svg = $element.find('svg');
        let transform = self.getTransform();

        const tickValues = self.tickValues();
        let axisFunc = self._axisFunc()(transform)
            .tickValues(tickValues)
            .tickFormat(function(value, i) {
                if (self.loga) 
                    return Number.isInteger(Math.log10(value))?value:'';
                if (i === tickValues.length - 1) return parseFloat(value.toFixed(self.precision));
                return i % self.minorTicks ? '': parseFloat(value.toFixed(self.precision));
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
    var leftExponent = Math.floor(Math.log10(minVal || 0.01));
    var rightExponent = Math.ceil(Math.log10(maxVal || 0.01));
    for (let i = leftExponent; i <= rightExponent; i++) {
        for (let j = 1; j < 10; j++) {
            let value = j * Math.pow(10, i);
            if (value >= minVal && value <= maxVal)
            tickValues.push(bestNumberFormat(value).replace(/0*$/g, ''));
        }
    }
    return tickValues;
}
