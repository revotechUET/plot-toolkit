const axisLayer = require('./axis-layer');
const barchartLayer = require('./barchart-layer');
const lineLayer = require('./line-bin-layer');
const linePointLayer = require('./line-point-layer');
const lineFLayer = require('./line-formula-layer');
const lineGaussianLayer = require('./line-gaussian-layer');
const controlMarkerLayer = require('./control-marker-layer');

var app = angular.module('myApp', [
    axisLayer.name, 
    barchartLayer.name, 
    lineLayer.name,
    linePointLayer.name,
    lineFLayer.name,
    lineGaussianLayer.name,
    controlMarkerLayer.name
]);

app.controller('myController', function($scope) {
    $scope.pointSet = [1,2,3,4,5,6,7,8,9,10, 11, 12];
    $scope.accessor = function(d) {
        return d - 1;
    }
    $scope.colorize = function(bin) {
        const colors = ['white', 'green', 'blue', 'pink', 'white'];
        const fColor = d3.scaleQuantize().domain([1, 12]).range(colors);
        return fColor((bin.x1 + bin.x0)/2);
    }
    $scope.stacks = [function(bin, idx) {
        return 1.5;
    }];
    let thresholds = d3.range(0, 12, 12/12);
    let histogramGen = d3.histogram().domain([0, 12]).thresholds(thresholds);
    $scope.bins = histogramGen( $scope.pointSet );
    $scope.getX = (bin,idx) => {return (bin.x0 + bin.x1)/2;}
    $scope.getY = (bin,idx) => {return bin.length;}
    $scope.getYCumulative = function(bin,idx) {
        let sum = 0;
        for (let i = 0; i <= idx; i++) {
            sum += $scope.bins[i].length;
        }
        return sum;
    }
    $scope.markers = 
        [{value:2, hColor: 'green'},
        {value:6, hColor: 'blue'},
        {value:8, hColor: 'pink'},
        {value:10, hColor: 'white'}];

    $scope.getMarkerVal = function(x, idx) {
        if (!x) return;
        return x.value;
    }
    $scope.setMarkerVal = function(x, idx, value) {
        if (!x) return;
        x.value = value;
    }
    $scope.hydralicColor = function(bin) {
        let x = (bin.x1 + bin.x0)/2;
        let i;
        for (i = 0; i < $scope.markers.length; i++) {
            if (x < $scope.markers[i].value) break;
        }
        if (i === 0) return 'white';
        return $scope.markers[i-1].hColor;
    }
});
