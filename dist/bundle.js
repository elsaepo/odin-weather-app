/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Carter+One&family=Poppins:wght@200;300;400;500;600&family=Roboto+Mono:wght@200;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: rgb(50, 50, 50);\n    font-family: Poppins;\n    color: white;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n    margin: 0;\n}\n\n#app {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 30% 30% 36% 4%;\n}\n\nsection {\n    padding: 8%;\n}\n\nheader {\n    height: 100%;\n}\n\n.day-section {\n    display: flex;\n    align-items: center;\n}\n\n.main-block {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 120px auto 10% 1fr;\n    grid-template-rows: 42px 20px 40px 30px 30px 30px;\n}\n\n.main-block > * {\n    width: 100%;\n    height: 100%;\n}\n\n.main-description, .main-location, .main-date {\n    grid-column: 1 / 6;\n}\n\n.main-description {\n    font-size: 2rem;\n    font-weight: 500;\n}\n\n.main-icon {\n    grid-column: 1 / 2;\n    grid-row: 4 / 7;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.main-icon > img {\n    transform: scale(0.8)\n}\n\n.main-temp {\n    grid-column: 2 / 3;\n    grid-row: 4 / 7;\n    display: flex;\n    align-items: center;\n    font-size: 6rem;\n    font-weight: 700;\n}\n\n.main-units {\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\n.main-feels-like, .main-humidity, .main-wind {\n    grid-column: 4 / 5;\n    font-size: 0.9rem;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n}\n\n.main-feels-like {\n    grid-row: 4 / 5;\n}\n\n.main-humidity {\n    grid-row: 5 / 6;\n}\n\n.main-wind {\n    grid-row: 6 / 7;\n}\n\n.forecast-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n    padding: 8%;\n}\n\n.forecast-scroller {\n    position: relative;\n    max-width: 100%;\n    height: 120px;\n    padding-top: 10px;\n    border: 1px solid white;\n    overflow: hidden;\n}\n\n.forecast-scroller-active {\n    cursor: grab;\n}\n\n.forecast-container {\n    position: absolute;\n    display: flex;\n}\n\n.forecast-block {\n    width: 80px;\n    height: 100px;\n    display: grid;\n    grid-template-columns: 50% 50%;\n    grid-template-rows: 25% 45% 30%;\n    column-gap: 6px;\n}\n\n.forecast-block > * {\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.forecast-day {\n    grid-column: 1 / -1;\n    grid-row: 1 / 2;\n    font-size: 1.2rem;\n}\n\n.forecast-icon {\n    grid-column: 1 / -1;\n    grid-row: 2 / 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* transform: scale(1.2); */\n    /* text-align: center; */\n    /* width: 100%; */\n    /* margin-top: -16px; */\n}\n\n.forecast-icon > img {\n    transform: scale(0.4)\n}\n\n.forecast-max-temp {\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n    font-weight: 700;\n    justify-content: end;\n}\n\n.forecast-min-temp {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    font-weight: 100;\n    justify-content: start;\n}\n\n\nfooter {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nfooter p {\n    padding: 0;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,iCAAiC;IACjC,oBAAoB;IACpB,YAAY;AAChB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,yCAAyC;IACzC,iDAAiD;AACrD;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI;AACJ;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB,WAAW;AACf;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,iBAAiB;IACjB,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;AACjB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,+BAA+B;IAC/B,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,2BAA2B;IAC3B,wBAAwB;IACxB,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI;AACJ;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,sBAAsB;AAC1B;;;AAGA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Carter+One&family=Poppins:wght@200;300;400;500;600&family=Roboto+Mono:wght@200;400;700&display=swap\");\n\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: rgb(50, 50, 50);\n    font-family: Poppins;\n    color: white;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n    margin: 0;\n}\n\n#app {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 30% 30% 36% 4%;\n}\n\nsection {\n    padding: 8%;\n}\n\nheader {\n    height: 100%;\n}\n\n.day-section {\n    display: flex;\n    align-items: center;\n}\n\n.main-block {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 120px auto 10% 1fr;\n    grid-template-rows: 42px 20px 40px 30px 30px 30px;\n}\n\n.main-block > * {\n    width: 100%;\n    height: 100%;\n}\n\n.main-description, .main-location, .main-date {\n    grid-column: 1 / 6;\n}\n\n.main-description {\n    font-size: 2rem;\n    font-weight: 500;\n}\n\n.main-icon {\n    grid-column: 1 / 2;\n    grid-row: 4 / 7;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.main-icon > img {\n    transform: scale(0.8)\n}\n\n.main-temp {\n    grid-column: 2 / 3;\n    grid-row: 4 / 7;\n    display: flex;\n    align-items: center;\n    font-size: 6rem;\n    font-weight: 700;\n}\n\n.main-units {\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\n.main-feels-like, .main-humidity, .main-wind {\n    grid-column: 4 / 5;\n    font-size: 0.9rem;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n}\n\n.main-feels-like {\n    grid-row: 4 / 5;\n}\n\n.main-humidity {\n    grid-row: 5 / 6;\n}\n\n.main-wind {\n    grid-row: 6 / 7;\n}\n\n.forecast-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n    padding: 8%;\n}\n\n.forecast-scroller {\n    position: relative;\n    max-width: 100%;\n    height: 120px;\n    padding-top: 10px;\n    border: 1px solid white;\n    overflow: hidden;\n}\n\n.forecast-scroller-active {\n    cursor: grab;\n}\n\n.forecast-container {\n    position: absolute;\n    display: flex;\n}\n\n.forecast-block {\n    width: 80px;\n    height: 100px;\n    display: grid;\n    grid-template-columns: 50% 50%;\n    grid-template-rows: 25% 45% 30%;\n    column-gap: 6px;\n}\n\n.forecast-block > * {\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.forecast-day {\n    grid-column: 1 / -1;\n    grid-row: 1 / 2;\n    font-size: 1.2rem;\n}\n\n.forecast-icon {\n    grid-column: 1 / -1;\n    grid-row: 2 / 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* transform: scale(1.2); */\n    /* text-align: center; */\n    /* width: 100%; */\n    /* margin-top: -16px; */\n}\n\n.forecast-icon > img {\n    transform: scale(0.4)\n}\n\n.forecast-max-temp {\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n    font-weight: 700;\n    justify-content: end;\n}\n\n.forecast-min-temp {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    font-weight: 100;\n    justify-content: start;\n}\n\n\nfooter {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nfooter p {\n    padding: 0;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/domController.js":
/*!******************************!*\
  !*** ./src/domController.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const app = document.querySelector("#app");
const header = document.createElement("header");
const dayContainer = document.createElement("section");
dayContainer.classList.add("day-section");
const forecastContainer = document.createElement("section");
forecastContainer.classList.add("forecast-section")
const footer = document.createElement("footer");
const footerName = document.createElement("p");
footerName.textContent = "Carl Madsen 2022";
footer.appendChild(footerName);
app.append(header, dayContainer, forecastContainer, footer)

function createMainWeather(weather) {
    const mainBlock = document.createElement("div");
    mainBlock.classList.add("main-block");

    let current = weather.weatherData.current;

    // Create the weather elements from arguments and store them in an object for iterating appends    
    const mainElements = {
        status: createWeatherElement("main", "description", `${current.weather.description}.`),
        location: createWeatherElement("main", "location", `${weather.geoData.name}, ${weather.geoData.country}`),
        date: createWeatherElement("main", "date", `${new Date().toLocaleDateString("en-us", { weekday: 'long', month: 'short', day: 'numeric' })} / ${new Date().toLocaleTimeString("en-us", { timeStyle: "short" })}`),
        icon: createWeatherElement("main", "icon", `http://openweathermap.org/img/wn/${current.weather.icon}@4x.png`),
        temp: createWeatherElement("main", "temp", Math.round(current.currentTemp)),
        units: createWeatherElement("main", "units", `${current.units === "CHANGE THIS HERE" ? "C" : "C"}`),
        feelsLike: createWeatherElement("main", "feels-like", `FEELS LIKE: ${Math.round(current.feelsLike)}${current.units === "CHANGE THIS HERE" ? "C" : "C"}`),
        humidity: createWeatherElement("main", "humidity", `HUMIDITY: ${current.humidity}%`),
        wind: createWeatherElement("main", "wind", `WIND: ${Math.round(current.wind.speed)}km/h`)
        // optional: chance of rain
    }
    for (let element in mainElements) {
        mainBlock.appendChild(mainElements[element]);
    }
    return mainBlock;
}

function createForecastScroller(){
    let isDown = false;
    let startX;
    let scrollLeft;
    const slider = document.createElement("div");
    slider.classList.add("forecast-scroller");
    const end = () => {
        isDown = false;
        slider.classList.remove("forecast-scroller-active");
    }
    const start = (event) => {
        isDown = true;
        slider.classList.add("forecast-scroller-active");
        startX = event.pageX || event.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    }
    const move = (event) => {
        if(!isDown) return;
        event.preventDefault();
        const x = event.pageX || event.touches[0].pageX - slider.offsetLeft;
        const dist = (x - startX);
        slider.scrollLeft = scrollLeft - dist;
    }
    slider.addEventListener("mousedown", start);
    slider.addEventListener("touchstart", start);
    slider.addEventListener("mousemove", move);
    slider.addEventListener("touchmove", move);
    slider.addEventListener("mouseleave", end);
    slider.addEventListener("mouseup", end);
    slider.addEventListener("touchend", end);
    return slider;
}

function createForecastWeather(forecast) {
    const forecastScroller = createForecastScroller();
    const forecastContainer = document.createElement("div");
    forecastContainer.classList.add("forecast-container");
    for (let day of forecast) {
        const forecastBlock = document.createElement("div");
        forecastBlock.classList.add("forecast-block");
        const forecastElements = {
            day: createWeatherElement("forecast", "day", day.date.toLocaleDateString("en-us", { weekday: 'short' })),
            icon: createWeatherElement("forecast", "icon", `http://openweathermap.org/img/wn/${day.weather.icon}@4x.png`),
            maxTemp: createWeatherElement("forecast", "max-temp", `${Math.round(day.maxTemp)}°`),
            minTemp: createWeatherElement("forecast", "min-temp", `${Math.round(day.minTemp)}°`),
            // units: createWeatherElement("forecast", "units", `${day.units === "CHANGE THIS HERE" ? "C" : "C"}`),
            // optional: chance of rain
        }
        for (let element in forecastElements){
            forecastBlock.appendChild(forecastElements[element]);
        }
        forecastContainer.appendChild(forecastBlock);
    }
    forecastScroller.appendChild(forecastContainer);
    return forecastScroller;
}

// Creates a weather element based on where it is used (main or forecast), it's type and content
// Sets class to be a standadised format for easier CSSing of the grid
function createWeatherElement(use, type, content) {
    if (type === "icon") {
        const block = document.createElement("div");
        block.classList.add(`${use}-${type}`);
        const image = document.createElement("img");
        image.src = content;
        block.appendChild(image);
        return block;
    }
    const block = document.createElement("p")
    block.classList.add(`${use}-${type}`);
    block.textContent = content;
    return block;
}

function createWeather(weather) {
    dayContainer.appendChild(createMainWeather(weather))
    console.log(weather.weatherData.daily)
    forecastContainer.appendChild(createForecastWeather(weather.weatherData.daily))
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    createWeather
});

/***/ }),

