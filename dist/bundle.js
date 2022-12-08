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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: rgb(50, 50, 50);\n    font-family: Poppins;\n    color: white;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n    margin: 0;\n}\n\n#app {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 30% 30% 35% 5%;\n}\n\nsection {\n    padding: 8%;\n}\n\nheader {\n    height: 100%;\n}\n\n.day-section {\n    display: flex;\n    align-items: center;\n}\n\n.main-block {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 80px auto 30px 1fr;\n    grid-template-rows: auto 20px 40px 30px 30px 30px 30px 30px;\n}\n\n.main-block > * {\n    width: 100%;\n    height: 100%;\n}\n\n.main-description, .main-location, .main-date {\n    grid-column: 1 / 6;\n}\n\n.main-description {\n    line-height: 0.9;\n    font-size: 2rem;\n    font-weight: 500;\n}\n\n.main-icon {\n    grid-column: 1 / 2;\n    grid-row: 4 / 7;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: -6px;\n}\n\n.main-icon > img {\n    transform: scale(0.7)\n}\n\n.main-temp {\n    grid-column: 2 / 3;\n    grid-row: 4 / 7;\n    display: flex;\n    align-items: center;\n    font-size: 5rem;\n    font-weight: 700;\n}\n\n.main-units {\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\n.main-feels-like, .main-humidity, .main-wind {\n    grid-column: 4 / 5;\n    font-size: 0.9rem;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n}\n\n.main-feels-like {\n    grid-row: 4 / 5;\n}\n\n.main-humidity {\n    grid-row: 5 / 6;\n}\n\n.main-wind {\n    grid-row: 6 / 7;\n}\n\n.main-inputs {\n    grid-column: 1 / -1;\n    grid-row: 7 / 8;\n    display: flex;\n    justify-content: end;\n    align-items: center;\n    gap: 8px;\n}\n\n#form-city {\n    display: flex;\n    justify-content: end;\n    align-items: center;\n    gap: 8px;\n    padding-top: 4px;\n    border-bottom: 1px solid grey;\n}\n\n#form-city input {\n    width: 150px;\n    background-color: transparent;\n    border: none;\n    font-size: 1rem;\n    color: white;\n    text-align: right;\n}\n\n#form-city button {\n    background-color: transparent;\n    border: none;\n}\n\n#form-city button:hover {\n    cursor: pointer;\n}\n\n#form-city button:hover i {\n    transform: scale(1.1);\n    transform-origin: center;\n}\n\n#form-city i {\n    transform: scale(0.9);\n    color: grey;\n}\n\n.units-toggle button {\n    background-color: transparent;\n    border: none;\n    color: grey;\n}\n\n.units-toggle span {\n    font-size: 0.8rem;\n    font-weight: 200;\n    color: grey;\n}\n\n.units-toggle button.units-toggle-active {\n    color: white;\n    font-weight: 900;\n}\n\n#error-container {\n    grid-column: 1 / -1;\n    grid-row: 8 / 9;\n    text-align: right;\n    color: rgb(202, 96, 96);\n}\n\n.forecast-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n    padding: 20px 8%;\n}\n\n.forecast-scroller {\n    position: relative;\n    max-width: 100%;\n    height: 120px;\n    padding-top: 10px;\n    overflow: hidden;\n}\n\n.forecast-scroller-active {\n    cursor: grab;\n}\n\n.forecast-container {\n    position: absolute;\n    display: flex;\n    border-left: 2px solid white;\n    border-right: 2px solid white;\n}\n\n.forecast-block {\n    width: 80px;\n    height: 100px;\n    display: grid;\n    grid-template-columns: 50% 50%;\n    grid-template-rows: 25% 45% 30%;\n    column-gap: 6px;\n}\n\n.forecast-block > * {\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.forecast-day {\n    grid-column: 1 / -1;\n    grid-row: 1 / 2;\n    font-size: 1.2rem;\n}\n\n.forecast-icon {\n    grid-column: 1 / -1;\n    grid-row: 2 / 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.forecast-icon > img {\n    transform: scale(0.4)\n}\n\n.forecast-max-temp {\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n    font-weight: 700;\n    justify-content: end;\n}\n\n.forecast-min-temp {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    font-weight: 100;\n    justify-content: start;\n}\n\n\nfooter {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n}\n\nfooter a:visited {\n    color: white;\n}\n\nfooter p {\n    padding: 0;\n}\n\n@media screen and (max-width: 380px) {\n    .main-block {\n        grid-template-columns: 60px auto 30px 1fr;\n        grid-template-rows: auto 20px 40px 25px 25px 25px 30px 30px;\n    }\n\n    .main-icon > img {\n        transform: scale(0.5)\n    }\n    \n    .main-temp {\n        font-size: 4rem;\n    }\n    \n    .main-units {\n        font-size: 1.1rem;\n    }\n\n    .main-feels-like, .main-humidity, .main-wind {\n        font-size: 0.8rem;\n    }\n}\n\n@media screen and (min-width: 670px) {\n\n    .forecast-section {\n        align-items: center;\n    }\n    \n    .forecast-container {\n        position: relative;\n        border: none;\n    }\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,SAAS;IACT,UAAU;IACV,iCAAiC;IACjC,oBAAoB;IACpB,YAAY;AAChB;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,aAAa;IACb,kCAAkC;AACtC;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,yCAAyC;IACzC,2DAA2D;AAC/D;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI;AACJ;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,oBAAoB;AACxB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,QAAQ;AACZ;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,mBAAmB;IACnB,QAAQ;IACR,gBAAgB;IAChB,6BAA6B;AACjC;;AAEA;IACI,YAAY;IACZ,6BAA6B;IAC7B,YAAY;IACZ,eAAe;IACf,YAAY;IACZ,iBAAiB;AACrB;;AAEA;IACI,6BAA6B;IAC7B,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,wBAAwB;AAC5B;;AAEA;IACI,qBAAqB;IACrB,WAAW;AACf;;AAEA;IACI,6BAA6B;IAC7B,YAAY;IACZ,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,gBAAgB;AACpB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,oBAAoB;IACpB,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,aAAa;IACb,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,4BAA4B;IAC5B,6BAA6B;AACjC;;AAEA;IACI,WAAW;IACX,aAAa;IACb,aAAa;IACb,8BAA8B;IAC9B,+BAA+B;IAC/B,eAAe;AACnB;;AAEA;IACI,gBAAgB;IAChB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,eAAe;IACf,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;;AAEA;IACI;AACJ;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,sBAAsB;AAC1B;;;AAGA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI;QACI,yCAAyC;QACzC,2DAA2D;IAC/D;;IAEA;QACI;IACJ;;IAEA;QACI,eAAe;IACnB;;IAEA;QACI,iBAAiB;IACrB;;IAEA;QACI,iBAAiB;IACrB;AACJ;;AAEA;;IAEI;QACI,mBAAmB;IACvB;;IAEA;QACI,kBAAkB;QAClB,YAAY;IAChB;AACJ","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Carter+One&family=Poppins:wght@200;300;400;500;600&family=Roboto+Mono:wght@200;400;700&display=swap\");\n\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: rgb(50, 50, 50);\n    font-family: Poppins;\n    color: white;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n    margin: 0;\n}\n\n#app {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 30% 30% 35% 5%;\n}\n\nsection {\n    padding: 8%;\n}\n\nheader {\n    height: 100%;\n}\n\n.day-section {\n    display: flex;\n    align-items: center;\n}\n\n.main-block {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 80px auto 30px 1fr;\n    grid-template-rows: auto 20px 40px 30px 30px 30px 30px 30px;\n}\n\n.main-block > * {\n    width: 100%;\n    height: 100%;\n}\n\n.main-description, .main-location, .main-date {\n    grid-column: 1 / 6;\n}\n\n.main-description {\n    line-height: 0.9;\n    font-size: 2rem;\n    font-weight: 500;\n}\n\n.main-icon {\n    grid-column: 1 / 2;\n    grid-row: 4 / 7;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: -6px;\n}\n\n.main-icon > img {\n    transform: scale(0.7)\n}\n\n.main-temp {\n    grid-column: 2 / 3;\n    grid-row: 4 / 7;\n    display: flex;\n    align-items: center;\n    font-size: 5rem;\n    font-weight: 700;\n}\n\n.main-units {\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\n.main-feels-like, .main-humidity, .main-wind {\n    grid-column: 4 / 5;\n    font-size: 0.9rem;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n}\n\n.main-feels-like {\n    grid-row: 4 / 5;\n}\n\n.main-humidity {\n    grid-row: 5 / 6;\n}\n\n.main-wind {\n    grid-row: 6 / 7;\n}\n\n.main-inputs {\n    grid-column: 1 / -1;\n    grid-row: 7 / 8;\n    display: flex;\n    justify-content: end;\n    align-items: center;\n    gap: 8px;\n}\n\n#form-city {\n    display: flex;\n    justify-content: end;\n    align-items: center;\n    gap: 8px;\n    padding-top: 4px;\n    border-bottom: 1px solid grey;\n}\n\n#form-city input {\n    width: 150px;\n    background-color: transparent;\n    border: none;\n    font-size: 1rem;\n    color: white;\n    text-align: right;\n}\n\n#form-city button {\n    background-color: transparent;\n    border: none;\n}\n\n#form-city button:hover {\n    cursor: pointer;\n}\n\n#form-city button:hover i {\n    transform: scale(1.1);\n    transform-origin: center;\n}\n\n#form-city i {\n    transform: scale(0.9);\n    color: grey;\n}\n\n.units-toggle button {\n    background-color: transparent;\n    border: none;\n    color: grey;\n}\n\n.units-toggle span {\n    font-size: 0.8rem;\n    font-weight: 200;\n    color: grey;\n}\n\n.units-toggle button.units-toggle-active {\n    color: white;\n    font-weight: 900;\n}\n\n#error-container {\n    grid-column: 1 / -1;\n    grid-row: 8 / 9;\n    text-align: right;\n    color: rgb(202, 96, 96);\n}\n\n.forecast-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n    padding: 20px 8%;\n}\n\n.forecast-scroller {\n    position: relative;\n    max-width: 100%;\n    height: 120px;\n    padding-top: 10px;\n    overflow: hidden;\n}\n\n.forecast-scroller-active {\n    cursor: grab;\n}\n\n.forecast-container {\n    position: absolute;\n    display: flex;\n    border-left: 2px solid white;\n    border-right: 2px solid white;\n}\n\n.forecast-block {\n    width: 80px;\n    height: 100px;\n    display: grid;\n    grid-template-columns: 50% 50%;\n    grid-template-rows: 25% 45% 30%;\n    column-gap: 6px;\n}\n\n.forecast-block > * {\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.forecast-day {\n    grid-column: 1 / -1;\n    grid-row: 1 / 2;\n    font-size: 1.2rem;\n}\n\n.forecast-icon {\n    grid-column: 1 / -1;\n    grid-row: 2 / 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.forecast-icon > img {\n    transform: scale(0.4)\n}\n\n.forecast-max-temp {\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n    font-weight: 700;\n    justify-content: end;\n}\n\n.forecast-min-temp {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    font-weight: 100;\n    justify-content: start;\n}\n\n\nfooter {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 12px;\n}\n\nfooter a:visited {\n    color: white;\n}\n\nfooter p {\n    padding: 0;\n}\n\n@media screen and (max-width: 380px) {\n    .main-block {\n        grid-template-columns: 60px auto 30px 1fr;\n        grid-template-rows: auto 20px 40px 25px 25px 25px 30px 30px;\n    }\n\n    .main-icon > img {\n        transform: scale(0.5)\n    }\n    \n    .main-temp {\n        font-size: 4rem;\n    }\n    \n    .main-units {\n        font-size: 1.1rem;\n    }\n\n    .main-feels-like, .main-humidity, .main-wind {\n        font-size: 0.8rem;\n    }\n}\n\n@media screen and (min-width: 670px) {\n\n    .forecast-section {\n        align-items: center;\n    }\n    \n    .forecast-container {\n        position: relative;\n        border: none;\n    }\n}"],"sourceRoot":""}]);
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

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


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
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! events */ "./node_modules/events/events.js");
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);

