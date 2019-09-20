module.exports.name = name;
module.exports.klass = InteractiveLayerController;
module.exports.component = buildComponent;

var AbstractLayer = require('../abstract-layer-2d');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;

let bestNumberFormat = require('../common').bestNumberFormat;

require('./style.css');
function buildComponent(componentData) {
    componentData.template = componentData.template || require('./template.html');
    componentData.bindings = {
        fillStyle: "<",
        draggerStyle: '<',
        strokeStyle: "<",
        strokeWidth: "<",
        editPointIdx: "<",
        points: "<",
        getXFn: "<",
        getYFn: "<",
        setXFn: "<",
        setYFn: "<",
        getPointLabel: "<",
        mode : "<",
        showVertex: '<',
        showCoordinates: '<',
        ...componentData.bindings
    }
    return component(componentData);
}

function InteractiveLayerController($timeout, $element, $scope) {
    let self = this;
    let dragging = false;
    AbstractLayerController.call(this, $timeout, $element, $scope);
    this.watchProperties = this.watchProperties.concat([ "fillStyle", "strokeStyle", 'strokeWidth' ]);
    this.interactiveBindings = function() {
        this.twoDBindings();
        this.fillStyle = this.fillStyle || "rgba(255,255, 64, 0.5)";
        this.strokeStyle = this.strokeStyle || "teal";
        this.strokeWidth = this.strokeWidth || "2";
        this.editPointIdx = this.editPointIdx || null;
        this.mode = this.mode || null;
        this.points = this.points || [];
        this.getXFn = this.getXFn || function(point, idx, points) {
            return point.x;
        }
        this.getYFn = this.getYFn || function(point, idx, points) {
            return point.y;
        }
        this.setXFn = this.setXFn || function(point, value) {
            point.x = value;
        }
        this.setYFn = this.setYFn || function(point, value) {
            point.y = value;
        }
        this.getPointLabel = this.getPointLabel || function(point) {
            return `${point.x}-${point.y}`;
        }
    }

    this.mouseDownAddPoint = function($event) {
    }
    this.mouseDownDelPoint = function($event) {
    }

    this.onMouseDown = function($event) {
        this.shiftKey = $event.shiftKey;
        this.altKey = $event.altKey;
        if ($event.altKey) {
            this.mouseDownDelPoint($event);
        }
        else if ($event.shiftKey) {
            this.mouseDownAddPoint($event);
        }
        else {
            dragging = true;
            let transformX = this.getTransform().invert;
            let transformY = this.getOrthoTransform().invert;
            startX = $event.offsetX;
            startY = $event.offsetY;
        }
    }
    this.onMouseUp = function($event) {
        this.shiftKey = $event.shiftKey;
        this.altKey = $event.altKey;
        dragging = false;
    }
    this.onMouseMove = function($event) {
        this.shiftKey = $event.shiftKey;
        this.altKey = $event.altKey;
        this.onMouseMoveTooltip($event);
        if (dragging) {
            this.mouseMoveDragging($event);
        }
        else {
            this.mouseMoveNoDragging($event);
        }
        return true;
    }
    this.mouseMoveDragging = function($event) {
        if (!_.isFinite(this.editPointIdx)) return;
        if (!this.points[this.editPointIdx]) return;
        let transformX = this.getTransform();
        let transformY = this.getOrthoTransform();
        let offsetX = $event.offsetX - startX;
        let offsetY = $event.offsetY - startY;
        let pixelX = transformX(self.getXFn(this.points[this.editPointIdx], this.editPointIdx, this.points));
        let pixelY = transformY(self.getYFn(this.points[this.editPointIdx], this.editPointIdx, this.points));
        pixelX += offsetX;
        pixelY += offsetY;
        this.setXFn(this.points[this.editPointIdx], transformX.invert(pixelX));
        this.setYFn(this.points[this.editPointIdx], transformY.invert(pixelY));
        //this.points[this.editPointIdx].x = transformX.invert(pixelX);
        //this.points[this.editPointIdx].y = transformY.invert(pixelY);
        startX = $event.offsetX;
        startY = $event.offsetY;
    }
    let invertX, invertY;
    this.mouseMoveNoDragging = function($event) {
        //$event.stopPropagation();
        //$event.preventDefault();
        let transformX = this.getTransform();
        let transformY = this.getOrthoTransform();
        let x = $event.offsetX;
        let y = $event.offsetY;
        invertX = transformX.invert(x);
        invertY = transformY.invert(y);
        this.editPointIdx = null;
        let result = findClosest({x,y}, this.points, transformX, transformY);
        if (result.distance < 10) {
            $timeout(() => {
                self.editPointIdx = result.idx;
            });
        }
    }
    this.onMouseLeave = function($event) {
        this.onMouseLeaveTooltip($event);
        this.shiftKey = $event.shiftKey;
        this.altKey = $event.altKey;
        dragging = false;
        invertX = undefined;
        invertY = undefined;
    }
    this.vertexOffset = function(p, index, points) {
        let transformX = this.getTransform();
        let transformY = this.getOrthoTransform();
        let toRet = {
            x: transformX(self.getXFn(p, index, points)),
            y: transformY(self.getYFn(p, index, points))
        };
        return toRet;
    }
    let vertexStyleList = [];
    this.vertexStyle = function(p, idx) {
        let vertexStyle = vertexStyleList[idx];
        if (!vertexStyle) {
            vertexStyleList[idx] = {
                fill: 'transparent',
                stroke: 'blue',
                "stroke-width": 1
            };
            vertexStyle = vertexStyleList[idx];
        }
        return vertexStyle;
    }
    this.draggerStyleFn = function() {
        if (this.editPointIdx === null || !this.mode) 
            return {
                fill: 'none', stroke: 'none'
            }
        return {
            fill: "lightblue",
            stroke: 'blue',
            "stroke-width": 1
        }
    }
//    const draggerOffset = {}
    this.draggerOffset = function() {
        if (!_.isFinite(this.editPointIdx)) return {x: 0, y: 0};
        let transformX = this.getTransform();
        let transformY = this.getOrthoTransform();
        let toRet = {
            x: transformX(self.getXFn(this.points[this.editPointIdx], this.editPointIdx, this.points)),
            y: transformY(self.getYFn(this.points[this.editPointIdx], this.editPointIdx, this.points))
        };
        return toRet;
    }
    this.getPoints = function() {
        let transformX = this.getTransform();
        //let range = d3.extent(transformX.range());
        //if (range[1] - range[0] < 0.000001) {
            //transformX = this.getTransform(true);
        //}
        let transformY = this.getOrthoTransform();
        //range = d3.extent(transformY.range());
        //if (range[1] - range[0] < 0.000001) {
            //transformY = this.getOrthoTransform(true);
        //}
        let pointCoordinates = this.points.map((p, idx) => ({
            x: transformX(self.getXFn(p, idx, this.points)),
            y: transformY(self.getYFn(p, idx, this.points))
        }));
        return JSON.stringify(pointCoordinates);
    }
    this.getCoordinates = function() {
        if (this.mode && _.isFinite(this.editPointIdx)) {
            let p = this.points[this.editPointIdx];
            return `X:${bestNumberFormat(self.getXFn(p, this.editPointIdx, this.points))}
            Y:${bestNumberFormat(self.getYFn(p, this.editPointIdx, this.points))}`
        } else {
            if (!invertX || !invertY)
                return '';
            return `X:${bestNumberFormat(invertX)}
            Y:${bestNumberFormat(invertY)}`;
        }
    }
    this.distance = distance;
    function distance(p1, p2, tX, tY) {
        return Math.sqrt((p1.x - tX(self.getXFn(p2.p, p2.idx, this.points)))**2 + (p1.y - tY(self.getYFn(p2.p, p2.idx, this.points)))**2);
    }
    this.findClosest = findClosest;
    function findClosest(p, points, tX, tY) {
        let minDistance = 100000;
        let minIdx = undefined;
        for (let i = 0; i < points.length; i++) {
            let d = distance(p, {p:points[i], idx:i}, tX, tY);
            if (d < minDistance) {
                minDistance = d;
                minIdx = i;
            }
        }
        return {
            distance: minDistance,
            idx : minIdx
        }
    }
}
