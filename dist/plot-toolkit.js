/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/css-loader/dist/cjs.js!./abstract-layer/style.css":
/*!*************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./abstract-layer/style.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"axis-layer svg,\\nline-bin-layer svg,\\nline-point-layer svg,\\nline-formula-layer svg,\\nline-gaussian-layer svg,\\ncontrol-marker-layer svg,\\nhistogram-layer svg,\\nscatter-layer canvas,\\npolygon-layer svg,\\nsegment-layer svg,\\nclick-layer svg,\\nbarchart-layer svg,\\ncanvas-barchart-layer canvas\\n{\\n    position: absolute;\\n    top:0;\\n    left:0;\\n    overflow: visible;\\n    pointer-events: none;\\n}\\naxis-layer, axis-layer > div,\\nline-bin-layer, line-bin-layer > div,\\nline-point-layer, line-point-layer > div,\\nline-formula-layer, line-formula-layer > div,\\nline-gaussian-layer, line-gaussian-layer > div,\\ncontrol-marker-layer, control-marker-layer > div,\\nhistogram-layer, histogram-layer > div,\\nscatter-layer, scatter-layer > div,\\npolygon-layer, polygon-layer > div,\\nsegment-layer, segment-layer > div,\\nclick-layer, click-layer > div,\\nbarchart-layer, barchart-layer > div,\\ncanvas-barchart-layer, barchart-layer > div \\n{\\n    flex:1;\\n    display: flex;\\n}\\naxis-layer,\\nline-bin-layer,\\nline-point-layer,\\nline-formula-layer,\\nline-gaussian-layer,\\ncontrol-marker-layer,\\nhistogram-layer,\\nscatter-layer,\\npolygon-layer,\\nsegment-layer,\\nclick-layer,\\nbarchart-layer,\\ncanvas-barchart-layer\\n{\\n    position:static !important;\\n    pointer-events:none;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./abstract-layer/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./axis-layer/style.css":
/*!*********************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./axis-layer/style.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"axis-layer .layer .tick line {\\n    /* stroke: rgba(34, 139, 34, 0.5); */\\n    stroke: #333;\\n    stroke-width: 0.7;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./axis-layer/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./barchart-layer/style.css":
/*!*************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./barchart-layer/style.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"barchart-layer svg rect {\\n    stroke: gray;\\n    stroke-width: 0.3;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./barchart-layer/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./canvas-barchart-layer/style.css":
/*!********************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./canvas-barchart-layer/style.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"canvas-barchart-layer svg rect {\\n    stroke: gray;\\n    stroke-width: 0.3;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./canvas-barchart-layer/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./click-layer/style.css":
/*!**********************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./click-layer/style.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"click-layer svg.clickable {\\n    pointer-events:all;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./click-layer/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./control-marker-layer/style.css":
/*!*******************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./control-marker-layer/style.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"control-marker-layer svg > g{\\n    pointer-events: all;\\n}\\ncontrol-marker-layer svg {\\n    pointer-events: all;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./control-marker-layer/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./interactive-layer/style.css":
/*!****************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./interactive-layer/style.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"segment-layer svg.edit-point,\\npolygon-layer svg.edit-point \\n{\\n    background-color: rgba(128, 128, 255, 0.5);\\n    cursor: crosshair;\\n    pointer-events: all;\\n    z-index: 2;\\n}\\nsegment-layer svg.edit-point.del-point,\\npolygon-layer svg.edit-point.del-point \\n{\\n    cursor: alias;\\n}\\nsegment-layer svg.edit-point.add-point,\\npolygon-layer svg.edit-point.add-point \\n{\\n    cursor: copy;\\n}\\nsegment-layer div.status,\\npolygon-layer div.status\\n{\\n    position: absolute;\\n    bottom: 0;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./interactive-layer/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./layer-collection/style.css":
/*!***************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./layer-collection/style.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"layer-collection, layer-collection > div {\\n    display: flex;\\n    flex: 1;\\n    width: 100%;\\n}\\nlayer-collection div.notification {\\n    display: block;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    bottom: 0;\\n    right: 0;\\n    pointer-events:none;\\n}\\nlayer-collection div.notification > div {\\n    background-color: rgba(32,32,32,0.5);\\n    width: 70px;\\n    height: 65px;\\n    font-size: 200%;\\n    color: white;\\n    text-align: center;\\n    border-radius: 15px;\\n    padding-top: 5px;\\n    position: absolute;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%, -50%);\\n    transition: opacity 1s ease-in-out;\\n}\\nlayer-collection div.tooltip\\n{\\n    display: inline-block;\\n    width: auto;\\n    position: absolute;\\n    pointer-events:none;\\n    background-color: rgba(32,32,32,0.5);\\n    color: white;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./layer-collection/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./line-formula-layer/style.css":
/*!*****************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./line-formula-layer/style.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"line-formula-layer div.equation-holder {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: auto;\\n    cursor: pointer;\\n    pointer-events: all;\\n    z-index: 1;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./line-formula-layer/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./line-gaussian-layer/style.css":
/*!******************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./line-gaussian-layer/style.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./line-gaussian-layer/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./line-layer/style.css":
/*!*********************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./line-layer/style.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./line-layer/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./segment-layer/style.css":
/*!************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./segment-layer/style.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"segment-layer div.equation {\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    width: auto;\\n    cursor: pointer;\\n    pointer-events: all;\\n    z-index: 1;\\n}\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./segment-layer/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "../node_modules/lodash/lodash.js":
/*!****************************************************************************!*\
  !*** delegated ./node_modules/lodash/lodash.js from dll-reference library ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(1);\n\n//# sourceURL=webpack:///delegated_./node_modules/lodash/lodash.js_from_dll-reference_library?");

/***/ }),

/***/ "../node_modules/resize-sensor/ResizeSensor.min.js":
/*!*********************************************************************************************!*\
  !*** delegated ./node_modules/resize-sensor/ResizeSensor.min.js from dll-reference library ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = (__webpack_require__(/*! dll-reference library */ \"dll-reference library\"))(4);\n\n//# sourceURL=webpack:///delegated_./node_modules/resize-sensor/ResizeSensor.min.js_from_dll-reference_library?");

/***/ }),

/***/ "../node_modules/style-loader/lib/addStyles.js":
/*!*****************************************************!*\
  !*** ../node_modules/style-loader/lib/addStyles.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"../node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///../node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "../node_modules/style-loader/lib/urls.js":
/*!************************************************!*\
  !*** ../node_modules/style-loader/lib/urls.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///../node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./abstract-layer-2d/index.js":
/*!************************************!*\
  !*** ./abstract-layer-2d/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n    component: component,\n    klass: AbstractLayer2D\n}\nvar AbstractLayer = __webpack_require__(/*! ../abstract-layer */ \"./abstract-layer/index.js\");\nvar AbstractLayerController = AbstractLayer.klass;\nvar AbstractLayerComponent = AbstractLayer.component;\n\nfunction component(componentData) {\n    componentData.bindings = {\n        minY: \"<\",\n        maxY: \"<\",\n        minDrawY: \"<\",\n        maxDrawY: \"<\",\n        orthoLoga: \"<\",\n        autofit: \"<\",\n        ...componentData.bindings\n    }\n    return AbstractLayerComponent(componentData);\n}\nfunction AbstractLayer2D($timeout, $element, $scope) {\n    let self = this;\n    AbstractLayerController.call(this, $timeout, $element, $scope);\n\n    this.watchProperties = this.watchProperties.concat([\n        \"minY\",\n        \"maxY\",\n        \"minDrawY\",\n        \"maxDrawY\",\n        \"orthoLoga\",\n    ]);\n    this.twoDBindings = function() {\n        this.minY = this.minY || 0;\n        this.maxY = this.maxY || 100;\n        this.minDrawY = this.minDrawY || this.minY;\n        this.maxDrawY = this.maxDrawY || this.maxY;\n    }\n\n    this.registerWatch(function() {\n        if (self.orthoLoga) {\n            if (self.minY === 0) self.minY = 0.01;\n            if (self.maxY === 0) self.maxY = 0.01;\n        }\n        self.getOrthoTransform(true);\n    });\n    /*this.twoDRegisterWatch = function() {\n        this.registerWatch(function() {\n            self.getOrthoTransform(true);\n            self.drawOptimized();\n        });\n    }\n    let superDoInit = this.doInit;\n    this.doInit = function() {\n        this.twoDRegisterWatch();\n        superDoInit.call(this);\n    }*/\n    this.orthoRange = function() {\n        let range;\n        switch (this.axisDirection) {\n            case 'right':\n            case 'left':\n                range = [this.contentHeight(), 0];break;\n            case 'up':\n            case 'down':\n                range = [0, this.contentWidth()];break;\n            default:\n                range = [this.contentHeight(), 0];\n        }\n        return range;\n    }\n    this.getOrthoTransform = function(update) {\n        if (!this._otransform || update) {\n            if (update) {\n                this.contentWidth(true);\n                this.contentHeight(true);\n            }\n            this._otransform = (this.orthoLoga?d3.scaleLog():d3.scaleLinear())\n                                .domain(this.orthoDomain())\n                                .range(this.orthoRange());\n        }\n        return this._otransform;\n    }\n    this.orthoDomain = function() {\n        return [this.minY, this.maxY];\n    }\n    // this.orthoRange = function() {\n    //     return [this.contentHeight(), 0];\n    // }\n    this.updateMaxY = function(newVal) {\n        this.maxY = newVal;\n        if (this.update['maxY']) \n            this.update['maxY'](newVal);\n    }\n    this.preDraw = function() {\n        if (self.autofit) {\n            self.doAutofit();\n        }\n    }\n    this.doAutofit = function() {\n        console.error('Abstract doAutofit');\n    }\n}\n\n\n//# sourceURL=webpack:///./abstract-layer-2d/index.js?");

/***/ }),

