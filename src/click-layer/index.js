const moduleName = 'plot-toolkit';
const name = 'clickLayer';
module.exports.name = name;

//var AbstractLayer = require('../interactive-layer');
var AbstractLayer = require('../abstract-layer-2d');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;
const _ = require('lodash');

require('./style.css');
var layerCollection = require('../layer-collection');
angular.module(moduleName)
    .component(name, component({
        template: require('./template.html'),
        controller: ClickLayerController,
        bindings: {
            pointerStyle: "<",
            pointerSize: "<",
            coordinateX: "<",
            coordinateY: "<",
            clickHandler: "<"
        }
    }));

function ClickLayerController($timeout, $element, $scope) {
    let self = this;
    let dragging = false;
    AbstractLayerController.call(this, $timeout, $element, $scope);
    this.watchProperties = this.watchProperties.concat([
        'coordinateX', 'coordinateY', 
        'pointerSize', 'pointerStyle'
    ]);
    this.$onInit = function() {
        this.doInit();
    }
    this.defaultBindings = function() {
        this.pointerSize = this.pointerSize || 5;
        this.pointerStyle =  this.pointerStyle || {stroke:'blue', 'stroke-width':1, fill:'lightblue'}
    }
    this.doAutofit = function() { }
    this.draw = function() { }
    this.getPointerStyle = function() {
        if (!this.coordinateX || !this.coordinateY)
        return {
            display: 'none'
        }
        return this.pointerStyle;
    }
    this.getPointerInfoStyle = function() {
        if (!this.coordinateX || !this.coordinateY)
        return {
            display: 'none'
        }
        return {
            display: 'block'
        };
    }
    this.pointerCoordinates = function() {
        return `X:${this.coordinateX}; Y:${this.coordinateY}`;
    }
    this.pointerOffset = function() {
        if (!_.isFinite(this.coordinateX) || !_.isFinite(this.coordinateY)) return {x:0, y:0};
        let transformX = this.getTransform();
        let transformY = this.getOrthoTransform();
        return {
            x: transformX(this.coordinateX),
            y: transformY(this.coordinateY)
        }
    }
    this.onMouseClick = function($event) {
        let transformX = this.getTransform();
        let transformY = this.getOrthoTransform();
        let xPixel = $event.offsetX;
        let yPixel = $event.offsetY;
        let coordinateX = transformX.invert(xPixel);
        let coordinateY = transformY.invert(yPixel);
        this.clickHandler && this.clickHandler(coordinateX, coordinateY, transformX, transformY);
    }
}