/***/ "./src/getWeather.js":
/*!***************************!*\
  !*** ./src/getWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const apiKey = 'd65152ea28ed7bb6aa6f34676f08bc27';

// Checks the response of the API, and throws an error if the response is not considered good
function checkResponse(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    } else {
        return response;
    }
}

// Takes a valid city input and fetches geographical data from API, to pass into next API
// Returns the first result in the case of multiple valid cities
// If there are no valid cities, throws an error
async function getGeocodeData(city) {
    try {
        let response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`,
            { mode: "cors" })
        checkResponse(response);
        let geoData = await response.json();
        if (!geoData[0]) {
            throw Error("NO_CITY");
        } else {
            return geoData[0];
        }
    }
    catch (err) {
        throw err;
    }
}

// Fetches the current weather and weather forecast for 7 days (daily) and 48 hours (hourly) from API
// Current weather is a single object, forecasts are array of weather objects
// Takes geographical object returned from getGeocodeData()
async function getWeatherData(location, units) {
    let lon = location.lon;
    let lat = location.lat;
    let exclude = `minutely,alerts`;
    let response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=${exclude}&appid=${apiKey}`,
        { mode: "cors" });
    checkResponse(response);
    let weatherData = await response.json();
    return weatherData;
}

// Main function we will be calling - gets geo data, then gets current weather and forecast
// Returns an object that contains both data blocks as objects
async function getWeather(location, units) {
    let geoData = getGeocodeData(location);
    let weatherData = geoData.then(loc => {
        return getWeatherData(loc, units);
    });
    return Promise.all([geoData, weatherData])
    .then(([geoData, weatherData]) => {
        return {
            geoData,
            weatherData
        }
    })
    .catch(err => {
        console.error(err);
        throw Error(err);
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);

/***/ }),