/***/ "./abstract-layer/index.js":
/*!*********************************!*\
  !*** ./abstract-layer/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n    component: component,\n    klass: AbstractLayer\n}\n__webpack_require__(/*! ./style.css */ \"./abstract-layer/style.css\");\nvar ResizeSensor = __webpack_require__(/*! resize-sensor */ \"../node_modules/resize-sensor/ResizeSensor.min.js\");\nif (window.ResizeObserver) {\n    // chrome only\n    ResizeSensor = resizeSensor;\n    function resizeSensor(element = document, callback = () => { }) {\n        if (element instanceof $) element = element[0];\n        this.element = element;\n        this.callback = () => setTimeout(callback);\n\n        this.resizeObserver = new ResizeObserver(this.callback)\n        this.resizeObserver.observe(this.element);\n        return this;\n    }\n    resizeSensor.prototype.detach = function () {\n        this.resizeObserver.unobserve(this.element);\n    }\n}\n\nvar debounce = __webpack_require__(/*! lodash */ \"../node_modules/lodash/lodash.js\").debounce;\nvar merge = __webpack_require__(/*! lodash */ \"../node_modules/lodash/lodash.js\").merge;\nfunction component(componentData) {\n    return {\n        controller: componentData.controller,\n        controllerAs: componentData.controllerAs || 'self',\n        template: componentData.template,\n        bindings: {\n            padding: '<',\n            hPadding: '<',\n            vPadding: '<',\n            lPadding: '<',\n            rPadding: '<',\n            tPadding: '<',\n            bPadding: '<',\n            minVal: '<',\n            maxVal: '<',\n            minDraw: '<',\n            maxDraw: '<',\n            getters: \"<\",\n            setters: \"<\",\n            loga: '<',\n            axisDirection: '<',\n            placement: '<',\n            ...componentData.bindings\n        },\n        require: {\n            layerCollection: \"?^^layerCollection\"\n        }\n    }\n}\nfunction bindings(bindings) {\n    var defaultBindings = {\n        padding: '<',\n        hPadding: '<',\n        vPadding: '<',\n        lPadding: '<',\n        rPadding: '<',\n        tPadding: '<',\n        bPadding: '<',\n        minVal: '<',\n        maxVal: '<',\n        minDraw: '<',\n        maxDraw: '<',\n        getters: \"<\",\n        setters: \"<\",\n        loga: '<',\n        axisDirection: '<',\n        placement: '<',\n        params: '<'\n    }\n    return merge(defaultBindings,bindings);\n}\nfunction AbstractLayer($timeout, $element, $scope) {\n    let self = this;\n\n    this.leftPadding = function(){\n        return this.lPadding || this.hPadding || this.padding || (this.layerCollection || {}).lPadding || 0;\n    }\n    this.rightPadding = function(){\n        return this.rPadding || this.hPadding || this.padding || (this.layerCollection || {}).rPadding || 0;\n    }\n    this.topPadding = function() {\n        return this.tPadding || this.vPadding || this.padding || (this.layerCollection || {}).tPadding || 0;\n    }\n    this.bottomPadding = function() {\n        return this.bPadding || this.vPadding || this.padding || (this.layerCollection || {}).bPadding || 0;\n    }\n    this.paddingStr = function () {\n        return `${this.topPadding()}px ${this.rightPadding()}px ${this.bottomPadding()}px ${this.leftPadding()}px`\n    }\n    this.parentWidth = function() {\n        return $element.parent().width();\n    }\n    this.parentHeight = function() {\n        return $element.parent().height();\n    }\n    this.contentWidth = function(update) {\n        if (!this.width || update )\n            this.width = $element.find('svg,canvas').width();\n        return this.width;\n    }\n    this.contentHeight = function(update) {\n        if (!this.height || update )\n            this.height = $element.find('svg,canvas').height();\n        return this.height;\n    }\n    this.domain = function() {\n        return [this.minVal, this.maxVal];\n    }\n\n    this.range = function() {\n        let range;\n        switch (this.axisDirection) {\n            case 'right':\n                range = [0, this.contentWidth()];break;\n            case 'left':\n                range = [this.contentWidth(), 0];break;\n            case 'up':\n                range = [this.contentHeight(), 0];break;\n            case 'down':\n                range = [0, this.contentHeight()];break;\n            default:\n                range = [0, this.contentWidth()];\n        }\n        return range;\n    }\n    this.getTransform = function(update) {\n        if (!this._transform || update) {\n            if (update) {\n                this.contentWidth(true);\n                this.contentHeight(true);\n            }\n            this._transform = (this.loga?d3.scaleLog():d3.scaleLinear())\n                                .domain(this.domain())\n                                .range(this.range());\n        }\n        return this._transform;\n    }\n    this.defaultBindings = function(){\n        console.error(\"Abstract default bindings\");\n    }\n    this.drawOptimized = debounce(function () {\n        if ($scope.$$destroyed) return;\n        if (self.loga) {\n            if (self.minVal === 0) self.minVal = 0.01;\n            if (self.maxVal === 0) self.maxVal = 0.01;\n        }\n        for( let f of self.watchCallbacks) f();\n        self.getTransform(true);\n        self.preDraw();\n        self.draw();\n        self.postDraw();\n        if (!$scope.$$phase) $scope.$digest();\n    }, 300);\n    \n    this.watchCallbacks = [];\n    this.watchProperties = [\n        'minVal',\n        'maxVal',\n        'minDraw',\n        'maxDraw',\n        'loga',\n        'axisDirection',\n        'placement'\n    ]\n    this.registerWatch = function(callback) {\n        this.watchCallbacks.push(callback);\n    }\n    this.activateWatch = function() {\n        $scope.$watch(function() {\n            return self.watchProperties.map((prop) => (self[prop]));\n            //return [self.minVal, self.maxVal, self.loga, self.axisDirection];\n        }, function() {\n            // for( let f of self.watchCallbacks) f();\n            // self.getTransform(true);\n            self.drawOptimized();\n        }, true);\n        $scope.$on('jpanel-resized', function() {\n            self.drawOptimized();\n        });\n    }\n    this.doInit = function() {\n        this.update = {};\n        this.axisDirection = this.axisDirection || \"right\";\n        this.placement = this.placement || 0;\n\n        this.minVal = this.minVal || 0;\n        this.maxVal = this.maxVal || 100;\n        this.minDraw = this.minDraw || this.minVal;\n        this.maxDraw = this.maxDraw || this.maxVal;\n        this.defaultBindings();\n\n        let holder = $element.first();\n        new ResizeSensor(holder[0], function() {\n            // for( let f of self.watchCallbacks) f();\n            // self.getTransform(true);\n            self.drawOptimized();\n        });\n        if (this.layerCollection) {\n            // getters\n            for (let key of Object.keys(this.getters || {})) {\n                this.layerCollection.$scope.$on(this.getters[key], function(evt, value){\n                    evt.stopPropagation();\n                    evt.preventDefault();\n                    self._update = true;\n                    self[key] = value;\n                });\n            }\n            // setters\n            for (let key of Object.keys(this.setters || {})) {\n                this.update[key] = function(newVal) {\n                    self.layerCollection.$scope.$emit(self.setters[key], newVal);\n                }\n            }\n        }\n        holder.hide();\n        this.activateWatch();\n        this.getTransform(true);\n        this.preDraw();\n        this.draw();\n        this.postDraw();\n        holder.show();\n    }\n    this.preDraw = function(){\n    }\n    this.draw = function() {\n        console.error(\"Abstract draw\");\n    }\n    this.postDraw = function(){\n    }\n    this.onMouseMoveTooltip = function($event) {\n        if (this.layerCollection) this.layerCollection.tooltip(true, 'abc');\n    }\n    this.onMouseLeaveTooltip = function($event) {\n        if (this.layerCollection) this.layerCollection.tooltip(false);\n    }\n}\n\n\n//# sourceURL=webpack:///./abstract-layer/index.js?");

/***/ }),

/***/ "./abstract-layer/style.css":
/*!**********************************!*\
  !*** ./abstract-layer/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./abstract-layer/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./abstract-layer/style.css?");

/***/ }),

/***/ "./axis-layer/index.js":
/*!*****************************!*\
  !*** ./axis-layer/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduleName = \"plot-toolkit\";\nconst name = \"axisLayer\";\nmodule.exports.name = name;\n\n__webpack_require__(/*! ./style.css */ \"./axis-layer/style.css\");\nvar AbstractLayer = __webpack_require__(/*! ../abstract-layer */ \"./abstract-layer/index.js\");\nvar AbstractLayerController = AbstractLayer.klass;\nvar bindings = AbstractLayer.bindings;\nvar component = AbstractLayer.component;\n\nvar layerCollection = __webpack_require__(/*! ../layer-collection */ \"./layer-collection/index.js\");\nangular.module(moduleName).component(name, component({\n    controller: AxisLayerController, \n    template: __webpack_require__(/*! ./template.html */ \"./axis-layer/template.html\"),\n    bindings: {\n        precision: '<',\n        nTicks: '<',\n        grid: '<',\n        minorTicks: '<'\n    }\n}));\nfunction AxisLayerController($timeout, $element, $scope ) {\n    let self = this;\n    AbstractLayerController.call(this, $timeout, $element, $scope);\n\n    this.watchProperties = this.watchProperties.concat([\n        'precision',\n        'nTicks',\n        'grid',\n        'minorTicks'\n    ]);\n    this.tickValues = function() {\n        if (!this.loga) {\n            const step = (self.maxVal - self.minVal) / this.nTicks;\n            return d3.range(self.nTicks + 1).map((d, i) => self.minVal + i * step);\n            // let step = (Math.ceil(self.maxVal)- Math.floor(self.minVal))/this.nTicks;\n            // return d3.range(Math.floor(self.minVal), Math.ceil(self.maxVal), step);\n        }\n        else {\n            return genLogTickValues(self.minVal, self.maxVal);\n        }\n    }\n    this.defaultBindings = function() {\n        this.grid = (this.grid === undefined)?1:this.grid;\n        this.nTicks = this.nTicks || 5;\n        this.minorTicks = this.minorTicks || 2;\n        this.precision = this.precision || 1;\n    }\n    this.$onInit = function() {\n        this.doInit();\n        /*\n        $scope.$watch(function() {\n            return [self.maxVal, self.minVal];\n        }, function() {\n            console.log('redraw');\n            self.getTransform(true);    \n            self.drawOptimized();\n        }, true);\n        */\n    }\n    this._translate = function() {\n        switch (this.axisDirection) {\n            case 'right':\n            case 'left':\n                return this.placement?`translate(0, ${this.contentHeight()}px)`:\"translate(0,0)\";\n            case 'up':\n            case 'down':\n                return this.placement?`translate(${this.contentWidth()}px, 0)`:\"translate(0,0)\";\n        }\n        return \"translate(0,0)\";\n    }\n    this._tickSize = function() {\n        switch (this.axisDirection) {\n            case 'right':\n            case 'left':\n                return this.grid?-this.contentHeight():5;\n            case 'up':\n            case 'down':\n                return this.grid?-this.contentWidth():5;\n        }\n        return -height;\n    }\n    this._axisFunc = function() {\n        switch (this.axisDirection) {\n            case 'right':\n            case 'left':\n                return this.placement?d3.axisBottom:d3.axisTop;\n            case 'up':\n            case 'down':\n                return this.placement?d3.axisRight:d3.axisLeft;\n        }\n        return d3.axisBottom;\n    }\n    this.draw = draw;\n    function draw() {\n        // console.log('DRAW', self.axisDirection, self.maxVal);\n        let svg = $element.find('svg');\n        let transform = self.getTransform();\n\n        const tickValues = self.tickValues();\n        let axisFunc = self._axisFunc()(transform)\n            .tickValues(tickValues)\n            .tickFormat(function(value, i) {\n                if (self.loga) \n                    return Number.isInteger(Math.log10(value))?value:'';\n                if (i === tickValues.length - 1) return parseFloat(value.toFixed(self.precision));\n                return i % self.minorTicks ? '': parseFloat(value.toFixed(self.precision));\n            })\n            .tickPadding(10)\n            .tickSize(self._tickSize());\n        d3.select(svg[0]).select('g.layer')\n            .style('transform', self._translate())\n            .call(axisFunc);\n    }\n}\n\nfunction genLogTickValues(minVal, maxVal) {\n    var tickValues = new Array();\n    var leftExponent = Math.floor(Math.log10(minVal || 0.01));\n    var rightExponent = Math.ceil(Math.log10(maxVal || 0.01));\n    for (let i = leftExponent; i <= rightExponent; i++) {\n        for (let j = 1; j < 10; j++) {\n            let value = j * Math.pow(10, i);\n            if (value >= minVal && value <= maxVal)\n            tickValues.push(value);\n        }\n    }\n    return tickValues;\n}\n\n\n//# sourceURL=webpack:///./axis-layer/index.js?");

/***/ }),

/***/ "./axis-layer/style.css":
/*!******************************!*\
  !*** ./axis-layer/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./axis-layer/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./axis-layer/style.css?");

/***/ }),

/***/ "./axis-layer/template.html":
/*!**********************************!*\
  !*** ./axis-layer/template.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>\\n    <svg style=\\\"overflow:visible;margin: {{self.paddingStr();}};width:calc(100% - {{self.leftPadding() + self.rightPadding()}}px); height:calc(100% - {{self.topPadding() + self.bottomPadding()}}px)\\\">\\n        <g class=\\\"layer\\\"></g>\\n    </svg>\\n</div>\\n\\n\";\n\n//# sourceURL=webpack:///./axis-layer/template.html?");

/***/ }),

/***/ "./barchart-layer/index.js":
/*!*********************************!*\
  !*** ./barchart-layer/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduleName = 'plot-toolkit';\nconst name = 'barchartLayer';\nmodule.exports.name = name;\nmodule.exports.klass = BarchartLayerController;\nmodule.exports.component = buildComponent;\n\n__webpack_require__(/*! ./style.css */ \"./barchart-layer/style.css\");\n//var AbstractLayer = require('../abstract-layer');\nvar AbstractLayer = __webpack_require__(/*! ../abstract-layer-2d */ \"./abstract-layer-2d/index.js\");\nvar AbstractLayerController = AbstractLayer.klass;\nvar component = AbstractLayer.component;\n\nfunction buildComponent(componentData) {\n    componentData.controller = componentData.controller || BarchartLayerController;\n    componentData.template = componentData.template || __webpack_require__(/*! ./template.html */ \"./barchart-layer/template.html\");\n    componentData.bindings = {\n        bins: \"<\",\n        binGap: \"<\",\n        colorFunc: \"<\",\n        stackFuncArray: \"<\",\n        plotType: \"<\",\n        ...componentData.bindings\n    }\n    return component(componentData);\n}\nvar layerCollection = __webpack_require__(/*! ../layer-collection */ \"./layer-collection/index.js\");\nangular.module(moduleName)\n    .component(name, buildComponent({ }));\n\nfunction BarchartLayerController($timeout, $element, $scope) {\n    let self = this;\n    AbstractLayerController.call(this, $timeout, $element, $scope);\n\n    this.watchProperties = this.watchProperties.concat([ \"binGap\", \"plotType\" ]);\n\n    this.$onInit = function() {\n        this.doInit();\n    }\n    this.defaultBindings = function() {\n        this.twoDBindings(this);\n        //this.minY = this.minY || 0;\n        //this.maxY = this.maxY || 100;\n        this.nBins = this.nBins || 5;\n        this.binGap = this.binGap === undefined ? 3 : this.binGap;\n        this.stackFuncArray = this.stackFuncArray || [];\n        this.colorFunc = typeof(this.colorFunc) === \"function\" ? this.colorFunc: () => \"blue\";\n    }\n    this.doAutofit = function() {\n        this.updateMaxY(d3.max(this.bins, function(bin, binIdx) { \n            let stackLevel = d3.sum(self.stackFuncArray, (f) => f(bin, binIdx));\n            return bin.length + stackLevel; \n        }));\n    }\n    this.draw = function() {\n    }\n    this.binOffsets = function(bin, binIdx) {\n        let transform = this.getTransform();\n        let orthoTransform = this.getOrthoTransform();\n        let stackLevel = d3.sum(self.stackFuncArray, (f) => f(bin, binIdx));\n        let x = transform(bin.x0);\n        let y = orthoTransform(bin.length + stackLevel);\n        return { x:x, y:y };\n    }\n    this.binWidth = function(bin, binIdx) {\n        let transform = this.getTransform();\n        let width = Math.abs(transform(bin.x0) - transform(bin.x1));\n        return width >= this.binGap ? width - this.binGap : 0;\n    }\n    this.binHeight = function(bin, binIdx) {\n        let orthoTransform = this.getOrthoTransform();\n        let height = this.contentHeight() - orthoTransform(bin.length);\n        return height;\n    }\n    this.binColor = function(bin, binIdx) {\n        return this.colorFunc(bin);\n    }\n}\n\n\n//# sourceURL=webpack:///./barchart-layer/index.js?");

/***/ }),

/***/ "./barchart-layer/style.css":
/*!**********************************!*\
  !*** ./barchart-layer/style.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./barchart-layer/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./barchart-layer/style.css?");

/***/ }),

