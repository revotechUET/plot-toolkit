const moduleName = 'plot-toolkit';
const name = 'curveViewLayer';
module.exports.name = name;
module.exports.klass = curveViewLayerController;
module.exports.component = buildComponent;

require('./style.css');
const AbstractLayer = require('../abstract-layer-2d');
const AbstractLayerController = AbstractLayer.klass;
const component = AbstractLayer.component;

function buildComponent(componentData) {
    componentData.controller = componentData.controller || curveViewLayerController;
    componentData.template = componentData.template || require('./template.html');
    componentData.bindings = {
        curveData: "<",
        ...componentData.bindings
    }
    return component(componentData);
}
angular.module(moduleName)
    .component(name, buildComponent({ }));
curveViewLayerController.$inject = ['$timeout', '$element', '$scope'];
function curveViewLayerController($timeout, $element, $scope) {
    const self = this;
    AbstractLayerController.call(this, $timeout, $element, $scope);
    this.watchProperties = this.watchProperties.concat(["curveData"]);
    this.$onInit = function() {
        this.doInit();
    }

    let _canvas;
    function getCanvas() {
        if (_canvas) return _canvas;
        _canvas = $element.find('canvas')[0];
        return _canvas;
    }

    this.defaultBindings = function() {
        this.twoDBindings(this);
    }

    this.draw = function() {
        console.log(self.curveData);
        let canvas = getCanvas();
        canvas.width = self.contentWidth();
        canvas.height = self.contentHeight();
        let ctx = canvas.getContext('2d');
        const tfX = self.getTransform();
        const tfY = self.getOrthoTransform();
        ctx.strokeStyle = 'black';
        ctx.beginPath();
        self.curveData.forEach((datum, i) => {
            if (i == 0) {
                ctx.moveTo(tfX(datum.x), tfY(datum.y));
            } else {
                ctx.lineTo(tfX(datum.x), tfY(datum.y));
            }
        })
        ctx.stroke();
    }
}