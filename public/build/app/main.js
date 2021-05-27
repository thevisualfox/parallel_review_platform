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

/***/ "./assets/app/img/background-login.jpg":
/*!*********************************************!*\
  !*** ./assets/app/img/background-login.jpg ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/background-login.jpg";

/***/ }),

/***/ "./assets/app/img/background-login@2x.jpg":
/*!************************************************!*\
  !*** ./assets/app/img/background-login@2x.jpg ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/background-login@2x.jpg";

/***/ }),

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

/***/ "./assets/app/img/icons/close-white.svg":
/*!**********************************************!*\
  !*** ./assets/app/img/icons/close-white.svg ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/close-white.svg";

/***/ }),

/***/ "./assets/app/img/icons/close.svg":
/*!****************************************!*\
  !*** ./assets/app/img/icons/close.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/close.svg";

/***/ }),

/***/ "./assets/app/img/icons/danger.svg":
/*!*****************************************!*\
  !*** ./assets/app/img/icons/danger.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/danger.svg";

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

/***/ "./assets/app/img/icons/success.svg":
/*!******************************************!*\
  !*** ./assets/app/img/icons/success.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/success.svg";

/***/ }),

/***/ "./assets/app/img/icons/upload.svg":
/*!*****************************************!*\
  !*** ./assets/app/img/icons/upload.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/upload.svg";

/***/ }),

/***/ "./assets/app/img/icons/warning.svg":
/*!******************************************!*\
  !*** ./assets/app/img/icons/warning.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/warning.svg";

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
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common */ "./assets/app/js/react/common/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./routes */ "./assets/app/js/react/routes.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./context */ "./assets/app/js/react/context.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./api */ "./assets/app/js/react/api/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers */ "./assets/app/js/react/helpers/index.js");
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


/* Routes */


/* Context */


/* Api */


/* Helpers */


function App() {
  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
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

  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_api__WEBPACK_IMPORTED_MODULE_7__["QUERY_KEYS"].CURRENT_USER, function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_7__["fetchCurrentUser"])({
      userId: userId
    });
  }, {
    retry: false,
    onSuccess: function onSuccess(user) {
      setCurrentUser(user);
      setUserRole(Object(_helpers__WEBPACK_IMPORTED_MODULE_8__["getRole"])(user));
    }
  }),
      isLoading = _useQuery.isLoading;
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_6__["default"].Provider, {
    value: {
      currentUser: currentUser,
      userRole: userRole
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_4__["PageLoader"], {
    isLoading: isLoading
  }, currentUser && location.pathname === '/' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: _routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].projects
  }), !currentUser && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: _routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"].login
  }), _routes__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (_ref) {
    var path = _ref.path,
        Component = _ref.component,
        props = _ref.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      key: path,
      path: path,
      exact: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread(_objectSpread({}, props), {}, {
      currentUser: currentUser,
      setCurrentUser: setCurrentUser
    })));
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], {
    hideProgressBar: true,
    newestOnTop: true,
    position: 'bottom-left',
    closeButton: false
  }))));
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
/*! exports provided: signup, login, logout, fetchProjectsByUser, fetchProjectById, addProject, deleteProjects, leaveProjects, editProject, fetchProjectImageById, addProjectImages, deleteProjectImages, editProjectImage, fetchCurrentUser, fetchGobalUsers, addUser, deleteUser, QUERY_KEYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_KEYS", function() { return QUERY_KEYS; });
/* harmony import */ var _security__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./security */ "./assets/app/js/react/api/security.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return _security__WEBPACK_IMPORTED_MODULE_0__["signup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _security__WEBPACK_IMPORTED_MODULE_0__["login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return _security__WEBPACK_IMPORTED_MODULE_0__["logout"]; });

/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./assets/app/js/react/api/project.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchProjectsByUser", function() { return _project__WEBPACK_IMPORTED_MODULE_1__["fetchProjectsByUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchProjectById", function() { return _project__WEBPACK_IMPORTED_MODULE_1__["fetchProjectById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addProject", function() { return _project__WEBPACK_IMPORTED_MODULE_1__["addProject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteProjects", function() { return _project__WEBPACK_IMPORTED_MODULE_1__["deleteProjects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leaveProjects", function() { return _project__WEBPACK_IMPORTED_MODULE_1__["leaveProjects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "editProject", function() { return _project__WEBPACK_IMPORTED_MODULE_1__["editProject"]; });

/* harmony import */ var _projectImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectImage */ "./assets/app/js/react/api/projectImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchProjectImageById", function() { return _projectImage__WEBPACK_IMPORTED_MODULE_2__["fetchProjectImageById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addProjectImages", function() { return _projectImage__WEBPACK_IMPORTED_MODULE_2__["addProjectImages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteProjectImages", function() { return _projectImage__WEBPACK_IMPORTED_MODULE_2__["deleteProjectImages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "editProjectImage", function() { return _projectImage__WEBPACK_IMPORTED_MODULE_2__["editProjectImage"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./assets/app/js/react/api/user.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchCurrentUser", function() { return _user__WEBPACK_IMPORTED_MODULE_3__["fetchCurrentUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchGobalUsers", function() { return _user__WEBPACK_IMPORTED_MODULE_3__["fetchGobalUsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addUser", function() { return _user__WEBPACK_IMPORTED_MODULE_3__["addUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return _user__WEBPACK_IMPORTED_MODULE_3__["deleteUser"]; });





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

/***/ "./assets/app/js/react/api/security.js":
/*!*********************************************!*\
  !*** ./assets/app/js/react/api/security.js ***!
  \*********************************************/
/*! exports provided: signup, login, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* Signup to platform | expects formRef object */

var signup = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var formRef, params, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            formRef = _ref.formRef;
            params = new FormData(formRef.current);
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/signup', params);

          case 4:
            result = _context.sent;
            return _context.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signup(_x) {
    return _ref2.apply(this, arguments);
  };
}();
/* Login to platform | expects formRef object */

var login = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
    var formRef, params, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            formRef = _ref3.formRef;
            params = new FormData(formRef.current);
            _context2.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/login', {
              email: params.get('email'),
              password: params.get('password')
            });

          case 4:
            result = _context2.sent;
            return _context2.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function login(_x2) {
    return _ref4.apply(this, arguments);
  };
}();
/* Logout from platform */

var logout = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/logout');

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

  return function logout() {
    return _ref5.apply(this, arguments);
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

/***/ "./assets/app/js/react/components/alert/Alert.jsx":
/*!********************************************************!*\
  !*** ./assets/app/js/react/components/alert/Alert.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Alert; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var icons_close_white_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! icons/close-white.svg */ "./assets/app/img/icons/close-white.svg");
/* harmony import */ var icons_close_white_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(icons_close_white_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var icons_warning_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! icons/warning.svg */ "./assets/app/img/icons/warning.svg");
/* harmony import */ var icons_warning_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(icons_warning_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var icons_danger_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/danger.svg */ "./assets/app/img/icons/danger.svg");
/* harmony import */ var icons_danger_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_danger_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var icons_success_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/success.svg */ "./assets/app/img/icons/success.svg");
/* harmony import */ var icons_success_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_success_svg__WEBPACK_IMPORTED_MODULE_5__);
/* Packages */


/* Assts */





function Alert(_ref) {
  var message = _ref.message,
      appearance = _ref.appearance,
      closeToast = _ref.closeToast;

  /* Constants */
  var appearanceTypes = {
    warning: {
      title: 'Warning',
      icon: icons_warning_svg__WEBPACK_IMPORTED_MODULE_3___default.a
    },
    error: {
      title: 'Error',
      icon: icons_danger_svg__WEBPACK_IMPORTED_MODULE_4___default.a
    },
    success: {
      title: 'Success',
      icon: icons_success_svg__WEBPACK_IMPORTED_MODULE_5___default.a
    }
  };
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert alert--notification",
    role: "alert",
    "data-alert": true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "alert__icon-wrapper alert__icon-wrapper--".concat(appearance, " mr-2")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "alert__icon icon icon--12",
    src: appearanceTypes[appearance].icon
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-0"
  }, appearanceTypes[appearance].title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "alert__btn btn btn-link ml-auto",
    type: "button",
    onClick: closeToast
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--10",
    src: icons_close_white_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "alert__message text--xs text-muted--70 mr-lg-8"
  }, message));
}

/***/ }),

/***/ "./assets/app/js/react/components/background/Background.jsx":
/*!******************************************************************!*\
  !*** ./assets/app/js/react/components/background/Background.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Background; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var images_background_login_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! images/background-login.jpg */ "./assets/app/img/background-login.jpg");
/* harmony import */ var images_background_login_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(images_background_login_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var images_background_login_2x_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! images/background-login@2x.jpg */ "./assets/app/img/background-login@2x.jpg");
/* harmony import */ var images_background_login_2x_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(images_background_login_2x_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* Packages */

/* Assets */



function Background() {
  /* Render */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "background"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "background__image",
    src: images_background_login_jpg__WEBPACK_IMPORTED_MODULE_1___default.a,
    srcSet: images_background_login_2x_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "Background"
  }));
}

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

/***/ "./assets/app/js/react/components/header/Header.jsx":
/*!**********************************************************!*\
  !*** ./assets/app/js/react/components/header/Header.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../routes */ "./assets/app/js/react/routes.js");
/* Packages */


/* Routes */


function Header() {
  /* Render */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "main-header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid px-5 pt-5 px-lg-6 pt-lg-6 px-xl-12 pt-xl-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-header__logo logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    className: "logo__link text-reset",
    to: _routes__WEBPACK_IMPORTED_MODULE_2__["ROUTES"].login,
    title: "Parallel Dashboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "logo__title text-uppercase mb-0"
  }, "Parallel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "logo__subtitle text-uppercase font-weight-light mt-n1"
  }, "Dashboard")))));
}

/***/ }),

/***/ "./assets/app/js/react/components/header/HeaderNavigation.jsx":
/*!********************************************************************!*\
  !*** ./assets/app/js/react/components/header/HeaderNavigation.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderNavigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _api_security__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/security */ "./assets/app/js/react/api/security.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../routes */ "./assets/app/js/react/routes.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ */ "./assets/app/js/react/components/index.js");
/* Packages */





/* Api */


/* Routes */


/* Components */


function HeaderNavigation() {
  /* Hooks */
  var history = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();
  /* Mutations */

  var logoutMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_api_security__WEBPACK_IMPORTED_MODULE_5__["logout"], {
    onSuccess: function onSuccess() {
      history.push(_routes__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].login);
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_7__["Alert"], {
        message: 'Successfully logged out!',
        appearance: "success"
      }));
    },
    onError: function onError() {
      return Object(react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_7__["Alert"], {
        message: 'Something went wrong!',
        appearance: "error"
      }));
    }
  });
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
    className: "main-header main-header--projects"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-header__wrapper d-flex align-items-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-header__logo logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    className: "logo__link text-reset",
    to: _routes__WEBPACK_IMPORTED_MODULE_6__["ROUTES"].projects,
    title: "Parallel Dashboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "logo__title text-uppercase text-white mb-0"
  }, "Parallel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "logo__subtitle text-uppercase text-white font-weight-light mt-n1"
  }, "Dashboard"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-header__nav ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "nav nav--primary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "nav-item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    href: "{{ path('app_logout') }}",
    title: "Logout",
    className: "nav-link btn btn-link text-reset",
    onClick: function onClick() {
      return logoutMutation.mutate();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "nav-text"
  }, "Logout"))))))));
}

/***/ }),

/***/ "./assets/app/js/react/components/index.js":
/*!*************************************************!*\
  !*** ./assets/app/js/react/components/index.js ***!
  \*************************************************/
/*! exports provided: Header, HeaderNavigation, Alert, Background */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/Header */ "./assets/app/js/react/components/header/Header.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header_Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _header_HeaderNavigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/HeaderNavigation */ "./assets/app/js/react/components/header/HeaderNavigation.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderNavigation", function() { return _header_HeaderNavigation__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _alert_Alert__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./alert/Alert */ "./assets/app/js/react/components/alert/Alert.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _alert_Alert__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _background_Background__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./background/Background */ "./assets/app/js/react/components/background/Background.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return _background_Background__WEBPACK_IMPORTED_MODULE_3__["default"]; });






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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common */ "./assets/app/js/react/common/index.js");
/* Components */

/* Components */


function Button(_ref) {
  var _buttonRef$current;

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

  /* Refs */
  var buttonRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* Constants */

  var buttonHeight = (_buttonRef$current = buttonRef.current) === null || _buttonRef$current === void 0 ? void 0 : _buttonRef$current.getBoundingClientRect().height;
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    ref: buttonRef,
    className: "btn btn-".concat(size, " btn-").concat(theme, " ").concat(extensionClasses, " d-flex align-items-center"),
    style: {
      height: buttonHeight
    },
    type: type,
    onClick: onClick
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_1__["LoadingWrapper"], {
    loading: isLoading,
    loaderSize: 16,
    classes: {
      loaderClasses: 'position-absolute d-flex text-secondary'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
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
/*! exports provided: isEmail, filterUsers, getRole, calcBoxPos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isEmail */ "./assets/app/js/react/helpers/isEmail.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return _isEmail__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _filterUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filterUsers */ "./assets/app/js/react/helpers/filterUsers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterUsers", function() { return _filterUsers__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _getRole__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getRole */ "./assets/app/js/react/helpers/getRole.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRole", function() { return _getRole__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _calcBoxPos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calcBoxPos */ "./assets/app/js/react/helpers/calcBoxPos.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calcBoxPos", function() { return _calcBoxPos__WEBPACK_IMPORTED_MODULE_3__["default"]; });






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

/***/ "./assets/app/js/react/hooks/index.js":
/*!********************************************!*\
  !*** ./assets/app/js/react/hooks/index.js ***!
  \********************************************/
/*! exports provided: useSelection, usePageTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useSelection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useSelection */ "./assets/app/js/react/hooks/useSelection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSelection", function() { return _useSelection__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _usePageTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usePageTitle */ "./assets/app/js/react/hooks/usePageTitle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageTitle", function() { return _usePageTitle__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./assets/app/js/react/hooks/usePageTitle.js":
/*!***************************************************!*\
  !*** ./assets/app/js/react/hooks/usePageTitle.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return usePageTitle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }


function usePageTitle(title) {
  var updateProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    document.title = "".concat(title ? title + ' | Parallel Dashboard' : document.title);
  }, _toConsumableArray(updateProps));
}

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

/***/ "./assets/app/js/react/pages/Login.jsx":
/*!*********************************************!*\
  !*** ./assets/app/js/react/pages/Login.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api */ "./assets/app/js/react/api/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components */ "./assets/app/js/react/components/index.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../elements */ "./assets/app/js/react/elements/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../routes */ "./assets/app/js/react/routes.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks */ "./assets/app/js/react/hooks/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */






/* Api */


/* Components */



/* Routes */


/* Hooks */


function Login(_ref) {
  var _errors$email, _errors$password;

  var setCurrentUser = _ref.setCurrentUser;

  /* Refs */
  var formRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* Hooks */

  Object(_hooks__WEBPACK_IMPORTED_MODULE_10__["usePageTitle"])('Login');
  var history = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])({
    reValidateMode: 'onChange',
    mode: 'onBlur'
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors;
  /* Mutations */


  var loginMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_6__["login"], {
    onSuccess: function onSuccess(user) {
      setCurrentUser(user);
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["Alert"], {
        message: "Successfully logged in!",
        appearance: "success"
      }));
      history.push(_routes__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].projects);
    },
    onError: function onError(error) {
      var _error$response, _error$response$data;

      Object(react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["Alert"], {
        message: error !== null && error !== void 0 && (_error$response = error.response) !== null && _error$response !== void 0 && (_error$response$data = _error$response.data) !== null && _error$response$data !== void 0 && _error$response$data.error ? 'Email/password combination not found!' : 'Something went wrong!',
        appearance: "error"
      }));
      errors.email = {
        message: 'Email/password combination not found'
      };
      errors.password = {
        message: 'Email/password combination not found'
      };
    }
  });

  var onSubmit = function onSubmit() {
    return loginMutation.mutate({
      formRef: formRef
    });
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["Header"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "main-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_7__["Background"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pane"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pane__panel panel panel--login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-uppercase text-white mb-0"
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted--70 text-white mb-6"
  }, "Login with your e-mail and password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    ref: formRef,
    className: "panel__form form",
    onSubmit: handleSubmit(onSubmit),
    noValidate: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row gutters-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "inputEmail"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    type: "email",
    className: "form-control ".concat(errors.email && 'is-invalid'),
    id: "inputEmail",
    name: "email",
    placeholder: "Email",
    autoFocus: true
  }, register('email', {
    required: true
  }))), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, (_errors$email = errors.email) !== null && _errors$email !== void 0 && _errors$email.message ? errors.email.message : 'Please enter a valid email')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "inputPassword"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    type: "password",
    className: "form-control ".concat(errors.password && 'is-invalid'),
    id: "inputPassword",
    name: "password",
    placeholder: "Password"
  }, register('password', {
    required: true
  }))), errors.password && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, (_errors$password = errors.password) !== null && _errors$password !== void 0 && _errors$password.message ? errors.password.message : 'Please enter a password'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row gutters-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    title: 'Log in',
    theme: 'secondary',
    size: 'md',
    extensionClasses: 'btn-block justify-content-center',
    type: 'submit',
    isLoading: loginMutation.isLoading
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    className: "btn btn-outline-white btn-block",
    to: _routes__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].signup,
    title: "sign up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn__text"
  }, "Sign up"))))))))));
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
/* harmony import */ var _components_project_detail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/project-detail */ "./assets/app/js/react/components/project-detail/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks */ "./assets/app/js/react/hooks/index.js");
/* Packages */



/* Components */


/* Api */


/* Components */



function ProjectDetail() {
  /* Queries */
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQuery"])([_api__WEBPACK_IMPORTED_MODULE_4__["QUERY_KEYS"].PROJECT_BY_ID, parseInt(projectId)], function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_4__["fetchProjectById"])({
      projectId: projectId
    });
  }),
      isLoading = _useQuery.isLoading,
      _useQuery$data = _useQuery.data,
      data = _useQuery$data === void 0 ? {} : _useQuery$data;
  /* Hooks */


  Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["usePageTitle"])(data === null || data === void 0 ? void 0 : data.title, [data]);

  var _useParams = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
      projectId = _useParams.id;
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_project_detail__WEBPACK_IMPORTED_MODULE_5__["ProjectDetailHeader"], {
    title: title,
    description: description,
    users: users,
    id: id,
    author: author,
    email: email
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_project_detail__WEBPACK_IMPORTED_MODULE_5__["ProjectDetailImages"], {
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components */ "./assets/app/js/react/components/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ "./assets/app/js/react/context.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api */ "./assets/app/js/react/api/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../hooks */ "./assets/app/js/react/hooks/index.js");
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


/* Hooks */


function ProjectOverview() {
  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      newProjectId = _useState2[0],
      setNewProjectId = _useState2[1];
  /* Hooks */


  Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["usePageTitle"])('Projects');

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_5__["default"]),
      currentUser = _useContext.currentUser,
      userRole = _useContext.userRole;
  /* Queries */


  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_api__WEBPACK_IMPORTED_MODULE_6__["QUERY_KEYS"].PROJECT_BY_USER, function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_6__["fetchProjectsByUser"])({
      userId: currentUser === null || currentUser === void 0 ? void 0 : currentUser.id
    });
  }, {
    enabled: !!(currentUser !== null && currentUser !== void 0 && currentUser.id)
  }),
      isLoading = _useQuery.isLoading,
      _useQuery$data = _useQuery.data,
      projects = _useQuery$data === void 0 ? [] : _useQuery$data;
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["HeaderNavigation"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "main-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "pane py-5 py-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_3__["PageLoader"], {
    isLoading: isLoading
  }, userRole === 'admin' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_project_overview__WEBPACK_IMPORTED_MODULE_2__["ProjectAdd"], {
    setNewProjectId: setNewProjectId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_project_overview__WEBPACK_IMPORTED_MODULE_2__["ProjectResults"], {
    projects: projects,
    newProjectId: newProjectId
  }))))));
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
/* harmony import */ var _components_project_review__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/project-review */ "./assets/app/js/react/components/project-review/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks */ "./assets/app/js/react/hooks/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Packages */



/* Components */


/* Api */


/* Components */


/* Hooks */


function ProjectReview() {
  /* Queries */
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQuery"])([_api__WEBPACK_IMPORTED_MODULE_4__["QUERY_KEYS"].PROJECT_IMAGE_BY_ID, parseInt(projectImageId)], function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_4__["fetchProjectImageById"])({
      projectImageId: projectImageId
    });
  }),
      isLoading = _useQuery.isLoading,
      _useQuery$data = _useQuery.data,
      data = _useQuery$data === void 0 ? {} : _useQuery$data;
  /* Hooks */


  Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["usePageTitle"])(data === null || data === void 0 ? void 0 : data.title, [data]);

  var _useParams = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
      projectImageId = _useParams.id;
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_3__["PageLoader"], {
    isLoading: isLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_project_review__WEBPACK_IMPORTED_MODULE_5__["ProjectReviewHeader"], data), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_project_review__WEBPACK_IMPORTED_MODULE_5__["ProjectReviewCanvas"], _objectSpread(_objectSpread({}, data), {}, {
    projectImageId: projectImageId
  })));
}

/***/ }),

/***/ "./assets/app/js/react/pages/Signup.jsx":
/*!**********************************************!*\
  !*** ./assets/app/js/react/pages/Signup.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api */ "./assets/app/js/react/api/index.js");
/* harmony import */ var _elements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../elements */ "./assets/app/js/react/elements/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components */ "./assets/app/js/react/components/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../routes */ "./assets/app/js/react/routes.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../hooks */ "./assets/app/js/react/hooks/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */






/* Api */


/* Components */



/* Routes */


/* Hooks */


function Signup(_ref) {
  var setCurrentUser = _ref.setCurrentUser;

  /* Refs */
  var formRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* Hooks */

  Object(_hooks__WEBPACK_IMPORTED_MODULE_10__["usePageTitle"])('Signup');
  var history = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])({
    reValidateMode: 'onChange',
    mode: 'onBlur'
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors,
      control = _useForm.control;

  var plainPassword = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useWatch"])({
    control: control,
    name: 'plainPassword',
    defaultValue: ''
  });
  /* Mutations */

  var signupMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_6__["signup"], {
    onSuccess: function onSuccess(user) {
      setCurrentUser(user);
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["Alert"], {
        message: "Successfully logged in!",
        appearance: "success"
      }));
      history.push(_routes__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].projects);
    },
    onError: function onError(error) {
      if (error.response.status === 500) {
        Object(react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["Alert"], {
          message: "This email is already in use!",
          appearance: "error"
        }));
        formRef.current.reset();
      }
    }
  });

  var onSubmit = function onSubmit() {
    return signupMutation.mutate({
      formRef: formRef
    });
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["Header"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "main-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_8__["Background"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pane"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pane__panel panel panel--login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-uppercase text-white mb-0"
  }, "Sign up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted--70 text-white mb-6"
  }, "Sign up with your e-mail and password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    ref: formRef,
    className: "panel__form form mt-6",
    onSubmit: handleSubmit(onSubmit),
    noValidate: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row gutters-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "registration_form_username"
  }, "Your name"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    type: "text",
    id: "registration_form_username",
    name: "username",
    className: "form-control ".concat(errors.username && 'is-invalid'),
    placeholder: "Full name"
  }, register('username', {
    required: {
      value: true,
      message: 'Please enter a name'
    }
  }))), errors.username && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, errors.username.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "registration_form_email"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    type: "text",
    id: "registration_form_email",
    name: "email",
    className: "form-control ".concat(errors.email && 'is-invalid'),
    placeholder: "Email"
  }, register('email', {
    required: {
      value: true,
      message: 'Please enter an email'
    }
  }))), errors.email && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, errors.email.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "registration_form_plainPassword"
  }, "Password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    type: "password",
    id: "registration_form_plainPassword",
    name: "plainPassword",
    className: "form-control ".concat(errors.password && 'is-invalid'),
    placeholder: "Password"
  }, register('plainPassword', {
    required: {
      value: true,
      message: 'Please enter a password'
    },
    minLength: {
      value: 6,
      message: 'Please enter a password of atleast 6 characters'
    }
  }))), errors.plainPassword && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, errors.plainPassword.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "login-confirm-password"
  }, "Confirm password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    type: "password",
    className: "form-control ".concat(errors.passwordConfirm && 'is-invalid'),
    id: "login-confirm-password",
    placeholder: "Confirm password",
    name: "passwordConfirm"
  }, register('passwordConfirm', {
    required: {
      value: true,
      message: 'Please confirm your password'
    },
    validate: function validate(value) {
      return value === plainPassword || 'The passwords do not match';
    }
  }))), errors.passwordConfirm && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, errors.passwordConfirm.message))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row gutters-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_elements__WEBPACK_IMPORTED_MODULE_7__["Button"], {
    title: 'Sign up',
    theme: 'secondary',
    size: 'md',
    extensionClasses: 'btn-block justify-content-center',
    type: 'submit',
    isLoading: signupMutation.isLoading
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    className: "btn btn-outline-white btn-block",
    to: _routes__WEBPACK_IMPORTED_MODULE_9__["ROUTES"].login,
    title: "sign up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn__text"
  }, "Login"))))))))));
}

/***/ }),

/***/ "./assets/app/js/react/pages/index.js":
/*!********************************************!*\
  !*** ./assets/app/js/react/pages/index.js ***!
  \********************************************/
/*! exports provided: Login, Signup, ProjectOverview, ProjectDetail, ProjectReview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login */ "./assets/app/js/react/pages/Login.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _Login__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Signup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Signup */ "./assets/app/js/react/pages/Signup.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Signup", function() { return _Signup__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ProjectOverview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectOverview */ "./assets/app/js/react/pages/ProjectOverview.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectOverview", function() { return _ProjectOverview__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ProjectDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectDetail */ "./assets/app/js/react/pages/ProjectDetail.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectDetail", function() { return _ProjectDetail__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ProjectReview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectReview */ "./assets/app/js/react/pages/ProjectReview.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectReview", function() { return _ProjectReview__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./assets/app/js/react/routes.js":
/*!***************************************!*\
  !*** ./assets/app/js/react/routes.js ***!
  \***************************************/
/*! exports provided: ROUTES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ "./assets/app/js/react/pages/index.js");
/* Pages */

var ROUTES = {
  login: '/',
  signup: '/signup',
  projects: '/projects'
};
var routes = [{
  name: 'login',
  path: '/',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__["Login"]
}, {
  name: 'signup',
  path: '/signup',
  component: _pages__WEBPACK_IMPORTED_MODULE_0__["Signup"]
}, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvYmFja2dyb3VuZC1sb2dpbi5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvYmFja2dyb3VuZC1sb2dpbkAyeC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX2ltYWdlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9hZGRfcHJvamVjdC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX3VzZXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2FyY2hpdmUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2NoZWNrLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9jbG9zZS13aGl0ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvY2xvc2Uuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2Rhbmdlci5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvZGVsZXRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9lZGl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9sZWF2ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvc3Rhci5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvc3VjY2Vzcy5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvdXBsb2FkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy93YXJuaW5nLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FsZXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL29iamVjdGZpdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9hcGkvY29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2FwaS9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvYXBpL3Byb2plY3RJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2FwaS9zZWN1cml0eS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2FwaS91c2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL0JveC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vRHJvcHpvbmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL0xvYWRpbmdXcmFwcGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbW1vbi9Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vUGFnZUxvYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbW1vbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvYWN0aW9uLW1lbnUvQWN0aW9uTWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL2FjdGlvbi1tZW51L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9hbGVydC9BbGVydC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL2JhY2tncm91bmQvQmFja2dyb3VuZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL2VkaXRhYmxlL0VkaXRhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvZWRpdGFibGUvRWRpdGFibGVCb2R5LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvZWRpdGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyTmF2aWdhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbC9Qcm9qZWN0RGV0YWlsSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvcHJvamVjdC1kZXRhaWwvUHJvamVjdERldGFpbEltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvcHJvamVjdC1kZXRhaWwvUHJvamVjdERldGFpbEltYWdlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3Byb2plY3QtZGV0YWlsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9wcm9qZWN0LW92ZXJ2aWV3L1Byb2plY3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9wcm9qZWN0LW92ZXJ2aWV3L1Byb2plY3RBZGQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9wcm9qZWN0LW92ZXJ2aWV3L1Byb2plY3RJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3Byb2plY3Qtb3ZlcnZpZXcvUHJvamVjdE1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvcHJvamVjdC1vdmVydmlldy9Qcm9qZWN0UmVzdWx0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3Byb2plY3Qtb3ZlcnZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdDYW52YXMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3Q29tbWVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdDb21tZW50Qm94LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvcHJvamVjdC1yZXZpZXcvUHJvamVjdFJldmlld0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdNYXJrZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9wcm9qZWN0LXJldmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlci1hZGQvVXNlckFkZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3VzZXItYWRkL1VzZXJBZGRTZWFyY2guanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2VyLWFkZC9Vc2VyQWRkU2VhcmNoUmVzdWx0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3VzZXItYWRkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2Vycy9Vc2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlcnMvVXNlclNlbGVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3VzZXJzL1VzZXJzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb250ZXh0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvZWxlbWVudHMvQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2VsZW1lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvaGVscGVycy9jYWxjQm94UG9zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvaGVscGVycy9maWx0ZXJVc2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2hlbHBlcnMvZ2V0Um9sZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9oZWxwZXJzL2lzRW1haWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9ob29rcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2hvb2tzL3VzZVBhZ2VUaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2hvb2tzL3VzZVNlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3BhZ2VzL0xvZ2luLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3BhZ2VzL1Byb2plY3REZXRhaWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcGFnZXMvUHJvamVjdE92ZXJ2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3BhZ2VzL1Byb2plY3RSZXZpZXcuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcGFnZXMvU2lnbnVwLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3Qvcm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbIkFsZXJ0IiwiZWwiLCJET00iLCJ0b2dnbGUiLCJxdWVyeVNlbGVjdG9yIiwib25Jbml0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInN0eWxlIiwib3BhY2l0eSIsInZpc2liaWxpdHkiLCJ0cmFuc2Zvcm0iLCJhbGVydE5vZGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIm5vZGUiLCJjbGllbnQiLCJRdWVyeUNsaWVudCIsImRlZmF1bHRPcHRpb25zIiwicXVlcmllcyIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIiwiYXBwTm9kZSIsImdldEVsZW1lbnRCeUlkIiwicmVuZGVyIiwiJCIsIm9iamVjdEZpdEltYWdlcyIsIkFwcCIsInVzZVN0YXRlIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsInVzZXJSb2xlIiwic2V0VXNlclJvbGUiLCJ1c2VySWQiLCJhdG9iIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZXBsYWNlIiwidXNlUXVlcnkiLCJRVUVSWV9LRVlTIiwiQ1VSUkVOVF9VU0VSIiwiZmV0Y2hDdXJyZW50VXNlciIsInJldHJ5Iiwib25TdWNjZXNzIiwidXNlciIsImdldFJvbGUiLCJpc0xvYWRpbmciLCJwYXRobmFtZSIsIlJPVVRFUyIsInByb2plY3RzIiwibG9naW4iLCJyb3V0ZXMiLCJtYXAiLCJwYXRoIiwiQ29tcG9uZW50IiwiY29tcG9uZW50IiwicHJvcHMiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJuZXdlc3RPblRvcCIsInBvc2l0aW9uIiwiY2xvc2VCdXR0b24iLCJhZGRDb21tZW50IiwiZm9ybVJlZiIsInBoYXNlSWQiLCJwYXJhbXMiLCJGb3JtRGF0YSIsImN1cnJlbnQiLCJhcHBlbmQiLCJ4UGVyY2VudCIsInlQZXJjZW50IiwiYXhpb3MiLCJwb3N0IiwicmVzdWx0IiwiZGF0YSIsIlBST0pFQ1RfQllfVVNFUiIsIlBST0pFQ1RfQllfSUQiLCJQUk9KRUNUX0lNQUdFX0JZX0lEIiwiR0xPQkFMX1VTRVJTIiwiZmV0Y2hQcm9qZWN0c0J5VXNlciIsImdldCIsImZldGNoUHJvamVjdEJ5SWQiLCJwcm9qZWN0SWQiLCJhZGRQcm9qZWN0IiwiZGVsZXRlUHJvamVjdHMiLCJwcm9qZWN0SWRzIiwiaWQiLCJsZWF2ZVByb2plY3RzIiwiZWRpdFByb2plY3QiLCJmZXRjaFByb2plY3RJbWFnZUJ5SWQiLCJwcm9qZWN0SW1hZ2VJZCIsImFkZFByb2plY3RJbWFnZXMiLCJpbWFnZXMiLCJpbWFnZSIsImRlbGV0ZVByb2plY3RJbWFnZXMiLCJwcm9qZWN0SW1hZ2VJZHMiLCJlZGl0UHJvamVjdEltYWdlIiwic2lnbnVwIiwiZW1haWwiLCJwYXNzd29yZCIsImxvZ291dCIsInVybCIsImZldGNoR29iYWxVc2VycyIsImFkZFVzZXIiLCJkZWxldGVVc2VyIiwiQm94IiwidGl0bGUiLCJzdWJ0aXRsZSIsIlN1YnRpdGxlQ29tcG9uZW50IiwiYm94T3BlbiIsInRvZ2dsZUJveCIsImNoaWxkcmVuIiwicmVuZGVyT25Cb2R5IiwiYm94UmVmIiwiZXh0ZW5zaW9uQ2xhc3NlcyIsImFuaW1hdGUiLCJsZWZ0IiwidG9wIiwiYW5pbWF0aW9uIiwiRkFERV9JTl9VUCIsImR1cmF0aW9uIiwiRkFERV9JTiIsImNsb3NlSWNvbiIsImNyZWF0ZVBvcnRhbCIsImJvZHkiLCJEcm9wem9uZSIsInBvc2l0aXRpb24iLCJxdWVyeUNsaWVudCIsInVzZVF1ZXJ5Q2xpZW50IiwidXNlRHJvcHpvbmUiLCJhY2NlcHQiLCJub0NsaWNrIiwib25Ecm9wIiwiYWNjZXB0ZWRGaWxlcyIsInVwZGF0ZVByb2plY3RJbWFnZXMiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiaXNEcmFnQWN0aXZlIiwiYWRkUHJvamVjdEltYWdlc011dGF0aW9uIiwidXNlTXV0YXRpb24iLCJpbnZhbGlkYXRlUXVlcmllcyIsImRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbiIsImFjdGlvbiIsIm11dGF0ZSIsImlzUGFyZW50RHJhZ0FjdGl2ZSIsIkRyb3B6b25lSW5uZXIiLCJhZGRJbWFnZUxvYWRpbmciLCJub0RyYWdFdmVudHNCdWJibGluZyIsInVwbG9hZEltYWdlSWNvbiIsIlNDQUxFX0ZBREUiLCJsb2FkZXJDbGFzc2VzIiwiYWRkSW1hZ2VJY29uIiwiTG9hZGluZ1dyYXBwZXIiLCJsb2FkaW5nIiwibG9hZGVyU2l6ZSIsImNsYXNzZXMiLCJkZWZhdWx0Q2xhc3NlcyIsIk1vZGFsIiwidG9nZ2xlTW9kYWwiLCJkb21FbGVtZW50IiwidmFyaWFudCIsIlRSQU5TRk9STV9VUCIsIlBhZ2VMb2FkZXIiLCJFQVNFIiwiaW5pdGlhbCIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsInkiLCJ0eXBlIiwiZGFtcGluZyIsInN0aWZmbmVzcyIsInNjYWxlIiwiU1RBR0dFUl9VUCIsImluZGV4IiwiZGVsYXkiLCJTVEFHR0VSX0xFRlQiLCJ4IiwiQWN0aW9uTWVudSIsInNlbGVjdGVkIiwicmVzZXRTZWxlY3RlZCIsImFjdGlvbnMiLCJ1c2VDb250ZXh0IiwiU3RhdGljQ29udGV4dCIsImxlbmd0aCIsImFjdGlvbkluZGV4IiwidGhlbWUiLCJoYXNQZXJtaXNzaW9uIiwiaWNvbiIsImljb25TaXplIiwibXV0YXRpb24iLCJpbmNsdWRlcyIsIm1lc3NhZ2UiLCJhcHBlYXJhbmNlIiwiY2xvc2VUb2FzdCIsImFwcGVhcmFuY2VUeXBlcyIsIndhcm5pbmciLCJ3YXJuaW5nSWNvbiIsImVycm9yIiwiZXJyb3JJY29uIiwic3VjY2VzcyIsInN1Y2Nlc3NJY29uIiwiQmFja2dyb3VuZCIsImJnIiwiYmdSZXRpbmEiLCJFZGl0YWJsZSIsImlucHV0VHlwZSIsInJlc3QiLCJzZXRCb3hPcGVuIiwiZWRpdEljb24iLCJFZGl0YWJsZUJvZHkiLCJjb250ZW50IiwibXV0YXRpb25JZCIsIm11dGF0aW9uT25TdWNjZXNzIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZVJlZiIsImlucHV0UmVmIiwidXNlRWZmZWN0Iiwic2VsZWN0IiwiZWRpdE11dGF0aW9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIkhlYWRlciIsIkhlYWRlck5hdmlnYXRpb24iLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsImxvZ291dE11dGF0aW9uIiwicHVzaCIsInRvYXN0Iiwib25FcnJvciIsIlByb2plY3REZXRhaWxIZWFkZXIiLCJkZXNjcmlwdGlvbiIsInVzZXJzIiwiYXV0aG9yIiwicHJvamVjdCIsInN0YXRpY0NvbnRleHQiLCJQcm9qZWN0RGV0YWlsSW1hZ2UiLCJwcm9qZWN0SW1hZ2UiLCJ1cGRhdGVTZWxlY3RlZCIsInBoYXNlcyIsImNoZWNrSWNvbiIsIlByb2plY3REZXRhaWxJbWFnZXMiLCJwcm9qZWN0SW1hZ2VzIiwidXNlU2VsZWN0aW9uIiwiZGVsZXRlSWNvbiIsIkltYWdlcyIsInByb2plY3RJbWFnZUluZGV4IiwiUHJvamVjdCIsImxheW91dCIsIlByb2plY3RBZGQiLCJzZXROZXdQcm9qZWN0SWQiLCJzZXRQcm9qZWN0SWQiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJlbmFibGVkIiwiYWRkTXV0YXRpb24iLCJpbnZhbGlkYXRlUHJvamVjdCIsInNldFRpbWVvdXQiLCJ1cGRhdGVQcm9qZWN0IiwiYWRkUHJvamVjdEljb24iLCJQcm9qZWN0SW1hZ2UiLCJQcm9qZWN0TW9kYWwiLCJEcm9wem9uZUltYWdlIiwic3RvcFByb3BhZ2F0aW9uIiwiUHJvamVjdFJlc3VsdHMiLCJuZXdQcm9qZWN0SWQiLCJsZWF2ZVByb2plY3RzTXV0YXRpb24iLCJkZWxldGVQcm9qZWN0c011dGF0aW9uIiwibGVhdmVJY29uIiwiYXJjaGl2ZUljb24iLCJmaWx0ZXIiLCJwcm9qZWN0SW5kZXgiLCJjdXJzb3JPZmZzZXQiLCJQcm9qZWN0UmV2aWV3Q2FudmFzIiwiY29tbWVudHMiLCJyZXZpZXdSZWYiLCJtYXJrZXJQb3MiLCJzZXRNYXJrZXJQb3MiLCJwb3NNYXJrZXIiLCJjbGllbnRYIiwiY2xpZW50WSIsInJldmlld1BvcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiY29tbWVudCIsImNvbW1lbnRJbmRleCIsIlByb2plY3RSZXZpZXdDb21tZW50IiwidG9nZ2xlQ29tbWVudCIsIkNvbW1lbnQiLCJ1c2VybmFtZSIsInRyYW5zZm9ybWVkUG9zIiwic2V0VHJhbnNmb3JtZWRQb3MiLCJjYWxjQm94UG9zIiwiUHJvamVjdFJldmlld0NvbW1lbnRCb3giLCJhZGRDb21tZW50TXV0YXRpb24iLCJwYXJzZUludCIsIlByb2plY3RSZXZpZXdIZWFkZXIiLCJQcm9qZWN0UmV2aWV3TWFya2VyIiwidXNlckNvbG9yIiwiVXNlckFkZCIsImFkZFVzZXJJY29uIiwiVXNlckFkZFNlYXJjaCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJmb2N1c2VkVXNlciIsInNldEZvY3VzZWRVc2VyIiwiZ2xvYmFsVXNlcnMiLCJnbG9iYWxVc2Vyc0xvYWRpbmciLCJmaWx0ZXJlZFVzZXJzIiwiZmlsdGVyVXNlcnMiLCJxdWVyeVJlZiIsImFkZFVzZXJNdXRhdGlvbiIsImhhbmRsZUNoYW5nZSIsImhhbmRsZU9uS2V5RG93biIsImtleSIsImlzRW1haWwiLCJoYW5kbGVDbGljayIsInVzZXJNdXRhdGlvbkxvYWRpbmciLCJVc2VyQWRkU2VhcmNoUmVzdWx0cyIsInJlc3VsdHMiLCJuZXdVc2VyIiwidXNlckluZGV4IiwiVXNlciIsInNpemUiLCJpc0F1dGhvciIsImpvaW4iLCJkZWxldGVVc2VyTXV0YXRpb24iLCJzdGFySWNvbiIsIlVzZXJBdmF0YXIiLCJ1c2VySW5pdGlhbHMiLCJzcGxpdCIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsIlVzZXJJbmZvIiwiVXNlclNlbGVjdCIsImlzRm9jdXNlZCIsImhhbmRsZVN0YXR1cyIsIlVzZXJzIiwic2xpY2VBbW91bnQiLCJJbmZpbml0eSIsInNsaWNlIiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiQnV0dG9uIiwib25DbGljayIsImJ1dHRvblJlZiIsImJ1dHRvbkhlaWdodCIsIm1hcmtlclNwYWNlciIsIm1hcmtlclNpemUiLCJvZmZzZXQiLCJOdW1iZXIiLCJib3hXaWR0aCIsImJveEhlaWdodCIsInNjcmVlbldpZHRoIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImJveFBlcmNlbnRXaWR0aCIsInNjcmVlbkhlaWdodCIsImlubmVySGVpZ2h0IiwiYm94UGVyY2VudEhlaWdodCIsImxvd2VyUXVlcnkiLCJ0b0xvd2VyQ2FzZSIsImV4aXN0aW5nVXNlcnNCeUVtYWlsIiwiVVNFUl9ST0xFUyIsIlJPTEVfQURNSU4iLCJST0xFX1VTRVIiLCJST0xFX1VTRVJfQkFTSUMiLCJyb2xlcyIsInRlc3QiLCJ1c2VQYWdlVGl0bGUiLCJ1cGRhdGVQcm9wcyIsInNldFNlbGVjdGVkIiwic2VsZWN0ZWRJZCIsIkxvZ2luIiwidXNlRm9ybSIsInJlVmFsaWRhdGVNb2RlIiwibW9kZSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwibG9naW5NdXRhdGlvbiIsInJlc3BvbnNlIiwib25TdWJtaXQiLCJyZXF1aXJlZCIsIlByb2plY3REZXRhaWwiLCJ1c2VQYXJhbXMiLCJQcm9qZWN0T3ZlcnZpZXciLCJQcm9qZWN0UmV2aWV3IiwiU2lnbnVwIiwiY29udHJvbCIsInBsYWluUGFzc3dvcmQiLCJ1c2VXYXRjaCIsIm5hbWUiLCJkZWZhdWx0VmFsdWUiLCJzaWdudXBNdXRhdGlvbiIsInN0YXR1cyIsInJlc2V0IiwibWluTGVuZ3RoIiwicGFzc3dvcmRDb25maXJtIiwidmFsaWRhdGUiLCJwYXJzbGV5Q29uZmlnIiwiZXJyb3JDbGFzcyIsImV4Y2x1ZGVkIiwic3VjY2Vzc0NsYXNzIiwicGFyc2xleSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsZ0JBQWdCLHVCQUF1QjtRQUN2Qzs7O1FBR0E7UUFDQTtRQUNBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZKQSxpQkFBaUIscUJBQXVCLDhCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGlDOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLHVCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLHlCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLHNCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLHFCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLG1COzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLHlCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLG1COzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLG9COzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLG9COzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGtCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLG1COzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLGtCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLHFCOzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLG9COzs7Ozs7Ozs7OztBQ0F4QyxpQkFBaUIscUJBQXVCLHFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0FsQ0EsSzs7O0FBQ0YsaUJBQVlDLEVBQVosRUFBZ0I7QUFBQTs7QUFDWixTQUFLQyxHQUFMLEdBQVc7QUFBRUQsUUFBRSxFQUFGQTtBQUFGLEtBQVg7QUFDQSxTQUFLQyxHQUFMLENBQVNDLE1BQVQsR0FBa0IsS0FBS0QsR0FBTCxDQUFTRCxFQUFULENBQVlHLGFBQVosQ0FBMEIsYUFBMUIsQ0FBbEI7QUFFQSxTQUFLQyxNQUFMO0FBQ0g7Ozs7V0FDRCxrQkFBUztBQUFBOztBQUNMLFdBQUtILEdBQUwsQ0FBU0MsTUFBVCxDQUFnQkcsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDO0FBQUEsZUFBTSxLQUFJLENBQUNILE1BQUwsRUFBTjtBQUFBLE9BQTFDO0FBQ0g7OztXQUNELGtCQUFTO0FBQ0wsV0FBS0QsR0FBTCxDQUFTRCxFQUFULENBQVlNLEtBQVosQ0FBa0JDLE9BQWxCLEdBQTRCLENBQTVCO0FBQ0EsV0FBS04sR0FBTCxDQUFTRCxFQUFULENBQVlNLEtBQVosQ0FBa0JFLFVBQWxCLEdBQStCLFFBQS9CO0FBQ0EsV0FBS1AsR0FBTCxDQUFTRCxFQUFULENBQVlNLEtBQVosQ0FBa0JHLFNBQWxCLEdBQThCLGtCQUE5QjtBQUNIOzs7Ozs7QUFHTCxJQUFNQyxVQUFVLEdBQUdDLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBbkI7O0FBQ0EsbUJBQUlGLFVBQUosRUFBZ0JHLE9BQWhCLENBQXdCLFVBQUNDLElBQUQ7QUFBQSxTQUFVLElBQUlmLEtBQUosQ0FBVWUsSUFBVixDQUFWO0FBQUEsQ0FBeEIsRTs7Ozs7Ozs7Ozs7O0FDbEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0NBR0E7O0FBQ0E7Q0FHQTs7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHLElBQUlDLHVEQUFKLENBQWdCO0FBQzlCQyxnQkFBYyxFQUFFO0FBQ2ZDLFdBQU8sRUFBRTtBQUNSQywwQkFBb0IsRUFBRTtBQURkO0FBRE07QUFEYyxDQUFoQixDQUFmO0FBUUE7O0FBQ0EsSUFBTUMsT0FBTyxHQUFHVCxRQUFRLENBQUNVLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBaEI7O0FBQ0EsSUFBSUQsT0FBTyxLQUFLLElBQWhCLEVBQXNCO0FBQ3JCRSwwREFBTSxlQUNMLDJEQUFDLCtEQUFEO0FBQTJCUCxVQUFNLEVBQU5BO0FBQTNCLGtCQUNDLDJEQUFDLGtEQUFELE9BREQsQ0FESyxFQUlMSyxPQUpLLENBQU47QUFNQSxDOzs7Ozs7Ozs7Ozs7QUN2Q0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQUcsNkNBQUMsQ0FBQyxZQUFXO0FBQ1RDLDBEQUFlO0FBQ2xCLENBRkEsQ0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7QUFDQTtBQUVlLFNBQVNDLEdBQVQsR0FBZTtBQUM3QjtBQUNBLGtCQUFzQ0Msc0RBQVEsRUFBOUM7QUFBQTtBQUFBLE1BQU9DLFdBQVA7QUFBQSxNQUFvQkMsY0FBcEI7O0FBQ0EsbUJBQWdDRixzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFBQTtBQUFBLE1BQU9HLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7QUFFQTs7O0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQkMsT0FBaEIsQ0FBd0IsR0FBeEIsRUFBNkIsRUFBN0IsQ0FBRCxDQUFuQjtBQUVBOztBQUNBLGtCQUFzQkMsNERBQVEsQ0FBQ0MsK0NBQVUsQ0FBQ0MsWUFBWixFQUEwQjtBQUFBLFdBQU1DLDZEQUFnQixDQUFDO0FBQUVSLFlBQU0sRUFBTkE7QUFBRixLQUFELENBQXRCO0FBQUEsR0FBMUIsRUFBOEQ7QUFDM0ZTLFNBQUssRUFBRSxLQURvRjtBQUUzRkMsYUFBUyxFQUFFLG1CQUFDQyxJQUFELEVBQVU7QUFDcEJkLG9CQUFjLENBQUNjLElBQUQsQ0FBZDtBQUNBWixpQkFBVyxDQUFDYSx3REFBTyxDQUFDRCxJQUFELENBQVIsQ0FBWDtBQUNBO0FBTDBGLEdBQTlELENBQTlCO0FBQUEsTUFBUUUsU0FBUixhQUFRQSxTQUFSO0FBUUE7OztBQUNBLHNCQUNDLDJEQUFDLDhEQUFELHFCQUNDLDJEQUFDLHVEQUFELHFCQUNDLDJEQUFDLGdEQUFELENBQWUsUUFBZjtBQUF3QixTQUFLLEVBQUU7QUFBRWpCLGlCQUFXLEVBQVhBLFdBQUY7QUFBZUUsY0FBUSxFQUFSQTtBQUFmO0FBQS9CLGtCQUNDLDJEQUFDLGtEQUFEO0FBQWtCZSxhQUFTLEVBQVRBO0FBQWxCLEtBQ0VqQixXQUFXLElBQUlNLFFBQVEsQ0FBQ1ksUUFBVCxLQUFzQixHQUFyQyxpQkFBNEMsMkRBQUMseURBQUQ7QUFBVSxNQUFFLEVBQUVDLDhDQUFNLENBQUNDO0FBQXJCLElBRDlDLEVBRUUsQ0FBQ3BCLFdBQUQsaUJBQWdCLDJEQUFDLHlEQUFEO0FBQVUsTUFBRSxFQUFFbUIsOENBQU0sQ0FBQ0U7QUFBckIsSUFGbEIsRUFHRUMsK0NBQU0sQ0FBQ0MsR0FBUCxDQUFXO0FBQUEsUUFBR0MsSUFBSCxRQUFHQSxJQUFIO0FBQUEsUUFBb0JDLFNBQXBCLFFBQVNDLFNBQVQ7QUFBQSxRQUErQkMsS0FBL0IsUUFBK0JBLEtBQS9CO0FBQUEsd0JBQ1gsMkRBQUMsc0RBQUQ7QUFBTyxTQUFHLEVBQUVILElBQVo7QUFBa0IsVUFBSSxFQUFFQSxJQUF4QjtBQUE4QixXQUFLO0FBQW5DLG9CQUNDLDJEQUFDLFNBQUQsa0NBQW9CRyxLQUFwQjtBQUEyQjNCLGlCQUFXLEVBQVhBLFdBQTNCO0FBQXdDQyxvQkFBYyxFQUFkQTtBQUF4QyxPQURELENBRFc7QUFBQSxHQUFYLENBSEYsQ0FERCxlQVVDLDJEQUFDLDZEQUFEO0FBQ08yQixtQkFBZSxFQUFFLElBRHhCO0FBQzhCQyxlQUFXLEVBQUUsSUFEM0M7QUFDaURDLFlBQVEsRUFBRSxhQUQzRDtBQUMwRUMsZUFBVyxFQUFFO0FBRHZGLElBVkQsQ0FERCxDQURELENBREQ7QUFvQkEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzREQ7QUFFQTs7QUFDTyxJQUFNQyxVQUFVO0FBQUEsc0VBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNDLG1CQUFULFFBQVNBLE9BQVQsRUFBa0JDLE9BQWxCLFFBQWtCQSxPQUFsQixFQUEyQjlCLE1BQTNCLFFBQTJCQSxNQUEzQixFQUFtQzBCLFFBQW5DLFFBQW1DQSxRQUFuQztBQUNuQkssa0JBRG1CLEdBQ1YsSUFBSUMsUUFBSixDQUFhSCxPQUFPLENBQUNJLE9BQXJCLENBRFU7QUFFekJGLGtCQUFNLENBQUNHLE1BQVAsQ0FBYyxRQUFkLEVBQXdCbEMsTUFBeEI7QUFDQStCLGtCQUFNLENBQUNHLE1BQVAsQ0FBYyxXQUFkLEVBQTJCUixRQUFRLENBQUNTLFFBQXBDO0FBQ0FKLGtCQUFNLENBQUNHLE1BQVAsQ0FBYyxXQUFkLEVBQTJCUixRQUFRLENBQUNVLFFBQXBDO0FBSnlCO0FBQUEsbUJBTUpDLDRDQUFLLENBQUNDLElBQU4sNkJBQWdDUixPQUFoQyxHQUEyQ0MsTUFBM0MsQ0FOSTs7QUFBQTtBQU1uQlEsa0JBTm1CO0FBQUEsNkNBT2xCQSxNQVBrQixhQU9sQkEsTUFQa0IsdUJBT2xCQSxNQUFNLENBQUVDLElBUFU7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBVlosVUFBVTtBQUFBO0FBQUE7QUFBQSxHQUFoQixDOzs7Ozs7Ozs7Ozs7QUNIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTXRCLFVBQVUsR0FBRztBQUN6QkMsY0FBWSxFQUFFLGNBRFc7QUFFekJrQyxpQkFBZSxFQUFFLGlCQUZRO0FBR3pCQyxlQUFhLEVBQUUsZUFIVTtBQUl6QkMscUJBQW1CLEVBQUUscUJBSkk7QUFLekJDLGNBQVksRUFBRTtBQUxXLENBQW5CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMUDtBQUVBOztBQUNPLElBQU1DLG1CQUFtQjtBQUFBLHNFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTN0Msa0JBQVQsUUFBU0EsTUFBVDtBQUFBO0FBQUEsbUJBQ2JxQyw0Q0FBSyxDQUFDUyxHQUFOLDZCQUErQjlDLE1BQS9CLEVBRGE7O0FBQUE7QUFDNUJ1QyxrQkFENEI7QUFBQSw2Q0FFM0JBLE1BRjJCLGFBRTNCQSxNQUYyQix1QkFFM0JBLE1BQU0sQ0FBRUMsSUFGbUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBbkJLLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxHQUF6QjtBQUtQOztBQUNPLElBQU1FLGdCQUFnQjtBQUFBLHNFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxxQkFBVCxTQUFTQSxTQUFUO0FBQUE7QUFBQSxtQkFDVlgsNENBQUssQ0FBQ1MsR0FBTiw0QkFBOEJFLFNBQTlCLEVBRFU7O0FBQUE7QUFDekJULGtCQUR5QjtBQUFBLDhDQUV4QkEsTUFGd0IsYUFFeEJBLE1BRndCLHVCQUV4QkEsTUFBTSxDQUFFQyxJQUZnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFoQk8sZ0JBQWdCO0FBQUE7QUFBQTtBQUFBLEdBQXRCO0FBS1A7O0FBQ08sSUFBTUUsVUFBVTtBQUFBLHNFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0paLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxtQkFBWCxDQURJOztBQUFBO0FBQ25CQyxrQkFEbUI7QUFBQSw4Q0FFbEJBLE1BRmtCLGFBRWxCQSxNQUZrQix1QkFFbEJBLE1BQU0sQ0FBRUMsSUFGVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFWUyxVQUFVO0FBQUE7QUFBQTtBQUFBLEdBQWhCO0FBS1A7O0FBQ08sSUFBTUMsY0FBYztBQUFBLHNFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTQyxzQkFBVCxTQUFTQSxVQUFUO0FBQ3ZCcEIsa0JBRHVCLEdBQ2QsSUFBSUMsUUFBSixFQURjO0FBRTdCbUIsc0JBQVUsQ0FBQ3JFLE9BQVgsQ0FBbUIsVUFBQ3NFLEVBQUQ7QUFBQSxxQkFBUXJCLE1BQU0sQ0FBQ0csTUFBUCxDQUFjLFlBQWQsRUFBNEJrQixFQUE1QixDQUFSO0FBQUEsYUFBbkI7QUFGNkI7QUFBQSxtQkFJUmYsNENBQUssQ0FBQ0MsSUFBTix5QkFBbUNQLE1BQW5DLENBSlE7O0FBQUE7QUFJdkJRLGtCQUp1QjtBQUFBLDhDQU10QkEsTUFOc0IsYUFNdEJBLE1BTnNCLHVCQU10QkEsTUFBTSxDQUFFQyxJQU5jOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWRVLGNBQWM7QUFBQTtBQUFBO0FBQUEsR0FBcEI7QUFTUDs7QUFDTyxJQUFNRyxhQUFhO0FBQUEsc0VBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNGLHNCQUFULFNBQVNBLFVBQVQsRUFBcUJuRCxNQUFyQixTQUFxQkEsTUFBckI7QUFDdEIrQixrQkFEc0IsR0FDYixJQUFJQyxRQUFKLEVBRGE7QUFFNUJtQixzQkFBVSxDQUFDckUsT0FBWCxDQUFtQixVQUFDc0UsRUFBRDtBQUFBLHFCQUFRckIsTUFBTSxDQUFDRyxNQUFQLENBQWMsWUFBZCxFQUE0QmtCLEVBQTVCLENBQVI7QUFBQSxhQUFuQjtBQUY0QjtBQUFBLG1CQUlQZiw0Q0FBSyxDQUFDQyxJQUFOLCtCQUFrQ3RDLE1BQWxDLEdBQTRDK0IsTUFBNUMsQ0FKTzs7QUFBQTtBQUl0QlEsa0JBSnNCO0FBQUEsOENBTXJCQSxNQU5xQixhQU1yQkEsTUFOcUIsdUJBTXJCQSxNQUFNLENBQUVDLElBTmE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBYmEsYUFBYTtBQUFBO0FBQUE7QUFBQSxHQUFuQjtBQVNQOztBQUNPLElBQU1DLFdBQVc7QUFBQSx1RUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU3pCLG1CQUFULFVBQVNBLE9BQVQsRUFBa0J1QixFQUFsQixVQUFrQkEsRUFBbEI7QUFDcEJyQixrQkFEb0IsR0FDWCxJQUFJQyxRQUFKLENBQWFILE9BQU8sQ0FBQ0ksT0FBckIsQ0FEVztBQUFBO0FBQUEsbUJBR0xJLDRDQUFLLENBQUNDLElBQU4sOEJBQWlDYyxFQUFqQyxHQUF1Q3JCLE1BQXZDLENBSEs7O0FBQUE7QUFHcEJRLGtCQUhvQjtBQUFBLDhDQUluQkEsTUFKbUIsYUFJbkJBLE1BSm1CLHVCQUluQkEsTUFBTSxDQUFFQyxJQUpXOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQVhjLFdBQVc7QUFBQTtBQUFBO0FBQUEsR0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q1A7QUFFQTs7QUFDTyxJQUFNQyxxQkFBcUI7QUFBQSxzRUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU0MsMEJBQVQsUUFBU0EsY0FBVDtBQUFBO0FBQUEsbUJBQ2ZuQiw0Q0FBSyxDQUFDUyxHQUFOLDJCQUE2QlUsY0FBN0IsRUFEZTs7QUFBQTtBQUM5QmpCLGtCQUQ4QjtBQUFBLDZDQUU3QkEsTUFGNkIsYUFFN0JBLE1BRjZCLHVCQUU3QkEsTUFBTSxDQUFFQyxJQUZxQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFyQmUscUJBQXFCO0FBQUE7QUFBQTtBQUFBLEdBQTNCO0FBS1A7O0FBQ08sSUFBTUUsZ0JBQWdCO0FBQUEsc0VBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVNULHFCQUFULFNBQVNBLFNBQVQsRUFBb0JVLE1BQXBCLFNBQW9CQSxNQUFwQjtBQUN6QjNCLGtCQUR5QixHQUNoQixJQUFJQyxRQUFKLEVBRGdCO0FBRS9CMEIsa0JBQU0sQ0FBQzVFLE9BQVAsQ0FBZSxVQUFDNkUsS0FBRDtBQUFBLHFCQUFXNUIsTUFBTSxDQUFDRyxNQUFQLENBQWMsVUFBZCxFQUEwQnlCLEtBQTFCLENBQVg7QUFBQSxhQUFmO0FBRitCO0FBQUEsbUJBSVZ0Qiw0Q0FBSyxDQUFDQyxJQUFOLDJCQUE4QlUsU0FBOUIsR0FBMkNqQixNQUEzQyxDQUpVOztBQUFBO0FBSXpCUSxrQkFKeUI7QUFBQSw4Q0FLeEJBLE1BTHdCLGFBS3hCQSxNQUx3Qix1QkFLeEJBLE1BQU0sQ0FBRUMsSUFMZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBaEJpQixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsR0FBdEI7QUFRUDs7QUFDTyxJQUFNRyxtQkFBbUI7QUFBQSxzRUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU1oscUJBQVQsU0FBU0EsU0FBVCxFQUFvQmEsZUFBcEIsU0FBb0JBLGVBQXBCO0FBQzVCOUIsa0JBRDRCLEdBQ25CLElBQUlDLFFBQUosRUFEbUI7QUFFbEM2QiwyQkFBZSxDQUFDL0UsT0FBaEIsQ0FBd0IsVUFBQ3NFLEVBQUQ7QUFBQSxxQkFBUXJCLE1BQU0sQ0FBQ0csTUFBUCxDQUFjLGlCQUFkLEVBQWlDa0IsRUFBakMsQ0FBUjtBQUFBLGFBQXhCO0FBRmtDO0FBQUEsbUJBSWJmLDRDQUFLLENBQUNDLElBQU4sOEJBQWlDVSxTQUFqQyxHQUE4Q2pCLE1BQTlDLENBSmE7O0FBQUE7QUFJNUJRLGtCQUo0QjtBQUFBLDhDQUszQkEsTUFMMkIsYUFLM0JBLE1BTDJCLHVCQUszQkEsTUFBTSxDQUFFQyxJQUxtQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFuQm9CLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxHQUF6QjtBQVFQOztBQUNPLElBQU1FLGdCQUFnQjtBQUFBLHNFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTakMsbUJBQVQsU0FBU0EsT0FBVCxFQUFrQnVCLEVBQWxCLFNBQWtCQSxFQUFsQjtBQUN6QnJCLGtCQUR5QixHQUNoQixJQUFJQyxRQUFKLENBQWFILE9BQU8sQ0FBQ0ksT0FBckIsQ0FEZ0I7QUFBQTtBQUFBLG1CQUdWSSw0Q0FBSyxDQUFDQyxJQUFOLDRCQUErQmMsRUFBL0IsR0FBcUNyQixNQUFyQyxDQUhVOztBQUFBO0FBR3pCUSxrQkFIeUI7QUFBQSw4Q0FJeEJBLE1BSndCLGFBSXhCQSxNQUp3Qix1QkFJeEJBLE1BQU0sQ0FBRUMsSUFKZ0I7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBaEJzQixnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsR0FBdEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCUDtBQUVBOztBQUNPLElBQU1DLE1BQU07QUFBQSxzRUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU2xDLG1CQUFULFFBQVNBLE9BQVQ7QUFDZkUsa0JBRGUsR0FDTixJQUFJQyxRQUFKLENBQWFILE9BQU8sQ0FBQ0ksT0FBckIsQ0FETTtBQUFBO0FBQUEsbUJBRUFJLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxhQUFYLEVBQTBCUCxNQUExQixDQUZBOztBQUFBO0FBRWZRLGtCQUZlO0FBQUEsNkNBSWRBLE1BSmMsYUFJZEEsTUFKYyx1QkFJZEEsTUFBTSxDQUFFQyxJQUpNOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQU51QixNQUFNO0FBQUE7QUFBQTtBQUFBLEdBQVo7QUFPUDs7QUFDTyxJQUFNOUMsS0FBSztBQUFBLHNFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTWSxtQkFBVCxTQUFTQSxPQUFUO0FBQ2RFLGtCQURjLEdBQ0wsSUFBSUMsUUFBSixDQUFhSCxPQUFPLENBQUNJLE9BQXJCLENBREs7QUFBQTtBQUFBLG1CQUdDSSw0Q0FBSyxDQUFDQyxJQUFOLENBQVcsWUFBWCxFQUF5QjtBQUM3QzBCLG1CQUFLLEVBQUVqQyxNQUFNLENBQUNlLEdBQVAsQ0FBVyxPQUFYLENBRHNDO0FBRTdDbUIsc0JBQVEsRUFBRWxDLE1BQU0sQ0FBQ2UsR0FBUCxDQUFXLFVBQVg7QUFGbUMsYUFBekIsQ0FIRDs7QUFBQTtBQUdkUCxrQkFIYztBQUFBLDhDQVFiQSxNQVJhLGFBUWJBLE1BUmEsdUJBUWJBLE1BQU0sQ0FBRUMsSUFSSzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFMdkIsS0FBSztBQUFBO0FBQUE7QUFBQSxHQUFYO0FBV1A7O0FBQ08sSUFBTWlELE1BQU07QUFBQSxzRUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNBN0IsNENBQUssQ0FBQ1MsR0FBTixDQUFVLGFBQVYsQ0FEQTs7QUFBQTtBQUNmUCxrQkFEZTtBQUFBLDhDQUVkQSxNQUZjLGFBRWRBLE1BRmMsdUJBRWRBLE1BQU0sQ0FBRUMsSUFGTTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFOMEIsTUFBTTtBQUFBO0FBQUE7QUFBQSxHQUFaLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJQO0FBRUE7O0FBQ08sSUFBTTFELGdCQUFnQjtBQUFBLHNFQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFTUixrQkFBVCxRQUFTQSxNQUFUO0FBQzNCbUUsZUFEMkIsR0FDckIsZ0JBRHFCO0FBRS9CLGdCQUFJbkUsTUFBSixFQUFZbUUsR0FBRyxhQUFNQSxHQUFOLGNBQWFuRSxNQUFiLENBQUg7QUFGbUI7QUFBQSxtQkFJVnFDLDRDQUFLLENBQUNTLEdBQU4sQ0FBVXFCLEdBQVYsQ0FKVTs7QUFBQTtBQUl6QjVCLGtCQUp5QjtBQUFBLDZDQUt4QkEsTUFMd0IsYUFLeEJBLE1BTHdCLHVCQUt4QkEsTUFBTSxDQUFFQyxJQUxnQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFoQmhDLGdCQUFnQjtBQUFBO0FBQUE7QUFBQSxHQUF0QjtBQVFQOztBQUNPLElBQU00RCxlQUFlO0FBQUEsc0VBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDVC9CLDRDQUFLLENBQUNTLEdBQU4sQ0FBVSxvQkFBVixDQURTOztBQUFBO0FBQ3hCUCxrQkFEd0I7QUFBQSw4Q0FFdkJBLE1BRnVCLGFBRXZCQSxNQUZ1Qix1QkFFdkJBLE1BQU0sQ0FBRUMsSUFGZTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFmNEIsZUFBZTtBQUFBO0FBQUE7QUFBQSxHQUFyQjtBQUtQOztBQUNPLElBQU1DLE9BQU87QUFBQSxzRUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU3JCLHFCQUFULFNBQVNBLFNBQVQsRUFBb0JnQixLQUFwQixTQUFvQkEsS0FBcEI7QUFBQTtBQUFBLG1CQUNEM0IsNENBQUssQ0FBQ0MsSUFBTiwwQkFBNkJVLFNBQTdCLEdBQTBDO0FBQUVnQixtQkFBSyxFQUFMQTtBQUFGLGFBQTFDLENBREM7O0FBQUE7QUFDaEJ6QixrQkFEZ0I7QUFBQSw4Q0FFZkEsTUFGZSxhQUVmQSxNQUZlLHVCQUVmQSxNQUFNLENBQUVDLElBRk87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBUDZCLE9BQU87QUFBQTtBQUFBO0FBQUEsR0FBYjtBQUtQOztBQUNPLElBQU1DLFVBQVU7QUFBQSxzRUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBU3RCLHFCQUFULFNBQVNBLFNBQVQsRUFBb0JoRCxNQUFwQixTQUFvQkEsTUFBcEI7QUFBQTtBQUFBLG1CQUNKcUMsNENBQUssQ0FBQ0MsSUFBTiw2QkFBZ0NVLFNBQWhDLEdBQTZDO0FBQUVoRCxvQkFBTSxFQUFOQTtBQUFGLGFBQTdDLENBREk7O0FBQUE7QUFDbkJ1QyxrQkFEbUI7QUFBQSw4Q0FFbEJBLE1BRmtCLGFBRWxCQSxNQUZrQix1QkFFbEJBLE1BQU0sQ0FBRUMsSUFGVTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFIOztBQUFBLGtCQUFWOEIsVUFBVTtBQUFBO0FBQUE7QUFBQSxHQUFoQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBO0FBRWUsU0FBU0MsR0FBVCxPQWFaO0FBQUEsTUFaRkMsS0FZRSxRQVpGQSxLQVlFO0FBQUEsTUFYRkMsUUFXRSxRQVhGQSxRQVdFO0FBQUEsTUFWRkMsaUJBVUUsUUFWRkEsaUJBVUU7QUFBQSxNQVRGQyxPQVNFLFFBVEZBLE9BU0U7QUFBQSxNQVJGQyxTQVFFLFFBUkZBLFNBUUU7QUFBQSxNQVBGQyxRQU9FLFFBUEZBLFFBT0U7QUFBQSxNQU5GbEUsSUFNRSxRQU5GQSxJQU1FO0FBQUEsMkJBTEZlLFFBS0U7QUFBQSxNQUxGQSxRQUtFLDhCQUxTLEVBS1Q7QUFBQSwrQkFKRm9ELFlBSUU7QUFBQSxNQUpGQSxZQUlFLGtDQUphLElBSWI7QUFBQSxNQUhGQyxNQUdFLFFBSEZBLE1BR0U7QUFBQSxNQUZGQyxnQkFFRSxRQUZGQSxnQkFFRTtBQUFBLDBCQURGQyxPQUNFO0FBQUEsTUFERkEsT0FDRSw2QkFEUSxJQUNSOztBQUNGO0FBQ0EsdUJBQThCdkQsUUFBOUIsQ0FBUXdELElBQVI7QUFBQSxNQUFRQSxJQUFSLCtCQUFlLENBQWY7QUFBQSxzQkFBOEJ4RCxRQUE5QixDQUFrQnlELEdBQWxCO0FBQUEsTUFBa0JBLEdBQWxCLDhCQUF3QixDQUF4QjtBQUNBLE1BQU1DLFNBQVMsR0FBR0gsT0FBTyxxQkFBUUksc0RBQVIsSUFBdUIsRUFBaEQ7QUFFQTs7QUFDQSxNQUFNOUYsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSx3QkFDZCwyREFBQyw2REFBRCxRQUNFb0YsT0FBTyxpQkFDUCwyREFBQyxvREFBRCxDQUFRLEdBQVI7QUFDQyxTQUFHLEVBQUVJLE1BRE47QUFFQyxZQUFNLE1BRlA7QUFHQyxnQkFBVSxFQUFFO0FBQUVPLGdCQUFRLEVBQUU7QUFBWixPQUhiO0FBSUMsZUFBUyxnQkFBU1IsWUFBWSxJQUFJLGFBQXpCLGNBQTBDRSxnQkFBMUMsQ0FKVjtBQUtDLFdBQUssRUFBRTtBQUFFLGtCQUFVRSxJQUFaO0FBQWtCLGlCQUFTQztBQUEzQjtBQUxSLE9BTUVMLFlBQVksaUJBQUksMkRBQUMsb0RBQUQsQ0FBUSxHQUFSO0FBQVksZUFBUyxFQUFDO0FBQXRCLE9BQXdDUyxtREFBeEM7QUFBaUQsYUFBTyxFQUFFWDtBQUExRCxPQU5sQixlQU9DLDJEQUFDLG9EQUFELENBQVEsR0FBUjtBQUFZLFNBQUcsRUFBQyxhQUFoQjtBQUE4QixlQUFTLEVBQUM7QUFBeEMsT0FBc0VRLFNBQXRFLGdCQUNDO0FBQUssZUFBUyxFQUFDO0FBQWYsb0JBQ0M7QUFBSyxlQUFTLEVBQUM7QUFBZixPQUNFekUsSUFBSSxpQkFBSSwyREFBQyxzREFBRDtBQUFZQSxVQUFJLEVBQUpBLElBQVo7QUFBb0IsVUFBSSxFQUFDO0FBQXpCLE1BRFYsZUFFQztBQUFLLGVBQVMsK0JBQXdCQSxJQUFJLElBQUksTUFBaEM7QUFBZCxvQkFDQztBQUFHLGVBQVMsRUFBQztBQUFiLE9BQThCNkQsS0FBOUIsQ0FERCxFQUVFLENBQUNFLGlCQUFpQixJQUFJRCxRQUF0QixrQkFDQTtBQUFHLGVBQVMsRUFBQztBQUFiLE9BQ0VDLGlCQUFpQixnQkFBRywyREFBQyxpQkFBRCxPQUFILEdBQTJCRCxRQUQ5QyxDQUhGLENBRkQsQ0FERCxlQVlDO0FBQ0MsVUFBSSxFQUFDLFFBRE47QUFFQyxlQUFTLEVBQUMsMENBRlg7QUFHQyxhQUFPLEVBQUVHO0FBSFYsb0JBSUMsMkRBQUMsa0RBQUQ7QUFBVSxhQUFPLEVBQUMsS0FBbEI7QUFBd0IsZUFBUyxFQUFDLGVBQWxDO0FBQWtELFNBQUcsRUFBRVksc0RBQVNBO0FBQWhFLE1BSkQsQ0FaRCxDQURELGVBb0JDO0FBQUssZUFBUyxFQUFDO0FBQWYsT0FBd0NYLFFBQXhDLENBcEJELENBUEQsQ0FGRixDQURjO0FBQUEsR0FBZjtBQXFDQTs7O0FBQ0EsTUFBSUMsWUFBSixFQUFrQjtBQUNqQix3QkFBT1csOERBQVksQ0FBQ2xHLE1BQU0sRUFBUCxFQUFXWCxRQUFRLENBQUM4RyxJQUFwQixDQUFuQjtBQUNBOztBQUVELFNBQU9uRyxNQUFNLEVBQWI7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBO0FBRWUsU0FBU29HLFFBQVQsT0FBZ0U7QUFBQSxNQUE1QzNDLFNBQTRDLFFBQTVDQSxTQUE0QztBQUFBLDZCQUFqQzRDLFVBQWlDO0FBQUEsTUFBakNBLFVBQWlDLGdDQUFwQixNQUFvQjtBQUFBLE1BQVpmLFFBQVksUUFBWkEsUUFBWTs7QUFDOUU7QUFDQSxNQUFNZ0IsV0FBVyxHQUFHQyxrRUFBYyxFQUFsQzs7QUFFQSxxQkFBc0RDLGtFQUFXLENBQUM7QUFDakVDLFVBQU0sRUFBRSxTQUR5RDtBQUVqRUMsV0FBTyxFQUFFLElBRndEO0FBR2pFQyxVQUFNLEVBQUUsZ0JBQUNDLGFBQUQ7QUFBQSxhQUFtQkMsbUJBQW1CLENBQUMsS0FBRCxFQUFRO0FBQUUxQyxjQUFNLEVBQUV5QztBQUFWLE9BQVIsQ0FBdEM7QUFBQTtBQUh5RCxHQUFELENBQWpFO0FBQUEsTUFBUUUsWUFBUixnQkFBUUEsWUFBUjtBQUFBLE1BQXNCQyxhQUF0QixnQkFBc0JBLGFBQXRCO0FBQUEsTUFBcUNDLFlBQXJDLGdCQUFxQ0EsWUFBckM7QUFNQTs7O0FBQ0EsTUFBTUMsd0JBQXdCLEdBQUdDLCtEQUFXLENBQUNoRCxxREFBRCxFQUFtQjtBQUM5RC9DLGFBQVMsRUFBRTtBQUFBLGFBQU1tRixXQUFXLENBQUNhLGlCQUFaLENBQThCLENBQUNwRywrQ0FBVSxDQUFDb0MsYUFBWixFQUEyQk0sU0FBM0IsQ0FBOUIsQ0FBTjtBQUFBO0FBRG1ELEdBQW5CLENBQTVDO0FBSUEsTUFBTTJELDJCQUEyQixHQUFHRiwrREFBVyxDQUFDN0Msd0RBQUQsRUFBc0I7QUFDcEVsRCxhQUFTLEVBQUU7QUFBQSxhQUFNbUYsV0FBVyxDQUFDYSxpQkFBWixDQUE4QixDQUFDcEcsK0NBQVUsQ0FBQ29DLGFBQVosRUFBMkJNLFNBQTNCLENBQTlCLENBQU47QUFBQTtBQUR5RCxHQUF0QixDQUEvQztBQUlBOztBQUNBLE1BQU1vRCxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNRLE1BQUQsRUFBU3JGLEtBQVQsRUFBbUI7QUFDOUMsUUFBSXFGLE1BQU0sS0FBSyxLQUFmLEVBQXNCSix3QkFBd0IsQ0FBQ0ssTUFBekI7QUFBa0M3RCxlQUFTLEVBQVRBO0FBQWxDLE9BQWdEekIsS0FBaEQ7QUFDdEIsUUFBSXFGLE1BQU0sS0FBSyxRQUFmLEVBQXlCRCwyQkFBMkIsQ0FBQ0UsTUFBNUI7QUFBcUM3RCxlQUFTLEVBQVRBO0FBQXJDLE9BQW1EekIsS0FBbkQ7QUFDekIsR0FIRDtBQUtBOzs7QUFDQSxzQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQThCOEUsWUFBWSxFQUExQyxnQkFDQyxvRUFBV0MsYUFBYSxFQUF4QixDQURELGVBRUMsMkRBQUMsYUFBRDtBQUNDLG1CQUFlLEVBQUVFLHdCQUF3QixDQUFDM0YsU0FEM0M7QUFFT3VGLHVCQUFtQixFQUFuQkEsbUJBRlA7QUFFNEJVLHNCQUFrQixFQUFFUCxZQUZoRDtBQUU4RFgsY0FBVSxFQUFWQTtBQUY5RCxJQUZELGVBTUM7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFZixRQUFRLENBQUM7QUFBRXVCLHVCQUFtQixFQUFuQkEsbUJBQUY7QUFBdUJ2RixhQUFTLEVBQUU4RiwyQkFBMkIsQ0FBQzlGO0FBQTlELEdBQUQsQ0FEVixDQU5ELENBREQ7QUFZQTtBQUVEOztBQUNBLElBQU1rRyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLFFBQThFO0FBQUEsTUFBM0VDLGVBQTJFLFNBQTNFQSxlQUEyRTtBQUFBLE1BQTFEWixtQkFBMEQsU0FBMURBLG1CQUEwRDtBQUFBLE1BQXJDVSxrQkFBcUMsU0FBckNBLGtCQUFxQztBQUFBLE1BQWpCbEIsVUFBaUIsU0FBakJBLFVBQWlCOztBQUNuRztBQUNBLHNCQUFzREcsa0VBQVcsQ0FBQztBQUNqRUMsVUFBTSxFQUFFLFNBRHlEO0FBRWpFaUIsd0JBQW9CLEVBQUUsSUFGMkM7QUFHakVmLFVBQU0sRUFBRSxnQkFBQ0MsYUFBRDtBQUFBLGFBQW1CQyxtQkFBbUIsQ0FBQyxLQUFELEVBQVE7QUFBRTFDLGNBQU0sRUFBRXlDO0FBQVYsT0FBUixDQUF0QztBQUFBO0FBSHlELEdBQUQsQ0FBakU7QUFBQSxNQUFRRSxZQUFSLGlCQUFRQSxZQUFSO0FBQUEsTUFBc0JDLGFBQXRCLGlCQUFzQkEsYUFBdEI7QUFBQSxNQUFxQ0MsWUFBckMsaUJBQXFDQSxZQUFyQztBQU1BOzs7QUFDQSxzQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQThCRixZQUFZLEVBQTFDLGdCQUNDLG9FQUFXQyxhQUFhLEVBQXhCLENBREQsZUFFQywyREFBQyw2REFBRCxRQUNFLENBQUNDLFlBQVksSUFBSU8sa0JBQWpCLGtCQUNBLDJEQUFDLG9EQUFELENBQVEsR0FBUixlQUFnQnZCLG1EQUFoQjtBQUF5QixhQUFTLEVBQUM7QUFBbkMsbUJBQ0M7QUFBSyxhQUFTLEVBQUMsc0NBQWY7QUFBc0QsU0FBSyxFQUFFO0FBQUUsZ0JBQVU7QUFBWjtBQUE3RCxrQkFDQywyREFBQyxrREFBRDtBQUFVLFdBQU8sRUFBQyxLQUFsQjtBQUF3QixhQUFTLEVBQUMsOEJBQWxDO0FBQWlFLE9BQUcsRUFBRTJCLHVEQUFlQTtBQUFyRixJQURELENBREQsQ0FGRixDQUZELGVBV0MsMkRBQUMsb0RBQUQsQ0FBUSxNQUFSLGVBQ0tDLHNEQURMO0FBRUMsT0FBRyxFQUFDLGFBRkw7QUFHQyxRQUFJLEVBQUMsUUFITjtBQUlDLGFBQVMsMEdBQW1HdkIsVUFBbkcsQ0FKVjtBQUtDLFNBQUssRUFBRTtBQUFFLGdCQUFVO0FBQVo7QUFMUixtQkFNQywyREFBQyxnREFBRDtBQUNDLFdBQU8sRUFBRW9CLGVBRFY7QUFFQyxXQUFPLEVBQUU7QUFBRUksbUJBQWEsRUFBRTtBQUFqQixLQUZWO0FBR0MsY0FBVSxFQUFFO0FBSGIsa0JBSUMsMkRBQUMsa0RBQUQ7QUFBVSxXQUFPLEVBQUMsS0FBbEI7QUFBd0IsYUFBUyxFQUFDLDhCQUFsQztBQUFpRSxPQUFHLEVBQUVDLDBEQUFZQTtBQUFsRixJQUpELENBTkQsQ0FYRCxDQUREO0FBMkJBLENBcENELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRWUsU0FBU0MsY0FBVCxPQUE4RTtBQUFBLE1BQXBEQyxPQUFvRCxRQUFwREEsT0FBb0Q7QUFBQSxNQUEzQzFDLFFBQTJDLFFBQTNDQSxRQUEyQztBQUFBLDZCQUFqQzJDLFVBQWlDO0FBQUEsTUFBakNBLFVBQWlDLGdDQUFwQixFQUFvQjtBQUFBLDBCQUFoQkMsT0FBZ0I7QUFBQSxNQUFoQkEsT0FBZ0IsNkJBQU4sRUFBTTs7QUFDNUY7QUFDQSw4QkFBNEVBLE9BQTVFLENBQVFMLGFBQVI7QUFBQSxNQUFRQSxhQUFSLHNDQUF3QiwwQkFBeEI7QUFBQSw4QkFBNEVLLE9BQTVFLENBQW9EQyxjQUFwRDtBQUFBLE1BQW9EQSxjQUFwRCxzQ0FBcUUsRUFBckU7QUFFQTs7QUFDQSxzQkFDQywyREFBQyw2REFBRDtBQUFpQixXQUFPLEVBQUU7QUFBMUIsS0FDRUgsT0FBTyxnQkFDUCwyREFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxPQUFHLEVBQUMsUUFBaEI7QUFBeUIsYUFBUyxFQUFFSDtBQUFwQyxLQUF1REQsc0RBQXZELGdCQUNDLDJEQUFDLDBFQUFEO0FBQWtCLFNBQUssRUFBQyxTQUF4QjtBQUFrQyxRQUFJLEVBQUVLO0FBQXhDLElBREQsQ0FETyxnQkFLUCwyREFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxPQUFHLEVBQUMsU0FBaEI7QUFBMEIsYUFBUyxFQUFFRTtBQUFyQyxLQUF5RFAsc0RBQXpELEdBQ0V0QyxRQURGLENBTkYsQ0FERDtBQWFBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQkQ7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUVlLFNBQVM4QyxLQUFULE9BQTJFO0FBQUEsTUFBMURDLFdBQTBELFFBQTFEQSxXQUEwRDtBQUFBLE1BQTdDL0MsUUFBNkMsUUFBN0NBLFFBQTZDO0FBQUEsTUFBbkNnRCxVQUFtQyxRQUFuQ0EsVUFBbUM7QUFBQSwwQkFBdkJDLE9BQXVCO0FBQUEsTUFBdkJBLE9BQXVCLDZCQUFiLFNBQWE7O0FBQ3RGLE1BQU12SSxNQUFNLEdBQUcsU0FBVEEsTUFBUztBQUFBLHdCQUNYO0FBQUssU0FBRyxFQUFDLGNBQVQ7QUFBd0IsZUFBUyx1Q0FBZ0N1SSxPQUFoQztBQUFqQyxvQkFDSSwyREFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxlQUFTLEVBQUMsdUJBQXRCO0FBQThDLGFBQU8sRUFBRUY7QUFBdkQsT0FBd0VyQyxtREFBeEUsRUFESixlQUVJLDJEQUFDLG9EQUFELENBQVEsT0FBUjtBQUFnQixTQUFHLEVBQUMsdUJBQXBCO0FBQTRDLGVBQVMsRUFBQztBQUF0RCxPQUFrRndDLHdEQUFsRixnQkFDSTtBQUFLLGVBQVMsRUFBQztBQUFmLE9BQXFEbEQsUUFBckQsQ0FESixDQUZKLENBRFc7QUFBQSxHQUFmO0FBU0E7OztBQUNBLE1BQUlnRCxVQUFKLEVBQWdCO0FBQ1osd0JBQU9wQyw4REFBWSxDQUFDbEcsTUFBTSxFQUFQLEVBQVdzSSxVQUFYLENBQW5CO0FBQ0g7O0FBRUQsU0FBT3RJLE1BQU0sRUFBYjtBQUNILEM7Ozs7Ozs7Ozs7OztBQ3hCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFZSxTQUFTeUksVUFBVCxPQUE2QztBQUFBLE1BQXZCbkgsU0FBdUIsUUFBdkJBLFNBQXVCO0FBQUEsTUFBWmdFLFFBQVksUUFBWkEsUUFBWTs7QUFDM0Q7QUFDQSxzQkFDQywyREFBQyw2REFBRCxRQUNFaEUsU0FBUyxnQkFDVCwyREFBQyxvREFBRCxDQUFRLEdBQVIsRUFBZ0IwRSxtREFBaEIsZUFDQywyREFBQyx3RUFBRDtBQUFnQixTQUFLLEVBQUM7QUFBdEIsSUFERCxDQURTLGdCQUtUO0FBQUssT0FBRyxFQUFDO0FBQVQsS0FBcUJWLFFBQXJCLENBTkYsQ0FERDtBQVdBLEM7Ozs7Ozs7Ozs7OztBQ3JCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQU1vRCxJQUFJLEdBQUcsQ0FBQyxJQUFELEVBQU8sQ0FBUCxFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsQ0FBYjtBQUVBLElBQU0xQyxPQUFPLEdBQUc7QUFDZjJDLFNBQU8sRUFBRTtBQUNSMUosV0FBTyxFQUFFO0FBREQsR0FETTtBQUlmeUcsU0FBTyxFQUFFO0FBQ1J6RyxXQUFPLEVBQUU7QUFERCxHQUpNO0FBT2YySixNQUFJLEVBQUU7QUFDTDNKLFdBQU8sRUFBRTtBQURKLEdBUFM7QUFVZjRKLFlBQVUsRUFBRTtBQUNYQyxRQUFJLEVBQUVKLElBREs7QUFFWDNDLFlBQVEsRUFBRTtBQUZDO0FBVkcsQ0FBaEI7QUFnQkEsSUFBTUQsVUFBVSxHQUFHO0FBQ2xCNkMsU0FBTyxFQUFFO0FBQ1JJLEtBQUMsRUFBRSxHQURLO0FBRVI5SixXQUFPLEVBQUU7QUFGRCxHQURTO0FBS2xCeUcsU0FBTyxFQUFFO0FBQ1JxRCxLQUFDLEVBQUUsQ0FESztBQUVSOUosV0FBTyxFQUFFLENBRkQ7QUFHUjRKLGNBQVUsRUFBRTtBQUNYRyxVQUFJLEVBQUUsUUFESztBQUVYQyxhQUFPLEVBQUUsRUFGRTtBQUdYQyxlQUFTLEVBQUU7QUFIQTtBQUhKLEdBTFM7QUFjbEJOLE1BQUksRUFBRTtBQUNMRyxLQUFDLEVBQUUsR0FERTtBQUVMOUosV0FBTyxFQUFFLENBRko7QUFHTDRKLGNBQVUsRUFBRTtBQUNYRyxVQUFJLEVBQUUsUUFESztBQUVYQyxhQUFPLEVBQUUsRUFGRTtBQUdYQyxlQUFTLEVBQUU7QUFIQTtBQUhQO0FBZFksQ0FBbkI7QUF5QkEsSUFBTVYsWUFBWSxHQUFHO0FBQ3BCRyxTQUFPLEVBQUU7QUFDUkksS0FBQyxFQUFFO0FBREssR0FEVztBQUlwQnJELFNBQU8sRUFBRTtBQUNScUQsS0FBQyxFQUFFLElBREs7QUFFUkYsY0FBVSxFQUFFO0FBQ1hHLFVBQUksRUFBRSxRQURLO0FBRVhDLGFBQU8sRUFBRSxFQUZFO0FBR1hDLGVBQVMsRUFBRTtBQUhBO0FBRkosR0FKVztBQVlwQk4sTUFBSSxFQUFFO0FBQ0xHLEtBQUMsRUFBRSxNQURFO0FBRUxGLGNBQVUsRUFBRTtBQUNYRyxVQUFJLEVBQUUsUUFESztBQUVYQyxhQUFPLEVBQUUsRUFGRTtBQUdYQyxlQUFTLEVBQUU7QUFIQTtBQUZQO0FBWmMsQ0FBckI7QUFzQkEsSUFBTXRCLFVBQVUsR0FBRztBQUNsQmUsU0FBTyxFQUFFO0FBQ1JRLFNBQUssRUFBRSxDQURDO0FBRVJsSyxXQUFPLEVBQUU7QUFGRCxHQURTO0FBS2xCeUcsU0FBTyxFQUFFO0FBQ1J5RCxTQUFLLEVBQUUsQ0FEQztBQUVSbEssV0FBTyxFQUFFO0FBRkQsR0FMUztBQVNsQjJKLE1BQUksRUFBRTtBQUNMTyxTQUFLLEVBQUUsQ0FERjtBQUVMbEssV0FBTyxFQUFFO0FBRkosR0FUWTtBQWFsQjRKLFlBQVUsRUFBRTtBQUNYQyxRQUFJLEVBQUVKLElBREs7QUFFWDNDLFlBQVEsRUFBRTtBQUZDO0FBYk0sQ0FBbkI7O0FBbUJBLElBQU1xRCxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLE1BQUNDLEtBQUQsdUVBQVMsQ0FBVDtBQUFBLFNBQWdCO0FBQ2xDVixXQUFPLEVBQUU7QUFBRTFKLGFBQU8sRUFBRSxDQUFYO0FBQWM4SixPQUFDLEVBQUU7QUFBakIsS0FEeUI7QUFFbENyRCxXQUFPLEVBQUU7QUFBRXpHLGFBQU8sRUFBRSxDQUFYO0FBQWM4SixPQUFDLEVBQUUsQ0FBakI7QUFBb0JGLGdCQUFVLEVBQUU7QUFBRUcsWUFBSSxFQUFFLFFBQVI7QUFBa0JDLGVBQU8sRUFBRSxFQUEzQjtBQUErQkMsaUJBQVMsRUFBRSxHQUExQztBQUErQ0ksYUFBSyxFQUFFRCxLQUFLLEdBQUc7QUFBOUQ7QUFBaEMsS0FGeUI7QUFHbENULFFBQUksRUFBRTtBQUFFM0osYUFBTyxFQUFFLENBQVg7QUFBY2tLLFdBQUssRUFBRSxJQUFyQjtBQUEyQk4sZ0JBQVUsRUFBRTtBQUFFRyxZQUFJLEVBQUUsUUFBUjtBQUFrQkMsZUFBTyxFQUFFLEVBQTNCO0FBQStCQyxpQkFBUyxFQUFFO0FBQTFDO0FBQXZDO0FBSDRCLEdBQWhCO0FBQUEsQ0FBbkI7O0FBTUEsSUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWU7QUFBQSxNQUFDRixLQUFELHVFQUFTLENBQVQ7QUFBQSxTQUFnQjtBQUNwQ1YsV0FBTyxFQUFFO0FBQUUxSixhQUFPLEVBQUUsQ0FBWDtBQUFjdUssT0FBQyxFQUFFO0FBQWpCLEtBRDJCO0FBRXBDOUQsV0FBTyxFQUFFO0FBQUV6RyxhQUFPLEVBQUUsQ0FBWDtBQUFjdUssT0FBQyxFQUFFLENBQWpCO0FBQW9CWCxnQkFBVSxFQUFFO0FBQUVHLFlBQUksRUFBRSxRQUFSO0FBQWtCQyxlQUFPLEVBQUUsRUFBM0I7QUFBK0JDLGlCQUFTLEVBQUUsR0FBMUM7QUFBK0NJLGFBQUssRUFBRUQsS0FBSyxHQUFHO0FBQTlEO0FBQWhDLEtBRjJCO0FBR3BDVCxRQUFJLEVBQUU7QUFBRTNKLGFBQU8sRUFBRSxDQUFYO0FBQWN1SyxPQUFDLEVBQUUsRUFBakI7QUFBcUJYLGdCQUFVLEVBQUU7QUFBRUcsWUFBSSxFQUFFLFFBQVI7QUFBa0JDLGVBQU8sRUFBRSxFQUEzQjtBQUErQkMsaUJBQVMsRUFBRTtBQUExQztBQUFqQztBQUg4QixHQUFoQjtBQUFBLENBQXJCOzs7Ozs7Ozs7Ozs7OztBQzFGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFFZSxTQUFTTyxVQUFULE9BQTBEO0FBQUEsTUFBcENDLFFBQW9DLFFBQXBDQSxRQUFvQztBQUFBLE1BQTFCQyxhQUEwQixRQUExQkEsYUFBMEI7QUFBQSxNQUFYQyxPQUFXLFFBQVhBLE9BQVc7O0FBQ3hFO0FBQ0Esb0JBQXFCQyx3REFBVSxDQUFDQyxnREFBRCxDQUEvQjtBQUFBLE1BQVF2SixRQUFSLGVBQVFBLFFBQVI7QUFFQTs7O0FBQ0Esc0JBQ0MsMkRBQUMsb0RBQUQsQ0FBUSxHQUFSLGVBQWdCaUksK0RBQWhCO0FBQThCLGFBQVMsRUFBQztBQUF4QyxtQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUNDLFFBQUksRUFBQyxRQUROO0FBRUMsYUFBUyxFQUFDLGdEQUZYO0FBR0MsV0FBTyxFQUFFbUI7QUFIVixrQkFJQywyREFBQyxrREFBRDtBQUFVLFdBQU8sRUFBQyxLQUFsQjtBQUF3QixhQUFTLEVBQUMsZUFBbEM7QUFBa0QsT0FBRyxFQUFFMUQsc0RBQVNBO0FBQWhFLElBSkQsQ0FERCxlQU9DO0FBQUcsYUFBUyxFQUFDO0FBQWIsS0FBMEJ5RCxRQUFRLENBQUNLLE1BQW5DLGNBUEQsQ0FERCxlQVVDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUNFSCxPQUFPLENBQUNoSSxHQUFSLENBQ0EsaUJBVUNvSSxXQVZELEVBV0s7QUFBQSxRQVRIL0UsS0FTRyxTQVRIQSxLQVNHO0FBQUEsUUFSSGdGLEtBUUcsU0FSSEEsS0FRRztBQUFBLFFBUEhDLGFBT0csU0FQSEEsYUFPRztBQUFBLFFBTkhDLElBTUcsU0FOSEEsSUFNRztBQUFBLCtCQUxIQyxRQUtHO0FBQUEsUUFMSEEsUUFLRywrQkFMUSxFQUtSO0FBQUEsK0JBSkhDLFFBSUc7QUFBQSxRQUpIQSxRQUlHLCtCQUpRLFlBQU0sQ0FBRSxDQUloQjtBQUFBLGdDQUhIL0ksU0FHRztBQUFBLFFBSEhBLFNBR0csZ0NBSFMsS0FHVDs7QUFDSixRQUFJNEksYUFBYSxDQUFDSSxRQUFkLENBQXVCL0osUUFBdkIsQ0FBSixFQUFzQztBQUNyQywwQkFDQztBQUFJLFdBQUcsRUFBRXlKLFdBQVQ7QUFBc0IsaUJBQVMsRUFBQztBQUFoQyxzQkFDQztBQUNDLGlCQUFTLEVBQUMsc0VBRFg7QUFFQyxlQUFPLEVBQUVLO0FBRlYsc0JBR0M7QUFDQyxpQkFBUyx1Q0FBZ0NKLEtBQWhDO0FBRFYsc0JBRUMsMkRBQUMsc0RBQUQ7QUFDQyxlQUFPLEVBQUUzSSxTQURWO0FBRUMsa0JBQVUsRUFBRSxFQUZiO0FBR0MsZUFBTyxFQUFFO0FBQ1J1Ryx1QkFBYSwwQ0FBbUNvQyxLQUFuQztBQURMO0FBSFYsc0JBTUMsMkRBQUMsa0RBQUQ7QUFDQyxlQUFPLEVBQUMsS0FEVDtBQUVDLGlCQUFTLHVCQUFnQkcsUUFBaEIsbUJBQWlDSCxLQUFqQyxDQUZWO0FBR0MsV0FBRyxFQUFFRTtBQUhOLFFBTkQsQ0FGRCxDQUhELGVBa0JDO0FBQU0saUJBQVMsRUFBQztBQUFoQixTQUE2Q2xGLEtBQTdDLENBbEJELENBREQsQ0FERDtBQXdCQTtBQUNELEdBdkNELENBREYsQ0FERCxDQVZELENBREQsQ0FERCxDQUREO0FBOERBLEM7Ozs7Ozs7Ozs7OztBQ3BGRDtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTeEcsS0FBVCxPQUFvRDtBQUFBLE1BQW5DOEwsT0FBbUMsUUFBbkNBLE9BQW1DO0FBQUEsTUFBMUJDLFVBQTBCLFFBQTFCQSxVQUEwQjtBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYzs7QUFDbEU7QUFDQSxNQUFNQyxlQUFlLEdBQUc7QUFDdkJDLFdBQU8sRUFBRTtBQUNSMUYsV0FBSyxFQUFFLFNBREM7QUFFUmtGLFVBQUksRUFBRVMsd0RBQVdBO0FBRlQsS0FEYztBQUt2QkMsU0FBSyxFQUFFO0FBQ041RixXQUFLLEVBQUUsT0FERDtBQUVOa0YsVUFBSSxFQUFFVyx1REFBU0E7QUFGVCxLQUxnQjtBQVN2QkMsV0FBTyxFQUFFO0FBQ1I5RixXQUFLLEVBQUUsU0FEQztBQUVSa0YsVUFBSSxFQUFFYSx3REFBV0E7QUFGVDtBQVRjLEdBQXhCO0FBZUE7O0FBQ0Esc0JBQ0M7QUFBSyxhQUFTLEVBQUMsMkJBQWY7QUFBMkMsUUFBSSxFQUFDLE9BQWhEO0FBQXdEO0FBQXhELGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxhQUFTLHFEQUE4Q1IsVUFBOUM7QUFBZCxrQkFDQywyREFBQyxrREFBRDtBQUNDLFdBQU8sRUFBQyxLQURUO0FBRUMsYUFBUyxFQUFDLDJCQUZYO0FBR0MsT0FBRyxFQUFFRSxlQUFlLENBQUNGLFVBQUQsQ0FBZixDQUE0Qkw7QUFIbEMsSUFERCxDQURELGVBUUM7QUFBRyxhQUFTLEVBQUM7QUFBYixLQUFxQk8sZUFBZSxDQUFDRixVQUFELENBQWYsQ0FBNEJ2RixLQUFqRCxDQVJELGVBU0M7QUFBUSxhQUFTLEVBQUMsaUNBQWxCO0FBQW9ELFFBQUksRUFBQyxRQUF6RDtBQUFrRSxXQUFPLEVBQUV3RjtBQUEzRSxrQkFDQywyREFBQyxrREFBRDtBQUFVLFdBQU8sRUFBQyxLQUFsQjtBQUF3QixhQUFTLEVBQUMsZUFBbEM7QUFBa0QsT0FBRyxFQUFFeEUsNERBQVNBO0FBQWhFLElBREQsQ0FURCxDQURELGVBY0M7QUFBTSxhQUFTLEVBQUM7QUFBaEIsS0FBa0VzRSxPQUFsRSxDQWRELENBREQ7QUFrQkEsQzs7Ozs7Ozs7Ozs7O0FDOUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUVlLFNBQVNVLFVBQVQsR0FBc0I7QUFDcEM7QUFDQSxzQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQW1DLE9BQUcsRUFBRUMsa0VBQXhDO0FBQTRDLFVBQU0sRUFBRUMscUVBQXBEO0FBQThELE9BQUcsRUFBQztBQUFsRSxJQURELENBREQ7QUFLQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2REO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBO0FBRWUsU0FBU0MsUUFBVCxPQUFvRDtBQUFBLE1BQWhDQyxTQUFnQyxRQUFoQ0EsU0FBZ0M7QUFBQSxNQUFyQi9GLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVJnRyxJQUFROztBQUNsRTtBQUNBLGtCQUE4QmxMLHNEQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBO0FBQUEsTUFBT2dGLE9BQVA7QUFBQSxNQUFnQm1HLFVBQWhCO0FBRUE7OztBQUNBLG9CQUFxQjFCLHdEQUFVLENBQUNDLGdEQUFELENBQS9CO0FBQUEsTUFBUXZKLFFBQVIsZUFBUUEsUUFBUjtBQUVBOzs7QUFDQSxNQUFNMEUsS0FBSyxxQkFBY29HLFNBQWQsQ0FBWDtBQUNBLE1BQU1uRyxRQUFRLG9CQUFkO0FBRUE7O0FBQ0EsTUFBTUcsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQSxXQUFNa0csVUFBVSxDQUFDLENBQUNuRyxPQUFGLENBQWhCO0FBQUEsR0FBbEI7QUFFQTs7O0FBQ0Esc0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLEtBQW9DRSxRQUFwQyxDQURELEVBRUUvRSxRQUFRLEtBQUssT0FBYixpQkFDQSxxSUFDQztBQUNDLGFBQVMsRUFBQyxrSEFEWDtBQUVDLFdBQU8sRUFBRThFLFNBRlY7QUFHQyxTQUFLLEVBQUU7QUFBRSxnQkFBVTtBQUFaO0FBSFIsa0JBSUMsMkRBQUMsa0RBQUQ7QUFBVSxXQUFPLEVBQUMsS0FBbEI7QUFBd0IsYUFBUyxFQUFDLDhCQUFsQztBQUFpRSxPQUFHLEVBQUVtRyxxREFBUUE7QUFBOUUsSUFKRCxDQURELGVBT0MsMkRBQUMsMkNBQUQ7QUFBV3ZHLFNBQUssRUFBTEEsS0FBWDtBQUFrQkMsWUFBUSxFQUFSQSxRQUFsQjtBQUE0QkUsV0FBTyxFQUFQQSxPQUE1QjtBQUFxQ0MsYUFBUyxFQUFUQTtBQUFyQyxrQkFDQywyREFBQyxxREFBRDtBQUFvQkosU0FBSyxFQUFMQSxLQUFwQjtBQUEyQm9HLGFBQVMsRUFBVEEsU0FBM0I7QUFBc0NoRyxhQUFTLEVBQVRBO0FBQXRDLEtBQW9EaUcsSUFBcEQsRUFERCxDQVBELENBSEYsQ0FERDtBQWtCQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakREO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFFZSxTQUFTRyxZQUFULE9BUVo7QUFBQSxNQVBGeEcsS0FPRSxRQVBGQSxLQU9FO0FBQUEsTUFORm9HLFNBTUUsUUFORkEsU0FNRTtBQUFBLE1BTEZoRyxTQUtFLFFBTEZBLFNBS0U7QUFBQSxNQUpGcUcsT0FJRSxRQUpGQSxPQUlFO0FBQUEsTUFIRnJCLFFBR0UsUUFIRkEsUUFHRTtBQUFBLE1BRkZzQixVQUVFLFFBRkZBLFVBRUU7QUFBQSxNQURGQyxpQkFDRSxRQURGQSxpQkFDRTs7QUFDRjtBQUNBLGtCQUEwQnhMLHNEQUFRLENBQUNzTCxPQUFELENBQWxDO0FBQUE7QUFBQSxNQUFPRyxLQUFQO0FBQUEsTUFBY0MsUUFBZDtBQUVBOzs7QUFDQSxNQUFNeEosT0FBTyxHQUFHeUosb0RBQU0sRUFBdEI7QUFDQSxNQUFNQyxRQUFRLEdBQUdELG9EQUFNLEVBQXZCO0FBRUE7O0FBQ0FFLHlEQUFTLENBQUMsWUFBTTtBQUFBOztBQUNmLFFBQUlELFFBQUosYUFBSUEsUUFBSixlQUFJQSxRQUFRLENBQUV0SixPQUFkLEVBQXVCc0osUUFBUSxTQUFSLElBQUFBLFFBQVEsV0FBUixpQ0FBQUEsUUFBUSxDQUFFdEosT0FBVix3RUFBbUJ3SixNQUFuQjtBQUN2QixHQUZRLEVBRU4sRUFGTSxDQUFUO0FBSUE7O0FBQ0EsTUFBTUMsWUFBWSxHQUFHakYsK0RBQVcsQ0FBQ21ELFFBQUQsRUFBVztBQUMxQ2xKLGFBQVMsRUFBRSxxQkFBTTtBQUNoQnlLLHVCQUFpQjtBQUNqQnZHLGVBQVM7QUFDVDtBQUp5QyxHQUFYLENBQWhDO0FBT0E7O0FBQ0Esc0JBQ0M7QUFDQyxPQUFHLEVBQUUvQyxPQUROO0FBRUMsYUFBUyxFQUFDLG1EQUZYO0FBR0MsWUFBUSxFQUFFLGtCQUFDOEosS0FBRCxFQUFXO0FBQ3BCQSxXQUFLLENBQUNDLGNBQU47QUFDQUYsa0JBQVksQ0FBQzdFLE1BQWIsQ0FBb0I7QUFBRWhGLGVBQU8sRUFBUEEsT0FBRjtBQUFXdUIsVUFBRSxFQUFFOEg7QUFBZixPQUFwQjtBQUNBO0FBTkYsa0JBT0M7QUFBTyxhQUFTLEVBQUMsU0FBakI7QUFBMkIsV0FBTyxFQUFFTjtBQUFwQyxLQUNFcEcsS0FERixDQVBELGVBVUMsMkRBQUMsa0VBQUQ7QUFDQyxhQUFTLEVBQUMsaURBRFg7QUFFQyxNQUFFLEVBQUVvRyxTQUZMO0FBR0MsUUFBSSxFQUFFQSxTQUhQO0FBSUMsUUFBSSxFQUFDLE1BSk47QUFLQyxTQUFLLEVBQUVRLEtBTFI7QUFNQyxZQUFRLEVBQUU7QUFBQSxVQUFhQSxLQUFiLFNBQUdTLE1BQUgsQ0FBYVQsS0FBYjtBQUFBLGFBQTJCQyxRQUFRLENBQUNELEtBQUQsQ0FBbkM7QUFBQSxLQU5YO0FBT0MsT0FBRyxFQUFFRztBQVBOLElBVkQsZUFtQkMsMkRBQUMsZ0RBQUQ7QUFDQyxTQUFLLEVBQUMsTUFEUDtBQUVDLG9CQUFnQixFQUFDLGtDQUZsQjtBQUdDLGFBQVMsRUFBRUcsWUFBWSxDQUFDN0ssU0FIekI7QUFJQyxRQUFJLEVBQUM7QUFKTixJQW5CRCxDQUREO0FBNEJBLEM7Ozs7Ozs7Ozs7OztBQ3BFRDtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRWUsU0FBU2lMLE1BQVQsR0FBa0I7QUFDaEM7QUFDQSxzQkFDQztBQUFRLGFBQVMsRUFBQztBQUFsQixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0MsMkRBQUMscURBQUQ7QUFBTSxhQUFTLEVBQUMsdUJBQWhCO0FBQXdDLE1BQUUsRUFBRS9LLDhDQUFNLENBQUNFLEtBQW5EO0FBQTBELFNBQUssRUFBQztBQUFoRSxrQkFDQztBQUFJLGFBQVMsRUFBQztBQUFkLGdCQURELGVBRUM7QUFBRyxhQUFTLEVBQUM7QUFBYixpQkFGRCxDQURELENBREQsQ0FERCxDQUREO0FBWUEsQzs7Ozs7Ozs7Ozs7O0FDckJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFFZSxTQUFTOEssZ0JBQVQsR0FBNEI7QUFDMUM7QUFDQSxNQUFNQyxPQUFPLEdBQUdDLCtEQUFVLEVBQTFCO0FBRUE7O0FBQ0EsTUFBTUMsY0FBYyxHQUFHekYsK0RBQVcsQ0FBQ3ZDLG9EQUFELEVBQVM7QUFDMUN4RCxhQUFTLEVBQUUscUJBQU07QUFDaEJzTCxhQUFPLENBQUNHLElBQVIsQ0FBYXBMLDhDQUFNLENBQUNFLEtBQXBCO0FBQ0FtTCxrRUFBSyxlQUFDLDJEQUFDLHVDQUFEO0FBQU8sZUFBTyxFQUFFLDBCQUFoQjtBQUE0QyxrQkFBVSxFQUFDO0FBQXZELFFBQUQsQ0FBTDtBQUNBLEtBSnlDO0FBSzFDQyxXQUFPLEVBQUU7QUFBQSxhQUFNRCw0REFBSyxlQUFDLDJEQUFDLHVDQUFEO0FBQU8sZUFBTyxFQUFFLHVCQUFoQjtBQUF5QyxrQkFBVSxFQUFDO0FBQXBELFFBQUQsQ0FBWDtBQUFBO0FBTGlDLEdBQVQsQ0FBbEM7QUFRQTs7QUFDQSxzQkFDQztBQUFRLGFBQVMsRUFBQztBQUFsQixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQywyREFBQyxxREFBRDtBQUFNLGFBQVMsRUFBQyx1QkFBaEI7QUFBd0MsTUFBRSxFQUFFckwsOENBQU0sQ0FBQ0MsUUFBbkQ7QUFBNkQsU0FBSyxFQUFDO0FBQW5FLGtCQUNDO0FBQUksYUFBUyxFQUFDO0FBQWQsZ0JBREQsZUFFQztBQUFHLGFBQVMsRUFBQztBQUFiLGlCQUZELENBREQsQ0FERCxlQVNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSSxhQUFTLEVBQUM7QUFBZCxrQkFDQztBQUFJLGFBQVMsRUFBQztBQUFkLGtCQUNDO0FBQ0MsUUFBSSxFQUFDLDBCQUROO0FBRUMsU0FBSyxFQUFDLFFBRlA7QUFHQyxhQUFTLEVBQUMsa0NBSFg7QUFJQyxXQUFPLEVBQUU7QUFBQSxhQUFNa0wsY0FBYyxDQUFDckYsTUFBZixFQUFOO0FBQUE7QUFKVixrQkFLQztBQUFNLGFBQVMsRUFBQztBQUFoQixjQUxELENBREQsQ0FERCxDQURELENBVEQsQ0FERCxDQURELENBREQ7QUE2QkEsQzs7Ozs7Ozs7Ozs7O0FDM0REO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBO0FBRWUsU0FBU3lGLG1CQUFULE9BQStFO0FBQUEsTUFBaEQ5SCxLQUFnRCxRQUFoREEsS0FBZ0Q7QUFBQSxNQUF6QytILFdBQXlDLFFBQXpDQSxXQUF5QztBQUFBLE1BQTVCQyxLQUE0QixRQUE1QkEsS0FBNEI7QUFBQSxNQUFyQnBKLEVBQXFCLFFBQXJCQSxFQUFxQjtBQUFBLE1BQWpCcUosTUFBaUIsUUFBakJBLE1BQWlCO0FBQUEsTUFBVHpJLEtBQVMsUUFBVEEsS0FBUzs7QUFDN0Y7QUFDQSxNQUFNMEksT0FBTyxHQUFHO0FBQUV0SixNQUFFLEVBQUZBLEVBQUY7QUFBTXFKLFVBQU0sRUFBTkEsTUFBTjtBQUFjekksU0FBSyxFQUFMQTtBQUFkLEdBQWhCO0FBRUE7O0FBQ0Esb0JBQXFCb0Ysd0RBQVUsQ0FBQ3VELGdEQUFELENBQS9CO0FBQUEsTUFBUTdNLFFBQVIsZUFBUUEsUUFBUjs7QUFDQSxNQUFNK0YsV0FBVyxHQUFHQyxrRUFBYyxFQUFsQztBQUVBOztBQUNBLE1BQU1xRixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDL0J0RixlQUFXLENBQUNhLGlCQUFaLENBQThCLENBQUNwRywrQ0FBVSxDQUFDb0MsYUFBWixFQUEyQlUsRUFBM0IsQ0FBOUI7QUFDQSxHQUZEO0FBSUE7OztBQUNBLHNCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsWUFBS3RELFFBQVEsS0FBSyxPQUFiLElBQXdCLFVBQTdCO0FBQWQsa0JBQ0MsMkRBQUMsa0RBQUQ7QUFDQyxhQUFTLEVBQUMsT0FEWDtBQUVDLFdBQU8sRUFBRTBFLEtBRlY7QUFHQyxZQUFRLEVBQUVsQixnREFIWDtBQUlDLGNBQVUsRUFBRUYsRUFKYjtBQUtDLHFCQUFpQixFQUFFK0g7QUFMcEIsa0JBTUM7QUFBSSxhQUFTLEVBQUM7QUFBZCxLQUFvQzNHLEtBQUssR0FBR0EsS0FBSCxHQUFXLGtCQUFwRCxDQU5ELENBREQsQ0FERCxlQVdDO0FBQUssYUFBUyxZQUFLMUUsUUFBUSxLQUFLLE9BQWIsSUFBd0IsVUFBN0I7QUFBZCxrQkFDQywyREFBQyxrREFBRDtBQUNDLGFBQVMsRUFBQyxhQURYO0FBRUMsV0FBTyxFQUFFeU0sV0FGVjtBQUdDLFlBQVEsRUFBRWpKLGdEQUhYO0FBSUMsY0FBVSxFQUFFRixFQUpiO0FBS0MscUJBQWlCLEVBQUUrSDtBQUxwQixrQkFNQztBQUFHLGFBQVMsRUFBQztBQUFiLEtBQ0VvQixXQUFXLGdCQUNYLHlFQUFPQSxXQUFQLENBRFcsZ0JBR1g7QUFBTSxhQUFTLEVBQUM7QUFBaEIsS0FDRSx3RUFERixDQUpGLENBTkQsQ0FERCxDQVhELENBREQsZUErQkM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQywyREFBQyw0Q0FBRDtBQUFhQyxTQUFLLEVBQUxBLEtBQWI7QUFBb0JFLFdBQU8sRUFBUEEsT0FBcEI7QUFBK0IsUUFBSSxFQUFDO0FBQXBDLElBREQsRUFFRTVNLFFBQVEsS0FBSyxPQUFiLGlCQUF3QiwyREFBQyxpREFBRDtBQUFlME0sU0FBSyxFQUFMQSxLQUFmO0FBQXNCRSxXQUFPLEVBQVBBO0FBQXRCLElBRjFCLENBL0JELENBREQ7QUFzQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBO0FBRWUsU0FBU0Usa0JBQVQsT0FBbUY7QUFBQSxNQUFyREMsWUFBcUQsUUFBckRBLFlBQXFEO0FBQUEsTUFBdkM3SixTQUF1QyxRQUF2Q0EsU0FBdUM7QUFBQSxNQUE1QmlHLFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQWxCNkQsY0FBa0IsUUFBbEJBLGNBQWtCOztBQUNqRztBQUNBLE1BQVl0SixjQUFaLEdBQW1EcUosWUFBbkQsQ0FBUXpKLEVBQVI7QUFBQSxNQUE0Qm9CLEtBQTVCLEdBQW1EcUksWUFBbkQsQ0FBNEJySSxLQUE1QjtBQUFBLDZCQUFtRHFJLFlBQW5ELENBQW1DRSxNQUFuQztBQUFBLE1BQW1DQSxNQUFuQyxxQ0FBNEMsRUFBNUM7O0FBQ0EsY0FBa0JBLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDekQsTUFBUCxHQUFnQixDQUFqQixDQUFOLElBQTZCLEVBQS9DO0FBQUEsTUFBUTNGLEtBQVIsU0FBUUEsS0FBUjtBQUVBOzs7QUFDQSxNQUFNa0MsV0FBVyxHQUFHQyxrRUFBYyxFQUFsQztBQUVBOztBQUNBLE1BQU1xRixpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDL0J0RixlQUFXLENBQUNhLGlCQUFaLENBQThCLENBQUNwRywrQ0FBVSxDQUFDb0MsYUFBWixFQUEyQk0sU0FBM0IsQ0FBOUI7QUFDQSxHQUZEO0FBSUE7OztBQUNBLHNCQUNDO0FBQVMsYUFBUywwQ0FBbUNpRyxRQUFRLENBQUNZLFFBQVQsQ0FBa0JyRyxjQUFsQixLQUFxQyxhQUF4RTtBQUFsQixrQkFDQywyREFBQyxxREFBRDtBQUFNLE1BQUUsc0JBQWVSLFNBQWYscUJBQW1DUSxjQUFuQyxTQUFvRHRELFFBQVEsQ0FBQ0MsTUFBN0QsQ0FBUjtBQUErRSxTQUFLLEVBQUVxRTtBQUF0RixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBOEIsT0FBRyxFQUFFYixLQUFuQztBQUEwQyxVQUFNLFlBQUtBLEtBQUwsUUFBaEQ7QUFBaUUsT0FBRyxFQUFFYTtBQUF0RSxJQURELENBREQsQ0FERCxlQU1DO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0MsMkRBQUMsa0RBQUQ7QUFDQyxhQUFTLEVBQUMsT0FEWDtBQUVDLGFBQVMsRUFBRXhCLFNBRlo7QUFHQyxXQUFPLEVBQUV3QixLQUhWO0FBSUMsWUFBUSxFQUFFVixxREFKWDtBQUtDLGNBQVUsRUFBRU4sY0FMYjtBQU1PMkgscUJBQWlCLEVBQWpCQTtBQU5QLGtCQU9DLDJEQUFDLG9EQUFELENBQVEsQ0FBUixlQUFjNUYsMERBQWQ7QUFBdUIsYUFBUyxFQUFDO0FBQWpDLE1BQ0VmLEtBREYsQ0FQRCxDQURELENBTkQsZUFtQkM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUNDLGFBQVMsRUFBQyxxQkFEWDtBQUVDLFdBQU8sRUFBRSxpQkFBQ21ILEtBQUQsRUFBVztBQUNuQkEsV0FBSyxDQUFDQyxjQUFOO0FBQ0FrQixvQkFBYyxDQUFDdEosY0FBRCxDQUFkO0FBQ0E7QUFMRixrQkFNQywyREFBQyxrREFBRDtBQUFVLFdBQU8sRUFBQyxLQUFsQjtBQUF3QixhQUFTLEVBQUMsZ0NBQWxDO0FBQW1FLE9BQUcsRUFBRXdKLHNEQUFTQTtBQUFqRixJQU5ELENBREQsQ0FuQkQsQ0FERDtBQWdDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFRDtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFFZSxTQUFTQyxtQkFBVCxPQUEyRDtBQUFBLE1BQTVCQyxhQUE0QixRQUE1QkEsYUFBNEI7QUFBQSxNQUFibEssU0FBYSxRQUFiQSxTQUFhOztBQUN6RTtBQUNBLHNCQUFvRG1LLDJEQUFZLEVBQWhFO0FBQUEsTUFBUWxFLFFBQVIsaUJBQVFBLFFBQVI7QUFBQSxNQUFrQjZELGNBQWxCLGlCQUFrQkEsY0FBbEI7QUFBQSxNQUFrQzVELGFBQWxDLGlCQUFrQ0EsYUFBbEM7O0FBQ0EsTUFBTXJELFdBQVcsR0FBR0Msa0VBQWMsRUFBbEM7O0FBQ0Esb0JBQXFCc0Qsd0RBQVUsQ0FBQ0MsaURBQUQsQ0FBL0I7QUFBQSxNQUFRdkosUUFBUixlQUFRQSxRQUFSO0FBRUE7OztBQUNBLE1BQU02RywyQkFBMkIsR0FBR0YsK0RBQVcsQ0FBQzdDLHdEQUFELEVBQXNCO0FBQ3BFbEQsYUFBUyxFQUFFLHFCQUFNO0FBQ2hCbUYsaUJBQVcsQ0FBQ2EsaUJBQVosQ0FBOEIsQ0FBQ3BHLCtDQUFVLENBQUNvQyxhQUFaLEVBQTJCTSxTQUEzQixDQUE5QjtBQUNBa0csbUJBQWE7QUFDYjtBQUptRSxHQUF0QixDQUEvQztBQU9BOztBQUNBLE1BQU1DLE9BQU8sR0FBRyxDQUNmO0FBQ0MzRSxTQUFLLEVBQUUsUUFEUjtBQUVDZ0YsU0FBSyxFQUFFLFFBRlI7QUFHQ0MsaUJBQWEsRUFBRSxDQUFDLE9BQUQsQ0FIaEI7QUFJQ0MsUUFBSSxFQUFFMEQsc0RBSlA7QUFLQ3pELFlBQVEsRUFBRSxFQUxYO0FBTUNDLFlBQVEsRUFBRTtBQUFBLGFBQU1qRCwyQkFBMkIsQ0FBQ0UsTUFBNUIsQ0FBbUM7QUFBRTdELGlCQUFTLEVBQVRBLFNBQUY7QUFBYWEsdUJBQWUsRUFBRW9GO0FBQTlCLE9BQW5DLENBQU47QUFBQSxLQU5YO0FBT0NwSSxhQUFTLEVBQUU4RiwyQkFBMkIsQ0FBQzlGO0FBUHhDLEdBRGUsQ0FBaEI7QUFZQSxzQkFDQyxxSUFDQztBQUFLLGFBQVMsWUFBS29JLFFBQVEsQ0FBQ0ssTUFBVCxHQUFrQixDQUFsQixJQUF1QixnQkFBNUI7QUFBZCxLQUNFeEosUUFBUSxLQUFLLE9BQWIsZ0JBQ0EsMkRBQUMsZ0RBQUQ7QUFBZ0JrRCxhQUFTLEVBQVRBLFNBQWhCO0FBQTJCa0ssaUJBQWEsRUFBYkEsYUFBM0I7QUFBMEN0SCxjQUFVLEVBQUU7QUFBdEQsS0FDRTtBQUFBLHdCQUFNLDJEQUFDLE1BQUQ7QUFBY3NILG1CQUFhLEVBQWJBLGFBQWQ7QUFBNkJsSyxlQUFTLEVBQVRBLFNBQTdCO0FBQXdDaUcsY0FBUSxFQUFSQSxRQUF4QztBQUFrRDZELG9CQUFjLEVBQWRBO0FBQWxELE1BQU47QUFBQSxHQURGLENBREEsZ0JBS0E7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQywyREFBQyxNQUFEO0FBQWNJLGlCQUFhLEVBQWJBLGFBQWQ7QUFBNkJsSyxhQUFTLEVBQVRBLFNBQTdCO0FBQXdDaUcsWUFBUSxFQUFSQSxRQUF4QztBQUFrRDZELGtCQUFjLEVBQWRBO0FBQWxELElBREQsQ0FORixDQURELGVBWUMsMkRBQUMsNkRBQUQsUUFDRTdELFFBQVEsQ0FBQ0ssTUFBVCxHQUFrQixDQUFsQixpQkFBdUIsMkRBQUMsdURBQUQ7QUFBa0JMLFlBQVEsRUFBUkEsUUFBbEI7QUFBNEJDLGlCQUFhLEVBQWJBLGFBQTVCO0FBQTJDQyxXQUFPLEVBQVBBO0FBQTNDLElBRHpCLENBWkQsQ0FERDtBQWtCQTs7QUFFRCxJQUFNa0UsTUFBTSxHQUFHLFNBQVRBLE1BQVMsUUFBNEQ7QUFBQSxNQUF6REgsYUFBeUQsU0FBekRBLGFBQXlEO0FBQUEsTUFBMUNsSyxTQUEwQyxTQUExQ0EsU0FBMEM7QUFBQSxNQUEvQmlHLFFBQStCLFNBQS9CQSxRQUErQjtBQUFBLE1BQXJCNkQsY0FBcUIsU0FBckJBLGNBQXFCO0FBQzFFLHNCQUNDLDJEQUFDLDZEQUFELFFBQ0VJLGFBQWEsQ0FBQy9MLEdBQWQsQ0FBa0IsVUFBQzBMLFlBQUQsRUFBZVMsaUJBQWY7QUFBQSx3QkFDbEIsMkRBQUMsb0RBQUQsQ0FBUSxHQUFSLGVBQ0szRSxxRUFBVSxDQUFDMkUsaUJBQUQsQ0FEZjtBQUVDLFNBQUcsRUFBRVQsWUFBWSxDQUFDekosRUFGbkI7QUFHQyxlQUFTLEVBQUMsNkNBSFg7QUFJQyxZQUFNO0FBSlAscUJBS0MsMkRBQUMsMkRBQUQ7QUFBMEJ5SixrQkFBWSxFQUFaQSxZQUExQjtBQUF3QzdKLGVBQVMsRUFBVEEsU0FBeEM7QUFBbURpRyxjQUFRLEVBQVJBLFFBQW5EO0FBQTZENkQsb0JBQWMsRUFBZEE7QUFBN0QsTUFMRCxDQURrQjtBQUFBLEdBQWxCLENBREYsQ0FERDtBQWFBLENBZEQsQzs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRWUsU0FBU1MsT0FBVCxPQUF3RDtBQUFBLE1BQXJDYixPQUFxQyxRQUFyQ0EsT0FBcUM7QUFBQSxNQUE1QnpELFFBQTRCLFFBQTVCQSxRQUE0QjtBQUFBLE1BQWxCNkQsY0FBa0IsUUFBbEJBLGNBQWtCOztBQUN0RTtBQUNBLE1BQVF0SSxLQUFSLEdBQW9Ea0ksT0FBcEQsQ0FBUWxJLEtBQVI7QUFBQSxNQUFlMEksYUFBZixHQUFvRFIsT0FBcEQsQ0FBZVEsYUFBZjtBQUFBLE1BQThCVixLQUE5QixHQUFvREUsT0FBcEQsQ0FBOEJGLEtBQTlCO0FBQUEsTUFBcUNDLE1BQXJDLEdBQW9EQyxPQUFwRCxDQUFxQ0QsTUFBckM7QUFBQSxNQUE2Q3JKLEVBQTdDLEdBQW9Ec0osT0FBcEQsQ0FBNkN0SixFQUE3QztBQUVBOztBQUNBLHNCQUNDLDJEQUFDLHFEQUFEO0FBQ0MsTUFBRSxxQkFBY0EsRUFBZCxTQUFtQmxELFFBQVEsQ0FBQ0MsTUFBNUIsQ0FESDtBQUVDLFNBQUssRUFBRXFFLEtBRlI7QUFHQyxhQUFTLDBDQUFtQ3lFLFFBQVEsQ0FBQ1ksUUFBVCxDQUFrQnpHLEVBQWxCLEtBQXlCLGFBQTVEO0FBSFYsa0JBSUMsMkRBQUMsOENBQUQ7QUFBb0I4SixpQkFBYSxFQUFiQTtBQUFwQixJQUpELGVBS0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUcsYUFBUyxFQUFDO0FBQWIsS0FBcUIxSSxLQUFLLEdBQUdBLEtBQUgsR0FBVyxrQkFBckMsQ0FERCxlQUVDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0MsMkRBQUMsNENBQUQ7QUFBYWdJLFNBQUssRUFBTEEsS0FBYjtBQUFvQkUsV0FBTyxFQUFFO0FBQUVELFlBQU0sRUFBTkE7QUFBRixLQUE3QjtBQUF5Q2UsVUFBTSxFQUFFO0FBQWpELElBREQsQ0FGRCxDQURELENBTEQsZUFhQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQ0MsYUFBUyxFQUFDLHFCQURYO0FBRUMsV0FBTyxFQUFFLGlCQUFDN0IsS0FBRCxFQUFXO0FBQ25CQSxXQUFLLENBQUNDLGNBQU47QUFDQWtCLG9CQUFjLENBQUMxSixFQUFELENBQWQ7QUFDQTtBQUxGLGtCQU1DLDJEQUFDLGtEQUFEO0FBQVUsV0FBTyxFQUFDLEtBQWxCO0FBQXdCLGFBQVMsRUFBQyxnQ0FBbEM7QUFBbUUsT0FBRyxFQUFFNEosc0RBQVNBO0FBQWpGLElBTkQsQ0FERCxDQWJELENBREQ7QUEwQkEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBO0FBRWUsU0FBU1MsVUFBVCxPQUF5QztBQUFBLE1BQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQ3ZEO0FBQ0Esa0JBQWtDL04sc0RBQVEsQ0FBQyxJQUFELENBQTFDO0FBQUE7QUFBQSxNQUFPcUQsU0FBUDtBQUFBLE1BQWtCMkssWUFBbEI7O0FBQ0EsbUJBQWtDaE8sc0RBQVEsQ0FBQyxLQUFELENBQTFDO0FBQUE7QUFBQSxNQUFPaU8sU0FBUDtBQUFBLE1BQWtCQyxZQUFsQjtBQUVBOzs7QUFDQSxNQUFNaEksV0FBVyxHQUFHQyxrRUFBYyxFQUFsQztBQUVBOztBQUNBLGtCQUEwQnpGLDREQUFRLENBQUMsQ0FBQ0MsK0NBQVUsQ0FBQ29DLGFBQVosRUFBMkJNLFNBQTNCLENBQUQsRUFBd0M7QUFBQSxXQUFNRCw2REFBZ0IsQ0FBQztBQUFFQyxlQUFTLEVBQVRBO0FBQUYsS0FBRCxDQUF0QjtBQUFBLEdBQXhDLEVBQStFO0FBQ2hIOEssV0FBTyxFQUFFLENBQUMsQ0FBQzlLO0FBRHFHLEdBQS9FLENBQWxDO0FBQUEsTUFBYzBKLE9BQWQsYUFBUWxLLElBQVI7O0FBSUFnSix5REFBUyxDQUFDLFlBQU07QUFDZmtDLG1CQUFlLENBQUMxSyxTQUFELENBQWY7QUFDQSxHQUZRLEVBRU4sQ0FBQ0EsU0FBRCxDQUZNLENBQVQ7QUFJQTs7QUFDQSxNQUFNK0ssV0FBVyxHQUFHdEgsK0RBQVcsQ0FBQ3hELCtDQUFELEVBQWE7QUFDM0N2QyxhQUFTLEVBQUU7QUFBQSxVQUFHMEMsRUFBSCxTQUFHQSxFQUFIO0FBQUEsYUFBWXVLLFlBQVksQ0FBQ3ZLLEVBQUQsQ0FBeEI7QUFBQTtBQURnQyxHQUFiLENBQS9CO0FBSUEsTUFBTXNJLFlBQVksR0FBR2pGLCtEQUFXLENBQUNuRCxnREFBRCxFQUFjO0FBQzdDNUMsYUFBUyxFQUFFO0FBQUEsYUFBTXNOLGlCQUFpQixFQUF2QjtBQUFBO0FBRGtDLEdBQWQsQ0FBaEM7QUFJQTs7QUFDQSxNQUFNcEcsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN6QmlHLGdCQUFZLENBQUMsQ0FBQ0QsU0FBRixDQUFaO0FBRUE7O0FBQ0EsUUFBSSxDQUFDQSxTQUFMLEVBQWdCRyxXQUFXLENBQUNsSCxNQUFaO0FBRWhCOztBQUNBLFFBQUkrRyxTQUFKLEVBQWU7QUFDZEssZ0JBQVUsQ0FBQyxZQUFNO0FBQ2hCTixvQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNBLE9BRlMsRUFFUCxHQUZPLENBQVY7QUFJQUssdUJBQWlCO0FBQ2pCO0FBQ0QsR0FkRDs7QUFnQkEsTUFBTUUsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDck0sT0FBRDtBQUFBLFdBQWE2SixZQUFZLENBQUM3RSxNQUFiLENBQW9CO0FBQUVoRixhQUFPLEVBQVBBLE9BQUY7QUFBV3VCLFFBQUUsRUFBRUo7QUFBZixLQUFwQixDQUFiO0FBQUEsR0FBdEI7O0FBQ0EsTUFBTWdMLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxXQUFNbkksV0FBVyxDQUFDYSxpQkFBWixDQUE4QnBHLCtDQUFVLENBQUNtQyxlQUF6QyxDQUFOO0FBQUEsR0FBMUI7QUFFQTs7O0FBQ0Esc0JBQ0MscUlBQ0MsMkRBQUMsb0RBQUQsQ0FBUSxNQUFSLGVBQ0swRSw2REFETDtBQUVDLE9BQUcsRUFBQyxhQUZMO0FBR0MsUUFBSSxFQUFDLFFBSE47QUFJQyxhQUFTLEVBQUMscUdBSlg7QUFLQyxTQUFLLEVBQUU7QUFBRSxnQkFBVTtBQUFaLEtBTFI7QUFNQyxXQUFPLEVBQUVTO0FBTlYsbUJBT0MsMkRBQUMsa0RBQUQ7QUFBVSxXQUFPLEVBQUMsS0FBbEI7QUFBd0IsYUFBUyxFQUFDLDhCQUFsQztBQUFpRSxPQUFHLEVBQUV1Ryw0REFBY0E7QUFBcEYsSUFQRCxDQURELGVBVUMsMkRBQUMsNkRBQUQsUUFDRVAsU0FBUyxpQkFBSSwyREFBQyw4Q0FBRDtBQUFvQmxCLFdBQU8sRUFBUEEsT0FBcEI7QUFBNkJ3QixpQkFBYSxFQUFiQSxhQUE3QjtBQUE0Q3RHLGVBQVcsRUFBWEE7QUFBNUMsSUFEZixDQVZELENBREQ7QUFnQkEsQzs7Ozs7Ozs7Ozs7O0FDakZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFZSxTQUFTd0csWUFBVCxPQUF5QztBQUFBLE1BQWpCbEIsYUFBaUIsUUFBakJBLGFBQWlCOztBQUN2RDtBQUNBLGNBQStCQSxhQUFhLENBQUMsQ0FBRCxDQUFiLElBQW9CLEVBQW5EO0FBQUEsMkJBQVFILE1BQVI7QUFBQSxNQUFRQSxNQUFSLDZCQUFpQixFQUFqQjtBQUFBLE1BQXFCdkksS0FBckIsU0FBcUJBLEtBQXJCOztBQUNBLGNBQWtCdUksTUFBTSxDQUFDQSxNQUFNLENBQUN6RCxNQUFQLEdBQWdCLENBQWpCLENBQU4sSUFBNkIsRUFBL0M7QUFBQSxNQUFRM0YsS0FBUixTQUFRQSxLQUFSO0FBRUE7OztBQUNBLHNCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FDRUEsS0FBSyxpQkFBSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQThCLE9BQUcsRUFBRUEsS0FBbkM7QUFBMEMsVUFBTSxZQUFLQSxLQUFMLFFBQWhEO0FBQWlFLE9BQUcsRUFBRWE7QUFBdEUsSUFEWCxFQUVFLENBQUNiLEtBQUQsaUJBQVUsMkRBQUMsa0RBQUQ7QUFBVSxXQUFPLEVBQUMsS0FBbEI7QUFBd0IsYUFBUyxFQUFDLDhCQUFsQztBQUFpRSxPQUFHLEVBQUUwRCwwREFBWUE7QUFBbEYsSUFGWixDQUREO0FBTUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRWUsU0FBU2dILFlBQVQsT0FBb0U7QUFBQSwwQkFBNUMzQixPQUE0QztBQUFBLE1BQTVDQSxPQUE0Qyw2QkFBbEMsRUFBa0M7QUFBQSxNQUE5QndCLGFBQThCLFFBQTlCQSxhQUE4QjtBQUFBLE1BQWZ0RyxXQUFlLFFBQWZBLFdBQWU7O0FBQ2xGO0FBQ0Esb0JBQTZFOEUsT0FBN0UsQ0FBUXRKLEVBQVI7QUFBQSxNQUFZSixTQUFaLDRCQUF3QixJQUF4QjtBQUFBLHVCQUE2RTBKLE9BQTdFLENBQThCbEksS0FBOUI7QUFBQSxNQUE4QkEsS0FBOUIsK0JBQXNDLEVBQXRDO0FBQUEsOEJBQTZFa0ksT0FBN0UsQ0FBMENRLGFBQTFDO0FBQUEsTUFBMENBLGFBQTFDLHNDQUEwRCxFQUExRDtBQUFBLHVCQUE2RVIsT0FBN0UsQ0FBOERGLEtBQTlEO0FBQUEsTUFBOERBLEtBQTlELCtCQUFzRSxFQUF0RTtBQUVBOztBQUNBLE1BQU0zSyxPQUFPLEdBQUd5SixvREFBTSxFQUF0QjtBQUVBOztBQUNBLHNCQUNDLDJEQUFDLDZDQUFEO0FBQWExRCxlQUFXLEVBQVhBLFdBQWI7QUFBNEIsY0FBVSxFQUFFaEosUUFBUSxDQUFDOEc7QUFBakQsa0JBQ0M7QUFDQyxPQUFHLEVBQUU3RCxPQUROO0FBRUMsVUFBTSxFQUFDLE1BRlI7QUFHQyxhQUFTLEVBQUMsb0JBSFg7QUFJQyxZQUFRLEVBQUUsa0JBQUM4SixLQUFELEVBQVc7QUFDcEJBLFdBQUssQ0FBQ0MsY0FBTjtBQUNBaEUsaUJBQVc7QUFDWDtBQVBGLGtCQVFDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBTyxhQUFTLEVBQUMsU0FBakI7QUFBMkIsV0FBTyxFQUFDO0FBQW5DLEtBQ0VwRCxLQURGLENBREQsZUFJQztBQUNDLFFBQUksRUFBQyxNQUROO0FBRUMsYUFBUyxFQUFDLDJDQUZYO0FBR0MsTUFBRSxFQUFDLGNBSEo7QUFJQyxRQUFJLEVBQUMsT0FKTjtBQUtDLGVBQVcsRUFBQyxrQkFMYjtBQU1DLFVBQU0sRUFBRTtBQUFBLGFBQU0wSixhQUFhLENBQUNyTSxPQUFELENBQW5CO0FBQUEsS0FOVDtBQU9DLGFBQVM7QUFQVixJQUpELGVBYUM7QUFDQyxRQUFJLEVBQUMsUUFETjtBQUVDLGFBQVMsRUFBQywwQ0FGWDtBQUdDLG9CQUFhLE9BSGQ7QUFJQyxrQkFBVyxPQUpaO0FBS0MsV0FBTyxFQUFFK0YsV0FMVjtBQU1DLFlBQVEsRUFBQztBQU5WLGtCQU9DLDJEQUFDLGtEQUFEO0FBQVUsV0FBTyxFQUFDLEtBQWxCO0FBQXdCLGFBQVMsRUFBQyxlQUFsQztBQUFrRCxPQUFHLEVBQUVwQyxzREFBU0E7QUFBaEUsSUFQRCxDQWJELENBUkQsZUErQkM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBTyxhQUFTLEVBQUMsU0FBakI7QUFBMkIsV0FBTyxFQUFDO0FBQW5DLGtDQURELGVBSUMsMkRBQUMsMEVBQUQ7QUFDQyxhQUFTLEVBQUMsMkRBRFg7QUFFQyxNQUFFLEVBQUMsb0JBRko7QUFHQyxRQUFJLEVBQUMsYUFITjtBQUlDLGVBQVcsRUFBQyw0QkFKYjtBQUtDLFVBQU0sRUFBRTtBQUFBLGFBQU0wSSxhQUFhLENBQUNyTSxPQUFELENBQW5CO0FBQUE7QUFMVCxJQUpELENBREQsZUFhQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLDJEQUFDLDRDQUFEO0FBQWEySyxTQUFLLEVBQUxBLEtBQWI7QUFBb0JFLFdBQU8sRUFBUEEsT0FBcEI7QUFBK0IsUUFBSSxFQUFDO0FBQXBDLElBREQsZUFFQywyREFBQyxpREFBRDtBQUFlRixTQUFLLEVBQUxBLEtBQWY7QUFBc0JFLFdBQU8sRUFBUEE7QUFBdEIsSUFGRCxDQWJELENBREQsZUFtQkMsMkRBQUMsZ0RBQUQ7QUFBZ0IxSixhQUFTLEVBQVRBLFNBQWhCO0FBQTJCa0ssaUJBQWEsRUFBYkE7QUFBM0IsS0FDRTtBQUFBLFFBQUc5RyxtQkFBSCxTQUFHQSxtQkFBSDtBQUFBLFFBQXdCdkYsU0FBeEIsU0FBd0JBLFNBQXhCO0FBQUEsd0JBQ0EsMkRBQUMsNkRBQUQsUUFDRXFNLGFBQWEsQ0FBQy9MLEdBQWQsQ0FBa0IsVUFBQzBMLFlBQUQsRUFBZVMsaUJBQWY7QUFBQSwwQkFDbEIsMkRBQUMsYUFBRDtBQUNDLFdBQUcsRUFBRVQsWUFBWSxDQUFDekosRUFEbkI7QUFFT3lKLG9CQUFZLEVBQVpBLFlBRlA7QUFFcUJTLHlCQUFpQixFQUFqQkEsaUJBRnJCO0FBRXdDbEgsMkJBQW1CLEVBQW5CQSxtQkFGeEM7QUFFNkR2RixpQkFBUyxFQUFUQTtBQUY3RCxRQURrQjtBQUFBLEtBQWxCLENBREYsQ0FEQTtBQUFBLEdBREYsQ0FuQkQsQ0EvQkQsZUErREM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFDQyxRQUFJLEVBQUMsUUFETjtBQUVDLGFBQVMsRUFBQztBQUZYLGtCQUdDLDJEQUFDLG9EQUFELENBQVEsSUFBUjtBQUFhLGFBQVMsRUFBQztBQUF2QixrQkFDQyxnRkFERCxDQUhELENBREQsQ0FERCxDQURELENBL0RELENBREQsQ0FERDtBQWlGQTs7QUFFRCxJQUFNeU4sYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixRQUF5RTtBQUFBLE1BQXRFekIsWUFBc0UsU0FBdEVBLFlBQXNFO0FBQUEsTUFBeERTLGlCQUF3RCxTQUF4REEsaUJBQXdEO0FBQUEsTUFBckNsSCxtQkFBcUMsU0FBckNBLG1CQUFxQztBQUFBLE1BQWhCdkYsU0FBZ0IsU0FBaEJBLFNBQWdCO0FBQzlGLE1BQVEyRCxLQUFSLEdBQW1DcUksWUFBbkMsQ0FBUXJJLEtBQVI7QUFBQSxNQUFlcEIsRUFBZixHQUFtQ3lKLFlBQW5DLENBQWV6SixFQUFmO0FBQUEsNkJBQW1DeUosWUFBbkMsQ0FBbUJFLE1BQW5CO0FBQUEsTUFBbUJBLE1BQW5CLHFDQUE0QixFQUE1Qjs7QUFDQSxjQUFrQkEsTUFBTSxDQUFDQSxNQUFNLENBQUN6RCxNQUFQLEdBQWdCLENBQWpCLENBQU4sSUFBNkIsRUFBL0M7QUFBQSxNQUFRM0YsS0FBUixTQUFRQSxLQUFSOztBQUVBLHNCQUNDLDJEQUFDLG9EQUFELENBQVEsR0FBUjtBQUNDLFVBQU07QUFEUCxLQUVLZ0YscUVBQVUsQ0FBQzJFLGlCQUFELENBRmY7QUFHQyxhQUFTLEVBQUMsNkNBSFg7QUFJQyxPQUFHLEVBQUVsSztBQUpOLG1CQUtDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxhQUFTLEVBQUMsMkJBQWY7QUFBMkMsT0FBRyxFQUFFTyxLQUFoRDtBQUF1RCxPQUFHLEVBQUVhO0FBQTVELElBREQsZUFFQztBQUNDLFFBQUksRUFBQyxRQUROO0FBRUMsYUFBUyxFQUFDLHlDQUZYO0FBR0MsV0FBTyxFQUFFLGlCQUFDbUgsS0FBRCxFQUFXO0FBQ25CQSxXQUFLLENBQUM0QyxlQUFOO0FBQ0FuSSx5QkFBbUIsQ0FBQyxRQUFELEVBQVc7QUFBRXZDLHVCQUFlLEVBQUUsQ0FBQ1QsRUFBRDtBQUFuQixPQUFYLENBQW5CO0FBQ0E7QUFORixrQkFPQztBQUNDLGFBQVMsRUFBQyx1RUFEWDtBQUVDLFNBQUssRUFBRTtBQUFFLGdCQUFVO0FBQVo7QUFGUixrQkFHQywyREFBQyxzREFBRDtBQUNDLFdBQU8sRUFBRXZDLFNBRFY7QUFFQyxjQUFVLEVBQUUsRUFGYjtBQUdDLFdBQU8sRUFBRTtBQUNSdUcsbUJBQWEsRUFBRTtBQURQO0FBSFYsa0JBTUMsMkRBQUMsa0RBQUQ7QUFBVSxXQUFPLEVBQUMsS0FBbEI7QUFBd0IsYUFBUyxFQUFDLGdDQUFsQztBQUFtRSxPQUFHLEVBQUU1QixzREFBU0E7QUFBakYsSUFORCxDQUhELENBUEQsQ0FGRCxDQUxELENBREQ7QUErQkEsQ0FuQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFFZSxTQUFTZ0osY0FBVCxPQUFvRDtBQUFBLE1BQTFCeE4sUUFBMEIsUUFBMUJBLFFBQTBCO0FBQUEsTUFBaEJ5TixZQUFnQixRQUFoQkEsWUFBZ0I7O0FBQ2xFO0FBQ0Esc0JBQW9EdEIsMkRBQVksRUFBaEU7QUFBQSxNQUFRbEUsUUFBUixpQkFBUUEsUUFBUjtBQUFBLE1BQWtCNkQsY0FBbEIsaUJBQWtCQSxjQUFsQjtBQUFBLE1BQWtDNUQsYUFBbEMsaUJBQWtDQSxhQUFsQzs7QUFDQSxvQkFBd0JFLHdEQUFVLENBQUNDLGlEQUFELENBQWxDO0FBQUEsTUFBUXpKLFdBQVIsZUFBUUEsV0FBUjs7QUFDQSxNQUFNaUcsV0FBVyxHQUFHQyxrRUFBYyxFQUFsQztBQUVBOztBQUNBLE1BQU00SSxxQkFBcUIsR0FBR2pJLCtEQUFXLENBQUNwRCxtREFBRCxFQUFnQjtBQUN4RDNDLGFBQVMsRUFBRSxxQkFBTTtBQUNoQm1GLGlCQUFXLENBQUNhLGlCQUFaLENBQThCcEcsZ0RBQVUsQ0FBQ21DLGVBQXpDO0FBQ0F5RyxtQkFBYTtBQUNiO0FBSnVELEdBQWhCLENBQXpDO0FBT0EsTUFBTXlGLHNCQUFzQixHQUFHbEksK0RBQVcsQ0FBQ3ZELG9EQUFELEVBQWlCO0FBQzFEeEMsYUFBUyxFQUFFLHFCQUFNO0FBQ2hCbUYsaUJBQVcsQ0FBQ2EsaUJBQVosQ0FBOEJwRyxnREFBVSxDQUFDbUMsZUFBekM7QUFDQXlHLG1CQUFhO0FBQ2I7QUFKeUQsR0FBakIsQ0FBMUM7QUFPQSxNQUFNQyxPQUFPLEdBQUcsQ0FDZjtBQUNDM0UsU0FBSyxFQUFFLE9BRFI7QUFFQ2dGLFNBQUssRUFBRSxTQUZSO0FBR0NDLGlCQUFhLEVBQUUsQ0FBQyxNQUFELEVBQVMsT0FBVCxDQUhoQjtBQUlDQyxRQUFJLEVBQUVrRixzREFKUDtBQUtDaEYsWUFBUSxFQUFFO0FBQUEsYUFBTThFLHFCQUFxQixDQUFDN0gsTUFBdEIsQ0FBNkI7QUFBRTFELGtCQUFVLEVBQUU4RixRQUFkO0FBQXdCakosY0FBTSxFQUFFSixXQUFXLENBQUN3RDtBQUE1QyxPQUE3QixDQUFOO0FBQUEsS0FMWDtBQU1DdkMsYUFBUyxFQUFFNk4scUJBQXFCLENBQUM3TjtBQU5sQyxHQURlLEVBU2Y7QUFDQzJELFNBQUssRUFBRSxTQURSO0FBRUNnRixTQUFLLEVBQUUsV0FGUjtBQUdDQyxpQkFBYSxFQUFFLENBQUMsT0FBRCxDQUhoQjtBQUlDQyxRQUFJLEVBQUVtRix3REFBV0E7QUFKbEIsR0FUZSxFQWVmO0FBQ0NySyxTQUFLLEVBQUUsUUFEUjtBQUVDZ0YsU0FBSyxFQUFFLFFBRlI7QUFHQ0MsaUJBQWEsRUFBRSxDQUFDLE9BQUQsQ0FIaEI7QUFJQ0MsUUFBSSxFQUFFbEUsc0RBSlA7QUFLQ21FLFlBQVEsRUFBRSxFQUxYO0FBTUNDLFlBQVEsRUFBRTtBQUFBLGFBQU0rRSxzQkFBc0IsQ0FBQzlILE1BQXZCLENBQThCO0FBQUUxRCxrQkFBVSxFQUFFOEY7QUFBZCxPQUE5QixDQUFOO0FBQUEsS0FOWDtBQU9DcEksYUFBUyxFQUFFOE4sc0JBQXNCLENBQUM5TjtBQVBuQyxHQWZlLENBQWhCO0FBMEJBOztBQUNBLHNCQUNDLHFJQUNDO0FBQUksYUFBUyxFQUFDO0FBQWQscUJBREQsZUFFQywyREFBQyw2REFBRCxRQUNFRyxRQUFRLENBQUNzSSxNQUFULEtBQW9CLENBQXBCLGlCQUNBLDJEQUFDLG9EQUFELENBQVEsQ0FBUixlQUFjL0QsMERBQWQ7QUFBdUIsYUFBUyxFQUFDO0FBQWpDLHdDQUZGLENBRkQsZUFTQztBQUFLLGFBQVMseUNBQWtDMEQsUUFBUSxDQUFDSyxNQUFULEdBQWtCLENBQWxCLElBQXVCLGdCQUF6RDtBQUFkLGtCQUNDLDJEQUFDLDZEQUFELFFBQ0V0SSxRQUFRLENBQ1A4TixNQURELENBQ1EsVUFBQ3BDLE9BQUQ7QUFBQSxXQUFhQSxPQUFPLENBQUN0SixFQUFSLEtBQWVxTCxZQUE1QjtBQUFBLEdBRFIsRUFFQ3ROLEdBRkQsQ0FFSyxVQUFDdUwsT0FBRCxFQUFVcUMsWUFBVjtBQUFBLHdCQUNKLDJEQUFDLG9EQUFELENBQVEsR0FBUixlQUNLcEcscUVBQVUsQ0FBQ29HLFlBQUQsQ0FEZjtBQUVDLFNBQUcsRUFBRXJDLE9BQU8sQ0FBQ3RKLEVBRmQ7QUFHQyxlQUFTLEVBQUMsNkNBSFg7QUFJQyxZQUFNO0FBSlAscUJBS0MsMkRBQUMseUNBQUQ7QUFBZXNKLGFBQU8sRUFBUEEsT0FBZjtBQUF3QnpELGNBQVEsRUFBUkEsUUFBeEI7QUFBa0M2RCxvQkFBYyxFQUFkQTtBQUFsQyxNQUxELENBREk7QUFBQSxHQUZMLENBREYsQ0FERCxDQVRELGVBd0JDLDJEQUFDLDZEQUFELFFBQ0U3RCxRQUFRLENBQUNLLE1BQVQsR0FBa0IsQ0FBbEIsaUJBQXVCLDJEQUFDLHVEQUFEO0FBQWtCTCxZQUFRLEVBQVJBLFFBQWxCO0FBQTRCQyxpQkFBYSxFQUFiQSxhQUE1QjtBQUEyQ0MsV0FBTyxFQUFQQTtBQUEzQyxJQUR6QixDQXhCRCxDQUREO0FBOEJBLEM7Ozs7Ozs7Ozs7OztBQ3hHRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBLElBQU02RixZQUFZLEdBQUcsRUFBckI7QUFFZSxTQUFTQyxtQkFBVCxPQUFxRTtBQUFBLE1BQXRDekssS0FBc0MsUUFBdENBLEtBQXNDO0FBQUEseUJBQS9CdUksTUFBK0I7QUFBQSxNQUEvQkEsTUFBK0IsNEJBQXRCLEVBQXNCO0FBQUEsTUFBbEJ2SixjQUFrQixRQUFsQkEsY0FBa0I7O0FBQ25GO0FBQ0EsY0FBeUN1SixNQUFNLENBQUNBLE1BQU0sQ0FBQ3pELE1BQVAsR0FBZ0IsQ0FBakIsQ0FBTixJQUE2QixFQUF0RTtBQUFBLE1BQVEzRixLQUFSLFNBQVFBLEtBQVI7QUFBQSxNQUFtQjdCLE9BQW5CLFNBQWVzQixFQUFmO0FBQUEsTUFBNEI4TCxRQUE1QixTQUE0QkEsUUFBNUI7QUFFQTs7O0FBQ0EsTUFBTUMsU0FBUyxHQUFHN0Qsb0RBQU0sRUFBeEI7QUFFQTs7QUFDQSxrQkFBa0MzTCxzREFBUSxFQUExQztBQUFBO0FBQUEsTUFBT3lQLFNBQVA7QUFBQSxNQUFrQkMsWUFBbEI7O0FBQ0EsbUJBQThCMVAsc0RBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUE7QUFBQSxNQUFPZ0YsT0FBUDtBQUFBLE1BQWdCbUcsVUFBaEI7QUFFQTs7O0FBQ0EsTUFBTWxHLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdkJrRyxjQUFVLENBQUMsQ0FBQ25HLE9BQUYsQ0FBVjtBQUNBMEssZ0JBQVksQ0FBQyxJQUFELENBQVo7QUFDQSxHQUhEOztBQUtBLE1BQU1DLFNBQVMsR0FBRyxTQUFaQSxTQUFZLFFBQTBCO0FBQUEsUUFBdkJDLE9BQXVCLFNBQXZCQSxPQUF1QjtBQUFBLFFBQWRDLE9BQWMsU0FBZEEsT0FBYztBQUMzQyxRQUFNQyxTQUFTLEdBQUdOLFNBQUgsYUFBR0EsU0FBSCx1QkFBR0EsU0FBUyxDQUFFbE4sT0FBWCxDQUFtQnlOLHFCQUFuQixFQUFsQjtBQUVBTCxnQkFBWSxDQUFDLFlBQU07QUFDbEIsVUFBTWxOLFFBQVEsR0FBSSxDQUFDb04sT0FBTyxHQUFHUCxZQUFYLElBQTJCUyxTQUFTLENBQUNFLEtBQXRDLEdBQStDLEdBQWhFO0FBQ0EsVUFBTXZOLFFBQVEsR0FBSSxDQUFDb04sT0FBTyxHQUFHQyxTQUFTLENBQUN0SyxHQUFwQixHQUEwQjZKLFlBQTNCLElBQTJDUyxTQUFTLENBQUNHLE1BQXRELEdBQWdFLEdBQWpGO0FBRUEsYUFBTztBQUFFek4sZ0JBQVEsRUFBUkEsUUFBRjtBQUFZQyxnQkFBUSxFQUFSQSxRQUFaO0FBQXNCcU4saUJBQVMsRUFBVEE7QUFBdEIsT0FBUDtBQUNBLEtBTFcsQ0FBWjtBQU9BM0UsY0FBVSxDQUFDLElBQUQsQ0FBVjtBQUNBLEdBWEQ7QUFhQTs7O0FBQ0Esc0JBQ0M7QUFBSyxPQUFHLEVBQUVxRSxTQUFWO0FBQXFCLGFBQVMsRUFBQztBQUEvQixrQkFDQztBQUNDLGFBQVMsRUFBQywrQkFEWDtBQUVDLE9BQUcsRUFBRXhMLEtBRk47QUFHQyxVQUFNLFlBQUtBLEtBQUwsUUFIUDtBQUlDLE9BQUcsRUFBRWEsS0FKTjtBQUtDLFdBQU8sRUFBRThLO0FBTFYsSUFERCxFQVFFSixRQUFRLENBQUM1RixNQUFULEdBQWtCLENBQWxCLElBQ0E0RixRQUFRLENBQUMvTixHQUFULENBQWEsVUFBQzBPLE9BQUQsRUFBVUMsWUFBVjtBQUFBLHdCQUNaLDJEQUFDLDZEQUFEO0FBQXNCLFNBQUcsRUFBRUE7QUFBM0IsdUNBQWtERCxPQUFsRDtBQUEyREMsa0JBQVksRUFBWkEsWUFBM0Q7QUFBeUVYLGVBQVMsRUFBVEE7QUFBekUsUUFEWTtBQUFBLEdBQWIsQ0FURixlQVlDLDJEQUFDLDZEQUFELFFBQ0VDLFNBQVMsaUJBQ1QsMkRBQUMsNERBQUQsb0JBQThCQSxTQUE5QixnQkFDQywyREFBQyxnRUFBRDtBQUErQkEsYUFBUyxFQUFUQSxTQUEvQjtBQUEwQ3pLLFdBQU8sRUFBUEEsT0FBMUM7QUFBbURDLGFBQVMsRUFBVEEsU0FBbkQ7QUFBOEQ5QyxXQUFPLEVBQVBBLE9BQTlEO0FBQXVFMEIsa0JBQWMsRUFBZEE7QUFBdkUsSUFERCxDQUZGLENBWkQsQ0FERDtBQXNCQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkVEO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFZSxTQUFTdU0sb0JBQVQsT0FBc0Y7QUFBQSxNQUF0RHRELE1BQXNELFFBQXREQSxNQUFzRDtBQUFBLE1BQTlDb0QsT0FBOEMsUUFBOUNBLE9BQThDO0FBQUEsTUFBckNuTyxRQUFxQyxRQUFyQ0EsUUFBcUM7QUFBQSxNQUEzQm9PLFlBQTJCLFFBQTNCQSxZQUEyQjtBQUFBLE1BQWJYLFNBQWEsUUFBYkEsU0FBYTs7QUFDcEc7QUFDQSxNQUFRaE4sUUFBUixHQUErQlQsUUFBL0IsQ0FBUVMsUUFBUjtBQUFBLE1BQWtCQyxRQUFsQixHQUErQlYsUUFBL0IsQ0FBa0JVLFFBQWxCO0FBQ0E7O0FBQ0Esa0JBQThCekMsc0RBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUE7QUFBQSxNQUFPZ0YsT0FBUDtBQUFBLE1BQWdCbUcsVUFBaEI7QUFFQTs7O0FBQ0EsTUFBTWxHLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsV0FBTWtHLFVBQVUsQ0FBQyxDQUFDbkcsT0FBRixDQUFoQjtBQUFBLEdBQWxCO0FBRUE7OztBQUNBLHNCQUNDLDJEQUFDLDREQUFEO0FBQTJCeEMsWUFBUSxFQUFSQSxRQUEzQjtBQUFxQ0MsWUFBUSxFQUFSQSxRQUFyQztBQUErQ3FLLFVBQU0sRUFBTkEsTUFBL0M7QUFBdURxRCxnQkFBWSxFQUFaQSxZQUF2RDtBQUFxRUUsaUJBQWEsRUFBRXBMO0FBQXBGLGtCQUNDLDJEQUFDLE9BQUQ7QUFBZWlMLFdBQU8sRUFBUEEsT0FBZjtBQUF3QnBELFVBQU0sRUFBTkEsTUFBeEI7QUFBZ0M5SCxXQUFPLEVBQVBBLE9BQWhDO0FBQXlDQyxhQUFTLEVBQVRBLFNBQXpDO0FBQW9EbEQsWUFBUSxFQUFSQSxRQUFwRDtBQUE4RHlOLGFBQVMsRUFBVEE7QUFBOUQsSUFERCxDQUREO0FBS0E7O0FBRUQsSUFBTWMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsUUFBa0U7QUFBQSxNQUEvREosT0FBK0QsU0FBL0RBLE9BQStEO0FBQUEsTUFBdERwRCxNQUFzRCxTQUF0REEsTUFBc0Q7QUFBQSxNQUE5QzlILE9BQThDLFNBQTlDQSxPQUE4QztBQUFBLE1BQXJDQyxTQUFxQyxTQUFyQ0EsU0FBcUM7QUFBQSxNQUExQmxELFFBQTBCLFNBQTFCQSxRQUEwQjtBQUFBLE1BQWhCeU4sU0FBZ0IsU0FBaEJBLFNBQWdCOztBQUNqRjtBQUNBLE1BQU0zSyxLQUFLLEdBQUdpSSxNQUFNLENBQUN5RCxRQUFyQjtBQUNBLE1BQU16TCxRQUFRLEdBQUdnSSxNQUFNLENBQUN6SSxLQUF4QjtBQUVBOztBQUNBLG1CQUE0Q3JFLHNEQUFRLENBQUMrQixRQUFELENBQXBEO0FBQUE7QUFBQSxNQUFPeU8sY0FBUDtBQUFBLE1BQXVCQyxpQkFBdkI7QUFFQTs7O0FBQ0EsTUFBTXJMLE1BQU0sR0FBR3VHLG9EQUFNLEVBQXJCO0FBRUE7O0FBQ0FFLHlEQUFTLENBQUMsWUFBTTtBQUNmLFFBQUk5SixRQUFKLEVBQWM7QUFDYjBPLHVCQUFpQixDQUFDLFlBQU07QUFDdkIxTyxnQkFBUSxDQUFDK04sU0FBVCxHQUFxQk4sU0FBUyxDQUFDbE4sT0FBVixDQUFrQnlOLHFCQUFsQixFQUFyQjtBQUNBLGVBQU9XLDJEQUFVLENBQUN0TCxNQUFELEVBQVNyRCxRQUFULENBQWpCO0FBQ0EsT0FIZ0IsQ0FBakI7QUFJQTtBQUNELEdBUFEsRUFPTixDQUFDQSxRQUFELENBUE0sQ0FBVDtBQVNBOztBQUNBLHNCQUNDLDJEQUFDLDJDQUFEO0FBQ0MsZ0JBQVksRUFBRSxLQURmO0FBRUMsV0FBTyxFQUFFLEtBRlY7QUFHQyxvQkFBZ0IsRUFBQyxhQUhsQjtBQUlPOEMsU0FBSyxFQUFMQSxLQUpQO0FBSWNDLFlBQVEsRUFBUkEsUUFKZDtBQUl3QkUsV0FBTyxFQUFQQSxPQUp4QjtBQUlpQ0MsYUFBUyxFQUFUQSxTQUpqQztBQUk0Q2pFLFFBQUksRUFBRThMLE1BSmxEO0FBSTBEL0ssWUFBUSxFQUFFeU8sY0FKcEU7QUFJb0ZwTCxVQUFNLEVBQU5BO0FBSnBGLEtBS0U4SyxPQUxGLENBREQ7QUFTQSxDQS9CRCxDOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFFZSxTQUFTUyx1QkFBVCxPQUE2RjtBQUFBLE1BQTFEbEIsU0FBMEQsUUFBMURBLFNBQTBEO0FBQUEsTUFBL0N6SyxPQUErQyxRQUEvQ0EsT0FBK0M7QUFBQSxNQUF0Q0MsU0FBc0MsUUFBdENBLFNBQXNDO0FBQUEsTUFBM0I5QyxPQUEyQixRQUEzQkEsT0FBMkI7QUFBQSxNQUFsQjBCLGNBQWtCLFFBQWxCQSxjQUFrQjs7QUFDM0c7QUFDQSxNQUFNM0IsT0FBTyxHQUFHeUosb0RBQU0sRUFBdEI7QUFDQSxNQUFNdkcsTUFBTSxHQUFHdUcsb0RBQU0sRUFBckI7QUFFQTs7QUFDQSxNQUFNOUcsS0FBSyxHQUFHLGVBQWQ7QUFDQSxNQUFNOUMsUUFBUSxHQUFHMk8sMkRBQVUsQ0FBQ3RMLE1BQUQsRUFBU3FLLFNBQVQsQ0FBM0I7QUFFQTs7QUFDQSxvQkFBOEJoRyx3REFBVSxDQUFDQyxnREFBRCxDQUF4QztBQUFBLE1BQXFCMUksSUFBckIsZUFBUWYsV0FBUjs7QUFDQSxNQUFNaUcsV0FBVyxHQUFHQyxrRUFBYyxFQUFsQztBQUVBOztBQUNBLE1BQU15SyxrQkFBa0IsR0FBRzlKLCtEQUFXLENBQUM3RSx1REFBRCxFQUFhO0FBQ2xEbEIsYUFBUyxFQUFFLHFCQUFNO0FBQ2hCbUYsaUJBQVcsQ0FBQ2EsaUJBQVosQ0FBOEIsQ0FBQ3BHLCtDQUFVLENBQUNxQyxtQkFBWixFQUFpQzZOLFFBQVEsQ0FBQ2hOLGNBQUQsQ0FBekMsQ0FBOUI7QUFDQW9CLGVBQVM7QUFDVDtBQUppRCxHQUFiLENBQXRDO0FBT0E7O0FBQ0EsTUFBTUYsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLHdCQUN6QixxR0FDWTtBQUFNLGVBQVMsRUFBQztBQUFoQixvQkFEWixhQUR5QjtBQUFBLEdBQTFCO0FBTUE7OztBQUNBLHNCQUNDLDJEQUFDLDJDQUFEO0FBQ0MsZ0JBQVksRUFBRSxLQURmO0FBRUMsb0JBQWdCLEVBQUMsYUFGbEI7QUFHT0YsU0FBSyxFQUFMQSxLQUhQO0FBR2NFLHFCQUFpQixFQUFqQkEsaUJBSGQ7QUFHaUNDLFdBQU8sRUFBUEEsT0FIakM7QUFHMENDLGFBQVMsRUFBVEEsU0FIMUM7QUFHcURsRCxZQUFRLEVBQVJBLFFBSHJEO0FBRytEZixRQUFJLEVBQUpBLElBSC9EO0FBR3FFb0UsVUFBTSxFQUFOQTtBQUhyRSxrQkFJQztBQUNDLE9BQUcsRUFBRWxELE9BRE47QUFFQyxhQUFTLEVBQUMsbURBRlg7QUFHQyxZQUFRLEVBQUUsa0JBQUM4SixLQUFELEVBQVc7QUFDcEJBLFdBQUssQ0FBQ0MsY0FBTjtBQUNBMkUsd0JBQWtCLENBQUMxSixNQUFuQixDQUEwQjtBQUN6QmhGLGVBQU8sRUFBRUEsT0FEZ0I7QUFFekI3QixjQUFNLEVBQUVXLElBQUksQ0FBQ3lDLEVBRlk7QUFHekJ0QixlQUFPLEVBQUVBLE9BSGdCO0FBSXpCSixnQkFBUSxFQUFFME47QUFKZSxPQUExQjtBQU1BO0FBWEYsa0JBWUM7QUFBTyxhQUFTLEVBQUMsU0FBakI7QUFBMkIsV0FBTyxFQUFDO0FBQW5DLEtBQ0U1SyxLQURGLENBWkQsZUFlQywyREFBQywwRUFBRDtBQUNDLGFBQVMsRUFBQyxpREFEWDtBQUVDLE1BQUUsRUFBQyxTQUZKO0FBR0MsUUFBSSxFQUFDLFNBSE47QUFJQyxRQUFJLEVBQUMsTUFKTjtBQUtDLGVBQVcsRUFBQyx1QkFMYjtBQU1DLGFBQVM7QUFOVixJQWZELGVBdUJDLDJEQUFDLGdEQUFEO0FBQ0MsU0FBSyxFQUFDLFFBRFA7QUFFQyxvQkFBZ0IsRUFBQyxrQ0FGbEI7QUFHQyxRQUFJLEVBQUMsUUFITjtBQUlPM0QsYUFBUyxFQUFFMFAsa0JBQWtCLENBQUMxUDtBQUpyQyxJQXZCRCxDQUpELENBREQ7QUFxQ0EsQzs7Ozs7Ozs7Ozs7O0FDckZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFFZSxTQUFTNFAsbUJBQVQsT0FBeUQ7QUFBQSxNQUExQnJOLEVBQTBCLFFBQTFCQSxFQUEwQjtBQUFBLE1BQXRCb0IsS0FBc0IsUUFBdEJBLEtBQXNCO0FBQUEsTUFBZitILFdBQWUsUUFBZkEsV0FBZTs7QUFDdkU7QUFDQSxvQkFBcUJuRCx3REFBVSxDQUFDdUQsZ0RBQUQsQ0FBL0I7QUFBQSxNQUFRN00sUUFBUixlQUFRQSxRQUFSOztBQUNBLE1BQU0rRixXQUFXLEdBQUdDLGtFQUFjLEVBQWxDO0FBRUE7O0FBQ0EsTUFBTXFGLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUMvQnRGLGVBQVcsQ0FBQ2EsaUJBQVosQ0FBOEIsQ0FBQ3BHLCtDQUFVLENBQUNxQyxtQkFBWixFQUFpQ1MsRUFBakMsQ0FBOUI7QUFDQSxHQUZEO0FBSUE7OztBQUNBLHNCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsWUFBS3RELFFBQVEsS0FBSyxPQUFiLElBQXdCLFVBQTdCO0FBQWQsa0JBQ0MsMkRBQUMsa0RBQUQ7QUFDQyxhQUFTLEVBQUMsT0FEWDtBQUVDLGFBQVMsRUFBRXNELEVBRlo7QUFHQyxXQUFPLEVBQUVvQixLQUhWO0FBSUMsWUFBUSxFQUFFVixxREFKWDtBQUtDLGNBQVUsRUFBRVYsRUFMYjtBQU1PK0gscUJBQWlCLEVBQWpCQTtBQU5QLGtCQU9DO0FBQUksYUFBUyxFQUFDO0FBQWQsS0FBb0MzRyxLQUFLLEdBQUdBLEtBQUgsR0FBVyxrQkFBcEQsQ0FQRCxDQURELENBREQsZUFZQztBQUFLLGFBQVMsWUFBSzFFLFFBQVEsS0FBSyxPQUFiLElBQXdCLFVBQTdCO0FBQWQsa0JBQ0MsMkRBQUMsa0RBQUQ7QUFDQyxhQUFTLEVBQUMsYUFEWDtBQUVDLFdBQU8sRUFBRXlNLFdBRlY7QUFHQyxZQUFRLEVBQUV6SSxxREFIWDtBQUlDLGNBQVUsRUFBRVYsRUFKYjtBQUtPK0gscUJBQWlCLEVBQWpCQTtBQUxQLGtCQU1DO0FBQUcsYUFBUyxFQUFDO0FBQWIsS0FDRW9CLFdBQVcsZ0JBQ1gseUVBQU9BLFdBQVAsQ0FEVyxnQkFHWDtBQUFNLGFBQVMsRUFBQztBQUFoQiwyREFKRixDQU5ELENBREQsQ0FaRCxDQURELENBREQ7QUFtQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0REO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFFZSxTQUFTbUUsbUJBQVQsT0FBb0c7QUFBQSxNQUFyRXZPLFFBQXFFLFFBQXJFQSxRQUFxRTtBQUFBLE1BQTNEQyxRQUEyRCxRQUEzREEsUUFBMkQ7QUFBQSxNQUFqRHFLLE1BQWlELFFBQWpEQSxNQUFpRDtBQUFBLE1BQXpDcUQsWUFBeUMsUUFBekNBLFlBQXlDO0FBQUEsTUFBM0JFLGFBQTJCLFFBQTNCQSxhQUEyQjtBQUFBLE1BQVpuTCxRQUFZLFFBQVpBLFFBQVk7O0FBQ2xIO0FBQ0Esb0JBQXdCdUUsd0RBQVUsQ0FBQ0MsZ0RBQUQsQ0FBbEM7QUFBQSxNQUFRekosV0FBUixlQUFRQSxXQUFSOztBQUNBLE1BQU1lLElBQUksR0FBRzhMLE1BQU0sR0FBR0EsTUFBSCxHQUFZN00sV0FBL0I7QUFFQTs7QUFDQSxzQkFDQywyREFBQyxvREFBRCxDQUFRLEdBQVI7QUFDQyxVQUFNLE1BRFA7QUFFQyxjQUFVLEVBQUU7QUFBRTBGLGNBQVEsRUFBRTtBQUFaLEtBRmI7QUFHQyxhQUFTLEVBQUMscUJBSFg7QUFJQyxTQUFLLEVBQUU7QUFDTixhQUFPbkQsUUFERDtBQUVOLGFBQU9DO0FBRkQ7QUFKUixLQVFLbUQsMERBUkwsZ0JBU0MsMkRBQUMsb0RBQUQsQ0FBUSxNQUFSLGVBQ0s0Qiw2REFETDtBQUVDLGFBQVMsRUFBQyw2RUFGWDtBQUdDLFNBQUssRUFBRTtBQUFFLDJCQUFjeEcsSUFBSSxDQUFDZ1EsU0FBbkI7QUFBRixLQUhSO0FBSUMsV0FBTyxFQUFFWDtBQUpWLE1BS0VGLFlBQVksaUJBQUk7QUFBTSxhQUFTLEVBQUM7QUFBaEIsS0FBNEJBLFlBQVksR0FBRyxDQUEzQyxDQUxsQixDQVRELEVBZ0JFakwsUUFoQkYsQ0FERDtBQW9CQSxDOzs7Ozs7Ozs7Ozs7QUNwQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUVlLFNBQVMrTCxPQUFULE9BQXFDO0FBQUEsTUFBbEJwRSxLQUFrQixRQUFsQkEsS0FBa0I7QUFBQSxNQUFYRSxPQUFXLFFBQVhBLE9BQVc7O0FBQ25EO0FBQ0Esa0JBQThCL00sc0RBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUE7QUFBQSxNQUFPZ0YsT0FBUDtBQUFBLE1BQWdCbUcsVUFBaEI7QUFFQTs7O0FBQ0EsTUFBTWxHLFNBQVMsR0FBRyxTQUFaQSxTQUFZO0FBQUEsV0FBTWtHLFVBQVUsQ0FBQyxDQUFDbkcsT0FBRixDQUFoQjtBQUFBLEdBQWxCO0FBRUE7OztBQUNBLHNCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBUSxhQUFTLEVBQUMsc0NBQWxCO0FBQXlELFFBQUksRUFBQyxRQUE5RDtBQUF1RSxXQUFPLEVBQUVDO0FBQWhGLGtCQUNDO0FBQU0sYUFBUyxFQUFDO0FBQWhCLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0MsMkRBQUMsa0RBQUQ7QUFBVSxXQUFPLEVBQUMsS0FBbEI7QUFBd0IsYUFBUyxFQUFDLCtCQUFsQztBQUFrRSxPQUFHLEVBQUVpTSx5REFBV0E7QUFBbEYsSUFERCxDQURELENBREQsQ0FERCxlQVFDLDJEQUFDLDJDQUFEO0FBQUssU0FBSyxFQUFDLGNBQVg7QUFBMEIsWUFBUSxFQUFDLHdDQUFuQztBQUFrRmxNLFdBQU8sRUFBUEEsT0FBbEY7QUFBMkZDLGFBQVMsRUFBVEE7QUFBM0Ysa0JBQ0MsMkRBQUMsc0RBQUQ7QUFBcUI0SCxTQUFLLEVBQUxBLEtBQXJCO0FBQTRCRSxXQUFPLEVBQVBBLE9BQTVCO0FBQXFDOUgsYUFBUyxFQUFUQTtBQUFyQyxJQURELENBUkQsQ0FERDtBQWNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0Q7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7QUFDQTtBQUVlLFNBQVNrTSxhQUFULE9BQXNEO0FBQUEsTUFBN0J0RSxLQUE2QixRQUE3QkEsS0FBNkI7QUFBQSxNQUF0QkUsT0FBc0IsUUFBdEJBLE9BQXNCO0FBQUEsTUFBYjlILFNBQWEsUUFBYkEsU0FBYTs7QUFDcEU7QUFDQSxrQkFBMEJqRixzREFBUSxDQUFDLEVBQUQsQ0FBbEM7QUFBQTtBQUFBLE1BQU9vUixLQUFQO0FBQUEsTUFBY0MsUUFBZDs7QUFDQSxtQkFBc0NyUixzREFBUSxDQUFDLENBQUQsQ0FBOUM7QUFBQTtBQUFBLE1BQU9zUixXQUFQO0FBQUEsTUFBb0JDLGNBQXBCO0FBRUE7OztBQUNBLGtCQUFrRTdRLDREQUFRLENBQ3pFQywrQ0FBVSxDQUFDc0MsWUFEOEQsRUFFekV3QixvREFGeUUsQ0FBMUU7QUFBQSxpQ0FBUTVCLElBQVI7QUFBQSxNQUFjMk8sV0FBZCwrQkFBNEIsRUFBNUI7QUFBQSxNQUEyQ0Msa0JBQTNDLGFBQWdDdlEsU0FBaEM7QUFLQTs7O0FBQ0EsTUFBTXdRLGFBQWEsR0FBR0MsNERBQVcsQ0FBQ0gsV0FBRCxFQUFjM0UsS0FBZCxFQUFxQnVFLEtBQXJCLENBQWpDO0FBRUE7O0FBQ0EsTUFBTVEsUUFBUSxHQUFHakcsb0RBQU0sRUFBdkI7QUFFQTs7QUFDQSxNQUFNekYsV0FBVyxHQUFHQyxrRUFBYyxFQUFsQztBQUVBOztBQUNBLE1BQU0wTCxlQUFlLEdBQUcvSywrREFBVyxDQUFDcEMsNENBQUQsRUFBVTtBQUM1QzNELGFBQVMsRUFBRSxxQkFBTTtBQUNoQm1GLGlCQUFXLENBQUNhLGlCQUFaLENBQThCLENBQUNwRywrQ0FBVSxDQUFDb0MsYUFBWixFQUEyQmdLLE9BQU8sQ0FBQ3RKLEVBQW5DLENBQTlCO0FBQ0F5QyxpQkFBVyxDQUFDYSxpQkFBWixDQUE4QnBHLCtDQUFVLENBQUNzQyxZQUF6QztBQUVBMk8sY0FBUSxDQUFDdFAsT0FBVCxDQUFpQndKLE1BQWpCO0FBQ0F1RixjQUFRLENBQUMsRUFBRCxDQUFSO0FBQ0E7QUFQMkMsR0FBVixDQUFuQztBQVVBOztBQUNBLE1BQU1TLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsUUFBYXJHLEtBQWIsU0FBR1MsTUFBSCxDQUFhVCxLQUFiO0FBQUEsV0FBMkI0RixRQUFRLENBQUM1RixLQUFELENBQW5DO0FBQUEsR0FBckI7O0FBRUEsTUFBTXNHLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQy9GLEtBQUQsRUFBVztBQUNsQyxRQUFJLENBQUMsT0FBRCxFQUFVLEtBQVYsRUFBaUI5QixRQUFqQixDQUEwQjhCLEtBQUssQ0FBQ2dHLEdBQWhDLENBQUosRUFBMEM7QUFDekNoRyxXQUFLLENBQUNDLGNBQU47O0FBRUEsVUFBSW1GLEtBQUssS0FBSyxFQUFWLElBQWdCRSxXQUFXLEtBQUssSUFBcEMsRUFBMEM7QUFDekMsWUFBTXRRLElBQUksR0FBR3NRLFdBQVcsSUFBSUksYUFBZixHQUErQkEsYUFBYSxDQUFDSixXQUFELENBQTVDLEdBQTREQSxXQUF6RTs7QUFFQSxZQUFJVyx3REFBTyxDQUFDalIsSUFBSSxDQUFDcUQsS0FBTixDQUFYLEVBQXlCO0FBQ3hCd04seUJBQWUsQ0FBQzNLLE1BQWhCLENBQXVCO0FBQUU3RCxxQkFBUyxFQUFFMEosT0FBTyxDQUFDdEosRUFBckI7QUFBeUJZLGlCQUFLLEVBQUVyRCxJQUFJLENBQUNxRDtBQUFyQyxXQUF2QjtBQUNBO0FBQ0Q7QUFDRDtBQUNELEdBWkQ7O0FBY0EsTUFBTTZOLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUM3TixLQUFELEVBQVc7QUFDOUIsUUFBSTROLHdEQUFPLENBQUM1TixLQUFELENBQVgsRUFBb0I7QUFDbkJ3TixxQkFBZSxDQUFDM0ssTUFBaEIsQ0FBdUI7QUFBRTdELGlCQUFTLEVBQUUwSixPQUFPLENBQUN0SixFQUFyQjtBQUF5QlksYUFBSyxFQUFFQTtBQUFoQyxPQUF2QjtBQUNBO0FBQ0QsR0FKRDtBQU1BOzs7QUFDQSxzQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLDJEQUFDLDRDQUFEO0FBQWF3SSxTQUFLLEVBQUxBLEtBQWI7QUFBb0JFLFdBQU8sRUFBUEEsT0FBcEI7QUFBK0IsV0FBTyxFQUFDLGFBQXZDO0FBQXFELFFBQUksRUFBQztBQUExRCxJQURELGVBRUM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFPLGFBQVMsRUFBQyxTQUFqQjtBQUEyQixXQUFPLEVBQUM7QUFBbkMsNEJBREQsZUFJQztBQUNDLGFBQVMsRUFBQyxtREFEWDtBQUVDLE1BQUUsRUFBQyxXQUZKO0FBR0MsUUFBSSxFQUFDLFdBSE47QUFJQyxlQUFXLEVBQUMsc0JBSmI7QUFLQyxRQUFJLEVBQUMsTUFMTjtBQU1DLGFBQVMsTUFOVjtBQU9DLFNBQUssRUFBRXFFLEtBUFI7QUFRQyxZQUFRLEVBQUVVLFlBUlg7QUFTQyxhQUFTLEVBQUVDLGVBVFo7QUFVQyxnQkFBWSxFQUFDLEtBVmQ7QUFXQyxPQUFHLEVBQUVIO0FBWE4sSUFKRCxlQWlCQywyREFBQyw2REFBRDtBQUVFRixpQkFBYSxFQUFiQSxhQUZGO0FBR0VOLFNBQUssRUFBTEEsS0FIRjtBQUlFYyxlQUFXLEVBQVhBLFdBSkY7QUFLRVosZUFBVyxFQUFYQSxXQUxGO0FBTUVDLGtCQUFjLEVBQWRBLGNBTkY7QUFPRVksdUJBQW1CLEVBQUVOLGVBQWUsQ0FBQzNRLFNBUHZDO0FBUUV1USxzQkFBa0IsRUFBbEJBO0FBUkYsSUFqQkQsQ0FGRCxlQStCQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLDJEQUFDLGdEQUFEO0FBQVEsU0FBSyxFQUFDLE1BQWQ7QUFBcUIsV0FBTyxFQUFFeE0sU0FBOUI7QUFBeUMsb0JBQWdCLEVBQUM7QUFBMUQsSUFERCxDQS9CRCxDQUREO0FBcUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdHRDtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBO0FBRWUsU0FBU21OLG9CQUFULE9BUVo7QUFBQSxNQVBGVixhQU9FLFFBUEZBLGFBT0U7QUFBQSxNQU5GTixLQU1FLFFBTkZBLEtBTUU7QUFBQSxNQUxGYyxXQUtFLFFBTEZBLFdBS0U7QUFBQSxNQUpGWixXQUlFLFFBSkZBLFdBSUU7QUFBQSxNQUhGQyxjQUdFLFFBSEZBLGNBR0U7QUFBQSxNQUZGWSxtQkFFRSxRQUZGQSxtQkFFRTtBQUFBLE1BREZWLGtCQUNFLFFBREZBLGtCQUNFOztBQUNGO0FBQ0EsTUFBTVksT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTTtBQUNyQixRQUFNQyxPQUFPLEdBQUc7QUFBRWpPLFdBQUssRUFBRStNLEtBQVQ7QUFBZ0JiLGNBQVEsRUFBRSxVQUExQjtBQUFzQ1MsZUFBUyxFQUFFO0FBQWpELEtBQWhCOztBQUVBLFFBQUlVLGFBQWEsQ0FBQy9ILE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDN0IsYUFBTytILGFBQWEsQ0FBQ2xRLEdBQWQsQ0FBa0IsVUFBQ1IsSUFBRCxFQUFPdVIsU0FBUDtBQUFBLDRCQUN4QiwyREFBQyxvREFBRCxDQUFRLEVBQVIsZUFBZTNNLDBEQUFmO0FBQXdCLGFBQUcsRUFBRTVFLElBQUksQ0FBQ3lDLEVBQWxDO0FBQXNDLG1CQUFTLEVBQUM7QUFBaEQseUJBQ0MsMkRBQUMsaURBQUQ7QUFDT3pDLGNBQUksRUFBSkEsSUFEUDtBQUNhdVIsbUJBQVMsRUFBVEEsU0FEYjtBQUN3QkwscUJBQVcsRUFBWEEsV0FEeEI7QUFDcUNYLHdCQUFjLEVBQWRBLGNBRHJDO0FBRUMsbUJBQVMsRUFBRWdCLFNBQVMsS0FBS2pCLFdBQWQsSUFBNkJGLEtBRnpDO0FBR0MsbUJBQVMsRUFBRWU7QUFIWixVQURELENBRHdCO0FBQUEsT0FBbEIsQ0FBUDtBQVNBOztBQUVELFFBQUksQ0FBQ1Ysa0JBQUwsRUFBeUI7QUFDeEIsMEJBQ0MsMkRBQUMsb0RBQUQsQ0FBUSxFQUFSLGVBQWU3TCwwREFBZjtBQUF3QixXQUFHLEVBQUMsVUFBNUI7QUFBdUMsaUJBQVMsRUFBQztBQUFqRCx1QkFDQywyREFBQyxpREFBRDtBQUNPNUUsWUFBSSxFQUFFc1IsT0FEYjtBQUNzQkMsaUJBQVMsRUFBRUQsT0FEakM7QUFDMENKLG1CQUFXLEVBQVhBLFdBRDFDO0FBQ3VEWCxzQkFBYyxFQUFkQSxjQUR2RDtBQUVDLGlCQUFTLEVBQUVILEtBQUssQ0FBQ3pILE1BRmxCO0FBR0MsaUJBQVMsRUFBRXdJO0FBSFosUUFERCxDQUREO0FBU0E7QUFDRCxHQTFCRDtBQTRCQTs7O0FBQ0Esc0JBQ0MsMkRBQUMsNkRBQUQsUUFDRWYsS0FBSyxLQUFLLEVBQVYsaUJBQ0EsMkRBQUMsb0RBQUQsQ0FBUSxFQUFSLGVBQWV4TCwwREFBZjtBQUF3QixhQUFTLEVBQUM7QUFBbEMsTUFDRXlNLE9BQU8sRUFEVCxDQUZGLENBREQ7QUFTQSxDOzs7Ozs7Ozs7Ozs7QUMxREQ7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7QUFDQTtBQUVlLFNBQVNHLElBQVQsT0FBd0U7QUFBQSxNQUF4RHhSLElBQXdELFFBQXhEQSxJQUF3RDtBQUFBLDBCQUFsRCtMLE9BQWtEO0FBQUEsTUFBbERBLE9BQWtELDZCQUF4QyxFQUF3QztBQUFBLDBCQUFwQzVFLE9BQW9DO0FBQUEsTUFBcENBLE9BQW9DLDZCQUExQixTQUEwQjtBQUFBLHVCQUFmc0ssSUFBZTtBQUFBLE1BQWZBLElBQWUsMEJBQVIsSUFBUTs7QUFDdEY7QUFDQSxNQUFNdk0sV0FBVyxHQUFHQyxrRUFBYyxFQUFsQztBQUVBOztBQUNBLE1BQVk5QyxTQUFaLEdBQWtDMEosT0FBbEMsQ0FBUXRKLEVBQVI7QUFBQSxNQUF1QnFKLE1BQXZCLEdBQWtDQyxPQUFsQyxDQUF1QkQsTUFBdkI7QUFDQSxNQUFZek0sTUFBWixHQUE4QlcsSUFBOUIsQ0FBUXlDLEVBQVI7QUFBQSxNQUFvQlksS0FBcEIsR0FBOEJyRCxJQUE5QixDQUFvQnFELEtBQXBCO0FBRUEsTUFBTXFPLFFBQVEsR0FBR3JPLEtBQUssS0FBS3lJLE1BQTNCO0FBQ0EsTUFBTWhGLE9BQU8sR0FBRyxDQUFDLE1BQUQsa0JBQWtCMkssSUFBbEIsbUJBQW1DdEssT0FBbkMsR0FBOEN1SyxRQUFRLElBQUksY0FBMUQsRUFBMEVDLElBQTFFLENBQStFLEdBQS9FLENBQWhCO0FBRUE7O0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUc5TCwrREFBVyxDQUFDbkMsK0NBQUQsRUFBYTtBQUNsRDVELGFBQVMsRUFBRTtBQUFBLGFBQU1tRixXQUFXLENBQUNhLGlCQUFaLENBQThCLENBQUNwRywrQ0FBVSxDQUFDb0MsYUFBWixFQUEyQk0sU0FBM0IsQ0FBOUIsQ0FBTjtBQUFBO0FBRHVDLEdBQWIsQ0FBdEM7QUFJQTs7QUFDQSxzQkFDQztBQUFLLGFBQVMsRUFBRXlFO0FBQWhCLGtCQUNDLDJEQUFDLFVBQUQ7QUFBWSxhQUFTLEVBQUU4SyxrQkFBa0IsQ0FBQzFSO0FBQTFDLEtBQXlERixJQUF6RCxHQUNFbUgsT0FBTyxLQUFLLGFBQVosSUFBNkIsQ0FBQ3VLLFFBQTlCLGlCQUNBO0FBQ0MsYUFBUyxFQUFDLCtCQURYO0FBRUMsUUFBSSxFQUFDLFFBRk47QUFHQyxXQUFPLEVBQUU7QUFBQSxhQUFNRSxrQkFBa0IsQ0FBQzFMLE1BQW5CLENBQTBCO0FBQUU3RCxpQkFBUyxFQUFUQSxTQUFGO0FBQWFoRCxjQUFNLEVBQU5BO0FBQWIsT0FBMUIsQ0FBTjtBQUFBO0FBSFYsa0JBSUMsMkRBQUMsa0RBQUQ7QUFBVSxXQUFPLEVBQUMsS0FBbEI7QUFBd0IsYUFBUyxFQUFDLGlDQUFsQztBQUFvRSxPQUFHLEVBQUVvTix1REFBVUE7QUFBbkYsSUFKRCxDQUZGLENBREQsRUFXRWlGLFFBQVEsaUJBQ1I7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQywyREFBQyxrREFBRDtBQUFVLFdBQU8sRUFBQyxLQUFsQjtBQUF3QixhQUFTLEVBQUMsMkNBQWxDO0FBQThFLE9BQUcsRUFBRUcscURBQVFBO0FBQTNGLElBREQsQ0FaRixDQUREO0FBbUJBO0FBRU0sSUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsUUFBa0Q7QUFBQSxNQUEvQ3ZDLFFBQStDLFNBQS9DQSxRQUErQztBQUFBLE1BQXJDUyxTQUFxQyxTQUFyQ0EsU0FBcUM7QUFBQSxNQUExQjlQLFNBQTBCLFNBQTFCQSxTQUEwQjtBQUFBLE1BQWZnRSxRQUFlLFNBQWZBLFFBQWU7O0FBQzNFO0FBQ0EsTUFBTTZOLFlBQVksR0FBR3hDLFFBQVEsQ0FBQ3lDLEtBQVQsQ0FBZSxHQUFmLEVBQW9CeFIsR0FBcEIsQ0FBd0IsVUFBQ3lSLElBQUQ7QUFBQSxXQUFVQSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFDLFdBQVIsRUFBVjtBQUFBLEdBQXhCLENBQXJCO0FBRUE7O0FBQ0Esc0JBQ0M7QUFBSyxhQUFTLEVBQUMsY0FBZjtBQUE4QixTQUFLLEVBQUU7QUFBRSxpQkFBV2xDO0FBQWI7QUFBckMsa0JBQ0MsMkRBQUMsc0RBQUQ7QUFBZ0IsV0FBTyxFQUFFOVAsU0FBekI7QUFBb0MsY0FBVSxFQUFFO0FBQWhELGtCQUNDO0FBQU0sYUFBUyxFQUFDO0FBQWhCLEtBQWtDNlIsWUFBbEMsQ0FERCxFQUVFN04sUUFGRixDQURELENBREQ7QUFRQSxDQWJNO0FBZUEsSUFBTWlPLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsTUFBRzVDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLE1BQWFsTSxLQUFiLFNBQWFBLEtBQWI7QUFBQSxzQkFDdkI7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFHLGFBQVMsRUFBQztBQUFiLEtBQXFCa00sUUFBckIsQ0FERCxlQUVDO0FBQUcsYUFBUyxFQUFDO0FBQWIsS0FBd0NsTSxLQUF4QyxDQUZELENBRHVCO0FBQUEsQ0FBakIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BFUDtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBO0FBRWUsU0FBUytPLFVBQVQsT0FBNEY7QUFBQSxNQUF0RXBTLElBQXNFLFFBQXRFQSxJQUFzRTtBQUFBLE1BQWhFdVIsU0FBZ0UsUUFBaEVBLFNBQWdFO0FBQUEsTUFBckRMLFdBQXFELFFBQXJEQSxXQUFxRDtBQUFBLE1BQXhDbUIsU0FBd0MsUUFBeENBLFNBQXdDO0FBQUEsTUFBN0I5QixjQUE2QixRQUE3QkEsY0FBNkI7QUFBQSxNQUFiclEsU0FBYSxRQUFiQSxTQUFhOztBQUMxRztBQUNBMksseURBQVMsQ0FBQyxZQUFNO0FBQ2Z3SCxhQUFTLElBQUk5QixjQUFjLENBQUNnQixTQUFELENBQTNCO0FBQ0EsR0FGUSxFQUVOLENBQUNjLFNBQUQsQ0FGTSxDQUFUO0FBSUF4SCx5REFBUyxDQUFDLFlBQU07QUFDZixXQUFPO0FBQUEsYUFBTTBGLGNBQWMsQ0FBQyxDQUFELENBQXBCO0FBQUEsS0FBUDtBQUNBLEdBRlEsRUFFTixFQUZNLENBQVQ7QUFJQTs7QUFDQSxNQUFNK0IsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ3JNLE1BQUQsRUFBWTtBQUNoQ3NLLGtCQUFjLENBQUN0SyxNQUFNLEtBQUssT0FBWCxHQUFxQnNMLFNBQXJCLEdBQWlDLENBQWxDLENBQWQ7QUFDQSxHQUZEO0FBSUE7OztBQUNBLHNCQUNDO0FBQ0MsYUFBUyw4QkFBdUJjLFNBQVMsSUFBSSxZQUFwQyxjQURWO0FBRUMsV0FBTyxFQUFFO0FBQUEsYUFBTW5CLFdBQVcsQ0FBQ2xSLElBQUksQ0FBQ3FELEtBQU4sQ0FBakI7QUFBQSxLQUZWO0FBR0MsZ0JBQVksRUFBRTtBQUFBLGFBQU1pUCxZQUFZLENBQUMsT0FBRCxDQUFsQjtBQUFBLEtBSGY7QUFJQyxnQkFBWSxFQUFFO0FBQUEsYUFBTUEsWUFBWSxDQUFDLE9BQUQsQ0FBbEI7QUFBQTtBQUpmLGtCQUtDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0MsMkRBQUMsZ0RBQUQ7QUFBWSxhQUFTLEVBQUVwUyxTQUFTLElBQUltUztBQUFwQyxLQUFtRHJTLElBQW5ELEVBREQsZUFFQywyREFBQyw4Q0FBRCxFQUFjQSxJQUFkLENBRkQsZUFHQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLDJEQUFDLGtEQUFEO0FBQVUsV0FBTyxFQUFDLEtBQWxCO0FBQXdCLGFBQVMsRUFBQyw2Q0FBbEM7QUFBZ0YsT0FBRyxFQUFFa1EseURBQVdBO0FBQWhHLElBREQsQ0FIRCxDQUxELENBREQ7QUFlQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNEO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0E7QUFFZSxTQUFTcUMsS0FBVCxPQUFvRDtBQUFBLE1BQW5DMUcsS0FBbUMsUUFBbkNBLEtBQW1DO0FBQUEseUJBQTVCZ0IsTUFBNEI7QUFBQSxNQUE1QkEsTUFBNEIsNEJBQW5CLE1BQW1CO0FBQUEsTUFBUjNDLElBQVE7O0FBQy9ELE1BQU1zSSxXQUFXLEdBQUczRixNQUFNLEtBQUssU0FBWCxHQUF1QixDQUF2QixHQUEyQjRGLFFBQS9DO0FBRUE7O0FBQ0Esc0JBQ0k7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDSSwyREFBQyw2REFBRCxRQUNLNUcsS0FBSyxDQUFDNkcsS0FBTixDQUFZLENBQVosRUFBZUYsV0FBZixFQUE0QmhTLEdBQTVCLENBQWdDLFVBQUNSLElBQUQsRUFBVTtBQUN2Qyx3QkFDSSwyREFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxZQUFNO0FBQWxCLE9BQXVCd0csNkRBQXZCO0FBQW1DLGVBQVMsRUFBQyxVQUE3QztBQUF3RCxTQUFHLEVBQUV4RyxJQUFJLENBQUN5QztBQUFsRSxxQkFDSSwyREFBQyw2Q0FBRDtBQUFZekMsVUFBSSxFQUFKQTtBQUFaLE9BQXFCa0ssSUFBckIsRUFESixDQURKO0FBS0gsR0FOQSxDQURMLEVBUUsyQyxNQUFNLEtBQUssU0FBWCxJQUF3QmhCLEtBQUssQ0FBQ2xELE1BQU4sR0FBZSxDQUF2QyxpQkFDRywyREFBQyxvREFBRCxDQUFRLEdBQVI7QUFBWSxVQUFNO0FBQWxCLEtBQXVCbkMsNkRBQXZCO0FBQW1DLGFBQVMsRUFBQyxVQUE3QztBQUF3RCxPQUFHLEVBQUM7QUFBNUQsbUJBQ0k7QUFBRyxhQUFTLEVBQUM7QUFBYixXQUErQ3FGLEtBQUssQ0FBQ2xELE1BQU4sR0FBZTZKLFdBQTlELENBREosQ0FUUixDQURKLENBREo7QUFrQkgsQzs7Ozs7Ozs7Ozs7O0FDOUJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTTlKLGFBQWEsZ0JBQUdpSyw0Q0FBSyxDQUFDQyxhQUFOLEVBQXRCO0FBQ2VsSyw0RUFBZixFOzs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOztBQUNBO0FBRWUsU0FBU21LLE1BQVQsT0FRWjtBQUFBOztBQUFBLE1BUEZoUCxLQU9FLFFBUEZBLEtBT0U7QUFBQSx1QkFORitELElBTUU7QUFBQSxNQU5GQSxJQU1FLDBCQU5LLFFBTUw7QUFBQSx3QkFMRmlCLEtBS0U7QUFBQSxNQUxGQSxLQUtFLDJCQUxNLFdBS047QUFBQSx1QkFKRjRJLElBSUU7QUFBQSxNQUpGQSxJQUlFLDBCQUpLLElBSUw7QUFBQSxtQ0FIRnBOLGdCQUdFO0FBQUEsTUFIRkEsZ0JBR0Usc0NBSGlCLEVBR2pCO0FBQUEsMEJBRkZ5TyxPQUVFO0FBQUEsTUFGRkEsT0FFRSw2QkFGUSxZQUFNLENBQUUsQ0FFaEI7QUFBQSw0QkFERjVTLFNBQ0U7QUFBQSxNQURGQSxTQUNFLCtCQURVLEtBQ1Y7O0FBQ0Y7QUFDQSxNQUFNNlMsU0FBUyxHQUFHcEksb0RBQU0sRUFBeEI7QUFFQTs7QUFDQSxNQUFNcUksWUFBWSx5QkFBR0QsU0FBUyxDQUFDelIsT0FBYix1REFBRyxtQkFBbUJ5TixxQkFBbkIsR0FBMkNFLE1BQWhFO0FBRUE7O0FBQ0Esc0JBQ0M7QUFDQyxPQUFHLEVBQUU4RCxTQUROO0FBRUMsYUFBUyxvQkFBYXRCLElBQWIsa0JBQXlCNUksS0FBekIsY0FBa0N4RSxnQkFBbEMsK0JBRlY7QUFHQyxTQUFLLEVBQUU7QUFBRTRLLFlBQU0sRUFBRStEO0FBQVYsS0FIUjtBQUlPcEwsUUFBSSxFQUFKQSxJQUpQO0FBSWFrTCxXQUFPLEVBQVBBO0FBSmIsa0JBS0MsMkRBQUMsc0RBQUQ7QUFDQyxXQUFPLEVBQUU1UyxTQURWO0FBRUMsY0FBVSxFQUFFLEVBRmI7QUFHQyxXQUFPLEVBQUU7QUFBRXVHLG1CQUFhLEVBQUU7QUFBakI7QUFIVixrQkFJQztBQUFNLGFBQVMsRUFBQztBQUFoQixLQUE2QjVDLEtBQTdCLENBSkQsQ0FMRCxDQUREO0FBY0EsQzs7Ozs7Ozs7Ozs7O0FDcENEO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFlLFNBQVM2TCxVQUFULENBQW9CdEwsTUFBcEIsRUFBNEJxSyxTQUE1QixFQUF1QztBQUFBOztBQUNyRCxNQUFNd0UsWUFBWSxHQUFHLEVBQXJCO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLEVBQW5CO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCxVQUFVLEdBQUdELFlBQTVCO0FBRUE7O0FBQ0EsTUFBTW5FLFNBQVMsR0FBR0wsU0FBUyxDQUFDSyxTQUE1QjtBQUNBLE1BQU10TixRQUFRLEdBQUc0UixNQUFNLENBQUMzRSxTQUFTLENBQUNqTixRQUFYLENBQXZCO0FBQ0EsTUFBTUMsUUFBUSxHQUFHMlIsTUFBTSxDQUFDM0UsU0FBUyxDQUFDaE4sUUFBWCxDQUF2QjtBQUVBOztBQUNBLGFBQTJELENBQUEyQyxNQUFNLFNBQU4sSUFBQUEsTUFBTSxXQUFOLCtCQUFBQSxNQUFNLENBQUU5QyxPQUFSLG9FQUFpQnlOLHFCQUFqQixPQUE0QyxFQUF2RztBQUFBLHdCQUFRQyxLQUFSO0FBQUEsTUFBZXFFLFFBQWYsMkJBQTBCLEdBQTFCO0FBQUEseUJBQStCcEUsTUFBL0I7QUFBQSxNQUF1Q3FFLFNBQXZDLDRCQUFtRCxHQUFuRDtBQUVBOzs7QUFDQSxNQUFNQyxXQUFXLEdBQUdDLE1BQU0sQ0FBQ0MsVUFBM0I7QUFDQSxNQUFNQyxlQUFlLEdBQUlMLFFBQVEsR0FBR0UsV0FBWixHQUEyQixHQUFuRDtBQUVBLE1BQU1JLFlBQVksR0FBR0gsTUFBTSxDQUFDSSxXQUFQLEdBQXFCOUUsU0FBUyxDQUFDdEssR0FBcEQ7QUFDQSxNQUFNcVAsZ0JBQWdCLEdBQUlQLFNBQVMsR0FBR0ssWUFBYixHQUE2QixHQUF0RDtBQUVBOztBQUNBLE1BQUlwUCxJQUFJLEdBQUc0TyxNQUFYO0FBQ0EsTUFBSTNPLEdBQUcsR0FBRzJPLE1BQVY7QUFFQTs7QUFDQSxNQUFJM1IsUUFBUSxHQUFHa1MsZUFBWCxHQUE2QixHQUFqQyxFQUFzQztBQUNyQ25QLFFBQUksR0FBRyxDQUFDOE8sUUFBRCxHQUFZSixZQUFuQjtBQUNBO0FBRUQ7OztBQUNBLE1BQUl4UixRQUFRLEdBQUdvUyxnQkFBWCxHQUE4QixHQUFsQyxFQUF1QztBQUN0Q3JQLE9BQUcsR0FBRyxDQUFDOE8sU0FBRCxHQUFhTCxZQUFuQjtBQUNBOztBQUVELFNBQU87QUFBRTFPLFFBQUksWUFBS0EsSUFBTCxPQUFOO0FBQXFCQyxPQUFHLFlBQUtBLEdBQUw7QUFBeEIsR0FBUDtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ25DRDtBQUFBO0FBQWUsU0FBU21NLFdBQVQsQ0FBcUJILFdBQXJCLEVBQWtDM0UsS0FBbEMsRUFBeUN1RSxLQUF6QyxFQUFnRDtBQUMzRCxNQUFNMEQsVUFBVSxHQUFHMUQsS0FBSyxDQUFDMkQsV0FBTixFQUFuQjtBQUNBLE1BQU1DLG9CQUFvQixHQUFHbkksS0FBSyxDQUFDckwsR0FBTixDQUFVO0FBQUEsUUFBRzZDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFdBQWVBLEtBQWY7QUFBQSxHQUFWLENBQTdCO0FBRUEsTUFBSXFOLGFBQWEsR0FBR0YsV0FBVyxDQUMxQnJDLE1BRGUsQ0FDUixpQkFBZTtBQUFBLFFBQVo5SyxLQUFZLFNBQVpBLEtBQVk7O0FBQ25CO0FBQ0EsV0FBTyxDQUFDMlEsb0JBQW9CLENBQUM5SyxRQUFyQixDQUE4QjdGLEtBQTlCLENBQVI7QUFDSCxHQUplLEVBS2Y4SyxNQUxlLENBS1IsaUJBQXlCO0FBQUEsUUFBdEI5SyxLQUFzQixTQUF0QkEsS0FBc0I7QUFBQSxRQUFma00sUUFBZSxTQUFmQSxRQUFlOztBQUM3QjtBQUNBLFdBQU9sTSxLQUFLLENBQUMwUSxXQUFOLEdBQW9CN0ssUUFBcEIsQ0FBNkI0SyxVQUE3QixLQUE0Q3ZFLFFBQVEsQ0FBQ3dFLFdBQVQsR0FBdUI3SyxRQUF2QixDQUFnQzRLLFVBQWhDLENBQW5EO0FBQ0gsR0FSZSxDQUFwQjtBQVVBLFNBQU9wRCxhQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7O0FDZkQ7QUFBQTtBQUFBLElBQU11RCxVQUFVLEdBQUc7QUFDbEJDLFlBQVUsRUFBRSxZQURNO0FBRWxCQyxXQUFTLEVBQUUsV0FGTztBQUdsQkMsaUJBQWUsRUFBRTtBQUhDLENBQW5CO0FBTWUsU0FBU25VLE9BQVQsT0FBNEI7QUFBQSxNQUFUb1UsS0FBUyxRQUFUQSxLQUFTO0FBQzFDLE1BQUlBLEtBQUssQ0FBQ25MLFFBQU4sQ0FBZStLLFVBQVUsQ0FBQ0MsVUFBMUIsQ0FBSixFQUEyQyxPQUFPLE9BQVA7QUFDM0MsTUFBSUcsS0FBSyxDQUFDbkwsUUFBTixDQUFlK0ssVUFBVSxDQUFDRSxTQUExQixDQUFKLEVBQTBDLE9BQU8sTUFBUDtBQUMxQyxNQUFJRSxLQUFLLENBQUNuTCxRQUFOLENBQWUrSyxVQUFVLENBQUNHLGVBQTFCLENBQUosRUFBZ0QsT0FBTyxPQUFQO0FBQ2hELEM7Ozs7Ozs7Ozs7OztBQ1ZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDRkE7QUFBQTtBQUFlLFNBQVNuRCxPQUFULENBQWlCNU4sS0FBakIsRUFBd0I7QUFDbkMsU0FBTyw2QkFBNkJpUixJQUE3QixDQUFrQ2pSLEtBQWxDLENBQVA7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRWUsU0FBU2tSLFlBQVQsQ0FBc0IxUSxLQUF0QixFQUErQztBQUFBLE1BQWxCMlEsV0FBa0IsdUVBQUosRUFBSTtBQUM3RDNKLHlEQUFTLENBQUMsWUFBTTtBQUNmNU0sWUFBUSxDQUFDNEYsS0FBVCxhQUFvQkEsS0FBSyxHQUFHQSxLQUFLLEdBQUcsdUJBQVgsR0FBcUM1RixRQUFRLENBQUM0RixLQUF2RTtBQUNBLEdBRlEscUJBRUYyUSxXQUZFLEVBQVQ7QUFHQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNORDtBQUVlLFNBQVNoSSxZQUFULEdBQXdCO0FBQ3RDLGtCQUFnQ3hOLHNEQUFRLENBQUMsRUFBRCxDQUF4QztBQUFBO0FBQUEsTUFBT3NKLFFBQVA7QUFBQSxNQUFpQm1NLFdBQWpCOztBQUVBLE1BQU10SSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUMxSixFQUFELEVBQVE7QUFDOUJnUyxlQUFXLENBQUMsVUFBQ25NLFFBQUQsRUFBYztBQUN6QixVQUFJQSxRQUFRLENBQUNZLFFBQVQsQ0FBa0J6RyxFQUFsQixDQUFKLEVBQTJCO0FBQzFCLGVBQU82RixRQUFRLENBQUM2RixNQUFULENBQWdCLFVBQUN1RyxVQUFEO0FBQUEsaUJBQWdCQSxVQUFVLEtBQUtqUyxFQUEvQjtBQUFBLFNBQWhCLENBQVA7QUFDQTs7QUFFRCwwQ0FBVzZGLFFBQVgsSUFBcUI3RixFQUFyQjtBQUNBLEtBTlUsQ0FBWDtBQU9BLEdBUkQ7O0FBVUEsTUFBTThGLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0I7QUFBQSxXQUFNa00sV0FBVyxDQUFDLEVBQUQsQ0FBakI7QUFBQSxHQUF0Qjs7QUFFQSxTQUFPO0FBQUVuTSxZQUFRLEVBQVJBLFFBQUY7QUFBWTZELGtCQUFjLEVBQWRBLGNBQVo7QUFBNEI1RCxpQkFBYSxFQUFiQTtBQUE1QixHQUFQO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFFZSxTQUFTb00sS0FBVCxPQUFtQztBQUFBOztBQUFBLE1BQWxCelYsY0FBa0IsUUFBbEJBLGNBQWtCOztBQUNqRDtBQUNBLE1BQU1nQyxPQUFPLEdBQUd5SixvREFBTSxFQUF0QjtBQUVBOztBQUNBNEosOERBQVksQ0FBQyxPQUFELENBQVo7QUFDQSxNQUFNbEosT0FBTyxHQUFHQywrREFBVSxFQUExQjs7QUFDQSxpQkFJSXNKLCtEQUFPLENBQUM7QUFBRUMsa0JBQWMsRUFBRSxVQUFsQjtBQUE4QkMsUUFBSSxFQUFFO0FBQXBDLEdBQUQsQ0FKWDtBQUFBLE1BQ0NDLFFBREQsWUFDQ0EsUUFERDtBQUFBLE1BRUNDLFlBRkQsWUFFQ0EsWUFGRDtBQUFBLE1BR2NDLE1BSGQsWUFHQ0MsU0FIRCxDQUdjRCxNQUhkO0FBTUE7OztBQUNBLE1BQU1FLGFBQWEsR0FBR3JQLCtEQUFXLENBQUN4RiwwQ0FBRCxFQUFRO0FBQ3hDUCxhQUFTLEVBQUUsbUJBQUNDLElBQUQsRUFBVTtBQUNwQmQsb0JBQWMsQ0FBQ2MsSUFBRCxDQUFkO0FBQ0F5TCxrRUFBSyxlQUFDLDJEQUFDLGlEQUFEO0FBQU8sZUFBTyxFQUFDLHlCQUFmO0FBQXlDLGtCQUFVLEVBQUM7QUFBcEQsUUFBRCxDQUFMO0FBQ0FKLGFBQU8sQ0FBQ0csSUFBUixDQUFhcEwsOENBQU0sQ0FBQ0MsUUFBcEI7QUFDQSxLQUx1QztBQU14Q3FMLFdBQU8sRUFBRSxpQkFBQ2pDLEtBQUQsRUFBVztBQUFBOztBQUNuQmdDLGtFQUFLLGVBQ0osMkRBQUMsaURBQUQ7QUFDQyxlQUFPLEVBQ05oQyxLQUFLLFNBQUwsSUFBQUEsS0FBSyxXQUFMLHVCQUFBQSxLQUFLLENBQUUyTCxRQUFQLG9GQUFpQnZULElBQWpCLHNFQUF1QjRILEtBQXZCLEdBQStCLHVDQUEvQixHQUF5RSx1QkFGM0U7QUFJQyxrQkFBVSxFQUFDO0FBSlosUUFESSxDQUFMO0FBU0F3TCxZQUFNLENBQUM1UixLQUFQLEdBQWU7QUFBRThGLGVBQU8sRUFBRTtBQUFYLE9BQWY7QUFDQThMLFlBQU0sQ0FBQzNSLFFBQVAsR0FBa0I7QUFBRTZGLGVBQU8sRUFBRTtBQUFYLE9BQWxCO0FBQ0E7QUFsQnVDLEdBQVIsQ0FBakM7O0FBcUJBLE1BQU1rTSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLFdBQU1GLGFBQWEsQ0FBQ2pQLE1BQWQsQ0FBcUI7QUFBRWhGLGFBQU8sRUFBUEE7QUFBRixLQUFyQixDQUFOO0FBQUEsR0FBakI7QUFFQTs7O0FBQ0Esc0JBQ0MscUlBQ0MsMkRBQUMsa0RBQUQsT0FERCxlQUVDO0FBQU0sYUFBUyxFQUFDO0FBQWhCLGtCQUNDLDJEQUFDLHNEQUFELE9BREQsZUFFQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFJLGFBQVMsRUFBQztBQUFkLGFBREQsZUFFQztBQUFHLGFBQVMsRUFBQztBQUFiLDJDQUZELGVBR0M7QUFDQyxPQUFHLEVBQUVBLE9BRE47QUFFQyxhQUFTLEVBQUMsa0JBRlg7QUFHQyxZQUFRLEVBQUU4VCxZQUFZLENBQUNLLFFBQUQsQ0FIdkI7QUFJQyxjQUFVO0FBSlgsa0JBS0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQU8sYUFBUyxFQUFDLFNBQWpCO0FBQTJCLFdBQU8sRUFBQztBQUFuQyxhQURELGVBSUM7QUFDQyxRQUFJLEVBQUMsT0FETjtBQUVDLGFBQVMseUJBQWtCSixNQUFNLENBQUM1UixLQUFQLElBQWdCLFlBQWxDLENBRlY7QUFHQyxNQUFFLEVBQUMsWUFISjtBQUlDLFFBQUksRUFBQyxPQUpOO0FBS0MsZUFBVyxFQUFDLE9BTGI7QUFNQyxhQUFTO0FBTlYsS0FPSzBSLFFBQVEsQ0FBQyxPQUFELEVBQVU7QUFDckJPLFlBQVEsRUFBRTtBQURXLEdBQVYsQ0FQYixFQUpELEVBZUVMLE1BQU0sQ0FBQzVSLEtBQVAsaUJBQ0E7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLGlCQUFBNFIsTUFBTSxDQUFDNVIsS0FBUCx3REFBYzhGLE9BQWQsR0FDRThMLE1BQU0sQ0FBQzVSLEtBQVAsQ0FBYThGLE9BRGYsR0FFRSw0QkFISixDQWhCRixDQURELGVBd0JDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBTyxhQUFTLEVBQUMsU0FBakI7QUFBMkIsV0FBTyxFQUFDO0FBQW5DLGdCQURELGVBSUM7QUFDQyxRQUFJLEVBQUMsVUFETjtBQUVDLGFBQVMseUJBQWtCOEwsTUFBTSxDQUFDM1IsUUFBUCxJQUFtQixZQUFyQyxDQUZWO0FBR0MsTUFBRSxFQUFDLGVBSEo7QUFJQyxRQUFJLEVBQUMsVUFKTjtBQUtDLGVBQVcsRUFBQztBQUxiLEtBTUt5UixRQUFRLENBQUMsVUFBRCxFQUFhO0FBQUVPLFlBQVEsRUFBRTtBQUFaLEdBQWIsQ0FOYixFQUpELEVBWUVMLE1BQU0sQ0FBQzNSLFFBQVAsaUJBQ0E7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUNFLG9CQUFBMlIsTUFBTSxDQUFDM1IsUUFBUCw4REFBaUI2RixPQUFqQixHQUNFOEwsTUFBTSxDQUFDM1IsUUFBUCxDQUFnQjZGLE9BRGxCLEdBRUUseUJBSEosQ0FiRixDQXhCRCxDQUxELGVBa0RDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQywyREFBQyxnREFBRDtBQUVFdEYsU0FBSyxFQUFFLFFBRlQ7QUFHRWdGLFNBQUssRUFBRSxXQUhUO0FBSUU0SSxRQUFJLEVBQUUsSUFKUjtBQUtFcE4sb0JBQWdCLEVBQUUsa0NBTHBCO0FBTUV1RCxRQUFJLEVBQUUsUUFOUjtBQU9FMUgsYUFBUyxFQUFFaVYsYUFBYSxDQUFDalY7QUFQM0IsSUFERCxDQURELGVBYUM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQywyREFBQyxxREFBRDtBQUNDLGFBQVMsRUFBQyxpQ0FEWDtBQUVDLE1BQUUsRUFBRUUsOENBQU0sQ0FBQ2dELE1BRlo7QUFHQyxTQUFLLEVBQUM7QUFIUCxrQkFJQztBQUFNLGFBQVMsRUFBQztBQUFoQixlQUpELENBREQsQ0FiRCxDQWxERCxDQUhELENBREQsQ0FERCxDQUZELENBRkQsQ0FERDtBQXlGQSxDOzs7Ozs7Ozs7Ozs7QUNwSkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7QUFDQTtBQUNBO0FBRWUsU0FBU21TLGFBQVQsR0FBeUI7QUFDdkM7QUFDQSxrQkFBaUM3Viw0REFBUSxDQUFDLENBQUNDLCtDQUFVLENBQUNvQyxhQUFaLEVBQTJCOE4sUUFBUSxDQUFDeE4sU0FBRCxDQUFuQyxDQUFELEVBQWtEO0FBQUEsV0FDMUZELDZEQUFnQixDQUFDO0FBQUVDLGVBQVMsRUFBVEE7QUFBRixLQUFELENBRDBFO0FBQUEsR0FBbEQsQ0FBekM7QUFBQSxNQUFRbkMsU0FBUixhQUFRQSxTQUFSO0FBQUEsaUNBQW1CMkIsSUFBbkI7QUFBQSxNQUFtQkEsSUFBbkIsK0JBQTBCLEVBQTFCO0FBSUE7OztBQUNBMFMsNkRBQVksQ0FBQzFTLElBQUQsYUFBQ0EsSUFBRCx1QkFBQ0EsSUFBSSxDQUFFZ0MsS0FBUCxFQUFjLENBQUNoQyxJQUFELENBQWQsQ0FBWjs7QUFDQSxtQkFBMEIyVCw4REFBUyxFQUFuQztBQUFBLE1BQVluVCxTQUFaLGNBQVFJLEVBQVI7QUFFQTs7O0FBQ0EsTUFBUW9CLEtBQVIsR0FBd0VoQyxJQUF4RSxDQUFRZ0MsS0FBUjtBQUFBLE1BQWUrSCxXQUFmLEdBQXdFL0osSUFBeEUsQ0FBZStKLFdBQWY7QUFBQSxNQUE0QkMsS0FBNUIsR0FBd0VoSyxJQUF4RSxDQUE0QmdLLEtBQTVCO0FBQUEsTUFBbUNwSixFQUFuQyxHQUF3RVosSUFBeEUsQ0FBbUNZLEVBQW5DO0FBQUEsTUFBdUNxSixNQUF2QyxHQUF3RWpLLElBQXhFLENBQXVDaUssTUFBdkM7QUFBQSxNQUErQ3pJLEtBQS9DLEdBQXdFeEIsSUFBeEUsQ0FBK0N3QixLQUEvQztBQUFBLE1BQXNEa0osYUFBdEQsR0FBd0UxSyxJQUF4RSxDQUFzRDBLLGFBQXREO0FBRUE7O0FBQ0Esc0JBQ0MsMkRBQUMsa0RBQUQ7QUFBa0JyTSxhQUFTLEVBQVRBO0FBQWxCLGtCQUNDLDJEQUFDLDhFQUFEO0FBQTJCMkQsU0FBSyxFQUFMQSxLQUEzQjtBQUFrQytILGVBQVcsRUFBWEEsV0FBbEM7QUFBK0NDLFNBQUssRUFBTEEsS0FBL0M7QUFBc0RwSixNQUFFLEVBQUZBLEVBQXREO0FBQTBEcUosVUFBTSxFQUFOQSxNQUExRDtBQUFrRXpJLFNBQUssRUFBTEE7QUFBbEUsSUFERCxlQUVDLDJEQUFDLDhFQUFEO0FBQTJCa0osaUJBQWEsRUFBYkEsYUFBM0I7QUFBMENsSyxhQUFTLEVBQUVJO0FBQXJELElBRkQsQ0FERDtBQU1BLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkNEO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7QUFDQTtBQUVlLFNBQVNnVCxlQUFULEdBQTJCO0FBQ3pDO0FBQ0Esa0JBQXdDelcsc0RBQVEsRUFBaEQ7QUFBQTtBQUFBLE1BQU84TyxZQUFQO0FBQUEsTUFBcUJmLGVBQXJCO0FBRUE7OztBQUNBd0gsNkRBQVksQ0FBQyxVQUFELENBQVo7O0FBQ0Esb0JBQWtDOUwsd0RBQVUsQ0FBQ0MsZ0RBQUQsQ0FBNUM7QUFBQSxNQUFRekosV0FBUixlQUFRQSxXQUFSO0FBQUEsTUFBcUJFLFFBQXJCLGVBQXFCQSxRQUFyQjtBQUVBOzs7QUFDQSxrQkFBMkNPLDREQUFRLENBQ2xEQywrQ0FBVSxDQUFDbUMsZUFEdUMsRUFFbEQ7QUFBQSxXQUFNSSxnRUFBbUIsQ0FBQztBQUFFN0MsWUFBTSxFQUFFSixXQUFGLGFBQUVBLFdBQUYsdUJBQUVBLFdBQVcsQ0FBRXdEO0FBQXZCLEtBQUQsQ0FBekI7QUFBQSxHQUZrRCxFQUdsRDtBQUNDMEssV0FBTyxFQUFFLENBQUMsRUFBQ2xPLFdBQUQsYUFBQ0EsV0FBRCxlQUFDQSxXQUFXLENBQUV3RCxFQUFkO0FBRFgsR0FIa0QsQ0FBbkQ7QUFBQSxNQUFRdkMsU0FBUixhQUFRQSxTQUFSO0FBQUEsaUNBQW1CMkIsSUFBbkI7QUFBQSxNQUF5QnhCLFFBQXpCLCtCQUFvQyxFQUFwQztBQVFBOzs7QUFDQSxzQkFDQyxxSUFDQywyREFBQyw0REFBRCxPQURELGVBRUM7QUFBTSxhQUFTLEVBQUM7QUFBaEIsa0JBQ0M7QUFBUyxhQUFTLEVBQUM7QUFBbkIsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQywyREFBQyxrREFBRDtBQUFrQkgsYUFBUyxFQUFUQTtBQUFsQixLQUNFZixRQUFRLEtBQUssT0FBYixpQkFBd0IsMkRBQUMsdUVBQUQ7QUFBa0I0TixtQkFBZSxFQUFmQTtBQUFsQixJQUQxQixlQUVDLDJEQUFDLDJFQUFEO0FBQXNCMU0sWUFBUSxFQUFSQSxRQUF0QjtBQUFnQ3lOLGdCQUFZLEVBQVpBO0FBQWhDLElBRkQsQ0FERCxDQURELENBREQsQ0FGRCxDQUREO0FBZUEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25ERDtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBO0FBRWUsU0FBUzRILGFBQVQsR0FBeUI7QUFDdkM7QUFDQSxrQkFBaUNoVyw0REFBUSxDQUFDLENBQUNDLCtDQUFVLENBQUNxQyxtQkFBWixFQUFpQzZOLFFBQVEsQ0FBQ2hOLGNBQUQsQ0FBekMsQ0FBRCxFQUE2RDtBQUFBLFdBQ3JHRCxrRUFBcUIsQ0FBQztBQUFFQyxvQkFBYyxFQUFkQTtBQUFGLEtBQUQsQ0FEZ0Y7QUFBQSxHQUE3RCxDQUF6QztBQUFBLE1BQVEzQyxTQUFSLGFBQVFBLFNBQVI7QUFBQSxpQ0FBbUIyQixJQUFuQjtBQUFBLE1BQW1CQSxJQUFuQiwrQkFBMEIsRUFBMUI7QUFJQTs7O0FBQ0EwUyw2REFBWSxDQUFDMVMsSUFBRCxhQUFDQSxJQUFELHVCQUFDQSxJQUFJLENBQUVnQyxLQUFQLEVBQWMsQ0FBQ2hDLElBQUQsQ0FBZCxDQUFaOztBQUNBLG1CQUErQjJULDhEQUFTLEVBQXhDO0FBQUEsTUFBWTNTLGNBQVosY0FBUUosRUFBUjtBQUVBOzs7QUFDQSxzQkFDQywyREFBQyxrREFBRDtBQUFrQnZDLGFBQVMsRUFBVEE7QUFBbEIsa0JBQ0MsMkRBQUMsOEVBQUQsRUFBeUIyQixJQUF6QixDQURELGVBRUMsMkRBQUMsOEVBQUQsa0NBQThCQSxJQUE5QjtBQUFvQ2dCLGtCQUFjLEVBQWRBO0FBQXBDLEtBRkQsQ0FERDtBQU1BLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBO0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBO0FBRWUsU0FBUzhTLE1BQVQsT0FBb0M7QUFBQSxNQUFsQnpXLGNBQWtCLFFBQWxCQSxjQUFrQjs7QUFDbEQ7QUFDQSxNQUFNZ0MsT0FBTyxHQUFHeUosb0RBQU0sRUFBdEI7QUFFQTs7QUFDQTRKLDhEQUFZLENBQUMsUUFBRCxDQUFaO0FBQ0EsTUFBTWxKLE9BQU8sR0FBR0MsK0RBQVUsRUFBMUI7O0FBRUEsaUJBS0lzSiwrREFBTyxDQUFDO0FBQUVDLGtCQUFjLEVBQUUsVUFBbEI7QUFBOEJDLFFBQUksRUFBRTtBQUFwQyxHQUFELENBTFg7QUFBQSxNQUNDQyxRQURELFlBQ0NBLFFBREQ7QUFBQSxNQUVDQyxZQUZELFlBRUNBLFlBRkQ7QUFBQSxNQUdjQyxNQUhkLFlBR0NDLFNBSEQsQ0FHY0QsTUFIZDtBQUFBLE1BSUNXLE9BSkQsWUFJQ0EsT0FKRDs7QUFPQSxNQUFNQyxhQUFhLEdBQUdDLGdFQUFRLENBQUM7QUFDOUJGLFdBQU8sRUFBUEEsT0FEOEI7QUFFOUJHLFFBQUksRUFBRSxlQUZ3QjtBQUc5QkMsZ0JBQVksRUFBRTtBQUhnQixHQUFELENBQTlCO0FBTUE7O0FBQ0EsTUFBTUMsY0FBYyxHQUFHblEsK0RBQVcsQ0FBQzFDLDJDQUFELEVBQVM7QUFDMUNyRCxhQUFTLEVBQUUsbUJBQUNDLElBQUQsRUFBVTtBQUNwQmQsb0JBQWMsQ0FBQ2MsSUFBRCxDQUFkO0FBQ0F5TCxrRUFBSyxlQUFDLDJEQUFDLGlEQUFEO0FBQU8sZUFBTyxFQUFDLHlCQUFmO0FBQXlDLGtCQUFVLEVBQUM7QUFBcEQsUUFBRCxDQUFMO0FBQ0FKLGFBQU8sQ0FBQ0csSUFBUixDQUFhcEwsOENBQU0sQ0FBQ0MsUUFBcEI7QUFDQSxLQUx5QztBQU0xQ3FMLFdBQU8sRUFBRSxpQkFBQ2pDLEtBQUQsRUFBVztBQUNuQixVQUFJQSxLQUFLLENBQUMyTCxRQUFOLENBQWVjLE1BQWYsS0FBMEIsR0FBOUIsRUFBbUM7QUFDbEN6SyxvRUFBSyxlQUFDLDJEQUFDLGlEQUFEO0FBQU8saUJBQU8sRUFBQywrQkFBZjtBQUErQyxvQkFBVSxFQUFDO0FBQTFELFVBQUQsQ0FBTDtBQUVBdkssZUFBTyxDQUFDSSxPQUFSLENBQWdCNlUsS0FBaEI7QUFDQTtBQUNEO0FBWnlDLEdBQVQsQ0FBbEM7O0FBZUEsTUFBTWQsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxXQUFNWSxjQUFjLENBQUMvUCxNQUFmLENBQXNCO0FBQUVoRixhQUFPLEVBQVBBO0FBQUYsS0FBdEIsQ0FBTjtBQUFBLEdBQWpCO0FBRUE7OztBQUNBLHNCQUNDLHFJQUNDLDJEQUFDLGtEQUFELE9BREQsZUFFQztBQUFNLGFBQVMsRUFBQztBQUFoQixrQkFDQywyREFBQyxzREFBRCxPQURELGVBRUM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSSxhQUFTLEVBQUM7QUFBZCxlQURELGVBRUM7QUFBRyxhQUFTLEVBQUM7QUFBYiw2Q0FGRCxlQUdDO0FBQ0MsT0FBRyxFQUFFQSxPQUROO0FBRUMsYUFBUyxFQUFDLHVCQUZYO0FBR0MsWUFBUSxFQUFFOFQsWUFBWSxDQUFDSyxRQUFELENBSHZCO0FBSUMsY0FBVTtBQUpYLGtCQUtDO0FBQUssYUFBUyxFQUFDO0FBQWYsa0JBQ0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFPLGFBQVMsRUFBQyxTQUFqQjtBQUEyQixXQUFPLEVBQUM7QUFBbkMsaUJBREQsZUFJQztBQUNDLFFBQUksRUFBQyxNQUROO0FBRUMsTUFBRSxFQUFDLDRCQUZKO0FBR0MsUUFBSSxFQUFDLFVBSE47QUFJQyxhQUFTLHlCQUFrQkosTUFBTSxDQUFDMUYsUUFBUCxJQUFtQixZQUFyQyxDQUpWO0FBS0MsZUFBVyxFQUFDO0FBTGIsS0FNS3dGLFFBQVEsQ0FBQyxVQUFELEVBQWE7QUFDeEJPLFlBQVEsRUFBRTtBQUNUN0ssV0FBSyxFQUFFLElBREU7QUFFVHRCLGFBQU8sRUFBRTtBQUZBO0FBRGMsR0FBYixDQU5iLEVBSkQsRUFpQkU4TCxNQUFNLENBQUMxRixRQUFQLGlCQUNBO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBbUMwRixNQUFNLENBQUMxRixRQUFQLENBQWdCcEcsT0FBbkQsQ0FsQkYsQ0FERCxlQXNCQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDO0FBQU8sYUFBUyxFQUFDLFNBQWpCO0FBQTJCLFdBQU8sRUFBQztBQUFuQyxhQURELGVBSUM7QUFDQyxRQUFJLEVBQUMsTUFETjtBQUVDLE1BQUUsRUFBQyx5QkFGSjtBQUdDLFFBQUksRUFBQyxPQUhOO0FBSUMsYUFBUyx5QkFBa0I4TCxNQUFNLENBQUM1UixLQUFQLElBQWdCLFlBQWxDLENBSlY7QUFLQyxlQUFXLEVBQUM7QUFMYixLQU1LMFIsUUFBUSxDQUFDLE9BQUQsRUFBVTtBQUNyQk8sWUFBUSxFQUFFO0FBQ1Q3SyxXQUFLLEVBQUUsSUFERTtBQUVUdEIsYUFBTyxFQUFFO0FBRkE7QUFEVyxHQUFWLENBTmIsRUFKRCxFQWlCRThMLE1BQU0sQ0FBQzVSLEtBQVAsaUJBQWdCO0FBQUssYUFBUyxFQUFDO0FBQWYsS0FBbUM0UixNQUFNLENBQUM1UixLQUFQLENBQWE4RixPQUFoRCxDQWpCbEIsQ0F0QkQsZUF5Q0M7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFPLGFBQVMsRUFBQyxTQUFqQjtBQUEyQixXQUFPLEVBQUM7QUFBbkMsZ0JBREQsZUFJQztBQUNDLFFBQUksRUFBQyxVQUROO0FBRUMsTUFBRSxFQUFDLGlDQUZKO0FBR0MsUUFBSSxFQUFDLGVBSE47QUFJQyxhQUFTLHlCQUFrQjhMLE1BQU0sQ0FBQzNSLFFBQVAsSUFBbUIsWUFBckMsQ0FKVjtBQUtDLGVBQVcsRUFBQztBQUxiLEtBTUt5UixRQUFRLENBQUMsZUFBRCxFQUFrQjtBQUM3Qk8sWUFBUSxFQUFFO0FBQ1Q3SyxXQUFLLEVBQUUsSUFERTtBQUVUdEIsYUFBTyxFQUFFO0FBRkEsS0FEbUI7QUFLN0JpTixhQUFTLEVBQUU7QUFDVjNMLFdBQUssRUFBRSxDQURHO0FBRVZ0QixhQUFPLEVBQUU7QUFGQztBQUxrQixHQUFsQixDQU5iLEVBSkQsRUFxQkU4TCxNQUFNLENBQUNZLGFBQVAsaUJBQ0E7QUFBSyxhQUFTLEVBQUM7QUFBZixLQUFtQ1osTUFBTSxDQUFDWSxhQUFQLENBQXFCMU0sT0FBeEQsQ0F0QkYsQ0F6Q0QsZUFrRUM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFPLGFBQVMsRUFBQyxTQUFqQjtBQUEyQixXQUFPLEVBQUM7QUFBbkMsd0JBREQsZUFJQztBQUNDLFFBQUksRUFBQyxVQUROO0FBRUMsYUFBUyx5QkFBa0I4TCxNQUFNLENBQUNvQixlQUFQLElBQTBCLFlBQTVDLENBRlY7QUFHQyxNQUFFLEVBQUMsd0JBSEo7QUFJQyxlQUFXLEVBQUMsa0JBSmI7QUFLQyxRQUFJLEVBQUM7QUFMTixLQU1LdEIsUUFBUSxDQUFDLGlCQUFELEVBQW9CO0FBQy9CTyxZQUFRLEVBQUU7QUFDVDdLLFdBQUssRUFBRSxJQURFO0FBRVR0QixhQUFPLEVBQUU7QUFGQSxLQURxQjtBQUsvQm1OLFlBQVEsRUFBRSxrQkFBQzdMLEtBQUQ7QUFBQSxhQUNUQSxLQUFLLEtBQUtvTCxhQUFWLElBQTJCLDRCQURsQjtBQUFBO0FBTHFCLEdBQXBCLENBTmIsRUFKRCxFQW1CRVosTUFBTSxDQUFDb0IsZUFBUCxpQkFDQTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQW1DcEIsTUFBTSxDQUFDb0IsZUFBUCxDQUF1QmxOLE9BQTFELENBcEJGLENBbEVELENBTEQsZUErRkM7QUFBSyxhQUFTLEVBQUM7QUFBZixrQkFDQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLDJEQUFDLGdEQUFEO0FBRUV0RixTQUFLLEVBQUUsU0FGVDtBQUdFZ0YsU0FBSyxFQUFFLFdBSFQ7QUFJRTRJLFFBQUksRUFBRSxJQUpSO0FBS0VwTixvQkFBZ0IsRUFBRSxrQ0FMcEI7QUFNRXVELFFBQUksRUFBRSxRQU5SO0FBT0UxSCxhQUFTLEVBQUUrVixjQUFjLENBQUMvVjtBQVA1QixJQURELENBREQsZUFhQztBQUFLLGFBQVMsRUFBQztBQUFmLGtCQUNDLDJEQUFDLHFEQUFEO0FBQ0MsYUFBUyxFQUFDLGlDQURYO0FBRUMsTUFBRSxFQUFFRSw4Q0FBTSxDQUFDRSxLQUZaO0FBR0MsU0FBSyxFQUFDO0FBSFAsa0JBSUM7QUFBTSxhQUFTLEVBQUM7QUFBaEIsYUFKRCxDQURELENBYkQsQ0EvRkQsQ0FIRCxDQURELENBREQsQ0FGRCxDQUZELENBREQ7QUFzSUEsQzs7Ozs7Ozs7Ozs7O0FDbk1EO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRU8sSUFBTUYsTUFBTSxHQUFHO0FBQ3JCRSxPQUFLLEVBQUUsR0FEYztBQUVyQjhDLFFBQU0sRUFBRSxTQUZhO0FBR3JCL0MsVUFBUSxFQUFFO0FBSFcsQ0FBZjtBQU1QLElBQU1FLE1BQU0sR0FBRyxDQUNkO0FBQ0N3VixNQUFJLEVBQUUsT0FEUDtBQUVDdFYsTUFBSSxFQUFFLEdBRlA7QUFHQ0UsV0FBUyxFQUFFZ1UsNENBQUtBO0FBSGpCLENBRGMsRUFNZDtBQUNDb0IsTUFBSSxFQUFFLFFBRFA7QUFFQ3RWLE1BQUksRUFBRSxTQUZQO0FBR0NFLFdBQVMsRUFBRWdWLDZDQUFNQTtBQUhsQixDQU5jLEVBV2Q7QUFDQ0ksTUFBSSxFQUFFLGtCQURQO0FBRUN0VixNQUFJLEVBQUUsV0FGUDtBQUdDRSxXQUFTLEVBQUU4VSxzREFBZUE7QUFIM0IsQ0FYYyxFQWdCZDtBQUNDTSxNQUFJLEVBQUUsZ0JBRFA7QUFFQ3RWLE1BQUksRUFBRSxlQUZQO0FBR0NFLFdBQVMsRUFBRTRVLG9EQUFhQTtBQUh6QixDQWhCYyxFQXFCZDtBQUNDUSxNQUFJLEVBQUUsZ0JBRFA7QUFFQ3RWLE1BQUksRUFBRSwwQkFGUDtBQUdDRSxXQUFTLEVBQUUrVSxvREFBYUE7QUFIekIsQ0FyQmMsQ0FBZjtBQTRCZW5WLHFFQUFmLEU7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQU1nVyxhQUFhLEdBQUc7QUFDbEJDLFlBQVUsRUFBRSxVQURNO0FBRWxCQyxVQUFRLEVBQUUsb0dBRlE7QUFHbEJDLGNBQVksRUFBRTtBQUhJLENBQXRCO0FBTUE3WCw2Q0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEI4WCxPQUE1QixDQUFvQ0osYUFBcEMsRTs7Ozs7Ozs7Ozs7QUNUQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9hcHAvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vYXNzZXRzL2FwcC9qcy9tYWluLmpzXCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYmFja2dyb3VuZC1sb2dpbi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYmFja2dyb3VuZC1sb2dpbkAyeC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYWRkX2ltYWdlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hZGRfcHJvamVjdC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYWRkX3VzZXIuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FyY2hpdmUuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2NoZWNrLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jbG9zZS13aGl0ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY2xvc2Uuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Rhbmdlci5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZGVsZXRlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9lZGl0LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9sZWF2ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvc3Rhci5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvc3VjY2Vzcy5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvdXBsb2FkLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy93YXJuaW5nLnN2Z1wiOyIsImNsYXNzIEFsZXJ0IHtcbiAgICBjb25zdHJ1Y3RvcihlbCkge1xuICAgICAgICB0aGlzLkRPTSA9IHsgZWwgfTtcbiAgICAgICAgdGhpcy5ET00udG9nZ2xlID0gdGhpcy5ET00uZWwucXVlcnlTZWxlY3RvcihcIi5hbGVydF9fYnRuXCIpO1xuXG4gICAgICAgIHRoaXMub25Jbml0KCk7XG4gICAgfVxuICAgIG9uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5ET00udG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLnRvZ2dsZSgpKTtcbiAgICB9XG4gICAgdG9nZ2xlKCkge1xuICAgICAgICB0aGlzLkRPTS5lbC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgdGhpcy5ET00uZWwuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gICAgICAgIHRoaXMuRE9NLmVsLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlWSgxMDAlKVwiO1xuICAgIH1cbn1cblxuY29uc3QgYWxlcnROb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1hbGVydF1cIik7XG5bLi4uYWxlcnROb2Rlc10uZm9yRWFjaCgobm9kZSkgPT4gbmV3IEFsZXJ0KG5vZGUpKTtcbiIsIi8vIENTU1xuaW1wb3J0ICcuLi9zY3NzL21haW4uc2Nzcyc7XG5cbi8vIFBvbGx5Zmlsc1xuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xuXG4vLyBDb3JlXG5pbXBvcnQgJy4vdmFsaWRhdGlvbic7XG5pbXBvcnQgJy4vYWxlcnQnO1xuXG4vLyBQbHVnaW5zXG5pbXBvcnQgJy4vb2JqZWN0Zml0JztcblxuLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBBcHAgZnJvbSAnLi9yZWFjdC9BcHAnO1xuXG4vKiBDbGllbnQgKi9cbmNvbnN0IGNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCh7XG5cdGRlZmF1bHRPcHRpb25zOiB7XG5cdFx0cXVlcmllczoge1xuXHRcdFx0cmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxuXHRcdH0sXG5cdH0sXG59KTtcblxuLyogUmVuZGVyICovXG5jb25zdCBhcHBOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuaWYgKGFwcE5vZGUgIT09IG51bGwpIHtcblx0cmVuZGVyKFxuXHRcdDxRdWVyeUNsaWVudFByb3ZpZGVyIHsuLi57IGNsaWVudCB9fT5cblx0XHRcdDxBcHAgLz5cblx0XHQ8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+LFxuXHRcdGFwcE5vZGVcblx0KTtcbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgb2JqZWN0Rml0SW1hZ2VzIGZyb20gJ29iamVjdC1maXQtaW1hZ2VzJztcblxuJChmdW5jdGlvbigpIHtcbiAgICBvYmplY3RGaXRJbWFnZXMoKTtcbn0pO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUGFnZUxvYWRlciB9IGZyb20gJy4vY29tbW9uJztcblxuLyogUm91dGVzICovXG5pbXBvcnQgcm91dGVzLCB7IFJPVVRFUyB9IGZyb20gJy4vcm91dGVzJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi9jb250ZXh0JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBmZXRjaEN1cnJlbnRVc2VyLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi9hcGknO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBnZXRSb2xlIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKCk7XG5cdGNvbnN0IFt1c2VyUm9sZSwgc2V0VXNlclJvbGVdID0gdXNlU3RhdGUoW10pO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB1c2VySWQgPSBhdG9iKGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpKTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgaXNMb2FkaW5nIH0gPSB1c2VRdWVyeShRVUVSWV9LRVlTLkNVUlJFTlRfVVNFUiwgKCkgPT4gZmV0Y2hDdXJyZW50VXNlcih7IHVzZXJJZCB9KSwge1xuXHRcdHJldHJ5OiBmYWxzZSxcblx0XHRvblN1Y2Nlc3M6ICh1c2VyKSA9PiB7XG5cdFx0XHRzZXRDdXJyZW50VXNlcih1c2VyKTtcblx0XHRcdHNldFVzZXJSb2xlKGdldFJvbGUodXNlcikpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxSb3V0ZXI+XG5cdFx0XHQ8U3dpdGNoPlxuXHRcdFx0XHQ8U3RhdGljQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjdXJyZW50VXNlciwgdXNlclJvbGUgfX0+XG5cdFx0XHRcdFx0PFBhZ2VMb2FkZXIgey4uLnsgaXNMb2FkaW5nIH19PlxuXHRcdFx0XHRcdFx0e2N1cnJlbnRVc2VyICYmIGxvY2F0aW9uLnBhdGhuYW1lID09PSAnLycgJiYgPFJlZGlyZWN0IHRvPXtST1VURVMucHJvamVjdHN9IC8+fVxuXHRcdFx0XHRcdFx0eyFjdXJyZW50VXNlciAmJiA8UmVkaXJlY3QgdG89e1JPVVRFUy5sb2dpbn0gLz59XG5cdFx0XHRcdFx0XHR7cm91dGVzLm1hcCgoeyBwYXRoLCBjb21wb25lbnQ6IENvbXBvbmVudCwgcHJvcHMgfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8Um91dGUga2V5PXtwYXRofSBwYXRoPXtwYXRofSBleGFjdD5cblx0XHRcdFx0XHRcdFx0XHQ8Q29tcG9uZW50IHsuLi57IC4uLnByb3BzLCBjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXIgfX0gLz5cblx0XHRcdFx0XHRcdFx0PC9Sb3V0ZT5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvUGFnZUxvYWRlcj5cblx0XHRcdFx0XHQ8VG9hc3RDb250YWluZXJcblx0XHRcdFx0XHRcdHsuLi57IGhpZGVQcm9ncmVzc0JhcjogdHJ1ZSwgbmV3ZXN0T25Ub3A6IHRydWUsIHBvc2l0aW9uOiAnYm90dG9tLWxlZnQnLCBjbG9zZUJ1dHRvbjogZmFsc2UgfX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L1N0YXRpY0NvbnRleHQuUHJvdmlkZXI+XG5cdFx0XHQ8L1N3aXRjaD5cblx0XHQ8L1JvdXRlcj5cblx0KTtcbn1cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8qIEFkZCBjb21tZW50IHwgZXhwZWN0cyBwaGFzZSBpZCwgdXNlciBpZCBhbmQgZm9ybVJlZiBvYmVjdCAqL1xuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSBhc3luYyAoeyBmb3JtUmVmLCBwaGFzZUlkLCB1c2VySWQsIHBvc2l0aW9uIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKGZvcm1SZWYuY3VycmVudCk7XG5cdHBhcmFtcy5hcHBlbmQoJ3VzZXJJZCcsIHVzZXJJZCk7XG5cdHBhcmFtcy5hcHBlbmQoJ3Bvc2l0aW9uWCcsIHBvc2l0aW9uLnhQZXJjZW50KTtcblx0cGFyYW1zLmFwcGVuZCgncG9zaXRpb25ZJywgcG9zaXRpb24ueVBlcmNlbnQpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvY29tbWVudHMvYWRkLyR7cGhhc2VJZH1gLCBwYXJhbXMpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vc2VjdXJpdHknO1xuZXhwb3J0ICogZnJvbSAnLi9wcm9qZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vcHJvamVjdEltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5cbmV4cG9ydCBjb25zdCBRVUVSWV9LRVlTID0ge1xuXHRDVVJSRU5UX1VTRVI6ICdjdXJyZW50X3VzZXInLFxuXHRQUk9KRUNUX0JZX1VTRVI6ICdwcm9qZWN0X2J5X3VzZXInLFxuXHRQUk9KRUNUX0JZX0lEOiAncHJvamVjdF9ieV9pZCcsXG5cdFBST0pFQ1RfSU1BR0VfQllfSUQ6ICdwcm9qZWN0X2ltYWdlX2J5X2lkJyxcblx0R0xPQkFMX1VTRVJTOiAnZ2xvYmFsX3VzZXJzJyxcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBGZXRjaCBwcm9qZWN0cyBieSB1c2VyIHwgZXhwZWN0cyB1c2VyIGlkICovXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9qZWN0c0J5VXNlciA9IGFzeW5jICh7IHVzZXJJZCB9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9qZWN0cy9nZXQvJHt1c2VySWR9YCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBGZXRjaCBwcm9qZWN0cyBieSBpZCB8IGV4cGVjdHMgcHJvamVjdCBpZCAqL1xuZXhwb3J0IGNvbnN0IGZldGNoUHJvamVjdEJ5SWQgPSBhc3luYyAoeyBwcm9qZWN0SWQgfSkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcHJvamVjdC9nZXQvJHtwcm9qZWN0SWR9YCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBBZGQgcHJvamVjdCAqL1xuZXhwb3J0IGNvbnN0IGFkZFByb2plY3QgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvcHJvamVjdHMvYWRkJyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBEZWxldGUgcHJvamVjdChzKSB8IGV4cGVjdHMgYXJyYXkgb2YgcHJvamVjdElkcyAgKi9cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9qZWN0cyA9IGFzeW5jICh7IHByb2plY3RJZHMgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblx0cHJvamVjdElkcy5mb3JFYWNoKChpZCkgPT4gcGFyYW1zLmFwcGVuZCgncHJvamVjdHNbXScsIGlkKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9kZWxldGVgLCBwYXJhbXMpO1xuXG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBMZWF2ZSBwcm9qZWN0KHMpIHwgZXhwZWN0cyBhcnJheSBvZiBwcm9qZWN0SWRzIGFuZCB1c2VyIGlkICAqL1xuZXhwb3J0IGNvbnN0IGxlYXZlUHJvamVjdHMgPSBhc3luYyAoeyBwcm9qZWN0SWRzLCB1c2VySWQgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblx0cHJvamVjdElkcy5mb3JFYWNoKChpZCkgPT4gcGFyYW1zLmFwcGVuZCgncHJvamVjdHNbXScsIGlkKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9sZWF2ZS8ke3VzZXJJZH1gLCBwYXJhbXMpO1xuXG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBFZGl0IHByb2plY3QgfCBleHBlY3RzIGZvcm1EYXRhIG9iamVjdCBhbmQgcHJvamVjdCBpZCAgKi9cbmV4cG9ydCBjb25zdCBlZGl0UHJvamVjdCA9IGFzeW5jICh7IGZvcm1SZWYsIGlkIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKGZvcm1SZWYuY3VycmVudCk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9lZGl0LyR7aWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBGZXRjaCBwcm9qZWN0SW1hZ2UgYnkgaWQgfCBleHBlY3RzIHByb2plY3QgaW1hZ2UgaWQgKi9cbmV4cG9ydCBjb25zdCBmZXRjaFByb2plY3RJbWFnZUJ5SWQgPSBhc3luYyAoeyBwcm9qZWN0SW1hZ2VJZCB9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9pbWFnZXMvZ2V0LyR7cHJvamVjdEltYWdlSWR9YCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBBZGQgcHJvamVjdEltYWdlKHMpIHwgZXhwZWN0cyBwcm9qZWN0IGlkIGFuZCBhcnJheSBvZiBpbWFnZXMgKGJsb2IpICovXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdEltYWdlcyA9IGFzeW5jICh7IHByb2plY3RJZCwgaW1hZ2VzIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5cdGltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4gcGFyYW1zLmFwcGVuZCgnaW1hZ2VzW10nLCBpbWFnZSkpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvaW1hZ2VzL2FkZC8ke3Byb2plY3RJZH1gLCBwYXJhbXMpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRGVsZXRlIHByb2plY3RJbWFnZShzKSB8IGV4cGVjdHMgcHJvamVjdCBpZCBhbmQgYXJyYXkgb2YgcHJvamVjdEltYWdlSWRzICAqL1xuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3RJbWFnZXMgPSBhc3luYyAoeyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZUlkcyB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuXHRwcm9qZWN0SW1hZ2VJZHMuZm9yRWFjaCgoaWQpID0+IHBhcmFtcy5hcHBlbmQoJ3Byb2plY3RJbWFnZXNbXScsIGlkKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9pbWFnZXMvZGVsZXRlLyR7cHJvamVjdElkfWAsIHBhcmFtcyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBFZGl0IHByb2plY3RJbWFnZSB8IGV4cGVjdHMgZm9ybVJlZiBvYmplY3QgYW5kIHByb2plY3RJbWFnZSBpZCAgKi9cbmV4cG9ydCBjb25zdCBlZGl0UHJvamVjdEltYWdlID0gYXN5bmMgKHsgZm9ybVJlZiwgaWQgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybVJlZi5jdXJyZW50KTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2ltYWdlcy9lZGl0LyR7aWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBTaWdudXAgdG8gcGxhdGZvcm0gfCBleHBlY3RzIGZvcm1SZWYgb2JqZWN0ICovXG5leHBvcnQgY29uc3Qgc2lnbnVwID0gYXN5bmMgKHsgZm9ybVJlZiB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3NpZ251cCcsIHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIExvZ2luIHRvIHBsYXRmb3JtIHwgZXhwZWN0cyBmb3JtUmVmIG9iamVjdCAqL1xuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgZm9ybVJlZiB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCB7XG5cdFx0ZW1haWw6IHBhcmFtcy5nZXQoJ2VtYWlsJyksXG5cdFx0cGFzc3dvcmQ6IHBhcmFtcy5nZXQoJ3Bhc3N3b3JkJyksXG5cdH0pO1xuXG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBMb2dvdXQgZnJvbSBwbGF0Zm9ybSAqL1xuZXhwb3J0IGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2xvZ291dCcpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuLyogRmV0Y2ggY3VycmVudCAobG9nZ2VkIGluKSB1c2VyIHwgZXhwZWN0cyB1c2VyIGlkICovXG5leHBvcnQgY29uc3QgZmV0Y2hDdXJyZW50VXNlciA9IGFzeW5jICh7IHVzZXJJZCB9KSA9PiB7XG5cdGxldCB1cmwgPSAnL2FwaS91c2Vycy9nZXQnO1xuXHRpZiAodXNlcklkKSB1cmwgPSBgJHt1cmx9LyR7dXNlcklkfWA7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBGZXRjaCBhbGwgdXNlcnMgaW4gZGIgKi9cbmV4cG9ydCBjb25zdCBmZXRjaEdvYmFsVXNlcnMgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS91c2Vycy9nZXQvYWxsJyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBBZGQgdXNlciB0byBwcm9qZWN0IHwgZXhwZWN0cyBwcm9qZWN0IGlkIGFuZCB1c2VyIGVtYWlsICovXG5leHBvcnQgY29uc3QgYWRkVXNlciA9IGFzeW5jICh7IHByb2plY3RJZCwgZW1haWwgfSkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3VzZXJzL2FkZC8ke3Byb2plY3RJZH1gLCB7IGVtYWlsIH0pO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRGVsZXRlIHVzZXIgZnJvbSBwcm9qZWN0IHwgZXhwZWN0cyBwcm9qZWN0IGlkIGFuZCB1c2VyIGlkICovXG5leHBvcnQgY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jICh7IHByb2plY3RJZCwgdXNlcklkIH0pID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS91c2Vycy9kZWxldGUvJHtwcm9qZWN0SWR9YCwgeyB1c2VySWQgfSk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiwgRkFERV9JTl9VUCB9IGZyb20gJy4vYW5pbWF0aW9ucyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vY29tcG9uZW50cy91c2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJveCh7XG5cdHRpdGxlLFxuXHRzdWJ0aXRsZSxcblx0U3VidGl0bGVDb21wb25lbnQsXG5cdGJveE9wZW4sXG5cdHRvZ2dsZUJveCxcblx0Y2hpbGRyZW4sXG5cdHVzZXIsXG5cdHBvc2l0aW9uID0ge30sXG5cdHJlbmRlck9uQm9keSA9IHRydWUsXG5cdGJveFJlZixcblx0ZXh0ZW5zaW9uQ2xhc3Nlcyxcblx0YW5pbWF0ZSA9IHRydWUsXG59KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IGxlZnQgPSAwLCB0b3AgPSAwIH0gPSBwb3NpdGlvbjtcblx0Y29uc3QgYW5pbWF0aW9uID0gYW5pbWF0ZSA/IHsgLi4uRkFERV9JTl9VUCB9IDoge307XG5cblx0LyogVE9ETzogZXNjYXBlIGV2ZW50IGxpc3RlbmVyICovXG5cdGNvbnN0IHJlbmRlciA9ICgpID0+IChcblx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0e2JveE9wZW4gJiYgKFxuXHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdHJlZj17Ym94UmVmfVxuXHRcdFx0XHRcdGxheW91dFxuXHRcdFx0XHRcdHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMiB9fVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YGJveCAke3JlbmRlck9uQm9keSAmJiAnYm94LS1jZW50ZXInfSAke2V4dGVuc2lvbkNsYXNzZXN9YH1cblx0XHRcdFx0XHRzdHlsZT17eyAnLS1sZWZ0JzogbGVmdCwgJy0tdG9wJzogdG9wIH19PlxuXHRcdFx0XHRcdHtyZW5kZXJPbkJvZHkgJiYgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYm94LW92ZXJsYXlcIiB7Li4uRkFERV9JTn0gb25DbGljaz17dG9nZ2xlQm94fSAvPn1cblx0XHRcdFx0XHQ8bW90aW9uLmRpdiBrZXk9XCJib3gtY29udGVudFwiIGNsYXNzTmFtZT1cImJveF9fY29udGVudCBib3JkZXIgcC01XCIgey4uLmFuaW1hdGlvbn0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveF9faGVhZGVyIGQtZmxleCBhbGlnbi1pdGVtcy1zdGFydFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHR7dXNlciAmJiA8VXNlciB7Li4ueyB1c2VyIH19IHNpemU9XCJ4bFwiIC8+fVxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgZC1mbGV4IGZsZXgtY29sdW1uICR7dXNlciAmJiAnbWwtMyd9YH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LS1sZyBtYi0wXCI+e3RpdGxlfTwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdHsoU3VidGl0bGVDb21wb25lbnQgfHwgc3VidGl0bGUpICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNjAgbWItMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtTdWJ0aXRsZUNvbXBvbmVudCA/IDxTdWJ0aXRsZUNvbXBvbmVudCAvPiA6IHN1YnRpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fY2xvc2UgYnRuIGJ0bi1saW5rIG1sLWF1dG9cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZUJveH0+XG5cdFx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEyXCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveF9fYm9keSBkLWZsZXggbXQtNFwiPntjaGlsZHJlbn08L2Rpdj5cblx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdCl9XG5cdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG5cblx0LyogUmVuZGVyICovXG5cdGlmIChyZW5kZXJPbkJvZHkpIHtcblx0XHRyZXR1cm4gY3JlYXRlUG9ydGFsKHJlbmRlcigpLCBkb2N1bWVudC5ib2R5KTtcblx0fVxuXG5cdHJldHVybiByZW5kZXIoKTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tICdyZWFjdC1kcm9wem9uZSc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRJbWFnZUljb24gZnJvbSAnaWNvbnMvYWRkX2ltYWdlLnN2Zyc7XG5pbXBvcnQgdXBsb2FkSW1hZ2VJY29uIGZyb20gJ2ljb25zL3VwbG9hZC5zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBMb2FkaW5nV3JhcHBlciB9IGZyb20gJy4vJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU0NBTEVfRkFERSwgRkFERV9JTiB9IGZyb20gJy4vYW5pbWF0aW9ucyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgYWRkUHJvamVjdEltYWdlcywgZGVsZXRlUHJvamVjdEltYWdlcywgUVVFUllfS0VZUyB9IGZyb20gJy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3B6b25lKHsgcHJvamVjdElkLCBwb3NpdGl0aW9uID0gJ2xlZnQnLCBjaGlsZHJlbiB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHRjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcywgaXNEcmFnQWN0aXZlIH0gPSB1c2VEcm9wem9uZSh7XG5cdFx0YWNjZXB0OiAnaW1hZ2UvKicsXG5cdFx0bm9DbGljazogdHJ1ZSxcblx0XHRvbkRyb3A6IChhY2NlcHRlZEZpbGVzKSA9PiB1cGRhdGVQcm9qZWN0SW1hZ2VzKCdhZGQnLCB7IGltYWdlczogYWNjZXB0ZWRGaWxlcyB9KSxcblx0fSk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGFkZFByb2plY3RJbWFnZXNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZFByb2plY3RJbWFnZXMsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0pLFxuXHR9KTtcblxuXHRjb25zdCBkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVQcm9qZWN0SW1hZ2VzLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKSxcblx0fSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHVwZGF0ZVByb2plY3RJbWFnZXMgPSAoYWN0aW9uLCBwcm9wcykgPT4ge1xuXHRcdGlmIChhY3Rpb24gPT09ICdhZGQnKSBhZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkLCAuLi5wcm9wcyB9KTtcblx0XHRpZiAoYWN0aW9uID09PSAnZGVsZXRlJykgZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgLi4ucHJvcHMgfSk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZVwiIHsuLi5nZXRSb290UHJvcHMoKX0+XG5cdFx0XHQ8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cblx0XHRcdDxEcm9wem9uZUlubmVyXG5cdFx0XHRcdGFkZEltYWdlTG9hZGluZz17YWRkUHJvamVjdEltYWdlc011dGF0aW9uLmlzTG9hZGluZ31cblx0XHRcdFx0ey4uLnsgdXBkYXRlUHJvamVjdEltYWdlcywgaXNQYXJlbnREcmFnQWN0aXZlOiBpc0RyYWdBY3RpdmUsIHBvc2l0aXRpb24gfX1cblx0XHRcdC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctLWVxdWFsaXplZCBndXR0ZXJzLTVcIj5cblx0XHRcdFx0e2NoaWxkcmVuKHsgdXBkYXRlUHJvamVjdEltYWdlcywgaXNMb2FkaW5nOiBkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24uaXNMb2FkaW5nIH0pfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbi8qIElubmVyIGRyb3B6b25lICovXG5jb25zdCBEcm9wem9uZUlubmVyID0gKHsgYWRkSW1hZ2VMb2FkaW5nLCB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc1BhcmVudERyYWdBY3RpdmUsIHBvc2l0aXRpb24gfSkgPT4ge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcywgaXNEcmFnQWN0aXZlIH0gPSB1c2VEcm9wem9uZSh7XG5cdFx0YWNjZXB0OiAnaW1hZ2UvKicsXG5cdFx0bm9EcmFnRXZlbnRzQnViYmxpbmc6IHRydWUsXG5cdFx0b25Ecm9wOiAoYWNjZXB0ZWRGaWxlcykgPT4gdXBkYXRlUHJvamVjdEltYWdlcygnYWRkJywgeyBpbWFnZXM6IGFjY2VwdGVkRmlsZXMgfSksXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZHJvcHpvbmVcIiB7Li4uZ2V0Um9vdFByb3BzKCl9PlxuXHRcdFx0PGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7KGlzRHJhZ0FjdGl2ZSB8fCBpc1BhcmVudERyYWdBY3RpdmUpICYmIChcblx0XHRcdFx0XHQ8bW90aW9uLmRpdiB7Li4uRkFERV9JTn0gY2xhc3NOYW1lPVwiZHJvcHpvbmVfX292ZXJsYXlcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0tc2Vjb25kYXJ5XCIgc3R5bGU9e3sgJy0tc2l6ZSc6IDc1IH19PlxuXHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMzAgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e3VwbG9hZEltYWdlSWNvbn0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0KX1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0PG1vdGlvbi5idXR0b25cblx0XHRcdFx0ey4uLlNDQUxFX0ZBREV9XG5cdFx0XHRcdGtleT1cImFkZC1wcm9qZWN0XCJcblx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdGNsYXNzTmFtZT17YGljb24td3JhcHBlciBpY29uLXdyYXBwZXItLWludGVyYWN0aXZlIGljb24td3JhcHBlci0tc2Vjb25kYXJ5IGJ0biBidG4tbGluayBidG4tLWFkZCBidG4tLWFkZC0ke3Bvc2l0aXRpb259YH1cblx0XHRcdFx0c3R5bGU9e3sgJy0tc2l6ZSc6IDc1IH19PlxuXHRcdFx0XHQ8TG9hZGluZ1dyYXBwZXJcblx0XHRcdFx0XHRsb2FkaW5nPXthZGRJbWFnZUxvYWRpbmd9XG5cdFx0XHRcdFx0Y2xhc3Nlcz17eyBsb2FkZXJDbGFzc2VzOiAncG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4IHRleHQtc2Vjb25kYXJ5JyB9fVxuXHRcdFx0XHRcdGxvYWRlclNpemU9ezMwfT5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMzAgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e2FkZEltYWdlSWNvbn0gLz5cblx0XHRcdFx0PC9Mb2FkaW5nV3JhcHBlcj5cblx0XHRcdDwvbW90aW9uLmJ1dHRvbj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU0NBTEVfRkFERSB9IGZyb20gJy4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRpbmdXcmFwcGVyKHsgbG9hZGluZywgY2hpbGRyZW4sIGxvYWRlclNpemUgPSA0MCwgY2xhc3NlcyA9IHt9IH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgbG9hZGVyQ2xhc3NlcyA9ICdwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXgnLCBkZWZhdWx0Q2xhc3NlcyA9ICcnIH0gPSBjbGFzc2VzO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9PlxuXHRcdFx0e2xvYWRpbmcgPyAoXG5cdFx0XHRcdDxtb3Rpb24uZGl2IGtleT1cImxvYWRlclwiIGNsYXNzTmFtZT17bG9hZGVyQ2xhc3Nlc30gey4uLlNDQUxFX0ZBREV9PlxuXHRcdFx0XHRcdDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwiaW5oZXJpdFwiIHNpemU9e2xvYWRlclNpemV9IC8+XG5cdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxtb3Rpb24uZGl2IGtleT1cImRlZmF1bHRcIiBjbGFzc05hbWU9e2RlZmF1bHRDbGFzc2VzfSB7Li4uU0NBTEVfRkFERX0+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQpfVxuXHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4sIFRSQU5TRk9STV9VUCB9IGZyb20gXCIuL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwoeyB0b2dnbGVNb2RhbCwgY2hpbGRyZW4sIGRvbUVsZW1lbnQsIHZhcmlhbnQgPSBcImRlZmF1bHRcIiB9KSB7XG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT1cImN1c3RvbS1tb2RhbFwiIGNsYXNzTmFtZT17YGN1c3RvbS1tb2RhbCBjdXN0b20tbW9kYWwtLSR7dmFyaWFudH1gfT5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fb3ZlcmxheVwiIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfSB7Li4uRkFERV9JTn0gLz5cbiAgICAgICAgICAgIDxtb3Rpb24uYXJ0aWNsZSBrZXk9XCJjdXN0b20tbW9kYWxfX2NvbnRlbnRcIiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2NvbnRlbnRcIiB7Li4uVFJBTlNGT1JNX1VQfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBkLWZsZXggZmxleC1ncm93LTFcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5hcnRpY2xlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgaWYgKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChyZW5kZXIoKSwgZG9tRWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlcigpO1xufVxuIiwiLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3MnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOIH0gZnJvbSAnLi9hbmltYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZUxvYWRlcih7IGlzTG9hZGluZywgY2hpbGRyZW4gfSkge1xuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0e2lzTG9hZGluZyA/IChcblx0XHRcdFx0PG1vdGlvbi5kaXYgey4uLkZBREVfSU59PlxuXHRcdFx0XHRcdDxMaW5lYXJQcm9ncmVzcyBjb2xvcj1cInNlY29uZGFyeVwiIC8+XG5cdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxkaXYga2V5PVwiY2hpbGRyZW5cIj57Y2hpbGRyZW59PC9kaXY+XG5cdFx0XHQpfVxuXHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHQpO1xufVxuIiwiY29uc3QgRUFTRSA9IFswLjY1LCAwLCAwLjM1LCAxXTtcblxuY29uc3QgRkFERV9JTiA9IHtcblx0aW5pdGlhbDoge1xuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdGFuaW1hdGU6IHtcblx0XHRvcGFjaXR5OiAxLFxuXHR9LFxuXHRleGl0OiB7XG5cdFx0b3BhY2l0eTogMCxcblx0fSxcblx0dHJhbnNpdGlvbjoge1xuXHRcdGVhc2U6IEVBU0UsXG5cdFx0ZHVyYXRpb246IDAuMixcblx0fSxcbn07XG5cbmNvbnN0IEZBREVfSU5fVVAgPSB7XG5cdGluaXRpYWw6IHtcblx0XHR5OiAyMDAsXG5cdFx0b3BhY2l0eTogMCxcblx0fSxcblx0YW5pbWF0ZToge1xuXHRcdHk6IDAsXG5cdFx0b3BhY2l0eTogMSxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3ByaW5nJyxcblx0XHRcdGRhbXBpbmc6IDQyLFxuXHRcdFx0c3RpZmZuZXNzOiA4MDAsXG5cdFx0fSxcblx0fSxcblx0ZXhpdDoge1xuXHRcdHk6IDIwMCxcblx0XHRvcGFjaXR5OiAwLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdHR5cGU6ICdzcHJpbmcnLFxuXHRcdFx0ZGFtcGluZzogNDIsXG5cdFx0XHRzdGlmZm5lc3M6IDEyMDAsXG5cdFx0fSxcblx0fSxcbn07XG5cbmNvbnN0IFRSQU5TRk9STV9VUCA9IHtcblx0aW5pdGlhbDoge1xuXHRcdHk6ICcxMDAlJyxcblx0fSxcblx0YW5pbWF0ZToge1xuXHRcdHk6ICcwJScsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0MSxcblx0XHRcdHN0aWZmbmVzczogNjAwLFxuXHRcdH0sXG5cdH0sXG5cdGV4aXQ6IHtcblx0XHR5OiAnMTAwJScsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0MSxcblx0XHRcdHN0aWZmbmVzczogMTIwMCxcblx0XHR9LFxuXHR9LFxufTtcblxuY29uc3QgU0NBTEVfRkFERSA9IHtcblx0aW5pdGlhbDoge1xuXHRcdHNjYWxlOiAwLFxuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdGFuaW1hdGU6IHtcblx0XHRzY2FsZTogMSxcblx0XHRvcGFjaXR5OiAxLFxuXHR9LFxuXHRleGl0OiB7XG5cdFx0c2NhbGU6IDAsXG5cdFx0b3BhY2l0eTogMCxcblx0fSxcblx0dHJhbnNpdGlvbjoge1xuXHRcdGVhc2U6IEVBU0UsXG5cdFx0ZHVyYXRpb246IDAuMixcblx0fSxcbn07XG5cbmNvbnN0IFNUQUdHRVJfVVAgPSAoaW5kZXggPSAwKSA9PiAoe1xuXHRpbml0aWFsOiB7IG9wYWNpdHk6IDAsIHk6IDM1IH0sXG5cdGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgeTogMCwgdHJhbnNpdGlvbjogeyB0eXBlOiAnc3ByaW5nJywgZGFtcGluZzogMzAsIHN0aWZmbmVzczogNDUwLCBkZWxheTogaW5kZXggKiAwLjAzNSB9IH0sXG5cdGV4aXQ6IHsgb3BhY2l0eTogMCwgc2NhbGU6IDAuMjUsIHRyYW5zaXRpb246IHsgdHlwZTogJ3NwcmluZycsIGRhbXBpbmc6IDMwLCBzdGlmZm5lc3M6IDYwMCB9IH0sXG59KTtcblxuY29uc3QgU1RBR0dFUl9MRUZUID0gKGluZGV4ID0gMCkgPT4gKHtcblx0aW5pdGlhbDogeyBvcGFjaXR5OiAwLCB4OiAxMCB9LFxuXHRhbmltYXRlOiB7IG9wYWNpdHk6IDEsIHg6IDAsIHRyYW5zaXRpb246IHsgdHlwZTogJ3NwcmluZycsIGRhbXBpbmc6IDMwLCBzdGlmZm5lc3M6IDMwMCwgZGVsYXk6IGluZGV4ICogMC4wMzUgfSB9LFxuXHRleGl0OiB7IG9wYWNpdHk6IDAsIHg6IDEwLCB0cmFuc2l0aW9uOiB7IHR5cGU6ICdzcHJpbmcnLCBkYW1waW5nOiAzMCwgc3RpZmZuZXNzOiA2MDAgfSB9LFxufSk7XG5cbmV4cG9ydCB7IEZBREVfSU4sIEZBREVfSU5fVVAsIFRSQU5TRk9STV9VUCwgU0NBTEVfRkFERSwgU1RBR0dFUl9VUCwgU1RBR0dFUl9MRUZUIH07XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIERyb3B6b25lIH0gZnJvbSAnLi9Ecm9wem9uZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsIH0gZnJvbSAnLi9Nb2RhbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJveCB9IGZyb20gJy4vQm94JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuL0xvYWRpbmdXcmFwcGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFnZUxvYWRlciB9IGZyb20gJy4vUGFnZUxvYWRlcic7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gJ2ljb25zL2Nsb3NlLnN2Zyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFRSQU5TRk9STV9VUCB9IGZyb20gJy4uLy4uL2NvbW1vbi9hbmltYXRpb25zJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuLi8uLi9jb21tb24nO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWN0aW9uTWVudSh7IHNlbGVjdGVkLCByZXNldFNlbGVjdGVkLCBhY3Rpb25zIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdiB7Li4uVFJBTlNGT1JNX1VQfSBjbGFzc05hbWU9XCJiYXIgYmFyLS1wcm9qZWN0XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmFyX19idG4gYnRuIGJ0bi1saW5rIGQtaW5saW5lLWZsZXggdGV4dC13aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3Jlc2V0U2VsZWN0ZWR9PlxuXHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTRcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWwtMiBtYi0wXCI+e3NlbGVjdGVkLmxlbmd0aH0gc2VsZWN0ZWQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiYmFyX19saXN0IGxpc3QgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHR7YWN0aW9ucy5tYXAoXG5cdFx0XHRcdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhlbWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1Blcm1pc3Npb24sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb24sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb25TaXplID0gMTIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG11dGF0aW9uID0gKCkgPT4ge30sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzTG9hZGluZyA9IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdGFjdGlvbkluZGV4XG5cdFx0XHRcdFx0XHRcdFx0KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoaGFzUGVybWlzc2lvbi5pbmNsdWRlcyh1c2VyUm9sZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXthY3Rpb25JbmRleH0gY2xhc3NOYW1lPVwibGlzdF9faXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJiYXJfX2J0biBidG4gYnRuLWxpbmsgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LWRlY29yYXRpb24tbm9uZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e211dGF0aW9ufT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGljb24td3JhcHBlciBpY29uLXdyYXBwZXItLSR7dGhlbWV9IGljb24td3JhcHBlci0taW50ZXJhY3RpdmVgfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TG9hZGluZ1dyYXBwZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvYWRpbmc9e2lzTG9hZGluZ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvYWRlclNpemU9ezEyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3Nlcz17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkZXJDbGFzc2VzOiBgcG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4IHRleHQtJHt0aGVtZX1gLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d3JhcHBlcj1cInN2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGljb24gaWNvbi0tJHtpY29uU2l6ZX0gdGV4dC0ke3RoZW1lfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aWNvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Mb2FkaW5nV3JhcHBlcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImJ0bl9fdGV4dCB0ZXh0LXdoaXRlIG1sLTJcIj57dGl0bGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbW90aW9uLmRpdj5cblx0KTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQWN0aW9uTWVudSB9IGZyb20gJy4vQWN0aW9uTWVudSc7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzdHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Utd2hpdGUuc3ZnJztcbmltcG9ydCB3YXJuaW5nSWNvbiBmcm9tICdpY29ucy93YXJuaW5nLnN2Zyc7XG5pbXBvcnQgZXJyb3JJY29uIGZyb20gJ2ljb25zL2Rhbmdlci5zdmcnO1xuaW1wb3J0IHN1Y2Nlc3NJY29uIGZyb20gJ2ljb25zL3N1Y2Nlc3Muc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxlcnQoeyBtZXNzYWdlLCBhcHBlYXJhbmNlLCBjbG9zZVRvYXN0IH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IGFwcGVhcmFuY2VUeXBlcyA9IHtcblx0XHR3YXJuaW5nOiB7XG5cdFx0XHR0aXRsZTogJ1dhcm5pbmcnLFxuXHRcdFx0aWNvbjogd2FybmluZ0ljb24sXG5cdFx0fSxcblx0XHRlcnJvcjoge1xuXHRcdFx0dGl0bGU6ICdFcnJvcicsXG5cdFx0XHRpY29uOiBlcnJvckljb24sXG5cdFx0fSxcblx0XHRzdWNjZXNzOiB7XG5cdFx0XHR0aXRsZTogJ1N1Y2Nlc3MnLFxuXHRcdFx0aWNvbjogc3VjY2Vzc0ljb24sXG5cdFx0fSxcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LS1ub3RpZmljYXRpb25cIiByb2xlPVwiYWxlcnRcIiBkYXRhLWFsZXJ0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHctMTAwXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgYWxlcnRfX2ljb24td3JhcHBlciBhbGVydF9faWNvbi13cmFwcGVyLS0ke2FwcGVhcmFuY2V9IG1yLTJgfT5cblx0XHRcdFx0XHQ8UmVhY3RTVkdcblx0XHRcdFx0XHRcdHdyYXBwZXI9XCJzdmdcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWxlcnRfX2ljb24gaWNvbiBpY29uLS0xMlwiXG5cdFx0XHRcdFx0XHRzcmM9e2FwcGVhcmFuY2VUeXBlc1thcHBlYXJhbmNlXS5pY29ufVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi0wXCI+e2FwcGVhcmFuY2VUeXBlc1thcHBlYXJhbmNlXS50aXRsZX08L3A+XG5cdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYWxlcnRfX2J0biBidG4gYnRuLWxpbmsgbWwtYXV0b1wiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjbG9zZVRvYXN0fT5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTBcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImFsZXJ0X19tZXNzYWdlIHRleHQtLXhzIHRleHQtbXV0ZWQtLTcwIG1yLWxnLThcIj57bWVzc2FnZX08L3NwYW4+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYmcgZnJvbSAnaW1hZ2VzL2JhY2tncm91bmQtbG9naW4uanBnJztcbmltcG9ydCBiZ1JldGluYSBmcm9tICdpbWFnZXMvYmFja2dyb3VuZC1sb2dpbkAyeC5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYWNrZ3JvdW5kKCkge1xuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cblx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiYmFja2dyb3VuZF9faW1hZ2VcIiBzcmM9e2JnfSBzcmNTZXQ9e2JnUmV0aW5hfSBhbHQ9XCJCYWNrZ3JvdW5kXCIgLz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL2NvbW1vbic7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGVkaXRJY29uIGZyb20gJ2ljb25zL2VkaXQuc3ZnJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dCc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBFZGl0YWJsZUJvZHkgZnJvbSAnLi9FZGl0YWJsZUJvZHknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0YWJsZSh7IGlucHV0VHlwZSwgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbYm94T3Blbiwgc2V0Qm94T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgdGl0bGUgPSBgRWRpdGluZyAke2lucHV0VHlwZX1gO1xuXHRjb25zdCBzdWJ0aXRsZSA9IGBTYXZlIHdoZW4gcmVhZHlgO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB0b2dnbGVCb3ggPSAoKSA9PiBzZXRCb3hPcGVuKCFib3hPcGVuKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVkaXRhYmxlIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcG9zaXRpb24tcmVsYXRpdmVcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZWRpdGFibGVfX2NvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+XG5cdFx0XHR7dXNlclJvbGUgPT09ICdhZG1pbicgJiYgKFxuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImVkaXRhYmxlX190b2dnbGUgYnRuIGJ0bi1saW5rIGljb24td3JhcHBlciBpY29uLXdyYXBwZXItLXNlY29uZGFyeSBpY29uLXdyYXBwZXItLWludGVyYWN0aXZlIHN0cmV0Y2hlZC1saW5rIG1sLTNcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17dG9nZ2xlQm94fVxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgJy0tc2l6ZSc6IDI1IH19PlxuXHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEwIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXtlZGl0SWNvbn0gLz5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8Qm94IHsuLi57IHRpdGxlLCBzdWJ0aXRsZSwgYm94T3BlbiwgdG9nZ2xlQm94IH19PlxuXHRcdFx0XHRcdFx0PEVkaXRhYmxlQm9keSB7Li4ueyB0aXRsZSwgaW5wdXRUeXBlLCB0b2dnbGVCb3gsIC4uLnJlc3QgfX0gLz5cblx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0PC8+XG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUZXh0YXJlYUF1dG9zaXplIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBFbGVtZW50cyAqL1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0YWJsZUJvZHkoe1xuXHR0aXRsZSxcblx0aW5wdXRUeXBlLFxuXHR0b2dnbGVCb3gsXG5cdGNvbnRlbnQsXG5cdG11dGF0aW9uLFxuXHRtdXRhdGlvbklkLFxuXHRtdXRhdGlvbk9uU3VjY2Vzcyxcbn0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShjb250ZW50KTtcblxuXHQvKiBSZWZzICovXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblx0Y29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBFZmZlY3RzICovXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGlucHV0UmVmPy5jdXJyZW50KSBpbnB1dFJlZj8uY3VycmVudD8uc2VsZWN0KCk7XG5cdH0sIFtdKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgZWRpdE11dGF0aW9uID0gdXNlTXV0YXRpb24obXV0YXRpb24sIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdG11dGF0aW9uT25TdWNjZXNzKCk7XG5cdFx0XHR0b2dnbGVCb3goKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8Zm9ybVxuXHRcdFx0cmVmPXtmb3JtUmVmfVxuXHRcdFx0Y2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LWdyb3ctMVwiXG5cdFx0XHRvblN1Ym1pdD17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGVkaXRNdXRhdGlvbi5tdXRhdGUoeyBmb3JtUmVmLCBpZDogbXV0YXRpb25JZCB9KTtcblx0XHRcdH19PlxuXHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPXtpbnB1dFR5cGV9PlxuXHRcdFx0XHR7dGl0bGV9XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdFx0PFRleHRhcmVhQXV0b3NpemVcblx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBmb3JtLWNvbnRyb2wtLXRleHRcIlxuXHRcdFx0XHRpZD17aW5wdXRUeXBlfVxuXHRcdFx0XHRuYW1lPXtpbnB1dFR5cGV9XG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxuXHRcdFx0XHRvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0VmFsdWUodmFsdWUpfVxuXHRcdFx0XHRyZWY9e2lucHV0UmVmfVxuXHRcdFx0Lz5cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0dGl0bGU9XCJTYXZlXCJcblx0XHRcdFx0ZXh0ZW5zaW9uQ2xhc3Nlcz1cIm10LTQgdy01MCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcblx0XHRcdFx0aXNMb2FkaW5nPXtlZGl0TXV0YXRpb24uaXNMb2FkaW5nfVxuXHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdC8+XG5cdFx0PC9mb3JtPlxuXHQpO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBFZGl0YWJsZSB9IGZyb20gJy4vRWRpdGFibGUnO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbi8qIFJvdXRlcyAqL1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8aGVhZGVyIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBweC01IHB0LTUgcHgtbGctNiBwdC1sZy02IHB4LXhsLTEyIHB0LXhsLTEyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJfX2xvZ28gbG9nb1wiPlxuXHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT1cImxvZ29fX2xpbmsgdGV4dC1yZXNldFwiIHRvPXtST1VURVMubG9naW59IHRpdGxlPVwiUGFyYWxsZWwgRGFzaGJvYXJkXCI+XG5cdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwibG9nb19fdGl0bGUgdGV4dC11cHBlcmNhc2UgbWItMFwiPlBhcmFsbGVsPC9oMj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvZ29fX3N1YnRpdGxlIHRleHQtdXBwZXJjYXNlIGZvbnQtd2VpZ2h0LWxpZ2h0IG10LW4xXCI+RGFzaGJvYXJkPC9wPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2hlYWRlcj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJy4uLy4uL2FwaS9zZWN1cml0eSc7XG5cbi8qIFJvdXRlcyAqL1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICcuLi8nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJOYXZpZ2F0aW9uKCkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBsb2dvdXRNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGxvZ291dCwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0aGlzdG9yeS5wdXNoKFJPVVRFUy5sb2dpbik7XG5cdFx0XHR0b2FzdCg8QWxlcnQgbWVzc2FnZT17J1N1Y2Nlc3NmdWxseSBsb2dnZWQgb3V0ISd9IGFwcGVhcmFuY2U9XCJzdWNjZXNzXCIgLz4pO1xuXHRcdH0sXG5cdFx0b25FcnJvcjogKCkgPT4gdG9hc3QoPEFsZXJ0IG1lc3NhZ2U9eydTb21ldGhpbmcgd2VudCB3cm9uZyEnfSBhcHBlYXJhbmNlPVwiZXJyb3JcIiAvPiksXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxoZWFkZXIgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXIgbWFpbi1oZWFkZXItLXByb2plY3RzXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4taGVhZGVyX193cmFwcGVyIGQtZmxleCBhbGlnbi1pdGVtcy1lbmRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4taGVhZGVyX19sb2dvIGxvZ29cIj5cblx0XHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT1cImxvZ29fX2xpbmsgdGV4dC1yZXNldFwiIHRvPXtST1VURVMucHJvamVjdHN9IHRpdGxlPVwiUGFyYWxsZWwgRGFzaGJvYXJkXCI+XG5cdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJsb2dvX190aXRsZSB0ZXh0LXVwcGVyY2FzZSB0ZXh0LXdoaXRlIG1iLTBcIj5QYXJhbGxlbDwvaDI+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvZ29fX3N1YnRpdGxlIHRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGUgZm9udC13ZWlnaHQtbGlnaHQgbXQtbjFcIj5cblx0XHRcdFx0XHRcdFx0XHREYXNoYm9hcmRcblx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJfX25hdiBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi0tcHJpbWFyeVwiPlxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmPVwie3sgcGF0aCgnYXBwX2xvZ291dCcpIH19XCJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPVwiTG9nb3V0XCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5hdi1saW5rIGJ0biBidG4tbGluayB0ZXh0LXJlc2V0XCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGxvZ291dE11dGF0aW9uLm11dGF0ZSgpfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5hdi10ZXh0XCI+TG9nb3V0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2hlYWRlcj5cblx0KTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXIvSGVhZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhZGVyTmF2aWdhdGlvbiB9IGZyb20gJy4vaGVhZGVyL0hlYWRlck5hdmlnYXRpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBbGVydCB9IGZyb20gJy4vYWxlcnQvQWxlcnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYWNrZ3JvdW5kIH0gZnJvbSAnLi9iYWNrZ3JvdW5kL0JhY2tncm91bmQnO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXJBZGQgfSBmcm9tICcuLi91c2VyLWFkZCc7XG5pbXBvcnQgeyBVc2VycyB9IGZyb20gJy4uL3VzZXJzJztcbmltcG9ydCB7IEVkaXRhYmxlIH0gZnJvbSAnLi4vZWRpdGFibGUnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgc3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBlZGl0UHJvamVjdCwgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWxIZWFkZXIoeyB0aXRsZSwgZGVzY3JpcHRpb24sIHVzZXJzLCBpZCwgYXV0aG9yLCBlbWFpbCB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCBwcm9qZWN0ID0geyBpZCwgYXV0aG9yLCBlbWFpbCB9O1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoc3RhdGljQ29udGV4dCk7XG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgbXV0YXRpb25PblN1Y2Nlc3MgPSAoKSA9PiB7XG5cdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgaWRdKTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi02XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctNlwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7dXNlclJvbGUgPT09ICdhZG1pbicgJiYgJ2VkaXRhYmxlJ30gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yYH0+XG5cdFx0XHRcdFx0PEVkaXRhYmxlXG5cdFx0XHRcdFx0XHRpbnB1dFR5cGU9XCJ0aXRsZVwiXG5cdFx0XHRcdFx0XHRjb250ZW50PXt0aXRsZX1cblx0XHRcdFx0XHRcdG11dGF0aW9uPXtlZGl0UHJvamVjdH1cblx0XHRcdFx0XHRcdG11dGF0aW9uSWQ9e2lkfVxuXHRcdFx0XHRcdFx0bXV0YXRpb25PblN1Y2Nlc3M9e211dGF0aW9uT25TdWNjZXNzfT5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJoNSBtYi0wIHRleHQtd2hpdGVcIj57dGl0bGUgPyB0aXRsZSA6ICdBZGQgYSBuaWNlIHRpdGxlJ308L2gxPlxuXHRcdFx0XHRcdDwvRWRpdGFibGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7dXNlclJvbGUgPT09ICdhZG1pbicgJiYgJ2VkaXRhYmxlJ30gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yYH0+XG5cdFx0XHRcdFx0PEVkaXRhYmxlXG5cdFx0XHRcdFx0XHRpbnB1dFR5cGU9XCJkZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0XHRjb250ZW50PXtkZXNjcmlwdGlvbn1cblx0XHRcdFx0XHRcdG11dGF0aW9uPXtlZGl0UHJvamVjdH1cblx0XHRcdFx0XHRcdG11dGF0aW9uSWQ9e2lkfVxuXHRcdFx0XHRcdFx0bXV0YXRpb25PblN1Y2Nlc3M9e211dGF0aW9uT25TdWNjZXNzfT5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTcwIG1iLTBcIj5cblx0XHRcdFx0XHRcdFx0e2Rlc2NyaXB0aW9uID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPntkZXNjcmlwdGlvbn08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtcIldoYXQncyB0aGlzIHByb2plY3QgYWJvdXQ/IFNldCB0aGUgY29udGV4dCwgdGhlIGdvYWxzLCB0aGUgY29uc3RyYWludHNcIn1cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9FZGl0YWJsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gZC1mbGV4IGFsaWduLWl0ZW1zLWJhc2VsaW5lIG1sLWF1dG9cIj5cblx0XHRcdFx0PFVzZXJzIHsuLi57IHVzZXJzLCBwcm9qZWN0IH19IHNpemU9XCJsZ1wiIC8+XG5cdFx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiA8VXNlckFkZCB7Li4ueyB1c2VycywgcHJvamVjdCB9fSAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBFZGl0YWJsZSB9IGZyb20gJy4uL2VkaXRhYmxlJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2hlY2tJY29uIGZyb20gJ2ljb25zL2NoZWNrLnN2Zyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4gfSBmcm9tICcuLi8uLi9jb21tb24vYW5pbWF0aW9ucyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZWRpdFByb2plY3RJbWFnZSwgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWxJbWFnZSh7IHByb2plY3RJbWFnZSwgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyBpZDogcHJvamVjdEltYWdlSWQsIHRpdGxlLCBwaGFzZXMgPSBbXSB9ID0gcHJvamVjdEltYWdlO1xuXHRjb25zdCB7IGltYWdlIH0gPSBwaGFzZXNbcGhhc2VzLmxlbmd0aCAtIDFdIHx8IHt9O1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgbXV0YXRpb25PblN1Y2Nlc3MgPSAoKSA9PiB7XG5cdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGFydGljbGUgY2xhc3NOYW1lPXtgY2FyZCBjYXJkLS1saW5rIGNhcmQtLXByb2R1Y3QgJHtzZWxlY3RlZC5pbmNsdWRlcyhwcm9qZWN0SW1hZ2VJZCkgJiYgJ2lzLXNlbGVjdGVkJ31gfT5cblx0XHRcdDxMaW5rIHRvPXtgL3Byb2plY3RzLyR7cHJvamVjdElkfS9yZXZpZXcvJHtwcm9qZWN0SW1hZ2VJZH0ke2xvY2F0aW9uLnNlYXJjaH1gfSB0aXRsZT17dGl0bGV9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ltYWdlIGJvcmRlciBtLTJcIj5cblx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz17aW1hZ2V9IHNyY1NldD17YCR7aW1hZ2V9IDJ4YH0gYWx0PXt0aXRsZX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0xpbms+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuXHRcdFx0XHQ8RWRpdGFibGVcblx0XHRcdFx0XHRpbnB1dFR5cGU9XCJ0aXRsZVwiXG5cdFx0XHRcdFx0cHJvamVjdElkPXtwcm9qZWN0SWR9XG5cdFx0XHRcdFx0Y29udGVudD17dGl0bGV9XG5cdFx0XHRcdFx0bXV0YXRpb249e2VkaXRQcm9qZWN0SW1hZ2V9XG5cdFx0XHRcdFx0bXV0YXRpb25JZD17cHJvamVjdEltYWdlSWR9XG5cdFx0XHRcdFx0ey4uLnsgbXV0YXRpb25PblN1Y2Nlc3MgfX0+XG5cdFx0XHRcdFx0PG1vdGlvbi5wIHsuLi5GQURFX0lOfSBjbGFzc05hbWU9XCJtYi0wXCI+XG5cdFx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdFx0PC9tb3Rpb24ucD5cblx0XHRcdFx0PC9FZGl0YWJsZT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX19zZWxlY3RcIj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC10b2dnbGVcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHVwZGF0ZVNlbGVjdGVkKHByb2plY3RJbWFnZUlkKTtcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC1pY29uIGljb24gaWNvbi0tOFwiIHNyYz17Y2hlY2tJY29ufSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvYXJ0aWNsZT5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU1RBR0dFUl9VUCB9IGZyb20gJy4uLy4uL2NvbW1vbi9hbmltYXRpb25zJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IFByb2plY3REZXRhaWxJbWFnZSBmcm9tICcuL1Byb2plY3REZXRhaWxJbWFnZSc7XG5pbXBvcnQgeyBBY3Rpb25NZW51IH0gZnJvbSAnLi4vYWN0aW9uLW1lbnUnO1xuaW1wb3J0IHsgRHJvcHpvbmUgfSBmcm9tICcuLi8uLi9jb21tb24nO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGRlbGV0ZVByb2plY3RJbWFnZXMsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdERldGFpbEltYWdlcyh7IHByb2plY3RJbWFnZXMsIHByb2plY3RJZCB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkLCByZXNldFNlbGVjdGVkIH0gPSB1c2VTZWxlY3Rpb24oKTtcblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXHRjb25zdCB7IHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVQcm9qZWN0SW1hZ2VzLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKTtcblx0XHRcdHJlc2V0U2VsZWN0ZWQoKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgYWN0aW9ucyA9IFtcblx0XHR7XG5cdFx0XHR0aXRsZTogJ1JlbW92ZScsXG5cdFx0XHR0aGVtZTogJ2RhbmdlcicsXG5cdFx0XHRoYXNQZXJtaXNzaW9uOiBbJ2FkbWluJ10sXG5cdFx0XHRpY29uOiBkZWxldGVJY29uLFxuXHRcdFx0aWNvblNpemU6IDEwLFxuXHRcdFx0bXV0YXRpb246ICgpID0+IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZUlkczogc2VsZWN0ZWQgfSksXG5cdFx0XHRpc0xvYWRpbmc6IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbi5pc0xvYWRpbmcsXG5cdFx0fSxcblx0XTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAnaGFzLXNlbGVjdGlvbnMnfWB9PlxuXHRcdFx0XHR7dXNlclJvbGUgPT09ICdhZG1pbicgPyAoXG5cdFx0XHRcdFx0PERyb3B6b25lIHsuLi57IHByb2plY3RJZCwgcHJvamVjdEltYWdlcywgcG9zaXRpdGlvbjogJ3JpZ2h0JyB9fT5cblx0XHRcdFx0XHRcdHsoKSA9PiA8SW1hZ2VzIHsuLi57IHByb2plY3RJbWFnZXMsIHByb2plY3RJZCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH19IC8+fVxuXHRcdFx0XHRcdDwvRHJvcHpvbmU+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy01XCI+XG5cdFx0XHRcdFx0XHQ8SW1hZ2VzIHsuLi57IHByb2plY3RJbWFnZXMsIHByb2plY3RJZCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH19IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHtzZWxlY3RlZC5sZW5ndGggPiAwICYmIDxBY3Rpb25NZW51IHsuLi57IHNlbGVjdGVkLCByZXNldFNlbGVjdGVkLCBhY3Rpb25zIH19IC8+fVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmNvbnN0IEltYWdlcyA9ICh7IHByb2plY3RJbWFnZXMsIHByb2plY3RJZCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0e3Byb2plY3RJbWFnZXMubWFwKChwcm9qZWN0SW1hZ2UsIHByb2plY3RJbWFnZUluZGV4KSA9PiAoXG5cdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0ey4uLlNUQUdHRVJfVVAocHJvamVjdEltYWdlSW5kZXgpfVxuXHRcdFx0XHRcdGtleT17cHJvamVjdEltYWdlLmlkfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtMyBjb2wteHhsLTJcIlxuXHRcdFx0XHRcdGxheW91dD5cblx0XHRcdFx0XHQ8UHJvamVjdERldGFpbEltYWdlIHsuLi57IHByb2plY3RJbWFnZSwgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfX0gLz5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0KSl9XG5cdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG59O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0RGV0YWlsSGVhZGVyIH0gZnJvbSAnLi9Qcm9qZWN0RGV0YWlsSGVhZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdERldGFpbEltYWdlcyB9IGZyb20gJy4vUHJvamVjdERldGFpbEltYWdlcyc7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUHJvamVjdEltYWdlIH0gZnJvbSAnLi8nO1xuaW1wb3J0IHsgVXNlcnMgfSBmcm9tICcuLi91c2Vycyc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNoZWNrSWNvbiBmcm9tICdpY29ucy9jaGVjay5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KHsgcHJvamVjdCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgdGl0bGUsIHByb2plY3RJbWFnZXMsIHVzZXJzLCBhdXRob3IsIGlkIH0gPSBwcm9qZWN0O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxMaW5rXG5cdFx0XHR0bz17YHByb2plY3RzLyR7aWR9JHtsb2NhdGlvbi5zZWFyY2h9YH1cblx0XHRcdHRpdGxlPXt0aXRsZX1cblx0XHRcdGNsYXNzTmFtZT17YGNhcmQgY2FyZC0tbGluayBjYXJkLS1wcm9kdWN0ICR7c2VsZWN0ZWQuaW5jbHVkZXMoaWQpICYmICdpcy1zZWxlY3RlZCd9YH0+XG5cdFx0XHQ8UHJvamVjdEltYWdlIHsuLi57IHByb2plY3RJbWFnZXMgfX0gLz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItMlwiPnt0aXRsZSA/IHRpdGxlIDogJ0FkZCBhIG5pY2UgdGl0bGUnfTwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdDogeyBhdXRob3IgfSwgbGF5b3V0OiAnbWluaW1hbCcgfX0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fc2VsZWN0XCI+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXJkX19zZWxlY3QtdG9nZ2xlXCJcblx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHR1cGRhdGVTZWxlY3RlZChpZCk7XG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJjYXJkX19zZWxlY3QtaWNvbiBpY29uIGljb24tLThcIiBzcmM9e2NoZWNrSWNvbn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0xpbms+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5LCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUHJvamVjdE1vZGFsIH0gZnJvbSAnLi8nO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRQcm9qZWN0SWNvbiBmcm9tICdpY29ucy9hZGRfcHJvamVjdC5zdmcnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGFkZFByb2plY3QsIFFVRVJZX0tFWVMsIGVkaXRQcm9qZWN0LCBmZXRjaFByb2plY3RCeUlkIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU0NBTEVfRkFERSB9IGZyb20gJy4uLy4uL2NvbW1vbi9hbmltYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdEFkZCh7IHNldE5ld1Byb2plY3RJZCB9KSB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtwcm9qZWN0SWQsIHNldFByb2plY3RJZF0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGRhdGE6IHByb2plY3QgfSA9IHVzZVF1ZXJ5KFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0sICgpID0+IGZldGNoUHJvamVjdEJ5SWQoeyBwcm9qZWN0SWQgfSksIHtcblx0XHRlbmFibGVkOiAhIXByb2plY3RJZCxcblx0fSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXROZXdQcm9qZWN0SWQocHJvamVjdElkKTtcblx0fSwgW3Byb2plY3RJZF0pO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBhZGRNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZFByb2plY3QsIHtcblx0XHRvblN1Y2Nlc3M6ICh7IGlkIH0pID0+IHNldFByb2plY3RJZChpZCksXG5cdH0pO1xuXG5cdGNvbnN0IGVkaXRNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGVkaXRQcm9qZWN0LCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiBpbnZhbGlkYXRlUHJvamVjdCgpLFxuXHR9KTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG5cdFx0c2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pO1xuXG5cdFx0LyogTXV0YXRlIG9uIG1vZGFsIG9wZW4gKi9cblx0XHRpZiAoIW1vZGFsT3BlbikgYWRkTXV0YXRpb24ubXV0YXRlKCk7XG5cblx0XHQvKiBSZXNldCBpZCBvbiBjbG9zZSBtb2RhbCAqL1xuXHRcdGlmIChtb2RhbE9wZW4pIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRzZXRQcm9qZWN0SWQobnVsbCk7XG5cdFx0XHR9LCAyNTApO1xuXG5cdFx0XHRpbnZhbGlkYXRlUHJvamVjdCgpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCB1cGRhdGVQcm9qZWN0ID0gKGZvcm1SZWYpID0+IGVkaXRNdXRhdGlvbi5tdXRhdGUoeyBmb3JtUmVmLCBpZDogcHJvamVjdElkIH0pO1xuXHRjb25zdCBpbnZhbGlkYXRlUHJvamVjdCA9ICgpID0+IHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuUFJPSkVDVF9CWV9VU0VSKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PG1vdGlvbi5idXR0b25cblx0XHRcdFx0ey4uLlNDQUxFX0ZBREV9XG5cdFx0XHRcdGtleT1cImFkZC1wcm9qZWN0XCJcblx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdGNsYXNzTmFtZT1cImljb24td3JhcHBlciBpY29uLXdyYXBwZXItLWludGVyYWN0aXZlIGljb24td3JhcHBlci0tc2Vjb25kYXJ5IGJ0biBidG4tbGluayBidG4tLWFkZCBidG4tLWFkZC1yaWdodFwiXG5cdFx0XHRcdHN0eWxlPXt7ICctLXNpemUnOiA3NSB9fVxuXHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVNb2RhbH0+XG5cdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0zMCB0ZXh0LXNlY29uZGFyeVwiIHNyYz17YWRkUHJvamVjdEljb259IC8+XG5cdFx0XHQ8L21vdGlvbi5idXR0b24+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7bW9kYWxPcGVuICYmIDxQcm9qZWN0TW9kYWwgey4uLnsgcHJvamVjdCwgdXBkYXRlUHJvamVjdCwgdG9nZ2xlTW9kYWwgfX0gLz59XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRJbWFnZUljb24gZnJvbSAnaWNvbnMvYWRkX2ltYWdlLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RJbWFnZSh7IHByb2plY3RJbWFnZXMgfSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyBwaGFzZXMgPSBbXSwgdGl0bGUgfSA9IHByb2plY3RJbWFnZXNbMF0gfHwge307XG5cdGNvbnN0IHsgaW1hZ2UgfSA9IHBoYXNlc1twaGFzZXMubGVuZ3RoIC0gMV0gfHwge307XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX19pbWFnZSBib3JkZXIgbS0yXCI+XG5cdFx0XHR7aW1hZ2UgJiYgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e2ltYWdlfSBzcmNTZXQ9e2Ake2ltYWdlfSAyeGB9IGFsdD17dGl0bGV9IC8+fVxuXHRcdFx0eyFpbWFnZSAmJiA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tNDggdGV4dC1tdXRlZC0tNDBcIiBzcmM9e2FkZEltYWdlSWNvbn0gLz59XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRhcmVhQXV0b3NpemUnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gJ2ljb25zL2Nsb3NlLnN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IE1vZGFsLCBEcm9wem9uZSwgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuLi8uLi9jb21tb24nO1xuaW1wb3J0IHsgVXNlcnMgfSBmcm9tICcuLi91c2Vycyc7XG5pbXBvcnQgeyBVc2VyQWRkIH0gZnJvbSAnLi4vdXNlci1hZGQnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTVEFHR0VSX1VQIH0gZnJvbSAnLi4vLi4vY29tbW9uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0TW9kYWwoeyBwcm9qZWN0ID0ge30sIHVwZGF0ZVByb2plY3QsIHRvZ2dsZU1vZGFsIH0pIHtcblx0LyogQ29uc3RhbnRzICAqL1xuXHRjb25zdCB7IGlkOiBwcm9qZWN0SWQgPSBudWxsLCB0aXRsZSA9ICcnLCBwcm9qZWN0SW1hZ2VzID0gW10sIHVzZXJzID0gW10gfSA9IHByb2plY3Q7XG5cblx0LyogUmVmcyAqL1xuXHRjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsIHsuLi57IHRvZ2dsZU1vZGFsIH19IGRvbUVsZW1lbnQ9e2RvY3VtZW50LmJvZHl9PlxuXHRcdFx0PGZvcm1cblx0XHRcdFx0cmVmPXtmb3JtUmVmfVxuXHRcdFx0XHRtZXRob2Q9XCJQT1NUXCJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19mb3JtXCJcblx0XHRcdFx0b25TdWJtaXQ9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dG9nZ2xlTW9kYWwoKTtcblx0XHRcdFx0fX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19oZWFkZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBwdC02IHB0LW1kLTEyIHBiLTNcIj5cblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJwcm9qZWN0VGl0bGVcIj5cblx0XHRcdFx0XHRcdHt0aXRsZX1cblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC0tY2xlYXIgdGV4dC0teGxcIlxuXHRcdFx0XHRcdFx0aWQ9XCJwcm9qZWN0VGl0bGVcIlxuXHRcdFx0XHRcdFx0bmFtZT1cInRpdGxlXCJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiVGhlIHByb2plY3QgbmFtZVwiXG5cdFx0XHRcdFx0XHRvbkJsdXI9eygpID0+IHVwZGF0ZVByb2plY3QoZm9ybVJlZil9XG5cdFx0XHRcdFx0XHRhdXRvRm9jdXNcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19jbG9zZSBidG4gYnRuLWxpbmsgbWwtYXV0b1wiXG5cdFx0XHRcdFx0XHRkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17dG9nZ2xlTW9kYWx9XG5cdFx0XHRcdFx0XHR0YWJJbmRleD1cIi0xXCI+XG5cdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTRcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19ib2R5IHB0LTMgcGItMTJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicHJvamVjdERlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0e2BXaGF0J3MgdGhpcyBwcm9qZWN0IGFib3V0P2B9XG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxUZXh0YXJlYUF1dG9zaXplXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC0tdGV4dCBmb3JtLWNvbnRyb2wtLWNsZWFyIG1iLTEwXCJcblx0XHRcdFx0XHRcdFx0XHRpZD1cInByb2plY3REZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRlc2NyaXB0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIldoYXQncyB0aGlzIHByb2plY3QgYWJvdXQ/XCJcblx0XHRcdFx0XHRcdFx0XHRvbkJsdXI9eygpID0+IHVwZGF0ZVByb2plY3QoZm9ybVJlZil9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gZC1mbGV4IGFsaWduLWl0ZW1zLWJhc2VsaW5lIG1sLWF1dG9cIj5cblx0XHRcdFx0XHRcdFx0PFVzZXJzIHsuLi57IHVzZXJzLCBwcm9qZWN0IH19IHNpemU9XCJsZ1wiIC8+XG5cdFx0XHRcdFx0XHRcdDxVc2VyQWRkIHsuLi57IHVzZXJzLCBwcm9qZWN0IH19IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8RHJvcHpvbmUgey4uLnsgcHJvamVjdElkLCBwcm9qZWN0SW1hZ2VzIH19PlxuXHRcdFx0XHRcdFx0eyh7IHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzTG9hZGluZyB9KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdFx0XHRcdFx0e3Byb2plY3RJbWFnZXMubWFwKChwcm9qZWN0SW1hZ2UsIHByb2plY3RJbWFnZUluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8RHJvcHpvbmVJbWFnZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e3Byb2plY3RJbWFnZS5pZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLnsgcHJvamVjdEltYWdlLCBwcm9qZWN0SW1hZ2VJbmRleCwgdXBkYXRlUHJvamVjdEltYWdlcywgaXNMb2FkaW5nIH19XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9Ecm9wem9uZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19mb290ZXIgcGItNiBwYi1tZC0xMlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtMCB3LTEwMFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTEgbWwtYXV0b1wiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19idG4gYnRuIGJ0bi1ibG9jayBidG4tc2Vjb25kYXJ5IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxtb3Rpb24uc3BhbiBjbGFzc05hbWU9XCJidG4tdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+U2F2ZTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L21vdGlvbi5zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L01vZGFsPlxuXHQpO1xufVxuXG5jb25zdCBEcm9wem9uZUltYWdlID0gKHsgcHJvamVjdEltYWdlLCBwcm9qZWN0SW1hZ2VJbmRleCwgdXBkYXRlUHJvamVjdEltYWdlcywgaXNMb2FkaW5nIH0pID0+IHtcblx0Y29uc3QgeyB0aXRsZSwgaWQsIHBoYXNlcyA9IFtdIH0gPSBwcm9qZWN0SW1hZ2U7XG5cdGNvbnN0IHsgaW1hZ2UgfSA9IHBoYXNlc1twaGFzZXMubGVuZ3RoIC0gMV0gfHwge307XG5cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0bGF5b3V0XG5cdFx0XHR7Li4uU1RBR0dFUl9VUChwcm9qZWN0SW1hZ2VJbmRleCl9XG5cdFx0XHRjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXhsLTMgY29sLXh4bC0yXCJcblx0XHRcdGtleT17aWR9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZV9fY29udGFpbmVyXCI+XG5cdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiZHJvcHpvbmVfX2ltYWdlIGltZy1mbHVpZFwiIHNyYz17aW1hZ2V9IGFsdD17dGl0bGV9IC8+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgZHJvcHpvbmVfX2ltYWdlLWRlbGV0ZSBwLTBcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHR1cGRhdGVQcm9qZWN0SW1hZ2VzKCdkZWxldGUnLCB7IHByb2plY3RJbWFnZUlkczogW2lkXSB9KTtcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJkcm9wem9uZV9faW1hZ2UtZGVsZXRlLWljb24gaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0tZGFuZ2VyIG14LWF1dG9cIlxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgJy0tc2l6ZSc6IDUwIH19PlxuXHRcdFx0XHRcdFx0PExvYWRpbmdXcmFwcGVyXG5cdFx0XHRcdFx0XHRcdGxvYWRpbmc9e2lzTG9hZGluZ31cblx0XHRcdFx0XHRcdFx0bG9hZGVyU2l6ZT17MjB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzZXM9e3tcblx0XHRcdFx0XHRcdFx0XHRsb2FkZXJDbGFzc2VzOiAncG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4IHRleHQtZGFuZ2VyJyxcblx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNCB0ZXh0LWRhbmdlciBtdC0wXCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0XHQ8L0xvYWRpbmdXcmFwcGVyPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbW90aW9uLmRpdj5cblx0KTtcbn07XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi8nO1xuaW1wb3J0IHsgQWN0aW9uTWVudSB9IGZyb20gJy4uL2FjdGlvbi1tZW51JztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiwgU1RBR0dFUl9VUCB9IGZyb20gJy4uLy4uL2NvbW1vbi9hbmltYXRpb25zJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gJ2ljb25zL2Nsb3NlLnN2Zyc7XG5pbXBvcnQgbGVhdmVJY29uIGZyb20gJ2ljb25zL2xlYXZlLnN2Zyc7XG5pbXBvcnQgYXJjaGl2ZUljb24gZnJvbSAnaWNvbnMvYXJjaGl2ZS5zdmcnO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGRlbGV0ZVByb2plY3RzLCBsZWF2ZVByb2plY3RzLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXN1bHRzKHsgcHJvamVjdHMsIG5ld1Byb2plY3RJZCB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkLCByZXNldFNlbGVjdGVkIH0gPSB1c2VTZWxlY3Rpb24oKTtcblx0Y29uc3QgeyBjdXJyZW50VXNlciB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBsZWF2ZVByb2plY3RzTXV0YXRpb24gPSB1c2VNdXRhdGlvbihsZWF2ZVByb2plY3RzLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLlBST0pFQ1RfQllfVVNFUik7XG5cdFx0XHRyZXNldFNlbGVjdGVkKCk7XG5cdFx0fSxcblx0fSk7XG5cblx0Y29uc3QgZGVsZXRlUHJvamVjdHNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGRlbGV0ZVByb2plY3RzLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLlBST0pFQ1RfQllfVVNFUik7XG5cdFx0XHRyZXNldFNlbGVjdGVkKCk7XG5cdFx0fSxcblx0fSk7XG5cblx0Y29uc3QgYWN0aW9ucyA9IFtcblx0XHR7XG5cdFx0XHR0aXRsZTogJ0xlYXZlJyxcblx0XHRcdHRoZW1lOiAnd2FybmluZycsXG5cdFx0XHRoYXNQZXJtaXNzaW9uOiBbJ3VzZXInLCAnYmFzaWMnXSxcblx0XHRcdGljb246IGxlYXZlSWNvbixcblx0XHRcdG11dGF0aW9uOiAoKSA9PiBsZWF2ZVByb2plY3RzTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkczogc2VsZWN0ZWQsIHVzZXJJZDogY3VycmVudFVzZXIuaWQgfSksXG5cdFx0XHRpc0xvYWRpbmc6IGxlYXZlUHJvamVjdHNNdXRhdGlvbi5pc0xvYWRpbmcsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0aXRsZTogJ0FyY2hpdmUnLFxuXHRcdFx0dGhlbWU6ICdzZWNvbmRhcnknLFxuXHRcdFx0aGFzUGVybWlzc2lvbjogWydhZG1pbiddLFxuXHRcdFx0aWNvbjogYXJjaGl2ZUljb24sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0aXRsZTogJ1JlbW92ZScsXG5cdFx0XHR0aGVtZTogJ2RhbmdlcicsXG5cdFx0XHRoYXNQZXJtaXNzaW9uOiBbJ2FkbWluJ10sXG5cdFx0XHRpY29uOiBjbG9zZUljb24sXG5cdFx0XHRpY29uU2l6ZTogMTAsXG5cdFx0XHRtdXRhdGlvbjogKCkgPT4gZGVsZXRlUHJvamVjdHNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWRzOiBzZWxlY3RlZCB9KSxcblx0XHRcdGlzTG9hZGluZzogZGVsZXRlUHJvamVjdHNNdXRhdGlvbi5pc0xvYWRpbmcsXG5cdFx0fSxcblx0XTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGgxIGNsYXNzTmFtZT1cImg1IHRleHQtd2hpdGUgbWItNlwiPllvdXIgcHJvamVjdHM8L2gxPlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e3Byb2plY3RzLmxlbmd0aCA9PT0gMCAmJiAoXG5cdFx0XHRcdFx0PG1vdGlvbi5wIHsuLi5GQURFX0lOfSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG1iLTAgcG9zaXRpb24tYWJzb2x1dGVcIj5cblx0XHRcdFx0XHRcdHtgWW91IGRvbid0IGhhdmUgYW55IHByb2plY3RzIHlldGB9XG5cdFx0XHRcdFx0PC9tb3Rpb24ucD5cblx0XHRcdFx0KX1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Byb3cgcm93LS1lcXVhbGl6ZWQgZ3V0dGVycy01ICR7c2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAnaGFzLXNlbGVjdGlvbnMnfWB9PlxuXHRcdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHRcdHtwcm9qZWN0c1xuXHRcdFx0XHRcdFx0LmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCAhPT0gbmV3UHJvamVjdElkKVxuXHRcdFx0XHRcdFx0Lm1hcCgocHJvamVjdCwgcHJvamVjdEluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0XHRcdFx0ey4uLlNUQUdHRVJfVVAocHJvamVjdEluZGV4KX1cblx0XHRcdFx0XHRcdFx0XHRrZXk9e3Byb2plY3QuaWR9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC14bC0zIGNvbC14eGwtMlwiXG5cdFx0XHRcdFx0XHRcdFx0bGF5b3V0PlxuXHRcdFx0XHRcdFx0XHRcdDxQcm9qZWN0IHsuLi57IHByb2plY3QsIHNlbGVjdGVkLCB1cGRhdGVTZWxlY3RlZCB9fSAvPlxuXHRcdFx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHtzZWxlY3RlZC5sZW5ndGggPiAwICYmIDxBY3Rpb25NZW51IHsuLi57IHNlbGVjdGVkLCByZXNldFNlbGVjdGVkLCBhY3Rpb25zIH19IC8+fVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3QgfSBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RBZGQgfSBmcm9tIFwiLi9Qcm9qZWN0QWRkXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RJbWFnZSB9IGZyb20gXCIuL1Byb2plY3RJbWFnZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0TW9kYWwgfSBmcm9tIFwiLi9Qcm9qZWN0TW9kYWxcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdFJlc3VsdHMgfSBmcm9tIFwiLi9Qcm9qZWN0UmVzdWx0c1wiO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBQcm9qZWN0UmV2aWV3TWFya2VyIGZyb20gJy4vUHJvamVjdFJldmlld01hcmtlcic7XG5pbXBvcnQgUHJvamVjdFJldmlld0NvbW1lbnQgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3Q29tbWVudCc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudEJveCBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50Qm94JztcblxuLyogR2xvYmFsICovXG5jb25zdCBjdXJzb3JPZmZzZXQgPSAxMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0NhbnZhcyh7IHRpdGxlLCBwaGFzZXMgPSBbXSwgcHJvamVjdEltYWdlSWQgfSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyBpbWFnZSwgaWQ6IHBoYXNlSWQsIGNvbW1lbnRzIH0gPSBwaGFzZXNbcGhhc2VzLmxlbmd0aCAtIDFdIHx8IHt9O1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgcmV2aWV3UmVmID0gdXNlUmVmKCk7XG5cblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW21hcmtlclBvcywgc2V0TWFya2VyUG9zXSA9IHVzZVN0YXRlKCk7XG5cdGNvbnN0IFtib3hPcGVuLCBzZXRCb3hPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlQm94ID0gKCkgPT4ge1xuXHRcdHNldEJveE9wZW4oIWJveE9wZW4pO1xuXHRcdHNldE1hcmtlclBvcyhudWxsKTtcblx0fTtcblxuXHRjb25zdCBwb3NNYXJrZXIgPSAoeyBjbGllbnRYLCBjbGllbnRZIH0pID0+IHtcblx0XHRjb25zdCByZXZpZXdQb3MgPSByZXZpZXdSZWY/LmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHRzZXRNYXJrZXJQb3MoKCkgPT4ge1xuXHRcdFx0Y29uc3QgeFBlcmNlbnQgPSAoKGNsaWVudFggLSBjdXJzb3JPZmZzZXQpIC8gcmV2aWV3UG9zLndpZHRoKSAqIDEwMDtcblx0XHRcdGNvbnN0IHlQZXJjZW50ID0gKChjbGllbnRZIC0gcmV2aWV3UG9zLnRvcCAtIGN1cnNvck9mZnNldCkgLyByZXZpZXdQb3MuaGVpZ2h0KSAqIDEwMDtcblxuXHRcdFx0cmV0dXJuIHsgeFBlcmNlbnQsIHlQZXJjZW50LCByZXZpZXdQb3MgfTtcblx0XHR9KTtcblxuXHRcdHNldEJveE9wZW4odHJ1ZSk7XG5cdH07XG5cblx0LyogcmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiByZWY9e3Jldmlld1JlZn0gY2xhc3NOYW1lPVwicmV2aWV3IHBvc2l0aW9uLXJlbGF0aXZlIG14LW4xMiBtYi1uMTIgbXQtMTJcIj5cblx0XHRcdDxpbWdcblx0XHRcdFx0Y2xhc3NOYW1lPVwicmV2aWV3X19pbWFnZSBpbWctZmx1aWQgdy0xMDBcIlxuXHRcdFx0XHRzcmM9e2ltYWdlfVxuXHRcdFx0XHRzcmNTZXQ9e2Ake2ltYWdlfSAyeGB9XG5cdFx0XHRcdGFsdD17dGl0bGV9XG5cdFx0XHRcdG9uQ2xpY2s9e3Bvc01hcmtlcn1cblx0XHRcdC8+XG5cdFx0XHR7Y29tbWVudHMubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRjb21tZW50cy5tYXAoKGNvbW1lbnQsIGNvbW1lbnRJbmRleCkgPT4gKFxuXHRcdFx0XHRcdDxQcm9qZWN0UmV2aWV3Q29tbWVudCBrZXk9e2NvbW1lbnRJbmRleH0gey4uLnsgLi4uY29tbWVudCwgY29tbWVudEluZGV4LCByZXZpZXdSZWYgfX0gLz5cblx0XHRcdFx0KSl9XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7bWFya2VyUG9zICYmIChcblx0XHRcdFx0XHQ8UHJvamVjdFJldmlld01hcmtlciB7Li4ueyAuLi5tYXJrZXJQb3MgfX0+XG5cdFx0XHRcdFx0XHQ8UHJvamVjdFJldmlld0NvbW1lbnRCb3ggey4uLnsgbWFya2VyUG9zLCBib3hPcGVuLCB0b2dnbGVCb3gsIHBoYXNlSWQsIHByb2plY3RJbWFnZUlkIH19IC8+XG5cdFx0XHRcdFx0PC9Qcm9qZWN0UmV2aWV3TWFya2VyPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vY29tbW9uJztcbmltcG9ydCBQcm9qZWN0UmV2aWV3TWFya2VyIGZyb20gJy4vUHJvamVjdFJldmlld01hcmtlcic7XG5cbi8qIEhlbHBlcnMgKi9cbmltcG9ydCB7IGNhbGNCb3hQb3MgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0NvbW1lbnQoeyBhdXRob3IsIGNvbW1lbnQsIHBvc2l0aW9uLCBjb21tZW50SW5kZXgsIHJldmlld1JlZiB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IHhQZXJjZW50LCB5UGVyY2VudCB9ID0gcG9zaXRpb247XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtib3hPcGVuLCBzZXRCb3hPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlQm94ID0gKCkgPT4gc2V0Qm94T3BlbighYm94T3Blbik7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PFByb2plY3RSZXZpZXdNYXJrZXIgey4uLnsgeFBlcmNlbnQsIHlQZXJjZW50LCBhdXRob3IsIGNvbW1lbnRJbmRleCwgdG9nZ2xlQ29tbWVudDogdG9nZ2xlQm94IH19PlxuXHRcdFx0PENvbW1lbnQgey4uLnsgY29tbWVudCwgYXV0aG9yLCBib3hPcGVuLCB0b2dnbGVCb3gsIHBvc2l0aW9uLCByZXZpZXdSZWYgfX0gLz5cblx0XHQ8L1Byb2plY3RSZXZpZXdNYXJrZXI+XG5cdCk7XG59XG5cbmNvbnN0IENvbW1lbnQgPSAoeyBjb21tZW50LCBhdXRob3IsIGJveE9wZW4sIHRvZ2dsZUJveCwgcG9zaXRpb24sIHJldmlld1JlZiB9KSA9PiB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB0aXRsZSA9IGF1dGhvci51c2VybmFtZTtcblx0Y29uc3Qgc3VidGl0bGUgPSBhdXRob3IuZW1haWw7XG5cblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW3RyYW5zZm9ybWVkUG9zLCBzZXRUcmFuc2Zvcm1lZFBvc10gPSB1c2VTdGF0ZShwb3NpdGlvbik7XG5cblx0LyogUmVmcyAqL1xuXHRjb25zdCBib3hSZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBFZmZlY3RzICovXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKHBvc2l0aW9uKSB7XG5cdFx0XHRzZXRUcmFuc2Zvcm1lZFBvcygoKSA9PiB7XG5cdFx0XHRcdHBvc2l0aW9uLnJldmlld1BvcyA9IHJldmlld1JlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdFx0XHRyZXR1cm4gY2FsY0JveFBvcyhib3hSZWYsIHBvc2l0aW9uKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwgW3Bvc2l0aW9uXSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PEJveFxuXHRcdFx0cmVuZGVyT25Cb2R5PXtmYWxzZX1cblx0XHRcdGFuaW1hdGU9e2ZhbHNlfVxuXHRcdFx0ZXh0ZW5zaW9uQ2xhc3Nlcz1cInJldmlld19fYm94XCJcblx0XHRcdHsuLi57IHRpdGxlLCBzdWJ0aXRsZSwgYm94T3BlbiwgdG9nZ2xlQm94LCB1c2VyOiBhdXRob3IsIHBvc2l0aW9uOiB0cmFuc2Zvcm1lZFBvcywgYm94UmVmIH19PlxuXHRcdFx0e2NvbW1lbnR9XG5cdFx0PC9Cb3g+XG5cdCk7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0YXJlYUF1dG9zaXplJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vY29tbW9uJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dCc7XG5cbi8qIEhlbHBlcnMgKi9cbmltcG9ydCB7IGNhbGNCb3hQb3MgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBhZGRDb21tZW50IH0gZnJvbSAnLi4vLi4vYXBpL2NvbW1lbnQnO1xuaW1wb3J0IHsgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXdDb21tZW50Qm94KHsgbWFya2VyUG9zLCBib3hPcGVuLCB0b2dnbGVCb3gsIHBoYXNlSWQsIHByb2plY3RJbWFnZUlkIH0pIHtcblx0LyogUmVmcyAqL1xuXHRjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cdGNvbnN0IGJveFJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB0aXRsZSA9ICdBZGQgYSBjb21tZW50Jztcblx0Y29uc3QgcG9zaXRpb24gPSBjYWxjQm94UG9zKGJveFJlZiwgbWFya2VyUG9zKTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyOiB1c2VyIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGFkZENvbW1lbnRNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZENvbW1lbnQsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfSU1BR0VfQllfSUQsIHBhcnNlSW50KHByb2plY3RJbWFnZUlkKV0pO1xuXHRcdFx0dG9nZ2xlQm94KCk7XG5cdFx0fSxcblx0fSk7XG5cblx0LyogQ29tcG9uZW50cyAqL1xuXHRjb25zdCBTdWJ0aXRsZUNvbXBvbmVudCA9ICgpID0+IChcblx0XHQ8c3Bhbj5cblx0XHRcdENvbW1lbnQgb3IgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnlcIj4gQG1lbnRpb24gPC9zcGFuPiBzb21lb25lXG5cdFx0PC9zcGFuPlxuXHQpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxCb3hcblx0XHRcdHJlbmRlck9uQm9keT17ZmFsc2V9XG5cdFx0XHRleHRlbnNpb25DbGFzc2VzPVwicmV2aWV3X19ib3hcIlxuXHRcdFx0ey4uLnsgdGl0bGUsIFN1YnRpdGxlQ29tcG9uZW50LCBib3hPcGVuLCB0b2dnbGVCb3gsIHBvc2l0aW9uLCB1c2VyLCBib3hSZWYgfX0+XG5cdFx0XHQ8Zm9ybVxuXHRcdFx0XHRyZWY9e2Zvcm1SZWZ9XG5cdFx0XHRcdGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1ncm93LTFcIlxuXHRcdFx0XHRvblN1Ym1pdD17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRhZGRDb21tZW50TXV0YXRpb24ubXV0YXRlKHtcblx0XHRcdFx0XHRcdGZvcm1SZWY6IGZvcm1SZWYsXG5cdFx0XHRcdFx0XHR1c2VySWQ6IHVzZXIuaWQsXG5cdFx0XHRcdFx0XHRwaGFzZUlkOiBwaGFzZUlkLFxuXHRcdFx0XHRcdFx0cG9zaXRpb246IG1hcmtlclBvcyxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fX0+XG5cdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cImNvbW1lbnRcIj5cblx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdDxUZXh0YXJlYUF1dG9zaXplXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBmb3JtLWNvbnRyb2wtLXRleHRcIlxuXHRcdFx0XHRcdGlkPVwiY29tbWVudFwiXG5cdFx0XHRcdFx0bmFtZT1cImNvbW1lbnRcIlxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNheSBzb21ldGhpbmcgbmljZS4uLlwiXG5cdFx0XHRcdFx0YXV0b0ZvY3VzXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHR0aXRsZT1cIlN1Ym1pdFwiXG5cdFx0XHRcdFx0ZXh0ZW5zaW9uQ2xhc3Nlcz1cIm10LTQgdy01MCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcblx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHR7Li4ueyBpc0xvYWRpbmc6IGFkZENvbW1lbnRNdXRhdGlvbi5pc0xvYWRpbmcgfX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L0JveD5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBFZGl0YWJsZSB9IGZyb20gJy4uL2VkaXRhYmxlJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IHN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZWRpdFByb2plY3RJbWFnZSwgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXdIZWFkZXIoeyBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChzdGF0aWNDb250ZXh0KTtcblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBtdXRhdGlvbk9uU3VjY2VzcyA9ICgpID0+IHtcblx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0lNQUdFX0JZX0lELCBpZF0pO1xuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTZcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC14bC02XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiAnZWRpdGFibGUnfSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJgfT5cblx0XHRcdFx0XHQ8RWRpdGFibGVcblx0XHRcdFx0XHRcdGlucHV0VHlwZT1cInRpdGxlXCJcblx0XHRcdFx0XHRcdHByb2plY3RJZD17aWR9XG5cdFx0XHRcdFx0XHRjb250ZW50PXt0aXRsZX1cblx0XHRcdFx0XHRcdG11dGF0aW9uPXtlZGl0UHJvamVjdEltYWdlfVxuXHRcdFx0XHRcdFx0bXV0YXRpb25JZD17aWR9XG5cdFx0XHRcdFx0XHR7Li4ueyBtdXRhdGlvbk9uU3VjY2VzcyB9fT5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJoNSBtYi0wIHRleHQtd2hpdGVcIj57dGl0bGUgPyB0aXRsZSA6ICdBZGQgYSBuaWNlIHRpdGxlJ308L2gxPlxuXHRcdFx0XHRcdDwvRWRpdGFibGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7dXNlclJvbGUgPT09ICdhZG1pbicgJiYgJ2VkaXRhYmxlJ30gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yYH0+XG5cdFx0XHRcdFx0PEVkaXRhYmxlXG5cdFx0XHRcdFx0XHRpbnB1dFR5cGU9XCJkZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0XHRjb250ZW50PXtkZXNjcmlwdGlvbn1cblx0XHRcdFx0XHRcdG11dGF0aW9uPXtlZGl0UHJvamVjdEltYWdlfVxuXHRcdFx0XHRcdFx0bXV0YXRpb25JZD17aWR9XG5cdFx0XHRcdFx0XHR7Li4ueyBtdXRhdGlvbk9uU3VjY2VzcyB9fT5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTcwIG1iLTBcIj5cblx0XHRcdFx0XHRcdFx0e2Rlc2NyaXB0aW9uID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPntkZXNjcmlwdGlvbn08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdEFkZCBhIGRlY3JpcHRpb24gLSB0aGUgcHVycG9zZSwgY29udGV4dCwgb2JqZWN0aXZlc1xuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L0VkaXRhYmxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOLCBTQ0FMRV9GQURFIH0gZnJvbSAnLi4vLi4vY29tbW9uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3TWFya2VyKHsgeFBlcmNlbnQsIHlQZXJjZW50LCBhdXRob3IsIGNvbW1lbnRJbmRleCwgdG9nZ2xlQ29tbWVudCwgY2hpbGRyZW4gfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXHRjb25zdCB1c2VyID0gYXV0aG9yID8gYXV0aG9yIDogY3VycmVudFVzZXI7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXZcblx0XHRcdGxheW91dFxuXHRcdFx0dHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4yIH19XG5cdFx0XHRjbGFzc05hbWU9XCJyZXZpZXdfX2ludGVyYWN0aW9uXCJcblx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdCctLXgnOiB4UGVyY2VudCxcblx0XHRcdFx0Jy0teSc6IHlQZXJjZW50LFxuXHRcdFx0fX1cblx0XHRcdHsuLi5GQURFX0lOfT5cblx0XHRcdDxtb3Rpb24uYnV0dG9uXG5cdFx0XHRcdHsuLi5TQ0FMRV9GQURFfVxuXHRcdFx0XHRjbGFzc05hbWU9XCJyZXZpZXdfX21hcmtlciBpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnkgYnRuIGJ0bi1saW5rIHRleHQtcmVzZXRcIlxuXHRcdFx0XHRzdHlsZT17eyAnLS10aGVtZSc6IGAke3VzZXIudXNlckNvbG9yfWAgfX1cblx0XHRcdFx0b25DbGljaz17dG9nZ2xlQ29tbWVudH0+XG5cdFx0XHRcdHtjb21tZW50SW5kZXggJiYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0teHNcIj57Y29tbWVudEluZGV4ICsgMX08L3NwYW4+fVxuXHRcdFx0PC9tb3Rpb24uYnV0dG9uPlxuXHRcdFx0e2NoaWxkcmVufVxuXHRcdDwvbW90aW9uLmRpdj5cblx0KTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdFJldmlld0hlYWRlciB9IGZyb20gJy4vUHJvamVjdFJldmlld0hlYWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RSZXZpZXdDYW52YXMgfSBmcm9tICcuL1Byb2plY3RSZXZpZXdDYW52YXMnO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkVXNlckljb24gZnJvbSAnaWNvbnMvYWRkX3VzZXIuc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vY29tbW9uJztcbmltcG9ydCBVc2VyQWRkU2VhcmNoIGZyb20gJy4vVXNlckFkZFNlYXJjaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBZGQoeyB1c2VycywgcHJvamVjdCB9KSB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtib3hPcGVuLCBzZXRCb3hPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlQm94ID0gKCkgPT4gc2V0Qm94T3BlbighYm94T3Blbik7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtbC0yXCI+XG5cdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayB1c2VyIHVzZXItLWxnIHVzZXItLWFkZFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0b2dnbGVCb3h9PlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ1c2VyX19hdmF0YXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXJfX2luaXRpYWxzXCI+XG5cdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cInVzZXJfX2ljb24gaWNvbiBpY29uLS0xMiBtdC0wXCIgc3JjPXthZGRVc2VySWNvbn0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8Qm94IHRpdGxlPVwiU2VsZWN0IHVzZXJzXCIgc3VidGl0bGU9XCJDaG9vc2Ugc29tZSB1c2VycyB0byBjb2xsYWJvcmF0ZSB3aXRoLlwiIHsuLi57IGJveE9wZW4sIHRvZ2dsZUJveCB9fT5cblx0XHRcdFx0PFVzZXJBZGRTZWFyY2ggey4uLnsgdXNlcnMsIHByb2plY3QsIHRvZ2dsZUJveCB9fSAvPlxuXHRcdFx0PC9Cb3g+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgVXNlckFkZFNlYXJjaFJlc3VsdHMgZnJvbSAnLi9Vc2VyQWRkU2VhcmNoUmVzdWx0cyc7XG5pbXBvcnQgeyBVc2VycyB9IGZyb20gJy4uL3VzZXJzJztcblxuLyogRWxlbWVudHMgKi9cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzJztcblxuLyogSGVscGVycyAqL1xuaW1wb3J0IHsgaXNFbWFpbCwgZmlsdGVyVXNlcnMgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBhZGRVc2VyLCBmZXRjaEdvYmFsVXNlcnMsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQWRkU2VhcmNoKHsgdXNlcnMsIHByb2plY3QsIHRvZ2dsZUJveCB9KSB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbZm9jdXNlZFVzZXIsIHNldEZvY3VzZWRVc2VyXSA9IHVzZVN0YXRlKDApO1xuXG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBkYXRhOiBnbG9iYWxVc2VycyA9IFtdLCBpc0xvYWRpbmc6IGdsb2JhbFVzZXJzTG9hZGluZyB9ID0gdXNlUXVlcnkoXG5cdFx0UVVFUllfS0VZUy5HTE9CQUxfVVNFUlMsXG5cdFx0ZmV0Y2hHb2JhbFVzZXJzXG5cdCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IGZpbHRlcmVkVXNlcnMgPSBmaWx0ZXJVc2VycyhnbG9iYWxVc2VycywgdXNlcnMsIHF1ZXJ5KTtcblxuXHQvKiBSZWZzICovXG5cdGNvbnN0IHF1ZXJ5UmVmID0gdXNlUmVmKCk7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBhZGRVc2VyTXV0YXRpb24gPSB1c2VNdXRhdGlvbihhZGRVc2VyLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0LmlkXSk7XG5cdFx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLkdMT0JBTF9VU0VSUyk7XG5cblx0XHRcdHF1ZXJ5UmVmLmN1cnJlbnQuc2VsZWN0KCk7XG5cdFx0XHRzZXRRdWVyeSgnJyk7XG5cdFx0fSxcblx0fSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHNldFF1ZXJ5KHZhbHVlKTtcblxuXHRjb25zdCBoYW5kbGVPbktleURvd24gPSAoZXZlbnQpID0+IHtcblx0XHRpZiAoWydFbnRlcicsICdUYWInXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRpZiAocXVlcnkgIT09ICcnICYmIGZvY3VzZWRVc2VyICE9PSBudWxsKSB7XG5cdFx0XHRcdGNvbnN0IHVzZXIgPSBmb2N1c2VkVXNlciBpbiBmaWx0ZXJlZFVzZXJzID8gZmlsdGVyZWRVc2Vyc1tmb2N1c2VkVXNlcl0gOiBmb2N1c2VkVXNlcjtcblxuXHRcdFx0XHRpZiAoaXNFbWFpbCh1c2VyLmVtYWlsKSkge1xuXHRcdFx0XHRcdGFkZFVzZXJNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQ6IHByb2plY3QuaWQsIGVtYWlsOiB1c2VyLmVtYWlsIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKGVtYWlsKSA9PiB7XG5cdFx0aWYgKGlzRW1haWwoZW1haWwpKSB7XG5cdFx0XHRhZGRVc2VyTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkOiBwcm9qZWN0LmlkLCBlbWFpbDogZW1haWwgfSk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtZ3Jvdy0xXCI+XG5cdFx0XHQ8VXNlcnMgey4uLnsgdXNlcnMsIHByb2plY3QgfX0gdmFyaWFudD1cImludGVyYWN0aXZlXCIgc2l6ZT1cInhsXCIgLz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cblx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwidXNlclF1ZXJ5XCI+XG5cdFx0XHRcdFx0U2VhcmNoIG5hbWUgb3IgZW1haWxcblx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBmb3JtLWNvbnRyb2wtLXNlYXJjaFwiXG5cdFx0XHRcdFx0aWQ9XCJ1c2VyUXVlcnlcIlxuXHRcdFx0XHRcdG5hbWU9XCJ1c2VyUXVlcnlcIlxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiU2VhcmNoIG5hbWUgb3IgZW1haWxcIlxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRhdXRvRm9jdXNcblx0XHRcdFx0XHR2YWx1ZT17cXVlcnl9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRvbktleURvd249e2hhbmRsZU9uS2V5RG93bn1cblx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJvZmZcIlxuXHRcdFx0XHRcdHJlZj17cXVlcnlSZWZ9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxVc2VyQWRkU2VhcmNoUmVzdWx0c1xuXHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHRmaWx0ZXJlZFVzZXJzLFxuXHRcdFx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdFx0XHRoYW5kbGVDbGljayxcblx0XHRcdFx0XHRcdGZvY3VzZWRVc2VyLFxuXHRcdFx0XHRcdFx0c2V0Rm9jdXNlZFVzZXIsXG5cdFx0XHRcdFx0XHR1c2VyTXV0YXRpb25Mb2FkaW5nOiBhZGRVc2VyTXV0YXRpb24uaXNMb2FkaW5nLFxuXHRcdFx0XHRcdFx0Z2xvYmFsVXNlcnNMb2FkaW5nLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTRcIj5cblx0XHRcdFx0PEJ1dHRvbiB0aXRsZT1cIkRvbmVcIiBvbkNsaWNrPXt0b2dnbGVCb3h9IGV4dGVuc2lvbkNsYXNzZXM9XCJ3LTUwIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4gfSBmcm9tICcuLi8uLi9jb21tb24vYW5pbWF0aW9ucyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXJTZWxlY3QgfSBmcm9tICcuLi91c2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBZGRTZWFyY2hSZXN1bHRzKHtcblx0ZmlsdGVyZWRVc2Vycyxcblx0cXVlcnksXG5cdGhhbmRsZUNsaWNrLFxuXHRmb2N1c2VkVXNlcixcblx0c2V0Rm9jdXNlZFVzZXIsXG5cdHVzZXJNdXRhdGlvbkxvYWRpbmcsXG5cdGdsb2JhbFVzZXJzTG9hZGluZyxcbn0pIHtcblx0LyogUmVuZGVyIGZpbHRlcmVkIHJlc3VsdHMgKi9cblx0Y29uc3QgcmVzdWx0cyA9ICgpID0+IHtcblx0XHRjb25zdCBuZXdVc2VyID0geyBlbWFpbDogcXVlcnksIHVzZXJuYW1lOiAnTmV3IHVzZXInLCB1c2VyQ29sb3I6ICcjQ0MyNUU4JyB9O1xuXG5cdFx0aWYgKGZpbHRlcmVkVXNlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIGZpbHRlcmVkVXNlcnMubWFwKCh1c2VyLCB1c2VySW5kZXgpID0+IChcblx0XHRcdFx0PG1vdGlvbi5saSB7Li4uRkFERV9JTn0ga2V5PXt1c2VyLmlkfSBjbGFzc05hbWU9XCJsaXN0X19pdGVtIHZyLTNcIj5cblx0XHRcdFx0XHQ8VXNlclNlbGVjdFxuXHRcdFx0XHRcdFx0ey4uLnsgdXNlciwgdXNlckluZGV4LCBoYW5kbGVDbGljaywgc2V0Rm9jdXNlZFVzZXIgfX1cblx0XHRcdFx0XHRcdGlzRm9jdXNlZD17dXNlckluZGV4ID09PSBmb2N1c2VkVXNlciAmJiBxdWVyeX1cblx0XHRcdFx0XHRcdGlzTG9hZGluZz17dXNlck11dGF0aW9uTG9hZGluZ31cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L21vdGlvbi5saT5cblx0XHRcdCkpO1xuXHRcdH1cblxuXHRcdGlmICghZ2xvYmFsVXNlcnNMb2FkaW5nKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8bW90aW9uLmxpIHsuLi5GQURFX0lOfSBrZXk9XCJOZXcgdXNlclwiIGNsYXNzTmFtZT1cImxpc3RfX2l0ZW0gaXMtZm9jdXNlZCB2ci0zXCI+XG5cdFx0XHRcdFx0PFVzZXJTZWxlY3Rcblx0XHRcdFx0XHRcdHsuLi57IHVzZXI6IG5ld1VzZXIsIHVzZXJJbmRleDogbmV3VXNlciwgaGFuZGxlQ2xpY2ssIHNldEZvY3VzZWRVc2VyIH19XG5cdFx0XHRcdFx0XHRpc0ZvY3VzZWQ9e3F1ZXJ5Lmxlbmd0aH1cblx0XHRcdFx0XHRcdGlzTG9hZGluZz17dXNlck11dGF0aW9uTG9hZGluZ31cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L21vdGlvbi5saT5cblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHR7cXVlcnkgIT09ICcnICYmIChcblx0XHRcdFx0PG1vdGlvbi51bCB7Li4uRkFERV9JTn0gY2xhc3NOYW1lPVwiYm94X19saXN0IGxpc3RcIj5cblx0XHRcdFx0XHR7cmVzdWx0cygpfVxuXHRcdFx0XHQ8L21vdGlvbi51bD5cblx0XHRcdCl9XG5cdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJBZGQgfSBmcm9tIFwiLi9Vc2VyQWRkXCI7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgc3Rhckljb24gZnJvbSAnaWNvbnMvc3Rhci5zdmcnO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnaWNvbnMvZGVsZXRlLnN2Zyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZGVsZXRlVXNlciwgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IExvYWRpbmdXcmFwcGVyIH0gZnJvbSAnLi4vLi4vY29tbW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcih7IHVzZXIsIHByb2plY3QgPSB7fSwgdmFyaWFudCA9ICdkZWZhdWx0Jywgc2l6ZSA9ICdtZCcgfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJZCwgYXV0aG9yIH0gPSBwcm9qZWN0O1xuXHRjb25zdCB7IGlkOiB1c2VySWQsIGVtYWlsIH0gPSB1c2VyO1xuXG5cdGNvbnN0IGlzQXV0aG9yID0gZW1haWwgPT09IGF1dGhvcjtcblx0Y29uc3QgY2xhc3NlcyA9IFsndXNlcicsIGB1c2VyLS0ke3NpemV9YCwgYHVzZXItLSR7dmFyaWFudH1gLCBpc0F1dGhvciAmJiAndXNlci0tYXV0aG9yJ10uam9pbignICcpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBkZWxldGVVc2VyTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVVc2VyLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKSxcblx0fSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuXHRcdFx0PFVzZXJBdmF0YXIgaXNMb2FkaW5nPXtkZWxldGVVc2VyTXV0YXRpb24uaXNMb2FkaW5nfSB7Li4udXNlcn0+XG5cdFx0XHRcdHt2YXJpYW50ID09PSAnaW50ZXJhY3RpdmUnICYmICFpc0F1dGhvciAmJiAoXG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidXNlcl9fYWN0aW9uIGJ0biBidG4tbGluayBwLTBcIlxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkZWxldGVVc2VyTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkLCB1c2VySWQgfSl9PlxuXHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19hY3Rpb24taWNvbiBpY29uIGljb24tLTE0XCIgc3JjPXtkZWxldGVJY29ufSAvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9Vc2VyQXZhdGFyPlxuXHRcdFx0e2lzQXV0aG9yICYmIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19zdGF0dXMgdXNlcl9fc3RhdHVzLS1sZWFkZXJcIj5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cInVzZXJfX3N0YXR1cy1pY29uIGljb24gdGV4dC10ZXJ0aWFyeSBtdC0wXCIgc3JjPXtzdGFySWNvbn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgY29uc3QgVXNlckF2YXRhciA9ICh7IHVzZXJuYW1lLCB1c2VyQ29sb3IsIGlzTG9hZGluZywgY2hpbGRyZW4gfSkgPT4ge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgdXNlckluaXRpYWxzID0gdXNlcm5hbWUuc3BsaXQoJyAnKS5tYXAoKHdvcmQpID0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19hdmF0YXJcIiBzdHlsZT17eyAnLS10aGVtZSc6IHVzZXJDb2xvciB9fT5cblx0XHRcdDxMb2FkaW5nV3JhcHBlciBsb2FkaW5nPXtpc0xvYWRpbmd9IGxvYWRlclNpemU9ezE2fT5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidXNlcl9faW5pdGlhbHNcIj57dXNlckluaXRpYWxzfTwvc3Bhbj5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9Mb2FkaW5nV3JhcHBlcj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBVc2VySW5mbyA9ICh7IHVzZXJuYW1lLCBlbWFpbCB9KSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1sLTNcIj5cblx0XHQ8cCBjbGFzc05hbWU9XCJtYi0wXCI+e3VzZXJuYW1lfTwvcD5cblx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS02MCB0ZXh0LS14c1wiPntlbWFpbH08L3A+XG5cdDwvZGl2PlxuKTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRVc2VySWNvbiBmcm9tICdpY29ucy9hZGRfdXNlci5zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VyQXZhdGFyLCBVc2VySW5mbyB9IGZyb20gJy4vVXNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJTZWxlY3QoeyB1c2VyLCB1c2VySW5kZXgsIGhhbmRsZUNsaWNrLCBpc0ZvY3VzZWQsIHNldEZvY3VzZWRVc2VyLCBpc0xvYWRpbmcgfSkge1xuXHQvKiBFZmZlY3RzICovXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aXNGb2N1c2VkICYmIHNldEZvY3VzZWRVc2VyKHVzZXJJbmRleCk7XG5cdH0sIFtpc0ZvY3VzZWRdKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHJldHVybiAoKSA9PiBzZXRGb2N1c2VkVXNlcigwKTtcblx0fSwgW10pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBoYW5kbGVTdGF0dXMgPSAoYWN0aW9uKSA9PiB7XG5cdFx0c2V0Rm9jdXNlZFVzZXIoYWN0aW9uID09PSAnZW50ZXInID8gdXNlckluZGV4IDogMCk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0Y2xhc3NOYW1lPXtgdXNlciB1c2VyLS1zZWxlY3QgJHtpc0ZvY3VzZWQgJiYgJ2lzLWZvY3VzZWQnfSB1c2VyLS14bGB9XG5cdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayh1c2VyLmVtYWlsKX1cblx0XHRcdG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlU3RhdHVzKCdlbnRlcicpfVxuXHRcdFx0b25Nb3VzZUxlYXZlPXsoKSA9PiBoYW5kbGVTdGF0dXMoJ2xlYXZlJyl9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxVc2VyQXZhdGFyIGlzTG9hZGluZz17aXNMb2FkaW5nICYmIGlzRm9jdXNlZH0gey4uLnVzZXJ9IC8+XG5cdFx0XHRcdDxVc2VySW5mbyB7Li4udXNlcn0gLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19hZGQgdGV4dC1zZWNvbmRhcnkgcm91bmRlZC1jaXJjbGUgbWwtYXV0b1wiPlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9fYWRkLWljb24gaWNvbiBpY29uLS0xMiB0ZXh0LXNlY29uZGFyeVwiIHNyYz17YWRkVXNlckljb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9idXR0b24+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU0NBTEVfRkFERSB9IGZyb20gXCIuLi8uLi9jb21tb24vYW5pbWF0aW9uc1wiO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJzKHsgdXNlcnMsIGxheW91dCA9IFwiZnVsbFwiLCAuLi5yZXN0IH0pIHtcbiAgICBjb25zdCBzbGljZUFtb3VudCA9IGxheW91dCA9PT0gXCJtaW5pbWFsXCIgPyA3IDogSW5maW5pdHk7XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgZ3V0dGVycy0xXCI+XG4gICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgIHt1c2Vycy5zbGljZSgwLCBzbGljZUFtb3VudCkubWFwKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBsYXlvdXQgey4uLlNDQUxFX0ZBREV9IGNsYXNzTmFtZT1cImNvbC1hdXRvXCIga2V5PXt1c2VyLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlciB7Li4ueyB1c2VyLCAuLi5yZXN0IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAge2xheW91dCA9PT0gXCJtaW5pbWFsXCIgJiYgdXNlcnMubGVuZ3RoID4gNyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGxheW91dCB7Li4uU0NBTEVfRkFERX0gY2xhc3NOYW1lPVwiY29sLWF1dG9cIiBrZXk9XCJtb3JlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LS14cyB0ZXh0LW11dGVkLS03MCBtbC0xXCI+KyB7dXNlcnMubGVuZ3RoIC0gc2xpY2VBbW91bnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VycyB9IGZyb20gXCIuL1VzZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXIgfSBmcm9tIFwiLi9Vc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJTZWxlY3QgfSBmcm9tIFwiLi9Vc2VyU2VsZWN0XCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTdGF0aWNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuZXhwb3J0IGRlZmF1bHQgU3RhdGljQ29udGV4dDtcbiIsIi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IExvYWRpbmdXcmFwcGVyIH0gZnJvbSAnLi4vY29tbW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uKHtcblx0dGl0bGUsXG5cdHR5cGUgPSAnYnV0dG9uJyxcblx0dGhlbWUgPSAnc2Vjb25kYXJ5Jyxcblx0c2l6ZSA9ICdzbScsXG5cdGV4dGVuc2lvbkNsYXNzZXMgPSAnJyxcblx0b25DbGljayA9ICgpID0+IHt9LFxuXHRpc0xvYWRpbmcgPSBmYWxzZSxcbn0pIHtcblx0LyogUmVmcyAqL1xuXHRjb25zdCBidXR0b25SZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgYnV0dG9uSGVpZ2h0ID0gYnV0dG9uUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8YnV0dG9uXG5cdFx0XHRyZWY9e2J1dHRvblJlZn1cblx0XHRcdGNsYXNzTmFtZT17YGJ0biBidG4tJHtzaXplfSBidG4tJHt0aGVtZX0gJHtleHRlbnNpb25DbGFzc2VzfSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyYH1cblx0XHRcdHN0eWxlPXt7IGhlaWdodDogYnV0dG9uSGVpZ2h0IH19XG5cdFx0XHR7Li4ueyB0eXBlLCBvbkNsaWNrIH19PlxuXHRcdFx0PExvYWRpbmdXcmFwcGVyXG5cdFx0XHRcdGxvYWRpbmc9e2lzTG9hZGluZ31cblx0XHRcdFx0bG9hZGVyU2l6ZT17MTZ9XG5cdFx0XHRcdGNsYXNzZXM9e3sgbG9hZGVyQ2xhc3NlczogJ3Bvc2l0aW9uLWFic29sdXRlIGQtZmxleCB0ZXh0LXNlY29uZGFyeScgfX0+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImJ0bl9fdGV4dFwiPnt0aXRsZX08L3NwYW4+XG5cdFx0XHQ8L0xvYWRpbmdXcmFwcGVyPlxuXHRcdDwvYnV0dG9uPlxuXHQpO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYWxjQm94UG9zKGJveFJlZiwgbWFya2VyUG9zKSB7XG5cdGNvbnN0IG1hcmtlclNwYWNlciA9IDEwO1xuXHRjb25zdCBtYXJrZXJTaXplID0gMjA7XG5cdGNvbnN0IG9mZnNldCA9IG1hcmtlclNpemUgKyBtYXJrZXJTcGFjZXI7XG5cblx0LyogR2V0IHBvc2l0aW9uIG9mIG1hcmtlciAqL1xuXHRjb25zdCByZXZpZXdQb3MgPSBtYXJrZXJQb3MucmV2aWV3UG9zO1xuXHRjb25zdCB4UGVyY2VudCA9IE51bWJlcihtYXJrZXJQb3MueFBlcmNlbnQpO1xuXHRjb25zdCB5UGVyY2VudCA9IE51bWJlcihtYXJrZXJQb3MueVBlcmNlbnQpO1xuXG5cdC8qIEdldCBkaW1lbnNpb25zIG9mIGN1cnJlbnQgYm94ICovXG5cdGNvbnN0IHsgd2lkdGg6IGJveFdpZHRoID0gNDAwLCBoZWlnaHQ6IGJveEhlaWdodCA9IDIyOCB9ID0gYm94UmVmPy5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSB8fCB7fTtcblxuXHQvKiBHZXQgZGltZW5zaW9ucyBvZiBjdXJyZW50IHNjcmVlbiAqL1xuXHRjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRjb25zdCBib3hQZXJjZW50V2lkdGggPSAoYm94V2lkdGggLyBzY3JlZW5XaWR0aCkgKiAxMDA7XG5cblx0Y29uc3Qgc2NyZWVuSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gcmV2aWV3UG9zLnRvcDtcblx0Y29uc3QgYm94UGVyY2VudEhlaWdodCA9IChib3hIZWlnaHQgLyBzY3JlZW5IZWlnaHQpICogMTAwO1xuXG5cdC8qIFNldCB4IGFuZCB5IHZhbHVlcyB0byBwZXJjZW50YWdlIGVxdWl2ZWxlbnQgdG8gbWFrZSB0aGUgYm94IHJlc3BvbnNpdmUgKi9cblx0bGV0IGxlZnQgPSBvZmZzZXQ7XG5cdGxldCB0b3AgPSBvZmZzZXQ7XG5cblx0LyogQ29tcGVuc2F0ZSBmb3IgdGhlIGJveFdpZHRoIGlmIG1hcmtlciBpcyBhdCBlbmQgb2YgaG9yaXpvbnRhbCBzY3JlZW4gKi9cblx0aWYgKHhQZXJjZW50ICsgYm94UGVyY2VudFdpZHRoID4gMTAwKSB7XG5cdFx0bGVmdCA9IC1ib3hXaWR0aCAtIG1hcmtlclNwYWNlcjtcblx0fVxuXG5cdC8qIENvbXBlbnNhdGUgZm9yIHRoZSBib3hIZWlnaHQgaWYgbWFya2VyIGlzIGF0IGVuZCBvZiB2ZXJ0aWNhbCBzY3JlZW4gKi9cblx0aWYgKHlQZXJjZW50ICsgYm94UGVyY2VudEhlaWdodCA+IDEwMCkge1xuXHRcdHRvcCA9IC1ib3hIZWlnaHQgLSBtYXJrZXJTcGFjZXI7XG5cdH1cblxuXHRyZXR1cm4geyBsZWZ0OiBgJHtsZWZ0fXB4YCwgdG9wOiBgJHt0b3B9cHhgIH07XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaWx0ZXJVc2VycyhnbG9iYWxVc2VycywgdXNlcnMsIHF1ZXJ5KSB7XG4gICAgY29uc3QgbG93ZXJRdWVyeSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgZXhpc3RpbmdVc2Vyc0J5RW1haWwgPSB1c2Vycy5tYXAoKHsgZW1haWwgfSkgPT4gZW1haWwpO1xuXG4gICAgbGV0IGZpbHRlcmVkVXNlcnMgPSBnbG9iYWxVc2Vyc1xuICAgICAgICAuZmlsdGVyKCh7IGVtYWlsIH0pID0+IHtcbiAgICAgICAgICAgIC8qIE9ubHkgcmV0dXJuIHVzZXJzIHRoYXQgYXJlIG5vdCBwYXJ0IG9mIHRoZSBwcm9qZWN0ICovXG4gICAgICAgICAgICByZXR1cm4gIWV4aXN0aW5nVXNlcnNCeUVtYWlsLmluY2x1ZGVzKGVtYWlsKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbHRlcigoeyBlbWFpbCwgdXNlcm5hbWUgfSkgPT4ge1xuICAgICAgICAgICAgLyogT25seSByZXR1cm4gdXNlcnMgdGhhdCBtYXRjaCB0aGUgcXVlcnkgb24gZW1haWwgfHwgdXNlcm5hbWUgKi9cbiAgICAgICAgICAgIHJldHVybiBlbWFpbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyUXVlcnkpIHx8IHVzZXJuYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJRdWVyeSk7XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbHRlcmVkVXNlcnM7XG59XG4iLCJjb25zdCBVU0VSX1JPTEVTID0ge1xuXHRST0xFX0FETUlOOiAnUk9MRV9BRE1JTicsXG5cdFJPTEVfVVNFUjogJ1JPTEVfVVNFUicsXG5cdFJPTEVfVVNFUl9CQVNJQzogJ1JPTEVfVVNFUl9CQVNJQycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSb2xlKHsgcm9sZXMgfSkge1xuXHRpZiAocm9sZXMuaW5jbHVkZXMoVVNFUl9ST0xFUy5ST0xFX0FETUlOKSkgcmV0dXJuICdhZG1pbic7XG5cdGlmIChyb2xlcy5pbmNsdWRlcyhVU0VSX1JPTEVTLlJPTEVfVVNFUikpIHJldHVybiAndXNlcic7XG5cdGlmIChyb2xlcy5pbmNsdWRlcyhVU0VSX1JPTEVTLlJPTEVfVVNFUl9CQVNJQykpIHJldHVybiAnYmFzaWMnO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0VtYWlsIH0gZnJvbSAnLi9pc0VtYWlsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmlsdGVyVXNlcnMgfSBmcm9tICcuL2ZpbHRlclVzZXJzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0Um9sZSB9IGZyb20gJy4vZ2V0Um9sZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNhbGNCb3hQb3MgfSBmcm9tICcuL2NhbGNCb3hQb3MnO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNFbWFpbChlbWFpbCkge1xuICAgIHJldHVybiAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLy50ZXN0KGVtYWlsKTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlU2VsZWN0aW9uIH0gZnJvbSAnLi91c2VTZWxlY3Rpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VQYWdlVGl0bGUgfSBmcm9tICcuL3VzZVBhZ2VUaXRsZSc7XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVBhZ2VUaXRsZSh0aXRsZSwgdXBkYXRlUHJvcHMgPSBbXSkge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGRvY3VtZW50LnRpdGxlID0gYCR7dGl0bGUgPyB0aXRsZSArICcgfCBQYXJhbGxlbCBEYXNoYm9hcmQnIDogZG9jdW1lbnQudGl0bGV9YDtcblx0fSwgWy4uLnVwZGF0ZVByb3BzXSk7XG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU2VsZWN0aW9uKCkge1xuXHRjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKFtdKTtcblxuXHRjb25zdCB1cGRhdGVTZWxlY3RlZCA9IChpZCkgPT4ge1xuXHRcdHNldFNlbGVjdGVkKChzZWxlY3RlZCkgPT4ge1xuXHRcdFx0aWYgKHNlbGVjdGVkLmluY2x1ZGVzKGlkKSkge1xuXHRcdFx0XHRyZXR1cm4gc2VsZWN0ZWQuZmlsdGVyKChzZWxlY3RlZElkKSA9PiBzZWxlY3RlZElkICE9PSBpZCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBbLi4uc2VsZWN0ZWQsIGlkXTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCByZXNldFNlbGVjdGVkID0gKCkgPT4gc2V0U2VsZWN0ZWQoW10pO1xuXG5cdHJldHVybiB7IHNlbGVjdGVkLCB1cGRhdGVTZWxlY3RlZCwgcmVzZXRTZWxlY3RlZCB9O1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uL2FwaSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEFsZXJ0LCBIZWFkZXIsIEJhY2tncm91bmQgfSBmcm9tICcuLi9jb21wb25lbnRzJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2VsZW1lbnRzJztcblxuLyogUm91dGVzICovXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuLi9yb3V0ZXMnO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlUGFnZVRpdGxlIH0gZnJvbSAnLi4vaG9va3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbih7IHNldEN1cnJlbnRVc2VyIH0pIHtcblx0LyogUmVmcyAqL1xuXHRjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cblx0LyogSG9va3MgKi9cblx0dXNlUGFnZVRpdGxlKCdMb2dpbicpO1xuXHRjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXHRjb25zdCB7XG5cdFx0cmVnaXN0ZXIsXG5cdFx0aGFuZGxlU3VibWl0LFxuXHRcdGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcblx0fSA9IHVzZUZvcm0oeyByZVZhbGlkYXRlTW9kZTogJ29uQ2hhbmdlJywgbW9kZTogJ29uQmx1cicgfSk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGxvZ2luTXV0YXRpb24gPSB1c2VNdXRhdGlvbihsb2dpbiwge1xuXHRcdG9uU3VjY2VzczogKHVzZXIpID0+IHtcblx0XHRcdHNldEN1cnJlbnRVc2VyKHVzZXIpO1xuXHRcdFx0dG9hc3QoPEFsZXJ0IG1lc3NhZ2U9XCJTdWNjZXNzZnVsbHkgbG9nZ2VkIGluIVwiIGFwcGVhcmFuY2U9XCJzdWNjZXNzXCIgLz4pO1xuXHRcdFx0aGlzdG9yeS5wdXNoKFJPVVRFUy5wcm9qZWN0cyk7XG5cdFx0fSxcblx0XHRvbkVycm9yOiAoZXJyb3IpID0+IHtcblx0XHRcdHRvYXN0KFxuXHRcdFx0XHQ8QWxlcnRcblx0XHRcdFx0XHRtZXNzYWdlPXtcblx0XHRcdFx0XHRcdGVycm9yPy5yZXNwb25zZT8uZGF0YT8uZXJyb3IgPyAnRW1haWwvcGFzc3dvcmQgY29tYmluYXRpb24gbm90IGZvdW5kIScgOiAnU29tZXRoaW5nIHdlbnQgd3JvbmchJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhcHBlYXJhbmNlPVwiZXJyb3JcIlxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblxuXHRcdFx0ZXJyb3JzLmVtYWlsID0geyBtZXNzYWdlOiAnRW1haWwvcGFzc3dvcmQgY29tYmluYXRpb24gbm90IGZvdW5kJyB9O1xuXHRcdFx0ZXJyb3JzLnBhc3N3b3JkID0geyBtZXNzYWdlOiAnRW1haWwvcGFzc3dvcmQgY29tYmluYXRpb24gbm90IGZvdW5kJyB9O1xuXHRcdH0sXG5cdH0pO1xuXG5cdGNvbnN0IG9uU3VibWl0ID0gKCkgPT4gbG9naW5NdXRhdGlvbi5tdXRhdGUoeyBmb3JtUmVmIH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cblx0XHRcdFx0PEJhY2tncm91bmQgLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lX19wYW5lbCBwYW5lbCBwYW5lbC0tbG9naW5cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWxfX2JvZHlcIj5cblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGUgbWItMFwiPkxvZ2luPC9oMT5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNzAgdGV4dC13aGl0ZSBtYi02XCI+TG9naW4gd2l0aCB5b3VyIGUtbWFpbCBhbmQgcGFzc3dvcmQ8L3A+XG5cdFx0XHRcdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtmb3JtUmVmfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBhbmVsX19mb3JtIGZvcm1cIlxuXHRcdFx0XHRcdFx0XHRcdG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxuXHRcdFx0XHRcdFx0XHRcdG5vVmFsaWRhdGU+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJpbnB1dEVtYWlsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0RW1haWxcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtlcnJvcnMuZW1haWwgJiYgJ2lzLWludmFsaWQnfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJpbnB1dEVtYWlsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGF1dG9Gb2N1c1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcignZW1haWwnLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy5lbWFpbCAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3JzLmVtYWlsPy5tZXNzYWdlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gZXJyb3JzLmVtYWlsLm1lc3NhZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJpbnB1dFBhc3N3b3JkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UGFzc3dvcmRcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtlcnJvcnMucGFzc3dvcmQgJiYgJ2lzLWludmFsaWQnfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJpbnB1dFBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcigncGFzc3dvcmQnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3JzLnBhc3N3b3JkICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtlcnJvcnMucGFzc3dvcmQ/Lm1lc3NhZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBlcnJvcnMucGFzc3dvcmQubWVzc2FnZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICdQbGVhc2UgZW50ZXIgYSBwYXNzd29yZCd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICdMb2cgaW4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhlbWU6ICdzZWNvbmRhcnknLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2l6ZTogJ21kJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV4dGVuc2lvbkNsYXNzZXM6ICdidG4tYmxvY2sganVzdGlmeS1jb250ZW50LWNlbnRlcicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VibWl0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzTG9hZGluZzogbG9naW5NdXRhdGlvbi5pc0xvYWRpbmcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtd2hpdGUgYnRuLWJsb2NrXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0bz17Uk9VVEVTLnNpZ251cH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT1cInNpZ24gdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJidG5fX3RleHRcIj5TaWduIHVwPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFBhZ2VMb2FkZXIgfSBmcm9tICcuLi9jb21tb24nO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGZldGNoUHJvamVjdEJ5SWQsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi9hcGknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQcm9qZWN0RGV0YWlsSGVhZGVyLCBQcm9qZWN0RGV0YWlsSW1hZ2VzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbCc7XG5pbXBvcnQgeyB1c2VQYWdlVGl0bGUgfSBmcm9tICcuLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWwoKSB7XG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBpc0xvYWRpbmcsIGRhdGEgPSB7fSB9ID0gdXNlUXVlcnkoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcGFyc2VJbnQocHJvamVjdElkKV0sICgpID0+XG5cdFx0ZmV0Y2hQcm9qZWN0QnlJZCh7IHByb2plY3RJZCB9KVxuXHQpO1xuXG5cdC8qIEhvb2tzICovXG5cdHVzZVBhZ2VUaXRsZShkYXRhPy50aXRsZSwgW2RhdGFdKTtcblx0Y29uc3QgeyBpZDogcHJvamVjdElkIH0gPSB1c2VQYXJhbXMoKTtcblxuXHQvKiBDb25zdGFudHMgICovXG5cdGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCB1c2VycywgaWQsIGF1dGhvciwgZW1haWwsIHByb2plY3RJbWFnZXMgfSA9IGRhdGE7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PFBhZ2VMb2FkZXIgey4uLnsgaXNMb2FkaW5nIH19PlxuXHRcdFx0PFByb2plY3REZXRhaWxIZWFkZXIgey4uLnsgdGl0bGUsIGRlc2NyaXB0aW9uLCB1c2VycywgaWQsIGF1dGhvciwgZW1haWwgfX0gLz5cblx0XHRcdDxQcm9qZWN0RGV0YWlsSW1hZ2VzIHsuLi57IHByb2plY3RJbWFnZXMsIHByb2plY3RJZDogaWQgfX0gLz5cblx0XHQ8L1BhZ2VMb2FkZXI+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFByb2plY3RSZXN1bHRzLCBQcm9qZWN0QWRkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0LW92ZXJ2aWV3JztcbmltcG9ydCB7IFBhZ2VMb2FkZXIgfSBmcm9tICcuLi9jb21tb24nO1xuaW1wb3J0IHsgSGVhZGVyTmF2aWdhdGlvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi9jb250ZXh0JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBmZXRjaFByb2plY3RzQnlVc2VyLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vYXBpJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZVBhZ2VUaXRsZSB9IGZyb20gJy4uL2hvb2tzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdE92ZXJ2aWV3KCkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbbmV3UHJvamVjdElkLCBzZXROZXdQcm9qZWN0SWRdID0gdXNlU3RhdGUoKTtcblxuXHQvKiBIb29rcyAqL1xuXHR1c2VQYWdlVGl0bGUoJ1Byb2plY3RzJyk7XG5cdGNvbnN0IHsgY3VycmVudFVzZXIsIHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBpc0xvYWRpbmcsIGRhdGE6IHByb2plY3RzID0gW10gfSA9IHVzZVF1ZXJ5KFxuXHRcdFFVRVJZX0tFWVMuUFJPSkVDVF9CWV9VU0VSLFxuXHRcdCgpID0+IGZldGNoUHJvamVjdHNCeVVzZXIoeyB1c2VySWQ6IGN1cnJlbnRVc2VyPy5pZCB9KSxcblx0XHR7XG5cdFx0XHRlbmFibGVkOiAhIWN1cnJlbnRVc2VyPy5pZCxcblx0XHR9XG5cdCk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkZXJOYXZpZ2F0aW9uIC8+XG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cblx0XHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwicGFuZSBweS01IHB5LWxnLTEwXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdFx0XHRcdDxQYWdlTG9hZGVyIHsuLi57IGlzTG9hZGluZyB9fT5cblx0XHRcdFx0XHRcdFx0e3VzZXJSb2xlID09PSAnYWRtaW4nICYmIDxQcm9qZWN0QWRkIHsuLi57IHNldE5ld1Byb2plY3RJZCB9fSAvPn1cblx0XHRcdFx0XHRcdFx0PFByb2plY3RSZXN1bHRzIHsuLi57IHByb2plY3RzLCBuZXdQcm9qZWN0SWQgfX0gLz5cblx0XHRcdFx0XHRcdDwvUGFnZUxvYWRlcj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9zZWN0aW9uPlxuXHRcdFx0PC9tYWluPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFBhZ2VMb2FkZXIgfSBmcm9tICcuLi9jb21tb24nO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGZldGNoUHJvamVjdEltYWdlQnlJZCwgUVVFUllfS0VZUyB9IGZyb20gJy4uL2FwaSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFByb2plY3RSZXZpZXdDYW52YXMsIFByb2plY3RSZXZpZXdIZWFkZXIgfSBmcm9tICcuLi9jb21wb25lbnRzL3Byb2plY3QtcmV2aWV3JztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZVBhZ2VUaXRsZSB9IGZyb20gJy4uL2hvb2tzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlldygpIHtcblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGlzTG9hZGluZywgZGF0YSA9IHt9IH0gPSB1c2VRdWVyeShbUVVFUllfS0VZUy5QUk9KRUNUX0lNQUdFX0JZX0lELCBwYXJzZUludChwcm9qZWN0SW1hZ2VJZCldLCAoKSA9PlxuXHRcdGZldGNoUHJvamVjdEltYWdlQnlJZCh7IHByb2plY3RJbWFnZUlkIH0pXG5cdCk7XG5cblx0LyogSG9va3MgKi9cblx0dXNlUGFnZVRpdGxlKGRhdGE/LnRpdGxlLCBbZGF0YV0pO1xuXHRjb25zdCB7IGlkOiBwcm9qZWN0SW1hZ2VJZCB9ID0gdXNlUGFyYW1zKCk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PFBhZ2VMb2FkZXIgey4uLnsgaXNMb2FkaW5nIH19PlxuXHRcdFx0PFByb2plY3RSZXZpZXdIZWFkZXIgey4uLmRhdGF9IC8+XG5cdFx0XHQ8UHJvamVjdFJldmlld0NhbnZhcyB7Li4ueyAuLi5kYXRhLCBwcm9qZWN0SW1hZ2VJZCB9fSAvPlxuXHRcdDwvUGFnZUxvYWRlcj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgdXNlRm9ybSwgdXNlV2F0Y2ggfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IHNpZ251cCB9IGZyb20gJy4uL2FwaSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL2VsZW1lbnRzJztcbmltcG9ydCB7IEhlYWRlciwgQmFja2dyb3VuZCwgQWxlcnQgfSBmcm9tICcuLi9jb21wb25lbnRzJztcblxuLyogUm91dGVzICovXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuLi9yb3V0ZXMnO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlUGFnZVRpdGxlIH0gZnJvbSAnLi4vaG9va3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWdudXAoeyBzZXRDdXJyZW50VXNlciB9KSB7XG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgZm9ybVJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIEhvb2tzICovXG5cdHVzZVBhZ2VUaXRsZSgnU2lnbnVwJyk7XG5cdGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cblx0Y29uc3Qge1xuXHRcdHJlZ2lzdGVyLFxuXHRcdGhhbmRsZVN1Ym1pdCxcblx0XHRmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG5cdFx0Y29udHJvbCxcblx0fSA9IHVzZUZvcm0oeyByZVZhbGlkYXRlTW9kZTogJ29uQ2hhbmdlJywgbW9kZTogJ29uQmx1cicgfSk7XG5cblx0Y29uc3QgcGxhaW5QYXNzd29yZCA9IHVzZVdhdGNoKHtcblx0XHRjb250cm9sLFxuXHRcdG5hbWU6ICdwbGFpblBhc3N3b3JkJyxcblx0XHRkZWZhdWx0VmFsdWU6ICcnLFxuXHR9KTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3Qgc2lnbnVwTXV0YXRpb24gPSB1c2VNdXRhdGlvbihzaWdudXAsIHtcblx0XHRvblN1Y2Nlc3M6ICh1c2VyKSA9PiB7XG5cdFx0XHRzZXRDdXJyZW50VXNlcih1c2VyKTtcblx0XHRcdHRvYXN0KDxBbGVydCBtZXNzYWdlPVwiU3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbiFcIiBhcHBlYXJhbmNlPVwic3VjY2Vzc1wiIC8+KTtcblx0XHRcdGhpc3RvcnkucHVzaChST1VURVMucHJvamVjdHMpO1xuXHRcdH0sXG5cdFx0b25FcnJvcjogKGVycm9yKSA9PiB7XG5cdFx0XHRpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA1MDApIHtcblx0XHRcdFx0dG9hc3QoPEFsZXJ0IG1lc3NhZ2U9XCJUaGlzIGVtYWlsIGlzIGFscmVhZHkgaW4gdXNlIVwiIGFwcGVhcmFuY2U9XCJlcnJvclwiIC8+KTtcblxuXHRcdFx0XHRmb3JtUmVmLmN1cnJlbnQucmVzZXQoKTtcblx0XHRcdH1cblx0XHR9LFxuXHR9KTtcblxuXHRjb25zdCBvblN1Ym1pdCA9ICgpID0+IHNpZ251cE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYgfSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxuXHRcdFx0XHQ8QmFja2dyb3VuZCAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVfX3BhbmVsIHBhbmVsIHBhbmVsLS1sb2dpblwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lbF9fYm9keVwiPlxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2UgdGV4dC13aGl0ZSBtYi0wXCI+U2lnbiB1cDwvaDE+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTcwIHRleHQtd2hpdGUgbWItNlwiPlNpZ24gdXAgd2l0aCB5b3VyIGUtbWFpbCBhbmQgcGFzc3dvcmQ8L3A+XG5cdFx0XHRcdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtmb3JtUmVmfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBhbmVsX19mb3JtIGZvcm0gbXQtNlwiXG5cdFx0XHRcdFx0XHRcdFx0b25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9XG5cdFx0XHRcdFx0XHRcdFx0bm9WYWxpZGF0ZT5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInJlZ2lzdHJhdGlvbl9mb3JtX3VzZXJuYW1lXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0WW91ciBuYW1lXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD1cInJlZ2lzdHJhdGlvbl9mb3JtX3VzZXJuYW1lXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwidXNlcm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke2Vycm9ycy51c2VybmFtZSAmJiAnaXMtaW52YWxpZCd9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkZ1bGwgbmFtZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKCd1c2VybmFtZScsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUGxlYXNlIGVudGVyIGEgbmFtZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3JzLnVzZXJuYW1lICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj57ZXJyb3JzLnVzZXJuYW1lLm1lc3NhZ2V9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInJlZ2lzdHJhdGlvbl9mb3JtX2VtYWlsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0RW1haWxcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwicmVnaXN0cmF0aW9uX2Zvcm1fZW1haWxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7ZXJyb3JzLmVtYWlsICYmICdpcy1pbnZhbGlkJ31gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcignZW1haWwnLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhbiBlbWFpbCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3JzLmVtYWlsICYmIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPntlcnJvcnMuZW1haWwubWVzc2FnZX08L2Rpdj59XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicmVnaXN0cmF0aW9uX2Zvcm1fcGxhaW5QYXNzd29yZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFBhc3N3b3JkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJyZWdpc3RyYXRpb25fZm9ybV9wbGFpblBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwicGxhaW5QYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7ZXJyb3JzLnBhc3N3b3JkICYmICdpcy1pbnZhbGlkJ31gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcigncGxhaW5QYXNzd29yZCcsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUGxlYXNlIGVudGVyIGEgcGFzc3dvcmQnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1pbkxlbmd0aDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogNixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhIHBhc3N3b3JkIG9mIGF0bGVhc3QgNiBjaGFyYWN0ZXJzJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtlcnJvcnMucGxhaW5QYXNzd29yZCAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e2Vycm9ycy5wbGFpblBhc3N3b3JkLm1lc3NhZ2V9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwibG9naW4tY29uZmlybS1wYXNzd29yZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdENvbmZpcm0gcGFzc3dvcmRcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtlcnJvcnMucGFzc3dvcmRDb25maXJtICYmICdpcy1pbnZhbGlkJ31gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwibG9naW4tY29uZmlybS1wYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJDb25maXJtIHBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwicGFzc3dvcmRDb25maXJtXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ3Bhc3N3b3JkQ29uZmlybScsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUGxlYXNlIGNvbmZpcm0geW91ciBwYXNzd29yZCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsaWRhdGU6ICh2YWx1ZSkgPT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWUgPT09IHBsYWluUGFzc3dvcmQgfHwgJ1RoZSBwYXNzd29yZHMgZG8gbm90IG1hdGNoJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy5wYXNzd29yZENvbmZpcm0gJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPntlcnJvcnMucGFzc3dvcmRDb25maXJtLm1lc3NhZ2V9PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICdTaWduIHVwJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoZW1lOiAnc2Vjb25kYXJ5Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNpemU6ICdtZCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRleHRlbnNpb25DbGFzc2VzOiAnYnRuLWJsb2NrIGp1c3RpZnktY29udGVudC1jZW50ZXInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Ym1pdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc0xvYWRpbmc6IHNpZ251cE11dGF0aW9uLmlzTG9hZGluZyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGlua1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS13aGl0ZSBidG4tYmxvY2tcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvPXtST1VURVMubG9naW59XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9XCJzaWduIHVwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYnRuX190ZXh0XCI+TG9naW48L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIExvZ2luIH0gZnJvbSAnLi9Mb2dpbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpZ251cCB9IGZyb20gJy4vU2lnbnVwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdE92ZXJ2aWV3IH0gZnJvbSAnLi9Qcm9qZWN0T3ZlcnZpZXcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0RGV0YWlsIH0gZnJvbSAnLi9Qcm9qZWN0RGV0YWlsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdFJldmlldyB9IGZyb20gJy4vUHJvamVjdFJldmlldyc7XG4iLCIvKiBQYWdlcyAqL1xuaW1wb3J0IHsgUHJvamVjdE92ZXJ2aWV3LCBQcm9qZWN0RGV0YWlsLCBQcm9qZWN0UmV2aWV3LCBMb2dpbiwgU2lnbnVwIH0gZnJvbSAnLi9wYWdlcyc7XG5cbmV4cG9ydCBjb25zdCBST1VURVMgPSB7XG5cdGxvZ2luOiAnLycsXG5cdHNpZ251cDogJy9zaWdudXAnLFxuXHRwcm9qZWN0czogJy9wcm9qZWN0cycsXG59O1xuXG5jb25zdCByb3V0ZXMgPSBbXG5cdHtcblx0XHRuYW1lOiAnbG9naW4nLFxuXHRcdHBhdGg6ICcvJyxcblx0XHRjb21wb25lbnQ6IExvZ2luLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3NpZ251cCcsXG5cdFx0cGF0aDogJy9zaWdudXAnLFxuXHRcdGNvbXBvbmVudDogU2lnbnVwLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3Byb2plY3Qtb3ZlcnZpZXcnLFxuXHRcdHBhdGg6ICcvcHJvamVjdHMnLFxuXHRcdGNvbXBvbmVudDogUHJvamVjdE92ZXJ2aWV3LFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3Byb2plY3QtZGV0YWlsJyxcblx0XHRwYXRoOiAnL3Byb2plY3RzLzppZCcsXG5cdFx0Y29tcG9uZW50OiBQcm9qZWN0RGV0YWlsLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3Byb2plY3QtcmV2aWV3Jyxcblx0XHRwYXRoOiAnL3Byb2plY3RzLzppZC9yZXZpZXcvOmlkJyxcblx0XHRjb21wb25lbnQ6IFByb2plY3RSZXZpZXcsXG5cdH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdwYXJzbGV5anMnO1xuXG5jb25zdCBwYXJzbGV5Q29uZmlnID0ge1xuICAgIGVycm9yQ2xhc3M6ICdpcy1lcnJvcicsXG4gICAgZXhjbHVkZWQ6ICdpbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0sIGlucHV0W3R5cGU9aGlkZGVuXSwgW2Rpc2FibGVkXSwgOmhpZGRlbicsXG4gICAgc3VjY2Vzc0NsYXNzOiAnaXMtc3VjY2Vzcydcbn07XG5cbiQoJ2Zvcm06bm90KFtub3ZhbGlkYXRlXSknKS5wYXJzbGV5KHBhcnNsZXlDb25maWcpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==