const moduleName = 'plot-toolkit';
const name = "lineGaussianLayer";
module.exports.name = name;

var AbstractLayer = require('../line-layer');
var AbstractLayerController = AbstractLayer.klass;
var component = AbstractLayer.component;
require('./style.css');

var layerCollection = require('../layer-collection');
angular.module(moduleName).component(name, component({
    controller: LGLayerController, 
    template: require('./template.html'),
    bindings: {
        mean: "<",
        sigma: "<",
        resolution: "<",
        lineColorSecond: "<",
        lineWidthSecond: "<",
        lineDashSecond: "<"
    }
}));
function LGLayerController($scope, $timeout, $element) {
    let self = this;
    AbstractLayerController.call(this, $timeout, $element, $scope);

    this.watchProperties = this.watchProperties.concat([
        "mean",
        "sigma",
        "resolution",
        "lineColorSecond",
        "lineWidthSecond",
        "lineDashSecond"
    ]);

    this.defaultBindings = function() {
        this.lineColorSecond = this.lineColorSecond || this.lineColor || "purple";
        this.lineDashSecond = this.lineDashSecond || this.lineDash || "5 3";
        this.lineWidthSecond = this.lineWidthSecond || this.lineWidth || 1;
        this.resolution = this.resolution || 500;
        this.mean = this.mean || 0;
        this.sigma = this.sigma || 1;
        this.lineStyleDefault();
    }
    this.doAutofit = function() {
        this.updateMaxY(d3.max(this.getData(), function(point) {return self.getY(point);}));
    }

    this.watchProperties = this.watchProperties.concat(['mean', 'sigma', 
        'resolution', 'lineColorSecond', 'lineWidthSecond', 'lineDashSecond'
    ]);
    this.getLine = function() {
        let transform = this.getTransform();
        let orthoTransform = this.getOrthoTransform();
        let line = d3.line().curve(d3.curveBasis)
            .x((d, i) => {
                return transform(self.getX(d));
            })
            .y((d, i) => {
                return orthoTransform(self.getY(d));
            });
        return line;
    }

    //taken from Jason Davies science library
    // https://github.com/jasondavies/science.js/
    function gaussian(x, mean, sigma) {
        let gaussianConstant = 1 / Math.sqrt(2 * Math.PI);

        x = (x - mean) / sigma;
        return gaussianConstant * Math.exp(-.5 * x * x) / sigma;
    }

    function normal(mean, sigma) {
        let x = 0, y = 0, rds, c;
        let xSample;
        do {
            do {
                x = (Math.random() * 2 - 1);
                y = (Math.random() * 2 - 1);
                rds = x * x + y * y;
            } while (rds == 0 || rds > 1);
            c = Math.sqrt(-2 * Math.log(rds) / rds); // Box-Muller transform
            xSample = mean + sigma * x * c;
        } while ((xSample - self.minVal)*(xSample - self.maxVal) > 0 );

        return xSample;
    }

    function getData(numSamples, mean, sigma) {
        let x,y;
        let data = new Array();
        x = self.minVal;
        y = gaussian(x, mean, sigma);
        data.push({x, y});
        x = self.maxVal;
        y = gaussian(x, mean, sigma);
        data.push({x, y});
        for (let i = 0; i < numSamples; i++) {
            x = normal(mean, sigma); // calc random draw from normal dist
            y = gaussian(x, mean, sigma) // calc prob of rand draw
            data.push({x, y});
        };
        // need to sort for plotting
        data.sort(function (x, y) {
            return x.x - y.x;
        });
        return data;
    }
    
    this.getData = function() {
        return getData(this.resolution, this.mean, this.sigma);
    }
    this.$onInit = function() {
        this.doInit();
    }
    this.sigmaLineStyle = function() {
        return {
            "stroke": this.lineColorSecond,
            "stroke-width": this.lineWidthSecond,
            "stroke-dasharray": this.lineDashSecond
        }
    }
}
