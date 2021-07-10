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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["PageLoader"], {
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
    }, _animations__WEBPACK_IMPORTED_MODULE_7__["FADE_IN"], {
      transition: {
        duration: 0.1,
        ease: [0.65, 0, 0.35, 1]
      }
    }), ![_routes__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].login, _routes__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].signup, 'review'].includes(location.pathname) && !location.pathname.includes('review') && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["HeaderNavigation"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _objectSpread(_objectSpread({}, props), {}, {
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* Fetch projectImage by id | expects project image id and optional phaseId */

var fetchProjectImageById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var projectImageId, phaseId, params, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            projectImageId = _ref.projectImageId, phaseId = _ref.phaseId;
            params = phaseId ? {
              params: {
                phase: phaseId
              }
            } : {};
            _context.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/images/get/".concat(projectImageId), _objectSpread({}, params));

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
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn__text"
  }, title));
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _context_mainContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../context/mainContext */ "./assets/app/js/context/mainContext.js");
/* harmony import */ var _api_security__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/security */ "./assets/app/js/api/security.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../routes */ "./assets/app/js/routes.js");
/* Packages */





/* Components */


/* Context */


/* Api */


/* Routes */


function HeaderNavigation() {
  /* Hooks */
  var history = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_6__["default"]),
      setCurrentUser = _useContext.setCurrentUser;
  /* Mutations */


  var logoutMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_api_security__WEBPACK_IMPORTED_MODULE_7__["logout"], {
    onSuccess: function onSuccess() {
      history.push(_routes__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].login);
      setCurrentUser(null);
      sessionStorage.removeItem('userId');
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
        message: 'Successfully logged out!',
        appearance: "success"
      }));
    },
    onError: function onError() {
      return Object(react_toastify__WEBPACK_IMPORTED_MODULE_3__["toast"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Alert"], {
        message: 'Something went wrong!',
        appearance: "danger"
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
    to: _routes__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].projects,
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
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");
/* harmony import */ var _ModalHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ModalHeader */ "./assets/app/js/components/modal/ModalHeader.jsx");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks */ "./assets/app/js/hooks/index.js");
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
      HeaderComponent = _components$HeaderCom === void 0 ? _ModalHeader__WEBPACK_IMPORTED_MODULE_4__["default"] : _components$HeaderCom;
  var animation = customAnimation !== null && customAnimation !== void 0 ? customAnimation : Object(_animations__WEBPACK_IMPORTED_MODULE_5__["FADE_IN_UP"])();
  /* Hooks */

  Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useCloseOnEsc"])(modalOpen, toggleModal);

  var render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], null, modalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_3__["ClickAwayListener"], {
      onClickAway: toggleModal
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "custom-modal ".concat(center && 'custom-modal--center', " ").concat(extensionClasses)
    }, renderOnBody && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
      className: "custom-modal-overlay"
    }, _animations__WEBPACK_IMPORTED_MODULE_5__["FADE_IN"], {
      onClick: toggleModal
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
      key: "custom-modal-content",
      className: "custom-modal__content border p-5"
    }, animation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderComponent, {
      title: title,
      subtitle: subtitle,
      toggleModal: toggleModal
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "custom-modal__body d-flex mt-2"
    }, children)))));
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
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var icons_add_user_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/add_user.svg */ "./assets/app/img/icons/add_user.svg");
/* harmony import */ var icons_add_user_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_add_user_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api */ "./assets/app/js/api/index.js");
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


function UserAdd(_ref) {
  var users = _ref.users,
      project = _ref.project;

  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalOpen = _useState2[0],
      setModalOpen = _useState2[1];
  /* Hooks */


  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQueryClient"])();
  /* Callbacks */

  var toggleModal = function toggleModal() {
    return setModalOpen(!modalOpen);
  };

  var invalidateQueries = function invalidateQueries() {
    queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_5__["QUERY_KEYS"].PROJECT_BY_ID, project.id]);
    queryClient.invalidateQueries(_api__WEBPACK_IMPORTED_MODULE_5__["QUERY_KEYS"].GLOBAL_USERS);
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
    src: icons_add_user_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Modal"], {
    title: "Select users",
    subtitle: "Choose some users to collaborate with.",
    modalOpen: modalOpen,
    toggleModal: toggleModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["UserAddSearch"], {
    users: users,
    project: project,
    toggleModal: toggleModal,
    invalidateQueries: invalidateQueries
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
      toggleModal = _ref.toggleModal,
      invalidateQueries = _ref.invalidateQueries;

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
  /* Mutations */

  var addUserMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_5__["addUser"], {
    onSuccess: function onSuccess() {
      invalidateQueries();
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
    invalidateQueries: invalidateQueries,
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
      size = _ref$size === void 0 ? 'md' : _ref$size,
      invalidateQueries = _ref.invalidateQueries;

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
      return invalidateQueries();
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
      _ref$useLayout = _ref.useLayout,
      useLayout = _ref$useLayout === void 0 ? true : _ref$useLayout,
      rest = _objectWithoutProperties(_ref, ["users", "layout", "useLayout"]);

  var sliceAmount = layout === 'minimal' ? 7 : Infinity;
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "row align-items-center gutters-1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_0__["AnimatePresence"], null, users.slice(0, sliceAmount).map(function (user) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_0__["motion"].div, _extends({
      layout: useLayout
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
    layout: 'minimal',
    useLayout: false
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
/* harmony import */ var _project_review_action_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-review-action-bar */ "./assets/app/js/domain/project-review/project-review-action-bar/index.js");
/* harmony import */ var _ProjectReviewMarker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectReviewMarker */ "./assets/app/js/domain/project-review/ProjectReviewMarker.jsx");
/* harmony import */ var _ProjectReviewCommentModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectReviewCommentModal */ "./assets/app/js/domain/project-review/ProjectReviewCommentModal.jsx");
/* harmony import */ var _ProjectReviewCommentAdd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ProjectReviewCommentAdd */ "./assets/app/js/domain/project-review/ProjectReviewCommentAdd.jsx");
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
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])([_api__WEBPACK_IMPORTED_MODULE_10__["QUERY_KEYS"].PROJECT_USERS, parentId], function () {
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

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      _useState8 = _slicedToArray(_useState7, 2),
      paginationActive = _useState8[0],
      setPaginationActive = _useState8[1];
  /* Callbacks */


  var toggleCommentAddOpen = function toggleCommentAddOpen() {
    return setMarkerPos(null);
  };

  var toggleCommentsPanel = function toggleCommentsPanel() {
    setCommentsPanelOpen(!commentsPanelOpen);
    togglePaginationActive();
  };

  var togglePaginationActive = function togglePaginationActive() {
    return setPaginationActive(!paginationActive);
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewCommentModal__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: comment.id,
      comment: comment,
      commentIndex: commentIndex,
      reviewRef: reviewRef,
      projectUsers: projectUsers,
      toggleCommentAddOpen: toggleCommentAddOpen
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, markerPos && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewMarker__WEBPACK_IMPORTED_MODULE_4__["default"], _objectSpread({}, markerPos), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewCommentAdd__WEBPACK_IMPORTED_MODULE_6__["default"], {
    markerPos: markerPos,
    phaseId: phaseId,
    toggleCommentAddOpen: toggleCommentAddOpen
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_9__["SecurityModal"], {
    securityModalOpen: securityModalOpen,
    setSecurityModalOpen: setSecurityModalOpen
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, paginationActive && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewPagination__WEBPACK_IMPORTED_MODULE_7__["default"], rest))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_project_review_action_bar__WEBPACK_IMPORTED_MODULE_3__["ProjectReviewActionBar"], _objectSpread(_objectSpread({}, rest), {}, {
    title: title,
    phaseNumber: phaseNumber,
    phaseId: phaseId,
    commentsPanelOpen: commentsPanelOpen,
    toggleCommentsPanel: toggleCommentsPanel,
    projectUsers: projectUsers,
    togglePaginationActive: togglePaginationActive
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
  }, commentIndex))), renderComment(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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


  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQuery"])([_api__WEBPACK_IMPORTED_MODULE_7__["QUERY_KEYS"].PROJECT_USERS, projectId], function () {
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
  }, comments === null || comments === void 0 ? void 0 : comments.reverse().map(function (comment, index) {
    var commentIndex = comments.length - index;
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../context */ "./assets/app/js/context/index.js");
/* harmony import */ var icons_chevron_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/chevron.svg */ "./assets/app/img/icons/chevron.svg");
/* harmony import */ var icons_chevron_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_chevron_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks */ "./assets/app/js/hooks/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */




/* Context */


/* Assets */


/* Hooks */


/* Animation */


function ProjectReviewPagination(_ref) {
  var allImages = _ref.allImages;

  /* Hooks */
  Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["useEventListener"])('keyup', handleKeyUp);
  var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["useHistory"])();
  /* Context */

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_4__["ReviewContext"]),
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

  return allImages.length > 1 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, _extends({
    key: "pagination"
  }, _animations__WEBPACK_IMPORTED_MODULE_7__["FADE_IN"], {
    className: "pagination"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    src: icons_chevron_svg__WEBPACK_IMPORTED_MODULE_5___default.a
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
    src: icons_chevron_svg__WEBPACK_IMPORTED_MODULE_5___default.a
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

/***/ "./assets/app/js/domain/project-review/project-review-action-bar/ProjectReviewActionBar.jsx":
/*!**************************************************************************************************!*\
  !*** ./assets/app/js/domain/project-review/project-review-action-bar/ProjectReviewActionBar.jsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectReviewActionBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./assets/app/js/domain/project-review/project-review-action-bar/actions/index.js");
/* harmony import */ var icons_comment_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/comment.svg */ "./assets/app/img/icons/comment.svg");
/* harmony import */ var icons_comment_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_comment_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../context */ "./assets/app/js/context/index.js");
/* Packages */


/* Components */


/* Domain */


/* Assets */


/* Context */


function ProjectReviewActionBar(_ref) {
  var allImages = _ref.allImages,
      allPhases = _ref.allPhases,
      title = _ref.title,
      description = _ref.description,
      phaseNumber = _ref.phaseNumber,
      phaseId = _ref.phaseId,
      commentsPanelOpen = _ref.commentsPanelOpen,
      toggleCommentsPanel = _ref.toggleCommentsPanel,
      projectUsers = _ref.projectUsers,
      togglePaginationActive = _ref.togglePaginationActive;

  /* Context */
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_5__["StaticContext"]),
      currentUser = _useContext.currentUser,
      userRole = _useContext.userRole;
  /* Context */


  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_5__["ReviewContext"]),
      projectImageId = _useContext2.projectImageId;
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "bar bar--review"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container-fluid"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row gutters-0 justify-content-between align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4 d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["User"], {
    user: currentUser,
    size: 'lg'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column ml-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center lh--sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text--sm mb-0 text-truncate",
    style: {
      maxWidth: 120
    }
  }, title)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center lh--sm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text--xs text-muted--70 mb-0"
  }, allImages.indexOf(Number(projectImageId)) + 1, " of ", allImages.length), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "mx-1 text-muted--20"
  }, "/"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_actions__WEBPACK_IMPORTED_MODULE_3__["PhaseAction"], {
    allPhases: allPhases,
    phaseNumber: phaseNumber,
    userRole: userRole,
    togglePaginationActive: togglePaginationActive
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-auto d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative hr-2"
  }, userRole === 'admin' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_actions__WEBPACK_IMPORTED_MODULE_3__["EditAction"], {
    title: title,
    description: description,
    projectImageId: projectImageId,
    togglePaginationActive: togglePaginationActive
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "bar__action-btn ".concat(commentsPanelOpen && 'is-active', " btn btn-link text-rest hr-2"),
    onClick: toggleCommentsPanel
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--16",
    src: icons_comment_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative hr-2"
  }, userRole === 'admin' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_actions__WEBPACK_IMPORTED_MODULE_3__["PhaseNextAction"], {
    phaseId: phaseId,
    projectImageId: projectImageId,
    togglePaginationActive: togglePaginationActive
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4 d-flex justify-content-end"
  }, userRole === 'admin' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_actions__WEBPACK_IMPORTED_MODULE_3__["ShareAction"], {
    projectUsers: projectUsers,
    togglePaginationActive: togglePaginationActive
  }))))));
}

/***/ }),

/***/ "./assets/app/js/domain/project-review/project-review-action-bar/actions/EditAction.jsx":
/*!**********************************************************************************************!*\
  !*** ./assets/app/js/domain/project-review/project-review-action-bar/actions/EditAction.jsx ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EditAction; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var icons_edit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/edit.svg */ "./assets/app/img/icons/edit.svg");
/* harmony import */ var icons_edit_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_edit_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api */ "./assets/app/js/api/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! . */ "./assets/app/js/domain/project-review/project-review-action-bar/actions/index.js");
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


/* Assets */


/* Api */


/* Options */


function EditAction(_ref) {
  var title = _ref.title,
      description = _ref.description,
      projectImageId = _ref.projectImageId,
      togglePaginationActive = _ref.togglePaginationActive;

  /* Hooks */
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQueryClient"])();
  /* State */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalOpen = _useState2[0],
      setModalOpen = _useState2[1];
  /* Callbacks */


  var toggleModal = function toggleModal() {
    togglePaginationActive();
    setModalOpen(!modalOpen);
  };
  /* mutations */


  var mutationOnSuccess = function mutationOnSuccess() {
    queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_5__["QUERY_KEYS"].PROJECT_IMAGE_BY_ID, Number(projectImageId)]);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "bar__action-btn ".concat(modalOpen && 'is-active', " btn btn-link text-rest"),
    onClick: toggleModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--16",
    src: icons_edit_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Modal"], _objectSpread({
    title: 'Editing image',
    subtitle: 'Save when ready',
    modalOpen: modalOpen,
    toggleModal: toggleModal
  }, ___WEBPACK_IMPORTED_MODULE_6__["modalOptions"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["EditableBody"], {
    toggleModal: toggleModal,
    fields: [{
      name: 'title',
      defaultValue: title
    }, {
      name: 'description',
      defaultValue: description
    }],
    mutation: _api__WEBPACK_IMPORTED_MODULE_5__["editProjectImage"],
    mutationId: projectImageId,
    mutationOnSuccess: mutationOnSuccess
  })));
}

/***/ }),

/***/ "./assets/app/js/domain/project-review/project-review-action-bar/actions/PhaseAction.jsx":
/*!***********************************************************************************************!*\
  !*** ./assets/app/js/domain/project-review/project-review-action-bar/actions/PhaseAction.jsx ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhaseAction; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var icons_chevron_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! icons/chevron.svg */ "./assets/app/img/icons/chevron.svg");
/* harmony import */ var icons_chevron_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(icons_chevron_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var icons_check_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/check.svg */ "./assets/app/img/icons/check.svg");
/* harmony import */ var icons_check_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_check_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../context */ "./assets/app/js/context/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! . */ "./assets/app/js/domain/project-review/project-review-action-bar/actions/index.js");
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


/* Assets */



/* Context */


/* Options */


function PhaseAction(_ref) {
  var allPhases = _ref.allPhases,
      phaseNumber = _ref.phaseNumber,
      userRole = _ref.userRole,
      togglePaginationActive = _ref.togglePaginationActive;

  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalOpen = _useState2[0],
      setModalOpen = _useState2[1];
  /* Context */


  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_5__["ReviewContext"]),
      _useContext$activePha = _useContext.activePhase,
      activePhase = _useContext$activePha === void 0 ? allPhases[allPhases.length - 1] : _useContext$activePha,
      setActivePhase = _useContext.setActivePhase;
  /* Callbacks */


  var toggleModal = function toggleModal() {
    if (userRole !== 'admin') return;
    togglePaginationActive();
    setModalOpen(!modalOpen);
  };

  var navigateToPhase = function navigateToPhase(phase) {
    setActivePhase(phase);
    toggleModal();
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-link btn--modal text-reset d-flex align-items-center ".concat(modalOpen && 'is-active'),
    onClick: toggleModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text--xs text-muted--70 mb-0"
  }, "Phase ", phaseNumber), userRole === 'admin' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--8 text-muted--50  ml-1",
    src: icons_chevron_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Modal"], _objectSpread(_objectSpread({
    title: 'Choose phase',
    subtitle: 'Navigate to selected phase',
    modalOpen: modalOpen,
    toggleModal: toggleModal
  }, ___WEBPACK_IMPORTED_MODULE_6__["modalOptions"]), {}, {
    extensionClasses: 'bar__modal bar__modal--left'
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center mt-2"
  }, allPhases.map(function (phase, phaseIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      key: phaseIndex,
      className: "btn btn-link icon-wrapper icon-wrapper--interactive icon-wrapper--secondary hr-2 text-decoration-none",
      style: {
        '--size': 35
      },
      onClick: function onClick() {
        return navigateToPhase(phase);
      }
    }, activePhase === phase ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
      wrapper: "svg",
      className: "icon icon--12 text-secondary",
      src: icons_check_svg__WEBPACK_IMPORTED_MODULE_4___default.a
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-secondary"
    }, phaseIndex + 1));
  }))));
}

/***/ }),

/***/ "./assets/app/js/domain/project-review/project-review-action-bar/actions/PhaseNextAction.jsx":
/*!***************************************************************************************************!*\
  !*** ./assets/app/js/domain/project-review/project-review-action-bar/actions/PhaseNextAction.jsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PhaseNextAction; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var icons_next_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/next.svg */ "./assets/app/img/icons/next.svg");
/* harmony import */ var icons_next_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_next_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../api */ "./assets/app/js/api/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! . */ "./assets/app/js/domain/project-review/project-review-action-bar/actions/index.js");
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


/* Assets */


/* Api */


/* Options */


function PhaseNextAction(_ref) {
  var phaseId = _ref.phaseId,
      projectImageId = _ref.projectImageId,
      togglePaginationActive = _ref.togglePaginationActive;

  /* Hooks */
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQueryClient"])();
  /* State */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalOpen = _useState2[0],
      setModalOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      images = _useState4[0],
      setImages = _useState4[1];
  /* Callbacks */


  var toggleModal = function toggleModal() {
    togglePaginationActive();
    setModalOpen(!modalOpen);
  };
  /* Mutations */


  var nextPhaseMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_5__["nextPhase"], {
    onSuccess: function onSuccess() {
      toggleModal();
      setImages([]);
      queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_5__["QUERY_KEYS"].PROJECT_IMAGE_BY_ID, Number(projectImageId)]);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "bar__action-btn ".concat(modalOpen && 'is-active', " btn btn-link text-rest"),
    onClick: toggleModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--16",
    src: icons_next_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Modal"], _objectSpread({
    title: 'Next phase',
    subtitle: 'Add a new image for the next phase',
    modalOpen: modalOpen,
    toggleModal: toggleModal
  }, ___WEBPACK_IMPORTED_MODULE_6__["modalOptions"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
}

/***/ }),

/***/ "./assets/app/js/domain/project-review/project-review-action-bar/actions/ShareAction.jsx":
/*!***********************************************************************************************!*\
  !*** ./assets/app/js/domain/project-review/project-review-action-bar/actions/ShareAction.jsx ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShareAction; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var icons_add_user_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/add_user.svg */ "./assets/app/img/icons/add_user.svg");
/* harmony import */ var icons_add_user_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_add_user_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../context */ "./assets/app/js/context/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../api */ "./assets/app/js/api/index.js");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! . */ "./assets/app/js/domain/project-review/project-review-action-bar/actions/index.js");
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


/* Assets */


/* Context */


/* Api */


/* Options */


function ShareAction(_ref) {
  var projectUsers = _ref.projectUsers,
      togglePaginationActive = _ref.togglePaginationActive;

  /* Context */
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_5__["ReviewContext"]),
      projectId = _useContext.projectId;
  /* Hooks */


  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQueryClient"])();
  /* State */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalOpen = _useState2[0],
      setModalOpen = _useState2[1];
  /* Callbacks */


  var toggleModal = function toggleModal() {
    togglePaginationActive();
    setModalOpen(!modalOpen);
  };

  var invalidateQueries = function invalidateQueries() {
    queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_6__["QUERY_KEYS"].PROJECT_USERS, projectId]);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    title: "Share",
    extensionClasses: "px-5",
    onClick: toggleModal
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--12 mr-1",
    src: icons_add_user_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Modal"], _extends({
    title: "Select users",
    subtitle: "Choose some users to collaborate with."
  }, _objectSpread(_objectSpread({
    modalOpen: modalOpen,
    toggleModal: toggleModal
  }, ___WEBPACK_IMPORTED_MODULE_7__["modalOptions"]), {}, {
    extensionClasses: 'bar__modal bar__modal--right'
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["UserAddSearch"], {
    users: projectUsers,
    project: {
      id: projectId
    },
    toggleModal: toggleModal,
    invalidateQueries: invalidateQueries
  })));
}

/***/ }),

/***/ "./assets/app/js/domain/project-review/project-review-action-bar/actions/index.js":
/*!****************************************************************************************!*\
  !*** ./assets/app/js/domain/project-review/project-review-action-bar/actions/index.js ***!
  \****************************************************************************************/
/*! exports provided: EditAction, PhaseAction, PhaseNextAction, ShareAction, modalOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "modalOptions", function() { return modalOptions; });
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../animations */ "./assets/app/js/animations/index.js");
/* harmony import */ var _EditAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditAction */ "./assets/app/js/domain/project-review/project-review-action-bar/actions/EditAction.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditAction", function() { return _EditAction__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _PhaseAction__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PhaseAction */ "./assets/app/js/domain/project-review/project-review-action-bar/actions/PhaseAction.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhaseAction", function() { return _PhaseAction__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _PhaseNextAction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./PhaseNextAction */ "./assets/app/js/domain/project-review/project-review-action-bar/actions/PhaseNextAction.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhaseNextAction", function() { return _PhaseNextAction__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ShareAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ShareAction */ "./assets/app/js/domain/project-review/project-review-action-bar/actions/ShareAction.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShareAction", function() { return _ShareAction__WEBPACK_IMPORTED_MODULE_4__["default"]; });






/* Global */

var modalOptions = {
  renderOnBody: false,
  center: false,
  extensionClasses: 'bar__modal',
  customAnimation: Object(_animations__WEBPACK_IMPORTED_MODULE_0__["SCALE_IN_UP"])(20)
};

/***/ }),

/***/ "./assets/app/js/domain/project-review/project-review-action-bar/index.js":
/*!********************************************************************************!*\
  !*** ./assets/app/js/domain/project-review/project-review-action-bar/index.js ***!
  \********************************************************************************/
