const moduleName = 'plot-toolkit';
const name = 'polygonLayer';
module.exports.name = name;

var AbstractLayer = require('../abstract-layer-2d');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;

var layerCollection = require('../layer-collection');
angular.module(moduleName)
    .component(name, component({
        controller: PolygonLayerController,
        template: require('./template.html'),
        bindings: { 
            fillStyle: "<",
            strokeStyle: "<",
            strokeWidth: "<",
            points: "<"
        }
    }));

function PolygonLayerController($timeout, $element, $scope) {
    let self = this;
    AbstractLayerController.call(this, $timeout, $element, $scope);

    this.watchProperties = this.watchProperties.concat([ "fillStyle", "strokeStyle" ]);

    this.$onInit = function() {
        this.doInit();
    }
    this.defaultBindings = function() {
        this.twoDBindings(this);
        this.fillStyle = this.fillStyle || "rgba(255,255, 64, 0.5)";
        this.strokeStyle = this.strokeStyle || "teal";
        this.strokeWidth = this.strokeWidth || "2";
    }
    this.doAutofit = function() {
    }
    this.draw = function() {
    }
    this.getPoints = function() {
        let transformX = this.getTransform(); 
        let transformY = this.getOrthoTransform();
        let pointCoordinates = this.points.map((p) => ({
            x: transformX(p.x),
            y: transformY(p.y)
        }));
        return JSON.stringify(pointCoordinates);
    }
}
