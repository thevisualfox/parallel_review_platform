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
/*! exports provided: FADE_IN, FADE_IN_UP, TRANSFORM_UP, SCALE_FADE, STAGGER_UP, STAGGER_LEFT, SLIDE_IN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FADE_IN", function() { return FADE_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FADE_IN_UP", function() { return FADE_IN_UP; });
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
/*! exports provided: signup, login, logout, fetchProjectsByUser, fetchProjectById, addProject, deleteProjects, leaveProjects, editProject, fetchProjectImageById, addProjectImages, deleteProjectImages, editProjectImage, fetchCurrentUser, fetchGobalUsers, fetchProjectUsers, addUser, deleteUser, addComment, addReply, QUERY_KEYS */
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






var QUERY_KEYS = {
  CURRENT_USER: 'current_user',
  PROJECT_BY_USER: 'project_by_user',
  PROJECT_BY_ID: 'project_by_id',
  PROJECT_IMAGE_BY_ID: 'project_image_by_id',
  GLOBAL_USERS: 'global_users',
  PROJECT_USERS: 'project_users'
};

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

/***/ "./assets/app/js/components/index.js":
/*!*******************************************!*\
  !*** ./assets/app/js/components/index.js ***!
  \*******************************************/
/*! exports provided: ActionMenu, Alert, Background, Modal, ModalHeader, Button, Dropzone, Editable, EditableBody, LoadingWrapper, SlideIn, PageLoader, PageWrapper, UserAdd, UserAddSearch, UserAddSearchResults, Header, HeaderNavigation, UserAvatar, UserInfo, User, Users, UserSelect, SecurityModal, LoginForm, SignupForm */
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