/***/ "./src/processWeather.js":
/*!*******************************!*\
  !*** ./src/processWeather.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Takes a weather object that contains the weather properties of that moment
// and converts it to a much more readable and reduced format
function parseData(data) {
    let tempObject = {
        date: new Date(data.dt * 1000),
        currentTemp: data.temp,
        feelsLike: data.feels_like,
        humidity: data.humidity,
        wind: {
            speed: data.wind_speed,
            deg: data.wind_deg
        },
        weather: {
            description: data.weather[0].description,
            type: data.weather[0].main,
            icon: data.weather[0].icon
        }
    }
    // If parsing a forecast weather object, use different gets for the properties
    if (typeof data.temp !== "number") {
        delete tempObject.currentTemp;
        tempObject.maxTemp = data.temp.max;
        tempObject.minTemp = data.temp.min;
        tempObject.feelsLike = data.feels_like.day;
    }
    return tempObject;
}

// Takes an array of weather objects that represents the forecasted weather
function convertForecast(data) {
    return data.map(day => parseData(day));
}

// Takes the raw weather input object and returns the parsed data for each property
function processWeather(weatherObject) {
    let weather = {
        current: parseData(weatherObject.current),
        daily: convertForecast(weatherObject.daily)
    }
    //
    // CHECK TO SEE IF THIS REQUIRES AN IF/ELSE STATEMENT AROUND MIDNIGHT
    // E.G., IF THE FIRST FORECAST OBJECT IN THE ARRAY IS -NOT- THE CURRENT DAY
    //
    // Add forecast maxTemp data to the currentWeather object
    weather.current.maxTemp = weather.daily[0].maxTemp;
    // Then chop out the first day so it doesn't appear in the forecast
    weather.daily.splice(0, 1);
    return weather;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (processWeather);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _processWeather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processWeather.js */ "./src/processWeather.js");
/* harmony import */ var _getWeather_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getWeather.js */ "./src/getWeather.js");
/* harmony import */ var _domController_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domController.js */ "./src/domController.js");





const apiKey = 'd65152ea28ed7bb6aa6f34676f08bc27';
let units = "metric";

