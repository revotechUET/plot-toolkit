const moduleName = 'plot-toolkit';
const name = 'barchartLayer';
module.exports.name = name;
module.exports.klass = BarchartLayerController;
module.exports.component = buildComponent;

require('./style.css');
//var AbstractLayer = require('../abstract-layer');
var AbstractLayer = require('../abstract-layer-2d');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;

function buildComponent(componentData) {
    componentData.controller = componentData.controller || BarchartLayerController;
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

function BarchartLayerController($timeout, $element, $scope) {
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
    this.draw = function() {
    }
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
        return this.colorFunc(bin);
    }
}
