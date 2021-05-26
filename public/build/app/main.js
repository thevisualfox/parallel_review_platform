/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/build/app/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./assets/app/js/main.js","vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/app/img/icons/add_image.svg":
/*!********************************************!*\
  !*** ./assets/app/img/icons/add_image.svg ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/add_image.svg";

/***/ }),

/***/ "./assets/app/img/icons/add_project.svg":
/*!**********************************************!*\
  !*** ./assets/app/img/icons/add_project.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/add_project.svg";

/***/ }),

/***/ "./assets/app/img/icons/add_user.svg":
/*!*******************************************!*\
  !*** ./assets/app/img/icons/add_user.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/add_user.svg";

/***/ }),

/***/ "./assets/app/img/icons/archive.svg":
/*!******************************************!*\
  !*** ./assets/app/img/icons/archive.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/archive.svg";

/***/ }),

/***/ "./assets/app/img/icons/check.svg":
/*!****************************************!*\
  !*** ./assets/app/img/icons/check.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/check.svg";

/***/ }),

/***/ "./assets/app/img/icons/close.svg":
/*!****************************************!*\
  !*** ./assets/app/img/icons/close.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/close.svg";

/***/ }),

/***/ "./assets/app/img/icons/delete.svg":
/*!*****************************************!*\
  !*** ./assets/app/img/icons/delete.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/delete.svg";

/***/ }),

/***/ "./assets/app/img/icons/edit.svg":
/*!***************************************!*\
  !*** ./assets/app/img/icons/edit.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/edit.svg";

/***/ }),

/***/ "./assets/app/img/icons/leave.svg":
/*!****************************************!*\
  !*** ./assets/app/img/icons/leave.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/leave.svg";

/***/ }),

/***/ "./assets/app/img/icons/star.svg":
/*!***************************************!*\
  !*** ./assets/app/img/icons/star.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/star.svg";

/***/ }),

/***/ "./assets/app/img/icons/upload.svg":
/*!*****************************************!*\
  !*** ./assets/app/img/icons/upload.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/upload.svg";

/***/ }),

/***/ "./assets/app/js/alert.js":
/*!********************************!*\
  !*** ./assets/app/js/alert.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Alert = /*#__PURE__*/function () {
  "use strict";

  function Alert(el) {
    _classCallCheck(this, Alert);

    this.DOM = {
      el: el
    };
    this.DOM.toggle = this.DOM.el.querySelector(".alert__btn");
    this.onInit();
  }

  _createClass(Alert, [{
    key: "onInit",
    value: function onInit() {
      var _this = this;

      this.DOM.toggle.addEventListener("click", function () {
        return _this.toggle();
      });
    }
  }, {
    key: "toggle",
    value: function toggle() {
      this.DOM.el.style.opacity = 0;
      this.DOM.el.style.visibility = "hidden";
      this.DOM.el.style.transform = "translateY(100%)";
    }
  }]);

  return Alert;
}();

var alertNodes = document.querySelectorAll("[data-alert]");

_toConsumableArray(alertNodes).forEach(function (node) {
  return new Alert(node);
});

/***/ }),

/***/ "./assets/app/js/main.js":
/*!*******************************!*\
  !*** ./assets/app/js/main.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./assets/app/scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation */ "./assets/app/js/validation.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alert */ "./assets/app/js/alert.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_alert__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _objectfit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./objectfit */ "./assets/app/js/objectfit.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _react_App__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./react/App */ "./assets/app/js/react/App.jsx");
// CSS
 // Pollyfils

 // Core


 // Plugins


/* Packages */




/* Components */


/* Client */

var client = new react_query__WEBPACK_IMPORTED_MODULE_7__["QueryClient"]({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});
/* Render */

var appNode = document.getElementById('app');

if (appNode !== null) {
  Object(react_dom__WEBPACK_IMPORTED_MODULE_6__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(react_query__WEBPACK_IMPORTED_MODULE_7__["QueryClientProvider"], {
    client: client
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_react_App__WEBPACK_IMPORTED_MODULE_8__["default"], null)), appNode);
}

/***/ }),

/***/ "./assets/app/js/objectfit.js":
/*!************************************!*\
  !*** ./assets/app/js/objectfit.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");
/* harmony import */ var object_fit_images__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(object_fit_images__WEBPACK_IMPORTED_MODULE_1__);


jquery__WEBPACK_IMPORTED_MODULE_0___default()(function () {
  object_fit_images__WEBPACK_IMPORTED_MODULE_1___default()();
});

/***/ }),

/***/ "./assets/app/js/react/App.jsx":
/*!*************************************!*\
  !*** ./assets/app/js/react/App.jsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./assets/app/js/react/routes.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common */ "./assets/app/js/react/common/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./context */ "./assets/app/js/react/context.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./api */ "./assets/app/js/react/api/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./helpers */ "./assets/app/js/react/helpers/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */



/* Components */



/* Context */


/* Api */


/* Helpers */


function App() {
  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      currentUser = _useState2[0],
      setCurrentUser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      userRole = _useState4[0],
      setUserRole = _useState4[1];
  /* Constants */


  var userId = atob(location.search.replace('?', ''));
  /* Queries */

  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_api__WEBPACK_IMPORTED_MODULE_6__["QUERY_KEYS"].CURRENT_USER, function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_6__["fetchCurrentUser"])({
      userId: userId
    });
  }, {
    onSuccess: function onSuccess(user) {
      setCurrentUser(user);
      setUserRole(Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["getRole"])(user));
    }
  }),
      isLoading = _useQuery.isLoading;
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_5__["default"].Provider, {
    value: {
      currentUser: currentUser,
      userRole: userRole
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_4__["PageLoader"], {
    isLoading: isLoading
  }, _routes__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (_ref) {
    var path = _ref.path,
        Component = _ref.component,
        props = _ref.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      key: path,
      path: path,
      exact: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread({}, props)));
  })))));
}

/***/ }),

/***/ "./assets/app/js/react/api/comment.js":
/*!********************************************!*\
  !*** ./assets/app/js/react/api/comment.js ***!
  \********************************************/
/*! exports provided: addComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* Add comment | expects phase id, user id and formRef obect */

var addComment = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var formRef, phaseId, userId, position, params, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            formRef = _ref.formRef, phaseId = _ref.phaseId, userId = _ref.userId, position = _ref.position;
            params = new FormData(formRef.current);
            params.append('userId', userId);
            params.append('positionX', position.xPercent);
            params.append('positionY', position.yPercent);
            _context.next = 7;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/comments/add/".concat(phaseId), params);

          case 7:
            result = _context.sent;
            return _context.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 9:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function addComment(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./assets/app/js/react/api/index.js":
/*!******************************************!*\
  !*** ./assets/app/js/react/api/index.js ***!
  \******************************************/
/*! exports provided: fetchProjectsByUser, fetchProjectById, addProject, deleteProjects, leaveProjects, editProject, fetchProjectImageById, addProjectImages, deleteProjectImages, editProjectImage, fetchCurrentUser, fetchGobalUsers, addUser, deleteUser, QUERY_KEYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_KEYS", function() { return QUERY_KEYS; });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./assets/app/js/react/api/project.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchProjectsByUser", function() { return _project__WEBPACK_IMPORTED_MODULE_0__["fetchProjectsByUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchProjectById", function() { return _project__WEBPACK_IMPORTED_MODULE_0__["fetchProjectById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addProject", function() { return _project__WEBPACK_IMPORTED_MODULE_0__["addProject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteProjects", function() { return _project__WEBPACK_IMPORTED_MODULE_0__["deleteProjects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leaveProjects", function() { return _project__WEBPACK_IMPORTED_MODULE_0__["leaveProjects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "editProject", function() { return _project__WEBPACK_IMPORTED_MODULE_0__["editProject"]; });

/* harmony import */ var _projectImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectImage */ "./assets/app/js/react/api/projectImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchProjectImageById", function() { return _projectImage__WEBPACK_IMPORTED_MODULE_1__["fetchProjectImageById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addProjectImages", function() { return _projectImage__WEBPACK_IMPORTED_MODULE_1__["addProjectImages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteProjectImages", function() { return _projectImage__WEBPACK_IMPORTED_MODULE_1__["deleteProjectImages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "editProjectImage", function() { return _projectImage__WEBPACK_IMPORTED_MODULE_1__["editProjectImage"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ "./assets/app/js/react/api/user.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchCurrentUser", function() { return _user__WEBPACK_IMPORTED_MODULE_2__["fetchCurrentUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchGobalUsers", function() { return _user__WEBPACK_IMPORTED_MODULE_2__["fetchGobalUsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addUser", function() { return _user__WEBPACK_IMPORTED_MODULE_2__["addUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return _user__WEBPACK_IMPORTED_MODULE_2__["deleteUser"]; });




var QUERY_KEYS = {
  CURRENT_USER: 'current_user',
  PROJECT_BY_USER: 'project_by_user',
  PROJECT_BY_ID: 'project_by_id',
  PROJECT_IMAGE_BY_ID: 'project_image_by_id',
  GLOBAL_USERS: 'global_users'
};

/***/ }),

/***/ "./assets/app/js/react/api/project.js":
/*!********************************************!*\
  !*** ./assets/app/js/react/api/project.js ***!
  \********************************************/
/*! exports provided: fetchProjectsByUser, fetchProjectById, addProject, deleteProjects, leaveProjects, editProject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProjectsByUser", function() { return fetchProjectsByUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProjectById", function() { return fetchProjectById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProject", function() { return addProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProjects", function() { return deleteProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveProjects", function() { return leaveProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editProject", function() { return editProject; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* Fetch projects by user | expects user id */

var fetchProjectsByUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var userId, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userId = _ref.userId;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/projects/get/".concat(userId));

          case 3:
            result = _context.sent;
            return _context.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchProjectsByUser(_x) {
    return _ref2.apply(this, arguments);
  };
}();
/* Fetch projects by id | expects project id */

var fetchProjectById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
    var projectId, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            projectId = _ref3.projectId;
            _context2.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/project/get/".concat(projectId));

          case 3:
            result = _context2.sent;
            return _context2.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function fetchProjectById(_x2) {
    return _ref4.apply(this, arguments);
  };
}();
/* Add project */

var addProject = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/projects/add');

          case 2:
            result = _context3.sent;
            return _context3.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function addProject() {
    return _ref5.apply(this, arguments);
  };
}();
/* Delete project(s) | expects array of projectIds  */

var deleteProjects = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref6) {
    var projectIds, params, result;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            projectIds = _ref6.projectIds;
            params = new FormData();
            projectIds.forEach(function (id) {
              return params.append('projects[]', id);
            });
            _context4.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/projects/delete", params);

          case 5:
            result = _context4.sent;
            return _context4.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteProjects(_x3) {
    return _ref7.apply(this, arguments);
  };
}();
/* Leave project(s) | expects array of projectIds and user id  */

var leaveProjects = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref8) {
    var projectIds, userId, params, result;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            projectIds = _ref8.projectIds, userId = _ref8.userId;
            params = new FormData();
            projectIds.forEach(function (id) {
              return params.append('projects[]', id);
            });
            _context5.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/projects/leave/".concat(userId), params);

          case 5:
            result = _context5.sent;
            return _context5.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 7:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function leaveProjects(_x4) {
    return _ref9.apply(this, arguments);
  };
}();
/* Edit project | expects formData object and project id  */

var editProject = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref10) {
    var formRef, id, params, result;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            formRef = _ref10.formRef, id = _ref10.id;
            params = new FormData(formRef.current);
            _context6.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/projects/edit/".concat(id), params);

          case 4:
            result = _context6.sent;
            return _context6.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 6:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function editProject(_x5) {
    return _ref11.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./assets/app/js/react/api/projectImage.js":
/*!*************************************************!*\
  !*** ./assets/app/js/react/api/projectImage.js ***!
  \*************************************************/
/*! exports provided: fetchProjectImageById, addProjectImages, deleteProjectImages, editProjectImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProjectImageById", function() { return fetchProjectImageById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProjectImages", function() { return addProjectImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProjectImages", function() { return deleteProjectImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editProjectImage", function() { return editProjectImage; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* Fetch projectImage by id | expects project image id */

var fetchProjectImageById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var projectImageId, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            projectImageId = _ref.projectImageId;
            _context.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/images/get/".concat(projectImageId));

          case 3:
            result = _context.sent;
            return _context.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchProjectImageById(_x) {
    return _ref2.apply(this, arguments);
  };
}();
/* Add projectImage(s) | expects project id and array of images (blob) */

var addProjectImages = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
    var projectId, images, params, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            projectId = _ref3.projectId, images = _ref3.images;
            params = new FormData();
            images.forEach(function (image) {
              return params.append('images[]', image);
            });
            _context2.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/images/add/".concat(projectId), params);

          case 5:
            result = _context2.sent;
            return _context2.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function addProjectImages(_x2) {
    return _ref4.apply(this, arguments);
  };
}();
/* Delete projectImage(s) | expects project id and array of projectImageIds  */

var deleteProjectImages = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref5) {
    var projectId, projectImageIds, params, result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            projectId = _ref5.projectId, projectImageIds = _ref5.projectImageIds;
            params = new FormData();
            projectImageIds.forEach(function (id) {
              return params.append('projectImages[]', id);
            });
            _context3.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/images/delete/".concat(projectId), params);

          case 5:
            result = _context3.sent;
            return _context3.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function deleteProjectImages(_x3) {
    return _ref6.apply(this, arguments);
  };
}();
/* Edit projectImage | expects formRef object and projectImage id  */

var editProjectImage = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref7) {
    var formRef, id, params, result;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            formRef = _ref7.formRef, id = _ref7.id;
            params = new FormData(formRef.current);
            _context4.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/images/edit/".concat(id), params);

          case 4:
            result = _context4.sent;
            return _context4.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 6:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function editProjectImage(_x4) {
    return _ref8.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./assets/app/js/react/api/user.js":
/*!*****************************************!*\
  !*** ./assets/app/js/react/api/user.js ***!
  \*****************************************/
/*! exports provided: fetchCurrentUser, fetchGobalUsers, addUser, deleteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCurrentUser", function() { return fetchCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGobalUsers", function() { return fetchGobalUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUser", function() { return addUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* Fetch current (logged in) user | expects user id */

var fetchCurrentUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var userId, url, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userId = _ref.userId;
            url = '/api/users/get';
            if (userId) url = "".concat(url, "/").concat(userId);
            _context.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);

          case 5:
            result = _context.sent;
            return _context.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchCurrentUser(_x) {
    return _ref2.apply(this, arguments);
  };
}();
/* Fetch all users in db */

var fetchGobalUsers = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/users/get/all');

          case 2:
            result = _context2.sent;
            return _context2.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function fetchGobalUsers() {
    return _ref3.apply(this, arguments);
  };
}();
/* Add user to project | expects project id and user email */

var addUser = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref4) {
    var projectId, email, result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            projectId = _ref4.projectId, email = _ref4.email;
            _context3.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/users/add/".concat(projectId), {
              email: email
            });

          case 3:
            result = _context3.sent;
            return _context3.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function addUser(_x2) {
    return _ref5.apply(this, arguments);
  };
}();
/* Delete user from project | expects project id and user id */

var deleteUser = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref6) {
    var projectId, userId, result;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            projectId = _ref6.projectId, userId = _ref6.userId;
            _context4.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/users/delete/".concat(projectId), {
              userId: userId
            });

          case 3:
            result = _context4.sent;
            return _context4.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteUser(_x3) {
    return _ref7.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./assets/app/js/react/common/Box.jsx":
/*!********************************************!*\
  !*** ./assets/app/js/react/common/Box.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Box; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/users */ "./assets/app/js/react/components/users/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Packages */




/* Animations */


/* Assets */


/* Components */


function Box(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      SubtitleComponent = _ref.SubtitleComponent,
      boxOpen = _ref.boxOpen,
      toggleBox = _ref.toggleBox,
      children = _ref.children,
      user = _ref.user,
      _ref$position = _ref.position,
      position = _ref$position === void 0 ? {} : _ref$position,
      _ref$renderOnBody = _ref.renderOnBody,
      renderOnBody = _ref$renderOnBody === void 0 ? true : _ref$renderOnBody,
      boxRef = _ref.boxRef,
      extensionClasses = _ref.extensionClasses,
      _ref$animate = _ref.animate,
      animate = _ref$animate === void 0 ? true : _ref$animate;

  /* Constants */
  var _position$left = position.left,
      left = _position$left === void 0 ? 0 : _position$left,
      _position$top = position.top,
      top = _position$top === void 0 ? 0 : _position$top;
  var animation = animate ? _objectSpread({}, _animations__WEBPACK_IMPORTED_MODULE_4__["FADE_IN_UP"]) : {};
  /* TODO: escape event listener */

  var render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], null, boxOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
      ref: boxRef,
      layout: true,
      transition: {
        duration: 0.2
      },
      className: "box ".concat(renderOnBody && 'box--center', " ").concat(extensionClasses),
      style: {
        '--left': left,
        '--top': top
      }
    }, renderOnBody && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
      className: "box-overlay"
    }, _animations__WEBPACK_IMPORTED_MODULE_4__["FADE_IN"], {
      onClick: toggleBox
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
      key: "box-content",
      className: "box__content border p-5"
    }, animation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "box__header d-flex align-items-start"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-center"
    }, user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_users__WEBPACK_IMPORTED_MODULE_6__["User"], {
      user: user,
      size: "xl"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex flex-column ".concat(user && 'ml-3')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text--lg mb-0"
    }, title), (SubtitleComponent || subtitle) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-muted--60 mb-0"
    }, SubtitleComponent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubtitleComponent, null) : subtitle))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: "custom-modal__close btn btn-link ml-auto",
      onClick: toggleBox
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_3__["ReactSVG"], {
      wrapper: "svg",
      className: "icon icon--12",
      src: icons_close_svg__WEBPACK_IMPORTED_MODULE_5___default.a
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "box__body d-flex mt-4"
    }, children))));
  };
  /* Render */


  if (renderOnBody) {
    return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(render(), document.body);
  }

  return render();
}

/***/ }),

/***/ "./assets/app/js/react/common/Dropzone.jsx":
/*!*************************************************!*\
  !*** ./assets/app/js/react/common/Dropzone.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dropzone; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var icons_add_image_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/add_image.svg */ "./assets/app/img/icons/add_image.svg");
/* harmony import */ var icons_add_image_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_add_image_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var icons_upload_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! icons/upload.svg */ "./assets/app/img/icons/upload.svg");
/* harmony import */ var icons_upload_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(icons_upload_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ */ "./assets/app/js/react/common/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api */ "./assets/app/js/react/api/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Packages */





/* Assets */



/* Components */


/* Animations */


/* Api */


function Dropzone(_ref) {
  var projectId = _ref.projectId,
      _ref$positition = _ref.positition,
      positition = _ref$positition === void 0 ? 'left' : _ref$positition,
      children = _ref.children;

  /* Hooks */
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useQueryClient"])();

  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_2__["useDropzone"])({
    accept: 'image/*',
    noClick: true,
    onDrop: function onDrop(acceptedFiles) {
      return updateProjectImages('add', {
        images: acceptedFiles
      });
    }
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive;
  /* Mutations */


  var addProjectImagesMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_9__["addProjectImages"], {
    onSuccess: function onSuccess() {
      return queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_9__["QUERY_KEYS"].PROJECT_BY_ID, projectId]);
    }
  });
  var deleteProjectImagesMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_9__["deleteProjectImages"], {
    onSuccess: function onSuccess() {
      return queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_9__["QUERY_KEYS"].PROJECT_BY_ID, projectId]);
    }
  });
  /* Callbacks */

  var updateProjectImages = function updateProjectImages(action, props) {
    if (action === 'add') addProjectImagesMutation.mutate(_objectSpread({
      projectId: projectId
    }, props));
    if (action === 'delete') deleteProjectImagesMutation.mutate(_objectSpread({
      projectId: projectId
    }, props));
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: "dropzone"
  }, getRootProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", getInputProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropzoneInner, {
    addImageLoading: addProjectImagesMutation.isLoading,
    updateProjectImages: updateProjectImages,
    isParentDragActive: isDragActive,
    positition: positition
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row row--equalized gutters-5"
  }, children({
    updateProjectImages: updateProjectImages,
    isLoading: deleteProjectImagesMutation.isLoading
  })));
}
/* Inner dropzone */

var DropzoneInner = function DropzoneInner(_ref2) {
  var addImageLoading = _ref2.addImageLoading,
      updateProjectImages = _ref2.updateProjectImages,
      isParentDragActive = _ref2.isParentDragActive,
      positition = _ref2.positition;

  /* Hooks */
  var _useDropzone2 = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_2__["useDropzone"])({
    accept: 'image/*',
    noDragEventsBubbling: true,
    onDrop: function onDrop(acceptedFiles) {
      return updateProjectImages('add', {
        images: acceptedFiles
      });
    }
  }),
      getRootProps = _useDropzone2.getRootProps,
      getInputProps = _useDropzone2.getInputProps,
      isDragActive = _useDropzone2.isDragActive;
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: "dropzone"
  }, getRootProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", getInputProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["AnimatePresence"], null, (isDragActive || isParentDragActive) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, _extends({}, _animations__WEBPACK_IMPORTED_MODULE_8__["FADE_IN"], {
    className: "dropzone__overlay"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-wrapper icon-wrapper--secondary",
    style: {
      '--size': 75
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--30 text-secondary",
    src: icons_upload_svg__WEBPACK_IMPORTED_MODULE_6___default.a
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].button, _extends({}, _animations__WEBPACK_IMPORTED_MODULE_8__["SCALE_FADE"], {
    key: "add-project",
    type: "button",
    className: "icon-wrapper icon-wrapper--interactive icon-wrapper--secondary btn btn-link btn--add btn--add-".concat(positition),
    style: {
      '--size': 75
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_7__["LoadingWrapper"], {
    loading: addImageLoading,
    classes: {
      loaderClasses: 'position-absolute d-flex text-secondary'
    },
    loaderSize: 30
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--30 text-secondary",
    src: icons_add_image_svg__WEBPACK_IMPORTED_MODULE_5___default.a
  }))));
};

/***/ }),

/***/ "./assets/app/js/react/common/LoadingWrapper.jsx":
/*!*******************************************************!*\
  !*** ./assets/app/js/react/common/LoadingWrapper.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadingWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations */ "./assets/app/js/react/common/animations.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */



/* Animations */


function LoadingWrapper(_ref) {
  var loading = _ref.loading,
      children = _ref.children,
      _ref$loaderSize = _ref.loaderSize,
      loaderSize = _ref$loaderSize === void 0 ? 40 : _ref$loaderSize,
      _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes;

  /* Constants */
  var _classes$loaderClasse = classes.loaderClasses,
      loaderClasses = _classes$loaderClasse === void 0 ? 'position-absolute d-flex' : _classes$loaderClasse,
      _classes$defaultClass = classes.defaultClasses,
      defaultClasses = _classes$defaultClass === void 0 ? '' : _classes$defaultClass;
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], {
    initial: false
  }, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({
    key: "loader",
    className: loaderClasses
  }, _animations__WEBPACK_IMPORTED_MODULE_3__["SCALE_FADE"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "inherit",
    size: loaderSize
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({
    key: "default",
    className: defaultClasses
  }, _animations__WEBPACK_IMPORTED_MODULE_3__["SCALE_FADE"]), children));
}

/***/ }),

/***/ "./assets/app/js/react/common/Modal.jsx":
/*!**********************************************!*\
  !*** ./assets/app/js/react/common/Modal.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations */ "./assets/app/js/react/common/animations.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */



/* Animations */


function Modal(_ref) {
  var toggleModal = _ref.toggleModal,
      children = _ref.children,
      domElement = _ref.domElement,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "default" : _ref$variant;

  var render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: "custom-modal",
      className: "custom-modal custom-modal--".concat(variant)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
      className: "custom-modal__overlay",
      onClick: toggleModal
    }, _animations__WEBPACK_IMPORTED_MODULE_3__["FADE_IN"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].article, _extends({
      key: "custom-modal__content",
      className: "custom-modal__content"
    }, _animations__WEBPACK_IMPORTED_MODULE_3__["TRANSFORM_UP"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container-fluid d-flex flex-grow-1"
    }, children)));
  };
  /* Render */


  if (domElement) {
    return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(render(), domElement);
  }

  return render();
}

/***/ }),

/***/ "./assets/app/js/react/common/PageLoader.jsx":
/*!***************************************************!*\
  !*** ./assets/app/js/react/common/PageLoader.jsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageLoader; });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations */ "./assets/app/js/react/common/animations.js");
/* Components */



/* Animations */


function PageLoader(_ref) {
  var isLoading = _ref.isLoading,
      children = _ref.children;

  /* Render */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_0__["AnimatePresence"], null, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_0__["motion"].div, _animations__WEBPACK_IMPORTED_MODULE_3__["FADE_IN"], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_2__["default"], {
    color: "secondary"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    key: "children"
  }, children));
}

/***/ }),

/***/ "./assets/app/js/react/common/animations.js":
/*!**************************************************!*\
  !*** ./assets/app/js/react/common/animations.js ***!
  \**************************************************/
/*! exports provided: FADE_IN, FADE_IN_UP, TRANSFORM_UP, SCALE_FADE, STAGGER_UP, STAGGER_LEFT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FADE_IN", function() { return FADE_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FADE_IN_UP", function() { return FADE_IN_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSFORM_UP", function() { return TRANSFORM_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCALE_FADE", function() { return SCALE_FADE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STAGGER_UP", function() { return STAGGER_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STAGGER_LEFT", function() { return STAGGER_LEFT; });
var EASE = [0.65, 0, 0.35, 1];
var FADE_IN = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1
  },
  exit: {
    opacity: 0
  },
  transition: {
    ease: EASE,
    duration: 0.2
  }
};
var FADE_IN_UP = {
  initial: {
    y: 200,
    opacity: 0
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      damping: 42,
      stiffness: 800
    }
  },
  exit: {
    y: 200,
    opacity: 0,
    transition: {
      type: 'spring',
      damping: 42,
      stiffness: 1200
    }
  }
};
var TRANSFORM_UP = {
  initial: {
    y: '100%'
  },
  animate: {
    y: '0%',
    transition: {
      type: 'spring',
      damping: 41,
      stiffness: 600
    }
  },
  exit: {
    y: '100%',
    transition: {
      type: 'spring',
      damping: 41,
      stiffness: 1200
    }
  }
};
var SCALE_FADE = {
  initial: {
    scale: 0,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1
  },
  exit: {
    scale: 0,
    opacity: 0
  },
  transition: {
    ease: EASE,
    duration: 0.2
  }
};

var STAGGER_UP = function STAGGER_UP() {
  var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    initial: {
      opacity: 0,
      y: 35
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 450,
        delay: index * 0.035
      }
    },
    exit: {
      opacity: 0,
      scale: 0.25,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 600
      }
    }
  };
};

var STAGGER_LEFT = function STAGGER_LEFT() {
  var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    initial: {
      opacity: 0,
      x: 10
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 300,
        delay: index * 0.035
      }
    },
    exit: {
      opacity: 0,
      x: 10,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 600
      }
    }
  };
};



/***/ }),

/***/ "./assets/app/js/react/common/index.js":
/*!*********************************************!*\
  !*** ./assets/app/js/react/common/index.js ***!
  \*********************************************/
/*! exports provided: Dropzone, Modal, Box, LoadingWrapper, PageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropzone */ "./assets/app/js/react/common/Dropzone.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropzone", function() { return _Dropzone__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./assets/app/js/react/common/Modal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Box */ "./assets/app/js/react/common/Box.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _Box__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _LoadingWrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LoadingWrapper */ "./assets/app/js/react/common/LoadingWrapper.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingWrapper", function() { return _LoadingWrapper__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _PageLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PageLoader */ "./assets/app/js/react/common/PageLoader.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageLoader", function() { return _PageLoader__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./assets/app/js/react/components/action-menu/ActionMenu.jsx":
/*!*******************************************************************!*\
  !*** ./assets/app/js/react/components/action-menu/ActionMenu.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common */ "./assets/app/js/react/common/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context */ "./assets/app/js/react/context.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */



/* Assets */


/* Animations */


/* Components */


/* Context */


function ActionMenu(_ref) {
  var selected = _ref.selected,
      resetSelected = _ref.resetSelected,
      actions = _ref.actions;

  /* Hooks */
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_6__["default"]),
      userRole = _useContext.userRole;
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({}, _common_animations__WEBPACK_IMPORTED_MODULE_4__["TRANSFORM_UP"], {
    className: "bar bar--project"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-auto d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "bar__btn btn btn-link d-inline-flex text-white",
    onClick: resetSelected
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--14",
    src: icons_close_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ml-2 mb-0"
  }, selected.length, " selected")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-auto ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "bar__list list d-flex align-items-center"
  }, actions.map(function (_ref2, actionIndex) {
    var title = _ref2.title,
        theme = _ref2.theme,
        hasPermission = _ref2.hasPermission,
        icon = _ref2.icon,
        _ref2$iconSize = _ref2.iconSize,
        iconSize = _ref2$iconSize === void 0 ? 12 : _ref2$iconSize,
        _ref2$mutation = _ref2.mutation,
        mutation = _ref2$mutation === void 0 ? function () {} : _ref2$mutation,
        _ref2$isLoading = _ref2.isLoading,
        isLoading = _ref2$isLoading === void 0 ? false : _ref2$isLoading;

    if (hasPermission.includes(userRole)) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        key: actionIndex,
        className: "list__item"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "bar__btn btn btn-link d-flex align-items-center text-decoration-none",
        onClick: mutation
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "icon-wrapper icon-wrapper--".concat(theme, " icon-wrapper--interactive")
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_5__["LoadingWrapper"], {
        loading: isLoading,
        loaderSize: 12,
        classes: {
          loaderClasses: "position-absolute d-flex text-".concat(theme)
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
        wrapper: "svg",
        className: "icon icon--".concat(iconSize, " text-").concat(theme),
        src: icon
      }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "btn__text text-white ml-2"
      }, title)));
    }
  }))))));
}

