const moduleName = 'plot-toolkit';
const name = "scatterLayer";
module.exports.name = name;

var AbstractLayer = require('../abstract-layer-2d');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;

var isFinite = require("lodash").isFinite;

var layerCollection = require('../layer-collection');
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
        this.colorFunc = checkFn(this.colorFunc) || function(d,i) {return "blue";};
        this.pointSizeFunc = checkFn(this.pointSizeFunc) || function(d, i) {return 10;};
        this.getX = checkFn(this.getX) || checkFn(this.getVal) || asIs;
        this.getY = checkFn(this.getY) || checkFn(this.getVal) || asIs;
        this.symbol = this.symbol || 'circle';
        this.symbolSize = this.symbolSize || 5;
        this.symbolFillStyle = this.symbolFillStyle || 'blue';
        this.symbolStrokeStyle = this.symbolStrokeStyle || 'blue';
    }
    this.$onInit = function() {
        $scope.$watch(function() {
            return self.myDataX;
        }, function() {
            self.getPoints(true);
        });
        $scope.$watch(function() {
            return self.myDataY;
        }, function() {
            self.getPoints(true);
        });
        this.doInit();
    }
    this.doAutofit = function() {
        this.updateMaxY(d3.max(this.myDataY, function(point) {return self.getY(point, i)}));
    }
    this.getPoints = function(update) {
        if (!update && this.points) return this.points;
        if (this.myDataX && this.myDataX.length && this.myDataY && this.myDataY.length) {
            this.points = []
            let n = Math.max(this.myDataX.length, this.myDataY.length);
            for (let i = 0; i < n; i++) {
                let x = this.getX(this.myDataX[i], i);
                let y = this.getY(this.myDataY[i], i);
                if (isFinite(x) && isFinite(y)) {
                    this.points.push({
                        idx: i, x, y
                    });
                }
            }
            return this.points;
        }
        return [];
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
        }
        let helper = new CanvasHelper(ctx, symbolDefaultCfg);
        let plotFunc = helper[this.symbol.toLowerCase()];
        let points = this.getPoints();
        for (let p of points) {
            plotFunc.call(helper, transformX(p.x), transformY(p.y), {});
        }
    }
}
function asIs(d,i) {
    return d;
}
function checkFn(f) {
    return typeof(f) === "function" ? f : null;
}

/* ************ CANVAS HELPER *************** */
function CanvasHelper(ctx, config) {
    this.ctx = ctx;
    this.fillStyle = config.fillStyle || 'transparent';
    this.strokeStyle = config.strokeStyle || 'blue';
    this.lineWidth = config.lineWidth || 1;
    this.lineDash = config.lineDash || null;
    this.size = config.size/4 || 2;
}

CanvasHelper.prototype.circle = function(x, y, opts = {}) {
    prepare(this, opts);
    let r = opts.pointSize || this.size;
    this.ctx.arc(x, y, r, 0, Math.PI*2, true);
    draw(this);
}

CanvasHelper.prototype.square = function(x, y, opts = {}) {
    prepare(this, opts);
    let a = opts.pointSize || this.size;
    this.ctx.rect(x-a, y-a, a*2, a*2);
    draw(this);
}

CanvasHelper.prototype.cross = function(x, y, opts = {}) {
    prepare(this, opts);
    let d = opts.pointSize || this.size;
    this.ctx.moveTo(x-d, y-d);
    this.ctx.lineTo(x+d, y+d);
    this.ctx.moveTo(x-d, y+d);
    this.ctx.lineTo(x+d, y-d);
    draw(this);
}

CanvasHelper.prototype.diamond = function(x, y, opts = {}) {
    prepare(this, opts);
    let d = opts.pointSize || this.size;
    this.ctx.moveTo(x-d, y);
    this.ctx.lineTo(x, y+d);
    this.ctx.lineTo(x+d, y);
    this.ctx.lineTo(x, y-d);
    this.ctx.closePath();
    draw(this);
}

CanvasHelper.prototype.plus = function(x, y, opts = {}) {
    prepare(this, opts);
    let d = opts.pointSize || this.size;
    this.ctx.moveTo(x-d, y);
    this.ctx.lineTo(x+d, y);
    this.ctx.moveTo(x, y-d);
    this.ctx.lineTo(x, y+d);
    draw(this);
}

CanvasHelper.prototype.star = function(x, y, opts = {}) {
    prepare(this, opts);
    let d = opts.pointSize || this.size;
    this.ctx.translate(x, y);
    for (let i = 0; i < 3; i ++) {
        this.ctx.rotate(Math.PI / 3);
        this.ctx.moveTo(-d, 0)
        this.ctx.lineTo(+d, 0);
    }
    draw(this);
}

CanvasHelper.prototype.textSymbol = function (x, y, opts = {}) {
    if (!opts.textContent) return;
    let s = opts.textSize;
    this.ctx.save();
    this.ctx.font = `${s}px ${opts.fontFamily || 'Verdana'}`;
    this.ctx.textBaseline = opts.verticalAlign || 'top';
    this.ctx.fillStyle = opts.fillStyle || this.fillStyle;
    this.ctx.fillText(opts.textContent, x, y);
    this.ctx.restore();
}
function prepare(canvas, opts = {}) {
    let ctx = canvas.ctx;
    ctx.save();

    ctx.beginPath();
    ctx.fillStyle = opts.fillStyle || canvas.fillStyle;
    ctx.strokeStyle = opts.strokeStyle || canvas.strokeStyle;
    ctx.lineWidth = opts.lineWidth || canvas.lineWidth;
    let lineDash = opts.lineDash || canvas.lineDash;
    if (lineDash)
        ctx.setLineDash(lineDash);
}

function draw(canvas) {
    let ctx = canvas.ctx;
    if (canvas.strokeStyle != 'none') ctx.stroke();
    if (canvas.fillStyle != 'none') ctx.fill();
    ctx.restore();
}
