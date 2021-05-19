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
            params.append('positionX', position.x);
            params.append('positionY', position.y);
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
      boxRef = _ref.boxRef;

  /* Constants */
  var _position$x = position.x,
      x = _position$x === void 0 ? 0 : _position$x,
      _position$y = position.y,
      y = _position$y === void 0 ? 0 : _position$y;
  /* TODO: escape event listener */

  var render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], null, boxOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
      ref: boxRef,
      layout: true,
      transition: {
        duration: 0.2
      },
      className: "box ".concat(renderOnBody && 'box--center'),
      style: {
        '--x': x,
        '--y': y
      }
    }, renderOnBody && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
      className: "box-overlay"
    }, _animations__WEBPACK_IMPORTED_MODULE_4__["FADE_IN"], {
      onClick: toggleBox
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
      key: "box-content",
      className: "box__content border p-5"
    }, _animations__WEBPACK_IMPORTED_MODULE_4__["FADE_IN_UP"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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

var cursorOffset = 6;
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
    setTimeout(function () {
      return setMarkerPos(null);
    }, 250);
  };

  var posMarker = function posMarker(_ref3) {
    var clientX = _ref3.clientX,
        clientY = _ref3.clientY;
    var reviewPos = reviewRef === null || reviewRef === void 0 ? void 0 : reviewRef.current.getBoundingClientRect();
    setMarkerPos(function () {
      var x = clientX - cursorOffset;
      var y = clientY - reviewPos.top - cursorOffset;
      var xPercent = (clientX - cursorOffset) / reviewPos.width * 100;
      var yPercent = (clientY - reviewPos.top - cursorOffset) / reviewPos.height * 100;
      return {
        x: x,
        y: y,
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, markerPos && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewMarker__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({}, markerPos))), markerPos && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewCommentBox__WEBPACK_IMPORTED_MODULE_4__["default"], {
    markerPos: markerPos,
    boxOpen: boxOpen,
    toggleBox: toggleBox,
    phaseId: phaseId,
    projectImageId: projectImageId
  }), comments.length > 0 && comments.map(function (comment, commentIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewComment__WEBPACK_IMPORTED_MODULE_3__["default"], _extends({
      key: commentIndex
    }, comment));
  }));
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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */

/* Components */



function ProjectReviewComment(_ref) {
  var author = _ref.author,
      comment = _ref.comment,
      position = _ref.position;

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
    onMouseEnter: toggleBox,
    onMouseLeave: toggleBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewMarker__WEBPACK_IMPORTED_MODULE_2__["default"], {
    xPercent: position.x,
    yPercent: position.y,
    author: author
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comment, {
    comment: comment,
    author: author,
    boxOpen: boxOpen,
    toggleBox: toggleBox,
    position: position
  }));
}