/***/ }),

/***/ "./assets/app/js/react/components/action-menu/index.js":
/*!*************************************************************!*\
  !*** ./assets/app/js/react/components/action-menu/index.js ***!
  \*************************************************************/
/*! exports provided: ActionMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActionMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionMenu */ "./assets/app/js/react/components/action-menu/ActionMenu.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionMenu", function() { return _ActionMenu__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/app/js/react/components/editable/Editable.jsx":
/*!**************************************************************!*\
  !*** ./assets/app/js/react/components/editable/Editable.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Editable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common */ "./assets/app/js/react/common/index.js");
/* harmony import */ var icons_edit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! icons/edit.svg */ "./assets/app/img/icons/edit.svg");
/* harmony import */ var icons_edit_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(icons_edit_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context */ "./assets/app/js/react/context.js");
/* harmony import */ var _EditableBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EditableBody */ "./assets/app/js/react/components/editable/EditableBody.jsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Packages */


/* Components */


/* Assets */


/* Context */


/* Components */


function Editable(_ref) {
  var inputType = _ref.inputType,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["inputType", "children"]);

  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      boxOpen = _useState2[0],
      setBoxOpen = _useState2[1];
  /* Hooks */


  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_4__["default"]),
      userRole = _useContext.userRole;
  /* Constants */


  var title = "Editing ".concat(inputType);
  var subtitle = "Save when ready";
  /* Callbacks */

  var toggleBox = function toggleBox() {
    return setBoxOpen(!boxOpen);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editable d-flex align-items-center position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editable__content"
  }, children), userRole === 'admin' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "editable__toggle btn btn-link icon-wrapper icon-wrapper--secondary icon-wrapper--interactive stretched-link ml-3",
    onClick: toggleBox,
    style: {
      '--size': 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--10 text-secondary",
    src: icons_edit_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    title: title,
    subtitle: subtitle,
    boxOpen: boxOpen,
    toggleBox: toggleBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditableBody__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({
    title: title,
    inputType: inputType,
    toggleBox: toggleBox
  }, rest)))));
}

/***/ }),

/***/ "./assets/app/js/react/components/editable/EditableBody.jsx":
/*!******************************************************************!*\
  !*** ./assets/app/js/react/components/editable/EditableBody.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditableBody; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../elements */ "./assets/app/js/react/elements/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */


/* Assets */


/* Elements */


function EditableBody(_ref) {
  var title = _ref.title,
      inputType = _ref.inputType,
      toggleBox = _ref.toggleBox,
      content = _ref.content,
      mutation = _ref.mutation,
      mutationId = _ref.mutationId,
      mutationOnSuccess = _ref.mutationOnSuccess;

  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(content),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];
  /* Refs */


  var formRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* Effects */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _inputRef$current;

    if (inputRef !== null && inputRef !== void 0 && inputRef.current) inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.select();
  }, []);
  /* Mutations */

  var editMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(mutation, {
    onSuccess: function onSuccess() {
      mutationOnSuccess();
      toggleBox();
    }
  });
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    ref: formRef,
    className: "d-flex flex-column align-items-center flex-grow-1",
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      editMutation.mutate({
        formRef: formRef,
        id: mutationId
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: inputType
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextareaAutosize"], {
    className: "form-control form-control-sm form-control--text",
    id: inputType,
    name: inputType,
    type: "text",
    value: value,
    onChange: function onChange(_ref2) {
      var value = _ref2.target.value;
      return setValue(value);
    },
    ref: inputRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    title: "Save",
    extensionClasses: "mt-4 w-50 justify-content-center",
    isLoading: editMutation.isLoading,
    type: "submit"
  }));
}

/***/ }),

/***/ "./assets/app/js/react/components/editable/index.js":
/*!**********************************************************!*\
  !*** ./assets/app/js/react/components/editable/index.js ***!
  \**********************************************************/
/*! exports provided: Editable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Editable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editable */ "./assets/app/js/react/components/editable/Editable.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editable", function() { return _Editable__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/app/js/react/components/project-detail/ProjectDetailHeader.jsx":
/*!*******************************************************************************!*\
  !*** ./assets/app/js/react/components/project-detail/ProjectDetailHeader.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectDetailHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _user_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-add */ "./assets/app/js/react/components/user-add/index.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users */ "./assets/app/js/react/components/users/index.js");
/* harmony import */ var _editable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../editable */ "./assets/app/js/react/components/editable/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context */ "./assets/app/js/react/context.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ "./assets/app/js/react/api/index.js");
/* Packages */


/* Components */




/* Context */


/* Api */


function ProjectDetailHeader(_ref) {
  var title = _ref.title,
      description = _ref.description,
      users = _ref.users,
      id = _ref.id,
      author = _ref.author,
      email = _ref.email;

  /* Constants */
  var project = {
    id: id,
    author: author,
    email: email
  };
  /* Hooks */

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      userRole = _useContext.userRole;

  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQueryClient"])();
  /* Callbacks */

  var mutationOnSuccess = function mutationOnSuccess() {
    queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_6__["QUERY_KEYS"].PROJECT_BY_ID, id]);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(userRole === 'admin' && 'editable', " d-flex align-items-center mb-2")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable__WEBPACK_IMPORTED_MODULE_4__["Editable"], {
    inputType: "title",
    content: title,
    mutation: _api__WEBPACK_IMPORTED_MODULE_6__["editProject"],
    mutationId: id,
    mutationOnSuccess: mutationOnSuccess
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "h5 mb-0 text-white"
  }, title ? title : 'Add a nice title'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(userRole === 'admin' && 'editable', " d-flex align-items-center mb-2")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable__WEBPACK_IMPORTED_MODULE_4__["Editable"], {
    inputType: "description",
    content: description,
    mutation: _api__WEBPACK_IMPORTED_MODULE_6__["editProject"],
    mutationId: id,
    mutationOnSuccess: mutationOnSuccess
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted--70 mb-0"
  }, description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, description) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-muted--40"
  }, "What's this project about? Set the context, the goals, the constraints"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-auto d-flex align-items-baseline ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_users__WEBPACK_IMPORTED_MODULE_3__["Users"], {
    users: users,
    project: project,
    size: "lg"
  }), userRole === 'admin' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_add__WEBPACK_IMPORTED_MODULE_2__["UserAdd"], {
    users: users,
    project: project
  })));
}

/***/ }),

/***/ "./assets/app/js/react/components/project-detail/ProjectDetailImage.jsx":
/*!******************************************************************************!*\
  !*** ./assets/app/js/react/components/project-detail/ProjectDetailImage.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectDetailImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _editable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../editable */ "./assets/app/js/react/components/editable/index.js");
/* harmony import */ var icons_check_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! icons/check.svg */ "./assets/app/img/icons/check.svg");
/* harmony import */ var icons_check_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(icons_check_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api */ "./assets/app/js/react/api/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */





/* Components */


/* Assets */


/* Animations */


/* Api */


function ProjectDetailImage(_ref) {
  var projectImage = _ref.projectImage,
      projectId = _ref.projectId,
      selected = _ref.selected,
      updateSelected = _ref.updateSelected;

  /* Constants */
  var projectImageId = projectImage.id,
      title = projectImage.title,
      _projectImage$phases = projectImage.phases,
      phases = _projectImage$phases === void 0 ? [] : _projectImage$phases;

  var _ref2 = phases[phases.length - 1] || {},
      image = _ref2.image;
  /* Hooks */


  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useQueryClient"])();
  /* Callbacks */

  var mutationOnSuccess = function mutationOnSuccess() {
    queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_8__["QUERY_KEYS"].PROJECT_BY_ID, projectId]);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "card card--link card--product ".concat(selected.includes(projectImageId) && 'is-selected')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/projects/".concat(projectId, "/review/").concat(projectImageId).concat(location.search),
    title: title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__image border m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "card-img-top",
    src: image,
    srcSet: "".concat(image, " 2x"),
    alt: title
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable__WEBPACK_IMPORTED_MODULE_5__["Editable"], {
    inputType: "title",
    projectId: projectId,
    content: title,
    mutation: _api__WEBPACK_IMPORTED_MODULE_8__["editProjectImage"],
    mutationId: projectImageId,
    mutationOnSuccess: mutationOnSuccess
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].p, _extends({}, _common_animations__WEBPACK_IMPORTED_MODULE_7__["FADE_IN"], {
    className: "mb-0"
  }), title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__select-toggle",
    onClick: function onClick(event) {
      event.preventDefault();
      updateSelected(projectImageId);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_2__["ReactSVG"], {
    wrapper: "svg",
    className: "card__select-icon icon icon--8",
    src: icons_check_svg__WEBPACK_IMPORTED_MODULE_6___default.a
  }))));
}

/***/ }),

/***/ "./assets/app/js/react/components/project-detail/ProjectDetailImages.jsx":
/*!*******************************************************************************!*\
  !*** ./assets/app/js/react/components/project-detail/ProjectDetailImages.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectDetailImages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _ProjectDetailImage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectDetailImage */ "./assets/app/js/react/components/project-detail/ProjectDetailImage.jsx");
/* harmony import */ var _action_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../action-menu */ "./assets/app/js/react/components/action-menu/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common */ "./assets/app/js/react/common/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks */ "./assets/app/js/react/hooks/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../api */ "./assets/app/js/react/api/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../context */ "./assets/app/js/react/context.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */



/* Assets */


/* Animations */


/* Components */




/* Hooks */


/* Api */


/* Context */


function ProjectDetailImages(_ref) {
  var projectImages = _ref.projectImages,
      projectId = _ref.projectId;

  /* Hooks */
  var _useSelection = Object(_hooks__WEBPACK_IMPORTED_MODULE_8__["useSelection"])(),
      selected = _useSelection.selected,
      updateSelected = _useSelection.updateSelected,
      resetSelected = _useSelection.resetSelected;

  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQueryClient"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_10__["default"]),
      userRole = _useContext.userRole;
  /* Mutations */


  var deleteProjectImagesMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_9__["deleteProjectImages"], {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_9__["QUERY_KEYS"].PROJECT_BY_ID, projectId]);
      resetSelected();
    }
  });
  /* Constants */

  var actions = [{
    title: 'Remove',
    theme: 'danger',
    hasPermission: ['admin'],
    icon: icons_close_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    iconSize: 10,
    mutation: function mutation() {
      return deleteProjectImagesMutation.mutate({
        projectId: projectId,
        projectImageIds: selected
      });
    },
    isLoading: deleteProjectImagesMutation.isLoading
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(selected.length > 0 && 'has-selections')
  }, userRole === 'admin' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_7__["Dropzone"], {
    projectId: projectId,
    projectImages: projectImages,
    positition: 'right'
  }, function () {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Images, {
      projectImages: projectImages,
      projectId: projectId,
      selected: selected,
      updateSelected: updateSelected
    });
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row gutters-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Images, {
    projectImages: projectImages,
    projectId: projectId,
    selected: selected,
    updateSelected: updateSelected
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, selected.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_action_menu__WEBPACK_IMPORTED_MODULE_6__["ActionMenu"], {
    selected: selected,
    resetSelected: resetSelected,
    actions: actions
  })));
}

var Images = function Images(_ref2) {
  var projectImages = _ref2.projectImages,
      projectId = _ref2.projectId,
      selected = _ref2.selected,
      updateSelected = _ref2.updateSelected;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, projectImages.map(function (projectImage, projectImageIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({}, Object(_common_animations__WEBPACK_IMPORTED_MODULE_4__["STAGGER_UP"])(projectImageIndex), {
      key: projectImage.id,
      className: "col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2",
      layout: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectDetailImage__WEBPACK_IMPORTED_MODULE_5__["default"], {
      projectImage: projectImage,
      projectId: projectId,
      selected: selected,
      updateSelected: updateSelected
    }));
  }));
};

/***/ }),

/***/ "./assets/app/js/react/components/project-detail/index.js":
/*!****************************************************************!*\
  !*** ./assets/app/js/react/components/project-detail/index.js ***!
  \****************************************************************/
/*! exports provided: ProjectDetailHeader, ProjectDetailImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectDetailHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectDetailHeader */ "./assets/app/js/react/components/project-detail/ProjectDetailHeader.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailHeader", function() { return _ProjectDetailHeader__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ProjectDetailImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectDetailImages */ "./assets/app/js/react/components/project-detail/ProjectDetailImages.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailImages", function() { return _ProjectDetailImages__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./assets/app/js/react/components/project-overview/Project.jsx":
/*!*********************************************************************!*\
  !*** ./assets/app/js/react/components/project-overview/Project.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Project; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ */ "./assets/app/js/react/components/project-overview/index.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users */ "./assets/app/js/react/components/users/index.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var icons_check_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/check.svg */ "./assets/app/img/icons/check.svg");
/* harmony import */ var icons_check_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_check_svg__WEBPACK_IMPORTED_MODULE_5__);
/* Packages */


/* Components */




/* Assets */


function Project(_ref) {
  var project = _ref.project,
      selected = _ref.selected,
      updateSelected = _ref.updateSelected;

  /* Constants */
  var title = project.title,
      projectImages = project.projectImages,
      users = project.users,
      author = project.author,
      id = project.id;
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "projects/".concat(id).concat(location.search),
    title: title,
    className: "card card--link card--product ".concat(selected.includes(id) && 'is-selected')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_2__["ProjectImage"], {
    projectImages: projectImages
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-2"
  }, title ? title : 'Add a nice title'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_users__WEBPACK_IMPORTED_MODULE_3__["Users"], {
    users: users,
    project: {
      author: author
    },
    layout: 'minimal'
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__select"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__select-toggle",
    onClick: function onClick(event) {
      event.preventDefault();
      updateSelected(id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_4__["ReactSVG"], {
    wrapper: "svg",
    className: "card__select-icon icon icon--8",
    src: icons_check_svg__WEBPACK_IMPORTED_MODULE_5___default.a
  }))));
}

/***/ }),

/***/ "./assets/app/js/react/components/project-overview/ProjectAdd.jsx":
/*!************************************************************************!*\
  !*** ./assets/app/js/react/components/project-overview/ProjectAdd.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectAdd; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ */ "./assets/app/js/react/components/project-overview/index.js");
/* harmony import */ var icons_add_project_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/add_project.svg */ "./assets/app/img/icons/add_project.svg");
/* harmony import */ var icons_add_project_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_add_project_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ "./assets/app/js/react/api/index.js");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/animations */ "./assets/app/js/react/common/animations.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */




/* Components */


/* Assets */


/* Api */


/* Animations */


function ProjectAdd(_ref) {
  var setNewProjectId = _ref.setNewProjectId;

  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      projectId = _useState2[0],
      setProjectId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      modalOpen = _useState4[0],
      setModalOpen = _useState4[1];
  /* Hooks */


  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useQueryClient"])();
  /* Queries */

  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useQuery"])([_api__WEBPACK_IMPORTED_MODULE_6__["QUERY_KEYS"].PROJECT_BY_ID, projectId], function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_6__["fetchProjectById"])({
      projectId: projectId
    });
  }, {
    enabled: !!projectId
  }),
      project = _useQuery.data;

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setNewProjectId(projectId);
  }, [projectId]);
  /* Mutations */

  var addMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_6__["addProject"], {
    onSuccess: function onSuccess(_ref2) {
      var id = _ref2.id;
      return setProjectId(id);
    }
  });
  var editMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_6__["editProject"], {
    onSuccess: function onSuccess() {
      return invalidateProject();
    }
  });
  /* Callbacks */

  var toggleModal = function toggleModal() {
    setModalOpen(!modalOpen);
    /* Mutate on modal open */

    if (!modalOpen) addMutation.mutate();
    /* Reset id on close modal */

    if (modalOpen) {
      setTimeout(function () {
        setProjectId(null);
      }, 250);
      invalidateProject();
    }
  };

  var updateProject = function updateProject(formRef) {
    return editMutation.mutate({
      formRef: formRef,
      id: projectId
    });
  };

  var invalidateProject = function invalidateProject() {
    return queryClient.invalidateQueries(_api__WEBPACK_IMPORTED_MODULE_6__["QUERY_KEYS"].PROJECT_BY_USER);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].button, _extends({}, _common_animations__WEBPACK_IMPORTED_MODULE_7__["SCALE_FADE"], {
    key: "add-project",
    type: "button",
    className: "icon-wrapper icon-wrapper--interactive icon-wrapper--secondary btn btn-link btn--add btn--add-right",
    style: {
      '--size': 75
    },
    onClick: toggleModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--30 text-secondary",
    src: icons_add_project_svg__WEBPACK_IMPORTED_MODULE_5___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], null, modalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_4__["ProjectModal"], {
    project: project,
    updateProject: updateProject,
    toggleModal: toggleModal
  })));
}

/***/ }),

/***/ "./assets/app/js/react/components/project-overview/ProjectImage.jsx":
/*!**************************************************************************!*\
  !*** ./assets/app/js/react/components/project-overview/ProjectImage.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectImage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var icons_add_image_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! icons/add_image.svg */ "./assets/app/img/icons/add_image.svg");
/* harmony import */ var icons_add_image_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(icons_add_image_svg__WEBPACK_IMPORTED_MODULE_2__);
/* Packages */


/* Assets */


function ProjectImage(_ref) {
  var projectImages = _ref.projectImages;

  /* Constants */
  var _ref2 = projectImages[0] || {},
      _ref2$phases = _ref2.phases,
      phases = _ref2$phases === void 0 ? [] : _ref2$phases,
      title = _ref2.title;

  var _ref3 = phases[phases.length - 1] || {},
      image = _ref3.image;
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__image border m-2"
  }, image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "card-img-top",
    src: image,
    srcSet: "".concat(image, " 2x"),
    alt: title
  }), !image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--48 text-muted--40",
    src: icons_add_image_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  }));
}

/***/ }),

/***/ "./assets/app/js/react/components/project-overview/ProjectModal.jsx":
/*!**************************************************************************!*\
  !*** ./assets/app/js/react/components/project-overview/ProjectModal.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common */ "./assets/app/js/react/common/index.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../users */ "./assets/app/js/react/components/users/index.js");
/* harmony import */ var _user_add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user-add */ "./assets/app/js/react/components/user-add/index.js");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/animations */ "./assets/app/js/react/common/animations.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */




/* Assets */


/* Components */




/* Animations */


function ProjectModal(_ref) {
  var _ref$project = _ref.project,
      project = _ref$project === void 0 ? {} : _ref$project,
      updateProject = _ref.updateProject,
      toggleModal = _ref.toggleModal;

  /* Constants  */
  var _project$id = project.id,
      projectId = _project$id === void 0 ? null : _project$id,
      _project$title = project.title,
      title = _project$title === void 0 ? '' : _project$title,
      _project$projectImage = project.projectImages,
      projectImages = _project$projectImage === void 0 ? [] : _project$projectImage,
      _project$users = project.users,
      users = _project$users === void 0 ? [] : _project$users;
  /* Refs */

  var formRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    toggleModal: toggleModal,
    domElement: document.body
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    ref: formRef,
    method: "POST",
    className: "custom-modal__form",
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      toggleModal();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-modal__header d-flex align-items-center pt-6 pt-md-12 pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "projectTitle"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control form-control--clear text--xl",
    id: "projectTitle",
    name: "title",
    placeholder: "The project name",
    onBlur: function onBlur() {
      return updateProject(formRef);
    },
    autoFocus: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "custom-modal__close btn btn-link ml-auto",
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: toggleModal,
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_2__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--14",
    src: icons_close_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-modal__body pt-3 pb-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row gutters-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "projectDescription"
  }, "What's this project about?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "form-control form-control--text form-control--clear mb-10",
    id: "projectDescription",
    name: "description",
    placeholder: "What's this project about?",
    onBlur: function onBlur() {
      return updateProject(formRef);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-auto d-flex align-items-baseline ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_users__WEBPACK_IMPORTED_MODULE_6__["Users"], {
    users: users,
    project: project,
    size: "lg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_user_add__WEBPACK_IMPORTED_MODULE_7__["UserAdd"], {
    users: users,
    project: project
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_5__["Dropzone"], {
    projectId: projectId,
    projectImages: projectImages
  }, function (_ref2) {
    var updateProjectImages = _ref2.updateProjectImages,
        isLoading = _ref2.isLoading;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["AnimatePresence"], null, projectImages.map(function (projectImage, projectImageIndex) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropzoneImage, {
        key: projectImage.id,
        projectImage: projectImage,
        projectImageIndex: projectImageIndex,
        updateProjectImages: updateProjectImages,
        isLoading: isLoading
      });
    }));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-modal__footer pb-6 pb-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row gutters-0 w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-1 ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "custom-modal__btn btn btn-block btn-secondary d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].span, {
    className: "btn-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Save"))))))));
}

var DropzoneImage = function DropzoneImage(_ref3) {
  var projectImage = _ref3.projectImage,
      projectImageIndex = _ref3.projectImageIndex,
      updateProjectImages = _ref3.updateProjectImages,
      isLoading = _ref3.isLoading;
  var title = projectImage.title,
      id = projectImage.id,
      _projectImage$phases = projectImage.phases,
      phases = _projectImage$phases === void 0 ? [] : _projectImage$phases;

  var _ref4 = phases[phases.length - 1] || {},
      image = _ref4.image;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, _extends({
    layout: true
  }, Object(_common_animations__WEBPACK_IMPORTED_MODULE_8__["STAGGER_UP"])(projectImageIndex), {
    className: "col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2",
    key: id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropzone__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "dropzone__image img-fluid",
    src: image,
    alt: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-link dropzone__image-delete p-0",
    onClick: function onClick(event) {
      event.stopPropagation();
      updateProjectImages('delete', {
        projectImageIds: [id]
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropzone__image-delete-icon icon-wrapper icon-wrapper--danger mx-auto",
    style: {
      '--size': 50
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_5__["LoadingWrapper"], {
    loading: isLoading,
    loaderSize: 20,
    classes: {
      loaderClasses: 'position-absolute d-flex text-danger'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_2__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--14 text-danger mt-0",
    src: icons_close_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }))))));
};

/***/ }),

/***/ "./assets/app/js/react/components/project-overview/ProjectResults.jsx":
/*!****************************************************************************!*\
  !*** ./assets/app/js/react/components/project-overview/ProjectResults.jsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectResults; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ */ "./assets/app/js/react/components/project-overview/index.js");
/* harmony import */ var _action_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../action-menu */ "./assets/app/js/react/components/action-menu/index.js");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var icons_leave_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! icons/leave.svg */ "./assets/app/img/icons/leave.svg");
/* harmony import */ var icons_leave_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(icons_leave_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var icons_archive_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! icons/archive.svg */ "./assets/app/img/icons/archive.svg");
/* harmony import */ var icons_archive_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(icons_archive_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks */ "./assets/app/js/react/hooks/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../api */ "./assets/app/js/react/api/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../context */ "./assets/app/js/react/context.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */



/* Components */



/* Animations */


/* Assets */




/* Hooks */


/* Api */


/* Context */


function ProjectResults(_ref) {
  var projects = _ref.projects,
      newProjectId = _ref.newProjectId;

  /* Hooks */
  var _useSelection = Object(_hooks__WEBPACK_IMPORTED_MODULE_9__["useSelection"])(),
      selected = _useSelection.selected,
      updateSelected = _useSelection.updateSelected,
      resetSelected = _useSelection.resetSelected;

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_11__["default"]),
      currentUser = _useContext.currentUser;

  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQueryClient"])();
  /* Mutations */

  var leaveProjectsMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_10__["leaveProjects"], {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries(_api__WEBPACK_IMPORTED_MODULE_10__["QUERY_KEYS"].PROJECT_BY_USER);
      resetSelected();
    }
  });
  var deleteProjectsMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_10__["deleteProjects"], {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries(_api__WEBPACK_IMPORTED_MODULE_10__["QUERY_KEYS"].PROJECT_BY_USER);
      resetSelected();
    }
  });
  var actions = [{
    title: 'Leave',
    theme: 'warning',
    hasPermission: ['user', 'basic'],
    icon: icons_leave_svg__WEBPACK_IMPORTED_MODULE_7___default.a,
    mutation: function mutation() {
      return leaveProjectsMutation.mutate({
        projectIds: selected,
        userId: currentUser.id
      });
    },
    isLoading: leaveProjectsMutation.isLoading
  }, {
    title: 'Archive',
    theme: 'secondary',
    hasPermission: ['admin'],
    icon: icons_archive_svg__WEBPACK_IMPORTED_MODULE_8___default.a
  }, {
    title: 'Remove',
    theme: 'danger',
    hasPermission: ['admin'],
    icon: icons_close_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
    iconSize: 10,
    mutation: function mutation() {
      return deleteProjectsMutation.mutate({
        projectIds: selected
      });
    },
    isLoading: deleteProjectsMutation.isLoading
  }];
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "h5 text-white mb-6"
  }, "Your projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, projects.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].p, _extends({}, _common_animations__WEBPACK_IMPORTED_MODULE_5__["FADE_IN"], {
    className: "text-white mb-0 position-absolute"
  }), "You don't have any projects yet")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row row--equalized gutters-5 ".concat(selected.length > 0 && 'has-selections')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, projects.filter(function (project) {
    return project.id !== newProjectId;
  }).map(function (project, projectIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({}, Object(_common_animations__WEBPACK_IMPORTED_MODULE_5__["STAGGER_UP"])(projectIndex), {
      key: project.id,
      className: "col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2",
      layout: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_3__["Project"], {
      project: project,
      selected: selected,
      updateSelected: updateSelected
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, selected.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_action_menu__WEBPACK_IMPORTED_MODULE_4__["ActionMenu"], {
    selected: selected,
    resetSelected: resetSelected,
    actions: actions
  })));
}

/***/ }),

/***/ "./assets/app/js/react/components/project-overview/index.js":
/*!******************************************************************!*\
  !*** ./assets/app/js/react/components/project-overview/index.js ***!
  \******************************************************************/
/*! exports provided: Project, ProjectAdd, ProjectImage, ProjectModal, ProjectResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./assets/app/js/react/components/project-overview/Project.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return _Project__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ProjectAdd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectAdd */ "./assets/app/js/react/components/project-overview/ProjectAdd.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectAdd", function() { return _ProjectAdd__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ProjectImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectImage */ "./assets/app/js/react/components/project-overview/ProjectImage.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectImage", function() { return _ProjectImage__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ProjectModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectModal */ "./assets/app/js/react/components/project-overview/ProjectModal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectModal", function() { return _ProjectModal__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ProjectResults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectResults */ "./assets/app/js/react/components/project-overview/ProjectResults.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectResults", function() { return _ProjectResults__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./assets/app/js/react/components/project-review/ProjectReviewCanvas.jsx":
/*!*******************************************************************************!*\
  !*** ./assets/app/js/react/components/project-review/ProjectReviewCanvas.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectReviewCanvas; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _ProjectReviewMarker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectReviewMarker */ "./assets/app/js/react/components/project-review/ProjectReviewMarker.jsx");
/* harmony import */ var _ProjectReviewComment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectReviewComment */ "./assets/app/js/react/components/project-review/ProjectReviewComment.jsx");
/* harmony import */ var _ProjectReviewCommentBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectReviewCommentBox */ "./assets/app/js/react/components/project-review/ProjectReviewCommentBox.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */


/* Components */



/* Context */


/* Global */

var cursorOffset = 10;
function ProjectReviewCanvas(_ref) {
  var title = _ref.title,
      _ref$phases = _ref.phases,
      phases = _ref$phases === void 0 ? [] : _ref$phases,
      projectImageId = _ref.projectImageId;

  /* Constants */
  var _ref2 = phases[phases.length - 1] || {},
      image = _ref2.image,
      phaseId = _ref2.id,
      comments = _ref2.comments;
  /* Refs */


  var reviewRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* State */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      markerPos = _useState2[0],
      setMarkerPos = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      boxOpen = _useState4[0],
      setBoxOpen = _useState4[1];
  /* Callbacks */


  var toggleBox = function toggleBox() {
    setBoxOpen(!boxOpen);
    setMarkerPos(null);
  };

  var posMarker = function posMarker(_ref3) {
    var clientX = _ref3.clientX,
        clientY = _ref3.clientY;
    var reviewPos = reviewRef === null || reviewRef === void 0 ? void 0 : reviewRef.current.getBoundingClientRect();
    setMarkerPos(function () {
      var xPercent = (clientX - cursorOffset) / reviewPos.width * 100;
      var yPercent = (clientY - reviewPos.top - cursorOffset) / reviewPos.height * 100;
      return {
        xPercent: xPercent,
        yPercent: yPercent,
        reviewPos: reviewPos
      };
    });
    setBoxOpen(true);
  };
  /* render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: reviewRef,
    className: "review position-relative mx-n12 mb-n12 mt-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "review__image img-fluid w-100",
    src: image,
    srcSet: "".concat(image, " 2x"),
    alt: title,
    onClick: posMarker
  }), comments.length > 0 && comments.map(function (comment, commentIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewComment__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
      key: commentIndex
    }, _objectSpread(_objectSpread({}, comment), {}, {
      commentIndex: commentIndex,
      reviewRef: reviewRef
    })));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, markerPos && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewMarker__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({}, markerPos), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewCommentBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    markerPos: markerPos,
    boxOpen: boxOpen,
    toggleBox: toggleBox,
    phaseId: phaseId,
    projectImageId: projectImageId
  }))));
}

/***/ }),

/***/ "./assets/app/js/react/components/project-review/ProjectReviewComment.jsx":
/*!********************************************************************************!*\
  !*** ./assets/app/js/react/components/project-review/ProjectReviewComment.jsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectReviewComment; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common */ "./assets/app/js/react/common/index.js");
