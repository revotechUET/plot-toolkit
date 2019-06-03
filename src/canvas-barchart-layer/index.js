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
        for (let i = 0; i < self.bins.length; i++) {
            let bin = self.bins[i];
            let w = self.binWidth(bin);
            let h = self.binHeight(bin);
            let offset = self.binOffsets(bin, i);
            let x = offset.x + self.binGap/2;
            let y = offset.y;
            let color = self.binColor(bin);
            helper.rect(x, y, w, h, {
                strokeStyle: 'black',
                fillStyle: color
            });
        }
    }
/*
    this.draw1 = function() {
        let bars = d3.select($element.find('g.layer')[0]).selectAll('g');
        bars.attr("transform", function(bin, idx) {
                let offset = self.binOffsets(bin, idx);
                return `translate(${offset.x}, ${offset.y})`;
            })
                .select('rect')
                    .attr('x', self.binGap/2)
                    .attr('y', 0)
                    .attr('width', function(bin, idx) {
                        let width = self.binWidth(bin, idx);
                        return `${width}px`;
                    })
                    .attr('height', function(bin, idx) {
                        let height = self.binHeight(bin, idx);
                        return `${height}px`;
                    })
                    .attr('fill', function(bin, idx) {
                        return self.colorFunc(bin);
                    });
        bars.data(self.bins).enter()
            .append('g').attr("transform", function(bin, idx) {
                let offset = self.binOffsets(bin, idx);
                return `translate(${offset.x}, ${offset.y})`;
            })
                .append('rect')
                    .attr('x', self.binGap/2)
                    .attr('y', 0)
                    .attr('width', function(bin, idx) {
                        let width = self.binWidth(bin, idx);
                        return `${width}px`;
                    })
                    .attr('height', function(bin, idx) {
                        let height = self.binHeight(bin, idx);
                        return `${height}px`;
                    })
                    .attr('fill', function(bin, idx) {
                        return self.colorFunc(bin);
                    });
        bars.exit().remove();
    }
*/
    this.binOffsets = function(bin, binIdx) {
        let transform = this.getTransform();
        let orthoTransform = this.getOrthoTransform();
        let stackLevel = d3.sum(self.stackFuncArray, (f) => f(bin, binIdx));
        let x = transform(bin.x0);
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
    this.binColor = function(bin, binIdx) {
        return this.colorFunc(bin, self.bins, self.params);
    }
}
