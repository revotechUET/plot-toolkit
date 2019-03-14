const moduleName = 'plot-toolkit';
const name = "controlMarkerLayer";
module.exports.name = name;

require('./style.css');
var AbstractLayer = require('../abstract-layer');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;

var layerCollection = require('../layer-collection');
angular.module(moduleName).component(name, component({
    controller: ControlMarkerLayerController, 
    template: require('./template.html'),
    bindings: {
        markers: "<",
        markerStyle: "<",
        markerWidth: "<",
        getMarkerValue: "<",
        setMarkerValue: "<"
    }
}));
function ControlMarkerLayerController($timeout, $element, $scope ) {
    let self = this;
    AbstractLayerController.call(this, $timeout, $element, $scope);

    this.watchProperties = this.watchProperties.concat([
        "markers",
        "markerStyle",
        "markerWidth",
        "getMarkerValue",
        "setMarkerValue"
    ]);
    this.defaultBindings = function() {
        this.markerWidth = this.markerWidth || 19;
    }
    this.$onInit = function() {
        this.doInit();
    }
    this.draw = function() {
    }
    this.markerOffset = function(marker, idx) {
        let transform = this.getTransform();
        return {
            x: transform(self.getMarkerValue(marker, idx)) - self.markerWidth/2,
            y: 0
        }
    }
    this.dragStart = function(marker, $event, $index) {
        $event.stopPropagation();
        $event.preventDefault();
        marker.dragging = true;
        marker.startX = $event.offsetX;
    }
    this.dragEnd = function($event) {
        this.markers.forEach((m) => {
            m.dragging = false;
            delete m.startX;
        });
    }
    this.dragging = function($event) {
        for (let i = 0; i < this.markers.length; i++) {
            if (!this.markers[i].dragging) continue;

            let marker = this.markers[i];
            let offset = $event.offsetX - marker.startX;
            let x = this.getTransform()(this.getMarkerValue(marker, i)) - this.markerWidth/2 + offset;
            let value = this.getTransform().invert(x + this.markerWidth/2);
            let lowerMarkerVal = this.getMarkerValue(this.markers[i - 1], i - 1) || this.minVal;
            let higherMarkerVal = this.getMarkerValue(this.markers[i + 1], i + 1) || this.maxVal;
            if ( (value - lowerMarkerVal) * ( value -  higherMarkerVal) >= 0) continue;
            this.setMarkerValue(marker, i, value);
            marker.startX = $event.offsetX;
        }
    }
    this.markerMouseOver = function($event, marker, idx) {
        marker.opacity = 1; 
        $timeout(() => {marker.handlePos = $event.offsetY - self.markerWidth/2;}); 
    }
}