// convert the city into the correct format before passing it to getWeather:
//
//
let weather = (0,_getWeather_js__WEBPACK_IMPORTED_MODULE_2__["default"])("Melbourne,Australia", "metric");
weather
.then(data => {
    data.weatherData = (0,_processWeather_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data.weatherData);
    return data;
})
.then((weather) => {
    _domController_js__WEBPACK_IMPORTED_MODULE_3__["default"].createWeather(weather)
})
.catch(err => {
    console.error(err)
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDMkI7QUFDUDtBQUNLOztBQUU5QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsMERBQVU7QUFDeEI7QUFDQTtBQUNBLHVCQUF1Qiw4REFBYztBQUNyQztBQUNBLENBQUM7QUFDRDtBQUNBLElBQUksdUVBQTJCO0FBQy9CLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9kb21Db250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvZ2V0V2VhdGhlci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3Byb2Nlc3NXZWF0aGVyLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXJ0ZXIrT25lJmZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMCZmYW1pbHk9Um9ib3RvK01vbm86d2dodEAyMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA1MCwgNTApO1xcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jYXBwIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwJSAzMCUgMzYlIDQlO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gICAgcGFkZGluZzogOCU7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmRheS1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tYmxvY2sge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMjBweCBhdXRvIDEwJSAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNDJweCAyMHB4IDQwcHggMzBweCAzMHB4IDMwcHg7XFxufVxcblxcbi5tYWluLWJsb2NrID4gKiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tYWluLWRlc2NyaXB0aW9uLCAubWFpbi1sb2NhdGlvbiwgLm1haW4tZGF0ZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNjtcXG59XFxuXFxuLm1haW4tZGVzY3JpcHRpb24ge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5tYWluLWljb24ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiA0IC8gNztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWljb24gPiBpbWcge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOClcXG59XFxuXFxuLm1haW4tdGVtcCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDQgLyA3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5tYWluLXVuaXRzIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tYWluLWZlZWxzLWxpa2UsIC5tYWluLWh1bWlkaXR5LCAubWFpbi13aW5kIHtcXG4gICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5tYWluLWZlZWxzLWxpa2Uge1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxufVxcblxcbi5tYWluLWh1bWlkaXR5IHtcXG4gICAgZ3JpZC1yb3c6IDUgLyA2O1xcbn1cXG5cXG4ubWFpbi13aW5kIHtcXG4gICAgZ3JpZC1yb3c6IDYgLyA3O1xcbn1cXG5cXG4uZm9yZWNhc3Qtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBwYWRkaW5nOiA4JTtcXG59XFxuXFxuLmZvcmVjYXN0LXNjcm9sbGVyIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmZvcmVjYXN0LXNjcm9sbGVyLWFjdGl2ZSB7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZvcmVjYXN0LWJsb2NrIHtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNTAlIDUwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyNSUgNDUlIDMwJTtcXG4gICAgY29sdW1uLWdhcDogNnB4O1xcbn1cXG5cXG4uZm9yZWNhc3QtYmxvY2sgPiAqIHtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5mb3JlY2FzdC1kYXkge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4uZm9yZWNhc3QtaWNvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIC8qIHRyYW5zZm9ybTogc2NhbGUoMS4yKTsgKi9cXG4gICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAqL1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgLyogbWFyZ2luLXRvcDogLTE2cHg7ICovXFxufVxcblxcbi5mb3JlY2FzdC1pY29uID4gaW1nIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjQpXFxufVxcblxcbi5mb3JlY2FzdC1tYXgtdGVtcCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLmZvcmVjYXN0LW1pbi10ZW1wIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcblxcbmZvb3RlciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG5mb290ZXIgcCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGlDQUFpQztJQUNqQyxvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMsaURBQWlEO0FBQ3JEOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQjs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksVUFBVTtBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhcnRlcitPbmUmZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwJmZhbWlseT1Sb2JvdG8rTW9ubzp3Z2h0QDIwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDUwLCA1MCk7XFxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNhcHAge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzAlIDMwJSAzNiUgNCU7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgICBwYWRkaW5nOiA4JTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZGF5LXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1ibG9jayB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEyMHB4IGF1dG8gMTAlIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MnB4IDIwcHggNDBweCAzMHB4IDMwcHggMzBweDtcXG59XFxuXFxuLm1haW4tYmxvY2sgPiAqIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1haW4tZGVzY3JpcHRpb24sIC5tYWluLWxvY2F0aW9uLCAubWFpbi1kYXRlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA2O1xcbn1cXG5cXG4ubWFpbi1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLm1haW4taWNvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDQgLyA3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4taWNvbiA+IGltZyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KVxcbn1cXG5cXG4ubWFpbi10ZW1wIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogNCAvIDc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm1haW4tdW5pdHMge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1haW4tZmVlbHMtbGlrZSwgLm1haW4taHVtaWRpdHksIC5tYWluLXdpbmQge1xcbiAgICBncmlkLWNvbHVtbjogNCAvIDU7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLm1haW4tZmVlbHMtbGlrZSB7XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG59XFxuXFxuLm1haW4taHVtaWRpdHkge1xcbiAgICBncmlkLXJvdzogNSAvIDY7XFxufVxcblxcbi5tYWluLXdpbmQge1xcbiAgICBncmlkLXJvdzogNiAvIDc7XFxufVxcblxcbi5mb3JlY2FzdC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIHBhZGRpbmc6IDglO1xcbn1cXG5cXG4uZm9yZWNhc3Qtc2Nyb2xsZXIge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1heC13aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZm9yZWNhc3Qtc2Nyb2xsZXItYWN0aXZlIHtcXG4gICAgY3Vyc29yOiBncmFiO1xcbn1cXG5cXG4uZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZm9yZWNhc3QtYmxvY2sge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1JSA0NSUgMzAlO1xcbiAgICBjb2x1bW4tZ2FwOiA2cHg7XFxufVxcblxcbi5mb3JlY2FzdC1ibG9jayA+ICoge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0LWRheSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5mb3JlY2FzdC1pY29uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyAqL1xcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICAvKiBtYXJnaW4tdG9wOiAtMTZweDsgKi9cXG59XFxuXFxuLmZvcmVjYXN0LWljb24gPiBpbWcge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNClcXG59XFxuXFxuLmZvcmVjYXN0LW1heC10ZW1wIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4uZm9yZWNhc3QtbWluLXRlbXAge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuXFxuZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gICAgcGFkZGluZzogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcHBcIik7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuY29uc3QgZGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5kYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRheS1zZWN0aW9uXCIpO1xuY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbmZvcmVjYXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1zZWN0aW9uXCIpXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuY29uc3QgZm9vdGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuZm9vdGVyTmFtZS50ZXh0Q29udGVudCA9IFwiQ2FybCBNYWRzZW4gMjAyMlwiO1xuZm9vdGVyLmFwcGVuZENoaWxkKGZvb3Rlck5hbWUpO1xuYXBwLmFwcGVuZChoZWFkZXIsIGRheUNvbnRhaW5lciwgZm9yZWNhc3RDb250YWluZXIsIGZvb3RlcilcblxuZnVuY3Rpb24gY3JlYXRlTWFpbldlYXRoZXIod2VhdGhlcikge1xuICAgIGNvbnN0IG1haW5CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkJsb2NrLmNsYXNzTGlzdC5hZGQoXCJtYWluLWJsb2NrXCIpO1xuXG4gICAgbGV0IGN1cnJlbnQgPSB3ZWF0aGVyLndlYXRoZXJEYXRhLmN1cnJlbnQ7XG5cbiAgICAvLyBDcmVhdGUgdGhlIHdlYXRoZXIgZWxlbWVudHMgZnJvbSBhcmd1bWVudHMgYW5kIHN0b3JlIHRoZW0gaW4gYW4gb2JqZWN0IGZvciBpdGVyYXRpbmcgYXBwZW5kcyAgICBcbiAgICBjb25zdCBtYWluRWxlbWVudHMgPSB7XG4gICAgICAgIHN0YXR1czogY3JlYXRlV2VhdGhlckVsZW1lbnQoXCJtYWluXCIsIFwiZGVzY3JpcHRpb25cIiwgYCR7Y3VycmVudC53ZWF0aGVyLmRlc2NyaXB0aW9ufS5gKSxcbiAgICAgICAgbG9jYXRpb246IGNyZWF0ZVdlYXRoZXJFbGVtZW50KFwibWFpblwiLCBcImxvY2F0aW9uXCIsIGAke3dlYXRoZXIuZ2VvRGF0YS5uYW1lfSwgJHt3ZWF0aGVyLmdlb0RhdGEuY291bnRyeX1gKSxcbiAgICAgICAgZGF0ZTogY3JlYXRlV2VhdGhlckVsZW1lbnQoXCJtYWluXCIsIFwiZGF0ZVwiLCBgJHtuZXcgRGF0ZSgpLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLXVzXCIsIHsgd2Vla2RheTogJ2xvbmcnLCBtb250aDogJ3Nob3J0JywgZGF5OiAnbnVtZXJpYycgfSl9IC8gJHtuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLXVzXCIsIHsgdGltZVN0eWxlOiBcInNob3J0XCIgfSl9YCksXG4gICAgICAgIGljb246IGNyZWF0ZVdlYXRoZXJFbGVtZW50KFwibWFpblwiLCBcImljb25cIiwgYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7Y3VycmVudC53ZWF0aGVyLmljb259QDR4LnBuZ2ApLFxuICAgICAgICB0ZW1wOiBjcmVhdGVXZWF0aGVyRWxlbWVudChcIm1haW5cIiwgXCJ0ZW1wXCIsIE1hdGgucm91bmQoY3VycmVudC5jdXJyZW50VGVtcCkpLFxuICAgICAgICB1bml0czogY3JlYXRlV2VhdGhlckVsZW1lbnQoXCJtYWluXCIsIFwidW5pdHNcIiwgYCR7Y3VycmVudC51bml0cyA9PT0gXCJDSEFOR0UgVEhJUyBIRVJFXCIgPyBcIkNcIiA6IFwiQ1wifWApLFxuICAgICAgICBmZWVsc0xpa2U6IGNyZWF0ZVdlYXRoZXJFbGVtZW50KFwibWFpblwiLCBcImZlZWxzLWxpa2VcIiwgYEZFRUxTIExJS0U6ICR7TWF0aC5yb3VuZChjdXJyZW50LmZlZWxzTGlrZSl9JHtjdXJyZW50LnVuaXRzID09PSBcIkNIQU5HRSBUSElTIEhFUkVcIiA/IFwiQ1wiIDogXCJDXCJ9YCksXG4gICAgICAgIGh1bWlkaXR5OiBjcmVhdGVXZWF0aGVyRWxlbWVudChcIm1haW5cIiwgXCJodW1pZGl0eVwiLCBgSFVNSURJVFk6ICR7Y3VycmVudC5odW1pZGl0eX0lYCksXG4gICAgICAgIHdpbmQ6IGNyZWF0ZVdlYXRoZXJFbGVtZW50KFwibWFpblwiLCBcIndpbmRcIiwgYFdJTkQ6ICR7TWF0aC5yb3VuZChjdXJyZW50LndpbmQuc3BlZWQpfWttL2hgKVxuICAgICAgICAvLyBvcHRpb25hbDogY2hhbmNlIG9mIHJhaW5cbiAgICB9XG4gICAgZm9yIChsZXQgZWxlbWVudCBpbiBtYWluRWxlbWVudHMpIHtcbiAgICAgICAgbWFpbkJsb2NrLmFwcGVuZENoaWxkKG1haW5FbGVtZW50c1tlbGVtZW50XSk7XG4gICAgfVxuICAgIHJldHVybiBtYWluQmxvY2s7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvcmVjYXN0U2Nyb2xsZXIoKXtcbiAgICBsZXQgaXNEb3duID0gZmFsc2U7XG4gICAgbGV0IHN0YXJ0WDtcbiAgICBsZXQgc2Nyb2xsTGVmdDtcbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3Qtc2Nyb2xsZXJcIik7XG4gICAgY29uc3QgZW5kID0gKCkgPT4ge1xuICAgICAgICBpc0Rvd24gPSBmYWxzZTtcbiAgICAgICAgc2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJmb3JlY2FzdC1zY3JvbGxlci1hY3RpdmVcIik7XG4gICAgfVxuICAgIGNvbnN0IHN0YXJ0ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlzRG93biA9IHRydWU7XG4gICAgICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3Qtc2Nyb2xsZXItYWN0aXZlXCIpO1xuICAgICAgICBzdGFydFggPSBldmVudC5wYWdlWCB8fCBldmVudC50b3VjaGVzWzBdLnBhZ2VYIC0gc2xpZGVyLm9mZnNldExlZnQ7XG4gICAgICAgIHNjcm9sbExlZnQgPSBzbGlkZXIuc2Nyb2xsTGVmdDtcbiAgICB9XG4gICAgY29uc3QgbW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgICBpZighaXNEb3duKSByZXR1cm47XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHggPSBldmVudC5wYWdlWCB8fCBldmVudC50b3VjaGVzWzBdLnBhZ2VYIC0gc2xpZGVyLm9mZnNldExlZnQ7XG4gICAgICAgIGNvbnN0IGRpc3QgPSAoeCAtIHN0YXJ0WCk7XG4gICAgICAgIHNsaWRlci5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCAtIGRpc3Q7XG4gICAgfVxuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHN0YXJ0KTtcbiAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgc3RhcnQpO1xuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmUpO1xuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG1vdmUpO1xuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBlbmQpO1xuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBlbmQpO1xuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZW5kKTtcbiAgICByZXR1cm4gc2xpZGVyO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVGb3JlY2FzdFdlYXRoZXIoZm9yZWNhc3QpIHtcbiAgICBjb25zdCBmb3JlY2FzdFNjcm9sbGVyID0gY3JlYXRlRm9yZWNhc3RTY3JvbGxlcigpO1xuICAgIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JlY2FzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtY29udGFpbmVyXCIpO1xuICAgIGZvciAobGV0IGRheSBvZiBmb3JlY2FzdCkge1xuICAgICAgICBjb25zdCBmb3JlY2FzdEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZm9yZWNhc3RCbG9jay5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtYmxvY2tcIik7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RWxlbWVudHMgPSB7XG4gICAgICAgICAgICBkYXk6IGNyZWF0ZVdlYXRoZXJFbGVtZW50KFwiZm9yZWNhc3RcIiwgXCJkYXlcIiwgZGF5LmRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tdXNcIiwgeyB3ZWVrZGF5OiAnc2hvcnQnIH0pKSxcbiAgICAgICAgICAgIGljb246IGNyZWF0ZVdlYXRoZXJFbGVtZW50KFwiZm9yZWNhc3RcIiwgXCJpY29uXCIsIGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RheS53ZWF0aGVyLmljb259QDR4LnBuZ2ApLFxuICAgICAgICAgICAgbWF4VGVtcDogY3JlYXRlV2VhdGhlckVsZW1lbnQoXCJmb3JlY2FzdFwiLCBcIm1heC10ZW1wXCIsIGAke01hdGgucm91bmQoZGF5Lm1heFRlbXApfcKwYCksXG4gICAgICAgICAgICBtaW5UZW1wOiBjcmVhdGVXZWF0aGVyRWxlbWVudChcImZvcmVjYXN0XCIsIFwibWluLXRlbXBcIiwgYCR7TWF0aC5yb3VuZChkYXkubWluVGVtcCl9wrBgKSxcbiAgICAgICAgICAgIC8vIHVuaXRzOiBjcmVhdGVXZWF0aGVyRWxlbWVudChcImZvcmVjYXN0XCIsIFwidW5pdHNcIiwgYCR7ZGF5LnVuaXRzID09PSBcIkNIQU5HRSBUSElTIEhFUkVcIiA/IFwiQ1wiIDogXCJDXCJ9YCksXG4gICAgICAgICAgICAvLyBvcHRpb25hbDogY2hhbmNlIG9mIHJhaW5cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBlbGVtZW50IGluIGZvcmVjYXN0RWxlbWVudHMpe1xuICAgICAgICAgICAgZm9yZWNhc3RCbG9jay5hcHBlbmRDaGlsZChmb3JlY2FzdEVsZW1lbnRzW2VsZW1lbnRdKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdEJsb2NrKTtcbiAgICB9XG4gICAgZm9yZWNhc3RTY3JvbGxlci5hcHBlbmRDaGlsZChmb3JlY2FzdENvbnRhaW5lcik7XG4gICAgcmV0dXJuIGZvcmVjYXN0U2Nyb2xsZXI7XG59XG5cbi8vIENyZWF0ZXMgYSB3ZWF0aGVyIGVsZW1lbnQgYmFzZWQgb24gd2hlcmUgaXQgaXMgdXNlZCAobWFpbiBvciBmb3JlY2FzdCksIGl0J3MgdHlwZSBhbmQgY29udGVudFxuLy8gU2V0cyBjbGFzcyB0byBiZSBhIHN0YW5kYWRpc2VkIGZvcm1hdCBmb3IgZWFzaWVyIENTU2luZyBvZiB0aGUgZ3JpZFxuZnVuY3Rpb24gY3JlYXRlV2VhdGhlckVsZW1lbnQodXNlLCB0eXBlLCBjb250ZW50KSB7XG4gICAgaWYgKHR5cGUgPT09IFwiaWNvblwiKSB7XG4gICAgICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYmxvY2suY2xhc3NMaXN0LmFkZChgJHt1c2V9LSR7dHlwZX1gKTtcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBpbWFnZS5zcmMgPSBjb250ZW50O1xuICAgICAgICBibG9jay5hcHBlbmRDaGlsZChpbWFnZSk7XG4gICAgICAgIHJldHVybiBibG9jaztcbiAgICB9XG4gICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoYCR7dXNlfS0ke3R5cGV9YCk7XG4gICAgYmxvY2sudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIHJldHVybiBibG9jaztcbn1cblxuZnVuY3Rpb24gY3JlYXRlV2VhdGhlcih3ZWF0aGVyKSB7XG4gICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZU1haW5XZWF0aGVyKHdlYXRoZXIpKVxuICAgIGNvbnNvbGUubG9nKHdlYXRoZXIud2VhdGhlckRhdGEuZGFpbHkpXG4gICAgZm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9yZWNhc3RXZWF0aGVyKHdlYXRoZXIud2VhdGhlckRhdGEuZGFpbHkpKVxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY3JlYXRlV2VhdGhlclxufSIsImNvbnN0IGFwaUtleSA9ICdkNjUxNTJlYTI4ZWQ3YmI2YWE2ZjM0Njc2ZjA4YmMyNyc7XG5cbi8vIENoZWNrcyB0aGUgcmVzcG9uc2Ugb2YgdGhlIEFQSSwgYW5kIHRocm93cyBhbiBlcnJvciBpZiB0aGUgcmVzcG9uc2UgaXMgbm90IGNvbnNpZGVyZWQgZ29vZFxuZnVuY3Rpb24gY2hlY2tSZXNwb25zZShyZXNwb25zZSkge1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbn1cblxuLy8gVGFrZXMgYSB2YWxpZCBjaXR5IGlucHV0IGFuZCBmZXRjaGVzIGdlb2dyYXBoaWNhbCBkYXRhIGZyb20gQVBJLCB0byBwYXNzIGludG8gbmV4dCBBUElcbi8vIFJldHVybnMgdGhlIGZpcnN0IHJlc3VsdCBpbiB0aGUgY2FzZSBvZiBtdWx0aXBsZSB2YWxpZCBjaXRpZXNcbi8vIElmIHRoZXJlIGFyZSBubyB2YWxpZCBjaXRpZXMsIHRocm93cyBhbiBlcnJvclxuYXN5bmMgZnVuY3Rpb24gZ2V0R2VvY29kZURhdGEoY2l0eSkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHl9JmxpbWl0PTUmYXBwaWQ9JHthcGlLZXl9YCxcbiAgICAgICAgICAgIHsgbW9kZTogXCJjb3JzXCIgfSlcbiAgICAgICAgY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgIGxldCBnZW9EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBpZiAoIWdlb0RhdGFbMF0pIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTk9fQ0lUWVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBnZW9EYXRhWzBdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbn1cblxuLy8gRmV0Y2hlcyB0aGUgY3VycmVudCB3ZWF0aGVyIGFuZCB3ZWF0aGVyIGZvcmVjYXN0IGZvciA3IGRheXMgKGRhaWx5KSBhbmQgNDggaG91cnMgKGhvdXJseSkgZnJvbSBBUElcbi8vIEN1cnJlbnQgd2VhdGhlciBpcyBhIHNpbmdsZSBvYmplY3QsIGZvcmVjYXN0cyBhcmUgYXJyYXkgb2Ygd2VhdGhlciBvYmplY3RzXG4vLyBUYWtlcyBnZW9ncmFwaGljYWwgb2JqZWN0IHJldHVybmVkIGZyb20gZ2V0R2VvY29kZURhdGEoKVxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXRzKSB7XG4gICAgbGV0IGxvbiA9IGxvY2F0aW9uLmxvbjtcbiAgICBsZXQgbGF0ID0gbG9jYXRpb24ubGF0O1xuICAgIGxldCBleGNsdWRlID0gYG1pbnV0ZWx5LGFsZXJ0c2A7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZ1bml0cz0ke3VuaXRzfSZleGNsdWRlPSR7ZXhjbHVkZX0mYXBwaWQ9JHthcGlLZXl9YCxcbiAgICAgICAgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICBsZXQgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuXG4vLyBNYWluIGZ1bmN0aW9uIHdlIHdpbGwgYmUgY2FsbGluZyAtIGdldHMgZ2VvIGRhdGEsIHRoZW4gZ2V0cyBjdXJyZW50IHdlYXRoZXIgYW5kIGZvcmVjYXN0XG4vLyBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGJvdGggZGF0YSBibG9ja3MgYXMgb2JqZWN0c1xuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbiwgdW5pdHMpIHtcbiAgICBsZXQgZ2VvRGF0YSA9IGdldEdlb2NvZGVEYXRhKGxvY2F0aW9uKTtcbiAgICBsZXQgd2VhdGhlckRhdGEgPSBnZW9EYXRhLnRoZW4obG9jID0+IHtcbiAgICAgICAgcmV0dXJuIGdldFdlYXRoZXJEYXRhKGxvYywgdW5pdHMpO1xuICAgIH0pO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChbZ2VvRGF0YSwgd2VhdGhlckRhdGFdKVxuICAgIC50aGVuKChbZ2VvRGF0YSwgd2VhdGhlckRhdGFdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZW9EYXRhLFxuICAgICAgICAgICAgd2VhdGhlckRhdGFcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgdGhyb3cgRXJyb3IoZXJyKTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlcjsiLCIvLyBUYWtlcyBhIHdlYXRoZXIgb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIHdlYXRoZXIgcHJvcGVydGllcyBvZiB0aGF0IG1vbWVudFxuLy8gYW5kIGNvbnZlcnRzIGl0IHRvIGEgbXVjaCBtb3JlIHJlYWRhYmxlIGFuZCByZWR1Y2VkIGZvcm1hdFxuZnVuY3Rpb24gcGFyc2VEYXRhKGRhdGEpIHtcbiAgICBsZXQgdGVtcE9iamVjdCA9IHtcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0YS5kdCAqIDEwMDApLFxuICAgICAgICBjdXJyZW50VGVtcDogZGF0YS50ZW1wLFxuICAgICAgICBmZWVsc0xpa2U6IGRhdGEuZmVlbHNfbGlrZSxcbiAgICAgICAgaHVtaWRpdHk6IGRhdGEuaHVtaWRpdHksXG4gICAgICAgIHdpbmQ6IHtcbiAgICAgICAgICAgIHNwZWVkOiBkYXRhLndpbmRfc3BlZWQsXG4gICAgICAgICAgICBkZWc6IGRhdGEud2luZF9kZWdcbiAgICAgICAgfSxcbiAgICAgICAgd2VhdGhlcjoge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHR5cGU6IGRhdGEud2VhdGhlclswXS5tYWluLFxuICAgICAgICAgICAgaWNvbjogZGF0YS53ZWF0aGVyWzBdLmljb25cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBJZiBwYXJzaW5nIGEgZm9yZWNhc3Qgd2VhdGhlciBvYmplY3QsIHVzZSBkaWZmZXJlbnQgZ2V0cyBmb3IgdGhlIHByb3BlcnRpZXNcbiAgICBpZiAodHlwZW9mIGRhdGEudGVtcCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICBkZWxldGUgdGVtcE9iamVjdC5jdXJyZW50VGVtcDtcbiAgICAgICAgdGVtcE9iamVjdC5tYXhUZW1wID0gZGF0YS50ZW1wLm1heDtcbiAgICAgICAgdGVtcE9iamVjdC5taW5UZW1wID0gZGF0YS50ZW1wLm1pbjtcbiAgICAgICAgdGVtcE9iamVjdC5mZWVsc0xpa2UgPSBkYXRhLmZlZWxzX2xpa2UuZGF5O1xuICAgIH1cbiAgICByZXR1cm4gdGVtcE9iamVjdDtcbn1cblxuLy8gVGFrZXMgYW4gYXJyYXkgb2Ygd2VhdGhlciBvYmplY3RzIHRoYXQgcmVwcmVzZW50cyB0aGUgZm9yZWNhc3RlZCB3ZWF0aGVyXG5mdW5jdGlvbiBjb252ZXJ0Rm9yZWNhc3QoZGF0YSkge1xuICAgIHJldHVybiBkYXRhLm1hcChkYXkgPT4gcGFyc2VEYXRhKGRheSkpO1xufVxuXG4vLyBUYWtlcyB0aGUgcmF3IHdlYXRoZXIgaW5wdXQgb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBwYXJzZWQgZGF0YSBmb3IgZWFjaCBwcm9wZXJ0eVxuZnVuY3Rpb24gcHJvY2Vzc1dlYXRoZXIod2VhdGhlck9iamVjdCkge1xuICAgIGxldCB3ZWF0aGVyID0ge1xuICAgICAgICBjdXJyZW50OiBwYXJzZURhdGEod2VhdGhlck9iamVjdC5jdXJyZW50KSxcbiAgICAgICAgZGFpbHk6IGNvbnZlcnRGb3JlY2FzdCh3ZWF0aGVyT2JqZWN0LmRhaWx5KVxuICAgIH1cbiAgICAvL1xuICAgIC8vIENIRUNLIFRPIFNFRSBJRiBUSElTIFJFUVVJUkVTIEFOIElGL0VMU0UgU1RBVEVNRU5UIEFST1VORCBNSUROSUdIVFxuICAgIC8vIEUuRy4sIElGIFRIRSBGSVJTVCBGT1JFQ0FTVCBPQkpFQ1QgSU4gVEhFIEFSUkFZIElTIC1OT1QtIFRIRSBDVVJSRU5UIERBWVxuICAgIC8vXG4gICAgLy8gQWRkIGZvcmVjYXN0IG1heFRlbXAgZGF0YSB0byB0aGUgY3VycmVudFdlYXRoZXIgb2JqZWN0XG4gICAgd2VhdGhlci5jdXJyZW50Lm1heFRlbXAgPSB3ZWF0aGVyLmRhaWx5WzBdLm1heFRlbXA7XG4gICAgLy8gVGhlbiBjaG9wIG91dCB0aGUgZmlyc3QgZGF5IHNvIGl0IGRvZXNuJ3QgYXBwZWFyIGluIHRoZSBmb3JlY2FzdFxuICAgIHdlYXRoZXIuZGFpbHkuc3BsaWNlKDAsIDEpO1xuICAgIHJldHVybiB3ZWF0aGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9jZXNzV2VhdGhlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBwcm9jZXNzV2VhdGhlciBmcm9tIFwiLi9wcm9jZXNzV2VhdGhlci5qc1wiXG5pbXBvcnQgZ2V0V2VhdGhlciBmcm9tICcuL2dldFdlYXRoZXIuanMnO1xuaW1wb3J0IGRvbUNvbnRyb2xsZXIgZnJvbSBcIi4vZG9tQ29udHJvbGxlci5qc1wiXG5cbmNvbnN0IGFwaUtleSA9ICdkNjUxNTJlYTI4ZWQ3YmI2YWE2ZjM0Njc2ZjA4YmMyNyc7XG5sZXQgdW5pdHMgPSBcIm1ldHJpY1wiO1xuXG4vLyBjb252ZXJ0IHRoZSBjaXR5IGludG8gdGhlIGNvcnJlY3QgZm9ybWF0IGJlZm9yZSBwYXNzaW5nIGl0IHRvIGdldFdlYXRoZXI6XG4vL1xuLy9cbmxldCB3ZWF0aGVyID0gZ2V0V2VhdGhlcihcIk1lbGJvdXJuZSxBdXN0cmFsaWFcIiwgXCJtZXRyaWNcIik7XG53ZWF0aGVyXG4udGhlbihkYXRhID0+IHtcbiAgICBkYXRhLndlYXRoZXJEYXRhID0gcHJvY2Vzc1dlYXRoZXIoZGF0YS53ZWF0aGVyRGF0YSk7XG4gICAgcmV0dXJuIGRhdGE7XG59KVxuLnRoZW4oKHdlYXRoZXIpID0+IHtcbiAgICBkb21Db250cm9sbGVyLmNyZWF0ZVdlYXRoZXIod2VhdGhlcilcbn0pXG4uY2F0Y2goZXJyID0+IHtcbiAgICBjb25zb2xlLmVycm9yKGVycilcbn0pXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==