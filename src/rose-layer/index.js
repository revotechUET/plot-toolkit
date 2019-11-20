require('./style.less');
const moduleName = 'plot-toolkit';
const name = "roseLayer";
module.exports = {
    name: name,
    component: component,
    klass: RoseLayerController
}

function component(componentData = {}) {
    return {
        controller: componentData.controller || RoseLayerController,
        controllerAs: componentData.controllerAs || 'self',
        template: componentData.template || require('./template.html'),
        bindings: {
            plotId: '<',
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
            textAccessible: '<',
            tooltips: '<',
            scaleMax: '<',
            scaleMin: '<',
            scaleDecimals: '<',
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
            self.redraw();
        }, true);
    }
    this.doInit = function() {
        self.cvsWidth = self.cvsWidth || 600;
        self.cvsHeight = self.cvsHeight || 400;
        self.activateWatch();
    }
    this.$onInit = function() {
        self.doInit();
    }

    function getRoseCfg() {
        return {
            id: getPlotId(),
            data: self.roseData || [],
			options: {
				axes: self.showAxes || false,
                backgroundGrid: self.backgroundGrid != undefined ? self.backgroundGrid : true,
                backgroundGridCirclesCount: self.backgroundGridCirclesCount || 3,
				colors: self.roseColors || ['rgba(255,0,0,0.5)', 'rgba(255,255,0,0.5)', 'rgba(0,255,255,0.5)', 'rgb(0,255,0)', 'gray', 'blue', 'rgb(255,128,255)', 'green', 'pink', 'gray', 'aqua'],
				colorsStroke: self.colorsStroke || 'black',
				margin: self.arcMargin || 0,
				labels: self.labels || null,
				labelsPosition: self.labelsPosition || 'center',
				labelsAxesColor: self.labelsAxesColor || null,
				labelsAxesCount: self.labelsAxesCount || 3,
                textAccessible: self.textAccessible != undefined ? self.textAccessible : true,
				tooltips: self.tooltips || null,
				scaleMax: self.scaleMax || 90,
				scaleMin: self.scaleMin || 0,
				scaleDecimals: self.scaleDecimals || null
			}
        }
    }

    this.redraw = function()  {
        if (!self.roseData || !self.roseData.length) return;
        $timeout(() => {
            RGraph.clear(document.getElementById(getPlotId()));
            self.rose = new RGraph.Rose(getRoseCfg());
            self.rose.draw();
        })
    }

    this.getPlotId = getPlotId;
    function getPlotId() {
        return self.plotId || 'cvs';
    }
}
