const moduleName = 'plot-toolkit';
angular.module(moduleName, [ 'ngclipboard', /*'katexView'*/ ])
    .directive('ngOffset', function() {
        return function(scope, elem, attrs) {
            attrs.$observe('ngOffset', function(o) {
                let offset = JSON.parse(o);
                elem.attr('transform', `translate(${offset.x}, ${offset.y})`);
            });
        };
    })
    .directive("ngPoints", function() {
        return function(scope, elem, attrs) {
            attrs.$observe("ngPoints", function(pointsS) {
                let pointsStr = "";
                let points = JSON.parse(pointsS);
                for (let p of points) {
                    pointsStr += `${p.x},${p.y} `;
                }
                elem.attr("points", pointsStr);
            });
        }
    })
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
    .directive('ngR', function() {
        return function(scope, elem, attrs) {
            attrs.$observe('ngR', function(r){
                elem.attr('r', r);
            });
        };
    })
    .directive('ngStroke', function() {
        return function(scope, elem, attrs) {
            attrs.$observe('ngStroke', function(strokeColor){
                elem.attr('stroke', strokeColor);
            });
        };
    })
    .directive('ngStrokeWidth', function() {
        return function(scope, elem, attrs) {
            attrs.$observe('ngStrokeWidth', function(strokeWidth){
                elem.attr('stroke-width', strokeWidth);
            });
        };
    });