/***/ "./barchart-layer/template.html":
/*!**************************************!*\
  !*** ./barchart-layer/template.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>\\n<svg style=\\\"margin: {{self.paddingStr();}};width:calc(100% - {{self.leftPadding() + self.rightPadding()}}px); height:calc(100% - {{self.topPadding() + self.bottomPadding()}}px)\\\">\\n    <g class=\\\"layer\\\">\\n        <g ng-repeat=\\\"bin in self.bins\\\" \\n            ng-offset=\\\"{{self.binOffsets(bin, $index)}}\\\">\\n            <rect ng-x=\\\"{{self.binGap/2}}\\\" ng-y=\\\"0\\\"\\n                ng-width=\\\"{{self.binWidth(bin, $index)}}\\\" \\n                ng-height=\\\"{{self.binHeight(bin, $index)}}\\\"\\n                ng-fill=\\\"{{self.binColor(bin, $index)}}\\\">\\n            </rect>\\n        </g>\\n    </g>\\n</svg>\\n</div>\\n\";\n\n//# sourceURL=webpack:///./barchart-layer/template.html?");

/***/ }),

/***/ "./canvas-barchart-layer/index.js":
/*!****************************************!*\
  !*** ./canvas-barchart-layer/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduleName = 'plot-toolkit';\nconst name = 'canvasBarchartLayer';\nmodule.exports.name = name;\nmodule.exports.klass = CanvasBarchartLayerController;\nmodule.exports.component = buildComponent;\n\n__webpack_require__(/*! ./style.css */ \"./canvas-barchart-layer/style.css\");\nconst CanvasHelper = __webpack_require__(/*! ../canvas-helper */ \"./canvas-helper.js\");\n//var AbstractLayer = require('../abstract-layer');\nvar AbstractLayer = __webpack_require__(/*! ../abstract-layer-2d */ \"./abstract-layer-2d/index.js\");\nvar AbstractLayerController = AbstractLayer.klass;\nvar component = AbstractLayer.component;\n\nfunction buildComponent(componentData) {\n    componentData.controller = componentData.controller || CanvasBarchartLayerController;\n    componentData.template = componentData.template || __webpack_require__(/*! ./template.html */ \"./canvas-barchart-layer/template.html\");\n    componentData.bindings = {\n        bins: \"<\",\n        binGap: \"<\",\n        colorFunc: \"<\",\n        multiple: \"<\",\n        stackFuncArray: \"<\",\n        plotType: \"<\",\n        ...componentData.bindings\n    }\n    return component(componentData);\n}\nvar layerCollection = __webpack_require__(/*! ../layer-collection */ \"./layer-collection/index.js\");\nangular.module(moduleName)\n    .component(name, buildComponent({ }));\n\nfunction CanvasBarchartLayerController($timeout, $element, $scope) {\n    let self = this;\n    AbstractLayerController.call(this, $timeout, $element, $scope);\n\n    this.watchProperties = this.watchProperties.concat([ \"binGap\", \"plotType\" ]);\n\n    this.$onInit = function() {\n        this.doInit();\n    }\n    this.defaultBindings = function() {\n        this.twoDBindings(this);\n        //this.minY = this.minY || 0;\n        //this.maxY = this.maxY || 100;\n        this.nBins = this.nBins || 5;\n        this.binGap = this.binGap === undefined ? 3 : this.binGap;\n        this.stackFuncArray = this.stackFuncArray || [];\n        this.colorFunc = typeof(this.colorFunc) === \"function\" ? this.colorFunc: () => \"blue\";\n    }\n    this.doAutofit = function() {\n        this.updateMaxY(d3.max(this.bins, function(bin, binIdx) { \n            let stackLevel = d3.sum(self.stackFuncArray, (f) => f(bin, binIdx));\n            return bin.length + stackLevel; \n        }));\n    }\n\n    let _canvas;\n    function getCanvas() {\n        if (_canvas) return _canvas;\n        _canvas = $element.find('canvas')[0];\n        return _canvas;\n    }\n\n    this.draw = function() {\n        canvas = getCanvas();\n        canvas.width = this.contentWidth();\n        canvas.height = this.contentHeight();\n        let ctx = canvas.getContext('2d');\n        let symbolDefaultCfg = {\n            size: this.symbolSize,\n            fillStyle: 'blue',\n            strokeStyle: 'red'\n        }\n        let helper = new CanvasHelper(ctx, symbolDefaultCfg);\n        if (!self.multiple) {\n            canvasPlot(self.bins, helper);\n        }\n        else {\n            let stacks = [];\n            for (let i = 0; i < self.bins.length; i++) {\n                canvasPlot(self.bins[i], helper, stacks);\n                for (let j = 0; j < self.bins[i].length; j++){\n                    stacks[j] = stacks[j] || 0;\n                    stacks[j] += self.bins[i][j].length;\n                }\n            }\n        }\n        function canvasPlot(bins, helper, stacks) {\n            for (let i = 0; i < bins.length; i++) {\n                let bin = bins[i];\n                let stack = (stacks || [])[i] || 0;\n                let w = self.binWidth(bin);\n                let h = self.binHeight(bin);\n                let offset = self.binOffsets(bin, i, stack);\n                let x = offset.x + self.binGap/2;\n                let y = offset.y;\n                let color = self.binColor(bin, i, bins);\n                helper.rect(x, y, w, h, {\n                    strokeStyle: self.multiple?'#fff':'#000',\n                    fillStyle: color\n                });\n            }\n        }\n    }\n    this.binOffsets = function(bin, binIdx, stack) {\n        let transform = this.getTransform();\n        let orthoTransform = this.getOrthoTransform();\n        //let stackLevel = d3.sum(self.stackFuncArray, (f) => f(bin, binIdx));\n        let stackLevel = stack || 0;\n        let x = transform(bin.x0);\n        let y = orthoTransform(bin.length + stackLevel);\n        return { x:x, y:y };\n    }\n    this.binWidth = function(bin, binIdx) {\n        let transform = this.getTransform();\n        let width = Math.abs(transform(bin.x0) - transform(bin.x1));\n        return width >= this.binGap ? width - this.binGap : 0;\n    }\n    this.binHeight = function(bin, binIdx) {\n        let orthoTransform = this.getOrthoTransform();\n        let height = this.contentHeight() - orthoTransform(bin.length);\n        return height;\n    }\n    this.binColor = function(bin, binIdx, bins) {\n        return this.colorFunc(bin, bins, self.params);\n    }\n}\n\n\n//# sourceURL=webpack:///./canvas-barchart-layer/index.js?");

/***/ }),

/***/ "./canvas-barchart-layer/style.css":
/*!*****************************************!*\
  !*** ./canvas-barchart-layer/style.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./canvas-barchart-layer/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./canvas-barchart-layer/style.css?");

/***/ }),

/***/ "./canvas-barchart-layer/template.html":
/*!*********************************************!*\
  !*** ./canvas-barchart-layer/template.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>\\n<canvas style=\\\"margin: {{self.paddingStr();}};width:calc(100% - {{self.leftPadding() + self.rightPadding()}}px); height:calc(100% - {{self.topPadding() + self.bottomPadding()}}px)\\\">\\n</canvas>\\n<!--\\n<svg style=\\\"margin: {{self.paddingStr();}};width:calc(100% - {{self.leftPadding() + self.rightPadding()}}px); height:calc(100% - {{self.topPadding() + self.bottomPadding()}}px)\\\">\\n    <g class=\\\"layer\\\">\\n    !-\\n        <g ng-repeat=\\\"bin in self.bins\\\" \\n            ng-offset=\\\"{{self.binOffsets(bin, $index)}}\\\">\\n            <rect ng-x=\\\"{{self.binGap/2}}\\\" ng-y=\\\"0\\\"\\n                ng-width=\\\"{{self.binWidth(bin, $index)}}\\\" \\n                ng-height=\\\"{{self.binHeight(bin, $index)}}\\\"\\n                ng-fill=\\\"{{self.binColor(bin, $index)}}\\\">\\n            </rect>\\n        </g>\\n    -\\n    </g>\\n</svg>\\n-->\\n</div>\\n\";\n\n//# sourceURL=webpack:///./canvas-barchart-layer/template.html?");

/***/ }),

/***/ "./canvas-helper.js":
/*!**************************!*\
  !*** ./canvas-helper.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = CanvasHelper;\nfunction CanvasHelper(ctx, config) {\n    this.ctx = ctx;\n    this.fillStyle = config.fillStyle || 'transparent';\n    this.strokeStyle = config.strokeStyle || 'blue';\n    this.lineWidth = config.lineWidth || 1;\n    this.lineDash = config.lineDash || null;\n    this.size = config.size/4 || 2;\n}\n\n/************* CANVAS Drawing functions ****************/\nCanvasHelper.prototype.circle = function(x, y, opts = {}) {\n    prepare(this, opts);\n    let r = opts.pointSize || this.size;\n    this.ctx.arc(x, y, r, 0, Math.PI*2, true);\n    draw(this);\n}\n\nCanvasHelper.prototype.square = function(x, y, opts = {}) {\n    prepare(this, opts);\n    let a = opts.pointSize || this.size;\n    this.ctx.rect(x-a, y-a, a*2, a*2);\n    draw(this);\n}\n\nCanvasHelper.prototype.cross = function(x, y, opts = {}) {\n    prepare(this, opts);\n    let d = opts.pointSize || this.size;\n    this.ctx.moveTo(x-d, y-d);\n    this.ctx.lineTo(x+d, y+d);\n    this.ctx.moveTo(x-d, y+d);\n    this.ctx.lineTo(x+d, y-d);\n    draw(this);\n}\n\nCanvasHelper.prototype.diamond = function(x, y, opts = {}) {\n    prepare(this, opts);\n    let d = opts.pointSize || this.size;\n    this.ctx.moveTo(x-d, y);\n    this.ctx.lineTo(x, y+d);\n    this.ctx.lineTo(x+d, y);\n    this.ctx.lineTo(x, y-d);\n    this.ctx.closePath();\n    draw(this);\n}\n\nCanvasHelper.prototype.plus = function(x, y, opts = {}) {\n    prepare(this, opts);\n    let d = opts.pointSize || this.size;\n    this.ctx.moveTo(x-d, y);\n    this.ctx.lineTo(x+d, y);\n    this.ctx.moveTo(x, y-d);\n    this.ctx.lineTo(x, y+d);\n    draw(this);\n}\n\nCanvasHelper.prototype.star = function(x, y, opts = {}) {\n    prepare(this, opts);\n    let d = opts.pointSize || this.size;\n    this.ctx.translate(x, y);\n    for (let i = 0; i < 3; i ++) {\n        this.ctx.rotate(Math.PI / 3);\n        this.ctx.moveTo(-d, 0)\n        this.ctx.lineTo(+d, 0);\n    }\n    draw(this);\n}\n\nCanvasHelper.prototype.textSymbol = function (x, y, opts = {}) {\n    if (!opts.textContent) return;\n    let s = opts.textSize;\n    this.ctx.save();\n    this.ctx.font = `${s}px ${opts.fontFamily || 'Verdana'}`;\n    this.ctx.textBaseline = opts.verticalAlign || 'top';\n    this.ctx.fillStyle = opts.fillStyle || this.fillStyle;\n    this.ctx.fillText(opts.textContent, x, y);\n    this.ctx.restore();\n}\n\nCanvasHelper.prototype.rect = function(x, y, width, height, opts = {}) {\n    prepare(this, opts);\n    this.ctx.rect(x, y, width, height);\n    draw(this);\n}\n/********************** END *********************/\nfunction prepare(canvas, opts = {}) {\n    let ctx = canvas.ctx;\n    ctx.save();\n\n    ctx.beginPath();\n    ctx.fillStyle = opts.fillStyle || canvas.fillStyle;\n    ctx.strokeStyle = opts.strokeStyle || canvas.strokeStyle;\n    ctx.lineWidth = opts.lineWidth || canvas.lineWidth;\n    let lineDash = opts.lineDash || canvas.lineDash;\n    if (lineDash)\n        ctx.setLineDash(lineDash);\n}\n\nfunction draw(canvas) {\n    let ctx = canvas.ctx;\n    ctx.stroke();\n    ctx.fill();\n    ctx.restore();\n}\n\n\n//# sourceURL=webpack:///./canvas-helper.js?");

/***/ }),

