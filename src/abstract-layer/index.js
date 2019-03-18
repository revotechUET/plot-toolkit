module.exports = {
    component: component,
    klass: AbstractLayer
}
require('./style.css');
var ResizeSensor = require('resize-sensor');
var debounce = require('lodash').debounce;
var merge = require('lodash').merge;
function component(componentData) {
    return {
        controller: componentData.controller,
        controllerAs: componentData.controllerAs || 'self',
        template: componentData.template,
        bindings: {
            padding: '<',
            hPadding: '<',
            vPadding: '<',
            lPadding: '<',
            rPadding: '<',
            tPadding: '<',
            bPadding: '<',
            minVal: '<',
            maxVal: '<',
            getters: "<",
            setters: "<",
            loga: '<',
            axisDirection: '<',
            placement: '<',
            ...componentData.bindings
        },
        require: {
            layerCollection: "?^^layerCollection"
        }
    }
}
function bindings(bindings) {
    var defaultBindings = {
        padding: '<',
        hPadding: '<',
        vPadding: '<',
        lPadding: '<',
        rPadding: '<',
        tPadding: '<',
        bPadding: '<',
        minVal: '<',
        maxVal: '<',
        getters: "<",
        setters: "<",
        loga: '<',
        axisDirection: '<',
        placement: '<'
    }
    return merge(defaultBindings,bindings);
}
function AbstractLayer($timeout, $element, $scope) {
    let self = this;

    this.leftPadding = function(){
        return this.lPadding || this.hPadding || this.padding || (this.layerCollection || {}).lPadding || 0;
    }
    this.rightPadding = function(){
        return this.rPadding || this.hPadding || this.padding || (this.layerCollection || {}).rPadding || 0;
    }
    this.topPadding = function() {
        return this.tPadding || this.vPadding || this.padding || (this.layerCollection || {}).tPadding || 0;
    }
    this.bottomPadding = function() {
        return this.bPadding || this.vPadding || this.padding || (this.layerCollection || {}).bPadding || 0;
    }
    this.paddingStr = function () {
        return `${this.topPadding()}px ${this.rightPadding()}px ${this.bottomPadding()}px ${this.leftPadding()}px`
    }
    this.parentWidth = function() {
        return $element.parent().width();
    }
    this.parentHeight = function() {
        return $element.parent().height();
    }
    this.contentWidth = function(update) {
        if (!this.width || update )
            this.width = $element.find('svg,canvas').width();
        return this.width;
    }
    this.contentHeight = function(update) {
        if (!this.height || update )
            this.height = $element.find('svg,canvas').height();
        return this.height;
    }
    this.domain = function() {
        return [this.minVal, this.maxVal];
    }

    this.range = function() {
        let range;
        switch (this.axisDirection) {
            case 'right':
                range = [0, this.contentWidth()];break;
            case 'left':
                range = [this.contentWidth(), 0];break;
            case 'up':
                range = [this.contentHeight(), 0];break;
            case 'down':
                range = [0, this.contentHeight()];break;
            default:
                range = [0, this.contentWidth()];
        }
        return range;
    }
    this.getTransform = function(update) {
        if (!this._transform || update) {
            if (update) {
                this.contentWidth(true);
                this.contentHeight(true);
            }
            this._transform = (this.loga?d3.scaleLog():d3.scaleLinear())
                                .domain(this.domain())
                                .range(this.range());
        }
        return this._transform;
    }
    this.defaultBindings = function(){
        console.error("Abstract default bindings");
    }
    this.drawOptimized = debounce(function() {
        $timeout(function () {
            for( let f of self.watchCallbacks) f();
            self.getTransform(true);
            self.preDraw();
            self.draw();
            self.postDraw();
        });
    }, 300);
    
    this.watchCallbacks = [];
    this.watchProperties = [
        'minVal',
        'maxVal',
        'loga',
        'axisDirection',
        'placement'
    ]
    this.registerWatch = function(callback) {
        this.watchCallbacks.push(callback);
    }
    this.activateWatch = function() {
        $scope.$watch(function() {
            return self.watchProperties.map((prop) => (self[prop]));
            //return [self.minVal, self.maxVal, self.loga, self.axisDirection];
        }, function() {
            // for( let f of self.watchCallbacks) f();
            // self.getTransform(true);
            self.drawOptimized();
        }, true);
    }
    this.doInit = function() {
        this.update = {};
        this.axisDirection = this.axisDirection || "right";
        this.placement = this.placement || 0;
        
        this.defaultBindings();

        let holder = $element.first();
        new ResizeSensor(holder[0], function() {
            // for( let f of self.watchCallbacks) f();
            // self.getTransform(true);
            self.drawOptimized();
        });
        if (this.layerCollection) {
            // getters
            for (let key of Object.keys(this.getters || {})) {
                this.layerCollection.$scope.$on(this.getters[key], function(evt, value){
                    evt.stopPropagation();
                    evt.preventDefault();
                    self._update = true;
                    self[key] = value;
                });
            }
            // setters
            for (let key of Object.keys(this.setters || {})) {
                this.update[key] = function(newVal) {
                    self.layerCollection.$scope.$emit(self.setters[key], newVal);
                }
            }
        }
        this.activateWatch();
        this.preDraw();
        this.draw();
        this.postDraw()
    }
    this.preDraw = function(){
    }
    this.draw = function() {
        console.error("Abstract draw");
    }
    this.postDraw = function(){
    }
    this.onMouseMoveTooltip = function($event) {
        if (this.layerCollection) this.layerCollection.tooltip(true, 'abc');
    }
    this.onMouseLeaveTooltip = function($event) {
        if (this.layerCollection) this.layerCollection.tooltip(false);
    }
}
