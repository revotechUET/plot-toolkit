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
        draggable: "<",
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
        "setMarkerValue",
        "draggable"
    ]);
    this.defaultBindings = function() {
        this.markerStyle = typeof(this.markerStyle) === 'object'?this.markerStyle:{stroke:"green", "stroke-width": 2,"fill":"none"};
        this.markerWidth = this.markerWidth || 19;
        this.draggable = this.draggable || false;
    }
    this.$onInit = function() {
        this.doInit();
    }
    this.draw = function() {
    }
    this.markerOffset = function(marker, idx) {
        let transform = this.getTransform();
        switch(this.axisDirection) {
        case "left":
        case "right":
            return {
                x: transform(self.getMarkerValue(marker, idx)) - self.markerWidth/2,
                y: 0
            }
        case "up":
        case "down":
            return {
                x: 0,
                y: transform(self.getMarkerValue(marker, idx)) - self.markerWidth/2
            }
        }
    }
    this.dragStart = function(marker, $event, $index) {
        if (!this.draggable) return;
        $event.stopPropagation();
        $event.preventDefault();
        marker.dragging = true;
        switch(this.axisDirection) {
        case "left":
        case "right":
            marker.startX = $event.offsetX;
            break;
        case "up":
        case "down":
            marker.startY = $event.offsetY;
            break;
        }
    }
    this.dragEnd = function($event) {
        this.markers.forEach((m) => {
            m.dragging = false;
            delete m.startX;
            delete m.startY;
        });
    }
    this.dragging = function($event) {
        switch(this.axisDirection) {
        case "left":
        case "right":
            return this.xDragging($event);
        case "up":
        case "down":
            return this.yDragging($event);
        }
    }
    this.xDragging = function($event) {
        for (let i = 0; i < this.markers.length; i++) {
            if (!this.markers[i].dragging) continue;

            let marker = this.markers[i];
            let offset = $event.offsetX - marker.startX;
            let x = this.getTransform()(this.getMarkerValue(marker, i)) - this.markerWidth/2 + offset;
            let value = this.getTransform().invert(x + this.markerWidth/2);
            let lowerMarkerVal = this.markers[i-1] ? this.getMarkerValue(this.markers[i-1], i-1):this.minVal;
            let higherMarkerVal = this.markers[i+1] ? this.getMarkerValue(this.markers[i+1], i+1):this.maxVal;
            if ( (value - lowerMarkerVal) * ( value -  higherMarkerVal) >= 0) continue;
            this.setMarkerValue(marker, i, value);
            marker.startX = $event.offsetX;
        }
    }
    this.yDragging = function($event) {
        for (let i = 0; i < this.markers.length; i++) {
            if (!this.markers[i].dragging) continue;

            let marker = this.markers[i];
            let offset = $event.offsetY - marker.startY;
            let y = this.getTransform()(this.getMarkerValue(marker, i)) - this.markerWidth/2 + offset;
            let value = this.getTransform().invert(y + this.markerWidth/2);
            let lowerMarkerVal = this.markers[i - 1]?this.getMarkerValue(this.markers[i - 1], i - 1):this.minVal;
            let higherMarkerVal = this.markers[i + 1]?this.getMarkerValue(this.markers[i + 1], i + 1):this.maxVal;
            if ( (value - lowerMarkerVal) * ( value -  higherMarkerVal) >= 0) continue;
            this.setMarkerValue(marker, i, value);
            marker.startY = $event.offsetY;
        }
    }
    this.markerMouseOver = function($event, marker, idx) {
        if (!this.draggable) return;
        marker.opacity = 1; 
        $timeout(() => {
            switch(self.axisDirection) { 
                case "left":
                case "right":
                    marker.handlePos = $event.offsetY - self.markerWidth/2;
                    break;
                case "up":
                case "down":
                    marker.handlePos = $event.offsetX - self.markerWidth/2;
                    break;
            }
        }); 
    }
    this.getCursorStyle = function () {
        if (!this.draggable) return { cursor: 'default' };
        switch (this.axisDirection) {
        case "left":
        case "right":
            return {cursor: 'ew-resize'};
        case "up":
        case "down":
            return {cursor: 'ns-resize'};
        }
    }
    this.markerKnobStyle = function(marker) {
        return {
            opacity: marker.opacity || 0,
            ...this.markerStyle
        }
    }
}