const eventEmitter = new events__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
const app = document.querySelector("#app");
const header = document.createElement("header");
const dayContainer = document.createElement("section");
dayContainer.classList.add("day-section");
const forecastContainer = document.createElement("section");
forecastContainer.classList.add("forecast-section");

// Footer link and light/dark mode functionality
const footer = document.createElement("footer");
footer.id = "footer";
const authorName = document.createElement("p");
authorName.classList.add("footer-author");
authorName.textContent = "Carl Madsen 2022";
const footerLink = document.createElement("a");
footerLink.id = "footer-link";
footerLink.setAttribute("href", "https://github.com/elsaepo/odin-todo");
const gitHubLogo = document.createElement("i");
gitHubLogo.classList.add("fa-brands", "fa-github", "fa-xl", "footer-logo");
footerLink.appendChild(gitHubLogo);

function getTheme() {
  return localStorage.getItem("theme");
}

function toggleDarkMode() {
  document.querySelector(":root").classList.toggle("dark");
  darkModeButton.classList.toggle("fa-moon");
  darkModeButton.classList.toggle("fa-sun");
}

function toggleDarkStorage() {
  if (getTheme() === "dark") {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
}

function isBrowserDarkMode() {
  return (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );
}

const darkModeButton = document.createElement("i");
darkModeButton.id = "footer-dark-mode";
darkModeButton.classList.add("fa-solid", "fa-moon", "fa-xl");
darkModeButton.addEventListener("mousedown", function () {
  toggleDarkMode();
  toggleDarkStorage();
});

if (getTheme() === "dark" || (!getTheme() && isBrowserDarkMode())) {
  toggleDarkMode();
}

footer.appendChild(authorName);
footer.appendChild(footerLink);
footer.appendChild(darkModeButton);

app.append(header, dayContainer, forecastContainer, footer)

// Creates the main weather block
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
        wind: createWeatherElement("main", "wind", `WIND: ${Math.round(current.wind.speed)}m/s`)
        // optional: chance of rain
    }
    for (let element in mainElements) {
        mainBlock.appendChild(mainElements[element]);
    }
    const inputsBlock = document.createElement("div");
    inputsBlock.classList.add("main-inputs");
    inputsBlock.appendChild(createCityInput());
    inputsBlock.appendChild(createUnitsToggle());
    const errorContainer = document.createElement("div");
    errorContainer.id = "error-container";
    mainBlock.appendChild(inputsBlock);
    mainBlock.appendChild(errorContainer);
    return [mainBlock, mainElements];
}

// This slider code made possible thanks to KellyEx: https://codepen.io/kellyex/pen/KKwwdYg
function createForecastScroller() {
    const slider = document.createElement("div");
    slider.classList.add("forecast-scroller");
    let isDown = false;
    let startX;
    let scrollLeft;
    const start = (event) => {
        isDown = true;
        slider.classList.add("forecast-scroller-active");
        startX = event.pageX || event.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    }
    const end = () => {
        isDown = false;
        slider.classList.remove("forecast-scroller-active");
    }
    const move = (event) => {
        if (!isDown) return;
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

// Creates the forecasted weather block (slider)
function createForecastWeather(forecast) {
    const forecastScroller = createForecastScroller();
    const forecastContainer = document.createElement("div");
    forecastContainer.classList.add("forecast-container");
    let forecastArray = [];
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
        forecastArray.push(forecastElements);
        for (let element in forecastElements) {
            forecastBlock.appendChild(forecastElements[element]);
        }
        forecastContainer.appendChild(forecastBlock);
    }
    forecastScroller.appendChild(forecastContainer);
    return [forecastScroller, forecastArray];
}

function createCityInput() {
    const form = document.createElement("form");
    form.id = "form-city";
    const cityInput = document.createElement("input");
    cityInput.type = "text";
    cityInput.placeholder = "eg. London, GB";
    const cityButton = document.createElement("button");
    cityButton.type = "submit";
    const cityIcon = document.createElement("i");
    cityIcon.classList.add("fa-solid", "fa-magnifying-glass");
    cityButton.appendChild(cityIcon);
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        event.stopPropagation();
        let city = parseCityInput(cityInput.value);
        eventEmitter.emit("weather-city", city);
        return false;
    });
    form.appendChild(cityInput);
    form.appendChild(cityButton);
    return form;
}

// Removes whitespace from the city input for entry into API
function parseCityInput(city) {
    return city.replace(/\s/g, "").toLowerCase();
}

function createUnitsToggle() {
    const units = document.createElement("div");
    units.classList.add("units-toggle");
    const metric = document.createElement("button");
    metric.id = "toggle-metric";
    metric.textContent = "C";
    const divider = document.createElement("span");
    divider.textContent = "/";
    const imperial = document.createElement("button");
    imperial.id = "toggle-imperial";
    imperial.textContent = "F";
    metric.addEventListener("click", () => {
        eventEmitter.emit("set-units", "metric");
    });
    imperial.addEventListener("click", () => {
        eventEmitter.emit("set-units", "imperial");
    })
    units.append(metric, divider, imperial);
    return units;
}

// Creates a weather element based on where it is used (main or forecast), its type and content
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
    const block = document.createElement("p");
    block.classList.add(`${use}-${type}`);
    block.textContent = content;
    return block;
}

function removeErrors() {
    const errorContainer = document.querySelector("#error-container");
    errorContainer.textContent = "";
}

function cityError() {
    const errorContainer = document.querySelector("#error-container");
    errorContainer.textContent = "City could not be found.";
}

function changeUnits(weather, elements, units){
    let currentElements = elements[0];
    let currentWeather = weather[0];
    let forecastElements = elements[1];
    let forecastWeather = weather[1];
    function updateNumber(number, wind){
        if (units === "imperial"){
            if (wind === true){
                return Math.round(number);
            } else {
                return Math.round((number * 9 / 5) + 32);
            }
        }
            else return Math.round(number);
    }
    currentElements.temp.textContent = updateNumber(currentWeather.currentTemp);
    currentElements.feelsLike.textContent = `FEELS LIKE: ${updateNumber(currentWeather.feelsLike)}${units === "metric" ? "C" : "F"}`;
    currentElements.wind.textContent = `WIND: ${updateNumber(currentWeather.wind.speed)}${units === "metric" ? "m/s" : "mph"}`;
    currentElements.units.textContent = `${units === "metric" ? "C" : "F"}`;
    for (let i = 0; i < forecastElements.length; i++){
        forecastElements[i].maxTemp.textContent = `${updateNumber(forecastWeather[i].maxTemp)}°`;
        forecastElements[i].minTemp.textContent = `${updateNumber(forecastWeather[i].minTemp)}°`;
    }
    const metricELement = document.getElementById("toggle-metric");
    const imperialELement = document.getElementById("toggle-imperial");
    if (units === "metric"){
        metricELement.classList.add("units-toggle-active");
        imperialELement.classList.remove("units-toggle-active");
    } else {
        metricELement.classList.remove("units-toggle-active");
        imperialELement.classList.add("units-toggle-active");
    }
}

