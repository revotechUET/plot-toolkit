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
            roseData: '<',
            roseColors: '<',
            labels: '<',
            labelsPosition: '<',
            tooltips: '<',
            labelsAxesColor: '<',
            labelsAxesCount: '<',
            colorStroke: '<',
            showAxes: '<',
            arcMargin: '<',
            scaleMax: '<',
            scaleDecimals: '<',
            backgroundGridCirclesCount: '<',
            cvsWidth: '<',
            cvsHeight: '<',
            ...((componentData || {}).bindings || {})
        }
    }
}

angular.module(moduleName).component(name, component());

function RoseLayerController($scope, $element, $timeout) {
    let self = this;
    this.canvasId = this.plotId || 'cvs';

    this.watchProperties = [
        'roseData',
        'roseColors',
        'labels',
        'labelsPosition',
        'tooltips',
        'labelsAxesColor',
        'labelsAxesCount',
        'colorStroke',
        'showAxes',
        'arcMargin',
        'scaleMax',
        'scaleDecimals',
        'backgroundGridCirclesCount'
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
            id: self.canvasId,
            data: self.roseData || [],
            options: {
                colors: self.roseColors || [],
                gutterBottom: 35,
                margin: self.arcMargin || 0,
                labels: self.labels || [],
                labelsAxes: 'n',
                textAccessible: false,
                tooltips: self.tooltips || false,
                axes: self.showAxes || false,
                labelsAxesColor: self.labelsAxesColor || 'red',
                labelsAxesCount: self.labelsAxesCount || 3,
                colorStroke: self.colorStroke || 'transprent',
                labelsPosition: self.labelsPosition || 'edge',
                scaleMax: self.scaleMax || null,
                scaleDecimals: self.scaleDecimals || 1,
                backgroundGridCirclesCount: self.backgroundGridCirclesCount || 3
            }
        }
    }

    this.redraw = function()  {
        if (!self.roseData || !self.roseData.length) return;
        $timeout(() => {
            RGraph.clear(document.getElementById(self.canvasId));
            self.rose = new RGraph.Rose(getRoseCfg());
            self.rose.draw();
        })
    }
}
