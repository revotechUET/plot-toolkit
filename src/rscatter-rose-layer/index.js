const moduleName = 'plot-toolkit';
const name = "rscatterRoseLayer";
module.exports.name = name;


var AbstractLayer = require('../rose-layer');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;

var isFinite = require("lodash").isFinite;

var CanvasHelper = require('../canvas-helper');
angular.module(moduleName).component(name, component({
    controller: RscatterRoseLayerController, 
    bindings: {
        rscatterData: '<',
        tickmarks: '<',
        tickmarksSize: '<',
        rscatterLabelsAxesCount: '<',
        rscatterBackgroundGridCirclesCount: '<'
    }
}));

function RscatterRoseLayerController($scope, $element, $timeout) {
    let self = this;
    AbstractLayerController.call(this, $scope, $element, $timeout);

    this.watchProperties = this.watchProperties.concat([
        'rscatterData'
    ]);

    this.$onInit = function() {
        self.doInit($scope, $element, $timeout);
    }

    function getRscatterCfg() {
        return {
            id: self.canvasId,
            data: self.rscatterData || [],
            options: {
                labelsAxes: 'n',
                tickmarks: self.tickmarks || 'circle',
                tickmarksSize: self.tickmarksSize || 10,
                labelsAxesCount: self.rscatterLabelsAxesCount || 0,
                backgroundGridCirclesCount: self.rscatterBackgroundGridCirclesCount || 0,
                scaleMax: self.scaleMax
            }
        }
    }

    this.parentRedraw = this.redraw;
    this.redraw = function() {
        self.parentRedraw.call(this);
        if (!self.rscatterData || !self.rscatterData.length) return;
        self.scatter = new RGraph.RScatter(getRscatterCfg());
        $timeout(() => {
            self.scatter.draw();
        })
    }
}
