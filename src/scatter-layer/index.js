const moduleName = 'plot-toolkit';
const name = "scatterLayer";
module.exports.name = name;


var AbstractLayer = require('../abstract-layer-2d');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;

var isFinite = require("lodash").isFinite;

var layerCollection = require('../layer-collection');
var CanvasHelper = require('../canvas-helper');
angular.module(moduleName).component(name, component({
    controller: ScatterLayerController, 
    template: require('./template.html'),
    bindings: {
        myDataX: "<",
        myDataY: "<",
        colorFunc: "<",
        pointSizeFunc: "<",
        symbol: "<",
        symbolSize: "<",
        symbolFillStyle: "<",
        symbolStrokeStyle: "<",
        symbolStyle: "<",
        getVal: "<",
        getX: "<",
        getY: "<"
    }
}));

function ScatterLayerController($timeout, $element, $scope) {
    let self = this;
    AbstractLayerController.call(this, $timeout, $element, $scope);

    this.watchProperties = this.watchProperties.concat([
        "symbol",
        "symbolSize",
        "symbolFillStyle",
        "symbolStrokeStyle",
    ]);
    this.defaultBindings = function() {
        this.pointSizeFunc = checkFn(this.pointSizeFunc) || function(d, i) {return 10;};
        this.getX = checkFn(this.getX) || checkFn(this.getVal) || asIs;
        this.getY = checkFn(this.getY) || checkFn(this.getVal) || asIs;
        this.symbol = this.symbol || 'circle';
        this.symbolSize = this.symbolSize || 5;
        this.symbolFillStyle = this.symbolFillStyle || 'blue';
        this.symbolStrokeStyle = this.symbolStrokeStyle || 'blue';
        this.colorFunc = checkFn(this.colorFunc) || function (d, i) {
            return self.symbolFillStyle || "blue";
        };
    }
    this.$onInit = function() {
        $scope.$watch(function() {
            return self.myDataX;
        }, function() {
            self.getPoints(true);
            self.draw();
        });
        $scope.$watch(function() {
            return self.myDataY;
        }, function() {
            self.getPoints(true);
            self.draw();
        });
        this.doInit();
    }
    this.doAutofit = function() {
        this.updateMaxY(d3.max(this.myDataY, function(point) {return self.getY(point, i)}));
    }
    this.getPoints = function(update) {
        if (!update && this.points) return this.points;
        this.points = [];
        if (this.myDataX && this.myDataX.length && this.myDataY && this.myDataY.length) {
            let n = Math.max(this.myDataX.length, this.myDataY.length);
            for (let i = 0; i < n; i++) {
                let x = this.getX(this.myDataX[i], i);
                let y = this.getY(this.myDataY[i], i);
                if (isFinite(x) && isFinite(y)) {
                    this.points.push({
                        fillStyle: this.colorFunc({x, y}, i),
                        idx: i, x, y
                    });
                }
            }
        }
        return this.points;
    }
    let _canvas;
    function getCanvas() {
        if (_canvas) return _canvas;
        _canvas = $element.find('canvas')[0];
        return _canvas;
    }
    this.draw = function() {
        canvas = getCanvas();
        canvas.width = this.contentWidth();
        canvas.height = this.contentHeight();
        let ctx = canvas.getContext('2d');
        let transformX = this.getTransform();
        let transformY = this.getOrthoTransform();
        let symbolDefaultCfg = {
            size: this.symbolSize,
            fillStyle: this.symbolFillStyle,
            strokeStyle: this.symbolStrokeStyle,
            ...this.symbolStyle,
        }
        let helper = new CanvasHelper(ctx, symbolDefaultCfg);
        let plotFunc = helper[this.symbol.toLowerCase()];
        let points = this.getPoints();
        for (let p of points) {
            plotFunc.call(helper, transformX(p.x), transformY(p.y), {
                fillStyle: p.fillStyle,
            });
        }
    }
}
function asIs(d,i) {
    return d;
}
function checkFn(f) {
    return typeof(f) === "function" ? f : null;
}

