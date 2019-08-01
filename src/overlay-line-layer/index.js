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
    function drawTick(startX, startY, endX, endY, length, helper, position) {
        let fullLength = Math.sqrt((startX - endX)**2 + (startY - endY)**2);
        let factor = Math.ceil(fullLength / length);
        let stopX = startX + (endX - startX)/factor;
        let stopY = startY + (endY - startY)/factor;
        let point1 = {x: startX, y: startY};
        let point2 = {x: stopX, y: stopY};
        let rotatePoint;
        if (position === 'start') {
            rotatePoint = {x: startX, y: startY};
        } else if (position === 'end') {
            rotatePoint = {x: endX, y: endY};
        } else {
            rotatePoint = {x: (startX + endX) / 2, y: (startY + endY) / 2};
        }
        moveToOrigin(point1, rotatePoint);
        moveToOrigin(point2, rotatePoint);
        rotate(point1);
        rotate(point2);
        moveToOriginInv(point1, rotatePoint);
        moveToOriginInv(point2, rotatePoint);
        helper.segment(point1, point2);
        function moveToOrigin(point, center) {
            point.x -= center.x;
            point.y -= center.y;
        }
        function moveToOriginInv(point, center) {
            point.x += center.x;
            point.y += center.y;
        }
        function rotate(point) {
            let x = point.x;
            let y = point.y;
            point.x = -y;
            point.y = x;
        }
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
            ctx.fillStyle = line.color.replace('Dk', 'Dark') || getLineColor(line.names) || penDefaultCfg.strokeStyle;
            ctx.strokeStyle = line.color.replace('Dk', 'Dark') || getLineColor(line.names) || penDefaultCfg.strokeStyle;
            ctx.lineWidth =  penDefaultCfg.strokeWidth;
            line.data.forEach((point, pIdx, pointArr) => {
                let startX = transform(parseFloat(point.x));
                let startY = othorTransform(parseFloat(point.y));
                if (!pointArr[pIdx + 1]) {
                    let preX = transform(parseFloat(pointArr[pIdx - 1].x));
                    let preY = othorTransform(parseFloat(pointArr[pIdx - 1].y));
                    let endX = preX + (startX - preX) * 2;
                    let endY = preY + (startY - preY) * 2;
                    drawTick(startX, startY, endX, endY, 10, helper, 'start');
                    if (!isNaN(point.type)) {
                        helper.textSymbol(startX + 7, startY + 5, getTextCfg(point));
                    }
                    ctx.stroke();
                    return;
                }
                let endX = transform(parseFloat(pointArr[pIdx + 1].x));
                let endY = othorTransform(parseFloat(pointArr[pIdx + 1].y));
                drawTick(startX, startY, endX, endY, 10, helper, 'start');
                ctx.moveTo(startX, startY);
                ctx.lineTo(endX, endY);
                if (pIdx == 0) {
                    helper.textSymbol(startX - 20, startY - 20, getTextCfg({
                        type: line.names,
                        color: line.color.replace('Dk', 'Dark') || getLineColor(line.names) 
                    }));
                }
                if (!isNaN(point.type)) {
                    helper.textSymbol(startX + 7, startY + 5, getTextCfg({
                        ...point,
                    }));
                }
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
