const name = "lineLayer";
module.exports.name = name;
module.exports.klass = LineLayerController;
module.exports.component = buildComponent;

require('./style.css');
var AbstractLayer = require('../abstract-layer-2d');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;

function buildComponent(componentData) {
    componentData.template = componentData.template || require('./template.html');
    componentData.bindings = {
        lineColor: "<",
        lineDash: "<",
        lineWidth: "<",
        lineData: "<",
        getX : "<",
        getY : "<",
        ...componentData.bindings
    }
    return component(componentData);
}

function LineLayerController($timeout, $element, $scope) {
    let self = this;
    AbstractLayerController.call(this, $timeout, $element, $scope);
    this.lineStyleDefault = function() {
        this.lineColor = this.lineColor || 'black';
        this.lineDash = this.lineDash || "0";
        this.lineWidth = this.lineWidth || 1;
        this.getX = typeof(this.getX) === "function" ? this.getX: (d) => {return d.x;};
        this.getY = typeof(this.getY) === "function" ? this.getY: (d) => {return d.y;};
    }
    this.getLine = function() {
        console.error("Abstract getLine");
    }
    this.getData = function() {
        return this.lineData;
    }
    this.draw = draw;
    function draw() {
        let line = this.getLine();
        d3.select($element.find('path')[0])
            .datum(this.getData())
            .attr('d', line);
    }
}
