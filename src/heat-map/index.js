const moduleName = 'plot-toolkit';
const name = 'heatMap';
module.exports.name = name;
module.exports.klass = heatMapController;
module.exports.component = buildComponent;

require('./style.css');
const AbstractLayer = require('../abstract-layer-2d');
const AbstractLayerController = AbstractLayer.klass;
const component = AbstractLayer.component;
var CanvasHelper = require('../canvas-helper');

function buildComponent(componentData) {
    componentData.controller = componentData.controller || heatMapController;
    componentData.template = componentData.template || require('./template.html');
    componentData.bindings = {
        nRow: "<",
        nCol: "<",
        cellColorFn: "<",
        cellValueFn: "<",
        ...componentData.bindings
    }
    return component(componentData);
}
angular.module(moduleName)
    .component(name, buildComponent({ }));

function heatMapController($timeout, $element, $scope) {
    const self = this;
    AbstractLayerController.call(this, $timeout, $element, $scope);
    this.watchProperties = this.watchProperties.concat(["nRow", "nCol", "cellColorFn", "cellValueFn"]);
    this.$onInit = function() {
        this.doInit();
    }

    let _canvas;
    function getCanvas() {
        if (_canvas) return _canvas;
        _canvas = $element.find('canvas')[0];
        return _canvas;
    }

    this.defaultBindings = function() {
        this.twoDBindings(this);
        this.nRow = this.nRow || 0;
        this.nCol = this.nCol || 0;
        this.cellColorFn = typeof(this.cellColorFn) == "function" ? this.cellColorFn : () => "transparent";
        this.cellValueFn = typeof(this.cellValueFn) == "function" ? this.cellValueFn : () => 0;
    }

    this.draw = function() {
        canvas = getCanvas();
        canvas.width = self.contentWidth();
        canvas.height = self.contentHeight();
        let ctx = canvas.getContext('2d');
        let helper = new CanvasHelper(ctx, {
            fillStyle: '#000',
            strokeStyle: '#000'
        });

        const textConfig = {
            textAlign: 'center',
            verticalAlign: 'middle',
            fontFamily: "Sans Serif",
            textSize: 14
        }
        if (canvas.width > 0 && canvas.height > 0 && self.nRow > 0 && self.nCol > 0) {
            const arr = new Array(self.nRow * self.nCol).fill(0);
            const xTf = self.getTransform();
            const yTf = self.getOrthoTransform();
            const xStep = (self.maxVal - self.minVal) / self.nCol;
            const yStep = (self.maxY - self.minY) / self.nRow;
            const xTicks = d3.range(self.minVal, self.maxVal + xStep, xStep);
            const yTicks = d3.range(self.minY, self.maxY + yStep, yStep);
            xTicks.forEach((xValue, iCol) => {
                yTicks.forEach((yValue, iRow) => {
                    const iCell = iRow * self.nCol + iCol;
                    const x = xTf(xValue);
                    const y = yTf(yValue);
                    const nextXValue = xTicks[iCol + 1];
                    const nextYValue = yTicks[iRow + 1];
                    if (nextXValue && nextYValue) {
                        arr[iCell] = self.cellValueFn(iCell, iRow, iCol);
                        const nextX = xTf(nextXValue);
                        const nextY = yTf(nextYValue);
                        const width = nextX - x;
                        const height = nextY - y;
                        helper.rect(x, y, width, height, { fillStyle: self.cellColorFn(iCell, iRow, iCol), strokeStyle: 'transparent' });
                        helper.textSymbol( x + width / 2, y + height / 2, { textContent: arr[iCell], ...textConfig });
                    }
                })
            })
        }
    }

}