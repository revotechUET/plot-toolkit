const moduleName = 'plot-toolkit';
const name = 'barchartLayer';
module.exports.name = name;
require('./style.css');
//var AbstractLayer = require('../abstract-layer');
var AbstractLayer = require('../abstract-layer-2d');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;

var layerCollection = require('../layer-collection');
angular.module(moduleName)
    .directive('ngX', function() {
        return function(scope, elem, attrs) {
            attrs.$observe('ngX', function(x) {
                elem.attr('x', x);
            });
        };
    })
    .directive('ngY', function() {
        return function(scope, elem, attrs) {
            attrs.$observe('ngY', function(y) {
                elem.attr('y', y);
            });
        };
    })
    .directive('ngWidth', function() {
        return function(scope, elem, attrs) {
            attrs.$observe('ngWidth', function(width) {
                elem.attr('width', width);
            });
        };
    })
    .directive('ngHeight', function() {
        return function(scope, elem, attrs) {
            attrs.$observe('ngHeight', function(height) {
                elem.attr('height', height);
            });
        };
    })
    .directive('ngFill', function() {
        return function(scope, elem, attrs) {
            attrs.$observe('ngFill', function(fill){
                elem.attr('fill', fill);
            });
        };
    })
    .directive('ngOffset', function() {
        return function(scope, elem, attrs) {
            attrs.$observe('ngOffset', function(o) {
                let offset = JSON.parse(o);
                elem.attr('transform', `translate(${offset.x}, ${offset.y})`);
            });
        };
    })
    .directive('ngX1', function() {
        return function(scope, elem, attrs) {
            attrs.$observe('ngX1', function(fill){
                elem.attr('x1', fill);
            });
        };
    })
    .directive('ngX2', function() {
        return function(scope, elem, attrs) {
            attrs.$observe('ngX2', function(fill){
                elem.attr('x2', fill);
            });
        };
    })
    .directive('ngY1', function() {
        return function(scope, elem, attrs) {
            attrs.$observe('ngY1', function(fill){
                elem.attr('y1', fill);
            });
        };
    })
    .directive('ngY2', function() {
        return function(scope, elem, attrs) {
            attrs.$observe('ngY2', function(fill){
                elem.attr('y2', fill);
            });
        };
    })
    .component(name, component({
        controller: BarchartLayerController,
        template: require('./template.html'),
        bindings: {
            //minY: "<",
            //maxY: "<",
            bins: "<",
            binGap: "<",
            colorFunc: "<",
            stackFuncArray: "<",
            plotType: "<"
        }
    }));

function BarchartLayerController($timeout, $element, $scope) {
    let self = this;
    AbstractLayerController.call(this, $timeout, $element, $scope);
    this.$onInit = function() {
        this.doInit();
        $scope.$watch(() => [self.minX, self.maxX], () => {
            self.getTransform(true);
        }, true)
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