/***/ "./click-layer/index.js":
/*!******************************!*\
  !*** ./click-layer/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduleName = 'plot-toolkit';\nconst name = 'clickLayer';\nmodule.exports.name = name;\n\n//var AbstractLayer = require('../interactive-layer');\nvar AbstractLayer = __webpack_require__(/*! ../abstract-layer-2d */ \"./abstract-layer-2d/index.js\");\nvar AbstractLayerController = AbstractLayer.klass;\nvar component = AbstractLayer.component;\nconst _ = __webpack_require__(/*! lodash */ \"../node_modules/lodash/lodash.js\");\n\n__webpack_require__(/*! ./style.css */ \"./click-layer/style.css\");\nvar layerCollection = __webpack_require__(/*! ../layer-collection */ \"./layer-collection/index.js\");\nangular.module(moduleName)\n    .component(name, component({\n        template: __webpack_require__(/*! ./template.html */ \"./click-layer/template.html\"),\n        controller: ClickLayerController,\n        bindings: {\n            pointerStyle: \"<\",\n            pointerSize: \"<\",\n            coordinateX: \"<\",\n            coordinateY: \"<\",\n            clickHandler: \"<\"\n        }\n    }));\n\nfunction ClickLayerController($timeout, $element, $scope) {\n    let self = this;\n    let dragging = false;\n    AbstractLayerController.call(this, $timeout, $element, $scope);\n    this.watchProperties = this.watchProperties.concat([\n        'coordinateX', 'coordinateY', \n        'pointerSize', 'pointerStyle'\n    ]);\n    this.$onInit = function() {\n        this.doInit();\n    }\n    this.defaultBindings = function() {\n        this.pointerSize = this.pointerSize || 5;\n        this.pointerStyle =  this.pointerStyle || {stroke:'blue', 'stroke-width':1, fill:'lightblue'}\n    }\n    this.doAutofit = function() { }\n    this.draw = function() { }\n    this.getPointerStyle = function() {\n        if (!this.coordinateX || !this.coordinateY)\n        return {\n            display: 'none'\n        }\n        return this.pointerStyle;\n    }\n    this.getPointerInfoStyle = function() {\n        if (!this.coordinateX || !this.coordinateY)\n        return {\n            display: 'none'\n        }\n        return {\n            display: 'block'\n        };\n    }\n    this.pointerCoordinates = function() {\n        return `X:${this.coordinateX}; Y:${this.coordinateY}`;\n    }\n    this.pointerOffset = function() {\n        if (!_.isFinite(this.coordinateX) || !_.isFinite(this.coordinateY)) return {x:0, y:0};\n        let transformX = this.getTransform();\n        let transformY = this.getOrthoTransform();\n        return {\n            x: transformX(this.coordinateX),\n            y: transformY(this.coordinateY)\n        }\n    }\n    this.onMouseClick = function($event) {\n        let transformX = this.getTransform();\n        let transformY = this.getOrthoTransform();\n        let xPixel = $event.offsetX;\n        let yPixel = $event.offsetY;\n        let coordinateX = transformX.invert(xPixel);\n        let coordinateY = transformY.invert(yPixel);\n        this.clickHandler && this.clickHandler(coordinateX, coordinateY, transformX, transformY);\n    }\n}\n\n\n//# sourceURL=webpack:///./click-layer/index.js?");

/***/ }),

/***/ "./click-layer/style.css":
/*!*******************************!*\
  !*** ./click-layer/style.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./click-layer/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./click-layer/style.css?");

/***/ }),

/***/ "./click-layer/template.html":
/*!***********************************!*\
  !*** ./click-layer/template.html ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>\\n    <svg class=\\\"clickable\\\" \\n        style=\\\"margin: {{self.paddingStr();}};width:calc(100% - {{self.leftPadding() + self.rightPadding()}}px); height:calc(100% - {{self.bottomPadding() + self.topPadding()}}px)\\\"\\n        ng-click=\\\"self.onMouseClick($event)\\\">\\n        <g class=\\\"layer\\\">\\n            <circle cx=\\\"0\\\" cy=\\\"0\\\" ng-r=\\\"{{self.pointerSize}}\\\" ng-style=\\\"self.getPointerStyle()\\\" ng-offset=\\\"{{self.pointerOffset()}}\\\"></circle>\\n        </g>\\n    </svg>\\n</div>\\n<!-- <div ng-show=\\\"self.xCoordinate && self.yCoordinate\\\" ng-bind=\\\"self.pointerCoordinates()\\\"></div> -->\\n\";\n\n//# sourceURL=webpack:///./click-layer/template.html?");

/***/ }),

/***/ "./common.js":
/*!*******************!*\
  !*** ./common.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports.bestNumberFormat = bestNumberFormat;\nmodule.exports.findLinearEqn = findLinearEqn;\nmodule.exports.parseFormulaLatex = parseFormulaLatex;\nmodule.exports.distance = distance;\nmodule.exports.findClosest = findClosest;\n\nfunction bestNumberFormat(x) {\n    if (!x) return x;\n    let ex = Math.abs(x / 100);\n    let n = -Math.round(Math.log10(ex));\n    n = n>=0?n:0;\n    return x.toFixed(n);\n}\n\nfunction findLinearEqn(p1, p2) {\n    if (p1.x != p2.x) {\n        let slope = (p1.y - p2.y)/(p1.x - p2.x);\n        let intercept = p1.y - slope * p1.x;\n        return {\n            family:'linear', slope: slope, intercept: intercept\n        }\n    }\n    return {\n        family: 'const', x: p1.x\n    }\n}\n\nfunction parseFormulaLatex(formula) {\n    let latex = formula.latex || '';\n    switch(formula.family) {\n        case \"const\":\n            latex = `x = ${formula.x}`;\n            break;\n        case \"linear\":\n            let intercept = formula.intercept;\n            let slopeStr = bestNumberFormat(formula.slope);\n            let interceptStr = bestNumberFormat(Math.abs(formula.intercept));\n            latex = `y = ${slopeStr} \\\\times x ${intercept==0?'':(intercept<0 ? '-' + interceptStr:'+' + interceptStr)}`;\n            break;\n        case \"exponential\":\n            latex = `y = ${bestNumberFormat(formula.ae)} \\\\times e^\\{${bestNumberFormat(formula.b)} x\\}`;\n            break;\n        case \"power\":\n            latex = `y = ${bestNumberFormat(formula.coefficient)} \\\\times x^\\{${bestNumberFormat(formula.exponent)}\\}`;\n            break;\n    }\n    return latex.replace(/\\+\\-/g, '-');\n}\n\nfunction distance(p1, p2) {\n    return Math.sqrt((p1.x - p2.x)**2 + (p1.y - p2.y)**2);\n}\nfunction findClosest(p, points) {\n    let minDistance = 100000;\n    let minIdx = undefined;\n    for (let i = 0; i < points.length; i++) {\n        let d = distance(p, points[i]);\n        if (d < minDistance) {\n            minDistance = d;\n            minIdx = i;\n        }\n    }\n    return {\n        distance: minDistance,\n        idx : minIdx\n    }\n}\n\n\n//# sourceURL=webpack:///./common.js?");

/***/ }),

/***/ "./control-marker-layer/index.js":
/*!***************************************!*\
  !*** ./control-marker-layer/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduleName = 'plot-toolkit';\nconst name = \"controlMarkerLayer\";\nmodule.exports.name = name;\n\n__webpack_require__(/*! ./style.css */ \"./control-marker-layer/style.css\");\nvar AbstractLayer = __webpack_require__(/*! ../abstract-layer */ \"./abstract-layer/index.js\");\nvar AbstractLayerController = AbstractLayer.klass;\nvar component = AbstractLayer.component;\n\nvar layerCollection = __webpack_require__(/*! ../layer-collection */ \"./layer-collection/index.js\");\nangular.module(moduleName).component(name, component({\n    controller: ControlMarkerLayerController, \n    template: __webpack_require__(/*! ./template.html */ \"./control-marker-layer/template.html\"),\n    bindings: {\n        markers: \"<\",\n        draggable: \"<\",\n        markerStyle: \"<\",\n        markerWidth: \"<\",\n        getMarkerValue: \"<\",\n        setMarkerValue: \"<\"\n    }\n}));\nfunction ControlMarkerLayerController($timeout, $element, $scope ) {\n    let self = this;\n    AbstractLayerController.call(this, $timeout, $element, $scope);\n\n    this.watchProperties = this.watchProperties.concat([\n        \"markers\",\n        \"markerStyle\",\n        \"markerWidth\",\n        \"getMarkerValue\",\n        \"setMarkerValue\",\n        \"draggable\"\n    ]);\n    this.defaultBindings = function() {\n        this.markerStyle = typeof(this.markerStyle) === 'object'?this.markerStyle:{stroke:\"green\", \"stroke-width\": 2,\"fill\":\"none\"};\n        this.markerWidth = this.markerWidth || 19;\n        this.draggable = this.draggable || false;\n    }\n    this.$onInit = function() {\n        this.doInit();\n    }\n    this.draw = function() {\n    }\n    this.markerOffset = function(marker, idx) {\n        let transform = this.getTransform();\n        switch(this.axisDirection) {\n        case \"left\":\n        case \"right\":\n            return {\n                x: transform(self.getMarkerValue(marker, idx)) - self.markerWidth/2,\n                y: 0\n            }\n        case \"up\":\n        case \"down\":\n            return {\n                x: 0,\n                y: transform(self.getMarkerValue(marker, idx)) - self.markerWidth/2\n            }\n        }\n    }\n    this.dragStart = function(marker, $event, $index) {\n        if (!this.draggable) return;\n        $event.stopPropagation();\n        $event.preventDefault();\n        marker.dragging = true;\n        switch(this.axisDirection) {\n        case \"left\":\n        case \"right\":\n            marker.startX = $event.offsetX;\n            break;\n        case \"up\":\n        case \"down\":\n            marker.startY = $event.offsetY;\n            break;\n        }\n    }\n    this.dragEnd = function($event) {\n        this.markers.forEach((m) => {\n            m.dragging = false;\n            delete m.startX;\n            delete m.startY;\n        });\n    }\n    this.dragging = function($event) {\n        switch(this.axisDirection) {\n        case \"left\":\n        case \"right\":\n            return this.xDragging($event);\n        case \"up\":\n        case \"down\":\n            return this.yDragging($event);\n        }\n    }\n    this.xDragging = function($event) {\n        for (let i = 0; i < this.markers.length; i++) {\n            if (!this.markers[i].dragging) continue;\n\n            let marker = this.markers[i];\n            let offset = $event.offsetX - marker.startX;\n            let x = this.getTransform()(this.getMarkerValue(marker, i)) - this.markerWidth/2 + offset;\n            let value = this.getTransform().invert(x + this.markerWidth/2);\n            let lowerMarkerVal = this.markers[i-1] ? this.getMarkerValue(this.markers[i-1], i-1):this.minVal;\n            let higherMarkerVal = this.markers[i+1] ? this.getMarkerValue(this.markers[i+1], i+1):this.maxVal;\n            if ( (value - lowerMarkerVal) * ( value -  higherMarkerVal) >= 0) continue;\n            this.setMarkerValue(marker, i, value);\n            marker.startX = $event.offsetX;\n        }\n    }\n    this.yDragging = function($event) {\n        for (let i = 0; i < this.markers.length; i++) {\n            if (!this.markers[i].dragging) continue;\n\n            let marker = this.markers[i];\n            let offset = $event.offsetY - marker.startY;\n            let y = this.getTransform()(this.getMarkerValue(marker, i)) - this.markerWidth/2 + offset;\n            let value = this.getTransform().invert(y + this.markerWidth/2);\n            let lowerMarkerVal = this.markers[i - 1]?this.getMarkerValue(this.markers[i - 1], i - 1):this.minVal;\n            let higherMarkerVal = this.markers[i + 1]?this.getMarkerValue(this.markers[i + 1], i + 1):this.maxVal;\n            if ( (value - lowerMarkerVal) * ( value -  higherMarkerVal) >= 0) continue;\n            this.setMarkerValue(marker, i, value);\n            marker.startY = $event.offsetY;\n        }\n    }\n    this.markerMouseOver = function($event, marker, idx) {\n        if (!this.draggable) return;\n        marker.opacity = 1; \n        $timeout(() => {\n            switch(self.axisDirection) { \n                case \"left\":\n                case \"right\":\n                    marker.handlePos = $event.offsetY - self.markerWidth/2;\n                    break;\n                case \"up\":\n                case \"down\":\n                    marker.handlePos = $event.offsetX - self.markerWidth/2;\n                    break;\n            }\n        }); \n    }\n    this.getCursorStyle = function () {\n        if (!this.draggable) return { cursor: 'default' };\n        switch (this.axisDirection) {\n        case \"left\":\n        case \"right\":\n            return {cursor: 'ew-resize'};\n        case \"up\":\n        case \"down\":\n            return {cursor: 'ns-resize'};\n        }\n    }\n    this.markerKnobStyle = function(marker) {\n        return {\n            opacity: marker.opacity || 0,\n            ...this.markerStyle\n        }\n    }\n}\n\n\n\n//# sourceURL=webpack:///./control-marker-layer/index.js?");

/***/ }),

/***/ "./control-marker-layer/style.css":
/*!****************************************!*\
  !*** ./control-marker-layer/style.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./control-marker-layer/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./control-marker-layer/style.css?");

/***/ }),

/***/ "./control-marker-layer/template.html":
/*!********************************************!*\
  !*** ./control-marker-layer/template.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>\\n    <svg style=\\\"margin: {{self.paddingStr();}};width:calc(100% - {{self.leftPadding() + self.rightPadding()}}px); height:calc(100% - {{self.topPadding() + self.bottomPadding()}}px)\\\" \\n        ng-mouseup=\\\"self.dragEnd($event)\\\" ng-mousemove=\\\"self.dragging($event)\\\">\\n        <g ng-repeat=\\\"marker in self.markers\\\"\\n            ng-style=\\\"self.getCursorStyle()\\\"\\n            ng-offset=\\\"{{self.markerOffset(marker, $index)}}\\\"\\n            ng-mousedown=\\\"self.dragStart(marker, $event, $index)\\\"\\n            ng-mouseover=\\\"self.markerMouseOver($event, marker,$index)\\\" ng-mouseleave=\\\"marker.opacity = null;\\\">\\n            <line ng-if=\\\"self.axisDirection === 'right' || self.axisDirection === 'left'\\\"\\n                ng-x1=\\\"{{self.markerWidth/2}}\\\" \\n                ng-x2=\\\"{{self.markerWidth/2}}\\\" \\n                y1=\\\"0\\\" \\n                ng-y2=\\\"{{self.contentHeight(true)}}\\\" \\n                ng-style=\\\"{{self.markerStyle}}\\\"/>\\n            <line ng-if=\\\"self.axisDirection === 'up' || self.axisDirection === 'down'\\\"\\n                ng-y1=\\\"{{self.markerWidth/2}}\\\" \\n                ng-y2=\\\"{{self.markerWidth/2}}\\\" \\n                x1=\\\"0\\\" \\n                ng-x2=\\\"{{self.contentWidth(true)}}\\\" \\n                ng-style=\\\"{{self.markerStyle}}\\\"/>\\n            <rect ng-if=\\\"self.axisDirection === 'right' || self.axisDirection === 'left'\\\" \\n                x=\\\"0\\\" y=\\\"0\\\" \\n                ng-width=\\\"{{self.markerWidth}}\\\" ng-height=\\\"{{self.markerWidth}}\\\"\\n                ng-offset=\\\"{{ {x: 0, y: marker.handlePos || (self.contentHeight() - self.markerWidth)/2 } }}\\\"\\n                ng-style=\\\"self.markerKnobStyle(marker)\\\"/>\\n            <rect ng-if=\\\"self.axisDirection === 'up' || self.axisDirection === 'down'\\\" \\n                x=\\\"0\\\" y=\\\"0\\\" \\n                ng-width=\\\"{{self.markerWidth}}\\\" ng-height=\\\"{{self.markerWidth}}\\\"\\n                ng-offset=\\\"{{ {y: 0, x: marker.handlePos || (self.contentWidth() - self.markerWidth)/2 } }}\\\"\\n                ng-style=\\\"self.markerKnobStyle(marker)\\\"/>\\n        </g>\\n    </svg>\\n</div>\\n\";\n\n//# sourceURL=webpack:///./control-marker-layer/template.html?");

/***/ }),

