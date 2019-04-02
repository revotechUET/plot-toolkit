module.exports = {
    component: component,
    klass: AbstractLayer2D
}
var AbstractLayer = require('../abstract-layer');
var AbstractLayerController = AbstractLayer.klass;
var AbstractLayerComponent = AbstractLayer.component;

function component(componentData) {
    componentData.bindings = {
        minY: "<",
        maxY: "<",
        minDrawY: "<",
        maxDrawY: "<",
        orthoLoga: "<",
        autofit: "<",
        ...componentData.bindings
    }
    return AbstractLayerComponent(componentData);
}
function AbstractLayer2D($timeout, $element, $scope) {
    let self = this;
    AbstractLayerController.call(this, $timeout, $element, $scope);

    this.watchProperties = this.watchProperties.concat([
        "minY",
        "maxY",
        "minDrawY",
        "maxDrawY",
        "orthoLoga",
    ]);
    this.twoDBindings = function() {
        this.minY = this.minY || 0;
        this.maxY = this.maxY || 100;
        this.minDrawY = this.minDrawY || this.minY;
        this.maxDrawY = this.maxDrawY || this.maxY;
    }

    this.registerWatch(function() {
        self.getOrthoTransform(true);
    });
    /*this.twoDRegisterWatch = function() {
        this.registerWatch(function() {
            self.getOrthoTransform(true);
            self.drawOptimized();
        });
    }
    let superDoInit = this.doInit;
    this.doInit = function() {
        this.twoDRegisterWatch();
        superDoInit.call(this);
    }*/
    this.orthoRange = function() {
        let range;
        switch (this.axisDirection) {
            case 'right':
            case 'left':
                range = [this.contentHeight(), 0];break;
            case 'up':
            case 'down':
                range = [0, this.contentWidth()];break;
            default:
                range = [this.contentHeight(), 0];
        }
        return range;
    }
    this.getOrthoTransform = function(update) {
        if (!this._otransform || update) {
            if (update) {
                this.contentWidth(true);
                this.contentHeight(true);
            }
            this._otransform = (this.orthoLoga?d3.scaleLog():d3.scaleLinear())
                                .domain(this.orthoDomain())
                                .range(this.orthoRange());
        }
        return this._otransform;
    }
    this.orthoDomain = function() {
        return [this.minY, this.maxY];
    }
    // this.orthoRange = function() {
    //     return [this.contentHeight(), 0];
    // }
    this.updateMaxY = function(newVal) {
        this.maxY = newVal;
        if (this.update['maxY']) 
            this.update['maxY'](newVal);
    }
    this.preDraw = function() {
        if (self.autofit) {
            self.doAutofit();
        }
    }
    this.doAutofit = function() {
        console.error('Abstract doAutofit');
    }
}