/* harmony import */ var _editable_Editable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./editable/Editable */ "./assets/app/js/components/editable/Editable.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editable", function() { return _editable_Editable__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _editable_EditableBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./editable/EditableBody */ "./assets/app/js/components/editable/EditableBody.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditableBody", function() { return _editable_EditableBody__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _loading_wrapper_LoadingWrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loading-wrapper/LoadingWrapper */ "./assets/app/js/components/loading-wrapper/LoadingWrapper.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingWrapper", function() { return _loading_wrapper_LoadingWrapper__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _slide_in_SlideIn__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./slide-in/SlideIn */ "./assets/app/js/components/slide-in/SlideIn.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SlideIn", function() { return _slide_in_SlideIn__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _page_loader_PageLoader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-loader/PageLoader */ "./assets/app/js/components/page-loader/PageLoader.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageLoader", function() { return _page_loader_PageLoader__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _page_wrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./page-wrapper/PageWrapper */ "./assets/app/js/components/page-wrapper/PageWrapper.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageWrapper", function() { return _page_wrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _user_add_UserAdd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-add/UserAdd */ "./assets/app/js/components/user-add/UserAdd.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAdd", function() { return _user_add_UserAdd__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _user_add_UserAddSearch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user-add/UserAddSearch */ "./assets/app/js/components/user-add/UserAddSearch.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAddSearch", function() { return _user_add_UserAddSearch__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _user_add_UserAddSearchResults__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./user-add/UserAddSearchResults */ "./assets/app/js/components/user-add/UserAddSearchResults.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAddSearchResults", function() { return _user_add_UserAddSearchResults__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./header/Header */ "./assets/app/js/components/header/Header.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header_Header__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _header_HeaderNavigation__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./header/HeaderNavigation */ "./assets/app/js/components/header/HeaderNavigation.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderNavigation", function() { return _header_HeaderNavigation__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _users_User__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./users/User */ "./assets/app/js/components/users/User.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAvatar", function() { return _users_User__WEBPACK_IMPORTED_MODULE_18__["UserAvatar"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserInfo", function() { return _users_User__WEBPACK_IMPORTED_MODULE_18__["UserInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _users_User__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _users_Users__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./users/Users */ "./assets/app/js/components/users/Users.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return _users_Users__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _users_UserSelect__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./users/UserSelect */ "./assets/app/js/components/users/UserSelect.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSelect", function() { return _users_UserSelect__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _security_SecurityModal__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./security/SecurityModal */ "./assets/app/js/components/security/SecurityModal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SecurityModal", function() { return _security_SecurityModal__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _security_LoginForm__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./security/LoginForm */ "./assets/app/js/components/security/LoginForm.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginForm", function() { return _security_LoginForm__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _security_SignupForm__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./security/SignupForm */ "./assets/app/js/components/security/SignupForm.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SignupForm", function() { return _security_SignupForm__WEBPACK_IMPORTED_MODULE_23__["default"]; });



























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
      components = _ref$components === void 0 ? {} : _ref$components;

  /* Constants */
  var _components$HeaderCom = components.HeaderComponent,
      HeaderComponent = _components$HeaderCom === void 0 ? _ModalHeader__WEBPACK_IMPORTED_MODULE_3__["default"] : _components$HeaderCom;
  /* Hooks */

  Object(_hooks__WEBPACK_IMPORTED_MODULE_5__["useCloseOnEsc"])(modalOpen, toggleModal);

  var render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], null, modalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "custom-modal ".concat(center && 'custom-modal--center', " ").concat(extensionClasses)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
      className: "custom-modal-overlay"
    }, _animations__WEBPACK_IMPORTED_MODULE_4__["FADE_IN"], {
      onClick: toggleModal
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
      key: "custom-modal-content",
      className: "custom-modal__content border p-5"
    }, Object(_animations__WEBPACK_IMPORTED_MODULE_4__["FADE_IN_UP"])()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderComponent, {
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
    to: "/projects/".concat(projectId, "/review/").concat(projectImageId),
    title: title
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__image border m-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "card-img-top",
    src: image.thumbnail,
    srcSet: "".concat(image.thumbnailRetina, " 2x"),
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
    src: image.thumbnail,
    srcSet: "".concat(image.thumbnailRetina, " 2x"),
    alt: title
  }), !image && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
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
      _projectImage$phases = projectImage.phases,
      phases = _projectImage$phases === void 0 ? [] : _projectImage$phases;

  var _ref4 = phases[phases.length - 1] || {},
      image = _ref4.image;

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, _extends({
    layout: true
  }, Object(_animations__WEBPACK_IMPORTED_MODULE_6__["STAGGER_UP"])(projectImageIndex), {
    className: "col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2",
    key: id
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "dropzone__container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "dropzone__image img-fluid",
    src: image.thumbnail,
    srcSet: "".concat(image.thumbnailRetina, " 2x"),
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


function ProjectReviewActionBar(_ref) {
  var title = _ref.title,
      description = _ref.description,
      phase = _ref.phase,
      commentsPanelOpen = _ref.commentsPanelOpen,
      toggleCommentsPanel = _ref.toggleCommentsPanel;

  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      editModalOpen = _useState2[0],
      setEditModalOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      phaseModalOpen = _useState4[0],
      setPhaseModalOpen = _useState4[1];
  /* Hooks */


  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQueryClient"])();
  /* Context */

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_8__["StaticContext"]),
      currentUser = _useContext.currentUser,
      userRole = _useContext.userRole;

  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_8__["ReviewContext"]),
      projectImageId = _useContext2.projectImageId;
  /* Callbacks */


  var toggleEditModal = function toggleEditModal() {
    return setEditModalOpen(!editModalOpen);
  };

  var togglePhaseModal = function togglePhaseModal() {
    return setPhaseModalOpen(!phaseModalOpen);
  };

  var mutationOnSuccess = function mutationOnSuccess() {
    queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_9__["QUERY_KEYS"].PROJECT_IMAGE_BY_ID, Number(projectImageId)]);
  };
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
  }, "1 of 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mx-1 text-muted--20"
  }, "/"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text--xs text-muted--70 mb-0"
  }, "Phase ", phase))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-auto d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative hr-2"
  }, userRole === 'admin' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
    extensionClasses: 'bar__edit-modal'
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
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "bar__action-btn ".concat(commentsPanelOpen && 'is-active', " btn btn-link text-rest hr-2"),
    onClick: toggleCommentsPanel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--16",
    src: icons_comment_svg__WEBPACK_IMPORTED_MODULE_7___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative hr-2"
  }, userRole === 'admin' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
    extensionClasses: 'bar__edit-modal'
  }, "Dropzone")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4 d-flex justify-content-end"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["User"], {
    user: currentUser,
    size: 'lg'
  }))))));
}

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
      _ref$phases = _ref.phases,
      phases = _ref$phases === void 0 ? [] : _ref$phases,
      rest = _objectWithoutProperties(_ref, ["parentId", "title", "phases"]);

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


  var _ref2 = phases[phases.length - 1] || {},
      image = _ref2.image,
      phaseId = _ref2.id,
      comments = _ref2.comments,
      phase = _ref2.phase;
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

  var posMarker = function posMarker(_ref3) {
    var clientX = _ref3.clientX,
        clientY = _ref3.clientY;

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
    layout: true,
    className: "review position-relative mx-n12 mb-3 mt-n10"
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
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
    phase: phase,
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
              thumbnail: thumbnail,
              thumbnailRetina: thumbnailRetina
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvYmFja2dyb3VuZC1sb2dpbi5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvYmFja2dyb3VuZC1sb2dpbkAyeC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX2ltYWdlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9hZGRfcHJvamVjdC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX3VzZXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2FyY2hpdmUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2NoZWNrLWNpcmNsZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvY2hlY2suc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2NoZXZyb24uc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2Nsb3NlLXdoaXRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvY29tbWVudC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvZGFuZ2VyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9kZWxldGUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2VkaXQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2xlYXZlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9uZXh0LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9zdGFyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9zdWNjZXNzLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy91cGxvYWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL3dhcm5pbmcuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FuaW1hdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9hcGkvY29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FwaS9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvYXBpL3Byb2plY3RJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FwaS9zZWN1cml0eS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FwaS91c2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9hY3Rpb24tbWVudS9BY3Rpb25NZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvYWxlcnQvQWxlcnQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9iYWNrZ3JvdW5kL0JhY2tncm91bmQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9idXR0b24vQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9lZGl0YWJsZS9FZGl0YWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2VkaXRhYmxlL0VkaXRhYmxlQm9keS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyTmF2aWdhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9sb2FkaW5nLXdyYXBwZXIvTG9hZGluZ1dyYXBwZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9tb2RhbC9Nb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL21vZGFsL01vZGFsSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvcGFnZS1sb2FkZXIvUGFnZUxvYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3BhZ2Utd3JhcHBlci9QYWdlV3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3NlY3VyaXR5L0xvZ2luRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3NlY3VyaXR5L1NlY3VyaXR5TW9kYWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9zZWN1cml0eS9TaWdudXBGb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvc2xpZGUtaW4vU2xpZGVJbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3VzZXItYWRkL1VzZXJBZGQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy91c2VyLWFkZC9Vc2VyQWRkU2VhcmNoLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvdXNlci1hZGQvVXNlckFkZFNlYXJjaFJlc3VsdHMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy91c2VyLWFkZC9zZXJ2aWNlcy9maWx0ZXJVc2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvdXNlcnMvVXNlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3VzZXJzL1VzZXJTZWxlY3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy91c2Vycy9Vc2Vycy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb250ZXh0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29udGV4dC9tYWluQ29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbnRleHQvcmV2aWV3Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LWRldGFpbC9Qcm9qZWN0RGV0YWlsSGVhZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LWRldGFpbC9Qcm9qZWN0RGV0YWlsSW1hZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtZGV0YWlsL1Byb2plY3REZXRhaWxJbWFnZXMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtZGV0YWlsL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3Qtb3ZlcnZpZXcvUHJvamVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1vdmVydmlldy9Qcm9qZWN0QWRkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LW92ZXJ2aWV3L1Byb2plY3RJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1vdmVydmlldy9Qcm9qZWN0UmVzdWx0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1vdmVydmlldy9Qcm9qZWN0U2xpZGVJbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1vdmVydmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3QWN0aW9uQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3Q2FudmFzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3Q29tbWVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvUHJvamVjdFJldmlld0NvbW1lbnRBZGQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdDb21tZW50TWVudGlvbnMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdDb21tZW50TW9kYWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdDb21tZW50UGFuZWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdDb21tZW50UmVwbHkuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdNYXJrZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdQYWdpbmF0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9zZXJ2aWNlcy9jYWxjQ29tbWVudFBvcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9zZXJ2aWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9zZXJ2aWNlcy9zdHlsZU1lbnRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9ob29rcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2hvb2tzL3VzZUNsb3NlT25Fc2MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9ob29rcy91c2VFdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvaG9va3MvdXNlUGFnZVRpdGxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvaG9va3MvdXNlU2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvaG9va3MvdXNlU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9wYWdlcy9Mb2dpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9wYWdlcy9Qcm9qZWN0RGV0YWlsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3BhZ2VzL1Byb2plY3RPdmVydmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9wYWdlcy9Qcm9qZWN0UmV2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3BhZ2VzL1NpZ251cC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3NlcnZpY2VzL2NhcGl0YWxpemVGaXJzdExldHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3NlcnZpY2VzL2dldFJvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9zZXJ2aWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3NlcnZpY2VzL2lzRW1haWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9zZXJ2aWNlcy9yZXNpemVJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbIkFwcCIsIlJvdXRlckJvZHkiLCJ1c2VTdGF0ZSIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJ1c2VyUm9sZSIsInNldFVzZXJSb2xlIiwidXNlU3RvcmFnZSIsImF0b2IiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlcGxhY2UiLCJ1c2VySWQiLCJ1c2VMb2NhdGlvbiIsInVzZVF1ZXJ5IiwiUVVFUllfS0VZUyIsIkNVUlJFTlRfVVNFUiIsImZldGNoQ3VycmVudFVzZXIiLCJyZXRyeSIsIm9uU3VjY2VzcyIsInVzZXIiLCJnZXRSb2xlIiwiaXNMb2FkaW5nIiwiUk9VVEVTIiwibG9naW4iLCJzaWdudXAiLCJpbmNsdWRlcyIsInBhdGhuYW1lIiwicHJvamVjdHMiLCJyb3V0ZXMiLCJtYXAiLCJwYXRoIiwiQ29tcG9uZW50IiwiY29tcG9uZW50IiwicHJvcHMiLCJGQURFX0lOIiwiaGlkZVByb2dyZXNzQmFyIiwibmV3ZXN0T25Ub3AiLCJwb3NpdGlvbiIsImNsb3NlQnV0dG9uIiwiRUFTRSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImR1cmF0aW9uIiwiRkFERV9JTl9VUCIsInkiLCJ0eXBlIiwiZGFtcGluZyIsInN0aWZmbmVzcyIsIlRSQU5TRk9STV9VUCIsIlNDQUxFX0ZBREUiLCJzY2FsZSIsIlNUQUdHRVJfVVAiLCJpbmRleCIsImRlbGF5IiwiU1RBR0dFUl9MRUZUIiwieCIsIlNMSURFX0lOIiwiYWRkQ29tbWVudCIsInBoYXNlSWQiLCJjb21tZW50IiwibWVudGlvbmVkIiwicGFyYW1zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJ4UGVyY2VudCIsInlQZXJjZW50IiwibGVuZ3RoIiwiYXhpb3MiLCJwb3N0IiwicmVzdWx0IiwiZGF0YSIsImFkZFJlcGx5IiwiY29tbWVudElkIiwicmVwbHkiLCJQUk9KRUNUX0JZX1VTRVIiLCJQUk9KRUNUX0JZX0lEIiwiUFJPSkVDVF9JTUFHRV9CWV9JRCIsIkdMT0JBTF9VU0VSUyIsIlBST0pFQ1RfVVNFUlMiLCJmZXRjaFByb2plY3RzQnlVc2VyIiwiZ2V0IiwiZmV0Y2hQcm9qZWN0QnlJZCIsInByb2plY3RJZCIsImFkZFByb2plY3QiLCJkZWxldGVQcm9qZWN0cyIsInByb2plY3RJZHMiLCJmb3JFYWNoIiwiaWQiLCJsZWF2ZVByb2plY3RzIiwiZWRpdFByb2plY3QiLCJmb3JtUmVmIiwiY3VycmVudCIsImZldGNoUHJvamVjdEltYWdlQnlJZCIsInByb2plY3RJbWFnZUlkIiwiYWRkUHJvamVjdEltYWdlcyIsImltYWdlcyIsImltYWdlIiwiaW1hZ2VJbmRleCIsIm9yaWdpbmFsIiwidGh1bWJuYWlsIiwidGh1bWJuYWlsUmV0aW5hIiwiZGVsZXRlUHJvamVjdEltYWdlcyIsInByb2plY3RJbWFnZUlkcyIsImVkaXRQcm9qZWN0SW1hZ2UiLCJ1cmwiLCJlbWFpbCIsInBhc3N3b3JkIiwibG9nb3V0IiwiZmV0Y2hHb2JhbFVzZXJzIiwiZmV0Y2hQcm9qZWN0VXNlcnMiLCJhZGRVc2VyIiwicmVmZXJlciIsImRlbGV0ZVVzZXIiLCJBY3Rpb25NZW51Iiwic2VsZWN0ZWQiLCJyZXNldFNlbGVjdGVkIiwiYWN0aW9ucyIsInVzZUNvbnRleHQiLCJTdGF0aWNDb250ZXh0IiwiY2xvc2VJY29uIiwiYWN0aW9uSW5kZXgiLCJ0aXRsZSIsInRoZW1lIiwiaGFzUGVybWlzc2lvbiIsImljb24iLCJpY29uU2l6ZSIsIm11dGF0aW9uIiwibG9hZGVyQ2xhc3NlcyIsImFwcGVhcmFuY2VUeXBlcyIsIndhcm5pbmciLCJ3YXJuaW5nSWNvbiIsImRhbmdlciIsImVycm9ySWNvbiIsInN1Y2Nlc3MiLCJzdWNjZXNzSWNvbiIsIkFsZXJ0IiwibWVzc2FnZSIsImFwcGVhcmFuY2UiLCJjbG9zZVRvYXN0IiwiQmFja2dyb3VuZCIsImJnIiwiYmdSZXRpbmEiLCJCdXR0b24iLCJzaXplIiwiZXh0ZW5zaW9uQ2xhc3NlcyIsIm9uQ2xpY2siLCJjb250ZW50VHlwZSIsImNoaWxkcmVuIiwiYnV0dG9uUmVmIiwidXNlUmVmIiwiYnV0dG9uSGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwiVGV4dCIsImRlZmF1bHRDbGFzc2VzIiwiSWNvbiIsImNoZWNrSWNvbiIsIkRyb3B6b25lIiwicG9zaXRpdGlvbiIsInF1ZXJ5Q2xpZW50IiwidXNlUXVlcnlDbGllbnQiLCJ1c2VEcm9wem9uZSIsImFjY2VwdCIsIm5vQ2xpY2siLCJvbkRyb3AiLCJhY2NlcHRlZEZpbGVzIiwidXBkYXRlUHJvamVjdEltYWdlcyIsImdldFJvb3RQcm9wcyIsImdldElucHV0UHJvcHMiLCJpc0RyYWdBY3RpdmUiLCJhZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24iLCJ1c2VNdXRhdGlvbiIsImludmFsaWRhdGVRdWVyaWVzIiwiZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uIiwiYWN0aW9uIiwicmVzaXplSW1hZ2VzIiwicmVzaXplZEltYWdlcyIsIm11dGF0ZSIsImlzUGFyZW50RHJhZ0FjdGl2ZSIsIkRyb3B6b25lSW5uZXIiLCJhZGRJbWFnZUxvYWRpbmciLCJub0RyYWdFdmVudHNCdWJibGluZyIsInVwbG9hZEltYWdlSWNvbiIsImFkZEltYWdlSWNvbiIsIkVkaXRhYmxlIiwic3VidGl0bGUiLCJyZXN0IiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwidG9nZ2xlTW9kYWwiLCJlZGl0SWNvbiIsIkVkaXRhYmxlQm9keSIsImZpZWxkcyIsIm11dGF0aW9uSWQiLCJtdXRhdGlvbk9uU3VjY2VzcyIsImVkaXRNdXRhdGlvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmaWVsZCIsImZpZWxkSW5kZXgiLCJzaG91bGRGb2N1cyIsIkZpZWxkIiwibmFtZSIsImRlZmF1bHRWYWx1ZSIsInZhbHVlIiwic2V0VmFsdWUiLCJpbnB1dFJlZiIsInVzZUVmZmVjdCIsInNlbGVjdCIsInRhcmdldCIsImNhcGl0YWxpemVGaXJzdExldHRlciIsIkhlYWRlciIsIkhlYWRlck5hdmlnYXRpb24iLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsImxvZ291dE11dGF0aW9uIiwicHVzaCIsInNlc3Npb25TdG9yYWdlIiwicmVtb3ZlSXRlbSIsInRvYXN0Iiwib25FcnJvciIsIkxvYWRpbmdXcmFwcGVyIiwibG9hZGluZyIsImxvYWRlclNpemUiLCJjbGFzc2VzIiwiTW9kYWwiLCJyZW5kZXJPbkJvZHkiLCJjZW50ZXIiLCJjb21wb25lbnRzIiwiSGVhZGVyQ29tcG9uZW50IiwiTW9kYWxIZWFkZXIiLCJ1c2VDbG9zZU9uRXNjIiwicmVuZGVyIiwiY3JlYXRlUG9ydGFsIiwiZG9jdW1lbnQiLCJib2R5IiwiUGFnZUxvYWRlciIsIlBhZ2VXcmFwcGVyIiwiTG9naW5Gb3JtIiwic2hvd1NpZ251cCIsInVzZVBhZ2VUaXRsZSIsInVzZUZvcm0iLCJyZVZhbGlkYXRlTW9kZSIsIm1vZGUiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsImZvcm1TdGF0ZSIsImxvZ2luTXV0YXRpb24iLCJlcnJvciIsInJlc3BvbnNlIiwib25TdWJtaXQiLCJyZXF1aXJlZCIsIlNlY3VyaXR5TW9kYWwiLCJzZWN1cml0eU1vZGFsT3BlbiIsInNldFNlY3VyaXR5TW9kYWxPcGVuIiwidG9nZ2xlU2VjdXJpdHlNb2RhbCIsInNob3dMb2dpbiIsIlNpZ251cEZvcm0iLCJjb250cm9sIiwicGxhaW5QYXNzd29yZCIsInVzZVdhdGNoIiwic2lnbnVwTXV0YXRpb24iLCJzdGF0dXMiLCJyZXNldCIsInVzZXJuYW1lIiwib3JnYW5pc2F0aW9uIiwibWluTGVuZ3RoIiwicGFzc3dvcmRDb25maXJtIiwidmFsaWRhdGUiLCJTbGlkZUluIiwidG9nZ2xlU2xpZGVJbiIsImRvbUVsZW1lbnQiLCJ2YXJpYW50IiwiVXNlckFkZCIsInVzZXJzIiwicHJvamVjdCIsImFkZFVzZXJJY29uIiwiVXNlckFkZFNlYXJjaCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJmb2N1c2VkVXNlciIsInNldEZvY3VzZWRVc2VyIiwiZ2xvYmFsVXNlcnMiLCJnbG9iYWxVc2Vyc0xvYWRpbmciLCJmaWx0ZXJlZFVzZXJzIiwiZmlsdGVyVXNlcnMiLCJxdWVyeVJlZiIsImFkZFVzZXJNdXRhdGlvbiIsImhhbmRsZUNoYW5nZSIsImhhbmRsZU9uS2V5RG93biIsImtleSIsImlzRW1haWwiLCJoYW5kbGVDbGljayIsInVzZXJNdXRhdGlvbkxvYWRpbmciLCJVc2VyQWRkU2VhcmNoUmVzdWx0cyIsInJlc3VsdHMiLCJuZXdVc2VyIiwiZGlzcGxheSIsInVzZXJDb2xvciIsInVzZXJJbmRleCIsImxvd2VyUXVlcnkiLCJ0b0xvd2VyQ2FzZSIsImV4aXN0aW5nVXNlcnNCeUVtYWlsIiwiZmlsdGVyIiwiVXNlciIsImF1dGhvciIsImlzQXV0aG9yIiwiZGVsZXRlVXNlck11dGF0aW9uIiwiZGVsZXRlSWNvbiIsInN0YXJJY29uIiwiVXNlckF2YXRhciIsInVzZXJJbml0aWFscyIsInNwbGl0Iiwid29yZCIsInRvVXBwZXJDYXNlIiwiVXNlckluZm8iLCJsYXlvdXQiLCJVc2VyU2VsZWN0IiwiaXNGb2N1c2VkIiwiaGFuZGxlU3RhdHVzIiwiVXNlcnMiLCJzbGljZUFtb3VudCIsIkluZmluaXR5Iiwic2xpY2UiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJSZXZpZXdDb250ZXh0IiwiUHJvamVjdERldGFpbEhlYWRlciIsImRlc2NyaXB0aW9uIiwic3RhdGljQ29udGV4dCIsIlByb2plY3REZXRhaWxJbWFnZSIsInByb2plY3RJbWFnZSIsInVwZGF0ZVNlbGVjdGVkIiwicGhhc2VzIiwiUHJvamVjdERldGFpbEltYWdlcyIsInByb2plY3RJbWFnZXMiLCJ1c2VTZWxlY3Rpb24iLCJJbWFnZXMiLCJwcm9qZWN0SW1hZ2VJbmRleCIsIlByb2plY3QiLCJQcm9qZWN0QWRkIiwic2V0TmV3UHJvamVjdElkIiwic2V0UHJvamVjdElkIiwic2xpZGVJbk9wZW4iLCJzZXRTbGlkZUluT3BlbiIsImVuYWJsZWQiLCJhZGRNdXRhdGlvbiIsImludmFsaWRhdGVQcm9qZWN0Iiwic2V0VGltZW91dCIsInVwZGF0ZVByb2plY3QiLCJhZGRQcm9qZWN0SWNvbiIsIlByb2plY3RJbWFnZSIsIlByb2plY3RSZXN1bHRzIiwibmV3UHJvamVjdElkIiwibGVhdmVQcm9qZWN0c011dGF0aW9uIiwiZGVsZXRlUHJvamVjdHNNdXRhdGlvbiIsImxlYXZlSWNvbiIsImFyY2hpdmVJY29uIiwicHJvamVjdEluZGV4IiwiUHJvamVjdFNsaWRlSW4iLCJEcm9wem9uZUltYWdlIiwic3RvcFByb3BhZ2F0aW9uIiwiUHJvamVjdFJldmlld0FjdGlvbkJhciIsInBoYXNlIiwiY29tbWVudHNQYW5lbE9wZW4iLCJ0b2dnbGVDb21tZW50c1BhbmVsIiwiZWRpdE1vZGFsT3BlbiIsInNldEVkaXRNb2RhbE9wZW4iLCJwaGFzZU1vZGFsT3BlbiIsInNldFBoYXNlTW9kYWxPcGVuIiwidG9nZ2xlRWRpdE1vZGFsIiwidG9nZ2xlUGhhc2VNb2RhbCIsIk51bWJlciIsImNoZXZyb25JY29uIiwibWF4V2lkdGgiLCJjb21tZW50SWNvbiIsIm5leHRJY29uIiwiY3Vyc29yT2Zmc2V0IiwiUHJvamVjdFJldmlld0NhbnZhcyIsInBhcmVudElkIiwicHJvamVjdFVzZXJzIiwiY29tbWVudHMiLCJyZXZpZXdSZWYiLCJtYXJrZXJQb3MiLCJzZXRNYXJrZXJQb3MiLCJzZXRDb21tZW50c1BhbmVsT3BlbiIsInRvZ2dsZUNvbW1lbnRBZGRPcGVuIiwicG9zTWFya2VyIiwiY2xpZW50WCIsImNsaWVudFkiLCJhdXRoZW50aWNhdGVkIiwicmV2aWV3UG9zIiwid2lkdGgiLCJ0b3AiLCJjb21tZW50SW5kZXgiLCJQcm9qZWN0UmV2aWV3Q29tbWVudCIsImNvbnRlbnQiLCJzZXRSZXBseVRvVXNlciIsInJlbmRlckF1dGhvciIsInNob3dJbml0aWFsUmVwbGllcyIsImNyZWF0ZWQiLCJzaG93UmVwbGllcyIsInNldFNob3dSZXBsaWVzIiwicmVuZGVyQ29tbWVudCIsInVzZXJzUmVnZXgiLCJ1c2Vyc0FycmF5IiwibWF0Y2hBbGwiLCJmaW5kIiwiUHJvamVjdFJldmlld0NvbW1lbnRBZGQiLCJtb2RhbFJlZiIsImNhbGNDb21tZW50UG9zIiwibGVmdCIsInNldENvbW1lbnQiLCJtZW50aW9ucyIsInNldE1lbnRpb25zIiwiYWRkQ29tbWVudE11dGF0aW9uIiwicGFyc2VJbnQiLCJ0cmltIiwiYXV0b0ZvY3VzIiwiUHJvamVjdFJldmlld0NvbW1lbnRNZW50aW9ucyIsIm1lbnRpb25SZWYiLCJzdHlsZU1lbnRpb25zIiwiU3VnZ2VzdGlvbiIsIl8iLCJlbnRyeSIsImhpZ2hsaWdodGVkIiwiZm9jdXNlZCIsIlByb2plY3RSZXZpZXdDb21tZW50TW9kYWwiLCJjb21tZW50T3BlbiIsInNldENvbW1lbnRPcGVuIiwidG9nZ2xlQ29tbWVudCIsIkNvbW1lbnRCb3giLCJ0cmFuc2Zvcm1lZFBvcyIsInNldFRyYW5zZm9ybWVkUG9zIiwicmVwbHlUb1VzZXIiLCJib3hSZWYiLCJyZXBseVRvIiwiUHJvamVjdFJldmlld0NvbW1lbnRQYW5lbCIsInJldmVyc2UiLCJDb21tZW50V2l0aFJlcGx5IiwiUHJvamVjdFJldmlld0NvbW1lbnRSZXBseSIsInNldFJlcGx5IiwiYWRkUmVwbHlNdXRhdGlvbiIsIlByb2plY3RSZXZpZXdNYXJrZXIiLCJQcm9qZWN0UmV2aWV3UGFnaW5hdGlvbiIsImFsbEltYWdlcyIsInVzZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXlVcCIsImN1cnJlbnRJbWFnZSIsImluZGV4T2YiLCJwcmV2SW1hZ2UiLCJuZXh0SW1hZ2UiLCJuYXZpZ2F0ZSIsImRpcmVjdGlvbiIsInRvU3RyaW5nIiwicmVmIiwicG9zIiwibWFya2VyU3BhY2VyIiwibWFya2VyU2l6ZSIsIm9mZnNldCIsImJveFdpZHRoIiwiYm94SGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJpbm5lcldpZHRoIiwiYm94UGVyY2VudFdpZHRoIiwic2NyZWVuSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJib3hQZXJjZW50SGVpZ2h0IiwiaW5wdXQiLCJtZW50aW9uTm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVudGlvbiIsIm1lbnRpb25Jbm5lciIsImlubmVySFRNTCIsInVzZXJPZk1lbnRpb24iLCJzdHlsZSIsInNldFByb3BlcnR5IiwiZm9jdXMiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInRvZ2dsZSIsInVzZUNhbGxiYWNrIiwiZXZlbnROYW1lIiwiaGFuZGxlciIsImVsZW1lbnQiLCJzYXZlZEhhbmRsZXIiLCJpc1N1cHBvcnRlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVwZGF0ZVByb3BzIiwic2V0U2VsZWN0ZWQiLCJzZWxlY3RlZElkIiwiaW5pdGlhbFZhbHVlIiwic3RvcmFnZVR5cGUiLCJpdGVtIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzdG9yZWRWYWx1ZSIsInNldFN0b3JlZFZhbHVlIiwidmFsdWVUb1N0b3JlIiwiRnVuY3Rpb24iLCJzdHJpbmdpZnkiLCJFcnJvciIsImNsaWVudCIsIlF1ZXJ5Q2xpZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJxdWVyaWVzIiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJhcHBOb2RlIiwiZ2V0RWxlbWVudEJ5SWQiLCJMb2dpbiIsIlByb2plY3REZXRhaWwiLCJ1c2VQYXJhbXMiLCJQcm9qZWN0T3ZlcnZpZXciLCJQcm9qZWN0UmV2aWV3IiwiU2lnbnVwIiwic3RyaW5nIiwiY2hhckF0IiwiVVNFUl9ST0xFUyIsIlJPTEVfQURNSU4iLCJST0xFX1VTRVIiLCJST0xFX1VTRVJfQkFTSUMiLCJyb2xlcyIsInRlc3QiLCJtYXhIZWlnaHQiLCJxdWFsaXR5Iiwicm90YXRpb24iLCJvdXRwdXRUeXBlIiwicmVzaXplSW1hZ2VUeXBlIiwib3B0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwiUmVzaXplciIsImltYWdlRmlsZVJlc2l6ZXIiLCJwb3AiLCJ1cmkiLCJyZXNpemVJbWFnZSIsImFsbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FB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QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFDRzJiLFdBQVcsQ0FBQzNiLEtBQUQsQ0FEZDs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVg7O0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRFksQ0FEQzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7Ozs7Ozs7Ozs7QUN0Q2YsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvYXBwL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2Fzc2V0cy9hcHAvanMvbWFpbi5qc1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2JhY2tncm91bmQtbG9naW4uanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2JhY2tncm91bmQtbG9naW5AMnguanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FkZF9pbWFnZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYWRkX3Byb2plY3Quc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FkZF91c2VyLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hcmNoaXZlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jaGVjay1jaXJjbGUuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2NoZWNrLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jaGV2cm9uLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jbG9zZS13aGl0ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY2xvc2Uuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2NvbW1lbnQuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Rhbmdlci5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZGVsZXRlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9lZGl0LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9sZWF2ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbmV4dC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvc3Rhci5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvc3VjY2Vzcy5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvdXBsb2FkLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy93YXJuaW5nLnN2Z1wiOyIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgU3dpdGNoLCBSb3V0ZSwgUmVkaXJlY3QsIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgSGVhZGVyTmF2aWdhdGlvbiwgUGFnZUxvYWRlciB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbi8qIFNlcnZpY2VzICovXG5pbXBvcnQgeyBnZXRSb2xlIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4gfSBmcm9tICcuL2FuaW1hdGlvbnMnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGZldGNoQ3VycmVudFVzZXIsIFFVRVJZX0tFWVMgfSBmcm9tICcuL2FwaSc7XG5cbi8qIFJvdXRlcyAqL1xuaW1wb3J0IHJvdXRlcywgeyBST1VURVMgfSBmcm9tICcuL3JvdXRlcyc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VTdG9yYWdlIH0gZnJvbSAnLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PFJvdXRlcj5cblx0XHRcdDxSb3V0ZXJCb2R5IC8+XG5cdFx0PC9Sb3V0ZXI+XG5cdCk7XG59XG5cbmNvbnN0IFJvdXRlckJvZHkgPSAoKSA9PiB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUoKTtcblx0Y29uc3QgW3VzZXJSb2xlLCBzZXRVc2VyUm9sZV0gPSB1c2VTdGF0ZShbXSk7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgW3VzZXJJZF0gPSB1c2VTdG9yYWdlKCd1c2VySWQnLCBhdG9iKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKSkpO1xuXHRjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG5cblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGlzTG9hZGluZyB9ID0gdXNlUXVlcnkoUVVFUllfS0VZUy5DVVJSRU5UX1VTRVIsICgpID0+IGZldGNoQ3VycmVudFVzZXIoeyB1c2VySWQgfSksIHtcblx0XHRyZXRyeTogZmFsc2UsXG5cdFx0b25TdWNjZXNzOiAodXNlcikgPT4ge1xuXHRcdFx0c2V0Q3VycmVudFVzZXIodXNlcik7XG5cdFx0XHRzZXRVc2VyUm9sZShnZXRSb2xlKHVzZXIpKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8U3RhdGljQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXIsIHVzZXJSb2xlIH19PlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0ey8qIFNob3cgZGlmZmVyZW50IGhlYWRlcnMgYmFzZWQgb24gcm91dGUgKi99XG5cdFx0XHRcdHshW1JPVVRFUy5sb2dpbiwgUk9VVEVTLnNpZ251cF0uaW5jbHVkZXMobG9jYXRpb24ucGF0aG5hbWUpICYmICFsb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygncmV2aWV3JykgJiYgPEhlYWRlck5hdmlnYXRpb24gLz59XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDxQYWdlTG9hZGVyIHsuLi57IGlzTG9hZGluZyB9fT5cblx0XHRcdFx0PEFuaW1hdGVQcmVzZW5jZSBleGl0QmVmb3JlRW50ZXI+XG5cdFx0XHRcdFx0PFN3aXRjaCBsb2NhdGlvbj17bG9jYXRpb259IGtleT17bG9jYXRpb24ucGF0aG5hbWV9PlxuXHRcdFx0XHRcdFx0ey8qIFJlZGlyZWN0IHRvIC9wcm9qZWN0cyBpZiBhIHVzZXIgaXMgbG9nZ2VkIGluICovfVxuXHRcdFx0XHRcdFx0e2N1cnJlbnRVc2VyICYmIFtST1VURVMubG9naW4sIFJPVVRFUy5zaWdudXBdLmluY2x1ZGVzKGxvY2F0aW9uLnBhdGhuYW1lKSAmJiAoXG5cdFx0XHRcdFx0XHRcdDxSZWRpcmVjdCB0bz17Uk9VVEVTLnByb2plY3RzfSAvPlxuXHRcdFx0XHRcdFx0KX1cblxuXHRcdFx0XHRcdFx0ey8qIFJlZGlyZWN0IHRvIC9sb2dpbiBpZiBhIHVzZXIgaXMgbm90IGxvZ2dlZCBpbiBvbiB0aGUgL3Byb2plY3RzIHJvdXRlICovfVxuXHRcdFx0XHRcdFx0eyFjdXJyZW50VXNlciAmJiBsb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhST1VURVMucHJvamVjdHMpICYmIDxSZWRpcmVjdCB0bz17Uk9VVEVTLmxvZ2lufSAvPn1cblxuXHRcdFx0XHRcdFx0ey8qIFJlbmRlciByb3V0ZXMgKi99XG5cdFx0XHRcdFx0XHR7cm91dGVzLm1hcCgoeyBwYXRoLCBjb21wb25lbnQ6IENvbXBvbmVudCwgcHJvcHMgfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8Um91dGUga2V5PXtwYXRofSBwYXRoPXtwYXRofSBleGFjdD5cblx0XHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdiBrZXk9e3BhdGh9IHsuLi5GQURFX0lOfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxDb21wb25lbnQgey4uLnsgLi4ucHJvcHMsIGN1cnJlbnRVc2VyLCB1c2VyUm9sZSB9fSAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHRcdFx0PC9Sb3V0ZT5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvU3dpdGNoPlxuXHRcdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDwvUGFnZUxvYWRlcj5cblxuXHRcdFx0ey8qIFRvYXN0ICovfVxuXHRcdFx0PFRvYXN0Q29udGFpbmVyXG5cdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0aGlkZVByb2dyZXNzQmFyOiB0cnVlLFxuXHRcdFx0XHRcdG5ld2VzdE9uVG9wOiB0cnVlLFxuXHRcdFx0XHRcdHBvc2l0aW9uOiAnYm90dG9tLWxlZnQnLFxuXHRcdFx0XHRcdGNsb3NlQnV0dG9uOiBmYWxzZSxcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cdFx0PC9TdGF0aWNDb250ZXh0LlByb3ZpZGVyPlxuXHQpO1xufTtcbiIsImNvbnN0IEVBU0UgPSBbMC42NSwgMCwgMC4zNSwgMV07XG5cbmNvbnN0IEZBREVfSU4gPSB7XG5cdGluaXRpYWw6IHtcblx0XHRvcGFjaXR5OiAwLFxuXHR9LFxuXHRhbmltYXRlOiB7XG5cdFx0b3BhY2l0eTogMSxcblx0fSxcblx0ZXhpdDoge1xuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdHRyYW5zaXRpb246IHtcblx0XHRlYXNlOiBFQVNFLFxuXHRcdGR1cmF0aW9uOiAwLjIsXG5cdH0sXG59O1xuXG5jb25zdCBGQURFX0lOX1VQID0gKHkgPSAxMDApID0+ICh7XG5cdGluaXRpYWw6IHtcblx0XHR5OiB5LFxuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdGFuaW1hdGU6IHtcblx0XHR5OiAwLFxuXHRcdG9wYWNpdHk6IDEsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0Mixcblx0XHRcdHN0aWZmbmVzczogODAwLFxuXHRcdH0sXG5cdH0sXG5cdGV4aXQ6IHtcblx0XHR5OiB5LFxuXHRcdG9wYWNpdHk6IDAsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0Mixcblx0XHRcdHN0aWZmbmVzczogMTIwMCxcblx0XHR9LFxuXHR9LFxufSk7XG5cbmNvbnN0IFRSQU5TRk9STV9VUCA9IHtcblx0aW5pdGlhbDoge1xuXHRcdHk6ICcxMDAlJyxcblx0fSxcblx0YW5pbWF0ZToge1xuXHRcdHk6ICcwJScsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0MSxcblx0XHRcdHN0aWZmbmVzczogNjAwLFxuXHRcdH0sXG5cdH0sXG5cdGV4aXQ6IHtcblx0XHR5OiAnMTAwJScsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0MSxcblx0XHRcdHN0aWZmbmVzczogMTIwMCxcblx0XHR9LFxuXHR9LFxufTtcblxuY29uc3QgU0NBTEVfRkFERSA9IHtcblx0aW5pdGlhbDoge1xuXHRcdHNjYWxlOiAwLFxuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdGFuaW1hdGU6IHtcblx0XHRzY2FsZTogMSxcblx0XHRvcGFjaXR5OiAxLFxuXHR9LFxuXHRleGl0OiB7XG5cdFx0c2NhbGU6IDAsXG5cdFx0b3BhY2l0eTogMCxcblx0fSxcblx0dHJhbnNpdGlvbjoge1xuXHRcdGVhc2U6IEVBU0UsXG5cdFx0ZHVyYXRpb246IDAuMixcblx0fSxcbn07XG5cbmNvbnN0IFNUQUdHRVJfVVAgPSAoaW5kZXggPSAwKSA9PiAoe1xuXHRpbml0aWFsOiB7IG9wYWNpdHk6IDAsIHk6IDM1IH0sXG5cdGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgeTogMCwgdHJhbnNpdGlvbjogeyB0eXBlOiAnc3ByaW5nJywgZGFtcGluZzogMzAsIHN0aWZmbmVzczogNDUwLCBkZWxheTogaW5kZXggKiAwLjAzNSB9IH0sXG5cdGV4aXQ6IHsgb3BhY2l0eTogMCwgc2NhbGU6IDAuMjUsIHRyYW5zaXRpb246IHsgdHlwZTogJ3NwcmluZycsIGRhbXBpbmc6IDMwLCBzdGlmZm5lc3M6IDYwMCB9IH0sXG59KTtcblxuY29uc3QgU1RBR0dFUl9MRUZUID0gKGluZGV4ID0gMCkgPT4gKHtcblx0aW5pdGlhbDogeyBvcGFjaXR5OiAwLCB4OiAxMCB9LFxuXHRhbmltYXRlOiB7IG9wYWNpdHk6IDEsIHg6IDAsIHRyYW5zaXRpb246IHsgdHlwZTogJ3NwcmluZycsIGRhbXBpbmc6IDMwLCBzdGlmZm5lc3M6IDMwMCwgZGVsYXk6IGluZGV4ICogMC4wMzUgfSB9LFxuXHRleGl0OiB7IG9wYWNpdHk6IDAsIHg6IDEwLCB0cmFuc2l0aW9uOiB7IHR5cGU6ICdzcHJpbmcnLCBkYW1waW5nOiAzMCwgc3RpZmZuZXNzOiA2MDAgfSB9LFxufSk7XG5cbmNvbnN0IFNMSURFX0lOID0ge1xuXHRpbml0aWFsOiB7XG5cdFx0eDogJy0xMDAlJyxcblx0fSxcblx0YW5pbWF0ZToge1xuXHRcdHg6ICcwJScsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0ZHVyYXRpb246IDAuMixcblx0XHRcdGVhc2U6IFswLjY1LCAwLCAwLjM1LCAxXSxcblx0XHR9LFxuXHR9LFxuXHRleGl0OiB7XG5cdFx0eDogJy0xMDAlJyxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRkdXJhdGlvbjogMC4xLFxuXHRcdFx0ZWFzZTogWzAuNjUsIDAsIDAuMzUsIDFdLFxuXHRcdH0sXG5cdH0sXG59O1xuXG5leHBvcnQgeyBGQURFX0lOLCBGQURFX0lOX1VQLCBUUkFOU0ZPUk1fVVAsIFNDQUxFX0ZBREUsIFNUQUdHRVJfVVAsIFNUQUdHRVJfTEVGVCwgU0xJREVfSU4gfTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8qIEFkZCBjb21tZW50IHwgZXhwZWN0cyBwaGFzZSBpZCwgdXNlciBpZCBhbmQgZm9ybVJlZiBvYmVjdCAqL1xuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSBhc3luYyAoeyBwaGFzZUlkLCB1c2VySWQsIGNvbW1lbnQsIG1lbnRpb25lZCwgcG9zaXRpb24gfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblxuXHRwYXJhbXMuYXBwZW5kKCd1c2VySWQnLCB1c2VySWQpO1xuXHRwYXJhbXMuYXBwZW5kKCdjb21tZW50JywgY29tbWVudCk7XG5cdHBhcmFtcy5hcHBlbmQoJ3Bvc2l0aW9uWCcsIHBvc2l0aW9uLnhQZXJjZW50KTtcblx0cGFyYW1zLmFwcGVuZCgncG9zaXRpb25ZJywgcG9zaXRpb24ueVBlcmNlbnQpO1xuXHRwYXJhbXMuYXBwZW5kKCdyZWZlcmVyJywgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoJy8nLCAnJykpO1xuXG5cdGlmIChtZW50aW9uZWQubGVuZ3RoKSB7XG5cdFx0cGFyYW1zLmFwcGVuZCgnbWVudGlvbmVkW10nLCBtZW50aW9uZWQpO1xuXHR9XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9jb21tZW50cy9hZGQvJHtwaGFzZUlkfWAsIHBhcmFtcyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBBZGQgY29tbWVudCB8IGV4cGVjdHMgcGhhc2UgaWQsIHVzZXIgaWQgYW5kIGZvcm1SZWYgb2JlY3QgKi9cbmV4cG9ydCBjb25zdCBhZGRSZXBseSA9IGFzeW5jICh7IGNvbW1lbnRJZCwgcmVwbHksIG1lbnRpb25lZCB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuXG5cdHBhcmFtcy5hcHBlbmQoJ3JlcGx5JywgcmVwbHkpO1xuXHRwYXJhbXMuYXBwZW5kKCdyZWZlcmVyJywgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoJy8nLCAnJykpO1xuXG5cdGlmIChtZW50aW9uZWQubGVuZ3RoKSB7XG5cdFx0cGFyYW1zLmFwcGVuZCgnbWVudGlvbmVkW10nLCBtZW50aW9uZWQpO1xuXHR9XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9jb21tZW50cy9yZXBseS8ke2NvbW1lbnRJZH1gLCBwYXJhbXMpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vc2VjdXJpdHknO1xuZXhwb3J0ICogZnJvbSAnLi9wcm9qZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vcHJvamVjdEltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5leHBvcnQgKiBmcm9tICcuL2NvbW1lbnQnO1xuXG5leHBvcnQgY29uc3QgUVVFUllfS0VZUyA9IHtcblx0Q1VSUkVOVF9VU0VSOiAnY3VycmVudF91c2VyJyxcblx0UFJPSkVDVF9CWV9VU0VSOiAncHJvamVjdF9ieV91c2VyJyxcblx0UFJPSkVDVF9CWV9JRDogJ3Byb2plY3RfYnlfaWQnLFxuXHRQUk9KRUNUX0lNQUdFX0JZX0lEOiAncHJvamVjdF9pbWFnZV9ieV9pZCcsXG5cdEdMT0JBTF9VU0VSUzogJ2dsb2JhbF91c2VycycsXG5cdFBST0pFQ1RfVVNFUlM6ICdwcm9qZWN0X3VzZXJzJyxcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBGZXRjaCBwcm9qZWN0cyBieSB1c2VyIHwgZXhwZWN0cyB1c2VyIGlkICovXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9qZWN0c0J5VXNlciA9IGFzeW5jICh7IHVzZXJJZCB9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9qZWN0cy9nZXQvJHt1c2VySWR9YCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBGZXRjaCBwcm9qZWN0cyBieSBpZCB8IGV4cGVjdHMgcHJvamVjdCBpZCAqL1xuZXhwb3J0IGNvbnN0IGZldGNoUHJvamVjdEJ5SWQgPSBhc3luYyAoeyBwcm9qZWN0SWQgfSkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcHJvamVjdC9nZXQvJHtwcm9qZWN0SWR9YCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBBZGQgcHJvamVjdCAqL1xuZXhwb3J0IGNvbnN0IGFkZFByb2plY3QgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvcHJvamVjdHMvYWRkJyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBEZWxldGUgcHJvamVjdChzKSB8IGV4cGVjdHMgYXJyYXkgb2YgcHJvamVjdElkcyAgKi9cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9qZWN0cyA9IGFzeW5jICh7IHByb2plY3RJZHMgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblx0cHJvamVjdElkcy5mb3JFYWNoKChpZCkgPT4gcGFyYW1zLmFwcGVuZCgncHJvamVjdHNbXScsIGlkKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9kZWxldGVgLCBwYXJhbXMpO1xuXG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBMZWF2ZSBwcm9qZWN0KHMpIHwgZXhwZWN0cyBhcnJheSBvZiBwcm9qZWN0SWRzIGFuZCB1c2VyIGlkICAqL1xuZXhwb3J0IGNvbnN0IGxlYXZlUHJvamVjdHMgPSBhc3luYyAoeyBwcm9qZWN0SWRzLCB1c2VySWQgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblx0cHJvamVjdElkcy5mb3JFYWNoKChpZCkgPT4gcGFyYW1zLmFwcGVuZCgncHJvamVjdHNbXScsIGlkKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9sZWF2ZS8ke3VzZXJJZH1gLCBwYXJhbXMpO1xuXG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBFZGl0IHByb2plY3QgfCBleHBlY3RzIGZvcm1EYXRhIG9iamVjdCBhbmQgcHJvamVjdCBpZCAgKi9cbmV4cG9ydCBjb25zdCBlZGl0UHJvamVjdCA9IGFzeW5jICh7IGZvcm1SZWYsIGlkIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKGZvcm1SZWYuY3VycmVudCk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9lZGl0LyR7aWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBGZXRjaCBwcm9qZWN0SW1hZ2UgYnkgaWQgfCBleHBlY3RzIHByb2plY3QgaW1hZ2UgaWQgKi9cbmV4cG9ydCBjb25zdCBmZXRjaFByb2plY3RJbWFnZUJ5SWQgPSBhc3luYyAoeyBwcm9qZWN0SW1hZ2VJZCB9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9pbWFnZXMvZ2V0LyR7cHJvamVjdEltYWdlSWR9YCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBBZGQgcHJvamVjdEltYWdlKHMpIHwgZXhwZWN0cyBwcm9qZWN0IGlkIGFuZCBhcnJheSBvZiBpbWFnZXMgKGJsb2IpICovXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdEltYWdlcyA9IGFzeW5jICh7IHByb2plY3RJZCwgaW1hZ2VzIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5cdGltYWdlcy5mb3JFYWNoKChpbWFnZSwgaW1hZ2VJbmRleCkgPT4ge1xuXHRcdHBhcmFtcy5hcHBlbmQoYGltYWdlc1ske2ltYWdlSW5kZXh9XVtvcmlnaW5hbF1gLCBpbWFnZS5vcmlnaW5hbCk7XG5cdFx0cGFyYW1zLmFwcGVuZChgaW1hZ2VzWyR7aW1hZ2VJbmRleH1dW3RodW1ibmFpbF1gLCBpbWFnZS50aHVtYm5haWwpO1xuXHRcdHBhcmFtcy5hcHBlbmQoYGltYWdlc1ske2ltYWdlSW5kZXh9XVt0aHVtYm5haWxSZXRpbmFdYCwgaW1hZ2UudGh1bWJuYWlsUmV0aW5hKTtcblx0fSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9pbWFnZXMvYWRkLyR7cHJvamVjdElkfWAsIHBhcmFtcyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBEZWxldGUgcHJvamVjdEltYWdlKHMpIHwgZXhwZWN0cyBwcm9qZWN0IGlkIGFuZCBhcnJheSBvZiBwcm9qZWN0SW1hZ2VJZHMgICovXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvamVjdEltYWdlcyA9IGFzeW5jICh7IHByb2plY3RJZCwgcHJvamVjdEltYWdlSWRzIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5cdHByb2plY3RJbWFnZUlkcy5mb3JFYWNoKChpZCkgPT4gcGFyYW1zLmFwcGVuZCgncHJvamVjdEltYWdlc1tdJywgaWQpKTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2ltYWdlcy9kZWxldGUvJHtwcm9qZWN0SWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIEVkaXQgcHJvamVjdEltYWdlIHwgZXhwZWN0cyBmb3JtUmVmIG9iamVjdCBhbmQgcHJvamVjdEltYWdlIGlkICAqL1xuZXhwb3J0IGNvbnN0IGVkaXRQcm9qZWN0SW1hZ2UgPSBhc3luYyAoeyBmb3JtUmVmLCBpZCB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvaW1hZ2VzL2VkaXQvJHtpZH1gLCBwYXJhbXMpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8qIFNpZ251cCB0byBwbGF0Zm9ybSB8IGV4cGVjdHMgZm9ybVJlZiBvYmplY3QgYW5kIG9wdGlvbmFsIHVzZXJJZCAqL1xuZXhwb3J0IGNvbnN0IHNpZ251cCA9IGFzeW5jICh7IGZvcm1SZWYsIHVzZXJJZCB9KSA9PiB7XG5cdGxldCB1cmwgPSAnL2FwaS9zaWdudXAnO1xuXHRpZiAodXNlcklkKSB1cmwgPSBgL2FwaS9zaWdudXAvJHt1c2VySWR9YDtcblxuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybVJlZi5jdXJyZW50KTtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdCh1cmwsIHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIExvZ2luIHRvIHBsYXRmb3JtIHwgZXhwZWN0cyBmb3JtUmVmIG9iamVjdCAqL1xuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgZm9ybVJlZiB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCB7XG5cdFx0ZW1haWw6IHBhcmFtcy5nZXQoJ2VtYWlsJyksXG5cdFx0cGFzc3dvcmQ6IHBhcmFtcy5nZXQoJ3Bhc3N3b3JkJyksXG5cdH0pO1xuXG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBMb2dvdXQgZnJvbSBwbGF0Zm9ybSAqL1xuZXhwb3J0IGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2xvZ291dCcpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8qIEZldGNoIGN1cnJlbnQgKGxvZ2dlZCBpbikgdXNlciB8IGV4cGVjdHMgdXNlciBpZCAqL1xuZXhwb3J0IGNvbnN0IGZldGNoQ3VycmVudFVzZXIgPSBhc3luYyAoeyB1c2VySWQgfSkgPT4ge1xuXHRsZXQgdXJsID0gJy9hcGkvdXNlcnMvZ2V0Jztcblx0aWYgKHVzZXJJZCkgdXJsID0gYCR7dXJsfS8ke3VzZXJJZH1gO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRmV0Y2ggYWxsIHVzZXJzIGluIGRiICovXG5leHBvcnQgY29uc3QgZmV0Y2hHb2JhbFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdXNlcnMvZ2V0L2FsbCcpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRmV0Y2ggcHJvamVjdCB1c2VycyAqL1xuZXhwb3J0IGNvbnN0IGZldGNoUHJvamVjdFVzZXJzID0gYXN5bmMgKHsgcHJvamVjdElkIH0pID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3VzZXJzL2dldC9wcm9qZWN0LyR7cHJvamVjdElkfWApO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogQWRkIHVzZXIgdG8gcHJvamVjdCB8IGV4cGVjdHMgcHJvamVjdCBpZCBhbmQgdXNlciBlbWFpbCAqL1xuZXhwb3J0IGNvbnN0IGFkZFVzZXIgPSBhc3luYyAoeyBwcm9qZWN0SWQsIGVtYWlsIH0pID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS91c2Vycy9hZGQvJHtwcm9qZWN0SWR9YCwge1xuXHRcdGVtYWlsOiBlbWFpbCxcblx0XHRyZWZlcmVyOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgnLycsICcnKSxcblx0fSk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBEZWxldGUgdXNlciBmcm9tIHByb2plY3QgfCBleHBlY3RzIHByb2plY3QgaWQgYW5kIHVzZXIgaWQgKi9cbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKHsgcHJvamVjdElkLCB1c2VySWQgfSkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3VzZXJzL2RlbGV0ZS8ke3Byb2plY3RJZH1gLCB7IHVzZXJJZCB9KTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgVFJBTlNGT1JNX1VQIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWN0aW9uTWVudSh7IHNlbGVjdGVkLCByZXNldFNlbGVjdGVkLCBhY3Rpb25zIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdiB7Li4uVFJBTlNGT1JNX1VQfSBjbGFzc05hbWU9XCJiYXIgYmFyLS1wcm9qZWN0XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmFyX19idG4gYnRuIGJ0bi1saW5rIGQtaW5saW5lLWZsZXggdGV4dC13aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3Jlc2V0U2VsZWN0ZWR9PlxuXHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTRcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWwtMiBtYi0wXCI+e3NlbGVjdGVkLmxlbmd0aH0gc2VsZWN0ZWQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiYmFyX19saXN0IGxpc3QgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHR7YWN0aW9ucy5tYXAoXG5cdFx0XHRcdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhlbWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1Blcm1pc3Npb24sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb24sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb25TaXplID0gMTIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG11dGF0aW9uID0gKCkgPT4ge30sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzTG9hZGluZyA9IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdGFjdGlvbkluZGV4XG5cdFx0XHRcdFx0XHRcdFx0KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoaGFzUGVybWlzc2lvbi5pbmNsdWRlcyh1c2VyUm9sZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXthY3Rpb25JbmRleH0gY2xhc3NOYW1lPVwibGlzdF9faXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJiYXJfX2J0biBidG4gYnRuLWxpbmsgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LWRlY29yYXRpb24tbm9uZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e211dGF0aW9ufT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGljb24td3JhcHBlciBpY29uLXdyYXBwZXItLSR7dGhlbWV9IGljb24td3JhcHBlci0taW50ZXJhY3RpdmVgfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TG9hZGluZ1dyYXBwZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvYWRpbmc9e2lzTG9hZGluZ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvYWRlclNpemU9ezEyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3Nlcz17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkZXJDbGFzc2VzOiBgcG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4IHRleHQtJHt0aGVtZX1gLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d3JhcHBlcj1cInN2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGljb24gaWNvbi0tJHtpY29uU2l6ZX0gdGV4dC0ke3RoZW1lfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aWNvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Mb2FkaW5nV3JhcHBlcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImJ0bl9fdGV4dCB0ZXh0LXdoaXRlIG1sLTJcIj57dGl0bGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbW90aW9uLmRpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Utd2hpdGUuc3ZnJztcbmltcG9ydCB3YXJuaW5nSWNvbiBmcm9tICdpY29ucy93YXJuaW5nLnN2Zyc7XG5pbXBvcnQgZXJyb3JJY29uIGZyb20gJ2ljb25zL2Rhbmdlci5zdmcnO1xuaW1wb3J0IHN1Y2Nlc3NJY29uIGZyb20gJ2ljb25zL3N1Y2Nlc3Muc3ZnJztcblxuLyogR2xvYmFsICovXG5jb25zdCBhcHBlYXJhbmNlVHlwZXMgPSB7XG5cdHdhcm5pbmc6IHtcblx0XHR0aXRsZTogJ1dhcm5pbmcnLFxuXHRcdGljb246IHdhcm5pbmdJY29uLFxuXHR9LFxuXHRkYW5nZXI6IHtcblx0XHR0aXRsZTogJ0Vycm9yJyxcblx0XHRpY29uOiBlcnJvckljb24sXG5cdH0sXG5cdHN1Y2Nlc3M6IHtcblx0XHR0aXRsZTogJ1N1Y2Nlc3MnLFxuXHRcdGljb246IHN1Y2Nlc3NJY29uLFxuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxlcnQoeyBtZXNzYWdlLCBhcHBlYXJhbmNlLCBjbG9zZVRvYXN0IH0pIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC0tbm90aWZpY2F0aW9uXCIgcm9sZT1cImFsZXJ0XCIgZGF0YS1hbGVydD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGFsZXJ0X19pY29uLXdyYXBwZXIgYWxlcnRfX2ljb24td3JhcHBlci0tJHthcHBlYXJhbmNlfSBtci0yYH0+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHXG5cdFx0XHRcdFx0XHR3cmFwcGVyPVwic3ZnXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsZXJ0X19pY29uIGljb24gaWNvbi0tMTJcIlxuXHRcdFx0XHRcdFx0c3JjPXthcHBlYXJhbmNlVHlwZXNbYXBwZWFyYW5jZV0uaWNvbn1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItMFwiPnthcHBlYXJhbmNlVHlwZXNbYXBwZWFyYW5jZV0udGl0bGV9PC9wPlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImFsZXJ0X19idG4gYnRuIGJ0bi1saW5rIG1sLWF1dG9cIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Y2xvc2VUb2FzdH0+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEwXCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhbGVydF9fbWVzc2FnZSB0ZXh0LS1zbSB0ZXh0LW11dGVkLS03MCBtci1sZy04XCI+e21lc3NhZ2V9PC9zcGFuPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGJnIGZyb20gJ2ltYWdlcy9iYWNrZ3JvdW5kLWxvZ2luLmpwZyc7XG5pbXBvcnQgYmdSZXRpbmEgZnJvbSAnaW1hZ2VzL2JhY2tncm91bmQtbG9naW5AMnguanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFja2dyb3VuZCgpIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XG5cdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImJhY2tncm91bmRfX2ltYWdlXCIgc3JjPXtiZ30gc3JjU2V0PXtiZ1JldGluYX0gYWx0PVwiQmFja2dyb3VuZFwiIC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiB7YWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2hlY2tJY29uIGZyb20gJ2ljb25zL2NoZWNrLWNpcmNsZS5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24oe1xuXHR0aXRsZSxcblx0dHlwZSA9ICdidXR0b24nLFxuXHR0aGVtZSA9ICdzZWNvbmRhcnknLFxuXHRzaXplID0gJ3NtJyxcblx0ZXh0ZW5zaW9uQ2xhc3NlcyA9ICcnLFxuXHRvbkNsaWNrID0gKCkgPT4ge30sXG5cdGlzTG9hZGluZyA9IGZhbHNlLFxuXHRjb250ZW50VHlwZSA9ICd0ZXh0Jyxcblx0Y2hpbGRyZW4sXG59KSB7XG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgYnV0dG9uUmVmID0gdXNlUmVmKCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IGJ1dHRvbkhlaWdodCA9IGJ1dHRvblJlZi5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQ7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0cmVmPXtidXR0b25SZWZ9XG5cdFx0XHRjbGFzc05hbWU9e2BidG4gYnRuLSR7c2l6ZX0gYnRuLSR7dGhlbWV9ICR7ZXh0ZW5zaW9uQ2xhc3Nlc30gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcmB9XG5cdFx0XHRzdHlsZT17eyBoZWlnaHQ6IGJ1dHRvbkhlaWdodCB9fVxuXHRcdFx0ey4uLnsgdHlwZSwgb25DbGljayB9fT5cblx0XHRcdHtjb250ZW50VHlwZSA9PT0gJ3RleHQnID8gPFRleHQgey4uLnsgdGl0bGUsIGlzTG9hZGluZywgY2hpbGRyZW4gfX0gLz4gOiA8SWNvbiB7Li4ueyBpc0xvYWRpbmcgfX0gLz59XG5cdFx0PC9idXR0b24+XG5cdCk7XG59XG5cbmNvbnN0IFRleHQgPSAoeyB0aXRsZSwgaXNMb2FkaW5nLCBjaGlsZHJlbiB9KSA9PiAoXG5cdDxMb2FkaW5nV3JhcHBlclxuXHRcdGxvYWRpbmc9e2lzTG9hZGluZ31cblx0XHRsb2FkZXJTaXplPXsxNn1cblx0XHRjbGFzc2VzPXt7XG5cdFx0XHRsb2FkZXJDbGFzc2VzOiAncG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4IHRleHQtc2Vjb25kYXJ5Jyxcblx0XHRcdGRlZmF1bHRDbGFzc2VzOiAnZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlcicsXG5cdFx0fX0+XG5cdFx0PHNwYW4gY2xhc3NOYW1lPVwiYnRuX190ZXh0XCI+e3RpdGxlfTwvc3Bhbj5cblx0XHR7Y2hpbGRyZW59XG5cdDwvTG9hZGluZ1dyYXBwZXI+XG4pO1xuXG5jb25zdCBJY29uID0gKHsgaXNMb2FkaW5nIH0pID0+IChcblx0PGRpdiBjbGFzc05hbWU9XCJpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnkgaWNvbi13cmFwcGVyLS1pbnRlcmFjdGl2ZVwiPlxuXHRcdDxMb2FkaW5nV3JhcHBlclxuXHRcdFx0bG9hZGluZz17aXNMb2FkaW5nfVxuXHRcdFx0bG9hZGVyU2l6ZT17MTR9XG5cdFx0XHRjbGFzc2VzPXt7IGxvYWRlckNsYXNzZXM6ICdwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXggdGV4dC1zZWNvbmRhcnknLCBkZWZhdWx0Q2xhc3NlczogJ2QtZmxleCcgfX0+XG5cdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImFsZXJ0X19pY29uIGljb24gaWNvbi0tMTQgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e2NoZWNrSWNvbn0gLz5cblx0XHQ8L0xvYWRpbmdXcmFwcGVyPlxuXHQ8L2Rpdj5cbik7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSAncmVhY3QtZHJvcHpvbmUnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogU2VydmljZXMgKi9cbmltcG9ydCB7IHJlc2l6ZUltYWdlcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU0NBTEVfRkFERSwgRkFERV9JTiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRJbWFnZUljb24gZnJvbSAnaWNvbnMvYWRkX2ltYWdlLnN2Zyc7XG5pbXBvcnQgdXBsb2FkSW1hZ2VJY29uIGZyb20gJ2ljb25zL3VwbG9hZC5zdmcnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGFkZFByb2plY3RJbWFnZXMsIGRlbGV0ZVByb2plY3RJbWFnZXMsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wem9uZSh7IHByb2plY3RJZCwgcG9zaXRpdGlvbiA9ICdsZWZ0JywgY2hpbGRyZW4gfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0Y29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSB9ID0gdXNlRHJvcHpvbmUoe1xuXHRcdGFjY2VwdDogJ2ltYWdlLyonLFxuXHRcdG5vQ2xpY2s6IHRydWUsXG5cdFx0b25Ecm9wOiAoYWNjZXB0ZWRGaWxlcykgPT4gdXBkYXRlUHJvamVjdEltYWdlcygnYWRkJywgeyBpbWFnZXM6IGFjY2VwdGVkRmlsZXMgfSksXG5cdH0pO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBhZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24gPSB1c2VNdXRhdGlvbihhZGRQcm9qZWN0SW1hZ2VzLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKSxcblx0fSk7XG5cblx0Y29uc3QgZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlUHJvamVjdEltYWdlcywge1xuXHRcdG9uU3VjY2VzczogKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSksXG5cdH0pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB1cGRhdGVQcm9qZWN0SW1hZ2VzID0gYXN5bmMgKGFjdGlvbiwgcHJvcHMpID0+IHtcblx0XHRpZiAoYWN0aW9uID09PSAnYWRkJyAmJiBwcm9wcy5pbWFnZXMpIHtcblx0XHRcdGNvbnN0IHJlc2l6ZWRJbWFnZXMgPSBhd2FpdCByZXNpemVJbWFnZXMocHJvcHMuaW1hZ2VzKTtcblxuXHRcdFx0YWRkUHJvamVjdEltYWdlc011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgaW1hZ2VzOiByZXNpemVkSW1hZ2VzIH0pO1xuXHRcdH1cblxuXHRcdGlmIChhY3Rpb24gPT09ICdkZWxldGUnKSBkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkLCAuLi5wcm9wcyB9KTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3B6b25lXCIgey4uLmdldFJvb3RQcm9wcygpfT5cblx0XHRcdDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxuXHRcdFx0PERyb3B6b25lSW5uZXJcblx0XHRcdFx0YWRkSW1hZ2VMb2FkaW5nPXthZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24uaXNMb2FkaW5nfVxuXHRcdFx0XHR7Li4ueyB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc1BhcmVudERyYWdBY3RpdmU6IGlzRHJhZ0FjdGl2ZSwgcG9zaXRpdGlvbiB9fVxuXHRcdFx0Lz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0tZXF1YWxpemVkIGd1dHRlcnMtNVwiPlxuXHRcdFx0XHR7Y2hpbGRyZW4oeyB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc0xvYWRpbmc6IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbi5pc0xvYWRpbmcgfSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuLyogSW5uZXIgZHJvcHpvbmUgKi9cbmNvbnN0IERyb3B6b25lSW5uZXIgPSAoeyBhZGRJbWFnZUxvYWRpbmcsIHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzUGFyZW50RHJhZ0FjdGl2ZSwgcG9zaXRpdGlvbiB9KSA9PiB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzLCBpc0RyYWdBY3RpdmUgfSA9IHVzZURyb3B6b25lKHtcblx0XHRhY2NlcHQ6ICdpbWFnZS8qJyxcblx0XHRub0RyYWdFdmVudHNCdWJibGluZzogdHJ1ZSxcblx0XHRvbkRyb3A6IChhY2NlcHRlZEZpbGVzKSA9PiB1cGRhdGVQcm9qZWN0SW1hZ2VzKCdhZGQnLCB7IGltYWdlczogYWNjZXB0ZWRGaWxlcyB9KSxcblx0fSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZVwiIHsuLi5nZXRSb290UHJvcHMoKX0+XG5cdFx0XHQ8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHsoaXNEcmFnQWN0aXZlIHx8IGlzUGFyZW50RHJhZ0FjdGl2ZSkgJiYgKFxuXHRcdFx0XHRcdDxtb3Rpb24uZGl2IHsuLi5GQURFX0lOfSBjbGFzc05hbWU9XCJkcm9wem9uZV9fb3ZlcmxheVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnlcIiBzdHlsZT17eyAnLS1zaXplJzogNzUgfX0+XG5cdFx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0zMCB0ZXh0LXNlY29uZGFyeVwiIHNyYz17dXBsb2FkSW1hZ2VJY29ufSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0XHQ8bW90aW9uLmJ1dHRvblxuXHRcdFx0XHR7Li4uU0NBTEVfRkFERX1cblx0XHRcdFx0a2V5PVwiYWRkLXByb2plY3RcIlxuXHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0Y2xhc3NOYW1lPXtgaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0taW50ZXJhY3RpdmUgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnkgYnRuIGJ0bi1saW5rIGJ0bi0tYWRkIGJ0bi0tYWRkLSR7cG9zaXRpdGlvbn1gfVxuXHRcdFx0XHRzdHlsZT17eyAnLS1zaXplJzogNzUgfX0+XG5cdFx0XHRcdDxMb2FkaW5nV3JhcHBlclxuXHRcdFx0XHRcdGxvYWRpbmc9e2FkZEltYWdlTG9hZGluZ31cblx0XHRcdFx0XHRjbGFzc2VzPXt7IGxvYWRlckNsYXNzZXM6ICdwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXggdGV4dC1zZWNvbmRhcnknIH19XG5cdFx0XHRcdFx0bG9hZGVyU2l6ZT17MzB9PlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0zMCB0ZXh0LXNlY29uZGFyeVwiIHNyYz17YWRkSW1hZ2VJY29ufSAvPlxuXHRcdFx0XHQ8L0xvYWRpbmdXcmFwcGVyPlxuXHRcdFx0PC9tb3Rpb24uYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IEVkaXRhYmxlQm9keSBmcm9tICcuL0VkaXRhYmxlQm9keSc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGVkaXRJY29uIGZyb20gJ2ljb25zL2VkaXQuc3ZnJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9tYWluQ29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRhYmxlKHsgdGl0bGUsIHN1YnRpdGxlID0gJ1NhdmUgd2hlbiByZWFkeScsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHNldE1vZGFsT3BlbighbW9kYWxPcGVuKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVkaXRhYmxlIGQtZmxleCBhbGlnbi1pdGVtcy1iYXNlbGluZSBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJlZGl0YWJsZV9fY29udGVudFwiPntjaGlsZHJlbn08L2Rpdj5cblx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiAoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZWRpdGFibGVfX3RvZ2dsZSBidG4gYnRuLWxpbmsgaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0tc2Vjb25kYXJ5IGljb24td3JhcHBlci0taW50ZXJhY3RpdmUgc3RyZXRjaGVkLWxpbmsgbWwtM1wiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVNb2RhbH1cblx0XHRcdFx0XHRcdHN0eWxlPXt7ICctLXNpemUnOiAyNSB9fT5cblx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xMCB0ZXh0LXNlY29uZGFyeVwiIHNyYz17ZWRpdEljb259IC8+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PE1vZGFsIHsuLi57IHRpdGxlLCBzdWJ0aXRsZSwgbW9kYWxPcGVuLCB0b2dnbGVNb2RhbCB9fT5cblx0XHRcdFx0XHRcdDxFZGl0YWJsZUJvZHkgey4uLnsgdG9nZ2xlTW9kYWwsIC4uLnJlc3QgfX0gLz5cblx0XHRcdFx0XHQ8L01vZGFsPlxuXHRcdFx0XHQ8Lz5cblx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRleHRhcmVhQXV0b3NpemUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIEVsZW1lbnRzICovXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogU2VydmljZXMgKi9cbmltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdGFibGVCb2R5KHsgZmllbGRzLCB0b2dnbGVNb2RhbCwgbXV0YXRpb24sIG11dGF0aW9uSWQsIG11dGF0aW9uT25TdWNjZXNzIH0pIHtcblx0LyogUmVmcyAqL1xuXHRjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGVkaXRNdXRhdGlvbiA9IHVzZU11dGF0aW9uKG11dGF0aW9uLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHRtdXRhdGlvbk9uU3VjY2VzcygpO1xuXHRcdFx0dG9nZ2xlTW9kYWwoKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8Zm9ybVxuXHRcdFx0cmVmPXtmb3JtUmVmfVxuXHRcdFx0Y2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LWdyb3ctMSBwb3NpdGlvbi1yZWxhdGl2ZVwiXG5cdFx0XHRvblN1Ym1pdD17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGVkaXRNdXRhdGlvbi5tdXRhdGUoeyBmb3JtUmVmLCBpZDogbXV0YXRpb25JZCB9KTtcblx0XHRcdH19PlxuXHRcdFx0e2ZpZWxkcy5tYXAoKGZpZWxkLCBmaWVsZEluZGV4KSA9PiB7XG5cdFx0XHRcdHJldHVybiA8RmllbGQga2V5PXtmaWVsZEluZGV4fSB7Li4ueyAuLi5maWVsZCwgc2hvdWxkRm9jdXM6IGZpZWxkSW5kZXggPT09IDAgfX0gLz47XG5cdFx0XHR9KX1cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHR0aXRsZTogJ1NhdmUnLFxuXHRcdFx0XHRcdGNvbnRlbnRUeXBlOiBmaWVsZHMubGVuZ3RoID09PSAxID8gJ2ljb24nIDogJ3RleHQnLFxuXHRcdFx0XHRcdGV4dGVuc2lvbkNsYXNzZXM6IGZpZWxkcy5sZW5ndGggPT09IDEgPyAnZm9ybS1jb250cm9sLWJ0bicgOiAndy01MCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTMnLFxuXHRcdFx0XHRcdHRoZW1lOiBmaWVsZHMubGVuZ3RoID09PSAxID8gJ2RlZmF1bHQnIDogJ3NlY29uZGFyeScsXG5cdFx0XHRcdFx0aXNMb2FkaW5nOiBlZGl0TXV0YXRpb24uaXNMb2FkaW5nLFxuXHRcdFx0XHRcdHR5cGU6ICdzdWJtaXQnLFxuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHQ8L2Zvcm0+XG5cdCk7XG59XG5cbmNvbnN0IEZpZWxkID0gKHsgbmFtZSwgZGVmYXVsdFZhbHVlLCBzaG91bGRGb2N1cyA9IGZhbHNlIH0pID0+IHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShkZWZhdWx0VmFsdWUpO1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBFZmZlY3RzICovXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGlucHV0UmVmPy5jdXJyZW50ICYmIHNob3VsZEZvY3VzKSBpbnB1dFJlZj8uY3VycmVudD8uc2VsZWN0KCk7XG5cdH0sIFtdKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPXtuYW1lfT5cblx0XHRcdFx0e25hbWV9XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdFx0PFRleHRhcmVhQXV0b3NpemVcblx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC0tdGV4dFwiXG5cdFx0XHRcdGlkPXtuYW1lfVxuXHRcdFx0XHRuYW1lPXtuYW1lfVxuXHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdHZhbHVlPXt2YWx1ZX1cblx0XHRcdFx0b25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHNldFZhbHVlKHZhbHVlKX1cblx0XHRcdFx0cmVmPXtpbnB1dFJlZn1cblx0XHRcdFx0cGxhY2Vob2xkZXI9e2NhcGl0YWxpemVGaXJzdExldHRlcihuYW1lKX1cblx0XHRcdFx0b25Gb2N1cz17KCkgPT4gaW5wdXRSZWYuY3VycmVudC5zZWxlY3QoKX1cblx0XHRcdC8+XG5cdFx0PC8+XG5cdCk7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBSb3V0ZXMgKi9cbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5oZWFkZXIgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJcIiB7Li4uRkFERV9JTn0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBweC01IHB0LTUgcHgtbGctNiBwdC1sZy02IHB4LXhsLTEyIHB0LXhsLTEyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJfX2xvZ28gbG9nb1wiPlxuXHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT1cImxvZ29fX2xpbmsgdGV4dC1yZXNldFwiIHRvPXtST1VURVMubG9naW59IHRpdGxlPVwiUGFyYWxsZWwgRGFzaGJvYXJkXCI+XG5cdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwibG9nb19fdGl0bGUgdGV4dC11cHBlcmNhc2UgbWItMFwiPlBhcmFsbGVsPC9oMj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvZ29fX3N1YnRpdGxlIHRleHQtdXBwZXJjYXNlIGZvbnQtd2VpZ2h0LWxpZ2h0IG10LW4xXCI+RGFzaGJvYXJkPC9wPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21vdGlvbi5oZWFkZXI+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICcuLi8uLi9hcGkvc2VjdXJpdHknO1xuXG4vKiBSb3V0ZXMgKi9cbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlck5hdmlnYXRpb24oKSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cdGNvbnN0IHsgc2V0Q3VycmVudFVzZXIgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGxvZ291dE11dGF0aW9uID0gdXNlTXV0YXRpb24obG9nb3V0LCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHRoaXN0b3J5LnB1c2goUk9VVEVTLmxvZ2luKTtcblx0XHRcdHNldEN1cnJlbnRVc2VyKG51bGwpO1xuXHRcdFx0c2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSgndXNlcklkJyk7XG5cblx0XHRcdHRvYXN0KDxBbGVydCBtZXNzYWdlPXsnU3VjY2Vzc2Z1bGx5IGxvZ2dlZCBvdXQhJ30gYXBwZWFyYW5jZT1cInN1Y2Nlc3NcIiAvPik7XG5cdFx0fSxcblx0XHRvbkVycm9yOiAoKSA9PiB0b2FzdCg8QWxlcnQgbWVzc2FnZT17J1NvbWV0aGluZyB3ZW50IHdyb25nISd9IGFwcGVhcmFuY2U9XCJkYW5nZXJcIiAvPiksXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uaGVhZGVyIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyIG1haW4taGVhZGVyLS1wcm9qZWN0c1wiIHsuLi5GQURFX0lOfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJfX3dyYXBwZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWVuZFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJfX2xvZ28gbG9nb1wiPlxuXHRcdFx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPVwibG9nb19fbGluayB0ZXh0LXJlc2V0XCIgdG89e1JPVVRFUy5wcm9qZWN0c30gdGl0bGU9XCJQYXJhbGxlbCBEYXNoYm9hcmRcIj5cblx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cImxvZ29fX3RpdGxlIHRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGUgbWItMFwiPlBhcmFsbGVsPC9oMj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9nb19fc3VidGl0bGUgdGV4dC11cHBlcmNhc2UgdGV4dC13aGl0ZSBmb250LXdlaWdodC1saWdodCBtdC1uMVwiPlxuXHRcdFx0XHRcdFx0XHRcdERhc2hib2FyZFxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWhlYWRlcl9fbmF2IG1sLWF1dG9cIj5cblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LS1wcmltYXJ5XCI+XG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9XCJ7eyBwYXRoKCdhcHBfbG9nb3V0JykgfX1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9XCJMb2dvdXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmF2LWxpbmsgYnRuIGJ0bi1saW5rIHRleHQtcmVzZXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gbG9nb3V0TXV0YXRpb24ubXV0YXRlKCl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmF2LXRleHRcIj5Mb2dvdXQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbW90aW9uLmhlYWRlcj5cblx0KTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQWN0aW9uTWVudSB9IGZyb20gJy4vYWN0aW9uLW1lbnUvQWN0aW9uTWVudSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEFsZXJ0IH0gZnJvbSAnLi9hbGVydC9BbGVydCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJhY2tncm91bmQgfSBmcm9tICcuL2JhY2tncm91bmQvQmFja2dyb3VuZCc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kYWwgfSBmcm9tICcuL21vZGFsL01vZGFsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kYWxIZWFkZXIgfSBmcm9tICcuL21vZGFsL01vZGFsSGVhZGVyJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tICcuL2J1dHRvbi9CdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEcm9wem9uZSB9IGZyb20gJy4vZHJvcHpvbmUvRHJvcHpvbmUnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVkaXRhYmxlIH0gZnJvbSAnLi9lZGl0YWJsZS9FZGl0YWJsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEVkaXRhYmxlQm9keSB9IGZyb20gJy4vZWRpdGFibGUvRWRpdGFibGVCb2R5JztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2FkaW5nV3JhcHBlciB9IGZyb20gJy4vbG9hZGluZy13cmFwcGVyL0xvYWRpbmdXcmFwcGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2xpZGVJbiB9IGZyb20gJy4vc2xpZGUtaW4vU2xpZGVJbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhZ2VMb2FkZXIgfSBmcm9tICcuL3BhZ2UtbG9hZGVyL1BhZ2VMb2FkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYWdlV3JhcHBlciB9IGZyb20gJy4vcGFnZS13cmFwcGVyL1BhZ2VXcmFwcGVyJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VyQWRkIH0gZnJvbSAnLi91c2VyLWFkZC9Vc2VyQWRkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlckFkZFNlYXJjaCB9IGZyb20gJy4vdXNlci1hZGQvVXNlckFkZFNlYXJjaCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJBZGRTZWFyY2hSZXN1bHRzIH0gZnJvbSAnLi91c2VyLWFkZC9Vc2VyQWRkU2VhcmNoUmVzdWx0cyc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXIvSGVhZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhZGVyTmF2aWdhdGlvbiB9IGZyb20gJy4vaGVhZGVyL0hlYWRlck5hdmlnYXRpb24nO1xuXG5leHBvcnQgKiBmcm9tICcuL3VzZXJzL1VzZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VyIH0gZnJvbSAnLi91c2Vycy9Vc2VyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlcnMgfSBmcm9tICcuL3VzZXJzL1VzZXJzJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlclNlbGVjdCB9IGZyb20gJy4vdXNlcnMvVXNlclNlbGVjdCc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2VjdXJpdHlNb2RhbCB9IGZyb20gJy4vc2VjdXJpdHkvU2VjdXJpdHlNb2RhbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIExvZ2luRm9ybSB9IGZyb20gJy4vc2VjdXJpdHkvTG9naW5Gb3JtJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2lnbnVwRm9ybSB9IGZyb20gJy4vc2VjdXJpdHkvU2lnbnVwRm9ybSc7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU0NBTEVfRkFERSB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nV3JhcHBlcih7IGxvYWRpbmcsIGNoaWxkcmVuLCBsb2FkZXJTaXplID0gNDAsIGNsYXNzZXMgPSB7fSB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IGxvYWRlckNsYXNzZXMgPSAncG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4JywgZGVmYXVsdENsYXNzZXMgPSAnJyB9ID0gY2xhc3NlcztcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfT5cblx0XHRcdHtsb2FkaW5nID8gKFxuXHRcdFx0XHQ8bW90aW9uLmRpdiBrZXk9XCJsb2FkZXJcIiBjbGFzc05hbWU9e2xvYWRlckNsYXNzZXN9IHsuLi5TQ0FMRV9GQURFfT5cblx0XHRcdFx0XHQ8Q2lyY3VsYXJQcm9ncmVzcyBjb2xvcj1cImluaGVyaXRcIiBzaXplPXtsb2FkZXJTaXplfSAvPlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8bW90aW9uLmRpdiBrZXk9XCJkZWZhdWx0XCIgY2xhc3NOYW1lPXtkZWZhdWx0Q2xhc3Nlc30gey4uLlNDQUxFX0ZBREV9PlxuXHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0KX1cblx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IE1vZGFsSGVhZGVyIGZyb20gJy4vTW9kYWxIZWFkZXInO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOLCBGQURFX0lOX1VQIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VDbG9zZU9uRXNjIH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbCh7XG5cdHRpdGxlLFxuXHRzdWJ0aXRsZSxcblx0bW9kYWxPcGVuLFxuXHR0b2dnbGVNb2RhbCxcblx0Y2hpbGRyZW4sXG5cdHJlbmRlck9uQm9keSA9IHRydWUsXG5cdGNlbnRlciA9IHRydWUsXG5cdGV4dGVuc2lvbkNsYXNzZXMsXG5cdGNvbXBvbmVudHMgPSB7fSxcbn0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgSGVhZGVyQ29tcG9uZW50ID0gTW9kYWxIZWFkZXIgfSA9IGNvbXBvbmVudHM7XG5cblx0LyogSG9va3MgKi9cblx0dXNlQ2xvc2VPbkVzYyhtb2RhbE9wZW4sIHRvZ2dsZU1vZGFsKTtcblxuXHRjb25zdCByZW5kZXIgPSAoKSA9PiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdHttb2RhbE9wZW4gJiYgKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGN1c3RvbS1tb2RhbCAke2NlbnRlciAmJiAnY3VzdG9tLW1vZGFsLS1jZW50ZXInfSAke2V4dGVuc2lvbkNsYXNzZXN9YH0+XG5cdFx0XHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsLW92ZXJsYXlcIiB7Li4uRkFERV9JTn0gb25DbGljaz17dG9nZ2xlTW9kYWx9IC8+XG5cdFx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRcdGtleT1cImN1c3RvbS1tb2RhbC1jb250ZW50XCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fY29udGVudCBib3JkZXIgcC01XCJcblx0XHRcdFx0XHRcdHsuLi5GQURFX0lOX1VQKCl9PlxuXHRcdFx0XHRcdFx0PEhlYWRlckNvbXBvbmVudCB7Li4ueyB0aXRsZSwgc3VidGl0bGUsIHRvZ2dsZU1vZGFsIH19IC8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fYm9keSBkLWZsZXggbXQtMlwiPntjaGlsZHJlbn08L2Rpdj5cblx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0aWYgKHJlbmRlck9uQm9keSkge1xuXHRcdHJldHVybiBjcmVhdGVQb3J0YWwocmVuZGVyKCksIGRvY3VtZW50LmJvZHkpO1xuXHR9XG5cblx0cmV0dXJuIHJlbmRlcigpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbEhlYWRlcih7IHRpdGxlLCBzdWJ0aXRsZSwgdG9nZ2xlTW9kYWwgfSkge1xuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9faGVhZGVyIGQtZmxleCBhbGlnbi1pdGVtcy1zdGFydFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHctMTAwXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIHctMTAwXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX3RpdGxlXCI+e3RpdGxlfTwvcD5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fY2xvc2UgYnRuIGJ0bi1saW5rIG1sLWF1dG9cIlxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVNb2RhbH0+XG5cdFx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xMlwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0e3N1YnRpdGxlICYmIDxwIGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fc3VidGl0bGVcIj57c3VidGl0bGV9PC9wPn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4gfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZUxvYWRlcih7IGlzTG9hZGluZywgY2hpbGRyZW4gfSkge1xuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0e2lzTG9hZGluZyA/IChcblx0XHRcdFx0PG1vdGlvbi5kaXYgey4uLkZBREVfSU59PlxuXHRcdFx0XHRcdDxMaW5lYXJQcm9ncmVzcyBjb2xvcj1cInNlY29uZGFyeVwiIC8+XG5cdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxkaXYga2V5PVwiY2hpbGRyZW5cIj57Y2hpbGRyZW59PC9kaXY+XG5cdFx0XHQpfVxuXHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VXcmFwcGVyKHsgY2hpbGRyZW4gfSkge1xuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8bWFpbiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhbmUgcHktNSBweS1sZy0xMFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPntjaGlsZHJlbn08L2Rpdj5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQ8L21haW4+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEFsZXJ0LCBCdXR0b24gfSBmcm9tICcuLic7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgbG9naW4sIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlUGFnZVRpdGxlIH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuXG4vKiBSb3V0ZXMgKi9cbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luRm9ybSh7IGN1cnJlbnRVc2VyLCB0b2dnbGVNb2RhbCwgc2hvd1NpZ251cCA9IHRydWUgfSkge1xuXHQvKiBSZWZzICovXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBIb29rcyAqL1xuXHR1c2VQYWdlVGl0bGUoJ0xvZ2luJyk7XG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblx0Y29uc3Qge1xuXHRcdHJlZ2lzdGVyLFxuXHRcdGhhbmRsZVN1Ym1pdCxcblx0XHRmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG5cdH0gPSB1c2VGb3JtKHsgcmVWYWxpZGF0ZU1vZGU6ICdvbkNoYW5nZScsIG1vZGU6ICdvbkJsdXInIH0pO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBsb2dpbk11dGF0aW9uID0gdXNlTXV0YXRpb24obG9naW4sIHtcblx0XHRvblN1Y2Nlc3M6ICh1c2VyKSA9PiB7XG5cdFx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLkNVUlJFTlRfVVNFUik7XG5cblx0XHRcdGlmIChjdXJyZW50VXNlcikgdG9nZ2xlTW9kYWwoKTtcblxuXHRcdFx0dG9hc3QoPEFsZXJ0IG1lc3NhZ2U9XCJTdWNjZXNzZnVsbHkgbG9nZ2VkIGluIVwiIGFwcGVhcmFuY2U9XCJzdWNjZXNzXCIgLz4pO1xuXHRcdH0sXG5cdFx0b25FcnJvcjogKGVycm9yKSA9PiB7XG5cdFx0XHR0b2FzdChcblx0XHRcdFx0PEFsZXJ0XG5cdFx0XHRcdFx0bWVzc2FnZT17XG5cdFx0XHRcdFx0XHRlcnJvcj8ucmVzcG9uc2U/LmRhdGE/LmVycm9yID8gJ0VtYWlsL3Bhc3N3b3JkIGNvbWJpbmF0aW9uIG5vdCBmb3VuZCEnIDogJ1NvbWV0aGluZyB3ZW50IHdyb25nISdcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YXBwZWFyYW5jZT1cImRhbmdlclwiXG5cdFx0XHRcdC8+XG5cdFx0XHQpO1xuXG5cdFx0XHRlcnJvcnMuZW1haWwgPSB7IG1lc3NhZ2U6ICdFbWFpbC9wYXNzd29yZCBjb21iaW5hdGlvbiBub3QgZm91bmQnIH07XG5cdFx0XHRlcnJvcnMucGFzc3dvcmQgPSB7IG1lc3NhZ2U6ICdFbWFpbC9wYXNzd29yZCBjb21iaW5hdGlvbiBub3QgZm91bmQnIH07XG5cdFx0fSxcblx0fSk7XG5cblx0Y29uc3Qgb25TdWJtaXQgPSAoKSA9PiBsb2dpbk11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYgfSk7XG5cblx0cmV0dXJuIChcblx0XHQ8Zm9ybSByZWY9e2Zvcm1SZWZ9IGNsYXNzTmFtZT1cInBhbmVsX19mb3JtIGZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0gbm9WYWxpZGF0ZT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtMlwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cImlucHV0RW1haWxcIj5cblx0XHRcdFx0XHRcdEVtYWlsXG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtlcnJvcnMuZW1haWwgJiYgJ2lzLWludmFsaWQnfWB9XG5cdFx0XHRcdFx0XHRpZD1cImlucHV0RW1haWxcIlxuXHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuXHRcdFx0XHRcdFx0YXV0b0ZvY3VzXG5cdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ2VtYWlsJywge1xuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e2Vycm9ycy5lbWFpbCAmJiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5cblx0XHRcdFx0XHRcdFx0e2Vycm9ycy5lbWFpbD8ubWVzc2FnZSA/IGVycm9ycy5lbWFpbC5tZXNzYWdlIDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsJ31cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cImlucHV0UGFzc3dvcmRcIj5cblx0XHRcdFx0XHRcdFBhc3N3b3JkXG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtlcnJvcnMucGFzc3dvcmQgJiYgJ2lzLWludmFsaWQnfWB9XG5cdFx0XHRcdFx0XHRpZD1cImlucHV0UGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0bmFtZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKCdwYXNzd29yZCcsIHsgcmVxdWlyZWQ6IHRydWUgfSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7ZXJyb3JzLnBhc3N3b3JkICYmIChcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuXHRcdFx0XHRcdFx0XHR7ZXJyb3JzLnBhc3N3b3JkPy5tZXNzYWdlID8gZXJyb3JzLnBhc3N3b3JkLm1lc3NhZ2UgOiAnUGxlYXNlIGVudGVyIGEgcGFzc3dvcmQnfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtMlwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWRcIj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ0xvZyBpbicsXG5cdFx0XHRcdFx0XHRcdHRoZW1lOiAnc2Vjb25kYXJ5Jyxcblx0XHRcdFx0XHRcdFx0c2l6ZTogJ21kJyxcblx0XHRcdFx0XHRcdFx0ZXh0ZW5zaW9uQ2xhc3NlczogJ2J0bi1ibG9jayBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJyxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Ym1pdCcsXG5cdFx0XHRcdFx0XHRcdGlzTG9hZGluZzogbG9naW5NdXRhdGlvbi5pc0xvYWRpbmcsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7c2hvd1NpZ251cCAmJiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kXCI+XG5cdFx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtd2hpdGUgYnRuLWJsb2NrXCIgdG89e1JPVVRFUy5zaWdudXB9IHRpdGxlPVwic2lnbiB1cFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJidG5fX3RleHRcIj5TaWduIHVwPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9mb3JtPlxuXHQpO1xufVxuIiwiLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IE1vZGFsLCBMb2dpbkZvcm0sIFNpZ251cEZvcm0gfSBmcm9tICcuLic7XG5pbXBvcnQgeyBTdGF0aWNDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlY3VyaXR5TW9kYWwoeyBzZWN1cml0eU1vZGFsT3Blbiwgc2V0U2VjdXJpdHlNb2RhbE9wZW4gfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyLCB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgdGl0bGUgPSB1c2VyUm9sZSA9PT0gJ2Jhc2ljJyA/ICdTaWdudXAnIDogJ0xvZ2luJztcblx0Y29uc3Qgc3VidGl0bGUgPSBgJHt0aXRsZX0gaWYgeW91IHdhbnQgdG8gY29tbWVudGA7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZVNlY3VyaXR5TW9kYWwgPSAoKSA9PiBzZXRTZWN1cml0eU1vZGFsT3Blbighc2VjdXJpdHlNb2RhbE9wZW4pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxNb2RhbCB7Li4ueyB0aXRsZSwgc3VidGl0bGUsIG1vZGFsT3Blbjogc2VjdXJpdHlNb2RhbE9wZW4sIHRvZ2dsZU1vZGFsOiB0b2dnbGVTZWN1cml0eU1vZGFsIH19PlxuXHRcdFx0e3VzZXJSb2xlID09PSAnYmFzaWMnID8gKFxuXHRcdFx0XHQ8U2lnbnVwRm9ybVxuXHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHRjdXJyZW50VXNlcixcblx0XHRcdFx0XHRcdHRvZ2dsZU1vZGFsOiB0b2dnbGVTZWN1cml0eU1vZGFsLFxuXHRcdFx0XHRcdFx0c2hvd0xvZ2luOiBmYWxzZSxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PExvZ2luRm9ybVxuXHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHRjdXJyZW50VXNlcixcblx0XHRcdFx0XHRcdHRvZ2dsZU1vZGFsOiB0b2dnbGVTZWN1cml0eU1vZGFsLFxuXHRcdFx0XHRcdFx0c2hvd1NpZ251cDogZmFsc2UsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdCl9XG5cdFx0PC9Nb2RhbD5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyB1c2VGb3JtLCB1c2VXYXRjaCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEFsZXJ0LCBCdXR0b24gfSBmcm9tICcuLic7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgUVVFUllfS0VZUywgc2lnbnVwIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuLyogUm91dGVzICovXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlUGFnZVRpdGxlIH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWdudXBGb3JtKHsgY3VycmVudFVzZXIsIHRvZ2dsZU1vZGFsLCBzaG93TG9naW4gPSB0cnVlIH0pIHtcblx0LyogUmVmcyAqL1xuXHRjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cblx0LyogSG9va3MgKi9cblx0dXNlUGFnZVRpdGxlKCdTaWdudXAnKTtcblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdGNvbnN0IHtcblx0XHRyZWdpc3Rlcixcblx0XHRoYW5kbGVTdWJtaXQsXG5cdFx0Zm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuXHRcdGNvbnRyb2wsXG5cdH0gPSB1c2VGb3JtKHsgcmVWYWxpZGF0ZU1vZGU6ICdvbkNoYW5nZScsIG1vZGU6ICdvbkJsdXInIH0pO1xuXG5cdGNvbnN0IHBsYWluUGFzc3dvcmQgPSB1c2VXYXRjaCh7XG5cdFx0Y29udHJvbCxcblx0XHRuYW1lOiAncGxhaW5QYXNzd29yZCcsXG5cdFx0ZGVmYXVsdFZhbHVlOiAnJyxcblx0fSk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IHNpZ251cE11dGF0aW9uID0gdXNlTXV0YXRpb24oc2lnbnVwLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLkNVUlJFTlRfVVNFUik7XG5cblx0XHRcdHRvYXN0KDxBbGVydCBtZXNzYWdlPVwiU3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbiFcIiBhcHBlYXJhbmNlPVwic3VjY2Vzc1wiIC8+KTtcblxuXHRcdFx0aWYgKGN1cnJlbnRVc2VyKSB0b2dnbGVNb2RhbCgpO1xuXHRcdH0sXG5cdFx0b25FcnJvcjogKGVycm9yKSA9PiB7XG5cdFx0XHRpZiAoZXJyb3IucmVzcG9uc2Uuc3RhdHVzID09PSA1MDApIHtcblx0XHRcdFx0dG9hc3QoPEFsZXJ0IG1lc3NhZ2U9XCJUaGlzIGVtYWlsIGlzIGFscmVhZHkgaW4gdXNlIVwiIGFwcGVhcmFuY2U9XCJkYW5nZXJcIiAvPik7XG5cblx0XHRcdFx0Zm9ybVJlZi5jdXJyZW50LnJlc2V0KCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0fSk7XG5cblx0Y29uc3Qgb25TdWJtaXQgPSAoKSA9PiBzaWdudXBNdXRhdGlvbi5tdXRhdGUoeyBmb3JtUmVmLCB1c2VySWQ6IGN1cnJlbnRVc2VyPy5pZCB9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8Zm9ybSByZWY9e2Zvcm1SZWZ9IGNsYXNzTmFtZT1cInBhbmVsX19mb3JtIGZvcm1cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX0gbm9WYWxpZGF0ZT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtMlwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicmVnaXN0cmF0aW9uX2Zvcm1fdXNlcm5hbWVcIj5cblx0XHRcdFx0XHRcdFlvdXIgbmFtZVxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRpZD1cInJlZ2lzdHJhdGlvbl9mb3JtX3VzZXJuYW1lXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJ1c2VybmFtZVwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtlcnJvcnMudXNlcm5hbWUgJiYgJ2lzLWludmFsaWQnfWB9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkZ1bGwgbmFtZVwiXG5cdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ3VzZXJuYW1lJywge1xuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZDoge1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYSBuYW1lJyxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e2Vycm9ycy51c2VybmFtZSAmJiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj57ZXJyb3JzLnVzZXJuYW1lLm1lc3NhZ2V9PC9kaXY+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInJlZ2lzdHJhdGlvbl9mb3JtX29yZ2FuaXNhdGlvblwiPlxuXHRcdFx0XHRcdFx0T3JnYW5pc2F0aW9uXG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGlkPVwicmVnaXN0cmF0aW9uX2Zvcm1fb3JnYW5pc2F0aW9uXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJvcmdhbmlzYXRpb25cIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7ZXJyb3JzLm9yZ2FuaXNhdGlvbiAmJiAnaXMtaW52YWxpZCd9YH1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiT3JnYW5pc2F0aW9uXCJcblx0XHRcdFx0XHRcdHsuLi5yZWdpc3Rlcignb3JnYW5pc2F0aW9uJywge1xuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZDoge1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYW4gb3JnYW5pc2F0aW9uJyxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e2Vycm9ycy5vcmdhbmlzYXRpb24gJiYgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e2Vycm9ycy5vcmdhbmlzYXRpb24ubWVzc2FnZX08L2Rpdj59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInJlZ2lzdHJhdGlvbl9mb3JtX2VtYWlsXCI+XG5cdFx0XHRcdFx0XHRFbWFpbFxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRpZD1cInJlZ2lzdHJhdGlvbl9mb3JtX2VtYWlsXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtlcnJvcnMuZW1haWwgJiYgJ2lzLWludmFsaWQnfWB9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVtYWlsXCJcblx0XHRcdFx0XHRcdHZhbHVlPXtjdXJyZW50VXNlcj8uZW1haWx9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17KCkgPT4ge319XG5cdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ2VtYWlsJywge1xuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZDoge1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYW4gZW1haWwnLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7ZXJyb3JzLmVtYWlsICYmIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPntlcnJvcnMuZW1haWwubWVzc2FnZX08L2Rpdj59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicmVnaXN0cmF0aW9uX2Zvcm1fcGxhaW5QYXNzd29yZFwiPlxuXHRcdFx0XHRcdFx0UGFzc3dvcmRcblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdGlkPVwicmVnaXN0cmF0aW9uX2Zvcm1fcGxhaW5QYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRuYW1lPVwicGxhaW5QYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtlcnJvcnMucGFzc3dvcmQgJiYgJ2lzLWludmFsaWQnfWB9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcigncGxhaW5QYXNzd29yZCcsIHtcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUGxlYXNlIGVudGVyIGEgcGFzc3dvcmQnLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRtaW5MZW5ndGg6IHtcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogNixcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUGxlYXNlIGVudGVyIGEgcGFzc3dvcmQgb2YgYXRsZWFzdCA2IGNoYXJhY3RlcnMnLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7ZXJyb3JzLnBsYWluUGFzc3dvcmQgJiYgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e2Vycm9ycy5wbGFpblBhc3N3b3JkLm1lc3NhZ2V9PC9kaXY+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cImxvZ2luLWNvbmZpcm0tcGFzc3dvcmRcIj5cblx0XHRcdFx0XHRcdENvbmZpcm0gcGFzc3dvcmRcblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke2Vycm9ycy5wYXNzd29yZENvbmZpcm0gJiYgJ2lzLWludmFsaWQnfWB9XG5cdFx0XHRcdFx0XHRpZD1cImxvZ2luLWNvbmZpcm0tcGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJDb25maXJtIHBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZENvbmZpcm1cIlxuXHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKCdwYXNzd29yZENvbmZpcm0nLCB7XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1BsZWFzZSBjb25maXJtIHlvdXIgcGFzc3dvcmQnLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHR2YWxpZGF0ZTogKHZhbHVlKSA9PiB2YWx1ZSA9PT0gcGxhaW5QYXNzd29yZCB8fCAnVGhlIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2gnLFxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7ZXJyb3JzLnBhc3N3b3JkQ29uZmlybSAmJiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj57ZXJyb3JzLnBhc3N3b3JkQ29uZmlybS5tZXNzYWdlfTwvZGl2Pn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtMlwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWRcIj5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ1NpZ24gdXAnLFxuXHRcdFx0XHRcdFx0XHR0aGVtZTogJ3NlY29uZGFyeScsXG5cdFx0XHRcdFx0XHRcdHNpemU6ICdtZCcsXG5cdFx0XHRcdFx0XHRcdGV4dGVuc2lvbkNsYXNzZXM6ICdidG4tYmxvY2sganVzdGlmeS1jb250ZW50LWNlbnRlcicsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdzdWJtaXQnLFxuXHRcdFx0XHRcdFx0XHRpc0xvYWRpbmc6IHNpZ251cE11dGF0aW9uLmlzTG9hZGluZyxcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtzaG93TG9naW4gJiYgKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZFwiPlxuXHRcdFx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXdoaXRlIGJ0bi1ibG9ja1wiIHRvPXtST1VURVMubG9naW59IHRpdGxlPVwic2lnbiB1cFwiPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJidG5fX3RleHRcIj5Mb2dpbjwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZm9ybT5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOLCBUUkFOU0ZPUk1fVVAgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2xpZGVJbih7IHRvZ2dsZVNsaWRlSW4sIGNoaWxkcmVuLCBkb21FbGVtZW50LCB2YXJpYW50ID0gJ2RlZmF1bHQnIH0pIHtcblx0Y29uc3QgcmVuZGVyID0gKCkgPT4gKFxuXHRcdDxkaXYga2V5PVwic2xpZGUtaW5cIiBjbGFzc05hbWU9e2BzbGlkZS1pbiBzbGlkZS1pbi0tJHt2YXJpYW50fWB9PlxuXHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5fX292ZXJsYXlcIiBvbkNsaWNrPXt0b2dnbGVTbGlkZUlufSB7Li4uRkFERV9JTn0gLz5cblx0XHRcdDxtb3Rpb24uYXJ0aWNsZSBrZXk9XCJzbGlkZS1pbl9fY29udGVudFwiIGNsYXNzTmFtZT1cInNsaWRlLWluX19jb250ZW50XCIgey4uLlRSQU5TRk9STV9VUH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGQtZmxleCBmbGV4LWdyb3ctMVwiPntjaGlsZHJlbn08L2Rpdj5cblx0XHRcdDwvbW90aW9uLmFydGljbGU+XG5cdFx0PC9kaXY+XG5cdCk7XG5cblx0LyogUmVuZGVyICovXG5cdGlmIChkb21FbGVtZW50KSB7XG5cdFx0cmV0dXJuIGNyZWF0ZVBvcnRhbChyZW5kZXIoKSwgZG9tRWxlbWVudCk7XG5cdH1cblxuXHRyZXR1cm4gcmVuZGVyKCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBNb2RhbCwgVXNlckFkZFNlYXJjaCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRVc2VySWNvbiBmcm9tICdpY29ucy9hZGRfdXNlci5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQWRkKHsgdXNlcnMsIHByb2plY3QgfSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHNldE1vZGFsT3BlbighbW9kYWxPcGVuKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIG1sLTJcIj5cblx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIHVzZXIgdXNlci0tbGcgdXNlci0tYWRkXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfT5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidXNlcl9fYXZhdGFyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19pbml0aWFsc1wiPlxuXHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19pY29uIGljb24gaWNvbi0tMTIgbXQtMFwiIHNyYz17YWRkVXNlckljb259IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdHRpdGxlPVwiU2VsZWN0IHVzZXJzXCJcblx0XHRcdFx0c3VidGl0bGU9XCJDaG9vc2Ugc29tZSB1c2VycyB0byBjb2xsYWJvcmF0ZSB3aXRoLlwiXG5cdFx0XHRcdHsuLi57IG1vZGFsT3BlbiwgdG9nZ2xlTW9kYWwgfX0+XG5cdFx0XHRcdDxVc2VyQWRkU2VhcmNoIHsuLi57IHVzZXJzLCBwcm9qZWN0LCB0b2dnbGVNb2RhbCB9fSAvPlxuXHRcdFx0PC9Nb2RhbD5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXJBZGRTZWFyY2hSZXN1bHRzLCBVc2VycywgQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIFNlcnZpY2VzICovXG5pbXBvcnQgeyBpc0VtYWlsIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuaW1wb3J0IGZpbHRlclVzZXJzIGZyb20gJy4vc2VydmljZXMvZmlsdGVyVXNlcnMnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGFkZFVzZXIsIGZldGNoR29iYWxVc2VycywgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBZGRTZWFyY2goeyB1c2VycywgcHJvamVjdCwgdG9nZ2xlTW9kYWwgfSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2ZvY3VzZWRVc2VyLCBzZXRGb2N1c2VkVXNlcl0gPSB1c2VTdGF0ZSgwKTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgZGF0YTogZ2xvYmFsVXNlcnMgPSBbXSwgaXNMb2FkaW5nOiBnbG9iYWxVc2Vyc0xvYWRpbmcgfSA9IHVzZVF1ZXJ5KFxuXHRcdFFVRVJZX0tFWVMuR0xPQkFMX1VTRVJTLFxuXHRcdGZldGNoR29iYWxVc2Vyc1xuXHQpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCBmaWx0ZXJlZFVzZXJzID0gZmlsdGVyVXNlcnMoZ2xvYmFsVXNlcnMsIHVzZXJzLCBxdWVyeSk7XG5cblx0LyogUmVmcyAqL1xuXHRjb25zdCBxdWVyeVJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgYWRkVXNlck11dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkVXNlciwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdC5pZF0pO1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5HTE9CQUxfVVNFUlMpO1xuXG5cdFx0XHRxdWVyeVJlZi5jdXJyZW50LnNlbGVjdCgpO1xuXHRcdFx0c2V0UXVlcnkoJycpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBzZXRRdWVyeSh2YWx1ZSk7XG5cblx0Y29uc3QgaGFuZGxlT25LZXlEb3duID0gKGV2ZW50KSA9PiB7XG5cdFx0aWYgKFsnRW50ZXInLCAnVGFiJ10uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0aWYgKHF1ZXJ5ICE9PSAnJyAmJiBmb2N1c2VkVXNlciAhPT0gbnVsbCkge1xuXHRcdFx0XHRjb25zdCB1c2VyID0gZm9jdXNlZFVzZXIgaW4gZmlsdGVyZWRVc2VycyA/IGZpbHRlcmVkVXNlcnNbZm9jdXNlZFVzZXJdIDogZm9jdXNlZFVzZXI7XG5cblx0XHRcdFx0aWYgKGlzRW1haWwodXNlci5lbWFpbCkpIHtcblx0XHRcdFx0XHRhZGRVc2VyTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkOiBwcm9qZWN0LmlkLCBlbWFpbDogdXNlci5lbWFpbCB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRjb25zdCBoYW5kbGVDbGljayA9ICh7IGVtYWlsIH0pID0+IHtcblx0XHRpZiAoaXNFbWFpbChlbWFpbCkpIHtcblx0XHRcdGFkZFVzZXJNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQ6IHByb2plY3QuaWQsIGVtYWlsOiBlbWFpbCB9KTtcblx0XHR9XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1ncm93LTFcIj5cblx0XHRcdDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdCB9fSB2YXJpYW50PVwiaW50ZXJhY3RpdmVcIiBzaXplPVwibGdcIiAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuXHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJ1c2VyUXVlcnlcIj5cblx0XHRcdFx0XHRTZWFyY2ggbmFtZSBvciBlbWFpbFxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLS1zZWFyY2hcIlxuXHRcdFx0XHRcdGlkPVwidXNlclF1ZXJ5XCJcblx0XHRcdFx0XHRuYW1lPVwidXNlclF1ZXJ5XCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNlYXJjaCBuYW1lIG9yIGVtYWlsXCJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0YXV0b0ZvY3VzXG5cdFx0XHRcdFx0dmFsdWU9e3F1ZXJ5fVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0b25LZXlEb3duPXtoYW5kbGVPbktleURvd259XG5cdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwib2ZmXCJcblx0XHRcdFx0XHRyZWY9e3F1ZXJ5UmVmfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfSBleHRlbnNpb25DbGFzc2VzPVwiZm9ybS1jb250cm9sLWJ0blwiIGNvbnRlbnRUeXBlPVwiaWNvblwiIHRoZW1lPVwiZGVmYXVsdFwiIC8+XG5cdFx0XHRcdDxVc2VyQWRkU2VhcmNoUmVzdWx0c1xuXHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHRmaWx0ZXJlZFVzZXJzLFxuXHRcdFx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdFx0XHRoYW5kbGVDbGljayxcblx0XHRcdFx0XHRcdGZvY3VzZWRVc2VyLFxuXHRcdFx0XHRcdFx0c2V0Rm9jdXNlZFVzZXIsXG5cdFx0XHRcdFx0XHR1c2VyTXV0YXRpb25Mb2FkaW5nOiBhZGRVc2VyTXV0YXRpb24uaXNMb2FkaW5nLFxuXHRcdFx0XHRcdFx0Z2xvYmFsVXNlcnNMb2FkaW5nLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlclNlbGVjdCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBZGRTZWFyY2hSZXN1bHRzKHtcblx0ZmlsdGVyZWRVc2Vycyxcblx0cXVlcnksXG5cdGhhbmRsZUNsaWNrLFxuXHRmb2N1c2VkVXNlcixcblx0c2V0Rm9jdXNlZFVzZXIsXG5cdHVzZXJNdXRhdGlvbkxvYWRpbmcsXG5cdGdsb2JhbFVzZXJzTG9hZGluZyxcbn0pIHtcblx0LyogUmVuZGVyIGZpbHRlcmVkIHJlc3VsdHMgKi9cblx0Y29uc3QgcmVzdWx0cyA9ICgpID0+IHtcblx0XHRjb25zdCBuZXdVc2VyID0geyBlbWFpbDogcXVlcnksIG9yZ2FuaXNhdGlvbjogcXVlcnksIGRpc3BsYXk6ICdOZXcgdXNlcicsIHVzZXJDb2xvcjogJzI5MSwgODElLCA1MyUnIH07XG5cblx0XHRpZiAoZmlsdGVyZWRVc2Vycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gZmlsdGVyZWRVc2Vycy5tYXAoKHVzZXIsIHVzZXJJbmRleCkgPT4gKFxuXHRcdFx0XHQ8bW90aW9uLmxpIHsuLi5GQURFX0lOfSBrZXk9e3VzZXIuaWR9IGNsYXNzTmFtZT1cImxpc3RfX2l0ZW0gdnItM1wiPlxuXHRcdFx0XHRcdDxVc2VyU2VsZWN0XG5cdFx0XHRcdFx0XHR7Li4ueyB1c2VyLCB1c2VySW5kZXgsIGhhbmRsZUNsaWNrLCBzZXRGb2N1c2VkVXNlciB9fVxuXHRcdFx0XHRcdFx0aXNGb2N1c2VkPXt1c2VySW5kZXggPT09IGZvY3VzZWRVc2VyICYmIHF1ZXJ5fVxuXHRcdFx0XHRcdFx0aXNMb2FkaW5nPXt1c2VyTXV0YXRpb25Mb2FkaW5nfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvbW90aW9uLmxpPlxuXHRcdFx0KSk7XG5cdFx0fVxuXG5cdFx0aWYgKCFnbG9iYWxVc2Vyc0xvYWRpbmcpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxtb3Rpb24ubGkgey4uLkZBREVfSU59IGtleT1cIk5ldyB1c2VyXCIgY2xhc3NOYW1lPVwibGlzdF9faXRlbSBpcy1mb2N1c2VkIHZyLTNcIj5cblx0XHRcdFx0XHQ8VXNlclNlbGVjdFxuXHRcdFx0XHRcdFx0ey4uLnsgdXNlcjogbmV3VXNlciwgdXNlckluZGV4OiBuZXdVc2VyLCBoYW5kbGVDbGljaywgc2V0Rm9jdXNlZFVzZXIgfX1cblx0XHRcdFx0XHRcdGlzRm9jdXNlZD17cXVlcnkubGVuZ3RofVxuXHRcdFx0XHRcdFx0aXNMb2FkaW5nPXt1c2VyTXV0YXRpb25Mb2FkaW5nfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvbW90aW9uLmxpPlxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdHtxdWVyeSAhPT0gJycgJiYgKFxuXHRcdFx0XHQ8bW90aW9uLnVsIHsuLi5GQURFX0lOfSBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2xpc3QgbGlzdFwiPlxuXHRcdFx0XHRcdHtyZXN1bHRzKCl9XG5cdFx0XHRcdDwvbW90aW9uLnVsPlxuXHRcdFx0KX1cblx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbHRlclVzZXJzKGdsb2JhbFVzZXJzLCB1c2VycywgcXVlcnkpIHtcblx0Y29uc3QgbG93ZXJRdWVyeSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7XG5cdGNvbnN0IGV4aXN0aW5nVXNlcnNCeUVtYWlsID0gdXNlcnMubWFwKCh7IGVtYWlsIH0pID0+IGVtYWlsKTtcblxuXHRsZXQgZmlsdGVyZWRVc2VycyA9IGdsb2JhbFVzZXJzXG5cdFx0LmZpbHRlcigoeyBlbWFpbCB9KSA9PiB7XG5cdFx0XHQvKiBPbmx5IHJldHVybiB1c2VycyB0aGF0IGFyZSBub3QgcGFydCBvZiB0aGUgcHJvamVjdCAqL1xuXHRcdFx0cmV0dXJuICFleGlzdGluZ1VzZXJzQnlFbWFpbC5pbmNsdWRlcyhlbWFpbCk7XG5cdFx0fSlcblx0XHQuZmlsdGVyKCh7IGVtYWlsLCBkaXNwbGF5IH0pID0+IHtcblx0XHRcdC8qIE9ubHkgcmV0dXJuIHVzZXJzIHRoYXQgbWF0Y2ggdGhlIHF1ZXJ5IG9uIGVtYWlsIHx8IGRpc3BsYXkgKi9cblx0XHRcdHJldHVybiBlbWFpbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyUXVlcnkpIHx8IGRpc3BsYXkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclF1ZXJ5KTtcblx0XHR9KTtcblxuXHRyZXR1cm4gZmlsdGVyZWRVc2Vycztcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBMb2FkaW5nV3JhcHBlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBzdGFySWNvbiBmcm9tICdpY29ucy9zdGFyLnN2Zyc7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICdpY29ucy9kZWxldGUuc3ZnJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBkZWxldGVVc2VyLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcih7IHVzZXIsIHByb2plY3QsIHZhcmlhbnQgPSAnZGVmYXVsdCcsIHNpemUgPSAnbWQnIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IGlkOiBwcm9qZWN0SWQsIGF1dGhvciB9ID0gcHJvamVjdCA/PyB7fTtcblx0Y29uc3QgeyBpZDogdXNlcklkLCBlbWFpbCB9ID0gdXNlciA/PyB7fTtcblx0Y29uc3QgaXNBdXRob3IgPSBlbWFpbCA9PT0gYXV0aG9yO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBkZWxldGVVc2VyTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVVc2VyLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKSxcblx0fSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2B1c2VyIHVzZXItLSR7c2l6ZX0gdXNlci0tJHt2YXJpYW50fSAke2lzQXV0aG9yICYmICd1c2VyLS1hdXRob3InfWB9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxVc2VyQXZhdGFyIGlzTG9hZGluZz17ZGVsZXRlVXNlck11dGF0aW9uLmlzTG9hZGluZ30gey4uLnVzZXJ9PlxuXHRcdFx0XHRcdHt2YXJpYW50ID09PSAnaW50ZXJhY3RpdmUnICYmICFpc0F1dGhvciAmJiAoXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInVzZXJfX2FjdGlvbiBidG4gYnRuLWxpbmsgcC0wXCJcblx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGRlbGV0ZVVzZXJNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQsIHVzZXJJZCB9KX0+XG5cdFx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9fYWN0aW9uLWljb24gaWNvbiBpY29uLS0xNFwiIHNyYz17ZGVsZXRlSWNvbn0gLz5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvVXNlckF2YXRhcj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0e2lzQXV0aG9yICYmIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19zdGF0dXMgdXNlcl9fc3RhdHVzLS1sZWFkZXJcIj5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cInVzZXJfX3N0YXR1cy1pY29uIGljb24gdGV4dC10ZXJ0aWFyeSBtdC0wXCIgc3JjPXtzdGFySWNvbn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgY29uc3QgVXNlckF2YXRhciA9ICh7IGRpc3BsYXksIHVzZXJDb2xvciwgaXNMb2FkaW5nLCBjaGlsZHJlbiB9KSA9PiB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB1c2VySW5pdGlhbHMgPSBkaXNwbGF5LnNwbGl0KCcgJykubWFwKCh3b3JkKSA9PiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlcl9fYXZhdGFyXCIgc3R5bGU9e3sgJy0tdGhlbWUnOiB1c2VyQ29sb3IgfX0+XG5cdFx0XHQ8TG9hZGluZ1dyYXBwZXIgbG9hZGluZz17aXNMb2FkaW5nfSBsb2FkZXJTaXplPXsxNn0+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInVzZXJfX2luaXRpYWxzXCI+e3VzZXJJbml0aWFsc308L3NwYW4+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgY29uc3QgVXNlckluZm8gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGxheW91dCA9ICd2ZXJ0aWNhbCcsIHNpemUgPSAnbGcnIH0pID0+IChcblx0PGRpdiBjbGFzc05hbWU9e2B1c2VyX19pbmZvIHVzZXJfX2luZm8tLSR7bGF5b3V0fSB1c2VyX19pbmZvLS0ke3NpemV9IG1sLTJgfT5cblx0XHQ8cCBjbGFzc05hbWU9XCJ1c2VyX19pbmZvLXRpdGxlIG1iLTBcIj57dGl0bGV9PC9wPlxuXHRcdHtzdWJ0aXRsZSAmJiA8cCBjbGFzc05hbWU9XCJ1c2VyX19pbmZvLXN1YnRpdGxlIG1iLTBcIj57c3VidGl0bGV9PC9wPn1cblx0PC9kaXY+XG4pO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IHsgVXNlckF2YXRhciwgVXNlckluZm8gfSBmcm9tICcuL1VzZXInO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRVc2VySWNvbiBmcm9tICdpY29ucy9hZGRfdXNlci5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyU2VsZWN0KHsgdXNlciwgdXNlckluZGV4LCBoYW5kbGVDbGljaywgaXNGb2N1c2VkLCBzZXRGb2N1c2VkVXNlciwgaXNMb2FkaW5nIH0pIHtcblx0LyogRWZmZWN0cyAqL1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlzRm9jdXNlZCAmJiBzZXRGb2N1c2VkVXNlcih1c2VySW5kZXgpO1xuXHR9LCBbaXNGb2N1c2VkXSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRyZXR1cm4gKCkgPT4gc2V0Rm9jdXNlZFVzZXIoMCk7XG5cdH0sIFtdKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgaGFuZGxlU3RhdHVzID0gKGFjdGlvbikgPT4ge1xuXHRcdHNldEZvY3VzZWRVc2VyKGFjdGlvbiA9PT0gJ2VudGVyJyA/IHVzZXJJbmRleCA6IDApO1xuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxidXR0b25cblx0XHRcdGNsYXNzTmFtZT17YHVzZXIgdXNlci0tc2VsZWN0ICR7aXNGb2N1c2VkICYmICdpcy1mb2N1c2VkJ30gdXNlci0teGxgfVxuXHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2sodXNlcil9XG5cdFx0XHRvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZVN0YXR1cygnZW50ZXInKX1cblx0XHRcdG9uTW91c2VMZWF2ZT17KCkgPT4gaGFuZGxlU3RhdHVzKCdsZWF2ZScpfVxuXHRcdFx0dHlwZT1cImJ1dHRvblwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxVc2VyQXZhdGFyIGlzTG9hZGluZz17aXNMb2FkaW5nICYmIGlzRm9jdXNlZH0gey4uLnVzZXJ9IC8+XG5cdFx0XHRcdDxVc2VySW5mb1xuXHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHR0aXRsZTogdXNlci5kaXNwbGF5LFxuXHRcdFx0XHRcdFx0c3VidGl0bGU6IHVzZXIub3JnYW5pc2F0aW9uID8gdXNlci5vcmdhbmlzYXRpb24gOiAnTm8gb3JnYW5pc2F0aW9uJyxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXJfX2FkZCB0ZXh0LXNlY29uZGFyeSByb3VuZGVkLWNpcmNsZSBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19hZGQtaWNvbiBpY29uIGljb24tLTEyIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXthZGRVc2VySWNvbn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2J1dHRvbj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTQ0FMRV9GQURFIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJzKHsgdXNlcnMsIGxheW91dCA9ICdmdWxsJywgLi4ucmVzdCB9KSB7XG5cdGNvbnN0IHNsaWNlQW1vdW50ID0gbGF5b3V0ID09PSAnbWluaW1hbCcgPyA3IDogSW5maW5pdHk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIGd1dHRlcnMtMVwiPlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e3VzZXJzLnNsaWNlKDAsIHNsaWNlQW1vdW50KS5tYXAoKHVzZXIpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PG1vdGlvbi5kaXYgbGF5b3V0IHsuLi5TQ0FMRV9GQURFfSBjbGFzc05hbWU9XCJjb2wtYXV0b1wiIGtleT17dXNlci5pZH0+XG5cdFx0XHRcdFx0XHRcdDxVc2VyIHsuLi57IHVzZXIsIC4uLnJlc3QgfX0gLz5cblx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdFx0e2xheW91dCA9PT0gJ21pbmltYWwnICYmIHVzZXJzLmxlbmd0aCA+IDcgJiYgKFxuXHRcdFx0XHRcdDxtb3Rpb24uZGl2IGxheW91dCB7Li4uU0NBTEVfRkFERX0gY2xhc3NOYW1lPVwiY29sLWF1dG9cIiBrZXk9XCJtb3JlXCI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LS1zbSB0ZXh0LW11dGVkLS03MCBtbC0xXCI+KyB7dXNlcnMubGVuZ3RoIC0gc2xpY2VBbW91bnR9PC9wPlxuXHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0KX1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBTdGF0aWNDb250ZXh0IH0gZnJvbSAnLi9tYWluQ29udGV4dCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJldmlld0NvbnRleHQgfSBmcm9tICcuL3Jldmlld0NvbnRleHQnO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU3RhdGljQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcbmV4cG9ydCBkZWZhdWx0IFN0YXRpY0NvbnRleHQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBSZXZpZXdDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuZXhwb3J0IGRlZmF1bHQgUmV2aWV3Q29udGV4dDtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VyQWRkLCBVc2VycywgRWRpdGFibGUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IHN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9tYWluQ29udGV4dCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZWRpdFByb2plY3QsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0RGV0YWlsSGVhZGVyKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCB1c2VycywgaWQsIGF1dGhvciwgZW1haWwgfSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgcHJvamVjdCA9IHsgaWQsIGF1dGhvciwgZW1haWwgfTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KHN0YXRpY0NvbnRleHQpO1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IG11dGF0aW9uT25TdWNjZXNzID0gKCkgPT4ge1xuXHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIGlkXSk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgbWItNlwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTZcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3VzZXJSb2xlID09PSAnYWRtaW4nICYmICdlZGl0YWJsZSd9IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMmB9PlxuXHRcdFx0XHRcdDxFZGl0YWJsZVxuXHRcdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICdFZGl0aW5nIHRpdGxlJyxcblx0XHRcdFx0XHRcdFx0ZmllbGRzOiBbeyBuYW1lOiAndGl0bGUnLCBkZWZhdWx0VmFsdWU6IHRpdGxlIH1dLFxuXHRcdFx0XHRcdFx0XHRtdXRhdGlvbjogZWRpdFByb2plY3QsXG5cdFx0XHRcdFx0XHRcdG11dGF0aW9uSWQ6IGlkLFxuXHRcdFx0XHRcdFx0XHRtdXRhdGlvbk9uU3VjY2VzczogbXV0YXRpb25PblN1Y2Nlc3MsXG5cdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJoNSBtYi0wIHRleHQtd2hpdGVcIj57dGl0bGUgPyB0aXRsZSA6ICdBZGQgYSBuaWNlIHRpdGxlJ308L2gxPlxuXHRcdFx0XHRcdDwvRWRpdGFibGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7dXNlclJvbGUgPT09ICdhZG1pbicgJiYgJ2VkaXRhYmxlJ30gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yYH0+XG5cdFx0XHRcdFx0PEVkaXRhYmxlXG5cdFx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ0VkaXRpbmcgZGVzY3JpcHRpb24nLFxuXHRcdFx0XHRcdFx0XHRmaWVsZHM6IFt7IG5hbWU6ICdkZXNjcmlwdGlvbicsIGRlZmF1bHRWYWx1ZTogZGVzY3JpcHRpb24gfV0sXG5cdFx0XHRcdFx0XHRcdG11dGF0aW9uOiBlZGl0UHJvamVjdCxcblx0XHRcdFx0XHRcdFx0bXV0YXRpb25JZDogaWQsXG5cdFx0XHRcdFx0XHRcdG11dGF0aW9uT25TdWNjZXNzOiBtdXRhdGlvbk9uU3VjY2Vzcyxcblx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNzAgbWItMFwiPlxuXHRcdFx0XHRcdFx0XHR7ZGVzY3JpcHRpb24gPyAoXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+e2Rlc2NyaXB0aW9ufTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS00MFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e1wiV2hhdCdzIHRoaXMgcHJvamVjdCBhYm91dD8gU2V0IHRoZSBjb250ZXh0LCB0aGUgZ29hbHMsIHRoZSBjb25zdHJhaW50c1wifVxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L0VkaXRhYmxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmUgbWwtYXV0b1wiPlxuXHRcdFx0XHQ8VXNlcnMgey4uLnsgdXNlcnMsIHByb2plY3QgfX0gc2l6ZT1cImxnXCIgLz5cblx0XHRcdFx0e3VzZXJSb2xlID09PSAnYWRtaW4nICYmIDxVc2VyQWRkIHsuLi57IHVzZXJzLCBwcm9qZWN0IH19IC8+fVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEVkaXRhYmxlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNoZWNrSWNvbiBmcm9tICdpY29ucy9jaGVjay5zdmcnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZWRpdFByb2plY3RJbWFnZSwgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWxJbWFnZSh7IHByb2plY3RJbWFnZSwgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyBpZDogcHJvamVjdEltYWdlSWQsIHRpdGxlLCBwaGFzZXMgPSBbXSB9ID0gcHJvamVjdEltYWdlO1xuXHRjb25zdCB7IGltYWdlIH0gPSBwaGFzZXNbcGhhc2VzLmxlbmd0aCAtIDFdIHx8IHt9O1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgbXV0YXRpb25PblN1Y2Nlc3MgPSAoKSA9PiB7XG5cdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGFydGljbGUgY2xhc3NOYW1lPXtgY2FyZCBjYXJkLS1saW5rIGNhcmQtLXByb2R1Y3QgJHtzZWxlY3RlZC5pbmNsdWRlcyhwcm9qZWN0SW1hZ2VJZCkgJiYgJ2lzLXNlbGVjdGVkJ31gfT5cblx0XHRcdDxMaW5rIHRvPXtgL3Byb2plY3RzLyR7cHJvamVjdElkfS9yZXZpZXcvJHtwcm9qZWN0SW1hZ2VJZH1gfSB0aXRsZT17dGl0bGV9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ltYWdlIGJvcmRlciBtLTJcIj5cblx0XHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxuXHRcdFx0XHRcdFx0c3JjPXtpbWFnZS50aHVtYm5haWx9XG5cdFx0XHRcdFx0XHRzcmNTZXQ9e2Ake2ltYWdlLnRodW1ibmFpbFJldGluYX0gMnhgfVxuXHRcdFx0XHRcdFx0YWx0PXt0aXRsZX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGluaz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG5cdFx0XHRcdDxFZGl0YWJsZVxuXHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHR0aXRsZTogJ0VkaXRpbmcgaW1hZ2UgdGl0bGUnLFxuXHRcdFx0XHRcdFx0ZmllbGRzOiBbeyBuYW1lOiAndGl0bGUnLCBkZWZhdWx0VmFsdWU6IHRpdGxlIH1dLFxuXHRcdFx0XHRcdFx0bXV0YXRpb246IGVkaXRQcm9qZWN0SW1hZ2UsXG5cdFx0XHRcdFx0XHRtdXRhdGlvbklkOiBwcm9qZWN0SW1hZ2VJZCxcblx0XHRcdFx0XHRcdG11dGF0aW9uT25TdWNjZXNzOiBtdXRhdGlvbk9uU3VjY2Vzcyxcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHQ8bW90aW9uLnAgey4uLkZBREVfSU59IGNsYXNzTmFtZT1cIm1iLTBcIj5cblx0XHRcdFx0XHRcdHt0aXRsZX1cblx0XHRcdFx0XHQ8L21vdGlvbi5wPlxuXHRcdFx0XHQ8L0VkaXRhYmxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdFwiPlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FyZF9fc2VsZWN0LXRvZ2dsZVwiXG5cdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0dXBkYXRlU2VsZWN0ZWQocHJvamVjdEltYWdlSWQpO1xuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiY2FyZF9fc2VsZWN0LWljb24gaWNvbiBpY29uLS04XCIgc3JjPXtjaGVja0ljb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9hcnRpY2xlPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgRHJvcHpvbmUsIEFjdGlvbk1lbnUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgUHJvamVjdERldGFpbEltYWdlIGZyb20gJy4vUHJvamVjdERldGFpbEltYWdlJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTVEFHR0VSX1VQIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGRlbGV0ZVByb2plY3RJbWFnZXMsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0RGV0YWlsSW1hZ2VzKHsgcHJvamVjdEltYWdlcywgcHJvamVjdElkIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQsIHJlc2V0U2VsZWN0ZWQgfSA9IHVzZVNlbGVjdGlvbigpO1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cdGNvbnN0IHsgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGRlbGV0ZVByb2plY3RJbWFnZXMsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0pO1xuXHRcdFx0cmVzZXRTZWxlY3RlZCgpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCBhY3Rpb25zID0gW1xuXHRcdHtcblx0XHRcdHRpdGxlOiAnUmVtb3ZlJyxcblx0XHRcdHRoZW1lOiAnZGFuZ2VyJyxcblx0XHRcdGhhc1Blcm1pc3Npb246IFsnYWRtaW4nXSxcblx0XHRcdGljb246IGRlbGV0ZUljb24sXG5cdFx0XHRpY29uU2l6ZTogMTAsXG5cdFx0XHRtdXRhdGlvbjogKCkgPT4gZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgcHJvamVjdEltYWdlSWRzOiBzZWxlY3RlZCB9KSxcblx0XHRcdGlzTG9hZGluZzogZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uLmlzTG9hZGluZyxcblx0XHR9LFxuXHRdO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZC5sZW5ndGggPiAwICYmICdoYXMtc2VsZWN0aW9ucyd9YH0+XG5cdFx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyA/IChcblx0XHRcdFx0XHQ8RHJvcHpvbmUgey4uLnsgcHJvamVjdElkLCBwcm9qZWN0SW1hZ2VzLCBwb3NpdGl0aW9uOiAncmlnaHQnIH19PlxuXHRcdFx0XHRcdFx0eygpID0+IDxJbWFnZXMgey4uLnsgcHJvamVjdEltYWdlcywgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfX0gLz59XG5cdFx0XHRcdFx0PC9Ecm9wem9uZT5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTVcIj5cblx0XHRcdFx0XHRcdDxJbWFnZXMgey4uLnsgcHJvamVjdEltYWdlcywgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfX0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e3NlbGVjdGVkLmxlbmd0aCA+IDAgJiYgdXNlclJvbGUgPT09ICdhZG1pbicgJiYgKFxuXHRcdFx0XHRcdDxBY3Rpb25NZW51IHsuLi57IHNlbGVjdGVkLCByZXNldFNlbGVjdGVkLCBhY3Rpb25zIH19IC8+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHQ8Lz5cblx0KTtcbn1cblxuY29uc3QgSW1hZ2VzID0gKHsgcHJvamVjdEltYWdlcywgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHR7cHJvamVjdEltYWdlcy5tYXAoKHByb2plY3RJbWFnZSwgcHJvamVjdEltYWdlSW5kZXgpID0+IChcblx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHR7Li4uU1RBR0dFUl9VUChwcm9qZWN0SW1hZ2VJbmRleCl9XG5cdFx0XHRcdFx0a2V5PXtwcm9qZWN0SW1hZ2UuaWR9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC14bC0zIGNvbC14eGwtMlwiXG5cdFx0XHRcdFx0bGF5b3V0PlxuXHRcdFx0XHRcdDxQcm9qZWN0RGV0YWlsSW1hZ2Ugey4uLnsgcHJvamVjdEltYWdlLCBwcm9qZWN0SWQsIHNlbGVjdGVkLCB1cGRhdGVTZWxlY3RlZCB9fSAvPlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQpKX1cblx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0KTtcbn07XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3REZXRhaWxIZWFkZXIgfSBmcm9tICcuL1Byb2plY3REZXRhaWxIZWFkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0RGV0YWlsSW1hZ2VzIH0gZnJvbSAnLi9Qcm9qZWN0RGV0YWlsSW1hZ2VzJztcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VycyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCB7IFByb2plY3RJbWFnZSB9IGZyb20gJy4vJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2hlY2tJY29uIGZyb20gJ2ljb25zL2NoZWNrLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoeyBwcm9qZWN0LCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyB0aXRsZSwgcHJvamVjdEltYWdlcywgdXNlcnMsIGF1dGhvciwgaWQgfSA9IHByb2plY3Q7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PExpbmtcblx0XHRcdHRvPXtgcHJvamVjdHMvJHtpZH1gfVxuXHRcdFx0dGl0bGU9e3RpdGxlfVxuXHRcdFx0Y2xhc3NOYW1lPXtgY2FyZCBjYXJkLS1saW5rIGNhcmQtLXByb2R1Y3QgJHtzZWxlY3RlZC5pbmNsdWRlcyhpZCkgJiYgJ2lzLXNlbGVjdGVkJ31gfT5cblx0XHRcdDxQcm9qZWN0SW1hZ2Ugey4uLnsgcHJvamVjdEltYWdlcyB9fSAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW5cIj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi0yXCI+e3RpdGxlID8gdGl0bGUgOiAnQWRkIGEgbmljZSB0aXRsZSd9PC9wPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PFVzZXJzIHsuLi57IHVzZXJzLCBwcm9qZWN0OiB7IGF1dGhvciB9LCBsYXlvdXQ6ICdtaW5pbWFsJyB9fSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX19zZWxlY3RcIj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC10b2dnbGVcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHVwZGF0ZVNlbGVjdGVkKGlkKTtcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC1pY29uIGljb24gaWNvbi0tOFwiIHNyYz17Y2hlY2tJY29ufSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvTGluaz5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCB7IFByb2plY3RTbGlkZUluIH0gZnJvbSAnLi8nO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTQ0FMRV9GQURFIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZFByb2plY3RJY29uIGZyb20gJ2ljb25zL2FkZF9wcm9qZWN0LnN2Zyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgYWRkUHJvamVjdCwgUVVFUllfS0VZUywgZWRpdFByb2plY3QsIGZldGNoUHJvamVjdEJ5SWQgfSBmcm9tICcuLi8uLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0QWRkKHsgc2V0TmV3UHJvamVjdElkIH0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW3Byb2plY3RJZCwgc2V0UHJvamVjdElkXSA9IHVzZVN0YXRlKG51bGwpO1xuXHRjb25zdCBbc2xpZGVJbk9wZW4sIHNldFNsaWRlSW5PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGRhdGE6IHByb2plY3QgfSA9IHVzZVF1ZXJ5KFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0sICgpID0+IGZldGNoUHJvamVjdEJ5SWQoeyBwcm9qZWN0SWQgfSksIHtcblx0XHRlbmFibGVkOiAhIXByb2plY3RJZCxcblx0fSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXROZXdQcm9qZWN0SWQocHJvamVjdElkKTtcblx0fSwgW3Byb2plY3RJZF0pO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBhZGRNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZFByb2plY3QsIHtcblx0XHRvblN1Y2Nlc3M6ICh7IGlkIH0pID0+IHNldFByb2plY3RJZChpZCksXG5cdH0pO1xuXG5cdGNvbnN0IGVkaXRNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGVkaXRQcm9qZWN0LCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiBpbnZhbGlkYXRlUHJvamVjdCgpLFxuXHR9KTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlU2xpZGVJbiA9ICgpID0+IHtcblx0XHRzZXRTbGlkZUluT3Blbighc2xpZGVJbk9wZW4pO1xuXG5cdFx0LyogTXV0YXRlIG9uIG1vZGFsIG9wZW4gKi9cblx0XHRpZiAoIXNsaWRlSW5PcGVuKSBhZGRNdXRhdGlvbi5tdXRhdGUoKTtcblxuXHRcdC8qIFJlc2V0IGlkIG9uIGNsb3NlIG1vZGFsICovXG5cdFx0aWYgKHNsaWRlSW5PcGVuKSB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2V0UHJvamVjdElkKG51bGwpO1xuXHRcdFx0fSwgMjUwKTtcblxuXHRcdFx0aW52YWxpZGF0ZVByb2plY3QoKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgdXBkYXRlUHJvamVjdCA9IChmb3JtUmVmKSA9PiBlZGl0TXV0YXRpb24ubXV0YXRlKHsgZm9ybVJlZiwgaWQ6IHByb2plY3RJZCB9KTtcblx0Y29uc3QgaW52YWxpZGF0ZVByb2plY3QgPSAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLlBST0pFQ1RfQllfVVNFUik7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxtb3Rpb24uYnV0dG9uXG5cdFx0XHRcdHsuLi5TQ0FMRV9GQURFfVxuXHRcdFx0XHRrZXk9XCJhZGQtcHJvamVjdFwiXG5cdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1pbnRlcmFjdGl2ZSBpY29uLXdyYXBwZXItLXNlY29uZGFyeSBidG4gYnRuLWxpbmsgYnRuLS1hZGQgYnRuLS1hZGQtcmlnaHRcIlxuXHRcdFx0XHRzdHlsZT17eyAnLS1zaXplJzogNzUgfX1cblx0XHRcdFx0b25DbGljaz17dG9nZ2xlU2xpZGVJbn0+XG5cdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0zMCB0ZXh0LXNlY29uZGFyeVwiIHNyYz17YWRkUHJvamVjdEljb259IC8+XG5cdFx0XHQ8L21vdGlvbi5idXR0b24+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7c2xpZGVJbk9wZW4gJiYgPFByb2plY3RTbGlkZUluIHsuLi57IHByb2plY3QsIHVwZGF0ZVByb2plY3QsIHRvZ2dsZVNsaWRlSW4gfX0gLz59XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRJbWFnZUljb24gZnJvbSAnaWNvbnMvYWRkX2ltYWdlLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RJbWFnZSh7IHByb2plY3RJbWFnZXMgfSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyBwaGFzZXMgPSBbXSwgdGl0bGUgfSA9IHByb2plY3RJbWFnZXNbMF0gfHwge307XG5cdGNvbnN0IHsgaW1hZ2UgfSA9IHBoYXNlc1twaGFzZXMubGVuZ3RoIC0gMV0gfHwge307XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX19pbWFnZSBib3JkZXIgbS0yXCI+XG5cdFx0XHR7aW1hZ2UgJiYgKFxuXHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJcblx0XHRcdFx0XHRzcmM9e2ltYWdlLnRodW1ibmFpbH1cblx0XHRcdFx0XHRzcmNTZXQ9e2Ake2ltYWdlLnRodW1ibmFpbFJldGluYX0gMnhgfVxuXHRcdFx0XHRcdGFsdD17dGl0bGV9XG5cdFx0XHRcdC8+XG5cdFx0XHQpfVxuXHRcdFx0eyFpbWFnZSAmJiA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tNDggdGV4dC1tdXRlZC0tNDBcIiBzcmM9e2FkZEltYWdlSWNvbn0gLz59XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBBY3Rpb25NZW51IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiwgU1RBR0dFUl9VUCB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcbmltcG9ydCBsZWF2ZUljb24gZnJvbSAnaWNvbnMvbGVhdmUuc3ZnJztcbmltcG9ydCBhcmNoaXZlSWNvbiBmcm9tICdpY29ucy9hcmNoaXZlLnN2Zyc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdHMsIGxlYXZlUHJvamVjdHMsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJlc3VsdHMoeyBwcm9qZWN0cywgbmV3UHJvamVjdElkIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQsIHJlc2V0U2VsZWN0ZWQgfSA9IHVzZVNlbGVjdGlvbigpO1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGxlYXZlUHJvamVjdHNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGxlYXZlUHJvamVjdHMsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuUFJPSkVDVF9CWV9VU0VSKTtcblx0XHRcdHJlc2V0U2VsZWN0ZWQoKTtcblx0XHR9LFxuXHR9KTtcblxuXHRjb25zdCBkZWxldGVQcm9qZWN0c011dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlUHJvamVjdHMsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuUFJPSkVDVF9CWV9VU0VSKTtcblx0XHRcdHJlc2V0U2VsZWN0ZWQoKTtcblx0XHR9LFxuXHR9KTtcblxuXHRjb25zdCBhY3Rpb25zID0gW1xuXHRcdHtcblx0XHRcdHRpdGxlOiAnTGVhdmUnLFxuXHRcdFx0dGhlbWU6ICd3YXJuaW5nJyxcblx0XHRcdGhhc1Blcm1pc3Npb246IFsndXNlcicsICdiYXNpYyddLFxuXHRcdFx0aWNvbjogbGVhdmVJY29uLFxuXHRcdFx0bXV0YXRpb246ICgpID0+IGxlYXZlUHJvamVjdHNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWRzOiBzZWxlY3RlZCwgdXNlcklkOiBjdXJyZW50VXNlci5pZCB9KSxcblx0XHRcdGlzTG9hZGluZzogbGVhdmVQcm9qZWN0c011dGF0aW9uLmlzTG9hZGluZyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiAnQXJjaGl2ZScsXG5cdFx0XHR0aGVtZTogJ3NlY29uZGFyeScsXG5cdFx0XHRoYXNQZXJtaXNzaW9uOiBbJ2FkbWluJ10sXG5cdFx0XHRpY29uOiBhcmNoaXZlSWNvbixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiAnUmVtb3ZlJyxcblx0XHRcdHRoZW1lOiAnZGFuZ2VyJyxcblx0XHRcdGhhc1Blcm1pc3Npb246IFsnYWRtaW4nXSxcblx0XHRcdGljb246IGNsb3NlSWNvbixcblx0XHRcdGljb25TaXplOiAxMCxcblx0XHRcdG11dGF0aW9uOiAoKSA9PiBkZWxldGVQcm9qZWN0c011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZHM6IHNlbGVjdGVkIH0pLFxuXHRcdFx0aXNMb2FkaW5nOiBkZWxldGVQcm9qZWN0c011dGF0aW9uLmlzTG9hZGluZyxcblx0XHR9LFxuXHRdO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8aDEgY2xhc3NOYW1lPVwiaDUgdGV4dC13aGl0ZSBtYi02XCI+WW91ciBwcm9qZWN0czwvaDE+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7cHJvamVjdHMubGVuZ3RoID09PSAwICYmIChcblx0XHRcdFx0XHQ8bW90aW9uLnAgey4uLkZBREVfSU59IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbWItMCBwb3NpdGlvbi1hYnNvbHV0ZVwiPlxuXHRcdFx0XHRcdFx0e2BZb3UgZG9uJ3QgaGF2ZSBhbnkgcHJvamVjdHMgeWV0YH1cblx0XHRcdFx0XHQ8L21vdGlvbi5wPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YHJvdyByb3ctLWVxdWFsaXplZCBndXR0ZXJzLTUgJHtzZWxlY3RlZC5sZW5ndGggPiAwICYmICdoYXMtc2VsZWN0aW9ucyd9YH0+XG5cdFx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdFx0e3Byb2plY3RzXG5cdFx0XHRcdFx0XHQuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkICE9PSBuZXdQcm9qZWN0SWQpXG5cdFx0XHRcdFx0XHQubWFwKChwcm9qZWN0LCBwcm9qZWN0SW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRcdFx0XHR7Li4uU1RBR0dFUl9VUChwcm9qZWN0SW5kZXgpfVxuXHRcdFx0XHRcdFx0XHRcdGtleT17cHJvamVjdC5pZH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXhsLTMgY29sLXh4bC0yXCJcblx0XHRcdFx0XHRcdFx0XHRsYXlvdXQ+XG5cdFx0XHRcdFx0XHRcdFx0PFByb2plY3Qgey4uLnsgcHJvamVjdCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH19IC8+XG5cdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e3NlbGVjdGVkLmxlbmd0aCA+IDAgJiYgPEFjdGlvbk1lbnUgey4uLnsgc2VsZWN0ZWQsIHJlc2V0U2VsZWN0ZWQsIGFjdGlvbnMgfX0gLz59XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dGFyZWFBdXRvc2l6ZSc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgRHJvcHpvbmUsIExvYWRpbmdXcmFwcGVyLCBTbGlkZUluLCBVc2VycywgVXNlckFkZCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTVEFHR0VSX1VQIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RTbGlkZUluKHsgcHJvamVjdCA9IHt9LCB1cGRhdGVQcm9qZWN0LCB0b2dnbGVTbGlkZUluIH0pIHtcblx0LyogQ29uc3RhbnRzICAqL1xuXHRjb25zdCB7IGlkOiBwcm9qZWN0SWQgPSBudWxsLCB0aXRsZSA9ICcnLCBwcm9qZWN0SW1hZ2VzID0gW10sIHVzZXJzID0gW10gfSA9IHByb2plY3Q7XG5cblx0LyogUmVmcyAqL1xuXHRjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PFNsaWRlSW4gey4uLnsgdG9nZ2xlU2xpZGVJbiB9fSBkb21FbGVtZW50PXtkb2N1bWVudC5ib2R5fT5cblx0XHRcdDxmb3JtXG5cdFx0XHRcdHJlZj17Zm9ybVJlZn1cblx0XHRcdFx0bWV0aG9kPVwiUE9TVFwiXG5cdFx0XHRcdGNsYXNzTmFtZT1cInNsaWRlLWluX19mb3JtXCJcblx0XHRcdFx0b25TdWJtaXQ9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dG9nZ2xlU2xpZGVJbigpO1xuXHRcdFx0XHR9fT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbl9faGVhZGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHQtNiBwdC1tZC0xMiBwYi0zXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicHJvamVjdFRpdGxlXCI+XG5cdFx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtLWNsZWFyIHRleHQtLXhsXCJcblx0XHRcdFx0XHRcdGlkPVwicHJvamVjdFRpdGxlXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJ0aXRsZVwiXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlRoZSBwcm9qZWN0IG5hbWVcIlxuXHRcdFx0XHRcdFx0b25CbHVyPXsoKSA9PiB1cGRhdGVQcm9qZWN0KGZvcm1SZWYpfVxuXHRcdFx0XHRcdFx0YXV0b0ZvY3VzXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInNsaWRlLWluX19jbG9zZSBidG4gYnRuLWxpbmsgbWwtYXV0b1wiXG5cdFx0XHRcdFx0XHRkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17dG9nZ2xlU2xpZGVJbn1cblx0XHRcdFx0XHRcdHRhYkluZGV4PVwiLTFcIj5cblx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbl9fYm9keSBwdC0zIHBiLTEyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0yXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInByb2plY3REZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRcdHtgV2hhdCdzIHRoaXMgcHJvamVjdCBhYm91dD9gfVxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8VGV4dGFyZWFBdXRvc2l6ZVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtLXRleHQgZm9ybS1jb250cm9sLS1jbGVhciBtYi0xMFwiXG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJwcm9qZWN0RGVzY3JpcHRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJXaGF0J3MgdGhpcyBwcm9qZWN0IGFib3V0P1wiXG5cdFx0XHRcdFx0XHRcdFx0b25CbHVyPXsoKSA9PiB1cGRhdGVQcm9qZWN0KGZvcm1SZWYpfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIGQtZmxleCBhbGlnbi1pdGVtcy1iYXNlbGluZSBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0XHRcdDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdCB9fSBzaXplPVwibGdcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8VXNlckFkZCB7Li4ueyB1c2VycywgcHJvamVjdCB9fSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PERyb3B6b25lIHsuLi57IHByb2plY3RJZCwgcHJvamVjdEltYWdlcyB9fT5cblx0XHRcdFx0XHRcdHsoeyB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc0xvYWRpbmcgfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHRcdFx0XHRcdHtwcm9qZWN0SW1hZ2VzLm1hcCgocHJvamVjdEltYWdlLCBwcm9qZWN0SW1hZ2VJbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PERyb3B6b25lSW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtwcm9qZWN0SW1hZ2UuaWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi57IHByb2plY3RJbWFnZSwgcHJvamVjdEltYWdlSW5kZXgsIHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzTG9hZGluZyB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvRHJvcHpvbmU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluX19mb290ZXIgcGItNiBwYi1tZC0xMlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtMCB3LTEwMFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTEgbWwtYXV0b1wiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic2xpZGUtaW5fX2J0biBidG4gYnRuLWJsb2NrIGJ0bi1zZWNvbmRhcnkgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG1vdGlvbi5zcGFuIGNsYXNzTmFtZT1cImJ0bi10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5TYXZlPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvbW90aW9uLnNwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvU2xpZGVJbj5cblx0KTtcbn1cblxuY29uc3QgRHJvcHpvbmVJbWFnZSA9ICh7IHByb2plY3RJbWFnZSwgcHJvamVjdEltYWdlSW5kZXgsIHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzTG9hZGluZyB9KSA9PiB7XG5cdGNvbnN0IHsgdGl0bGUsIGlkLCBwaGFzZXMgPSBbXSB9ID0gcHJvamVjdEltYWdlO1xuXHRjb25zdCB7IGltYWdlIH0gPSBwaGFzZXNbcGhhc2VzLmxlbmd0aCAtIDFdIHx8IHt9O1xuXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXZcblx0XHRcdGxheW91dFxuXHRcdFx0ey4uLlNUQUdHRVJfVVAocHJvamVjdEltYWdlSW5kZXgpfVxuXHRcdFx0Y2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC14bC0zIGNvbC14eGwtMlwiXG5cdFx0XHRrZXk9e2lkfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHJvcHpvbmVfX2NvbnRhaW5lclwiPlxuXHRcdFx0XHQ8aW1nXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZHJvcHpvbmVfX2ltYWdlIGltZy1mbHVpZFwiXG5cdFx0XHRcdFx0c3JjPXtpbWFnZS50aHVtYm5haWx9XG5cdFx0XHRcdFx0c3JjU2V0PXtgJHtpbWFnZS50aHVtYm5haWxSZXRpbmF9IDJ4YH1cblx0XHRcdFx0XHRhbHQ9e3RpdGxlfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIGRyb3B6b25lX19pbWFnZS1kZWxldGUgcC0wXCJcblx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0dXBkYXRlUHJvamVjdEltYWdlcygnZGVsZXRlJywgeyBwcm9qZWN0SW1hZ2VJZHM6IFtpZF0gfSk7XG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZHJvcHpvbmVfX2ltYWdlLWRlbGV0ZS1pY29uIGljb24td3JhcHBlciBpY29uLXdyYXBwZXItLWRhbmdlciBteC1hdXRvXCJcblx0XHRcdFx0XHRcdHN0eWxlPXt7ICctLXNpemUnOiA1MCB9fT5cblx0XHRcdFx0XHRcdDxMb2FkaW5nV3JhcHBlclxuXHRcdFx0XHRcdFx0XHRsb2FkaW5nPXtpc0xvYWRpbmd9XG5cdFx0XHRcdFx0XHRcdGxvYWRlclNpemU9ezIwfVxuXHRcdFx0XHRcdFx0XHRjbGFzc2VzPXt7XG5cdFx0XHRcdFx0XHRcdFx0bG9hZGVyQ2xhc3NlczogJ3Bvc2l0aW9uLWFic29sdXRlIGQtZmxleCB0ZXh0LWRhbmdlcicsXG5cdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTQgdGV4dC1kYW5nZXIgbXQtMFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHRcdFx0PC9Mb2FkaW5nV3JhcHBlcj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0IH0gZnJvbSAnLi9Qcm9qZWN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdEFkZCB9IGZyb20gJy4vUHJvamVjdEFkZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RJbWFnZSB9IGZyb20gJy4vUHJvamVjdEltYWdlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdFNsaWRlSW4gfSBmcm9tICcuL1Byb2plY3RTbGlkZUluJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdFJlc3VsdHMgfSBmcm9tICcuL1Byb2plY3RSZXN1bHRzJztcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlciwgTW9kYWwsIEVkaXRhYmxlQm9keSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjaGV2cm9uSWNvbiBmcm9tICdpY29ucy9jaGV2cm9uLnN2Zyc7XG5pbXBvcnQgZWRpdEljb24gZnJvbSAnaWNvbnMvZWRpdC5zdmcnO1xuaW1wb3J0IG5leHRJY29uIGZyb20gJ2ljb25zL25leHQuc3ZnJztcbmltcG9ydCBjb21tZW50SWNvbiBmcm9tICdpY29ucy9jb21tZW50LnN2Zyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCB7IFJldmlld0NvbnRleHQsIFN0YXRpY0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBlZGl0UHJvamVjdEltYWdlLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0FjdGlvbkJhcih7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcGhhc2UsIGNvbW1lbnRzUGFuZWxPcGVuLCB0b2dnbGVDb21tZW50c1BhbmVsIH0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW2VkaXRNb2RhbE9wZW4sIHNldEVkaXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbcGhhc2VNb2RhbE9wZW4sIHNldFBoYXNlTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogQ29udGV4dCAqL1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyLCB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblx0Y29uc3QgeyBwcm9qZWN0SW1hZ2VJZCB9ID0gdXNlQ29udGV4dChSZXZpZXdDb250ZXh0KTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlRWRpdE1vZGFsID0gKCkgPT4gc2V0RWRpdE1vZGFsT3BlbighZWRpdE1vZGFsT3Blbik7XG5cdGNvbnN0IHRvZ2dsZVBoYXNlTW9kYWwgPSAoKSA9PiBzZXRQaGFzZU1vZGFsT3BlbighcGhhc2VNb2RhbE9wZW4pO1xuXG5cdGNvbnN0IG11dGF0aW9uT25TdWNjZXNzID0gKCkgPT4ge1xuXHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfSU1BR0VfQllfSUQsIE51bWJlcihwcm9qZWN0SW1hZ2VJZCldKTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYXIgYmFyLS1yZXZpZXdcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTAganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGQtZmxleCBmbGV4LWNvbHVtblwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LS1zbSBtYi0wXCI+UHJvamVjdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkdcblx0XHRcdFx0XHRcdFx0XHRcdHdyYXBwZXI9XCJzdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaWNvbiBpY29uLS04IHRleHQtd2hpdGUgdGV4dC1tdXRlZC0tNTAgbXgtMVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2NoZXZyb25JY29ufVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0tc20gbWItMCB0ZXh0LXRydW5jYXRlXCIgc3R5bGU9e3sgbWF4V2lkdGg6IDEyMCB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdHt0aXRsZX1cblx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LS14cyB0ZXh0LW11dGVkLS03MCBtYi0wXCI+MSBvZiAyPC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm14LTEgdGV4dC1tdXRlZC0tMjBcIj4vPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtLXhzIHRleHQtbXV0ZWQtLTcwIG1iLTBcIj5QaGFzZSB7cGhhc2V9PC9wPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmUgaHItMlwiPlxuXHRcdFx0XHRcdFx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYmFyX19hY3Rpb24tYnRuICR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRlZGl0TW9kYWxPcGVuICYmICdpcy1hY3RpdmUnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBidG4gYnRuLWxpbmsgdGV4dC1yZXN0YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVFZGl0TW9kYWx9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNlwiIHNyYz17ZWRpdEljb259IC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TW9kYWxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICdFZGl0aW5nIGltYWdlJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHN1YnRpdGxlOiAnU2F2ZSB3aGVuIHJlYWR5Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZGFsT3BlbjogZWRpdE1vZGFsT3Blbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvZ2dsZU1vZGFsOiB0b2dnbGVFZGl0TW9kYWwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZW5kZXJPbkJvZHk6IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2VudGVyOiBmYWxzZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV4dGVuc2lvbkNsYXNzZXM6ICdiYXJfX2VkaXQtbW9kYWwnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxFZGl0YWJsZUJvZHlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvZ2dsZU1vZGFsOiB0b2dnbGVFZGl0TW9kYWwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGZpZWxkczogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgbmFtZTogJ3RpdGxlJywgZGVmYXVsdFZhbHVlOiB0aXRsZSB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsgbmFtZTogJ2Rlc2NyaXB0aW9uJywgZGVmYXVsdFZhbHVlOiBkZXNjcmlwdGlvbiB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtdXRhdGlvbjogZWRpdFByb2plY3RJbWFnZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bXV0YXRpb25JZDogcHJvamVjdEltYWdlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG11dGF0aW9uT25TdWNjZXNzOiBtdXRhdGlvbk9uU3VjY2Vzcyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Nb2RhbD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYmFyX19hY3Rpb24tYnRuICR7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb21tZW50c1BhbmVsT3BlbiAmJiAnaXMtYWN0aXZlJ1xuXHRcdFx0XHRcdFx0XHRcdH0gYnRuIGJ0bi1saW5rIHRleHQtcmVzdCBoci0yYH1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVDb21tZW50c1BhbmVsfT5cblx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTZcIiBzcmM9e2NvbW1lbnRJY29ufSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBoci0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3VzZXJSb2xlID09PSAnYWRtaW4nICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BiYXJfX2FjdGlvbi1idG4gJHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBoYXNlTW9kYWxPcGVuICYmICdpcy1hY3RpdmUnXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBidG4gYnRuLWxpbmsgdGV4dC1yZXN0YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVQaGFzZU1vZGFsfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTZcIiBzcmM9e25leHRJY29ufSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PE1vZGFsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAnTmV4dCBwaGFzZScsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdWJ0aXRsZTogJ0FkZCBhIG5ldyBpbWFnZSBmb3IgdGhlIG5leHQgcGhhc2UnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kYWxPcGVuOiBwaGFzZU1vZGFsT3Blbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRvZ2dsZU1vZGFsOiB0b2dnbGVQaGFzZU1vZGFsLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVuZGVyT25Cb2R5OiBmYWxzZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNlbnRlcjogZmFsc2UsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRleHRlbnNpb25DbGFzc2VzOiAnYmFyX19lZGl0LW1vZGFsJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHREcm9wem9uZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L01vZGFsPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cblx0XHRcdFx0XHRcdFx0PFVzZXIgey4uLnsgdXNlcjogY3VycmVudFVzZXIsIHNpemU6ICdsZycgfX0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCBQcm9qZWN0UmV2aWV3TWFya2VyIGZyb20gJy4vUHJvamVjdFJldmlld01hcmtlcic7XG5pbXBvcnQgUHJvamVjdFJldmlld0NvbW1lbnRNb2RhbCBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50TW9kYWwnO1xuaW1wb3J0IFByb2plY3RSZXZpZXdDb21tZW50QWRkIGZyb20gJy4vUHJvamVjdFJldmlld0NvbW1lbnRBZGQnO1xuaW1wb3J0IFByb2plY3RSZXZpZXdBY3Rpb25CYXIgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3QWN0aW9uQmFyJztcbmltcG9ydCBQcm9qZWN0UmV2aWV3UGFnaW5hdGlvbiBmcm9tICcuL1Byb2plY3RSZXZpZXdQYWdpbmF0aW9uJztcbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudFBhbmVsIGZyb20gJy4vUHJvamVjdFJldmlld0NvbW1lbnRQYW5lbCc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFNlY3VyaXR5TW9kYWwgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBmZXRjaFByb2plY3RVc2VycywgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCB7IFN0YXRpY0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU0xJREVfSU4gfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogR2xvYmFsICovXG5jb25zdCBjdXJzb3JPZmZzZXQgPSAxMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0NhbnZhcyh7IHBhcmVudElkLCB0aXRsZSwgcGhhc2VzID0gW10sIC4uLnJlc3QgfSkge1xuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgZGF0YTogcHJvamVjdFVzZXJzID0gW10gfSA9IHVzZVF1ZXJ5KFxuXHRcdFFVRVJZX0tFWVMuUFJPSkVDVF9VU0VSUyxcblx0XHQoKSA9PiBmZXRjaFByb2plY3RVc2Vycyh7IHByb2plY3RJZDogcGFyZW50SWQgfSksXG5cdFx0e1xuXHRcdFx0ZW5hYmxlZDogISFwYXJlbnRJZCxcblx0XHR9XG5cdCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgaW1hZ2UsIGlkOiBwaGFzZUlkLCBjb21tZW50cywgcGhhc2UgfSA9IHBoYXNlc1twaGFzZXMubGVuZ3RoIC0gMV0gfHwge307XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBjdXJyZW50VXNlciB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblxuXHQvKiBSZWZzICovXG5cdGNvbnN0IHJldmlld1JlZiA9IHVzZVJlZigpO1xuXG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFttYXJrZXJQb3MsIHNldE1hcmtlclBvc10gPSB1c2VTdGF0ZSgpO1xuXHRjb25zdCBbc2VjdXJpdHlNb2RhbE9wZW4sIHNldFNlY3VyaXR5TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW2NvbW1lbnRzUGFuZWxPcGVuLCBzZXRDb21tZW50c1BhbmVsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZUNvbW1lbnRBZGRPcGVuID0gKCkgPT4gc2V0TWFya2VyUG9zKG51bGwpO1xuXHRjb25zdCB0b2dnbGVDb21tZW50c1BhbmVsID0gKCkgPT4gc2V0Q29tbWVudHNQYW5lbE9wZW4oIWNvbW1lbnRzUGFuZWxPcGVuKTtcblxuXHRjb25zdCBwb3NNYXJrZXIgPSAoeyBjbGllbnRYLCBjbGllbnRZIH0pID0+IHtcblx0XHRpZiAoIWN1cnJlbnRVc2VyLmF1dGhlbnRpY2F0ZWQpIHtcblx0XHRcdHNldFNlY3VyaXR5TW9kYWxPcGVuKHRydWUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJldmlld1BvcyA9IHJldmlld1JlZj8uY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdHNldE1hcmtlclBvcygoKSA9PiB7XG5cdFx0XHRjb25zdCB4UGVyY2VudCA9ICgoY2xpZW50WCAtIGN1cnNvck9mZnNldCkgLyByZXZpZXdQb3Mud2lkdGgpICogMTAwO1xuXHRcdFx0Y29uc3QgeVBlcmNlbnQgPSAoKGNsaWVudFkgLSByZXZpZXdQb3MudG9wIC0gY3Vyc29yT2Zmc2V0KSAvIHJldmlld1Bvcy5oZWlnaHQpICogMTAwO1xuXG5cdFx0XHRyZXR1cm4geyB4UGVyY2VudCwgeVBlcmNlbnQsIHJldmlld1BvcyB9O1xuXHRcdH0pO1xuXHR9O1xuXG5cdC8qIHJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2IGxheW91dCBjbGFzc05hbWU9XCJyZXZpZXcgcG9zaXRpb24tcmVsYXRpdmUgbXgtbjEyIG1iLTMgbXQtbjEwXCI+XG5cdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRjbGFzc05hbWU9XCJyZXZpZXdfX2ltYWdlLXdyYXBwZXIgcG9zaXRpb24tcmVsYXRpdmVcIlxuXHRcdFx0XHRyZWY9e3Jldmlld1JlZn1cblx0XHRcdFx0aW5pdGlhbD17eyB3aWR0aDogJzEwMCUnIH19XG5cdFx0XHRcdGFuaW1hdGU9e3tcblx0XHRcdFx0XHR3aWR0aDogY29tbWVudHNQYW5lbE9wZW4gPyBgY2FsYygxMDAlIC0gNDAwcHgpYCA6ICcxMDAlJyxcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBjb21tZW50c1BhbmVsT3BlbiA/IFNMSURFX0lOLmFuaW1hdGUudHJhbnNpdGlvbiA6IFNMSURFX0lOLmV4aXQudHJhbnNpdGlvbixcblx0XHRcdFx0fX0+XG5cdFx0XHRcdDxpbWdcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJyZXZpZXdfX2ltYWdlIGltZy1mbHVpZCB3LTEwMFwiXG5cdFx0XHRcdFx0c3JjPXtpbWFnZS5vcmlnaW5hbH1cblx0XHRcdFx0XHRzcmNTZXQ9e2Ake2ltYWdlLm9yaWdpbmFsfSAyeGB9XG5cdFx0XHRcdFx0YWx0PXt0aXRsZX1cblx0XHRcdFx0XHRvbkNsaWNrPXtwb3NNYXJrZXJ9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdHtjb21tZW50cz8ubWFwKChjb21tZW50LCBjb21tZW50SW5kZXgpID0+IChcblx0XHRcdFx0XHQ8UHJvamVjdFJldmlld0NvbW1lbnRNb2RhbFxuXHRcdFx0XHRcdFx0a2V5PXtjb21tZW50LmlkfVxuXHRcdFx0XHRcdFx0ey4uLnsgY29tbWVudCwgY29tbWVudEluZGV4LCByZXZpZXdSZWYsIHByb2plY3RVc2VycywgdG9nZ2xlQ29tbWVudEFkZE9wZW4gfX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpKX1cblx0XHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0XHR7bWFya2VyUG9zICYmIChcblx0XHRcdFx0XHRcdDxQcm9qZWN0UmV2aWV3TWFya2VyIHsuLi57IC4uLm1hcmtlclBvcyB9fT5cblx0XHRcdFx0XHRcdFx0PFByb2plY3RSZXZpZXdDb21tZW50QWRkIHsuLi57IG1hcmtlclBvcywgcGhhc2VJZCwgdG9nZ2xlQ29tbWVudEFkZE9wZW4gfX0gLz5cblx0XHRcdFx0XHRcdDwvUHJvamVjdFJldmlld01hcmtlcj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0PFNlY3VyaXR5TW9kYWwgey4uLnsgc2VjdXJpdHlNb2RhbE9wZW4sIHNldFNlY3VyaXR5TW9kYWxPcGVuIH19IC8+XG5cdFx0XHRcdDxQcm9qZWN0UmV2aWV3UGFnaW5hdGlvbiB7Li4ucmVzdH0gLz5cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdDxQcm9qZWN0UmV2aWV3QWN0aW9uQmFyIHsuLi57IC4uLnJlc3QsIHRpdGxlLCBwaGFzZSwgY29tbWVudHNQYW5lbE9wZW4sIHRvZ2dsZUNvbW1lbnRzUGFuZWwgfX0gLz5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHtjb21tZW50c1BhbmVsT3BlbiAmJiAoXG5cdFx0XHRcdFx0PFByb2plY3RSZXZpZXdDb21tZW50UGFuZWxcblx0XHRcdFx0XHRcdHsuLi57IGNvbW1lbnRzLCBjb21tZW50c1BhbmVsT3BlbiwgdG9nZ2xlQ29tbWVudHNQYW5lbCwgcHJvamVjdFVzZXJzIH19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KX1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvbW90aW9uLmRpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbi8qIENvbXBvbmVudHMqL1xuaW1wb3J0IHsgVXNlciwgVXNlckluZm8gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0NvbW1lbnQoe1xuXHRjb21tZW50OiBjb250ZW50LFxuXHRjb21tZW50SW5kZXgsXG5cdHByb2plY3RVc2Vycyxcblx0c2V0UmVwbHlUb1VzZXIsXG5cdHJlbmRlckF1dGhvciA9IGZhbHNlLFxuXHRzaG93SW5pdGlhbFJlcGxpZXMgPSBmYWxzZSxcbn0pIHtcblx0LyogQ29udGFudHMgKi9cblx0Y29uc3QgeyBhdXRob3IsIGNyZWF0ZWQsIGNvbW1lbnQsIGNvbW1lbnRzIH0gPSBjb250ZW50O1xuXG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtzaG93UmVwbGllcywgc2V0U2hvd1JlcGxpZXNdID0gdXNlU3RhdGUoc2hvd0luaXRpYWxSZXBsaWVzKTtcblxuXHQvKiBSZW5kZXIgY29tcG9uZW50ICovXG5cdGNvbnN0IHJlbmRlckNvbW1lbnQgPSAoKSA9PiB7XG5cdFx0Y29uc3QgdXNlcnNSZWdleCA9IC9AXFxbW15cXF1dKlxcXVxce1swLTldK1xcfS9naTtcblx0XHRjb25zdCB1c2Vyc0FycmF5ID0gWy4uLmNvbW1lbnQubWF0Y2hBbGwodXNlcnNSZWdleCldO1xuXHRcdGNvbnN0IGNvbW1lbnRzID0gY29tbWVudC5zcGxpdCgvQFxcW1teXFxdXSpcXF1cXHtbMC05XStcXH0vZ2kpO1xuXG5cdFx0cmV0dXJuIChcblx0XHRcdDxwIGNsYXNzTmFtZT1cImxoLS1tZFwiPlxuXHRcdFx0XHR7Y29tbWVudHMubWFwKChjb21tZW50LCBjb21tZW50SW5kZXgpID0+IHtcblx0XHRcdFx0XHRsZXQgdXNlcjtcblxuXHRcdFx0XHRcdGlmIChjb21tZW50SW5kZXggaW4gdXNlcnNBcnJheSkge1xuXHRcdFx0XHRcdFx0dXNlciA9IHByb2plY3RVc2Vycy5maW5kKCh1c2VyKSA9PiB1c2Vyc0FycmF5W2NvbW1lbnRJbmRleF1bMF0uaW5jbHVkZXModXNlci5kaXNwbGF5KSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxSZWFjdC5GcmFnbWVudCBrZXk9e2NvbW1lbnRJbmRleH0+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImNvbW1lbnRfX2NvbnRlbnRcIj57YCR7Y29tbWVudH0gYH08L3NwYW4+eycgJ31cblx0XHRcdFx0XHRcdFx0e3VzZXIgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb21tZW50X19tZW50aW9uIG1lbnRpb25zX19tZW50aW9uIHB4LTFcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyAnLS10aGVtZSc6IHVzZXIudXNlckNvbG9yIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5Ae3VzZXIuZGlzcGxheX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+eycgJ31cblx0XHRcdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvUmVhY3QuRnJhZ21lbnQ+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHQ8L3A+XG5cdFx0KTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb21tZW50XCI+XG5cdFx0XHRcdHtyZW5kZXJBdXRob3IgJiYgKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCI+XG5cdFx0XHRcdFx0XHQ8VXNlciB7Li4ueyB1c2VyOiBhdXRob3IgfX0gLz5cblx0XHRcdFx0XHRcdDxVc2VySW5mb1xuXHRcdFx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBhdXRob3IuZGlzcGxheSxcblx0XHRcdFx0XHRcdFx0XHRzdWJ0aXRsZTogYC8gJHthdXRob3Iub3JnYW5pc2F0aW9ufWAsXG5cdFx0XHRcdFx0XHRcdFx0bGF5b3V0OiAnaG9yaXpvbnRhbCcsXG5cdFx0XHRcdFx0XHRcdFx0c2l6ZTogJ3NtJyxcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR7dHlwZW9mIGNvbW1lbnRJbmRleCAhPT0gJ3VuZGVmaW5lZCcgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWwtYXV0byBpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1oc2wgaWNvbi13cmFwcGVyLS1pbnRlcmFjdGl2ZVwiXG5cdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgJy0tdGhlbWUnOiBhdXRob3IudXNlckNvbG9yIH19PlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtLXhzXCI+e2NvbW1lbnRJbmRleCArIDF9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtyZW5kZXJDb21tZW50KCl9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtdC0xXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY29tbWVudF9fY3JlYXRlZCB0ZXh0LW11dGVkLS02MCBtYi0wIGhyLTJcIj57Y3JlYXRlZH08L3A+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY29tbWVudF9fYWdyZWUgdGV4dC1tdXRlZC0tNjAgbWItMCBoci0yIGZvbnQtd2VpZ2h0LW5vcm1hbFwiPjcgYWdyZWU8L3A+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tbWVudF9fcmVwbHktdG9nZ2xlIGJ0biBidG4tbGluayB0ZXh0LW11dGVkLS02MCBtYi0wIGhyLTIgZm9udC13ZWlnaHQtbm9ybWFsXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldFJlcGx5VG9Vc2VyKGF1dGhvcil9PlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYnRuLXRleHQgdGV4dC13aGl0ZVwiPlJlcGx5PC9zcGFuPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdHtjb21tZW50cy5sZW5ndGggPiAwICYmIChcblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tbWVudF9fcmVwbGllcy10b2dnbGUgYnRuIGJ0bi1saW5rIHRleHQtbXV0ZWQtLTYwIG1iLTAgaHItMiBmb250LXdlaWdodC1ub3JtYWwgbWwtYXV0byB0ZXh0LXdoaXRlXCJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0U2hvd1JlcGxpZXMoIXNob3dSZXBsaWVzKX0+XG5cdFx0XHRcdFx0XHRcdHtzaG93UmVwbGllcyA/ICdIaWRlJyA6ICdTaG93J30ge2NvbW1lbnRzLmxlbmd0aH0gcmVwbGllc1xuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtjb21tZW50cy5sZW5ndGggPiAwICYmIHNob3dSZXBsaWVzICYmIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRfX3JlcGxpZXNcIj5cblx0XHRcdFx0XHRcdHtjb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8UHJvamVjdFJldmlld0NvbW1lbnRcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17Y29tbWVudC5pZH1cblx0XHRcdFx0XHRcdFx0XHRcdHsuLi57IGNvbW1lbnQsIHByb2plY3RVc2Vycywgc2V0UmVwbHlUb1VzZXIsIHJlbmRlckF1dGhvcjogdHJ1ZSB9fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEJ1dHRvbiwgVXNlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudE1lbnRpb25zIGZyb20gJy4vUHJvamVjdFJldmlld0NvbW1lbnRNZW50aW9ucyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBTZXJ2aWNlcyAqL1xuaW1wb3J0IHsgY2FsY0NvbW1lbnRQb3MgfSBmcm9tICcuL3NlcnZpY2VzJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9tYWluQ29udGV4dCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgUVVFUllfS0VZUywgYWRkQ29tbWVudCB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU5fVVAgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZUNsb3NlT25Fc2MgfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCB7IFJldmlld0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0NvbW1lbnRBZGQoeyBtYXJrZXJQb3MsIHBoYXNlSWQsIHRvZ2dsZUNvbW1lbnRBZGRPcGVuIH0pIHtcblx0LyogUmVmcyAqL1xuXHRjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cdGNvbnN0IG1vZGFsUmVmID0gdXNlUmVmKCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgbGVmdCA9ICczMHB4JywgdG9wID0gJzMwcHgnIH0gPSBjYWxjQ29tbWVudFBvcyhtb2RhbFJlZiwgbWFya2VyUG9zKTtcblxuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFttZW50aW9ucywgc2V0TWVudGlvbnNdID0gdXNlU3RhdGUoW10pO1xuXG5cdC8qIEhvb2tzICovXG5cdHVzZUNsb3NlT25Fc2MobWFya2VyUG9zLCB0b2dnbGVDb21tZW50QWRkT3Blbik7XG5cdGNvbnN0IHsgY3VycmVudFVzZXI6IHVzZXIgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblx0Y29uc3QgeyBwcm9qZWN0SW1hZ2VJZCB9ID0gdXNlQ29udGV4dChSZXZpZXdDb250ZXh0KTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgYWRkQ29tbWVudE11dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkQ29tbWVudCwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9JTUFHRV9CWV9JRCwgcGFyc2VJbnQocHJvamVjdEltYWdlSWQpXSk7XG5cdFx0XHR0b2dnbGVDb21tZW50QWRkT3BlbigpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRsYXlvdXRcblx0XHRcdHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMSB9fVxuXHRcdFx0cmVmPXttb2RhbFJlZn1cblx0XHRcdGNsYXNzTmFtZT1cInJldmlld19fY3VzdG9tLW1vZGFsIGN1c3RvbS1tb2RhbFwiXG5cdFx0XHRzdHlsZT17eyAnLS1sZWZ0JzogbGVmdCwgJy0tdG9wJzogdG9wIH19PlxuXHRcdFx0PG1vdGlvbi5kaXYga2V5PVwiY3VzdG9tLW1vZGFsLWNvbnRlbnRcIiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2NvbnRlbnQgYm9yZGVyIHAtNVwiIHsuLi5GQURFX0lOX1VQKDUwKX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19oZWFkZXIgZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHctMTAwXCI+XG5cdFx0XHRcdFx0XHQ8VXNlciB7Li4ueyB1c2VyIH19IHNpemU9XCJ4bFwiIC8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMCBtbC0zXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtLWxnIG1iLTAgbGgtLW1kXCI+QWRkIGEgY29tbWVudDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fY2xvc2UgYnRuIGJ0bi1saW5rIG1sLWF1dG9cIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dG9nZ2xlQ29tbWVudEFkZE9wZW59PlxuXHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEyXCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi0wIHRleHQtLW1kIGxoLS1tZFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTYwXCI+Q29tbWVudCBvcjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeVwiPiBAbWVudGlvbiA8L3NwYW4+eycgJ31cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS02MFwiPnNvbWVvbmU8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2JvZHkgZC1mbGV4IG10LTRcIj5cblx0XHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdFx0cmVmPXtmb3JtUmVmfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LWdyb3ctMVwiXG5cdFx0XHRcdFx0XHRvblN1Ym1pdD17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdGlmIChjb21tZW50Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0XHRhZGRDb21tZW50TXV0YXRpb24ubXV0YXRlKHtcblx0XHRcdFx0XHRcdFx0XHRcdHVzZXJJZDogdXNlci5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdHBoYXNlSWQ6IHBoYXNlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRjb21tZW50OiBjb21tZW50LnRyaW0oKSxcblx0XHRcdFx0XHRcdFx0XHRcdG1lbnRpb25lZDogbWVudGlvbnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogbWFya2VyUG9zLFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cImNvbW1lbnRcIj5cblx0XHRcdFx0XHRcdFx0QWRkIGEgY29tbWVudFxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmUgdy0xMDBcIj5cblx0XHRcdFx0XHRcdFx0PFByb2plY3RSZXZpZXdDb21tZW50TWVudGlvbnNcblx0XHRcdFx0XHRcdFx0XHR7Li4ueyBjb21tZW50LCBzZXRDb21tZW50LCBtZW50aW9ucywgc2V0TWVudGlvbnMsIGF1dG9Gb2N1czogdHJ1ZSB9fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0ZXh0ZW5zaW9uQ2xhc3Nlcz1cImZvcm0tY29udHJvbC1idG5cIlxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnRUeXBlPVwiaWNvblwiXG5cdFx0XHRcdFx0XHRcdFx0dGhlbWU9XCJkZWZhdWx0XCJcblx0XHRcdFx0XHRcdFx0XHR7Li4ueyBpc0xvYWRpbmc6IGFkZENvbW1lbnRNdXRhdGlvbi5pc0xvYWRpbmcgfX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgTWVudGlvbnNJbnB1dCwgTWVudGlvbiB9IGZyb20gJ3JlYWN0LW1lbnRpb25zJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkVXNlckljb24gZnJvbSAnaWNvbnMvYWRkX3VzZXIuc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlckF2YXRhciwgVXNlckluZm8gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VzZXJzL1VzZXInO1xuXG4vKiBTZXJ2aWNlcyAqL1xuaW1wb3J0IHN0eWxlTWVudGlvbnMgZnJvbSAnLi9zZXJ2aWNlcy9zdHlsZU1lbnRpb24nO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IFFVRVJZX0tFWVMsIGZldGNoUHJvamVjdFVzZXJzIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IHsgUmV2aWV3Q29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3Q29tbWVudE1lbnRpb25zKHtcblx0Y29tbWVudCxcblx0c2V0Q29tbWVudCxcblx0bWVudGlvbnMsXG5cdHNldE1lbnRpb25zLFxuXHRhdXRvRm9jdXMgPSBmYWxzZSxcbn0pIHtcblx0LyogQ29udGV4dCAqL1xuXHRjb25zdCB7IHByb2plY3RJZCB9ID0gdXNlQ29udGV4dChSZXZpZXdDb250ZXh0KTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgZGF0YTogcHJvamVjdFVzZXJzID0gW10gfSA9IHVzZVF1ZXJ5KFFVRVJZX0tFWVMuUFJPSkVDVF9VU0VSUywgKCkgPT4gZmV0Y2hQcm9qZWN0VXNlcnMoeyBwcm9qZWN0SWQgfSkpO1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgbWVudGlvblJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIEVmZmVjdHMgKi9cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAobWVudGlvbnMubGVuZ3RoID4gMCAmJiBtZW50aW9uUmVmPy5jdXJyZW50KSBzdHlsZU1lbnRpb25zKHByb2plY3RVc2VycywgbWVudGlvblJlZi5jdXJyZW50KTtcblx0fSwgW21lbnRpb25zLCBtZW50aW9uUmVmPy5jdXJyZW50XSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxNZW50aW9uc0lucHV0XG5cdFx0XHRcdHZhbHVlPXtjb21tZW50fVxuXHRcdFx0XHRjbGFzc05hbWU9XCJtZW50aW9uc1wiXG5cdFx0XHRcdGlkPVwiY29tbWVudFwiXG5cdFx0XHRcdG5hbWU9XCJjb21tZW50XCJcblx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTYXkgc29tZXRoaW5nIG5pY2UuLi5cIlxuXHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRDb21tZW50KGV2ZW50LnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHN0eWxlTWVudGlvbnMocHJvamVjdFVzZXJzKX1cblx0XHRcdFx0aW5wdXRSZWY9e21lbnRpb25SZWZ9XG5cdFx0XHRcdGF1dG9Gb2N1cz17YXV0b0ZvY3VzfT5cblx0XHRcdFx0PE1lbnRpb25cblx0XHRcdFx0XHR0cmlnZ2VyPVwiQFwiXG5cdFx0XHRcdFx0ZGF0YT17cHJvamVjdFVzZXJzfVxuXHRcdFx0XHRcdHJlbmRlclN1Z2dlc3Rpb249e1N1Z2dlc3Rpb259XG5cdFx0XHRcdFx0YWxsb3dTcGFjZUluUXVlcnlcblx0XHRcdFx0XHRhcHBlbmRTcGFjZU9uQWRkXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwibWVudGlvbnNfX21lbnRpb25cIlxuXHRcdFx0XHRcdGRpc3BsYXlUcmFuc2Zvcm09eyhfLCBuYW1lKSA9PiBgIEAke25hbWV9IGB9XG5cdFx0XHRcdFx0bWFya3VwPVwiQFtfX2Rpc3BsYXlfX117X19pZF9ffVwiXG5cdFx0XHRcdFx0b25BZGQ9eyhpZCkgPT4gc2V0TWVudGlvbnMoKG1lbnRpb25zKSA9PiBbLi4ubWVudGlvbnMsIGlkXSl9XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L01lbnRpb25zSW5wdXQ+XG5cdFx0PC8+XG5cdCk7XG59XG5cbi8qIEN1c3RvbSBTdWdnZXN0aW9uICovXG5jb25zdCBTdWdnZXN0aW9uID0gKGVudHJ5LCBxdWVyeSwgaGlnaGxpZ2h0ZWQsIGluZGV4LCBmb2N1c2VkKSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwibWVudGlvbl9fc3VnZ2VzdGlvbiB2ci0zXCI+XG5cdFx0PGJ1dHRvbiBjbGFzc05hbWU9e2B1c2VyIHVzZXItLXNlbGVjdCB1c2VyLS14bCAke2ZvY3VzZWQgJiYgJ2lzLWZvY3VzZWQnfWB9IHR5cGU9XCJidXR0b25cIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHQ8VXNlckF2YXRhciB7Li4uZW50cnl9IC8+XG5cdFx0XHRcdDxVc2VySW5mb1xuXHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHR0aXRsZTogZW50cnkuZGlzcGxheSxcblx0XHRcdFx0XHRcdHN1YnRpdGxlOiBlbnRyeS5vcmdhbmlzYXRpb24gPyBlbnRyeS5vcmdhbmlzYXRpb24gOiAnTm8gb3JnYW5pc2F0aW9uJyxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXJfX2FkZCB0ZXh0LXNlY29uZGFyeSByb3VuZGVkLWNpcmNsZSBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19hZGQtaWNvbiBpY29uIGljb24tLTEyIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXthZGRVc2VySWNvbn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2J1dHRvbj5cblx0PC9kaXY+XG4pO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgRkFERV9JTl9VUCB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IFByb2plY3RSZXZpZXdNYXJrZXIgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3TWFya2VyJztcbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudCBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50JztcbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudFJlcGx5IGZyb20gJy4vUHJvamVjdFJldmlld0NvbW1lbnRSZXBseSc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBTZXJ2aWNlcyAqL1xuaW1wb3J0IHsgY2FsY0NvbW1lbnRQb3MgfSBmcm9tICcuL3NlcnZpY2VzJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZUNsb3NlT25Fc2MgfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXdDb21tZW50TW9kYWwoeyBjb21tZW50LCBjb21tZW50SW5kZXgsIHRvZ2dsZUNvbW1lbnRBZGRPcGVuLCAuLi5yZXN0IH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgcG9zaXRpb24sIGF1dGhvciwgaWQgfSA9IGNvbW1lbnQ7XG5cdGNvbnN0IHsgeFBlcmNlbnQsIHlQZXJjZW50IH0gPSBwb3NpdGlvbjtcblxuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbY29tbWVudE9wZW4sIHNldENvbW1lbnRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlQ29tbWVudCA9ICgpID0+IHtcblx0XHRpZiAoIWNvbW1lbnRPcGVuKSB0b2dnbGVDb21tZW50QWRkT3BlbigpO1xuXHRcdHNldENvbW1lbnRPcGVuKCFjb21tZW50T3Blbik7XG5cdH07XG5cblx0LyogSG9va3MgKi9cblx0dXNlQ2xvc2VPbkVzYyhjb21tZW50T3Blbiwgc2V0Q29tbWVudE9wZW4pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxQcm9qZWN0UmV2aWV3TWFya2VyXG5cdFx0XHR7Li4ueyB4UGVyY2VudCwgeVBlcmNlbnQsIGF1dGhvciwgY29tbWVudEluZGV4OiBjb21tZW50SW5kZXggKyAxLCBjb21tZW50T3BlbiwgdG9nZ2xlQ29tbWVudCB9fT5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHtjb21tZW50T3BlbiAmJiA8Q29tbWVudEJveCBrZXk9e2lkfSB7Li4ueyBjb21tZW50LCB0b2dnbGVDb21tZW50LCAuLi5yZXN0IH19IC8+fVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC9Qcm9qZWN0UmV2aWV3TWFya2VyPlxuXHQpO1xufVxuXG5jb25zdCBDb21tZW50Qm94ID0gKHsgY29tbWVudCwgdG9nZ2xlQ29tbWVudCwgcmV2aWV3UmVmLCAuLi5yZXN0IH0pID0+IHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgcG9zaXRpb24sIGF1dGhvciB9ID0gY29tbWVudDtcblxuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbdHJhbnNmb3JtZWRQb3MsIHNldFRyYW5zZm9ybWVkUG9zXSA9IHVzZVN0YXRlKHBvc2l0aW9uKTtcblx0Y29uc3QgW3JlcGx5VG9Vc2VyLCBzZXRSZXBseVRvVXNlcl0gPSB1c2VTdGF0ZSgpO1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgYm94UmVmID0gdXNlUmVmKCk7XG5cblx0LyogRWZmZWN0cyAqL1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChwb3NpdGlvbikge1xuXHRcdFx0c2V0VHJhbnNmb3JtZWRQb3MoKCkgPT4ge1xuXHRcdFx0XHRwb3NpdGlvbi5yZXZpZXdQb3MgPSByZXZpZXdSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0cmV0dXJuIGNhbGNDb21tZW50UG9zKGJveFJlZiwgcG9zaXRpb24pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCBbcG9zaXRpb25dKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwicmV2aWV3X19jdXN0b20tbW9kYWwgY3VzdG9tLW1vZGFsXCJcblx0XHRcdHN0eWxlPXt7ICctLWxlZnQnOiB0cmFuc2Zvcm1lZFBvcy5sZWZ0LCAnLS10b3AnOiB0cmFuc2Zvcm1lZFBvcy50b3AgfX0+XG5cdFx0XHQ8bW90aW9uLmRpdiBrZXk9XCJjdXN0b20tbW9kYWwtY29udGVudFwiIGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fY29udGVudCBib3JkZXIgcC01XCIgey4uLkZBREVfSU5fVVAoNTApfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2hlYWRlciBkLWZsZXggYWxpZ24taXRlbXMtc3RhcnRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDBcIj5cblx0XHRcdFx0XHRcdDxVc2VyIHsuLi57IHVzZXI6IGF1dGhvciB9fSBzaXplPVwieGxcIiAvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0xMDAgbWwtM1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LS1sZyBtYi0wIGxoLS1tZFwiPnthdXRob3IuZGlzcGxheX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Nsb3NlIGJ0biBidG4tbGluayBtbC1hdXRvXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZUNvbW1lbnR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEyXCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS02MCBtYi0wIHRleHQtLXNtIGxoLS14c1wiPnthdXRob3Iub3JnYW5pc2F0aW9ufTwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2JvZHkgZC1mbGV4IG10LTRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMFwiPlxuXHRcdFx0XHRcdFx0PFByb2plY3RSZXZpZXdDb21tZW50IHsuLi57IGNvbW1lbnQsIHNldFJlcGx5VG9Vc2VyLCBzaG93SW5pdGlhbFJlcGxpZXM6IHRydWUsIC4uLnJlc3QgfX0gLz5cblx0XHRcdFx0XHRcdHtyZXBseVRvVXNlciAmJiAoXG5cdFx0XHRcdFx0XHRcdDxQcm9qZWN0UmV2aWV3Q29tbWVudFJlcGx5XG5cdFx0XHRcdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdFx0XHRcdHJlcGx5VG86IHJlcGx5VG9Vc2VyLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y29tbWVudElkOiBjb21tZW50LmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UmVwbHlUb1VzZXI6IHNldFJlcGx5VG9Vc2VyLFxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudCBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50JztcbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudFJlcGx5IGZyb20gJy4vUHJvamVjdFJldmlld0NvbW1lbnRSZXBseSc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNMSURFX0lOIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlQ2xvc2VPbkVzYyB9IGZyb20gJy4uLy4uL2hvb2tzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0NvbW1lbnRQYW5lbCh7IGNvbW1lbnRzLCBjb21tZW50c1BhbmVsT3BlbiwgdG9nZ2xlQ29tbWVudHNQYW5lbCwgcHJvamVjdFVzZXJzIH0pIHtcblx0LyogSG9va3MgKi9cblx0dXNlQ2xvc2VPbkVzYyhjb21tZW50c1BhbmVsT3BlbiwgdG9nZ2xlQ29tbWVudHNQYW5lbCk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXYgey4uLlNMSURFX0lOfSBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC0tY29tbWVudHNcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWxfX2JvZHlcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmUganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItNlwiPlxuXHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWNhcGl0YWxpemVcIj5BbGwgY29tbWVudHM8L2g1PlxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInBhbmVsX19jbG9zZSBidG4gYnRuLWxpbmsgbWwtYXV0b1wiIG9uQ2xpY2s9e3RvZ2dsZUNvbW1lbnRzUGFuZWx9PlxuXHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEyXCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMFwiPlxuXHRcdFx0XHRcdHtjb21tZW50cz8ucmV2ZXJzZSgpLm1hcCgoY29tbWVudCwgY29tbWVudEluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHQ8Q29tbWVudFdpdGhSZXBseSBrZXk9e2NvbW1lbnRJbmRleH0gey4uLnsgY29tbWVudCwgY29tbWVudEluZGV4LCBwcm9qZWN0VXNlcnMgfX0gLz5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHR7Y29tbWVudHMubGVuZ3RoID09PSAwICYmIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTcwXCI+Tm8gY29tbWVudHMgeWV0PC9wPn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59XG5cbmNvbnN0IENvbW1lbnRXaXRoUmVwbHkgPSAoeyBjb21tZW50LCBjb21tZW50SW5kZXgsIHByb2plY3RVc2VycyB9KSA9PiB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtyZXBseVRvVXNlciwgc2V0UmVwbHlUb1VzZXJdID0gdXNlU3RhdGUoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8UHJvamVjdFJldmlld0NvbW1lbnQgey4uLnsgY29tbWVudCwgY29tbWVudEluZGV4LCBzZXRSZXBseVRvVXNlciwgcmVuZGVyQXV0aG9yOiB0cnVlLCBwcm9qZWN0VXNlcnMgfX0gLz5cblx0XHRcdHtyZXBseVRvVXNlciAmJiAoXG5cdFx0XHRcdDxQcm9qZWN0UmV2aWV3Q29tbWVudFJlcGx5XG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdHJlcGx5VG86IHJlcGx5VG9Vc2VyLFxuXHRcdFx0XHRcdFx0Y29tbWVudElkOiBjb21tZW50LmlkLFxuXHRcdFx0XHRcdFx0c2V0UmVwbHlUb1VzZXI6IHNldFJlcGx5VG9Vc2VyLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQpfVxuXHRcdDwvPlxuXHQpO1xufTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlciwgQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdXNlcnMvVXNlcic7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCB7IFN0YXRpY0NvbnRleHQsIFJldmlld0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuLyogRG9tYWluICovXG5pbXBvcnQgUHJvamVjdFJldmlld0NvbW1lbnRNZW50aW9ucyBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50TWVudGlvbnMnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGFkZFJlcGx5LCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0NvbW1lbnRSZXBseSh7IHJlcGx5VG8sIGNvbW1lbnRJZCwgc2V0UmVwbHlUb1VzZXIgfSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbcmVwbHksIHNldFJlcGx5XSA9IHVzZVN0YXRlKCk7XG5cdGNvbnN0IFttZW50aW9ucywgc2V0TWVudGlvbnNdID0gdXNlU3RhdGUoW10pO1xuXG5cdC8qIEVmZmVjdHMgKi9cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRSZXBseShgQFske3JlcGx5VG8uZGlzcGxheX1deyR7cmVwbHlUby5pZH19IGApO1xuXHRcdHNldE1lbnRpb25zKFtyZXBseVRvLmlkXSk7XG5cdH0sIFtyZXBseVRvXSk7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBjdXJyZW50VXNlciB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXHRjb25zdCB7IHByb2plY3RJbWFnZUlkIH0gPSB1c2VDb250ZXh0KFJldmlld0NvbnRleHQpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBhZGRSZXBseU11dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkUmVwbHksIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfSU1BR0VfQllfSUQsIHBhcnNlSW50KHByb2plY3RJbWFnZUlkKV0pO1xuXHRcdFx0c2V0UmVwbHlUb1VzZXIobnVsbCk7XG5cdFx0fSxcblx0fSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGZvcm1cblx0XHRcdGNsYXNzTmFtZT1cInJlcGx5XCJcblx0XHRcdG9uU3VibWl0PXsoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0YWRkUmVwbHlNdXRhdGlvbi5tdXRhdGUoe1xuXHRcdFx0XHRcdGNvbW1lbnRJZDogY29tbWVudElkLFxuXHRcdFx0XHRcdHJlcGx5OiByZXBseSxcblx0XHRcdFx0XHRtZW50aW9uZWQ6IG1lbnRpb25zLFxuXHRcdFx0XHR9KTtcblx0XHRcdH19PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxVc2VyIHsuLi57IHVzZXI6IGN1cnJlbnRVc2VyIH19IC8+XG5cdFx0XHRcdDxVc2VySW5mb1xuXHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHR0aXRsZTogY3VycmVudFVzZXIuZGlzcGxheSxcblx0XHRcdFx0XHRcdHN1YnRpdGxlOiBgLyAke2N1cnJlbnRVc2VyLm9yZ2FuaXNhdGlvbn1gLFxuXHRcdFx0XHRcdFx0bGF5b3V0OiAnaG9yaXpvbnRhbCcsXG5cdFx0XHRcdFx0XHRzaXplOiAnc20nLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cblx0XHRcdFx0PFByb2plY3RSZXZpZXdDb21tZW50TWVudGlvbnMgey4uLnsgY29tbWVudDogcmVwbHksIHNldENvbW1lbnQ6IHNldFJlcGx5LCBtZW50aW9ucywgc2V0TWVudGlvbnMgfX0gLz5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGV4dGVuc2lvbkNsYXNzZXM9XCJmb3JtLWNvbnRyb2wtYnRuXCJcblx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRjb250ZW50VHlwZT1cImljb25cIlxuXHRcdFx0XHRcdHRoZW1lPVwiZGVmYXVsdFwiXG5cdFx0XHRcdFx0ey4uLnsgaXNMb2FkaW5nOiBhZGRSZXBseU11dGF0aW9uLmlzTG9hZGluZyB9fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9mb3JtPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENsaWNrQXdheUxpc3RlbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTQ0FMRV9GQURFIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3TWFya2VyKHtcblx0eFBlcmNlbnQsXG5cdHlQZXJjZW50LFxuXHRhdXRob3IsXG5cdGNvbW1lbnRJbmRleCxcblx0Y29tbWVudE9wZW4sXG5cdHRvZ2dsZUNvbW1lbnQsXG5cdGNoaWxkcmVuLFxufSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXHRjb25zdCB1c2VyID0gYXV0aG9yID8gYXV0aG9yIDogY3VycmVudFVzZXI7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PENsaWNrQXdheUxpc3RlbmVyXG5cdFx0XHRvbkNsaWNrQXdheT17KCkgPT4ge1xuXHRcdFx0XHRpZiAoY29tbWVudE9wZW4pIHRvZ2dsZUNvbW1lbnQoKTtcblx0XHRcdH19PlxuXHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0bGF5b3V0XG5cdFx0XHRcdHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMSB9fVxuXHRcdFx0XHRjbGFzc05hbWU9XCJyZXZpZXdfX2ludGVyYWN0aW9uXCJcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHQnLS14JzogeFBlcmNlbnQsXG5cdFx0XHRcdFx0Jy0teSc6IHlQZXJjZW50LFxuXHRcdFx0XHR9fT5cblx0XHRcdFx0PG1vdGlvbi5idXR0b25cblx0XHRcdFx0XHR7Li4uU0NBTEVfRkFERX1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJyZXZpZXdfX21hcmtlciBpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnkgYnRuIGJ0bi1saW5rIHRleHQtcmVzZXRcIlxuXHRcdFx0XHRcdHN0eWxlPXt7ICctLXRoZW1lJzogYCR7dXNlci51c2VyQ29sb3J9YCB9fVxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZUNvbW1lbnR9PlxuXHRcdFx0XHRcdHtjb21tZW50SW5kZXggJiYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0teHNcIj57Y29tbWVudEluZGV4fTwvc3Bhbj59XG5cdFx0XHRcdDwvbW90aW9uLmJ1dHRvbj5cblx0XHRcdFx0PGRpdj57Y2hpbGRyZW59PC9kaXY+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0PC9DbGlja0F3YXlMaXN0ZW5lcj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IHsgUmV2aWV3Q29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjaGV2cm9uSWNvbiBmcm9tICdpY29ucy9jaGV2cm9uLnN2Zyc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VFdmVudExpc3RlbmVyIH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3UGFnaW5hdGlvbih7IGFsbEltYWdlcyB9KSB7XG5cdC8qIEhvb2tzICovXG5cdHVzZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgaGFuZGxlS2V5VXApO1xuXHRjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG5cdC8qIENvbnRleHQgKi9cblx0Y29uc3QgeyBwcm9qZWN0SW1hZ2VJZCB9ID0gdXNlQ29udGV4dChSZXZpZXdDb250ZXh0KTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgY3VycmVudEltYWdlID0gYWxsSW1hZ2VzLmluZGV4T2YoTnVtYmVyKHByb2plY3RJbWFnZUlkKSk7XG5cdGNvbnN0IHByZXZJbWFnZSA9IGFsbEltYWdlc1tjdXJyZW50SW1hZ2UgPT09IDAgPyBhbGxJbWFnZXMubGVuZ3RoIC0gMSA6IGN1cnJlbnRJbWFnZSAtIDFdO1xuXHRjb25zdCBuZXh0SW1hZ2UgPSBhbGxJbWFnZXNbY3VycmVudEltYWdlID09PSBhbGxJbWFnZXMubGVuZ3RoIC0gMSA/IDAgOiBjdXJyZW50SW1hZ2UgKyAxXTtcblxuXHRmdW5jdGlvbiBoYW5kbGVLZXlVcChldmVudCkge1xuXHRcdGlmIChldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnICYmIHByZXZJbWFnZSkgbmF2aWdhdGUoJ3ByZXYnKTtcblx0XHRpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dSaWdodCcgJiYgbmV4dEltYWdlKSBuYXZpZ2F0ZSgnbmV4dCcpO1xuXHR9XG5cblx0Y29uc3QgbmF2aWdhdGUgPSAoZGlyZWN0aW9uKSA9PiB7XG5cdFx0aWYgKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKSBoaXN0b3J5LnB1c2gocHJldkltYWdlLnRvU3RyaW5nKCkpO1xuXHRcdGlmIChkaXJlY3Rpb24gPT09ICduZXh0JykgaGlzdG9yeS5wdXNoKG5leHRJbWFnZS50b1N0cmluZygpKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uX19idG4td3JhcHBlciBwYWdpbmF0aW9uX19idG4td3JhcHBlci0tcHJldlwiPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicGFnaW5hdGlvbl9fYnRuIHBhZ2luYXRpb25fX2J0bi0tcHJldiBidG4gYnRuLWxpbmsgdGV4dC1yZXNldFwiXG5cdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gbmF2aWdhdGUoJ3ByZXYnKX0+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uX19pY29uIGljb24gaWNvbi0tMTJcIiBzcmM9e2NoZXZyb25JY29ufSAvPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uX19idG4td3JhcHBlciBwYWdpbmF0aW9uX19idG4td3JhcHBlci0tbmV4dFwiPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicGFnaW5hdGlvbl9fYnRuIHBhZ2luYXRpb25fX2J0bi0tbmV4dCBidG4gYnRuLWxpbmsgdGV4dC1yZXNldFwiXG5cdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0b25DbGljaz17KCkgPT4gbmF2aWdhdGUoJ25leHQnKX0+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uX19pY29uIGljb24gaWNvbi0tMTJcIiBzcmM9e2NoZXZyb25JY29ufSAvPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0UmV2aWV3Q2FudmFzIH0gZnJvbSAnLi9Qcm9qZWN0UmV2aWV3Q2FudmFzJztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGNDb21tZW50UG9zKHJlZiwgcG9zKSB7XG5cdGNvbnN0IG1hcmtlclNwYWNlciA9IDEwO1xuXHRjb25zdCBtYXJrZXJTaXplID0gMjA7XG5cdGNvbnN0IG9mZnNldCA9IG1hcmtlclNpemUgKyBtYXJrZXJTcGFjZXI7XG5cblx0LyogR2V0IHBvc2l0aW9uIG9mIG1hcmtlciAqL1xuXHRjb25zdCByZXZpZXdQb3MgPSBwb3MucmV2aWV3UG9zO1xuXHRjb25zdCB4UGVyY2VudCA9IE51bWJlcihwb3MueFBlcmNlbnQpO1xuXHRjb25zdCB5UGVyY2VudCA9IE51bWJlcihwb3MueVBlcmNlbnQpO1xuXG5cdC8qIEdldCBkaW1lbnNpb25zIG9mIGN1cnJlbnQgYm94ICovXG5cdGNvbnN0IHsgd2lkdGg6IGJveFdpZHRoID0gNDAwLCBoZWlnaHQ6IGJveEhlaWdodCA9IDIyOCB9ID0gcmVmPy5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSB8fCB7fTtcblxuXHQvKiBHZXQgZGltZW5zaW9ucyBvZiBjdXJyZW50IHNjcmVlbiAqL1xuXHRjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRjb25zdCBib3hQZXJjZW50V2lkdGggPSAoYm94V2lkdGggLyBzY3JlZW5XaWR0aCkgKiAxMDA7XG5cblx0Y29uc3Qgc2NyZWVuSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gcmV2aWV3UG9zLnRvcDtcblx0Y29uc3QgYm94UGVyY2VudEhlaWdodCA9IChib3hIZWlnaHQgLyBzY3JlZW5IZWlnaHQpICogMTAwO1xuXG5cdC8qIFNldCB4IGFuZCB5IHZhbHVlcyB0byBwZXJjZW50YWdlIGVxdWl2ZWxlbnQgdG8gbWFrZSB0aGUgYm94IHJlc3BvbnNpdmUgKi9cblx0bGV0IGxlZnQgPSBvZmZzZXQ7XG5cdGxldCB0b3AgPSBvZmZzZXQ7XG5cblx0LyogQ29tcGVuc2F0ZSBmb3IgdGhlIGJveFdpZHRoIGlmIG1hcmtlciBpcyBhdCBlbmQgb2YgaG9yaXpvbnRhbCBzY3JlZW4gKi9cblx0aWYgKHhQZXJjZW50ICsgYm94UGVyY2VudFdpZHRoID4gMTAwKSB7XG5cdFx0bGVmdCA9IC1ib3hXaWR0aCAtIG1hcmtlclNwYWNlcjtcblx0fVxuXG5cdC8qIENvbXBlbnNhdGUgZm9yIHRoZSBib3hIZWlnaHQgaWYgbWFya2VyIGlzIGF0IGVuZCBvZiB2ZXJ0aWNhbCBzY3JlZW4gKi9cblx0aWYgKHlQZXJjZW50ICsgYm94UGVyY2VudEhlaWdodCA+IDEwMCkge1xuXHRcdHRvcCA9IC1ib3hIZWlnaHQgLSBtYXJrZXJTcGFjZXI7XG5cdH1cblxuXHRyZXR1cm4geyBsZWZ0OiBgJHtsZWZ0fXB4YCwgdG9wOiBgJHt0b3B9cHhgIH07XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhbGNDb21tZW50UG9zIH0gZnJvbSAnLi9jYWxjQ29tbWVudFBvcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0eWxlTWVudGlvbiB9IGZyb20gJy4vc3R5bGVNZW50aW9uJztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0eWxlTWVudGlvbnModXNlcnMsIGlucHV0KSB7XG5cdGNvbnN0IG1lbnRpb25Ob2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW50aW9ucyAubWVudGlvbnNfX21lbnRpb24nKSB8fCBbXTtcblxuXHRpZiAobWVudGlvbk5vZGVzLmxlbmd0aCA+IDApIHtcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWVudGlvbk5vZGVzLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0Y29uc3QgbWVudGlvbiA9IG1lbnRpb25Ob2Rlc1tpbmRleF07XG5cblx0XHRcdGNvbnN0IG1lbnRpb25Jbm5lciA9IG1lbnRpb24uaW5uZXJIVE1MLnJlcGxhY2UoJ0AnLCAnJykudHJpbSgpO1xuXHRcdFx0Y29uc3QgdXNlck9mTWVudGlvbiA9IHVzZXJzLmZpbmQoKHVzZXIpID0+IHVzZXIuZGlzcGxheSA9PT0gbWVudGlvbklubmVyKTtcblxuXHRcdFx0bWVudGlvbi5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10aGVtZScsIHVzZXJPZk1lbnRpb24udXNlckNvbG9yKTtcblxuXHRcdFx0aWYgKGlucHV0KSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGlucHV0LmZvY3VzKCk7XG5cdFx0XHRcdFx0aW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoMjAwLCAtMSk7XG5cdFx0XHRcdH0sIDEpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VTZWxlY3Rpb24gfSBmcm9tICcuL3VzZVNlbGVjdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVBhZ2VUaXRsZSB9IGZyb20gJy4vdXNlUGFnZVRpdGxlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlU3RvcmFnZSB9IGZyb20gJy4vdXNlU3RvcmFnZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL3VzZUV2ZW50TGlzdGVuZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VDbG9zZU9uRXNjIH0gZnJvbSAnLi91c2VDbG9zZU9uRXNjJztcbiIsIi8qIFBhY2thZ3MgKi9cbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG4vKiBDdXN0b20gaG9vayAqL1xuaW1wb3J0IHVzZUV2ZW50TGlzdGVuZXIgZnJvbSAnLi91c2VFdmVudExpc3RlbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ2xvc2VPbkVzYyhzdGF0dXMsIHRvZ2dsZSkge1xuXHQvKiBDYWxsYmFjayAqL1xuXHRjb25zdCBoYW5kbGVLZXlVcCA9IHVzZUNhbGxiYWNrKCh7IGtleSB9KSA9PiB7XG5cdFx0aWYgKFsnRXNjYXBlJ10uaW5jbHVkZXMoa2V5KSAmJiBzdGF0dXMpIHRvZ2dsZSgpO1xuXHR9KTtcblxuXHQvKiBIb29rICovXG5cdHVzZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgaGFuZGxlS2V5VXApO1xufVxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBlbGVtZW50ID0gd2luZG93KSB7XG5cdC8vIENyZWF0ZSBhIHJlZiB0aGF0IHN0b3JlcyBoYW5kbGVyXG5cdGNvbnN0IHNhdmVkSGFuZGxlciA9IHVzZVJlZigpO1xuXHQvLyBVcGRhdGUgcmVmLmN1cnJlbnQgdmFsdWUgaWYgaGFuZGxlciBjaGFuZ2VzLlxuXHQvLyBUaGlzIGFsbG93cyBvdXIgZWZmZWN0IGJlbG93IHRvIGFsd2F5cyBnZXQgbGF0ZXN0IGhhbmRsZXIgLi4uXG5cdC8vIC4uLiB3aXRob3V0IHVzIG5lZWRpbmcgdG8gcGFzcyBpdCBpbiBlZmZlY3QgZGVwcyBhcnJheSAuLi5cblx0Ly8gLi4uIGFuZCBwb3RlbnRpYWxseSBjYXVzZSBlZmZlY3QgdG8gcmUtcnVuIGV2ZXJ5IHJlbmRlci5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzYXZlZEhhbmRsZXIuY3VycmVudCA9IGhhbmRsZXI7XG5cdH0sIFtoYW5kbGVyXSk7XG5cblx0dXNlRWZmZWN0KFxuXHRcdCgpID0+IHtcblx0XHRcdC8vIE1ha2Ugc3VyZSBlbGVtZW50IHN1cHBvcnRzIGFkZEV2ZW50TGlzdGVuZXJcblx0XHRcdC8vIE9uXG5cdFx0XHRjb25zdCBpc1N1cHBvcnRlZCA9IGVsZW1lbnQgJiYgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyO1xuXHRcdFx0aWYgKCFpc1N1cHBvcnRlZCkgcmV0dXJuO1xuXHRcdFx0Ly8gQ3JlYXRlIGV2ZW50IGxpc3RlbmVyIHRoYXQgY2FsbHMgaGFuZGxlciBmdW5jdGlvbiBzdG9yZWQgaW4gcmVmXG5cdFx0XHRjb25zdCBldmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiBzYXZlZEhhbmRsZXIuY3VycmVudChldmVudCk7XG5cdFx0XHQvLyBBZGQgZXZlbnQgbGlzdGVuZXJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpO1xuXHRcdFx0Ly8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyIG9uIGNsZWFudXBcblx0XHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpO1xuXHRcdFx0fTtcblx0XHR9LFxuXHRcdFtldmVudE5hbWUsIGVsZW1lbnRdIC8vIFJlLXJ1biBpZiBldmVudE5hbWUgb3IgZWxlbWVudCBjaGFuZ2VzXG5cdCk7XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVBhZ2VUaXRsZSh0aXRsZSwgdXBkYXRlUHJvcHMgPSBbXSkge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGRvY3VtZW50LnRpdGxlID0gYCR7dGl0bGUgPyB0aXRsZSArICcgfCBQYXJhbGxlbCBEYXNoYm9hcmQnIDogZG9jdW1lbnQudGl0bGV9YDtcblx0fSwgWy4uLnVwZGF0ZVByb3BzXSk7XG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU2VsZWN0aW9uKCkge1xuXHRjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKFtdKTtcblxuXHRjb25zdCB1cGRhdGVTZWxlY3RlZCA9IChpZCkgPT4ge1xuXHRcdHNldFNlbGVjdGVkKChzZWxlY3RlZCkgPT4ge1xuXHRcdFx0aWYgKHNlbGVjdGVkLmluY2x1ZGVzKGlkKSkge1xuXHRcdFx0XHRyZXR1cm4gc2VsZWN0ZWQuZmlsdGVyKChzZWxlY3RlZElkKSA9PiBzZWxlY3RlZElkICE9PSBpZCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBbLi4uc2VsZWN0ZWQsIGlkXTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCByZXNldFNlbGVjdGVkID0gKCkgPT4gc2V0U2VsZWN0ZWQoW10pO1xuXG5cdHJldHVybiB7IHNlbGVjdGVkLCB1cGRhdGVTZWxlY3RlZCwgcmVzZXRTZWxlY3RlZCB9O1xufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbi8vIEhvb2tcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVN0b3JhZ2Uoa2V5LCBpbml0aWFsVmFsdWUsIHN0b3JhZ2VUeXBlID0gJ3Nlc3Npb25TdG9yYWdlJykge1xuXHQvLyBTdGF0ZSB0byBzdG9yZSBvdXIgdmFsdWVcblx0Ly8gUGFzcyBpbml0aWFsIHN0YXRlIGZ1bmN0aW9uIHRvIHVzZVN0YXRlIHNvIGxvZ2ljIGlzIG9ubHkgZXhlY3V0ZWQgb25jZVxuXHRjb25zdCBbc3RvcmVkVmFsdWUsIHNldFN0b3JlZFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Ly8gR2V0IGZyb20gbG9jYWwgc3RvcmFnZSBieSBrZXlcblx0XHRcdGNvbnN0IGl0ZW0gPSB3aW5kb3dbc3RvcmFnZVR5cGVdLmdldEl0ZW0oa2V5KTtcblxuXHRcdFx0Ly8gSWYgbm8gaXRlbSB2YWx1ZSBhbmQgaW5pdGlhbFZhbHVlIGlzIHByZXNlbnQsIHNldCBhcyB2YWx1ZVxuXHRcdFx0aWYgKGluaXRpYWxWYWx1ZSAmJiAhaXRlbSkge1xuXHRcdFx0XHR3aW5kb3dbc3RvcmFnZVR5cGVdLnNldEl0ZW0oa2V5LCBpbml0aWFsVmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBQYXJzZSBzdG9yZWQganNvbiBvciBpZiBub25lIHJldHVybiBpbml0aWFsVmFsdWVcblx0XHRcdHJldHVybiBpdGVtID8gSlNPTi5wYXJzZShpdGVtKSA6IGluaXRpYWxWYWx1ZTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Ly8gSWYgZXJyb3IgYWxzbyByZXR1cm4gaW5pdGlhbFZhbHVlXG5cdFx0XHRyZXR1cm4gaW5pdGlhbFZhbHVlO1xuXHRcdH1cblx0fSk7XG5cdC8vIFJldHVybiBhIHdyYXBwZWQgdmVyc2lvbiBvZiB1c2VTdGF0ZSdzIHNldHRlciBmdW5jdGlvbiB0aGF0IC4uLlxuXHQvLyAuLi4gcGVyc2lzdHMgdGhlIG5ldyB2YWx1ZSB0byBzdG9yYWdlLlxuXHRjb25zdCBzZXRWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBBbGxvdyB2YWx1ZSB0byBiZSBhIGZ1bmN0aW9uIHNvIHdlIGhhdmUgc2FtZSBBUEkgYXMgdXNlU3RhdGVcblx0XHRcdGNvbnN0IHZhbHVlVG9TdG9yZSA9IHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24gPyB2YWx1ZShzdG9yZWRWYWx1ZSkgOiB2YWx1ZTtcblx0XHRcdC8vIFNhdmUgc3RhdGVcblx0XHRcdHNldFN0b3JlZFZhbHVlKHZhbHVlVG9TdG9yZSk7XG5cdFx0XHQvLyBTYXZlIHRvIGxvY2FsIHN0b3JhZ2Vcblx0XHRcdHdpbmRvd1tzdG9yYWdlVHlwZV0uc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlVG9TdG9yZSkpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuXHRcdH1cblx0fTtcblx0cmV0dXJuIFtzdG9yZWRWYWx1ZSwgc2V0VmFsdWVdO1xufVxuIiwiLy8gQ1NTXG5pbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcblxuLy8gUG9sbHlmaWxzXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5cbi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcblxuLyogQ2xpZW50ICovXG5jb25zdCBjbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoe1xuXHRkZWZhdWx0T3B0aW9uczoge1xuXHRcdHF1ZXJpZXM6IHtcblx0XHRcdHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcblx0XHR9LFxuXHR9LFxufSk7XG5cbi8qIFJlbmRlciAqL1xuY29uc3QgYXBwTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcbmlmIChhcHBOb2RlICE9PSBudWxsKSB7XG5cdHJlbmRlcihcblx0XHQ8UXVlcnlDbGllbnRQcm92aWRlciB7Li4ueyBjbGllbnQgfX0+XG5cdFx0XHQ8QXBwIC8+XG5cdFx0PC9RdWVyeUNsaWVudFByb3ZpZGVyPixcblx0XHRhcHBOb2RlXG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgSGVhZGVyLCBCYWNrZ3JvdW5kLCBMb2dpbkZvcm0gfSBmcm9tICcuLi9jb21wb25lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cblx0XHRcdFx0PEJhY2tncm91bmQgLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lX19wYW5lbCBwYW5lbCBwYW5lbC0tbG9naW5cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWxfX2JvZHlcIj5cblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGUgbWItMFwiPkxvZ2luPC9oMT5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNzAgdGV4dC13aGl0ZSBtYi02XCI+TG9naW4gd2l0aCB5b3VyIGUtbWFpbCBhbmQgcGFzc3dvcmQ8L3A+XG5cdFx0XHRcdFx0XHRcdDxMb2dpbkZvcm0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQYWdlTG9hZGVyLCBQYWdlV3JhcHBlciB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCB7IFByb2plY3REZXRhaWxIZWFkZXIsIFByb2plY3REZXRhaWxJbWFnZXMgfSBmcm9tICcuLi9kb21haW4vcHJvamVjdC1kZXRhaWwnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGZldGNoUHJvamVjdEJ5SWQsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi9hcGknO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlUGFnZVRpdGxlIH0gZnJvbSAnLi4vaG9va3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0RGV0YWlsKCkge1xuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJZCB9ID0gdXNlUGFyYW1zKCk7XG5cdGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhID0ge30gfSA9IHVzZVF1ZXJ5KFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHBhcnNlSW50KHByb2plY3RJZCldLCAoKSA9PlxuXHRcdGZldGNoUHJvamVjdEJ5SWQoeyBwcm9qZWN0SWQgfSlcblx0KTtcblxuXHQvKiBIb29rcyAqL1xuXHR1c2VQYWdlVGl0bGUoZGF0YT8udGl0bGUsIFtkYXRhXSk7XG5cblx0LyogQ29uc3RhbnRzICAqL1xuXHRjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgdXNlcnMsIGlkLCBhdXRob3IsIGVtYWlsLCBwcm9qZWN0SW1hZ2VzIH0gPSBkYXRhO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxQYWdlV3JhcHBlcj5cblx0XHRcdDxQYWdlTG9hZGVyIHsuLi57IGlzTG9hZGluZyB9fT5cblx0XHRcdFx0PFByb2plY3REZXRhaWxIZWFkZXIgey4uLnsgdGl0bGUsIGRlc2NyaXB0aW9uLCB1c2VycywgaWQsIGF1dGhvciwgZW1haWwgfX0gLz5cblx0XHRcdFx0PFByb2plY3REZXRhaWxJbWFnZXMgey4uLnsgcHJvamVjdEltYWdlcywgcHJvamVjdElkOiBpZCB9fSAvPlxuXHRcdFx0PC9QYWdlTG9hZGVyPlxuXHRcdDwvUGFnZVdyYXBwZXI+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFBhZ2VMb2FkZXIsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IHsgUHJvamVjdFJlc3VsdHMsIFByb2plY3RBZGQgfSBmcm9tICcuLi9kb21haW4vcHJvamVjdC1vdmVydmlldyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGZldGNoUHJvamVjdHNCeVVzZXIsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi9hcGknO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlUGFnZVRpdGxlIH0gZnJvbSAnLi4vaG9va3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0T3ZlcnZpZXcoKSB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtuZXdQcm9qZWN0SWQsIHNldE5ld1Byb2plY3RJZF0gPSB1c2VTdGF0ZSgpO1xuXG5cdC8qIEhvb2tzICovXG5cdHVzZVBhZ2VUaXRsZSgnUHJvamVjdHMnKTtcblx0Y29uc3QgeyBjdXJyZW50VXNlciwgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGlzTG9hZGluZywgZGF0YTogcHJvamVjdHMgPSBbXSB9ID0gdXNlUXVlcnkoXG5cdFx0UVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIsXG5cdFx0KCkgPT4gZmV0Y2hQcm9qZWN0c0J5VXNlcih7IHVzZXJJZDogY3VycmVudFVzZXI/LmlkIH0pLFxuXHRcdHtcblx0XHRcdGVuYWJsZWQ6ICEhY3VycmVudFVzZXI/LmlkLFxuXHRcdH1cblx0KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8UGFnZVdyYXBwZXI+XG5cdFx0XHQ8UGFnZUxvYWRlciB7Li4ueyBpc0xvYWRpbmcgfX0+XG5cdFx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiA8UHJvamVjdEFkZCB7Li4ueyBzZXROZXdQcm9qZWN0SWQgfX0gLz59XG5cdFx0XHRcdDxQcm9qZWN0UmVzdWx0cyB7Li4ueyBwcm9qZWN0cywgbmV3UHJvamVjdElkIH19IC8+XG5cdFx0XHQ8L1BhZ2VMb2FkZXI+XG5cdFx0PC9QYWdlV3JhcHBlcj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQYWdlTG9hZGVyLCBQYWdlV3JhcHBlciB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCB7IFByb2plY3RSZXZpZXdDYW52YXMgfSBmcm9tICcuLi9kb21haW4vcHJvamVjdC1yZXZpZXcnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGZldGNoUHJvamVjdEltYWdlQnlJZCwgUVVFUllfS0VZUyB9IGZyb20gJy4uL2FwaSc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VQYWdlVGl0bGUgfSBmcm9tICcuLi9ob29rcyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCB7IFJldmlld0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlldygpIHtcblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGlkOiBwcm9qZWN0SW1hZ2VJZCB9ID0gdXNlUGFyYW1zKCk7XG5cdGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhID0ge30gfSA9IHVzZVF1ZXJ5KFtRVUVSWV9LRVlTLlBST0pFQ1RfSU1BR0VfQllfSUQsIHBhcnNlSW50KHByb2plY3RJbWFnZUlkKV0sICgpID0+XG5cdFx0ZmV0Y2hQcm9qZWN0SW1hZ2VCeUlkKHsgcHJvamVjdEltYWdlSWQgfSlcblx0KTtcblxuXHQvKiBIb29rcyAqL1xuXHR1c2VQYWdlVGl0bGUoZGF0YT8udGl0bGUsIFtkYXRhXSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PFJldmlld0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgcHJvamVjdElkOiBkYXRhPy5wYXJlbnRJZCwgcHJvamVjdEltYWdlSWQgfX0+XG5cdFx0XHQ8UGFnZVdyYXBwZXI+XG5cdFx0XHRcdDxQYWdlTG9hZGVyIHsuLi57IGlzTG9hZGluZyB9fT5cblx0XHRcdFx0XHQ8UHJvamVjdFJldmlld0NhbnZhcyB7Li4uZGF0YX0gLz5cblx0XHRcdFx0PC9QYWdlTG9hZGVyPlxuXHRcdFx0PC9QYWdlV3JhcHBlcj5cblx0XHQ8L1Jldmlld0NvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgSGVhZGVyLCBCYWNrZ3JvdW5kLCBTaWdudXBGb3JtIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ251cCgpIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxuXHRcdFx0XHQ8QmFja2dyb3VuZCAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVfX3BhbmVsIHBhbmVsIHBhbmVsLS1sb2dpblwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lbF9fYm9keVwiPlxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2UgdGV4dC13aGl0ZSBtYi0wXCI+U2lnbiB1cDwvaDE+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTcwIHRleHQtd2hpdGUgbWItNlwiPlNpZ24gdXAgd2l0aCB5b3VyIGUtbWFpbCBhbmQgcGFzc3dvcmQ8L3A+XG5cdFx0XHRcdFx0XHRcdDxTaWdudXBGb3JtIC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIExvZ2luIH0gZnJvbSAnLi9Mb2dpbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpZ251cCB9IGZyb20gJy4vU2lnbnVwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdE92ZXJ2aWV3IH0gZnJvbSAnLi9Qcm9qZWN0T3ZlcnZpZXcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0RGV0YWlsIH0gZnJvbSAnLi9Qcm9qZWN0RGV0YWlsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdFJldmlldyB9IGZyb20gJy4vUHJvamVjdFJldmlldyc7XG4iLCIvKiBQYWdlcyAqL1xuaW1wb3J0IHsgUHJvamVjdE92ZXJ2aWV3LCBQcm9qZWN0RGV0YWlsLCBQcm9qZWN0UmV2aWV3LCBMb2dpbiwgU2lnbnVwIH0gZnJvbSAnLi9wYWdlcyc7XG5cbmV4cG9ydCBjb25zdCBST1VURVMgPSB7XG5cdGxvZ2luOiAnLycsXG5cdHNpZ251cDogJy9zaWdudXAnLFxuXHRwcm9qZWN0czogJy9wcm9qZWN0cycsXG59O1xuXG5jb25zdCByb3V0ZXMgPSBbXG5cdHtcblx0XHRuYW1lOiAnbG9naW4nLFxuXHRcdHBhdGg6ICcvJyxcblx0XHRjb21wb25lbnQ6IExvZ2luLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3NpZ251cCcsXG5cdFx0cGF0aDogJy9zaWdudXAnLFxuXHRcdGNvbXBvbmVudDogU2lnbnVwLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3Byb2plY3Qtb3ZlcnZpZXcnLFxuXHRcdHBhdGg6ICcvcHJvamVjdHMnLFxuXHRcdGNvbXBvbmVudDogUHJvamVjdE92ZXJ2aWV3LFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3Byb2plY3QtZGV0YWlsJyxcblx0XHRwYXRoOiAnL3Byb2plY3RzLzppZCcsXG5cdFx0Y29tcG9uZW50OiBQcm9qZWN0RGV0YWlsLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3Byb2plY3QtcmV2aWV3Jyxcblx0XHRwYXRoOiAnL3Byb2plY3RzLzppZC9yZXZpZXcvOmlkJyxcblx0XHRjb21wb25lbnQ6IFByb2plY3RSZXZpZXcsXG5cdH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XG5cdHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG4iLCJjb25zdCBVU0VSX1JPTEVTID0ge1xuXHRST0xFX0FETUlOOiAnUk9MRV9BRE1JTicsXG5cdFJPTEVfVVNFUjogJ1JPTEVfVVNFUicsXG5cdFJPTEVfVVNFUl9CQVNJQzogJ1JPTEVfVVNFUl9CQVNJQycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSb2xlKHsgcm9sZXMgfSkge1xuXHRpZiAocm9sZXMuaW5jbHVkZXMoVVNFUl9ST0xFUy5ST0xFX0FETUlOKSkgcmV0dXJuICdhZG1pbic7XG5cdGlmIChyb2xlcy5pbmNsdWRlcyhVU0VSX1JPTEVTLlJPTEVfVVNFUl9CQVNJQykpIHJldHVybiAnYmFzaWMnO1xuXHRpZiAocm9sZXMuaW5jbHVkZXMoVVNFUl9ST0xFUy5ST0xFX1VTRVIpKSByZXR1cm4gJ3VzZXInO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0VtYWlsIH0gZnJvbSAnLi9pc0VtYWlsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0Um9sZSB9IGZyb20gJy4vZ2V0Um9sZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlc2l6ZUltYWdlcyB9IGZyb20gJy4vcmVzaXplSW1hZ2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgfSBmcm9tICcuL2NhcGl0YWxpemVGaXJzdExldHRlcic7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0VtYWlsKGVtYWlsKSB7XG4gICAgcmV0dXJuIC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvLnRlc3QoZW1haWwpO1xufVxuIiwiaW1wb3J0IFJlc2l6ZXIgZnJvbSAncmVhY3QtaW1hZ2UtZmlsZS1yZXNpemVyJztcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG5cdG1heFdpZHRoOiAzMDAsXG5cdG1heEhlaWdodDogMzAwLFxuXHRxdWFsaXR5OiAxMDAsXG5cdHJvdGF0aW9uOiAwLFxuXHRvdXRwdXRUeXBlOiAnZmlsZScsXG59O1xuXG5hc3luYyBmdW5jdGlvbiByZXNpemVJbWFnZVR5cGUoaW1hZ2UsIG9wdGlvbnMpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0UmVzaXplci5pbWFnZUZpbGVSZXNpemVyKFxuXHRcdFx0aW1hZ2UsXG5cdFx0XHRvcHRpb25zLm1heFdpZHRoLFxuXHRcdFx0b3B0aW9ucy5tYXhIZWlnaHQsXG5cdFx0XHRpbWFnZS5wYXRoLnNwbGl0KCcuJykucG9wKCksXG5cdFx0XHRvcHRpb25zLnF1YWxpdHksXG5cdFx0XHRvcHRpb25zLnJvdGF0aW9uLFxuXHRcdFx0KHVyaSkgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKHVyaSk7XG5cdFx0XHR9LFxuXHRcdFx0b3B0aW9ucy5vdXRwdXRUeXBlXG5cdFx0KTtcblx0fSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlc2l6ZUltYWdlKGltYWdlKSB7XG5cdGNvbnN0IHRodW1ibmFpbCA9IGF3YWl0IHJlc2l6ZUltYWdlVHlwZShpbWFnZSwgeyAuLi5kZWZhdWx0T3B0aW9ucywgbWF4V2lkdGg6IDI2OCwgbWF4SGVpZ2h0OiAyMzYgfSk7XG5cdGNvbnN0IHRodW1ibmFpbFJldGluYSA9IGF3YWl0IHJlc2l6ZUltYWdlVHlwZShpbWFnZSwgeyAuLi5kZWZhdWx0T3B0aW9ucywgbWF4V2lkdGg6IDUzNiwgbWF4SGVpZ2h0OiA0NzIgfSk7XG5cblx0cmV0dXJuIHtcblx0XHRvcmlnaW5hbDogaW1hZ2UsXG5cdFx0dGh1bWJuYWlsOiB0aHVtYm5haWwsXG5cdFx0dGh1bWJuYWlsUmV0aW5hOiB0aHVtYm5haWxSZXRpbmEsXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlc2l6ZUltYWdlcyhpbWFnZXMpIHtcblx0cmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKFxuXHRcdGltYWdlcy5tYXAoYXN5bmMgKGltYWdlKSA9PiB7XG5cdFx0XHRyZXR1cm4gYXdhaXQgcmVzaXplSW1hZ2UoaW1hZ2UpO1xuXHRcdH0pXG5cdCk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9