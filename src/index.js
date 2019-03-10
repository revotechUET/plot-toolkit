const moduleName = 'plot-toolkit';
angular.module(moduleName, ['ngclipboard']);
module.exports = {
    AxisLayer: require('./axis-layer'),
    BarchartLayer : require('./barchart-layer'),
    LineBinLayer : require('./line-bin-layer'),
    LinePointLayer : require('./line-point-layer'),
    LineFormulaLayer : require('./line-formula-layer'),
    LineGaussianLayer : require('./line-gaussian-layer'),
    ControlMarkerLayer : require('./control-marker-layer')
}
