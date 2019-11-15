require('./plot-toolkit-module');
module.exports = {
    AxisLayer: require('./axis-layer'),
    BarchartLayer : require('./barchart-layer'),
    CanvasBarchartLayer : require('./canvas-barchart-layer'),
    HistogramLayer : require('./histogram-layer'),
    LineBinLayer : require('./line-bin-layer'),
    LinePointLayer : require('./line-point-layer'),
    LineFormulaLayer : require('./line-formula-layer'),
    LineGaussianLayer : require('./line-gaussian-layer'),
    ControlMarkerLayer : require('./control-marker-layer'),
    ScatterLayer : require('./scatter-layer'),
    SegmentLayer : require('./segment-layer'),
    ClickLayer : require('./click-layer'),
    PolygonLayer : require('./polygon-layer'),
    OverlayLineLayer: require('./overlay-line-layer'),
    TooltipLayer: require('./tooltip-layer'),
    heatMap: require('./heat-map'),
    curveViewLayer: require('./curve-view-layer'),
    RGraph: {
        core: require('../vendor/RGraph.common.core'),
        rose: require('../vendor/RGraph.rose'),
        rscatter: require('../vendor/RGraph.rscatter')
    }
// 	,
//    LayerWrapper : require('./layer-wrapper'),
//    LayerArray : require('./layer-array')
}
window.mathGeo = require('./common');
