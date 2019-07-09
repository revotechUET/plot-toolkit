module.exports = {
    component: component,
    klass: AbstractLayer
}
require('./style.css');
var ResizeSensor = require('resize-sensor');
if (window.ResizeObserver) {
    // chrome only
    ResizeSensor = resizeSensor;
    function resizeSensor(element = document, callback = () => { }) {
        if (element instanceof $) element = element[0];
        this.element = element;
        this.callback = () => setTimeout(callback);

        this.resizeObserver = new ResizeObserver(this.callback)
        this.resizeObserver.observe(this.element);
        return this;
    }
    resizeSensor.prototype.detach = function () {
        this.resizeObserver.unobserve(this.element);
    }
}

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
            minDraw: '<',
            maxDraw: '<',
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
        minDraw: '<',
        maxDraw: '<',
        getters: "<",
        setters: "<",
        loga: '<',
        axisDirection: '<',
        placement: '<',
        params: '<'
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
    this.drawOptimized = debounce(function () {
        if ($scope.$$destroyed) return;
        if (self.loga) {
            if (self.minVal <= 0) self.minVal = 0.01;
            if (self.maxVal <= 0) self.maxVal = 0.01;
        } else {
            self.minVal = _.isFinite(self.originalMinVal) ? self.originalMinVal : self.minVal;
            self.maxVal = _.isFinite(self.originalMaxVal) ? self.originalMaxVal : self.maxVal;
        }
        for( let f of self.watchCallbacks) f();
        self.getTransform(true);
        self.preDraw();
        self.draw();
        self.postDraw();
        if (!$scope.$$phase) $scope.$digest();
    }, 300);
    
    this.watchCallbacks = [];
    this.watchProperties = [
        'minVal',
        'maxVal',
        'minDraw',
        'maxDraw',
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
            self.originalMinVal = self.minVal != 0.01 ? self.minVal : self.originalMinVal;
            self.originalMaxVal = self.maxVal != 0.01 ? self.maxVal : self.originalMaxVal;
            self.drawOptimized();
        }, true);
        $scope.$on('jpanel-resized', function() {
            self.drawOptimized();
        });
    }
    this.doInit = function() {
        this.update = {};
        this.axisDirection = this.axisDirection || "right";
        this.placement = this.placement || 0;

        this.minVal = this.minVal || 0;
        this.maxVal = _.isFinite(this.maxVal) ? this.maxVal : 100;
        this.minDraw = this.minDraw || this.minVal;
        this.maxDraw = this.maxDraw || this.maxVal;
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
        holder.hide();
        this.activateWatch();
        this.getTransform(true);
        this.preDraw();
        this.draw();
        this.postDraw();
        holder.show();
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
