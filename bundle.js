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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: rgb(50, 50, 50);\n    font-family: Poppins;\n    color: white;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n    margin: 0;\n}\n\n#app {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 30% 30% 35% 5%;\n}\n\nsection {\n    padding: 8%;\n}\n\nheader {\n    height: 100%;\n}\n\n.day-section {\n    display: flex;\n    align-items: center;\n}\n\n.main-block {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 80px auto 30px 1fr;\n    grid-template-rows: auto 20px 40px 30px 30px 30px 30px 30px;\n}\n\n.main-block > * {\n    width: 100%;\n    height: 100%;\n}\n\n.main-description, .main-location, .main-date {\n    grid-column: 1 / 6;\n}\n\n.main-description {\n    line-height: 0.9;\n    font-size: 2rem;\n    font-weight: 500;\n}\n\n.main-icon {\n    grid-column: 1 / 2;\n    grid-row: 4 / 7;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: -6px;\n}\n\n.main-icon > img {\n    transform: scale(0.7)\n}\n\n.main-temp {\n    grid-column: 2 / 3;\n    grid-row: 4 / 7;\n    display: flex;\n    align-items: center;\n    font-size: 5rem;\n    font-weight: 700;\n}\n\n.main-units {\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\n.main-feels-like, .main-humidity, .main-wind {\n    grid-column: 4 / 5;\n    font-size: 0.9rem;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n}\n\n.main-feels-like {\n    grid-row: 4 / 5;\n}\n\n.main-humidity {\n    grid-row: 5 / 6;\n}\n\n.main-wind {\n    grid-row: 6 / 7;\n}\n\n.main-inputs {\n    grid-column: 1 / -1;\n    grid-row: 7 / 8;\n    display: flex;\n    justify-content: end;\n    align-items: center;\n    gap: 8px;\n}\n\n#form-city {\n    display: flex;\n    justify-content: end;\n    align-items: center;\n    gap: 8px;\n    padding-top: 4px;\n    border-bottom: 1px solid grey;\n}\n\n#form-city input {\n    width: 150px;\n    background-color: transparent;\n    border: none;\n    font-size: 1rem;\n    color: white;\n    text-align: right;\n}\n\n#form-city button {\n    background-color: transparent;\n    border: none;\n}\n\n#form-city button:hover {\n    cursor: pointer;\n}\n\n#form-city button:hover i {\n    transform: scale(1.1);\n    transform-origin: center;\n}\n\n#form-city i {\n    transform: scale(0.9);\n    color: grey;\n}\n\n.units-toggle button {\n    background-color: transparent;\n    border: none;\n    color: grey;\n}\n\n.units-toggle span {\n    font-size: 0.8rem;\n    font-weight: 200;\n    color: grey;\n}\n\n.units-toggle button.units-toggle-active {\n    color: white;\n    font-weight: 900;\n}\n\n#error-container {\n    grid-column: 1 / -1;\n    grid-row: 8 / 9;\n    text-align: right;\n    color: rgb(202, 96, 96);\n}\n\n.forecast-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n    padding: 8%;\n}\n\n.forecast-scroller {\n    position: relative;\n    max-width: 100%;\n    height: 120px;\n    padding-top: 10px;\n    /* border: 1px solid white; */\n    overflow: hidden;\n}\n\n.forecast-scroller-active {\n    cursor: grab;\n}\n\n.forecast-container {\n    position: absolute;\n    display: flex;\n    border-left: 2px solid white;\n    border-right: 2px solid white;\n}\n\n.forecast-block {\n    width: 80px;\n    height: 100px;\n    display: grid;\n    grid-template-columns: 50% 50%;\n    grid-template-rows: 25% 45% 30%;\n    column-gap: 6px;\n}\n\n.forecast-block > * {\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.forecast-day {\n    grid-column: 1 / -1;\n    grid-row: 1 / 2;\n    font-size: 1.2rem;\n}\n\n.forecast-icon {\n    grid-column: 1 / -1;\n    grid-row: 2 / 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* transform: scale(1.2); */\n    /* text-align: center; */\n    /* width: 100%; */\n    /* margin-top: -16px; */\n}\n\n.forecast-icon > img {\n    transform: scale(0.4)\n}\n\n.forecast-max-temp {\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n    font-weight: 700;\n    justify-content: end;\n}\n\n.forecast-min-temp {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    font-weight: 100;\n    justify-content: start;\n}\n\n\nfooter {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n}\n\nfooter p {\n    padding: 0;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Carter+One&family=Poppins:wght@200;300;400;500;600&family=Roboto+Mono:wght@200;400;700&display=swap\");\n\n*, *::before, *::after {\n    box-sizing: border-box;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n    background-color: rgb(50, 50, 50);\n    font-family: Poppins;\n    color: white;\n}\n\nh1, h2, h3, h4, h5, h6, p {\n    margin: 0;\n}\n\n#app {\n    width: 100vw;\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 30% 30% 35% 5%;\n}\n\nsection {\n    padding: 8%;\n}\n\nheader {\n    height: 100%;\n}\n\n.day-section {\n    display: flex;\n    align-items: center;\n}\n\n.main-block {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 80px auto 30px 1fr;\n    grid-template-rows: auto 20px 40px 30px 30px 30px 30px 30px;\n}\n\n.main-block > * {\n    width: 100%;\n    height: 100%;\n}\n\n.main-description, .main-location, .main-date {\n    grid-column: 1 / 6;\n}\n\n.main-description {\n    line-height: 0.9;\n    font-size: 2rem;\n    font-weight: 500;\n}\n\n.main-icon {\n    grid-column: 1 / 2;\n    grid-row: 4 / 7;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: -6px;\n}\n\n.main-icon > img {\n    transform: scale(0.7)\n}\n\n.main-temp {\n    grid-column: 2 / 3;\n    grid-row: 4 / 7;\n    display: flex;\n    align-items: center;\n    font-size: 5rem;\n    font-weight: 700;\n}\n\n.main-units {\n    font-size: 1.2rem;\n    font-weight: 600;\n}\n\n.main-feels-like, .main-humidity, .main-wind {\n    grid-column: 4 / 5;\n    font-size: 0.9rem;\n    display: flex;\n    align-items: center;\n    justify-content: end;\n}\n\n.main-feels-like {\n    grid-row: 4 / 5;\n}\n\n.main-humidity {\n    grid-row: 5 / 6;\n}\n\n.main-wind {\n    grid-row: 6 / 7;\n}\n\n.main-inputs {\n    grid-column: 1 / -1;\n    grid-row: 7 / 8;\n    display: flex;\n    justify-content: end;\n    align-items: center;\n    gap: 8px;\n}\n\n#form-city {\n    display: flex;\n    justify-content: end;\n    align-items: center;\n    gap: 8px;\n    padding-top: 4px;\n    border-bottom: 1px solid grey;\n}\n\n#form-city input {\n    width: 150px;\n    background-color: transparent;\n    border: none;\n    font-size: 1rem;\n    color: white;\n    text-align: right;\n}\n\n#form-city button {\n    background-color: transparent;\n    border: none;\n}\n\n#form-city button:hover {\n    cursor: pointer;\n}\n\n#form-city button:hover i {\n    transform: scale(1.1);\n    transform-origin: center;\n}\n\n#form-city i {\n    transform: scale(0.9);\n    color: grey;\n}\n\n.units-toggle button {\n    background-color: transparent;\n    border: none;\n    color: grey;\n}\n\n.units-toggle span {\n    font-size: 0.8rem;\n    font-weight: 200;\n    color: grey;\n}\n\n.units-toggle button.units-toggle-active {\n    color: white;\n    font-weight: 900;\n}\n\n#error-container {\n    grid-column: 1 / -1;\n    grid-row: 8 / 9;\n    text-align: right;\n    color: rgb(202, 96, 96);\n}\n\n.forecast-section {\n    display: flex;\n    flex-direction: column;\n    justify-content: end;\n    padding: 8%;\n}\n\n.forecast-scroller {\n    position: relative;\n    max-width: 100%;\n    height: 120px;\n    padding-top: 10px;\n    /* border: 1px solid white; */\n    overflow: hidden;\n}\n\n.forecast-scroller-active {\n    cursor: grab;\n}\n\n.forecast-container {\n    position: absolute;\n    display: flex;\n    border-left: 2px solid white;\n    border-right: 2px solid white;\n}\n\n.forecast-block {\n    width: 80px;\n    height: 100px;\n    display: grid;\n    grid-template-columns: 50% 50%;\n    grid-template-rows: 25% 45% 30%;\n    column-gap: 6px;\n}\n\n.forecast-block > * {\n    overflow: hidden;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\n.forecast-day {\n    grid-column: 1 / -1;\n    grid-row: 1 / 2;\n    font-size: 1.2rem;\n}\n\n.forecast-icon {\n    grid-column: 1 / -1;\n    grid-row: 2 / 3;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    /* transform: scale(1.2); */\n    /* text-align: center; */\n    /* width: 100%; */\n    /* margin-top: -16px; */\n}\n\n.forecast-icon > img {\n    transform: scale(0.4)\n}\n\n.forecast-max-temp {\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n    font-weight: 700;\n    justify-content: end;\n}\n\n.forecast-min-temp {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n    font-weight: 100;\n    justify-content: start;\n}\n\n\nfooter {\n    height: 100%;\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n}\n\nfooter p {\n    padding: 0;\n}"],"sourceRoot":""}]);
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
forecastContainer.classList.add("forecast-section")
const footer = document.createElement("footer");
const footerName = document.createElement("p");
footerName.textContent = "Carl Madsen 2022";
footer.appendChild(footerName);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxtSEFBbUgsSUFBSSxJQUFJLElBQUksZ0NBQWdDLElBQUksb0JBQW9CLDRCQUE0Qiw2QkFBNkIsR0FBRyxVQUFVLGdCQUFnQixpQkFBaUIsd0NBQXdDLDJCQUEyQixtQkFBbUIsR0FBRywrQkFBK0IsZ0JBQWdCLEdBQUcsVUFBVSxtQkFBbUIsb0JBQW9CLG9CQUFvQix5Q0FBeUMsR0FBRyxhQUFhLGtCQUFrQixHQUFHLFlBQVksbUJBQW1CLEdBQUcsa0JBQWtCLG9CQUFvQiwwQkFBMEIsR0FBRyxpQkFBaUIsa0JBQWtCLG9CQUFvQixnREFBZ0Qsa0VBQWtFLEdBQUcscUJBQXFCLGtCQUFrQixtQkFBbUIsR0FBRyxtREFBbUQseUJBQXlCLEdBQUcsdUJBQXVCLHVCQUF1QixzQkFBc0IsdUJBQXVCLEdBQUcsZ0JBQWdCLHlCQUF5QixzQkFBc0Isb0JBQW9CLDhCQUE4QiwwQkFBMEIsd0JBQXdCLEdBQUcsc0JBQXNCLDhCQUE4QixnQkFBZ0IseUJBQXlCLHNCQUFzQixvQkFBb0IsMEJBQTBCLHNCQUFzQix1QkFBdUIsR0FBRyxpQkFBaUIsd0JBQXdCLHVCQUF1QixHQUFHLGtEQUFrRCx5QkFBeUIsd0JBQXdCLG9CQUFvQiwwQkFBMEIsMkJBQTJCLEdBQUcsc0JBQXNCLHNCQUFzQixHQUFHLG9CQUFvQixzQkFBc0IsR0FBRyxnQkFBZ0Isc0JBQXNCLEdBQUcsa0JBQWtCLDBCQUEwQixzQkFBc0Isb0JBQW9CLDJCQUEyQiwwQkFBMEIsZUFBZSxHQUFHLGdCQUFnQixvQkFBb0IsMkJBQTJCLDBCQUEwQixlQUFlLHVCQUF1QixvQ0FBb0MsR0FBRyxzQkFBc0IsbUJBQW1CLG9DQUFvQyxtQkFBbUIsc0JBQXNCLG1CQUFtQix3QkFBd0IsR0FBRyx1QkFBdUIsb0NBQW9DLG1CQUFtQixHQUFHLDZCQUE2QixzQkFBc0IsR0FBRywrQkFBK0IsNEJBQTRCLCtCQUErQixHQUFHLGtCQUFrQiw0QkFBNEIsa0JBQWtCLEdBQUcsMEJBQTBCLG9DQUFvQyxtQkFBbUIsa0JBQWtCLEdBQUcsd0JBQXdCLHdCQUF3Qix1QkFBdUIsa0JBQWtCLEdBQUcsOENBQThDLG1CQUFtQix1QkFBdUIsR0FBRyxzQkFBc0IsMEJBQTBCLHNCQUFzQix3QkFBd0IsOEJBQThCLEdBQUcsdUJBQXVCLG9CQUFvQiw2QkFBNkIsMkJBQTJCLGtCQUFrQixHQUFHLHdCQUF3Qix5QkFBeUIsc0JBQXNCLG9CQUFvQix3QkFBd0Isa0NBQWtDLHlCQUF5QixHQUFHLCtCQUErQixtQkFBbUIsR0FBRyx5QkFBeUIseUJBQXlCLG9CQUFvQixtQ0FBbUMsb0NBQW9DLEdBQUcscUJBQXFCLGtCQUFrQixvQkFBb0Isb0JBQW9CLHFDQUFxQyxzQ0FBc0Msc0JBQXNCLEdBQUcseUJBQXlCLHVCQUF1QixvQkFBb0IsMEJBQTBCLDhCQUE4QixHQUFHLG1CQUFtQiwwQkFBMEIsc0JBQXNCLHdCQUF3QixHQUFHLG9CQUFvQiwwQkFBMEIsc0JBQXNCLG9CQUFvQiwwQkFBMEIsOEJBQThCLGdDQUFnQywrQkFBK0Isd0JBQXdCLDhCQUE4QixLQUFLLDBCQUEwQiw4QkFBOEIsd0JBQXdCLHlCQUF5QixzQkFBc0IsdUJBQXVCLDJCQUEyQixHQUFHLHdCQUF3Qix5QkFBeUIsc0JBQXNCLHVCQUF1Qiw2QkFBNkIsR0FBRyxjQUFjLG1CQUFtQixrQkFBa0Isb0JBQW9CLDhCQUE4Qiw0QkFBNEIsR0FBRyxjQUFjLGlCQUFpQixHQUFHLG1CQUFtQjtBQUM5alc7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNSMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1COztBQUVuQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixzQkFBc0I7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQSxrQ0FBa0MsUUFBUTtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGlCQUFpQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLHVDQUF1QyxRQUFRO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0IsT0FBTztBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLHlCQUF5QjtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4REFBOEQsWUFBWTtBQUMxRTtBQUNBLDhEQUE4RCxZQUFZO0FBQzFFO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsWUFBWTtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL2VBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3ZHYTs7QUFFYjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzREFBc0Q7O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDWGE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEOztBQUVBO0FBQ0EsMENBQTBDO0FBQzFDOztBQUVBOztBQUVBO0FBQ0EsaUZBQWlGO0FBQ2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ3JFYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZnNDO0FBQ3RDLHlCQUF5QixnREFBWTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0RBQStELDRCQUE0QjtBQUMzRiw4REFBOEQscUJBQXFCLElBQUksd0JBQXdCO0FBQy9HLHNEQUFzRCx5Q0FBeUMsaURBQWlELEdBQUcsSUFBSSx5Q0FBeUMsb0JBQW9CLEVBQUU7QUFDdE4sdUZBQXVGLHFCQUFxQjtBQUM1RztBQUNBLHdEQUF3RCxpREFBaUQ7QUFDekcsNkVBQTZFLDhCQUE4QixFQUFFLGlEQUFpRDtBQUM5Six3RUFBd0UsaUJBQWlCO0FBQ3pGLDREQUE0RCwrQkFBK0I7QUFDM0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdHQUFnRyxrQkFBa0I7QUFDbEgsK0ZBQStGLGlCQUFpQjtBQUNoSCxxRUFBcUUsd0JBQXdCO0FBQzdGLHFFQUFxRSx3QkFBd0I7QUFDN0YsbUVBQW1FLDZDQUE2QztBQUNoSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixJQUFJLEdBQUcsS0FBSztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsSUFBSSxHQUFHLEtBQUs7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsdUNBQXVDLEVBQUUsK0JBQStCO0FBQ25JLGdEQUFnRCx3Q0FBd0MsRUFBRSxtQ0FBbUM7QUFDN0gsMkNBQTJDLCtCQUErQjtBQUMxRSxvQkFBb0IsNkJBQTZCO0FBQ2pELHFEQUFxRCx5Q0FBeUM7QUFDOUYscURBQXFELHlDQUF5QztBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoUEE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsS0FBSyxpQkFBaUIsT0FBTztBQUNuSCxjQUFjLGNBQWM7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRkFBc0YsSUFBSSxPQUFPLElBQUksU0FBUyxNQUFNLFdBQVcsUUFBUSxTQUFTLE9BQU87QUFDdkosVUFBVSxjQUFjO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQ2hFekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7O1VDbEQ3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzJCO0FBQ1A7QUFDTTs7QUFFL0M7QUFDQTs7QUFFQSx5RUFBNkI7QUFDN0I7QUFDQSxDQUFDOztBQUVELHlFQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDJFQUErQjtBQUNuQzs7QUFFQSxDQUFDOztBQUVEO0FBQ0Esa0JBQWtCLDBEQUFVO0FBQzVCO0FBQ0E7QUFDQSwyQkFBMkIsOERBQWM7QUFDekM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFFBQVEsdUVBQTJCO0FBQ25DLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1FQUF1QjtBQUNuQztBQUNBLEtBQUs7QUFDTDs7QUFFQSxrQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvLi9zcmMvZG9tQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2dldFdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC8uL3NyYy9wcm9jZXNzV2VhdGhlci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4td2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2FydGVyK09uZSZmYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDAmZmFtaWx5PVJvYm90bytNb25vOndnaHRAMjAwOzQwMDs3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgNTAsIDUwKTtcXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2FwcCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMCUgMzAlIDM1JSA1JTtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDglO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5kYXktc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWJsb2NrIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCBhdXRvIDMwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMjBweCA0MHB4IDMwcHggMzBweCAzMHB4IDMwcHggMzBweDtcXG59XFxuXFxuLm1haW4tYmxvY2sgPiAqIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1haW4tZGVzY3JpcHRpb24sIC5tYWluLWxvY2F0aW9uLCAubWFpbi1kYXRlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA2O1xcbn1cXG5cXG4ubWFpbi1kZXNjcmlwdGlvbiB7XFxuICAgIGxpbmUtaGVpZ2h0OiAwLjk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLm1haW4taWNvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDQgLyA3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IC02cHg7XFxufVxcblxcbi5tYWluLWljb24gPiBpbWcge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNylcXG59XFxuXFxuLm1haW4tdGVtcCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDQgLyA3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5tYWluLXVuaXRzIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tYWluLWZlZWxzLWxpa2UsIC5tYWluLWh1bWlkaXR5LCAubWFpbi13aW5kIHtcXG4gICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5tYWluLWZlZWxzLWxpa2Uge1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxufVxcblxcbi5tYWluLWh1bWlkaXR5IHtcXG4gICAgZ3JpZC1yb3c6IDUgLyA2O1xcbn1cXG5cXG4ubWFpbi13aW5kIHtcXG4gICAgZ3JpZC1yb3c6IDYgLyA3O1xcbn1cXG5cXG4ubWFpbi1pbnB1dHMge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBncmlkLXJvdzogNyAvIDg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuI2Zvcm0tY2l0eSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG4gICAgcGFkZGluZy10b3A6IDRweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxufVxcblxcbiNmb3JtLWNpdHkgaW5wdXQge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuI2Zvcm0tY2l0eSBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jZm9ybS1jaXR5IGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2Zvcm0tY2l0eSBidXR0b246aG92ZXIgaSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbn1cXG5cXG4jZm9ybS1jaXR5IGkge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4udW5pdHMtdG9nZ2xlIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4udW5pdHMtdG9nZ2xlIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcblxcbi51bml0cy10b2dnbGUgYnV0dG9uLnVuaXRzLXRvZ2dsZS1hY3RpdmUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbiNlcnJvci1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBncmlkLXJvdzogOCAvIDk7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBjb2xvcjogcmdiKDIwMiwgOTYsIDk2KTtcXG59XFxuXFxuLmZvcmVjYXN0LXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgcGFkZGluZzogOCU7XFxufVxcblxcbi5mb3JlY2FzdC1zY3JvbGxlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5mb3JlY2FzdC1zY3JvbGxlci1hY3RpdmUge1xcbiAgICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbi5mb3JlY2FzdC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uZm9yZWNhc3QtYmxvY2sge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1JSA0NSUgMzAlO1xcbiAgICBjb2x1bW4tZ2FwOiA2cHg7XFxufVxcblxcbi5mb3JlY2FzdC1ibG9jayA+ICoge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0LWRheSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5mb3JlY2FzdC1pY29uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyAqL1xcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICAvKiBtYXJnaW4tdG9wOiAtMTZweDsgKi9cXG59XFxuXFxuLmZvcmVjYXN0LWljb24gPiBpbWcge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNClcXG59XFxuXFxuLmZvcmVjYXN0LW1heC10ZW1wIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4uZm9yZWNhc3QtbWluLXRlbXAge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuXFxuZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lB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dUI7QUFDM0I7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCOzs7QUFHQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Q2FydGVyK09uZSZmYW1pbHk9UG9wcGluczp3Z2h0QDIwMDszMDA7NDAwOzUwMDs2MDAmZmFtaWx5PVJvYm90bytNb25vOndnaHRAMjAwOzQwMDs3MDAmZGlzcGxheT1zd2FwXFxcIik7XFxuXFxuKiwgKjo6YmVmb3JlLCAqOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig1MCwgNTAsIDUwKTtcXG4gICAgZm9udC1mYW1pbHk6IFBvcHBpbnM7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCB7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2FwcCB7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzMCUgMzAlIDM1JSA1JTtcXG59XFxuXFxuc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDglO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5kYXktc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluLWJsb2NrIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCBhdXRvIDMwcHggMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMjBweCA0MHB4IDMwcHggMzBweCAzMHB4IDMwcHggMzBweDtcXG59XFxuXFxuLm1haW4tYmxvY2sgPiAqIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm1haW4tZGVzY3JpcHRpb24sIC5tYWluLWxvY2F0aW9uLCAubWFpbi1kYXRlIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA2O1xcbn1cXG5cXG4ubWFpbi1kZXNjcmlwdGlvbiB7XFxuICAgIGxpbmUtaGVpZ2h0OiAwLjk7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuLm1haW4taWNvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDQgLyA3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLWxlZnQ6IC02cHg7XFxufVxcblxcbi5tYWluLWljb24gPiBpbWcge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNylcXG59XFxuXFxuLm1haW4tdGVtcCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDQgLyA3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5tYWluLXVuaXRzIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbi5tYWluLWZlZWxzLWxpa2UsIC5tYWluLWh1bWlkaXR5LCAubWFpbi13aW5kIHtcXG4gICAgZ3JpZC1jb2x1bW46IDQgLyA1O1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxufVxcblxcbi5tYWluLWZlZWxzLWxpa2Uge1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxufVxcblxcbi5tYWluLWh1bWlkaXR5IHtcXG4gICAgZ3JpZC1yb3c6IDUgLyA2O1xcbn1cXG5cXG4ubWFpbi13aW5kIHtcXG4gICAgZ3JpZC1yb3c6IDYgLyA3O1xcbn1cXG5cXG4ubWFpbi1pbnB1dHMge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBncmlkLXJvdzogNyAvIDg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG59XFxuXFxuI2Zvcm0tY2l0eSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG4gICAgcGFkZGluZy10b3A6IDRweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZXk7XFxufVxcblxcbiNmb3JtLWNpdHkgaW5wdXQge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXG59XFxuXFxuI2Zvcm0tY2l0eSBidXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4jZm9ybS1jaXR5IGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2Zvcm0tY2l0eSBidXR0b246aG92ZXIgaSB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xcbn1cXG5cXG4jZm9ybS1jaXR5IGkge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4udW5pdHMtdG9nZ2xlIGJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGNvbG9yOiBncmV5O1xcbn1cXG5cXG4udW5pdHMtdG9nZ2xlIHNwYW4ge1xcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcblxcbi51bml0cy10b2dnbGUgYnV0dG9uLnVuaXRzLXRvZ2dsZS1hY3RpdmUge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxufVxcblxcbiNlcnJvci1jb250YWluZXIge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIC0xO1xcbiAgICBncmlkLXJvdzogOCAvIDk7XFxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgICBjb2xvcjogcmdiKDIwMiwgOTYsIDk2KTtcXG59XFxuXFxuLmZvcmVjYXN0LXNlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG4gICAgcGFkZGluZzogOCU7XFxufVxcblxcbi5mb3JlY2FzdC1zY3JvbGxlciB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgd2hpdGU7ICovXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5mb3JlY2FzdC1zY3JvbGxlci1hY3RpdmUge1xcbiAgICBjdXJzb3I6IGdyYWI7XFxufVxcblxcbi5mb3JlY2FzdC1jb250YWluZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgd2hpdGU7XFxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uZm9yZWNhc3QtYmxvY2sge1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1MCUgNTAlO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDI1JSA0NSUgMzAlO1xcbiAgICBjb2x1bW4tZ2FwOiA2cHg7XFxufVxcblxcbi5mb3JlY2FzdC1ibG9jayA+ICoge1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvcmVjYXN0LWRheSB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gLTE7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5mb3JlY2FzdC1pY29uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAtMTtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyAqL1xcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7ICovXFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICAvKiBtYXJnaW4tdG9wOiAtMTZweDsgKi9cXG59XFxuXFxuLmZvcmVjYXN0LWljb24gPiBpbWcge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNClcXG59XFxuXFxuLmZvcmVjYXN0LW1heC10ZW1wIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xcbn1cXG5cXG4uZm9yZWNhc3QtbWluLXRlbXAge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAzIC8gNDtcXG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG59XFxuXFxuXFxuZm9vdGVyIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuZm9vdGVyIHAge1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5tb2R1bGUuZXhwb3J0cy5vbmNlID0gb25jZTtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIF9nZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIF9nZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSBfZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG9uY2UoZW1pdHRlciwgbmFtZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZ1bmN0aW9uIGVycm9yTGlzdGVuZXIoZXJyKSB7XG4gICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKG5hbWUsIHJlc29sdmVyKTtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVyKCkge1xuICAgICAgaWYgKHR5cGVvZiBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICByZXNvbHZlKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfTtcblxuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCByZXNvbHZlciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIGlmIChuYW1lICE9PSAnZXJyb3InKSB7XG4gICAgICBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBlcnJvckxpc3RlbmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgaGFuZGxlciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsICdlcnJvcicsIGhhbmRsZXIsIGZsYWdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgbGlzdGVuZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICBlbWl0dGVyLm9uY2UobmFtZSwgbGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWl0dGVyLm9uKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIEV2ZW50VGFyZ2V0IGRvZXMgbm90IGhhdmUgYGVycm9yYCBldmVudCBzZW1hbnRpY3MgbGlrZSBOb2RlXG4gICAgLy8gRXZlbnRFbWl0dGVycywgd2UgZG8gbm90IGxpc3RlbiBmb3IgYGVycm9yYCBldmVudHMgaGVyZS5cbiAgICBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZnVuY3Rpb24gd3JhcExpc3RlbmVyKGFyZykge1xuICAgICAgLy8gSUUgZG9lcyBub3QgaGF2ZSBidWlsdGluIGB7IG9uY2U6IHRydWUgfWAgc3VwcG9ydCBzbyB3ZVxuICAgICAgLy8gaGF2ZSB0byBkbyBpdCBtYW51YWxseS5cbiAgICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCB3cmFwTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgbGlzdGVuZXIoYXJnKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJlbWl0dGVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEV2ZW50RW1pdHRlci4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGVtaXR0ZXIpO1xuICB9XG59XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSBcImV2ZW50c1wiO1xuY29uc3QgZXZlbnRFbWl0dGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuY29uc3QgYXBwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhcHBcIik7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaGVhZGVyXCIpO1xuY29uc3QgZGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG5kYXlDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImRheS1zZWN0aW9uXCIpO1xuY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbmZvcmVjYXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1zZWN0aW9uXCIpXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xuY29uc3QgZm9vdGVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuZm9vdGVyTmFtZS50ZXh0Q29udGVudCA9IFwiQ2FybCBNYWRzZW4gMjAyMlwiO1xuZm9vdGVyLmFwcGVuZENoaWxkKGZvb3Rlck5hbWUpO1xuYXBwLmFwcGVuZChoZWFkZXIsIGRheUNvbnRhaW5lciwgZm9yZWNhc3RDb250YWluZXIsIGZvb3RlcilcblxuLy8gQ3JlYXRlcyB0aGUgbWFpbiB3ZWF0aGVyIGJsb2NrXG5mdW5jdGlvbiBjcmVhdGVNYWluV2VhdGhlcih3ZWF0aGVyKSB7XG4gICAgY29uc3QgbWFpbkJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluQmxvY2suY2xhc3NMaXN0LmFkZChcIm1haW4tYmxvY2tcIik7XG4gICAgbGV0IGN1cnJlbnQgPSB3ZWF0aGVyLndlYXRoZXJEYXRhLmN1cnJlbnQ7XG4gICAgLy8gQ3JlYXRlIHRoZSB3ZWF0aGVyIGVsZW1lbnRzIGZyb20gYXJndW1lbnRzIGFuZCBzdG9yZSB0aGVtIGluIGFuIG9iamVjdCBmb3IgaXRlcmF0aW5nIGFwcGVuZHMgICAgXG4gICAgY29uc3QgbWFpbkVsZW1lbnRzID0ge1xuICAgICAgICBzdGF0dXM6IGNyZWF0ZVdlYXRoZXJFbGVtZW50KFwibWFpblwiLCBcImRlc2NyaXB0aW9uXCIsIGAke2N1cnJlbnQud2VhdGhlci5kZXNjcmlwdGlvbn0uYCksXG4gICAgICAgIGxvY2F0aW9uOiBjcmVhdGVXZWF0aGVyRWxlbWVudChcIm1haW5cIiwgXCJsb2NhdGlvblwiLCBgJHt3ZWF0aGVyLmdlb0RhdGEubmFtZX0sICR7d2VhdGhlci5nZW9EYXRhLmNvdW50cnl9YCksXG4gICAgICAgIGRhdGU6IGNyZWF0ZVdlYXRoZXJFbGVtZW50KFwibWFpblwiLCBcImRhdGVcIiwgYCR7bmV3IERhdGUoKS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi11c1wiLCB7IHdlZWtkYXk6ICdsb25nJywgbW9udGg6ICdzaG9ydCcsIGRheTogJ251bWVyaWMnIH0pfSAvICR7bmV3IERhdGUoKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi11c1wiLCB7IHRpbWVTdHlsZTogXCJzaG9ydFwiIH0pfWApLFxuICAgICAgICBpY29uOiBjcmVhdGVXZWF0aGVyRWxlbWVudChcIm1haW5cIiwgXCJpY29uXCIsIGBodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke2N1cnJlbnQud2VhdGhlci5pY29ufUA0eC5wbmdgKSxcbiAgICAgICAgdGVtcDogY3JlYXRlV2VhdGhlckVsZW1lbnQoXCJtYWluXCIsIFwidGVtcFwiLCBNYXRoLnJvdW5kKGN1cnJlbnQuY3VycmVudFRlbXApKSxcbiAgICAgICAgdW5pdHM6IGNyZWF0ZVdlYXRoZXJFbGVtZW50KFwibWFpblwiLCBcInVuaXRzXCIsIGAke2N1cnJlbnQudW5pdHMgPT09IFwiQ0hBTkdFIFRISVMgSEVSRVwiID8gXCJDXCIgOiBcIkNcIn1gKSxcbiAgICAgICAgZmVlbHNMaWtlOiBjcmVhdGVXZWF0aGVyRWxlbWVudChcIm1haW5cIiwgXCJmZWVscy1saWtlXCIsIGBGRUVMUyBMSUtFOiAke01hdGgucm91bmQoY3VycmVudC5mZWVsc0xpa2UpfSR7Y3VycmVudC51bml0cyA9PT0gXCJDSEFOR0UgVEhJUyBIRVJFXCIgPyBcIkNcIiA6IFwiQ1wifWApLFxuICAgICAgICBodW1pZGl0eTogY3JlYXRlV2VhdGhlckVsZW1lbnQoXCJtYWluXCIsIFwiaHVtaWRpdHlcIiwgYEhVTUlESVRZOiAke2N1cnJlbnQuaHVtaWRpdHl9JWApLFxuICAgICAgICB3aW5kOiBjcmVhdGVXZWF0aGVyRWxlbWVudChcIm1haW5cIiwgXCJ3aW5kXCIsIGBXSU5EOiAke01hdGgucm91bmQoY3VycmVudC53aW5kLnNwZWVkKX1tL3NgKVxuICAgICAgICAvLyBvcHRpb25hbDogY2hhbmNlIG9mIHJhaW5cbiAgICB9XG4gICAgZm9yIChsZXQgZWxlbWVudCBpbiBtYWluRWxlbWVudHMpIHtcbiAgICAgICAgbWFpbkJsb2NrLmFwcGVuZENoaWxkKG1haW5FbGVtZW50c1tlbGVtZW50XSk7XG4gICAgfVxuICAgIGNvbnN0IGlucHV0c0Jsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbnB1dHNCbG9jay5jbGFzc0xpc3QuYWRkKFwibWFpbi1pbnB1dHNcIik7XG4gICAgaW5wdXRzQmxvY2suYXBwZW5kQ2hpbGQoY3JlYXRlQ2l0eUlucHV0KCkpO1xuICAgIGlucHV0c0Jsb2NrLmFwcGVuZENoaWxkKGNyZWF0ZVVuaXRzVG9nZ2xlKCkpO1xuICAgIGNvbnN0IGVycm9yQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlcnJvckNvbnRhaW5lci5pZCA9IFwiZXJyb3ItY29udGFpbmVyXCI7XG4gICAgbWFpbkJsb2NrLmFwcGVuZENoaWxkKGlucHV0c0Jsb2NrKTtcbiAgICBtYWluQmxvY2suYXBwZW5kQ2hpbGQoZXJyb3JDb250YWluZXIpO1xuICAgIHJldHVybiBbbWFpbkJsb2NrLCBtYWluRWxlbWVudHNdO1xufVxuXG4vLyBUaGlzIHNsaWRlciBjb2RlIG1hZGUgcG9zc2libGUgdGhhbmtzIHRvIEtlbGx5RXg6IGh0dHBzOi8vY29kZXBlbi5pby9rZWxseWV4L3Blbi9LS3d3ZFlnXG5mdW5jdGlvbiBjcmVhdGVGb3JlY2FzdFNjcm9sbGVyKCkge1xuICAgIGNvbnN0IHNsaWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2xpZGVyLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1zY3JvbGxlclwiKTtcbiAgICBsZXQgaXNEb3duID0gZmFsc2U7XG4gICAgbGV0IHN0YXJ0WDtcbiAgICBsZXQgc2Nyb2xsTGVmdDtcbiAgICBjb25zdCBzdGFydCA9IChldmVudCkgPT4ge1xuICAgICAgICBpc0Rvd24gPSB0cnVlO1xuICAgICAgICBzbGlkZXIuY2xhc3NMaXN0LmFkZChcImZvcmVjYXN0LXNjcm9sbGVyLWFjdGl2ZVwiKTtcbiAgICAgICAgc3RhcnRYID0gZXZlbnQucGFnZVggfHwgZXZlbnQudG91Y2hlc1swXS5wYWdlWCAtIHNsaWRlci5vZmZzZXRMZWZ0O1xuICAgICAgICBzY3JvbGxMZWZ0ID0gc2xpZGVyLnNjcm9sbExlZnQ7XG4gICAgfVxuICAgIGNvbnN0IGVuZCA9ICgpID0+IHtcbiAgICAgICAgaXNEb3duID0gZmFsc2U7XG4gICAgICAgIHNsaWRlci5jbGFzc0xpc3QucmVtb3ZlKFwiZm9yZWNhc3Qtc2Nyb2xsZXItYWN0aXZlXCIpO1xuICAgIH1cbiAgICBjb25zdCBtb3ZlID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmICghaXNEb3duKSByZXR1cm47XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHggPSBldmVudC5wYWdlWCB8fCBldmVudC50b3VjaGVzWzBdLnBhZ2VYIC0gc2xpZGVyLm9mZnNldExlZnQ7XG4gICAgICAgIGNvbnN0IGRpc3QgPSAoeCAtIHN0YXJ0WCk7XG4gICAgICAgIHNsaWRlci5zY3JvbGxMZWZ0ID0gc2Nyb2xsTGVmdCAtIGRpc3Q7XG4gICAgfVxuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHN0YXJ0KTtcbiAgICBzbGlkZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgc3RhcnQpO1xuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIG1vdmUpO1xuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIG1vdmUpO1xuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCBlbmQpO1xuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCBlbmQpO1xuICAgIHNsaWRlci5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgZW5kKTtcbiAgICByZXR1cm4gc2xpZGVyO1xufVxuXG4vLyBDcmVhdGVzIHRoZSBmb3JlY2FzdGVkIHdlYXRoZXIgYmxvY2sgKHNsaWRlcilcbmZ1bmN0aW9uIGNyZWF0ZUZvcmVjYXN0V2VhdGhlcihmb3JlY2FzdCkge1xuICAgIGNvbnN0IGZvcmVjYXN0U2Nyb2xsZXIgPSBjcmVhdGVGb3JlY2FzdFNjcm9sbGVyKCk7XG4gICAgY29uc3QgZm9yZWNhc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGZvcmVjYXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1jb250YWluZXJcIik7XG4gICAgbGV0IGZvcmVjYXN0QXJyYXkgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgZGF5IG9mIGZvcmVjYXN0KSB7XG4gICAgICAgIGNvbnN0IGZvcmVjYXN0QmxvY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmb3JlY2FzdEJsb2NrLmNsYXNzTGlzdC5hZGQoXCJmb3JlY2FzdC1ibG9ja1wiKTtcbiAgICAgICAgY29uc3QgZm9yZWNhc3RFbGVtZW50cyA9IHtcbiAgICAgICAgICAgIGRheTogY3JlYXRlV2VhdGhlckVsZW1lbnQoXCJmb3JlY2FzdFwiLCBcImRheVwiLCBkYXkuZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi11c1wiLCB7IHdlZWtkYXk6ICdzaG9ydCcgfSkpLFxuICAgICAgICAgICAgaWNvbjogY3JlYXRlV2VhdGhlckVsZW1lbnQoXCJmb3JlY2FzdFwiLCBcImljb25cIiwgYGh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7ZGF5LndlYXRoZXIuaWNvbn1ANHgucG5nYCksXG4gICAgICAgICAgICBtYXhUZW1wOiBjcmVhdGVXZWF0aGVyRWxlbWVudChcImZvcmVjYXN0XCIsIFwibWF4LXRlbXBcIiwgYCR7TWF0aC5yb3VuZChkYXkubWF4VGVtcCl9wrBgKSxcbiAgICAgICAgICAgIG1pblRlbXA6IGNyZWF0ZVdlYXRoZXJFbGVtZW50KFwiZm9yZWNhc3RcIiwgXCJtaW4tdGVtcFwiLCBgJHtNYXRoLnJvdW5kKGRheS5taW5UZW1wKX3CsGApLFxuICAgICAgICAgICAgLy8gdW5pdHM6IGNyZWF0ZVdlYXRoZXJFbGVtZW50KFwiZm9yZWNhc3RcIiwgXCJ1bml0c1wiLCBgJHtkYXkudW5pdHMgPT09IFwiQ0hBTkdFIFRISVMgSEVSRVwiID8gXCJDXCIgOiBcIkNcIn1gKSxcbiAgICAgICAgICAgIC8vIG9wdGlvbmFsOiBjaGFuY2Ugb2YgcmFpblxuICAgICAgICB9XG4gICAgICAgIGZvcmVjYXN0QXJyYXkucHVzaChmb3JlY2FzdEVsZW1lbnRzKTtcbiAgICAgICAgZm9yIChsZXQgZWxlbWVudCBpbiBmb3JlY2FzdEVsZW1lbnRzKSB7XG4gICAgICAgICAgICBmb3JlY2FzdEJsb2NrLmFwcGVuZENoaWxkKGZvcmVjYXN0RWxlbWVudHNbZWxlbWVudF0pO1xuICAgICAgICB9XG4gICAgICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcmVjYXN0QmxvY2spO1xuICAgIH1cbiAgICBmb3JlY2FzdFNjcm9sbGVyLmFwcGVuZENoaWxkKGZvcmVjYXN0Q29udGFpbmVyKTtcbiAgICByZXR1cm4gW2ZvcmVjYXN0U2Nyb2xsZXIsIGZvcmVjYXN0QXJyYXldO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVDaXR5SW5wdXQoKSB7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uaWQgPSBcImZvcm0tY2l0eVwiO1xuICAgIGNvbnN0IGNpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBjaXR5SW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIGNpdHlJbnB1dC5wbGFjZWhvbGRlciA9IFwiZWcuIExvbmRvbiwgR0JcIjtcbiAgICBjb25zdCBjaXR5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjaXR5QnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGNvbnN0IGNpdHlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlcIik7XG4gICAgY2l0eUljb24uY2xhc3NMaXN0LmFkZChcImZhLXNvbGlkXCIsIFwiZmEtbWFnbmlmeWluZy1nbGFzc1wiKTtcbiAgICBjaXR5QnV0dG9uLmFwcGVuZENoaWxkKGNpdHlJY29uKTtcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBsZXQgY2l0eSA9IHBhcnNlQ2l0eUlucHV0KGNpdHlJbnB1dC52YWx1ZSk7XG4gICAgICAgIGV2ZW50RW1pdHRlci5lbWl0KFwid2VhdGhlci1jaXR5XCIsIGNpdHkpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjaXR5SW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2l0eUJ1dHRvbik7XG4gICAgcmV0dXJuIGZvcm07XG59XG5cbi8vIFJlbW92ZXMgd2hpdGVzcGFjZSBmcm9tIHRoZSBjaXR5IGlucHV0IGZvciBlbnRyeSBpbnRvIEFQSVxuZnVuY3Rpb24gcGFyc2VDaXR5SW5wdXQoY2l0eSkge1xuICAgIHJldHVybiBjaXR5LnJlcGxhY2UoL1xccy9nLCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVbml0c1RvZ2dsZSgpIHtcbiAgICBjb25zdCB1bml0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdW5pdHMuY2xhc3NMaXN0LmFkZChcInVuaXRzLXRvZ2dsZVwiKTtcbiAgICBjb25zdCBtZXRyaWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIG1ldHJpYy5pZCA9IFwidG9nZ2xlLW1ldHJpY1wiO1xuICAgIG1ldHJpYy50ZXh0Q29udGVudCA9IFwiQ1wiO1xuICAgIGNvbnN0IGRpdmlkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBkaXZpZGVyLnRleHRDb250ZW50ID0gXCIvXCI7XG4gICAgY29uc3QgaW1wZXJpYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGltcGVyaWFsLmlkID0gXCJ0b2dnbGUtaW1wZXJpYWxcIjtcbiAgICBpbXBlcmlhbC50ZXh0Q29udGVudCA9IFwiRlwiO1xuICAgIG1ldHJpYy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBldmVudEVtaXR0ZXIuZW1pdChcInNldC11bml0c1wiLCBcIm1ldHJpY1wiKTtcbiAgICB9KTtcbiAgICBpbXBlcmlhbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBldmVudEVtaXR0ZXIuZW1pdChcInNldC11bml0c1wiLCBcImltcGVyaWFsXCIpO1xuICAgIH0pXG4gICAgdW5pdHMuYXBwZW5kKG1ldHJpYywgZGl2aWRlciwgaW1wZXJpYWwpO1xuICAgIHJldHVybiB1bml0cztcbn1cblxuLy8gQ3JlYXRlcyBhIHdlYXRoZXIgZWxlbWVudCBiYXNlZCBvbiB3aGVyZSBpdCBpcyB1c2VkIChtYWluIG9yIGZvcmVjYXN0KSwgaXRzIHR5cGUgYW5kIGNvbnRlbnRcbi8vIFNldHMgY2xhc3MgdG8gYmUgYSBzdGFuZGFkaXNlZCBmb3JtYXQgZm9yIGVhc2llciBDU1Npbmcgb2YgdGhlIGdyaWRcbmZ1bmN0aW9uIGNyZWF0ZVdlYXRoZXJFbGVtZW50KHVzZSwgdHlwZSwgY29udGVudCkge1xuICAgIGlmICh0eXBlID09PSBcImljb25cIikge1xuICAgICAgICBjb25zdCBibG9jayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJsb2NrLmNsYXNzTGlzdC5hZGQoYCR7dXNlfS0ke3R5cGV9YCk7XG4gICAgICAgIGNvbnN0IGltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgaW1hZ2Uuc3JjID0gY29udGVudDtcbiAgICAgICAgYmxvY2suYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICByZXR1cm4gYmxvY2s7XG4gICAgfVxuICAgIGNvbnN0IGJsb2NrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYmxvY2suY2xhc3NMaXN0LmFkZChgJHt1c2V9LSR7dHlwZX1gKTtcbiAgICBibG9jay50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgcmV0dXJuIGJsb2NrO1xufVxuXG5mdW5jdGlvbiByZW1vdmVFcnJvcnMoKSB7XG4gICAgY29uc3QgZXJyb3JDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vycm9yLWNvbnRhaW5lclwiKTtcbiAgICBlcnJvckNvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNpdHlFcnJvcigpIHtcbiAgICBjb25zdCBlcnJvckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZXJyb3ItY29udGFpbmVyXCIpO1xuICAgIGVycm9yQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJDaXR5IGNvdWxkIG5vdCBiZSBmb3VuZC5cIjtcbn1cblxuZnVuY3Rpb24gY2hhbmdlVW5pdHMod2VhdGhlciwgZWxlbWVudHMsIHVuaXRzKXtcbiAgICBsZXQgY3VycmVudEVsZW1lbnRzID0gZWxlbWVudHNbMF07XG4gICAgbGV0IGN1cnJlbnRXZWF0aGVyID0gd2VhdGhlclswXTtcbiAgICBsZXQgZm9yZWNhc3RFbGVtZW50cyA9IGVsZW1lbnRzWzFdO1xuICAgIGxldCBmb3JlY2FzdFdlYXRoZXIgPSB3ZWF0aGVyWzFdO1xuICAgIGZ1bmN0aW9uIHVwZGF0ZU51bWJlcihudW1iZXIsIHdpbmQpe1xuICAgICAgICBpZiAodW5pdHMgPT09IFwiaW1wZXJpYWxcIil7XG4gICAgICAgICAgICBpZiAod2luZCA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQobnVtYmVyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoKG51bWJlciAqIDkgLyA1KSArIDMyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSByZXR1cm4gTWF0aC5yb3VuZChudW1iZXIpO1xuICAgIH1cbiAgICBjdXJyZW50RWxlbWVudHMudGVtcC50ZXh0Q29udGVudCA9IHVwZGF0ZU51bWJlcihjdXJyZW50V2VhdGhlci5jdXJyZW50VGVtcCk7XG4gICAgY3VycmVudEVsZW1lbnRzLmZlZWxzTGlrZS50ZXh0Q29udGVudCA9IGBGRUVMUyBMSUtFOiAke3VwZGF0ZU51bWJlcihjdXJyZW50V2VhdGhlci5mZWVsc0xpa2UpfSR7dW5pdHMgPT09IFwibWV0cmljXCIgPyBcIkNcIiA6IFwiRlwifWA7XG4gICAgY3VycmVudEVsZW1lbnRzLndpbmQudGV4dENvbnRlbnQgPSBgV0lORDogJHt1cGRhdGVOdW1iZXIoY3VycmVudFdlYXRoZXIud2luZC5zcGVlZCl9JHt1bml0cyA9PT0gXCJtZXRyaWNcIiA/IFwibS9zXCIgOiBcIm1waFwifWA7XG4gICAgY3VycmVudEVsZW1lbnRzLnVuaXRzLnRleHRDb250ZW50ID0gYCR7dW5pdHMgPT09IFwibWV0cmljXCIgPyBcIkNcIiA6IFwiRlwifWA7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JlY2FzdEVsZW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZm9yZWNhc3RFbGVtZW50c1tpXS5tYXhUZW1wLnRleHRDb250ZW50ID0gYCR7dXBkYXRlTnVtYmVyKGZvcmVjYXN0V2VhdGhlcltpXS5tYXhUZW1wKX3CsGA7XG4gICAgICAgIGZvcmVjYXN0RWxlbWVudHNbaV0ubWluVGVtcC50ZXh0Q29udGVudCA9IGAke3VwZGF0ZU51bWJlcihmb3JlY2FzdFdlYXRoZXJbaV0ubWluVGVtcCl9wrBgO1xuICAgIH1cbiAgICBjb25zdCBtZXRyaWNFTGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2dnbGUtbWV0cmljXCIpO1xuICAgIGNvbnN0IGltcGVyaWFsRUxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9nZ2xlLWltcGVyaWFsXCIpO1xuICAgIGlmICh1bml0cyA9PT0gXCJtZXRyaWNcIil7XG4gICAgICAgIG1ldHJpY0VMZW1lbnQuY2xhc3NMaXN0LmFkZChcInVuaXRzLXRvZ2dsZS1hY3RpdmVcIik7XG4gICAgICAgIGltcGVyaWFsRUxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwidW5pdHMtdG9nZ2xlLWFjdGl2ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtZXRyaWNFTGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJ1bml0cy10b2dnbGUtYWN0aXZlXCIpO1xuICAgICAgICBpbXBlcmlhbEVMZW1lbnQuY2xhc3NMaXN0LmFkZChcInVuaXRzLXRvZ2dsZS1hY3RpdmVcIik7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGVXZWF0aGVyKHdlYXRoZXIsIHVuaXRzKSB7XG4gICAgd2hpbGUgKGRheUNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgICAgIGRheUNvbnRhaW5lci5yZW1vdmVDaGlsZChkYXlDb250YWluZXIuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgd2hpbGUgKGZvcmVjYXN0Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgZm9yZWNhc3RDb250YWluZXIucmVtb3ZlQ2hpbGQoZm9yZWNhc3RDb250YWluZXIuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgbGV0IHdlYXRoZXJJdGVtcyA9IGNyZWF0ZU1haW5XZWF0aGVyKHdlYXRoZXIpO1xuICAgIGxldCBmb3JlY2FzdEl0ZW1zID0gY3JlYXRlRm9yZWNhc3RXZWF0aGVyKHdlYXRoZXIud2VhdGhlckRhdGEuZGFpbHkpO1xuICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWF0aGVySXRlbXNbMF0pO1xuICAgIGZvcmVjYXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGZvcmVjYXN0SXRlbXNbMF0pO1xuICAgIHJlbW92ZUVycm9ycygpO1xuICAgIGV2ZW50RW1pdHRlci5vbihcImNoYW5nZS11bml0c1wiLCBuZXdVbml0cyA9PiB7XG4gICAgICAgIGNoYW5nZVVuaXRzKFt3ZWF0aGVyLndlYXRoZXJEYXRhLmN1cnJlbnQsIHdlYXRoZXIud2VhdGhlckRhdGEuZGFpbHldLCBbd2VhdGhlckl0ZW1zWzFdLCBmb3JlY2FzdEl0ZW1zWzFdXSwgbmV3VW5pdHMpXG4gICAgfSlcbiAgICBjaGFuZ2VVbml0cyhbd2VhdGhlci53ZWF0aGVyRGF0YS5jdXJyZW50LCB3ZWF0aGVyLndlYXRoZXJEYXRhLmRhaWx5XSwgW3dlYXRoZXJJdGVtc1sxXSwgZm9yZWNhc3RJdGVtc1sxXV0sIHVuaXRzKVxuICAgIFxufVxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY3JlYXRlV2VhdGhlcixcbiAgICBldmVudEVtaXR0ZXIsXG4gICAgY2l0eUVycm9yXG59IiwiY29uc3QgYXBpS2V5ID0gJ2Q2NTE1MmVhMjhlZDdiYjZhYTZmMzQ2NzZmMDhiYzI3JztcblxuLy8gQ2hlY2tzIHRoZSByZXNwb25zZSBvZiB0aGUgQVBJLCBhbmQgdGhyb3dzIGFuIGVycm9yIGlmIHRoZSByZXNwb25zZSBpcyBub3QgY29uc2lkZXJlZCBnb29kXG5mdW5jdGlvbiBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKSB7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICB0aHJvdyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfVxufVxuXG4vLyBUYWtlcyBhIHZhbGlkIGNpdHkgaW5wdXQgYW5kIGZldGNoZXMgZ2VvZ3JhcGhpY2FsIGRhdGEgZnJvbSBBUEksIHRvIHBhc3MgaW50byBuZXh0IEFQSVxuLy8gUmV0dXJucyB0aGUgZmlyc3QgcmVzdWx0IGluIHRoZSBjYXNlIG9mIG11bHRpcGxlIHZhbGlkIGNpdGllc1xuLy8gSWYgdGhlcmUgYXJlIG5vIHZhbGlkIGNpdGllcywgdGhyb3dzIGFuIGVycm9yXG5hc3luYyBmdW5jdGlvbiBnZXRHZW9jb2RlRGF0YShjaXR5KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0mbGltaXQ9NSZhcHBpZD0ke2FwaUtleX1gLFxuICAgICAgICAgICAgeyBtb2RlOiBcImNvcnNcIiB9KVxuICAgICAgICBjaGVja1Jlc3BvbnNlKHJlc3BvbnNlKTtcbiAgICAgICAgbGV0IGdlb0RhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGlmICghZ2VvRGF0YVswXSkge1xuICAgICAgICAgICAgdGhyb3cgRXJyb3IoXCJOT19DSVRZXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGdlb0RhdGFbMF07XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfVxufVxuXG4vLyBGZXRjaGVzIHRoZSBjdXJyZW50IHdlYXRoZXIgYW5kIHdlYXRoZXIgZm9yZWNhc3QgZm9yIDcgZGF5cyAoZGFpbHkpIGFuZCA0OCBob3VycyAoaG91cmx5KSBmcm9tIEFQSVxuLy8gQ3VycmVudCB3ZWF0aGVyIGlzIGEgc2luZ2xlIG9iamVjdCwgZm9yZWNhc3RzIGFyZSBhcnJheSBvZiB3ZWF0aGVyIG9iamVjdHNcbi8vIFRha2VzIGdlb2dyYXBoaWNhbCBvYmplY3QgcmV0dXJuZWQgZnJvbSBnZXRHZW9jb2RlRGF0YSgpXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyRGF0YShsb2NhdGlvbiwgdW5pdHMpIHtcbiAgICBsZXQgbG9uID0gbG9jYXRpb24ubG9uO1xuICAgIGxldCBsYXQgPSBsb2NhdGlvbi5sYXQ7XG4gICAgbGV0IGV4Y2x1ZGUgPSBgbWludXRlbHksYWxlcnRzYDtcbiAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JnVuaXRzPSR7dW5pdHN9JmV4Y2x1ZGU9JHtleGNsdWRlfSZhcHBpZD0ke2FwaUtleX1gLFxuICAgICAgICB7IG1vZGU6IFwiY29yc1wiIH0pO1xuICAgIGNoZWNrUmVzcG9uc2UocmVzcG9uc2UpO1xuICAgIGxldCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICByZXR1cm4gd2VhdGhlckRhdGE7XG59XG5cbi8vIE1haW4gZnVuY3Rpb24gd2Ugd2lsbCBiZSBjYWxsaW5nIC0gZ2V0cyBnZW8gZGF0YSwgdGhlbiBnZXRzIGN1cnJlbnQgd2VhdGhlciBhbmQgZm9yZWNhc3Rcbi8vIFJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYm90aCBkYXRhIGJsb2NrcyBhcyBvYmplY3RzXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGxvY2F0aW9uLCB1bml0cykge1xuICAgIGxldCBnZW9EYXRhID0gZ2V0R2VvY29kZURhdGEobG9jYXRpb24pO1xuICAgIGxldCB3ZWF0aGVyRGF0YSA9IGdlb0RhdGEudGhlbihsb2MgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0V2VhdGhlckRhdGEobG9jLCB1bml0cyk7XG4gICAgfSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKFtnZW9EYXRhLCB3ZWF0aGVyRGF0YV0pXG4gICAgLnRoZW4oKFtnZW9EYXRhLCB3ZWF0aGVyRGF0YV0pID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGdlb0RhdGEsXG4gICAgICAgICAgICB3ZWF0aGVyRGF0YVxuICAgICAgICB9XG4gICAgfSlcbiAgICAvLyAuY2F0Y2goZXJyID0+IHtcbiAgICAvLyAgICAgdGhyb3cgRXJyb3IoZXJyKTtcbiAgICAvLyB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZ2V0V2VhdGhlcjsiLCIvLyBUYWtlcyBhIHdlYXRoZXIgb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIHdlYXRoZXIgcHJvcGVydGllcyBvZiB0aGF0IG1vbWVudFxuLy8gYW5kIGNvbnZlcnRzIGl0IHRvIGEgbXVjaCBtb3JlIHJlYWRhYmxlIGFuZCByZWR1Y2VkIGZvcm1hdFxuZnVuY3Rpb24gcGFyc2VEYXRhKGRhdGEpIHtcbiAgICBsZXQgdGVtcE9iamVjdCA9IHtcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0YS5kdCAqIDEwMDApLFxuICAgICAgICBjdXJyZW50VGVtcDogZGF0YS50ZW1wLFxuICAgICAgICBmZWVsc0xpa2U6IGRhdGEuZmVlbHNfbGlrZSxcbiAgICAgICAgaHVtaWRpdHk6IGRhdGEuaHVtaWRpdHksXG4gICAgICAgIHdpbmQ6IHtcbiAgICAgICAgICAgIHNwZWVkOiBkYXRhLndpbmRfc3BlZWQsXG4gICAgICAgICAgICBkZWc6IGRhdGEud2luZF9kZWdcbiAgICAgICAgfSxcbiAgICAgICAgd2VhdGhlcjoge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IGRhdGEud2VhdGhlclswXS5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIHR5cGU6IGRhdGEud2VhdGhlclswXS5tYWluLFxuICAgICAgICAgICAgaWNvbjogZGF0YS53ZWF0aGVyWzBdLmljb25cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBJZiBwYXJzaW5nIGEgZm9yZWNhc3Qgd2VhdGhlciBvYmplY3QsIHVzZSBkaWZmZXJlbnQgZ2V0cyBmb3IgdGhlIHByb3BlcnRpZXNcbiAgICBpZiAodHlwZW9mIGRhdGEudGVtcCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICBkZWxldGUgdGVtcE9iamVjdC5jdXJyZW50VGVtcDtcbiAgICAgICAgdGVtcE9iamVjdC5tYXhUZW1wID0gZGF0YS50ZW1wLm1heDtcbiAgICAgICAgdGVtcE9iamVjdC5taW5UZW1wID0gZGF0YS50ZW1wLm1pbjtcbiAgICAgICAgdGVtcE9iamVjdC5mZWVsc0xpa2UgPSBkYXRhLmZlZWxzX2xpa2UuZGF5O1xuICAgIH1cbiAgICByZXR1cm4gdGVtcE9iamVjdDtcbn1cblxuLy8gVGFrZXMgYW4gYXJyYXkgb2Ygd2VhdGhlciBvYmplY3RzIHRoYXQgcmVwcmVzZW50cyB0aGUgZm9yZWNhc3RlZCB3ZWF0aGVyXG5mdW5jdGlvbiBjb252ZXJ0Rm9yZWNhc3QoZGF0YSkge1xuICAgIHJldHVybiBkYXRhLm1hcChkYXkgPT4gcGFyc2VEYXRhKGRheSkpO1xufVxuXG4vLyBUYWtlcyB0aGUgcmF3IHdlYXRoZXIgaW5wdXQgb2JqZWN0IGFuZCByZXR1cm5zIHRoZSBwYXJzZWQgZGF0YSBmb3IgZWFjaCBwcm9wZXJ0eVxuZnVuY3Rpb24gcHJvY2Vzc1dlYXRoZXIod2VhdGhlck9iamVjdCkge1xuICAgIGxldCB3ZWF0aGVyID0ge1xuICAgICAgICBjdXJyZW50OiBwYXJzZURhdGEod2VhdGhlck9iamVjdC5jdXJyZW50KSxcbiAgICAgICAgZGFpbHk6IGNvbnZlcnRGb3JlY2FzdCh3ZWF0aGVyT2JqZWN0LmRhaWx5KVxuICAgIH1cbiAgICAvL1xuICAgIC8vIENIRUNLIFRPIFNFRSBJRiBUSElTIFJFUVVJUkVTIEFOIElGL0VMU0UgU1RBVEVNRU5UIEFST1VORCBNSUROSUdIVFxuICAgIC8vIEUuRy4sIElGIFRIRSBGSVJTVCBGT1JFQ0FTVCBPQkpFQ1QgSU4gVEhFIEFSUkFZIElTIC1OT1QtIFRIRSBDVVJSRU5UIERBWVxuICAgIC8vXG4gICAgLy8gQWRkIGZvcmVjYXN0IG1heFRlbXAgZGF0YSB0byB0aGUgY3VycmVudFdlYXRoZXIgb2JqZWN0XG4gICAgd2VhdGhlci5jdXJyZW50Lm1heFRlbXAgPSB3ZWF0aGVyLmRhaWx5WzBdLm1heFRlbXA7XG4gICAgLy8gVGhlbiBjaG9wIG91dCB0aGUgZmlyc3QgZGF5IHNvIGl0IGRvZXNuJ3QgYXBwZWFyIGluIHRoZSBmb3JlY2FzdFxuICAgIHdlYXRoZXIuZGFpbHkuc3BsaWNlKDAsIDEpO1xuICAgIHJldHVybiB3ZWF0aGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcm9jZXNzV2VhdGhlcjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBwcm9jZXNzV2VhdGhlciBmcm9tIFwiLi9wcm9jZXNzV2VhdGhlci5qc1wiXG5pbXBvcnQgZ2V0V2VhdGhlciBmcm9tICcuL2dldFdlYXRoZXIuanMnO1xuaW1wb3J0IGRvbUNvbnRyb2xsZXIgZnJvbSBcIi4vZG9tQ29udHJvbGxlci5qc1wiO1xuXG5sZXQgdW5pdHMgPSBcIm1ldHJpY1wiO1xubGV0IGxvY2F0aW9uID0gXCJNZWxib3VybmUsQXVzdHJhbGlhXCI7XG5cbmRvbUNvbnRyb2xsZXIuZXZlbnRFbWl0dGVyLm9uKFwid2VhdGhlci1jaXR5XCIsIChjaXR5KSA9PiB7XG4gICAgd2VhdGhlcihjaXR5KTtcbn0pXG5cbmRvbUNvbnRyb2xsZXIuZXZlbnRFbWl0dGVyLm9uKFwic2V0LXVuaXRzXCIsICh1KSA9PiB7XG4gICAgaWYgKHUgPT09IHVuaXRzKXtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkb21Db250cm9sbGVyLmV2ZW50RW1pdHRlci5lbWl0KFwiY2hhbmdlLXVuaXRzXCIsIHUpXG4gICAgdW5pdHMgPSB1O1xuXG59KVxuXG5mdW5jdGlvbiB3ZWF0aGVyKGNpdHkpe1xuICAgIGxldCB3ZWF0aGVyID0gZ2V0V2VhdGhlcihjaXR5LCBcIm1ldHJpY1wiKTtcbiAgICB3ZWF0aGVyXG4gICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgIGRhdGEud2VhdGhlckRhdGEgPSBwcm9jZXNzV2VhdGhlcihkYXRhLndlYXRoZXJEYXRhKTtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgfSlcbiAgICAudGhlbigod2VhdGhlcikgPT4ge1xuICAgICAgICBsb2NhdGlvbiA9IGNpdHk7XG4gICAgICAgIGRvbUNvbnRyb2xsZXIuY3JlYXRlV2VhdGhlcih3ZWF0aGVyLCB1bml0cylcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICAgICAgaWYgKGVyci5tZXNzYWdlID09PSBcIk5PX0NJVFlcIil7XG4gICAgICAgICAgICBkb21Db250cm9sbGVyLmNpdHlFcnJvcigpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxud2VhdGhlcihsb2NhdGlvbik7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9