/***/ "./histogram-layer/index.js":
/*!**********************************!*\
  !*** ./histogram-layer/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduleName = 'plot-toolkit';\nconst name = 'histogramLayer';\nmodule.exports.name = name;\n\nvar AbstractLayer = __webpack_require__(/*! ../barchart-layer */ \"./barchart-layer/index.js\");\nvar AbstractLayerController = AbstractLayer.klass;\nvar component = AbstractLayer.component;\n\nvar layerCollection = __webpack_require__(/*! ../layer-collection */ \"./layer-collection/index.js\");\nangular.module(moduleName)\n    .component(name, component({\n        controller: HistogramLayerController,\n        bindings: {\n            points: \"<\",\n            getPointVal: \"<\",\n            binCount: \"<\"\n        }\n    }));\n\nfunction HistogramLayerController($timeout, $element, $scope) {\n    let self = this;\n    AbstractLayerController.call(this, $timeout, $element, $scope);\n\n    this.watchProperties = this.watchProperties.concat([ 'binCount' ]);\n\n    function refresh() {\n        self.getTransform(true);\n        self.genBins();\n    }\n    this.registerWatch(() => refresh());\n    this.$onInit = function() {\n        this.doInit();\n    }\n    this.genBins = function () {\n        if (!this.points || !this.points.length) return;\n        let thresholds;\n        if (!this.loga)\n            thresholds = d3.range(this.minVal, this.maxVal, (this.maxVal - this.minVal)/this.binCount);\n        else {\n            let logMinVal = Math.log10(this.minVal || 0.01);\n            let logMaxVal = Math.log10(this.maxVal || 0.01);\n            thresholds = d3.range(logMinVal, logMaxVal, (logMaxVal - logMinVal)/this.binCount).map(v => Math.pow(10, v)); \n        }\n        let histGen = d3.histogram().domain([this.minVal, this.maxVal]).thresholds(thresholds);\n        this.bins = histGen(this.points.map(function(p, i) { return self.getPointVal(p,i); }));\n    }\n}\n\n\n//# sourceURL=webpack:///./histogram-layer/index.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./plot-toolkit-module */ \"./plot-toolkit-module.js\");\nmodule.exports = {\n    AxisLayer: __webpack_require__(/*! ./axis-layer */ \"./axis-layer/index.js\"),\n    BarchartLayer : __webpack_require__(/*! ./barchart-layer */ \"./barchart-layer/index.js\"),\n    CanvasBarchartLayer : __webpack_require__(/*! ./canvas-barchart-layer */ \"./canvas-barchart-layer/index.js\"),\n    HistogramLayer : __webpack_require__(/*! ./histogram-layer */ \"./histogram-layer/index.js\"),\n    LineBinLayer : __webpack_require__(/*! ./line-bin-layer */ \"./line-bin-layer/index.js\"),\n    LinePointLayer : __webpack_require__(/*! ./line-point-layer */ \"./line-point-layer/index.js\"),\n    LineFormulaLayer : __webpack_require__(/*! ./line-formula-layer */ \"./line-formula-layer/index.js\"),\n    LineGaussianLayer : __webpack_require__(/*! ./line-gaussian-layer */ \"./line-gaussian-layer/index.js\"),\n    ControlMarkerLayer : __webpack_require__(/*! ./control-marker-layer */ \"./control-marker-layer/index.js\"),\n    ScatterLayer : __webpack_require__(/*! ./scatter-layer */ \"./scatter-layer/index.js\"),\n    SegmentLayer : __webpack_require__(/*! ./segment-layer */ \"./segment-layer/index.js\"),\n    ClickLayer : __webpack_require__(/*! ./click-layer */ \"./click-layer/index.js\"),\n    PolygonLayer : __webpack_require__(/*! ./polygon-layer */ \"./polygon-layer/index.js\"),\n    // LayerWrapper : require('./layer-wrapper'),\n    // LayerArray : require('./layer-array')\n}\nwindow.mathGeo = __webpack_require__(/*! ./common */ \"./common.js\");\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./interactive-layer/index.js":
/*!************************************!*\
  !*** ./interactive-layer/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports.name = name;\nmodule.exports.klass = InteractiveLayerController;\nmodule.exports.component = buildComponent;\n\nvar AbstractLayer = __webpack_require__(/*! ../abstract-layer-2d */ \"./abstract-layer-2d/index.js\");\nvar AbstractLayerController = AbstractLayer.klass;\nvar component = AbstractLayer.component;\n\nlet bestNumberFormat = __webpack_require__(/*! ../common */ \"./common.js\").bestNumberFormat;\n\n__webpack_require__(/*! ./style.css */ \"./interactive-layer/style.css\");\nfunction buildComponent(componentData) {\n    componentData.template = componentData.template || __webpack_require__(/*! ./template.html */ \"./interactive-layer/template.html\");\n    componentData.bindings = {\n        fillStyle: \"<\",\n        strokeStyle: \"<\",\n        strokeWidth: \"<\",\n        editPointIdx: \"<\",\n        points: \"<\",\n        mode : \"<\",\n        ...componentData.bindings\n    }\n    return component(componentData);\n}\n\nfunction InteractiveLayerController($timeout, $element, $scope) {\n    let self = this;\n    let dragging = false;\n    AbstractLayerController.call(this, $timeout, $element, $scope);\n    this.watchProperties = this.watchProperties.concat([ \"fillStyle\", \"strokeStyle\", 'strokeWidth' ]);\n    this.interactiveBindings = function() {\n        this.twoDBindings();\n        this.fillStyle = this.fillStyle || \"rgba(255,255, 64, 0.5)\";\n        this.strokeStyle = this.strokeStyle || \"teal\";\n        this.strokeWidth = this.strokeWidth || \"2\";\n        this.editPointIdx = this.editPointIdx || null;\n        this.mode = this.mode || null;\n        this.points = this.points || [];\n    }\n\n    this.mouseDownAddPoint = function($event) {\n    }\n    this.mouseDownDelPoint = function($event) {\n    }\n\n    this.onMouseDown = function($event) {\n        this.shiftKey = $event.shiftKey;\n        this.altKey = $event.altKey;\n        if ($event.shiftKey) {\n            this.mouseDownAddPoint($event);\n        }\n        else if ($event.altKey) {\n            this.mouseDownDelPoint($event);\n        }\n        else {\n            dragging = true;\n            let transformX = this.getTransform().invert;\n            let transformY = this.getOrthoTransform().invert;\n            startX = $event.offsetX;\n            startY = $event.offsetY;\n        }\n    }\n    this.onMouseUp = function($event) {\n        this.shiftKey = $event.shiftKey;\n        this.altKey = $event.altKey;\n        dragging = false;\n    }\n    this.onMouseMove = function($event) {\n        this.shiftKey = $event.shiftKey;\n        this.altKey = $event.altKey;\n        this.onMouseMoveTooltip($event);\n        if (dragging) {\n            this.mouseMoveDragging($event);\n        }\n        else {\n            this.mouseMoveNoDragging($event);\n        }\n        return true;\n    }\n    this.mouseMoveDragging = function($event) {\n        if (!_.isFinite(this.editPointIdx)) return;\n        if (!this.points[this.editPointIdx]) return;\n        let transformX = this.getTransform();\n        let transformY = this.getOrthoTransform();\n        let offsetX = $event.offsetX - startX;\n        let offsetY = $event.offsetY - startY;\n        let pixelX = transformX(this.points[this.editPointIdx].x);\n        let pixelY = transformY(this.points[this.editPointIdx].y);\n        pixelX += offsetX;\n        pixelY += offsetY;\n        this.points[this.editPointIdx].x = transformX.invert(pixelX);\n        this.points[this.editPointIdx].y = transformY.invert(pixelY);\n        startX = $event.offsetX;\n        startY = $event.offsetY;\n    }\n    this.mouseMoveNoDragging = function($event) {\n        //$event.stopPropagation();\n        //$event.preventDefault();\n        let transformX = this.getTransform();\n        let transformY = this.getOrthoTransform();\n        let x = $event.offsetX;\n        let y = $event.offsetY;\n        this.editPointIdx = null;\n        let result = findClosest({x,y}, this.points, transformX, transformY);\n        if (result.distance < 10) {\n            $timeout(() => {\n                self.editPointIdx = result.idx;\n            });\n        }\n    }\n    this.onMouseLeave = function($event) {\n        this.onMouseLeaveTooltip($event);\n        this.shiftKey = $event.shiftKey;\n        this.altKey = $event.altKey;\n        dragging = false;\n    }\n    this.draggerStyle = function() {\n        if (this.editPointIdx === null || !this.mode) \n            return {\n                fill: 'none', stroke: 'none'\n            }\n        return {\n            fill: \"lightblue\",\n            stroke: 'blue',\n            \"stroke-width\": 1\n        }\n    }\n    this.draggerOffset = function() {\n        if (!_.isFinite(this.editPointIdx)) return {x: 0, y: 0};\n        let transformX = this.getTransform();\n        let transformY = this.getOrthoTransform();\n        let toRet = {\n            x: transformX(this.points[this.editPointIdx].x),\n            y: transformY(this.points[this.editPointIdx].y)\n        };\n        return toRet;\n    }\n    this.getPoints = function() {\n        let transformX = this.getTransform(); \n        let transformY = this.getOrthoTransform();\n        let pointCoordinates = this.points.map((p) => ({\n            x: transformX(p.x),\n            y: transformY(p.y)\n        }));\n        return JSON.stringify(pointCoordinates);\n    }\n    this.getCoordinates = function() {\n        if (this.mode && _.isFinite(this.editPointIdx)) {\n            let p = this.points[this.editPointIdx];\n            return `X:${bestNumberFormat(p.x)}\n            Y:${bestNumberFormat(p.y)}`\n        }\n    }\n    this.distance = distance;\n    function distance(p1, p2, tX, tY) {\n        return Math.sqrt((p1.x - tX(p2.x))**2 + (p1.y - tY(p2.y))**2);\n    }\n    this.findClosest = findClosest;\n    function findClosest(p, points, tX, tY) {\n        let minDistance = 100000;\n        let minIdx = undefined;\n        for (let i = 0; i < points.length; i++) {\n            let d = distance(p, points[i], tX, tY);\n            if (d < minDistance) {\n                minDistance = d;\n                minIdx = i;\n            }\n        }\n        return {\n            distance: minDistance,\n            idx : minIdx\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./interactive-layer/index.js?");

/***/ }),

/***/ "./interactive-layer/style.css":
/*!*************************************!*\
  !*** ./interactive-layer/style.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./interactive-layer/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./interactive-layer/style.css?");

/***/ }),

/***/ "./interactive-layer/template.html":
/*!*****************************************!*\
  !*** ./interactive-layer/template.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>\\n<svg ng-class=\\\"{'edit-point': self.mode, 'add-point': self.shiftKey, 'del-point': self.altKey}\\\" \\n    style=\\\"margin: {{self.paddingStr();}};width:calc(100% - {{self.leftPadding() + self.rightPadding()}}px); height:calc(100% - {{self.bottomPadding() + self.topPadding()}}px)\\\"\\n    ng-mouseleave=\\\"self.onMouseLeave($event)\\\"\\n    ng-mouseup=\\\"self.onMouseUp($event)\\\"\\n    ng-mousedown=\\\"self.onMouseDown($event)\\\"\\n    ng-mousemove=\\\"self.onMouseMove($event)\\\">\\n    <g class=\\\"layer\\\">\\n        <polygon ng-points=\\\"{{self.getPoints()}}\\\" ng-fill=\\\"{{self.fillStyle}}\\\" ng-stroke=\\\"{{self.strokeStyle}}\\\" ng-stroke-width=\\\"{{self.strokeWidth}}\\\">\\n        </polygon>\\n        <circle cx=\\\"0\\\" cy=\\\"0\\\" r=\\\"5\\\" ng-style=\\\"self.draggerStyle()\\\" ng-offset=\\\"{{self.draggerOffset()}}\\\"></circle>\\n    </g>\\n</svg>\\n</div>\\n<div class=\\\"status\\\" ng-bind=\\\"self.getCoordinates()\\\" ng-style=\\\"\\\"></div>\\n\";\n\n//# sourceURL=webpack:///./interactive-layer/template.html?");

/***/ }),

