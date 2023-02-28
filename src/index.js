import './plot-toolkit-module';
export const AxisLayer = require('./axis-layer');
export const BarchartLayer = require('./barchart-layer');
export const CanvasBarchartLayer = require('./canvas-barchart-layer');
export const HistogramLayer = require('./histogram-layer');
export const LineBinLayer = require('./line-bin-layer');
export const LinePointLayer = require('./line-point-layer');
export const LineFormulaLayer = require('./line-formula-layer');
export const LineGaussianLayer = require('./line-gaussian-layer');
export const ControlMarkerLayer = require('./control-marker-layer');
export const ScatterLayer = require('./scatter-layer');
export const SegmentLayer = require('./segment-layer');
export const ClickLayer = require('./click-layer');
export const PolygonLayer = require('./polygon-layer');
export const OverlayLineLayer = require('./overlay-line-layer');
export const TooltipLayer = require('./tooltip-layer');
export const heatMap = require('./heat-map');
export const curveViewLayer = require('./curve-view-layer');
export const RGraph = {
    core: require('../vendor/RGraph.common.core'),
    rose: require('../vendor/RGraph.rose'),
    rscatter: require('../vendor/RGraph.rscatter')
};
export const RoseLayer = require('./rose-layer');
export const RscatterRoseLayer = require('./rscatter-rose-layer');
window.mathGeo = require('./common');
