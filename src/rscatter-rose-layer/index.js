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
    rscatterLabelsAxes: '<',
    rscatterLabelsAxesCount: '<',
    rscatterBgrGrid: '<',
    rscatterBgrGridRadialsCount: '<',
    rscatterBackgroundGridCirclesCount: '<',
    rscatterScaleMax: '<',
    rscatterScaleMin: '<'
  }
}));

function RscatterRoseLayerController($scope, $element, $timeout) {
  let self = this;
  AbstractLayerController.call(this, $scope, $element, $timeout);

  this.watchProperties = this.watchProperties.concat([
    'rscatterData',
    'tickmarks',
    'tickmarksSize',
    'rscatterLabelsAxes',
    'rscatterLabelsAxesCount',
    'rscatterBgrGrid',
    'rscatterBgrGridRadialsCount',
    'rscatterBackgroundGridCirclesCount',
    'rscatterScaleMax',
    'rscatterScaleMin'
  ]);

  this.$onInit = function() {
    self.doInit($scope, $element, $timeout);
  }

  function getRscatterCfg() {
    return {
      id: self.getPlotId(),
      data: self.rscatterData || [],
      options: {
        labelsAxes: self.rscatterLabelsAxes != undefined ? self.rscatterLabelsAxes : '',
        tickmarks: self.tickmarks || 'circle',
        tickmarksSize: _.isFinite(self.tickmarksSize) ? self.tickmarksSize : 10,
        labelsAxesCount: _.isFinite(self.rscatterLabelsAxesCount) ? self.rscatterLabelsAxesCount : 3,
        backgroundGrid: self.rscatterBgrGrid != undefined ? self.rscatterBgrGrid : true,
        backgroundGridRadialsCount: _.isFinite(self.rscatterBgrGridRadialsCount) ? self.rscatterBgrGridRadialsCount : 5,
        backgroundGridCirclesCount: _.isFinite(self.rscatterBackgroundGridCirclesCount) ? self.rscatterBackgroundGridCirclesCount : 3,
        scaleMax: self.rscatterScaleMax || null,
        scaleMin: self.rscatterScaleMin || 0,
        scaleDecimals: self.scaleDecimals || null
      }
    }
  }

  this.parentDraw = this.draw;
  this.draw = function() {
    self.parentDraw.call(this);
    if (!self.rscatterData || !self.rscatterData.length) return;
    $timeout(() => {
      self.scatter = new RGraph.RScatter(getRscatterCfg());
      self.scatter.draw();
      !self.labelsAxesBgr && $element.find('.rgraph_domtext_wrapper span').addClass('no-labels-axes-bgr');
    })
  }
}
