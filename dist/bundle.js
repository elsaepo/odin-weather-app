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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: rgb(50, 50, 50);\n    font-family: Poppins;\n    color: white;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n    margin: 0;\n}\n\n#app {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 30% 30% 36% 4%;\n}\n\nsection {\n    padding: 8%;\n}\n\nheader {\n    height: 100%;\n}\n\n.day-section {\n    display: flex;\n    align-items: center;\n}\n\n.main-block {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 25% auto 10% 1fr;\n    grid-template-rows: 42px 20px 40px 30px 30px 30px;\n}\n\n.main-block > * {\n    width: 100%;\n    height: 100%;\n}\n\n.main-description, .main-location, .main-date {\n    grid-column: 1 / 6;\n}\n\n.main-description {\n    font-size: 2rem;\n    font-weight: 500;\n}\n\n.main-icon {\n    grid-column: 1 / 2;\n    grid-row: 4 / 7;\n    transform: scale(1.5)\n}\n\n.main-temp {\n    grid-column: 2 / 3;\n    grid-row: 4 / 7;\n    display: flex;\n    align-items: center;\n    font-size: 6rem;\n    font-weight: 700;\n}\n\n.main-units {\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\n.main-feels-like, .main-humidity, .main-wind {\n    grid-column: 4 / 5;\n    font-size: 0.9rem;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n}\n\n.main-feels-like {\n    grid-row: 4 / 5;\n}\n\n.main-humidity {\n    grid-row: 5 / 6;\n}\n\n.main-wind {\n    grid-row: 6 / 7;\n}\n\n.forecast-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n}\n\n.forecast-container {\n    width: 100%;\n    /* height: 130px; */\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 8px;\n}\n\n.forecast-block {\n    width: 100%;\n    height: 100px;\n    display: grid;\n    grid-template-columns: 50% 50%;\n    grid-template-rows: 25% 45% 30%;\n    column-gap: 6px;\n}\n\n.forecast-block > * {\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.forecast-day {\n    grid-column: 1 / -1;\n    grid-row: 1 / 2;\n    font-size: 1.2rem;\n}\n\n.forecast-icon {\n    grid-column: 1 / -1;\n    grid-row: 2 / 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* transform: scale(1.2); */\n    text-align: center;\n    width: 100%;\n    margin-top: -16px;\n}\n\n.forecast-max-temp {\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n    font-weight: 700;\n    justify-content: end;\n}\n\n.forecast-min-temp {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    font-weight: 100;\n    justify-content: start;\n}\n\n\nfooter {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nfooter p {\n    padding: 0;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,iCAAiC;IACjC,oBAAoB;IACpB,YAAY;AAChB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,uCAAuC;IACvC,iDAAiD;AACrD;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf;AACJ;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,oBAAoB;AACxB;;AAEA;IACI,WAAW;IACX,mBAAmB;IACnB,aAAa;IACb,qCAAqC;IACrC,QAAQ;AACZ;;AAEA;IACI,WAAW;IACX,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,+BAA+B;IAC/B,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,2BAA2B;IAC3B,kBAAkB;IAClB,WAAW;IACX,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,sBAAsB;AAC1B;;;AAGA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,UAAU;AACd","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Carter+One&family=Poppins:wght@200;300;400;500;600&family=Roboto+Mono:wght@200;400;700&display=swap\");\n\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: rgb(50, 50, 50);\n    font-family: Poppins;\n    color: white;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n    margin: 0;\n}\n\n#app {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 30% 30% 36% 4%;\n}\n\nsection {\n    padding: 8%;\n}\n\nheader {\n    height: 100%;\n}\n\n.day-section {\n    display: flex;\n    align-items: center;\n}\n\n.main-block {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 25% auto 10% 1fr;\n    grid-template-rows: 42px 20px 40px 30px 30px 30px;\n}\n\n.main-block > * {\n    width: 100%;\n    height: 100%;\n}\n\n.main-description, .main-location, .main-date {\n    grid-column: 1 / 6;\n}\n\n.main-description {\n    font-size: 2rem;\n    font-weight: 500;\n}\n\n.main-icon {\n    grid-column: 1 / 2;\n    grid-row: 4 / 7;\n    transform: scale(1.5)\n}\n\n.main-temp {\n    grid-column: 2 / 3;\n    grid-row: 4 / 7;\n    display: flex;\n    align-items: center;\n    font-size: 6rem;\n    font-weight: 700;\n}\n\n.main-units {\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\n.main-feels-like, .main-humidity, .main-wind {\n    grid-column: 4 / 5;\n    font-size: 0.9rem;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n}\n\n.main-feels-like {\n    grid-row: 4 / 5;\n}\n\n.main-humidity {\n    grid-row: 5 / 6;\n}\n\n.main-wind {\n    grid-row: 6 / 7;\n}\n\n.forecast-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n}\n\n.forecast-container {\n    width: 100%;\n    /* height: 130px; */\n    display: grid;\n    grid-template-columns: repeat(4, 1fr);\n    gap: 8px;\n}\n\n.forecast-block {\n    width: 100%;\n    height: 100px;\n    display: grid;\n    grid-template-columns: 50% 50%;\n    grid-template-rows: 25% 45% 30%;\n    column-gap: 6px;\n}\n\n.forecast-block > * {\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.forecast-day {\n    grid-column: 1 / -1;\n    grid-row: 1 / 2;\n    font-size: 1.2rem;\n}\n\n.forecast-icon {\n    grid-column: 1 / -1;\n    grid-row: 2 / 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* transform: scale(1.2); */\n    text-align: center;\n    width: 100%;\n    margin-top: -16px;\n}\n\n.forecast-max-temp {\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n    font-weight: 700;\n    justify-content: end;\n}\n\n.forecast-min-temp {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    font-weight: 100;\n    justify-content: start;\n}\n\n\nfooter {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\nfooter p {\n    padding: 0;\n}"],"sourceRoot":""}]);
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

    // Create the weather elements from arguments and store them in an object for iterating appends    
    const mainElements = {
        status: createWeatherElement("main", "description", `${weather.currentWeather.weather.description}.`),
        location: createWeatherElement("main", "location", `${weather.geoData.name}, ${weather.geoData.country}`),
        date: createWeatherElement("main", "date", new Date().toLocaleDateString("en-us", { weekday: 'long', month: 'short', day: 'numeric' })),
        icon: createWeatherElement("main", "icon", `http://openweathermap.org/img/wn/${weather.currentWeather.weather.icon}@4x.png`),
        temp: createWeatherElement("main", "temp", Math.round(weather.currentWeather.currentTemp)),
        units: createWeatherElement("main", "units", `${weather.currentWeather.units === "CHANGE THIS HERE" ? "C" : "C"}`),
        feelsLike: createWeatherElement("main", "feels-like", `FEELS LIKE: ${Math.round(weather.currentWeather.feelsLike)}${weather.currentWeather.units === "CHANGE THIS HERE" ? "C" : "C"}`),
        humidity: createWeatherElement("main", "humidity", `HUMIDITY: ${weather.currentWeather.humidity}%`),
        wind: createWeatherElement("main", "wind", `WIND: ${Math.round(weather.currentWeather.wind.speed)}km/h`)
        // optional: chance of rain
    }
    for (let element in mainElements) {
        mainBlock.appendChild(mainElements[element]);
    }
    return mainBlock;
}