/***/ "./layer-collection/index.js":
/*!***********************************!*\
  !*** ./layer-collection/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduleName = 'plot-toolkit';\nconst name = 'layerCollection';\nmodule.exports.name = name;\n__webpack_require__(/*! ./style.css */ \"./layer-collection/style.css\");\n\nangular.module(moduleName)\n    .component(name, {\n        controller: LayerCollectionController,\n        controllerAs: 'self',\n        template: __webpack_require__(/*! ./template.html */ \"./layer-collection/template.html\"),\n        bindings: {\n            padding: '<',\n            hPadding: '<',\n            vPadding: '<',\n            lPadding: '<',\n            rPadding: '<',\n            tPadding: '<',\n            bPadding: '<'\n        },\n        transclude: true\n    });\n\nfunction LayerCollectionController($timeout, $element, $scope) {\n    let self = this;\n    this.notiOpacity = 0;\n    this.msg = \"\";\n\n    this.tooltips = [];\n\n    this.$onInit = function() {\n        this.lPadding = this.leftPadding();\n        this.rPadding = this.rightPadding();\n        this.tPadding = this.topPadding();\n        this.bPadding = this.bottomPadding();\n        this.$timeout = $timeout;\n        this.$scope = $scope;\n    }\n    this.leftPadding = function(){\n        return this.lPadding || this.hPadding || this.padding || 0;\n    }\n    this.rightPadding = function(){\n        return this.rPadding || this.hPadding || this.padding || 0;\n    }\n    this.topPadding = function() {\n        return this.tPadding || this.vPadding || this.padding || 0;\n    }\n    this.bottomPadding = function() {\n        return this.bPadding || this.vPadding || this.padding || 0;\n    }\n    this.notify = function(msg, iconClass, duration) {\n        $timeout(() => {\n            this.notiOpacity = 1;\n            this.iconClass = iconClass || this.iconClass || 'ti-check';\n            this.msg = msg;\n        });\n        $timeout(() => {\n            this.notiOpacity = 0;\n        }, duration || 1000);\n    }\n    this.tooltip = function(on, msg) {\n        if (on) {\n            this.tooltips[0] = msg;\n        }\n        else {\n            this.tooltips.length = 0;\n        }\n    }\n    this.tooltipStyle = function() {\n        return {\n            bottom: 0, left: 0\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./layer-collection/index.js?");

/***/ }),

/***/ "./layer-collection/style.css":
/*!************************************!*\
  !*** ./layer-collection/style.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./layer-collection/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./layer-collection/style.css?");

/***/ }),

/***/ "./layer-collection/template.html":
/*!****************************************!*\
  !*** ./layer-collection/template.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div ng-transclude></div>\\n<div class=\\\"notification\\\">\\n    <div style=\\\"opacity: {{self.notiOpacity}};\\\">\\n        <span class=\\\"{{self.iconClass}}\\\"></span>\\n        <div style=\\\"font-size:14px;\\\">{{self.msg}}</div>\\n    </div>\\n</div>\\n\\n<div ng-show=\\\"self.tooltips.length\\\" class=\\\"tooltip\\\" ng-style=\\\"self.tooltipStyle();\\\">\\n    <div ng-repeat=\\\"line in self.tooltips\\\">{{line}}</div>\\n</div>\\n\";\n\n//# sourceURL=webpack:///./layer-collection/template.html?");

/***/ }),

/***/ "./line-bin-layer/index.js":
/*!*********************************!*\
  !*** ./line-bin-layer/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduleName = 'plot-toolkit';\nconst name = \"lineBinLayer\";\nmodule.exports.name = name;\n\nvar AbstractLayer = __webpack_require__(/*! ../line-layer */ \"./line-layer/index.js\");\nvar AbstractLayerController = AbstractLayer.klass;\nvar component = AbstractLayer.component;\n\nvar layerCollection = __webpack_require__(/*! ../layer-collection */ \"./layer-collection/index.js\");\nangular.module(moduleName).component(name, component({\n    controller: LineBinLayerController, \n    bindings: { }\n}));\n\nfunction LineBinLayerController($timeout, $element, $scope) {\n    let self = this;\n    AbstractLayerController.call(this, $timeout, $element, $scope);\n    this.defaultBindings = function() {\n        this.lineStyleDefault();\n    }\n    this.$onInit = function() {\n        this.doInit();\n    }\n    this.getLine = function() {\n        let transform = this.getTransform();\n        let orthoTransform = this.getOrthoTransform();\n        let line = d3.line().curve(d3.curveBasis)\n            .x((d, i) => {\n                return transform((d.x0 + d.x1)/2);\n            })\n            .y((d, i) => {\n                return orthoTransform(d.length);\n            });\n        return line;\n    }\n    this.doAutofit = function() {\n        this.updateMaxY(d3.max(this.getData(), function(bin) {return bin.length;}));\n    }\n}\n\n\n//# sourceURL=webpack:///./line-bin-layer/index.js?");

/***/ }),

/***/ "./line-formula-layer/index.js":
/*!*************************************!*\
  !*** ./line-formula-layer/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduleName = 'plot-toolkit';\nconst name = \"lineFormulaLayer\";\nmodule.exports.name = name;\n\nvar AbstractLayer = __webpack_require__(/*! ../line-layer */ \"./line-layer/index.js\");\nvar AbstractLayerController = AbstractLayer.klass;\nvar component = AbstractLayer.component;\nvar parseFormulaLatex = __webpack_require__(/*! ../common */ \"./common.js\").parseFormulaLatex;\n//require('ngclipboard');\n__webpack_require__(/*! ./style.css */ \"./line-formula-layer/style.css\");\n\nvar layerCollection = __webpack_require__(/*! ../layer-collection */ \"./layer-collection/index.js\");\nangular.module(moduleName).component(name, component({\n    controller: LFLayerController, \n    template: __webpack_require__(/*! ./template.html */ \"./line-formula-layer/template.html\"),\n    bindings: {\n        formula: \"<\",\n        resolution: \"<\",\n        eqnOffsets: \"<\",\n        showEquation: '<',\n        eqnName: \"<\",\n        inverted: \"<\",\n    }\n}));\nfunction LFLayerController($scope, $timeout, $element) {\n    let self = this;\n    AbstractLayerController.call(this, $timeout, $element, $scope);\n\n    this.watchProperties = this.watchProperties.concat([\n        \"resolution\",\n        \"eqnOffsets\",\n        \"inverted\",\n    ]);\n\n    this.defaultBindings = function() {\n        this.lineStyleDefault();\n        this.resolution = this.resolution || 50;\n        this.eqnOffsets = this.eqnOffsets || [0,0];\n        this.showEquation = this.showEquation || false;\n        this.formula = this.formula || {};\n    }\n    function showEquation() {\n        if (!self.showEquation) return;\n        let html = katex.renderToString(self.parseFormulaLatex(),{displayMode: false});\n        $element.find('.equation').empty().append(html);\n    }\n\n    this.registerWatch(function() {\n        showEquation();\n    });\n    this.doAutofit = function() {\n        this.updateMaxY(d3.max(this.getData(), function(point) {return self.getY(point);}));\n    }\n    this.getLine = function() {\n        let transform = this.getTransform();\n        let orthoTransform = this.getOrthoTransform();\n        let line = d3.line().curve(d3.curveBasis)\n            .x((d, i) => {\n                return transform(self.getX(d));\n            })\n            .y((d, i) => {\n                return orthoTransform(self.getY(d));\n            });\n        return line;\n    }\n\n    function parseFormula(formula) {\n        switch(formula.family) {\n            case \"linear\":\n                return function(x) {\n                    return formula.slope * x + formula.intercept;\n                }\n            case \"exponential\":\n                return function(x) {\n                    return formula.ae * Math.exp(formula.b*x);\n                }\n            case \"power\":\n                return function (x) {\n                    return formula.coefficient * (x ** formula.exponent);\n                }\n            default: return formula.fn;\n        }\n    }\n    this.parseFormulaLatex = function() {\n        return parseFormulaLatex(this.formula) || '';\n    }\n    /*\n    function parseFormulaLatex(formula) {\n        switch(formula.family) {\n            case \"linear\":\n                let intercept = formula.intercept;\n                return `y = ${formula.slope} \\\\times x ${intercept==0?'':(intercept<0 ? '-' + (-intercept):'+' + intercept)}`;\n            case \"exponential\":\n                return `y = ${formula.ae} \\\\times e^\\{${formula.b} x\\}`;\n                \n        }\n    }*/\n    \n    this.getData = function() {\n        if (!this.lineData || this._update) {\n            this._update = false;\n            this.lineData = [];\n            let f = parseFormula(this.formula);\n            if (!f) return this.lineData;\n            if (self.inverted) {\n                let step = (this.maxDrawY - this.minDrawY) / this.resolution;\n                for (let y = this.minDrawY; (y - this.minDrawY) * (y - this.maxDrawY) <= 0; y += step) {\n                    let x = f(y);\n                    if (this.autofit || (x - this.minDraw) * (x - this.maxDraw) <= 0)\n                        this.lineData.push({ x, y })\n                }\n            }\n            else {\n                let step = (this.maxDraw - this.minDraw) / this.resolution;\n                for (let x = this.minDraw; (x - this.minDraw) * (x - this.maxDraw) <= 0; x += step) {\n                    let y = f(x);\n                    if (this.autofit || (y - this.minDrawY) * (y - this.maxDrawY) <= 0)\n                        this.lineData.push({ x, y })\n                }\n            }\n        }\n        return this.lineData;\n    }\n    this.eqnStyle = function() {\n        return {\n            transform: 'translate(' + this.eqnOffsets[0] + \", \" + this.eqnOffsets[1] + \")\",\n            color: this.lineColor\n        }\n    }\n    this.eqnCopySuccess = function() {\n        console.log(\"Copy success\");\n        if (this.layerCollection) {\n            this.layerCollection.notify(\"Coppied\", 'ti-clip', 1000);\n        }\n    }\n\tthis.parentDraw = this.draw;\n\tthis.draw = function() {\n\t\tself._update = true;\n\t\tself.parentDraw();\n\t}\n    this.$onInit = function() {\n        $scope.$watch(function() {\n            return JSON.stringify(self.formula);\n        }, function () {\n            self._update = true;\n            self.drawOptimized();\n            showEquation();\n        });\n        this.doInit();\n    }\n}\n\n\n//# sourceURL=webpack:///./line-formula-layer/index.js?");

/***/ }),

/***/ "./line-formula-layer/style.css":
/*!**************************************!*\
  !*** ./line-formula-layer/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./line-formula-layer/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./line-formula-layer/style.css?");

/***/ }),

/***/ "./line-formula-layer/template.html":
/*!******************************************!*\
  !*** ./line-formula-layer/template.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>\\n<svg style=\\\"margin: {{self.paddingStr();}};width:calc(100% - {{self.leftPadding() + self.rightPadding()}}px); height:calc(100% - {{self.topPadding() + self.bottomPadding()}}px)\\\">\\n    <g class=\\\"layer\\\">\\n        <path fill='none' stroke=\\\"{{self.lineColor}}\\\" stroke-dasharray=\\\"{{self.lineDash}}\\\" stroke-width=\\\"{{self.lineWidth}}\\\" />\\n    </g>\\n</svg>\\n<div class=\\\"equation-holder\\\" ng-style='self.eqnStyle();'>\\n    <span ng-if=\\\"self.eqnName\\\">{{self.eqnName}}</span>\\n    <span ng-if=\\\"self.eqnName && self.showEquation\\\"> : </span>\\n    <span class='equation' ng-show=\\\"self.showEquation\\\"\\n        ngclipboard ngclipboard-success=\\\"self.eqnCopySuccess(e);\\\"\\n        data-clipboard-text=\\\"{{self.formula.text || self.parseFormulaLatex()}}\\\">\\n    </span>\\n</div>\\n\";\n\n//# sourceURL=webpack:///./line-formula-layer/template.html?");

/***/ }),

