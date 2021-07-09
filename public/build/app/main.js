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

/***/ "./assets/app/img/icons/check-circle.svg":
/*!***********************************************!*\
  !*** ./assets/app/img/icons/check-circle.svg ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/check-circle.svg";

/***/ }),

/***/ "./assets/app/img/icons/check.svg":
/*!****************************************!*\
  !*** ./assets/app/img/icons/check.svg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/check.svg";

/***/ }),

/***/ "./assets/app/img/icons/chevron.svg":
/*!******************************************!*\
  !*** ./assets/app/img/icons/chevron.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/chevron.svg";

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

/***/ "./assets/app/img/icons/comment.svg":
/*!******************************************!*\
  !*** ./assets/app/img/icons/comment.svg ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/comment.svg";

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

/***/ "./assets/app/img/icons/next.svg":
/*!***************************************!*\
  !*** ./assets/app/img/icons/next.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/next.svg";

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

/***/ "./assets/app/js/App.jsx":
/*!*******************************!*\
  !*** ./assets/app/js/App.jsx ***!
  \*******************************/
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components */ "./assets/app/js/components/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services */ "./assets/app/js/services/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animations */ "./assets/app/js/animations/index.js");
/* harmony import */ var _context_mainContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./context/mainContext */ "./assets/app/js/context/mainContext.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api */ "./assets/app/js/api/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes */ "./assets/app/js/routes.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./hooks */ "./assets/app/js/hooks/index.js");
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


/* Services */


/* Animations */


/* Context */


/* Api */


/* Routes */


/* Hooks */


function App() {
  /* Render */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RouterBody, null));
}

var RouterBody = function RouterBody() {
  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      currentUser = _useState2[0],
      setCurrentUser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      userRole = _useState4[0],
      setUserRole = _useState4[1];
  /* Hooks */


  var _useStorage = Object(_hooks__WEBPACK_IMPORTED_MODULE_11__["useStorage"])('userId', atob(window.location.search.replace('?', ''))),
      _useStorage2 = _slicedToArray(_useStorage, 1),
      userId = _useStorage2[0];

  var location = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useLocation"])();
  /* Queries */

  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_api__WEBPACK_IMPORTED_MODULE_9__["QUERY_KEYS"].CURRENT_USER, function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_9__["fetchCurrentUser"])({
      userId: userId
    });
  }, {
    retry: false,
    onSuccess: function onSuccess(user) {
      setCurrentUser(user);
      setUserRole(Object(_services__WEBPACK_IMPORTED_MODULE_6__["getRole"])(user));
    }
  }),
      isLoading = _useQuery.isLoading;
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context_mainContext__WEBPACK_IMPORTED_MODULE_8__["default"].Provider, {
    value: {
      currentUser: currentUser,
      setCurrentUser: setCurrentUser,
      userRole: userRole
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__["AnimatePresence"], null, ![_routes__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].login, _routes__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].signup].includes(location.pathname) && !location.pathname.includes('review') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["HeaderNavigation"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["PageLoader"], {
    isLoading: isLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__["AnimatePresence"], {
    exitBeforeEnter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    location: location,
    key: location.pathname
  }, currentUser && [_routes__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].login, _routes__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].signup].includes(location.pathname) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: _routes__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].projects
  }), !currentUser && location.pathname.includes(_routes__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].projects) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
    to: _routes__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].login
  }), _routes__WEBPACK_IMPORTED_MODULE_10__["default"].map(function (_ref) {
    var path = _ref.path,
        Component = _ref.component,
        props = _ref.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      key: path,
      path: path,
      exact: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, _extends({
      key: path
    }, _animations__WEBPACK_IMPORTED_MODULE_7__["FADE_IN"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread(_objectSpread({}, props), {}, {
      currentUser: currentUser,
      userRole: userRole
    }))));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], {
    hideProgressBar: true,
    newestOnTop: true,
    position: 'bottom-left',
    closeButton: false
  }));
};

/***/ }),

/***/ "./assets/app/js/animations/index.js":
/*!*******************************************!*\
  !*** ./assets/app/js/animations/index.js ***!
  \*******************************************/
/*! exports provided: FADE_IN, FADE_IN_UP, SCALE_IN_UP, TRANSFORM_UP, SCALE_FADE, STAGGER_UP, STAGGER_LEFT, SLIDE_IN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FADE_IN", function() { return FADE_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FADE_IN_UP", function() { return FADE_IN_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCALE_IN_UP", function() { return SCALE_IN_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSFORM_UP", function() { return TRANSFORM_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCALE_FADE", function() { return SCALE_FADE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STAGGER_UP", function() { return STAGGER_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STAGGER_LEFT", function() { return STAGGER_LEFT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLIDE_IN", function() { return SLIDE_IN; });
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

var FADE_IN_UP = function FADE_IN_UP() {
  var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  return {
    initial: {
      y: y,
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
      y: y,
      opacity: 0,
      transition: {
        type: 'spring',
        damping: 42,
        stiffness: 1200
      }
    }
  };
};

var SCALE_IN_UP = function SCALE_IN_UP() {
  var y = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  return {
    initial: {
      y: y,
      scale: 0.5,
      transformOrigin: '50% 100%',
      opacity: 0
    },
    animate: {
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 42,
        stiffness: 800
      }
    },
    exit: {
      y: y,
      scale: 0.5,
      opacity: 0,
      transition: {
        type: 'spring',
        damping: 42,
        stiffness: 1200
      }
    }
  };
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

var SLIDE_IN = {
  initial: {
    x: '-100%'
  },
  animate: {
    x: '0%',
    transition: {
      duration: 0.2,
      ease: [0.65, 0, 0.35, 1]
    }
  },
  exit: {
    x: '-100%',
    transition: {
      duration: 0.1,
      ease: [0.65, 0, 0.35, 1]
    }
  }
};


/***/ }),

/***/ "./assets/app/js/api/comment.js":
/*!**************************************!*\
  !*** ./assets/app/js/api/comment.js ***!
  \**************************************/
/*! exports provided: addComment, addReply */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addReply", function() { return addReply; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* Add comment | expects phase id, user id and formRef obect */

var addComment = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var phaseId, userId, comment, mentioned, position, params, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            phaseId = _ref.phaseId, userId = _ref.userId, comment = _ref.comment, mentioned = _ref.mentioned, position = _ref.position;
            params = new FormData();
            params.append('userId', userId);
            params.append('comment', comment);
            params.append('positionX', position.xPercent);
            params.append('positionY', position.yPercent);
            params.append('referer', window.location.pathname.replace('/', ''));

            if (mentioned.length) {
              params.append('mentioned[]', mentioned);
            }

            _context.next = 10;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/comments/add/".concat(phaseId), params);

          case 10:
            result = _context.sent;
            return _context.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 12:
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
/* Add comment | expects phase id, user id and formRef obect */

var addReply = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
    var commentId, reply, mentioned, params, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            commentId = _ref3.commentId, reply = _ref3.reply, mentioned = _ref3.mentioned;
            params = new FormData();
            params.append('reply', reply);
            params.append('referer', window.location.pathname.replace('/', ''));

            if (mentioned.length) {
              params.append('mentioned[]', mentioned);
            }

            _context2.next = 7;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/comments/reply/".concat(commentId), params);

          case 7:
            result = _context2.sent;
            return _context2.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 9:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function addReply(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./assets/app/js/api/index.js":
/*!************************************!*\
  !*** ./assets/app/js/api/index.js ***!
  \************************************/
/*! exports provided: signup, login, logout, fetchProjectsByUser, fetchProjectById, addProject, deleteProjects, leaveProjects, editProject, fetchProjectImageById, addProjectImages, deleteProjectImages, editProjectImage, fetchCurrentUser, fetchGobalUsers, fetchProjectUsers, addUser, deleteUser, addComment, addReply, nextPhase, QUERY_KEYS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_KEYS", function() { return QUERY_KEYS; });
/* harmony import */ var _security__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./security */ "./assets/app/js/api/security.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return _security__WEBPACK_IMPORTED_MODULE_0__["signup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _security__WEBPACK_IMPORTED_MODULE_0__["login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return _security__WEBPACK_IMPORTED_MODULE_0__["logout"]; });

/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./assets/app/js/api/project.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchProjectsByUser", function() { return _project__WEBPACK_IMPORTED_MODULE_1__["fetchProjectsByUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchProjectById", function() { return _project__WEBPACK_IMPORTED_MODULE_1__["fetchProjectById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addProject", function() { return _project__WEBPACK_IMPORTED_MODULE_1__["addProject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteProjects", function() { return _project__WEBPACK_IMPORTED_MODULE_1__["deleteProjects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leaveProjects", function() { return _project__WEBPACK_IMPORTED_MODULE_1__["leaveProjects"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "editProject", function() { return _project__WEBPACK_IMPORTED_MODULE_1__["editProject"]; });

/* harmony import */ var _projectImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectImage */ "./assets/app/js/api/projectImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchProjectImageById", function() { return _projectImage__WEBPACK_IMPORTED_MODULE_2__["fetchProjectImageById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addProjectImages", function() { return _projectImage__WEBPACK_IMPORTED_MODULE_2__["addProjectImages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteProjectImages", function() { return _projectImage__WEBPACK_IMPORTED_MODULE_2__["deleteProjectImages"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "editProjectImage", function() { return _projectImage__WEBPACK_IMPORTED_MODULE_2__["editProjectImage"]; });

/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./assets/app/js/api/user.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchCurrentUser", function() { return _user__WEBPACK_IMPORTED_MODULE_3__["fetchCurrentUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchGobalUsers", function() { return _user__WEBPACK_IMPORTED_MODULE_3__["fetchGobalUsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fetchProjectUsers", function() { return _user__WEBPACK_IMPORTED_MODULE_3__["fetchProjectUsers"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addUser", function() { return _user__WEBPACK_IMPORTED_MODULE_3__["addUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return _user__WEBPACK_IMPORTED_MODULE_3__["deleteUser"]; });

/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comment */ "./assets/app/js/api/comment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return _comment__WEBPACK_IMPORTED_MODULE_4__["addComment"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addReply", function() { return _comment__WEBPACK_IMPORTED_MODULE_4__["addReply"]; });

/* harmony import */ var _phase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./phase */ "./assets/app/js/api/phase.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "nextPhase", function() { return _phase__WEBPACK_IMPORTED_MODULE_5__["nextPhase"]; });







var QUERY_KEYS = {
  CURRENT_USER: 'current_user',
  PROJECT_BY_USER: 'project_by_user',
  PROJECT_BY_ID: 'project_by_id',
  PROJECT_IMAGE_BY_ID: 'project_image_by_id',
  GLOBAL_USERS: 'global_users',
  PROJECT_USERS: 'project_users'
};

/***/ }),

/***/ "./assets/app/js/api/phase.js":
/*!************************************!*\
  !*** ./assets/app/js/api/phase.js ***!
  \************************************/
/*! exports provided: nextPhase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextPhase", function() { return nextPhase; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* Next phase | expects phase id and image (blob) */

var nextPhase = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var phaseId, images, params, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            phaseId = _ref.phaseId, images = _ref.images;
            params = new FormData();
            images.forEach(function (image, imageIndex) {
              params.append("images[".concat(imageIndex, "][original]"), image.original);
              params.append("images[".concat(imageIndex, "][thumbnail]"), image.thumbnail);
              params.append("images[".concat(imageIndex, "][thumbnailRetina]"), image.thumbnailRetina);
            });
            _context.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/phase/next/".concat(phaseId), params);

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

  return function nextPhase(_x) {
    return _ref2.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./assets/app/js/api/project.js":
/*!**************************************!*\
  !*** ./assets/app/js/api/project.js ***!
  \**************************************/
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

/***/ "./assets/app/js/api/projectImage.js":
/*!*******************************************!*\
  !*** ./assets/app/js/api/projectImage.js ***!
  \*******************************************/
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
            images.forEach(function (image, imageIndex) {
              params.append("images[".concat(imageIndex, "][original]"), image.original);
              params.append("images[".concat(imageIndex, "][thumbnail]"), image.thumbnail);
              params.append("images[".concat(imageIndex, "][thumbnailRetina]"), image.thumbnailRetina);
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

/***/ "./assets/app/js/api/security.js":
/*!***************************************!*\
  !*** ./assets/app/js/api/security.js ***!
  \***************************************/
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


/* Signup to platform | expects formRef object and optional userId */

var signup = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var formRef, userId, url, params, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            formRef = _ref.formRef, userId = _ref.userId;
            url = '/api/signup';
            if (userId) url = "/api/signup/".concat(userId);
            params = new FormData(formRef.current);
            _context.next = 6;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, params);

          case 6:
            result = _context.sent;
            return _context.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 8:
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

/***/ "./assets/app/js/api/user.js":
/*!***********************************!*\
  !*** ./assets/app/js/api/user.js ***!
  \***********************************/
/*! exports provided: fetchCurrentUser, fetchGobalUsers, fetchProjectUsers, addUser, deleteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCurrentUser", function() { return fetchCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGobalUsers", function() { return fetchGobalUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProjectUsers", function() { return fetchProjectUsers; });
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
/* Fetch project users */

var fetchProjectUsers = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref4) {
    var projectId, result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            projectId = _ref4.projectId;
            _context3.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/users/get/project/".concat(projectId));

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

  return function fetchProjectUsers(_x2) {
    return _ref5.apply(this, arguments);
  };
}();
/* Add user to project | expects project id and user email */

var addUser = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref6) {
    var projectId, email, result;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            projectId = _ref6.projectId, email = _ref6.email;
            _context4.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/users/add/".concat(projectId), {
              email: email,
              referer: window.location.pathname.replace('/', '')
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

  return function addUser(_x3) {
    return _ref7.apply(this, arguments);
  };
}();
/* Delete user from project | expects project id and user id */

var deleteUser = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref8) {
    var projectId, userId, result;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            projectId = _ref8.projectId, userId = _ref8.userId;
            _context5.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/users/delete/".concat(projectId), {
              userId: userId
            });

          case 3:
            result = _context5.sent;
            return _context5.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 5:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function deleteUser(_x4) {
    return _ref9.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./assets/app/js/components/action-menu/ActionMenu.jsx":
/*!*************************************************************!*\
  !*** ./assets/app/js/components/action-menu/ActionMenu.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ActionMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_mainContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/mainContext */ "./assets/app/js/context/mainContext.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */



/* Components */


/* Animations */


/* Assets */


/* Context */


function ActionMenu(_ref) {
  var selected = _ref.selected,
      resetSelected = _ref.resetSelected,
      actions = _ref.actions;

  /* Hooks */
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_6__["default"]),
      userRole = _useContext.userRole;
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({}, _animations__WEBPACK_IMPORTED_MODULE_4__["TRANSFORM_UP"], {
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
    src: icons_close_svg__WEBPACK_IMPORTED_MODULE_5___default.a
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
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["LoadingWrapper"], {
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

/***/ "./assets/app/js/components/alert/Alert.jsx":
/*!**************************************************!*\
  !*** ./assets/app/js/components/alert/Alert.jsx ***!
  \**************************************************/
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


/* Assets */





/* Global */

var appearanceTypes = {
  warning: {
    title: 'Warning',
    icon: icons_warning_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  danger: {
    title: 'Error',
    icon: icons_danger_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  },
  success: {
    title: 'Success',
    icon: icons_success_svg__WEBPACK_IMPORTED_MODULE_5___default.a
  }
};
function Alert(_ref) {
  var message = _ref.message,
      appearance = _ref.appearance,
      closeToast = _ref.closeToast;

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
    className: "alert__message text--sm text-muted--70 mr-lg-8"
  }, message));
}

/***/ }),

/***/ "./assets/app/js/components/background/Background.jsx":
/*!************************************************************!*\
  !*** ./assets/app/js/components/background/Background.jsx ***!
  \************************************************************/
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

/***/ "./assets/app/js/components/button/Button.jsx":
/*!****************************************************!*\
  !*** ./assets/app/js/components/button/Button.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var icons_check_circle_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! icons/check-circle.svg */ "./assets/app/img/icons/check-circle.svg");
/* harmony import */ var icons_check_circle_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(icons_check_circle_svg__WEBPACK_IMPORTED_MODULE_3__);
/* {ackages */


/* Components */


/* Assets */


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
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
      _ref$contentType = _ref.contentType,
      contentType = _ref$contentType === void 0 ? 'text' : _ref$contentType,
      children = _ref.children;

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
  }, contentType === 'text' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    title: title,
    isLoading: isLoading,
    children: children
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    isLoading: isLoading
  }));
}

var Text = function Text(_ref2) {
  var title = _ref2.title,
      isLoading = _ref2.isLoading,
      children = _ref2.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["LoadingWrapper"], {
    loading: isLoading,
    loaderSize: 16,
    classes: {
      loaderClasses: 'position-absolute d-flex text-secondary',
      defaultClasses: 'd-flex align-items-center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn__text"
  }, title), children);
};

var Icon = function Icon(_ref3) {
  var isLoading = _ref3.isLoading;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-wrapper icon-wrapper--secondary icon-wrapper--interactive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["LoadingWrapper"], {
    loading: isLoading,
    loaderSize: 14,
    classes: {
      loaderClasses: 'position-absolute d-flex text-secondary',
      defaultClasses: 'd-flex'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "alert__icon icon icon--14 text-secondary",
    src: icons_check_circle_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  })));
};

/***/ }),

/***/ "./assets/app/js/components/dropzone/Dropzone.jsx":
/*!********************************************************!*\
  !*** ./assets/app/js/components/dropzone/Dropzone.jsx ***!
  \********************************************************/
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services */ "./assets/app/js/services/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
/* harmony import */ var icons_add_image_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! icons/add_image.svg */ "./assets/app/img/icons/add_image.svg");
/* harmony import */ var icons_add_image_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(icons_add_image_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var icons_upload_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! icons/upload.svg */ "./assets/app/img/icons/upload.svg");
/* harmony import */ var icons_upload_svg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(icons_upload_svg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../api */ "./assets/app/js/api/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* Packages */





/* Components */


/* Services */


/* Animations */


/* Assets */



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


  var addProjectImagesMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_10__["addProjectImages"], {
    onSuccess: function onSuccess() {
      return queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_10__["QUERY_KEYS"].PROJECT_BY_ID, projectId]);
    }
  });
  var deleteProjectImagesMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_10__["deleteProjectImages"], {
    onSuccess: function onSuccess() {
      return queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_10__["QUERY_KEYS"].PROJECT_BY_ID, projectId]);
    }
  });
  /* Callbacks */

  var updateProjectImages = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(action, props) {
      var resizedImages;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(action === 'add' && props.images)) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return Object(_services__WEBPACK_IMPORTED_MODULE_6__["resizeImages"])(props.images);

            case 3:
              resizedImages = _context.sent;
              addProjectImagesMutation.mutate({
                projectId: projectId,
                images: resizedImages
              });

            case 5:
              if (action === 'delete') deleteProjectImagesMutation.mutate(_objectSpread({
                projectId: projectId
              }, props));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function updateProjectImages(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();
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

var DropzoneInner = function DropzoneInner(_ref3) {
  var addImageLoading = _ref3.addImageLoading,
      updateProjectImages = _ref3.updateProjectImages,
      isParentDragActive = _ref3.isParentDragActive,
      positition = _ref3.positition;

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
  }, getRootProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", getInputProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["AnimatePresence"], null, (isDragActive || isParentDragActive) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, _extends({}, _animations__WEBPACK_IMPORTED_MODULE_7__["FADE_IN"], {
    className: "dropzone__overlay"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-wrapper icon-wrapper--secondary",
    style: {
      '--size': 75
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--30 text-secondary",
    src: icons_upload_svg__WEBPACK_IMPORTED_MODULE_9___default.a
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].button, _extends({}, _animations__WEBPACK_IMPORTED_MODULE_7__["SCALE_FADE"], {
    key: "add-project",
    type: "button",
    className: "icon-wrapper icon-wrapper--interactive icon-wrapper--secondary btn btn-link btn--add btn--add-".concat(positition),
    style: {
      '--size': 75
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["LoadingWrapper"], {
    loading: addImageLoading,
    classes: {
      loaderClasses: 'position-absolute d-flex text-secondary'
    },
    loaderSize: 30
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--30 text-secondary",
    src: icons_add_image_svg__WEBPACK_IMPORTED_MODULE_8___default.a
  }))));
};

/***/ }),

/***/ "./assets/app/js/components/dropzone/DropzoneSingle.jsx":
/*!**************************************************************!*\
  !*** ./assets/app/js/components/dropzone/DropzoneSingle.jsx ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropzoneSingle; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var icons_add_image_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/add_image.svg */ "./assets/app/img/icons/add_image.svg");
/* harmony import */ var icons_add_image_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_add_image_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var icons_upload_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/upload.svg */ "./assets/app/img/icons/upload.svg");
/* harmony import */ var icons_upload_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_upload_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ */ "./assets/app/js/components/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services */ "./assets/app/js/services/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */




/* Assets */




/* Components */


/* Animations */


/* Services */


function DropzoneSingle(_ref) {
  var _ref$images = _slicedToArray(_ref.images, 1),
      image = _ref$images[0],
      setImages = _ref.setImages;

  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_2__["useDropzone"])({
    accept: 'image/*',
    maxFiles: 1,
    onDrop: function () {
      var _onDrop = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(acceptedFiles) {
        var resizedImages;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_services__WEBPACK_IMPORTED_MODULE_9__["resizeImages"])(acceptedFiles);

              case 2:
                resizedImages = _context.sent;
                setImages(resizedImages);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function onDrop(_x) {
        return _onDrop.apply(this, arguments);
      }

      return onDrop;
    }()
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive;
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: "dropzone dropzone--single mt-2"
  }, getRootProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", getInputProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], {
    initial: false,
    exitBeforeEnter: true
  }, !image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({}, _animations__WEBPACK_IMPORTED_MODULE_8__["SCALE_FADE"], {
    className: "icon-wrapper icon-wrapper--interactive icon-wrapper--secondary",
    style: {
      '--size': 44
    }
  }), isDragActive ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({
    key: "upload"
  }, _animations__WEBPACK_IMPORTED_MODULE_8__["SCALE_FADE"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_3__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--20 text-secondary",
    src: icons_upload_svg__WEBPACK_IMPORTED_MODULE_5___default.a
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({
    key: "add"
  }, _animations__WEBPACK_IMPORTED_MODULE_8__["SCALE_FADE"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_3__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--20 text-secondary",
    src: icons_add_image_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }))), image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({
    key: "container"
  }, _animations__WEBPACK_IMPORTED_MODULE_8__["FADE_IN"], {
    className: "dropzone__container"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_7__["Image"], {
    className: "dropzone__image",
    src: image.thumbnail.preview,
    srcSet: "".concat(image.thumbnailRetina.preview, " 2x"),
    alt: image.thumbnail.name
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-link dropzone__image-delete p-0",
    onClick: function onClick(event) {
      event.stopPropagation();
      setImages([]);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropzone__image-delete-icon icon-wrapper icon-wrapper--danger mx-auto",
    style: {
      '--size': 50
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_3__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--14 text-danger mt-0",
    src: icons_close_svg__WEBPACK_IMPORTED_MODULE_6___default.a
  }))))));
}

/***/ }),

/***/ "./assets/app/js/components/editable/Editable.jsx":
/*!********************************************************!*\
  !*** ./assets/app/js/components/editable/Editable.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Editable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _EditableBody__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditableBody */ "./assets/app/js/components/editable/EditableBody.jsx");
/* harmony import */ var icons_edit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/edit.svg */ "./assets/app/img/icons/edit.svg");
/* harmony import */ var icons_edit_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_edit_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_mainContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/mainContext */ "./assets/app/js/context/mainContext.js");
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


/* Domain */


/* Assets */


/* Context */


function Editable(_ref) {
  var title = _ref.title,
      _ref$subtitle = _ref.subtitle,
      subtitle = _ref$subtitle === void 0 ? 'Save when ready' : _ref$subtitle,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["title", "subtitle", "children"]);

  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalOpen = _useState2[0],
      setModalOpen = _useState2[1];
  /* Hooks */


  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_5__["default"]),
      userRole = _useContext.userRole;
  /* Callbacks */


  var toggleModal = function toggleModal() {
    return setModalOpen(!modalOpen);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editable d-flex align-items-baseline position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editable__content"
  }, children), userRole === 'admin' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "editable__toggle btn btn-link icon-wrapper icon-wrapper--secondary icon-wrapper--interactive stretched-link ml-3",
    onClick: toggleModal,
    style: {
      '--size': 25
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--10 text-secondary",
    src: icons_edit_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: title,
    subtitle: subtitle,
    modalOpen: modalOpen,
    toggleModal: toggleModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditableBody__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({
    toggleModal: toggleModal
  }, rest)))));
}

/***/ }),

/***/ "./assets/app/js/components/editable/EditableBody.jsx":
/*!************************************************************!*\
  !*** ./assets/app/js/components/editable/EditableBody.jsx ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditableBody; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services */ "./assets/app/js/services/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Packages */


/* Assets */


/* Elements */


/* Services */


function EditableBody(_ref) {
  var fields = _ref.fields,
      toggleModal = _ref.toggleModal,
      mutation = _ref.mutation,
      mutationId = _ref.mutationId,
      mutationOnSuccess = _ref.mutationOnSuccess;

  /* Refs */
  var formRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* Mutations */

  var editMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(mutation, {
    onSuccess: function onSuccess() {
      mutationOnSuccess();
      toggleModal();
    }
  });
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    ref: formRef,
    className: "d-flex flex-column align-items-center flex-grow-1 position-relative",
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      editMutation.mutate({
        formRef: formRef,
        id: mutationId
      });
    }
  }, fields.map(function (field, fieldIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Field, _extends({
      key: fieldIndex
    }, _objectSpread(_objectSpread({}, field), {}, {
      shouldFocus: fieldIndex === 0
    })));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    title: 'Save',
    contentType: fields.length === 1 ? 'icon' : 'text',
    extensionClasses: fields.length === 1 ? 'form-control-btn' : 'w-50 justify-content-center mt-3',
    theme: fields.length === 1 ? 'default' : 'secondary',
    isLoading: editMutation.isLoading,
    type: 'submit'
  }));
}

var Field = function Field(_ref2) {
  var name = _ref2.name,
      defaultValue = _ref2.defaultValue,
      _ref2$shouldFocus = _ref2.shouldFocus,
      shouldFocus = _ref2$shouldFocus === void 0 ? false : _ref2$shouldFocus;

  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultValue),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];
  /* Refs */


  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* Effects */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _inputRef$current;

    if (inputRef !== null && inputRef !== void 0 && inputRef.current && shouldFocus) inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.select();
  }, []);
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: name
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_1__["TextareaAutosize"], {
    className: "form-control form-control--text",
    id: name,
    name: name,
    type: "text",
    value: value,
    onChange: function onChange(_ref3) {
      var value = _ref3.target.value;
      return setValue(value);
    },
    ref: inputRef,
    placeholder: Object(_services__WEBPACK_IMPORTED_MODULE_4__["capitalizeFirstLetter"])(name),
    onFocus: function onFocus() {
      return inputRef.current.select();
    }
  }));
};

/***/ }),

/***/ "./assets/app/js/components/header/Header.jsx":
/*!****************************************************!*\
  !*** ./assets/app/js/components/header/Header.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../routes */ "./assets/app/js/routes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */



/* Animations */


/* Routes */


function Header() {
  /* Render */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].header, _extends({
    className: "main-header"
  }, _animations__WEBPACK_IMPORTED_MODULE_3__["FADE_IN"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid px-5 pt-5 px-lg-6 pt-lg-6 px-xl-12 pt-xl-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-header__logo logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "logo__link text-reset",
    to: _routes__WEBPACK_IMPORTED_MODULE_4__["ROUTES"].login,
    title: "Parallel Dashboard"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "logo__title text-uppercase mb-0"
  }, "Parallel"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "logo__subtitle text-uppercase font-weight-light mt-n1"
  }, "Dashboard")))));
}

/***/ }),

/***/ "./assets/app/js/components/header/HeaderNavigation.jsx":
/*!**************************************************************!*\
  !*** ./assets/app/js/components/header/HeaderNavigation.jsx ***!
  \**************************************************************/
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
/* harmony import */ var _context_mainContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/mainContext */ "./assets/app/js/context/mainContext.js");
/* harmony import */ var _api_security__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../api/security */ "./assets/app/js/api/security.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../routes */ "./assets/app/js/routes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */






/* Components */


/* Animations */


/* Context */


/* Api */


/* Routes */


function HeaderNavigation() {
  /* Hooks */
  var history = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_8__["default"]),
      setCurrentUser = _useContext.setCurrentUser;
  /* Mutations */


  var logoutMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_api_security__WEBPACK_IMPORTED_MODULE_9__["logout"], {
    onSuccess: function onSuccess() {
      history.push(_routes__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].login);
      setCurrentUser(null);
      sessionStorage.removeItem('userId');
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
        message: 'Successfully logged out!',
        appearance: "success"
      }));
    },
    onError: function onError() {
      return Object(react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
        message: 'Something went wrong!',
        appearance: "danger"
      }));
    }
  });
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_5__["motion"].header, _extends({
    className: "main-header main-header--projects"
  }, _animations__WEBPACK_IMPORTED_MODULE_7__["FADE_IN"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-header__wrapper d-flex align-items-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-header__logo logo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    className: "logo__link text-reset",
    to: _routes__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].projects,
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

/***/ "./assets/app/js/components/image/image.jsx":
/*!**************************************************!*\
  !*** ./assets/app/js/components/image/image.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Image; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
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


function Image(props) {
  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];
  /* Constants*/


  var transition = {
    duration: 0.2,
    ease: [0.65, 0, 0.35, 1]
  };
  var variants = {
    hidden: {
      opacity: 0,
      transition: transition
    },
    visible: {
      opacity: 1,
      transition: transition
    }
  };
  /* Callbacks */

  var onLoad = function onLoad() {
    return setLoaded(true);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].img, _extends({
    key: props.src,
    initial: "hidden",
    animate: loaded ? 'visible' : 'hidden'
  }, _objectSpread(_objectSpread({}, props), {}, {
    onLoad: onLoad,
    variants: variants
  })));
}

/***/ }),

/***/ "./assets/app/js/components/index.js":
/*!*******************************************!*\
  !*** ./assets/app/js/components/index.js ***!
  \*******************************************/
/*! exports provided: ActionMenu, Alert, Background, Modal, ModalHeader, Button, Dropzone, DropzoneSingle, Editable, EditableBody, LoadingWrapper, SlideIn, PageLoader, PageWrapper, UserAdd, UserAddSearch, UserAddSearchResults, Header, HeaderNavigation, UserAvatar, UserInfo, User, Users, UserSelect, SecurityModal, LoginForm, SignupForm, Image */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_menu_ActionMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-menu/ActionMenu */ "./assets/app/js/components/action-menu/ActionMenu.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionMenu", function() { return _action_menu_ActionMenu__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _alert_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert/Alert */ "./assets/app/js/components/alert/Alert.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _alert_Alert__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _background_Background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background/Background */ "./assets/app/js/components/background/Background.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return _background_Background__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _modal_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal/Modal */ "./assets/app/js/components/modal/Modal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _modal_Modal__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _modal_ModalHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal/ModalHeader */ "./assets/app/js/components/modal/ModalHeader.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModalHeader", function() { return _modal_ModalHeader__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./button/Button */ "./assets/app/js/components/button/Button.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button_Button__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _dropzone_Dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropzone/Dropzone */ "./assets/app/js/components/dropzone/Dropzone.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropzone", function() { return _dropzone_Dropzone__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _dropzone_DropzoneSingle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropzone/DropzoneSingle */ "./assets/app/js/components/dropzone/DropzoneSingle.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DropzoneSingle", function() { return _dropzone_DropzoneSingle__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _editable_Editable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editable/Editable */ "./assets/app/js/components/editable/Editable.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editable", function() { return _editable_Editable__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _editable_EditableBody__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editable/EditableBody */ "./assets/app/js/components/editable/EditableBody.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableBody", function() { return _editable_EditableBody__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _loading_wrapper_LoadingWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loading-wrapper/LoadingWrapper */ "./assets/app/js/components/loading-wrapper/LoadingWrapper.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingWrapper", function() { return _loading_wrapper_LoadingWrapper__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _slide_in_SlideIn__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./slide-in/SlideIn */ "./assets/app/js/components/slide-in/SlideIn.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlideIn", function() { return _slide_in_SlideIn__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _page_loader_PageLoader__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-loader/PageLoader */ "./assets/app/js/components/page-loader/PageLoader.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageLoader", function() { return _page_loader_PageLoader__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _page_wrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./page-wrapper/PageWrapper */ "./assets/app/js/components/page-wrapper/PageWrapper.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageWrapper", function() { return _page_wrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _user_add_UserAdd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-add/UserAdd */ "./assets/app/js/components/user-add/UserAdd.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAdd", function() { return _user_add_UserAdd__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _user_add_UserAddSearch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-add/UserAddSearch */ "./assets/app/js/components/user-add/UserAddSearch.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAddSearch", function() { return _user_add_UserAddSearch__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _user_add_UserAddSearchResults__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-add/UserAddSearchResults */ "./assets/app/js/components/user-add/UserAddSearchResults.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAddSearchResults", function() { return _user_add_UserAddSearchResults__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header/Header */ "./assets/app/js/components/header/Header.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header_Header__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _header_HeaderNavigation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./header/HeaderNavigation */ "./assets/app/js/components/header/HeaderNavigation.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderNavigation", function() { return _header_HeaderNavigation__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _users_User__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./users/User */ "./assets/app/js/components/users/User.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAvatar", function() { return _users_User__WEBPACK_IMPORTED_MODULE_19__["UserAvatar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return _users_User__WEBPACK_IMPORTED_MODULE_19__["UserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _users_User__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _users_Users__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./users/Users */ "./assets/app/js/components/users/Users.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return _users_Users__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _users_UserSelect__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./users/UserSelect */ "./assets/app/js/components/users/UserSelect.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSelect", function() { return _users_UserSelect__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _security_SecurityModal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./security/SecurityModal */ "./assets/app/js/components/security/SecurityModal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecurityModal", function() { return _security_SecurityModal__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _security_LoginForm__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./security/LoginForm */ "./assets/app/js/components/security/LoginForm.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginForm", function() { return _security_LoginForm__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _security_SignupForm__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./security/SignupForm */ "./assets/app/js/components/security/SignupForm.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignupForm", function() { return _security_SignupForm__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _image_image__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./image/image */ "./assets/app/js/components/image/image.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return _image_image__WEBPACK_IMPORTED_MODULE_25__["default"]; });





























/***/ }),

/***/ "./assets/app/js/components/loading-wrapper/LoadingWrapper.jsx":
/*!*********************************************************************!*\
  !*** ./assets/app/js/components/loading-wrapper/LoadingWrapper.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadingWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
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

/***/ "./assets/app/js/components/modal/Modal.jsx":
/*!**************************************************!*\
  !*** ./assets/app/js/components/modal/Modal.jsx ***!
  \**************************************************/
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
/* harmony import */ var _ModalHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ModalHeader */ "./assets/app/js/components/modal/ModalHeader.jsx");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks */ "./assets/app/js/hooks/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */



/* Domain */


/* Animations */


/* Hooks */


function Modal(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      modalOpen = _ref.modalOpen,
      toggleModal = _ref.toggleModal,
      children = _ref.children,
      _ref$renderOnBody = _ref.renderOnBody,
      renderOnBody = _ref$renderOnBody === void 0 ? true : _ref$renderOnBody,
      _ref$center = _ref.center,
      center = _ref$center === void 0 ? true : _ref$center,
      extensionClasses = _ref.extensionClasses,
      _ref$components = _ref.components,
      components = _ref$components === void 0 ? {} : _ref$components,
      customAnimation = _ref.customAnimation;

  /* Constants */
  var _components$HeaderCom = components.HeaderComponent,
      HeaderComponent = _components$HeaderCom === void 0 ? _ModalHeader__WEBPACK_IMPORTED_MODULE_3__["default"] : _components$HeaderCom;
  var animation = customAnimation !== null && customAnimation !== void 0 ? customAnimation : _animations__WEBPACK_IMPORTED_MODULE_4__["FADE_IN_UP"];
  /* Hooks */

  Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useCloseOnEsc"])(modalOpen, toggleModal);

  var render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], null, modalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "custom-modal ".concat(center && 'custom-modal--center', " ").concat(extensionClasses)
    }, renderOnBody && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
      className: "custom-modal-overlay"
    }, _animations__WEBPACK_IMPORTED_MODULE_4__["FADE_IN"], {
      onClick: toggleModal
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
      key: "custom-modal-content",
      className: "custom-modal__content border p-5"
    }, animation()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderComponent, {
      title: title,
      subtitle: subtitle,
      toggleModal: toggleModal
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "custom-modal__body d-flex mt-2"
    }, children))));
  };
  /* Render */


  if (renderOnBody) {
    return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(render(), document.body);
  }

  return render();
}

/***/ }),

/***/ "./assets/app/js/components/modal/ModalHeader.jsx":
/*!********************************************************!*\
  !*** ./assets/app/js/components/modal/ModalHeader.jsx ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ModalHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_2__);
/* Packages */


/* Assets */


function ModalHeader(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      toggleModal = _ref.toggleModal;

  /* Render */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-modal__header d-flex align-items-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "custom-modal__title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "custom-modal__close btn btn-link ml-auto",
    onClick: toggleModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--12",
    src: icons_close_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  }))), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "custom-modal__subtitle"
  }, subtitle))));
}

/***/ }),

/***/ "./assets/app/js/components/page-loader/PageLoader.jsx":
/*!*************************************************************!*\
  !*** ./assets/app/js/components/page-loader/PageLoader.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageLoader; });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
/* Packages */



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

/***/ "./assets/app/js/components/page-wrapper/PageWrapper.jsx":
/*!***************************************************************!*\
  !*** ./assets/app/js/components/page-wrapper/PageWrapper.jsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PageWrapper; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* Packages */

function PageWrapper(_ref) {
  var children = _ref.children;

  /* Render */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "main-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "pane py-5 py-lg-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid"
  }, children)));
}

/***/ }),

/***/ "./assets/app/js/components/security/LoginForm.jsx":
/*!*********************************************************!*\
  !*** ./assets/app/js/components/security/LoginForm.jsx ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .. */ "./assets/app/js/components/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ "./assets/app/js/api/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks */ "./assets/app/js/hooks/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../routes */ "./assets/app/js/routes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */





/* Components */


/* Api */


/* Hooks */


/* Routes */


function LoginForm(_ref) {
  var _errors$email, _errors$password;

  var currentUser = _ref.currentUser,
      toggleModal = _ref.toggleModal,
      _ref$showSignup = _ref.showSignup,
      showSignup = _ref$showSignup === void 0 ? true : _ref$showSignup;

  /* Refs */
  var formRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* Hooks */

  Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["usePageTitle"])('Login');
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQueryClient"])();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"])({
    reValidateMode: 'onChange',
    mode: 'onBlur'
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors;
  /* Mutations */


  var loginMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_6__["login"], {
    onSuccess: function onSuccess(user) {
      queryClient.invalidateQueries(_api__WEBPACK_IMPORTED_MODULE_6__["QUERY_KEYS"].CURRENT_USER);
      if (currentUser) toggleModal();
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__["Alert"], {
        message: "Successfully logged in!",
        appearance: "success"
      }));
    },
    onError: function onError(error) {
      var _error$response, _error$response$data;

      Object(react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__["Alert"], {
        message: error !== null && error !== void 0 && (_error$response = error.response) !== null && _error$response !== void 0 && (_error$response$data = _error$response.data) !== null && _error$response$data !== void 0 && _error$response$data.error ? 'Email/password combination not found!' : 'Something went wrong!',
        appearance: "danger"
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
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
    className: "col-12 col-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__["Button"], {
    title: 'Log in',
    theme: 'secondary',
    size: 'md',
    extensionClasses: 'btn-block justify-content-center',
    type: 'submit',
    isLoading: loginMutation.isLoading
  })), showSignup && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "btn btn-outline-white btn-block",
    to: _routes__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].signup,
    title: "sign up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn__text"
  }, "Sign up")))));
}

/***/ }),

/***/ "./assets/app/js/components/security/SecurityModal.jsx":
/*!*************************************************************!*\
  !*** ./assets/app/js/components/security/SecurityModal.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SecurityModal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "./assets/app/js/components/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context */ "./assets/app/js/context/index.js");
/* Components */


/* Components */



function SecurityModal(_ref) {
  var securityModalOpen = _ref.securityModalOpen,
      setSecurityModalOpen = _ref.setSecurityModalOpen;

  /* Hooks */
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_2__["StaticContext"]),
      currentUser = _useContext.currentUser,
      userRole = _useContext.userRole;
  /* Constants */


  var title = userRole === 'basic' ? 'Signup' : 'Login';
  var subtitle = "".concat(title, " if you want to comment");
  /* Callbacks */

  var toggleSecurityModal = function toggleSecurityModal() {
    return setSecurityModalOpen(!securityModalOpen);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    title: title,
    subtitle: subtitle,
    modalOpen: securityModalOpen,
    toggleModal: toggleSecurityModal
  }, userRole === 'basic' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_1__["SignupForm"], {
    currentUser: currentUser,
    toggleModal: toggleSecurityModal,
    showLogin: false
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_1__["LoginForm"], {
    currentUser: currentUser,
    toggleModal: toggleSecurityModal,
    showSignup: false
  }));
}

/***/ }),

/***/ "./assets/app/js/components/security/SignupForm.jsx":
/*!**********************************************************!*\
  !*** ./assets/app/js/components/security/SignupForm.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SignupForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .. */ "./assets/app/js/components/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ "./assets/app/js/api/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../routes */ "./assets/app/js/routes.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hooks */ "./assets/app/js/hooks/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */





/* Components */


/* Api */


/* Routes */


/* Hooks */


function SignupForm(_ref) {
  var currentUser = _ref.currentUser,
      toggleModal = _ref.toggleModal,
      _ref$showLogin = _ref.showLogin,
      showLogin = _ref$showLogin === void 0 ? true : _ref$showLogin;

  /* Refs */
  var formRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* Hooks */

  Object(_hooks__WEBPACK_IMPORTED_MODULE_8__["usePageTitle"])('Signup');
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQueryClient"])();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useForm"])({
    reValidateMode: 'onChange',
    mode: 'onBlur'
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors,
      control = _useForm.control;

  var plainPassword = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_4__["useWatch"])({
    control: control,
    name: 'plainPassword',
    defaultValue: ''
  });
  /* Mutations */

  var signupMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_6__["signup"], {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries(_api__WEBPACK_IMPORTED_MODULE_6__["QUERY_KEYS"].CURRENT_USER);
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__["Alert"], {
        message: "Successfully logged in!",
        appearance: "success"
      }));
      if (currentUser) toggleModal();
    },
    onError: function onError(error) {
      if (error.response.status === 500) {
        Object(react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__["Alert"], {
          message: "This email is already in use!",
          appearance: "danger"
        }));
        formRef.current.reset();
      }
    }
  });

  var onSubmit = function onSubmit() {
    return signupMutation.mutate({
      formRef: formRef,
      userId: currentUser === null || currentUser === void 0 ? void 0 : currentUser.id
    });
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    ref: formRef,
    className: "panel__form form",
    onSubmit: handleSubmit(onSubmit),
    noValidate: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row gutters-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-md-6"
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
    className: "col-md-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "registration_form_organisation"
  }, "Organisation"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    type: "text",
    id: "registration_form_organisation",
    name: "organisation",
    className: "form-control ".concat(errors.organisation && 'is-invalid'),
    placeholder: "Organisation"
  }, register('organisation', {
    required: {
      value: true,
      message: 'Please enter an organisation'
    }
  }))), errors.organisation && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "invalid-feedback"
  }, errors.organisation.message)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "registration_form_email"
  }, "Email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    type: "text",
    id: "registration_form_email",
    name: "email",
    className: "form-control ".concat(errors.email && 'is-invalid'),
    placeholder: "Email",
    value: currentUser === null || currentUser === void 0 ? void 0 : currentUser.email,
    onChange: function onChange() {}
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
    className: "col-12 col-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_5__["Button"], {
    title: 'Sign up',
    theme: 'secondary',
    size: 'md',
    extensionClasses: 'btn-block justify-content-center',
    type: 'submit',
    isLoading: signupMutation.isLoading
  })), showLogin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    className: "btn btn-outline-white btn-block",
    to: _routes__WEBPACK_IMPORTED_MODULE_7__["ROUTES"].login,
    title: "sign up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn__text"
  }, "Login")))));
}

/***/ }),

/***/ "./assets/app/js/components/slide-in/SlideIn.jsx":
/*!*******************************************************!*\
  !*** ./assets/app/js/components/slide-in/SlideIn.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SlideIn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */



/* Animations */


function SlideIn(_ref) {
  var toggleSlideIn = _ref.toggleSlideIn,
      children = _ref.children,
      domElement = _ref.domElement,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant;

  var render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: "slide-in",
      className: "slide-in slide-in--".concat(variant)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
      className: "slide-in__overlay",
      onClick: toggleSlideIn
    }, _animations__WEBPACK_IMPORTED_MODULE_3__["FADE_IN"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].article, _extends({
      key: "slide-in__content",
      className: "slide-in__content"
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

/***/ "./assets/app/js/components/user-add/UserAdd.jsx":
/*!*******************************************************!*\
  !*** ./assets/app/js/components/user-add/UserAdd.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserAdd; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var icons_add_user_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! icons/add_user.svg */ "./assets/app/img/icons/add_user.svg");
/* harmony import */ var icons_add_user_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(icons_add_user_svg__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */


/* Components */


/* Assets */


function UserAdd(_ref) {
  var users = _ref.users,
      project = _ref.project;

  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalOpen = _useState2[0],
      setModalOpen = _useState2[1];
  /* Callbacks */


  var toggleModal = function toggleModal() {
    return setModalOpen(!modalOpen);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative ml-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-link user user--lg user--add",
    type: "button",
    onClick: toggleModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user__avatar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__initials"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "user__icon icon icon--12 mt-0",
    src: icons_add_user_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Modal"], {
    title: "Select users",
    subtitle: "Choose some users to collaborate with.",
    modalOpen: modalOpen,
    toggleModal: toggleModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["UserAddSearch"], {
    users: users,
    project: project,
    toggleModal: toggleModal
  })));
}

/***/ }),

/***/ "./assets/app/js/components/user-add/UserAddSearch.jsx":
/*!*************************************************************!*\
  !*** ./assets/app/js/components/user-add/UserAddSearch.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserAddSearch; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./assets/app/js/services/index.js");
/* harmony import */ var _services_filterUsers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/filterUsers */ "./assets/app/js/components/user-add/services/filterUsers.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api */ "./assets/app/js/api/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */


/* Components */


/* Services */



/* Api */


function UserAddSearch(_ref) {
  var users = _ref.users,
      project = _ref.project,
      toggleModal = _ref.toggleModal;

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


  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_api__WEBPACK_IMPORTED_MODULE_5__["QUERY_KEYS"].GLOBAL_USERS, _api__WEBPACK_IMPORTED_MODULE_5__["fetchGobalUsers"]),
      _useQuery$data = _useQuery.data,
      globalUsers = _useQuery$data === void 0 ? [] : _useQuery$data,
      globalUsersLoading = _useQuery.isLoading;
  /* Constants */


  var filteredUsers = Object(_services_filterUsers__WEBPACK_IMPORTED_MODULE_4__["default"])(globalUsers, users, query);
  /* Refs */

  var queryRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* Hooks */

  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQueryClient"])();
  /* Mutations */

  var addUserMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_5__["addUser"], {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_5__["QUERY_KEYS"].PROJECT_BY_ID, project.id]);
      queryClient.invalidateQueries(_api__WEBPACK_IMPORTED_MODULE_5__["QUERY_KEYS"].GLOBAL_USERS);
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

        if (Object(_services__WEBPACK_IMPORTED_MODULE_3__["isEmail"])(user.email)) {
          addUserMutation.mutate({
            projectId: project.id,
            email: user.email
          });
        }
      }
    }
  };

  var handleClick = function handleClick(_ref3) {
    var email = _ref3.email;

    if (Object(_services__WEBPACK_IMPORTED_MODULE_3__["isEmail"])(email)) {
      addUserMutation.mutate({
        projectId: project.id,
        email: email
      });
    }
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column flex-grow-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Users"], {
    users: users,
    project: project,
    variant: "interactive",
    size: "lg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "userQuery"
  }, "Search name or email"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control form-control--search",
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    onClick: toggleModal,
    extensionClasses: "form-control-btn",
    contentType: "icon",
    theme: "default"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["UserAddSearchResults"], {
    filteredUsers: filteredUsers,
    query: query,
    handleClick: handleClick,
    focusedUser: focusedUser,
    setFocusedUser: setFocusedUser,
    userMutationLoading: addUserMutation.isLoading,
    globalUsersLoading: globalUsersLoading
  })));
}

/***/ }),

/***/ "./assets/app/js/components/user-add/UserAddSearchResults.jsx":
/*!********************************************************************!*\
  !*** ./assets/app/js/components/user-add/UserAddSearchResults.jsx ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserAddSearchResults; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */


/* Components */


/* Animations */


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
      organisation: query,
      display: 'New user',
      userColor: '291, 81%, 53%'
    };

    if (filteredUsers.length > 0) {
      return filteredUsers.map(function (user, userIndex) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].li, _extends({}, _animations__WEBPACK_IMPORTED_MODULE_3__["FADE_IN"], {
          key: user.id,
          className: "list__item vr-3"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["UserSelect"], {
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
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].li, _extends({}, _animations__WEBPACK_IMPORTED_MODULE_3__["FADE_IN"], {
        key: "New user",
        className: "list__item is-focused vr-3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["UserSelect"], {
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


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, query !== '' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].ul, _extends({}, _animations__WEBPACK_IMPORTED_MODULE_3__["FADE_IN"], {
    className: "custom-modal__list list"
  }), results()));
}

/***/ }),

/***/ "./assets/app/js/components/user-add/services/filterUsers.js":
/*!*******************************************************************!*\
  !*** ./assets/app/js/components/user-add/services/filterUsers.js ***!
  \*******************************************************************/
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
        display = _ref3.display;

    /* Only return users that match the query on email || display */
    return email.toLowerCase().includes(lowerQuery) || display.toLowerCase().includes(lowerQuery);
  });
  return filteredUsers;
}

/***/ }),

/***/ "./assets/app/js/components/users/User.jsx":
/*!*************************************************!*\
  !*** ./assets/app/js/components/users/User.jsx ***!
  \*************************************************/
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var icons_star_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/star.svg */ "./assets/app/img/icons/star.svg");
/* harmony import */ var icons_star_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_star_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var icons_delete_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/delete.svg */ "./assets/app/img/icons/delete.svg");
/* harmony import */ var icons_delete_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_delete_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ "./assets/app/js/api/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */



/* Components */


/* Assets */



/* Api */


function User(_ref) {
  var user = _ref.user,
      project = _ref.project,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'default' : _ref$variant,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'md' : _ref$size;

  /* Hooks */
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQueryClient"])();
  /* Constants */

  var _ref2 = project !== null && project !== void 0 ? project : {},
      projectId = _ref2.id,
      author = _ref2.author;

  var _ref3 = user !== null && user !== void 0 ? user : {},
      userId = _ref3.id,
      email = _ref3.email;

  var isAuthor = email === author;
  /* Mutations */

  var deleteUserMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_6__["deleteUser"], {
    onSuccess: function onSuccess() {
      return queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_6__["QUERY_KEYS"].PROJECT_BY_ID, projectId]);
    }
  });
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user user--".concat(size, " user--").concat(variant, " ").concat(isAuthor && 'user--author')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
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
    src: icons_delete_svg__WEBPACK_IMPORTED_MODULE_5___default.a
  })))), isAuthor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__status user__status--leader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "user__status-icon icon text-tertiary mt-0",
    src: icons_star_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  })));
}
var UserAvatar = function UserAvatar(_ref4) {
  var display = _ref4.display,
      userColor = _ref4.userColor,
      isLoading = _ref4.isLoading,
      children = _ref4.children;

  /* Constants */
  var userInitials = display.split(' ').map(function (word) {
    return word[0].toUpperCase();
  });
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__avatar",
    style: {
      '--theme': userColor
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["LoadingWrapper"], {
    loading: isLoading,
    loaderSize: 16
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user__initials"
  }, userInitials), children));
};
var UserInfo = function UserInfo(_ref5) {
  var title = _ref5.title,
      subtitle = _ref5.subtitle,
      _ref5$layout = _ref5.layout,
      layout = _ref5$layout === void 0 ? 'vertical' : _ref5$layout,
      _ref5$size = _ref5.size,
      size = _ref5$size === void 0 ? 'lg' : _ref5$size;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__info user__info--".concat(layout, " user__info--").concat(size, " ml-2")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "user__info-title mb-0"
  }, title), subtitle && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "user__info-subtitle mb-0"
  }, subtitle));
};

/***/ }),

/***/ "./assets/app/js/components/users/UserSelect.jsx":
/*!*******************************************************!*\
  !*** ./assets/app/js/components/users/UserSelect.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserSelect; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./assets/app/js/components/users/User.jsx");
/* harmony import */ var icons_add_user_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! icons/add_user.svg */ "./assets/app/img/icons/add_user.svg");
/* harmony import */ var icons_add_user_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(icons_add_user_svg__WEBPACK_IMPORTED_MODULE_3__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */


/* Domain */


/* Assets */


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
      return handleClick(user);
    },
    onMouseEnter: function onMouseEnter() {
      return handleStatus('enter');
    },
    onMouseLeave: function onMouseLeave() {
      return handleStatus('leave');
    },
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_2__["UserAvatar"], _extends({
    isLoading: isLoading && isFocused
  }, user)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_2__["UserInfo"], {
    title: user.display,
    subtitle: user.organisation ? user.organisation : 'No organisation'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__add text-secondary rounded-circle ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "user__add-icon icon icon--12 text-secondary",
    src: icons_add_user_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  }))));
}

/***/ }),

/***/ "./assets/app/js/components/users/Users.jsx":
/*!**************************************************!*\
  !*** ./assets/app/js/components/users/Users.jsx ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Users; });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Packages */


/* Components */


/* Animations */


function Users(_ref) {
  var users = _ref.users,
      _ref$layout = _ref.layout,
      layout = _ref$layout === void 0 ? 'full' : _ref$layout,
      rest = _objectWithoutProperties(_ref, ["users", "layout"]);

  var sliceAmount = layout === 'minimal' ? 7 : Infinity;
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row align-items-center gutters-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_0__["AnimatePresence"], null, users.slice(0, sliceAmount).map(function (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_0__["motion"].div, _extends({
      layout: true
    }, _animations__WEBPACK_IMPORTED_MODULE_3__["SCALE_FADE"], {
      className: "col-auto",
      key: user.id
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["User"], _objectSpread({
      user: user
    }, rest)));
  }), layout === 'minimal' && users.length > 7 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_0__["motion"].div, _extends({
    layout: true
  }, _animations__WEBPACK_IMPORTED_MODULE_3__["SCALE_FADE"], {
    className: "col-auto",
    key: "more"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "text--sm text-muted--70 ml-1"
  }, "+ ", users.length - sliceAmount))));
}

/***/ }),

/***/ "./assets/app/js/context/index.js":
/*!****************************************!*\
  !*** ./assets/app/js/context/index.js ***!
  \****************************************/
/*! exports provided: StaticContext, ReviewContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainContext */ "./assets/app/js/context/mainContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StaticContext", function() { return _mainContext__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _reviewContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reviewContext */ "./assets/app/js/context/reviewContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewContext", function() { return _reviewContext__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./assets/app/js/context/mainContext.js":
/*!**********************************************!*\
  !*** ./assets/app/js/context/mainContext.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var StaticContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
/* harmony default export */ __webpack_exports__["default"] = (StaticContext);

/***/ }),

/***/ "./assets/app/js/context/reviewContext.js":
/*!************************************************!*\
  !*** ./assets/app/js/context/reviewContext.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var ReviewContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
/* harmony default export */ __webpack_exports__["default"] = (ReviewContext);

/***/ }),

/***/ "./assets/app/js/domain/project-detail/ProjectDetailHeader.jsx":
/*!*********************************************************************!*\
  !*** ./assets/app/js/domain/project-detail/ProjectDetailHeader.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectDetailHeader; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _context_mainContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/mainContext */ "./assets/app/js/context/mainContext.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../api */ "./assets/app/js/api/index.js");
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

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_3__["default"]),
      userRole = _useContext.userRole;

  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQueryClient"])();
  /* Callbacks */

  var mutationOnSuccess = function mutationOnSuccess() {
    queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_4__["QUERY_KEYS"].PROJECT_BY_ID, id]);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(userRole === 'admin' && 'editable', " d-flex align-items-center mb-2")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Editable"], {
    title: 'Editing title',
    fields: [{
      name: 'title',
      defaultValue: title
    }],
    mutation: _api__WEBPACK_IMPORTED_MODULE_4__["editProject"],
    mutationId: id,
    mutationOnSuccess: mutationOnSuccess
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "h5 mb-0 text-white"
  }, title ? title : 'Add a nice title'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(userRole === 'admin' && 'editable', " d-flex align-items-center mb-2")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Editable"], {
    title: 'Editing description',
    fields: [{
      name: 'description',
      defaultValue: description
    }],
    mutation: _api__WEBPACK_IMPORTED_MODULE_4__["editProject"],
    mutationId: id,
    mutationOnSuccess: mutationOnSuccess
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted--70 mb-0"
  }, description ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, description) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-muted--40"
  }, "What's this project about? Set the context, the goals, the constraints"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-auto d-flex align-items-baseline ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Users"], {
    users: users,
    project: project,
    size: "lg"
  }), userRole === 'admin' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["UserAdd"], {
    users: users,
    project: project
  })));
}

/***/ }),

/***/ "./assets/app/js/domain/project-detail/ProjectDetailImage.jsx":
/*!********************************************************************!*\
  !*** ./assets/app/js/domain/project-detail/ProjectDetailImage.jsx ***!
  \********************************************************************/
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var icons_check_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! icons/check.svg */ "./assets/app/img/icons/check.svg");
/* harmony import */ var icons_check_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(icons_check_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api */ "./assets/app/js/api/index.js");
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
      _projectImage$phase = projectImage.phase,
      phase = _projectImage$phase === void 0 ? {} : _projectImage$phase;
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
    to: "/projects/".concat(projectId, "/review/").concat(projectImageId),
    title: title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__image border m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    className: "card-img-top",
    src: phase.image.thumbnail,
    srcSet: "".concat(phase.image.thumbnailRetina, " 2x"),
    alt: title
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Editable"], {
    title: 'Editing image title',
    fields: [{
      name: 'title',
      defaultValue: title
    }],
    mutation: _api__WEBPACK_IMPORTED_MODULE_8__["editProjectImage"],
    mutationId: projectImageId,
    mutationOnSuccess: mutationOnSuccess
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].p, _extends({}, _animations__WEBPACK_IMPORTED_MODULE_7__["FADE_IN"], {
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

/***/ "./assets/app/js/domain/project-detail/ProjectDetailImages.jsx":
/*!*********************************************************************!*\
  !*** ./assets/app/js/domain/project-detail/ProjectDetailImages.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectDetailImages; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _ProjectDetailImage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectDetailImage */ "./assets/app/js/domain/project-detail/ProjectDetailImage.jsx");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
/* harmony import */ var _context_mainContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../context/mainContext */ "./assets/app/js/context/mainContext.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api */ "./assets/app/js/api/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks */ "./assets/app/js/hooks/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */



/* Components */


/* Domain */


/* Assets */


/* Animations */


/* Context */


/* Api */


/* Hooks */


function ProjectDetailImages(_ref) {
  var projectImages = _ref.projectImages,
      projectId = _ref.projectId;

  /* Hooks */
  var _useSelection = Object(_hooks__WEBPACK_IMPORTED_MODULE_9__["useSelection"])(),
      selected = _useSelection.selected,
      updateSelected = _useSelection.updateSelected,
      resetSelected = _useSelection.resetSelected;

  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQueryClient"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_7__["default"]),
      userRole = _useContext.userRole;
  /* Mutations */


  var deleteProjectImagesMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_8__["deleteProjectImages"], {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_8__["QUERY_KEYS"].PROJECT_BY_ID, projectId]);
      resetSelected();
    }
  });
  /* Constants */

  var actions = [{
    title: 'Remove',
    theme: 'danger',
    hasPermission: ['admin'],
    icon: icons_close_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
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
  }, userRole === 'admin' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Dropzone"], {
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, selected.length > 0 && userRole === 'admin' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["ActionMenu"], {
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({}, Object(_animations__WEBPACK_IMPORTED_MODULE_6__["STAGGER_UP"])(projectImageIndex), {
      key: projectImage.id,
      className: "col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2",
      layout: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectDetailImage__WEBPACK_IMPORTED_MODULE_4__["default"], {
      projectImage: projectImage,
      projectId: projectId,
      selected: selected,
      updateSelected: updateSelected
    }));
  }));
};

/***/ }),

/***/ "./assets/app/js/domain/project-detail/index.js":
/*!******************************************************!*\
  !*** ./assets/app/js/domain/project-detail/index.js ***!
  \******************************************************/
/*! exports provided: ProjectDetailHeader, ProjectDetailImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectDetailHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectDetailHeader */ "./assets/app/js/domain/project-detail/ProjectDetailHeader.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailHeader", function() { return _ProjectDetailHeader__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ProjectDetailImages__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectDetailImages */ "./assets/app/js/domain/project-detail/ProjectDetailImages.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailImages", function() { return _ProjectDetailImages__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./assets/app/js/domain/project-overview/Project.jsx":
/*!***********************************************************!*\
  !*** ./assets/app/js/domain/project-overview/Project.jsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Project; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ */ "./assets/app/js/domain/project-overview/index.js");
/* harmony import */ var icons_check_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/check.svg */ "./assets/app/img/icons/check.svg");
/* harmony import */ var icons_check_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_check_svg__WEBPACK_IMPORTED_MODULE_5__);
/* Packages */



/* Components */


/* Domain */


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
    to: "projects/".concat(id),
    title: title,
    className: "card card--link card--product ".concat(selected.includes(id) && 'is-selected')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_4__["ProjectImage"], {
    projectImages: projectImages
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-2"
  }, title ? title : 'Add a nice title'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Users"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_2__["ReactSVG"], {
    wrapper: "svg",
    className: "card__select-icon icon icon--8",
    src: icons_check_svg__WEBPACK_IMPORTED_MODULE_5___default.a
  }))));
}

/***/ }),

/***/ "./assets/app/js/domain/project-overview/ProjectAdd.jsx":
/*!**************************************************************!*\
  !*** ./assets/app/js/domain/project-overview/ProjectAdd.jsx ***!
  \**************************************************************/
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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ */ "./assets/app/js/domain/project-overview/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
/* harmony import */ var icons_add_project_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! icons/add_project.svg */ "./assets/app/img/icons/add_project.svg");
/* harmony import */ var icons_add_project_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(icons_add_project_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api */ "./assets/app/js/api/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */




/* Domain */


/* Animations */


/* Assets */


/* Api */


function ProjectAdd(_ref) {
  var setNewProjectId = _ref.setNewProjectId;

  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      projectId = _useState2[0],
      setProjectId = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      slideInOpen = _useState4[0],
      setSlideInOpen = _useState4[1];
  /* Hooks */


  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useQueryClient"])();
  /* Queries */

  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useQuery"])([_api__WEBPACK_IMPORTED_MODULE_7__["QUERY_KEYS"].PROJECT_BY_ID, projectId], function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_7__["fetchProjectById"])({
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

  var addMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_7__["addProject"], {
    onSuccess: function onSuccess(_ref2) {
      var id = _ref2.id;
      return setProjectId(id);
    }
  });
  var editMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_7__["editProject"], {
    onSuccess: function onSuccess() {
      return invalidateProject();
    }
  });
  /* Callbacks */

  var toggleSlideIn = function toggleSlideIn() {
    setSlideInOpen(!slideInOpen);
    /* Mutate on modal open */

    if (!slideInOpen) addMutation.mutate();
    /* Reset id on close modal */

    if (slideInOpen) {
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
    return queryClient.invalidateQueries(_api__WEBPACK_IMPORTED_MODULE_7__["QUERY_KEYS"].PROJECT_BY_USER);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].button, _extends({}, _animations__WEBPACK_IMPORTED_MODULE_5__["SCALE_FADE"], {
    key: "add-project",
    type: "button",
    className: "icon-wrapper icon-wrapper--interactive icon-wrapper--secondary btn btn-link btn--add btn--add-right",
    style: {
      '--size': 75
    },
    onClick: toggleSlideIn
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--30 text-secondary",
    src: icons_add_project_svg__WEBPACK_IMPORTED_MODULE_6___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], null, slideInOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_4__["ProjectSlideIn"], {
    project: project,
    updateProject: updateProject,
    toggleSlideIn: toggleSlideIn
  })));
}

/***/ }),

/***/ "./assets/app/js/domain/project-overview/ProjectImage.jsx":
/*!****************************************************************!*\
  !*** ./assets/app/js/domain/project-overview/ProjectImage.jsx ***!
  \****************************************************************/
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* Packages */


/* Assets */


/* Components */


function ProjectImage(_ref) {
  var projectImages = _ref.projectImages;

  /* Constants */
  var _ref2 = projectImages[0] || {},
      _ref2$phase = _ref2.phase,
      phase = _ref2$phase === void 0 ? {} : _ref2$phase,
      title = _ref2.title;
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__image border m-2"
  }, phase.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Image"], {
    className: "card-img-top",
    src: phase.image.thumbnail,
    srcSet: "".concat(phase.image.thumbnailRetina, " 2x"),
    alt: title
  }), !phase.image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--48 text-muted--40",
    src: icons_add_image_svg__WEBPACK_IMPORTED_MODULE_2___default.a
  }));
}

/***/ }),

/***/ "./assets/app/js/domain/project-overview/ProjectResults.jsx":
/*!******************************************************************!*\
  !*** ./assets/app/js/domain/project-overview/ProjectResults.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectResults; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ */ "./assets/app/js/domain/project-overview/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var icons_leave_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! icons/leave.svg */ "./assets/app/img/icons/leave.svg");
/* harmony import */ var icons_leave_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(icons_leave_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var icons_archive_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! icons/archive.svg */ "./assets/app/img/icons/archive.svg");
/* harmony import */ var icons_archive_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(icons_archive_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hooks */ "./assets/app/js/hooks/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../api */ "./assets/app/js/api/index.js");
/* harmony import */ var _context_mainContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../context/mainContext */ "./assets/app/js/context/mainContext.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */



/* Components */


/* Domain */


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

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_11__["default"]),
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
  }, "Your projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, projects.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].p, _extends({}, _animations__WEBPACK_IMPORTED_MODULE_5__["FADE_IN"], {
    className: "text-white mb-0 position-absolute"
  }), "You don't have any projects yet")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row row--equalized gutters-5 ".concat(selected.length > 0 && 'has-selections')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, projects.filter(function (project) {
    return project.id !== newProjectId;
  }).map(function (project, projectIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({}, Object(_animations__WEBPACK_IMPORTED_MODULE_5__["STAGGER_UP"])(projectIndex), {
      key: project.id,
      className: "col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2",
      layout: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_4__["Project"], {
      project: project,
      selected: selected,
      updateSelected: updateSelected
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, selected.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["ActionMenu"], {
    selected: selected,
    resetSelected: resetSelected,
    actions: actions
  })));
}

/***/ }),

/***/ "./assets/app/js/domain/project-overview/ProjectSlideIn.jsx":
/*!******************************************************************!*\
  !*** ./assets/app/js/domain/project-overview/ProjectSlideIn.jsx ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectSlideIn; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */




/* Assets */


/* Components */


/* Animations */


function ProjectSlideIn(_ref) {
  var _ref$project = _ref.project,
      project = _ref$project === void 0 ? {} : _ref$project,
      updateProject = _ref.updateProject,
      toggleSlideIn = _ref.toggleSlideIn;

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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["SlideIn"], {
    toggleSlideIn: toggleSlideIn,
    domElement: document.body
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    ref: formRef,
    method: "POST",
    className: "slide-in__form",
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      toggleSlideIn();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slide-in__header d-flex align-items-center pt-6 pt-md-12 pb-3"
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
    className: "slide-in__close btn btn-link ml-auto",
    "data-dismiss": "modal",
    "aria-label": "Close",
    onClick: toggleSlideIn,
    tabIndex: "-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_2__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--14",
    src: icons_close_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "slide-in__body pt-3 pb-12"
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Users"], {
    users: users,
    project: project,
    size: "lg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["UserAdd"], {
    users: users,
    project: project
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Dropzone"], {
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
    className: "slide-in__footer pb-6 pb-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row gutters-0 w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-1 ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "slide-in__btn btn btn-block btn-secondary d-flex align-items-center justify-content-center"
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
      _projectImage$phase = projectImage.phase,
      phase = _projectImage$phase === void 0 ? {} : _projectImage$phase;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, _extends({
    layout: true
  }, Object(_animations__WEBPACK_IMPORTED_MODULE_6__["STAGGER_UP"])(projectImageIndex), {
    className: "col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2",
    key: id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropzone__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Image"], {
    className: "dropzone__image img-fluid",
    src: phase.image.thumbnail,
    srcSet: "".concat(phase.image.thumbnailRetina, " 2x"),
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["LoadingWrapper"], {
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

/***/ "./assets/app/js/domain/project-overview/index.js":
/*!********************************************************!*\
  !*** ./assets/app/js/domain/project-overview/index.js ***!
  \********************************************************/
/*! exports provided: Project, ProjectAdd, ProjectImage, ProjectSlideIn, ProjectResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./assets/app/js/domain/project-overview/Project.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return _Project__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ProjectAdd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectAdd */ "./assets/app/js/domain/project-overview/ProjectAdd.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectAdd", function() { return _ProjectAdd__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ProjectImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectImage */ "./assets/app/js/domain/project-overview/ProjectImage.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectImage", function() { return _ProjectImage__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ProjectSlideIn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectSlideIn */ "./assets/app/js/domain/project-overview/ProjectSlideIn.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectSlideIn", function() { return _ProjectSlideIn__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ProjectResults__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectResults */ "./assets/app/js/domain/project-overview/ProjectResults.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectResults", function() { return _ProjectResults__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./assets/app/js/domain/project-review/ProjectReviewActionBar.jsx":
/*!************************************************************************!*\
  !*** ./assets/app/js/domain/project-review/ProjectReviewActionBar.jsx ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectReviewActionBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var icons_chevron_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/chevron.svg */ "./assets/app/img/icons/chevron.svg");
/* harmony import */ var icons_chevron_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_chevron_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var icons_edit_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/edit.svg */ "./assets/app/img/icons/edit.svg");
/* harmony import */ var icons_edit_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_edit_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var icons_next_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! icons/next.svg */ "./assets/app/img/icons/next.svg");
/* harmony import */ var icons_next_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(icons_next_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var icons_comment_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! icons/comment.svg */ "./assets/app/img/icons/comment.svg");
/* harmony import */ var icons_comment_svg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(icons_comment_svg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context */ "./assets/app/js/context/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../api */ "./assets/app/js/api/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */



/* Components */


/* Assets */





/* Context */


/* Api */


/* Animations */


function ProjectReviewActionBar(_ref) {
  var allImages = _ref.allImages,
      title = _ref.title,
      description = _ref.description,
      phaseNumber = _ref.phaseNumber,
      phaseId = _ref.phaseId,
      commentsPanelOpen = _ref.commentsPanelOpen,
      toggleCommentsPanel = _ref.toggleCommentsPanel;

  /* Context */
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_8__["StaticContext"]),
      currentUser = _useContext.currentUser,
      userRole = _useContext.userRole;
  /* Context */


  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_8__["ReviewContext"]),
      projectImageId = _useContext2.projectImageId;
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bar bar--review"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row gutters-0 justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4 d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text--sm mb-0"
  }, "Project"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--8 text-white text-muted--50 mx-1",
    src: icons_chevron_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text--sm mb-0 text-truncate",
    style: {
      maxWidth: 120
    }
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text--xs text-muted--70 mb-0"
  }, allImages.indexOf(Number(projectImageId)) + 1, " of ", allImages.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mx-1 text-muted--20"
  }, "/"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text--xs text-muted--70 mb-0"
  }, "Phase ", phaseNumber))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-auto d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative hr-2"
  }, userRole === 'admin' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(EditAction, {
    title: title,
    description: description,
    projectImageId: projectImageId
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "bar__action-btn ".concat(commentsPanelOpen && 'is-active', " btn btn-link text-rest hr-2"),
    onClick: toggleCommentsPanel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--16",
    src: icons_comment_svg__WEBPACK_IMPORTED_MODULE_7___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative hr-2"
  }, userRole === 'admin' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PhaseAction, {
    phaseId: phaseId,
    projectImageId: projectImageId
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4 d-flex justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["User"], {
    user: currentUser,
    size: 'lg'
  }))))));
}

var EditAction = function EditAction(_ref2) {
  var title = _ref2.title,
      description = _ref2.description,
      projectImageId = _ref2.projectImageId;

  /* Hooks */
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQueryClient"])();
  /* State */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      editModalOpen = _useState2[0],
      setEditModalOpen = _useState2[1];
  /* Callbacks */


  var toggleEditModal = function toggleEditModal() {
    return setEditModalOpen(!editModalOpen);
  };
  /* mutations */


  var mutationOnSuccess = function mutationOnSuccess() {
    queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_9__["QUERY_KEYS"].PROJECT_IMAGE_BY_ID, Number(projectImageId)]);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "bar__action-btn ".concat(editModalOpen && 'is-active', " btn btn-link text-rest"),
    onClick: toggleEditModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--16",
    src: icons_edit_svg__WEBPACK_IMPORTED_MODULE_5___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: 'Editing image',
    subtitle: 'Save when ready',
    modalOpen: editModalOpen,
    toggleModal: toggleEditModal,
    renderOnBody: false,
    center: false,
    extensionClasses: 'bar__modal',
    customAnimation: _animations__WEBPACK_IMPORTED_MODULE_10__["SCALE_IN_UP"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["EditableBody"], {
    toggleModal: toggleEditModal,
    fields: [{
      name: 'title',
      defaultValue: title
    }, {
      name: 'description',
      defaultValue: description
    }],
    mutation: _api__WEBPACK_IMPORTED_MODULE_9__["editProjectImage"],
    mutationId: projectImageId,
    mutationOnSuccess: mutationOnSuccess
  })));
};

var PhaseAction = function PhaseAction(_ref3) {
  var phaseId = _ref3.phaseId,
      projectImageId = _ref3.projectImageId;

  /* Hooks */
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQueryClient"])();
  /* State */

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      phaseModalOpen = _useState4[0],
      setPhaseModalOpen = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState6 = _slicedToArray(_useState5, 2),
      images = _useState6[0],
      setImages = _useState6[1];
  /* Callbacks */


  var togglePhaseModal = function togglePhaseModal() {
    return setPhaseModalOpen(!phaseModalOpen);
  };
  /* Mutations */


  var nextPhaseMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_9__["nextPhase"], {
    onSuccess: function onSuccess() {
      togglePhaseModal();
      setImages([]);
      queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_9__["QUERY_KEYS"].PROJECT_IMAGE_BY_ID, Number(projectImageId)]);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "bar__action-btn ".concat(phaseModalOpen && 'is-active', " btn btn-link text-rest"),
    onClick: togglePhaseModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--16",
    src: icons_next_svg__WEBPACK_IMPORTED_MODULE_6___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: 'Next phase',
    subtitle: 'Add a new image for the next phase',
    modalOpen: phaseModalOpen,
    toggleModal: togglePhaseModal,
    renderOnBody: false,
    center: false,
    extensionClasses: 'bar__modal',
    customAnimation: _animations__WEBPACK_IMPORTED_MODULE_10__["SCALE_IN_UP"]
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["DropzoneSingle"], {
    images: images,
    setImages: setImages
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    title: "Next phase",
    onClick: function onClick() {
      return nextPhaseMutation.mutate({
        phaseId: phaseId,
        images: images
      });
    },
    extensionClasses: "mt-3 w-50 mx-auto justify-content-center"
  }))));
};

/***/ }),

/***/ "./assets/app/js/domain/project-review/ProjectReviewCanvas.jsx":
/*!*********************************************************************!*\
  !*** ./assets/app/js/domain/project-review/ProjectReviewCanvas.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectReviewCanvas; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _ProjectReviewMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectReviewMarker */ "./assets/app/js/domain/project-review/ProjectReviewMarker.jsx");
/* harmony import */ var _ProjectReviewCommentModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectReviewCommentModal */ "./assets/app/js/domain/project-review/ProjectReviewCommentModal.jsx");
/* harmony import */ var _ProjectReviewCommentAdd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectReviewCommentAdd */ "./assets/app/js/domain/project-review/ProjectReviewCommentAdd.jsx");
/* harmony import */ var _ProjectReviewActionBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProjectReviewActionBar */ "./assets/app/js/domain/project-review/ProjectReviewActionBar.jsx");
/* harmony import */ var _ProjectReviewPagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProjectReviewPagination */ "./assets/app/js/domain/project-review/ProjectReviewPagination.jsx");
/* harmony import */ var _ProjectReviewCommentPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProjectReviewCommentPanel */ "./assets/app/js/domain/project-review/ProjectReviewCommentPanel.jsx");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../api */ "./assets/app/js/api/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../context */ "./assets/app/js/context/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
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




/* Domain */







/* Components */


/* Api */


/* Context */


/* Animations */


/* Global */

var cursorOffset = 10;
function ProjectReviewCanvas(_ref) {
  var parentId = _ref.parentId,
      title = _ref.title,
      phase = _ref.phase,
      rest = _objectWithoutProperties(_ref, ["parentId", "title", "phase"]);

  /* Queries */
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_api__WEBPACK_IMPORTED_MODULE_10__["QUERY_KEYS"].PROJECT_USERS, function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_10__["fetchProjectUsers"])({
      projectId: parentId
    });
  }, {
    enabled: !!parentId
  }),
      _useQuery$data = _useQuery.data,
      projectUsers = _useQuery$data === void 0 ? [] : _useQuery$data;
  /* Constants */


  var image = phase.image,
      phaseId = phase.id,
      comments = phase.comments,
      phaseNumber = phase.phase;
  /* Hooks */

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_11__["StaticContext"]),
      currentUser = _useContext.currentUser;
  /* Refs */


  var reviewRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* State */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      markerPos = _useState2[0],
      setMarkerPos = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      securityModalOpen = _useState4[0],
      setSecurityModalOpen = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      commentsPanelOpen = _useState6[0],
      setCommentsPanelOpen = _useState6[1];
  /* Callbacks */


  var toggleCommentAddOpen = function toggleCommentAddOpen() {
    return setMarkerPos(null);
  };

  var toggleCommentsPanel = function toggleCommentsPanel() {
    return setCommentsPanelOpen(!commentsPanelOpen);
  };

  var posMarker = function posMarker(_ref2) {
    var clientX = _ref2.clientX,
        clientY = _ref2.clientY;

    if (!currentUser.authenticated) {
      setSecurityModalOpen(true);
      return;
    }

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
  };
  /* render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    className: "review position-relative mx-n12 mb-3 mt-n10 min-vh-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, {
    className: "review__image-wrapper position-relative",
    ref: reviewRef,
    initial: {
      width: '100%'
    },
    animate: {
      width: commentsPanelOpen ? "calc(100% - 400px)" : '100%',
      transition: commentsPanelOpen ? _animations__WEBPACK_IMPORTED_MODULE_12__["SLIDE_IN"].animate.transition : _animations__WEBPACK_IMPORTED_MODULE_12__["SLIDE_IN"].exit.transition
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["Image"], {
    className: "review__image img-fluid w-100",
    src: image.original,
    srcSet: "".concat(image.original, " 2x"),
    alt: title,
    onClick: posMarker
  }), comments === null || comments === void 0 ? void 0 : comments.map(function (comment, commentIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewCommentModal__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: comment.id,
      comment: comment,
      commentIndex: commentIndex,
      reviewRef: reviewRef,
      projectUsers: projectUsers,
      toggleCommentAddOpen: toggleCommentAddOpen
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, markerPos && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewMarker__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, markerPos), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewCommentAdd__WEBPACK_IMPORTED_MODULE_5__["default"], {
    markerPos: markerPos,
    phaseId: phaseId,
    toggleCommentAddOpen: toggleCommentAddOpen
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["SecurityModal"], {
    securityModalOpen: securityModalOpen,
    setSecurityModalOpen: setSecurityModalOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewPagination__WEBPACK_IMPORTED_MODULE_7__["default"], rest)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewActionBar__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread(_objectSpread({}, rest), {}, {
    title: title,
    phaseNumber: phaseNumber,
    phaseId: phaseId,
    commentsPanelOpen: commentsPanelOpen,
    toggleCommentsPanel: toggleCommentsPanel
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, commentsPanelOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewCommentPanel__WEBPACK_IMPORTED_MODULE_8__["default"], {
    comments: comments,
    commentsPanelOpen: commentsPanelOpen,
    toggleCommentsPanel: toggleCommentsPanel,
    projectUsers: projectUsers
  })));
}

/***/ }),

/***/ "./assets/app/js/domain/project-review/ProjectReviewComment.jsx":
/*!**********************************************************************!*\
  !*** ./assets/app/js/domain/project-review/ProjectReviewComment.jsx ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectReviewComment; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
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

/* Packages */

/* Components*/


function ProjectReviewComment(_ref) {
  var content = _ref.comment,
      commentIndex = _ref.commentIndex,
      projectUsers = _ref.projectUsers,
      setReplyToUser = _ref.setReplyToUser,
      _ref$renderAuthor = _ref.renderAuthor,
      renderAuthor = _ref$renderAuthor === void 0 ? false : _ref$renderAuthor,
      _ref$showInitialRepli = _ref.showInitialReplies,
      showInitialReplies = _ref$showInitialRepli === void 0 ? false : _ref$showInitialRepli;

  /* Contants */
  var author = content.author,
      created = content.created,
      comment = content.comment,
      comments = content.comments;
  /* State */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(showInitialReplies),
      _useState2 = _slicedToArray(_useState, 2),
      showReplies = _useState2[0],
      setShowReplies = _useState2[1];
  /* Render component */


  var renderComment = function renderComment() {
    var usersRegex = /@\[[^\]]*\]\{[0-9]+\}/gi;

    var usersArray = _toConsumableArray(comment.matchAll(usersRegex));

    var comments = comment.split(/@\[[^\]]*\]\{[0-9]+\}/gi);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "lh--md"
    }, comments.map(function (comment, commentIndex) {
      var user;

      if (commentIndex in usersArray) {
        user = projectUsers.find(function (user) {
          return usersArray[commentIndex][0].includes(user.display);
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
        key: commentIndex
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "comment__content"
      }, "".concat(comment, " ")), ' ', user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "comment__mention mentions__mention px-1",
        style: {
          '--theme': user.userColor
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "@", user.display)), ' '));
    }));
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "comment"
  }, renderAuthor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center mb-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["User"], {
    user: author
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["UserInfo"], {
    title: author.display,
    subtitle: "/ ".concat(author.organisation),
    layout: 'horizontal',
    size: 'sm'
  }), typeof commentIndex !== 'undefined' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "ml-auto icon-wrapper icon-wrapper--hsl icon-wrapper--interactive",
    style: {
      '--theme': author.userColor
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text--xs"
  }, commentIndex + 1))), renderComment(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center mt-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "comment__created text-muted--60 mb-0 hr-2"
  }, created), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "comment__agree text-muted--60 mb-0 hr-2 font-weight-normal"
  }, "7 agree"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "comment__reply-toggle btn btn-link text-muted--60 mb-0 hr-2 font-weight-normal",
    onClick: function onClick() {
      return setReplyToUser(author);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn-text text-white"
  }, "Reply")), comments.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "comment__replies-toggle btn btn-link text-muted--60 mb-0 hr-2 font-weight-normal ml-auto text-white",
    onClick: function onClick() {
      return setShowReplies(!showReplies);
    }
  }, showReplies ? 'Hide' : 'Show', " ", comments.length, " replies")), comments.length > 0 && showReplies && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "comment__replies"
  }, comments.map(function (comment) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectReviewComment, {
      key: comment.id,
      comment: comment,
      projectUsers: projectUsers,
      setReplyToUser: setReplyToUser,
      renderAuthor: true
    });
  }))));
}

/***/ }),

/***/ "./assets/app/js/domain/project-review/ProjectReviewCommentAdd.jsx":
/*!*************************************************************************!*\
  !*** ./assets/app/js/domain/project-review/ProjectReviewCommentAdd.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectReviewCommentAdd; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _ProjectReviewCommentMentions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectReviewCommentMentions */ "./assets/app/js/domain/project-review/ProjectReviewCommentMentions.jsx");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services */ "./assets/app/js/domain/project-review/services/index.js");
/* harmony import */ var _context_mainContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context/mainContext */ "./assets/app/js/context/mainContext.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../api */ "./assets/app/js/api/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hooks */ "./assets/app/js/hooks/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../context */ "./assets/app/js/context/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */




/* Components */


/* Domain */


/* Assets */


/* Services */


/* Context */


/* Api */


/* Animations */


/* Hooks */


/* Context */


function ProjectReviewCommentAdd(_ref) {
  var markerPos = _ref.markerPos,
      phaseId = _ref.phaseId,
      toggleCommentAddOpen = _ref.toggleCommentAddOpen;

  /* Refs */
  var formRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var modalRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* Constants */

  var _calcCommentPos = Object(_services__WEBPACK_IMPORTED_MODULE_7__["calcCommentPos"])(modalRef, markerPos),
      _calcCommentPos$left = _calcCommentPos.left,
      left = _calcCommentPos$left === void 0 ? '30px' : _calcCommentPos$left,
      _calcCommentPos$top = _calcCommentPos.top,
      top = _calcCommentPos$top === void 0 ? '30px' : _calcCommentPos$top;
  /* State */


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      comment = _useState2[0],
      setComment = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      mentions = _useState4[0],
      setMentions = _useState4[1];
  /* Hooks */


  Object(_hooks__WEBPACK_IMPORTED_MODULE_11__["useCloseOnEsc"])(markerPos, toggleCommentAddOpen);

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_8__["default"]),
      user = _useContext.currentUser;

  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQueryClient"])();

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_12__["ReviewContext"]),
      projectImageId = _useContext2.projectImageId;
  /* Mutations */


  var addCommentMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_9__["addComment"], {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_9__["QUERY_KEYS"].PROJECT_IMAGE_BY_ID, parseInt(projectImageId)]);
      toggleCommentAddOpen();
    }
  });
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    layout: true,
    transition: {
      duration: 0.1
    },
    ref: modalRef,
    className: "review__custom-modal custom-modal",
    style: {
      '--left': left,
      '--top': top
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
    key: "custom-modal-content",
    className: "custom-modal__content border p-5"
  }, Object(_animations__WEBPACK_IMPORTED_MODULE_10__["FADE_IN_UP"])(50)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-modal__header d-flex align-items-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["User"], {
    user: user,
    size: "xl"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column w-100 ml-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text--lg mb-0 lh--md"
  }, "Add a comment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "custom-modal__close btn btn-link ml-auto",
    onClick: toggleCommentAddOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_3__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--12",
    src: icons_close_svg__WEBPACK_IMPORTED_MODULE_6___default.a
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-0 text--md lh--md"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-muted--60"
  }, "Comment or"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-secondary"
  }, " @mention "), ' ', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text-muted--60"
  }, "someone"))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-modal__body d-flex mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    ref: formRef,
    className: "d-flex flex-column align-items-center flex-grow-1",
    onSubmit: function onSubmit(event) {
      event.preventDefault();

      if (comment.length > 0) {
        addCommentMutation.mutate({
          userId: user.id,
          phaseId: phaseId,
          comment: comment.trim(),
          mentioned: mentions,
          position: markerPos
        });
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "comment"
  }, "Add a comment"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewCommentMentions__WEBPACK_IMPORTED_MODULE_5__["default"], {
    comment: comment,
    setComment: setComment,
    mentions: mentions,
    setMentions: setMentions,
    autoFocus: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    extensionClasses: "form-control-btn",
    type: "submit",
    contentType: "icon",
    theme: "default",
    isLoading: addCommentMutation.isLoading
  }))))));
}

/***/ }),

/***/ "./assets/app/js/domain/project-review/ProjectReviewCommentMentions.jsx":
/*!******************************************************************************!*\
  !*** ./assets/app/js/domain/project-review/ProjectReviewCommentMentions.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectReviewCommentMentions; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_mentions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-mentions */ "./node_modules/react-mentions/dist/react-mentions.esm.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var icons_add_user_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/add_user.svg */ "./assets/app/img/icons/add_user.svg");
/* harmony import */ var icons_add_user_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_add_user_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_users_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/users/User */ "./assets/app/js/components/users/User.jsx");
/* harmony import */ var _services_styleMention__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/styleMention */ "./assets/app/js/domain/project-review/services/styleMention.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api */ "./assets/app/js/api/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context */ "./assets/app/js/context/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* Packages */




/* Assets */


/* Components */


/* Services */


/* Api */


/* Context */


function ProjectReviewCommentMentions(_ref) {
  var comment = _ref.comment,
      setComment = _ref.setComment,
      mentions = _ref.mentions,
      setMentions = _ref.setMentions,
      _ref$autoFocus = _ref.autoFocus,
      autoFocus = _ref$autoFocus === void 0 ? false : _ref$autoFocus;

  /* Context */
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_8__["ReviewContext"]),
      projectId = _useContext.projectId;
  /* Queries */


  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_api__WEBPACK_IMPORTED_MODULE_7__["QUERY_KEYS"].PROJECT_USERS, function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_7__["fetchProjectUsers"])({
      projectId: projectId
    });
  }),
      _useQuery$data = _useQuery.data,
      projectUsers = _useQuery$data === void 0 ? [] : _useQuery$data;
  /* Refs */


  var mentionRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* Effects */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (mentions.length > 0 && mentionRef !== null && mentionRef !== void 0 && mentionRef.current) Object(_services_styleMention__WEBPACK_IMPORTED_MODULE_6__["default"])(projectUsers, mentionRef.current);
  }, [mentions, mentionRef === null || mentionRef === void 0 ? void 0 : mentionRef.current]);
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_mentions__WEBPACK_IMPORTED_MODULE_2__["MentionsInput"], {
    value: comment,
    className: "mentions",
    id: "comment",
    name: "comment",
    placeholder: "Say something nice...",
    onChange: function onChange(event) {
      return setComment(event.target.value);
    },
    onClick: function onClick() {
      return Object(_services_styleMention__WEBPACK_IMPORTED_MODULE_6__["default"])(projectUsers);
    },
    inputRef: mentionRef,
    autoFocus: autoFocus
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_mentions__WEBPACK_IMPORTED_MODULE_2__["Mention"], {
    trigger: "@",
    data: projectUsers,
    renderSuggestion: Suggestion,
    allowSpaceInQuery: true,
    appendSpaceOnAdd: true,
    className: "mentions__mention",
    displayTransform: function displayTransform(_, name) {
      return " @".concat(name, " ");
    },
    markup: "@[__display__]{__id__}",
    onAdd: function onAdd(id) {
      return setMentions(function (mentions) {
        return [].concat(_toConsumableArray(mentions), [id]);
      });
    }
  })));
}
/* Custom Suggestion */

var Suggestion = function Suggestion(entry, query, highlighted, index, focused) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "mention__suggestion vr-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "user user--select user--xl ".concat(focused && 'is-focused'),
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_users_User__WEBPACK_IMPORTED_MODULE_5__["UserAvatar"], entry), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_users_User__WEBPACK_IMPORTED_MODULE_5__["UserInfo"], {
    title: entry.display,
    subtitle: entry.organisation ? entry.organisation : 'No organisation'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__add text-secondary rounded-circle ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_3__["ReactSVG"], {
    wrapper: "svg",
    className: "user__add-icon icon icon--12 text-secondary",
    src: icons_add_user_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  })))));
};

/***/ }),

/***/ "./assets/app/js/domain/project-review/ProjectReviewCommentModal.jsx":
/*!***************************************************************************!*\
  !*** ./assets/app/js/domain/project-review/ProjectReviewCommentModal.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectReviewCommentModal; });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _ProjectReviewMarker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectReviewMarker */ "./assets/app/js/domain/project-review/ProjectReviewMarker.jsx");
/* harmony import */ var _ProjectReviewComment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProjectReviewComment */ "./assets/app/js/domain/project-review/ProjectReviewComment.jsx");
/* harmony import */ var _ProjectReviewCommentReply__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ProjectReviewCommentReply */ "./assets/app/js/domain/project-review/ProjectReviewCommentReply.jsx");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services */ "./assets/app/js/domain/project-review/services/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hooks */ "./assets/app/js/hooks/index.js");
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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Packages */




/* Components */


/* Domain */




/* Assets */


/* Services */


/* Hooks */


function ProjectReviewCommentModal(_ref) {
  var comment = _ref.comment,
      commentIndex = _ref.commentIndex,
      toggleCommentAddOpen = _ref.toggleCommentAddOpen,
      rest = _objectWithoutProperties(_ref, ["comment", "commentIndex", "toggleCommentAddOpen"]);

  /* Constants */
  var position = comment.position,
      author = comment.author,
      id = comment.id;
  var xPercent = position.xPercent,
      yPercent = position.yPercent;
  /* State */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      commentOpen = _useState2[0],
      setCommentOpen = _useState2[1];
  /* Callbacks */


  var toggleComment = function toggleComment() {
    if (!commentOpen) toggleCommentAddOpen();
    setCommentOpen(!commentOpen);
  };
  /* Hooks */


  Object(_hooks__WEBPACK_IMPORTED_MODULE_10__["useCloseOnEsc"])(commentOpen, setCommentOpen);
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProjectReviewMarker__WEBPACK_IMPORTED_MODULE_5__["default"], {
    xPercent: xPercent,
    yPercent: yPercent,
    author: author,
    commentIndex: commentIndex + 1,
    commentOpen: commentOpen,
    toggleComment: toggleComment
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_0__["AnimatePresence"], null, commentOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CommentBox, _extends({
    key: id
  }, _objectSpread({
    comment: comment,
    toggleComment: toggleComment
  }, rest)))));
}

var CommentBox = function CommentBox(_ref2) {
  var comment = _ref2.comment,
      toggleComment = _ref2.toggleComment,
      reviewRef = _ref2.reviewRef,
      rest = _objectWithoutProperties(_ref2, ["comment", "toggleComment", "reviewRef"]);

  /* Constants */
  var position = comment.position,
      author = comment.author;
  /* State */

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(position),
      _useState4 = _slicedToArray(_useState3, 2),
      transformedPos = _useState4[0],
      setTransformedPos = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      _useState6 = _slicedToArray(_useState5, 2),
      replyToUser = _useState6[0],
      setReplyToUser = _useState6[1];
  /* Refs */


  var boxRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  /* Effects */

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (position) {
      setTransformedPos(function () {
        position.reviewPos = reviewRef.current.getBoundingClientRect();
        return Object(_services__WEBPACK_IMPORTED_MODULE_9__["calcCommentPos"])(boxRef, position);
      });
    }
  }, [position]);
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_0__["motion"].div, {
    className: "review__custom-modal custom-modal",
    style: {
      '--left': transformedPos.left,
      '--top': transformedPos.top
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_0__["motion"].div, _extends({
    key: "custom-modal-content",
    className: "custom-modal__content border p-5"
  }, Object(_animations__WEBPACK_IMPORTED_MODULE_3__["FADE_IN_UP"])(50)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "custom-modal__header d-flex align-items-start"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "d-flex align-items-center w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["User"], {
    user: author,
    size: "xl"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "d-flex flex-column w-100 ml-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "text--lg mb-0 lh--md"
  }, author.display), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    className: "custom-modal__close btn btn-link ml-auto",
    onClick: toggleComment
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_2__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--12",
    src: icons_close_svg__WEBPACK_IMPORTED_MODULE_8___default.a
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "text-muted--60 mb-0 text--sm lh--xs"
  }, author.organisation)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "custom-modal__body d-flex mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "d-flex flex-column w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProjectReviewComment__WEBPACK_IMPORTED_MODULE_6__["default"], _objectSpread({
    comment: comment,
    setReplyToUser: setReplyToUser,
    showInitialReplies: true
  }, rest)), replyToUser && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ProjectReviewCommentReply__WEBPACK_IMPORTED_MODULE_7__["default"], {
    replyTo: replyToUser,
    commentId: comment.id,
    setReplyToUser: setReplyToUser
  })))));
};

/***/ }),

/***/ "./assets/app/js/domain/project-review/ProjectReviewCommentPanel.jsx":
/*!***************************************************************************!*\
  !*** ./assets/app/js/domain/project-review/ProjectReviewCommentPanel.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectReviewCommentPanel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var _ProjectReviewComment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectReviewComment */ "./assets/app/js/domain/project-review/ProjectReviewComment.jsx");
/* harmony import */ var _ProjectReviewCommentReply__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectReviewCommentReply */ "./assets/app/js/domain/project-review/ProjectReviewCommentReply.jsx");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hooks */ "./assets/app/js/hooks/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */



/* Domain */



/* Animations */


/* Assets */


/* Hooks */


function ProjectReviewCommentPanel(_ref) {
  var comments = _ref.comments,
      commentsPanelOpen = _ref.commentsPanelOpen,
      toggleCommentsPanel = _ref.toggleCommentsPanel,
      projectUsers = _ref.projectUsers;

  /* Hooks */
  Object(_hooks__WEBPACK_IMPORTED_MODULE_7__["useCloseOnEsc"])(commentsPanelOpen, toggleCommentsPanel);
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({}, _animations__WEBPACK_IMPORTED_MODULE_5__["SLIDE_IN"], {
    className: "panel panel--comments"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-baseline justify-content-between mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
    className: "text-capitalize"
  }, "All comments"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "panel__close btn btn-link ml-auto",
    onClick: toggleCommentsPanel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_2__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--12",
    src: icons_close_svg__WEBPACK_IMPORTED_MODULE_6___default.a
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column w-100"
  }, comments === null || comments === void 0 ? void 0 : comments.reverse().map(function (comment, commentIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommentWithReply, {
      key: commentIndex,
      comment: comment,
      commentIndex: commentIndex,
      projectUsers: projectUsers
    });
  }), comments.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted--70"
  }, "No comments yet"))));
}

var CommentWithReply = function CommentWithReply(_ref2) {
  var comment = _ref2.comment,
      commentIndex = _ref2.commentIndex,
      projectUsers = _ref2.projectUsers;

  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      replyToUser = _useState2[0],
      setReplyToUser = _useState2[1];

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewComment__WEBPACK_IMPORTED_MODULE_3__["default"], {
    comment: comment,
    commentIndex: commentIndex,
    setReplyToUser: setReplyToUser,
    renderAuthor: true,
    projectUsers: projectUsers
  }), replyToUser && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewCommentReply__WEBPACK_IMPORTED_MODULE_4__["default"], {
    replyTo: replyToUser,
    commentId: comment.id,
    setReplyToUser: setReplyToUser
  }));
};

/***/ }),

/***/ "./assets/app/js/domain/project-review/ProjectReviewCommentReply.jsx":
/*!***************************************************************************!*\
  !*** ./assets/app/js/domain/project-review/ProjectReviewCommentReply.jsx ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectReviewCommentReply; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _components_users_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/users/User */ "./assets/app/js/components/users/User.jsx");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context */ "./assets/app/js/context/index.js");
/* harmony import */ var _ProjectReviewCommentMentions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectReviewCommentMentions */ "./assets/app/js/domain/project-review/ProjectReviewCommentMentions.jsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ "./assets/app/js/api/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */


/* Components */



/* Context */


/* Domain */


/* Api */


function ProjectReviewCommentReply(_ref) {
  var replyTo = _ref.replyTo,
      commentId = _ref.commentId,
      setReplyToUser = _ref.setReplyToUser;

  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      reply = _useState2[0],
      setReply = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      mentions = _useState4[0],
      setMentions = _useState4[1];
  /* Effects */


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setReply("@[".concat(replyTo.display, "]{").concat(replyTo.id, "} "));
    setMentions([replyTo.id]);
  }, [replyTo]);
  /* Hooks */

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_4__["StaticContext"]),
      currentUser = _useContext.currentUser;

  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQueryClient"])();

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_4__["ReviewContext"]),
      projectImageId = _useContext2.projectImageId;
  /* Mutations */


  var addReplyMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_6__["addReply"], {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_6__["QUERY_KEYS"].PROJECT_IMAGE_BY_ID, parseInt(projectImageId)]);
      setReplyToUser(null);
    }
  });
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "reply",
    onSubmit: function onSubmit(event) {
      event.preventDefault();
      addReplyMutation.mutate({
        commentId: commentId,
        reply: reply,
        mentioned: mentions
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["User"], {
    user: currentUser
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_users_User__WEBPACK_IMPORTED_MODULE_3__["UserInfo"], {
    title: currentUser.display,
    subtitle: "/ ".concat(currentUser.organisation),
    layout: 'horizontal',
    size: 'sm'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewCommentMentions__WEBPACK_IMPORTED_MODULE_5__["default"], {
    comment: reply,
    setComment: setReply,
    mentions: mentions,
    setMentions: setMentions
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    extensionClasses: "form-control-btn",
    type: "submit",
    contentType: "icon",
    theme: "default",
    isLoading: addReplyMutation.isLoading
  })));
}

/***/ }),

/***/ "./assets/app/js/domain/project-review/ProjectReviewMarker.jsx":
/*!*********************************************************************!*\
  !*** ./assets/app/js/domain/project-review/ProjectReviewMarker.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectReviewMarker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
/* harmony import */ var _context_mainContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context/mainContext */ "./assets/app/js/context/mainContext.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */



/* Animations */


/* Context */


function ProjectReviewMarker(_ref) {
  var xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      author = _ref.author,
      commentIndex = _ref.commentIndex,
      commentOpen = _ref.commentOpen,
      toggleComment = _ref.toggleComment,
      children = _ref.children;

  /* Hooks */
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_4__["default"]),
      currentUser = _useContext.currentUser;

  var user = author ? author : currentUser;
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_1__["default"], {
    onClickAway: function onClickAway() {
      if (commentOpen) toggleComment();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
    layout: true,
    transition: {
      duration: 0.1
    },
    className: "review__interaction",
    style: {
      '--x': xPercent,
      '--y': yPercent
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].button, _extends({}, _animations__WEBPACK_IMPORTED_MODULE_3__["SCALE_FADE"], {
    className: "review__marker icon-wrapper icon-wrapper--secondary btn btn-link text-reset",
    style: {
      '--theme': "".concat(user.userColor)
    },
    onClick: toggleComment
  }), commentIndex && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text--xs"
  }, commentIndex)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, children)));
}

/***/ }),

/***/ "./assets/app/js/domain/project-review/ProjectReviewPagination.jsx":
/*!*************************************************************************!*\
  !*** ./assets/app/js/domain/project-review/ProjectReviewPagination.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectReviewPagination; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context */ "./assets/app/js/context/index.js");
/* harmony import */ var icons_chevron_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/chevron.svg */ "./assets/app/img/icons/chevron.svg");
/* harmony import */ var icons_chevron_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_chevron_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks */ "./assets/app/js/hooks/index.js");
/* Packages */



/* Context */


/* Assets */


/* Hooks */


function ProjectReviewPagination(_ref) {
  var allImages = _ref.allImages;

  /* Hooks */
  Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useEventListener"])('keyup', handleKeyUp);
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  /* Context */

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_3__["ReviewContext"]),
      projectImageId = _useContext.projectImageId;
  /* Constants */


  var currentImage = allImages.indexOf(Number(projectImageId));
  var prevImage = allImages[currentImage === 0 ? allImages.length - 1 : currentImage - 1];
  var nextImage = allImages[currentImage === allImages.length - 1 ? 0 : currentImage + 1];

  function handleKeyUp(event) {
    if (event.key === 'ArrowLeft' && prevImage) navigate('prev');
    if (event.key === 'ArrowRight' && nextImage) navigate('next');
  }

  var navigate = function navigate(direction) {
    if (direction === 'prev') history.push(prevImage.toString());
    if (direction === 'next') history.push(nextImage.toString());
  };

  return allImages.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pagination"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pagination__btn-wrapper pagination__btn-wrapper--prev"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "pagination__btn pagination__btn--prev btn btn-link text-reset",
    type: "button",
    onClick: function onClick() {
      return navigate('prev');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_2__["ReactSVG"], {
    wrapper: "svg",
    className: "pagination__icon icon icon--12",
    src: icons_chevron_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pagination__btn-wrapper pagination__btn-wrapper--next"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "pagination__btn pagination__btn--next btn btn-link text-reset",
    type: "button",
    onClick: function onClick() {
      return navigate('next');
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_2__["ReactSVG"], {
    wrapper: "svg",
    className: "pagination__icon icon icon--12",
    src: icons_chevron_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }))));
}

/***/ }),

/***/ "./assets/app/js/domain/project-review/index.js":
/*!******************************************************!*\
  !*** ./assets/app/js/domain/project-review/index.js ***!
  \******************************************************/
/*! exports provided: ProjectReviewCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectReviewCanvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectReviewCanvas */ "./assets/app/js/domain/project-review/ProjectReviewCanvas.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectReviewCanvas", function() { return _ProjectReviewCanvas__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/app/js/domain/project-review/services/calcCommentPos.js":
/*!************************************************************************!*\
  !*** ./assets/app/js/domain/project-review/services/calcCommentPos.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return calcCommentPos; });
function calcCommentPos(ref, pos) {
  var _ref$current;

  var markerSpacer = 10;
  var markerSize = 20;
  var offset = markerSize + markerSpacer;
  /* Get position of marker */

  var reviewPos = pos.reviewPos;
  var xPercent = Number(pos.xPercent);
  var yPercent = Number(pos.yPercent);
  /* Get dimensions of current box */

  var _ref = (ref === null || ref === void 0 ? void 0 : (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.getBoundingClientRect()) || {},
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

/***/ "./assets/app/js/domain/project-review/services/index.js":
/*!***************************************************************!*\
  !*** ./assets/app/js/domain/project-review/services/index.js ***!
  \***************************************************************/
/*! exports provided: calcCommentPos, styleMention */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _calcCommentPos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./calcCommentPos */ "./assets/app/js/domain/project-review/services/calcCommentPos.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "calcCommentPos", function() { return _calcCommentPos__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _styleMention__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styleMention */ "./assets/app/js/domain/project-review/services/styleMention.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "styleMention", function() { return _styleMention__WEBPACK_IMPORTED_MODULE_1__["default"]; });




/***/ }),

/***/ "./assets/app/js/domain/project-review/services/styleMention.js":
/*!**********************************************************************!*\
  !*** ./assets/app/js/domain/project-review/services/styleMention.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return styleMentions; });
function styleMentions(users, input) {
  var mentionNodes = document.querySelectorAll('.mentions .mentions__mention') || [];

  if (mentionNodes.length > 0) {
    var _loop = function _loop(index) {
      var mention = mentionNodes[index];
      var mentionInner = mention.innerHTML.replace('@', '').trim();
      var userOfMention = users.find(function (user) {
        return user.display === mentionInner;
      });
      mention.style.setProperty('--theme', userOfMention.userColor);

      if (input) {
        setTimeout(function () {
          input.focus();
          input.setSelectionRange(200, -1);
        }, 1);
      }
    };

    for (var index = 0; index < mentionNodes.length; index++) {
      _loop(index);
    }
  }
}

/***/ }),

/***/ "./assets/app/js/hooks/index.js":
/*!**************************************!*\
  !*** ./assets/app/js/hooks/index.js ***!
  \**************************************/
/*! exports provided: useSelection, usePageTitle, useStorage, useEventListener, useCloseOnEsc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useSelection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useSelection */ "./assets/app/js/hooks/useSelection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSelection", function() { return _useSelection__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _usePageTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usePageTitle */ "./assets/app/js/hooks/usePageTitle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageTitle", function() { return _usePageTitle__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _useStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useStorage */ "./assets/app/js/hooks/useStorage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStorage", function() { return _useStorage__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useEventListener */ "./assets/app/js/hooks/useEventListener.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useEventListener", function() { return _useEventListener__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _useCloseOnEsc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useCloseOnEsc */ "./assets/app/js/hooks/useCloseOnEsc.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useCloseOnEsc", function() { return _useCloseOnEsc__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./assets/app/js/hooks/useCloseOnEsc.js":
/*!**********************************************!*\
  !*** ./assets/app/js/hooks/useCloseOnEsc.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useCloseOnEsc; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useEventListener */ "./assets/app/js/hooks/useEventListener.js");
/* Packags */

/* Custom hook */


function useCloseOnEsc(status, toggle) {
  /* Callback */
  var handleKeyUp = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function (_ref) {
    var key = _ref.key;
    if (['Escape'].includes(key) && status) toggle();
  });
  /* Hook */

  Object(_useEventListener__WEBPACK_IMPORTED_MODULE_1__["default"])('keyup', handleKeyUp);
}

/***/ }),

/***/ "./assets/app/js/hooks/useEventListener.js":
/*!*************************************************!*\
  !*** ./assets/app/js/hooks/useEventListener.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useEventListener; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useEventListener(eventName, handler) {
  var element = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : window;
  // Create a ref that stores handler
  var savedHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(); // Update ref.current value if handler changes.
  // This allows our effect below to always get latest handler ...
  // ... without us needing to pass it in effect deps array ...
  // ... and potentially cause effect to re-run every render.

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    savedHandler.current = handler;
  }, [handler]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // Make sure element supports addEventListener
    // On
    var isSupported = element && element.addEventListener;
    if (!isSupported) return; // Create event listener that calls handler function stored in ref

    var eventListener = function eventListener(event) {
      return savedHandler.current(event);
    }; // Add event listener


    element.addEventListener(eventName, eventListener); // Remove event listener on cleanup

    return function () {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element] // Re-run if eventName or element changes
  );
}

/***/ }),

/***/ "./assets/app/js/hooks/usePageTitle.js":
/*!*********************************************!*\
  !*** ./assets/app/js/hooks/usePageTitle.js ***!
  \*********************************************/
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

/***/ "./assets/app/js/hooks/useSelection.js":
/*!*********************************************!*\
  !*** ./assets/app/js/hooks/useSelection.js ***!
  \*********************************************/
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

/***/ "./assets/app/js/hooks/useStorage.js":
/*!*******************************************!*\
  !*** ./assets/app/js/hooks/useStorage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useStorage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // Hook

function useStorage(key, initialValue) {
  var storageType = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'sessionStorage';

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(function () {
    try {
      // Get from local storage by key
      var item = window[storageType].getItem(key); // If no item value and initialValue is present, set as value

      // If no item value and initialValue is present, set as value
      if (initialValue && !item) {
        window[storageType].setItem(key, initialValue);
      } // Parse stored json or if none return initialValue


      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      return initialValue;
    }
  }),
      _useState2 = _slicedToArray(_useState, 2),
      storedValue = _useState2[0],
      setStoredValue = _useState2[1]; // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to storage.


  var setValue = function setValue(value) {
    try {
      // Allow value to be a function so we have same API as useState
      var valueToStore = value instanceof Function ? value(storedValue) : value; // Save state

      setStoredValue(valueToStore); // Save to local storage

      window[storageType].setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      throw new Error(error);
    }
  };

  return [storedValue, setValue];
}

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./assets/app/js/App.jsx");
// CSS
 // Pollyfils


/* Packages */




/* Components */


/* Client */

var client = new react_query__WEBPACK_IMPORTED_MODULE_4__["QueryClient"]({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});
/* Render */

var appNode = document.getElementById('app');

if (appNode !== null) {
  Object(react_dom__WEBPACK_IMPORTED_MODULE_3__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_query__WEBPACK_IMPORTED_MODULE_4__["QueryClientProvider"], {
    client: client
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__["default"], null)), appNode);
}

/***/ }),

/***/ "./assets/app/js/pages/Login.jsx":
/*!***************************************!*\
  !*** ./assets/app/js/pages/Login.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./assets/app/js/components/index.js");
/* Packages */

/* Components */


function Login() {
  /* Render */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Header"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "main-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Background"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pane"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pane__panel panel panel--login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-uppercase text-white mb-0"
  }, "Login"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted--70 text-white mb-6"
  }, "Login with your e-mail and password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["LoginForm"], null))))));
}

/***/ }),

/***/ "./assets/app/js/pages/ProjectDetail.jsx":
/*!***********************************************!*\
  !*** ./assets/app/js/pages/ProjectDetail.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectDetail; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _domain_project_detail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain/project-detail */ "./assets/app/js/domain/project-detail/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api */ "./assets/app/js/api/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks */ "./assets/app/js/hooks/index.js");
/* Packages */



/* Components */


/* Domain */


/* Api */


/* Hooks */


function ProjectDetail() {
  /* Queries */
  var _useParams = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
      projectId = _useParams.id;

  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQuery"])([_api__WEBPACK_IMPORTED_MODULE_5__["QUERY_KEYS"].PROJECT_BY_ID, parseInt(projectId)], function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_5__["fetchProjectById"])({
      projectId: projectId
    });
  }),
      isLoading = _useQuery.isLoading,
      _useQuery$data = _useQuery.data,
      data = _useQuery$data === void 0 ? {} : _useQuery$data;
  /* Hooks */


  Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["usePageTitle"])(data === null || data === void 0 ? void 0 : data.title, [data]);
  /* Constants  */

  var title = data.title,
      description = data.description,
      users = data.users,
      id = data.id,
      author = data.author,
      email = data.email,
      projectImages = data.projectImages;
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["PageWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["PageLoader"], {
    isLoading: isLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_domain_project_detail__WEBPACK_IMPORTED_MODULE_4__["ProjectDetailHeader"], {
    title: title,
    description: description,
    users: users,
    id: id,
    author: author,
    email: email
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_domain_project_detail__WEBPACK_IMPORTED_MODULE_4__["ProjectDetailImages"], {
    projectImages: projectImages,
    projectId: id
  })));
}

/***/ }),

/***/ "./assets/app/js/pages/ProjectOverview.jsx":
/*!*************************************************!*\
  !*** ./assets/app/js/pages/ProjectOverview.jsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectOverview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _domain_project_overview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../domain/project-overview */ "./assets/app/js/domain/project-overview/index.js");
/* harmony import */ var _context_mainContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../context/mainContext */ "./assets/app/js/context/mainContext.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api */ "./assets/app/js/api/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks */ "./assets/app/js/hooks/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */


/* Components */


/* Domain */


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


  Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["usePageTitle"])('Projects');

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_4__["default"]),
      currentUser = _useContext.currentUser,
      userRole = _useContext.userRole;
  /* Queries */


  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_api__WEBPACK_IMPORTED_MODULE_5__["QUERY_KEYS"].PROJECT_BY_USER, function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_5__["fetchProjectsByUser"])({
      userId: currentUser === null || currentUser === void 0 ? void 0 : currentUser.id
    });
  }, {
    enabled: !!(currentUser !== null && currentUser !== void 0 && currentUser.id)
  }),
      isLoading = _useQuery.isLoading,
      _useQuery$data = _useQuery.data,
      projects = _useQuery$data === void 0 ? [] : _useQuery$data;
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["PageWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["PageLoader"], {
    isLoading: isLoading
  }, userRole === 'admin' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_domain_project_overview__WEBPACK_IMPORTED_MODULE_3__["ProjectAdd"], {
    setNewProjectId: setNewProjectId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_domain_project_overview__WEBPACK_IMPORTED_MODULE_3__["ProjectResults"], {
    projects: projects,
    newProjectId: newProjectId
  })));
}

/***/ }),

/***/ "./assets/app/js/pages/ProjectReview.jsx":
/*!***********************************************!*\
  !*** ./assets/app/js/pages/ProjectReview.jsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectReview; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _domain_project_review__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain/project-review */ "./assets/app/js/domain/project-review/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../api */ "./assets/app/js/api/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../hooks */ "./assets/app/js/hooks/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context */ "./assets/app/js/context/index.js");
/* Packages */



/* Components */


/* Domain */


/* Api */


/* Hooks */


/* Context */


function ProjectReview() {
  /* Queries */
  var _useParams = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
      projectImageId = _useParams.id;

  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQuery"])([_api__WEBPACK_IMPORTED_MODULE_5__["QUERY_KEYS"].PROJECT_IMAGE_BY_ID, parseInt(projectImageId)], function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_5__["fetchProjectImageById"])({
      projectImageId: projectImageId
    });
  }),
      isLoading = _useQuery.isLoading,
      _useQuery$data = _useQuery.data,
      data = _useQuery$data === void 0 ? {} : _useQuery$data;
  /* Hooks */


  Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["usePageTitle"])(data === null || data === void 0 ? void 0 : data.title, [data]);
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_7__["ReviewContext"].Provider, {
    value: {
      projectId: data === null || data === void 0 ? void 0 : data.parentId,
      projectImageId: projectImageId
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["PageWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["PageLoader"], {
    isLoading: isLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_domain_project_review__WEBPACK_IMPORTED_MODULE_4__["ProjectReviewCanvas"], data))));
}

/***/ }),

/***/ "./assets/app/js/pages/Signup.jsx":
/*!****************************************!*\
  !*** ./assets/app/js/pages/Signup.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Signup; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components */ "./assets/app/js/components/index.js");
/* Packages */

/* Components */


function Signup() {
  /* Render */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Header"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "main-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Background"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pane"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pane__panel panel panel--login"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "panel__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "text-uppercase text-white mb-0"
  }, "Sign up"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted--70 text-white mb-6"
  }, "Sign up with your e-mail and password"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["SignupForm"], null))))));
}

/***/ }),

/***/ "./assets/app/js/pages/index.js":
/*!**************************************!*\
  !*** ./assets/app/js/pages/index.js ***!
  \**************************************/
/*! exports provided: Login, Signup, ProjectOverview, ProjectDetail, ProjectReview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login */ "./assets/app/js/pages/Login.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return _Login__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Signup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Signup */ "./assets/app/js/pages/Signup.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Signup", function() { return _Signup__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ProjectOverview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectOverview */ "./assets/app/js/pages/ProjectOverview.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectOverview", function() { return _ProjectOverview__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ProjectDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectDetail */ "./assets/app/js/pages/ProjectDetail.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectDetail", function() { return _ProjectDetail__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ProjectReview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectReview */ "./assets/app/js/pages/ProjectReview.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectReview", function() { return _ProjectReview__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./assets/app/js/routes.js":
/*!*********************************!*\
  !*** ./assets/app/js/routes.js ***!
  \*********************************/
/*! exports provided: ROUTES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages */ "./assets/app/js/pages/index.js");
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

/***/ "./assets/app/js/services/capitalizeFirstLetter.js":
/*!*********************************************************!*\
  !*** ./assets/app/js/services/capitalizeFirstLetter.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return capitalizeFirstLetter; });
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),

/***/ "./assets/app/js/services/getRole.js":
/*!*******************************************!*\
  !*** ./assets/app/js/services/getRole.js ***!
  \*******************************************/
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
  if (roles.includes(USER_ROLES.ROLE_USER_BASIC)) return 'basic';
  if (roles.includes(USER_ROLES.ROLE_USER)) return 'user';
}

/***/ }),

/***/ "./assets/app/js/services/index.js":
/*!*****************************************!*\
  !*** ./assets/app/js/services/index.js ***!
  \*****************************************/
/*! exports provided: isEmail, getRole, resizeImages, capitalizeFirstLetter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isEmail */ "./assets/app/js/services/isEmail.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return _isEmail__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _getRole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getRole */ "./assets/app/js/services/getRole.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRole", function() { return _getRole__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _resizeImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resizeImage */ "./assets/app/js/services/resizeImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resizeImages", function() { return _resizeImage__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./capitalizeFirstLetter */ "./assets/app/js/services/capitalizeFirstLetter.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "capitalizeFirstLetter", function() { return _capitalizeFirstLetter__WEBPACK_IMPORTED_MODULE_3__["default"]; });






/***/ }),

/***/ "./assets/app/js/services/isEmail.js":
/*!*******************************************!*\
  !*** ./assets/app/js/services/isEmail.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isEmail; });
function isEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/***/ }),

/***/ "./assets/app/js/services/resizeImage.js":
/*!***********************************************!*\
  !*** ./assets/app/js/services/resizeImage.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return resizeImages; });
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-image-file-resizer */ "./node_modules/react-image-file-resizer/build/index.js");
/* harmony import */ var react_image_file_resizer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_image_file_resizer__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var defaultOptions = {
  maxWidth: 300,
  maxHeight: 300,
  quality: 100,
  rotation: 0,
  outputType: 'file'
};

function resizeImageType(_x, _x2) {
  return _resizeImageType.apply(this, arguments);
}

function _resizeImageType() {
  _resizeImageType = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(image, options) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", new Promise(function (resolve) {
              react_image_file_resizer__WEBPACK_IMPORTED_MODULE_0___default.a.imageFileResizer(image, options.maxWidth, options.maxHeight, image.path.split('.').pop(), options.quality, options.rotation, function (uri) {
                resolve(uri);
              }, options.outputType);
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _resizeImageType.apply(this, arguments);
}

function resizeImage(_x3) {
  return _resizeImage.apply(this, arguments);
}

function _resizeImage() {
  _resizeImage = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(image) {
    var thumbnail, thumbnailRetina;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return resizeImageType(image, _objectSpread(_objectSpread({}, defaultOptions), {}, {
              maxWidth: 268,
              maxHeight: 236
            }));

          case 2:
            thumbnail = _context2.sent;
            _context2.next = 5;
            return resizeImageType(image, _objectSpread(_objectSpread({}, defaultOptions), {}, {
              maxWidth: 536,
              maxHeight: 472
            }));

          case 5:
            thumbnailRetina = _context2.sent;
            return _context2.abrupt("return", {
              original: image,
              thumbnail: Object.assign(thumbnail, {
                preview: URL.createObjectURL(thumbnail)
              }),
              thumbnailRetina: Object.assign(thumbnailRetina, {
                preview: URL.createObjectURL(thumbnailRetina)
              })
            });

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _resizeImage.apply(this, arguments);
}

function resizeImages(_x4) {
  return _resizeImages.apply(this, arguments);
}

function _resizeImages() {
  _resizeImages = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(images) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Promise.all(images.map( /*#__PURE__*/function () {
              var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(image) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return resizeImage(image);

                      case 2:
                        return _context3.abrupt("return", _context3.sent);

                      case 3:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x5) {
                return _ref.apply(this, arguments);
              };
            }()));

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _resizeImages.apply(this, arguments);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvYmFja2dyb3VuZC1sb2dpbi5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvYmFja2dyb3VuZC1sb2dpbkAyeC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX2ltYWdlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9hZGRfcHJvamVjdC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX3VzZXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2FyY2hpdmUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2NoZWNrLWNpcmNsZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvY2hlY2suc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2NoZXZyb24uc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2Nsb3NlLXdoaXRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvY29tbWVudC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvZGFuZ2VyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9kZWxldGUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2VkaXQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2xlYXZlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9uZXh0LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9zdGFyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9zdWNjZXNzLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy91cGxvYWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL3dhcm5pbmcuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FuaW1hdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9hcGkvY29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FwaS9waGFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FwaS9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvYXBpL3Byb2plY3RJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FwaS9zZWN1cml0eS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FwaS91c2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9hY3Rpb24tbWVudS9BY3Rpb25NZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvYWxlcnQvQWxlcnQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9iYWNrZ3JvdW5kL0JhY2tncm91bmQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9idXR0b24vQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9kcm9wem9uZS9Ecm9wem9uZVNpbmdsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2VkaXRhYmxlL0VkaXRhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvZWRpdGFibGUvRWRpdGFibGVCb2R5LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXJOYXZpZ2F0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvbG9hZGluZy13cmFwcGVyL0xvYWRpbmdXcmFwcGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvbW9kYWwvTW9kYWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9tb2RhbC9Nb2RhbEhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3BhZ2UtbG9hZGVyL1BhZ2VMb2FkZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9wYWdlLXdyYXBwZXIvUGFnZVdyYXBwZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9zZWN1cml0eS9Mb2dpbkZvcm0uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9zZWN1cml0eS9TZWN1cml0eU1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvc2VjdXJpdHkvU2lnbnVwRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3NsaWRlLWluL1NsaWRlSW4uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy91c2VyLWFkZC9Vc2VyQWRkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvdXNlci1hZGQvVXNlckFkZFNlYXJjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3VzZXItYWRkL1VzZXJBZGRTZWFyY2hSZXN1bHRzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvdXNlci1hZGQvc2VydmljZXMvZmlsdGVyVXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3VzZXJzL1VzZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy91c2Vycy9Vc2VyU2VsZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvdXNlcnMvVXNlcnMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29udGV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbnRleHQvbWFpbkNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb250ZXh0L3Jldmlld0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1kZXRhaWwvUHJvamVjdERldGFpbEhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1kZXRhaWwvUHJvamVjdERldGFpbEltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LWRldGFpbC9Qcm9qZWN0RGV0YWlsSW1hZ2VzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LWRldGFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LW92ZXJ2aWV3L1Byb2plY3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3Qtb3ZlcnZpZXcvUHJvamVjdEFkZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1vdmVydmlldy9Qcm9qZWN0SW1hZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3Qtb3ZlcnZpZXcvUHJvamVjdFJlc3VsdHMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3Qtb3ZlcnZpZXcvUHJvamVjdFNsaWRlSW4uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3Qtb3ZlcnZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvUHJvamVjdFJldmlld0FjdGlvbkJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvUHJvamVjdFJldmlld0NhbnZhcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvUHJvamVjdFJldmlld0NvbW1lbnQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdDb21tZW50QWRkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3Q29tbWVudE1lbnRpb25zLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3Q29tbWVudE1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3Q29tbWVudFBhbmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3Q29tbWVudFJlcGx5LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3TWFya2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3UGFnaW5hdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvc2VydmljZXMvY2FsY0NvbW1lbnRQb3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvc2VydmljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvc2VydmljZXMvc3R5bGVNZW50aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvaG9va3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9ob29rcy91c2VDbG9zZU9uRXNjLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvaG9va3MvdXNlRXZlbnRMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2hvb2tzL3VzZVBhZ2VUaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2hvb2tzL3VzZVNlbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2hvb2tzL3VzZVN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcGFnZXMvTG9naW4uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcGFnZXMvUHJvamVjdERldGFpbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9wYWdlcy9Qcm9qZWN0T3ZlcnZpZXcuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcGFnZXMvUHJvamVjdFJldmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9wYWdlcy9TaWdudXAuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9zZXJ2aWNlcy9jYXBpdGFsaXplRmlyc3RMZXR0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9zZXJ2aWNlcy9nZXRSb2xlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvc2VydmljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9zZXJ2aWNlcy9pc0VtYWlsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvc2VydmljZXMvcmVzaXplSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJBcHAiLCJSb3V0ZXJCb2R5IiwidXNlU3RhdGUiLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwidXNlclJvbGUiLCJzZXRVc2VyUm9sZSIsInVzZVN0b3JhZ2UiLCJhdG9iIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJyZXBsYWNlIiwidXNlcklkIiwidXNlTG9jYXRpb24iLCJ1c2VRdWVyeSIsIlFVRVJZX0tFWVMiLCJDVVJSRU5UX1VTRVIiLCJmZXRjaEN1cnJlbnRVc2VyIiwicmV0cnkiLCJvblN1Y2Nlc3MiLCJ1c2VyIiwiZ2V0Um9sZSIsImlzTG9hZGluZyIsIlJPVVRFUyIsImxvZ2luIiwic2lnbnVwIiwiaW5jbHVkZXMiLCJwYXRobmFtZSIsInByb2plY3RzIiwicm91dGVzIiwibWFwIiwicGF0aCIsIkNvbXBvbmVudCIsImNvbXBvbmVudCIsInByb3BzIiwiRkFERV9JTiIsImhpZGVQcm9ncmVzc0JhciIsIm5ld2VzdE9uVG9wIiwicG9zaXRpb24iLCJjbG9zZUJ1dHRvbiIsIkVBU0UiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsIkZBREVfSU5fVVAiLCJ5IiwidHlwZSIsImRhbXBpbmciLCJzdGlmZm5lc3MiLCJTQ0FMRV9JTl9VUCIsInNjYWxlIiwidHJhbnNmb3JtT3JpZ2luIiwiVFJBTlNGT1JNX1VQIiwiU0NBTEVfRkFERSIsIlNUQUdHRVJfVVAiLCJpbmRleCIsImRlbGF5IiwiU1RBR0dFUl9MRUZUIiwieCIsIlNMSURFX0lOIiwiYWRkQ29tbWVudCIsInBoYXNlSWQiLCJjb21tZW50IiwibWVudGlvbmVkIiwicGFyYW1zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ4UGVyY2VudCIsInlQZXJjZW50IiwibGVuZ3RoIiwiYXhpb3MiLCJwb3N0IiwicmVzdWx0IiwiZGF0YSIsImFkZFJlcGx5IiwiY29tbWVudElkIiwicmVwbHkiLCJQUk9KRUNUX0JZX1VTRVIiLCJQUk9KRUNUX0JZX0lEIiwiUFJPSkVDVF9JTUFHRV9CWV9JRCIsIkdMT0JBTF9VU0VSUyIsIlBST0pFQ1RfVVNFUlMiLCJuZXh0UGhhc2UiLCJpbWFnZXMiLCJmb3JFYWNoIiwiaW1hZ2UiLCJpbWFnZUluZGV4Iiwib3JpZ2luYWwiLCJ0aHVtYm5haWwiLCJ0aHVtYm5haWxSZXRpbmEiLCJmZXRjaFByb2plY3RzQnlVc2VyIiwiZ2V0IiwiZmV0Y2hQcm9qZWN0QnlJZCIsInByb2plY3RJZCIsImFkZFByb2plY3QiLCJkZWxldGVQcm9qZWN0cyIsInByb2plY3RJZHMiLCJpZCIsImxlYXZlUHJvamVjdHMiLCJlZGl0UHJvamVjdCIsImZvcm1SZWYiLCJjdXJyZW50IiwiZmV0Y2hQcm9qZWN0SW1hZ2VCeUlkIiwicHJvamVjdEltYWdlSWQiLCJhZGRQcm9qZWN0SW1hZ2VzIiwiZGVsZXRlUHJvamVjdEltYWdlcyIsInByb2plY3RJbWFnZUlkcyIsImVkaXRQcm9qZWN0SW1hZ2UiLCJ1cmwiLCJlbWFpbCIsInBhc3N3b3JkIiwibG9nb3V0IiwiZmV0Y2hHb2JhbFVzZXJzIiwiZmV0Y2hQcm9qZWN0VXNlcnMiLCJhZGRVc2VyIiwicmVmZXJlciIsImRlbGV0ZVVzZXIiLCJBY3Rpb25NZW51Iiwic2VsZWN0ZWQiLCJyZXNldFNlbGVjdGVkIiwiYWN0aW9ucyIsInVzZUNvbnRleHQiLCJTdGF0aWNDb250ZXh0IiwiY2xvc2VJY29uIiwiYWN0aW9uSW5kZXgiLCJ0aXRsZSIsInRoZW1lIiwiaGFzUGVybWlzc2lvbiIsImljb24iLCJpY29uU2l6ZSIsIm11dGF0aW9uIiwibG9hZGVyQ2xhc3NlcyIsImFwcGVhcmFuY2VUeXBlcyIsIndhcm5pbmciLCJ3YXJuaW5nSWNvbiIsImRhbmdlciIsImVycm9ySWNvbiIsInN1Y2Nlc3MiLCJzdWNjZXNzSWNvbiIsIkFsZXJ0IiwibWVzc2FnZSIsImFwcGVhcmFuY2UiLCJjbG9zZVRvYXN0IiwiQmFja2dyb3VuZCIsImJnIiwiYmdSZXRpbmEiLCJCdXR0b24iLCJzaXplIiwiZXh0ZW5zaW9uQ2xhc3NlcyIsIm9uQ2xpY2siLCJjb250ZW50VHlwZSIsImNoaWxkcmVuIiwiYnV0dG9uUmVmIiwidXNlUmVmIiwiYnV0dG9uSGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwiVGV4dCIsImRlZmF1bHRDbGFzc2VzIiwiSWNvbiIsImNoZWNrSWNvbiIsIkRyb3B6b25lIiwicG9zaXRpdGlvbiIsInF1ZXJ5Q2xpZW50IiwidXNlUXVlcnlDbGllbnQiLCJ1c2VEcm9wem9uZSIsImFjY2VwdCIsIm5vQ2xpY2siLCJvbkRyb3AiLCJhY2NlcHRlZEZpbGVzIiwidXBkYXRlUHJvamVjdEltYWdlcyIsImdldFJvb3RQcm9wcyIsImdldElucHV0UHJvcHMiLCJpc0RyYWdBY3RpdmUiLCJhZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24iLCJ1c2VNdXRhdGlvbiIsImludmFsaWRhdGVRdWVyaWVzIiwiZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uIiwiYWN0aW9uIiwicmVzaXplSW1hZ2VzIiwicmVzaXplZEltYWdlcyIsIm11dGF0ZSIsImlzUGFyZW50RHJhZ0FjdGl2ZSIsIkRyb3B6b25lSW5uZXIiLCJhZGRJbWFnZUxvYWRpbmciLCJub0RyYWdFdmVudHNCdWJibGluZyIsInVwbG9hZEltYWdlSWNvbiIsImFkZEltYWdlSWNvbiIsIkRyb3B6b25lU2luZ2xlIiwic2V0SW1hZ2VzIiwibWF4RmlsZXMiLCJwcmV2aWV3IiwibmFtZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiRWRpdGFibGUiLCJzdWJ0aXRsZSIsInJlc3QiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJ0b2dnbGVNb2RhbCIsImVkaXRJY29uIiwiRWRpdGFibGVCb2R5IiwiZmllbGRzIiwibXV0YXRpb25JZCIsIm11dGF0aW9uT25TdWNjZXNzIiwiZWRpdE11dGF0aW9uIiwicHJldmVudERlZmF1bHQiLCJmaWVsZCIsImZpZWxkSW5kZXgiLCJzaG91bGRGb2N1cyIsIkZpZWxkIiwiZGVmYXVsdFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImlucHV0UmVmIiwidXNlRWZmZWN0Iiwic2VsZWN0IiwidGFyZ2V0IiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwiSGVhZGVyIiwiSGVhZGVyTmF2aWdhdGlvbiIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwibG9nb3V0TXV0YXRpb24iLCJwdXNoIiwic2Vzc2lvblN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwidG9hc3QiLCJvbkVycm9yIiwiSW1hZ2UiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJ2YXJpYW50cyIsImhpZGRlbiIsInZpc2libGUiLCJvbkxvYWQiLCJzcmMiLCJMb2FkaW5nV3JhcHBlciIsImxvYWRpbmciLCJsb2FkZXJTaXplIiwiY2xhc3NlcyIsIk1vZGFsIiwicmVuZGVyT25Cb2R5IiwiY2VudGVyIiwiY29tcG9uZW50cyIsImN1c3RvbUFuaW1hdGlvbiIsIkhlYWRlckNvbXBvbmVudCIsIk1vZGFsSGVhZGVyIiwiYW5pbWF0aW9uIiwidXNlQ2xvc2VPbkVzYyIsInJlbmRlciIsImNyZWF0ZVBvcnRhbCIsImRvY3VtZW50IiwiYm9keSIsIlBhZ2VMb2FkZXIiLCJQYWdlV3JhcHBlciIsIkxvZ2luRm9ybSIsInNob3dTaWdudXAiLCJ1c2VQYWdlVGl0bGUiLCJ1c2VGb3JtIiwicmVWYWxpZGF0ZU1vZGUiLCJtb2RlIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJsb2dpbk11dGF0aW9uIiwiZXJyb3IiLCJyZXNwb25zZSIsIm9uU3VibWl0IiwicmVxdWlyZWQiLCJTZWN1cml0eU1vZGFsIiwic2VjdXJpdHlNb2RhbE9wZW4iLCJzZXRTZWN1cml0eU1vZGFsT3BlbiIsInRvZ2dsZVNlY3VyaXR5TW9kYWwiLCJzaG93TG9naW4iLCJTaWdudXBGb3JtIiwiY29udHJvbCIsInBsYWluUGFzc3dvcmQiLCJ1c2VXYXRjaCIsInNpZ251cE11dGF0aW9uIiwic3RhdHVzIiwicmVzZXQiLCJ1c2VybmFtZSIsIm9yZ2FuaXNhdGlvbiIsIm1pbkxlbmd0aCIsInBhc3N3b3JkQ29uZmlybSIsInZhbGlkYXRlIiwiU2xpZGVJbiIsInRvZ2dsZVNsaWRlSW4iLCJkb21FbGVtZW50IiwidmFyaWFudCIsIlVzZXJBZGQiLCJ1c2VycyIsInByb2plY3QiLCJhZGRVc2VySWNvbiIsIlVzZXJBZGRTZWFyY2giLCJxdWVyeSIsInNldFF1ZXJ5IiwiZm9jdXNlZFVzZXIiLCJzZXRGb2N1c2VkVXNlciIsImdsb2JhbFVzZXJzIiwiZ2xvYmFsVXNlcnNMb2FkaW5nIiwiZmlsdGVyZWRVc2VycyIsImZpbHRlclVzZXJzIiwicXVlcnlSZWYiLCJhZGRVc2VyTXV0YXRpb24iLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVPbktleURvd24iLCJrZXkiLCJpc0VtYWlsIiwiaGFuZGxlQ2xpY2siLCJ1c2VyTXV0YXRpb25Mb2FkaW5nIiwiVXNlckFkZFNlYXJjaFJlc3VsdHMiLCJyZXN1bHRzIiwibmV3VXNlciIsImRpc3BsYXkiLCJ1c2VyQ29sb3IiLCJ1c2VySW5kZXgiLCJsb3dlclF1ZXJ5IiwidG9Mb3dlckNhc2UiLCJleGlzdGluZ1VzZXJzQnlFbWFpbCIsImZpbHRlciIsIlVzZXIiLCJhdXRob3IiLCJpc0F1dGhvciIsImRlbGV0ZVVzZXJNdXRhdGlvbiIsImRlbGV0ZUljb24iLCJzdGFySWNvbiIsIlVzZXJBdmF0YXIiLCJ1c2VySW5pdGlhbHMiLCJzcGxpdCIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsIlVzZXJJbmZvIiwibGF5b3V0IiwiVXNlclNlbGVjdCIsImlzRm9jdXNlZCIsImhhbmRsZVN0YXR1cyIsIlVzZXJzIiwic2xpY2VBbW91bnQiLCJJbmZpbml0eSIsInNsaWNlIiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiUmV2aWV3Q29udGV4dCIsIlByb2plY3REZXRhaWxIZWFkZXIiLCJkZXNjcmlwdGlvbiIsInN0YXRpY0NvbnRleHQiLCJQcm9qZWN0RGV0YWlsSW1hZ2UiLCJwcm9qZWN0SW1hZ2UiLCJ1cGRhdGVTZWxlY3RlZCIsInBoYXNlIiwiUHJvamVjdERldGFpbEltYWdlcyIsInByb2plY3RJbWFnZXMiLCJ1c2VTZWxlY3Rpb24iLCJJbWFnZXMiLCJwcm9qZWN0SW1hZ2VJbmRleCIsIlByb2plY3QiLCJQcm9qZWN0QWRkIiwic2V0TmV3UHJvamVjdElkIiwic2V0UHJvamVjdElkIiwic2xpZGVJbk9wZW4iLCJzZXRTbGlkZUluT3BlbiIsImVuYWJsZWQiLCJhZGRNdXRhdGlvbiIsImludmFsaWRhdGVQcm9qZWN0Iiwic2V0VGltZW91dCIsInVwZGF0ZVByb2plY3QiLCJhZGRQcm9qZWN0SWNvbiIsIlByb2plY3RJbWFnZSIsIlByb2plY3RSZXN1bHRzIiwibmV3UHJvamVjdElkIiwibGVhdmVQcm9qZWN0c011dGF0aW9uIiwiZGVsZXRlUHJvamVjdHNNdXRhdGlvbiIsImxlYXZlSWNvbiIsImFyY2hpdmVJY29uIiwicHJvamVjdEluZGV4IiwiUHJvamVjdFNsaWRlSW4iLCJEcm9wem9uZUltYWdlIiwiUHJvamVjdFJldmlld0FjdGlvbkJhciIsImFsbEltYWdlcyIsInBoYXNlTnVtYmVyIiwiY29tbWVudHNQYW5lbE9wZW4iLCJ0b2dnbGVDb21tZW50c1BhbmVsIiwiY2hldnJvbkljb24iLCJtYXhXaWR0aCIsImluZGV4T2YiLCJOdW1iZXIiLCJjb21tZW50SWNvbiIsIkVkaXRBY3Rpb24iLCJlZGl0TW9kYWxPcGVuIiwic2V0RWRpdE1vZGFsT3BlbiIsInRvZ2dsZUVkaXRNb2RhbCIsIlBoYXNlQWN0aW9uIiwicGhhc2VNb2RhbE9wZW4iLCJzZXRQaGFzZU1vZGFsT3BlbiIsInRvZ2dsZVBoYXNlTW9kYWwiLCJuZXh0UGhhc2VNdXRhdGlvbiIsIm5leHRJY29uIiwiY3Vyc29yT2Zmc2V0IiwiUHJvamVjdFJldmlld0NhbnZhcyIsInBhcmVudElkIiwicHJvamVjdFVzZXJzIiwiY29tbWVudHMiLCJyZXZpZXdSZWYiLCJtYXJrZXJQb3MiLCJzZXRNYXJrZXJQb3MiLCJzZXRDb21tZW50c1BhbmVsT3BlbiIsInRvZ2dsZUNvbW1lbnRBZGRPcGVuIiwicG9zTWFya2VyIiwiY2xpZW50WCIsImNsaWVudFkiLCJhdXRoZW50aWNhdGVkIiwicmV2aWV3UG9zIiwid2lkdGgiLCJ0b3AiLCJjb21tZW50SW5kZXgiLCJQcm9qZWN0UmV2aWV3Q29tbWVudCIsImNvbnRlbnQiLCJzZXRSZXBseVRvVXNlciIsInJlbmRlckF1dGhvciIsInNob3dJbml0aWFsUmVwbGllcyIsImNyZWF0ZWQiLCJzaG93UmVwbGllcyIsInNldFNob3dSZXBsaWVzIiwicmVuZGVyQ29tbWVudCIsInVzZXJzUmVnZXgiLCJ1c2Vyc0FycmF5IiwibWF0Y2hBbGwiLCJmaW5kIiwiUHJvamVjdFJldmlld0NvbW1lbnRBZGQiLCJtb2RhbFJlZiIsImNhbGNDb21tZW50UG9zIiwibGVmdCIsInNldENvbW1lbnQiLCJtZW50aW9ucyIsInNldE1lbnRpb25zIiwiYWRkQ29tbWVudE11dGF0aW9uIiwicGFyc2VJbnQiLCJ0cmltIiwiYXV0b0ZvY3VzIiwiUHJvamVjdFJldmlld0NvbW1lbnRNZW50aW9ucyIsIm1lbnRpb25SZWYiLCJzdHlsZU1lbnRpb25zIiwiU3VnZ2VzdGlvbiIsIl8iLCJlbnRyeSIsImhpZ2hsaWdodGVkIiwiZm9jdXNlZCIsIlByb2plY3RSZXZpZXdDb21tZW50TW9kYWwiLCJjb21tZW50T3BlbiIsInNldENvbW1lbnRPcGVuIiwidG9nZ2xlQ29tbWVudCIsIkNvbW1lbnRCb3giLCJ0cmFuc2Zvcm1lZFBvcyIsInNldFRyYW5zZm9ybWVkUG9zIiwicmVwbHlUb1VzZXIiLCJib3hSZWYiLCJyZXBseVRvIiwiUHJvamVjdFJldmlld0NvbW1lbnRQYW5lbCIsInJldmVyc2UiLCJDb21tZW50V2l0aFJlcGx5IiwiUHJvamVjdFJldmlld0NvbW1lbnRSZXBseSIsInNldFJlcGx5IiwiYWRkUmVwbHlNdXRhdGlvbiIsIlByb2plY3RSZXZpZXdNYXJrZXIiLCJQcm9qZWN0UmV2aWV3UGFnaW5hdGlvbiIsInVzZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXlVcCIsImN1cnJlbnRJbWFnZSIsInByZXZJbWFnZSIsIm5leHRJbWFnZSIsIm5hdmlnYXRlIiwiZGlyZWN0aW9uIiwidG9TdHJpbmciLCJyZWYiLCJwb3MiLCJtYXJrZXJTcGFjZXIiLCJtYXJrZXJTaXplIiwib2Zmc2V0IiwiYm94V2lkdGgiLCJib3hIZWlnaHQiLCJzY3JlZW5XaWR0aCIsImlubmVyV2lkdGgiLCJib3hQZXJjZW50V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJpbm5lckhlaWdodCIsImJveFBlcmNlbnRIZWlnaHQiLCJpbnB1dCIsIm1lbnRpb25Ob2RlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZW50aW9uIiwibWVudGlvbklubmVyIiwiaW5uZXJIVE1MIiwidXNlck9mTWVudGlvbiIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJmb2N1cyIsInNldFNlbGVjdGlvblJhbmdlIiwidG9nZ2xlIiwidXNlQ2FsbGJhY2siLCJldmVudE5hbWUiLCJoYW5kbGVyIiwiZWxlbWVudCIsInNhdmVkSGFuZGxlciIsImlzU3VwcG9ydGVkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXBkYXRlUHJvcHMiLCJzZXRTZWxlY3RlZCIsInNlbGVjdGVkSWQiLCJpbml0aWFsVmFsdWUiLCJzdG9yYWdlVHlwZSIsIml0ZW0iLCJnZXRJdGVtIiwic2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInN0b3JlZFZhbHVlIiwic2V0U3RvcmVkVmFsdWUiLCJ2YWx1ZVRvU3RvcmUiLCJGdW5jdGlvbiIsInN0cmluZ2lmeSIsIkVycm9yIiwiY2xpZW50IiwiUXVlcnlDbGllbnQiLCJkZWZhdWx0T3B0aW9ucyIsInF1ZXJpZXMiLCJyZWZldGNoT25XaW5kb3dGb2N1cyIsImFwcE5vZGUiLCJnZXRFbGVtZW50QnlJZCIsIkxvZ2luIiwiUHJvamVjdERldGFpbCIsInVzZVBhcmFtcyIsIlByb2plY3RPdmVydmlldyIsIlByb2plY3RSZXZpZXciLCJTaWdudXAiLCJzdHJpbmciLCJjaGFyQXQiLCJVU0VSX1JPTEVTIiwiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiIsIlJPTEVfVVNFUl9CQVNJQyIsInJvbGVzIiwidGVzdCIsIm1heEhlaWdodCIsInF1YWxpdHkiLCJyb3RhdGlvbiIsIm91dHB1dFR5cGUiLCJyZXNpemVJbWFnZVR5cGUiLCJvcHRpb25zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJSZXNpemVyIiwiaW1hZ2VGaWxlUmVzaXplciIsInBvcCIsInVyaSIsInJlc2l6ZUltYWdlIiwiT2JqZWN0IiwiYXNzaWduIiwiVVJMIiwiY3JlYXRlT2JqZWN0VVJMIiwiYWxsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQSxnQkFBZ0IsdUJBQXVCO1FBQ3ZDOzs7UUFHQTtRQUNBO1FBQ0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDdkpBLGlCQUFpQixxQkFBdUIsOEI7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsaUM7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsdUI7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUI7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsc0I7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIscUI7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsMEI7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsbUI7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIscUI7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIseUI7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsbUI7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIscUI7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsb0I7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsb0I7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsa0I7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsbUI7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsa0I7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsa0I7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIscUI7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsb0I7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIscUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7QUFDQTtBQUVBOztBQUNBO0FBRUE7O0FBQ0E7QUFFQTs7QUFDQTtB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LDhDQUlRO0FBQ05GLHNCQUFRLEVBQUVGLEtBREo7QUFFTkcsdUJBQVMsRUFBRXlkLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjMWQsU0FBZCxFQUF5QjtBQUFFdUcsdUJBQU8sRUFBRW9YLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQjVkLFNBQXBCO0FBQVgsZUFBekIsQ0FGTDtBQUdOQyw2QkFBZSxFQUFFd2QsTUFBTSxDQUFDQyxNQUFQLENBQWN6ZCxlQUFkLEVBQStCO0FBQUVzRyx1QkFBTyxFQUFFb1gsR0FBRyxDQUFDQyxlQUFKLENBQW9CM2QsZUFBcEI7QUFBWCxlQUEvQjtBQUhYLGFBSlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVdlLFNBQWUwRixZQUE5QjtBQUFBO0FBQUE7OzswRUFBZSxrQkFBNEJoRyxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDRHVkLE9BQU8sQ0FBQ1csR0FBUixDQUNabGUsTUFBTSxDQUFDekQsR0FBUDtBQUFBLGlGQUFXLGtCQUFPMkQsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFDRzJkLFdBQVcsQ0FBQzNkLEtBQUQsQ0FEZDs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVg7O0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRFksQ0FEQzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7Ozs7Ozs7Ozs7QUN0Q2YsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvYXBwL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2Fzc2V0cy9hcHAvanMvbWFpbi5qc1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2JhY2tncm91bmQtbG9naW4uanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2JhY2tncm91bmQtbG9naW5AMnguanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FkZF9pbWFnZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYWRkX3Byb2plY3Quc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FkZF91c2VyLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hcmNoaXZlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jaGVjay1jaXJjbGUuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2NoZWNrLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jaGV2cm9uLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jbG9zZS13aGl0ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY2xvc2Uuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2NvbW1lbnQuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Rhbmdlci5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZGVsZXRlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9lZGl0LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9sZWF2ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbmV4dC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvc3Rhci5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvc3VjY2Vzcy5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvdXBsb2FkLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy93YXJuaW5nLnN2Z1wiOyIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgU3dpdGNoLCBSb3V0ZSwgUmVkaXJlY3QsIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgSGVhZGVyTmF2aWdhdGlvbiwgUGFnZUxvYWRlciB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbi8qIFNlcnZpY2VzICovXG5pbXBvcnQgeyBnZXRSb2xlIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4gfSBmcm9tICcuL2FuaW1hdGlvbnMnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGZldGNoQ3VycmVudFVzZXIsIFFVRVJZX0tFWVMgfSBmcm9tICcuL2FwaSc7XG5cbi8qIFJvdXRlcyAqL1xuaW1wb3J0IHJvdXRlcywgeyBST1VURVMgfSBmcm9tICcuL3JvdXRlcyc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VTdG9yYWdlIH0gZnJvbSAnLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PFJvdXRlcj5cblx0XHRcdDxSb3V0ZXJCb2R5IC8+XG5cdFx0PC9Sb3V0ZXI+XG5cdCk7XG59XG5cbmNvbnN0IFJvdXRlckJvZHkgPSAoKSA9PiB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUoKTtcblx0Y29uc3QgW3VzZXJSb2xlLCBzZXRVc2VyUm9sZV0gPSB1c2VTdGF0ZShbXSk7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgW3VzZXJJZF0gPSB1c2VTdG9yYWdlKCd1c2VySWQnLCBhdG9iKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKSkpO1xuXHRjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG5cblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGlzTG9hZGluZyB9ID0gdXNlUXVlcnkoUVVFUllfS0VZUy5DVVJSRU5UX1VTRVIsICgpID0+IGZldGNoQ3VycmVudFVzZXIoeyB1c2VySWQgfSksIHtcblx0XHRyZXRyeTogZmFsc2UsXG5cdFx0b25TdWNjZXNzOiAodXNlcikgPT4ge1xuXHRcdFx0c2V0Q3VycmVudFVzZXIodXNlcik7XG5cdFx0XHRzZXRVc2VyUm9sZShnZXRSb2xlKHVzZXIpKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8U3RhdGljQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXIsIHVzZXJSb2xlIH19PlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0ey8qIFNob3cgZGlmZmVyZW50IGhlYWRlcnMgYmFzZWQgb24gcm91dGUgKi99XG5cdFx0XHRcdHshW1JPVVRFUy5sb2dpbiwgUk9VVEVTLnNpZ251cF0uaW5jbHVkZXMobG9jYXRpb24ucGF0aG5hbWUpICYmICFsb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygncmV2aWV3JykgJiYgPEhlYWRlck5hdmlnYXRpb24gLz59XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDxQYWdlTG9hZGVyIHsuLi57IGlzTG9hZGluZyB9fT5cblx0XHRcdFx0PEFuaW1hdGVQcmVzZW5jZSBleGl0QmVmb3JlRW50ZXI+XG5cdFx0XHRcdFx0PFN3aXRjaCBsb2NhdGlvbj17bG9jYXRpb259IGtleT17bG9jYXRpb24ucGF0aG5hbWV9PlxuXHRcdFx0XHRcdFx0ey8qIFJlZGlyZWN0IHRvIC9wcm9qZWN0cyBpZiBhIHVzZXIgaXMgbG9nZ2VkIGluICovfVxuXHRcdFx0XHRcdFx0e2N1cnJlbnRVc2VyICYmIFtST1VURVMubG9naW4sIFJPVVRFUy5zaWdudXBdLmluY2x1ZGVzKGxvY2F0aW9uLnBhdGhuYW1lKSAmJiAoXG5cdFx0XHRcdFx0XHRcdDxSZWRpcmVjdCB0bz17Uk9VVEVTLnByb2plY3RzfSAvPlxuXHRcdFx0XHRcdFx0KX1cblxuXHRcdFx0XHRcdFx0ey8qIFJlZGlyZWN0IHRvIC9sb2dpbiBpZiBhIHVzZXIgaXMgbm90IGxvZ2dlZCBpbiBvbiB0aGUgL3Byb2plY3RzIHJvdXRlICovfVxuXHRcdFx0XHRcdFx0eyFjdXJyZW50VXNlciAmJiBsb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhST1VURVMucHJvamVjdHMpICYmIDxSZWRpcmVjdCB0bz17Uk9VVEVTLmxvZ2lufSAvPn1cblxuXHRcdFx0XHRcdFx0ey8qIFJlbmRlciByb3V0ZXMgKi99XG5cdFx0XHRcdFx0XHR7cm91dGVzLm1hcCgoeyBwYXRoLCBjb21wb25lbnQ6IENvbXBvbmVudCwgcHJvcHMgfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8Um91dGUga2V5PXtwYXRofSBwYXRoPXtwYXRofSBleGFjdD5cblx0XHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdiBrZXk9e3BhdGh9IHsuLi5GQURFX0lOfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxDb21wb25lbnQgey4uLnsgLi4ucHJvcHMsIGN1cnJlbnRVc2VyLCB1c2VyUm9sZSB9fSAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHRcdFx0PC9Sb3V0ZT5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvU3dpdGNoPlxuXHRcdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDwvUGFnZUxvYWRlcj5cblxuXHRcdFx0ey8qIFRvYXN0ICovfVxuXHRcdFx0PFRvYXN0Q29udGFpbmVyXG5cdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0aGlkZVByb2dyZXNzQmFyOiB0cnVlLFxuXHRcdFx0XHRcdG5ld2VzdE9uVG9wOiB0cnVlLFxuXHRcdFx0XHRcdHBvc2l0aW9uOiAnYm90dG9tLWxlZnQnLFxuXHRcdFx0XHRcdGNsb3NlQnV0dG9uOiBmYWxzZSxcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cdFx0PC9TdGF0aWNDb250ZXh0LlByb3ZpZGVyPlxuXHQpO1xufTtcbiIsImNvbnN0IEVBU0UgPSBbMC42NSwgMCwgMC4zNSwgMV07XG5cbmNvbnN0IEZBREVfSU4gPSB7XG5cdGluaXRpYWw6IHtcblx0XHRvcGFjaXR5OiAwLFxuXHR9LFxuXHRhbmltYXRlOiB7XG5cdFx0b3BhY2l0eTogMSxcblx0fSxcblx0ZXhpdDoge1xuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdHRyYW5zaXRpb246IHtcblx0XHRlYXNlOiBFQVNFLFxuXHRcdGR1cmF0aW9uOiAwLjIsXG5cdH0sXG59O1xuXG5jb25zdCBGQURFX0lOX1VQID0gKHkgPSAxMDApID0+ICh7XG5cdGluaXRpYWw6IHtcblx0XHR5OiB5LFxuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdGFuaW1hdGU6IHtcblx0XHR5OiAwLFxuXHRcdG9wYWNpdHk6IDEsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0Mixcblx0XHRcdHN0aWZmbmVzczogODAwLFxuXHRcdH0sXG5cdH0sXG5cdGV4aXQ6IHtcblx0XHR5OiB5LFxuXHRcdG9wYWNpdHk6IDAsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0Mixcblx0XHRcdHN0aWZmbmVzczogMTIwMCxcblx0XHR9LFxuXHR9LFxufSk7XG5cbmNvbnN0IFNDQUxFX0lOX1VQID0gKHkgPSAxMDApID0+ICh7XG5cdGluaXRpYWw6IHtcblx0XHR5OiB5LFxuXHRcdHNjYWxlOiAwLjUsXG5cdFx0dHJhbnNmb3JtT3JpZ2luOiAnNTAlIDEwMCUnLFxuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdGFuaW1hdGU6IHtcblx0XHR5OiAwLFxuXHRcdHNjYWxlOiAxLFxuXHRcdG9wYWNpdHk6IDEsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0Mixcblx0XHRcdHN0aWZmbmVzczogODAwLFxuXHRcdH0sXG5cdH0sXG5cdGV4aXQ6IHtcblx0XHR5OiB5LFxuXHRcdHNjYWxlOiAwLjUsXG5cdFx0b3BhY2l0eTogMCxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3ByaW5nJyxcblx0XHRcdGRhbXBpbmc6IDQyLFxuXHRcdFx0c3RpZmZuZXNzOiAxMjAwLFxuXHRcdH0sXG5cdH0sXG59KTtcblxuY29uc3QgVFJBTlNGT1JNX1VQID0ge1xuXHRpbml0aWFsOiB7XG5cdFx0eTogJzEwMCUnLFxuXHR9LFxuXHRhbmltYXRlOiB7XG5cdFx0eTogJzAlJyxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3ByaW5nJyxcblx0XHRcdGRhbXBpbmc6IDQxLFxuXHRcdFx0c3RpZmZuZXNzOiA2MDAsXG5cdFx0fSxcblx0fSxcblx0ZXhpdDoge1xuXHRcdHk6ICcxMDAlJyxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3ByaW5nJyxcblx0XHRcdGRhbXBpbmc6IDQxLFxuXHRcdFx0c3RpZmZuZXNzOiAxMjAwLFxuXHRcdH0sXG5cdH0sXG59O1xuXG5jb25zdCBTQ0FMRV9GQURFID0ge1xuXHRpbml0aWFsOiB7XG5cdFx0c2NhbGU6IDAsXG5cdFx0b3BhY2l0eTogMCxcblx0fSxcblx0YW5pbWF0ZToge1xuXHRcdHNjYWxlOiAxLFxuXHRcdG9wYWNpdHk6IDEsXG5cdH0sXG5cdGV4aXQ6IHtcblx0XHRzY2FsZTogMCxcblx0XHRvcGFjaXR5OiAwLFxuXHR9LFxuXHR0cmFuc2l0aW9uOiB7XG5cdFx0ZWFzZTogRUFTRSxcblx0XHRkdXJhdGlvbjogMC4yLFxuXHR9LFxufTtcblxuY29uc3QgU1RBR0dFUl9VUCA9IChpbmRleCA9IDApID0+ICh7XG5cdGluaXRpYWw6IHsgb3BhY2l0eTogMCwgeTogMzUgfSxcblx0YW5pbWF0ZTogeyBvcGFjaXR5OiAxLCB5OiAwLCB0cmFuc2l0aW9uOiB7IHR5cGU6ICdzcHJpbmcnLCBkYW1waW5nOiAzMCwgc3RpZmZuZXNzOiA0NTAsIGRlbGF5OiBpbmRleCAqIDAuMDM1IH0gfSxcblx0ZXhpdDogeyBvcGFjaXR5OiAwLCBzY2FsZTogMC4yNSwgdHJhbnNpdGlvbjogeyB0eXBlOiAnc3ByaW5nJywgZGFtcGluZzogMzAsIHN0aWZmbmVzczogNjAwIH0gfSxcbn0pO1xuXG5jb25zdCBTVEFHR0VSX0xFRlQgPSAoaW5kZXggPSAwKSA9PiAoe1xuXHRpbml0aWFsOiB7IG9wYWNpdHk6IDAsIHg6IDEwIH0sXG5cdGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgeDogMCwgdHJhbnNpdGlvbjogeyB0eXBlOiAnc3ByaW5nJywgZGFtcGluZzogMzAsIHN0aWZmbmVzczogMzAwLCBkZWxheTogaW5kZXggKiAwLjAzNSB9IH0sXG5cdGV4aXQ6IHsgb3BhY2l0eTogMCwgeDogMTAsIHRyYW5zaXRpb246IHsgdHlwZTogJ3NwcmluZycsIGRhbXBpbmc6IDMwLCBzdGlmZm5lc3M6IDYwMCB9IH0sXG59KTtcblxuY29uc3QgU0xJREVfSU4gPSB7XG5cdGluaXRpYWw6IHtcblx0XHR4OiAnLTEwMCUnLFxuXHR9LFxuXHRhbmltYXRlOiB7XG5cdFx0eDogJzAlJyxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRkdXJhdGlvbjogMC4yLFxuXHRcdFx0ZWFzZTogWzAuNjUsIDAsIDAuMzUsIDFdLFxuXHRcdH0sXG5cdH0sXG5cdGV4aXQ6IHtcblx0XHR4OiAnLTEwMCUnLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdGR1cmF0aW9uOiAwLjEsXG5cdFx0XHRlYXNlOiBbMC42NSwgMCwgMC4zNSwgMV0sXG5cdFx0fSxcblx0fSxcbn07XG5cbmV4cG9ydCB7IEZBREVfSU4sIEZBREVfSU5fVVAsIFNDQUxFX0lOX1VQLCBUUkFOU0ZPUk1fVVAsIFNDQUxFX0ZBREUsIFNUQUdHRVJfVVAsIFNUQUdHRVJfTEVGVCwgU0xJREVfSU4gfTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8qIEFkZCBjb21tZW50IHwgZXhwZWN0cyBwaGFzZSBpZCwgdXNlciBpZCBhbmQgZm9ybVJlZiBvYmVjdCAqL1xuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSBhc3luYyAoeyBwaGFzZUlkLCB1c2VySWQsIGNvbW1lbnQsIG1lbnRpb25lZCwgcG9zaXRpb24gfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblxuXHRwYXJhbXMuYXBwZW5kKCd1c2VySWQnLCB1c2VySWQpO1xuXHRwYXJhbXMuYXBwZW5kKCdjb21tZW50JywgY29tbWVudCk7XG5cdHBhcmFtcy5hcHBlbmQoJ3Bvc2l0aW9uWCcsIHBvc2l0aW9uLnhQZXJjZW50KTtcblx0cGFyYW1zLmFwcGVuZCgncG9zaXRpb25ZJywgcG9zaXRpb24ueVBlcmNlbnQpO1xuXHRwYXJhbXMuYXBwZW5kKCdyZWZlcmVyJywgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoJy8nLCAnJykpO1xuXG5cdGlmIChtZW50aW9uZWQubGVuZ3RoKSB7XG5cdFx0cGFyYW1zLmFwcGVuZCgnbWVudGlvbmVkW10nLCBtZW50aW9uZWQpO1xuXHR9XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9jb21tZW50cy9hZGQvJHtwaGFzZUlkfWAsIHBhcmFtcyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBBZGQgY29tbWVudCB8IGV4cGVjdHMgcGhhc2UgaWQsIHVzZXIgaWQgYW5kIGZvcm1SZWYgb2JlY3QgKi9cbmV4cG9ydCBjb25zdCBhZGRSZXBseSA9IGFzeW5jICh7IGNvbW1lbnRJZCwgcmVwbHksIG1lbnRpb25lZCB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuXG5cdHBhcmFtcy5hcHBlbmQoJ3JlcGx5JywgcmVwbHkpO1xuXHRwYXJhbXMuYXBwZW5kKCdyZWZlcmVyJywgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoJy8nLCAnJykpO1xuXG5cdGlmIChtZW50aW9uZWQubGVuZ3RoKSB7XG5cdFx0cGFyYW1zLmFwcGVuZCgnbWVudGlvbmVkW10nLCBtZW50aW9uZWQpO1xuXHR9XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9jb21tZW50cy9yZXBseS8ke2NvbW1lbnRJZH1gLCBwYXJhbXMpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vc2VjdXJpdHknO1xuZXhwb3J0ICogZnJvbSAnLi9wcm9qZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vcHJvamVjdEltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5leHBvcnQgKiBmcm9tICcuL2NvbW1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9waGFzZSc7XG5cbmV4cG9ydCBjb25zdCBRVUVSWV9LRVlTID0ge1xuXHRDVVJSRU5UX1VTRVI6ICdjdXJyZW50X3VzZXInLFxuXHRQUk9KRUNUX0JZX1VTRVI6ICdwcm9qZWN0X2J5X3VzZXInLFxuXHRQUk9KRUNUX0JZX0lEOiAncHJvamVjdF9ieV9pZCcsXG5cdFBST0pFQ1RfSU1BR0VfQllfSUQ6ICdwcm9qZWN0X2ltYWdlX2J5X2lkJyxcblx0R0xPQkFMX1VTRVJTOiAnZ2xvYmFsX3VzZXJzJyxcblx0UFJPSkVDVF9VU0VSUzogJ3Byb2plY3RfdXNlcnMnLFxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8qIE5leHQgcGhhc2UgfCBleHBlY3RzIHBoYXNlIGlkIGFuZCBpbWFnZSAoYmxvYikgKi9cbmV4cG9ydCBjb25zdCBuZXh0UGhhc2UgPSBhc3luYyAoeyBwaGFzZUlkLCBpbWFnZXMgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblxuXHRpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGltYWdlSW5kZXgpID0+IHtcblx0XHRwYXJhbXMuYXBwZW5kKGBpbWFnZXNbJHtpbWFnZUluZGV4fV1bb3JpZ2luYWxdYCwgaW1hZ2Uub3JpZ2luYWwpO1xuXHRcdHBhcmFtcy5hcHBlbmQoYGltYWdlc1ske2ltYWdlSW5kZXh9XVt0aHVtYm5haWxdYCwgaW1hZ2UudGh1bWJuYWlsKTtcblx0XHRwYXJhbXMuYXBwZW5kKGBpbWFnZXNbJHtpbWFnZUluZGV4fV1bdGh1bWJuYWlsUmV0aW5hXWAsIGltYWdlLnRodW1ibmFpbFJldGluYSk7XG5cdH0pO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvcGhhc2UvbmV4dC8ke3BoYXNlSWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBGZXRjaCBwcm9qZWN0cyBieSB1c2VyIHwgZXhwZWN0cyB1c2VyIGlkICovXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9qZWN0c0J5VXNlciA9IGFzeW5jICh7IHVzZXJJZCB9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9qZWN0cy9nZXQvJHt1c2VySWR9YCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBGZXRjaCBwcm9qZWN0cyBieSBpZCB8IGV4cGVjdHMgcHJvamVjdCBpZCAqL1xuZXhwb3J0IGNvbnN0IGZldGNoUHJvamVjdEJ5SWQgPSBhc3luYyAoeyBwcm9qZWN0SWQgfSkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcHJvamVjdC9nZXQvJHtwcm9qZWN0SWR9YCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBBZGQgcHJvamVjdCAqL1xuZXhwb3J0IGNvbnN0IGFkZFByb2plY3QgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvcHJvamVjdHMvYWRkJyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBEZWxldGUgcHJvamVjdChzKSB8IGV4cGVjdHMgYXJyYXkgb2YgcHJvamVjdElkcyAgKi9cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9qZWN0cyA9IGFzeW5jICh7IHByb2plY3RJZHMgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblx0cHJvamVjdElkcy5mb3JFYWNoKChpZCkgPT4gcGFyYW1zLmFwcGVuZCgncHJvamVjdHNbXScsIGlkKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9kZWxldGVgLCBwYXJhbXMpO1xuXG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBMZWF2ZSBwcm9qZWN0KHMpIHwgZXhwZWN0cyBhcnJheSBvZiBwcm9qZWN0SWRzIGFuZCB1c2VyIGlkICAqL1xuZXhwb3J0IGNvbnN0IGxlYXZlUHJvamVjdHMgPSBhc3luYyAoeyBwcm9qZWN0SWRzLCB1c2VySWQgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblx0cHJvamVjdElkcy5mb3JFYWNoKChpZCkgPT4gcGFyYW1zLmFwcGVuZCgncHJvamVjdHNbXScsIGlkKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9sZWF2ZS8ke3VzZXJJZH1gLCBwYXJhbXMpO1xuXG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBFZGl0IHByb2plY3QgfCBleHBlY3RzIGZvcm1EYXRhIG9iamVjdCBhbmQgcHJvamVjdCBpZCAgKi9cbmV4cG9ydCBjb25zdCBlZGl0UHJvamVjdCA9IGFzeW5jICh7IGZvcm1SZWYsIGlkIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKGZvcm1SZWYuY3VycmVudCk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9lZGl0LyR7aWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBGZXRjaCBwcm9qZWN0SW1hZ2UgYnkgaWQgfCBleHBlY3RzIHByb2plY3QgaW1hZ2UgaWQgKi9cbmV4cG9ydCBjb25zdCBmZXRjaFByb2plY3RJbWFnZUJ5SWQgPSBhc3luYyAoeyBwcm9qZWN0SW1hZ2VJZCB9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9pbWFnZXMvZ2V0LyR7cHJvamVjdEltYWdlSWR9YCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBBZGQgcHJvamVjdEltYWdlKHMpIHwgZXhwZWN0cyBwcm9qZWN0IGlkIGFuZCBhcnJheSBvZiBpbWFnZXMgKGJsb2IpICovXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdEltYWdlcyA9IGFzeW5jICh7IHByb2plY3RJZCwgaW1hZ2VzIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5cdGltYWdlcy5mb3JFYWNoKChpbWFnZSwgaW1hZ2VJbmRleCkgPT4ge1xuXHRcdHBhcmFtcy5hcHBlbmQoYGltYWdlc1ske2ltYWdlSW5kZXh9XVtvcmlnaW5hbF1gLCBpbWFnZS5vcmlnaW5hbCk7XG5cdFx0cGFyYW1zLmFwcGVuZChgaW1hZ2VzWyR7aW1hZ2VJbmRleH1dW3RodW1ibmFpbF1gLCBpbWFnZS50aHVtYm5haWwpO1xuXHRcdHBhcmFtcy5hcHBlbmQoYGltYWdlc1ske2ltYWdlSW5kZXh9XVt0aHVtYm5haWxSZXRpbmFdYCwgaW1hZ2UudGh1bWJuYWlsUmV0aW5hKTtcblx0fSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9pbWFnZXMvYWRkLyR7cHJvamVjdElkfWAsIHBhcmFtcyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBEZWxldGUgcHJvamVjdEltYWdlKHMpIHwgZXhwZWN0cyBwcm9qZWN0IGlkIGFuZCBhcnJheSBvZiBwcm9qZWN0SW1hZ2VJZHMgICovXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvamVjdEltYWdlcyA9IGFzeW5jICh7IHByb2plY3RJZCwgcHJvamVjdEltYWdlSWRzIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5cdHByb2plY3RJbWFnZUlkcy5mb3JFYWNoKChpZCkgPT4gcGFyYW1zLmFwcGVuZCgncHJvamVjdEltYWdlc1tdJywgaWQpKTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2ltYWdlcy9kZWxldGUvJHtwcm9qZWN0SWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIEVkaXQgcHJvamVjdEltYWdlIHwgZXhwZWN0cyBmb3JtUmVmIG9iamVjdCBhbmQgcHJvamVjdEltYWdlIGlkICAqL1xuZXhwb3J0IGNvbnN0IGVkaXRQcm9qZWN0SW1hZ2UgPSBhc3luYyAoeyBmb3JtUmVmLCBpZCB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvaW1hZ2VzL2VkaXQvJHtpZH1gLCBwYXJhbXMpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8qIFNpZ251cCB0byBwbGF0Zm9ybSB8IGV4cGVjdHMgZm9ybVJlZiBvYmplY3QgYW5kIG9wdGlvbmFsIHVzZXJJZCAqL1xuZXhwb3J0IGNvbnN0IHNpZ251cCA9IGFzeW5jICh7IGZvcm1SZWYsIHVzZXJJZCB9KSA9PiB7XG5cdGxldCB1cmwgPSAnL2FwaS9zaWdudXAnO1xuXHRpZiAodXNlcklkKSB1cmwgPSBgL2FwaS9zaWdudXAvJHt1c2VySWR9YDtcblxuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybVJlZi5jdXJyZW50KTtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdCh1cmwsIHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIExvZ2luIHRvIHBsYXRmb3JtIHwgZXhwZWN0cyBmb3JtUmVmIG9iamVjdCAqL1xuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgZm9ybVJlZiB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCB7XG5cdFx0ZW1haWw6IHBhcmFtcy5nZXQoJ2VtYWlsJyksXG5cdFx0cGFzc3dvcmQ6IHBhcmFtcy5nZXQoJ3Bhc3N3b3JkJyksXG5cdH0pO1xuXG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBMb2dvdXQgZnJvbSBwbGF0Zm9ybSAqL1xuZXhwb3J0IGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2xvZ291dCcpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8qIEZldGNoIGN1cnJlbnQgKGxvZ2dlZCBpbikgdXNlciB8IGV4cGVjdHMgdXNlciBpZCAqL1xuZXhwb3J0IGNvbnN0IGZldGNoQ3VycmVudFVzZXIgPSBhc3luYyAoeyB1c2VySWQgfSkgPT4ge1xuXHRsZXQgdXJsID0gJy9hcGkvdXNlcnMvZ2V0Jztcblx0aWYgKHVzZXJJZCkgdXJsID0gYCR7dXJsfS8ke3VzZXJJZH1gO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRmV0Y2ggYWxsIHVzZXJzIGluIGRiICovXG5leHBvcnQgY29uc3QgZmV0Y2hHb2JhbFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdXNlcnMvZ2V0L2FsbCcpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRmV0Y2ggcHJvamVjdCB1c2VycyAqL1xuZXhwb3J0IGNvbnN0IGZldGNoUHJvamVjdFVzZXJzID0gYXN5bmMgKHsgcHJvamVjdElkIH0pID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3VzZXJzL2dldC9wcm9qZWN0LyR7cHJvamVjdElkfWApO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogQWRkIHVzZXIgdG8gcHJvamVjdCB8IGV4cGVjdHMgcHJvamVjdCBpZCBhbmQgdXNlciBlbWFpbCAqL1xuZXhwb3J0IGNvbnN0IGFkZFVzZXIgPSBhc3luYyAoeyBwcm9qZWN0SWQsIGVtYWlsIH0pID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS91c2Vycy9hZGQvJHtwcm9qZWN0SWR9YCwge1xuXHRcdGVtYWlsOiBlbWFpbCxcblx0XHRyZWZlcmVyOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgnLycsICcnKSxcblx0fSk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBEZWxldGUgdXNlciBmcm9tIHByb2plY3QgfCBleHBlY3RzIHByb2plY3QgaWQgYW5kIHVzZXIgaWQgKi9cbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKHsgcHJvamVjdElkLCB1c2VySWQgfSkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3VzZXJzL2RlbGV0ZS8ke3Byb2plY3RJZH1gLCB7IHVzZXJJZCB9KTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgVFJBTlNGT1JNX1VQIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWN0aW9uTWVudSh7IHNlbGVjdGVkLCByZXNldFNlbGVjdGVkLCBhY3Rpb25zIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdiB7Li4uVFJBTlNGT1JNX1VQfSBjbGFzc05hbWU9XCJiYXIgYmFyLS1wcm9qZWN0XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmFyX19idG4gYnRuIGJ0bi1saW5rIGQtaW5saW5lLWZsZXggdGV4dC13aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3Jlc2V0U2VsZWN0ZWR9PlxuXHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTRcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWwtMiBtYi0wXCI+e3NlbGVjdGVkLmxlbmd0aH0gc2VsZWN0ZWQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiYmFyX19saXN0IGxpc3QgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHR7YWN0aW9ucy5tYXAoXG5cdFx0XHRcdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhlbWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1Blcm1pc3Npb24sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb24sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb25TaXplID0gMTIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG11dGF0aW9uID0gKCkgPT4ge30sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzTG9hZGluZyA9IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdGFjdGlvbkluZGV4XG5cdFx0XHRcdFx0XHRcdFx0KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoaGFzUGVybWlzc2lvbi5pbmNsdWRlcyh1c2VyUm9sZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXthY3Rpb25JbmRleH0gY2xhc3NOYW1lPVwibGlzdF9faXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJiYXJfX2J0biBidG4gYnRuLWxpbmsgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LWRlY29yYXRpb24tbm9uZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e211dGF0aW9ufT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGljb24td3JhcHBlciBpY29uLXdyYXBwZXItLSR7dGhlbWV9IGljb24td3JhcHBlci0taW50ZXJhY3RpdmVgfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TG9hZGluZ1dyYXBwZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvYWRpbmc9e2lzTG9hZGluZ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvYWRlclNpemU9ezEyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3Nlcz17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkZXJDbGFzc2VzOiBgcG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4IHRleHQtJHt0aGVtZX1gLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d3JhcHBlcj1cInN2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGljb24gaWNvbi0tJHtpY29uU2l6ZX0gdGV4dC0ke3RoZW1lfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aWNvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Mb2FkaW5nV3JhcHBlcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImJ0bl9fdGV4dCB0ZXh0LXdoaXRlIG1sLTJcIj57dGl0bGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbW90aW9uLmRpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Utd2hpdGUuc3ZnJztcbmltcG9ydCB3YXJuaW5nSWNvbiBmcm9tICdpY29ucy93YXJuaW5nLnN2Zyc7XG5pbXBvcnQgZXJyb3JJY29uIGZyb20gJ2ljb25zL2Rhbmdlci5zdmcnO1xuaW1wb3J0IHN1Y2Nlc3NJY29uIGZyb20gJ2ljb25zL3N1Y2Nlc3Muc3ZnJztcblxuLyogR2xvYmFsICovXG5jb25zdCBhcHBlYXJhbmNlVHlwZXMgPSB7XG5cdHdhcm5pbmc6IHtcblx0XHR0aXRsZTogJ1dhcm5pbmcnLFxuXHRcdGljb246IHdhcm5pbmdJY29uLFxuXHR9LFxuXHRkYW5nZXI6IHtcblx0XHR0aXRsZTogJ0Vycm9yJyxcblx0XHRpY29uOiBlcnJvckljb24sXG5cdH0sXG5cdHN1Y2Nlc3M6IHtcblx0XHR0aXRsZTogJ1N1Y2Nlc3MnLFxuXHRcdGljb246IHN1Y2Nlc3NJY29uLFxuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxlcnQoeyBtZXNzYWdlLCBhcHBlYXJhbmNlLCBjbG9zZVRvYXN0IH0pIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC0tbm90aWZpY2F0aW9uXCIgcm9sZT1cImFsZXJ0XCIgZGF0YS1hbGVydD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGFsZXJ0X19pY29uLXdyYXBwZXIgYWxlcnRfX2ljb24td3JhcHBlci0tJHthcHBlYXJhbmNlfSBtci0yYH0+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHXG5cdFx0XHRcdFx0XHR3cmFwcGVyPVwic3ZnXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsZXJ0X19pY29uIGljb24gaWNvbi0tMTJcIlxuXHRcdFx0XHRcdFx0c3JjPXthcHBlYXJhbmNlVHlwZXNbYXBwZWFyYW5jZV0uaWNvbn1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItMFwiPnthcHBlYXJhbmNlVHlwZXNbYXBwZWFyYW5jZV0udGl0bGV9PC9wPlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImFsZXJ0X19idG4gYnRuIGJ0bi1saW5rIG1sLWF1dG9cIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Y2xvc2VUb2FzdH0+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEwXCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhbGVydF9fbWVzc2FnZSB0ZXh0LS1zbSB0ZXh0LW11dGVkLS03MCBtci1sZy04XCI+e21lc3NhZ2V9PC9zcGFuPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGJnIGZyb20gJ2ltYWdlcy9iYWNrZ3JvdW5kLWxvZ2luLmpwZyc7XG5pbXBvcnQgYmdSZXRpbmEgZnJvbSAnaW1hZ2VzL2JhY2tncm91bmQtbG9naW5AMnguanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFja2dyb3VuZCgpIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XG5cdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImJhY2tncm91bmRfX2ltYWdlXCIgc3JjPXtiZ30gc3JjU2V0PXtiZ1JldGluYX0gYWx0PVwiQmFja2dyb3VuZFwiIC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiB7YWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2hlY2tJY29uIGZyb20gJ2ljb25zL2NoZWNrLWNpcmNsZS5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24oe1xuXHR0aXRsZSxcblx0dHlwZSA9ICdidXR0b24nLFxuXHR0aGVtZSA9ICdzZWNvbmRhcnknLFxuXHRzaXplID0gJ3NtJyxcblx0ZXh0ZW5zaW9uQ2xhc3NlcyA9ICcnLFxuXHRvbkNsaWNrID0gKCkgPT4ge30sXG5cdGlzTG9hZGluZyA9IGZhbHNlLFxuXHRjb250ZW50VHlwZSA9ICd0ZXh0Jyxcblx0Y2hpbGRyZW4sXG59KSB7XG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgYnV0dG9uUmVmID0gdXNlUmVmKCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IGJ1dHRvbkhlaWdodCA9IGJ1dHRvblJlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0cmVmPXtidXR0b25SZWZ9XG5cdFx0XHRjbGFzc05hbWU9e2BidG4gYnRuLSR7c2l6ZX0gYnRuLSR7dGhlbWV9ICR7ZXh0ZW5zaW9uQ2xhc3Nlc30gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcmB9XG5cdFx0XHRzdHlsZT17eyBoZWlnaHQ6IGJ1dHRvbkhlaWdodCB9fVxuXHRcdFx0ey4uLnsgdHlwZSwgb25DbGljayB9fT5cblx0XHRcdHtjb250ZW50VHlwZSA9PT0gJ3RleHQnID8gPFRleHQgey4uLnsgdGl0bGUsIGlzTG9hZGluZywgY2hpbGRyZW4gfX0gLz4gOiA8SWNvbiB7Li4ueyBpc0xvYWRpbmcgfX0gLz59XG5cdFx0PC9idXR0b24+XG5cdCk7XG59XG5cbmNvbnN0IFRleHQgPSAoeyB0aXRsZSwgaXNMb2FkaW5nLCBjaGlsZHJlbiB9KSA9PiAoXG5cdDxMb2FkaW5nV3JhcHBlclxuXHRcdGxvYWRpbmc9e2lzTG9hZGluZ31cblx0XHRsb2FkZXJTaXplPXsxNn1cblx0XHRjbGFzc2VzPXt7XG5cdFx0XHRsb2FkZXJDbGFzc2VzOiAncG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4IHRleHQtc2Vjb25kYXJ5Jyxcblx0XHRcdGRlZmF1bHRDbGFzc2VzOiAnZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcicsXG5cdFx0fX0+XG5cdFx0PHNwYW4gY2xhc3NOYW1lPVwiYnRuX190ZXh0XCI+e3RpdGxlfTwvc3Bhbj5cblx0XHR7Y2hpbGRyZW59XG5cdDwvTG9hZGluZ1dyYXBwZXI+XG4pO1xuXG5jb25zdCBJY29uID0gKHsgaXNMb2FkaW5nIH0pID0+IChcblx0PGRpdiBjbGFzc05hbWU9XCJpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnkgaWNvbi13cmFwcGVyLS1pbnRlcmFjdGl2ZVwiPlxuXHRcdDxMb2FkaW5nV3JhcHBlclxuXHRcdFx0bG9hZGluZz17aXNMb2FkaW5nfVxuXHRcdFx0bG9hZGVyU2l6ZT17MTR9XG5cdFx0XHRjbGFzc2VzPXt7IGxvYWRlckNsYXNzZXM6ICdwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXggdGV4dC1zZWNvbmRhcnknLCBkZWZhdWx0Q2xhc3NlczogJ2QtZmxleCcgfX0+XG5cdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImFsZXJ0X19pY29uIGljb24gaWNvbi0tMTQgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e2NoZWNrSWNvbn0gLz5cblx0XHQ8L0xvYWRpbmdXcmFwcGVyPlxuXHQ8L2Rpdj5cbik7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSAncmVhY3QtZHJvcHpvbmUnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogU2VydmljZXMgKi9cbmltcG9ydCB7IHJlc2l6ZUltYWdlcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU0NBTEVfRkFERSwgRkFERV9JTiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRJbWFnZUljb24gZnJvbSAnaWNvbnMvYWRkX2ltYWdlLnN2Zyc7XG5pbXBvcnQgdXBsb2FkSW1hZ2VJY29uIGZyb20gJ2ljb25zL3VwbG9hZC5zdmcnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGFkZFByb2plY3RJbWFnZXMsIGRlbGV0ZVByb2plY3RJbWFnZXMsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wem9uZSh7IHByb2plY3RJZCwgcG9zaXRpdGlvbiA9ICdsZWZ0JywgY2hpbGRyZW4gfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0Y29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSB9ID0gdXNlRHJvcHpvbmUoe1xuXHRcdGFjY2VwdDogJ2ltYWdlLyonLFxuXHRcdG5vQ2xpY2s6IHRydWUsXG5cdFx0b25Ecm9wOiAoYWNjZXB0ZWRGaWxlcykgPT4gdXBkYXRlUHJvamVjdEltYWdlcygnYWRkJywgeyBpbWFnZXM6IGFjY2VwdGVkRmlsZXMgfSksXG5cdH0pO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBhZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24gPSB1c2VNdXRhdGlvbihhZGRQcm9qZWN0SW1hZ2VzLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKSxcblx0fSk7XG5cblx0Y29uc3QgZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlUHJvamVjdEltYWdlcywge1xuXHRcdG9uU3VjY2VzczogKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSksXG5cdH0pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB1cGRhdGVQcm9qZWN0SW1hZ2VzID0gYXN5bmMgKGFjdGlvbiwgcHJvcHMpID0+IHtcblx0XHRpZiAoYWN0aW9uID09PSAnYWRkJyAmJiBwcm9wcy5pbWFnZXMpIHtcblx0XHRcdGNvbnN0IHJlc2l6ZWRJbWFnZXMgPSBhd2FpdCByZXNpemVJbWFnZXMocHJvcHMuaW1hZ2VzKTtcblxuXHRcdFx0YWRkUHJvamVjdEltYWdlc011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgaW1hZ2VzOiByZXNpemVkSW1hZ2VzIH0pO1xuXHRcdH1cblxuXHRcdGlmIChhY3Rpb24gPT09ICdkZWxldGUnKSBkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkLCAuLi5wcm9wcyB9KTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3B6b25lXCIgey4uLmdldFJvb3RQcm9wcygpfT5cblx0XHRcdDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxuXHRcdFx0PERyb3B6b25lSW5uZXJcblx0XHRcdFx0YWRkSW1hZ2VMb2FkaW5nPXthZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24uaXNMb2FkaW5nfVxuXHRcdFx0XHR7Li4ueyB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc1BhcmVudERyYWdBY3RpdmU6IGlzRHJhZ0FjdGl2ZSwgcG9zaXRpdGlvbiB9fVxuXHRcdFx0Lz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0tZXF1YWxpemVkIGd1dHRlcnMtNVwiPlxuXHRcdFx0XHR7Y2hpbGRyZW4oeyB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc0xvYWRpbmc6IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbi5pc0xvYWRpbmcgfSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuLyogSW5uZXIgZHJvcHpvbmUgKi9cbmNvbnN0IERyb3B6b25lSW5uZXIgPSAoeyBhZGRJbWFnZUxvYWRpbmcsIHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzUGFyZW50RHJhZ0FjdGl2ZSwgcG9zaXRpdGlvbiB9KSA9PiB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzLCBpc0RyYWdBY3RpdmUgfSA9IHVzZURyb3B6b25lKHtcblx0XHRhY2NlcHQ6ICdpbWFnZS8qJyxcblx0XHRub0RyYWdFdmVudHNCdWJibGluZzogdHJ1ZSxcblx0XHRvbkRyb3A6IChhY2NlcHRlZEZpbGVzKSA9PiB1cGRhdGVQcm9qZWN0SW1hZ2VzKCdhZGQnLCB7IGltYWdlczogYWNjZXB0ZWRGaWxlcyB9KSxcblx0fSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZVwiIHsuLi5nZXRSb290UHJvcHMoKX0+XG5cdFx0XHQ8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHsoaXNEcmFnQWN0aXZlIHx8IGlzUGFyZW50RHJhZ0FjdGl2ZSkgJiYgKFxuXHRcdFx0XHRcdDxtb3Rpb24uZGl2IHsuLi5GQURFX0lOfSBjbGFzc05hbWU9XCJkcm9wem9uZV9fb3ZlcmxheVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnlcIiBzdHlsZT17eyAnLS1zaXplJzogNzUgfX0+XG5cdFx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0zMCB0ZXh0LXNlY29uZGFyeVwiIHNyYz17dXBsb2FkSW1hZ2VJY29ufSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0XHQ8bW90aW9uLmJ1dHRvblxuXHRcdFx0XHR7Li4uU0NBTEVfRkFERX1cblx0XHRcdFx0a2V5PVwiYWRkLXByb2plY3RcIlxuXHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0Y2xhc3NOYW1lPXtgaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0taW50ZXJhY3RpdmUgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnkgYnRuIGJ0bi1saW5rIGJ0bi0tYWRkIGJ0bi0tYWRkLSR7cG9zaXRpdGlvbn1gfVxuXHRcdFx0XHRzdHlsZT17eyAnLS1zaXplJzogNzUgfX0+XG5cdFx0XHRcdDxMb2FkaW5nV3JhcHBlclxuXHRcdFx0XHRcdGxvYWRpbmc9e2FkZEltYWdlTG9hZGluZ31cblx0XHRcdFx0XHRjbGFzc2VzPXt7IGxvYWRlckNsYXNzZXM6ICdwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXggdGV4dC1zZWNvbmRhcnknIH19XG5cdFx0XHRcdFx0bG9hZGVyU2l6ZT17MzB9PlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0zMCB0ZXh0LXNlY29uZGFyeVwiIHNyYz17YWRkSW1hZ2VJY29ufSAvPlxuXHRcdFx0XHQ8L0xvYWRpbmdXcmFwcGVyPlxuXHRcdFx0PC9tb3Rpb24uYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSAncmVhY3QtZHJvcHpvbmUnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRJbWFnZUljb24gZnJvbSAnaWNvbnMvYWRkX2ltYWdlLnN2Zyc7XG5pbXBvcnQgdXBsb2FkSW1hZ2VJY29uIGZyb20gJ2ljb25zL3VwbG9hZC5zdmcnO1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJy4uLyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4sIFNDQUxFX0ZBREUgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogU2VydmljZXMgKi9cbmltcG9ydCB7IHJlc2l6ZUltYWdlcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcHpvbmVTaW5nbGUoeyBpbWFnZXM6IFtpbWFnZV0sIHNldEltYWdlcyB9KSB7XG5cdGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzLCBpc0RyYWdBY3RpdmUgfSA9IHVzZURyb3B6b25lKHtcblx0XHRhY2NlcHQ6ICdpbWFnZS8qJyxcblx0XHRtYXhGaWxlczogMSxcblx0XHRvbkRyb3A6IGFzeW5jIChhY2NlcHRlZEZpbGVzKSA9PiB7XG5cdFx0XHRjb25zdCByZXNpemVkSW1hZ2VzID0gYXdhaXQgcmVzaXplSW1hZ2VzKGFjY2VwdGVkRmlsZXMpO1xuXHRcdFx0c2V0SW1hZ2VzKHJlc2l6ZWRJbWFnZXMpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZHJvcHpvbmUgZHJvcHpvbmUtLXNpbmdsZSBtdC0yXCIgey4uLmdldFJvb3RQcm9wcygpfT5cblx0XHRcdDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0gZXhpdEJlZm9yZUVudGVyPlxuXHRcdFx0XHR7IWltYWdlICYmIChcblx0XHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdFx0ey4uLlNDQUxFX0ZBREV9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1pbnRlcmFjdGl2ZSBpY29uLXdyYXBwZXItLXNlY29uZGFyeVwiXG5cdFx0XHRcdFx0XHRzdHlsZT17eyAnLS1zaXplJzogNDQgfX0+XG5cdFx0XHRcdFx0XHR7aXNEcmFnQWN0aXZlID8gKFxuXHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdiBrZXk9XCJ1cGxvYWRcIiB7Li4uU0NBTEVfRkFERX0+XG5cdFx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHXG5cdFx0XHRcdFx0XHRcdFx0XHR3cmFwcGVyPVwic3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImljb24gaWNvbi0tMjAgdGV4dC1zZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0XHRcdFx0c3JjPXt1cGxvYWRJbWFnZUljb259XG5cdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0PG1vdGlvbi5kaXYga2V5PVwiYWRkXCIgey4uLlNDQUxFX0ZBREV9PlxuXHRcdFx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0yMCB0ZXh0LXNlY29uZGFyeVwiIHNyYz17YWRkSW1hZ2VJY29ufSAvPlxuXHRcdFx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0KX1cblx0XHRcdFx0e2ltYWdlICYmIChcblx0XHRcdFx0XHQ8bW90aW9uLmRpdiBrZXk9XCJjb250YWluZXJcIiB7Li4uRkFERV9JTn0gY2xhc3NOYW1lPVwiZHJvcHpvbmVfX2NvbnRhaW5lclwiPlxuXHRcdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImRyb3B6b25lX19pbWFnZVwiXG5cdFx0XHRcdFx0XHRcdHNyYz17aW1hZ2UudGh1bWJuYWlsLnByZXZpZXd9XG5cdFx0XHRcdFx0XHRcdHNyY1NldD17YCR7aW1hZ2UudGh1bWJuYWlsUmV0aW5hLnByZXZpZXd9IDJ4YH1cblx0XHRcdFx0XHRcdFx0YWx0PXtpbWFnZS50aHVtYm5haWwubmFtZX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgZHJvcHpvbmVfX2ltYWdlLWRlbGV0ZSBwLTBcIlxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdFx0XHRzZXRJbWFnZXMoW10pO1xuXHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImRyb3B6b25lX19pbWFnZS1kZWxldGUtaWNvbiBpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1kYW5nZXIgbXgtYXV0b1wiXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgJy0tc2l6ZSc6IDUwIH19PlxuXHRcdFx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNCB0ZXh0LWRhbmdlciBtdC0wXCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCBFZGl0YWJsZUJvZHkgZnJvbSAnLi9FZGl0YWJsZUJvZHknO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBlZGl0SWNvbiBmcm9tICdpY29ucy9lZGl0LnN2Zyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0YWJsZSh7IHRpdGxlLCBzdWJ0aXRsZSA9ICdTYXZlIHdoZW4gcmVhZHknLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiBzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbik7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJlZGl0YWJsZSBkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmUgcG9zaXRpb24tcmVsYXRpdmVcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZWRpdGFibGVfX2NvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+XG5cdFx0XHR7dXNlclJvbGUgPT09ICdhZG1pbicgJiYgKFxuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImVkaXRhYmxlX190b2dnbGUgYnRuIGJ0bi1saW5rIGljb24td3JhcHBlciBpY29uLXdyYXBwZXItLXNlY29uZGFyeSBpY29uLXdyYXBwZXItLWludGVyYWN0aXZlIHN0cmV0Y2hlZC1saW5rIG1sLTNcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17dG9nZ2xlTW9kYWx9XG5cdFx0XHRcdFx0XHRzdHlsZT17eyAnLS1zaXplJzogMjUgfX0+XG5cdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTAgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e2VkaXRJY29ufSAvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxNb2RhbCB7Li4ueyB0aXRsZSwgc3VidGl0bGUsIG1vZGFsT3BlbiwgdG9nZ2xlTW9kYWwgfX0+XG5cdFx0XHRcdFx0XHQ8RWRpdGFibGVCb2R5IHsuLi57IHRvZ2dsZU1vZGFsLCAuLi5yZXN0IH19IC8+XG5cdFx0XHRcdFx0PC9Nb2RhbD5cblx0XHRcdFx0PC8+XG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUZXh0YXJlYUF1dG9zaXplIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBFbGVtZW50cyAqL1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIFNlcnZpY2VzICovXG5pbXBvcnQgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRhYmxlQm9keSh7IGZpZWxkcywgdG9nZ2xlTW9kYWwsIG11dGF0aW9uLCBtdXRhdGlvbklkLCBtdXRhdGlvbk9uU3VjY2VzcyB9KSB7XG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgZm9ybVJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBlZGl0TXV0YXRpb24gPSB1c2VNdXRhdGlvbihtdXRhdGlvbiwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0bXV0YXRpb25PblN1Y2Nlc3MoKTtcblx0XHRcdHRvZ2dsZU1vZGFsKCk7XG5cdFx0fSxcblx0fSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGZvcm1cblx0XHRcdHJlZj17Zm9ybVJlZn1cblx0XHRcdGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1ncm93LTEgcG9zaXRpb24tcmVsYXRpdmVcIlxuXHRcdFx0b25TdWJtaXQ9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRlZGl0TXV0YXRpb24ubXV0YXRlKHsgZm9ybVJlZiwgaWQ6IG11dGF0aW9uSWQgfSk7XG5cdFx0XHR9fT5cblx0XHRcdHtmaWVsZHMubWFwKChmaWVsZCwgZmllbGRJbmRleCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gPEZpZWxkIGtleT17ZmllbGRJbmRleH0gey4uLnsgLi4uZmllbGQsIHNob3VsZEZvY3VzOiBmaWVsZEluZGV4ID09PSAwIH19IC8+O1xuXHRcdFx0fSl9XG5cdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0dGl0bGU6ICdTYXZlJyxcblx0XHRcdFx0XHRjb250ZW50VHlwZTogZmllbGRzLmxlbmd0aCA9PT0gMSA/ICdpY29uJyA6ICd0ZXh0Jyxcblx0XHRcdFx0XHRleHRlbnNpb25DbGFzc2VzOiBmaWVsZHMubGVuZ3RoID09PSAxID8gJ2Zvcm0tY29udHJvbC1idG4nIDogJ3ctNTAganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC0zJyxcblx0XHRcdFx0XHR0aGVtZTogZmllbGRzLmxlbmd0aCA9PT0gMSA/ICdkZWZhdWx0JyA6ICdzZWNvbmRhcnknLFxuXHRcdFx0XHRcdGlzTG9hZGluZzogZWRpdE11dGF0aW9uLmlzTG9hZGluZyxcblx0XHRcdFx0XHR0eXBlOiAnc3VibWl0Jyxcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cdFx0PC9mb3JtPlxuXHQpO1xufVxuXG5jb25zdCBGaWVsZCA9ICh7IG5hbWUsIGRlZmF1bHRWYWx1ZSwgc2hvdWxkRm9jdXMgPSBmYWxzZSB9KSA9PiB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoZGVmYXVsdFZhbHVlKTtcblxuXHQvKiBSZWZzICovXG5cdGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XG5cblx0LyogRWZmZWN0cyAqL1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChpbnB1dFJlZj8uY3VycmVudCAmJiBzaG91bGRGb2N1cykgaW5wdXRSZWY/LmN1cnJlbnQ/LnNlbGVjdCgpO1xuXHR9LCBbXSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj17bmFtZX0+XG5cdFx0XHRcdHtuYW1lfVxuXHRcdFx0PC9sYWJlbD5cblx0XHRcdDxUZXh0YXJlYUF1dG9zaXplXG5cdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtLXRleHRcIlxuXHRcdFx0XHRpZD17bmFtZX1cblx0XHRcdFx0bmFtZT17bmFtZX1cblx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBzZXRWYWx1ZSh2YWx1ZSl9XG5cdFx0XHRcdHJlZj17aW5wdXRSZWZ9XG5cdFx0XHRcdHBsYWNlaG9sZGVyPXtjYXBpdGFsaXplRmlyc3RMZXR0ZXIobmFtZSl9XG5cdFx0XHRcdG9uRm9jdXM9eygpID0+IGlucHV0UmVmLmN1cnJlbnQuc2VsZWN0KCl9XG5cdFx0XHQvPlxuXHRcdDwvPlxuXHQpO1xufTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4gfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogUm91dGVzICovXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uaGVhZGVyIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyXCIgey4uLkZBREVfSU59PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgcHgtNSBwdC01IHB4LWxnLTYgcHQtbGctNiBweC14bC0xMiBwdC14bC0xMlwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4taGVhZGVyX19sb2dvIGxvZ29cIj5cblx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9XCJsb2dvX19saW5rIHRleHQtcmVzZXRcIiB0bz17Uk9VVEVTLmxvZ2lufSB0aXRsZT1cIlBhcmFsbGVsIERhc2hib2FyZFwiPlxuXHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cImxvZ29fX3RpdGxlIHRleHQtdXBwZXJjYXNlIG1iLTBcIj5QYXJhbGxlbDwvaDI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2dvX19zdWJ0aXRsZSB0ZXh0LXVwcGVyY2FzZSBmb250LXdlaWdodC1saWdodCBtdC1uMVwiPkRhc2hib2FyZDwvcD5cblx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9tb3Rpb24uaGVhZGVyPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4gfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9tYWluQ29udGV4dCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSAnLi4vLi4vYXBpL3NlY3VyaXR5JztcblxuLyogUm91dGVzICovXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJOYXZpZ2F0aW9uKCkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXHRjb25zdCB7IHNldEN1cnJlbnRVc2VyIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBsb2dvdXRNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGxvZ291dCwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0aGlzdG9yeS5wdXNoKFJPVVRFUy5sb2dpbik7XG5cdFx0XHRzZXRDdXJyZW50VXNlcihudWxsKTtcblx0XHRcdHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJJZCcpO1xuXG5cdFx0XHR0b2FzdCg8QWxlcnQgbWVzc2FnZT17J1N1Y2Nlc3NmdWxseSBsb2dnZWQgb3V0ISd9IGFwcGVhcmFuY2U9XCJzdWNjZXNzXCIgLz4pO1xuXHRcdH0sXG5cdFx0b25FcnJvcjogKCkgPT4gdG9hc3QoPEFsZXJ0IG1lc3NhZ2U9eydTb21ldGhpbmcgd2VudCB3cm9uZyEnfSBhcHBlYXJhbmNlPVwiZGFuZ2VyXCIgLz4pLFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmhlYWRlciBjbGFzc05hbWU9XCJtYWluLWhlYWRlciBtYWluLWhlYWRlci0tcHJvamVjdHNcIiB7Li4uRkFERV9JTn0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4taGVhZGVyX193cmFwcGVyIGQtZmxleCBhbGlnbi1pdGVtcy1lbmRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4taGVhZGVyX19sb2dvIGxvZ29cIj5cblx0XHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT1cImxvZ29fX2xpbmsgdGV4dC1yZXNldFwiIHRvPXtST1VURVMucHJvamVjdHN9IHRpdGxlPVwiUGFyYWxsZWwgRGFzaGJvYXJkXCI+XG5cdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJsb2dvX190aXRsZSB0ZXh0LXVwcGVyY2FzZSB0ZXh0LXdoaXRlIG1iLTBcIj5QYXJhbGxlbDwvaDI+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvZ29fX3N1YnRpdGxlIHRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGUgZm9udC13ZWlnaHQtbGlnaHQgbXQtbjFcIj5cblx0XHRcdFx0XHRcdFx0XHREYXNoYm9hcmRcblx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJfX25hdiBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi0tcHJpbWFyeVwiPlxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmPVwie3sgcGF0aCgnYXBwX2xvZ291dCcpIH19XCJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPVwiTG9nb3V0XCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5hdi1saW5rIGJ0biBidG4tbGluayB0ZXh0LXJlc2V0XCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGxvZ291dE11dGF0aW9uLm11dGF0ZSgpfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5hdi10ZXh0XCI+TG9nb3V0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21vdGlvbi5oZWFkZXI+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHByb3BzKSB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0LyogQ29uc3RhbnRzKi9cblx0Y29uc3QgdHJhbnNpdGlvbiA9IHtcblx0XHRkdXJhdGlvbjogMC4yLFxuXHRcdGVhc2U6IFswLjY1LCAwLCAwLjM1LCAxXSxcblx0fTtcblxuXHRjb25zdCB2YXJpYW50cyA9IHtcblx0XHRoaWRkZW46IHtcblx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHR0cmFuc2l0aW9uLFxuXHRcdH0sXG5cdFx0dmlzaWJsZToge1xuXHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdHRyYW5zaXRpb24sXG5cdFx0fSxcblx0fTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3Qgb25Mb2FkID0gKCkgPT4gc2V0TG9hZGVkKHRydWUpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uaW1nXG5cdFx0XHRrZXk9e3Byb3BzLnNyY31cblx0XHRcdGluaXRpYWw9XCJoaWRkZW5cIlxuXHRcdFx0YW5pbWF0ZT17bG9hZGVkID8gJ3Zpc2libGUnIDogJ2hpZGRlbid9XG5cdFx0XHR7Li4ueyAuLi5wcm9wcywgb25Mb2FkLCB2YXJpYW50cyB9fVxuXHRcdC8+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEFjdGlvbk1lbnUgfSBmcm9tICcuL2FjdGlvbi1tZW51L0FjdGlvbk1lbnUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBbGVydCB9IGZyb20gJy4vYWxlcnQvQWxlcnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYWNrZ3JvdW5kIH0gZnJvbSAnLi9iYWNrZ3JvdW5kL0JhY2tncm91bmQnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsIH0gZnJvbSAnLi9tb2RhbC9Nb2RhbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsSGVhZGVyIH0gZnJvbSAnLi9tb2RhbC9Nb2RhbEhlYWRlcic7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uIH0gZnJvbSAnLi9idXR0b24vQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcHpvbmUgfSBmcm9tICcuL2Ryb3B6b25lL0Ryb3B6b25lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcHpvbmVTaW5nbGUgfSBmcm9tICcuL2Ryb3B6b25lL0Ryb3B6b25lU2luZ2xlJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFZGl0YWJsZSB9IGZyb20gJy4vZWRpdGFibGUvRWRpdGFibGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFZGl0YWJsZUJvZHkgfSBmcm9tICcuL2VkaXRhYmxlL0VkaXRhYmxlQm9keSc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuL2xvYWRpbmctd3JhcHBlci9Mb2FkaW5nV3JhcHBlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNsaWRlSW4gfSBmcm9tICcuL3NsaWRlLWluL1NsaWRlSW4nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYWdlTG9hZGVyIH0gZnJvbSAnLi9wYWdlLWxvYWRlci9QYWdlTG9hZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFnZVdyYXBwZXIgfSBmcm9tICcuL3BhZ2Utd3JhcHBlci9QYWdlV3JhcHBlcic7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlckFkZCB9IGZyb20gJy4vdXNlci1hZGQvVXNlckFkZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJBZGRTZWFyY2ggfSBmcm9tICcuL3VzZXItYWRkL1VzZXJBZGRTZWFyY2gnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VyQWRkU2VhcmNoUmVzdWx0cyB9IGZyb20gJy4vdXNlci1hZGQvVXNlckFkZFNlYXJjaFJlc3VsdHMnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlYWRlciB9IGZyb20gJy4vaGVhZGVyL0hlYWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlYWRlck5hdmlnYXRpb24gfSBmcm9tICcuL2hlYWRlci9IZWFkZXJOYXZpZ2F0aW9uJztcblxuZXhwb3J0ICogZnJvbSAnLi91c2Vycy9Vc2VyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlciB9IGZyb20gJy4vdXNlcnMvVXNlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJzIH0gZnJvbSAnLi91c2Vycy9Vc2Vycyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJTZWxlY3QgfSBmcm9tICcuL3VzZXJzL1VzZXJTZWxlY3QnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlY3VyaXR5TW9kYWwgfSBmcm9tICcuL3NlY3VyaXR5L1NlY3VyaXR5TW9kYWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dpbkZvcm0gfSBmcm9tICcuL3NlY3VyaXR5L0xvZ2luRm9ybSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpZ251cEZvcm0gfSBmcm9tICcuL3NlY3VyaXR5L1NpZ251cEZvcm0nO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEltYWdlIH0gZnJvbSAnLi9pbWFnZS9pbWFnZSc7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU0NBTEVfRkFERSB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nV3JhcHBlcih7IGxvYWRpbmcsIGNoaWxkcmVuLCBsb2FkZXJTaXplID0gNDAsIGNsYXNzZXMgPSB7fSB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IGxvYWRlckNsYXNzZXMgPSAncG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4JywgZGVmYXVsdENsYXNzZXMgPSAnJyB9ID0gY2xhc3NlcztcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfT5cblx0XHRcdHtsb2FkaW5nID8gKFxuXHRcdFx0XHQ8bW90aW9uLmRpdiBrZXk9XCJsb2FkZXJcIiBjbGFzc05hbWU9e2xvYWRlckNsYXNzZXN9IHsuLi5TQ0FMRV9GQURFfT5cblx0XHRcdFx0XHQ8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cImluaGVyaXRcIiBzaXplPXtsb2FkZXJTaXplfSAvPlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8bW90aW9uLmRpdiBrZXk9XCJkZWZhdWx0XCIgY2xhc3NOYW1lPXtkZWZhdWx0Q2xhc3Nlc30gey4uLlNDQUxFX0ZBREV9PlxuXHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0KX1cblx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IE1vZGFsSGVhZGVyIGZyb20gJy4vTW9kYWxIZWFkZXInO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOLCBGQURFX0lOX1VQIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VDbG9zZU9uRXNjIH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbCh7XG5cdHRpdGxlLFxuXHRzdWJ0aXRsZSxcblx0bW9kYWxPcGVuLFxuXHR0b2dnbGVNb2RhbCxcblx0Y2hpbGRyZW4sXG5cdHJlbmRlck9uQm9keSA9IHRydWUsXG5cdGNlbnRlciA9IHRydWUsXG5cdGV4dGVuc2lvbkNsYXNzZXMsXG5cdGNvbXBvbmVudHMgPSB7fSxcblx0Y3VzdG9tQW5pbWF0aW9uLFxufSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyBIZWFkZXJDb21wb25lbnQgPSBNb2RhbEhlYWRlciB9ID0gY29tcG9uZW50cztcblx0Y29uc3QgYW5pbWF0aW9uID0gY3VzdG9tQW5pbWF0aW9uID8/IEZBREVfSU5fVVA7XG5cblx0LyogSG9va3MgKi9cblx0dXNlQ2xvc2VPbkVzYyhtb2RhbE9wZW4sIHRvZ2dsZU1vZGFsKTtcblxuXHRjb25zdCByZW5kZXIgPSAoKSA9PiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdHttb2RhbE9wZW4gJiYgKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGN1c3RvbS1tb2RhbCAke2NlbnRlciAmJiAnY3VzdG9tLW1vZGFsLS1jZW50ZXInfSAke2V4dGVuc2lvbkNsYXNzZXN9YH0+XG5cdFx0XHRcdFx0e3JlbmRlck9uQm9keSAmJiA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWwtb3ZlcmxheVwiIHsuLi5GQURFX0lOfSBvbkNsaWNrPXt0b2dnbGVNb2RhbH0gLz59XG5cdFx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRcdGtleT1cImN1c3RvbS1tb2RhbC1jb250ZW50XCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fY29udGVudCBib3JkZXIgcC01XCJcblx0XHRcdFx0XHRcdHsuLi5hbmltYXRpb24oKX0+XG5cdFx0XHRcdFx0XHQ8SGVhZGVyQ29tcG9uZW50IHsuLi57IHRpdGxlLCBzdWJ0aXRsZSwgdG9nZ2xlTW9kYWwgfX0gLz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19ib2R5IGQtZmxleCBtdC0yXCI+e2NoaWxkcmVufTwvZGl2PlxuXHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpfVxuXHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHQpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRpZiAocmVuZGVyT25Cb2R5KSB7XG5cdFx0cmV0dXJuIGNyZWF0ZVBvcnRhbChyZW5kZXIoKSwgZG9jdW1lbnQuYm9keSk7XG5cdH1cblxuXHRyZXR1cm4gcmVuZGVyKCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gJ2ljb25zL2Nsb3NlLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsSGVhZGVyKHsgdGl0bGUsIHN1YnRpdGxlLCB0b2dnbGVNb2RhbCB9KSB7XG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19oZWFkZXIgZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDBcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0xMDBcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fdGl0bGVcIj57dGl0bGV9PC9wPlxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19jbG9zZSBidG4gYnRuLWxpbmsgbWwtYXV0b1wiXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfT5cblx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEyXCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7c3VidGl0bGUgJiYgPHAgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19zdWJ0aXRsZVwiPntzdWJ0aXRsZX08L3A+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlTG9hZGVyKHsgaXNMb2FkaW5nLCBjaGlsZHJlbiB9KSB7XG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHR7aXNMb2FkaW5nID8gKFxuXHRcdFx0XHQ8bW90aW9uLmRpdiB7Li4uRkFERV9JTn0+XG5cdFx0XHRcdFx0PExpbmVhclByb2dyZXNzIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PGRpdiBrZXk9XCJjaGlsZHJlblwiPntjaGlsZHJlbn08L2Rpdj5cblx0XHRcdCl9XG5cdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZVdyYXBwZXIoeyBjaGlsZHJlbiB9KSB7XG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxtYWluIGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwicGFuZSBweS01IHB5LWxnLTEwXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+e2NoaWxkcmVufTwvZGl2PlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdDwvbWFpbj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiB9IGZyb20gJy4uJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBsb2dpbiwgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VQYWdlVGl0bGUgfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbi8qIFJvdXRlcyAqL1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5Gb3JtKHsgY3VycmVudFVzZXIsIHRvZ2dsZU1vZGFsLCBzaG93U2lnbnVwID0gdHJ1ZSB9KSB7XG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgZm9ybVJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIEhvb2tzICovXG5cdHVzZVBhZ2VUaXRsZSgnTG9naW4nKTtcblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXHRjb25zdCB7XG5cdFx0cmVnaXN0ZXIsXG5cdFx0aGFuZGxlU3VibWl0LFxuXHRcdGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcblx0fSA9IHVzZUZvcm0oeyByZVZhbGlkYXRlTW9kZTogJ29uQ2hhbmdlJywgbW9kZTogJ29uQmx1cicgfSk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGxvZ2luTXV0YXRpb24gPSB1c2VNdXRhdGlvbihsb2dpbiwge1xuXHRcdG9uU3VjY2VzczogKHVzZXIpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuQ1VSUkVOVF9VU0VSKTtcblxuXHRcdFx0aWYgKGN1cnJlbnRVc2VyKSB0b2dnbGVNb2RhbCgpO1xuXG5cdFx0XHR0b2FzdCg8QWxlcnQgbWVzc2FnZT1cIlN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4hXCIgYXBwZWFyYW5jZT1cInN1Y2Nlc3NcIiAvPik7XG5cdFx0fSxcblx0XHRvbkVycm9yOiAoZXJyb3IpID0+IHtcblx0XHRcdHRvYXN0KFxuXHRcdFx0XHQ8QWxlcnRcblx0XHRcdFx0XHRtZXNzYWdlPXtcblx0XHRcdFx0XHRcdGVycm9yPy5yZXNwb25zZT8uZGF0YT8uZXJyb3IgPyAnRW1haWwvcGFzc3dvcmQgY29tYmluYXRpb24gbm90IGZvdW5kIScgOiAnU29tZXRoaW5nIHdlbnQgd3JvbmchJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhcHBlYXJhbmNlPVwiZGFuZ2VyXCJcblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cblx0XHRcdGVycm9ycy5lbWFpbCA9IHsgbWVzc2FnZTogJ0VtYWlsL3Bhc3N3b3JkIGNvbWJpbmF0aW9uIG5vdCBmb3VuZCcgfTtcblx0XHRcdGVycm9ycy5wYXNzd29yZCA9IHsgbWVzc2FnZTogJ0VtYWlsL3Bhc3N3b3JkIGNvbWJpbmF0aW9uIG5vdCBmb3VuZCcgfTtcblx0XHR9LFxuXHR9KTtcblxuXHRjb25zdCBvblN1Ym1pdCA9ICgpID0+IGxvZ2luTXV0YXRpb24ubXV0YXRlKHsgZm9ybVJlZiB9KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxmb3JtIHJlZj17Zm9ybVJlZn0gY2xhc3NOYW1lPVwicGFuZWxfX2Zvcm0gZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfSBub1ZhbGlkYXRlPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0yXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwiaW5wdXRFbWFpbFwiPlxuXHRcdFx0XHRcdFx0RW1haWxcblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke2Vycm9ycy5lbWFpbCAmJiAnaXMtaW52YWxpZCd9YH1cblx0XHRcdFx0XHRcdGlkPVwiaW5wdXRFbWFpbFwiXG5cdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbWFpbFwiXG5cdFx0XHRcdFx0XHRhdXRvRm9jdXNcblx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcignZW1haWwnLCB7XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7ZXJyb3JzLmVtYWlsICYmIChcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuXHRcdFx0XHRcdFx0XHR7ZXJyb3JzLmVtYWlsPy5tZXNzYWdlID8gZXJyb3JzLmVtYWlsLm1lc3NhZ2UgOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwnfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwiaW5wdXRQYXNzd29yZFwiPlxuXHRcdFx0XHRcdFx0UGFzc3dvcmRcblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke2Vycm9ycy5wYXNzd29yZCAmJiAnaXMtaW52YWxpZCd9YH1cblx0XHRcdFx0XHRcdGlkPVwiaW5wdXRQYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRuYW1lPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG5cdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ3Bhc3N3b3JkJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHtlcnJvcnMucGFzc3dvcmQgJiYgKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG5cdFx0XHRcdFx0XHRcdHtlcnJvcnMucGFzc3dvcmQ/Lm1lc3NhZ2UgPyBlcnJvcnMucGFzc3dvcmQubWVzc2FnZSA6ICdQbGVhc2UgZW50ZXIgYSBwYXNzd29yZCd9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0yXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZFwiPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnTG9nIGluJyxcblx0XHRcdFx0XHRcdFx0dGhlbWU6ICdzZWNvbmRhcnknLFxuXHRcdFx0XHRcdFx0XHRzaXplOiAnbWQnLFxuXHRcdFx0XHRcdFx0XHRleHRlbnNpb25DbGFzc2VzOiAnYnRuLWJsb2NrIGp1c3RpZnktY29udGVudC1jZW50ZXInLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VibWl0Jyxcblx0XHRcdFx0XHRcdFx0aXNMb2FkaW5nOiBsb2dpbk11dGF0aW9uLmlzTG9hZGluZyxcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtzaG93U2lnbnVwICYmIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWRcIj5cblx0XHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS13aGl0ZSBidG4tYmxvY2tcIiB0bz17Uk9VVEVTLnNpZ251cH0gdGl0bGU9XCJzaWduIHVwXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImJ0bl9fdGV4dFwiPlNpZ24gdXA8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Zvcm0+XG5cdCk7XG59XG4iLCIvKiBDb21wb25lbnRzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTW9kYWwsIExvZ2luRm9ybSwgU2lnbnVwRm9ybSB9IGZyb20gJy4uJztcbmltcG9ydCB7IFN0YXRpY0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdXJpdHlNb2RhbCh7IHNlY3VyaXR5TW9kYWxPcGVuLCBzZXRTZWN1cml0eU1vZGFsT3BlbiB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgY3VycmVudFVzZXIsIHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB0aXRsZSA9IHVzZXJSb2xlID09PSAnYmFzaWMnID8gJ1NpZ251cCcgOiAnTG9naW4nO1xuXHRjb25zdCBzdWJ0aXRsZSA9IGAke3RpdGxlfSBpZiB5b3Ugd2FudCB0byBjb21tZW50YDtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlU2VjdXJpdHlNb2RhbCA9ICgpID0+IHNldFNlY3VyaXR5TW9kYWxPcGVuKCFzZWN1cml0eU1vZGFsT3Blbik7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsIHsuLi57IHRpdGxlLCBzdWJ0aXRsZSwgbW9kYWxPcGVuOiBzZWN1cml0eU1vZGFsT3BlbiwgdG9nZ2xlTW9kYWw6IHRvZ2dsZVNlY3VyaXR5TW9kYWwgfX0+XG5cdFx0XHR7dXNlclJvbGUgPT09ICdiYXNpYycgPyAoXG5cdFx0XHRcdDxTaWdudXBGb3JtXG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdGN1cnJlbnRVc2VyLFxuXHRcdFx0XHRcdFx0dG9nZ2xlTW9kYWw6IHRvZ2dsZVNlY3VyaXR5TW9kYWwsXG5cdFx0XHRcdFx0XHRzaG93TG9naW46IGZhbHNlLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8TG9naW5Gb3JtXG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdGN1cnJlbnRVc2VyLFxuXHRcdFx0XHRcdFx0dG9nZ2xlTW9kYWw6IHRvZ2dsZVNlY3VyaXR5TW9kYWwsXG5cdFx0XHRcdFx0XHRzaG93U2lnbnVwOiBmYWxzZSxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0KX1cblx0XHQ8L01vZGFsPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IHVzZUZvcm0sIHVzZVdhdGNoIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiB9IGZyb20gJy4uJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBRVUVSWV9LRVlTLCBzaWdudXAgfSBmcm9tICcuLi8uLi9hcGknO1xuXG4vKiBSb3V0ZXMgKi9cbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VQYWdlVGl0bGUgfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ251cEZvcm0oeyBjdXJyZW50VXNlciwgdG9nZ2xlTW9kYWwsIHNob3dMb2dpbiA9IHRydWUgfSkge1xuXHQvKiBSZWZzICovXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBIb29rcyAqL1xuXHR1c2VQYWdlVGl0bGUoJ1NpZ251cCcpO1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0Y29uc3Qge1xuXHRcdHJlZ2lzdGVyLFxuXHRcdGhhbmRsZVN1Ym1pdCxcblx0XHRmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG5cdFx0Y29udHJvbCxcblx0fSA9IHVzZUZvcm0oeyByZVZhbGlkYXRlTW9kZTogJ29uQ2hhbmdlJywgbW9kZTogJ29uQmx1cicgfSk7XG5cblx0Y29uc3QgcGxhaW5QYXNzd29yZCA9IHVzZVdhdGNoKHtcblx0XHRjb250cm9sLFxuXHRcdG5hbWU6ICdwbGFpblBhc3N3b3JkJyxcblx0XHRkZWZhdWx0VmFsdWU6ICcnLFxuXHR9KTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3Qgc2lnbnVwTXV0YXRpb24gPSB1c2VNdXRhdGlvbihzaWdudXAsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuQ1VSUkVOVF9VU0VSKTtcblxuXHRcdFx0dG9hc3QoPEFsZXJ0IG1lc3NhZ2U9XCJTdWNjZXNzZnVsbHkgbG9nZ2VkIGluIVwiIGFwcGVhcmFuY2U9XCJzdWNjZXNzXCIgLz4pO1xuXG5cdFx0XHRpZiAoY3VycmVudFVzZXIpIHRvZ2dsZU1vZGFsKCk7XG5cdFx0fSxcblx0XHRvbkVycm9yOiAoZXJyb3IpID0+IHtcblx0XHRcdGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xuXHRcdFx0XHR0b2FzdCg8QWxlcnQgbWVzc2FnZT1cIlRoaXMgZW1haWwgaXMgYWxyZWFkeSBpbiB1c2UhXCIgYXBwZWFyYW5jZT1cImRhbmdlclwiIC8+KTtcblxuXHRcdFx0XHRmb3JtUmVmLmN1cnJlbnQucmVzZXQoKTtcblx0XHRcdH1cblx0XHR9LFxuXHR9KTtcblxuXHRjb25zdCBvblN1Ym1pdCA9ICgpID0+IHNpZ251cE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYsIHVzZXJJZDogY3VycmVudFVzZXI/LmlkIH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxmb3JtIHJlZj17Zm9ybVJlZn0gY2xhc3NOYW1lPVwicGFuZWxfX2Zvcm0gZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfSBub1ZhbGlkYXRlPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0yXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJyZWdpc3RyYXRpb25fZm9ybV91c2VybmFtZVwiPlxuXHRcdFx0XHRcdFx0WW91ciBuYW1lXG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGlkPVwicmVnaXN0cmF0aW9uX2Zvcm1fdXNlcm5hbWVcIlxuXHRcdFx0XHRcdFx0bmFtZT1cInVzZXJuYW1lXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke2Vycm9ycy51c2VybmFtZSAmJiAnaXMtaW52YWxpZCd9YH1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRnVsbCBuYW1lXCJcblx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcigndXNlcm5hbWUnLCB7XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhIG5hbWUnLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7ZXJyb3JzLnVzZXJuYW1lICYmIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPntlcnJvcnMudXNlcm5hbWUubWVzc2FnZX08L2Rpdj59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicmVnaXN0cmF0aW9uX2Zvcm1fb3JnYW5pc2F0aW9uXCI+XG5cdFx0XHRcdFx0XHRPcmdhbmlzYXRpb25cblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0aWQ9XCJyZWdpc3RyYXRpb25fZm9ybV9vcmdhbmlzYXRpb25cIlxuXHRcdFx0XHRcdFx0bmFtZT1cIm9yZ2FuaXNhdGlvblwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtlcnJvcnMub3JnYW5pc2F0aW9uICYmICdpcy1pbnZhbGlkJ31gfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJPcmdhbmlzYXRpb25cIlxuXHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKCdvcmdhbmlzYXRpb24nLCB7XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhbiBvcmdhbmlzYXRpb24nLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7ZXJyb3JzLm9yZ2FuaXNhdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj57ZXJyb3JzLm9yZ2FuaXNhdGlvbi5tZXNzYWdlfTwvZGl2Pn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicmVnaXN0cmF0aW9uX2Zvcm1fZW1haWxcIj5cblx0XHRcdFx0XHRcdEVtYWlsXG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGlkPVwicmVnaXN0cmF0aW9uX2Zvcm1fZW1haWxcIlxuXHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke2Vycm9ycy5lbWFpbCAmJiAnaXMtaW52YWxpZCd9YH1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuXHRcdFx0XHRcdFx0dmFsdWU9e2N1cnJlbnRVc2VyPy5lbWFpbH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PiB7fX1cblx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcignZW1haWwnLCB7XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhbiBlbWFpbCcsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHtlcnJvcnMuZW1haWwgJiYgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e2Vycm9ycy5lbWFpbC5tZXNzYWdlfTwvZGl2Pn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJyZWdpc3RyYXRpb25fZm9ybV9wbGFpblBhc3N3b3JkXCI+XG5cdFx0XHRcdFx0XHRQYXNzd29yZFxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0aWQ9XCJyZWdpc3RyYXRpb25fZm9ybV9wbGFpblBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJwbGFpblBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke2Vycm9ycy5wYXNzd29yZCAmJiAnaXMtaW52YWxpZCd9YH1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKCdwbGFpblBhc3N3b3JkJywge1xuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZDoge1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYSBwYXNzd29yZCcsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdG1pbkxlbmd0aDoge1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiA2LFxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYSBwYXNzd29yZCBvZiBhdGxlYXN0IDYgY2hhcmFjdGVycycsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHtlcnJvcnMucGxhaW5QYXNzd29yZCAmJiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj57ZXJyb3JzLnBsYWluUGFzc3dvcmQubWVzc2FnZX08L2Rpdj59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwibG9naW4tY29uZmlybS1wYXNzd29yZFwiPlxuXHRcdFx0XHRcdFx0Q29uZmlybSBwYXNzd29yZFxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7ZXJyb3JzLnBhc3N3b3JkQ29uZmlybSAmJiAnaXMtaW52YWxpZCd9YH1cblx0XHRcdFx0XHRcdGlkPVwibG9naW4tY29uZmlybS1wYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkNvbmZpcm0gcGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0bmFtZT1cInBhc3N3b3JkQ29uZmlybVwiXG5cdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ3Bhc3N3b3JkQ29uZmlybScsIHtcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUGxlYXNlIGNvbmZpcm0geW91ciBwYXNzd29yZCcsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHZhbGlkYXRlOiAodmFsdWUpID0+IHZhbHVlID09PSBwbGFpblBhc3N3b3JkIHx8ICdUaGUgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaCcsXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHtlcnJvcnMucGFzc3dvcmRDb25maXJtICYmIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPntlcnJvcnMucGFzc3dvcmRDb25maXJtLm1lc3NhZ2V9PC9kaXY+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0yXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZFwiPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnU2lnbiB1cCcsXG5cdFx0XHRcdFx0XHRcdHRoZW1lOiAnc2Vjb25kYXJ5Jyxcblx0XHRcdFx0XHRcdFx0c2l6ZTogJ21kJyxcblx0XHRcdFx0XHRcdFx0ZXh0ZW5zaW9uQ2xhc3NlczogJ2J0bi1ibG9jayBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJyxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Ym1pdCcsXG5cdFx0XHRcdFx0XHRcdGlzTG9hZGluZzogc2lnbnVwTXV0YXRpb24uaXNMb2FkaW5nLFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e3Nob3dMb2dpbiAmJiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kXCI+XG5cdFx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtd2hpdGUgYnRuLWJsb2NrXCIgdG89e1JPVVRFUy5sb2dpbn0gdGl0bGU9XCJzaWduIHVwXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImJ0bl9fdGV4dFwiPkxvZ2luPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9mb3JtPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4sIFRSQU5TRk9STV9VUCB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZUluKHsgdG9nZ2xlU2xpZGVJbiwgY2hpbGRyZW4sIGRvbUVsZW1lbnQsIHZhcmlhbnQgPSAnZGVmYXVsdCcgfSkge1xuXHRjb25zdCByZW5kZXIgPSAoKSA9PiAoXG5cdFx0PGRpdiBrZXk9XCJzbGlkZS1pblwiIGNsYXNzTmFtZT17YHNsaWRlLWluIHNsaWRlLWluLS0ke3ZhcmlhbnR9YH0+XG5cdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbl9fb3ZlcmxheVwiIG9uQ2xpY2s9e3RvZ2dsZVNsaWRlSW59IHsuLi5GQURFX0lOfSAvPlxuXHRcdFx0PG1vdGlvbi5hcnRpY2xlIGtleT1cInNsaWRlLWluX19jb250ZW50XCIgY2xhc3NOYW1lPVwic2xpZGUtaW5fX2NvbnRlbnRcIiB7Li4uVFJBTlNGT1JNX1VQfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgZC1mbGV4IGZsZXgtZ3Jvdy0xXCI+e2NoaWxkcmVufTwvZGl2PlxuXHRcdFx0PC9tb3Rpb24uYXJ0aWNsZT5cblx0XHQ8L2Rpdj5cblx0KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0aWYgKGRvbUVsZW1lbnQpIHtcblx0XHRyZXR1cm4gY3JlYXRlUG9ydGFsKHJlbmRlcigpLCBkb21FbGVtZW50KTtcblx0fVxuXG5cdHJldHVybiByZW5kZXIoKTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IE1vZGFsLCBVc2VyQWRkU2VhcmNoIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZFVzZXJJY29uIGZyb20gJ2ljb25zL2FkZF91c2VyLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBZGQoeyB1c2VycywgcHJvamVjdCB9KSB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZU1vZGFsID0gKCkgPT4gc2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmUgbWwtMlwiPlxuXHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgdXNlciB1c2VyLS1sZyB1c2VyLS1hZGRcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlTW9kYWx9PlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ1c2VyX19hdmF0YXJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXJfX2luaXRpYWxzXCI+XG5cdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cInVzZXJfX2ljb24gaWNvbiBpY29uLS0xMiBtdC0wXCIgc3JjPXthZGRVc2VySWNvbn0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0dGl0bGU9XCJTZWxlY3QgdXNlcnNcIlxuXHRcdFx0XHRzdWJ0aXRsZT1cIkNob29zZSBzb21lIHVzZXJzIHRvIGNvbGxhYm9yYXRlIHdpdGguXCJcblx0XHRcdFx0ey4uLnsgbW9kYWxPcGVuLCB0b2dnbGVNb2RhbCB9fT5cblx0XHRcdFx0PFVzZXJBZGRTZWFyY2ggey4uLnsgdXNlcnMsIHByb2plY3QsIHRvZ2dsZU1vZGFsIH19IC8+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5LCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlckFkZFNlYXJjaFJlc3VsdHMsIFVzZXJzLCBCdXR0b24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogU2VydmljZXMgKi9cbmltcG9ydCB7IGlzRW1haWwgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5pbXBvcnQgZmlsdGVyVXNlcnMgZnJvbSAnLi9zZXJ2aWNlcy9maWx0ZXJVc2Vycyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgYWRkVXNlciwgZmV0Y2hHb2JhbFVzZXJzLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckFkZFNlYXJjaCh7IHVzZXJzLCBwcm9qZWN0LCB0b2dnbGVNb2RhbCB9KSB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbZm9jdXNlZFVzZXIsIHNldEZvY3VzZWRVc2VyXSA9IHVzZVN0YXRlKDApO1xuXG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBkYXRhOiBnbG9iYWxVc2VycyA9IFtdLCBpc0xvYWRpbmc6IGdsb2JhbFVzZXJzTG9hZGluZyB9ID0gdXNlUXVlcnkoXG5cdFx0UVVFUllfS0VZUy5HTE9CQUxfVVNFUlMsXG5cdFx0ZmV0Y2hHb2JhbFVzZXJzXG5cdCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IGZpbHRlcmVkVXNlcnMgPSBmaWx0ZXJVc2VycyhnbG9iYWxVc2VycywgdXNlcnMsIHF1ZXJ5KTtcblxuXHQvKiBSZWZzICovXG5cdGNvbnN0IHF1ZXJ5UmVmID0gdXNlUmVmKCk7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBhZGRVc2VyTXV0YXRpb24gPSB1c2VNdXRhdGlvbihhZGRVc2VyLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0LmlkXSk7XG5cdFx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLkdMT0JBTF9VU0VSUyk7XG5cblx0XHRcdHF1ZXJ5UmVmLmN1cnJlbnQuc2VsZWN0KCk7XG5cdFx0XHRzZXRRdWVyeSgnJyk7XG5cdFx0fSxcblx0fSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHNldFF1ZXJ5KHZhbHVlKTtcblxuXHRjb25zdCBoYW5kbGVPbktleURvd24gPSAoZXZlbnQpID0+IHtcblx0XHRpZiAoWydFbnRlcicsICdUYWInXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRpZiAocXVlcnkgIT09ICcnICYmIGZvY3VzZWRVc2VyICE9PSBudWxsKSB7XG5cdFx0XHRcdGNvbnN0IHVzZXIgPSBmb2N1c2VkVXNlciBpbiBmaWx0ZXJlZFVzZXJzID8gZmlsdGVyZWRVc2Vyc1tmb2N1c2VkVXNlcl0gOiBmb2N1c2VkVXNlcjtcblxuXHRcdFx0XHRpZiAoaXNFbWFpbCh1c2VyLmVtYWlsKSkge1xuXHRcdFx0XHRcdGFkZFVzZXJNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQ6IHByb2plY3QuaWQsIGVtYWlsOiB1c2VyLmVtYWlsIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKHsgZW1haWwgfSkgPT4ge1xuXHRcdGlmIChpc0VtYWlsKGVtYWlsKSkge1xuXHRcdFx0YWRkVXNlck11dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZDogcHJvamVjdC5pZCwgZW1haWw6IGVtYWlsIH0pO1xuXHRcdH1cblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LWdyb3ctMVwiPlxuXHRcdFx0PFVzZXJzIHsuLi57IHVzZXJzLCBwcm9qZWN0IH19IHZhcmlhbnQ9XCJpbnRlcmFjdGl2ZVwiIHNpemU9XCJsZ1wiIC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XG5cdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInVzZXJRdWVyeVwiPlxuXHRcdFx0XHRcdFNlYXJjaCBuYW1lIG9yIGVtYWlsXG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtLXNlYXJjaFwiXG5cdFx0XHRcdFx0aWQ9XCJ1c2VyUXVlcnlcIlxuXHRcdFx0XHRcdG5hbWU9XCJ1c2VyUXVlcnlcIlxuXHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiU2VhcmNoIG5hbWUgb3IgZW1haWxcIlxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRhdXRvRm9jdXNcblx0XHRcdFx0XHR2YWx1ZT17cXVlcnl9XG5cdFx0XHRcdFx0b25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cblx0XHRcdFx0XHRvbktleURvd249e2hhbmRsZU9uS2V5RG93bn1cblx0XHRcdFx0XHRhdXRvQ29tcGxldGU9XCJvZmZcIlxuXHRcdFx0XHRcdHJlZj17cXVlcnlSZWZ9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxCdXR0b24gb25DbGljaz17dG9nZ2xlTW9kYWx9IGV4dGVuc2lvbkNsYXNzZXM9XCJmb3JtLWNvbnRyb2wtYnRuXCIgY29udGVudFR5cGU9XCJpY29uXCIgdGhlbWU9XCJkZWZhdWx0XCIgLz5cblx0XHRcdFx0PFVzZXJBZGRTZWFyY2hSZXN1bHRzXG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdGZpbHRlcmVkVXNlcnMsXG5cdFx0XHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0XHRcdGhhbmRsZUNsaWNrLFxuXHRcdFx0XHRcdFx0Zm9jdXNlZFVzZXIsXG5cdFx0XHRcdFx0XHRzZXRGb2N1c2VkVXNlcixcblx0XHRcdFx0XHRcdHVzZXJNdXRhdGlvbkxvYWRpbmc6IGFkZFVzZXJNdXRhdGlvbi5pc0xvYWRpbmcsXG5cdFx0XHRcdFx0XHRnbG9iYWxVc2Vyc0xvYWRpbmcsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VyU2VsZWN0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4gfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckFkZFNlYXJjaFJlc3VsdHMoe1xuXHRmaWx0ZXJlZFVzZXJzLFxuXHRxdWVyeSxcblx0aGFuZGxlQ2xpY2ssXG5cdGZvY3VzZWRVc2VyLFxuXHRzZXRGb2N1c2VkVXNlcixcblx0dXNlck11dGF0aW9uTG9hZGluZyxcblx0Z2xvYmFsVXNlcnNMb2FkaW5nLFxufSkge1xuXHQvKiBSZW5kZXIgZmlsdGVyZWQgcmVzdWx0cyAqL1xuXHRjb25zdCByZXN1bHRzID0gKCkgPT4ge1xuXHRcdGNvbnN0IG5ld1VzZXIgPSB7IGVtYWlsOiBxdWVyeSwgb3JnYW5pc2F0aW9uOiBxdWVyeSwgZGlzcGxheTogJ05ldyB1c2VyJywgdXNlckNvbG9yOiAnMjkxLCA4MSUsIDUzJScgfTtcblxuXHRcdGlmIChmaWx0ZXJlZFVzZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiBmaWx0ZXJlZFVzZXJzLm1hcCgodXNlciwgdXNlckluZGV4KSA9PiAoXG5cdFx0XHRcdDxtb3Rpb24ubGkgey4uLkZBREVfSU59IGtleT17dXNlci5pZH0gY2xhc3NOYW1lPVwibGlzdF9faXRlbSB2ci0zXCI+XG5cdFx0XHRcdFx0PFVzZXJTZWxlY3Rcblx0XHRcdFx0XHRcdHsuLi57IHVzZXIsIHVzZXJJbmRleCwgaGFuZGxlQ2xpY2ssIHNldEZvY3VzZWRVc2VyIH19XG5cdFx0XHRcdFx0XHRpc0ZvY3VzZWQ9e3VzZXJJbmRleCA9PT0gZm9jdXNlZFVzZXIgJiYgcXVlcnl9XG5cdFx0XHRcdFx0XHRpc0xvYWRpbmc9e3VzZXJNdXRhdGlvbkxvYWRpbmd9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9tb3Rpb24ubGk+XG5cdFx0XHQpKTtcblx0XHR9XG5cblx0XHRpZiAoIWdsb2JhbFVzZXJzTG9hZGluZykge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PG1vdGlvbi5saSB7Li4uRkFERV9JTn0ga2V5PVwiTmV3IHVzZXJcIiBjbGFzc05hbWU9XCJsaXN0X19pdGVtIGlzLWZvY3VzZWQgdnItM1wiPlxuXHRcdFx0XHRcdDxVc2VyU2VsZWN0XG5cdFx0XHRcdFx0XHR7Li4ueyB1c2VyOiBuZXdVc2VyLCB1c2VySW5kZXg6IG5ld1VzZXIsIGhhbmRsZUNsaWNrLCBzZXRGb2N1c2VkVXNlciB9fVxuXHRcdFx0XHRcdFx0aXNGb2N1c2VkPXtxdWVyeS5sZW5ndGh9XG5cdFx0XHRcdFx0XHRpc0xvYWRpbmc9e3VzZXJNdXRhdGlvbkxvYWRpbmd9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9tb3Rpb24ubGk+XG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0e3F1ZXJ5ICE9PSAnJyAmJiAoXG5cdFx0XHRcdDxtb3Rpb24udWwgey4uLkZBREVfSU59IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fbGlzdCBsaXN0XCI+XG5cdFx0XHRcdFx0e3Jlc3VsdHMoKX1cblx0XHRcdFx0PC9tb3Rpb24udWw+XG5cdFx0XHQpfVxuXHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHQpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlsdGVyVXNlcnMoZ2xvYmFsVXNlcnMsIHVzZXJzLCBxdWVyeSkge1xuXHRjb25zdCBsb3dlclF1ZXJ5ID0gcXVlcnkudG9Mb3dlckNhc2UoKTtcblx0Y29uc3QgZXhpc3RpbmdVc2Vyc0J5RW1haWwgPSB1c2Vycy5tYXAoKHsgZW1haWwgfSkgPT4gZW1haWwpO1xuXG5cdGxldCBmaWx0ZXJlZFVzZXJzID0gZ2xvYmFsVXNlcnNcblx0XHQuZmlsdGVyKCh7IGVtYWlsIH0pID0+IHtcblx0XHRcdC8qIE9ubHkgcmV0dXJuIHVzZXJzIHRoYXQgYXJlIG5vdCBwYXJ0IG9mIHRoZSBwcm9qZWN0ICovXG5cdFx0XHRyZXR1cm4gIWV4aXN0aW5nVXNlcnNCeUVtYWlsLmluY2x1ZGVzKGVtYWlsKTtcblx0XHR9KVxuXHRcdC5maWx0ZXIoKHsgZW1haWwsIGRpc3BsYXkgfSkgPT4ge1xuXHRcdFx0LyogT25seSByZXR1cm4gdXNlcnMgdGhhdCBtYXRjaCB0aGUgcXVlcnkgb24gZW1haWwgfHwgZGlzcGxheSAqL1xuXHRcdFx0cmV0dXJuIGVtYWlsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJRdWVyeSkgfHwgZGlzcGxheS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyUXVlcnkpO1xuXHRcdH0pO1xuXG5cdHJldHVybiBmaWx0ZXJlZFVzZXJzO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IExvYWRpbmdXcmFwcGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IHN0YXJJY29uIGZyb20gJ2ljb25zL3N0YXIuc3ZnJztcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJ2ljb25zL2RlbGV0ZS5zdmcnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGRlbGV0ZVVzZXIsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyKHsgdXNlciwgcHJvamVjdCwgdmFyaWFudCA9ICdkZWZhdWx0Jywgc2l6ZSA9ICdtZCcgfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJZCwgYXV0aG9yIH0gPSBwcm9qZWN0ID8/IHt9O1xuXHRjb25zdCB7IGlkOiB1c2VySWQsIGVtYWlsIH0gPSB1c2VyID8/IHt9O1xuXHRjb25zdCBpc0F1dGhvciA9IGVtYWlsID09PSBhdXRob3I7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGRlbGV0ZVVzZXJNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGRlbGV0ZVVzZXIsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0pLFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17YHVzZXIgdXNlci0tJHtzaXplfSB1c2VyLS0ke3ZhcmlhbnR9ICR7aXNBdXRob3IgJiYgJ3VzZXItLWF1dGhvcid9YH0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PFVzZXJBdmF0YXIgaXNMb2FkaW5nPXtkZWxldGVVc2VyTXV0YXRpb24uaXNMb2FkaW5nfSB7Li4udXNlcn0+XG5cdFx0XHRcdFx0e3ZhcmlhbnQgPT09ICdpbnRlcmFjdGl2ZScgJiYgIWlzQXV0aG9yICYmIChcblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidXNlcl9fYWN0aW9uIGJ0biBidG4tbGluayBwLTBcIlxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGVsZXRlVXNlck11dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgdXNlcklkIH0pfT5cblx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19hY3Rpb24taWNvbiBpY29uIGljb24tLTE0XCIgc3JjPXtkZWxldGVJY29ufSAvPlxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9Vc2VyQXZhdGFyPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7aXNBdXRob3IgJiYgKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXJfX3N0YXR1cyB1c2VyX19zdGF0dXMtLWxlYWRlclwiPlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9fc3RhdHVzLWljb24gaWNvbiB0ZXh0LXRlcnRpYXJ5IG10LTBcIiBzcmM9e3N0YXJJY29ufSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBjb25zdCBVc2VyQXZhdGFyID0gKHsgZGlzcGxheSwgdXNlckNvbG9yLCBpc0xvYWRpbmcsIGNoaWxkcmVuIH0pID0+IHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHVzZXJJbml0aWFscyA9IGRpc3BsYXkuc3BsaXQoJyAnKS5tYXAoKHdvcmQpID0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19hdmF0YXJcIiBzdHlsZT17eyAnLS10aGVtZSc6IHVzZXJDb2xvciB9fT5cblx0XHRcdDxMb2FkaW5nV3JhcHBlciBsb2FkaW5nPXtpc0xvYWRpbmd9IGxvYWRlclNpemU9ezE2fT5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidXNlcl9faW5pdGlhbHNcIj57dXNlckluaXRpYWxzfTwvc3Bhbj5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9Mb2FkaW5nV3JhcHBlcj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBVc2VySW5mbyA9ICh7IHRpdGxlLCBzdWJ0aXRsZSwgbGF5b3V0ID0gJ3ZlcnRpY2FsJywgc2l6ZSA9ICdsZycgfSkgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT17YHVzZXJfX2luZm8gdXNlcl9faW5mby0tJHtsYXlvdXR9IHVzZXJfX2luZm8tLSR7c2l6ZX0gbWwtMmB9PlxuXHRcdDxwIGNsYXNzTmFtZT1cInVzZXJfX2luZm8tdGl0bGUgbWItMFwiPnt0aXRsZX08L3A+XG5cdFx0e3N1YnRpdGxlICYmIDxwIGNsYXNzTmFtZT1cInVzZXJfX2luZm8tc3VidGl0bGUgbWItMFwiPntzdWJ0aXRsZX08L3A+fVxuXHQ8L2Rpdj5cbik7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgeyBVc2VyQXZhdGFyLCBVc2VySW5mbyB9IGZyb20gJy4vVXNlcic7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZFVzZXJJY29uIGZyb20gJ2ljb25zL2FkZF91c2VyLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJTZWxlY3QoeyB1c2VyLCB1c2VySW5kZXgsIGhhbmRsZUNsaWNrLCBpc0ZvY3VzZWQsIHNldEZvY3VzZWRVc2VyLCBpc0xvYWRpbmcgfSkge1xuXHQvKiBFZmZlY3RzICovXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aXNGb2N1c2VkICYmIHNldEZvY3VzZWRVc2VyKHVzZXJJbmRleCk7XG5cdH0sIFtpc0ZvY3VzZWRdKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHJldHVybiAoKSA9PiBzZXRGb2N1c2VkVXNlcigwKTtcblx0fSwgW10pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBoYW5kbGVTdGF0dXMgPSAoYWN0aW9uKSA9PiB7XG5cdFx0c2V0Rm9jdXNlZFVzZXIoYWN0aW9uID09PSAnZW50ZXInID8gdXNlckluZGV4IDogMCk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0Y2xhc3NOYW1lPXtgdXNlciB1c2VyLS1zZWxlY3QgJHtpc0ZvY3VzZWQgJiYgJ2lzLWZvY3VzZWQnfSB1c2VyLS14bGB9XG5cdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayh1c2VyKX1cblx0XHRcdG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlU3RhdHVzKCdlbnRlcicpfVxuXHRcdFx0b25Nb3VzZUxlYXZlPXsoKSA9PiBoYW5kbGVTdGF0dXMoJ2xlYXZlJyl9XG5cdFx0XHR0eXBlPVwiYnV0dG9uXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PFVzZXJBdmF0YXIgaXNMb2FkaW5nPXtpc0xvYWRpbmcgJiYgaXNGb2N1c2VkfSB7Li4udXNlcn0gLz5cblx0XHRcdFx0PFVzZXJJbmZvXG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdHRpdGxlOiB1c2VyLmRpc3BsYXksXG5cdFx0XHRcdFx0XHRzdWJ0aXRsZTogdXNlci5vcmdhbmlzYXRpb24gPyB1c2VyLm9yZ2FuaXNhdGlvbiA6ICdObyBvcmdhbmlzYXRpb24nLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlcl9fYWRkIHRleHQtc2Vjb25kYXJ5IHJvdW5kZWQtY2lyY2xlIG1sLWF1dG9cIj5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cInVzZXJfX2FkZC1pY29uIGljb24gaWNvbi0tMTIgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e2FkZFVzZXJJY29ufSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvYnV0dG9uPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNDQUxFX0ZBREUgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcnMoeyB1c2VycywgbGF5b3V0ID0gJ2Z1bGwnLCAuLi5yZXN0IH0pIHtcblx0Y29uc3Qgc2xpY2VBbW91bnQgPSBsYXlvdXQgPT09ICdtaW5pbWFsJyA/IDcgOiBJbmZpbml0eTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgZ3V0dGVycy0xXCI+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7dXNlcnMuc2xpY2UoMCwgc2xpY2VBbW91bnQpLm1hcCgodXNlcikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8bW90aW9uLmRpdiBsYXlvdXQgey4uLlNDQUxFX0ZBREV9IGNsYXNzTmFtZT1cImNvbC1hdXRvXCIga2V5PXt1c2VyLmlkfT5cblx0XHRcdFx0XHRcdFx0PFVzZXIgey4uLnsgdXNlciwgLi4ucmVzdCB9fSAvPlxuXHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0XHR7bGF5b3V0ID09PSAnbWluaW1hbCcgJiYgdXNlcnMubGVuZ3RoID4gNyAmJiAoXG5cdFx0XHRcdFx0PG1vdGlvbi5kaXYgbGF5b3V0IHsuLi5TQ0FMRV9GQURFfSBjbGFzc05hbWU9XCJjb2wtYXV0b1wiIGtleT1cIm1vcmVcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtLXNtIHRleHQtbXV0ZWQtLTcwIG1sLTFcIj4rIHt1c2Vycy5sZW5ndGggLSBzbGljZUFtb3VudH08L3A+XG5cdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFN0YXRpY0NvbnRleHQgfSBmcm9tICcuL21haW5Db250ZXh0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmV2aWV3Q29udGV4dCB9IGZyb20gJy4vcmV2aWV3Q29udGV4dCc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTdGF0aWNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuZXhwb3J0IGRlZmF1bHQgU3RhdGljQ29udGV4dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFJldmlld0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5leHBvcnQgZGVmYXVsdCBSZXZpZXdDb250ZXh0O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXJBZGQsIFVzZXJzLCBFZGl0YWJsZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgc3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBlZGl0UHJvamVjdCwgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWxIZWFkZXIoeyB0aXRsZSwgZGVzY3JpcHRpb24sIHVzZXJzLCBpZCwgYXV0aG9yLCBlbWFpbCB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCBwcm9qZWN0ID0geyBpZCwgYXV0aG9yLCBlbWFpbCB9O1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoc3RhdGljQ29udGV4dCk7XG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgbXV0YXRpb25PblN1Y2Nlc3MgPSAoKSA9PiB7XG5cdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgaWRdKTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi02XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctNlwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7dXNlclJvbGUgPT09ICdhZG1pbicgJiYgJ2VkaXRhYmxlJ30gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yYH0+XG5cdFx0XHRcdFx0PEVkaXRhYmxlXG5cdFx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ0VkaXRpbmcgdGl0bGUnLFxuXHRcdFx0XHRcdFx0XHRmaWVsZHM6IFt7IG5hbWU6ICd0aXRsZScsIGRlZmF1bHRWYWx1ZTogdGl0bGUgfV0sXG5cdFx0XHRcdFx0XHRcdG11dGF0aW9uOiBlZGl0UHJvamVjdCxcblx0XHRcdFx0XHRcdFx0bXV0YXRpb25JZDogaWQsXG5cdFx0XHRcdFx0XHRcdG11dGF0aW9uT25TdWNjZXNzOiBtdXRhdGlvbk9uU3VjY2Vzcyxcblx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImg1IG1iLTAgdGV4dC13aGl0ZVwiPnt0aXRsZSA/IHRpdGxlIDogJ0FkZCBhIG5pY2UgdGl0bGUnfTwvaDE+XG5cdFx0XHRcdFx0PC9FZGl0YWJsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiAnZWRpdGFibGUnfSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJgfT5cblx0XHRcdFx0XHQ8RWRpdGFibGVcblx0XHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnRWRpdGluZyBkZXNjcmlwdGlvbicsXG5cdFx0XHRcdFx0XHRcdGZpZWxkczogW3sgbmFtZTogJ2Rlc2NyaXB0aW9uJywgZGVmYXVsdFZhbHVlOiBkZXNjcmlwdGlvbiB9XSxcblx0XHRcdFx0XHRcdFx0bXV0YXRpb246IGVkaXRQcm9qZWN0LFxuXHRcdFx0XHRcdFx0XHRtdXRhdGlvbklkOiBpZCxcblx0XHRcdFx0XHRcdFx0bXV0YXRpb25PblN1Y2Nlc3M6IG11dGF0aW9uT25TdWNjZXNzLFxuXHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS03MCBtYi0wXCI+XG5cdFx0XHRcdFx0XHRcdHtkZXNjcmlwdGlvbiA/IChcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57ZGVzY3JpcHRpb259PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTQwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7XCJXaGF0J3MgdGhpcyBwcm9qZWN0IGFib3V0PyBTZXQgdGhlIGNvbnRleHQsIHRoZSBnb2FscywgdGhlIGNvbnN0cmFpbnRzXCJ9XG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvRWRpdGFibGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIGQtZmxleCBhbGlnbi1pdGVtcy1iYXNlbGluZSBtbC1hdXRvXCI+XG5cdFx0XHRcdDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdCB9fSBzaXplPVwibGdcIiAvPlxuXHRcdFx0XHR7dXNlclJvbGUgPT09ICdhZG1pbicgJiYgPFVzZXJBZGQgey4uLnsgdXNlcnMsIHByb2plY3QgfX0gLz59XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgRWRpdGFibGUsIEltYWdlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNoZWNrSWNvbiBmcm9tICdpY29ucy9jaGVjay5zdmcnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZWRpdFByb2plY3RJbWFnZSwgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWxJbWFnZSh7IHByb2plY3RJbWFnZSwgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyBpZDogcHJvamVjdEltYWdlSWQsIHRpdGxlLCBwaGFzZSA9IHt9IH0gPSBwcm9qZWN0SW1hZ2U7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBtdXRhdGlvbk9uU3VjY2VzcyA9ICgpID0+IHtcblx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9e2BjYXJkIGNhcmQtLWxpbmsgY2FyZC0tcHJvZHVjdCAke3NlbGVjdGVkLmluY2x1ZGVzKHByb2plY3RJbWFnZUlkKSAmJiAnaXMtc2VsZWN0ZWQnfWB9PlxuXHRcdFx0PExpbmsgdG89e2AvcHJvamVjdHMvJHtwcm9qZWN0SWR9L3Jldmlldy8ke3Byb2plY3RJbWFnZUlkfWB9IHRpdGxlPXt0aXRsZX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9faW1hZ2UgYm9yZGVyIG0tMlwiPlxuXHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJcblx0XHRcdFx0XHRcdHNyYz17cGhhc2UuaW1hZ2UudGh1bWJuYWlsfVxuXHRcdFx0XHRcdFx0c3JjU2V0PXtgJHtwaGFzZS5pbWFnZS50aHVtYm5haWxSZXRpbmF9IDJ4YH1cblx0XHRcdFx0XHRcdGFsdD17dGl0bGV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0xpbms+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuXHRcdFx0XHQ8RWRpdGFibGVcblx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdFZGl0aW5nIGltYWdlIHRpdGxlJyxcblx0XHRcdFx0XHRcdGZpZWxkczogW3sgbmFtZTogJ3RpdGxlJywgZGVmYXVsdFZhbHVlOiB0aXRsZSB9XSxcblx0XHRcdFx0XHRcdG11dGF0aW9uOiBlZGl0UHJvamVjdEltYWdlLFxuXHRcdFx0XHRcdFx0bXV0YXRpb25JZDogcHJvamVjdEltYWdlSWQsXG5cdFx0XHRcdFx0XHRtdXRhdGlvbk9uU3VjY2VzczogbXV0YXRpb25PblN1Y2Nlc3MsXG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0PG1vdGlvbi5wIHsuLi5GQURFX0lOfSBjbGFzc05hbWU9XCJtYi0wXCI+XG5cdFx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdFx0PC9tb3Rpb24ucD5cblx0XHRcdFx0PC9FZGl0YWJsZT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX19zZWxlY3RcIj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC10b2dnbGVcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHVwZGF0ZVNlbGVjdGVkKHByb2plY3RJbWFnZUlkKTtcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC1pY29uIGljb24gaWNvbi0tOFwiIHNyYz17Y2hlY2tJY29ufSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvYXJ0aWNsZT5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IERyb3B6b25lLCBBY3Rpb25NZW51IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IFByb2plY3REZXRhaWxJbWFnZSBmcm9tICcuL1Byb2plY3REZXRhaWxJbWFnZSc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU1RBR0dFUl9VUCB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0SW1hZ2VzLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZVNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdERldGFpbEltYWdlcyh7IHByb2plY3RJbWFnZXMsIHByb2plY3RJZCB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkLCByZXNldFNlbGVjdGVkIH0gPSB1c2VTZWxlY3Rpb24oKTtcblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXHRjb25zdCB7IHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVQcm9qZWN0SW1hZ2VzLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKTtcblx0XHRcdHJlc2V0U2VsZWN0ZWQoKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgYWN0aW9ucyA9IFtcblx0XHR7XG5cdFx0XHR0aXRsZTogJ1JlbW92ZScsXG5cdFx0XHR0aGVtZTogJ2RhbmdlcicsXG5cdFx0XHRoYXNQZXJtaXNzaW9uOiBbJ2FkbWluJ10sXG5cdFx0XHRpY29uOiBkZWxldGVJY29uLFxuXHRcdFx0aWNvblNpemU6IDEwLFxuXHRcdFx0bXV0YXRpb246ICgpID0+IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZUlkczogc2VsZWN0ZWQgfSksXG5cdFx0XHRpc0xvYWRpbmc6IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbi5pc0xvYWRpbmcsXG5cdFx0fSxcblx0XTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAnaGFzLXNlbGVjdGlvbnMnfWB9PlxuXHRcdFx0XHR7dXNlclJvbGUgPT09ICdhZG1pbicgPyAoXG5cdFx0XHRcdFx0PERyb3B6b25lIHsuLi57IHByb2plY3RJZCwgcHJvamVjdEltYWdlcywgcG9zaXRpdGlvbjogJ3JpZ2h0JyB9fT5cblx0XHRcdFx0XHRcdHsoKSA9PiA8SW1hZ2VzIHsuLi57IHByb2plY3RJbWFnZXMsIHByb2plY3RJZCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH19IC8+fVxuXHRcdFx0XHRcdDwvRHJvcHpvbmU+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy01XCI+XG5cdFx0XHRcdFx0XHQ8SW1hZ2VzIHsuLi57IHByb2plY3RJbWFnZXMsIHByb2plY3RJZCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH19IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHtzZWxlY3RlZC5sZW5ndGggPiAwICYmIHVzZXJSb2xlID09PSAnYWRtaW4nICYmIChcblx0XHRcdFx0XHQ8QWN0aW9uTWVudSB7Li4ueyBzZWxlY3RlZCwgcmVzZXRTZWxlY3RlZCwgYWN0aW9ucyB9fSAvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmNvbnN0IEltYWdlcyA9ICh7IHByb2plY3RJbWFnZXMsIHByb2plY3RJZCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0e3Byb2plY3RJbWFnZXMubWFwKChwcm9qZWN0SW1hZ2UsIHByb2plY3RJbWFnZUluZGV4KSA9PiAoXG5cdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0ey4uLlNUQUdHRVJfVVAocHJvamVjdEltYWdlSW5kZXgpfVxuXHRcdFx0XHRcdGtleT17cHJvamVjdEltYWdlLmlkfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtMyBjb2wteHhsLTJcIlxuXHRcdFx0XHRcdGxheW91dD5cblx0XHRcdFx0XHQ8UHJvamVjdERldGFpbEltYWdlIHsuLi57IHByb2plY3RJbWFnZSwgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfX0gLz5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0KSl9XG5cdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG59O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0RGV0YWlsSGVhZGVyIH0gZnJvbSAnLi9Qcm9qZWN0RGV0YWlsSGVhZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdERldGFpbEltYWdlcyB9IGZyb20gJy4vUHJvamVjdERldGFpbEltYWdlcyc7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlcnMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgeyBQcm9qZWN0SW1hZ2UgfSBmcm9tICcuLyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNoZWNrSWNvbiBmcm9tICdpY29ucy9jaGVjay5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KHsgcHJvamVjdCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgdGl0bGUsIHByb2plY3RJbWFnZXMsIHVzZXJzLCBhdXRob3IsIGlkIH0gPSBwcm9qZWN0O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxMaW5rXG5cdFx0XHR0bz17YHByb2plY3RzLyR7aWR9YH1cblx0XHRcdHRpdGxlPXt0aXRsZX1cblx0XHRcdGNsYXNzTmFtZT17YGNhcmQgY2FyZC0tbGluayBjYXJkLS1wcm9kdWN0ICR7c2VsZWN0ZWQuaW5jbHVkZXMoaWQpICYmICdpcy1zZWxlY3RlZCd9YH0+XG5cdFx0XHQ8UHJvamVjdEltYWdlIHsuLi57IHByb2plY3RJbWFnZXMgfX0gLz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItMlwiPnt0aXRsZSA/IHRpdGxlIDogJ0FkZCBhIG5pY2UgdGl0bGUnfTwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdDogeyBhdXRob3IgfSwgbGF5b3V0OiAnbWluaW1hbCcgfX0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fc2VsZWN0XCI+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXJkX19zZWxlY3QtdG9nZ2xlXCJcblx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHR1cGRhdGVTZWxlY3RlZChpZCk7XG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJjYXJkX19zZWxlY3QtaWNvbiBpY29uIGljb24tLThcIiBzcmM9e2NoZWNrSWNvbn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0xpbms+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5LCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogRG9tYWluICovXG5pbXBvcnQgeyBQcm9qZWN0U2xpZGVJbiB9IGZyb20gJy4vJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU0NBTEVfRkFERSB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRQcm9qZWN0SWNvbiBmcm9tICdpY29ucy9hZGRfcHJvamVjdC5zdmcnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGFkZFByb2plY3QsIFFVRVJZX0tFWVMsIGVkaXRQcm9qZWN0LCBmZXRjaFByb2plY3RCeUlkIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdEFkZCh7IHNldE5ld1Byb2plY3RJZCB9KSB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtwcm9qZWN0SWQsIHNldFByb2plY3RJZF0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgW3NsaWRlSW5PcGVuLCBzZXRTbGlkZUluT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBkYXRhOiBwcm9qZWN0IH0gPSB1c2VRdWVyeShbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdLCAoKSA9PiBmZXRjaFByb2plY3RCeUlkKHsgcHJvamVjdElkIH0pLCB7XG5cdFx0ZW5hYmxlZDogISFwcm9qZWN0SWQsXG5cdH0pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0TmV3UHJvamVjdElkKHByb2plY3RJZCk7XG5cdH0sIFtwcm9qZWN0SWRdKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgYWRkTXV0YXRpb24gPSB1c2VNdXRhdGlvbihhZGRQcm9qZWN0LCB7XG5cdFx0b25TdWNjZXNzOiAoeyBpZCB9KSA9PiBzZXRQcm9qZWN0SWQoaWQpLFxuXHR9KTtcblxuXHRjb25zdCBlZGl0TXV0YXRpb24gPSB1c2VNdXRhdGlvbihlZGl0UHJvamVjdCwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4gaW52YWxpZGF0ZVByb2plY3QoKSxcblx0fSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZVNsaWRlSW4gPSAoKSA9PiB7XG5cdFx0c2V0U2xpZGVJbk9wZW4oIXNsaWRlSW5PcGVuKTtcblxuXHRcdC8qIE11dGF0ZSBvbiBtb2RhbCBvcGVuICovXG5cdFx0aWYgKCFzbGlkZUluT3BlbikgYWRkTXV0YXRpb24ubXV0YXRlKCk7XG5cblx0XHQvKiBSZXNldCBpZCBvbiBjbG9zZSBtb2RhbCAqL1xuXHRcdGlmIChzbGlkZUluT3Blbikge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNldFByb2plY3RJZChudWxsKTtcblx0XHRcdH0sIDI1MCk7XG5cblx0XHRcdGludmFsaWRhdGVQcm9qZWN0KCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHVwZGF0ZVByb2plY3QgPSAoZm9ybVJlZikgPT4gZWRpdE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYsIGlkOiBwcm9qZWN0SWQgfSk7XG5cdGNvbnN0IGludmFsaWRhdGVQcm9qZWN0ID0gKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8bW90aW9uLmJ1dHRvblxuXHRcdFx0XHR7Li4uU0NBTEVfRkFERX1cblx0XHRcdFx0a2V5PVwiYWRkLXByb2plY3RcIlxuXHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0taW50ZXJhY3RpdmUgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnkgYnRuIGJ0bi1saW5rIGJ0bi0tYWRkIGJ0bi0tYWRkLXJpZ2h0XCJcblx0XHRcdFx0c3R5bGU9e3sgJy0tc2l6ZSc6IDc1IH19XG5cdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZVNsaWRlSW59PlxuXHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMzAgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e2FkZFByb2plY3RJY29ufSAvPlxuXHRcdFx0PC9tb3Rpb24uYnV0dG9uPlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e3NsaWRlSW5PcGVuICYmIDxQcm9qZWN0U2xpZGVJbiB7Li4ueyBwcm9qZWN0LCB1cGRhdGVQcm9qZWN0LCB0b2dnbGVTbGlkZUluIH19IC8+fVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkSW1hZ2VJY29uIGZyb20gJ2ljb25zL2FkZF9pbWFnZS5zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0SW1hZ2UoeyBwcm9qZWN0SW1hZ2VzIH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgcGhhc2UgPSB7fSwgdGl0bGUgfSA9IHByb2plY3RJbWFnZXNbMF0gfHwge307XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX19pbWFnZSBib3JkZXIgbS0yXCI+XG5cdFx0XHR7cGhhc2UuaW1hZ2UgJiYgKFxuXHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxuXHRcdFx0XHRcdHNyYz17cGhhc2UuaW1hZ2UudGh1bWJuYWlsfVxuXHRcdFx0XHRcdHNyY1NldD17YCR7cGhhc2UuaW1hZ2UudGh1bWJuYWlsUmV0aW5hfSAyeGB9XG5cdFx0XHRcdFx0YWx0PXt0aXRsZX1cblx0XHRcdFx0Lz5cblx0XHRcdCl9XG5cdFx0XHR7IXBoYXNlLmltYWdlICYmIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS00OCB0ZXh0LW11dGVkLS00MFwiIHNyYz17YWRkSW1hZ2VJY29ufSAvPn1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEFjdGlvbk1lbnUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi8nO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOLCBTVEFHR0VSX1VQIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuaW1wb3J0IGxlYXZlSWNvbiBmcm9tICdpY29ucy9sZWF2ZS5zdmcnO1xuaW1wb3J0IGFyY2hpdmVJY29uIGZyb20gJ2ljb25zL2FyY2hpdmUuc3ZnJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZVNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0cywgbGVhdmVQcm9qZWN0cywgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmVzdWx0cyh7IHByb2plY3RzLCBuZXdQcm9qZWN0SWQgfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IHNlbGVjdGVkLCB1cGRhdGVTZWxlY3RlZCwgcmVzZXRTZWxlY3RlZCB9ID0gdXNlU2VsZWN0aW9uKCk7XG5cdGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgbGVhdmVQcm9qZWN0c011dGF0aW9uID0gdXNlTXV0YXRpb24obGVhdmVQcm9qZWN0cywge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIpO1xuXHRcdFx0cmVzZXRTZWxlY3RlZCgpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdGNvbnN0IGRlbGV0ZVByb2plY3RzTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVQcm9qZWN0cywge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIpO1xuXHRcdFx0cmVzZXRTZWxlY3RlZCgpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdGNvbnN0IGFjdGlvbnMgPSBbXG5cdFx0e1xuXHRcdFx0dGl0bGU6ICdMZWF2ZScsXG5cdFx0XHR0aGVtZTogJ3dhcm5pbmcnLFxuXHRcdFx0aGFzUGVybWlzc2lvbjogWyd1c2VyJywgJ2Jhc2ljJ10sXG5cdFx0XHRpY29uOiBsZWF2ZUljb24sXG5cdFx0XHRtdXRhdGlvbjogKCkgPT4gbGVhdmVQcm9qZWN0c011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZHM6IHNlbGVjdGVkLCB1c2VySWQ6IGN1cnJlbnRVc2VyLmlkIH0pLFxuXHRcdFx0aXNMb2FkaW5nOiBsZWF2ZVByb2plY3RzTXV0YXRpb24uaXNMb2FkaW5nLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGl0bGU6ICdBcmNoaXZlJyxcblx0XHRcdHRoZW1lOiAnc2Vjb25kYXJ5Jyxcblx0XHRcdGhhc1Blcm1pc3Npb246IFsnYWRtaW4nXSxcblx0XHRcdGljb246IGFyY2hpdmVJY29uLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGl0bGU6ICdSZW1vdmUnLFxuXHRcdFx0dGhlbWU6ICdkYW5nZXInLFxuXHRcdFx0aGFzUGVybWlzc2lvbjogWydhZG1pbiddLFxuXHRcdFx0aWNvbjogY2xvc2VJY29uLFxuXHRcdFx0aWNvblNpemU6IDEwLFxuXHRcdFx0bXV0YXRpb246ICgpID0+IGRlbGV0ZVByb2plY3RzTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkczogc2VsZWN0ZWQgfSksXG5cdFx0XHRpc0xvYWRpbmc6IGRlbGV0ZVByb2plY3RzTXV0YXRpb24uaXNMb2FkaW5nLFxuXHRcdH0sXG5cdF07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxoMSBjbGFzc05hbWU9XCJoNSB0ZXh0LXdoaXRlIG1iLTZcIj5Zb3VyIHByb2plY3RzPC9oMT5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHtwcm9qZWN0cy5sZW5ndGggPT09IDAgJiYgKFxuXHRcdFx0XHRcdDxtb3Rpb24ucCB7Li4uRkFERV9JTn0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi0wIHBvc2l0aW9uLWFic29sdXRlXCI+XG5cdFx0XHRcdFx0XHR7YFlvdSBkb24ndCBoYXZlIGFueSBwcm9qZWN0cyB5ZXRgfVxuXHRcdFx0XHRcdDwvbW90aW9uLnA+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgcm93IHJvdy0tZXF1YWxpemVkIGd1dHRlcnMtNSAke3NlbGVjdGVkLmxlbmd0aCA+IDAgJiYgJ2hhcy1zZWxlY3Rpb25zJ31gfT5cblx0XHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0XHR7cHJvamVjdHNcblx0XHRcdFx0XHRcdC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IG5ld1Byb2plY3RJZClcblx0XHRcdFx0XHRcdC5tYXAoKHByb2plY3QsIHByb2plY3RJbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdFx0XHRcdHsuLi5TVEFHR0VSX1VQKHByb2plY3RJbmRleCl9XG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtwcm9qZWN0LmlkfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtMyBjb2wteHhsLTJcIlxuXHRcdFx0XHRcdFx0XHRcdGxheW91dD5cblx0XHRcdFx0XHRcdFx0XHQ8UHJvamVjdCB7Li4ueyBwcm9qZWN0LCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfX0gLz5cblx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7c2VsZWN0ZWQubGVuZ3RoID4gMCAmJiA8QWN0aW9uTWVudSB7Li4ueyBzZWxlY3RlZCwgcmVzZXRTZWxlY3RlZCwgYWN0aW9ucyB9fSAvPn1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0YXJlYUF1dG9zaXplJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBEcm9wem9uZSwgTG9hZGluZ1dyYXBwZXIsIFNsaWRlSW4sIFVzZXJzLCBVc2VyQWRkLCBJbWFnZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTVEFHR0VSX1VQIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RTbGlkZUluKHsgcHJvamVjdCA9IHt9LCB1cGRhdGVQcm9qZWN0LCB0b2dnbGVTbGlkZUluIH0pIHtcblx0LyogQ29uc3RhbnRzICAqL1xuXHRjb25zdCB7IGlkOiBwcm9qZWN0SWQgPSBudWxsLCB0aXRsZSA9ICcnLCBwcm9qZWN0SW1hZ2VzID0gW10sIHVzZXJzID0gW10gfSA9IHByb2plY3Q7XG5cblx0LyogUmVmcyAqL1xuXHRjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PFNsaWRlSW4gey4uLnsgdG9nZ2xlU2xpZGVJbiB9fSBkb21FbGVtZW50PXtkb2N1bWVudC5ib2R5fT5cblx0XHRcdDxmb3JtXG5cdFx0XHRcdHJlZj17Zm9ybVJlZn1cblx0XHRcdFx0bWV0aG9kPVwiUE9TVFwiXG5cdFx0XHRcdGNsYXNzTmFtZT1cInNsaWRlLWluX19mb3JtXCJcblx0XHRcdFx0b25TdWJtaXQ9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dG9nZ2xlU2xpZGVJbigpO1xuXHRcdFx0XHR9fT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbl9faGVhZGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHQtNiBwdC1tZC0xMiBwYi0zXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicHJvamVjdFRpdGxlXCI+XG5cdFx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtLWNsZWFyIHRleHQtLXhsXCJcblx0XHRcdFx0XHRcdGlkPVwicHJvamVjdFRpdGxlXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJ0aXRsZVwiXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlRoZSBwcm9qZWN0IG5hbWVcIlxuXHRcdFx0XHRcdFx0b25CbHVyPXsoKSA9PiB1cGRhdGVQcm9qZWN0KGZvcm1SZWYpfVxuXHRcdFx0XHRcdFx0YXV0b0ZvY3VzXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInNsaWRlLWluX19jbG9zZSBidG4gYnRuLWxpbmsgbWwtYXV0b1wiXG5cdFx0XHRcdFx0XHRkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17dG9nZ2xlU2xpZGVJbn1cblx0XHRcdFx0XHRcdHRhYkluZGV4PVwiLTFcIj5cblx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbl9fYm9keSBwdC0zIHBiLTEyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0yXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInByb2plY3REZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRcdHtgV2hhdCdzIHRoaXMgcHJvamVjdCBhYm91dD9gfVxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8VGV4dGFyZWFBdXRvc2l6ZVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtLXRleHQgZm9ybS1jb250cm9sLS1jbGVhciBtYi0xMFwiXG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJwcm9qZWN0RGVzY3JpcHRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJXaGF0J3MgdGhpcyBwcm9qZWN0IGFib3V0P1wiXG5cdFx0XHRcdFx0XHRcdFx0b25CbHVyPXsoKSA9PiB1cGRhdGVQcm9qZWN0KGZvcm1SZWYpfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIGQtZmxleCBhbGlnbi1pdGVtcy1iYXNlbGluZSBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0XHRcdDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdCB9fSBzaXplPVwibGdcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8VXNlckFkZCB7Li4ueyB1c2VycywgcHJvamVjdCB9fSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PERyb3B6b25lIHsuLi57IHByb2plY3RJZCwgcHJvamVjdEltYWdlcyB9fT5cblx0XHRcdFx0XHRcdHsoeyB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc0xvYWRpbmcgfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHRcdFx0XHRcdHtwcm9qZWN0SW1hZ2VzLm1hcCgocHJvamVjdEltYWdlLCBwcm9qZWN0SW1hZ2VJbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PERyb3B6b25lSW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtwcm9qZWN0SW1hZ2UuaWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi57IHByb2plY3RJbWFnZSwgcHJvamVjdEltYWdlSW5kZXgsIHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzTG9hZGluZyB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvRHJvcHpvbmU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluX19mb290ZXIgcGItNiBwYi1tZC0xMlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtMCB3LTEwMFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTEgbWwtYXV0b1wiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic2xpZGUtaW5fX2J0biBidG4gYnRuLWJsb2NrIGJ0bi1zZWNvbmRhcnkgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG1vdGlvbi5zcGFuIGNsYXNzTmFtZT1cImJ0bi10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5TYXZlPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvbW90aW9uLnNwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvU2xpZGVJbj5cblx0KTtcbn1cblxuY29uc3QgRHJvcHpvbmVJbWFnZSA9ICh7IHByb2plY3RJbWFnZSwgcHJvamVjdEltYWdlSW5kZXgsIHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzTG9hZGluZyB9KSA9PiB7XG5cdGNvbnN0IHsgdGl0bGUsIGlkLCBwaGFzZSA9IHt9IH0gPSBwcm9qZWN0SW1hZ2U7XG5cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0bGF5b3V0XG5cdFx0XHR7Li4uU1RBR0dFUl9VUChwcm9qZWN0SW1hZ2VJbmRleCl9XG5cdFx0XHRjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXhsLTMgY29sLXh4bC0yXCJcblx0XHRcdGtleT17aWR9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZV9fY29udGFpbmVyXCI+XG5cdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImRyb3B6b25lX19pbWFnZSBpbWctZmx1aWRcIlxuXHRcdFx0XHRcdHNyYz17cGhhc2UuaW1hZ2UudGh1bWJuYWlsfVxuXHRcdFx0XHRcdHNyY1NldD17YCR7cGhhc2UuaW1hZ2UudGh1bWJuYWlsUmV0aW5hfSAyeGB9XG5cdFx0XHRcdFx0YWx0PXt0aXRsZX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBkcm9wem9uZV9faW1hZ2UtZGVsZXRlIHAtMFwiXG5cdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdHVwZGF0ZVByb2plY3RJbWFnZXMoJ2RlbGV0ZScsIHsgcHJvamVjdEltYWdlSWRzOiBbaWRdIH0pO1xuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImRyb3B6b25lX19pbWFnZS1kZWxldGUtaWNvbiBpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1kYW5nZXIgbXgtYXV0b1wiXG5cdFx0XHRcdFx0XHRzdHlsZT17eyAnLS1zaXplJzogNTAgfX0+XG5cdFx0XHRcdFx0XHQ8TG9hZGluZ1dyYXBwZXJcblx0XHRcdFx0XHRcdFx0bG9hZGluZz17aXNMb2FkaW5nfVxuXHRcdFx0XHRcdFx0XHRsb2FkZXJTaXplPXsyMH1cblx0XHRcdFx0XHRcdFx0Y2xhc3Nlcz17e1xuXHRcdFx0XHRcdFx0XHRcdGxvYWRlckNsYXNzZXM6ICdwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXggdGV4dC1kYW5nZXInLFxuXHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTE0IHRleHQtZGFuZ2VyIG10LTBcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cblx0XHRcdFx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdCB9IGZyb20gJy4vUHJvamVjdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RBZGQgfSBmcm9tICcuL1Byb2plY3RBZGQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0SW1hZ2UgfSBmcm9tICcuL1Byb2plY3RJbWFnZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RTbGlkZUluIH0gZnJvbSAnLi9Qcm9qZWN0U2xpZGVJbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RSZXN1bHRzIH0gZnJvbSAnLi9Qcm9qZWN0UmVzdWx0cyc7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VyLCBNb2RhbCwgRWRpdGFibGVCb2R5LCBEcm9wem9uZVNpbmdsZSwgQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNoZXZyb25JY29uIGZyb20gJ2ljb25zL2NoZXZyb24uc3ZnJztcbmltcG9ydCBlZGl0SWNvbiBmcm9tICdpY29ucy9lZGl0LnN2Zyc7XG5pbXBvcnQgbmV4dEljb24gZnJvbSAnaWNvbnMvbmV4dC5zdmcnO1xuaW1wb3J0IGNvbW1lbnRJY29uIGZyb20gJ2ljb25zL2NvbW1lbnQuc3ZnJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IHsgUmV2aWV3Q29udGV4dCwgU3RhdGljQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGVkaXRQcm9qZWN0SW1hZ2UsIG5leHRQaGFzZSwgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNDQUxFX0lOX1VQIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXdBY3Rpb25CYXIoe1xuXHRhbGxJbWFnZXMsXG5cdHRpdGxlLFxuXHRkZXNjcmlwdGlvbixcblx0cGhhc2VOdW1iZXIsXG5cdHBoYXNlSWQsXG5cdGNvbW1lbnRzUGFuZWxPcGVuLFxuXHR0b2dnbGVDb21tZW50c1BhbmVsLFxufSkge1xuXHQvKiBDb250ZXh0ICovXG5cdGNvbnN0IHsgY3VycmVudFVzZXIsIHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIENvbnRleHQgKi9cblx0Y29uc3QgeyBwcm9qZWN0SW1hZ2VJZCB9ID0gdXNlQ29udGV4dChSZXZpZXdDb250ZXh0KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYXIgYmFyLS1yZXZpZXdcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTAganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGQtZmxleCBmbGV4LWNvbHVtblwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LS1zbSBtYi0wXCI+UHJvamVjdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkdcblx0XHRcdFx0XHRcdFx0XHRcdHdyYXBwZXI9XCJzdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaWNvbiBpY29uLS04IHRleHQtd2hpdGUgdGV4dC1tdXRlZC0tNTAgbXgtMVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2NoZXZyb25JY29ufVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0tc20gbWItMCB0ZXh0LXRydW5jYXRlXCIgc3R5bGU9e3sgbWF4V2lkdGg6IDEyMCB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdHt0aXRsZX1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LS14cyB0ZXh0LW11dGVkLS03MCBtYi0wXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7YWxsSW1hZ2VzLmluZGV4T2YoTnVtYmVyKHByb2plY3RJbWFnZUlkKSkgKyAxfSBvZiB7YWxsSW1hZ2VzLmxlbmd0aH1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibXgtMSB0ZXh0LW11dGVkLS0yMFwiPi88L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0teHMgdGV4dC1tdXRlZC0tNzAgbWItMFwiPlBoYXNlIHtwaGFzZU51bWJlcn08L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBoci0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3VzZXJSb2xlID09PSAnYWRtaW4nICYmIDxFZGl0QWN0aW9uIHsuLi57IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdEltYWdlSWQgfX0gLz59XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYmFyX19hY3Rpb24tYnRuICR7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb21tZW50c1BhbmVsT3BlbiAmJiAnaXMtYWN0aXZlJ1xuXHRcdFx0XHRcdFx0XHRcdH0gYnRuIGJ0bi1saW5rIHRleHQtcmVzdCBoci0yYH1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVDb21tZW50c1BhbmVsfT5cblx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTZcIiBzcmM9e2NvbW1lbnRJY29ufSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBoci0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3VzZXJSb2xlID09PSAnYWRtaW4nICYmIDxQaGFzZUFjdGlvbiB7Li4ueyBwaGFzZUlkLCBwcm9qZWN0SW1hZ2VJZCB9fSAvPn1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cblx0XHRcdFx0XHRcdFx0PFVzZXIgey4uLnsgdXNlcjogY3VycmVudFVzZXIsIHNpemU6ICdsZycgfX0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuXG5jb25zdCBFZGl0QWN0aW9uID0gKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0SW1hZ2VJZCB9KSA9PiB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbZWRpdE1vZGFsT3Blbiwgc2V0RWRpdE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZUVkaXRNb2RhbCA9ICgpID0+IHNldEVkaXRNb2RhbE9wZW4oIWVkaXRNb2RhbE9wZW4pO1xuXG5cdC8qIG11dGF0aW9ucyAqL1xuXHRjb25zdCBtdXRhdGlvbk9uU3VjY2VzcyA9ICgpID0+IHtcblx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0lNQUdFX0JZX0lELCBOdW1iZXIocHJvamVjdEltYWdlSWQpXSk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0Y2xhc3NOYW1lPXtgYmFyX19hY3Rpb24tYnRuICR7ZWRpdE1vZGFsT3BlbiAmJiAnaXMtYWN0aXZlJ30gYnRuIGJ0bi1saW5rIHRleHQtcmVzdGB9XG5cdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZUVkaXRNb2RhbH0+XG5cdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNlwiIHNyYz17ZWRpdEljb259IC8+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxNb2RhbFxuXHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdHRpdGxlOiAnRWRpdGluZyBpbWFnZScsXG5cdFx0XHRcdFx0c3VidGl0bGU6ICdTYXZlIHdoZW4gcmVhZHknLFxuXHRcdFx0XHRcdG1vZGFsT3BlbjogZWRpdE1vZGFsT3Blbixcblx0XHRcdFx0XHR0b2dnbGVNb2RhbDogdG9nZ2xlRWRpdE1vZGFsLFxuXHRcdFx0XHRcdHJlbmRlck9uQm9keTogZmFsc2UsXG5cdFx0XHRcdFx0Y2VudGVyOiBmYWxzZSxcblx0XHRcdFx0XHRleHRlbnNpb25DbGFzc2VzOiAnYmFyX19tb2RhbCcsXG5cdFx0XHRcdFx0Y3VzdG9tQW5pbWF0aW9uOiBTQ0FMRV9JTl9VUCxcblx0XHRcdFx0fX0+XG5cdFx0XHRcdDxFZGl0YWJsZUJvZHlcblx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0dG9nZ2xlTW9kYWw6IHRvZ2dsZUVkaXRNb2RhbCxcblx0XHRcdFx0XHRcdGZpZWxkczogW1xuXHRcdFx0XHRcdFx0XHR7IG5hbWU6ICd0aXRsZScsIGRlZmF1bHRWYWx1ZTogdGl0bGUgfSxcblx0XHRcdFx0XHRcdFx0eyBuYW1lOiAnZGVzY3JpcHRpb24nLCBkZWZhdWx0VmFsdWU6IGRlc2NyaXB0aW9uIH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0bXV0YXRpb246IGVkaXRQcm9qZWN0SW1hZ2UsXG5cdFx0XHRcdFx0XHRtdXRhdGlvbklkOiBwcm9qZWN0SW1hZ2VJZCxcblx0XHRcdFx0XHRcdG11dGF0aW9uT25TdWNjZXNzOiBtdXRhdGlvbk9uU3VjY2Vzcyxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9Nb2RhbD5cblx0XHQ8Lz5cblx0KTtcbn07XG5cbmNvbnN0IFBoYXNlQWN0aW9uID0gKHsgcGhhc2VJZCwgcHJvamVjdEltYWdlSWQgfSkgPT4ge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW3BoYXNlTW9kYWxPcGVuLCBzZXRQaGFzZU1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZVBoYXNlTW9kYWwgPSAoKSA9PiBzZXRQaGFzZU1vZGFsT3BlbighcGhhc2VNb2RhbE9wZW4pO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBuZXh0UGhhc2VNdXRhdGlvbiA9IHVzZU11dGF0aW9uKG5leHRQaGFzZSwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0dG9nZ2xlUGhhc2VNb2RhbCgpO1xuXHRcdFx0c2V0SW1hZ2VzKFtdKTtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfSU1BR0VfQllfSUQsIE51bWJlcihwcm9qZWN0SW1hZ2VJZCldKTtcblx0XHR9LFxuXHR9KTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdGNsYXNzTmFtZT17YGJhcl9fYWN0aW9uLWJ0biAke3BoYXNlTW9kYWxPcGVuICYmICdpcy1hY3RpdmUnfSBidG4gYnRuLWxpbmsgdGV4dC1yZXN0YH1cblx0XHRcdFx0b25DbGljaz17dG9nZ2xlUGhhc2VNb2RhbH0+XG5cdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNlwiIHNyYz17bmV4dEljb259IC8+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxNb2RhbFxuXHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdHRpdGxlOiAnTmV4dCBwaGFzZScsXG5cdFx0XHRcdFx0c3VidGl0bGU6ICdBZGQgYSBuZXcgaW1hZ2UgZm9yIHRoZSBuZXh0IHBoYXNlJyxcblx0XHRcdFx0XHRtb2RhbE9wZW46IHBoYXNlTW9kYWxPcGVuLFxuXHRcdFx0XHRcdHRvZ2dsZU1vZGFsOiB0b2dnbGVQaGFzZU1vZGFsLFxuXHRcdFx0XHRcdHJlbmRlck9uQm9keTogZmFsc2UsXG5cdFx0XHRcdFx0Y2VudGVyOiBmYWxzZSxcblx0XHRcdFx0XHRleHRlbnNpb25DbGFzc2VzOiAnYmFyX19tb2RhbCcsXG5cdFx0XHRcdFx0Y3VzdG9tQW5pbWF0aW9uOiBTQ0FMRV9JTl9VUCxcblx0XHRcdFx0fX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIHctMTAwXCI+XG5cdFx0XHRcdFx0PERyb3B6b25lU2luZ2xlIHsuLi57IGltYWdlcywgc2V0SW1hZ2VzIH19IC8+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0dGl0bGU9XCJOZXh0IHBoYXNlXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG5leHRQaGFzZU11dGF0aW9uLm11dGF0ZSh7IHBoYXNlSWQ6IHBoYXNlSWQsIGltYWdlczogaW1hZ2VzIH0pfVxuXHRcdFx0XHRcdFx0ZXh0ZW5zaW9uQ2xhc3Nlcz1cIm10LTMgdy01MCBteC1hdXRvIGp1c3RpZnktY29udGVudC1jZW50ZXJcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9Nb2RhbD5cblx0XHQ8Lz5cblx0KTtcbn07XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IFByb2plY3RSZXZpZXdNYXJrZXIgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3TWFya2VyJztcbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudE1vZGFsIGZyb20gJy4vUHJvamVjdFJldmlld0NvbW1lbnRNb2RhbCc7XG5pbXBvcnQgUHJvamVjdFJldmlld0NvbW1lbnRBZGQgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3Q29tbWVudEFkZCc7XG5pbXBvcnQgUHJvamVjdFJldmlld0FjdGlvbkJhciBmcm9tICcuL1Byb2plY3RSZXZpZXdBY3Rpb25CYXInO1xuaW1wb3J0IFByb2plY3RSZXZpZXdQYWdpbmF0aW9uIGZyb20gJy4vUHJvamVjdFJldmlld1BhZ2luYXRpb24nO1xuaW1wb3J0IFByb2plY3RSZXZpZXdDb21tZW50UGFuZWwgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3Q29tbWVudFBhbmVsJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgU2VjdXJpdHlNb2RhbCwgSW1hZ2UgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBmZXRjaFByb2plY3RVc2VycywgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCB7IFN0YXRpY0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU0xJREVfSU4gfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogR2xvYmFsICovXG5jb25zdCBjdXJzb3JPZmZzZXQgPSAxMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0NhbnZhcyh7IHBhcmVudElkLCB0aXRsZSwgcGhhc2UsIC4uLnJlc3QgfSkge1xuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgZGF0YTogcHJvamVjdFVzZXJzID0gW10gfSA9IHVzZVF1ZXJ5KFxuXHRcdFFVRVJZX0tFWVMuUFJPSkVDVF9VU0VSUyxcblx0XHQoKSA9PiBmZXRjaFByb2plY3RVc2Vycyh7IHByb2plY3RJZDogcGFyZW50SWQgfSksXG5cdFx0e1xuXHRcdFx0ZW5hYmxlZDogISFwYXJlbnRJZCxcblx0XHR9XG5cdCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgaW1hZ2UsIGlkOiBwaGFzZUlkLCBjb21tZW50cywgcGhhc2U6IHBoYXNlTnVtYmVyIH0gPSBwaGFzZTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgcmV2aWV3UmVmID0gdXNlUmVmKCk7XG5cblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW21hcmtlclBvcywgc2V0TWFya2VyUG9zXSA9IHVzZVN0YXRlKCk7XG5cdGNvbnN0IFtzZWN1cml0eU1vZGFsT3Blbiwgc2V0U2VjdXJpdHlNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbY29tbWVudHNQYW5lbE9wZW4sIHNldENvbW1lbnRzUGFuZWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlQ29tbWVudEFkZE9wZW4gPSAoKSA9PiBzZXRNYXJrZXJQb3MobnVsbCk7XG5cdGNvbnN0IHRvZ2dsZUNvbW1lbnRzUGFuZWwgPSAoKSA9PiBzZXRDb21tZW50c1BhbmVsT3BlbighY29tbWVudHNQYW5lbE9wZW4pO1xuXG5cdGNvbnN0IHBvc01hcmtlciA9ICh7IGNsaWVudFgsIGNsaWVudFkgfSkgPT4ge1xuXHRcdGlmICghY3VycmVudFVzZXIuYXV0aGVudGljYXRlZCkge1xuXHRcdFx0c2V0U2VjdXJpdHlNb2RhbE9wZW4odHJ1ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmV2aWV3UG9zID0gcmV2aWV3UmVmPy5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0c2V0TWFya2VyUG9zKCgpID0+IHtcblx0XHRcdGNvbnN0IHhQZXJjZW50ID0gKChjbGllbnRYIC0gY3Vyc29yT2Zmc2V0KSAvIHJldmlld1Bvcy53aWR0aCkgKiAxMDA7XG5cdFx0XHRjb25zdCB5UGVyY2VudCA9ICgoY2xpZW50WSAtIHJldmlld1Bvcy50b3AgLSBjdXJzb3JPZmZzZXQpIC8gcmV2aWV3UG9zLmhlaWdodCkgKiAxMDA7XG5cblx0XHRcdHJldHVybiB7IHhQZXJjZW50LCB5UGVyY2VudCwgcmV2aWV3UG9zIH07XG5cdFx0fSk7XG5cdH07XG5cblx0LyogcmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwicmV2aWV3IHBvc2l0aW9uLXJlbGF0aXZlIG14LW4xMiBtYi0zIG10LW4xMCBtaW4tdmgtMTAwXCI+XG5cdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRjbGFzc05hbWU9XCJyZXZpZXdfX2ltYWdlLXdyYXBwZXIgcG9zaXRpb24tcmVsYXRpdmVcIlxuXHRcdFx0XHRyZWY9e3Jldmlld1JlZn1cblx0XHRcdFx0aW5pdGlhbD17eyB3aWR0aDogJzEwMCUnIH19XG5cdFx0XHRcdGFuaW1hdGU9e3tcblx0XHRcdFx0XHR3aWR0aDogY29tbWVudHNQYW5lbE9wZW4gPyBgY2FsYygxMDAlIC0gNDAwcHgpYCA6ICcxMDAlJyxcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBjb21tZW50c1BhbmVsT3BlbiA/IFNMSURFX0lOLmFuaW1hdGUudHJhbnNpdGlvbiA6IFNMSURFX0lOLmV4aXQudHJhbnNpdGlvbixcblx0XHRcdFx0fX0+XG5cdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInJldmlld19faW1hZ2UgaW1nLWZsdWlkIHctMTAwXCJcblx0XHRcdFx0XHRzcmM9e2ltYWdlLm9yaWdpbmFsfVxuXHRcdFx0XHRcdHNyY1NldD17YCR7aW1hZ2Uub3JpZ2luYWx9IDJ4YH1cblx0XHRcdFx0XHRhbHQ9e3RpdGxlfVxuXHRcdFx0XHRcdG9uQ2xpY2s9e3Bvc01hcmtlcn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0e2NvbW1lbnRzPy5tYXAoKGNvbW1lbnQsIGNvbW1lbnRJbmRleCkgPT4gKFxuXHRcdFx0XHRcdDxQcm9qZWN0UmV2aWV3Q29tbWVudE1vZGFsXG5cdFx0XHRcdFx0XHRrZXk9e2NvbW1lbnQuaWR9XG5cdFx0XHRcdFx0XHR7Li4ueyBjb21tZW50LCBjb21tZW50SW5kZXgsIHJldmlld1JlZiwgcHJvamVjdFVzZXJzLCB0b2dnbGVDb21tZW50QWRkT3BlbiB9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCkpfVxuXHRcdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHRcdHttYXJrZXJQb3MgJiYgKFxuXHRcdFx0XHRcdFx0PFByb2plY3RSZXZpZXdNYXJrZXIgey4uLnsgLi4ubWFya2VyUG9zIH19PlxuXHRcdFx0XHRcdFx0XHQ8UHJvamVjdFJldmlld0NvbW1lbnRBZGQgey4uLnsgbWFya2VyUG9zLCBwaGFzZUlkLCB0b2dnbGVDb21tZW50QWRkT3BlbiB9fSAvPlxuXHRcdFx0XHRcdFx0PC9Qcm9qZWN0UmV2aWV3TWFya2VyPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHQ8U2VjdXJpdHlNb2RhbCB7Li4ueyBzZWN1cml0eU1vZGFsT3Blbiwgc2V0U2VjdXJpdHlNb2RhbE9wZW4gfX0gLz5cblx0XHRcdFx0PFByb2plY3RSZXZpZXdQYWdpbmF0aW9uIHsuLi5yZXN0fSAvPlxuXHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0PFByb2plY3RSZXZpZXdBY3Rpb25CYXJcblx0XHRcdFx0ey4uLnsgLi4ucmVzdCwgdGl0bGUsIHBoYXNlTnVtYmVyLCBwaGFzZUlkLCBjb21tZW50c1BhbmVsT3BlbiwgdG9nZ2xlQ29tbWVudHNQYW5lbCB9fVxuXHRcdFx0Lz5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHtjb21tZW50c1BhbmVsT3BlbiAmJiAoXG5cdFx0XHRcdFx0PFByb2plY3RSZXZpZXdDb21tZW50UGFuZWxcblx0XHRcdFx0XHRcdHsuLi57IGNvbW1lbnRzLCBjb21tZW50c1BhbmVsT3BlbiwgdG9nZ2xlQ29tbWVudHNQYW5lbCwgcHJvamVjdFVzZXJzIH19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KX1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvbW90aW9uLmRpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbi8qIENvbXBvbmVudHMqL1xuaW1wb3J0IHsgVXNlciwgVXNlckluZm8gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0NvbW1lbnQoe1xuXHRjb21tZW50OiBjb250ZW50LFxuXHRjb21tZW50SW5kZXgsXG5cdHByb2plY3RVc2Vycyxcblx0c2V0UmVwbHlUb1VzZXIsXG5cdHJlbmRlckF1dGhvciA9IGZhbHNlLFxuXHRzaG93SW5pdGlhbFJlcGxpZXMgPSBmYWxzZSxcbn0pIHtcblx0LyogQ29udGFudHMgKi9cblx0Y29uc3QgeyBhdXRob3IsIGNyZWF0ZWQsIGNvbW1lbnQsIGNvbW1lbnRzIH0gPSBjb250ZW50O1xuXG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtzaG93UmVwbGllcywgc2V0U2hvd1JlcGxpZXNdID0gdXNlU3RhdGUoc2hvd0luaXRpYWxSZXBsaWVzKTtcblxuXHQvKiBSZW5kZXIgY29tcG9uZW50ICovXG5cdGNvbnN0IHJlbmRlckNvbW1lbnQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdXNlcnNSZWdleCA9IC9AXFxbW15cXF1dKlxcXVxce1swLTldK1xcfS9naTtcblx0XHRjb25zdCB1c2Vyc0FycmF5ID0gWy4uLmNvbW1lbnQubWF0Y2hBbGwodXNlcnNSZWdleCldO1xuXHRcdGNvbnN0IGNvbW1lbnRzID0gY29tbWVudC5zcGxpdCgvQFxcW1teXFxdXSpcXF1cXHtbMC05XStcXH0vZ2kpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxwIGNsYXNzTmFtZT1cImxoLS1tZFwiPlxuXHRcdFx0XHR7Y29tbWVudHMubWFwKChjb21tZW50LCBjb21tZW50SW5kZXgpID0+IHtcblx0XHRcdFx0XHRsZXQgdXNlcjtcblxuXHRcdFx0XHRcdGlmIChjb21tZW50SW5kZXggaW4gdXNlcnNBcnJheSkge1xuXHRcdFx0XHRcdFx0dXNlciA9IHByb2plY3RVc2Vycy5maW5kKCh1c2VyKSA9PiB1c2Vyc0FycmF5W2NvbW1lbnRJbmRleF1bMF0uaW5jbHVkZXModXNlci5kaXNwbGF5KSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudCBrZXk9e2NvbW1lbnRJbmRleH0+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvbW1lbnRfX2NvbnRlbnRcIj57YCR7Y29tbWVudH0gYH08L3NwYW4+eycgJ31cblx0XHRcdFx0XHRcdFx0e3VzZXIgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21tZW50X19tZW50aW9uIG1lbnRpb25zX19tZW50aW9uIHB4LTFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyAnLS10aGVtZSc6IHVzZXIudXNlckNvbG9yIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5Ae3VzZXIuZGlzcGxheX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+eycgJ31cblx0XHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L3A+XG5cdFx0KTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XG5cdFx0XHRcdHtyZW5kZXJBdXRob3IgJiYgKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCI+XG5cdFx0XHRcdFx0XHQ8VXNlciB7Li4ueyB1c2VyOiBhdXRob3IgfX0gLz5cblx0XHRcdFx0XHRcdDxVc2VySW5mb1xuXHRcdFx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBhdXRob3IuZGlzcGxheSxcblx0XHRcdFx0XHRcdFx0XHRzdWJ0aXRsZTogYC8gJHthdXRob3Iub3JnYW5pc2F0aW9ufWAsXG5cdFx0XHRcdFx0XHRcdFx0bGF5b3V0OiAnaG9yaXpvbnRhbCcsXG5cdFx0XHRcdFx0XHRcdFx0c2l6ZTogJ3NtJyxcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR7dHlwZW9mIGNvbW1lbnRJbmRleCAhPT0gJ3VuZGVmaW5lZCcgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWwtYXV0byBpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1oc2wgaWNvbi13cmFwcGVyLS1pbnRlcmFjdGl2ZVwiXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgJy0tdGhlbWUnOiBhdXRob3IudXNlckNvbG9yIH19PlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtLXhzXCI+e2NvbW1lbnRJbmRleCArIDF9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtyZW5kZXJDb21tZW50KCl9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtdC0xXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY29tbWVudF9fY3JlYXRlZCB0ZXh0LW11dGVkLS02MCBtYi0wIGhyLTJcIj57Y3JlYXRlZH08L3A+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY29tbWVudF9fYWdyZWUgdGV4dC1tdXRlZC0tNjAgbWItMCBoci0yIGZvbnQtd2VpZ2h0LW5vcm1hbFwiPjcgYWdyZWU8L3A+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tbWVudF9fcmVwbHktdG9nZ2xlIGJ0biBidG4tbGluayB0ZXh0LW11dGVkLS02MCBtYi0wIGhyLTIgZm9udC13ZWlnaHQtbm9ybWFsXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldFJlcGx5VG9Vc2VyKGF1dGhvcil9PlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYnRuLXRleHQgdGV4dC13aGl0ZVwiPlJlcGx5PC9zcGFuPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdHtjb21tZW50cy5sZW5ndGggPiAwICYmIChcblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tbWVudF9fcmVwbGllcy10b2dnbGUgYnRuIGJ0bi1saW5rIHRleHQtbXV0ZWQtLTYwIG1iLTAgaHItMiBmb250LXdlaWdodC1ub3JtYWwgbWwtYXV0byB0ZXh0LXdoaXRlXCJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0U2hvd1JlcGxpZXMoIXNob3dSZXBsaWVzKX0+XG5cdFx0XHRcdFx0XHRcdHtzaG93UmVwbGllcyA/ICdIaWRlJyA6ICdTaG93J30ge2NvbW1lbnRzLmxlbmd0aH0gcmVwbGllc1xuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtjb21tZW50cy5sZW5ndGggPiAwICYmIHNob3dSZXBsaWVzICYmIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRfX3JlcGxpZXNcIj5cblx0XHRcdFx0XHRcdHtjb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8UHJvamVjdFJldmlld0NvbW1lbnRcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17Y29tbWVudC5pZH1cblx0XHRcdFx0XHRcdFx0XHRcdHsuLi57IGNvbW1lbnQsIHByb2plY3RVc2Vycywgc2V0UmVwbHlUb1VzZXIsIHJlbmRlckF1dGhvcjogdHJ1ZSB9fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEJ1dHRvbiwgVXNlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudE1lbnRpb25zIGZyb20gJy4vUHJvamVjdFJldmlld0NvbW1lbnRNZW50aW9ucyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBTZXJ2aWNlcyAqL1xuaW1wb3J0IHsgY2FsY0NvbW1lbnRQb3MgfSBmcm9tICcuL3NlcnZpY2VzJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9tYWluQ29udGV4dCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgUVVFUllfS0VZUywgYWRkQ29tbWVudCB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU5fVVAgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZUNsb3NlT25Fc2MgfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCB7IFJldmlld0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0NvbW1lbnRBZGQoeyBtYXJrZXJQb3MsIHBoYXNlSWQsIHRvZ2dsZUNvbW1lbnRBZGRPcGVuIH0pIHtcblx0LyogUmVmcyAqL1xuXHRjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cdGNvbnN0IG1vZGFsUmVmID0gdXNlUmVmKCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgbGVmdCA9ICczMHB4JywgdG9wID0gJzMwcHgnIH0gPSBjYWxjQ29tbWVudFBvcyhtb2RhbFJlZiwgbWFya2VyUG9zKTtcblxuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFttZW50aW9ucywgc2V0TWVudGlvbnNdID0gdXNlU3RhdGUoW10pO1xuXG5cdC8qIEhvb2tzICovXG5cdHVzZUNsb3NlT25Fc2MobWFya2VyUG9zLCB0b2dnbGVDb21tZW50QWRkT3Blbik7XG5cdGNvbnN0IHsgY3VycmVudFVzZXI6IHVzZXIgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblx0Y29uc3QgeyBwcm9qZWN0SW1hZ2VJZCB9ID0gdXNlQ29udGV4dChSZXZpZXdDb250ZXh0KTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgYWRkQ29tbWVudE11dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkQ29tbWVudCwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9JTUFHRV9CWV9JRCwgcGFyc2VJbnQocHJvamVjdEltYWdlSWQpXSk7XG5cdFx0XHR0b2dnbGVDb21tZW50QWRkT3BlbigpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRsYXlvdXRcblx0XHRcdHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMSB9fVxuXHRcdFx0cmVmPXttb2RhbFJlZn1cblx0XHRcdGNsYXNzTmFtZT1cInJldmlld19fY3VzdG9tLW1vZGFsIGN1c3RvbS1tb2RhbFwiXG5cdFx0XHRzdHlsZT17eyAnLS1sZWZ0JzogbGVmdCwgJy0tdG9wJzogdG9wIH19PlxuXHRcdFx0PG1vdGlvbi5kaXYga2V5PVwiY3VzdG9tLW1vZGFsLWNvbnRlbnRcIiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2NvbnRlbnQgYm9yZGVyIHAtNVwiIHsuLi5GQURFX0lOX1VQKDUwKX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19oZWFkZXIgZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHctMTAwXCI+XG5cdFx0XHRcdFx0XHQ8VXNlciB7Li4ueyB1c2VyIH19IHNpemU9XCJ4bFwiIC8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMCBtbC0zXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtLWxnIG1iLTAgbGgtLW1kXCI+QWRkIGEgY29tbWVudDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fY2xvc2UgYnRuIGJ0bi1saW5rIG1sLWF1dG9cIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dG9nZ2xlQ29tbWVudEFkZE9wZW59PlxuXHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEyXCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi0wIHRleHQtLW1kIGxoLS1tZFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTYwXCI+Q29tbWVudCBvcjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeVwiPiBAbWVudGlvbiA8L3NwYW4+eycgJ31cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS02MFwiPnNvbWVvbmU8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2JvZHkgZC1mbGV4IG10LTRcIj5cblx0XHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdFx0cmVmPXtmb3JtUmVmfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LWdyb3ctMVwiXG5cdFx0XHRcdFx0XHRvblN1Ym1pdD17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdGlmIChjb21tZW50Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0XHRhZGRDb21tZW50TXV0YXRpb24ubXV0YXRlKHtcblx0XHRcdFx0XHRcdFx0XHRcdHVzZXJJZDogdXNlci5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdHBoYXNlSWQ6IHBoYXNlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRjb21tZW50OiBjb21tZW50LnRyaW0oKSxcblx0XHRcdFx0XHRcdFx0XHRcdG1lbnRpb25lZDogbWVudGlvbnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogbWFya2VyUG9zLFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cImNvbW1lbnRcIj5cblx0XHRcdFx0XHRcdFx0QWRkIGEgY29tbWVudFxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmUgdy0xMDBcIj5cblx0XHRcdFx0XHRcdFx0PFByb2plY3RSZXZpZXdDb21tZW50TWVudGlvbnNcblx0XHRcdFx0XHRcdFx0XHR7Li4ueyBjb21tZW50LCBzZXRDb21tZW50LCBtZW50aW9ucywgc2V0TWVudGlvbnMsIGF1dG9Gb2N1czogdHJ1ZSB9fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0ZXh0ZW5zaW9uQ2xhc3Nlcz1cImZvcm0tY29udHJvbC1idG5cIlxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnRUeXBlPVwiaWNvblwiXG5cdFx0XHRcdFx0XHRcdFx0dGhlbWU9XCJkZWZhdWx0XCJcblx0XHRcdFx0XHRcdFx0XHR7Li4ueyBpc0xvYWRpbmc6IGFkZENvbW1lbnRNdXRhdGlvbi5pc0xvYWRpbmcgfX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgTWVudGlvbnNJbnB1dCwgTWVudGlvbiB9IGZyb20gJ3JlYWN0LW1lbnRpb25zJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkVXNlckljb24gZnJvbSAnaWNvbnMvYWRkX3VzZXIuc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlckF2YXRhciwgVXNlckluZm8gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VzZXJzL1VzZXInO1xuXG4vKiBTZXJ2aWNlcyAqL1xuaW1wb3J0IHN0eWxlTWVudGlvbnMgZnJvbSAnLi9zZXJ2aWNlcy9zdHlsZU1lbnRpb24nO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IFFVRVJZX0tFWVMsIGZldGNoUHJvamVjdFVzZXJzIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IHsgUmV2aWV3Q29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3Q29tbWVudE1lbnRpb25zKHtcblx0Y29tbWVudCxcblx0c2V0Q29tbWVudCxcblx0bWVudGlvbnMsXG5cdHNldE1lbnRpb25zLFxuXHRhdXRvRm9jdXMgPSBmYWxzZSxcbn0pIHtcblx0LyogQ29udGV4dCAqL1xuXHRjb25zdCB7IHByb2plY3RJZCB9ID0gdXNlQ29udGV4dChSZXZpZXdDb250ZXh0KTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgZGF0YTogcHJvamVjdFVzZXJzID0gW10gfSA9IHVzZVF1ZXJ5KFFVRVJZX0tFWVMuUFJPSkVDVF9VU0VSUywgKCkgPT4gZmV0Y2hQcm9qZWN0VXNlcnMoeyBwcm9qZWN0SWQgfSkpO1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgbWVudGlvblJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIEVmZmVjdHMgKi9cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAobWVudGlvbnMubGVuZ3RoID4gMCAmJiBtZW50aW9uUmVmPy5jdXJyZW50KSBzdHlsZU1lbnRpb25zKHByb2plY3RVc2VycywgbWVudGlvblJlZi5jdXJyZW50KTtcblx0fSwgW21lbnRpb25zLCBtZW50aW9uUmVmPy5jdXJyZW50XSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxNZW50aW9uc0lucHV0XG5cdFx0XHRcdHZhbHVlPXtjb21tZW50fVxuXHRcdFx0XHRjbGFzc05hbWU9XCJtZW50aW9uc1wiXG5cdFx0XHRcdGlkPVwiY29tbWVudFwiXG5cdFx0XHRcdG5hbWU9XCJjb21tZW50XCJcblx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTYXkgc29tZXRoaW5nIG5pY2UuLi5cIlxuXHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRDb21tZW50KGV2ZW50LnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHN0eWxlTWVudGlvbnMocHJvamVjdFVzZXJzKX1cblx0XHRcdFx0aW5wdXRSZWY9e21lbnRpb25SZWZ9XG5cdFx0XHRcdGF1dG9Gb2N1cz17YXV0b0ZvY3VzfT5cblx0XHRcdFx0PE1lbnRpb25cblx0XHRcdFx0XHR0cmlnZ2VyPVwiQFwiXG5cdFx0XHRcdFx0ZGF0YT17cHJvamVjdFVzZXJzfVxuXHRcdFx0XHRcdHJlbmRlclN1Z2dlc3Rpb249e1N1Z2dlc3Rpb259XG5cdFx0XHRcdFx0YWxsb3dTcGFjZUluUXVlcnlcblx0XHRcdFx0XHRhcHBlbmRTcGFjZU9uQWRkXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWVudGlvbnNfX21lbnRpb25cIlxuXHRcdFx0XHRcdGRpc3BsYXlUcmFuc2Zvcm09eyhfLCBuYW1lKSA9PiBgIEAke25hbWV9IGB9XG5cdFx0XHRcdFx0bWFya3VwPVwiQFtfX2Rpc3BsYXlfX117X19pZF9ffVwiXG5cdFx0XHRcdFx0b25BZGQ9eyhpZCkgPT4gc2V0TWVudGlvbnMoKG1lbnRpb25zKSA9PiBbLi4ubWVudGlvbnMsIGlkXSl9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L01lbnRpb25zSW5wdXQ+XG5cdFx0PC8+XG5cdCk7XG59XG5cbi8qIEN1c3RvbSBTdWdnZXN0aW9uICovXG5jb25zdCBTdWdnZXN0aW9uID0gKGVudHJ5LCBxdWVyeSwgaGlnaGxpZ2h0ZWQsIGluZGV4LCBmb2N1c2VkKSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwibWVudGlvbl9fc3VnZ2VzdGlvbiB2ci0zXCI+XG5cdFx0PGJ1dHRvbiBjbGFzc05hbWU9e2B1c2VyIHVzZXItLXNlbGVjdCB1c2VyLS14bCAke2ZvY3VzZWQgJiYgJ2lzLWZvY3VzZWQnfWB9IHR5cGU9XCJidXR0b25cIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHQ8VXNlckF2YXRhciB7Li4uZW50cnl9IC8+XG5cdFx0XHRcdDxVc2VySW5mb1xuXHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHR0aXRsZTogZW50cnkuZGlzcGxheSxcblx0XHRcdFx0XHRcdHN1YnRpdGxlOiBlbnRyeS5vcmdhbmlzYXRpb24gPyBlbnRyeS5vcmdhbmlzYXRpb24gOiAnTm8gb3JnYW5pc2F0aW9uJyxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXJfX2FkZCB0ZXh0LXNlY29uZGFyeSByb3VuZGVkLWNpcmNsZSBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19hZGQtaWNvbiBpY29uIGljb24tLTEyIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXthZGRVc2VySWNvbn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2J1dHRvbj5cblx0PC9kaXY+XG4pO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgRkFERV9JTl9VUCB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IFByb2plY3RSZXZpZXdNYXJrZXIgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3TWFya2VyJztcbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudCBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50JztcbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudFJlcGx5IGZyb20gJy4vUHJvamVjdFJldmlld0NvbW1lbnRSZXBseSc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBTZXJ2aWNlcyAqL1xuaW1wb3J0IHsgY2FsY0NvbW1lbnRQb3MgfSBmcm9tICcuL3NlcnZpY2VzJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZUNsb3NlT25Fc2MgfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXdDb21tZW50TW9kYWwoeyBjb21tZW50LCBjb21tZW50SW5kZXgsIHRvZ2dsZUNvbW1lbnRBZGRPcGVuLCAuLi5yZXN0IH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgcG9zaXRpb24sIGF1dGhvciwgaWQgfSA9IGNvbW1lbnQ7XG5cdGNvbnN0IHsgeFBlcmNlbnQsIHlQZXJjZW50IH0gPSBwb3NpdGlvbjtcblxuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbY29tbWVudE9wZW4sIHNldENvbW1lbnRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlQ29tbWVudCA9ICgpID0+IHtcblx0XHRpZiAoIWNvbW1lbnRPcGVuKSB0b2dnbGVDb21tZW50QWRkT3BlbigpO1xuXHRcdHNldENvbW1lbnRPcGVuKCFjb21tZW50T3Blbik7XG5cdH07XG5cblx0LyogSG9va3MgKi9cblx0dXNlQ2xvc2VPbkVzYyhjb21tZW50T3Blbiwgc2V0Q29tbWVudE9wZW4pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxQcm9qZWN0UmV2aWV3TWFya2VyXG5cdFx0XHR7Li4ueyB4UGVyY2VudCwgeVBlcmNlbnQsIGF1dGhvciwgY29tbWVudEluZGV4OiBjb21tZW50SW5kZXggKyAxLCBjb21tZW50T3BlbiwgdG9nZ2xlQ29tbWVudCB9fT5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHtjb21tZW50T3BlbiAmJiA8Q29tbWVudEJveCBrZXk9e2lkfSB7Li4ueyBjb21tZW50LCB0b2dnbGVDb21tZW50LCAuLi5yZXN0IH19IC8+fVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC9Qcm9qZWN0UmV2aWV3TWFya2VyPlxuXHQpO1xufVxuXG5jb25zdCBDb21tZW50Qm94ID0gKHsgY29tbWVudCwgdG9nZ2xlQ29tbWVudCwgcmV2aWV3UmVmLCAuLi5yZXN0IH0pID0+IHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgcG9zaXRpb24sIGF1dGhvciB9ID0gY29tbWVudDtcblxuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbdHJhbnNmb3JtZWRQb3MsIHNldFRyYW5zZm9ybWVkUG9zXSA9IHVzZVN0YXRlKHBvc2l0aW9uKTtcblx0Y29uc3QgW3JlcGx5VG9Vc2VyLCBzZXRSZXBseVRvVXNlcl0gPSB1c2VTdGF0ZSgpO1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgYm94UmVmID0gdXNlUmVmKCk7XG5cblx0LyogRWZmZWN0cyAqL1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChwb3NpdGlvbikge1xuXHRcdFx0c2V0VHJhbnNmb3JtZWRQb3MoKCkgPT4ge1xuXHRcdFx0XHRwb3NpdGlvbi5yZXZpZXdQb3MgPSByZXZpZXdSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0cmV0dXJuIGNhbGNDb21tZW50UG9zKGJveFJlZiwgcG9zaXRpb24pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCBbcG9zaXRpb25dKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwicmV2aWV3X19jdXN0b20tbW9kYWwgY3VzdG9tLW1vZGFsXCJcblx0XHRcdHN0eWxlPXt7ICctLWxlZnQnOiB0cmFuc2Zvcm1lZFBvcy5sZWZ0LCAnLS10b3AnOiB0cmFuc2Zvcm1lZFBvcy50b3AgfX0+XG5cdFx0XHQ8bW90aW9uLmRpdiBrZXk9XCJjdXN0b20tbW9kYWwtY29udGVudFwiIGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fY29udGVudCBib3JkZXIgcC01XCIgey4uLkZBREVfSU5fVVAoNTApfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2hlYWRlciBkLWZsZXggYWxpZ24taXRlbXMtc3RhcnRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDBcIj5cblx0XHRcdFx0XHRcdDxVc2VyIHsuLi57IHVzZXI6IGF1dGhvciB9fSBzaXplPVwieGxcIiAvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0xMDAgbWwtM1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LS1sZyBtYi0wIGxoLS1tZFwiPnthdXRob3IuZGlzcGxheX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Nsb3NlIGJ0biBidG4tbGluayBtbC1hdXRvXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZUNvbW1lbnR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEyXCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS02MCBtYi0wIHRleHQtLXNtIGxoLS14c1wiPnthdXRob3Iub3JnYW5pc2F0aW9ufTwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2JvZHkgZC1mbGV4IG10LTRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMFwiPlxuXHRcdFx0XHRcdFx0PFByb2plY3RSZXZpZXdDb21tZW50IHsuLi57IGNvbW1lbnQsIHNldFJlcGx5VG9Vc2VyLCBzaG93SW5pdGlhbFJlcGxpZXM6IHRydWUsIC4uLnJlc3QgfX0gLz5cblx0XHRcdFx0XHRcdHtyZXBseVRvVXNlciAmJiAoXG5cdFx0XHRcdFx0XHRcdDxQcm9qZWN0UmV2aWV3Q29tbWVudFJlcGx5XG5cdFx0XHRcdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdFx0XHRcdHJlcGx5VG86IHJlcGx5VG9Vc2VyLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y29tbWVudElkOiBjb21tZW50LmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UmVwbHlUb1VzZXI6IHNldFJlcGx5VG9Vc2VyLFxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudCBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50JztcbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudFJlcGx5IGZyb20gJy4vUHJvamVjdFJldmlld0NvbW1lbnRSZXBseSc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNMSURFX0lOIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlQ2xvc2VPbkVzYyB9IGZyb20gJy4uLy4uL2hvb2tzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0NvbW1lbnRQYW5lbCh7IGNvbW1lbnRzLCBjb21tZW50c1BhbmVsT3BlbiwgdG9nZ2xlQ29tbWVudHNQYW5lbCwgcHJvamVjdFVzZXJzIH0pIHtcblx0LyogSG9va3MgKi9cblx0dXNlQ2xvc2VPbkVzYyhjb21tZW50c1BhbmVsT3BlbiwgdG9nZ2xlQ29tbWVudHNQYW5lbCk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXYgey4uLlNMSURFX0lOfSBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC0tY29tbWVudHNcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWxfX2JvZHlcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmUganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItNlwiPlxuXHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWNhcGl0YWxpemVcIj5BbGwgY29tbWVudHM8L2g1PlxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInBhbmVsX19jbG9zZSBidG4gYnRuLWxpbmsgbWwtYXV0b1wiIG9uQ2xpY2s9e3RvZ2dsZUNvbW1lbnRzUGFuZWx9PlxuXHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEyXCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMFwiPlxuXHRcdFx0XHRcdHtjb21tZW50cz8ucmV2ZXJzZSgpLm1hcCgoY29tbWVudCwgY29tbWVudEluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHQ8Q29tbWVudFdpdGhSZXBseSBrZXk9e2NvbW1lbnRJbmRleH0gey4uLnsgY29tbWVudCwgY29tbWVudEluZGV4LCBwcm9qZWN0VXNlcnMgfX0gLz5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHR7Y29tbWVudHMubGVuZ3RoID09PSAwICYmIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTcwXCI+Tm8gY29tbWVudHMgeWV0PC9wPn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59XG5cbmNvbnN0IENvbW1lbnRXaXRoUmVwbHkgPSAoeyBjb21tZW50LCBjb21tZW50SW5kZXgsIHByb2plY3RVc2VycyB9KSA9PiB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtyZXBseVRvVXNlciwgc2V0UmVwbHlUb1VzZXJdID0gdXNlU3RhdGUoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8UHJvamVjdFJldmlld0NvbW1lbnQgey4uLnsgY29tbWVudCwgY29tbWVudEluZGV4LCBzZXRSZXBseVRvVXNlciwgcmVuZGVyQXV0aG9yOiB0cnVlLCBwcm9qZWN0VXNlcnMgfX0gLz5cblx0XHRcdHtyZXBseVRvVXNlciAmJiAoXG5cdFx0XHRcdDxQcm9qZWN0UmV2aWV3Q29tbWVudFJlcGx5XG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdHJlcGx5VG86IHJlcGx5VG9Vc2VyLFxuXHRcdFx0XHRcdFx0Y29tbWVudElkOiBjb21tZW50LmlkLFxuXHRcdFx0XHRcdFx0c2V0UmVwbHlUb1VzZXI6IHNldFJlcGx5VG9Vc2VyLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQpfVxuXHRcdDwvPlxuXHQpO1xufTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlciwgQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdXNlcnMvVXNlcic7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCB7IFN0YXRpY0NvbnRleHQsIFJldmlld0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuLyogRG9tYWluICovXG5pbXBvcnQgUHJvamVjdFJldmlld0NvbW1lbnRNZW50aW9ucyBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50TWVudGlvbnMnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGFkZFJlcGx5LCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0NvbW1lbnRSZXBseSh7IHJlcGx5VG8sIGNvbW1lbnRJZCwgc2V0UmVwbHlUb1VzZXIgfSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbcmVwbHksIHNldFJlcGx5XSA9IHVzZVN0YXRlKCk7XG5cdGNvbnN0IFttZW50aW9ucywgc2V0TWVudGlvbnNdID0gdXNlU3RhdGUoW10pO1xuXG5cdC8qIEVmZmVjdHMgKi9cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRSZXBseShgQFske3JlcGx5VG8uZGlzcGxheX1deyR7cmVwbHlUby5pZH19IGApO1xuXHRcdHNldE1lbnRpb25zKFtyZXBseVRvLmlkXSk7XG5cdH0sIFtyZXBseVRvXSk7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBjdXJyZW50VXNlciB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXHRjb25zdCB7IHByb2plY3RJbWFnZUlkIH0gPSB1c2VDb250ZXh0KFJldmlld0NvbnRleHQpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBhZGRSZXBseU11dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkUmVwbHksIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfSU1BR0VfQllfSUQsIHBhcnNlSW50KHByb2plY3RJbWFnZUlkKV0pO1xuXHRcdFx0c2V0UmVwbHlUb1VzZXIobnVsbCk7XG5cdFx0fSxcblx0fSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGZvcm1cblx0XHRcdGNsYXNzTmFtZT1cInJlcGx5XCJcblx0XHRcdG9uU3VibWl0PXsoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0YWRkUmVwbHlNdXRhdGlvbi5tdXRhdGUoe1xuXHRcdFx0XHRcdGNvbW1lbnRJZDogY29tbWVudElkLFxuXHRcdFx0XHRcdHJlcGx5OiByZXBseSxcblx0XHRcdFx0XHRtZW50aW9uZWQ6IG1lbnRpb25zLFxuXHRcdFx0XHR9KTtcblx0XHRcdH19PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxVc2VyIHsuLi57IHVzZXI6IGN1cnJlbnRVc2VyIH19IC8+XG5cdFx0XHRcdDxVc2VySW5mb1xuXHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHR0aXRsZTogY3VycmVudFVzZXIuZGlzcGxheSxcblx0XHRcdFx0XHRcdHN1YnRpdGxlOiBgLyAke2N1cnJlbnRVc2VyLm9yZ2FuaXNhdGlvbn1gLFxuXHRcdFx0XHRcdFx0bGF5b3V0OiAnaG9yaXpvbnRhbCcsXG5cdFx0XHRcdFx0XHRzaXplOiAnc20nLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cblx0XHRcdFx0PFByb2plY3RSZXZpZXdDb21tZW50TWVudGlvbnMgey4uLnsgY29tbWVudDogcmVwbHksIHNldENvbW1lbnQ6IHNldFJlcGx5LCBtZW50aW9ucywgc2V0TWVudGlvbnMgfX0gLz5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGV4dGVuc2lvbkNsYXNzZXM9XCJmb3JtLWNvbnRyb2wtYnRuXCJcblx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRjb250ZW50VHlwZT1cImljb25cIlxuXHRcdFx0XHRcdHRoZW1lPVwiZGVmYXVsdFwiXG5cdFx0XHRcdFx0ey4uLnsgaXNMb2FkaW5nOiBhZGRSZXBseU11dGF0aW9uLmlzTG9hZGluZyB9fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9mb3JtPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENsaWNrQXdheUxpc3RlbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTQ0FMRV9GQURFIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3TWFya2VyKHtcblx0eFBlcmNlbnQsXG5cdHlQZXJjZW50LFxuXHRhdXRob3IsXG5cdGNvbW1lbnRJbmRleCxcblx0Y29tbWVudE9wZW4sXG5cdHRvZ2dsZUNvbW1lbnQsXG5cdGNoaWxkcmVuLFxufSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXHRjb25zdCB1c2VyID0gYXV0aG9yID8gYXV0aG9yIDogY3VycmVudFVzZXI7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PENsaWNrQXdheUxpc3RlbmVyXG5cdFx0XHRvbkNsaWNrQXdheT17KCkgPT4ge1xuXHRcdFx0XHRpZiAoY29tbWVudE9wZW4pIHRvZ2dsZUNvbW1lbnQoKTtcblx0XHRcdH19PlxuXHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0bGF5b3V0XG5cdFx0XHRcdHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMSB9fVxuXHRcdFx0XHRjbGFzc05hbWU9XCJyZXZpZXdfX2ludGVyYWN0aW9uXCJcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHQnLS14JzogeFBlcmNlbnQsXG5cdFx0XHRcdFx0Jy0teSc6IHlQZXJjZW50LFxuXHRcdFx0XHR9fT5cblx0XHRcdFx0PG1vdGlvbi5idXR0b25cblx0XHRcdFx0XHR7Li4uU0NBTEVfRkFERX1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJyZXZpZXdfX21hcmtlciBpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnkgYnRuIGJ0bi1saW5rIHRleHQtcmVzZXRcIlxuXHRcdFx0XHRcdHN0eWxlPXt7ICctLXRoZW1lJzogYCR7dXNlci51c2VyQ29sb3J9YCB9fVxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZUNvbW1lbnR9PlxuXHRcdFx0XHRcdHtjb21tZW50SW5kZXggJiYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0teHNcIj57Y29tbWVudEluZGV4fTwvc3Bhbj59XG5cdFx0XHRcdDwvbW90aW9uLmJ1dHRvbj5cblx0XHRcdFx0PGRpdj57Y2hpbGRyZW59PC9kaXY+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0PC9DbGlja0F3YXlMaXN0ZW5lcj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IHsgUmV2aWV3Q29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjaGV2cm9uSWNvbiBmcm9tICdpY29ucy9jaGV2cm9uLnN2Zyc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VFdmVudExpc3RlbmVyIH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3UGFnaW5hdGlvbih7IGFsbEltYWdlcyB9KSB7XG5cdC8qIEhvb2tzICovXG5cdHVzZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgaGFuZGxlS2V5VXApO1xuXHRjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG5cdC8qIENvbnRleHQgKi9cblx0Y29uc3QgeyBwcm9qZWN0SW1hZ2VJZCB9ID0gdXNlQ29udGV4dChSZXZpZXdDb250ZXh0KTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgY3VycmVudEltYWdlID0gYWxsSW1hZ2VzLmluZGV4T2YoTnVtYmVyKHByb2plY3RJbWFnZUlkKSk7XG5cdGNvbnN0IHByZXZJbWFnZSA9IGFsbEltYWdlc1tjdXJyZW50SW1hZ2UgPT09IDAgPyBhbGxJbWFnZXMubGVuZ3RoIC0gMSA6IGN1cnJlbnRJbWFnZSAtIDFdO1xuXHRjb25zdCBuZXh0SW1hZ2UgPSBhbGxJbWFnZXNbY3VycmVudEltYWdlID09PSBhbGxJbWFnZXMubGVuZ3RoIC0gMSA/IDAgOiBjdXJyZW50SW1hZ2UgKyAxXTtcblxuXHRmdW5jdGlvbiBoYW5kbGVLZXlVcChldmVudCkge1xuXHRcdGlmIChldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnICYmIHByZXZJbWFnZSkgbmF2aWdhdGUoJ3ByZXYnKTtcblx0XHRpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dSaWdodCcgJiYgbmV4dEltYWdlKSBuYXZpZ2F0ZSgnbmV4dCcpO1xuXHR9XG5cblx0Y29uc3QgbmF2aWdhdGUgPSAoZGlyZWN0aW9uKSA9PiB7XG5cdFx0aWYgKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKSBoaXN0b3J5LnB1c2gocHJldkltYWdlLnRvU3RyaW5nKCkpO1xuXHRcdGlmIChkaXJlY3Rpb24gPT09ICduZXh0JykgaGlzdG9yeS5wdXNoKG5leHRJbWFnZS50b1N0cmluZygpKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdGFsbEltYWdlcy5sZW5ndGggPiAxICYmIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25fX2J0bi13cmFwcGVyIHBhZ2luYXRpb25fX2J0bi13cmFwcGVyLS1wcmV2XCI+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicGFnaW5hdGlvbl9fYnRuIHBhZ2luYXRpb25fX2J0bi0tcHJldiBidG4gYnRuLWxpbmsgdGV4dC1yZXNldFwiXG5cdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCdwcmV2Jyl9PlxuXHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uX19pY29uIGljb24gaWNvbi0tMTJcIiBzcmM9e2NoZXZyb25JY29ufSAvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uX19idG4td3JhcHBlciBwYWdpbmF0aW9uX19idG4td3JhcHBlci0tbmV4dFwiPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBhZ2luYXRpb25fX2J0biBwYWdpbmF0aW9uX19idG4tLW5leHQgYnRuIGJ0bi1saW5rIHRleHQtcmVzZXRcIlxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnbmV4dCcpfT5cblx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwicGFnaW5hdGlvbl9faWNvbiBpY29uIGljb24tLTEyXCIgc3JjPXtjaGV2cm9uSWNvbn0gLz5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RSZXZpZXdDYW52YXMgfSBmcm9tICcuL1Byb2plY3RSZXZpZXdDYW52YXMnO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsY0NvbW1lbnRQb3MocmVmLCBwb3MpIHtcblx0Y29uc3QgbWFya2VyU3BhY2VyID0gMTA7XG5cdGNvbnN0IG1hcmtlclNpemUgPSAyMDtcblx0Y29uc3Qgb2Zmc2V0ID0gbWFya2VyU2l6ZSArIG1hcmtlclNwYWNlcjtcblxuXHQvKiBHZXQgcG9zaXRpb24gb2YgbWFya2VyICovXG5cdGNvbnN0IHJldmlld1BvcyA9IHBvcy5yZXZpZXdQb3M7XG5cdGNvbnN0IHhQZXJjZW50ID0gTnVtYmVyKHBvcy54UGVyY2VudCk7XG5cdGNvbnN0IHlQZXJjZW50ID0gTnVtYmVyKHBvcy55UGVyY2VudCk7XG5cblx0LyogR2V0IGRpbWVuc2lvbnMgb2YgY3VycmVudCBib3ggKi9cblx0Y29uc3QgeyB3aWR0aDogYm94V2lkdGggPSA0MDAsIGhlaWdodDogYm94SGVpZ2h0ID0gMjI4IH0gPSByZWY/LmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIHx8IHt9O1xuXG5cdC8qIEdldCBkaW1lbnNpb25zIG9mIGN1cnJlbnQgc2NyZWVuICovXG5cdGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdGNvbnN0IGJveFBlcmNlbnRXaWR0aCA9IChib3hXaWR0aCAvIHNjcmVlbldpZHRoKSAqIDEwMDtcblxuXHRjb25zdCBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSByZXZpZXdQb3MudG9wO1xuXHRjb25zdCBib3hQZXJjZW50SGVpZ2h0ID0gKGJveEhlaWdodCAvIHNjcmVlbkhlaWdodCkgKiAxMDA7XG5cblx0LyogU2V0IHggYW5kIHkgdmFsdWVzIHRvIHBlcmNlbnRhZ2UgZXF1aXZlbGVudCB0byBtYWtlIHRoZSBib3ggcmVzcG9uc2l2ZSAqL1xuXHRsZXQgbGVmdCA9IG9mZnNldDtcblx0bGV0IHRvcCA9IG9mZnNldDtcblxuXHQvKiBDb21wZW5zYXRlIGZvciB0aGUgYm94V2lkdGggaWYgbWFya2VyIGlzIGF0IGVuZCBvZiBob3Jpem9udGFsIHNjcmVlbiAqL1xuXHRpZiAoeFBlcmNlbnQgKyBib3hQZXJjZW50V2lkdGggPiAxMDApIHtcblx0XHRsZWZ0ID0gLWJveFdpZHRoIC0gbWFya2VyU3BhY2VyO1xuXHR9XG5cblx0LyogQ29tcGVuc2F0ZSBmb3IgdGhlIGJveEhlaWdodCBpZiBtYXJrZXIgaXMgYXQgZW5kIG9mIHZlcnRpY2FsIHNjcmVlbiAqL1xuXHRpZiAoeVBlcmNlbnQgKyBib3hQZXJjZW50SGVpZ2h0ID4gMTAwKSB7XG5cdFx0dG9wID0gLWJveEhlaWdodCAtIG1hcmtlclNwYWNlcjtcblx0fVxuXG5cdHJldHVybiB7IGxlZnQ6IGAke2xlZnR9cHhgLCB0b3A6IGAke3RvcH1weGAgfTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2FsY0NvbW1lbnRQb3MgfSBmcm9tICcuL2NhbGNDb21tZW50UG9zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3R5bGVNZW50aW9uIH0gZnJvbSAnLi9zdHlsZU1lbnRpb24nO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3R5bGVNZW50aW9ucyh1c2VycywgaW5wdXQpIHtcblx0Y29uc3QgbWVudGlvbk5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnRpb25zIC5tZW50aW9uc19fbWVudGlvbicpIHx8IFtdO1xuXG5cdGlmIChtZW50aW9uTm9kZXMubGVuZ3RoID4gMCkge1xuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtZW50aW9uTm9kZXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRjb25zdCBtZW50aW9uID0gbWVudGlvbk5vZGVzW2luZGV4XTtcblxuXHRcdFx0Y29uc3QgbWVudGlvbklubmVyID0gbWVudGlvbi5pbm5lckhUTUwucmVwbGFjZSgnQCcsICcnKS50cmltKCk7XG5cdFx0XHRjb25zdCB1c2VyT2ZNZW50aW9uID0gdXNlcnMuZmluZCgodXNlcikgPT4gdXNlci5kaXNwbGF5ID09PSBtZW50aW9uSW5uZXIpO1xuXG5cdFx0XHRtZW50aW9uLnN0eWxlLnNldFByb3BlcnR5KCctLXRoZW1lJywgdXNlck9mTWVudGlvbi51c2VyQ29sb3IpO1xuXG5cdFx0XHRpZiAoaW5wdXQpIHtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0aW5wdXQuZm9jdXMoKTtcblx0XHRcdFx0XHRpbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSgyMDAsIC0xKTtcblx0XHRcdFx0fSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIHVzZVNlbGVjdGlvbiB9IGZyb20gJy4vdXNlU2VsZWN0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlUGFnZVRpdGxlIH0gZnJvbSAnLi91c2VQYWdlVGl0bGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VTdG9yYWdlIH0gZnJvbSAnLi91c2VTdG9yYWdlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4vdXNlRXZlbnRMaXN0ZW5lcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUNsb3NlT25Fc2MgfSBmcm9tICcuL3VzZUNsb3NlT25Fc2MnO1xuIiwiLyogUGFja2FncyAqL1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbi8qIEN1c3RvbSBob29rICovXG5pbXBvcnQgdXNlRXZlbnRMaXN0ZW5lciBmcm9tICcuL3VzZUV2ZW50TGlzdGVuZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDbG9zZU9uRXNjKHN0YXR1cywgdG9nZ2xlKSB7XG5cdC8qIENhbGxiYWNrICovXG5cdGNvbnN0IGhhbmRsZUtleVVwID0gdXNlQ2FsbGJhY2soKHsga2V5IH0pID0+IHtcblx0XHRpZiAoWydFc2NhcGUnXS5pbmNsdWRlcyhrZXkpICYmIHN0YXR1cykgdG9nZ2xlKCk7XG5cdH0pO1xuXG5cdC8qIEhvb2sgKi9cblx0dXNlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBoYW5kbGVLZXlVcCk7XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGVsZW1lbnQgPSB3aW5kb3cpIHtcblx0Ly8gQ3JlYXRlIGEgcmVmIHRoYXQgc3RvcmVzIGhhbmRsZXJcblx0Y29uc3Qgc2F2ZWRIYW5kbGVyID0gdXNlUmVmKCk7XG5cdC8vIFVwZGF0ZSByZWYuY3VycmVudCB2YWx1ZSBpZiBoYW5kbGVyIGNoYW5nZXMuXG5cdC8vIFRoaXMgYWxsb3dzIG91ciBlZmZlY3QgYmVsb3cgdG8gYWx3YXlzIGdldCBsYXRlc3QgaGFuZGxlciAuLi5cblx0Ly8gLi4uIHdpdGhvdXQgdXMgbmVlZGluZyB0byBwYXNzIGl0IGluIGVmZmVjdCBkZXBzIGFycmF5IC4uLlxuXHQvLyAuLi4gYW5kIHBvdGVudGlhbGx5IGNhdXNlIGVmZmVjdCB0byByZS1ydW4gZXZlcnkgcmVuZGVyLlxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNhdmVkSGFuZGxlci5jdXJyZW50ID0gaGFuZGxlcjtcblx0fSwgW2hhbmRsZXJdKTtcblxuXHR1c2VFZmZlY3QoXG5cdFx0KCkgPT4ge1xuXHRcdFx0Ly8gTWFrZSBzdXJlIGVsZW1lbnQgc3VwcG9ydHMgYWRkRXZlbnRMaXN0ZW5lclxuXHRcdFx0Ly8gT25cblx0XHRcdGNvbnN0IGlzU3VwcG9ydGVkID0gZWxlbWVudCAmJiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXI7XG5cdFx0XHRpZiAoIWlzU3VwcG9ydGVkKSByZXR1cm47XG5cdFx0XHQvLyBDcmVhdGUgZXZlbnQgbGlzdGVuZXIgdGhhdCBjYWxscyBoYW5kbGVyIGZ1bmN0aW9uIHN0b3JlZCBpbiByZWZcblx0XHRcdGNvbnN0IGV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHNhdmVkSGFuZGxlci5jdXJyZW50KGV2ZW50KTtcblx0XHRcdC8vIEFkZCBldmVudCBsaXN0ZW5lclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcik7XG5cdFx0XHQvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgb24gY2xlYW51cFxuXHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcik7XG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0W2V2ZW50TmFtZSwgZWxlbWVudF0gLy8gUmUtcnVuIGlmIGV2ZW50TmFtZSBvciBlbGVtZW50IGNoYW5nZXNcblx0KTtcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUGFnZVRpdGxlKHRpdGxlLCB1cGRhdGVQcm9wcyA9IFtdKSB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZG9jdW1lbnQudGl0bGUgPSBgJHt0aXRsZSA/IHRpdGxlICsgJyB8IFBhcmFsbGVsIERhc2hib2FyZCcgOiBkb2N1bWVudC50aXRsZX1gO1xuXHR9LCBbLi4udXBkYXRlUHJvcHNdKTtcbn1cbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTZWxlY3Rpb24oKSB7XG5cdGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoW10pO1xuXG5cdGNvbnN0IHVwZGF0ZVNlbGVjdGVkID0gKGlkKSA9PiB7XG5cdFx0c2V0U2VsZWN0ZWQoKHNlbGVjdGVkKSA9PiB7XG5cdFx0XHRpZiAoc2VsZWN0ZWQuaW5jbHVkZXMoaWQpKSB7XG5cdFx0XHRcdHJldHVybiBzZWxlY3RlZC5maWx0ZXIoKHNlbGVjdGVkSWQpID0+IHNlbGVjdGVkSWQgIT09IGlkKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFsuLi5zZWxlY3RlZCwgaWRdO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlc2V0U2VsZWN0ZWQgPSAoKSA9PiBzZXRTZWxlY3RlZChbXSk7XG5cblx0cmV0dXJuIHsgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkLCByZXNldFNlbGVjdGVkIH07XG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLy8gSG9va1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU3RvcmFnZShrZXksIGluaXRpYWxWYWx1ZSwgc3RvcmFnZVR5cGUgPSAnc2Vzc2lvblN0b3JhZ2UnKSB7XG5cdC8vIFN0YXRlIHRvIHN0b3JlIG91ciB2YWx1ZVxuXHQvLyBQYXNzIGluaXRpYWwgc3RhdGUgZnVuY3Rpb24gdG8gdXNlU3RhdGUgc28gbG9naWMgaXMgb25seSBleGVjdXRlZCBvbmNlXG5cdGNvbnN0IFtzdG9yZWRWYWx1ZSwgc2V0U3RvcmVkVmFsdWVdID0gdXNlU3RhdGUoKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBHZXQgZnJvbSBsb2NhbCBzdG9yYWdlIGJ5IGtleVxuXHRcdFx0Y29uc3QgaXRlbSA9IHdpbmRvd1tzdG9yYWdlVHlwZV0uZ2V0SXRlbShrZXkpO1xuXG5cdFx0XHQvLyBJZiBubyBpdGVtIHZhbHVlIGFuZCBpbml0aWFsVmFsdWUgaXMgcHJlc2VudCwgc2V0IGFzIHZhbHVlXG5cdFx0XHRpZiAoaW5pdGlhbFZhbHVlICYmICFpdGVtKSB7XG5cdFx0XHRcdHdpbmRvd1tzdG9yYWdlVHlwZV0uc2V0SXRlbShrZXksIGluaXRpYWxWYWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFBhcnNlIHN0b3JlZCBqc29uIG9yIGlmIG5vbmUgcmV0dXJuIGluaXRpYWxWYWx1ZVxuXHRcdFx0cmV0dXJuIGl0ZW0gPyBKU09OLnBhcnNlKGl0ZW0pIDogaW5pdGlhbFZhbHVlO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHQvLyBJZiBlcnJvciBhbHNvIHJldHVybiBpbml0aWFsVmFsdWVcblx0XHRcdHJldHVybiBpbml0aWFsVmFsdWU7XG5cdFx0fVxuXHR9KTtcblx0Ly8gUmV0dXJuIGEgd3JhcHBlZCB2ZXJzaW9uIG9mIHVzZVN0YXRlJ3Mgc2V0dGVyIGZ1bmN0aW9uIHRoYXQgLi4uXG5cdC8vIC4uLiBwZXJzaXN0cyB0aGUgbmV3IHZhbHVlIHRvIHN0b3JhZ2UuXG5cdGNvbnN0IHNldFZhbHVlID0gKHZhbHVlKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIEFsbG93IHZhbHVlIHRvIGJlIGEgZnVuY3Rpb24gc28gd2UgaGF2ZSBzYW1lIEFQSSBhcyB1c2VTdGF0ZVxuXHRcdFx0Y29uc3QgdmFsdWVUb1N0b3JlID0gdmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IHZhbHVlKHN0b3JlZFZhbHVlKSA6IHZhbHVlO1xuXHRcdFx0Ly8gU2F2ZSBzdGF0ZVxuXHRcdFx0c2V0U3RvcmVkVmFsdWUodmFsdWVUb1N0b3JlKTtcblx0XHRcdC8vIFNhdmUgdG8gbG9jYWwgc3RvcmFnZVxuXHRcdFx0d2luZG93W3N0b3JhZ2VUeXBlXS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWVUb1N0b3JlKSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihlcnJvcik7XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gW3N0b3JlZFZhbHVlLCBzZXRWYWx1ZV07XG59XG4iLCIvLyBDU1NcbmltcG9ydCAnLi4vc2Nzcy9tYWluLnNjc3MnO1xuXG4vLyBQb2xseWZpbHNcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcblxuLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuXG4vKiBDbGllbnQgKi9cbmNvbnN0IGNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCh7XG5cdGRlZmF1bHRPcHRpb25zOiB7XG5cdFx0cXVlcmllczoge1xuXHRcdFx0cmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxuXHRcdH0sXG5cdH0sXG59KTtcblxuLyogUmVuZGVyICovXG5jb25zdCBhcHBOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuaWYgKGFwcE5vZGUgIT09IG51bGwpIHtcblx0cmVuZGVyKFxuXHRcdDxRdWVyeUNsaWVudFByb3ZpZGVyIHsuLi57IGNsaWVudCB9fT5cblx0XHRcdDxBcHAgLz5cblx0XHQ8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+LFxuXHRcdGFwcE5vZGVcblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBIZWFkZXIsIEJhY2tncm91bmQsIExvZ2luRm9ybSB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxuXHRcdFx0XHQ8QmFja2dyb3VuZCAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVfX3BhbmVsIHBhbmVsIHBhbmVsLS1sb2dpblwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lbF9fYm9keVwiPlxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2UgdGV4dC13aGl0ZSBtYi0wXCI+TG9naW48L2gxPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS03MCB0ZXh0LXdoaXRlIG1iLTZcIj5Mb2dpbiB3aXRoIHlvdXIgZS1tYWlsIGFuZCBwYXNzd29yZDwvcD5cblx0XHRcdFx0XHRcdFx0PExvZ2luRm9ybSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFBhZ2VMb2FkZXIsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IHsgUHJvamVjdERldGFpbEhlYWRlciwgUHJvamVjdERldGFpbEltYWdlcyB9IGZyb20gJy4uL2RvbWFpbi9wcm9qZWN0LWRldGFpbCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZmV0Y2hQcm9qZWN0QnlJZCwgUVVFUllfS0VZUyB9IGZyb20gJy4uL2FwaSc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VQYWdlVGl0bGUgfSBmcm9tICcuLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWwoKSB7XG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBpZDogcHJvamVjdElkIH0gPSB1c2VQYXJhbXMoKTtcblx0Y29uc3QgeyBpc0xvYWRpbmcsIGRhdGEgPSB7fSB9ID0gdXNlUXVlcnkoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcGFyc2VJbnQocHJvamVjdElkKV0sICgpID0+XG5cdFx0ZmV0Y2hQcm9qZWN0QnlJZCh7IHByb2plY3RJZCB9KVxuXHQpO1xuXG5cdC8qIEhvb2tzICovXG5cdHVzZVBhZ2VUaXRsZShkYXRhPy50aXRsZSwgW2RhdGFdKTtcblxuXHQvKiBDb25zdGFudHMgICovXG5cdGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCB1c2VycywgaWQsIGF1dGhvciwgZW1haWwsIHByb2plY3RJbWFnZXMgfSA9IGRhdGE7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PFBhZ2VXcmFwcGVyPlxuXHRcdFx0PFBhZ2VMb2FkZXIgey4uLnsgaXNMb2FkaW5nIH19PlxuXHRcdFx0XHQ8UHJvamVjdERldGFpbEhlYWRlciB7Li4ueyB0aXRsZSwgZGVzY3JpcHRpb24sIHVzZXJzLCBpZCwgYXV0aG9yLCBlbWFpbCB9fSAvPlxuXHRcdFx0XHQ8UHJvamVjdERldGFpbEltYWdlcyB7Li4ueyBwcm9qZWN0SW1hZ2VzLCBwcm9qZWN0SWQ6IGlkIH19IC8+XG5cdFx0XHQ8L1BhZ2VMb2FkZXI+XG5cdFx0PC9QYWdlV3JhcHBlcj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUGFnZUxvYWRlciwgUGFnZVdyYXBwZXIgfSBmcm9tICcuLi9jb21wb25lbnRzJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgeyBQcm9qZWN0UmVzdWx0cywgUHJvamVjdEFkZCB9IGZyb20gJy4uL2RvbWFpbi9wcm9qZWN0LW92ZXJ2aWV3JztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vY29udGV4dC9tYWluQ29udGV4dCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZmV0Y2hQcm9qZWN0c0J5VXNlciwgUVVFUllfS0VZUyB9IGZyb20gJy4uL2FwaSc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VQYWdlVGl0bGUgfSBmcm9tICcuLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RPdmVydmlldygpIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW25ld1Byb2plY3RJZCwgc2V0TmV3UHJvamVjdElkXSA9IHVzZVN0YXRlKCk7XG5cblx0LyogSG9va3MgKi9cblx0dXNlUGFnZVRpdGxlKCdQcm9qZWN0cycpO1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyLCB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhOiBwcm9qZWN0cyA9IFtdIH0gPSB1c2VRdWVyeShcblx0XHRRVUVSWV9LRVlTLlBST0pFQ1RfQllfVVNFUixcblx0XHQoKSA9PiBmZXRjaFByb2plY3RzQnlVc2VyKHsgdXNlcklkOiBjdXJyZW50VXNlcj8uaWQgfSksXG5cdFx0e1xuXHRcdFx0ZW5hYmxlZDogISFjdXJyZW50VXNlcj8uaWQsXG5cdFx0fVxuXHQpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxQYWdlV3JhcHBlcj5cblx0XHRcdDxQYWdlTG9hZGVyIHsuLi57IGlzTG9hZGluZyB9fT5cblx0XHRcdFx0e3VzZXJSb2xlID09PSAnYWRtaW4nICYmIDxQcm9qZWN0QWRkIHsuLi57IHNldE5ld1Byb2plY3RJZCB9fSAvPn1cblx0XHRcdFx0PFByb2plY3RSZXN1bHRzIHsuLi57IHByb2plY3RzLCBuZXdQcm9qZWN0SWQgfX0gLz5cblx0XHRcdDwvUGFnZUxvYWRlcj5cblx0XHQ8L1BhZ2VXcmFwcGVyPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFBhZ2VMb2FkZXIsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IHsgUHJvamVjdFJldmlld0NhbnZhcyB9IGZyb20gJy4uL2RvbWFpbi9wcm9qZWN0LXJldmlldyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZmV0Y2hQcm9qZWN0SW1hZ2VCeUlkLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vYXBpJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZVBhZ2VUaXRsZSB9IGZyb20gJy4uL2hvb2tzJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IHsgUmV2aWV3Q29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3KCkge1xuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJbWFnZUlkIH0gPSB1c2VQYXJhbXMoKTtcblx0Y29uc3QgeyBpc0xvYWRpbmcsIGRhdGEgPSB7fSB9ID0gdXNlUXVlcnkoW1FVRVJZX0tFWVMuUFJPSkVDVF9JTUFHRV9CWV9JRCwgcGFyc2VJbnQocHJvamVjdEltYWdlSWQpXSwgKCkgPT5cblx0XHRmZXRjaFByb2plY3RJbWFnZUJ5SWQoeyBwcm9qZWN0SW1hZ2VJZCB9KVxuXHQpO1xuXG5cdC8qIEhvb2tzICovXG5cdHVzZVBhZ2VUaXRsZShkYXRhPy50aXRsZSwgW2RhdGFdKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8UmV2aWV3Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBwcm9qZWN0SWQ6IGRhdGE/LnBhcmVudElkLCBwcm9qZWN0SW1hZ2VJZCB9fT5cblx0XHRcdDxQYWdlV3JhcHBlcj5cblx0XHRcdFx0PFBhZ2VMb2FkZXIgey4uLnsgaXNMb2FkaW5nIH19PlxuXHRcdFx0XHRcdDxQcm9qZWN0UmV2aWV3Q2FudmFzIHsuLi5kYXRhfSAvPlxuXHRcdFx0XHQ8L1BhZ2VMb2FkZXI+XG5cdFx0XHQ8L1BhZ2VXcmFwcGVyPlxuXHRcdDwvUmV2aWV3Q29udGV4dC5Qcm92aWRlcj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBIZWFkZXIsIEJhY2tncm91bmQsIFNpZ251cEZvcm0gfSBmcm9tICcuLi9jb21wb25lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbnVwKCkge1xuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XG5cdFx0XHRcdDxCYWNrZ3JvdW5kIC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZV9fcGFuZWwgcGFuZWwgcGFuZWwtLWxvZ2luXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsX19ib2R5XCI+XG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZSB0ZXh0LXdoaXRlIG1iLTBcIj5TaWduIHVwPC9oMT5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNzAgdGV4dC13aGl0ZSBtYi02XCI+U2lnbiB1cCB3aXRoIHlvdXIgZS1tYWlsIGFuZCBwYXNzd29yZDwvcD5cblx0XHRcdFx0XHRcdFx0PFNpZ251cEZvcm0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTG9naW4gfSBmcm9tICcuL0xvZ2luJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2lnbnVwIH0gZnJvbSAnLi9TaWdudXAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0T3ZlcnZpZXcgfSBmcm9tICcuL1Byb2plY3RPdmVydmlldyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3REZXRhaWwgfSBmcm9tICcuL1Byb2plY3REZXRhaWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0UmV2aWV3IH0gZnJvbSAnLi9Qcm9qZWN0UmV2aWV3JztcbiIsIi8qIFBhZ2VzICovXG5pbXBvcnQgeyBQcm9qZWN0T3ZlcnZpZXcsIFByb2plY3REZXRhaWwsIFByb2plY3RSZXZpZXcsIExvZ2luLCBTaWdudXAgfSBmcm9tICcuL3BhZ2VzJztcblxuZXhwb3J0IGNvbnN0IFJPVVRFUyA9IHtcblx0bG9naW46ICcvJyxcblx0c2lnbnVwOiAnL3NpZ251cCcsXG5cdHByb2plY3RzOiAnL3Byb2plY3RzJyxcbn07XG5cbmNvbnN0IHJvdXRlcyA9IFtcblx0e1xuXHRcdG5hbWU6ICdsb2dpbicsXG5cdFx0cGF0aDogJy8nLFxuXHRcdGNvbXBvbmVudDogTG9naW4sXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnc2lnbnVwJyxcblx0XHRwYXRoOiAnL3NpZ251cCcsXG5cdFx0Y29tcG9uZW50OiBTaWdudXAsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAncHJvamVjdC1vdmVydmlldycsXG5cdFx0cGF0aDogJy9wcm9qZWN0cycsXG5cdFx0Y29tcG9uZW50OiBQcm9qZWN0T3ZlcnZpZXcsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAncHJvamVjdC1kZXRhaWwnLFxuXHRcdHBhdGg6ICcvcHJvamVjdHMvOmlkJyxcblx0XHRjb21wb25lbnQ6IFByb2plY3REZXRhaWwsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAncHJvamVjdC1yZXZpZXcnLFxuXHRcdHBhdGg6ICcvcHJvamVjdHMvOmlkL3Jldmlldy86aWQnLFxuXHRcdGNvbXBvbmVudDogUHJvamVjdFJldmlldyxcblx0fSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcblx0cmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cbiIsImNvbnN0IFVTRVJfUk9MRVMgPSB7XG5cdFJPTEVfQURNSU46ICdST0xFX0FETUlOJyxcblx0Uk9MRV9VU0VSOiAnUk9MRV9VU0VSJyxcblx0Uk9MRV9VU0VSX0JBU0lDOiAnUk9MRV9VU0VSX0JBU0lDJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJvbGUoeyByb2xlcyB9KSB7XG5cdGlmIChyb2xlcy5pbmNsdWRlcyhVU0VSX1JPTEVTLlJPTEVfQURNSU4pKSByZXR1cm4gJ2FkbWluJztcblx0aWYgKHJvbGVzLmluY2x1ZGVzKFVTRVJfUk9MRVMuUk9MRV9VU0VSX0JBU0lDKSkgcmV0dXJuICdiYXNpYyc7XG5cdGlmIChyb2xlcy5pbmNsdWRlcyhVU0VSX1JPTEVTLlJPTEVfVVNFUikpIHJldHVybiAndXNlcic7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGlzRW1haWwgfSBmcm9tICcuL2lzRW1haWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRSb2xlIH0gZnJvbSAnLi9nZXRSb2xlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVzaXplSW1hZ2VzIH0gZnJvbSAnLi9yZXNpemVJbWFnZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNhcGl0YWxpemVGaXJzdExldHRlciB9IGZyb20gJy4vY2FwaXRhbGl6ZUZpcnN0TGV0dGVyJztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRW1haWwoZW1haWwpIHtcbiAgICByZXR1cm4gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC8udGVzdChlbWFpbCk7XG59XG4iLCJpbXBvcnQgUmVzaXplciBmcm9tICdyZWFjdC1pbWFnZS1maWxlLXJlc2l6ZXInO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcblx0bWF4V2lkdGg6IDMwMCxcblx0bWF4SGVpZ2h0OiAzMDAsXG5cdHF1YWxpdHk6IDEwMCxcblx0cm90YXRpb246IDAsXG5cdG91dHB1dFR5cGU6ICdmaWxlJyxcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIHJlc2l6ZUltYWdlVHlwZShpbWFnZSwgb3B0aW9ucykge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRSZXNpemVyLmltYWdlRmlsZVJlc2l6ZXIoXG5cdFx0XHRpbWFnZSxcblx0XHRcdG9wdGlvbnMubWF4V2lkdGgsXG5cdFx0XHRvcHRpb25zLm1heEhlaWdodCxcblx0XHRcdGltYWdlLnBhdGguc3BsaXQoJy4nKS5wb3AoKSxcblx0XHRcdG9wdGlvbnMucXVhbGl0eSxcblx0XHRcdG9wdGlvbnMucm90YXRpb24sXG5cdFx0XHQodXJpKSA9PiB7XG5cdFx0XHRcdHJlc29sdmUodXJpKTtcblx0XHRcdH0sXG5cdFx0XHRvcHRpb25zLm91dHB1dFR5cGVcblx0XHQpO1xuXHR9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVzaXplSW1hZ2UoaW1hZ2UpIHtcblx0Y29uc3QgdGh1bWJuYWlsID0gYXdhaXQgcmVzaXplSW1hZ2VUeXBlKGltYWdlLCB7IC4uLmRlZmF1bHRPcHRpb25zLCBtYXhXaWR0aDogMjY4LCBtYXhIZWlnaHQ6IDIzNiB9KTtcblx0Y29uc3QgdGh1bWJuYWlsUmV0aW5hID0gYXdhaXQgcmVzaXplSW1hZ2VUeXBlKGltYWdlLCB7IC4uLmRlZmF1bHRPcHRpb25zLCBtYXhXaWR0aDogNTM2LCBtYXhIZWlnaHQ6IDQ3MiB9KTtcblxuXHRyZXR1cm4ge1xuXHRcdG9yaWdpbmFsOiBpbWFnZSxcblx0XHR0aHVtYm5haWw6IE9iamVjdC5hc3NpZ24odGh1bWJuYWlsLCB7IHByZXZpZXc6IFVSTC5jcmVhdGVPYmplY3RVUkwodGh1bWJuYWlsKSB9KSxcblx0XHR0aHVtYm5haWxSZXRpbmE6IE9iamVjdC5hc3NpZ24odGh1bWJuYWlsUmV0aW5hLCB7IHByZXZpZXc6IFVSTC5jcmVhdGVPYmplY3RVUkwodGh1bWJuYWlsUmV0aW5hKSB9KSxcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcmVzaXplSW1hZ2VzKGltYWdlcykge1xuXHRyZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoXG5cdFx0aW1hZ2VzLm1hcChhc3luYyAoaW1hZ2UpID0+IHtcblx0XHRcdHJldHVybiBhd2FpdCByZXNpemVJbWFnZShpbWFnZSk7XG5cdFx0fSlcblx0KTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=