const moduleName = 'plot-toolkit';
const name = "overlayLineLayer";
module.exports.name = name;

var AbstractLayer = require('../abstract-layer-2d');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;

const CanvasHelper = require('../canvas-helper');
var layerCollection = require('../layer-collection');
function buildComponent(componentData) {
    componentData.controller = componentData.controller || OverlayLineController;
    componentData.template = componentData.template || require('./template.html');
    componentData.bindings = {
        overlayLineSpec: '<',
        ...componentData.bindings
    }
    return component(componentData);
}
angular.module(moduleName).component(name, buildComponent({}));
function OverlayLineController($scope, $timeout, $element) {
    let self = this;
    AbstractLayerController.call(this, $timeout, $element, $scope);
    this.watchProperties = this.watchProperties.concat([
        "overlayLineSpec",
    ]);
    let _canvas;
    function getCanvas() {
        if (_canvas) return _canvas;
        _canvas = $element.find('canvas')[0];
        return _canvas;
    }
    this.draw = function() {
        let transform = this.getTransform();
        let othorTransform = this.getOrthoTransform();
        canvas = getCanvas();
        canvas.width = this.contentWidth();
        canvas.height = this.contentHeight();
        if (canvas.width === 0 || canvas.height === 0) return;
        let ctx = canvas.getContext('2d');
        let penDefaultCfg = {
            size: 10,
            fillStyle: 'Yellow',
            strokeStyle: 'Red',
            strokeWidth: 2
        }
        let getTextCfg = (point) => ({
            textSize: 15,
            textContent: point.type,
            fillStyle: point.color || 'Black',
        }) 
        let helper = new CanvasHelper(ctx, penDefaultCfg);
        self.overlayLineSpec.lines.forEach(line => {
            ctx.beginPath();
            ctx.fillStyle = penDefaultCfg.fillStyle;
            ctx.strokeStyle = line.color.replace('Dk', 'Dark') || getLineColor(line.names) || penDefaultCfg.strokeStyle;
            ctx.lineWidth =  penDefaultCfg.strokeWidth;
            line.data.forEach((point, pIdx, pointArr) => {
                let startX = transform(parseFloat(point.x));
                let startY = othorTransform(parseFloat(point.y));
                if (pIdx == 0) {
                    helper.textSymbol(startX - 20, startY - 20, getTextCfg({
                        type: line.names,
                        color: line.color.replace('Dk', 'Dark') || getLineColor(line.names) 
                    }));
                }
                if (!pointArr[pIdx + 1]) {
                    helper.circle(startX, startY );
                    if (!isNaN(point.type)) {
                        helper.textSymbol(startX + 7, startY + 5, getTextCfg(point));
                    }
                    ctx.stroke();
                    return;
                }
                let endX = transform(parseFloat(pointArr[pIdx + 1].x));
                let endY = othorTransform(parseFloat(pointArr[pIdx + 1].y));
                ctx.moveTo(startX, startY);
                helper.circle(startX, startY );
                if (!isNaN(point.type)) {
                    helper.textSymbol(startX + 7, startY + 5, getTextCfg({
                        ...point,
                    }));
                }
                ctx.lineTo(endX, endY);
                ctx.stroke();
            })
        })
    }
    function getLineColor(name) {
        let color;
        if (name == 'SS') color = 'Green';                               
        if (name == 'LS') color = 'Blue';                                
        if (name == 'DOL') color = 'Pink';                               
        return color;
    }
    this.defaultBindings = function() {
        self.overlayLineSpec = self.overlayLineSpec || {};
    }
    this.$onInit = function() {
        this.doInit();
    }
}