function createWeather(weather, units) {
    while (dayContainer.firstChild) {
        dayContainer.removeChild(dayContainer.firstChild)
    }
    while (forecastContainer.firstChild) {
        forecastContainer.removeChild(forecastContainer.firstChild)
    }
    let weatherItems = createMainWeather(weather);
    let forecastItems = createForecastWeather(weather.weatherData.daily);
    dayContainer.appendChild(weatherItems[0]);
    forecastContainer.appendChild(forecastItems[0]);
    removeErrors();
    eventEmitter.on("change-units", newUnits => {
        changeUnits([weather.weatherData.current, weather.weatherData.daily], [weatherItems[1], forecastItems[1]], newUnits)
    })
    changeUnits([weather.weatherData.current, weather.weatherData.daily], [weatherItems[1], forecastItems[1]], units)
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    createWeather,
    eventEmitter,
    cityError
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
    // .catch(err => {
    //     throw Error(err);
    // });
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





let units = "metric";
let location = "Melbourne,Australia";

_domController_js__WEBPACK_IMPORTED_MODULE_3__["default"].eventEmitter.on("weather-city", (city) => {
    weather(city);
})

_domController_js__WEBPACK_IMPORTED_MODULE_3__["default"].eventEmitter.on("set-units", (u) => {
    if (u === units){
        return;
    }
    _domController_js__WEBPACK_IMPORTED_MODULE_3__["default"].eventEmitter.emit("change-units", u)
    units = u;

})

function weather(city){
    let weather = (0,_getWeather_js__WEBPACK_IMPORTED_MODULE_2__["default"])(city, "metric");
    weather
    .then(data => {
        data.weatherData = (0,_processWeather_js__WEBPACK_IMPORTED_MODULE_1__["default"])(data.weatherData);
        return data;
    })
    .then((weather) => {
        location = city;
        _domController_js__WEBPACK_IMPORTED_MODULE_3__["default"].createWeather(weather, units)
    })
    .catch(err => {
        console.error(err)
        if (err.message === "NO_CITY"){
            _domController_js__WEBPACK_IMPORTED_MODULE_3__["default"].cityError();
        }
    })
}

weather(location);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQSxrQ0FBa0MsUUFBUTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FB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O0FBQ0w7QUFDQTtBQUNBO0FBQ0EsWUFBWSxtRUFBdUI7QUFDbkM7QUFDQSxLQUFLO0FBQ0w7O0FBRUEsa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2RvbUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9nZXRXZWF0aGVyLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvcHJvY2Vzc1dlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhcnRlcitPbmUmZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwJmZhbWlseT1Sb2JvdG8rTW9ubzp3Z2h0QDIwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDUwLCA1MCk7XFxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNhcHAge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzAlIDMwJSAzNSUgNSU7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgICBwYWRkaW5nOiA4JTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZGF5LXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1ibG9jayB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggYXV0byAzMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDIwcHggNDBweCAzMHB4IDMwcHggMzBweCAzMHB4IDMwcHg7XFxufVxcblxcbi5tYWluLWJsb2NrID4gKiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tYWluLWRlc2NyaXB0aW9uLCAubWFpbi1sb2NhdGlvbiwgLm1haW4tZGF0ZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNjtcXG59XFxuXFxuLm1haW4tZGVzY3JpcHRpb24ge1xcbiAgICBsaW5lLWhlaWdodDogMC45O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5tYWluLWljb24ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiA0IC8gNztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xcbn1cXG5cXG4ubWFpbi1pY29uID4gaW1nIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpXFxufVxcblxcbi5tYWluLXRlbXAge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiA0IC8gNztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubWFpbi11bml0cyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWFpbi1mZWVscy1saWtlLCAubWFpbi1odW1pZGl0eSwgLm1haW4td2luZCB7XFxuICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4ubWFpbi1mZWVscy1saWtlIHtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG4ubWFpbi1odW1pZGl0eSB7XFxuICAgIGdyaWQtcm93OiA1IC8gNjtcXG59XFxuXFxuLm1haW4td2luZCB7XFxuICAgIGdyaWQtcm93OiA2IC8gNztcXG59XFxuXFxuLm1haW4taW5wdXRzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDcgLyA4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbiNmb3JtLWNpdHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIHBhZGRpbmctdG9wOiA0cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4jZm9ybS1jaXR5IGlucHV0IHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbiNmb3JtLWNpdHkgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI2Zvcm0tY2l0eSBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNmb3JtLWNpdHkgYnV0dG9uOmhvdmVyIGkge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuXFxuI2Zvcm0tY2l0eSBpIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbiAgICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLnVuaXRzLXRvZ2dsZSBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLnVuaXRzLXRvZ2dsZSBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4udW5pdHMtdG9nZ2xlIGJ1dHRvbi51bml0cy10b2dnbGUtYWN0aXZlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4jZXJyb3ItY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDggLyA5O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgY29sb3I6IHJnYigyMDIsIDk2LCA5Nik7XFxufVxcblxcbi5mb3JlY2FzdC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIHBhZGRpbmc6IDIwcHggOCU7XFxufVxcblxcbi5mb3JlY2FzdC1zY3JvbGxlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmZvcmVjYXN0LXNjcm9sbGVyLWFjdGl2ZSB7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5mb3JlY2FzdC1ibG9jayB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjUlIDQ1JSAzMCU7XFxuICAgIGNvbHVtbi1nYXA6IDZweDtcXG59XFxuXFxuLmZvcmVjYXN0LWJsb2NrID4gKiB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF5IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWljb24ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QtaWNvbiA+IGltZyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KVxcbn1cXG5cXG4uZm9yZWNhc3QtbWF4LXRlbXAge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5mb3JlY2FzdC1taW4tdGVtcCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG5cXG5mb290ZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG5mb290ZXIgYTp2aXNpdGVkIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5mb290ZXIgcCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XFxuICAgIC5tYWluLWJsb2NrIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCBhdXRvIDMwcHggMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDIwcHggNDBweCAyNXB4IDI1cHggMjVweCAzMHB4IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgLm1haW4taWNvbiA+IGltZyB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSlcXG4gICAgfVxcbiAgICBcXG4gICAgLm1haW4tdGVtcCB7XFxuICAgICAgICBmb250LXNpemU6IDRyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5tYWluLXVuaXRzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICB9XFxuXFxuICAgIC5tYWluLWZlZWxzLWxpa2UsIC5tYWluLWh1bWlkaXR5LCAubWFpbi13aW5kIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY3MHB4KSB7XFxuXFxuICAgIC5mb3JlY2FzdC1zZWN0aW9uIHtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgXFxuICAgIC5mb3JlY2FzdC1jb250YWluZXIge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLGlDQUFpQztJQUNqQyxvQkFBb0I7SUFDcEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMsMkRBQTJEO0FBQy9EOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0k7QUFDSjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsK0JBQStCO0lBQy9CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsU0FBUztBQUNiOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJO1FBQ0kseUNBQXlDO1FBQ3pDLDJEQUEyRDtJQUMvRDs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsWUFBWTtJQUNoQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNhcnRlcitPbmUmZmFtaWx5PVBvcHBpbnM6d2dodEAyMDA7MzAwOzQwMDs1MDA7NjAwJmZhbWlseT1Sb2JvdG8rTW9ubzp3Z2h0QDIwMDs0MDA7NzAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcblxcbiosICo6OmJlZm9yZSwgKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDUwLCA1MCk7XFxuICAgIGZvbnQtZmFtaWx5OiBQb3BwaW5zO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAge1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNhcHAge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMzAlIDMwJSAzNSUgNSU7XFxufVxcblxcbnNlY3Rpb24ge1xcbiAgICBwYWRkaW5nOiA4JTtcXG59XFxuXFxuaGVhZGVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uZGF5LXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubWFpbi1ibG9jayB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggYXV0byAzMHB4IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDIwcHggNDBweCAzMHB4IDMwcHggMzBweCAzMHB4IDMwcHg7XFxufVxcblxcbi5tYWluLWJsb2NrID4gKiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5tYWluLWRlc2NyaXB0aW9uLCAubWFpbi1sb2NhdGlvbiwgLm1haW4tZGF0ZSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNjtcXG59XFxuXFxuLm1haW4tZGVzY3JpcHRpb24ge1xcbiAgICBsaW5lLWhlaWdodDogMC45O1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbi5tYWluLWljb24ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiA0IC8gNztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiAtNnB4O1xcbn1cXG5cXG4ubWFpbi1pY29uID4gaW1nIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpXFxufVxcblxcbi5tYWluLXRlbXAge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiA0IC8gNztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiA1cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4ubWFpbi11bml0cyB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4ubWFpbi1mZWVscy1saWtlLCAubWFpbi1odW1pZGl0eSwgLm1haW4td2luZCB7XFxuICAgIGdyaWQtY29sdW1uOiA0IC8gNTtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4ubWFpbi1mZWVscy1saWtlIHtcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbn1cXG5cXG4ubWFpbi1odW1pZGl0eSB7XFxuICAgIGdyaWQtcm93OiA1IC8gNjtcXG59XFxuXFxuLm1haW4td2luZCB7XFxuICAgIGdyaWQtcm93OiA2IC8gNztcXG59XFxuXFxuLm1haW4taW5wdXRzIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDcgLyA4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxufVxcblxcbiNmb3JtLWNpdHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA4cHg7XFxuICAgIHBhZGRpbmctdG9wOiA0cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xcbn1cXG5cXG4jZm9ybS1jaXR5IGlucHV0IHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcblxcbiNmb3JtLWNpdHkgYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuI2Zvcm0tY2l0eSBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNmb3JtLWNpdHkgYnV0dG9uOmhvdmVyIGkge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcXG59XFxuXFxuI2Zvcm0tY2l0eSBpIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbiAgICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLnVuaXRzLXRvZ2dsZSBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogZ3JleTtcXG59XFxuXFxuLnVuaXRzLXRvZ2dsZSBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4udW5pdHMtdG9nZ2xlIGJ1dHRvbi51bml0cy10b2dnbGUtYWN0aXZlIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbn1cXG5cXG4jZXJyb3ItY29udGFpbmVyIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDggLyA5O1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG4gICAgY29sb3I6IHJnYigyMDIsIDk2LCA5Nik7XFxufVxcblxcbi5mb3JlY2FzdC1zZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxuICAgIHBhZGRpbmc6IDIwcHggOCU7XFxufVxcblxcbi5mb3JlY2FzdC1zY3JvbGxlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmZvcmVjYXN0LXNjcm9sbGVyLWFjdGl2ZSB7XFxuICAgIGN1cnNvcjogZ3JhYjtcXG59XFxuXFxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB3aGl0ZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgd2hpdGU7XFxufVxcblxcbi5mb3JlY2FzdC1ibG9jayB7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMjUlIDQ1JSAzMCU7XFxuICAgIGNvbHVtbi1nYXA6IDZweDtcXG59XFxuXFxuLmZvcmVjYXN0LWJsb2NrID4gKiB7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGF5IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmZvcmVjYXN0LWljb24ge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9yZWNhc3QtaWNvbiA+IGltZyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC40KVxcbn1cXG5cXG4uZm9yZWNhc3QtbWF4LXRlbXAge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5mb3JlY2FzdC1taW4tdGVtcCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbn1cXG5cXG5cXG5mb290ZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMnB4O1xcbn1cXG5cXG5mb290ZXIgYTp2aXNpdGVkIHtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5mb290ZXIgcCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM4MHB4KSB7XFxuICAgIC5tYWluLWJsb2NrIHtcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNjBweCBhdXRvIDMwcHggMWZyO1xcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDIwcHggNDBweCAyNXB4IDI1cHggMjVweCAzMHB4IDMwcHg7XFxuICAgIH1cXG5cXG4gICAgLm1haW4taWNvbiA+IGltZyB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSlcXG4gICAgfVxcbiAgICBcXG4gICAgLm1haW4tdGVtcCB7XFxuICAgICAgICBmb250LXNpemU6IDRyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC5tYWluLXVuaXRzIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICB9XFxuXFxuICAgIC5tYWluLWZlZWxzLWxpa2UsIC5tYWluLWh1bWlkaXR5LCAubWFpbi13aW5kIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDY3MHB4KSB7XFxuXFxuICAgIC5mb3JlY2FzdC1zZWN0aW9uIHtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG4gICAgXFxuICAgIC5mb3JlY2FzdC1jb250YWluZXIge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICB9XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbm1vZHVsZS5leHBvcnRzLm9uY2UgPSBvbmNlO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gb25jZShlbWl0dGVyLCBuYW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZnVuY3Rpb24gZXJyb3JMaXN0ZW5lcihlcnIpIHtcbiAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIobmFtZSwgcmVzb2x2ZXIpO1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZXIoKSB7XG4gICAgICBpZiAodHlwZW9mIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBlcnJvckxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9O1xuXG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsIG5hbWUsIHJlc29sdmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgaWYgKG5hbWUgIT09ICdlcnJvcicpIHtcbiAgICAgIGFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGVycm9yTGlzdGVuZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBoYW5kbGVyLCBmbGFncykge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIub24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgJ2Vycm9yJywgaGFuZGxlciwgZmxhZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCBsaXN0ZW5lciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKGZsYWdzLm9uY2UpIHtcbiAgICAgIGVtaXR0ZXIub25jZShuYW1lLCBsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtaXR0ZXIub24obmFtZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgZW1pdHRlci5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gRXZlbnRUYXJnZXQgZG9lcyBub3QgaGF2ZSBgZXJyb3JgIGV2ZW50IHNlbWFudGljcyBsaWtlIE5vZGVcbiAgICAvLyBFdmVudEVtaXR0ZXJzLCB3ZSBkbyBub3QgbGlzdGVuIGZvciBgZXJyb3JgIGV2ZW50cyBoZXJlLlxuICAgIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBmdW5jdGlvbiB3cmFwTGlzdGVuZXIoYXJnKSB7XG4gICAgICAvLyBJRSBkb2VzIG5vdCBoYXZlIGJ1aWx0aW4gYHsgb25jZTogdHJ1ZSB9YCBzdXBwb3J0IHNvIHdlXG4gICAgICAvLyBoYXZlIHRvIGRvIGl0IG1hbnVhbGx5LlxuICAgICAgaWYgKGZsYWdzLm9uY2UpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIHdyYXBMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICBsaXN0ZW5lcihhcmcpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImVtaXR0ZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRXZlbnRFbWl0dGVyLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgZW1pdHRlcik7XG4gIH1cbn1cbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBFdmVudEVtaXR0ZXIgfSBmcm9tIFwiZXZlbnRzXCI7XG5jb25zdCBldmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5jb25zdCBhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FwcFwiKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIik7XG5jb25zdCBkYXlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbmRheUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGF5LXNlY3Rpb25cIik7XG5jb25zdCBmb3JlY2FzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuZm9yZWNhc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LXNlY3Rpb25cIik7XG5cbi8vIEZvb3RlciBsaW5rIGFuZCBsaWdodC9kYXJrIG1vZGUgZnVuY3Rpb25hbGl0eVxuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvb3RlclwiKTtcbmZvb3Rlci5pZCA9IFwiZm9vdGVyXCI7XG5jb25zdCBhdXRob3JOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5hdXRob3JOYW1lLmNsYXNzTGlzdC5hZGQoXCJmb290ZXItYXV0aG9yXCIpO1xuYXV0aG9yTmFtZS50ZXh0Q29udGVudCA9IFwiQ2FybCBNYWRzZW4gMjAyMlwiO1xuY29uc3QgZm9vdGVyTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuZm9vdGVyTGluay5pZCA9IFwiZm9vdGVyLWxpbmtcIjtcbmZvb3Rlckxpbmsuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9lbHNhZXBvL29kaW4tdG9kb1wiKTtcbmNvbnN0IGdpdEh1YkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbmdpdEh1YkxvZ28uY2xhc3NMaXN0LmFkZChcImZhLWJyYW5kc1wiLCBcImZhLWdpdGh1YlwiLCBcImZhLXhsXCIsIFwiZm9vdGVyLWxvZ29cIik7XG5mb290ZXJMaW5rLmFwcGVuZENoaWxkKGdpdEh1YkxvZ28pO1xuXG5mdW5jdGlvbiBnZXRUaGVtZSgpIHtcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGhlbWVcIik7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZURhcmtNb2RlKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiOnJvb3RcIikuY2xhc3NMaXN0LnRvZ2dsZShcImRhcmtcIik7XG4gIGRhcmtNb2RlQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoXCJmYS1tb29uXCIpO1xuICBkYXJrTW9kZUJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKFwiZmEtc3VuXCIpO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVEYXJrU3RvcmFnZSgpIHtcbiAgaWYgKGdldFRoZW1lKCkgPT09IFwiZGFya1wiKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCBcImxpZ2h0XCIpO1xuICB9IGVsc2Uge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGhlbWVcIiwgXCJkYXJrXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzQnJvd3NlckRhcmtNb2RlKCkge1xuICByZXR1cm4gKFxuICAgIHdpbmRvdy5tYXRjaE1lZGlhICYmXG4gICAgd2luZG93Lm1hdGNoTWVkaWEoXCIocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspXCIpLm1hdGNoZXNcbiAgKTtcbn1cblxuY29uc3QgZGFya01vZGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaVwiKTtcbmRhcmtNb2RlQnV0dG9uLmlkID0gXCJmb290ZXItZGFyay1tb2RlXCI7XG5kYXJrTW9kZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZmEtc29saWRcIiwgXCJmYS1tb29uXCIsIFwiZmEteGxcIik7XG5kYXJrTW9kZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uICgpIHtcbiAgdG9nZ2xlRGFya01vZGUoKTtcbiAgdG9nZ2xlRGFya1N0b3JhZ2UoKTtcbn0pO1xuXG5pZiAoZ2V0VGhlbWUoKSA9PT0gXCJkYXJrXCIgfHwgKCFnZXRUaGVtZSgpICYmIGlzQnJvd3NlckRhcmtNb2RlKCkpKSB7XG4gIHRvZ2dsZURhcmtNb2RlKCk7XG59XG5cbmZvb3Rlci5hcHBlbmRDaGlsZChhdXRob3JOYW1lKTtcbmZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJMaW5rKTtcbmZvb3Rlci5hcHBlbmRDaGlsZChkYXJrTW9kZUJ1dHRvbik7XG5cbmFwcC5hcHBlbmQoaGVhZGVyLCBkYXlDb250YWluZXIsIGZvcmVjYXN0Q29udGFpbmVyLCBmb290ZXIpXG5cbi8vIENyZWF0ZXMgdGhlIG1haW4gd2VhdGhlciBibG9ja1xuZnVuY3Rpb24gY3JlYXRlTWFpbldlYXRoZXIod2VhdGhlcikge1xuICAgIGNvbnN0IG1haW5CbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgbWFpbkJsb2NrLmNsYXNzTGlzdC5hZGQoXCJtYWluLWJsb2NrXCIpO1xuICAgIGxldCBjdXJyZW50ID0gd2VhdGhlci53ZWF0aGVyRGF0YS5jdXJyZW50O1xuICAgIC8vIENyZWF0ZSB0aGUgd2VhdGhlciBlbGVtZW50cyBmcm9tIGFyZ3VtZW50cyBhbmQgc3RvcmUgdGhlbSBpbiBhbiBvYmplY3QgZm9yIGl0ZXJhdGluZyBhcHBlbmRzICAgIFxuICAgIGNvbnN0IG1haW5FbGVtZW50cyA9IHtcbiAgICAgICAgc3RhdHVzOiBjcmVhdGVXZWF0aGVyRWxlbWVudChcIm1haW5cIiwgXCJkZXNjcmlwdGlvblwiLCBgJHtjdXJyZW50LndlYXRoZXIuZGVzY3JpcHRpb259LmApLFxuICAgICAgICBsb2NhdGlvbjogY3JlYXRlV2VhdGhlckVsZW1lbnQoXCJtYWluXCIsIFwibG9jYXRpb25cIiwgYCR7d2VhdGhlci5nZW9EYXRhLm5hbWV9LCAke3dlYXRoZXIuZ2VvRGF0YS5jb3VudHJ5fWApLFxuICAgICAgICBkYXRlOiBjcmVhdGVXZWF0aGVyRWxlbWVudChcIm1haW5cIiwgXCJkYXRlXCIsIGAke25ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tdXNcIiwgeyB3ZWVrZGF5OiAnbG9uZycsIG1vbnRoOiAnc2hvcnQnLCBkYXk6ICdudW1lcmljJyB9KX0gLyAke25ldyBEYXRlKCkudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tdXNcIiwgeyB0aW1lU3R5bGU6IFwic2hvcnRcIiB9KX1gKSxcbiAgICAgICAgaWNvbjogY3JlYXRlV2VhdGhlckVsZW1lbnQoXCJtYWluXCIsIFwiaWNvblwiLCBgaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHtjdXJyZW50LndlYXRoZXIuaWNvbn1ANHgucG5nYCksXG4gICAgICAgIHRlbXA6IGNyZWF0ZVdlYXRoZXJFbGVtZW50KFwibWFpblwiLCBcInRlbXBcIiwgTWF0aC5yb3VuZChjdXJyZW50LmN1cnJlbnRUZW1wKSksXG4gICAgICAgIHVuaXRzOiBjcmVhdGVXZWF0aGVyRWxlbWVudChcIm1haW5cIiwgXCJ1bml0c1wiLCBgJHtjdXJyZW50LnVuaXRzID09PSBcIkNIQU5HRSBUSElTIEhFUkVcIiA/IFwiQ1wiIDogXCJDXCJ9YCksXG4gICAgICAgIGZlZWxzTGlrZTogY3JlYXRlV2VhdGhlckVsZW1lbnQoXCJtYWluXCIsIFwiZmVlbHMtbGlrZVwiLCBgRkVFTFMgTElLRTogJHtNYXRoLnJvdW5kKGN1cnJlbnQuZmVlbHNMaWtlKX0ke2N1cnJlbnQudW5pdHMgPT09IFwiQ0hBTkdFIFRISVMgSEVSRVwiID8gXCJDXCIgOiBcIkNcIn1gKSxcbiAgICAgICAgaHVtaWRpdHk6IGNyZWF0ZVdlYXRoZXJFbGVtZW50KFwibWFpblwiLCBcImh1bWlkaXR5XCIsIGBIVU1JRElUWTogJHtjdXJyZW50Lmh1bWlkaXR5fSVgKSxcbiAgICAgICAgd2luZDogY3JlYXRlV2VhdGhlckVsZW1lbnQoXCJtYWluXCIsIFwid2luZFwiLCBgV0lORDogJHtNYXRoLnJvdW5kKGN1cnJlbnQud2luZC5zcGVlZCl9bS9zYClcbiAgICAgICAgLy8gb3B0aW9uYWw6IGNoYW5jZSBvZiByYWluXG4gICAgfVxuICAgIGZvciAobGV0IGVsZW1lbnQgaW4gbWFpbkVsZW1lbnRzKSB7XG4gICAgICAgIG1haW5CbG9jay5hcHBlbmRDaGlsZChtYWluRWxlbWVudHNbZWxlbWVudF0pO1xuICAgIH1cbiAgICBjb25zdCBpbnB1dHNCbG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5wdXRzQmxvY2suY2xhc3NMaXN0LmFkZChcIm1haW4taW5wdXRzXCIpO1xuICAgIGlucHV0c0Jsb2NrLmFwcGVuZENoaWxkKGNyZWF0ZUNpdHlJbnB1dCgpKTtcbiAgICBpbnB1dHNCbG9jay5hcHBlbmRDaGlsZChjcmVhdGVVbml0c1RvZ2dsZSgpKTtcbiAgICBjb25zdCBlcnJvckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZXJyb3JDb250YWluZXIuaWQgPSBcImVycm9yLWNvbnRhaW5lclwiO1xuICAgIG1haW5CbG9jay5hcHBlbmRDaGlsZChpbnB1dHNCbG9jayk7XG4gICAgbWFpbkJsb2NrLmFwcGVuZENoaWxkKGVycm9yQ29udGFpbmVyKTtcbiAgICByZXR1cm4gW21haW5CbG9jaywgbWFpbkVsZW1lbnRzXTtcbn1cblxuLy8gVGhpcyBzbGlkZXIgY29kZSBtYWRlIHBvc3NpYmxlIHRoYW5rcyB0byBLZWxseUV4OiBodHRwczovL2NvZGVwZW4uaW8va2VsbHlleC9wZW4vS0t3d2RZZ1xuZnVuY3Rpb24gY3JlYXRlRm9yZWNhc3RTY3JvbGxlcigpIHtcbiAgICBjb25zdCBzbGlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNsaWRlci5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3Qtc2Nyb2xsZXJcIik7XG4gICAgbGV0IGlzRG93biA9IGZhbHNlO1xuICAgIGxldCBzdGFydFg7XG4gICAgbGV0IHNjcm9sbExlZnQ7XG4gICAgY29uc3Qgc3RhcnQgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgaXNEb3duID0gdHJ1ZTtcbiAgICAgICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1zY3JvbGxlci1hY3RpdmVcIik7XG4gICAgICAgIHN0YXJ0WCA9IGV2ZW50LnBhZ2VYIHx8IGV2ZW50LnRvdWNoZXNbMF0ucGFnZVggLSBzbGlkZXIub2Zmc2V0TGVmdDtcbiAgICAgICAgc2Nyb2xsTGVmdCA9IHNsaWRlci5zY3JvbGxMZWZ0O1xuICAgIH1cbiAgICBjb25zdCBlbmQgPSAoKSA9PiB7XG4gICAgICAgIGlzRG93biA9IGZhbHNlO1xuICAgICAgICBzbGlkZXIuY2xhc3NMaXN0LnJlbW92ZShcImZvcmVjYXN0LXNjcm9sbGVyLWFjdGl2ZVwiKTtcbiAgICB9XG4gICAgY29uc3QgbW92ZSA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoIWlzRG93bikgcmV0dXJuO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCB4ID0gZXZlbnQucGFnZVggfHwgZXZlbnQudG91Y2hlc1swXS5wYWdlWCAtIHNsaWRlci5vZmZzZXRMZWZ0O1xuICAgICAgICBjb25zdCBkaXN0ID0gKHggLSBzdGFydFgpO1xuICAgICAgICBzbGlkZXIuc2Nyb2xsTGVmdCA9IHNjcm9sbExlZnQgLSBkaXN0O1xuICAgIH1cbiAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBzdGFydCk7XG4gICAgc2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIHN0YXJ0KTtcbiAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBtb3ZlKTtcbiAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCBtb3ZlKTtcbiAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgZW5kKTtcbiAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZW5kKTtcbiAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGVuZCk7XG4gICAgcmV0dXJuIHNsaWRlcjtcbn1cblxuLy8gQ3JlYXRlcyB0aGUgZm9yZWNhc3RlZCB3ZWF0aGVyIGJsb2NrIChzbGlkZXIpXG5mdW5jdGlvbiBjcmVhdGVGb3JlY2FzdFdlYXRoZXIoZm9yZWNhc3QpIHtcbiAgICBjb25zdCBmb3JlY2FzdFNjcm9sbGVyID0gY3JlYXRlRm9yZWNhc3RTY3JvbGxlcigpO1xuICAgIGNvbnN0IGZvcmVjYXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmb3JlY2FzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtY29udGFpbmVyXCIpO1xuICAgIGxldCBmb3JlY2FzdEFycmF5ID0gW107XG4gICAgICAgIGZvciAobGV0IGRheSBvZiBmb3JlY2FzdCkge1xuICAgICAgICBjb25zdCBmb3JlY2FzdEJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZm9yZWNhc3RCbG9jay5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtYmxvY2tcIik7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0RWxlbWVudHMgPSB7XG4gICAgICAgICAgICBkYXk6IGNyZWF0ZVdlYXRoZXJFbGVtZW50KFwiZm9yZWNhc3RcIiwgXCJkYXlcIiwgZGF5LmRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tdXNcIiwgeyB3ZWVrZGF5OiAnc2hvcnQnIH0pKSxcbiAgICAgICAgICAgIGljb246IGNyZWF0ZVdlYXRoZXJFbGVtZW50KFwiZm9yZWNhc3RcIiwgXCJpY29uXCIsIGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2RheS53ZWF0aGVyLmljb259QDR4LnBuZ2ApLFxuICAgICAgICAgICAgbWF4VGVtcDogY3JlYXRlV2VhdGhlckVsZW1lbnQoXCJmb3JlY2FzdFwiLCBcIm1heC10ZW1wXCIsIGAke01hdGgucm91bmQoZGF5Lm1heFRlbXApfcKwYCksXG4gICAgICAgICAgICBtaW5UZW1wOiBjcmVhdGVXZWF0aGVyRWxlbWVudChcImZvcmVjYXN0XCIsIFwibWluLXRlbXBcIiwgYCR7TWF0aC5yb3VuZChkYXkubWluVGVtcCl9wrBgKSxcbiAgICAgICAgICAgIC8vIHVuaXRzOiBjcmVhdGVXZWF0aGVyRWxlbWVudChcImZvcmVjYXN0XCIsIFwidW5pdHNcIiwgYCR7ZGF5LnVuaXRzID09PSBcIkNIQU5HRSBUSElTIEhFUkVcIiA/IFwiQ1wiIDogXCJDXCJ9YCksXG4gICAgICAgICAgICAvLyBvcHRpb25hbDogY2hhbmNlIG9mIHJhaW5cbiAgICAgICAgfVxuICAgICAgICBmb3JlY2FzdEFycmF5LnB1c2goZm9yZWNhc3RFbGVtZW50cyk7XG4gICAgICAgIGZvciAobGV0IGVsZW1lbnQgaW4gZm9yZWNhc3RFbGVtZW50cykge1xuICAgICAgICAgICAgZm9yZWNhc3RCbG9jay5hcHBlbmRDaGlsZChmb3JlY2FzdEVsZW1lbnRzW2VsZW1lbnRdKTtcbiAgICAgICAgfVxuICAgICAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdEJsb2NrKTtcbiAgICB9XG4gICAgZm9yZWNhc3RTY3JvbGxlci5hcHBlbmRDaGlsZChmb3JlY2FzdENvbnRhaW5lcik7XG4gICAgcmV0dXJuIFtmb3JlY2FzdFNjcm9sbGVyLCBmb3JlY2FzdEFycmF5XTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ2l0eUlucHV0KCkge1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICBmb3JtLmlkID0gXCJmb3JtLWNpdHlcIjtcbiAgICBjb25zdCBjaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgY2l0eUlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBjaXR5SW5wdXQucGxhY2Vob2xkZXIgPSBcImVnLiBMb25kb24sIEdCXCI7XG4gICAgY29uc3QgY2l0eUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2l0eUJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBjb25zdCBjaXR5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpXCIpO1xuICAgIGNpdHlJY29uLmNsYXNzTGlzdC5hZGQoXCJmYS1zb2xpZFwiLCBcImZhLW1hZ25pZnlpbmctZ2xhc3NcIik7XG4gICAgY2l0eUJ1dHRvbi5hcHBlbmRDaGlsZChjaXR5SWNvbik7XG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgbGV0IGNpdHkgPSBwYXJzZUNpdHlJbnB1dChjaXR5SW5wdXQudmFsdWUpO1xuICAgICAgICBldmVudEVtaXR0ZXIuZW1pdChcIndlYXRoZXItY2l0eVwiLCBjaXR5KTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2l0eUlucHV0KTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGNpdHlCdXR0b24pO1xuICAgIHJldHVybiBmb3JtO1xufVxuXG4vLyBSZW1vdmVzIHdoaXRlc3BhY2UgZnJvbSB0aGUgY2l0eSBpbnB1dCBmb3IgZW50cnkgaW50byBBUElcbmZ1bmN0aW9uIHBhcnNlQ2l0eUlucHV0KGNpdHkpIHtcbiAgICByZXR1cm4gY2l0eS5yZXBsYWNlKC9cXHMvZywgXCJcIikudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVW5pdHNUb2dnbGUoKSB7XG4gICAgY29uc3QgdW5pdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHVuaXRzLmNsYXNzTGlzdC5hZGQoXCJ1bml0cy10b2dnbGVcIik7XG4gICAgY29uc3QgbWV0cmljID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBtZXRyaWMuaWQgPSBcInRvZ2dsZS1tZXRyaWNcIjtcbiAgICBtZXRyaWMudGV4dENvbnRlbnQgPSBcIkNcIjtcbiAgICBjb25zdCBkaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgZGl2aWRlci50ZXh0Q29udGVudCA9IFwiL1wiO1xuICAgIGNvbnN0IGltcGVyaWFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBpbXBlcmlhbC5pZCA9IFwidG9nZ2xlLWltcGVyaWFsXCI7XG4gICAgaW1wZXJpYWwudGV4dENvbnRlbnQgPSBcIkZcIjtcbiAgICBtZXRyaWMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoXCJzZXQtdW5pdHNcIiwgXCJtZXRyaWNcIik7XG4gICAgfSk7XG4gICAgaW1wZXJpYWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgZXZlbnRFbWl0dGVyLmVtaXQoXCJzZXQtdW5pdHNcIiwgXCJpbXBlcmlhbFwiKTtcbiAgICB9KVxuICAgIHVuaXRzLmFwcGVuZChtZXRyaWMsIGRpdmlkZXIsIGltcGVyaWFsKTtcbiAgICByZXR1cm4gdW5pdHM7XG59XG5cbi8vIENyZWF0ZXMgYSB3ZWF0aGVyIGVsZW1lbnQgYmFzZWQgb24gd2hlcmUgaXQgaXMgdXNlZCAobWFpbiBvciBmb3JlY2FzdCksIGl0cyB0eXBlIGFuZCBjb250ZW50XG4vLyBTZXRzIGNsYXNzIHRvIGJlIGEgc3RhbmRhZGlzZWQgZm9ybWF0IGZvciBlYXNpZXIgQ1NTaW5nIG9mIHRoZSBncmlkXG5mdW5jdGlvbiBjcmVhdGVXZWF0aGVyRWxlbWVudCh1c2UsIHR5cGUsIGNvbnRlbnQpIHtcbiAgICBpZiAodHlwZSA9PT0gXCJpY29uXCIpIHtcbiAgICAgICAgY29uc3QgYmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBibG9jay5jbGFzc0xpc3QuYWRkKGAke3VzZX0tJHt0eXBlfWApO1xuICAgICAgICBjb25zdCBpbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGltYWdlLnNyYyA9IGNvbnRlbnQ7XG4gICAgICAgIGJsb2NrLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgcmV0dXJuIGJsb2NrO1xuICAgIH1cbiAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoYCR7dXNlfS0ke3R5cGV9YCk7XG4gICAgYmxvY2sudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgIHJldHVybiBibG9jaztcbn1cblxuZnVuY3Rpb24gcmVtb3ZlRXJyb3JzKCkge1xuICAgIGNvbnN0IGVycm9yQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlcnJvci1jb250YWluZXJcIik7XG4gICAgZXJyb3JDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xufVxuXG5mdW5jdGlvbiBjaXR5RXJyb3IoKSB7XG4gICAgY29uc3QgZXJyb3JDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yLWNvbnRhaW5lclwiKTtcbiAgICBlcnJvckNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiQ2l0eSBjb3VsZCBub3QgYmUgZm91bmQuXCI7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZVVuaXRzKHdlYXRoZXIsIGVsZW1lbnRzLCB1bml0cyl7XG4gICAgbGV0IGN1cnJlbnRFbGVtZW50cyA9IGVsZW1lbnRzWzBdO1xuICAgIGxldCBjdXJyZW50V2VhdGhlciA9IHdlYXRoZXJbMF07XG4gICAgbGV0IGZvcmVjYXN0RWxlbWVudHMgPSBlbGVtZW50c1sxXTtcbiAgICBsZXQgZm9yZWNhc3RXZWF0aGVyID0gd2VhdGhlclsxXTtcbiAgICBmdW5jdGlvbiB1cGRhdGVOdW1iZXIobnVtYmVyLCB3aW5kKXtcbiAgICAgICAgaWYgKHVuaXRzID09PSBcImltcGVyaWFsXCIpe1xuICAgICAgICAgICAgaWYgKHdpbmQgPT09IHRydWUpe1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG51bWJlcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKChudW1iZXIgKiA5IC8gNSkgKyAzMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyKTtcbiAgICB9XG4gICAgY3VycmVudEVsZW1lbnRzLnRlbXAudGV4dENvbnRlbnQgPSB1cGRhdGVOdW1iZXIoY3VycmVudFdlYXRoZXIuY3VycmVudFRlbXApO1xuICAgIGN1cnJlbnRFbGVtZW50cy5mZWVsc0xpa2UudGV4dENvbnRlbnQgPSBgRkVFTFMgTElLRTogJHt1cGRhdGVOdW1iZXIoY3VycmVudFdlYXRoZXIuZmVlbHNMaWtlKX0ke3VuaXRzID09PSBcIm1ldHJpY1wiID8gXCJDXCIgOiBcIkZcIn1gO1xuICAgIGN1cnJlbnRFbGVtZW50cy53aW5kLnRleHRDb250ZW50ID0gYFdJTkQ6ICR7dXBkYXRlTnVtYmVyKGN1cnJlbnRXZWF0aGVyLndpbmQuc3BlZWQpfSR7dW5pdHMgPT09IFwibWV0cmljXCIgPyBcIm0vc1wiIDogXCJtcGhcIn1gO1xuICAgIGN1cnJlbnRFbGVtZW50cy51bml0cy50ZXh0Q29udGVudCA9IGAke3VuaXRzID09PSBcIm1ldHJpY1wiID8gXCJDXCIgOiBcIkZcIn1gO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9yZWNhc3RFbGVtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGZvcmVjYXN0RWxlbWVudHNbaV0ubWF4VGVtcC50ZXh0Q29udGVudCA9IGAke3VwZGF0ZU51bWJlcihmb3JlY2FzdFdlYXRoZXJbaV0ubWF4VGVtcCl9wrBgO1xuICAgICAgICBmb3JlY2FzdEVsZW1lbnRzW2ldLm1pblRlbXAudGV4dENvbnRlbnQgPSBgJHt1cGRhdGVOdW1iZXIoZm9yZWNhc3RXZWF0aGVyW2ldLm1pblRlbXApfcKwYDtcbiAgICB9XG4gICAgY29uc3QgbWV0cmljRUxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLW1ldHJpY1wiKTtcbiAgICBjb25zdCBpbXBlcmlhbEVMZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZ2dsZS1pbXBlcmlhbFwiKTtcbiAgICBpZiAodW5pdHMgPT09IFwibWV0cmljXCIpe1xuICAgICAgICBtZXRyaWNFTGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ1bml0cy10b2dnbGUtYWN0aXZlXCIpO1xuICAgICAgICBpbXBlcmlhbEVMZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcInVuaXRzLXRvZ2dsZS1hY3RpdmVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbWV0cmljRUxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidW5pdHMtdG9nZ2xlLWFjdGl2ZVwiKTtcbiAgICAgICAgaW1wZXJpYWxFTGVtZW50LmNsYXNzTGlzdC5hZGQoXCJ1bml0cy10b2dnbGUtYWN0aXZlXCIpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlV2VhdGhlcih3ZWF0aGVyLCB1bml0cykge1xuICAgIHdoaWxlIChkYXlDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgICAgICBkYXlDb250YWluZXIucmVtb3ZlQ2hpbGQoZGF5Q29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIHdoaWxlIChmb3JlY2FzdENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIGZvcmVjYXN0Q29udGFpbmVyLnJlbW92ZUNoaWxkKGZvcmVjYXN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIGxldCB3ZWF0aGVySXRlbXMgPSBjcmVhdGVNYWluV2VhdGhlcih3ZWF0aGVyKTtcbiAgICBsZXQgZm9yZWNhc3RJdGVtcyA9IGNyZWF0ZUZvcmVjYXN0V2VhdGhlcih3ZWF0aGVyLndlYXRoZXJEYXRhLmRhaWx5KTtcbiAgICBkYXlDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlckl0ZW1zWzBdKTtcbiAgICBmb3JlY2FzdENvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JlY2FzdEl0ZW1zWzBdKTtcbiAgICByZW1vdmVFcnJvcnMoKTtcbiAgICBldmVudEVtaXR0ZXIub24oXCJjaGFuZ2UtdW5pdHNcIiwgbmV3VW5pdHMgPT4ge1xuICAgICAgICBjaGFuZ2VVbml0cyhbd2VhdGhlci53ZWF0aGVyRGF0YS5jdXJyZW50LCB3ZWF0aGVyLndlYXRoZXJEYXRhLmRhaWx5XSwgW3dlYXRoZXJJdGVtc1sxXSwgZm9yZWNhc3RJdGVtc1sxXV0sIG5ld1VuaXRzKVxuICAgIH0pXG4gICAgY2hhbmdlVW5pdHMoW3dlYXRoZXIud2VhdGhlckRhdGEuY3VycmVudCwgd2VhdGhlci53ZWF0aGVyRGF0YS5kYWlseV0sIFt3ZWF0aGVySXRlbXNbMV0sIGZvcmVjYXN0SXRlbXNbMV1dLCB1bml0cylcbiAgICBcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNyZWF0ZVdlYXRoZXIsXG4gICAgZXZlbnRFbWl0dGVyLFxuICAgIGNpdHlFcnJvclxufSIsImNvbnN0IGFwaUtleSA9ICdkNjUxNTJlYTI4ZWQ3YmI2YWE2ZjM0Njc2ZjA4YmMyNyc7XG5cbi8vIENoZWNrcyB0aGUgcmVzcG9uc2Ugb2YgdGhlIEFQSSwgYW5kIHRocm93cyBhbiBlcnJvciBpZiB0aGUgcmVzcG9uc2UgaXMgbm90IGNvbnNpZGVyZWQgZ29vZFxuZnVuY3Rpb24gY2hlY2tSZXNwb25zZShyZXNwb25zZSkge1xuICAgIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICAgICAgdGhyb3cgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xuICAgIH1cbn1cblxuLy8gVGFrZXMgYSB2YWxpZCBjaXR5IGlucHV0IGFuZCBmZXRjaGVzIGdlb2dyYXBoaWNhbCBkYXRhIGZyb20gQVBJLCB0byBwYXNzIGludG8gbmV4dCBBUElcbi8vIFJldHVybnMgdGhlIGZpcnN0IHJlc3VsdCBpbiB0aGUgY2FzZSBvZiBtdWx0aXBsZSB2YWxpZCBjaXRpZXNcbi8vIElmIHRoZXJlIGFyZSBubyB2YWxpZCBjaXRpZXMsIHRocm93cyBhbiBlcnJvclxuYXN5bmMgZnVuY3Rpb24gZ2V0R2VvY29kZURhdGEoY2l0eSkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHl9JmxpbWl0PTUmYXBwaWQ9JHthcGlLZXl9YCxcbiAgICAgICAgICAgIHsgbW9kZTogXCJjb3JzXCIgfSlcbiAgICAgICAgY2hlY2tSZXNwb25zZShyZXNwb25zZSk7XG4gICAgICAgIGxldCBnZW9EYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICBpZiAoIWdlb0RhdGFbMF0pIHtcbiAgICAgICAgICAgIHRocm93IEVycm9yKFwiTk9fQ0lUWVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBnZW9EYXRhWzBdO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbn1cblxuLy8gRmV0Y2hlcyB0aGUgY3VycmVudCB3ZWF0aGVyIGFuZCB3ZWF0aGVyIGZvcmVjYXN0IGZvciA3IGRheXMgKGRhaWx5KSBhbmQgNDggaG91cnMgKGhvdXJseSkgZnJvbSBBUElcbi8vIEN1cnJlbnQgd2VhdGhlciBpcyBhIHNpbmdsZSBvYmplY3QsIGZvcmVjYXN0cyBhcmUgYXJyYXkgb2Ygd2VhdGhlciBvYmplY3RzXG4vLyBUYWtlcyBnZW9ncmFwaGljYWwgb2JqZWN0IHJldHVybmVkIGZyb20gZ2V0R2VvY29kZURhdGEoKVxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlckRhdGEobG9jYXRpb24sIHVuaXRzKSB7XG4gICAgbGV0IGxvbiA9IGxvY2F0aW9uLmxvbjtcbiAgICBsZXQgbGF0ID0gbG9jYXRpb24ubGF0O1xuICAgIGxldCBleGNsdWRlID0gYG1pbnV0ZWx5LGFsZXJ0c2A7XG4gICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZ1bml0cz0ke3VuaXRzfSZleGNsdWRlPSR7ZXhjbHVkZX0mYXBwaWQ9JHthcGlLZXl9YCxcbiAgICAgICAgeyBtb2RlOiBcImNvcnNcIiB9KTtcbiAgICBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICBsZXQgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgcmV0dXJuIHdlYXRoZXJEYXRhO1xufVxuXG4vLyBNYWluIGZ1bmN0aW9uIHdlIHdpbGwgYmUgY2FsbGluZyAtIGdldHMgZ2VvIGRhdGEsIHRoZW4gZ2V0cyBjdXJyZW50IHdlYXRoZXIgYW5kIGZvcmVjYXN0XG4vLyBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGJvdGggZGF0YSBibG9ja3MgYXMgb2JqZWN0c1xuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2NhdGlvbiwgdW5pdHMpIHtcbiAgICBsZXQgZ2VvRGF0YSA9IGdldEdlb2NvZGVEYXRhKGxvY2F0aW9uKTtcbiAgICBsZXQgd2VhdGhlckRhdGEgPSBnZW9EYXRhLnRoZW4obG9jID0+IHtcbiAgICAgICAgcmV0dXJuIGdldFdlYXRoZXJEYXRhKGxvYywgdW5pdHMpO1xuICAgIH0pO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChbZ2VvRGF0YSwgd2VhdGhlckRhdGFdKVxuICAgIC50aGVuKChbZ2VvRGF0YSwgd2VhdGhlckRhdGFdKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBnZW9EYXRhLFxuICAgICAgICAgICAgd2VhdGhlckRhdGFcbiAgICAgICAgfVxuICAgIH0pXG4gICAgLy8gLmNhdGNoKGVyciA9PiB7XG4gICAgLy8gICAgIHRocm93IEVycm9yKGVycik7XG4gICAgLy8gfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGdldFdlYXRoZXI7IiwiLy8gVGFrZXMgYSB3ZWF0aGVyIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSB3ZWF0aGVyIHByb3BlcnRpZXMgb2YgdGhhdCBtb21lbnRcbi8vIGFuZCBjb252ZXJ0cyBpdCB0byBhIG11Y2ggbW9yZSByZWFkYWJsZSBhbmQgcmVkdWNlZCBmb3JtYXRcbmZ1bmN0aW9uIHBhcnNlRGF0YShkYXRhKSB7XG4gICAgbGV0IHRlbXBPYmplY3QgPSB7XG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGEuZHQgKiAxMDAwKSxcbiAgICAgICAgY3VycmVudFRlbXA6IGRhdGEudGVtcCxcbiAgICAgICAgZmVlbHNMaWtlOiBkYXRhLmZlZWxzX2xpa2UsXG4gICAgICAgIGh1bWlkaXR5OiBkYXRhLmh1bWlkaXR5LFxuICAgICAgICB3aW5kOiB7XG4gICAgICAgICAgICBzcGVlZDogZGF0YS53aW5kX3NwZWVkLFxuICAgICAgICAgICAgZGVnOiBkYXRhLndpbmRfZGVnXG4gICAgICAgIH0sXG4gICAgICAgIHdlYXRoZXI6IHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb24sXG4gICAgICAgICAgICB0eXBlOiBkYXRhLndlYXRoZXJbMF0ubWFpbixcbiAgICAgICAgICAgIGljb246IGRhdGEud2VhdGhlclswXS5pY29uXG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSWYgcGFyc2luZyBhIGZvcmVjYXN0IHdlYXRoZXIgb2JqZWN0LCB1c2UgZGlmZmVyZW50IGdldHMgZm9yIHRoZSBwcm9wZXJ0aWVzXG4gICAgaWYgKHR5cGVvZiBkYXRhLnRlbXAgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgZGVsZXRlIHRlbXBPYmplY3QuY3VycmVudFRlbXA7XG4gICAgICAgIHRlbXBPYmplY3QubWF4VGVtcCA9IGRhdGEudGVtcC5tYXg7XG4gICAgICAgIHRlbXBPYmplY3QubWluVGVtcCA9IGRhdGEudGVtcC5taW47XG4gICAgICAgIHRlbXBPYmplY3QuZmVlbHNMaWtlID0gZGF0YS5mZWVsc19saWtlLmRheTtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBPYmplY3Q7XG59XG5cbi8vIFRha2VzIGFuIGFycmF5IG9mIHdlYXRoZXIgb2JqZWN0cyB0aGF0IHJlcHJlc2VudHMgdGhlIGZvcmVjYXN0ZWQgd2VhdGhlclxuZnVuY3Rpb24gY29udmVydEZvcmVjYXN0KGRhdGEpIHtcbiAgICByZXR1cm4gZGF0YS5tYXAoZGF5ID0+IHBhcnNlRGF0YShkYXkpKTtcbn1cblxuLy8gVGFrZXMgdGhlIHJhdyB3ZWF0aGVyIGlucHV0IG9iamVjdCBhbmQgcmV0dXJucyB0aGUgcGFyc2VkIGRhdGEgZm9yIGVhY2ggcHJvcGVydHlcbmZ1bmN0aW9uIHByb2Nlc3NXZWF0aGVyKHdlYXRoZXJPYmplY3QpIHtcbiAgICBsZXQgd2VhdGhlciA9IHtcbiAgICAgICAgY3VycmVudDogcGFyc2VEYXRhKHdlYXRoZXJPYmplY3QuY3VycmVudCksXG4gICAgICAgIGRhaWx5OiBjb252ZXJ0Rm9yZWNhc3Qod2VhdGhlck9iamVjdC5kYWlseSlcbiAgICB9XG4gICAgLy9cbiAgICAvLyBDSEVDSyBUTyBTRUUgSUYgVEhJUyBSRVFVSVJFUyBBTiBJRi9FTFNFIFNUQVRFTUVOVCBBUk9VTkQgTUlETklHSFRcbiAgICAvLyBFLkcuLCBJRiBUSEUgRklSU1QgRk9SRUNBU1QgT0JKRUNUIElOIFRIRSBBUlJBWSBJUyAtTk9ULSBUSEUgQ1VSUkVOVCBEQVlcbiAgICAvL1xuICAgIC8vIEFkZCBmb3JlY2FzdCBtYXhUZW1wIGRhdGEgdG8gdGhlIGN1cnJlbnRXZWF0aGVyIG9iamVjdFxuICAgIHdlYXRoZXIuY3VycmVudC5tYXhUZW1wID0gd2VhdGhlci5kYWlseVswXS5tYXhUZW1wO1xuICAgIC8vIFRoZW4gY2hvcCBvdXQgdGhlIGZpcnN0IGRheSBzbyBpdCBkb2Vzbid0IGFwcGVhciBpbiB0aGUgZm9yZWNhc3RcbiAgICB3ZWF0aGVyLmRhaWx5LnNwbGljZSgwLCAxKTtcbiAgICByZXR1cm4gd2VhdGhlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcHJvY2Vzc1dlYXRoZXI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgcHJvY2Vzc1dlYXRoZXIgZnJvbSBcIi4vcHJvY2Vzc1dlYXRoZXIuanNcIlxuaW1wb3J0IGdldFdlYXRoZXIgZnJvbSAnLi9nZXRXZWF0aGVyLmpzJztcbmltcG9ydCBkb21Db250cm9sbGVyIGZyb20gXCIuL2RvbUNvbnRyb2xsZXIuanNcIjtcblxubGV0IHVuaXRzID0gXCJtZXRyaWNcIjtcbmxldCBsb2NhdGlvbiA9IFwiTWVsYm91cm5lLEF1c3RyYWxpYVwiO1xuXG5kb21Db250cm9sbGVyLmV2ZW50RW1pdHRlci5vbihcIndlYXRoZXItY2l0eVwiLCAoY2l0eSkgPT4ge1xuICAgIHdlYXRoZXIoY2l0eSk7XG59KVxuXG5kb21Db250cm9sbGVyLmV2ZW50RW1pdHRlci5vbihcInNldC11bml0c1wiLCAodSkgPT4ge1xuICAgIGlmICh1ID09PSB1bml0cyl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZG9tQ29udHJvbGxlci5ldmVudEVtaXR0ZXIuZW1pdChcImNoYW5nZS11bml0c1wiLCB1KVxuICAgIHVuaXRzID0gdTtcblxufSlcblxuZnVuY3Rpb24gd2VhdGhlcihjaXR5KXtcbiAgICBsZXQgd2VhdGhlciA9IGdldFdlYXRoZXIoY2l0eSwgXCJtZXRyaWNcIik7XG4gICAgd2VhdGhlclxuICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBkYXRhLndlYXRoZXJEYXRhID0gcHJvY2Vzc1dlYXRoZXIoZGF0YS53ZWF0aGVyRGF0YSk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH0pXG4gICAgLnRoZW4oKHdlYXRoZXIpID0+IHtcbiAgICAgICAgbG9jYXRpb24gPSBjaXR5O1xuICAgICAgICBkb21Db250cm9sbGVyLmNyZWF0ZVdlYXRoZXIod2VhdGhlciwgdW5pdHMpXG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgIGlmIChlcnIubWVzc2FnZSA9PT0gXCJOT19DSVRZXCIpe1xuICAgICAgICAgICAgZG9tQ29udHJvbGxlci5jaXR5RXJyb3IoKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbndlYXRoZXIobG9jYXRpb24pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==