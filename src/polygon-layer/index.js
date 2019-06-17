const moduleName = 'plot-toolkit';
const name = 'polygonLayer';
module.exports.name = name;

var AbstractLayer = require('../interactive-layer');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;
const _ = require('lodash');

var layerCollection = require('../layer-collection');
angular.module(moduleName)
    .component(name, component({
        controller: PolygonLayerController,
        bindings: { }
    }));

function PolygonLayerController($timeout, $element, $scope) {
    let self = this;
    let dragging = false;
    AbstractLayerController.call(this, $timeout, $element, $scope);

    this.$onInit = function() {
        this.doInit();
    }
    this.defaultBindings = function() {
        this.interactiveBindings();
    }
    this.doAutofit = function() { }
    this.draw = function() { }
    this.mouseDownAddPoint = function($event) {
        let transformX = this.getTransform();
        let transformY = this.getOrthoTransform();
        let x = $event.offsetX;
        let y = $event.offsetY;
        let result = this.findClosest({x,y}, this.points, transformX, transformY);
        if (!_.isFinite(result.idx)) this.points.push({x:transformX.invert(x), y:transformY.invert(y)});
        else if (this.points.length === 1) {
            this.points.push({x:transformX.invert(x), y:transformY.invert(y)});
        }
        else {
            let prevIdx = (result.idx + 1) % this.points.length;
            let nextIdx = (result.idx + this.points.length - 1) % this.points.length;
            let prevDist = this.distance({x,y}, this.points[prevIdx], transformX, transformY);
            let nextDist = this.distance({x,y}, this.points[nextIdx], transformX, transformY);
            if (prevDist < nextDist) {
                this.points.splice(prevIdx, 0, {x:transformX.invert(x), y:transformY.invert(y)});
            }
            else {
                this.points.splice(result.idx, 0, {x:transformX.invert(x), y:transformY.invert(y)});
            }
        }
    }
    this.mouseDownDelPoint = function($event) {
        if (_.isFinite(this.editPointIdx)) {
            this.points.splice(this.editPointIdx, 1);
            this.editPointIdx = undefined;
        }
    }
}