var Comment = function Comment(_ref2) {
  var comment = _ref2.comment,
      author = _ref2.author,
      boxOpen = _ref2.boxOpen,
      toggleBox = _ref2.toggleBox,
      position = _ref2.position;

  /* Constants */
  var title = author.username;
  var subtitle = author.email;
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    renderOnBody: false,
    title: title,
    subtitle: subtitle,
    boxOpen: boxOpen,
    toggleBox: toggleBox,
    user: author,
    position: position
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
        position: position
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
    type: "submit"
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
      author = _ref.author;

  /* Hooks */
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_2__["default"]),
      currentUser = _useContext.currentUser;

  var user = author ? author : currentUser;
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({
    key: [xPercent, yPercent]
  }, _common_animations__WEBPACK_IMPORTED_MODULE_3__["SCALE_FADE"], {
    className: "review__marker icon-wrapper icon-wrapper--secondary",
    style: {
      '--x': xPercent,
      '--y': yPercent,
      '--theme': "".concat(user.userColor),
      '--size': 13
    }
  }));
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

  var cursorOffset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;

  /* Get position of marker */
  var x = markerPos.x,
      y = markerPos.y,
      reviewPos = markerPos.reviewPos;
  /* Get dimensions of current box */

  var _ref = (boxRef === null || boxRef === void 0 ? void 0 : (_boxRef$current = boxRef.current) === null || _boxRef$current === void 0 ? void 0 : _boxRef$current.getBoundingClientRect()) || {},
      boxWidth = _ref.width,
      boxHeight = _ref.height;
  /* Get dimensions of current screen */


  var screenWidth = window.innerWidth;
  var screenHeight = window.innerHeight - reviewPos.top;
  /* Set x and y values to percentage equivelent to make the box responsive */

  var xPercent = (x + cursorOffset) / reviewPos.width * 100;
  var yPercent = (y + cursorOffset) / reviewPos.height * 100;
  /* Compensate for the boxWidth if marker is at end of horizontal screen */

  if (screenWidth - x < boxWidth) {
    xPercent = (x - boxWidth) / reviewPos.width * 100;
  }
  /* Compensate for the boxHeight if marker is at end of vertical screen */


  if (screenHeight - y < boxHeight) {
    yPercent = (y - boxHeight) / reviewPos.height * 100;
  }

  return {
    x: xPercent,
    y: yPercent
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX2ltYWdlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9hZGRfcHJvamVjdC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX3VzZXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2FyY2hpdmUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2NoZWNrLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvZGVsZXRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9lZGl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9sZWF2ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvc3Rhci5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvdXBsb2FkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FsZXJ0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL29iamVjdGZpdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9hcGkvY29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2FwaS9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvYXBpL3Byb2plY3RJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2FwaS91c2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL0JveC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vRHJvcHpvbmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL0xvYWRpbmdXcmFwcGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbW1vbi9Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vUGFnZUxvYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbW1vbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvYWN0aW9uLW1lbnUvQWN0aW9uTWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL2FjdGlvbi1tZW51L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9lZGl0YWJsZS9FZGl0YWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL2VkaXRhYmxlL0VkaXRhYmxlQm9keS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL2VkaXRhYmxlL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbC9Qcm9qZWN0RGV0YWlsSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvcHJvamVjdC1kZXRhaWwvUHJvamVjdERldGFpbEltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvcHJvamVjdC1kZXRhaWwvUHJvamVjdERldGFpbEltYWdlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3Byb2plY3QtZGV0YWlsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9wcm9qZWN0LW92ZXJ2aWV3L1Byb2plY3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9wcm9qZWN0LW92ZXJ2aWV3L1Byb2plY3RBZGQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9wcm9qZWN0LW92ZXJ2aWV3L1Byb2plY3RJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3Byb2plY3Qtb3ZlcnZpZXcvUHJvamVjdE1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvcHJvamVjdC1vdmVydmlldy9Qcm9qZWN0UmVzdWx0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3Byb2plY3Qtb3ZlcnZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdDYW52YXMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3Q29tbWVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdDb21tZW50Qm94LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvcHJvamVjdC1yZXZpZXcvUHJvamVjdFJldmlld0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdNYXJrZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9wcm9qZWN0LXJldmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlci1hZGQvVXNlckFkZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3VzZXItYWRkL1VzZXJBZGRTZWFyY2guanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2VyLWFkZC9Vc2VyQWRkU2VhcmNoUmVzdWx0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3VzZXItYWRkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2Vycy9Vc2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlcnMvVXNlclNlbGVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3VzZXJzL1VzZXJzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb250ZXh0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvZWxlbWVudHMvQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2VsZW1lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvaGVscGVycy9jYWxjQm94UG9zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvaGVscGVycy9maWx0ZXJVc2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2hlbHBlcnMvZ2V0Um9sZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9oZWxwZXJzL2lzRW1haWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9oZWxwZXJzL3VwZGF0ZVBhZ2VUaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2hvb2tzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvaG9va3MvdXNlU2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcGFnZXMvUHJvamVjdERldGFpbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wYWdlcy9Qcm9qZWN0T3ZlcnZpZXcuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcGFnZXMvUHJvamVjdFJldmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJBbGVydCIsImVsIiwiRE9NIiwidG9nZ2xlIiwicXVlcnlTZWxlY3RvciIsIm9uSW5pdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsIm9wYWNpdHkiLCJ2aXNpYmlsaXR5IiwidHJhbnNmb3JtIiwiYWxlcnROb2RlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJub2RlIiwiY2xpZW50IiwiUXVlcnlDbGllbnQiLCJkZWZhdWx0T3B0aW9ucyIsInF1ZXJpZXMiLCJyZWZldGNoT25XaW5kb3dGb2N1cyIsImFwcE5vZGUiLCJnZXRFbGVtZW50QnlJZCIsInJlbmRlciIsIiQiLCJvYmplY3RGaXRJbWFnZXMiLCJBcHAiLCJ1c2VTdGF0ZSIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJ1c2VyUm9sZSIsInNldFVzZXJSb2xlIiwidXNlcklkIiwiYXRvYiIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsInVzZVF1ZXJ5IiwiUVVFUllfS0VZUyIsIkNVUlJFTlRfVVNFUiIsImZldGNoQ3VycmVudFVzZXIiLCJvblN1Y2Nlc3MiLCJ1c2VyIiwiZ2V0Um9sZSIsImlzTG9hZGluZyIsInJvdXRlcyIsIm1hcCIsInBhdGgiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJwcm9wcyIsImFkZENvbW1lbnQiLCJmb3JtUmVmIiwicGhhc2VJZCIsInBvc2l0aW9uIiwicGFyYW1zIiwiRm9ybURhdGEiLCJjdXJyZW50IiwiYXBwZW5kIiwieCIsInkiLCJheGlvcyIsInBvc3QiLCJyZXN1bHQiLCJkYXRhIiwiUFJPSkVDVF9CWV9VU0VSIiwiUFJPSkVDVF9CWV9JRCIsIlBST0pFQ1RfSU1BR0VfQllfSUQiLCJHTE9CQUxfVVNFUlMiLCJmZXRjaFByb2plY3RzQnlVc2VyIiwiZ2V0IiwiZmV0Y2hQcm9qZWN0QnlJZCIsInByb2plY3RJZCIsImFkZFByb2plY3QiLCJkZWxldGVQcm9qZWN0cyIsInByb2plY3RJZHMiLCJpZCIsImxlYXZlUHJvamVjdHMiLCJlZGl0UHJvamVjdCIsImZldGNoUHJvamVjdEltYWdlQnlJZCIsInByb2plY3RJbWFnZUlkIiwiYWRkUHJvamVjdEltYWdlcyIsImltYWdlcyIsImltYWdlIiwiZGVsZXRlUHJvamVjdEltYWdlcyIsInByb2plY3RJbWFnZUlkcyIsImVkaXRQcm9qZWN0SW1hZ2UiLCJ1cmwiLCJmZXRjaEdvYmFsVXNlcnMiLCJhZGRVc2VyIiwiZW1haWwiLCJkZWxldGVVc2VyIiwiQm94IiwidGl0bGUiLCJzdWJ0aXRsZSIsIlN1YnRpdGxlQ29tcG9uZW50IiwiYm94T3BlbiIsInRvZ2dsZUJveCIsImNoaWxkcmVuIiwicmVuZGVyT25Cb2R5IiwiYm94UmVmIiwiZHVyYXRpb24iLCJGQURFX0lOIiwiRkFERV9JTl9VUCIsImNsb3NlSWNvbiIsImNyZWF0ZVBvcnRhbCIsImJvZHkiLCJEcm9wem9uZSIsInBvc2l0aXRpb24iLCJxdWVyeUNsaWVudCIsInVzZVF1ZXJ5Q2xpZW50IiwidXNlRHJvcHpvbmUiLCJhY2NlcHQiLCJub0NsaWNrIiwib25Ecm9wIiwiYWNjZXB0ZWRGaWxlcyIsInVwZGF0ZVByb2plY3RJbWFnZXMiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiaXNEcmFnQWN0aXZlIiwiYWRkUHJvamVjdEltYWdlc011dGF0aW9uIiwidXNlTXV0YXRpb24iLCJpbnZhbGlkYXRlUXVlcmllcyIsImRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbiIsImFjdGlvbiIsIm11dGF0ZSIsImlzUGFyZW50RHJhZ0FjdGl2ZSIsIkRyb3B6b25lSW5uZXIiLCJhZGRJbWFnZUxvYWRpbmciLCJub0RyYWdFdmVudHNCdWJibGluZyIsInVwbG9hZEltYWdlSWNvbiIsIlNDQUxFX0ZBREUiLCJsb2FkZXJDbGFzc2VzIiwiYWRkSW1hZ2VJY29uIiwiTG9hZGluZ1dyYXBwZXIiLCJsb2FkaW5nIiwibG9hZGVyU2l6ZSIsImNsYXNzZXMiLCJkZWZhdWx0Q2xhc3NlcyIsIk1vZGFsIiwidG9nZ2xlTW9kYWwiLCJkb21FbGVtZW50IiwidmFyaWFudCIsIlRSQU5TRk9STV9VUCIsIlBhZ2VMb2FkZXIiLCJFQVNFIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImVhc2UiLCJ0eXBlIiwiZGFtcGluZyIsInN0aWZmbmVzcyIsInNjYWxlIiwiU1RBR0dFUl9VUCIsImluZGV4IiwiZGVsYXkiLCJTVEFHR0VSX0xFRlQiLCJBY3Rpb25NZW51Iiwic2VsZWN0ZWQiLCJyZXNldFNlbGVjdGVkIiwiYWN0aW9ucyIsInVzZUNvbnRleHQiLCJTdGF0aWNDb250ZXh0IiwibGVuZ3RoIiwiYWN0aW9uSW5kZXgiLCJ0aGVtZSIsImhhc1Blcm1pc3Npb24iLCJpY29uIiwiaWNvblNpemUiLCJtdXRhdGlvbiIsImluY2x1ZGVzIiwiRWRpdGFibGUiLCJpbnB1dFR5cGUiLCJyZXN0Iiwic2V0Qm94T3BlbiIsImVkaXRJY29uIiwiRWRpdGFibGVCb2R5IiwiY29udGVudCIsIm11dGF0aW9uSWQiLCJtdXRhdGlvbk9uU3VjY2VzcyIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VSZWYiLCJpbnB1dFJlZiIsInVzZUVmZmVjdCIsInNlbGVjdCIsImVkaXRNdXRhdGlvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJQcm9qZWN0RGV0YWlsSGVhZGVyIiwiZGVzY3JpcHRpb24iLCJ1c2VycyIsImF1dGhvciIsInByb2plY3QiLCJzdGF0aWNDb250ZXh0IiwiUHJvamVjdERldGFpbEltYWdlIiwicHJvamVjdEltYWdlIiwidXBkYXRlU2VsZWN0ZWQiLCJwaGFzZXMiLCJjaGVja0ljb24iLCJQcm9qZWN0RGV0YWlsSW1hZ2VzIiwicHJvamVjdEltYWdlcyIsInVzZVNlbGVjdGlvbiIsImRlbGV0ZUljb24iLCJJbWFnZXMiLCJwcm9qZWN0SW1hZ2VJbmRleCIsIlByb2plY3QiLCJsYXlvdXQiLCJQcm9qZWN0QWRkIiwic2V0TmV3UHJvamVjdElkIiwic2V0UHJvamVjdElkIiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwiZW5hYmxlZCIsImFkZE11dGF0aW9uIiwiaW52YWxpZGF0ZVByb2plY3QiLCJzZXRUaW1lb3V0IiwidXBkYXRlUHJvamVjdCIsImFkZFByb2plY3RJY29uIiwiUHJvamVjdEltYWdlIiwiUHJvamVjdE1vZGFsIiwiRHJvcHpvbmVJbWFnZSIsInN0b3BQcm9wYWdhdGlvbiIsIlByb2plY3RSZXN1bHRzIiwicHJvamVjdHMiLCJuZXdQcm9qZWN0SWQiLCJsZWF2ZVByb2plY3RzTXV0YXRpb24iLCJkZWxldGVQcm9qZWN0c011dGF0aW9uIiwibGVhdmVJY29uIiwiYXJjaGl2ZUljb24iLCJmaWx0ZXIiLCJwcm9qZWN0SW5kZXgiLCJjdXJzb3JPZmZzZXQiLCJQcm9qZWN0UmV2aWV3Q2FudmFzIiwiY29tbWVudHMiLCJyZXZpZXdSZWYiLCJtYXJrZXJQb3MiLCJzZXRNYXJrZXJQb3MiLCJwb3NNYXJrZXIiLCJjbGllbnRYIiwiY2xpZW50WSIsInJldmlld1BvcyIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsInhQZXJjZW50Iiwid2lkdGgiLCJ5UGVyY2VudCIsImhlaWdodCIsImNvbW1lbnQiLCJjb21tZW50SW5kZXgiLCJQcm9qZWN0UmV2aWV3Q29tbWVudCIsIkNvbW1lbnQiLCJ1c2VybmFtZSIsIlByb2plY3RSZXZpZXdDb21tZW50Qm94IiwiY2FsY0JveFBvcyIsImFkZENvbW1lbnRNdXRhdGlvbiIsInBhcnNlSW50IiwiUHJvamVjdFJldmlld0hlYWRlciIsIlByb2plY3RSZXZpZXdNYXJrZXIiLCJ1c2VyQ29sb3IiLCJVc2VyQWRkIiwiYWRkVXNlckljb24iLCJVc2VyQWRkU2VhcmNoIiwicXVlcnkiLCJzZXRRdWVyeSIsImZvY3VzZWRVc2VyIiwic2V0Rm9jdXNlZFVzZXIiLCJnbG9iYWxVc2VycyIsImdsb2JhbFVzZXJzTG9hZGluZyIsImZpbHRlcmVkVXNlcnMiLCJmaWx0ZXJVc2VycyIsInF1ZXJ5UmVmIiwiYWRkVXNlck11dGF0aW9uIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlT25LZXlEb3duIiwia2V5IiwiaXNFbWFpbCIsImhhbmRsZUNsaWNrIiwidXNlck11dGF0aW9uTG9hZGluZyIsIlVzZXJBZGRTZWFyY2hSZXN1bHRzIiwicmVzdWx0cyIsIm5ld1VzZXIiLCJ1c2VySW5kZXgiLCJVc2VyIiwic2l6ZSIsImlzQXV0aG9yIiwiam9pbiIsImRlbGV0ZVVzZXJNdXRhdGlvbiIsInN0YXJJY29uIiwiVXNlckF2YXRhciIsInVzZXJJbml0aWFscyIsInNwbGl0Iiwid29yZCIsInRvVXBwZXJDYXNlIiwiVXNlckluZm8iLCJVc2VyU2VsZWN0IiwiaXNGb2N1c2VkIiwiaGFuZGxlU3RhdHVzIiwiVXNlcnMiLCJzbGljZUFtb3VudCIsIkluZmluaXR5Iiwic2xpY2UiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJCdXR0b24iLCJleHRlbnNpb25DbGFzc2VzIiwib25DbGljayIsImJveFdpZHRoIiwiYm94SGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwic2NyZWVuSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJsb3dlclF1ZXJ5IiwidG9Mb3dlckNhc2UiLCJleGlzdGluZ1VzZXJzQnlFbWFpbCIsIlVTRVJfUk9MRVMiLCJST0xFX0FETUlOIiwiUk9MRV9VU0VSIiwiUk9MRV9VU0VSX0JBU0lDIiwicm9sZXMiLCJ0ZXN0IiwidXBkYXRlUGFnZVRpdGxlIiwic2V0U2VsZWN0ZWQiLCJzZWxlY3RlZElkIiwiUHJvamVjdERldGFpbCIsInVzZVBhcmFtcyIsIlByb2plY3RPdmVydmlldyIsIlByb2plY3RSZXZpZXciLCJuYW1lIiwicGFyc2xleUNvbmZpZyIsImVycm9yQ2xhc3MiLCJleGNsdWRlZCIsInN1Y2Nlc3NDbGFzcyIsInBhcnNsZXkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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a0JBRFA7QUFFQzlSLE1BQUksRUFBRSxXQUZQO0FBR0NFLFdBQVMsRUFBRTBSLHNEQUFlQTtBQUgzQixDQURjLEVBTWQ7QUFDQ0UsTUFBSSxFQUFFLGdCQURQO0FBRUM5UixNQUFJLEVBQUUsZUFGUDtBQUdDRSxXQUFTLEVBQUV3UixvREFBYUE7QUFIekIsQ0FOYyxFQVdkO0FBQ0NJLE1BQUksRUFBRSxnQkFEUDtBQUVDOVIsTUFBSSxFQUFFLDBCQUZQO0FBR0NFLFdBQVMsRUFBRTJSLG9EQUFhQTtBQUh6QixDQVhjLENBQWY7QUFrQmUvUixxRUFBZixFOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFNaVMsYUFBYSxHQUFHO0FBQ2xCQyxZQUFVLEVBQUUsVUFETTtBQUVsQkMsVUFBUSxFQUFFLG9HQUZRO0FBR2xCQyxjQUFZLEVBQUU7QUFISSxDQUF0QjtBQU1BelQsNkNBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCMFQsT0FBNUIsQ0FBb0NKLGFBQXBDLEU7Ozs7Ozs7Ozs7O0FDVEEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvYXBwL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2Fzc2V0cy9hcHAvanMvbWFpbi5qc1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FkZF9pbWFnZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYWRkX3Byb2plY3Quc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FkZF91c2VyLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hcmNoaXZlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jaGVjay5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY2xvc2Uuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2RlbGV0ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZWRpdC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbGVhdmUuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3N0YXIuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3VwbG9hZC5zdmdcIjsiLCJjbGFzcyBBbGVydCB7XG4gICAgY29uc3RydWN0b3IoZWwpIHtcbiAgICAgICAgdGhpcy5ET00gPSB7IGVsIH07XG4gICAgICAgIHRoaXMuRE9NLnRvZ2dsZSA9IHRoaXMuRE9NLmVsLnF1ZXJ5U2VsZWN0b3IoXCIuYWxlcnRfX2J0blwiKTtcblxuICAgICAgICB0aGlzLm9uSW5pdCgpO1xuICAgIH1cbiAgICBvbkluaXQoKSB7XG4gICAgICAgIHRoaXMuRE9NLnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy50b2dnbGUoKSk7XG4gICAgfVxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5ET00uZWwuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuRE9NLmVsLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICB0aGlzLkRPTS5lbC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoMTAwJSlcIjtcbiAgICB9XG59XG5cbmNvbnN0IGFsZXJ0Tm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYWxlcnRdXCIpO1xuWy4uLmFsZXJ0Tm9kZXNdLmZvckVhY2goKG5vZGUpID0+IG5ldyBBbGVydChub2RlKSk7XG4iLCIvLyBDU1NcbmltcG9ydCAnLi4vc2Nzcy9tYWluLnNjc3MnO1xuXG4vLyBQb2xseWZpbHNcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcblxuLy8gQ29yZVxuaW1wb3J0ICcuL3ZhbGlkYXRpb24nO1xuaW1wb3J0ICcuL2FsZXJ0JztcblxuLy8gUGx1Z2luc1xuaW1wb3J0ICcuL29iamVjdGZpdCc7XG5cbi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgQXBwIGZyb20gJy4vcmVhY3QvQXBwJztcblxuLyogQ2xpZW50ICovXG5jb25zdCBjbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoe1xuXHRkZWZhdWx0T3B0aW9uczoge1xuXHRcdHF1ZXJpZXM6IHtcblx0XHRcdHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcblx0XHR9LFxuXHR9LFxufSk7XG5cbi8qIFJlbmRlciAqL1xuY29uc3QgYXBwTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcbmlmIChhcHBOb2RlICE9PSBudWxsKSB7XG5cdHJlbmRlcihcblx0XHQ8UXVlcnlDbGllbnRQcm92aWRlciB7Li4ueyBjbGllbnQgfX0+XG5cdFx0XHQ8QXBwIC8+XG5cdFx0PC9RdWVyeUNsaWVudFByb3ZpZGVyPixcblx0XHRhcHBOb2RlXG5cdCk7XG59XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IG9iamVjdEZpdEltYWdlcyBmcm9tICdvYmplY3QtZml0LWltYWdlcyc7XG5cbiQoZnVuY3Rpb24oKSB7XG4gICAgb2JqZWN0Rml0SW1hZ2VzKCk7XG59KTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgU3dpdGNoLCBSb3V0ZSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xuaW1wb3J0IHsgUGFnZUxvYWRlciB9IGZyb20gJy4vY29tbW9uJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi9jb250ZXh0JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBmZXRjaEN1cnJlbnRVc2VyLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi9hcGknO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBnZXRSb2xlIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKFtdKTtcblx0Y29uc3QgW3VzZXJSb2xlLCBzZXRVc2VyUm9sZV0gPSB1c2VTdGF0ZShbXSk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHVzZXJJZCA9IGF0b2IobG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCAnJykpO1xuXG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBpc0xvYWRpbmcgfSA9IHVzZVF1ZXJ5KFFVRVJZX0tFWVMuQ1VSUkVOVF9VU0VSLCAoKSA9PiBmZXRjaEN1cnJlbnRVc2VyKHsgdXNlcklkIH0pLCB7XG5cdFx0b25TdWNjZXNzOiAodXNlcikgPT4ge1xuXHRcdFx0c2V0Q3VycmVudFVzZXIodXNlcik7XG5cdFx0XHRzZXRVc2VyUm9sZShnZXRSb2xlKHVzZXIpKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8Um91dGVyPlxuXHRcdFx0PFN3aXRjaD5cblx0XHRcdFx0PFN0YXRpY0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY3VycmVudFVzZXIsIHVzZXJSb2xlIH19PlxuXHRcdFx0XHRcdDxQYWdlTG9hZGVyIHsuLi57IGlzTG9hZGluZyB9fT5cblx0XHRcdFx0XHRcdHtyb3V0ZXMubWFwKCh7IHBhdGgsIGNvbXBvbmVudDogQ29tcG9uZW50LCBwcm9wcyB9KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBrZXk9e3BhdGh9IHBhdGg9e3BhdGh9IGV4YWN0PlxuXHRcdFx0XHRcdFx0XHRcdDxDb21wb25lbnQgey4uLnsgLi4ucHJvcHMgfX0gLz5cblx0XHRcdFx0XHRcdFx0PC9Sb3V0ZT5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvUGFnZUxvYWRlcj5cblx0XHRcdFx0PC9TdGF0aWNDb250ZXh0LlByb3ZpZGVyPlxuXHRcdFx0PC9Td2l0Y2g+XG5cdFx0PC9Sb3V0ZXI+XG5cdCk7XG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBBZGQgY29tbWVudCB8IGV4cGVjdHMgcGhhc2UgaWQsIHVzZXIgaWQgYW5kIGZvcm1SZWYgb2JlY3QgKi9cbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKHsgZm9ybVJlZiwgcGhhc2VJZCwgdXNlcklkLCBwb3NpdGlvbiB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuXHRwYXJhbXMuYXBwZW5kKCd1c2VySWQnLCB1c2VySWQpO1xuXHRwYXJhbXMuYXBwZW5kKCdwb3NpdGlvblgnLCBwb3NpdGlvbi54KTtcblx0cGFyYW1zLmFwcGVuZCgncG9zaXRpb25ZJywgcG9zaXRpb24ueSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9jb21tZW50cy9hZGQvJHtwaGFzZUlkfWAsIHBhcmFtcyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi9wcm9qZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vcHJvamVjdEltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5cbmV4cG9ydCBjb25zdCBRVUVSWV9LRVlTID0ge1xuXHRDVVJSRU5UX1VTRVI6ICdjdXJyZW50X3VzZXInLFxuXHRQUk9KRUNUX0JZX1VTRVI6ICdwcm9qZWN0X2J5X3VzZXInLFxuXHRQUk9KRUNUX0JZX0lEOiAncHJvamVjdF9ieV9pZCcsXG5cdFBST0pFQ1RfSU1BR0VfQllfSUQ6ICdwcm9qZWN0X2ltYWdlX2J5X2lkJyxcblx0R0xPQkFMX1VTRVJTOiAnZ2xvYmFsX3VzZXJzJyxcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBGZXRjaCBwcm9qZWN0cyBieSB1c2VyIHwgZXhwZWN0cyB1c2VyIGlkICovXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9qZWN0c0J5VXNlciA9IGFzeW5jICh7IHVzZXJJZCB9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9qZWN0cy9nZXQvJHt1c2VySWR9YCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBGZXRjaCBwcm9qZWN0cyBieSBpZCB8IGV4cGVjdHMgcHJvamVjdCBpZCAqL1xuZXhwb3J0IGNvbnN0IGZldGNoUHJvamVjdEJ5SWQgPSBhc3luYyAoeyBwcm9qZWN0SWQgfSkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcHJvamVjdC9nZXQvJHtwcm9qZWN0SWR9YCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBBZGQgcHJvamVjdCAqL1xuZXhwb3J0IGNvbnN0IGFkZFByb2plY3QgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvcHJvamVjdHMvYWRkJyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBEZWxldGUgcHJvamVjdChzKSB8IGV4cGVjdHMgYXJyYXkgb2YgcHJvamVjdElkcyAgKi9cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9qZWN0cyA9IGFzeW5jICh7IHByb2plY3RJZHMgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblx0cHJvamVjdElkcy5mb3JFYWNoKChpZCkgPT4gcGFyYW1zLmFwcGVuZCgncHJvamVjdHNbXScsIGlkKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9kZWxldGVgLCBwYXJhbXMpO1xuXG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBMZWF2ZSBwcm9qZWN0KHMpIHwgZXhwZWN0cyBhcnJheSBvZiBwcm9qZWN0SWRzIGFuZCB1c2VyIGlkICAqL1xuZXhwb3J0IGNvbnN0IGxlYXZlUHJvamVjdHMgPSBhc3luYyAoeyBwcm9qZWN0SWRzLCB1c2VySWQgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblx0cHJvamVjdElkcy5mb3JFYWNoKChpZCkgPT4gcGFyYW1zLmFwcGVuZCgncHJvamVjdHNbXScsIGlkKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9sZWF2ZS8ke3VzZXJJZH1gLCBwYXJhbXMpO1xuXG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBFZGl0IHByb2plY3QgfCBleHBlY3RzIGZvcm1EYXRhIG9iamVjdCBhbmQgcHJvamVjdCBpZCAgKi9cbmV4cG9ydCBjb25zdCBlZGl0UHJvamVjdCA9IGFzeW5jICh7IGZvcm1SZWYsIGlkIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKGZvcm1SZWYuY3VycmVudCk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9lZGl0LyR7aWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBGZXRjaCBwcm9qZWN0SW1hZ2UgYnkgaWQgfCBleHBlY3RzIHByb2plY3QgaW1hZ2UgaWQgKi9cbmV4cG9ydCBjb25zdCBmZXRjaFByb2plY3RJbWFnZUJ5SWQgPSBhc3luYyAoeyBwcm9qZWN0SW1hZ2VJZCB9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9pbWFnZXMvZ2V0LyR7cHJvamVjdEltYWdlSWR9YCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBBZGQgcHJvamVjdEltYWdlKHMpIHwgZXhwZWN0cyBwcm9qZWN0IGlkIGFuZCBhcnJheSBvZiBpbWFnZXMgKGJsb2IpICovXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdEltYWdlcyA9IGFzeW5jICh7IHByb2plY3RJZCwgaW1hZ2VzIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5cdGltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4gcGFyYW1zLmFwcGVuZCgnaW1hZ2VzW10nLCBpbWFnZSkpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvaW1hZ2VzL2FkZC8ke3Byb2plY3RJZH1gLCBwYXJhbXMpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRGVsZXRlIHByb2plY3RJbWFnZShzKSB8IGV4cGVjdHMgcHJvamVjdCBpZCBhbmQgYXJyYXkgb2YgcHJvamVjdEltYWdlSWRzICAqL1xuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3RJbWFnZXMgPSBhc3luYyAoeyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZUlkcyB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuXHRwcm9qZWN0SW1hZ2VJZHMuZm9yRWFjaCgoaWQpID0+IHBhcmFtcy5hcHBlbmQoJ3Byb2plY3RJbWFnZXNbXScsIGlkKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9pbWFnZXMvZGVsZXRlLyR7cHJvamVjdElkfWAsIHBhcmFtcyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBFZGl0IHByb2plY3RJbWFnZSB8IGV4cGVjdHMgZm9ybVJlZiBvYmplY3QgYW5kIHByb2plY3RJbWFnZSBpZCAgKi9cbmV4cG9ydCBjb25zdCBlZGl0UHJvamVjdEltYWdlID0gYXN5bmMgKHsgZm9ybVJlZiwgaWQgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybVJlZi5jdXJyZW50KTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2ltYWdlcy9lZGl0LyR7aWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbi8qIEZldGNoIGN1cnJlbnQgKGxvZ2dlZCBpbikgdXNlciB8IGV4cGVjdHMgdXNlciBpZCAqL1xuZXhwb3J0IGNvbnN0IGZldGNoQ3VycmVudFVzZXIgPSBhc3luYyAoeyB1c2VySWQgfSkgPT4ge1xuXHRsZXQgdXJsID0gJy9hcGkvdXNlcnMvZ2V0Jztcblx0aWYgKHVzZXJJZCkgdXJsID0gYCR7dXJsfS8ke3VzZXJJZH1gO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRmV0Y2ggYWxsIHVzZXJzIGluIGRiICovXG5leHBvcnQgY29uc3QgZmV0Y2hHb2JhbFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdXNlcnMvZ2V0L2FsbCcpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogQWRkIHVzZXIgdG8gcHJvamVjdCB8IGV4cGVjdHMgcHJvamVjdCBpZCBhbmQgdXNlciBlbWFpbCAqL1xuZXhwb3J0IGNvbnN0IGFkZFVzZXIgPSBhc3luYyAoeyBwcm9qZWN0SWQsIGVtYWlsIH0pID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS91c2Vycy9hZGQvJHtwcm9qZWN0SWR9YCwgeyBlbWFpbCB9KTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIERlbGV0ZSB1c2VyIGZyb20gcHJvamVjdCB8IGV4cGVjdHMgcHJvamVjdCBpZCBhbmQgdXNlciBpZCAqL1xuZXhwb3J0IGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAoeyBwcm9qZWN0SWQsIHVzZXJJZCB9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvdXNlcnMvZGVsZXRlLyR7cHJvamVjdElkfWAsIHsgdXNlcklkIH0pO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4sIEZBREVfSU5fVVAgfSBmcm9tICcuL2FuaW1hdGlvbnMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2NvbXBvbmVudHMvdXNlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3goe1xuXHR0aXRsZSxcblx0c3VidGl0bGUsXG5cdFN1YnRpdGxlQ29tcG9uZW50LFxuXHRib3hPcGVuLFxuXHR0b2dnbGVCb3gsXG5cdGNoaWxkcmVuLFxuXHR1c2VyLFxuXHRwb3NpdGlvbiA9IHt9LFxuXHRyZW5kZXJPbkJvZHkgPSB0cnVlLFxuXHRib3hSZWYsXG59KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IHggPSAwLCB5ID0gMCB9ID0gcG9zaXRpb247XG5cblx0LyogVE9ETzogZXNjYXBlIGV2ZW50IGxpc3RlbmVyICovXG5cdGNvbnN0IHJlbmRlciA9ICgpID0+IChcblx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0e2JveE9wZW4gJiYgKFxuXHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdHJlZj17Ym94UmVmfVxuXHRcdFx0XHRcdGxheW91dFxuXHRcdFx0XHRcdHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMiB9fVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YGJveCAke3JlbmRlck9uQm9keSAmJiAnYm94LS1jZW50ZXInfWB9XG5cdFx0XHRcdFx0c3R5bGU9e3sgJy0teCc6IHgsICctLXknOiB5IH19PlxuXHRcdFx0XHRcdHtyZW5kZXJPbkJvZHkgJiYgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYm94LW92ZXJsYXlcIiB7Li4uRkFERV9JTn0gb25DbGljaz17dG9nZ2xlQm94fSAvPn1cblx0XHRcdFx0XHQ8bW90aW9uLmRpdiBrZXk9XCJib3gtY29udGVudFwiIGNsYXNzTmFtZT1cImJveF9fY29udGVudCBib3JkZXIgcC01XCIgey4uLkZBREVfSU5fVVB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hfX2hlYWRlciBkLWZsZXggYWxpZ24taXRlbXMtc3RhcnRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3VzZXIgJiYgPFVzZXIgey4uLnsgdXNlciB9fSBzaXplPVwieGxcIiAvPn1cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGQtZmxleCBmbGV4LWNvbHVtbiAke3VzZXIgJiYgJ21sLTMnfWB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0tbGcgbWItMFwiPnt0aXRsZX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHR7KFN1YnRpdGxlQ29tcG9uZW50IHx8IHN1YnRpdGxlKSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTYwIG1iLTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7U3VidGl0bGVDb21wb25lbnQgPyA8U3VidGl0bGVDb21wb25lbnQgLz4gOiBzdWJ0aXRsZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Nsb3NlIGJ0biBidG4tbGluayBtbC1hdXRvXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVCb3h9PlxuXHRcdFx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xMlwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hfX2JvZHkgZC1mbGV4IG10LTRcIj57Y2hpbGRyZW59PC9kaXY+XG5cdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQpfVxuXHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHQpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRpZiAocmVuZGVyT25Cb2R5KSB7XG5cdFx0cmV0dXJuIGNyZWF0ZVBvcnRhbChyZW5kZXIoKSwgZG9jdW1lbnQuYm9keSk7XG5cdH1cblxuXHRyZXR1cm4gcmVuZGVyKCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSAncmVhY3QtZHJvcHpvbmUnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkSW1hZ2VJY29uIGZyb20gJ2ljb25zL2FkZF9pbWFnZS5zdmcnO1xuaW1wb3J0IHVwbG9hZEltYWdlSWNvbiBmcm9tICdpY29ucy91cGxvYWQuc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuLyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNDQUxFX0ZBREUsIEZBREVfSU4gfSBmcm9tICcuL2FuaW1hdGlvbnMnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGFkZFByb2plY3RJbWFnZXMsIGRlbGV0ZVByb2plY3RJbWFnZXMsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wem9uZSh7IHByb2plY3RJZCwgcG9zaXRpdGlvbiA9ICdsZWZ0JywgY2hpbGRyZW4gfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0Y29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSB9ID0gdXNlRHJvcHpvbmUoe1xuXHRcdGFjY2VwdDogJ2ltYWdlLyonLFxuXHRcdG5vQ2xpY2s6IHRydWUsXG5cdFx0b25Ecm9wOiAoYWNjZXB0ZWRGaWxlcykgPT4gdXBkYXRlUHJvamVjdEltYWdlcygnYWRkJywgeyBpbWFnZXM6IGFjY2VwdGVkRmlsZXMgfSksXG5cdH0pO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBhZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24gPSB1c2VNdXRhdGlvbihhZGRQcm9qZWN0SW1hZ2VzLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKSxcblx0fSk7XG5cblx0Y29uc3QgZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlUHJvamVjdEltYWdlcywge1xuXHRcdG9uU3VjY2VzczogKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSksXG5cdH0pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB1cGRhdGVQcm9qZWN0SW1hZ2VzID0gKGFjdGlvbiwgcHJvcHMpID0+IHtcblx0XHRpZiAoYWN0aW9uID09PSAnYWRkJykgYWRkUHJvamVjdEltYWdlc011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgLi4ucHJvcHMgfSk7XG5cdFx0aWYgKGFjdGlvbiA9PT0gJ2RlbGV0ZScpIGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQsIC4uLnByb3BzIH0pO1xuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZHJvcHpvbmVcIiB7Li4uZ2V0Um9vdFByb3BzKCl9PlxuXHRcdFx0PGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG5cdFx0XHQ8RHJvcHpvbmVJbm5lclxuXHRcdFx0XHRhZGRJbWFnZUxvYWRpbmc9e2FkZFByb2plY3RJbWFnZXNNdXRhdGlvbi5pc0xvYWRpbmd9XG5cdFx0XHRcdHsuLi57IHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzUGFyZW50RHJhZ0FjdGl2ZTogaXNEcmFnQWN0aXZlLCBwb3NpdGl0aW9uIH19XG5cdFx0XHQvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LS1lcXVhbGl6ZWQgZ3V0dGVycy01XCI+XG5cdFx0XHRcdHtjaGlsZHJlbih7IHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzTG9hZGluZzogZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uLmlzTG9hZGluZyB9KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG4vKiBJbm5lciBkcm9wem9uZSAqL1xuY29uc3QgRHJvcHpvbmVJbm5lciA9ICh7IGFkZEltYWdlTG9hZGluZywgdXBkYXRlUHJvamVjdEltYWdlcywgaXNQYXJlbnREcmFnQWN0aXZlLCBwb3NpdGl0aW9uIH0pID0+IHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSB9ID0gdXNlRHJvcHpvbmUoe1xuXHRcdGFjY2VwdDogJ2ltYWdlLyonLFxuXHRcdG5vRHJhZ0V2ZW50c0J1YmJsaW5nOiB0cnVlLFxuXHRcdG9uRHJvcDogKGFjY2VwdGVkRmlsZXMpID0+IHVwZGF0ZVByb2plY3RJbWFnZXMoJ2FkZCcsIHsgaW1hZ2VzOiBhY2NlcHRlZEZpbGVzIH0pLFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3B6b25lXCIgey4uLmdldFJvb3RQcm9wcygpfT5cblx0XHRcdDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0eyhpc0RyYWdBY3RpdmUgfHwgaXNQYXJlbnREcmFnQWN0aXZlKSAmJiAoXG5cdFx0XHRcdFx0PG1vdGlvbi5kaXYgey4uLkZBREVfSU59IGNsYXNzTmFtZT1cImRyb3B6b25lX19vdmVybGF5XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImljb24td3JhcHBlciBpY29uLXdyYXBwZXItLXNlY29uZGFyeVwiIHN0eWxlPXt7ICctLXNpemUnOiA3NSB9fT5cblx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTMwIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXt1cGxvYWRJbWFnZUljb259IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDxtb3Rpb24uYnV0dG9uXG5cdFx0XHRcdHsuLi5TQ0FMRV9GQURFfVxuXHRcdFx0XHRrZXk9XCJhZGQtcHJvamVjdFwiXG5cdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRjbGFzc05hbWU9e2BpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1pbnRlcmFjdGl2ZSBpY29uLXdyYXBwZXItLXNlY29uZGFyeSBidG4gYnRuLWxpbmsgYnRuLS1hZGQgYnRuLS1hZGQtJHtwb3NpdGl0aW9ufWB9XG5cdFx0XHRcdHN0eWxlPXt7ICctLXNpemUnOiA3NSB9fT5cblx0XHRcdFx0PExvYWRpbmdXcmFwcGVyXG5cdFx0XHRcdFx0bG9hZGluZz17YWRkSW1hZ2VMb2FkaW5nfVxuXHRcdFx0XHRcdGNsYXNzZXM9e3sgbG9hZGVyQ2xhc3NlczogJ3Bvc2l0aW9uLWFic29sdXRlIGQtZmxleCB0ZXh0LXNlY29uZGFyeScgfX1cblx0XHRcdFx0XHRsb2FkZXJTaXplPXszMH0+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTMwIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXthZGRJbWFnZUljb259IC8+XG5cdFx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0XHQ8L21vdGlvbi5idXR0b24+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNDQUxFX0ZBREUgfSBmcm9tICcuL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nV3JhcHBlcih7IGxvYWRpbmcsIGNoaWxkcmVuLCBsb2FkZXJTaXplID0gNDAsIGNsYXNzZXMgPSB7fSB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IGxvYWRlckNsYXNzZXMgPSAncG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4JywgZGVmYXVsdENsYXNzZXMgPSAnJyB9ID0gY2xhc3NlcztcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfT5cblx0XHRcdHtsb2FkaW5nID8gKFxuXHRcdFx0XHQ8bW90aW9uLmRpdiBrZXk9XCJsb2FkZXJcIiBjbGFzc05hbWU9e2xvYWRlckNsYXNzZXN9IHsuLi5TQ0FMRV9GQURFfT5cblx0XHRcdFx0XHQ8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cImluaGVyaXRcIiBzaXplPXtsb2FkZXJTaXplfSAvPlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8bW90aW9uLmRpdiBrZXk9XCJkZWZhdWx0XCIgY2xhc3NOYW1lPXtkZWZhdWx0Q2xhc3Nlc30gey4uLlNDQUxFX0ZBREV9PlxuXHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0KX1cblx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOLCBUUkFOU0ZPUk1fVVAgfSBmcm9tIFwiLi9hbmltYXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsKHsgdG9nZ2xlTW9kYWwsIGNoaWxkcmVuLCBkb21FbGVtZW50LCB2YXJpYW50ID0gXCJkZWZhdWx0XCIgfSkge1xuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9XCJjdXN0b20tbW9kYWxcIiBjbGFzc05hbWU9e2BjdXN0b20tbW9kYWwgY3VzdG9tLW1vZGFsLS0ke3ZhcmlhbnR9YH0+XG4gICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX292ZXJsYXlcIiBvbkNsaWNrPXt0b2dnbGVNb2RhbH0gey4uLkZBREVfSU59IC8+XG4gICAgICAgICAgICA8bW90aW9uLmFydGljbGUga2V5PVwiY3VzdG9tLW1vZGFsX19jb250ZW50XCIgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19jb250ZW50XCIgey4uLlRSQU5TRk9STV9VUH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgZC1mbGV4IGZsZXgtZ3Jvdy0xXCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uYXJ0aWNsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIGlmIChkb21FbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwocmVuZGVyKCksIGRvbUVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiByZW5kZXIoKTtcbn1cbiIsIi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VMb2FkZXIoeyBpc0xvYWRpbmcsIGNoaWxkcmVuIH0pIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdHtpc0xvYWRpbmcgPyAoXG5cdFx0XHRcdDxtb3Rpb24uZGl2IHsuLi5GQURFX0lOfT5cblx0XHRcdFx0XHQ8TGluZWFyUHJvZ3Jlc3MgY29sb3I9XCJzZWNvbmRhcnlcIiAvPlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8ZGl2IGtleT1cImNoaWxkcmVuXCI+e2NoaWxkcmVufTwvZGl2PlxuXHRcdFx0KX1cblx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0KTtcbn1cbiIsImNvbnN0IEVBU0UgPSBbMC42NSwgMCwgMC4zNSwgMV07XG5cbmNvbnN0IEZBREVfSU4gPSB7XG5cdGluaXRpYWw6IHtcblx0XHRvcGFjaXR5OiAwLFxuXHR9LFxuXHRhbmltYXRlOiB7XG5cdFx0b3BhY2l0eTogMSxcblx0fSxcblx0ZXhpdDoge1xuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdHRyYW5zaXRpb246IHtcblx0XHRlYXNlOiBFQVNFLFxuXHRcdGR1cmF0aW9uOiAwLjIsXG5cdH0sXG59O1xuXG5jb25zdCBGQURFX0lOX1VQID0ge1xuXHRpbml0aWFsOiB7XG5cdFx0eTogMjAwLFxuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdGFuaW1hdGU6IHtcblx0XHR5OiAwLFxuXHRcdG9wYWNpdHk6IDEsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0Mixcblx0XHRcdHN0aWZmbmVzczogODAwLFxuXHRcdH0sXG5cdH0sXG5cdGV4aXQ6IHtcblx0XHR5OiAyMDAsXG5cdFx0b3BhY2l0eTogMCxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3ByaW5nJyxcblx0XHRcdGRhbXBpbmc6IDQyLFxuXHRcdFx0c3RpZmZuZXNzOiAxMjAwLFxuXHRcdH0sXG5cdH0sXG59O1xuXG5jb25zdCBUUkFOU0ZPUk1fVVAgPSB7XG5cdGluaXRpYWw6IHtcblx0XHR5OiAnMTAwJScsXG5cdH0sXG5cdGFuaW1hdGU6IHtcblx0XHR5OiAnMCUnLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdHR5cGU6ICdzcHJpbmcnLFxuXHRcdFx0ZGFtcGluZzogNDEsXG5cdFx0XHRzdGlmZm5lc3M6IDYwMCxcblx0XHR9LFxuXHR9LFxuXHRleGl0OiB7XG5cdFx0eTogJzEwMCUnLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdHR5cGU6ICdzcHJpbmcnLFxuXHRcdFx0ZGFtcGluZzogNDEsXG5cdFx0XHRzdGlmZm5lc3M6IDEyMDAsXG5cdFx0fSxcblx0fSxcbn07XG5cbmNvbnN0IFNDQUxFX0ZBREUgPSB7XG5cdGluaXRpYWw6IHtcblx0XHRzY2FsZTogMCxcblx0XHRvcGFjaXR5OiAwLFxuXHR9LFxuXHRhbmltYXRlOiB7XG5cdFx0c2NhbGU6IDEsXG5cdFx0b3BhY2l0eTogMSxcblx0fSxcblx0ZXhpdDoge1xuXHRcdHNjYWxlOiAwLFxuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdHRyYW5zaXRpb246IHtcblx0XHRlYXNlOiBFQVNFLFxuXHRcdGR1cmF0aW9uOiAwLjIsXG5cdH0sXG59O1xuXG5jb25zdCBTVEFHR0VSX1VQID0gKGluZGV4ID0gMCkgPT4gKHtcblx0aW5pdGlhbDogeyBvcGFjaXR5OiAwLCB5OiAzNSB9LFxuXHRhbmltYXRlOiB7IG9wYWNpdHk6IDEsIHk6IDAsIHRyYW5zaXRpb246IHsgdHlwZTogJ3NwcmluZycsIGRhbXBpbmc6IDMwLCBzdGlmZm5lc3M6IDQ1MCwgZGVsYXk6IGluZGV4ICogMC4wMzUgfSB9LFxuXHRleGl0OiB7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjI1LCB0cmFuc2l0aW9uOiB7IHR5cGU6ICdzcHJpbmcnLCBkYW1waW5nOiAzMCwgc3RpZmZuZXNzOiA2MDAgfSB9LFxufSk7XG5cbmNvbnN0IFNUQUdHRVJfTEVGVCA9IChpbmRleCA9IDApID0+ICh7XG5cdGluaXRpYWw6IHsgb3BhY2l0eTogMCwgeDogMTAgfSxcblx0YW5pbWF0ZTogeyBvcGFjaXR5OiAxLCB4OiAwLCB0cmFuc2l0aW9uOiB7IHR5cGU6ICdzcHJpbmcnLCBkYW1waW5nOiAzMCwgc3RpZmZuZXNzOiAzMDAsIGRlbGF5OiBpbmRleCAqIDAuMDM1IH0gfSxcblx0ZXhpdDogeyBvcGFjaXR5OiAwLCB4OiAxMCwgdHJhbnNpdGlvbjogeyB0eXBlOiAnc3ByaW5nJywgZGFtcGluZzogMzAsIHN0aWZmbmVzczogNjAwIH0gfSxcbn0pO1xuXG5leHBvcnQgeyBGQURFX0lOLCBGQURFX0lOX1VQLCBUUkFOU0ZPUk1fVVAsIFNDQUxFX0ZBREUsIFNUQUdHRVJfVVAsIFNUQUdHRVJfTEVGVCB9O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBEcm9wem9uZSB9IGZyb20gJy4vRHJvcHpvbmUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RhbCB9IGZyb20gJy4vTW9kYWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb3ggfSBmcm9tICcuL0JveCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExvYWRpbmdXcmFwcGVyIH0gZnJvbSAnLi9Mb2FkaW5nV3JhcHBlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhZ2VMb2FkZXIgfSBmcm9tICcuL1BhZ2VMb2FkZXInO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBUUkFOU0ZPUk1fVVAgfSBmcm9tICcuLi8uLi9jb21tb24vYW5pbWF0aW9ucyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IExvYWRpbmdXcmFwcGVyIH0gZnJvbSAnLi4vLi4vY29tbW9uJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjdGlvbk1lbnUoeyBzZWxlY3RlZCwgcmVzZXRTZWxlY3RlZCwgYWN0aW9ucyB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXYgey4uLlRSQU5TRk9STV9VUH0gY2xhc3NOYW1lPVwiYmFyIGJhci0tcHJvamVjdFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJhcl9fYnRuIGJ0biBidG4tbGluayBkLWlubGluZS1mbGV4IHRleHQtd2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtyZXNldFNlbGVjdGVkfT5cblx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTE0XCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1sLTIgbWItMFwiPntzZWxlY3RlZC5sZW5ndGh9IHNlbGVjdGVkPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gbWwtYXV0b1wiPlxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImJhcl9fbGlzdCBsaXN0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0e2FjdGlvbnMubWFwKFxuXHRcdFx0XHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoZW1lLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNQZXJtaXNzaW9uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uU2l6ZSA9IDEyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtdXRhdGlvbiA9ICgpID0+IHt9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0xvYWRpbmcgPSBmYWxzZSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb25JbmRleFxuXHRcdFx0XHRcdFx0XHRcdCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGhhc1Blcm1pc3Npb24uaW5jbHVkZXModXNlclJvbGUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17YWN0aW9uSW5kZXh9IGNsYXNzTmFtZT1cImxpc3RfX2l0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmFyX19idG4gYnRuIGJ0bi1saW5rIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXttdXRhdGlvbn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS0ke3RoZW1lfSBpY29uLXdyYXBwZXItLWludGVyYWN0aXZlYH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExvYWRpbmdXcmFwcGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkaW5nPXtpc0xvYWRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkZXJTaXplPXsxMn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzZXM9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9hZGVyQ2xhc3NlczogYHBvc2l0aW9uLWFic29sdXRlIGQtZmxleCB0ZXh0LSR7dGhlbWV9YCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdyYXBwZXI9XCJzdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BpY29uIGljb24tLSR7aWNvblNpemV9IHRleHQtJHt0aGVtZX1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2ljb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJidG5fX3RleHQgdGV4dC13aGl0ZSBtbC0yXCI+e3RpdGxlfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEFjdGlvbk1lbnUgfSBmcm9tICcuL0FjdGlvbk1lbnUnO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vY29tbW9uJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgZWRpdEljb24gZnJvbSAnaWNvbnMvZWRpdC5zdmcnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IEVkaXRhYmxlQm9keSBmcm9tICcuL0VkaXRhYmxlQm9keSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRhYmxlKHsgaW5wdXRUeXBlLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtib3hPcGVuLCBzZXRCb3hPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB0aXRsZSA9IGBFZGl0aW5nICR7aW5wdXRUeXBlfWA7XG5cdGNvbnN0IHN1YnRpdGxlID0gYFNhdmUgd2hlbiByZWFkeWA7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZUJveCA9ICgpID0+IHNldEJveE9wZW4oIWJveE9wZW4pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZWRpdGFibGUgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJlZGl0YWJsZV9fY29udGVudFwiPntjaGlsZHJlbn08L2Rpdj5cblx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiAoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZWRpdGFibGVfX3RvZ2dsZSBidG4gYnRuLWxpbmsgaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0tc2Vjb25kYXJ5IGljb24td3JhcHBlci0taW50ZXJhY3RpdmUgc3RyZXRjaGVkLWxpbmsgbWwtM1wiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVCb3h9XG5cdFx0XHRcdFx0XHRzdHlsZT17eyAnLS1zaXplJzogMjUgfX0+XG5cdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTAgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e2VkaXRJY29ufSAvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxCb3ggey4uLnsgdGl0bGUsIHN1YnRpdGxlLCBib3hPcGVuLCB0b2dnbGVCb3ggfX0+XG5cdFx0XHRcdFx0XHQ8RWRpdGFibGVCb2R5IHsuLi57IHRpdGxlLCBpbnB1dFR5cGUsIHRvZ2dsZUJveCwgLi4ucmVzdCB9fSAvPlxuXHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHQ8Lz5cblx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRleHRhcmVhQXV0b3NpemUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIEVsZW1lbnRzICovXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9lbGVtZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRhYmxlQm9keSh7XG5cdHRpdGxlLFxuXHRpbnB1dFR5cGUsXG5cdHRvZ2dsZUJveCxcblx0Y29udGVudCxcblx0bXV0YXRpb24sXG5cdG11dGF0aW9uSWQsXG5cdG11dGF0aW9uT25TdWNjZXNzLFxufSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGNvbnRlbnQpO1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgZm9ybVJlZiA9IHVzZVJlZigpO1xuXHRjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIEVmZmVjdHMgKi9cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoaW5wdXRSZWY/LmN1cnJlbnQpIGlucHV0UmVmPy5jdXJyZW50Py5zZWxlY3QoKTtcblx0fSwgW10pO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBlZGl0TXV0YXRpb24gPSB1c2VNdXRhdGlvbihtdXRhdGlvbiwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0bXV0YXRpb25PblN1Y2Nlc3MoKTtcblx0XHRcdHRvZ2dsZUJveCgpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxmb3JtXG5cdFx0XHRyZWY9e2Zvcm1SZWZ9XG5cdFx0XHRjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtZ3Jvdy0xXCJcblx0XHRcdG9uU3VibWl0PXsoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZWRpdE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYsIGlkOiBtdXRhdGlvbklkIH0pO1xuXHRcdFx0fX0+XG5cdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9e2lucHV0VHlwZX0+XG5cdFx0XHRcdHt0aXRsZX1cblx0XHRcdDwvbGFiZWw+XG5cdFx0XHQ8VGV4dGFyZWFBdXRvc2l6ZVxuXHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIGZvcm0tY29udHJvbC0tdGV4dFwiXG5cdFx0XHRcdGlkPXtpbnB1dFR5cGV9XG5cdFx0XHRcdG5hbWU9e2lucHV0VHlwZX1cblx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBzZXRWYWx1ZSh2YWx1ZSl9XG5cdFx0XHRcdHJlZj17aW5wdXRSZWZ9XG5cdFx0XHQvPlxuXHRcdFx0PEJ1dHRvblxuXHRcdFx0XHR0aXRsZT1cIlNhdmVcIlxuXHRcdFx0XHRleHRlbnNpb25DbGFzc2VzPVwibXQtNCB3LTUwIGp1c3RpZnktY29udGVudC1jZW50ZXJcIlxuXHRcdFx0XHRpc0xvYWRpbmc9e2VkaXRNdXRhdGlvbi5pc0xvYWRpbmd9XG5cdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0Lz5cblx0XHQ8L2Zvcm0+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEVkaXRhYmxlIH0gZnJvbSAnLi9FZGl0YWJsZSc7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlckFkZCB9IGZyb20gJy4uL3VzZXItYWRkJztcbmltcG9ydCB7IFVzZXJzIH0gZnJvbSAnLi4vdXNlcnMnO1xuaW1wb3J0IHsgRWRpdGFibGUgfSBmcm9tICcuLi9lZGl0YWJsZSc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBzdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGVkaXRQcm9qZWN0LCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdERldGFpbEhlYWRlcih7IHRpdGxlLCBkZXNjcmlwdGlvbiwgdXNlcnMsIGlkLCBhdXRob3IsIGVtYWlsIH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHByb2plY3QgPSB7IGlkLCBhdXRob3IsIGVtYWlsIH07XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChzdGF0aWNDb250ZXh0KTtcblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBtdXRhdGlvbk9uU3VjY2VzcyA9ICgpID0+IHtcblx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBpZF0pO1xuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTZcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy02XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiAnZWRpdGFibGUnfSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJgfT5cblx0XHRcdFx0XHQ8RWRpdGFibGVcblx0XHRcdFx0XHRcdGlucHV0VHlwZT1cInRpdGxlXCJcblx0XHRcdFx0XHRcdGNvbnRlbnQ9e3RpdGxlfVxuXHRcdFx0XHRcdFx0bXV0YXRpb249e2VkaXRQcm9qZWN0fVxuXHRcdFx0XHRcdFx0bXV0YXRpb25JZD17aWR9XG5cdFx0XHRcdFx0XHRtdXRhdGlvbk9uU3VjY2Vzcz17bXV0YXRpb25PblN1Y2Nlc3N9PlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImg1IG1iLTAgdGV4dC13aGl0ZVwiPnt0aXRsZSA/IHRpdGxlIDogJ0FkZCBhIG5pY2UgdGl0bGUnfTwvaDE+XG5cdFx0XHRcdFx0PC9FZGl0YWJsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiAnZWRpdGFibGUnfSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJgfT5cblx0XHRcdFx0XHQ8RWRpdGFibGVcblx0XHRcdFx0XHRcdGlucHV0VHlwZT1cImRlc2NyaXB0aW9uXCJcblx0XHRcdFx0XHRcdGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdFx0bXV0YXRpb249e2VkaXRQcm9qZWN0fVxuXHRcdFx0XHRcdFx0bXV0YXRpb25JZD17aWR9XG5cdFx0XHRcdFx0XHRtdXRhdGlvbk9uU3VjY2Vzcz17bXV0YXRpb25PblN1Y2Nlc3N9PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNzAgbWItMFwiPlxuXHRcdFx0XHRcdFx0XHR7ZGVzY3JpcHRpb24gPyAoXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+e2Rlc2NyaXB0aW9ufTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS00MFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e1wiV2hhdCdzIHRoaXMgcHJvamVjdCBhYm91dD8gU2V0IHRoZSBjb250ZXh0LCB0aGUgZ29hbHMsIHRoZSBjb25zdHJhaW50c1wifVxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L0VkaXRhYmxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmUgbWwtYXV0b1wiPlxuXHRcdFx0XHQ8VXNlcnMgey4uLnsgdXNlcnMsIHByb2plY3QgfX0gc2l6ZT1cImxnXCIgLz5cblx0XHRcdFx0e3VzZXJSb2xlID09PSAnYWRtaW4nICYmIDxVc2VyQWRkIHsuLi57IHVzZXJzLCBwcm9qZWN0IH19IC8+fVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEVkaXRhYmxlIH0gZnJvbSAnLi4vZWRpdGFibGUnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjaGVja0ljb24gZnJvbSAnaWNvbnMvY2hlY2suc3ZnJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4uLy4uL2NvbW1vbi9hbmltYXRpb25zJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBlZGl0UHJvamVjdEltYWdlLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdERldGFpbEltYWdlKHsgcHJvamVjdEltYWdlLCBwcm9qZWN0SWQsIHNlbGVjdGVkLCB1cGRhdGVTZWxlY3RlZCB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IGlkOiBwcm9qZWN0SW1hZ2VJZCwgdGl0bGUsIHBoYXNlcyA9IFtdIH0gPSBwcm9qZWN0SW1hZ2U7XG5cdGNvbnN0IHsgaW1hZ2UgfSA9IHBoYXNlc1twaGFzZXMubGVuZ3RoIC0gMV0gfHwge307XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBtdXRhdGlvbk9uU3VjY2VzcyA9ICgpID0+IHtcblx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9e2BjYXJkIGNhcmQtLWxpbmsgY2FyZC0tcHJvZHVjdCAke3NlbGVjdGVkLmluY2x1ZGVzKHByb2plY3RJbWFnZUlkKSAmJiAnaXMtc2VsZWN0ZWQnfWB9PlxuXHRcdFx0PExpbmsgdG89e2AvcHJvamVjdHMvJHtwcm9qZWN0SWR9L3Jldmlldy8ke3Byb2plY3RJbWFnZUlkfSR7bG9jYXRpb24uc2VhcmNofWB9IHRpdGxlPXt0aXRsZX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9faW1hZ2UgYm9yZGVyIG0tMlwiPlxuXHRcdFx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPXtpbWFnZX0gc3JjU2V0PXtgJHtpbWFnZX0gMnhgfSBhbHQ9e3RpdGxlfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGluaz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG5cdFx0XHRcdDxFZGl0YWJsZVxuXHRcdFx0XHRcdGlucHV0VHlwZT1cInRpdGxlXCJcblx0XHRcdFx0XHRwcm9qZWN0SWQ9e3Byb2plY3RJZH1cblx0XHRcdFx0XHRjb250ZW50PXt0aXRsZX1cblx0XHRcdFx0XHRtdXRhdGlvbj17ZWRpdFByb2plY3RJbWFnZX1cblx0XHRcdFx0XHRtdXRhdGlvbklkPXtwcm9qZWN0SW1hZ2VJZH1cblx0XHRcdFx0XHR7Li4ueyBtdXRhdGlvbk9uU3VjY2VzcyB9fT5cblx0XHRcdFx0XHQ8bW90aW9uLnAgey4uLkZBREVfSU59IGNsYXNzTmFtZT1cIm1iLTBcIj5cblx0XHRcdFx0XHRcdHt0aXRsZX1cblx0XHRcdFx0XHQ8L21vdGlvbi5wPlxuXHRcdFx0XHQ8L0VkaXRhYmxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdFwiPlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FyZF9fc2VsZWN0LXRvZ2dsZVwiXG5cdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0dXBkYXRlU2VsZWN0ZWQocHJvamVjdEltYWdlSWQpO1xuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiY2FyZF9fc2VsZWN0LWljb24gaWNvbiBpY29uLS04XCIgc3JjPXtjaGVja0ljb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9hcnRpY2xlPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTVEFHR0VSX1VQIH0gZnJvbSAnLi4vLi4vY29tbW9uL2FuaW1hdGlvbnMnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgUHJvamVjdERldGFpbEltYWdlIGZyb20gJy4vUHJvamVjdERldGFpbEltYWdlJztcbmltcG9ydCB7IEFjdGlvbk1lbnUgfSBmcm9tICcuLi9hY3Rpb24tbWVudSc7XG5pbXBvcnQgeyBEcm9wem9uZSB9IGZyb20gJy4uLy4uL2NvbW1vbic7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdEltYWdlcywgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0RGV0YWlsSW1hZ2VzKHsgcHJvamVjdEltYWdlcywgcHJvamVjdElkIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQsIHJlc2V0U2VsZWN0ZWQgfSA9IHVzZVNlbGVjdGlvbigpO1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cdGNvbnN0IHsgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGRlbGV0ZVByb2plY3RJbWFnZXMsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0pO1xuXHRcdFx0cmVzZXRTZWxlY3RlZCgpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCBhY3Rpb25zID0gW1xuXHRcdHtcblx0XHRcdHRpdGxlOiAnUmVtb3ZlJyxcblx0XHRcdHRoZW1lOiAnZGFuZ2VyJyxcblx0XHRcdGhhc1Blcm1pc3Npb246IFsnYWRtaW4nXSxcblx0XHRcdGljb246IGRlbGV0ZUljb24sXG5cdFx0XHRpY29uU2l6ZTogMTAsXG5cdFx0XHRtdXRhdGlvbjogKCkgPT4gZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgcHJvamVjdEltYWdlSWRzOiBzZWxlY3RlZCB9KSxcblx0XHRcdGlzTG9hZGluZzogZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uLmlzTG9hZGluZyxcblx0XHR9LFxuXHRdO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZC5sZW5ndGggPiAwICYmICdoYXMtc2VsZWN0aW9ucyd9YH0+XG5cdFx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyA/IChcblx0XHRcdFx0XHQ8RHJvcHpvbmUgey4uLnsgcHJvamVjdElkLCBwcm9qZWN0SW1hZ2VzLCBwb3NpdGl0aW9uOiAncmlnaHQnIH19PlxuXHRcdFx0XHRcdFx0eygpID0+IDxJbWFnZXMgey4uLnsgcHJvamVjdEltYWdlcywgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfX0gLz59XG5cdFx0XHRcdFx0PC9Ecm9wem9uZT5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTVcIj5cblx0XHRcdFx0XHRcdDxJbWFnZXMgey4uLnsgcHJvamVjdEltYWdlcywgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfX0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e3NlbGVjdGVkLmxlbmd0aCA+IDAgJiYgPEFjdGlvbk1lbnUgey4uLnsgc2VsZWN0ZWQsIHJlc2V0U2VsZWN0ZWQsIGFjdGlvbnMgfX0gLz59XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHQ8Lz5cblx0KTtcbn1cblxuY29uc3QgSW1hZ2VzID0gKHsgcHJvamVjdEltYWdlcywgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHR7cHJvamVjdEltYWdlcy5tYXAoKHByb2plY3RJbWFnZSwgcHJvamVjdEltYWdlSW5kZXgpID0+IChcblx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHR7Li4uU1RBR0dFUl9VUChwcm9qZWN0SW1hZ2VJbmRleCl9XG5cdFx0XHRcdFx0a2V5PXtwcm9qZWN0SW1hZ2UuaWR9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC14bC0zIGNvbC14eGwtMlwiXG5cdFx0XHRcdFx0bGF5b3V0PlxuXHRcdFx0XHRcdDxQcm9qZWN0RGV0YWlsSW1hZ2Ugey4uLnsgcHJvamVjdEltYWdlLCBwcm9qZWN0SWQsIHNlbGVjdGVkLCB1cGRhdGVTZWxlY3RlZCB9fSAvPlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQpKX1cblx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0KTtcbn07XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3REZXRhaWxIZWFkZXIgfSBmcm9tICcuL1Byb2plY3REZXRhaWxIZWFkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0RGV0YWlsSW1hZ2VzIH0gZnJvbSAnLi9Qcm9qZWN0RGV0YWlsSW1hZ2VzJztcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQcm9qZWN0SW1hZ2UgfSBmcm9tICcuLyc7XG5pbXBvcnQgeyBVc2VycyB9IGZyb20gJy4uL3VzZXJzJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2hlY2tJY29uIGZyb20gJ2ljb25zL2NoZWNrLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoeyBwcm9qZWN0LCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyB0aXRsZSwgcHJvamVjdEltYWdlcywgdXNlcnMsIGF1dGhvciwgaWQgfSA9IHByb2plY3Q7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PExpbmtcblx0XHRcdHRvPXtgcHJvamVjdHMvJHtpZH0ke2xvY2F0aW9uLnNlYXJjaH1gfVxuXHRcdFx0dGl0bGU9e3RpdGxlfVxuXHRcdFx0Y2xhc3NOYW1lPXtgY2FyZCBjYXJkLS1saW5rIGNhcmQtLXByb2R1Y3QgJHtzZWxlY3RlZC5pbmNsdWRlcyhpZCkgJiYgJ2lzLXNlbGVjdGVkJ31gfT5cblx0XHRcdDxQcm9qZWN0SW1hZ2Ugey4uLnsgcHJvamVjdEltYWdlcyB9fSAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW5cIj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi0yXCI+e3RpdGxlID8gdGl0bGUgOiAnQWRkIGEgbmljZSB0aXRsZSd9PC9wPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PFVzZXJzIHsuLi57IHVzZXJzLCBwcm9qZWN0OiB7IGF1dGhvciB9LCBsYXlvdXQ6ICdtaW5pbWFsJyB9fSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX19zZWxlY3RcIj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC10b2dnbGVcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHVwZGF0ZVNlbGVjdGVkKGlkKTtcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC1pY29uIGljb24gaWNvbi0tOFwiIHNyYz17Y2hlY2tJY29ufSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvTGluaz5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQcm9qZWN0TW9kYWwgfSBmcm9tICcuLyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZFByb2plY3RJY29uIGZyb20gJ2ljb25zL2FkZF9wcm9qZWN0LnN2Zyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgYWRkUHJvamVjdCwgUVVFUllfS0VZUywgZWRpdFByb2plY3QsIGZldGNoUHJvamVjdEJ5SWQgfSBmcm9tICcuLi8uLi9hcGknO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTQ0FMRV9GQURFIH0gZnJvbSAnLi4vLi4vY29tbW9uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0QWRkKHsgc2V0TmV3UHJvamVjdElkIH0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW3Byb2plY3RJZCwgc2V0UHJvamVjdElkXSA9IHVzZVN0YXRlKG51bGwpO1xuXHRjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgZGF0YTogcHJvamVjdCB9ID0gdXNlUXVlcnkoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSwgKCkgPT4gZmV0Y2hQcm9qZWN0QnlJZCh7IHByb2plY3RJZCB9KSwge1xuXHRcdGVuYWJsZWQ6ICEhcHJvamVjdElkLFxuXHR9KTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldE5ld1Byb2plY3RJZChwcm9qZWN0SWQpO1xuXHR9LCBbcHJvamVjdElkXSk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGFkZE11dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkUHJvamVjdCwge1xuXHRcdG9uU3VjY2VzczogKHsgaWQgfSkgPT4gc2V0UHJvamVjdElkKGlkKSxcblx0fSk7XG5cblx0Y29uc3QgZWRpdE11dGF0aW9uID0gdXNlTXV0YXRpb24oZWRpdFByb2plY3QsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IGludmFsaWRhdGVQcm9qZWN0KCksXG5cdH0pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHtcblx0XHRzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbik7XG5cblx0XHQvKiBNdXRhdGUgb24gbW9kYWwgb3BlbiAqL1xuXHRcdGlmICghbW9kYWxPcGVuKSBhZGRNdXRhdGlvbi5tdXRhdGUoKTtcblxuXHRcdC8qIFJlc2V0IGlkIG9uIGNsb3NlIG1vZGFsICovXG5cdFx0aWYgKG1vZGFsT3Blbikge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNldFByb2plY3RJZChudWxsKTtcblx0XHRcdH0sIDI1MCk7XG5cblx0XHRcdGludmFsaWRhdGVQcm9qZWN0KCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHVwZGF0ZVByb2plY3QgPSAoZm9ybVJlZikgPT4gZWRpdE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYsIGlkOiBwcm9qZWN0SWQgfSk7XG5cdGNvbnN0IGludmFsaWRhdGVQcm9qZWN0ID0gKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8bW90aW9uLmJ1dHRvblxuXHRcdFx0XHR7Li4uU0NBTEVfRkFERX1cblx0XHRcdFx0a2V5PVwiYWRkLXByb2plY3RcIlxuXHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0taW50ZXJhY3RpdmUgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnkgYnRuIGJ0bi1saW5rIGJ0bi0tYWRkIGJ0bi0tYWRkLXJpZ2h0XCJcblx0XHRcdFx0c3R5bGU9e3sgJy0tc2l6ZSc6IDc1IH19XG5cdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfT5cblx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTMwIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXthZGRQcm9qZWN0SWNvbn0gLz5cblx0XHRcdDwvbW90aW9uLmJ1dHRvbj5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHttb2RhbE9wZW4gJiYgPFByb2plY3RNb2RhbCB7Li4ueyBwcm9qZWN0LCB1cGRhdGVQcm9qZWN0LCB0b2dnbGVNb2RhbCB9fSAvPn1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZEltYWdlSWNvbiBmcm9tICdpY29ucy9hZGRfaW1hZ2Uuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdEltYWdlKHsgcHJvamVjdEltYWdlcyB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IHBoYXNlcyA9IFtdLCB0aXRsZSB9ID0gcHJvamVjdEltYWdlc1swXSB8fCB7fTtcblx0Y29uc3QgeyBpbWFnZSB9ID0gcGhhc2VzW3BoYXNlcy5sZW5ndGggLSAxXSB8fCB7fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ltYWdlIGJvcmRlciBtLTJcIj5cblx0XHRcdHtpbWFnZSAmJiA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz17aW1hZ2V9IHNyY1NldD17YCR7aW1hZ2V9IDJ4YH0gYWx0PXt0aXRsZX0gLz59XG5cdFx0XHR7IWltYWdlICYmIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS00OCB0ZXh0LW11dGVkLS00MFwiIHNyYz17YWRkSW1hZ2VJY29ufSAvPn1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dGFyZWFBdXRvc2l6ZSc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTW9kYWwsIERyb3B6b25lLCBMb2FkaW5nV3JhcHBlciB9IGZyb20gJy4uLy4uL2NvbW1vbic7XG5pbXBvcnQgeyBVc2VycyB9IGZyb20gJy4uL3VzZXJzJztcbmltcG9ydCB7IFVzZXJBZGQgfSBmcm9tICcuLi91c2VyLWFkZCc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNUQUdHRVJfVVAgfSBmcm9tICcuLi8uLi9jb21tb24vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RNb2RhbCh7IHByb2plY3QgPSB7fSwgdXBkYXRlUHJvamVjdCwgdG9nZ2xlTW9kYWwgfSkge1xuXHQvKiBDb25zdGFudHMgICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJZCA9IG51bGwsIHRpdGxlID0gJycsIHByb2plY3RJbWFnZXMgPSBbXSwgdXNlcnMgPSBbXSB9ID0gcHJvamVjdDtcblxuXHQvKiBSZWZzICovXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8TW9kYWwgey4uLnsgdG9nZ2xlTW9kYWwgfX0gZG9tRWxlbWVudD17ZG9jdW1lbnQuYm9keX0+XG5cdFx0XHQ8Zm9ybVxuXHRcdFx0XHRyZWY9e2Zvcm1SZWZ9XG5cdFx0XHRcdG1ldGhvZD1cIlBPU1RcIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Zvcm1cIlxuXHRcdFx0XHRvblN1Ym1pdD17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0b2dnbGVNb2RhbCgpO1xuXHRcdFx0XHR9fT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2hlYWRlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHB0LTYgcHQtbWQtMTIgcGItM1wiPlxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInByb2plY3RUaXRsZVwiPlxuXHRcdFx0XHRcdFx0e3RpdGxlfVxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLS1jbGVhciB0ZXh0LS14bFwiXG5cdFx0XHRcdFx0XHRpZD1cInByb2plY3RUaXRsZVwiXG5cdFx0XHRcdFx0XHRuYW1lPVwidGl0bGVcIlxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJUaGUgcHJvamVjdCBuYW1lXCJcblx0XHRcdFx0XHRcdG9uQmx1cj17KCkgPT4gdXBkYXRlUHJvamVjdChmb3JtUmVmKX1cblx0XHRcdFx0XHRcdGF1dG9Gb2N1c1xuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Nsb3NlIGJ0biBidG4tbGluayBtbC1hdXRvXCJcblx0XHRcdFx0XHRcdGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcblx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9XCJDbG9zZVwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVNb2RhbH1cblx0XHRcdFx0XHRcdHRhYkluZGV4PVwiLTFcIj5cblx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2JvZHkgcHQtMyBwYi0xMlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtMlwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJwcm9qZWN0RGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHRcdFx0XHR7YFdoYXQncyB0aGlzIHByb2plY3QgYWJvdXQ/YH1cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PFRleHRhcmVhQXV0b3NpemVcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLS10ZXh0IGZvcm0tY29udHJvbC0tY2xlYXIgbWItMTBcIlxuXHRcdFx0XHRcdFx0XHRcdGlkPVwicHJvamVjdERlc2NyaXB0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGVzY3JpcHRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiV2hhdCdzIHRoaXMgcHJvamVjdCBhYm91dD9cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQmx1cj17KCkgPT4gdXBkYXRlUHJvamVjdChmb3JtUmVmKX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmUgbWwtYXV0b1wiPlxuXHRcdFx0XHRcdFx0XHQ8VXNlcnMgey4uLnsgdXNlcnMsIHByb2plY3QgfX0gc2l6ZT1cImxnXCIgLz5cblx0XHRcdFx0XHRcdFx0PFVzZXJBZGQgey4uLnsgdXNlcnMsIHByb2plY3QgfX0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxEcm9wem9uZSB7Li4ueyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZXMgfX0+XG5cdFx0XHRcdFx0XHR7KHsgdXBkYXRlUHJvamVjdEltYWdlcywgaXNMb2FkaW5nIH0pID0+IChcblx0XHRcdFx0XHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0XHRcdFx0XHR7cHJvamVjdEltYWdlcy5tYXAoKHByb2plY3RJbWFnZSwgcHJvamVjdEltYWdlSW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdDxEcm9wem9uZUltYWdlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17cHJvamVjdEltYWdlLmlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ueyBwcm9qZWN0SW1hZ2UsIHByb2plY3RJbWFnZUluZGV4LCB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc0xvYWRpbmcgfX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L0Ryb3B6b25lPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Zvb3RlciBwYi02IHBiLW1kLTEyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0wIHctMTAwXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctMSBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2J0biBidG4gYnRuLWJsb2NrIGJ0bi1zZWNvbmRhcnkgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG1vdGlvbi5zcGFuIGNsYXNzTmFtZT1cImJ0bi10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5TYXZlPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvbW90aW9uLnNwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvTW9kYWw+XG5cdCk7XG59XG5cbmNvbnN0IERyb3B6b25lSW1hZ2UgPSAoeyBwcm9qZWN0SW1hZ2UsIHByb2plY3RJbWFnZUluZGV4LCB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc0xvYWRpbmcgfSkgPT4ge1xuXHRjb25zdCB7IHRpdGxlLCBpZCwgcGhhc2VzID0gW10gfSA9IHByb2plY3RJbWFnZTtcblx0Y29uc3QgeyBpbWFnZSB9ID0gcGhhc2VzW3BoYXNlcy5sZW5ndGggLSAxXSB8fCB7fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRsYXlvdXRcblx0XHRcdHsuLi5TVEFHR0VSX1VQKHByb2plY3RJbWFnZUluZGV4KX1cblx0XHRcdGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtMyBjb2wteHhsLTJcIlxuXHRcdFx0a2V5PXtpZH0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3B6b25lX19jb250YWluZXJcIj5cblx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJkcm9wem9uZV9faW1hZ2UgaW1nLWZsdWlkXCIgc3JjPXtpbWFnZX0gYWx0PXt0aXRsZX0gLz5cblx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBkcm9wem9uZV9faW1hZ2UtZGVsZXRlIHAtMFwiXG5cdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdHVwZGF0ZVByb2plY3RJbWFnZXMoJ2RlbGV0ZScsIHsgcHJvamVjdEltYWdlSWRzOiBbaWRdIH0pO1xuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImRyb3B6b25lX19pbWFnZS1kZWxldGUtaWNvbiBpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1kYW5nZXIgbXgtYXV0b1wiXG5cdFx0XHRcdFx0XHRzdHlsZT17eyAnLS1zaXplJzogNTAgfX0+XG5cdFx0XHRcdFx0XHQ8TG9hZGluZ1dyYXBwZXJcblx0XHRcdFx0XHRcdFx0bG9hZGluZz17aXNMb2FkaW5nfVxuXHRcdFx0XHRcdFx0XHRsb2FkZXJTaXplPXsyMH1cblx0XHRcdFx0XHRcdFx0Y2xhc3Nlcz17e1xuXHRcdFx0XHRcdFx0XHRcdGxvYWRlckNsYXNzZXM6ICdwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXggdGV4dC1kYW5nZXInLFxuXHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTE0IHRleHQtZGFuZ2VyIG10LTBcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cblx0XHRcdFx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLyc7XG5pbXBvcnQgeyBBY3Rpb25NZW51IH0gZnJvbSAnLi4vYWN0aW9uLW1lbnUnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOLCBTVEFHR0VSX1VQIH0gZnJvbSAnLi4vLi4vY29tbW9uL2FuaW1hdGlvbnMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcbmltcG9ydCBsZWF2ZUljb24gZnJvbSAnaWNvbnMvbGVhdmUuc3ZnJztcbmltcG9ydCBhcmNoaXZlSWNvbiBmcm9tICdpY29ucy9hcmNoaXZlLnN2Zyc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdHMsIGxlYXZlUHJvamVjdHMsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJlc3VsdHMoeyBwcm9qZWN0cywgbmV3UHJvamVjdElkIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQsIHJlc2V0U2VsZWN0ZWQgfSA9IHVzZVNlbGVjdGlvbigpO1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGxlYXZlUHJvamVjdHNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGxlYXZlUHJvamVjdHMsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuUFJPSkVDVF9CWV9VU0VSKTtcblx0XHRcdHJlc2V0U2VsZWN0ZWQoKTtcblx0XHR9LFxuXHR9KTtcblxuXHRjb25zdCBkZWxldGVQcm9qZWN0c011dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlUHJvamVjdHMsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuUFJPSkVDVF9CWV9VU0VSKTtcblx0XHRcdHJlc2V0U2VsZWN0ZWQoKTtcblx0XHR9LFxuXHR9KTtcblxuXHRjb25zdCBhY3Rpb25zID0gW1xuXHRcdHtcblx0XHRcdHRpdGxlOiAnTGVhdmUnLFxuXHRcdFx0dGhlbWU6ICd3YXJuaW5nJyxcblx0XHRcdGhhc1Blcm1pc3Npb246IFsndXNlcicsICdiYXNpYyddLFxuXHRcdFx0aWNvbjogbGVhdmVJY29uLFxuXHRcdFx0bXV0YXRpb246ICgpID0+IGxlYXZlUHJvamVjdHNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWRzOiBzZWxlY3RlZCwgdXNlcklkOiBjdXJyZW50VXNlci5pZCB9KSxcblx0XHRcdGlzTG9hZGluZzogbGVhdmVQcm9qZWN0c011dGF0aW9uLmlzTG9hZGluZyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiAnQXJjaGl2ZScsXG5cdFx0XHR0aGVtZTogJ3NlY29uZGFyeScsXG5cdFx0XHRoYXNQZXJtaXNzaW9uOiBbJ2FkbWluJ10sXG5cdFx0XHRpY29uOiBhcmNoaXZlSWNvbixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiAnUmVtb3ZlJyxcblx0XHRcdHRoZW1lOiAnZGFuZ2VyJyxcblx0XHRcdGhhc1Blcm1pc3Npb246IFsnYWRtaW4nXSxcblx0XHRcdGljb246IGNsb3NlSWNvbixcblx0XHRcdGljb25TaXplOiAxMCxcblx0XHRcdG11dGF0aW9uOiAoKSA9PiBkZWxldGVQcm9qZWN0c011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZHM6IHNlbGVjdGVkIH0pLFxuXHRcdFx0aXNMb2FkaW5nOiBkZWxldGVQcm9qZWN0c011dGF0aW9uLmlzTG9hZGluZyxcblx0XHR9LFxuXHRdO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8aDEgY2xhc3NOYW1lPVwiaDUgdGV4dC13aGl0ZSBtYi02XCI+WW91ciBwcm9qZWN0czwvaDE+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7cHJvamVjdHMubGVuZ3RoID09PSAwICYmIChcblx0XHRcdFx0XHQ8bW90aW9uLnAgey4uLkZBREVfSU59IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbWItMCBwb3NpdGlvbi1hYnNvbHV0ZVwiPlxuXHRcdFx0XHRcdFx0e2BZb3UgZG9uJ3QgaGF2ZSBhbnkgcHJvamVjdHMgeWV0YH1cblx0XHRcdFx0XHQ8L21vdGlvbi5wPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YHJvdyByb3ctLWVxdWFsaXplZCBndXR0ZXJzLTUgJHtzZWxlY3RlZC5sZW5ndGggPiAwICYmICdoYXMtc2VsZWN0aW9ucyd9YH0+XG5cdFx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdFx0e3Byb2plY3RzXG5cdFx0XHRcdFx0XHQuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkICE9PSBuZXdQcm9qZWN0SWQpXG5cdFx0XHRcdFx0XHQubWFwKChwcm9qZWN0LCBwcm9qZWN0SW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRcdFx0XHR7Li4uU1RBR0dFUl9VUChwcm9qZWN0SW5kZXgpfVxuXHRcdFx0XHRcdFx0XHRcdGtleT17cHJvamVjdC5pZH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXhsLTMgY29sLXh4bC0yXCJcblx0XHRcdFx0XHRcdFx0XHRsYXlvdXQ+XG5cdFx0XHRcdFx0XHRcdFx0PFByb2plY3Qgey4uLnsgcHJvamVjdCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH19IC8+XG5cdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e3NlbGVjdGVkLmxlbmd0aCA+IDAgJiYgPEFjdGlvbk1lbnUgey4uLnsgc2VsZWN0ZWQsIHJlc2V0U2VsZWN0ZWQsIGFjdGlvbnMgfX0gLz59XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdCB9IGZyb20gXCIuL1Byb2plY3RcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdEFkZCB9IGZyb20gXCIuL1Byb2plY3RBZGRcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdEltYWdlIH0gZnJvbSBcIi4vUHJvamVjdEltYWdlXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RNb2RhbCB9IGZyb20gXCIuL1Byb2plY3RNb2RhbFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0UmVzdWx0cyB9IGZyb20gXCIuL1Byb2plY3RSZXN1bHRzXCI7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IFByb2plY3RSZXZpZXdNYXJrZXIgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3TWFya2VyJztcbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudCBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50JztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFByb2plY3RSZXZpZXdDb21tZW50Qm94IGZyb20gJy4vUHJvamVjdFJldmlld0NvbW1lbnRCb3gnO1xuXG4vKiBHbG9iYWwgKi9cbmNvbnN0IGN1cnNvck9mZnNldCA9IDY7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXdDYW52YXMoeyB0aXRsZSwgcGhhc2VzID0gW10sIHByb2plY3RJbWFnZUlkIH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgaW1hZ2UsIGlkOiBwaGFzZUlkLCBjb21tZW50cyB9ID0gcGhhc2VzW3BoYXNlcy5sZW5ndGggLSAxXSB8fCB7fTtcblxuXHQvKiBSZWZzICovXG5cdGNvbnN0IHJldmlld1JlZiA9IHVzZVJlZigpO1xuXG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFttYXJrZXJQb3MsIHNldE1hcmtlclBvc10gPSB1c2VTdGF0ZSgpO1xuXHRjb25zdCBbYm94T3Blbiwgc2V0Qm94T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZUJveCA9ICgpID0+IHtcblx0XHRzZXRCb3hPcGVuKCFib3hPcGVuKTtcblx0XHRzZXRUaW1lb3V0KCgpID0+IHNldE1hcmtlclBvcyhudWxsKSwgMjUwKTtcblx0fTtcblxuXHRjb25zdCBwb3NNYXJrZXIgPSAoeyBjbGllbnRYLCBjbGllbnRZIH0pID0+IHtcblx0XHRjb25zdCByZXZpZXdQb3MgPSByZXZpZXdSZWY/LmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHRzZXRNYXJrZXJQb3MoKCkgPT4ge1xuXHRcdFx0Y29uc3QgeCA9IGNsaWVudFggLSBjdXJzb3JPZmZzZXQ7XG5cdFx0XHRjb25zdCB5ID0gY2xpZW50WSAtIHJldmlld1Bvcy50b3AgLSBjdXJzb3JPZmZzZXQ7XG5cdFx0XHRjb25zdCB4UGVyY2VudCA9ICgoY2xpZW50WCAtIGN1cnNvck9mZnNldCkgLyByZXZpZXdQb3Mud2lkdGgpICogMTAwO1xuXHRcdFx0Y29uc3QgeVBlcmNlbnQgPSAoKGNsaWVudFkgLSByZXZpZXdQb3MudG9wIC0gY3Vyc29yT2Zmc2V0KSAvIHJldmlld1Bvcy5oZWlnaHQpICogMTAwO1xuXG5cdFx0XHRyZXR1cm4geyB4LCB5LCB4UGVyY2VudCwgeVBlcmNlbnQsIHJldmlld1BvcyB9O1xuXHRcdH0pO1xuXG5cdFx0c2V0Qm94T3Blbih0cnVlKTtcblx0fTtcblxuXHQvKiByZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IHJlZj17cmV2aWV3UmVmfSBjbGFzc05hbWU9XCJyZXZpZXcgcG9zaXRpb24tcmVsYXRpdmUgbXgtbjEyIG1iLW4xMiBtdC0xMlwiPlxuXHRcdFx0PGltZ1xuXHRcdFx0XHRjbGFzc05hbWU9XCJyZXZpZXdfX2ltYWdlIGltZy1mbHVpZCB3LTEwMFwiXG5cdFx0XHRcdHNyYz17aW1hZ2V9XG5cdFx0XHRcdHNyY1NldD17YCR7aW1hZ2V9IDJ4YH1cblx0XHRcdFx0YWx0PXt0aXRsZX1cblx0XHRcdFx0b25DbGljaz17cG9zTWFya2VyfVxuXHRcdFx0Lz5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+e21hcmtlclBvcyAmJiA8UHJvamVjdFJldmlld01hcmtlciB7Li4ueyAuLi5tYXJrZXJQb3MgfX0gLz59PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0XHR7bWFya2VyUG9zICYmIDxQcm9qZWN0UmV2aWV3Q29tbWVudEJveCB7Li4ueyBtYXJrZXJQb3MsIGJveE9wZW4sIHRvZ2dsZUJveCwgcGhhc2VJZCwgcHJvamVjdEltYWdlSWQgfX0gLz59XG5cdFx0XHR7Y29tbWVudHMubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRjb21tZW50cy5tYXAoKGNvbW1lbnQsIGNvbW1lbnRJbmRleCkgPT4gPFByb2plY3RSZXZpZXdDb21tZW50IGtleT17Y29tbWVudEluZGV4fSB7Li4uY29tbWVudH0gLz4pfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vY29tbW9uJztcbmltcG9ydCBQcm9qZWN0UmV2aWV3TWFya2VyIGZyb20gJy4vUHJvamVjdFJldmlld01hcmtlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXdDb21tZW50KHsgYXV0aG9yLCBjb21tZW50LCBwb3NpdGlvbiB9KSB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtib3hPcGVuLCBzZXRCb3hPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlQm94ID0gKCkgPT4gc2V0Qm94T3BlbighYm94T3Blbik7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBvbk1vdXNlRW50ZXI9e3RvZ2dsZUJveH0gb25Nb3VzZUxlYXZlPXt0b2dnbGVCb3h9PlxuXHRcdFx0PFByb2plY3RSZXZpZXdNYXJrZXIgey4uLnsgeFBlcmNlbnQ6IHBvc2l0aW9uLngsIHlQZXJjZW50OiBwb3NpdGlvbi55LCBhdXRob3IgfX0gLz5cblx0XHRcdDxDb21tZW50IHsuLi57IGNvbW1lbnQsIGF1dGhvciwgYm94T3BlbiwgdG9nZ2xlQm94LCBwb3NpdGlvbiB9fSAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5jb25zdCBDb21tZW50ID0gKHsgY29tbWVudCwgYXV0aG9yLCBib3hPcGVuLCB0b2dnbGVCb3gsIHBvc2l0aW9uIH0pID0+IHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHRpdGxlID0gYXV0aG9yLnVzZXJuYW1lO1xuXHRjb25zdCBzdWJ0aXRsZSA9IGF1dGhvci5lbWFpbDtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8Qm94IHJlbmRlck9uQm9keT17ZmFsc2V9IHsuLi57IHRpdGxlLCBzdWJ0aXRsZSwgYm94T3BlbiwgdG9nZ2xlQm94LCB1c2VyOiBhdXRob3IsIHBvc2l0aW9uIH19PlxuXHRcdFx0e2NvbW1lbnR9XG5cdFx0PC9Cb3g+XG5cdCk7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0YXJlYUF1dG9zaXplJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vY29tbW9uJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2VsZW1lbnRzJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dCc7XG5cbi8qIEhlbHBlcnMgKi9cbmltcG9ydCB7IGNhbGNCb3hQb3MgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBhZGRDb21tZW50IH0gZnJvbSAnLi4vLi4vYXBpL2NvbW1lbnQnO1xuaW1wb3J0IHsgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXdDb21tZW50Qm94KHsgbWFya2VyUG9zLCBib3hPcGVuLCB0b2dnbGVCb3gsIHBoYXNlSWQsIHByb2plY3RJbWFnZUlkIH0pIHtcblx0LyogUmVmcyAqL1xuXHRjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cdGNvbnN0IGJveFJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB0aXRsZSA9ICdBZGQgYSBjb21tZW50Jztcblx0Y29uc3QgcG9zaXRpb24gPSBjYWxjQm94UG9zKGJveFJlZiwgbWFya2VyUG9zKTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyOiB1c2VyIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGFkZENvbW1lbnRNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZENvbW1lbnQsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfSU1BR0VfQllfSUQsIHBhcnNlSW50KHByb2plY3RJbWFnZUlkKV0pO1xuXHRcdFx0dG9nZ2xlQm94KCk7XG5cdFx0fSxcblx0fSk7XG5cblx0LyogQ29tcG9uZW50cyAqL1xuXHRjb25zdCBTdWJ0aXRsZUNvbXBvbmVudCA9ICgpID0+IChcblx0XHQ8c3Bhbj5cblx0XHRcdENvbW1lbnQgb3IgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnlcIj4gQG1lbnRpb24gPC9zcGFuPiBzb21lb25lXG5cdFx0PC9zcGFuPlxuXHQpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxCb3ggcmVuZGVyT25Cb2R5PXtmYWxzZX0gey4uLnsgdGl0bGUsIFN1YnRpdGxlQ29tcG9uZW50LCBib3hPcGVuLCB0b2dnbGVCb3gsIHBvc2l0aW9uLCB1c2VyLCBib3hSZWYgfX0+XG5cdFx0XHQ8Zm9ybVxuXHRcdFx0XHRyZWY9e2Zvcm1SZWZ9XG5cdFx0XHRcdGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1ncm93LTFcIlxuXHRcdFx0XHRvblN1Ym1pdD17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRhZGRDb21tZW50TXV0YXRpb24ubXV0YXRlKHsgZm9ybVJlZiwgdXNlcklkOiB1c2VyLmlkLCBwaGFzZUlkLCBwb3NpdGlvbiB9KTtcblx0XHRcdFx0fX0+XG5cdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cImNvbW1lbnRcIj5cblx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdDxUZXh0YXJlYUF1dG9zaXplXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBmb3JtLWNvbnRyb2wtLXRleHRcIlxuXHRcdFx0XHRcdGlkPVwiY29tbWVudFwiXG5cdFx0XHRcdFx0bmFtZT1cImNvbW1lbnRcIlxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNheSBzb21ldGhpbmcgbmljZS4uLlwiXG5cdFx0XHRcdFx0YXV0b0ZvY3VzXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxCdXR0b24gdGl0bGU9XCJTdWJtaXRcIiBleHRlbnNpb25DbGFzc2VzPVwibXQtNCB3LTUwIGp1c3RpZnktY29udGVudC1jZW50ZXJcIiB0eXBlPVwic3VibWl0XCIgLz5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L0JveD5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBFZGl0YWJsZSB9IGZyb20gJy4uL2VkaXRhYmxlJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IHN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZWRpdFByb2plY3RJbWFnZSwgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXdIZWFkZXIoeyBpZCwgdGl0bGUsIGRlc2NyaXB0aW9uIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChzdGF0aWNDb250ZXh0KTtcblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBtdXRhdGlvbk9uU3VjY2VzcyA9ICgpID0+IHtcblx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0lNQUdFX0JZX0lELCBpZF0pO1xuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTZcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC14bC02XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiAnZWRpdGFibGUnfSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJgfT5cblx0XHRcdFx0XHQ8RWRpdGFibGVcblx0XHRcdFx0XHRcdGlucHV0VHlwZT1cInRpdGxlXCJcblx0XHRcdFx0XHRcdHByb2plY3RJZD17aWR9XG5cdFx0XHRcdFx0XHRjb250ZW50PXt0aXRsZX1cblx0XHRcdFx0XHRcdG11dGF0aW9uPXtlZGl0UHJvamVjdEltYWdlfVxuXHRcdFx0XHRcdFx0bXV0YXRpb25JZD17aWR9XG5cdFx0XHRcdFx0XHR7Li4ueyBtdXRhdGlvbk9uU3VjY2VzcyB9fT5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJoNSBtYi0wIHRleHQtd2hpdGVcIj57dGl0bGUgPyB0aXRsZSA6ICdBZGQgYSBuaWNlIHRpdGxlJ308L2gxPlxuXHRcdFx0XHRcdDwvRWRpdGFibGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7dXNlclJvbGUgPT09ICdhZG1pbicgJiYgJ2VkaXRhYmxlJ30gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yYH0+XG5cdFx0XHRcdFx0PEVkaXRhYmxlXG5cdFx0XHRcdFx0XHRpbnB1dFR5cGU9XCJkZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0XHRjb250ZW50PXtkZXNjcmlwdGlvbn1cblx0XHRcdFx0XHRcdG11dGF0aW9uPXtlZGl0UHJvamVjdEltYWdlfVxuXHRcdFx0XHRcdFx0bXV0YXRpb25JZD17aWR9XG5cdFx0XHRcdFx0XHR7Li4ueyBtdXRhdGlvbk9uU3VjY2VzcyB9fT5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTcwIG1iLTBcIj5cblx0XHRcdFx0XHRcdFx0e2Rlc2NyaXB0aW9uID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPntkZXNjcmlwdGlvbn08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdEFkZCBhIGRlY3JpcHRpb24gLSB0aGUgcHVycG9zZSwgY29udGV4dCwgb2JqZWN0aXZlc1xuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L0VkaXRhYmxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTQ0FMRV9GQURFIH0gZnJvbSAnLi4vLi4vY29tbW9uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3TWFya2VyKHsgeFBlcmNlbnQsIHlQZXJjZW50LCBhdXRob3IgfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXHRjb25zdCB1c2VyID0gYXV0aG9yID8gYXV0aG9yIDogY3VycmVudFVzZXI7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXZcblx0XHRcdGtleT17W3hQZXJjZW50LCB5UGVyY2VudF19XG5cdFx0XHR7Li4uU0NBTEVfRkFERX1cblx0XHRcdGNsYXNzTmFtZT1cInJldmlld19fbWFya2VyIGljb24td3JhcHBlciBpY29uLXdyYXBwZXItLXNlY29uZGFyeVwiXG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHQnLS14JzogeFBlcmNlbnQsXG5cdFx0XHRcdCctLXknOiB5UGVyY2VudCxcblx0XHRcdFx0Jy0tdGhlbWUnOiBgJHt1c2VyLnVzZXJDb2xvcn1gLFxuXHRcdFx0XHQnLS1zaXplJzogMTMsXG5cdFx0XHR9fVxuXHRcdC8+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RSZXZpZXdIZWFkZXIgfSBmcm9tICcuL1Byb2plY3RSZXZpZXdIZWFkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0UmV2aWV3Q2FudmFzIH0gZnJvbSAnLi9Qcm9qZWN0UmV2aWV3Q2FudmFzJztcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZFVzZXJJY29uIGZyb20gJ2ljb25zL2FkZF91c2VyLnN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL2NvbW1vbic7XG5pbXBvcnQgVXNlckFkZFNlYXJjaCBmcm9tICcuL1VzZXJBZGRTZWFyY2gnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQWRkKHsgdXNlcnMsIHByb2plY3QgfSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbYm94T3Blbiwgc2V0Qm94T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZUJveCA9ICgpID0+IHNldEJveE9wZW4oIWJveE9wZW4pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmUgbWwtMlwiPlxuXHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgdXNlciB1c2VyLS1sZyB1c2VyLS1hZGRcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlQm94fT5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidXNlcl9fYXZhdGFyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19pbml0aWFsc1wiPlxuXHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19pY29uIGljb24gaWNvbi0tMTIgbXQtMFwiIHNyYz17YWRkVXNlckljb259IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PEJveCB0aXRsZT1cIlNlbGVjdCB1c2Vyc1wiIHN1YnRpdGxlPVwiQ2hvb3NlIHNvbWUgdXNlcnMgdG8gY29sbGFib3JhdGUgd2l0aC5cIiB7Li4ueyBib3hPcGVuLCB0b2dnbGVCb3ggfX0+XG5cdFx0XHRcdDxVc2VyQWRkU2VhcmNoIHsuLi57IHVzZXJzLCBwcm9qZWN0LCB0b2dnbGVCb3ggfX0gLz5cblx0XHRcdDwvQm94PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5LCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IFVzZXJBZGRTZWFyY2hSZXN1bHRzIGZyb20gJy4vVXNlckFkZFNlYXJjaFJlc3VsdHMnO1xuaW1wb3J0IHsgVXNlcnMgfSBmcm9tICcuLi91c2Vycyc7XG5cbi8qIEVsZW1lbnRzICovXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9lbGVtZW50cyc7XG5cbi8qIEhlbHBlcnMgKi9cbmltcG9ydCB7IGlzRW1haWwsIGZpbHRlclVzZXJzIH0gZnJvbSAnLi4vLi4vaGVscGVycyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgYWRkVXNlciwgZmV0Y2hHb2JhbFVzZXJzLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckFkZFNlYXJjaCh7IHVzZXJzLCBwcm9qZWN0LCB0b2dnbGVCb3ggfSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2ZvY3VzZWRVc2VyLCBzZXRGb2N1c2VkVXNlcl0gPSB1c2VTdGF0ZSgwKTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgZGF0YTogZ2xvYmFsVXNlcnMgPSBbXSwgaXNMb2FkaW5nOiBnbG9iYWxVc2Vyc0xvYWRpbmcgfSA9IHVzZVF1ZXJ5KFxuXHRcdFFVRVJZX0tFWVMuR0xPQkFMX1VTRVJTLFxuXHRcdGZldGNoR29iYWxVc2Vyc1xuXHQpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCBmaWx0ZXJlZFVzZXJzID0gZmlsdGVyVXNlcnMoZ2xvYmFsVXNlcnMsIHVzZXJzLCBxdWVyeSk7XG5cblx0LyogUmVmcyAqL1xuXHRjb25zdCBxdWVyeVJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgYWRkVXNlck11dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkVXNlciwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdC5pZF0pO1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5HTE9CQUxfVVNFUlMpO1xuXG5cdFx0XHRxdWVyeVJlZi5jdXJyZW50LnNlbGVjdCgpO1xuXHRcdFx0c2V0UXVlcnkoJycpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBzZXRRdWVyeSh2YWx1ZSk7XG5cblx0Y29uc3QgaGFuZGxlT25LZXlEb3duID0gKGV2ZW50KSA9PiB7XG5cdFx0aWYgKFsnRW50ZXInLCAnVGFiJ10uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0aWYgKHF1ZXJ5ICE9PSAnJyAmJiBmb2N1c2VkVXNlciAhPT0gbnVsbCkge1xuXHRcdFx0XHRjb25zdCB1c2VyID0gZm9jdXNlZFVzZXIgaW4gZmlsdGVyZWRVc2VycyA/IGZpbHRlcmVkVXNlcnNbZm9jdXNlZFVzZXJdIDogZm9jdXNlZFVzZXI7XG5cblx0XHRcdFx0aWYgKGlzRW1haWwodXNlci5lbWFpbCkpIHtcblx0XHRcdFx0XHRhZGRVc2VyTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkOiBwcm9qZWN0LmlkLCBlbWFpbDogdXNlci5lbWFpbCB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRjb25zdCBoYW5kbGVDbGljayA9IChlbWFpbCkgPT4ge1xuXHRcdGlmIChpc0VtYWlsKGVtYWlsKSkge1xuXHRcdFx0YWRkVXNlck11dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZDogcHJvamVjdC5pZCwgZW1haWw6IGVtYWlsIH0pO1xuXHRcdH1cblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LWdyb3ctMVwiPlxuXHRcdFx0PFVzZXJzIHsuLi57IHVzZXJzLCBwcm9qZWN0IH19IHZhcmlhbnQ9XCJpbnRlcmFjdGl2ZVwiIHNpemU9XCJ4bFwiIC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XG5cdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInVzZXJRdWVyeVwiPlxuXHRcdFx0XHRcdFNlYXJjaCBuYW1lIG9yIGVtYWlsXG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gZm9ybS1jb250cm9sLS1zZWFyY2hcIlxuXHRcdFx0XHRcdGlkPVwidXNlclF1ZXJ5XCJcblx0XHRcdFx0XHRuYW1lPVwidXNlclF1ZXJ5XCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNlYXJjaCBuYW1lIG9yIGVtYWlsXCJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0YXV0b0ZvY3VzXG5cdFx0XHRcdFx0dmFsdWU9e3F1ZXJ5fVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0b25LZXlEb3duPXtoYW5kbGVPbktleURvd259XG5cdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwib2ZmXCJcblx0XHRcdFx0XHRyZWY9e3F1ZXJ5UmVmfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8VXNlckFkZFNlYXJjaFJlc3VsdHNcblx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0ZmlsdGVyZWRVc2Vycyxcblx0XHRcdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRcdFx0aGFuZGxlQ2xpY2ssXG5cdFx0XHRcdFx0XHRmb2N1c2VkVXNlcixcblx0XHRcdFx0XHRcdHNldEZvY3VzZWRVc2VyLFxuXHRcdFx0XHRcdFx0dXNlck11dGF0aW9uTG9hZGluZzogYWRkVXNlck11dGF0aW9uLmlzTG9hZGluZyxcblx0XHRcdFx0XHRcdGdsb2JhbFVzZXJzTG9hZGluZyxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC00XCI+XG5cdFx0XHRcdDxCdXR0b24gdGl0bGU9XCJEb25lXCIgb25DbGljaz17dG9nZ2xlQm94fSBleHRlbnNpb25DbGFzc2VzPVwidy01MCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOIH0gZnJvbSAnLi4vLi4vY29tbW9uL2FuaW1hdGlvbnMnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VyU2VsZWN0IH0gZnJvbSAnLi4vdXNlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQWRkU2VhcmNoUmVzdWx0cyh7XG5cdGZpbHRlcmVkVXNlcnMsXG5cdHF1ZXJ5LFxuXHRoYW5kbGVDbGljayxcblx0Zm9jdXNlZFVzZXIsXG5cdHNldEZvY3VzZWRVc2VyLFxuXHR1c2VyTXV0YXRpb25Mb2FkaW5nLFxuXHRnbG9iYWxVc2Vyc0xvYWRpbmcsXG59KSB7XG5cdC8qIFJlbmRlciBmaWx0ZXJlZCByZXN1bHRzICovXG5cdGNvbnN0IHJlc3VsdHMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgbmV3VXNlciA9IHsgZW1haWw6IHF1ZXJ5LCB1c2VybmFtZTogJ05ldyB1c2VyJywgdXNlckNvbG9yOiAnI0NDMjVFOCcgfTtcblxuXHRcdGlmIChmaWx0ZXJlZFVzZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiBmaWx0ZXJlZFVzZXJzLm1hcCgodXNlciwgdXNlckluZGV4KSA9PiAoXG5cdFx0XHRcdDxtb3Rpb24ubGkgey4uLkZBREVfSU59IGtleT17dXNlci5pZH0gY2xhc3NOYW1lPVwibGlzdF9faXRlbSB2ci0zXCI+XG5cdFx0XHRcdFx0PFVzZXJTZWxlY3Rcblx0XHRcdFx0XHRcdHsuLi57IHVzZXIsIHVzZXJJbmRleCwgaGFuZGxlQ2xpY2ssIHNldEZvY3VzZWRVc2VyIH19XG5cdFx0XHRcdFx0XHRpc0ZvY3VzZWQ9e3VzZXJJbmRleCA9PT0gZm9jdXNlZFVzZXIgJiYgcXVlcnl9XG5cdFx0XHRcdFx0XHRpc0xvYWRpbmc9e3VzZXJNdXRhdGlvbkxvYWRpbmd9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9tb3Rpb24ubGk+XG5cdFx0XHQpKTtcblx0XHR9XG5cblx0XHRpZiAoIWdsb2JhbFVzZXJzTG9hZGluZykge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PG1vdGlvbi5saSB7Li4uRkFERV9JTn0ga2V5PVwiTmV3IHVzZXJcIiBjbGFzc05hbWU9XCJsaXN0X19pdGVtIGlzLWZvY3VzZWQgdnItM1wiPlxuXHRcdFx0XHRcdDxVc2VyU2VsZWN0XG5cdFx0XHRcdFx0XHR7Li4ueyB1c2VyOiBuZXdVc2VyLCB1c2VySW5kZXg6IG5ld1VzZXIsIGhhbmRsZUNsaWNrLCBzZXRGb2N1c2VkVXNlciB9fVxuXHRcdFx0XHRcdFx0aXNGb2N1c2VkPXtxdWVyeS5sZW5ndGh9XG5cdFx0XHRcdFx0XHRpc0xvYWRpbmc9e3VzZXJNdXRhdGlvbkxvYWRpbmd9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9tb3Rpb24ubGk+XG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0e3F1ZXJ5ICE9PSAnJyAmJiAoXG5cdFx0XHRcdDxtb3Rpb24udWwgey4uLkZBREVfSU59IGNsYXNzTmFtZT1cImJveF9fbGlzdCBsaXN0XCI+XG5cdFx0XHRcdFx0e3Jlc3VsdHMoKX1cblx0XHRcdFx0PC9tb3Rpb24udWw+XG5cdFx0XHQpfVxuXHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHQpO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VyQWRkIH0gZnJvbSBcIi4vVXNlckFkZFwiO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IHN0YXJJY29uIGZyb20gJ2ljb25zL3N0YXIuc3ZnJztcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJ2ljb25zL2RlbGV0ZS5zdmcnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGRlbGV0ZVVzZXIsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBMb2FkaW5nV3JhcHBlciB9IGZyb20gJy4uLy4uL2NvbW1vbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXIoeyB1c2VyLCBwcm9qZWN0ID0ge30sIHZhcmlhbnQgPSAnZGVmYXVsdCcsIHNpemUgPSAnbWQnIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IGlkOiBwcm9qZWN0SWQsIGF1dGhvciB9ID0gcHJvamVjdDtcblx0Y29uc3QgeyBpZDogdXNlcklkLCBlbWFpbCB9ID0gdXNlcjtcblxuXHRjb25zdCBpc0F1dGhvciA9IGVtYWlsID09PSBhdXRob3I7XG5cdGNvbnN0IGNsYXNzZXMgPSBbJ3VzZXInLCBgdXNlci0tJHtzaXplfWAsIGB1c2VyLS0ke3ZhcmlhbnR9YCwgaXNBdXRob3IgJiYgJ3VzZXItLWF1dGhvciddLmpvaW4oJyAnKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgZGVsZXRlVXNlck11dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlVXNlciwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSksXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cblx0XHRcdDxVc2VyQXZhdGFyIGlzTG9hZGluZz17ZGVsZXRlVXNlck11dGF0aW9uLmlzTG9hZGluZ30gey4uLnVzZXJ9PlxuXHRcdFx0XHR7dmFyaWFudCA9PT0gJ2ludGVyYWN0aXZlJyAmJiAhaXNBdXRob3IgJiYgKFxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInVzZXJfX2FjdGlvbiBidG4gYnRuLWxpbmsgcC0wXCJcblx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGVsZXRlVXNlck11dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgdXNlcklkIH0pfT5cblx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9fYWN0aW9uLWljb24gaWNvbiBpY29uLS0xNFwiIHNyYz17ZGVsZXRlSWNvbn0gLz5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0KX1cblx0XHRcdDwvVXNlckF2YXRhcj5cblx0XHRcdHtpc0F1dGhvciAmJiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlcl9fc3RhdHVzIHVzZXJfX3N0YXR1cy0tbGVhZGVyXCI+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19zdGF0dXMtaWNvbiBpY29uIHRleHQtdGVydGlhcnkgbXQtMFwiIHNyYz17c3Rhckljb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGNvbnN0IFVzZXJBdmF0YXIgPSAoeyB1c2VybmFtZSwgdXNlckNvbG9yLCBpc0xvYWRpbmcsIGNoaWxkcmVuIH0pID0+IHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHVzZXJJbml0aWFscyA9IHVzZXJuYW1lLnNwbGl0KCcgJykubWFwKCh3b3JkKSA9PiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlcl9fYXZhdGFyXCIgc3R5bGU9e3sgJy0tdGhlbWUnOiB1c2VyQ29sb3IgfX0+XG5cdFx0XHQ8TG9hZGluZ1dyYXBwZXIgbG9hZGluZz17aXNMb2FkaW5nfSBsb2FkZXJTaXplPXsxNn0+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInVzZXJfX2luaXRpYWxzXCI+e3VzZXJJbml0aWFsc308L3NwYW4+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgY29uc3QgVXNlckluZm8gPSAoeyB1c2VybmFtZSwgZW1haWwgfSkgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBtbC0zXCI+XG5cdFx0PHAgY2xhc3NOYW1lPVwibWItMFwiPnt1c2VybmFtZX08L3A+XG5cdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNjAgdGV4dC0teHNcIj57ZW1haWx9PC9wPlxuXHQ8L2Rpdj5cbik7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkVXNlckljb24gZnJvbSAnaWNvbnMvYWRkX3VzZXIuc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlckF2YXRhciwgVXNlckluZm8gfSBmcm9tICcuL1VzZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyU2VsZWN0KHsgdXNlciwgdXNlckluZGV4LCBoYW5kbGVDbGljaywgaXNGb2N1c2VkLCBzZXRGb2N1c2VkVXNlciwgaXNMb2FkaW5nIH0pIHtcblx0LyogRWZmZWN0cyAqL1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlzRm9jdXNlZCAmJiBzZXRGb2N1c2VkVXNlcih1c2VySW5kZXgpO1xuXHR9LCBbaXNGb2N1c2VkXSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRyZXR1cm4gKCkgPT4gc2V0Rm9jdXNlZFVzZXIoMCk7XG5cdH0sIFtdKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgaGFuZGxlU3RhdHVzID0gKGFjdGlvbikgPT4ge1xuXHRcdHNldEZvY3VzZWRVc2VyKGFjdGlvbiA9PT0gJ2VudGVyJyA/IHVzZXJJbmRleCA6IDApO1xuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxidXR0b25cblx0XHRcdGNsYXNzTmFtZT17YHVzZXIgdXNlci0tc2VsZWN0ICR7aXNGb2N1c2VkICYmICdpcy1mb2N1c2VkJ30gdXNlci0teGxgfVxuXHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2sodXNlci5lbWFpbCl9XG5cdFx0XHRvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZVN0YXR1cygnZW50ZXInKX1cblx0XHRcdG9uTW91c2VMZWF2ZT17KCkgPT4gaGFuZGxlU3RhdHVzKCdsZWF2ZScpfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHQ8VXNlckF2YXRhciBpc0xvYWRpbmc9e2lzTG9hZGluZyAmJiBpc0ZvY3VzZWR9IHsuLi51c2VyfSAvPlxuXHRcdFx0XHQ8VXNlckluZm8gey4uLnVzZXJ9IC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlcl9fYWRkIHRleHQtc2Vjb25kYXJ5IHJvdW5kZWQtY2lyY2xlIG1sLWF1dG9cIj5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cInVzZXJfX2FkZC1pY29uIGljb24gaWNvbi0tMTIgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e2FkZFVzZXJJY29ufSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvYnV0dG9uPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNDQUxFX0ZBREUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2FuaW1hdGlvbnNcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2Vycyh7IHVzZXJzLCBsYXlvdXQgPSBcImZ1bGxcIiwgLi4ucmVzdCB9KSB7XG4gICAgY29uc3Qgc2xpY2VBbW91bnQgPSBsYXlvdXQgPT09IFwibWluaW1hbFwiID8gNyA6IEluZmluaXR5O1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIGd1dHRlcnMtMVwiPlxuICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICB7dXNlcnMuc2xpY2UoMCwgc2xpY2VBbW91bnQpLm1hcCgodXNlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgbGF5b3V0IHsuLi5TQ0FMRV9GQURFfSBjbGFzc05hbWU9XCJjb2wtYXV0b1wiIGtleT17dXNlci5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXIgey4uLnsgdXNlciwgLi4ucmVzdCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIHtsYXlvdXQgPT09IFwibWluaW1hbFwiICYmIHVzZXJzLmxlbmd0aCA+IDcgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBsYXlvdXQgey4uLlNDQUxFX0ZBREV9IGNsYXNzTmFtZT1cImNvbC1hdXRvXCIga2V5PVwibW9yZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0teHMgdGV4dC1tdXRlZC0tNzAgbWwtMVwiPisge3VzZXJzLmxlbmd0aCAtIHNsaWNlQW1vdW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlcnMgfSBmcm9tIFwiLi9Vc2Vyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VyIH0gZnJvbSBcIi4vVXNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VyU2VsZWN0IH0gZnJvbSBcIi4vVXNlclNlbGVjdFwiO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU3RhdGljQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcbmV4cG9ydCBkZWZhdWx0IFN0YXRpY0NvbnRleHQ7XG4iLCIvKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMb2FkaW5nV3JhcHBlciB9IGZyb20gJy4uL2NvbW1vbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbih7XG5cdHRpdGxlLFxuXHR0eXBlID0gJ2J1dHRvbicsXG5cdHRoZW1lID0gJ3NlY29uZGFyeScsXG5cdHNpemUgPSAnc20nLFxuXHRleHRlbnNpb25DbGFzc2VzID0gJycsXG5cdG9uQ2xpY2sgPSAoKSA9PiB7fSxcblx0aXNMb2FkaW5nID0gZmFsc2UsXG59KSB7XG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uYnV0dG9uXG5cdFx0XHRsYXlvdXRcblx0XHRcdGNsYXNzTmFtZT17YGJ0biBidG4tJHtzaXplfSBidG4tJHt0aGVtZX0gJHtleHRlbnNpb25DbGFzc2VzfSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyYH1cblx0XHRcdHsuLi57IHR5cGUsIG9uQ2xpY2sgfX1cblx0XHRcdHN0eWxlPXt7IGhlaWdodDogMzUgfX0+XG5cdFx0XHQ8TG9hZGluZ1dyYXBwZXJcblx0XHRcdFx0bG9hZGluZz17aXNMb2FkaW5nfVxuXHRcdFx0XHRsb2FkZXJTaXplPXsxNn1cblx0XHRcdFx0Y2xhc3Nlcz17eyBsb2FkZXJDbGFzc2VzOiAncG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4IHRleHQtc2Vjb25kYXJ5JyB9fT5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYnRuX190ZXh0XCI+e3RpdGxlfTwvc3Bhbj5cblx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0PC9tb3Rpb24uYnV0dG9uPlxuXHQpO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tICcuL0J1dHRvbic7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYWxjQm94UG9zKGJveFJlZiwgbWFya2VyUG9zLCBjdXJzb3JPZmZzZXQgPSAyMCkge1xuXHQvKiBHZXQgcG9zaXRpb24gb2YgbWFya2VyICovXG5cdGNvbnN0IHsgeCwgeSwgcmV2aWV3UG9zIH0gPSBtYXJrZXJQb3M7XG5cblx0LyogR2V0IGRpbWVuc2lvbnMgb2YgY3VycmVudCBib3ggKi9cblx0Y29uc3QgeyB3aWR0aDogYm94V2lkdGgsIGhlaWdodDogYm94SGVpZ2h0IH0gPSBib3hSZWY/LmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIHx8IHt9O1xuXG5cdC8qIEdldCBkaW1lbnNpb25zIG9mIGN1cnJlbnQgc2NyZWVuICovXG5cdGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdGNvbnN0IHNjcmVlbkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHJldmlld1Bvcy50b3A7XG5cblx0LyogU2V0IHggYW5kIHkgdmFsdWVzIHRvIHBlcmNlbnRhZ2UgZXF1aXZlbGVudCB0byBtYWtlIHRoZSBib3ggcmVzcG9uc2l2ZSAqL1xuXHRsZXQgeFBlcmNlbnQgPSAoKHggKyBjdXJzb3JPZmZzZXQpIC8gcmV2aWV3UG9zLndpZHRoKSAqIDEwMDtcblx0bGV0IHlQZXJjZW50ID0gKCh5ICsgY3Vyc29yT2Zmc2V0KSAvIHJldmlld1Bvcy5oZWlnaHQpICogMTAwO1xuXG5cdC8qIENvbXBlbnNhdGUgZm9yIHRoZSBib3hXaWR0aCBpZiBtYXJrZXIgaXMgYXQgZW5kIG9mIGhvcml6b250YWwgc2NyZWVuICovXG5cdGlmIChzY3JlZW5XaWR0aCAtIHggPCBib3hXaWR0aCkge1xuXHRcdHhQZXJjZW50ID0gKCh4IC0gYm94V2lkdGgpIC8gcmV2aWV3UG9zLndpZHRoKSAqIDEwMDtcblx0fVxuXG5cdC8qIENvbXBlbnNhdGUgZm9yIHRoZSBib3hIZWlnaHQgaWYgbWFya2VyIGlzIGF0IGVuZCBvZiB2ZXJ0aWNhbCBzY3JlZW4gKi9cblx0aWYgKHNjcmVlbkhlaWdodCAtIHkgPCBib3hIZWlnaHQpIHtcblx0XHR5UGVyY2VudCA9ICgoeSAtIGJveEhlaWdodCkgLyByZXZpZXdQb3MuaGVpZ2h0KSAqIDEwMDtcblx0fVxuXG5cdHJldHVybiB7IHg6IHhQZXJjZW50LCB5OiB5UGVyY2VudCB9O1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlsdGVyVXNlcnMoZ2xvYmFsVXNlcnMsIHVzZXJzLCBxdWVyeSkge1xuICAgIGNvbnN0IGxvd2VyUXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGV4aXN0aW5nVXNlcnNCeUVtYWlsID0gdXNlcnMubWFwKCh7IGVtYWlsIH0pID0+IGVtYWlsKTtcblxuICAgIGxldCBmaWx0ZXJlZFVzZXJzID0gZ2xvYmFsVXNlcnNcbiAgICAgICAgLmZpbHRlcigoeyBlbWFpbCB9KSA9PiB7XG4gICAgICAgICAgICAvKiBPbmx5IHJldHVybiB1c2VycyB0aGF0IGFyZSBub3QgcGFydCBvZiB0aGUgcHJvamVjdCAqL1xuICAgICAgICAgICAgcmV0dXJuICFleGlzdGluZ1VzZXJzQnlFbWFpbC5pbmNsdWRlcyhlbWFpbCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5maWx0ZXIoKHsgZW1haWwsIHVzZXJuYW1lIH0pID0+IHtcbiAgICAgICAgICAgIC8qIE9ubHkgcmV0dXJuIHVzZXJzIHRoYXQgbWF0Y2ggdGhlIHF1ZXJ5IG9uIGVtYWlsIHx8IHVzZXJuYW1lICovXG4gICAgICAgICAgICByZXR1cm4gZW1haWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclF1ZXJ5KSB8fCB1c2VybmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyUXVlcnkpO1xuICAgICAgICB9KTtcblxuICAgIHJldHVybiBmaWx0ZXJlZFVzZXJzO1xufVxuIiwiY29uc3QgVVNFUl9ST0xFUyA9IHtcblx0Uk9MRV9BRE1JTjogJ1JPTEVfQURNSU4nLFxuXHRST0xFX1VTRVI6ICdST0xFX1VTRVInLFxuXHRST0xFX1VTRVJfQkFTSUM6ICdST0xFX1VTRVJfQkFTSUMnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0Um9sZSh7IHJvbGVzIH0pIHtcblx0aWYgKHJvbGVzLmluY2x1ZGVzKFVTRVJfUk9MRVMuUk9MRV9BRE1JTikpIHJldHVybiAnYWRtaW4nO1xuXHRpZiAocm9sZXMuaW5jbHVkZXMoVVNFUl9ST0xFUy5ST0xFX1VTRVIpKSByZXR1cm4gJ3VzZXInO1xuXHRpZiAocm9sZXMuaW5jbHVkZXMoVVNFUl9ST0xFUy5ST0xFX1VTRVJfQkFTSUMpKSByZXR1cm4gJ2Jhc2ljJztcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgaXNFbWFpbCB9IGZyb20gJy4vaXNFbWFpbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGZpbHRlclVzZXJzIH0gZnJvbSAnLi9maWx0ZXJVc2Vycyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVwZGF0ZVBhZ2VUaXRsZSB9IGZyb20gJy4vdXBkYXRlUGFnZVRpdGxlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0Um9sZSB9IGZyb20gJy4vZ2V0Um9sZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNhbGNCb3hQb3MgfSBmcm9tICcuL2NhbGNCb3hQb3MnO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNFbWFpbChlbWFpbCkge1xuICAgIHJldHVybiAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLy50ZXN0KGVtYWlsKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVBhZ2VUaXRsZSh0aXRsZSkge1xuXHRkb2N1bWVudC50aXRsZSA9IGBQYXJhbGxlbCBEYXNoYm9hcmQgfCAke3RpdGxlfWA7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIHVzZVNlbGVjdGlvbiB9IGZyb20gJy4vdXNlU2VsZWN0aW9uJztcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTZWxlY3Rpb24oKSB7XG5cdGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoW10pO1xuXG5cdGNvbnN0IHVwZGF0ZVNlbGVjdGVkID0gKGlkKSA9PiB7XG5cdFx0c2V0U2VsZWN0ZWQoKHNlbGVjdGVkKSA9PiB7XG5cdFx0XHRpZiAoc2VsZWN0ZWQuaW5jbHVkZXMoaWQpKSB7XG5cdFx0XHRcdHJldHVybiBzZWxlY3RlZC5maWx0ZXIoKHNlbGVjdGVkSWQpID0+IHNlbGVjdGVkSWQgIT09IGlkKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFsuLi5zZWxlY3RlZCwgaWRdO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlc2V0U2VsZWN0ZWQgPSAoKSA9PiBzZXRTZWxlY3RlZChbXSk7XG5cblx0cmV0dXJuIHsgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkLCByZXNldFNlbGVjdGVkIH07XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUGFnZUxvYWRlciB9IGZyb20gJy4uL2NvbW1vbic7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZmV0Y2hQcm9qZWN0QnlJZCwgUVVFUllfS0VZUyB9IGZyb20gJy4uL2FwaSc7XG5cbi8qIEhlbHBlcnMgKi9cbmltcG9ydCB7IHVwZGF0ZVBhZ2VUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQcm9qZWN0RGV0YWlsSGVhZGVyLCBQcm9qZWN0RGV0YWlsSW1hZ2VzIH0gZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWwoKSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJZCB9ID0gdXNlUGFyYW1zKCk7XG5cblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGlzTG9hZGluZywgZGF0YSA9IHt9IH0gPSB1c2VRdWVyeShcblx0XHRbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwYXJzZUludChwcm9qZWN0SWQpXSxcblx0XHQoKSA9PiBmZXRjaFByb2plY3RCeUlkKHsgcHJvamVjdElkIH0pLFxuXHRcdHtcblx0XHRcdG9uU3VjY2VzczogKHsgdGl0bGUgfSkgPT4gdXBkYXRlUGFnZVRpdGxlKHRpdGxlKSxcblx0XHR9XG5cdCk7XG5cblx0LyogQ29uc3RhbnRzICAqL1xuXHRjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgdXNlcnMsIGlkLCBhdXRob3IsIGVtYWlsLCBwcm9qZWN0SW1hZ2VzIH0gPSBkYXRhO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxQYWdlTG9hZGVyIHsuLi57IGlzTG9hZGluZyB9fT5cblx0XHRcdDxQcm9qZWN0RGV0YWlsSGVhZGVyIHsuLi57IHRpdGxlLCBkZXNjcmlwdGlvbiwgdXNlcnMsIGlkLCBhdXRob3IsIGVtYWlsIH19IC8+XG5cdFx0XHQ8UHJvamVjdERldGFpbEltYWdlcyB7Li4ueyBwcm9qZWN0SW1hZ2VzLCBwcm9qZWN0SWQ6IGlkIH19IC8+XG5cdFx0PC9QYWdlTG9hZGVyPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQcm9qZWN0UmVzdWx0cywgUHJvamVjdEFkZCB9IGZyb20gJy4uL2NvbXBvbmVudHMvcHJvamVjdC1vdmVydmlldyc7XG5pbXBvcnQgeyBQYWdlTG9hZGVyIH0gZnJvbSAnLi4vY29tbW9uJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZmV0Y2hQcm9qZWN0c0J5VXNlciwgUVVFUllfS0VZUyB9IGZyb20gJy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RPdmVydmlldygpIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW25ld1Byb2plY3RJZCwgc2V0TmV3UHJvamVjdElkXSA9IHVzZVN0YXRlKCk7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBjdXJyZW50VXNlciwgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHVzZXJJZCA9IGN1cnJlbnRVc2VyPy5pZCA/IGN1cnJlbnRVc2VyLmlkIDogYXRvYihsb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKSk7XG5cblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGlzTG9hZGluZywgZGF0YTogcHJvamVjdHMgPSBbXSB9ID0gdXNlUXVlcnkoXG5cdFx0UVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIsXG5cdFx0KCkgPT4gZmV0Y2hQcm9qZWN0c0J5VXNlcih7IHVzZXJJZCB9KSxcblx0XHR7XG5cdFx0XHRlbmFibGVkOiAhIXVzZXJJZCxcblx0XHR9XG5cdCk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PFBhZ2VMb2FkZXIgey4uLnsgaXNMb2FkaW5nIH19PlxuXHRcdFx0e3VzZXJSb2xlID09PSAnYWRtaW4nICYmIDxQcm9qZWN0QWRkIHsuLi57IHNldE5ld1Byb2plY3RJZCB9fSAvPn1cblx0XHRcdDxQcm9qZWN0UmVzdWx0cyB7Li4ueyBwcm9qZWN0cywgbmV3UHJvamVjdElkIH19IC8+XG5cdFx0PC9QYWdlTG9hZGVyPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFBhZ2VMb2FkZXIgfSBmcm9tICcuLi9jb21tb24nO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGZldGNoUHJvamVjdEltYWdlQnlJZCwgUVVFUllfS0VZUyB9IGZyb20gJy4uL2FwaSc7XG5cbi8qIEhlbHBlcnMgKi9cbmltcG9ydCB7IHVwZGF0ZVBhZ2VUaXRsZSB9IGZyb20gJy4uL2hlbHBlcnMnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQcm9qZWN0UmV2aWV3Q2FudmFzLCBQcm9qZWN0UmV2aWV3SGVhZGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0LXJldmlldyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXcoKSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJbWFnZUlkIH0gPSB1c2VQYXJhbXMoKTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhID0ge30gfSA9IHVzZVF1ZXJ5KFxuXHRcdFtRVUVSWV9LRVlTLlBST0pFQ1RfSU1BR0VfQllfSUQsIHBhcnNlSW50KHByb2plY3RJbWFnZUlkKV0sXG5cdFx0KCkgPT4gZmV0Y2hQcm9qZWN0SW1hZ2VCeUlkKHsgcHJvamVjdEltYWdlSWQgfSksXG5cdFx0e1xuXHRcdFx0b25TdWNjZXNzOiAoeyB0aXRsZSB9KSA9PiB1cGRhdGVQYWdlVGl0bGUodGl0bGUpLFxuXHRcdH1cblx0KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8UGFnZUxvYWRlciB7Li4ueyBpc0xvYWRpbmcgfX0+XG5cdFx0XHQ8UHJvamVjdFJldmlld0hlYWRlciB7Li4uZGF0YX0gLz5cblx0XHRcdDxQcm9qZWN0UmV2aWV3Q2FudmFzIHsuLi57IC4uLmRhdGEsIHByb2plY3RJbWFnZUlkIH19IC8+XG5cdFx0PC9QYWdlTG9hZGVyPlxuXHQpO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0T3ZlcnZpZXcgfSBmcm9tICcuL1Byb2plY3RPdmVydmlldyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3REZXRhaWwgfSBmcm9tICcuL1Byb2plY3REZXRhaWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0UmV2aWV3IH0gZnJvbSAnLi9Qcm9qZWN0UmV2aWV3JztcbiIsIi8qIFBhZ2VzICovXG5pbXBvcnQgeyBQcm9qZWN0T3ZlcnZpZXcsIFByb2plY3REZXRhaWwsIFByb2plY3RSZXZpZXcgfSBmcm9tICcuL3BhZ2VzJztcblxuY29uc3Qgcm91dGVzID0gW1xuXHR7XG5cdFx0bmFtZTogJ3Byb2plY3Qtb3ZlcnZpZXcnLFxuXHRcdHBhdGg6ICcvcHJvamVjdHMnLFxuXHRcdGNvbXBvbmVudDogUHJvamVjdE92ZXJ2aWV3LFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3Byb2plY3QtZGV0YWlsJyxcblx0XHRwYXRoOiAnL3Byb2plY3RzLzppZCcsXG5cdFx0Y29tcG9uZW50OiBQcm9qZWN0RGV0YWlsLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3Byb2plY3QtcmV2aWV3Jyxcblx0XHRwYXRoOiAnL3Byb2plY3RzLzppZC9yZXZpZXcvOmlkJyxcblx0XHRjb21wb25lbnQ6IFByb2plY3RSZXZpZXcsXG5cdH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdwYXJzbGV5anMnO1xuXG5jb25zdCBwYXJzbGV5Q29uZmlnID0ge1xuICAgIGVycm9yQ2xhc3M6ICdpcy1lcnJvcicsXG4gICAgZXhjbHVkZWQ6ICdpbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0sIGlucHV0W3R5cGU9aGlkZGVuXSwgW2Rpc2FibGVkXSwgOmhpZGRlbicsXG4gICAgc3VjY2Vzc0NsYXNzOiAnaXMtc3VjY2Vzcydcbn07XG5cbiQoJ2Zvcm06bm90KFtub3ZhbGlkYXRlXSknKS5wYXJzbGV5KHBhcnNsZXlDb25maWcpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==