/* harmony import */ var _ProjectReviewMarker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectReviewMarker */ "./assets/app/js/react/components/project-review/ProjectReviewMarker.jsx");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../helpers */ "./assets/app/js/react/helpers/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */

/* Components */



/* Helpers */


function ProjectReviewComment(_ref) {
  var author = _ref.author,
      comment = _ref.comment,
      position = _ref.position,
      commentIndex = _ref.commentIndex,
      reviewRef = _ref.reviewRef;

  /* Constants */
  var xPercent = position.xPercent,
      yPercent = position.yPercent;
  /* State */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      boxOpen = _useState2[0],
      setBoxOpen = _useState2[1];
  /* Callbacks */


  var toggleBox = function toggleBox() {
    return setBoxOpen(!boxOpen);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewMarker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    xPercent: xPercent,
    yPercent: yPercent,
    author: author,
    commentIndex: commentIndex,
    toggleComment: toggleBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comment, {
    comment: comment,
    author: author,
    boxOpen: boxOpen,
    toggleBox: toggleBox,
    position: position,
    reviewRef: reviewRef
  }));
}

var Comment = function Comment(_ref2) {
  var comment = _ref2.comment,
      author = _ref2.author,
      boxOpen = _ref2.boxOpen,
      toggleBox = _ref2.toggleBox,
      position = _ref2.position,
      reviewRef = _ref2.reviewRef;

  /* Constants */
  var title = author.username;
  var subtitle = author.email;
  /* State */

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(position),
      _useState4 = _slicedToArray(_useState3, 2),
      transformedPos = _useState4[0],
      setTransformedPos = _useState4[1];
  /* Refs */


  var boxRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* Effects */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (position) {
      setTransformedPos(function () {
        position.reviewPos = reviewRef.current.getBoundingClientRect();
        return Object(_helpers__WEBPACK_IMPORTED_MODULE_3__["calcBoxPos"])(boxRef, position);
      });
    }
  }, [position]);
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    renderOnBody: false,
    animate: false,
    extensionClasses: "review__box",
    title: title,
    subtitle: subtitle,
    boxOpen: boxOpen,
    toggleBox: toggleBox,
    user: author,
    position: transformedPos,
    boxRef: boxRef
  }, comment);
};

/***/ }),

/***/ "./assets/app/js/react/components/project-review/ProjectReviewCommentBox.jsx":
/*!***********************************************************************************!*\
  !*** ./assets/app/js/react/components/project-review/ProjectReviewCommentBox.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectReviewCommentBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common */ "./assets/app/js/react/common/index.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements */ "./assets/app/js/react/elements/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context */ "./assets/app/js/react/context.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers */ "./assets/app/js/react/helpers/index.js");
/* harmony import */ var _api_comment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/comment */ "./assets/app/js/react/api/comment.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api */ "./assets/app/js/react/api/index.js");
/* Packages */



/* Components */



/* Context */


/* Helpers */


/* Api */



function ProjectReviewCommentBox(_ref) {
  var markerPos = _ref.markerPos,
      boxOpen = _ref.boxOpen,
      toggleBox = _ref.toggleBox,
      phaseId = _ref.phaseId,
      projectImageId = _ref.projectImageId;

  /* Refs */
  var formRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var boxRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* Constants */

  var title = 'Add a comment';
  var position = Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["calcBoxPos"])(boxRef, markerPos);
  /* Hooks */

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      user = _useContext.currentUser;

  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQueryClient"])();
  /* Mutations */

  var addCommentMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_api_comment__WEBPACK_IMPORTED_MODULE_7__["addComment"], {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_8__["QUERY_KEYS"].PROJECT_IMAGE_BY_ID, parseInt(projectImageId)]);
      toggleBox();
    }
  });
  /* Components */

  var SubtitleComponent = function SubtitleComponent() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "Comment or ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-secondary"
    }, " @mention "), " someone");
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    renderOnBody: false,
    extensionClasses: "review__box",
    title: title,
    SubtitleComponent: SubtitleComponent,
    boxOpen: boxOpen,
    toggleBox: toggleBox,
    position: position,
    user: user,
    boxRef: boxRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    ref: formRef,
    className: "d-flex flex-column align-items-center flex-grow-1",
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      addCommentMutation.mutate({
        formRef: formRef,
        userId: user.id,
        phaseId: phaseId,
        position: markerPos
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "comment"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "form-control form-control-sm form-control--text",
    id: "comment",
    name: "comment",
    type: "text",
    placeholder: "Say something nice...",
    autoFocus: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    title: "Submit",
    extensionClasses: "mt-4 w-50 justify-content-center",
    type: "submit",
    isLoading: addCommentMutation.isLoading
  })));
}

/***/ }),

/***/ "./assets/app/js/react/components/project-review/ProjectReviewHeader.jsx":
/*!*******************************************************************************!*\
  !*** ./assets/app/js/react/components/project-review/ProjectReviewHeader.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectReviewHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _editable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../editable */ "./assets/app/js/react/components/editable/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context */ "./assets/app/js/react/context.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ "./assets/app/js/react/api/index.js");
/* Packages */


/* Components */


/* Context */


/* Api */


function ProjectReviewHeader(_ref) {
  var id = _ref.id,
      title = _ref.title,
      description = _ref.description;

  /* Hooks */
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_3__["default"]),
      userRole = _useContext.userRole;

  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQueryClient"])();
  /* Callbacks */

  var mutationOnSuccess = function mutationOnSuccess() {
    queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_4__["QUERY_KEYS"].PROJECT_IMAGE_BY_ID, id]);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-xl-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(userRole === 'admin' && 'editable', " d-flex align-items-center mb-2")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable__WEBPACK_IMPORTED_MODULE_2__["Editable"], {
    inputType: "title",
    projectId: id,
    content: title,
    mutation: _api__WEBPACK_IMPORTED_MODULE_4__["editProjectImage"],
    mutationId: id,
    mutationOnSuccess: mutationOnSuccess
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "h5 mb-0 text-white"
  }, title ? title : 'Add a nice title'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(userRole === 'admin' && 'editable', " d-flex align-items-center mb-2")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable__WEBPACK_IMPORTED_MODULE_2__["Editable"], {
    inputType: "description",
    content: description,
    mutation: _api__WEBPACK_IMPORTED_MODULE_4__["editProjectImage"],
    mutationId: id,
    mutationOnSuccess: mutationOnSuccess
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted--70 mb-0"
  }, description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, description) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-muted--40"
  }, "Add a decription - the purpose, context, objectives"))))));
}

/***/ }),

/***/ "./assets/app/js/react/components/project-review/ProjectReviewMarker.jsx":
/*!*******************************************************************************!*\
  !*** ./assets/app/js/react/components/project-review/ProjectReviewMarker.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectReviewMarker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context */ "./assets/app/js/react/context.js");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/animations */ "./assets/app/js/react/common/animations.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */


/* Context */


/* Animations */


function ProjectReviewMarker(_ref) {
  var xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      author = _ref.author,
      commentIndex = _ref.commentIndex,
      toggleComment = _ref.toggleComment,
      children = _ref.children;

  /* Hooks */
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_2__["default"]),
      currentUser = _useContext.currentUser;

  var user = author ? author : currentUser;
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({
    layout: true,
    transition: {
      duration: 0.2
    },
    className: "review__interaction",
    style: {
      '--x': xPercent,
      '--y': yPercent
    }
  }, _common_animations__WEBPACK_IMPORTED_MODULE_3__["FADE_IN"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].button, _extends({}, _common_animations__WEBPACK_IMPORTED_MODULE_3__["SCALE_FADE"], {
    className: "review__marker icon-wrapper icon-wrapper--secondary btn btn-link text-reset",
    style: {
      '--theme': "".concat(user.userColor)
    },
    onClick: toggleComment
  }), commentIndex && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text--xs"
  }, commentIndex + 1)), children);
}

/***/ }),

/***/ "./assets/app/js/react/components/project-review/index.js":
/*!****************************************************************!*\
  !*** ./assets/app/js/react/components/project-review/index.js ***!
  \****************************************************************/
/*! exports provided: ProjectReviewHeader, ProjectReviewCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectReviewHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectReviewHeader */ "./assets/app/js/react/components/project-review/ProjectReviewHeader.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectReviewHeader", function() { return _ProjectReviewHeader__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ProjectReviewCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectReviewCanvas */ "./assets/app/js/react/components/project-review/ProjectReviewCanvas.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectReviewCanvas", function() { return _ProjectReviewCanvas__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./assets/app/js/react/components/user-add/UserAdd.jsx":
/*!*************************************************************!*\
  !*** ./assets/app/js/react/components/user-add/UserAdd.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserAdd; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var icons_add_user_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! icons/add_user.svg */ "./assets/app/img/icons/add_user.svg");
/* harmony import */ var icons_add_user_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(icons_add_user_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common */ "./assets/app/js/react/common/index.js");
/* harmony import */ var _UserAddSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserAddSearch */ "./assets/app/js/react/components/user-add/UserAddSearch.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */


/* Assets */


/* Components */



function UserAdd(_ref) {
  var users = _ref.users,
      project = _ref.project;

  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      boxOpen = _useState2[0],
      setBoxOpen = _useState2[1];
  /* Callbacks */


  var toggleBox = function toggleBox() {
    return setBoxOpen(!boxOpen);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative ml-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-link user user--lg user--add",
    type: "button",
    onClick: toggleBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user__avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__initials"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "user__icon icon icon--12 mt-0",
    src: icons_add_user_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    title: "Select users",
    subtitle: "Choose some users to collaborate with.",
    boxOpen: boxOpen,
    toggleBox: toggleBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserAddSearch__WEBPACK_IMPORTED_MODULE_4__["default"], {
    users: users,
    project: project,
    toggleBox: toggleBox
  })));
}

/***/ }),

/***/ "./assets/app/js/react/components/user-add/UserAddSearch.jsx":
/*!*******************************************************************!*\
  !*** ./assets/app/js/react/components/user-add/UserAddSearch.jsx ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserAddSearch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _UserAddSearchResults__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserAddSearchResults */ "./assets/app/js/react/components/user-add/UserAddSearchResults.jsx");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users */ "./assets/app/js/react/components/users/index.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../elements */ "./assets/app/js/react/elements/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers */ "./assets/app/js/react/helpers/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ "./assets/app/js/react/api/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */


/* Components */



/* Elements */


/* Helpers */


/* Api */


function UserAddSearch(_ref) {
  var users = _ref.users,
      project = _ref.project,
      toggleBox = _ref.toggleBox;

  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState4 = _slicedToArray(_useState3, 2),
      focusedUser = _useState4[0],
      setFocusedUser = _useState4[1];
  /* Queries */


  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_api__WEBPACK_IMPORTED_MODULE_6__["QUERY_KEYS"].GLOBAL_USERS, _api__WEBPACK_IMPORTED_MODULE_6__["fetchGobalUsers"]),
      _useQuery$data = _useQuery.data,
      globalUsers = _useQuery$data === void 0 ? [] : _useQuery$data,
      globalUsersLoading = _useQuery.isLoading;
  /* Constants */


  var filteredUsers = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["filterUsers"])(globalUsers, users, query);
  /* Refs */

  var queryRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* Hooks */

  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQueryClient"])();
  /* Mutations */

  var addUserMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_6__["addUser"], {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_6__["QUERY_KEYS"].PROJECT_BY_ID, project.id]);
      queryClient.invalidateQueries(_api__WEBPACK_IMPORTED_MODULE_6__["QUERY_KEYS"].GLOBAL_USERS);
      queryRef.current.select();
      setQuery('');
    }
  });
  /* Callbacks */

  var handleChange = function handleChange(_ref2) {
    var value = _ref2.target.value;
    return setQuery(value);
  };

  var handleOnKeyDown = function handleOnKeyDown(event) {
    if (['Enter', 'Tab'].includes(event.key)) {
      event.preventDefault();

      if (query !== '' && focusedUser !== null) {
        var user = focusedUser in filteredUsers ? filteredUsers[focusedUser] : focusedUser;

        if (Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["isEmail"])(user.email)) {
          addUserMutation.mutate({
            projectId: project.id,
            email: user.email
          });
        }
      }
    }
  };

  var handleClick = function handleClick(email) {
    if (Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["isEmail"])(email)) {
      addUserMutation.mutate({
        projectId: project.id,
        email: email
      });
    }
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-grow-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_users__WEBPACK_IMPORTED_MODULE_3__["Users"], {
    users: users,
    project: project,
    variant: "interactive",
    size: "xl"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "userQuery"
  }, "Search name or email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control form-control-sm form-control--search",
    id: "userQuery",
    name: "userQuery",
    placeholder: "Search name or email",
    type: "text",
    autoFocus: true,
    value: query,
    onChange: handleChange,
    onKeyDown: handleOnKeyDown,
    autoComplete: "off",
    ref: queryRef
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserAddSearchResults__WEBPACK_IMPORTED_MODULE_2__["default"], {
    filteredUsers: filteredUsers,
    query: query,
    handleClick: handleClick,
    focusedUser: focusedUser,
    setFocusedUser: setFocusedUser,
    userMutationLoading: addUserMutation.isLoading,
    globalUsersLoading: globalUsersLoading
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center justify-content-center mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    title: "Done",
    onClick: toggleBox,
    extensionClasses: "w-50 justify-content-center"
  })));
}

/***/ }),

/***/ "./assets/app/js/react/components/user-add/UserAddSearchResults.jsx":
/*!**************************************************************************!*\
  !*** ./assets/app/js/react/components/user-add/UserAddSearchResults.jsx ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserAddSearchResults; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users */ "./assets/app/js/react/components/users/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */


/* Animations */


/* Components */


function UserAddSearchResults(_ref) {
  var filteredUsers = _ref.filteredUsers,
      query = _ref.query,
      handleClick = _ref.handleClick,
      focusedUser = _ref.focusedUser,
      setFocusedUser = _ref.setFocusedUser,
      userMutationLoading = _ref.userMutationLoading,
      globalUsersLoading = _ref.globalUsersLoading;

  /* Render filtered results */
  var results = function results() {
    var newUser = {
      email: query,
      username: 'New user',
      userColor: '#CC25E8'
    };

    if (filteredUsers.length > 0) {
      return filteredUsers.map(function (user, userIndex) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].li, _extends({}, _common_animations__WEBPACK_IMPORTED_MODULE_2__["FADE_IN"], {
          key: user.id,
          className: "list__item vr-3"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_users__WEBPACK_IMPORTED_MODULE_3__["UserSelect"], {
          user: user,
          userIndex: userIndex,
          handleClick: handleClick,
          setFocusedUser: setFocusedUser,
          isFocused: userIndex === focusedUser && query,
          isLoading: userMutationLoading
        }));
      });
    }

    if (!globalUsersLoading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].li, _extends({}, _common_animations__WEBPACK_IMPORTED_MODULE_2__["FADE_IN"], {
        key: "New user",
        className: "list__item is-focused vr-3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_users__WEBPACK_IMPORTED_MODULE_3__["UserSelect"], {
        user: newUser,
        userIndex: newUser,
        handleClick: handleClick,
        setFocusedUser: setFocusedUser,
        isFocused: query.length,
        isLoading: userMutationLoading
      }));
    }
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, query !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].ul, _extends({}, _common_animations__WEBPACK_IMPORTED_MODULE_2__["FADE_IN"], {
    className: "box__list list"
  }), results()));
}

/***/ }),

/***/ "./assets/app/js/react/components/user-add/index.js":
/*!**********************************************************!*\
  !*** ./assets/app/js/react/components/user-add/index.js ***!
  \**********************************************************/
/*! exports provided: UserAdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserAdd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserAdd */ "./assets/app/js/react/components/user-add/UserAdd.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAdd", function() { return _UserAdd__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/app/js/react/components/users/User.jsx":
/*!*******************************************************!*\
  !*** ./assets/app/js/react/components/users/User.jsx ***!
  \*******************************************************/
/*! exports provided: default, UserAvatar, UserInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAvatar", function() { return UserAvatar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return UserInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var icons_star_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! icons/star.svg */ "./assets/app/img/icons/star.svg");
/* harmony import */ var icons_star_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(icons_star_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var icons_delete_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/delete.svg */ "./assets/app/img/icons/delete.svg");
/* harmony import */ var icons_delete_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_delete_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api */ "./assets/app/js/react/api/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common */ "./assets/app/js/react/common/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */



/* Assets */



/* Api */


/* Components */


function User(_ref) {
  var user = _ref.user,
      _ref$project = _ref.project,
      project = _ref$project === void 0 ? {} : _ref$project,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'md' : _ref$size;

  /* Hooks */
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQueryClient"])();
  /* Constants */

  var projectId = project.id,
      author = project.author;
  var userId = user.id,
      email = user.email;
  var isAuthor = email === author;
  var classes = ['user', "user--".concat(size), "user--".concat(variant), isAuthor && 'user--author'].join(' ');
  /* Mutations */

  var deleteUserMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_5__["deleteUser"], {
    onSuccess: function onSuccess() {
      return queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_5__["QUERY_KEYS"].PROJECT_BY_ID, projectId]);
    }
  });
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserAvatar, _extends({
    isLoading: deleteUserMutation.isLoading
  }, user), variant === 'interactive' && !isAuthor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "user__action btn btn-link p-0",
    type: "button",
    onClick: function onClick() {
      return deleteUserMutation.mutate({
        projectId: projectId,
        userId: userId
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "user__action-icon icon icon--14",
    src: icons_delete_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }))), isAuthor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__status user__status--leader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "user__status-icon icon text-tertiary mt-0",
    src: icons_star_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  })));
}
var UserAvatar = function UserAvatar(_ref2) {
  var username = _ref2.username,
      userColor = _ref2.userColor,
      isLoading = _ref2.isLoading,
      children = _ref2.children;

  /* Constants */
  var userInitials = username.split(' ').map(function (word) {
    return word[0].toUpperCase();
  });
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__avatar",
    style: {
      '--theme': userColor
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_6__["LoadingWrapper"], {
    loading: isLoading,
    loaderSize: 16
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user__initials"
  }, userInitials), children));
};
var UserInfo = function UserInfo(_ref3) {
  var username = _ref3.username,
      email = _ref3.email;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column ml-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-0"
  }, username), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted--60 text--xs"
  }, email));
};

/***/ }),

/***/ "./assets/app/js/react/components/users/UserSelect.jsx":
/*!*************************************************************!*\
  !*** ./assets/app/js/react/components/users/UserSelect.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserSelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var icons_add_user_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! icons/add_user.svg */ "./assets/app/img/icons/add_user.svg");
/* harmony import */ var icons_add_user_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(icons_add_user_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./assets/app/js/react/components/users/User.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */


/* Assets */


/* Components */


function UserSelect(_ref) {
  var user = _ref.user,
      userIndex = _ref.userIndex,
      handleClick = _ref.handleClick,
      isFocused = _ref.isFocused,
      setFocusedUser = _ref.setFocusedUser,
      isLoading = _ref.isLoading;

  /* Effects */
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    isFocused && setFocusedUser(userIndex);
  }, [isFocused]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      return setFocusedUser(0);
    };
  }, []);
  /* Callbacks */

  var handleStatus = function handleStatus(action) {
    setFocusedUser(action === 'enter' ? userIndex : 0);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "user user--select ".concat(isFocused && 'is-focused', " user--xl"),
    onClick: function onClick() {
      return handleClick(user.email);
    },
    onMouseEnter: function onMouseEnter() {
      return handleStatus('enter');
    },
    onMouseLeave: function onMouseLeave() {
      return handleStatus('leave');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_3__["UserAvatar"], _extends({
    isLoading: isLoading && isFocused
  }, user)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_3__["UserInfo"], user), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__add text-secondary rounded-circle ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "user__add-icon icon icon--12 text-secondary",
    src: icons_add_user_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  }))));
}

/***/ }),

/***/ "./assets/app/js/react/components/users/Users.jsx":
/*!********************************************************!*\
  !*** ./assets/app/js/react/components/users/Users.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Users; });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./assets/app/js/react/components/users/User.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Packages */



/* Components */


function Users(_ref) {
  var users = _ref.users,
      _ref$layout = _ref.layout,
      layout = _ref$layout === void 0 ? "full" : _ref$layout,
      rest = _objectWithoutProperties(_ref, ["users", "layout"]);

  var sliceAmount = layout === "minimal" ? 7 : Infinity;
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row align-items-center gutters-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_0__["AnimatePresence"], null, users.slice(0, sliceAmount).map(function (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_0__["motion"].div, _extends({
      layout: true
    }, _common_animations__WEBPACK_IMPORTED_MODULE_2__["SCALE_FADE"], {
      className: "col-auto",
      key: user.id
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({
      user: user
    }, rest)));
  }), layout === "minimal" && users.length > 7 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_0__["motion"].div, _extends({
    layout: true
  }, _common_animations__WEBPACK_IMPORTED_MODULE_2__["SCALE_FADE"], {
    className: "col-auto",
    key: "more"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "text--xs text-muted--70 ml-1"
  }, "+ ", users.length - sliceAmount))));
}

/***/ }),

/***/ "./assets/app/js/react/components/users/index.js":
/*!*******************************************************!*\
  !*** ./assets/app/js/react/components/users/index.js ***!
  \*******************************************************/
/*! exports provided: Users, User, UserSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users */ "./assets/app/js/react/components/users/Users.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return _Users__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./assets/app/js/react/components/users/User.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _User__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _UserSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserSelect */ "./assets/app/js/react/components/users/UserSelect.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSelect", function() { return _UserSelect__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./assets/app/js/react/context.js":
/*!****************************************!*\
  !*** ./assets/app/js/react/context.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var StaticContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
/* harmony default export */ __webpack_exports__["default"] = (StaticContext);

/***/ }),

/***/ "./assets/app/js/react/elements/Button.jsx":
/*!*************************************************!*\
  !*** ./assets/app/js/react/elements/Button.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common */ "./assets/app/js/react/common/index.js");
/* Components */



function Button(_ref) {
  var title = _ref.title,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'secondary' : _ref$theme,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'sm' : _ref$size,
      _ref$extensionClasses = _ref.extensionClasses,
      extensionClasses = _ref$extensionClasses === void 0 ? '' : _ref$extensionClasses,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? function () {} : _ref$onClick,
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading;

  /* Render */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_0__["motion"].button, {
    layout: true,
    className: "btn btn-".concat(size, " btn-").concat(theme, " ").concat(extensionClasses, " d-flex align-items-center"),
    type: type,
    onClick: onClick,
    style: {
      height: 35
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_2__["LoadingWrapper"], {
    loading: isLoading,
    loaderSize: 16,
    classes: {
      loaderClasses: 'position-absolute d-flex text-secondary'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: "btn__text"
  }, title)));
}

/***/ }),

/***/ "./assets/app/js/react/elements/index.js":
/*!***********************************************!*\
  !*** ./assets/app/js/react/elements/index.js ***!
  \***********************************************/
/*! exports provided: Button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button */ "./assets/app/js/react/elements/Button.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _Button__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/app/js/react/helpers/calcBoxPos.js":
/*!***************************************************!*\
  !*** ./assets/app/js/react/helpers/calcBoxPos.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calcBoxPos; });
function calcBoxPos(boxRef, markerPos) {
  var _boxRef$current;

  var markerSpacer = 10;
  var markerSize = 20;
  var offset = markerSize + markerSpacer;
  /* Get position of marker */

  var reviewPos = markerPos.reviewPos;
  var xPercent = Number(markerPos.xPercent);
  var yPercent = Number(markerPos.yPercent);
  /* Get dimensions of current box */

  var _ref = (boxRef === null || boxRef === void 0 ? void 0 : (_boxRef$current = boxRef.current) === null || _boxRef$current === void 0 ? void 0 : _boxRef$current.getBoundingClientRect()) || {},
      _ref$width = _ref.width,
      boxWidth = _ref$width === void 0 ? 400 : _ref$width,
      _ref$height = _ref.height,
      boxHeight = _ref$height === void 0 ? 228 : _ref$height;
  /* Get dimensions of current screen */


  var screenWidth = window.innerWidth;
  var boxPercentWidth = boxWidth / screenWidth * 100;
  var screenHeight = window.innerHeight - reviewPos.top;
  var boxPercentHeight = boxHeight / screenHeight * 100;
  /* Set x and y values to percentage equivelent to make the box responsive */

  var left = offset;
  var top = offset;
  /* Compensate for the boxWidth if marker is at end of horizontal screen */

  if (xPercent + boxPercentWidth > 100) {
    left = -boxWidth - markerSpacer;
  }
  /* Compensate for the boxHeight if marker is at end of vertical screen */


  if (yPercent + boxPercentHeight > 100) {
    top = -boxHeight - markerSpacer;
  }

  return {
    left: "".concat(left, "px"),
    top: "".concat(top, "px")
  };
}

/***/ }),

/***/ "./assets/app/js/react/helpers/filterUsers.js":
/*!****************************************************!*\
  !*** ./assets/app/js/react/helpers/filterUsers.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return filterUsers; });
function filterUsers(globalUsers, users, query) {
  var lowerQuery = query.toLowerCase();
  var existingUsersByEmail = users.map(function (_ref) {
    var email = _ref.email;
    return email;
  });
  var filteredUsers = globalUsers.filter(function (_ref2) {
    var email = _ref2.email;

    /* Only return users that are not part of the project */
    return !existingUsersByEmail.includes(email);
  }).filter(function (_ref3) {
    var email = _ref3.email,
        username = _ref3.username;

    /* Only return users that match the query on email || username */
    return email.toLowerCase().includes(lowerQuery) || username.toLowerCase().includes(lowerQuery);
  });
  return filteredUsers;
}

/***/ }),

/***/ "./assets/app/js/react/helpers/getRole.js":
/*!************************************************!*\
  !*** ./assets/app/js/react/helpers/getRole.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getRole; });
var USER_ROLES = {
  ROLE_ADMIN: 'ROLE_ADMIN',
  ROLE_USER: 'ROLE_USER',
  ROLE_USER_BASIC: 'ROLE_USER_BASIC'
};
function getRole(_ref) {
  var roles = _ref.roles;
  if (roles.includes(USER_ROLES.ROLE_ADMIN)) return 'admin';
  if (roles.includes(USER_ROLES.ROLE_USER)) return 'user';
  if (roles.includes(USER_ROLES.ROLE_USER_BASIC)) return 'basic';
}

/***/ }),

/***/ "./assets/app/js/react/helpers/index.js":
/*!**********************************************!*\
  !*** ./assets/app/js/react/helpers/index.js ***!
  \**********************************************/
/*! exports provided: isEmail, filterUsers, updatePageTitle, getRole, calcBoxPos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isEmail */ "./assets/app/js/react/helpers/isEmail.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return _isEmail__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _filterUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filterUsers */ "./assets/app/js/react/helpers/filterUsers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterUsers", function() { return _filterUsers__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _updatePageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./updatePageTitle */ "./assets/app/js/react/helpers/updatePageTitle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updatePageTitle", function() { return _updatePageTitle__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _getRole__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./getRole */ "./assets/app/js/react/helpers/getRole.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRole", function() { return _getRole__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _calcBoxPos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calcBoxPos */ "./assets/app/js/react/helpers/calcBoxPos.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calcBoxPos", function() { return _calcBoxPos__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./assets/app/js/react/helpers/isEmail.js":
/*!************************************************!*\
  !*** ./assets/app/js/react/helpers/isEmail.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isEmail; });
function isEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/***/ }),

