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
/*! exports provided: ActionMenu, Alert, Background, Modal, ModalHeader, Button, Dropzone, DropzoneSingle, Editable, EditableBody, LoadingWrapper, SlideIn, PageLoader, PageWrapper, UserAdd, UserAddSearch, UserAddSearchResults, Header, HeaderNavigation, UserAvatar, UserInfo, User, Users, UserSelect, SecurityModal, LoginForm, SignupForm, Image, Tooltip */
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

/* harmony import */ var _tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./tooltip/Tooltip */ "./assets/app/js/components/tooltip/Tooltip.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return _tooltip_Tooltip__WEBPACK_IMPORTED_MODULE_26__["default"]; });






























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

/***/ "./assets/app/js/components/tooltip/Tooltip.jsx":
/*!******************************************************!*\
  !*** ./assets/app/js/components/tooltip/Tooltip.jsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Tooltip; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-tippy */ "./node_modules/react-tippy/dist/react-tippy.js");
/* harmony import */ var react_tippy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_tippy__WEBPACK_IMPORTED_MODULE_1__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Packages */


function Tooltip(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_tippy__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], _extends({
    position: "top",
    animation: "shift",
    duration: 150,
    distance: 15,
    arrow: true,
    arrowSize: "small",
    trigger: "click"
  }, props, {
    style: {
      display: 'flex'
    }
  }), children);
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

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState10 = _slicedToArray(_useState9, 2),
      commentFocused = _useState10[0],
      setCommentFocused = _useState10[1];
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
      var xPercent = (clientX - cursorOffset - reviewPos.x) / reviewPos.width * 100;
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
      toggleCommentAddOpen: toggleCommentAddOpen,
      commentFocused: commentFocused
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
    projectUsers: projectUsers,
    setCommentFocused: setCommentFocused
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
      showInitialReplies = _ref$showInitialRepli === void 0 ? false : _ref$showInitialRepli,
      _ref$setCommentFocuse = _ref.setCommentFocused,
      setCommentFocused = _ref$setCommentFocuse === void 0 ? function () {} : _ref$setCommentFocuse;

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
    className: "comment",
    onMouseEnter: function onMouseEnter() {
      return setCommentFocused(commentIndex);
    },
    onMouseLeave: function onMouseLeave() {
      return setCommentFocused(null);
    }
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
      commentFocused = _ref.commentFocused,
      rest = _objectWithoutProperties(_ref, ["comment", "commentIndex", "toggleCommentAddOpen", "commentFocused"]);

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
    commentIndex: commentIndex,
    commentOpen: commentOpen,
    toggleComment: toggleComment,
    commentFocused: commentFocused
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
      projectUsers = _ref.projectUsers,
      setCommentFocused = _ref.setCommentFocused;

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
  }, comments === null || comments === void 0 ? void 0 : comments.map(function (comment, commentIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CommentWithReply, {
      key: commentIndex,
      comment: comment,
      commentIndex: commentIndex,
      projectUsers: projectUsers,
      setCommentFocused: setCommentFocused
    });
  }), comments.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted--70"
  }, "No comments yet"))));
}

