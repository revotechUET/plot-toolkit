const moduleName = 'plot-toolkit';
const name = "linePointLayer";
module.exports.name = name;

var AbstractLayer = require('../line-layer');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;

var layerCollection = require('../layer-collection');
angular.module(moduleName).component(name, component({
    controller: LPLayerController, 
    bindings: {
    }
}));
function LPLayerController($scope, $timeout, $element) {
    let self = this;
    AbstractLayerController.call(this, $timeout, $element, $scope);
    this.watchProperties = this.watchProperties.concat([
        "lineData",
    ]);
    this.defaultBindings = function() {
        this.lineStyleDefault();
    }
    this.doAutofit = function() {
        this.updateMaxY(d3.max(this.getData(), function(point,i) {return self.getY(point,i);}));
    }
    this.getLine = function() {
        let transform = this.getTransform();
        let orthoTransform = this.getOrthoTransform();
        let line = d3.line().curve(d3.curveBasis)
            .x((d, i) => {
                return transform(self.getX(d, i));
            })
            .y((d, i) => {
                return orthoTransform(self.getY(d, i));
            });
        return line;
    }
    this.$onInit = function() {
        this.doInit();
    }
}
