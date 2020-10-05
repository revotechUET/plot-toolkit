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
        curveFunctionName: '<',
        plotType: "<",
    }
}));
LPLayerController.$inject = ['$scope', '$timeout', '$element'];
function LPLayerController($scope, $timeout, $element) {
    let self = this;
    AbstractLayerController.call(this, $timeout, $element, $scope);
    this.watchProperties = this.watchProperties.concat([
        "lineData",
        "plotType"
    ]);
    this.defaultBindings = function() {
        this.lineStyleDefault();
    }
    this.doAutofit = function () {
        const getY = self.plotType === 'percentage' ? (d, i) => self.getY(d, i) / binSum * 100 : (d, i) => self.getY(d, i);
        let maxY = d3.max(this.getData(), function (point, i) { return getY(point, i); });
        maxY > 1 ? _.ceil(maxY, -1 * maxY.toString().length + 1) : maxY;
        this.updateMaxY(maxY);
    }
    this.getLine = function() {
        let transform = this.getTransform();
        let orthoTransform = this.getOrthoTransform();
        const binSum = self.getData().flat().length;
        const getY = self.plotType === 'percentage' ? (d, i) => self.getY(d, i) / binSum * 100 : (d, i) => self.getY(d, i);
        let line = d3.line().curve(d3[this.curveFunctionName || 'curveNatural'])
            .x((d, i) => {
                return transform(self.getX(d, i));
            })
            .y((d, i) => orthoTransform(getY(d, i)))
            .defined(function (d, i) {
                let x = self.getX(d, i);
                let y = getY(d, i);
                return !isNaN(x) && !isNaN(y)
                    && y != Infinity && y != -Infinity
                    && !isNaN(transform(x)) && !isNaN(orthoTransform(y))
                    && transform(x) != -Infinity && transform(x) != Infinity
                    && orthoTransform(y) != -Infinity && orthoTransform(y) != Infinity
            });
        return line;
    }
    this.$onInit = function() {
        this.doInit();
    }
}
