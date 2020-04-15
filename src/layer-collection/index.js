const moduleName = 'plot-toolkit';
const name = 'layerCollection';
module.exports.name = name;
require('./style.css');

angular.module(moduleName)
    .component(name, {
        controller: LayerCollectionController,
        controllerAs: 'self',
        template: require('./template.html'),
        bindings: {
            padding: '<',
            hPadding: '<',
            vPadding: '<',
            lPadding: '<',
            rPadding: '<',
            tPadding: '<',
            bPadding: '<'
        },
        transclude: true
    });
LayerCollectionController.$inject = ['$timeout', '$element', '$scope'];
function LayerCollectionController($timeout, $element, $scope) {
    let self = this;
    this.notiOpacity = 0;
    this.msg = "";

    this.tooltips = [];

    this.$onInit = function() {
        this.lPadding = this.leftPadding();
        this.rPadding = this.rightPadding();
        this.tPadding = this.topPadding();
        this.bPadding = this.bottomPadding();
        this.$timeout = $timeout;
        this.$scope = $scope;
    }
    this.leftPadding = function(){
        return this.lPadding || this.hPadding || this.padding || 0;
    }
    this.rightPadding = function(){
        return this.rPadding || this.hPadding || this.padding || 0;
    }
    this.topPadding = function() {
        return this.tPadding || this.vPadding || this.padding || 0;
    }
    this.bottomPadding = function() {
        return this.bPadding || this.vPadding || this.padding || 0;
    }
    this.notify = function(msg, iconClass, duration) {
        $timeout(() => {
            this.notiOpacity = 1;
            this.iconClass = iconClass || this.iconClass || 'ti-check';
            this.msg = msg;
        });
        $timeout(() => {
            this.notiOpacity = 0;
        }, duration || 1000);
    }
    this.tooltip = function(on, msg) {
        if (on) {
            this.tooltips[0] = msg;
        }
        else {
            this.tooltips.length = 0;
        }
    }
    this.tooltipStyle = function() {
        return {
            bottom: 0, left: 0
        }
    }
}