var CommentWithReply = function CommentWithReply(_ref2) {
  var comment = _ref2.comment,
      commentIndex = _ref2.commentIndex,
      projectUsers = _ref2.projectUsers,
      setCommentFocused = _ref2.setCommentFocused;

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
    projectUsers: projectUsers,
    setCommentFocused: setCommentFocused
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */



/* Animations */


/* Context */


/* Components */


function ProjectReviewMarker(_ref) {
  var _author$display, _ref2;

  var xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      author = _ref.author,
      commentIndex = _ref.commentIndex,
      commentOpen = _ref.commentOpen,
      toggleComment = _ref.toggleComment,
      commentFocused = _ref.commentFocused,
      children = _ref.children;

  /* Hooks */
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_4__["default"]),
      currentUser = _useContext.currentUser;
  /* Constants */


  var user = author ? author : currentUser;
  var label = (commentIndex !== null && commentIndex !== void 0 ? commentIndex : 0) + 1;
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Tooltip"], {
    title: (_author$display = author === null || author === void 0 ? void 0 : author.display) !== null && _author$display !== void 0 ? _author$display : 'Add comment',
    open: (_ref2 = (commentFocused !== null && commentFocused !== void 0 ? commentFocused : false) === commentIndex) !== null && _ref2 !== void 0 ? _ref2 : false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].button, _extends({}, _animations__WEBPACK_IMPORTED_MODULE_3__["SCALE_FADE"], {
    className: "review__marker icon-wrapper icon-wrapper--secondary btn btn-link text-reset",
    style: {
      '--theme': "".concat(user.userColor)
    },
    onClick: toggleComment
  }), label && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text--xs"
  }, label))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, children)));
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
  }, "Phase ", phaseNumber), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
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
  }, {
    refetchOnWindowFocus: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvYmFja2dyb3VuZC1sb2dpbi5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvYmFja2dyb3VuZC1sb2dpbkAyeC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX2ltYWdlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9hZGRfcHJvamVjdC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX3VzZXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2FyY2hpdmUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2NoZWNrLWNpcmNsZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvY2hlY2suc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2NoZXZyb24uc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2Nsb3NlLXdoaXRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvY29tbWVudC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvZGFuZ2VyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9kZWxldGUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2VkaXQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2xlYXZlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9uZXh0LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9zdGFyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9zdWNjZXNzLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy91cGxvYWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL3dhcm5pbmcuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvQXBwLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FuaW1hdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9hcGkvY29tbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FwaS9waGFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FwaS9wcm9qZWN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvYXBpL3Byb2plY3RJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FwaS9zZWN1cml0eS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FwaS91c2VyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9hY3Rpb24tbWVudS9BY3Rpb25NZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvYWxlcnQvQWxlcnQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9iYWNrZ3JvdW5kL0JhY2tncm91bmQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9idXR0b24vQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9kcm9wem9uZS9Ecm9wem9uZVNpbmdsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2VkaXRhYmxlL0VkaXRhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvZWRpdGFibGUvRWRpdGFibGVCb2R5LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXJOYXZpZ2F0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvaW1hZ2UvaW1hZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvbG9hZGluZy13cmFwcGVyL0xvYWRpbmdXcmFwcGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvbW9kYWwvTW9kYWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9tb2RhbC9Nb2RhbEhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3BhZ2UtbG9hZGVyL1BhZ2VMb2FkZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9wYWdlLXdyYXBwZXIvUGFnZVdyYXBwZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9zZWN1cml0eS9Mb2dpbkZvcm0uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9zZWN1cml0eS9TZWN1cml0eU1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvc2VjdXJpdHkvU2lnbnVwRm9ybS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3NsaWRlLWluL1NsaWRlSW4uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy90b29sdGlwL1Rvb2x0aXAuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy91c2VyLWFkZC9Vc2VyQWRkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvdXNlci1hZGQvVXNlckFkZFNlYXJjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3VzZXItYWRkL1VzZXJBZGRTZWFyY2hSZXN1bHRzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvdXNlci1hZGQvc2VydmljZXMvZmlsdGVyVXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3VzZXJzL1VzZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy91c2Vycy9Vc2VyU2VsZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvdXNlcnMvVXNlcnMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29udGV4dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbnRleHQvbWFpbkNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb250ZXh0L3Jldmlld0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1kZXRhaWwvUHJvamVjdERldGFpbEhlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1kZXRhaWwvUHJvamVjdERldGFpbEltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LWRldGFpbC9Qcm9qZWN0RGV0YWlsSW1hZ2VzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LWRldGFpbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LW92ZXJ2aWV3L1Byb2plY3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3Qtb3ZlcnZpZXcvUHJvamVjdEFkZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1vdmVydmlldy9Qcm9qZWN0SW1hZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3Qtb3ZlcnZpZXcvUHJvamVjdFJlc3VsdHMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3Qtb3ZlcnZpZXcvUHJvamVjdFNsaWRlSW4uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3Qtb3ZlcnZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvUHJvamVjdFJldmlld0NhbnZhcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvUHJvamVjdFJldmlld0NvbW1lbnQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdDb21tZW50QWRkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3Q29tbWVudE1lbnRpb25zLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3Q29tbWVudE1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3Q29tbWVudFBhbmVsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3Q29tbWVudFJlcGx5LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3TWFya2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3UGFnaW5hdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvcHJvamVjdC1yZXZpZXctYWN0aW9uLWJhci9Qcm9qZWN0UmV2aWV3QWN0aW9uQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9wcm9qZWN0LXJldmlldy1hY3Rpb24tYmFyL2FjdGlvbnMvRWRpdEFjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvcHJvamVjdC1yZXZpZXctYWN0aW9uLWJhci9hY3Rpb25zL1BoYXNlQWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9wcm9qZWN0LXJldmlldy1hY3Rpb24tYmFyL2FjdGlvbnMvUGhhc2VOZXh0QWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9wcm9qZWN0LXJldmlldy1hY3Rpb24tYmFyL2FjdGlvbnMvU2hhcmVBY3Rpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L3Byb2plY3QtcmV2aWV3LWFjdGlvbi1iYXIvYWN0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9wcm9qZWN0LXJldmlldy1hY3Rpb24tYmFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L3NlcnZpY2VzL2NhbGNDb21tZW50UG9zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L3NlcnZpY2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L3NlcnZpY2VzL3N0eWxlTWVudGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2hvb2tzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvaG9va3MvdXNlQ2xvc2VPbkVzYy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2hvb2tzL3VzZUV2ZW50TGlzdGVuZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9ob29rcy91c2VQYWdlVGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9ob29rcy91c2VTZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9ob29rcy91c2VTdG9yYWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3BhZ2VzL0xvZ2luLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3BhZ2VzL1Byb2plY3REZXRhaWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcGFnZXMvUHJvamVjdE92ZXJ2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3BhZ2VzL1Byb2plY3RSZXZpZXcuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcGFnZXMvU2lnbnVwLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcm91dGVzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvc2VydmljZXMvY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvc2VydmljZXMvZ2V0Um9sZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3NlcnZpY2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvc2VydmljZXMvaXNFbWFpbC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3NlcnZpY2VzL3Jlc2l6ZUltYWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOlsiQXBwIiwiUm91dGVyQm9keSIsInVzZVN0YXRlIiwiY3VycmVudFVzZXIiLCJzZXRDdXJyZW50VXNlciIsInVzZXJSb2xlIiwic2V0VXNlclJvbGUiLCJ1c2VTdG9yYWdlIiwiYXRvYiIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsInVzZXJJZCIsInVzZUxvY2F0aW9uIiwidXNlUXVlcnkiLCJRVUVSWV9LRVlTIiwiQ1VSUkVOVF9VU0VSIiwiZmV0Y2hDdXJyZW50VXNlciIsInJldHJ5Iiwib25TdWNjZXNzIiwidXNlciIsImdldFJvbGUiLCJpc0xvYWRpbmciLCJwYXRobmFtZSIsIlJPVVRFUyIsImxvZ2luIiwic2lnbnVwIiwiaW5jbHVkZXMiLCJwcm9qZWN0cyIsInJvdXRlcyIsIm1hcCIsInBhdGgiLCJDb21wb25lbnQiLCJjb21wb25lbnQiLCJwcm9wcyIsIkZBREVfSU4iLCJkdXJhdGlvbiIsImVhc2UiLCJoaWRlUHJvZ3Jlc3NCYXIiLCJuZXdlc3RPblRvcCIsInBvc2l0aW9uIiwiY2xvc2VCdXR0b24iLCJFQVNFIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJGQURFX0lOX1VQIiwieSIsInR5cGUiLCJkYW1waW5nIiwic3RpZmZuZXNzIiwiU0NBTEVfSU5fVVAiLCJzY2FsZSIsInRyYW5zZm9ybU9yaWdpbiIsIlRSQU5TRk9STV9VUCIsIlNDQUxFX0ZBREUiLCJTVEFHR0VSX1VQIiwiaW5kZXgiLCJkZWxheSIsIlNUQUdHRVJfTEVGVCIsIngiLCJTTElERV9JTiIsImFkZENvbW1lbnQiLCJwaGFzZUlkIiwiY29tbWVudCIsIm1lbnRpb25lZCIsInBhcmFtcyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwieFBlcmNlbnQiLCJ5UGVyY2VudCIsImxlbmd0aCIsImF4aW9zIiwicG9zdCIsInJlc3VsdCIsImRhdGEiLCJhZGRSZXBseSIsImNvbW1lbnRJZCIsInJlcGx5IiwiUFJPSkVDVF9CWV9VU0VSIiwiUFJPSkVDVF9CWV9JRCIsIlBST0pFQ1RfSU1BR0VfQllfSUQiLCJHTE9CQUxfVVNFUlMiLCJQUk9KRUNUX1VTRVJTIiwibmV4dFBoYXNlIiwiaW1hZ2VzIiwiZm9yRWFjaCIsImltYWdlIiwiaW1hZ2VJbmRleCIsIm9yaWdpbmFsIiwidGh1bWJuYWlsIiwidGh1bWJuYWlsUmV0aW5hIiwiZmV0Y2hQcm9qZWN0c0J5VXNlciIsImdldCIsImZldGNoUHJvamVjdEJ5SWQiLCJwcm9qZWN0SWQiLCJhZGRQcm9qZWN0IiwiZGVsZXRlUHJvamVjdHMiLCJwcm9qZWN0SWRzIiwiaWQiLCJsZWF2ZVByb2plY3RzIiwiZWRpdFByb2plY3QiLCJmb3JtUmVmIiwiY3VycmVudCIsImZldGNoUHJvamVjdEltYWdlQnlJZCIsInByb2plY3RJbWFnZUlkIiwicGhhc2UiLCJhZGRQcm9qZWN0SW1hZ2VzIiwiZGVsZXRlUHJvamVjdEltYWdlcyIsInByb2plY3RJbWFnZUlkcyIsImVkaXRQcm9qZWN0SW1hZ2UiLCJ1cmwiLCJlbWFpbCIsInBhc3N3b3JkIiwibG9nb3V0IiwiZmV0Y2hHb2JhbFVzZXJzIiwiZmV0Y2hQcm9qZWN0VXNlcnMiLCJhZGRVc2VyIiwicmVmZXJlciIsImRlbGV0ZVVzZXIiLCJBY3Rpb25NZW51Iiwic2VsZWN0ZWQiLCJyZXNldFNlbGVjdGVkIiwiYWN0aW9ucyIsInVzZUNvbnRleHQiLCJTdGF0aWNDb250ZXh0IiwiY2xvc2VJY29uIiwiYWN0aW9uSW5kZXgiLCJ0aXRsZSIsInRoZW1lIiwiaGFzUGVybWlzc2lvbiIsImljb24iLCJpY29uU2l6ZSIsIm11dGF0aW9uIiwibG9hZGVyQ2xhc3NlcyIsImFwcGVhcmFuY2VUeXBlcyIsIndhcm5pbmciLCJ3YXJuaW5nSWNvbiIsImRhbmdlciIsImVycm9ySWNvbiIsInN1Y2Nlc3MiLCJzdWNjZXNzSWNvbiIsIkFsZXJ0IiwibWVzc2FnZSIsImFwcGVhcmFuY2UiLCJjbG9zZVRvYXN0IiwiQmFja2dyb3VuZCIsImJnIiwiYmdSZXRpbmEiLCJCdXR0b24iLCJzaXplIiwiZXh0ZW5zaW9uQ2xhc3NlcyIsIm9uQ2xpY2siLCJjb250ZW50VHlwZSIsImNoaWxkcmVuIiwiYnV0dG9uUmVmIiwidXNlUmVmIiwiYnV0dG9uSGVpZ2h0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwiVGV4dCIsImRlZmF1bHRDbGFzc2VzIiwiSWNvbiIsImNoZWNrSWNvbiIsIkRyb3B6b25lIiwicG9zaXRpdGlvbiIsInF1ZXJ5Q2xpZW50IiwidXNlUXVlcnlDbGllbnQiLCJ1c2VEcm9wem9uZSIsImFjY2VwdCIsIm5vQ2xpY2siLCJvbkRyb3AiLCJhY2NlcHRlZEZpbGVzIiwidXBkYXRlUHJvamVjdEltYWdlcyIsImdldFJvb3RQcm9wcyIsImdldElucHV0UHJvcHMiLCJpc0RyYWdBY3RpdmUiLCJhZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24iLCJ1c2VNdXRhdGlvbiIsImludmFsaWRhdGVRdWVyaWVzIiwiZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uIiwiYWN0aW9uIiwicmVzaXplSW1hZ2VzIiwicmVzaXplZEltYWdlcyIsIm11dGF0ZSIsImlzUGFyZW50RHJhZ0FjdGl2ZSIsIkRyb3B6b25lSW5uZXIiLCJhZGRJbWFnZUxvYWRpbmciLCJub0RyYWdFdmVudHNCdWJibGluZyIsInVwbG9hZEltYWdlSWNvbiIsImFkZEltYWdlSWNvbiIsIkRyb3B6b25lU2luZ2xlIiwic2V0SW1hZ2VzIiwibWF4RmlsZXMiLCJwcmV2aWV3IiwibmFtZSIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiRWRpdGFibGUiLCJzdWJ0aXRsZSIsInJlc3QiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJ0b2dnbGVNb2RhbCIsImVkaXRJY29uIiwiRWRpdGFibGVCb2R5IiwiZmllbGRzIiwibXV0YXRpb25JZCIsIm11dGF0aW9uT25TdWNjZXNzIiwiZWRpdE11dGF0aW9uIiwicHJldmVudERlZmF1bHQiLCJmaWVsZCIsImZpZWxkSW5kZXgiLCJzaG91bGRGb2N1cyIsIkZpZWxkIiwiZGVmYXVsdFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsImlucHV0UmVmIiwidXNlRWZmZWN0Iiwic2VsZWN0IiwidGFyZ2V0IiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwiSGVhZGVyIiwiSGVhZGVyTmF2aWdhdGlvbiIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwibG9nb3V0TXV0YXRpb24iLCJwdXNoIiwic2Vzc2lvblN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwidG9hc3QiLCJvbkVycm9yIiwiSW1hZ2UiLCJsb2FkZWQiLCJzZXRMb2FkZWQiLCJ2YXJpYW50cyIsImhpZGRlbiIsInZpc2libGUiLCJvbkxvYWQiLCJzcmMiLCJMb2FkaW5nV3JhcHBlciIsImxvYWRpbmciLCJsb2FkZXJTaXplIiwiY2xhc3NlcyIsIk1vZGFsIiwicmVuZGVyT25Cb2R5IiwiY2VudGVyIiwiY29tcG9uZW50cyIsImN1c3RvbUFuaW1hdGlvbiIsIkhlYWRlckNvbXBvbmVudCIsIk1vZGFsSGVhZGVyIiwiYW5pbWF0aW9uIiwidXNlQ2xvc2VPbkVzYyIsInJlbmRlciIsImNyZWF0ZVBvcnRhbCIsImRvY3VtZW50IiwiYm9keSIsIlBhZ2VMb2FkZXIiLCJQYWdlV3JhcHBlciIsIkxvZ2luRm9ybSIsInNob3dTaWdudXAiLCJ1c2VQYWdlVGl0bGUiLCJ1c2VGb3JtIiwicmVWYWxpZGF0ZU1vZGUiLCJtb2RlIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJsb2dpbk11dGF0aW9uIiwiZXJyb3IiLCJyZXNwb25zZSIsIm9uU3VibWl0IiwicmVxdWlyZWQiLCJTZWN1cml0eU1vZGFsIiwic2VjdXJpdHlNb2RhbE9wZW4iLCJzZXRTZWN1cml0eU1vZGFsT3BlbiIsInRvZ2dsZVNlY3VyaXR5TW9kYWwiLCJzaG93TG9naW4iLCJTaWdudXBGb3JtIiwiY29udHJvbCIsInBsYWluUGFzc3dvcmQiLCJ1c2VXYXRjaCIsInNpZ251cE11dGF0aW9uIiwic3RhdHVzIiwicmVzZXQiLCJ1c2VybmFtZSIsIm9yZ2FuaXNhdGlvbiIsIm1pbkxlbmd0aCIsInBhc3N3b3JkQ29uZmlybSIsInZhbGlkYXRlIiwiU2xpZGVJbiIsInRvZ2dsZVNsaWRlSW4iLCJkb21FbGVtZW50IiwidmFyaWFudCIsIlRvb2x0aXAiLCJkaXNwbGF5IiwiVXNlckFkZCIsInVzZXJzIiwicHJvamVjdCIsImFkZFVzZXJJY29uIiwiVXNlckFkZFNlYXJjaCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJmb2N1c2VkVXNlciIsInNldEZvY3VzZWRVc2VyIiwiZ2xvYmFsVXNlcnMiLCJnbG9iYWxVc2Vyc0xvYWRpbmciLCJmaWx0ZXJlZFVzZXJzIiwiZmlsdGVyVXNlcnMiLCJxdWVyeVJlZiIsImFkZFVzZXJNdXRhdGlvbiIsImhhbmRsZUNoYW5nZSIsImhhbmRsZU9uS2V5RG93biIsImtleSIsImlzRW1haWwiLCJoYW5kbGVDbGljayIsInVzZXJNdXRhdGlvbkxvYWRpbmciLCJVc2VyQWRkU2VhcmNoUmVzdWx0cyIsInJlc3VsdHMiLCJuZXdVc2VyIiwidXNlckNvbG9yIiwidXNlckluZGV4IiwibG93ZXJRdWVyeSIsInRvTG93ZXJDYXNlIiwiZXhpc3RpbmdVc2Vyc0J5RW1haWwiLCJmaWx0ZXIiLCJVc2VyIiwiYXV0aG9yIiwiaXNBdXRob3IiLCJkZWxldGVVc2VyTXV0YXRpb24iLCJkZWxldGVJY29uIiwic3Rhckljb24iLCJVc2VyQXZhdGFyIiwidXNlckluaXRpYWxzIiwic3BsaXQiLCJ3b3JkIiwidG9VcHBlckNhc2UiLCJVc2VySW5mbyIsImxheW91dCIsIlVzZXJTZWxlY3QiLCJpc0ZvY3VzZWQiLCJoYW5kbGVTdGF0dXMiLCJVc2VycyIsInVzZUxheW91dCIsInNsaWNlQW1vdW50IiwiSW5maW5pdHkiLCJzbGljZSIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIlJldmlld0NvbnRleHQiLCJQcm9qZWN0RGV0YWlsSGVhZGVyIiwiZGVzY3JpcHRpb24iLCJzdGF0aWNDb250ZXh0IiwiUHJvamVjdERldGFpbEltYWdlIiwicHJvamVjdEltYWdlIiwidXBkYXRlU2VsZWN0ZWQiLCJQcm9qZWN0RGV0YWlsSW1hZ2VzIiwicHJvamVjdEltYWdlcyIsInVzZVNlbGVjdGlvbiIsIkltYWdlcyIsInByb2plY3RJbWFnZUluZGV4IiwiUHJvamVjdCIsIlByb2plY3RBZGQiLCJzZXROZXdQcm9qZWN0SWQiLCJzZXRQcm9qZWN0SWQiLCJzbGlkZUluT3BlbiIsInNldFNsaWRlSW5PcGVuIiwiZW5hYmxlZCIsImFkZE11dGF0aW9uIiwiaW52YWxpZGF0ZVByb2plY3QiLCJzZXRUaW1lb3V0IiwidXBkYXRlUHJvamVjdCIsImFkZFByb2plY3RJY29uIiwiUHJvamVjdEltYWdlIiwiUHJvamVjdFJlc3VsdHMiLCJuZXdQcm9qZWN0SWQiLCJsZWF2ZVByb2plY3RzTXV0YXRpb24iLCJkZWxldGVQcm9qZWN0c011dGF0aW9uIiwibGVhdmVJY29uIiwiYXJjaGl2ZUljb24iLCJwcm9qZWN0SW5kZXgiLCJQcm9qZWN0U2xpZGVJbiIsIkRyb3B6b25lSW1hZ2UiLCJjdXJzb3JPZmZzZXQiLCJQcm9qZWN0UmV2aWV3Q2FudmFzIiwicGFyZW50SWQiLCJwcm9qZWN0VXNlcnMiLCJjb21tZW50cyIsInBoYXNlTnVtYmVyIiwicmV2aWV3UmVmIiwibWFya2VyUG9zIiwic2V0TWFya2VyUG9zIiwiY29tbWVudHNQYW5lbE9wZW4iLCJzZXRDb21tZW50c1BhbmVsT3BlbiIsInBhZ2luYXRpb25BY3RpdmUiLCJzZXRQYWdpbmF0aW9uQWN0aXZlIiwiY29tbWVudEZvY3VzZWQiLCJzZXRDb21tZW50Rm9jdXNlZCIsInRvZ2dsZUNvbW1lbnRBZGRPcGVuIiwidG9nZ2xlQ29tbWVudHNQYW5lbCIsInRvZ2dsZVBhZ2luYXRpb25BY3RpdmUiLCJwb3NNYXJrZXIiLCJjbGllbnRYIiwiY2xpZW50WSIsImF1dGhlbnRpY2F0ZWQiLCJyZXZpZXdQb3MiLCJ3aWR0aCIsInRvcCIsImNvbW1lbnRJbmRleCIsIlByb2plY3RSZXZpZXdDb21tZW50IiwiY29udGVudCIsInNldFJlcGx5VG9Vc2VyIiwicmVuZGVyQXV0aG9yIiwic2hvd0luaXRpYWxSZXBsaWVzIiwiY3JlYXRlZCIsInNob3dSZXBsaWVzIiwic2V0U2hvd1JlcGxpZXMiLCJyZW5kZXJDb21tZW50IiwidXNlcnNSZWdleCIsInVzZXJzQXJyYXkiLCJtYXRjaEFsbCIsImZpbmQiLCJQcm9qZWN0UmV2aWV3Q29tbWVudEFkZCIsIm1vZGFsUmVmIiwiY2FsY0NvbW1lbnRQb3MiLCJsZWZ0Iiwic2V0Q29tbWVudCIsIm1lbnRpb25zIiwic2V0TWVudGlvbnMiLCJhZGRDb21tZW50TXV0YXRpb24iLCJwYXJzZUludCIsInRyaW0iLCJhdXRvRm9jdXMiLCJQcm9qZWN0UmV2aWV3Q29tbWVudE1lbnRpb25zIiwibWVudGlvblJlZiIsInN0eWxlTWVudGlvbnMiLCJTdWdnZXN0aW9uIiwiXyIsImVudHJ5IiwiaGlnaGxpZ2h0ZWQiLCJmb2N1c2VkIiwiUHJvamVjdFJldmlld0NvbW1lbnRNb2RhbCIsImNvbW1lbnRPcGVuIiwic2V0Q29tbWVudE9wZW4iLCJ0b2dnbGVDb21tZW50IiwiQ29tbWVudEJveCIsInRyYW5zZm9ybWVkUG9zIiwic2V0VHJhbnNmb3JtZWRQb3MiLCJyZXBseVRvVXNlciIsImJveFJlZiIsInJlcGx5VG8iLCJQcm9qZWN0UmV2aWV3Q29tbWVudFBhbmVsIiwiQ29tbWVudFdpdGhSZXBseSIsIlByb2plY3RSZXZpZXdDb21tZW50UmVwbHkiLCJzZXRSZXBseSIsImFkZFJlcGx5TXV0YXRpb24iLCJQcm9qZWN0UmV2aWV3TWFya2VyIiwibGFiZWwiLCJQcm9qZWN0UmV2aWV3UGFnaW5hdGlvbiIsImFsbEltYWdlcyIsInVzZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVLZXlVcCIsImN1cnJlbnRJbWFnZSIsImluZGV4T2YiLCJOdW1iZXIiLCJwcmV2SW1hZ2UiLCJuZXh0SW1hZ2UiLCJuYXZpZ2F0ZSIsImRpcmVjdGlvbiIsInRvU3RyaW5nIiwiY2hldnJvbkljb24iLCJQcm9qZWN0UmV2aWV3QWN0aW9uQmFyIiwiYWxsUGhhc2VzIiwibWF4V2lkdGgiLCJjb21tZW50SWNvbiIsIkVkaXRBY3Rpb24iLCJtb2RhbE9wdGlvbnMiLCJQaGFzZUFjdGlvbiIsImFjdGl2ZVBoYXNlIiwic2V0QWN0aXZlUGhhc2UiLCJuYXZpZ2F0ZVRvUGhhc2UiLCJwaGFzZUluZGV4IiwiUGhhc2VOZXh0QWN0aW9uIiwibmV4dFBoYXNlTXV0YXRpb24iLCJuZXh0SWNvbiIsIlNoYXJlQWN0aW9uIiwicmVmIiwicG9zIiwibWFya2VyU3BhY2VyIiwibWFya2VyU2l6ZSIsIm9mZnNldCIsImJveFdpZHRoIiwiYm94SGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJpbm5lcldpZHRoIiwiYm94UGVyY2VudFdpZHRoIiwic2NyZWVuSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJib3hQZXJjZW50SGVpZ2h0IiwiaW5wdXQiLCJtZW50aW9uTm9kZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwibWVudGlvbiIsIm1lbnRpb25Jbm5lciIsImlubmVySFRNTCIsInVzZXJPZk1lbnRpb24iLCJzdHlsZSIsInNldFByb3BlcnR5IiwiZm9jdXMiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInRvZ2dsZSIsInVzZUNhbGxiYWNrIiwiZXZlbnROYW1lIiwiaGFuZGxlciIsImVsZW1lbnQiLCJzYXZlZEhhbmRsZXIiLCJpc1N1cHBvcnRlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVwZGF0ZVByb3BzIiwic2V0U2VsZWN0ZWQiLCJzZWxlY3RlZElkIiwiaW5pdGlhbFZhbHVlIiwic3RvcmFnZVR5cGUiLCJpdGVtIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzdG9yZWRWYWx1ZSIsInNldFN0b3JlZFZhbHVlIiwidmFsdWVUb1N0b3JlIiwiRnVuY3Rpb24iLCJzdHJpbmdpZnkiLCJFcnJvciIsImNsaWVudCIsIlF1ZXJ5Q2xpZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJxdWVyaWVzIiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJhcHBOb2RlIiwiZ2V0RWxlbWVudEJ5SWQiLCJMb2dpbiIsIlByb2plY3REZXRhaWwiLCJ1c2VQYXJhbXMiLCJQcm9qZWN0T3ZlcnZpZXciLCJQcm9qZWN0UmV2aWV3IiwicmVmZXRjaCIsIlNpZ251cCIsInN0cmluZyIsImNoYXJBdCIsIlVTRVJfUk9MRVMiLCJST0xFX0FETUlOIiwiUk9MRV9VU0VSIiwiUk9MRV9VU0VSX0JBU0lDIiwicm9sZXMiLCJ0ZXN0IiwibWF4SGVpZ2h0IiwicXVhbGl0eSIsInJvdGF0aW9uIiwib3V0cHV0VHlwZSIsInJlc2l6ZUltYWdlVHlwZSIsIm9wdGlvbnMiLCJQcm9taXNlIiwicmVzb2x2ZSIsIlJlc2l6ZXIiLCJpbWFnZUZpbGVSZXNpemVyIiwicG9wIiwidXJpIiwicmVzaXplSW1hZ2UiLCJPYmplY3QiLCJhc3NpZ24iLCJVUkwiLCJj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LEtBREo7QUFFTkcsdUJBQVMsRUFBRW1lLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjcGUsU0FBZCxFQUF5QjtBQUFFd0csdUJBQU8sRUFBRTZYLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQnRlLFNBQXBCO0FBQVgsZUFBekIsQ0FGTDtBQUdOQyw2QkFBZSxFQUFFa2UsTUFBTSxDQUFDQyxNQUFQLENBQWNuZSxlQUFkLEVBQStCO0FBQUV1Ryx1QkFBTyxFQUFFNlgsR0FBRyxDQUFDQyxlQUFKLENBQW9CcmUsZUFBcEI7QUFBWCxlQUEvQjtBQUhYLGFBSlI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQVdlLFNBQWUyRixZQUE5QjtBQUFBO0FBQUE7OzswRUFBZSxrQkFBNEJqRyxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDRGllLE9BQU8sQ0FBQ1csR0FBUixDQUNaNWUsTUFBTSxDQUFDekQsR0FBUDtBQUFBLGlGQUFXLGtCQUFPMkQsS0FBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFDR3FlLFdBQVcsQ0FBQ3JlLEtBQUQsQ0FEZDs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVg7O0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRFksQ0FEQzs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7Ozs7Ozs7Ozs7QUN0Q2YsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvYXBwL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2Fzc2V0cy9hcHAvanMvbWFpbi5qc1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2JhY2tncm91bmQtbG9naW4uanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2JhY2tncm91bmQtbG9naW5AMnguanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FkZF9pbWFnZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYWRkX3Byb2plY3Quc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FkZF91c2VyLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hcmNoaXZlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jaGVjay1jaXJjbGUuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2NoZWNrLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jaGV2cm9uLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jbG9zZS13aGl0ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY2xvc2Uuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2NvbW1lbnQuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Rhbmdlci5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZGVsZXRlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9lZGl0LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9sZWF2ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbmV4dC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvc3Rhci5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvc3VjY2Vzcy5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvdXBsb2FkLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy93YXJuaW5nLnN2Z1wiOyIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgU3dpdGNoLCBSb3V0ZSwgUmVkaXJlY3QsIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgSGVhZGVyTmF2aWdhdGlvbiwgUGFnZUxvYWRlciB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbi8qIFNlcnZpY2VzICovXG5pbXBvcnQgeyBnZXRSb2xlIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4gfSBmcm9tICcuL2FuaW1hdGlvbnMnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGZldGNoQ3VycmVudFVzZXIsIFFVRVJZX0tFWVMgfSBmcm9tICcuL2FwaSc7XG5cbi8qIFJvdXRlcyAqL1xuaW1wb3J0IHJvdXRlcywgeyBST1VURVMgfSBmcm9tICcuL3JvdXRlcyc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VTdG9yYWdlIH0gZnJvbSAnLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PFJvdXRlcj5cblx0XHRcdDxSb3V0ZXJCb2R5IC8+XG5cdFx0PC9Sb3V0ZXI+XG5cdCk7XG59XG5cbmNvbnN0IFJvdXRlckJvZHkgPSAoKSA9PiB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUoKTtcblx0Y29uc3QgW3VzZXJSb2xlLCBzZXRVc2VyUm9sZV0gPSB1c2VTdGF0ZShbXSk7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgW3VzZXJJZF0gPSB1c2VTdG9yYWdlKCd1c2VySWQnLCBhdG9iKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKSkpO1xuXHRjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG5cblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGlzTG9hZGluZyB9ID0gdXNlUXVlcnkoUVVFUllfS0VZUy5DVVJSRU5UX1VTRVIsICgpID0+IGZldGNoQ3VycmVudFVzZXIoeyB1c2VySWQgfSksIHtcblx0XHRyZXRyeTogZmFsc2UsXG5cdFx0b25TdWNjZXNzOiAodXNlcikgPT4ge1xuXHRcdFx0c2V0Q3VycmVudFVzZXIodXNlcik7XG5cdFx0XHRzZXRVc2VyUm9sZShnZXRSb2xlKHVzZXIpKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8U3RhdGljQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXIsIHVzZXJSb2xlIH19PlxuXHRcdFx0PFBhZ2VMb2FkZXIgey4uLnsgaXNMb2FkaW5nIH19PlxuXHRcdFx0XHQ8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlcj5cblx0XHRcdFx0XHQ8U3dpdGNoIGxvY2F0aW9uPXtsb2NhdGlvbn0ga2V5PXtsb2NhdGlvbi5wYXRobmFtZX0+XG5cdFx0XHRcdFx0XHR7LyogUmVkaXJlY3QgdG8gL3Byb2plY3RzIGlmIGEgdXNlciBpcyBsb2dnZWQgaW4gKi99XG5cdFx0XHRcdFx0XHR7Y3VycmVudFVzZXIgJiYgW1JPVVRFUy5sb2dpbiwgUk9VVEVTLnNpZ251cF0uaW5jbHVkZXMobG9jYXRpb24ucGF0aG5hbWUpICYmIChcblx0XHRcdFx0XHRcdFx0PFJlZGlyZWN0IHRvPXtST1VURVMucHJvamVjdHN9IC8+XG5cdFx0XHRcdFx0XHQpfVxuXG5cdFx0XHRcdFx0XHR7LyogUmVkaXJlY3QgdG8gL2xvZ2luIGlmIGEgdXNlciBpcyBub3QgbG9nZ2VkIGluIG9uIHRoZSAvcHJvamVjdHMgcm91dGUgKi99XG5cdFx0XHRcdFx0XHR7IWN1cnJlbnRVc2VyICYmIGxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKFJPVVRFUy5wcm9qZWN0cykgJiYgPFJlZGlyZWN0IHRvPXtST1VURVMubG9naW59IC8+fVxuXG5cdFx0XHRcdFx0XHR7LyogUmVuZGVyIHJvdXRlcyAqL31cblx0XHRcdFx0XHRcdHtyb3V0ZXMubWFwKCh7IHBhdGgsIGNvbXBvbmVudDogQ29tcG9uZW50LCBwcm9wcyB9KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBrZXk9e3BhdGh9IHBhdGg9e3BhdGh9IGV4YWN0PlxuXHRcdFx0XHRcdFx0XHRcdHsvKiBTaG93IGRpZmZlcmVudCBoZWFkZXJzIGJhc2VkIG9uIHJvdXRlICovfVxuXHRcdFx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e3BhdGh9XG5cdFx0XHRcdFx0XHRcdFx0XHR7Li4uRkFERV9JTn1cblx0XHRcdFx0XHRcdFx0XHRcdHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMSwgZWFzZTogWzAuNjUsIDAsIDAuMzUsIDFdIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyFbUk9VVEVTLmxvZ2luLCBST1VURVMuc2lnbnVwLCAncmV2aWV3J10uaW5jbHVkZXMobG9jYXRpb24ucGF0aG5hbWUpICYmXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCFsb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcygncmV2aWV3JykgJiYgPEhlYWRlck5hdmlnYXRpb24gLz59XG5cblx0XHRcdFx0XHRcdFx0XHRcdHsvKiBSZW5kZXIgcGFnZSAqL31cblx0XHRcdFx0XHRcdFx0XHRcdDxDb21wb25lbnQgey4uLnsgLi4ucHJvcHMsIGN1cnJlbnRVc2VyLCB1c2VyUm9sZSB9fSAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHRcdFx0PC9Sb3V0ZT5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdDwvU3dpdGNoPlxuXHRcdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDwvUGFnZUxvYWRlcj5cblxuXHRcdFx0ey8qIFRvYXN0ICovfVxuXHRcdFx0PFRvYXN0Q29udGFpbmVyXG5cdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0aGlkZVByb2dyZXNzQmFyOiB0cnVlLFxuXHRcdFx0XHRcdG5ld2VzdE9uVG9wOiB0cnVlLFxuXHRcdFx0XHRcdHBvc2l0aW9uOiAnYm90dG9tLWxlZnQnLFxuXHRcdFx0XHRcdGNsb3NlQnV0dG9uOiBmYWxzZSxcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cdFx0PC9TdGF0aWNDb250ZXh0LlByb3ZpZGVyPlxuXHQpO1xufTtcbiIsImNvbnN0IEVBU0UgPSBbMC42NSwgMCwgMC4zNSwgMV07XG5cbmNvbnN0IEZBREVfSU4gPSB7XG5cdGluaXRpYWw6IHtcblx0XHRvcGFjaXR5OiAwLFxuXHR9LFxuXHRhbmltYXRlOiB7XG5cdFx0b3BhY2l0eTogMSxcblx0fSxcblx0ZXhpdDoge1xuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdHRyYW5zaXRpb246IHtcblx0XHRlYXNlOiBFQVNFLFxuXHRcdGR1cmF0aW9uOiAwLjIsXG5cdH0sXG59O1xuXG5jb25zdCBGQURFX0lOX1VQID0gKHkgPSAxMDApID0+ICh7XG5cdGluaXRpYWw6IHtcblx0XHR5OiB5LFxuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdGFuaW1hdGU6IHtcblx0XHR5OiAwLFxuXHRcdG9wYWNpdHk6IDEsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0Mixcblx0XHRcdHN0aWZmbmVzczogODAwLFxuXHRcdH0sXG5cdH0sXG5cdGV4aXQ6IHtcblx0XHR5OiB5LFxuXHRcdG9wYWNpdHk6IDAsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0Mixcblx0XHRcdHN0aWZmbmVzczogMTIwMCxcblx0XHR9LFxuXHR9LFxufSk7XG5cbmNvbnN0IFNDQUxFX0lOX1VQID0gKHkgPSAxMDApID0+ICh7XG5cdGluaXRpYWw6IHtcblx0XHR5OiB5LFxuXHRcdHNjYWxlOiAwLjUsXG5cdFx0dHJhbnNmb3JtT3JpZ2luOiAnNTAlIDEwMCUnLFxuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdGFuaW1hdGU6IHtcblx0XHR5OiAwLFxuXHRcdHNjYWxlOiAxLFxuXHRcdG9wYWNpdHk6IDEsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0Mixcblx0XHRcdHN0aWZmbmVzczogODAwLFxuXHRcdH0sXG5cdH0sXG5cdGV4aXQ6IHtcblx0XHR5OiB5LFxuXHRcdHNjYWxlOiAwLjUsXG5cdFx0b3BhY2l0eTogMCxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3ByaW5nJyxcblx0XHRcdGRhbXBpbmc6IDQyLFxuXHRcdFx0c3RpZmZuZXNzOiAxMjAwLFxuXHRcdH0sXG5cdH0sXG59KTtcblxuY29uc3QgVFJBTlNGT1JNX1VQID0ge1xuXHRpbml0aWFsOiB7XG5cdFx0eTogJzEwMCUnLFxuXHR9LFxuXHRhbmltYXRlOiB7XG5cdFx0eTogJzAlJyxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3ByaW5nJyxcblx0XHRcdGRhbXBpbmc6IDQxLFxuXHRcdFx0c3RpZmZuZXNzOiA2MDAsXG5cdFx0fSxcblx0fSxcblx0ZXhpdDoge1xuXHRcdHk6ICcxMDAlJyxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3ByaW5nJyxcblx0XHRcdGRhbXBpbmc6IDQxLFxuXHRcdFx0c3RpZmZuZXNzOiAxMjAwLFxuXHRcdH0sXG5cdH0sXG59O1xuXG5jb25zdCBTQ0FMRV9GQURFID0ge1xuXHRpbml0aWFsOiB7XG5cdFx0c2NhbGU6IDAsXG5cdFx0b3BhY2l0eTogMCxcblx0fSxcblx0YW5pbWF0ZToge1xuXHRcdHNjYWxlOiAxLFxuXHRcdG9wYWNpdHk6IDEsXG5cdH0sXG5cdGV4aXQ6IHtcblx0XHRzY2FsZTogMCxcblx0XHRvcGFjaXR5OiAwLFxuXHR9LFxuXHR0cmFuc2l0aW9uOiB7XG5cdFx0ZWFzZTogRUFTRSxcblx0XHRkdXJhdGlvbjogMC4yLFxuXHR9LFxufTtcblxuY29uc3QgU1RBR0dFUl9VUCA9IChpbmRleCA9IDApID0+ICh7XG5cdGluaXRpYWw6IHsgb3BhY2l0eTogMCwgeTogMzUgfSxcblx0YW5pbWF0ZTogeyBvcGFjaXR5OiAxLCB5OiAwLCB0cmFuc2l0aW9uOiB7IHR5cGU6ICdzcHJpbmcnLCBkYW1waW5nOiAzMCwgc3RpZmZuZXNzOiA0NTAsIGRlbGF5OiBpbmRleCAqIDAuMDM1IH0gfSxcblx0ZXhpdDogeyBvcGFjaXR5OiAwLCBzY2FsZTogMC4yNSwgdHJhbnNpdGlvbjogeyB0eXBlOiAnc3ByaW5nJywgZGFtcGluZzogMzAsIHN0aWZmbmVzczogNjAwIH0gfSxcbn0pO1xuXG5jb25zdCBTVEFHR0VSX0xFRlQgPSAoaW5kZXggPSAwKSA9PiAoe1xuXHRpbml0aWFsOiB7IG9wYWNpdHk6IDAsIHg6IDEwIH0sXG5cdGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgeDogMCwgdHJhbnNpdGlvbjogeyB0eXBlOiAnc3ByaW5nJywgZGFtcGluZzogMzAsIHN0aWZmbmVzczogMzAwLCBkZWxheTogaW5kZXggKiAwLjAzNSB9IH0sXG5cdGV4aXQ6IHsgb3BhY2l0eTogMCwgeDogMTAsIHRyYW5zaXRpb246IHsgdHlwZTogJ3NwcmluZycsIGRhbXBpbmc6IDMwLCBzdGlmZm5lc3M6IDYwMCB9IH0sXG59KTtcblxuY29uc3QgU0xJREVfSU4gPSB7XG5cdGluaXRpYWw6IHtcblx0XHR4OiAnLTEwMCUnLFxuXHR9LFxuXHRhbmltYXRlOiB7XG5cdFx0eDogJzAlJyxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRkdXJhdGlvbjogMC4yLFxuXHRcdFx0ZWFzZTogWzAuNjUsIDAsIDAuMzUsIDFdLFxuXHRcdH0sXG5cdH0sXG5cdGV4aXQ6IHtcblx0XHR4OiAnLTEwMCUnLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdGR1cmF0aW9uOiAwLjEsXG5cdFx0XHRlYXNlOiBbMC42NSwgMCwgMC4zNSwgMV0sXG5cdFx0fSxcblx0fSxcbn07XG5cbmV4cG9ydCB7IEZBREVfSU4sIEZBREVfSU5fVVAsIFNDQUxFX0lOX1VQLCBUUkFOU0ZPUk1fVVAsIFNDQUxFX0ZBREUsIFNUQUdHRVJfVVAsIFNUQUdHRVJfTEVGVCwgU0xJREVfSU4gfTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8qIEFkZCBjb21tZW50IHwgZXhwZWN0cyBwaGFzZSBpZCwgdXNlciBpZCBhbmQgZm9ybVJlZiBvYmVjdCAqL1xuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSBhc3luYyAoeyBwaGFzZUlkLCB1c2VySWQsIGNvbW1lbnQsIG1lbnRpb25lZCwgcG9zaXRpb24gfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblxuXHRwYXJhbXMuYXBwZW5kKCd1c2VySWQnLCB1c2VySWQpO1xuXHRwYXJhbXMuYXBwZW5kKCdjb21tZW50JywgY29tbWVudCk7XG5cdHBhcmFtcy5hcHBlbmQoJ3Bvc2l0aW9uWCcsIHBvc2l0aW9uLnhQZXJjZW50KTtcblx0cGFyYW1zLmFwcGVuZCgncG9zaXRpb25ZJywgcG9zaXRpb24ueVBlcmNlbnQpO1xuXHRwYXJhbXMuYXBwZW5kKCdyZWZlcmVyJywgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoJy8nLCAnJykpO1xuXG5cdGlmIChtZW50aW9uZWQubGVuZ3RoKSB7XG5cdFx0cGFyYW1zLmFwcGVuZCgnbWVudGlvbmVkW10nLCBtZW50aW9uZWQpO1xuXHR9XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9jb21tZW50cy9hZGQvJHtwaGFzZUlkfWAsIHBhcmFtcyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBBZGQgY29tbWVudCB8IGV4cGVjdHMgcGhhc2UgaWQsIHVzZXIgaWQgYW5kIGZvcm1SZWYgb2JlY3QgKi9cbmV4cG9ydCBjb25zdCBhZGRSZXBseSA9IGFzeW5jICh7IGNvbW1lbnRJZCwgcmVwbHksIG1lbnRpb25lZCB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuXG5cdHBhcmFtcy5hcHBlbmQoJ3JlcGx5JywgcmVwbHkpO1xuXHRwYXJhbXMuYXBwZW5kKCdyZWZlcmVyJywgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoJy8nLCAnJykpO1xuXG5cdGlmIChtZW50aW9uZWQubGVuZ3RoKSB7XG5cdFx0cGFyYW1zLmFwcGVuZCgnbWVudGlvbmVkW10nLCBtZW50aW9uZWQpO1xuXHR9XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9jb21tZW50cy9yZXBseS8ke2NvbW1lbnRJZH1gLCBwYXJhbXMpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vc2VjdXJpdHknO1xuZXhwb3J0ICogZnJvbSAnLi9wcm9qZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vcHJvamVjdEltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5leHBvcnQgKiBmcm9tICcuL2NvbW1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9waGFzZSc7XG5cbmV4cG9ydCBjb25zdCBRVUVSWV9LRVlTID0ge1xuXHRDVVJSRU5UX1VTRVI6ICdjdXJyZW50X3VzZXInLFxuXHRQUk9KRUNUX0JZX1VTRVI6ICdwcm9qZWN0X2J5X3VzZXInLFxuXHRQUk9KRUNUX0JZX0lEOiAncHJvamVjdF9ieV9pZCcsXG5cdFBST0pFQ1RfSU1BR0VfQllfSUQ6ICdwcm9qZWN0X2ltYWdlX2J5X2lkJyxcblx0R0xPQkFMX1VTRVJTOiAnZ2xvYmFsX3VzZXJzJyxcblx0UFJPSkVDVF9VU0VSUzogJ3Byb2plY3RfdXNlcnMnLFxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8qIE5leHQgcGhhc2UgfCBleHBlY3RzIHBoYXNlIGlkIGFuZCBpbWFnZSAoYmxvYikgKi9cbmV4cG9ydCBjb25zdCBuZXh0UGhhc2UgPSBhc3luYyAoeyBwaGFzZUlkLCBpbWFnZXMgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblxuXHRpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGltYWdlSW5kZXgpID0+IHtcblx0XHRwYXJhbXMuYXBwZW5kKGBpbWFnZXNbJHtpbWFnZUluZGV4fV1bb3JpZ2luYWxdYCwgaW1hZ2Uub3JpZ2luYWwpO1xuXHRcdHBhcmFtcy5hcHBlbmQoYGltYWdlc1ske2ltYWdlSW5kZXh9XVt0aHVtYm5haWxdYCwgaW1hZ2UudGh1bWJuYWlsKTtcblx0XHRwYXJhbXMuYXBwZW5kKGBpbWFnZXNbJHtpbWFnZUluZGV4fV1bdGh1bWJuYWlsUmV0aW5hXWAsIGltYWdlLnRodW1ibmFpbFJldGluYSk7XG5cdH0pO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvcGhhc2UvbmV4dC8ke3BoYXNlSWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBGZXRjaCBwcm9qZWN0cyBieSB1c2VyIHwgZXhwZWN0cyB1c2VyIGlkICovXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9qZWN0c0J5VXNlciA9IGFzeW5jICh7IHVzZXJJZCB9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9qZWN0cy9nZXQvJHt1c2VySWR9YCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBGZXRjaCBwcm9qZWN0cyBieSBpZCB8IGV4cGVjdHMgcHJvamVjdCBpZCAqL1xuZXhwb3J0IGNvbnN0IGZldGNoUHJvamVjdEJ5SWQgPSBhc3luYyAoeyBwcm9qZWN0SWQgfSkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcHJvamVjdC9nZXQvJHtwcm9qZWN0SWR9YCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBBZGQgcHJvamVjdCAqL1xuZXhwb3J0IGNvbnN0IGFkZFByb2plY3QgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvcHJvamVjdHMvYWRkJyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBEZWxldGUgcHJvamVjdChzKSB8IGV4cGVjdHMgYXJyYXkgb2YgcHJvamVjdElkcyAgKi9cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9qZWN0cyA9IGFzeW5jICh7IHByb2plY3RJZHMgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblx0cHJvamVjdElkcy5mb3JFYWNoKChpZCkgPT4gcGFyYW1zLmFwcGVuZCgncHJvamVjdHNbXScsIGlkKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9kZWxldGVgLCBwYXJhbXMpO1xuXG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBMZWF2ZSBwcm9qZWN0KHMpIHwgZXhwZWN0cyBhcnJheSBvZiBwcm9qZWN0SWRzIGFuZCB1c2VyIGlkICAqL1xuZXhwb3J0IGNvbnN0IGxlYXZlUHJvamVjdHMgPSBhc3luYyAoeyBwcm9qZWN0SWRzLCB1c2VySWQgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblx0cHJvamVjdElkcy5mb3JFYWNoKChpZCkgPT4gcGFyYW1zLmFwcGVuZCgncHJvamVjdHNbXScsIGlkKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9sZWF2ZS8ke3VzZXJJZH1gLCBwYXJhbXMpO1xuXG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBFZGl0IHByb2plY3QgfCBleHBlY3RzIGZvcm1EYXRhIG9iamVjdCBhbmQgcHJvamVjdCBpZCAgKi9cbmV4cG9ydCBjb25zdCBlZGl0UHJvamVjdCA9IGFzeW5jICh7IGZvcm1SZWYsIGlkIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKGZvcm1SZWYuY3VycmVudCk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9lZGl0LyR7aWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBGZXRjaCBwcm9qZWN0SW1hZ2UgYnkgaWQgfCBleHBlY3RzIHByb2plY3QgaW1hZ2UgaWQgYW5kIG9wdGlvbmFsIHBoYXNlSWQgKi9cbmV4cG9ydCBjb25zdCBmZXRjaFByb2plY3RJbWFnZUJ5SWQgPSBhc3luYyAoeyBwcm9qZWN0SW1hZ2VJZCwgcGhhc2VJZCB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IHBoYXNlSWQgPyB7IHBhcmFtczogeyBwaGFzZTogcGhhc2VJZCB9IH0gOiB7fTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvaW1hZ2VzL2dldC8ke3Byb2plY3RJbWFnZUlkfWAsIHsgLi4ucGFyYW1zIH0pO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogQWRkIHByb2plY3RJbWFnZShzKSB8IGV4cGVjdHMgcHJvamVjdCBpZCBhbmQgYXJyYXkgb2YgaW1hZ2VzIChibG9iKSAqL1xuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RJbWFnZXMgPSBhc3luYyAoeyBwcm9qZWN0SWQsIGltYWdlcyB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuXHRpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGltYWdlSW5kZXgpID0+IHtcblx0XHRwYXJhbXMuYXBwZW5kKGBpbWFnZXNbJHtpbWFnZUluZGV4fV1bb3JpZ2luYWxdYCwgaW1hZ2Uub3JpZ2luYWwpO1xuXHRcdHBhcmFtcy5hcHBlbmQoYGltYWdlc1ske2ltYWdlSW5kZXh9XVt0aHVtYm5haWxdYCwgaW1hZ2UudGh1bWJuYWlsKTtcblx0XHRwYXJhbXMuYXBwZW5kKGBpbWFnZXNbJHtpbWFnZUluZGV4fV1bdGh1bWJuYWlsUmV0aW5hXWAsIGltYWdlLnRodW1ibmFpbFJldGluYSk7XG5cdH0pO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvaW1hZ2VzL2FkZC8ke3Byb2plY3RJZH1gLCBwYXJhbXMpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRGVsZXRlIHByb2plY3RJbWFnZShzKSB8IGV4cGVjdHMgcHJvamVjdCBpZCBhbmQgYXJyYXkgb2YgcHJvamVjdEltYWdlSWRzICAqL1xuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3RJbWFnZXMgPSBhc3luYyAoeyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZUlkcyB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuXHRwcm9qZWN0SW1hZ2VJZHMuZm9yRWFjaCgoaWQpID0+IHBhcmFtcy5hcHBlbmQoJ3Byb2plY3RJbWFnZXNbXScsIGlkKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9pbWFnZXMvZGVsZXRlLyR7cHJvamVjdElkfWAsIHBhcmFtcyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBFZGl0IHByb2plY3RJbWFnZSB8IGV4cGVjdHMgZm9ybVJlZiBvYmplY3QgYW5kIHByb2plY3RJbWFnZSBpZCAgKi9cbmV4cG9ydCBjb25zdCBlZGl0UHJvamVjdEltYWdlID0gYXN5bmMgKHsgZm9ybVJlZiwgaWQgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybVJlZi5jdXJyZW50KTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2ltYWdlcy9lZGl0LyR7aWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBTaWdudXAgdG8gcGxhdGZvcm0gfCBleHBlY3RzIGZvcm1SZWYgb2JqZWN0IGFuZCBvcHRpb25hbCB1c2VySWQgKi9cbmV4cG9ydCBjb25zdCBzaWdudXAgPSBhc3luYyAoeyBmb3JtUmVmLCB1c2VySWQgfSkgPT4ge1xuXHRsZXQgdXJsID0gJy9hcGkvc2lnbnVwJztcblx0aWYgKHVzZXJJZCkgdXJsID0gYC9hcGkvc2lnbnVwLyR7dXNlcklkfWA7XG5cblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKGZvcm1SZWYuY3VycmVudCk7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBwYXJhbXMpO1xuXG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBMb2dpbiB0byBwbGF0Zm9ybSB8IGV4cGVjdHMgZm9ybVJlZiBvYmplY3QgKi9cbmV4cG9ydCBjb25zdCBsb2dpbiA9IGFzeW5jICh7IGZvcm1SZWYgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybVJlZi5jdXJyZW50KTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywge1xuXHRcdGVtYWlsOiBwYXJhbXMuZ2V0KCdlbWFpbCcpLFxuXHRcdHBhc3N3b3JkOiBwYXJhbXMuZ2V0KCdwYXNzd29yZCcpLFxuXHR9KTtcblxuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogTG9nb3V0IGZyb20gcGxhdGZvcm0gKi9cbmV4cG9ydCBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9sb2dvdXQnKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBGZXRjaCBjdXJyZW50IChsb2dnZWQgaW4pIHVzZXIgfCBleHBlY3RzIHVzZXIgaWQgKi9cbmV4cG9ydCBjb25zdCBmZXRjaEN1cnJlbnRVc2VyID0gYXN5bmMgKHsgdXNlcklkIH0pID0+IHtcblx0bGV0IHVybCA9ICcvYXBpL3VzZXJzL2dldCc7XG5cdGlmICh1c2VySWQpIHVybCA9IGAke3VybH0vJHt1c2VySWR9YDtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIEZldGNoIGFsbCB1c2VycyBpbiBkYiAqL1xuZXhwb3J0IGNvbnN0IGZldGNoR29iYWxVc2VycyA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3VzZXJzL2dldC9hbGwnKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIEZldGNoIHByb2plY3QgdXNlcnMgKi9cbmV4cG9ydCBjb25zdCBmZXRjaFByb2plY3RVc2VycyA9IGFzeW5jICh7IHByb2plY3RJZCB9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS91c2Vycy9nZXQvcHJvamVjdC8ke3Byb2plY3RJZH1gKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIEFkZCB1c2VyIHRvIHByb2plY3QgfCBleHBlY3RzIHByb2plY3QgaWQgYW5kIHVzZXIgZW1haWwgKi9cbmV4cG9ydCBjb25zdCBhZGRVc2VyID0gYXN5bmMgKHsgcHJvamVjdElkLCBlbWFpbCB9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvdXNlcnMvYWRkLyR7cHJvamVjdElkfWAsIHtcblx0XHRlbWFpbDogZW1haWwsXG5cdFx0cmVmZXJlcjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoJy8nLCAnJyksXG5cdH0pO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRGVsZXRlIHVzZXIgZnJvbSBwcm9qZWN0IHwgZXhwZWN0cyBwcm9qZWN0IGlkIGFuZCB1c2VyIGlkICovXG5leHBvcnQgY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jICh7IHByb2plY3RJZCwgdXNlcklkIH0pID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS91c2Vycy9kZWxldGUvJHtwcm9qZWN0SWR9YCwgeyB1c2VySWQgfSk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IExvYWRpbmdXcmFwcGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFRSQU5TRk9STV9VUCB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9tYWluQ29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjdGlvbk1lbnUoeyBzZWxlY3RlZCwgcmVzZXRTZWxlY3RlZCwgYWN0aW9ucyB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXYgey4uLlRSQU5TRk9STV9VUH0gY2xhc3NOYW1lPVwiYmFyIGJhci0tcHJvamVjdFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJhcl9fYnRuIGJ0biBidG4tbGluayBkLWlubGluZS1mbGV4IHRleHQtd2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtyZXNldFNlbGVjdGVkfT5cblx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTE0XCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1sLTIgbWItMFwiPntzZWxlY3RlZC5sZW5ndGh9IHNlbGVjdGVkPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gbWwtYXV0b1wiPlxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImJhcl9fbGlzdCBsaXN0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0e2FjdGlvbnMubWFwKFxuXHRcdFx0XHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoZW1lLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNQZXJtaXNzaW9uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uU2l6ZSA9IDEyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtdXRhdGlvbiA9ICgpID0+IHt9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0xvYWRpbmcgPSBmYWxzZSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb25JbmRleFxuXHRcdFx0XHRcdFx0XHRcdCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGhhc1Blcm1pc3Npb24uaW5jbHVkZXModXNlclJvbGUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17YWN0aW9uSW5kZXh9IGNsYXNzTmFtZT1cImxpc3RfX2l0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmFyX19idG4gYnRuIGJ0bi1saW5rIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXttdXRhdGlvbn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS0ke3RoZW1lfSBpY29uLXdyYXBwZXItLWludGVyYWN0aXZlYH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExvYWRpbmdXcmFwcGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkaW5nPXtpc0xvYWRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkZXJTaXplPXsxMn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzZXM9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9hZGVyQ2xhc3NlczogYHBvc2l0aW9uLWFic29sdXRlIGQtZmxleCB0ZXh0LSR7dGhlbWV9YCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdyYXBwZXI9XCJzdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BpY29uIGljb24tLSR7aWNvblNpemV9IHRleHQtJHt0aGVtZX1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2ljb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJidG5fX3RleHQgdGV4dC13aGl0ZSBtbC0yXCI+e3RpdGxlfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gJ2ljb25zL2Nsb3NlLXdoaXRlLnN2Zyc7XG5pbXBvcnQgd2FybmluZ0ljb24gZnJvbSAnaWNvbnMvd2FybmluZy5zdmcnO1xuaW1wb3J0IGVycm9ySWNvbiBmcm9tICdpY29ucy9kYW5nZXIuc3ZnJztcbmltcG9ydCBzdWNjZXNzSWNvbiBmcm9tICdpY29ucy9zdWNjZXNzLnN2Zyc7XG5cbi8qIEdsb2JhbCAqL1xuY29uc3QgYXBwZWFyYW5jZVR5cGVzID0ge1xuXHR3YXJuaW5nOiB7XG5cdFx0dGl0bGU6ICdXYXJuaW5nJyxcblx0XHRpY29uOiB3YXJuaW5nSWNvbixcblx0fSxcblx0ZGFuZ2VyOiB7XG5cdFx0dGl0bGU6ICdFcnJvcicsXG5cdFx0aWNvbjogZXJyb3JJY29uLFxuXHR9LFxuXHRzdWNjZXNzOiB7XG5cdFx0dGl0bGU6ICdTdWNjZXNzJyxcblx0XHRpY29uOiBzdWNjZXNzSWNvbixcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsZXJ0KHsgbWVzc2FnZSwgYXBwZWFyYW5jZSwgY2xvc2VUb2FzdCB9KSB7XG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtLW5vdGlmaWNhdGlvblwiIHJvbGU9XCJhbGVydFwiIGRhdGEtYWxlcnQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDBcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BhbGVydF9faWNvbi13cmFwcGVyIGFsZXJ0X19pY29uLXdyYXBwZXItLSR7YXBwZWFyYW5jZX0gbXItMmB9PlxuXHRcdFx0XHRcdDxSZWFjdFNWR1xuXHRcdFx0XHRcdFx0d3JhcHBlcj1cInN2Z1wiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhbGVydF9faWNvbiBpY29uIGljb24tLTEyXCJcblx0XHRcdFx0XHRcdHNyYz17YXBwZWFyYW5jZVR5cGVzW2FwcGVhcmFuY2VdLmljb259XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1iLTBcIj57YXBwZWFyYW5jZVR5cGVzW2FwcGVhcmFuY2VdLnRpdGxlfTwvcD5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJhbGVydF9fYnRuIGJ0biBidG4tbGluayBtbC1hdXRvXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2Nsb3NlVG9hc3R9PlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xMFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYWxlcnRfX21lc3NhZ2UgdGV4dC0tc20gdGV4dC1tdXRlZC0tNzAgbXItbGctOFwiPnttZXNzYWdlfTwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBiZyBmcm9tICdpbWFnZXMvYmFja2dyb3VuZC1sb2dpbi5qcGcnO1xuaW1wb3J0IGJnUmV0aW5hIGZyb20gJ2ltYWdlcy9iYWNrZ3JvdW5kLWxvZ2luQDJ4LmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhY2tncm91bmQoKSB7XG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxuXHRcdFx0PGltZyBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kX19pbWFnZVwiIHNyYz17Ymd9IHNyY1NldD17YmdSZXRpbmF9IGFsdD1cIkJhY2tncm91bmRcIiAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyoge2Fja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IExvYWRpbmdXcmFwcGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNoZWNrSWNvbiBmcm9tICdpY29ucy9jaGVjay1jaXJjbGUuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uKHtcblx0dGl0bGUsXG5cdHR5cGUgPSAnYnV0dG9uJyxcblx0dGhlbWUgPSAnc2Vjb25kYXJ5Jyxcblx0c2l6ZSA9ICdzbScsXG5cdGV4dGVuc2lvbkNsYXNzZXMgPSAnJyxcblx0b25DbGljayA9ICgpID0+IHt9LFxuXHRpc0xvYWRpbmcgPSBmYWxzZSxcblx0Y29udGVudFR5cGUgPSAndGV4dCcsXG5cdGNoaWxkcmVuLFxufSkge1xuXHQvKiBSZWZzICovXG5cdGNvbnN0IGJ1dHRvblJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCBidXR0b25IZWlnaHQgPSBidXR0b25SZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxidXR0b25cblx0XHRcdHJlZj17YnV0dG9uUmVmfVxuXHRcdFx0Y2xhc3NOYW1lPXtgYnRuIGJ0bi0ke3NpemV9IGJ0bi0ke3RoZW1lfSAke2V4dGVuc2lvbkNsYXNzZXN9IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJgfVxuXHRcdFx0c3R5bGU9e3sgaGVpZ2h0OiBidXR0b25IZWlnaHQgfX1cblx0XHRcdHsuLi57IHR5cGUsIG9uQ2xpY2sgfX0+XG5cdFx0XHR7Y29udGVudFR5cGUgPT09ICd0ZXh0JyA/IDxUZXh0IHsuLi57IHRpdGxlLCBpc0xvYWRpbmcsIGNoaWxkcmVuIH19IC8+IDogPEljb24gey4uLnsgaXNMb2FkaW5nIH19IC8+fVxuXHRcdDwvYnV0dG9uPlxuXHQpO1xufVxuXG5jb25zdCBUZXh0ID0gKHsgdGl0bGUsIGlzTG9hZGluZywgY2hpbGRyZW4gfSkgPT4gKFxuXHQ8TG9hZGluZ1dyYXBwZXJcblx0XHRsb2FkaW5nPXtpc0xvYWRpbmd9XG5cdFx0bG9hZGVyU2l6ZT17MTZ9XG5cdFx0Y2xhc3Nlcz17e1xuXHRcdFx0bG9hZGVyQ2xhc3NlczogJ3Bvc2l0aW9uLWFic29sdXRlIGQtZmxleCB0ZXh0LXNlY29uZGFyeScsXG5cdFx0XHRkZWZhdWx0Q2xhc3NlczogJ2QtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInLFxuXHRcdH19PlxuXHRcdHtjaGlsZHJlbn1cblx0XHQ8c3BhbiBjbGFzc05hbWU9XCJidG5fX3RleHRcIj57dGl0bGV9PC9zcGFuPlxuXHQ8L0xvYWRpbmdXcmFwcGVyPlxuKTtcblxuY29uc3QgSWNvbiA9ICh7IGlzTG9hZGluZyB9KSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwiaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0tc2Vjb25kYXJ5IGljb24td3JhcHBlci0taW50ZXJhY3RpdmVcIj5cblx0XHQ8TG9hZGluZ1dyYXBwZXJcblx0XHRcdGxvYWRpbmc9e2lzTG9hZGluZ31cblx0XHRcdGxvYWRlclNpemU9ezE0fVxuXHRcdFx0Y2xhc3Nlcz17eyBsb2FkZXJDbGFzc2VzOiAncG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4IHRleHQtc2Vjb25kYXJ5JywgZGVmYXVsdENsYXNzZXM6ICdkLWZsZXgnIH19PlxuXHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJhbGVydF9faWNvbiBpY29uIGljb24tLTE0IHRleHQtc2Vjb25kYXJ5XCIgc3JjPXtjaGVja0ljb259IC8+XG5cdFx0PC9Mb2FkaW5nV3JhcHBlcj5cblx0PC9kaXY+XG4pO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyB1c2VEcm9wem9uZSB9IGZyb20gJ3JlYWN0LWRyb3B6b25lJztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IExvYWRpbmdXcmFwcGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIFNlcnZpY2VzICovXG5pbXBvcnQgeyByZXNpemVJbWFnZXMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNDQUxFX0ZBREUsIEZBREVfSU4gfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkSW1hZ2VJY29uIGZyb20gJ2ljb25zL2FkZF9pbWFnZS5zdmcnO1xuaW1wb3J0IHVwbG9hZEltYWdlSWNvbiBmcm9tICdpY29ucy91cGxvYWQuc3ZnJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBhZGRQcm9qZWN0SW1hZ2VzLCBkZWxldGVQcm9qZWN0SW1hZ2VzLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcHpvbmUoeyBwcm9qZWN0SWQsIHBvc2l0aXRpb24gPSAnbGVmdCcsIGNoaWxkcmVuIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzLCBpc0RyYWdBY3RpdmUgfSA9IHVzZURyb3B6b25lKHtcblx0XHRhY2NlcHQ6ICdpbWFnZS8qJyxcblx0XHRub0NsaWNrOiB0cnVlLFxuXHRcdG9uRHJvcDogKGFjY2VwdGVkRmlsZXMpID0+IHVwZGF0ZVByb2plY3RJbWFnZXMoJ2FkZCcsIHsgaW1hZ2VzOiBhY2NlcHRlZEZpbGVzIH0pLFxuXHR9KTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgYWRkUHJvamVjdEltYWdlc011dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkUHJvamVjdEltYWdlcywge1xuXHRcdG9uU3VjY2VzczogKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSksXG5cdH0pO1xuXG5cdGNvbnN0IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGRlbGV0ZVByb2plY3RJbWFnZXMsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0pLFxuXHR9KTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdXBkYXRlUHJvamVjdEltYWdlcyA9IGFzeW5jIChhY3Rpb24sIHByb3BzKSA9PiB7XG5cdFx0aWYgKGFjdGlvbiA9PT0gJ2FkZCcgJiYgcHJvcHMuaW1hZ2VzKSB7XG5cdFx0XHRjb25zdCByZXNpemVkSW1hZ2VzID0gYXdhaXQgcmVzaXplSW1hZ2VzKHByb3BzLmltYWdlcyk7XG5cblx0XHRcdGFkZFByb2plY3RJbWFnZXNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQsIGltYWdlczogcmVzaXplZEltYWdlcyB9KTtcblx0XHR9XG5cblx0XHRpZiAoYWN0aW9uID09PSAnZGVsZXRlJykgZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgLi4ucHJvcHMgfSk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZVwiIHsuLi5nZXRSb290UHJvcHMoKX0+XG5cdFx0XHQ8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cblx0XHRcdDxEcm9wem9uZUlubmVyXG5cdFx0XHRcdGFkZEltYWdlTG9hZGluZz17YWRkUHJvamVjdEltYWdlc011dGF0aW9uLmlzTG9hZGluZ31cblx0XHRcdFx0ey4uLnsgdXBkYXRlUHJvamVjdEltYWdlcywgaXNQYXJlbnREcmFnQWN0aXZlOiBpc0RyYWdBY3RpdmUsIHBvc2l0aXRpb24gfX1cblx0XHRcdC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctLWVxdWFsaXplZCBndXR0ZXJzLTVcIj5cblx0XHRcdFx0e2NoaWxkcmVuKHsgdXBkYXRlUHJvamVjdEltYWdlcywgaXNMb2FkaW5nOiBkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24uaXNMb2FkaW5nIH0pfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbi8qIElubmVyIGRyb3B6b25lICovXG5jb25zdCBEcm9wem9uZUlubmVyID0gKHsgYWRkSW1hZ2VMb2FkaW5nLCB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc1BhcmVudERyYWdBY3RpdmUsIHBvc2l0aXRpb24gfSkgPT4ge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcywgaXNEcmFnQWN0aXZlIH0gPSB1c2VEcm9wem9uZSh7XG5cdFx0YWNjZXB0OiAnaW1hZ2UvKicsXG5cdFx0bm9EcmFnRXZlbnRzQnViYmxpbmc6IHRydWUsXG5cdFx0b25Ecm9wOiAoYWNjZXB0ZWRGaWxlcykgPT4gdXBkYXRlUHJvamVjdEltYWdlcygnYWRkJywgeyBpbWFnZXM6IGFjY2VwdGVkRmlsZXMgfSksXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZHJvcHpvbmVcIiB7Li4uZ2V0Um9vdFByb3BzKCl9PlxuXHRcdFx0PGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7KGlzRHJhZ0FjdGl2ZSB8fCBpc1BhcmVudERyYWdBY3RpdmUpICYmIChcblx0XHRcdFx0XHQ8bW90aW9uLmRpdiB7Li4uRkFERV9JTn0gY2xhc3NOYW1lPVwiZHJvcHpvbmVfX292ZXJsYXlcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0tc2Vjb25kYXJ5XCIgc3R5bGU9e3sgJy0tc2l6ZSc6IDc1IH19PlxuXHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMzAgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e3VwbG9hZEltYWdlSWNvbn0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0KX1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0PG1vdGlvbi5idXR0b25cblx0XHRcdFx0ey4uLlNDQUxFX0ZBREV9XG5cdFx0XHRcdGtleT1cImFkZC1wcm9qZWN0XCJcblx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdGNsYXNzTmFtZT17YGljb24td3JhcHBlciBpY29uLXdyYXBwZXItLWludGVyYWN0aXZlIGljb24td3JhcHBlci0tc2Vjb25kYXJ5IGJ0biBidG4tbGluayBidG4tLWFkZCBidG4tLWFkZC0ke3Bvc2l0aXRpb259YH1cblx0XHRcdFx0c3R5bGU9e3sgJy0tc2l6ZSc6IDc1IH19PlxuXHRcdFx0XHQ8TG9hZGluZ1dyYXBwZXJcblx0XHRcdFx0XHRsb2FkaW5nPXthZGRJbWFnZUxvYWRpbmd9XG5cdFx0XHRcdFx0Y2xhc3Nlcz17eyBsb2FkZXJDbGFzc2VzOiAncG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4IHRleHQtc2Vjb25kYXJ5JyB9fVxuXHRcdFx0XHRcdGxvYWRlclNpemU9ezMwfT5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMzAgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e2FkZEltYWdlSWNvbn0gLz5cblx0XHRcdFx0PC9Mb2FkaW5nV3JhcHBlcj5cblx0XHRcdDwvbW90aW9uLmJ1dHRvbj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VEcm9wem9uZSB9IGZyb20gJ3JlYWN0LWRyb3B6b25lJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkSW1hZ2VJY29uIGZyb20gJ2ljb25zL2FkZF9pbWFnZS5zdmcnO1xuaW1wb3J0IHVwbG9hZEltYWdlSWNvbiBmcm9tICdpY29ucy91cGxvYWQuc3ZnJztcbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICcuLi8nO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOLCBTQ0FMRV9GQURFIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIFNlcnZpY2VzICovXG5pbXBvcnQgeyByZXNpemVJbWFnZXMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3B6b25lU2luZ2xlKHsgaW1hZ2VzOiBbaW1hZ2VdLCBzZXRJbWFnZXMgfSkge1xuXHRjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcywgaXNEcmFnQWN0aXZlIH0gPSB1c2VEcm9wem9uZSh7XG5cdFx0YWNjZXB0OiAnaW1hZ2UvKicsXG5cdFx0bWF4RmlsZXM6IDEsXG5cdFx0b25Ecm9wOiBhc3luYyAoYWNjZXB0ZWRGaWxlcykgPT4ge1xuXHRcdFx0Y29uc3QgcmVzaXplZEltYWdlcyA9IGF3YWl0IHJlc2l6ZUltYWdlcyhhY2NlcHRlZEZpbGVzKTtcblx0XHRcdHNldEltYWdlcyhyZXNpemVkSW1hZ2VzKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3B6b25lIGRyb3B6b25lLS1zaW5nbGUgbXQtMlwiIHsuLi5nZXRSb290UHJvcHMoKX0+XG5cdFx0XHQ8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9IGV4aXRCZWZvcmVFbnRlcj5cblx0XHRcdFx0eyFpbWFnZSAmJiAoXG5cdFx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRcdHsuLi5TQ0FMRV9GQURFfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0taW50ZXJhY3RpdmUgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgJy0tc2l6ZSc6IDQ0IH19PlxuXHRcdFx0XHRcdFx0e2lzRHJhZ0FjdGl2ZSA/IChcblx0XHRcdFx0XHRcdFx0PG1vdGlvbi5kaXYga2V5PVwidXBsb2FkXCIgey4uLlNDQUxFX0ZBREV9PlxuXHRcdFx0XHRcdFx0XHRcdDxSZWFjdFNWR1xuXHRcdFx0XHRcdFx0XHRcdFx0d3JhcHBlcj1cInN2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpY29uIGljb24tLTIwIHRleHQtc2Vjb25kYXJ5XCJcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz17dXBsb2FkSW1hZ2VJY29ufVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2IGtleT1cImFkZFwiIHsuLi5TQ0FMRV9GQURFfT5cblx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMjAgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e2FkZEltYWdlSWNvbn0gLz5cblx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtpbWFnZSAmJiAoXG5cdFx0XHRcdFx0PG1vdGlvbi5kaXYga2V5PVwiY29udGFpbmVyXCIgey4uLkZBREVfSU59IGNsYXNzTmFtZT1cImRyb3B6b25lX19jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJkcm9wem9uZV9faW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRzcmM9e2ltYWdlLnRodW1ibmFpbC5wcmV2aWV3fVxuXHRcdFx0XHRcdFx0XHRzcmNTZXQ9e2Ake2ltYWdlLnRodW1ibmFpbFJldGluYS5wcmV2aWV3fSAyeGB9XG5cdFx0XHRcdFx0XHRcdGFsdD17aW1hZ2UudGh1bWJuYWlsLm5hbWV9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIGRyb3B6b25lX19pbWFnZS1kZWxldGUgcC0wXCJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHRcdFx0c2V0SW1hZ2VzKFtdKTtcblx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJkcm9wem9uZV9faW1hZ2UtZGVsZXRlLWljb24gaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0tZGFuZ2VyIG14LWF1dG9cIlxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7ICctLXNpemUnOiA1MCB9fT5cblx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTQgdGV4dC1kYW5nZXIgbXQtMFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0KX1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgRWRpdGFibGVCb2R5IGZyb20gJy4vRWRpdGFibGVCb2R5JztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgZWRpdEljb24gZnJvbSAnaWNvbnMvZWRpdC5zdmcnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdGFibGUoeyB0aXRsZSwgc3VidGl0bGUgPSAnU2F2ZSB3aGVuIHJlYWR5JywgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZU1vZGFsID0gKCkgPT4gc2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZWRpdGFibGUgZC1mbGV4IGFsaWduLWl0ZW1zLWJhc2VsaW5lIHBvc2l0aW9uLXJlbGF0aXZlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVkaXRhYmxlX19jb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxuXHRcdFx0e3VzZXJSb2xlID09PSAnYWRtaW4nICYmIChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJlZGl0YWJsZV9fdG9nZ2xlIGJ0biBidG4tbGluayBpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnkgaWNvbi13cmFwcGVyLS1pbnRlcmFjdGl2ZSBzdHJldGNoZWQtbGluayBtbC0zXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfVxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgJy0tc2l6ZSc6IDI1IH19PlxuXHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEwIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXtlZGl0SWNvbn0gLz5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8TW9kYWwgey4uLnsgdGl0bGUsIHN1YnRpdGxlLCBtb2RhbE9wZW4sIHRvZ2dsZU1vZGFsIH19PlxuXHRcdFx0XHRcdFx0PEVkaXRhYmxlQm9keSB7Li4ueyB0b2dnbGVNb2RhbCwgLi4ucmVzdCB9fSAvPlxuXHRcdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHRcdDwvPlxuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGV4dGFyZWFBdXRvc2l6ZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogRWxlbWVudHMgKi9cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBTZXJ2aWNlcyAqL1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0YWJsZUJvZHkoeyBmaWVsZHMsIHRvZ2dsZU1vZGFsLCBtdXRhdGlvbiwgbXV0YXRpb25JZCwgbXV0YXRpb25PblN1Y2Nlc3MgfSkge1xuXHQvKiBSZWZzICovXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgZWRpdE11dGF0aW9uID0gdXNlTXV0YXRpb24obXV0YXRpb24sIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdG11dGF0aW9uT25TdWNjZXNzKCk7XG5cdFx0XHR0b2dnbGVNb2RhbCgpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxmb3JtXG5cdFx0XHRyZWY9e2Zvcm1SZWZ9XG5cdFx0XHRjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtZ3Jvdy0xIHBvc2l0aW9uLXJlbGF0aXZlXCJcblx0XHRcdG9uU3VibWl0PXsoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZWRpdE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYsIGlkOiBtdXRhdGlvbklkIH0pO1xuXHRcdFx0fX0+XG5cdFx0XHR7ZmllbGRzLm1hcCgoZmllbGQsIGZpZWxkSW5kZXgpID0+IHtcblx0XHRcdFx0cmV0dXJuIDxGaWVsZCBrZXk9e2ZpZWxkSW5kZXh9IHsuLi57IC4uLmZpZWxkLCBzaG91bGRGb2N1czogZmllbGRJbmRleCA9PT0gMCB9fSAvPjtcblx0XHRcdH0pfVxuXHRcdFx0PEJ1dHRvblxuXHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdHRpdGxlOiAnU2F2ZScsXG5cdFx0XHRcdFx0Y29udGVudFR5cGU6IGZpZWxkcy5sZW5ndGggPT09IDEgPyAnaWNvbicgOiAndGV4dCcsXG5cdFx0XHRcdFx0ZXh0ZW5zaW9uQ2xhc3NlczogZmllbGRzLmxlbmd0aCA9PT0gMSA/ICdmb3JtLWNvbnRyb2wtYnRuJyA6ICd3LTUwIGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMycsXG5cdFx0XHRcdFx0dGhlbWU6IGZpZWxkcy5sZW5ndGggPT09IDEgPyAnZGVmYXVsdCcgOiAnc2Vjb25kYXJ5Jyxcblx0XHRcdFx0XHRpc0xvYWRpbmc6IGVkaXRNdXRhdGlvbi5pc0xvYWRpbmcsXG5cdFx0XHRcdFx0dHlwZTogJ3N1Ym1pdCcsXG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdDwvZm9ybT5cblx0KTtcbn1cblxuY29uc3QgRmllbGQgPSAoeyBuYW1lLCBkZWZhdWx0VmFsdWUsIHNob3VsZEZvY3VzID0gZmFsc2UgfSkgPT4ge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSk7XG5cblx0LyogUmVmcyAqL1xuXHRjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIEVmZmVjdHMgKi9cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoaW5wdXRSZWY/LmN1cnJlbnQgJiYgc2hvdWxkRm9jdXMpIGlucHV0UmVmPy5jdXJyZW50Py5zZWxlY3QoKTtcblx0fSwgW10pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9e25hbWV9PlxuXHRcdFx0XHR7bmFtZX1cblx0XHRcdDwvbGFiZWw+XG5cdFx0XHQ8VGV4dGFyZWFBdXRvc2l6ZVxuXHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLS10ZXh0XCJcblx0XHRcdFx0aWQ9e25hbWV9XG5cdFx0XHRcdG5hbWU9e25hbWV9XG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxuXHRcdFx0XHRvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0VmFsdWUodmFsdWUpfVxuXHRcdFx0XHRyZWY9e2lucHV0UmVmfVxuXHRcdFx0XHRwbGFjZWhvbGRlcj17Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKG5hbWUpfVxuXHRcdFx0XHRvbkZvY3VzPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50LnNlbGVjdCgpfVxuXHRcdFx0Lz5cblx0XHQ8Lz5cblx0KTtcbn07XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIFJvdXRlcyAqL1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmhlYWRlciBjbGFzc05hbWU9XCJtYWluLWhlYWRlclwiIHsuLi5GQURFX0lOfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHB4LTUgcHQtNSBweC1sZy02IHB0LWxnLTYgcHgteGwtMTIgcHQteGwtMTJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWhlYWRlcl9fbG9nbyBsb2dvXCI+XG5cdFx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPVwibG9nb19fbGluayB0ZXh0LXJlc2V0XCIgdG89e1JPVVRFUy5sb2dpbn0gdGl0bGU9XCJQYXJhbGxlbCBEYXNoYm9hcmRcIj5cblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJsb2dvX190aXRsZSB0ZXh0LXVwcGVyY2FzZSBtYi0wXCI+UGFyYWxsZWw8L2gyPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9nb19fc3VidGl0bGUgdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtbGlnaHQgbXQtbjFcIj5EYXNoYm9hcmQ8L3A+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbW90aW9uLmhlYWRlcj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9tYWluQ29udGV4dCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSAnLi4vLi4vYXBpL3NlY3VyaXR5JztcblxuLyogUm91dGVzICovXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJOYXZpZ2F0aW9uKCkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXHRjb25zdCB7IHNldEN1cnJlbnRVc2VyIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBsb2dvdXRNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGxvZ291dCwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0aGlzdG9yeS5wdXNoKFJPVVRFUy5sb2dpbik7XG5cdFx0XHRzZXRDdXJyZW50VXNlcihudWxsKTtcblx0XHRcdHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJJZCcpO1xuXG5cdFx0XHR0b2FzdCg8QWxlcnQgbWVzc2FnZT17J1N1Y2Nlc3NmdWxseSBsb2dnZWQgb3V0ISd9IGFwcGVhcmFuY2U9XCJzdWNjZXNzXCIgLz4pO1xuXHRcdH0sXG5cdFx0b25FcnJvcjogKCkgPT4gdG9hc3QoPEFsZXJ0IG1lc3NhZ2U9eydTb21ldGhpbmcgd2VudCB3cm9uZyEnfSBhcHBlYXJhbmNlPVwiZGFuZ2VyXCIgLz4pLFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8aGVhZGVyIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyIG1haW4taGVhZGVyLS1wcm9qZWN0c1wiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWhlYWRlcl9fd3JhcHBlciBkLWZsZXggYWxpZ24taXRlbXMtZW5kXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWhlYWRlcl9fbG9nbyBsb2dvXCI+XG5cdFx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9XCJsb2dvX19saW5rIHRleHQtcmVzZXRcIiB0bz17Uk9VVEVTLnByb2plY3RzfSB0aXRsZT1cIlBhcmFsbGVsIERhc2hib2FyZFwiPlxuXHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwibG9nb19fdGl0bGUgdGV4dC11cHBlcmNhc2UgdGV4dC13aGl0ZSBtYi0wXCI+UGFyYWxsZWw8L2gyPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2dvX19zdWJ0aXRsZSB0ZXh0LXVwcGVyY2FzZSB0ZXh0LXdoaXRlIGZvbnQtd2VpZ2h0LWxpZ2h0IG10LW4xXCI+XG5cdFx0XHRcdFx0XHRcdFx0RGFzaGJvYXJkXG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4taGVhZGVyX19uYXYgbWwtYXV0b1wiPlxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtLXByaW1hcnlcIj5cblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZj1cInt7IHBhdGgoJ2FwcF9sb2dvdXQnKSB9fVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT1cIkxvZ291dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuYXYtbGluayBidG4gYnRuLWxpbmsgdGV4dC1yZXNldFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBsb2dvdXRNdXRhdGlvbi5tdXRhdGUoKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuYXYtdGV4dFwiPkxvZ291dDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9oZWFkZXI+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHByb3BzKSB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0LyogQ29uc3RhbnRzKi9cblx0Y29uc3QgdHJhbnNpdGlvbiA9IHtcblx0XHRkdXJhdGlvbjogMC4yLFxuXHRcdGVhc2U6IFswLjY1LCAwLCAwLjM1LCAxXSxcblx0fTtcblxuXHRjb25zdCB2YXJpYW50cyA9IHtcblx0XHRoaWRkZW46IHtcblx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHR0cmFuc2l0aW9uLFxuXHRcdH0sXG5cdFx0dmlzaWJsZToge1xuXHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdHRyYW5zaXRpb24sXG5cdFx0fSxcblx0fTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3Qgb25Mb2FkID0gKCkgPT4gc2V0TG9hZGVkKHRydWUpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uaW1nXG5cdFx0XHRrZXk9e3Byb3BzLnNyY31cblx0XHRcdGluaXRpYWw9XCJoaWRkZW5cIlxuXHRcdFx0YW5pbWF0ZT17bG9hZGVkID8gJ3Zpc2libGUnIDogJ2hpZGRlbid9XG5cdFx0XHR7Li4ueyAuLi5wcm9wcywgb25Mb2FkLCB2YXJpYW50cyB9fVxuXHRcdC8+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEFjdGlvbk1lbnUgfSBmcm9tICcuL2FjdGlvbi1tZW51L0FjdGlvbk1lbnUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBbGVydCB9IGZyb20gJy4vYWxlcnQvQWxlcnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYWNrZ3JvdW5kIH0gZnJvbSAnLi9iYWNrZ3JvdW5kL0JhY2tncm91bmQnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsIH0gZnJvbSAnLi9tb2RhbC9Nb2RhbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsSGVhZGVyIH0gZnJvbSAnLi9tb2RhbC9Nb2RhbEhlYWRlcic7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uIH0gZnJvbSAnLi9idXR0b24vQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcHpvbmUgfSBmcm9tICcuL2Ryb3B6b25lL0Ryb3B6b25lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcHpvbmVTaW5nbGUgfSBmcm9tICcuL2Ryb3B6b25lL0Ryb3B6b25lU2luZ2xlJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFZGl0YWJsZSB9IGZyb20gJy4vZWRpdGFibGUvRWRpdGFibGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFZGl0YWJsZUJvZHkgfSBmcm9tICcuL2VkaXRhYmxlL0VkaXRhYmxlQm9keSc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuL2xvYWRpbmctd3JhcHBlci9Mb2FkaW5nV3JhcHBlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNsaWRlSW4gfSBmcm9tICcuL3NsaWRlLWluL1NsaWRlSW4nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYWdlTG9hZGVyIH0gZnJvbSAnLi9wYWdlLWxvYWRlci9QYWdlTG9hZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFnZVdyYXBwZXIgfSBmcm9tICcuL3BhZ2Utd3JhcHBlci9QYWdlV3JhcHBlcic7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlckFkZCB9IGZyb20gJy4vdXNlci1hZGQvVXNlckFkZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJBZGRTZWFyY2ggfSBmcm9tICcuL3VzZXItYWRkL1VzZXJBZGRTZWFyY2gnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VyQWRkU2VhcmNoUmVzdWx0cyB9IGZyb20gJy4vdXNlci1hZGQvVXNlckFkZFNlYXJjaFJlc3VsdHMnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlYWRlciB9IGZyb20gJy4vaGVhZGVyL0hlYWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlYWRlck5hdmlnYXRpb24gfSBmcm9tICcuL2hlYWRlci9IZWFkZXJOYXZpZ2F0aW9uJztcblxuZXhwb3J0ICogZnJvbSAnLi91c2Vycy9Vc2VyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlciB9IGZyb20gJy4vdXNlcnMvVXNlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJzIH0gZnJvbSAnLi91c2Vycy9Vc2Vycyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJTZWxlY3QgfSBmcm9tICcuL3VzZXJzL1VzZXJTZWxlY3QnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlY3VyaXR5TW9kYWwgfSBmcm9tICcuL3NlY3VyaXR5L1NlY3VyaXR5TW9kYWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dpbkZvcm0gfSBmcm9tICcuL3NlY3VyaXR5L0xvZ2luRm9ybSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpZ251cEZvcm0gfSBmcm9tICcuL3NlY3VyaXR5L1NpZ251cEZvcm0nO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEltYWdlIH0gZnJvbSAnLi9pbWFnZS9pbWFnZSc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgVG9vbHRpcCB9IGZyb20gJy4vdG9vbHRpcC9Ub29sdGlwJztcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTQ0FMRV9GQURFIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRpbmdXcmFwcGVyKHsgbG9hZGluZywgY2hpbGRyZW4sIGxvYWRlclNpemUgPSA0MCwgY2xhc3NlcyA9IHt9IH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgbG9hZGVyQ2xhc3NlcyA9ICdwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXgnLCBkZWZhdWx0Q2xhc3NlcyA9ICcnIH0gPSBjbGFzc2VzO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9PlxuXHRcdFx0e2xvYWRpbmcgPyAoXG5cdFx0XHRcdDxtb3Rpb24uZGl2IGtleT1cImxvYWRlclwiIGNsYXNzTmFtZT17bG9hZGVyQ2xhc3Nlc30gey4uLlNDQUxFX0ZBREV9PlxuXHRcdFx0XHRcdDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwiaW5oZXJpdFwiIHNpemU9e2xvYWRlclNpemV9IC8+XG5cdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxtb3Rpb24uZGl2IGtleT1cImRlZmF1bHRcIiBjbGFzc05hbWU9e2RlZmF1bHRDbGFzc2VzfSB7Li4uU0NBTEVfRkFERX0+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQpfVxuXHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IENsaWNrQXdheUxpc3RlbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCBNb2RhbEhlYWRlciBmcm9tICcuL01vZGFsSGVhZGVyJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiwgRkFERV9JTl9VUCB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlQ2xvc2VPbkVzYyB9IGZyb20gJy4uLy4uL2hvb2tzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwoe1xuXHR0aXRsZSxcblx0c3VidGl0bGUsXG5cdG1vZGFsT3Blbixcblx0dG9nZ2xlTW9kYWwsXG5cdGNoaWxkcmVuLFxuXHRyZW5kZXJPbkJvZHkgPSB0cnVlLFxuXHRjZW50ZXIgPSB0cnVlLFxuXHRleHRlbnNpb25DbGFzc2VzLFxuXHRjb21wb25lbnRzID0ge30sXG5cdGN1c3RvbUFuaW1hdGlvbixcbn0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgSGVhZGVyQ29tcG9uZW50ID0gTW9kYWxIZWFkZXIgfSA9IGNvbXBvbmVudHM7XG5cdGNvbnN0IGFuaW1hdGlvbiA9IGN1c3RvbUFuaW1hdGlvbiA/PyBGQURFX0lOX1VQKCk7XG5cblx0LyogSG9va3MgKi9cblx0dXNlQ2xvc2VPbkVzYyhtb2RhbE9wZW4sIHRvZ2dsZU1vZGFsKTtcblxuXHRjb25zdCByZW5kZXIgPSAoKSA9PiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdHttb2RhbE9wZW4gJiYgKFxuXHRcdFx0XHQ8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e3RvZ2dsZU1vZGFsfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGN1c3RvbS1tb2RhbCAke2NlbnRlciAmJiAnY3VzdG9tLW1vZGFsLS1jZW50ZXInfSAke2V4dGVuc2lvbkNsYXNzZXN9YH0+XG5cdFx0XHRcdFx0XHR7cmVuZGVyT25Cb2R5ICYmIChcblx0XHRcdFx0XHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsLW92ZXJsYXlcIiB7Li4uRkFERV9JTn0gb25DbGljaz17dG9nZ2xlTW9kYWx9IC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRcdFx0a2V5PVwiY3VzdG9tLW1vZGFsLWNvbnRlbnRcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2NvbnRlbnQgYm9yZGVyIHAtNVwiXG5cdFx0XHRcdFx0XHRcdHsuLi5hbmltYXRpb259PlxuXHRcdFx0XHRcdFx0XHQ8SGVhZGVyQ29tcG9uZW50IHsuLi57IHRpdGxlLCBzdWJ0aXRsZSwgdG9nZ2xlTW9kYWwgfX0gLz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2JvZHkgZC1mbGV4IG10LTJcIj57Y2hpbGRyZW59PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvQ2xpY2tBd2F5TGlzdGVuZXI+XG5cdFx0XHQpfVxuXHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHQpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRpZiAocmVuZGVyT25Cb2R5KSB7XG5cdFx0cmV0dXJuIGNyZWF0ZVBvcnRhbChyZW5kZXIoKSwgZG9jdW1lbnQuYm9keSk7XG5cdH1cblxuXHRyZXR1cm4gcmVuZGVyKCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gJ2ljb25zL2Nsb3NlLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsSGVhZGVyKHsgdGl0bGUsIHN1YnRpdGxlLCB0b2dnbGVNb2RhbCB9KSB7XG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19oZWFkZXIgZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDBcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0xMDBcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fdGl0bGVcIj57dGl0bGV9PC9wPlxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19jbG9zZSBidG4gYnRuLWxpbmsgbWwtYXV0b1wiXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfT5cblx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEyXCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7c3VidGl0bGUgJiYgPHAgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19zdWJ0aXRsZVwiPntzdWJ0aXRsZX08L3A+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlTG9hZGVyKHsgaXNMb2FkaW5nLCBjaGlsZHJlbiB9KSB7XG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHR7aXNMb2FkaW5nID8gKFxuXHRcdFx0XHQ8bW90aW9uLmRpdiB7Li4uRkFERV9JTn0+XG5cdFx0XHRcdFx0PExpbmVhclByb2dyZXNzIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PGRpdiBrZXk9XCJjaGlsZHJlblwiPntjaGlsZHJlbn08L2Rpdj5cblx0XHRcdCl9XG5cdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZVdyYXBwZXIoeyBjaGlsZHJlbiB9KSB7XG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxtYWluIGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwicGFuZSBweS01IHB5LWxnLTEwXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+e2NoaWxkcmVufTwvZGl2PlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdDwvbWFpbj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiB9IGZyb20gJy4uJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBsb2dpbiwgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VQYWdlVGl0bGUgfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbi8qIFJvdXRlcyAqL1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5Gb3JtKHsgY3VycmVudFVzZXIsIHRvZ2dsZU1vZGFsLCBzaG93U2lnbnVwID0gdHJ1ZSB9KSB7XG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgZm9ybVJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIEhvb2tzICovXG5cdHVzZVBhZ2VUaXRsZSgnTG9naW4nKTtcblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXHRjb25zdCB7XG5cdFx0cmVnaXN0ZXIsXG5cdFx0aGFuZGxlU3VibWl0LFxuXHRcdGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcblx0fSA9IHVzZUZvcm0oeyByZVZhbGlkYXRlTW9kZTogJ29uQ2hhbmdlJywgbW9kZTogJ29uQmx1cicgfSk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGxvZ2luTXV0YXRpb24gPSB1c2VNdXRhdGlvbihsb2dpbiwge1xuXHRcdG9uU3VjY2VzczogKHVzZXIpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuQ1VSUkVOVF9VU0VSKTtcblxuXHRcdFx0aWYgKGN1cnJlbnRVc2VyKSB0b2dnbGVNb2RhbCgpO1xuXG5cdFx0XHR0b2FzdCg8QWxlcnQgbWVzc2FnZT1cIlN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4hXCIgYXBwZWFyYW5jZT1cInN1Y2Nlc3NcIiAvPik7XG5cdFx0fSxcblx0XHRvbkVycm9yOiAoZXJyb3IpID0+IHtcblx0XHRcdHRvYXN0KFxuXHRcdFx0XHQ8QWxlcnRcblx0XHRcdFx0XHRtZXNzYWdlPXtcblx0XHRcdFx0XHRcdGVycm9yPy5yZXNwb25zZT8uZGF0YT8uZXJyb3IgPyAnRW1haWwvcGFzc3dvcmQgY29tYmluYXRpb24gbm90IGZvdW5kIScgOiAnU29tZXRoaW5nIHdlbnQgd3JvbmchJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhcHBlYXJhbmNlPVwiZGFuZ2VyXCJcblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cblx0XHRcdGVycm9ycy5lbWFpbCA9IHsgbWVzc2FnZTogJ0VtYWlsL3Bhc3N3b3JkIGNvbWJpbmF0aW9uIG5vdCBmb3VuZCcgfTtcblx0XHRcdGVycm9ycy5wYXNzd29yZCA9IHsgbWVzc2FnZTogJ0VtYWlsL3Bhc3N3b3JkIGNvbWJpbmF0aW9uIG5vdCBmb3VuZCcgfTtcblx0XHR9LFxuXHR9KTtcblxuXHRjb25zdCBvblN1Ym1pdCA9ICgpID0+IGxvZ2luTXV0YXRpb24ubXV0YXRlKHsgZm9ybVJlZiB9KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxmb3JtIHJlZj17Zm9ybVJlZn0gY2xhc3NOYW1lPVwicGFuZWxfX2Zvcm0gZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfSBub1ZhbGlkYXRlPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0yXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwiaW5wdXRFbWFpbFwiPlxuXHRcdFx0XHRcdFx0RW1haWxcblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke2Vycm9ycy5lbWFpbCAmJiAnaXMtaW52YWxpZCd9YH1cblx0XHRcdFx0XHRcdGlkPVwiaW5wdXRFbWFpbFwiXG5cdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbWFpbFwiXG5cdFx0XHRcdFx0XHRhdXRvRm9jdXNcblx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcignZW1haWwnLCB7XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7ZXJyb3JzLmVtYWlsICYmIChcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuXHRcdFx0XHRcdFx0XHR7ZXJyb3JzLmVtYWlsPy5tZXNzYWdlID8gZXJyb3JzLmVtYWlsLm1lc3NhZ2UgOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwnfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwiaW5wdXRQYXNzd29yZFwiPlxuXHRcdFx0XHRcdFx0UGFzc3dvcmRcblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke2Vycm9ycy5wYXNzd29yZCAmJiAnaXMtaW52YWxpZCd9YH1cblx0XHRcdFx0XHRcdGlkPVwiaW5wdXRQYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRuYW1lPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG5cdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ3Bhc3N3b3JkJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHtlcnJvcnMucGFzc3dvcmQgJiYgKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG5cdFx0XHRcdFx0XHRcdHtlcnJvcnMucGFzc3dvcmQ/Lm1lc3NhZ2UgPyBlcnJvcnMucGFzc3dvcmQubWVzc2FnZSA6ICdQbGVhc2UgZW50ZXIgYSBwYXNzd29yZCd9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0yXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZFwiPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnTG9nIGluJyxcblx0XHRcdFx0XHRcdFx0dGhlbWU6ICdzZWNvbmRhcnknLFxuXHRcdFx0XHRcdFx0XHRzaXplOiAnbWQnLFxuXHRcdFx0XHRcdFx0XHRleHRlbnNpb25DbGFzc2VzOiAnYnRuLWJsb2NrIGp1c3RpZnktY29udGVudC1jZW50ZXInLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VibWl0Jyxcblx0XHRcdFx0XHRcdFx0aXNMb2FkaW5nOiBsb2dpbk11dGF0aW9uLmlzTG9hZGluZyxcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtzaG93U2lnbnVwICYmIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWRcIj5cblx0XHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS13aGl0ZSBidG4tYmxvY2tcIiB0bz17Uk9VVEVTLnNpZ251cH0gdGl0bGU9XCJzaWduIHVwXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImJ0bl9fdGV4dFwiPlNpZ24gdXA8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Zvcm0+XG5cdCk7XG59XG4iLCIvKiBDb21wb25lbnRzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTW9kYWwsIExvZ2luRm9ybSwgU2lnbnVwRm9ybSB9IGZyb20gJy4uJztcbmltcG9ydCB7IFN0YXRpY0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdXJpdHlNb2RhbCh7IHNlY3VyaXR5TW9kYWxPcGVuLCBzZXRTZWN1cml0eU1vZGFsT3BlbiB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgY3VycmVudFVzZXIsIHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB0aXRsZSA9IHVzZXJSb2xlID09PSAnYmFzaWMnID8gJ1NpZ251cCcgOiAnTG9naW4nO1xuXHRjb25zdCBzdWJ0aXRsZSA9IGAke3RpdGxlfSBpZiB5b3Ugd2FudCB0byBjb21tZW50YDtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlU2VjdXJpdHlNb2RhbCA9ICgpID0+IHNldFNlY3VyaXR5TW9kYWxPcGVuKCFzZWN1cml0eU1vZGFsT3Blbik7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsIHsuLi57IHRpdGxlLCBzdWJ0aXRsZSwgbW9kYWxPcGVuOiBzZWN1cml0eU1vZGFsT3BlbiwgdG9nZ2xlTW9kYWw6IHRvZ2dsZVNlY3VyaXR5TW9kYWwgfX0+XG5cdFx0XHR7dXNlclJvbGUgPT09ICdiYXNpYycgPyAoXG5cdFx0XHRcdDxTaWdudXBGb3JtXG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdGN1cnJlbnRVc2VyLFxuXHRcdFx0XHRcdFx0dG9nZ2xlTW9kYWw6IHRvZ2dsZVNlY3VyaXR5TW9kYWwsXG5cdFx0XHRcdFx0XHRzaG93TG9naW46IGZhbHNlLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8TG9naW5Gb3JtXG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdGN1cnJlbnRVc2VyLFxuXHRcdFx0XHRcdFx0dG9nZ2xlTW9kYWw6IHRvZ2dsZVNlY3VyaXR5TW9kYWwsXG5cdFx0XHRcdFx0XHRzaG93U2lnbnVwOiBmYWxzZSxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0KX1cblx0XHQ8L01vZGFsPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IHVzZUZvcm0sIHVzZVdhdGNoIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiB9IGZyb20gJy4uJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBRVUVSWV9LRVlTLCBzaWdudXAgfSBmcm9tICcuLi8uLi9hcGknO1xuXG4vKiBSb3V0ZXMgKi9cbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VQYWdlVGl0bGUgfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ251cEZvcm0oeyBjdXJyZW50VXNlciwgdG9nZ2xlTW9kYWwsIHNob3dMb2dpbiA9IHRydWUgfSkge1xuXHQvKiBSZWZzICovXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBIb29rcyAqL1xuXHR1c2VQYWdlVGl0bGUoJ1NpZ251cCcpO1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0Y29uc3Qge1xuXHRcdHJlZ2lzdGVyLFxuXHRcdGhhbmRsZVN1Ym1pdCxcblx0XHRmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG5cdFx0Y29udHJvbCxcblx0fSA9IHVzZUZvcm0oeyByZVZhbGlkYXRlTW9kZTogJ29uQ2hhbmdlJywgbW9kZTogJ29uQmx1cicgfSk7XG5cblx0Y29uc3QgcGxhaW5QYXNzd29yZCA9IHVzZVdhdGNoKHtcblx0XHRjb250cm9sLFxuXHRcdG5hbWU6ICdwbGFpblBhc3N3b3JkJyxcblx0XHRkZWZhdWx0VmFsdWU6ICcnLFxuXHR9KTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3Qgc2lnbnVwTXV0YXRpb24gPSB1c2VNdXRhdGlvbihzaWdudXAsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuQ1VSUkVOVF9VU0VSKTtcblxuXHRcdFx0dG9hc3QoPEFsZXJ0IG1lc3NhZ2U9XCJTdWNjZXNzZnVsbHkgbG9nZ2VkIGluIVwiIGFwcGVhcmFuY2U9XCJzdWNjZXNzXCIgLz4pO1xuXG5cdFx0XHRpZiAoY3VycmVudFVzZXIpIHRvZ2dsZU1vZGFsKCk7XG5cdFx0fSxcblx0XHRvbkVycm9yOiAoZXJyb3IpID0+IHtcblx0XHRcdGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xuXHRcdFx0XHR0b2FzdCg8QWxlcnQgbWVzc2FnZT1cIlRoaXMgZW1haWwgaXMgYWxyZWFkeSBpbiB1c2UhXCIgYXBwZWFyYW5jZT1cImRhbmdlclwiIC8+KTtcblxuXHRcdFx0XHRmb3JtUmVmLmN1cnJlbnQucmVzZXQoKTtcblx0XHRcdH1cblx0XHR9LFxuXHR9KTtcblxuXHRjb25zdCBvblN1Ym1pdCA9ICgpID0+IHNpZ251cE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYsIHVzZXJJZDogY3VycmVudFVzZXI/LmlkIH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxmb3JtIHJlZj17Zm9ybVJlZn0gY2xhc3NOYW1lPVwicGFuZWxfX2Zvcm0gZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfSBub1ZhbGlkYXRlPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0yXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJyZWdpc3RyYXRpb25fZm9ybV91c2VybmFtZVwiPlxuXHRcdFx0XHRcdFx0WW91ciBuYW1lXG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGlkPVwicmVnaXN0cmF0aW9uX2Zvcm1fdXNlcm5hbWVcIlxuXHRcdFx0XHRcdFx0bmFtZT1cInVzZXJuYW1lXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke2Vycm9ycy51c2VybmFtZSAmJiAnaXMtaW52YWxpZCd9YH1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRnVsbCBuYW1lXCJcblx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcigndXNlcm5hbWUnLCB7XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhIG5hbWUnLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7ZXJyb3JzLnVzZXJuYW1lICYmIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPntlcnJvcnMudXNlcm5hbWUubWVzc2FnZX08L2Rpdj59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicmVnaXN0cmF0aW9uX2Zvcm1fb3JnYW5pc2F0aW9uXCI+XG5cdFx0XHRcdFx0XHRPcmdhbmlzYXRpb25cblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0aWQ9XCJyZWdpc3RyYXRpb25fZm9ybV9vcmdhbmlzYXRpb25cIlxuXHRcdFx0XHRcdFx0bmFtZT1cIm9yZ2FuaXNhdGlvblwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtlcnJvcnMub3JnYW5pc2F0aW9uICYmICdpcy1pbnZhbGlkJ31gfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJPcmdhbmlzYXRpb25cIlxuXHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKCdvcmdhbmlzYXRpb24nLCB7XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhbiBvcmdhbmlzYXRpb24nLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7ZXJyb3JzLm9yZ2FuaXNhdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj57ZXJyb3JzLm9yZ2FuaXNhdGlvbi5tZXNzYWdlfTwvZGl2Pn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicmVnaXN0cmF0aW9uX2Zvcm1fZW1haWxcIj5cblx0XHRcdFx0XHRcdEVtYWlsXG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGlkPVwicmVnaXN0cmF0aW9uX2Zvcm1fZW1haWxcIlxuXHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke2Vycm9ycy5lbWFpbCAmJiAnaXMtaW52YWxpZCd9YH1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuXHRcdFx0XHRcdFx0dmFsdWU9e2N1cnJlbnRVc2VyPy5lbWFpbH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PiB7fX1cblx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcignZW1haWwnLCB7XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhbiBlbWFpbCcsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHtlcnJvcnMuZW1haWwgJiYgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e2Vycm9ycy5lbWFpbC5tZXNzYWdlfTwvZGl2Pn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJyZWdpc3RyYXRpb25fZm9ybV9wbGFpblBhc3N3b3JkXCI+XG5cdFx0XHRcdFx0XHRQYXNzd29yZFxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0aWQ9XCJyZWdpc3RyYXRpb25fZm9ybV9wbGFpblBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJwbGFpblBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke2Vycm9ycy5wYXNzd29yZCAmJiAnaXMtaW52YWxpZCd9YH1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKCdwbGFpblBhc3N3b3JkJywge1xuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZDoge1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYSBwYXNzd29yZCcsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdG1pbkxlbmd0aDoge1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiA2LFxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYSBwYXNzd29yZCBvZiBhdGxlYXN0IDYgY2hhcmFjdGVycycsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHtlcnJvcnMucGxhaW5QYXNzd29yZCAmJiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj57ZXJyb3JzLnBsYWluUGFzc3dvcmQubWVzc2FnZX08L2Rpdj59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwibG9naW4tY29uZmlybS1wYXNzd29yZFwiPlxuXHRcdFx0XHRcdFx0Q29uZmlybSBwYXNzd29yZFxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7ZXJyb3JzLnBhc3N3b3JkQ29uZmlybSAmJiAnaXMtaW52YWxpZCd9YH1cblx0XHRcdFx0XHRcdGlkPVwibG9naW4tY29uZmlybS1wYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkNvbmZpcm0gcGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0bmFtZT1cInBhc3N3b3JkQ29uZmlybVwiXG5cdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ3Bhc3N3b3JkQ29uZmlybScsIHtcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUGxlYXNlIGNvbmZpcm0geW91ciBwYXNzd29yZCcsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHZhbGlkYXRlOiAodmFsdWUpID0+IHZhbHVlID09PSBwbGFpblBhc3N3b3JkIHx8ICdUaGUgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaCcsXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHtlcnJvcnMucGFzc3dvcmRDb25maXJtICYmIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPntlcnJvcnMucGFzc3dvcmRDb25maXJtLm1lc3NhZ2V9PC9kaXY+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0yXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZFwiPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnU2lnbiB1cCcsXG5cdFx0XHRcdFx0XHRcdHRoZW1lOiAnc2Vjb25kYXJ5Jyxcblx0XHRcdFx0XHRcdFx0c2l6ZTogJ21kJyxcblx0XHRcdFx0XHRcdFx0ZXh0ZW5zaW9uQ2xhc3NlczogJ2J0bi1ibG9jayBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJyxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Ym1pdCcsXG5cdFx0XHRcdFx0XHRcdGlzTG9hZGluZzogc2lnbnVwTXV0YXRpb24uaXNMb2FkaW5nLFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e3Nob3dMb2dpbiAmJiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kXCI+XG5cdFx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtd2hpdGUgYnRuLWJsb2NrXCIgdG89e1JPVVRFUy5sb2dpbn0gdGl0bGU9XCJzaWduIHVwXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImJ0bl9fdGV4dFwiPkxvZ2luPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9mb3JtPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4sIFRSQU5TRk9STV9VUCB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZUluKHsgdG9nZ2xlU2xpZGVJbiwgY2hpbGRyZW4sIGRvbUVsZW1lbnQsIHZhcmlhbnQgPSAnZGVmYXVsdCcgfSkge1xuXHRjb25zdCByZW5kZXIgPSAoKSA9PiAoXG5cdFx0PGRpdiBrZXk9XCJzbGlkZS1pblwiIGNsYXNzTmFtZT17YHNsaWRlLWluIHNsaWRlLWluLS0ke3ZhcmlhbnR9YH0+XG5cdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbl9fb3ZlcmxheVwiIG9uQ2xpY2s9e3RvZ2dsZVNsaWRlSW59IHsuLi5GQURFX0lOfSAvPlxuXHRcdFx0PG1vdGlvbi5hcnRpY2xlIGtleT1cInNsaWRlLWluX19jb250ZW50XCIgY2xhc3NOYW1lPVwic2xpZGUtaW5fX2NvbnRlbnRcIiB7Li4uVFJBTlNGT1JNX1VQfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgZC1mbGV4IGZsZXgtZ3Jvdy0xXCI+e2NoaWxkcmVufTwvZGl2PlxuXHRcdFx0PC9tb3Rpb24uYXJ0aWNsZT5cblx0XHQ8L2Rpdj5cblx0KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0aWYgKGRvbUVsZW1lbnQpIHtcblx0XHRyZXR1cm4gY3JlYXRlUG9ydGFsKHJlbmRlcigpLCBkb21FbGVtZW50KTtcblx0fVxuXG5cdHJldHVybiByZW5kZXIoKTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVG9vbHRpcCBhcyBUaXBweSB9IGZyb20gJ3JlYWN0LXRpcHB5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9vbHRpcCh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSB7XG5cdHJldHVybiAoXG5cdFx0PFRpcHB5XG5cdFx0XHRwb3NpdGlvbj1cInRvcFwiXG5cdFx0XHRhbmltYXRpb249XCJzaGlmdFwiXG5cdFx0XHRkdXJhdGlvbj17MTUwfVxuXHRcdFx0ZGlzdGFuY2U9ezE1fVxuXHRcdFx0YXJyb3dcblx0XHRcdGFycm93U2l6ZT1cInNtYWxsXCJcblx0XHRcdHRyaWdnZXI9XCJjbGlja1wiXG5cdFx0XHR7Li4ucHJvcHN9XG5cdFx0XHRzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9UaXBweT5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTW9kYWwsIFVzZXJBZGRTZWFyY2ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkVXNlckljb24gZnJvbSAnaWNvbnMvYWRkX3VzZXIuc3ZnJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckFkZCh7IHVzZXJzLCBwcm9qZWN0IH0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZU1vZGFsID0gKCkgPT4gc2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pO1xuXG5cdGNvbnN0IGludmFsaWRhdGVRdWVyaWVzID0gKCkgPT4ge1xuXHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3QuaWRdKTtcblx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLkdMT0JBTF9VU0VSUyk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtbC0yXCI+XG5cdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayB1c2VyIHVzZXItLWxnIHVzZXItLWFkZFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0b2dnbGVNb2RhbH0+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInVzZXJfX2F2YXRhclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlcl9faW5pdGlhbHNcIj5cblx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9faWNvbiBpY29uIGljb24tLTEyIG10LTBcIiBzcmM9e2FkZFVzZXJJY29ufSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxNb2RhbFxuXHRcdFx0XHR0aXRsZT1cIlNlbGVjdCB1c2Vyc1wiXG5cdFx0XHRcdHN1YnRpdGxlPVwiQ2hvb3NlIHNvbWUgdXNlcnMgdG8gY29sbGFib3JhdGUgd2l0aC5cIlxuXHRcdFx0XHR7Li4ueyBtb2RhbE9wZW4sIHRvZ2dsZU1vZGFsIH19PlxuXHRcdFx0XHQ8VXNlckFkZFNlYXJjaCB7Li4ueyB1c2VycywgcHJvamVjdCwgdG9nZ2xlTW9kYWwsIGludmFsaWRhdGVRdWVyaWVzIH19IC8+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VyQWRkU2VhcmNoUmVzdWx0cywgVXNlcnMsIEJ1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBTZXJ2aWNlcyAqL1xuaW1wb3J0IHsgaXNFbWFpbCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcbmltcG9ydCBmaWx0ZXJVc2VycyBmcm9tICcuL3NlcnZpY2VzL2ZpbHRlclVzZXJzJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBhZGRVc2VyLCBmZXRjaEdvYmFsVXNlcnMsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQWRkU2VhcmNoKHsgdXNlcnMsIHByb2plY3QsIHRvZ2dsZU1vZGFsLCBpbnZhbGlkYXRlUXVlcmllcyB9KSB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbZm9jdXNlZFVzZXIsIHNldEZvY3VzZWRVc2VyXSA9IHVzZVN0YXRlKDApO1xuXG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBkYXRhOiBnbG9iYWxVc2VycyA9IFtdLCBpc0xvYWRpbmc6IGdsb2JhbFVzZXJzTG9hZGluZyB9ID0gdXNlUXVlcnkoXG5cdFx0UVVFUllfS0VZUy5HTE9CQUxfVVNFUlMsXG5cdFx0ZmV0Y2hHb2JhbFVzZXJzXG5cdCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IGZpbHRlcmVkVXNlcnMgPSBmaWx0ZXJVc2VycyhnbG9iYWxVc2VycywgdXNlcnMsIHF1ZXJ5KTtcblxuXHQvKiBSZWZzICovXG5cdGNvbnN0IHF1ZXJ5UmVmID0gdXNlUmVmKCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGFkZFVzZXJNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZFVzZXIsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdGludmFsaWRhdGVRdWVyaWVzKCk7XG5cdFx0XHRxdWVyeVJlZi5jdXJyZW50LnNlbGVjdCgpO1xuXHRcdFx0c2V0UXVlcnkoJycpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBzZXRRdWVyeSh2YWx1ZSk7XG5cblx0Y29uc3QgaGFuZGxlT25LZXlEb3duID0gKGV2ZW50KSA9PiB7XG5cdFx0aWYgKFsnRW50ZXInLCAnVGFiJ10uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0aWYgKHF1ZXJ5ICE9PSAnJyAmJiBmb2N1c2VkVXNlciAhPT0gbnVsbCkge1xuXHRcdFx0XHRjb25zdCB1c2VyID0gZm9jdXNlZFVzZXIgaW4gZmlsdGVyZWRVc2VycyA/IGZpbHRlcmVkVXNlcnNbZm9jdXNlZFVzZXJdIDogZm9jdXNlZFVzZXI7XG5cblx0XHRcdFx0aWYgKGlzRW1haWwodXNlci5lbWFpbCkpIHtcblx0XHRcdFx0XHRhZGRVc2VyTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkOiBwcm9qZWN0LmlkLCBlbWFpbDogdXNlci5lbWFpbCB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRjb25zdCBoYW5kbGVDbGljayA9ICh7IGVtYWlsIH0pID0+IHtcblx0XHRpZiAoaXNFbWFpbChlbWFpbCkpIHtcblx0XHRcdGFkZFVzZXJNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQ6IHByb2plY3QuaWQsIGVtYWlsOiBlbWFpbCB9KTtcblx0XHR9XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1ncm93LTFcIj5cblx0XHRcdDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdCwgaW52YWxpZGF0ZVF1ZXJpZXMgfX0gdmFyaWFudD1cImludGVyYWN0aXZlXCIgc2l6ZT1cImxnXCIgLz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cblx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwidXNlclF1ZXJ5XCI+XG5cdFx0XHRcdFx0U2VhcmNoIG5hbWUgb3IgZW1haWxcblx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC0tc2VhcmNoXCJcblx0XHRcdFx0XHRpZD1cInVzZXJRdWVyeVwiXG5cdFx0XHRcdFx0bmFtZT1cInVzZXJRdWVyeVwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTZWFyY2ggbmFtZSBvciBlbWFpbFwiXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdGF1dG9Gb2N1c1xuXHRcdFx0XHRcdHZhbHVlPXtxdWVyeX1cblx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdG9uS2V5RG93bj17aGFuZGxlT25LZXlEb3dufVxuXHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cIm9mZlwiXG5cdFx0XHRcdFx0cmVmPXtxdWVyeVJlZn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVNb2RhbH0gZXh0ZW5zaW9uQ2xhc3Nlcz1cImZvcm0tY29udHJvbC1idG5cIiBjb250ZW50VHlwZT1cImljb25cIiB0aGVtZT1cImRlZmF1bHRcIiAvPlxuXHRcdFx0XHQ8VXNlckFkZFNlYXJjaFJlc3VsdHNcblx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0ZmlsdGVyZWRVc2Vycyxcblx0XHRcdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRcdFx0aGFuZGxlQ2xpY2ssXG5cdFx0XHRcdFx0XHRmb2N1c2VkVXNlcixcblx0XHRcdFx0XHRcdHNldEZvY3VzZWRVc2VyLFxuXHRcdFx0XHRcdFx0dXNlck11dGF0aW9uTG9hZGluZzogYWRkVXNlck11dGF0aW9uLmlzTG9hZGluZyxcblx0XHRcdFx0XHRcdGdsb2JhbFVzZXJzTG9hZGluZyxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXJTZWxlY3QgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQWRkU2VhcmNoUmVzdWx0cyh7XG5cdGZpbHRlcmVkVXNlcnMsXG5cdHF1ZXJ5LFxuXHRoYW5kbGVDbGljayxcblx0Zm9jdXNlZFVzZXIsXG5cdHNldEZvY3VzZWRVc2VyLFxuXHR1c2VyTXV0YXRpb25Mb2FkaW5nLFxuXHRnbG9iYWxVc2Vyc0xvYWRpbmcsXG59KSB7XG5cdC8qIFJlbmRlciBmaWx0ZXJlZCByZXN1bHRzICovXG5cdGNvbnN0IHJlc3VsdHMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgbmV3VXNlciA9IHsgZW1haWw6IHF1ZXJ5LCBvcmdhbmlzYXRpb246IHF1ZXJ5LCBkaXNwbGF5OiAnTmV3IHVzZXInLCB1c2VyQ29sb3I6ICcyOTEsIDgxJSwgNTMlJyB9O1xuXG5cdFx0aWYgKGZpbHRlcmVkVXNlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIGZpbHRlcmVkVXNlcnMubWFwKCh1c2VyLCB1c2VySW5kZXgpID0+IChcblx0XHRcdFx0PG1vdGlvbi5saSB7Li4uRkFERV9JTn0ga2V5PXt1c2VyLmlkfSBjbGFzc05hbWU9XCJsaXN0X19pdGVtIHZyLTNcIj5cblx0XHRcdFx0XHQ8VXNlclNlbGVjdFxuXHRcdFx0XHRcdFx0ey4uLnsgdXNlciwgdXNlckluZGV4LCBoYW5kbGVDbGljaywgc2V0Rm9jdXNlZFVzZXIgfX1cblx0XHRcdFx0XHRcdGlzRm9jdXNlZD17dXNlckluZGV4ID09PSBmb2N1c2VkVXNlciAmJiBxdWVyeX1cblx0XHRcdFx0XHRcdGlzTG9hZGluZz17dXNlck11dGF0aW9uTG9hZGluZ31cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L21vdGlvbi5saT5cblx0XHRcdCkpO1xuXHRcdH1cblxuXHRcdGlmICghZ2xvYmFsVXNlcnNMb2FkaW5nKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8bW90aW9uLmxpIHsuLi5GQURFX0lOfSBrZXk9XCJOZXcgdXNlclwiIGNsYXNzTmFtZT1cImxpc3RfX2l0ZW0gaXMtZm9jdXNlZCB2ci0zXCI+XG5cdFx0XHRcdFx0PFVzZXJTZWxlY3Rcblx0XHRcdFx0XHRcdHsuLi57IHVzZXI6IG5ld1VzZXIsIHVzZXJJbmRleDogbmV3VXNlciwgaGFuZGxlQ2xpY2ssIHNldEZvY3VzZWRVc2VyIH19XG5cdFx0XHRcdFx0XHRpc0ZvY3VzZWQ9e3F1ZXJ5Lmxlbmd0aH1cblx0XHRcdFx0XHRcdGlzTG9hZGluZz17dXNlck11dGF0aW9uTG9hZGluZ31cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L21vdGlvbi5saT5cblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHR7cXVlcnkgIT09ICcnICYmIChcblx0XHRcdFx0PG1vdGlvbi51bCB7Li4uRkFERV9JTn0gY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19saXN0IGxpc3RcIj5cblx0XHRcdFx0XHR7cmVzdWx0cygpfVxuXHRcdFx0XHQ8L21vdGlvbi51bD5cblx0XHRcdCl9XG5cdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaWx0ZXJVc2VycyhnbG9iYWxVc2VycywgdXNlcnMsIHF1ZXJ5KSB7XG5cdGNvbnN0IGxvd2VyUXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpO1xuXHRjb25zdCBleGlzdGluZ1VzZXJzQnlFbWFpbCA9IHVzZXJzLm1hcCgoeyBlbWFpbCB9KSA9PiBlbWFpbCk7XG5cblx0bGV0IGZpbHRlcmVkVXNlcnMgPSBnbG9iYWxVc2Vyc1xuXHRcdC5maWx0ZXIoKHsgZW1haWwgfSkgPT4ge1xuXHRcdFx0LyogT25seSByZXR1cm4gdXNlcnMgdGhhdCBhcmUgbm90IHBhcnQgb2YgdGhlIHByb2plY3QgKi9cblx0XHRcdHJldHVybiAhZXhpc3RpbmdVc2Vyc0J5RW1haWwuaW5jbHVkZXMoZW1haWwpO1xuXHRcdH0pXG5cdFx0LmZpbHRlcigoeyBlbWFpbCwgZGlzcGxheSB9KSA9PiB7XG5cdFx0XHQvKiBPbmx5IHJldHVybiB1c2VycyB0aGF0IG1hdGNoIHRoZSBxdWVyeSBvbiBlbWFpbCB8fCBkaXNwbGF5ICovXG5cdFx0XHRyZXR1cm4gZW1haWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclF1ZXJ5KSB8fCBkaXNwbGF5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJRdWVyeSk7XG5cdFx0fSk7XG5cblx0cmV0dXJuIGZpbHRlcmVkVXNlcnM7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBMb2FkaW5nV3JhcHBlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBzdGFySWNvbiBmcm9tICdpY29ucy9zdGFyLnN2Zyc7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICdpY29ucy9kZWxldGUuc3ZnJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBkZWxldGVVc2VyIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcih7IHVzZXIsIHByb2plY3QsIHZhcmlhbnQgPSAnZGVmYXVsdCcsIHNpemUgPSAnbWQnLCBpbnZhbGlkYXRlUXVlcmllcyB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IGlkOiBwcm9qZWN0SWQsIGF1dGhvciB9ID0gcHJvamVjdCA/PyB7fTtcblx0Y29uc3QgeyBpZDogdXNlcklkLCBlbWFpbCB9ID0gdXNlciA/PyB7fTtcblx0Y29uc3QgaXNBdXRob3IgPSBlbWFpbCA9PT0gYXV0aG9yO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBkZWxldGVVc2VyTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVVc2VyLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiBpbnZhbGlkYXRlUXVlcmllcygpLFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17YHVzZXIgdXNlci0tJHtzaXplfSB1c2VyLS0ke3ZhcmlhbnR9ICR7aXNBdXRob3IgJiYgJ3VzZXItLWF1dGhvcid9YH0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PFVzZXJBdmF0YXIgaXNMb2FkaW5nPXtkZWxldGVVc2VyTXV0YXRpb24uaXNMb2FkaW5nfSB7Li4udXNlcn0+XG5cdFx0XHRcdFx0e3ZhcmlhbnQgPT09ICdpbnRlcmFjdGl2ZScgJiYgIWlzQXV0aG9yICYmIChcblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidXNlcl9fYWN0aW9uIGJ0biBidG4tbGluayBwLTBcIlxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGVsZXRlVXNlck11dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgdXNlcklkIH0pfT5cblx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19hY3Rpb24taWNvbiBpY29uIGljb24tLTE0XCIgc3JjPXtkZWxldGVJY29ufSAvPlxuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9Vc2VyQXZhdGFyPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHR7aXNBdXRob3IgJiYgKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXJfX3N0YXR1cyB1c2VyX19zdGF0dXMtLWxlYWRlclwiPlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9fc3RhdHVzLWljb24gaWNvbiB0ZXh0LXRlcnRpYXJ5IG10LTBcIiBzcmM9e3N0YXJJY29ufSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdCl9XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbmV4cG9ydCBjb25zdCBVc2VyQXZhdGFyID0gKHsgZGlzcGxheSwgdXNlckNvbG9yLCBpc0xvYWRpbmcsIGNoaWxkcmVuIH0pID0+IHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHVzZXJJbml0aWFscyA9IGRpc3BsYXkuc3BsaXQoJyAnKS5tYXAoKHdvcmQpID0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19hdmF0YXJcIiBzdHlsZT17eyAnLS10aGVtZSc6IHVzZXJDb2xvciB9fT5cblx0XHRcdDxMb2FkaW5nV3JhcHBlciBsb2FkaW5nPXtpc0xvYWRpbmd9IGxvYWRlclNpemU9ezE2fT5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidXNlcl9faW5pdGlhbHNcIj57dXNlckluaXRpYWxzfTwvc3Bhbj5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9Mb2FkaW5nV3JhcHBlcj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBVc2VySW5mbyA9ICh7IHRpdGxlLCBzdWJ0aXRsZSwgbGF5b3V0ID0gJ3ZlcnRpY2FsJywgc2l6ZSA9ICdsZycgfSkgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT17YHVzZXJfX2luZm8gdXNlcl9faW5mby0tJHtsYXlvdXR9IHVzZXJfX2luZm8tLSR7c2l6ZX0gbWwtMmB9PlxuXHRcdDxwIGNsYXNzTmFtZT1cInVzZXJfX2luZm8tdGl0bGUgbWItMFwiPnt0aXRsZX08L3A+XG5cdFx0e3N1YnRpdGxlICYmIDxwIGNsYXNzTmFtZT1cInVzZXJfX2luZm8tc3VidGl0bGUgbWItMFwiPntzdWJ0aXRsZX08L3A+fVxuXHQ8L2Rpdj5cbik7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgeyBVc2VyQXZhdGFyLCBVc2VySW5mbyB9IGZyb20gJy4vVXNlcic7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZFVzZXJJY29uIGZyb20gJ2ljb25zL2FkZF91c2VyLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJTZWxlY3QoeyB1c2VyLCB1c2VySW5kZXgsIGhhbmRsZUNsaWNrLCBpc0ZvY3VzZWQsIHNldEZvY3VzZWRVc2VyLCBpc0xvYWRpbmcgfSkge1xuXHQvKiBFZmZlY3RzICovXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aXNGb2N1c2VkICYmIHNldEZvY3VzZWRVc2VyKHVzZXJJbmRleCk7XG5cdH0sIFtpc0ZvY3VzZWRdKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHJldHVybiAoKSA9PiBzZXRGb2N1c2VkVXNlcigwKTtcblx0fSwgW10pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBoYW5kbGVTdGF0dXMgPSAoYWN0aW9uKSA9PiB7XG5cdFx0c2V0Rm9jdXNlZFVzZXIoYWN0aW9uID09PSAnZW50ZXInID8gdXNlckluZGV4IDogMCk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0Y2xhc3NOYW1lPXtgdXNlciB1c2VyLS1zZWxlY3QgJHtpc0ZvY3VzZWQgJiYgJ2lzLWZvY3VzZWQnfSB1c2VyLS14bGB9XG5cdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayh1c2VyKX1cblx0XHRcdG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlU3RhdHVzKCdlbnRlcicpfVxuXHRcdFx0b25Nb3VzZUxlYXZlPXsoKSA9PiBoYW5kbGVTdGF0dXMoJ2xlYXZlJyl9XG5cdFx0XHR0eXBlPVwiYnV0dG9uXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PFVzZXJBdmF0YXIgaXNMb2FkaW5nPXtpc0xvYWRpbmcgJiYgaXNGb2N1c2VkfSB7Li4udXNlcn0gLz5cblx0XHRcdFx0PFVzZXJJbmZvXG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdHRpdGxlOiB1c2VyLmRpc3BsYXksXG5cdFx0XHRcdFx0XHRzdWJ0aXRsZTogdXNlci5vcmdhbmlzYXRpb24gPyB1c2VyLm9yZ2FuaXNhdGlvbiA6ICdObyBvcmdhbmlzYXRpb24nLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlcl9fYWRkIHRleHQtc2Vjb25kYXJ5IHJvdW5kZWQtY2lyY2xlIG1sLWF1dG9cIj5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cInVzZXJfX2FkZC1pY29uIGljb24gaWNvbi0tMTIgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e2FkZFVzZXJJY29ufSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvYnV0dG9uPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNDQUxFX0ZBREUgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcnMoeyB1c2VycywgbGF5b3V0ID0gJ2Z1bGwnLCB1c2VMYXlvdXQgPSB0cnVlLCAuLi5yZXN0IH0pIHtcblx0Y29uc3Qgc2xpY2VBbW91bnQgPSBsYXlvdXQgPT09ICdtaW5pbWFsJyA/IDcgOiBJbmZpbml0eTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgZ3V0dGVycy0xXCI+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7dXNlcnMuc2xpY2UoMCwgc2xpY2VBbW91bnQpLm1hcCgodXNlcikgPT4ge1xuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8bW90aW9uLmRpdiBsYXlvdXQ9e3VzZUxheW91dH0gey4uLlNDQUxFX0ZBREV9IGNsYXNzTmFtZT1cImNvbC1hdXRvXCIga2V5PXt1c2VyLmlkfT5cblx0XHRcdFx0XHRcdFx0PFVzZXIgey4uLnsgdXNlciwgLi4ucmVzdCB9fSAvPlxuXHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0XHR7bGF5b3V0ID09PSAnbWluaW1hbCcgJiYgdXNlcnMubGVuZ3RoID4gNyAmJiAoXG5cdFx0XHRcdFx0PG1vdGlvbi5kaXYgbGF5b3V0IHsuLi5TQ0FMRV9GQURFfSBjbGFzc05hbWU9XCJjb2wtYXV0b1wiIGtleT1cIm1vcmVcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtLXNtIHRleHQtbXV0ZWQtLTcwIG1sLTFcIj4rIHt1c2Vycy5sZW5ndGggLSBzbGljZUFtb3VudH08L3A+XG5cdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFN0YXRpY0NvbnRleHQgfSBmcm9tICcuL21haW5Db250ZXh0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUmV2aWV3Q29udGV4dCB9IGZyb20gJy4vcmV2aWV3Q29udGV4dCc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTdGF0aWNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuZXhwb3J0IGRlZmF1bHQgU3RhdGljQ29udGV4dDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFJldmlld0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5leHBvcnQgZGVmYXVsdCBSZXZpZXdDb250ZXh0O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXJBZGQsIFVzZXJzLCBFZGl0YWJsZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgc3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBlZGl0UHJvamVjdCwgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWxIZWFkZXIoeyB0aXRsZSwgZGVzY3JpcHRpb24sIHVzZXJzLCBpZCwgYXV0aG9yLCBlbWFpbCB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCBwcm9qZWN0ID0geyBpZCwgYXV0aG9yLCBlbWFpbCB9O1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoc3RhdGljQ29udGV4dCk7XG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgbXV0YXRpb25PblN1Y2Nlc3MgPSAoKSA9PiB7XG5cdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgaWRdKTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi02XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctNlwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7dXNlclJvbGUgPT09ICdhZG1pbicgJiYgJ2VkaXRhYmxlJ30gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yYH0+XG5cdFx0XHRcdFx0PEVkaXRhYmxlXG5cdFx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ0VkaXRpbmcgdGl0bGUnLFxuXHRcdFx0XHRcdFx0XHRmaWVsZHM6IFt7IG5hbWU6ICd0aXRsZScsIGRlZmF1bHRWYWx1ZTogdGl0bGUgfV0sXG5cdFx0XHRcdFx0XHRcdG11dGF0aW9uOiBlZGl0UHJvamVjdCxcblx0XHRcdFx0XHRcdFx0bXV0YXRpb25JZDogaWQsXG5cdFx0XHRcdFx0XHRcdG11dGF0aW9uT25TdWNjZXNzOiBtdXRhdGlvbk9uU3VjY2Vzcyxcblx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImg1IG1iLTAgdGV4dC13aGl0ZVwiPnt0aXRsZSA/IHRpdGxlIDogJ0FkZCBhIG5pY2UgdGl0bGUnfTwvaDE+XG5cdFx0XHRcdFx0PC9FZGl0YWJsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiAnZWRpdGFibGUnfSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJgfT5cblx0XHRcdFx0XHQ8RWRpdGFibGVcblx0XHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnRWRpdGluZyBkZXNjcmlwdGlvbicsXG5cdFx0XHRcdFx0XHRcdGZpZWxkczogW3sgbmFtZTogJ2Rlc2NyaXB0aW9uJywgZGVmYXVsdFZhbHVlOiBkZXNjcmlwdGlvbiB9XSxcblx0XHRcdFx0XHRcdFx0bXV0YXRpb246IGVkaXRQcm9qZWN0LFxuXHRcdFx0XHRcdFx0XHRtdXRhdGlvbklkOiBpZCxcblx0XHRcdFx0XHRcdFx0bXV0YXRpb25PblN1Y2Nlc3M6IG11dGF0aW9uT25TdWNjZXNzLFxuXHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS03MCBtYi0wXCI+XG5cdFx0XHRcdFx0XHRcdHtkZXNjcmlwdGlvbiA/IChcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57ZGVzY3JpcHRpb259PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTQwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHR7XCJXaGF0J3MgdGhpcyBwcm9qZWN0IGFib3V0PyBTZXQgdGhlIGNvbnRleHQsIHRoZSBnb2FscywgdGhlIGNvbnN0cmFpbnRzXCJ9XG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvRWRpdGFibGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIGQtZmxleCBhbGlnbi1pdGVtcy1iYXNlbGluZSBtbC1hdXRvXCI+XG5cdFx0XHRcdDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdCB9fSBzaXplPVwibGdcIiAvPlxuXHRcdFx0XHR7dXNlclJvbGUgPT09ICdhZG1pbicgJiYgPFVzZXJBZGQgey4uLnsgdXNlcnMsIHByb2plY3QgfX0gLz59XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgRWRpdGFibGUsIEltYWdlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNoZWNrSWNvbiBmcm9tICdpY29ucy9jaGVjay5zdmcnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZWRpdFByb2plY3RJbWFnZSwgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWxJbWFnZSh7IHByb2plY3RJbWFnZSwgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyBpZDogcHJvamVjdEltYWdlSWQsIHRpdGxlLCBwaGFzZSA9IHt9IH0gPSBwcm9qZWN0SW1hZ2U7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBtdXRhdGlvbk9uU3VjY2VzcyA9ICgpID0+IHtcblx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8YXJ0aWNsZSBjbGFzc05hbWU9e2BjYXJkIGNhcmQtLWxpbmsgY2FyZC0tcHJvZHVjdCAke3NlbGVjdGVkLmluY2x1ZGVzKHByb2plY3RJbWFnZUlkKSAmJiAnaXMtc2VsZWN0ZWQnfWB9PlxuXHRcdFx0PExpbmsgdG89e2AvcHJvamVjdHMvJHtwcm9qZWN0SWR9L3Jldmlldy8ke3Byb2plY3RJbWFnZUlkfWB9IHRpdGxlPXt0aXRsZX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9faW1hZ2UgYm9yZGVyIG0tMlwiPlxuXHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJcblx0XHRcdFx0XHRcdHNyYz17cGhhc2UuaW1hZ2UudGh1bWJuYWlsfVxuXHRcdFx0XHRcdFx0c3JjU2V0PXtgJHtwaGFzZS5pbWFnZS50aHVtYm5haWxSZXRpbmF9IDJ4YH1cblx0XHRcdFx0XHRcdGFsdD17dGl0bGV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0xpbms+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuXHRcdFx0XHQ8RWRpdGFibGVcblx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0dGl0bGU6ICdFZGl0aW5nIGltYWdlIHRpdGxlJyxcblx0XHRcdFx0XHRcdGZpZWxkczogW3sgbmFtZTogJ3RpdGxlJywgZGVmYXVsdFZhbHVlOiB0aXRsZSB9XSxcblx0XHRcdFx0XHRcdG11dGF0aW9uOiBlZGl0UHJvamVjdEltYWdlLFxuXHRcdFx0XHRcdFx0bXV0YXRpb25JZDogcHJvamVjdEltYWdlSWQsXG5cdFx0XHRcdFx0XHRtdXRhdGlvbk9uU3VjY2VzczogbXV0YXRpb25PblN1Y2Nlc3MsXG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0PG1vdGlvbi5wIHsuLi5GQURFX0lOfSBjbGFzc05hbWU9XCJtYi0wXCI+XG5cdFx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdFx0PC9tb3Rpb24ucD5cblx0XHRcdFx0PC9FZGl0YWJsZT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX19zZWxlY3RcIj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC10b2dnbGVcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHVwZGF0ZVNlbGVjdGVkKHByb2plY3RJbWFnZUlkKTtcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC1pY29uIGljb24gaWNvbi0tOFwiIHNyYz17Y2hlY2tJY29ufSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvYXJ0aWNsZT5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IERyb3B6b25lLCBBY3Rpb25NZW51IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IFByb2plY3REZXRhaWxJbWFnZSBmcm9tICcuL1Byb2plY3REZXRhaWxJbWFnZSc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU1RBR0dFUl9VUCB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0SW1hZ2VzLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZVNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdERldGFpbEltYWdlcyh7IHByb2plY3RJbWFnZXMsIHByb2plY3RJZCB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkLCByZXNldFNlbGVjdGVkIH0gPSB1c2VTZWxlY3Rpb24oKTtcblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXHRjb25zdCB7IHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVQcm9qZWN0SW1hZ2VzLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKTtcblx0XHRcdHJlc2V0U2VsZWN0ZWQoKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgYWN0aW9ucyA9IFtcblx0XHR7XG5cdFx0XHR0aXRsZTogJ1JlbW92ZScsXG5cdFx0XHR0aGVtZTogJ2RhbmdlcicsXG5cdFx0XHRoYXNQZXJtaXNzaW9uOiBbJ2FkbWluJ10sXG5cdFx0XHRpY29uOiBkZWxldGVJY29uLFxuXHRcdFx0aWNvblNpemU6IDEwLFxuXHRcdFx0bXV0YXRpb246ICgpID0+IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZUlkczogc2VsZWN0ZWQgfSksXG5cdFx0XHRpc0xvYWRpbmc6IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbi5pc0xvYWRpbmcsXG5cdFx0fSxcblx0XTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAnaGFzLXNlbGVjdGlvbnMnfWB9PlxuXHRcdFx0XHR7dXNlclJvbGUgPT09ICdhZG1pbicgPyAoXG5cdFx0XHRcdFx0PERyb3B6b25lIHsuLi57IHByb2plY3RJZCwgcHJvamVjdEltYWdlcywgcG9zaXRpdGlvbjogJ3JpZ2h0JyB9fT5cblx0XHRcdFx0XHRcdHsoKSA9PiA8SW1hZ2VzIHsuLi57IHByb2plY3RJbWFnZXMsIHByb2plY3RJZCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH19IC8+fVxuXHRcdFx0XHRcdDwvRHJvcHpvbmU+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy01XCI+XG5cdFx0XHRcdFx0XHQ8SW1hZ2VzIHsuLi57IHByb2plY3RJbWFnZXMsIHByb2plY3RJZCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH19IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHtzZWxlY3RlZC5sZW5ndGggPiAwICYmIHVzZXJSb2xlID09PSAnYWRtaW4nICYmIChcblx0XHRcdFx0XHQ8QWN0aW9uTWVudSB7Li4ueyBzZWxlY3RlZCwgcmVzZXRTZWxlY3RlZCwgYWN0aW9ucyB9fSAvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmNvbnN0IEltYWdlcyA9ICh7IHByb2plY3RJbWFnZXMsIHByb2plY3RJZCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0e3Byb2plY3RJbWFnZXMubWFwKChwcm9qZWN0SW1hZ2UsIHByb2plY3RJbWFnZUluZGV4KSA9PiAoXG5cdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0ey4uLlNUQUdHRVJfVVAocHJvamVjdEltYWdlSW5kZXgpfVxuXHRcdFx0XHRcdGtleT17cHJvamVjdEltYWdlLmlkfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtMyBjb2wteHhsLTJcIlxuXHRcdFx0XHRcdGxheW91dD5cblx0XHRcdFx0XHQ8UHJvamVjdERldGFpbEltYWdlIHsuLi57IHByb2plY3RJbWFnZSwgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfX0gLz5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0KSl9XG5cdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG59O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0RGV0YWlsSGVhZGVyIH0gZnJvbSAnLi9Qcm9qZWN0RGV0YWlsSGVhZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdERldGFpbEltYWdlcyB9IGZyb20gJy4vUHJvamVjdERldGFpbEltYWdlcyc7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlcnMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgeyBQcm9qZWN0SW1hZ2UgfSBmcm9tICcuLyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNoZWNrSWNvbiBmcm9tICdpY29ucy9jaGVjay5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KHsgcHJvamVjdCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgdGl0bGUsIHByb2plY3RJbWFnZXMsIHVzZXJzLCBhdXRob3IsIGlkIH0gPSBwcm9qZWN0O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxMaW5rXG5cdFx0XHR0bz17YHByb2plY3RzLyR7aWR9YH1cblx0XHRcdHRpdGxlPXt0aXRsZX1cblx0XHRcdGNsYXNzTmFtZT17YGNhcmQgY2FyZC0tbGluayBjYXJkLS1wcm9kdWN0ICR7c2VsZWN0ZWQuaW5jbHVkZXMoaWQpICYmICdpcy1zZWxlY3RlZCd9YH0+XG5cdFx0XHQ8UHJvamVjdEltYWdlIHsuLi57IHByb2plY3RJbWFnZXMgfX0gLz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItMlwiPnt0aXRsZSA/IHRpdGxlIDogJ0FkZCBhIG5pY2UgdGl0bGUnfTwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdDogeyBhdXRob3IgfSwgbGF5b3V0OiAnbWluaW1hbCcsIHVzZUxheW91dDogZmFsc2UgfX0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fc2VsZWN0XCI+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXJkX19zZWxlY3QtdG9nZ2xlXCJcblx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHR1cGRhdGVTZWxlY3RlZChpZCk7XG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJjYXJkX19zZWxlY3QtaWNvbiBpY29uIGljb24tLThcIiBzcmM9e2NoZWNrSWNvbn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0xpbms+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5LCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogRG9tYWluICovXG5pbXBvcnQgeyBQcm9qZWN0U2xpZGVJbiB9IGZyb20gJy4vJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU0NBTEVfRkFERSB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRQcm9qZWN0SWNvbiBmcm9tICdpY29ucy9hZGRfcHJvamVjdC5zdmcnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGFkZFByb2plY3QsIFFVRVJZX0tFWVMsIGVkaXRQcm9qZWN0LCBmZXRjaFByb2plY3RCeUlkIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdEFkZCh7IHNldE5ld1Byb2plY3RJZCB9KSB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtwcm9qZWN0SWQsIHNldFByb2plY3RJZF0gPSB1c2VTdGF0ZShudWxsKTtcblx0Y29uc3QgW3NsaWRlSW5PcGVuLCBzZXRTbGlkZUluT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBkYXRhOiBwcm9qZWN0IH0gPSB1c2VRdWVyeShbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdLCAoKSA9PiBmZXRjaFByb2plY3RCeUlkKHsgcHJvamVjdElkIH0pLCB7XG5cdFx0ZW5hYmxlZDogISFwcm9qZWN0SWQsXG5cdH0pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0TmV3UHJvamVjdElkKHByb2plY3RJZCk7XG5cdH0sIFtwcm9qZWN0SWRdKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgYWRkTXV0YXRpb24gPSB1c2VNdXRhdGlvbihhZGRQcm9qZWN0LCB7XG5cdFx0b25TdWNjZXNzOiAoeyBpZCB9KSA9PiBzZXRQcm9qZWN0SWQoaWQpLFxuXHR9KTtcblxuXHRjb25zdCBlZGl0TXV0YXRpb24gPSB1c2VNdXRhdGlvbihlZGl0UHJvamVjdCwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4gaW52YWxpZGF0ZVByb2plY3QoKSxcblx0fSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZVNsaWRlSW4gPSAoKSA9PiB7XG5cdFx0c2V0U2xpZGVJbk9wZW4oIXNsaWRlSW5PcGVuKTtcblxuXHRcdC8qIE11dGF0ZSBvbiBtb2RhbCBvcGVuICovXG5cdFx0aWYgKCFzbGlkZUluT3BlbikgYWRkTXV0YXRpb24ubXV0YXRlKCk7XG5cblx0XHQvKiBSZXNldCBpZCBvbiBjbG9zZSBtb2RhbCAqL1xuXHRcdGlmIChzbGlkZUluT3Blbikge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNldFByb2plY3RJZChudWxsKTtcblx0XHRcdH0sIDI1MCk7XG5cblx0XHRcdGludmFsaWRhdGVQcm9qZWN0KCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHVwZGF0ZVByb2plY3QgPSAoZm9ybVJlZikgPT4gZWRpdE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYsIGlkOiBwcm9qZWN0SWQgfSk7XG5cdGNvbnN0IGludmFsaWRhdGVQcm9qZWN0ID0gKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8bW90aW9uLmJ1dHRvblxuXHRcdFx0XHR7Li4uU0NBTEVfRkFERX1cblx0XHRcdFx0a2V5PVwiYWRkLXByb2plY3RcIlxuXHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0taW50ZXJhY3RpdmUgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnkgYnRuIGJ0bi1saW5rIGJ0bi0tYWRkIGJ0bi0tYWRkLXJpZ2h0XCJcblx0XHRcdFx0c3R5bGU9e3sgJy0tc2l6ZSc6IDc1IH19XG5cdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZVNsaWRlSW59PlxuXHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMzAgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e2FkZFByb2plY3RJY29ufSAvPlxuXHRcdFx0PC9tb3Rpb24uYnV0dG9uPlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e3NsaWRlSW5PcGVuICYmIDxQcm9qZWN0U2xpZGVJbiB7Li4ueyBwcm9qZWN0LCB1cGRhdGVQcm9qZWN0LCB0b2dnbGVTbGlkZUluIH19IC8+fVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkSW1hZ2VJY29uIGZyb20gJ2ljb25zL2FkZF9pbWFnZS5zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0SW1hZ2UoeyBwcm9qZWN0SW1hZ2VzIH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgcGhhc2UgPSB7fSwgdGl0bGUgfSA9IHByb2plY3RJbWFnZXNbMF0gfHwge307XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX19pbWFnZSBib3JkZXIgbS0yXCI+XG5cdFx0XHR7cGhhc2UuaW1hZ2UgJiYgKFxuXHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIlxuXHRcdFx0XHRcdHNyYz17cGhhc2UuaW1hZ2UudGh1bWJuYWlsfVxuXHRcdFx0XHRcdHNyY1NldD17YCR7cGhhc2UuaW1hZ2UudGh1bWJuYWlsUmV0aW5hfSAyeGB9XG5cdFx0XHRcdFx0YWx0PXt0aXRsZX1cblx0XHRcdFx0Lz5cblx0XHRcdCl9XG5cdFx0XHR7IXBoYXNlLmltYWdlICYmIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS00OCB0ZXh0LW11dGVkLS00MFwiIHNyYz17YWRkSW1hZ2VJY29ufSAvPn1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEFjdGlvbk1lbnUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi8nO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOLCBTVEFHR0VSX1VQIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuaW1wb3J0IGxlYXZlSWNvbiBmcm9tICdpY29ucy9sZWF2ZS5zdmcnO1xuaW1wb3J0IGFyY2hpdmVJY29uIGZyb20gJ2ljb25zL2FyY2hpdmUuc3ZnJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZVNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0cywgbGVhdmVQcm9qZWN0cywgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmVzdWx0cyh7IHByb2plY3RzLCBuZXdQcm9qZWN0SWQgfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IHNlbGVjdGVkLCB1cGRhdGVTZWxlY3RlZCwgcmVzZXRTZWxlY3RlZCB9ID0gdXNlU2VsZWN0aW9uKCk7XG5cdGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgbGVhdmVQcm9qZWN0c011dGF0aW9uID0gdXNlTXV0YXRpb24obGVhdmVQcm9qZWN0cywge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIpO1xuXHRcdFx0cmVzZXRTZWxlY3RlZCgpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdGNvbnN0IGRlbGV0ZVByb2plY3RzTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVQcm9qZWN0cywge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIpO1xuXHRcdFx0cmVzZXRTZWxlY3RlZCgpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdGNvbnN0IGFjdGlvbnMgPSBbXG5cdFx0e1xuXHRcdFx0dGl0bGU6ICdMZWF2ZScsXG5cdFx0XHR0aGVtZTogJ3dhcm5pbmcnLFxuXHRcdFx0aGFzUGVybWlzc2lvbjogWyd1c2VyJywgJ2Jhc2ljJ10sXG5cdFx0XHRpY29uOiBsZWF2ZUljb24sXG5cdFx0XHRtdXRhdGlvbjogKCkgPT4gbGVhdmVQcm9qZWN0c011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZHM6IHNlbGVjdGVkLCB1c2VySWQ6IGN1cnJlbnRVc2VyLmlkIH0pLFxuXHRcdFx0aXNMb2FkaW5nOiBsZWF2ZVByb2plY3RzTXV0YXRpb24uaXNMb2FkaW5nLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGl0bGU6ICdBcmNoaXZlJyxcblx0XHRcdHRoZW1lOiAnc2Vjb25kYXJ5Jyxcblx0XHRcdGhhc1Blcm1pc3Npb246IFsnYWRtaW4nXSxcblx0XHRcdGljb246IGFyY2hpdmVJY29uLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGl0bGU6ICdSZW1vdmUnLFxuXHRcdFx0dGhlbWU6ICdkYW5nZXInLFxuXHRcdFx0aGFzUGVybWlzc2lvbjogWydhZG1pbiddLFxuXHRcdFx0aWNvbjogY2xvc2VJY29uLFxuXHRcdFx0aWNvblNpemU6IDEwLFxuXHRcdFx0bXV0YXRpb246ICgpID0+IGRlbGV0ZVByb2plY3RzTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkczogc2VsZWN0ZWQgfSksXG5cdFx0XHRpc0xvYWRpbmc6IGRlbGV0ZVByb2plY3RzTXV0YXRpb24uaXNMb2FkaW5nLFxuXHRcdH0sXG5cdF07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxoMSBjbGFzc05hbWU9XCJoNSB0ZXh0LXdoaXRlIG1iLTZcIj5Zb3VyIHByb2plY3RzPC9oMT5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHtwcm9qZWN0cy5sZW5ndGggPT09IDAgJiYgKFxuXHRcdFx0XHRcdDxtb3Rpb24ucCB7Li4uRkFERV9JTn0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi0wIHBvc2l0aW9uLWFic29sdXRlXCI+XG5cdFx0XHRcdFx0XHR7YFlvdSBkb24ndCBoYXZlIGFueSBwcm9qZWN0cyB5ZXRgfVxuXHRcdFx0XHRcdDwvbW90aW9uLnA+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgcm93IHJvdy0tZXF1YWxpemVkIGd1dHRlcnMtNSAke3NlbGVjdGVkLmxlbmd0aCA+IDAgJiYgJ2hhcy1zZWxlY3Rpb25zJ31gfT5cblx0XHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0XHR7cHJvamVjdHNcblx0XHRcdFx0XHRcdC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IG5ld1Byb2plY3RJZClcblx0XHRcdFx0XHRcdC5tYXAoKHByb2plY3QsIHByb2plY3RJbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdFx0XHRcdHsuLi5TVEFHR0VSX1VQKHByb2plY3RJbmRleCl9XG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtwcm9qZWN0LmlkfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtMyBjb2wteHhsLTJcIlxuXHRcdFx0XHRcdFx0XHRcdGxheW91dD5cblx0XHRcdFx0XHRcdFx0XHQ8UHJvamVjdCB7Li4ueyBwcm9qZWN0LCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfX0gLz5cblx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7c2VsZWN0ZWQubGVuZ3RoID4gMCAmJiA8QWN0aW9uTWVudSB7Li4ueyBzZWxlY3RlZCwgcmVzZXRTZWxlY3RlZCwgYWN0aW9ucyB9fSAvPn1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0YXJlYUF1dG9zaXplJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBEcm9wem9uZSwgTG9hZGluZ1dyYXBwZXIsIFNsaWRlSW4sIFVzZXJzLCBVc2VyQWRkLCBJbWFnZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTVEFHR0VSX1VQIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RTbGlkZUluKHsgcHJvamVjdCA9IHt9LCB1cGRhdGVQcm9qZWN0LCB0b2dnbGVTbGlkZUluIH0pIHtcblx0LyogQ29uc3RhbnRzICAqL1xuXHRjb25zdCB7IGlkOiBwcm9qZWN0SWQgPSBudWxsLCB0aXRsZSA9ICcnLCBwcm9qZWN0SW1hZ2VzID0gW10sIHVzZXJzID0gW10gfSA9IHByb2plY3Q7XG5cblx0LyogUmVmcyAqL1xuXHRjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PFNsaWRlSW4gey4uLnsgdG9nZ2xlU2xpZGVJbiB9fSBkb21FbGVtZW50PXtkb2N1bWVudC5ib2R5fT5cblx0XHRcdDxmb3JtXG5cdFx0XHRcdHJlZj17Zm9ybVJlZn1cblx0XHRcdFx0bWV0aG9kPVwiUE9TVFwiXG5cdFx0XHRcdGNsYXNzTmFtZT1cInNsaWRlLWluX19mb3JtXCJcblx0XHRcdFx0b25TdWJtaXQ9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dG9nZ2xlU2xpZGVJbigpO1xuXHRcdFx0XHR9fT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbl9faGVhZGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHQtNiBwdC1tZC0xMiBwYi0zXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicHJvamVjdFRpdGxlXCI+XG5cdFx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtLWNsZWFyIHRleHQtLXhsXCJcblx0XHRcdFx0XHRcdGlkPVwicHJvamVjdFRpdGxlXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJ0aXRsZVwiXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlRoZSBwcm9qZWN0IG5hbWVcIlxuXHRcdFx0XHRcdFx0b25CbHVyPXsoKSA9PiB1cGRhdGVQcm9qZWN0KGZvcm1SZWYpfVxuXHRcdFx0XHRcdFx0YXV0b0ZvY3VzXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInNsaWRlLWluX19jbG9zZSBidG4gYnRuLWxpbmsgbWwtYXV0b1wiXG5cdFx0XHRcdFx0XHRkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17dG9nZ2xlU2xpZGVJbn1cblx0XHRcdFx0XHRcdHRhYkluZGV4PVwiLTFcIj5cblx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbl9fYm9keSBwdC0zIHBiLTEyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0yXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInByb2plY3REZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRcdHtgV2hhdCdzIHRoaXMgcHJvamVjdCBhYm91dD9gfVxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8VGV4dGFyZWFBdXRvc2l6ZVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtLXRleHQgZm9ybS1jb250cm9sLS1jbGVhciBtYi0xMFwiXG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJwcm9qZWN0RGVzY3JpcHRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJXaGF0J3MgdGhpcyBwcm9qZWN0IGFib3V0P1wiXG5cdFx0XHRcdFx0XHRcdFx0b25CbHVyPXsoKSA9PiB1cGRhdGVQcm9qZWN0KGZvcm1SZWYpfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIGQtZmxleCBhbGlnbi1pdGVtcy1iYXNlbGluZSBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0XHRcdDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdCB9fSBzaXplPVwibGdcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8VXNlckFkZCB7Li4ueyB1c2VycywgcHJvamVjdCB9fSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PERyb3B6b25lIHsuLi57IHByb2plY3RJZCwgcHJvamVjdEltYWdlcyB9fT5cblx0XHRcdFx0XHRcdHsoeyB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc0xvYWRpbmcgfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHRcdFx0XHRcdHtwcm9qZWN0SW1hZ2VzLm1hcCgocHJvamVjdEltYWdlLCBwcm9qZWN0SW1hZ2VJbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0PERyb3B6b25lSW1hZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtwcm9qZWN0SW1hZ2UuaWR9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi57IHByb2plY3RJbWFnZSwgcHJvamVjdEltYWdlSW5kZXgsIHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzTG9hZGluZyB9fVxuXHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvRHJvcHpvbmU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInNsaWRlLWluX19mb290ZXIgcGItNiBwYi1tZC0xMlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtMCB3LTEwMFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTEgbWwtYXV0b1wiPlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwic2xpZGUtaW5fX2J0biBidG4gYnRuLWJsb2NrIGJ0bi1zZWNvbmRhcnkgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG1vdGlvbi5zcGFuIGNsYXNzTmFtZT1cImJ0bi10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5TYXZlPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvbW90aW9uLnNwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvU2xpZGVJbj5cblx0KTtcbn1cblxuY29uc3QgRHJvcHpvbmVJbWFnZSA9ICh7IHByb2plY3RJbWFnZSwgcHJvamVjdEltYWdlSW5kZXgsIHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzTG9hZGluZyB9KSA9PiB7XG5cdGNvbnN0IHsgdGl0bGUsIGlkLCBwaGFzZSA9IHt9IH0gPSBwcm9qZWN0SW1hZ2U7XG5cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0bGF5b3V0XG5cdFx0XHR7Li4uU1RBR0dFUl9VUChwcm9qZWN0SW1hZ2VJbmRleCl9XG5cdFx0XHRjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXhsLTMgY29sLXh4bC0yXCJcblx0XHRcdGtleT17aWR9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZV9fY29udGFpbmVyXCI+XG5cdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImRyb3B6b25lX19pbWFnZSBpbWctZmx1aWRcIlxuXHRcdFx0XHRcdHNyYz17cGhhc2UuaW1hZ2UudGh1bWJuYWlsfVxuXHRcdFx0XHRcdHNyY1NldD17YCR7cGhhc2UuaW1hZ2UudGh1bWJuYWlsUmV0aW5hfSAyeGB9XG5cdFx0XHRcdFx0YWx0PXt0aXRsZX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBkcm9wem9uZV9faW1hZ2UtZGVsZXRlIHAtMFwiXG5cdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdHVwZGF0ZVByb2plY3RJbWFnZXMoJ2RlbGV0ZScsIHsgcHJvamVjdEltYWdlSWRzOiBbaWRdIH0pO1xuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImRyb3B6b25lX19pbWFnZS1kZWxldGUtaWNvbiBpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1kYW5nZXIgbXgtYXV0b1wiXG5cdFx0XHRcdFx0XHRzdHlsZT17eyAnLS1zaXplJzogNTAgfX0+XG5cdFx0XHRcdFx0XHQ8TG9hZGluZ1dyYXBwZXJcblx0XHRcdFx0XHRcdFx0bG9hZGluZz17aXNMb2FkaW5nfVxuXHRcdFx0XHRcdFx0XHRsb2FkZXJTaXplPXsyMH1cblx0XHRcdFx0XHRcdFx0Y2xhc3Nlcz17e1xuXHRcdFx0XHRcdFx0XHRcdGxvYWRlckNsYXNzZXM6ICdwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXggdGV4dC1kYW5nZXInLFxuXHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTE0IHRleHQtZGFuZ2VyIG10LTBcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cblx0XHRcdFx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdCB9IGZyb20gJy4vUHJvamVjdCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RBZGQgfSBmcm9tICcuL1Byb2plY3RBZGQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0SW1hZ2UgfSBmcm9tICcuL1Byb2plY3RJbWFnZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RTbGlkZUluIH0gZnJvbSAnLi9Qcm9qZWN0U2xpZGVJbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RSZXN1bHRzIH0gZnJvbSAnLi9Qcm9qZWN0UmVzdWx0cyc7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IHsgUHJvamVjdFJldmlld0FjdGlvbkJhciB9IGZyb20gJy4vcHJvamVjdC1yZXZpZXctYWN0aW9uLWJhcic7XG5pbXBvcnQgUHJvamVjdFJldmlld01hcmtlciBmcm9tICcuL1Byb2plY3RSZXZpZXdNYXJrZXInO1xuaW1wb3J0IFByb2plY3RSZXZpZXdDb21tZW50TW9kYWwgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3Q29tbWVudE1vZGFsJztcbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudEFkZCBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50QWRkJztcbmltcG9ydCBQcm9qZWN0UmV2aWV3UGFnaW5hdGlvbiBmcm9tICcuL1Byb2plY3RSZXZpZXdQYWdpbmF0aW9uJztcbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudFBhbmVsIGZyb20gJy4vUHJvamVjdFJldmlld0NvbW1lbnRQYW5lbCc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFNlY3VyaXR5TW9kYWwsIEltYWdlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZmV0Y2hQcm9qZWN0VXNlcnMsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgeyBTdGF0aWNDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dCc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNMSURFX0lOIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIEdsb2JhbCAqL1xuY29uc3QgY3Vyc29yT2Zmc2V0ID0gMTA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXdDYW52YXMoeyBwYXJlbnRJZCwgdGl0bGUsIHBoYXNlLCAuLi5yZXN0IH0pIHtcblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGRhdGE6IHByb2plY3RVc2VycyA9IFtdIH0gPSB1c2VRdWVyeShcblx0XHRbUVVFUllfS0VZUy5QUk9KRUNUX1VTRVJTLCBwYXJlbnRJZF0sXG5cdFx0KCkgPT4gZmV0Y2hQcm9qZWN0VXNlcnMoeyBwcm9qZWN0SWQ6IHBhcmVudElkIH0pLFxuXHRcdHtcblx0XHRcdGVuYWJsZWQ6ICEhcGFyZW50SWQsXG5cdFx0fVxuXHQpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IGltYWdlLCBpZDogcGhhc2VJZCwgY29tbWVudHMsIHBoYXNlOiBwaGFzZU51bWJlciB9ID0gcGhhc2U7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBjdXJyZW50VXNlciB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblxuXHQvKiBSZWZzICovXG5cdGNvbnN0IHJldmlld1JlZiA9IHVzZVJlZigpO1xuXG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFttYXJrZXJQb3MsIHNldE1hcmtlclBvc10gPSB1c2VTdGF0ZSgpO1xuXHRjb25zdCBbc2VjdXJpdHlNb2RhbE9wZW4sIHNldFNlY3VyaXR5TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblx0Y29uc3QgW2NvbW1lbnRzUGFuZWxPcGVuLCBzZXRDb21tZW50c1BhbmVsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtwYWdpbmF0aW9uQWN0aXZlLCBzZXRQYWdpbmF0aW9uQWN0aXZlXSA9IHVzZVN0YXRlKHRydWUpO1xuXHRjb25zdCBbY29tbWVudEZvY3VzZWQsIHNldENvbW1lbnRGb2N1c2VkXSA9IHVzZVN0YXRlKCk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZUNvbW1lbnRBZGRPcGVuID0gKCkgPT4gc2V0TWFya2VyUG9zKG51bGwpO1xuXG5cdGNvbnN0IHRvZ2dsZUNvbW1lbnRzUGFuZWwgPSAoKSA9PiB7XG5cdFx0c2V0Q29tbWVudHNQYW5lbE9wZW4oIWNvbW1lbnRzUGFuZWxPcGVuKTtcblx0XHR0b2dnbGVQYWdpbmF0aW9uQWN0aXZlKCk7XG5cdH07XG5cblx0Y29uc3QgdG9nZ2xlUGFnaW5hdGlvbkFjdGl2ZSA9ICgpID0+IHNldFBhZ2luYXRpb25BY3RpdmUoIXBhZ2luYXRpb25BY3RpdmUpO1xuXG5cdGNvbnN0IHBvc01hcmtlciA9ICh7IGNsaWVudFgsIGNsaWVudFkgfSkgPT4ge1xuXHRcdGlmICghY3VycmVudFVzZXIuYXV0aGVudGljYXRlZCkge1xuXHRcdFx0c2V0U2VjdXJpdHlNb2RhbE9wZW4odHJ1ZSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgcmV2aWV3UG9zID0gcmV2aWV3UmVmPy5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0c2V0TWFya2VyUG9zKCgpID0+IHtcblx0XHRcdGNvbnN0IHhQZXJjZW50ID0gKChjbGllbnRYIC0gY3Vyc29yT2Zmc2V0IC0gcmV2aWV3UG9zLngpIC8gcmV2aWV3UG9zLndpZHRoKSAqIDEwMDtcblx0XHRcdGNvbnN0IHlQZXJjZW50ID0gKChjbGllbnRZIC0gcmV2aWV3UG9zLnRvcCAtIGN1cnNvck9mZnNldCkgLyByZXZpZXdQb3MuaGVpZ2h0KSAqIDEwMDtcblxuXHRcdFx0cmV0dXJuIHsgeFBlcmNlbnQsIHlQZXJjZW50LCByZXZpZXdQb3MgfTtcblx0XHR9KTtcblx0fTtcblxuXHQvKiByZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJyZXZpZXcgcG9zaXRpb24tcmVsYXRpdmUgbXgtbjEyIG1iLTMgbXQtbjEwIG1pbi12aC0xMDBcIj5cblx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cInJldmlld19faW1hZ2Utd3JhcHBlciBwb3NpdGlvbi1yZWxhdGl2ZVwiXG5cdFx0XHRcdHJlZj17cmV2aWV3UmVmfVxuXHRcdFx0XHRpbml0aWFsPXt7IHdpZHRoOiAnMTAwJScgfX1cblx0XHRcdFx0YW5pbWF0ZT17e1xuXHRcdFx0XHRcdHdpZHRoOiBjb21tZW50c1BhbmVsT3BlbiA/IGBjYWxjKDEwMCUgLSA0MDBweClgIDogJzEwMCUnLFxuXHRcdFx0XHRcdHRyYW5zaXRpb246IGNvbW1lbnRzUGFuZWxPcGVuID8gU0xJREVfSU4uYW5pbWF0ZS50cmFuc2l0aW9uIDogU0xJREVfSU4uZXhpdC50cmFuc2l0aW9uLFxuXHRcdFx0XHR9fT5cblx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwicmV2aWV3X19pbWFnZSBpbWctZmx1aWQgdy0xMDBcIlxuXHRcdFx0XHRcdHNyYz17aW1hZ2Uub3JpZ2luYWx9XG5cdFx0XHRcdFx0c3JjU2V0PXtgJHtpbWFnZS5vcmlnaW5hbH0gMnhgfVxuXHRcdFx0XHRcdGFsdD17dGl0bGV9XG5cdFx0XHRcdFx0b25DbGljaz17cG9zTWFya2VyfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHR7Y29tbWVudHM/Lm1hcCgoY29tbWVudCwgY29tbWVudEluZGV4KSA9PiAoXG5cdFx0XHRcdFx0PFByb2plY3RSZXZpZXdDb21tZW50TW9kYWxcblx0XHRcdFx0XHRcdGtleT17Y29tbWVudC5pZH1cblx0XHRcdFx0XHRcdHsuLi57IGNvbW1lbnQsIGNvbW1lbnRJbmRleCwgcmV2aWV3UmVmLCBwcm9qZWN0VXNlcnMsIHRvZ2dsZUNvbW1lbnRBZGRPcGVuLCBjb21tZW50Rm9jdXNlZCB9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCkpfVxuXHRcdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHRcdHttYXJrZXJQb3MgJiYgKFxuXHRcdFx0XHRcdFx0PFByb2plY3RSZXZpZXdNYXJrZXIgey4uLnsgLi4ubWFya2VyUG9zIH19PlxuXHRcdFx0XHRcdFx0XHQ8UHJvamVjdFJldmlld0NvbW1lbnRBZGQgey4uLnsgbWFya2VyUG9zLCBwaGFzZUlkLCB0b2dnbGVDb21tZW50QWRkT3BlbiB9fSAvPlxuXHRcdFx0XHRcdFx0PC9Qcm9qZWN0UmV2aWV3TWFya2VyPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHQ8U2VjdXJpdHlNb2RhbCB7Li4ueyBzZWN1cml0eU1vZGFsT3Blbiwgc2V0U2VjdXJpdHlNb2RhbE9wZW4gfX0gLz5cblx0XHRcdFx0PEFuaW1hdGVQcmVzZW5jZT57cGFnaW5hdGlvbkFjdGl2ZSAmJiA8UHJvamVjdFJldmlld1BhZ2luYXRpb24gey4uLnJlc3R9IC8+fTwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0PFByb2plY3RSZXZpZXdBY3Rpb25CYXJcblx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHQuLi5yZXN0LFxuXHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRcdHBoYXNlTnVtYmVyLFxuXHRcdFx0XHRcdHBoYXNlSWQsXG5cdFx0XHRcdFx0Y29tbWVudHNQYW5lbE9wZW4sXG5cdFx0XHRcdFx0dG9nZ2xlQ29tbWVudHNQYW5lbCxcblx0XHRcdFx0XHRwcm9qZWN0VXNlcnMsXG5cdFx0XHRcdFx0dG9nZ2xlUGFnaW5hdGlvbkFjdGl2ZSxcblx0XHRcdFx0fX1cblx0XHRcdC8+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7Y29tbWVudHNQYW5lbE9wZW4gJiYgKFxuXHRcdFx0XHRcdDxQcm9qZWN0UmV2aWV3Q29tbWVudFBhbmVsXG5cdFx0XHRcdFx0XHR7Li4ueyBjb21tZW50cywgY29tbWVudHNQYW5lbE9wZW4sIHRvZ2dsZUNvbW1lbnRzUGFuZWwsIHByb2plY3RVc2Vycywgc2V0Q29tbWVudEZvY3VzZWQgfX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLyogQ29tcG9uZW50cyovXG5pbXBvcnQgeyBVc2VyLCBVc2VySW5mbyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3Q29tbWVudCh7XG5cdGNvbW1lbnQ6IGNvbnRlbnQsXG5cdGNvbW1lbnRJbmRleCxcblx0cHJvamVjdFVzZXJzLFxuXHRzZXRSZXBseVRvVXNlcixcblx0cmVuZGVyQXV0aG9yID0gZmFsc2UsXG5cdHNob3dJbml0aWFsUmVwbGllcyA9IGZhbHNlLFxuXHRzZXRDb21tZW50Rm9jdXNlZCA9ICgpID0+IHt9LFxufSkge1xuXHQvKiBDb250YW50cyAqL1xuXHRjb25zdCB7IGF1dGhvciwgY3JlYXRlZCwgY29tbWVudCwgY29tbWVudHMgfSA9IGNvbnRlbnQ7XG5cblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW3Nob3dSZXBsaWVzLCBzZXRTaG93UmVwbGllc10gPSB1c2VTdGF0ZShzaG93SW5pdGlhbFJlcGxpZXMpO1xuXG5cdC8qIFJlbmRlciBjb21wb25lbnQgKi9cblx0Y29uc3QgcmVuZGVyQ29tbWVudCA9ICgpID0+IHtcblx0XHRjb25zdCB1c2Vyc1JlZ2V4ID0gL0BcXFtbXlxcXV0qXFxdXFx7WzAtOV0rXFx9L2dpO1xuXHRcdGNvbnN0IHVzZXJzQXJyYXkgPSBbLi4uY29tbWVudC5tYXRjaEFsbCh1c2Vyc1JlZ2V4KV07XG5cdFx0Y29uc3QgY29tbWVudHMgPSBjb21tZW50LnNwbGl0KC9AXFxbW15cXF1dKlxcXVxce1swLTldK1xcfS9naSk7XG5cblx0XHRyZXR1cm4gKFxuXHRcdFx0PHAgY2xhc3NOYW1lPVwibGgtLW1kXCI+XG5cdFx0XHRcdHtjb21tZW50cy5tYXAoKGNvbW1lbnQsIGNvbW1lbnRJbmRleCkgPT4ge1xuXHRcdFx0XHRcdGxldCB1c2VyO1xuXG5cdFx0XHRcdFx0aWYgKGNvbW1lbnRJbmRleCBpbiB1c2Vyc0FycmF5KSB7XG5cdFx0XHRcdFx0XHR1c2VyID0gcHJvamVjdFVzZXJzLmZpbmQoKHVzZXIpID0+IHVzZXJzQXJyYXlbY29tbWVudEluZGV4XVswXS5pbmNsdWRlcyh1c2VyLmRpc3BsYXkpKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PFJlYWN0LkZyYWdtZW50IGtleT17Y29tbWVudEluZGV4fT5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiY29tbWVudF9fY29udGVudFwiPntgJHtjb21tZW50fSBgfTwvc3Bhbj57JyAnfVxuXHRcdFx0XHRcdFx0XHR7dXNlciAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbW1lbnRfX21lbnRpb24gbWVudGlvbnNfX21lbnRpb24gcHgtMVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7ICctLXRoZW1lJzogdXNlci51c2VyQ29sb3IgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPkB7dXNlci5kaXNwbGF5fTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj57JyAnfVxuXHRcdFx0XHRcdFx0XHRcdDwvPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC9SZWFjdC5GcmFnbWVudD5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvcD5cblx0XHQpO1xuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2XG5cdFx0XHRcdGNsYXNzTmFtZT1cImNvbW1lbnRcIlxuXHRcdFx0XHRvbk1vdXNlRW50ZXI9eygpID0+IHNldENvbW1lbnRGb2N1c2VkKGNvbW1lbnRJbmRleCl9XG5cdFx0XHRcdG9uTW91c2VMZWF2ZT17KCkgPT4gc2V0Q29tbWVudEZvY3VzZWQobnVsbCl9PlxuXHRcdFx0XHR7cmVuZGVyQXV0aG9yICYmIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiPlxuXHRcdFx0XHRcdFx0PFVzZXIgey4uLnsgdXNlcjogYXV0aG9yIH19IC8+XG5cdFx0XHRcdFx0XHQ8VXNlckluZm9cblx0XHRcdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogYXV0aG9yLmRpc3BsYXksXG5cdFx0XHRcdFx0XHRcdFx0c3VidGl0bGU6IGAvICR7YXV0aG9yLm9yZ2FuaXNhdGlvbn1gLFxuXHRcdFx0XHRcdFx0XHRcdGxheW91dDogJ2hvcml6b250YWwnLFxuXHRcdFx0XHRcdFx0XHRcdHNpemU6ICdzbScsXG5cdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0e3R5cGVvZiBjb21tZW50SW5kZXggIT09ICd1bmRlZmluZWQnICYmIChcblx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1sLWF1dG8gaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0taHNsIGljb24td3JhcHBlci0taW50ZXJhY3RpdmVcIlxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7ICctLXRoZW1lJzogYXV0aG9yLnVzZXJDb2xvciB9fT5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LS14c1wiPntjb21tZW50SW5kZXggKyAxfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0XHR7cmVuZGVyQ29tbWVudCgpfVxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbXQtMVwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNvbW1lbnRfX2NyZWF0ZWQgdGV4dC1tdXRlZC0tNjAgbWItMCBoci0yXCI+e2NyZWF0ZWR9PC9wPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImNvbW1lbnRfX2FncmVlIHRleHQtbXV0ZWQtLTYwIG1iLTAgaHItMiBmb250LXdlaWdodC1ub3JtYWxcIj43IGFncmVlPC9wPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbW1lbnRfX3JlcGx5LXRvZ2dsZSBidG4gYnRuLWxpbmsgdGV4dC1tdXRlZC0tNjAgbWItMCBoci0yIGZvbnQtd2VpZ2h0LW5vcm1hbFwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBzZXRSZXBseVRvVXNlcihhdXRob3IpfT5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImJ0bi10ZXh0IHRleHQtd2hpdGVcIj5SZXBseTwvc3Bhbj5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHR7Y29tbWVudHMubGVuZ3RoID4gMCAmJiAoXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbW1lbnRfX3JlcGxpZXMtdG9nZ2xlIGJ0biBidG4tbGluayB0ZXh0LW11dGVkLS02MCBtYi0wIGhyLTIgZm9udC13ZWlnaHQtbm9ybWFsIG1sLWF1dG8gdGV4dC13aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldFNob3dSZXBsaWVzKCFzaG93UmVwbGllcyl9PlxuXHRcdFx0XHRcdFx0XHR7c2hvd1JlcGxpZXMgPyAnSGlkZScgOiAnU2hvdyd9IHtjb21tZW50cy5sZW5ndGh9IHJlcGxpZXNcblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHR7Y29tbWVudHMubGVuZ3RoID4gMCAmJiBzaG93UmVwbGllcyAmJiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb21tZW50X19yZXBsaWVzXCI+XG5cdFx0XHRcdFx0XHR7Y29tbWVudHMubWFwKChjb21tZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0PFByb2plY3RSZXZpZXdDb21tZW50XG5cdFx0XHRcdFx0XHRcdFx0XHRrZXk9e2NvbW1lbnQuaWR9XG5cdFx0XHRcdFx0XHRcdFx0XHR7Li4ueyBjb21tZW50LCBwcm9qZWN0VXNlcnMsIHNldFJlcGx5VG9Vc2VyLCByZW5kZXJBdXRob3I6IHRydWUgfX1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBCdXR0b24sIFVzZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgUHJvamVjdFJldmlld0NvbW1lbnRNZW50aW9ucyBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50TWVudGlvbnMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcblxuLyogU2VydmljZXMgKi9cbmltcG9ydCB7IGNhbGNDb21tZW50UG9zIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IFFVRVJZX0tFWVMsIGFkZENvbW1lbnQgfSBmcm9tICcuLi8uLi9hcGknO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOX1VQIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VDbG9zZU9uRXNjIH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgeyBSZXZpZXdDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXdDb21tZW50QWRkKHsgbWFya2VyUG9zLCBwaGFzZUlkLCB0b2dnbGVDb21tZW50QWRkT3BlbiB9KSB7XG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgZm9ybVJlZiA9IHVzZVJlZigpO1xuXHRjb25zdCBtb2RhbFJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IGxlZnQgPSAnMzBweCcsIHRvcCA9ICczMHB4JyB9ID0gY2FsY0NvbW1lbnRQb3MobW9kYWxSZWYsIG1hcmtlclBvcyk7XG5cblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW2NvbW1lbnQsIHNldENvbW1lbnRdID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbbWVudGlvbnMsIHNldE1lbnRpb25zXSA9IHVzZVN0YXRlKFtdKTtcblxuXHQvKiBIb29rcyAqL1xuXHR1c2VDbG9zZU9uRXNjKG1hcmtlclBvcywgdG9nZ2xlQ29tbWVudEFkZE9wZW4pO1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyOiB1c2VyIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cdGNvbnN0IHsgcHJvamVjdEltYWdlSWQgfSA9IHVzZUNvbnRleHQoUmV2aWV3Q29udGV4dCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGFkZENvbW1lbnRNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZENvbW1lbnQsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfSU1BR0VfQllfSUQsIHBhcnNlSW50KHByb2plY3RJbWFnZUlkKV0pO1xuXHRcdFx0dG9nZ2xlQ29tbWVudEFkZE9wZW4oKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0bGF5b3V0XG5cdFx0XHR0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjEgfX1cblx0XHRcdHJlZj17bW9kYWxSZWZ9XG5cdFx0XHRjbGFzc05hbWU9XCJyZXZpZXdfX2N1c3RvbS1tb2RhbCBjdXN0b20tbW9kYWxcIlxuXHRcdFx0c3R5bGU9e3sgJy0tbGVmdCc6IGxlZnQsICctLXRvcCc6IHRvcCB9fT5cblx0XHRcdDxtb3Rpb24uZGl2IGtleT1cImN1c3RvbS1tb2RhbC1jb250ZW50XCIgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19jb250ZW50IGJvcmRlciBwLTVcIiB7Li4uRkFERV9JTl9VUCg1MCl9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9faGVhZGVyIGQtZmxleCBhbGlnbi1pdGVtcy1zdGFydFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMFwiPlxuXHRcdFx0XHRcdFx0PFVzZXIgey4uLnsgdXNlciB9fSBzaXplPVwieGxcIiAvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0xMDAgbWwtM1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LS1sZyBtYi0wIGxoLS1tZFwiPkFkZCBhIGNvbW1lbnQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Nsb3NlIGJ0biBidG4tbGluayBtbC1hdXRvXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZUNvbW1lbnRBZGRPcGVufT5cblx0XHRcdFx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xMlwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItMCB0ZXh0LS1tZCBsaC0tbWRcIj5cblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS02MFwiPkNvbW1lbnQgb3I8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnlcIj4gQG1lbnRpb24gPC9zcGFuPnsnICd9XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNjBcIj5zb21lb25lPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19ib2R5IGQtZmxleCBtdC00XCI+XG5cdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdHJlZj17Zm9ybVJlZn1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1ncm93LTFcIlxuXHRcdFx0XHRcdFx0b25TdWJtaXQ9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRpZiAoY29tbWVudC5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0YWRkQ29tbWVudE11dGF0aW9uLm11dGF0ZSh7XG5cdFx0XHRcdFx0XHRcdFx0XHR1c2VySWQ6IHVzZXIuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRwaGFzZUlkOiBwaGFzZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y29tbWVudDogY29tbWVudC50cmltKCksXG5cdFx0XHRcdFx0XHRcdFx0XHRtZW50aW9uZWQ6IG1lbnRpb25zLFxuXHRcdFx0XHRcdFx0XHRcdFx0cG9zaXRpb246IG1hcmtlclBvcyxcblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJjb21tZW50XCI+XG5cdFx0XHRcdFx0XHRcdEFkZCBhIGNvbW1lbnRcblx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIHctMTAwXCI+XG5cdFx0XHRcdFx0XHRcdDxQcm9qZWN0UmV2aWV3Q29tbWVudE1lbnRpb25zXG5cdFx0XHRcdFx0XHRcdFx0ey4uLnsgY29tbWVudCwgc2V0Q29tbWVudCwgbWVudGlvbnMsIHNldE1lbnRpb25zLCBhdXRvRm9jdXM6IHRydWUgfX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdGV4dGVuc2lvbkNsYXNzZXM9XCJmb3JtLWNvbnRyb2wtYnRuXCJcblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50VHlwZT1cImljb25cIlxuXHRcdFx0XHRcdFx0XHRcdHRoZW1lPVwiZGVmYXVsdFwiXG5cdFx0XHRcdFx0XHRcdFx0ey4uLnsgaXNMb2FkaW5nOiBhZGRDb21tZW50TXV0YXRpb24uaXNMb2FkaW5nIH19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdDwvbW90aW9uLmRpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IE1lbnRpb25zSW5wdXQsIE1lbnRpb24gfSBmcm9tICdyZWFjdC1tZW50aW9ucyc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZFVzZXJJY29uIGZyb20gJ2ljb25zL2FkZF91c2VyLnN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXJBdmF0YXIsIFVzZXJJbmZvIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy91c2Vycy9Vc2VyJztcblxuLyogU2VydmljZXMgKi9cbmltcG9ydCBzdHlsZU1lbnRpb25zIGZyb20gJy4vc2VydmljZXMvc3R5bGVNZW50aW9uJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBRVUVSWV9LRVlTLCBmZXRjaFByb2plY3RVc2VycyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCB7IFJldmlld0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0NvbW1lbnRNZW50aW9ucyh7XG5cdGNvbW1lbnQsXG5cdHNldENvbW1lbnQsXG5cdG1lbnRpb25zLFxuXHRzZXRNZW50aW9ucyxcblx0YXV0b0ZvY3VzID0gZmFsc2UsXG59KSB7XG5cdC8qIENvbnRleHQgKi9cblx0Y29uc3QgeyBwcm9qZWN0SWQgfSA9IHVzZUNvbnRleHQoUmV2aWV3Q29udGV4dCk7XG5cblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGRhdGE6IHByb2plY3RVc2VycyA9IFtdIH0gPSB1c2VRdWVyeShbUVVFUllfS0VZUy5QUk9KRUNUX1VTRVJTLCBwcm9qZWN0SWRdLCAoKSA9PiBmZXRjaFByb2plY3RVc2Vycyh7IHByb2plY3RJZCB9KSk7XG5cblx0LyogUmVmcyAqL1xuXHRjb25zdCBtZW50aW9uUmVmID0gdXNlUmVmKCk7XG5cblx0LyogRWZmZWN0cyAqL1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChtZW50aW9ucy5sZW5ndGggPiAwICYmIG1lbnRpb25SZWY/LmN1cnJlbnQpIHN0eWxlTWVudGlvbnMocHJvamVjdFVzZXJzLCBtZW50aW9uUmVmLmN1cnJlbnQpO1xuXHR9LCBbbWVudGlvbnMsIG1lbnRpb25SZWY/LmN1cnJlbnRdKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PE1lbnRpb25zSW5wdXRcblx0XHRcdFx0dmFsdWU9e2NvbW1lbnR9XG5cdFx0XHRcdGNsYXNzTmFtZT1cIm1lbnRpb25zXCJcblx0XHRcdFx0aWQ9XCJjb21tZW50XCJcblx0XHRcdFx0bmFtZT1cImNvbW1lbnRcIlxuXHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNheSBzb21ldGhpbmcgbmljZS4uLlwiXG5cdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldENvbW1lbnQoZXZlbnQudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0b25DbGljaz17KCkgPT4gc3R5bGVNZW50aW9ucyhwcm9qZWN0VXNlcnMpfVxuXHRcdFx0XHRpbnB1dFJlZj17bWVudGlvblJlZn1cblx0XHRcdFx0YXV0b0ZvY3VzPXthdXRvRm9jdXN9PlxuXHRcdFx0XHQ8TWVudGlvblxuXHRcdFx0XHRcdHRyaWdnZXI9XCJAXCJcblx0XHRcdFx0XHRkYXRhPXtwcm9qZWN0VXNlcnN9XG5cdFx0XHRcdFx0cmVuZGVyU3VnZ2VzdGlvbj17U3VnZ2VzdGlvbn1cblx0XHRcdFx0XHRhbGxvd1NwYWNlSW5RdWVyeVxuXHRcdFx0XHRcdGFwcGVuZFNwYWNlT25BZGRcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZW50aW9uc19fbWVudGlvblwiXG5cdFx0XHRcdFx0ZGlzcGxheVRyYW5zZm9ybT17KF8sIG5hbWUpID0+IGAgQCR7bmFtZX0gYH1cblx0XHRcdFx0XHRtYXJrdXA9XCJAW19fZGlzcGxheV9fXXtfX2lkX199XCJcblx0XHRcdFx0XHRvbkFkZD17KGlkKSA9PiBzZXRNZW50aW9ucygobWVudGlvbnMpID0+IFsuLi5tZW50aW9ucywgaWRdKX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvTWVudGlvbnNJbnB1dD5cblx0XHQ8Lz5cblx0KTtcbn1cblxuLyogQ3VzdG9tIFN1Z2dlc3Rpb24gKi9cbmNvbnN0IFN1Z2dlc3Rpb24gPSAoZW50cnksIHF1ZXJ5LCBoaWdobGlnaHRlZCwgaW5kZXgsIGZvY3VzZWQpID0+IChcblx0PGRpdiBjbGFzc05hbWU9XCJtZW50aW9uX19zdWdnZXN0aW9uIHZyLTNcIj5cblx0XHQ8YnV0dG9uIGNsYXNzTmFtZT17YHVzZXIgdXNlci0tc2VsZWN0IHVzZXItLXhsICR7Zm9jdXNlZCAmJiAnaXMtZm9jdXNlZCd9YH0gdHlwZT1cImJ1dHRvblwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxVc2VyQXZhdGFyIHsuLi5lbnRyeX0gLz5cblx0XHRcdFx0PFVzZXJJbmZvXG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdHRpdGxlOiBlbnRyeS5kaXNwbGF5LFxuXHRcdFx0XHRcdFx0c3VidGl0bGU6IGVudHJ5Lm9yZ2FuaXNhdGlvbiA/IGVudHJ5Lm9yZ2FuaXNhdGlvbiA6ICdObyBvcmdhbmlzYXRpb24nLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlcl9fYWRkIHRleHQtc2Vjb25kYXJ5IHJvdW5kZWQtY2lyY2xlIG1sLWF1dG9cIj5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cInVzZXJfX2FkZC1pY29uIGljb24gaWNvbi0tMTIgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e2FkZFVzZXJJY29ufSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvYnV0dG9uPlxuXHQ8L2Rpdj5cbik7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyBGQURFX0lOX1VQIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgUHJvamVjdFJldmlld01hcmtlciBmcm9tICcuL1Byb2plY3RSZXZpZXdNYXJrZXInO1xuaW1wb3J0IFByb2plY3RSZXZpZXdDb21tZW50IGZyb20gJy4vUHJvamVjdFJldmlld0NvbW1lbnQnO1xuaW1wb3J0IFByb2plY3RSZXZpZXdDb21tZW50UmVwbHkgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3Q29tbWVudFJlcGx5JztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gJ2ljb25zL2Nsb3NlLnN2Zyc7XG5cbi8qIFNlcnZpY2VzICovXG5pbXBvcnQgeyBjYWxjQ29tbWVudFBvcyB9IGZyb20gJy4vc2VydmljZXMnO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlQ2xvc2VPbkVzYyB9IGZyb20gJy4uLy4uL2hvb2tzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0NvbW1lbnRNb2RhbCh7XG5cdGNvbW1lbnQsXG5cdGNvbW1lbnRJbmRleCxcblx0dG9nZ2xlQ29tbWVudEFkZE9wZW4sXG5cdGNvbW1lbnRGb2N1c2VkLFxuXHQuLi5yZXN0XG59KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IHBvc2l0aW9uLCBhdXRob3IsIGlkIH0gPSBjb21tZW50O1xuXHRjb25zdCB7IHhQZXJjZW50LCB5UGVyY2VudCB9ID0gcG9zaXRpb247XG5cblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW2NvbW1lbnRPcGVuLCBzZXRDb21tZW50T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZUNvbW1lbnQgPSAoKSA9PiB7XG5cdFx0aWYgKCFjb21tZW50T3BlbikgdG9nZ2xlQ29tbWVudEFkZE9wZW4oKTtcblx0XHRzZXRDb21tZW50T3BlbighY29tbWVudE9wZW4pO1xuXHR9O1xuXG5cdC8qIEhvb2tzICovXG5cdHVzZUNsb3NlT25Fc2MoY29tbWVudE9wZW4sIHNldENvbW1lbnRPcGVuKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8UHJvamVjdFJldmlld01hcmtlclxuXHRcdFx0ey4uLntcblx0XHRcdFx0eFBlcmNlbnQsXG5cdFx0XHRcdHlQZXJjZW50LFxuXHRcdFx0XHRhdXRob3IsXG5cdFx0XHRcdGNvbW1lbnRJbmRleCxcblx0XHRcdFx0Y29tbWVudE9wZW4sXG5cdFx0XHRcdHRvZ2dsZUNvbW1lbnQsXG5cdFx0XHRcdGNvbW1lbnRGb2N1c2VkLFxuXHRcdFx0fX0+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7Y29tbWVudE9wZW4gJiYgPENvbW1lbnRCb3gga2V5PXtpZH0gey4uLnsgY29tbWVudCwgdG9nZ2xlQ29tbWVudCwgLi4ucmVzdCB9fSAvPn1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvUHJvamVjdFJldmlld01hcmtlcj5cblx0KTtcbn1cblxuY29uc3QgQ29tbWVudEJveCA9ICh7IGNvbW1lbnQsIHRvZ2dsZUNvbW1lbnQsIHJldmlld1JlZiwgLi4ucmVzdCB9KSA9PiB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IHBvc2l0aW9uLCBhdXRob3IgfSA9IGNvbW1lbnQ7XG5cblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW3RyYW5zZm9ybWVkUG9zLCBzZXRUcmFuc2Zvcm1lZFBvc10gPSB1c2VTdGF0ZShwb3NpdGlvbik7XG5cdGNvbnN0IFtyZXBseVRvVXNlciwgc2V0UmVwbHlUb1VzZXJdID0gdXNlU3RhdGUoKTtcblxuXHQvKiBSZWZzICovXG5cdGNvbnN0IGJveFJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIEVmZmVjdHMgKi9cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAocG9zaXRpb24pIHtcblx0XHRcdHNldFRyYW5zZm9ybWVkUG9zKCgpID0+IHtcblx0XHRcdFx0cG9zaXRpb24ucmV2aWV3UG9zID0gcmV2aWV3UmVmLmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0XHRcdHJldHVybiBjYWxjQ29tbWVudFBvcyhib3hSZWYsIHBvc2l0aW9uKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSwgW3Bvc2l0aW9uXSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXZcblx0XHRcdGNsYXNzTmFtZT1cInJldmlld19fY3VzdG9tLW1vZGFsIGN1c3RvbS1tb2RhbFwiXG5cdFx0XHRzdHlsZT17eyAnLS1sZWZ0JzogdHJhbnNmb3JtZWRQb3MubGVmdCwgJy0tdG9wJzogdHJhbnNmb3JtZWRQb3MudG9wIH19PlxuXHRcdFx0PG1vdGlvbi5kaXYga2V5PVwiY3VzdG9tLW1vZGFsLWNvbnRlbnRcIiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2NvbnRlbnQgYm9yZGVyIHAtNVwiIHsuLi5GQURFX0lOX1VQKDUwKX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19oZWFkZXIgZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHctMTAwXCI+XG5cdFx0XHRcdFx0XHQ8VXNlciB7Li4ueyB1c2VyOiBhdXRob3IgfX0gc2l6ZT1cInhsXCIgLz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIHctMTAwIG1sLTNcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0tbGcgbWItMCBsaC0tbWRcIj57YXV0aG9yLmRpc3BsYXl9PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19jbG9zZSBidG4gYnRuLWxpbmsgbWwtYXV0b1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVDb21tZW50fT5cblx0XHRcdFx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xMlwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNjAgbWItMCB0ZXh0LS1zbSBsaC0teHNcIj57YXV0aG9yLm9yZ2FuaXNhdGlvbn08L3A+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19ib2R5IGQtZmxleCBtdC00XCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0xMDBcIj5cblx0XHRcdFx0XHRcdDxQcm9qZWN0UmV2aWV3Q29tbWVudCB7Li4ueyBjb21tZW50LCBzZXRSZXBseVRvVXNlciwgc2hvd0luaXRpYWxSZXBsaWVzOiB0cnVlLCAuLi5yZXN0IH19IC8+XG5cdFx0XHRcdFx0XHR7cmVwbHlUb1VzZXIgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8UHJvamVjdFJldmlld0NvbW1lbnRSZXBseVxuXHRcdFx0XHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXBseVRvOiByZXBseVRvVXNlcixcblx0XHRcdFx0XHRcdFx0XHRcdGNvbW1lbnRJZDogY29tbWVudC5pZCxcblx0XHRcdFx0XHRcdFx0XHRcdHNldFJlcGx5VG9Vc2VyOiBzZXRSZXBseVRvVXNlcixcblx0XHRcdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgUHJvamVjdFJldmlld0NvbW1lbnQgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3Q29tbWVudCc7XG5pbXBvcnQgUHJvamVjdFJldmlld0NvbW1lbnRSZXBseSBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50UmVwbHknO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTTElERV9JTiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZUNsb3NlT25Fc2MgfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXdDb21tZW50UGFuZWwoe1xuXHRjb21tZW50cyxcblx0Y29tbWVudHNQYW5lbE9wZW4sXG5cdHRvZ2dsZUNvbW1lbnRzUGFuZWwsXG5cdHByb2plY3RVc2Vycyxcblx0c2V0Q29tbWVudEZvY3VzZWQsXG59KSB7XG5cdC8qIEhvb2tzICovXG5cdHVzZUNsb3NlT25Fc2MoY29tbWVudHNQYW5lbE9wZW4sIHRvZ2dsZUNvbW1lbnRzUGFuZWwpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2IHsuLi5TTElERV9JTn0gY2xhc3NOYW1lPVwicGFuZWwgcGFuZWwtLWNvbW1lbnRzXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsX19ib2R5XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWJhc2VsaW5lIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTZcIj5cblx0XHRcdFx0XHQ8aDUgY2xhc3NOYW1lPVwidGV4dC1jYXBpdGFsaXplXCI+QWxsIGNvbW1lbnRzPC9oNT5cblx0XHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJwYW5lbF9fY2xvc2UgYnRuIGJ0bi1saW5rIG1sLWF1dG9cIiBvbkNsaWNrPXt0b2dnbGVDb21tZW50c1BhbmVsfT5cblx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xMlwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0xMDBcIj5cblx0XHRcdFx0XHR7Y29tbWVudHM/Lm1hcCgoY29tbWVudCwgY29tbWVudEluZGV4KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHQ8Q29tbWVudFdpdGhSZXBseVxuXHRcdFx0XHRcdFx0XHRcdGtleT17Y29tbWVudEluZGV4fVxuXHRcdFx0XHRcdFx0XHRcdHsuLi57IGNvbW1lbnQsIGNvbW1lbnRJbmRleCwgcHJvamVjdFVzZXJzLCBzZXRDb21tZW50Rm9jdXNlZCB9fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHR7Y29tbWVudHMubGVuZ3RoID09PSAwICYmIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTcwXCI+Tm8gY29tbWVudHMgeWV0PC9wPn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59XG5cbmNvbnN0IENvbW1lbnRXaXRoUmVwbHkgPSAoeyBjb21tZW50LCBjb21tZW50SW5kZXgsIHByb2plY3RVc2Vycywgc2V0Q29tbWVudEZvY3VzZWQgfSkgPT4ge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbcmVwbHlUb1VzZXIsIHNldFJlcGx5VG9Vc2VyXSA9IHVzZVN0YXRlKCk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PFByb2plY3RSZXZpZXdDb21tZW50XG5cdFx0XHRcdHsuLi57IGNvbW1lbnQsIGNvbW1lbnRJbmRleCwgc2V0UmVwbHlUb1VzZXIsIHJlbmRlckF1dGhvcjogdHJ1ZSwgcHJvamVjdFVzZXJzLCBzZXRDb21tZW50Rm9jdXNlZCB9fVxuXHRcdFx0Lz5cblx0XHRcdHtyZXBseVRvVXNlciAmJiAoXG5cdFx0XHRcdDxQcm9qZWN0UmV2aWV3Q29tbWVudFJlcGx5XG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdHJlcGx5VG86IHJlcGx5VG9Vc2VyLFxuXHRcdFx0XHRcdFx0Y29tbWVudElkOiBjb21tZW50LmlkLFxuXHRcdFx0XHRcdFx0c2V0UmVwbHlUb1VzZXI6IHNldFJlcGx5VG9Vc2VyLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQpfVxuXHRcdDwvPlxuXHQpO1xufTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlciwgQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5pbXBvcnQgeyBVc2VySW5mbyB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdXNlcnMvVXNlcic7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCB7IFN0YXRpY0NvbnRleHQsIFJldmlld0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuLyogRG9tYWluICovXG5pbXBvcnQgUHJvamVjdFJldmlld0NvbW1lbnRNZW50aW9ucyBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50TWVudGlvbnMnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGFkZFJlcGx5LCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0NvbW1lbnRSZXBseSh7IHJlcGx5VG8sIGNvbW1lbnRJZCwgc2V0UmVwbHlUb1VzZXIgfSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbcmVwbHksIHNldFJlcGx5XSA9IHVzZVN0YXRlKCk7XG5cdGNvbnN0IFttZW50aW9ucywgc2V0TWVudGlvbnNdID0gdXNlU3RhdGUoW10pO1xuXG5cdC8qIEVmZmVjdHMgKi9cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRzZXRSZXBseShgQFske3JlcGx5VG8uZGlzcGxheX1deyR7cmVwbHlUby5pZH19IGApO1xuXHRcdHNldE1lbnRpb25zKFtyZXBseVRvLmlkXSk7XG5cdH0sIFtyZXBseVRvXSk7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBjdXJyZW50VXNlciB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXHRjb25zdCB7IHByb2plY3RJbWFnZUlkIH0gPSB1c2VDb250ZXh0KFJldmlld0NvbnRleHQpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBhZGRSZXBseU11dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkUmVwbHksIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfSU1BR0VfQllfSUQsIHBhcnNlSW50KHByb2plY3RJbWFnZUlkKV0pO1xuXHRcdFx0c2V0UmVwbHlUb1VzZXIobnVsbCk7XG5cdFx0fSxcblx0fSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGZvcm1cblx0XHRcdGNsYXNzTmFtZT1cInJlcGx5XCJcblx0XHRcdG9uU3VibWl0PXsoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0YWRkUmVwbHlNdXRhdGlvbi5tdXRhdGUoe1xuXHRcdFx0XHRcdGNvbW1lbnRJZDogY29tbWVudElkLFxuXHRcdFx0XHRcdHJlcGx5OiByZXBseSxcblx0XHRcdFx0XHRtZW50aW9uZWQ6IG1lbnRpb25zLFxuXHRcdFx0XHR9KTtcblx0XHRcdH19PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxVc2VyIHsuLi57IHVzZXI6IGN1cnJlbnRVc2VyIH19IC8+XG5cdFx0XHRcdDxVc2VySW5mb1xuXHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHR0aXRsZTogY3VycmVudFVzZXIuZGlzcGxheSxcblx0XHRcdFx0XHRcdHN1YnRpdGxlOiBgLyAke2N1cnJlbnRVc2VyLm9yZ2FuaXNhdGlvbn1gLFxuXHRcdFx0XHRcdFx0bGF5b3V0OiAnaG9yaXpvbnRhbCcsXG5cdFx0XHRcdFx0XHRzaXplOiAnc20nLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cblx0XHRcdFx0PFByb2plY3RSZXZpZXdDb21tZW50TWVudGlvbnMgey4uLnsgY29tbWVudDogcmVwbHksIHNldENvbW1lbnQ6IHNldFJlcGx5LCBtZW50aW9ucywgc2V0TWVudGlvbnMgfX0gLz5cblx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdGV4dGVuc2lvbkNsYXNzZXM9XCJmb3JtLWNvbnRyb2wtYnRuXCJcblx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRjb250ZW50VHlwZT1cImljb25cIlxuXHRcdFx0XHRcdHRoZW1lPVwiZGVmYXVsdFwiXG5cdFx0XHRcdFx0ey4uLnsgaXNMb2FkaW5nOiBhZGRSZXBseU11dGF0aW9uLmlzTG9hZGluZyB9fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9mb3JtPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENsaWNrQXdheUxpc3RlbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NsaWNrQXdheUxpc3RlbmVyJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTQ0FMRV9GQURFIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBUb29sdGlwIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXdNYXJrZXIoe1xuXHR4UGVyY2VudCxcblx0eVBlcmNlbnQsXG5cdGF1dGhvcixcblx0Y29tbWVudEluZGV4LFxuXHRjb21tZW50T3Blbixcblx0dG9nZ2xlQ29tbWVudCxcblx0Y29tbWVudEZvY3VzZWQsXG5cdGNoaWxkcmVuLFxufSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB1c2VyID0gYXV0aG9yID8gYXV0aG9yIDogY3VycmVudFVzZXI7XG5cdGNvbnN0IGxhYmVsID0gKGNvbW1lbnRJbmRleCA/PyAwKSArIDE7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PENsaWNrQXdheUxpc3RlbmVyXG5cdFx0XHRvbkNsaWNrQXdheT17KCkgPT4ge1xuXHRcdFx0XHRpZiAoY29tbWVudE9wZW4pIHRvZ2dsZUNvbW1lbnQoKTtcblx0XHRcdH19PlxuXHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0bGF5b3V0XG5cdFx0XHRcdHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMSB9fVxuXHRcdFx0XHRjbGFzc05hbWU9XCJyZXZpZXdfX2ludGVyYWN0aW9uXCJcblx0XHRcdFx0c3R5bGU9e3tcblx0XHRcdFx0XHQnLS14JzogeFBlcmNlbnQsXG5cdFx0XHRcdFx0Jy0teSc6IHlQZXJjZW50LFxuXHRcdFx0XHR9fT5cblx0XHRcdFx0PFRvb2x0aXBcblx0XHRcdFx0XHR0aXRsZT17YXV0aG9yPy5kaXNwbGF5ID8/ICdBZGQgY29tbWVudCd9XG5cdFx0XHRcdFx0b3Blbj17KGNvbW1lbnRGb2N1c2VkID8/IGZhbHNlKSA9PT0gY29tbWVudEluZGV4ID8/IGZhbHNlfT5cblx0XHRcdFx0XHQ8bW90aW9uLmJ1dHRvblxuXHRcdFx0XHRcdFx0ey4uLlNDQUxFX0ZBREV9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJyZXZpZXdfX21hcmtlciBpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnkgYnRuIGJ0bi1saW5rIHRleHQtcmVzZXRcIlxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgJy0tdGhlbWUnOiBgJHt1c2VyLnVzZXJDb2xvcn1gIH19XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVDb21tZW50fT5cblx0XHRcdFx0XHRcdHtsYWJlbCAmJiA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LS14c1wiPntsYWJlbH08L3NwYW4+fVxuXHRcdFx0XHRcdDwvbW90aW9uLmJ1dHRvbj5cblx0XHRcdFx0PC9Ub29sdGlwPlxuXHRcdFx0XHQ8ZGl2PntjaGlsZHJlbn08L2Rpdj5cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHQ8L0NsaWNrQXdheUxpc3RlbmVyPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCB7IFJldmlld0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2hldnJvbkljb24gZnJvbSAnaWNvbnMvY2hldnJvbi5zdmcnO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4uLy4uL2hvb2tzJztcblxuLyogQW5pbWF0aW9uICovXG5pbXBvcnQgeyBGQURFX0lOIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXdQYWdpbmF0aW9uKHsgYWxsSW1hZ2VzIH0pIHtcblx0LyogSG9va3MgKi9cblx0dXNlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBoYW5kbGVLZXlVcCk7XG5cdGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cblx0LyogQ29udGV4dCAqL1xuXHRjb25zdCB7IHByb2plY3RJbWFnZUlkIH0gPSB1c2VDb250ZXh0KFJldmlld0NvbnRleHQpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCBjdXJyZW50SW1hZ2UgPSBhbGxJbWFnZXMuaW5kZXhPZihOdW1iZXIocHJvamVjdEltYWdlSWQpKTtcblx0Y29uc3QgcHJldkltYWdlID0gYWxsSW1hZ2VzW2N1cnJlbnRJbWFnZSA9PT0gMCA/IGFsbEltYWdlcy5sZW5ndGggLSAxIDogY3VycmVudEltYWdlIC0gMV07XG5cdGNvbnN0IG5leHRJbWFnZSA9IGFsbEltYWdlc1tjdXJyZW50SW1hZ2UgPT09IGFsbEltYWdlcy5sZW5ndGggLSAxID8gMCA6IGN1cnJlbnRJbWFnZSArIDFdO1xuXG5cdGZ1bmN0aW9uIGhhbmRsZUtleVVwKGV2ZW50KSB7XG5cdFx0aWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93TGVmdCcgJiYgcHJldkltYWdlKSBuYXZpZ2F0ZSgncHJldicpO1xuXHRcdGlmIChldmVudC5rZXkgPT09ICdBcnJvd1JpZ2h0JyAmJiBuZXh0SW1hZ2UpIG5hdmlnYXRlKCduZXh0Jyk7XG5cdH1cblxuXHRjb25zdCBuYXZpZ2F0ZSA9IChkaXJlY3Rpb24pID0+IHtcblx0XHRpZiAoZGlyZWN0aW9uID09PSAncHJldicpIGhpc3RvcnkucHVzaChwcmV2SW1hZ2UudG9TdHJpbmcoKSk7XG5cdFx0aWYgKGRpcmVjdGlvbiA9PT0gJ25leHQnKSBoaXN0b3J5LnB1c2gobmV4dEltYWdlLnRvU3RyaW5nKCkpO1xuXHR9O1xuXG5cdHJldHVybiAoXG5cdFx0YWxsSW1hZ2VzLmxlbmd0aCA+IDEgJiYgKFxuXHRcdFx0PG1vdGlvbi5kaXYga2V5PVwicGFnaW5hdGlvblwiIHsuLi5GQURFX0lOfSBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvbl9fYnRuLXdyYXBwZXIgcGFnaW5hdGlvbl9fYnRuLXdyYXBwZXItLXByZXZcIj5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwYWdpbmF0aW9uX19idG4gcGFnaW5hdGlvbl9fYnRuLS1wcmV2IGJ0biBidG4tbGluayB0ZXh0LXJlc2V0XCJcblx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gbmF2aWdhdGUoJ3ByZXYnKX0+XG5cdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cInBhZ2luYXRpb25fX2ljb24gaWNvbiBpY29uLS0xMlwiIHNyYz17Y2hldnJvbkljb259IC8+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhZ2luYXRpb25fX2J0bi13cmFwcGVyIHBhZ2luYXRpb25fX2J0bi13cmFwcGVyLS1uZXh0XCI+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicGFnaW5hdGlvbl9fYnRuIHBhZ2luYXRpb25fX2J0bi0tbmV4dCBidG4gYnRuLWxpbmsgdGV4dC1yZXNldFwiXG5cdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlKCduZXh0Jyl9PlxuXHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uX19pY29uIGljb24gaWNvbi0tMTJcIiBzcmM9e2NoZXZyb25JY29ufSAvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHQpXG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RSZXZpZXdDYW52YXMgfSBmcm9tICcuL1Byb2plY3RSZXZpZXdDYW52YXMnO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IHsgRWRpdEFjdGlvbiwgUGhhc2VBY3Rpb24sIFBoYXNlTmV4dEFjdGlvbiwgU2hhcmVBY3Rpb24gfSBmcm9tICcuL2FjdGlvbnMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjb21tZW50SWNvbiBmcm9tICdpY29ucy9jb21tZW50LnN2Zyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCB7IFJldmlld0NvbnRleHQsIFN0YXRpY0NvbnRleHQgfSBmcm9tICcuLi8uLi8uLi9jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0FjdGlvbkJhcih7XG5cdGFsbEltYWdlcyxcblx0YWxsUGhhc2VzLFxuXHR0aXRsZSxcblx0ZGVzY3JpcHRpb24sXG5cdHBoYXNlTnVtYmVyLFxuXHRwaGFzZUlkLFxuXHRjb21tZW50c1BhbmVsT3Blbixcblx0dG9nZ2xlQ29tbWVudHNQYW5lbCxcblx0cHJvamVjdFVzZXJzLFxuXHR0b2dnbGVQYWdpbmF0aW9uQWN0aXZlLFxufSkge1xuXHQvKiBDb250ZXh0ICovXG5cdGNvbnN0IHsgY3VycmVudFVzZXIsIHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIENvbnRleHQgKi9cblx0Y29uc3QgeyBwcm9qZWN0SW1hZ2VJZCB9ID0gdXNlQ29udGV4dChSZXZpZXdDb250ZXh0KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJiYXIgYmFyLS1yZXZpZXdcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTAganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0PFVzZXIgey4uLnsgdXNlcjogY3VycmVudFVzZXIsIHNpemU6ICdsZycgfX0gLz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gbWwtM1wiPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBsaC0tc21cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtLXNtIG1iLTAgdGV4dC10cnVuY2F0ZVwiIHN0eWxlPXt7IG1heFdpZHRoOiAxMjAgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt0aXRsZX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbGgtLXNtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LS14cyB0ZXh0LW11dGVkLS03MCBtYi0wXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHthbGxJbWFnZXMuaW5kZXhPZihOdW1iZXIocHJvamVjdEltYWdlSWQpKSArIDF9IG9mIHthbGxJbWFnZXMubGVuZ3RofVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwibXgtMSB0ZXh0LW11dGVkLS0yMFwiPi88L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8UGhhc2VBY3Rpb24gey4uLnsgYWxsUGhhc2VzLCBwaGFzZU51bWJlciwgdG9nZ2xlUGFnaW5hdGlvbkFjdGl2ZSB9fSAvPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmUgaHItMlwiPlxuXHRcdFx0XHRcdFx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHQ8RWRpdEFjdGlvbiB7Li4ueyB0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3RJbWFnZUlkLCB0b2dnbGVQYWdpbmF0aW9uQWN0aXZlIH19IC8+XG5cdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BiYXJfX2FjdGlvbi1idG4gJHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbW1lbnRzUGFuZWxPcGVuICYmICdpcy1hY3RpdmUnXG5cdFx0XHRcdFx0XHRcdFx0fSBidG4gYnRuLWxpbmsgdGV4dC1yZXN0IGhyLTJgfVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZUNvbW1lbnRzUGFuZWx9PlxuXHRcdFx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNlwiIHNyYz17Y29tbWVudEljb259IC8+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIGhyLTJcIj5cblx0XHRcdFx0XHRcdFx0XHR7dXNlclJvbGUgPT09ICdhZG1pbicgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0PFBoYXNlTmV4dEFjdGlvbiB7Li4ueyBwaGFzZUlkLCBwcm9qZWN0SW1hZ2VJZCwgdG9nZ2xlUGFnaW5hdGlvbkFjdGl2ZSB9fSAvPlxuXHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG5cdFx0XHRcdFx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiA8U2hhcmVBY3Rpb24gey4uLnsgcHJvamVjdFVzZXJzLCB0b2dnbGVQYWdpbmF0aW9uQWN0aXZlIH19IC8+fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IE1vZGFsLCBFZGl0YWJsZUJvZHkgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgZWRpdEljb24gZnJvbSAnaWNvbnMvZWRpdC5zdmcnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGVkaXRQcm9qZWN0SW1hZ2UsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi8uLi8uLi9hcGknO1xuXG4vKiBPcHRpb25zICovXG5pbXBvcnQgeyBtb2RhbE9wdGlvbnMgfSBmcm9tICcuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdEFjdGlvbih7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdEltYWdlSWQsIHRvZ2dsZVBhZ2luYXRpb25BY3RpdmUgfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG5cdFx0dG9nZ2xlUGFnaW5hdGlvbkFjdGl2ZSgpO1xuXHRcdHNldE1vZGFsT3BlbighbW9kYWxPcGVuKTtcblx0fTtcblxuXHQvKiBtdXRhdGlvbnMgKi9cblx0Y29uc3QgbXV0YXRpb25PblN1Y2Nlc3MgPSAoKSA9PiB7XG5cdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9JTUFHRV9CWV9JRCwgTnVtYmVyKHByb2plY3RJbWFnZUlkKV0pO1xuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdGNsYXNzTmFtZT17YGJhcl9fYWN0aW9uLWJ0biAke21vZGFsT3BlbiAmJiAnaXMtYWN0aXZlJ30gYnRuIGJ0bi1saW5rIHRleHQtcmVzdGB9XG5cdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfT5cblx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTE2XCIgc3JjPXtlZGl0SWNvbn0gLz5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0dGl0bGU6ICdFZGl0aW5nIGltYWdlJyxcblx0XHRcdFx0XHRzdWJ0aXRsZTogJ1NhdmUgd2hlbiByZWFkeScsXG5cdFx0XHRcdFx0bW9kYWxPcGVuOiBtb2RhbE9wZW4sXG5cdFx0XHRcdFx0dG9nZ2xlTW9kYWw6IHRvZ2dsZU1vZGFsLFxuXHRcdFx0XHRcdC4uLm1vZGFsT3B0aW9ucyxcblx0XHRcdFx0fX0+XG5cdFx0XHRcdDxFZGl0YWJsZUJvZHlcblx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0dG9nZ2xlTW9kYWw6IHRvZ2dsZU1vZGFsLFxuXHRcdFx0XHRcdFx0ZmllbGRzOiBbXG5cdFx0XHRcdFx0XHRcdHsgbmFtZTogJ3RpdGxlJywgZGVmYXVsdFZhbHVlOiB0aXRsZSB9LFxuXHRcdFx0XHRcdFx0XHR7IG5hbWU6ICdkZXNjcmlwdGlvbicsIGRlZmF1bHRWYWx1ZTogZGVzY3JpcHRpb24gfSxcblx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRtdXRhdGlvbjogZWRpdFByb2plY3RJbWFnZSxcblx0XHRcdFx0XHRcdG11dGF0aW9uSWQ6IHByb2plY3RJbWFnZUlkLFxuXHRcdFx0XHRcdFx0bXV0YXRpb25PblN1Y2Nlc3M6IG11dGF0aW9uT25TdWNjZXNzLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2hldnJvbkljb24gZnJvbSAnaWNvbnMvY2hldnJvbi5zdmcnO1xuaW1wb3J0IGNoZWNrSWNvbiBmcm9tICdpY29ucy9jaGVjay5zdmcnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgeyBSZXZpZXdDb250ZXh0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29udGV4dCc7XG5cbi8qIE9wdGlvbnMgKi9cbmltcG9ydCB7IG1vZGFsT3B0aW9ucyB9IGZyb20gJy4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaGFzZUFjdGlvbih7IGFsbFBoYXNlcywgcGhhc2VOdW1iZXIsIHRvZ2dsZVBhZ2luYXRpb25BY3RpdmUgfSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdC8qIENvbnRleHQgKi9cblx0Y29uc3QgeyBhY3RpdmVQaGFzZSA9IGFsbFBoYXNlc1thbGxQaGFzZXMubGVuZ3RoIC0gMV0sIHNldEFjdGl2ZVBoYXNlIH0gPSB1c2VDb250ZXh0KFJldmlld0NvbnRleHQpO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHtcblx0XHR0b2dnbGVQYWdpbmF0aW9uQWN0aXZlKCk7XG5cdFx0c2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pO1xuXHR9O1xuXG5cdGNvbnN0IG5hdmlnYXRlVG9QaGFzZSA9IChwaGFzZSkgPT4ge1xuXHRcdHNldEFjdGl2ZVBoYXNlKHBoYXNlKTtcblx0XHR0b2dnbGVNb2RhbCgpO1xuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdGNsYXNzTmFtZT17YGJ0biBidG4tbGluayBidG4tLW1vZGFsIHRleHQtcmVzZXQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciAke21vZGFsT3BlbiAmJiAnaXMtYWN0aXZlJ31gfVxuXHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVNb2RhbH0+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtLXhzIHRleHQtbXV0ZWQtLTcwIG1iLTBcIj5QaGFzZSB7cGhhc2VOdW1iZXJ9PC9wPlxuXHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tOCB0ZXh0LW11dGVkLS01MCAgbWwtMVwiIHNyYz17Y2hldnJvbkljb259IC8+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxNb2RhbFxuXHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdHRpdGxlOiAnQ2hvb3NlIHBoYXNlJyxcblx0XHRcdFx0XHRzdWJ0aXRsZTogJ05hdmlnYXRlIHRvIHNlbGVjdGVkIHBoYXNlJyxcblx0XHRcdFx0XHRtb2RhbE9wZW46IG1vZGFsT3Blbixcblx0XHRcdFx0XHR0b2dnbGVNb2RhbDogdG9nZ2xlTW9kYWwsXG5cdFx0XHRcdFx0Li4ubW9kYWxPcHRpb25zLFxuXHRcdFx0XHRcdGV4dGVuc2lvbkNsYXNzZXM6ICdiYXJfX21vZGFsIGJhcl9fbW9kYWwtLWxlZnQnLFxuXHRcdFx0XHR9fT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG10LTJcIj5cblx0XHRcdFx0XHR7YWxsUGhhc2VzLm1hcCgocGhhc2UsIHBoYXNlSW5kZXgpID0+IChcblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0a2V5PXtwaGFzZUluZGV4fVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0taW50ZXJhY3RpdmUgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnkgaHItMiB0ZXh0LWRlY29yYXRpb24tbm9uZVwiXG5cdFx0XHRcdFx0XHRcdHN0eWxlPXt7ICctLXNpemUnOiAzNSB9fVxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZVRvUGhhc2UocGhhc2UpfT5cblx0XHRcdFx0XHRcdFx0e2FjdGl2ZVBoYXNlID09PSBwaGFzZSA/IChcblx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTIgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e2NoZWNrSWNvbn0gLz5cblx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeVwiPntwaGFzZUluZGV4ICsgMX08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTW9kYWwsIERyb3B6b25lU2luZ2xlLCBCdXR0b24gfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgbmV4dEljb24gZnJvbSAnaWNvbnMvbmV4dC5zdmcnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IG5leHRQaGFzZSwgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uLy4uLy4uL2FwaSc7XG5cbi8qIE9wdGlvbnMgKi9cbmltcG9ydCB7IG1vZGFsT3B0aW9ucyB9IGZyb20gJy4nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQaGFzZU5leHRBY3Rpb24oeyBwaGFzZUlkLCBwcm9qZWN0SW1hZ2VJZCwgdG9nZ2xlUGFnaW5hdGlvbkFjdGl2ZSB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUoW10pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHtcblx0XHR0b2dnbGVQYWdpbmF0aW9uQWN0aXZlKCk7XG5cdFx0c2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pO1xuXHR9O1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBuZXh0UGhhc2VNdXRhdGlvbiA9IHVzZU11dGF0aW9uKG5leHRQaGFzZSwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0dG9nZ2xlTW9kYWwoKTtcblx0XHRcdHNldEltYWdlcyhbXSk7XG5cdFx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0lNQUdFX0JZX0lELCBOdW1iZXIocHJvamVjdEltYWdlSWQpXSk7XG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRjbGFzc05hbWU9e2BiYXJfX2FjdGlvbi1idG4gJHttb2RhbE9wZW4gJiYgJ2lzLWFjdGl2ZSd9IGJ0biBidG4tbGluayB0ZXh0LXJlc3RgfVxuXHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVNb2RhbH0+XG5cdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNlwiIHNyYz17bmV4dEljb259IC8+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxNb2RhbFxuXHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdHRpdGxlOiAnTmV4dCBwaGFzZScsXG5cdFx0XHRcdFx0c3VidGl0bGU6ICdBZGQgYSBuZXcgaW1hZ2UgZm9yIHRoZSBuZXh0IHBoYXNlJyxcblx0XHRcdFx0XHRtb2RhbE9wZW46IG1vZGFsT3Blbixcblx0XHRcdFx0XHR0b2dnbGVNb2RhbDogdG9nZ2xlTW9kYWwsXG5cdFx0XHRcdFx0Li4ubW9kYWxPcHRpb25zLFxuXHRcdFx0XHR9fT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0xMDBcIj5cblx0XHRcdFx0XHQ8RHJvcHpvbmVTaW5nbGUgey4uLnsgaW1hZ2VzLCBzZXRJbWFnZXMgfX0gLz5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHR0aXRsZT1cIk5leHQgcGhhc2VcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gbmV4dFBoYXNlTXV0YXRpb24ubXV0YXRlKHsgcGhhc2VJZDogcGhhc2VJZCwgaW1hZ2VzOiBpbWFnZXMgfSl9XG5cdFx0XHRcdFx0XHRleHRlbnNpb25DbGFzc2VzPVwibXQtMyB3LTUwIG14LWF1dG8ganVzdGlmeS1jb250ZW50LWNlbnRlclwiXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBVc2VyQWRkU2VhcmNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZFVzZXJJY29uIGZyb20gJ2ljb25zL2FkZF91c2VyLnN2Zyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCB7IFJldmlld0NvbnRleHQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb250ZXh0JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vLi4vLi4vYXBpJztcblxuLyogT3B0aW9ucyAqL1xuaW1wb3J0IHsgbW9kYWxPcHRpb25zIH0gZnJvbSAnLic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNoYXJlQWN0aW9uKHsgcHJvamVjdFVzZXJzLCB0b2dnbGVQYWdpbmF0aW9uQWN0aXZlIH0pIHtcblx0LyogQ29udGV4dCAqL1xuXHRjb25zdCB7IHByb2plY3RJZCB9ID0gdXNlQ29udGV4dChSZXZpZXdDb250ZXh0KTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG5cdFx0dG9nZ2xlUGFnaW5hdGlvbkFjdGl2ZSgpO1xuXHRcdHNldE1vZGFsT3BlbighbW9kYWxPcGVuKTtcblx0fTtcblxuXHRjb25zdCBpbnZhbGlkYXRlUXVlcmllcyA9ICgpID0+IHtcblx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX1VTRVJTLCBwcm9qZWN0SWRdKTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEJ1dHRvbiB0aXRsZT1cIlNoYXJlXCIgZXh0ZW5zaW9uQ2xhc3Nlcz1cInB4LTVcIiBvbkNsaWNrPXt0b2dnbGVNb2RhbH0+XG5cdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xMiBtci0xXCIgc3JjPXthZGRVc2VySWNvbn0gLz5cblx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdHRpdGxlPVwiU2VsZWN0IHVzZXJzXCJcblx0XHRcdFx0c3VidGl0bGU9XCJDaG9vc2Ugc29tZSB1c2VycyB0byBjb2xsYWJvcmF0ZSB3aXRoLlwiXG5cdFx0XHRcdHsuLi57IG1vZGFsT3BlbiwgdG9nZ2xlTW9kYWwsIC4uLm1vZGFsT3B0aW9ucywgZXh0ZW5zaW9uQ2xhc3NlczogJ2Jhcl9fbW9kYWwgYmFyX19tb2RhbC0tcmlnaHQnIH19PlxuXHRcdFx0XHQ8VXNlckFkZFNlYXJjaFxuXHRcdFx0XHRcdHsuLi57IHVzZXJzOiBwcm9qZWN0VXNlcnMsIHByb2plY3Q6IHsgaWQ6IHByb2plY3RJZCB9LCB0b2dnbGVNb2RhbCwgaW52YWxpZGF0ZVF1ZXJpZXMgfX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvTW9kYWw+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCJpbXBvcnQgeyBTQ0FMRV9JTl9VUCB9IGZyb20gJy4uLy4uLy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVkaXRBY3Rpb24gfSBmcm9tICcuL0VkaXRBY3Rpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQaGFzZUFjdGlvbiB9IGZyb20gJy4vUGhhc2VBY3Rpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQaGFzZU5leHRBY3Rpb24gfSBmcm9tICcuL1BoYXNlTmV4dEFjdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNoYXJlQWN0aW9uIH0gZnJvbSAnLi9TaGFyZUFjdGlvbic7XG5cbi8qIEdsb2JhbCAqL1xuZXhwb3J0IGNvbnN0IG1vZGFsT3B0aW9ucyA9IHtcblx0cmVuZGVyT25Cb2R5OiBmYWxzZSxcblx0Y2VudGVyOiBmYWxzZSxcblx0ZXh0ZW5zaW9uQ2xhc3NlczogJ2Jhcl9fbW9kYWwnLFxuXHRjdXN0b21BbmltYXRpb246IFNDQUxFX0lOX1VQKDIwKSxcbn07XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RSZXZpZXdBY3Rpb25CYXIgfSBmcm9tICcuL1Byb2plY3RSZXZpZXdBY3Rpb25CYXInO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsY0NvbW1lbnRQb3MocmVmLCBwb3MpIHtcblx0Y29uc3QgbWFya2VyU3BhY2VyID0gMTA7XG5cdGNvbnN0IG1hcmtlclNpemUgPSAyMDtcblx0Y29uc3Qgb2Zmc2V0ID0gbWFya2VyU2l6ZSArIG1hcmtlclNwYWNlcjtcblxuXHQvKiBHZXQgcG9zaXRpb24gb2YgbWFya2VyICovXG5cdGNvbnN0IHJldmlld1BvcyA9IHBvcy5yZXZpZXdQb3M7XG5cdGNvbnN0IHhQZXJjZW50ID0gTnVtYmVyKHBvcy54UGVyY2VudCk7XG5cdGNvbnN0IHlQZXJjZW50ID0gTnVtYmVyKHBvcy55UGVyY2VudCk7XG5cblx0LyogR2V0IGRpbWVuc2lvbnMgb2YgY3VycmVudCBib3ggKi9cblx0Y29uc3QgeyB3aWR0aDogYm94V2lkdGggPSA0MDAsIGhlaWdodDogYm94SGVpZ2h0ID0gMjI4IH0gPSByZWY/LmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIHx8IHt9O1xuXG5cdC8qIEdldCBkaW1lbnNpb25zIG9mIGN1cnJlbnQgc2NyZWVuICovXG5cdGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdGNvbnN0IGJveFBlcmNlbnRXaWR0aCA9IChib3hXaWR0aCAvIHNjcmVlbldpZHRoKSAqIDEwMDtcblxuXHRjb25zdCBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSByZXZpZXdQb3MudG9wO1xuXHRjb25zdCBib3hQZXJjZW50SGVpZ2h0ID0gKGJveEhlaWdodCAvIHNjcmVlbkhlaWdodCkgKiAxMDA7XG5cblx0LyogU2V0IHggYW5kIHkgdmFsdWVzIHRvIHBlcmNlbnRhZ2UgZXF1aXZlbGVudCB0byBtYWtlIHRoZSBib3ggcmVzcG9uc2l2ZSAqL1xuXHRsZXQgbGVmdCA9IG9mZnNldDtcblx0bGV0IHRvcCA9IG9mZnNldDtcblxuXHQvKiBDb21wZW5zYXRlIGZvciB0aGUgYm94V2lkdGggaWYgbWFya2VyIGlzIGF0IGVuZCBvZiBob3Jpem9udGFsIHNjcmVlbiAqL1xuXHRpZiAoeFBlcmNlbnQgKyBib3hQZXJjZW50V2lkdGggPiAxMDApIHtcblx0XHRsZWZ0ID0gLWJveFdpZHRoIC0gbWFya2VyU3BhY2VyO1xuXHR9XG5cblx0LyogQ29tcGVuc2F0ZSBmb3IgdGhlIGJveEhlaWdodCBpZiBtYXJrZXIgaXMgYXQgZW5kIG9mIHZlcnRpY2FsIHNjcmVlbiAqL1xuXHRpZiAoeVBlcmNlbnQgKyBib3hQZXJjZW50SGVpZ2h0ID4gMTAwKSB7XG5cdFx0dG9wID0gLWJveEhlaWdodCAtIG1hcmtlclNwYWNlcjtcblx0fVxuXG5cdHJldHVybiB7IGxlZnQ6IGAke2xlZnR9cHhgLCB0b3A6IGAke3RvcH1weGAgfTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2FsY0NvbW1lbnRQb3MgfSBmcm9tICcuL2NhbGNDb21tZW50UG9zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3R5bGVNZW50aW9uIH0gZnJvbSAnLi9zdHlsZU1lbnRpb24nO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3R5bGVNZW50aW9ucyh1c2VycywgaW5wdXQpIHtcblx0Y29uc3QgbWVudGlvbk5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnRpb25zIC5tZW50aW9uc19fbWVudGlvbicpIHx8IFtdO1xuXG5cdGlmIChtZW50aW9uTm9kZXMubGVuZ3RoID4gMCkge1xuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtZW50aW9uTm9kZXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRjb25zdCBtZW50aW9uID0gbWVudGlvbk5vZGVzW2luZGV4XTtcblxuXHRcdFx0Y29uc3QgbWVudGlvbklubmVyID0gbWVudGlvbi5pbm5lckhUTUwucmVwbGFjZSgnQCcsICcnKS50cmltKCk7XG5cdFx0XHRjb25zdCB1c2VyT2ZNZW50aW9uID0gdXNlcnMuZmluZCgodXNlcikgPT4gdXNlci5kaXNwbGF5ID09PSBtZW50aW9uSW5uZXIpO1xuXG5cdFx0XHRtZW50aW9uLnN0eWxlLnNldFByb3BlcnR5KCctLXRoZW1lJywgdXNlck9mTWVudGlvbi51c2VyQ29sb3IpO1xuXG5cdFx0XHRpZiAoaW5wdXQpIHtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0aW5wdXQuZm9jdXMoKTtcblx0XHRcdFx0XHRpbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSgyMDAsIC0xKTtcblx0XHRcdFx0fSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIHVzZVNlbGVjdGlvbiB9IGZyb20gJy4vdXNlU2VsZWN0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlUGFnZVRpdGxlIH0gZnJvbSAnLi91c2VQYWdlVGl0bGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VTdG9yYWdlIH0gZnJvbSAnLi91c2VTdG9yYWdlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4vdXNlRXZlbnRMaXN0ZW5lcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUNsb3NlT25Fc2MgfSBmcm9tICcuL3VzZUNsb3NlT25Fc2MnO1xuIiwiLyogUGFja2FncyAqL1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbi8qIEN1c3RvbSBob29rICovXG5pbXBvcnQgdXNlRXZlbnRMaXN0ZW5lciBmcm9tICcuL3VzZUV2ZW50TGlzdGVuZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDbG9zZU9uRXNjKHN0YXR1cywgdG9nZ2xlKSB7XG5cdC8qIENhbGxiYWNrICovXG5cdGNvbnN0IGhhbmRsZUtleVVwID0gdXNlQ2FsbGJhY2soKHsga2V5IH0pID0+IHtcblx0XHRpZiAoWydFc2NhcGUnXS5pbmNsdWRlcyhrZXkpICYmIHN0YXR1cykgdG9nZ2xlKCk7XG5cdH0pO1xuXG5cdC8qIEhvb2sgKi9cblx0dXNlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBoYW5kbGVLZXlVcCk7XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGVsZW1lbnQgPSB3aW5kb3cpIHtcblx0Ly8gQ3JlYXRlIGEgcmVmIHRoYXQgc3RvcmVzIGhhbmRsZXJcblx0Y29uc3Qgc2F2ZWRIYW5kbGVyID0gdXNlUmVmKCk7XG5cdC8vIFVwZGF0ZSByZWYuY3VycmVudCB2YWx1ZSBpZiBoYW5kbGVyIGNoYW5nZXMuXG5cdC8vIFRoaXMgYWxsb3dzIG91ciBlZmZlY3QgYmVsb3cgdG8gYWx3YXlzIGdldCBsYXRlc3QgaGFuZGxlciAuLi5cblx0Ly8gLi4uIHdpdGhvdXQgdXMgbmVlZGluZyB0byBwYXNzIGl0IGluIGVmZmVjdCBkZXBzIGFycmF5IC4uLlxuXHQvLyAuLi4gYW5kIHBvdGVudGlhbGx5IGNhdXNlIGVmZmVjdCB0byByZS1ydW4gZXZlcnkgcmVuZGVyLlxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNhdmVkSGFuZGxlci5jdXJyZW50ID0gaGFuZGxlcjtcblx0fSwgW2hhbmRsZXJdKTtcblxuXHR1c2VFZmZlY3QoXG5cdFx0KCkgPT4ge1xuXHRcdFx0Ly8gTWFrZSBzdXJlIGVsZW1lbnQgc3VwcG9ydHMgYWRkRXZlbnRMaXN0ZW5lclxuXHRcdFx0Ly8gT25cblx0XHRcdGNvbnN0IGlzU3VwcG9ydGVkID0gZWxlbWVudCAmJiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXI7XG5cdFx0XHRpZiAoIWlzU3VwcG9ydGVkKSByZXR1cm47XG5cdFx0XHQvLyBDcmVhdGUgZXZlbnQgbGlzdGVuZXIgdGhhdCBjYWxscyBoYW5kbGVyIGZ1bmN0aW9uIHN0b3JlZCBpbiByZWZcblx0XHRcdGNvbnN0IGV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHNhdmVkSGFuZGxlci5jdXJyZW50KGV2ZW50KTtcblx0XHRcdC8vIEFkZCBldmVudCBsaXN0ZW5lclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcik7XG5cdFx0XHQvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgb24gY2xlYW51cFxuXHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcik7XG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0W2V2ZW50TmFtZSwgZWxlbWVudF0gLy8gUmUtcnVuIGlmIGV2ZW50TmFtZSBvciBlbGVtZW50IGNoYW5nZXNcblx0KTtcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUGFnZVRpdGxlKHRpdGxlLCB1cGRhdGVQcm9wcyA9IFtdKSB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZG9jdW1lbnQudGl0bGUgPSBgJHt0aXRsZSA/IHRpdGxlICsgJyB8IFBhcmFsbGVsIERhc2hib2FyZCcgOiBkb2N1bWVudC50aXRsZX1gO1xuXHR9LCBbLi4udXBkYXRlUHJvcHNdKTtcbn1cbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTZWxlY3Rpb24oKSB7XG5cdGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoW10pO1xuXG5cdGNvbnN0IHVwZGF0ZVNlbGVjdGVkID0gKGlkKSA9PiB7XG5cdFx0c2V0U2VsZWN0ZWQoKHNlbGVjdGVkKSA9PiB7XG5cdFx0XHRpZiAoc2VsZWN0ZWQuaW5jbHVkZXMoaWQpKSB7XG5cdFx0XHRcdHJldHVybiBzZWxlY3RlZC5maWx0ZXIoKHNlbGVjdGVkSWQpID0+IHNlbGVjdGVkSWQgIT09IGlkKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFsuLi5zZWxlY3RlZCwgaWRdO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlc2V0U2VsZWN0ZWQgPSAoKSA9PiBzZXRTZWxlY3RlZChbXSk7XG5cblx0cmV0dXJuIHsgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkLCByZXNldFNlbGVjdGVkIH07XG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLy8gSG9va1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU3RvcmFnZShrZXksIGluaXRpYWxWYWx1ZSwgc3RvcmFnZVR5cGUgPSAnc2Vzc2lvblN0b3JhZ2UnKSB7XG5cdC8vIFN0YXRlIHRvIHN0b3JlIG91ciB2YWx1ZVxuXHQvLyBQYXNzIGluaXRpYWwgc3RhdGUgZnVuY3Rpb24gdG8gdXNlU3RhdGUgc28gbG9naWMgaXMgb25seSBleGVjdXRlZCBvbmNlXG5cdGNvbnN0IFtzdG9yZWRWYWx1ZSwgc2V0U3RvcmVkVmFsdWVdID0gdXNlU3RhdGUoKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBHZXQgZnJvbSBsb2NhbCBzdG9yYWdlIGJ5IGtleVxuXHRcdFx0Y29uc3QgaXRlbSA9IHdpbmRvd1tzdG9yYWdlVHlwZV0uZ2V0SXRlbShrZXkpO1xuXG5cdFx0XHQvLyBJZiBubyBpdGVtIHZhbHVlIGFuZCBpbml0aWFsVmFsdWUgaXMgcHJlc2VudCwgc2V0IGFzIHZhbHVlXG5cdFx0XHRpZiAoaW5pdGlhbFZhbHVlICYmICFpdGVtKSB7XG5cdFx0XHRcdHdpbmRvd1tzdG9yYWdlVHlwZV0uc2V0SXRlbShrZXksIGluaXRpYWxWYWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFBhcnNlIHN0b3JlZCBqc29uIG9yIGlmIG5vbmUgcmV0dXJuIGluaXRpYWxWYWx1ZVxuXHRcdFx0cmV0dXJuIGl0ZW0gPyBKU09OLnBhcnNlKGl0ZW0pIDogaW5pdGlhbFZhbHVlO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHQvLyBJZiBlcnJvciBhbHNvIHJldHVybiBpbml0aWFsVmFsdWVcblx0XHRcdHJldHVybiBpbml0aWFsVmFsdWU7XG5cdFx0fVxuXHR9KTtcblx0Ly8gUmV0dXJuIGEgd3JhcHBlZCB2ZXJzaW9uIG9mIHVzZVN0YXRlJ3Mgc2V0dGVyIGZ1bmN0aW9uIHRoYXQgLi4uXG5cdC8vIC4uLiBwZXJzaXN0cyB0aGUgbmV3IHZhbHVlIHRvIHN0b3JhZ2UuXG5cdGNvbnN0IHNldFZhbHVlID0gKHZhbHVlKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIEFsbG93IHZhbHVlIHRvIGJlIGEgZnVuY3Rpb24gc28gd2UgaGF2ZSBzYW1lIEFQSSBhcyB1c2VTdGF0ZVxuXHRcdFx0Y29uc3QgdmFsdWVUb1N0b3JlID0gdmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IHZhbHVlKHN0b3JlZFZhbHVlKSA6IHZhbHVlO1xuXHRcdFx0Ly8gU2F2ZSBzdGF0ZVxuXHRcdFx0c2V0U3RvcmVkVmFsdWUodmFsdWVUb1N0b3JlKTtcblx0XHRcdC8vIFNhdmUgdG8gbG9jYWwgc3RvcmFnZVxuXHRcdFx0d2luZG93W3N0b3JhZ2VUeXBlXS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWVUb1N0b3JlKSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihlcnJvcik7XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gW3N0b3JlZFZhbHVlLCBzZXRWYWx1ZV07XG59XG4iLCIvLyBDU1NcbmltcG9ydCAnLi4vc2Nzcy9tYWluLnNjc3MnO1xuXG4vLyBQb2xseWZpbHNcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcblxuLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuXG4vKiBDbGllbnQgKi9cbmNvbnN0IGNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCh7XG5cdGRlZmF1bHRPcHRpb25zOiB7XG5cdFx0cXVlcmllczoge1xuXHRcdFx0cmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxuXHRcdH0sXG5cdH0sXG59KTtcblxuLyogUmVuZGVyICovXG5jb25zdCBhcHBOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuaWYgKGFwcE5vZGUgIT09IG51bGwpIHtcblx0cmVuZGVyKFxuXHRcdDxRdWVyeUNsaWVudFByb3ZpZGVyIHsuLi57IGNsaWVudCB9fT5cblx0XHRcdDxBcHAgLz5cblx0XHQ8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+LFxuXHRcdGFwcE5vZGVcblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBIZWFkZXIsIEJhY2tncm91bmQsIExvZ2luRm9ybSB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxuXHRcdFx0XHQ8QmFja2dyb3VuZCAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVfX3BhbmVsIHBhbmVsIHBhbmVsLS1sb2dpblwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lbF9fYm9keVwiPlxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2UgdGV4dC13aGl0ZSBtYi0wXCI+TG9naW48L2gxPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS03MCB0ZXh0LXdoaXRlIG1iLTZcIj5Mb2dpbiB3aXRoIHlvdXIgZS1tYWlsIGFuZCBwYXNzd29yZDwvcD5cblx0XHRcdFx0XHRcdFx0PExvZ2luRm9ybSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFBhZ2VMb2FkZXIsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IHsgUHJvamVjdERldGFpbEhlYWRlciwgUHJvamVjdERldGFpbEltYWdlcyB9IGZyb20gJy4uL2RvbWFpbi9wcm9qZWN0LWRldGFpbCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZmV0Y2hQcm9qZWN0QnlJZCwgUVVFUllfS0VZUyB9IGZyb20gJy4uL2FwaSc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VQYWdlVGl0bGUgfSBmcm9tICcuLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWwoKSB7XG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBpZDogcHJvamVjdElkIH0gPSB1c2VQYXJhbXMoKTtcblx0Y29uc3QgeyBpc0xvYWRpbmcsIGRhdGEgPSB7fSB9ID0gdXNlUXVlcnkoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcGFyc2VJbnQocHJvamVjdElkKV0sICgpID0+XG5cdFx0ZmV0Y2hQcm9qZWN0QnlJZCh7IHByb2plY3RJZCB9KVxuXHQpO1xuXG5cdC8qIEhvb2tzICovXG5cdHVzZVBhZ2VUaXRsZShkYXRhPy50aXRsZSwgW2RhdGFdKTtcblxuXHQvKiBDb25zdGFudHMgICovXG5cdGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCB1c2VycywgaWQsIGF1dGhvciwgZW1haWwsIHByb2plY3RJbWFnZXMgfSA9IGRhdGE7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PFBhZ2VXcmFwcGVyPlxuXHRcdFx0PFBhZ2VMb2FkZXIgey4uLnsgaXNMb2FkaW5nIH19PlxuXHRcdFx0XHQ8UHJvamVjdERldGFpbEhlYWRlciB7Li4ueyB0aXRsZSwgZGVzY3JpcHRpb24sIHVzZXJzLCBpZCwgYXV0aG9yLCBlbWFpbCB9fSAvPlxuXHRcdFx0XHQ8UHJvamVjdERldGFpbEltYWdlcyB7Li4ueyBwcm9qZWN0SW1hZ2VzLCBwcm9qZWN0SWQ6IGlkIH19IC8+XG5cdFx0XHQ8L1BhZ2VMb2FkZXI+XG5cdFx0PC9QYWdlV3JhcHBlcj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUGFnZUxvYWRlciwgUGFnZVdyYXBwZXIgfSBmcm9tICcuLi9jb21wb25lbnRzJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgeyBQcm9qZWN0UmVzdWx0cywgUHJvamVjdEFkZCB9IGZyb20gJy4uL2RvbWFpbi9wcm9qZWN0LW92ZXJ2aWV3JztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vY29udGV4dC9tYWluQ29udGV4dCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZmV0Y2hQcm9qZWN0c0J5VXNlciwgUVVFUllfS0VZUyB9IGZyb20gJy4uL2FwaSc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VQYWdlVGl0bGUgfSBmcm9tICcuLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RPdmVydmlldygpIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW25ld1Byb2plY3RJZCwgc2V0TmV3UHJvamVjdElkXSA9IHVzZVN0YXRlKCk7XG5cblx0LyogSG9va3MgKi9cblx0dXNlUGFnZVRpdGxlKCdQcm9qZWN0cycpO1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyLCB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhOiBwcm9qZWN0cyA9IFtdIH0gPSB1c2VRdWVyeShcblx0XHRRVUVSWV9LRVlTLlBST0pFQ1RfQllfVVNFUixcblx0XHQoKSA9PiBmZXRjaFByb2plY3RzQnlVc2VyKHsgdXNlcklkOiBjdXJyZW50VXNlcj8uaWQgfSksXG5cdFx0e1xuXHRcdFx0ZW5hYmxlZDogISFjdXJyZW50VXNlcj8uaWQsXG5cdFx0fVxuXHQpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxQYWdlV3JhcHBlcj5cblx0XHRcdDxQYWdlTG9hZGVyIHsuLi57IGlzTG9hZGluZyB9fT5cblx0XHRcdFx0e3VzZXJSb2xlID09PSAnYWRtaW4nICYmIDxQcm9qZWN0QWRkIHsuLi57IHNldE5ld1Byb2plY3RJZCB9fSAvPn1cblx0XHRcdFx0PFByb2plY3RSZXN1bHRzIHsuLi57IHByb2plY3RzLCBuZXdQcm9qZWN0SWQgfX0gLz5cblx0XHRcdDwvUGFnZUxvYWRlcj5cblx0XHQ8L1BhZ2VXcmFwcGVyPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQYWdlTG9hZGVyLCBQYWdlV3JhcHBlciB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCB7IFByb2plY3RSZXZpZXdDYW52YXMgfSBmcm9tICcuLi9kb21haW4vcHJvamVjdC1yZXZpZXcnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGZldGNoUHJvamVjdEltYWdlQnlJZCwgUVVFUllfS0VZUyB9IGZyb20gJy4uL2FwaSc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VQYWdlVGl0bGUgfSBmcm9tICcuLi9ob29rcyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCB7IFJldmlld0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlldygpIHtcblx0Y29uc3QgW2FjdGl2ZVBoYXNlLCBzZXRBY3RpdmVQaGFzZV0gPSB1c2VTdGF0ZSgpO1xuXG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBpZDogcHJvamVjdEltYWdlSWQgfSA9IHVzZVBhcmFtcygpO1xuXHRjb25zdCB7IGlzTG9hZGluZywgZGF0YSwgcmVmZXRjaCB9ID0gdXNlUXVlcnkoXG5cdFx0W1FVRVJZX0tFWVMuUFJPSkVDVF9JTUFHRV9CWV9JRCwgcGFyc2VJbnQocHJvamVjdEltYWdlSWQpXSxcblx0XHQoKSA9PiBmZXRjaFByb2plY3RJbWFnZUJ5SWQoeyBwcm9qZWN0SW1hZ2VJZCwgcGhhc2VJZDogYWN0aXZlUGhhc2UgfSksXG5cdFx0e1xuXHRcdFx0cmVmZXRjaE9uV2luZG93Rm9jdXM6IHRydWUsXG5cdFx0fVxuXHQpO1xuXG5cdC8qIEVmZmVjdHMgKi9cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoYWN0aXZlUGhhc2UpIHJlZmV0Y2goeyBwcm9qZWN0SW1hZ2U6IHByb2plY3RJbWFnZUlkLCBwaGFzZUlkOiBhY3RpdmVQaGFzZSB9KTtcblx0fSwgW2FjdGl2ZVBoYXNlXSk7XG5cblx0LyogSG9va3MgKi9cblx0dXNlUGFnZVRpdGxlKGRhdGE/LnRpdGxlLCBbZGF0YV0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxSZXZpZXdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHByb2plY3RJZDogZGF0YT8ucGFyZW50SWQsIHByb2plY3RJbWFnZUlkLCBhY3RpdmVQaGFzZSwgc2V0QWN0aXZlUGhhc2UgfX0+XG5cdFx0XHQ8UGFnZVdyYXBwZXI+XG5cdFx0XHRcdDxQYWdlTG9hZGVyIHsuLi57IGlzTG9hZGluZyB9fT5cblx0XHRcdFx0XHQ8UHJvamVjdFJldmlld0NhbnZhcyB7Li4uZGF0YX0gLz5cblx0XHRcdFx0PC9QYWdlTG9hZGVyPlxuXHRcdFx0PC9QYWdlV3JhcHBlcj5cblx0XHQ8L1Jldmlld0NvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgSGVhZGVyLCBCYWNrZ3JvdW5kLCBTaWdudXBGb3JtIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ251cCgpIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxuXHRcdFx0XHQ8QmFja2dyb3VuZCAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVfX3BhbmVsIHBhbmVsIHBhbmVsLS1sb2dpblwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lbF9fYm9keVwiPlxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2UgdGV4dC13aGl0ZSBtYi0wXCI+U2lnbiB1cDwvaDE+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTcwIHRleHQtd2hpdGUgbWItNlwiPlNpZ24gdXAgd2l0aCB5b3VyIGUtbWFpbCBhbmQgcGFzc3dvcmQ8L3A+XG5cdFx0XHRcdFx0XHRcdDxTaWdudXBGb3JtIC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIExvZ2luIH0gZnJvbSAnLi9Mb2dpbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpZ251cCB9IGZyb20gJy4vU2lnbnVwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdE92ZXJ2aWV3IH0gZnJvbSAnLi9Qcm9qZWN0T3ZlcnZpZXcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0RGV0YWlsIH0gZnJvbSAnLi9Qcm9qZWN0RGV0YWlsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdFJldmlldyB9IGZyb20gJy4vUHJvamVjdFJldmlldyc7XG4iLCIvKiBQYWdlcyAqL1xuaW1wb3J0IHsgUHJvamVjdE92ZXJ2aWV3LCBQcm9qZWN0RGV0YWlsLCBQcm9qZWN0UmV2aWV3LCBMb2dpbiwgU2lnbnVwIH0gZnJvbSAnLi9wYWdlcyc7XG5cbmV4cG9ydCBjb25zdCBST1VURVMgPSB7XG5cdGxvZ2luOiAnLycsXG5cdHNpZ251cDogJy9zaWdudXAnLFxuXHRwcm9qZWN0czogJy9wcm9qZWN0cycsXG59O1xuXG5jb25zdCByb3V0ZXMgPSBbXG5cdHtcblx0XHRuYW1lOiAnbG9naW4nLFxuXHRcdHBhdGg6ICcvJyxcblx0XHRjb21wb25lbnQ6IExvZ2luLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3NpZ251cCcsXG5cdFx0cGF0aDogJy9zaWdudXAnLFxuXHRcdGNvbXBvbmVudDogU2lnbnVwLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3Byb2plY3Qtb3ZlcnZpZXcnLFxuXHRcdHBhdGg6ICcvcHJvamVjdHMnLFxuXHRcdGNvbXBvbmVudDogUHJvamVjdE92ZXJ2aWV3LFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3Byb2plY3QtZGV0YWlsJyxcblx0XHRwYXRoOiAnL3Byb2plY3RzLzppZCcsXG5cdFx0Y29tcG9uZW50OiBQcm9qZWN0RGV0YWlsLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3Byb2plY3QtcmV2aWV3Jyxcblx0XHRwYXRoOiAnL3Byb2plY3RzLzppZC9yZXZpZXcvOmlkJyxcblx0XHRjb21wb25lbnQ6IFByb2plY3RSZXZpZXcsXG5cdH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XG5cdHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG4iLCJjb25zdCBVU0VSX1JPTEVTID0ge1xuXHRST0xFX0FETUlOOiAnUk9MRV9BRE1JTicsXG5cdFJPTEVfVVNFUjogJ1JPTEVfVVNFUicsXG5cdFJPTEVfVVNFUl9CQVNJQzogJ1JPTEVfVVNFUl9CQVNJQycsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSb2xlKHsgcm9sZXMgfSkge1xuXHRpZiAocm9sZXMuaW5jbHVkZXMoVVNFUl9ST0xFUy5ST0xFX0FETUlOKSkgcmV0dXJuICdhZG1pbic7XG5cdGlmIChyb2xlcy5pbmNsdWRlcyhVU0VSX1JPTEVTLlJPTEVfVVNFUl9CQVNJQykpIHJldHVybiAnYmFzaWMnO1xuXHRpZiAocm9sZXMuaW5jbHVkZXMoVVNFUl9ST0xFUy5ST0xFX1VTRVIpKSByZXR1cm4gJ3VzZXInO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0VtYWlsIH0gZnJvbSAnLi9pc0VtYWlsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0Um9sZSB9IGZyb20gJy4vZ2V0Um9sZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlc2l6ZUltYWdlcyB9IGZyb20gJy4vcmVzaXplSW1hZ2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgfSBmcm9tICcuL2NhcGl0YWxpemVGaXJzdExldHRlcic7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0VtYWlsKGVtYWlsKSB7XG4gICAgcmV0dXJuIC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvLnRlc3QoZW1haWwpO1xufVxuIiwiaW1wb3J0IFJlc2l6ZXIgZnJvbSAncmVhY3QtaW1hZ2UtZmlsZS1yZXNpemVyJztcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG5cdG1heFdpZHRoOiAzMDAsXG5cdG1heEhlaWdodDogMzAwLFxuXHRxdWFsaXR5OiAxMDAsXG5cdHJvdGF0aW9uOiAwLFxuXHRvdXRwdXRUeXBlOiAnZmlsZScsXG59O1xuXG5hc3luYyBmdW5jdGlvbiByZXNpemVJbWFnZVR5cGUoaW1hZ2UsIG9wdGlvbnMpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0UmVzaXplci5pbWFnZUZpbGVSZXNpemVyKFxuXHRcdFx0aW1hZ2UsXG5cdFx0XHRvcHRpb25zLm1heFdpZHRoLFxuXHRcdFx0b3B0aW9ucy5tYXhIZWlnaHQsXG5cdFx0XHRpbWFnZS5wYXRoLnNwbGl0KCcuJykucG9wKCksXG5cdFx0XHRvcHRpb25zLnF1YWxpdHksXG5cdFx0XHRvcHRpb25zLnJvdGF0aW9uLFxuXHRcdFx0KHVyaSkgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKHVyaSk7XG5cdFx0XHR9LFxuXHRcdFx0b3B0aW9ucy5vdXRwdXRUeXBlXG5cdFx0KTtcblx0fSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlc2l6ZUltYWdlKGltYWdlKSB7XG5cdGNvbnN0IHRodW1ibmFpbCA9IGF3YWl0IHJlc2l6ZUltYWdlVHlwZShpbWFnZSwgeyAuLi5kZWZhdWx0T3B0aW9ucywgbWF4V2lkdGg6IDI2OCwgbWF4SGVpZ2h0OiAyMzYgfSk7XG5cdGNvbnN0IHRodW1ibmFpbFJldGluYSA9IGF3YWl0IHJlc2l6ZUltYWdlVHlwZShpbWFnZSwgeyAuLi5kZWZhdWx0T3B0aW9ucywgbWF4V2lkdGg6IDUzNiwgbWF4SGVpZ2h0OiA0NzIgfSk7XG5cblx0cmV0dXJuIHtcblx0XHRvcmlnaW5hbDogaW1hZ2UsXG5cdFx0dGh1bWJuYWlsOiBPYmplY3QuYXNzaWduKHRodW1ibmFpbCwgeyBwcmV2aWV3OiBVUkwuY3JlYXRlT2JqZWN0VVJMKHRodW1ibmFpbCkgfSksXG5cdFx0dGh1bWJuYWlsUmV0aW5hOiBPYmplY3QuYXNzaWduKHRodW1ibmFpbFJldGluYSwgeyBwcmV2aWV3OiBVUkwuY3JlYXRlT2JqZWN0VVJMKHRodW1ibmFpbFJldGluYSkgfSksXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlc2l6ZUltYWdlcyhpbWFnZXMpIHtcblx0cmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKFxuXHRcdGltYWdlcy5tYXAoYXN5bmMgKGltYWdlKSA9PiB7XG5cdFx0XHRyZXR1cm4gYXdhaXQgcmVzaXplSW1hZ2UoaW1hZ2UpO1xuXHRcdH0pXG5cdCk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9