function createForecastWeather(weather) {
    const forecastContainer = document.createElement("div");
    forecastContainer.classList.add("forecast-container");
    for (let day of weather.forecastWeather) {
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
    return forecastContainer;
}

// Creates a weather element based on where it is used (main or forecast), it's type and content
// Sets class to be a standadised format for easier CSSing of the grid
function createWeatherElement(use, type, content) {
    if (type === "icon") {
        const block = document.createElement("img");
        block.classList.add(`${use}-${type}`);
        block.src = content;
        return block;
    }
    const block = document.createElement("p")
    block.classList.add(`${use}-${type}`);
    block.textContent = content;
    return block;
}

function createWeather(weather) {
    dayContainer.appendChild(createMainWeather(weather))
    forecastContainer.appendChild(createForecastWeather(weather))
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

// Fetches current weather data from geographical coordinates passed into API
async function getcurrentWeather(location, units) {
    let lon = location.lon;
    let lat = location.lat;
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`,
        { mode: "cors" });
    checkResponse(response);
    // Converts to valid JSON format we can use
    let currentWeather = await response.json();
    return currentWeather;
}

// Fetches 5 day forecast from geographical coordinates passed into API
// Returns an object that contains a list of 40 3hr time slots from the time the forecast was fetched
async function getForecast(location, units) {
    let lon = location.lon;
    let lat = location.lat;
    let response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`,
        { mode: "cors" });
    checkResponse(response);
    // Converts to valid JSON format we can use
    let forecastWeather = await response.json();
    return forecastWeather;
}

// Main function we will be calling - gets geo data, then gets current weather and forecast
// Returns an object that contains all 3 data blocks as objects
async function getWeather(location, units) {
    let geoData = getGeocodeData(location);
    let currentWeather = geoData.then(loc => {
        return getcurrentWeather(loc, units);
    })
    let forecastWeather = geoData.then(loc => {
        return getForecast(loc, units);
    })
    return Promise.all([geoData, currentWeather, forecastWeather])
        .then(([geoData, currentWeather, forecastWeather]) => {
            return { geoData, currentWeather, forecastWeather }
        })
        .catch(err => {
            console.error(err);
            throw Error(err);
        })
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
    return {
        date: data.dt_txt,
        currentTemp: data.main.temp,
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        wind: {
            speed: data.wind.speed,
            deg: data.wind.deg
        },
        weather: {
            description: data.weather[0].description,
            type: data.weather[0].main,
            icon: data.weather[0].icon
        }
    }
}

// Takes an array of weather objects that represents the forecasted weather
// Returns an array of the weather object split up into days, where array[0] is the current day
function convertForecast(data) {
    // Convert utx timecode to user's local time and note day of the month
    data.map(day => {
        day.dt_txt = new Date(day.dt * 1000);
        day.day = day.dt_txt.getDate();
    })
    // Split up the weather array into seperate days
    // The first day may be shorter if there's <8 3hr time blocks remaining in that day's forecast
    let forecast = [];
    let currentDay = new Date().getDate();
    let currentDayRemaining = 0;
    for (let i = 0; i < data.length; i++){
        if (data[i].day === currentDay){
            currentDayRemaining++;
        } else break;
    }
    // Divide the current day out of the forecast data
    forecast.push(data.splice(0, currentDayRemaining))
    // Once the current day's weather objects have been divided, divide the rest into 24hr chunks
    // Maximum of 5 day objects
    while (data.length) {
        forecast.push(data.splice(0, 8));
    }
    forecast = forecast.splice(0, 5)
    // Parse the data of each day at approximately midday to get normalised values
    // For the max temp data, take the maximum out of all the time blocks of that day
    let avForecast = forecast.map((day) => {
        //
        //
        //may be some bug going on here around 10-11pm with currentDayRemaing
        //
        //
        let chunkToCalc = day.length < 5 ? 0 : 4;
        // If the current day has no weather objects left, ignore its mapping
        if (day.length > 0){
            let parsedData = parseData(day[chunkToCalc]);
            parsedData.maxTemp = Math.max(...day.map((time) => time.main.temp));
            parsedData.minTemp = Math.min(...day.map((time) => time.main.temp));
            delete parsedData.currentTemp;
            delete parsedData.feelsLike;
            return parsedData;
        }
    });
    return avForecast;
}

// Takes the raw weather input object and returns the parsed data for each property
function processWeather(weatherObject) {
    let weather =  {
        geoData: weatherObject.geoData,
        currentWeather: parseData(weatherObject.currentWeather),
        forecastWeather: convertForecast(weatherObject.forecastWeather.list)
    }
    // Add maxTemp data to the currentWeather object (if the first day has a forecast object remaining)
    if (weather.forecastWeather[0].length > 0){
        weather.currentWeather.maxTemp = weather.forecastWeather[0].maxTemp;
    } else {
        weather.currentWeather.maxTemp = weather.currentWeather.currentTemp;
    }
    // Then chop out the first day so it doesn't appear in the forecast
    weather.forecastWeather.splice(0, 1);
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
let weatherData = (0,_getWeather_js__WEBPACK_IMPORTED_MODULE_2__["default"])("Melbourne,Australia", "metric");
weatherData
.then(data => {
    return (0,_processWeather_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data);
})
.then((weather) => {
    console.log(weather)
    _domController_js__WEBPACK_IMPORTED_MODULE_3__["default"].createWeather(weather)
})
.catch(err => {
    console.error(err)
})


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGtCQUFrQiwwREFBVTtBQUM1QjtBQUNBO0FBQ0EsV0FBVyw4REFBYztBQUN6QixDQUFDO0FBQ0Q7QUFDQTtBQUNBLElBQUksdUVBQTJCO0FBQy9CLENBQUM7QUFDRDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9kb21Db250cm9sbGVyLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvZ2V0V2VhdGhlci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3Byb2Nlc3NXZWF0aGVyLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1DYXJ0ZXIrT25lJmZhbWlseT1Qb3BwaW5zOndnaHRAMjAwOzMwMDs0MDA7NTAwOzYwMCZmYW1pbHk9Um9ib3RvK01vbm86d2dodEAyMDA7NDAwOzcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCA1MCwgNTApO1xcbiAgICBmb250LWZhbWlseTogUG9wcGlucztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwIHtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jYXBwIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwJSAzMCUgMzYlIDQlO1xcbn1cXG5cXG5zZWN0aW9uIHtcXG4gICAgcGFkZGluZzogOCU7XFxufVxcblxcbmhlYWRlciB7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmRheS1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4tYmxvY2sge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyNSUgYXV0byAxMCUgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDQycHggMjBweCA0MHB4IDMwcHggMzBweCAzMHB4O1xcbn1cXG5cXG4ubWFpbi1ibG9jayA+ICoge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWFpbi1kZXNjcmlwdGlvbiwgLm1haW4tbG9jYXRpb24sIC5tYWluLWRhdGUge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDY7XFxufVxcblxcbi5tYWluLWRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4ubWFpbi1pY29uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogNCAvIDc7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS41KVxcbn1cXG5cXG4ubWFpbi10ZW1wIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogNCAvIDc7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogNnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLm1haW4tdW5pdHMge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLm1haW4tZmVlbHMtbGlrZSwgLm1haW4taHVtaWRpdHksIC5tYWluLXdpbmQge1xcbiAgICBncmlkLWNvbHVtbjogNCAvIDU7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG59XFxuXFxuLm1haW4tZmVlbHMtbGlrZSB7XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG59XFxuXFxuLm1haW4taHVtaWRpdHkge1xcbiAgICBncmlkLXJvdzogNSAvIDY7XFxufVxcblxcbi5tYWluLXdpbmQge1xcbiAgICBncmlkLXJvdzogNiAvIDc7XFxufVxcblxcbi5mb3JlY2FzdC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5mb3JlY2FzdC1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgLyogaGVpZ2h0OiAxMzBweDsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbi5mb3JlY2FzdC1ibG9jayB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjUlIDQ1JSAzMCU7XFxuICAgIGNvbHVtbi1nYXA6IDZweDtcXG59XFxuXFxuLmZvcmVjYXN0LWJsb2NrID4gKiB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF5IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWljb24ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAvKiB0cmFuc2Zvcm06IHNjYWxlKDEuMik7ICovXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1hcmdpbi10b3A6IC0xNnB4O1xcbn1cXG5cXG4uZm9yZWNhc3QtbWF4LXRlbXAge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5mb3JlY2FzdC1taW4tdGVtcCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG5cXG5mb290ZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixpQ0FBaUM7SUFDakMsb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLGlEQUFpRDtBQUNyRDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Y7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxRQUFRO0FBQ1o7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2FydGVyK09uZSZmYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDAmZmFtaWx5PVJvYm90bytNb25vOndnaHRAMjAwOzQwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgNTAsIDUwKTtcXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2FwcCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMCUgMzAlIDM2JSA0JTtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDglO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5kYXktc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWJsb2NrIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIGF1dG8gMTAlIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA0MnB4IDIwcHggNDBweCAzMHB4IDMwcHggMzBweDtcXG59XFxuXFxuLm1haW4tYmxvY2sgPiAqIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1haW4tZGVzY3JpcHRpb24sIC5tYWluLWxvY2F0aW9uLCAubWFpbi1kYXRlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA2O1xcbn1cXG5cXG4ubWFpbi1kZXNjcmlwdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLm1haW4taWNvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDQgLyA3O1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSlcXG59XFxuXFxuLm1haW4tdGVtcCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDQgLyA3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDZyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5tYWluLXVuaXRzIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tYWluLWZlZWxzLWxpa2UsIC5tYWluLWh1bWlkaXR5LCAubWFpbi13aW5kIHtcXG4gICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5tYWluLWZlZWxzLWxpa2Uge1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxufVxcblxcbi5tYWluLWh1bWlkaXR5IHtcXG4gICAgZ3JpZC1yb3c6IDUgLyA2O1xcbn1cXG5cXG4ubWFpbi13aW5kIHtcXG4gICAgZ3JpZC1yb3c6IDYgLyA3O1xcbn1cXG5cXG4uZm9yZWNhc3Qtc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4uZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGhlaWdodDogMTMwcHg7ICovXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxuICAgIGdhcDogOHB4O1xcbn1cXG5cXG4uZm9yZWNhc3QtYmxvY2sge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1JSA0NSUgMzAlO1xcbiAgICBjb2x1bW4tZ2FwOiA2cHg7XFxufVxcblxcbi5mb3JlY2FzdC1ibG9jayA+ICoge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0LWRheSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5mb3JlY2FzdC1pY29uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyAqL1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiAtMTZweDtcXG59XFxuXFxuLmZvcmVjYXN0LW1heC10ZW1wIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4uZm9yZWNhc3QtbWluLXRlbXAge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuXFxuZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbmZvb3RlciBwIHtcXG4gICAgcGFkZGluZzogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcHBcIik7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuY29uc3QgZGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5kYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRheS1zZWN0aW9uXCIpO1xuY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbmZvcmVjYXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1zZWN0aW9uXCIpXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuY29uc3QgZm9vdGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuZm9vdGVyTmFtZS50ZXh0Q29udGVudCA9IFwiQ2FybCBNYWRzZW4gMjAyMlwiO1xuZm9vdGVyLmFwcGVuZENoaWxkKGZvb3Rlck5hbWUpO1xuYXBwLmFwcGVuZChoZWFkZXIsIGRheUNvbnRhaW5lciwgZm9yZWNhc3RDb250YWluZXIsIGZvb3RlcilcblxuZnVuY3Rpb24gY3JlYXRlTWFpbldlYXRoZXIod2VhdGhlcikge1xuICAgIGNvbnN0IG1haW5CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkJsb2NrLmNsYXNzTGlzdC5hZGQoXCJtYWluLWJsb2NrXCIpO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSB3ZWF0aGVyIGVsZW1lbnRzIGZyb20gYXJndW1lbnRzIGFuZCBzdG9yZSB0aGVtIGluIGFuIG9iamVjdCBmb3IgaXRlcmF0aW5nIGFwcGVuZHMgICAgXG4gICAgY29uc3QgbWFpbkVsZW1lbnRzID0ge1xuICAgICAgICBzdGF0dXM6IGNyZWF0ZVdlYXRoZXJFbGVtZW50KFwibWFpblwiLCBcImRlc2NyaXB0aW9uXCIsIGAke3dlYXRoZXIuY3VycmVudFdlYXRoZXIud2VhdGhlci5kZXNjcmlwdGlvbn0uYCksXG4gICAgICAgIGxvY2F0aW9uOiBjcmVhdGVXZWF0aGVyRWxlbWVudChcIm1haW5cIiwgXCJsb2NhdGlvblwiLCBgJHt3ZWF0aGVyLmdlb0RhdGEubmFtZX0sICR7d2VhdGhlci5nZW9EYXRhLmNvdW50cnl9YCksXG4gICAgICAgIGRhdGU6IGNyZWF0ZVdlYXRoZXJFbGVtZW50KFwibWFpblwiLCBcImRhdGVcIiwgbmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi11c1wiLCB7IHdlZWtkYXk6ICdsb25nJywgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnIH0pKSxcbiAgICAgICAgaWNvbjogY3JlYXRlV2VhdGhlckVsZW1lbnQoXCJtYWluXCIsIFwiaWNvblwiLCBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3ZWF0aGVyLmN1cnJlbnRXZWF0aGVyLndlYXRoZXIuaWNvbn1ANHgucG5nYCksXG4gICAgICAgIHRlbXA6IGNyZWF0ZVdlYXRoZXJFbGVtZW50KFwibWFpblwiLCBcInRlbXBcIiwgTWF0aC5yb3VuZCh3ZWF0aGVyLmN1cnJlbnRXZWF0aGVyLmN1cnJlbnRUZW1wKSksXG4gICAgICAgIHVuaXRzOiBjcmVhdGVXZWF0aGVyRWxlbWVudChcIm1haW5cIiwgXCJ1bml0c1wiLCBgJHt3ZWF0aGVyLmN1cnJlbnRXZWF0aGVyLnVuaXRzID09PSBcIkNIQU5HRSBUSElTIEhFUkVcIiA/IFwiQ1wiIDogXCJDXCJ9YCksXG4gICAgICAgIGZlZWxzTGlrZTogY3JlYXRlV2VhdGhlckVsZW1lbnQoXCJtYWluXCIsIFwiZmVlbHMtbGlrZVwiLCBgRkVFTFMgTElLRTogJHtNYXRoLnJvdW5kKHdlYXRoZXIuY3VycmVudFdlYXRoZXIuZmVlbHNMaWtlKX0ke3dlYXRoZXIuY3VycmVudFdlYXRoZXIudW5pdHMgPT09IFwiQ0hBTkdFIFRISVMgSEVSRVwiID8gXCJDXCIgOiBcIkNcIn1gKSxcbiAgICAgICAgaHVtaWRpdHk6IGNyZWF0ZVdlYXRoZXJFbGVtZW50KFwibWFpblwiLCBcImh1bWlkaXR5XCIsIGBIVU1JRElUWTogJHt3ZWF0aGVyLmN1cnJlbnRXZWF0aGVyLmh1bWlkaXR5fSVgKSxcbiAgICAgICAgd2luZDogY3JlYXRlV2VhdGhlckVsZW1lbnQoXCJtYWluXCIsIFwid2luZFwiLCBgV0lORDogJHtNYXRoLnJvdW5kKHdlYXRoZXIuY3VycmVudFdlYXRoZXIud2luZC5zcGVlZCl9a20vaGApXG4gICAgICAgIC8vIG9wdGlvbmFsOiBjaGFuY2Ugb2YgcmFpblxuICAgIH1cbiAgICBmb3IgKGxldCBlbGVtZW50IGluIG1haW5FbGVtZW50cykge1xuICAgICAgICBtYWluQmxvY2suYXBwZW5kQ2hpbGQobWFpbkVsZW1lbnRzW2VsZW1lbnRdKTtcbiAgICB9XG4gICAgcmV0dXJuIG1haW5CbG9jaztcbn1cblxuZnVuY3Rpb24gY3JlYXRlRm9yZWNhc3RXZWF0aGVyKHdlYXRoZXIpIHtcbiAgICBjb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZm9yZWNhc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWNvbnRhaW5lclwiKTtcbiAgICBmb3IgKGxldCBkYXkgb2Ygd2VhdGhlci5mb3JlY2FzdFdlYXRoZXIpIHtcbiAgICAgICAgY29uc3QgZm9yZWNhc3RCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZvcmVjYXN0QmxvY2suY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LWJsb2NrXCIpO1xuICAgICAgICBjb25zdCBmb3JlY2FzdEVsZW1lbnRzID0ge1xuICAgICAgICAgICAgZGF5OiBjcmVhdGVXZWF0aGVyRWxlbWVudChcImZvcmVjYXN0XCIsIFwiZGF5XCIsIGRheS5kYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLXVzXCIsIHsgd2Vla2RheTogJ3Nob3J0JyB9KSksXG4gICAgICAgICAgICBpY29uOiBjcmVhdGVXZWF0aGVyRWxlbWVudChcImZvcmVjYXN0XCIsIFwiaWNvblwiLCBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtkYXkud2VhdGhlci5pY29ufUA0eC5wbmdgKSxcbiAgICAgICAgICAgIG1heFRlbXA6IGNyZWF0ZVdlYXRoZXJFbGVtZW50KFwiZm9yZWNhc3RcIiwgXCJtYXgtdGVtcFwiLCBgJHtNYXRoLnJvdW5kKGRheS5tYXhUZW1wKX3CsGApLFxuICAgICAgICAgICAgbWluVGVtcDogY3JlYXRlV2VhdGhlckVsZW1lbnQoXCJmb3JlY2FzdFwiLCBcIm1pbi10ZW1wXCIsIGAke01hdGgucm91bmQoZGF5Lm1pblRlbXApfcKwYCksXG4gICAgICAgICAgICAvLyB1bml0czogY3JlYXRlV2VhdGhlckVsZW1lbnQoXCJmb3JlY2FzdFwiLCBcInVuaXRzXCIsIGAke2RheS51bml0cyA9PT0gXCJDSEFOR0UgVEhJUyBIRVJFXCIgPyBcIkNcIiA6IFwiQ1wifWApLFxuICAgICAgICAgICAgLy8gb3B0aW9uYWw6IGNoYW5jZSBvZiByYWluXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgZWxlbWVudCBpbiBmb3JlY2FzdEVsZW1lbnRzKXtcbiAgICAgICAgICAgIGZvcmVjYXN0QmxvY2suYXBwZW5kQ2hpbGQoZm9yZWNhc3RFbGVtZW50c1tlbGVtZW50XSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yZWNhc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9yZWNhc3RCbG9jayk7XG4gICAgfVxuICAgIHJldHVybiBmb3JlY2FzdENvbnRhaW5lcjtcbn1cblxuLy8gQ3JlYXRlcyBhIHdlYXRoZXIgZWxlbWVudCBiYXNlZCBvbiB3aGVyZSBpdCBpcyB1c2VkIChtYWluIG9yIGZvcmVjYXN0KSwgaXQncyB0eXBlIGFuZCBjb250ZW50XG4vLyBTZXRzIGNsYXNzIHRvIGJlIGEgc3RhbmRhZGlzZWQgZm9ybWF0IGZvciBlYXNpZXIgQ1NTaW5nIG9mIHRoZSBncmlkXG5mdW5jdGlvbiBjcmVhdGVXZWF0aGVyRWxlbWVudCh1c2UsIHR5cGUsIGNvbnRlbnQpIHtcbiAgICBpZiAodHlwZSA9PT0gXCJpY29uXCIpIHtcbiAgICAgICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKGAke3VzZX0tJHt0eXBlfWApO1xuICAgICAgICBibG9jay5zcmMgPSBjb250ZW50O1xuICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgfVxuICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBibG9jay5jbGFzc0xpc3QuYWRkKGAke3VzZX0tJHt0eXBlfWApO1xuICAgIGJsb2NrLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICByZXR1cm4gYmxvY2s7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXIod2VhdGhlcikge1xuICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVNYWluV2VhdGhlcih3ZWF0aGVyKSlcbiAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVGb3JlY2FzdFdlYXRoZXIod2VhdGhlcikpXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjcmVhdGVXZWF0aGVyXG59IiwiY29uc3QgYXBpS2V5ID0gJ2Q2NTE1MmVhMjhlZDdiYjZhYTZmMzQ2NzZmMDhiYzI3JztcblxuLy8gQ2hlY2tzIHRoZSByZXNwb25zZSBvZiB0aGUgQVBJLCBhbmQgdGhyb3dzIGFuIGVycm9yIGlmIHRoZSByZXNwb25zZSBpcyBub3QgY29uc2lkZXJlZCBnb29kXG5mdW5jdGlvbiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxufVxuXG4vLyBUYWtlcyBhIHZhbGlkIGNpdHkgaW5wdXQgYW5kIGZldGNoZXMgZ2VvZ3JhcGhpY2FsIGRhdGEgZnJvbSBBUEksIHRvIHBhc3MgaW50byBuZXh0IEFQSVxuLy8gUmV0dXJucyB0aGUgZmlyc3QgcmVzdWx0IGluIHRoZSBjYXNlIG9mIG11bHRpcGxlIHZhbGlkIGNpdGllc1xuLy8gSWYgdGhlcmUgYXJlIG5vIHZhbGlkIGNpdGllcywgdGhyb3dzIGFuIGVycm9yXG5hc3luYyBmdW5jdGlvbiBnZXRHZW9jb2RlRGF0YShjaXR5KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0mbGltaXQ9NSZhcHBpZD0ke2FwaUtleX1gLFxuICAgICAgICAgICAgeyBtb2RlOiBcImNvcnNcIiB9KVxuICAgICAgICBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgbGV0IGdlb0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGlmICghZ2VvRGF0YVswXSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJOT19DSVRZXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGdlb0RhdGFbMF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfVxufVxuXG4vLyBGZXRjaGVzIGN1cnJlbnQgd2VhdGhlciBkYXRhIGZyb20gZ2VvZ3JhcGhpY2FsIGNvb3JkaW5hdGVzIHBhc3NlZCBpbnRvIEFQSVxuYXN5bmMgZnVuY3Rpb24gZ2V0Y3VycmVudFdlYXRoZXIobG9jYXRpb24sIHVuaXRzKSB7XG4gICAgbGV0IGxvbiA9IGxvY2F0aW9uLmxvbjtcbiAgICBsZXQgbGF0ID0gbG9jYXRpb24ubGF0O1xuICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9JHthcGlLZXl9JnVuaXRzPSR7dW5pdHN9YCxcbiAgICAgICAgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAvLyBDb252ZXJ0cyB0byB2YWxpZCBKU09OIGZvcm1hdCB3ZSBjYW4gdXNlXG4gICAgbGV0IGN1cnJlbnRXZWF0aGVyID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHJldHVybiBjdXJyZW50V2VhdGhlcjtcbn1cblxuLy8gRmV0Y2hlcyA1IGRheSBmb3JlY2FzdCBmcm9tIGdlb2dyYXBoaWNhbCBjb29yZGluYXRlcyBwYXNzZWQgaW50byBBUElcbi8vIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYSBsaXN0IG9mIDQwIDNociB0aW1lIHNsb3RzIGZyb20gdGhlIHRpbWUgdGhlIGZvcmVjYXN0IHdhcyBmZXRjaGVkXG5hc3luYyBmdW5jdGlvbiBnZXRGb3JlY2FzdChsb2NhdGlvbiwgdW5pdHMpIHtcbiAgICBsZXQgbG9uID0gbG9jYXRpb24ubG9uO1xuICAgIGxldCBsYXQgPSBsb2NhdGlvbi5sYXQ7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvZm9yZWNhc3Q/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPSR7YXBpS2V5fSZ1bml0cz0ke3VuaXRzfWAsXG4gICAgICAgIHsgbW9kZTogXCJjb3JzXCIgfSk7XG4gICAgY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG4gICAgLy8gQ29udmVydHMgdG8gdmFsaWQgSlNPTiBmb3JtYXQgd2UgY2FuIHVzZVxuICAgIGxldCBmb3JlY2FzdFdlYXRoZXIgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIGZvcmVjYXN0V2VhdGhlcjtcbn1cblxuLy8gTWFpbiBmdW5jdGlvbiB3ZSB3aWxsIGJlIGNhbGxpbmcgLSBnZXRzIGdlbyBkYXRhLCB0aGVuIGdldHMgY3VycmVudCB3ZWF0aGVyIGFuZCBmb3JlY2FzdFxuLy8gUmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgMyBkYXRhIGJsb2NrcyBhcyBvYmplY3RzXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uLCB1bml0cykge1xuICAgIGxldCBnZW9EYXRhID0gZ2V0R2VvY29kZURhdGEobG9jYXRpb24pO1xuICAgIGxldCBjdXJyZW50V2VhdGhlciA9IGdlb0RhdGEudGhlbihsb2MgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0Y3VycmVudFdlYXRoZXIobG9jLCB1bml0cyk7XG4gICAgfSlcbiAgICBsZXQgZm9yZWNhc3RXZWF0aGVyID0gZ2VvRGF0YS50aGVuKGxvYyA9PiB7XG4gICAgICAgIHJldHVybiBnZXRGb3JlY2FzdChsb2MsIHVuaXRzKTtcbiAgICB9KVxuICAgIHJldHVybiBQcm9taXNlLmFsbChbZ2VvRGF0YSwgY3VycmVudFdlYXRoZXIsIGZvcmVjYXN0V2VhdGhlcl0pXG4gICAgICAgIC50aGVuKChbZ2VvRGF0YSwgY3VycmVudFdlYXRoZXIsIGZvcmVjYXN0V2VhdGhlcl0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiB7IGdlb0RhdGEsIGN1cnJlbnRXZWF0aGVyLCBmb3JlY2FzdFdlYXRoZXIgfVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgICAgICAgIHRocm93IEVycm9yKGVycik7XG4gICAgICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXI7IiwiLy8gVGFrZXMgYSB3ZWF0aGVyIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSB3ZWF0aGVyIHByb3BlcnRpZXMgb2YgdGhhdCBtb21lbnRcbi8vIGFuZCBjb252ZXJ0cyBpdCB0byBhIG11Y2ggbW9yZSByZWFkYWJsZSBhbmQgcmVkdWNlZCBmb3JtYXRcbmZ1bmN0aW9uIHBhcnNlRGF0YShkYXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGF0ZTogZGF0YS5kdF90eHQsXG4gICAgICAgIGN1cnJlbnRUZW1wOiBkYXRhLm1haW4udGVtcCxcbiAgICAgICAgZmVlbHNMaWtlOiBkYXRhLm1haW4uZmVlbHNfbGlrZSxcbiAgICAgICAgaHVtaWRpdHk6IGRhdGEubWFpbi5odW1pZGl0eSxcbiAgICAgICAgd2luZDoge1xuICAgICAgICAgICAgc3BlZWQ6IGRhdGEud2luZC5zcGVlZCxcbiAgICAgICAgICAgIGRlZzogZGF0YS53aW5kLmRlZ1xuICAgICAgICB9LFxuICAgICAgICB3ZWF0aGVyOiB7XG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogZGF0YS53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgdHlwZTogZGF0YS53ZWF0aGVyWzBdLm1haW4sXG4gICAgICAgICAgICBpY29uOiBkYXRhLndlYXRoZXJbMF0uaWNvblxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBUYWtlcyBhbiBhcnJheSBvZiB3ZWF0aGVyIG9iamVjdHMgdGhhdCByZXByZXNlbnRzIHRoZSBmb3JlY2FzdGVkIHdlYXRoZXJcbi8vIFJldHVybnMgYW4gYXJyYXkgb2YgdGhlIHdlYXRoZXIgb2JqZWN0IHNwbGl0IHVwIGludG8gZGF5cywgd2hlcmUgYXJyYXlbMF0gaXMgdGhlIGN1cnJlbnQgZGF5XG5mdW5jdGlvbiBjb252ZXJ0Rm9yZWNhc3QoZGF0YSkge1xuICAgIC8vIENvbnZlcnQgdXR4IHRpbWVjb2RlIHRvIHVzZXIncyBsb2NhbCB0aW1lIGFuZCBub3RlIGRheSBvZiB0aGUgbW9udGhcbiAgICBkYXRhLm1hcChkYXkgPT4ge1xuICAgICAgICBkYXkuZHRfdHh0ID0gbmV3IERhdGUoZGF5LmR0ICogMTAwMCk7XG4gICAgICAgIGRheS5kYXkgPSBkYXkuZHRfdHh0LmdldERhdGUoKTtcbiAgICB9KVxuICAgIC8vIFNwbGl0IHVwIHRoZSB3ZWF0aGVyIGFycmF5IGludG8gc2VwZXJhdGUgZGF5c1xuICAgIC8vIFRoZSBmaXJzdCBkYXkgbWF5IGJlIHNob3J0ZXIgaWYgdGhlcmUncyA8OCAzaHIgdGltZSBibG9ja3MgcmVtYWluaW5nIGluIHRoYXQgZGF5J3MgZm9yZWNhc3RcbiAgICBsZXQgZm9yZWNhc3QgPSBbXTtcbiAgICBsZXQgY3VycmVudERheSA9IG5ldyBEYXRlKCkuZ2V0RGF0ZSgpO1xuICAgIGxldCBjdXJyZW50RGF5UmVtYWluaW5nID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspe1xuICAgICAgICBpZiAoZGF0YVtpXS5kYXkgPT09IGN1cnJlbnREYXkpe1xuICAgICAgICAgICAgY3VycmVudERheVJlbWFpbmluZysrO1xuICAgICAgICB9IGVsc2UgYnJlYWs7XG4gICAgfVxuICAgIC8vIERpdmlkZSB0aGUgY3VycmVudCBkYXkgb3V0IG9mIHRoZSBmb3JlY2FzdCBkYXRhXG4gICAgZm9yZWNhc3QucHVzaChkYXRhLnNwbGljZSgwLCBjdXJyZW50RGF5UmVtYWluaW5nKSlcbiAgICAvLyBPbmNlIHRoZSBjdXJyZW50IGRheSdzIHdlYXRoZXIgb2JqZWN0cyBoYXZlIGJlZW4gZGl2aWRlZCwgZGl2aWRlIHRoZSByZXN0IGludG8gMjRociBjaHVua3NcbiAgICAvLyBNYXhpbXVtIG9mIDUgZGF5IG9iamVjdHNcbiAgICB3aGlsZSAoZGF0YS5sZW5ndGgpIHtcbiAgICAgICAgZm9yZWNhc3QucHVzaChkYXRhLnNwbGljZSgwLCA4KSk7XG4gICAgfVxuICAgIGZvcmVjYXN0ID0gZm9yZWNhc3Quc3BsaWNlKDAsIDUpXG4gICAgLy8gUGFyc2UgdGhlIGRhdGEgb2YgZWFjaCBkYXkgYXQgYXBwcm94aW1hdGVseSBtaWRkYXkgdG8gZ2V0IG5vcm1hbGlzZWQgdmFsdWVzXG4gICAgLy8gRm9yIHRoZSBtYXggdGVtcCBkYXRhLCB0YWtlIHRoZSBtYXhpbXVtIG91dCBvZiBhbGwgdGhlIHRpbWUgYmxvY2tzIG9mIHRoYXQgZGF5XG4gICAgbGV0IGF2Rm9yZWNhc3QgPSBmb3JlY2FzdC5tYXAoKGRheSkgPT4ge1xuICAgICAgICAvL1xuICAgICAgICAvL1xuICAgICAgICAvL21heSBiZSBzb21lIGJ1ZyBnb2luZyBvbiBoZXJlIGFyb3VuZCAxMC0xMXBtIHdpdGggY3VycmVudERheVJlbWFpbmdcbiAgICAgICAgLy9cbiAgICAgICAgLy9cbiAgICAgICAgbGV0IGNodW5rVG9DYWxjID0gZGF5Lmxlbmd0aCA8IDUgPyAwIDogNDtcbiAgICAgICAgLy8gSWYgdGhlIGN1cnJlbnQgZGF5IGhhcyBubyB3ZWF0aGVyIG9iamVjdHMgbGVmdCwgaWdub3JlIGl0cyBtYXBwaW5nXG4gICAgICAgIGlmIChkYXkubGVuZ3RoID4gMCl7XG4gICAgICAgICAgICBsZXQgcGFyc2VkRGF0YSA9IHBhcnNlRGF0YShkYXlbY2h1bmtUb0NhbGNdKTtcbiAgICAgICAgICAgIHBhcnNlZERhdGEubWF4VGVtcCA9IE1hdGgubWF4KC4uLmRheS5tYXAoKHRpbWUpID0+IHRpbWUubWFpbi50ZW1wKSk7XG4gICAgICAgICAgICBwYXJzZWREYXRhLm1pblRlbXAgPSBNYXRoLm1pbiguLi5kYXkubWFwKCh0aW1lKSA9PiB0aW1lLm1haW4udGVtcCkpO1xuICAgICAgICAgICAgZGVsZXRlIHBhcnNlZERhdGEuY3VycmVudFRlbXA7XG4gICAgICAgICAgICBkZWxldGUgcGFyc2VkRGF0YS5mZWVsc0xpa2U7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VkRGF0YTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhdkZvcmVjYXN0O1xufVxuXG4vLyBUYWtlcyB0aGUgcmF3IHdlYXRoZXIgaW5wdXQgb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBwYXJzZWQgZGF0YSBmb3IgZWFjaCBwcm9wZXJ0eVxuZnVuY3Rpb24gcHJvY2Vzc1dlYXRoZXIod2VhdGhlck9iamVjdCkge1xuICAgIGxldCB3ZWF0aGVyID0gIHtcbiAgICAgICAgZ2VvRGF0YTogd2VhdGhlck9iamVjdC5nZW9EYXRhLFxuICAgICAgICBjdXJyZW50V2VhdGhlcjogcGFyc2VEYXRhKHdlYXRoZXJPYmplY3QuY3VycmVudFdlYXRoZXIpLFxuICAgICAgICBmb3JlY2FzdFdlYXRoZXI6IGNvbnZlcnRGb3JlY2FzdCh3ZWF0aGVyT2JqZWN0LmZvcmVjYXN0V2VhdGhlci5saXN0KVxuICAgIH1cbiAgICAvLyBBZGQgbWF4VGVtcCBkYXRhIHRvIHRoZSBjdXJyZW50V2VhdGhlciBvYmplY3QgKGlmIHRoZSBmaXJzdCBkYXkgaGFzIGEgZm9yZWNhc3Qgb2JqZWN0IHJlbWFpbmluZylcbiAgICBpZiAod2VhdGhlci5mb3JlY2FzdFdlYXRoZXJbMF0ubGVuZ3RoID4gMCl7XG4gICAgICAgIHdlYXRoZXIuY3VycmVudFdlYXRoZXIubWF4VGVtcCA9IHdlYXRoZXIuZm9yZWNhc3RXZWF0aGVyWzBdLm1heFRlbXA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgd2VhdGhlci5jdXJyZW50V2VhdGhlci5tYXhUZW1wID0gd2VhdGhlci5jdXJyZW50V2VhdGhlci5jdXJyZW50VGVtcDtcbiAgICB9XG4gICAgLy8gVGhlbiBjaG9wIG91dCB0aGUgZmlyc3QgZGF5IHNvIGl0IGRvZXNuJ3QgYXBwZWFyIGluIHRoZSBmb3JlY2FzdFxuICAgIHdlYXRoZXIuZm9yZWNhc3RXZWF0aGVyLnNwbGljZSgwLCAxKTtcbiAgICByZXR1cm4gd2VhdGhlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvY2Vzc1dlYXRoZXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgcHJvY2Vzc1dlYXRoZXIgZnJvbSBcIi4vcHJvY2Vzc1dlYXRoZXIuanNcIlxuaW1wb3J0IGdldFdlYXRoZXIgZnJvbSAnLi9nZXRXZWF0aGVyLmpzJztcbmltcG9ydCBkb21Db250cm9sbGVyIGZyb20gXCIuL2RvbUNvbnRyb2xsZXIuanNcIlxuXG5jb25zdCBhcGlLZXkgPSAnZDY1MTUyZWEyOGVkN2JiNmFhNmYzNDY3NmYwOGJjMjcnO1xubGV0IHVuaXRzID0gXCJtZXRyaWNcIjtcblxuLy8gY29udmVydCB0aGUgY2l0eSBpbnRvIHRoZSBjb3JyZWN0IGZvcm1hdCBiZWZvcmUgcGFzc2luZyBpdCB0byBnZXRXZWF0aGVyOlxuLy9cbi8vXG5sZXQgd2VhdGhlckRhdGEgPSBnZXRXZWF0aGVyKFwiTWVsYm91cm5lLEF1c3RyYWxpYVwiLCBcIm1ldHJpY1wiKTtcbndlYXRoZXJEYXRhXG4udGhlbihkYXRhID0+IHtcbiAgICByZXR1cm4gcHJvY2Vzc1dlYXRoZXIoZGF0YSk7XG59KVxuLnRoZW4oKHdlYXRoZXIpID0+IHtcbiAgICBjb25zb2xlLmxvZyh3ZWF0aGVyKVxuICAgIGRvbUNvbnRyb2xsZXIuY3JlYXRlV2VhdGhlcih3ZWF0aGVyKVxufSlcbi5jYXRjaChlcnIgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyKVxufSlcblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9