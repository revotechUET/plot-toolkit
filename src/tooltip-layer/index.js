const moduleName = 'plot-toolkit';
const name = 'tooltipLayer';
module.exports.name = name;

var AbstractLayer = require('../abstract-layer-2d');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;
const _ = require('lodash');
const bestNumberFormat = require('../common').bestNumberFormat;

require('./style.css');
var layerCollection = require('../layer-collection');
angular.module(moduleName)
    .component(name, component({
        controller: TooltipLayerController,
        template: require('./template.html'),
        bindings: {
            frequencyXFn: '<',
            frequencyYFn: '<'
        }
    }));

function TooltipLayerController($timeout, $element, $scope) {
    let self = this;
    let dragging = false;
    AbstractLayerController.call(this, $timeout, $element, $scope);

    this.$onInit = function() {
        this.doInit();
    }
    this.defaultBindings = function() {}
    this.draw = function() {}
	let invertX, invertY;
    this.onMouseMove = function($event) {
        this.shiftKey = $event.shiftKey;
        this.altKey = $event.altKey;
        this.onMouseMoveTooltip($event);
        let transformX = this.getTransform();
        let transformY = this.getOrthoTransform();
        let x = $event.offsetX;
        let y = $event.offsetY;
        invertX = transformX.invert(x);
        invertY = transformY.invert(y);
        return true;
    }
    this.onMouseLeave = function($event) {
        invertX = undefined;
        invertY = undefined;
    }
    this.getCoordinates = function() {
        if (!invertX || !invertY)
            return '';
        return `X: ${invertX ? bestNumberFormat(invertX) : 0}
        Y:${invertY ? bestNumberFormat(invertY) : 0}`;
    }
    this.getFrequencyX = function() {
        if (!invertX || !invertY)
            return '';
        return self.frequencyXFn(invertX ? bestNumberFormat(invertX) : 0);
    }
    this.getFrequencyY = function() {
        if (!invertX || !invertY)
            return '';
        return self.frequencyYFn(invertY ? bestNumberFormat(invertY) : 0);
    }
}
