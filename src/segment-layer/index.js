const moduleName = 'plot-toolkit';
const name = 'segmentLayer';
module.exports.name = name;

let common = require('../common');
let findLinearEqn = common.findLinearEqn;
let parseFormulaLatex = common.parseFormulaLatex;
var AbstractLayer = require('../interactive-layer');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;
const _ = require('lodash');

require('./style.css');
var layerCollection = require('../layer-collection');
angular.module(moduleName)
    .component(name, component({
        controller: SegmentLayerController,
        template: require('./template.html'),
        bindings: {
            eqnOffsets: "<",
            showEquation: "<",
            onEqnChanged: "<"
        }
    }));

function SegmentLayerController($timeout, $element, $scope) {
    let self = this;
    let dragging = false;
    AbstractLayerController.call(this, $timeout, $element, $scope);

    this.watchProperties = this.watchProperties.concat([
        "eqnOffsets"
    ]);
    this.$onInit = function() {
        this.doInit();
        $scope.$watch(function() {
            return self.points;
        }, function() {
            showEquation();
        }, true);
    }
    this.defaultBindings = function() {
        this.interactiveBindings();
        this.eqnOffsets = this.eqnOffsets || [0,0];
    }
    this.doAutofit = function() { }
    this.draw = function() { }
    this.mouseDownAddPoint = function($event) {
        let transformX = this.getTransform();
        let transformY = this.getOrthoTransform();
        let x = $event.offsetX;
        let y = $event.offsetY;
        let result = this.findClosest({x,y}, this.points, transformX, transformY);
        if (!_.isFinite(result.idx)) {
            this.points = [{x:transformX.invert(x), y:transformY.invert(y)}];
        }
        else if (this.points.length === 1) {
            this.points.push({x:transformX.invert(x), y:transformY.invert(y)});
        }
        else {
            this.points.splice(result.idx, 1, {x:transformX.invert(x), y:transformY.invert(y)});
        }
    }
    this.mouseDownDelPoint = function($event) {
        if (_.isFinite(this.editPointIdx)) {
            this.points.splice(this.editPointIdx, 1);
            this.editPointIdx = undefined;
        }
    }
    this.calcEquation = function() {
        if (this.points.length !== 2) return "";
        else {
            let formula = findLinearEqn(this.points[0], this.points[1], self.loga, self.orthoLoga);
            let latex = parseFormulaLatex(formula);
            self.onEqnChanged && self.onEqnChanged(formula);
            return latex;
        }
    }
    this.eqnStyle = function() {
        return {
            transform: 'translate(' + this.eqnOffsets[0] + ", " + this.eqnOffsets[1] + ")",
            color: this.strokeStyle
        }
    }
    this.eqnCopySuccess = function() {
        console.log("Copy success");
        if (this.layerCollection) {
            this.layerCollection.notify("Coppied", 'ti-clip', 1000);
        }
    }
    function showEquation() {
        let html = katex.renderToString(self.calcEquation(), {throwOnError: false});
        $element.find('.equation').empty().append(html);
    }
    this.registerWatch(function() {
        showEquation();
    });
}