/***/ "./line-gaussian-layer/index.js":
/*!**************************************!*\
  !*** ./line-gaussian-layer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduleName = 'plot-toolkit';\nconst name = \"lineGaussianLayer\";\nmodule.exports.name = name;\n\nvar AbstractLayer = __webpack_require__(/*! ../line-layer */ \"./line-layer/index.js\");\nvar AbstractLayerController = AbstractLayer.klass;\nvar component = AbstractLayer.component;\n__webpack_require__(/*! ./style.css */ \"./line-gaussian-layer/style.css\");\n\nvar layerCollection = __webpack_require__(/*! ../layer-collection */ \"./layer-collection/index.js\");\nangular.module(moduleName).component(name, component({\n    controller: LGLayerController, \n    template: __webpack_require__(/*! ./template.html */ \"./line-gaussian-layer/template.html\"),\n    bindings: {\n        mean: \"<\",\n        sigma: \"<\",\n        resolution: \"<\",\n        lineColorSecond: \"<\",\n        lineWidthSecond: \"<\",\n        lineDashSecond: \"<\"\n    }\n}));\nfunction LGLayerController($scope, $timeout, $element) {\n    let self = this;\n    AbstractLayerController.call(this, $timeout, $element, $scope);\n\n    this.watchProperties = this.watchProperties.concat([\n        \"mean\",\n        \"sigma\",\n        \"resolution\",\n        \"lineColorSecond\",\n        \"lineWidthSecond\",\n        \"lineDashSecond\"\n    ]);\n\n    this.defaultBindings = function() {\n        this.lineColorSecond = this.lineColorSecond || this.lineColor || \"purple\";\n        this.lineDashSecond = this.lineDashSecond || this.lineDash || \"5 3\";\n        this.lineWidthSecond = this.lineWidthSecond || this.lineWidth || 1;\n        this.resolution = this.resolution || 500;\n        this.mean = this.mean || 0;\n        this.sigma = this.sigma || 1;\n        this.lineStyleDefault();\n    }\n    this.doAutofit = function() {\n        this.updateMaxY(d3.max(this.getData(), function(point) {return self.getY(point);}));\n    }\n\n    this.watchProperties = this.watchProperties.concat(['mean', 'sigma', \n        'resolution', 'lineColorSecond', 'lineWidthSecond', 'lineDashSecond'\n    ]);\n    this.getLine = function() {\n        let transform = this.getTransform();\n        let orthoTransform = this.getOrthoTransform();\n        let line = d3.line().curve(d3.curveBasis)\n            .x((d, i) => {\n                return transform(self.getX(d));\n            })\n            .y((d, i) => {\n                return orthoTransform(self.getY(d));\n            });\n        return line;\n    }\n\n    //taken from Jason Davies science library\n    // https://github.com/jasondavies/science.js/\n    function gaussian(x, mean, sigma) {\n        let gaussianConstant = 1 / Math.sqrt(2 * Math.PI);\n\n        x = (x - mean) / sigma;\n        return gaussianConstant * Math.exp(-.5 * x * x) / sigma;\n    }\n\n    function normal(mean, sigma) {\n        let x = 0, y = 0, rds, c;\n        let xSample;\n        do {\n            do {\n                x = (Math.random() * 2 - 1);\n                y = (Math.random() * 2 - 1);\n                rds = x * x + y * y;\n            } while (rds == 0 || rds > 1);\n            c = Math.sqrt(-2 * Math.log(rds) / rds); // Box-Muller transform\n            xSample = mean + sigma * x * c;\n        } while ((xSample - self.minVal)*(xSample - self.maxVal) > 0 );\n\n        return xSample;\n    }\n\n    function getData(numSamples, mean, sigma) {\n        let x,y;\n        let data = new Array();\n        x = self.minVal;\n        y = gaussian(x, mean, sigma);\n        data.push({x, y});\n        x = self.maxVal;\n        y = gaussian(x, mean, sigma);\n        data.push({x, y});\n        for (let i = 0; i < numSamples; i++) {\n            x = normal(mean, sigma); // calc random draw from normal dist\n            y = gaussian(x, mean, sigma) // calc prob of rand draw\n            data.push({x, y});\n        };\n        // need to sort for plotting\n        data.sort(function (x, y) {\n            return x.x - y.x;\n        });\n        return data;\n    }\n    \n    this.getData = function() {\n        return getData(this.resolution, this.mean, this.sigma);\n    }\n    this.$onInit = function() {\n        this.doInit();\n    }\n    this.sigmaLineStyle = function() {\n        return {\n            \"stroke\": this.lineColorSecond,\n            \"stroke-width\": this.lineWidthSecond,\n            \"stroke-dasharray\": this.lineDashSecond\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./line-gaussian-layer/index.js?");

/***/ }),

/***/ "./line-gaussian-layer/style.css":
/*!***************************************!*\
  !*** ./line-gaussian-layer/style.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./line-gaussian-layer/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./line-gaussian-layer/style.css?");

/***/ }),

/***/ "./line-gaussian-layer/template.html":
/*!*******************************************!*\
  !*** ./line-gaussian-layer/template.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>\\n<svg style=\\\"margin: {{self.paddingStr();}};width:calc(100% - {{self.leftPadding() + self.rightPadding()}}px); height:calc(100% - {{self.topPadding() + self.bottomPadding()}}px)\\\">\\n    <g class=\\\"layer\\\">\\n        <path fill='none' stroke=\\\"{{self.lineColor}}\\\" stroke-dasharray=\\\"{{self.lineDash}}\\\" stroke-width=\\\"{{self.lineWidth}}\\\" />\\n        <line ng-x1=\\\"{{self.getTransform()(self.mean - self.sigma)}}\\\" ng-y1=\\\"0\\\" \\n            ng-x2=\\\"{{self.getTransform()(self.mean - self.sigma)}}\\\" \\n            ng-y2=\\\"{{self.contentHeight(true);}}\\\"\\n            ng-style=\\\"self.sigmaLineStyle()\\\" />\\n        <line ng-x1=\\\"{{self.getTransform()(self.mean + self.sigma)}}\\\" ng-y1=\\\"0\\\" \\n            ng-x2=\\\"{{self.getTransform()(self.mean + self.sigma)}}\\\" \\n            ng-y2=\\\"{{self.contentHeight(true);}}\\\" \\n            ng-style=\\\"self.sigmaLineStyle()\\\" />\\n    </g>\\n</svg>\\n</div>\\n\\n\";\n\n//# sourceURL=webpack:///./line-gaussian-layer/template.html?");

/***/ }),

/***/ "./line-layer/index.js":
/*!*****************************!*\
  !*** ./line-layer/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const name = \"lineLayer\";\nmodule.exports.name = name;\nmodule.exports.klass = LineLayerController;\nmodule.exports.component = buildComponent;\n\n__webpack_require__(/*! ./style.css */ \"./line-layer/style.css\");\nvar AbstractLayer = __webpack_require__(/*! ../abstract-layer-2d */ \"./abstract-layer-2d/index.js\");\nvar AbstractLayerController = AbstractLayer.klass;\nvar component = AbstractLayer.component;\n\nfunction buildComponent(componentData) {\n    componentData.template = componentData.template || __webpack_require__(/*! ./template.html */ \"./line-layer/template.html\");\n    componentData.bindings = {\n        lineColor: \"<\",\n        lineDash: \"<\",\n        lineWidth: \"<\",\n        lineData: \"<\",\n        getX : \"<\",\n        getY : \"<\",\n        ...componentData.bindings\n    }\n    return component(componentData);\n}\n\nfunction LineLayerController($timeout, $element, $scope) {\n    let self = this;\n    AbstractLayerController.call(this, $timeout, $element, $scope);\n\n    this.watchProperties = this.watchProperties.concat([\n        \"lineColor\",\n        \"lineDash\",\n        \"lineWidth\"\n    ]);\n    this.lineStyleDefault = function () {\n        this.twoDBindings();\n        this.lineColor = this.lineColor || 'black';\n        this.lineDash = this.lineDash || \"0\";\n        this.lineWidth = this.lineWidth || 1;\n        this.getX = typeof(this.getX) === \"function\" ? this.getX: (d) => {return d.x;};\n        this.getY = typeof(this.getY) === \"function\" ? this.getY: (d) => {return d.y;};\n    }\n    this.getLine = function() {\n        console.error(\"Abstract getLine\");\n    }\n    this.getData = function() {\n        return this.lineData;\n    }\n    this.draw = draw;\n    function draw() {\n        let line = this.getLine();\n        const data = this.getData() || [];\n        d3.select($element.find('path')[0])\n            .datum(data)\n            .attr('d', line);\n    }\n}\n\n\n//# sourceURL=webpack:///./line-layer/index.js?");

/***/ }),

/***/ "./line-layer/style.css":
/*!******************************!*\
  !*** ./line-layer/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./line-layer/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./line-layer/style.css?");

/***/ }),

/***/ "./line-layer/template.html":
/*!**********************************!*\
  !*** ./line-layer/template.html ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>\\n<svg style=\\\"margin: {{self.paddingStr();}};width:calc(100% - {{self.leftPadding() + self.rightPadding()}}px); height:calc(100% - {{self.topPadding() + self.bottomPadding()}}px)\\\">\\n    <g class=\\\"layer\\\">\\n        <path fill='none' stroke=\\\"{{self.lineColor}}\\\" stroke-dasharray=\\\"{{self.lineDash}}\\\" stroke-width=\\\"{{self.lineWidth}}\\\" />\\n    </g>\\n</svg>\\n</div>\\n\\n\";\n\n//# sourceURL=webpack:///./line-layer/template.html?");

/***/ }),

/***/ "./line-point-layer/index.js":
/*!***********************************!*\
  !*** ./line-point-layer/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduleName = 'plot-toolkit';\nconst name = \"linePointLayer\";\nmodule.exports.name = name;\n\nvar AbstractLayer = __webpack_require__(/*! ../line-layer */ \"./line-layer/index.js\");\nvar AbstractLayerController = AbstractLayer.klass;\nvar component = AbstractLayer.component;\n\nvar layerCollection = __webpack_require__(/*! ../layer-collection */ \"./layer-collection/index.js\");\nangular.module(moduleName).component(name, component({\n    controller: LPLayerController, \n    bindings: {\n    }\n}));\nfunction LPLayerController($scope, $timeout, $element) {\n    let self = this;\n    AbstractLayerController.call(this, $timeout, $element, $scope);\n    this.watchProperties = this.watchProperties.concat([\n        \"lineData\",\n    ]);\n    this.defaultBindings = function() {\n        this.lineStyleDefault();\n    }\n    this.doAutofit = function() {\n        this.updateMaxY(d3.max(this.getData(), function(point,i) {return self.getY(point,i);}));\n    }\n    this.getLine = function() {\n        let transform = this.getTransform();\n        let orthoTransform = this.getOrthoTransform();\n        let line = d3.line().curve(d3.curveBasis)\n            .x((d, i) => {\n                return transform(self.getX(d, i));\n            })\n            .y((d, i) => {\n                return orthoTransform(self.getY(d, i));\n            });\n        return line;\n    }\n    this.$onInit = function() {\n        this.doInit();\n    }\n}\n\n\n//# sourceURL=webpack:///./line-point-layer/index.js?");

/***/ }),

/***/ "./plot-toolkit-module.js":
/*!********************************!*\
  !*** ./plot-toolkit-module.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const moduleName = 'plot-toolkit';\nangular.module(moduleName, [ 'ngclipboard', 'katexView' ])\n    .directive('ngOffset', function() {\n        return function(scope, elem, attrs) {\n            attrs.$observe('ngOffset', function(o) {\n                let offset = JSON.parse(o);\n                elem.attr('transform', `translate(${offset.x}, ${offset.y})`);\n            });\n        };\n    })\n    .directive(\"ngPoints\", function() {\n        return function(scope, elem, attrs) {\n            attrs.$observe(\"ngPoints\", function(pointsS) {\n                let pointsStr = \"\";\n                let points = JSON.parse(pointsS);\n                for (let p of points) {\n                    pointsStr += `${p.x},${p.y} `;\n                }\n                elem.attr(\"points\", pointsStr);\n            });\n        }\n    })\n    .directive('ngX', function() {\n        return function(scope, elem, attrs) {\n            attrs.$observe('ngX', function(x) {\n                elem.attr('x', x);\n            });\n        };\n    })\n    .directive('ngY', function() {\n        return function(scope, elem, attrs) {\n            attrs.$observe('ngY', function(y) {\n                elem.attr('y', y);\n            });\n        };\n    })\n    .directive('ngWidth', function() {\n        return function(scope, elem, attrs) {\n            attrs.$observe('ngWidth', function(width) {\n                elem.attr('width', width);\n            });\n        };\n    })\n    .directive('ngHeight', function() {\n        return function(scope, elem, attrs) {\n            attrs.$observe('ngHeight', function(height) {\n                elem.attr('height', height);\n            });\n        };\n    })\n    .directive('ngFill', function() {\n        return function(scope, elem, attrs) {\n            attrs.$observe('ngFill', function(fill){\n                elem.attr('fill', fill);\n            });\n        };\n    })\n    .directive('ngX1', function() {\n        return function(scope, elem, attrs) {\n            attrs.$observe('ngX1', function(fill){\n                elem.attr('x1', fill);\n            });\n        };\n    })\n    .directive('ngX2', function() {\n        return function(scope, elem, attrs) {\n            attrs.$observe('ngX2', function(fill){\n                elem.attr('x2', fill);\n            });\n        };\n    })\n    .directive('ngY1', function() {\n        return function(scope, elem, attrs) {\n            attrs.$observe('ngY1', function(fill){\n                elem.attr('y1', fill);\n            });\n        };\n    })\n    .directive('ngY2', function() {\n        return function(scope, elem, attrs) {\n            attrs.$observe('ngY2', function(fill){\n                elem.attr('y2', fill);\n            });\n        };\n    })\n    .directive('ngR', function() {\n        return function(scope, elem, attrs) {\n            attrs.$observe('ngR', function(r){\n                elem.attr('r', r);\n            });\n        };\n    })\n    .directive('ngStroke', function() {\n        return function(scope, elem, attrs) {\n            attrs.$observe('ngStroke', function(strokeColor){\n                elem.attr('stroke', strokeColor);\n            });\n        };\n    })\n    .directive('ngStrokeWidth', function() {\n        return function(scope, elem, attrs) {\n            attrs.$observe('ngStrokeWidth', function(strokeWidth){\n                elem.attr('stroke-width', strokeWidth);\n            });\n        };\n    });\n\n\n//# sourceURL=webpack:///./plot-toolkit-module.js?");

/***/ }),