/***/ "./assets/app/js/react/helpers/updatePageTitle.js":
/*!********************************************************!*\
  !*** ./assets/app/js/react/helpers/updatePageTitle.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return updatePageTitle; });
function updatePageTitle(title) {
  document.title = "Parallel Dashboard | ".concat(title);
}

/***/ }),

/***/ "./assets/app/js/react/hooks/index.js":
/*!********************************************!*\
  !*** ./assets/app/js/react/hooks/index.js ***!
  \********************************************/
/*! exports provided: useSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useSelection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useSelection */ "./assets/app/js/react/hooks/useSelection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSelection", function() { return _useSelection__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/app/js/react/hooks/useSelection.js":
/*!***************************************************!*\
  !*** ./assets/app/js/react/hooks/useSelection.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useSelection; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function useSelection() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var updateSelected = function updateSelected(id) {
    setSelected(function (selected) {
      if (selected.includes(id)) {
        return selected.filter(function (selectedId) {
          return selectedId !== id;
        });
      }

      return [].concat(_toConsumableArray(selected), [id]);
    });
  };

  var resetSelected = function resetSelected() {
    return setSelected([]);
  };

  return {
    selected: selected,
    updateSelected: updateSelected,
    resetSelected: resetSelected
  };
}

/***/ }),

/***/ "./assets/app/js/react/pages/ProjectDetail.jsx":
/*!*****************************************************!*\
  !*** ./assets/app/js/react/pages/ProjectDetail.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectDetail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./assets/app/js/react/common/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api */ "./assets/app/js/react/api/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ "./assets/app/js/react/helpers/index.js");
/* harmony import */ var _components_project_detail__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/project-detail */ "./assets/app/js/react/components/project-detail/index.js");
/* Packages */



/* Components */


/* Api */


/* Helpers */


/* Components */


function ProjectDetail() {
  /* Hooks */
  var _useParams = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
      projectId = _useParams.id;
  /* Queries */


  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQuery"])([_api__WEBPACK_IMPORTED_MODULE_4__["QUERY_KEYS"].PROJECT_BY_ID, parseInt(projectId)], function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_4__["fetchProjectById"])({
      projectId: projectId
    });
  }, {
    onSuccess: function onSuccess(_ref) {
      var title = _ref.title;
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["updatePageTitle"])(title);
    }
  }),
      isLoading = _useQuery.isLoading,
      _useQuery$data = _useQuery.data,
      data = _useQuery$data === void 0 ? {} : _useQuery$data;
  /* Constants  */


  var title = data.title,
      description = data.description,
      users = data.users,
      id = data.id,
      author = data.author,
      email = data.email,
      projectImages = data.projectImages;
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_3__["PageLoader"], {
    isLoading: isLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_project_detail__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailHeader"], {
    title: title,
    description: description,
    users: users,
    id: id,
    author: author,
    email: email
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_project_detail__WEBPACK_IMPORTED_MODULE_6__["ProjectDetailImages"], {
    projectImages: projectImages,
    projectId: id
  }));
}

/***/ }),

/***/ "./assets/app/js/react/pages/ProjectOverview.jsx":
/*!*******************************************************!*\
  !*** ./assets/app/js/react/pages/ProjectOverview.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectOverview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components_project_overview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/project-overview */ "./assets/app/js/react/components/project-overview/index.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./assets/app/js/react/common/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context */ "./assets/app/js/react/context.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api */ "./assets/app/js/react/api/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */


/* Components */



/* Context */


/* Api */


function ProjectOverview() {
  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      newProjectId = _useState2[0],
      setNewProjectId = _useState2[1];
  /* Hooks */


  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_4__["default"]),
      currentUser = _useContext.currentUser,
      userRole = _useContext.userRole;
  /* Constants */


  var userId = currentUser !== null && currentUser !== void 0 && currentUser.id ? currentUser.id : atob(location.search.replace('?', ''));
  /* Queries */

  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_api__WEBPACK_IMPORTED_MODULE_5__["QUERY_KEYS"].PROJECT_BY_USER, function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_5__["fetchProjectsByUser"])({
      userId: userId
    });
  }, {
    enabled: !!userId
  }),
      isLoading = _useQuery.isLoading,
      _useQuery$data = _useQuery.data,
      projects = _useQuery$data === void 0 ? [] : _useQuery$data;
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_3__["PageLoader"], {
    isLoading: isLoading
  }, userRole === 'admin' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_project_overview__WEBPACK_IMPORTED_MODULE_2__["ProjectAdd"], {
    setNewProjectId: setNewProjectId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_project_overview__WEBPACK_IMPORTED_MODULE_2__["ProjectResults"], {
    projects: projects,
    newProjectId: newProjectId
  }));
}

/***/ }),

/***/ "./assets/app/js/react/pages/ProjectReview.jsx":
/*!*****************************************************!*\
  !*** ./assets/app/js/react/pages/ProjectReview.jsx ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectReview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common */ "./assets/app/js/react/common/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api */ "./assets/app/js/react/api/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../helpers */ "./assets/app/js/react/helpers/index.js");
/* harmony import */ var _components_project_review__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/project-review */ "./assets/app/js/react/components/project-review/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Packages */



/* Components */


/* Api */


/* Helpers */


/* Components */


function ProjectReview() {
  /* Hooks */
  var _useParams = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
      projectImageId = _useParams.id;
  /* Queries */


  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQuery"])([_api__WEBPACK_IMPORTED_MODULE_4__["QUERY_KEYS"].PROJECT_IMAGE_BY_ID, parseInt(projectImageId)], function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_4__["fetchProjectImageById"])({
      projectImageId: projectImageId
    });
  }, {
    onSuccess: function onSuccess(_ref) {
      var title = _ref.title;
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["updatePageTitle"])(title);
    }
  }),
      isLoading = _useQuery.isLoading,
      _useQuery$data = _useQuery.data,
      data = _useQuery$data === void 0 ? {} : _useQuery$data;
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_3__["PageLoader"], {
    isLoading: isLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_project_review__WEBPACK_IMPORTED_MODULE_6__["ProjectReviewHeader"], data), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_project_review__WEBPACK_IMPORTED_MODULE_6__["ProjectReviewCanvas"], _objectSpread(_objectSpread({}, data), {}, {
    projectImageId: projectImageId
  })));
}

/***/ }),

/***/ "./assets/app/js/react/pages/index.js":
/*!********************************************!*\
  !*** ./assets/app/js/react/pages/index.js ***!
  \********************************************/
