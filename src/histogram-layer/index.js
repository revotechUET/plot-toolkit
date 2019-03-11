const moduleName = 'plot-toolkit';
const name = 'histogramLayer';
module.exports.name = name;

var AbstractLayer = require('../barchart-layer');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;

var layerCollection = require('../layer-collection');
angular.module(moduleName)
    .component(name, component({
        controller: HistogramLayerController,
        bindings: {
            points: "<",
            getPointVal: "<",
            binCount: "<"
        }
    }));

function HistogramLayerController($timeout, $element, $scope) {
    let self = this;
    AbstractLayerController.call(this, $timeout, $element, $scope);
    function refresh() {
        $timeout(() => {
            self.getTransform(true);
            self.genBins();
        });
    }
    this.$onInit = function() {
        this.registerWatch(() => refresh());
        this.doInit();
        $scope.$watch(() => [self.binCount], () => refresh(), true)
    }
    this.genBins = function() {
        let thresholds;
        if (!this.loga)
            thresholds = d3.range(this.minVal, this.maxVal, (this.maxVal - this.minVal)/this.binCount);
        else {
            let logMinVal = Math.log10(this.minVal);
            let logMaxVal = Math.log10(this.maxVal);
            thresholds = d3.range(logMinVal, logMaxVal, (logMaxVal - logMinVal)/this.binCount).map(v => Math.pow(10, v)); 
        }
        let histGen = d3.histogram().domain([this.minVal, this.maxVal]).thresholds(thresholds);
        this.bins = histGen(this.points.map(function(p, i) { return self.getPointVal(p,i); }));
    }
}
