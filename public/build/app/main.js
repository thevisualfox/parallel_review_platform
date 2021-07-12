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
/*! exports provided: addComment, addReply, checkComment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return addComment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addReply", function() { return addReply; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkComment", function() { return checkComment; });
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
/* Add reply | expects commentId id, reply and mentioned array */

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
/* Check comment | expects commentId  */

var checkComment = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref5) {
    var commentId, result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            commentId = _ref5.commentId;
            _context3.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/comments/check/".concat(commentId));

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

  return function checkComment(_x3) {
    return _ref6.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./assets/app/js/api/index.js":
/*!************************************!*\
  !*** ./assets/app/js/api/index.js ***!
  \************************************/
/*! exports provided: signup, login, logout, fetchProjectsByUser, fetchProjectById, addProject, deleteProjects, leaveProjects, editProject, fetchProjectImageById, addProjectImages, deleteProjectImages, editProjectImage, fetchCurrentUser, fetchGobalUsers, fetchProjectUsers, addUser, deleteUser, addComment, addReply, checkComment, nextPhase, QUERY_KEYS */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "checkComment", function() { return _comment__WEBPACK_IMPORTED_MODULE_4__["checkComment"]; });

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
/* harmony import */ var icons_check_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! icons/check.svg */ "./assets/app/img/icons/check.svg");
/* harmony import */ var icons_check_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(icons_check_svg__WEBPACK_IMPORTED_MODULE_3__);
var _excluded = ["title", "type", "theme", "size", "extensionClasses", "isLoading", "contentType", "children", "disabled"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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
      _ref$isLoading = _ref.isLoading,
      isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
      _ref$contentType = _ref.contentType,
      contentType = _ref$contentType === void 0 ? 'text' : _ref$contentType,
      children = _ref.children,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? isLoading : _ref$disabled,
      props = _objectWithoutProperties(_ref, _excluded);

  /* Refs */
  var buttonRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* Constants */

  var buttonHeight = (_buttonRef$current = buttonRef.current) === null || _buttonRef$current === void 0 ? void 0 : _buttonRef$current.getBoundingClientRect().height;
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", _extends({
    ref: buttonRef,
    className: "btn btn-".concat(size, " btn-").concat(theme, " ").concat(extensionClasses, " d-flex align-items-center"),
    style: {
      height: buttonHeight
    }
  }, _objectSpread(_objectSpread({}, props), {}, {
    type: type,
    disabled: disabled
  })), contentType === 'text' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
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
    className: "alert__icon icon icon--10 text-secondary",
    src: icons_check_svg__WEBPACK_IMPORTED_MODULE_3___default.a
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
    },
    onKeyUp: function onKeyUp(event) {
      return event.stopPropagation();
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
/* harmony import */ var _services_getRole__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/getRole */ "./assets/app/js/services/getRole.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */



/* Components */


/* Assets */



/* Api */


/* Services */


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
      projectId = _ref2.id;

  var _ref3 = user !== null && user !== void 0 ? user : {},
      userId = _ref3.id,
      _ref3$roles = _ref3.roles,
      roles = _ref3$roles === void 0 ? [] : _ref3$roles;

  var isAuthor = roles.includes(_services_getRole__WEBPACK_IMPORTED_MODULE_7__["USER_ROLES"].ADMIN);
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
var _excluded = ["parentId", "title", "phase"];

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
      rest = _objectWithoutProperties(_ref, _excluded);

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

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState8 = _slicedToArray(_useState7, 2),
      commentFocused = _useState8[0],
      setCommentFocused = _useState8[1];
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewPagination__WEBPACK_IMPORTED_MODULE_7__["default"], rest)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_project_review_action_bar__WEBPACK_IMPORTED_MODULE_3__["ProjectReviewActionBar"], _objectSpread(_objectSpread({}, rest), {}, {
    title: title,
    phaseNumber: phaseNumber,
    phaseId: phaseId,
    commentsPanelOpen: commentsPanelOpen,
    toggleCommentsPanel: toggleCommentsPanel,
    projectUsers: projectUsers
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
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var icons_check_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/check.svg */ "./assets/app/img/icons/check.svg");
/* harmony import */ var icons_check_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_check_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ "./assets/app/js/api/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../context */ "./assets/app/js/context/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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


/* Assets */


/* Api */


/* Animations */


/* Context */


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

  /* Context */
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_8__["StaticContext"]),
      userRole = _useContext.userRole;
  /* Contants */


  var author = content.author,
      id = content.id,
      checked = content.checked,
      created = content.created,
      comment = content.comment,
      comments = content.comments;
  /* State */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(showInitialReplies),
      _useState2 = _slicedToArray(_useState, 2),
      showReplies = _useState2[0],
      setShowReplies = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(checked),
      _useState4 = _slicedToArray(_useState3, 2),
      isChecked = _useState4[0],
      setIsChecked = _useState4[1];
  /* Mutations */


  var checkCommentMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_6__["checkComment"]);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["User"], {
    user: author
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["UserInfo"], {
    title: author.display,
    subtitle: "/ ".concat(author.organisation),
    layout: 'horizontal',
    size: 'sm'
  }), typeof commentIndex !== 'undefined' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-link ml-auto icon-wrapper icon-wrapper--hsl icon-wrapper--interactive text-decoration-none",
    style: {
      '--theme': author.userColor
    },
    onClick: function onClick() {
      if (userRole !== 'admin') return;
      setIsChecked(!isChecked);
      checkCommentMutation.mutate({
        commentId: id
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["AnimatePresence"], {
    exitBeforeEnter: true
  }, isChecked && userRole === 'admin' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, _extends({
    key: "checked"
  }, _animations__WEBPACK_IMPORTED_MODULE_7__["SCALE_FADE"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_2__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--10",
    src: icons_check_svg__WEBPACK_IMPORTED_MODULE_5___default.a
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].span, _extends({
    key: "not-checked"
  }, _animations__WEBPACK_IMPORTED_MODULE_7__["SCALE_FADE"], {
    className: "text--xs"
  }), commentIndex + 1)))), renderComment(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  var inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
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
  /* Effects */


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var _inputRef$current;

    inputRef === null || inputRef === void 0 ? void 0 : (_inputRef$current = inputRef.current) === null || _inputRef$current === void 0 ? void 0 : _inputRef$current.focus();
  }, [markerPos]);
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
    inputRef: inputRef,
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
  var inputRef = _ref.inputRef,
      comment = _ref.comment,
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
  /* Effects */


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (mentions.length > 0 && inputRef !== null && inputRef !== void 0 && inputRef.current) Object(_services_styleMention__WEBPACK_IMPORTED_MODULE_6__["default"])(projectUsers, inputRef.current);
  }, [mentions, inputRef === null || inputRef === void 0 ? void 0 : inputRef.current]);
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
    inputRef: inputRef,
    autoFocus: autoFocus,
    onKeyUp: function onKeyUp(event) {
      return event.stopPropagation();
    }
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
      projectUsers = _ref.projectUsers;

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
    phaseNumber: phaseNumber
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-auto d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative hr-2"
  }, userRole === 'admin' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_actions__WEBPACK_IMPORTED_MODULE_3__["EditAction"], {
    title: title,
    description: description,
    projectImageId: projectImageId
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
    projectImageId: projectImageId
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-4 d-flex justify-content-end"
  }, userRole === 'admin' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_actions__WEBPACK_IMPORTED_MODULE_3__["ShareAction"], {
    projectUsers: projectUsers
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
      projectImageId = _ref.projectImageId;

  /* Hooks */
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQueryClient"])();
  /* State */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalOpen = _useState2[0],
      setModalOpen = _useState2[1];
  /* Callbacks */


  var toggleModal = function toggleModal() {
    return setModalOpen(!modalOpen);
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
      phaseNumber = _ref.phaseNumber;

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
    return setModalOpen(!modalOpen);
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
      projectImageId = _ref.projectImageId;

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
    return setModalOpen(!modalOpen);
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
    extensionClasses: "mt-3 w-50 mx-auto justify-content-center",
    isLoading: nextPhaseMutation.isLoading,
    disabled: images.length === 0 || nextPhaseMutation.isLoading
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
  var projectUsers = _ref.projectUsers;

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
    return setModalOpen(!modalOpen);
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
/*! exports provided: USER_ROLES, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ROLES", function() { return USER_ROLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return getRole; });
var USER_ROLES = {
  ADMIN: 'ROLE_ADMIN',
  USER: 'ROLE_USER',
  BASIC: 'ROLE_USER_BASIC'
};
function getRole(_ref) {
  var roles = _ref.roles;
  if (roles.includes(USER_ROLES.ADMIN)) return 'admin';
  if (roles.includes(USER_ROLES.BASIC)) return 'basic';
  if (roles.includes(USER_ROLES.USER)) return 'user';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvYmFja2dyb3VuZC1sb2dpbi5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvYmFja2dyb3VuZC1sb2dpbkAyeC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX2ltYWdlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9hZGRfcHJvamVjdC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX3VzZXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2FyY2hpdmUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2NoZWNrLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9jaGV2cm9uLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9jbG9zZS13aGl0ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvY2xvc2Uuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2NvbW1lbnQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2Rhbmdlci5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvZGVsZXRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9lZGl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9sZWF2ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvbmV4dC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvc3Rhci5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvc3VjY2Vzcy5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvdXBsb2FkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy93YXJuaW5nLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9hbmltYXRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvYXBpL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9hcGkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9hcGkvcGhhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9hcGkvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FwaS9wcm9qZWN0SW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9hcGkvc2VjdXJpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9hcGkvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvYWN0aW9uLW1lbnUvQWN0aW9uTWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2FsZXJ0L0FsZXJ0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvYmFja2dyb3VuZC9CYWNrZ3JvdW5kLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvYnV0dG9uL0J1dHRvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2Ryb3B6b25lL0Ryb3B6b25lLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvZHJvcHpvbmUvRHJvcHpvbmVTaW5nbGUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9lZGl0YWJsZS9FZGl0YWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2VkaXRhYmxlL0VkaXRhYmxlQm9keS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9oZWFkZXIvSGVhZGVyTmF2aWdhdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2ltYWdlL2ltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2xvYWRpbmctd3JhcHBlci9Mb2FkaW5nV3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL21vZGFsL01vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvbW9kYWwvTW9kYWxIZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9wYWdlLWxvYWRlci9QYWdlTG9hZGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvcGFnZS13cmFwcGVyL1BhZ2VXcmFwcGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvc2VjdXJpdHkvTG9naW5Gb3JtLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvc2VjdXJpdHkvU2VjdXJpdHlNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3NlY3VyaXR5L1NpZ251cEZvcm0uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9zbGlkZS1pbi9TbGlkZUluLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvdG9vbHRpcC9Ub29sdGlwLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvdXNlci1hZGQvVXNlckFkZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3VzZXItYWRkL1VzZXJBZGRTZWFyY2guanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy91c2VyLWFkZC9Vc2VyQWRkU2VhcmNoUmVzdWx0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3VzZXItYWRkL3NlcnZpY2VzL2ZpbHRlclVzZXJzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy91c2Vycy9Vc2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvdXNlcnMvVXNlclNlbGVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3VzZXJzL1VzZXJzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbnRleHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb250ZXh0L21haW5Db250ZXh0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29udGV4dC9yZXZpZXdDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtZGV0YWlsL1Byb2plY3REZXRhaWxIZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtZGV0YWlsL1Byb2plY3REZXRhaWxJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1kZXRhaWwvUHJvamVjdERldGFpbEltYWdlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1kZXRhaWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1vdmVydmlldy9Qcm9qZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LW92ZXJ2aWV3L1Byb2plY3RBZGQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3Qtb3ZlcnZpZXcvUHJvamVjdEltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LW92ZXJ2aWV3L1Byb2plY3RSZXN1bHRzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LW92ZXJ2aWV3L1Byb2plY3RTbGlkZUluLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LW92ZXJ2aWV3L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdDYW52YXMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdDb21tZW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3Q29tbWVudEFkZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvUHJvamVjdFJldmlld0NvbW1lbnRNZW50aW9ucy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvUHJvamVjdFJldmlld0NvbW1lbnRNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvUHJvamVjdFJldmlld0NvbW1lbnRQYW5lbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvUHJvamVjdFJldmlld0NvbW1lbnRSZXBseS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvUHJvamVjdFJldmlld01hcmtlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvUHJvamVjdFJldmlld1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L3Byb2plY3QtcmV2aWV3LWFjdGlvbi1iYXIvUHJvamVjdFJldmlld0FjdGlvbkJhci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvcHJvamVjdC1yZXZpZXctYWN0aW9uLWJhci9hY3Rpb25zL0VkaXRBY3Rpb24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L3Byb2plY3QtcmV2aWV3LWFjdGlvbi1iYXIvYWN0aW9ucy9QaGFzZUFjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvcHJvamVjdC1yZXZpZXctYWN0aW9uLWJhci9hY3Rpb25zL1BoYXNlTmV4dEFjdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvcHJvamVjdC1yZXZpZXctYWN0aW9uLWJhci9hY3Rpb25zL1NoYXJlQWN0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9wcm9qZWN0LXJldmlldy1hY3Rpb24tYmFyL2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvcHJvamVjdC1yZXZpZXctYWN0aW9uLWJhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9zZXJ2aWNlcy9jYWxjQ29tbWVudFBvcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9zZXJ2aWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9zZXJ2aWNlcy9zdHlsZU1lbnRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9ob29rcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2hvb2tzL3VzZUNsb3NlT25Fc2MuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9ob29rcy91c2VFdmVudExpc3RlbmVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvaG9va3MvdXNlUGFnZVRpdGxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvaG9va3MvdXNlU2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvaG9va3MvdXNlU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9wYWdlcy9Mb2dpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9wYWdlcy9Qcm9qZWN0RGV0YWlsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3BhZ2VzL1Byb2plY3RPdmVydmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9wYWdlcy9Qcm9qZWN0UmV2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3BhZ2VzL1NpZ251cC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3NlcnZpY2VzL2NhcGl0YWxpemVGaXJzdExldHRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3NlcnZpY2VzL2dldFJvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9zZXJ2aWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3NlcnZpY2VzL2lzRW1haWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9zZXJ2aWNlcy9yZXNpemVJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbIkFwcCIsIlJvdXRlckJvZHkiLCJ1c2VTdGF0ZSIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJ1c2VyUm9sZSIsInNldFVzZXJSb2xlIiwidXNlU3RvcmFnZSIsImF0b2IiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlcGxhY2UiLCJ1c2VySWQiLCJ1c2VMb2NhdGlvbiIsInVzZVF1ZXJ5IiwiUVVFUllfS0VZUyIsIkNVUlJFTlRfVVNFUiIsImZldGNoQ3VycmVudFVzZXIiLCJyZXRyeSIsIm9uU3VjY2VzcyIsInVzZXIiLCJnZXRSb2xlIiwiaXNMb2FkaW5nIiwicGF0aG5hbWUiLCJST1VURVMiLCJsb2dpbiIsInNpZ251cCIsImluY2x1ZGVzIiwicHJvamVjdHMiLCJyb3V0ZXMiLCJtYXAiLCJwYXRoIiwiQ29tcG9uZW50IiwiY29tcG9uZW50IiwicHJvcHMiLCJGQURFX0lOIiwiZHVyYXRpb24iLCJlYXNlIiwiaGlkZVByb2dyZXNzQmFyIiwibmV3ZXN0T25Ub3AiLCJwb3NpdGlvbiIsImNsb3NlQnV0dG9uIiwiRUFTRSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiRkFERV9JTl9VUCIsInkiLCJ0eXBlIiwiZGFtcGluZyIsInN0aWZmbmVzcyIsIlNDQUxFX0lOX1VQIiwic2NhbGUiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJUUkFOU0ZPUk1fVVAiLCJTQ0FMRV9GQURFIiwiU1RBR0dFUl9VUCIsImluZGV4IiwiZGVsYXkiLCJTVEFHR0VSX0xFRlQiLCJ4IiwiU0xJREVfSU4iLCJhZGRDb21tZW50IiwicGhhc2VJZCIsImNvbW1lbnQiLCJtZW50aW9uZWQiLCJwYXJhbXMiLCJGb3JtRGF0YSIsImFwcGVuZCIsInhQZXJjZW50IiwieVBlcmNlbnQiLCJsZW5ndGgiLCJheGlvcyIsInBvc3QiLCJyZXN1bHQiLCJkYXRhIiwiYWRkUmVwbHkiLCJjb21tZW50SWQiLCJyZXBseSIsImNoZWNrQ29tbWVudCIsIlBST0pFQ1RfQllfVVNFUiIsIlBST0pFQ1RfQllfSUQiLCJQUk9KRUNUX0lNQUdFX0JZX0lEIiwiR0xPQkFMX1VTRVJTIiwiUFJPSkVDVF9VU0VSUyIsIm5leHRQaGFzZSIsImltYWdlcyIsImZvckVhY2giLCJpbWFnZSIsImltYWdlSW5kZXgiLCJvcmlnaW5hbCIsInRodW1ibmFpbCIsInRodW1ibmFpbFJldGluYSIsImZldGNoUHJvamVjdHNCeVVzZXIiLCJnZXQiLCJmZXRjaFByb2plY3RCeUlkIiwicHJvamVjdElkIiwiYWRkUHJvamVjdCIsImRlbGV0ZVByb2plY3RzIiwicHJvamVjdElkcyIsImlkIiwibGVhdmVQcm9qZWN0cyIsImVkaXRQcm9qZWN0IiwiZm9ybVJlZiIsImN1cnJlbnQiLCJmZXRjaFByb2plY3RJbWFnZUJ5SWQiLCJwcm9qZWN0SW1hZ2VJZCIsInBoYXNlIiwiYWRkUHJvamVjdEltYWdlcyIsImRlbGV0ZVByb2plY3RJbWFnZXMiLCJwcm9qZWN0SW1hZ2VJZHMiLCJlZGl0UHJvamVjdEltYWdlIiwidXJsIiwiZW1haWwiLCJwYXNzd29yZCIsImxvZ291dCIsImZldGNoR29iYWxVc2VycyIsImZldGNoUHJvamVjdFVzZXJzIiwiYWRkVXNlciIsInJlZmVyZXIiLCJkZWxldGVVc2VyIiwiQWN0aW9uTWVudSIsInNlbGVjdGVkIiwicmVzZXRTZWxlY3RlZCIsImFjdGlvbnMiLCJ1c2VDb250ZXh0IiwiU3RhdGljQ29udGV4dCIsImNsb3NlSWNvbiIsImFjdGlvbkluZGV4IiwidGl0bGUiLCJ0aGVtZSIsImhhc1Blcm1pc3Npb24iLCJpY29uIiwiaWNvblNpemUiLCJtdXRhdGlvbiIsImxvYWRlckNsYXNzZXMiLCJhcHBlYXJhbmNlVHlwZXMiLCJ3YXJuaW5nIiwid2FybmluZ0ljb24iLCJkYW5nZXIiLCJlcnJvckljb24iLCJzdWNjZXNzIiwic3VjY2Vzc0ljb24iLCJBbGVydCIsIm1lc3NhZ2UiLCJhcHBlYXJhbmNlIiwiY2xvc2VUb2FzdCIsIkJhY2tncm91bmQiLCJiZyIsImJnUmV0aW5hIiwiQnV0dG9uIiwic2l6ZSIsImV4dGVuc2lvbkNsYXNzZXMiLCJjb250ZW50VHlwZSIsImNoaWxkcmVuIiwiZGlzYWJsZWQiLCJidXR0b25SZWYiLCJ1c2VSZWYiLCJidXR0b25IZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJUZXh0IiwiZGVmYXVsdENsYXNzZXMiLCJJY29uIiwiY2hlY2tJY29uIiwiRHJvcHpvbmUiLCJwb3NpdGl0aW9uIiwicXVlcnlDbGllbnQiLCJ1c2VRdWVyeUNsaWVudCIsInVzZURyb3B6b25lIiwiYWNjZXB0Iiwibm9DbGljayIsIm9uRHJvcCIsImFjY2VwdGVkRmlsZXMiLCJ1cGRhdGVQcm9qZWN0SW1hZ2VzIiwiZ2V0Um9vdFByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImlzRHJhZ0FjdGl2ZSIsImFkZFByb2plY3RJbWFnZXNNdXRhdGlvbiIsInVzZU11dGF0aW9uIiwiaW52YWxpZGF0ZVF1ZXJpZXMiLCJkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24iLCJhY3Rpb24iLCJyZXNpemVJbWFnZXMiLCJyZXNpemVkSW1hZ2VzIiwibXV0YXRlIiwiaXNQYXJlbnREcmFnQWN0aXZlIiwiRHJvcHpvbmVJbm5lciIsImFkZEltYWdlTG9hZGluZyIsIm5vRHJhZ0V2ZW50c0J1YmJsaW5nIiwidXBsb2FkSW1hZ2VJY29uIiwiYWRkSW1hZ2VJY29uIiwiRHJvcHpvbmVTaW5nbGUiLCJzZXRJbWFnZXMiLCJtYXhGaWxlcyIsInByZXZpZXciLCJuYW1lIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJFZGl0YWJsZSIsInN1YnRpdGxlIiwicmVzdCIsIm1vZGFsT3BlbiIsInNldE1vZGFsT3BlbiIsInRvZ2dsZU1vZGFsIiwiZWRpdEljb24iLCJFZGl0YWJsZUJvZHkiLCJmaWVsZHMiLCJtdXRhdGlvbklkIiwibXV0YXRpb25PblN1Y2Nlc3MiLCJlZGl0TXV0YXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsImZpZWxkIiwiZmllbGRJbmRleCIsInNob3VsZEZvY3VzIiwiRmllbGQiLCJkZWZhdWx0VmFsdWUiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaW5wdXRSZWYiLCJ1c2VFZmZlY3QiLCJzZWxlY3QiLCJ0YXJnZXQiLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJIZWFkZXIiLCJIZWFkZXJOYXZpZ2F0aW9uIiwiaGlzdG9yeSIsInVzZUhpc3RvcnkiLCJsb2dvdXRNdXRhdGlvbiIsInB1c2giLCJzZXNzaW9uU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJ0b2FzdCIsIm9uRXJyb3IiLCJJbWFnZSIsImxvYWRlZCIsInNldExvYWRlZCIsInZhcmlhbnRzIiwiaGlkZGVuIiwidmlzaWJsZSIsIm9uTG9hZCIsInNyYyIsIkxvYWRpbmdXcmFwcGVyIiwibG9hZGluZyIsImxvYWRlclNpemUiLCJjbGFzc2VzIiwiTW9kYWwiLCJyZW5kZXJPbkJvZHkiLCJjZW50ZXIiLCJjb21wb25lbnRzIiwiY3VzdG9tQW5pbWF0aW9uIiwiSGVhZGVyQ29tcG9uZW50IiwiTW9kYWxIZWFkZXIiLCJhbmltYXRpb24iLCJ1c2VDbG9zZU9uRXNjIiwicmVuZGVyIiwiY3JlYXRlUG9ydGFsIiwiZG9jdW1lbnQiLCJib2R5IiwiUGFnZUxvYWRlciIsIlBhZ2VXcmFwcGVyIiwiTG9naW5Gb3JtIiwic2hvd1NpZ251cCIsInVzZVBhZ2VUaXRsZSIsInVzZUZvcm0iLCJyZVZhbGlkYXRlTW9kZSIsIm1vZGUiLCJyZWdpc3RlciIsImhhbmRsZVN1Ym1pdCIsImVycm9ycyIsImZvcm1TdGF0ZSIsImxvZ2luTXV0YXRpb24iLCJlcnJvciIsInJlc3BvbnNlIiwib25TdWJtaXQiLCJyZXF1aXJlZCIsIlNlY3VyaXR5TW9kYWwiLCJzZWN1cml0eU1vZGFsT3BlbiIsInNldFNlY3VyaXR5TW9kYWxPcGVuIiwidG9nZ2xlU2VjdXJpdHlNb2RhbCIsInNob3dMb2dpbiIsIlNpZ251cEZvcm0iLCJjb250cm9sIiwicGxhaW5QYXNzd29yZCIsInVzZVdhdGNoIiwic2lnbnVwTXV0YXRpb24iLCJzdGF0dXMiLCJyZXNldCIsInVzZXJuYW1lIiwib3JnYW5pc2F0aW9uIiwibWluTGVuZ3RoIiwicGFzc3dvcmRDb25maXJtIiwidmFsaWRhdGUiLCJTbGlkZUluIiwidG9nZ2xlU2xpZGVJbiIsImRvbUVsZW1lbnQiLCJ2YXJpYW50IiwiVG9vbHRpcCIsImRpc3BsYXkiLCJVc2VyQWRkIiwidXNlcnMiLCJwcm9qZWN0IiwiYWRkVXNlckljb24iLCJVc2VyQWRkU2VhcmNoIiwicXVlcnkiLCJzZXRRdWVyeSIsImZvY3VzZWRVc2VyIiwic2V0Rm9jdXNlZFVzZXIiLCJnbG9iYWxVc2VycyIsImdsb2JhbFVzZXJzTG9hZGluZyIsImZpbHRlcmVkVXNlcnMiLCJmaWx0ZXJVc2VycyIsInF1ZXJ5UmVmIiwiYWRkVXNlck11dGF0aW9uIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlT25LZXlEb3duIiwia2V5IiwiaXNFbWFpbCIsImhhbmRsZUNsaWNrIiwidXNlck11dGF0aW9uTG9hZGluZyIsIlVzZXJBZGRTZWFyY2hSZXN1bHRzIiwicmVzdWx0cyIsIm5ld1VzZXIiLCJ1c2VyQ29sb3IiLCJ1c2VySW5kZXgiLCJsb3dlclF1ZXJ5IiwidG9Mb3dlckNhc2UiLCJleGlzdGluZ1VzZXJzQnlFbWFpbCIsImZpbHRlciIsIlVzZXIiLCJyb2xlcyIsImlzQXV0aG9yIiwiVVNFUl9ST0xFUyIsIkFETUlOIiwiZGVsZXRlVXNlck11dGF0aW9uIiwiZGVsZXRlSWNvbiIsInN0YXJJY29uIiwiVXNlckF2YXRhciIsInVzZXJJbml0aWFscyIsInNwbGl0Iiwid29yZCIsInRvVXBwZXJDYXNlIiwiVXNlckluZm8iLCJsYXlvdXQiLCJVc2VyU2VsZWN0IiwiaXNGb2N1c2VkIiwiaGFuZGxlU3RhdHVzIiwiVXNlcnMiLCJ1c2VMYXlvdXQiLCJzbGljZUFtb3VudCIsIkluZmluaXR5Iiwic2xpY2UiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJSZXZpZXdDb250ZXh0IiwiUHJvamVjdERldGFpbEhlYWRlciIsImRlc2NyaXB0aW9uIiwiYXV0aG9yIiwic3RhdGljQ29udGV4dCIsIlByb2plY3REZXRhaWxJbWFnZSIsInByb2plY3RJbWFnZSIsInVwZGF0ZVNlbGVjdGVkIiwiUHJvamVjdERldGFpbEltYWdlcyIsInByb2plY3RJbWFnZXMiLCJ1c2VTZWxlY3Rpb24iLCJJbWFnZXMiLCJwcm9qZWN0SW1hZ2VJbmRleCIsIlByb2plY3QiLCJQcm9qZWN0QWRkIiwic2V0TmV3UHJvamVjdElkIiwic2V0UHJvamVjdElkIiwic2xpZGVJbk9wZW4iLCJzZXRTbGlkZUluT3BlbiIsImVuYWJsZWQiLCJhZGRNdXRhdGlvbiIsImludmFsaWRhdGVQcm9qZWN0Iiwic2V0VGltZW91dCIsInVwZGF0ZVByb2plY3QiLCJhZGRQcm9qZWN0SWNvbiIsIlByb2plY3RJbWFnZSIsIlByb2plY3RSZXN1bHRzIiwibmV3UHJvamVjdElkIiwibGVhdmVQcm9qZWN0c011dGF0aW9uIiwiZGVsZXRlUHJvamVjdHNNdXRhdGlvbiIsImxlYXZlSWNvbiIsImFyY2hpdmVJY29uIiwicHJvamVjdEluZGV4IiwiUHJvamVjdFNsaWRlSW4iLCJEcm9wem9uZUltYWdlIiwiY3Vyc29yT2Zmc2V0IiwiUHJvamVjdFJldmlld0NhbnZhcyIsInBhcmVudElkIiwicHJvamVjdFVzZXJzIiwiY29tbWVudHMiLCJwaGFzZU51bWJlciIsInJldmlld1JlZiIsIm1hcmtlclBvcyIsInNldE1hcmtlclBvcyIsImNvbW1lbnRzUGFuZWxPcGVuIiwic2V0Q29tbWVudHNQYW5lbE9wZW4iLCJjb21tZW50Rm9jdXNlZCIsInNldENvbW1lbnRGb2N1c2VkIiwidG9nZ2xlQ29tbWVudEFkZE9wZW4iLCJ0b2dnbGVDb21tZW50c1BhbmVsIiwicG9zTWFya2VyIiwiY2xpZW50WCIsImNsaWVudFkiLCJhdXRoZW50aWNhdGVkIiwicmV2aWV3UG9zIiwid2lkdGgiLCJ0b3AiLCJjb21tZW50SW5kZXgiLCJQcm9qZWN0UmV2aWV3Q29tbWVudCIsImNvbnRlbnQiLCJzZXRSZXBseVRvVXNlciIsInJlbmRlckF1dGhvciIsInNob3dJbml0aWFsUmVwbGllcyIsImNoZWNrZWQiLCJjcmVhdGVkIiwic2hvd1JlcGxpZXMiLCJzZXRTaG93UmVwbGllcyIsImlzQ2hlY2tlZCIsInNldElzQ2hlY2tlZCIsImNoZWNrQ29tbWVudE11dGF0aW9uIiwicmVuZGVyQ29tbWVudCIsInVzZXJzUmVnZXgiLCJ1c2Vyc0FycmF5IiwibWF0Y2hBbGwiLCJmaW5kIiwiUHJvamVjdFJldmlld0NvbW1lbnRBZGQiLCJtb2RhbFJlZiIsImNhbGNDb21tZW50UG9zIiwibGVmdCIsInNldENvbW1lbnQiLCJtZW50aW9ucyIsInNldE1lbnRpb25zIiwiZm9jdXMiLCJhZGRDb21tZW50TXV0YXRpb24iLCJwYXJzZUludCIsInRyaW0iLCJhdXRvRm9jdXMiLCJQcm9qZWN0UmV2aWV3Q29tbWVudE1lbnRpb25zIiwic3R5bGVNZW50aW9ucyIsIlN1Z2dlc3Rpb24iLCJfIiwiZW50cnkiLCJoaWdobGlnaHRlZCIsImZvY3VzZWQiLCJQcm9qZWN0UmV2aWV3Q29tbWVudE1vZGFsIiwiY29tbWVudE9wZW4iLCJzZXRDb21tZW50T3BlbiIsInRvZ2dsZUNvbW1lbnQiLCJDb21tZW50Qm94IiwidHJhbnNmb3JtZWRQb3MiLCJzZXRUcmFuc2Zvcm1lZFBvcyIsInJlcGx5VG9Vc2VyIiwiYm94UmVmIiwicmVwbHlUbyIsIlByb2plY3RSZXZpZXdDb21tZW50UGFuZWwiLCJDb21tZW50V2l0aFJlcGx5IiwiUHJvamVjdFJldmlld0NvbW1lbnRSZXBseSIsInNldFJlcGx5IiwiYWRkUmVwbHlNdXRhdGlvbiIsIlByb2plY3RSZXZpZXdNYXJrZXIiLCJsYWJlbCIsIlByb2plY3RSZXZpZXdQYWdpbmF0aW9uIiwiYWxsSW1hZ2VzIiwidXNlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUtleVVwIiwiY3VycmVudEltYWdlIiwiaW5kZXhPZiIsIk51bWJlciIsInByZXZJbWFnZSIsIm5leHRJbWFnZSIsIm5hdmlnYXRlIiwiZGlyZWN0aW9uIiwidG9TdHJpbmciLCJjaGV2cm9uSWNvbiIsIlByb2plY3RSZXZpZXdBY3Rpb25CYXIiLCJhbGxQaGFzZXMiLCJtYXhXaWR0aCIsImNvbW1lbnRJY29uIiwiRWRpdEFjdGlvbiIsIm1vZGFsT3B0aW9ucyIsIlBoYXNlQWN0aW9uIiwiYWN0aXZlUGhhc2UiLCJzZXRBY3RpdmVQaGFzZSIsIm5hdmlnYXRlVG9QaGFzZSIsInBoYXNlSW5kZXgiLCJQaGFzZU5leHRBY3Rpb24iLCJuZXh0UGhhc2VNdXRhdGlvbiIsIm5leHRJY29uIiwiU2hhcmVBY3Rpb24iLCJyZWYiLCJwb3MiLCJtYXJrZXJTcGFjZXIiLCJtYXJrZXJTaXplIiwib2Zmc2V0IiwiYm94V2lkdGgiLCJib3hIZWlnaHQiLCJzY3JlZW5XaWR0aCIsImlubmVyV2lkdGgiLCJib3hQZXJjZW50V2lkdGgiLCJzY3JlZW5IZWlnaHQiLCJpbm5lckhlaWdodCIsImJveFBlcmNlbnRIZWlnaHQiLCJpbnB1dCIsIm1lbnRpb25Ob2RlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtZW50aW9uIiwibWVudGlvbklubmVyIiwiaW5uZXJIVE1MIiwidXNlck9mTWVudGlvbiIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJzZXRTZWxlY3Rpb25SYW5nZSIsInRvZ2dsZSIsInVzZUNhbGxiYWNrIiwiZXZlbnROYW1lIiwiaGFuZGxlciIsImVsZW1lbnQiLCJzYXZlZEhhbmRsZXIiLCJpc1N1cHBvcnRlZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVwZGF0ZVByb3BzIiwic2V0U2VsZWN0ZWQiLCJzZWxlY3RlZElkIiwiaW5pdGlhbFZhbHVlIiwic3RvcmFnZVR5cGUiLCJpdGVtIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzdG9yZWRWYWx1ZSIsInNldFN0b3JlZFZhbHVlIiwidmFsdWVUb1N0b3JlIiwiRnVuY3Rpb24iLCJzdHJpbmdpZnkiLCJFcnJvciIsImNsaWVudCIsIlF1ZXJ5Q2xpZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJxdWVyaWVzIiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJhcHBOb2RlIiwiZ2V0RWxlbWVudEJ5SWQiLCJMb2dpbiIsIlByb2plY3REZXRhaWwiLCJ1c2VQYXJhbXMiLCJQcm9qZWN0T3ZlcnZpZXciLCJQcm9qZWN0UmV2aWV3IiwicmVmZXRjaCIsIlNpZ251cCIsInN0cmluZyIsImNoYXJBdCIsIlVTRVIiLCJCQVNJQyIsInRlc3QiLCJtYXhIZWlnaHQiLCJxdWFsaXR5Iiwicm90YXRpb24iLCJvdXRwdXRUeXBlIiwicmVzaXplSW1hZ2VUeXBlIiwib3B0aW9ucyIsIlByb21pc2UiLCJyZXNvbHZlIiwiUmVzaXplciIsImltYWdlRmlsZVJlc2l6ZXIiLCJwb3AiLCJ1cmkiLCJyZXNpemVJbWFnZSIsIk9iamVjdCIsImFzc2lnbiIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFsbCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNB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QUNORixzQkFBUSxFQUFFRixLQURKO0FBRU5HLHVCQUFTLEVBQUVtZSxNQUFNLENBQUNDLE1BQVAsQ0FBY3BlLFNBQWQsRUFBeUI7QUFBRXdHLHVCQUFPLEVBQUU2WCxHQUFHLENBQUNDLGVBQUosQ0FBb0J0ZSxTQUFwQjtBQUFYLGVBQXpCLENBRkw7QUFHTkMsNkJBQWUsRUFBRWtlLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjbmUsZUFBZCxFQUErQjtBQUFFdUcsdUJBQU8sRUFBRTZYLEdBQUcsQ0FBQ0MsZUFBSixDQUFvQnJlLGVBQXBCO0FBQVgsZUFBL0I7QUFIWCxhQUpSOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFXZSxTQUFlMkYsWUFBOUI7QUFBQTtBQUFBOzs7MEVBQWUsa0JBQTRCakcsTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ0RpZSxPQUFPLENBQUNXLEdBQVIsQ0FDWjVlLE1BQU0sQ0FBQzFELEdBQVA7QUFBQSxpRkFBVyxrQkFBTzRELEtBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQ0dxZSxXQUFXLENBQUNyZSxLQUFELENBRGQ7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFYOztBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURZLENBREM7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7Ozs7Ozs7Ozs7O0FDdENmLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL2FwcC9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9hc3NldHMvYXBwL2pzL21haW4uanNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9iYWNrZ3JvdW5kLWxvZ2luLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9iYWNrZ3JvdW5kLWxvZ2luQDJ4LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hZGRfaW1hZ2Uuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FkZF9wcm9qZWN0LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hZGRfdXNlci5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYXJjaGl2ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY2hlY2suc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2NoZXZyb24uc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Nsb3NlLXdoaXRlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jbG9zZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY29tbWVudC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZGFuZ2VyLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9kZWxldGUuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2VkaXQuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2xlYXZlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9uZXh0LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9zdGFyLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9zdWNjZXNzLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy91cGxvYWQuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3dhcm5pbmcuc3ZnXCI7IiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdCwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBIZWFkZXJOYXZpZ2F0aW9uLCBQYWdlTG9hZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuLyogU2VydmljZXMgKi9cbmltcG9ydCB7IGdldFJvbGUgfSBmcm9tICcuL3NlcnZpY2VzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4vYW5pbWF0aW9ucyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4vY29udGV4dC9tYWluQ29udGV4dCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZmV0Y2hDdXJyZW50VXNlciwgUVVFUllfS0VZUyB9IGZyb20gJy4vYXBpJztcblxuLyogUm91dGVzICovXG5pbXBvcnQgcm91dGVzLCB7IFJPVVRFUyB9IGZyb20gJy4vcm91dGVzJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZVN0b3JhZ2UgfSBmcm9tICcuL2hvb2tzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8Um91dGVyPlxuXHRcdFx0PFJvdXRlckJvZHkgLz5cblx0XHQ8L1JvdXRlcj5cblx0KTtcbn1cblxuY29uc3QgUm91dGVyQm9keSA9ICgpID0+IHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZSgpO1xuXHRjb25zdCBbdXNlclJvbGUsIHNldFVzZXJSb2xlXSA9IHVzZVN0YXRlKFtdKTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBbdXNlcklkXSA9IHVzZVN0b3JhZ2UoJ3VzZXJJZCcsIGF0b2Iod2luZG93LmxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKCc/JywgJycpKSk7XG5cdGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgaXNMb2FkaW5nIH0gPSB1c2VRdWVyeShRVUVSWV9LRVlTLkNVUlJFTlRfVVNFUiwgKCkgPT4gZmV0Y2hDdXJyZW50VXNlcih7IHVzZXJJZCB9KSwge1xuXHRcdHJldHJ5OiBmYWxzZSxcblx0XHRvblN1Y2Nlc3M6ICh1c2VyKSA9PiB7XG5cdFx0XHRzZXRDdXJyZW50VXNlcih1c2VyKTtcblx0XHRcdHNldFVzZXJSb2xlKGdldFJvbGUodXNlcikpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxTdGF0aWNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGN1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlciwgdXNlclJvbGUgfX0+XG5cdFx0XHQ8UGFnZUxvYWRlciB7Li4ueyBpc0xvYWRpbmcgfX0+XG5cdFx0XHRcdDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyPlxuXHRcdFx0XHRcdDxTd2l0Y2ggbG9jYXRpb249e2xvY2F0aW9ufSBrZXk9e2xvY2F0aW9uLnBhdGhuYW1lfT5cblx0XHRcdFx0XHRcdHsvKiBSZWRpcmVjdCB0byAvcHJvamVjdHMgaWYgYSB1c2VyIGlzIGxvZ2dlZCBpbiAqL31cblx0XHRcdFx0XHRcdHtjdXJyZW50VXNlciAmJiBbUk9VVEVTLmxvZ2luLCBST1VURVMuc2lnbnVwXS5pbmNsdWRlcyhsb2NhdGlvbi5wYXRobmFtZSkgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8UmVkaXJlY3QgdG89e1JPVVRFUy5wcm9qZWN0c30gLz5cblx0XHRcdFx0XHRcdCl9XG5cblx0XHRcdFx0XHRcdHsvKiBSZWRpcmVjdCB0byAvbG9naW4gaWYgYSB1c2VyIGlzIG5vdCBsb2dnZWQgaW4gb24gdGhlIC9wcm9qZWN0cyByb3V0ZSAqL31cblx0XHRcdFx0XHRcdHshY3VycmVudFVzZXIgJiYgbG9jYXRpb24ucGF0aG5hbWUuaW5jbHVkZXMoUk9VVEVTLnByb2plY3RzKSAmJiA8UmVkaXJlY3QgdG89e1JPVVRFUy5sb2dpbn0gLz59XG5cblx0XHRcdFx0XHRcdHsvKiBSZW5kZXIgcm91dGVzICovfVxuXHRcdFx0XHRcdFx0e3JvdXRlcy5tYXAoKHsgcGF0aCwgY29tcG9uZW50OiBDb21wb25lbnQsIHByb3BzIH0pID0+IChcblx0XHRcdFx0XHRcdFx0PFJvdXRlIGtleT17cGF0aH0gcGF0aD17cGF0aH0gZXhhY3Q+XG5cdFx0XHRcdFx0XHRcdFx0ey8qIFNob3cgZGlmZmVyZW50IGhlYWRlcnMgYmFzZWQgb24gcm91dGUgKi99XG5cdFx0XHRcdFx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17cGF0aH1cblx0XHRcdFx0XHRcdFx0XHRcdHsuLi5GQURFX0lOfVxuXHRcdFx0XHRcdFx0XHRcdFx0dHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4xLCBlYXNlOiBbMC42NSwgMCwgMC4zNSwgMV0gfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IVtST1VURVMubG9naW4sIFJPVVRFUy5zaWdudXAsICdyZXZpZXcnXS5pbmNsdWRlcyhsb2NhdGlvbi5wYXRobmFtZSkgJiZcblx0XHRcdFx0XHRcdFx0XHRcdFx0IWxvY2F0aW9uLnBhdGhuYW1lLmluY2x1ZGVzKCdyZXZpZXcnKSAmJiA8SGVhZGVyTmF2aWdhdGlvbiAvPn1cblxuXHRcdFx0XHRcdFx0XHRcdFx0ey8qIFJlbmRlciBwYWdlICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbXBvbmVudCB7Li4ueyAuLi5wcm9wcywgY3VycmVudFVzZXIsIHVzZXJSb2xlIH19IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L1JvdXRlPlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC9Td2l0Y2g+XG5cdFx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0PC9QYWdlTG9hZGVyPlxuXG5cdFx0XHR7LyogVG9hc3QgKi99XG5cdFx0XHQ8VG9hc3RDb250YWluZXJcblx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRoaWRlUHJvZ3Jlc3NCYXI6IHRydWUsXG5cdFx0XHRcdFx0bmV3ZXN0T25Ub3A6IHRydWUsXG5cdFx0XHRcdFx0cG9zaXRpb246ICdib3R0b20tbGVmdCcsXG5cdFx0XHRcdFx0Y2xvc2VCdXR0b246IGZhbHNlLFxuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHQ8L1N0YXRpY0NvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG59O1xuIiwiY29uc3QgRUFTRSA9IFswLjY1LCAwLCAwLjM1LCAxXTtcblxuY29uc3QgRkFERV9JTiA9IHtcblx0aW5pdGlhbDoge1xuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdGFuaW1hdGU6IHtcblx0XHRvcGFjaXR5OiAxLFxuXHR9LFxuXHRleGl0OiB7XG5cdFx0b3BhY2l0eTogMCxcblx0fSxcblx0dHJhbnNpdGlvbjoge1xuXHRcdGVhc2U6IEVBU0UsXG5cdFx0ZHVyYXRpb246IDAuMixcblx0fSxcbn07XG5cbmNvbnN0IEZBREVfSU5fVVAgPSAoeSA9IDEwMCkgPT4gKHtcblx0aW5pdGlhbDoge1xuXHRcdHk6IHksXG5cdFx0b3BhY2l0eTogMCxcblx0fSxcblx0YW5pbWF0ZToge1xuXHRcdHk6IDAsXG5cdFx0b3BhY2l0eTogMSxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3ByaW5nJyxcblx0XHRcdGRhbXBpbmc6IDQyLFxuXHRcdFx0c3RpZmZuZXNzOiA4MDAsXG5cdFx0fSxcblx0fSxcblx0ZXhpdDoge1xuXHRcdHk6IHksXG5cdFx0b3BhY2l0eTogMCxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3ByaW5nJyxcblx0XHRcdGRhbXBpbmc6IDQyLFxuXHRcdFx0c3RpZmZuZXNzOiAxMjAwLFxuXHRcdH0sXG5cdH0sXG59KTtcblxuY29uc3QgU0NBTEVfSU5fVVAgPSAoeSA9IDEwMCkgPT4gKHtcblx0aW5pdGlhbDoge1xuXHRcdHk6IHksXG5cdFx0c2NhbGU6IDAuNSxcblx0XHR0cmFuc2Zvcm1PcmlnaW46ICc1MCUgMTAwJScsXG5cdFx0b3BhY2l0eTogMCxcblx0fSxcblx0YW5pbWF0ZToge1xuXHRcdHk6IDAsXG5cdFx0c2NhbGU6IDEsXG5cdFx0b3BhY2l0eTogMSxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3ByaW5nJyxcblx0XHRcdGRhbXBpbmc6IDQyLFxuXHRcdFx0c3RpZmZuZXNzOiA4MDAsXG5cdFx0fSxcblx0fSxcblx0ZXhpdDoge1xuXHRcdHk6IHksXG5cdFx0c2NhbGU6IDAuNSxcblx0XHRvcGFjaXR5OiAwLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdHR5cGU6ICdzcHJpbmcnLFxuXHRcdFx0ZGFtcGluZzogNDIsXG5cdFx0XHRzdGlmZm5lc3M6IDEyMDAsXG5cdFx0fSxcblx0fSxcbn0pO1xuXG5jb25zdCBUUkFOU0ZPUk1fVVAgPSB7XG5cdGluaXRpYWw6IHtcblx0XHR5OiAnMTAwJScsXG5cdH0sXG5cdGFuaW1hdGU6IHtcblx0XHR5OiAnMCUnLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdHR5cGU6ICdzcHJpbmcnLFxuXHRcdFx0ZGFtcGluZzogNDEsXG5cdFx0XHRzdGlmZm5lc3M6IDYwMCxcblx0XHR9LFxuXHR9LFxuXHRleGl0OiB7XG5cdFx0eTogJzEwMCUnLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdHR5cGU6ICdzcHJpbmcnLFxuXHRcdFx0ZGFtcGluZzogNDEsXG5cdFx0XHRzdGlmZm5lc3M6IDEyMDAsXG5cdFx0fSxcblx0fSxcbn07XG5cbmNvbnN0IFNDQUxFX0ZBREUgPSB7XG5cdGluaXRpYWw6IHtcblx0XHRzY2FsZTogMCxcblx0XHRvcGFjaXR5OiAwLFxuXHR9LFxuXHRhbmltYXRlOiB7XG5cdFx0c2NhbGU6IDEsXG5cdFx0b3BhY2l0eTogMSxcblx0fSxcblx0ZXhpdDoge1xuXHRcdHNjYWxlOiAwLFxuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdHRyYW5zaXRpb246IHtcblx0XHRlYXNlOiBFQVNFLFxuXHRcdGR1cmF0aW9uOiAwLjIsXG5cdH0sXG59O1xuXG5jb25zdCBTVEFHR0VSX1VQID0gKGluZGV4ID0gMCkgPT4gKHtcblx0aW5pdGlhbDogeyBvcGFjaXR5OiAwLCB5OiAzNSB9LFxuXHRhbmltYXRlOiB7IG9wYWNpdHk6IDEsIHk6IDAsIHRyYW5zaXRpb246IHsgdHlwZTogJ3NwcmluZycsIGRhbXBpbmc6IDMwLCBzdGlmZm5lc3M6IDQ1MCwgZGVsYXk6IGluZGV4ICogMC4wMzUgfSB9LFxuXHRleGl0OiB7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjI1LCB0cmFuc2l0aW9uOiB7IHR5cGU6ICdzcHJpbmcnLCBkYW1waW5nOiAzMCwgc3RpZmZuZXNzOiA2MDAgfSB9LFxufSk7XG5cbmNvbnN0IFNUQUdHRVJfTEVGVCA9IChpbmRleCA9IDApID0+ICh7XG5cdGluaXRpYWw6IHsgb3BhY2l0eTogMCwgeDogMTAgfSxcblx0YW5pbWF0ZTogeyBvcGFjaXR5OiAxLCB4OiAwLCB0cmFuc2l0aW9uOiB7IHR5cGU6ICdzcHJpbmcnLCBkYW1waW5nOiAzMCwgc3RpZmZuZXNzOiAzMDAsIGRlbGF5OiBpbmRleCAqIDAuMDM1IH0gfSxcblx0ZXhpdDogeyBvcGFjaXR5OiAwLCB4OiAxMCwgdHJhbnNpdGlvbjogeyB0eXBlOiAnc3ByaW5nJywgZGFtcGluZzogMzAsIHN0aWZmbmVzczogNjAwIH0gfSxcbn0pO1xuXG5jb25zdCBTTElERV9JTiA9IHtcblx0aW5pdGlhbDoge1xuXHRcdHg6ICctMTAwJScsXG5cdH0sXG5cdGFuaW1hdGU6IHtcblx0XHR4OiAnMCUnLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdGR1cmF0aW9uOiAwLjIsXG5cdFx0XHRlYXNlOiBbMC42NSwgMCwgMC4zNSwgMV0sXG5cdFx0fSxcblx0fSxcblx0ZXhpdDoge1xuXHRcdHg6ICctMTAwJScsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0ZHVyYXRpb246IDAuMSxcblx0XHRcdGVhc2U6IFswLjY1LCAwLCAwLjM1LCAxXSxcblx0XHR9LFxuXHR9LFxufTtcblxuZXhwb3J0IHsgRkFERV9JTiwgRkFERV9JTl9VUCwgU0NBTEVfSU5fVVAsIFRSQU5TRk9STV9VUCwgU0NBTEVfRkFERSwgU1RBR0dFUl9VUCwgU1RBR0dFUl9MRUZULCBTTElERV9JTiB9O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLyogQWRkIGNvbW1lbnQgfCBleHBlY3RzIHBoYXNlIGlkLCB1c2VyIGlkIGFuZCBmb3JtUmVmIG9iZWN0ICovXG5leHBvcnQgY29uc3QgYWRkQ29tbWVudCA9IGFzeW5jICh7IHBoYXNlSWQsIHVzZXJJZCwgY29tbWVudCwgbWVudGlvbmVkLCBwb3NpdGlvbiB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuXG5cdHBhcmFtcy5hcHBlbmQoJ3VzZXJJZCcsIHVzZXJJZCk7XG5cdHBhcmFtcy5hcHBlbmQoJ2NvbW1lbnQnLCBjb21tZW50KTtcblx0cGFyYW1zLmFwcGVuZCgncG9zaXRpb25YJywgcG9zaXRpb24ueFBlcmNlbnQpO1xuXHRwYXJhbXMuYXBwZW5kKCdwb3NpdGlvblknLCBwb3NpdGlvbi55UGVyY2VudCk7XG5cdHBhcmFtcy5hcHBlbmQoJ3JlZmVyZXInLCB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgnLycsICcnKSk7XG5cblx0aWYgKG1lbnRpb25lZC5sZW5ndGgpIHtcblx0XHRwYXJhbXMuYXBwZW5kKCdtZW50aW9uZWRbXScsIG1lbnRpb25lZCk7XG5cdH1cblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2NvbW1lbnRzL2FkZC8ke3BoYXNlSWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIEFkZCByZXBseSB8IGV4cGVjdHMgY29tbWVudElkIGlkLCByZXBseSBhbmQgbWVudGlvbmVkIGFycmF5ICovXG5leHBvcnQgY29uc3QgYWRkUmVwbHkgPSBhc3luYyAoeyBjb21tZW50SWQsIHJlcGx5LCBtZW50aW9uZWQgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblxuXHRwYXJhbXMuYXBwZW5kKCdyZXBseScsIHJlcGx5KTtcblx0cGFyYW1zLmFwcGVuZCgncmVmZXJlcicsIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKCcvJywgJycpKTtcblxuXHRpZiAobWVudGlvbmVkLmxlbmd0aCkge1xuXHRcdHBhcmFtcy5hcHBlbmQoJ21lbnRpb25lZFtdJywgbWVudGlvbmVkKTtcblx0fVxuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvY29tbWVudHMvcmVwbHkvJHtjb21tZW50SWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIENoZWNrIGNvbW1lbnQgfCBleHBlY3RzIGNvbW1lbnRJZCAgKi9cbmV4cG9ydCBjb25zdCBjaGVja0NvbW1lbnQgPSBhc3luYyAoeyBjb21tZW50SWQgfSkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2NvbW1lbnRzL2NoZWNrLyR7Y29tbWVudElkfWApO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vc2VjdXJpdHknO1xuZXhwb3J0ICogZnJvbSAnLi9wcm9qZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vcHJvamVjdEltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5leHBvcnQgKiBmcm9tICcuL2NvbW1lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9waGFzZSc7XG5cbmV4cG9ydCBjb25zdCBRVUVSWV9LRVlTID0ge1xuXHRDVVJSRU5UX1VTRVI6ICdjdXJyZW50X3VzZXInLFxuXHRQUk9KRUNUX0JZX1VTRVI6ICdwcm9qZWN0X2J5X3VzZXInLFxuXHRQUk9KRUNUX0JZX0lEOiAncHJvamVjdF9ieV9pZCcsXG5cdFBST0pFQ1RfSU1BR0VfQllfSUQ6ICdwcm9qZWN0X2ltYWdlX2J5X2lkJyxcblx0R0xPQkFMX1VTRVJTOiAnZ2xvYmFsX3VzZXJzJyxcblx0UFJPSkVDVF9VU0VSUzogJ3Byb2plY3RfdXNlcnMnLFxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8qIE5leHQgcGhhc2UgfCBleHBlY3RzIHBoYXNlIGlkIGFuZCBpbWFnZSAoYmxvYikgKi9cbmV4cG9ydCBjb25zdCBuZXh0UGhhc2UgPSBhc3luYyAoeyBwaGFzZUlkLCBpbWFnZXMgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblxuXHRpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGltYWdlSW5kZXgpID0+IHtcblx0XHRwYXJhbXMuYXBwZW5kKGBpbWFnZXNbJHtpbWFnZUluZGV4fV1bb3JpZ2luYWxdYCwgaW1hZ2Uub3JpZ2luYWwpO1xuXHRcdHBhcmFtcy5hcHBlbmQoYGltYWdlc1ske2ltYWdlSW5kZXh9XVt0aHVtYm5haWxdYCwgaW1hZ2UudGh1bWJuYWlsKTtcblx0XHRwYXJhbXMuYXBwZW5kKGBpbWFnZXNbJHtpbWFnZUluZGV4fV1bdGh1bWJuYWlsUmV0aW5hXWAsIGltYWdlLnRodW1ibmFpbFJldGluYSk7XG5cdH0pO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvcGhhc2UvbmV4dC8ke3BoYXNlSWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBGZXRjaCBwcm9qZWN0cyBieSB1c2VyIHwgZXhwZWN0cyB1c2VyIGlkICovXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9qZWN0c0J5VXNlciA9IGFzeW5jICh7IHVzZXJJZCB9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9qZWN0cy9nZXQvJHt1c2VySWR9YCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBGZXRjaCBwcm9qZWN0cyBieSBpZCB8IGV4cGVjdHMgcHJvamVjdCBpZCAqL1xuZXhwb3J0IGNvbnN0IGZldGNoUHJvamVjdEJ5SWQgPSBhc3luYyAoeyBwcm9qZWN0SWQgfSkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcHJvamVjdC9nZXQvJHtwcm9qZWN0SWR9YCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBBZGQgcHJvamVjdCAqL1xuZXhwb3J0IGNvbnN0IGFkZFByb2plY3QgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvcHJvamVjdHMvYWRkJyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBEZWxldGUgcHJvamVjdChzKSB8IGV4cGVjdHMgYXJyYXkgb2YgcHJvamVjdElkcyAgKi9cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9qZWN0cyA9IGFzeW5jICh7IHByb2plY3RJZHMgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblx0cHJvamVjdElkcy5mb3JFYWNoKChpZCkgPT4gcGFyYW1zLmFwcGVuZCgncHJvamVjdHNbXScsIGlkKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9kZWxldGVgLCBwYXJhbXMpO1xuXG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBMZWF2ZSBwcm9qZWN0KHMpIHwgZXhwZWN0cyBhcnJheSBvZiBwcm9qZWN0SWRzIGFuZCB1c2VyIGlkICAqL1xuZXhwb3J0IGNvbnN0IGxlYXZlUHJvamVjdHMgPSBhc3luYyAoeyBwcm9qZWN0SWRzLCB1c2VySWQgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblx0cHJvamVjdElkcy5mb3JFYWNoKChpZCkgPT4gcGFyYW1zLmFwcGVuZCgncHJvamVjdHNbXScsIGlkKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9sZWF2ZS8ke3VzZXJJZH1gLCBwYXJhbXMpO1xuXG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBFZGl0IHByb2plY3QgfCBleHBlY3RzIGZvcm1EYXRhIG9iamVjdCBhbmQgcHJvamVjdCBpZCAgKi9cbmV4cG9ydCBjb25zdCBlZGl0UHJvamVjdCA9IGFzeW5jICh7IGZvcm1SZWYsIGlkIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKGZvcm1SZWYuY3VycmVudCk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9lZGl0LyR7aWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBGZXRjaCBwcm9qZWN0SW1hZ2UgYnkgaWQgfCBleHBlY3RzIHByb2plY3QgaW1hZ2UgaWQgYW5kIG9wdGlvbmFsIHBoYXNlSWQgKi9cbmV4cG9ydCBjb25zdCBmZXRjaFByb2plY3RJbWFnZUJ5SWQgPSBhc3luYyAoeyBwcm9qZWN0SW1hZ2VJZCwgcGhhc2VJZCB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IHBoYXNlSWQgPyB7IHBhcmFtczogeyBwaGFzZTogcGhhc2VJZCB9IH0gOiB7fTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvaW1hZ2VzL2dldC8ke3Byb2plY3RJbWFnZUlkfWAsIHsgLi4ucGFyYW1zIH0pO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogQWRkIHByb2plY3RJbWFnZShzKSB8IGV4cGVjdHMgcHJvamVjdCBpZCBhbmQgYXJyYXkgb2YgaW1hZ2VzIChibG9iKSAqL1xuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RJbWFnZXMgPSBhc3luYyAoeyBwcm9qZWN0SWQsIGltYWdlcyB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuXHRpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGltYWdlSW5kZXgpID0+IHtcblx0XHRwYXJhbXMuYXBwZW5kKGBpbWFnZXNbJHtpbWFnZUluZGV4fV1bb3JpZ2luYWxdYCwgaW1hZ2Uub3JpZ2luYWwpO1xuXHRcdHBhcmFtcy5hcHBlbmQoYGltYWdlc1ske2ltYWdlSW5kZXh9XVt0aHVtYm5haWxdYCwgaW1hZ2UudGh1bWJuYWlsKTtcblx0XHRwYXJhbXMuYXBwZW5kKGBpbWFnZXNbJHtpbWFnZUluZGV4fV1bdGh1bWJuYWlsUmV0aW5hXWAsIGltYWdlLnRodW1ibmFpbFJldGluYSk7XG5cdH0pO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvaW1hZ2VzL2FkZC8ke3Byb2plY3RJZH1gLCBwYXJhbXMpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRGVsZXRlIHByb2plY3RJbWFnZShzKSB8IGV4cGVjdHMgcHJvamVjdCBpZCBhbmQgYXJyYXkgb2YgcHJvamVjdEltYWdlSWRzICAqL1xuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3RJbWFnZXMgPSBhc3luYyAoeyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZUlkcyB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuXHRwcm9qZWN0SW1hZ2VJZHMuZm9yRWFjaCgoaWQpID0+IHBhcmFtcy5hcHBlbmQoJ3Byb2plY3RJbWFnZXNbXScsIGlkKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9pbWFnZXMvZGVsZXRlLyR7cHJvamVjdElkfWAsIHBhcmFtcyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBFZGl0IHByb2plY3RJbWFnZSB8IGV4cGVjdHMgZm9ybVJlZiBvYmplY3QgYW5kIHByb2plY3RJbWFnZSBpZCAgKi9cbmV4cG9ydCBjb25zdCBlZGl0UHJvamVjdEltYWdlID0gYXN5bmMgKHsgZm9ybVJlZiwgaWQgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybVJlZi5jdXJyZW50KTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2ltYWdlcy9lZGl0LyR7aWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBTaWdudXAgdG8gcGxhdGZvcm0gfCBleHBlY3RzIGZvcm1SZWYgb2JqZWN0IGFuZCBvcHRpb25hbCB1c2VySWQgKi9cbmV4cG9ydCBjb25zdCBzaWdudXAgPSBhc3luYyAoeyBmb3JtUmVmLCB1c2VySWQgfSkgPT4ge1xuXHRsZXQgdXJsID0gJy9hcGkvc2lnbnVwJztcblx0aWYgKHVzZXJJZCkgdXJsID0gYC9hcGkvc2lnbnVwLyR7dXNlcklkfWA7XG5cblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKGZvcm1SZWYuY3VycmVudCk7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QodXJsLCBwYXJhbXMpO1xuXG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBMb2dpbiB0byBwbGF0Zm9ybSB8IGV4cGVjdHMgZm9ybVJlZiBvYmplY3QgKi9cbmV4cG9ydCBjb25zdCBsb2dpbiA9IGFzeW5jICh7IGZvcm1SZWYgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybVJlZi5jdXJyZW50KTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL2xvZ2luJywge1xuXHRcdGVtYWlsOiBwYXJhbXMuZ2V0KCdlbWFpbCcpLFxuXHRcdHBhc3N3b3JkOiBwYXJhbXMuZ2V0KCdwYXNzd29yZCcpLFxuXHR9KTtcblxuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogTG9nb3V0IGZyb20gcGxhdGZvcm0gKi9cbmV4cG9ydCBjb25zdCBsb2dvdXQgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9sb2dvdXQnKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBGZXRjaCBjdXJyZW50IChsb2dnZWQgaW4pIHVzZXIgfCBleHBlY3RzIHVzZXIgaWQgKi9cbmV4cG9ydCBjb25zdCBmZXRjaEN1cnJlbnRVc2VyID0gYXN5bmMgKHsgdXNlcklkIH0pID0+IHtcblx0bGV0IHVybCA9ICcvYXBpL3VzZXJzL2dldCc7XG5cdGlmICh1c2VySWQpIHVybCA9IGAke3VybH0vJHt1c2VySWR9YDtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIEZldGNoIGFsbCB1c2VycyBpbiBkYiAqL1xuZXhwb3J0IGNvbnN0IGZldGNoR29iYWxVc2VycyA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL3VzZXJzL2dldC9hbGwnKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIEZldGNoIHByb2plY3QgdXNlcnMgKi9cbmV4cG9ydCBjb25zdCBmZXRjaFByb2plY3RVc2VycyA9IGFzeW5jICh7IHByb2plY3RJZCB9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS91c2Vycy9nZXQvcHJvamVjdC8ke3Byb2plY3RJZH1gKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIEFkZCB1c2VyIHRvIHByb2plY3QgfCBleHBlY3RzIHByb2plY3QgaWQgYW5kIHVzZXIgZW1haWwgKi9cbmV4cG9ydCBjb25zdCBhZGRVc2VyID0gYXN5bmMgKHsgcHJvamVjdElkLCBlbWFpbCB9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvdXNlcnMvYWRkLyR7cHJvamVjdElkfWAsIHtcblx0XHRlbWFpbDogZW1haWwsXG5cdFx0cmVmZXJlcjogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoJy8nLCAnJyksXG5cdH0pO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRGVsZXRlIHVzZXIgZnJvbSBwcm9qZWN0IHwgZXhwZWN0cyBwcm9qZWN0IGlkIGFuZCB1c2VyIGlkICovXG5leHBvcnQgY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jICh7IHByb2plY3RJZCwgdXNlcklkIH0pID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS91c2Vycy9kZWxldGUvJHtwcm9qZWN0SWR9YCwgeyB1c2VySWQgfSk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IExvYWRpbmdXcmFwcGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFRSQU5TRk9STV9VUCB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9tYWluQ29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjdGlvbk1lbnUoeyBzZWxlY3RlZCwgcmVzZXRTZWxlY3RlZCwgYWN0aW9ucyB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXYgey4uLlRSQU5TRk9STV9VUH0gY2xhc3NOYW1lPVwiYmFyIGJhci0tcHJvamVjdFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJhcl9fYnRuIGJ0biBidG4tbGluayBkLWlubGluZS1mbGV4IHRleHQtd2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtyZXNldFNlbGVjdGVkfT5cblx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTE0XCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1sLTIgbWItMFwiPntzZWxlY3RlZC5sZW5ndGh9IHNlbGVjdGVkPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gbWwtYXV0b1wiPlxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImJhcl9fbGlzdCBsaXN0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0e2FjdGlvbnMubWFwKFxuXHRcdFx0XHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoZW1lLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNQZXJtaXNzaW9uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uU2l6ZSA9IDEyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtdXRhdGlvbiA9ICgpID0+IHt9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0xvYWRpbmcgPSBmYWxzZSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb25JbmRleFxuXHRcdFx0XHRcdFx0XHRcdCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGhhc1Blcm1pc3Npb24uaW5jbHVkZXModXNlclJvbGUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17YWN0aW9uSW5kZXh9IGNsYXNzTmFtZT1cImxpc3RfX2l0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmFyX19idG4gYnRuIGJ0bi1saW5rIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXttdXRhdGlvbn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS0ke3RoZW1lfSBpY29uLXdyYXBwZXItLWludGVyYWN0aXZlYH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExvYWRpbmdXcmFwcGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkaW5nPXtpc0xvYWRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkZXJTaXplPXsxMn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzZXM9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9hZGVyQ2xhc3NlczogYHBvc2l0aW9uLWFic29sdXRlIGQtZmxleCB0ZXh0LSR7dGhlbWV9YCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdyYXBwZXI9XCJzdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BpY29uIGljb24tLSR7aWNvblNpemV9IHRleHQtJHt0aGVtZX1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2ljb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJidG5fX3RleHQgdGV4dC13aGl0ZSBtbC0yXCI+e3RpdGxlfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gJ2ljb25zL2Nsb3NlLXdoaXRlLnN2Zyc7XG5pbXBvcnQgd2FybmluZ0ljb24gZnJvbSAnaWNvbnMvd2FybmluZy5zdmcnO1xuaW1wb3J0IGVycm9ySWNvbiBmcm9tICdpY29ucy9kYW5nZXIuc3ZnJztcbmltcG9ydCBzdWNjZXNzSWNvbiBmcm9tICdpY29ucy9zdWNjZXNzLnN2Zyc7XG5cbi8qIEdsb2JhbCAqL1xuY29uc3QgYXBwZWFyYW5jZVR5cGVzID0ge1xuXHR3YXJuaW5nOiB7XG5cdFx0dGl0bGU6ICdXYXJuaW5nJyxcblx0XHRpY29uOiB3YXJuaW5nSWNvbixcblx0fSxcblx0ZGFuZ2VyOiB7XG5cdFx0dGl0bGU6ICdFcnJvcicsXG5cdFx0aWNvbjogZXJyb3JJY29uLFxuXHR9LFxuXHRzdWNjZXNzOiB7XG5cdFx0dGl0bGU6ICdTdWNjZXNzJyxcblx0XHRpY29uOiBzdWNjZXNzSWNvbixcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsZXJ0KHsgbWVzc2FnZSwgYXBwZWFyYW5jZSwgY2xvc2VUb2FzdCB9KSB7XG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtLW5vdGlmaWNhdGlvblwiIHJvbGU9XCJhbGVydFwiIGRhdGEtYWxlcnQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDBcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BhbGVydF9faWNvbi13cmFwcGVyIGFsZXJ0X19pY29uLXdyYXBwZXItLSR7YXBwZWFyYW5jZX0gbXItMmB9PlxuXHRcdFx0XHRcdDxSZWFjdFNWR1xuXHRcdFx0XHRcdFx0d3JhcHBlcj1cInN2Z1wiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhbGVydF9faWNvbiBpY29uIGljb24tLTEyXCJcblx0XHRcdFx0XHRcdHNyYz17YXBwZWFyYW5jZVR5cGVzW2FwcGVhcmFuY2VdLmljb259XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1iLTBcIj57YXBwZWFyYW5jZVR5cGVzW2FwcGVhcmFuY2VdLnRpdGxlfTwvcD5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJhbGVydF9fYnRuIGJ0biBidG4tbGluayBtbC1hdXRvXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2Nsb3NlVG9hc3R9PlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xMFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYWxlcnRfX21lc3NhZ2UgdGV4dC0tc20gdGV4dC1tdXRlZC0tNzAgbXItbGctOFwiPnttZXNzYWdlfTwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBiZyBmcm9tICdpbWFnZXMvYmFja2dyb3VuZC1sb2dpbi5qcGcnO1xuaW1wb3J0IGJnUmV0aW5hIGZyb20gJ2ltYWdlcy9iYWNrZ3JvdW5kLWxvZ2luQDJ4LmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhY2tncm91bmQoKSB7XG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxuXHRcdFx0PGltZyBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kX19pbWFnZVwiIHNyYz17Ymd9IHNyY1NldD17YmdSZXRpbmF9IGFsdD1cIkJhY2tncm91bmRcIiAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyoge2Fja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IExvYWRpbmdXcmFwcGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNoZWNrSWNvbiBmcm9tICdpY29ucy9jaGVjay5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24oe1xuXHR0aXRsZSxcblx0dHlwZSA9ICdidXR0b24nLFxuXHR0aGVtZSA9ICdzZWNvbmRhcnknLFxuXHRzaXplID0gJ3NtJyxcblx0ZXh0ZW5zaW9uQ2xhc3NlcyA9ICcnLFxuXHRpc0xvYWRpbmcgPSBmYWxzZSxcblx0Y29udGVudFR5cGUgPSAndGV4dCcsXG5cdGNoaWxkcmVuLFxuXHRkaXNhYmxlZCA9IGlzTG9hZGluZyxcblx0Li4ucHJvcHNcbn0pIHtcblx0LyogUmVmcyAqL1xuXHRjb25zdCBidXR0b25SZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgYnV0dG9uSGVpZ2h0ID0gYnV0dG9uUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8YnV0dG9uXG5cdFx0XHRyZWY9e2J1dHRvblJlZn1cblx0XHRcdGNsYXNzTmFtZT17YGJ0biBidG4tJHtzaXplfSBidG4tJHt0aGVtZX0gJHtleHRlbnNpb25DbGFzc2VzfSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyYH1cblx0XHRcdHN0eWxlPXt7IGhlaWdodDogYnV0dG9uSGVpZ2h0IH19XG5cdFx0XHR7Li4ueyAuLi5wcm9wcywgdHlwZSwgZGlzYWJsZWQgfX0+XG5cdFx0XHR7Y29udGVudFR5cGUgPT09ICd0ZXh0JyA/IDxUZXh0IHsuLi57IHRpdGxlLCBpc0xvYWRpbmcsIGNoaWxkcmVuIH19IC8+IDogPEljb24gey4uLnsgaXNMb2FkaW5nIH19IC8+fVxuXHRcdDwvYnV0dG9uPlxuXHQpO1xufVxuXG5jb25zdCBUZXh0ID0gKHsgdGl0bGUsIGlzTG9hZGluZywgY2hpbGRyZW4gfSkgPT4gKFxuXHQ8TG9hZGluZ1dyYXBwZXJcblx0XHRsb2FkaW5nPXtpc0xvYWRpbmd9XG5cdFx0bG9hZGVyU2l6ZT17MTZ9XG5cdFx0Y2xhc3Nlcz17e1xuXHRcdFx0bG9hZGVyQ2xhc3NlczogJ3Bvc2l0aW9uLWFic29sdXRlIGQtZmxleCB0ZXh0LXNlY29uZGFyeScsXG5cdFx0XHRkZWZhdWx0Q2xhc3NlczogJ2QtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXInLFxuXHRcdH19PlxuXHRcdHtjaGlsZHJlbn1cblx0XHQ8c3BhbiBjbGFzc05hbWU9XCJidG5fX3RleHRcIj57dGl0bGV9PC9zcGFuPlxuXHQ8L0xvYWRpbmdXcmFwcGVyPlxuKTtcblxuY29uc3QgSWNvbiA9ICh7IGlzTG9hZGluZyB9KSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwiaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0tc2Vjb25kYXJ5IGljb24td3JhcHBlci0taW50ZXJhY3RpdmVcIj5cblx0XHQ8TG9hZGluZ1dyYXBwZXJcblx0XHRcdGxvYWRpbmc9e2lzTG9hZGluZ31cblx0XHRcdGxvYWRlclNpemU9ezE0fVxuXHRcdFx0Y2xhc3Nlcz17eyBsb2FkZXJDbGFzc2VzOiAncG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4IHRleHQtc2Vjb25kYXJ5JywgZGVmYXVsdENsYXNzZXM6ICdkLWZsZXgnIH19PlxuXHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJhbGVydF9faWNvbiBpY29uIGljb24tLTEwIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXtjaGVja0ljb259IC8+XG5cdFx0PC9Mb2FkaW5nV3JhcHBlcj5cblx0PC9kaXY+XG4pO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyB1c2VEcm9wem9uZSB9IGZyb20gJ3JlYWN0LWRyb3B6b25lJztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IExvYWRpbmdXcmFwcGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIFNlcnZpY2VzICovXG5pbXBvcnQgeyByZXNpemVJbWFnZXMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNDQUxFX0ZBREUsIEZBREVfSU4gfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkSW1hZ2VJY29uIGZyb20gJ2ljb25zL2FkZF9pbWFnZS5zdmcnO1xuaW1wb3J0IHVwbG9hZEltYWdlSWNvbiBmcm9tICdpY29ucy91cGxvYWQuc3ZnJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBhZGRQcm9qZWN0SW1hZ2VzLCBkZWxldGVQcm9qZWN0SW1hZ2VzLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcHpvbmUoeyBwcm9qZWN0SWQsIHBvc2l0aXRpb24gPSAnbGVmdCcsIGNoaWxkcmVuIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzLCBpc0RyYWdBY3RpdmUgfSA9IHVzZURyb3B6b25lKHtcblx0XHRhY2NlcHQ6ICdpbWFnZS8qJyxcblx0XHRub0NsaWNrOiB0cnVlLFxuXHRcdG9uRHJvcDogKGFjY2VwdGVkRmlsZXMpID0+IHVwZGF0ZVByb2plY3RJbWFnZXMoJ2FkZCcsIHsgaW1hZ2VzOiBhY2NlcHRlZEZpbGVzIH0pLFxuXHR9KTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgYWRkUHJvamVjdEltYWdlc011dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkUHJvamVjdEltYWdlcywge1xuXHRcdG9uU3VjY2VzczogKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSksXG5cdH0pO1xuXG5cdGNvbnN0IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGRlbGV0ZVByb2plY3RJbWFnZXMsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0pLFxuXHR9KTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdXBkYXRlUHJvamVjdEltYWdlcyA9IGFzeW5jIChhY3Rpb24sIHByb3BzKSA9PiB7XG5cdFx0aWYgKGFjdGlvbiA9PT0gJ2FkZCcgJiYgcHJvcHMuaW1hZ2VzKSB7XG5cdFx0XHRjb25zdCByZXNpemVkSW1hZ2VzID0gYXdhaXQgcmVzaXplSW1hZ2VzKHByb3BzLmltYWdlcyk7XG5cblx0XHRcdGFkZFByb2plY3RJbWFnZXNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQsIGltYWdlczogcmVzaXplZEltYWdlcyB9KTtcblx0XHR9XG5cblx0XHRpZiAoYWN0aW9uID09PSAnZGVsZXRlJykgZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgLi4ucHJvcHMgfSk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZVwiIHsuLi5nZXRSb290UHJvcHMoKX0+XG5cdFx0XHQ8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cblx0XHRcdDxEcm9wem9uZUlubmVyXG5cdFx0XHRcdGFkZEltYWdlTG9hZGluZz17YWRkUHJvamVjdEltYWdlc011dGF0aW9uLmlzTG9hZGluZ31cblx0XHRcdFx0ey4uLnsgdXBkYXRlUHJvamVjdEltYWdlcywgaXNQYXJlbnREcmFnQWN0aXZlOiBpc0RyYWdBY3RpdmUsIHBvc2l0aXRpb24gfX1cblx0XHRcdC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctLWVxdWFsaXplZCBndXR0ZXJzLTVcIj5cblx0XHRcdFx0e2NoaWxkcmVuKHsgdXBkYXRlUHJvamVjdEltYWdlcywgaXNMb2FkaW5nOiBkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24uaXNMb2FkaW5nIH0pfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbi8qIElubmVyIGRyb3B6b25lICovXG5jb25zdCBEcm9wem9uZUlubmVyID0gKHsgYWRkSW1hZ2VMb2FkaW5nLCB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc1BhcmVudERyYWdBY3RpdmUsIHBvc2l0aXRpb24gfSkgPT4ge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcywgaXNEcmFnQWN0aXZlIH0gPSB1c2VEcm9wem9uZSh7XG5cdFx0YWNjZXB0OiAnaW1hZ2UvKicsXG5cdFx0bm9EcmFnRXZlbnRzQnViYmxpbmc6IHRydWUsXG5cdFx0b25Ecm9wOiAoYWNjZXB0ZWRGaWxlcykgPT4gdXBkYXRlUHJvamVjdEltYWdlcygnYWRkJywgeyBpbWFnZXM6IGFjY2VwdGVkRmlsZXMgfSksXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZHJvcHpvbmVcIiB7Li4uZ2V0Um9vdFByb3BzKCl9PlxuXHRcdFx0PGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7KGlzRHJhZ0FjdGl2ZSB8fCBpc1BhcmVudERyYWdBY3RpdmUpICYmIChcblx0XHRcdFx0XHQ8bW90aW9uLmRpdiB7Li4uRkFERV9JTn0gY2xhc3NOYW1lPVwiZHJvcHpvbmVfX292ZXJsYXlcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0tc2Vjb25kYXJ5XCIgc3R5bGU9e3sgJy0tc2l6ZSc6IDc1IH19PlxuXHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMzAgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e3VwbG9hZEltYWdlSWNvbn0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0KX1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0PG1vdGlvbi5idXR0b25cblx0XHRcdFx0ey4uLlNDQUxFX0ZBREV9XG5cdFx0XHRcdGtleT1cImFkZC1wcm9qZWN0XCJcblx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdGNsYXNzTmFtZT17YGljb24td3JhcHBlciBpY29uLXdyYXBwZXItLWludGVyYWN0aXZlIGljb24td3JhcHBlci0tc2Vjb25kYXJ5IGJ0biBidG4tbGluayBidG4tLWFkZCBidG4tLWFkZC0ke3Bvc2l0aXRpb259YH1cblx0XHRcdFx0c3R5bGU9e3sgJy0tc2l6ZSc6IDc1IH19PlxuXHRcdFx0XHQ8TG9hZGluZ1dyYXBwZXJcblx0XHRcdFx0XHRsb2FkaW5nPXthZGRJbWFnZUxvYWRpbmd9XG5cdFx0XHRcdFx0Y2xhc3Nlcz17eyBsb2FkZXJDbGFzc2VzOiAncG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4IHRleHQtc2Vjb25kYXJ5JyB9fVxuXHRcdFx0XHRcdGxvYWRlclNpemU9ezMwfT5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMzAgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e2FkZEltYWdlSWNvbn0gLz5cblx0XHRcdFx0PC9Mb2FkaW5nV3JhcHBlcj5cblx0XHRcdDwvbW90aW9uLmJ1dHRvbj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VEcm9wem9uZSB9IGZyb20gJ3JlYWN0LWRyb3B6b25lJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkSW1hZ2VJY29uIGZyb20gJ2ljb25zL2FkZF9pbWFnZS5zdmcnO1xuaW1wb3J0IHVwbG9hZEltYWdlSWNvbiBmcm9tICdpY29ucy91cGxvYWQuc3ZnJztcbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICcuLi8nO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOLCBTQ0FMRV9GQURFIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIFNlcnZpY2VzICovXG5pbXBvcnQgeyByZXNpemVJbWFnZXMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3B6b25lU2luZ2xlKHsgaW1hZ2VzOiBbaW1hZ2VdLCBzZXRJbWFnZXMgfSkge1xuXHRjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcywgaXNEcmFnQWN0aXZlIH0gPSB1c2VEcm9wem9uZSh7XG5cdFx0YWNjZXB0OiAnaW1hZ2UvKicsXG5cdFx0bWF4RmlsZXM6IDEsXG5cdFx0b25Ecm9wOiBhc3luYyAoYWNjZXB0ZWRGaWxlcykgPT4ge1xuXHRcdFx0Y29uc3QgcmVzaXplZEltYWdlcyA9IGF3YWl0IHJlc2l6ZUltYWdlcyhhY2NlcHRlZEZpbGVzKTtcblx0XHRcdHNldEltYWdlcyhyZXNpemVkSW1hZ2VzKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3B6b25lIGRyb3B6b25lLS1zaW5nbGUgbXQtMlwiIHsuLi5nZXRSb290UHJvcHMoKX0+XG5cdFx0XHQ8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9IGV4aXRCZWZvcmVFbnRlcj5cblx0XHRcdFx0eyFpbWFnZSAmJiAoXG5cdFx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRcdHsuLi5TQ0FMRV9GQURFfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0taW50ZXJhY3RpdmUgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnlcIlxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgJy0tc2l6ZSc6IDQ0IH19PlxuXHRcdFx0XHRcdFx0e2lzRHJhZ0FjdGl2ZSA/IChcblx0XHRcdFx0XHRcdFx0PG1vdGlvbi5kaXYga2V5PVwidXBsb2FkXCIgey4uLlNDQUxFX0ZBREV9PlxuXHRcdFx0XHRcdFx0XHRcdDxSZWFjdFNWR1xuXHRcdFx0XHRcdFx0XHRcdFx0d3JhcHBlcj1cInN2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpY29uIGljb24tLTIwIHRleHQtc2Vjb25kYXJ5XCJcblx0XHRcdFx0XHRcdFx0XHRcdHNyYz17dXBsb2FkSW1hZ2VJY29ufVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2IGtleT1cImFkZFwiIHsuLi5TQ0FMRV9GQURFfT5cblx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMjAgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e2FkZEltYWdlSWNvbn0gLz5cblx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtpbWFnZSAmJiAoXG5cdFx0XHRcdFx0PG1vdGlvbi5kaXYga2V5PVwiY29udGFpbmVyXCIgey4uLkZBREVfSU59IGNsYXNzTmFtZT1cImRyb3B6b25lX19jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJkcm9wem9uZV9faW1hZ2VcIlxuXHRcdFx0XHRcdFx0XHRzcmM9e2ltYWdlLnRodW1ibmFpbC5wcmV2aWV3fVxuXHRcdFx0XHRcdFx0XHRzcmNTZXQ9e2Ake2ltYWdlLnRodW1ibmFpbFJldGluYS5wcmV2aWV3fSAyeGB9XG5cdFx0XHRcdFx0XHRcdGFsdD17aW1hZ2UudGh1bWJuYWlsLm5hbWV9XG5cdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIGRyb3B6b25lX19pbWFnZS1kZWxldGUgcC0wXCJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHRcdFx0c2V0SW1hZ2VzKFtdKTtcblx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJkcm9wem9uZV9faW1hZ2UtZGVsZXRlLWljb24gaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0tZGFuZ2VyIG14LWF1dG9cIlxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7ICctLXNpemUnOiA1MCB9fT5cblx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTQgdGV4dC1kYW5nZXIgbXQtMFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0KX1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgRWRpdGFibGVCb2R5IGZyb20gJy4vRWRpdGFibGVCb2R5JztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgZWRpdEljb24gZnJvbSAnaWNvbnMvZWRpdC5zdmcnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdGFibGUoeyB0aXRsZSwgc3VidGl0bGUgPSAnU2F2ZSB3aGVuIHJlYWR5JywgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZU1vZGFsID0gKCkgPT4gc2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZWRpdGFibGUgZC1mbGV4IGFsaWduLWl0ZW1zLWJhc2VsaW5lIHBvc2l0aW9uLXJlbGF0aXZlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVkaXRhYmxlX19jb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxuXHRcdFx0e3VzZXJSb2xlID09PSAnYWRtaW4nICYmIChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJlZGl0YWJsZV9fdG9nZ2xlIGJ0biBidG4tbGluayBpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnkgaWNvbi13cmFwcGVyLS1pbnRlcmFjdGl2ZSBzdHJldGNoZWQtbGluayBtbC0zXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfVxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgJy0tc2l6ZSc6IDI1IH19PlxuXHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEwIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXtlZGl0SWNvbn0gLz5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8TW9kYWwgey4uLnsgdGl0bGUsIHN1YnRpdGxlLCBtb2RhbE9wZW4sIHRvZ2dsZU1vZGFsIH19PlxuXHRcdFx0XHRcdFx0PEVkaXRhYmxlQm9keSB7Li4ueyB0b2dnbGVNb2RhbCwgLi4ucmVzdCB9fSAvPlxuXHRcdFx0XHRcdDwvTW9kYWw+XG5cdFx0XHRcdDwvPlxuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGV4dGFyZWFBdXRvc2l6ZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogRWxlbWVudHMgKi9cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBTZXJ2aWNlcyAqL1xuaW1wb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0YWJsZUJvZHkoeyBmaWVsZHMsIHRvZ2dsZU1vZGFsLCBtdXRhdGlvbiwgbXV0YXRpb25JZCwgbXV0YXRpb25PblN1Y2Nlc3MgfSkge1xuXHQvKiBSZWZzICovXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgZWRpdE11dGF0aW9uID0gdXNlTXV0YXRpb24obXV0YXRpb24sIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdG11dGF0aW9uT25TdWNjZXNzKCk7XG5cdFx0XHR0b2dnbGVNb2RhbCgpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxmb3JtXG5cdFx0XHRyZWY9e2Zvcm1SZWZ9XG5cdFx0XHRjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtZ3Jvdy0xIHBvc2l0aW9uLXJlbGF0aXZlXCJcblx0XHRcdG9uU3VibWl0PXsoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZWRpdE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYsIGlkOiBtdXRhdGlvbklkIH0pO1xuXHRcdFx0fX0+XG5cdFx0XHR7ZmllbGRzLm1hcCgoZmllbGQsIGZpZWxkSW5kZXgpID0+IHtcblx0XHRcdFx0cmV0dXJuIDxGaWVsZCBrZXk9e2ZpZWxkSW5kZXh9IHsuLi57IC4uLmZpZWxkLCBzaG91bGRGb2N1czogZmllbGRJbmRleCA9PT0gMCB9fSAvPjtcblx0XHRcdH0pfVxuXHRcdFx0PEJ1dHRvblxuXHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdHRpdGxlOiAnU2F2ZScsXG5cdFx0XHRcdFx0Y29udGVudFR5cGU6IGZpZWxkcy5sZW5ndGggPT09IDEgPyAnaWNvbicgOiAndGV4dCcsXG5cdFx0XHRcdFx0ZXh0ZW5zaW9uQ2xhc3NlczogZmllbGRzLmxlbmd0aCA9PT0gMSA/ICdmb3JtLWNvbnRyb2wtYnRuJyA6ICd3LTUwIGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtMycsXG5cdFx0XHRcdFx0dGhlbWU6IGZpZWxkcy5sZW5ndGggPT09IDEgPyAnZGVmYXVsdCcgOiAnc2Vjb25kYXJ5Jyxcblx0XHRcdFx0XHRpc0xvYWRpbmc6IGVkaXRNdXRhdGlvbi5pc0xvYWRpbmcsXG5cdFx0XHRcdFx0dHlwZTogJ3N1Ym1pdCcsXG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdDwvZm9ybT5cblx0KTtcbn1cblxuY29uc3QgRmllbGQgPSAoeyBuYW1lLCBkZWZhdWx0VmFsdWUsIHNob3VsZEZvY3VzID0gZmFsc2UgfSkgPT4ge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGRlZmF1bHRWYWx1ZSk7XG5cblx0LyogUmVmcyAqL1xuXHRjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIEVmZmVjdHMgKi9cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoaW5wdXRSZWY/LmN1cnJlbnQgJiYgc2hvdWxkRm9jdXMpIGlucHV0UmVmPy5jdXJyZW50Py5zZWxlY3QoKTtcblx0fSwgW10pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9e25hbWV9PlxuXHRcdFx0XHR7bmFtZX1cblx0XHRcdDwvbGFiZWw+XG5cdFx0XHQ8VGV4dGFyZWFBdXRvc2l6ZVxuXHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLS10ZXh0XCJcblx0XHRcdFx0aWQ9e25hbWV9XG5cdFx0XHRcdG5hbWU9e25hbWV9XG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxuXHRcdFx0XHRvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0VmFsdWUodmFsdWUpfVxuXHRcdFx0XHRyZWY9e2lucHV0UmVmfVxuXHRcdFx0XHRwbGFjZWhvbGRlcj17Y2FwaXRhbGl6ZUZpcnN0TGV0dGVyKG5hbWUpfVxuXHRcdFx0XHRvbkZvY3VzPXsoKSA9PiBpbnB1dFJlZi5jdXJyZW50LnNlbGVjdCgpfVxuXHRcdFx0XHRvbktleVVwPXsoZXZlbnQpID0+IGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpfVxuXHRcdFx0Lz5cblx0XHQ8Lz5cblx0KTtcbn07XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIFJvdXRlcyAqL1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmhlYWRlciBjbGFzc05hbWU9XCJtYWluLWhlYWRlclwiIHsuLi5GQURFX0lOfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHB4LTUgcHQtNSBweC1sZy02IHB0LWxnLTYgcHgteGwtMTIgcHQteGwtMTJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWhlYWRlcl9fbG9nbyBsb2dvXCI+XG5cdFx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPVwibG9nb19fbGluayB0ZXh0LXJlc2V0XCIgdG89e1JPVVRFUy5sb2dpbn0gdGl0bGU9XCJQYXJhbGxlbCBEYXNoYm9hcmRcIj5cblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJsb2dvX190aXRsZSB0ZXh0LXVwcGVyY2FzZSBtYi0wXCI+UGFyYWxsZWw8L2gyPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9nb19fc3VidGl0bGUgdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtbGlnaHQgbXQtbjFcIj5EYXNoYm9hcmQ8L3A+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbW90aW9uLmhlYWRlcj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9tYWluQ29udGV4dCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgbG9nb3V0IH0gZnJvbSAnLi4vLi4vYXBpL3NlY3VyaXR5JztcblxuLyogUm91dGVzICovXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuLi8uLi9yb3V0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXJOYXZpZ2F0aW9uKCkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXHRjb25zdCB7IHNldEN1cnJlbnRVc2VyIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBsb2dvdXRNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGxvZ291dCwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0aGlzdG9yeS5wdXNoKFJPVVRFUy5sb2dpbik7XG5cdFx0XHRzZXRDdXJyZW50VXNlcihudWxsKTtcblx0XHRcdHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXJJZCcpO1xuXG5cdFx0XHR0b2FzdCg8QWxlcnQgbWVzc2FnZT17J1N1Y2Nlc3NmdWxseSBsb2dnZWQgb3V0ISd9IGFwcGVhcmFuY2U9XCJzdWNjZXNzXCIgLz4pO1xuXHRcdH0sXG5cdFx0b25FcnJvcjogKCkgPT4gdG9hc3QoPEFsZXJ0IG1lc3NhZ2U9eydTb21ldGhpbmcgd2VudCB3cm9uZyEnfSBhcHBlYXJhbmNlPVwiZGFuZ2VyXCIgLz4pLFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8aGVhZGVyIGNsYXNzTmFtZT1cIm1haW4taGVhZGVyIG1haW4taGVhZGVyLS1wcm9qZWN0c1wiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWhlYWRlcl9fd3JhcHBlciBkLWZsZXggYWxpZ24taXRlbXMtZW5kXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWhlYWRlcl9fbG9nbyBsb2dvXCI+XG5cdFx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9XCJsb2dvX19saW5rIHRleHQtcmVzZXRcIiB0bz17Uk9VVEVTLnByb2plY3RzfSB0aXRsZT1cIlBhcmFsbGVsIERhc2hib2FyZFwiPlxuXHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwibG9nb19fdGl0bGUgdGV4dC11cHBlcmNhc2UgdGV4dC13aGl0ZSBtYi0wXCI+UGFyYWxsZWw8L2gyPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2dvX19zdWJ0aXRsZSB0ZXh0LXVwcGVyY2FzZSB0ZXh0LXdoaXRlIGZvbnQtd2VpZ2h0LWxpZ2h0IG10LW4xXCI+XG5cdFx0XHRcdFx0XHRcdFx0RGFzaGJvYXJkXG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4taGVhZGVyX19uYXYgbWwtYXV0b1wiPlxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtLXByaW1hcnlcIj5cblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZj1cInt7IHBhdGgoJ2FwcF9sb2dvdXQnKSB9fVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT1cIkxvZ291dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuYXYtbGluayBidG4gYnRuLWxpbmsgdGV4dC1yZXNldFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBsb2dvdXRNdXRhdGlvbi5tdXRhdGUoKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuYXYtdGV4dFwiPkxvZ291dDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9oZWFkZXI+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHByb3BzKSB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtsb2FkZWQsIHNldExvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0LyogQ29uc3RhbnRzKi9cblx0Y29uc3QgdHJhbnNpdGlvbiA9IHtcblx0XHRkdXJhdGlvbjogMC4yLFxuXHRcdGVhc2U6IFswLjY1LCAwLCAwLjM1LCAxXSxcblx0fTtcblxuXHRjb25zdCB2YXJpYW50cyA9IHtcblx0XHRoaWRkZW46IHtcblx0XHRcdG9wYWNpdHk6IDAsXG5cdFx0XHR0cmFuc2l0aW9uLFxuXHRcdH0sXG5cdFx0dmlzaWJsZToge1xuXHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdHRyYW5zaXRpb24sXG5cdFx0fSxcblx0fTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3Qgb25Mb2FkID0gKCkgPT4gc2V0TG9hZGVkKHRydWUpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uaW1nXG5cdFx0XHRrZXk9e3Byb3BzLnNyY31cblx0XHRcdGluaXRpYWw9XCJoaWRkZW5cIlxuXHRcdFx0YW5pbWF0ZT17bG9hZGVkID8gJ3Zpc2libGUnIDogJ2hpZGRlbid9XG5cdFx0XHR7Li4ueyAuLi5wcm9wcywgb25Mb2FkLCB2YXJpYW50cyB9fVxuXHRcdC8+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEFjdGlvbk1lbnUgfSBmcm9tICcuL2FjdGlvbi1tZW51L0FjdGlvbk1lbnUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBbGVydCB9IGZyb20gJy4vYWxlcnQvQWxlcnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYWNrZ3JvdW5kIH0gZnJvbSAnLi9iYWNrZ3JvdW5kL0JhY2tncm91bmQnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsIH0gZnJvbSAnLi9tb2RhbC9Nb2RhbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsSGVhZGVyIH0gZnJvbSAnLi9tb2RhbC9Nb2RhbEhlYWRlcic7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uIH0gZnJvbSAnLi9idXR0b24vQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcHpvbmUgfSBmcm9tICcuL2Ryb3B6b25lL0Ryb3B6b25lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcHpvbmVTaW5nbGUgfSBmcm9tICcuL2Ryb3B6b25lL0Ryb3B6b25lU2luZ2xlJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBFZGl0YWJsZSB9IGZyb20gJy4vZWRpdGFibGUvRWRpdGFibGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFZGl0YWJsZUJvZHkgfSBmcm9tICcuL2VkaXRhYmxlL0VkaXRhYmxlQm9keSc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuL2xvYWRpbmctd3JhcHBlci9Mb2FkaW5nV3JhcHBlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNsaWRlSW4gfSBmcm9tICcuL3NsaWRlLWluL1NsaWRlSW4nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYWdlTG9hZGVyIH0gZnJvbSAnLi9wYWdlLWxvYWRlci9QYWdlTG9hZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFnZVdyYXBwZXIgfSBmcm9tICcuL3BhZ2Utd3JhcHBlci9QYWdlV3JhcHBlcic7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlckFkZCB9IGZyb20gJy4vdXNlci1hZGQvVXNlckFkZCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJBZGRTZWFyY2ggfSBmcm9tICcuL3VzZXItYWRkL1VzZXJBZGRTZWFyY2gnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VyQWRkU2VhcmNoUmVzdWx0cyB9IGZyb20gJy4vdXNlci1hZGQvVXNlckFkZFNlYXJjaFJlc3VsdHMnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlYWRlciB9IGZyb20gJy4vaGVhZGVyL0hlYWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEhlYWRlck5hdmlnYXRpb24gfSBmcm9tICcuL2hlYWRlci9IZWFkZXJOYXZpZ2F0aW9uJztcblxuZXhwb3J0ICogZnJvbSAnLi91c2Vycy9Vc2VyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlciB9IGZyb20gJy4vdXNlcnMvVXNlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJzIH0gZnJvbSAnLi91c2Vycy9Vc2Vycyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJTZWxlY3QgfSBmcm9tICcuL3VzZXJzL1VzZXJTZWxlY3QnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFNlY3VyaXR5TW9kYWwgfSBmcm9tICcuL3NlY3VyaXR5L1NlY3VyaXR5TW9kYWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2dpbkZvcm0gfSBmcm9tICcuL3NlY3VyaXR5L0xvZ2luRm9ybSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpZ251cEZvcm0gfSBmcm9tICcuL3NlY3VyaXR5L1NpZ251cEZvcm0nO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEltYWdlIH0gZnJvbSAnLi9pbWFnZS9pbWFnZSc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgVG9vbHRpcCB9IGZyb20gJy4vdG9vbHRpcC9Ub29sdGlwJztcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTQ0FMRV9GQURFIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRpbmdXcmFwcGVyKHsgbG9hZGluZywgY2hpbGRyZW4sIGxvYWRlclNpemUgPSA0MCwgY2xhc3NlcyA9IHt9IH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgbG9hZGVyQ2xhc3NlcyA9ICdwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXgnLCBkZWZhdWx0Q2xhc3NlcyA9ICcnIH0gPSBjbGFzc2VzO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9PlxuXHRcdFx0e2xvYWRpbmcgPyAoXG5cdFx0XHRcdDxtb3Rpb24uZGl2IGtleT1cImxvYWRlclwiIGNsYXNzTmFtZT17bG9hZGVyQ2xhc3Nlc30gey4uLlNDQUxFX0ZBREV9PlxuXHRcdFx0XHRcdDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwiaW5oZXJpdFwiIHNpemU9e2xvYWRlclNpemV9IC8+XG5cdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxtb3Rpb24uZGl2IGtleT1cImRlZmF1bHRcIiBjbGFzc05hbWU9e2RlZmF1bHRDbGFzc2VzfSB7Li4uU0NBTEVfRkFERX0+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQpfVxuXHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IENsaWNrQXdheUxpc3RlbmVyIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCBNb2RhbEhlYWRlciBmcm9tICcuL01vZGFsSGVhZGVyJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiwgRkFERV9JTl9VUCB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlQ2xvc2VPbkVzYyB9IGZyb20gJy4uLy4uL2hvb2tzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwoe1xuXHR0aXRsZSxcblx0c3VidGl0bGUsXG5cdG1vZGFsT3Blbixcblx0dG9nZ2xlTW9kYWwsXG5cdGNoaWxkcmVuLFxuXHRyZW5kZXJPbkJvZHkgPSB0cnVlLFxuXHRjZW50ZXIgPSB0cnVlLFxuXHRleHRlbnNpb25DbGFzc2VzLFxuXHRjb21wb25lbnRzID0ge30sXG5cdGN1c3RvbUFuaW1hdGlvbixcbn0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgSGVhZGVyQ29tcG9uZW50ID0gTW9kYWxIZWFkZXIgfSA9IGNvbXBvbmVudHM7XG5cdGNvbnN0IGFuaW1hdGlvbiA9IGN1c3RvbUFuaW1hdGlvbiA/PyBGQURFX0lOX1VQKCk7XG5cblx0LyogSG9va3MgKi9cblx0dXNlQ2xvc2VPbkVzYyhtb2RhbE9wZW4sIHRvZ2dsZU1vZGFsKTtcblxuXHRjb25zdCByZW5kZXIgPSAoKSA9PiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdHttb2RhbE9wZW4gJiYgKFxuXHRcdFx0XHQ8Q2xpY2tBd2F5TGlzdGVuZXIgb25DbGlja0F3YXk9e3RvZ2dsZU1vZGFsfT5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGN1c3RvbS1tb2RhbCAke2NlbnRlciAmJiAnY3VzdG9tLW1vZGFsLS1jZW50ZXInfSAke2V4dGVuc2lvbkNsYXNzZXN9YH0+XG5cdFx0XHRcdFx0XHR7cmVuZGVyT25Cb2R5ICYmIChcblx0XHRcdFx0XHRcdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsLW92ZXJsYXlcIiB7Li4uRkFERV9JTn0gb25DbGljaz17dG9nZ2xlTW9kYWx9IC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRcdFx0a2V5PVwiY3VzdG9tLW1vZGFsLWNvbnRlbnRcIlxuXHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2NvbnRlbnQgYm9yZGVyIHAtNVwiXG5cdFx0XHRcdFx0XHRcdHsuLi5hbmltYXRpb259PlxuXHRcdFx0XHRcdFx0XHQ8SGVhZGVyQ29tcG9uZW50IHsuLi57IHRpdGxlLCBzdWJ0aXRsZSwgdG9nZ2xlTW9kYWwgfX0gLz5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2JvZHkgZC1mbGV4IG10LTJcIj57Y2hpbGRyZW59PC9kaXY+XG5cdFx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvQ2xpY2tBd2F5TGlzdGVuZXI+XG5cdFx0XHQpfVxuXHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHQpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRpZiAocmVuZGVyT25Cb2R5KSB7XG5cdFx0cmV0dXJuIGNyZWF0ZVBvcnRhbChyZW5kZXIoKSwgZG9jdW1lbnQuYm9keSk7XG5cdH1cblxuXHRyZXR1cm4gcmVuZGVyKCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gJ2ljb25zL2Nsb3NlLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsSGVhZGVyKHsgdGl0bGUsIHN1YnRpdGxlLCB0b2dnbGVNb2RhbCB9KSB7XG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19oZWFkZXIgZC1mbGV4IGFsaWduLWl0ZW1zLXN0YXJ0XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDBcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0xMDBcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fdGl0bGVcIj57dGl0bGV9PC9wPlxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19jbG9zZSBidG4gYnRuLWxpbmsgbWwtYXV0b1wiXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfT5cblx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEyXCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHR7c3VidGl0bGUgJiYgPHAgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19zdWJ0aXRsZVwiPntzdWJ0aXRsZX08L3A+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlTG9hZGVyKHsgaXNMb2FkaW5nLCBjaGlsZHJlbiB9KSB7XG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHR7aXNMb2FkaW5nID8gKFxuXHRcdFx0XHQ8bW90aW9uLmRpdiB7Li4uRkFERV9JTn0+XG5cdFx0XHRcdFx0PExpbmVhclByb2dyZXNzIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PGRpdiBrZXk9XCJjaGlsZHJlblwiPntjaGlsZHJlbn08L2Rpdj5cblx0XHRcdCl9XG5cdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZVdyYXBwZXIoeyBjaGlsZHJlbiB9KSB7XG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxtYWluIGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwicGFuZSBweS01IHB5LWxnLTEwXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+e2NoaWxkcmVufTwvZGl2PlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdDwvbWFpbj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiB9IGZyb20gJy4uJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBsb2dpbiwgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VQYWdlVGl0bGUgfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbi8qIFJvdXRlcyAqL1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW5Gb3JtKHsgY3VycmVudFVzZXIsIHRvZ2dsZU1vZGFsLCBzaG93U2lnbnVwID0gdHJ1ZSB9KSB7XG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgZm9ybVJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIEhvb2tzICovXG5cdHVzZVBhZ2VUaXRsZSgnTG9naW4nKTtcblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXHRjb25zdCB7XG5cdFx0cmVnaXN0ZXIsXG5cdFx0aGFuZGxlU3VibWl0LFxuXHRcdGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcblx0fSA9IHVzZUZvcm0oeyByZVZhbGlkYXRlTW9kZTogJ29uQ2hhbmdlJywgbW9kZTogJ29uQmx1cicgfSk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGxvZ2luTXV0YXRpb24gPSB1c2VNdXRhdGlvbihsb2dpbiwge1xuXHRcdG9uU3VjY2VzczogKHVzZXIpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuQ1VSUkVOVF9VU0VSKTtcblxuXHRcdFx0aWYgKGN1cnJlbnRVc2VyKSB0b2dnbGVNb2RhbCgpO1xuXG5cdFx0XHR0b2FzdCg8QWxlcnQgbWVzc2FnZT1cIlN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4hXCIgYXBwZWFyYW5jZT1cInN1Y2Nlc3NcIiAvPik7XG5cdFx0fSxcblx0XHRvbkVycm9yOiAoZXJyb3IpID0+IHtcblx0XHRcdHRvYXN0KFxuXHRcdFx0XHQ8QWxlcnRcblx0XHRcdFx0XHRtZXNzYWdlPXtcblx0XHRcdFx0XHRcdGVycm9yPy5yZXNwb25zZT8uZGF0YT8uZXJyb3IgPyAnRW1haWwvcGFzc3dvcmQgY29tYmluYXRpb24gbm90IGZvdW5kIScgOiAnU29tZXRoaW5nIHdlbnQgd3JvbmchJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhcHBlYXJhbmNlPVwiZGFuZ2VyXCJcblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cblx0XHRcdGVycm9ycy5lbWFpbCA9IHsgbWVzc2FnZTogJ0VtYWlsL3Bhc3N3b3JkIGNvbWJpbmF0aW9uIG5vdCBmb3VuZCcgfTtcblx0XHRcdGVycm9ycy5wYXNzd29yZCA9IHsgbWVzc2FnZTogJ0VtYWlsL3Bhc3N3b3JkIGNvbWJpbmF0aW9uIG5vdCBmb3VuZCcgfTtcblx0XHR9LFxuXHR9KTtcblxuXHRjb25zdCBvblN1Ym1pdCA9ICgpID0+IGxvZ2luTXV0YXRpb24ubXV0YXRlKHsgZm9ybVJlZiB9KTtcblxuXHRyZXR1cm4gKFxuXHRcdDxmb3JtIHJlZj17Zm9ybVJlZn0gY2xhc3NOYW1lPVwicGFuZWxfX2Zvcm0gZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfSBub1ZhbGlkYXRlPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0yXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwiaW5wdXRFbWFpbFwiPlxuXHRcdFx0XHRcdFx0RW1haWxcblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke2Vycm9ycy5lbWFpbCAmJiAnaXMtaW52YWxpZCd9YH1cblx0XHRcdFx0XHRcdGlkPVwiaW5wdXRFbWFpbFwiXG5cdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbWFpbFwiXG5cdFx0XHRcdFx0XHRhdXRvRm9jdXNcblx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcignZW1haWwnLCB7XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB0cnVlLFxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7ZXJyb3JzLmVtYWlsICYmIChcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuXHRcdFx0XHRcdFx0XHR7ZXJyb3JzLmVtYWlsPy5tZXNzYWdlID8gZXJyb3JzLmVtYWlsLm1lc3NhZ2UgOiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwnfVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwiaW5wdXRQYXNzd29yZFwiPlxuXHRcdFx0XHRcdFx0UGFzc3dvcmRcblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke2Vycm9ycy5wYXNzd29yZCAmJiAnaXMtaW52YWxpZCd9YH1cblx0XHRcdFx0XHRcdGlkPVwiaW5wdXRQYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRuYW1lPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG5cdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ3Bhc3N3b3JkJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHtlcnJvcnMucGFzc3dvcmQgJiYgKFxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG5cdFx0XHRcdFx0XHRcdHtlcnJvcnMucGFzc3dvcmQ/Lm1lc3NhZ2UgPyBlcnJvcnMucGFzc3dvcmQubWVzc2FnZSA6ICdQbGVhc2UgZW50ZXIgYSBwYXNzd29yZCd9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0yXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZFwiPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnTG9nIGluJyxcblx0XHRcdFx0XHRcdFx0dGhlbWU6ICdzZWNvbmRhcnknLFxuXHRcdFx0XHRcdFx0XHRzaXplOiAnbWQnLFxuXHRcdFx0XHRcdFx0XHRleHRlbnNpb25DbGFzc2VzOiAnYnRuLWJsb2NrIGp1c3RpZnktY29udGVudC1jZW50ZXInLFxuXHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VibWl0Jyxcblx0XHRcdFx0XHRcdFx0aXNMb2FkaW5nOiBsb2dpbk11dGF0aW9uLmlzTG9hZGluZyxcblx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtzaG93U2lnbnVwICYmIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWRcIj5cblx0XHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS13aGl0ZSBidG4tYmxvY2tcIiB0bz17Uk9VVEVTLnNpZ251cH0gdGl0bGU9XCJzaWduIHVwXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImJ0bl9fdGV4dFwiPlNpZ24gdXA8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Zvcm0+XG5cdCk7XG59XG4iLCIvKiBDb21wb25lbnRzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTW9kYWwsIExvZ2luRm9ybSwgU2lnbnVwRm9ybSB9IGZyb20gJy4uJztcbmltcG9ydCB7IFN0YXRpY0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VjdXJpdHlNb2RhbCh7IHNlY3VyaXR5TW9kYWxPcGVuLCBzZXRTZWN1cml0eU1vZGFsT3BlbiB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgY3VycmVudFVzZXIsIHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB0aXRsZSA9IHVzZXJSb2xlID09PSAnYmFzaWMnID8gJ1NpZ251cCcgOiAnTG9naW4nO1xuXHRjb25zdCBzdWJ0aXRsZSA9IGAke3RpdGxlfSBpZiB5b3Ugd2FudCB0byBjb21tZW50YDtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlU2VjdXJpdHlNb2RhbCA9ICgpID0+IHNldFNlY3VyaXR5TW9kYWxPcGVuKCFzZWN1cml0eU1vZGFsT3Blbik7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsIHsuLi57IHRpdGxlLCBzdWJ0aXRsZSwgbW9kYWxPcGVuOiBzZWN1cml0eU1vZGFsT3BlbiwgdG9nZ2xlTW9kYWw6IHRvZ2dsZVNlY3VyaXR5TW9kYWwgfX0+XG5cdFx0XHR7dXNlclJvbGUgPT09ICdiYXNpYycgPyAoXG5cdFx0XHRcdDxTaWdudXBGb3JtXG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdGN1cnJlbnRVc2VyLFxuXHRcdFx0XHRcdFx0dG9nZ2xlTW9kYWw6IHRvZ2dsZVNlY3VyaXR5TW9kYWwsXG5cdFx0XHRcdFx0XHRzaG93TG9naW46IGZhbHNlLFxuXHRcdFx0XHRcdH19XG5cdFx0XHRcdC8+XG5cdFx0XHQpIDogKFxuXHRcdFx0XHQ8TG9naW5Gb3JtXG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdGN1cnJlbnRVc2VyLFxuXHRcdFx0XHRcdFx0dG9nZ2xlTW9kYWw6IHRvZ2dsZVNlY3VyaXR5TW9kYWwsXG5cdFx0XHRcdFx0XHRzaG93U2lnbnVwOiBmYWxzZSxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0KX1cblx0XHQ8L01vZGFsPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IHVzZUZvcm0sIHVzZVdhdGNoIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQWxlcnQsIEJ1dHRvbiB9IGZyb20gJy4uJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBRVUVSWV9LRVlTLCBzaWdudXAgfSBmcm9tICcuLi8uLi9hcGknO1xuXG4vKiBSb3V0ZXMgKi9cbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VQYWdlVGl0bGUgfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ251cEZvcm0oeyBjdXJyZW50VXNlciwgdG9nZ2xlTW9kYWwsIHNob3dMb2dpbiA9IHRydWUgfSkge1xuXHQvKiBSZWZzICovXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBIb29rcyAqL1xuXHR1c2VQYWdlVGl0bGUoJ1NpZ251cCcpO1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0Y29uc3Qge1xuXHRcdHJlZ2lzdGVyLFxuXHRcdGhhbmRsZVN1Ym1pdCxcblx0XHRmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG5cdFx0Y29udHJvbCxcblx0fSA9IHVzZUZvcm0oeyByZVZhbGlkYXRlTW9kZTogJ29uQ2hhbmdlJywgbW9kZTogJ29uQmx1cicgfSk7XG5cblx0Y29uc3QgcGxhaW5QYXNzd29yZCA9IHVzZVdhdGNoKHtcblx0XHRjb250cm9sLFxuXHRcdG5hbWU6ICdwbGFpblBhc3N3b3JkJyxcblx0XHRkZWZhdWx0VmFsdWU6ICcnLFxuXHR9KTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3Qgc2lnbnVwTXV0YXRpb24gPSB1c2VNdXRhdGlvbihzaWdudXAsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuQ1VSUkVOVF9VU0VSKTtcblxuXHRcdFx0dG9hc3QoPEFsZXJ0IG1lc3NhZ2U9XCJTdWNjZXNzZnVsbHkgbG9nZ2VkIGluIVwiIGFwcGVhcmFuY2U9XCJzdWNjZXNzXCIgLz4pO1xuXG5cdFx0XHRpZiAoY3VycmVudFVzZXIpIHRvZ2dsZU1vZGFsKCk7XG5cdFx0fSxcblx0XHRvbkVycm9yOiAoZXJyb3IpID0+IHtcblx0XHRcdGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xuXHRcdFx0XHR0b2FzdCg8QWxlcnQgbWVzc2FnZT1cIlRoaXMgZW1haWwgaXMgYWxyZWFkeSBpbiB1c2UhXCIgYXBwZWFyYW5jZT1cImRhbmdlclwiIC8+KTtcblxuXHRcdFx0XHRmb3JtUmVmLmN1cnJlbnQucmVzZXQoKTtcblx0XHRcdH1cblx0XHR9LFxuXHR9KTtcblxuXHRjb25zdCBvblN1Ym1pdCA9ICgpID0+IHNpZ251cE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYsIHVzZXJJZDogY3VycmVudFVzZXI/LmlkIH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxmb3JtIHJlZj17Zm9ybVJlZn0gY2xhc3NOYW1lPVwicGFuZWxfX2Zvcm0gZm9ybVwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfSBub1ZhbGlkYXRlPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0yXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJyZWdpc3RyYXRpb25fZm9ybV91c2VybmFtZVwiPlxuXHRcdFx0XHRcdFx0WW91ciBuYW1lXG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGlkPVwicmVnaXN0cmF0aW9uX2Zvcm1fdXNlcm5hbWVcIlxuXHRcdFx0XHRcdFx0bmFtZT1cInVzZXJuYW1lXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke2Vycm9ycy51c2VybmFtZSAmJiAnaXMtaW52YWxpZCd9YH1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRnVsbCBuYW1lXCJcblx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcigndXNlcm5hbWUnLCB7XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhIG5hbWUnLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7ZXJyb3JzLnVzZXJuYW1lICYmIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPntlcnJvcnMudXNlcm5hbWUubWVzc2FnZX08L2Rpdj59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicmVnaXN0cmF0aW9uX2Zvcm1fb3JnYW5pc2F0aW9uXCI+XG5cdFx0XHRcdFx0XHRPcmdhbmlzYXRpb25cblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0aWQ9XCJyZWdpc3RyYXRpb25fZm9ybV9vcmdhbmlzYXRpb25cIlxuXHRcdFx0XHRcdFx0bmFtZT1cIm9yZ2FuaXNhdGlvblwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtlcnJvcnMub3JnYW5pc2F0aW9uICYmICdpcy1pbnZhbGlkJ31gfVxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJPcmdhbmlzYXRpb25cIlxuXHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKCdvcmdhbmlzYXRpb24nLCB7XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhbiBvcmdhbmlzYXRpb24nLFxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHR7ZXJyb3JzLm9yZ2FuaXNhdGlvbiAmJiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj57ZXJyb3JzLm9yZ2FuaXNhdGlvbi5tZXNzYWdlfTwvZGl2Pn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicmVnaXN0cmF0aW9uX2Zvcm1fZW1haWxcIj5cblx0XHRcdFx0XHRcdEVtYWlsXG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGlkPVwicmVnaXN0cmF0aW9uX2Zvcm1fZW1haWxcIlxuXHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke2Vycm9ycy5lbWFpbCAmJiAnaXMtaW52YWxpZCd9YH1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuXHRcdFx0XHRcdFx0dmFsdWU9e2N1cnJlbnRVc2VyPy5lbWFpbH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsoKSA9PiB7fX1cblx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcignZW1haWwnLCB7XG5cdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0bWVzc2FnZTogJ1BsZWFzZSBlbnRlciBhbiBlbWFpbCcsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHtlcnJvcnMuZW1haWwgJiYgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e2Vycm9ycy5lbWFpbC5tZXNzYWdlfTwvZGl2Pn1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJyZWdpc3RyYXRpb25fZm9ybV9wbGFpblBhc3N3b3JkXCI+XG5cdFx0XHRcdFx0XHRQYXNzd29yZFxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0aWQ9XCJyZWdpc3RyYXRpb25fZm9ybV9wbGFpblBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJwbGFpblBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke2Vycm9ycy5wYXNzd29yZCAmJiAnaXMtaW52YWxpZCd9YH1cblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKCdwbGFpblBhc3N3b3JkJywge1xuXHRcdFx0XHRcdFx0XHRyZXF1aXJlZDoge1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYSBwYXNzd29yZCcsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdG1pbkxlbmd0aDoge1xuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiA2LFxuXHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYSBwYXNzd29yZCBvZiBhdGxlYXN0IDYgY2hhcmFjdGVycycsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHtlcnJvcnMucGxhaW5QYXNzd29yZCAmJiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj57ZXJyb3JzLnBsYWluUGFzc3dvcmQubWVzc2FnZX08L2Rpdj59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwibG9naW4tY29uZmlybS1wYXNzd29yZFwiPlxuXHRcdFx0XHRcdFx0Q29uZmlybSBwYXNzd29yZFxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7ZXJyb3JzLnBhc3N3b3JkQ29uZmlybSAmJiAnaXMtaW52YWxpZCd9YH1cblx0XHRcdFx0XHRcdGlkPVwibG9naW4tY29uZmlybS1wYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkNvbmZpcm0gcGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0bmFtZT1cInBhc3N3b3JkQ29uZmlybVwiXG5cdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ3Bhc3N3b3JkQ29uZmlybScsIHtcblx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUGxlYXNlIGNvbmZpcm0geW91ciBwYXNzd29yZCcsXG5cdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdHZhbGlkYXRlOiAodmFsdWUpID0+IHZhbHVlID09PSBwbGFpblBhc3N3b3JkIHx8ICdUaGUgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaCcsXG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdHtlcnJvcnMucGFzc3dvcmRDb25maXJtICYmIDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPntlcnJvcnMucGFzc3dvcmRDb25maXJtLm1lc3NhZ2V9PC9kaXY+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0yXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZFwiPlxuXHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHRcdHRpdGxlOiAnU2lnbiB1cCcsXG5cdFx0XHRcdFx0XHRcdHRoZW1lOiAnc2Vjb25kYXJ5Jyxcblx0XHRcdFx0XHRcdFx0c2l6ZTogJ21kJyxcblx0XHRcdFx0XHRcdFx0ZXh0ZW5zaW9uQ2xhc3NlczogJ2J0bi1ibG9jayBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJyxcblx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Ym1pdCcsXG5cdFx0XHRcdFx0XHRcdGlzTG9hZGluZzogc2lnbnVwTXV0YXRpb24uaXNMb2FkaW5nLFxuXHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0e3Nob3dMb2dpbiAmJiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kXCI+XG5cdFx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtd2hpdGUgYnRuLWJsb2NrXCIgdG89e1JPVVRFUy5sb2dpbn0gdGl0bGU9XCJzaWduIHVwXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImJ0bl9fdGV4dFwiPkxvZ2luPC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9mb3JtPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4sIFRSQU5TRk9STV9VUCB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTbGlkZUluKHsgdG9nZ2xlU2xpZGVJbiwgY2hpbGRyZW4sIGRvbUVsZW1lbnQsIHZhcmlhbnQgPSAnZGVmYXVsdCcgfSkge1xuXHRjb25zdCByZW5kZXIgPSAoKSA9PiAoXG5cdFx0PGRpdiBrZXk9XCJzbGlkZS1pblwiIGNsYXNzTmFtZT17YHNsaWRlLWluIHNsaWRlLWluLS0ke3ZhcmlhbnR9YH0+XG5cdFx0XHQ8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbl9fb3ZlcmxheVwiIG9uQ2xpY2s9e3RvZ2dsZVNsaWRlSW59IHsuLi5GQURFX0lOfSAvPlxuXHRcdFx0PG1vdGlvbi5hcnRpY2xlIGtleT1cInNsaWRlLWluX19jb250ZW50XCIgY2xhc3NOYW1lPVwic2xpZGUtaW5fX2NvbnRlbnRcIiB7Li4uVFJBTlNGT1JNX1VQfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgZC1mbGV4IGZsZXgtZ3Jvdy0xXCI+e2NoaWxkcmVufTwvZGl2PlxuXHRcdFx0PC9tb3Rpb24uYXJ0aWNsZT5cblx0XHQ8L2Rpdj5cblx0KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0aWYgKGRvbUVsZW1lbnQpIHtcblx0XHRyZXR1cm4gY3JlYXRlUG9ydGFsKHJlbmRlcigpLCBkb21FbGVtZW50KTtcblx0fVxuXG5cdHJldHVybiByZW5kZXIoKTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVG9vbHRpcCBhcyBUaXBweSB9IGZyb20gJ3JlYWN0LXRpcHB5JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9vbHRpcCh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSB7XG5cdHJldHVybiAoXG5cdFx0PFRpcHB5XG5cdFx0XHRwb3NpdGlvbj1cInRvcFwiXG5cdFx0XHRhbmltYXRpb249XCJzaGlmdFwiXG5cdFx0XHRkdXJhdGlvbj17MTUwfVxuXHRcdFx0ZGlzdGFuY2U9ezE1fVxuXHRcdFx0YXJyb3dcblx0XHRcdGFycm93U2l6ZT1cInNtYWxsXCJcblx0XHRcdHRyaWdnZXI9XCJjbGlja1wiXG5cdFx0XHR7Li4ucHJvcHN9XG5cdFx0XHRzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcgfX0+XG5cdFx0XHR7Y2hpbGRyZW59XG5cdFx0PC9UaXBweT5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTW9kYWwsIFVzZXJBZGRTZWFyY2ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkVXNlckljb24gZnJvbSAnaWNvbnMvYWRkX3VzZXIuc3ZnJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckFkZCh7IHVzZXJzLCBwcm9qZWN0IH0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZU1vZGFsID0gKCkgPT4gc2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pO1xuXG5cdGNvbnN0IGludmFsaWRhdGVRdWVyaWVzID0gKCkgPT4ge1xuXHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3QuaWRdKTtcblx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLkdMT0JBTF9VU0VSUyk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtbC0yXCI+XG5cdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayB1c2VyIHVzZXItLWxnIHVzZXItLWFkZFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0b2dnbGVNb2RhbH0+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInVzZXJfX2F2YXRhclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlcl9faW5pdGlhbHNcIj5cblx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9faWNvbiBpY29uIGljb24tLTEyIG10LTBcIiBzcmM9e2FkZFVzZXJJY29ufSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxNb2RhbFxuXHRcdFx0XHR0aXRsZT1cIlNlbGVjdCB1c2Vyc1wiXG5cdFx0XHRcdHN1YnRpdGxlPVwiQ2hvb3NlIHNvbWUgdXNlcnMgdG8gY29sbGFib3JhdGUgd2l0aC5cIlxuXHRcdFx0XHR7Li4ueyBtb2RhbE9wZW4sIHRvZ2dsZU1vZGFsIH19PlxuXHRcdFx0XHQ8VXNlckFkZFNlYXJjaCB7Li4ueyB1c2VycywgcHJvamVjdCwgdG9nZ2xlTW9kYWwsIGludmFsaWRhdGVRdWVyaWVzIH19IC8+XG5cdFx0XHQ8L01vZGFsPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VyQWRkU2VhcmNoUmVzdWx0cywgVXNlcnMsIEJ1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBTZXJ2aWNlcyAqL1xuaW1wb3J0IHsgaXNFbWFpbCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcbmltcG9ydCBmaWx0ZXJVc2VycyBmcm9tICcuL3NlcnZpY2VzL2ZpbHRlclVzZXJzJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBhZGRVc2VyLCBmZXRjaEdvYmFsVXNlcnMsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQWRkU2VhcmNoKHsgdXNlcnMsIHByb2plY3QsIHRvZ2dsZU1vZGFsLCBpbnZhbGlkYXRlUXVlcmllcyB9KSB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoJycpO1xuXHRjb25zdCBbZm9jdXNlZFVzZXIsIHNldEZvY3VzZWRVc2VyXSA9IHVzZVN0YXRlKDApO1xuXG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBkYXRhOiBnbG9iYWxVc2VycyA9IFtdLCBpc0xvYWRpbmc6IGdsb2JhbFVzZXJzTG9hZGluZyB9ID0gdXNlUXVlcnkoXG5cdFx0UVVFUllfS0VZUy5HTE9CQUxfVVNFUlMsXG5cdFx0ZmV0Y2hHb2JhbFVzZXJzXG5cdCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IGZpbHRlcmVkVXNlcnMgPSBmaWx0ZXJVc2VycyhnbG9iYWxVc2VycywgdXNlcnMsIHF1ZXJ5KTtcblxuXHQvKiBSZWZzICovXG5cdGNvbnN0IHF1ZXJ5UmVmID0gdXNlUmVmKCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGFkZFVzZXJNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZFVzZXIsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdGludmFsaWRhdGVRdWVyaWVzKCk7XG5cdFx0XHRxdWVyeVJlZi5jdXJyZW50LnNlbGVjdCgpO1xuXHRcdFx0c2V0UXVlcnkoJycpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBzZXRRdWVyeSh2YWx1ZSk7XG5cblx0Y29uc3QgaGFuZGxlT25LZXlEb3duID0gKGV2ZW50KSA9PiB7XG5cdFx0aWYgKFsnRW50ZXInLCAnVGFiJ10uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0aWYgKHF1ZXJ5ICE9PSAnJyAmJiBmb2N1c2VkVXNlciAhPT0gbnVsbCkge1xuXHRcdFx0XHRjb25zdCB1c2VyID0gZm9jdXNlZFVzZXIgaW4gZmlsdGVyZWRVc2VycyA/IGZpbHRlcmVkVXNlcnNbZm9jdXNlZFVzZXJdIDogZm9jdXNlZFVzZXI7XG5cblx0XHRcdFx0aWYgKGlzRW1haWwodXNlci5lbWFpbCkpIHtcblx0XHRcdFx0XHRhZGRVc2VyTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkOiBwcm9qZWN0LmlkLCBlbWFpbDogdXNlci5lbWFpbCB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRjb25zdCBoYW5kbGVDbGljayA9ICh7IGVtYWlsIH0pID0+IHtcblx0XHRpZiAoaXNFbWFpbChlbWFpbCkpIHtcblx0XHRcdGFkZFVzZXJNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQ6IHByb2plY3QuaWQsIGVtYWlsOiBlbWFpbCB9KTtcblx0XHR9XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1ncm93LTFcIj5cblx0XHRcdDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdCwgaW52YWxpZGF0ZVF1ZXJpZXMgfX0gdmFyaWFudD1cImludGVyYWN0aXZlXCIgc2l6ZT1cImxnXCIgLz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cblx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwidXNlclF1ZXJ5XCI+XG5cdFx0XHRcdFx0U2VhcmNoIG5hbWUgb3IgZW1haWxcblx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC0tc2VhcmNoXCJcblx0XHRcdFx0XHRpZD1cInVzZXJRdWVyeVwiXG5cdFx0XHRcdFx0bmFtZT1cInVzZXJRdWVyeVwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTZWFyY2ggbmFtZSBvciBlbWFpbFwiXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdGF1dG9Gb2N1c1xuXHRcdFx0XHRcdHZhbHVlPXtxdWVyeX1cblx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdG9uS2V5RG93bj17aGFuZGxlT25LZXlEb3dufVxuXHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cIm9mZlwiXG5cdFx0XHRcdFx0cmVmPXtxdWVyeVJlZn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PEJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVNb2RhbH0gZXh0ZW5zaW9uQ2xhc3Nlcz1cImZvcm0tY29udHJvbC1idG5cIiBjb250ZW50VHlwZT1cImljb25cIiB0aGVtZT1cImRlZmF1bHRcIiAvPlxuXHRcdFx0XHQ8VXNlckFkZFNlYXJjaFJlc3VsdHNcblx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0ZmlsdGVyZWRVc2Vycyxcblx0XHRcdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRcdFx0aGFuZGxlQ2xpY2ssXG5cdFx0XHRcdFx0XHRmb2N1c2VkVXNlcixcblx0XHRcdFx0XHRcdHNldEZvY3VzZWRVc2VyLFxuXHRcdFx0XHRcdFx0dXNlck11dGF0aW9uTG9hZGluZzogYWRkVXNlck11dGF0aW9uLmlzTG9hZGluZyxcblx0XHRcdFx0XHRcdGdsb2JhbFVzZXJzTG9hZGluZyxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXJTZWxlY3QgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQWRkU2VhcmNoUmVzdWx0cyh7XG5cdGZpbHRlcmVkVXNlcnMsXG5cdHF1ZXJ5LFxuXHRoYW5kbGVDbGljayxcblx0Zm9jdXNlZFVzZXIsXG5cdHNldEZvY3VzZWRVc2VyLFxuXHR1c2VyTXV0YXRpb25Mb2FkaW5nLFxuXHRnbG9iYWxVc2Vyc0xvYWRpbmcsXG59KSB7XG5cdC8qIFJlbmRlciBmaWx0ZXJlZCByZXN1bHRzICovXG5cdGNvbnN0IHJlc3VsdHMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgbmV3VXNlciA9IHsgZW1haWw6IHF1ZXJ5LCBvcmdhbmlzYXRpb246IHF1ZXJ5LCBkaXNwbGF5OiAnTmV3IHVzZXInLCB1c2VyQ29sb3I6ICcyOTEsIDgxJSwgNTMlJyB9O1xuXG5cdFx0aWYgKGZpbHRlcmVkVXNlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIGZpbHRlcmVkVXNlcnMubWFwKCh1c2VyLCB1c2VySW5kZXgpID0+IChcblx0XHRcdFx0PG1vdGlvbi5saSB7Li4uRkFERV9JTn0ga2V5PXt1c2VyLmlkfSBjbGFzc05hbWU9XCJsaXN0X19pdGVtIHZyLTNcIj5cblx0XHRcdFx0XHQ8VXNlclNlbGVjdFxuXHRcdFx0XHRcdFx0ey4uLnsgdXNlciwgdXNlckluZGV4LCBoYW5kbGVDbGljaywgc2V0Rm9jdXNlZFVzZXIgfX1cblx0XHRcdFx0XHRcdGlzRm9jdXNlZD17dXNlckluZGV4ID09PSBmb2N1c2VkVXNlciAmJiBxdWVyeX1cblx0XHRcdFx0XHRcdGlzTG9hZGluZz17dXNlck11dGF0aW9uTG9hZGluZ31cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L21vdGlvbi5saT5cblx0XHRcdCkpO1xuXHRcdH1cblxuXHRcdGlmICghZ2xvYmFsVXNlcnNMb2FkaW5nKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8bW90aW9uLmxpIHsuLi5GQURFX0lOfSBrZXk9XCJOZXcgdXNlclwiIGNsYXNzTmFtZT1cImxpc3RfX2l0ZW0gaXMtZm9jdXNlZCB2ci0zXCI+XG5cdFx0XHRcdFx0PFVzZXJTZWxlY3Rcblx0XHRcdFx0XHRcdHsuLi57IHVzZXI6IG5ld1VzZXIsIHVzZXJJbmRleDogbmV3VXNlciwgaGFuZGxlQ2xpY2ssIHNldEZvY3VzZWRVc2VyIH19XG5cdFx0XHRcdFx0XHRpc0ZvY3VzZWQ9e3F1ZXJ5Lmxlbmd0aH1cblx0XHRcdFx0XHRcdGlzTG9hZGluZz17dXNlck11dGF0aW9uTG9hZGluZ31cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L21vdGlvbi5saT5cblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHR7cXVlcnkgIT09ICcnICYmIChcblx0XHRcdFx0PG1vdGlvbi51bCB7Li4uRkFERV9JTn0gY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19saXN0IGxpc3RcIj5cblx0XHRcdFx0XHR7cmVzdWx0cygpfVxuXHRcdFx0XHQ8L21vdGlvbi51bD5cblx0XHRcdCl9XG5cdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaWx0ZXJVc2VycyhnbG9iYWxVc2VycywgdXNlcnMsIHF1ZXJ5KSB7XG5cdGNvbnN0IGxvd2VyUXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpO1xuXHRjb25zdCBleGlzdGluZ1VzZXJzQnlFbWFpbCA9IHVzZXJzLm1hcCgoeyBlbWFpbCB9KSA9PiBlbWFpbCk7XG5cblx0bGV0IGZpbHRlcmVkVXNlcnMgPSBnbG9iYWxVc2Vyc1xuXHRcdC5maWx0ZXIoKHsgZW1haWwgfSkgPT4ge1xuXHRcdFx0LyogT25seSByZXR1cm4gdXNlcnMgdGhhdCBhcmUgbm90IHBhcnQgb2YgdGhlIHByb2plY3QgKi9cblx0XHRcdHJldHVybiAhZXhpc3RpbmdVc2Vyc0J5RW1haWwuaW5jbHVkZXMoZW1haWwpO1xuXHRcdH0pXG5cdFx0LmZpbHRlcigoeyBlbWFpbCwgZGlzcGxheSB9KSA9PiB7XG5cdFx0XHQvKiBPbmx5IHJldHVybiB1c2VycyB0aGF0IG1hdGNoIHRoZSBxdWVyeSBvbiBlbWFpbCB8fCBkaXNwbGF5ICovXG5cdFx0XHRyZXR1cm4gZW1haWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclF1ZXJ5KSB8fCBkaXNwbGF5LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJRdWVyeSk7XG5cdFx0fSk7XG5cblx0cmV0dXJuIGZpbHRlcmVkVXNlcnM7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBMb2FkaW5nV3JhcHBlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBzdGFySWNvbiBmcm9tICdpY29ucy9zdGFyLnN2Zyc7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICdpY29ucy9kZWxldGUuc3ZnJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBkZWxldGVVc2VyIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuLyogU2VydmljZXMgKi9cbmltcG9ydCB7IFVTRVJfUk9MRVMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9nZXRSb2xlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcih7IHVzZXIsIHByb2plY3QsIHZhcmlhbnQgPSAnZGVmYXVsdCcsIHNpemUgPSAnbWQnLCBpbnZhbGlkYXRlUXVlcmllcyB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IGlkOiBwcm9qZWN0SWQgfSA9IHByb2plY3QgPz8ge307XG5cdGNvbnN0IHsgaWQ6IHVzZXJJZCwgcm9sZXMgPSBbXSB9ID0gdXNlciA/PyB7fTtcblx0Y29uc3QgaXNBdXRob3IgPSByb2xlcy5pbmNsdWRlcyhVU0VSX1JPTEVTLkFETUlOKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgZGVsZXRlVXNlck11dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlVXNlciwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4gaW52YWxpZGF0ZVF1ZXJpZXMoKSxcblx0fSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2B1c2VyIHVzZXItLSR7c2l6ZX0gdXNlci0tJHt2YXJpYW50fSAke2lzQXV0aG9yICYmICd1c2VyLS1hdXRob3InfWB9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxVc2VyQXZhdGFyIGlzTG9hZGluZz17ZGVsZXRlVXNlck11dGF0aW9uLmlzTG9hZGluZ30gey4uLnVzZXJ9PlxuXHRcdFx0XHRcdHt2YXJpYW50ID09PSAnaW50ZXJhY3RpdmUnICYmICFpc0F1dGhvciAmJiAoXG5cdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInVzZXJfX2FjdGlvbiBidG4gYnRuLWxpbmsgcC0wXCJcblx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGRlbGV0ZVVzZXJNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQsIHVzZXJJZCB9KX0+XG5cdFx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9fYWN0aW9uLWljb24gaWNvbiBpY29uLS0xNFwiIHNyYz17ZGVsZXRlSWNvbn0gLz5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvVXNlckF2YXRhcj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0e2lzQXV0aG9yICYmIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19zdGF0dXMgdXNlcl9fc3RhdHVzLS1sZWFkZXJcIj5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cInVzZXJfX3N0YXR1cy1pY29uIGljb24gdGV4dC10ZXJ0aWFyeSBtdC0wXCIgc3JjPXtzdGFySWNvbn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgY29uc3QgVXNlckF2YXRhciA9ICh7IGRpc3BsYXksIHVzZXJDb2xvciwgaXNMb2FkaW5nLCBjaGlsZHJlbiB9KSA9PiB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB1c2VySW5pdGlhbHMgPSBkaXNwbGF5LnNwbGl0KCcgJykubWFwKCh3b3JkKSA9PiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlcl9fYXZhdGFyXCIgc3R5bGU9e3sgJy0tdGhlbWUnOiB1c2VyQ29sb3IgfX0+XG5cdFx0XHQ8TG9hZGluZ1dyYXBwZXIgbG9hZGluZz17aXNMb2FkaW5nfSBsb2FkZXJTaXplPXsxNn0+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInVzZXJfX2luaXRpYWxzXCI+e3VzZXJJbml0aWFsc308L3NwYW4+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgY29uc3QgVXNlckluZm8gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGxheW91dCA9ICd2ZXJ0aWNhbCcsIHNpemUgPSAnbGcnIH0pID0+IChcblx0PGRpdiBjbGFzc05hbWU9e2B1c2VyX19pbmZvIHVzZXJfX2luZm8tLSR7bGF5b3V0fSB1c2VyX19pbmZvLS0ke3NpemV9IG1sLTJgfT5cblx0XHQ8cCBjbGFzc05hbWU9XCJ1c2VyX19pbmZvLXRpdGxlIG1iLTBcIj57dGl0bGV9PC9wPlxuXHRcdHtzdWJ0aXRsZSAmJiA8cCBjbGFzc05hbWU9XCJ1c2VyX19pbmZvLXN1YnRpdGxlIG1iLTBcIj57c3VidGl0bGV9PC9wPn1cblx0PC9kaXY+XG4pO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IHsgVXNlckF2YXRhciwgVXNlckluZm8gfSBmcm9tICcuL1VzZXInO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRVc2VySWNvbiBmcm9tICdpY29ucy9hZGRfdXNlci5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyU2VsZWN0KHsgdXNlciwgdXNlckluZGV4LCBoYW5kbGVDbGljaywgaXNGb2N1c2VkLCBzZXRGb2N1c2VkVXNlciwgaXNMb2FkaW5nIH0pIHtcblx0LyogRWZmZWN0cyAqL1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlzRm9jdXNlZCAmJiBzZXRGb2N1c2VkVXNlcih1c2VySW5kZXgpO1xuXHR9LCBbaXNGb2N1c2VkXSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRyZXR1cm4gKCkgPT4gc2V0Rm9jdXNlZFVzZXIoMCk7XG5cdH0sIFtdKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgaGFuZGxlU3RhdHVzID0gKGFjdGlvbikgPT4ge1xuXHRcdHNldEZvY3VzZWRVc2VyKGFjdGlvbiA9PT0gJ2VudGVyJyA/IHVzZXJJbmRleCA6IDApO1xuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxidXR0b25cblx0XHRcdGNsYXNzTmFtZT17YHVzZXIgdXNlci0tc2VsZWN0ICR7aXNGb2N1c2VkICYmICdpcy1mb2N1c2VkJ30gdXNlci0teGxgfVxuXHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2sodXNlcil9XG5cdFx0XHRvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZVN0YXR1cygnZW50ZXInKX1cblx0XHRcdG9uTW91c2VMZWF2ZT17KCkgPT4gaGFuZGxlU3RhdHVzKCdsZWF2ZScpfVxuXHRcdFx0dHlwZT1cImJ1dHRvblwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxVc2VyQXZhdGFyIGlzTG9hZGluZz17aXNMb2FkaW5nICYmIGlzRm9jdXNlZH0gey4uLnVzZXJ9IC8+XG5cdFx0XHRcdDxVc2VySW5mb1xuXHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHR0aXRsZTogdXNlci5kaXNwbGF5LFxuXHRcdFx0XHRcdFx0c3VidGl0bGU6IHVzZXIub3JnYW5pc2F0aW9uID8gdXNlci5vcmdhbmlzYXRpb24gOiAnTm8gb3JnYW5pc2F0aW9uJyxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXJfX2FkZCB0ZXh0LXNlY29uZGFyeSByb3VuZGVkLWNpcmNsZSBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19hZGQtaWNvbiBpY29uIGljb24tLTEyIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXthZGRVc2VySWNvbn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2J1dHRvbj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTQ0FMRV9GQURFIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJzKHsgdXNlcnMsIGxheW91dCA9ICdmdWxsJywgdXNlTGF5b3V0ID0gdHJ1ZSwgLi4ucmVzdCB9KSB7XG5cdGNvbnN0IHNsaWNlQW1vdW50ID0gbGF5b3V0ID09PSAnbWluaW1hbCcgPyA3IDogSW5maW5pdHk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIGd1dHRlcnMtMVwiPlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e3VzZXJzLnNsaWNlKDAsIHNsaWNlQW1vdW50KS5tYXAoKHVzZXIpID0+IHtcblx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0PG1vdGlvbi5kaXYgbGF5b3V0PXt1c2VMYXlvdXR9IHsuLi5TQ0FMRV9GQURFfSBjbGFzc05hbWU9XCJjb2wtYXV0b1wiIGtleT17dXNlci5pZH0+XG5cdFx0XHRcdFx0XHRcdDxVc2VyIHsuLi57IHVzZXIsIC4uLnJlc3QgfX0gLz5cblx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdFx0e2xheW91dCA9PT0gJ21pbmltYWwnICYmIHVzZXJzLmxlbmd0aCA+IDcgJiYgKFxuXHRcdFx0XHRcdDxtb3Rpb24uZGl2IGxheW91dCB7Li4uU0NBTEVfRkFERX0gY2xhc3NOYW1lPVwiY29sLWF1dG9cIiBrZXk9XCJtb3JlXCI+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LS1zbSB0ZXh0LW11dGVkLS03MCBtbC0xXCI+KyB7dXNlcnMubGVuZ3RoIC0gc2xpY2VBbW91bnR9PC9wPlxuXHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0KX1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBTdGF0aWNDb250ZXh0IH0gZnJvbSAnLi9tYWluQ29udGV4dCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFJldmlld0NvbnRleHQgfSBmcm9tICcuL3Jldmlld0NvbnRleHQnO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuY29uc3QgU3RhdGljQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoKTtcbmV4cG9ydCBkZWZhdWx0IFN0YXRpY0NvbnRleHQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBSZXZpZXdDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuZXhwb3J0IGRlZmF1bHQgUmV2aWV3Q29udGV4dDtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VyQWRkLCBVc2VycywgRWRpdGFibGUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IHN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9tYWluQ29udGV4dCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZWRpdFByb2plY3QsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0RGV0YWlsSGVhZGVyKHsgdGl0bGUsIGRlc2NyaXB0aW9uLCB1c2VycywgaWQsIGF1dGhvciwgZW1haWwgfSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgcHJvamVjdCA9IHsgaWQsIGF1dGhvciwgZW1haWwgfTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KHN0YXRpY0NvbnRleHQpO1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IG11dGF0aW9uT25TdWNjZXNzID0gKCkgPT4ge1xuXHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIGlkXSk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgbWItNlwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTZcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3VzZXJSb2xlID09PSAnYWRtaW4nICYmICdlZGl0YWJsZSd9IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMmB9PlxuXHRcdFx0XHRcdDxFZGl0YWJsZVxuXHRcdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdFx0dGl0bGU6ICdFZGl0aW5nIHRpdGxlJyxcblx0XHRcdFx0XHRcdFx0ZmllbGRzOiBbeyBuYW1lOiAndGl0bGUnLCBkZWZhdWx0VmFsdWU6IHRpdGxlIH1dLFxuXHRcdFx0XHRcdFx0XHRtdXRhdGlvbjogZWRpdFByb2plY3QsXG5cdFx0XHRcdFx0XHRcdG11dGF0aW9uSWQ6IGlkLFxuXHRcdFx0XHRcdFx0XHRtdXRhdGlvbk9uU3VjY2VzczogbXV0YXRpb25PblN1Y2Nlc3MsXG5cdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJoNSBtYi0wIHRleHQtd2hpdGVcIj57dGl0bGUgPyB0aXRsZSA6ICdBZGQgYSBuaWNlIHRpdGxlJ308L2gxPlxuXHRcdFx0XHRcdDwvRWRpdGFibGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7dXNlclJvbGUgPT09ICdhZG1pbicgJiYgJ2VkaXRhYmxlJ30gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yYH0+XG5cdFx0XHRcdFx0PEVkaXRhYmxlXG5cdFx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0XHR0aXRsZTogJ0VkaXRpbmcgZGVzY3JpcHRpb24nLFxuXHRcdFx0XHRcdFx0XHRmaWVsZHM6IFt7IG5hbWU6ICdkZXNjcmlwdGlvbicsIGRlZmF1bHRWYWx1ZTogZGVzY3JpcHRpb24gfV0sXG5cdFx0XHRcdFx0XHRcdG11dGF0aW9uOiBlZGl0UHJvamVjdCxcblx0XHRcdFx0XHRcdFx0bXV0YXRpb25JZDogaWQsXG5cdFx0XHRcdFx0XHRcdG11dGF0aW9uT25TdWNjZXNzOiBtdXRhdGlvbk9uU3VjY2Vzcyxcblx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNzAgbWItMFwiPlxuXHRcdFx0XHRcdFx0XHR7ZGVzY3JpcHRpb24gPyAoXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+e2Rlc2NyaXB0aW9ufTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS00MFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e1wiV2hhdCdzIHRoaXMgcHJvamVjdCBhYm91dD8gU2V0IHRoZSBjb250ZXh0LCB0aGUgZ29hbHMsIHRoZSBjb25zdHJhaW50c1wifVxuXHRcdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHQ8L0VkaXRhYmxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmUgbWwtYXV0b1wiPlxuXHRcdFx0XHQ8VXNlcnMgey4uLnsgdXNlcnMsIHByb2plY3QgfX0gc2l6ZT1cImxnXCIgLz5cblx0XHRcdFx0e3VzZXJSb2xlID09PSAnYWRtaW4nICYmIDxVc2VyQWRkIHsuLi57IHVzZXJzLCBwcm9qZWN0IH19IC8+fVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEVkaXRhYmxlLCBJbWFnZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjaGVja0ljb24gZnJvbSAnaWNvbnMvY2hlY2suc3ZnJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGVkaXRQcm9qZWN0SW1hZ2UsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0RGV0YWlsSW1hZ2UoeyBwcm9qZWN0SW1hZ2UsIHByb2plY3RJZCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJbWFnZUlkLCB0aXRsZSwgcGhhc2UgPSB7fSB9ID0gcHJvamVjdEltYWdlO1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgbXV0YXRpb25PblN1Y2Nlc3MgPSAoKSA9PiB7XG5cdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGFydGljbGUgY2xhc3NOYW1lPXtgY2FyZCBjYXJkLS1saW5rIGNhcmQtLXByb2R1Y3QgJHtzZWxlY3RlZC5pbmNsdWRlcyhwcm9qZWN0SW1hZ2VJZCkgJiYgJ2lzLXNlbGVjdGVkJ31gfT5cblx0XHRcdDxMaW5rIHRvPXtgL3Byb2plY3RzLyR7cHJvamVjdElkfS9yZXZpZXcvJHtwcm9qZWN0SW1hZ2VJZH1gfSB0aXRsZT17dGl0bGV9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ltYWdlIGJvcmRlciBtLTJcIj5cblx0XHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXG5cdFx0XHRcdFx0XHRzcmM9e3BoYXNlLmltYWdlLnRodW1ibmFpbH1cblx0XHRcdFx0XHRcdHNyY1NldD17YCR7cGhhc2UuaW1hZ2UudGh1bWJuYWlsUmV0aW5hfSAyeGB9XG5cdFx0XHRcdFx0XHRhbHQ9e3RpdGxlfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9MaW5rPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cblx0XHRcdFx0PEVkaXRhYmxlXG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdHRpdGxlOiAnRWRpdGluZyBpbWFnZSB0aXRsZScsXG5cdFx0XHRcdFx0XHRmaWVsZHM6IFt7IG5hbWU6ICd0aXRsZScsIGRlZmF1bHRWYWx1ZTogdGl0bGUgfV0sXG5cdFx0XHRcdFx0XHRtdXRhdGlvbjogZWRpdFByb2plY3RJbWFnZSxcblx0XHRcdFx0XHRcdG11dGF0aW9uSWQ6IHByb2plY3RJbWFnZUlkLFxuXHRcdFx0XHRcdFx0bXV0YXRpb25PblN1Y2Nlc3M6IG11dGF0aW9uT25TdWNjZXNzLFxuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxtb3Rpb24ucCB7Li4uRkFERV9JTn0gY2xhc3NOYW1lPVwibWItMFwiPlxuXHRcdFx0XHRcdFx0e3RpdGxlfVxuXHRcdFx0XHRcdDwvbW90aW9uLnA+XG5cdFx0XHRcdDwvRWRpdGFibGU+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fc2VsZWN0XCI+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXJkX19zZWxlY3QtdG9nZ2xlXCJcblx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHR1cGRhdGVTZWxlY3RlZChwcm9qZWN0SW1hZ2VJZCk7XG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJjYXJkX19zZWxlY3QtaWNvbiBpY29uIGljb24tLThcIiBzcmM9e2NoZWNrSWNvbn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2FydGljbGU+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBEcm9wem9uZSwgQWN0aW9uTWVudSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCBQcm9qZWN0RGV0YWlsSW1hZ2UgZnJvbSAnLi9Qcm9qZWN0RGV0YWlsSW1hZ2UnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBkZWxldGVJY29uIGZyb20gJ2ljb25zL2Nsb3NlLnN2Zyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNUQUdHRVJfVVAgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9tYWluQ29udGV4dCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdEltYWdlcywgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWxJbWFnZXMoeyBwcm9qZWN0SW1hZ2VzLCBwcm9qZWN0SWQgfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IHNlbGVjdGVkLCB1cGRhdGVTZWxlY3RlZCwgcmVzZXRTZWxlY3RlZCB9ID0gdXNlU2VsZWN0aW9uKCk7XG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblx0Y29uc3QgeyB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlUHJvamVjdEltYWdlcywge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSk7XG5cdFx0XHRyZXNldFNlbGVjdGVkKCk7XG5cdFx0fSxcblx0fSk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IGFjdGlvbnMgPSBbXG5cdFx0e1xuXHRcdFx0dGl0bGU6ICdSZW1vdmUnLFxuXHRcdFx0dGhlbWU6ICdkYW5nZXInLFxuXHRcdFx0aGFzUGVybWlzc2lvbjogWydhZG1pbiddLFxuXHRcdFx0aWNvbjogZGVsZXRlSWNvbixcblx0XHRcdGljb25TaXplOiAxMCxcblx0XHRcdG11dGF0aW9uOiAoKSA9PiBkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkLCBwcm9qZWN0SW1hZ2VJZHM6IHNlbGVjdGVkIH0pLFxuXHRcdFx0aXNMb2FkaW5nOiBkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24uaXNMb2FkaW5nLFxuXHRcdH0sXG5cdF07XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3NlbGVjdGVkLmxlbmd0aCA+IDAgJiYgJ2hhcy1zZWxlY3Rpb25zJ31gfT5cblx0XHRcdFx0e3VzZXJSb2xlID09PSAnYWRtaW4nID8gKFxuXHRcdFx0XHRcdDxEcm9wem9uZSB7Li4ueyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZXMsIHBvc2l0aXRpb246ICdyaWdodCcgfX0+XG5cdFx0XHRcdFx0XHR7KCkgPT4gPEltYWdlcyB7Li4ueyBwcm9qZWN0SW1hZ2VzLCBwcm9qZWN0SWQsIHNlbGVjdGVkLCB1cGRhdGVTZWxlY3RlZCB9fSAvPn1cblx0XHRcdFx0XHQ8L0Ryb3B6b25lPlxuXHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtNVwiPlxuXHRcdFx0XHRcdFx0PEltYWdlcyB7Li4ueyBwcm9qZWN0SW1hZ2VzLCBwcm9qZWN0SWQsIHNlbGVjdGVkLCB1cGRhdGVTZWxlY3RlZCB9fSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7c2VsZWN0ZWQubGVuZ3RoID4gMCAmJiB1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiAoXG5cdFx0XHRcdFx0PEFjdGlvbk1lbnUgey4uLnsgc2VsZWN0ZWQsIHJlc2V0U2VsZWN0ZWQsIGFjdGlvbnMgfX0gLz5cblx0XHRcdFx0KX1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvPlxuXHQpO1xufVxuXG5jb25zdCBJbWFnZXMgPSAoeyBwcm9qZWN0SW1hZ2VzLCBwcm9qZWN0SWQsIHNlbGVjdGVkLCB1cGRhdGVTZWxlY3RlZCB9KSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdHtwcm9qZWN0SW1hZ2VzLm1hcCgocHJvamVjdEltYWdlLCBwcm9qZWN0SW1hZ2VJbmRleCkgPT4gKFxuXHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdHsuLi5TVEFHR0VSX1VQKHByb2plY3RJbWFnZUluZGV4KX1cblx0XHRcdFx0XHRrZXk9e3Byb2plY3RJbWFnZS5pZH1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXhsLTMgY29sLXh4bC0yXCJcblx0XHRcdFx0XHRsYXlvdXQ+XG5cdFx0XHRcdFx0PFByb2plY3REZXRhaWxJbWFnZSB7Li4ueyBwcm9qZWN0SW1hZ2UsIHByb2plY3RJZCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH19IC8+XG5cdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdCkpfVxuXHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHQpO1xufTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdERldGFpbEhlYWRlciB9IGZyb20gJy4vUHJvamVjdERldGFpbEhlYWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3REZXRhaWxJbWFnZXMgfSBmcm9tICcuL1Byb2plY3REZXRhaWxJbWFnZXMnO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXJzIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IHsgUHJvamVjdEltYWdlIH0gZnJvbSAnLi8nO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjaGVja0ljb24gZnJvbSAnaWNvbnMvY2hlY2suc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdCh7IHByb2plY3QsIHNlbGVjdGVkLCB1cGRhdGVTZWxlY3RlZCB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IHRpdGxlLCBwcm9qZWN0SW1hZ2VzLCB1c2VycywgYXV0aG9yLCBpZCB9ID0gcHJvamVjdDtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8TGlua1xuXHRcdFx0dG89e2Bwcm9qZWN0cy8ke2lkfWB9XG5cdFx0XHR0aXRsZT17dGl0bGV9XG5cdFx0XHRjbGFzc05hbWU9e2BjYXJkIGNhcmQtLWxpbmsgY2FyZC0tcHJvZHVjdCAke3NlbGVjdGVkLmluY2x1ZGVzKGlkKSAmJiAnaXMtc2VsZWN0ZWQnfWB9PlxuXHRcdFx0PFByb2plY3RJbWFnZSB7Li4ueyBwcm9qZWN0SW1hZ2VzIH19IC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtblwiPlxuXHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1iLTJcIj57dGl0bGUgPyB0aXRsZSA6ICdBZGQgYSBuaWNlIHRpdGxlJ308L3A+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHQ8VXNlcnMgey4uLnsgdXNlcnMsIHByb2plY3Q6IHsgYXV0aG9yIH0sIGxheW91dDogJ21pbmltYWwnLCB1c2VMYXlvdXQ6IGZhbHNlIH19IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdFwiPlxuXHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FyZF9fc2VsZWN0LXRvZ2dsZVwiXG5cdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0dXBkYXRlU2VsZWN0ZWQoaWQpO1xuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiY2FyZF9fc2VsZWN0LWljb24gaWNvbiBpY29uLS04XCIgc3JjPXtjaGVja0ljb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9MaW5rPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IHsgUHJvamVjdFNsaWRlSW4gfSBmcm9tICcuLyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNDQUxFX0ZBREUgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkUHJvamVjdEljb24gZnJvbSAnaWNvbnMvYWRkX3Byb2plY3Quc3ZnJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBhZGRQcm9qZWN0LCBRVUVSWV9LRVlTLCBlZGl0UHJvamVjdCwgZmV0Y2hQcm9qZWN0QnlJZCB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RBZGQoeyBzZXROZXdQcm9qZWN0SWQgfSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbcHJvamVjdElkLCBzZXRQcm9qZWN0SWRdID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IFtzbGlkZUluT3Blbiwgc2V0U2xpZGVJbk9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgZGF0YTogcHJvamVjdCB9ID0gdXNlUXVlcnkoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSwgKCkgPT4gZmV0Y2hQcm9qZWN0QnlJZCh7IHByb2plY3RJZCB9KSwge1xuXHRcdGVuYWJsZWQ6ICEhcHJvamVjdElkLFxuXHR9KTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldE5ld1Byb2plY3RJZChwcm9qZWN0SWQpO1xuXHR9LCBbcHJvamVjdElkXSk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGFkZE11dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkUHJvamVjdCwge1xuXHRcdG9uU3VjY2VzczogKHsgaWQgfSkgPT4gc2V0UHJvamVjdElkKGlkKSxcblx0fSk7XG5cblx0Y29uc3QgZWRpdE11dGF0aW9uID0gdXNlTXV0YXRpb24oZWRpdFByb2plY3QsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IGludmFsaWRhdGVQcm9qZWN0KCksXG5cdH0pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB0b2dnbGVTbGlkZUluID0gKCkgPT4ge1xuXHRcdHNldFNsaWRlSW5PcGVuKCFzbGlkZUluT3Blbik7XG5cblx0XHQvKiBNdXRhdGUgb24gbW9kYWwgb3BlbiAqL1xuXHRcdGlmICghc2xpZGVJbk9wZW4pIGFkZE11dGF0aW9uLm11dGF0ZSgpO1xuXG5cdFx0LyogUmVzZXQgaWQgb24gY2xvc2UgbW9kYWwgKi9cblx0XHRpZiAoc2xpZGVJbk9wZW4pIHtcblx0XHRcdHNldFRpbWVvdXQoKCkgPT4ge1xuXHRcdFx0XHRzZXRQcm9qZWN0SWQobnVsbCk7XG5cdFx0XHR9LCAyNTApO1xuXG5cdFx0XHRpbnZhbGlkYXRlUHJvamVjdCgpO1xuXHRcdH1cblx0fTtcblxuXHRjb25zdCB1cGRhdGVQcm9qZWN0ID0gKGZvcm1SZWYpID0+IGVkaXRNdXRhdGlvbi5tdXRhdGUoeyBmb3JtUmVmLCBpZDogcHJvamVjdElkIH0pO1xuXHRjb25zdCBpbnZhbGlkYXRlUHJvamVjdCA9ICgpID0+IHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuUFJPSkVDVF9CWV9VU0VSKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PG1vdGlvbi5idXR0b25cblx0XHRcdFx0ey4uLlNDQUxFX0ZBREV9XG5cdFx0XHRcdGtleT1cImFkZC1wcm9qZWN0XCJcblx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdGNsYXNzTmFtZT1cImljb24td3JhcHBlciBpY29uLXdyYXBwZXItLWludGVyYWN0aXZlIGljb24td3JhcHBlci0tc2Vjb25kYXJ5IGJ0biBidG4tbGluayBidG4tLWFkZCBidG4tLWFkZC1yaWdodFwiXG5cdFx0XHRcdHN0eWxlPXt7ICctLXNpemUnOiA3NSB9fVxuXHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVTbGlkZUlufT5cblx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTMwIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXthZGRQcm9qZWN0SWNvbn0gLz5cblx0XHRcdDwvbW90aW9uLmJ1dHRvbj5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHtzbGlkZUluT3BlbiAmJiA8UHJvamVjdFNsaWRlSW4gey4uLnsgcHJvamVjdCwgdXBkYXRlUHJvamVjdCwgdG9nZ2xlU2xpZGVJbiB9fSAvPn1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZEltYWdlSWNvbiBmcm9tICdpY29ucy9hZGRfaW1hZ2Uuc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdEltYWdlKHsgcHJvamVjdEltYWdlcyB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IHBoYXNlID0ge30sIHRpdGxlIH0gPSBwcm9qZWN0SW1hZ2VzWzBdIHx8IHt9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9faW1hZ2UgYm9yZGVyIG0tMlwiPlxuXHRcdFx0e3BoYXNlLmltYWdlICYmIChcblx0XHRcdFx0PEltYWdlXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJcblx0XHRcdFx0XHRzcmM9e3BoYXNlLmltYWdlLnRodW1ibmFpbH1cblx0XHRcdFx0XHRzcmNTZXQ9e2Ake3BoYXNlLmltYWdlLnRodW1ibmFpbFJldGluYX0gMnhgfVxuXHRcdFx0XHRcdGFsdD17dGl0bGV9XG5cdFx0XHRcdC8+XG5cdFx0XHQpfVxuXHRcdFx0eyFwaGFzZS5pbWFnZSAmJiA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tNDggdGV4dC1tdXRlZC0tNDBcIiBzcmM9e2FkZEltYWdlSWNvbn0gLz59XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBBY3Rpb25NZW51IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4vJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiwgU1RBR0dFUl9VUCB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcbmltcG9ydCBsZWF2ZUljb24gZnJvbSAnaWNvbnMvbGVhdmUuc3ZnJztcbmltcG9ydCBhcmNoaXZlSWNvbiBmcm9tICdpY29ucy9hcmNoaXZlLnN2Zyc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdHMsIGxlYXZlUHJvamVjdHMsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJlc3VsdHMoeyBwcm9qZWN0cywgbmV3UHJvamVjdElkIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQsIHJlc2V0U2VsZWN0ZWQgfSA9IHVzZVNlbGVjdGlvbigpO1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGxlYXZlUHJvamVjdHNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGxlYXZlUHJvamVjdHMsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuUFJPSkVDVF9CWV9VU0VSKTtcblx0XHRcdHJlc2V0U2VsZWN0ZWQoKTtcblx0XHR9LFxuXHR9KTtcblxuXHRjb25zdCBkZWxldGVQcm9qZWN0c011dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlUHJvamVjdHMsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuUFJPSkVDVF9CWV9VU0VSKTtcblx0XHRcdHJlc2V0U2VsZWN0ZWQoKTtcblx0XHR9LFxuXHR9KTtcblxuXHRjb25zdCBhY3Rpb25zID0gW1xuXHRcdHtcblx0XHRcdHRpdGxlOiAnTGVhdmUnLFxuXHRcdFx0dGhlbWU6ICd3YXJuaW5nJyxcblx0XHRcdGhhc1Blcm1pc3Npb246IFsndXNlcicsICdiYXNpYyddLFxuXHRcdFx0aWNvbjogbGVhdmVJY29uLFxuXHRcdFx0bXV0YXRpb246ICgpID0+IGxlYXZlUHJvamVjdHNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWRzOiBzZWxlY3RlZCwgdXNlcklkOiBjdXJyZW50VXNlci5pZCB9KSxcblx0XHRcdGlzTG9hZGluZzogbGVhdmVQcm9qZWN0c011dGF0aW9uLmlzTG9hZGluZyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiAnQXJjaGl2ZScsXG5cdFx0XHR0aGVtZTogJ3NlY29uZGFyeScsXG5cdFx0XHRoYXNQZXJtaXNzaW9uOiBbJ2FkbWluJ10sXG5cdFx0XHRpY29uOiBhcmNoaXZlSWNvbixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiAnUmVtb3ZlJyxcblx0XHRcdHRoZW1lOiAnZGFuZ2VyJyxcblx0XHRcdGhhc1Blcm1pc3Npb246IFsnYWRtaW4nXSxcblx0XHRcdGljb246IGNsb3NlSWNvbixcblx0XHRcdGljb25TaXplOiAxMCxcblx0XHRcdG11dGF0aW9uOiAoKSA9PiBkZWxldGVQcm9qZWN0c011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZHM6IHNlbGVjdGVkIH0pLFxuXHRcdFx0aXNMb2FkaW5nOiBkZWxldGVQcm9qZWN0c011dGF0aW9uLmlzTG9hZGluZyxcblx0XHR9LFxuXHRdO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8aDEgY2xhc3NOYW1lPVwiaDUgdGV4dC13aGl0ZSBtYi02XCI+WW91ciBwcm9qZWN0czwvaDE+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7cHJvamVjdHMubGVuZ3RoID09PSAwICYmIChcblx0XHRcdFx0XHQ8bW90aW9uLnAgey4uLkZBREVfSU59IGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbWItMCBwb3NpdGlvbi1hYnNvbHV0ZVwiPlxuXHRcdFx0XHRcdFx0e2BZb3UgZG9uJ3QgaGF2ZSBhbnkgcHJvamVjdHMgeWV0YH1cblx0XHRcdFx0XHQ8L21vdGlvbi5wPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YHJvdyByb3ctLWVxdWFsaXplZCBndXR0ZXJzLTUgJHtzZWxlY3RlZC5sZW5ndGggPiAwICYmICdoYXMtc2VsZWN0aW9ucyd9YH0+XG5cdFx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdFx0e3Byb2plY3RzXG5cdFx0XHRcdFx0XHQuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkICE9PSBuZXdQcm9qZWN0SWQpXG5cdFx0XHRcdFx0XHQubWFwKChwcm9qZWN0LCBwcm9qZWN0SW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRcdFx0XHR7Li4uU1RBR0dFUl9VUChwcm9qZWN0SW5kZXgpfVxuXHRcdFx0XHRcdFx0XHRcdGtleT17cHJvamVjdC5pZH1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXhsLTMgY29sLXh4bC0yXCJcblx0XHRcdFx0XHRcdFx0XHRsYXlvdXQ+XG5cdFx0XHRcdFx0XHRcdFx0PFByb2plY3Qgey4uLnsgcHJvamVjdCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH19IC8+XG5cdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e3NlbGVjdGVkLmxlbmd0aCA+IDAgJiYgPEFjdGlvbk1lbnUgey4uLnsgc2VsZWN0ZWQsIHJlc2V0U2VsZWN0ZWQsIGFjdGlvbnMgfX0gLz59XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dGFyZWFBdXRvc2l6ZSc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgRHJvcHpvbmUsIExvYWRpbmdXcmFwcGVyLCBTbGlkZUluLCBVc2VycywgVXNlckFkZCwgSW1hZ2UgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU1RBR0dFUl9VUCB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0U2xpZGVJbih7IHByb2plY3QgPSB7fSwgdXBkYXRlUHJvamVjdCwgdG9nZ2xlU2xpZGVJbiB9KSB7XG5cdC8qIENvbnN0YW50cyAgKi9cblx0Y29uc3QgeyBpZDogcHJvamVjdElkID0gbnVsbCwgdGl0bGUgPSAnJywgcHJvamVjdEltYWdlcyA9IFtdLCB1c2VycyA9IFtdIH0gPSBwcm9qZWN0O1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgZm9ybVJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxTbGlkZUluIHsuLi57IHRvZ2dsZVNsaWRlSW4gfX0gZG9tRWxlbWVudD17ZG9jdW1lbnQuYm9keX0+XG5cdFx0XHQ8Zm9ybVxuXHRcdFx0XHRyZWY9e2Zvcm1SZWZ9XG5cdFx0XHRcdG1ldGhvZD1cIlBPU1RcIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJzbGlkZS1pbl9fZm9ybVwiXG5cdFx0XHRcdG9uU3VibWl0PXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRvZ2dsZVNsaWRlSW4oKTtcblx0XHRcdFx0fX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5fX2hlYWRlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHB0LTYgcHQtbWQtMTIgcGItM1wiPlxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInByb2plY3RUaXRsZVwiPlxuXHRcdFx0XHRcdFx0e3RpdGxlfVxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLS1jbGVhciB0ZXh0LS14bFwiXG5cdFx0XHRcdFx0XHRpZD1cInByb2plY3RUaXRsZVwiXG5cdFx0XHRcdFx0XHRuYW1lPVwidGl0bGVcIlxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJUaGUgcHJvamVjdCBuYW1lXCJcblx0XHRcdFx0XHRcdG9uQmx1cj17KCkgPT4gdXBkYXRlUHJvamVjdChmb3JtUmVmKX1cblx0XHRcdFx0XHRcdGF1dG9Gb2N1c1xuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJzbGlkZS1pbl9fY2xvc2UgYnRuIGJ0bi1saW5rIG1sLWF1dG9cIlxuXHRcdFx0XHRcdFx0ZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxuXHRcdFx0XHRcdFx0YXJpYS1sYWJlbD1cIkNsb3NlXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZVNsaWRlSW59XG5cdFx0XHRcdFx0XHR0YWJJbmRleD1cIi0xXCI+XG5cdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTRcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwic2xpZGUtaW5fX2JvZHkgcHQtMyBwYi0xMlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtMlwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJwcm9qZWN0RGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHRcdFx0XHR7YFdoYXQncyB0aGlzIHByb2plY3QgYWJvdXQ/YH1cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PFRleHRhcmVhQXV0b3NpemVcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLS10ZXh0IGZvcm0tY29udHJvbC0tY2xlYXIgbWItMTBcIlxuXHRcdFx0XHRcdFx0XHRcdGlkPVwicHJvamVjdERlc2NyaXB0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGVzY3JpcHRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiV2hhdCdzIHRoaXMgcHJvamVjdCBhYm91dD9cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQmx1cj17KCkgPT4gdXBkYXRlUHJvamVjdChmb3JtUmVmKX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmUgbWwtYXV0b1wiPlxuXHRcdFx0XHRcdFx0XHQ8VXNlcnMgey4uLnsgdXNlcnMsIHByb2plY3QgfX0gc2l6ZT1cImxnXCIgLz5cblx0XHRcdFx0XHRcdFx0PFVzZXJBZGQgey4uLnsgdXNlcnMsIHByb2plY3QgfX0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxEcm9wem9uZSB7Li4ueyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZXMgfX0+XG5cdFx0XHRcdFx0XHR7KHsgdXBkYXRlUHJvamVjdEltYWdlcywgaXNMb2FkaW5nIH0pID0+IChcblx0XHRcdFx0XHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0XHRcdFx0XHR7cHJvamVjdEltYWdlcy5tYXAoKHByb2plY3RJbWFnZSwgcHJvamVjdEltYWdlSW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdDxEcm9wem9uZUltYWdlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17cHJvamVjdEltYWdlLmlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ueyBwcm9qZWN0SW1hZ2UsIHByb2plY3RJbWFnZUluZGV4LCB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc0xvYWRpbmcgfX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L0Ryb3B6b25lPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzbGlkZS1pbl9fZm9vdGVyIHBiLTYgcGItbWQtMTJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTAgdy0xMDBcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy0xIG1sLWF1dG9cIj5cblx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInNsaWRlLWluX19idG4gYnRuIGJ0bi1ibG9jayBidG4tc2Vjb25kYXJ5IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHRcdDxtb3Rpb24uc3BhbiBjbGFzc05hbWU9XCJidG4tdGV4dFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+U2F2ZTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L21vdGlvbi5zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L1NsaWRlSW4+XG5cdCk7XG59XG5cbmNvbnN0IERyb3B6b25lSW1hZ2UgPSAoeyBwcm9qZWN0SW1hZ2UsIHByb2plY3RJbWFnZUluZGV4LCB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc0xvYWRpbmcgfSkgPT4ge1xuXHRjb25zdCB7IHRpdGxlLCBpZCwgcGhhc2UgPSB7fSB9ID0gcHJvamVjdEltYWdlO1xuXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXZcblx0XHRcdGxheW91dFxuXHRcdFx0ey4uLlNUQUdHRVJfVVAocHJvamVjdEltYWdlSW5kZXgpfVxuXHRcdFx0Y2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC14bC0zIGNvbC14eGwtMlwiXG5cdFx0XHRrZXk9e2lkfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZHJvcHpvbmVfX2NvbnRhaW5lclwiPlxuXHRcdFx0XHQ8SW1hZ2Vcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJkcm9wem9uZV9faW1hZ2UgaW1nLWZsdWlkXCJcblx0XHRcdFx0XHRzcmM9e3BoYXNlLmltYWdlLnRodW1ibmFpbH1cblx0XHRcdFx0XHRzcmNTZXQ9e2Ake3BoYXNlLmltYWdlLnRodW1ibmFpbFJldGluYX0gMnhgfVxuXHRcdFx0XHRcdGFsdD17dGl0bGV9XG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgZHJvcHpvbmVfX2ltYWdlLWRlbGV0ZSBwLTBcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHR1cGRhdGVQcm9qZWN0SW1hZ2VzKCdkZWxldGUnLCB7IHByb2plY3RJbWFnZUlkczogW2lkXSB9KTtcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHQ8ZGl2XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJkcm9wem9uZV9faW1hZ2UtZGVsZXRlLWljb24gaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0tZGFuZ2VyIG14LWF1dG9cIlxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgJy0tc2l6ZSc6IDUwIH19PlxuXHRcdFx0XHRcdFx0PExvYWRpbmdXcmFwcGVyXG5cdFx0XHRcdFx0XHRcdGxvYWRpbmc9e2lzTG9hZGluZ31cblx0XHRcdFx0XHRcdFx0bG9hZGVyU2l6ZT17MjB9XG5cdFx0XHRcdFx0XHRcdGNsYXNzZXM9e3tcblx0XHRcdFx0XHRcdFx0XHRsb2FkZXJDbGFzc2VzOiAncG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4IHRleHQtZGFuZ2VyJyxcblx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNCB0ZXh0LWRhbmdlciBtdC0wXCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0XHQ8L0xvYWRpbmdXcmFwcGVyPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbW90aW9uLmRpdj5cblx0KTtcbn07XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3QgfSBmcm9tICcuL1Byb2plY3QnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0QWRkIH0gZnJvbSAnLi9Qcm9qZWN0QWRkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdEltYWdlIH0gZnJvbSAnLi9Qcm9qZWN0SW1hZ2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0U2xpZGVJbiB9IGZyb20gJy4vUHJvamVjdFNsaWRlSW4nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0UmVzdWx0cyB9IGZyb20gJy4vUHJvamVjdFJlc3VsdHMnO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCB7IFByb2plY3RSZXZpZXdBY3Rpb25CYXIgfSBmcm9tICcuL3Byb2plY3QtcmV2aWV3LWFjdGlvbi1iYXInO1xuaW1wb3J0IFByb2plY3RSZXZpZXdNYXJrZXIgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3TWFya2VyJztcbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudE1vZGFsIGZyb20gJy4vUHJvamVjdFJldmlld0NvbW1lbnRNb2RhbCc7XG5pbXBvcnQgUHJvamVjdFJldmlld0NvbW1lbnRBZGQgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3Q29tbWVudEFkZCc7XG5pbXBvcnQgUHJvamVjdFJldmlld1BhZ2luYXRpb24gZnJvbSAnLi9Qcm9qZWN0UmV2aWV3UGFnaW5hdGlvbic7XG5pbXBvcnQgUHJvamVjdFJldmlld0NvbW1lbnRQYW5lbCBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50UGFuZWwnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBTZWN1cml0eU1vZGFsLCBJbWFnZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGZldGNoUHJvamVjdFVzZXJzLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IHsgU3RhdGljQ29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTTElERV9JTiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBHbG9iYWwgKi9cbmNvbnN0IGN1cnNvck9mZnNldCA9IDEwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3Q2FudmFzKHsgcGFyZW50SWQsIHRpdGxlLCBwaGFzZSwgLi4ucmVzdCB9KSB7XG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBkYXRhOiBwcm9qZWN0VXNlcnMgPSBbXSB9ID0gdXNlUXVlcnkoXG5cdFx0W1FVRVJZX0tFWVMuUFJPSkVDVF9VU0VSUywgcGFyZW50SWRdLFxuXHRcdCgpID0+IGZldGNoUHJvamVjdFVzZXJzKHsgcHJvamVjdElkOiBwYXJlbnRJZCB9KSxcblx0XHR7XG5cdFx0XHRlbmFibGVkOiAhIXBhcmVudElkLFxuXHRcdH1cblx0KTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyBpbWFnZSwgaWQ6IHBoYXNlSWQsIGNvbW1lbnRzLCBwaGFzZTogcGhhc2VOdW1iZXIgfSA9IHBoYXNlO1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogUmVmcyAqL1xuXHRjb25zdCByZXZpZXdSZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbbWFya2VyUG9zLCBzZXRNYXJrZXJQb3NdID0gdXNlU3RhdGUoKTtcblx0Y29uc3QgW3NlY3VyaXR5TW9kYWxPcGVuLCBzZXRTZWN1cml0eU1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtjb21tZW50c1BhbmVsT3Blbiwgc2V0Q29tbWVudHNQYW5lbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXHRjb25zdCBbY29tbWVudEZvY3VzZWQsIHNldENvbW1lbnRGb2N1c2VkXSA9IHVzZVN0YXRlKCk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZUNvbW1lbnRBZGRPcGVuID0gKCkgPT4gc2V0TWFya2VyUG9zKG51bGwpO1xuXHRjb25zdCB0b2dnbGVDb21tZW50c1BhbmVsID0gKCkgPT4gc2V0Q29tbWVudHNQYW5lbE9wZW4oIWNvbW1lbnRzUGFuZWxPcGVuKTtcblxuXHRjb25zdCBwb3NNYXJrZXIgPSAoeyBjbGllbnRYLCBjbGllbnRZIH0pID0+IHtcblx0XHRpZiAoIWN1cnJlbnRVc2VyLmF1dGhlbnRpY2F0ZWQpIHtcblx0XHRcdHNldFNlY3VyaXR5TW9kYWxPcGVuKHRydWUpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGNvbnN0IHJldmlld1BvcyA9IHJldmlld1JlZj8uY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdHNldE1hcmtlclBvcygoKSA9PiB7XG5cdFx0XHRjb25zdCB4UGVyY2VudCA9ICgoY2xpZW50WCAtIGN1cnNvck9mZnNldCAtIHJldmlld1Bvcy54KSAvIHJldmlld1Bvcy53aWR0aCkgKiAxMDA7XG5cdFx0XHRjb25zdCB5UGVyY2VudCA9ICgoY2xpZW50WSAtIHJldmlld1Bvcy50b3AgLSBjdXJzb3JPZmZzZXQpIC8gcmV2aWV3UG9zLmhlaWdodCkgKiAxMDA7XG5cblx0XHRcdHJldHVybiB7IHhQZXJjZW50LCB5UGVyY2VudCwgcmV2aWV3UG9zIH07XG5cdFx0fSk7XG5cdH07XG5cblx0LyogcmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwicmV2aWV3IHBvc2l0aW9uLXJlbGF0aXZlIG14LW4xMiBtYi0zIG10LW4xMCBtaW4tdmgtMTAwXCI+XG5cdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRjbGFzc05hbWU9XCJyZXZpZXdfX2ltYWdlLXdyYXBwZXIgcG9zaXRpb24tcmVsYXRpdmVcIlxuXHRcdFx0XHRyZWY9e3Jldmlld1JlZn1cblx0XHRcdFx0aW5pdGlhbD17eyB3aWR0aDogJzEwMCUnIH19XG5cdFx0XHRcdGFuaW1hdGU9e3tcblx0XHRcdFx0XHR3aWR0aDogY29tbWVudHNQYW5lbE9wZW4gPyBgY2FsYygxMDAlIC0gNDAwcHgpYCA6ICcxMDAlJyxcblx0XHRcdFx0XHR0cmFuc2l0aW9uOiBjb21tZW50c1BhbmVsT3BlbiA/IFNMSURFX0lOLmFuaW1hdGUudHJhbnNpdGlvbiA6IFNMSURFX0lOLmV4aXQudHJhbnNpdGlvbixcblx0XHRcdFx0fX0+XG5cdFx0XHRcdDxJbWFnZVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cInJldmlld19faW1hZ2UgaW1nLWZsdWlkIHctMTAwXCJcblx0XHRcdFx0XHRzcmM9e2ltYWdlLm9yaWdpbmFsfVxuXHRcdFx0XHRcdHNyY1NldD17YCR7aW1hZ2Uub3JpZ2luYWx9IDJ4YH1cblx0XHRcdFx0XHRhbHQ9e3RpdGxlfVxuXHRcdFx0XHRcdG9uQ2xpY2s9e3Bvc01hcmtlcn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0e2NvbW1lbnRzPy5tYXAoKGNvbW1lbnQsIGNvbW1lbnRJbmRleCkgPT4gKFxuXHRcdFx0XHRcdDxQcm9qZWN0UmV2aWV3Q29tbWVudE1vZGFsXG5cdFx0XHRcdFx0XHRrZXk9e2NvbW1lbnQuaWR9XG5cdFx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0XHRjb21tZW50LFxuXHRcdFx0XHRcdFx0XHRjb21tZW50SW5kZXgsXG5cdFx0XHRcdFx0XHRcdHJldmlld1JlZixcblx0XHRcdFx0XHRcdFx0cHJvamVjdFVzZXJzLFxuXHRcdFx0XHRcdFx0XHR0b2dnbGVDb21tZW50QWRkT3Blbixcblx0XHRcdFx0XHRcdFx0Y29tbWVudEZvY3VzZWQsXG5cdFx0XHRcdFx0XHR9fVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdCkpfVxuXHRcdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHRcdHttYXJrZXJQb3MgJiYgKFxuXHRcdFx0XHRcdFx0PFByb2plY3RSZXZpZXdNYXJrZXIgey4uLnsgLi4ubWFya2VyUG9zIH19PlxuXHRcdFx0XHRcdFx0XHQ8UHJvamVjdFJldmlld0NvbW1lbnRBZGQgey4uLnsgbWFya2VyUG9zLCBwaGFzZUlkLCB0b2dnbGVDb21tZW50QWRkT3BlbiB9fSAvPlxuXHRcdFx0XHRcdFx0PC9Qcm9qZWN0UmV2aWV3TWFya2VyPlxuXHRcdFx0XHRcdCl9XG5cdFx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHQ8U2VjdXJpdHlNb2RhbCB7Li4ueyBzZWN1cml0eU1vZGFsT3Blbiwgc2V0U2VjdXJpdHlNb2RhbE9wZW4gfX0gLz5cblx0XHRcdFx0PFByb2plY3RSZXZpZXdQYWdpbmF0aW9uIHsuLi5yZXN0fSAvPlxuXHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0PFByb2plY3RSZXZpZXdBY3Rpb25CYXJcblx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHQuLi5yZXN0LFxuXHRcdFx0XHRcdHRpdGxlLFxuXHRcdFx0XHRcdHBoYXNlTnVtYmVyLFxuXHRcdFx0XHRcdHBoYXNlSWQsXG5cdFx0XHRcdFx0Y29tbWVudHNQYW5lbE9wZW4sXG5cdFx0XHRcdFx0dG9nZ2xlQ29tbWVudHNQYW5lbCxcblx0XHRcdFx0XHRwcm9qZWN0VXNlcnMsXG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e2NvbW1lbnRzUGFuZWxPcGVuICYmIChcblx0XHRcdFx0XHQ8UHJvamVjdFJldmlld0NvbW1lbnRQYW5lbFxuXHRcdFx0XHRcdFx0ey4uLnsgY29tbWVudHMsIGNvbW1lbnRzUGFuZWxPcGVuLCB0b2dnbGVDb21tZW50c1BhbmVsLCBwcm9qZWN0VXNlcnMsIHNldENvbW1lbnRGb2N1c2VkIH19XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0KX1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvbW90aW9uLmRpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IG1vdGlvbiwgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIENvbXBvbmVudHMqL1xuaW1wb3J0IHsgVXNlciwgVXNlckluZm8gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2hlY2tJY29uIGZyb20gJ2ljb25zL2NoZWNrLnN2Zyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgY2hlY2tDb21tZW50IH0gZnJvbSAnLi4vLi4vYXBpJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU0NBTEVfRkFERSB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgeyBTdGF0aWNDb250ZXh0IH0gZnJvbSAnLi4vLi4vY29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXdDb21tZW50KHtcblx0Y29tbWVudDogY29udGVudCxcblx0Y29tbWVudEluZGV4LFxuXHRwcm9qZWN0VXNlcnMsXG5cdHNldFJlcGx5VG9Vc2VyLFxuXHRyZW5kZXJBdXRob3IgPSBmYWxzZSxcblx0c2hvd0luaXRpYWxSZXBsaWVzID0gZmFsc2UsXG5cdHNldENvbW1lbnRGb2N1c2VkID0gKCkgPT4ge30sXG59KSB7XG5cdC8qIENvbnRleHQgKi9cblx0Y29uc3QgeyB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblxuXHQvKiBDb250YW50cyAqL1xuXHRjb25zdCB7IGF1dGhvciwgaWQsIGNoZWNrZWQsIGNyZWF0ZWQsIGNvbW1lbnQsIGNvbW1lbnRzIH0gPSBjb250ZW50O1xuXG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtzaG93UmVwbGllcywgc2V0U2hvd1JlcGxpZXNdID0gdXNlU3RhdGUoc2hvd0luaXRpYWxSZXBsaWVzKTtcblx0Y29uc3QgW2lzQ2hlY2tlZCwgc2V0SXNDaGVja2VkXSA9IHVzZVN0YXRlKGNoZWNrZWQpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBjaGVja0NvbW1lbnRNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGNoZWNrQ29tbWVudCk7XG5cblx0LyogUmVuZGVyIGNvbXBvbmVudCAqL1xuXHRjb25zdCByZW5kZXJDb21tZW50ID0gKCkgPT4ge1xuXHRcdGNvbnN0IHVzZXJzUmVnZXggPSAvQFxcW1teXFxdXSpcXF1cXHtbMC05XStcXH0vZ2k7XG5cdFx0Y29uc3QgdXNlcnNBcnJheSA9IFsuLi5jb21tZW50Lm1hdGNoQWxsKHVzZXJzUmVnZXgpXTtcblx0XHRjb25zdCBjb21tZW50cyA9IGNvbW1lbnQuc3BsaXQoL0BcXFtbXlxcXV0qXFxdXFx7WzAtOV0rXFx9L2dpKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8cCBjbGFzc05hbWU9XCJsaC0tbWRcIj5cblx0XHRcdFx0e2NvbW1lbnRzLm1hcCgoY29tbWVudCwgY29tbWVudEluZGV4KSA9PiB7XG5cdFx0XHRcdFx0bGV0IHVzZXI7XG5cblx0XHRcdFx0XHRpZiAoY29tbWVudEluZGV4IGluIHVzZXJzQXJyYXkpIHtcblx0XHRcdFx0XHRcdHVzZXIgPSBwcm9qZWN0VXNlcnMuZmluZCgodXNlcikgPT4gdXNlcnNBcnJheVtjb21tZW50SW5kZXhdWzBdLmluY2x1ZGVzKHVzZXIuZGlzcGxheSkpO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHQ8UmVhY3QuRnJhZ21lbnQga2V5PXtjb21tZW50SW5kZXh9PlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJjb21tZW50X19jb250ZW50XCI+e2Ake2NvbW1lbnR9IGB9PC9zcGFuPnsnICd9XG5cdFx0XHRcdFx0XHRcdHt1c2VyICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tbWVudF9fbWVudGlvbiBtZW50aW9uc19fbWVudGlvbiBweC0xXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgJy0tdGhlbWUnOiB1c2VyLnVzZXJDb2xvciB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+QHt1c2VyLmRpc3BsYXl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPnsnICd9XG5cdFx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L1JlYWN0LkZyYWdtZW50PlxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH0pfVxuXHRcdFx0PC9wPlxuXHRcdCk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxkaXZcblx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tbWVudFwiXG5cdFx0XHRcdG9uTW91c2VFbnRlcj17KCkgPT4gc2V0Q29tbWVudEZvY3VzZWQoY29tbWVudEluZGV4KX1cblx0XHRcdFx0b25Nb3VzZUxlYXZlPXsoKSA9PiBzZXRDb21tZW50Rm9jdXNlZChudWxsKX0+XG5cdFx0XHRcdHtyZW5kZXJBdXRob3IgJiYgKFxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCI+XG5cdFx0XHRcdFx0XHQ8VXNlciB7Li4ueyB1c2VyOiBhdXRob3IgfX0gLz5cblx0XHRcdFx0XHRcdDxVc2VySW5mb1xuXHRcdFx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0XHRcdHRpdGxlOiBhdXRob3IuZGlzcGxheSxcblx0XHRcdFx0XHRcdFx0XHRzdWJ0aXRsZTogYC8gJHthdXRob3Iub3JnYW5pc2F0aW9ufWAsXG5cdFx0XHRcdFx0XHRcdFx0bGF5b3V0OiAnaG9yaXpvbnRhbCcsXG5cdFx0XHRcdFx0XHRcdFx0c2l6ZTogJ3NtJyxcblx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHR7dHlwZW9mIGNvbW1lbnRJbmRleCAhPT0gJ3VuZGVmaW5lZCcgJiYgKFxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIG1sLWF1dG8gaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0taHNsIGljb24td3JhcHBlci0taW50ZXJhY3RpdmUgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdHN0eWxlPXt7ICctLXRoZW1lJzogYXV0aG9yLnVzZXJDb2xvciB9fVxuXHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmICh1c2VyUm9sZSAhPT0gJ2FkbWluJykgcmV0dXJuO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRzZXRJc0NoZWNrZWQoIWlzQ2hlY2tlZCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRjaGVja0NvbW1lbnRNdXRhdGlvbi5tdXRhdGUoeyBjb21tZW50SWQ6IGlkIH0pO1xuXHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyPlxuXHRcdFx0XHRcdFx0XHRcdFx0e2lzQ2hlY2tlZCAmJiB1c2VyUm9sZSA9PT0gJ2FkbWluJyA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG1vdGlvbi5kaXYga2V5PVwiY2hlY2tlZFwiIHsuLi5TQ0FMRV9GQURFfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTBcIiBzcmM9e2NoZWNrSWNvbn0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG1vdGlvbi5zcGFuIGtleT1cIm5vdC1jaGVja2VkXCIgey4uLlNDQUxFX0ZBREV9IGNsYXNzTmFtZT1cInRleHQtLXhzXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2NvbW1lbnRJbmRleCArIDF9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbW90aW9uLnNwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHRcdHtyZW5kZXJDb21tZW50KCl9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtdC0xXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY29tbWVudF9fY3JlYXRlZCB0ZXh0LW11dGVkLS02MCBtYi0wIGhyLTJcIj57Y3JlYXRlZH08L3A+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwiY29tbWVudF9fYWdyZWUgdGV4dC1tdXRlZC0tNjAgbWItMCBoci0yIGZvbnQtd2VpZ2h0LW5vcm1hbFwiPjcgYWdyZWU8L3A+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tbWVudF9fcmVwbHktdG9nZ2xlIGJ0biBidG4tbGluayB0ZXh0LW11dGVkLS02MCBtYi0wIGhyLTIgZm9udC13ZWlnaHQtbm9ybWFsXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IHNldFJlcGx5VG9Vc2VyKGF1dGhvcil9PlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYnRuLXRleHQgdGV4dC13aGl0ZVwiPlJlcGx5PC9zcGFuPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdHtjb21tZW50cy5sZW5ndGggPiAwICYmIChcblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tbWVudF9fcmVwbGllcy10b2dnbGUgYnRuIGJ0bi1saW5rIHRleHQtbXV0ZWQtLTYwIG1iLTAgaHItMiBmb250LXdlaWdodC1ub3JtYWwgbWwtYXV0byB0ZXh0LXdoaXRlXCJcblx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gc2V0U2hvd1JlcGxpZXMoIXNob3dSZXBsaWVzKX0+XG5cdFx0XHRcdFx0XHRcdHtzaG93UmVwbGllcyA/ICdIaWRlJyA6ICdTaG93J30ge2NvbW1lbnRzLmxlbmd0aH0gcmVwbGllc1xuXHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0KX1cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdHtjb21tZW50cy5sZW5ndGggPiAwICYmIHNob3dSZXBsaWVzICYmIChcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRfX3JlcGxpZXNcIj5cblx0XHRcdFx0XHRcdHtjb21tZW50cy5tYXAoKGNvbW1lbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHQ8UHJvamVjdFJldmlld0NvbW1lbnRcblx0XHRcdFx0XHRcdFx0XHRcdGtleT17Y29tbWVudC5pZH1cblx0XHRcdFx0XHRcdFx0XHRcdHsuLi57IGNvbW1lbnQsIHByb2plY3RVc2Vycywgc2V0UmVwbHlUb1VzZXIsIHJlbmRlckF1dGhvcjogdHJ1ZSB9fVxuXHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0KX1cblx0XHRcdDwvZGl2PlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQnV0dG9uLCBVc2VyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IFByb2plY3RSZXZpZXdDb21tZW50TWVudGlvbnMgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3Q29tbWVudE1lbnRpb25zJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gJ2ljb25zL2Nsb3NlLnN2Zyc7XG5cbi8qIFNlcnZpY2VzICovXG5pbXBvcnQgeyBjYWxjQ29tbWVudFBvcyB9IGZyb20gJy4vc2VydmljZXMnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBRVUVSWV9LRVlTLCBhZGRDb21tZW50IH0gZnJvbSAnLi4vLi4vYXBpJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTl9VUCB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlQ2xvc2VPbkVzYyB9IGZyb20gJy4uLy4uL2hvb2tzJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IHsgUmV2aWV3Q29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3Q29tbWVudEFkZCh7IG1hcmtlclBvcywgcGhhc2VJZCwgdG9nZ2xlQ29tbWVudEFkZE9wZW4gfSkge1xuXHQvKiBSZWZzICovXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblx0Y29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcblx0Y29uc3QgbW9kYWxSZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyBsZWZ0ID0gJzMwcHgnLCB0b3AgPSAnMzBweCcgfSA9IGNhbGNDb21tZW50UG9zKG1vZGFsUmVmLCBtYXJrZXJQb3MpO1xuXG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtjb21tZW50LCBzZXRDb21tZW50XSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW21lbnRpb25zLCBzZXRNZW50aW9uc10gPSB1c2VTdGF0ZShbXSk7XG5cblx0LyogRWZmZWN0cyAqL1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlucHV0UmVmPy5jdXJyZW50Py5mb2N1cygpO1xuXHR9LCBbbWFya2VyUG9zXSk7XG5cblx0LyogSG9va3MgKi9cblx0dXNlQ2xvc2VPbkVzYyhtYXJrZXJQb3MsIHRvZ2dsZUNvbW1lbnRBZGRPcGVuKTtcblx0Y29uc3QgeyBjdXJyZW50VXNlcjogdXNlciB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXHRjb25zdCB7IHByb2plY3RJbWFnZUlkIH0gPSB1c2VDb250ZXh0KFJldmlld0NvbnRleHQpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBhZGRDb21tZW50TXV0YXRpb24gPSB1c2VNdXRhdGlvbihhZGRDb21tZW50LCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0lNQUdFX0JZX0lELCBwYXJzZUludChwcm9qZWN0SW1hZ2VJZCldKTtcblx0XHRcdHRvZ2dsZUNvbW1lbnRBZGRPcGVuKCk7XG5cdFx0fSxcblx0fSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXZcblx0XHRcdGxheW91dFxuXHRcdFx0dHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4xIH19XG5cdFx0XHRyZWY9e21vZGFsUmVmfVxuXHRcdFx0Y2xhc3NOYW1lPVwicmV2aWV3X19jdXN0b20tbW9kYWwgY3VzdG9tLW1vZGFsXCJcblx0XHRcdHN0eWxlPXt7ICctLWxlZnQnOiBsZWZ0LCAnLS10b3AnOiB0b3AgfX0+XG5cdFx0XHQ8bW90aW9uLmRpdiBrZXk9XCJjdXN0b20tbW9kYWwtY29udGVudFwiIGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fY29udGVudCBib3JkZXIgcC01XCIgey4uLkZBREVfSU5fVVAoNTApfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2hlYWRlciBkLWZsZXggYWxpZ24taXRlbXMtc3RhcnRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDBcIj5cblx0XHRcdFx0XHRcdDxVc2VyIHsuLi57IHVzZXIgfX0gc2l6ZT1cInhsXCIgLz5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIHctMTAwIG1sLTNcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0tbGcgbWItMCBsaC0tbWRcIj5BZGQgYSBjb21tZW50PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19jbG9zZSBidG4gYnRuLWxpbmsgbWwtYXV0b1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVDb21tZW50QWRkT3Blbn0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTJcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1iLTAgdGV4dC0tbWQgbGgtLW1kXCI+XG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNjBcIj5Db21tZW50IG9yPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5XCI+IEBtZW50aW9uIDwvc3Bhbj57JyAnfVxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTYwXCI+c29tZW9uZTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fYm9keSBkLWZsZXggbXQtNFwiPlxuXHRcdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0XHRyZWY9e2Zvcm1SZWZ9XG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtZ3Jvdy0xXCJcblx0XHRcdFx0XHRcdG9uU3VibWl0PXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0aWYgKGNvbW1lbnQubGVuZ3RoID4gMCkge1xuXHRcdFx0XHRcdFx0XHRcdGFkZENvbW1lbnRNdXRhdGlvbi5tdXRhdGUoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dXNlcklkOiB1c2VyLmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0cGhhc2VJZDogcGhhc2VJZCxcblx0XHRcdFx0XHRcdFx0XHRcdGNvbW1lbnQ6IGNvbW1lbnQudHJpbSgpLFxuXHRcdFx0XHRcdFx0XHRcdFx0bWVudGlvbmVkOiBtZW50aW9ucyxcblx0XHRcdFx0XHRcdFx0XHRcdHBvc2l0aW9uOiBtYXJrZXJQb3MsXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwiY29tbWVudFwiPlxuXHRcdFx0XHRcdFx0XHRBZGQgYSBjb21tZW50XG5cdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSB3LTEwMFwiPlxuXHRcdFx0XHRcdFx0XHQ8UHJvamVjdFJldmlld0NvbW1lbnRNZW50aW9uc1xuXHRcdFx0XHRcdFx0XHRcdHsuLi57IGlucHV0UmVmLCBjb21tZW50LCBzZXRDb21tZW50LCBtZW50aW9ucywgc2V0TWVudGlvbnMsIGF1dG9Gb2N1czogdHJ1ZSB9fVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0ZXh0ZW5zaW9uQ2xhc3Nlcz1cImZvcm0tY29udHJvbC1idG5cIlxuXHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnRUeXBlPVwiaWNvblwiXG5cdFx0XHRcdFx0XHRcdFx0dGhlbWU9XCJkZWZhdWx0XCJcblx0XHRcdFx0XHRcdFx0XHR7Li4ueyBpc0xvYWRpbmc6IGFkZENvbW1lbnRNdXRhdGlvbi5pc0xvYWRpbmcgfX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IE1lbnRpb25zSW5wdXQsIE1lbnRpb24gfSBmcm9tICdyZWFjdC1tZW50aW9ucyc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZFVzZXJJY29uIGZyb20gJ2ljb25zL2FkZF91c2VyLnN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXJBdmF0YXIsIFVzZXJJbmZvIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy91c2Vycy9Vc2VyJztcblxuLyogU2VydmljZXMgKi9cbmltcG9ydCBzdHlsZU1lbnRpb25zIGZyb20gJy4vc2VydmljZXMvc3R5bGVNZW50aW9uJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBRVUVSWV9LRVlTLCBmZXRjaFByb2plY3RVc2VycyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCB7IFJldmlld0NvbnRleHQgfSBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0NvbW1lbnRNZW50aW9ucyh7XG5cdGlucHV0UmVmLFxuXHRjb21tZW50LFxuXHRzZXRDb21tZW50LFxuXHRtZW50aW9ucyxcblx0c2V0TWVudGlvbnMsXG5cdGF1dG9Gb2N1cyA9IGZhbHNlLFxufSkge1xuXHQvKiBDb250ZXh0ICovXG5cdGNvbnN0IHsgcHJvamVjdElkIH0gPSB1c2VDb250ZXh0KFJldmlld0NvbnRleHQpO1xuXG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBkYXRhOiBwcm9qZWN0VXNlcnMgPSBbXSB9ID0gdXNlUXVlcnkoW1FVRVJZX0tFWVMuUFJPSkVDVF9VU0VSUywgcHJvamVjdElkXSwgKCkgPT5cblx0XHRmZXRjaFByb2plY3RVc2Vycyh7IHByb2plY3RJZCB9KVxuXHQpO1xuXG5cdC8qIEVmZmVjdHMgKi9cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAobWVudGlvbnMubGVuZ3RoID4gMCAmJiBpbnB1dFJlZj8uY3VycmVudCkgc3R5bGVNZW50aW9ucyhwcm9qZWN0VXNlcnMsIGlucHV0UmVmLmN1cnJlbnQpO1xuXHR9LCBbbWVudGlvbnMsIGlucHV0UmVmPy5jdXJyZW50XSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxNZW50aW9uc0lucHV0XG5cdFx0XHRcdHZhbHVlPXtjb21tZW50fVxuXHRcdFx0XHRjbGFzc05hbWU9XCJtZW50aW9uc1wiXG5cdFx0XHRcdGlkPVwiY29tbWVudFwiXG5cdFx0XHRcdG5hbWU9XCJjb21tZW50XCJcblx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTYXkgc29tZXRoaW5nIG5pY2UuLi5cIlxuXHRcdFx0XHRvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRDb21tZW50KGV2ZW50LnRhcmdldC52YWx1ZSl9XG5cdFx0XHRcdG9uQ2xpY2s9eygpID0+IHN0eWxlTWVudGlvbnMocHJvamVjdFVzZXJzKX1cblx0XHRcdFx0aW5wdXRSZWY9e2lucHV0UmVmfVxuXHRcdFx0XHRhdXRvRm9jdXM9e2F1dG9Gb2N1c31cblx0XHRcdFx0b25LZXlVcD17KGV2ZW50KSA9PiBldmVudC5zdG9wUHJvcGFnYXRpb24oKX0+XG5cdFx0XHRcdDxNZW50aW9uXG5cdFx0XHRcdFx0dHJpZ2dlcj1cIkBcIlxuXHRcdFx0XHRcdGRhdGE9e3Byb2plY3RVc2Vyc31cblx0XHRcdFx0XHRyZW5kZXJTdWdnZXN0aW9uPXtTdWdnZXN0aW9ufVxuXHRcdFx0XHRcdGFsbG93U3BhY2VJblF1ZXJ5XG5cdFx0XHRcdFx0YXBwZW5kU3BhY2VPbkFkZFxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1lbnRpb25zX19tZW50aW9uXCJcblx0XHRcdFx0XHRkaXNwbGF5VHJhbnNmb3JtPXsoXywgbmFtZSkgPT4gYCBAJHtuYW1lfSBgfVxuXHRcdFx0XHRcdG1hcmt1cD1cIkBbX19kaXNwbGF5X19de19faWRfX31cIlxuXHRcdFx0XHRcdG9uQWRkPXsoaWQpID0+IHNldE1lbnRpb25zKChtZW50aW9ucykgPT4gWy4uLm1lbnRpb25zLCBpZF0pfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9NZW50aW9uc0lucHV0PlxuXHRcdDwvPlxuXHQpO1xufVxuXG4vKiBDdXN0b20gU3VnZ2VzdGlvbiAqL1xuY29uc3QgU3VnZ2VzdGlvbiA9IChlbnRyeSwgcXVlcnksIGhpZ2hsaWdodGVkLCBpbmRleCwgZm9jdXNlZCkgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnRpb25fX3N1Z2dlc3Rpb24gdnItM1wiPlxuXHRcdDxidXR0b24gY2xhc3NOYW1lPXtgdXNlciB1c2VyLS1zZWxlY3QgdXNlci0teGwgJHtmb2N1c2VkICYmICdpcy1mb2N1c2VkJ31gfSB0eXBlPVwiYnV0dG9uXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PFVzZXJBdmF0YXIgey4uLmVudHJ5fSAvPlxuXHRcdFx0XHQ8VXNlckluZm9cblx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0dGl0bGU6IGVudHJ5LmRpc3BsYXksXG5cdFx0XHRcdFx0XHRzdWJ0aXRsZTogZW50cnkub3JnYW5pc2F0aW9uID8gZW50cnkub3JnYW5pc2F0aW9uIDogJ05vIG9yZ2FuaXNhdGlvbicsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19hZGQgdGV4dC1zZWNvbmRhcnkgcm91bmRlZC1jaXJjbGUgbWwtYXV0b1wiPlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9fYWRkLWljb24gaWNvbiBpY29uLS0xMiB0ZXh0LXNlY29uZGFyeVwiIHNyYz17YWRkVXNlckljb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9idXR0b24+XG5cdDwvZGl2PlxuKTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IEZBREVfSU5fVVAgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCBQcm9qZWN0UmV2aWV3TWFya2VyIGZyb20gJy4vUHJvamVjdFJldmlld01hcmtlcic7XG5pbXBvcnQgUHJvamVjdFJldmlld0NvbW1lbnQgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3Q29tbWVudCc7XG5pbXBvcnQgUHJvamVjdFJldmlld0NvbW1lbnRSZXBseSBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50UmVwbHknO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcblxuLyogU2VydmljZXMgKi9cbmltcG9ydCB7IGNhbGNDb21tZW50UG9zIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VDbG9zZU9uRXNjIH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3Q29tbWVudE1vZGFsKHtcblx0Y29tbWVudCxcblx0Y29tbWVudEluZGV4LFxuXHR0b2dnbGVDb21tZW50QWRkT3Blbixcblx0Y29tbWVudEZvY3VzZWQsXG5cdC4uLnJlc3Rcbn0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgcG9zaXRpb24sIGF1dGhvciwgaWQgfSA9IGNvbW1lbnQ7XG5cdGNvbnN0IHsgeFBlcmNlbnQsIHlQZXJjZW50IH0gPSBwb3NpdGlvbjtcblxuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbY29tbWVudE9wZW4sIHNldENvbW1lbnRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlQ29tbWVudCA9ICgpID0+IHtcblx0XHRpZiAoIWNvbW1lbnRPcGVuKSB0b2dnbGVDb21tZW50QWRkT3BlbigpO1xuXHRcdHNldENvbW1lbnRPcGVuKCFjb21tZW50T3Blbik7XG5cdH07XG5cblx0LyogSG9va3MgKi9cblx0dXNlQ2xvc2VPbkVzYyhjb21tZW50T3Blbiwgc2V0Q29tbWVudE9wZW4pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxQcm9qZWN0UmV2aWV3TWFya2VyXG5cdFx0XHR7Li4ue1xuXHRcdFx0XHR4UGVyY2VudCxcblx0XHRcdFx0eVBlcmNlbnQsXG5cdFx0XHRcdGF1dGhvcixcblx0XHRcdFx0Y29tbWVudEluZGV4LFxuXHRcdFx0XHRjb21tZW50T3Blbixcblx0XHRcdFx0dG9nZ2xlQ29tbWVudCxcblx0XHRcdFx0Y29tbWVudEZvY3VzZWQsXG5cdFx0XHR9fT5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHtjb21tZW50T3BlbiAmJiA8Q29tbWVudEJveCBrZXk9e2lkfSB7Li4ueyBjb21tZW50LCB0b2dnbGVDb21tZW50LCAuLi5yZXN0IH19IC8+fVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC9Qcm9qZWN0UmV2aWV3TWFya2VyPlxuXHQpO1xufVxuXG5jb25zdCBDb21tZW50Qm94ID0gKHsgY29tbWVudCwgdG9nZ2xlQ29tbWVudCwgcmV2aWV3UmVmLCAuLi5yZXN0IH0pID0+IHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgcG9zaXRpb24sIGF1dGhvciB9ID0gY29tbWVudDtcblxuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbdHJhbnNmb3JtZWRQb3MsIHNldFRyYW5zZm9ybWVkUG9zXSA9IHVzZVN0YXRlKHBvc2l0aW9uKTtcblx0Y29uc3QgW3JlcGx5VG9Vc2VyLCBzZXRSZXBseVRvVXNlcl0gPSB1c2VTdGF0ZSgpO1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgYm94UmVmID0gdXNlUmVmKCk7XG5cblx0LyogRWZmZWN0cyAqL1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChwb3NpdGlvbikge1xuXHRcdFx0c2V0VHJhbnNmb3JtZWRQb3MoKCkgPT4ge1xuXHRcdFx0XHRwb3NpdGlvbi5yZXZpZXdQb3MgPSByZXZpZXdSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0cmV0dXJuIGNhbGNDb21tZW50UG9zKGJveFJlZiwgcG9zaXRpb24pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCBbcG9zaXRpb25dKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0Y2xhc3NOYW1lPVwicmV2aWV3X19jdXN0b20tbW9kYWwgY3VzdG9tLW1vZGFsXCJcblx0XHRcdHN0eWxlPXt7ICctLWxlZnQnOiB0cmFuc2Zvcm1lZFBvcy5sZWZ0LCAnLS10b3AnOiB0cmFuc2Zvcm1lZFBvcy50b3AgfX0+XG5cdFx0XHQ8bW90aW9uLmRpdiBrZXk9XCJjdXN0b20tbW9kYWwtY29udGVudFwiIGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fY29udGVudCBib3JkZXIgcC01XCIgey4uLkZBREVfSU5fVVAoNTApfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2hlYWRlciBkLWZsZXggYWxpZ24taXRlbXMtc3RhcnRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDBcIj5cblx0XHRcdFx0XHRcdDxVc2VyIHsuLi57IHVzZXI6IGF1dGhvciB9fSBzaXplPVwieGxcIiAvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0xMDAgbWwtM1wiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LS1sZyBtYi0wIGxoLS1tZFwiPnthdXRob3IuZGlzcGxheX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Nsb3NlIGJ0biBidG4tbGluayBtbC1hdXRvXCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZUNvbW1lbnR9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEyXCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS02MCBtYi0wIHRleHQtLXNtIGxoLS14c1wiPnthdXRob3Iub3JnYW5pc2F0aW9ufTwvcD5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2JvZHkgZC1mbGV4IG10LTRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMFwiPlxuXHRcdFx0XHRcdFx0PFByb2plY3RSZXZpZXdDb21tZW50IHsuLi57IGNvbW1lbnQsIHNldFJlcGx5VG9Vc2VyLCBzaG93SW5pdGlhbFJlcGxpZXM6IHRydWUsIC4uLnJlc3QgfX0gLz5cblx0XHRcdFx0XHRcdHtyZXBseVRvVXNlciAmJiAoXG5cdFx0XHRcdFx0XHRcdDxQcm9qZWN0UmV2aWV3Q29tbWVudFJlcGx5XG5cdFx0XHRcdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdFx0XHRcdHJlcGx5VG86IHJlcGx5VG9Vc2VyLFxuXHRcdFx0XHRcdFx0XHRcdFx0Y29tbWVudElkOiBjb21tZW50LmlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0c2V0UmVwbHlUb1VzZXI6IHNldFJlcGx5VG9Vc2VyLFxuXHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudCBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50JztcbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudFJlcGx5IGZyb20gJy4vUHJvamVjdFJldmlld0NvbW1lbnRSZXBseSc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNMSURFX0lOIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlQ2xvc2VPbkVzYyB9IGZyb20gJy4uLy4uL2hvb2tzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0NvbW1lbnRQYW5lbCh7XG5cdGNvbW1lbnRzLFxuXHRjb21tZW50c1BhbmVsT3Blbixcblx0dG9nZ2xlQ29tbWVudHNQYW5lbCxcblx0cHJvamVjdFVzZXJzLFxuXHRzZXRDb21tZW50Rm9jdXNlZCxcbn0pIHtcblx0LyogSG9va3MgKi9cblx0dXNlQ2xvc2VPbkVzYyhjb21tZW50c1BhbmVsT3BlbiwgdG9nZ2xlQ29tbWVudHNQYW5lbCk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXYgey4uLlNMSURFX0lOfSBjbGFzc05hbWU9XCJwYW5lbCBwYW5lbC0tY29tbWVudHNcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWxfX2JvZHlcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmUganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItNlwiPlxuXHRcdFx0XHRcdDxoNSBjbGFzc05hbWU9XCJ0ZXh0LWNhcGl0YWxpemVcIj5BbGwgY29tbWVudHM8L2g1PlxuXHRcdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cInBhbmVsX19jbG9zZSBidG4gYnRuLWxpbmsgbWwtYXV0b1wiIG9uQ2xpY2s9e3RvZ2dsZUNvbW1lbnRzUGFuZWx9PlxuXHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEyXCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiB3LTEwMFwiPlxuXHRcdFx0XHRcdHtjb21tZW50cz8ubWFwKChjb21tZW50LCBjb21tZW50SW5kZXgpID0+IHtcblx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdDxDb21tZW50V2l0aFJlcGx5XG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtjb21tZW50SW5kZXh9XG5cdFx0XHRcdFx0XHRcdFx0ey4uLnsgY29tbWVudCwgY29tbWVudEluZGV4LCBwcm9qZWN0VXNlcnMsIHNldENvbW1lbnRGb2N1c2VkIH19XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdHtjb21tZW50cy5sZW5ndGggPT09IDAgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNzBcIj5ObyBjb21tZW50cyB5ZXQ8L3A+fVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbW90aW9uLmRpdj5cblx0KTtcbn1cblxuY29uc3QgQ29tbWVudFdpdGhSZXBseSA9ICh7IGNvbW1lbnQsIGNvbW1lbnRJbmRleCwgcHJvamVjdFVzZXJzLCBzZXRDb21tZW50Rm9jdXNlZCB9KSA9PiB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtyZXBseVRvVXNlciwgc2V0UmVwbHlUb1VzZXJdID0gdXNlU3RhdGUoKTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8UHJvamVjdFJldmlld0NvbW1lbnRcblx0XHRcdFx0ey4uLnsgY29tbWVudCwgY29tbWVudEluZGV4LCBzZXRSZXBseVRvVXNlciwgcmVuZGVyQXV0aG9yOiB0cnVlLCBwcm9qZWN0VXNlcnMsIHNldENvbW1lbnRGb2N1c2VkIH19XG5cdFx0XHQvPlxuXHRcdFx0e3JlcGx5VG9Vc2VyICYmIChcblx0XHRcdFx0PFByb2plY3RSZXZpZXdDb21tZW50UmVwbHlcblx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0cmVwbHlUbzogcmVwbHlUb1VzZXIsXG5cdFx0XHRcdFx0XHRjb21tZW50SWQ6IGNvbW1lbnQuaWQsXG5cdFx0XHRcdFx0XHRzZXRSZXBseVRvVXNlcjogc2V0UmVwbHlUb1VzZXIsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdCl9XG5cdFx0PC8+XG5cdCk7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VyLCBCdXR0b24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcbmltcG9ydCB7IFVzZXJJbmZvIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy91c2Vycy9Vc2VyJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IHsgU3RhdGljQ29udGV4dCwgUmV2aWV3Q29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudE1lbnRpb25zIGZyb20gJy4vUHJvamVjdFJldmlld0NvbW1lbnRNZW50aW9ucyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgYWRkUmVwbHksIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3Q29tbWVudFJlcGx5KHsgcmVwbHlUbywgY29tbWVudElkLCBzZXRSZXBseVRvVXNlciB9KSB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtyZXBseSwgc2V0UmVwbHldID0gdXNlU3RhdGUoKTtcblx0Y29uc3QgW21lbnRpb25zLCBzZXRNZW50aW9uc10gPSB1c2VTdGF0ZShbXSk7XG5cblx0LyogRWZmZWN0cyAqL1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldFJlcGx5KGBAWyR7cmVwbHlUby5kaXNwbGF5fV17JHtyZXBseVRvLmlkfX0gYCk7XG5cdFx0c2V0TWVudGlvbnMoW3JlcGx5VG8uaWRdKTtcblx0fSwgW3JlcGx5VG9dKTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cdGNvbnN0IHsgcHJvamVjdEltYWdlSWQgfSA9IHVzZUNvbnRleHQoUmV2aWV3Q29udGV4dCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGFkZFJlcGx5TXV0YXRpb24gPSB1c2VNdXRhdGlvbihhZGRSZXBseSwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9JTUFHRV9CWV9JRCwgcGFyc2VJbnQocHJvamVjdEltYWdlSWQpXSk7XG5cdFx0XHRzZXRSZXBseVRvVXNlcihudWxsKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8Zm9ybVxuXHRcdFx0Y2xhc3NOYW1lPVwicmVwbHlcIlxuXHRcdFx0b25TdWJtaXQ9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRhZGRSZXBseU11dGF0aW9uLm11dGF0ZSh7XG5cdFx0XHRcdFx0Y29tbWVudElkOiBjb21tZW50SWQsXG5cdFx0XHRcdFx0cmVwbHk6IHJlcGx5LFxuXHRcdFx0XHRcdG1lbnRpb25lZDogbWVudGlvbnMsXG5cdFx0XHRcdH0pO1xuXHRcdFx0fX0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PFVzZXIgey4uLnsgdXNlcjogY3VycmVudFVzZXIgfX0gLz5cblx0XHRcdFx0PFVzZXJJbmZvXG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdHRpdGxlOiBjdXJyZW50VXNlci5kaXNwbGF5LFxuXHRcdFx0XHRcdFx0c3VidGl0bGU6IGAvICR7Y3VycmVudFVzZXIub3JnYW5pc2F0aW9ufWAsXG5cdFx0XHRcdFx0XHRsYXlvdXQ6ICdob3Jpem9udGFsJyxcblx0XHRcdFx0XHRcdHNpemU6ICdzbScsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuXHRcdFx0XHQ8UHJvamVjdFJldmlld0NvbW1lbnRNZW50aW9ucyB7Li4ueyBjb21tZW50OiByZXBseSwgc2V0Q29tbWVudDogc2V0UmVwbHksIG1lbnRpb25zLCBzZXRNZW50aW9ucyB9fSAvPlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0ZXh0ZW5zaW9uQ2xhc3Nlcz1cImZvcm0tY29udHJvbC1idG5cIlxuXHRcdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0XHRcdGNvbnRlbnRUeXBlPVwiaWNvblwiXG5cdFx0XHRcdFx0dGhlbWU9XCJkZWZhdWx0XCJcblx0XHRcdFx0XHR7Li4ueyBpc0xvYWRpbmc6IGFkZFJlcGx5TXV0YXRpb24uaXNMb2FkaW5nIH19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Zvcm0+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ2xpY2tBd2F5TGlzdGVuZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2xpY2tBd2F5TGlzdGVuZXInO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNDQUxFX0ZBREUgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9tYWluQ29udGV4dCc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld01hcmtlcih7XG5cdHhQZXJjZW50LFxuXHR5UGVyY2VudCxcblx0YXV0aG9yLFxuXHRjb21tZW50SW5kZXgsXG5cdGNvbW1lbnRPcGVuLFxuXHR0b2dnbGVDb21tZW50LFxuXHRjb21tZW50Rm9jdXNlZCxcblx0Y2hpbGRyZW4sXG59KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHVzZXIgPSBhdXRob3IgPyBhdXRob3IgOiBjdXJyZW50VXNlcjtcblx0Y29uc3QgbGFiZWwgPSAoY29tbWVudEluZGV4ID8/IDApICsgMTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8Q2xpY2tBd2F5TGlzdGVuZXJcblx0XHRcdG9uQ2xpY2tBd2F5PXsoKSA9PiB7XG5cdFx0XHRcdGlmIChjb21tZW50T3BlbikgdG9nZ2xlQ29tbWVudCgpO1xuXHRcdFx0fX0+XG5cdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRsYXlvdXRcblx0XHRcdFx0dHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4xIH19XG5cdFx0XHRcdGNsYXNzTmFtZT1cInJldmlld19faW50ZXJhY3Rpb25cIlxuXHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdCctLXgnOiB4UGVyY2VudCxcblx0XHRcdFx0XHQnLS15JzogeVBlcmNlbnQsXG5cdFx0XHRcdH19PlxuXHRcdFx0XHQ8VG9vbHRpcFxuXHRcdFx0XHRcdHRpdGxlPXthdXRob3I/LmRpc3BsYXkgPz8gJ0FkZCBjb21tZW50J31cblx0XHRcdFx0XHRvcGVuPXsoY29tbWVudEZvY3VzZWQgPz8gZmFsc2UpID09PSBjb21tZW50SW5kZXggPz8gZmFsc2V9PlxuXHRcdFx0XHRcdDxtb3Rpb24uYnV0dG9uXG5cdFx0XHRcdFx0XHR7Li4uU0NBTEVfRkFERX1cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInJldmlld19fbWFya2VyIGljb24td3JhcHBlciBpY29uLXdyYXBwZXItLXNlY29uZGFyeSBidG4gYnRuLWxpbmsgdGV4dC1yZXNldFwiXG5cdFx0XHRcdFx0XHRzdHlsZT17eyAnLS10aGVtZSc6IGAke3VzZXIudXNlckNvbG9yfWAgfX1cblx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZUNvbW1lbnR9PlxuXHRcdFx0XHRcdFx0e2xhYmVsICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtLXhzXCI+e2xhYmVsfTwvc3Bhbj59XG5cdFx0XHRcdFx0PC9tb3Rpb24uYnV0dG9uPlxuXHRcdFx0XHQ8L1Rvb2x0aXA+XG5cdFx0XHRcdDxkaXY+e2NoaWxkcmVufTwvZGl2PlxuXHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdDwvQ2xpY2tBd2F5TGlzdGVuZXI+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IHsgUmV2aWV3Q29udGV4dCB9IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjaGV2cm9uSWNvbiBmcm9tICdpY29ucy9jaGV2cm9uLnN2Zyc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VFdmVudExpc3RlbmVyIH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuXG4vKiBBbmltYXRpb24gKi9cbmltcG9ydCB7IEZBREVfSU4gfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld1BhZ2luYXRpb24oeyBhbGxJbWFnZXMgfSkge1xuXHQvKiBIb29rcyAqL1xuXHR1c2VFdmVudExpc3RlbmVyKCdrZXl1cCcsIGhhbmRsZUtleVVwKTtcblx0Y29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcblxuXHQvKiBDb250ZXh0ICovXG5cdGNvbnN0IHsgcHJvamVjdEltYWdlSWQgfSA9IHVzZUNvbnRleHQoUmV2aWV3Q29udGV4dCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IGN1cnJlbnRJbWFnZSA9IGFsbEltYWdlcy5pbmRleE9mKE51bWJlcihwcm9qZWN0SW1hZ2VJZCkpO1xuXHRjb25zdCBwcmV2SW1hZ2UgPSBhbGxJbWFnZXNbY3VycmVudEltYWdlID09PSAwID8gYWxsSW1hZ2VzLmxlbmd0aCAtIDEgOiBjdXJyZW50SW1hZ2UgLSAxXTtcblx0Y29uc3QgbmV4dEltYWdlID0gYWxsSW1hZ2VzW2N1cnJlbnRJbWFnZSA9PT0gYWxsSW1hZ2VzLmxlbmd0aCAtIDEgPyAwIDogY3VycmVudEltYWdlICsgMV07XG5cblx0ZnVuY3Rpb24gaGFuZGxlS2V5VXAoZXZlbnQpIHtcblx0XHRpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dMZWZ0JyAmJiBwcmV2SW1hZ2UpIG5hdmlnYXRlKCdwcmV2Jyk7XG5cdFx0aWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93UmlnaHQnICYmIG5leHRJbWFnZSkgbmF2aWdhdGUoJ25leHQnKTtcblx0fVxuXG5cdGNvbnN0IG5hdmlnYXRlID0gKGRpcmVjdGlvbikgPT4ge1xuXHRcdGlmIChkaXJlY3Rpb24gPT09ICdwcmV2JykgaGlzdG9yeS5wdXNoKHByZXZJbWFnZS50b1N0cmluZygpKTtcblx0XHRpZiAoZGlyZWN0aW9uID09PSAnbmV4dCcpIGhpc3RvcnkucHVzaChuZXh0SW1hZ2UudG9TdHJpbmcoKSk7XG5cdH07XG5cblx0cmV0dXJuIChcblx0XHRhbGxJbWFnZXMubGVuZ3RoID4gMSAmJiAoXG5cdFx0XHQ8bW90aW9uLmRpdiBrZXk9XCJwYWdpbmF0aW9uXCIgey4uLkZBREVfSU59IGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYWdpbmF0aW9uX19idG4td3JhcHBlciBwYWdpbmF0aW9uX19idG4td3JhcHBlci0tcHJldlwiPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBhZ2luYXRpb25fX2J0biBwYWdpbmF0aW9uX19idG4tLXByZXYgYnRuIGJ0bi1saW5rIHRleHQtcmVzZXRcIlxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBuYXZpZ2F0ZSgncHJldicpfT5cblx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwicGFnaW5hdGlvbl9faWNvbiBpY29uIGljb24tLTEyXCIgc3JjPXtjaGV2cm9uSWNvbn0gLz5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFnaW5hdGlvbl9fYnRuLXdyYXBwZXIgcGFnaW5hdGlvbl9fYnRuLXdyYXBwZXItLW5leHRcIj5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwYWdpbmF0aW9uX19idG4gcGFnaW5hdGlvbl9fYnRuLS1uZXh0IGJ0biBidG4tbGluayB0ZXh0LXJlc2V0XCJcblx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gbmF2aWdhdGUoJ25leHQnKX0+XG5cdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cInBhZ2luYXRpb25fX2ljb24gaWNvbiBpY29uLS0xMlwiIHNyYz17Y2hldnJvbkljb259IC8+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdClcblx0KTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdFJldmlld0NhbnZhcyB9IGZyb20gJy4vUHJvamVjdFJldmlld0NhbnZhcyc7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgeyBFZGl0QWN0aW9uLCBQaGFzZUFjdGlvbiwgUGhhc2VOZXh0QWN0aW9uLCBTaGFyZUFjdGlvbiB9IGZyb20gJy4vYWN0aW9ucyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNvbW1lbnRJY29uIGZyb20gJ2ljb25zL2NvbW1lbnQuc3ZnJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IHsgUmV2aWV3Q29udGV4dCwgU3RhdGljQ29udGV4dCB9IGZyb20gJy4uLy4uLy4uL2NvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3QWN0aW9uQmFyKHtcblx0YWxsSW1hZ2VzLFxuXHRhbGxQaGFzZXMsXG5cdHRpdGxlLFxuXHRkZXNjcmlwdGlvbixcblx0cGhhc2VOdW1iZXIsXG5cdHBoYXNlSWQsXG5cdGNvbW1lbnRzUGFuZWxPcGVuLFxuXHR0b2dnbGVDb21tZW50c1BhbmVsLFxuXHRwcm9qZWN0VXNlcnMsXG59KSB7XG5cdC8qIENvbnRleHQgKi9cblx0Y29uc3QgeyBjdXJyZW50VXNlciwgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogQ29udGV4dCAqL1xuXHRjb25zdCB7IHByb2plY3RJbWFnZUlkIH0gPSB1c2VDb250ZXh0KFJldmlld0NvbnRleHQpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJhciBiYXItLXJldmlld1wiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtMCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHQ8VXNlciB7Li4ueyB1c2VyOiBjdXJyZW50VXNlciwgc2l6ZTogJ2xnJyB9fSAvPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBtbC0zXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGxoLS1zbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0tc20gbWItMCB0ZXh0LXRydW5jYXRlXCIgc3R5bGU9e3sgbWF4V2lkdGg6IDEyMCB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e3RpdGxlfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBsaC0tc21cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtLXhzIHRleHQtbXV0ZWQtLTcwIG1iLTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2FsbEltYWdlcy5pbmRleE9mKE51bWJlcihwcm9qZWN0SW1hZ2VJZCkpICsgMX0gb2Yge2FsbEltYWdlcy5sZW5ndGh9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJteC0xIHRleHQtbXV0ZWQtLTIwXCI+Lzwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdDxQaGFzZUFjdGlvbiB7Li4ueyBhbGxQaGFzZXMsIHBoYXNlTnVtYmVyIH19IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBoci0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3VzZXJSb2xlID09PSAnYWRtaW4nICYmIDxFZGl0QWN0aW9uIHsuLi57IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdEltYWdlSWQgfX0gLz59XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgYmFyX19hY3Rpb24tYnRuICR7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb21tZW50c1BhbmVsT3BlbiAmJiAnaXMtYWN0aXZlJ1xuXHRcdFx0XHRcdFx0XHRcdH0gYnRuIGJ0bi1saW5rIHRleHQtcmVzdCBoci0yYH1cblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVDb21tZW50c1BhbmVsfT5cblx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTZcIiBzcmM9e2NvbW1lbnRJY29ufSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBoci0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3VzZXJSb2xlID09PSAnYWRtaW4nICYmIDxQaGFzZU5leHRBY3Rpb24gey4uLnsgcGhhc2VJZCwgcHJvamVjdEltYWdlSWQgfX0gLz59XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC00IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG5cdFx0XHRcdFx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiA8U2hhcmVBY3Rpb24gey4uLnsgcHJvamVjdFVzZXJzIH19IC8+fVxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IE1vZGFsLCBFZGl0YWJsZUJvZHkgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgZWRpdEljb24gZnJvbSAnaWNvbnMvZWRpdC5zdmcnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGVkaXRQcm9qZWN0SW1hZ2UsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi8uLi8uLi9hcGknO1xuXG4vKiBPcHRpb25zICovXG5pbXBvcnQgeyBtb2RhbE9wdGlvbnMgfSBmcm9tICcuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdEFjdGlvbih7IHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdEltYWdlSWQgfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiBzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbik7XG5cblx0LyogbXV0YXRpb25zICovXG5cdGNvbnN0IG11dGF0aW9uT25TdWNjZXNzID0gKCkgPT4ge1xuXHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfSU1BR0VfQllfSUQsIE51bWJlcihwcm9qZWN0SW1hZ2VJZCldKTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRjbGFzc05hbWU9e2BiYXJfX2FjdGlvbi1idG4gJHttb2RhbE9wZW4gJiYgJ2lzLWFjdGl2ZSd9IGJ0biBidG4tbGluayB0ZXh0LXJlc3RgfVxuXHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVNb2RhbH0+XG5cdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNlwiIHNyYz17ZWRpdEljb259IC8+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxNb2RhbFxuXHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdHRpdGxlOiAnRWRpdGluZyBpbWFnZScsXG5cdFx0XHRcdFx0c3VidGl0bGU6ICdTYXZlIHdoZW4gcmVhZHknLFxuXHRcdFx0XHRcdG1vZGFsT3BlbjogbW9kYWxPcGVuLFxuXHRcdFx0XHRcdHRvZ2dsZU1vZGFsOiB0b2dnbGVNb2RhbCxcblx0XHRcdFx0XHQuLi5tb2RhbE9wdGlvbnMsXG5cdFx0XHRcdH19PlxuXHRcdFx0XHQ8RWRpdGFibGVCb2R5XG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdHRvZ2dsZU1vZGFsOiB0b2dnbGVNb2RhbCxcblx0XHRcdFx0XHRcdGZpZWxkczogW1xuXHRcdFx0XHRcdFx0XHR7IG5hbWU6ICd0aXRsZScsIGRlZmF1bHRWYWx1ZTogdGl0bGUgfSxcblx0XHRcdFx0XHRcdFx0eyBuYW1lOiAnZGVzY3JpcHRpb24nLCBkZWZhdWx0VmFsdWU6IGRlc2NyaXB0aW9uIH0sXG5cdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0bXV0YXRpb246IGVkaXRQcm9qZWN0SW1hZ2UsXG5cdFx0XHRcdFx0XHRtdXRhdGlvbklkOiBwcm9qZWN0SW1hZ2VJZCxcblx0XHRcdFx0XHRcdG11dGF0aW9uT25TdWNjZXNzOiBtdXRhdGlvbk9uU3VjY2Vzcyxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9Nb2RhbD5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IE1vZGFsIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNoZXZyb25JY29uIGZyb20gJ2ljb25zL2NoZXZyb24uc3ZnJztcbmltcG9ydCBjaGVja0ljb24gZnJvbSAnaWNvbnMvY2hlY2suc3ZnJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IHsgUmV2aWV3Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRleHQnO1xuXG4vKiBPcHRpb25zICovXG5pbXBvcnQgeyBtb2RhbE9wdGlvbnMgfSBmcm9tICcuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGhhc2VBY3Rpb24oeyBhbGxQaGFzZXMsIHBoYXNlTnVtYmVyIH0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBDb250ZXh0ICovXG5cdGNvbnN0IHsgYWN0aXZlUGhhc2UgPSBhbGxQaGFzZXNbYWxsUGhhc2VzLmxlbmd0aCAtIDFdLCBzZXRBY3RpdmVQaGFzZSB9ID0gdXNlQ29udGV4dChSZXZpZXdDb250ZXh0KTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiBzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbik7XG5cblx0Y29uc3QgbmF2aWdhdGVUb1BoYXNlID0gKHBoYXNlKSA9PiB7XG5cdFx0c2V0QWN0aXZlUGhhc2UocGhhc2UpO1xuXHRcdHRvZ2dsZU1vZGFsKCk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxidXR0b25cblx0XHRcdFx0Y2xhc3NOYW1lPXtgYnRuIGJ0bi1saW5rIGJ0bi0tbW9kYWwgdGV4dC1yZXNldCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyICR7bW9kYWxPcGVuICYmICdpcy1hY3RpdmUnfWB9XG5cdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfT5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0teHMgdGV4dC1tdXRlZC0tNzAgbWItMFwiPlBoYXNlIHtwaGFzZU51bWJlcn08L3A+XG5cdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS04IHRleHQtbXV0ZWQtLTUwICBtbC0xXCIgc3JjPXtjaGV2cm9uSWNvbn0gLz5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0dGl0bGU6ICdDaG9vc2UgcGhhc2UnLFxuXHRcdFx0XHRcdHN1YnRpdGxlOiAnTmF2aWdhdGUgdG8gc2VsZWN0ZWQgcGhhc2UnLFxuXHRcdFx0XHRcdG1vZGFsT3BlbjogbW9kYWxPcGVuLFxuXHRcdFx0XHRcdHRvZ2dsZU1vZGFsOiB0b2dnbGVNb2RhbCxcblx0XHRcdFx0XHQuLi5tb2RhbE9wdGlvbnMsXG5cdFx0XHRcdFx0ZXh0ZW5zaW9uQ2xhc3NlczogJ2Jhcl9fbW9kYWwgYmFyX19tb2RhbC0tbGVmdCcsXG5cdFx0XHRcdH19PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbXQtMlwiPlxuXHRcdFx0XHRcdHthbGxQaGFzZXMubWFwKChwaGFzZSwgcGhhc2VJbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRrZXk9e3BoYXNlSW5kZXh9XG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1pbnRlcmFjdGl2ZSBpY29uLXdyYXBwZXItLXNlY29uZGFyeSBoci0yIHRleHQtZGVjb3JhdGlvbi1ub25lXCJcblx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgJy0tc2l6ZSc6IDM1IH19XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IG5hdmlnYXRlVG9QaGFzZShwaGFzZSl9PlxuXHRcdFx0XHRcdFx0XHR7YWN0aXZlUGhhc2UgPT09IHBoYXNlID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xMiB0ZXh0LXNlY29uZGFyeVwiIHNyYz17Y2hlY2tJY29ufSAvPlxuXHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtc2Vjb25kYXJ5XCI+e3BoYXNlSW5kZXggKyAxfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTW9kYWw+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBNb2RhbCwgRHJvcHpvbmVTaW5nbGUsIEJ1dHRvbiB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBuZXh0SWNvbiBmcm9tICdpY29ucy9uZXh0LnN2Zyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgbmV4dFBoYXNlLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vLi4vLi4vYXBpJztcblxuLyogT3B0aW9ucyAqL1xuaW1wb3J0IHsgbW9kYWxPcHRpb25zIH0gZnJvbSAnLic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBoYXNlTmV4dEFjdGlvbih7IHBoYXNlSWQsIHByb2plY3RJbWFnZUlkIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cdGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZU1vZGFsID0gKCkgPT4gc2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBuZXh0UGhhc2VNdXRhdGlvbiA9IHVzZU11dGF0aW9uKG5leHRQaGFzZSwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0dG9nZ2xlTW9kYWwoKTtcblx0XHRcdHNldEltYWdlcyhbXSk7XG5cdFx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0lNQUdFX0JZX0lELCBOdW1iZXIocHJvamVjdEltYWdlSWQpXSk7XG5cdFx0fSxcblx0fSk7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRjbGFzc05hbWU9e2BiYXJfX2FjdGlvbi1idG4gJHttb2RhbE9wZW4gJiYgJ2lzLWFjdGl2ZSd9IGJ0biBidG4tbGluayB0ZXh0LXJlc3RgfVxuXHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVNb2RhbH0+XG5cdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNlwiIHNyYz17bmV4dEljb259IC8+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxNb2RhbFxuXHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdHRpdGxlOiAnTmV4dCBwaGFzZScsXG5cdFx0XHRcdFx0c3VidGl0bGU6ICdBZGQgYSBuZXcgaW1hZ2UgZm9yIHRoZSBuZXh0IHBoYXNlJyxcblx0XHRcdFx0XHRtb2RhbE9wZW46IG1vZGFsT3Blbixcblx0XHRcdFx0XHR0b2dnbGVNb2RhbDogdG9nZ2xlTW9kYWwsXG5cdFx0XHRcdFx0Li4ubW9kYWxPcHRpb25zLFxuXHRcdFx0XHR9fT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gdy0xMDBcIj5cblx0XHRcdFx0XHQ8RHJvcHpvbmVTaW5nbGUgey4uLnsgaW1hZ2VzLCBzZXRJbWFnZXMgfX0gLz5cblx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHR0aXRsZT1cIk5leHQgcGhhc2VcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gbmV4dFBoYXNlTXV0YXRpb24ubXV0YXRlKHsgcGhhc2VJZDogcGhhc2VJZCwgaW1hZ2VzOiBpbWFnZXMgfSl9XG5cdFx0XHRcdFx0XHRleHRlbnNpb25DbGFzc2VzPVwibXQtMyB3LTUwIG14LWF1dG8ganVzdGlmeS1jb250ZW50LWNlbnRlclwiXG5cdFx0XHRcdFx0XHRpc0xvYWRpbmc9e25leHRQaGFzZU11dGF0aW9uLmlzTG9hZGluZ31cblx0XHRcdFx0XHRcdGRpc2FibGVkPXtpbWFnZXMubGVuZ3RoID09PSAwIHx8IG5leHRQaGFzZU11dGF0aW9uLmlzTG9hZGluZ31cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvTW9kYWw+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IE1vZGFsLCBCdXR0b24sIFVzZXJBZGRTZWFyY2ggfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkVXNlckljb24gZnJvbSAnaWNvbnMvYWRkX3VzZXIuc3ZnJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IHsgUmV2aWV3Q29udGV4dCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbnRleHQnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi8uLi8uLi9hcGknO1xuXG4vKiBPcHRpb25zICovXG5pbXBvcnQgeyBtb2RhbE9wdGlvbnMgfSBmcm9tICcuJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2hhcmVBY3Rpb24oeyBwcm9qZWN0VXNlcnMgfSkge1xuXHQvKiBDb250ZXh0ICovXG5cdGNvbnN0IHsgcHJvamVjdElkIH0gPSB1c2VDb250ZXh0KFJldmlld0NvbnRleHQpO1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHNldE1vZGFsT3BlbighbW9kYWxPcGVuKTtcblxuXHRjb25zdCBpbnZhbGlkYXRlUXVlcmllcyA9ICgpID0+IHtcblx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX1VTRVJTLCBwcm9qZWN0SWRdKTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEJ1dHRvbiB0aXRsZT1cIlNoYXJlXCIgZXh0ZW5zaW9uQ2xhc3Nlcz1cInB4LTVcIiBvbkNsaWNrPXt0b2dnbGVNb2RhbH0+XG5cdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xMiBtci0xXCIgc3JjPXthZGRVc2VySWNvbn0gLz5cblx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0PE1vZGFsXG5cdFx0XHRcdHRpdGxlPVwiU2VsZWN0IHVzZXJzXCJcblx0XHRcdFx0c3VidGl0bGU9XCJDaG9vc2Ugc29tZSB1c2VycyB0byBjb2xsYWJvcmF0ZSB3aXRoLlwiXG5cdFx0XHRcdHsuLi57IG1vZGFsT3BlbiwgdG9nZ2xlTW9kYWwsIC4uLm1vZGFsT3B0aW9ucywgZXh0ZW5zaW9uQ2xhc3NlczogJ2Jhcl9fbW9kYWwgYmFyX19tb2RhbC0tcmlnaHQnIH19PlxuXHRcdFx0XHQ8VXNlckFkZFNlYXJjaFxuXHRcdFx0XHRcdHsuLi57IHVzZXJzOiBwcm9qZWN0VXNlcnMsIHByb2plY3Q6IHsgaWQ6IHByb2plY3RJZCB9LCB0b2dnbGVNb2RhbCwgaW52YWxpZGF0ZVF1ZXJpZXMgfX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvTW9kYWw+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCJpbXBvcnQgeyBTQ0FMRV9JTl9VUCB9IGZyb20gJy4uLy4uLy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIEVkaXRBY3Rpb24gfSBmcm9tICcuL0VkaXRBY3Rpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQaGFzZUFjdGlvbiB9IGZyb20gJy4vUGhhc2VBY3Rpb24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQaGFzZU5leHRBY3Rpb24gfSBmcm9tICcuL1BoYXNlTmV4dEFjdGlvbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNoYXJlQWN0aW9uIH0gZnJvbSAnLi9TaGFyZUFjdGlvbic7XG5cbi8qIEdsb2JhbCAqL1xuZXhwb3J0IGNvbnN0IG1vZGFsT3B0aW9ucyA9IHtcblx0cmVuZGVyT25Cb2R5OiBmYWxzZSxcblx0Y2VudGVyOiBmYWxzZSxcblx0ZXh0ZW5zaW9uQ2xhc3NlczogJ2Jhcl9fbW9kYWwnLFxuXHRjdXN0b21BbmltYXRpb246IFNDQUxFX0lOX1VQKDIwKSxcbn07XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RSZXZpZXdBY3Rpb25CYXIgfSBmcm9tICcuL1Byb2plY3RSZXZpZXdBY3Rpb25CYXInO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsY0NvbW1lbnRQb3MocmVmLCBwb3MpIHtcblx0Y29uc3QgbWFya2VyU3BhY2VyID0gMTA7XG5cdGNvbnN0IG1hcmtlclNpemUgPSAyMDtcblx0Y29uc3Qgb2Zmc2V0ID0gbWFya2VyU2l6ZSArIG1hcmtlclNwYWNlcjtcblxuXHQvKiBHZXQgcG9zaXRpb24gb2YgbWFya2VyICovXG5cdGNvbnN0IHJldmlld1BvcyA9IHBvcy5yZXZpZXdQb3M7XG5cdGNvbnN0IHhQZXJjZW50ID0gTnVtYmVyKHBvcy54UGVyY2VudCk7XG5cdGNvbnN0IHlQZXJjZW50ID0gTnVtYmVyKHBvcy55UGVyY2VudCk7XG5cblx0LyogR2V0IGRpbWVuc2lvbnMgb2YgY3VycmVudCBib3ggKi9cblx0Y29uc3QgeyB3aWR0aDogYm94V2lkdGggPSA0MDAsIGhlaWdodDogYm94SGVpZ2h0ID0gMjI4IH0gPSByZWY/LmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIHx8IHt9O1xuXG5cdC8qIEdldCBkaW1lbnNpb25zIG9mIGN1cnJlbnQgc2NyZWVuICovXG5cdGNvbnN0IHNjcmVlbldpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG5cdGNvbnN0IGJveFBlcmNlbnRXaWR0aCA9IChib3hXaWR0aCAvIHNjcmVlbldpZHRoKSAqIDEwMDtcblxuXHRjb25zdCBzY3JlZW5IZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSByZXZpZXdQb3MudG9wO1xuXHRjb25zdCBib3hQZXJjZW50SGVpZ2h0ID0gKGJveEhlaWdodCAvIHNjcmVlbkhlaWdodCkgKiAxMDA7XG5cblx0LyogU2V0IHggYW5kIHkgdmFsdWVzIHRvIHBlcmNlbnRhZ2UgZXF1aXZlbGVudCB0byBtYWtlIHRoZSBib3ggcmVzcG9uc2l2ZSAqL1xuXHRsZXQgbGVmdCA9IG9mZnNldDtcblx0bGV0IHRvcCA9IG9mZnNldDtcblxuXHQvKiBDb21wZW5zYXRlIGZvciB0aGUgYm94V2lkdGggaWYgbWFya2VyIGlzIGF0IGVuZCBvZiBob3Jpem9udGFsIHNjcmVlbiAqL1xuXHRpZiAoeFBlcmNlbnQgKyBib3hQZXJjZW50V2lkdGggPiAxMDApIHtcblx0XHRsZWZ0ID0gLWJveFdpZHRoIC0gbWFya2VyU3BhY2VyO1xuXHR9XG5cblx0LyogQ29tcGVuc2F0ZSBmb3IgdGhlIGJveEhlaWdodCBpZiBtYXJrZXIgaXMgYXQgZW5kIG9mIHZlcnRpY2FsIHNjcmVlbiAqL1xuXHRpZiAoeVBlcmNlbnQgKyBib3hQZXJjZW50SGVpZ2h0ID4gMTAwKSB7XG5cdFx0dG9wID0gLWJveEhlaWdodCAtIG1hcmtlclNwYWNlcjtcblx0fVxuXG5cdHJldHVybiB7IGxlZnQ6IGAke2xlZnR9cHhgLCB0b3A6IGAke3RvcH1weGAgfTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgY2FsY0NvbW1lbnRQb3MgfSBmcm9tICcuL2NhbGNDb21tZW50UG9zJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgc3R5bGVNZW50aW9uIH0gZnJvbSAnLi9zdHlsZU1lbnRpb24nO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3R5bGVNZW50aW9ucyh1c2VycywgaW5wdXQpIHtcblx0Y29uc3QgbWVudGlvbk5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnRpb25zIC5tZW50aW9uc19fbWVudGlvbicpIHx8IFtdO1xuXG5cdGlmIChtZW50aW9uTm9kZXMubGVuZ3RoID4gMCkge1xuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBtZW50aW9uTm9kZXMubGVuZ3RoOyBpbmRleCsrKSB7XG5cdFx0XHRjb25zdCBtZW50aW9uID0gbWVudGlvbk5vZGVzW2luZGV4XTtcblxuXHRcdFx0Y29uc3QgbWVudGlvbklubmVyID0gbWVudGlvbi5pbm5lckhUTUwucmVwbGFjZSgnQCcsICcnKS50cmltKCk7XG5cdFx0XHRjb25zdCB1c2VyT2ZNZW50aW9uID0gdXNlcnMuZmluZCgodXNlcikgPT4gdXNlci5kaXNwbGF5ID09PSBtZW50aW9uSW5uZXIpO1xuXG5cdFx0XHRtZW50aW9uLnN0eWxlLnNldFByb3BlcnR5KCctLXRoZW1lJywgdXNlck9mTWVudGlvbi51c2VyQ29sb3IpO1xuXG5cdFx0XHRpZiAoaW5wdXQpIHtcblx0XHRcdFx0c2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0aW5wdXQuZm9jdXMoKTtcblx0XHRcdFx0XHRpbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSgyMDAsIC0xKTtcblx0XHRcdFx0fSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIHVzZVNlbGVjdGlvbiB9IGZyb20gJy4vdXNlU2VsZWN0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlUGFnZVRpdGxlIH0gZnJvbSAnLi91c2VQYWdlVGl0bGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VTdG9yYWdlIH0gZnJvbSAnLi91c2VTdG9yYWdlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4vdXNlRXZlbnRMaXN0ZW5lcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHVzZUNsb3NlT25Fc2MgfSBmcm9tICcuL3VzZUNsb3NlT25Fc2MnO1xuIiwiLyogUGFja2FncyAqL1xuaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5cbi8qIEN1c3RvbSBob29rICovXG5pbXBvcnQgdXNlRXZlbnRMaXN0ZW5lciBmcm9tICcuL3VzZUV2ZW50TGlzdGVuZXInO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VDbG9zZU9uRXNjKHN0YXR1cywgdG9nZ2xlKSB7XG5cdC8qIENhbGxiYWNrICovXG5cdGNvbnN0IGhhbmRsZUtleVVwID0gdXNlQ2FsbGJhY2soKHsga2V5IH0pID0+IHtcblx0XHRpZiAoWydFc2NhcGUnXS5pbmNsdWRlcyhrZXkpICYmIHN0YXR1cykgdG9nZ2xlKCk7XG5cdH0pO1xuXG5cdC8qIEhvb2sgKi9cblx0dXNlRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBoYW5kbGVLZXlVcCk7XG59XG4iLCJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIGVsZW1lbnQgPSB3aW5kb3cpIHtcblx0Ly8gQ3JlYXRlIGEgcmVmIHRoYXQgc3RvcmVzIGhhbmRsZXJcblx0Y29uc3Qgc2F2ZWRIYW5kbGVyID0gdXNlUmVmKCk7XG5cdC8vIFVwZGF0ZSByZWYuY3VycmVudCB2YWx1ZSBpZiBoYW5kbGVyIGNoYW5nZXMuXG5cdC8vIFRoaXMgYWxsb3dzIG91ciBlZmZlY3QgYmVsb3cgdG8gYWx3YXlzIGdldCBsYXRlc3QgaGFuZGxlciAuLi5cblx0Ly8gLi4uIHdpdGhvdXQgdXMgbmVlZGluZyB0byBwYXNzIGl0IGluIGVmZmVjdCBkZXBzIGFycmF5IC4uLlxuXHQvLyAuLi4gYW5kIHBvdGVudGlhbGx5IGNhdXNlIGVmZmVjdCB0byByZS1ydW4gZXZlcnkgcmVuZGVyLlxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNhdmVkSGFuZGxlci5jdXJyZW50ID0gaGFuZGxlcjtcblx0fSwgW2hhbmRsZXJdKTtcblxuXHR1c2VFZmZlY3QoXG5cdFx0KCkgPT4ge1xuXHRcdFx0Ly8gTWFrZSBzdXJlIGVsZW1lbnQgc3VwcG9ydHMgYWRkRXZlbnRMaXN0ZW5lclxuXHRcdFx0Ly8gT25cblx0XHRcdGNvbnN0IGlzU3VwcG9ydGVkID0gZWxlbWVudCAmJiBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXI7XG5cdFx0XHRpZiAoIWlzU3VwcG9ydGVkKSByZXR1cm47XG5cdFx0XHQvLyBDcmVhdGUgZXZlbnQgbGlzdGVuZXIgdGhhdCBjYWxscyBoYW5kbGVyIGZ1bmN0aW9uIHN0b3JlZCBpbiByZWZcblx0XHRcdGNvbnN0IGV2ZW50TGlzdGVuZXIgPSAoZXZlbnQpID0+IHNhdmVkSGFuZGxlci5jdXJyZW50KGV2ZW50KTtcblx0XHRcdC8vIEFkZCBldmVudCBsaXN0ZW5lclxuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcik7XG5cdFx0XHQvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgb24gY2xlYW51cFxuXHRcdFx0cmV0dXJuICgpID0+IHtcblx0XHRcdFx0ZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgZXZlbnRMaXN0ZW5lcik7XG5cdFx0XHR9O1xuXHRcdH0sXG5cdFx0W2V2ZW50TmFtZSwgZWxlbWVudF0gLy8gUmUtcnVuIGlmIGV2ZW50TmFtZSBvciBlbGVtZW50IGNoYW5nZXNcblx0KTtcbn1cbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUGFnZVRpdGxlKHRpdGxlLCB1cGRhdGVQcm9wcyA9IFtdKSB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZG9jdW1lbnQudGl0bGUgPSBgJHt0aXRsZSA/IHRpdGxlICsgJyB8IFBhcmFsbGVsIERhc2hib2FyZCcgOiBkb2N1bWVudC50aXRsZX1gO1xuXHR9LCBbLi4udXBkYXRlUHJvcHNdKTtcbn1cbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTZWxlY3Rpb24oKSB7XG5cdGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoW10pO1xuXG5cdGNvbnN0IHVwZGF0ZVNlbGVjdGVkID0gKGlkKSA9PiB7XG5cdFx0c2V0U2VsZWN0ZWQoKHNlbGVjdGVkKSA9PiB7XG5cdFx0XHRpZiAoc2VsZWN0ZWQuaW5jbHVkZXMoaWQpKSB7XG5cdFx0XHRcdHJldHVybiBzZWxlY3RlZC5maWx0ZXIoKHNlbGVjdGVkSWQpID0+IHNlbGVjdGVkSWQgIT09IGlkKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFsuLi5zZWxlY3RlZCwgaWRdO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlc2V0U2VsZWN0ZWQgPSAoKSA9PiBzZXRTZWxlY3RlZChbXSk7XG5cblx0cmV0dXJuIHsgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkLCByZXNldFNlbGVjdGVkIH07XG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLy8gSG9va1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU3RvcmFnZShrZXksIGluaXRpYWxWYWx1ZSwgc3RvcmFnZVR5cGUgPSAnc2Vzc2lvblN0b3JhZ2UnKSB7XG5cdC8vIFN0YXRlIHRvIHN0b3JlIG91ciB2YWx1ZVxuXHQvLyBQYXNzIGluaXRpYWwgc3RhdGUgZnVuY3Rpb24gdG8gdXNlU3RhdGUgc28gbG9naWMgaXMgb25seSBleGVjdXRlZCBvbmNlXG5cdGNvbnN0IFtzdG9yZWRWYWx1ZSwgc2V0U3RvcmVkVmFsdWVdID0gdXNlU3RhdGUoKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBHZXQgZnJvbSBsb2NhbCBzdG9yYWdlIGJ5IGtleVxuXHRcdFx0Y29uc3QgaXRlbSA9IHdpbmRvd1tzdG9yYWdlVHlwZV0uZ2V0SXRlbShrZXkpO1xuXG5cdFx0XHQvLyBJZiBubyBpdGVtIHZhbHVlIGFuZCBpbml0aWFsVmFsdWUgaXMgcHJlc2VudCwgc2V0IGFzIHZhbHVlXG5cdFx0XHRpZiAoaW5pdGlhbFZhbHVlICYmICFpdGVtKSB7XG5cdFx0XHRcdHdpbmRvd1tzdG9yYWdlVHlwZV0uc2V0SXRlbShrZXksIGluaXRpYWxWYWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFBhcnNlIHN0b3JlZCBqc29uIG9yIGlmIG5vbmUgcmV0dXJuIGluaXRpYWxWYWx1ZVxuXHRcdFx0cmV0dXJuIGl0ZW0gPyBKU09OLnBhcnNlKGl0ZW0pIDogaW5pdGlhbFZhbHVlO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHQvLyBJZiBlcnJvciBhbHNvIHJldHVybiBpbml0aWFsVmFsdWVcblx0XHRcdHJldHVybiBpbml0aWFsVmFsdWU7XG5cdFx0fVxuXHR9KTtcblx0Ly8gUmV0dXJuIGEgd3JhcHBlZCB2ZXJzaW9uIG9mIHVzZVN0YXRlJ3Mgc2V0dGVyIGZ1bmN0aW9uIHRoYXQgLi4uXG5cdC8vIC4uLiBwZXJzaXN0cyB0aGUgbmV3IHZhbHVlIHRvIHN0b3JhZ2UuXG5cdGNvbnN0IHNldFZhbHVlID0gKHZhbHVlKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIEFsbG93IHZhbHVlIHRvIGJlIGEgZnVuY3Rpb24gc28gd2UgaGF2ZSBzYW1lIEFQSSBhcyB1c2VTdGF0ZVxuXHRcdFx0Y29uc3QgdmFsdWVUb1N0b3JlID0gdmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IHZhbHVlKHN0b3JlZFZhbHVlKSA6IHZhbHVlO1xuXHRcdFx0Ly8gU2F2ZSBzdGF0ZVxuXHRcdFx0c2V0U3RvcmVkVmFsdWUodmFsdWVUb1N0b3JlKTtcblx0XHRcdC8vIFNhdmUgdG8gbG9jYWwgc3RvcmFnZVxuXHRcdFx0d2luZG93W3N0b3JhZ2VUeXBlXS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWVUb1N0b3JlKSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihlcnJvcik7XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gW3N0b3JlZFZhbHVlLCBzZXRWYWx1ZV07XG59XG4iLCIvLyBDU1NcbmltcG9ydCAnLi4vc2Nzcy9tYWluLnNjc3MnO1xuXG4vLyBQb2xseWZpbHNcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcblxuLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuXG4vKiBDbGllbnQgKi9cbmNvbnN0IGNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCh7XG5cdGRlZmF1bHRPcHRpb25zOiB7XG5cdFx0cXVlcmllczoge1xuXHRcdFx0cmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxuXHRcdH0sXG5cdH0sXG59KTtcblxuLyogUmVuZGVyICovXG5jb25zdCBhcHBOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuaWYgKGFwcE5vZGUgIT09IG51bGwpIHtcblx0cmVuZGVyKFxuXHRcdDxRdWVyeUNsaWVudFByb3ZpZGVyIHsuLi57IGNsaWVudCB9fT5cblx0XHRcdDxBcHAgLz5cblx0XHQ8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+LFxuXHRcdGFwcE5vZGVcblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBIZWFkZXIsIEJhY2tncm91bmQsIExvZ2luRm9ybSB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxuXHRcdFx0XHQ8QmFja2dyb3VuZCAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVfX3BhbmVsIHBhbmVsIHBhbmVsLS1sb2dpblwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lbF9fYm9keVwiPlxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2UgdGV4dC13aGl0ZSBtYi0wXCI+TG9naW48L2gxPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS03MCB0ZXh0LXdoaXRlIG1iLTZcIj5Mb2dpbiB3aXRoIHlvdXIgZS1tYWlsIGFuZCBwYXNzd29yZDwvcD5cblx0XHRcdFx0XHRcdFx0PExvZ2luRm9ybSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFBhZ2VMb2FkZXIsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IHsgUHJvamVjdERldGFpbEhlYWRlciwgUHJvamVjdERldGFpbEltYWdlcyB9IGZyb20gJy4uL2RvbWFpbi9wcm9qZWN0LWRldGFpbCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZmV0Y2hQcm9qZWN0QnlJZCwgUVVFUllfS0VZUyB9IGZyb20gJy4uL2FwaSc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VQYWdlVGl0bGUgfSBmcm9tICcuLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWwoKSB7XG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBpZDogcHJvamVjdElkIH0gPSB1c2VQYXJhbXMoKTtcblx0Y29uc3QgeyBpc0xvYWRpbmcsIGRhdGEgPSB7fSB9ID0gdXNlUXVlcnkoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcGFyc2VJbnQocHJvamVjdElkKV0sICgpID0+XG5cdFx0ZmV0Y2hQcm9qZWN0QnlJZCh7IHByb2plY3RJZCB9KVxuXHQpO1xuXG5cdC8qIEhvb2tzICovXG5cdHVzZVBhZ2VUaXRsZShkYXRhPy50aXRsZSwgW2RhdGFdKTtcblxuXHQvKiBDb25zdGFudHMgICovXG5cdGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCB1c2VycywgaWQsIGF1dGhvciwgZW1haWwsIHByb2plY3RJbWFnZXMgfSA9IGRhdGE7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PFBhZ2VXcmFwcGVyPlxuXHRcdFx0PFBhZ2VMb2FkZXIgey4uLnsgaXNMb2FkaW5nIH19PlxuXHRcdFx0XHQ8UHJvamVjdERldGFpbEhlYWRlciB7Li4ueyB0aXRsZSwgZGVzY3JpcHRpb24sIHVzZXJzLCBpZCwgYXV0aG9yLCBlbWFpbCB9fSAvPlxuXHRcdFx0XHQ8UHJvamVjdERldGFpbEltYWdlcyB7Li4ueyBwcm9qZWN0SW1hZ2VzLCBwcm9qZWN0SWQ6IGlkIH19IC8+XG5cdFx0XHQ8L1BhZ2VMb2FkZXI+XG5cdFx0PC9QYWdlV3JhcHBlcj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUGFnZUxvYWRlciwgUGFnZVdyYXBwZXIgfSBmcm9tICcuLi9jb21wb25lbnRzJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgeyBQcm9qZWN0UmVzdWx0cywgUHJvamVjdEFkZCB9IGZyb20gJy4uL2RvbWFpbi9wcm9qZWN0LW92ZXJ2aWV3JztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vY29udGV4dC9tYWluQ29udGV4dCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZmV0Y2hQcm9qZWN0c0J5VXNlciwgUVVFUllfS0VZUyB9IGZyb20gJy4uL2FwaSc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VQYWdlVGl0bGUgfSBmcm9tICcuLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RPdmVydmlldygpIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW25ld1Byb2plY3RJZCwgc2V0TmV3UHJvamVjdElkXSA9IHVzZVN0YXRlKCk7XG5cblx0LyogSG9va3MgKi9cblx0dXNlUGFnZVRpdGxlKCdQcm9qZWN0cycpO1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyLCB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhOiBwcm9qZWN0cyA9IFtdIH0gPSB1c2VRdWVyeShcblx0XHRRVUVSWV9LRVlTLlBST0pFQ1RfQllfVVNFUixcblx0XHQoKSA9PiBmZXRjaFByb2plY3RzQnlVc2VyKHsgdXNlcklkOiBjdXJyZW50VXNlcj8uaWQgfSksXG5cdFx0e1xuXHRcdFx0ZW5hYmxlZDogISFjdXJyZW50VXNlcj8uaWQsXG5cdFx0fVxuXHQpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxQYWdlV3JhcHBlcj5cblx0XHRcdDxQYWdlTG9hZGVyIHsuLi57IGlzTG9hZGluZyB9fT5cblx0XHRcdFx0e3VzZXJSb2xlID09PSAnYWRtaW4nICYmIDxQcm9qZWN0QWRkIHsuLi57IHNldE5ld1Byb2plY3RJZCB9fSAvPn1cblx0XHRcdFx0PFByb2plY3RSZXN1bHRzIHsuLi57IHByb2plY3RzLCBuZXdQcm9qZWN0SWQgfX0gLz5cblx0XHRcdDwvUGFnZUxvYWRlcj5cblx0XHQ8L1BhZ2VXcmFwcGVyPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQYWdlTG9hZGVyLCBQYWdlV3JhcHBlciB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCB7IFByb2plY3RSZXZpZXdDYW52YXMgfSBmcm9tICcuLi9kb21haW4vcHJvamVjdC1yZXZpZXcnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGZldGNoUHJvamVjdEltYWdlQnlJZCwgUVVFUllfS0VZUyB9IGZyb20gJy4uL2FwaSc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VQYWdlVGl0bGUgfSBmcm9tICcuLi9ob29rcyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCB7IFJldmlld0NvbnRleHQgfSBmcm9tICcuLi9jb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlldygpIHtcblx0Y29uc3QgW2FjdGl2ZVBoYXNlLCBzZXRBY3RpdmVQaGFzZV0gPSB1c2VTdGF0ZSgpO1xuXG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBpZDogcHJvamVjdEltYWdlSWQgfSA9IHVzZVBhcmFtcygpO1xuXHRjb25zdCB7IGlzTG9hZGluZywgZGF0YSwgcmVmZXRjaCB9ID0gdXNlUXVlcnkoXG5cdFx0W1FVRVJZX0tFWVMuUFJPSkVDVF9JTUFHRV9CWV9JRCwgcGFyc2VJbnQocHJvamVjdEltYWdlSWQpXSxcblx0XHQoKSA9PiBmZXRjaFByb2plY3RJbWFnZUJ5SWQoeyBwcm9qZWN0SW1hZ2VJZCwgcGhhc2VJZDogYWN0aXZlUGhhc2UgfSksXG5cdFx0e1xuXHRcdFx0cmVmZXRjaE9uV2luZG93Rm9jdXM6IHRydWUsXG5cdFx0fVxuXHQpO1xuXG5cdC8qIEVmZmVjdHMgKi9cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoYWN0aXZlUGhhc2UpIHJlZmV0Y2goeyBwcm9qZWN0SW1hZ2U6IHByb2plY3RJbWFnZUlkLCBwaGFzZUlkOiBhY3RpdmVQaGFzZSB9KTtcblx0fSwgW2FjdGl2ZVBoYXNlXSk7XG5cblx0LyogSG9va3MgKi9cblx0dXNlUGFnZVRpdGxlKGRhdGE/LnRpdGxlLCBbZGF0YV0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxSZXZpZXdDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHByb2plY3RJZDogZGF0YT8ucGFyZW50SWQsIHByb2plY3RJbWFnZUlkLCBhY3RpdmVQaGFzZSwgc2V0QWN0aXZlUGhhc2UgfX0+XG5cdFx0XHQ8UGFnZVdyYXBwZXI+XG5cdFx0XHRcdDxQYWdlTG9hZGVyIHsuLi57IGlzTG9hZGluZyB9fT5cblx0XHRcdFx0XHQ8UHJvamVjdFJldmlld0NhbnZhcyB7Li4uZGF0YX0gLz5cblx0XHRcdFx0PC9QYWdlTG9hZGVyPlxuXHRcdFx0PC9QYWdlV3JhcHBlcj5cblx0XHQ8L1Jldmlld0NvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgSGVhZGVyLCBCYWNrZ3JvdW5kLCBTaWdudXBGb3JtIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ251cCgpIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxuXHRcdFx0XHQ8QmFja2dyb3VuZCAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVfX3BhbmVsIHBhbmVsIHBhbmVsLS1sb2dpblwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lbF9fYm9keVwiPlxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2UgdGV4dC13aGl0ZSBtYi0wXCI+U2lnbiB1cDwvaDE+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTcwIHRleHQtd2hpdGUgbWItNlwiPlNpZ24gdXAgd2l0aCB5b3VyIGUtbWFpbCBhbmQgcGFzc3dvcmQ8L3A+XG5cdFx0XHRcdFx0XHRcdDxTaWdudXBGb3JtIC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L21haW4+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIExvZ2luIH0gZnJvbSAnLi9Mb2dpbic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFNpZ251cCB9IGZyb20gJy4vU2lnbnVwJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdE92ZXJ2aWV3IH0gZnJvbSAnLi9Qcm9qZWN0T3ZlcnZpZXcnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0RGV0YWlsIH0gZnJvbSAnLi9Qcm9qZWN0RGV0YWlsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdFJldmlldyB9IGZyb20gJy4vUHJvamVjdFJldmlldyc7XG4iLCIvKiBQYWdlcyAqL1xuaW1wb3J0IHsgUHJvamVjdE92ZXJ2aWV3LCBQcm9qZWN0RGV0YWlsLCBQcm9qZWN0UmV2aWV3LCBMb2dpbiwgU2lnbnVwIH0gZnJvbSAnLi9wYWdlcyc7XG5cbmV4cG9ydCBjb25zdCBST1VURVMgPSB7XG5cdGxvZ2luOiAnLycsXG5cdHNpZ251cDogJy9zaWdudXAnLFxuXHRwcm9qZWN0czogJy9wcm9qZWN0cycsXG59O1xuXG5jb25zdCByb3V0ZXMgPSBbXG5cdHtcblx0XHRuYW1lOiAnbG9naW4nLFxuXHRcdHBhdGg6ICcvJyxcblx0XHRjb21wb25lbnQ6IExvZ2luLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3NpZ251cCcsXG5cdFx0cGF0aDogJy9zaWdudXAnLFxuXHRcdGNvbXBvbmVudDogU2lnbnVwLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3Byb2plY3Qtb3ZlcnZpZXcnLFxuXHRcdHBhdGg6ICcvcHJvamVjdHMnLFxuXHRcdGNvbXBvbmVudDogUHJvamVjdE92ZXJ2aWV3LFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3Byb2plY3QtZGV0YWlsJyxcblx0XHRwYXRoOiAnL3Byb2plY3RzLzppZCcsXG5cdFx0Y29tcG9uZW50OiBQcm9qZWN0RGV0YWlsLFxuXHR9LFxuXHR7XG5cdFx0bmFtZTogJ3Byb2plY3QtcmV2aWV3Jyxcblx0XHRwYXRoOiAnL3Byb2plY3RzLzppZC9yZXZpZXcvOmlkJyxcblx0XHRjb21wb25lbnQ6IFByb2plY3RSZXZpZXcsXG5cdH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYXBpdGFsaXplRmlyc3RMZXR0ZXIoc3RyaW5nKSB7XG5cdHJldHVybiBzdHJpbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG59XG4iLCJleHBvcnQgY29uc3QgVVNFUl9ST0xFUyA9IHtcblx0QURNSU46ICdST0xFX0FETUlOJyxcblx0VVNFUjogJ1JPTEVfVVNFUicsXG5cdEJBU0lDOiAnUk9MRV9VU0VSX0JBU0lDJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJvbGUoeyByb2xlcyB9KSB7XG5cdGlmIChyb2xlcy5pbmNsdWRlcyhVU0VSX1JPTEVTLkFETUlOKSkgcmV0dXJuICdhZG1pbic7XG5cdGlmIChyb2xlcy5pbmNsdWRlcyhVU0VSX1JPTEVTLkJBU0lDKSkgcmV0dXJuICdiYXNpYyc7XG5cdGlmIChyb2xlcy5pbmNsdWRlcyhVU0VSX1JPTEVTLlVTRVIpKSByZXR1cm4gJ3VzZXInO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0VtYWlsIH0gZnJvbSAnLi9pc0VtYWlsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZ2V0Um9sZSB9IGZyb20gJy4vZ2V0Um9sZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHJlc2l6ZUltYWdlcyB9IGZyb20gJy4vcmVzaXplSW1hZ2UnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgfSBmcm9tICcuL2NhcGl0YWxpemVGaXJzdExldHRlcic7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0VtYWlsKGVtYWlsKSB7XG4gICAgcmV0dXJuIC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvLnRlc3QoZW1haWwpO1xufVxuIiwiaW1wb3J0IFJlc2l6ZXIgZnJvbSAncmVhY3QtaW1hZ2UtZmlsZS1yZXNpemVyJztcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG5cdG1heFdpZHRoOiAzMDAsXG5cdG1heEhlaWdodDogMzAwLFxuXHRxdWFsaXR5OiAxMDAsXG5cdHJvdGF0aW9uOiAwLFxuXHRvdXRwdXRUeXBlOiAnZmlsZScsXG59O1xuXG5hc3luYyBmdW5jdGlvbiByZXNpemVJbWFnZVR5cGUoaW1hZ2UsIG9wdGlvbnMpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0UmVzaXplci5pbWFnZUZpbGVSZXNpemVyKFxuXHRcdFx0aW1hZ2UsXG5cdFx0XHRvcHRpb25zLm1heFdpZHRoLFxuXHRcdFx0b3B0aW9ucy5tYXhIZWlnaHQsXG5cdFx0XHRpbWFnZS5wYXRoLnNwbGl0KCcuJykucG9wKCksXG5cdFx0XHRvcHRpb25zLnF1YWxpdHksXG5cdFx0XHRvcHRpb25zLnJvdGF0aW9uLFxuXHRcdFx0KHVyaSkgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKHVyaSk7XG5cdFx0XHR9LFxuXHRcdFx0b3B0aW9ucy5vdXRwdXRUeXBlXG5cdFx0KTtcblx0fSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlc2l6ZUltYWdlKGltYWdlKSB7XG5cdGNvbnN0IHRodW1ibmFpbCA9IGF3YWl0IHJlc2l6ZUltYWdlVHlwZShpbWFnZSwgeyAuLi5kZWZhdWx0T3B0aW9ucywgbWF4V2lkdGg6IDI2OCwgbWF4SGVpZ2h0OiAyMzYgfSk7XG5cdGNvbnN0IHRodW1ibmFpbFJldGluYSA9IGF3YWl0IHJlc2l6ZUltYWdlVHlwZShpbWFnZSwgeyAuLi5kZWZhdWx0T3B0aW9ucywgbWF4V2lkdGg6IDUzNiwgbWF4SGVpZ2h0OiA0NzIgfSk7XG5cblx0cmV0dXJuIHtcblx0XHRvcmlnaW5hbDogaW1hZ2UsXG5cdFx0dGh1bWJuYWlsOiBPYmplY3QuYXNzaWduKHRodW1ibmFpbCwgeyBwcmV2aWV3OiBVUkwuY3JlYXRlT2JqZWN0VVJMKHRodW1ibmFpbCkgfSksXG5cdFx0dGh1bWJuYWlsUmV0aW5hOiBPYmplY3QuYXNzaWduKHRodW1ibmFpbFJldGluYSwgeyBwcmV2aWV3OiBVUkwuY3JlYXRlT2JqZWN0VVJMKHRodW1ibmFpbFJldGluYSkgfSksXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlc2l6ZUltYWdlcyhpbWFnZXMpIHtcblx0cmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKFxuXHRcdGltYWdlcy5tYXAoYXN5bmMgKGltYWdlKSA9PiB7XG5cdFx0XHRyZXR1cm4gYXdhaXQgcmVzaXplSW1hZ2UoaW1hZ2UpO1xuXHRcdH0pXG5cdCk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9