/*! exports provided: ProjectReviewActionBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectReviewActionBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectReviewActionBar */ "./assets/app/js/domain/project-review/project-review-action-bar/ProjectReviewActionBar.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectReviewActionBar", function() { return _ProjectReviewActionBar__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */



/* Components */


/* Domain */


/* Api */


/* Hooks */


/* Context */


function ProjectReview() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      activePhase = _useState2[0],
      setActivePhase = _useState2[1];
  /* Queries */


  var _useParams = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
      projectImageId = _useParams.id;

  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQuery"])([_api__WEBPACK_IMPORTED_MODULE_5__["QUERY_KEYS"].PROJECT_IMAGE_BY_ID, parseInt(projectImageId)], function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_5__["fetchProjectImageById"])({
      projectImageId: projectImageId,
      phaseId: activePhase
    });
  }),
      isLoading = _useQuery.isLoading,
      data = _useQuery.data,
      refetch = _useQuery.refetch;
  /* Effects */


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (activePhase) refetch({
      projectImage: projectImageId,
      phaseId: activePhase
    });
  }, [activePhase]);
  /* Hooks */

  Object(_hooks__WEBPACK_IMPORTED_MODULE_6__["usePageTitle"])(data === null || data === void 0 ? void 0 : data.title, [data]);
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_7__["ReviewContext"].Provider, {
    value: {
      projectId: data === null || data === void 0 ? void 0 : data.parentId,
      projectImageId: projectImageId,
      activePhase: activePhase,
      setActivePhase: setActivePhase
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvYmFja2dyb3VuZC1sb2dpbi5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvYmFja2dyb3VuZC1sb2dpbkAyeC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX2ltYWdlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9hZGRfcHJvamVjdC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX3VzZXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2FyY2hpdmUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2NoZWNrLWNpcmNsZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvY2hlY2suc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2NoZXZyb24uc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2Nsb3NlLXdoaXRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvY29tbWVudC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvZGFuZ2VyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9kZWxldGUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2VkaXQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2xlYXZlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9uZXh0LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9zdGFyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9zdWNjZXNzLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy91cGxvYWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL3dhcm5pbmcuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FuaW1hdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9hcGkvY29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FwaS9waGFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FwaS9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvYXBpL3Byb2plY3RJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FwaS9zZWN1cml0eS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FwaS91c2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9hY3Rpb24tbWVudS9BY3Rpb25NZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvYWxlcnQvQWxlcnQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9iYWNrZ3JvdW5kL0JhY2tncm91bmQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9idXR0b24vQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9kcm9wem9uZS9Ecm9wem9uZVNpbmdsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2VkaXRhYmxlL0VkaXRhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvZWRpdGFibGUvRWRpdGFibGVCb2R5LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXJOYXZpZ2F0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvbG9hZGluZy13cmFwcGVyL0xvYWRpbmdXcmFwcGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvbW9kYWwvTW9kYWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9tb2RhbC9Nb2RhbEhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3BhZ2UtbG9hZGVyL1BhZ2VMb2FkZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9wYWdlLXdyYXBwZXIvUGFnZVdyYXBwZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9zZWN1cml0eS9Mb2dpbkZvcm0uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9zZWN1cml0eS9TZWN1cml0eU1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvc2VjdXJpdHkvU2lnbnVwRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3NsaWRlLWluL1NsaWRlSW4uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy91c2VyLWFkZC9Vc2VyQWRkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvdXNlci1hZGQvVXNlckFkZFNlYXJjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3VzZXItYWRkL1VzZXJBZGRTZWFyY2hSZXN1bHRzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvdXNlci1hZGQvc2VydmljZXMvZmlsdGVyVXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3VzZXJzL1VzZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy91c2Vycy9Vc2VyU2VsZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvdXNlcnMvVXNlcnMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29udGV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbnRleHQvbWFpbkNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb250ZXh0L3Jldmlld0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1kZXRhaWwvUHJvamVjdERldGFpbEhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1kZXRhaWwvUHJvamVjdERldGFpbEltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LWRldGFpbC9Qcm9qZWN0RGV0YWlsSW1hZ2VzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LWRldGFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LW92ZXJ2aWV3L1Byb2plY3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3Qtb3ZlcnZpZXcvUHJvamVjdEFkZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1vdmVydmlldy9Qcm9qZWN0SW1hZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3Qtb3ZlcnZpZXcvUHJvamVjdFJlc3VsdHMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3Qtb3ZlcnZpZXcvUHJvamVjdFNsaWRlSW4uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3Qtb3ZlcnZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvUHJvamVjdFJldmlld0NhbnZhcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvUHJvamVjdFJldmlld0NvbW1lbnQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdDb21tZW50QWRkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3Q29tbWVudE1lbnRpb25zLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3Q29tbWVudE1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3Q29tbWVudFBhbmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3Q29tbWVudFJlcGx5LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3TWFya2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3UGFnaW5hdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvcHJvamVjdC1yZXZpZXctYWN0aW9uLWJhci9Qcm9qZWN0UmV2aWV3QWN0aW9uQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9wcm9qZWN0LXJldmlldy1hY3Rpb24tYmFyL2FjdGlvbnMvRWRpdEFjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvcHJvamVjdC1yZXZpZXctYWN0aW9uLWJhci9hY3Rpb25zL1BoYXNlQWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9wcm9qZWN0LXJldmlldy1hY3Rpb24tYmFyL2FjdGlvbnMvUGhhc2VOZXh0QWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9wcm9qZWN0LXJldmlldy1hY3Rpb24tYmFyL2FjdGlvbnMvU2hhcmVBY3Rpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L3Byb2plY3QtcmV2aWV3LWFjdGlvbi1iYXIvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9wcm9qZWN0LXJldmlldy1hY3Rpb24tYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L3NlcnZpY2VzL2NhbGNDb21tZW50UG9zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L3NlcnZpY2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L3NlcnZpY2VzL3N0eWxlTWVudGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2hvb2tzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvaG9va3MvdXNlQ2xvc2VPbkVzYy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2hvb2tzL3VzZUV2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9ob29rcy91c2VQYWdlVGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9ob29rcy91c2VTZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9ob29rcy91c2VTdG9yYWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3BhZ2VzL0xvZ2luLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3BhZ2VzL1Byb2plY3REZXRhaWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcGFnZXMvUHJvamVjdE92ZXJ2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3BhZ2VzL1Byb2plY3RSZXZpZXcuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcGFnZXMvU2lnbnVwLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvc2VydmljZXMvY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvc2VydmljZXMvZ2V0Um9sZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3NlcnZpY2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvc2VydmljZXMvaXNFbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3NlcnZpY2VzL3Jlc2l6ZUltYWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOlsiQXBwIiwiUm91dGVyQm9keSIsInVzZVN0YXRlIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsInVzZXJSb2xlIiwic2V0VXNlclJvbGUiLCJ1c2VTdG9yYWdlIiwiYXRvYiIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsInVzZXJJZCIsInVzZUxvY2F0aW9uIiwidXNlUXVlcnkiLCJRVUVSWV9LRVlTIiwiQ1VSUkVOVF9VU0VSIiwiZmV0Y2hDdXJyZW50VXNlciIsInJldHJ5Iiwib25TdWNjZXNzIiwidXNlciIsImdldFJvbGUiLCJpc0xvYWRpbmciLCJwYXRobmFtZSIsIlJPVVRFUyIsImxvZ2luIiwic2lnbnVwIiwiaW5jbHVkZXMiLCJwcm9qZWN0cyIsInJvdXRlcyIsIm1hcCIsInBhdGgiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJwcm9wcyIsIkZBREVfSU4iLCJkdXJhdGlvbiIsImVhc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJuZXdlc3RPblRvcCIsInBvc2l0aW9uIiwiY2xvc2VCdXR0b24iLCJFQVNFIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJGQURFX0lOX1VQIiwieSIsInR5cGUiLCJkYW1waW5nIiwic3RpZmZuZXNzIiwiU0NBTEVfSU5fVVAiLCJzY2FsZSIsInRyYW5zZm9ybU9yaWdpbiIsIlRSQU5TRk9STV9VUCIsIlNDQUxFX0ZBREUiLCJTVEFHR0VSX1VQIiwiaW5kZXgiLCJkZWxheSIsIlNUQUdHRVJfTEVGVCIsIngiLCJTTElERV9JTiIsImFkZENvbW1lbnQiLCJwaGFzZUlkIiwiY29tbWVudCIsIm1lbnRpb25lZCIsInBhcmFtcyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwieFBlcmNlbnQiLCJ5UGVyY2VudCIsImxlbmd0aCIsImF4aW9zIiwicG9zdCIsInJlc3VsdCIsImRhdGEiLCJhZGRSZXBseSIsImNvbW1lbnRJZCIsInJlcGx5IiwiUFJPSkVDVF9CWV9VU0VSIiwiUFJPSkVDVF9CWV9JRCIsIlBST0pFQ1RfSU1BR0VfQllfSUQiLCJHTE9CQUxfVVNFUlMiLCJQUk9KRUNUX1VTRVJTIiwibmV4dFBoYXNlIiwiaW1hZ2VzIiwiZm9yRWFjaCIsImltYWdlIiwiaW1hZ2VJbmRleCIsIm9yaWdpbmFsIiwidGh1bWJuYWlsIiwidGh1bWJuYWlsUmV0aW5hIiwiZmV0Y2hQcm9qZWN0c0J5VXNlciIsImdldCIsImZldGNoUHJvamVjdEJ5SWQiLCJwcm9qZWN0SWQiLCJhZGRQcm9qZWN0IiwiZGVsZXRlUHJvamVjdHMiLCJwcm9qZWN0SWRzIiwiaWQiLCJsZWF2ZVByb2plY3RzIiwiZWRpdFByb2plY3QiLCJmb3JtUmVmIiwiY3VycmVudCIsImZldGNoUHJvamVjdEltYWdlQnlJZCIsInByb2plY3RJbWFnZUlkIiwicGhhc2UiLCJhZGRQcm9qZWN0SW1hZ2VzIiwiZGVsZXRlUHJvamVjdEltYWdlcyIsInByb2plY3RJbWFnZUlkcyIsImVkaXRQcm9qZWN0SW1hZ2UiLCJ1cmwiLCJlbWFpbCIsInBhc3N3b3JkIiwibG9nb3V0IiwiZmV0Y2hHb2JhbFVzZXJzIiwiZmV0Y2hQcm9qZWN0VXNlcnMiLCJhZGRVc2VyIiwicmVmZXJlciIsImRlbGV0ZVVzZXIiLCJBY3Rpb25NZW51Iiwic2VsZWN0ZWQiLCJyZXNldFNlbGVjdGVkIiwiYWN0aW9ucyIsInVzZUNvbnRleHQiLCJTdGF0aWNDb250ZXh0IiwiY2xvc2VJY29uIiwiYWN0aW9uSW5kZXgiLCJ0aXRsZSIsInRoZW1lIiwiaGFzUGVybWlzc2lvbiIsImljb24iLCJpY29uU2l6ZSIsIm11dGF0aW9uIiwibG9hZGVyQ2xhc3NlcyIsImFwcGVhcmFuY2VUeXBlcyIsIndhcm5pbmciLCJ3YXJuaW5nSWNvbiIsImRhbmdlciIsImVycm9ySWNvbiIsInN1Y2Nlc3MiLCJzdWNjZXNzSWNvbiIsIkFsZXJ0IiwibWVzc2FnZSIsImFwcGVhcmFuY2UiLCJjbG9zZVRvYXN0IiwiQmFja2dyb3VuZCIsImJnIiwiYmdSZXRpbmEiLCJCdXR0b24iLCJzaXplIiwiZXh0ZW5zaW9uQ2xhc3NlcyIsIm9uQ2xpY2siLCJjb250ZW50VHlwZSIsImNoaWxkcmVuIiwiYnV0dG9uUmVmIiwidXNlUmVmIiwiYnV0dG9uSGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwiVGV4dCIsImRlZmF1bHRDbGFzc2VzIiwiSWNvbiIsImNoZWNrSWNvbiIsIkRyb3B6b25lIiwicG9zaXRpdGlvbiIsInF1ZXJ5Q2xpZW50IiwidXNlUXVlcnlDbGllbnQiLCJ1c2VEcm9wem9uZSIsImFjY2VwdCIsIm5vQ2xpY2siLCJvbkRyb3AiLCJhY2NlcHRlZEZpbGVzIiwidXBkYXRlUHJvamVjdEltYWdlcyIsImdldFJvb3RQcm9wcyIsImdldElucHV0UHJvcHMiLCJpc0RyYWdBY3RpdmUiLCJhZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24iLCJ1c2VNdXRhdGlvbiIsImludmFsaWRhdGVRdWVyaWVzIiwiZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uIiwiYWN0aW9uIiwicmVzaXplSW1hZ2VzIiwicmVzaXplZEltYWdlcyIsIm11dGF0ZSIsImlzUGFyZW50RHJhZ0FjdGl2ZSIsIkRyb3B6b25lSW5uZXIiLCJhZGRJbWFnZUxvYWRpbmciLCJub0RyYWdFdmVudHNCdWJibGluZyIsInVwbG9hZEltYWdlSWNvbiIsImFkZEltYWdlSWNvbiIsIkRyb3B6b25lU2luZ2xlIiwic2V0SW1hZ2VzIiwibWF4RmlsZXMiLCJwcmV2aWV3IiwibmFtZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiRWRpdGFibGUiLCJzdWJ0aXRsZSIsInJlc3QiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJ0b2dnbGVNb2RhbCIsImVkaXRJY29uIiwiRWRpdGFibGVCb2R5IiwiZmllbGRzIiwibXV0YXRpb25JZCIsIm11dGF0aW9uT25TdWNjZXNzIiwiZWRpdE11dGF0aW9uIiwicHJldmVudERlZmF1bHQiLCJmaWVsZCIsImZpZWxkSW5kZXgiLCJzaG91bGRGb2N1cyIsIkZpZWxkIiwiZGVmYXVsdFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImlucHV0UmVmIiwidXNlRWZmZWN0Iiwic2VsZWN0IiwidGFyZ2V0IiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwiSGVhZGVyIiwiSGVhZGVyTmF2aWdhdGlvbiIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwibG9nb3V0TXV0YXRpb24iLCJwdXNoIiwic2Vzc2lvblN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwidG9hc3QiLCJvbkVycm9yIiwiSW1hZ2UiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJ2YXJpYW50cyIsImhpZGRlbiIsInZpc2libGUiLCJvbkxvYWQiLCJzcmMiLCJMb2FkaW5nV3JhcHBlciIsImxvYWRpbmciLCJsb2FkZXJTaXplIiwiY2xhc3NlcyIsIk1vZGFsIiwicmVuZGVyT25Cb2R5IiwiY2VudGVyIiwiY29tcG9uZW50cyIsImN1c3RvbUFuaW1hdGlvbiIsIkhlYWRlckNvbXBvbmVudCIsIk1vZGFsSGVhZGVyIiwiYW5pbWF0aW9uIiwidXNlQ2xvc2VPbkVzYyIsInJlbmRlciIsImNyZWF0ZVBvcnRhbCIsImRvY3VtZW50IiwiYm9keSIsIlBhZ2VMb2FkZXIiLCJQYWdlV3JhcHBlciIsIkxvZ2luRm9ybSIsInNob3dTaWdudXAiLCJ1c2VQYWdlVGl0bGUiLCJ1c2VGb3JtIiwicmVWYWxpZGF0ZU1vZGUiLCJtb2RlIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJsb2dpbk11dGF0aW9uIiwiZXJyb3IiLCJyZXNwb25zZSIsIm9uU3VibWl0IiwicmVxdWlyZWQiLCJTZWN1cml0eU1vZGFsIiwic2VjdXJpdHlNb2RhbE9wZW4iLCJzZXRTZWN1cml0eU1vZGFsT3BlbiIsInRvZ2dsZVNlY3VyaXR5TW9kYWwiLCJzaG93TG9naW4iLCJTaWdudXBGb3JtIiwiY29udHJvbCIsInBsYWluUGFzc3dvcmQiLCJ1c2VXYXRjaCIsInNpZ251cE11dGF0aW9uIiwic3RhdHVzIiwicmVzZXQiLCJ1c2VybmFtZSIsIm9yZ2FuaXNhdGlvbiIsIm1pbkxlbmd0aCIsInBhc3N3b3JkQ29uZmlybSIsInZhbGlkYXRlIiwiU2xpZGVJbiIsInRvZ2dsZVNsaWRlSW4iLCJkb21FbGVtZW50IiwidmFyaWFudCIsIlVzZXJBZGQiLCJ1c2VycyIsInByb2plY3QiLCJhZGRVc2VySWNvbiIsIlVzZXJBZGRTZWFyY2giLCJxdWVyeSIsInNldFF1ZXJ5IiwiZm9jdXNlZFVzZXIiLCJzZXRGb2N1c2VkVXNlciIsImdsb2JhbFVzZXJzIiwiZ2xvYmFsVXNlcnNMb2FkaW5nIiwiZmlsdGVyZWRVc2VycyIsImZpbHRlclVzZXJzIiwicXVlcnlSZWYiLCJhZGRVc2VyTXV0YXRpb24iLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVPbktleURvd24iLCJrZXkiLCJpc0VtYWlsIiwiaGFuZGxlQ2xpY2siLCJ1c2VyTXV0YXRpb25Mb2FkaW5nIiwiVXNlckFkZFNlYXJjaFJlc3VsdHMiLCJyZXN1bHRzIiwibmV3VXNlciIsImRpc3BsYXkiLCJ1c2VyQ29sb3IiLCJ1c2VySW5kZXgiLCJsb3dlclF1ZXJ5IiwidG9Mb3dlckNhc2UiLCJleGlzdGluZ1VzZXJzQnlFbWFpbCIsImZpbHRlciIsIlVzZXIiLCJhdXRob3IiLCJpc0F1dGhvciIsImRlbGV0ZVVzZXJNdXRhdGlvbiIsImRlbGV0ZUljb24iLCJzdGFySWNvbiIsIlVzZXJBdmF0YXIiLCJ1c2VySW5pdGlhbHMiLCJzcGxpdCIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsIlVzZXJJbmZvIiwibGF5b3V0IiwiVXNlclNlbGVjdCIsImlzRm9jdXNlZCIsImhhbmRsZVN0YXR1cyIsIlVzZXJzIiwidXNlTGF5b3V0Iiwic2xpY2VBbW91bnQiLCJJbmZpbml0eSIsInNsaWNlIiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiUmV2aWV3Q29udGV4dCIsIlByb2plY3REZXRhaWxIZWFkZXIiLCJkZXNjcmlwdGlvbiIsInN0YXRpY0NvbnRleHQiLCJQcm9qZWN0RGV0YWlsSW1hZ2UiLCJwcm9qZWN0SW1hZ2UiLCJ1cGRhdGVTZWxlY3RlZCIsIlByb2plY3REZXRhaWxJbWFnZXMiLCJwcm9qZWN0SW1hZ2VzIiwidXNlU2VsZWN0aW9uIiwiSW1hZ2VzIiwicHJvamVjdEltYWdlSW5kZXgiLCJQcm9qZWN0IiwiUHJvamVjdEFkZCIsInNldE5ld1Byb2plY3RJZCIsInNldFByb2plY3RJZCIsInNsaWRlSW5PcGVuIiwic2V0U2xpZGVJbk9wZW4iLCJlbmFibGVkIiwiYWRkTXV0YXRpb24iLCJpbnZhbGlkYXRlUHJvamVjdCIsInNldFRpbWVvdXQiLCJ1cGRhdGVQcm9qZWN0IiwiYWRkUHJvamVjdEljb24iLCJQcm9qZWN0SW1hZ2UiLCJQcm9qZWN0UmVzdWx0cyIsIm5ld1Byb2plY3RJZCIsImxlYXZlUHJvamVjdHNNdXRhdGlvbiIsImRlbGV0ZVByb2plY3RzTXV0YXRpb24iLCJsZWF2ZUljb24iLCJhcmNoaXZlSWNvbiIsInByb2plY3RJbmRleCIsIlByb2plY3RTbGlkZUluIiwiRHJvcHpvbmVJbWFnZSIsImN1cnNvck9mZnNldCIsIlByb2plY3RSZXZpZXdDYW52YXMiLCJwYXJlbnRJZCIsInByb2plY3RVc2VycyIsImNvbW1lbnRzIiwicGhhc2VOdW1iZXIiLCJyZXZpZXdSZWYiLCJtYXJrZXJQb3MiLCJzZXRNYXJrZXJQb3MiLCJjb21tZW50c1BhbmVsT3BlbiIsInNldENvbW1lbnRzUGFuZWxPcGVuIiwicGFnaW5hdGlvbkFjdGl2ZSIsInNldFBhZ2luYXRpb25BY3RpdmUiLCJ0b2dnbGVDb21tZW50QWRkT3BlbiIsInRvZ2dsZUNvbW1lbnRzUGFuZWwiLCJ0b2dnbGVQYWdpbmF0aW9uQWN0aXZlIiwicG9zTWFya2VyIiwiY2xpZW50WCIsImNsaWVudFkiLCJhdXRoZW50aWNhdGVkIiwicmV2aWV3UG9zIiwid2lkdGgiLCJ0b3AiLCJjb21tZW50SW5kZXgiLCJQcm9qZWN0UmV2aWV3Q29tbWVudCIsImNvbnRlbnQiLCJzZXRSZXBseVRvVXNlciIsInJlbmRlckF1dGhvciIsInNob3dJbml0aWFsUmVwbGllcyIsImNyZWF0ZWQiLCJzaG93UmVwbGllcyIsInNldFNob3dSZXBsaWVzIiwicmVuZGVyQ29tbWVudCIsInVzZXJzUmVnZXgiLCJ1c2Vyc0FycmF5IiwibWF0Y2hBbGwiLCJmaW5kIiwiUHJvamVjdFJldmlld0NvbW1lbnRBZGQiLCJtb2RhbFJlZiIsImNhbGNDb21tZW50UG9zIiwibGVmdCIsInNldENvbW1lbnQiLCJtZW50aW9ucyIsInNldE1lbnRpb25zIiwiYWRkQ29tbWVudE11dGF0aW9uIiwicGFyc2VJbnQiLCJ0cmltIiwiYXV0b0ZvY3VzIiwiUHJvamVjdFJldmlld0NvbW1lbnRNZW50aW9ucyIsIm1lbnRpb25SZWYiLCJzdHlsZU1lbnRpb25zIiwiU3VnZ2VzdGlvbiIsIl8iLCJlbnRyeSIsImhpZ2hsaWdodGVkIiwiZm9jdXNlZCIsIlByb2plY3RSZXZpZXdDb21tZW50TW9kYWwiLCJjb21tZW50T3BlbiIsInNldENvbW1lbnRPcGVuIiwidG9nZ2xlQ29tbWVudCIsIkNvbW1lbnRCb3giLCJ0cmFuc2Zvcm1lZFBvcyIsInNldFRyYW5zZm9ybWVkUG9zIiwicmVwbHlUb1VzZXIiLCJib3hSZWYiLCJyZXBseVRvIiwiUHJvamVjdFJldmlld0NvbW1lbnRQYW5lbCIsInJldmVyc2UiLCJDb21tZW50V2l0aFJlcGx5IiwiUHJvamVjdFJldmlld0NvbW1lbnRSZXBseSIsInNldFJlcGx5IiwiYWRkUmVwbHlNdXRhdGlvbiIsIlByb2plY3RSZXZpZXdNYXJrZXIiLCJQcm9qZWN0UmV2aWV3UGFnaW5hdGlvbiIsImFsbEltYWdlcyIsInVzZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXlVcCIsImN1cnJlbnRJbWFnZSIsImluZGV4T2YiLCJOdW1iZXIiLCJwcmV2SW1hZ2UiLCJuZXh0SW1hZ2UiLCJuYXZpZ2F0ZSIsImRpcmVjdGlvbiIsInRvU3RyaW5nIiwiY2hldnJvbkljb24iLCJQcm9qZWN0UmV2aWV3QWN0aW9uQmFyIiwiYWxsUGhhc2VzIiwibWF4V2lkdGgiLCJjb21tZW50SWNvbiIsIkVkaXRBY3Rpb24iLCJtb2RhbE9wdGlvbnMiLCJQaGFzZUFjdGlvbiIsImFjdGl2ZVBoYXNlIiwic2V0QWN0aXZlUGhhc2UiLCJuYXZpZ2F0ZVRvUGhhc2UiLCJwaGFzZUluZGV4IiwiUGhhc2VOZXh0QWN0aW9uIiwibmV4dFBoYXNlTXV0YXRpb24iLCJuZXh0SWNvbiIsIlNoYXJlQWN0aW9uIiwicmVmIiwicG9zIiwibWFya2VyU3BhY2VyIiwibWFya2VyU2l6ZSIsIm9mZnNldCIsImJveFdpZHRoIiwiYm94SGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJpbm5lcldpZHRoIiwiYm94UGVyY2VudFdpZHRoIiwic2NyZWVuSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJib3hQZXJjZW50SGVpZ2h0IiwiaW5wdXQiLCJtZW50aW9uTm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVudGlvbiIsIm1lbnRpb25Jbm5lciIsImlubmVySFRNTCIsInVzZXJPZk1lbnRpb24iLCJzdHlsZSIsInNldFByb3BlcnR5IiwiZm9jdXMiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInRvZ2dsZSIsInVzZUNhbGxiYWNrIiwiZXZlbnROYW1lIiwiaGFuZGxlciIsImVsZW1lbnQiLCJzYXZlZEhhbmRsZXIiLCJpc1N1cHBvcnRlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVwZGF0ZVByb3BzIiwic2V0U2VsZWN0ZWQiLCJzZWxlY3RlZElkIiwiaW5pdGlhbFZhbHVlIiwic3RvcmFnZVR5cGUiLCJpdGVtIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzdG9yZWRWYWx1ZSIsInNldFN0b3JlZFZhbHVlIiwidmFsdWVUb1N0b3JlIiwiRnVuY3Rpb24iLCJzdHJpbmdpZnkiLCJFcnJvciIsImNsaWVudCIsIlF1ZXJ5Q2xpZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJxdWVyaWVzIiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJhcHBOb2RlIiwiZ2V0RWxlbWVudEJ5SWQiLCJMb2dpbiIsIlByb2plY3REZXRhaWwiLCJ1c2VQYXJhbXMiLCJQcm9qZWN0T3ZlcnZpZXciLCJQcm9qZWN0UmV2aWV3IiwicmVmZXRjaCIsIlNpZ251cCIsInN0cmluZyIsImNoYXJBdCIsIlVTRVJfUk9MRVMiLCJST0xFX0FETUlOIiwiUk9MRV9VU0VSIiwiUk9MRV9VU0VSX0JBU0lDIiwicm9sZXMiLCJ0ZXN0IiwibWF4SGVpZ2h0IiwicXVhbGl0eSIsInJvdGF0aW9uIiwib3V0cHV0VHlwZSIsInJlc2l6ZUltYWdlVHlwZSIsIm9wdGlvbnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsIlJlc2l6ZXIiLCJpbWFnZUZpbGVSZXNpemVyIiwicG9wIiwidXJpIiwicmVzaXplSW1hZ2UiLCJPYmplY3QiLCJhc3NpZ24iLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhbGwiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7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QUcsQ0FBQ0MsZUFBSixDQUFvQmxlLGVBQXBCO0FBQVgsZUFBL0I7QUFIWCxhQUpSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFXZSxTQUFlMkYsWUFBOUI7QUFBQTtBQUFBOzs7MEVBQWUsa0JBQTRCakcsTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0Q4ZCxPQUFPLENBQUNXLEdBQVIsQ0FDWnplLE1BQU0sQ0FBQ3pELEdBQVA7QUFBQSxpRkFBVyxrQkFBTzJELEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQ0drZSxXQUFXLENBQUNsZSxLQUFELENBRGQ7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFYOztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURZLENBREM7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7Ozs7Ozs7Ozs7O0FDdENmLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL2FwcC9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9hc3NldHMvYXBwL2pzL21haW4uanNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9iYWNrZ3JvdW5kLWxvZ2luLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9iYWNrZ3JvdW5kLWxvZ2luQDJ4LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hZGRfaW1hZ2Uuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FkZF9wcm9qZWN0LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hZGRfdXNlci5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYXJjaGl2ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY2hlY2stY2lyY2xlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jaGVjay5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY2hldnJvbi5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY2xvc2Utd2hpdGUuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Nsb3NlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jb21tZW50LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9kYW5nZXIuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2RlbGV0ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZWRpdC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbGVhdmUuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL25leHQuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3N0YXIuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3N1Y2Nlc3Muc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3VwbG9hZC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvd2FybmluZy5zdmdcIjsiLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFN3aXRjaCwgUm91dGUsIFJlZGlyZWN0LCB1c2VMb2NhdGlvbiB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEhlYWRlck5hdmlnYXRpb24sIFBhZ2VMb2FkZXIgfSBmcm9tICcuL2NvbXBvbmVudHMnO1xuXG4vKiBTZXJ2aWNlcyAqL1xuaW1wb3J0IHsgZ2V0Um9sZSB9IGZyb20gJy4vc2VydmljZXMnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOIH0gZnJvbSAnLi9hbmltYXRpb25zJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBmZXRjaEN1cnJlbnRVc2VyLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi9hcGknO1xuXG4vKiBSb3V0ZXMgKi9cbmltcG9ydCByb3V0ZXMsIHsgUk9VVEVTIH0gZnJvbSAnLi9yb3V0ZXMnO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlU3RvcmFnZSB9IGZyb20gJy4vaG9va3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoKSB7XG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxSb3V0ZXI+XG5cdFx0XHQ8Um91dGVyQm9keSAvPlxuXHRcdDwvUm91dGVyPlxuXHQpO1xufVxuXG5jb25zdCBSb3V0ZXJCb2R5ID0gKCkgPT4ge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKCk7XG5cdGNvbnN0IFt1c2VyUm9sZSwgc2V0VXNlclJvbGVdID0gdXNlU3RhdGUoW10pO1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IFt1c2VySWRdID0gdXNlU3RvcmFnZSgndXNlcklkJywgYXRvYih3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCAnJykpKTtcblx0Y29uc3QgbG9jYXRpb24gPSB1c2VMb2NhdGlvbigpO1xuXG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBpc0xvYWRpbmcgfSA9IHVzZVF1ZXJ5KFFVRVJZX0tFWVMuQ1VSUkVOVF9VU0VSLCAoKSA9PiBmZXRjaEN1cnJlbnRVc2VyKHsgdXNlcklkIH0pLCB7XG5cdFx0cmV0cnk6IGZhbHNlLFxuXHRcdG9uU3VjY2VzczogKHVzZXIpID0+IHtcblx0XHRcdHNldEN1cnJlbnRVc2VyKHVzZXIpO1xuXHRcdFx0c2V0VXNlclJvbGUoZ2V0Um9sZSh1c2VyKSk7XG5cdFx0fSxcblx0fSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PFN0YXRpY0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyLCB1c2VyUm9sZSB9fT5cblx0XHRcdDxQYWdlTG9hZGVyIHsuLi57IGlzTG9hZGluZyB9fT5cblx0XHRcdFx0PEFuaW1hdGVQcmVzZW5jZSBleGl0QmVmb3JlRW50ZXI+XG5cdFx0XHRcdFx0PFN3aXRjaCBsb2NhdGlvbj17bG9jYXRpb259IGtleT17bG9jYXRpb24ucGF0aG5hbWV9PlxuXHRcdFx0XHRcdFx0ey8qIFJlZGlyZWN0IHRvIC9wcm9qZWN0cyBpZiBhIHVzZXIgaXMgbG9nZ2VkIGluICovfVxuXHRcdFx0XHRcdFx0e2N1cnJlbnRVc2VyICYmIFtST1VURVMubG9naW4sIFJPVVRFUy5zaWdudXBdLmluY2x1ZGVzKGxvY2F0aW9uLnBhdGhuYW1lKSAmJiAoXG5cdFx0XHRcdFx0XHRcdDxSZWRpcmVjdCB0bz17Uk9VVEVTLnByb2plY3RzfSAvPlxuXHRcdFx0XHRcdFx0KX1cblxuXHRcdFx0XHRcdFx0ey8qIFJlZGlyZWN0IHRvIC9sb2dpbiBpZiBhIHVzZXIgaXMgbm90IGxvZ2dlZCBpbiBvbiB0aGUgL3Byb2plY3RzIHJvdXRlICovfVxuXHRcdFx0XHRcdFx0eyFjdXJyZW50VXNlciAmJiBsb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhST1VURVMucHJvamVjdHMpICYmIDxSZWRpcmVjdCB0bz17Uk9VVEVTLmxvZ2lufSAvPn1cblxuXHRcdFx0XHRcdFx0ey8qIFJlbmRlciByb3V0ZXMgKi99XG5cdFx0XHRcdFx0XHR7cm91dGVzLm1hcCgoeyBwYXRoLCBjb21wb25lbnQ6IENvbXBvbmVudCwgcHJvcHMgfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8Um91dGUga2V5PXtwYXRofSBwYXRoPXtwYXRofSBleGFjdD5cblx0XHRcdFx0XHRcdFx0XHR7LyogU2hvdyBkaWZmZXJlbnQgaGVhZGVycyBiYXNlZCBvbiByb3V0ZSAqL31cblx0XHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtwYXRofVxuXHRcdFx0XHRcdFx0XHRcdFx0ey4uLkZBREVfSU59XG5cdFx0XHRcdFx0XHRcdFx0XHR0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjEsIGVhc2U6IFswLjY1LCAwLCAwLjM1LCAxXSB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdHshW1JPVVRFUy5sb2dpbiwgUk9VVEVTLnNpZ251cCwgJ3JldmlldyddLmluY2x1ZGVzKGxvY2F0aW9uLnBhdGhuYW1lKSAmJlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQhbG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoJ3JldmlldycpICYmIDxIZWFkZXJOYXZpZ2F0aW9uIC8+fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHR7LyogUmVuZGVyIHBhZ2UgKi99XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Q29tcG9uZW50IHsuLi57IC4uLnByb3BzLCBjdXJyZW50VXNlciwgdXNlclJvbGUgfX0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdFx0XHRcdDwvUm91dGU+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8L1N3aXRjaD5cblx0XHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0XHQ8L1BhZ2VMb2FkZXI+XG5cblx0XHRcdHsvKiBUb2FzdCAqL31cblx0XHRcdDxUb2FzdENvbnRhaW5lclxuXHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdGhpZGVQcm9ncmVzc0JhcjogdHJ1ZSxcblx0XHRcdFx0XHRuZXdlc3RPblRvcDogdHJ1ZSxcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2JvdHRvbS1sZWZ0Jyxcblx0XHRcdFx0XHRjbG9zZUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdDwvU3RhdGljQ29udGV4dC5Qcm92aWRlcj5cblx0KTtcbn07XG4iLCJjb25zdCBFQVNFID0gWzAuNjUsIDAsIDAuMzUsIDFdO1xuXG5jb25zdCBGQURFX0lOID0ge1xuXHRpbml0aWFsOiB7XG5cdFx0b3BhY2l0eTogMCxcblx0fSxcblx0YW5pbWF0ZToge1xuXHRcdG9wYWNpdHk6IDEsXG5cdH0sXG5cdGV4aXQ6IHtcblx0XHRvcGFjaXR5OiAwLFxuXHR9LFxuXHR0cmFuc2l0aW9uOiB7XG5cdFx0ZWFzZTogRUFTRSxcblx0XHRkdXJhdGlvbjogMC4yLFxuXHR9LFxufTtcblxuY29uc3QgRkFERV9JTl9VUCA9ICh5ID0gMTAwKSA9PiAoe1xuXHRpbml0aWFsOiB7XG5cdFx0eTogeSxcblx0XHRvcGFjaXR5OiAwLFxuXHR9LFxuXHRhbmltYXRlOiB7XG5cdFx0eTogMCxcblx0XHRvcGFjaXR5OiAxLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdHR5cGU6ICdzcHJpbmcnLFxuXHRcdFx0ZGFtcGluZzogNDIsXG5cdFx0XHRzdGlmZm5lc3M6IDgwMCxcblx0XHR9LFxuXHR9LFxuXHRleGl0OiB7XG5cdFx0eTogeSxcblx0XHRvcGFjaXR5OiAwLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdHR5cGU6ICdzcHJpbmcnLFxuXHRcdFx0ZGFtcGluZzogNDIsXG5cdFx0XHRzdGlmZm5lc3M6IDEyMDAsXG5cdFx0fSxcblx0fSxcbn0pO1xuXG5jb25zdCBTQ0FMRV9JTl9VUCA9ICh5ID0gMTAwKSA9PiAoe1xuXHRpbml0aWFsOiB7XG5cdFx0eTogeSxcblx0XHRzY2FsZTogMC41LFxuXHRcdHRyYW5zZm9ybU9yaWdpbjogJzUwJSAxMDAlJyxcblx0XHRvcGFjaXR5OiAwLFxuXHR9LFxuXHRhbmltYXRlOiB7XG5cdFx0eTogMCxcblx0XHRzY2FsZTogMSxcblx0XHRvcGFjaXR5OiAxLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdHR5cGU6ICdzcHJpbmcnLFxuXHRcdFx0ZGFtcGluZzogNDIsXG5cdFx0XHRzdGlmZm5lc3M6IDgwMCxcblx0XHR9LFxuXHR9LFxuXHRleGl0OiB7XG5cdFx0eTogeSxcblx0XHRzY2FsZTogMC41LFxuXHRcdG9wYWNpdHk6IDAsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0Mixcblx0XHRcdHN0aWZmbmVzczogMTIwMCxcblx0XHR9LFxuXHR9LFxufSk7XG5cbmNvbnN0IFRSQU5TRk9STV9VUCA9IHtcblx0aW5pdGlhbDoge1xuXHRcdHk6ICcxMDAlJyxcblx0fSxcblx0YW5pbWF0ZToge1xuXHRcdHk6ICcwJScsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0MSxcblx0XHRcdHN0aWZmbmVzczogNjAwLFxuXHRcdH0sXG5cdH0sXG5cdGV4aXQ6IHtcblx0XHR5OiAnMTAwJScsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0MSxcblx0XHRcdHN0aWZmbmVzczogMTIwMCxcblx0XHR9LFxuXHR9LFxufTtcblxuY29uc3QgU0NBTEVfRkFERSA9IHtcblx0aW5pdGlhbDoge1xuXHRcdHNjYWxlOiAwLFxuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdGFuaW1hdGU6IHtcblx0XHRzY2FsZTogMSxcblx0XHRvcGFjaXR5OiAxLFxuXHR9LFxuXHRleGl0OiB7XG5cdFx0c2NhbGU6IDAsXG5cdFx0b3BhY2l0eTogMCxcblx0fSxcblx0dHJhbnNpdGlvbjoge1xuXHRcdGVhc2U6IEVBU0UsXG5cdFx0ZHVyYXRpb246IDAuMixcblx0fSxcbn07XG5cbmNvbnN0IFNUQUdHRVJfVVAgPSAoaW5kZXggPSAwKSA9PiAoe1xuXHRpbml0aWFsOiB7IG9wYWNpdHk6IDAsIHk6IDM1IH0sXG5cdGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgeTogMCwgdHJhbnNpdGlvbjogeyB0eXBlOiAnc3ByaW5nJywgZGFtcGluZzogMzAsIHN0aWZmbmVzczogNDUwLCBkZWxheTogaW5kZXggKiAwLjAzNSB9IH0sXG5cdGV4aXQ6IHsgb3BhY2l0eTogMCwgc2NhbGU6IDAuMjUsIHRyYW5zaXRpb246IHsgdHlwZTogJ3NwcmluZycsIGRhbXBpbmc6IDMwLCBzdGlmZm5lc3M6IDYwMCB9IH0sXG59KTtcblxuY29uc3QgU1RBR0dFUl9MRUZUID0gKGluZGV4ID0gMCkgPT4gKHtcblx0aW5pdGlhbDogeyBvcGFjaXR5OiAwLCB4OiAxMCB9LFxuXHRhbmltYXRlOiB7IG9wYWNpdHk6IDEsIHg6IDAsIHRyYW5zaXRpb246IHsgdHlwZTogJ3NwcmluZycsIGRhbXBpbmc6IDMwLCBzdGlmZm5lc3M6IDMwMCwgZGVsYXk6IGluZGV4ICogMC4wMzUgfSB9LFxuXHRleGl0OiB7IG9wYWNpdHk6IDAsIHg6IDEwLCB0cmFuc2l0aW9uOiB7IHR5cGU6ICdzcHJpbmcnLCBkYW1waW5nOiAzMCwgc3RpZmZuZXNzOiA2MDAgfSB9LFxufSk7XG5cbmNvbnN0IFNMSURFX0lOID0ge1xuXHRpbml0aWFsOiB7XG5cdFx0eDogJy0xMDAlJyxcblx0fSxcblx0YW5pbWF0ZToge1xuXHRcdHg6ICcwJScsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0ZHVyYXRpb246IDAuMixcblx0XHRcdGVhc2U6IFswLjY1LCAwLCAwLjM1LCAxXSxcblx0XHR9LFxuXHR9LFxuXHRleGl0OiB7XG5cdFx0eDogJy0xMDAlJyxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRkdXJhdGlvbjogMC4xLFxuXHRcdFx0ZWFzZTogWzAuNjUsIDAsIDAuMzUsIDFdLFxuXHRcdH0sXG5cdH0sXG59O1xuXG5leHBvcnQgeyBGQURFX0lOLCBGQURFX0lOX1VQLCBTQ0FMRV9JTl9VUCwgVFJBTlNGT1JNX1VQLCBTQ0FMRV9GQURFLCBTVEFHR0VSX1VQLCBTVEFHR0VSX0xFRlQsIFNMSURFX0lOIH07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBBZGQgY29tbWVudCB8IGV4cGVjdHMgcGhhc2UgaWQsIHVzZXIgaWQgYW5kIGZvcm1SZWYgb2JlY3QgKi9cbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKHsgcGhhc2VJZCwgdXNlcklkLCBjb21tZW50LCBtZW50aW9uZWQsIHBvc2l0aW9uIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5cblx0cGFyYW1zLmFwcGVuZCgndXNlcklkJywgdXNlcklkKTtcblx0cGFyYW1zLmFwcGVuZCgnY29tbWVudCcsIGNvbW1lbnQpO1xuXHRwYXJhbXMuYXBwZW5kKCdwb3NpdGlvblgnLCBwb3NpdGlvbi54UGVyY2VudCk7XG5cdHBhcmFtcy5hcHBlbmQoJ3Bvc2l0aW9uWScsIHBvc2l0aW9uLnlQZXJjZW50KTtcblx0cGFyYW1zLmFwcGVuZCgncmVmZXJlcicsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKCcvJywgJycpKTtcblxuXHRpZiAobWVudGlvbmVkLmxlbmd0aCkge1xuXHRcdHBhcmFtcy5hcHBlbmQoJ21lbnRpb25lZFtdJywgbWVudGlvbmVkKTtcblx0fVxuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvY29tbWVudHMvYWRkLyR7cGhhc2VJZH1gLCBwYXJhbXMpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogQWRkIGNvbW1lbnQgfCBleHBlY3RzIHBoYXNlIGlkLCB1c2VyIGlkIGFuZCBmb3JtUmVmIG9iZWN0ICovXG5leHBvcnQgY29uc3QgYWRkUmVwbHkgPSBhc3luYyAoeyBjb21tZW50SWQsIHJlcGx5LCBtZW50aW9uZWQgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblxuXHRwYXJhbXMuYXBwZW5kKCdyZXBseScsIHJlcGx5KTtcblx0cGFyYW1zLmFwcGVuZCgncmVmZXJlcicsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKCcvJywgJycpKTtcblxuXHRpZiAobWVudGlvbmVkLmxlbmd0aCkge1xuXHRcdHBhcmFtcy5hcHBlbmQoJ21lbnRpb25lZFtdJywgbWVudGlvbmVkKTtcblx0fVxuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvY29tbWVudHMvcmVwbHkvJHtjb21tZW50SWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL3NlY3VyaXR5JztcbmV4cG9ydCAqIGZyb20gJy4vcHJvamVjdCc7XG5leHBvcnQgKiBmcm9tICcuL3Byb2plY3RJbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXInO1xuZXhwb3J0ICogZnJvbSAnLi9jb21tZW50JztcbmV4cG9ydCAqIGZyb20gJy4vcGhhc2UnO1xuXG5leHBvcnQgY29uc3QgUVVFUllfS0VZUyA9IHtcblx0Q1VSUkVOVF9VU0VSOiAnY3VycmVudF91c2VyJyxcblx0UFJPSkVDVF9CWV9VU0VSOiAncHJvamVjdF9ieV91c2VyJyxcblx0UFJPSkVDVF9CWV9JRDogJ3Byb2plY3RfYnlfaWQnLFxuXHRQUk9KRUNUX0lNQUdFX0JZX0lEOiAncHJvamVjdF9pbWFnZV9ieV9pZCcsXG5cdEdMT0JBTF9VU0VSUzogJ2dsb2JhbF91c2VycycsXG5cdFBST0pFQ1RfVVNFUlM6ICdwcm9qZWN0X3VzZXJzJyxcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBOZXh0IHBoYXNlIHwgZXhwZWN0cyBwaGFzZSBpZCBhbmQgaW1hZ2UgKGJsb2IpICovXG5leHBvcnQgY29uc3QgbmV4dFBoYXNlID0gYXN5bmMgKHsgcGhhc2VJZCwgaW1hZ2VzIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5cblx0aW1hZ2VzLmZvckVhY2goKGltYWdlLCBpbWFnZUluZGV4KSA9PiB7XG5cdFx0cGFyYW1zLmFwcGVuZChgaW1hZ2VzWyR7aW1hZ2VJbmRleH1dW29yaWdpbmFsXWAsIGltYWdlLm9yaWdpbmFsKTtcblx0XHRwYXJhbXMuYXBwZW5kKGBpbWFnZXNbJHtpbWFnZUluZGV4fV1bdGh1bWJuYWlsXWAsIGltYWdlLnRodW1ibmFpbCk7XG5cdFx0cGFyYW1zLmFwcGVuZChgaW1hZ2VzWyR7aW1hZ2VJbmRleH1dW3RodW1ibmFpbFJldGluYV1gLCBpbWFnZS50aHVtYm5haWxSZXRpbmEpO1xuXHR9KTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3BoYXNlL25leHQvJHtwaGFzZUlkfWAsIHBhcmFtcyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLyogRmV0Y2ggcHJvamVjdHMgYnkgdXNlciB8IGV4cGVjdHMgdXNlciBpZCAqL1xuZXhwb3J0IGNvbnN0IGZldGNoUHJvamVjdHNCeVVzZXIgPSBhc3luYyAoeyB1c2VySWQgfSkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcHJvamVjdHMvZ2V0LyR7dXNlcklkfWApO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRmV0Y2ggcHJvamVjdHMgYnkgaWQgfCBleHBlY3RzIHByb2plY3QgaWQgKi9cbmV4cG9ydCBjb25zdCBmZXRjaFByb2plY3RCeUlkID0gYXN5bmMgKHsgcHJvamVjdElkIH0pID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2plY3QvZ2V0LyR7cHJvamVjdElkfWApO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogQWRkIHByb2plY3QgKi9cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0ID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3Byb2plY3RzL2FkZCcpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRGVsZXRlIHByb2plY3QocykgfCBleHBlY3RzIGFycmF5IG9mIHByb2plY3RJZHMgICovXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvamVjdHMgPSBhc3luYyAoeyBwcm9qZWN0SWRzIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5cdHByb2plY3RJZHMuZm9yRWFjaCgoaWQpID0+IHBhcmFtcy5hcHBlbmQoJ3Byb2plY3RzW10nLCBpZCkpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvcHJvamVjdHMvZGVsZXRlYCwgcGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogTGVhdmUgcHJvamVjdChzKSB8IGV4cGVjdHMgYXJyYXkgb2YgcHJvamVjdElkcyBhbmQgdXNlciBpZCAgKi9cbmV4cG9ydCBjb25zdCBsZWF2ZVByb2plY3RzID0gYXN5bmMgKHsgcHJvamVjdElkcywgdXNlcklkIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5cdHByb2plY3RJZHMuZm9yRWFjaCgoaWQpID0+IHBhcmFtcy5hcHBlbmQoJ3Byb2plY3RzW10nLCBpZCkpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvcHJvamVjdHMvbGVhdmUvJHt1c2VySWR9YCwgcGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRWRpdCBwcm9qZWN0IHwgZXhwZWN0cyBmb3JtRGF0YSBvYmplY3QgYW5kIHByb2plY3QgaWQgICovXG5leHBvcnQgY29uc3QgZWRpdFByb2plY3QgPSBhc3luYyAoeyBmb3JtUmVmLCBpZCB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvcHJvamVjdHMvZWRpdC8ke2lkfWAsIHBhcmFtcyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLyogRmV0Y2ggcHJvamVjdEltYWdlIGJ5IGlkIHwgZXhwZWN0cyBwcm9qZWN0IGltYWdlIGlkIGFuZCBvcHRpb25hbCBwaGFzZUlkICovXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9qZWN0SW1hZ2VCeUlkID0gYXN5bmMgKHsgcHJvamVjdEltYWdlSWQsIHBoYXNlSWQgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBwaGFzZUlkID8geyBwYXJhbXM6IHsgcGhhc2U6IHBoYXNlSWQgfSB9IDoge307XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL2ltYWdlcy9nZXQvJHtwcm9qZWN0SW1hZ2VJZH1gLCB7IC4uLnBhcmFtcyB9KTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIEFkZCBwcm9qZWN0SW1hZ2UocykgfCBleHBlY3RzIHByb2plY3QgaWQgYW5kIGFycmF5IG9mIGltYWdlcyAoYmxvYikgKi9cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0SW1hZ2VzID0gYXN5bmMgKHsgcHJvamVjdElkLCBpbWFnZXMgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblx0aW1hZ2VzLmZvckVhY2goKGltYWdlLCBpbWFnZUluZGV4KSA9PiB7XG5cdFx0cGFyYW1zLmFwcGVuZChgaW1hZ2VzWyR7aW1hZ2VJbmRleH1dW29yaWdpbmFsXWAsIGltYWdlLm9yaWdpbmFsKTtcblx0XHRwYXJhbXMuYXBwZW5kKGBpbWFnZXNbJHtpbWFnZUluZGV4fV1bdGh1bWJuYWlsXWAsIGltYWdlLnRodW1ibmFpbCk7XG5cdFx0cGFyYW1zLmFwcGVuZChgaW1hZ2VzWyR7aW1hZ2VJbmRleH1dW3RodW1ibmFpbFJldGluYV1gLCBpbWFnZS50aHVtYm5haWxSZXRpbmEpO1xuXHR9KTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2ltYWdlcy9hZGQvJHtwcm9qZWN0SWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIERlbGV0ZSBwcm9qZWN0SW1hZ2UocykgfCBleHBlY3RzIHByb2plY3QgaWQgYW5kIGFycmF5IG9mIHByb2plY3RJbWFnZUlkcyAgKi9cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9qZWN0SW1hZ2VzID0gYXN5bmMgKHsgcHJvamVjdElkLCBwcm9qZWN0SW1hZ2VJZHMgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblx0cHJvamVjdEltYWdlSWRzLmZvckVhY2goKGlkKSA9PiBwYXJhbXMuYXBwZW5kKCdwcm9qZWN0SW1hZ2VzW10nLCBpZCkpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvaW1hZ2VzL2RlbGV0ZS8ke3Byb2plY3RJZH1gLCBwYXJhbXMpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRWRpdCBwcm9qZWN0SW1hZ2UgfCBleHBlY3RzIGZvcm1SZWYgb2JqZWN0IGFuZCBwcm9qZWN0SW1hZ2UgaWQgICovXG5leHBvcnQgY29uc3QgZWRpdFByb2plY3RJbWFnZSA9IGFzeW5jICh7IGZvcm1SZWYsIGlkIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKGZvcm1SZWYuY3VycmVudCk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9pbWFnZXMvZWRpdC8ke2lkfWAsIHBhcmFtcyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLyogU2lnbnVwIHRvIHBsYXRmb3JtIHwgZXhwZWN0cyBmb3JtUmVmIG9iamVjdCBhbmQgb3B0aW9uYWwgdXNlcklkICovXG5leHBvcnQgY29uc3Qgc2lnbnVwID0gYXN5bmMgKHsgZm9ybVJlZiwgdXNlcklkIH0pID0+IHtcblx0bGV0IHVybCA9ICcvYXBpL3NpZ251cCc7XG5cdGlmICh1c2VySWQpIHVybCA9IGAvYXBpL3NpZ251cC8ke3VzZXJJZH1gO1xuXG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KHVybCwgcGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogTG9naW4gdG8gcGxhdGZvcm0gfCBleHBlY3RzIGZvcm1SZWYgb2JqZWN0ICovXG5leHBvcnQgY29uc3QgbG9naW4gPSBhc3luYyAoeyBmb3JtUmVmIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKGZvcm1SZWYuY3VycmVudCk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIHtcblx0XHRlbWFpbDogcGFyYW1zLmdldCgnZW1haWwnKSxcblx0XHRwYXNzd29yZDogcGFyYW1zLmdldCgncGFzc3dvcmQnKSxcblx0fSk7XG5cblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIExvZ291dCBmcm9tIHBsYXRmb3JtICovXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvbG9nb3V0Jyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLyogRmV0Y2ggY3VycmVudCAobG9nZ2VkIGluKSB1c2VyIHwgZXhwZWN0cyB1c2VyIGlkICovXG5leHBvcnQgY29uc3QgZmV0Y2hDdXJyZW50VXNlciA9IGFzeW5jICh7IHVzZXJJZCB9KSA9PiB7XG5cdGxldCB1cmwgPSAnL2FwaS91c2Vycy9nZXQnO1xuXHRpZiAodXNlcklkKSB1cmwgPSBgJHt1cmx9LyR7dXNlcklkfWA7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBGZXRjaCBhbGwgdXNlcnMgaW4gZGIgKi9cbmV4cG9ydCBjb25zdCBmZXRjaEdvYmFsVXNlcnMgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS91c2Vycy9nZXQvYWxsJyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBGZXRjaCBwcm9qZWN0IHVzZXJzICovXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9qZWN0VXNlcnMgPSBhc3luYyAoeyBwcm9qZWN0SWQgfSkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvdXNlcnMvZ2V0L3Byb2plY3QvJHtwcm9qZWN0SWR9YCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBBZGQgdXNlciB0byBwcm9qZWN0IHwgZXhwZWN0cyBwcm9qZWN0IGlkIGFuZCB1c2VyIGVtYWlsICovXG5leHBvcnQgY29uc3QgYWRkVXNlciA9IGFzeW5jICh7IHByb2plY3RJZCwgZW1haWwgfSkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3VzZXJzL2FkZC8ke3Byb2plY3RJZH1gLCB7XG5cdFx0ZW1haWw6IGVtYWlsLFxuXHRcdHJlZmVyZXI6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKCcvJywgJycpLFxuXHR9KTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIERlbGV0ZSB1c2VyIGZyb20gcHJvamVjdCB8IGV4cGVjdHMgcHJvamVjdCBpZCBhbmQgdXNlciBpZCAqL1xuZXhwb3J0IGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAoeyBwcm9qZWN0SWQsIHVzZXJJZCB9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvdXNlcnMvZGVsZXRlLyR7cHJvamVjdElkfWAsIHsgdXNlcklkIH0pO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBMb2FkaW5nV3JhcHBlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBUUkFOU0ZPUk1fVVAgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gJ2ljb25zL2Nsb3NlLnN2Zyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY3Rpb25NZW51KHsgc2VsZWN0ZWQsIHJlc2V0U2VsZWN0ZWQsIGFjdGlvbnMgfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2IHsuLi5UUkFOU0ZPUk1fVVB9IGNsYXNzTmFtZT1cImJhciBiYXItLXByb2plY3RcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJiYXJfX2J0biBidG4gYnRuLWxpbmsgZC1pbmxpbmUtZmxleCB0ZXh0LXdoaXRlXCJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17cmVzZXRTZWxlY3RlZH0+XG5cdFx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtbC0yIG1iLTBcIj57c2VsZWN0ZWQubGVuZ3RofSBzZWxlY3RlZDwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIG1sLWF1dG9cIj5cblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJiYXJfX2xpc3QgbGlzdCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdHthY3Rpb25zLm1hcChcblx0XHRcdFx0XHRcdFx0XHQoXG5cdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGVtZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGFzUGVybWlzc2lvbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvblNpemUgPSAxMixcblx0XHRcdFx0XHRcdFx0XHRcdFx0bXV0YXRpb24gPSAoKSA9PiB7fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0aXNMb2FkaW5nID0gZmFsc2UsXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0YWN0aW9uSW5kZXhcblx0XHRcdFx0XHRcdFx0XHQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChoYXNQZXJtaXNzaW9uLmluY2x1ZGVzKHVzZXJSb2xlKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxsaSBrZXk9e2FjdGlvbkluZGV4fSBjbGFzc05hbWU9XCJsaXN0X19pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJhcl9fYnRuIGJ0biBidG4tbGluayBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHRleHQtZGVjb3JhdGlvbi1ub25lXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17bXV0YXRpb259PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0tJHt0aGVtZX0gaWNvbi13cmFwcGVyLS1pbnRlcmFjdGl2ZWB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMb2FkaW5nV3JhcHBlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9hZGluZz17aXNMb2FkaW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9hZGVyU2l6ZT17MTJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc2VzPXt7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvYWRlckNsYXNzZXM6IGBwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXggdGV4dC0ke3RoZW1lfWAsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxSZWFjdFNWR1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3cmFwcGVyPVwic3ZnXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgaWNvbiBpY29uLS0ke2ljb25TaXplfSB0ZXh0LSR7dGhlbWV9YH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtpY29ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xvYWRpbmdXcmFwcGVyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYnRuX190ZXh0IHRleHQtd2hpdGUgbWwtMlwiPnt0aXRsZX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS13aGl0ZS5zdmcnO1xuaW1wb3J0IHdhcm5pbmdJY29uIGZyb20gJ2ljb25zL3dhcm5pbmcuc3ZnJztcbmltcG9ydCBlcnJvckljb24gZnJvbSAnaWNvbnMvZGFuZ2VyLnN2Zyc7XG5pbXBvcnQgc3VjY2Vzc0ljb24gZnJvbSAnaWNvbnMvc3VjY2Vzcy5zdmcnO1xuXG4vKiBHbG9iYWwgKi9cbmNvbnN0IGFwcGVhcmFuY2VUeXBlcyA9IHtcblx0d2FybmluZzoge1xuXHRcdHRpdGxlOiAnV2FybmluZycsXG5cdFx0aWNvbjogd2FybmluZ0ljb24sXG5cdH0sXG5cdGRhbmdlcjoge1xuXHRcdHRpdGxlOiAnRXJyb3InLFxuXHRcdGljb246IGVycm9ySWNvbixcblx0fSxcblx0c3VjY2Vzczoge1xuXHRcdHRpdGxlOiAnU3VjY2VzcycsXG5cdFx0aWNvbjogc3VjY2Vzc0ljb24sXG5cdH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGVydCh7IG1lc3NhZ2UsIGFwcGVhcmFuY2UsIGNsb3NlVG9hc3QgfSkge1xuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0IGFsZXJ0LS1ub3RpZmljYXRpb25cIiByb2xlPVwiYWxlcnRcIiBkYXRhLWFsZXJ0PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHctMTAwXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgYWxlcnRfX2ljb24td3JhcHBlciBhbGVydF9faWNvbi13cmFwcGVyLS0ke2FwcGVhcmFuY2V9IG1yLTJgfT5cblx0XHRcdFx0XHQ8UmVhY3RTVkdcblx0XHRcdFx0XHRcdHdyYXBwZXI9XCJzdmdcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYWxlcnRfX2ljb24gaWNvbiBpY29uLS0xMlwiXG5cdFx0XHRcdFx0XHRzcmM9e2FwcGVhcmFuY2VUeXBlc1thcHBlYXJhbmNlXS5pY29ufVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi0wXCI+e2FwcGVhcmFuY2VUeXBlc1thcHBlYXJhbmNlXS50aXRsZX08L3A+XG5cdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYWxlcnRfX2J0biBidG4gYnRuLWxpbmsgbWwtYXV0b1wiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjbG9zZVRvYXN0fT5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTBcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImFsZXJ0X19tZXNzYWdlIHRleHQtLXNtIHRleHQtbXV0ZWQtLTcwIG1yLWxnLThcIj57bWVzc2FnZX08L3NwYW4+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYmcgZnJvbSAnaW1hZ2VzL2JhY2tncm91bmQtbG9naW4uanBnJztcbmltcG9ydCBiZ1JldGluYSBmcm9tICdpbWFnZXMvYmFja2dyb3VuZC1sb2dpbkAyeC5qcGcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYWNrZ3JvdW5kKCkge1xuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cblx0XHRcdDxpbWcgY2xhc3NOYW1lPVwiYmFja2dyb3VuZF9faW1hZ2VcIiBzcmM9e2JnfSBzcmNTZXQ9e2JnUmV0aW5hfSBhbHQ9XCJCYWNrZ3JvdW5kXCIgLz5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIHthY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBMb2FkaW5nV3JhcHBlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjaGVja0ljb24gZnJvbSAnaWNvbnMvY2hlY2stY2lyY2xlLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbih7XG5cdHRpdGxlLFxuXHR0eXBlID0gJ2J1dHRvbicsXG5cdHRoZW1lID0gJ3NlY29uZGFyeScsXG5cdHNpemUgPSAnc20nLFxuXHRleHRlbnNpb25DbGFzc2VzID0gJycsXG5cdG9uQ2xpY2sgPSAoKSA9PiB7fSxcblx0aXNMb2FkaW5nID0gZmFsc2UsXG5cdGNvbnRlbnRUeXBlID0gJ3RleHQnLFxuXHRjaGlsZHJlbixcbn0pIHtcblx0LyogUmVmcyAqL1xuXHRjb25zdCBidXR0b25SZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgYnV0dG9uSGVpZ2h0ID0gYnV0dG9uUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8YnV0dG9uXG5cdFx0XHRyZWY9e2J1dHRvblJlZn1cblx0XHRcdGNsYXNzTmFtZT17YGJ0biBidG4tJHtzaXplfSBidG4tJHt0aGVtZX0gJHtleHRlbnNpb25DbGFzc2VzfSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyYH1cblx0XHRcdHN0eWxlPXt7IGhlaWdodDogYnV0dG9uSGVpZ2h0IH19XG5cdFx0XHR7Li4ueyB0eXBlLCBvbkNsaWNrIH19PlxuXHRcdFx0e2NvbnRlbnRUeXBlID09PSAndGV4dCcgPyA8VGV4dCB7Li4ueyB0aXRsZSwgaXNMb2FkaW5nLCBjaGlsZHJlbiB9fSAvPiA6IDxJY29uIHsuLi57IGlzTG9hZGluZyB9fSAvPn1cblx0XHQ8L2J1dHRvbj5cblx0KTtcbn1cblxuY29uc3QgVGV4dCA9ICh7IHRpdGxlLCBpc0xvYWRpbmcsIGNoaWxkcmVuIH0pID0+IChcblx0PExvYWRpbmdXcmFwcGVyXG5cdFx0bG9hZGluZz17aXNMb2FkaW5nfVxuXHRcdGxvYWRlclNpemU9ezE2fVxuXHRcdGNsYXNzZXM9e3tcblx0XHRcdGxvYWRlckNsYXNzZXM6ICdwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXggdGV4dC1zZWNvbmRhcnknLFxuXHRcdFx0ZGVmYXVsdENsYXNzZXM6ICdkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyJyxcblx0XHR9fT5cblx0XHR7Y2hpbGRyZW59XG5cdFx0PHNwYW4gY2xhc3NOYW1lPVwiYnRuX190ZXh0XCI+e3RpdGxlfTwvc3Bhbj5cblx0PC9Mb2FkaW5nV3JhcHBlcj5cbik7XG5cbmNvbnN0IEljb24gPSAoeyBpc0xvYWRpbmcgfSkgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT1cImljb24td3JhcHBlciBpY29uLXdyYXBwZXItLXNlY29uZGFyeSBpY29uLXdyYXBwZXItLWludGVyYWN0aXZlXCI+XG5cdFx0PExvYWRpbmdXcmFwcGVyXG5cdFx0XHRsb2FkaW5nPXtpc0xvYWRpbmd9XG5cdFx0XHRsb2FkZXJTaXplPXsxNH1cblx0XHRcdGNsYXNzZXM9e3sgbG9hZGVyQ2xhc3NlczogJ3Bvc2l0aW9uLWFic29sdXRlIGQtZmxleCB0ZXh0LXNlY29uZGFyeScsIGRlZmF1bHRDbGFzc2VzOiAnZC1mbGV4JyB9fT5cblx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiYWxlcnRfX2ljb24gaWNvbiBpY29uLS0xNCB0ZXh0LXNlY29uZGFyeVwiIHNyYz17Y2hlY2tJY29ufSAvPlxuXHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdDwvZGl2PlxuKTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tICdyZWFjdC1kcm9wem9uZSc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBMb2FkaW5nV3JhcHBlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBTZXJ2aWNlcyAqL1xuaW1wb3J0IHsgcmVzaXplSW1hZ2VzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTQ0FMRV9GQURFLCBGQURFX0lOIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZEltYWdlSWNvbiBmcm9tICdpY29ucy9hZGRfaW1hZ2Uuc3ZnJztcbmltcG9ydCB1cGxvYWRJbWFnZUljb24gZnJvbSAnaWNvbnMvdXBsb2FkLnN2Zyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgYWRkUHJvamVjdEltYWdlcywgZGVsZXRlUHJvamVjdEltYWdlcywgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3B6b25lKHsgcHJvamVjdElkLCBwb3NpdGl0aW9uID0gJ2xlZnQnLCBjaGlsZHJlbiB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHRjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcywgaXNEcmFnQWN0aXZlIH0gPSB1c2VEcm9wem9uZSh7XG5cdFx0YWNjZXB0OiAnaW1hZ2UvKicsXG5cdFx0bm9DbGljazogdHJ1ZSxcblx0XHRvbkRyb3A6IChhY2NlcHRlZEZpbGVzKSA9PiB1cGRhdGVQcm9qZWN0SW1hZ2VzKCdhZGQnLCB7IGltYWdlczogYWNjZXB0ZWRGaWxlcyB9KSxcblx0fSk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGFkZFByb2plY3RJbWFnZXNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZFByb2plY3RJbWFnZXMsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0pLFxuXHR9KTtcblxuXHRjb25zdCBkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVQcm9qZWN0SW1hZ2VzLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKSxcblx0fSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHVwZGF0ZVByb2plY3RJbWFnZXMgPSBhc3luYyAoYWN0aW9uLCBwcm9wcykgPT4ge1xuXHRcdGlmIChhY3Rpb24gPT09ICdhZGQnICYmIHByb3BzLmltYWdlcykge1xuXHRcdFx0Y29uc3QgcmVzaXplZEltYWdlcyA9IGF3YWl0IHJlc2l6ZUltYWdlcyhwcm9wcy5pbWFnZXMpO1xuXG5cdFx0XHRhZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkLCBpbWFnZXM6IHJlc2l6ZWRJbWFnZXMgfSk7XG5cdFx0fVxuXG5cdFx0aWYgKGFjdGlvbiA9PT0gJ2RlbGV0ZScpIGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQsIC4uLnByb3BzIH0pO1xuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZHJvcHpvbmVcIiB7Li4uZ2V0Um9vdFByb3BzKCl9PlxuXHRcdFx0PGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG5cdFx0XHQ8RHJvcHpvbmVJbm5lclxuXHRcdFx0XHRhZGRJbWFnZUxvYWRpbmc9e2FkZFByb2plY3RJbWFnZXNNdXRhdGlvbi5pc0xvYWRpbmd9XG5cdFx0XHRcdHsuLi57IHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzUGFyZW50RHJhZ0FjdGl2ZTogaXNEcmFnQWN0aXZlLCBwb3NpdGl0aW9uIH19XG5cdFx0XHQvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LS1lcXVhbGl6ZWQgZ3V0dGVycy01XCI+XG5cdFx0XHRcdHtjaGlsZHJlbih7IHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzTG9hZGluZzogZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uLmlzTG9hZGluZyB9KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG4vKiBJbm5lciBkcm9wem9uZSAqL1xuY29uc3QgRHJvcHpvbmVJbm5lciA9ICh7IGFkZEltYWdlTG9hZGluZywgdXBkYXRlUHJvamVjdEltYWdlcywgaXNQYXJlbnREcmFnQWN0aXZlLCBwb3NpdGl0aW9uIH0pID0+IHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSB9ID0gdXNlRHJvcHpvbmUoe1xuXHRcdGFjY2VwdDogJ2ltYWdlLyonLFxuXHRcdG5vRHJhZ0V2ZW50c0J1YmJsaW5nOiB0cnVlLFxuXHRcdG9uRHJvcDogKGFjY2VwdGVkRmlsZXMpID0+IHVwZGF0ZVByb2plY3RJbWFnZXMoJ2FkZCcsIHsgaW1hZ2VzOiBhY2NlcHRlZEZpbGVzIH0pLFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3B6b25lXCIgey4uLmdldFJvb3RQcm9wcygpfT5cblx0XHRcdDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0eyhpc0RyYWdBY3RpdmUgfHwgaXNQYXJlbnREcmFnQWN0aXZlKSAmJiAoXG5cdFx0XHRcdFx0PG1vdGlvbi5kaXYgey4uLkZBREVfSU59IGNsYXNzTmFtZT1cImRyb3B6b25lX19vdmVybGF5XCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImljb24td3JhcHBlciBpY29uLXdyYXBwZXItLXNlY29uZGFyeVwiIHN0eWxlPXt7ICctLXNpemUnOiA3NSB9fT5cblx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTMwIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXt1cGxvYWRJbWFnZUljb259IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDxtb3Rpb24uYnV0dG9uXG5cdFx0XHRcdHsuLi5TQ0FMRV9GQURFfVxuXHRcdFx0XHRrZXk9XCJhZGQtcHJvamVjdFwiXG5cdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRjbGFzc05hbWU9e2BpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1pbnRlcmFjdGl2ZSBpY29uLXdyYXBwZXItLXNlY29uZGFyeSBidG4gYnRuLWxpbmsgYnRuLS1hZGQgYnRuLS1hZGQtJHtwb3NpdGl0aW9ufWB9XG5cdFx0XHRcdHN0eWxlPXt7ICctLXNpemUnOiA3NSB9fT5cblx0XHRcdFx0PExvYWRpbmdXcmFwcGVyXG5cdFx0XHRcdFx0bG9hZGluZz17YWRkSW1hZ2VMb2FkaW5nfVxuXHRcdFx0XHRcdGNsYXNzZXM9e3sgbG9hZGVyQ2xhc3NlczogJ3Bvc2l0aW9uLWFic29sdXRlIGQtZmxleCB0ZXh0LXNlY29uZGFyeScgfX1cblx0XHRcdFx0XHRsb2FkZXJTaXplPXszMH0+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTMwIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXthZGRJbWFnZUljb259IC8+XG5cdFx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0XHQ8L21vdGlvbi5idXR0b24+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tICdyZWFjdC1kcm9wem9uZSc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZEltYWdlSWNvbiBmcm9tICdpY29ucy9hZGRfaW1hZ2Uuc3ZnJztcbmltcG9ydCB1cGxvYWRJbWFnZUljb24gZnJvbSAnaWNvbnMvdXBsb2FkLnN2Zyc7XG5pbXBvcnQgY2xvc2VJY29uIGZyb20gJ2ljb25zL2Nsb3NlLnN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnLi4vJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiwgU0NBTEVfRkFERSB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBTZXJ2aWNlcyAqL1xuaW1wb3J0IHsgcmVzaXplSW1hZ2VzIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wem9uZVNpbmdsZSh7IGltYWdlczogW2ltYWdlXSwgc2V0SW1hZ2VzIH0pIHtcblx0Y29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSB9ID0gdXNlRHJvcHpvbmUoe1xuXHRcdGFjY2VwdDogJ2ltYWdlLyonLFxuXHRcdG1heEZpbGVzOiAxLFxuXHRcdG9uRHJvcDogYXN5bmMgKGFjY2VwdGVkRmlsZXMpID0+IHtcblx0XHRcdGNvbnN0IHJlc2l6ZWRJbWFnZXMgPSBhd2FpdCByZXNpemVJbWFnZXMoYWNjZXB0ZWRGaWxlcyk7XG5cdFx0XHRzZXRJbWFnZXMocmVzaXplZEltYWdlcyk7XG5cdFx0fSxcblx0fSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZSBkcm9wem9uZS0tc2luZ2xlIG10LTJcIiB7Li4uZ2V0Um9vdFByb3BzKCl9PlxuXHRcdFx0PGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfSBleGl0QmVmb3JlRW50ZXI+XG5cdFx0XHRcdHshaW1hZ2UgJiYgKFxuXHRcdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0XHR7Li4uU0NBTEVfRkFERX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImljb24td3JhcHBlciBpY29uLXdyYXBwZXItLWludGVyYWN0aXZlIGljb24td3JhcHBlci0tc2Vjb25kYXJ5XCJcblx0XHRcdFx0XHRcdHN0eWxlPXt7ICctLXNpemUnOiA0NCB9fT5cblx0XHRcdFx0XHRcdHtpc0RyYWdBY3RpdmUgPyAoXG5cdFx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2IGtleT1cInVwbG9hZFwiIHsuLi5TQ0FMRV9GQURFfT5cblx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkdcblx0XHRcdFx0XHRcdFx0XHRcdHdyYXBwZXI9XCJzdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaWNvbiBpY29uLS0yMCB0ZXh0LXNlY29uZGFyeVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRzcmM9e3VwbG9hZEltYWdlSWNvbn1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdiBrZXk9XCJhZGRcIiB7Li4uU0NBTEVfRkFERX0+XG5cdFx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTIwIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXthZGRJbWFnZUljb259IC8+XG5cdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0XHR7aW1hZ2UgJiYgKFxuXHRcdFx0XHRcdDxtb3Rpb24uZGl2IGtleT1cImNvbnRhaW5lclwiIHsuLi5GQURFX0lOfSBjbGFzc05hbWU9XCJkcm9wem9uZV9fY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZHJvcHpvbmVfX2ltYWdlXCJcblx0XHRcdFx0XHRcdFx0c3JjPXtpbWFnZS50aHVtYm5haWwucHJldmlld31cblx0XHRcdFx0XHRcdFx0c3JjU2V0PXtgJHtpbWFnZS50aHVtYm5haWxSZXRpbmEucHJldmlld30gMnhgfVxuXHRcdFx0XHRcdFx0XHRhbHQ9e2ltYWdlLnRodW1ibmFpbC5uYW1lfVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBkcm9wem9uZV9faW1hZ2UtZGVsZXRlIHAtMFwiXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0XHRcdHNldEltYWdlcyhbXSk7XG5cdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZHJvcHpvbmVfX2ltYWdlLWRlbGV0ZS1pY29uIGljb24td3JhcHBlciBpY29uLXdyYXBwZXItLWRhbmdlciBteC1hdXRvXCJcblx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyAnLS1zaXplJzogNTAgfX0+XG5cdFx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTE0IHRleHQtZGFuZ2VyIG10LTBcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IEVkaXRhYmxlQm9keSBmcm9tICcuL0VkaXRhYmxlQm9keSc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGVkaXRJY29uIGZyb20gJ2ljb25zL2VkaXQuc3ZnJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9tYWluQ29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRhYmxlKHsgdGl0bGUsIHN1YnRpdGxlID0gJ1NhdmUgd2hlbiByZWFkeScsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHNldE1vZGFsT3BlbighbW9kYWxPcGVuKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVkaXRhYmxlIGQtZmxleCBhbGlnbi1pdGVtcy1iYXNlbGluZSBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJlZGl0YWJsZV9fY29udGVudFwiPntjaGlsZHJlbn08L2Rpdj5cblx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiAoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZWRpdGFibGVfX3RvZ2dsZSBidG4gYnRuLWxpbmsgaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0tc2Vjb25kYXJ5IGljb24td3JhcHBlci0taW50ZXJhY3RpdmUgc3RyZXRjaGVkLWxpbmsgbWwtM1wiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVNb2RhbH1cblx0XHRcdFx0XHRcdHN0eWxlPXt7ICctLXNpemUnOiAyNSB9fT5cblx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xMCB0ZXh0LXNlY29uZGFyeVwiIHNyYz17ZWRpdEljb259IC8+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PE1vZGFsIHsuLi57IHRpdGxlLCBzdWJ0aXRsZSwgbW9kYWxPcGVuLCB0b2dnbGVNb2RhbCB9fT5cblx0XHRcdFx0XHRcdDxFZGl0YWJsZUJvZHkgey4uLnsgdG9nZ2xlTW9kYWwsIC4uLnJlc3QgfX0gLz5cblx0XHRcdFx0XHQ8L01vZGFsPlxuXHRcdFx0XHQ8Lz5cblx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFRleHRhcmVhQXV0b3NpemUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIEVsZW1lbnRzICovXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogU2VydmljZXMgKi9cbmltcG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdGFibGVCb2R5KHsgZmllbGRzLCB0b2dnbGVNb2RhbCwgbXV0YXRpb24sIG11dGF0aW9uSWQsIG11dGF0aW9uT25TdWNjZXNzIH0pIHtcblx0LyogUmVmcyAqL1xuXHRjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGVkaXRNdXRhdGlvbiA9IHVzZU11dGF0aW9uKG11dGF0aW9uLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHRtdXRhdGlvbk9uU3VjY2VzcygpO1xuXHRcdFx0dG9nZ2xlTW9kYWwoKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8Zm9ybVxuXHRcdFx0cmVmPXtmb3JtUmVmfVxuXHRcdFx0Y2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LWdyb3ctMSBwb3NpdGlvbi1yZWxhdGl2ZVwiXG5cdFx0XHRvblN1Ym1pdD17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGVkaXRNdXRhdGlvbi5tdXRhdGUoeyBmb3JtUmVmLCBpZDogbXV0YXRpb25JZCB9KTtcblx0XHRcdH19PlxuXHRcdFx0e2ZpZWxkcy5tYXAoKGZpZWxkLCBmaWVsZEluZGV4KSA9PiB7XG5cdFx0XHRcdHJldHVybiA8RmllbGQga2V5PXtmaWVsZEluZGV4fSB7Li4ueyAuLi5maWVsZCwgc2hvdWxkRm9jdXM6IGZpZWxkSW5kZXggPT09IDAgfX0gLz47XG5cdFx0XHR9KX1cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHR0aXRsZTogJ1NhdmUnLFxuXHRcdFx0XHRcdGNvbnRlbnRUeXBlOiBmaWVsZHMubGVuZ3RoID09PSAxID8gJ2ljb24nIDogJ3RleHQnLFxuXHRcdFx0XHRcdGV4dGVuc2lvbkNsYXNzZXM6IGZpZWxkcy5sZW5ndGggPT09IDEgPyAnZm9ybS1jb250cm9sLWJ0bicgOiAndy01MCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTMnLFxuXHRcdFx0XHRcdHRoZW1lOiBmaWVsZHMubGVuZ3RoID09PSAxID8gJ2RlZmF1bHQnIDogJ3NlY29uZGFyeScsXG5cdFx0XHRcdFx0aXNMb2FkaW5nOiBlZGl0TXV0YXRpb24uaXNMb2FkaW5nLFxuXHRcdFx0XHRcdHR5cGU6ICdzdWJtaXQnLFxuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHQ8L2Zvcm0+XG5cdCk7XG59XG5cbmNvbnN0IEZpZWxkID0gKHsgbmFtZSwgZGVmYXVsdFZhbHVlLCBzaG91bGRGb2N1cyA9IGZhbHNlIH0pID0+IHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShkZWZhdWx0VmFsdWUpO1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBFZmZlY3RzICovXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGlucHV0UmVmPy5jdXJyZW50ICYmIHNob3VsZEZvY3VzKSBpbnB1dFJlZj8uY3VycmVudD8uc2VsZWN0KCk7XG5cdH0sIFtdKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPXtuYW1lfT5cblx0XHRcdFx0e25hbWV9XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdFx0PFRleHRhcmVhQXV0b3NpemVcblx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC0tdGV4dFwiXG5cdFx0XHRcdGlkPXtuYW1lfVxuXHRcdFx0XHRuYW1lPXtuYW1lfVxuXHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdHZhbHVlPXt2YWx1ZX1cblx0XHRcdFx0b25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHNldFZhbHVlKHZhbHVlKX1cblx0XHRcdFx0cmVmPXtpbnB1dFJlZn1cblx0XHRcdFx0cGxhY2Vob2xkZXI9e2NhcGl0YWxpemVGaXJzdExldHRlcihuYW1lKX1cblx0XHRcdFx0b25Gb2N1cz17KCkgPT4gaW5wdXRSZWYuY3VycmVudC5zZWxlY3QoKX1cblx0XHRcdC8+XG5cdFx0PC8+XG5cdCk7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBSb3V0ZXMgKi9cbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5oZWFkZXIgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJcIiB7Li4uRkFERV9JTn0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBweC01IHB0LTUgcHgtbGctNiBwdC1sZy02IHB4LXhsLTEyIHB0LXhsLTEyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJfX2xvZ28gbG9nb1wiPlxuXHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT1cImxvZ29fX2xpbmsgdGV4dC1yZXNldFwiIHRvPXtST1VURVMubG9naW59IHRpdGxlPVwiUGFyYWxsZWwgRGFzaGJvYXJkXCI+XG5cdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwibG9nb19fdGl0bGUgdGV4dC11cHBlcmNhc2UgbWItMFwiPlBhcmFsbGVsPC9oMj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvZ29fX3N1YnRpdGxlIHRleHQtdXBwZXJjYXNlIGZvbnQtd2VpZ2h0LWxpZ2h0IG10LW4xXCI+RGFzaGJvYXJkPC9wPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21vdGlvbi5oZWFkZXI+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEFsZXJ0IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJy4uLy4uL2FwaS9zZWN1cml0eSc7XG5cbi8qIFJvdXRlcyAqL1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyTmF2aWdhdGlvbigpIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcblx0Y29uc3QgeyBzZXRDdXJyZW50VXNlciB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgbG9nb3V0TXV0YXRpb24gPSB1c2VNdXRhdGlvbihsb2dvdXQsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdGhpc3RvcnkucHVzaChST1VURVMubG9naW4pO1xuXHRcdFx0c2V0Q3VycmVudFVzZXIobnVsbCk7XG5cdFx0XHRzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VySWQnKTtcblxuXHRcdFx0dG9hc3QoPEFsZXJ0IG1lc3NhZ2U9eydTdWNjZXNzZnVsbHkgbG9nZ2VkIG91dCEnfSBhcHBlYXJhbmNlPVwic3VjY2Vzc1wiIC8+KTtcblx0XHR9LFxuXHRcdG9uRXJyb3I6ICgpID0+IHRvYXN0KDxBbGVydCBtZXNzYWdlPXsnU29tZXRoaW5nIHdlbnQgd3JvbmchJ30gYXBwZWFyYW5jZT1cImRhbmdlclwiIC8+KSxcblx0fSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGhlYWRlciBjbGFzc05hbWU9XCJtYWluLWhlYWRlciBtYWluLWhlYWRlci0tcHJvamVjdHNcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJfX3dyYXBwZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWVuZFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJfX2xvZ28gbG9nb1wiPlxuXHRcdFx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPVwibG9nb19fbGluayB0ZXh0LXJlc2V0XCIgdG89e1JPVVRFUy5wcm9qZWN0c30gdGl0bGU9XCJQYXJhbGxlbCBEYXNoYm9hcmRcIj5cblx0XHRcdFx0XHRcdFx0PGgyIGNsYXNzTmFtZT1cImxvZ29fX3RpdGxlIHRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGUgbWItMFwiPlBhcmFsbGVsPC9oMj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9nb19fc3VidGl0bGUgdGV4dC11cHBlcmNhc2UgdGV4dC13aGl0ZSBmb250LXdlaWdodC1saWdodCBtdC1uMVwiPlxuXHRcdFx0XHRcdFx0XHRcdERhc2hib2FyZFxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWhlYWRlcl9fbmF2IG1sLWF1dG9cIj5cblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LS1wcmltYXJ5XCI+XG5cdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdGhyZWY9XCJ7eyBwYXRoKCdhcHBfbG9nb3V0JykgfX1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9XCJMb2dvdXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwibmF2LWxpbmsgYnRuIGJ0bi1saW5rIHRleHQtcmVzZXRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gbG9nb3V0TXV0YXRpb24ubXV0YXRlKCl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibmF2LXRleHRcIj5Mb2dvdXQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvaGVhZGVyPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZShwcm9wcykge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbbG9hZGVkLCBzZXRMb2FkZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdC8qIENvbnN0YW50cyovXG5cdGNvbnN0IHRyYW5zaXRpb24gPSB7XG5cdFx0ZHVyYXRpb246IDAuMixcblx0XHRlYXNlOiBbMC42NSwgMCwgMC4zNSwgMV0sXG5cdH07XG5cblx0Y29uc3QgdmFyaWFudHMgPSB7XG5cdFx0aGlkZGVuOiB7XG5cdFx0XHRvcGFjaXR5OiAwLFxuXHRcdFx0dHJhbnNpdGlvbixcblx0XHR9LFxuXHRcdHZpc2libGU6IHtcblx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHR0cmFuc2l0aW9uLFxuXHRcdH0sXG5cdH07XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IG9uTG9hZCA9ICgpID0+IHNldExvYWRlZCh0cnVlKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmltZ1xuXHRcdFx0a2V5PXtwcm9wcy5zcmN9XG5cdFx0XHRpbml0aWFsPVwiaGlkZGVuXCJcblx0XHRcdGFuaW1hdGU9e2xvYWRlZCA/ICd2aXNpYmxlJyA6ICdoaWRkZW4nfVxuXHRcdFx0ey4uLnsgLi4ucHJvcHMsIG9uTG9hZCwgdmFyaWFudHMgfX1cblx0XHQvPlxuXHQpO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBBY3Rpb25NZW51IH0gZnJvbSAnLi9hY3Rpb24tbWVudS9BY3Rpb25NZW51JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWxlcnQgfSBmcm9tICcuL2FsZXJ0L0FsZXJ0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQmFja2dyb3VuZCB9IGZyb20gJy4vYmFja2dyb3VuZC9CYWNrZ3JvdW5kJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RhbCB9IGZyb20gJy4vbW9kYWwvTW9kYWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RhbEhlYWRlciB9IGZyb20gJy4vbW9kYWwvTW9kYWxIZWFkZXInO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gJy4vYnV0dG9uL0J1dHRvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERyb3B6b25lIH0gZnJvbSAnLi9kcm9wem9uZS9Ecm9wem9uZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIERyb3B6b25lU2luZ2xlIH0gZnJvbSAnLi9kcm9wem9uZS9Ecm9wem9uZVNpbmdsZSc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWRpdGFibGUgfSBmcm9tICcuL2VkaXRhYmxlL0VkaXRhYmxlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWRpdGFibGVCb2R5IH0gZnJvbSAnLi9lZGl0YWJsZS9FZGl0YWJsZUJvZHknO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIExvYWRpbmdXcmFwcGVyIH0gZnJvbSAnLi9sb2FkaW5nLXdyYXBwZXIvTG9hZGluZ1dyYXBwZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTbGlkZUluIH0gZnJvbSAnLi9zbGlkZS1pbi9TbGlkZUluJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFnZUxvYWRlciB9IGZyb20gJy4vcGFnZS1sb2FkZXIvUGFnZUxvYWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhZ2VXcmFwcGVyIH0gZnJvbSAnLi9wYWdlLXdyYXBwZXIvUGFnZVdyYXBwZXInO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJBZGQgfSBmcm9tICcuL3VzZXItYWRkL1VzZXJBZGQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VyQWRkU2VhcmNoIH0gZnJvbSAnLi91c2VyLWFkZC9Vc2VyQWRkU2VhcmNoJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlckFkZFNlYXJjaFJlc3VsdHMgfSBmcm9tICcuL3VzZXItYWRkL1VzZXJBZGRTZWFyY2hSZXN1bHRzJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZWFkZXIgfSBmcm9tICcuL2hlYWRlci9IZWFkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZWFkZXJOYXZpZ2F0aW9uIH0gZnJvbSAnLi9oZWFkZXIvSGVhZGVyTmF2aWdhdGlvbic7XG5cbmV4cG9ydCAqIGZyb20gJy4vdXNlcnMvVXNlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXIgfSBmcm9tICcuL3VzZXJzL1VzZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VycyB9IGZyb20gJy4vdXNlcnMvVXNlcnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VyU2VsZWN0IH0gZnJvbSAnLi91c2Vycy9Vc2VyU2VsZWN0JztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBTZWN1cml0eU1vZGFsIH0gZnJvbSAnLi9zZWN1cml0eS9TZWN1cml0eU1vZGFsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9naW5Gb3JtIH0gZnJvbSAnLi9zZWN1cml0eS9Mb2dpbkZvcm0nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTaWdudXBGb3JtIH0gZnJvbSAnLi9zZWN1cml0eS9TaWdudXBGb3JtJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBJbWFnZSB9IGZyb20gJy4vaW1hZ2UvaW1hZ2UnO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNDQUxFX0ZBREUgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZ1dyYXBwZXIoeyBsb2FkaW5nLCBjaGlsZHJlbiwgbG9hZGVyU2l6ZSA9IDQwLCBjbGFzc2VzID0ge30gfSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyBsb2FkZXJDbGFzc2VzID0gJ3Bvc2l0aW9uLWFic29sdXRlIGQtZmxleCcsIGRlZmF1bHRDbGFzc2VzID0gJycgfSA9IGNsYXNzZXM7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0+XG5cdFx0XHR7bG9hZGluZyA/IChcblx0XHRcdFx0PG1vdGlvbi5kaXYga2V5PVwibG9hZGVyXCIgY2xhc3NOYW1lPXtsb2FkZXJDbGFzc2VzfSB7Li4uU0NBTEVfRkFERX0+XG5cdFx0XHRcdFx0PENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9XCJpbmhlcml0XCIgc2l6ZT17bG9hZGVyU2l6ZX0gLz5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PG1vdGlvbi5kaXYga2V5PVwiZGVmYXVsdFwiIGNsYXNzTmFtZT17ZGVmYXVsdENsYXNzZXN9IHsuLi5TQ0FMRV9GQURFfT5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdCl9XG5cdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgQ2xpY2tBd2F5TGlzdGVuZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IE1vZGFsSGVhZGVyIGZyb20gJy4vTW9kYWxIZWFkZXInO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOLCBGQURFX0lOX1VQIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VDbG9zZU9uRXNjIH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbCh7XG5cdHRpdGxlLFxuXHRzdWJ0aXRsZSxcblx0bW9kYWxPcGVuLFxuXHR0b2dnbGVNb2RhbCxcblx0Y2hpbGRyZW4sXG5cdHJlbmRlck9uQm9keSA9IHRydWUsXG5cdGNlbnRlciA9IHRydWUsXG5cdGV4dGVuc2lvbkNsYXNzZXMsXG5cdGNvbXBvbmVudHMgPSB7fSxcblx0Y3VzdG9tQW5pbWF0aW9uLFxufSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyBIZWFkZXJDb21wb25lbnQgPSBNb2RhbEhlYWRlciB9ID0gY29tcG9uZW50cztcblx0Y29uc3QgYW5pbWF0aW9uID0gY3VzdG9tQW5pbWF0aW9uID8/IEZBREVfSU5fVVAoKTtcblxuXHQvKiBIb29rcyAqL1xuXHR1c2VDbG9zZU9uRXNjKG1vZGFsT3BlbiwgdG9nZ2xlTW9kYWwpO1xuXG5cdGNvbnN0IHJlbmRlciA9ICgpID0+IChcblx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0e21vZGFsT3BlbiAmJiAoXG5cdFx0XHRcdDxDbGlja0F3YXlMaXN0ZW5lciBvbkNsaWNrQXdheT17dG9nZ2xlTW9kYWx9PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgY3VzdG9tLW1vZGFsICR7Y2VudGVyICYmICdjdXN0b20tbW9kYWwtLWNlbnRlcid9ICR7ZXh0ZW5zaW9uQ2xhc3Nlc31gfT5cblx0XHRcdFx0XHRcdHtyZW5kZXJPbkJvZHkgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWwtb3ZlcmxheVwiIHsuLi5GQURFX0lOfSBvbkNsaWNrPXt0b2dnbGVNb2RhbH0gLz5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdFx0XHRrZXk9XCJjdXN0b20tbW9kYWwtY29udGVudFwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fY29udGVudCBib3JkZXIgcC01XCJcblx0XHRcdFx0XHRcdFx0ey4uLmFuaW1hdGlvbn0+XG5cdFx0XHRcdFx0XHRcdDxIZWFkZXJDb21wb25lbnQgey4uLnsgdGl0bGUsIHN1YnRpdGxlLCB0b2dnbGVNb2RhbCB9fSAvPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fYm9keSBkLWZsZXggbXQtMlwiPntjaGlsZHJlbn08L2Rpdj5cblx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9DbGlja0F3YXlMaXN0ZW5lcj5cblx0XHRcdCl9XG5cdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG5cblx0LyogUmVuZGVyICovXG5cdGlmIChyZW5kZXJPbkJvZHkpIHtcblx0XHRyZXR1cm4gY3JlYXRlUG9ydGFsKHJlbmRlcigpLCBkb2N1bWVudC5ib2R5KTtcblx0fVxuXG5cdHJldHVybiByZW5kZXIoKTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWxIZWFkZXIoeyB0aXRsZSwgc3VidGl0bGUsIHRvZ2dsZU1vZGFsIH0pIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2hlYWRlciBkLWZsZXggYWxpZ24taXRlbXMtc3RhcnRcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX190aXRsZVwiPnt0aXRsZX08L3A+XG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Nsb3NlIGJ0biBidG4tbGluayBtbC1hdXRvXCJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17dG9nZ2xlTW9kYWx9PlxuXHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTJcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdHtzdWJ0aXRsZSAmJiA8cCBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX3N1YnRpdGxlXCI+e3N1YnRpdGxlfTwvcD59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3MnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VMb2FkZXIoeyBpc0xvYWRpbmcsIGNoaWxkcmVuIH0pIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdHtpc0xvYWRpbmcgPyAoXG5cdFx0XHRcdDxtb3Rpb24uZGl2IHsuLi5GQURFX0lOfT5cblx0XHRcdFx0XHQ8TGluZWFyUHJvZ3Jlc3MgY29sb3I9XCJzZWNvbmRhcnlcIiAvPlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8ZGl2IGtleT1cImNoaWxkcmVuXCI+e2NoaWxkcmVufTwvZGl2PlxuXHRcdFx0KX1cblx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlV3JhcHBlcih7IGNoaWxkcmVuIH0pIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1haW4gY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XG5cdFx0XHQ8c2VjdGlvbiBjbGFzc05hbWU9XCJwYW5lIHB5LTUgcHktbGctMTBcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj57Y2hpbGRyZW59PC9kaXY+XG5cdFx0XHQ8L3NlY3Rpb24+XG5cdFx0PC9tYWluPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IHVzZUZvcm0gfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uIH0gZnJvbSAnLi4nO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGxvZ2luLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZVBhZ2VUaXRsZSB9IGZyb20gJy4uLy4uL2hvb2tzJztcblxuLyogUm91dGVzICovXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbkZvcm0oeyBjdXJyZW50VXNlciwgdG9nZ2xlTW9kYWwsIHNob3dTaWdudXAgPSB0cnVlIH0pIHtcblx0LyogUmVmcyAqL1xuXHRjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cblx0LyogSG9va3MgKi9cblx0dXNlUGFnZVRpdGxlKCdMb2dpbicpO1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cdGNvbnN0IHtcblx0XHRyZWdpc3Rlcixcblx0XHRoYW5kbGVTdWJtaXQsXG5cdFx0Zm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuXHR9ID0gdXNlRm9ybSh7IHJlVmFsaWRhdGVNb2RlOiAnb25DaGFuZ2UnLCBtb2RlOiAnb25CbHVyJyB9KTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgbG9naW5NdXRhdGlvbiA9IHVzZU11dGF0aW9uKGxvZ2luLCB7XG5cdFx0b25TdWNjZXNzOiAodXNlcikgPT4ge1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5DVVJSRU5UX1VTRVIpO1xuXG5cdFx0XHRpZiAoY3VycmVudFVzZXIpIHRvZ2dsZU1vZGFsKCk7XG5cblx0XHRcdHRvYXN0KDxBbGVydCBtZXNzYWdlPVwiU3VjY2Vzc2Z1bGx5IGxvZ2dlZCBpbiFcIiBhcHBlYXJhbmNlPVwic3VjY2Vzc1wiIC8+KTtcblx0XHR9LFxuXHRcdG9uRXJyb3I6IChlcnJvcikgPT4ge1xuXHRcdFx0dG9hc3QoXG5cdFx0XHRcdDxBbGVydFxuXHRcdFx0XHRcdG1lc3NhZ2U9e1xuXHRcdFx0XHRcdFx0ZXJyb3I/LnJlc3BvbnNlPy5kYXRhPy5lcnJvciA/ICdFbWFpbC9wYXNzd29yZCBjb21iaW5hdGlvbiBub3QgZm91bmQhJyA6ICdTb21ldGhpbmcgd2VudCB3cm9uZyEnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFwcGVhcmFuY2U9XCJkYW5nZXJcIlxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblxuXHRcdFx0ZXJyb3JzLmVtYWlsID0geyBtZXNzYWdlOiAnRW1haWwvcGFzc3dvcmQgY29tYmluYXRpb24gbm90IGZvdW5kJyB9O1xuXHRcdFx0ZXJyb3JzLnBhc3N3b3JkID0geyBtZXNzYWdlOiAnRW1haWwvcGFzc3dvcmQgY29tYmluYXRpb24gbm90IGZvdW5kJyB9O1xuXHRcdH0sXG5cdH0pO1xuXG5cdGNvbnN0IG9uU3VibWl0ID0gKCkgPT4gbG9naW5NdXRhdGlvbi5tdXRhdGUoeyBmb3JtUmVmIH0pO1xuXG5cdHJldHVybiAoXG5cdFx0PGZvcm0gcmVmPXtmb3JtUmVmfSBjbGFzc05hbWU9XCJwYW5lbF9fZm9ybSBmb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9IG5vVmFsaWRhdGU+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJpbnB1dEVtYWlsXCI+XG5cdFx0XHRcdFx0XHRFbWFpbFxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7ZXJyb3JzLmVtYWlsICYmICdpcy1pbnZhbGlkJ31gfVxuXHRcdFx0XHRcdFx0aWQ9XCJpbnB1dEVtYWlsXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVtYWlsXCJcblx0XHRcdFx0XHRcdGF1dG9Gb2N1c1xuXHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKCdlbWFpbCcsIHtcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHtlcnJvcnMuZW1haWwgJiYgKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG5cdFx0XHRcdFx0XHRcdHtlcnJvcnMuZW1haWw/Lm1lc3NhZ2UgPyBlcnJvcnMuZW1haWwubWVzc2FnZSA6ICdQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCd9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJpbnB1dFBhc3N3b3JkXCI+XG5cdFx0XHRcdFx0XHRQYXNzd29yZFxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7ZXJyb3JzLnBhc3N3b3JkICYmICdpcy1pbnZhbGlkJ31gfVxuXHRcdFx0XHRcdFx0aWQ9XCJpbnB1dFBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcigncGFzc3dvcmQnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e2Vycm9ycy5wYXNzd29yZCAmJiAoXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5cblx0XHRcdFx0XHRcdFx0e2Vycm9ycy5wYXNzd29yZD8ubWVzc2FnZSA/IGVycm9ycy5wYXNzd29yZC5tZXNzYWdlIDogJ1BsZWFzZSBlbnRlciBhIHBhc3N3b3JkJ31cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kXCI+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICdMb2cgaW4nLFxuXHRcdFx0XHRcdFx0XHR0aGVtZTogJ3NlY29uZGFyeScsXG5cdFx0XHRcdFx0XHRcdHNpemU6ICdtZCcsXG5cdFx0XHRcdFx0XHRcdGV4dGVuc2lvbkNsYXNzZXM6ICdidG4tYmxvY2sganVzdGlmeS1jb250ZW50LWNlbnRlcicsXG5cdFx0XHRcdFx0XHRcdHR5cGU6ICdzdWJtaXQnLFxuXHRcdFx0XHRcdFx0XHRpc0xvYWRpbmc6IGxvZ2luTXV0YXRpb24uaXNMb2FkaW5nLFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e3Nob3dTaWdudXAgJiYgKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZFwiPlxuXHRcdFx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXdoaXRlIGJ0bi1ibG9ja1wiIHRvPXtST1VURVMuc2lnbnVwfSB0aXRsZT1cInNpZ24gdXBcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYnRuX190ZXh0XCI+U2lnbiB1cDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZm9ybT5cblx0KTtcbn1cbiIsIi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBNb2RhbCwgTG9naW5Gb3JtLCBTaWdudXBGb3JtIH0gZnJvbSAnLi4nO1xuaW1wb3J0IHsgU3RhdGljQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWN1cml0eU1vZGFsKHsgc2VjdXJpdHlNb2RhbE9wZW4sIHNldFNlY3VyaXR5TW9kYWxPcGVuIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBjdXJyZW50VXNlciwgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHRpdGxlID0gdXNlclJvbGUgPT09ICdiYXNpYycgPyAnU2lnbnVwJyA6ICdMb2dpbic7XG5cdGNvbnN0IHN1YnRpdGxlID0gYCR7dGl0bGV9IGlmIHlvdSB3YW50IHRvIGNvbW1lbnRgO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB0b2dnbGVTZWN1cml0eU1vZGFsID0gKCkgPT4gc2V0U2VjdXJpdHlNb2RhbE9wZW4oIXNlY3VyaXR5TW9kYWxPcGVuKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8TW9kYWwgey4uLnsgdGl0bGUsIHN1YnRpdGxlLCBtb2RhbE9wZW46IHNlY3VyaXR5TW9kYWxPcGVuLCB0b2dnbGVNb2RhbDogdG9nZ2xlU2VjdXJpdHlNb2RhbCB9fT5cblx0XHRcdHt1c2VyUm9sZSA9PT0gJ2Jhc2ljJyA/IChcblx0XHRcdFx0PFNpZ251cEZvcm1cblx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0Y3VycmVudFVzZXIsXG5cdFx0XHRcdFx0XHR0b2dnbGVNb2RhbDogdG9nZ2xlU2VjdXJpdHlNb2RhbCxcblx0XHRcdFx0XHRcdHNob3dMb2dpbjogZmFsc2UsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxMb2dpbkZvcm1cblx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0Y3VycmVudFVzZXIsXG5cdFx0XHRcdFx0XHR0b2dnbGVNb2RhbDogdG9nZ2xlU2VjdXJpdHlNb2RhbCxcblx0XHRcdFx0XHRcdHNob3dTaWdudXA6IGZhbHNlLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQpfVxuXHRcdDwvTW9kYWw+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgdXNlRm9ybSwgdXNlV2F0Y2ggfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBBbGVydCwgQnV0dG9uIH0gZnJvbSAnLi4nO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IFFVRVJZX0tFWVMsIHNpZ251cCB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbi8qIFJvdXRlcyAqL1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZVBhZ2VUaXRsZSB9IGZyb20gJy4uLy4uL2hvb2tzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbnVwRm9ybSh7IGN1cnJlbnRVc2VyLCB0b2dnbGVNb2RhbCwgc2hvd0xvZ2luID0gdHJ1ZSB9KSB7XG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgZm9ybVJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIEhvb2tzICovXG5cdHVzZVBhZ2VUaXRsZSgnU2lnbnVwJyk7XG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHRjb25zdCB7XG5cdFx0cmVnaXN0ZXIsXG5cdFx0aGFuZGxlU3VibWl0LFxuXHRcdGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcblx0XHRjb250cm9sLFxuXHR9ID0gdXNlRm9ybSh7IHJlVmFsaWRhdGVNb2RlOiAnb25DaGFuZ2UnLCBtb2RlOiAnb25CbHVyJyB9KTtcblxuXHRjb25zdCBwbGFpblBhc3N3b3JkID0gdXNlV2F0Y2goe1xuXHRcdGNvbnRyb2wsXG5cdFx0bmFtZTogJ3BsYWluUGFzc3dvcmQnLFxuXHRcdGRlZmF1bHRWYWx1ZTogJycsXG5cdH0pO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBzaWdudXBNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHNpZ251cCwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5DVVJSRU5UX1VTRVIpO1xuXG5cdFx0XHR0b2FzdCg8QWxlcnQgbWVzc2FnZT1cIlN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4hXCIgYXBwZWFyYW5jZT1cInN1Y2Nlc3NcIiAvPik7XG5cblx0XHRcdGlmIChjdXJyZW50VXNlcikgdG9nZ2xlTW9kYWwoKTtcblx0XHR9LFxuXHRcdG9uRXJyb3I6IChlcnJvcikgPT4ge1xuXHRcdFx0aWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNTAwKSB7XG5cdFx0XHRcdHRvYXN0KDxBbGVydCBtZXNzYWdlPVwiVGhpcyBlbWFpbCBpcyBhbHJlYWR5IGluIHVzZSFcIiBhcHBlYXJhbmNlPVwiZGFuZ2VyXCIgLz4pO1xuXG5cdFx0XHRcdGZvcm1SZWYuY3VycmVudC5yZXNldCgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdH0pO1xuXG5cdGNvbnN0IG9uU3VibWl0ID0gKCkgPT4gc2lnbnVwTXV0YXRpb24ubXV0YXRlKHsgZm9ybVJlZiwgdXNlcklkOiBjdXJyZW50VXNlcj8uaWQgfSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGZvcm0gcmVmPXtmb3JtUmVmfSBjbGFzc05hbWU9XCJwYW5lbF9fZm9ybSBmb3JtXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9IG5vVmFsaWRhdGU+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInJlZ2lzdHJhdGlvbl9mb3JtX3VzZXJuYW1lXCI+XG5cdFx0XHRcdFx0XHRZb3VyIG5hbWVcblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0aWQ9XCJyZWdpc3RyYXRpb25fZm9ybV91c2VybmFtZVwiXG5cdFx0XHRcdFx0XHRuYW1lPVwidXNlcm5hbWVcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7ZXJyb3JzLnVzZXJuYW1lICYmICdpcy1pbnZhbGlkJ31gfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJGdWxsIG5hbWVcIlxuXHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKCd1c2VybmFtZScsIHtcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUGxlYXNlIGVudGVyIGEgbmFtZScsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHtlcnJvcnMudXNlcm5hbWUgJiYgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e2Vycm9ycy51c2VybmFtZS5tZXNzYWdlfTwvZGl2Pn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJyZWdpc3RyYXRpb25fZm9ybV9vcmdhbmlzYXRpb25cIj5cblx0XHRcdFx0XHRcdE9yZ2FuaXNhdGlvblxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRpZD1cInJlZ2lzdHJhdGlvbl9mb3JtX29yZ2FuaXNhdGlvblwiXG5cdFx0XHRcdFx0XHRuYW1lPVwib3JnYW5pc2F0aW9uXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke2Vycm9ycy5vcmdhbmlzYXRpb24gJiYgJ2lzLWludmFsaWQnfWB9XG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIk9yZ2FuaXNhdGlvblwiXG5cdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ29yZ2FuaXNhdGlvbicsIHtcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUGxlYXNlIGVudGVyIGFuIG9yZ2FuaXNhdGlvbicsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHtlcnJvcnMub3JnYW5pc2F0aW9uICYmIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPntlcnJvcnMub3JnYW5pc2F0aW9uLm1lc3NhZ2V9PC9kaXY+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJyZWdpc3RyYXRpb25fZm9ybV9lbWFpbFwiPlxuXHRcdFx0XHRcdFx0RW1haWxcblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0aWQ9XCJyZWdpc3RyYXRpb25fZm9ybV9lbWFpbFwiXG5cdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7ZXJyb3JzLmVtYWlsICYmICdpcy1pbnZhbGlkJ31gfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbWFpbFwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17Y3VycmVudFVzZXI/LmVtYWlsfVxuXHRcdFx0XHRcdFx0b25DaGFuZ2U9eygpID0+IHt9fVxuXHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKCdlbWFpbCcsIHtcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUGxlYXNlIGVudGVyIGFuIGVtYWlsJyxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e2Vycm9ycy5lbWFpbCAmJiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj57ZXJyb3JzLmVtYWlsLm1lc3NhZ2V9PC9kaXY+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInJlZ2lzdHJhdGlvbl9mb3JtX3BsYWluUGFzc3dvcmRcIj5cblx0XHRcdFx0XHRcdFBhc3N3b3JkXG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRpZD1cInJlZ2lzdHJhdGlvbl9mb3JtX3BsYWluUGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0bmFtZT1cInBsYWluUGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7ZXJyb3JzLnBhc3N3b3JkICYmICdpcy1pbnZhbGlkJ31gfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG5cdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ3BsYWluUGFzc3dvcmQnLCB7XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhIHBhc3N3b3JkJyxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0bWluTGVuZ3RoOiB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDYsXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhIHBhc3N3b3JkIG9mIGF0bGVhc3QgNiBjaGFyYWN0ZXJzJyxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e2Vycm9ycy5wbGFpblBhc3N3b3JkICYmIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPntlcnJvcnMucGxhaW5QYXNzd29yZC5tZXNzYWdlfTwvZGl2Pn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJsb2dpbi1jb25maXJtLXBhc3N3b3JkXCI+XG5cdFx0XHRcdFx0XHRDb25maXJtIHBhc3N3b3JkXG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtlcnJvcnMucGFzc3dvcmRDb25maXJtICYmICdpcy1pbnZhbGlkJ31gfVxuXHRcdFx0XHRcdFx0aWQ9XCJsb2dpbi1jb25maXJtLXBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiQ29uZmlybSBwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRuYW1lPVwicGFzc3dvcmRDb25maXJtXCJcblx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcigncGFzc3dvcmRDb25maXJtJywge1xuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZDoge1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdQbGVhc2UgY29uZmlybSB5b3VyIHBhc3N3b3JkJyxcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0dmFsaWRhdGU6ICh2YWx1ZSkgPT4gdmFsdWUgPT09IHBsYWluUGFzc3dvcmQgfHwgJ1RoZSBwYXNzd29yZHMgZG8gbm90IG1hdGNoJyxcblx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0e2Vycm9ycy5wYXNzd29yZENvbmZpcm0gJiYgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e2Vycm9ycy5wYXNzd29yZENvbmZpcm0ubWVzc2FnZX08L2Rpdj59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kXCI+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICdTaWduIHVwJyxcblx0XHRcdFx0XHRcdFx0dGhlbWU6ICdzZWNvbmRhcnknLFxuXHRcdFx0XHRcdFx0XHRzaXplOiAnbWQnLFxuXHRcdFx0XHRcdFx0XHRleHRlbnNpb25DbGFzc2VzOiAnYnRuLWJsb2NrIGp1c3RpZnktY29udGVudC1jZW50ZXInLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VibWl0Jyxcblx0XHRcdFx0XHRcdFx0aXNMb2FkaW5nOiBzaWdudXBNdXRhdGlvbi5pc0xvYWRpbmcsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7c2hvd0xvZ2luICYmIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWRcIj5cblx0XHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS13aGl0ZSBidG4tYmxvY2tcIiB0bz17Uk9VVEVTLmxvZ2lufSB0aXRsZT1cInNpZ24gdXBcIj5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYnRuX190ZXh0XCI+TG9naW48L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Zvcm0+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiwgVFJBTlNGT1JNX1VQIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNsaWRlSW4oeyB0b2dnbGVTbGlkZUluLCBjaGlsZHJlbiwgZG9tRWxlbWVudCwgdmFyaWFudCA9ICdkZWZhdWx0JyB9KSB7XG5cdGNvbnN0IHJlbmRlciA9ICgpID0+IChcblx0XHQ8ZGl2IGtleT1cInNsaWRlLWluXCIgY2xhc3NOYW1lPXtgc2xpZGUtaW4gc2xpZGUtaW4tLSR7dmFyaWFudH1gfT5cblx0XHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluX19vdmVybGF5XCIgb25DbGljaz17dG9nZ2xlU2xpZGVJbn0gey4uLkZBREVfSU59IC8+XG5cdFx0XHQ8bW90aW9uLmFydGljbGUga2V5PVwic2xpZGUtaW5fX2NvbnRlbnRcIiBjbGFzc05hbWU9XCJzbGlkZS1pbl9fY29udGVudFwiIHsuLi5UUkFOU0ZPUk1fVVB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBkLWZsZXggZmxleC1ncm93LTFcIj57Y2hpbGRyZW59PC9kaXY+XG5cdFx0XHQ8L21vdGlvbi5hcnRpY2xlPlxuXHRcdDwvZGl2PlxuXHQpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRpZiAoZG9tRWxlbWVudCkge1xuXHRcdHJldHVybiBjcmVhdGVQb3J0YWwocmVuZGVyKCksIGRvbUVsZW1lbnQpO1xuXHR9XG5cblx0cmV0dXJuIHJlbmRlcigpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBNb2RhbCwgVXNlckFkZFNlYXJjaCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRVc2VySWNvbiBmcm9tICdpY29ucy9hZGRfdXNlci5zdmcnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQWRkKHsgdXNlcnMsIHByb2plY3QgfSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiBzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbik7XG5cblx0Y29uc3QgaW52YWxpZGF0ZVF1ZXJpZXMgPSAoKSA9PiB7XG5cdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdC5pZF0pO1xuXHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuR0xPQkFMX1VTRVJTKTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIG1sLTJcIj5cblx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIHVzZXIgdXNlci0tbGcgdXNlci0tYWRkXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfT5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidXNlcl9fYXZhdGFyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19pbml0aWFsc1wiPlxuXHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19pY29uIGljb24gaWNvbi0tMTIgbXQtMFwiIHNyYz17YWRkVXNlckljb259IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdHRpdGxlPVwiU2VsZWN0IHVzZXJzXCJcblx0XHRcdFx0c3VidGl0bGU9XCJDaG9vc2Ugc29tZSB1c2VycyB0byBjb2xsYWJvcmF0ZSB3aXRoLlwiXG5cdFx0XHRcdHsuLi57IG1vZGFsT3BlbiwgdG9nZ2xlTW9kYWwgfX0+XG5cdFx0XHRcdDxVc2VyQWRkU2VhcmNoIHsuLi57IHVzZXJzLCBwcm9qZWN0LCB0b2dnbGVNb2RhbCwgaW52YWxpZGF0ZVF1ZXJpZXMgfX0gLz5cblx0XHRcdDwvTW9kYWw+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXJBZGRTZWFyY2hSZXN1bHRzLCBVc2VycywgQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIFNlcnZpY2VzICovXG5pbXBvcnQgeyBpc0VtYWlsIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuaW1wb3J0IGZpbHRlclVzZXJzIGZyb20gJy4vc2VydmljZXMvZmlsdGVyVXNlcnMnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGFkZFVzZXIsIGZldGNoR29iYWxVc2VycywgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBZGRTZWFyY2goeyB1c2VycywgcHJvamVjdCwgdG9nZ2xlTW9kYWwsIGludmFsaWRhdGVRdWVyaWVzIH0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtmb2N1c2VkVXNlciwgc2V0Rm9jdXNlZFVzZXJdID0gdXNlU3RhdGUoMCk7XG5cblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGRhdGE6IGdsb2JhbFVzZXJzID0gW10sIGlzTG9hZGluZzogZ2xvYmFsVXNlcnNMb2FkaW5nIH0gPSB1c2VRdWVyeShcblx0XHRRVUVSWV9LRVlTLkdMT0JBTF9VU0VSUyxcblx0XHRmZXRjaEdvYmFsVXNlcnNcblx0KTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgZmlsdGVyZWRVc2VycyA9IGZpbHRlclVzZXJzKGdsb2JhbFVzZXJzLCB1c2VycywgcXVlcnkpO1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgcXVlcnlSZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgYWRkVXNlck11dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkVXNlciwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0aW52YWxpZGF0ZVF1ZXJpZXMoKTtcblx0XHRcdHF1ZXJ5UmVmLmN1cnJlbnQuc2VsZWN0KCk7XG5cdFx0XHRzZXRRdWVyeSgnJyk7XG5cdFx0fSxcblx0fSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHNldFF1ZXJ5KHZhbHVlKTtcblxuXHRjb25zdCBoYW5kbGVPbktleURvd24gPSAoZXZlbnQpID0+IHtcblx0XHRpZiAoWydFbnRlcicsICdUYWInXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0XHRpZiAocXVlcnkgIT09ICcnICYmIGZvY3VzZWRVc2VyICE9PSBudWxsKSB7XG5cdFx0XHRcdGNvbnN0IHVzZXIgPSBmb2N1c2VkVXNlciBpbiBmaWx0ZXJlZFVzZXJzID8gZmlsdGVyZWRVc2Vyc1tmb2N1c2VkVXNlcl0gOiBmb2N1c2VkVXNlcjtcblxuXHRcdFx0XHRpZiAoaXNFbWFpbCh1c2VyLmVtYWlsKSkge1xuXHRcdFx0XHRcdGFkZFVzZXJNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQ6IHByb2plY3QuaWQsIGVtYWlsOiB1c2VyLmVtYWlsIH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IGhhbmRsZUNsaWNrID0gKHsgZW1haWwgfSkgPT4ge1xuXHRcdGlmIChpc0VtYWlsKGVtYWlsKSkge1xuXHRcdFx0YWRkVXNlck11dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZDogcHJvamVjdC5pZCwgZW1haWw6IGVtYWlsIH0pO1xuXHRcdH1cblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LWdyb3ctMVwiPlxuXHRcdFx0PFVzZXJzIHsuLi57IHVzZXJzLCBwcm9qZWN0LCBpbnZhbGlkYXRlUXVlcmllcyB9fSB2YXJpYW50PVwiaW50ZXJhY3RpdmVcIiBzaXplPVwibGdcIiAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuXHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJ1c2VyUXVlcnlcIj5cblx0XHRcdFx0XHRTZWFyY2ggbmFtZSBvciBlbWFpbFxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLS1zZWFyY2hcIlxuXHRcdFx0XHRcdGlkPVwidXNlclF1ZXJ5XCJcblx0XHRcdFx0XHRuYW1lPVwidXNlclF1ZXJ5XCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNlYXJjaCBuYW1lIG9yIGVtYWlsXCJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0YXV0b0ZvY3VzXG5cdFx0XHRcdFx0dmFsdWU9e3F1ZXJ5fVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0b25LZXlEb3duPXtoYW5kbGVPbktleURvd259XG5cdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwib2ZmXCJcblx0XHRcdFx0XHRyZWY9e3F1ZXJ5UmVmfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfSBleHRlbnNpb25DbGFzc2VzPVwiZm9ybS1jb250cm9sLWJ0blwiIGNvbnRlbnRUeXBlPVwiaWNvblwiIHRoZW1lPVwiZGVmYXVsdFwiIC8+XG5cdFx0XHRcdDxVc2VyQWRkU2VhcmNoUmVzdWx0c1xuXHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHRmaWx0ZXJlZFVzZXJzLFxuXHRcdFx0XHRcdFx0cXVlcnksXG5cdFx0XHRcdFx0XHRoYW5kbGVDbGljayxcblx0XHRcdFx0XHRcdGZvY3VzZWRVc2VyLFxuXHRcdFx0XHRcdFx0c2V0Rm9jdXNlZFVzZXIsXG5cdFx0XHRcdFx0XHR1c2VyTXV0YXRpb25Mb2FkaW5nOiBhZGRVc2VyTXV0YXRpb24uaXNMb2FkaW5nLFxuXHRcdFx0XHRcdFx0Z2xvYmFsVXNlcnNMb2FkaW5nLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlclNlbGVjdCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBZGRTZWFyY2hSZXN1bHRzKHtcblx0ZmlsdGVyZWRVc2Vycyxcblx0cXVlcnksXG5cdGhhbmRsZUNsaWNrLFxuXHRmb2N1c2VkVXNlcixcblx0c2V0Rm9jdXNlZFVzZXIsXG5cdHVzZXJNdXRhdGlvbkxvYWRpbmcsXG5cdGdsb2JhbFVzZXJzTG9hZGluZyxcbn0pIHtcblx0LyogUmVuZGVyIGZpbHRlcmVkIHJlc3VsdHMgKi9cblx0Y29uc3QgcmVzdWx0cyA9ICgpID0+IHtcblx0XHRjb25zdCBuZXdVc2VyID0geyBlbWFpbDogcXVlcnksIG9yZ2FuaXNhdGlvbjogcXVlcnksIGRpc3BsYXk6ICdOZXcgdXNlcicsIHVzZXJDb2xvcjogJzI5MSwgODElLCA1MyUnIH07XG5cblx0XHRpZiAoZmlsdGVyZWRVc2Vycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gZmlsdGVyZWRVc2Vycy5tYXAoKHVzZXIsIHVzZXJJbmRleCkgPT4gKFxuXHRcdFx0XHQ8bW90aW9uLmxpIHsuLi5GQURFX0lOfSBrZXk9e3VzZXIuaWR9IGNsYXNzTmFtZT1cImxpc3RfX2l0ZW0gdnItM1wiPlxuXHRcdFx0XHRcdDxVc2VyU2VsZWN0XG5cdFx0XHRcdFx0XHR7Li4ueyB1c2VyLCB1c2VySW5kZXgsIGhhbmRsZUNsaWNrLCBzZXRGb2N1c2VkVXNlciB9fVxuXHRcdFx0XHRcdFx0aXNGb2N1c2VkPXt1c2VySW5kZXggPT09IGZvY3VzZWRVc2VyICYmIHF1ZXJ5fVxuXHRcdFx0XHRcdFx0aXNMb2FkaW5nPXt1c2VyTXV0YXRpb25Mb2FkaW5nfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvbW90aW9uLmxpPlxuXHRcdFx0KSk7XG5cdFx0fVxuXG5cdFx0aWYgKCFnbG9iYWxVc2Vyc0xvYWRpbmcpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxtb3Rpb24ubGkgey4uLkZBREVfSU59IGtleT1cIk5ldyB1c2VyXCIgY2xhc3NOYW1lPVwibGlzdF9faXRlbSBpcy1mb2N1c2VkIHZyLTNcIj5cblx0XHRcdFx0XHQ8VXNlclNlbGVjdFxuXHRcdFx0XHRcdFx0ey4uLnsgdXNlcjogbmV3VXNlciwgdXNlckluZGV4OiBuZXdVc2VyLCBoYW5kbGVDbGljaywgc2V0Rm9jdXNlZFVzZXIgfX1cblx0XHRcdFx0XHRcdGlzRm9jdXNlZD17cXVlcnkubGVuZ3RofVxuXHRcdFx0XHRcdFx0aXNMb2FkaW5nPXt1c2VyTXV0YXRpb25Mb2FkaW5nfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvbW90aW9uLmxpPlxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdHtxdWVyeSAhPT0gJycgJiYgKFxuXHRcdFx0XHQ8bW90aW9uLnVsIHsuLi5GQURFX0lOfSBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2xpc3QgbGlzdFwiPlxuXHRcdFx0XHRcdHtyZXN1bHRzKCl9XG5cdFx0XHRcdDwvbW90aW9uLnVsPlxuXHRcdFx0KX1cblx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbHRlclVzZXJzKGdsb2JhbFVzZXJzLCB1c2VycywgcXVlcnkpIHtcblx0Y29uc3QgbG93ZXJRdWVyeSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7XG5cdGNvbnN0IGV4aXN0aW5nVXNlcnNCeUVtYWlsID0gdXNlcnMubWFwKCh7IGVtYWlsIH0pID0+IGVtYWlsKTtcblxuXHRsZXQgZmlsdGVyZWRVc2VycyA9IGdsb2JhbFVzZXJzXG5cdFx0LmZpbHRlcigoeyBlbWFpbCB9KSA9PiB7XG5cdFx0XHQvKiBPbmx5IHJldHVybiB1c2VycyB0aGF0IGFyZSBub3QgcGFydCBvZiB0aGUgcHJvamVjdCAqL1xuXHRcdFx0cmV0dXJuICFleGlzdGluZ1VzZXJzQnlFbWFpbC5pbmNsdWRlcyhlbWFpbCk7XG5cdFx0fSlcblx0XHQuZmlsdGVyKCh7IGVtYWlsLCBkaXNwbGF5IH0pID0+IHtcblx0XHRcdC8qIE9ubHkgcmV0dXJuIHVzZXJzIHRoYXQgbWF0Y2ggdGhlIHF1ZXJ5IG9uIGVtYWlsIHx8IGRpc3BsYXkgKi9cblx0XHRcdHJldHVybiBlbWFpbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyUXVlcnkpIHx8IGRpc3BsYXkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclF1ZXJ5KTtcblx0XHR9KTtcblxuXHRyZXR1cm4gZmlsdGVyZWRVc2Vycztcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IExvYWRpbmdXcmFwcGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IHN0YXJJY29uIGZyb20gJ2ljb25zL3N0YXIuc3ZnJztcbmltcG9ydCBkZWxldGVJY29uIGZyb20gJ2ljb25zL2RlbGV0ZS5zdmcnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGRlbGV0ZVVzZXIgfSBmcm9tICcuLi8uLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyKHsgdXNlciwgcHJvamVjdCwgdmFyaWFudCA9ICdkZWZhdWx0Jywgc2l6ZSA9ICdtZCcsIGludmFsaWRhdGVRdWVyaWVzIH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJZCwgYXV0aG9yIH0gPSBwcm9qZWN0ID8/IHt9O1xuXHRjb25zdCB7IGlkOiB1c2VySWQsIGVtYWlsIH0gPSB1c2VyID8/IHt9O1xuXHRjb25zdCBpc0F1dGhvciA9IGVtYWlsID09PSBhdXRob3I7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGRlbGV0ZVVzZXJNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGRlbGV0ZVVzZXIsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IGludmFsaWRhdGVRdWVyaWVzKCksXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtgdXNlciB1c2VyLS0ke3NpemV9IHVzZXItLSR7dmFyaWFudH0gJHtpc0F1dGhvciAmJiAndXNlci0tYXV0aG9yJ31gfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHQ8VXNlckF2YXRhciBpc0xvYWRpbmc9e2RlbGV0ZVVzZXJNdXRhdGlvbi5pc0xvYWRpbmd9IHsuLi51c2VyfT5cblx0XHRcdFx0XHR7dmFyaWFudCA9PT0gJ2ludGVyYWN0aXZlJyAmJiAhaXNBdXRob3IgJiYgKFxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJ1c2VyX19hY3Rpb24gYnRuIGJ0bi1saW5rIHAtMFwiXG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkZWxldGVVc2VyTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkLCB1c2VySWQgfSl9PlxuXHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cInVzZXJfX2FjdGlvbi1pY29uIGljb24gaWNvbi0tMTRcIiBzcmM9e2RlbGV0ZUljb259IC8+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L1VzZXJBdmF0YXI+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdHtpc0F1dGhvciAmJiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlcl9fc3RhdHVzIHVzZXJfX3N0YXR1cy0tbGVhZGVyXCI+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19zdGF0dXMtaWNvbiBpY29uIHRleHQtdGVydGlhcnkgbXQtMFwiIHNyYz17c3Rhckljb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGNvbnN0IFVzZXJBdmF0YXIgPSAoeyBkaXNwbGF5LCB1c2VyQ29sb3IsIGlzTG9hZGluZywgY2hpbGRyZW4gfSkgPT4ge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgdXNlckluaXRpYWxzID0gZGlzcGxheS5zcGxpdCgnICcpLm1hcCgod29yZCkgPT4gd29yZFswXS50b1VwcGVyQ2FzZSgpKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXJfX2F2YXRhclwiIHN0eWxlPXt7ICctLXRoZW1lJzogdXNlckNvbG9yIH19PlxuXHRcdFx0PExvYWRpbmdXcmFwcGVyIGxvYWRpbmc9e2lzTG9hZGluZ30gbG9hZGVyU2l6ZT17MTZ9PlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ1c2VyX19pbml0aWFsc1wiPnt1c2VySW5pdGlhbHN9PC9zcGFuPlxuXHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHQ8L0xvYWRpbmdXcmFwcGVyPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcblxuZXhwb3J0IGNvbnN0IFVzZXJJbmZvID0gKHsgdGl0bGUsIHN1YnRpdGxlLCBsYXlvdXQgPSAndmVydGljYWwnLCBzaXplID0gJ2xnJyB9KSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPXtgdXNlcl9faW5mbyB1c2VyX19pbmZvLS0ke2xheW91dH0gdXNlcl9faW5mby0tJHtzaXplfSBtbC0yYH0+XG5cdFx0PHAgY2xhc3NOYW1lPVwidXNlcl9faW5mby10aXRsZSBtYi0wXCI+e3RpdGxlfTwvcD5cblx0XHR7c3VidGl0bGUgJiYgPHAgY2xhc3NOYW1lPVwidXNlcl9faW5mby1zdWJ0aXRsZSBtYi0wXCI+e3N1YnRpdGxlfTwvcD59XG5cdDwvZGl2PlxuKTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCB7IFVzZXJBdmF0YXIsIFVzZXJJbmZvIH0gZnJvbSAnLi9Vc2VyJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkVXNlckljb24gZnJvbSAnaWNvbnMvYWRkX3VzZXIuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclNlbGVjdCh7IHVzZXIsIHVzZXJJbmRleCwgaGFuZGxlQ2xpY2ssIGlzRm9jdXNlZCwgc2V0Rm9jdXNlZFVzZXIsIGlzTG9hZGluZyB9KSB7XG5cdC8qIEVmZmVjdHMgKi9cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpc0ZvY3VzZWQgJiYgc2V0Rm9jdXNlZFVzZXIodXNlckluZGV4KTtcblx0fSwgW2lzRm9jdXNlZF0pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0cmV0dXJuICgpID0+IHNldEZvY3VzZWRVc2VyKDApO1xuXHR9LCBbXSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IGhhbmRsZVN0YXR1cyA9IChhY3Rpb24pID0+IHtcblx0XHRzZXRGb2N1c2VkVXNlcihhY3Rpb24gPT09ICdlbnRlcicgPyB1c2VySW5kZXggOiAwKTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8YnV0dG9uXG5cdFx0XHRjbGFzc05hbWU9e2B1c2VyIHVzZXItLXNlbGVjdCAke2lzRm9jdXNlZCAmJiAnaXMtZm9jdXNlZCd9IHVzZXItLXhsYH1cblx0XHRcdG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKHVzZXIpfVxuXHRcdFx0b25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVTdGF0dXMoJ2VudGVyJyl9XG5cdFx0XHRvbk1vdXNlTGVhdmU9eygpID0+IGhhbmRsZVN0YXR1cygnbGVhdmUnKX1cblx0XHRcdHR5cGU9XCJidXR0b25cIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHQ8VXNlckF2YXRhciBpc0xvYWRpbmc9e2lzTG9hZGluZyAmJiBpc0ZvY3VzZWR9IHsuLi51c2VyfSAvPlxuXHRcdFx0XHQ8VXNlckluZm9cblx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0dGl0bGU6IHVzZXIuZGlzcGxheSxcblx0XHRcdFx0XHRcdHN1YnRpdGxlOiB1c2VyLm9yZ2FuaXNhdGlvbiA/IHVzZXIub3JnYW5pc2F0aW9uIDogJ05vIG9yZ2FuaXNhdGlvbicsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19hZGQgdGV4dC1zZWNvbmRhcnkgcm91bmRlZC1jaXJjbGUgbWwtYXV0b1wiPlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9fYWRkLWljb24gaWNvbiBpY29uLS0xMiB0ZXh0LXNlY29uZGFyeVwiIHNyYz17YWRkVXNlckljb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9idXR0b24+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU0NBTEVfRkFERSB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2Vycyh7IHVzZXJzLCBsYXlvdXQgPSAnZnVsbCcsIHVzZUxheW91dCA9IHRydWUsIC4uLnJlc3QgfSkge1xuXHRjb25zdCBzbGljZUFtb3VudCA9IGxheW91dCA9PT0gJ21pbmltYWwnID8gNyA6IEluZmluaXR5O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBndXR0ZXJzLTFcIj5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHt1c2Vycy5zbGljZSgwLCBzbGljZUFtb3VudCkubWFwKCh1c2VyKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2IGxheW91dD17dXNlTGF5b3V0fSB7Li4uU0NBTEVfRkFERX0gY2xhc3NOYW1lPVwiY29sLWF1dG9cIiBrZXk9e3VzZXIuaWR9PlxuXHRcdFx0XHRcdFx0XHQ8VXNlciB7Li4ueyB1c2VyLCAuLi5yZXN0IH19IC8+XG5cdFx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHRcdHtsYXlvdXQgPT09ICdtaW5pbWFsJyAmJiB1c2Vycy5sZW5ndGggPiA3ICYmIChcblx0XHRcdFx0XHQ8bW90aW9uLmRpdiBsYXlvdXQgey4uLlNDQUxFX0ZBREV9IGNsYXNzTmFtZT1cImNvbC1hdXRvXCIga2V5PVwibW9yZVwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0tc20gdGV4dC1tdXRlZC0tNzAgbWwtMVwiPisge3VzZXJzLmxlbmd0aCAtIHNsaWNlQW1vdW50fTwvcD5cblx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgU3RhdGljQ29udGV4dCB9IGZyb20gJy4vbWFpbkNvbnRleHQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBSZXZpZXdDb250ZXh0IH0gZnJvbSAnLi9yZXZpZXdDb250ZXh0JztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFN0YXRpY0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5leHBvcnQgZGVmYXVsdCBTdGF0aWNDb250ZXh0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgUmV2aWV3Q29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcbmV4cG9ydCBkZWZhdWx0IFJldmlld0NvbnRleHQ7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlckFkZCwgVXNlcnMsIEVkaXRhYmxlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBzdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGVkaXRQcm9qZWN0LCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdERldGFpbEhlYWRlcih7IHRpdGxlLCBkZXNjcmlwdGlvbiwgdXNlcnMsIGlkLCBhdXRob3IsIGVtYWlsIH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHByb2plY3QgPSB7IGlkLCBhdXRob3IsIGVtYWlsIH07XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChzdGF0aWNDb250ZXh0KTtcblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBtdXRhdGlvbk9uU3VjY2VzcyA9ICgpID0+IHtcblx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBpZF0pO1xuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IG1iLTZcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy02XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiAnZWRpdGFibGUnfSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJgfT5cblx0XHRcdFx0XHQ8RWRpdGFibGVcblx0XHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnRWRpdGluZyB0aXRsZScsXG5cdFx0XHRcdFx0XHRcdGZpZWxkczogW3sgbmFtZTogJ3RpdGxlJywgZGVmYXVsdFZhbHVlOiB0aXRsZSB9XSxcblx0XHRcdFx0XHRcdFx0bXV0YXRpb246IGVkaXRQcm9qZWN0LFxuXHRcdFx0XHRcdFx0XHRtdXRhdGlvbklkOiBpZCxcblx0XHRcdFx0XHRcdFx0bXV0YXRpb25PblN1Y2Nlc3M6IG11dGF0aW9uT25TdWNjZXNzLFxuXHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiaDUgbWItMCB0ZXh0LXdoaXRlXCI+e3RpdGxlID8gdGl0bGUgOiAnQWRkIGEgbmljZSB0aXRsZSd9PC9oMT5cblx0XHRcdFx0XHQ8L0VkaXRhYmxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3VzZXJSb2xlID09PSAnYWRtaW4nICYmICdlZGl0YWJsZSd9IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMmB9PlxuXHRcdFx0XHRcdDxFZGl0YWJsZVxuXHRcdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICdFZGl0aW5nIGRlc2NyaXB0aW9uJyxcblx0XHRcdFx0XHRcdFx0ZmllbGRzOiBbeyBuYW1lOiAnZGVzY3JpcHRpb24nLCBkZWZhdWx0VmFsdWU6IGRlc2NyaXB0aW9uIH1dLFxuXHRcdFx0XHRcdFx0XHRtdXRhdGlvbjogZWRpdFByb2plY3QsXG5cdFx0XHRcdFx0XHRcdG11dGF0aW9uSWQ6IGlkLFxuXHRcdFx0XHRcdFx0XHRtdXRhdGlvbk9uU3VjY2VzczogbXV0YXRpb25PblN1Y2Nlc3MsXG5cdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTcwIG1iLTBcIj5cblx0XHRcdFx0XHRcdFx0e2Rlc2NyaXB0aW9uID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPntkZXNjcmlwdGlvbn08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtcIldoYXQncyB0aGlzIHByb2plY3QgYWJvdXQ/IFNldCB0aGUgY29udGV4dCwgdGhlIGdvYWxzLCB0aGUgY29uc3RyYWludHNcIn1cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9FZGl0YWJsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gZC1mbGV4IGFsaWduLWl0ZW1zLWJhc2VsaW5lIG1sLWF1dG9cIj5cblx0XHRcdFx0PFVzZXJzIHsuLi57IHVzZXJzLCBwcm9qZWN0IH19IHNpemU9XCJsZ1wiIC8+XG5cdFx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiA8VXNlckFkZCB7Li4ueyB1c2VycywgcHJvamVjdCB9fSAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBFZGl0YWJsZSwgSW1hZ2UgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2hlY2tJY29uIGZyb20gJ2ljb25zL2NoZWNrLnN2Zyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4gfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBlZGl0UHJvamVjdEltYWdlLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdERldGFpbEltYWdlKHsgcHJvamVjdEltYWdlLCBwcm9qZWN0SWQsIHNlbGVjdGVkLCB1cGRhdGVTZWxlY3RlZCB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IGlkOiBwcm9qZWN0SW1hZ2VJZCwgdGl0bGUsIHBoYXNlID0ge30gfSA9IHByb2plY3RJbWFnZTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IG11dGF0aW9uT25TdWNjZXNzID0gKCkgPT4ge1xuXHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0pO1xuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxhcnRpY2xlIGNsYXNzTmFtZT17YGNhcmQgY2FyZC0tbGluayBjYXJkLS1wcm9kdWN0ICR7c2VsZWN0ZWQuaW5jbHVkZXMocHJvamVjdEltYWdlSWQpICYmICdpcy1zZWxlY3RlZCd9YH0+XG5cdFx0XHQ8TGluayB0bz17YC9wcm9qZWN0cy8ke3Byb2plY3RJZH0vcmV2aWV3LyR7cHJvamVjdEltYWdlSWR9YH0gdGl0bGU9e3RpdGxlfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX19pbWFnZSBib3JkZXIgbS0yXCI+XG5cdFx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxuXHRcdFx0XHRcdFx0c3JjPXtwaGFzZS5pbWFnZS50aHVtYm5haWx9XG5cdFx0XHRcdFx0XHRzcmNTZXQ9e2Ake3BoYXNlLmltYWdlLnRodW1ibmFpbFJldGluYX0gMnhgfVxuXHRcdFx0XHRcdFx0YWx0PXt0aXRsZX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTGluaz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG5cdFx0XHRcdDxFZGl0YWJsZVxuXHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHR0aXRsZTogJ0VkaXRpbmcgaW1hZ2UgdGl0bGUnLFxuXHRcdFx0XHRcdFx0ZmllbGRzOiBbeyBuYW1lOiAndGl0bGUnLCBkZWZhdWx0VmFsdWU6IHRpdGxlIH1dLFxuXHRcdFx0XHRcdFx0bXV0YXRpb246IGVkaXRQcm9qZWN0SW1hZ2UsXG5cdFx0XHRcdFx0XHRtdXRhdGlvbklkOiBwcm9qZWN0SW1hZ2VJZCxcblx0XHRcdFx0XHRcdG11dGF0aW9uT25TdWNjZXNzOiBtdXRhdGlvbk9uU3VjY2Vzcyxcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHQ8bW90aW9uLnAgey4uLkZBREVfSU59IGNsYXNzTmFtZT1cIm1iLTBcIj5cblx0XHRcdFx0XHRcdHt0aXRsZX1cblx0XHRcdFx0XHQ8L21vdGlvbi5wPlxuXHRcdFx0XHQ8L0VkaXRhYmxlPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdFwiPlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FyZF9fc2VsZWN0LXRvZ2dsZVwiXG5cdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0dXBkYXRlU2VsZWN0ZWQocHJvamVjdEltYWdlSWQpO1xuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiY2FyZF9fc2VsZWN0LWljb24gaWNvbiBpY29uLS04XCIgc3JjPXtjaGVja0ljb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9hcnRpY2xlPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgRHJvcHpvbmUsIEFjdGlvbk1lbnUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgUHJvamVjdERldGFpbEltYWdlIGZyb20gJy4vUHJvamVjdERldGFpbEltYWdlJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTVEFHR0VSX1VQIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGRlbGV0ZVByb2plY3RJbWFnZXMsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0RGV0YWlsSW1hZ2VzKHsgcHJvamVjdEltYWdlcywgcHJvamVjdElkIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQsIHJlc2V0U2VsZWN0ZWQgfSA9IHVzZVNlbGVjdGlvbigpO1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cdGNvbnN0IHsgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGRlbGV0ZVByb2plY3RJbWFnZXMsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0pO1xuXHRcdFx0cmVzZXRTZWxlY3RlZCgpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCBhY3Rpb25zID0gW1xuXHRcdHtcblx0XHRcdHRpdGxlOiAnUmVtb3ZlJyxcblx0XHRcdHRoZW1lOiAnZGFuZ2VyJyxcblx0XHRcdGhhc1Blcm1pc3Npb246IFsnYWRtaW4nXSxcblx0XHRcdGljb246IGRlbGV0ZUljb24sXG5cdFx0XHRpY29uU2l6ZTogMTAsXG5cdFx0XHRtdXRhdGlvbjogKCkgPT4gZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgcHJvamVjdEltYWdlSWRzOiBzZWxlY3RlZCB9KSxcblx0XHRcdGlzTG9hZGluZzogZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uLmlzTG9hZGluZyxcblx0XHR9LFxuXHRdO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHtzZWxlY3RlZC5sZW5ndGggPiAwICYmICdoYXMtc2VsZWN0aW9ucyd9YH0+XG5cdFx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyA/IChcblx0XHRcdFx0XHQ8RHJvcHpvbmUgey4uLnsgcHJvamVjdElkLCBwcm9qZWN0SW1hZ2VzLCBwb3NpdGl0aW9uOiAncmlnaHQnIH19PlxuXHRcdFx0XHRcdFx0eygpID0+IDxJbWFnZXMgey4uLnsgcHJvamVjdEltYWdlcywgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfX0gLz59XG5cdFx0XHRcdFx0PC9Ecm9wem9uZT5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTVcIj5cblx0XHRcdFx0XHRcdDxJbWFnZXMgey4uLnsgcHJvamVjdEltYWdlcywgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfX0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e3NlbGVjdGVkLmxlbmd0aCA+IDAgJiYgdXNlclJvbGUgPT09ICdhZG1pbicgJiYgKFxuXHRcdFx0XHRcdDxBY3Rpb25NZW51IHsuLi57IHNlbGVjdGVkLCByZXNldFNlbGVjdGVkLCBhY3Rpb25zIH19IC8+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHQ8Lz5cblx0KTtcbn1cblxuY29uc3QgSW1hZ2VzID0gKHsgcHJvamVjdEltYWdlcywgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfSkgPT4ge1xuXHRyZXR1cm4gKFxuXHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHR7cHJvamVjdEltYWdlcy5tYXAoKHByb2plY3RJbWFnZSwgcHJvamVjdEltYWdlSW5kZXgpID0+IChcblx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHR7Li4uU1RBR0dFUl9VUChwcm9qZWN0SW1hZ2VJbmRleCl9XG5cdFx0XHRcdFx0a2V5PXtwcm9qZWN0SW1hZ2UuaWR9XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC14bC0zIGNvbC14eGwtMlwiXG5cdFx0XHRcdFx0bGF5b3V0PlxuXHRcdFx0XHRcdDxQcm9qZWN0RGV0YWlsSW1hZ2Ugey4uLnsgcHJvamVjdEltYWdlLCBwcm9qZWN0SWQsIHNlbGVjdGVkLCB1cGRhdGVTZWxlY3RlZCB9fSAvPlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQpKX1cblx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0KTtcbn07XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3REZXRhaWxIZWFkZXIgfSBmcm9tICcuL1Byb2plY3REZXRhaWxIZWFkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0RGV0YWlsSW1hZ2VzIH0gZnJvbSAnLi9Qcm9qZWN0RGV0YWlsSW1hZ2VzJztcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VycyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCB7IFByb2plY3RJbWFnZSB9IGZyb20gJy4vJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2hlY2tJY29uIGZyb20gJ2ljb25zL2NoZWNrLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoeyBwcm9qZWN0LCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyB0aXRsZSwgcHJvamVjdEltYWdlcywgdXNlcnMsIGF1dGhvciwgaWQgfSA9IHByb2plY3Q7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PExpbmtcblx0XHRcdHRvPXtgcHJvamVjdHMvJHtpZH1gfVxuXHRcdFx0dGl0bGU9e3RpdGxlfVxuXHRcdFx0Y2xhc3NOYW1lPXtgY2FyZCBjYXJkLS1saW5rIGNhcmQtLXByb2R1Y3QgJHtzZWxlY3RlZC5pbmNsdWRlcyhpZCkgJiYgJ2lzLXNlbGVjdGVkJ31gfT5cblx0XHRcdDxQcm9qZWN0SW1hZ2Ugey4uLnsgcHJvamVjdEltYWdlcyB9fSAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW5cIj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi0yXCI+e3RpdGxlID8gdGl0bGUgOiAnQWRkIGEgbmljZSB0aXRsZSd9PC9wPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PFVzZXJzIHsuLi57IHVzZXJzLCBwcm9qZWN0OiB7IGF1dGhvciB9LCBsYXlvdXQ6ICdtaW5pbWFsJywgdXNlTGF5b3V0OiBmYWxzZSB9fSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX19zZWxlY3RcIj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC10b2dnbGVcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHVwZGF0ZVNlbGVjdGVkKGlkKTtcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC1pY29uIGljb24gaWNvbi0tOFwiIHNyYz17Y2hlY2tJY29ufSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvTGluaz5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCB7IFByb2plY3RTbGlkZUluIH0gZnJvbSAnLi8nO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTQ0FMRV9GQURFIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZFByb2plY3RJY29uIGZyb20gJ2ljb25zL2FkZF9wcm9qZWN0LnN2Zyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgYWRkUHJvamVjdCwgUVVFUllfS0VZUywgZWRpdFByb2plY3QsIGZldGNoUHJvamVjdEJ5SWQgfSBmcm9tICcuLi8uLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0QWRkKHsgc2V0TmV3UHJvamVjdElkIH0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW3Byb2plY3RJZCwgc2V0UHJvamVjdElkXSA9IHVzZVN0YXRlKG51bGwpO1xuXHRjb25zdCBbc2xpZGVJbk9wZW4sIHNldFNsaWRlSW5PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGRhdGE6IHByb2plY3QgfSA9IHVzZVF1ZXJ5KFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0sICgpID0+IGZldGNoUHJvamVjdEJ5SWQoeyBwcm9qZWN0SWQgfSksIHtcblx0XHRlbmFibGVkOiAhIXByb2plY3RJZCxcblx0fSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXROZXdQcm9qZWN0SWQocHJvamVjdElkKTtcblx0fSwgW3Byb2plY3RJZF0pO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBhZGRNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZFByb2plY3QsIHtcblx0XHRvblN1Y2Nlc3M6ICh7IGlkIH0pID0+IHNldFByb2plY3RJZChpZCksXG5cdH0pO1xuXG5cdGNvbnN0IGVkaXRNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGVkaXRQcm9qZWN0LCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiBpbnZhbGlkYXRlUHJvamVjdCgpLFxuXHR9KTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlU2xpZGVJbiA9ICgpID0+IHtcblx0XHRzZXRTbGlkZUluT3Blbighc2xpZGVJbk9wZW4pO1xuXG5cdFx0LyogTXV0YXRlIG9uIG1vZGFsIG9wZW4gKi9cblx0XHRpZiAoIXNsaWRlSW5PcGVuKSBhZGRNdXRhdGlvbi5tdXRhdGUoKTtcblxuXHRcdC8qIFJlc2V0IGlkIG9uIGNsb3NlIG1vZGFsICovXG5cdFx0aWYgKHNsaWRlSW5PcGVuKSB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2V0UHJvamVjdElkKG51bGwpO1xuXHRcdFx0fSwgMjUwKTtcblxuXHRcdFx0aW52YWxpZGF0ZVByb2plY3QoKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgdXBkYXRlUHJvamVjdCA9IChmb3JtUmVmKSA9PiBlZGl0TXV0YXRpb24ubXV0YXRlKHsgZm9ybVJlZiwgaWQ6IHByb2plY3RJZCB9KTtcblx0Y29uc3QgaW52YWxpZGF0ZVByb2plY3QgPSAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLlBST0pFQ1RfQllfVVNFUik7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxtb3Rpb24uYnV0dG9uXG5cdFx0XHRcdHsuLi5TQ0FMRV9GQURFfVxuXHRcdFx0XHRrZXk9XCJhZGQtcHJvamVjdFwiXG5cdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1pbnRlcmFjdGl2ZSBpY29uLXdyYXBwZXItLXNlY29uZGFyeSBidG4gYnRuLWxpbmsgYnRuLS1hZGQgYnRuLS1hZGQtcmlnaHRcIlxuXHRcdFx0XHRzdHlsZT17eyAnLS1zaXplJzogNzUgfX1cblx0XHRcdFx0b25DbGljaz17dG9nZ2xlU2xpZGVJbn0+XG5cdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0zMCB0ZXh0LXNlY29uZGFyeVwiIHNyYz17YWRkUHJvamVjdEljb259IC8+XG5cdFx0XHQ8L21vdGlvbi5idXR0b24+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7c2xpZGVJbk9wZW4gJiYgPFByb2plY3RTbGlkZUluIHsuLi57IHByb2plY3QsIHVwZGF0ZVByb2plY3QsIHRvZ2dsZVNsaWRlSW4gfX0gLz59XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRJbWFnZUljb24gZnJvbSAnaWNvbnMvYWRkX2ltYWdlLnN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RJbWFnZSh7IHByb2plY3RJbWFnZXMgfSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyBwaGFzZSA9IHt9LCB0aXRsZSB9ID0gcHJvamVjdEltYWdlc1swXSB8fCB7fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ltYWdlIGJvcmRlciBtLTJcIj5cblx0XHRcdHtwaGFzZS5pbWFnZSAmJiAoXG5cdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXG5cdFx0XHRcdFx0c3JjPXtwaGFzZS5pbWFnZS50aHVtYm5haWx9XG5cdFx0XHRcdFx0c3JjU2V0PXtgJHtwaGFzZS5pbWFnZS50aHVtYm5haWxSZXRpbmF9IDJ4YH1cblx0XHRcdFx0XHRhbHQ9e3RpdGxlfVxuXHRcdFx0XHQvPlxuXHRcdFx0KX1cblx0XHRcdHshcGhhc2UuaW1hZ2UgJiYgPFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTQ4IHRleHQtbXV0ZWQtLTQwXCIgc3JjPXthZGRJbWFnZUljb259IC8+fVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQWN0aW9uTWVudSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4sIFNUQUdHRVJfVVAgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gJ2ljb25zL2Nsb3NlLnN2Zyc7XG5pbXBvcnQgbGVhdmVJY29uIGZyb20gJ2ljb25zL2xlYXZlLnN2Zyc7XG5pbXBvcnQgYXJjaGl2ZUljb24gZnJvbSAnaWNvbnMvYXJjaGl2ZS5zdmcnO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGRlbGV0ZVByb2plY3RzLCBsZWF2ZVByb2plY3RzLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9tYWluQ29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXN1bHRzKHsgcHJvamVjdHMsIG5ld1Byb2plY3RJZCB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkLCByZXNldFNlbGVjdGVkIH0gPSB1c2VTZWxlY3Rpb24oKTtcblx0Y29uc3QgeyBjdXJyZW50VXNlciB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBsZWF2ZVByb2plY3RzTXV0YXRpb24gPSB1c2VNdXRhdGlvbihsZWF2ZVByb2plY3RzLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLlBST0pFQ1RfQllfVVNFUik7XG5cdFx0XHRyZXNldFNlbGVjdGVkKCk7XG5cdFx0fSxcblx0fSk7XG5cblx0Y29uc3QgZGVsZXRlUHJvamVjdHNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGRlbGV0ZVByb2plY3RzLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLlBST0pFQ1RfQllfVVNFUik7XG5cdFx0XHRyZXNldFNlbGVjdGVkKCk7XG5cdFx0fSxcblx0fSk7XG5cblx0Y29uc3QgYWN0aW9ucyA9IFtcblx0XHR7XG5cdFx0XHR0aXRsZTogJ0xlYXZlJyxcblx0XHRcdHRoZW1lOiAnd2FybmluZycsXG5cdFx0XHRoYXNQZXJtaXNzaW9uOiBbJ3VzZXInLCAnYmFzaWMnXSxcblx0XHRcdGljb246IGxlYXZlSWNvbixcblx0XHRcdG11dGF0aW9uOiAoKSA9PiBsZWF2ZVByb2plY3RzTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkczogc2VsZWN0ZWQsIHVzZXJJZDogY3VycmVudFVzZXIuaWQgfSksXG5cdFx0XHRpc0xvYWRpbmc6IGxlYXZlUHJvamVjdHNNdXRhdGlvbi5pc0xvYWRpbmcsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0aXRsZTogJ0FyY2hpdmUnLFxuXHRcdFx0dGhlbWU6ICdzZWNvbmRhcnknLFxuXHRcdFx0aGFzUGVybWlzc2lvbjogWydhZG1pbiddLFxuXHRcdFx0aWNvbjogYXJjaGl2ZUljb24sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0aXRsZTogJ1JlbW92ZScsXG5cdFx0XHR0aGVtZTogJ2RhbmdlcicsXG5cdFx0XHRoYXNQZXJtaXNzaW9uOiBbJ2FkbWluJ10sXG5cdFx0XHRpY29uOiBjbG9zZUljb24sXG5cdFx0XHRpY29uU2l6ZTogMTAsXG5cdFx0XHRtdXRhdGlvbjogKCkgPT4gZGVsZXRlUHJvamVjdHNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWRzOiBzZWxlY3RlZCB9KSxcblx0XHRcdGlzTG9hZGluZzogZGVsZXRlUHJvamVjdHNNdXRhdGlvbi5pc0xvYWRpbmcsXG5cdFx0fSxcblx0XTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGgxIGNsYXNzTmFtZT1cImg1IHRleHQtd2hpdGUgbWItNlwiPllvdXIgcHJvamVjdHM8L2gxPlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e3Byb2plY3RzLmxlbmd0aCA9PT0gMCAmJiAoXG5cdFx0XHRcdFx0PG1vdGlvbi5wIHsuLi5GQURFX0lOfSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIG1iLTAgcG9zaXRpb24tYWJzb2x1dGVcIj5cblx0XHRcdFx0XHRcdHtgWW91IGRvbid0IGhhdmUgYW55IHByb2plY3RzIHlldGB9XG5cdFx0XHRcdFx0PC9tb3Rpb24ucD5cblx0XHRcdFx0KX1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Byb3cgcm93LS1lcXVhbGl6ZWQgZ3V0dGVycy01ICR7c2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAnaGFzLXNlbGVjdGlvbnMnfWB9PlxuXHRcdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHRcdHtwcm9qZWN0c1xuXHRcdFx0XHRcdFx0LmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCAhPT0gbmV3UHJvamVjdElkKVxuXHRcdFx0XHRcdFx0Lm1hcCgocHJvamVjdCwgcHJvamVjdEluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0XHRcdFx0ey4uLlNUQUdHRVJfVVAocHJvamVjdEluZGV4KX1cblx0XHRcdFx0XHRcdFx0XHRrZXk9e3Byb2plY3QuaWR9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC14bC0zIGNvbC14eGwtMlwiXG5cdFx0XHRcdFx0XHRcdFx0bGF5b3V0PlxuXHRcdFx0XHRcdFx0XHRcdDxQcm9qZWN0IHsuLi57IHByb2plY3QsIHNlbGVjdGVkLCB1cGRhdGVTZWxlY3RlZCB9fSAvPlxuXHRcdFx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHtzZWxlY3RlZC5sZW5ndGggPiAwICYmIDxBY3Rpb25NZW51IHsuLi57IHNlbGVjdGVkLCByZXNldFNlbGVjdGVkLCBhY3Rpb25zIH19IC8+fVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRhcmVhQXV0b3NpemUnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gJ2ljb25zL2Nsb3NlLnN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IERyb3B6b25lLCBMb2FkaW5nV3JhcHBlciwgU2xpZGVJbiwgVXNlcnMsIFVzZXJBZGQsIEltYWdlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNUQUdHRVJfVVAgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFNsaWRlSW4oeyBwcm9qZWN0ID0ge30sIHVwZGF0ZVByb2plY3QsIHRvZ2dsZVNsaWRlSW4gfSkge1xuXHQvKiBDb25zdGFudHMgICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJZCA9IG51bGwsIHRpdGxlID0gJycsIHByb2plY3RJbWFnZXMgPSBbXSwgdXNlcnMgPSBbXSB9ID0gcHJvamVjdDtcblxuXHQvKiBSZWZzICovXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8U2xpZGVJbiB7Li4ueyB0b2dnbGVTbGlkZUluIH19IGRvbUVsZW1lbnQ9e2RvY3VtZW50LmJvZHl9PlxuXHRcdFx0PGZvcm1cblx0XHRcdFx0cmVmPXtmb3JtUmVmfVxuXHRcdFx0XHRtZXRob2Q9XCJQT1NUXCJcblx0XHRcdFx0Y2xhc3NOYW1lPVwic2xpZGUtaW5fX2Zvcm1cIlxuXHRcdFx0XHRvblN1Ym1pdD17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0b2dnbGVTbGlkZUluKCk7XG5cdFx0XHRcdH19PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluX19oZWFkZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBwdC02IHB0LW1kLTEyIHBiLTNcIj5cblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJwcm9qZWN0VGl0bGVcIj5cblx0XHRcdFx0XHRcdHt0aXRsZX1cblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC0tY2xlYXIgdGV4dC0teGxcIlxuXHRcdFx0XHRcdFx0aWQ9XCJwcm9qZWN0VGl0bGVcIlxuXHRcdFx0XHRcdFx0bmFtZT1cInRpdGxlXCJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiVGhlIHByb2plY3QgbmFtZVwiXG5cdFx0XHRcdFx0XHRvbkJsdXI9eygpID0+IHVwZGF0ZVByb2plY3QoZm9ybVJlZil9XG5cdFx0XHRcdFx0XHRhdXRvRm9jdXNcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic2xpZGUtaW5fX2Nsb3NlIGJ0biBidG4tbGluayBtbC1hdXRvXCJcblx0XHRcdFx0XHRcdGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcblx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9XCJDbG9zZVwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVTbGlkZUlufVxuXHRcdFx0XHRcdFx0dGFiSW5kZXg9XCItMVwiPlxuXHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTE0XCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluX19ib2R5IHB0LTMgcGItMTJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicHJvamVjdERlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0e2BXaGF0J3MgdGhpcyBwcm9qZWN0IGFib3V0P2B9XG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxUZXh0YXJlYUF1dG9zaXplXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC0tdGV4dCBmb3JtLWNvbnRyb2wtLWNsZWFyIG1iLTEwXCJcblx0XHRcdFx0XHRcdFx0XHRpZD1cInByb2plY3REZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRlc2NyaXB0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIldoYXQncyB0aGlzIHByb2plY3QgYWJvdXQ/XCJcblx0XHRcdFx0XHRcdFx0XHRvbkJsdXI9eygpID0+IHVwZGF0ZVByb2plY3QoZm9ybVJlZil9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gZC1mbGV4IGFsaWduLWl0ZW1zLWJhc2VsaW5lIG1sLWF1dG9cIj5cblx0XHRcdFx0XHRcdFx0PFVzZXJzIHsuLi57IHVzZXJzLCBwcm9qZWN0IH19IHNpemU9XCJsZ1wiIC8+XG5cdFx0XHRcdFx0XHRcdDxVc2VyQWRkIHsuLi57IHVzZXJzLCBwcm9qZWN0IH19IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8RHJvcHpvbmUgey4uLnsgcHJvamVjdElkLCBwcm9qZWN0SW1hZ2VzIH19PlxuXHRcdFx0XHRcdFx0eyh7IHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzTG9hZGluZyB9KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdFx0XHRcdFx0e3Byb2plY3RJbWFnZXMubWFwKChwcm9qZWN0SW1hZ2UsIHByb2plY3RJbWFnZUluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8RHJvcHpvbmVJbWFnZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXk9e3Byb2plY3RJbWFnZS5pZH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLnsgcHJvamVjdEltYWdlLCBwcm9qZWN0SW1hZ2VJbmRleCwgdXBkYXRlUHJvamVjdEltYWdlcywgaXNMb2FkaW5nIH19XG5cdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9Ecm9wem9uZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5fX2Zvb3RlciBwYi02IHBiLW1kLTEyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0wIHctMTAwXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctMSBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJzbGlkZS1pbl9fYnRuIGJ0biBidG4tYmxvY2sgYnRuLXNlY29uZGFyeSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8bW90aW9uLnNwYW4gY2xhc3NOYW1lPVwiYnRuLXRleHRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPlNhdmU8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0PC9TbGlkZUluPlxuXHQpO1xufVxuXG5jb25zdCBEcm9wem9uZUltYWdlID0gKHsgcHJvamVjdEltYWdlLCBwcm9qZWN0SW1hZ2VJbmRleCwgdXBkYXRlUHJvamVjdEltYWdlcywgaXNMb2FkaW5nIH0pID0+IHtcblx0Y29uc3QgeyB0aXRsZSwgaWQsIHBoYXNlID0ge30gfSA9IHByb2plY3RJbWFnZTtcblxuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRsYXlvdXRcblx0XHRcdHsuLi5TVEFHR0VSX1VQKHByb2plY3RJbWFnZUluZGV4KX1cblx0XHRcdGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtMyBjb2wteHhsLTJcIlxuXHRcdFx0a2V5PXtpZH0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3B6b25lX19jb250YWluZXJcIj5cblx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZHJvcHpvbmVfX2ltYWdlIGltZy1mbHVpZFwiXG5cdFx0XHRcdFx0c3JjPXtwaGFzZS5pbWFnZS50aHVtYm5haWx9XG5cdFx0XHRcdFx0c3JjU2V0PXtgJHtwaGFzZS5pbWFnZS50aHVtYm5haWxSZXRpbmF9IDJ4YH1cblx0XHRcdFx0XHRhbHQ9e3RpdGxlfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIGRyb3B6b25lX19pbWFnZS1kZWxldGUgcC0wXCJcblx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0dXBkYXRlUHJvamVjdEltYWdlcygnZGVsZXRlJywgeyBwcm9qZWN0SW1hZ2VJZHM6IFtpZF0gfSk7XG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZHJvcHpvbmVfX2ltYWdlLWRlbGV0ZS1pY29uIGljb24td3JhcHBlciBpY29uLXdyYXBwZXItLWRhbmdlciBteC1hdXRvXCJcblx0XHRcdFx0XHRcdHN0eWxlPXt7ICctLXNpemUnOiA1MCB9fT5cblx0XHRcdFx0XHRcdDxMb2FkaW5nV3JhcHBlclxuXHRcdFx0XHRcdFx0XHRsb2FkaW5nPXtpc0xvYWRpbmd9XG5cdFx0XHRcdFx0XHRcdGxvYWRlclNpemU9ezIwfVxuXHRcdFx0XHRcdFx0XHRjbGFzc2VzPXt7XG5cdFx0XHRcdFx0XHRcdFx0bG9hZGVyQ2xhc3NlczogJ3Bvc2l0aW9uLWFic29sdXRlIGQtZmxleCB0ZXh0LWRhbmdlcicsXG5cdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTQgdGV4dC1kYW5nZXIgbXQtMFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHRcdFx0PC9Mb2FkaW5nV3JhcHBlcj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0IH0gZnJvbSAnLi9Qcm9qZWN0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdEFkZCB9IGZyb20gJy4vUHJvamVjdEFkZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RJbWFnZSB9IGZyb20gJy4vUHJvamVjdEltYWdlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdFNsaWRlSW4gfSBmcm9tICcuL1Byb2plY3RTbGlkZUluJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdFJlc3VsdHMgfSBmcm9tICcuL1Byb2plY3RSZXN1bHRzJztcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgeyBQcm9qZWN0UmV2aWV3QWN0aW9uQmFyIH0gZnJvbSAnLi9wcm9qZWN0LXJldmlldy1hY3Rpb24tYmFyJztcbmltcG9ydCBQcm9qZWN0UmV2aWV3TWFya2VyIGZyb20gJy4vUHJvamVjdFJldmlld01hcmtlcic7XG5pbXBvcnQgUHJvamVjdFJldmlld0NvbW1lbnRNb2RhbCBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50TW9kYWwnO1xuaW1wb3J0IFByb2plY3RSZXZpZXdDb21tZW50QWRkIGZyb20gJy4vUHJvamVjdFJldmlld0NvbW1lbnRBZGQnO1xuaW1wb3J0IFByb2plY3RSZXZpZXdQYWdpbmF0aW9uIGZyb20gJy4vUHJvamVjdFJldmlld1BhZ2luYXRpb24nO1xuaW1wb3J0IFByb2plY3RSZXZpZXdDb21tZW50UGFuZWwgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3Q29tbWVudFBhbmVsJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgU2VjdXJpdHlNb2RhbCwgSW1hZ2UgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBmZXRjaFByb2plY3RVc2VycywgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCB7IFN0YXRpY0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU0xJREVfSU4gfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogR2xvYmFsICovXG5jb25zdCBjdXJzb3JPZmZzZXQgPSAxMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0NhbnZhcyh7IHBhcmVudElkLCB0aXRsZSwgcGhhc2UsIC4uLnJlc3QgfSkge1xuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgZGF0YTogcHJvamVjdFVzZXJzID0gW10gfSA9IHVzZVF1ZXJ5KFxuXHRcdFtRVUVSWV9LRVlTLlBST0pFQ1RfVVNFUlMsIHBhcmVudElkXSxcblx0XHQoKSA9PiBmZXRjaFByb2plY3RVc2Vycyh7IHByb2plY3RJZDogcGFyZW50SWQgfSksXG5cdFx0e1xuXHRcdFx0ZW5hYmxlZDogISFwYXJlbnRJZCxcblx0XHR9XG5cdCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgaW1hZ2UsIGlkOiBwaGFzZUlkLCBjb21tZW50cywgcGhhc2U6IHBoYXNlTnVtYmVyIH0gPSBwaGFzZTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgcmV2aWV3UmVmID0gdXNlUmVmKCk7XG5cblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW21hcmtlclBvcywgc2V0TWFya2VyUG9zXSA9IHVzZVN0YXRlKCk7XG5cdGNvbnN0IFtzZWN1cml0eU1vZGFsT3Blbiwgc2V0U2VjdXJpdHlNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbY29tbWVudHNQYW5lbE9wZW4sIHNldENvbW1lbnRzUGFuZWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW3BhZ2luYXRpb25BY3RpdmUsIHNldFBhZ2luYXRpb25BY3RpdmVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZUNvbW1lbnRBZGRPcGVuID0gKCkgPT4gc2V0TWFya2VyUG9zKG51bGwpO1xuXG5cdGNvbnN0IHRvZ2dsZUNvbW1lbnRzUGFuZWwgPSAoKSA9PiB7XG5cdFx0c2V0Q29tbWVudHNQYW5lbE9wZW4oIWNvbW1lbnRzUGFuZWxPcGVuKTtcblx0XHR0b2dnbGVQYWdpbmF0aW9uQWN0aXZlKCk7XG5cdH07XG5cblx0Y29uc3QgdG9nZ2xlUGFnaW5hdGlvbkFjdGl2ZSA9ICgpID0+IHNldFBhZ2luYXRpb25BY3RpdmUoIXBhZ2luYXRpb25BY3RpdmUpO1xuXG5cdGNvbnN0IHBvc01hcmtlciA9ICh7IGNsaWVudFgsIGNsaWVudFkgfSkgPT4ge1xuXHRcdGlmICghY3VycmVudFVzZXIuYXV0aGVudGljYXRlZCkge1xuXHRcdFx0c2V0U2VjdXJpdHlNb2RhbE9wZW4odHJ1ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmV2aWV3UG9zID0gcmV2aWV3UmVmPy5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0c2V0TWFya2VyUG9zKCgpID0+IHtcblx0XHRcdGNvbnN0IHhQZXJjZW50ID0gKChjbGllbnRYIC0gY3Vyc29yT2Zmc2V0KSAvIHJldmlld1Bvcy53aWR0aCkgKiAxMDA7XG5cdFx0XHRjb25zdCB5UGVyY2VudCA9ICgoY2xpZW50WSAtIHJldmlld1Bvcy50b3AgLSBjdXJzb3JPZmZzZXQpIC8gcmV2aWV3UG9zLmhlaWdodCkgKiAxMDA7XG5cblx0XHRcdHJldHVybiB7IHhQZXJjZW50LCB5UGVyY2VudCwgcmV2aWV3UG9zIH07XG5cdFx0fSk7XG5cdH07XG5cblx0LyogcmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwicmV2aWV3IHBvc2l0aW9uLXJlbGF0aXZlIG14LW4xMiBtYi0zIG10LW4xMCBtaW4tdmgtMTAwXCI+XG5cdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRjbGFzc05hbWU9XCJyZXZpZXdfX2ltYWdlLXdyYXBwZXIgcG9zaXRpb24tcmVsYXRpdmVcIlxuXHRcdFx0XHRyZWY9e3Jldmlld1JlZn1cblx0XHRcdFx0aW5pdGlhbD17eyB3aWR0aDogJzEwMCUnIH19XG5cdFx0XHRcdGFuaW1hdGU9e3tcblx0XHRcdFx0XHR3aWR0aDogY29tbWVudHNQYW5lbE9wZW4gPyBgY2FsYygxMDAlIC0gNDAwcHgpYCA6ICcxMDAlJyxcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBjb21tZW50c1BhbmVsT3BlbiA/IFNMSURFX0lOLmFuaW1hdGUudHJhbnNpdGlvbiA6IFNMSURFX0lOLmV4aXQudHJhbnNpdGlvbixcblx0XHRcdFx0fX0+XG5cdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInJldmlld19faW1hZ2UgaW1nLWZsdWlkIHctMTAwXCJcblx0XHRcdFx0XHRzcmM9e2ltYWdlLm9yaWdpbmFsfVxuXHRcdFx0XHRcdHNyY1NldD17YCR7aW1hZ2Uub3JpZ2luYWx9IDJ4YH1cblx0XHRcdFx0XHRhbHQ9e3RpdGxlfVxuXHRcdFx0XHRcdG9uQ2xpY2s9e3Bvc01hcmtlcn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0e2NvbW1lbnRzPy5tYXAoKGNvbW1lbnQsIGNvbW1lbnRJbmRleCkgPT4gKFxuXHRcdFx0XHRcdDxQcm9qZWN0UmV2aWV3Q29tbWVudE1vZGFsXG5cdFx0XHRcdFx0XHRrZXk9e2NvbW1lbnQuaWR9XG5cdFx0XHRcdFx0XHR7Li4ueyBjb21tZW50LCBjb21tZW50SW5kZXgsIHJldmlld1JlZiwgcHJvamVjdFVzZXJzLCB0b2dnbGVDb21tZW50QWRkT3BlbiB9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCkpfVxuXHRcdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHRcdHttYXJrZXJQb3MgJiYgKFxuXHRcdFx0XHRcdFx0PFByb2plY3RSZXZpZXdNYXJrZXIgey4uLnsgLi4ubWFya2VyUG9zIH19PlxuXHRcdFx0XHRcdFx0XHQ8UHJvamVjdFJldmlld0NvbW1lbnRBZGQgey4uLnsgbWFya2VyUG9zLCBwaGFzZUlkLCB0b2dnbGVDb21tZW50QWRkT3BlbiB9fSAvPlxuXHRcdFx0XHRcdFx0PC9Qcm9qZWN0UmV2aWV3TWFya2VyPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHQ8U2VjdXJpdHlNb2RhbCB7Li4ueyBzZWN1cml0eU1vZGFsT3Blbiwgc2V0U2VjdXJpdHlNb2RhbE9wZW4gfX0gLz5cblx0XHRcdFx0PEFuaW1hdGVQcmVzZW5jZT57cGFnaW5hdGlvbkFjdGl2ZSAmJiA8UHJvamVjdFJldmlld1BhZ2luYXRpb24gey4uLnJlc3R9IC8+fTwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0PFByb2plY3RSZXZpZXdBY3Rpb25CYXJcblx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHQuLi5yZXN0LFxuXHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRcdHBoYXNlTnVtYmVyLFxuXHRcdFx0XHRcdHBoYXNlSWQsXG5cdFx0XHRcdFx0Y29tbWVudHNQYW5lbE9wZW4sXG5cdFx0XHRcdFx0dG9nZ2xlQ29tbWVudHNQYW5lbCxcblx0XHRcdFx0XHRwcm9qZWN0VXNlcnMsXG5cdFx0XHRcdFx0dG9nZ2xlUGFnaW5hdGlvbkFjdGl2ZSxcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7Y29tbWVudHNQYW5lbE9wZW4gJiYgKFxuXHRcdFx0XHRcdDxQcm9qZWN0UmV2aWV3Q29tbWVudFBhbmVsXG5cdFx0XHRcdFx0XHR7Li4ueyBjb21tZW50cywgY29tbWVudHNQYW5lbE9wZW4sIHRvZ2dsZUNvbW1lbnRzUGFuZWwsIHByb2plY3RVc2VycyB9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG4vKiBDb21wb25lbnRzKi9cbmltcG9ydCB7IFVzZXIsIFVzZXJJbmZvIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXdDb21tZW50KHtcblx0Y29tbWVudDogY29udGVudCxcblx0Y29tbWVudEluZGV4LFxuXHRwcm9qZWN0VXNlcnMsXG5cdHNldFJlcGx5VG9Vc2VyLFxuXHRyZW5kZXJBdXRob3IgPSBmYWxzZSxcblx0c2hvd0luaXRpYWxSZXBsaWVzID0gZmFsc2UsXG59KSB7XG5cdC8qIENvbnRhbnRzICovXG5cdGNvbnN0IHsgYXV0aG9yLCBjcmVhdGVkLCBjb21tZW50LCBjb21tZW50cyB9ID0gY29udGVudDtcblxuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbc2hvd1JlcGxpZXMsIHNldFNob3dSZXBsaWVzXSA9IHVzZVN0YXRlKHNob3dJbml0aWFsUmVwbGllcyk7XG5cblx0LyogUmVuZGVyIGNvbXBvbmVudCAqL1xuXHRjb25zdCByZW5kZXJDb21tZW50ID0gKCkgPT4ge1xuXHRcdGNvbnN0IHVzZXJzUmVnZXggPSAvQFxcW1teXFxdXSpcXF1cXHtbMC05XStcXH0vZ2k7XG5cdFx0Y29uc3QgdXNlcnNBcnJheSA9IFsuLi5jb21tZW50Lm1hdGNoQWxsKHVzZXJzUmVnZXgpXTtcblx0XHRjb25zdCBjb21tZW50cyA9IGNvbW1lbnQuc3BsaXQoL0BcXFtbXlxcXV0qXFxdXFx7WzAtOV0rXFx9L2dpKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8cCBjbGFzc05hbWU9XCJsaC0tbWRcIj5cblx0XHRcdFx0e2NvbW1lbnRzLm1hcCgoY29tbWVudCwgY29tbWVudEluZGV4KSA9PiB7XG5cdFx0XHRcdFx0bGV0IHVzZXI7XG5cblx0XHRcdFx0XHRpZiAoY29tbWVudEluZGV4IGluIHVzZXJzQXJyYXkpIHtcblx0XHRcdFx0XHRcdHVzZXIgPSBwcm9qZWN0VXNlcnMuZmluZCgodXNlcikgPT4gdXNlcnNBcnJheVtjb21tZW50SW5kZXhdWzBdLmluY2x1ZGVzKHVzZXIuZGlzcGxheSkpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQga2V5PXtjb21tZW50SW5kZXh9PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb21tZW50X19jb250ZW50XCI+e2Ake2NvbW1lbnR9IGB9PC9zcGFuPnsnICd9XG5cdFx0XHRcdFx0XHRcdHt1c2VyICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tbWVudF9fbWVudGlvbiBtZW50aW9uc19fbWVudGlvbiBweC0xXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgJy0tdGhlbWUnOiB1c2VyLnVzZXJDb2xvciB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+QHt1c2VyLmRpc3BsYXl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPnsnICd9XG5cdFx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9wPlxuXHRcdCk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29tbWVudFwiPlxuXHRcdFx0XHR7cmVuZGVyQXV0aG9yICYmIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiPlxuXHRcdFx0XHRcdFx0PFVzZXIgey4uLnsgdXNlcjogYXV0aG9yIH19IC8+XG5cdFx0XHRcdFx0XHQ8VXNlckluZm9cblx0XHRcdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogYXV0aG9yLmRpc3BsYXksXG5cdFx0XHRcdFx0XHRcdFx0c3VidGl0bGU6IGAvICR7YXV0aG9yLm9yZ2FuaXNhdGlvbn1gLFxuXHRcdFx0XHRcdFx0XHRcdGxheW91dDogJ2hvcml6b250YWwnLFxuXHRcdFx0XHRcdFx0XHRcdHNpemU6ICdzbScsXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0e3R5cGVvZiBjb21tZW50SW5kZXggIT09ICd1bmRlZmluZWQnICYmIChcblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1sLWF1dG8gaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0taHNsIGljb24td3JhcHBlci0taW50ZXJhY3RpdmVcIlxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7ICctLXRoZW1lJzogYXV0aG9yLnVzZXJDb2xvciB9fT5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LS14c1wiPntjb21tZW50SW5kZXh9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtyZW5kZXJDb21tZW50KCl9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtdC0xXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY29tbWVudF9fY3JlYXRlZCB0ZXh0LW11dGVkLS02MCBtYi0wIGhyLTJcIj57Y3JlYXRlZH08L3A+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY29tbWVudF9fYWdyZWUgdGV4dC1tdXRlZC0tNjAgbWItMCBoci0yIGZvbnQtd2VpZ2h0LW5vcm1hbFwiPjcgYWdyZWU8L3A+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tbWVudF9fcmVwbHktdG9nZ2xlIGJ0biBidG4tbGluayB0ZXh0LW11dGVkLS02MCBtYi0wIGhyLTIgZm9udC13ZWlnaHQtbm9ybWFsXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldFJlcGx5VG9Vc2VyKGF1dGhvcil9PlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYnRuLXRleHQgdGV4dC13aGl0ZVwiPlJlcGx5PC9zcGFuPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdHtjb21tZW50cy5sZW5ndGggPiAwICYmIChcblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tbWVudF9fcmVwbGllcy10b2dnbGUgYnRuIGJ0bi1saW5rIHRleHQtbXV0ZWQtLTYwIG1iLTAgaHItMiBmb250LXdlaWdodC1ub3JtYWwgbWwtYXV0byB0ZXh0LXdoaXRlXCJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0U2hvd1JlcGxpZXMoIXNob3dSZXBsaWVzKX0+XG5cdFx0XHRcdFx0XHRcdHtzaG93UmVwbGllcyA/ICdIaWRlJyA6ICdTaG93J30ge2NvbW1lbnRzLmxlbmd0aH0gcmVwbGllc1xuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtjb21tZW50cy5sZW5ndGggPiAwICYmIHNob3dSZXBsaWVzICYmIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRfX3JlcGxpZXNcIj5cblx0XHRcdFx0XHRcdHtjb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8UHJvamVjdFJldmlld0NvbW1lbnRcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17Y29tbWVudC5pZH1cblx0XHRcdFx0XHRcdFx0XHRcdHsuLi57IGNvbW1lbnQsIHByb2plY3RVc2Vycywgc2V0UmVwbHlUb1VzZXIsIHJlbmRlckF1dGhvcjogdHJ1ZSB9fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEJ1dHRvbiwgVXNlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudE1lbnRpb25zIGZyb20gJy4vUHJvamVjdFJldmlld0NvbW1lbnRNZW50aW9ucyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBTZXJ2aWNlcyAqL1xuaW1wb3J0IHsgY2FsY0NvbW1lbnRQb3MgfSBmcm9tICcuL3NlcnZpY2VzJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9tYWluQ29udGV4dCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgUVVFUllfS0VZUywgYWRkQ29tbWVudCB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU5fVVAgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZUNsb3NlT25Fc2MgfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCB7IFJldmlld0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0NvbW1lbnRBZGQoeyBtYXJrZXJQb3MsIHBoYXNlSWQsIHRvZ2dsZUNvbW1lbnRBZGRPcGVuIH0pIHtcblx0LyogUmVmcyAqL1xuXHRjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cdGNvbnN0IG1vZGFsUmVmID0gdXNlUmVmKCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgbGVmdCA9ICczMHB4JywgdG9wID0gJzMwcHgnIH0gPSBjYWxjQ29tbWVudFBvcyhtb2RhbFJlZiwgbWFya2VyUG9zKTtcblxuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFttZW50aW9ucywgc2V0TWVudGlvbnNdID0gdXNlU3RhdGUoW10pO1xuXG5cdC8qIEhvb2tzICovXG5cdHVzZUNsb3NlT25Fc2MobWFya2VyUG9zLCB0b2dnbGVDb21tZW50QWRkT3Blbik7XG5cdGNvbnN0IHsgY3VycmVudFVzZXI6IHVzZXIgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblx0Y29uc3QgeyBwcm9qZWN0SW1hZ2VJZCB9ID0gdXNlQ29udGV4dChSZXZpZXdDb250ZXh0KTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgYWRkQ29tbWVudE11dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkQ29tbWVudCwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9JTUFHRV9CWV9JRCwgcGFyc2VJbnQocHJvamVjdEltYWdlSWQpXSk7XG5cdFx0XHR0b2dnbGVDb21tZW50QWRkT3BlbigpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRsYXlvdXRcblx0XHRcdHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMSB9fVxuXHRcdFx0cmVmPXttb2RhbFJlZn1cblx0XHRcdGNsYXNzTmFtZT1cInJldmlld19fY3VzdG9tLW1vZGFsIGN1c3RvbS1tb2RhbFwiXG5cdFx0XHRzdHlsZT17eyAnLS1sZWZ0JzogbGVmdCwgJy0tdG9wJzogdG9wIH19PlxuXHRcdFx0PG1vdGlvbi5kaXYga2V5PVwiY3VzdG9tLW1vZGFsLWNvbnRlbnRcIiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2NvbnRlbnQgYm9yZGVyIHAtNVwiIHsuLi5GQURFX0lOX1VQKDUwKX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19oZWFkZXIgZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHctMTAwXCI+XG5cdFx0XHRcdFx0XHQ8VXNlciB7Li4ueyB1c2VyIH19IHNpemU9XCJ4bFwiIC8+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMCBtbC0zXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtLWxnIG1iLTAgbGgtLW1kXCI+QWRkIGEgY29tbWVudDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fY2xvc2UgYnRuIGJ0bi1saW5rIG1sLWF1dG9cIlxuXHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dG9nZ2xlQ29tbWVudEFkZE9wZW59PlxuXHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEyXCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi0wIHRleHQtLW1kIGxoLS1tZFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTYwXCI+Q29tbWVudCBvcjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeVwiPiBAbWVudGlvbiA8L3NwYW4+eycgJ31cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS02MFwiPnNvbWVvbmU8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2JvZHkgZC1mbGV4IG10LTRcIj5cblx0XHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdFx0cmVmPXtmb3JtUmVmfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LWdyb3ctMVwiXG5cdFx0XHRcdFx0XHRvblN1Ym1pdD17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdGlmIChjb21tZW50Lmxlbmd0aCA+IDApIHtcblx0XHRcdFx0XHRcdFx0XHRhZGRDb21tZW50TXV0YXRpb24ubXV0YXRlKHtcblx0XHRcdFx0XHRcdFx0XHRcdHVzZXJJZDogdXNlci5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdHBoYXNlSWQ6IHBoYXNlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRjb21tZW50OiBjb21tZW50LnRyaW0oKSxcblx0XHRcdFx0XHRcdFx0XHRcdG1lbnRpb25lZDogbWVudGlvbnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRwb3NpdGlvbjogbWFya2VyUG9zLFxuXHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cImNvbW1lbnRcIj5cblx0XHRcdFx0XHRcdFx0QWRkIGEgY29tbWVudFxuXHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmUgdy0xMDBcIj5cblx0XHRcdFx0XHRcdFx0PFByb2plY3RSZXZpZXdDb21tZW50TWVudGlvbnNcblx0XHRcdFx0XHRcdFx0XHR7Li4ueyBjb21tZW50LCBzZXRDb21tZW50LCBtZW50aW9ucywgc2V0TWVudGlvbnMsIGF1dG9Gb2N1czogdHJ1ZSB9fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0ZXh0ZW5zaW9uQ2xhc3Nlcz1cImZvcm0tY29udHJvbC1idG5cIlxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnRUeXBlPVwiaWNvblwiXG5cdFx0XHRcdFx0XHRcdFx0dGhlbWU9XCJkZWZhdWx0XCJcblx0XHRcdFx0XHRcdFx0XHR7Li4ueyBpc0xvYWRpbmc6IGFkZENvbW1lbnRNdXRhdGlvbi5pc0xvYWRpbmcgfX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgTWVudGlvbnNJbnB1dCwgTWVudGlvbiB9IGZyb20gJ3JlYWN0LW1lbnRpb25zJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkVXNlckljb24gZnJvbSAnaWNvbnMvYWRkX3VzZXIuc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlckF2YXRhciwgVXNlckluZm8gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VzZXJzL1VzZXInO1xuXG4vKiBTZXJ2aWNlcyAqL1xuaW1wb3J0IHN0eWxlTWVudGlvbnMgZnJvbSAnLi9zZXJ2aWNlcy9zdHlsZU1lbnRpb24nO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IFFVRVJZX0tFWVMsIGZldGNoUHJvamVjdFVzZXJzIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IHsgUmV2aWV3Q29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3Q29tbWVudE1lbnRpb25zKHtcblx0Y29tbWVudCxcblx0c2V0Q29tbWVudCxcblx0bWVudGlvbnMsXG5cdHNldE1lbnRpb25zLFxuXHRhdXRvRm9jdXMgPSBmYWxzZSxcbn0pIHtcblx0LyogQ29udGV4dCAqL1xuXHRjb25zdCB7IHByb2plY3RJZCB9ID0gdXNlQ29udGV4dChSZXZpZXdDb250ZXh0KTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgZGF0YTogcHJvamVjdFVzZXJzID0gW10gfSA9IHVzZVF1ZXJ5KFtRVUVSWV9LRVlTLlBST0pFQ1RfVVNFUlMsIHByb2plY3RJZF0sICgpID0+IGZldGNoUHJvamVjdFVzZXJzKHsgcHJvamVjdElkIH0pKTtcblxuXHQvKiBSZWZzICovXG5cdGNvbnN0IG1lbnRpb25SZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBFZmZlY3RzICovXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKG1lbnRpb25zLmxlbmd0aCA+IDAgJiYgbWVudGlvblJlZj8uY3VycmVudCkgc3R5bGVNZW50aW9ucyhwcm9qZWN0VXNlcnMsIG1lbnRpb25SZWYuY3VycmVudCk7XG5cdH0sIFttZW50aW9ucywgbWVudGlvblJlZj8uY3VycmVudF0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8TWVudGlvbnNJbnB1dFxuXHRcdFx0XHR2YWx1ZT17Y29tbWVudH1cblx0XHRcdFx0Y2xhc3NOYW1lPVwibWVudGlvbnNcIlxuXHRcdFx0XHRpZD1cImNvbW1lbnRcIlxuXHRcdFx0XHRuYW1lPVwiY29tbWVudFwiXG5cdFx0XHRcdHBsYWNlaG9sZGVyPVwiU2F5IHNvbWV0aGluZyBuaWNlLi4uXCJcblx0XHRcdFx0b25DaGFuZ2U9eyhldmVudCkgPT4gc2V0Q29tbWVudChldmVudC50YXJnZXQudmFsdWUpfVxuXHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzdHlsZU1lbnRpb25zKHByb2plY3RVc2Vycyl9XG5cdFx0XHRcdGlucHV0UmVmPXttZW50aW9uUmVmfVxuXHRcdFx0XHRhdXRvRm9jdXM9e2F1dG9Gb2N1c30+XG5cdFx0XHRcdDxNZW50aW9uXG5cdFx0XHRcdFx0dHJpZ2dlcj1cIkBcIlxuXHRcdFx0XHRcdGRhdGE9e3Byb2plY3RVc2Vyc31cblx0XHRcdFx0XHRyZW5kZXJTdWdnZXN0aW9uPXtTdWdnZXN0aW9ufVxuXHRcdFx0XHRcdGFsbG93U3BhY2VJblF1ZXJ5XG5cdFx0XHRcdFx0YXBwZW5kU3BhY2VPbkFkZFxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1lbnRpb25zX19tZW50aW9uXCJcblx0XHRcdFx0XHRkaXNwbGF5VHJhbnNmb3JtPXsoXywgbmFtZSkgPT4gYCBAJHtuYW1lfSBgfVxuXHRcdFx0XHRcdG1hcmt1cD1cIkBbX19kaXNwbGF5X19de19faWRfX31cIlxuXHRcdFx0XHRcdG9uQWRkPXsoaWQpID0+IHNldE1lbnRpb25zKChtZW50aW9ucykgPT4gWy4uLm1lbnRpb25zLCBpZF0pfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9NZW50aW9uc0lucHV0PlxuXHRcdDwvPlxuXHQpO1xufVxuXG4vKiBDdXN0b20gU3VnZ2VzdGlvbiAqL1xuY29uc3QgU3VnZ2VzdGlvbiA9IChlbnRyeSwgcXVlcnksIGhpZ2hsaWdodGVkLCBpbmRleCwgZm9jdXNlZCkgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnRpb25fX3N1Z2dlc3Rpb24gdnItM1wiPlxuXHRcdDxidXR0b24gY2xhc3NOYW1lPXtgdXNlciB1c2VyLS1zZWxlY3QgdXNlci0teGwgJHtmb2N1c2VkICYmICdpcy1mb2N1c2VkJ31gfSB0eXBlPVwiYnV0dG9uXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PFVzZXJBdmF0YXIgey4uLmVudHJ5fSAvPlxuXHRcdFx0XHQ8VXNlckluZm9cblx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0dGl0bGU6IGVudHJ5LmRpc3BsYXksXG5cdFx0XHRcdFx0XHRzdWJ0aXRsZTogZW50cnkub3JnYW5pc2F0aW9uID8gZW50cnkub3JnYW5pc2F0aW9uIDogJ05vIG9yZ2FuaXNhdGlvbicsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19hZGQgdGV4dC1zZWNvbmRhcnkgcm91bmRlZC1jaXJjbGUgbWwtYXV0b1wiPlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9fYWRkLWljb24gaWNvbiBpY29uLS0xMiB0ZXh0LXNlY29uZGFyeVwiIHNyYz17YWRkVXNlckljb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9idXR0b24+XG5cdDwvZGl2PlxuKTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IEZBREVfSU5fVVAgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCBQcm9qZWN0UmV2aWV3TWFya2VyIGZyb20gJy4vUHJvamVjdFJldmlld01hcmtlcic7XG5pbXBvcnQgUHJvamVjdFJldmlld0NvbW1lbnQgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3Q29tbWVudCc7XG5pbXBvcnQgUHJvamVjdFJldmlld0NvbW1lbnRSZXBseSBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50UmVwbHknO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcblxuLyogU2VydmljZXMgKi9cbmltcG9ydCB7IGNhbGNDb21tZW50UG9zIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VDbG9zZU9uRXNjIH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3Q29tbWVudE1vZGFsKHsgY29tbWVudCwgY29tbWVudEluZGV4LCB0b2dnbGVDb21tZW50QWRkT3BlbiwgLi4ucmVzdCB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IHBvc2l0aW9uLCBhdXRob3IsIGlkIH0gPSBjb21tZW50O1xuXHRjb25zdCB7IHhQZXJjZW50LCB5UGVyY2VudCB9ID0gcG9zaXRpb247XG5cblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW2NvbW1lbnRPcGVuLCBzZXRDb21tZW50T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZUNvbW1lbnQgPSAoKSA9PiB7XG5cdFx0aWYgKCFjb21tZW50T3BlbikgdG9nZ2xlQ29tbWVudEFkZE9wZW4oKTtcblx0XHRzZXRDb21tZW50T3BlbighY29tbWVudE9wZW4pO1xuXHR9O1xuXG5cdC8qIEhvb2tzICovXG5cdHVzZUNsb3NlT25Fc2MoY29tbWVudE9wZW4sIHNldENvbW1lbnRPcGVuKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8UHJvamVjdFJldmlld01hcmtlclxuXHRcdFx0ey4uLnsgeFBlcmNlbnQsIHlQZXJjZW50LCBhdXRob3IsIGNvbW1lbnRJbmRleDogY29tbWVudEluZGV4ICsgMSwgY29tbWVudE9wZW4sIHRvZ2dsZUNvbW1lbnQgfX0+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7Y29tbWVudE9wZW4gJiYgPENvbW1lbnRCb3gga2V5PXtpZH0gey4uLnsgY29tbWVudCwgdG9nZ2xlQ29tbWVudCwgLi4ucmVzdCB9fSAvPn1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvUHJvamVjdFJldmlld01hcmtlcj5cblx0KTtcbn1cblxuY29uc3QgQ29tbWVudEJveCA9ICh7IGNvbW1lbnQsIHRvZ2dsZUNvbW1lbnQsIHJldmlld1JlZiwgLi4ucmVzdCB9KSA9PiB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IHBvc2l0aW9uLCBhdXRob3IgfSA9IGNvbW1lbnQ7XG5cblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW3RyYW5zZm9ybWVkUG9zLCBzZXRUcmFuc2Zvcm1lZFBvc10gPSB1c2VTdGF0ZShwb3NpdGlvbik7XG5cdGNvbnN0IFtyZXBseVRvVXNlciwgc2V0UmVwbHlUb1VzZXJdID0gdXNlU3RhdGUoKTtcblxuXHQvKiBSZWZzICovXG5cdGNvbnN0IGJveFJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIEVmZmVjdHMgKi9cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAocG9zaXRpb24pIHtcblx0XHRcdHNldFRyYW5zZm9ybWVkUG9zKCgpID0+IHtcblx0XHRcdFx0cG9zaXRpb24ucmV2aWV3UG9zID0gcmV2aWV3UmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdHJldHVybiBjYWxjQ29tbWVudFBvcyhib3hSZWYsIHBvc2l0aW9uKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwgW3Bvc2l0aW9uXSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXZcblx0XHRcdGNsYXNzTmFtZT1cInJldmlld19fY3VzdG9tLW1vZGFsIGN1c3RvbS1tb2RhbFwiXG5cdFx0XHRzdHlsZT17eyAnLS1sZWZ0JzogdHJhbnNmb3JtZWRQb3MubGVmdCwgJy0tdG9wJzogdHJhbnNmb3JtZWRQb3MudG9wIH19PlxuXHRcdFx0PG1vdGlvbi5kaXYga2V5PVwiY3VzdG9tLW1vZGFsLWNvbnRlbnRcIiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2NvbnRlbnQgYm9yZGVyIHAtNVwiIHsuLi5GQURFX0lOX1VQKDUwKX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19oZWFkZXIgZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHctMTAwXCI+XG5cdFx0XHRcdFx0XHQ8VXNlciB7Li4ueyB1c2VyOiBhdXRob3IgfX0gc2l6ZT1cInhsXCIgLz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIHctMTAwIG1sLTNcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0tbGcgbWItMCBsaC0tbWRcIj57YXV0aG9yLmRpc3BsYXl9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19jbG9zZSBidG4gYnRuLWxpbmsgbWwtYXV0b1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVDb21tZW50fT5cblx0XHRcdFx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xMlwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNjAgbWItMCB0ZXh0LS1zbSBsaC0teHNcIj57YXV0aG9yLm9yZ2FuaXNhdGlvbn08L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19ib2R5IGQtZmxleCBtdC00XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0xMDBcIj5cblx0XHRcdFx0XHRcdDxQcm9qZWN0UmV2aWV3Q29tbWVudCB7Li4ueyBjb21tZW50LCBzZXRSZXBseVRvVXNlciwgc2hvd0luaXRpYWxSZXBsaWVzOiB0cnVlLCAuLi5yZXN0IH19IC8+XG5cdFx0XHRcdFx0XHR7cmVwbHlUb1VzZXIgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8UHJvamVjdFJldmlld0NvbW1lbnRSZXBseVxuXHRcdFx0XHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXBseVRvOiByZXBseVRvVXNlcixcblx0XHRcdFx0XHRcdFx0XHRcdGNvbW1lbnRJZDogY29tbWVudC5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdHNldFJlcGx5VG9Vc2VyOiBzZXRSZXBseVRvVXNlcixcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgUHJvamVjdFJldmlld0NvbW1lbnQgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3Q29tbWVudCc7XG5pbXBvcnQgUHJvamVjdFJldmlld0NvbW1lbnRSZXBseSBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50UmVwbHknO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTTElERV9JTiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZUNsb3NlT25Fc2MgfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXdDb21tZW50UGFuZWwoeyBjb21tZW50cywgY29tbWVudHNQYW5lbE9wZW4sIHRvZ2dsZUNvbW1lbnRzUGFuZWwsIHByb2plY3RVc2VycyB9KSB7XG5cdC8qIEhvb2tzICovXG5cdHVzZUNsb3NlT25Fc2MoY29tbWVudHNQYW5lbE9wZW4sIHRvZ2dsZUNvbW1lbnRzUGFuZWwpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2IHsuLi5TTElERV9JTn0gY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtLWNvbW1lbnRzXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsX19ib2R5XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWJhc2VsaW5lIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTZcIj5cblx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwidGV4dC1jYXBpdGFsaXplXCI+QWxsIGNvbW1lbnRzPC9oNT5cblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJwYW5lbF9fY2xvc2UgYnRuIGJ0bi1saW5rIG1sLWF1dG9cIiBvbkNsaWNrPXt0b2dnbGVDb21tZW50c1BhbmVsfT5cblx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xMlwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0xMDBcIj5cblx0XHRcdFx0XHR7Y29tbWVudHM/LnJldmVyc2UoKS5tYXAoKGNvbW1lbnQsIGluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCBjb21tZW50SW5kZXggPSBjb21tZW50cy5sZW5ndGggLSBpbmRleDtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIDxDb21tZW50V2l0aFJlcGx5IGtleT17Y29tbWVudEluZGV4fSB7Li4ueyBjb21tZW50LCBjb21tZW50SW5kZXgsIHByb2plY3RVc2VycyB9fSAvPjtcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHR7Y29tbWVudHMubGVuZ3RoID09PSAwICYmIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTcwXCI+Tm8gY29tbWVudHMgeWV0PC9wPn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59XG5cbmNvbnN0IENvbW1lbnRXaXRoUmVwbHkgPSAoeyBjb21tZW50LCBjb21tZW50SW5kZXgsIHByb2plY3RVc2VycyB9KSA9PiB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtyZXBseVRvVXNlciwgc2V0UmVwbHlUb1VzZXJdID0gdXNlU3RhdGUoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8UHJvamVjdFJldmlld0NvbW1lbnQgey4uLnsgY29tbWVudCwgY29tbWVudEluZGV4LCBzZXRSZXBseVRvVXNlciwgcmVuZGVyQXV0aG9yOiB0cnVlLCBwcm9qZWN0VXNlcnMgfX0gLz5cblx0XHRcdHtyZXBseVRvVXNlciAmJiAoXG5cdFx0XHRcdDxQcm9qZWN0UmV2aWV3Q29tbWVudFJlcGx5XG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdHJlcGx5VG86IHJlcGx5VG9Vc2VyLFxuXHRcdFx0XHRcdFx0Y29tbWVudElkOiBjb21tZW50LmlkLFxuXHRcdFx0XHRcdFx0c2V0UmVwbHlUb1VzZXI6IHNldFJlcGx5VG9Vc2VyLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQpfVxuXHRcdDwvPlxuXHQpO1xufTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlciwgQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdXNlcnMvVXNlcic7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCB7IFN0YXRpY0NvbnRleHQsIFJldmlld0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuLyogRG9tYWluICovXG5pbXBvcnQgUHJvamVjdFJldmlld0NvbW1lbnRNZW50aW9ucyBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50TWVudGlvbnMnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGFkZFJlcGx5LCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0NvbW1lbnRSZXBseSh7IHJlcGx5VG8sIGNvbW1lbnRJZCwgc2V0UmVwbHlUb1VzZXIgfSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbcmVwbHksIHNldFJlcGx5XSA9IHVzZVN0YXRlKCk7XG5cdGNvbnN0IFttZW50aW9ucywgc2V0TWVudGlvbnNdID0gdXNlU3RhdGUoW10pO1xuXG5cdC8qIEVmZmVjdHMgKi9cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRSZXBseShgQFske3JlcGx5VG8uZGlzcGxheX1deyR7cmVwbHlUby5pZH19IGApO1xuXHRcdHNldE1lbnRpb25zKFtyZXBseVRvLmlkXSk7XG5cdH0sIFtyZXBseVRvXSk7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBjdXJyZW50VXNlciB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXHRjb25zdCB7IHByb2plY3RJbWFnZUlkIH0gPSB1c2VDb250ZXh0KFJldmlld0NvbnRleHQpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBhZGRSZXBseU11dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkUmVwbHksIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfSU1BR0VfQllfSUQsIHBhcnNlSW50KHByb2plY3RJbWFnZUlkKV0pO1xuXHRcdFx0c2V0UmVwbHlUb1VzZXIobnVsbCk7XG5cdFx0fSxcblx0fSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGZvcm1cblx0XHRcdGNsYXNzTmFtZT1cInJlcGx5XCJcblx0XHRcdG9uU3VibWl0PXsoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0YWRkUmVwbHlNdXRhdGlvbi5tdXRhdGUoe1xuXHRcdFx0XHRcdGNvbW1lbnRJZDogY29tbWVudElkLFxuXHRcdFx0XHRcdHJlcGx5OiByZXBseSxcblx0XHRcdFx0XHRtZW50aW9uZWQ6IG1lbnRpb25zLFxuXHRcdFx0XHR9KTtcblx0XHRcdH19PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxVc2VyIHsuLi57IHVzZXI6IGN1cnJlbnRVc2VyIH19IC8+XG5cdFx0XHRcdDxVc2VySW5mb1xuXHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHR0aXRsZTogY3VycmVudFVzZXIuZGlzcGxheSxcblx0XHRcdFx0XHRcdHN1YnRpdGxlOiBgLyAke2N1cnJlbnRVc2VyLm9yZ2FuaXNhdGlvbn1gLFxuXHRcdFx0XHRcdFx0bGF5b3V0OiAnaG9yaXpvbnRhbCcsXG5cdFx0XHRcdFx0XHRzaXplOiAnc20nLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cblx0XHRcdFx0PFByb2plY3RSZXZpZXdDb21tZW50TWVudGlvbnMgey4uLnsgY29tbWVudDogcmVwbHksIHNldENvbW1lbnQ6IHNldFJlcGx5LCBtZW50aW9ucywgc2V0TWVudGlvbnMgfX0gLz5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGV4dGVuc2lvbkNsYXNzZXM9XCJmb3JtLWNvbnRyb2wtYnRuXCJcblx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRjb250ZW50VHlwZT1cImljb25cIlxuXHRcdFx0XHRcdHRoZW1lPVwiZGVmYXVsdFwiXG5cdFx0XHRcdFx0ey4uLnsgaXNMb2FkaW5nOiBhZGRSZXBseU11dGF0aW9uLmlzTG9hZGluZyB9fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9mb3JtPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENsaWNrQXdheUxpc3RlbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTQ0FMRV9GQURFIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3TWFya2VyKHtcblx0eFBlcmNlbnQsXG5cdHlQZXJjZW50LFxuXHRhdXRob3IsXG5cdGNvbW1lbnRJbmRleCxcblx0Y29tbWVudE9wZW4sXG5cdHRvZ2dsZUNvbW1lbnQsXG5cdGNoaWxkcmVuLFxufSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXHRjb25zdCB1c2VyID0gYXV0aG9yID8gYXV0aG9yIDogY3VycmVudFVzZXI7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PENsaWNrQXdheUxpc3RlbmVyXG5cdFx0XHRvbkNsaWNrQXdheT17KCkgPT4ge1xuXHRcdFx0XHRpZiAoY29tbWVudE9wZW4pIHRvZ2dsZUNvbW1lbnQoKTtcblx0XHRcdH19PlxuXHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0bGF5b3V0XG5cdFx0XHRcdHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMSB9fVxuXHRcdFx0XHRjbGFzc05hbWU9XCJyZXZpZXdfX2ludGVyYWN0aW9uXCJcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHQnLS14JzogeFBlcmNlbnQsXG5cdFx0XHRcdFx0Jy0teSc6IHlQZXJjZW50LFxuXHRcdFx0XHR9fT5cblx0XHRcdFx0PG1vdGlvbi5idXR0b25cblx0XHRcdFx0XHR7Li4uU0NBTEVfRkFERX1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJyZXZpZXdfX21hcmtlciBpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnkgYnRuIGJ0bi1saW5rIHRleHQtcmVzZXRcIlxuXHRcdFx0XHRcdHN0eWxlPXt7ICctLXRoZW1lJzogYCR7dXNlci51c2VyQ29sb3J9YCB9fVxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZUNvbW1lbnR9PlxuXHRcdFx0XHRcdHtjb21tZW50SW5kZXggJiYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0teHNcIj57Y29tbWVudEluZGV4fTwvc3Bhbj59XG5cdFx0XHRcdDwvbW90aW9uLmJ1dHRvbj5cblx0XHRcdFx0PGRpdj57Y2hpbGRyZW59PC9kaXY+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0PC9DbGlja0F3YXlMaXN0ZW5lcj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgeyBSZXZpZXdDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dCc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNoZXZyb25JY29uIGZyb20gJ2ljb25zL2NoZXZyb24uc3ZnJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZUV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbi8qIEFuaW1hdGlvbiAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3UGFnaW5hdGlvbih7IGFsbEltYWdlcyB9KSB7XG5cdC8qIEhvb2tzICovXG5cdHVzZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgaGFuZGxlS2V5VXApO1xuXHRjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG5cdC8qIENvbnRleHQgKi9cblx0Y29uc3QgeyBwcm9qZWN0SW1hZ2VJZCB9ID0gdXNlQ29udGV4dChSZXZpZXdDb250ZXh0KTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgY3VycmVudEltYWdlID0gYWxsSW1hZ2VzLmluZGV4T2YoTnVtYmVyKHByb2plY3RJbWFnZUlkKSk7XG5cdGNvbnN0IHByZXZJbWFnZSA9IGFsbEltYWdlc1tjdXJyZW50SW1hZ2UgPT09IDAgPyBhbGxJbWFnZXMubGVuZ3RoIC0gMSA6IGN1cnJlbnRJbWFnZSAtIDFdO1xuXHRjb25zdCBuZXh0SW1hZ2UgPSBhbGxJbWFnZXNbY3VycmVudEltYWdlID09PSBhbGxJbWFnZXMubGVuZ3RoIC0gMSA/IDAgOiBjdXJyZW50SW1hZ2UgKyAxXTtcblxuXHRmdW5jdGlvbiBoYW5kbGVLZXlVcChldmVudCkge1xuXHRcdGlmIChldmVudC5rZXkgPT09ICdBcnJvd0xlZnQnICYmIHByZXZJbWFnZSkgbmF2aWdhdGUoJ3ByZXYnKTtcblx0XHRpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dSaWdodCcgJiYgbmV4dEltYWdlKSBuYXZpZ2F0ZSgnbmV4dCcpO1xuXHR9XG5cblx0Y29uc3QgbmF2aWdhdGUgPSAoZGlyZWN0aW9uKSA9PiB7XG5cdFx0aWYgKGRpcmVjdGlvbiA9PT0gJ3ByZXYnKSBoaXN0b3J5LnB1c2gocHJldkltYWdlLnRvU3RyaW5nKCkpO1xuXHRcdGlmIChkaXJlY3Rpb24gPT09ICduZXh0JykgaGlzdG9yeS5wdXNoKG5leHRJbWFnZS50b1N0cmluZygpKTtcblx0fTtcblxuXHRyZXR1cm4gKFxuXHRcdGFsbEltYWdlcy5sZW5ndGggPiAxICYmIChcblx0XHRcdDxtb3Rpb24uZGl2IGtleT1cInBhZ2luYXRpb25cIiB7Li4uRkFERV9JTn0gY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25fX2J0bi13cmFwcGVyIHBhZ2luYXRpb25fX2J0bi13cmFwcGVyLS1wcmV2XCI+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicGFnaW5hdGlvbl9fYnRuIHBhZ2luYXRpb25fX2J0bi0tcHJldiBidG4gYnRuLWxpbmsgdGV4dC1yZXNldFwiXG5cdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCdwcmV2Jyl9PlxuXHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uX19pY29uIGljb24gaWNvbi0tMTJcIiBzcmM9e2NoZXZyb25JY29ufSAvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uX19idG4td3JhcHBlciBwYWdpbmF0aW9uX19idG4td3JhcHBlci0tbmV4dFwiPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBhZ2luYXRpb25fX2J0biBwYWdpbmF0aW9uX19idG4tLW5leHQgYnRuIGJ0bi1saW5rIHRleHQtcmVzZXRcIlxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgnbmV4dCcpfT5cblx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwicGFnaW5hdGlvbl9faWNvbiBpY29uIGljb24tLTEyXCIgc3JjPXtjaGV2cm9uSWNvbn0gLz5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0KVxuXHQpO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0UmV2aWV3Q2FudmFzIH0gZnJvbSAnLi9Qcm9qZWN0UmV2aWV3Q2FudmFzJztcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCB7IEVkaXRBY3Rpb24sIFBoYXNlQWN0aW9uLCBQaGFzZU5leHRBY3Rpb24sIFNoYXJlQWN0aW9uIH0gZnJvbSAnLi9hY3Rpb25zJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY29tbWVudEljb24gZnJvbSAnaWNvbnMvY29tbWVudC5zdmcnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgeyBSZXZpZXdDb250ZXh0LCBTdGF0aWNDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vY29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXdBY3Rpb25CYXIoe1xuXHRhbGxJbWFnZXMsXG5cdGFsbFBoYXNlcyxcblx0dGl0bGUsXG5cdGRlc2NyaXB0aW9uLFxuXHRwaGFzZU51bWJlcixcblx0cGhhc2VJZCxcblx0Y29tbWVudHNQYW5lbE9wZW4sXG5cdHRvZ2dsZUNvbW1lbnRzUGFuZWwsXG5cdHByb2plY3RVc2Vycyxcblx0dG9nZ2xlUGFnaW5hdGlvbkFjdGl2ZSxcbn0pIHtcblx0LyogQ29udGV4dCAqL1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyLCB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblxuXHQvKiBDb250ZXh0ICovXG5cdGNvbnN0IHsgcHJvamVjdEltYWdlSWQgfSA9IHVzZUNvbnRleHQoUmV2aWV3Q29udGV4dCk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFyIGJhci0tcmV2aWV3XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0wIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxVc2VyIHsuLi57IHVzZXI6IGN1cnJlbnRVc2VyLCBzaXplOiAnbGcnIH19IC8+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1sLTNcIj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbGgtLXNtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LS1zbSBtYi0wIHRleHQtdHJ1bmNhdGVcIiBzdHlsZT17eyBtYXhXaWR0aDogMTIwIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGxoLS1zbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0teHMgdGV4dC1tdXRlZC0tNzAgbWItMFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7YWxsSW1hZ2VzLmluZGV4T2YoTnVtYmVyKHByb2plY3RJbWFnZUlkKSkgKyAxfSBvZiB7YWxsSW1hZ2VzLmxlbmd0aH1cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm14LTEgdGV4dC1tdXRlZC0tMjBcIj4vPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PFBoYXNlQWN0aW9uIHsuLi57IGFsbFBoYXNlcywgcGhhc2VOdW1iZXIsIHVzZXJSb2xlLCB0b2dnbGVQYWdpbmF0aW9uQWN0aXZlIH19IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBoci0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3VzZXJSb2xlID09PSAnYWRtaW4nICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdDxFZGl0QWN0aW9uIHsuLi57IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdEltYWdlSWQsIHRvZ2dsZVBhZ2luYXRpb25BY3RpdmUgfX0gLz5cblx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGJhcl9fYWN0aW9uLWJ0biAke1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29tbWVudHNQYW5lbE9wZW4gJiYgJ2lzLWFjdGl2ZSdcblx0XHRcdFx0XHRcdFx0XHR9IGJ0biBidG4tbGluayB0ZXh0LXJlc3QgaHItMmB9XG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dG9nZ2xlQ29tbWVudHNQYW5lbH0+XG5cdFx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTE2XCIgc3JjPXtjb21tZW50SWNvbn0gLz5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmUgaHItMlwiPlxuXHRcdFx0XHRcdFx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8UGhhc2VOZXh0QWN0aW9uIHsuLi57IHBoYXNlSWQsIHByb2plY3RJbWFnZUlkLCB0b2dnbGVQYWdpbmF0aW9uQWN0aXZlIH19IC8+XG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cblx0XHRcdFx0XHRcdFx0e3VzZXJSb2xlID09PSAnYWRtaW4nICYmIDxTaGFyZUFjdGlvbiB7Li4ueyBwcm9qZWN0VXNlcnMsIHRvZ2dsZVBhZ2luYXRpb25BY3RpdmUgfX0gLz59XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTW9kYWwsIEVkaXRhYmxlQm9keSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBlZGl0SWNvbiBmcm9tICdpY29ucy9lZGl0LnN2Zyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZWRpdFByb2plY3RJbWFnZSwgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uLy4uLy4uL2FwaSc7XG5cbi8qIE9wdGlvbnMgKi9cbmltcG9ydCB7IG1vZGFsT3B0aW9ucyB9IGZyb20gJy4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0QWN0aW9uKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0SW1hZ2VJZCwgdG9nZ2xlUGFnaW5hdGlvbkFjdGl2ZSB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHtcblx0XHR0b2dnbGVQYWdpbmF0aW9uQWN0aXZlKCk7XG5cdFx0c2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pO1xuXHR9O1xuXG5cdC8qIG11dGF0aW9ucyAqL1xuXHRjb25zdCBtdXRhdGlvbk9uU3VjY2VzcyA9ICgpID0+IHtcblx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0lNQUdFX0JZX0lELCBOdW1iZXIocHJvamVjdEltYWdlSWQpXSk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0Y2xhc3NOYW1lPXtgYmFyX19hY3Rpb24tYnRuICR7bW9kYWxPcGVuICYmICdpcy1hY3RpdmUnfSBidG4gYnRuLWxpbmsgdGV4dC1yZXN0YH1cblx0XHRcdFx0b25DbGljaz17dG9nZ2xlTW9kYWx9PlxuXHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTZcIiBzcmM9e2VkaXRJY29ufSAvPlxuXHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHR0aXRsZTogJ0VkaXRpbmcgaW1hZ2UnLFxuXHRcdFx0XHRcdHN1YnRpdGxlOiAnU2F2ZSB3aGVuIHJlYWR5Jyxcblx0XHRcdFx0XHRtb2RhbE9wZW46IG1vZGFsT3Blbixcblx0XHRcdFx0XHR0b2dnbGVNb2RhbDogdG9nZ2xlTW9kYWwsXG5cdFx0XHRcdFx0Li4ubW9kYWxPcHRpb25zLFxuXHRcdFx0XHR9fT5cblx0XHRcdFx0PEVkaXRhYmxlQm9keVxuXHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHR0b2dnbGVNb2RhbDogdG9nZ2xlTW9kYWwsXG5cdFx0XHRcdFx0XHRmaWVsZHM6IFtcblx0XHRcdFx0XHRcdFx0eyBuYW1lOiAndGl0bGUnLCBkZWZhdWx0VmFsdWU6IHRpdGxlIH0sXG5cdFx0XHRcdFx0XHRcdHsgbmFtZTogJ2Rlc2NyaXB0aW9uJywgZGVmYXVsdFZhbHVlOiBkZXNjcmlwdGlvbiB9LFxuXHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdG11dGF0aW9uOiBlZGl0UHJvamVjdEltYWdlLFxuXHRcdFx0XHRcdFx0bXV0YXRpb25JZDogcHJvamVjdEltYWdlSWQsXG5cdFx0XHRcdFx0XHRtdXRhdGlvbk9uU3VjY2VzczogbXV0YXRpb25PblN1Y2Nlc3MsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvTW9kYWw+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBNb2RhbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjaGV2cm9uSWNvbiBmcm9tICdpY29ucy9jaGV2cm9uLnN2Zyc7XG5pbXBvcnQgY2hlY2tJY29uIGZyb20gJ2ljb25zL2NoZWNrLnN2Zyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCB7IFJldmlld0NvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb250ZXh0JztcblxuLyogT3B0aW9ucyAqL1xuaW1wb3J0IHsgbW9kYWxPcHRpb25zIH0gZnJvbSAnLic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBoYXNlQWN0aW9uKHsgYWxsUGhhc2VzLCBwaGFzZU51bWJlciwgdXNlclJvbGUsIHRvZ2dsZVBhZ2luYXRpb25BY3RpdmUgfSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdC8qIENvbnRleHQgKi9cblx0Y29uc3QgeyBhY3RpdmVQaGFzZSA9IGFsbFBoYXNlc1thbGxQaGFzZXMubGVuZ3RoIC0gMV0sIHNldEFjdGl2ZVBoYXNlIH0gPSB1c2VDb250ZXh0KFJldmlld0NvbnRleHQpO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHtcblx0XHRpZiAodXNlclJvbGUgIT09ICdhZG1pbicpIHJldHVybjtcblxuXHRcdHRvZ2dsZVBhZ2luYXRpb25BY3RpdmUoKTtcblx0XHRzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbik7XG5cdH07XG5cblx0Y29uc3QgbmF2aWdhdGVUb1BoYXNlID0gKHBoYXNlKSA9PiB7XG5cdFx0c2V0QWN0aXZlUGhhc2UocGhhc2UpO1xuXHRcdHRvZ2dsZU1vZGFsKCk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0Y2xhc3NOYW1lPXtgYnRuIGJ0bi1saW5rIGJ0bi0tbW9kYWwgdGV4dC1yZXNldCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyICR7bW9kYWxPcGVuICYmICdpcy1hY3RpdmUnfWB9XG5cdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfT5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0teHMgdGV4dC1tdXRlZC0tNzAgbWItMFwiPlBoYXNlIHtwaGFzZU51bWJlcn08L3A+XG5cdFx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiAoXG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTggdGV4dC1tdXRlZC0tNTAgIG1sLTFcIiBzcmM9e2NoZXZyb25JY29ufSAvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHR0aXRsZTogJ0Nob29zZSBwaGFzZScsXG5cdFx0XHRcdFx0c3VidGl0bGU6ICdOYXZpZ2F0ZSB0byBzZWxlY3RlZCBwaGFzZScsXG5cdFx0XHRcdFx0bW9kYWxPcGVuOiBtb2RhbE9wZW4sXG5cdFx0XHRcdFx0dG9nZ2xlTW9kYWw6IHRvZ2dsZU1vZGFsLFxuXHRcdFx0XHRcdC4uLm1vZGFsT3B0aW9ucyxcblx0XHRcdFx0XHRleHRlbnNpb25DbGFzc2VzOiAnYmFyX19tb2RhbCBiYXJfX21vZGFsLS1sZWZ0Jyxcblx0XHRcdFx0fX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtdC0yXCI+XG5cdFx0XHRcdFx0e2FsbFBoYXNlcy5tYXAoKHBoYXNlLCBwaGFzZUluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdGtleT17cGhhc2VJbmRleH1cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIGljb24td3JhcHBlciBpY29uLXdyYXBwZXItLWludGVyYWN0aXZlIGljb24td3JhcHBlci0tc2Vjb25kYXJ5IGhyLTIgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIlxuXHRcdFx0XHRcdFx0XHRzdHlsZT17eyAnLS1zaXplJzogMzUgfX1cblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gbmF2aWdhdGVUb1BoYXNlKHBoYXNlKX0+XG5cdFx0XHRcdFx0XHRcdHthY3RpdmVQaGFzZSA9PT0gcGhhc2UgPyAoXG5cdFx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEyIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXtjaGVja0ljb259IC8+XG5cdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnlcIj57cGhhc2VJbmRleCArIDF9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9Nb2RhbD5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IE1vZGFsLCBEcm9wem9uZVNpbmdsZSwgQnV0dG9uIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IG5leHRJY29uIGZyb20gJ2ljb25zL25leHQuc3ZnJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBuZXh0UGhhc2UsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi8uLi8uLi9hcGknO1xuXG4vKiBPcHRpb25zICovXG5pbXBvcnQgeyBtb2RhbE9wdGlvbnMgfSBmcm9tICcuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGhhc2VOZXh0QWN0aW9uKHsgcGhhc2VJZCwgcHJvamVjdEltYWdlSWQsIHRvZ2dsZVBhZ2luYXRpb25BY3RpdmUgfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKFtdKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG5cdFx0dG9nZ2xlUGFnaW5hdGlvbkFjdGl2ZSgpO1xuXHRcdHNldE1vZGFsT3BlbighbW9kYWxPcGVuKTtcblx0fTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgbmV4dFBoYXNlTXV0YXRpb24gPSB1c2VNdXRhdGlvbihuZXh0UGhhc2UsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHRvZ2dsZU1vZGFsKCk7XG5cdFx0XHRzZXRJbWFnZXMoW10pO1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9JTUFHRV9CWV9JRCwgTnVtYmVyKHByb2plY3RJbWFnZUlkKV0pO1xuXHRcdH0sXG5cdH0pO1xuXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0Y2xhc3NOYW1lPXtgYmFyX19hY3Rpb24tYnRuICR7bW9kYWxPcGVuICYmICdpcy1hY3RpdmUnfSBidG4gYnRuLWxpbmsgdGV4dC1yZXN0YH1cblx0XHRcdFx0b25DbGljaz17dG9nZ2xlTW9kYWx9PlxuXHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTZcIiBzcmM9e25leHRJY29ufSAvPlxuXHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8TW9kYWxcblx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHR0aXRsZTogJ05leHQgcGhhc2UnLFxuXHRcdFx0XHRcdHN1YnRpdGxlOiAnQWRkIGEgbmV3IGltYWdlIGZvciB0aGUgbmV4dCBwaGFzZScsXG5cdFx0XHRcdFx0bW9kYWxPcGVuOiBtb2RhbE9wZW4sXG5cdFx0XHRcdFx0dG9nZ2xlTW9kYWw6IHRvZ2dsZU1vZGFsLFxuXHRcdFx0XHRcdC4uLm1vZGFsT3B0aW9ucyxcblx0XHRcdFx0fX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIHctMTAwXCI+XG5cdFx0XHRcdFx0PERyb3B6b25lU2luZ2xlIHsuLi57IGltYWdlcywgc2V0SW1hZ2VzIH19IC8+XG5cdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0dGl0bGU9XCJOZXh0IHBoYXNlXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG5leHRQaGFzZU11dGF0aW9uLm11dGF0ZSh7IHBoYXNlSWQ6IHBoYXNlSWQsIGltYWdlczogaW1hZ2VzIH0pfVxuXHRcdFx0XHRcdFx0ZXh0ZW5zaW9uQ2xhc3Nlcz1cIm10LTMgdy01MCBteC1hdXRvIGp1c3RpZnktY29udGVudC1jZW50ZXJcIlxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9Nb2RhbD5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTW9kYWwsIEJ1dHRvbiwgVXNlckFkZFNlYXJjaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRVc2VySWNvbiBmcm9tICdpY29ucy9hZGRfdXNlci5zdmcnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgeyBSZXZpZXdDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGV4dCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uLy4uLy4uL2FwaSc7XG5cbi8qIE9wdGlvbnMgKi9cbmltcG9ydCB7IG1vZGFsT3B0aW9ucyB9IGZyb20gJy4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaGFyZUFjdGlvbih7IHByb2plY3RVc2VycywgdG9nZ2xlUGFnaW5hdGlvbkFjdGl2ZSB9KSB7XG5cdC8qIENvbnRleHQgKi9cblx0Y29uc3QgeyBwcm9qZWN0SWQgfSA9IHVzZUNvbnRleHQoUmV2aWV3Q29udGV4dCk7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZU1vZGFsID0gKCkgPT4ge1xuXHRcdHRvZ2dsZVBhZ2luYXRpb25BY3RpdmUoKTtcblx0XHRzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbik7XG5cdH07XG5cblx0Y29uc3QgaW52YWxpZGF0ZVF1ZXJpZXMgPSAoKSA9PiB7XG5cdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9VU0VSUywgcHJvamVjdElkXSk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxCdXR0b24gdGl0bGU9XCJTaGFyZVwiIGV4dGVuc2lvbkNsYXNzZXM9XCJweC01XCIgb25DbGljaz17dG9nZ2xlTW9kYWx9PlxuXHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTIgbXItMVwiIHNyYz17YWRkVXNlckljb259IC8+XG5cdFx0XHQ8L0J1dHRvbj5cblx0XHRcdDxNb2RhbFxuXHRcdFx0XHR0aXRsZT1cIlNlbGVjdCB1c2Vyc1wiXG5cdFx0XHRcdHN1YnRpdGxlPVwiQ2hvb3NlIHNvbWUgdXNlcnMgdG8gY29sbGFib3JhdGUgd2l0aC5cIlxuXHRcdFx0XHR7Li4ueyBtb2RhbE9wZW4sIHRvZ2dsZU1vZGFsLCAuLi5tb2RhbE9wdGlvbnMsIGV4dGVuc2lvbkNsYXNzZXM6ICdiYXJfX21vZGFsIGJhcl9fbW9kYWwtLXJpZ2h0JyB9fT5cblx0XHRcdFx0PFVzZXJBZGRTZWFyY2hcblx0XHRcdFx0XHR7Li4ueyB1c2VyczogcHJvamVjdFVzZXJzLCBwcm9qZWN0OiB7IGlkOiBwcm9qZWN0SWQgfSwgdG9nZ2xlTW9kYWwsIGludmFsaWRhdGVRdWVyaWVzIH19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiaW1wb3J0IHsgU0NBTEVfSU5fVVAgfSBmcm9tICcuLi8uLi8uLi8uLi9hbmltYXRpb25zJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFZGl0QWN0aW9uIH0gZnJvbSAnLi9FZGl0QWN0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGhhc2VBY3Rpb24gfSBmcm9tICcuL1BoYXNlQWN0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGhhc2VOZXh0QWN0aW9uIH0gZnJvbSAnLi9QaGFzZU5leHRBY3Rpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTaGFyZUFjdGlvbiB9IGZyb20gJy4vU2hhcmVBY3Rpb24nO1xuXG4vKiBHbG9iYWwgKi9cbmV4cG9ydCBjb25zdCBtb2RhbE9wdGlvbnMgPSB7XG5cdHJlbmRlck9uQm9keTogZmFsc2UsXG5cdGNlbnRlcjogZmFsc2UsXG5cdGV4dGVuc2lvbkNsYXNzZXM6ICdiYXJfX21vZGFsJyxcblx0Y3VzdG9tQW5pbWF0aW9uOiBTQ0FMRV9JTl9VUCgyMCksXG59O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0UmV2aWV3QWN0aW9uQmFyIH0gZnJvbSAnLi9Qcm9qZWN0UmV2aWV3QWN0aW9uQmFyJztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGNDb21tZW50UG9zKHJlZiwgcG9zKSB7XG5cdGNvbnN0IG1hcmtlclNwYWNlciA9IDEwO1xuXHRjb25zdCBtYXJrZXJTaXplID0gMjA7XG5cdGNvbnN0IG9mZnNldCA9IG1hcmtlclNpemUgKyBtYXJrZXJTcGFjZXI7XG5cblx0LyogR2V0IHBvc2l0aW9uIG9mIG1hcmtlciAqL1xuXHRjb25zdCByZXZpZXdQb3MgPSBwb3MucmV2aWV3UG9zO1xuXHRjb25zdCB4UGVyY2VudCA9IE51bWJlcihwb3MueFBlcmNlbnQpO1xuXHRjb25zdCB5UGVyY2VudCA9IE51bWJlcihwb3MueVBlcmNlbnQpO1xuXG5cdC8qIEdldCBkaW1lbnNpb25zIG9mIGN1cnJlbnQgYm94ICovXG5cdGNvbnN0IHsgd2lkdGg6IGJveFdpZHRoID0gNDAwLCBoZWlnaHQ6IGJveEhlaWdodCA9IDIyOCB9ID0gcmVmPy5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSB8fCB7fTtcblxuXHQvKiBHZXQgZGltZW5zaW9ucyBvZiBjdXJyZW50IHNjcmVlbiAqL1xuXHRjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRjb25zdCBib3hQZXJjZW50V2lkdGggPSAoYm94V2lkdGggLyBzY3JlZW5XaWR0aCkgKiAxMDA7XG5cblx0Y29uc3Qgc2NyZWVuSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gcmV2aWV3UG9zLnRvcDtcblx0Y29uc3QgYm94UGVyY2VudEhlaWdodCA9IChib3hIZWlnaHQgLyBzY3JlZW5IZWlnaHQpICogMTAwO1xuXG5cdC8qIFNldCB4IGFuZCB5IHZhbHVlcyB0byBwZXJjZW50YWdlIGVxdWl2ZWxlbnQgdG8gbWFrZSB0aGUgYm94IHJlc3BvbnNpdmUgKi9cblx0bGV0IGxlZnQgPSBvZmZzZXQ7XG5cdGxldCB0b3AgPSBvZmZzZXQ7XG5cblx0LyogQ29tcGVuc2F0ZSBmb3IgdGhlIGJveFdpZHRoIGlmIG1hcmtlciBpcyBhdCBlbmQgb2YgaG9yaXpvbnRhbCBzY3JlZW4gKi9cblx0aWYgKHhQZXJjZW50ICsgYm94UGVyY2VudFdpZHRoID4gMTAwKSB7XG5cdFx0bGVmdCA9IC1ib3hXaWR0aCAtIG1hcmtlclNwYWNlcjtcblx0fVxuXG5cdC8qIENvbXBlbnNhdGUgZm9yIHRoZSBib3hIZWlnaHQgaWYgbWFya2VyIGlzIGF0IGVuZCBvZiB2ZXJ0aWNhbCBzY3JlZW4gKi9cblx0aWYgKHlQZXJjZW50ICsgYm94UGVyY2VudEhlaWdodCA+IDEwMCkge1xuXHRcdHRvcCA9IC1ib3hIZWlnaHQgLSBtYXJrZXJTcGFjZXI7XG5cdH1cblxuXHRyZXR1cm4geyBsZWZ0OiBgJHtsZWZ0fXB4YCwgdG9wOiBgJHt0b3B9cHhgIH07XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhbGNDb21tZW50UG9zIH0gZnJvbSAnLi9jYWxjQ29tbWVudFBvcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0eWxlTWVudGlvbiB9IGZyb20gJy4vc3R5bGVNZW50aW9uJztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0eWxlTWVudGlvbnModXNlcnMsIGlucHV0KSB7XG5cdGNvbnN0IG1lbnRpb25Ob2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW50aW9ucyAubWVudGlvbnNfX21lbnRpb24nKSB8fCBbXTtcblxuXHRpZiAobWVudGlvbk5vZGVzLmxlbmd0aCA+IDApIHtcblx0XHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbWVudGlvbk5vZGVzLmxlbmd0aDsgaW5kZXgrKykge1xuXHRcdFx0Y29uc3QgbWVudGlvbiA9IG1lbnRpb25Ob2Rlc1tpbmRleF07XG5cblx0XHRcdGNvbnN0IG1lbnRpb25Jbm5lciA9IG1lbnRpb24uaW5uZXJIVE1MLnJlcGxhY2UoJ0AnLCAnJykudHJpbSgpO1xuXHRcdFx0Y29uc3QgdXNlck9mTWVudGlvbiA9IHVzZXJzLmZpbmQoKHVzZXIpID0+IHVzZXIuZGlzcGxheSA9PT0gbWVudGlvbklubmVyKTtcblxuXHRcdFx0bWVudGlvbi5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10aGVtZScsIHVzZXJPZk1lbnRpb24udXNlckNvbG9yKTtcblxuXHRcdFx0aWYgKGlucHV0KSB7XG5cdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdGlucHV0LmZvY3VzKCk7XG5cdFx0XHRcdFx0aW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoMjAwLCAtMSk7XG5cdFx0XHRcdH0sIDEpO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VTZWxlY3Rpb24gfSBmcm9tICcuL3VzZVNlbGVjdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZVBhZ2VUaXRsZSB9IGZyb20gJy4vdXNlUGFnZVRpdGxlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlU3RvcmFnZSB9IGZyb20gJy4vdXNlU3RvcmFnZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUV2ZW50TGlzdGVuZXIgfSBmcm9tICcuL3VzZUV2ZW50TGlzdGVuZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VDbG9zZU9uRXNjIH0gZnJvbSAnLi91c2VDbG9zZU9uRXNjJztcbiIsIi8qIFBhY2thZ3MgKi9cbmltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuXG4vKiBDdXN0b20gaG9vayAqL1xuaW1wb3J0IHVzZUV2ZW50TGlzdGVuZXIgZnJvbSAnLi91c2VFdmVudExpc3RlbmVyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlQ2xvc2VPbkVzYyhzdGF0dXMsIHRvZ2dsZSkge1xuXHQvKiBDYWxsYmFjayAqL1xuXHRjb25zdCBoYW5kbGVLZXlVcCA9IHVzZUNhbGxiYWNrKCh7IGtleSB9KSA9PiB7XG5cdFx0aWYgKFsnRXNjYXBlJ10uaW5jbHVkZXMoa2V5KSAmJiBzdGF0dXMpIHRvZ2dsZSgpO1xuXHR9KTtcblxuXHQvKiBIb29rICovXG5cdHVzZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgaGFuZGxlS2V5VXApO1xufVxuIiwiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyLCBlbGVtZW50ID0gd2luZG93KSB7XG5cdC8vIENyZWF0ZSBhIHJlZiB0aGF0IHN0b3JlcyBoYW5kbGVyXG5cdGNvbnN0IHNhdmVkSGFuZGxlciA9IHVzZVJlZigpO1xuXHQvLyBVcGRhdGUgcmVmLmN1cnJlbnQgdmFsdWUgaWYgaGFuZGxlciBjaGFuZ2VzLlxuXHQvLyBUaGlzIGFsbG93cyBvdXIgZWZmZWN0IGJlbG93IHRvIGFsd2F5cyBnZXQgbGF0ZXN0IGhhbmRsZXIgLi4uXG5cdC8vIC4uLiB3aXRob3V0IHVzIG5lZWRpbmcgdG8gcGFzcyBpdCBpbiBlZmZlY3QgZGVwcyBhcnJheSAuLi5cblx0Ly8gLi4uIGFuZCBwb3RlbnRpYWxseSBjYXVzZSBlZmZlY3QgdG8gcmUtcnVuIGV2ZXJ5IHJlbmRlci5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzYXZlZEhhbmRsZXIuY3VycmVudCA9IGhhbmRsZXI7XG5cdH0sIFtoYW5kbGVyXSk7XG5cblx0dXNlRWZmZWN0KFxuXHRcdCgpID0+IHtcblx0XHRcdC8vIE1ha2Ugc3VyZSBlbGVtZW50IHN1cHBvcnRzIGFkZEV2ZW50TGlzdGVuZXJcblx0XHRcdC8vIE9uXG5cdFx0XHRjb25zdCBpc1N1cHBvcnRlZCA9IGVsZW1lbnQgJiYgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyO1xuXHRcdFx0aWYgKCFpc1N1cHBvcnRlZCkgcmV0dXJuO1xuXHRcdFx0Ly8gQ3JlYXRlIGV2ZW50IGxpc3RlbmVyIHRoYXQgY2FsbHMgaGFuZGxlciBmdW5jdGlvbiBzdG9yZWQgaW4gcmVmXG5cdFx0XHRjb25zdCBldmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiBzYXZlZEhhbmRsZXIuY3VycmVudChldmVudCk7XG5cdFx0XHQvLyBBZGQgZXZlbnQgbGlzdGVuZXJcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpO1xuXHRcdFx0Ly8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyIG9uIGNsZWFudXBcblx0XHRcdHJldHVybiAoKSA9PiB7XG5cdFx0XHRcdGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpO1xuXHRcdFx0fTtcblx0XHR9LFxuXHRcdFtldmVudE5hbWUsIGVsZW1lbnRdIC8vIFJlLXJ1biBpZiBldmVudE5hbWUgb3IgZWxlbWVudCBjaGFuZ2VzXG5cdCk7XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVBhZ2VUaXRsZSh0aXRsZSwgdXBkYXRlUHJvcHMgPSBbXSkge1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGRvY3VtZW50LnRpdGxlID0gYCR7dGl0bGUgPyB0aXRsZSArICcgfCBQYXJhbGxlbCBEYXNoYm9hcmQnIDogZG9jdW1lbnQudGl0bGV9YDtcblx0fSwgWy4uLnVwZGF0ZVByb3BzXSk7XG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU2VsZWN0aW9uKCkge1xuXHRjb25zdCBbc2VsZWN0ZWQsIHNldFNlbGVjdGVkXSA9IHVzZVN0YXRlKFtdKTtcblxuXHRjb25zdCB1cGRhdGVTZWxlY3RlZCA9IChpZCkgPT4ge1xuXHRcdHNldFNlbGVjdGVkKChzZWxlY3RlZCkgPT4ge1xuXHRcdFx0aWYgKHNlbGVjdGVkLmluY2x1ZGVzKGlkKSkge1xuXHRcdFx0XHRyZXR1cm4gc2VsZWN0ZWQuZmlsdGVyKChzZWxlY3RlZElkKSA9PiBzZWxlY3RlZElkICE9PSBpZCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBbLi4uc2VsZWN0ZWQsIGlkXTtcblx0XHR9KTtcblx0fTtcblxuXHRjb25zdCByZXNldFNlbGVjdGVkID0gKCkgPT4gc2V0U2VsZWN0ZWQoW10pO1xuXG5cdHJldHVybiB7IHNlbGVjdGVkLCB1cGRhdGVTZWxlY3RlZCwgcmVzZXRTZWxlY3RlZCB9O1xufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbi8vIEhvb2tcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVN0b3JhZ2Uoa2V5LCBpbml0aWFsVmFsdWUsIHN0b3JhZ2VUeXBlID0gJ3Nlc3Npb25TdG9yYWdlJykge1xuXHQvLyBTdGF0ZSB0byBzdG9yZSBvdXIgdmFsdWVcblx0Ly8gUGFzcyBpbml0aWFsIHN0YXRlIGZ1bmN0aW9uIHRvIHVzZVN0YXRlIHNvIGxvZ2ljIGlzIG9ubHkgZXhlY3V0ZWQgb25jZVxuXHRjb25zdCBbc3RvcmVkVmFsdWUsIHNldFN0b3JlZFZhbHVlXSA9IHVzZVN0YXRlKCgpID0+IHtcblx0XHR0cnkge1xuXHRcdFx0Ly8gR2V0IGZyb20gbG9jYWwgc3RvcmFnZSBieSBrZXlcblx0XHRcdGNvbnN0IGl0ZW0gPSB3aW5kb3dbc3RvcmFnZVR5cGVdLmdldEl0ZW0oa2V5KTtcblxuXHRcdFx0Ly8gSWYgbm8gaXRlbSB2YWx1ZSBhbmQgaW5pdGlhbFZhbHVlIGlzIHByZXNlbnQsIHNldCBhcyB2YWx1ZVxuXHRcdFx0aWYgKGluaXRpYWxWYWx1ZSAmJiAhaXRlbSkge1xuXHRcdFx0XHR3aW5kb3dbc3RvcmFnZVR5cGVdLnNldEl0ZW0oa2V5LCBpbml0aWFsVmFsdWUpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBQYXJzZSBzdG9yZWQganNvbiBvciBpZiBub25lIHJldHVybiBpbml0aWFsVmFsdWVcblx0XHRcdHJldHVybiBpdGVtID8gSlNPTi5wYXJzZShpdGVtKSA6IGluaXRpYWxWYWx1ZTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Ly8gSWYgZXJyb3IgYWxzbyByZXR1cm4gaW5pdGlhbFZhbHVlXG5cdFx0XHRyZXR1cm4gaW5pdGlhbFZhbHVlO1xuXHRcdH1cblx0fSk7XG5cdC8vIFJldHVybiBhIHdyYXBwZWQgdmVyc2lvbiBvZiB1c2VTdGF0ZSdzIHNldHRlciBmdW5jdGlvbiB0aGF0IC4uLlxuXHQvLyAuLi4gcGVyc2lzdHMgdGhlIG5ldyB2YWx1ZSB0byBzdG9yYWdlLlxuXHRjb25zdCBzZXRWYWx1ZSA9ICh2YWx1ZSkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBBbGxvdyB2YWx1ZSB0byBiZSBhIGZ1bmN0aW9uIHNvIHdlIGhhdmUgc2FtZSBBUEkgYXMgdXNlU3RhdGVcblx0XHRcdGNvbnN0IHZhbHVlVG9TdG9yZSA9IHZhbHVlIGluc3RhbmNlb2YgRnVuY3Rpb24gPyB2YWx1ZShzdG9yZWRWYWx1ZSkgOiB2YWx1ZTtcblx0XHRcdC8vIFNhdmUgc3RhdGVcblx0XHRcdHNldFN0b3JlZFZhbHVlKHZhbHVlVG9TdG9yZSk7XG5cdFx0XHQvLyBTYXZlIHRvIGxvY2FsIHN0b3JhZ2Vcblx0XHRcdHdpbmRvd1tzdG9yYWdlVHlwZV0uc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlVG9TdG9yZSkpO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuXHRcdH1cblx0fTtcblx0cmV0dXJuIFtzdG9yZWRWYWx1ZSwgc2V0VmFsdWVdO1xufVxuIiwiLy8gQ1NTXG5pbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcblxuLy8gUG9sbHlmaWxzXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5cbi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgQXBwIGZyb20gJy4vQXBwJztcblxuLyogQ2xpZW50ICovXG5jb25zdCBjbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoe1xuXHRkZWZhdWx0T3B0aW9uczoge1xuXHRcdHF1ZXJpZXM6IHtcblx0XHRcdHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcblx0XHR9LFxuXHR9LFxufSk7XG5cbi8qIFJlbmRlciAqL1xuY29uc3QgYXBwTm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKTtcbmlmIChhcHBOb2RlICE9PSBudWxsKSB7XG5cdHJlbmRlcihcblx0XHQ8UXVlcnlDbGllbnRQcm92aWRlciB7Li4ueyBjbGllbnQgfX0+XG5cdFx0XHQ8QXBwIC8+XG5cdFx0PC9RdWVyeUNsaWVudFByb3ZpZGVyPixcblx0XHRhcHBOb2RlXG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgSGVhZGVyLCBCYWNrZ3JvdW5kLCBMb2dpbkZvcm0gfSBmcm9tICcuLi9jb21wb25lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cblx0XHRcdFx0PEJhY2tncm91bmQgLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lX19wYW5lbCBwYW5lbCBwYW5lbC0tbG9naW5cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWxfX2JvZHlcIj5cblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGUgbWItMFwiPkxvZ2luPC9oMT5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNzAgdGV4dC13aGl0ZSBtYi02XCI+TG9naW4gd2l0aCB5b3VyIGUtbWFpbCBhbmQgcGFzc3dvcmQ8L3A+XG5cdFx0XHRcdFx0XHRcdDxMb2dpbkZvcm0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQYWdlTG9hZGVyLCBQYWdlV3JhcHBlciB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCB7IFByb2plY3REZXRhaWxIZWFkZXIsIFByb2plY3REZXRhaWxJbWFnZXMgfSBmcm9tICcuLi9kb21haW4vcHJvamVjdC1kZXRhaWwnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGZldGNoUHJvamVjdEJ5SWQsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi9hcGknO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlUGFnZVRpdGxlIH0gZnJvbSAnLi4vaG9va3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0RGV0YWlsKCkge1xuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJZCB9ID0gdXNlUGFyYW1zKCk7XG5cdGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhID0ge30gfSA9IHVzZVF1ZXJ5KFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHBhcnNlSW50KHByb2plY3RJZCldLCAoKSA9PlxuXHRcdGZldGNoUHJvamVjdEJ5SWQoeyBwcm9qZWN0SWQgfSlcblx0KTtcblxuXHQvKiBIb29rcyAqL1xuXHR1c2VQYWdlVGl0bGUoZGF0YT8udGl0bGUsIFtkYXRhXSk7XG5cblx0LyogQ29uc3RhbnRzICAqL1xuXHRjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgdXNlcnMsIGlkLCBhdXRob3IsIGVtYWlsLCBwcm9qZWN0SW1hZ2VzIH0gPSBkYXRhO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxQYWdlV3JhcHBlcj5cblx0XHRcdDxQYWdlTG9hZGVyIHsuLi57IGlzTG9hZGluZyB9fT5cblx0XHRcdFx0PFByb2plY3REZXRhaWxIZWFkZXIgey4uLnsgdGl0bGUsIGRlc2NyaXB0aW9uLCB1c2VycywgaWQsIGF1dGhvciwgZW1haWwgfX0gLz5cblx0XHRcdFx0PFByb2plY3REZXRhaWxJbWFnZXMgey4uLnsgcHJvamVjdEltYWdlcywgcHJvamVjdElkOiBpZCB9fSAvPlxuXHRcdFx0PC9QYWdlTG9hZGVyPlxuXHRcdDwvUGFnZVdyYXBwZXI+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFBhZ2VMb2FkZXIsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IHsgUHJvamVjdFJlc3VsdHMsIFByb2plY3RBZGQgfSBmcm9tICcuLi9kb21haW4vcHJvamVjdC1vdmVydmlldyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGZldGNoUHJvamVjdHNCeVVzZXIsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi9hcGknO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlUGFnZVRpdGxlIH0gZnJvbSAnLi4vaG9va3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0T3ZlcnZpZXcoKSB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtuZXdQcm9qZWN0SWQsIHNldE5ld1Byb2plY3RJZF0gPSB1c2VTdGF0ZSgpO1xuXG5cdC8qIEhvb2tzICovXG5cdHVzZVBhZ2VUaXRsZSgnUHJvamVjdHMnKTtcblx0Y29uc3QgeyBjdXJyZW50VXNlciwgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGlzTG9hZGluZywgZGF0YTogcHJvamVjdHMgPSBbXSB9ID0gdXNlUXVlcnkoXG5cdFx0UVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIsXG5cdFx0KCkgPT4gZmV0Y2hQcm9qZWN0c0J5VXNlcih7IHVzZXJJZDogY3VycmVudFVzZXI/LmlkIH0pLFxuXHRcdHtcblx0XHRcdGVuYWJsZWQ6ICEhY3VycmVudFVzZXI/LmlkLFxuXHRcdH1cblx0KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8UGFnZVdyYXBwZXI+XG5cdFx0XHQ8UGFnZUxvYWRlciB7Li4ueyBpc0xvYWRpbmcgfX0+XG5cdFx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiA8UHJvamVjdEFkZCB7Li4ueyBzZXROZXdQcm9qZWN0SWQgfX0gLz59XG5cdFx0XHRcdDxQcm9qZWN0UmVzdWx0cyB7Li4ueyBwcm9qZWN0cywgbmV3UHJvamVjdElkIH19IC8+XG5cdFx0XHQ8L1BhZ2VMb2FkZXI+XG5cdFx0PC9QYWdlV3JhcHBlcj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUGFnZUxvYWRlciwgUGFnZVdyYXBwZXIgfSBmcm9tICcuLi9jb21wb25lbnRzJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgeyBQcm9qZWN0UmV2aWV3Q2FudmFzIH0gZnJvbSAnLi4vZG9tYWluL3Byb2plY3QtcmV2aWV3JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBmZXRjaFByb2plY3RJbWFnZUJ5SWQsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi9hcGknO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlUGFnZVRpdGxlIH0gZnJvbSAnLi4vaG9va3MnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgeyBSZXZpZXdDb250ZXh0IH0gZnJvbSAnLi4vY29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXcoKSB7XG5cdGNvbnN0IFthY3RpdmVQaGFzZSwgc2V0QWN0aXZlUGhhc2VdID0gdXNlU3RhdGUoKTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJbWFnZUlkIH0gPSB1c2VQYXJhbXMoKTtcblx0Y29uc3QgeyBpc0xvYWRpbmcsIGRhdGEsIHJlZmV0Y2ggfSA9IHVzZVF1ZXJ5KFtRVUVSWV9LRVlTLlBST0pFQ1RfSU1BR0VfQllfSUQsIHBhcnNlSW50KHByb2plY3RJbWFnZUlkKV0sICgpID0+XG5cdFx0ZmV0Y2hQcm9qZWN0SW1hZ2VCeUlkKHsgcHJvamVjdEltYWdlSWQsIHBoYXNlSWQ6IGFjdGl2ZVBoYXNlIH0pXG5cdCk7XG5cblx0LyogRWZmZWN0cyAqL1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChhY3RpdmVQaGFzZSkgcmVmZXRjaCh7IHByb2plY3RJbWFnZTogcHJvamVjdEltYWdlSWQsIHBoYXNlSWQ6IGFjdGl2ZVBoYXNlIH0pO1xuXHR9LCBbYWN0aXZlUGhhc2VdKTtcblxuXHQvKiBIb29rcyAqL1xuXHR1c2VQYWdlVGl0bGUoZGF0YT8udGl0bGUsIFtkYXRhXSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PFJldmlld0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgcHJvamVjdElkOiBkYXRhPy5wYXJlbnRJZCwgcHJvamVjdEltYWdlSWQsIGFjdGl2ZVBoYXNlLCBzZXRBY3RpdmVQaGFzZSB9fT5cblx0XHRcdDxQYWdlV3JhcHBlcj5cblx0XHRcdFx0PFBhZ2VMb2FkZXIgey4uLnsgaXNMb2FkaW5nIH19PlxuXHRcdFx0XHRcdDxQcm9qZWN0UmV2aWV3Q2FudmFzIHsuLi5kYXRhfSAvPlxuXHRcdFx0XHQ8L1BhZ2VMb2FkZXI+XG5cdFx0XHQ8L1BhZ2VXcmFwcGVyPlxuXHRcdDwvUmV2aWV3Q29udGV4dC5Qcm92aWRlcj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBIZWFkZXIsIEJhY2tncm91bmQsIFNpZ251cEZvcm0gfSBmcm9tICcuLi9jb21wb25lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbnVwKCkge1xuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XG5cdFx0XHRcdDxCYWNrZ3JvdW5kIC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZV9fcGFuZWwgcGFuZWwgcGFuZWwtLWxvZ2luXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsX19ib2R5XCI+XG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZSB0ZXh0LXdoaXRlIG1iLTBcIj5TaWduIHVwPC9oMT5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNzAgdGV4dC13aGl0ZSBtYi02XCI+U2lnbiB1cCB3aXRoIHlvdXIgZS1tYWlsIGFuZCBwYXNzd29yZDwvcD5cblx0XHRcdFx0XHRcdFx0PFNpZ251cEZvcm0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTG9naW4gfSBmcm9tICcuL0xvZ2luJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2lnbnVwIH0gZnJvbSAnLi9TaWdudXAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0T3ZlcnZpZXcgfSBmcm9tICcuL1Byb2plY3RPdmVydmlldyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3REZXRhaWwgfSBmcm9tICcuL1Byb2plY3REZXRhaWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0UmV2aWV3IH0gZnJvbSAnLi9Qcm9qZWN0UmV2aWV3JztcbiIsIi8qIFBhZ2VzICovXG5pbXBvcnQgeyBQcm9qZWN0T3ZlcnZpZXcsIFByb2plY3REZXRhaWwsIFByb2plY3RSZXZpZXcsIExvZ2luLCBTaWdudXAgfSBmcm9tICcuL3BhZ2VzJztcblxuZXhwb3J0IGNvbnN0IFJPVVRFUyA9IHtcblx0bG9naW46ICcvJyxcblx0c2lnbnVwOiAnL3NpZ251cCcsXG5cdHByb2plY3RzOiAnL3Byb2plY3RzJyxcbn07XG5cbmNvbnN0IHJvdXRlcyA9IFtcblx0e1xuXHRcdG5hbWU6ICdsb2dpbicsXG5cdFx0cGF0aDogJy8nLFxuXHRcdGNvbXBvbmVudDogTG9naW4sXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnc2lnbnVwJyxcblx0XHRwYXRoOiAnL3NpZ251cCcsXG5cdFx0Y29tcG9uZW50OiBTaWdudXAsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAncHJvamVjdC1vdmVydmlldycsXG5cdFx0cGF0aDogJy9wcm9qZWN0cycsXG5cdFx0Y29tcG9uZW50OiBQcm9qZWN0T3ZlcnZpZXcsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAncHJvamVjdC1kZXRhaWwnLFxuXHRcdHBhdGg6ICcvcHJvamVjdHMvOmlkJyxcblx0XHRjb21wb25lbnQ6IFByb2plY3REZXRhaWwsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAncHJvamVjdC1yZXZpZXcnLFxuXHRcdHBhdGg6ICcvcHJvamVjdHMvOmlkL3Jldmlldy86aWQnLFxuXHRcdGNvbXBvbmVudDogUHJvamVjdFJldmlldyxcblx0fSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcGl0YWxpemVGaXJzdExldHRlcihzdHJpbmcpIHtcblx0cmV0dXJuIHN0cmluZy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0cmluZy5zbGljZSgxKTtcbn1cbiIsImNvbnN0IFVTRVJfUk9MRVMgPSB7XG5cdFJPTEVfQURNSU46ICdST0xFX0FETUlOJyxcblx0Uk9MRV9VU0VSOiAnUk9MRV9VU0VSJyxcblx0Uk9MRV9VU0VSX0JBU0lDOiAnUk9MRV9VU0VSX0JBU0lDJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJvbGUoeyByb2xlcyB9KSB7XG5cdGlmIChyb2xlcy5pbmNsdWRlcyhVU0VSX1JPTEVTLlJPTEVfQURNSU4pKSByZXR1cm4gJ2FkbWluJztcblx0aWYgKHJvbGVzLmluY2x1ZGVzKFVTRVJfUk9MRVMuUk9MRV9VU0VSX0JBU0lDKSkgcmV0dXJuICdiYXNpYyc7XG5cdGlmIChyb2xlcy5pbmNsdWRlcyhVU0VSX1JPTEVTLlJPTEVfVVNFUikpIHJldHVybiAndXNlcic7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGlzRW1haWwgfSBmcm9tICcuL2lzRW1haWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRSb2xlIH0gZnJvbSAnLi9nZXRSb2xlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVzaXplSW1hZ2VzIH0gZnJvbSAnLi9yZXNpemVJbWFnZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGNhcGl0YWxpemVGaXJzdExldHRlciB9IGZyb20gJy4vY2FwaXRhbGl6ZUZpcnN0TGV0dGVyJztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRW1haWwoZW1haWwpIHtcbiAgICByZXR1cm4gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC8udGVzdChlbWFpbCk7XG59XG4iLCJpbXBvcnQgUmVzaXplciBmcm9tICdyZWFjdC1pbWFnZS1maWxlLXJlc2l6ZXInO1xuXG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcblx0bWF4V2lkdGg6IDMwMCxcblx0bWF4SGVpZ2h0OiAzMDAsXG5cdHF1YWxpdHk6IDEwMCxcblx0cm90YXRpb246IDAsXG5cdG91dHB1dFR5cGU6ICdmaWxlJyxcbn07XG5cbmFzeW5jIGZ1bmN0aW9uIHJlc2l6ZUltYWdlVHlwZShpbWFnZSwgb3B0aW9ucykge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcblx0XHRSZXNpemVyLmltYWdlRmlsZVJlc2l6ZXIoXG5cdFx0XHRpbWFnZSxcblx0XHRcdG9wdGlvbnMubWF4V2lkdGgsXG5cdFx0XHRvcHRpb25zLm1heEhlaWdodCxcblx0XHRcdGltYWdlLnBhdGguc3BsaXQoJy4nKS5wb3AoKSxcblx0XHRcdG9wdGlvbnMucXVhbGl0eSxcblx0XHRcdG9wdGlvbnMucm90YXRpb24sXG5cdFx0XHQodXJpKSA9PiB7XG5cdFx0XHRcdHJlc29sdmUodXJpKTtcblx0XHRcdH0sXG5cdFx0XHRvcHRpb25zLm91dHB1dFR5cGVcblx0XHQpO1xuXHR9KTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVzaXplSW1hZ2UoaW1hZ2UpIHtcblx0Y29uc3QgdGh1bWJuYWlsID0gYXdhaXQgcmVzaXplSW1hZ2VUeXBlKGltYWdlLCB7IC4uLmRlZmF1bHRPcHRpb25zLCBtYXhXaWR0aDogMjY4LCBtYXhIZWlnaHQ6IDIzNiB9KTtcblx0Y29uc3QgdGh1bWJuYWlsUmV0aW5hID0gYXdhaXQgcmVzaXplSW1hZ2VUeXBlKGltYWdlLCB7IC4uLmRlZmF1bHRPcHRpb25zLCBtYXhXaWR0aDogNTM2LCBtYXhIZWlnaHQ6IDQ3MiB9KTtcblxuXHRyZXR1cm4ge1xuXHRcdG9yaWdpbmFsOiBpbWFnZSxcblx0XHR0aHVtYm5haWw6IE9iamVjdC5hc3NpZ24odGh1bWJuYWlsLCB7IHByZXZpZXc6IFVSTC5jcmVhdGVPYmplY3RVUkwodGh1bWJuYWlsKSB9KSxcblx0XHR0aHVtYm5haWxSZXRpbmE6IE9iamVjdC5hc3NpZ24odGh1bWJuYWlsUmV0aW5hLCB7IHByZXZpZXc6IFVSTC5jcmVhdGVPYmplY3RVUkwodGh1bWJuYWlsUmV0aW5hKSB9KSxcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcmVzaXplSW1hZ2VzKGltYWdlcykge1xuXHRyZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoXG5cdFx0aW1hZ2VzLm1hcChhc3luYyAoaW1hZ2UpID0+IHtcblx0XHRcdHJldHVybiBhd2FpdCByZXNpemVJbWFnZShpbWFnZSk7XG5cdFx0fSlcblx0KTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=