/***/ "./polygon-layer/index.js":
/*!********************************!*\
  !*** ./polygon-layer/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduleName = 'plot-toolkit';\nconst name = 'polygonLayer';\nmodule.exports.name = name;\n\nvar AbstractLayer = __webpack_require__(/*! ../interactive-layer */ \"./interactive-layer/index.js\");\nvar AbstractLayerController = AbstractLayer.klass;\nvar component = AbstractLayer.component;\nconst _ = __webpack_require__(/*! lodash */ \"../node_modules/lodash/lodash.js\");\n\nvar layerCollection = __webpack_require__(/*! ../layer-collection */ \"./layer-collection/index.js\");\nangular.module(moduleName)\n    .component(name, component({\n        controller: PolygonLayerController,\n        bindings: { }\n    }));\n\nfunction PolygonLayerController($timeout, $element, $scope) {\n    let self = this;\n    let dragging = false;\n    AbstractLayerController.call(this, $timeout, $element, $scope);\n\n    this.$onInit = function() {\n        this.doInit();\n    }\n    this.defaultBindings = function() {\n        this.interactiveBindings();\n    }\n    this.doAutofit = function() { }\n    this.draw = function() { }\n    this.mouseDownAddPoint = function($event) {\n        let transformX = this.getTransform();\n        let transformY = this.getOrthoTransform();\n        let x = $event.offsetX;\n        let y = $event.offsetY;\n        let result = this.findClosest({x,y}, this.points, transformX, transformY);\n        if (!_.isFinite(result.idx)) this.points = [{x:transformX.invert(x), y:transformY.invert(y)}];\n        else if (this.points.length === 1) {\n            this.points.push({x:transformX.invert(x), y:transformY.invert(y)});\n        }\n        else {\n            let prevIdx = (result.idx + 1) % this.points.length;\n            let nextIdx = (result.idx + this.points.length - 1) % this.points.length;\n            let prevDist = this.distance({x,y}, this.points[prevIdx], transformX, transformY);\n            let nextDist = this.distance({x,y}, this.points[nextIdx], transformX, transformY);\n            if (prevDist < nextDist) {\n                this.points.splice(prevIdx, 0, {x:transformX.invert(x), y:transformY.invert(y)});\n            }\n            else {\n                this.points.splice(result.idx, 0, {x:transformX.invert(x), y:transformY.invert(y)});\n            }\n        }\n    }\n    this.mouseDownDelPoint = function($event) {\n        if (_.isFinite(this.editPointIdx)) {\n            this.points.splice(this.editPointIdx, 1);\n            this.editPointIdx = undefined;\n        }\n    }\n}\n\n\n//# sourceURL=webpack:///./polygon-layer/index.js?");

/***/ }),

/***/ "./scatter-layer/index.js":
/*!********************************!*\
  !*** ./scatter-layer/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduleName = 'plot-toolkit';\nconst name = \"scatterLayer\";\nmodule.exports.name = name;\n\n\nvar AbstractLayer = __webpack_require__(/*! ../abstract-layer-2d */ \"./abstract-layer-2d/index.js\");\nvar AbstractLayerController = AbstractLayer.klass;\nvar component = AbstractLayer.component;\n\nvar isFinite = __webpack_require__(/*! lodash */ \"../node_modules/lodash/lodash.js\").isFinite;\n\nvar layerCollection = __webpack_require__(/*! ../layer-collection */ \"./layer-collection/index.js\");\nvar CanvasHelper = __webpack_require__(/*! ../canvas-helper */ \"./canvas-helper.js\");\nangular.module(moduleName).component(name, component({\n    controller: ScatterLayerController, \n    template: __webpack_require__(/*! ./template.html */ \"./scatter-layer/template.html\"),\n    bindings: {\n        myDataX: \"<\",\n        myDataY: \"<\",\n        colorFunc: \"<\",\n        pointSizeFunc: \"<\",\n        symbol: \"<\",\n        symbolSize: \"<\",\n        symbolFillStyle: \"<\",\n        symbolStrokeStyle: \"<\",\n        symbolStyle: \"<\",\n        getVal: \"<\",\n        getX: \"<\",\n        getY: \"<\"\n    }\n}));\n\nfunction ScatterLayerController($timeout, $element, $scope) {\n    let self = this;\n    AbstractLayerController.call(this, $timeout, $element, $scope);\n\n    this.watchProperties = this.watchProperties.concat([\n        \"symbol\",\n        \"symbolSize\",\n        \"symbolFillStyle\",\n        \"symbolStrokeStyle\",\n    ]);\n    this.defaultBindings = function() {\n        this.pointSizeFunc = checkFn(this.pointSizeFunc) || function(d, i) {return 10;};\n        this.getX = checkFn(this.getX) || checkFn(this.getVal) || asIs;\n        this.getY = checkFn(this.getY) || checkFn(this.getVal) || asIs;\n        this.symbol = this.symbol || 'circle';\n        this.symbolSize = this.symbolSize || 5;\n        this.symbolFillStyle = this.symbolFillStyle || 'blue';\n        this.symbolStrokeStyle = this.symbolStrokeStyle || 'blue';\n        this.colorFunc = checkFn(this.colorFunc) || function (d, i) {\n            return self.symbolFillStyle || \"blue\";\n        };\n    }\n    this.$onInit = function() {\n        $scope.$watch(function() {\n            return self.myDataX;\n        }, function() {\n            self.getPoints(true);\n            self.draw();\n        });\n        $scope.$watch(function() {\n            return self.myDataY;\n        }, function() {\n            self.getPoints(true);\n            self.draw();\n        });\n        this.doInit();\n    }\n    this.doAutofit = function() {\n        this.updateMaxY(d3.max(this.myDataY, function(point) {return self.getY(point, i)}));\n    }\n    this.getPoints = function(update) {\n        if (!update && this.points) return this.points;\n        this.points = [];\n        if (this.myDataX && this.myDataX.length && this.myDataY && this.myDataY.length) {\n            let n = Math.max(this.myDataX.length, this.myDataY.length);\n            for (let i = 0; i < n; i++) {\n                let x = this.getX(this.myDataX[i], i);\n                let y = this.getY(this.myDataY[i], i);\n                if (isFinite(x) && isFinite(y)) {\n                    this.points.push({\n                        fillStyle: this.colorFunc({x, y}, i),\n                        idx: i, x, y\n                    });\n                }\n            }\n        }\n        return this.points;\n    }\n    let _canvas;\n    function getCanvas() {\n        if (_canvas) return _canvas;\n        _canvas = $element.find('canvas')[0];\n        return _canvas;\n    }\n    this.draw = function() {\n        canvas = getCanvas();\n        canvas.width = this.contentWidth();\n        canvas.height = this.contentHeight();\n        let ctx = canvas.getContext('2d');\n        let transformX = this.getTransform();\n        let transformY = this.getOrthoTransform();\n        let symbolDefaultCfg = {\n            size: this.symbolSize,\n            fillStyle: this.symbolFillStyle,\n            strokeStyle: this.symbolStrokeStyle,\n            ...this.symbolStyle,\n        }\n        let helper = new CanvasHelper(ctx, symbolDefaultCfg);\n        let plotFunc = helper[this.symbol.toLowerCase()];\n        let points = this.getPoints();\n        for (let p of points) {\n            plotFunc.call(helper, transformX(p.x), transformY(p.y), {\n                fillStyle: p.fillStyle,\n            });\n        }\n    }\n}\nfunction asIs(d,i) {\n    return d;\n}\nfunction checkFn(f) {\n    return typeof(f) === \"function\" ? f : null;\n}\n\n\n\n//# sourceURL=webpack:///./scatter-layer/index.js?");

/***/ }),

/***/ "./scatter-layer/template.html":
/*!*************************************!*\
  !*** ./scatter-layer/template.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>\\n<canvas style=\\\"margin: {{self.paddingStr();}};width:calc(100% - {{self.leftPadding() + self.rightPadding()}}px); height:calc(100% - {{self.topPadding() + self.bottomPadding()}}px)\\\">\\n</canvas>\\n</div>\\n\\n\";\n\n//# sourceURL=webpack:///./scatter-layer/template.html?");

/***/ }),

/***/ "./segment-layer/index.js":
/*!********************************!*\
  !*** ./segment-layer/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const moduleName = 'plot-toolkit';\nconst name = 'segmentLayer';\nmodule.exports.name = name;\n\nlet common = __webpack_require__(/*! ../common */ \"./common.js\");\nlet findLinearEqn = common.findLinearEqn;\nlet parseFormulaLatex = common.parseFormulaLatex;\nvar AbstractLayer = __webpack_require__(/*! ../interactive-layer */ \"./interactive-layer/index.js\");\nvar AbstractLayerController = AbstractLayer.klass;\nvar component = AbstractLayer.component;\nconst _ = __webpack_require__(/*! lodash */ \"../node_modules/lodash/lodash.js\");\n\n__webpack_require__(/*! ./style.css */ \"./segment-layer/style.css\");\nvar layerCollection = __webpack_require__(/*! ../layer-collection */ \"./layer-collection/index.js\");\nangular.module(moduleName)\n    .component(name, component({\n        controller: SegmentLayerController,\n        template: __webpack_require__(/*! ./template.html */ \"./segment-layer/template.html\"),\n        bindings: {\n            eqnOffsets: \"<\"\n        }\n    }));\n\nfunction SegmentLayerController($timeout, $element, $scope) {\n    let self = this;\n    let dragging = false;\n    AbstractLayerController.call(this, $timeout, $element, $scope);\n\n    this.watchProperties = this.watchProperties.concat([\n        \"eqnOffsets\"\n    ]);\n    this.$onInit = function() {\n        this.doInit();\n        $scope.$watch(function() {\n            return self.points;\n        }, function() {\n            showEquation();\n        }, true);\n    }\n    this.defaultBindings = function() {\n        this.interactiveBindings();\n        this.eqnOffsets = this.eqnOffsets || [0,0];\n    }\n    this.doAutofit = function() { }\n    this.draw = function() { }\n    this.mouseDownAddPoint = function($event) {\n        let transformX = this.getTransform();\n        let transformY = this.getOrthoTransform();\n        let x = $event.offsetX;\n        let y = $event.offsetY;\n        let result = this.findClosest({x,y}, this.points, transformX, transformY);\n        if (!_.isFinite(result.idx)) {\n            this.points = [{x:transformX.invert(x), y:transformY.invert(y)}];\n        }\n        else if (this.points.length === 1) {\n            this.points.push({x:transformX.invert(x), y:transformY.invert(y)});\n        }\n        else {\n            this.points.splice(result.idx, 1, {x:transformX.invert(x), y:transformY.invert(y)});\n        }\n    }\n    this.mouseDownDelPoint = function($event) {\n        if (_.isFinite(this.editPointIdx)) {\n            this.points.splice(this.editPointIdx, 1);\n            this.editPointIdx = undefined;\n        }\n    }\n    this.calcEquation = function() {\n        if (this.points.length !== 2) return \"\";\n        else {\n            let formula = findLinearEqn(this.points[0], this.points[1]);\n            let latex = parseFormulaLatex(formula);\n            return latex;\n        }\n    }\n    this.eqnStyle = function() {\n        return {\n            transform: 'translate(' + this.eqnOffsets[0] + \", \" + this.eqnOffsets[1] + \")\",\n            color: this.strokeStyle\n        }\n    }\n    this.eqnCopySuccess = function() {\n        console.log(\"Copy success\");\n        if (this.layerCollection) {\n            this.layerCollection.notify(\"Coppied\", 'ti-clip', 1000);\n        }\n    }\n    function showEquation() {\n        console.log('katex render');\n        /*katex.render(self.calcEquation(), \n            $element.find('.equation')[0], {displayMode: false});\n        */\n        let html = katex.renderToString(self.calcEquation(), {throwOnError: false});\n        $element.find('.equation').empty().append(html);\n    }\n    this.registerWatch(function() {\n        showEquation();\n    });\n}\n\n\n//# sourceURL=webpack:///./segment-layer/index.js?");

/***/ }),

/***/ "./segment-layer/style.css":
/*!*********************************!*\
  !*** ./segment-layer/style.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./segment-layer/style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ \"../node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./segment-layer/style.css?");

/***/ }),

/***/ "./segment-layer/template.html":
/*!*************************************!*\
  !*** ./segment-layer/template.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div>\\n<svg ng-class=\\\"{'edit-point': self.mode, 'add-point': self.shiftKey, 'del-point': self.altKey}\\\" \\n    style=\\\"margin: {{self.paddingStr();}};width:calc(100% - {{self.leftPadding() + self.rightPadding()}}px); height:calc(100% - {{self.bottomPadding() + self.topPadding()}}px)\\\"\\n    ng-mouseleave=\\\"self.onMouseLeave($event)\\\"\\n    ng-mouseup=\\\"self.onMouseUp($event)\\\"\\n    ng-mousedown=\\\"self.onMouseDown($event)\\\"\\n    ng-mousemove=\\\"self.onMouseMove($event)\\\">\\n    <g class=\\\"layer\\\">\\n        <polygon ng-points=\\\"{{self.getPoints()}}\\\" ng-fill=\\\"{{self.fillStyle}}\\\" ng-stroke=\\\"{{self.strokeStyle}}\\\" ng-stroke-width=\\\"{{self.strokeWidth}}\\\">\\n        </polygon>\\n        <circle cx=\\\"0\\\" cy=\\\"0\\\" r=\\\"5\\\" ng-style=\\\"self.draggerStyle()\\\" ng-offset=\\\"{{self.draggerOffset()}}\\\"></circle>\\n    </g>\\n</svg>\\n</div>\\n<div class=\\\"status\\\" ng-bind=\\\"self.getCoordinates()\\\" ng-style=\\\"\\\"></div>\\n<div class='equation' \\n    ng-style='self.eqnStyle();' \\n    ngclipboard ngclipboard-success=\\\"self.eqnCopySuccess(e);\\\"\\n    data-clipboard-text=\\\"{{self.calcEquation();}}\\\"></div>\\n</div>\\n\";\n\n//# sourceURL=webpack:///./segment-layer/template.html?");

/***/ }),

/***/ "dll-reference library":
/*!**************************!*\
  !*** external "library" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = library;\n\n//# sourceURL=webpack:///external_%22library%22?");

/***/ })

/******/ });