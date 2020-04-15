const moduleName = 'plot-toolkit';
const name = "lineBinLayer";
module.exports.name = name;

var AbstractLayer = require('../line-layer');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;

var layerCollection = require('../layer-collection');
angular.module(moduleName).component(name, component({
    controller: LineBinLayerController, 
    bindings: { }
}));
LineBinLayerController.$inject = ['$timeout', '$element', '$scope'];
function LineBinLayerController($timeout, $element, $scope) {
    let self = this;
    AbstractLayerController.call(this, $timeout, $element, $scope);
    this.defaultBindings = function() {
        this.lineStyleDefault();
    }
    this.$onInit = function() {
        this.doInit();
    }
    this.getLine = function() {
        let transform = this.getTransform();
        let orthoTransform = this.getOrthoTransform();
        let line = d3.line().curve(d3.curveBasis)
            .x((d, i) => {
                return transform((d.x0 + d.x1)/2);
            })
            .y((d, i) => {
                return orthoTransform(d.length);
            });
        return line;
    }
    this.doAutofit = function() {
        this.updateMaxY(d3.max(this.getData(), function(bin) {return bin.length;}));
    }
}
