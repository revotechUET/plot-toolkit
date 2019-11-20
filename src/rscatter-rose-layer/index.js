require('./style.less');
const moduleName = 'plot-toolkit';
const name = "rscatterRoseLayer";
module.exports.name = name;


var AbstractLayer = require('../rose-layer');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;

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
        'rscatterData',
        'tickmarks',
        'tickmarksSize',
        'rscatterLabelsAxesCount',
        'rscatterBackgroundGridCirclesCount'
    ]);

    this.$onInit = function() {
        self.doInit($scope, $element, $timeout);
    }

    function getRscatterCfg() {
        return {
            id: self.getPlotId(),
            data: self.rscatterData || [],
            options: {
                labelsAxes: '',
                tickmarks: self.tickmarks || 'circle',
                tickmarksSize: self.tickmarksSize || 10,
                labelsAxesCount: self.rscatterLabelsAxesCount || 0,
                backgroundGridCirclesCount: self.rscatterBackgroundGridCirclesCount || 0,
				scaleMax: self.scaleMax || 90,
				scaleMin: self.scaleMin || 0,
				scaleDecimals: self.scaleDecimals || null
            }
        }
    }

    this.parentRedraw = this.redraw;
    this.redraw = function() {
        self.parentRedraw.call(this);
        if (!self.rscatterData || !self.rscatterData.length) return;
        $timeout(() => {
            self.scatter = new RGraph.RScatter(getRscatterCfg());
            self.scatter.draw();
        })
    }
}
