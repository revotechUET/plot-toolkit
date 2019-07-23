const moduleName = 'plot-toolkit';
const name = 'canvasBarchartLayer';
module.exports.name = name;
module.exports.klass = CanvasBarchartLayerController;
module.exports.component = buildComponent;

require('./style.css');
const CanvasHelper = require('../canvas-helper');
//var AbstractLayer = require('../abstract-layer');
var AbstractLayer = require('../abstract-layer-2d');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;

function buildComponent(componentData) {
    componentData.controller = componentData.controller || CanvasBarchartLayerController;
    componentData.template = componentData.template || require('./template.html');
    componentData.bindings = {
        bins: "<",
        binGap: "<",
        colorFunc: "<",
        multiple: "<",
        stackFuncArray: "<",
        plotType: "<",
        ...componentData.bindings
    }
    return component(componentData);
}
var layerCollection = require('../layer-collection');
angular.module(moduleName)
    .component(name, buildComponent({ }));

function CanvasBarchartLayerController($timeout, $element, $scope) {
    let self = this;
    AbstractLayerController.call(this, $timeout, $element, $scope);

    this.watchProperties = this.watchProperties.concat([ "binGap", "plotType" ]);

    this.$onInit = function() {
        this.doInit();
        $timeout(() => {
            self.bins = self.bins;
        })
    }
    this.defaultBindings = function() {
        this.twoDBindings(this);
        //this.minY = this.minY || 0;
        //this.maxY = this.maxY || 100;
        this.nBins = this.nBins || 5;
        this.binGap = this.binGap === undefined ? 3 : this.binGap;
        this.stackFuncArray = this.stackFuncArray || [];
        this.colorFunc = typeof(this.colorFunc) === "function" ? this.colorFunc: () => "blue";
    }
    this.doAutofit = function() {
        this.updateMaxY(d3.max(this.bins, function(bin, binIdx) { 
            let stackLevel = d3.sum(self.stackFuncArray, (f) => f(bin, binIdx));
            return bin.length + stackLevel; 
        }));
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
        let symbolDefaultCfg = {
            size: this.symbolSize,
            fillStyle: 'blue',
            strokeStyle: 'red'
        }
        let helper = new CanvasHelper(ctx, symbolDefaultCfg);
        if (!self.multiple) {
            canvasPlot(self.bins, helper);
        }
        else {
            let stacks = [];
            for (let i = 0; i < self.bins.length; i++) {
                canvasPlot(self.bins[i], helper, stacks);
                for (let j = 0; j < self.bins[i].length; j++){
                    stacks[j] = stacks[j] || 0;
                    stacks[j] += self.bins[i][j].length;
                }
            }
        }
        function canvasPlot(bins, helper, stacks) {
            for (let i = 0; i < bins.length; i++) {
                let bin = bins[i];
                let stack = (stacks || [])[i] || 0;
                let w = self.binWidth(bin);
                let h = self.binHeight(bin);
                let offset = self.binOffsets(bin, i, stack);
                let x = offset.x + self.binGap/2;
                let y = offset.y;
                let color = self.binColor(bin, i, bins);
                helper.rect(x, y, w, h, {
                    strokeStyle: self.multiple?'#fff':'#000',
                    fillStyle: color
                });
            }
        }
    }
    this.binOffsets = function(bin, binIdx, stack) {
        let transform = this.getTransform();
        let orthoTransform = this.getOrthoTransform();
        let stackLevel = stack || 0;
        let x = transform(bin.x0);
        if (self.minVal > self.maxVal) {
            x = x - self.binWidth(bin, binIdx);
        }
        let y = orthoTransform(bin.length + stackLevel);
        return { x:x, y:y };
    }
    this.binWidth = function(bin, binIdx) {
        let transform = this.getTransform();
        let width = Math.abs(transform(bin.x0) - transform(bin.x1));
        return width >= this.binGap ? width - this.binGap : 0;
    }
    this.binHeight = function(bin, binIdx) {
        let orthoTransform = this.getOrthoTransform();
        let height = this.contentHeight() - orthoTransform(bin.length);
        return height;
    }
    this.binColor = function(bin, binIdx, bins) {
        return this.colorFunc(bin, bins, self.params);
    }
}
