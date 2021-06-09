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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__["AnimatePresence"], null, ![_routes__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].login, _routes__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].signup].includes(location.pathname) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["HeaderNavigation"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["PageLoader"], {
    isLoading: isLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__["AnimatePresence"], {
    exitBeforeEnter: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
    location: location,
    key: location.pathname
  }, currentUser && location.pathname === _routes__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].login && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
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
      setCurrentUser: setCurrentUser,
      userRole: userRole,
      setUserRole: setUserRole
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

/***/ "./assets/app/js/api/comment.js":
/*!**************************************!*\
  !*** ./assets/app/js/api/comment.js ***!
  \**************************************/
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
    var phaseId, userId, comment, mentioned, position, params, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            phaseId = _ref.phaseId, userId = _ref.userId, comment = _ref.comment, mentioned = _ref.mentioned, position = _ref.position;
            params = new FormData();
            params.append('userId', userId);
            params.append('comment', comment);
            params.append('mentioned[]', mentioned);
            params.append('positionX', position.xPercent);
            params.append('positionY', position.yPercent);
            params.append('referer', window.location.pathname.replace('/', ''));
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

/***/ }),

/***/ "./assets/app/js/api/index.js":
/*!************************************!*\
  !*** ./assets/app/js/api/index.js ***!
  \************************************/
/*! exports provided: signup, login, logout, fetchProjectsByUser, fetchProjectById, addProject, deleteProjects, leaveProjects, editProject, fetchProjectImageById, addProjectImages, deleteProjectImages, editProjectImage, fetchCurrentUser, fetchGobalUsers, addUser, deleteUser, addComment, QUERY_KEYS */
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

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addUser", function() { return _user__WEBPACK_IMPORTED_MODULE_3__["addUser"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return _user__WEBPACK_IMPORTED_MODULE_3__["deleteUser"]; });

/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comment */ "./assets/app/js/api/comment.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addComment", function() { return _comment__WEBPACK_IMPORTED_MODULE_4__["addComment"]; });






var QUERY_KEYS = {
  CURRENT_USER: 'current_user',
  PROJECT_BY_USER: 'project_by_user',
  PROJECT_BY_ID: 'project_by_id',
  PROJECT_IMAGE_BY_ID: 'project_image_by_id',
  GLOBAL_USERS: 'global_users'
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

/***/ "./assets/app/js/api/user.js":
/*!***********************************!*\
  !*** ./assets/app/js/api/user.js ***!
  \***********************************/
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
              email: email,
              referer: window.location.pathname.replace('/', '')
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
    className: "alert__message text--xs text-muted--70 mr-lg-8"
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

/***/ "./assets/app/js/components/box/Box.jsx":
/*!**********************************************!*\
  !*** ./assets/app/js/components/box/Box.jsx ***!
  \**********************************************/
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_6__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Packages */




/* Components */


/* Animations */


/* Assets */


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
  var animation = animate ? _objectSpread({}, _animations__WEBPACK_IMPORTED_MODULE_5__["FADE_IN_UP"]) : {};
  /* TODO: escape event listener */

  var render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], null, boxOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, {
      layout: true,
      ref: boxRef,
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
    }, _animations__WEBPACK_IMPORTED_MODULE_5__["FADE_IN"], {
      onClick: toggleBox
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
      key: "box-content",
      className: "box__content border p-5"
    }, animation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "box__header d-flex align-items-start"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-center w-100"
    }, user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["User"], {
      user: user,
      size: "xl"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex flex-column w-100 ".concat(user && 'ml-2')
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-center"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text--lg mb-0"
    }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "button",
      className: "custom-modal__close btn btn-link ml-auto",
      onClick: toggleBox
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_3__["ReactSVG"], {
      wrapper: "svg",
      className: "icon icon--12",
      src: icons_close_svg__WEBPACK_IMPORTED_MODULE_6___default.a
    }))), (SubtitleComponent || subtitle) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      className: "text-muted--60 mb-0 text--sm"
    }, SubtitleComponent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SubtitleComponent, null) : subtitle)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* {ackages */

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["LoadingWrapper"], {
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
  var inputType = _ref.inputType,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["inputType", "children"]);

  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      boxOpen = _useState2[0],
      setBoxOpen = _useState2[1];
  /* Hooks */


  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_5__["default"]),
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
    src: icons_edit_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    title: title,
    subtitle: subtitle,
    boxOpen: boxOpen,
    toggleBox: toggleBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditableBody__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({
    title: title,
    inputType: inputType,
    toggleBox: toggleBox
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    title: "Save",
    extensionClasses: "mt-4 w-50 justify-content-center",
    isLoading: editMutation.isLoading,
    type: "submit"
  }));
}

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
/*! exports provided: ActionMenu, Alert, Background, Box, Button, Dropzone, Editable, LoadingWrapper, Modal, PageLoader, PageWrapper, UserAdd, UserAddSearch, UserAddSearchResults, Header, HeaderNavigation, User, Users, UserSelect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action_menu_ActionMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action-menu/ActionMenu */ "./assets/app/js/components/action-menu/ActionMenu.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ActionMenu", function() { return _action_menu_ActionMenu__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _alert_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./alert/Alert */ "./assets/app/js/components/alert/Alert.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return _alert_Alert__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _background_Background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background/Background */ "./assets/app/js/components/background/Background.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Background", function() { return _background_Background__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _box_Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./box/Box */ "./assets/app/js/components/box/Box.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _box_Box__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _button_Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./button/Button */ "./assets/app/js/components/button/Button.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _button_Button__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _dropzone_Dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropzone/Dropzone */ "./assets/app/js/components/dropzone/Dropzone.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropzone", function() { return _dropzone_Dropzone__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _editable_Editable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editable/Editable */ "./assets/app/js/components/editable/Editable.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Editable", function() { return _editable_Editable__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _loading_wrapper_LoadingWrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loading-wrapper/LoadingWrapper */ "./assets/app/js/components/loading-wrapper/LoadingWrapper.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadingWrapper", function() { return _loading_wrapper_LoadingWrapper__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _modal_Modal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal/Modal */ "./assets/app/js/components/modal/Modal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _modal_Modal__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _page_loader_PageLoader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page-loader/PageLoader */ "./assets/app/js/components/page-loader/PageLoader.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageLoader", function() { return _page_loader_PageLoader__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _page_wrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page-wrapper/PageWrapper */ "./assets/app/js/components/page-wrapper/PageWrapper.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PageWrapper", function() { return _page_wrapper_PageWrapper__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _user_add_UserAdd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user-add/UserAdd */ "./assets/app/js/components/user-add/UserAdd.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAdd", function() { return _user_add_UserAdd__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _user_add_UserAddSearch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-add/UserAddSearch */ "./assets/app/js/components/user-add/UserAddSearch.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAddSearch", function() { return _user_add_UserAddSearch__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _user_add_UserAddSearchResults__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-add/UserAddSearchResults */ "./assets/app/js/components/user-add/UserAddSearchResults.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAddSearchResults", function() { return _user_add_UserAddSearchResults__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/Header */ "./assets/app/js/components/header/Header.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _header_Header__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _header_HeaderNavigation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header/HeaderNavigation */ "./assets/app/js/components/header/HeaderNavigation.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderNavigation", function() { return _header_HeaderNavigation__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _users_User__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./users/User */ "./assets/app/js/components/users/User.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _users_User__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _users_Users__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./users/Users */ "./assets/app/js/components/users/Users.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return _users_Users__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _users_UserSelect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./users/UserSelect */ "./assets/app/js/components/users/UserSelect.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserSelect", function() { return _users_UserSelect__WEBPACK_IMPORTED_MODULE_18__["default"]; });





















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
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
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
    src: icons_add_user_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    title: "Select users",
    subtitle: "Choose some users to collaborate with.",
    boxOpen: boxOpen,
    toggleBox: toggleBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["UserAddSearch"], {
    users: users,
    project: project,
    toggleBox: toggleBox
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["UserAddSearchResults"], {
    filteredUsers: filteredUsers,
    query: query,
    handleClick: handleClick,
    focusedUser: focusedUser,
    setFocusedUser: setFocusedUser,
    userMutationLoading: addUserMutation.isLoading,
    globalUsersLoading: globalUsersLoading
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center justify-content-center mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    title: "Done",
    onClick: toggleBox,
    extensionClasses: "w-50 justify-content-center"
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
    className: "box__list list"
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

  var deleteUserMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_6__["deleteUser"], {
    onSuccess: function onSuccess() {
      return queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_6__["QUERY_KEYS"].PROJECT_BY_ID, projectId]);
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
    src: icons_delete_svg__WEBPACK_IMPORTED_MODULE_5___default.a
  }))), isAuthor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__status user__status--leader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "user__status-icon icon text-tertiary mt-0",
    src: icons_star_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  })));
}
var UserAvatar = function UserAvatar(_ref2) {
  var display = _ref2.display,
      userColor = _ref2.userColor,
      isLoading = _ref2.isLoading,
      children = _ref2.children;

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
var UserInfo = function UserInfo(_ref3) {
  var display = _ref3.display,
      email = _ref3.email;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column ml-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-0"
  }, display), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted--60 text--xs"
  }, email));
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
  }, user)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_2__["UserInfo"], user), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    className: "text--xs text-muted--70 ml-1"
  }, "+ ", users.length - sliceAmount))));
}

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
    inputType: "title",
    content: title,
    mutation: _api__WEBPACK_IMPORTED_MODULE_4__["editProject"],
    mutationId: id,
    mutationOnSuccess: mutationOnSuccess
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "h5 mb-0 text-white"
  }, title ? title : 'Add a nice title'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(userRole === 'admin' && 'editable', " d-flex align-items-center mb-2")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Editable"], {
    inputType: "description",
    content: description,
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
    inputType: "title",
    projectId: projectId,
    content: title,
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, selected.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["ActionMenu"], {
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
      modalOpen = _useState4[0],
      setModalOpen = _useState4[1];
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
    onClick: toggleModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--30 text-secondary",
    src: icons_add_project_svg__WEBPACK_IMPORTED_MODULE_6___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], null, modalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_4__["ProjectModal"], {
    project: project,
    updateProject: updateProject,
    toggleModal: toggleModal
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

/***/ "./assets/app/js/domain/project-overview/ProjectModal.jsx":
/*!****************************************************************!*\
  !*** ./assets/app/js/domain/project-overview/ProjectModal.jsx ***!
  \****************************************************************/
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
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
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

/***/ "./assets/app/js/domain/project-overview/index.js":
/*!********************************************************!*\
  !*** ./assets/app/js/domain/project-overview/index.js ***!
  \********************************************************/
/*! exports provided: Project, ProjectAdd, ProjectImage, ProjectModal, ProjectResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./assets/app/js/domain/project-overview/Project.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return _Project__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ProjectAdd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectAdd */ "./assets/app/js/domain/project-overview/ProjectAdd.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectAdd", function() { return _ProjectAdd__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ProjectImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectImage */ "./assets/app/js/domain/project-overview/ProjectImage.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectImage", function() { return _ProjectImage__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ProjectModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectModal */ "./assets/app/js/domain/project-overview/ProjectModal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectModal", function() { return _ProjectModal__WEBPACK_IMPORTED_MODULE_3__["default"]; });

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
/* harmony import */ var _ProjectReviewMarker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectReviewMarker */ "./assets/app/js/domain/project-review/ProjectReviewMarker.jsx");
/* harmony import */ var _ProjectReviewComment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectReviewComment */ "./assets/app/js/domain/project-review/ProjectReviewComment.jsx");
/* harmony import */ var _ProjectReviewCommentBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectReviewCommentBox */ "./assets/app/js/domain/project-review/ProjectReviewCommentBox.jsx");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ "./assets/app/js/api/index.js");
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



/* Domain */




/* Api */


/* Global */

var cursorOffset = 10;
function ProjectReviewCanvas(_ref) {
  var title = _ref.title,
      _ref$phases = _ref.phases,
      phases = _ref$phases === void 0 ? [] : _ref$phases,
      projectImageId = _ref.projectImageId;

  /* Queries */
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_api__WEBPACK_IMPORTED_MODULE_6__["QUERY_KEYS"].GLOBAL_USERS, _api__WEBPACK_IMPORTED_MODULE_6__["fetchGobalUsers"]),
      _useQuery$data = _useQuery.data,
      globalUsers = _useQuery$data === void 0 ? [] : _useQuery$data;
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
    src: image.original,
    srcSet: "".concat(image.original, " 2x"),
    alt: title,
    onClick: posMarker
  }), comments.length > 0 && comments.map(function (comment, commentIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewComment__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
      key: commentIndex
    }, _objectSpread(_objectSpread({}, comment), {}, {
      commentIndex: commentIndex,
      reviewRef: reviewRef,
      globalUsers: globalUsers
    })));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, markerPos && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewMarker__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread(_objectSpread({}, markerPos), {}, {
    commentIndex: null
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewCommentBox__WEBPACK_IMPORTED_MODULE_5__["default"], {
    markerPos: markerPos,
    boxOpen: boxOpen,
    toggleBox: toggleBox,
    phaseId: phaseId,
    projectImageId: projectImageId
  }))));
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
/* harmony import */ var _ProjectReviewMarker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectReviewMarker */ "./assets/app/js/domain/project-review/ProjectReviewMarker.jsx");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "./assets/app/js/domain/project-review/services/index.js");
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

/* Components */


/* Domain */


/* Services */


function ProjectReviewComment(_ref) {
  var author = _ref.author,
      comment = _ref.comment,
      position = _ref.position,
      commentIndex = _ref.commentIndex,
      reviewRef = _ref.reviewRef,
      globalUsers = _ref.globalUsers;

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
    commentIndex: commentIndex + 1,
    commentOpen: boxOpen,
    toggleComment: toggleBox
  }, boxOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comment, {
    comment: comment,
    author: author,
    boxOpen: boxOpen,
    toggleBox: toggleBox,
    position: position,
    reviewRef: reviewRef,
    globalUsers: globalUsers
  }));
}

var Comment = function Comment(_ref2) {
  var comment = _ref2.comment,
      author = _ref2.author,
      boxOpen = _ref2.boxOpen,
      toggleBox = _ref2.toggleBox,
      position = _ref2.position,
      reviewRef = _ref2.reviewRef,
      globalUsers = _ref2.globalUsers;

  /* Constants */
  var title = author.display;
  var subtitle = author.organisation;
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
        return Object(_services__WEBPACK_IMPORTED_MODULE_3__["calcCommentPos"])(boxRef, position);
      });
    }
  }, [position]);

  var renderComment = function renderComment() {
    var usersRegex = /@\[[^\]]*\]\{[0-9]+\}/gi;

    var usersArray = _toConsumableArray(comment.matchAll(usersRegex));

    var comments = comment.split(/@\[[^\]]*\]\{[0-9]+\}/gi);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, comments.map(function (comment, commentIndex) {
      var user;

      if (commentIndex in usersArray) {
        user = globalUsers.find(function (user) {
          return usersArray[commentIndex][0].includes(user.display);
        });
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        key: comment
      }, "".concat(comment, " ")), ' ', user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        key: user.id,
        className: "mentions__mention px-1",
        style: {
          '--theme': user.userColor
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "@", user.display)), ' '));
    }));
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_1__["Box"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column"
  }, renderComment(), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center mt-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted--60 mb-0 hr-2 text--sm"
  }, "3 days ago"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted--80 mb-0 hr-2 text--sm"
  }, "7 people agree"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted--80 mb-0 hr-2 text--sm"
  }, "reply"))));
};

/***/ }),

/***/ "./assets/app/js/domain/project-review/ProjectReviewCommentBox.jsx":
/*!*************************************************************************!*\
  !*** ./assets/app/js/domain/project-review/ProjectReviewCommentBox.jsx ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectReviewCommentBox; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _ProjectReviewCommentMentions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectReviewCommentMentions */ "./assets/app/js/domain/project-review/ProjectReviewCommentMentions.jsx");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ "./assets/app/js/domain/project-review/services/index.js");
/* harmony import */ var _context_mainContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/mainContext */ "./assets/app/js/context/mainContext.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ "./assets/app/js/api/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */


/* Components */


/* Domain */


/* Services */


/* Context */


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
  /* State */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(''),
      _useState2 = _slicedToArray(_useState, 2),
      comment = _useState2[0],
      setComment = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      mentions = _useState4[0],
      setMentions = _useState4[1];
  /* Constants */


  var title = 'Add a comment';
  var position = Object(_services__WEBPACK_IMPORTED_MODULE_4__["calcCommentPos"])(boxRef, markerPos);
  /* Hooks */

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_5__["default"]),
      user = _useContext.currentUser;

  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQueryClient"])();
  /* Mutations */

  var addCommentMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_6__["addComment"], {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_6__["QUERY_KEYS"].PROJECT_IMAGE_BY_ID, parseInt(projectImageId)]);
      toggleBox();
    }
  });
  /* Components */

  var SubtitleComponent = function SubtitleComponent() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "mt-1 text--md"
    }, "Comment or ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "text-secondary"
    }, " @mention "), " someone");
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Box"], {
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
        userId: user.id,
        phaseId: phaseId,
        comment: comment.trim(),
        mentioned: mentions,
        position: markerPos
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "comment"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectReviewCommentMentions__WEBPACK_IMPORTED_MODULE_3__["default"], {
    comment: comment,
    setComment: setComment,
    mentions: mentions,
    setMentions: setMentions
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    title: "Submit",
    extensionClasses: "mt-4 w-50 justify-content-center",
    type: "submit",
    isLoading: addCommentMutation.isLoading
  })));
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
/* harmony import */ var icons_add_user_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! icons/add_user.svg */ "./assets/app/img/icons/add_user.svg");
/* harmony import */ var icons_add_user_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(icons_add_user_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_styleMention__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/styleMention */ "./assets/app/js/domain/project-review/services/styleMention.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api */ "./assets/app/js/api/index.js");
/* harmony import */ var _components_users_User__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/users/User */ "./assets/app/js/components/users/User.jsx");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* Packages */



/* Assets */


/* Services */


/* Api */




function ProjectReviewCommentMentions(_ref) {
  var comment = _ref.comment,
      setComment = _ref.setComment,
      mentions = _ref.mentions,
      setMentions = _ref.setMentions;

  /* Queries */
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_api__WEBPACK_IMPORTED_MODULE_5__["QUERY_KEYS"].GLOBAL_USERS, _api__WEBPACK_IMPORTED_MODULE_5__["fetchGobalUsers"]),
      _useQuery$data = _useQuery.data,
      globalUsers = _useQuery$data === void 0 ? [] : _useQuery$data;
  /* Effects */


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (mentions.length > 0) Object(_services_styleMention__WEBPACK_IMPORTED_MODULE_4__["default"])(globalUsers);
  }, [mentions]);
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_mentions__WEBPACK_IMPORTED_MODULE_2__["MentionsInput"], {
    value: comment,
    className: "mentions",
    id: "comment",
    name: "comment",
    placeholder: "Say something nice...",
    autoFocus: true,
    onChange: function onChange(event) {
      return setComment(event.target.value);
    },
    onClick: function onClick() {
      return Object(_services_styleMention__WEBPACK_IMPORTED_MODULE_4__["default"])(globalUsers);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_mentions__WEBPACK_IMPORTED_MODULE_2__["Mention"], {
    trigger: "@",
    data: globalUsers,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_users_User__WEBPACK_IMPORTED_MODULE_6__["UserAvatar"], entry), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_users_User__WEBPACK_IMPORTED_MODULE_6__["UserInfo"], entry), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__add text-secondary rounded-circle ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_7__["ReactSVG"], {
    wrapper: "svg",
    className: "user__add-icon icon icon--12 text-secondary",
    src: icons_add_user_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  })))));
};

/***/ }),

/***/ "./assets/app/js/domain/project-review/ProjectReviewHeader.jsx":
/*!*********************************************************************!*\
  !*** ./assets/app/js/domain/project-review/ProjectReviewHeader.jsx ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectReviewHeader; });
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


function ProjectReviewHeader(_ref) {
  var id = _ref.id,
      title = _ref.title,
      description = _ref.description;

  /* Hooks */
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_3__["default"]),
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Editable"], {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Editable"], {
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
      _ref$commentIndex = _ref.commentIndex,
      commentIndex = _ref$commentIndex === void 0 ? 1 : _ref$commentIndex,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
    layout: true,
    transition: {
      duration: 0.2
    },
    className: "review__interaction",
    style: {
      '--x': xPercent,
      '--y': yPercent
    }
  }, _animations__WEBPACK_IMPORTED_MODULE_3__["FADE_IN"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].button, _extends({}, _animations__WEBPACK_IMPORTED_MODULE_3__["SCALE_FADE"], {
    className: "review__marker icon-wrapper icon-wrapper--secondary btn btn-link text-reset",
    style: {
      '--theme': "".concat(user.userColor)
    },
    onClick: toggleComment
  }), commentIndex && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text--xs"
  }, commentIndex)), children));
}

/***/ }),

/***/ "./assets/app/js/domain/project-review/index.js":
/*!******************************************************!*\
  !*** ./assets/app/js/domain/project-review/index.js ***!
  \******************************************************/
/*! exports provided: ProjectReviewHeader, ProjectReviewCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectReviewHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectReviewHeader */ "./assets/app/js/domain/project-review/ProjectReviewHeader.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectReviewHeader", function() { return _ProjectReviewHeader__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ProjectReviewCanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectReviewCanvas */ "./assets/app/js/domain/project-review/ProjectReviewCanvas.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectReviewCanvas", function() { return _ProjectReviewCanvas__WEBPACK_IMPORTED_MODULE_1__["default"]; });




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
function calcCommentPos(boxRef, markerPos) {
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
function styleMentions(users) {
  var mentionNodes = document.querySelectorAll('.mentions__mention') || [];

  var _loop = function _loop(index) {
    var mention = mentionNodes[index];
    var mentionInner = mention.innerHTML.replace('@', '').trim();
    var userOfMention = users.find(function (user) {
      return user.display === mentionInner;
    });
    mention.style.setProperty('--theme', userOfMention.userColor);
  };

  for (var index = 0; index < mentionNodes.length; index++) {
    _loop(index);
  }
}

/***/ }),

/***/ "./assets/app/js/hooks/index.js":
/*!**************************************!*\
  !*** ./assets/app/js/hooks/index.js ***!
  \**************************************/
/*! exports provided: useSelection, usePageTitle, useStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useSelection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useSelection */ "./assets/app/js/hooks/useSelection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSelection", function() { return _useSelection__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _usePageTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usePageTitle */ "./assets/app/js/hooks/usePageTitle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageTitle", function() { return _usePageTitle__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _useStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useStorage */ "./assets/app/js/hooks/useStorage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useStorage", function() { return _useStorage__WEBPACK_IMPORTED_MODULE_2__["default"]; });





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
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services */ "./assets/app/js/services/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api */ "./assets/app/js/api/index.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks */ "./assets/app/js/hooks/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../routes */ "./assets/app/js/routes.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */






/* Components */


/* Services */


/* Api */


/* Hooks */


/* Routes */


function Login(_ref) {
  var _errors$email, _errors$password;

  var setCurrentUser = _ref.setCurrentUser,
      setUserRole = _ref.setUserRole;

  /* Refs */
  var formRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* Hooks */

  Object(_hooks__WEBPACK_IMPORTED_MODULE_9__["usePageTitle"])('Login');
  var history = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useHistory"])();

  var _useForm = Object(react_hook_form__WEBPACK_IMPORTED_MODULE_5__["useForm"])({
    reValidateMode: 'onChange',
    mode: 'onBlur'
  }),
      register = _useForm.register,
      handleSubmit = _useForm.handleSubmit,
      errors = _useForm.formState.errors;
  /* Mutations */


  var loginMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_8__["login"], {
    onSuccess: function onSuccess(user) {
      setCurrentUser(user);
      setUserRole(Object(_services__WEBPACK_IMPORTED_MODULE_7__["getRole"])(user));
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
        message: "Successfully logged in!",
        appearance: "success"
      }));
      history.push(_routes__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].projects);
    },
    onError: function onError(error) {
      var _error$response, _error$response$data;

      Object(react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
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
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Header"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "main-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Background"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
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
    to: _routes__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].signup,
    title: "sign up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn__text"
  }, "Sign up"))))))))));
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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Packages */



/* Components */


/* Domain */


/* Api */


/* Hooks */


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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["PageWrapper"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["PageLoader"], {
    isLoading: isLoading
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_domain_project_review__WEBPACK_IMPORTED_MODULE_4__["ProjectReviewHeader"], data), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_domain_project_review__WEBPACK_IMPORTED_MODULE_4__["ProjectReviewCanvas"], _objectSpread(_objectSpread({}, data), {}, {
    projectImageId: projectImageId
  }))));
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
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ "./node_modules/react-toastify/dist/react-toastify.esm.js");
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ "./node_modules/react-hook-form/dist/index.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api */ "./assets/app/js/api/index.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../routes */ "./assets/app/js/routes.js");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../hooks */ "./assets/app/js/hooks/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */






/* Components */


/* Api */


/* Routes */


/* Hooks */


function Signup(_ref) {
  var setCurrentUser = _ref.setCurrentUser;

  /* Refs */
  var formRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* Hooks */

  Object(_hooks__WEBPACK_IMPORTED_MODULE_9__["usePageTitle"])('Signup');
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

  var signupMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_7__["signup"], {
    onSuccess: function onSuccess(user) {
      setCurrentUser(user);
      Object(react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
        message: "Successfully logged in!",
        appearance: "success"
      }));
      history.push(_routes__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].projects);
    },
    onError: function onError(error) {
      if (error.response.status === 500) {
        Object(react_toastify__WEBPACK_IMPORTED_MODULE_4__["toast"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Alert"], {
          message: "This email is already in use!",
          appearance: "danger"
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


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Header"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: "main-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Background"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_6__["Button"], {
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
    to: _routes__WEBPACK_IMPORTED_MODULE_8__["ROUTES"].login,
    title: "sign up"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn__text"
  }, "Login"))))))))));
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
  if (roles.includes(USER_ROLES.ROLE_USER)) return 'user';
  if (roles.includes(USER_ROLES.ROLE_USER_BASIC)) return 'basic';
}

/***/ }),

/***/ "./assets/app/js/services/index.js":
/*!*****************************************!*\
  !*** ./assets/app/js/services/index.js ***!
  \*****************************************/
