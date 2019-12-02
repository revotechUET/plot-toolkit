require('./style.less');
const moduleName = 'plot-toolkit';
const name = "roseLayer";
module.exports = {
  name: name,
  component: component,
  klass: RoseLayerController
}
let ResizeSensor = require('resize-sensor');
if (window.ResizeObserver) {
  // chrome only
  ResizeSensor = resizeSensor;
  function resizeSensor(element = document, callback = () => { }) {
    if (element instanceof $) element = element[0];
    this.element = element;
    this.callback = () => setTimeout(callback);

    this.resizeObserver = new ResizeObserver(this.callback)
    this.resizeObserver.observe(this.element);
    return this;
  }
  resizeSensor.prototype.detach = function () {
    this.resizeObserver.unobserve(this.element);
  }
}

function component(componentData = {}) {
  return {
    controller: componentData.controller || RoseLayerController,
    controllerAs: componentData.controllerAs || 'self',
    template: componentData.template || require('./template.html'),
    bindings: {
      plotId: '<',
      plotName: '<',
      plotInfo: '<',
      cvsWidth: '<',
      cvsHeight: '<',
      roseData: '<',
      showAxes: '<',
      backgroundGrid: '<',
      backgroundGridCirclesCount: '<',
      roseColors: '<',
      colorsStroke: '<',
      arcMargin: '<',
      labels: '<',
      labelsPosition: '<',
      labelsAxesColor: '<',
      labelsAxesCount: '<',
      labelsAxes: '<',
      textAccessible: '<',
      tooltips: '<',
      scaleMax: '<',
      scaleMin: '<',
      scaleDecimals: '<',
      labelsAxesBgr: '<',
      ...((componentData || {}).bindings || {})
    }
  }
}

angular.module(moduleName).component(name, component());

function RoseLayerController($scope, $element, $timeout) {
  let self = this;

  this.watchProperties = [
    'roseData',
    'showAxes',
    'backgroundGrid',
    'backgroundGridCirclesCount',
    'roseColors',
    'colorsStroke',
    'arcMargin',
    'labels',
    'labelsPosition',
    'labelsAxesColor',
    'labelsAxesCount',
    'labelsAxes',
    'textAccessible',
    'tooltips',
    'scaleMax',
    'scaleMin',
    'scaleDecimals'
  ]
  this.activateWatch = function() {
    $scope.$watch(function() {
      return self.watchProperties.map((prop) => (self[prop]));
    }, function() {
      self.draw();
    }, true);

    $scope.$watch(function() {
      return `${self.getCvsWidth()}-${self.getCvsHeight()}`;
    }, function() {
      self.draw();
    });
  }
  this.doInit = function() {
    let holder = $element.first();
    new ResizeSensor(holder[0], function() {
      self.draw();
    });
    self.activateWatch();
  }
  this.$onInit = function() {
    self.doInit();
  }

  this.getCvsWidth = function() {
    if (self.cvsWidth) return self.cvsWidth;
    let parentElemWidth = $element.find(`#${getPlotId()}_rgraph_domtext_wrapper`).parent().width();
    return parentElemWidth || 600;
  }
  this.getCvsHeight = function() {
    if (self.cvsHeight) return self.cvsHeight;
    let parentElemHeight = $element.find(`#${getPlotId()}_rgraph_domtext_wrapper`).parent().height();
    return parentElemHeight || 400;
  }

  function getRoseCfg() {
    return {
      id: getPlotId(),
      data: self.roseData || [],
      options: {
        axes: self.showAxes || false,
        backgroundGrid: self.backgroundGrid != undefined ? self.backgroundGrid : true,
        backgroundGridCirclesCount: _.isFinite(self.backgroundGridCirclesCount) ? self.backgroundGridCirclesCount : 3,
        colors: self.roseColors || ['rgba(255,0,0,0.5)', 'rgba(255,255,0,0.5)', 'rgba(0,255,255,0.5)', 'rgb(0,255,0)', 'gray', 'blue', 'rgb(255,128,255)', 'green', 'pink', 'gray', 'aqua'],
        colorsStroke: self.colorsStroke || 'black',
        margin: self.arcMargin || 0,
        labels: self.labels || null,
        labelsPosition: self.labelsPosition || 'center',
        labelsAxesColor: self.labelsAxesColor || null,
        labelsAxesCount: _.isFinite(self.labelsAxesCount) ? self.labelsAxesCount : 3,
        labelsAxes: self.labelsAxes != undefined ? self.labelsAxes : 'n',
        textAccessible: self.textAccessible != undefined ? self.textAccessible : true,
        tooltips: self.tooltips || null,
        scaleMax: self.scaleMax || null,
        scaleMin: self.scaleMin || 0,
        scaleDecimals: self.scaleDecimals || null
      }
    }
  }

  this.draw = function()  {
    if (!self.roseData || !self.roseData.length) return;
    $timeout(() => {
      if (document.getElementById(getPlotId())) {
        RGraph.clear(document.getElementById(getPlotId()));
      }
      self.rose = new RGraph.Rose(getRoseCfg());
      self.rose.draw();
      !self.labelsAxesBgr && $element.find('.rgraph_domtext_wrapper span').addClass('no-labels-axes-bgr');
    })
  }

  this.getPlotId = getPlotId;
  function getPlotId() {
    return self.plotId || 'cvs';
  }

  this.getPlotName = getPlotName;
  function getPlotName() {
    return self.plotName || 'New Rose Plot';
  }

  this.getPlotInfo = getPlotInfo;
  function getPlotInfo() {
    return self.plotInfo;
  }
}