/*! exports provided: ProjectOverview, ProjectDetail, ProjectReview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectOverview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectOverview */ "./assets/app/js/react/pages/ProjectOverview.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectOverview", function() { return _ProjectOverview__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ProjectDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectDetail */ "./assets/app/js/react/pages/ProjectDetail.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectDetail", function() { return _ProjectDetail__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ProjectReview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectReview */ "./assets/app/js/react/pages/ProjectReview.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectReview", function() { return _ProjectReview__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./assets/app/js/react/routes.js":
/*!***************************************!*\
  !*** ./assets/app/js/react/routes.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ "./assets/app/js/react/pages/index.js");
/* Pages */

var routes = [{
  name: 'project-overview',
  path: '/projects',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__["ProjectOverview"]
}, {
  name: 'project-detail',
  path: '/projects/:id',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__["ProjectDetail"]
}, {
  name: 'project-review',
  path: '/projects/:id/review/:id',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__["ProjectReview"]
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./assets/app/js/validation.js":
/*!*************************************!*\
  !*** ./assets/app/js/validation.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var parsleyjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! parsleyjs */ "./node_modules/parsleyjs/dist/parsley.js");
/* harmony import */ var parsleyjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(parsleyjs__WEBPACK_IMPORTED_MODULE_1__);


var parsleyConfig = {
  errorClass: 'is-error',
  excluded: 'input[type=button], input[type=submit], input[type=reset], input[type=hidden], [disabled], :hidden',
  successClass: 'is-success'
};
jquery__WEBPACK_IMPORTED_MODULE_0___default()('form:not([novalidate])').parsley(parsleyConfig);

/***/ }),

/***/ "./assets/app/scss/main.scss":
/*!***********************************!*\
  !*** ./assets/app/scss/main.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX2ltYWdlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9hZGRfcHJvamVjdC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX3VzZXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2FyY2hpdmUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2NoZWNrLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvZGVsZXRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9lZGl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9sZWF2ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvc3Rhci5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvdXBsb2FkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FsZXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL29iamVjdGZpdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9hcGkvY29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2FwaS9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvYXBpL3Byb2plY3RJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2FwaS91c2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL0JveC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vRHJvcHpvbmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL0xvYWRpbmdXcmFwcGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbW1vbi9Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vUGFnZUxvYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbW1vbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvYWN0aW9uLW1lbnUvQWN0aW9uTWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL2FjdGlvbi1tZW51L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9lZGl0YWJsZS9FZGl0YWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL2VkaXRhYmxlL0VkaXRhYmxlQm9keS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL2VkaXRhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbC9Qcm9qZWN0RGV0YWlsSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvcHJvamVjdC1kZXRhaWwvUHJvamVjdERldGFpbEltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvcHJvamVjdC1kZXRhaWwvUHJvamVjdERldGFpbEltYWdlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3Byb2plY3QtZGV0YWlsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9wcm9qZWN0LW92ZXJ2aWV3L1Byb2plY3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9wcm9qZWN0LW92ZXJ2aWV3L1Byb2plY3RBZGQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9wcm9qZWN0LW92ZXJ2aWV3L1Byb2plY3RJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3Byb2plY3Qtb3ZlcnZpZXcvUHJvamVjdE1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvcHJvamVjdC1vdmVydmlldy9Qcm9qZWN0UmVzdWx0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3Byb2plY3Qtb3ZlcnZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdDYW52YXMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3Q29tbWVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdDb21tZW50Qm94LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvcHJvamVjdC1yZXZpZXcvUHJvamVjdFJldmlld0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdNYXJrZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9wcm9qZWN0LXJldmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlci1hZGQvVXNlckFkZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3VzZXItYWRkL1VzZXJBZGRTZWFyY2guanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2VyLWFkZC9Vc2VyQWRkU2VhcmNoUmVzdWx0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3VzZXItYWRkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2Vycy9Vc2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlcnMvVXNlclNlbGVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3VzZXJzL1VzZXJzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb250ZXh0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvZWxlbWVudHMvQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2VsZW1lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvaGVscGVycy9jYWxjQm94UG9zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvaGVscGVycy9maWx0ZXJVc2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2hlbHBlcnMvZ2V0Um9sZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9oZWxwZXJzL2lzRW1haWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9oZWxwZXJzL3VwZGF0ZVBhZ2VUaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2hvb2tzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvaG9va3MvdXNlU2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcGFnZXMvUHJvamVjdERldGFpbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wYWdlcy9Qcm9qZWN0T3ZlcnZpZXcuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcGFnZXMvUHJvamVjdFJldmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJBbGVydCIsImVsIiwiRE9NIiwidG9nZ2xlIiwicXVlcnlTZWxlY3RvciIsIm9uSW5pdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsIm9wYWNpdHkiLCJ2aXNpYmlsaXR5IiwidHJhbnNmb3JtIiwiYWxlcnROb2RlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJub2RlIiwiY2xpZW50IiwiUXVlcnlDbGllbnQiLCJkZWZhdWx0T3B0aW9ucyIsInF1ZXJpZXMiLCJyZWZldGNoT25XaW5kb3dGb2N1cyIsImFwcE5vZGUiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsIiQiLCJvYmplY3RGaXRJbWFnZXMiLCJBcHAiLCJ1c2VTdGF0ZSIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJ1c2VyUm9sZSIsInNldFVzZXJSb2xlIiwidXNlcklkIiwiYXRvYiIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsInVzZVF1ZXJ5IiwiUVVFUllfS0VZUyIsIkNVUlJFTlRfVVNFUiIsImZldGNoQ3VycmVudFVzZXIiLCJvblN1Y2Nlc3MiLCJ1c2VyIiwiZ2V0Um9sZSIsImlzTG9hZGluZyIsInJvdXRlcyIsIm1hcCIsInBhdGgiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJwcm9wcyIsImFkZENvbW1lbnQiLCJmb3JtUmVmIiwicGhhc2VJZCIsInBvc2l0aW9uIiwicGFyYW1zIiwiRm9ybURhdGEiLCJjdXJyZW50IiwiYXBwZW5kIiwieFBlcmNlbnQiLCJ5UGVyY2VudCIsImF4aW9zIiwicG9zdCIsInJlc3VsdCIsImRhdGEiLCJQUk9KRUNUX0JZX1VTRVIiLCJQUk9KRUNUX0JZX0lEIiwiUFJPSkVDVF9JTUFHRV9CWV9JRCIsIkdMT0JBTF9VU0VSUyIsImZldGNoUHJvamVjdHNCeVVzZXIiLCJnZXQiLCJmZXRjaFByb2plY3RCeUlkIiwicHJvamVjdElkIiwiYWRkUHJvamVjdCIsImRlbGV0ZVByb2plY3RzIiwicHJvamVjdElkcyIsImlkIiwibGVhdmVQcm9qZWN0cyIsImVkaXRQcm9qZWN0IiwiZmV0Y2hQcm9qZWN0SW1hZ2VCeUlkIiwicHJvamVjdEltYWdlSWQiLCJhZGRQcm9qZWN0SW1hZ2VzIiwiaW1hZ2VzIiwiaW1hZ2UiLCJkZWxldGVQcm9qZWN0SW1hZ2VzIiwicHJvamVjdEltYWdlSWRzIiwiZWRpdFByb2plY3RJbWFnZSIsInVybCIsImZldGNoR29iYWxVc2VycyIsImFkZFVzZXIiLCJlbWFpbCIsImRlbGV0ZVVzZXIiLCJCb3giLCJ0aXRsZSIsInN1YnRpdGxlIiwiU3VidGl0bGVDb21wb25lbnQiLCJib3hPcGVuIiwidG9nZ2xlQm94IiwiY2hpbGRyZW4iLCJyZW5kZXJPbkJvZHkiLCJib3hSZWYiLCJleHRlbnNpb25DbGFzc2VzIiwiYW5pbWF0ZSIsImxlZnQiLCJ0b3AiLCJhbmltYXRpb24iLCJGQURFX0lOX1VQIiwiZHVyYXRpb24iLCJGQURFX0lOIiwiY2xvc2VJY29uIiwiY3JlYXRlUG9ydGFsIiwiYm9keSIsIkRyb3B6b25lIiwicG9zaXRpdGlvbiIsInF1ZXJ5Q2xpZW50IiwidXNlUXVlcnlDbGllbnQiLCJ1c2VEcm9wem9uZSIsImFjY2VwdCIsIm5vQ2xpY2siLCJvbkRyb3AiLCJhY2NlcHRlZEZpbGVzIiwidXBkYXRlUHJvamVjdEltYWdlcyIsImdldFJvb3RQcm9wcyIsImdldElucHV0UHJvcHMiLCJpc0RyYWdBY3RpdmUiLCJhZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24iLCJ1c2VNdXRhdGlvbiIsImludmFsaWRhdGVRdWVyaWVzIiwiZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uIiwiYWN0aW9uIiwibXV0YXRlIiwiaXNQYXJlbnREcmFnQWN0aXZlIiwiRHJvcHpvbmVJbm5lciIsImFkZEltYWdlTG9hZGluZyIsIm5vRHJhZ0V2ZW50c0J1YmJsaW5nIiwidXBsb2FkSW1hZ2VJY29uIiwiU0NBTEVfRkFERSIsImxvYWRlckNsYXNzZXMiLCJhZGRJbWFnZUljb24iLCJMb2FkaW5nV3JhcHBlciIsImxvYWRpbmciLCJsb2FkZXJTaXplIiwiY2xhc3NlcyIsImRlZmF1bHRDbGFzc2VzIiwiTW9kYWwiLCJ0b2dnbGVNb2RhbCIsImRvbUVsZW1lbnQiLCJ2YXJpYW50IiwiVFJBTlNGT1JNX1VQIiwiUGFnZUxvYWRlciIsIkVBU0UiLCJpbml0aWFsIiwiZXhpdCIsInRyYW5zaXRpb24iLCJlYXNlIiwieSIsInR5cGUiLCJkYW1waW5nIiwic3RpZmZuZXNzIiwic2NhbGUiLCJTVEFHR0VSX1VQIiwiaW5kZXgiLCJkZWxheSIsIlNUQUdHRVJfTEVGVCIsIngiLCJBY3Rpb25NZW51Iiwic2VsZWN0ZWQiLCJyZXNldFNlbGVjdGVkIiwiYWN0aW9ucyIsInVzZUNvbnRleHQiLCJTdGF0aWNDb250ZXh0IiwibGVuZ3RoIiwiYWN0aW9uSW5kZXgiLCJ0aGVtZSIsImhhc1Blcm1pc3Npb24iLCJpY29uIiwiaWNvblNpemUiLCJtdXRhdGlvbiIsImluY2x1ZGVzIiwiRWRpdGFibGUiLCJpbnB1dFR5cGUiLCJyZXN0Iiwic2V0Qm94T3BlbiIsImVkaXRJY29uIiwiRWRpdGFibGVCb2R5IiwiY29udGVudCIsIm11dGF0aW9uSWQiLCJtdXRhdGlvbk9uU3VjY2VzcyIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VSZWYiLCJpbnB1dFJlZiIsInVzZUVmZmVjdCIsInNlbGVjdCIsImVkaXRNdXRhdGlvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJQcm9qZWN0RGV0YWlsSGVhZGVyIiwiZGVzY3JpcHRpb24iLCJ1c2VycyIsImF1dGhvciIsInByb2plY3QiLCJzdGF0aWNDb250ZXh0IiwiUHJvamVjdERldGFpbEltYWdlIiwicHJvamVjdEltYWdlIiwidXBkYXRlU2VsZWN0ZWQiLCJwaGFzZXMiLCJjaGVja0ljb24iLCJQcm9qZWN0RGV0YWlsSW1hZ2VzIiwicHJvamVjdEltYWdlcyIsInVzZVNlbGVjdGlvbiIsImRlbGV0ZUljb24iLCJJbWFnZXMiLCJwcm9qZWN0SW1hZ2VJbmRleCIsIlByb2plY3QiLCJsYXlvdXQiLCJQcm9qZWN0QWRkIiwic2V0TmV3UHJvamVjdElkIiwic2V0UHJvamVjdElkIiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwiZW5hYmxlZCIsImFkZE11dGF0aW9uIiwiaW52YWxpZGF0ZVByb2plY3QiLCJzZXRUaW1lb3V0IiwidXBkYXRlUHJvamVjdCIsImFkZFByb2plY3RJY29uIiwiUHJvamVjdEltYWdlIiwiUHJvamVjdE1vZGFsIiwiRHJvcHpvbmVJbWFnZSIsInN0b3BQcm9wYWdhdGlvbiIsIlByb2plY3RSZXN1bHRzIiwicHJvamVjdHMiLCJuZXdQcm9qZWN0SWQiLCJsZWF2ZVByb2plY3RzTXV0YXRpb24iLCJkZWxldGVQcm9qZWN0c011dGF0aW9uIiwibGVhdmVJY29uIiwiYXJjaGl2ZUljb24iLCJmaWx0ZXIiLCJwcm9qZWN0SW5kZXgiLCJjdXJzb3JPZmZzZXQiLCJQcm9qZWN0UmV2aWV3Q2FudmFzIiwiY29tbWVudHMiLCJyZXZpZXdSZWYiLCJtYXJrZXJQb3MiLCJzZXRNYXJrZXJQb3MiLCJwb3NNYXJrZXIiLCJjbGllbnRYIiwiY2xpZW50WSIsInJldmlld1BvcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiY29tbWVudCIsImNvbW1lbnRJbmRleCIsIlByb2plY3RSZXZpZXdDb21tZW50IiwidG9nZ2xlQ29tbWVudCIsIkNvbW1lbnQiLCJ1c2VybmFtZSIsInRyYW5zZm9ybWVkUG9zIiwic2V0VHJhbnNmb3JtZWRQb3MiLCJjYWxjQm94UG9zIiwiUHJvamVjdFJldmlld0NvbW1lbnRCb3giLCJhZGRDb21tZW50TXV0YXRpb24iLCJwYXJzZUludCIsIlByb2plY3RSZXZpZXdIZWFkZXIiLCJQcm9qZWN0UmV2aWV3TWFya2VyIiwidXNlckNvbG9yIiwiVXNlckFkZCIsImFkZFVzZXJJY29uIiwiVXNlckFkZFNlYXJjaCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJmb2N1c2VkVXNlciIsInNldEZvY3VzZWRVc2VyIiwiZ2xvYmFsVXNlcnMiLCJnbG9iYWxVc2Vyc0xvYWRpbmciLCJmaWx0ZXJlZFVzZXJzIiwiZmlsdGVyVXNlcnMiLCJxdWVyeVJlZiIsImFkZFVzZXJNdXRhdGlvbiIsImhhbmRsZUNoYW5nZSIsImhhbmRsZU9uS2V5RG93biIsImtleSIsImlzRW1haWwiLCJoYW5kbGVDbGljayIsInVzZXJNdXRhdGlvbkxvYWRpbmciLCJVc2VyQWRkU2VhcmNoUmVzdWx0cyIsInJlc3VsdHMiLCJuZXdVc2VyIiwidXNlckluZGV4IiwiVXNlciIsInNpemUiLCJpc0F1dGhvciIsImpvaW4iLCJkZWxldGVVc2VyTXV0YXRpb24iLCJzdGFySWNvbiIsIlVzZXJBdmF0YXIiLCJ1c2VySW5pdGlhbHMiLCJzcGxpdCIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsIlVzZXJJbmZvIiwiVXNlclNlbGVjdCIsImlzRm9jdXNlZCIsImhhbmRsZVN0YXR1cyIsIlVzZXJzIiwic2xpY2VBbW91bnQiLCJJbmZpbml0eSIsInNsaWNlIiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiQnV0dG9uIiwib25DbGljayIsIm1hcmtlclNwYWNlciIsIm1hcmtlclNpemUiLCJvZmZzZXQiLCJOdW1iZXIiLCJib3hXaWR0aCIsImJveEhlaWdodCIsInNjcmVlbldpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImJveFBlcmNlbnRXaWR0aCIsInNjcmVlbkhlaWdodCIsImlubmVySGVpZ2h0IiwiYm94UGVyY2VudEhlaWdodCIsImxvd2VyUXVlcnkiLCJ0b0xvd2VyQ2FzZSIsImV4aXN0aW5nVXNlcnNCeUVtYWlsIiwiVVNFUl9ST0xFUyIsIlJPTEVfQURNSU4iLCJST0xFX1VTRVIiLCJST0xFX1VTRVJfQkFTSUMiLCJyb2xlcyIsInRlc3QiLCJ1cGRhdGVQYWdlVGl0bGUiLCJzZXRTZWxlY3RlZCIsInNlbGVjdGVkSWQiLCJQcm9qZWN0RGV0YWlsIiwidXNlUGFyYW1zIiwiUHJvamVjdE92ZXJ2aWV3IiwiUHJvamVjdFJldmlldyIsIm5hbWUiLCJwYXJzbGV5Q29uZmlnIiwiZXJyb3JDbGFz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RDtBQUFrQnBCLGFBQVMsRUFBVEE7QUFBbEIsa0JBQ0MsMkRBQUMsOEVBQUQsRUFBeUJvQixJQUF6QixDQURELGVBRUMsMkRBQUMsOEVBQUQsa0NBQThCQSxJQUE5QjtBQUFvQ2dCLGtCQUFjLEVBQWRBO0FBQXBDLEtBRkQsQ0FERDtBQU1BLEM7Ozs7Ozs7Ozs7OztBQ3JDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQU1uQyxNQUFNLEdBQUcsQ0FDZDtBQUNDMlMsTUFBSSxFQUFFLGtCQURQO0FBRUN6UyxNQUFJLEVBQUUsV0FGUDtBQUdDRSxXQUFTLEVBQUVxUyxzREFBZUE7QUFIM0IsQ0FEYyxFQU1kO0FBQ0NFLE1BQUksRUFBRSxnQkFEUDtBQUVDelMsTUFBSSxFQUFFLGVBRlA7QUFHQ0UsV0FBUyxFQUFFbVMsb0RBQWFBO0FBSHpCLENBTmMsRUFXZDtBQUNDSSxNQUFJLEVBQUUsZ0JBRFA7QUFFQ3pTLE1BQUksRUFBRSwwQkFGUDtBQUdDRSxXQUFTLEVBQUVzUyxvREFBYUE7QUFIekIsQ0FYYyxDQUFmO0FBa0JlMVMscUVBQWYsRTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsSUFBTTRTLGFBQWEsR0FBRztBQUNsQkMsWUFBVSxFQUFFLFVBRE07QUFFbEJDLFVBQVEsRUFBRSxvR0FGUTtBQUdsQkMsY0FBWSxFQUFFO0FBSEksQ0FBdEI7QUFNQXBVLDZDQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QnFVLE9BQTVCLENBQW9DSixhQUFwQyxFOzs7Ozs7Ozs7OztBQ1RBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL2FwcC9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9hc3NldHMvYXBwL2pzL21haW4uanNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hZGRfaW1hZ2Uuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FkZF9wcm9qZWN0LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hZGRfdXNlci5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYXJjaGl2ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY2hlY2suc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Nsb3NlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9kZWxldGUuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2VkaXQuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2xlYXZlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9zdGFyLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy91cGxvYWQuc3ZnXCI7IiwiY2xhc3MgQWxlcnQge1xuICAgIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgICAgIHRoaXMuRE9NID0geyBlbCB9O1xuICAgICAgICB0aGlzLkRPTS50b2dnbGUgPSB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKFwiLmFsZXJ0X19idG5cIik7XG5cbiAgICAgICAgdGhpcy5vbkluaXQoKTtcbiAgICB9XG4gICAgb25Jbml0KCkge1xuICAgICAgICB0aGlzLkRPTS50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMudG9nZ2xlKCkpO1xuICAgIH1cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuRE9NLmVsLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLkRPTS5lbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgdGhpcy5ET00uZWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDEwMCUpXCI7XG4gICAgfVxufVxuXG5jb25zdCBhbGVydE5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFsZXJ0XVwiKTtcblsuLi5hbGVydE5vZGVzXS5mb3JFYWNoKChub2RlKSA9PiBuZXcgQWxlcnQobm9kZSkpO1xuIiwiLy8gQ1NTXG5pbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcblxuLy8gUG9sbHlmaWxzXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5cbi8vIENvcmVcbmltcG9ydCAnLi92YWxpZGF0aW9uJztcbmltcG9ydCAnLi9hbGVydCc7XG5cbi8vIFBsdWdpbnNcbmltcG9ydCAnLi9vYmplY3RmaXQnO1xuXG4vKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IEFwcCBmcm9tICcuL3JlYWN0L0FwcCc7XG5cbi8qIENsaWVudCAqL1xuY29uc3QgY2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KHtcblx0ZGVmYXVsdE9wdGlvbnM6IHtcblx0XHRxdWVyaWVzOiB7XG5cdFx0XHRyZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXG5cdFx0fSxcblx0fSxcbn0pO1xuXG4vKiBSZW5kZXIgKi9cbmNvbnN0IGFwcE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5pZiAoYXBwTm9kZSAhPT0gbnVsbCkge1xuXHRyZW5kZXIoXG5cdFx0PFF1ZXJ5Q2xpZW50UHJvdmlkZXIgey4uLnsgY2xpZW50IH19PlxuXHRcdFx0PEFwcCAvPlxuXHRcdDwvUXVlcnlDbGllbnRQcm92aWRlcj4sXG5cdFx0YXBwTm9kZVxuXHQpO1xufVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBvYmplY3RGaXRJbWFnZXMgZnJvbSAnb2JqZWN0LWZpdC1pbWFnZXMnO1xuXG4kKGZ1bmN0aW9uKCkge1xuICAgIG9iamVjdEZpdEltYWdlcygpO1xufSk7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFN3aXRjaCwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcbmltcG9ydCB7IFBhZ2VMb2FkZXIgfSBmcm9tICcuL2NvbW1vbic7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4vY29udGV4dCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZmV0Y2hDdXJyZW50VXNlciwgUVVFUllfS0VZUyB9IGZyb20gJy4vYXBpJztcblxuLyogSGVscGVycyAqL1xuaW1wb3J0IHsgZ2V0Um9sZSB9IGZyb20gJy4vaGVscGVycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZShbXSk7XG5cdGNvbnN0IFt1c2VyUm9sZSwgc2V0VXNlclJvbGVdID0gdXNlU3RhdGUoW10pO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB1c2VySWQgPSBhdG9iKGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpKTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgaXNMb2FkaW5nIH0gPSB1c2VRdWVyeShRVUVSWV9LRVlTLkNVUlJFTlRfVVNFUiwgKCkgPT4gZmV0Y2hDdXJyZW50VXNlcih7IHVzZXJJZCB9KSwge1xuXHRcdG9uU3VjY2VzczogKHVzZXIpID0+IHtcblx0XHRcdHNldEN1cnJlbnRVc2VyKHVzZXIpO1xuXHRcdFx0c2V0VXNlclJvbGUoZ2V0Um9sZSh1c2VyKSk7XG5cdFx0fSxcblx0fSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PFJvdXRlcj5cblx0XHRcdDxTd2l0Y2g+XG5cdFx0XHRcdDxTdGF0aWNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGN1cnJlbnRVc2VyLCB1c2VyUm9sZSB9fT5cblx0XHRcdFx0XHQ8UGFnZUxvYWRlciB7Li4ueyBpc0xvYWRpbmcgfX0+XG5cdFx0XHRcdFx0XHR7cm91dGVzLm1hcCgoeyBwYXRoLCBjb21wb25lbnQ6IENvbXBvbmVudCwgcHJvcHMgfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8Um91dGUga2V5PXtwYXRofSBwYXRoPXtwYXRofSBleGFjdD5cblx0XHRcdFx0XHRcdFx0XHQ8Q29tcG9uZW50IHsuLi57IC4uLnByb3BzIH19IC8+XG5cdFx0XHRcdFx0XHRcdDwvUm91dGU+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8L1BhZ2VMb2FkZXI+XG5cdFx0XHRcdDwvU3RhdGljQ29udGV4dC5Qcm92aWRlcj5cblx0XHRcdDwvU3dpdGNoPlxuXHRcdDwvUm91dGVyPlxuXHQpO1xufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLyogQWRkIGNvbW1lbnQgfCBleHBlY3RzIHBoYXNlIGlkLCB1c2VyIGlkIGFuZCBmb3JtUmVmIG9iZWN0ICovXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jICh7IGZvcm1SZWYsIHBoYXNlSWQsIHVzZXJJZCwgcG9zaXRpb24gfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybVJlZi5jdXJyZW50KTtcblx0cGFyYW1zLmFwcGVuZCgndXNlcklkJywgdXNlcklkKTtcblx0cGFyYW1zLmFwcGVuZCgncG9zaXRpb25YJywgcG9zaXRpb24ueFBlcmNlbnQpO1xuXHRwYXJhbXMuYXBwZW5kKCdwb3NpdGlvblknLCBwb3NpdGlvbi55UGVyY2VudCk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9jb21tZW50cy9hZGQvJHtwaGFzZUlkfWAsIHBhcmFtcyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9wcm9qZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vcHJvamVjdEltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5cbmV4cG9ydCBjb25zdCBRVUVSWV9LRVlTID0ge1xuXHRDVVJSRU5UX1VTRVI6ICdjdXJyZW50X3VzZXInLFxuXHRQUk9KRUNUX0JZX1VTRVI6ICdwcm9qZWN0X2J5X3VzZXInLFxuXHRQUk9KRUNUX0JZX0lEOiAncHJvamVjdF9ieV9pZCcsXG5cdFBST0pFQ1RfSU1BR0VfQllfSUQ6ICdwcm9qZWN0X2ltYWdlX2J5X2lkJyxcblx0R0xPQkFMX1VTRVJTOiAnZ2xvYmFsX3VzZXJzJyxcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBGZXRjaCBwcm9qZWN0cyBieSB1c2VyIHwgZXhwZWN0cyB1c2VyIGlkICovXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9qZWN0c0J5VXNlciA9IGFzeW5jICh7IHVzZXJJZCB9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9qZWN0cy9nZXQvJHt1c2VySWR9YCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBGZXRjaCBwcm9qZWN0cyBieSBpZCB8IGV4cGVjdHMgcHJvamVjdCBpZCAqL1xuZXhwb3J0IGNvbnN0IGZldGNoUHJvamVjdEJ5SWQgPSBhc3luYyAoeyBwcm9qZWN0SWQgfSkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcHJvamVjdC9nZXQvJHtwcm9qZWN0SWR9YCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBBZGQgcHJvamVjdCAqL1xuZXhwb3J0IGNvbnN0IGFkZFByb2plY3QgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvcHJvamVjdHMvYWRkJyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBEZWxldGUgcHJvamVjdChzKSB8IGV4cGVjdHMgYXJyYXkgb2YgcHJvamVjdElkcyAgKi9cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9qZWN0cyA9IGFzeW5jICh7IHByb2plY3RJZHMgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblx0cHJvamVjdElkcy5mb3JFYWNoKChpZCkgPT4gcGFyYW1zLmFwcGVuZCgncHJvamVjdHNbXScsIGlkKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9kZWxldGVgLCBwYXJhbXMpO1xuXG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBMZWF2ZSBwcm9qZWN0KHMpIHwgZXhwZWN0cyBhcnJheSBvZiBwcm9qZWN0SWRzIGFuZCB1c2VyIGlkICAqL1xuZXhwb3J0IGNvbnN0IGxlYXZlUHJvamVjdHMgPSBhc3luYyAoeyBwcm9qZWN0SWRzLCB1c2VySWQgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblx0cHJvamVjdElkcy5mb3JFYWNoKChpZCkgPT4gcGFyYW1zLmFwcGVuZCgncHJvamVjdHNbXScsIGlkKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9sZWF2ZS8ke3VzZXJJZH1gLCBwYXJhbXMpO1xuXG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBFZGl0IHByb2plY3QgfCBleHBlY3RzIGZvcm1EYXRhIG9iamVjdCBhbmQgcHJvamVjdCBpZCAgKi9cbmV4cG9ydCBjb25zdCBlZGl0UHJvamVjdCA9IGFzeW5jICh7IGZvcm1SZWYsIGlkIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKGZvcm1SZWYuY3VycmVudCk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9lZGl0LyR7aWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBGZXRjaCBwcm9qZWN0SW1hZ2UgYnkgaWQgfCBleHBlY3RzIHByb2plY3QgaW1hZ2UgaWQgKi9cbmV4cG9ydCBjb25zdCBmZXRjaFByb2plY3RJbWFnZUJ5SWQgPSBhc3luYyAoeyBwcm9qZWN0SW1hZ2VJZCB9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9pbWFnZXMvZ2V0LyR7cHJvamVjdEltYWdlSWR9YCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBBZGQgcHJvamVjdEltYWdlKHMpIHwgZXhwZWN0cyBwcm9qZWN0IGlkIGFuZCBhcnJheSBvZiBpbWFnZXMgKGJsb2IpICovXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdEltYWdlcyA9IGFzeW5jICh7IHByb2plY3RJZCwgaW1hZ2VzIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5cdGltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4gcGFyYW1zLmFwcGVuZCgnaW1hZ2VzW10nLCBpbWFnZSkpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvaW1hZ2VzL2FkZC8ke3Byb2plY3RJZH1gLCBwYXJhbXMpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRGVsZXRlIHByb2plY3RJbWFnZShzKSB8IGV4cGVjdHMgcHJvamVjdCBpZCBhbmQgYXJyYXkgb2YgcHJvamVjdEltYWdlSWRzICAqL1xuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3RJbWFnZXMgPSBhc3luYyAoeyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZUlkcyB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuXHRwcm9qZWN0SW1hZ2VJZHMuZm9yRWFjaCgoaWQpID0+IHBhcmFtcy5hcHBlbmQoJ3Byb2plY3RJbWFnZXNbXScsIGlkKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9pbWFnZXMvZGVsZXRlLyR7cHJvamVjdElkfWAsIHBhcmFtcyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBFZGl0IHByb2plY3RJbWFnZSB8IGV4cGVjdHMgZm9ybVJlZiBvYmplY3QgYW5kIHByb2plY3RJbWFnZSBpZCAgKi9cbmV4cG9ydCBjb25zdCBlZGl0UHJvamVjdEltYWdlID0gYXN5bmMgKHsgZm9ybVJlZiwgaWQgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybVJlZi5jdXJyZW50KTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2ltYWdlcy9lZGl0LyR7aWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8qIEZldGNoIGN1cnJlbnQgKGxvZ2dlZCBpbikgdXNlciB8IGV4cGVjdHMgdXNlciBpZCAqL1xuZXhwb3J0IGNvbnN0IGZldGNoQ3VycmVudFVzZXIgPSBhc3luYyAoeyB1c2VySWQgfSkgPT4ge1xuXHRsZXQgdXJsID0gJy9hcGkvdXNlcnMvZ2V0Jztcblx0aWYgKHVzZXJJZCkgdXJsID0gYCR7dXJsfS8ke3VzZXJJZH1gO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRmV0Y2ggYWxsIHVzZXJzIGluIGRiICovXG5leHBvcnQgY29uc3QgZmV0Y2hHb2JhbFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdXNlcnMvZ2V0L2FsbCcpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogQWRkIHVzZXIgdG8gcHJvamVjdCB8IGV4cGVjdHMgcHJvamVjdCBpZCBhbmQgdXNlciBlbWFpbCAqL1xuZXhwb3J0IGNvbnN0IGFkZFVzZXIgPSBhc3luYyAoeyBwcm9qZWN0SWQsIGVtYWlsIH0pID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS91c2Vycy9hZGQvJHtwcm9qZWN0SWR9YCwgeyBlbWFpbCB9KTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIERlbGV0ZSB1c2VyIGZyb20gcHJvamVjdCB8IGV4cGVjdHMgcHJvamVjdCBpZCBhbmQgdXNlciBpZCAqL1xuZXhwb3J0IGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAoeyBwcm9qZWN0SWQsIHVzZXJJZCB9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvdXNlcnMvZGVsZXRlLyR7cHJvamVjdElkfWAsIHsgdXNlcklkIH0pO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4sIEZBREVfSU5fVVAgfSBmcm9tICcuL2FuaW1hdGlvbnMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvdXNlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3goe1xuXHR0aXRsZSxcblx0c3VidGl0bGUsXG5cdFN1YnRpdGxlQ29tcG9uZW50LFxuXHRib3hPcGVuLFxuXHR0b2dnbGVCb3gsXG5cdGNoaWxkcmVuLFxuXHR1c2VyLFxuXHRwb3NpdGlvbiA9IHt9LFxuXHRyZW5kZXJPbkJvZHkgPSB0cnVlLFxuXHRib3hSZWYsXG5cdGV4dGVuc2lvbkNsYXNzZXMsXG5cdGFuaW1hdGUgPSB0cnVlLFxufSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyBsZWZ0ID0gMCwgdG9wID0gMCB9ID0gcG9zaXRpb247XG5cdGNvbnN0IGFuaW1hdGlvbiA9IGFuaW1hdGUgPyB7IC4uLkZBREVfSU5fVVAgfSA6IHt9O1xuXG5cdC8qIFRPRE86IGVzY2FwZSBldmVudCBsaXN0ZW5lciAqL1xuXHRjb25zdCByZW5kZXIgPSAoKSA9PiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdHtib3hPcGVuICYmIChcblx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRyZWY9e2JveFJlZn1cblx0XHRcdFx0XHRsYXlvdXRcblx0XHRcdFx0XHR0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIgfX1cblx0XHRcdFx0XHRjbGFzc05hbWU9e2Bib3ggJHtyZW5kZXJPbkJvZHkgJiYgJ2JveC0tY2VudGVyJ30gJHtleHRlbnNpb25DbGFzc2VzfWB9XG5cdFx0XHRcdFx0c3R5bGU9e3sgJy0tbGVmdCc6IGxlZnQsICctLXRvcCc6IHRvcCB9fT5cblx0XHRcdFx0XHR7cmVuZGVyT25Cb2R5ICYmIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImJveC1vdmVybGF5XCIgey4uLkZBREVfSU59IG9uQ2xpY2s9e3RvZ2dsZUJveH0gLz59XG5cdFx0XHRcdFx0PG1vdGlvbi5kaXYga2V5PVwiYm94LWNvbnRlbnRcIiBjbGFzc05hbWU9XCJib3hfX2NvbnRlbnQgYm9yZGVyIHAtNVwiIHsuLi5hbmltYXRpb259PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hfX2hlYWRlciBkLWZsZXggYWxpZ24taXRlbXMtc3RhcnRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3VzZXIgJiYgPFVzZXIgey4uLnsgdXNlciB9fSBzaXplPVwieGxcIiAvPn1cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGQtZmxleCBmbGV4LWNvbHVtbiAke3VzZXIgJiYgJ21sLTMnfWB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0tbGcgbWItMFwiPnt0aXRsZX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHR7KFN1YnRpdGxlQ29tcG9uZW50IHx8IHN1YnRpdGxlKSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTYwIG1iLTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7U3VidGl0bGVDb21wb25lbnQgPyA8U3VidGl0bGVDb21wb25lbnQgLz4gOiBzdWJ0aXRsZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Nsb3NlIGJ0biBidG4tbGluayBtbC1hdXRvXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVCb3h9PlxuXHRcdFx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xMlwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hfX2JvZHkgZC1mbGV4IG10LTRcIj57Y2hpbGRyZW59PC9kaXY+XG5cdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQpfVxuXHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHQpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRpZiAocmVuZGVyT25Cb2R5KSB7XG5cdFx0cmV0dXJuIGNyZWF0ZVBvcnRhbChyZW5kZXIoKSwgZG9jdW1lbnQuYm9keSk7XG5cdH1cblxuXHRyZXR1cm4gcmVuZGVyKCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSAncmVhY3QtZHJvcHpvbmUnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkSW1hZ2VJY29uIGZyb20gJ2ljb25zL2FkZF9pbWFnZS5zdmcnO1xuaW1wb3J0IHVwbG9hZEltYWdlSWNvbiBmcm9tICdpY29ucy91cGxvYWQuc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuLyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNDQUxFX0ZBREUsIEZBREVfSU4gfSBmcm9tICcuL2FuaW1hdGlvbnMnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGFkZFByb2plY3RJbWFnZXMsIGRlbGV0ZVByb2plY3RJbWFnZXMsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wem9uZSh7IHByb2plY3RJZCwgcG9zaXRpdGlvbiA9ICdsZWZ0JywgY2hpbGRyZW4gfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0Y29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSB9ID0gdXNlRHJvcHpvbmUoe1xuXHRcdGFjY2VwdDogJ2ltYWdlLyonLFxuXHRcdG5vQ2xpY2s6IHRydWUsXG5cdFx0b25Ecm9wOiAoYWNjZXB0ZWRGaWxlcykgPT4gdXBkYXRlUHJvamVjdEltYWdlcygnYWRkJywgeyBpbWFnZXM6IGFjY2VwdGVkRmlsZXMgfSksXG5cdH0pO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBhZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24gPSB1c2VNdXRhdGlvbihhZGRQcm9qZWN0SW1hZ2VzLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKSxcblx0fSk7XG5cblx0Y29uc3QgZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlUHJvamVjdEltYWdlcywge1xuXHRcdG9uU3VjY2VzczogKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSksXG5cdH0pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB1cGRhdGVQcm9qZWN0SW1hZ2VzID0gKGFjdGlvbiwgcHJvcHMpID0+IHtcblx0XHRpZiAoYWN0aW9uID09PSAnYWRkJykgYWRkUHJvamVjdEltYWdlc011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgLi4ucHJvcHMgfSk7XG5cdFx0aWYgKGFjdGlvbiA9PT0gJ2RlbGV0ZScpIGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQsIC4uLnByb3BzIH0pO1xuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZHJvcHpvbmVcIiB7Li4uZ2V0Um9vdFByb3BzKCl9PlxuXHRcdFx0PGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG5cdFx0XHQ8RHJvcHpvbmVJbm5lclxuXHRcdFx0XHRhZGRJbWFnZUxvYWRpbmc9e2FkZFByb2plY3RJbWFnZXNNdXRhdGlvbi5pc0xvYWRpbmd9XG5cdFx0XHRcdHsuLi57IHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzUGFyZW50RHJhZ0FjdGl2ZTogaXNEcmFnQWN0aXZlLCBwb3NpdGl0aW9uIH19XG5cdFx0XHQvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LS1lcXVhbGl6ZWQgZ3V0dGVycy01XCI+XG5cdFx0XHRcdHtjaGlsZHJlbih7IHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzTG9hZGluZzogZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uLmlzTG9hZGluZyB9KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG4vKiBJbm5lciBkcm9wem9uZSAqL1xuY29uc3QgRHJvcHpvbmVJbm5lciA9ICh7IGFkZEltYWdlTG9hZGluZywgdXBkYXRlUHJvamVjdEltYWdlcywgaXNQYXJlbnREcmFnQWN0aXZlLCBwb3NpdGl0aW9uIH0pID0+IHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSB9ID0gdXNlRHJvcHpvbmUoe1xuXHRcdGFjY2VwdDogJ2ltYWdlLyonLFxuXHRcdG5vRHJhZ0V2ZW50c0J1YmJsaW5nOiB0cnVlLFxuXHRcdG9uRHJvcDogKGFjY2VwdGVkRmlsZXMpID0+IHVwZGF0ZVByb2plY3RJbWFnZXMoJ2FkZCcsIHsgaW1hZ2VzOiBhY2NlcHRlZEZpbGVzIH0pLFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3B6b25lXCIgey4uLmdldFJvb3RQcm9wcygpfT5cblx0XHRcdDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0eyhpc0RyYWdBY3RpdmUgfHwgaXNQYXJlbnREcmFnQWN0aXZlKSAmJiAoXG5cdFx0XHRcdFx0PG1vdGlvbi5kaXYgey4uLkZBREVfSU59IGNsYXNzTmFtZT1cImRyb3B6b25lX19vdmVybGF5XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImljb24td3JhcHBlciBpY29uLXdyYXBwZXItLXNlY29uZGFyeVwiIHN0eWxlPXt7ICctLXNpemUnOiA3NSB9fT5cblx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTMwIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXt1cGxvYWRJbWFnZUljb259IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDxtb3Rpb24uYnV0dG9uXG5cdFx0XHRcdHsuLi5TQ0FMRV9GQURFfVxuXHRcdFx0XHRrZXk9XCJhZGQtcHJvamVjdFwiXG5cdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRjbGFzc05hbWU9e2BpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1pbnRlcmFjdGl2ZSBpY29uLXdyYXBwZXItLXNlY29uZGFyeSBidG4gYnRuLWxpbmsgYnRuLS1hZGQgYnRuLS1hZGQtJHtwb3NpdGl0aW9ufWB9XG5cdFx0XHRcdHN0eWxlPXt7ICctLXNpemUnOiA3NSB9fT5cblx0XHRcdFx0PExvYWRpbmdXcmFwcGVyXG5cdFx0XHRcdFx0bG9hZGluZz17YWRkSW1hZ2VMb2FkaW5nfVxuXHRcdFx0XHRcdGNsYXNzZXM9e3sgbG9hZGVyQ2xhc3NlczogJ3Bvc2l0aW9uLWFic29sdXRlIGQtZmxleCB0ZXh0LXNlY29uZGFyeScgfX1cblx0XHRcdFx0XHRsb2FkZXJTaXplPXszMH0+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTMwIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXthZGRJbWFnZUljb259IC8+XG5cdFx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0XHQ8L21vdGlvbi5idXR0b24+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNDQUxFX0ZBREUgfSBmcm9tICcuL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nV3JhcHBlcih7IGxvYWRpbmcsIGNoaWxkcmVuLCBsb2FkZXJTaXplID0gNDAsIGNsYXNzZXMgPSB7fSB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IGxvYWRlckNsYXNzZXMgPSAncG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4JywgZGVmYXVsdENsYXNzZXMgPSAnJyB9ID0gY2xhc3NlcztcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfT5cblx0XHRcdHtsb2FkaW5nID8gKFxuXHRcdFx0XHQ8bW90aW9uLmRpdiBrZXk9XCJsb2FkZXJcIiBjbGFzc05hbWU9e2xvYWRlckNsYXNzZXN9IHsuLi5TQ0FMRV9GQURFfT5cblx0XHRcdFx0XHQ8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cImluaGVyaXRcIiBzaXplPXtsb2FkZXJTaXplfSAvPlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8bW90aW9uLmRpdiBrZXk9XCJkZWZhdWx0XCIgY2xhc3NOYW1lPXtkZWZhdWx0Q2xhc3Nlc30gey4uLlNDQUxFX0ZBREV9PlxuXHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0KX1cblx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOLCBUUkFOU0ZPUk1fVVAgfSBmcm9tIFwiLi9hbmltYXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsKHsgdG9nZ2xlTW9kYWwsIGNoaWxkcmVuLCBkb21FbGVtZW50LCB2YXJpYW50ID0gXCJkZWZhdWx0XCIgfSkge1xuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9XCJjdXN0b20tbW9kYWxcIiBjbGFzc05hbWU9e2BjdXN0b20tbW9kYWwgY3VzdG9tLW1vZGFsLS0ke3ZhcmlhbnR9YH0+XG4gICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX292ZXJsYXlcIiBvbkNsaWNrPXt0b2dnbGVNb2RhbH0gey4uLkZBREVfSU59IC8+XG4gICAgICAgICAgICA8bW90aW9uLmFydGljbGUga2V5PVwiY3VzdG9tLW1vZGFsX19jb250ZW50XCIgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19jb250ZW50XCIgey4uLlRSQU5TRk9STV9VUH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgZC1mbGV4IGZsZXgtZ3Jvdy0xXCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uYXJ0aWNsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIGlmIChkb21FbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwocmVuZGVyKCksIGRvbUVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiByZW5kZXIoKTtcbn1cbiIsIi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VMb2FkZXIoeyBpc0xvYWRpbmcsIGNoaWxkcmVuIH0pIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdHtpc0xvYWRpbmcgPyAoXG5cdFx0XHRcdDxtb3Rpb24uZGl2IHsuLi5GQURFX0lOfT5cblx0XHRcdFx0XHQ8TGluZWFyUHJvZ3Jlc3MgY29sb3I9XCJzZWNvbmRhcnlcIiAvPlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8ZGl2IGtleT1cImNoaWxkcmVuXCI+e2NoaWxkcmVufTwvZGl2PlxuXHRcdFx0KX1cblx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0KTtcbn1cbiIsImNvbnN0IEVBU0UgPSBbMC42NSwgMCwgMC4zNSwgMV07XG5cbmNvbnN0IEZBREVfSU4gPSB7XG5cdGluaXRpYWw6IHtcblx0XHRvcGFjaXR5OiAwLFxuXHR9LFxuXHRhbmltYXRlOiB7XG5cdFx0b3BhY2l0eTogMSxcblx0fSxcblx0ZXhpdDoge1xuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdHRyYW5zaXRpb246IHtcblx0XHRlYXNlOiBFQVNFLFxuXHRcdGR1cmF0aW9uOiAwLjIsXG5cdH0sXG59O1xuXG5jb25zdCBGQURFX0lOX1VQID0ge1xuXHRpbml0aWFsOiB7XG5cdFx0eTogMjAwLFxuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdGFuaW1hdGU6IHtcblx0XHR5OiAwLFxuXHRcdG9wYWNpdHk6IDEsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0Mixcblx0XHRcdHN0aWZmbmVzczogODAwLFxuXHRcdH0sXG5cdH0sXG5cdGV4aXQ6IHtcblx0XHR5OiAyMDAsXG5cdFx0b3BhY2l0eTogMCxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3ByaW5nJyxcblx0XHRcdGRhbXBpbmc6IDQyLFxuXHRcdFx0c3RpZmZuZXNzOiAxMjAwLFxuXHRcdH0sXG5cdH0sXG59O1xuXG5jb25zdCBUUkFOU0ZPUk1fVVAgPSB7XG5cdGluaXRpYWw6IHtcblx0XHR5OiAnMTAwJScsXG5cdH0sXG5cdGFuaW1hdGU6IHtcblx0XHR5OiAnMCUnLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdHR5cGU6ICdzcHJpbmcnLFxuXHRcdFx0ZGFtcGluZzogNDEsXG5cdFx0XHRzdGlmZm5lc3M6IDYwMCxcblx0XHR9LFxuXHR9LFxuXHRleGl0OiB7XG5cdFx0eTogJzEwMCUnLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdHR5cGU6ICdzcHJpbmcnLFxuXHRcdFx0ZGFtcGluZzogNDEsXG5cdFx0XHRzdGlmZm5lc3M6IDEyMDAsXG5cdFx0fSxcblx0fSxcbn07XG5cbmNvbnN0IFNDQUxFX0ZBREUgPSB7XG5cdGluaXRpYWw6IHtcblx0XHRzY2FsZTogMCxcblx0XHRvcGFjaXR5OiAwLFxuXHR9LFxuXHRhbmltYXRlOiB7XG5cdFx0c2NhbGU6IDEsXG5cdFx0b3BhY2l0eTogMSxcblx0fSxcblx0ZXhpdDoge1xuXHRcdHNjYWxlOiAwLFxuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdHRyYW5zaXRpb246IHtcblx0XHRlYXNlOiBFQVNFLFxuXHRcdGR1cmF0aW9uOiAwLjIsXG5cdH0sXG59O1xuXG5jb25zdCBTVEFHR0VSX1VQID0gKGluZGV4ID0gMCkgPT4gKHtcblx0aW5pdGlhbDogeyBvcGFjaXR5OiAwLCB5OiAzNSB9LFxuXHRhbmltYXRlOiB7IG9wYWNpdHk6IDEsIHk6IDAsIHRyYW5zaXRpb246IHsgdHlwZTogJ3NwcmluZycsIGRhbXBpbmc6IDMwLCBzdGlmZm5lc3M6IDQ1MCwgZGVsYXk6IGluZGV4ICogMC4wMzUgfSB9LFxuXHRleGl0OiB7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjI1LCB0cmFuc2l0aW9uOiB7IHR5cGU6ICdzcHJpbmcnLCBkYW1waW5nOiAzMCwgc3RpZmZuZXNzOiA2MDAgfSB9LFxufSk7XG5cbmNvbnN0IFNUQUdHRVJfTEVGVCA9IChpbmRleCA9IDApID0+ICh7XG5cdGluaXRpYWw6IHsgb3BhY2l0eTogMCwgeDogMTAgfSxcblx0YW5pbWF0ZTogeyBvcGFjaXR5OiAxLCB4OiAwLCB0cmFuc2l0aW9uOiB7IHR5cGU6ICdzcHJpbmcnLCBkYW1waW5nOiAzMCwgc3RpZmZuZXNzOiAzMDAsIGRlbGF5OiBpbmRleCAqIDAuMDM1IH0gfSxcblx0ZXhpdDogeyBvcGFjaXR5OiAwLCB4OiAxMCwgdHJhbnNpdGlvbjogeyB0eXBlOiAnc3ByaW5nJywgZGFtcGluZzogMzAsIHN0aWZmbmVzczogNjAwIH0gfSxcbn0pO1xuXG5leHBvcnQgeyBGQURFX0lOLCBGQURFX0lOX1VQLCBUUkFOU0ZPUk1fVVAsIFNDQUxFX0ZBREUsIFNUQUdHRVJfVVAsIFNUQUdHRVJfTEVGVCB9O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBEcm9wem9uZSB9IGZyb20gJy4vRHJvcHpvbmUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RhbCB9IGZyb20gJy4vTW9kYWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb3ggfSBmcm9tICcuL0JveCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExvYWRpbmdXcmFwcGVyIH0gZnJvbSAnLi9Mb2FkaW5nV3JhcHBlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhZ2VMb2FkZXIgfSBmcm9tICcuL1BhZ2VMb2FkZXInO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBUUkFOU0ZPUk1fVVAgfSBmcm9tICcuLi8uLi9jb21tb24vYW5pbWF0aW9ucyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IExvYWRpbmdXcmFwcGVyIH0gZnJvbSAnLi4vLi4vY29tbW9uJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjdGlvbk1lbnUoeyBzZWxlY3RlZCwgcmVzZXRTZWxlY3RlZCwgYWN0aW9ucyB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXYgey4uLlRSQU5TRk9STV9VUH0gY2xhc3NOYW1lPVwiYmFyIGJhci0tcHJvamVjdFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJhcl9fYnRuIGJ0biBidG4tbGluayBkLWlubGluZS1mbGV4IHRleHQtd2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtyZXNldFNlbGVjdGVkfT5cblx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTE0XCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1sLTIgbWItMFwiPntzZWxlY3RlZC5sZW5ndGh9IHNlbGVjdGVkPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gbWwtYXV0b1wiPlxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImJhcl9fbGlzdCBsaXN0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0e2FjdGlvbnMubWFwKFxuXHRcdFx0XHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoZW1lLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNQZXJtaXNzaW9uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uU2l6ZSA9IDEyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtdXRhdGlvbiA9ICgpID0+IHt9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0xvYWRpbmcgPSBmYWxzZSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb25JbmRleFxuXHRcdFx0XHRcdFx0XHRcdCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGhhc1Blcm1pc3Npb24uaW5jbHVkZXModXNlclJvbGUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17YWN0aW9uSW5kZXh9IGNsYXNzTmFtZT1cImxpc3RfX2l0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmFyX19idG4gYnRuIGJ0bi1saW5rIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXttdXRhdGlvbn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS0ke3RoZW1lfSBpY29uLXdyYXBwZXItLWludGVyYWN0aXZlYH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExvYWRpbmdXcmFwcGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkaW5nPXtpc0xvYWRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkZXJTaXplPXsxMn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzZXM9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9hZGVyQ2xhc3NlczogYHBvc2l0aW9uLWFic29sdXRlIGQtZmxleCB0ZXh0LSR7dGhlbWV9YCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdyYXBwZXI9XCJzdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BpY29uIGljb24tLSR7aWNvblNpemV9IHRleHQtJHt0aGVtZX1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2ljb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJidG5fX3RleHQgdGV4dC13aGl0ZSBtbC0yXCI+e3RpdGxlfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEFjdGlvbk1lbnUgfSBmcm9tICcuL0FjdGlvbk1lbnUnO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vY29tbW9uJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgZWRpdEljb24gZnJvbSAnaWNvbnMvZWRpdC5zdmcnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IEVkaXRhYmxlQm9keSBmcm9tICcuL0VkaXRhYmxlQm9keSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRhYmxlKHsgaW5wdXRUeXBlLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtib3hPcGVuLCBzZXRCb3hPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB0aXRsZSA9IGBFZGl0aW5nICR7aW5wdXRUeXBlfWA7XG5cdGNvbnN0IHN1YnRpdGxlID0gYFNhdmUgd2hlbiByZWFkeWA7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZUJveCA9ICgpID0+IHNldEJveE9wZW4oIWJveE9wZW4pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZWRpdGFibGUgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJlZGl0YWJsZV9fY29udGVudFwiPntjaGlsZHJlbn08L2Rpdj5cblx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiAoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZWRpdGFibGVfX3RvZ2dsZSBidG4gYnRuLWxpbmsgaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0tc2Vjb25kYXJ5IGljb24td3JhcHBlci0taW50ZXJhY3RpdmUgc3RyZXRjaGVkLWxpbmsgbWwtM1wiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVCb3h9XG5cdFx0XHRcdFx0XHRzdHlsZT17eyAnLS1zaXplJzogMjUgfX0+XG5cdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTAgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e2VkaXRJY29ufSAvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxCb3ggey4uLnsgdGl0bGUsIHN1YnRpdGxlLCBib3hPcGVuLCB0b2dnbGVCb3ggfX0+XG5cdFx0XHRcdFx0XHQ8RWRpdGFibGVCb2R5IHsuLi57IHRpdGxlLCBpbnB1dFR5cGUsIHRvZ2dsZUJveCwgLi4ucmVzdCB9fSAvPlxuXHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHQ8Lz5cblx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRleHRhcmVhQXV0b3NpemUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIEVsZW1lbnRzICovXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9lbGVtZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRhYmxlQm9keSh7XG5cdHRpdGxlLFxuXHRpbnB1dFR5cGUsXG5cdHRvZ2dsZUJveCxcblx0Y29udGVudCxcblx0bXV0YXRpb24sXG5cdG11dGF0aW9uSWQsXG5cdG11dGF0aW9uT25TdWNjZXNzLFxufSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGNvbnRlbnQpO1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgZm9ybVJlZiA9IHVzZVJlZigpO1xuXHRjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIEVmZmVjdHMgKi9cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoaW5wdXRSZWY/LmN1cnJlbnQpIGlucHV0UmVmPy5jdXJyZW50Py5zZWxlY3QoKTtcblx0fSwgW10pO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBlZGl0TXV0YXRpb24gPSB1c2VNdXRhdGlvbihtdXRhdGlvbiwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0bXV0YXRpb25PblN1Y2Nlc3MoKTtcblx0XHRcdHRvZ2dsZUJveCgpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxmb3JtXG5cdFx0XHRyZWY9e2Zvcm1SZWZ9XG5cdFx0XHRjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtZ3Jvdy0xXCJcblx0XHRcdG9uU3VibWl0PXsoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZWRpdE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYsIGlkOiBtdXRhdGlvbklkIH0pO1xuXHRcdFx0fX0+XG5cdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9e2lucHV0VHlwZX0+XG5cdFx0XHRcdHt0aXRsZX1cblx0XHRcdDwvbGFiZWw+XG5cdFx0XHQ8VGV4dGFyZWFBdXRvc2l6ZVxuXHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIGZvcm0tY29udHJvbC0tdGV4dFwiXG5cdFx0XHRcdGlkPXtpbnB1dFR5cGV9XG5cdFx0XHRcdG5hbWU9e2lucHV0VHlwZX1cblx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBzZXRWYWx1ZSh2YWx1ZSl9XG5cdFx0XHRcdHJlZj17aW5wdXRSZWZ9XG5cdFx0XHQvPlxuXHRcdFx0PEJ1dHRvblxuXHRcdFx0XHR0aXRsZT1cIlNhdmVcIlxuXHRcdFx0XHRleHRlbnNpb25DbGFzc2VzPVwibXQtNCB3LTUwIGp1c3RpZnktY29udGVudC1jZW50ZXJcIlxuXHRcdFx0XHRpc0xvYWRpbmc9e2VkaXRNdXRhdGlvbi5pc0xvYWRpbmd9XG5cdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0Lz5cblx0XHQ8L2Zvcm0+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEVkaXRhYmxlIH0gZnJvbSAnLi9FZGl0YWJsZSc7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlckFkZCB9IGZyb20gJy4uL3VzZXItYWRkJztcbmltcG9ydCB7IFVzZXJzIH0gZnJvbSAnLi4vdXNlcnMnO1xuaW1wb3J0IHsgRWRpdGFibGUgfSBmcm9tICcuLi9lZGl0YWJsZSc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBzdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGVkaXRQcm9qZWN0LCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdERldGFpbEhlYWRlcih7IHRpdGxlLCBkZXNjcmlwdGlvbiwgdXNlcnMsIGlkLCBhdXRob3IsIGVtYWlsIH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHByb2plY3QgPSB7IGlkLCBhdXRob3IsIGVtYWlsIH07XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChzdGF0aWNDb250ZXh0KTtcblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBtdXRhdGlvbk9uU3VjY2VzcyA9ICgpID0+IHtcblx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBpZF0pO1xuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTZcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy02XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiAnZWRpdGFibGUnfSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJgfT5cblx0XHRcdFx0XHQ8RWRpdGFibGVcblx0XHRcdFx0XHRcdGlucHV0VHlwZT1cInRpdGxlXCJcblx0XHRcdFx0XHRcdGNvbnRlbnQ9e3RpdGxlfVxuXHRcdFx0XHRcdFx0bXV0YXRpb249e2VkaXRQcm9qZWN0fVxuXHRcdFx0XHRcdFx0bXV0YXRpb25JZD17aWR9XG5cdFx0XHRcdFx0XHRtdXRhdGlvbk9uU3VjY2Vzcz17bXV0YXRpb25PblN1Y2Nlc3N9PlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImg1IG1iLTAgdGV4dC13aGl0ZVwiPnt0aXRsZSA/IHRpdGxlIDogJ0FkZCBhIG5pY2UgdGl0bGUnfTwvaDE+XG5cdFx0XHRcdFx0PC9FZGl0YWJsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiAnZWRpdGFibGUnfSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJgfT5cblx0XHRcdFx0XHQ8RWRpdGFibGVcblx0XHRcdFx0XHRcdGlucHV0VHlwZT1cImRlc2NyaXB0aW9uXCJcblx0XHRcdFx0XHRcdGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdFx0bXV0YXRpb249e2VkaXRQcm9qZWN0fVxuXHRcdFx0XHRcdFx0bXV0YXRpb25JZD17aWR9XG5cdFx0XHRcdFx0XHRtdXRhdGlvbk9uU3VjY2Vzcz17bXV0YXRpb25PblN1Y2Nlc3N9PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNzAgbWItMFwiPlxuXHRcdFx0XHRcdFx0XHR7ZGVzY3JpcHRpb24gPyAoXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+e2Rlc2NyaXB0aW9ufTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS00MFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e1wiV2hhdCdzIHRoaXMgcHJvamVjdCBhYm91dD8gU2V0IHRoZSBjb250ZXh0LCB0aGUgZ29hbHMsIHRoZSBjb25zdHJhaW50c1wifVxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L0VkaXRhYmxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmUgbWwtYXV0b1wiPlxuXHRcdFx0XHQ8VXNlcnMgey4uLnsgdXNlcnMsIHByb2plY3QgfX0gc2l6ZT1cImxnXCIgLz5cblx0XHRcdFx0e3VzZXJSb2xlID09PSAnYWRtaW4nICYmIDxVc2VyQWRkIHsuLi57IHVzZXJzLCBwcm9qZWN0IH19IC8+fVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEVkaXRhYmxlIH0gZnJvbSAnLi4vZWRpdGFibGUnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjaGVja0ljb24gZnJvbSAnaWNvbnMvY2hlY2suc3ZnJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4uLy4uL2NvbW1vbi9hbmltYXRpb25zJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBlZGl0UHJvamVjdEltYWdlLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdERldGFpbEltYWdlKHsgcHJvamVjdEltYWdlLCBwcm9qZWN0SWQsIHNlbGVjdGVkLCB1cGRhdGVTZWxlY3RlZCB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IGlkOiBwcm9qZWN0SW1hZ2VJZCwgdGl0bGUsIHBoYXNlcyA9IFtdIH0gPSBwcm9qZWN0SW1hZ2U7XG5cdGNvbnN0IHsgaW1hZ2UgfSA9IHBoYXNlc1twaGFzZXMubGVuZ3RoIC0gMV0gfHwge307XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBtdXRhdGlvbk9uU3VjY2VzcyA9ICgpID0+IHtcblx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9e2BjYXJkIGNhcmQtLWxpbmsgY2FyZC0tcHJvZHVjdCAke3NlbGVjdGVkLmluY2x1ZGVzKHByb2plY3RJbWFnZUlkKSAmJiAnaXMtc2VsZWN0ZWQnfWB9PlxuXHRcdFx0PExpbmsgdG89e2AvcHJvamVjdHMvJHtwcm9qZWN0SWR9L3Jldmlldy8ke3Byb2plY3RJbWFnZUlkfSR7bG9jYXRpb24uc2VhcmNofWB9IHRpdGxlPXt0aXRsZX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9faW1hZ2UgYm9yZGVyIG0tMlwiPlxuXHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPXtpbWFnZX0gc3JjU2V0PXtgJHtpbWFnZX0gMnhgfSBhbHQ9e3RpdGxlfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGluaz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG5cdFx0XHRcdDxFZGl0YWJsZVxuXHRcdFx0XHRcdGlucHV0VHlwZT1cInRpdGxlXCJcblx0XHRcdFx0XHRwcm9qZWN0SWQ9e3Byb2plY3RJZH1cblx0XHRcdFx0XHRjb250ZW50PXt0aXRsZX1cblx0XHRcdFx0XHRtdXRhdGlvbj17ZWRpdFByb2plY3RJbWFnZX1cblx0XHRcdFx0XHRtdXRhdGlvbklkPXtwcm9qZWN0SW1hZ2VJZH1cblx0XHRcdFx0XHR7Li4ueyBtdXRhdGlvbk9uU3VjY2VzcyB9fT5cblx0XHRcdFx0XHQ8bW90aW9uLnAgey4uLkZBREVfSU59IGNsYXNzTmFtZT1cIm1iLTBcIj5cblx0XHRcdFx0XHRcdHt0aXRsZX1cblx0XHRcdFx0XHQ8L21vdGlvbi5wPlxuXHRcdFx0XHQ8L0VkaXRhYmxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdFwiPlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FyZF9fc2VsZWN0LXRvZ2dsZVwiXG5cdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0dXBkYXRlU2VsZWN0ZWQocHJvamVjdEltYWdlSWQpO1xuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiY2FyZF9fc2VsZWN0LWljb24gaWNvbiBpY29uLS04XCIgc3JjPXtjaGVja0ljb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9hcnRpY2xlPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTVEFHR0VSX1VQIH0gZnJvbSAnLi4vLi4vY29tbW9uL2FuaW1hdGlvbnMnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgUHJvamVjdERldGFpbEltYWdlIGZyb20gJy4vUHJvamVjdERldGFpbEltYWdlJztcbmltcG9ydCB7IEFjdGlvbk1lbnUgfSBmcm9tICcuLi9hY3Rpb24tbWVudSc7XG5pbXBvcnQgeyBEcm9wem9uZSB9IGZyb20gJy4uLy4uL2NvbW1vbic7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdEltYWdlcywgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0RGV0YWlsSW1hZ2VzKHsgcHJvamVjdEltYWdlcywgcHJvamVjdElkIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQsIHJlc2V0U2VsZWN0ZWQgfSA9IHVzZVNlbGVjdGlvbigpO1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cdGNvbnN0IHsgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGRlbGV0ZVByb2plY3RJbWFnZXMsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0pO1xuXHRcdFx0cmVzZXRTZWxlY3RlZCgpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCBhY3Rpb25zID0gW1xuXHRcdHtcblx0XHRcdHRpdGxlOiAnUmVtb3ZlJyxcblx0XHRcdHRoZW1lOiAnZGFuZ2VyJyxcblx0XHRcdGhhc1Blcm1pc3Npb246IFsnYWRtaW4nXSxcblx0XHRcdGljb246IGRlbGV0ZUljb24sXG5cdFx0XHRpY29uU2l6ZTogMTAsXG5cdFx0XHRtdXRhdGlvbjogKCkgPT4gZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgcHJvamVjdEltYWdlSWRzOiBzZWxlY3RlZCB9KSxcblx0XHRcdGlzTG9hZGluZzogZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uLmlzTG9hZGluZyxcblx0XHR9LFxuXHRdO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZC5sZW5ndGggPiAwICYmICdoYXMtc2VsZWN0aW9ucyd9YH0+XG5cdFx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyA/IChcblx0XHRcdFx0XHQ8RHJvcHpvbmUgey4uLnsgcHJvamVjdElkLCBwcm9qZWN0SW1hZ2VzLCBwb3NpdGl0aW9uOiAncmlnaHQnIH19PlxuXHRcdFx0XHRcdFx0eygpID0+IDxJbWFnZXMgey4uLnsgcHJvamVjdEltYWdlcywgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfX0gLz59XG5cdFx0XHRcdFx0PC9Ecm9wem9uZT5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTVcIj5cblx0XHRcdFx0XHRcdDxJbWFnZXMgey4uLnsgcHJvamVjdEltYWdlcywgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfX0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e3NlbGVjdGVkLmxlbmd0aCA+IDAgJiYgPEFjdGlvbk1lbnUgey4uLnsgc2VsZWN0ZWQsIHJlc2V0U2VsZWN0ZWQsIGFjdGlvbnMgfX0gLz59XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHQ8Lz5cblx0KTtcbn1cblxuY29uc3QgSW1hZ2VzID0gKHsgcHJvamVjdEltYWdlcywgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHR7cHJvamVjdEltYWdlcy5tYXAoKHByb2plY3RJbWFnZSwgcHJvamVjdEltYWdlSW5kZXgpID0+IChcblx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHR7Li4uU1RBR0dFUl9VUChwcm9qZWN0SW1hZ2VJbmRleCl9XG5cdFx0XHRcdFx0a2V5PXtwcm9qZWN0SW1hZ2UuaWR9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC14bC0zIGNvbC14eGwtMlwiXG5cdFx0XHRcdFx0bGF5b3V0PlxuXHRcdFx0XHRcdDxQcm9qZWN0RGV0YWlsSW1hZ2Ugey4uLnsgcHJvamVjdEltYWdlLCBwcm9qZWN0SWQsIHNlbGVjdGVkLCB1cGRhdGVTZWxlY3RlZCB9fSAvPlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQpKX1cblx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0KTtcbn07XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3REZXRhaWxIZWFkZXIgfSBmcm9tICcuL1Byb2plY3REZXRhaWxIZWFkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0RGV0YWlsSW1hZ2VzIH0gZnJvbSAnLi9Qcm9qZWN0RGV0YWlsSW1hZ2VzJztcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQcm9qZWN0SW1hZ2UgfSBmcm9tICcuLyc7XG5pbXBvcnQgeyBVc2VycyB9IGZyb20gJy4uL3VzZXJzJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2hlY2tJY29uIGZyb20gJ2ljb25zL2NoZWNrLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoeyBwcm9qZWN0LCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyB0aXRsZSwgcHJvamVjdEltYWdlcywgdXNlcnMsIGF1dGhvciwgaWQgfSA9IHByb2plY3Q7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PExpbmtcblx0XHRcdHRvPXtgcHJvamVjdHMvJHtpZH0ke2xvY2F0aW9uLnNlYXJjaH1gfVxuXHRcdFx0dGl0bGU9e3RpdGxlfVxuXHRcdFx0Y2xhc3NOYW1lPXtgY2FyZCBjYXJkLS1saW5rIGNhcmQtLXByb2R1Y3QgJHtzZWxlY3RlZC5pbmNsdWRlcyhpZCkgJiYgJ2lzLXNlbGVjdGVkJ31gfT5cblx0XHRcdDxQcm9qZWN0SW1hZ2Ugey4uLnsgcHJvamVjdEltYWdlcyB9fSAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW5cIj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi0yXCI+e3RpdGxlID8gdGl0bGUgOiAnQWRkIGEgbmljZSB0aXRsZSd9PC9wPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PFVzZXJzIHsuLi57IHVzZXJzLCBwcm9qZWN0OiB7IGF1dGhvciB9LCBsYXlvdXQ6ICdtaW5pbWFsJyB9fSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX19zZWxlY3RcIj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC10b2dnbGVcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHVwZGF0ZVNlbGVjdGVkKGlkKTtcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC1pY29uIGljb24gaWNvbi0tOFwiIHNyYz17Y2hlY2tJY29ufSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvTGluaz5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQcm9qZWN0TW9kYWwgfSBmcm9tICcuLyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZFByb2plY3RJY29uIGZyb20gJ2ljb25zL2FkZF9wcm9qZWN0LnN2Zyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgYWRkUHJvamVjdCwgUVVFUllfS0VZUywgZWRpdFByb2plY3QsIGZldGNoUHJvamVjdEJ5SWQgfSBmcm9tICcuLi8uLi9hcGknO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTQ0FMRV9GQURFIH0gZnJvbSAnLi4vLi4vY29tbW9uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0QWRkKHsgc2V0TmV3UHJvamVjdElkIH0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW3Byb2plY3RJZCwgc2V0UHJvamVjdElkXSA9IHVzZVN0YXRlKG51bGwpO1xuXHRjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgZGF0YTogcHJvamVjdCB9ID0gdXNlUXVlcnkoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSwgKCkgPT4gZmV0Y2hQcm9qZWN0QnlJZCh7IHByb2plY3RJZCB9KSwge1xuXHRcdGVuYWJsZWQ6ICEhcHJvamVjdElkLFxuXHR9KTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldE5ld1Byb2plY3RJZChwcm9qZWN0SWQpO1xuXHR9LCBbcHJvamVjdElkXSk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGFkZE11dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkUHJvamVjdCwge1xuXHRcdG9uU3VjY2VzczogKHsgaWQgfSkgPT4gc2V0UHJvamVjdElkKGlkKSxcblx0fSk7XG5cblx0Y29uc3QgZWRpdE11dGF0aW9uID0gdXNlTXV0YXRpb24oZWRpdFByb2plY3QsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IGludmFsaWRhdGVQcm9qZWN0KCksXG5cdH0pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHtcblx0XHRzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbik7XG5cblx0XHQvKiBNdXRhdGUgb24gbW9kYWwgb3BlbiAqL1xuXHRcdGlmICghbW9kYWxPcGVuKSBhZGRNdXRhdGlvbi5tdXRhdGUoKTtcblxuXHRcdC8qIFJlc2V0IGlkIG9uIGNsb3NlIG1vZGFsICovXG5cdFx0aWYgKG1vZGFsT3Blbikge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNldFByb2plY3RJZChudWxsKTtcblx0XHRcdH0sIDI1MCk7XG5cblx0XHRcdGludmFsaWRhdGVQcm9qZWN0KCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHVwZGF0ZVByb2plY3QgPSAoZm9ybVJlZikgPT4gZWRpdE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYsIGlkOiBwcm9qZWN0SWQgfSk7XG5cdGNvbnN0IGludmFsaWRhdGVQcm9qZWN0ID0gKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8bW90aW9uLmJ1dHRvblxuXHRcdFx0XHR7Li4uU0NBTEVfRkFERX1cblx0XHRcdFx0a2V5PVwiYWRkLXByb2plY3RcIlxuXHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0taW50ZXJhY3RpdmUgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnkgYnRuIGJ0bi1saW5rIGJ0bi0tYWRkIGJ0bi0tYWRkLXJpZ2h0XCJcblx0XHRcdFx0c3R5bGU9e3sgJy0tc2l6ZSc6IDc1IH19XG5cdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfT5cblx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTMwIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXthZGRQcm9qZWN0SWNvbn0gLz5cblx0XHRcdDwvbW90aW9uLmJ1dHRvbj5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHttb2RhbE9wZW4gJiYgPFByb2plY3RNb2RhbCB7Li4ueyBwcm9qZWN0LCB1cGRhdGVQcm9qZWN0LCB0b2dnbGVNb2RhbCB9fSAvPn1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZEltYWdlSWNvbiBmcm9tICdpY29ucy9hZGRfaW1hZ2Uuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdEltYWdlKHsgcHJvamVjdEltYWdlcyB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IHBoYXNlcyA9IFtdLCB0aXRsZSB9ID0gcHJvamVjdEltYWdlc1swXSB8fCB7fTtcblx0Y29uc3QgeyBpbWFnZSB9ID0gcGhhc2VzW3BoYXNlcy5sZW5ndGggLSAxXSB8fCB7fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ltYWdlIGJvcmRlciBtLTJcIj5cblx0XHRcdHtpbWFnZSAmJiA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz17aW1hZ2V9IHNyY1NldD17YCR7aW1hZ2V9IDJ4YH0gYWx0PXt0aXRsZX0gLz59XG5cdFx0XHR7IWltYWdlICYmIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS00OCB0ZXh0LW11dGVkLS00MFwiIHNyYz17YWRkSW1hZ2VJY29ufSAvPn1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dGFyZWFBdXRvc2l6ZSc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTW9kYWwsIERyb3B6b25lLCBMb2FkaW5nV3JhcHBlciB9IGZyb20gJy4uLy4uL2NvbW1vbic7XG5pbXBvcnQgeyBVc2VycyB9IGZyb20gJy4uL3VzZXJzJztcbmltcG9ydCB7IFVzZXJBZGQgfSBmcm9tICcuLi91c2VyLWFkZCc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNUQUdHRVJfVVAgfSBmcm9tICcuLi8uLi9jb21tb24vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RNb2RhbCh7IHByb2plY3QgPSB7fSwgdXBkYXRlUHJvamVjdCwgdG9nZ2xlTW9kYWwgfSkge1xuXHQvKiBDb25zdGFudHMgICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJZCA9IG51bGwsIHRpdGxlID0gJycsIHByb2plY3RJbWFnZXMgPSBbXSwgdXNlcnMgPSBbXSB9ID0gcHJvamVjdDtcblxuXHQvKiBSZWZzICovXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8TW9kYWwgey4uLnsgdG9nZ2xlTW9kYWwgfX0gZG9tRWxlbWVudD17ZG9jdW1lbnQuYm9keX0+XG5cdFx0XHQ8Zm9ybVxuXHRcdFx0XHRyZWY9e2Zvcm1SZWZ9XG5cdFx0XHRcdG1ldGhvZD1cIlBPU1RcIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Zvcm1cIlxuXHRcdFx0XHRvblN1Ym1pdD17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0b2dnbGVNb2RhbCgpO1xuXHRcdFx0XHR9fT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2hlYWRlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHB0LTYgcHQtbWQtMTIgcGItM1wiPlxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInByb2plY3RUaXRsZVwiPlxuXHRcdFx0XHRcdFx0e3RpdGxlfVxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLS1jbGVhciB0ZXh0LS14bFwiXG5cdFx0XHRcdFx0XHRpZD1cInByb2plY3RUaXRsZVwiXG5cdFx0XHRcdFx0XHRuYW1lPVwidGl0bGVcIlxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJUaGUgcHJvamVjdCBuYW1lXCJcblx0XHRcdFx0XHRcdG9uQmx1cj17KCkgPT4gdXBkYXRlUHJvamVjdChmb3JtUmVmKX1cblx0XHRcdFx0XHRcdGF1dG9Gb2N1c1xuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Nsb3NlIGJ0biBidG4tbGluayBtbC1hdXRvXCJcblx0XHRcdFx0XHRcdGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcblx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9XCJDbG9zZVwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVNb2RhbH1cblx0XHRcdFx0XHRcdHRhYkluZGV4PVwiLTFcIj5cblx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2JvZHkgcHQtMyBwYi0xMlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtMlwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJwcm9qZWN0RGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHRcdFx0XHR7YFdoYXQncyB0aGlzIHByb2plY3QgYWJvdXQ/YH1cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PFRleHRhcmVhQXV0b3NpemVcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLS10ZXh0IGZvcm0tY29udHJvbC0tY2xlYXIgbWItMTBcIlxuXHRcdFx0XHRcdFx0XHRcdGlkPVwicHJvamVjdERlc2NyaXB0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGVzY3JpcHRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiV2hhdCdzIHRoaXMgcHJvamVjdCBhYm91dD9cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQmx1cj17KCkgPT4gdXBkYXRlUHJvamVjdChmb3JtUmVmKX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmUgbWwtYXV0b1wiPlxuXHRcdFx0XHRcdFx0XHQ8VXNlcnMgey4uLnsgdXNlcnMsIHByb2plY3QgfX0gc2l6ZT1cImxnXCIgLz5cblx0XHRcdFx0XHRcdFx0PFVzZXJBZGQgey4uLnsgdXNlcnMsIHByb2plY3QgfX0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxEcm9wem9uZSB7Li4ueyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZXMgfX0+XG5cdFx0XHRcdFx0XHR7KHsgdXBkYXRlUHJvamVjdEltYWdlcywgaXNMb2FkaW5nIH0pID0+IChcblx0XHRcdFx0XHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0XHRcdFx0XHR7cHJvamVjdEltYWdlcy5tYXAoKHByb2plY3RJbWFnZSwgcHJvamVjdEltYWdlSW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdDxEcm9wem9uZUltYWdlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17cHJvamVjdEltYWdlLmlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ueyBwcm9qZWN0SW1hZ2UsIHByb2plY3RJbWFnZUluZGV4LCB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc0xvYWRpbmcgfX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L0Ryb3B6b25lPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Zvb3RlciBwYi02IHBiLW1kLTEyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0wIHctMTAwXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctMSBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2J0biBidG4gYnRuLWJsb2NrIGJ0bi1zZWNvbmRhcnkgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG1vdGlvbi5zcGFuIGNsYXNzTmFtZT1cImJ0bi10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5TYXZlPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvbW90aW9uLnNwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvTW9kYWw+XG5cdCk7XG59XG5cbmNvbnN0IERyb3B6b25lSW1hZ2UgPSAoeyBwcm9qZWN0SW1hZ2UsIHByb2plY3RJbWFnZUluZGV4LCB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc0xvYWRpbmcgfSkgPT4ge1xuXHRjb25zdCB7IHRpdGxlLCBpZCwgcGhhc2VzID0gW10gfSA9IHByb2plY3RJbWFnZTtcblx0Y29uc3QgeyBpbWFnZSB9ID0gcGhhc2VzW3BoYXNlcy5sZW5ndGggLSAxXSB8fCB7fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRsYXlvdXRcblx0XHRcdHsuLi5TVEFHR0VSX1VQKHByb2plY3RJbWFnZUluZGV4KX1cblx0XHRcdGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtMyBjb2wteHhsLTJcIlxuXHRcdFx0a2V5PXtpZH0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3B6b25lX19jb250YWluZXJcIj5cblx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJkcm9wem9uZV9faW1hZ2UgaW1nLWZsdWlkXCIgc3JjPXtpbWFnZX0gYWx0PXt0aXRsZX0gLz5cblx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBkcm9wem9uZV9faW1hZ2UtZGVsZXRlIHAtMFwiXG5cdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdHVwZGF0ZVByb2plY3RJbWFnZXMoJ2RlbGV0ZScsIHsgcHJvamVjdEltYWdlSWRzOiBbaWRdIH0pO1xuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImRyb3B6b25lX19pbWFnZS1kZWxldGUtaWNvbiBpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1kYW5nZXIgbXgtYXV0b1wiXG5cdFx0XHRcdFx0XHRzdHlsZT17eyAnLS1zaXplJzogNTAgfX0+XG5cdFx0XHRcdFx0XHQ8TG9hZGluZ1dyYXBwZXJcblx0XHRcdFx0XHRcdFx0bG9hZGluZz17aXNMb2FkaW5nfVxuXHRcdFx0XHRcdFx0XHRsb2FkZXJTaXplPXsyMH1cblx0XHRcdFx0XHRcdFx0Y2xhc3Nlcz17e1xuXHRcdFx0XHRcdFx0XHRcdGxvYWRlckNsYXNzZXM6ICdwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXggdGV4dC1kYW5nZXInLFxuXHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTE0IHRleHQtZGFuZ2VyIG10LTBcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cblx0XHRcdFx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLyc7XG5pbXBvcnQgeyBBY3Rpb25NZW51IH0gZnJvbSAnLi4vYWN0aW9uLW1lbnUnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOLCBTVEFHR0VSX1VQIH0gZnJvbSAnLi4vLi4vY29tbW9uL2FuaW1hdGlvbnMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcbmltcG9ydCBsZWF2ZUljb24gZnJvbSAnaWNvbnMvbGVhdmUuc3ZnJztcbmltcG9ydCBhcmNoaXZlSWNvbiBmcm9tICdpY29ucy9hcmNoaXZlLnN2Zyc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdHMsIGxlYXZlUHJvamVjdHMsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJlc3VsdHMoeyBwcm9qZWN0cywgbmV3UHJvamVjdElkIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQsIHJlc2V0U2VsZWN0ZWQgfSA9IHVzZVNlbGVjdGlvbigpO1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGxlYXZlUHJvamVjdHNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGxlYXZlUHJvamVjdHMsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuUFJPSkVDVF9CWV9VU0VSKTtcblx0XHRcdHJlc2V0U2VsZWN0ZWQoKTtcblx0XHR9LFxuXHR9KTtcblxuXHRjb25zdCBkZWxldGVQcm9qZWN0c011dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlUHJvamVjdHMsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuUFJPSkVDVF9CWV9VU0VSKTtcblx0XHRcdHJlc2V0U2VsZWN0ZWQoKTtcblx0XHR9LFxuXHR9KTtcblxuXHRjb25zdCBhY3Rpb25zID0gW1xuXHRcdHtcblx0XHRcdHRpdGxlOiAnTGVhdmUnLFxuXHRcdFx0dGhlbWU6ICd3YXJuaW5nJyxcblx0XHRcdGhhc1Blcm1pc3Npb246IFsndXNlcicsICdiYXNpYyddLFxuXHRcdFx0aWNvbjogbGVhdmVJY29uLFxuXHRcdFx0bXV0YXRpb246ICgpID0+IGxlYXZlUHJvamVjdHNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWRzOiBzZWxlY3RlZCwgdXNlcklkOiBjdXJyZW50VXNlci5pZCB9KSxcblx0XHRcdGlzTG9hZGluZzogbGVhdmVQcm9qZWN0c011dGF0aW9uLmlzTG9hZGluZyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiAnQXJjaGl2ZScsXG5cdFx0XHR0aGVtZTogJ3NlY29uZGFyeScsXG5cdFx0XHRoYXNQZXJtaXNzaW9uOiBbJ2FkbWluJ10sXG5cdFx0XHRpY29uOiBhcmNoaXZlSWNvbixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiAnUmVtb3ZlJyxcblx0XHRcdHRoZW1lOiAnZGFuZ2VyJyxcblx0XHRcdGhhc1Blcm1pc3Npb246IFsnYWRtaW4nXSxcblx0XHRcdGljb246IGNsb3NlSWNvbixcblx0XHRcdGljb25TaXplOiAxMCxcblx0XHRcdG11dGF0aW9uOiAoKSA9PiBkZWxldGVQcm9qZWN0c011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZHM6IHNlbGVjdGVkIH0pLFxuXHRcdFx0aXNMb2FkaW5nOiBkZWxldGVQcm9qZWN0c011dGF0aW9uLmlzTG9hZGluZyxcblx0XHR9LFxuXHRdO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8aDEgY2xhc3NOYW1lPVwiaDUgdGV4dC13aGl0ZSBtYi02XCI+WW91ciBwcm9qZWN0czwvaDE+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7cHJvamVjdHMubGVuZ3RoID09PSAwICYmIChcblx0XHRcdFx0XHQ8bW90aW9uLnAgey4uLkZBREVfSU59IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbWItMCBwb3NpdGlvbi1hYnNvbHV0ZVwiPlxuXHRcdFx0XHRcdFx0e2BZb3UgZG9uJ3QgaGF2ZSBhbnkgcHJvamVjdHMgeWV0YH1cblx0XHRcdFx0XHQ8L21vdGlvbi5wPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YHJvdyByb3ctLWVxdWFsaXplZCBndXR0ZXJzLTUgJHtzZWxlY3RlZC5sZW5ndGggPiAwICYmICdoYXMtc2VsZWN0aW9ucyd9YH0+XG5cdFx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdFx0e3Byb2plY3RzXG5cdFx0XHRcdFx0XHQuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkICE9PSBuZXdQcm9qZWN0SWQpXG5cdFx0XHRcdFx0XHQubWFwKChwcm9qZWN0LCBwcm9qZWN0SW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRcdFx0XHR7Li4uU1RBR0dFUl9VUChwcm9qZWN0SW5kZXgpfVxuXHRcdFx0XHRcdFx0XHRcdGtleT17cHJvamVjdC5pZH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXhsLTMgY29sLXh4bC0yXCJcblx0XHRcdFx0XHRcdFx0XHRsYXlvdXQ+XG5cdFx0XHRcdFx0XHRcdFx0PFByb2plY3Qgey4uLnsgcHJvamVjdCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH19IC8+XG5cdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e3NlbGVjdGVkLmxlbmd0aCA+IDAgJiYgPEFjdGlvbk1lbnUgey4uLnsgc2VsZWN0ZWQsIHJlc2V0U2VsZWN0ZWQsIGFjdGlvbnMgfX0gLz59XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdCB9IGZyb20gXCIuL1Byb2plY3RcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdEFkZCB9IGZyb20gXCIuL1Byb2plY3RBZGRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdEltYWdlIH0gZnJvbSBcIi4vUHJvamVjdEltYWdlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RNb2RhbCB9IGZyb20gXCIuL1Byb2plY3RNb2RhbFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0UmVzdWx0cyB9IGZyb20gXCIuL1Byb2plY3RSZXN1bHRzXCI7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IFByb2plY3RSZXZpZXdNYXJrZXIgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3TWFya2VyJztcbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudCBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50JztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFByb2plY3RSZXZpZXdDb21tZW50Qm94IGZyb20gJy4vUHJvamVjdFJldmlld0NvbW1lbnRCb3gnO1xuXG4vKiBHbG9iYWwgKi9cbmNvbnN0IGN1cnNvck9mZnNldCA9IDEwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3Q2FudmFzKHsgdGl0bGUsIHBoYXNlcyA9IFtdLCBwcm9qZWN0SW1hZ2VJZCB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IGltYWdlLCBpZDogcGhhc2VJZCwgY29tbWVudHMgfSA9IHBoYXNlc1twaGFzZXMubGVuZ3RoIC0gMV0gfHwge307XG5cblx0LyogUmVmcyAqL1xuXHRjb25zdCByZXZpZXdSZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbbWFya2VyUG9zLCBzZXRNYXJrZXJQb3NdID0gdXNlU3RhdGUoKTtcblx0Y29uc3QgW2JveE9wZW4sIHNldEJveE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB0b2dnbGVCb3ggPSAoKSA9PiB7XG5cdFx0c2V0Qm94T3BlbighYm94T3Blbik7XG5cdFx0c2V0TWFya2VyUG9zKG51bGwpO1xuXHR9O1xuXG5cdGNvbnN0IHBvc01hcmtlciA9ICh7IGNsaWVudFgsIGNsaWVudFkgfSkgPT4ge1xuXHRcdGNvbnN0IHJldmlld1BvcyA9IHJldmlld1JlZj8uY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdHNldE1hcmtlclBvcygoKSA9PiB7XG5cdFx0XHRjb25zdCB4UGVyY2VudCA9ICgoY2xpZW50WCAtIGN1cnNvck9mZnNldCkgLyByZXZpZXdQb3Mud2lkdGgpICogMTAwO1xuXHRcdFx0Y29uc3QgeVBlcmNlbnQgPSAoKGNsaWVudFkgLSByZXZpZXdQb3MudG9wIC0gY3Vyc29yT2Zmc2V0KSAvIHJldmlld1Bvcy5oZWlnaHQpICogMTAwO1xuXG5cdFx0XHRyZXR1cm4geyB4UGVyY2VudCwgeVBlcmNlbnQsIHJldmlld1BvcyB9O1xuXHRcdH0pO1xuXG5cdFx0c2V0Qm94T3Blbih0cnVlKTtcblx0fTtcblxuXHQvKiByZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IHJlZj17cmV2aWV3UmVmfSBjbGFzc05hbWU9XCJyZXZpZXcgcG9zaXRpb24tcmVsYXRpdmUgbXgtbjEyIG1iLW4xMiBtdC0xMlwiPlxuXHRcdFx0PGltZ1xuXHRcdFx0XHRjbGFzc05hbWU9XCJyZXZpZXdfX2ltYWdlIGltZy1mbHVpZCB3LTEwMFwiXG5cdFx0XHRcdHNyYz17aW1hZ2V9XG5cdFx0XHRcdHNyY1NldD17YCR7aW1hZ2V9IDJ4YH1cblx0XHRcdFx0YWx0PXt0aXRsZX1cblx0XHRcdFx0b25DbGljaz17cG9zTWFya2VyfVxuXHRcdFx0Lz5cblx0XHRcdHtjb21tZW50cy5sZW5ndGggPiAwICYmXG5cdFx0XHRcdGNvbW1lbnRzLm1hcCgoY29tbWVudCwgY29tbWVudEluZGV4KSA9PiAoXG5cdFx0XHRcdFx0PFByb2plY3RSZXZpZXdDb21tZW50IGtleT17Y29tbWVudEluZGV4fSB7Li4ueyAuLi5jb21tZW50LCBjb21tZW50SW5kZXgsIHJldmlld1JlZiB9fSAvPlxuXHRcdFx0XHQpKX1cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHttYXJrZXJQb3MgJiYgKFxuXHRcdFx0XHRcdDxQcm9qZWN0UmV2aWV3TWFya2VyIHsuLi57IC4uLm1hcmtlclBvcyB9fT5cblx0XHRcdFx0XHRcdDxQcm9qZWN0UmV2aWV3Q29tbWVudEJveCB7Li4ueyBtYXJrZXJQb3MsIGJveE9wZW4sIHRvZ2dsZUJveCwgcGhhc2VJZCwgcHJvamVjdEltYWdlSWQgfX0gLz5cblx0XHRcdFx0XHQ8L1Byb2plY3RSZXZpZXdNYXJrZXI+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9jb21tb24nO1xuaW1wb3J0IFByb2plY3RSZXZpZXdNYXJrZXIgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3TWFya2VyJztcblxuLyogSGVscGVycyAqL1xuaW1wb3J0IHsgY2FsY0JveFBvcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3Q29tbWVudCh7IGF1dGhvciwgY29tbWVudCwgcG9zaXRpb24sIGNvbW1lbnRJbmRleCwgcmV2aWV3UmVmIH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgeFBlcmNlbnQsIHlQZXJjZW50IH0gPSBwb3NpdGlvbjtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW2JveE9wZW4sIHNldEJveE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB0b2dnbGVCb3ggPSAoKSA9PiBzZXRCb3hPcGVuKCFib3hPcGVuKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8UHJvamVjdFJldmlld01hcmtlciB7Li4ueyB4UGVyY2VudCwgeVBlcmNlbnQsIGF1dGhvciwgY29tbWVudEluZGV4LCB0b2dnbGVDb21tZW50OiB0b2dnbGVCb3ggfX0+XG5cdFx0XHQ8Q29tbWVudCB7Li4ueyBjb21tZW50LCBhdXRob3IsIGJveE9wZW4sIHRvZ2dsZUJveCwgcG9zaXRpb24sIHJldmlld1JlZiB9fSAvPlxuXHRcdDwvUHJvamVjdFJldmlld01hcmtlcj5cblx0KTtcbn1cblxuY29uc3QgQ29tbWVudCA9ICh7IGNvbW1lbnQsIGF1dGhvciwgYm94T3BlbiwgdG9nZ2xlQm94LCBwb3NpdGlvbiwgcmV2aWV3UmVmIH0pID0+IHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHRpdGxlID0gYXV0aG9yLnVzZXJuYW1lO1xuXHRjb25zdCBzdWJ0aXRsZSA9IGF1dGhvci5lbWFpbDtcblxuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbdHJhbnNmb3JtZWRQb3MsIHNldFRyYW5zZm9ybWVkUG9zXSA9IHVzZVN0YXRlKHBvc2l0aW9uKTtcblxuXHQvKiBSZWZzICovXG5cdGNvbnN0IGJveFJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIEVmZmVjdHMgKi9cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAocG9zaXRpb24pIHtcblx0XHRcdHNldFRyYW5zZm9ybWVkUG9zKCgpID0+IHtcblx0XHRcdFx0cG9zaXRpb24ucmV2aWV3UG9zID0gcmV2aWV3UmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdHJldHVybiBjYWxjQm94UG9zKGJveFJlZiwgcG9zaXRpb24pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCBbcG9zaXRpb25dKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8Qm94XG5cdFx0XHRyZW5kZXJPbkJvZHk9e2ZhbHNlfVxuXHRcdFx0YW5pbWF0ZT17ZmFsc2V9XG5cdFx0XHRleHRlbnNpb25DbGFzc2VzPVwicmV2aWV3X19ib3hcIlxuXHRcdFx0ey4uLnsgdGl0bGUsIHN1YnRpdGxlLCBib3hPcGVuLCB0b2dnbGVCb3gsIHVzZXI6IGF1dGhvciwgcG9zaXRpb246IHRyYW5zZm9ybWVkUG9zLCBib3hSZWYgfX0+XG5cdFx0XHR7Y29tbWVudH1cblx0XHQ8L0JveD5cblx0KTtcbn07XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRhcmVhQXV0b3NpemUnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9jb21tb24nO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuLyogSGVscGVycyAqL1xuaW1wb3J0IHsgY2FsY0JveFBvcyB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGFkZENvbW1lbnQgfSBmcm9tICcuLi8uLi9hcGkvY29tbWVudCc7XG5pbXBvcnQgeyBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0NvbW1lbnRCb3goeyBtYXJrZXJQb3MsIGJveE9wZW4sIHRvZ2dsZUJveCwgcGhhc2VJZCwgcHJvamVjdEltYWdlSWQgfSkge1xuXHQvKiBSZWZzICovXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblx0Y29uc3QgYm94UmVmID0gdXNlUmVmKCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHRpdGxlID0gJ0FkZCBhIGNvbW1lbnQnO1xuXHRjb25zdCBwb3NpdGlvbiA9IGNhbGNCb3hQb3MoYm94UmVmLCBtYXJrZXJQb3MpO1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgY3VycmVudFVzZXI6IHVzZXIgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgYWRkQ29tbWVudE11dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkQ29tbWVudCwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9JTUFHRV9CWV9JRCwgcGFyc2VJbnQocHJvamVjdEltYWdlSWQpXSk7XG5cdFx0XHR0b2dnbGVCb3goKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBDb21wb25lbnRzICovXG5cdGNvbnN0IFN1YnRpdGxlQ29tcG9uZW50ID0gKCkgPT4gKFxuXHRcdDxzcGFuPlxuXHRcdFx0Q29tbWVudCBvciA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeVwiPiBAbWVudGlvbiA8L3NwYW4+IHNvbWVvbmVcblx0XHQ8L3NwYW4+XG5cdCk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PEJveFxuXHRcdFx0cmVuZGVyT25Cb2R5PXtmYWxzZX1cblx0XHRcdGV4dGVuc2lvbkNsYXNzZXM9XCJyZXZpZXdfX2JveFwiXG5cdFx0XHR7Li4ueyB0aXRsZSwgU3VidGl0bGVDb21wb25lbnQsIGJveE9wZW4sIHRvZ2dsZUJveCwgcG9zaXRpb24sIHVzZXIsIGJveFJlZiB9fT5cblx0XHRcdDxmb3JtXG5cdFx0XHRcdHJlZj17Zm9ybVJlZn1cblx0XHRcdFx0Y2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LWdyb3ctMVwiXG5cdFx0XHRcdG9uU3VibWl0PXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGFkZENvbW1lbnRNdXRhdGlvbi5tdXRhdGUoe1xuXHRcdFx0XHRcdFx0Zm9ybVJlZjogZm9ybVJlZixcblx0XHRcdFx0XHRcdHVzZXJJZDogdXNlci5pZCxcblx0XHRcdFx0XHRcdHBoYXNlSWQ6IHBoYXNlSWQsXG5cdFx0XHRcdFx0XHRwb3NpdGlvbjogbWFya2VyUG9zLFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9fT5cblx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwiY29tbWVudFwiPlxuXHRcdFx0XHRcdHt0aXRsZX1cblx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0PFRleHRhcmVhQXV0b3NpemVcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIGZvcm0tY29udHJvbC0tdGV4dFwiXG5cdFx0XHRcdFx0aWQ9XCJjb21tZW50XCJcblx0XHRcdFx0XHRuYW1lPVwiY29tbWVudFwiXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiU2F5IHNvbWV0aGluZyBuaWNlLi4uXCJcblx0XHRcdFx0XHRhdXRvRm9jdXNcblx0XHRcdFx0Lz5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdHRpdGxlPVwiU3VibWl0XCJcblx0XHRcdFx0XHRleHRlbnNpb25DbGFzc2VzPVwibXQtNCB3LTUwIGp1c3RpZnktY29udGVudC1jZW50ZXJcIlxuXHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdHsuLi57IGlzTG9hZGluZzogYWRkQ29tbWVudE11dGF0aW9uLmlzTG9hZGluZyB9fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvQm94PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEVkaXRhYmxlIH0gZnJvbSAnLi4vZWRpdGFibGUnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgc3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBlZGl0UHJvamVjdEltYWdlLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0hlYWRlcih7IGlkLCB0aXRsZSwgZGVzY3JpcHRpb24gfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KHN0YXRpY0NvbnRleHQpO1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IG11dGF0aW9uT25TdWNjZXNzID0gKCkgPT4ge1xuXHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfSU1BR0VfQllfSUQsIGlkXSk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgbWItNlwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXhsLTZcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3VzZXJSb2xlID09PSAnYWRtaW4nICYmICdlZGl0YWJsZSd9IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMmB9PlxuXHRcdFx0XHRcdDxFZGl0YWJsZVxuXHRcdFx0XHRcdFx0aW5wdXRUeXBlPVwidGl0bGVcIlxuXHRcdFx0XHRcdFx0cHJvamVjdElkPXtpZH1cblx0XHRcdFx0XHRcdGNvbnRlbnQ9e3RpdGxlfVxuXHRcdFx0XHRcdFx0bXV0YXRpb249e2VkaXRQcm9qZWN0SW1hZ2V9XG5cdFx0XHRcdFx0XHRtdXRhdGlvbklkPXtpZH1cblx0XHRcdFx0XHRcdHsuLi57IG11dGF0aW9uT25TdWNjZXNzIH19PlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImg1IG1iLTAgdGV4dC13aGl0ZVwiPnt0aXRsZSA/IHRpdGxlIDogJ0FkZCBhIG5pY2UgdGl0bGUnfTwvaDE+XG5cdFx0XHRcdFx0PC9FZGl0YWJsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiAnZWRpdGFibGUnfSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJgfT5cblx0XHRcdFx0XHQ8RWRpdGFibGVcblx0XHRcdFx0XHRcdGlucHV0VHlwZT1cImRlc2NyaXB0aW9uXCJcblx0XHRcdFx0XHRcdGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdFx0bXV0YXRpb249e2VkaXRQcm9qZWN0SW1hZ2V9XG5cdFx0XHRcdFx0XHRtdXRhdGlvbklkPXtpZH1cblx0XHRcdFx0XHRcdHsuLi57IG11dGF0aW9uT25TdWNjZXNzIH19PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNzAgbWItMFwiPlxuXHRcdFx0XHRcdFx0XHR7ZGVzY3JpcHRpb24gPyAoXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+e2Rlc2NyaXB0aW9ufTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS00MFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0QWRkIGEgZGVjcmlwdGlvbiAtIHRoZSBwdXJwb3NlLCBjb250ZXh0LCBvYmplY3RpdmVzXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvRWRpdGFibGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dCc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4sIFNDQUxFX0ZBREUgfSBmcm9tICcuLi8uLi9jb21tb24vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXdNYXJrZXIoeyB4UGVyY2VudCwgeVBlcmNlbnQsIGF1dGhvciwgY29tbWVudEluZGV4LCB0b2dnbGVDb21tZW50LCBjaGlsZHJlbiB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cdGNvbnN0IHVzZXIgPSBhdXRob3IgPyBhdXRob3IgOiBjdXJyZW50VXNlcjtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0bGF5b3V0XG5cdFx0XHR0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIgfX1cblx0XHRcdGNsYXNzTmFtZT1cInJldmlld19faW50ZXJhY3Rpb25cIlxuXHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0Jy0teCc6IHhQZXJjZW50LFxuXHRcdFx0XHQnLS15JzogeVBlcmNlbnQsXG5cdFx0XHR9fVxuXHRcdFx0ey4uLkZBREVfSU59PlxuXHRcdFx0PG1vdGlvbi5idXR0b25cblx0XHRcdFx0ey4uLlNDQUxFX0ZBREV9XG5cdFx0XHRcdGNsYXNzTmFtZT1cInJldmlld19fbWFya2VyIGljb24td3JhcHBlciBpY29uLXdyYXBwZXItLXNlY29uZGFyeSBidG4gYnRuLWxpbmsgdGV4dC1yZXNldFwiXG5cdFx0XHRcdHN0eWxlPXt7ICctLXRoZW1lJzogYCR7dXNlci51c2VyQ29sb3J9YCB9fVxuXHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVDb21tZW50fT5cblx0XHRcdFx0e2NvbW1lbnRJbmRleCAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LS14c1wiPntjb21tZW50SW5kZXggKyAxfTwvc3Bhbj59XG5cdFx0XHQ8L21vdGlvbi5idXR0b24+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0UmV2aWV3SGVhZGVyIH0gZnJvbSAnLi9Qcm9qZWN0UmV2aWV3SGVhZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdFJldmlld0NhbnZhcyB9IGZyb20gJy4vUHJvamVjdFJldmlld0NhbnZhcyc7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRVc2VySWNvbiBmcm9tICdpY29ucy9hZGRfdXNlci5zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9jb21tb24nO1xuaW1wb3J0IFVzZXJBZGRTZWFyY2ggZnJvbSAnLi9Vc2VyQWRkU2VhcmNoJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckFkZCh7IHVzZXJzLCBwcm9qZWN0IH0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW2JveE9wZW4sIHNldEJveE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB0b2dnbGVCb3ggPSAoKSA9PiBzZXRCb3hPcGVuKCFib3hPcGVuKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIG1sLTJcIj5cblx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIHVzZXIgdXNlci0tbGcgdXNlci0tYWRkXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZUJveH0+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInVzZXJfX2F2YXRhclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlcl9faW5pdGlhbHNcIj5cblx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9faWNvbiBpY29uIGljb24tLTEyIG10LTBcIiBzcmM9e2FkZFVzZXJJY29ufSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxCb3ggdGl0bGU9XCJTZWxlY3QgdXNlcnNcIiBzdWJ0aXRsZT1cIkNob29zZSBzb21lIHVzZXJzIHRvIGNvbGxhYm9yYXRlIHdpdGguXCIgey4uLnsgYm94T3BlbiwgdG9nZ2xlQm94IH19PlxuXHRcdFx0XHQ8VXNlckFkZFNlYXJjaCB7Li4ueyB1c2VycywgcHJvamVjdCwgdG9nZ2xlQm94IH19IC8+XG5cdFx0XHQ8L0JveD5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBVc2VyQWRkU2VhcmNoUmVzdWx0cyBmcm9tICcuL1VzZXJBZGRTZWFyY2hSZXN1bHRzJztcbmltcG9ydCB7IFVzZXJzIH0gZnJvbSAnLi4vdXNlcnMnO1xuXG4vKiBFbGVtZW50cyAqL1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMnO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBpc0VtYWlsLCBmaWx0ZXJVc2VycyB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGFkZFVzZXIsIGZldGNoR29iYWxVc2VycywgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBZGRTZWFyY2goeyB1c2VycywgcHJvamVjdCwgdG9nZ2xlQm94IH0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtmb2N1c2VkVXNlciwgc2V0Rm9jdXNlZFVzZXJdID0gdXNlU3RhdGUoMCk7XG5cblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGRhdGE6IGdsb2JhbFVzZXJzID0gW10sIGlzTG9hZGluZzogZ2xvYmFsVXNlcnNMb2FkaW5nIH0gPSB1c2VRdWVyeShcblx0XHRRVUVSWV9LRVlTLkdMT0JBTF9VU0VSUyxcblx0XHRmZXRjaEdvYmFsVXNlcnNcblx0KTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgZmlsdGVyZWRVc2VycyA9IGZpbHRlclVzZXJzKGdsb2JhbFVzZXJzLCB1c2VycywgcXVlcnkpO1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgcXVlcnlSZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGFkZFVzZXJNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZFVzZXIsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3QuaWRdKTtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuR0xPQkFMX1VTRVJTKTtcblxuXHRcdFx0cXVlcnlSZWYuY3VycmVudC5zZWxlY3QoKTtcblx0XHRcdHNldFF1ZXJ5KCcnKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0UXVlcnkodmFsdWUpO1xuXG5cdGNvbnN0IGhhbmRsZU9uS2V5RG93biA9IChldmVudCkgPT4ge1xuXHRcdGlmIChbJ0VudGVyJywgJ1RhYiddLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGlmIChxdWVyeSAhPT0gJycgJiYgZm9jdXNlZFVzZXIgIT09IG51bGwpIHtcblx0XHRcdFx0Y29uc3QgdXNlciA9IGZvY3VzZWRVc2VyIGluIGZpbHRlcmVkVXNlcnMgPyBmaWx0ZXJlZFVzZXJzW2ZvY3VzZWRVc2VyXSA6IGZvY3VzZWRVc2VyO1xuXG5cdFx0XHRcdGlmIChpc0VtYWlsKHVzZXIuZW1haWwpKSB7XG5cdFx0XHRcdFx0YWRkVXNlck11dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZDogcHJvamVjdC5pZCwgZW1haWw6IHVzZXIuZW1haWwgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoZW1haWwpID0+IHtcblx0XHRpZiAoaXNFbWFpbChlbWFpbCkpIHtcblx0XHRcdGFkZFVzZXJNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQ6IHByb2plY3QuaWQsIGVtYWlsOiBlbWFpbCB9KTtcblx0XHR9XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1ncm93LTFcIj5cblx0XHRcdDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdCB9fSB2YXJpYW50PVwiaW50ZXJhY3RpdmVcIiBzaXplPVwieGxcIiAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuXHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJ1c2VyUXVlcnlcIj5cblx0XHRcdFx0XHRTZWFyY2ggbmFtZSBvciBlbWFpbFxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIGZvcm0tY29udHJvbC0tc2VhcmNoXCJcblx0XHRcdFx0XHRpZD1cInVzZXJRdWVyeVwiXG5cdFx0XHRcdFx0bmFtZT1cInVzZXJRdWVyeVwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTZWFyY2ggbmFtZSBvciBlbWFpbFwiXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdGF1dG9Gb2N1c1xuXHRcdFx0XHRcdHZhbHVlPXtxdWVyeX1cblx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdG9uS2V5RG93bj17aGFuZGxlT25LZXlEb3dufVxuXHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cIm9mZlwiXG5cdFx0XHRcdFx0cmVmPXtxdWVyeVJlZn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PFVzZXJBZGRTZWFyY2hSZXN1bHRzXG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdGZpbHRlcmVkVXNlcnMsXG5cdFx0XHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0XHRcdGhhbmRsZUNsaWNrLFxuXHRcdFx0XHRcdFx0Zm9jdXNlZFVzZXIsXG5cdFx0XHRcdFx0XHRzZXRGb2N1c2VkVXNlcixcblx0XHRcdFx0XHRcdHVzZXJNdXRhdGlvbkxvYWRpbmc6IGFkZFVzZXJNdXRhdGlvbi5pc0xvYWRpbmcsXG5cdFx0XHRcdFx0XHRnbG9iYWxVc2Vyc0xvYWRpbmcsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNFwiPlxuXHRcdFx0XHQ8QnV0dG9uIHRpdGxlPVwiRG9uZVwiIG9uQ2xpY2s9e3RvZ2dsZUJveH0gZXh0ZW5zaW9uQ2xhc3Nlcz1cInctNTAganVzdGlmeS1jb250ZW50LWNlbnRlclwiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4uLy4uL2NvbW1vbi9hbmltYXRpb25zJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlclNlbGVjdCB9IGZyb20gJy4uL3VzZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckFkZFNlYXJjaFJlc3VsdHMoe1xuXHRmaWx0ZXJlZFVzZXJzLFxuXHRxdWVyeSxcblx0aGFuZGxlQ2xpY2ssXG5cdGZvY3VzZWRVc2VyLFxuXHRzZXRGb2N1c2VkVXNlcixcblx0dXNlck11dGF0aW9uTG9hZGluZyxcblx0Z2xvYmFsVXNlcnNMb2FkaW5nLFxufSkge1xuXHQvKiBSZW5kZXIgZmlsdGVyZWQgcmVzdWx0cyAqL1xuXHRjb25zdCByZXN1bHRzID0gKCkgPT4ge1xuXHRcdGNvbnN0IG5ld1VzZXIgPSB7IGVtYWlsOiBxdWVyeSwgdXNlcm5hbWU6ICdOZXcgdXNlcicsIHVzZXJDb2xvcjogJyNDQzI1RTgnIH07XG5cblx0XHRpZiAoZmlsdGVyZWRVc2Vycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gZmlsdGVyZWRVc2Vycy5tYXAoKHVzZXIsIHVzZXJJbmRleCkgPT4gKFxuXHRcdFx0XHQ8bW90aW9uLmxpIHsuLi5GQURFX0lOfSBrZXk9e3VzZXIuaWR9IGNsYXNzTmFtZT1cImxpc3RfX2l0ZW0gdnItM1wiPlxuXHRcdFx0XHRcdDxVc2VyU2VsZWN0XG5cdFx0XHRcdFx0XHR7Li4ueyB1c2VyLCB1c2VySW5kZXgsIGhhbmRsZUNsaWNrLCBzZXRGb2N1c2VkVXNlciB9fVxuXHRcdFx0XHRcdFx0aXNGb2N1c2VkPXt1c2VySW5kZXggPT09IGZvY3VzZWRVc2VyICYmIHF1ZXJ5fVxuXHRcdFx0XHRcdFx0aXNMb2FkaW5nPXt1c2VyTXV0YXRpb25Mb2FkaW5nfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvbW90aW9uLmxpPlxuXHRcdFx0KSk7XG5cdFx0fVxuXG5cdFx0aWYgKCFnbG9iYWxVc2Vyc0xvYWRpbmcpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxtb3Rpb24ubGkgey4uLkZBREVfSU59IGtleT1cIk5ldyB1c2VyXCIgY2xhc3NOYW1lPVwibGlzdF9faXRlbSBpcy1mb2N1c2VkIHZyLTNcIj5cblx0XHRcdFx0XHQ8VXNlclNlbGVjdFxuXHRcdFx0XHRcdFx0ey4uLnsgdXNlcjogbmV3VXNlciwgdXNlckluZGV4OiBuZXdVc2VyLCBoYW5kbGVDbGljaywgc2V0Rm9jdXNlZFVzZXIgfX1cblx0XHRcdFx0XHRcdGlzRm9jdXNlZD17cXVlcnkubGVuZ3RofVxuXHRcdFx0XHRcdFx0aXNMb2FkaW5nPXt1c2VyTXV0YXRpb25Mb2FkaW5nfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvbW90aW9uLmxpPlxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdHtxdWVyeSAhPT0gJycgJiYgKFxuXHRcdFx0XHQ8bW90aW9uLnVsIHsuLi5GQURFX0lOfSBjbGFzc05hbWU9XCJib3hfX2xpc3QgbGlzdFwiPlxuXHRcdFx0XHRcdHtyZXN1bHRzKCl9XG5cdFx0XHRcdDwvbW90aW9uLnVsPlxuXHRcdFx0KX1cblx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0KTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlckFkZCB9IGZyb20gXCIuL1VzZXJBZGRcIjtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBzdGFySWNvbiBmcm9tICdpY29ucy9zdGFyLnN2Zyc7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICdpY29ucy9kZWxldGUuc3ZnJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBkZWxldGVVc2VyLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuLi8uLi9jb21tb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyKHsgdXNlciwgcHJvamVjdCA9IHt9LCB2YXJpYW50ID0gJ2RlZmF1bHQnLCBzaXplID0gJ21kJyB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyBpZDogcHJvamVjdElkLCBhdXRob3IgfSA9IHByb2plY3Q7XG5cdGNvbnN0IHsgaWQ6IHVzZXJJZCwgZW1haWwgfSA9IHVzZXI7XG5cblx0Y29uc3QgaXNBdXRob3IgPSBlbWFpbCA9PT0gYXV0aG9yO1xuXHRjb25zdCBjbGFzc2VzID0gWyd1c2VyJywgYHVzZXItLSR7c2l6ZX1gLCBgdXNlci0tJHt2YXJpYW50fWAsIGlzQXV0aG9yICYmICd1c2VyLS1hdXRob3InXS5qb2luKCcgJyk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGRlbGV0ZVVzZXJNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGRlbGV0ZVVzZXIsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0pLFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlc30+XG5cdFx0XHQ8VXNlckF2YXRhciBpc0xvYWRpbmc9e2RlbGV0ZVVzZXJNdXRhdGlvbi5pc0xvYWRpbmd9IHsuLi51c2VyfT5cblx0XHRcdFx0e3ZhcmlhbnQgPT09ICdpbnRlcmFjdGl2ZScgJiYgIWlzQXV0aG9yICYmIChcblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ1c2VyX19hY3Rpb24gYnRuIGJ0bi1saW5rIHAtMFwiXG5cdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGRlbGV0ZVVzZXJNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQsIHVzZXJJZCB9KX0+XG5cdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cInVzZXJfX2FjdGlvbi1pY29uIGljb24gaWNvbi0tMTRcIiBzcmM9e2RlbGV0ZUljb259IC8+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L1VzZXJBdmF0YXI+XG5cdFx0XHR7aXNBdXRob3IgJiYgKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXJfX3N0YXR1cyB1c2VyX19zdGF0dXMtLWxlYWRlclwiPlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9fc3RhdHVzLWljb24gaWNvbiB0ZXh0LXRlcnRpYXJ5IG10LTBcIiBzcmM9e3N0YXJJY29ufSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBjb25zdCBVc2VyQXZhdGFyID0gKHsgdXNlcm5hbWUsIHVzZXJDb2xvciwgaXNMb2FkaW5nLCBjaGlsZHJlbiB9KSA9PiB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB1c2VySW5pdGlhbHMgPSB1c2VybmFtZS5zcGxpdCgnICcpLm1hcCgod29yZCkgPT4gd29yZFswXS50b1VwcGVyQ2FzZSgpKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXJfX2F2YXRhclwiIHN0eWxlPXt7ICctLXRoZW1lJzogdXNlckNvbG9yIH19PlxuXHRcdFx0PExvYWRpbmdXcmFwcGVyIGxvYWRpbmc9e2lzTG9hZGluZ30gbG9hZGVyU2l6ZT17MTZ9PlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ1c2VyX19pbml0aWFsc1wiPnt1c2VySW5pdGlhbHN9PC9zcGFuPlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L0xvYWRpbmdXcmFwcGVyPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IFVzZXJJbmZvID0gKHsgdXNlcm5hbWUsIGVtYWlsIH0pID0+IChcblx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gbWwtM1wiPlxuXHRcdDxwIGNsYXNzTmFtZT1cIm1iLTBcIj57dXNlcm5hbWV9PC9wPlxuXHRcdDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTYwIHRleHQtLXhzXCI+e2VtYWlsfTwvcD5cblx0PC9kaXY+XG4pO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZFVzZXJJY29uIGZyb20gJ2ljb25zL2FkZF91c2VyLnN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXJBdmF0YXIsIFVzZXJJbmZvIH0gZnJvbSAnLi9Vc2VyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclNlbGVjdCh7IHVzZXIsIHVzZXJJbmRleCwgaGFuZGxlQ2xpY2ssIGlzRm9jdXNlZCwgc2V0Rm9jdXNlZFVzZXIsIGlzTG9hZGluZyB9KSB7XG5cdC8qIEVmZmVjdHMgKi9cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpc0ZvY3VzZWQgJiYgc2V0Rm9jdXNlZFVzZXIodXNlckluZGV4KTtcblx0fSwgW2lzRm9jdXNlZF0pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0cmV0dXJuICgpID0+IHNldEZvY3VzZWRVc2VyKDApO1xuXHR9LCBbXSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IGhhbmRsZVN0YXR1cyA9IChhY3Rpb24pID0+IHtcblx0XHRzZXRGb2N1c2VkVXNlcihhY3Rpb24gPT09ICdlbnRlcicgPyB1c2VySW5kZXggOiAwKTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8YnV0dG9uXG5cdFx0XHRjbGFzc05hbWU9e2B1c2VyIHVzZXItLXNlbGVjdCAke2lzRm9jdXNlZCAmJiAnaXMtZm9jdXNlZCd9IHVzZXItLXhsYH1cblx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKHVzZXIuZW1haWwpfVxuXHRcdFx0b25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVTdGF0dXMoJ2VudGVyJyl9XG5cdFx0XHRvbk1vdXNlTGVhdmU9eygpID0+IGhhbmRsZVN0YXR1cygnbGVhdmUnKX0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PFVzZXJBdmF0YXIgaXNMb2FkaW5nPXtpc0xvYWRpbmcgJiYgaXNGb2N1c2VkfSB7Li4udXNlcn0gLz5cblx0XHRcdFx0PFVzZXJJbmZvIHsuLi51c2VyfSAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXJfX2FkZCB0ZXh0LXNlY29uZGFyeSByb3VuZGVkLWNpcmNsZSBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19hZGQtaWNvbiBpY29uIGljb24tLTEyIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXthZGRVc2VySWNvbn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2J1dHRvbj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTQ0FMRV9GQURFIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9hbmltYXRpb25zXCI7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBVc2VyIGZyb20gXCIuL1VzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcnMoeyB1c2VycywgbGF5b3V0ID0gXCJmdWxsXCIsIC4uLnJlc3QgfSkge1xuICAgIGNvbnN0IHNsaWNlQW1vdW50ID0gbGF5b3V0ID09PSBcIm1pbmltYWxcIiA/IDcgOiBJbmZpbml0eTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBndXR0ZXJzLTFcIj5cbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAge3VzZXJzLnNsaWNlKDAsIHNsaWNlQW1vdW50KS5tYXAoKHVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGxheW91dCB7Li4uU0NBTEVfRkFERX0gY2xhc3NOYW1lPVwiY29sLWF1dG9cIiBrZXk9e3VzZXIuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyIHsuLi57IHVzZXIsIC4uLnJlc3QgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICB7bGF5b3V0ID09PSBcIm1pbmltYWxcIiAmJiB1c2Vycy5sZW5ndGggPiA3ICYmIChcbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgbGF5b3V0IHsuLi5TQ0FMRV9GQURFfSBjbGFzc05hbWU9XCJjb2wtYXV0b1wiIGtleT1cIm1vcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtLXhzIHRleHQtbXV0ZWQtLTcwIG1sLTFcIj4rIHt1c2Vycy5sZW5ndGggLSBzbGljZUFtb3VudH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJzIH0gZnJvbSBcIi4vVXNlcnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlciB9IGZyb20gXCIuL1VzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlclNlbGVjdCB9IGZyb20gXCIuL1VzZXJTZWxlY3RcIjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFN0YXRpY0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5leHBvcnQgZGVmYXVsdCBTdGF0aWNDb250ZXh0O1xuIiwiLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuLi9jb21tb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24oe1xuXHR0aXRsZSxcblx0dHlwZSA9ICdidXR0b24nLFxuXHR0aGVtZSA9ICdzZWNvbmRhcnknLFxuXHRzaXplID0gJ3NtJyxcblx0ZXh0ZW5zaW9uQ2xhc3NlcyA9ICcnLFxuXHRvbkNsaWNrID0gKCkgPT4ge30sXG5cdGlzTG9hZGluZyA9IGZhbHNlLFxufSkge1xuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmJ1dHRvblxuXHRcdFx0bGF5b3V0XG5cdFx0XHRjbGFzc05hbWU9e2BidG4gYnRuLSR7c2l6ZX0gYnRuLSR7dGhlbWV9ICR7ZXh0ZW5zaW9uQ2xhc3Nlc30gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcmB9XG5cdFx0XHR7Li4ueyB0eXBlLCBvbkNsaWNrIH19XG5cdFx0XHRzdHlsZT17eyBoZWlnaHQ6IDM1IH19PlxuXHRcdFx0PExvYWRpbmdXcmFwcGVyXG5cdFx0XHRcdGxvYWRpbmc9e2lzTG9hZGluZ31cblx0XHRcdFx0bG9hZGVyU2l6ZT17MTZ9XG5cdFx0XHRcdGNsYXNzZXM9e3sgbG9hZGVyQ2xhc3NlczogJ3Bvc2l0aW9uLWFic29sdXRlIGQtZmxleCB0ZXh0LXNlY29uZGFyeScgfX0+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImJ0bl9fdGV4dFwiPnt0aXRsZX08L3NwYW4+XG5cdFx0XHQ8L0xvYWRpbmdXcmFwcGVyPlxuXHRcdDwvbW90aW9uLmJ1dHRvbj5cblx0KTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uIH0gZnJvbSAnLi9CdXR0b24nO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsY0JveFBvcyhib3hSZWYsIG1hcmtlclBvcykge1xuXHRjb25zdCBtYXJrZXJTcGFjZXIgPSAxMDtcblx0Y29uc3QgbWFya2VyU2l6ZSA9IDIwO1xuXHRjb25zdCBvZmZzZXQgPSBtYXJrZXJTaXplICsgbWFya2VyU3BhY2VyO1xuXG5cdC8qIEdldCBwb3NpdGlvbiBvZiBtYXJrZXIgKi9cblx0Y29uc3QgcmV2aWV3UG9zID0gbWFya2VyUG9zLnJldmlld1Bvcztcblx0Y29uc3QgeFBlcmNlbnQgPSBOdW1iZXIobWFya2VyUG9zLnhQZXJjZW50KTtcblx0Y29uc3QgeVBlcmNlbnQgPSBOdW1iZXIobWFya2VyUG9zLnlQZXJjZW50KTtcblxuXHQvKiBHZXQgZGltZW5zaW9ucyBvZiBjdXJyZW50IGJveCAqL1xuXHRjb25zdCB7IHdpZHRoOiBib3hXaWR0aCA9IDQwMCwgaGVpZ2h0OiBib3hIZWlnaHQgPSAyMjggfSA9IGJveFJlZj8uY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkgfHwge307XG5cblx0LyogR2V0IGRpbWVuc2lvbnMgb2YgY3VycmVudCBzY3JlZW4gKi9cblx0Y29uc3Qgc2NyZWVuV2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblx0Y29uc3QgYm94UGVyY2VudFdpZHRoID0gKGJveFdpZHRoIC8gc2NyZWVuV2lkdGgpICogMTAwO1xuXG5cdGNvbnN0IHNjcmVlbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHJldmlld1Bvcy50b3A7XG5cdGNvbnN0IGJveFBlcmNlbnRIZWlnaHQgPSAoYm94SGVpZ2h0IC8gc2NyZWVuSGVpZ2h0KSAqIDEwMDtcblxuXHQvKiBTZXQgeCBhbmQgeSB2YWx1ZXMgdG8gcGVyY2VudGFnZSBlcXVpdmVsZW50IHRvIG1ha2UgdGhlIGJveCByZXNwb25zaXZlICovXG5cdGxldCBsZWZ0ID0gb2Zmc2V0O1xuXHRsZXQgdG9wID0gb2Zmc2V0O1xuXG5cdC8qIENvbXBlbnNhdGUgZm9yIHRoZSBib3hXaWR0aCBpZiBtYXJrZXIgaXMgYXQgZW5kIG9mIGhvcml6b250YWwgc2NyZWVuICovXG5cdGlmICh4UGVyY2VudCArIGJveFBlcmNlbnRXaWR0aCA+IDEwMCkge1xuXHRcdGxlZnQgPSAtYm94V2lkdGggLSBtYXJrZXJTcGFjZXI7XG5cdH1cblxuXHQvKiBDb21wZW5zYXRlIGZvciB0aGUgYm94SGVpZ2h0IGlmIG1hcmtlciBpcyBhdCBlbmQgb2YgdmVydGljYWwgc2NyZWVuICovXG5cdGlmICh5UGVyY2VudCArIGJveFBlcmNlbnRIZWlnaHQgPiAxMDApIHtcblx0XHR0b3AgPSAtYm94SGVpZ2h0IC0gbWFya2VyU3BhY2VyO1xuXHR9XG5cblx0cmV0dXJuIHsgbGVmdDogYCR7bGVmdH1weGAsIHRvcDogYCR7dG9wfXB4YCB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlsdGVyVXNlcnMoZ2xvYmFsVXNlcnMsIHVzZXJzLCBxdWVyeSkge1xuICAgIGNvbnN0IGxvd2VyUXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGV4aXN0aW5nVXNlcnNCeUVtYWlsID0gdXNlcnMubWFwKCh7IGVtYWlsIH0pID0+IGVtYWlsKTtcblxuICAgIGxldCBmaWx0ZXJlZFVzZXJzID0gZ2xvYmFsVXNlcnNcbiAgICAgICAgLmZpbHRlcigoeyBlbWFpbCB9KSA9PiB7XG4gICAgICAgICAgICAvKiBPbmx5IHJldHVybiB1c2VycyB0aGF0IGFyZSBub3QgcGFydCBvZiB0aGUgcHJvamVjdCAqL1xuICAgICAgICAgICAgcmV0dXJuICFleGlzdGluZ1VzZXJzQnlFbWFpbC5pbmNsdWRlcyhlbWFpbCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5maWx0ZXIoKHsgZW1haWwsIHVzZXJuYW1lIH0pID0+IHtcbiAgICAgICAgICAgIC8qIE9ubHkgcmV0dXJuIHVzZXJzIHRoYXQgbWF0Y2ggdGhlIHF1ZXJ5IG9uIGVtYWlsIHx8IHVzZXJuYW1lICovXG4gICAgICAgICAgICByZXR1cm4gZW1haWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclF1ZXJ5KSB8fCB1c2VybmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyUXVlcnkpO1xuICAgICAgICB9KTtcblxuICAgIHJldHVybiBmaWx0ZXJlZFVzZXJzO1xufVxuIiwiY29uc3QgVVNFUl9ST0xFUyA9IHtcblx0Uk9MRV9BRE1JTjogJ1JPTEVfQURNSU4nLFxuXHRST0xFX1VTRVI6ICdST0xFX1VTRVInLFxuXHRST0xFX1VTRVJfQkFTSUM6ICdST0xFX1VTRVJfQkFTSUMnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Um9sZSh7IHJvbGVzIH0pIHtcblx0aWYgKHJvbGVzLmluY2x1ZGVzKFVTRVJfUk9MRVMuUk9MRV9BRE1JTikpIHJldHVybiAnYWRtaW4nO1xuXHRpZiAocm9sZXMuaW5jbHVkZXMoVVNFUl9ST0xFUy5ST0xFX1VTRVIpKSByZXR1cm4gJ3VzZXInO1xuXHRpZiAocm9sZXMuaW5jbHVkZXMoVVNFUl9ST0xFUy5ST0xFX1VTRVJfQkFTSUMpKSByZXR1cm4gJ2Jhc2ljJztcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgaXNFbWFpbCB9IGZyb20gJy4vaXNFbWFpbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpbHRlclVzZXJzIH0gZnJvbSAnLi9maWx0ZXJVc2Vycyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVwZGF0ZVBhZ2VUaXRsZSB9IGZyb20gJy4vdXBkYXRlUGFnZVRpdGxlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0Um9sZSB9IGZyb20gJy4vZ2V0Um9sZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNhbGNCb3hQb3MgfSBmcm9tICcuL2NhbGNCb3hQb3MnO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNFbWFpbChlbWFpbCkge1xuICAgIHJldHVybiAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLy50ZXN0KGVtYWlsKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVBhZ2VUaXRsZSh0aXRsZSkge1xuXHRkb2N1bWVudC50aXRsZSA9IGBQYXJhbGxlbCBEYXNoYm9hcmQgfCAke3RpdGxlfWA7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIHVzZVNlbGVjdGlvbiB9IGZyb20gJy4vdXNlU2VsZWN0aW9uJztcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTZWxlY3Rpb24oKSB7XG5cdGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoW10pO1xuXG5cdGNvbnN0IHVwZGF0ZVNlbGVjdGVkID0gKGlkKSA9PiB7XG5cdFx0c2V0U2VsZWN0ZWQoKHNlbGVjdGVkKSA9PiB7XG5cdFx0XHRpZiAoc2VsZWN0ZWQuaW5jbHVkZXMoaWQpKSB7XG5cdFx0XHRcdHJldHVybiBzZWxlY3RlZC5maWx0ZXIoKHNlbGVjdGVkSWQpID0+IHNlbGVjdGVkSWQgIT09IGlkKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFsuLi5zZWxlY3RlZCwgaWRdO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlc2V0U2VsZWN0ZWQgPSAoKSA9PiBzZXRTZWxlY3RlZChbXSk7XG5cblx0cmV0dXJuIHsgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkLCByZXNldFNlbGVjdGVkIH07XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUGFnZUxvYWRlciB9IGZyb20gJy4uL2NvbW1vbic7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZmV0Y2hQcm9qZWN0QnlJZCwgUVVFUllfS0VZUyB9IGZyb20gJy4uL2FwaSc7XG5cbi8qIEhlbHBlcnMgKi9cbmltcG9ydCB7IHVwZGF0ZVBhZ2VUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQcm9qZWN0RGV0YWlsSGVhZGVyLCBQcm9qZWN0RGV0YWlsSW1hZ2VzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWwoKSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJZCB9ID0gdXNlUGFyYW1zKCk7XG5cblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGlzTG9hZGluZywgZGF0YSA9IHt9IH0gPSB1c2VRdWVyeShcblx0XHRbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwYXJzZUludChwcm9qZWN0SWQpXSxcblx0XHQoKSA9PiBmZXRjaFByb2plY3RCeUlkKHsgcHJvamVjdElkIH0pLFxuXHRcdHtcblx0XHRcdG9uU3VjY2VzczogKHsgdGl0bGUgfSkgPT4gdXBkYXRlUGFnZVRpdGxlKHRpdGxlKSxcblx0XHR9XG5cdCk7XG5cblx0LyogQ29uc3RhbnRzICAqL1xuXHRjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgdXNlcnMsIGlkLCBhdXRob3IsIGVtYWlsLCBwcm9qZWN0SW1hZ2VzIH0gPSBkYXRhO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxQYWdlTG9hZGVyIHsuLi57IGlzTG9hZGluZyB9fT5cblx0XHRcdDxQcm9qZWN0RGV0YWlsSGVhZGVyIHsuLi57IHRpdGxlLCBkZXNjcmlwdGlvbiwgdXNlcnMsIGlkLCBhdXRob3IsIGVtYWlsIH19IC8+XG5cdFx0XHQ8UHJvamVjdERldGFpbEltYWdlcyB7Li4ueyBwcm9qZWN0SW1hZ2VzLCBwcm9qZWN0SWQ6IGlkIH19IC8+XG5cdFx0PC9QYWdlTG9hZGVyPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQcm9qZWN0UmVzdWx0cywgUHJvamVjdEFkZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcHJvamVjdC1vdmVydmlldyc7XG5pbXBvcnQgeyBQYWdlTG9hZGVyIH0gZnJvbSAnLi4vY29tbW9uJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZmV0Y2hQcm9qZWN0c0J5VXNlciwgUVVFUllfS0VZUyB9IGZyb20gJy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RPdmVydmlldygpIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW25ld1Byb2plY3RJZCwgc2V0TmV3UHJvamVjdElkXSA9IHVzZVN0YXRlKCk7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBjdXJyZW50VXNlciwgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHVzZXJJZCA9IGN1cnJlbnRVc2VyPy5pZCA/IGN1cnJlbnRVc2VyLmlkIDogYXRvYihsb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKSk7XG5cblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGlzTG9hZGluZywgZGF0YTogcHJvamVjdHMgPSBbXSB9ID0gdXNlUXVlcnkoXG5cdFx0UVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIsXG5cdFx0KCkgPT4gZmV0Y2hQcm9qZWN0c0J5VXNlcih7IHVzZXJJZCB9KSxcblx0XHR7XG5cdFx0XHRlbmFibGVkOiAhIXVzZXJJZCxcblx0XHR9XG5cdCk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PFBhZ2VMb2FkZXIgey4uLnsgaXNMb2FkaW5nIH19PlxuXHRcdFx0e3VzZXJSb2xlID09PSAnYWRtaW4nICYmIDxQcm9qZWN0QWRkIHsuLi57IHNldE5ld1Byb2plY3RJZCB9fSAvPn1cblx0XHRcdDxQcm9qZWN0UmVzdWx0cyB7Li4ueyBwcm9qZWN0cywgbmV3UHJvamVjdElkIH19IC8+XG5cdFx0PC9QYWdlTG9hZGVyPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFBhZ2VMb2FkZXIgfSBmcm9tICcuLi9jb21tb24nO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGZldGNoUHJvamVjdEltYWdlQnlJZCwgUVVFUllfS0VZUyB9IGZyb20gJy4uL2FwaSc7XG5cbi8qIEhlbHBlcnMgKi9cbmltcG9ydCB7IHVwZGF0ZVBhZ2VUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQcm9qZWN0UmV2aWV3Q2FudmFzLCBQcm9qZWN0UmV2aWV3SGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0LXJldmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXcoKSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJbWFnZUlkIH0gPSB1c2VQYXJhbXMoKTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhID0ge30gfSA9IHVzZVF1ZXJ5KFxuXHRcdFtRVUVSWV9LRVlTLlBST0pFQ1RfSU1BR0VfQllfSUQsIHBhcnNlSW50KHByb2plY3RJbWFnZUlkKV0sXG5cdFx0KCkgPT4gZmV0Y2hQcm9qZWN0SW1hZ2VCeUlkKHsgcHJvamVjdEltYWdlSWQgfSksXG5cdFx0e1xuXHRcdFx0b25TdWNjZXNzOiAoeyB0aXRsZSB9KSA9PiB1cGRhdGVQYWdlVGl0bGUodGl0bGUpLFxuXHRcdH1cblx0KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8UGFnZUxvYWRlciB7Li4ueyBpc0xvYWRpbmcgfX0+XG5cdFx0XHQ8UHJvamVjdFJldmlld0hlYWRlciB7Li4uZGF0YX0gLz5cblx0XHRcdDxQcm9qZWN0UmV2aWV3Q2FudmFzIHsuLi57IC4uLmRhdGEsIHByb2plY3RJbWFnZUlkIH19IC8+XG5cdFx0PC9QYWdlTG9hZGVyPlxuXHQpO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0T3ZlcnZpZXcgfSBmcm9tICcuL1Byb2plY3RPdmVydmlldyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3REZXRhaWwgfSBmcm9tICcuL1Byb2plY3REZXRhaWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0UmV2aWV3IH0gZnJvbSAnLi9Qcm9qZWN0UmV2aWV3JztcbiIsIi8qIFBhZ2VzICovXG5pbXBvcnQgeyBQcm9qZWN0T3ZlcnZpZXcsIFByb2plY3REZXRhaWwsIFByb2plY3RSZXZpZXcgfSBmcm9tICcuL3BhZ2VzJztcblxuY29uc3Qgcm91dGVzID0gW1xuXHR7XG5cdFx0bmFtZTogJ3Byb2plY3Qtb3ZlcnZpZXcnLFxuXHRcdHBhdGg6ICcvcHJvamVjdHMnLFxuXHRcdGNvbXBvbmVudDogUHJvamVjdE92ZXJ2aWV3LFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3Byb2plY3QtZGV0YWlsJyxcblx0XHRwYXRoOiAnL3Byb2plY3RzLzppZCcsXG5cdFx0Y29tcG9uZW50OiBQcm9qZWN0RGV0YWlsLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3Byb2plY3QtcmV2aWV3Jyxcblx0XHRwYXRoOiAnL3Byb2plY3RzLzppZC9yZXZpZXcvOmlkJyxcblx0XHRjb21wb25lbnQ6IFByb2plY3RSZXZpZXcsXG5cdH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdwYXJzbGV5anMnO1xuXG5jb25zdCBwYXJzbGV5Q29uZmlnID0ge1xuICAgIGVycm9yQ2xhc3M6ICdpcy1lcnJvcicsXG4gICAgZXhjbHVkZWQ6ICdpbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0sIGlucHV0W3R5cGU9aGlkZGVuXSwgW2Rpc2FibGVkXSwgOmhpZGRlbicsXG4gICAgc3VjY2Vzc0NsYXNzOiAnaXMtc3VjY2Vzcydcbn07XG5cbiQoJ2Zvcm06bm90KFtub3ZhbGlkYXRlXSknKS5wYXJzbGV5KHBhcnNsZXlDb25maWcpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==