/*! exports provided: isEmail, getRole, resizeImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isEmail */ "./assets/app/js/services/isEmail.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return _isEmail__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _getRole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getRole */ "./assets/app/js/services/getRole.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getRole", function() { return _getRole__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _resizeImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./resizeImage */ "./assets/app/js/services/resizeImage.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "resizeImages", function() { return _resizeImage__WEBPACK_IMPORTED_MODULE_2__["default"]; });





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvYmFja2dyb3VuZC1sb2dpbi5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvYmFja2dyb3VuZC1sb2dpbkAyeC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX2ltYWdlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9hZGRfcHJvamVjdC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX3VzZXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2FyY2hpdmUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2NoZWNrLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9jbG9zZS13aGl0ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvY2xvc2Uuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2Rhbmdlci5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvZGVsZXRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9lZGl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9sZWF2ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvc3Rhci5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvc3VjY2Vzcy5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvdXBsb2FkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy93YXJuaW5nLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9hbmltYXRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvYXBpL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9hcGkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9hcGkvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FwaS9wcm9qZWN0SW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9hcGkvc2VjdXJpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9hcGkvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvYWN0aW9uLW1lbnUvQWN0aW9uTWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2FsZXJ0L0FsZXJ0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvYmFja2dyb3VuZC9CYWNrZ3JvdW5kLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvYm94L0JveC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2J1dHRvbi9CdXR0b24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9kcm9wem9uZS9Ecm9wem9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2VkaXRhYmxlL0VkaXRhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvZWRpdGFibGUvRWRpdGFibGVCb2R5LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXJOYXZpZ2F0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2xvYWRpbmctd3JhcHBlci9Mb2FkaW5nV3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL21vZGFsL01vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvcGFnZS1sb2FkZXIvUGFnZUxvYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3BhZ2Utd3JhcHBlci9QYWdlV3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3VzZXItYWRkL1VzZXJBZGQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy91c2VyLWFkZC9Vc2VyQWRkU2VhcmNoLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvdXNlci1hZGQvVXNlckFkZFNlYXJjaFJlc3VsdHMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy91c2VyLWFkZC9zZXJ2aWNlcy9maWx0ZXJVc2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvdXNlcnMvVXNlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3VzZXJzL1VzZXJTZWxlY3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy91c2Vycy9Vc2Vycy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb250ZXh0L21haW5Db250ZXh0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtZGV0YWlsL1Byb2plY3REZXRhaWxIZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtZGV0YWlsL1Byb2plY3REZXRhaWxJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1kZXRhaWwvUHJvamVjdERldGFpbEltYWdlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1kZXRhaWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1vdmVydmlldy9Qcm9qZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LW92ZXJ2aWV3L1Byb2plY3RBZGQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3Qtb3ZlcnZpZXcvUHJvamVjdEltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LW92ZXJ2aWV3L1Byb2plY3RNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1vdmVydmlldy9Qcm9qZWN0UmVzdWx0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1vdmVydmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3Q2FudmFzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3Q29tbWVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvUHJvamVjdFJldmlld0NvbW1lbnRCb3guanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdDb21tZW50TWVudGlvbnMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdIZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdNYXJrZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L3NlcnZpY2VzL2NhbGNDb21tZW50UG9zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L3NlcnZpY2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L3NlcnZpY2VzL3N0eWxlTWVudGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2hvb2tzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvaG9va3MvdXNlUGFnZVRpdGxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvaG9va3MvdXNlU2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvaG9va3MvdXNlU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9wYWdlcy9Mb2dpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9wYWdlcy9Qcm9qZWN0RGV0YWlsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3BhZ2VzL1Byb2plY3RPdmVydmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9wYWdlcy9Qcm9qZWN0UmV2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3BhZ2VzL1NpZ251cC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JvdXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3NlcnZpY2VzL2dldFJvbGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9zZXJ2aWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3NlcnZpY2VzL2lzRW1haWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9zZXJ2aWNlcy9yZXNpemVJbWFnZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbIkFwcCIsIlJvdXRlckJvZHkiLCJ1c2VTdGF0ZSIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJ1c2VyUm9sZSIsInNldFVzZXJSb2xlIiwidXNlU3RvcmFnZSIsImF0b2IiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlcGxhY2UiLCJ1c2VySWQiLCJ1c2VMb2NhdGlvbiIsInVzZVF1ZXJ5IiwiUVVFUllfS0VZUyIsIkNVUlJFTlRfVVNFUiIsImZldGNoQ3VycmVudFVzZXIiLCJyZXRyeSIsIm9uU3VjY2VzcyIsInVzZXIiLCJnZXRSb2xlIiwiaXNMb2FkaW5nIiwiUk9VVEVTIiwibG9naW4iLCJzaWdudXAiLCJpbmNsdWRlcyIsInBhdGhuYW1lIiwicHJvamVjdHMiLCJyb3V0ZXMiLCJtYXAiLCJwYXRoIiwiQ29tcG9uZW50IiwiY29tcG9uZW50IiwicHJvcHMiLCJGQURFX0lOIiwiaGlkZVByb2dyZXNzQmFyIiwibmV3ZXN0T25Ub3AiLCJwb3NpdGlvbiIsImNsb3NlQnV0dG9uIiwiRUFTRSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImR1cmF0aW9uIiwiRkFERV9JTl9VUCIsInkiLCJ0eXBlIiwiZGFtcGluZyIsInN0aWZmbmVzcyIsIlRSQU5TRk9STV9VUCIsIlNDQUxFX0ZBREUiLCJzY2FsZSIsIlNUQUdHRVJfVVAiLCJpbmRleCIsImRlbGF5IiwiU1RBR0dFUl9MRUZUIiwieCIsImFkZENvbW1lbnQiLCJwaGFzZUlkIiwiY29tbWVudCIsIm1lbnRpb25lZCIsInBhcmFtcyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwieFBlcmNlbnQiLCJ5UGVyY2VudCIsImF4aW9zIiwicG9zdCIsInJlc3VsdCIsImRhdGEiLCJQUk9KRUNUX0JZX1VTRVIiLCJQUk9KRUNUX0JZX0lEIiwiUFJPSkVDVF9JTUFHRV9CWV9JRCIsIkdMT0JBTF9VU0VSUyIsImZldGNoUHJvamVjdHNCeVVzZXIiLCJnZXQiLCJmZXRjaFByb2plY3RCeUlkIiwicHJvamVjdElkIiwiYWRkUHJvamVjdCIsImRlbGV0ZVByb2plY3RzIiwicHJvamVjdElkcyIsImZvckVhY2giLCJpZCIsImxlYXZlUHJvamVjdHMiLCJlZGl0UHJvamVjdCIsImZvcm1SZWYiLCJjdXJyZW50IiwiZmV0Y2hQcm9qZWN0SW1hZ2VCeUlkIiwicHJvamVjdEltYWdlSWQiLCJhZGRQcm9qZWN0SW1hZ2VzIiwiaW1hZ2VzIiwiaW1hZ2UiLCJpbWFnZUluZGV4Iiwib3JpZ2luYWwiLCJ0aHVtYm5haWwiLCJ0aHVtYm5haWxSZXRpbmEiLCJkZWxldGVQcm9qZWN0SW1hZ2VzIiwicHJvamVjdEltYWdlSWRzIiwiZWRpdFByb2plY3RJbWFnZSIsImVtYWlsIiwicGFzc3dvcmQiLCJsb2dvdXQiLCJ1cmwiLCJmZXRjaEdvYmFsVXNlcnMiLCJhZGRVc2VyIiwicmVmZXJlciIsImRlbGV0ZVVzZXIiLCJBY3Rpb25NZW51Iiwic2VsZWN0ZWQiLCJyZXNldFNlbGVjdGVkIiwiYWN0aW9ucyIsInVzZUNvbnRleHQiLCJTdGF0aWNDb250ZXh0IiwiY2xvc2VJY29uIiwibGVuZ3RoIiwiYWN0aW9uSW5kZXgiLCJ0aXRsZSIsInRoZW1lIiwiaGFzUGVybWlzc2lvbiIsImljb24iLCJpY29uU2l6ZSIsIm11dGF0aW9uIiwibG9hZGVyQ2xhc3NlcyIsImFwcGVhcmFuY2VUeXBlcyIsIndhcm5pbmciLCJ3YXJuaW5nSWNvbiIsImRhbmdlciIsImVycm9ySWNvbiIsInN1Y2Nlc3MiLCJzdWNjZXNzSWNvbiIsIkFsZXJ0IiwibWVzc2FnZSIsImFwcGVhcmFuY2UiLCJjbG9zZVRvYXN0IiwiQmFja2dyb3VuZCIsImJnIiwiYmdSZXRpbmEiLCJCb3giLCJzdWJ0aXRsZSIsIlN1YnRpdGxlQ29tcG9uZW50IiwiYm94T3BlbiIsInRvZ2dsZUJveCIsImNoaWxkcmVuIiwicmVuZGVyT25Cb2R5IiwiYm94UmVmIiwiZXh0ZW5zaW9uQ2xhc3NlcyIsImxlZnQiLCJ0b3AiLCJhbmltYXRpb24iLCJyZW5kZXIiLCJjcmVhdGVQb3J0YWwiLCJkb2N1bWVudCIsImJvZHkiLCJCdXR0b24iLCJzaXplIiwib25DbGljayIsImJ1dHRvblJlZiIsInVzZVJlZiIsImJ1dHRvbkhlaWdodCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImhlaWdodCIsIkRyb3B6b25lIiwicG9zaXRpdGlvbiIsInF1ZXJ5Q2xpZW50IiwidXNlUXVlcnlDbGllbnQiLCJ1c2VEcm9wem9uZSIsImFjY2VwdCIsIm5vQ2xpY2siLCJvbkRyb3AiLCJhY2NlcHRlZEZpbGVzIiwidXBkYXRlUHJvamVjdEltYWdlcyIsImdldFJvb3RQcm9wcyIsImdldElucHV0UHJvcHMiLCJpc0RyYWdBY3RpdmUiLCJhZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24iLCJ1c2VNdXRhdGlvbiIsImludmFsaWRhdGVRdWVyaWVzIiwiZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uIiwiYWN0aW9uIiwicmVzaXplSW1hZ2VzIiwicmVzaXplZEltYWdlcyIsIm11dGF0ZSIsImlzUGFyZW50RHJhZ0FjdGl2ZSIsIkRyb3B6b25lSW5uZXIiLCJhZGRJbWFnZUxvYWRpbmciLCJub0RyYWdFdmVudHNCdWJibGluZyIsInVwbG9hZEltYWdlSWNvbiIsImFkZEltYWdlSWNvbiIsIkVkaXRhYmxlIiwiaW5wdXRUeXBlIiwicmVzdCIsInNldEJveE9wZW4iLCJlZGl0SWNvbiIsIkVkaXRhYmxlQm9keSIsImNvbnRlbnQiLCJtdXRhdGlvbklkIiwibXV0YXRpb25PblN1Y2Nlc3MiLCJ2YWx1ZSIsInNldFZhbHVlIiwiaW5wdXRSZWYiLCJ1c2VFZmZlY3QiLCJzZWxlY3QiLCJlZGl0TXV0YXRpb24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiSGVhZGVyIiwiSGVhZGVyTmF2aWdhdGlvbiIsImhpc3RvcnkiLCJ1c2VIaXN0b3J5IiwibG9nb3V0TXV0YXRpb24iLCJwdXNoIiwidG9hc3QiLCJvbkVycm9yIiwiTG9hZGluZ1dyYXBwZXIiLCJsb2FkaW5nIiwibG9hZGVyU2l6ZSIsImNsYXNzZXMiLCJkZWZhdWx0Q2xhc3NlcyIsIk1vZGFsIiwidG9nZ2xlTW9kYWwiLCJkb21FbGVtZW50IiwidmFyaWFudCIsIlBhZ2VMb2FkZXIiLCJQYWdlV3JhcHBlciIsIlVzZXJBZGQiLCJ1c2VycyIsInByb2plY3QiLCJhZGRVc2VySWNvbiIsIlVzZXJBZGRTZWFyY2giLCJxdWVyeSIsInNldFF1ZXJ5IiwiZm9jdXNlZFVzZXIiLCJzZXRGb2N1c2VkVXNlciIsImdsb2JhbFVzZXJzIiwiZ2xvYmFsVXNlcnNMb2FkaW5nIiwiZmlsdGVyZWRVc2VycyIsImZpbHRlclVzZXJzIiwicXVlcnlSZWYiLCJhZGRVc2VyTXV0YXRpb24iLCJoYW5kbGVDaGFuZ2UiLCJoYW5kbGVPbktleURvd24iLCJrZXkiLCJpc0VtYWlsIiwiaGFuZGxlQ2xpY2siLCJ1c2VyTXV0YXRpb25Mb2FkaW5nIiwiVXNlckFkZFNlYXJjaFJlc3VsdHMiLCJyZXN1bHRzIiwibmV3VXNlciIsImRpc3BsYXkiLCJ1c2VyQ29sb3IiLCJ1c2VySW5kZXgiLCJsb3dlclF1ZXJ5IiwidG9Mb3dlckNhc2UiLCJleGlzdGluZ1VzZXJzQnlFbWFpbCIsImZpbHRlciIsIlVzZXIiLCJhdXRob3IiLCJpc0F1dGhvciIsImpvaW4iLCJkZWxldGVVc2VyTXV0YXRpb24iLCJkZWxldGVJY29uIiwic3Rhckljb24iLCJVc2VyQXZhdGFyIiwidXNlckluaXRpYWxzIiwic3BsaXQiLCJ3b3JkIiwidG9VcHBlckNhc2UiLCJVc2VySW5mbyIsIlVzZXJTZWxlY3QiLCJpc0ZvY3VzZWQiLCJoYW5kbGVTdGF0dXMiLCJVc2VycyIsImxheW91dCIsInNsaWNlQW1vdW50IiwiSW5maW5pdHkiLCJzbGljZSIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsIlByb2plY3REZXRhaWxIZWFkZXIiLCJkZXNjcmlwdGlvbiIsInN0YXRpY0NvbnRleHQiLCJQcm9qZWN0RGV0YWlsSW1hZ2UiLCJwcm9qZWN0SW1hZ2UiLCJ1cGRhdGVTZWxlY3RlZCIsInBoYXNlcyIsImNoZWNrSWNvbiIsIlByb2plY3REZXRhaWxJbWFnZXMiLCJwcm9qZWN0SW1hZ2VzIiwidXNlU2VsZWN0aW9uIiwiSW1hZ2VzIiwicHJvamVjdEltYWdlSW5kZXgiLCJQcm9qZWN0IiwiUHJvamVjdEFkZCIsInNldE5ld1Byb2plY3RJZCIsInNldFByb2plY3RJZCIsIm1vZGFsT3BlbiIsInNldE1vZGFsT3BlbiIsImVuYWJsZWQiLCJhZGRNdXRhdGlvbiIsImludmFsaWRhdGVQcm9qZWN0Iiwic2V0VGltZW91dCIsInVwZGF0ZVByb2plY3QiLCJhZGRQcm9qZWN0SWNvbiIsIlByb2plY3RJbWFnZSIsIlByb2plY3RNb2RhbCIsIkRyb3B6b25lSW1hZ2UiLCJzdG9wUHJvcGFnYXRpb24iLCJQcm9qZWN0UmVzdWx0cyIsIm5ld1Byb2plY3RJZCIsImxlYXZlUHJvamVjdHNNdXRhdGlvbiIsImRlbGV0ZVByb2plY3RzTXV0YXRpb24iLCJsZWF2ZUljb24iLCJhcmNoaXZlSWNvbiIsInByb2plY3RJbmRleCIsImN1cnNvck9mZnNldCIsIlByb2plY3RSZXZpZXdDYW52YXMiLCJjb21tZW50cyIsInJldmlld1JlZiIsIm1hcmtlclBvcyIsInNldE1hcmtlclBvcyIsInBvc01hcmtlciIsImNsaWVudFgiLCJjbGllbnRZIiwicmV2aWV3UG9zIiwid2lkdGgiLCJjb21tZW50SW5kZXgiLCJQcm9qZWN0UmV2aWV3Q29tbWVudCIsImNvbW1lbnRPcGVuIiwidG9nZ2xlQ29tbWVudCIsIkNvbW1lbnQiLCJvcmdhbmlzYXRpb24iLCJ0cmFuc2Zvcm1lZFBvcyIsInNldFRyYW5zZm9ybWVkUG9zIiwiY2FsY0NvbW1lbnRQb3MiLCJyZW5kZXJDb21tZW50IiwidXNlcnNSZWdleCIsInVzZXJzQXJyYXkiLCJtYXRjaEFsbCIsImZpbmQiLCJQcm9qZWN0UmV2aWV3Q29tbWVudEJveCIsInNldENvbW1lbnQiLCJtZW50aW9ucyIsInNldE1lbnRpb25zIiwiYWRkQ29tbWVudE11dGF0aW9uIiwicGFyc2VJbnQiLCJ0cmltIiwiUHJvamVjdFJldmlld0NvbW1lbnRNZW50aW9ucyIsInN0eWxlTWVudGlvbnMiLCJTdWdnZXN0aW9uIiwiXyIsIm5hbWUiLCJlbnRyeSIsImhpZ2hsaWdodGVkIiwiZm9jdXNlZCIsIlByb2plY3RSZXZpZXdIZWFkZXIiLCJQcm9qZWN0UmV2aWV3TWFya2VyIiwibWFya2VyU3BhY2VyIiwibWFya2VyU2l6ZSIsIm9mZnNldCIsIk51bWJlciIsImJveFdpZHRoIiwiYm94SGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJpbm5lcldpZHRoIiwiYm94UGVyY2VudFdpZHRoIiwic2NyZWVuSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJib3hQZXJjZW50SGVpZ2h0IiwibWVudGlvbk5vZGVzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1lbnRpb24iLCJtZW50aW9uSW5uZXIiLCJpbm5lckhUTUwiLCJ1c2VyT2ZNZW50aW9uIiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsInVzZVBhZ2VUaXRsZSIsInVwZGF0ZVByb3BzIiwic2V0U2VsZWN0ZWQiLCJzZWxlY3RlZElkIiwiaW5pdGlhbFZhbHVlIiwic3RvcmFnZVR5cGUiLCJpdGVtIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJlcnJvciIsInN0b3JlZFZhbHVlIiwic2V0U3RvcmVkVmFsdWUiLCJ2YWx1ZVRvU3RvcmUiLCJGdW5jdGlvbiIsInN0cmluZ2lmeSIsIkVycm9yIiwiY2xpZW50IiwiUXVlcnlDbGllbnQiLCJkZWZhdWx0T3B0aW9ucyIsInF1ZXJpZXMiLCJyZWZldGNoT25XaW5kb3dGb2N1cyIsImFwcE5vZGUiLCJnZXRFbGVtZW50QnlJZCIsIkxvZ2luIiwidXNlRm9ybSIsInJlVmFsaWRhdGVNb2RlIiwibW9kZSIsInJlZ2lzdGVyIiwiaGFuZGxlU3VibWl0IiwiZXJyb3JzIiwiZm9ybVN0YXRlIiwibG9naW5NdXRhdGlvbiIsInJlc3BvbnNlIiwib25TdWJtaXQiLCJyZXF1aXJlZCIsIlByb2plY3REZXRhaWwiLCJ1c2VQYXJhbXMiLCJQcm9qZWN0T3ZlcnZpZXciLCJQcm9qZWN0UmV2aWV3IiwiU2lnbnVwIiwiY29udHJvbCIsInBsYWluUGFzc3dvcmQiLCJ1c2VXYXRjaCIsImRlZmF1bHRWYWx1ZSIsInNpZ251cE11dGF0aW9uIiwic3RhdHVzIiwicmVzZXQiLCJ1c2VybmFtZSIsIm1pbkxlbmd0aCIsInBhc3N3b3JkQ29uZmlybSIsInZhbGlkYXRlIiwiVVNFUl9ST0xFUyIsIlJPTEVfQURNSU4iLCJST0xFX1VTRVIiLCJST0xFX1VTRVJfQkFTSUMiLCJyb2xlcyIsInRlc3QiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInF1YWxpdHkiLCJyb3RhdGlvbiIsIm91dHB1dFR5cGUiLCJyZXNpemVJbWFnZVR5cGUiLCJvcHRpb25zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJSZXNpemVyIiwiaW1hZ2VGaWxlUmVzaXplciIsInBvcCIsInVyaSIsInJlc2l6ZUltYWdlIiwiYWxsIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtR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O0FBQUE7QUFBQTtBQUFBLG1CQUNEaVcsT0FBTyxDQUFDTyxHQUFSLENBQ1p4VyxNQUFNLENBQUNoRSxHQUFQO0FBQUEsaUZBQVcsa0JBQU9pRSxLQUFQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUNHc1csV0FBVyxDQUFDdFcsS0FBRCxDQURkOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBWDs7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFEWSxDQURDOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7Ozs7Ozs7Ozs7OztBQ3RDZix1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9hcHAvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vYXNzZXRzL2FwcC9qcy9tYWluLmpzXCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYmFja2dyb3VuZC1sb2dpbi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYmFja2dyb3VuZC1sb2dpbkAyeC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYWRkX2ltYWdlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hZGRfcHJvamVjdC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYWRkX3VzZXIuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FyY2hpdmUuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2NoZWNrLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jbG9zZS13aGl0ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY2xvc2Uuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Rhbmdlci5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZGVsZXRlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9lZGl0LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9sZWF2ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvc3Rhci5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvc3VjY2Vzcy5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvdXBsb2FkLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy93YXJuaW5nLnN2Z1wiOyIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgU3dpdGNoLCBSb3V0ZSwgUmVkaXJlY3QsIHVzZUxvY2F0aW9uIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgSGVhZGVyTmF2aWdhdGlvbiwgUGFnZUxvYWRlciB9IGZyb20gJy4vY29tcG9uZW50cyc7XG5cbi8qIFNlcnZpY2VzICovXG5pbXBvcnQgeyBnZXRSb2xlIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4gfSBmcm9tICcuL2FuaW1hdGlvbnMnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGZldGNoQ3VycmVudFVzZXIsIFFVRVJZX0tFWVMgfSBmcm9tICcuL2FwaSc7XG5cbi8qIFJvdXRlcyAqL1xuaW1wb3J0IHJvdXRlcywgeyBST1VURVMgfSBmcm9tICcuL3JvdXRlcyc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VTdG9yYWdlIH0gZnJvbSAnLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PFJvdXRlcj5cblx0XHRcdDxSb3V0ZXJCb2R5IC8+XG5cdFx0PC9Sb3V0ZXI+XG5cdCk7XG59XG5cbmNvbnN0IFJvdXRlckJvZHkgPSAoKSA9PiB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXJdID0gdXNlU3RhdGUoKTtcblx0Y29uc3QgW3VzZXJSb2xlLCBzZXRVc2VyUm9sZV0gPSB1c2VTdGF0ZShbXSk7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgW3VzZXJJZF0gPSB1c2VTdG9yYWdlKCd1c2VySWQnLCBhdG9iKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gucmVwbGFjZSgnPycsICcnKSkpO1xuXHRjb25zdCBsb2NhdGlvbiA9IHVzZUxvY2F0aW9uKCk7XG5cblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGlzTG9hZGluZyB9ID0gdXNlUXVlcnkoUVVFUllfS0VZUy5DVVJSRU5UX1VTRVIsICgpID0+IGZldGNoQ3VycmVudFVzZXIoeyB1c2VySWQgfSksIHtcblx0XHRyZXRyeTogZmFsc2UsXG5cdFx0b25TdWNjZXNzOiAodXNlcikgPT4ge1xuXHRcdFx0c2V0Q3VycmVudFVzZXIodXNlcik7XG5cdFx0XHRzZXRVc2VyUm9sZShnZXRSb2xlKHVzZXIpKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8U3RhdGljQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjdXJyZW50VXNlciwgc2V0Q3VycmVudFVzZXIsIHVzZXJSb2xlIH19PlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0ey8qIFNob3cgZGlmZmVyZW50IGhlYWRlcnMgYmFzZWQgb24gcm91dGUgKi99XG5cdFx0XHRcdHshW1JPVVRFUy5sb2dpbiwgUk9VVEVTLnNpZ251cF0uaW5jbHVkZXMobG9jYXRpb24ucGF0aG5hbWUpICYmIDxIZWFkZXJOYXZpZ2F0aW9uIC8+fVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0XHQ8UGFnZUxvYWRlciB7Li4ueyBpc0xvYWRpbmcgfX0+XG5cdFx0XHRcdDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyPlxuXHRcdFx0XHRcdDxTd2l0Y2ggbG9jYXRpb249e2xvY2F0aW9ufSBrZXk9e2xvY2F0aW9uLnBhdGhuYW1lfT5cblx0XHRcdFx0XHRcdHsvKiBSZWRpcmVjdCB0byAvcHJvamVjdHMgaWYgYSB1c2VyIGlzIGxvZ2dlZCBpbiAqL31cblx0XHRcdFx0XHRcdHtjdXJyZW50VXNlciAmJiBsb2NhdGlvbi5wYXRobmFtZSA9PT0gUk9VVEVTLmxvZ2luICYmIDxSZWRpcmVjdCB0bz17Uk9VVEVTLnByb2plY3RzfSAvPn1cblxuXHRcdFx0XHRcdFx0ey8qIFJlZGlyZWN0IHRvIC9sb2dpbiBpZiBhIHVzZXIgaXMgbm90IGxvZ2dlZCBpbiBvbiB0aGUgL3Byb2plY3RzIHJvdXRlICovfVxuXHRcdFx0XHRcdFx0eyFjdXJyZW50VXNlciAmJiBsb2NhdGlvbi5wYXRobmFtZS5pbmNsdWRlcyhST1VURVMucHJvamVjdHMpICYmIDxSZWRpcmVjdCB0bz17Uk9VVEVTLmxvZ2lufSAvPn1cblxuXHRcdFx0XHRcdFx0ey8qIFJlbmRlciByb3V0ZXMgKi99XG5cdFx0XHRcdFx0XHR7cm91dGVzLm1hcCgoeyBwYXRoLCBjb21wb25lbnQ6IENvbXBvbmVudCwgcHJvcHMgfSkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8Um91dGUga2V5PXtwYXRofSBwYXRoPXtwYXRofSBleGFjdD5cblx0XHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdiBrZXk9e3BhdGh9IHsuLi5GQURFX0lOfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxDb21wb25lbnQgey4uLnsgLi4ucHJvcHMsIGN1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlciwgdXNlclJvbGUsIHNldFVzZXJSb2xlIH19IC8+XG5cdFx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0XHQ8L1JvdXRlPlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0PC9Td2l0Y2g+XG5cdFx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0PC9QYWdlTG9hZGVyPlxuXG5cdFx0XHR7LyogVG9hc3QgKi99XG5cdFx0XHQ8VG9hc3RDb250YWluZXJcblx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRoaWRlUHJvZ3Jlc3NCYXI6IHRydWUsXG5cdFx0XHRcdFx0bmV3ZXN0T25Ub3A6IHRydWUsXG5cdFx0XHRcdFx0cG9zaXRpb246ICdib3R0b20tbGVmdCcsXG5cdFx0XHRcdFx0Y2xvc2VCdXR0b246IGZhbHNlLFxuXHRcdFx0XHR9fVxuXHRcdFx0Lz5cblx0XHQ8L1N0YXRpY0NvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG59O1xuIiwiY29uc3QgRUFTRSA9IFswLjY1LCAwLCAwLjM1LCAxXTtcblxuY29uc3QgRkFERV9JTiA9IHtcblx0aW5pdGlhbDoge1xuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdGFuaW1hdGU6IHtcblx0XHRvcGFjaXR5OiAxLFxuXHR9LFxuXHRleGl0OiB7XG5cdFx0b3BhY2l0eTogMCxcblx0fSxcblx0dHJhbnNpdGlvbjoge1xuXHRcdGVhc2U6IEVBU0UsXG5cdFx0ZHVyYXRpb246IDAuMixcblx0fSxcbn07XG5cbmNvbnN0IEZBREVfSU5fVVAgPSB7XG5cdGluaXRpYWw6IHtcblx0XHR5OiAyMDAsXG5cdFx0b3BhY2l0eTogMCxcblx0fSxcblx0YW5pbWF0ZToge1xuXHRcdHk6IDAsXG5cdFx0b3BhY2l0eTogMSxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3ByaW5nJyxcblx0XHRcdGRhbXBpbmc6IDQyLFxuXHRcdFx0c3RpZmZuZXNzOiA4MDAsXG5cdFx0fSxcblx0fSxcblx0ZXhpdDoge1xuXHRcdHk6IDIwMCxcblx0XHRvcGFjaXR5OiAwLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdHR5cGU6ICdzcHJpbmcnLFxuXHRcdFx0ZGFtcGluZzogNDIsXG5cdFx0XHRzdGlmZm5lc3M6IDEyMDAsXG5cdFx0fSxcblx0fSxcbn07XG5cbmNvbnN0IFRSQU5TRk9STV9VUCA9IHtcblx0aW5pdGlhbDoge1xuXHRcdHk6ICcxMDAlJyxcblx0fSxcblx0YW5pbWF0ZToge1xuXHRcdHk6ICcwJScsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0MSxcblx0XHRcdHN0aWZmbmVzczogNjAwLFxuXHRcdH0sXG5cdH0sXG5cdGV4aXQ6IHtcblx0XHR5OiAnMTAwJScsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0MSxcblx0XHRcdHN0aWZmbmVzczogMTIwMCxcblx0XHR9LFxuXHR9LFxufTtcblxuY29uc3QgU0NBTEVfRkFERSA9IHtcblx0aW5pdGlhbDoge1xuXHRcdHNjYWxlOiAwLFxuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdGFuaW1hdGU6IHtcblx0XHRzY2FsZTogMSxcblx0XHRvcGFjaXR5OiAxLFxuXHR9LFxuXHRleGl0OiB7XG5cdFx0c2NhbGU6IDAsXG5cdFx0b3BhY2l0eTogMCxcblx0fSxcblx0dHJhbnNpdGlvbjoge1xuXHRcdGVhc2U6IEVBU0UsXG5cdFx0ZHVyYXRpb246IDAuMixcblx0fSxcbn07XG5cbmNvbnN0IFNUQUdHRVJfVVAgPSAoaW5kZXggPSAwKSA9PiAoe1xuXHRpbml0aWFsOiB7IG9wYWNpdHk6IDAsIHk6IDM1IH0sXG5cdGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgeTogMCwgdHJhbnNpdGlvbjogeyB0eXBlOiAnc3ByaW5nJywgZGFtcGluZzogMzAsIHN0aWZmbmVzczogNDUwLCBkZWxheTogaW5kZXggKiAwLjAzNSB9IH0sXG5cdGV4aXQ6IHsgb3BhY2l0eTogMCwgc2NhbGU6IDAuMjUsIHRyYW5zaXRpb246IHsgdHlwZTogJ3NwcmluZycsIGRhbXBpbmc6IDMwLCBzdGlmZm5lc3M6IDYwMCB9IH0sXG59KTtcblxuY29uc3QgU1RBR0dFUl9MRUZUID0gKGluZGV4ID0gMCkgPT4gKHtcblx0aW5pdGlhbDogeyBvcGFjaXR5OiAwLCB4OiAxMCB9LFxuXHRhbmltYXRlOiB7IG9wYWNpdHk6IDEsIHg6IDAsIHRyYW5zaXRpb246IHsgdHlwZTogJ3NwcmluZycsIGRhbXBpbmc6IDMwLCBzdGlmZm5lc3M6IDMwMCwgZGVsYXk6IGluZGV4ICogMC4wMzUgfSB9LFxuXHRleGl0OiB7IG9wYWNpdHk6IDAsIHg6IDEwLCB0cmFuc2l0aW9uOiB7IHR5cGU6ICdzcHJpbmcnLCBkYW1waW5nOiAzMCwgc3RpZmZuZXNzOiA2MDAgfSB9LFxufSk7XG5cbmV4cG9ydCB7IEZBREVfSU4sIEZBREVfSU5fVVAsIFRSQU5TRk9STV9VUCwgU0NBTEVfRkFERSwgU1RBR0dFUl9VUCwgU1RBR0dFUl9MRUZUIH07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBBZGQgY29tbWVudCB8IGV4cGVjdHMgcGhhc2UgaWQsIHVzZXIgaWQgYW5kIGZvcm1SZWYgb2JlY3QgKi9cbmV4cG9ydCBjb25zdCBhZGRDb21tZW50ID0gYXN5bmMgKHsgcGhhc2VJZCwgdXNlcklkLCBjb21tZW50LCBtZW50aW9uZWQsIHBvc2l0aW9uIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5cblx0cGFyYW1zLmFwcGVuZCgndXNlcklkJywgdXNlcklkKTtcblx0cGFyYW1zLmFwcGVuZCgnY29tbWVudCcsIGNvbW1lbnQpO1xuXHRwYXJhbXMuYXBwZW5kKCdtZW50aW9uZWRbXScsIG1lbnRpb25lZCk7XG5cdHBhcmFtcy5hcHBlbmQoJ3Bvc2l0aW9uWCcsIHBvc2l0aW9uLnhQZXJjZW50KTtcblx0cGFyYW1zLmFwcGVuZCgncG9zaXRpb25ZJywgcG9zaXRpb24ueVBlcmNlbnQpO1xuXHRwYXJhbXMuYXBwZW5kKCdyZWZlcmVyJywgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoJy8nLCAnJykpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvY29tbWVudHMvYWRkLyR7cGhhc2VJZH1gLCBwYXJhbXMpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vc2VjdXJpdHknO1xuZXhwb3J0ICogZnJvbSAnLi9wcm9qZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vcHJvamVjdEltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5leHBvcnQgKiBmcm9tICcuL2NvbW1lbnQnO1xuXG5leHBvcnQgY29uc3QgUVVFUllfS0VZUyA9IHtcblx0Q1VSUkVOVF9VU0VSOiAnY3VycmVudF91c2VyJyxcblx0UFJPSkVDVF9CWV9VU0VSOiAncHJvamVjdF9ieV91c2VyJyxcblx0UFJPSkVDVF9CWV9JRDogJ3Byb2plY3RfYnlfaWQnLFxuXHRQUk9KRUNUX0lNQUdFX0JZX0lEOiAncHJvamVjdF9pbWFnZV9ieV9pZCcsXG5cdEdMT0JBTF9VU0VSUzogJ2dsb2JhbF91c2VycycsXG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLyogRmV0Y2ggcHJvamVjdHMgYnkgdXNlciB8IGV4cGVjdHMgdXNlciBpZCAqL1xuZXhwb3J0IGNvbnN0IGZldGNoUHJvamVjdHNCeVVzZXIgPSBhc3luYyAoeyB1c2VySWQgfSkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcHJvamVjdHMvZ2V0LyR7dXNlcklkfWApO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRmV0Y2ggcHJvamVjdHMgYnkgaWQgfCBleHBlY3RzIHByb2plY3QgaWQgKi9cbmV4cG9ydCBjb25zdCBmZXRjaFByb2plY3RCeUlkID0gYXN5bmMgKHsgcHJvamVjdElkIH0pID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2plY3QvZ2V0LyR7cHJvamVjdElkfWApO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogQWRkIHByb2plY3QgKi9cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0ID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3Byb2plY3RzL2FkZCcpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRGVsZXRlIHByb2plY3QocykgfCBleHBlY3RzIGFycmF5IG9mIHByb2plY3RJZHMgICovXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvamVjdHMgPSBhc3luYyAoeyBwcm9qZWN0SWRzIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5cdHByb2plY3RJZHMuZm9yRWFjaCgoaWQpID0+IHBhcmFtcy5hcHBlbmQoJ3Byb2plY3RzW10nLCBpZCkpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvcHJvamVjdHMvZGVsZXRlYCwgcGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogTGVhdmUgcHJvamVjdChzKSB8IGV4cGVjdHMgYXJyYXkgb2YgcHJvamVjdElkcyBhbmQgdXNlciBpZCAgKi9cbmV4cG9ydCBjb25zdCBsZWF2ZVByb2plY3RzID0gYXN5bmMgKHsgcHJvamVjdElkcywgdXNlcklkIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5cdHByb2plY3RJZHMuZm9yRWFjaCgoaWQpID0+IHBhcmFtcy5hcHBlbmQoJ3Byb2plY3RzW10nLCBpZCkpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvcHJvamVjdHMvbGVhdmUvJHt1c2VySWR9YCwgcGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRWRpdCBwcm9qZWN0IHwgZXhwZWN0cyBmb3JtRGF0YSBvYmplY3QgYW5kIHByb2plY3QgaWQgICovXG5leHBvcnQgY29uc3QgZWRpdFByb2plY3QgPSBhc3luYyAoeyBmb3JtUmVmLCBpZCB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvcHJvamVjdHMvZWRpdC8ke2lkfWAsIHBhcmFtcyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLyogRmV0Y2ggcHJvamVjdEltYWdlIGJ5IGlkIHwgZXhwZWN0cyBwcm9qZWN0IGltYWdlIGlkICovXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9qZWN0SW1hZ2VCeUlkID0gYXN5bmMgKHsgcHJvamVjdEltYWdlSWQgfSkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvaW1hZ2VzL2dldC8ke3Byb2plY3RJbWFnZUlkfWApO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogQWRkIHByb2plY3RJbWFnZShzKSB8IGV4cGVjdHMgcHJvamVjdCBpZCBhbmQgYXJyYXkgb2YgaW1hZ2VzIChibG9iKSAqL1xuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RJbWFnZXMgPSBhc3luYyAoeyBwcm9qZWN0SWQsIGltYWdlcyB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuXHRpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGltYWdlSW5kZXgpID0+IHtcblx0XHRwYXJhbXMuYXBwZW5kKGBpbWFnZXNbJHtpbWFnZUluZGV4fV1bb3JpZ2luYWxdYCwgaW1hZ2Uub3JpZ2luYWwpO1xuXHRcdHBhcmFtcy5hcHBlbmQoYGltYWdlc1ske2ltYWdlSW5kZXh9XVt0aHVtYm5haWxdYCwgaW1hZ2UudGh1bWJuYWlsKTtcblx0XHRwYXJhbXMuYXBwZW5kKGBpbWFnZXNbJHtpbWFnZUluZGV4fV1bdGh1bWJuYWlsUmV0aW5hXWAsIGltYWdlLnRodW1ibmFpbFJldGluYSk7XG5cdH0pO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvaW1hZ2VzL2FkZC8ke3Byb2plY3RJZH1gLCBwYXJhbXMpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRGVsZXRlIHByb2plY3RJbWFnZShzKSB8IGV4cGVjdHMgcHJvamVjdCBpZCBhbmQgYXJyYXkgb2YgcHJvamVjdEltYWdlSWRzICAqL1xuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3RJbWFnZXMgPSBhc3luYyAoeyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZUlkcyB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuXHRwcm9qZWN0SW1hZ2VJZHMuZm9yRWFjaCgoaWQpID0+IHBhcmFtcy5hcHBlbmQoJ3Byb2plY3RJbWFnZXNbXScsIGlkKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9pbWFnZXMvZGVsZXRlLyR7cHJvamVjdElkfWAsIHBhcmFtcyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBFZGl0IHByb2plY3RJbWFnZSB8IGV4cGVjdHMgZm9ybVJlZiBvYmplY3QgYW5kIHByb2plY3RJbWFnZSBpZCAgKi9cbmV4cG9ydCBjb25zdCBlZGl0UHJvamVjdEltYWdlID0gYXN5bmMgKHsgZm9ybVJlZiwgaWQgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybVJlZi5jdXJyZW50KTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2ltYWdlcy9lZGl0LyR7aWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBTaWdudXAgdG8gcGxhdGZvcm0gfCBleHBlY3RzIGZvcm1SZWYgb2JqZWN0ICovXG5leHBvcnQgY29uc3Qgc2lnbnVwID0gYXN5bmMgKHsgZm9ybVJlZiB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3NpZ251cCcsIHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIExvZ2luIHRvIHBsYXRmb3JtIHwgZXhwZWN0cyBmb3JtUmVmIG9iamVjdCAqL1xuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgZm9ybVJlZiB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCB7XG5cdFx0ZW1haWw6IHBhcmFtcy5nZXQoJ2VtYWlsJyksXG5cdFx0cGFzc3dvcmQ6IHBhcmFtcy5nZXQoJ3Bhc3N3b3JkJyksXG5cdH0pO1xuXG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBMb2dvdXQgZnJvbSBwbGF0Zm9ybSAqL1xuZXhwb3J0IGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2xvZ291dCcpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8qIEZldGNoIGN1cnJlbnQgKGxvZ2dlZCBpbikgdXNlciB8IGV4cGVjdHMgdXNlciBpZCAqL1xuZXhwb3J0IGNvbnN0IGZldGNoQ3VycmVudFVzZXIgPSBhc3luYyAoeyB1c2VySWQgfSkgPT4ge1xuXHRsZXQgdXJsID0gJy9hcGkvdXNlcnMvZ2V0Jztcblx0aWYgKHVzZXJJZCkgdXJsID0gYCR7dXJsfS8ke3VzZXJJZH1gO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRmV0Y2ggYWxsIHVzZXJzIGluIGRiICovXG5leHBvcnQgY29uc3QgZmV0Y2hHb2JhbFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdXNlcnMvZ2V0L2FsbCcpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogQWRkIHVzZXIgdG8gcHJvamVjdCB8IGV4cGVjdHMgcHJvamVjdCBpZCBhbmQgdXNlciBlbWFpbCAqL1xuZXhwb3J0IGNvbnN0IGFkZFVzZXIgPSBhc3luYyAoeyBwcm9qZWN0SWQsIGVtYWlsIH0pID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS91c2Vycy9hZGQvJHtwcm9qZWN0SWR9YCwge1xuXHRcdGVtYWlsOiBlbWFpbCxcblx0XHRyZWZlcmVyOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgnLycsICcnKSxcblx0fSk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBEZWxldGUgdXNlciBmcm9tIHByb2plY3QgfCBleHBlY3RzIHByb2plY3QgaWQgYW5kIHVzZXIgaWQgKi9cbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKHsgcHJvamVjdElkLCB1c2VySWQgfSkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3VzZXJzL2RlbGV0ZS8ke3Byb2plY3RJZH1gLCB7IHVzZXJJZCB9KTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgVFJBTlNGT1JNX1VQIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWN0aW9uTWVudSh7IHNlbGVjdGVkLCByZXNldFNlbGVjdGVkLCBhY3Rpb25zIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmRpdiB7Li4uVFJBTlNGT1JNX1VQfSBjbGFzc05hbWU9XCJiYXIgYmFyLS1wcm9qZWN0XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmFyX19idG4gYnRuIGJ0bi1saW5rIGQtaW5saW5lLWZsZXggdGV4dC13aGl0ZVwiXG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e3Jlc2V0U2VsZWN0ZWR9PlxuXHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTRcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWwtMiBtYi0wXCI+e3NlbGVjdGVkLmxlbmd0aH0gc2VsZWN0ZWQ8L3A+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwiYmFyX19saXN0IGxpc3QgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0XHR7YWN0aW9ucy5tYXAoXG5cdFx0XHRcdFx0XHRcdFx0KFxuXHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhlbWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhhc1Blcm1pc3Npb24sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb24sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGljb25TaXplID0gMTIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG11dGF0aW9uID0gKCkgPT4ge30sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlzTG9hZGluZyA9IGZhbHNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdGFjdGlvbkluZGV4XG5cdFx0XHRcdFx0XHRcdFx0KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoaGFzUGVybWlzc2lvbi5pbmNsdWRlcyh1c2VyUm9sZSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXthY3Rpb25JbmRleH0gY2xhc3NOYW1lPVwibGlzdF9faXRlbVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJiYXJfX2J0biBidG4gYnRuLWxpbmsgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LWRlY29yYXRpb24tbm9uZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9e211dGF0aW9ufT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGljb24td3JhcHBlciBpY29uLXdyYXBwZXItLSR7dGhlbWV9IGljb24td3JhcHBlci0taW50ZXJhY3RpdmVgfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TG9hZGluZ1dyYXBwZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvYWRpbmc9e2lzTG9hZGluZ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvYWRlclNpemU9ezEyfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3Nlcz17e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkZXJDbGFzc2VzOiBgcG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4IHRleHQtJHt0aGVtZX1gLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d3JhcHBlcj1cInN2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGljb24gaWNvbi0tJHtpY29uU2l6ZX0gdGV4dC0ke3RoZW1lfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17aWNvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Mb2FkaW5nV3JhcHBlcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImJ0bl9fdGV4dCB0ZXh0LXdoaXRlIG1sLTJcIj57dGl0bGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbW90aW9uLmRpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Utd2hpdGUuc3ZnJztcbmltcG9ydCB3YXJuaW5nSWNvbiBmcm9tICdpY29ucy93YXJuaW5nLnN2Zyc7XG5pbXBvcnQgZXJyb3JJY29uIGZyb20gJ2ljb25zL2Rhbmdlci5zdmcnO1xuaW1wb3J0IHN1Y2Nlc3NJY29uIGZyb20gJ2ljb25zL3N1Y2Nlc3Muc3ZnJztcblxuLyogR2xvYmFsICovXG5jb25zdCBhcHBlYXJhbmNlVHlwZXMgPSB7XG5cdHdhcm5pbmc6IHtcblx0XHR0aXRsZTogJ1dhcm5pbmcnLFxuXHRcdGljb246IHdhcm5pbmdJY29uLFxuXHR9LFxuXHRkYW5nZXI6IHtcblx0XHR0aXRsZTogJ0Vycm9yJyxcblx0XHRpY29uOiBlcnJvckljb24sXG5cdH0sXG5cdHN1Y2Nlc3M6IHtcblx0XHR0aXRsZTogJ1N1Y2Nlc3MnLFxuXHRcdGljb246IHN1Y2Nlc3NJY29uLFxuXHR9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxlcnQoeyBtZXNzYWdlLCBhcHBlYXJhbmNlLCBjbG9zZVRvYXN0IH0pIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJhbGVydCBhbGVydC0tbm90aWZpY2F0aW9uXCIgcm9sZT1cImFsZXJ0XCIgZGF0YS1hbGVydD5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGFsZXJ0X19pY29uLXdyYXBwZXIgYWxlcnRfX2ljb24td3JhcHBlci0tJHthcHBlYXJhbmNlfSBtci0yYH0+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHXG5cdFx0XHRcdFx0XHR3cmFwcGVyPVwic3ZnXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImFsZXJ0X19pY29uIGljb24gaWNvbi0tMTJcIlxuXHRcdFx0XHRcdFx0c3JjPXthcHBlYXJhbmNlVHlwZXNbYXBwZWFyYW5jZV0uaWNvbn1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItMFwiPnthcHBlYXJhbmNlVHlwZXNbYXBwZWFyYW5jZV0udGl0bGV9PC9wPlxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImFsZXJ0X19idG4gYnRuIGJ0bi1saW5rIG1sLWF1dG9cIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Y2xvc2VUb2FzdH0+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEwXCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJhbGVydF9fbWVzc2FnZSB0ZXh0LS14cyB0ZXh0LW11dGVkLS03MCBtci1sZy04XCI+e21lc3NhZ2V9PC9zcGFuPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGJnIGZyb20gJ2ltYWdlcy9iYWNrZ3JvdW5kLWxvZ2luLmpwZyc7XG5pbXBvcnQgYmdSZXRpbmEgZnJvbSAnaW1hZ2VzL2JhY2tncm91bmQtbG9naW5AMnguanBnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFja2dyb3VuZCgpIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kXCI+XG5cdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImJhY2tncm91bmRfX2ltYWdlXCIgc3JjPXtiZ30gc3JjU2V0PXtiZ1JldGluYX0gYWx0PVwiQmFja2dyb3VuZFwiIC8+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4sIEZBREVfSU5fVVAgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gJ2ljb25zL2Nsb3NlLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJveCh7XG5cdHRpdGxlLFxuXHRzdWJ0aXRsZSxcblx0U3VidGl0bGVDb21wb25lbnQsXG5cdGJveE9wZW4sXG5cdHRvZ2dsZUJveCxcblx0Y2hpbGRyZW4sXG5cdHVzZXIsXG5cdHBvc2l0aW9uID0ge30sXG5cdHJlbmRlck9uQm9keSA9IHRydWUsXG5cdGJveFJlZixcblx0ZXh0ZW5zaW9uQ2xhc3Nlcyxcblx0YW5pbWF0ZSA9IHRydWUsXG59KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IGxlZnQgPSAwLCB0b3AgPSAwIH0gPSBwb3NpdGlvbjtcblx0Y29uc3QgYW5pbWF0aW9uID0gYW5pbWF0ZSA/IHsgLi4uRkFERV9JTl9VUCB9IDoge307XG5cblx0LyogVE9ETzogZXNjYXBlIGV2ZW50IGxpc3RlbmVyICovXG5cdGNvbnN0IHJlbmRlciA9ICgpID0+IChcblx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0e2JveE9wZW4gJiYgKFxuXHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdGxheW91dFxuXHRcdFx0XHRcdHJlZj17Ym94UmVmfVxuXHRcdFx0XHRcdHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMiB9fVxuXHRcdFx0XHRcdGNsYXNzTmFtZT17YGJveCAke3JlbmRlck9uQm9keSAmJiAnYm94LS1jZW50ZXInfSAke2V4dGVuc2lvbkNsYXNzZXN9YH1cblx0XHRcdFx0XHRzdHlsZT17eyAnLS1sZWZ0JzogbGVmdCwgJy0tdG9wJzogdG9wIH19PlxuXHRcdFx0XHRcdHtyZW5kZXJPbkJvZHkgJiYgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYm94LW92ZXJsYXlcIiB7Li4uRkFERV9JTn0gb25DbGljaz17dG9nZ2xlQm94fSAvPn1cblx0XHRcdFx0XHQ8bW90aW9uLmRpdiBrZXk9XCJib3gtY29udGVudFwiIGNsYXNzTmFtZT1cImJveF9fY29udGVudCBib3JkZXIgcC01XCIgey4uLmFuaW1hdGlvbn0+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveF9faGVhZGVyIGQtZmxleCBhbGlnbi1pdGVtcy1zdGFydFwiPlxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDBcIj5cblx0XHRcdFx0XHRcdFx0XHR7dXNlciAmJiA8VXNlciB7Li4ueyB1c2VyIH19IHNpemU9XCJ4bFwiIC8+fVxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgZC1mbGV4IGZsZXgtY29sdW1uIHctMTAwICR7dXNlciAmJiAnbWwtMid9YH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0tbGcgbWItMFwiPnt0aXRsZX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Nsb3NlIGJ0biBidG4tbGluayBtbC1hdXRvXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVCb3h9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xMlwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0eyhTdWJ0aXRsZUNvbXBvbmVudCB8fCBzdWJ0aXRsZSkgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS02MCBtYi0wIHRleHQtLXNtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0e1N1YnRpdGxlQ29tcG9uZW50ID8gPFN1YnRpdGxlQ29tcG9uZW50IC8+IDogc3VidGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveF9fYm9keSBkLWZsZXggbXQtNFwiPntjaGlsZHJlbn08L2Rpdj5cblx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdCl9XG5cdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG5cblx0LyogUmVuZGVyICovXG5cdGlmIChyZW5kZXJPbkJvZHkpIHtcblx0XHRyZXR1cm4gY3JlYXRlUG9ydGFsKHJlbmRlcigpLCBkb2N1bWVudC5ib2R5KTtcblx0fVxuXG5cdHJldHVybiByZW5kZXIoKTtcbn1cbiIsIi8qIHthY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBMb2FkaW5nV3JhcHBlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b24oe1xuXHR0aXRsZSxcblx0dHlwZSA9ICdidXR0b24nLFxuXHR0aGVtZSA9ICdzZWNvbmRhcnknLFxuXHRzaXplID0gJ3NtJyxcblx0ZXh0ZW5zaW9uQ2xhc3NlcyA9ICcnLFxuXHRvbkNsaWNrID0gKCkgPT4ge30sXG5cdGlzTG9hZGluZyA9IGZhbHNlLFxufSkge1xuXHQvKiBSZWZzICovXG5cdGNvbnN0IGJ1dHRvblJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCBidXR0b25IZWlnaHQgPSBidXR0b25SZWYuY3VycmVudD8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxidXR0b25cblx0XHRcdHJlZj17YnV0dG9uUmVmfVxuXHRcdFx0Y2xhc3NOYW1lPXtgYnRuIGJ0bi0ke3NpemV9IGJ0bi0ke3RoZW1lfSAke2V4dGVuc2lvbkNsYXNzZXN9IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJgfVxuXHRcdFx0c3R5bGU9e3sgaGVpZ2h0OiBidXR0b25IZWlnaHQgfX1cblx0XHRcdHsuLi57IHR5cGUsIG9uQ2xpY2sgfX0+XG5cdFx0XHQ8TG9hZGluZ1dyYXBwZXJcblx0XHRcdFx0bG9hZGluZz17aXNMb2FkaW5nfVxuXHRcdFx0XHRsb2FkZXJTaXplPXsxNn1cblx0XHRcdFx0Y2xhc3Nlcz17eyBsb2FkZXJDbGFzc2VzOiAncG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4IHRleHQtc2Vjb25kYXJ5JyB9fT5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYnRuX190ZXh0XCI+e3RpdGxlfTwvc3Bhbj5cblx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0PC9idXR0b24+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSAncmVhY3QtZHJvcHpvbmUnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogU2VydmljZXMgKi9cbmltcG9ydCB7IHJlc2l6ZUltYWdlcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU0NBTEVfRkFERSwgRkFERV9JTiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRJbWFnZUljb24gZnJvbSAnaWNvbnMvYWRkX2ltYWdlLnN2Zyc7XG5pbXBvcnQgdXBsb2FkSW1hZ2VJY29uIGZyb20gJ2ljb25zL3VwbG9hZC5zdmcnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGFkZFByb2plY3RJbWFnZXMsIGRlbGV0ZVByb2plY3RJbWFnZXMsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wem9uZSh7IHByb2plY3RJZCwgcG9zaXRpdGlvbiA9ICdsZWZ0JywgY2hpbGRyZW4gfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0Y29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSB9ID0gdXNlRHJvcHpvbmUoe1xuXHRcdGFjY2VwdDogJ2ltYWdlLyonLFxuXHRcdG5vQ2xpY2s6IHRydWUsXG5cdFx0b25Ecm9wOiAoYWNjZXB0ZWRGaWxlcykgPT4gdXBkYXRlUHJvamVjdEltYWdlcygnYWRkJywgeyBpbWFnZXM6IGFjY2VwdGVkRmlsZXMgfSksXG5cdH0pO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBhZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24gPSB1c2VNdXRhdGlvbihhZGRQcm9qZWN0SW1hZ2VzLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKSxcblx0fSk7XG5cblx0Y29uc3QgZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlUHJvamVjdEltYWdlcywge1xuXHRcdG9uU3VjY2VzczogKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSksXG5cdH0pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB1cGRhdGVQcm9qZWN0SW1hZ2VzID0gYXN5bmMgKGFjdGlvbiwgcHJvcHMpID0+IHtcblx0XHRpZiAoYWN0aW9uID09PSAnYWRkJyAmJiBwcm9wcy5pbWFnZXMpIHtcblx0XHRcdGNvbnN0IHJlc2l6ZWRJbWFnZXMgPSBhd2FpdCByZXNpemVJbWFnZXMocHJvcHMuaW1hZ2VzKTtcblxuXHRcdFx0YWRkUHJvamVjdEltYWdlc011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgaW1hZ2VzOiByZXNpemVkSW1hZ2VzIH0pO1xuXHRcdH1cblxuXHRcdGlmIChhY3Rpb24gPT09ICdkZWxldGUnKSBkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkLCAuLi5wcm9wcyB9KTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3B6b25lXCIgey4uLmdldFJvb3RQcm9wcygpfT5cblx0XHRcdDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxuXHRcdFx0PERyb3B6b25lSW5uZXJcblx0XHRcdFx0YWRkSW1hZ2VMb2FkaW5nPXthZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24uaXNMb2FkaW5nfVxuXHRcdFx0XHR7Li4ueyB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc1BhcmVudERyYWdBY3RpdmU6IGlzRHJhZ0FjdGl2ZSwgcG9zaXRpdGlvbiB9fVxuXHRcdFx0Lz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0tZXF1YWxpemVkIGd1dHRlcnMtNVwiPlxuXHRcdFx0XHR7Y2hpbGRyZW4oeyB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc0xvYWRpbmc6IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbi5pc0xvYWRpbmcgfSl9XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuLyogSW5uZXIgZHJvcHpvbmUgKi9cbmNvbnN0IERyb3B6b25lSW5uZXIgPSAoeyBhZGRJbWFnZUxvYWRpbmcsIHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzUGFyZW50RHJhZ0FjdGl2ZSwgcG9zaXRpdGlvbiB9KSA9PiB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzLCBpc0RyYWdBY3RpdmUgfSA9IHVzZURyb3B6b25lKHtcblx0XHRhY2NlcHQ6ICdpbWFnZS8qJyxcblx0XHRub0RyYWdFdmVudHNCdWJibGluZzogdHJ1ZSxcblx0XHRvbkRyb3A6IChhY2NlcHRlZEZpbGVzKSA9PiB1cGRhdGVQcm9qZWN0SW1hZ2VzKCdhZGQnLCB7IGltYWdlczogYWNjZXB0ZWRGaWxlcyB9KSxcblx0fSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZVwiIHsuLi5nZXRSb290UHJvcHMoKX0+XG5cdFx0XHQ8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHsoaXNEcmFnQWN0aXZlIHx8IGlzUGFyZW50RHJhZ0FjdGl2ZSkgJiYgKFxuXHRcdFx0XHRcdDxtb3Rpb24uZGl2IHsuLi5GQURFX0lOfSBjbGFzc05hbWU9XCJkcm9wem9uZV9fb3ZlcmxheVwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnlcIiBzdHlsZT17eyAnLS1zaXplJzogNzUgfX0+XG5cdFx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0zMCB0ZXh0LXNlY29uZGFyeVwiIHNyYz17dXBsb2FkSW1hZ2VJY29ufSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0XHQ8bW90aW9uLmJ1dHRvblxuXHRcdFx0XHR7Li4uU0NBTEVfRkFERX1cblx0XHRcdFx0a2V5PVwiYWRkLXByb2plY3RcIlxuXHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0Y2xhc3NOYW1lPXtgaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0taW50ZXJhY3RpdmUgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnkgYnRuIGJ0bi1saW5rIGJ0bi0tYWRkIGJ0bi0tYWRkLSR7cG9zaXRpdGlvbn1gfVxuXHRcdFx0XHRzdHlsZT17eyAnLS1zaXplJzogNzUgfX0+XG5cdFx0XHRcdDxMb2FkaW5nV3JhcHBlclxuXHRcdFx0XHRcdGxvYWRpbmc9e2FkZEltYWdlTG9hZGluZ31cblx0XHRcdFx0XHRjbGFzc2VzPXt7IGxvYWRlckNsYXNzZXM6ICdwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXggdGV4dC1zZWNvbmRhcnknIH19XG5cdFx0XHRcdFx0bG9hZGVyU2l6ZT17MzB9PlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0zMCB0ZXh0LXNlY29uZGFyeVwiIHNyYz17YWRkSW1hZ2VJY29ufSAvPlxuXHRcdFx0XHQ8L0xvYWRpbmdXcmFwcGVyPlxuXHRcdFx0PC9tb3Rpb24uYnV0dG9uPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCBFZGl0YWJsZUJvZHkgZnJvbSAnLi9FZGl0YWJsZUJvZHknO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBlZGl0SWNvbiBmcm9tICdpY29ucy9lZGl0LnN2Zyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0YWJsZSh7IGlucHV0VHlwZSwgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbYm94T3Blbiwgc2V0Qm94T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgdGl0bGUgPSBgRWRpdGluZyAke2lucHV0VHlwZX1gO1xuXHRjb25zdCBzdWJ0aXRsZSA9IGBTYXZlIHdoZW4gcmVhZHlgO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB0b2dnbGVCb3ggPSAoKSA9PiBzZXRCb3hPcGVuKCFib3hPcGVuKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVkaXRhYmxlIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcG9zaXRpb24tcmVsYXRpdmVcIj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZWRpdGFibGVfX2NvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+XG5cdFx0XHR7dXNlclJvbGUgPT09ICdhZG1pbicgJiYgKFxuXHRcdFx0XHQ8PlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImVkaXRhYmxlX190b2dnbGUgYnRuIGJ0bi1saW5rIGljb24td3JhcHBlciBpY29uLXdyYXBwZXItLXNlY29uZGFyeSBpY29uLXdyYXBwZXItLWludGVyYWN0aXZlIHN0cmV0Y2hlZC1saW5rIG1sLTNcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17dG9nZ2xlQm94fVxuXHRcdFx0XHRcdFx0c3R5bGU9e3sgJy0tc2l6ZSc6IDI1IH19PlxuXHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEwIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXtlZGl0SWNvbn0gLz5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8Qm94IHsuLi57IHRpdGxlLCBzdWJ0aXRsZSwgYm94T3BlbiwgdG9nZ2xlQm94IH19PlxuXHRcdFx0XHRcdFx0PEVkaXRhYmxlQm9keSB7Li4ueyB0aXRsZSwgaW5wdXRUeXBlLCB0b2dnbGVCb3gsIC4uLnJlc3QgfX0gLz5cblx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0PC8+XG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBUZXh0YXJlYUF1dG9zaXplIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBFbGVtZW50cyAqL1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRhYmxlQm9keSh7XG5cdHRpdGxlLFxuXHRpbnB1dFR5cGUsXG5cdHRvZ2dsZUJveCxcblx0Y29udGVudCxcblx0bXV0YXRpb24sXG5cdG11dGF0aW9uSWQsXG5cdG11dGF0aW9uT25TdWNjZXNzLFxufSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGNvbnRlbnQpO1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgZm9ybVJlZiA9IHVzZVJlZigpO1xuXHRjb25zdCBpbnB1dFJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIEVmZmVjdHMgKi9cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAoaW5wdXRSZWY/LmN1cnJlbnQpIGlucHV0UmVmPy5jdXJyZW50Py5zZWxlY3QoKTtcblx0fSwgW10pO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBlZGl0TXV0YXRpb24gPSB1c2VNdXRhdGlvbihtdXRhdGlvbiwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0bXV0YXRpb25PblN1Y2Nlc3MoKTtcblx0XHRcdHRvZ2dsZUJveCgpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxmb3JtXG5cdFx0XHRyZWY9e2Zvcm1SZWZ9XG5cdFx0XHRjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtZ3Jvdy0xXCJcblx0XHRcdG9uU3VibWl0PXsoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZWRpdE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYsIGlkOiBtdXRhdGlvbklkIH0pO1xuXHRcdFx0fX0+XG5cdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9e2lucHV0VHlwZX0+XG5cdFx0XHRcdHt0aXRsZX1cblx0XHRcdDwvbGFiZWw+XG5cdFx0XHQ8VGV4dGFyZWFBdXRvc2l6ZVxuXHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIGZvcm0tY29udHJvbC0tdGV4dFwiXG5cdFx0XHRcdGlkPXtpbnB1dFR5cGV9XG5cdFx0XHRcdG5hbWU9e2lucHV0VHlwZX1cblx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHR2YWx1ZT17dmFsdWV9XG5cdFx0XHRcdG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBzZXRWYWx1ZSh2YWx1ZSl9XG5cdFx0XHRcdHJlZj17aW5wdXRSZWZ9XG5cdFx0XHQvPlxuXHRcdFx0PEJ1dHRvblxuXHRcdFx0XHR0aXRsZT1cIlNhdmVcIlxuXHRcdFx0XHRleHRlbnNpb25DbGFzc2VzPVwibXQtNCB3LTUwIGp1c3RpZnktY29udGVudC1jZW50ZXJcIlxuXHRcdFx0XHRpc0xvYWRpbmc9e2VkaXRNdXRhdGlvbi5pc0xvYWRpbmd9XG5cdFx0XHRcdHR5cGU9XCJzdWJtaXRcIlxuXHRcdFx0Lz5cblx0XHQ8L2Zvcm0+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIFJvdXRlcyAqL1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmhlYWRlciBjbGFzc05hbWU9XCJtYWluLWhlYWRlclwiIHsuLi5GQURFX0lOfT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHB4LTUgcHQtNSBweC1sZy02IHB0LWxnLTYgcHgteGwtMTIgcHQteGwtMTJcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWhlYWRlcl9fbG9nbyBsb2dvXCI+XG5cdFx0XHRcdFx0PExpbmsgY2xhc3NOYW1lPVwibG9nb19fbGluayB0ZXh0LXJlc2V0XCIgdG89e1JPVVRFUy5sb2dpbn0gdGl0bGU9XCJQYXJhbGxlbCBEYXNoYm9hcmRcIj5cblx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJsb2dvX190aXRsZSB0ZXh0LXVwcGVyY2FzZSBtYi0wXCI+UGFyYWxsZWw8L2gyPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibG9nb19fc3VidGl0bGUgdGV4dC11cHBlcmNhc2UgZm9udC13ZWlnaHQtbGlnaHQgbXQtbjFcIj5EYXNoYm9hcmQ8L3A+XG5cdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvbW90aW9uLmhlYWRlcj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU11dGF0aW9uIH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgdXNlSGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBBbGVydCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGxvZ291dCB9IGZyb20gJy4uLy4uL2FwaS9zZWN1cml0eSc7XG5cbi8qIFJvdXRlcyAqL1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi4vLi4vcm91dGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyTmF2aWdhdGlvbigpIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcblx0Y29uc3QgeyBzZXRDdXJyZW50VXNlciB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgbG9nb3V0TXV0YXRpb24gPSB1c2VNdXRhdGlvbihsb2dvdXQsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdGhpc3RvcnkucHVzaChST1VURVMubG9naW4pO1xuXHRcdFx0c2V0Q3VycmVudFVzZXIobnVsbCk7XG5cdFx0XHR0b2FzdCg8QWxlcnQgbWVzc2FnZT17J1N1Y2Nlc3NmdWxseSBsb2dnZWQgb3V0ISd9IGFwcGVhcmFuY2U9XCJzdWNjZXNzXCIgLz4pO1xuXHRcdH0sXG5cdFx0b25FcnJvcjogKCkgPT4gdG9hc3QoPEFsZXJ0IG1lc3NhZ2U9eydTb21ldGhpbmcgd2VudCB3cm9uZyEnfSBhcHBlYXJhbmNlPVwiZGFuZ2VyXCIgLz4pLFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8bW90aW9uLmhlYWRlciBjbGFzc05hbWU9XCJtYWluLWhlYWRlciBtYWluLWhlYWRlci0tcHJvamVjdHNcIiB7Li4uRkFERV9JTn0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4taGVhZGVyX193cmFwcGVyIGQtZmxleCBhbGlnbi1pdGVtcy1lbmRcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4taGVhZGVyX19sb2dvIGxvZ29cIj5cblx0XHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT1cImxvZ29fX2xpbmsgdGV4dC1yZXNldFwiIHRvPXtST1VURVMucHJvamVjdHN9IHRpdGxlPVwiUGFyYWxsZWwgRGFzaGJvYXJkXCI+XG5cdFx0XHRcdFx0XHRcdDxoMiBjbGFzc05hbWU9XCJsb2dvX190aXRsZSB0ZXh0LXVwcGVyY2FzZSB0ZXh0LXdoaXRlIG1iLTBcIj5QYXJhbGxlbDwvaDI+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvZ29fX3N1YnRpdGxlIHRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGUgZm9udC13ZWlnaHQtbGlnaHQgbXQtbjFcIj5cblx0XHRcdFx0XHRcdFx0XHREYXNoYm9hcmRcblx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJfX25hdiBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0XHQ8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi0tcHJpbWFyeVwiPlxuXHRcdFx0XHRcdFx0XHQ8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmPVwie3sgcGF0aCgnYXBwX2xvZ291dCcpIH19XCJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPVwiTG9nb3V0XCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cIm5hdi1saW5rIGJ0biBidG4tbGluayB0ZXh0LXJlc2V0XCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eygpID0+IGxvZ291dE11dGF0aW9uLm11dGF0ZSgpfT5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cIm5hdi10ZXh0XCI+TG9nb3V0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21vdGlvbi5oZWFkZXI+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEFjdGlvbk1lbnUgfSBmcm9tICcuL2FjdGlvbi1tZW51L0FjdGlvbk1lbnUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBBbGVydCB9IGZyb20gJy4vYWxlcnQvQWxlcnQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCYWNrZ3JvdW5kIH0gZnJvbSAnLi9iYWNrZ3JvdW5kL0JhY2tncm91bmQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb3ggfSBmcm9tICcuL2JveC9Cb3gnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tICcuL2J1dHRvbi9CdXR0b24nO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBEcm9wem9uZSB9IGZyb20gJy4vZHJvcHpvbmUvRHJvcHpvbmUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBFZGl0YWJsZSB9IGZyb20gJy4vZWRpdGFibGUvRWRpdGFibGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2FkaW5nV3JhcHBlciB9IGZyb20gJy4vbG9hZGluZy13cmFwcGVyL0xvYWRpbmdXcmFwcGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kYWwgfSBmcm9tICcuL21vZGFsL01vZGFsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUGFnZUxvYWRlciB9IGZyb20gJy4vcGFnZS1sb2FkZXIvUGFnZUxvYWRlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhZ2VXcmFwcGVyIH0gZnJvbSAnLi9wYWdlLXdyYXBwZXIvUGFnZVdyYXBwZXInO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJBZGQgfSBmcm9tICcuL3VzZXItYWRkL1VzZXJBZGQnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VyQWRkU2VhcmNoIH0gZnJvbSAnLi91c2VyLWFkZC9Vc2VyQWRkU2VhcmNoJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlckFkZFNlYXJjaFJlc3VsdHMgfSBmcm9tICcuL3VzZXItYWRkL1VzZXJBZGRTZWFyY2hSZXN1bHRzJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZWFkZXIgfSBmcm9tICcuL2hlYWRlci9IZWFkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBIZWFkZXJOYXZpZ2F0aW9uIH0gZnJvbSAnLi9oZWFkZXIvSGVhZGVyTmF2aWdhdGlvbic7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlciB9IGZyb20gJy4vdXNlcnMvVXNlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJzIH0gZnJvbSAnLi91c2Vycy9Vc2Vycyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJTZWxlY3QgfSBmcm9tICcuL3VzZXJzL1VzZXJTZWxlY3QnO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNDQUxFX0ZBREUgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZ1dyYXBwZXIoeyBsb2FkaW5nLCBjaGlsZHJlbiwgbG9hZGVyU2l6ZSA9IDQwLCBjbGFzc2VzID0ge30gfSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyBsb2FkZXJDbGFzc2VzID0gJ3Bvc2l0aW9uLWFic29sdXRlIGQtZmxleCcsIGRlZmF1bHRDbGFzc2VzID0gJycgfSA9IGNsYXNzZXM7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0+XG5cdFx0XHR7bG9hZGluZyA/IChcblx0XHRcdFx0PG1vdGlvbi5kaXYga2V5PVwibG9hZGVyXCIgY2xhc3NOYW1lPXtsb2FkZXJDbGFzc2VzfSB7Li4uU0NBTEVfRkFERX0+XG5cdFx0XHRcdFx0PENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9XCJpbmhlcml0XCIgc2l6ZT17bG9hZGVyU2l6ZX0gLz5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PG1vdGlvbi5kaXYga2V5PVwiZGVmYXVsdFwiIGNsYXNzTmFtZT17ZGVmYXVsdENsYXNzZXN9IHsuLi5TQ0FMRV9GQURFfT5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdCl9XG5cdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiwgVFJBTlNGT1JNX1VQIH0gZnJvbSBcIi4uLy4uL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwoeyB0b2dnbGVNb2RhbCwgY2hpbGRyZW4sIGRvbUVsZW1lbnQsIHZhcmlhbnQgPSBcImRlZmF1bHRcIiB9KSB7XG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT1cImN1c3RvbS1tb2RhbFwiIGNsYXNzTmFtZT17YGN1c3RvbS1tb2RhbCBjdXN0b20tbW9kYWwtLSR7dmFyaWFudH1gfT5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fb3ZlcmxheVwiIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfSB7Li4uRkFERV9JTn0gLz5cbiAgICAgICAgICAgIDxtb3Rpb24uYXJ0aWNsZSBrZXk9XCJjdXN0b20tbW9kYWxfX2NvbnRlbnRcIiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2NvbnRlbnRcIiB7Li4uVFJBTlNGT1JNX1VQfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBkLWZsZXggZmxleC1ncm93LTFcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5hcnRpY2xlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgaWYgKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChyZW5kZXIoKSwgZG9tRWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlcigpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdlTG9hZGVyKHsgaXNMb2FkaW5nLCBjaGlsZHJlbiB9KSB7XG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHR7aXNMb2FkaW5nID8gKFxuXHRcdFx0XHQ8bW90aW9uLmRpdiB7Li4uRkFERV9JTn0+XG5cdFx0XHRcdFx0PExpbmVhclByb2dyZXNzIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PGRpdiBrZXk9XCJjaGlsZHJlblwiPntjaGlsZHJlbn08L2Rpdj5cblx0XHRcdCl9XG5cdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZVdyYXBwZXIoeyBjaGlsZHJlbiB9KSB7XG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxtYWluIGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwicGFuZSBweS01IHB5LWxnLTEwXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+e2NoaWxkcmVufTwvZGl2PlxuXHRcdFx0PC9zZWN0aW9uPlxuXHRcdDwvbWFpbj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEJveCwgVXNlckFkZFNlYXJjaCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRVc2VySWNvbiBmcm9tICdpY29ucy9hZGRfdXNlci5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQWRkKHsgdXNlcnMsIHByb2plY3QgfSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbYm94T3Blbiwgc2V0Qm94T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZUJveCA9ICgpID0+IHNldEJveE9wZW4oIWJveE9wZW4pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmUgbWwtMlwiPlxuXHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgdXNlciB1c2VyLS1sZyB1c2VyLS1hZGRcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlQm94fT5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidXNlcl9fYXZhdGFyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19pbml0aWFsc1wiPlxuXHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19pY29uIGljb24gaWNvbi0tMTIgbXQtMFwiIHNyYz17YWRkVXNlckljb259IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvc3Bhbj5cblx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PEJveCB0aXRsZT1cIlNlbGVjdCB1c2Vyc1wiIHN1YnRpdGxlPVwiQ2hvb3NlIHNvbWUgdXNlcnMgdG8gY29sbGFib3JhdGUgd2l0aC5cIiB7Li4ueyBib3hPcGVuLCB0b2dnbGVCb3ggfX0+XG5cdFx0XHRcdDxVc2VyQWRkU2VhcmNoIHsuLi57IHVzZXJzLCBwcm9qZWN0LCB0b2dnbGVCb3ggfX0gLz5cblx0XHRcdDwvQm94PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5LCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlckFkZFNlYXJjaFJlc3VsdHMsIFVzZXJzLCBCdXR0b24gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogU2VydmljZXMgKi9cbmltcG9ydCB7IGlzRW1haWwgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5pbXBvcnQgZmlsdGVyVXNlcnMgZnJvbSAnLi9zZXJ2aWNlcy9maWx0ZXJVc2Vycyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgYWRkVXNlciwgZmV0Y2hHb2JhbFVzZXJzLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckFkZFNlYXJjaCh7IHVzZXJzLCBwcm9qZWN0LCB0b2dnbGVCb3ggfSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2ZvY3VzZWRVc2VyLCBzZXRGb2N1c2VkVXNlcl0gPSB1c2VTdGF0ZSgwKTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgZGF0YTogZ2xvYmFsVXNlcnMgPSBbXSwgaXNMb2FkaW5nOiBnbG9iYWxVc2Vyc0xvYWRpbmcgfSA9IHVzZVF1ZXJ5KFxuXHRcdFFVRVJZX0tFWVMuR0xPQkFMX1VTRVJTLFxuXHRcdGZldGNoR29iYWxVc2Vyc1xuXHQpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCBmaWx0ZXJlZFVzZXJzID0gZmlsdGVyVXNlcnMoZ2xvYmFsVXNlcnMsIHVzZXJzLCBxdWVyeSk7XG5cblx0LyogUmVmcyAqL1xuXHRjb25zdCBxdWVyeVJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgYWRkVXNlck11dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkVXNlciwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdC5pZF0pO1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5HTE9CQUxfVVNFUlMpO1xuXG5cdFx0XHRxdWVyeVJlZi5jdXJyZW50LnNlbGVjdCgpO1xuXHRcdFx0c2V0UXVlcnkoJycpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBzZXRRdWVyeSh2YWx1ZSk7XG5cblx0Y29uc3QgaGFuZGxlT25LZXlEb3duID0gKGV2ZW50KSA9PiB7XG5cdFx0aWYgKFsnRW50ZXInLCAnVGFiJ10uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0aWYgKHF1ZXJ5ICE9PSAnJyAmJiBmb2N1c2VkVXNlciAhPT0gbnVsbCkge1xuXHRcdFx0XHRjb25zdCB1c2VyID0gZm9jdXNlZFVzZXIgaW4gZmlsdGVyZWRVc2VycyA/IGZpbHRlcmVkVXNlcnNbZm9jdXNlZFVzZXJdIDogZm9jdXNlZFVzZXI7XG5cblx0XHRcdFx0aWYgKGlzRW1haWwodXNlci5lbWFpbCkpIHtcblx0XHRcdFx0XHRhZGRVc2VyTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkOiBwcm9qZWN0LmlkLCBlbWFpbDogdXNlci5lbWFpbCB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRjb25zdCBoYW5kbGVDbGljayA9ICh7IGVtYWlsIH0pID0+IHtcblx0XHRpZiAoaXNFbWFpbChlbWFpbCkpIHtcblx0XHRcdGFkZFVzZXJNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQ6IHByb2plY3QuaWQsIGVtYWlsOiBlbWFpbCB9KTtcblx0XHR9XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1ncm93LTFcIj5cblx0XHRcdDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdCB9fSB2YXJpYW50PVwiaW50ZXJhY3RpdmVcIiBzaXplPVwieGxcIiAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuXHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJ1c2VyUXVlcnlcIj5cblx0XHRcdFx0XHRTZWFyY2ggbmFtZSBvciBlbWFpbFxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIGZvcm0tY29udHJvbC0tc2VhcmNoXCJcblx0XHRcdFx0XHRpZD1cInVzZXJRdWVyeVwiXG5cdFx0XHRcdFx0bmFtZT1cInVzZXJRdWVyeVwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTZWFyY2ggbmFtZSBvciBlbWFpbFwiXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdGF1dG9Gb2N1c1xuXHRcdFx0XHRcdHZhbHVlPXtxdWVyeX1cblx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdG9uS2V5RG93bj17aGFuZGxlT25LZXlEb3dufVxuXHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cIm9mZlwiXG5cdFx0XHRcdFx0cmVmPXtxdWVyeVJlZn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PFVzZXJBZGRTZWFyY2hSZXN1bHRzXG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdGZpbHRlcmVkVXNlcnMsXG5cdFx0XHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0XHRcdGhhbmRsZUNsaWNrLFxuXHRcdFx0XHRcdFx0Zm9jdXNlZFVzZXIsXG5cdFx0XHRcdFx0XHRzZXRGb2N1c2VkVXNlcixcblx0XHRcdFx0XHRcdHVzZXJNdXRhdGlvbkxvYWRpbmc6IGFkZFVzZXJNdXRhdGlvbi5pc0xvYWRpbmcsXG5cdFx0XHRcdFx0XHRnbG9iYWxVc2Vyc0xvYWRpbmcsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNFwiPlxuXHRcdFx0XHQ8QnV0dG9uIHRpdGxlPVwiRG9uZVwiIG9uQ2xpY2s9e3RvZ2dsZUJveH0gZXh0ZW5zaW9uQ2xhc3Nlcz1cInctNTAganVzdGlmeS1jb250ZW50LWNlbnRlclwiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlclNlbGVjdCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBZGRTZWFyY2hSZXN1bHRzKHtcblx0ZmlsdGVyZWRVc2Vycyxcblx0cXVlcnksXG5cdGhhbmRsZUNsaWNrLFxuXHRmb2N1c2VkVXNlcixcblx0c2V0Rm9jdXNlZFVzZXIsXG5cdHVzZXJNdXRhdGlvbkxvYWRpbmcsXG5cdGdsb2JhbFVzZXJzTG9hZGluZyxcbn0pIHtcblx0LyogUmVuZGVyIGZpbHRlcmVkIHJlc3VsdHMgKi9cblx0Y29uc3QgcmVzdWx0cyA9ICgpID0+IHtcblx0XHRjb25zdCBuZXdVc2VyID0geyBlbWFpbDogcXVlcnksIGRpc3BsYXk6ICdOZXcgdXNlcicsIHVzZXJDb2xvcjogJzI5MSwgODElLCA1MyUnIH07XG5cblx0XHRpZiAoZmlsdGVyZWRVc2Vycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gZmlsdGVyZWRVc2Vycy5tYXAoKHVzZXIsIHVzZXJJbmRleCkgPT4gKFxuXHRcdFx0XHQ8bW90aW9uLmxpIHsuLi5GQURFX0lOfSBrZXk9e3VzZXIuaWR9IGNsYXNzTmFtZT1cImxpc3RfX2l0ZW0gdnItM1wiPlxuXHRcdFx0XHRcdDxVc2VyU2VsZWN0XG5cdFx0XHRcdFx0XHR7Li4ueyB1c2VyLCB1c2VySW5kZXgsIGhhbmRsZUNsaWNrLCBzZXRGb2N1c2VkVXNlciB9fVxuXHRcdFx0XHRcdFx0aXNGb2N1c2VkPXt1c2VySW5kZXggPT09IGZvY3VzZWRVc2VyICYmIHF1ZXJ5fVxuXHRcdFx0XHRcdFx0aXNMb2FkaW5nPXt1c2VyTXV0YXRpb25Mb2FkaW5nfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvbW90aW9uLmxpPlxuXHRcdFx0KSk7XG5cdFx0fVxuXG5cdFx0aWYgKCFnbG9iYWxVc2Vyc0xvYWRpbmcpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxtb3Rpb24ubGkgey4uLkZBREVfSU59IGtleT1cIk5ldyB1c2VyXCIgY2xhc3NOYW1lPVwibGlzdF9faXRlbSBpcy1mb2N1c2VkIHZyLTNcIj5cblx0XHRcdFx0XHQ8VXNlclNlbGVjdFxuXHRcdFx0XHRcdFx0ey4uLnsgdXNlcjogbmV3VXNlciwgdXNlckluZGV4OiBuZXdVc2VyLCBoYW5kbGVDbGljaywgc2V0Rm9jdXNlZFVzZXIgfX1cblx0XHRcdFx0XHRcdGlzRm9jdXNlZD17cXVlcnkubGVuZ3RofVxuXHRcdFx0XHRcdFx0aXNMb2FkaW5nPXt1c2VyTXV0YXRpb25Mb2FkaW5nfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvbW90aW9uLmxpPlxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdHtxdWVyeSAhPT0gJycgJiYgKFxuXHRcdFx0XHQ8bW90aW9uLnVsIHsuLi5GQURFX0lOfSBjbGFzc05hbWU9XCJib3hfX2xpc3QgbGlzdFwiPlxuXHRcdFx0XHRcdHtyZXN1bHRzKCl9XG5cdFx0XHRcdDwvbW90aW9uLnVsPlxuXHRcdFx0KX1cblx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbHRlclVzZXJzKGdsb2JhbFVzZXJzLCB1c2VycywgcXVlcnkpIHtcblx0Y29uc3QgbG93ZXJRdWVyeSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7XG5cdGNvbnN0IGV4aXN0aW5nVXNlcnNCeUVtYWlsID0gdXNlcnMubWFwKCh7IGVtYWlsIH0pID0+IGVtYWlsKTtcblxuXHRsZXQgZmlsdGVyZWRVc2VycyA9IGdsb2JhbFVzZXJzXG5cdFx0LmZpbHRlcigoeyBlbWFpbCB9KSA9PiB7XG5cdFx0XHQvKiBPbmx5IHJldHVybiB1c2VycyB0aGF0IGFyZSBub3QgcGFydCBvZiB0aGUgcHJvamVjdCAqL1xuXHRcdFx0cmV0dXJuICFleGlzdGluZ1VzZXJzQnlFbWFpbC5pbmNsdWRlcyhlbWFpbCk7XG5cdFx0fSlcblx0XHQuZmlsdGVyKCh7IGVtYWlsLCBkaXNwbGF5IH0pID0+IHtcblx0XHRcdC8qIE9ubHkgcmV0dXJuIHVzZXJzIHRoYXQgbWF0Y2ggdGhlIHF1ZXJ5IG9uIGVtYWlsIHx8IGRpc3BsYXkgKi9cblx0XHRcdHJldHVybiBlbWFpbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyUXVlcnkpIHx8IGRpc3BsYXkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclF1ZXJ5KTtcblx0XHR9KTtcblxuXHRyZXR1cm4gZmlsdGVyZWRVc2Vycztcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBMb2FkaW5nV3JhcHBlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBzdGFySWNvbiBmcm9tICdpY29ucy9zdGFyLnN2Zyc7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICdpY29ucy9kZWxldGUuc3ZnJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBkZWxldGVVc2VyLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcih7IHVzZXIsIHByb2plY3QgPSB7fSwgdmFyaWFudCA9ICdkZWZhdWx0Jywgc2l6ZSA9ICdtZCcgfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJZCwgYXV0aG9yIH0gPSBwcm9qZWN0O1xuXHRjb25zdCB7IGlkOiB1c2VySWQsIGVtYWlsIH0gPSB1c2VyO1xuXG5cdGNvbnN0IGlzQXV0aG9yID0gZW1haWwgPT09IGF1dGhvcjtcblx0Y29uc3QgY2xhc3NlcyA9IFsndXNlcicsIGB1c2VyLS0ke3NpemV9YCwgYHVzZXItLSR7dmFyaWFudH1gLCBpc0F1dGhvciAmJiAndXNlci0tYXV0aG9yJ10uam9pbignICcpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBkZWxldGVVc2VyTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVVc2VyLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKSxcblx0fSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuXHRcdFx0PFVzZXJBdmF0YXIgaXNMb2FkaW5nPXtkZWxldGVVc2VyTXV0YXRpb24uaXNMb2FkaW5nfSB7Li4udXNlcn0+XG5cdFx0XHRcdHt2YXJpYW50ID09PSAnaW50ZXJhY3RpdmUnICYmICFpc0F1dGhvciAmJiAoXG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidXNlcl9fYWN0aW9uIGJ0biBidG4tbGluayBwLTBcIlxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkZWxldGVVc2VyTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkLCB1c2VySWQgfSl9PlxuXHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19hY3Rpb24taWNvbiBpY29uIGljb24tLTE0XCIgc3JjPXtkZWxldGVJY29ufSAvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9Vc2VyQXZhdGFyPlxuXHRcdFx0e2lzQXV0aG9yICYmIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19zdGF0dXMgdXNlcl9fc3RhdHVzLS1sZWFkZXJcIj5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cInVzZXJfX3N0YXR1cy1pY29uIGljb24gdGV4dC10ZXJ0aWFyeSBtdC0wXCIgc3JjPXtzdGFySWNvbn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgY29uc3QgVXNlckF2YXRhciA9ICh7IGRpc3BsYXksIHVzZXJDb2xvciwgaXNMb2FkaW5nLCBjaGlsZHJlbiB9KSA9PiB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB1c2VySW5pdGlhbHMgPSBkaXNwbGF5LnNwbGl0KCcgJykubWFwKCh3b3JkKSA9PiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlcl9fYXZhdGFyXCIgc3R5bGU9e3sgJy0tdGhlbWUnOiB1c2VyQ29sb3IgfX0+XG5cdFx0XHQ8TG9hZGluZ1dyYXBwZXIgbG9hZGluZz17aXNMb2FkaW5nfSBsb2FkZXJTaXplPXsxNn0+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInVzZXJfX2luaXRpYWxzXCI+e3VzZXJJbml0aWFsc308L3NwYW4+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgY29uc3QgVXNlckluZm8gPSAoeyBkaXNwbGF5LCBlbWFpbCB9KSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1sLTNcIj5cblx0XHQ8cCBjbGFzc05hbWU9XCJtYi0wXCI+e2Rpc3BsYXl9PC9wPlxuXHRcdDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTYwIHRleHQtLXhzXCI+e2VtYWlsfTwvcD5cblx0PC9kaXY+XG4pO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IHsgVXNlckF2YXRhciwgVXNlckluZm8gfSBmcm9tICcuL1VzZXInO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRVc2VySWNvbiBmcm9tICdpY29ucy9hZGRfdXNlci5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyU2VsZWN0KHsgdXNlciwgdXNlckluZGV4LCBoYW5kbGVDbGljaywgaXNGb2N1c2VkLCBzZXRGb2N1c2VkVXNlciwgaXNMb2FkaW5nIH0pIHtcblx0LyogRWZmZWN0cyAqL1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlzRm9jdXNlZCAmJiBzZXRGb2N1c2VkVXNlcih1c2VySW5kZXgpO1xuXHR9LCBbaXNGb2N1c2VkXSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRyZXR1cm4gKCkgPT4gc2V0Rm9jdXNlZFVzZXIoMCk7XG5cdH0sIFtdKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgaGFuZGxlU3RhdHVzID0gKGFjdGlvbikgPT4ge1xuXHRcdHNldEZvY3VzZWRVc2VyKGFjdGlvbiA9PT0gJ2VudGVyJyA/IHVzZXJJbmRleCA6IDApO1xuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxidXR0b25cblx0XHRcdGNsYXNzTmFtZT17YHVzZXIgdXNlci0tc2VsZWN0ICR7aXNGb2N1c2VkICYmICdpcy1mb2N1c2VkJ30gdXNlci0teGxgfVxuXHRcdFx0b25DbGljaz17KCkgPT4gaGFuZGxlQ2xpY2sodXNlcil9XG5cdFx0XHRvbk1vdXNlRW50ZXI9eygpID0+IGhhbmRsZVN0YXR1cygnZW50ZXInKX1cblx0XHRcdG9uTW91c2VMZWF2ZT17KCkgPT4gaGFuZGxlU3RhdHVzKCdsZWF2ZScpfVxuXHRcdFx0dHlwZT1cImJ1dHRvblwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxVc2VyQXZhdGFyIGlzTG9hZGluZz17aXNMb2FkaW5nICYmIGlzRm9jdXNlZH0gey4uLnVzZXJ9IC8+XG5cdFx0XHRcdDxVc2VySW5mbyB7Li4udXNlcn0gLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19hZGQgdGV4dC1zZWNvbmRhcnkgcm91bmRlZC1jaXJjbGUgbWwtYXV0b1wiPlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9fYWRkLWljb24gaWNvbiBpY29uLS0xMiB0ZXh0LXNlY29uZGFyeVwiIHNyYz17YWRkVXNlckljb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9idXR0b24+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU0NBTEVfRkFERSB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2Vycyh7IHVzZXJzLCBsYXlvdXQgPSAnZnVsbCcsIC4uLnJlc3QgfSkge1xuXHRjb25zdCBzbGljZUFtb3VudCA9IGxheW91dCA9PT0gJ21pbmltYWwnID8gNyA6IEluZmluaXR5O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBndXR0ZXJzLTFcIj5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHt1c2Vycy5zbGljZSgwLCBzbGljZUFtb3VudCkubWFwKCh1c2VyKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2IGxheW91dCB7Li4uU0NBTEVfRkFERX0gY2xhc3NOYW1lPVwiY29sLWF1dG9cIiBrZXk9e3VzZXIuaWR9PlxuXHRcdFx0XHRcdFx0XHQ8VXNlciB7Li4ueyB1c2VyLCAuLi5yZXN0IH19IC8+XG5cdFx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHRcdHtsYXlvdXQgPT09ICdtaW5pbWFsJyAmJiB1c2Vycy5sZW5ndGggPiA3ICYmIChcblx0XHRcdFx0XHQ8bW90aW9uLmRpdiBsYXlvdXQgey4uLlNDQUxFX0ZBREV9IGNsYXNzTmFtZT1cImNvbC1hdXRvXCIga2V5PVwibW9yZVwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0teHMgdGV4dC1tdXRlZC0tNzAgbWwtMVwiPisge3VzZXJzLmxlbmd0aCAtIHNsaWNlQW1vdW50fTwvcD5cblx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFN0YXRpY0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5leHBvcnQgZGVmYXVsdCBTdGF0aWNDb250ZXh0O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXJBZGQsIFVzZXJzLCBFZGl0YWJsZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgc3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBlZGl0UHJvamVjdCwgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWxIZWFkZXIoeyB0aXRsZSwgZGVzY3JpcHRpb24sIHVzZXJzLCBpZCwgYXV0aG9yLCBlbWFpbCB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCBwcm9qZWN0ID0geyBpZCwgYXV0aG9yLCBlbWFpbCB9O1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoc3RhdGljQ29udGV4dCk7XG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgbXV0YXRpb25PblN1Y2Nlc3MgPSAoKSA9PiB7XG5cdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgaWRdKTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi02XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctNlwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7dXNlclJvbGUgPT09ICdhZG1pbicgJiYgJ2VkaXRhYmxlJ30gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yYH0+XG5cdFx0XHRcdFx0PEVkaXRhYmxlXG5cdFx0XHRcdFx0XHRpbnB1dFR5cGU9XCJ0aXRsZVwiXG5cdFx0XHRcdFx0XHRjb250ZW50PXt0aXRsZX1cblx0XHRcdFx0XHRcdG11dGF0aW9uPXtlZGl0UHJvamVjdH1cblx0XHRcdFx0XHRcdG11dGF0aW9uSWQ9e2lkfVxuXHRcdFx0XHRcdFx0bXV0YXRpb25PblN1Y2Nlc3M9e211dGF0aW9uT25TdWNjZXNzfT5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJoNSBtYi0wIHRleHQtd2hpdGVcIj57dGl0bGUgPyB0aXRsZSA6ICdBZGQgYSBuaWNlIHRpdGxlJ308L2gxPlxuXHRcdFx0XHRcdDwvRWRpdGFibGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7dXNlclJvbGUgPT09ICdhZG1pbicgJiYgJ2VkaXRhYmxlJ30gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yYH0+XG5cdFx0XHRcdFx0PEVkaXRhYmxlXG5cdFx0XHRcdFx0XHRpbnB1dFR5cGU9XCJkZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0XHRjb250ZW50PXtkZXNjcmlwdGlvbn1cblx0XHRcdFx0XHRcdG11dGF0aW9uPXtlZGl0UHJvamVjdH1cblx0XHRcdFx0XHRcdG11dGF0aW9uSWQ9e2lkfVxuXHRcdFx0XHRcdFx0bXV0YXRpb25PblN1Y2Nlc3M9e211dGF0aW9uT25TdWNjZXNzfT5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTcwIG1iLTBcIj5cblx0XHRcdFx0XHRcdFx0e2Rlc2NyaXB0aW9uID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPntkZXNjcmlwdGlvbn08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtcIldoYXQncyB0aGlzIHByb2plY3QgYWJvdXQ/IFNldCB0aGUgY29udGV4dCwgdGhlIGdvYWxzLCB0aGUgY29uc3RyYWludHNcIn1cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9FZGl0YWJsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gZC1mbGV4IGFsaWduLWl0ZW1zLWJhc2VsaW5lIG1sLWF1dG9cIj5cblx0XHRcdFx0PFVzZXJzIHsuLi57IHVzZXJzLCBwcm9qZWN0IH19IHNpemU9XCJsZ1wiIC8+XG5cdFx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiA8VXNlckFkZCB7Li4ueyB1c2VycywgcHJvamVjdCB9fSAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBFZGl0YWJsZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjaGVja0ljb24gZnJvbSAnaWNvbnMvY2hlY2suc3ZnJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGVkaXRQcm9qZWN0SW1hZ2UsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0RGV0YWlsSW1hZ2UoeyBwcm9qZWN0SW1hZ2UsIHByb2plY3RJZCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJbWFnZUlkLCB0aXRsZSwgcGhhc2VzID0gW10gfSA9IHByb2plY3RJbWFnZTtcblx0Y29uc3QgeyBpbWFnZSB9ID0gcGhhc2VzW3BoYXNlcy5sZW5ndGggLSAxXSB8fCB7fTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IG11dGF0aW9uT25TdWNjZXNzID0gKCkgPT4ge1xuXHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0pO1xuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxhcnRpY2xlIGNsYXNzTmFtZT17YGNhcmQgY2FyZC0tbGluayBjYXJkLS1wcm9kdWN0ICR7c2VsZWN0ZWQuaW5jbHVkZXMocHJvamVjdEltYWdlSWQpICYmICdpcy1zZWxlY3RlZCd9YH0+XG5cdFx0XHQ8TGluayB0bz17YC9wcm9qZWN0cy8ke3Byb2plY3RJZH0vcmV2aWV3LyR7cHJvamVjdEltYWdlSWR9YH0gdGl0bGU9e3RpdGxlfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX19pbWFnZSBib3JkZXIgbS0yXCI+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJcblx0XHRcdFx0XHRcdHNyYz17aW1hZ2UudGh1bWJuYWlsfVxuXHRcdFx0XHRcdFx0c3JjU2V0PXtgJHtpbWFnZS50aHVtYm5haWxSZXRpbmF9IDJ4YH1cblx0XHRcdFx0XHRcdGFsdD17dGl0bGV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0xpbms+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuXHRcdFx0XHQ8RWRpdGFibGVcblx0XHRcdFx0XHRpbnB1dFR5cGU9XCJ0aXRsZVwiXG5cdFx0XHRcdFx0cHJvamVjdElkPXtwcm9qZWN0SWR9XG5cdFx0XHRcdFx0Y29udGVudD17dGl0bGV9XG5cdFx0XHRcdFx0bXV0YXRpb249e2VkaXRQcm9qZWN0SW1hZ2V9XG5cdFx0XHRcdFx0bXV0YXRpb25JZD17cHJvamVjdEltYWdlSWR9XG5cdFx0XHRcdFx0ey4uLnsgbXV0YXRpb25PblN1Y2Nlc3MgfX0+XG5cdFx0XHRcdFx0PG1vdGlvbi5wIHsuLi5GQURFX0lOfSBjbGFzc05hbWU9XCJtYi0wXCI+XG5cdFx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdFx0PC9tb3Rpb24ucD5cblx0XHRcdFx0PC9FZGl0YWJsZT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX19zZWxlY3RcIj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC10b2dnbGVcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHVwZGF0ZVNlbGVjdGVkKHByb2plY3RJbWFnZUlkKTtcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC1pY29uIGljb24gaWNvbi0tOFwiIHNyYz17Y2hlY2tJY29ufSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvYXJ0aWNsZT5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IERyb3B6b25lLCBBY3Rpb25NZW51IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IFByb2plY3REZXRhaWxJbWFnZSBmcm9tICcuL1Byb2plY3REZXRhaWxJbWFnZSc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU1RBR0dFUl9VUCB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0SW1hZ2VzLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZVNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdERldGFpbEltYWdlcyh7IHByb2plY3RJbWFnZXMsIHByb2plY3RJZCB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkLCByZXNldFNlbGVjdGVkIH0gPSB1c2VTZWxlY3Rpb24oKTtcblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXHRjb25zdCB7IHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVQcm9qZWN0SW1hZ2VzLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKTtcblx0XHRcdHJlc2V0U2VsZWN0ZWQoKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgYWN0aW9ucyA9IFtcblx0XHR7XG5cdFx0XHR0aXRsZTogJ1JlbW92ZScsXG5cdFx0XHR0aGVtZTogJ2RhbmdlcicsXG5cdFx0XHRoYXNQZXJtaXNzaW9uOiBbJ2FkbWluJ10sXG5cdFx0XHRpY29uOiBkZWxldGVJY29uLFxuXHRcdFx0aWNvblNpemU6IDEwLFxuXHRcdFx0bXV0YXRpb246ICgpID0+IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZUlkczogc2VsZWN0ZWQgfSksXG5cdFx0XHRpc0xvYWRpbmc6IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbi5pc0xvYWRpbmcsXG5cdFx0fSxcblx0XTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAnaGFzLXNlbGVjdGlvbnMnfWB9PlxuXHRcdFx0XHR7dXNlclJvbGUgPT09ICdhZG1pbicgPyAoXG5cdFx0XHRcdFx0PERyb3B6b25lIHsuLi57IHByb2plY3RJZCwgcHJvamVjdEltYWdlcywgcG9zaXRpdGlvbjogJ3JpZ2h0JyB9fT5cblx0XHRcdFx0XHRcdHsoKSA9PiA8SW1hZ2VzIHsuLi57IHByb2plY3RJbWFnZXMsIHByb2plY3RJZCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH19IC8+fVxuXHRcdFx0XHRcdDwvRHJvcHpvbmU+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy01XCI+XG5cdFx0XHRcdFx0XHQ8SW1hZ2VzIHsuLi57IHByb2plY3RJbWFnZXMsIHByb2plY3RJZCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH19IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHtzZWxlY3RlZC5sZW5ndGggPiAwICYmIDxBY3Rpb25NZW51IHsuLi57IHNlbGVjdGVkLCByZXNldFNlbGVjdGVkLCBhY3Rpb25zIH19IC8+fVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmNvbnN0IEltYWdlcyA9ICh7IHByb2plY3RJbWFnZXMsIHByb2plY3RJZCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0e3Byb2plY3RJbWFnZXMubWFwKChwcm9qZWN0SW1hZ2UsIHByb2plY3RJbWFnZUluZGV4KSA9PiAoXG5cdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0ey4uLlNUQUdHRVJfVVAocHJvamVjdEltYWdlSW5kZXgpfVxuXHRcdFx0XHRcdGtleT17cHJvamVjdEltYWdlLmlkfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtMyBjb2wteHhsLTJcIlxuXHRcdFx0XHRcdGxheW91dD5cblx0XHRcdFx0XHQ8UHJvamVjdERldGFpbEltYWdlIHsuLi57IHByb2plY3RJbWFnZSwgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfX0gLz5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0KSl9XG5cdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG59O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0RGV0YWlsSGVhZGVyIH0gZnJvbSAnLi9Qcm9qZWN0RGV0YWlsSGVhZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdERldGFpbEltYWdlcyB9IGZyb20gJy4vUHJvamVjdERldGFpbEltYWdlcyc7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlcnMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgeyBQcm9qZWN0SW1hZ2UgfSBmcm9tICcuLyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNoZWNrSWNvbiBmcm9tICdpY29ucy9jaGVjay5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KHsgcHJvamVjdCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgdGl0bGUsIHByb2plY3RJbWFnZXMsIHVzZXJzLCBhdXRob3IsIGlkIH0gPSBwcm9qZWN0O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxMaW5rXG5cdFx0XHR0bz17YHByb2plY3RzLyR7aWR9YH1cblx0XHRcdHRpdGxlPXt0aXRsZX1cblx0XHRcdGNsYXNzTmFtZT17YGNhcmQgY2FyZC0tbGluayBjYXJkLS1wcm9kdWN0ICR7c2VsZWN0ZWQuaW5jbHVkZXMoaWQpICYmICdpcy1zZWxlY3RlZCd9YH0+XG5cdFx0XHQ8UHJvamVjdEltYWdlIHsuLi57IHByb2plY3RJbWFnZXMgfX0gLz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItMlwiPnt0aXRsZSA/IHRpdGxlIDogJ0FkZCBhIG5pY2UgdGl0bGUnfTwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdDogeyBhdXRob3IgfSwgbGF5b3V0OiAnbWluaW1hbCcgfX0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fc2VsZWN0XCI+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXJkX19zZWxlY3QtdG9nZ2xlXCJcblx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHR1cGRhdGVTZWxlY3RlZChpZCk7XG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJjYXJkX19zZWxlY3QtaWNvbiBpY29uIGljb24tLThcIiBzcmM9e2NoZWNrSWNvbn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0xpbms+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5LCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogRG9tYWluICovXG5pbXBvcnQgeyBQcm9qZWN0TW9kYWwgfSBmcm9tICcuLyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNDQUxFX0ZBREUgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkUHJvamVjdEljb24gZnJvbSAnaWNvbnMvYWRkX3Byb2plY3Quc3ZnJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBhZGRQcm9qZWN0LCBRVUVSWV9LRVlTLCBlZGl0UHJvamVjdCwgZmV0Y2hQcm9qZWN0QnlJZCB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RBZGQoeyBzZXROZXdQcm9qZWN0SWQgfSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbcHJvamVjdElkLCBzZXRQcm9qZWN0SWRdID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBkYXRhOiBwcm9qZWN0IH0gPSB1c2VRdWVyeShbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdLCAoKSA9PiBmZXRjaFByb2plY3RCeUlkKHsgcHJvamVjdElkIH0pLCB7XG5cdFx0ZW5hYmxlZDogISFwcm9qZWN0SWQsXG5cdH0pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0TmV3UHJvamVjdElkKHByb2plY3RJZCk7XG5cdH0sIFtwcm9qZWN0SWRdKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgYWRkTXV0YXRpb24gPSB1c2VNdXRhdGlvbihhZGRQcm9qZWN0LCB7XG5cdFx0b25TdWNjZXNzOiAoeyBpZCB9KSA9PiBzZXRQcm9qZWN0SWQoaWQpLFxuXHR9KTtcblxuXHRjb25zdCBlZGl0TXV0YXRpb24gPSB1c2VNdXRhdGlvbihlZGl0UHJvamVjdCwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4gaW52YWxpZGF0ZVByb2plY3QoKSxcblx0fSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZU1vZGFsID0gKCkgPT4ge1xuXHRcdHNldE1vZGFsT3BlbighbW9kYWxPcGVuKTtcblxuXHRcdC8qIE11dGF0ZSBvbiBtb2RhbCBvcGVuICovXG5cdFx0aWYgKCFtb2RhbE9wZW4pIGFkZE11dGF0aW9uLm11dGF0ZSgpO1xuXG5cdFx0LyogUmVzZXQgaWQgb24gY2xvc2UgbW9kYWwgKi9cblx0XHRpZiAobW9kYWxPcGVuKSB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2V0UHJvamVjdElkKG51bGwpO1xuXHRcdFx0fSwgMjUwKTtcblxuXHRcdFx0aW52YWxpZGF0ZVByb2plY3QoKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgdXBkYXRlUHJvamVjdCA9IChmb3JtUmVmKSA9PiBlZGl0TXV0YXRpb24ubXV0YXRlKHsgZm9ybVJlZiwgaWQ6IHByb2plY3RJZCB9KTtcblx0Y29uc3QgaW52YWxpZGF0ZVByb2plY3QgPSAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLlBST0pFQ1RfQllfVVNFUik7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxtb3Rpb24uYnV0dG9uXG5cdFx0XHRcdHsuLi5TQ0FMRV9GQURFfVxuXHRcdFx0XHRrZXk9XCJhZGQtcHJvamVjdFwiXG5cdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1pbnRlcmFjdGl2ZSBpY29uLXdyYXBwZXItLXNlY29uZGFyeSBidG4gYnRuLWxpbmsgYnRuLS1hZGQgYnRuLS1hZGQtcmlnaHRcIlxuXHRcdFx0XHRzdHlsZT17eyAnLS1zaXplJzogNzUgfX1cblx0XHRcdFx0b25DbGljaz17dG9nZ2xlTW9kYWx9PlxuXHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMzAgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e2FkZFByb2plY3RJY29ufSAvPlxuXHRcdFx0PC9tb3Rpb24uYnV0dG9uPlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e21vZGFsT3BlbiAmJiA8UHJvamVjdE1vZGFsIHsuLi57IHByb2plY3QsIHVwZGF0ZVByb2plY3QsIHRvZ2dsZU1vZGFsIH19IC8+fVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkSW1hZ2VJY29uIGZyb20gJ2ljb25zL2FkZF9pbWFnZS5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0SW1hZ2UoeyBwcm9qZWN0SW1hZ2VzIH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgcGhhc2VzID0gW10sIHRpdGxlIH0gPSBwcm9qZWN0SW1hZ2VzWzBdIHx8IHt9O1xuXHRjb25zdCB7IGltYWdlIH0gPSBwaGFzZXNbcGhhc2VzLmxlbmd0aCAtIDFdIHx8IHt9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9faW1hZ2UgYm9yZGVyIG0tMlwiPlxuXHRcdFx0e2ltYWdlICYmIChcblx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXG5cdFx0XHRcdFx0c3JjPXtpbWFnZS50aHVtYm5haWx9XG5cdFx0XHRcdFx0c3JjU2V0PXtgJHtpbWFnZS50aHVtYm5haWxSZXRpbmF9IDJ4YH1cblx0XHRcdFx0XHRhbHQ9e3RpdGxlfVxuXHRcdFx0XHQvPlxuXHRcdFx0KX1cblx0XHRcdHshaW1hZ2UgJiYgPFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTQ4IHRleHQtbXV0ZWQtLTQwXCIgc3JjPXthZGRJbWFnZUljb259IC8+fVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0YXJlYUF1dG9zaXplJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBEcm9wem9uZSwgTG9hZGluZ1dyYXBwZXIsIE1vZGFsLCBVc2VycywgVXNlckFkZCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTVEFHR0VSX1VQIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RNb2RhbCh7IHByb2plY3QgPSB7fSwgdXBkYXRlUHJvamVjdCwgdG9nZ2xlTW9kYWwgfSkge1xuXHQvKiBDb25zdGFudHMgICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJZCA9IG51bGwsIHRpdGxlID0gJycsIHByb2plY3RJbWFnZXMgPSBbXSwgdXNlcnMgPSBbXSB9ID0gcHJvamVjdDtcblxuXHQvKiBSZWZzICovXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8TW9kYWwgey4uLnsgdG9nZ2xlTW9kYWwgfX0gZG9tRWxlbWVudD17ZG9jdW1lbnQuYm9keX0+XG5cdFx0XHQ8Zm9ybVxuXHRcdFx0XHRyZWY9e2Zvcm1SZWZ9XG5cdFx0XHRcdG1ldGhvZD1cIlBPU1RcIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Zvcm1cIlxuXHRcdFx0XHRvblN1Ym1pdD17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0b2dnbGVNb2RhbCgpO1xuXHRcdFx0XHR9fT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2hlYWRlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHB0LTYgcHQtbWQtMTIgcGItM1wiPlxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInByb2plY3RUaXRsZVwiPlxuXHRcdFx0XHRcdFx0e3RpdGxlfVxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLS1jbGVhciB0ZXh0LS14bFwiXG5cdFx0XHRcdFx0XHRpZD1cInByb2plY3RUaXRsZVwiXG5cdFx0XHRcdFx0XHRuYW1lPVwidGl0bGVcIlxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJUaGUgcHJvamVjdCBuYW1lXCJcblx0XHRcdFx0XHRcdG9uQmx1cj17KCkgPT4gdXBkYXRlUHJvamVjdChmb3JtUmVmKX1cblx0XHRcdFx0XHRcdGF1dG9Gb2N1c1xuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Nsb3NlIGJ0biBidG4tbGluayBtbC1hdXRvXCJcblx0XHRcdFx0XHRcdGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcblx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9XCJDbG9zZVwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVNb2RhbH1cblx0XHRcdFx0XHRcdHRhYkluZGV4PVwiLTFcIj5cblx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2JvZHkgcHQtMyBwYi0xMlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtMlwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJwcm9qZWN0RGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHRcdFx0XHR7YFdoYXQncyB0aGlzIHByb2plY3QgYWJvdXQ/YH1cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PFRleHRhcmVhQXV0b3NpemVcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLS10ZXh0IGZvcm0tY29udHJvbC0tY2xlYXIgbWItMTBcIlxuXHRcdFx0XHRcdFx0XHRcdGlkPVwicHJvamVjdERlc2NyaXB0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGVzY3JpcHRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiV2hhdCdzIHRoaXMgcHJvamVjdCBhYm91dD9cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQmx1cj17KCkgPT4gdXBkYXRlUHJvamVjdChmb3JtUmVmKX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmUgbWwtYXV0b1wiPlxuXHRcdFx0XHRcdFx0XHQ8VXNlcnMgey4uLnsgdXNlcnMsIHByb2plY3QgfX0gc2l6ZT1cImxnXCIgLz5cblx0XHRcdFx0XHRcdFx0PFVzZXJBZGQgey4uLnsgdXNlcnMsIHByb2plY3QgfX0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxEcm9wem9uZSB7Li4ueyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZXMgfX0+XG5cdFx0XHRcdFx0XHR7KHsgdXBkYXRlUHJvamVjdEltYWdlcywgaXNMb2FkaW5nIH0pID0+IChcblx0XHRcdFx0XHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0XHRcdFx0XHR7cHJvamVjdEltYWdlcy5tYXAoKHByb2plY3RJbWFnZSwgcHJvamVjdEltYWdlSW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdDxEcm9wem9uZUltYWdlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17cHJvamVjdEltYWdlLmlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ueyBwcm9qZWN0SW1hZ2UsIHByb2plY3RJbWFnZUluZGV4LCB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc0xvYWRpbmcgfX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L0Ryb3B6b25lPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Zvb3RlciBwYi02IHBiLW1kLTEyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0wIHctMTAwXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctMSBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2J0biBidG4gYnRuLWJsb2NrIGJ0bi1zZWNvbmRhcnkgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG1vdGlvbi5zcGFuIGNsYXNzTmFtZT1cImJ0bi10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5TYXZlPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvbW90aW9uLnNwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvTW9kYWw+XG5cdCk7XG59XG5cbmNvbnN0IERyb3B6b25lSW1hZ2UgPSAoeyBwcm9qZWN0SW1hZ2UsIHByb2plY3RJbWFnZUluZGV4LCB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc0xvYWRpbmcgfSkgPT4ge1xuXHRjb25zdCB7IHRpdGxlLCBpZCwgcGhhc2VzID0gW10gfSA9IHByb2plY3RJbWFnZTtcblx0Y29uc3QgeyBpbWFnZSB9ID0gcGhhc2VzW3BoYXNlcy5sZW5ndGggLSAxXSB8fCB7fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRsYXlvdXRcblx0XHRcdHsuLi5TVEFHR0VSX1VQKHByb2plY3RJbWFnZUluZGV4KX1cblx0XHRcdGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtMyBjb2wteHhsLTJcIlxuXHRcdFx0a2V5PXtpZH0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3B6b25lX19jb250YWluZXJcIj5cblx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImRyb3B6b25lX19pbWFnZSBpbWctZmx1aWRcIlxuXHRcdFx0XHRcdHNyYz17aW1hZ2UudGh1bWJuYWlsfVxuXHRcdFx0XHRcdHNyY1NldD17YCR7aW1hZ2UudGh1bWJuYWlsUmV0aW5hfSAyeGB9XG5cdFx0XHRcdFx0YWx0PXt0aXRsZX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBkcm9wem9uZV9faW1hZ2UtZGVsZXRlIHAtMFwiXG5cdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdHVwZGF0ZVByb2plY3RJbWFnZXMoJ2RlbGV0ZScsIHsgcHJvamVjdEltYWdlSWRzOiBbaWRdIH0pO1xuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImRyb3B6b25lX19pbWFnZS1kZWxldGUtaWNvbiBpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1kYW5nZXIgbXgtYXV0b1wiXG5cdFx0XHRcdFx0XHRzdHlsZT17eyAnLS1zaXplJzogNTAgfX0+XG5cdFx0XHRcdFx0XHQ8TG9hZGluZ1dyYXBwZXJcblx0XHRcdFx0XHRcdFx0bG9hZGluZz17aXNMb2FkaW5nfVxuXHRcdFx0XHRcdFx0XHRsb2FkZXJTaXplPXsyMH1cblx0XHRcdFx0XHRcdFx0Y2xhc3Nlcz17e1xuXHRcdFx0XHRcdFx0XHRcdGxvYWRlckNsYXNzZXM6ICdwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXggdGV4dC1kYW5nZXInLFxuXHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTE0IHRleHQtZGFuZ2VyIG10LTBcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cblx0XHRcdFx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEFjdGlvbk1lbnUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi8nO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOLCBTVEFHR0VSX1VQIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuaW1wb3J0IGxlYXZlSWNvbiBmcm9tICdpY29ucy9sZWF2ZS5zdmcnO1xuaW1wb3J0IGFyY2hpdmVJY29uIGZyb20gJ2ljb25zL2FyY2hpdmUuc3ZnJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZVNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0cywgbGVhdmVQcm9qZWN0cywgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmVzdWx0cyh7IHByb2plY3RzLCBuZXdQcm9qZWN0SWQgfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IHNlbGVjdGVkLCB1cGRhdGVTZWxlY3RlZCwgcmVzZXRTZWxlY3RlZCB9ID0gdXNlU2VsZWN0aW9uKCk7XG5cdGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgbGVhdmVQcm9qZWN0c011dGF0aW9uID0gdXNlTXV0YXRpb24obGVhdmVQcm9qZWN0cywge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIpO1xuXHRcdFx0cmVzZXRTZWxlY3RlZCgpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdGNvbnN0IGRlbGV0ZVByb2plY3RzTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVQcm9qZWN0cywge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIpO1xuXHRcdFx0cmVzZXRTZWxlY3RlZCgpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdGNvbnN0IGFjdGlvbnMgPSBbXG5cdFx0e1xuXHRcdFx0dGl0bGU6ICdMZWF2ZScsXG5cdFx0XHR0aGVtZTogJ3dhcm5pbmcnLFxuXHRcdFx0aGFzUGVybWlzc2lvbjogWyd1c2VyJywgJ2Jhc2ljJ10sXG5cdFx0XHRpY29uOiBsZWF2ZUljb24sXG5cdFx0XHRtdXRhdGlvbjogKCkgPT4gbGVhdmVQcm9qZWN0c011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZHM6IHNlbGVjdGVkLCB1c2VySWQ6IGN1cnJlbnRVc2VyLmlkIH0pLFxuXHRcdFx0aXNMb2FkaW5nOiBsZWF2ZVByb2plY3RzTXV0YXRpb24uaXNMb2FkaW5nLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGl0bGU6ICdBcmNoaXZlJyxcblx0XHRcdHRoZW1lOiAnc2Vjb25kYXJ5Jyxcblx0XHRcdGhhc1Blcm1pc3Npb246IFsnYWRtaW4nXSxcblx0XHRcdGljb246IGFyY2hpdmVJY29uLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGl0bGU6ICdSZW1vdmUnLFxuXHRcdFx0dGhlbWU6ICdkYW5nZXInLFxuXHRcdFx0aGFzUGVybWlzc2lvbjogWydhZG1pbiddLFxuXHRcdFx0aWNvbjogY2xvc2VJY29uLFxuXHRcdFx0aWNvblNpemU6IDEwLFxuXHRcdFx0bXV0YXRpb246ICgpID0+IGRlbGV0ZVByb2plY3RzTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkczogc2VsZWN0ZWQgfSksXG5cdFx0XHRpc0xvYWRpbmc6IGRlbGV0ZVByb2plY3RzTXV0YXRpb24uaXNMb2FkaW5nLFxuXHRcdH0sXG5cdF07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxoMSBjbGFzc05hbWU9XCJoNSB0ZXh0LXdoaXRlIG1iLTZcIj5Zb3VyIHByb2plY3RzPC9oMT5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHtwcm9qZWN0cy5sZW5ndGggPT09IDAgJiYgKFxuXHRcdFx0XHRcdDxtb3Rpb24ucCB7Li4uRkFERV9JTn0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi0wIHBvc2l0aW9uLWFic29sdXRlXCI+XG5cdFx0XHRcdFx0XHR7YFlvdSBkb24ndCBoYXZlIGFueSBwcm9qZWN0cyB5ZXRgfVxuXHRcdFx0XHRcdDwvbW90aW9uLnA+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgcm93IHJvdy0tZXF1YWxpemVkIGd1dHRlcnMtNSAke3NlbGVjdGVkLmxlbmd0aCA+IDAgJiYgJ2hhcy1zZWxlY3Rpb25zJ31gfT5cblx0XHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0XHR7cHJvamVjdHNcblx0XHRcdFx0XHRcdC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IG5ld1Byb2plY3RJZClcblx0XHRcdFx0XHRcdC5tYXAoKHByb2plY3QsIHByb2plY3RJbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdFx0XHRcdHsuLi5TVEFHR0VSX1VQKHByb2plY3RJbmRleCl9XG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtwcm9qZWN0LmlkfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtMyBjb2wteHhsLTJcIlxuXHRcdFx0XHRcdFx0XHRcdGxheW91dD5cblx0XHRcdFx0XHRcdFx0XHQ8UHJvamVjdCB7Li4ueyBwcm9qZWN0LCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfX0gLz5cblx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7c2VsZWN0ZWQubGVuZ3RoID4gMCAmJiA8QWN0aW9uTWVudSB7Li4ueyBzZWxlY3RlZCwgcmVzZXRTZWxlY3RlZCwgYWN0aW9ucyB9fSAvPn1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0QWRkIH0gZnJvbSBcIi4vUHJvamVjdEFkZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0SW1hZ2UgfSBmcm9tIFwiLi9Qcm9qZWN0SW1hZ2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdE1vZGFsIH0gZnJvbSBcIi4vUHJvamVjdE1vZGFsXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RSZXN1bHRzIH0gZnJvbSBcIi4vUHJvamVjdFJlc3VsdHNcIjtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IFByb2plY3RSZXZpZXdNYXJrZXIgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3TWFya2VyJztcbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudCBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50JztcbmltcG9ydCBQcm9qZWN0UmV2aWV3Q29tbWVudEJveCBmcm9tICcuL1Byb2plY3RSZXZpZXdDb21tZW50Qm94JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBmZXRjaEdvYmFsVXNlcnMsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG4vKiBHbG9iYWwgKi9cbmNvbnN0IGN1cnNvck9mZnNldCA9IDEwO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3Q2FudmFzKHsgdGl0bGUsIHBoYXNlcyA9IFtdLCBwcm9qZWN0SW1hZ2VJZCB9KSB7XG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBkYXRhOiBnbG9iYWxVc2VycyA9IFtdIH0gPSB1c2VRdWVyeShRVUVSWV9LRVlTLkdMT0JBTF9VU0VSUywgZmV0Y2hHb2JhbFVzZXJzKTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyBpbWFnZSwgaWQ6IHBoYXNlSWQsIGNvbW1lbnRzIH0gPSBwaGFzZXNbcGhhc2VzLmxlbmd0aCAtIDFdIHx8IHt9O1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgcmV2aWV3UmVmID0gdXNlUmVmKCk7XG5cblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW21hcmtlclBvcywgc2V0TWFya2VyUG9zXSA9IHVzZVN0YXRlKCk7XG5cdGNvbnN0IFtib3hPcGVuLCBzZXRCb3hPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlQm94ID0gKCkgPT4ge1xuXHRcdHNldEJveE9wZW4oIWJveE9wZW4pO1xuXHRcdHNldE1hcmtlclBvcyhudWxsKTtcblx0fTtcblxuXHRjb25zdCBwb3NNYXJrZXIgPSAoeyBjbGllbnRYLCBjbGllbnRZIH0pID0+IHtcblx0XHRjb25zdCByZXZpZXdQb3MgPSByZXZpZXdSZWY/LmN1cnJlbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHRzZXRNYXJrZXJQb3MoKCkgPT4ge1xuXHRcdFx0Y29uc3QgeFBlcmNlbnQgPSAoKGNsaWVudFggLSBjdXJzb3JPZmZzZXQpIC8gcmV2aWV3UG9zLndpZHRoKSAqIDEwMDtcblx0XHRcdGNvbnN0IHlQZXJjZW50ID0gKChjbGllbnRZIC0gcmV2aWV3UG9zLnRvcCAtIGN1cnNvck9mZnNldCkgLyByZXZpZXdQb3MuaGVpZ2h0KSAqIDEwMDtcblxuXHRcdFx0cmV0dXJuIHsgeFBlcmNlbnQsIHlQZXJjZW50LCByZXZpZXdQb3MgfTtcblx0XHR9KTtcblxuXHRcdHNldEJveE9wZW4odHJ1ZSk7XG5cdH07XG5cblx0LyogcmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiByZWY9e3Jldmlld1JlZn0gY2xhc3NOYW1lPVwicmV2aWV3IHBvc2l0aW9uLXJlbGF0aXZlIG14LW4xMiBtYi1uMTIgbXQtMTJcIj5cblx0XHRcdDxpbWdcblx0XHRcdFx0Y2xhc3NOYW1lPVwicmV2aWV3X19pbWFnZSBpbWctZmx1aWQgdy0xMDBcIlxuXHRcdFx0XHRzcmM9e2ltYWdlLm9yaWdpbmFsfVxuXHRcdFx0XHRzcmNTZXQ9e2Ake2ltYWdlLm9yaWdpbmFsfSAyeGB9XG5cdFx0XHRcdGFsdD17dGl0bGV9XG5cdFx0XHRcdG9uQ2xpY2s9e3Bvc01hcmtlcn1cblx0XHRcdC8+XG5cdFx0XHR7Y29tbWVudHMubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRjb21tZW50cy5tYXAoKGNvbW1lbnQsIGNvbW1lbnRJbmRleCkgPT4gKFxuXHRcdFx0XHRcdDxQcm9qZWN0UmV2aWV3Q29tbWVudFxuXHRcdFx0XHRcdFx0a2V5PXtjb21tZW50SW5kZXh9XG5cdFx0XHRcdFx0XHR7Li4ueyAuLi5jb21tZW50LCBjb21tZW50SW5kZXgsIHJldmlld1JlZiwgZ2xvYmFsVXNlcnMgfX1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQpKX1cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHttYXJrZXJQb3MgJiYgKFxuXHRcdFx0XHRcdDxQcm9qZWN0UmV2aWV3TWFya2VyIHsuLi57IC4uLm1hcmtlclBvcywgY29tbWVudEluZGV4OiBudWxsIH19PlxuXHRcdFx0XHRcdFx0PFByb2plY3RSZXZpZXdDb21tZW50Qm94IHsuLi57IG1hcmtlclBvcywgYm94T3BlbiwgdG9nZ2xlQm94LCBwaGFzZUlkLCBwcm9qZWN0SW1hZ2VJZCB9fSAvPlxuXHRcdFx0XHRcdDwvUHJvamVjdFJldmlld01hcmtlcj5cblx0XHRcdFx0KX1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCBQcm9qZWN0UmV2aWV3TWFya2VyIGZyb20gJy4vUHJvamVjdFJldmlld01hcmtlcic7XG5cbi8qIFNlcnZpY2VzICovXG5pbXBvcnQgeyBjYWxjQ29tbWVudFBvcyB9IGZyb20gJy4vc2VydmljZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3Q29tbWVudCh7IGF1dGhvciwgY29tbWVudCwgcG9zaXRpb24sIGNvbW1lbnRJbmRleCwgcmV2aWV3UmVmLCBnbG9iYWxVc2VycyB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IHhQZXJjZW50LCB5UGVyY2VudCB9ID0gcG9zaXRpb247XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtib3hPcGVuLCBzZXRCb3hPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlQm94ID0gKCkgPT4gc2V0Qm94T3BlbighYm94T3Blbik7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PFByb2plY3RSZXZpZXdNYXJrZXJcblx0XHRcdHsuLi57XG5cdFx0XHRcdHhQZXJjZW50LFxuXHRcdFx0XHR5UGVyY2VudCxcblx0XHRcdFx0YXV0aG9yLFxuXHRcdFx0XHRjb21tZW50SW5kZXg6IGNvbW1lbnRJbmRleCArIDEsXG5cdFx0XHRcdGNvbW1lbnRPcGVuOiBib3hPcGVuLFxuXHRcdFx0XHR0b2dnbGVDb21tZW50OiB0b2dnbGVCb3gsXG5cdFx0XHR9fT5cblx0XHRcdHtib3hPcGVuICYmIDxDb21tZW50IHsuLi57IGNvbW1lbnQsIGF1dGhvciwgYm94T3BlbiwgdG9nZ2xlQm94LCBwb3NpdGlvbiwgcmV2aWV3UmVmLCBnbG9iYWxVc2VycyB9fSAvPn1cblx0XHQ8L1Byb2plY3RSZXZpZXdNYXJrZXI+XG5cdCk7XG59XG5cbmNvbnN0IENvbW1lbnQgPSAoeyBjb21tZW50LCBhdXRob3IsIGJveE9wZW4sIHRvZ2dsZUJveCwgcG9zaXRpb24sIHJldmlld1JlZiwgZ2xvYmFsVXNlcnMgfSkgPT4ge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgdGl0bGUgPSBhdXRob3IuZGlzcGxheTtcblx0Y29uc3Qgc3VidGl0bGUgPSBhdXRob3Iub3JnYW5pc2F0aW9uO1xuXG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFt0cmFuc2Zvcm1lZFBvcywgc2V0VHJhbnNmb3JtZWRQb3NdID0gdXNlU3RhdGUocG9zaXRpb24pO1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgYm94UmVmID0gdXNlUmVmKCk7XG5cblx0LyogRWZmZWN0cyAqL1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChwb3NpdGlvbikge1xuXHRcdFx0c2V0VHJhbnNmb3JtZWRQb3MoKCkgPT4ge1xuXHRcdFx0XHRwb3NpdGlvbi5yZXZpZXdQb3MgPSByZXZpZXdSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0cmV0dXJuIGNhbGNDb21tZW50UG9zKGJveFJlZiwgcG9zaXRpb24pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCBbcG9zaXRpb25dKTtcblxuXHRjb25zdCByZW5kZXJDb21tZW50ID0gKCkgPT4ge1xuXHRcdGNvbnN0IHVzZXJzUmVnZXggPSAvQFxcW1teXFxdXSpcXF1cXHtbMC05XStcXH0vZ2k7XG5cdFx0Y29uc3QgdXNlcnNBcnJheSA9IFsuLi5jb21tZW50Lm1hdGNoQWxsKHVzZXJzUmVnZXgpXTtcblx0XHRjb25zdCBjb21tZW50cyA9IGNvbW1lbnQuc3BsaXQoL0BcXFtbXlxcXV0qXFxdXFx7WzAtOV0rXFx9L2dpKTtcblxuXHRcdHJldHVybiAoXG5cdFx0XHQ8cD5cblx0XHRcdFx0e2NvbW1lbnRzLm1hcCgoY29tbWVudCwgY29tbWVudEluZGV4KSA9PiB7XG5cdFx0XHRcdFx0bGV0IHVzZXI7XG5cblx0XHRcdFx0XHRpZiAoY29tbWVudEluZGV4IGluIHVzZXJzQXJyYXkpIHtcblx0XHRcdFx0XHRcdHVzZXIgPSBnbG9iYWxVc2Vycy5maW5kKCh1c2VyKSA9PiB1c2Vyc0FycmF5W2NvbW1lbnRJbmRleF1bMF0uaW5jbHVkZXModXNlci5kaXNwbGF5KSk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDw+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIGtleT17Y29tbWVudH0+e2Ake2NvbW1lbnR9IGB9PC9zcGFuPnsnICd9XG5cdFx0XHRcdFx0XHRcdHt1c2VyICYmIChcblx0XHRcdFx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW5cblx0XHRcdFx0XHRcdFx0XHRcdFx0a2V5PXt1c2VyLmlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJtZW50aW9uc19fbWVudGlvbiBweC0xXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgJy0tdGhlbWUnOiB1c2VyLnVzZXJDb2xvciB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+QHt1c2VyLmRpc3BsYXl9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPnsnICd9XG5cdFx0XHRcdFx0XHRcdFx0PC8+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KX1cblx0XHRcdDwvcD5cblx0XHQpO1xuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxCb3hcblx0XHRcdHJlbmRlck9uQm9keT17ZmFsc2V9XG5cdFx0XHRhbmltYXRlPXtmYWxzZX1cblx0XHRcdGV4dGVuc2lvbkNsYXNzZXM9XCJyZXZpZXdfX2JveFwiXG5cdFx0XHR7Li4ueyB0aXRsZSwgc3VidGl0bGUsIGJveE9wZW4sIHRvZ2dsZUJveCwgdXNlcjogYXV0aG9yLCBwb3NpdGlvbjogdHJhbnNmb3JtZWRQb3MsIGJveFJlZiB9fT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uXCI+XG5cdFx0XHRcdHtyZW5kZXJDb21tZW50KCl9XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtdC0yXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNjAgbWItMCBoci0yIHRleHQtLXNtXCI+MyBkYXlzIGFnbzwvcD5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS04MCBtYi0wIGhyLTIgdGV4dC0tc21cIj43IHBlb3BsZSBhZ3JlZTwvcD5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS04MCBtYi0wIGhyLTIgdGV4dC0tc21cIj5yZXBseTwvcD5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0JveD5cblx0KTtcbn07XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEJveCwgQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IFByb2plY3RSZXZpZXdDb21tZW50TWVudGlvbnMgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3Q29tbWVudE1lbnRpb25zJztcblxuLyogU2VydmljZXMgKi9cbmltcG9ydCB7IGNhbGNDb21tZW50UG9zIH0gZnJvbSAnLi9zZXJ2aWNlcyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IFFVRVJZX0tFWVMsIGFkZENvbW1lbnQgfSBmcm9tICcuLi8uLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3Q29tbWVudEJveCh7IG1hcmtlclBvcywgYm94T3BlbiwgdG9nZ2xlQm94LCBwaGFzZUlkLCBwcm9qZWN0SW1hZ2VJZCB9KSB7XG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgZm9ybVJlZiA9IHVzZVJlZigpO1xuXHRjb25zdCBib3hSZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbY29tbWVudCwgc2V0Q29tbWVudF0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFttZW50aW9ucywgc2V0TWVudGlvbnNdID0gdXNlU3RhdGUoW10pO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB0aXRsZSA9ICdBZGQgYSBjb21tZW50Jztcblx0Y29uc3QgcG9zaXRpb24gPSBjYWxjQ29tbWVudFBvcyhib3hSZWYsIG1hcmtlclBvcyk7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBjdXJyZW50VXNlcjogdXNlciB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBhZGRDb21tZW50TXV0YXRpb24gPSB1c2VNdXRhdGlvbihhZGRDb21tZW50LCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0lNQUdFX0JZX0lELCBwYXJzZUludChwcm9qZWN0SW1hZ2VJZCldKTtcblx0XHRcdHRvZ2dsZUJveCgpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIENvbXBvbmVudHMgKi9cblx0Y29uc3QgU3VidGl0bGVDb21wb25lbnQgPSAoKSA9PiAoXG5cdFx0PHNwYW4gY2xhc3NOYW1lPVwibXQtMSB0ZXh0LS1tZFwiPlxuXHRcdFx0Q29tbWVudCBvciA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LXNlY29uZGFyeVwiPiBAbWVudGlvbiA8L3NwYW4+IHNvbWVvbmVcblx0XHQ8L3NwYW4+XG5cdCk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PEJveFxuXHRcdFx0cmVuZGVyT25Cb2R5PXtmYWxzZX1cblx0XHRcdGV4dGVuc2lvbkNsYXNzZXM9XCJyZXZpZXdfX2JveFwiXG5cdFx0XHR7Li4ueyB0aXRsZSwgU3VidGl0bGVDb21wb25lbnQsIGJveE9wZW4sIHRvZ2dsZUJveCwgcG9zaXRpb24sIHVzZXIsIGJveFJlZiB9fT5cblx0XHRcdDxmb3JtXG5cdFx0XHRcdHJlZj17Zm9ybVJlZn1cblx0XHRcdFx0Y2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LWdyb3ctMVwiXG5cdFx0XHRcdG9uU3VibWl0PXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdGFkZENvbW1lbnRNdXRhdGlvbi5tdXRhdGUoe1xuXHRcdFx0XHRcdFx0dXNlcklkOiB1c2VyLmlkLFxuXHRcdFx0XHRcdFx0cGhhc2VJZDogcGhhc2VJZCxcblx0XHRcdFx0XHRcdGNvbW1lbnQ6IGNvbW1lbnQudHJpbSgpLFxuXHRcdFx0XHRcdFx0bWVudGlvbmVkOiBtZW50aW9ucyxcblx0XHRcdFx0XHRcdHBvc2l0aW9uOiBtYXJrZXJQb3MsXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH19PlxuXHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJjb21tZW50XCI+XG5cdFx0XHRcdFx0e3RpdGxlfVxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIHctMTAwXCI+XG5cdFx0XHRcdFx0PFByb2plY3RSZXZpZXdDb21tZW50TWVudGlvbnMgey4uLnsgY29tbWVudCwgc2V0Q29tbWVudCwgbWVudGlvbnMsIHNldE1lbnRpb25zIH19IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0dGl0bGU9XCJTdWJtaXRcIlxuXHRcdFx0XHRcdGV4dGVuc2lvbkNsYXNzZXM9XCJtdC00IHctNTAganVzdGlmeS1jb250ZW50LWNlbnRlclwiXG5cdFx0XHRcdFx0dHlwZT1cInN1Ym1pdFwiXG5cdFx0XHRcdFx0ey4uLnsgaXNMb2FkaW5nOiBhZGRDb21tZW50TXV0YXRpb24uaXNMb2FkaW5nIH19XG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Zvcm0+XG5cdFx0PC9Cb3g+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgTWVudGlvbnNJbnB1dCwgTWVudGlvbiB9IGZyb20gJ3JlYWN0LW1lbnRpb25zJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkVXNlckljb24gZnJvbSAnaWNvbnMvYWRkX3VzZXIuc3ZnJztcblxuLyogU2VydmljZXMgKi9cbmltcG9ydCBzdHlsZU1lbnRpb25zIGZyb20gJy4vc2VydmljZXMvc3R5bGVNZW50aW9uJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBRVUVSWV9LRVlTLCBmZXRjaEdvYmFsVXNlcnMgfSBmcm9tICcuLi8uLi9hcGknO1xuaW1wb3J0IHsgVXNlckF2YXRhciwgVXNlckluZm8gfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3VzZXJzL1VzZXInO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3Q29tbWVudE1lbnRpb25zKHsgY29tbWVudCwgc2V0Q29tbWVudCwgbWVudGlvbnMsIHNldE1lbnRpb25zIH0pIHtcblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGRhdGE6IGdsb2JhbFVzZXJzID0gW10gfSA9IHVzZVF1ZXJ5KFFVRVJZX0tFWVMuR0xPQkFMX1VTRVJTLCBmZXRjaEdvYmFsVXNlcnMpO1xuXG5cdC8qIEVmZmVjdHMgKi9cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRpZiAobWVudGlvbnMubGVuZ3RoID4gMCkgc3R5bGVNZW50aW9ucyhnbG9iYWxVc2Vycyk7XG5cdH0sIFttZW50aW9uc10pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8TWVudGlvbnNJbnB1dFxuXHRcdFx0XHR2YWx1ZT17Y29tbWVudH1cblx0XHRcdFx0Y2xhc3NOYW1lPVwibWVudGlvbnNcIlxuXHRcdFx0XHRpZD1cImNvbW1lbnRcIlxuXHRcdFx0XHRuYW1lPVwiY29tbWVudFwiXG5cdFx0XHRcdHBsYWNlaG9sZGVyPVwiU2F5IHNvbWV0aGluZyBuaWNlLi4uXCJcblx0XHRcdFx0YXV0b0ZvY3VzXG5cdFx0XHRcdG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldENvbW1lbnQoZXZlbnQudGFyZ2V0LnZhbHVlKX1cblx0XHRcdFx0b25DbGljaz17KCkgPT4gc3R5bGVNZW50aW9ucyhnbG9iYWxVc2Vycyl9PlxuXHRcdFx0XHQ8TWVudGlvblxuXHRcdFx0XHRcdHRyaWdnZXI9XCJAXCJcblx0XHRcdFx0XHRkYXRhPXtnbG9iYWxVc2Vyc31cblx0XHRcdFx0XHRyZW5kZXJTdWdnZXN0aW9uPXtTdWdnZXN0aW9ufVxuXHRcdFx0XHRcdGFsbG93U3BhY2VJblF1ZXJ5XG5cdFx0XHRcdFx0YXBwZW5kU3BhY2VPbkFkZFxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cIm1lbnRpb25zX19tZW50aW9uXCJcblx0XHRcdFx0XHRkaXNwbGF5VHJhbnNmb3JtPXsoXywgbmFtZSkgPT4gYCBAJHtuYW1lfSBgfVxuXHRcdFx0XHRcdG1hcmt1cD1cIkBbX19kaXNwbGF5X19de19faWRfX31cIlxuXHRcdFx0XHRcdG9uQWRkPXsoaWQpID0+IHNldE1lbnRpb25zKChtZW50aW9ucykgPT4gWy4uLm1lbnRpb25zLCBpZF0pfVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9NZW50aW9uc0lucHV0PlxuXHRcdDwvPlxuXHQpO1xufVxuXG4vKiBDdXN0b20gU3VnZ2VzdGlvbiAqL1xuY29uc3QgU3VnZ2VzdGlvbiA9IChlbnRyeSwgcXVlcnksIGhpZ2hsaWdodGVkLCBpbmRleCwgZm9jdXNlZCkgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT1cIm1lbnRpb25fX3N1Z2dlc3Rpb24gdnItM1wiPlxuXHRcdDxidXR0b24gY2xhc3NOYW1lPXtgdXNlciB1c2VyLS1zZWxlY3QgdXNlci0teGwgJHtmb2N1c2VkICYmICdpcy1mb2N1c2VkJ31gfSB0eXBlPVwiYnV0dG9uXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0PFVzZXJBdmF0YXIgey4uLmVudHJ5fSAvPlxuXHRcdFx0XHQ8VXNlckluZm8gey4uLmVudHJ5fSAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInVzZXJfX2FkZCB0ZXh0LXNlY29uZGFyeSByb3VuZGVkLWNpcmNsZSBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19hZGQtaWNvbiBpY29uIGljb24tLTEyIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXthZGRVc2VySWNvbn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2J1dHRvbj5cblx0PC9kaXY+XG4pO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEVkaXRhYmxlIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBzdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGVkaXRQcm9qZWN0SW1hZ2UsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmV2aWV3SGVhZGVyKHsgaWQsIHRpdGxlLCBkZXNjcmlwdGlvbiB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoc3RhdGljQ29udGV4dCk7XG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgbXV0YXRpb25PblN1Y2Nlc3MgPSAoKSA9PiB7XG5cdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9JTUFHRV9CWV9JRCwgaWRdKTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi02XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wteGwtNlwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7dXNlclJvbGUgPT09ICdhZG1pbicgJiYgJ2VkaXRhYmxlJ30gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yYH0+XG5cdFx0XHRcdFx0PEVkaXRhYmxlXG5cdFx0XHRcdFx0XHRpbnB1dFR5cGU9XCJ0aXRsZVwiXG5cdFx0XHRcdFx0XHRwcm9qZWN0SWQ9e2lkfVxuXHRcdFx0XHRcdFx0Y29udGVudD17dGl0bGV9XG5cdFx0XHRcdFx0XHRtdXRhdGlvbj17ZWRpdFByb2plY3RJbWFnZX1cblx0XHRcdFx0XHRcdG11dGF0aW9uSWQ9e2lkfVxuXHRcdFx0XHRcdFx0ey4uLnsgbXV0YXRpb25PblN1Y2Nlc3MgfX0+XG5cdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwiaDUgbWItMCB0ZXh0LXdoaXRlXCI+e3RpdGxlID8gdGl0bGUgOiAnQWRkIGEgbmljZSB0aXRsZSd9PC9oMT5cblx0XHRcdFx0XHQ8L0VkaXRhYmxlPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3VzZXJSb2xlID09PSAnYWRtaW4nICYmICdlZGl0YWJsZSd9IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMmB9PlxuXHRcdFx0XHRcdDxFZGl0YWJsZVxuXHRcdFx0XHRcdFx0aW5wdXRUeXBlPVwiZGVzY3JpcHRpb25cIlxuXHRcdFx0XHRcdFx0Y29udGVudD17ZGVzY3JpcHRpb259XG5cdFx0XHRcdFx0XHRtdXRhdGlvbj17ZWRpdFByb2plY3RJbWFnZX1cblx0XHRcdFx0XHRcdG11dGF0aW9uSWQ9e2lkfVxuXHRcdFx0XHRcdFx0ey4uLnsgbXV0YXRpb25PblN1Y2Nlc3MgfX0+XG5cdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS03MCBtYi0wXCI+XG5cdFx0XHRcdFx0XHRcdHtkZXNjcmlwdGlvbiA/IChcblx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57ZGVzY3JpcHRpb259PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTQwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRBZGQgYSBkZWNyaXB0aW9uIC0gdGhlIHB1cnBvc2UsIGNvbnRleHQsIG9iamVjdGl2ZXNcblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9FZGl0YWJsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDbGlja0F3YXlMaXN0ZW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lcic7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiwgU0NBTEVfRkFERSB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld01hcmtlcih7XG5cdHhQZXJjZW50LFxuXHR5UGVyY2VudCxcblx0YXV0aG9yLFxuXHRjb21tZW50SW5kZXggPSAxLFxuXHRjb21tZW50T3Blbixcblx0dG9nZ2xlQ29tbWVudCxcblx0Y2hpbGRyZW4sXG59KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cdGNvbnN0IHVzZXIgPSBhdXRob3IgPyBhdXRob3IgOiBjdXJyZW50VXNlcjtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8Q2xpY2tBd2F5TGlzdGVuZXJcblx0XHRcdG9uQ2xpY2tBd2F5PXsoKSA9PiB7XG5cdFx0XHRcdGlmIChjb21tZW50T3BlbikgdG9nZ2xlQ29tbWVudCgpO1xuXHRcdFx0fX0+XG5cdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRsYXlvdXRcblx0XHRcdFx0dHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC4yIH19XG5cdFx0XHRcdGNsYXNzTmFtZT1cInJldmlld19faW50ZXJhY3Rpb25cIlxuXHRcdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRcdCctLXgnOiB4UGVyY2VudCxcblx0XHRcdFx0XHQnLS15JzogeVBlcmNlbnQsXG5cdFx0XHRcdH19XG5cdFx0XHRcdHsuLi5GQURFX0lOfT5cblx0XHRcdFx0PG1vdGlvbi5idXR0b25cblx0XHRcdFx0XHR7Li4uU0NBTEVfRkFERX1cblx0XHRcdFx0XHRjbGFzc05hbWU9XCJyZXZpZXdfX21hcmtlciBpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnkgYnRuIGJ0bi1saW5rIHRleHQtcmVzZXRcIlxuXHRcdFx0XHRcdHN0eWxlPXt7ICctLXRoZW1lJzogYCR7dXNlci51c2VyQ29sb3J9YCB9fVxuXHRcdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZUNvbW1lbnR9PlxuXHRcdFx0XHRcdHtjb21tZW50SW5kZXggJiYgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0teHNcIj57Y29tbWVudEluZGV4fTwvc3Bhbj59XG5cdFx0XHRcdDwvbW90aW9uLmJ1dHRvbj5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdDwvQ2xpY2tBd2F5TGlzdGVuZXI+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RSZXZpZXdIZWFkZXIgfSBmcm9tICcuL1Byb2plY3RSZXZpZXdIZWFkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0UmV2aWV3Q2FudmFzIH0gZnJvbSAnLi9Qcm9qZWN0UmV2aWV3Q2FudmFzJztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGNDb21tZW50UG9zKGJveFJlZiwgbWFya2VyUG9zKSB7XG5cdGNvbnN0IG1hcmtlclNwYWNlciA9IDEwO1xuXHRjb25zdCBtYXJrZXJTaXplID0gMjA7XG5cdGNvbnN0IG9mZnNldCA9IG1hcmtlclNpemUgKyBtYXJrZXJTcGFjZXI7XG5cblx0LyogR2V0IHBvc2l0aW9uIG9mIG1hcmtlciAqL1xuXHRjb25zdCByZXZpZXdQb3MgPSBtYXJrZXJQb3MucmV2aWV3UG9zO1xuXHRjb25zdCB4UGVyY2VudCA9IE51bWJlcihtYXJrZXJQb3MueFBlcmNlbnQpO1xuXHRjb25zdCB5UGVyY2VudCA9IE51bWJlcihtYXJrZXJQb3MueVBlcmNlbnQpO1xuXG5cdC8qIEdldCBkaW1lbnNpb25zIG9mIGN1cnJlbnQgYm94ICovXG5cdGNvbnN0IHsgd2lkdGg6IGJveFdpZHRoID0gNDAwLCBoZWlnaHQ6IGJveEhlaWdodCA9IDIyOCB9ID0gYm94UmVmPy5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSB8fCB7fTtcblxuXHQvKiBHZXQgZGltZW5zaW9ucyBvZiBjdXJyZW50IHNjcmVlbiAqL1xuXHRjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRjb25zdCBib3hQZXJjZW50V2lkdGggPSAoYm94V2lkdGggLyBzY3JlZW5XaWR0aCkgKiAxMDA7XG5cblx0Y29uc3Qgc2NyZWVuSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gcmV2aWV3UG9zLnRvcDtcblx0Y29uc3QgYm94UGVyY2VudEhlaWdodCA9IChib3hIZWlnaHQgLyBzY3JlZW5IZWlnaHQpICogMTAwO1xuXG5cdC8qIFNldCB4IGFuZCB5IHZhbHVlcyB0byBwZXJjZW50YWdlIGVxdWl2ZWxlbnQgdG8gbWFrZSB0aGUgYm94IHJlc3BvbnNpdmUgKi9cblx0bGV0IGxlZnQgPSBvZmZzZXQ7XG5cdGxldCB0b3AgPSBvZmZzZXQ7XG5cblx0LyogQ29tcGVuc2F0ZSBmb3IgdGhlIGJveFdpZHRoIGlmIG1hcmtlciBpcyBhdCBlbmQgb2YgaG9yaXpvbnRhbCBzY3JlZW4gKi9cblx0aWYgKHhQZXJjZW50ICsgYm94UGVyY2VudFdpZHRoID4gMTAwKSB7XG5cdFx0bGVmdCA9IC1ib3hXaWR0aCAtIG1hcmtlclNwYWNlcjtcblx0fVxuXG5cdC8qIENvbXBlbnNhdGUgZm9yIHRoZSBib3hIZWlnaHQgaWYgbWFya2VyIGlzIGF0IGVuZCBvZiB2ZXJ0aWNhbCBzY3JlZW4gKi9cblx0aWYgKHlQZXJjZW50ICsgYm94UGVyY2VudEhlaWdodCA+IDEwMCkge1xuXHRcdHRvcCA9IC1ib3hIZWlnaHQgLSBtYXJrZXJTcGFjZXI7XG5cdH1cblxuXHRyZXR1cm4geyBsZWZ0OiBgJHtsZWZ0fXB4YCwgdG9wOiBgJHt0b3B9cHhgIH07XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGNhbGNDb21tZW50UG9zIH0gZnJvbSAnLi9jYWxjQ29tbWVudFBvcyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIHN0eWxlTWVudGlvbiB9IGZyb20gJy4vc3R5bGVNZW50aW9uJztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0eWxlTWVudGlvbnModXNlcnMpIHtcblx0Y29uc3QgbWVudGlvbk5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnRpb25zX19tZW50aW9uJykgfHwgW107XG5cblx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1lbnRpb25Ob2Rlcy5sZW5ndGg7IGluZGV4KyspIHtcblx0XHRjb25zdCBtZW50aW9uID0gbWVudGlvbk5vZGVzW2luZGV4XTtcblxuXHRcdGNvbnN0IG1lbnRpb25Jbm5lciA9IG1lbnRpb24uaW5uZXJIVE1MLnJlcGxhY2UoJ0AnLCAnJykudHJpbSgpO1xuXHRcdGNvbnN0IHVzZXJPZk1lbnRpb24gPSB1c2Vycy5maW5kKCh1c2VyKSA9PiB1c2VyLmRpc3BsYXkgPT09IG1lbnRpb25Jbm5lcik7XG5cblx0XHRtZW50aW9uLnN0eWxlLnNldFByb3BlcnR5KCctLXRoZW1lJywgdXNlck9mTWVudGlvbi51c2VyQ29sb3IpO1xuXHR9XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIHVzZVNlbGVjdGlvbiB9IGZyb20gJy4vdXNlU2VsZWN0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlUGFnZVRpdGxlIH0gZnJvbSAnLi91c2VQYWdlVGl0bGUnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1c2VTdG9yYWdlIH0gZnJvbSAnLi91c2VTdG9yYWdlJztcbiIsImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlUGFnZVRpdGxlKHRpdGxlLCB1cGRhdGVQcm9wcyA9IFtdKSB7XG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0ZG9jdW1lbnQudGl0bGUgPSBgJHt0aXRsZSA/IHRpdGxlICsgJyB8IFBhcmFsbGVsIERhc2hib2FyZCcgOiBkb2N1bWVudC50aXRsZX1gO1xuXHR9LCBbLi4udXBkYXRlUHJvcHNdKTtcbn1cbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTZWxlY3Rpb24oKSB7XG5cdGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoW10pO1xuXG5cdGNvbnN0IHVwZGF0ZVNlbGVjdGVkID0gKGlkKSA9PiB7XG5cdFx0c2V0U2VsZWN0ZWQoKHNlbGVjdGVkKSA9PiB7XG5cdFx0XHRpZiAoc2VsZWN0ZWQuaW5jbHVkZXMoaWQpKSB7XG5cdFx0XHRcdHJldHVybiBzZWxlY3RlZC5maWx0ZXIoKHNlbGVjdGVkSWQpID0+IHNlbGVjdGVkSWQgIT09IGlkKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFsuLi5zZWxlY3RlZCwgaWRdO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlc2V0U2VsZWN0ZWQgPSAoKSA9PiBzZXRTZWxlY3RlZChbXSk7XG5cblx0cmV0dXJuIHsgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkLCByZXNldFNlbGVjdGVkIH07XG59XG4iLCJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuLy8gSG9va1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdXNlU3RvcmFnZShrZXksIGluaXRpYWxWYWx1ZSwgc3RvcmFnZVR5cGUgPSAnc2Vzc2lvblN0b3JhZ2UnKSB7XG5cdC8vIFN0YXRlIHRvIHN0b3JlIG91ciB2YWx1ZVxuXHQvLyBQYXNzIGluaXRpYWwgc3RhdGUgZnVuY3Rpb24gdG8gdXNlU3RhdGUgc28gbG9naWMgaXMgb25seSBleGVjdXRlZCBvbmNlXG5cdGNvbnN0IFtzdG9yZWRWYWx1ZSwgc2V0U3RvcmVkVmFsdWVdID0gdXNlU3RhdGUoKCkgPT4ge1xuXHRcdHRyeSB7XG5cdFx0XHQvLyBHZXQgZnJvbSBsb2NhbCBzdG9yYWdlIGJ5IGtleVxuXHRcdFx0Y29uc3QgaXRlbSA9IHdpbmRvd1tzdG9yYWdlVHlwZV0uZ2V0SXRlbShrZXkpO1xuXG5cdFx0XHQvLyBJZiBubyBpdGVtIHZhbHVlIGFuZCBpbml0aWFsVmFsdWUgaXMgcHJlc2VudCwgc2V0IGFzIHZhbHVlXG5cdFx0XHRpZiAoaW5pdGlhbFZhbHVlICYmICFpdGVtKSB7XG5cdFx0XHRcdHdpbmRvd1tzdG9yYWdlVHlwZV0uc2V0SXRlbShrZXksIGluaXRpYWxWYWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFBhcnNlIHN0b3JlZCBqc29uIG9yIGlmIG5vbmUgcmV0dXJuIGluaXRpYWxWYWx1ZVxuXHRcdFx0cmV0dXJuIGl0ZW0gPyBKU09OLnBhcnNlKGl0ZW0pIDogaW5pdGlhbFZhbHVlO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHQvLyBJZiBlcnJvciBhbHNvIHJldHVybiBpbml0aWFsVmFsdWVcblx0XHRcdHJldHVybiBpbml0aWFsVmFsdWU7XG5cdFx0fVxuXHR9KTtcblx0Ly8gUmV0dXJuIGEgd3JhcHBlZCB2ZXJzaW9uIG9mIHVzZVN0YXRlJ3Mgc2V0dGVyIGZ1bmN0aW9uIHRoYXQgLi4uXG5cdC8vIC4uLiBwZXJzaXN0cyB0aGUgbmV3IHZhbHVlIHRvIHN0b3JhZ2UuXG5cdGNvbnN0IHNldFZhbHVlID0gKHZhbHVlKSA9PiB7XG5cdFx0dHJ5IHtcblx0XHRcdC8vIEFsbG93IHZhbHVlIHRvIGJlIGEgZnVuY3Rpb24gc28gd2UgaGF2ZSBzYW1lIEFQSSBhcyB1c2VTdGF0ZVxuXHRcdFx0Y29uc3QgdmFsdWVUb1N0b3JlID0gdmFsdWUgaW5zdGFuY2VvZiBGdW5jdGlvbiA/IHZhbHVlKHN0b3JlZFZhbHVlKSA6IHZhbHVlO1xuXHRcdFx0Ly8gU2F2ZSBzdGF0ZVxuXHRcdFx0c2V0U3RvcmVkVmFsdWUodmFsdWVUb1N0b3JlKTtcblx0XHRcdC8vIFNhdmUgdG8gbG9jYWwgc3RvcmFnZVxuXHRcdFx0d2luZG93W3N0b3JhZ2VUeXBlXS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWVUb1N0b3JlKSk7XG5cdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihlcnJvcik7XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gW3N0b3JlZFZhbHVlLCBzZXRWYWx1ZV07XG59XG4iLCIvLyBDU1NcbmltcG9ydCAnLi4vc2Nzcy9tYWluLnNjc3MnO1xuXG4vLyBQb2xseWZpbHNcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcblxuLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnO1xuXG4vKiBDbGllbnQgKi9cbmNvbnN0IGNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCh7XG5cdGRlZmF1bHRPcHRpb25zOiB7XG5cdFx0cXVlcmllczoge1xuXHRcdFx0cmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxuXHRcdH0sXG5cdH0sXG59KTtcblxuLyogUmVuZGVyICovXG5jb25zdCBhcHBOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpO1xuaWYgKGFwcE5vZGUgIT09IG51bGwpIHtcblx0cmVuZGVyKFxuXHRcdDxRdWVyeUNsaWVudFByb3ZpZGVyIHsuLi57IGNsaWVudCB9fT5cblx0XHRcdDxBcHAgLz5cblx0XHQ8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+LFxuXHRcdGFwcE5vZGVcblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgdXNlRm9ybSB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEFsZXJ0LCBIZWFkZXIsIEJhY2tncm91bmQsIEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG4vKiBTZXJ2aWNlcyAqL1xuaW1wb3J0IHsgZ2V0Um9sZSB9IGZyb20gJy4uL3NlcnZpY2VzJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gJy4uL2FwaSc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VQYWdlVGl0bGUgfSBmcm9tICcuLi9ob29rcyc7XG5cbi8qIFJvdXRlcyAqL1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi4vcm91dGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oeyBzZXRDdXJyZW50VXNlciwgc2V0VXNlclJvbGUgfSkge1xuXHQvKiBSZWZzICovXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBIb29rcyAqL1xuXHR1c2VQYWdlVGl0bGUoJ0xvZ2luJyk7XG5cdGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cdGNvbnN0IHtcblx0XHRyZWdpc3Rlcixcblx0XHRoYW5kbGVTdWJtaXQsXG5cdFx0Zm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuXHR9ID0gdXNlRm9ybSh7IHJlVmFsaWRhdGVNb2RlOiAnb25DaGFuZ2UnLCBtb2RlOiAnb25CbHVyJyB9KTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgbG9naW5NdXRhdGlvbiA9IHVzZU11dGF0aW9uKGxvZ2luLCB7XG5cdFx0b25TdWNjZXNzOiAodXNlcikgPT4ge1xuXHRcdFx0c2V0Q3VycmVudFVzZXIodXNlcik7XG5cdFx0XHRzZXRVc2VyUm9sZShnZXRSb2xlKHVzZXIpKTtcblxuXHRcdFx0dG9hc3QoPEFsZXJ0IG1lc3NhZ2U9XCJTdWNjZXNzZnVsbHkgbG9nZ2VkIGluIVwiIGFwcGVhcmFuY2U9XCJzdWNjZXNzXCIgLz4pO1xuXHRcdFx0aGlzdG9yeS5wdXNoKFJPVVRFUy5wcm9qZWN0cyk7XG5cdFx0fSxcblx0XHRvbkVycm9yOiAoZXJyb3IpID0+IHtcblx0XHRcdHRvYXN0KFxuXHRcdFx0XHQ8QWxlcnRcblx0XHRcdFx0XHRtZXNzYWdlPXtcblx0XHRcdFx0XHRcdGVycm9yPy5yZXNwb25zZT8uZGF0YT8uZXJyb3IgPyAnRW1haWwvcGFzc3dvcmQgY29tYmluYXRpb24gbm90IGZvdW5kIScgOiAnU29tZXRoaW5nIHdlbnQgd3JvbmchJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRhcHBlYXJhbmNlPVwiZGFuZ2VyXCJcblx0XHRcdFx0Lz5cblx0XHRcdCk7XG5cblx0XHRcdGVycm9ycy5lbWFpbCA9IHsgbWVzc2FnZTogJ0VtYWlsL3Bhc3N3b3JkIGNvbWJpbmF0aW9uIG5vdCBmb3VuZCcgfTtcblx0XHRcdGVycm9ycy5wYXNzd29yZCA9IHsgbWVzc2FnZTogJ0VtYWlsL3Bhc3N3b3JkIGNvbWJpbmF0aW9uIG5vdCBmb3VuZCcgfTtcblx0XHR9LFxuXHR9KTtcblxuXHRjb25zdCBvblN1Ym1pdCA9ICgpID0+IGxvZ2luTXV0YXRpb24ubXV0YXRlKHsgZm9ybVJlZiB9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XG5cdFx0XHRcdDxCYWNrZ3JvdW5kIC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZV9fcGFuZWwgcGFuZWwgcGFuZWwtLWxvZ2luXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsX19ib2R5XCI+XG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZSB0ZXh0LXdoaXRlIG1iLTBcIj5Mb2dpbjwvaDE+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTcwIHRleHQtd2hpdGUgbWItNlwiPkxvZ2luIHdpdGggeW91ciBlLW1haWwgYW5kIHBhc3N3b3JkPC9wPlxuXHRcdFx0XHRcdFx0XHQ8Zm9ybVxuXHRcdFx0XHRcdFx0XHRcdHJlZj17Zm9ybVJlZn1cblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJwYW5lbF9fZm9ybSBmb3JtXCJcblx0XHRcdFx0XHRcdFx0XHRvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX1cblx0XHRcdFx0XHRcdFx0XHRub1ZhbGlkYXRlPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwiaW5wdXRFbWFpbFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdEVtYWlsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJlbWFpbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7ZXJyb3JzLmVtYWlsICYmICdpcy1pbnZhbGlkJ31gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwiaW5wdXRFbWFpbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkVtYWlsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRhdXRvRm9jdXNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ2VtYWlsJywge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtlcnJvcnMuZW1haWwgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy5lbWFpbD8ubWVzc2FnZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ/IGVycm9ycy5lbWFpbC5tZXNzYWdlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDogJ1BsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsJ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwiaW5wdXRQYXNzd29yZFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFBhc3N3b3JkXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJwYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7ZXJyb3JzLnBhc3N3b3JkICYmICdpcy1pbnZhbGlkJ31gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwiaW5wdXRQYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ3Bhc3N3b3JkJywgeyByZXF1aXJlZDogdHJ1ZSB9KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy5wYXNzd29yZCAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3JzLnBhc3N3b3JkPy5tZXNzYWdlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gZXJyb3JzLnBhc3N3b3JkLm1lc3NhZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnUGxlYXNlIGVudGVyIGEgcGFzc3dvcmQnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlOiAnTG9nIGluJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoZW1lOiAnc2Vjb25kYXJ5Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNpemU6ICdtZCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRleHRlbnNpb25DbGFzc2VzOiAnYnRuLWJsb2NrIGp1c3RpZnktY29udGVudC1jZW50ZXInLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogJ3N1Ym1pdCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpc0xvYWRpbmc6IGxvZ2luTXV0YXRpb24uaXNMb2FkaW5nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXdoaXRlIGJ0bi1ibG9ja1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dG89e1JPVVRFUy5zaWdudXB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU9XCJzaWduIHVwXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYnRuX190ZXh0XCI+U2lnbiB1cDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQYWdlTG9hZGVyLCBQYWdlV3JhcHBlciB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCB7IFByb2plY3REZXRhaWxIZWFkZXIsIFByb2plY3REZXRhaWxJbWFnZXMgfSBmcm9tICcuLi9kb21haW4vcHJvamVjdC1kZXRhaWwnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGZldGNoUHJvamVjdEJ5SWQsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi9hcGknO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlUGFnZVRpdGxlIH0gZnJvbSAnLi4vaG9va3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0RGV0YWlsKCkge1xuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJZCB9ID0gdXNlUGFyYW1zKCk7XG5cdGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhID0ge30gfSA9IHVzZVF1ZXJ5KFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHBhcnNlSW50KHByb2plY3RJZCldLCAoKSA9PlxuXHRcdGZldGNoUHJvamVjdEJ5SWQoeyBwcm9qZWN0SWQgfSlcblx0KTtcblxuXHQvKiBIb29rcyAqL1xuXHR1c2VQYWdlVGl0bGUoZGF0YT8udGl0bGUsIFtkYXRhXSk7XG5cblx0LyogQ29uc3RhbnRzICAqL1xuXHRjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgdXNlcnMsIGlkLCBhdXRob3IsIGVtYWlsLCBwcm9qZWN0SW1hZ2VzIH0gPSBkYXRhO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxQYWdlV3JhcHBlcj5cblx0XHRcdDxQYWdlTG9hZGVyIHsuLi57IGlzTG9hZGluZyB9fT5cblx0XHRcdFx0PFByb2plY3REZXRhaWxIZWFkZXIgey4uLnsgdGl0bGUsIGRlc2NyaXB0aW9uLCB1c2VycywgaWQsIGF1dGhvciwgZW1haWwgfX0gLz5cblx0XHRcdFx0PFByb2plY3REZXRhaWxJbWFnZXMgey4uLnsgcHJvamVjdEltYWdlcywgcHJvamVjdElkOiBpZCB9fSAvPlxuXHRcdFx0PC9QYWdlTG9hZGVyPlxuXHRcdDwvUGFnZVdyYXBwZXI+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFBhZ2VMb2FkZXIsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IHsgUHJvamVjdFJlc3VsdHMsIFByb2plY3RBZGQgfSBmcm9tICcuLi9kb21haW4vcHJvamVjdC1vdmVydmlldyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGZldGNoUHJvamVjdHNCeVVzZXIsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi9hcGknO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlUGFnZVRpdGxlIH0gZnJvbSAnLi4vaG9va3MnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0T3ZlcnZpZXcoKSB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtuZXdQcm9qZWN0SWQsIHNldE5ld1Byb2plY3RJZF0gPSB1c2VTdGF0ZSgpO1xuXG5cdC8qIEhvb2tzICovXG5cdHVzZVBhZ2VUaXRsZSgnUHJvamVjdHMnKTtcblx0Y29uc3QgeyBjdXJyZW50VXNlciwgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGlzTG9hZGluZywgZGF0YTogcHJvamVjdHMgPSBbXSB9ID0gdXNlUXVlcnkoXG5cdFx0UVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIsXG5cdFx0KCkgPT4gZmV0Y2hQcm9qZWN0c0J5VXNlcih7IHVzZXJJZDogY3VycmVudFVzZXI/LmlkIH0pLFxuXHRcdHtcblx0XHRcdGVuYWJsZWQ6ICEhY3VycmVudFVzZXI/LmlkLFxuXHRcdH1cblx0KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8UGFnZVdyYXBwZXI+XG5cdFx0XHQ8UGFnZUxvYWRlciB7Li4ueyBpc0xvYWRpbmcgfX0+XG5cdFx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiA8UHJvamVjdEFkZCB7Li4ueyBzZXROZXdQcm9qZWN0SWQgfX0gLz59XG5cdFx0XHRcdDxQcm9qZWN0UmVzdWx0cyB7Li4ueyBwcm9qZWN0cywgbmV3UHJvamVjdElkIH19IC8+XG5cdFx0XHQ8L1BhZ2VMb2FkZXI+XG5cdFx0PC9QYWdlV3JhcHBlcj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQYWdlTG9hZGVyLCBQYWdlV3JhcHBlciB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCB7IFByb2plY3RSZXZpZXdDYW52YXMsIFByb2plY3RSZXZpZXdIZWFkZXIgfSBmcm9tICcuLi9kb21haW4vcHJvamVjdC1yZXZpZXcnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGZldGNoUHJvamVjdEltYWdlQnlJZCwgUVVFUllfS0VZUyB9IGZyb20gJy4uL2FwaSc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VQYWdlVGl0bGUgfSBmcm9tICcuLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXcoKSB7XG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBpZDogcHJvamVjdEltYWdlSWQgfSA9IHVzZVBhcmFtcygpO1xuXHRjb25zdCB7IGlzTG9hZGluZywgZGF0YSA9IHt9IH0gPSB1c2VRdWVyeShbUVVFUllfS0VZUy5QUk9KRUNUX0lNQUdFX0JZX0lELCBwYXJzZUludChwcm9qZWN0SW1hZ2VJZCldLCAoKSA9PlxuXHRcdGZldGNoUHJvamVjdEltYWdlQnlJZCh7IHByb2plY3RJbWFnZUlkIH0pXG5cdCk7XG5cblx0LyogSG9va3MgKi9cblx0dXNlUGFnZVRpdGxlKGRhdGE/LnRpdGxlLCBbZGF0YV0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxQYWdlV3JhcHBlcj5cblx0XHRcdDxQYWdlTG9hZGVyIHsuLi57IGlzTG9hZGluZyB9fT5cblx0XHRcdFx0PFByb2plY3RSZXZpZXdIZWFkZXIgey4uLmRhdGF9IC8+XG5cdFx0XHRcdDxQcm9qZWN0UmV2aWV3Q2FudmFzIHsuLi57IC4uLmRhdGEsIHByb2plY3RJbWFnZUlkIH19IC8+XG5cdFx0XHQ8L1BhZ2VMb2FkZXI+XG5cdFx0PC9QYWdlV3JhcHBlcj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5pbXBvcnQgeyB1c2VIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknO1xuaW1wb3J0IHsgdXNlRm9ybSwgdXNlV2F0Y2ggfSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBIZWFkZXIsIEJhY2tncm91bmQsIEFsZXJ0LCBCdXR0b24gfSBmcm9tICcuLi9jb21wb25lbnRzJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBzaWdudXAgfSBmcm9tICcuLi9hcGknO1xuXG4vKiBSb3V0ZXMgKi9cbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4uL3JvdXRlcyc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VQYWdlVGl0bGUgfSBmcm9tICcuLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ251cCh7IHNldEN1cnJlbnRVc2VyIH0pIHtcblx0LyogUmVmcyAqL1xuXHRjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cblx0LyogSG9va3MgKi9cblx0dXNlUGFnZVRpdGxlKCdTaWdudXAnKTtcblx0Y29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcblxuXHRjb25zdCB7XG5cdFx0cmVnaXN0ZXIsXG5cdFx0aGFuZGxlU3VibWl0LFxuXHRcdGZvcm1TdGF0ZTogeyBlcnJvcnMgfSxcblx0XHRjb250cm9sLFxuXHR9ID0gdXNlRm9ybSh7IHJlVmFsaWRhdGVNb2RlOiAnb25DaGFuZ2UnLCBtb2RlOiAnb25CbHVyJyB9KTtcblxuXHRjb25zdCBwbGFpblBhc3N3b3JkID0gdXNlV2F0Y2goe1xuXHRcdGNvbnRyb2wsXG5cdFx0bmFtZTogJ3BsYWluUGFzc3dvcmQnLFxuXHRcdGRlZmF1bHRWYWx1ZTogJycsXG5cdH0pO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBzaWdudXBNdXRhdGlvbiA9IHVzZU11dGF0aW9uKHNpZ251cCwge1xuXHRcdG9uU3VjY2VzczogKHVzZXIpID0+IHtcblx0XHRcdHNldEN1cnJlbnRVc2VyKHVzZXIpO1xuXHRcdFx0dG9hc3QoPEFsZXJ0IG1lc3NhZ2U9XCJTdWNjZXNzZnVsbHkgbG9nZ2VkIGluIVwiIGFwcGVhcmFuY2U9XCJzdWNjZXNzXCIgLz4pO1xuXHRcdFx0aGlzdG9yeS5wdXNoKFJPVVRFUy5wcm9qZWN0cyk7XG5cdFx0fSxcblx0XHRvbkVycm9yOiAoZXJyb3IpID0+IHtcblx0XHRcdGlmIChlcnJvci5yZXNwb25zZS5zdGF0dXMgPT09IDUwMCkge1xuXHRcdFx0XHR0b2FzdCg8QWxlcnQgbWVzc2FnZT1cIlRoaXMgZW1haWwgaXMgYWxyZWFkeSBpbiB1c2UhXCIgYXBwZWFyYW5jZT1cImRhbmdlclwiIC8+KTtcblxuXHRcdFx0XHRmb3JtUmVmLmN1cnJlbnQucmVzZXQoKTtcblx0XHRcdH1cblx0XHR9LFxuXHR9KTtcblxuXHRjb25zdCBvblN1Ym1pdCA9ICgpID0+IHNpZ251cE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYgfSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxIZWFkZXIgLz5cblx0XHRcdDxtYWluIGNsYXNzTmFtZT1cIm1haW4tY29udGVudFwiPlxuXHRcdFx0XHQ8QmFja2dyb3VuZCAvPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVfX3BhbmVsIHBhbmVsIHBhbmVsLS1sb2dpblwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lbF9fYm9keVwiPlxuXHRcdFx0XHRcdFx0XHQ8aDEgY2xhc3NOYW1lPVwidGV4dC11cHBlcmNhc2UgdGV4dC13aGl0ZSBtYi0wXCI+U2lnbiB1cDwvaDE+XG5cdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTcwIHRleHQtd2hpdGUgbWItNlwiPlNpZ24gdXAgd2l0aCB5b3VyIGUtbWFpbCBhbmQgcGFzc3dvcmQ8L3A+XG5cdFx0XHRcdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtmb3JtUmVmfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBhbmVsX19mb3JtIGZvcm0gbXQtNlwiXG5cdFx0XHRcdFx0XHRcdFx0b25TdWJtaXQ9e2hhbmRsZVN1Ym1pdChvblN1Ym1pdCl9XG5cdFx0XHRcdFx0XHRcdFx0bm9WYWxpZGF0ZT5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicmVnaXN0cmF0aW9uX2Zvcm1fdXNlcm5hbWVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRZb3VyIG5hbWVcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwicmVnaXN0cmF0aW9uX2Zvcm1fdXNlcm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJ1c2VybmFtZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7ZXJyb3JzLnVzZXJuYW1lICYmICdpcy1pbnZhbGlkJ31gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRnVsbCBuYW1lXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ3VzZXJuYW1lJywge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYSBuYW1lJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtlcnJvcnMudXNlcm5hbWUgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPntlcnJvcnMudXNlcm5hbWUubWVzc2FnZX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJyZWdpc3RyYXRpb25fZm9ybV9vcmdhbmlzYXRpb25cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRPcmdhbmlzYXRpb25cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwicmVnaXN0cmF0aW9uX2Zvcm1fb3JnYW5pc2F0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwib3JnYW5pc2F0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtlcnJvcnMub3JnYW5pc2F0aW9uICYmICdpcy1pbnZhbGlkJ31gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiT3JnYW5pc2F0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ29yZ2FuaXNhdGlvbicsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUGxlYXNlIGVudGVyIGFuIG9yZ2FuaXNhdGlvbicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3JzLm9yZ2FuaXNhdGlvbiAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e2Vycm9ycy5vcmdhbmlzYXRpb24ubWVzc2FnZX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicmVnaXN0cmF0aW9uX2Zvcm1fZW1haWxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRFbWFpbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJyZWdpc3RyYXRpb25fZm9ybV9lbWFpbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtlcnJvcnMuZW1haWwgJiYgJ2lzLWludmFsaWQnfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbWFpbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKCdlbWFpbCcsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUGxlYXNlIGVudGVyIGFuIGVtYWlsJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtlcnJvcnMuZW1haWwgJiYgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e2Vycm9ycy5lbWFpbC5tZXNzYWdlfTwvZGl2Pn1cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJyZWdpc3RyYXRpb25fZm9ybV9wbGFpblBhc3N3b3JkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UGFzc3dvcmRcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD1cInJlZ2lzdHJhdGlvbl9mb3JtX3BsYWluUGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwbGFpblBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtlcnJvcnMucGFzc3dvcmQgJiYgJ2lzLWludmFsaWQnfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKCdwbGFpblBhc3N3b3JkJywge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYSBwYXNzd29yZCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWluTGVuZ3RoOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiA2LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUGxlYXNlIGVudGVyIGEgcGFzc3dvcmQgb2YgYXRsZWFzdCA2IGNoYXJhY3RlcnMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy5wbGFpblBhc3N3b3JkICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj57ZXJyb3JzLnBsYWluUGFzc3dvcmQubWVzc2FnZX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJsb2dpbi1jb25maXJtLXBhc3N3b3JkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Q29uZmlybSBwYXNzd29yZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke2Vycm9ycy5wYXNzd29yZENvbmZpcm0gJiYgJ2lzLWludmFsaWQnfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJsb2dpbi1jb25maXJtLXBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkNvbmZpcm0gcGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZENvbmZpcm1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcigncGFzc3dvcmRDb25maXJtJywge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdQbGVhc2UgY29uZmlybSB5b3VyIHBhc3N3b3JkJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWxpZGF0ZTogKHZhbHVlKSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZSA9PT0gcGxhaW5QYXNzd29yZCB8fCAnVGhlIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2gnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3JzLnBhc3N3b3JkQ29uZmlybSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e2Vycm9ycy5wYXNzd29yZENvbmZpcm0ubWVzc2FnZX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ1NpZ24gdXAnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhlbWU6ICdzZWNvbmRhcnknLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2l6ZTogJ21kJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV4dGVuc2lvbkNsYXNzZXM6ICdidG4tYmxvY2sganVzdGlmeS1jb250ZW50LWNlbnRlcicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VibWl0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzTG9hZGluZzogc2lnbnVwTXV0YXRpb24uaXNMb2FkaW5nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXdoaXRlIGJ0bi1ibG9ja1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dG89e1JPVVRFUy5sb2dpbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT1cInNpZ24gdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJidG5fX3RleHRcIj5Mb2dpbjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTG9naW4gfSBmcm9tICcuL0xvZ2luJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2lnbnVwIH0gZnJvbSAnLi9TaWdudXAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0T3ZlcnZpZXcgfSBmcm9tICcuL1Byb2plY3RPdmVydmlldyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3REZXRhaWwgfSBmcm9tICcuL1Byb2plY3REZXRhaWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0UmV2aWV3IH0gZnJvbSAnLi9Qcm9qZWN0UmV2aWV3JztcbiIsIi8qIFBhZ2VzICovXG5pbXBvcnQgeyBQcm9qZWN0T3ZlcnZpZXcsIFByb2plY3REZXRhaWwsIFByb2plY3RSZXZpZXcsIExvZ2luLCBTaWdudXAgfSBmcm9tICcuL3BhZ2VzJztcblxuZXhwb3J0IGNvbnN0IFJPVVRFUyA9IHtcblx0bG9naW46ICcvJyxcblx0c2lnbnVwOiAnL3NpZ251cCcsXG5cdHByb2plY3RzOiAnL3Byb2plY3RzJyxcbn07XG5cbmNvbnN0IHJvdXRlcyA9IFtcblx0e1xuXHRcdG5hbWU6ICdsb2dpbicsXG5cdFx0cGF0aDogJy8nLFxuXHRcdGNvbXBvbmVudDogTG9naW4sXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnc2lnbnVwJyxcblx0XHRwYXRoOiAnL3NpZ251cCcsXG5cdFx0Y29tcG9uZW50OiBTaWdudXAsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAncHJvamVjdC1vdmVydmlldycsXG5cdFx0cGF0aDogJy9wcm9qZWN0cycsXG5cdFx0Y29tcG9uZW50OiBQcm9qZWN0T3ZlcnZpZXcsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAncHJvamVjdC1kZXRhaWwnLFxuXHRcdHBhdGg6ICcvcHJvamVjdHMvOmlkJyxcblx0XHRjb21wb25lbnQ6IFByb2plY3REZXRhaWwsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAncHJvamVjdC1yZXZpZXcnLFxuXHRcdHBhdGg6ICcvcHJvamVjdHMvOmlkL3Jldmlldy86aWQnLFxuXHRcdGNvbXBvbmVudDogUHJvamVjdFJldmlldyxcblx0fSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiIsImNvbnN0IFVTRVJfUk9MRVMgPSB7XG5cdFJPTEVfQURNSU46ICdST0xFX0FETUlOJyxcblx0Uk9MRV9VU0VSOiAnUk9MRV9VU0VSJyxcblx0Uk9MRV9VU0VSX0JBU0lDOiAnUk9MRV9VU0VSX0JBU0lDJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJvbGUoeyByb2xlcyB9KSB7XG5cdGlmIChyb2xlcy5pbmNsdWRlcyhVU0VSX1JPTEVTLlJPTEVfQURNSU4pKSByZXR1cm4gJ2FkbWluJztcblx0aWYgKHJvbGVzLmluY2x1ZGVzKFVTRVJfUk9MRVMuUk9MRV9VU0VSKSkgcmV0dXJuICd1c2VyJztcblx0aWYgKHJvbGVzLmluY2x1ZGVzKFVTRVJfUk9MRVMuUk9MRV9VU0VSX0JBU0lDKSkgcmV0dXJuICdiYXNpYyc7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGlzRW1haWwgfSBmcm9tICcuL2lzRW1haWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRSb2xlIH0gZnJvbSAnLi9nZXRSb2xlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVzaXplSW1hZ2VzIH0gZnJvbSAnLi9yZXNpemVJbWFnZSc7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0VtYWlsKGVtYWlsKSB7XG4gICAgcmV0dXJuIC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvLnRlc3QoZW1haWwpO1xufVxuIiwiaW1wb3J0IFJlc2l6ZXIgZnJvbSAncmVhY3QtaW1hZ2UtZmlsZS1yZXNpemVyJztcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG5cdG1heFdpZHRoOiAzMDAsXG5cdG1heEhlaWdodDogMzAwLFxuXHRxdWFsaXR5OiAxMDAsXG5cdHJvdGF0aW9uOiAwLFxuXHRvdXRwdXRUeXBlOiAnZmlsZScsXG59O1xuXG5hc3luYyBmdW5jdGlvbiByZXNpemVJbWFnZVR5cGUoaW1hZ2UsIG9wdGlvbnMpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0UmVzaXplci5pbWFnZUZpbGVSZXNpemVyKFxuXHRcdFx0aW1hZ2UsXG5cdFx0XHRvcHRpb25zLm1heFdpZHRoLFxuXHRcdFx0b3B0aW9ucy5tYXhIZWlnaHQsXG5cdFx0XHRpbWFnZS5wYXRoLnNwbGl0KCcuJykucG9wKCksXG5cdFx0XHRvcHRpb25zLnF1YWxpdHksXG5cdFx0XHRvcHRpb25zLnJvdGF0aW9uLFxuXHRcdFx0KHVyaSkgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKHVyaSk7XG5cdFx0XHR9LFxuXHRcdFx0b3B0aW9ucy5vdXRwdXRUeXBlXG5cdFx0KTtcblx0fSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlc2l6ZUltYWdlKGltYWdlKSB7XG5cdGNvbnN0IHRodW1ibmFpbCA9IGF3YWl0IHJlc2l6ZUltYWdlVHlwZShpbWFnZSwgeyAuLi5kZWZhdWx0T3B0aW9ucywgbWF4V2lkdGg6IDI2OCwgbWF4SGVpZ2h0OiAyMzYgfSk7XG5cdGNvbnN0IHRodW1ibmFpbFJldGluYSA9IGF3YWl0IHJlc2l6ZUltYWdlVHlwZShpbWFnZSwgeyAuLi5kZWZhdWx0T3B0aW9ucywgbWF4V2lkdGg6IDUzNiwgbWF4SGVpZ2h0OiA0NzIgfSk7XG5cblx0cmV0dXJuIHtcblx0XHRvcmlnaW5hbDogaW1hZ2UsXG5cdFx0dGh1bWJuYWlsOiB0aHVtYm5haWwsXG5cdFx0dGh1bWJuYWlsUmV0aW5hOiB0aHVtYm5haWxSZXRpbmEsXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlc2l6ZUltYWdlcyhpbWFnZXMpIHtcblx0cmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKFxuXHRcdGltYWdlcy5tYXAoYXN5bmMgKGltYWdlKSA9PiB7XG5cdFx0XHRyZXR1cm4gYXdhaXQgcmVzaXplSW1hZ2UoaW1hZ2UpO1xuXHRcdH0pXG5cdCk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9