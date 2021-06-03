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
  /* Constants */


  var userId = atob(window.location.search.replace('?', ''));
  /* Hooks */

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
  }), !currentUser && location.pathname === _routes__WEBPACK_IMPORTED_MODULE_10__["ROUTES"].projects && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], {
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
    }, _animations__WEBPACK_IMPORTED_MODULE_5__["FADE_IN"], {
      onClick: toggleBox
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
      key: "box-content",
      className: "box__content border p-5"
    }, animation), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "box__header d-flex align-items-start"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "d-flex align-items-center"
    }, user && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["User"], {
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
      src: icons_close_svg__WEBPACK_IMPORTED_MODULE_6___default.a
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

  var handleClick = function handleClick(email) {
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
      username: 'New user',
      userColor: '#CC25E8'
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
        username = _ref3.username;

    /* Only return users that match the query on email || username */
    return email.toLowerCase().includes(lowerQuery) || username.toLowerCase().includes(lowerQuery);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["LoadingWrapper"], {
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
    to: "/projects/".concat(projectId, "/review/").concat(projectImageId).concat(location.search),
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
    to: "projects/".concat(id).concat(location.search),
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
/* harmony import */ var _ProjectReviewMarker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectReviewMarker */ "./assets/app/js/domain/project-review/ProjectReviewMarker.jsx");
/* harmony import */ var _ProjectReviewComment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectReviewComment */ "./assets/app/js/domain/project-review/ProjectReviewComment.jsx");
/* harmony import */ var _ProjectReviewCommentBox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectReviewCommentBox */ "./assets/app/js/domain/project-review/ProjectReviewCommentBox.jsx");
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
    src: image.original,
    srcSet: "".concat(image.original, " 2x"),
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
/* harmony import */ var _services_calcCommentPos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/calcCommentPos */ "./assets/app/js/domain/project-review/services/calcCommentPos.js");
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
        return Object(_services_calcCommentPos__WEBPACK_IMPORTED_MODULE_3__["default"])(boxRef, position);
      });
    }
  }, [position]);
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
  }, comment);
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
/* harmony import */ var _material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components */ "./assets/app/js/components/index.js");
/* harmony import */ var _services_calcCommentPos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/calcCommentPos */ "./assets/app/js/domain/project-review/services/calcCommentPos.js");
/* harmony import */ var _context_mainContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context/mainContext */ "./assets/app/js/context/mainContext.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ "./assets/app/js/api/index.js");
/* Packages */



/* Components */


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
  /* Constants */

  var title = 'Add a comment';
  var position = Object(_services_calcCommentPos__WEBPACK_IMPORTED_MODULE_4__["default"])(boxRef, markerPos);
  /* Hooks */

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_5__["default"]),
      user = _useContext.currentUser;

  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQueryClient"])();
  /* Mutations */

  var addCommentMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_6__["addComment"], {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_6__["QUERY_KEYS"].PROJECT_IMAGE_BY_ID, parseInt(projectImageId)]);
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


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Box"], {
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
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    title: "Submit",
    extensionClasses: "mt-4 w-50 justify-content-center",
    type: "submit",
    isLoading: addCommentMutation.isLoading
  })));
}

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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../animations */ "./assets/app/js/animations/index.js");
/* harmony import */ var _context_mainContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/mainContext */ "./assets/app/js/context/mainContext.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */


/* Animations */


/* Context */


function ProjectReviewMarker(_ref) {
  var xPercent = _ref.xPercent,
      yPercent = _ref.yPercent,
      author = _ref.author,
      commentIndex = _ref.commentIndex,
      toggleComment = _ref.toggleComment,
      children = _ref.children;

  /* Hooks */
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context_mainContext__WEBPACK_IMPORTED_MODULE_3__["default"]),
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
  }, _animations__WEBPACK_IMPORTED_MODULE_2__["FADE_IN"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].button, _extends({}, _animations__WEBPACK_IMPORTED_MODULE_2__["SCALE_FADE"], {
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

/***/ "./assets/app/js/hooks/index.js":
/*!**************************************!*\
  !*** ./assets/app/js/hooks/index.js ***!
  \**************************************/
/*! exports provided: useSelection, usePageTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useSelection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useSelection */ "./assets/app/js/hooks/useSelection.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useSelection", function() { return _useSelection__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _usePageTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./usePageTitle */ "./assets/app/js/hooks/usePageTitle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usePageTitle", function() { return _usePageTitle__WEBPACK_IMPORTED_MODULE_1__["default"]; });




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvYmFja2dyb3VuZC1sb2dpbi5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvYmFja2dyb3VuZC1sb2dpbkAyeC5qcGciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX2ltYWdlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9hZGRfcHJvamVjdC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX3VzZXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2FyY2hpdmUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2NoZWNrLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9jbG9zZS13aGl0ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvY2xvc2Uuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2Rhbmdlci5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvZGVsZXRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9lZGl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9sZWF2ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvc3Rhci5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvc3VjY2Vzcy5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvdXBsb2FkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy93YXJuaW5nLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL0FwcC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9hbmltYXRpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvYXBpL2NvbW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9hcGkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9hcGkvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2FwaS9wcm9qZWN0SW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9hcGkvc2VjdXJpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9hcGkvdXNlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvYWN0aW9uLW1lbnUvQWN0aW9uTWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2FsZXJ0L0FsZXJ0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvYmFja2dyb3VuZC9CYWNrZ3JvdW5kLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvYm94L0JveC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2J1dHRvbi9CdXR0b24uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy9kcm9wem9uZS9Ecm9wem9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2VkaXRhYmxlL0VkaXRhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvZWRpdGFibGUvRWRpdGFibGVCb2R5LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvaGVhZGVyL0hlYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2hlYWRlci9IZWFkZXJOYXZpZ2F0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL2xvYWRpbmctd3JhcHBlci9Mb2FkaW5nV3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL21vZGFsL01vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvcGFnZS1sb2FkZXIvUGFnZUxvYWRlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3BhZ2Utd3JhcHBlci9QYWdlV3JhcHBlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3VzZXItYWRkL1VzZXJBZGQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy91c2VyLWFkZC9Vc2VyQWRkU2VhcmNoLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvdXNlci1hZGQvVXNlckFkZFNlYXJjaFJlc3VsdHMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy91c2VyLWFkZC9zZXJ2aWNlcy9maWx0ZXJVc2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2NvbXBvbmVudHMvdXNlcnMvVXNlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb21wb25lbnRzL3VzZXJzL1VzZXJTZWxlY3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvY29tcG9uZW50cy91c2Vycy9Vc2Vycy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9jb250ZXh0L21haW5Db250ZXh0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtZGV0YWlsL1Byb2plY3REZXRhaWxIZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtZGV0YWlsL1Byb2plY3REZXRhaWxJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1kZXRhaWwvUHJvamVjdERldGFpbEltYWdlcy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1kZXRhaWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1vdmVydmlldy9Qcm9qZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LW92ZXJ2aWV3L1Byb2plY3RBZGQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3Qtb3ZlcnZpZXcvUHJvamVjdEltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LW92ZXJ2aWV3L1Byb2plY3RNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1vdmVydmlldy9Qcm9qZWN0UmVzdWx0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1vdmVydmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3Q2FudmFzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL2RvbWFpbi9wcm9qZWN0LXJldmlldy9Qcm9qZWN0UmV2aWV3Q29tbWVudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9kb21haW4vcHJvamVjdC1yZXZpZXcvUHJvamVjdFJldmlld0NvbW1lbnRCb3guanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdIZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L1Byb2plY3RSZXZpZXdNYXJrZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvZG9tYWluL3Byb2plY3QtcmV2aWV3L3NlcnZpY2VzL2NhbGNDb21tZW50UG9zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvaG9va3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9ob29rcy91c2VQYWdlVGl0bGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9ob29rcy91c2VTZWxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcGFnZXMvTG9naW4uanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcGFnZXMvUHJvamVjdERldGFpbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9wYWdlcy9Qcm9qZWN0T3ZlcnZpZXcuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcGFnZXMvUHJvamVjdFJldmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9wYWdlcy9TaWdudXAuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9zZXJ2aWNlcy9nZXRSb2xlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvc2VydmljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9zZXJ2aWNlcy9pc0VtYWlsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvc2VydmljZXMvcmVzaXplSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJBcHAiLCJSb3V0ZXJCb2R5IiwidXNlU3RhdGUiLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwidXNlclJvbGUiLCJzZXRVc2VyUm9sZSIsInVzZXJJZCIsImF0b2IiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlcGxhY2UiLCJ1c2VMb2NhdGlvbiIsInVzZVF1ZXJ5IiwiUVVFUllfS0VZUyIsIkNVUlJFTlRfVVNFUiIsImZldGNoQ3VycmVudFVzZXIiLCJyZXRyeSIsIm9uU3VjY2VzcyIsInVzZXIiLCJnZXRSb2xlIiwiaXNMb2FkaW5nIiwiUk9VVEVTIiwibG9naW4iLCJzaWdudXAiLCJpbmNsdWRlcyIsInBhdGhuYW1lIiwicHJvamVjdHMiLCJyb3V0ZXMiLCJtYXAiLCJwYXRoIiwiQ29tcG9uZW50IiwiY29tcG9uZW50IiwicHJvcHMiLCJGQURFX0lOIiwiaGlkZVByb2dyZXNzQmFyIiwibmV3ZXN0T25Ub3AiLCJwb3NpdGlvbiIsImNsb3NlQnV0dG9uIiwiRUFTRSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImR1cmF0aW9uIiwiRkFERV9JTl9VUCIsInkiLCJ0eXBlIiwiZGFtcGluZyIsInN0aWZmbmVzcyIsIlRSQU5TRk9STV9VUCIsIlNDQUxFX0ZBREUiLCJzY2FsZSIsIlNUQUdHRVJfVVAiLCJpbmRleCIsImRlbGF5IiwiU1RBR0dFUl9MRUZUIiwieCIsImFkZENvbW1lbnQiLCJmb3JtUmVmIiwicGhhc2VJZCIsInBhcmFtcyIsIkZvcm1EYXRhIiwiY3VycmVudCIsImFwcGVuZCIsInhQZXJjZW50IiwieVBlcmNlbnQiLCJheGlvcyIsInBvc3QiLCJyZXN1bHQiLCJkYXRhIiwiUFJPSkVDVF9CWV9VU0VSIiwiUFJPSkVDVF9CWV9JRCIsIlBST0pFQ1RfSU1BR0VfQllfSUQiLCJHTE9CQUxfVVNFUlMiLCJmZXRjaFByb2plY3RzQnlVc2VyIiwiZ2V0IiwiZmV0Y2hQcm9qZWN0QnlJZCIsInByb2plY3RJZCIsImFkZFByb2plY3QiLCJkZWxldGVQcm9qZWN0cyIsInByb2plY3RJZHMiLCJmb3JFYWNoIiwiaWQiLCJsZWF2ZVByb2plY3RzIiwiZWRpdFByb2plY3QiLCJmZXRjaFByb2plY3RJbWFnZUJ5SWQiLCJwcm9qZWN0SW1hZ2VJZCIsImFkZFByb2plY3RJbWFnZXMiLCJpbWFnZXMiLCJpbWFnZSIsImltYWdlSW5kZXgiLCJvcmlnaW5hbCIsInRodW1ibmFpbCIsInRodW1ibmFpbFJldGluYSIsImRlbGV0ZVByb2plY3RJbWFnZXMiLCJwcm9qZWN0SW1hZ2VJZHMiLCJlZGl0UHJvamVjdEltYWdlIiwiZW1haWwiLCJwYXNzd29yZCIsImxvZ291dCIsInVybCIsImZldGNoR29iYWxVc2VycyIsImFkZFVzZXIiLCJkZWxldGVVc2VyIiwiQWN0aW9uTWVudSIsInNlbGVjdGVkIiwicmVzZXRTZWxlY3RlZCIsImFjdGlvbnMiLCJ1c2VDb250ZXh0IiwiU3RhdGljQ29udGV4dCIsImNsb3NlSWNvbiIsImxlbmd0aCIsImFjdGlvbkluZGV4IiwidGl0bGUiLCJ0aGVtZSIsImhhc1Blcm1pc3Npb24iLCJpY29uIiwiaWNvblNpemUiLCJtdXRhdGlvbiIsImxvYWRlckNsYXNzZXMiLCJhcHBlYXJhbmNlVHlwZXMiLCJ3YXJuaW5nIiwid2FybmluZ0ljb24iLCJkYW5nZXIiLCJlcnJvckljb24iLCJzdWNjZXNzIiwic3VjY2Vzc0ljb24iLCJBbGVydCIsIm1lc3NhZ2UiLCJhcHBlYXJhbmNlIiwiY2xvc2VUb2FzdCIsIkJhY2tncm91bmQiLCJiZyIsImJnUmV0aW5hIiwiQm94Iiwic3VidGl0bGUiLCJTdWJ0aXRsZUNvbXBvbmVudCIsImJveE9wZW4iLCJ0b2dnbGVCb3giLCJjaGlsZHJlbiIsInJlbmRlck9uQm9keSIsImJveFJlZiIsImV4dGVuc2lvbkNsYXNzZXMiLCJsZWZ0IiwidG9wIiwiYW5pbWF0aW9uIiwicmVuZGVyIiwiY3JlYXRlUG9ydGFsIiwiZG9jdW1lbnQiLCJib2R5IiwiQnV0dG9uIiwic2l6ZSIsIm9uQ2xpY2siLCJidXR0b25SZWYiLCJ1c2VSZWYiLCJidXR0b25IZWlnaHQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJoZWlnaHQiLCJEcm9wem9uZSIsInBvc2l0aXRpb24iLCJxdWVyeUNsaWVudCIsInVzZVF1ZXJ5Q2xpZW50IiwidXNlRHJvcHpvbmUiLCJhY2NlcHQiLCJub0NsaWNrIiwib25Ecm9wIiwiYWNjZXB0ZWRGaWxlcyIsInVwZGF0ZVByb2plY3RJbWFnZXMiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiaXNEcmFnQWN0aXZlIiwiYWRkUHJvamVjdEltYWdlc011dGF0aW9uIiwidXNlTXV0YXRpb24iLCJpbnZhbGlkYXRlUXVlcmllcyIsImRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbiIsImFjdGlvbiIsInJlc2l6ZUltYWdlcyIsInJlc2l6ZWRJbWFnZXMiLCJtdXRhdGUiLCJpc1BhcmVudERyYWdBY3RpdmUiLCJEcm9wem9uZUlubmVyIiwiYWRkSW1hZ2VMb2FkaW5nIiwibm9EcmFnRXZlbnRzQnViYmxpbmciLCJ1cGxvYWRJbWFnZUljb24iLCJhZGRJbWFnZUljb24iLCJFZGl0YWJsZSIsImlucHV0VHlwZSIsInJlc3QiLCJzZXRCb3hPcGVuIiwiZWRpdEljb24iLCJFZGl0YWJsZUJvZHkiLCJjb250ZW50IiwibXV0YXRpb25JZCIsIm11dGF0aW9uT25TdWNjZXNzIiwidmFsdWUiLCJzZXRWYWx1ZSIsImlucHV0UmVmIiwidXNlRWZmZWN0Iiwic2VsZWN0IiwiZWRpdE11dGF0aW9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIkhlYWRlciIsIkhlYWRlck5hdmlnYXRpb24iLCJoaXN0b3J5IiwidXNlSGlzdG9yeSIsImxvZ291dE11dGF0aW9uIiwicHVzaCIsInRvYXN0Iiwib25FcnJvciIsIkxvYWRpbmdXcmFwcGVyIiwibG9hZGluZyIsImxvYWRlclNpemUiLCJjbGFzc2VzIiwiZGVmYXVsdENsYXNzZXMiLCJNb2RhbCIsInRvZ2dsZU1vZGFsIiwiZG9tRWxlbWVudCIsInZhcmlhbnQiLCJQYWdlTG9hZGVyIiwiUGFnZVdyYXBwZXIiLCJVc2VyQWRkIiwidXNlcnMiLCJwcm9qZWN0IiwiYWRkVXNlckljb24iLCJVc2VyQWRkU2VhcmNoIiwicXVlcnkiLCJzZXRRdWVyeSIsImZvY3VzZWRVc2VyIiwic2V0Rm9jdXNlZFVzZXIiLCJnbG9iYWxVc2VycyIsImdsb2JhbFVzZXJzTG9hZGluZyIsImZpbHRlcmVkVXNlcnMiLCJmaWx0ZXJVc2VycyIsInF1ZXJ5UmVmIiwiYWRkVXNlck11dGF0aW9uIiwiaGFuZGxlQ2hhbmdlIiwiaGFuZGxlT25LZXlEb3duIiwia2V5IiwiaXNFbWFpbCIsImhhbmRsZUNsaWNrIiwidXNlck11dGF0aW9uTG9hZGluZyIsIlVzZXJBZGRTZWFyY2hSZXN1bHRzIiwicmVzdWx0cyIsIm5ld1VzZXIiLCJ1c2VybmFtZSIsInVzZXJDb2xvciIsInVzZXJJbmRleCIsImxvd2VyUXVlcnkiLCJ0b0xvd2VyQ2FzZSIsImV4aXN0aW5nVXNlcnNCeUVtYWlsIiwiZmlsdGVyIiwiVXNlciIsImF1dGhvciIsImlzQXV0aG9yIiwiam9pbiIsImRlbGV0ZVVzZXJNdXRhdGlvbiIsImRlbGV0ZUljb24iLCJzdGFySWNvbiIsIlVzZXJBdmF0YXIiLCJ1c2VySW5pdGlhbHMiLCJzcGxpdCIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsIlVzZXJJbmZvIiwiVXNlclNlbGVjdCIsImlzRm9jdXNlZCIsImhhbmRsZVN0YXR1cyIsIlVzZXJzIiwibGF5b3V0Iiwic2xpY2VBbW91bnQiLCJJbmZpbml0eSIsInNsaWNlIiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiUHJvamVjdERldGFpbEhlYWRlciIsImRlc2NyaXB0aW9uIiwic3RhdGljQ29udGV4dCIsIlByb2plY3REZXRhaWxJbWFnZSIsInByb2plY3RJbWFnZSIsInVwZGF0ZVNlbGVjdGVkIiwicGhhc2VzIiwiY2hlY2tJY29uIiwiUHJvamVjdERldGFpbEltYWdlcyIsInByb2plY3RJbWFnZXMiLCJ1c2VTZWxlY3Rpb24iLCJJbWFnZXMiLCJwcm9qZWN0SW1hZ2VJbmRleCIsIlByb2plY3QiLCJQcm9qZWN0QWRkIiwic2V0TmV3UHJvamVjdElkIiwic2V0UHJvamVjdElkIiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwiZW5hYmxlZCIsImFkZE11dGF0aW9uIiwiaW52YWxpZGF0ZVByb2plY3QiLCJzZXRUaW1lb3V0IiwidXBkYXRlUHJvamVjdCIsImFkZFByb2plY3RJY29uIiwiUHJvamVjdEltYWdlIiwiUHJvamVjdE1vZGFsIiwiRHJvcHpvbmVJbWFnZSIsInN0b3BQcm9wYWdhdGlvbiIsIlByb2plY3RSZXN1bHRzIiwibmV3UHJvamVjdElkIiwibGVhdmVQcm9qZWN0c011dGF0aW9uIiwiZGVsZXRlUHJvamVjdHNNdXRhdGlvbiIsImxlYXZlSWNvbiIsImFyY2hpdmVJY29uIiwicHJvamVjdEluZGV4IiwiY3Vyc29yT2Zmc2V0IiwiUHJvamVjdFJldmlld0NhbnZhcyIsImNvbW1lbnRzIiwicmV2aWV3UmVmIiwibWFya2VyUG9zIiwic2V0TWFya2VyUG9zIiwicG9zTWFya2VyIiwiY2xpZW50WCIsImNsaWVudFkiLCJyZXZpZXdQb3MiLCJ3aWR0aCIsImNvbW1lbnQiLCJjb21tZW50SW5kZXgiLCJQcm9qZWN0UmV2aWV3Q29tbWVudCIsInRvZ2dsZUNvbW1lbnQiLCJDb21tZW50IiwidHJhbnNmb3JtZWRQb3MiLCJzZXRUcmFuc2Zvcm1lZFBvcyIsImNhbGNDb21tZW50UG9zIiwiUHJvamVjdFJldmlld0NvbW1lbnRCb3giLCJhZGRDb21tZW50TXV0YXRpb24iLCJwYXJzZUludCIsIlByb2plY3RSZXZpZXdIZWFkZXIiLCJQcm9qZWN0UmV2aWV3TWFya2VyIiwibWFya2VyU3BhY2VyIiwibWFya2VyU2l6ZSIsIm9mZnNldCIsIk51bWJlciIsImJveFdpZHRoIiwiYm94SGVpZ2h0Iiwic2NyZWVuV2lkdGgiLCJpbm5lcldpZHRoIiwiYm94UGVyY2VudFdpZHRoIiwic2NyZWVuSGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJib3hQZXJjZW50SGVpZ2h0IiwidXNlUGFnZVRpdGxlIiwidXBkYXRlUHJvcHMiLCJzZXRTZWxlY3RlZCIsInNlbGVjdGVkSWQiLCJjbGllbnQiLCJRdWVyeUNsaWVudCIsImRlZmF1bHRPcHRpb25zIiwicXVlcmllcyIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIiwiYXBwTm9kZSIsImdldEVsZW1lbnRCeUlkIiwiTG9naW4iLCJ1c2VGb3JtIiwicmVWYWxpZGF0ZU1vZGUiLCJtb2RlIiwicmVnaXN0ZXIiLCJoYW5kbGVTdWJtaXQiLCJlcnJvcnMiLCJmb3JtU3RhdGUiLCJsb2dpbk11dGF0aW9uIiwiZXJyb3IiLCJyZXNwb25zZSIsIm9uU3VibWl0IiwicmVxdWlyZWQiLCJQcm9qZWN0RGV0YWlsIiwidXNlUGFyYW1zIiwiUHJvamVjdE92ZXJ2aWV3IiwiUHJvamVjdFJldmlldyIsIlNpZ251cCIsImNvbnRyb2wiLCJwbGFpblBhc3N3b3JkIiwidXNlV2F0Y2giLCJuYW1lIiwiZGVmYXVsdFZhbHVlIiwic2lnbnVwTXV0YXRpb24iLCJzdGF0dXMiLCJyZXNldCIsIm1pbkxlbmd0aCIsInBhc3N3b3JkQ29uZmlybSIsInZhbGlkYXRlIiwiVVNFUl9ST0xFUyIsIlJPTEVfQURNSU4iLCJST0xFX1VTRVIiLCJST0xFX1VTRVJfQkFTSUMiLCJyb2xlcyIsInRlc3QiLCJtYXhXaWR0aCIsIm1heEhlaWdodCIsInF1YWxpdHkiLCJyb3RhdGlvbiIsIm91dHB1dFR5cGUiLCJyZXNpemVJbWFnZVR5cGUiLCJvcHRpb25zIiwiUHJvbWlzZSIsInJlc29sdmUiLCJSZXNpemVyIiwiaW1hZ2VGaWxlUmVzaXplciIsInBvcCIsInVyaSIsInJl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O0FDdENmLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL2FwcC9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9hc3NldHMvYXBwL2pzL21haW4uanNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9iYWNrZ3JvdW5kLWxvZ2luLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9iYWNrZ3JvdW5kLWxvZ2luQDJ4LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hZGRfaW1hZ2Uuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FkZF9wcm9qZWN0LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hZGRfdXNlci5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYXJjaGl2ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY2hlY2suc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Nsb3NlLXdoaXRlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jbG9zZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZGFuZ2VyLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9kZWxldGUuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2VkaXQuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2xlYXZlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9zdGFyLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9zdWNjZXNzLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy91cGxvYWQuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3dhcm5pbmcuc3ZnXCI7IiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBTd2l0Y2gsIFJvdXRlLCBSZWRpcmVjdCwgdXNlTG9jYXRpb24gfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBIZWFkZXJOYXZpZ2F0aW9uLCBQYWdlTG9hZGVyIH0gZnJvbSAnLi9jb21wb25lbnRzJztcblxuLyogU2VydmljZXMgKi9cbmltcG9ydCB7IGdldFJvbGUgfSBmcm9tICcuL3NlcnZpY2VzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4vYW5pbWF0aW9ucyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4vY29udGV4dC9tYWluQ29udGV4dCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZmV0Y2hDdXJyZW50VXNlciwgUVVFUllfS0VZUyB9IGZyb20gJy4vYXBpJztcblxuLyogUm91dGVzICovXG5pbXBvcnQgcm91dGVzLCB7IFJPVVRFUyB9IGZyb20gJy4vcm91dGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8Um91dGVyPlxuXHRcdFx0PFJvdXRlckJvZHkgLz5cblx0XHQ8L1JvdXRlcj5cblx0KTtcbn1cblxuY29uc3QgUm91dGVyQm9keSA9ICgpID0+IHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW2N1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlcl0gPSB1c2VTdGF0ZSgpO1xuXHRjb25zdCBbdXNlclJvbGUsIHNldFVzZXJSb2xlXSA9IHVzZVN0YXRlKFtdKTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgdXNlcklkID0gYXRvYih3aW5kb3cubG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCAnJykpO1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IGxvY2F0aW9uID0gdXNlTG9jYXRpb24oKTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgaXNMb2FkaW5nIH0gPSB1c2VRdWVyeShRVUVSWV9LRVlTLkNVUlJFTlRfVVNFUiwgKCkgPT4gZmV0Y2hDdXJyZW50VXNlcih7IHVzZXJJZCB9KSwge1xuXHRcdHJldHJ5OiBmYWxzZSxcblx0XHRvblN1Y2Nlc3M6ICh1c2VyKSA9PiB7XG5cdFx0XHRzZXRDdXJyZW50VXNlcih1c2VyKTtcblx0XHRcdHNldFVzZXJSb2xlKGdldFJvbGUodXNlcikpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxTdGF0aWNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGN1cnJlbnRVc2VyLCBzZXRDdXJyZW50VXNlciwgdXNlclJvbGUgfX0+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7LyogU2hvdyBkaWZmZXJlbnQgaGVhZGVycyBiYXNlZCBvbiByb3V0ZSAqL31cblx0XHRcdFx0eyFbUk9VVEVTLmxvZ2luLCBST1VURVMuc2lnbnVwXS5pbmNsdWRlcyhsb2NhdGlvbi5wYXRobmFtZSkgJiYgPEhlYWRlck5hdmlnYXRpb24gLz59XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDxQYWdlTG9hZGVyIHsuLi57IGlzTG9hZGluZyB9fT5cblx0XHRcdFx0PEFuaW1hdGVQcmVzZW5jZSBleGl0QmVmb3JlRW50ZXI+XG5cdFx0XHRcdFx0PFN3aXRjaCBsb2NhdGlvbj17bG9jYXRpb259IGtleT17bG9jYXRpb24ucGF0aG5hbWV9PlxuXHRcdFx0XHRcdFx0ey8qIFJlZGlyZWN0IHRvIC9wcm9qZWN0cyBpZiBhIHVzZXIgaXMgbG9nZ2VkIGluICovfVxuXHRcdFx0XHRcdFx0e2N1cnJlbnRVc2VyICYmIGxvY2F0aW9uLnBhdGhuYW1lID09PSBST1VURVMubG9naW4gJiYgPFJlZGlyZWN0IHRvPXtST1VURVMucHJvamVjdHN9IC8+fVxuXG5cdFx0XHRcdFx0XHR7LyogUmVkaXJlY3QgdG8gL2xvZ2luIGlmIGEgdXNlciBpcyBub3QgbG9nZ2VkIGluIG9uIHRoZSAvcHJvamVjdHMgcm91dGUgKi99XG5cdFx0XHRcdFx0XHR7IWN1cnJlbnRVc2VyICYmIGxvY2F0aW9uLnBhdGhuYW1lID09PSBST1VURVMucHJvamVjdHMgJiYgPFJlZGlyZWN0IHRvPXtST1VURVMubG9naW59IC8+fVxuXG5cdFx0XHRcdFx0XHR7LyogUmVuZGVyIHJvdXRlcyAqL31cblx0XHRcdFx0XHRcdHtyb3V0ZXMubWFwKCh7IHBhdGgsIGNvbXBvbmVudDogQ29tcG9uZW50LCBwcm9wcyB9KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxSb3V0ZSBrZXk9e3BhdGh9IHBhdGg9e3BhdGh9IGV4YWN0PlxuXHRcdFx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2IGtleT17cGF0aH0gey4uLkZBREVfSU59PlxuXHRcdFx0XHRcdFx0XHRcdFx0PENvbXBvbmVudCB7Li4ueyAuLi5wcm9wcywgY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyLCB1c2VyUm9sZSwgc2V0VXNlclJvbGUgfX0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdFx0XHRcdDwvUm91dGU+XG5cdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8L1N3aXRjaD5cblx0XHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0XHQ8L1BhZ2VMb2FkZXI+XG5cblx0XHRcdHsvKiBUb2FzdCAqL31cblx0XHRcdDxUb2FzdENvbnRhaW5lclxuXHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdGhpZGVQcm9ncmVzc0JhcjogdHJ1ZSxcblx0XHRcdFx0XHRuZXdlc3RPblRvcDogdHJ1ZSxcblx0XHRcdFx0XHRwb3NpdGlvbjogJ2JvdHRvbS1sZWZ0Jyxcblx0XHRcdFx0XHRjbG9zZUJ1dHRvbjogZmFsc2UsXG5cdFx0XHRcdH19XG5cdFx0XHQvPlxuXHRcdDwvU3RhdGljQ29udGV4dC5Qcm92aWRlcj5cblx0KTtcbn07XG4iLCJjb25zdCBFQVNFID0gWzAuNjUsIDAsIDAuMzUsIDFdO1xuXG5jb25zdCBGQURFX0lOID0ge1xuXHRpbml0aWFsOiB7XG5cdFx0b3BhY2l0eTogMCxcblx0fSxcblx0YW5pbWF0ZToge1xuXHRcdG9wYWNpdHk6IDEsXG5cdH0sXG5cdGV4aXQ6IHtcblx0XHRvcGFjaXR5OiAwLFxuXHR9LFxuXHR0cmFuc2l0aW9uOiB7XG5cdFx0ZWFzZTogRUFTRSxcblx0XHRkdXJhdGlvbjogMC4yLFxuXHR9LFxufTtcblxuY29uc3QgRkFERV9JTl9VUCA9IHtcblx0aW5pdGlhbDoge1xuXHRcdHk6IDIwMCxcblx0XHRvcGFjaXR5OiAwLFxuXHR9LFxuXHRhbmltYXRlOiB7XG5cdFx0eTogMCxcblx0XHRvcGFjaXR5OiAxLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdHR5cGU6ICdzcHJpbmcnLFxuXHRcdFx0ZGFtcGluZzogNDIsXG5cdFx0XHRzdGlmZm5lc3M6IDgwMCxcblx0XHR9LFxuXHR9LFxuXHRleGl0OiB7XG5cdFx0eTogMjAwLFxuXHRcdG9wYWNpdHk6IDAsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0Mixcblx0XHRcdHN0aWZmbmVzczogMTIwMCxcblx0XHR9LFxuXHR9LFxufTtcblxuY29uc3QgVFJBTlNGT1JNX1VQID0ge1xuXHRpbml0aWFsOiB7XG5cdFx0eTogJzEwMCUnLFxuXHR9LFxuXHRhbmltYXRlOiB7XG5cdFx0eTogJzAlJyxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3ByaW5nJyxcblx0XHRcdGRhbXBpbmc6IDQxLFxuXHRcdFx0c3RpZmZuZXNzOiA2MDAsXG5cdFx0fSxcblx0fSxcblx0ZXhpdDoge1xuXHRcdHk6ICcxMDAlJyxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3ByaW5nJyxcblx0XHRcdGRhbXBpbmc6IDQxLFxuXHRcdFx0c3RpZmZuZXNzOiAxMjAwLFxuXHRcdH0sXG5cdH0sXG59O1xuXG5jb25zdCBTQ0FMRV9GQURFID0ge1xuXHRpbml0aWFsOiB7XG5cdFx0c2NhbGU6IDAsXG5cdFx0b3BhY2l0eTogMCxcblx0fSxcblx0YW5pbWF0ZToge1xuXHRcdHNjYWxlOiAxLFxuXHRcdG9wYWNpdHk6IDEsXG5cdH0sXG5cdGV4aXQ6IHtcblx0XHRzY2FsZTogMCxcblx0XHRvcGFjaXR5OiAwLFxuXHR9LFxuXHR0cmFuc2l0aW9uOiB7XG5cdFx0ZWFzZTogRUFTRSxcblx0XHRkdXJhdGlvbjogMC4yLFxuXHR9LFxufTtcblxuY29uc3QgU1RBR0dFUl9VUCA9IChpbmRleCA9IDApID0+ICh7XG5cdGluaXRpYWw6IHsgb3BhY2l0eTogMCwgeTogMzUgfSxcblx0YW5pbWF0ZTogeyBvcGFjaXR5OiAxLCB5OiAwLCB0cmFuc2l0aW9uOiB7IHR5cGU6ICdzcHJpbmcnLCBkYW1waW5nOiAzMCwgc3RpZmZuZXNzOiA0NTAsIGRlbGF5OiBpbmRleCAqIDAuMDM1IH0gfSxcblx0ZXhpdDogeyBvcGFjaXR5OiAwLCBzY2FsZTogMC4yNSwgdHJhbnNpdGlvbjogeyB0eXBlOiAnc3ByaW5nJywgZGFtcGluZzogMzAsIHN0aWZmbmVzczogNjAwIH0gfSxcbn0pO1xuXG5jb25zdCBTVEFHR0VSX0xFRlQgPSAoaW5kZXggPSAwKSA9PiAoe1xuXHRpbml0aWFsOiB7IG9wYWNpdHk6IDAsIHg6IDEwIH0sXG5cdGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgeDogMCwgdHJhbnNpdGlvbjogeyB0eXBlOiAnc3ByaW5nJywgZGFtcGluZzogMzAsIHN0aWZmbmVzczogMzAwLCBkZWxheTogaW5kZXggKiAwLjAzNSB9IH0sXG5cdGV4aXQ6IHsgb3BhY2l0eTogMCwgeDogMTAsIHRyYW5zaXRpb246IHsgdHlwZTogJ3NwcmluZycsIGRhbXBpbmc6IDMwLCBzdGlmZm5lc3M6IDYwMCB9IH0sXG59KTtcblxuZXhwb3J0IHsgRkFERV9JTiwgRkFERV9JTl9VUCwgVFJBTlNGT1JNX1VQLCBTQ0FMRV9GQURFLCBTVEFHR0VSX1VQLCBTVEFHR0VSX0xFRlQgfTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8qIEFkZCBjb21tZW50IHwgZXhwZWN0cyBwaGFzZSBpZCwgdXNlciBpZCBhbmQgZm9ybVJlZiBvYmVjdCAqL1xuZXhwb3J0IGNvbnN0IGFkZENvbW1lbnQgPSBhc3luYyAoeyBmb3JtUmVmLCBwaGFzZUlkLCB1c2VySWQsIHBvc2l0aW9uIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKGZvcm1SZWYuY3VycmVudCk7XG5cdHBhcmFtcy5hcHBlbmQoJ3VzZXJJZCcsIHVzZXJJZCk7XG5cdHBhcmFtcy5hcHBlbmQoJ3Bvc2l0aW9uWCcsIHBvc2l0aW9uLnhQZXJjZW50KTtcblx0cGFyYW1zLmFwcGVuZCgncG9zaXRpb25ZJywgcG9zaXRpb24ueVBlcmNlbnQpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvY29tbWVudHMvYWRkLyR7cGhhc2VJZH1gLCBwYXJhbXMpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vc2VjdXJpdHknO1xuZXhwb3J0ICogZnJvbSAnLi9wcm9qZWN0JztcbmV4cG9ydCAqIGZyb20gJy4vcHJvamVjdEltYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vdXNlcic7XG5leHBvcnQgKiBmcm9tICcuL2NvbW1lbnQnO1xuXG5leHBvcnQgY29uc3QgUVVFUllfS0VZUyA9IHtcblx0Q1VSUkVOVF9VU0VSOiAnY3VycmVudF91c2VyJyxcblx0UFJPSkVDVF9CWV9VU0VSOiAncHJvamVjdF9ieV91c2VyJyxcblx0UFJPSkVDVF9CWV9JRDogJ3Byb2plY3RfYnlfaWQnLFxuXHRQUk9KRUNUX0lNQUdFX0JZX0lEOiAncHJvamVjdF9pbWFnZV9ieV9pZCcsXG5cdEdMT0JBTF9VU0VSUzogJ2dsb2JhbF91c2VycycsXG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLyogRmV0Y2ggcHJvamVjdHMgYnkgdXNlciB8IGV4cGVjdHMgdXNlciBpZCAqL1xuZXhwb3J0IGNvbnN0IGZldGNoUHJvamVjdHNCeVVzZXIgPSBhc3luYyAoeyB1c2VySWQgfSkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcHJvamVjdHMvZ2V0LyR7dXNlcklkfWApO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRmV0Y2ggcHJvamVjdHMgYnkgaWQgfCBleHBlY3RzIHByb2plY3QgaWQgKi9cbmV4cG9ydCBjb25zdCBmZXRjaFByb2plY3RCeUlkID0gYXN5bmMgKHsgcHJvamVjdElkIH0pID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2plY3QvZ2V0LyR7cHJvamVjdElkfWApO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogQWRkIHByb2plY3QgKi9cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0ID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3Byb2plY3RzL2FkZCcpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRGVsZXRlIHByb2plY3QocykgfCBleHBlY3RzIGFycmF5IG9mIHByb2plY3RJZHMgICovXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvamVjdHMgPSBhc3luYyAoeyBwcm9qZWN0SWRzIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5cdHByb2plY3RJZHMuZm9yRWFjaCgoaWQpID0+IHBhcmFtcy5hcHBlbmQoJ3Byb2plY3RzW10nLCBpZCkpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvcHJvamVjdHMvZGVsZXRlYCwgcGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogTGVhdmUgcHJvamVjdChzKSB8IGV4cGVjdHMgYXJyYXkgb2YgcHJvamVjdElkcyBhbmQgdXNlciBpZCAgKi9cbmV4cG9ydCBjb25zdCBsZWF2ZVByb2plY3RzID0gYXN5bmMgKHsgcHJvamVjdElkcywgdXNlcklkIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5cdHByb2plY3RJZHMuZm9yRWFjaCgoaWQpID0+IHBhcmFtcy5hcHBlbmQoJ3Byb2plY3RzW10nLCBpZCkpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvcHJvamVjdHMvbGVhdmUvJHt1c2VySWR9YCwgcGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRWRpdCBwcm9qZWN0IHwgZXhwZWN0cyBmb3JtRGF0YSBvYmplY3QgYW5kIHByb2plY3QgaWQgICovXG5leHBvcnQgY29uc3QgZWRpdFByb2plY3QgPSBhc3luYyAoeyBmb3JtUmVmLCBpZCB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvcHJvamVjdHMvZWRpdC8ke2lkfWAsIHBhcmFtcyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuLyogRmV0Y2ggcHJvamVjdEltYWdlIGJ5IGlkIHwgZXhwZWN0cyBwcm9qZWN0IGltYWdlIGlkICovXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9qZWN0SW1hZ2VCeUlkID0gYXN5bmMgKHsgcHJvamVjdEltYWdlSWQgfSkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvaW1hZ2VzL2dldC8ke3Byb2plY3RJbWFnZUlkfWApO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogQWRkIHByb2plY3RJbWFnZShzKSB8IGV4cGVjdHMgcHJvamVjdCBpZCBhbmQgYXJyYXkgb2YgaW1hZ2VzIChibG9iKSAqL1xuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RJbWFnZXMgPSBhc3luYyAoeyBwcm9qZWN0SWQsIGltYWdlcyB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuXHRpbWFnZXMuZm9yRWFjaCgoaW1hZ2UsIGltYWdlSW5kZXgpID0+IHtcblx0XHRwYXJhbXMuYXBwZW5kKGBpbWFnZXNbJHtpbWFnZUluZGV4fV1bb3JpZ2luYWxdYCwgaW1hZ2Uub3JpZ2luYWwpO1xuXHRcdHBhcmFtcy5hcHBlbmQoYGltYWdlc1ske2ltYWdlSW5kZXh9XVt0aHVtYm5haWxdYCwgaW1hZ2UudGh1bWJuYWlsKTtcblx0XHRwYXJhbXMuYXBwZW5kKGBpbWFnZXNbJHtpbWFnZUluZGV4fV1bdGh1bWJuYWlsUmV0aW5hXWAsIGltYWdlLnRodW1ibmFpbFJldGluYSk7XG5cdH0pO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvaW1hZ2VzL2FkZC8ke3Byb2plY3RJZH1gLCBwYXJhbXMpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRGVsZXRlIHByb2plY3RJbWFnZShzKSB8IGV4cGVjdHMgcHJvamVjdCBpZCBhbmQgYXJyYXkgb2YgcHJvamVjdEltYWdlSWRzICAqL1xuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3RJbWFnZXMgPSBhc3luYyAoeyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZUlkcyB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuXHRwcm9qZWN0SW1hZ2VJZHMuZm9yRWFjaCgoaWQpID0+IHBhcmFtcy5hcHBlbmQoJ3Byb2plY3RJbWFnZXNbXScsIGlkKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9pbWFnZXMvZGVsZXRlLyR7cHJvamVjdElkfWAsIHBhcmFtcyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBFZGl0IHByb2plY3RJbWFnZSB8IGV4cGVjdHMgZm9ybVJlZiBvYmplY3QgYW5kIHByb2plY3RJbWFnZSBpZCAgKi9cbmV4cG9ydCBjb25zdCBlZGl0UHJvamVjdEltYWdlID0gYXN5bmMgKHsgZm9ybVJlZiwgaWQgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybVJlZi5jdXJyZW50KTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2ltYWdlcy9lZGl0LyR7aWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vKiBTaWdudXAgdG8gcGxhdGZvcm0gfCBleHBlY3RzIGZvcm1SZWYgb2JqZWN0ICovXG5leHBvcnQgY29uc3Qgc2lnbnVwID0gYXN5bmMgKHsgZm9ybVJlZiB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KCcvYXBpL3NpZ251cCcsIHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIExvZ2luIHRvIHBsYXRmb3JtIHwgZXhwZWN0cyBmb3JtUmVmIG9iamVjdCAqL1xuZXhwb3J0IGNvbnN0IGxvZ2luID0gYXN5bmMgKHsgZm9ybVJlZiB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCB7XG5cdFx0ZW1haWw6IHBhcmFtcy5nZXQoJ2VtYWlsJyksXG5cdFx0cGFzc3dvcmQ6IHBhcmFtcy5nZXQoJ3Bhc3N3b3JkJyksXG5cdH0pO1xuXG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBMb2dvdXQgZnJvbSBwbGF0Zm9ybSAqL1xuZXhwb3J0IGNvbnN0IGxvZ291dCA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2xvZ291dCcpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuLyogRmV0Y2ggY3VycmVudCAobG9nZ2VkIGluKSB1c2VyIHwgZXhwZWN0cyB1c2VyIGlkICovXG5leHBvcnQgY29uc3QgZmV0Y2hDdXJyZW50VXNlciA9IGFzeW5jICh7IHVzZXJJZCB9KSA9PiB7XG5cdGxldCB1cmwgPSAnL2FwaS91c2Vycy9nZXQnO1xuXHRpZiAodXNlcklkKSB1cmwgPSBgJHt1cmx9LyR7dXNlcklkfWA7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBGZXRjaCBhbGwgdXNlcnMgaW4gZGIgKi9cbmV4cG9ydCBjb25zdCBmZXRjaEdvYmFsVXNlcnMgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS91c2Vycy9nZXQvYWxsJyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBBZGQgdXNlciB0byBwcm9qZWN0IHwgZXhwZWN0cyBwcm9qZWN0IGlkIGFuZCB1c2VyIGVtYWlsICovXG5leHBvcnQgY29uc3QgYWRkVXNlciA9IGFzeW5jICh7IHByb2plY3RJZCwgZW1haWwgfSkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3VzZXJzL2FkZC8ke3Byb2plY3RJZH1gLCB7IGVtYWlsIH0pO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRGVsZXRlIHVzZXIgZnJvbSBwcm9qZWN0IHwgZXhwZWN0cyBwcm9qZWN0IGlkIGFuZCB1c2VyIGlkICovXG5leHBvcnQgY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jICh7IHByb2plY3RJZCwgdXNlcklkIH0pID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS91c2Vycy9kZWxldGUvJHtwcm9qZWN0SWR9YCwgeyB1c2VySWQgfSk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IExvYWRpbmdXcmFwcGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFRSQU5TRk9STV9VUCB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dC9tYWluQ29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjdGlvbk1lbnUoeyBzZWxlY3RlZCwgcmVzZXRTZWxlY3RlZCwgYWN0aW9ucyB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXYgey4uLlRSQU5TRk9STV9VUH0gY2xhc3NOYW1lPVwiYmFyIGJhci0tcHJvamVjdFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJhcl9fYnRuIGJ0biBidG4tbGluayBkLWlubGluZS1mbGV4IHRleHQtd2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtyZXNldFNlbGVjdGVkfT5cblx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTE0XCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1sLTIgbWItMFwiPntzZWxlY3RlZC5sZW5ndGh9IHNlbGVjdGVkPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gbWwtYXV0b1wiPlxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImJhcl9fbGlzdCBsaXN0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0e2FjdGlvbnMubWFwKFxuXHRcdFx0XHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoZW1lLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNQZXJtaXNzaW9uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uU2l6ZSA9IDEyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtdXRhdGlvbiA9ICgpID0+IHt9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0xvYWRpbmcgPSBmYWxzZSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb25JbmRleFxuXHRcdFx0XHRcdFx0XHRcdCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGhhc1Blcm1pc3Npb24uaW5jbHVkZXModXNlclJvbGUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17YWN0aW9uSW5kZXh9IGNsYXNzTmFtZT1cImxpc3RfX2l0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmFyX19idG4gYnRuIGJ0bi1saW5rIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXttdXRhdGlvbn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS0ke3RoZW1lfSBpY29uLXdyYXBwZXItLWludGVyYWN0aXZlYH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExvYWRpbmdXcmFwcGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkaW5nPXtpc0xvYWRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkZXJTaXplPXsxMn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzZXM9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9hZGVyQ2xhc3NlczogYHBvc2l0aW9uLWFic29sdXRlIGQtZmxleCB0ZXh0LSR7dGhlbWV9YCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdyYXBwZXI9XCJzdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BpY29uIGljb24tLSR7aWNvblNpemV9IHRleHQtJHt0aGVtZX1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2ljb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJidG5fX3RleHQgdGV4dC13aGl0ZSBtbC0yXCI+e3RpdGxlfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gJ2ljb25zL2Nsb3NlLXdoaXRlLnN2Zyc7XG5pbXBvcnQgd2FybmluZ0ljb24gZnJvbSAnaWNvbnMvd2FybmluZy5zdmcnO1xuaW1wb3J0IGVycm9ySWNvbiBmcm9tICdpY29ucy9kYW5nZXIuc3ZnJztcbmltcG9ydCBzdWNjZXNzSWNvbiBmcm9tICdpY29ucy9zdWNjZXNzLnN2Zyc7XG5cbi8qIEdsb2JhbCAqL1xuY29uc3QgYXBwZWFyYW5jZVR5cGVzID0ge1xuXHR3YXJuaW5nOiB7XG5cdFx0dGl0bGU6ICdXYXJuaW5nJyxcblx0XHRpY29uOiB3YXJuaW5nSWNvbixcblx0fSxcblx0ZGFuZ2VyOiB7XG5cdFx0dGl0bGU6ICdFcnJvcicsXG5cdFx0aWNvbjogZXJyb3JJY29uLFxuXHR9LFxuXHRzdWNjZXNzOiB7XG5cdFx0dGl0bGU6ICdTdWNjZXNzJyxcblx0XHRpY29uOiBzdWNjZXNzSWNvbixcblx0fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsZXJ0KHsgbWVzc2FnZSwgYXBwZWFyYW5jZSwgY2xvc2VUb2FzdCB9KSB7XG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYWxlcnQgYWxlcnQtLW5vdGlmaWNhdGlvblwiIHJvbGU9XCJhbGVydFwiIGRhdGEtYWxlcnQ+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDBcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2BhbGVydF9faWNvbi13cmFwcGVyIGFsZXJ0X19pY29uLXdyYXBwZXItLSR7YXBwZWFyYW5jZX0gbXItMmB9PlxuXHRcdFx0XHRcdDxSZWFjdFNWR1xuXHRcdFx0XHRcdFx0d3JhcHBlcj1cInN2Z1wiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJhbGVydF9faWNvbiBpY29uIGljb24tLTEyXCJcblx0XHRcdFx0XHRcdHNyYz17YXBwZWFyYW5jZVR5cGVzW2FwcGVhcmFuY2VdLmljb259XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1iLTBcIj57YXBwZWFyYW5jZVR5cGVzW2FwcGVhcmFuY2VdLnRpdGxlfTwvcD5cblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJhbGVydF9fYnRuIGJ0biBidG4tbGluayBtbC1hdXRvXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2Nsb3NlVG9hc3R9PlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xMFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYWxlcnRfX21lc3NhZ2UgdGV4dC0teHMgdGV4dC1tdXRlZC0tNzAgbXItbGctOFwiPnttZXNzYWdlfTwvc3Bhbj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBiZyBmcm9tICdpbWFnZXMvYmFja2dyb3VuZC1sb2dpbi5qcGcnO1xuaW1wb3J0IGJnUmV0aW5hIGZyb20gJ2ltYWdlcy9iYWNrZ3JvdW5kLWxvZ2luQDJ4LmpwZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhY2tncm91bmQoKSB7XG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiYmFja2dyb3VuZFwiPlxuXHRcdFx0PGltZyBjbGFzc05hbWU9XCJiYWNrZ3JvdW5kX19pbWFnZVwiIHNyYz17Ymd9IHNyY1NldD17YmdSZXRpbmF9IGFsdD1cIkJhY2tncm91bmRcIiAvPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOLCBGQURFX0lOX1VQIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3goe1xuXHR0aXRsZSxcblx0c3VidGl0bGUsXG5cdFN1YnRpdGxlQ29tcG9uZW50LFxuXHRib3hPcGVuLFxuXHR0b2dnbGVCb3gsXG5cdGNoaWxkcmVuLFxuXHR1c2VyLFxuXHRwb3NpdGlvbiA9IHt9LFxuXHRyZW5kZXJPbkJvZHkgPSB0cnVlLFxuXHRib3hSZWYsXG5cdGV4dGVuc2lvbkNsYXNzZXMsXG5cdGFuaW1hdGUgPSB0cnVlLFxufSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyBsZWZ0ID0gMCwgdG9wID0gMCB9ID0gcG9zaXRpb247XG5cdGNvbnN0IGFuaW1hdGlvbiA9IGFuaW1hdGUgPyB7IC4uLkZBREVfSU5fVVAgfSA6IHt9O1xuXG5cdC8qIFRPRE86IGVzY2FwZSBldmVudCBsaXN0ZW5lciAqL1xuXHRjb25zdCByZW5kZXIgPSAoKSA9PiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdHtib3hPcGVuICYmIChcblx0XHRcdFx0PG1vdGlvbi5kaXZcblx0XHRcdFx0XHRyZWY9e2JveFJlZn1cblx0XHRcdFx0XHRsYXlvdXRcblx0XHRcdFx0XHR0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjIgfX1cblx0XHRcdFx0XHRjbGFzc05hbWU9e2Bib3ggJHtyZW5kZXJPbkJvZHkgJiYgJ2JveC0tY2VudGVyJ30gJHtleHRlbnNpb25DbGFzc2VzfWB9XG5cdFx0XHRcdFx0c3R5bGU9e3sgJy0tbGVmdCc6IGxlZnQsICctLXRvcCc6IHRvcCB9fT5cblx0XHRcdFx0XHR7cmVuZGVyT25Cb2R5ICYmIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImJveC1vdmVybGF5XCIgey4uLkZBREVfSU59IG9uQ2xpY2s9e3RvZ2dsZUJveH0gLz59XG5cdFx0XHRcdFx0PG1vdGlvbi5kaXYga2V5PVwiYm94LWNvbnRlbnRcIiBjbGFzc05hbWU9XCJib3hfX2NvbnRlbnQgYm9yZGVyIHAtNVwiIHsuLi5hbmltYXRpb259PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hfX2hlYWRlciBkLWZsZXggYWxpZ24taXRlbXMtc3RhcnRcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0e3VzZXIgJiYgPFVzZXIgey4uLnsgdXNlciB9fSBzaXplPVwieGxcIiAvPn1cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YGQtZmxleCBmbGV4LWNvbHVtbiAke3VzZXIgJiYgJ21sLTMnfWB9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0tbGcgbWItMFwiPnt0aXRsZX08L3A+XG5cdFx0XHRcdFx0XHRcdFx0XHR7KFN1YnRpdGxlQ29tcG9uZW50IHx8IHN1YnRpdGxlKSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTYwIG1iLTBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7U3VidGl0bGVDb21wb25lbnQgPyA8U3VidGl0bGVDb21wb25lbnQgLz4gOiBzdWJ0aXRsZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Nsb3NlIGJ0biBidG4tbGluayBtbC1hdXRvXCJcblx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVCb3h9PlxuXHRcdFx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xMlwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hfX2JvZHkgZC1mbGV4IG10LTRcIj57Y2hpbGRyZW59PC9kaXY+XG5cdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQpfVxuXHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHQpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRpZiAocmVuZGVyT25Cb2R5KSB7XG5cdFx0cmV0dXJuIGNyZWF0ZVBvcnRhbChyZW5kZXIoKSwgZG9jdW1lbnQuYm9keSk7XG5cdH1cblxuXHRyZXR1cm4gcmVuZGVyKCk7XG59XG4iLCIvKiB7YWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uKHtcblx0dGl0bGUsXG5cdHR5cGUgPSAnYnV0dG9uJyxcblx0dGhlbWUgPSAnc2Vjb25kYXJ5Jyxcblx0c2l6ZSA9ICdzbScsXG5cdGV4dGVuc2lvbkNsYXNzZXMgPSAnJyxcblx0b25DbGljayA9ICgpID0+IHt9LFxuXHRpc0xvYWRpbmcgPSBmYWxzZSxcbn0pIHtcblx0LyogUmVmcyAqL1xuXHRjb25zdCBidXR0b25SZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgYnV0dG9uSGVpZ2h0ID0gYnV0dG9uUmVmLmN1cnJlbnQ/LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmhlaWdodDtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8YnV0dG9uXG5cdFx0XHRyZWY9e2J1dHRvblJlZn1cblx0XHRcdGNsYXNzTmFtZT17YGJ0biBidG4tJHtzaXplfSBidG4tJHt0aGVtZX0gJHtleHRlbnNpb25DbGFzc2VzfSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyYH1cblx0XHRcdHN0eWxlPXt7IGhlaWdodDogYnV0dG9uSGVpZ2h0IH19XG5cdFx0XHR7Li4ueyB0eXBlLCBvbkNsaWNrIH19PlxuXHRcdFx0PExvYWRpbmdXcmFwcGVyXG5cdFx0XHRcdGxvYWRpbmc9e2lzTG9hZGluZ31cblx0XHRcdFx0bG9hZGVyU2l6ZT17MTZ9XG5cdFx0XHRcdGNsYXNzZXM9e3sgbG9hZGVyQ2xhc3NlczogJ3Bvc2l0aW9uLWFic29sdXRlIGQtZmxleCB0ZXh0LXNlY29uZGFyeScgfX0+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImJ0bl9fdGV4dFwiPnt0aXRsZX08L3NwYW4+XG5cdFx0XHQ8L0xvYWRpbmdXcmFwcGVyPlxuXHRcdDwvYnV0dG9uPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyB1c2VEcm9wem9uZSB9IGZyb20gJ3JlYWN0LWRyb3B6b25lJztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IExvYWRpbmdXcmFwcGVyIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIFNlcnZpY2VzICovXG5pbXBvcnQgeyByZXNpemVJbWFnZXMgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNDQUxFX0ZBREUsIEZBREVfSU4gfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkSW1hZ2VJY29uIGZyb20gJ2ljb25zL2FkZF9pbWFnZS5zdmcnO1xuaW1wb3J0IHVwbG9hZEltYWdlSWNvbiBmcm9tICdpY29ucy91cGxvYWQuc3ZnJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBhZGRQcm9qZWN0SW1hZ2VzLCBkZWxldGVQcm9qZWN0SW1hZ2VzLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcHpvbmUoeyBwcm9qZWN0SWQsIHBvc2l0aXRpb24gPSAnbGVmdCcsIGNoaWxkcmVuIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzLCBpc0RyYWdBY3RpdmUgfSA9IHVzZURyb3B6b25lKHtcblx0XHRhY2NlcHQ6ICdpbWFnZS8qJyxcblx0XHRub0NsaWNrOiB0cnVlLFxuXHRcdG9uRHJvcDogKGFjY2VwdGVkRmlsZXMpID0+IHVwZGF0ZVByb2plY3RJbWFnZXMoJ2FkZCcsIHsgaW1hZ2VzOiBhY2NlcHRlZEZpbGVzIH0pLFxuXHR9KTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgYWRkUHJvamVjdEltYWdlc011dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkUHJvamVjdEltYWdlcywge1xuXHRcdG9uU3VjY2VzczogKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSksXG5cdH0pO1xuXG5cdGNvbnN0IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGRlbGV0ZVByb2plY3RJbWFnZXMsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0pLFxuXHR9KTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdXBkYXRlUHJvamVjdEltYWdlcyA9IGFzeW5jIChhY3Rpb24sIHByb3BzKSA9PiB7XG5cdFx0aWYgKGFjdGlvbiA9PT0gJ2FkZCcgJiYgcHJvcHMuaW1hZ2VzKSB7XG5cdFx0XHRjb25zdCByZXNpemVkSW1hZ2VzID0gYXdhaXQgcmVzaXplSW1hZ2VzKHByb3BzLmltYWdlcyk7XG5cblx0XHRcdGFkZFByb2plY3RJbWFnZXNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQsIGltYWdlczogcmVzaXplZEltYWdlcyB9KTtcblx0XHR9XG5cblx0XHRpZiAoYWN0aW9uID09PSAnZGVsZXRlJykgZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgLi4ucHJvcHMgfSk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZVwiIHsuLi5nZXRSb290UHJvcHMoKX0+XG5cdFx0XHQ8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cblx0XHRcdDxEcm9wem9uZUlubmVyXG5cdFx0XHRcdGFkZEltYWdlTG9hZGluZz17YWRkUHJvamVjdEltYWdlc011dGF0aW9uLmlzTG9hZGluZ31cblx0XHRcdFx0ey4uLnsgdXBkYXRlUHJvamVjdEltYWdlcywgaXNQYXJlbnREcmFnQWN0aXZlOiBpc0RyYWdBY3RpdmUsIHBvc2l0aXRpb24gfX1cblx0XHRcdC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctLWVxdWFsaXplZCBndXR0ZXJzLTVcIj5cblx0XHRcdFx0e2NoaWxkcmVuKHsgdXBkYXRlUHJvamVjdEltYWdlcywgaXNMb2FkaW5nOiBkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24uaXNMb2FkaW5nIH0pfVxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbi8qIElubmVyIGRyb3B6b25lICovXG5jb25zdCBEcm9wem9uZUlubmVyID0gKHsgYWRkSW1hZ2VMb2FkaW5nLCB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc1BhcmVudERyYWdBY3RpdmUsIHBvc2l0aXRpb24gfSkgPT4ge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcywgaXNEcmFnQWN0aXZlIH0gPSB1c2VEcm9wem9uZSh7XG5cdFx0YWNjZXB0OiAnaW1hZ2UvKicsXG5cdFx0bm9EcmFnRXZlbnRzQnViYmxpbmc6IHRydWUsXG5cdFx0b25Ecm9wOiAoYWNjZXB0ZWRGaWxlcykgPT4gdXBkYXRlUHJvamVjdEltYWdlcygnYWRkJywgeyBpbWFnZXM6IGFjY2VwdGVkRmlsZXMgfSksXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZHJvcHpvbmVcIiB7Li4uZ2V0Um9vdFByb3BzKCl9PlxuXHRcdFx0PGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7KGlzRHJhZ0FjdGl2ZSB8fCBpc1BhcmVudERyYWdBY3RpdmUpICYmIChcblx0XHRcdFx0XHQ8bW90aW9uLmRpdiB7Li4uRkFERV9JTn0gY2xhc3NOYW1lPVwiZHJvcHpvbmVfX292ZXJsYXlcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0tc2Vjb25kYXJ5XCIgc3R5bGU9e3sgJy0tc2l6ZSc6IDc1IH19PlxuXHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMzAgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e3VwbG9hZEltYWdlSWNvbn0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0KX1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0PG1vdGlvbi5idXR0b25cblx0XHRcdFx0ey4uLlNDQUxFX0ZBREV9XG5cdFx0XHRcdGtleT1cImFkZC1wcm9qZWN0XCJcblx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdGNsYXNzTmFtZT17YGljb24td3JhcHBlciBpY29uLXdyYXBwZXItLWludGVyYWN0aXZlIGljb24td3JhcHBlci0tc2Vjb25kYXJ5IGJ0biBidG4tbGluayBidG4tLWFkZCBidG4tLWFkZC0ke3Bvc2l0aXRpb259YH1cblx0XHRcdFx0c3R5bGU9e3sgJy0tc2l6ZSc6IDc1IH19PlxuXHRcdFx0XHQ8TG9hZGluZ1dyYXBwZXJcblx0XHRcdFx0XHRsb2FkaW5nPXthZGRJbWFnZUxvYWRpbmd9XG5cdFx0XHRcdFx0Y2xhc3Nlcz17eyBsb2FkZXJDbGFzc2VzOiAncG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4IHRleHQtc2Vjb25kYXJ5JyB9fVxuXHRcdFx0XHRcdGxvYWRlclNpemU9ezMwfT5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMzAgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e2FkZEltYWdlSWNvbn0gLz5cblx0XHRcdFx0PC9Mb2FkaW5nV3JhcHBlcj5cblx0XHRcdDwvbW90aW9uLmJ1dHRvbj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBCb3ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgRWRpdGFibGVCb2R5IGZyb20gJy4vRWRpdGFibGVCb2R5JztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgZWRpdEljb24gZnJvbSAnaWNvbnMvZWRpdC5zdmcnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdGFibGUoeyBpbnB1dFR5cGUsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW2JveE9wZW4sIHNldEJveE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHRpdGxlID0gYEVkaXRpbmcgJHtpbnB1dFR5cGV9YDtcblx0Y29uc3Qgc3VidGl0bGUgPSBgU2F2ZSB3aGVuIHJlYWR5YDtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdG9nZ2xlQm94ID0gKCkgPT4gc2V0Qm94T3BlbighYm94T3Blbik7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJlZGl0YWJsZSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHBvc2l0aW9uLXJlbGF0aXZlXCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVkaXRhYmxlX19jb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxuXHRcdFx0e3VzZXJSb2xlID09PSAnYWRtaW4nICYmIChcblx0XHRcdFx0PD5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJlZGl0YWJsZV9fdG9nZ2xlIGJ0biBidG4tbGluayBpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnkgaWNvbi13cmFwcGVyLS1pbnRlcmFjdGl2ZSBzdHJldGNoZWQtbGluayBtbC0zXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZUJveH1cblx0XHRcdFx0XHRcdHN0eWxlPXt7ICctLXNpemUnOiAyNSB9fT5cblx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xMCB0ZXh0LXNlY29uZGFyeVwiIHNyYz17ZWRpdEljb259IC8+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0PEJveCB7Li4ueyB0aXRsZSwgc3VidGl0bGUsIGJveE9wZW4sIHRvZ2dsZUJveCB9fT5cblx0XHRcdFx0XHRcdDxFZGl0YWJsZUJvZHkgey4uLnsgdGl0bGUsIGlucHV0VHlwZSwgdG9nZ2xlQm94LCAuLi5yZXN0IH19IC8+XG5cdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdDwvPlxuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgVGV4dGFyZWFBdXRvc2l6ZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogRWxlbWVudHMgKi9cbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0YWJsZUJvZHkoe1xuXHR0aXRsZSxcblx0aW5wdXRUeXBlLFxuXHR0b2dnbGVCb3gsXG5cdGNvbnRlbnQsXG5cdG11dGF0aW9uLFxuXHRtdXRhdGlvbklkLFxuXHRtdXRhdGlvbk9uU3VjY2Vzcyxcbn0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShjb250ZW50KTtcblxuXHQvKiBSZWZzICovXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblx0Y29uc3QgaW5wdXRSZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBFZmZlY3RzICovXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGlucHV0UmVmPy5jdXJyZW50KSBpbnB1dFJlZj8uY3VycmVudD8uc2VsZWN0KCk7XG5cdH0sIFtdKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgZWRpdE11dGF0aW9uID0gdXNlTXV0YXRpb24obXV0YXRpb24sIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdG11dGF0aW9uT25TdWNjZXNzKCk7XG5cdFx0XHR0b2dnbGVCb3goKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8Zm9ybVxuXHRcdFx0cmVmPXtmb3JtUmVmfVxuXHRcdFx0Y2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LWdyb3ctMVwiXG5cdFx0XHRvblN1Ym1pdD17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdGVkaXRNdXRhdGlvbi5tdXRhdGUoeyBmb3JtUmVmLCBpZDogbXV0YXRpb25JZCB9KTtcblx0XHRcdH19PlxuXHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPXtpbnB1dFR5cGV9PlxuXHRcdFx0XHR7dGl0bGV9XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdFx0PFRleHRhcmVhQXV0b3NpemVcblx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBmb3JtLWNvbnRyb2wtLXRleHRcIlxuXHRcdFx0XHRpZD17aW5wdXRUeXBlfVxuXHRcdFx0XHRuYW1lPXtpbnB1dFR5cGV9XG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxuXHRcdFx0XHRvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0VmFsdWUodmFsdWUpfVxuXHRcdFx0XHRyZWY9e2lucHV0UmVmfVxuXHRcdFx0Lz5cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0dGl0bGU9XCJTYXZlXCJcblx0XHRcdFx0ZXh0ZW5zaW9uQ2xhc3Nlcz1cIm10LTQgdy01MCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcblx0XHRcdFx0aXNMb2FkaW5nPXtlZGl0TXV0YXRpb24uaXNMb2FkaW5nfVxuXHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdC8+XG5cdFx0PC9mb3JtPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBSb3V0ZXMgKi9cbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5oZWFkZXIgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJcIiB7Li4uRkFERV9JTn0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBweC01IHB0LTUgcHgtbGctNiBwdC1sZy02IHB4LXhsLTEyIHB0LXhsLTEyXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXJfX2xvZ28gbG9nb1wiPlxuXHRcdFx0XHRcdDxMaW5rIGNsYXNzTmFtZT1cImxvZ29fX2xpbmsgdGV4dC1yZXNldFwiIHRvPXtST1VURVMubG9naW59IHRpdGxlPVwiUGFyYWxsZWwgRGFzaGJvYXJkXCI+XG5cdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwibG9nb19fdGl0bGUgdGV4dC11cHBlcmNhc2UgbWItMFwiPlBhcmFsbGVsPC9oMj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cImxvZ29fX3N1YnRpdGxlIHRleHQtdXBwZXJjYXNlIGZvbnQtd2VpZ2h0LWxpZ2h0IG10LW4xXCI+RGFzaGJvYXJkPC9wPlxuXHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21vdGlvbi5oZWFkZXI+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQWxlcnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBsb2dvdXQgfSBmcm9tICcuLi8uLi9hcGkvc2VjdXJpdHknO1xuXG4vKiBSb3V0ZXMgKi9cbmltcG9ydCB7IFJPVVRFUyB9IGZyb20gJy4uLy4uL3JvdXRlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlck5hdmlnYXRpb24oKSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IGhpc3RvcnkgPSB1c2VIaXN0b3J5KCk7XG5cdGNvbnN0IHsgc2V0Q3VycmVudFVzZXIgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGxvZ291dE11dGF0aW9uID0gdXNlTXV0YXRpb24obG9nb3V0LCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHRoaXN0b3J5LnB1c2goUk9VVEVTLmxvZ2luKTtcblx0XHRcdHNldEN1cnJlbnRVc2VyKG51bGwpO1xuXHRcdFx0dG9hc3QoPEFsZXJ0IG1lc3NhZ2U9eydTdWNjZXNzZnVsbHkgbG9nZ2VkIG91dCEnfSBhcHBlYXJhbmNlPVwic3VjY2Vzc1wiIC8+KTtcblx0XHR9LFxuXHRcdG9uRXJyb3I6ICgpID0+IHRvYXN0KDxBbGVydCBtZXNzYWdlPXsnU29tZXRoaW5nIHdlbnQgd3JvbmchJ30gYXBwZWFyYW5jZT1cImRhbmdlclwiIC8+KSxcblx0fSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5oZWFkZXIgY2xhc3NOYW1lPVwibWFpbi1oZWFkZXIgbWFpbi1oZWFkZXItLXByb2plY3RzXCIgey4uLkZBREVfSU59PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWhlYWRlcl9fd3JhcHBlciBkLWZsZXggYWxpZ24taXRlbXMtZW5kXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluLWhlYWRlcl9fbG9nbyBsb2dvXCI+XG5cdFx0XHRcdFx0XHQ8TGluayBjbGFzc05hbWU9XCJsb2dvX19saW5rIHRleHQtcmVzZXRcIiB0bz17Uk9VVEVTLnByb2plY3RzfSB0aXRsZT1cIlBhcmFsbGVsIERhc2hib2FyZFwiPlxuXHRcdFx0XHRcdFx0XHQ8aDIgY2xhc3NOYW1lPVwibG9nb19fdGl0bGUgdGV4dC11cHBlcmNhc2UgdGV4dC13aGl0ZSBtYi0wXCI+UGFyYWxsZWw8L2gyPlxuXHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJsb2dvX19zdWJ0aXRsZSB0ZXh0LXVwcGVyY2FzZSB0ZXh0LXdoaXRlIGZvbnQtd2VpZ2h0LWxpZ2h0IG10LW4xXCI+XG5cdFx0XHRcdFx0XHRcdFx0RGFzaGJvYXJkXG5cdFx0XHRcdFx0XHRcdDwvcD5cblx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4taGVhZGVyX19uYXYgbWwtYXV0b1wiPlxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtLXByaW1hcnlcIj5cblx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0aHJlZj1cInt7IHBhdGgoJ2FwcF9sb2dvdXQnKSB9fVwiXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT1cIkxvZ291dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJuYXYtbGluayBidG4gYnRuLWxpbmsgdGV4dC1yZXNldFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBsb2dvdXRNdXRhdGlvbi5tdXRhdGUoKX0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJuYXYtdGV4dFwiPkxvZ291dDwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdDwvdWw+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9tb3Rpb24uaGVhZGVyPlxuXHQpO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBBY3Rpb25NZW51IH0gZnJvbSAnLi9hY3Rpb24tbWVudS9BY3Rpb25NZW51JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQWxlcnQgfSBmcm9tICcuL2FsZXJ0L0FsZXJ0JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQmFja2dyb3VuZCB9IGZyb20gJy4vYmFja2dyb3VuZC9CYWNrZ3JvdW5kJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm94IH0gZnJvbSAnLi9ib3gvQm94JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQnV0dG9uIH0gZnJvbSAnLi9idXR0b24vQnV0dG9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcHpvbmUgfSBmcm9tICcuL2Ryb3B6b25lL0Ryb3B6b25lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgRWRpdGFibGUgfSBmcm9tICcuL2VkaXRhYmxlL0VkaXRhYmxlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuL2xvYWRpbmctd3JhcHBlci9Mb2FkaW5nV3JhcHBlcic7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsIH0gZnJvbSAnLi9tb2RhbC9Nb2RhbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFBhZ2VMb2FkZXIgfSBmcm9tICcuL3BhZ2UtbG9hZGVyL1BhZ2VMb2FkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQYWdlV3JhcHBlciB9IGZyb20gJy4vcGFnZS13cmFwcGVyL1BhZ2VXcmFwcGVyJztcblxuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VyQWRkIH0gZnJvbSAnLi91c2VyLWFkZC9Vc2VyQWRkJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlckFkZFNlYXJjaCB9IGZyb20gJy4vdXNlci1hZGQvVXNlckFkZFNlYXJjaCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJBZGRTZWFyY2hSZXN1bHRzIH0gZnJvbSAnLi91c2VyLWFkZC9Vc2VyQWRkU2VhcmNoUmVzdWx0cyc7XG5cbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXIvSGVhZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSGVhZGVyTmF2aWdhdGlvbiB9IGZyb20gJy4vaGVhZGVyL0hlYWRlck5hdmlnYXRpb24nO1xuXG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXIgfSBmcm9tICcuL3VzZXJzL1VzZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VycyB9IGZyb20gJy4vdXNlcnMvVXNlcnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VyU2VsZWN0IH0gZnJvbSAnLi91c2Vycy9Vc2VyU2VsZWN0JztcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTQ0FMRV9GQURFIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRpbmdXcmFwcGVyKHsgbG9hZGluZywgY2hpbGRyZW4sIGxvYWRlclNpemUgPSA0MCwgY2xhc3NlcyA9IHt9IH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgbG9hZGVyQ2xhc3NlcyA9ICdwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXgnLCBkZWZhdWx0Q2xhc3NlcyA9ICcnIH0gPSBjbGFzc2VzO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9PlxuXHRcdFx0e2xvYWRpbmcgPyAoXG5cdFx0XHRcdDxtb3Rpb24uZGl2IGtleT1cImxvYWRlclwiIGNsYXNzTmFtZT17bG9hZGVyQ2xhc3Nlc30gey4uLlNDQUxFX0ZBREV9PlxuXHRcdFx0XHRcdDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwiaW5oZXJpdFwiIHNpemU9e2xvYWRlclNpemV9IC8+XG5cdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxtb3Rpb24uZGl2IGtleT1cImRlZmF1bHRcIiBjbGFzc05hbWU9e2RlZmF1bHRDbGFzc2VzfSB7Li4uU0NBTEVfRkFERX0+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQpfVxuXHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4sIFRSQU5TRk9STV9VUCB9IGZyb20gXCIuLi8uLi9hbmltYXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsKHsgdG9nZ2xlTW9kYWwsIGNoaWxkcmVuLCBkb21FbGVtZW50LCB2YXJpYW50ID0gXCJkZWZhdWx0XCIgfSkge1xuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9XCJjdXN0b20tbW9kYWxcIiBjbGFzc05hbWU9e2BjdXN0b20tbW9kYWwgY3VzdG9tLW1vZGFsLS0ke3ZhcmlhbnR9YH0+XG4gICAgICAgICAgICA8bW90aW9uLmRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX292ZXJsYXlcIiBvbkNsaWNrPXt0b2dnbGVNb2RhbH0gey4uLkZBREVfSU59IC8+XG4gICAgICAgICAgICA8bW90aW9uLmFydGljbGUga2V5PVwiY3VzdG9tLW1vZGFsX19jb250ZW50XCIgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19jb250ZW50XCIgey4uLlRSQU5TRk9STV9VUH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgZC1mbGV4IGZsZXgtZ3Jvdy0xXCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uYXJ0aWNsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIGlmIChkb21FbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwocmVuZGVyKCksIGRvbUVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiByZW5kZXIoKTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4gfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnZUxvYWRlcih7IGlzTG9hZGluZywgY2hpbGRyZW4gfSkge1xuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0e2lzTG9hZGluZyA/IChcblx0XHRcdFx0PG1vdGlvbi5kaXYgey4uLkZBREVfSU59PlxuXHRcdFx0XHRcdDxMaW5lYXJQcm9ncmVzcyBjb2xvcj1cInNlY29uZGFyeVwiIC8+XG5cdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxkaXYga2V5PVwiY2hpbGRyZW5cIj57Y2hpbGRyZW59PC9kaXY+XG5cdFx0XHQpfVxuXHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBhZ2VXcmFwcGVyKHsgY2hpbGRyZW4gfSkge1xuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8bWFpbiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cblx0XHRcdDxzZWN0aW9uIGNsYXNzTmFtZT1cInBhbmUgcHktNSBweS1sZy0xMFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPntjaGlsZHJlbn08L2Rpdj5cblx0XHRcdDwvc2VjdGlvbj5cblx0XHQ8L21haW4+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBCb3gsIFVzZXJBZGRTZWFyY2ggfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkVXNlckljb24gZnJvbSAnaWNvbnMvYWRkX3VzZXIuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckFkZCh7IHVzZXJzLCBwcm9qZWN0IH0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW2JveE9wZW4sIHNldEJveE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB0b2dnbGVCb3ggPSAoKSA9PiBzZXRCb3hPcGVuKCFib3hPcGVuKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIG1sLTJcIj5cblx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIHVzZXIgdXNlci0tbGcgdXNlci0tYWRkXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZUJveH0+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInVzZXJfX2F2YXRhclwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlcl9faW5pdGlhbHNcIj5cblx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9faWNvbiBpY29uIGljb24tLTEyIG10LTBcIiBzcmM9e2FkZFVzZXJJY29ufSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDxCb3ggdGl0bGU9XCJTZWxlY3QgdXNlcnNcIiBzdWJ0aXRsZT1cIkNob29zZSBzb21lIHVzZXJzIHRvIGNvbGxhYm9yYXRlIHdpdGguXCIgey4uLnsgYm94T3BlbiwgdG9nZ2xlQm94IH19PlxuXHRcdFx0XHQ8VXNlckFkZFNlYXJjaCB7Li4ueyB1c2VycywgcHJvamVjdCwgdG9nZ2xlQm94IH19IC8+XG5cdFx0XHQ8L0JveD5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXJBZGRTZWFyY2hSZXN1bHRzLCBVc2VycywgQnV0dG9uIH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIFNlcnZpY2VzICovXG5pbXBvcnQgeyBpc0VtYWlsIH0gZnJvbSAnLi4vLi4vc2VydmljZXMnO1xuaW1wb3J0IGZpbHRlclVzZXJzIGZyb20gJy4vc2VydmljZXMvZmlsdGVyVXNlcnMnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGFkZFVzZXIsIGZldGNoR29iYWxVc2VycywgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBZGRTZWFyY2goeyB1c2VycywgcHJvamVjdCwgdG9nZ2xlQm94IH0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtmb2N1c2VkVXNlciwgc2V0Rm9jdXNlZFVzZXJdID0gdXNlU3RhdGUoMCk7XG5cblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGRhdGE6IGdsb2JhbFVzZXJzID0gW10sIGlzTG9hZGluZzogZ2xvYmFsVXNlcnNMb2FkaW5nIH0gPSB1c2VRdWVyeShcblx0XHRRVUVSWV9LRVlTLkdMT0JBTF9VU0VSUyxcblx0XHRmZXRjaEdvYmFsVXNlcnNcblx0KTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgZmlsdGVyZWRVc2VycyA9IGZpbHRlclVzZXJzKGdsb2JhbFVzZXJzLCB1c2VycywgcXVlcnkpO1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgcXVlcnlSZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGFkZFVzZXJNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZFVzZXIsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3QuaWRdKTtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuR0xPQkFMX1VTRVJTKTtcblxuXHRcdFx0cXVlcnlSZWYuY3VycmVudC5zZWxlY3QoKTtcblx0XHRcdHNldFF1ZXJ5KCcnKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0UXVlcnkodmFsdWUpO1xuXG5cdGNvbnN0IGhhbmRsZU9uS2V5RG93biA9IChldmVudCkgPT4ge1xuXHRcdGlmIChbJ0VudGVyJywgJ1RhYiddLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGlmIChxdWVyeSAhPT0gJycgJiYgZm9jdXNlZFVzZXIgIT09IG51bGwpIHtcblx0XHRcdFx0Y29uc3QgdXNlciA9IGZvY3VzZWRVc2VyIGluIGZpbHRlcmVkVXNlcnMgPyBmaWx0ZXJlZFVzZXJzW2ZvY3VzZWRVc2VyXSA6IGZvY3VzZWRVc2VyO1xuXG5cdFx0XHRcdGlmIChpc0VtYWlsKHVzZXIuZW1haWwpKSB7XG5cdFx0XHRcdFx0YWRkVXNlck11dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZDogcHJvamVjdC5pZCwgZW1haWw6IHVzZXIuZW1haWwgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoZW1haWwpID0+IHtcblx0XHRpZiAoaXNFbWFpbChlbWFpbCkpIHtcblx0XHRcdGFkZFVzZXJNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQ6IHByb2plY3QuaWQsIGVtYWlsOiBlbWFpbCB9KTtcblx0XHR9XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1ncm93LTFcIj5cblx0XHRcdDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdCB9fSB2YXJpYW50PVwiaW50ZXJhY3RpdmVcIiBzaXplPVwieGxcIiAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuXHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJ1c2VyUXVlcnlcIj5cblx0XHRcdFx0XHRTZWFyY2ggbmFtZSBvciBlbWFpbFxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIGZvcm0tY29udHJvbC0tc2VhcmNoXCJcblx0XHRcdFx0XHRpZD1cInVzZXJRdWVyeVwiXG5cdFx0XHRcdFx0bmFtZT1cInVzZXJRdWVyeVwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTZWFyY2ggbmFtZSBvciBlbWFpbFwiXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdGF1dG9Gb2N1c1xuXHRcdFx0XHRcdHZhbHVlPXtxdWVyeX1cblx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdG9uS2V5RG93bj17aGFuZGxlT25LZXlEb3dufVxuXHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cIm9mZlwiXG5cdFx0XHRcdFx0cmVmPXtxdWVyeVJlZn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PFVzZXJBZGRTZWFyY2hSZXN1bHRzXG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdGZpbHRlcmVkVXNlcnMsXG5cdFx0XHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0XHRcdGhhbmRsZUNsaWNrLFxuXHRcdFx0XHRcdFx0Zm9jdXNlZFVzZXIsXG5cdFx0XHRcdFx0XHRzZXRGb2N1c2VkVXNlcixcblx0XHRcdFx0XHRcdHVzZXJNdXRhdGlvbkxvYWRpbmc6IGFkZFVzZXJNdXRhdGlvbi5pc0xvYWRpbmcsXG5cdFx0XHRcdFx0XHRnbG9iYWxVc2Vyc0xvYWRpbmcsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNFwiPlxuXHRcdFx0XHQ8QnV0dG9uIHRpdGxlPVwiRG9uZVwiIG9uQ2xpY2s9e3RvZ2dsZUJveH0gZXh0ZW5zaW9uQ2xhc3Nlcz1cInctNTAganVzdGlmeS1jb250ZW50LWNlbnRlclwiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlclNlbGVjdCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBZGRTZWFyY2hSZXN1bHRzKHtcblx0ZmlsdGVyZWRVc2Vycyxcblx0cXVlcnksXG5cdGhhbmRsZUNsaWNrLFxuXHRmb2N1c2VkVXNlcixcblx0c2V0Rm9jdXNlZFVzZXIsXG5cdHVzZXJNdXRhdGlvbkxvYWRpbmcsXG5cdGdsb2JhbFVzZXJzTG9hZGluZyxcbn0pIHtcblx0LyogUmVuZGVyIGZpbHRlcmVkIHJlc3VsdHMgKi9cblx0Y29uc3QgcmVzdWx0cyA9ICgpID0+IHtcblx0XHRjb25zdCBuZXdVc2VyID0geyBlbWFpbDogcXVlcnksIHVzZXJuYW1lOiAnTmV3IHVzZXInLCB1c2VyQ29sb3I6ICcjQ0MyNUU4JyB9O1xuXG5cdFx0aWYgKGZpbHRlcmVkVXNlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIGZpbHRlcmVkVXNlcnMubWFwKCh1c2VyLCB1c2VySW5kZXgpID0+IChcblx0XHRcdFx0PG1vdGlvbi5saSB7Li4uRkFERV9JTn0ga2V5PXt1c2VyLmlkfSBjbGFzc05hbWU9XCJsaXN0X19pdGVtIHZyLTNcIj5cblx0XHRcdFx0XHQ8VXNlclNlbGVjdFxuXHRcdFx0XHRcdFx0ey4uLnsgdXNlciwgdXNlckluZGV4LCBoYW5kbGVDbGljaywgc2V0Rm9jdXNlZFVzZXIgfX1cblx0XHRcdFx0XHRcdGlzRm9jdXNlZD17dXNlckluZGV4ID09PSBmb2N1c2VkVXNlciAmJiBxdWVyeX1cblx0XHRcdFx0XHRcdGlzTG9hZGluZz17dXNlck11dGF0aW9uTG9hZGluZ31cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L21vdGlvbi5saT5cblx0XHRcdCkpO1xuXHRcdH1cblxuXHRcdGlmICghZ2xvYmFsVXNlcnNMb2FkaW5nKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8bW90aW9uLmxpIHsuLi5GQURFX0lOfSBrZXk9XCJOZXcgdXNlclwiIGNsYXNzTmFtZT1cImxpc3RfX2l0ZW0gaXMtZm9jdXNlZCB2ci0zXCI+XG5cdFx0XHRcdFx0PFVzZXJTZWxlY3Rcblx0XHRcdFx0XHRcdHsuLi57IHVzZXI6IG5ld1VzZXIsIHVzZXJJbmRleDogbmV3VXNlciwgaGFuZGxlQ2xpY2ssIHNldEZvY3VzZWRVc2VyIH19XG5cdFx0XHRcdFx0XHRpc0ZvY3VzZWQ9e3F1ZXJ5Lmxlbmd0aH1cblx0XHRcdFx0XHRcdGlzTG9hZGluZz17dXNlck11dGF0aW9uTG9hZGluZ31cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L21vdGlvbi5saT5cblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHR7cXVlcnkgIT09ICcnICYmIChcblx0XHRcdFx0PG1vdGlvbi51bCB7Li4uRkFERV9JTn0gY2xhc3NOYW1lPVwiYm94X19saXN0IGxpc3RcIj5cblx0XHRcdFx0XHR7cmVzdWx0cygpfVxuXHRcdFx0XHQ8L21vdGlvbi51bD5cblx0XHRcdCl9XG5cdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaWx0ZXJVc2VycyhnbG9iYWxVc2VycywgdXNlcnMsIHF1ZXJ5KSB7XG4gICAgY29uc3QgbG93ZXJRdWVyeSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgZXhpc3RpbmdVc2Vyc0J5RW1haWwgPSB1c2Vycy5tYXAoKHsgZW1haWwgfSkgPT4gZW1haWwpO1xuXG4gICAgbGV0IGZpbHRlcmVkVXNlcnMgPSBnbG9iYWxVc2Vyc1xuICAgICAgICAuZmlsdGVyKCh7IGVtYWlsIH0pID0+IHtcbiAgICAgICAgICAgIC8qIE9ubHkgcmV0dXJuIHVzZXJzIHRoYXQgYXJlIG5vdCBwYXJ0IG9mIHRoZSBwcm9qZWN0ICovXG4gICAgICAgICAgICByZXR1cm4gIWV4aXN0aW5nVXNlcnNCeUVtYWlsLmluY2x1ZGVzKGVtYWlsKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbHRlcigoeyBlbWFpbCwgdXNlcm5hbWUgfSkgPT4ge1xuICAgICAgICAgICAgLyogT25seSByZXR1cm4gdXNlcnMgdGhhdCBtYXRjaCB0aGUgcXVlcnkgb24gZW1haWwgfHwgdXNlcm5hbWUgKi9cbiAgICAgICAgICAgIHJldHVybiBlbWFpbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyUXVlcnkpIHx8IHVzZXJuYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJRdWVyeSk7XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbHRlcmVkVXNlcnM7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgc3Rhckljb24gZnJvbSAnaWNvbnMvc3Rhci5zdmcnO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnaWNvbnMvZGVsZXRlLnN2Zyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZGVsZXRlVXNlciwgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXIoeyB1c2VyLCBwcm9qZWN0ID0ge30sIHZhcmlhbnQgPSAnZGVmYXVsdCcsIHNpemUgPSAnbWQnIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IGlkOiBwcm9qZWN0SWQsIGF1dGhvciB9ID0gcHJvamVjdDtcblx0Y29uc3QgeyBpZDogdXNlcklkLCBlbWFpbCB9ID0gdXNlcjtcblxuXHRjb25zdCBpc0F1dGhvciA9IGVtYWlsID09PSBhdXRob3I7XG5cdGNvbnN0IGNsYXNzZXMgPSBbJ3VzZXInLCBgdXNlci0tJHtzaXplfWAsIGB1c2VyLS0ke3ZhcmlhbnR9YCwgaXNBdXRob3IgJiYgJ3VzZXItLWF1dGhvciddLmpvaW4oJyAnKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgZGVsZXRlVXNlck11dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlVXNlciwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSksXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cblx0XHRcdDxVc2VyQXZhdGFyIGlzTG9hZGluZz17ZGVsZXRlVXNlck11dGF0aW9uLmlzTG9hZGluZ30gey4uLnVzZXJ9PlxuXHRcdFx0XHR7dmFyaWFudCA9PT0gJ2ludGVyYWN0aXZlJyAmJiAhaXNBdXRob3IgJiYgKFxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInVzZXJfX2FjdGlvbiBidG4gYnRuLWxpbmsgcC0wXCJcblx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGVsZXRlVXNlck11dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgdXNlcklkIH0pfT5cblx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9fYWN0aW9uLWljb24gaWNvbiBpY29uLS0xNFwiIHNyYz17ZGVsZXRlSWNvbn0gLz5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0KX1cblx0XHRcdDwvVXNlckF2YXRhcj5cblx0XHRcdHtpc0F1dGhvciAmJiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlcl9fc3RhdHVzIHVzZXJfX3N0YXR1cy0tbGVhZGVyXCI+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19zdGF0dXMtaWNvbiBpY29uIHRleHQtdGVydGlhcnkgbXQtMFwiIHNyYz17c3Rhckljb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGNvbnN0IFVzZXJBdmF0YXIgPSAoeyB1c2VybmFtZSwgdXNlckNvbG9yLCBpc0xvYWRpbmcsIGNoaWxkcmVuIH0pID0+IHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHVzZXJJbml0aWFscyA9IHVzZXJuYW1lLnNwbGl0KCcgJykubWFwKCh3b3JkKSA9PiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlcl9fYXZhdGFyXCIgc3R5bGU9e3sgJy0tdGhlbWUnOiB1c2VyQ29sb3IgfX0+XG5cdFx0XHQ8TG9hZGluZ1dyYXBwZXIgbG9hZGluZz17aXNMb2FkaW5nfSBsb2FkZXJTaXplPXsxNn0+XG5cdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInVzZXJfX2luaXRpYWxzXCI+e3VzZXJJbml0aWFsc308L3NwYW4+XG5cdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuXG5leHBvcnQgY29uc3QgVXNlckluZm8gPSAoeyB1c2VybmFtZSwgZW1haWwgfSkgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBtbC0zXCI+XG5cdFx0PHAgY2xhc3NOYW1lPVwibWItMFwiPnt1c2VybmFtZX08L3A+XG5cdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNjAgdGV4dC0teHNcIj57ZW1haWx9PC9wPlxuXHQ8L2Rpdj5cbik7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgeyBVc2VyQXZhdGFyLCBVc2VySW5mbyB9IGZyb20gJy4vVXNlcic7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZFVzZXJJY29uIGZyb20gJ2ljb25zL2FkZF91c2VyLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJTZWxlY3QoeyB1c2VyLCB1c2VySW5kZXgsIGhhbmRsZUNsaWNrLCBpc0ZvY3VzZWQsIHNldEZvY3VzZWRVc2VyLCBpc0xvYWRpbmcgfSkge1xuXHQvKiBFZmZlY3RzICovXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aXNGb2N1c2VkICYmIHNldEZvY3VzZWRVc2VyKHVzZXJJbmRleCk7XG5cdH0sIFtpc0ZvY3VzZWRdKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHJldHVybiAoKSA9PiBzZXRGb2N1c2VkVXNlcigwKTtcblx0fSwgW10pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBoYW5kbGVTdGF0dXMgPSAoYWN0aW9uKSA9PiB7XG5cdFx0c2V0Rm9jdXNlZFVzZXIoYWN0aW9uID09PSAnZW50ZXInID8gdXNlckluZGV4IDogMCk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0Y2xhc3NOYW1lPXtgdXNlciB1c2VyLS1zZWxlY3QgJHtpc0ZvY3VzZWQgJiYgJ2lzLWZvY3VzZWQnfSB1c2VyLS14bGB9XG5cdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayh1c2VyLmVtYWlsKX1cblx0XHRcdG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlU3RhdHVzKCdlbnRlcicpfVxuXHRcdFx0b25Nb3VzZUxlYXZlPXsoKSA9PiBoYW5kbGVTdGF0dXMoJ2xlYXZlJyl9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxVc2VyQXZhdGFyIGlzTG9hZGluZz17aXNMb2FkaW5nICYmIGlzRm9jdXNlZH0gey4uLnVzZXJ9IC8+XG5cdFx0XHRcdDxVc2VySW5mbyB7Li4udXNlcn0gLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19hZGQgdGV4dC1zZWNvbmRhcnkgcm91bmRlZC1jaXJjbGUgbWwtYXV0b1wiPlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9fYWRkLWljb24gaWNvbiBpY29uLS0xMiB0ZXh0LXNlY29uZGFyeVwiIHNyYz17YWRkVXNlckljb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9idXR0b24+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU0NBTEVfRkFERSB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2Vycyh7IHVzZXJzLCBsYXlvdXQgPSAnZnVsbCcsIC4uLnJlc3QgfSkge1xuXHRjb25zdCBzbGljZUFtb3VudCA9IGxheW91dCA9PT0gJ21pbmltYWwnID8gNyA6IEluZmluaXR5O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBndXR0ZXJzLTFcIj5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHt1c2Vycy5zbGljZSgwLCBzbGljZUFtb3VudCkubWFwKCh1c2VyKSA9PiB7XG5cdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2IGxheW91dCB7Li4uU0NBTEVfRkFERX0gY2xhc3NOYW1lPVwiY29sLWF1dG9cIiBrZXk9e3VzZXIuaWR9PlxuXHRcdFx0XHRcdFx0XHQ8VXNlciB7Li4ueyB1c2VyLCAuLi5yZXN0IH19IC8+XG5cdFx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSl9XG5cdFx0XHRcdHtsYXlvdXQgPT09ICdtaW5pbWFsJyAmJiB1c2Vycy5sZW5ndGggPiA3ICYmIChcblx0XHRcdFx0XHQ8bW90aW9uLmRpdiBsYXlvdXQgey4uLlNDQUxFX0ZBREV9IGNsYXNzTmFtZT1cImNvbC1hdXRvXCIga2V5PVwibW9yZVwiPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC0teHMgdGV4dC1tdXRlZC0tNzAgbWwtMVwiPisge3VzZXJzLmxlbmd0aCAtIHNsaWNlQW1vdW50fTwvcD5cblx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFN0YXRpY0NvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KCk7XG5leHBvcnQgZGVmYXVsdCBTdGF0aWNDb250ZXh0O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXJBZGQsIFVzZXJzLCBFZGl0YWJsZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgc3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBlZGl0UHJvamVjdCwgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWxIZWFkZXIoeyB0aXRsZSwgZGVzY3JpcHRpb24sIHVzZXJzLCBpZCwgYXV0aG9yLCBlbWFpbCB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCBwcm9qZWN0ID0geyBpZCwgYXV0aG9yLCBlbWFpbCB9O1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoc3RhdGljQ29udGV4dCk7XG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgbXV0YXRpb25PblN1Y2Nlc3MgPSAoKSA9PiB7XG5cdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgaWRdKTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi02XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctNlwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7dXNlclJvbGUgPT09ICdhZG1pbicgJiYgJ2VkaXRhYmxlJ30gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yYH0+XG5cdFx0XHRcdFx0PEVkaXRhYmxlXG5cdFx0XHRcdFx0XHRpbnB1dFR5cGU9XCJ0aXRsZVwiXG5cdFx0XHRcdFx0XHRjb250ZW50PXt0aXRsZX1cblx0XHRcdFx0XHRcdG11dGF0aW9uPXtlZGl0UHJvamVjdH1cblx0XHRcdFx0XHRcdG11dGF0aW9uSWQ9e2lkfVxuXHRcdFx0XHRcdFx0bXV0YXRpb25PblN1Y2Nlc3M9e211dGF0aW9uT25TdWNjZXNzfT5cblx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJoNSBtYi0wIHRleHQtd2hpdGVcIj57dGl0bGUgPyB0aXRsZSA6ICdBZGQgYSBuaWNlIHRpdGxlJ308L2gxPlxuXHRcdFx0XHRcdDwvRWRpdGFibGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7dXNlclJvbGUgPT09ICdhZG1pbicgJiYgJ2VkaXRhYmxlJ30gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yYH0+XG5cdFx0XHRcdFx0PEVkaXRhYmxlXG5cdFx0XHRcdFx0XHRpbnB1dFR5cGU9XCJkZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0XHRjb250ZW50PXtkZXNjcmlwdGlvbn1cblx0XHRcdFx0XHRcdG11dGF0aW9uPXtlZGl0UHJvamVjdH1cblx0XHRcdFx0XHRcdG11dGF0aW9uSWQ9e2lkfVxuXHRcdFx0XHRcdFx0bXV0YXRpb25PblN1Y2Nlc3M9e211dGF0aW9uT25TdWNjZXNzfT5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQtLTcwIG1iLTBcIj5cblx0XHRcdFx0XHRcdFx0e2Rlc2NyaXB0aW9uID8gKFxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPntkZXNjcmlwdGlvbn08L3NwYW4+XG5cdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNDBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdHtcIldoYXQncyB0aGlzIHByb2plY3QgYWJvdXQ/IFNldCB0aGUgY29udGV4dCwgdGhlIGdvYWxzLCB0aGUgY29uc3RyYWludHNcIn1cblx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHQ8L3A+XG5cdFx0XHRcdFx0PC9FZGl0YWJsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gZC1mbGV4IGFsaWduLWl0ZW1zLWJhc2VsaW5lIG1sLWF1dG9cIj5cblx0XHRcdFx0PFVzZXJzIHsuLi57IHVzZXJzLCBwcm9qZWN0IH19IHNpemU9XCJsZ1wiIC8+XG5cdFx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiA8VXNlckFkZCB7Li4ueyB1c2VycywgcHJvamVjdCB9fSAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBFZGl0YWJsZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjaGVja0ljb24gZnJvbSAnaWNvbnMvY2hlY2suc3ZnJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGVkaXRQcm9qZWN0SW1hZ2UsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0RGV0YWlsSW1hZ2UoeyBwcm9qZWN0SW1hZ2UsIHByb2plY3RJZCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJbWFnZUlkLCB0aXRsZSwgcGhhc2VzID0gW10gfSA9IHByb2plY3RJbWFnZTtcblx0Y29uc3QgeyBpbWFnZSB9ID0gcGhhc2VzW3BoYXNlcy5sZW5ndGggLSAxXSB8fCB7fTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IG11dGF0aW9uT25TdWNjZXNzID0gKCkgPT4ge1xuXHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0pO1xuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxhcnRpY2xlIGNsYXNzTmFtZT17YGNhcmQgY2FyZC0tbGluayBjYXJkLS1wcm9kdWN0ICR7c2VsZWN0ZWQuaW5jbHVkZXMocHJvamVjdEltYWdlSWQpICYmICdpcy1zZWxlY3RlZCd9YH0+XG5cdFx0XHQ8TGluayB0bz17YC9wcm9qZWN0cy8ke3Byb2plY3RJZH0vcmV2aWV3LyR7cHJvamVjdEltYWdlSWR9JHtsb2NhdGlvbi5zZWFyY2h9YH0gdGl0bGU9e3RpdGxlfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX19pbWFnZSBib3JkZXIgbS0yXCI+XG5cdFx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCJcblx0XHRcdFx0XHRcdHNyYz17aW1hZ2UudGh1bWJuYWlsfVxuXHRcdFx0XHRcdFx0c3JjU2V0PXtgJHtpbWFnZS50aHVtYm5haWxSZXRpbmF9IDJ4YH1cblx0XHRcdFx0XHRcdGFsdD17dGl0bGV9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0xpbms+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuXHRcdFx0XHQ8RWRpdGFibGVcblx0XHRcdFx0XHRpbnB1dFR5cGU9XCJ0aXRsZVwiXG5cdFx0XHRcdFx0cHJvamVjdElkPXtwcm9qZWN0SWR9XG5cdFx0XHRcdFx0Y29udGVudD17dGl0bGV9XG5cdFx0XHRcdFx0bXV0YXRpb249e2VkaXRQcm9qZWN0SW1hZ2V9XG5cdFx0XHRcdFx0bXV0YXRpb25JZD17cHJvamVjdEltYWdlSWR9XG5cdFx0XHRcdFx0ey4uLnsgbXV0YXRpb25PblN1Y2Nlc3MgfX0+XG5cdFx0XHRcdFx0PG1vdGlvbi5wIHsuLi5GQURFX0lOfSBjbGFzc05hbWU9XCJtYi0wXCI+XG5cdFx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdFx0PC9tb3Rpb24ucD5cblx0XHRcdFx0PC9FZGl0YWJsZT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX19zZWxlY3RcIj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC10b2dnbGVcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHVwZGF0ZVNlbGVjdGVkKHByb2plY3RJbWFnZUlkKTtcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC1pY29uIGljb24gaWNvbi0tOFwiIHNyYz17Y2hlY2tJY29ufSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvYXJ0aWNsZT5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IERyb3B6b25lLCBBY3Rpb25NZW51IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IFByb2plY3REZXRhaWxJbWFnZSBmcm9tICcuL1Byb2plY3REZXRhaWxJbWFnZSc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU1RBR0dFUl9VUCB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0SW1hZ2VzLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZVNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdERldGFpbEltYWdlcyh7IHByb2plY3RJbWFnZXMsIHByb2plY3RJZCB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkLCByZXNldFNlbGVjdGVkIH0gPSB1c2VTZWxlY3Rpb24oKTtcblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXHRjb25zdCB7IHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVQcm9qZWN0SW1hZ2VzLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKTtcblx0XHRcdHJlc2V0U2VsZWN0ZWQoKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgYWN0aW9ucyA9IFtcblx0XHR7XG5cdFx0XHR0aXRsZTogJ1JlbW92ZScsXG5cdFx0XHR0aGVtZTogJ2RhbmdlcicsXG5cdFx0XHRoYXNQZXJtaXNzaW9uOiBbJ2FkbWluJ10sXG5cdFx0XHRpY29uOiBkZWxldGVJY29uLFxuXHRcdFx0aWNvblNpemU6IDEwLFxuXHRcdFx0bXV0YXRpb246ICgpID0+IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZUlkczogc2VsZWN0ZWQgfSksXG5cdFx0XHRpc0xvYWRpbmc6IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbi5pc0xvYWRpbmcsXG5cdFx0fSxcblx0XTtcblxuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7c2VsZWN0ZWQubGVuZ3RoID4gMCAmJiAnaGFzLXNlbGVjdGlvbnMnfWB9PlxuXHRcdFx0XHR7dXNlclJvbGUgPT09ICdhZG1pbicgPyAoXG5cdFx0XHRcdFx0PERyb3B6b25lIHsuLi57IHByb2plY3RJZCwgcHJvamVjdEltYWdlcywgcG9zaXRpdGlvbjogJ3JpZ2h0JyB9fT5cblx0XHRcdFx0XHRcdHsoKSA9PiA8SW1hZ2VzIHsuLi57IHByb2plY3RJbWFnZXMsIHByb2plY3RJZCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH19IC8+fVxuXHRcdFx0XHRcdDwvRHJvcHpvbmU+XG5cdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy01XCI+XG5cdFx0XHRcdFx0XHQ8SW1hZ2VzIHsuLi57IHByb2plY3RJbWFnZXMsIHByb2plY3RJZCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH19IC8+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHtzZWxlY3RlZC5sZW5ndGggPiAwICYmIDxBY3Rpb25NZW51IHsuLi57IHNlbGVjdGVkLCByZXNldFNlbGVjdGVkLCBhY3Rpb25zIH19IC8+fVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC8+XG5cdCk7XG59XG5cbmNvbnN0IEltYWdlcyA9ICh7IHByb2plY3RJbWFnZXMsIHByb2plY3RJZCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH0pID0+IHtcblx0cmV0dXJuIChcblx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0e3Byb2plY3RJbWFnZXMubWFwKChwcm9qZWN0SW1hZ2UsIHByb2plY3RJbWFnZUluZGV4KSA9PiAoXG5cdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0ey4uLlNUQUdHRVJfVVAocHJvamVjdEltYWdlSW5kZXgpfVxuXHRcdFx0XHRcdGtleT17cHJvamVjdEltYWdlLmlkfVxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtMyBjb2wteHhsLTJcIlxuXHRcdFx0XHRcdGxheW91dD5cblx0XHRcdFx0XHQ8UHJvamVjdERldGFpbEltYWdlIHsuLi57IHByb2plY3RJbWFnZSwgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfX0gLz5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0KSl9XG5cdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG59O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0RGV0YWlsSGVhZGVyIH0gZnJvbSAnLi9Qcm9qZWN0RGV0YWlsSGVhZGVyJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdERldGFpbEltYWdlcyB9IGZyb20gJy4vUHJvamVjdERldGFpbEltYWdlcyc7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlcnMgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgeyBQcm9qZWN0SW1hZ2UgfSBmcm9tICcuLyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNoZWNrSWNvbiBmcm9tICdpY29ucy9jaGVjay5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KHsgcHJvamVjdCwgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkIH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgdGl0bGUsIHByb2plY3RJbWFnZXMsIHVzZXJzLCBhdXRob3IsIGlkIH0gPSBwcm9qZWN0O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxMaW5rXG5cdFx0XHR0bz17YHByb2plY3RzLyR7aWR9JHtsb2NhdGlvbi5zZWFyY2h9YH1cblx0XHRcdHRpdGxlPXt0aXRsZX1cblx0XHRcdGNsYXNzTmFtZT17YGNhcmQgY2FyZC0tbGluayBjYXJkLS1wcm9kdWN0ICR7c2VsZWN0ZWQuaW5jbHVkZXMoaWQpICYmICdpcy1zZWxlY3RlZCd9YH0+XG5cdFx0XHQ8UHJvamVjdEltYWdlIHsuLi57IHByb2plY3RJbWFnZXMgfX0gLz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItMlwiPnt0aXRsZSA/IHRpdGxlIDogJ0FkZCBhIG5pY2UgdGl0bGUnfTwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdDogeyBhdXRob3IgfSwgbGF5b3V0OiAnbWluaW1hbCcgfX0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fc2VsZWN0XCI+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXJkX19zZWxlY3QtdG9nZ2xlXCJcblx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHR1cGRhdGVTZWxlY3RlZChpZCk7XG5cdFx0XHRcdFx0fX0+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJjYXJkX19zZWxlY3QtaWNvbiBpY29uIGljb24tLThcIiBzcmM9e2NoZWNrSWNvbn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L0xpbms+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5LCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogRG9tYWluICovXG5pbXBvcnQgeyBQcm9qZWN0TW9kYWwgfSBmcm9tICcuLyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNDQUxFX0ZBREUgfSBmcm9tICcuLi8uLi9hbmltYXRpb25zJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkUHJvamVjdEljb24gZnJvbSAnaWNvbnMvYWRkX3Byb2plY3Quc3ZnJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBhZGRQcm9qZWN0LCBRVUVSWV9LRVlTLCBlZGl0UHJvamVjdCwgZmV0Y2hQcm9qZWN0QnlJZCB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RBZGQoeyBzZXROZXdQcm9qZWN0SWQgfSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbcHJvamVjdElkLCBzZXRQcm9qZWN0SWRdID0gdXNlU3RhdGUobnVsbCk7XG5cdGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBkYXRhOiBwcm9qZWN0IH0gPSB1c2VRdWVyeShbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdLCAoKSA9PiBmZXRjaFByb2plY3RCeUlkKHsgcHJvamVjdElkIH0pLCB7XG5cdFx0ZW5hYmxlZDogISFwcm9qZWN0SWQsXG5cdH0pO1xuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0c2V0TmV3UHJvamVjdElkKHByb2plY3RJZCk7XG5cdH0sIFtwcm9qZWN0SWRdKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgYWRkTXV0YXRpb24gPSB1c2VNdXRhdGlvbihhZGRQcm9qZWN0LCB7XG5cdFx0b25TdWNjZXNzOiAoeyBpZCB9KSA9PiBzZXRQcm9qZWN0SWQoaWQpLFxuXHR9KTtcblxuXHRjb25zdCBlZGl0TXV0YXRpb24gPSB1c2VNdXRhdGlvbihlZGl0UHJvamVjdCwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4gaW52YWxpZGF0ZVByb2plY3QoKSxcblx0fSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZU1vZGFsID0gKCkgPT4ge1xuXHRcdHNldE1vZGFsT3BlbighbW9kYWxPcGVuKTtcblxuXHRcdC8qIE11dGF0ZSBvbiBtb2RhbCBvcGVuICovXG5cdFx0aWYgKCFtb2RhbE9wZW4pIGFkZE11dGF0aW9uLm11dGF0ZSgpO1xuXG5cdFx0LyogUmVzZXQgaWQgb24gY2xvc2UgbW9kYWwgKi9cblx0XHRpZiAobW9kYWxPcGVuKSB7XG5cdFx0XHRzZXRUaW1lb3V0KCgpID0+IHtcblx0XHRcdFx0c2V0UHJvamVjdElkKG51bGwpO1xuXHRcdFx0fSwgMjUwKTtcblxuXHRcdFx0aW52YWxpZGF0ZVByb2plY3QoKTtcblx0XHR9XG5cdH07XG5cblx0Y29uc3QgdXBkYXRlUHJvamVjdCA9IChmb3JtUmVmKSA9PiBlZGl0TXV0YXRpb24ubXV0YXRlKHsgZm9ybVJlZiwgaWQ6IHByb2plY3RJZCB9KTtcblx0Y29uc3QgaW52YWxpZGF0ZVByb2plY3QgPSAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLlBST0pFQ1RfQllfVVNFUik7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxtb3Rpb24uYnV0dG9uXG5cdFx0XHRcdHsuLi5TQ0FMRV9GQURFfVxuXHRcdFx0XHRrZXk9XCJhZGQtcHJvamVjdFwiXG5cdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1pbnRlcmFjdGl2ZSBpY29uLXdyYXBwZXItLXNlY29uZGFyeSBidG4gYnRuLWxpbmsgYnRuLS1hZGQgYnRuLS1hZGQtcmlnaHRcIlxuXHRcdFx0XHRzdHlsZT17eyAnLS1zaXplJzogNzUgfX1cblx0XHRcdFx0b25DbGljaz17dG9nZ2xlTW9kYWx9PlxuXHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMzAgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e2FkZFByb2plY3RJY29ufSAvPlxuXHRcdFx0PC9tb3Rpb24uYnV0dG9uPlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e21vZGFsT3BlbiAmJiA8UHJvamVjdE1vZGFsIHsuLi57IHByb2plY3QsIHVwZGF0ZVByb2plY3QsIHRvZ2dsZU1vZGFsIH19IC8+fVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkSW1hZ2VJY29uIGZyb20gJ2ljb25zL2FkZF9pbWFnZS5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0SW1hZ2UoeyBwcm9qZWN0SW1hZ2VzIH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgcGhhc2VzID0gW10sIHRpdGxlIH0gPSBwcm9qZWN0SW1hZ2VzWzBdIHx8IHt9O1xuXHRjb25zdCB7IGltYWdlIH0gPSBwaGFzZXNbcGhhc2VzLmxlbmd0aCAtIDFdIHx8IHt9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9faW1hZ2UgYm9yZGVyIG0tMlwiPlxuXHRcdFx0e2ltYWdlICYmIChcblx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiXG5cdFx0XHRcdFx0c3JjPXtpbWFnZS50aHVtYm5haWx9XG5cdFx0XHRcdFx0c3JjU2V0PXtgJHtpbWFnZS50aHVtYm5haWxSZXRpbmF9IDJ4YH1cblx0XHRcdFx0XHRhbHQ9e3RpdGxlfVxuXHRcdFx0XHQvPlxuXHRcdFx0KX1cblx0XHRcdHshaW1hZ2UgJiYgPFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTQ4IHRleHQtbXV0ZWQtLTQwXCIgc3JjPXthZGRJbWFnZUljb259IC8+fVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0YXJlYUF1dG9zaXplJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBEcm9wem9uZSwgTG9hZGluZ1dyYXBwZXIsIE1vZGFsLCBVc2VycywgVXNlckFkZCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTVEFHR0VSX1VQIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RNb2RhbCh7IHByb2plY3QgPSB7fSwgdXBkYXRlUHJvamVjdCwgdG9nZ2xlTW9kYWwgfSkge1xuXHQvKiBDb25zdGFudHMgICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJZCA9IG51bGwsIHRpdGxlID0gJycsIHByb2plY3RJbWFnZXMgPSBbXSwgdXNlcnMgPSBbXSB9ID0gcHJvamVjdDtcblxuXHQvKiBSZWZzICovXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8TW9kYWwgey4uLnsgdG9nZ2xlTW9kYWwgfX0gZG9tRWxlbWVudD17ZG9jdW1lbnQuYm9keX0+XG5cdFx0XHQ8Zm9ybVxuXHRcdFx0XHRyZWY9e2Zvcm1SZWZ9XG5cdFx0XHRcdG1ldGhvZD1cIlBPU1RcIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Zvcm1cIlxuXHRcdFx0XHRvblN1Ym1pdD17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR0b2dnbGVNb2RhbCgpO1xuXHRcdFx0XHR9fT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2hlYWRlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHB0LTYgcHQtbWQtMTIgcGItM1wiPlxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInByb2plY3RUaXRsZVwiPlxuXHRcdFx0XHRcdFx0e3RpdGxlfVxuXHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLS1jbGVhciB0ZXh0LS14bFwiXG5cdFx0XHRcdFx0XHRpZD1cInByb2plY3RUaXRsZVwiXG5cdFx0XHRcdFx0XHRuYW1lPVwidGl0bGVcIlxuXHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJUaGUgcHJvamVjdCBuYW1lXCJcblx0XHRcdFx0XHRcdG9uQmx1cj17KCkgPT4gdXBkYXRlUHJvamVjdChmb3JtUmVmKX1cblx0XHRcdFx0XHRcdGF1dG9Gb2N1c1xuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Nsb3NlIGJ0biBidG4tbGluayBtbC1hdXRvXCJcblx0XHRcdFx0XHRcdGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcblx0XHRcdFx0XHRcdGFyaWEtbGFiZWw9XCJDbG9zZVwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVNb2RhbH1cblx0XHRcdFx0XHRcdHRhYkluZGV4PVwiLTFcIj5cblx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2JvZHkgcHQtMyBwYi0xMlwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtMlwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJwcm9qZWN0RGVzY3JpcHRpb25cIj5cblx0XHRcdFx0XHRcdFx0XHR7YFdoYXQncyB0aGlzIHByb2plY3QgYWJvdXQ/YH1cblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0PFRleHRhcmVhQXV0b3NpemVcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLS10ZXh0IGZvcm0tY29udHJvbC0tY2xlYXIgbWItMTBcIlxuXHRcdFx0XHRcdFx0XHRcdGlkPVwicHJvamVjdERlc2NyaXB0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZGVzY3JpcHRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiV2hhdCdzIHRoaXMgcHJvamVjdCBhYm91dD9cIlxuXHRcdFx0XHRcdFx0XHRcdG9uQmx1cj17KCkgPT4gdXBkYXRlUHJvamVjdChmb3JtUmVmKX1cblx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmUgbWwtYXV0b1wiPlxuXHRcdFx0XHRcdFx0XHQ8VXNlcnMgey4uLnsgdXNlcnMsIHByb2plY3QgfX0gc2l6ZT1cImxnXCIgLz5cblx0XHRcdFx0XHRcdFx0PFVzZXJBZGQgey4uLnsgdXNlcnMsIHByb2plY3QgfX0gLz5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxEcm9wem9uZSB7Li4ueyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZXMgfX0+XG5cdFx0XHRcdFx0XHR7KHsgdXBkYXRlUHJvamVjdEltYWdlcywgaXNMb2FkaW5nIH0pID0+IChcblx0XHRcdFx0XHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0XHRcdFx0XHR7cHJvamVjdEltYWdlcy5tYXAoKHByb2plY3RJbWFnZSwgcHJvamVjdEltYWdlSW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdDxEcm9wem9uZUltYWdlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGtleT17cHJvamVjdEltYWdlLmlkfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ueyBwcm9qZWN0SW1hZ2UsIHByb2plY3RJbWFnZUluZGV4LCB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc0xvYWRpbmcgfX1cblx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHQ8L0Ryb3B6b25lPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Zvb3RlciBwYi02IHBiLW1kLTEyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0wIHctMTAwXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctMSBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2J0biBidG4gYnRuLWJsb2NrIGJ0bi1zZWNvbmRhcnkgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG1vdGlvbi5zcGFuIGNsYXNzTmFtZT1cImJ0bi10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5TYXZlPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvbW90aW9uLnNwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvTW9kYWw+XG5cdCk7XG59XG5cbmNvbnN0IERyb3B6b25lSW1hZ2UgPSAoeyBwcm9qZWN0SW1hZ2UsIHByb2plY3RJbWFnZUluZGV4LCB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc0xvYWRpbmcgfSkgPT4ge1xuXHRjb25zdCB7IHRpdGxlLCBpZCwgcGhhc2VzID0gW10gfSA9IHByb2plY3RJbWFnZTtcblx0Y29uc3QgeyBpbWFnZSB9ID0gcGhhc2VzW3BoYXNlcy5sZW5ndGggLSAxXSB8fCB7fTtcblxuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRsYXlvdXRcblx0XHRcdHsuLi5TVEFHR0VSX1VQKHByb2plY3RJbWFnZUluZGV4KX1cblx0XHRcdGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtMyBjb2wteHhsLTJcIlxuXHRcdFx0a2V5PXtpZH0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3B6b25lX19jb250YWluZXJcIj5cblx0XHRcdFx0PGltZ1xuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImRyb3B6b25lX19pbWFnZSBpbWctZmx1aWRcIlxuXHRcdFx0XHRcdHNyYz17aW1hZ2UudGh1bWJuYWlsfVxuXHRcdFx0XHRcdHNyY1NldD17YCR7aW1hZ2UudGh1bWJuYWlsUmV0aW5hfSAyeGB9XG5cdFx0XHRcdFx0YWx0PXt0aXRsZX1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBkcm9wem9uZV9faW1hZ2UtZGVsZXRlIHAtMFwiXG5cdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdHVwZGF0ZVByb2plY3RJbWFnZXMoJ2RlbGV0ZScsIHsgcHJvamVjdEltYWdlSWRzOiBbaWRdIH0pO1xuXHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImRyb3B6b25lX19pbWFnZS1kZWxldGUtaWNvbiBpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1kYW5nZXIgbXgtYXV0b1wiXG5cdFx0XHRcdFx0XHRzdHlsZT17eyAnLS1zaXplJzogNTAgfX0+XG5cdFx0XHRcdFx0XHQ8TG9hZGluZ1dyYXBwZXJcblx0XHRcdFx0XHRcdFx0bG9hZGluZz17aXNMb2FkaW5nfVxuXHRcdFx0XHRcdFx0XHRsb2FkZXJTaXplPXsyMH1cblx0XHRcdFx0XHRcdFx0Y2xhc3Nlcz17e1xuXHRcdFx0XHRcdFx0XHRcdGxvYWRlckNsYXNzZXM6ICdwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXggdGV4dC1kYW5nZXInLFxuXHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTE0IHRleHQtZGFuZ2VyIG10LTBcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cblx0XHRcdFx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9tb3Rpb24uZGl2PlxuXHQpO1xufTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEFjdGlvbk1lbnUgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi8nO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOLCBTVEFHR0VSX1VQIH0gZnJvbSAnLi4vLi4vYW5pbWF0aW9ucyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuaW1wb3J0IGxlYXZlSWNvbiBmcm9tICdpY29ucy9sZWF2ZS5zdmcnO1xuaW1wb3J0IGFyY2hpdmVJY29uIGZyb20gJ2ljb25zL2FyY2hpdmUuc3ZnJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZVNlbGVjdGlvbiB9IGZyb20gJy4uLy4uL2hvb2tzJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0cywgbGVhdmVQcm9qZWN0cywgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQvbWFpbkNvbnRleHQnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0UmVzdWx0cyh7IHByb2plY3RzLCBuZXdQcm9qZWN0SWQgfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IHNlbGVjdGVkLCB1cGRhdGVTZWxlY3RlZCwgcmVzZXRTZWxlY3RlZCB9ID0gdXNlU2VsZWN0aW9uKCk7XG5cdGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgbGVhdmVQcm9qZWN0c011dGF0aW9uID0gdXNlTXV0YXRpb24obGVhdmVQcm9qZWN0cywge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIpO1xuXHRcdFx0cmVzZXRTZWxlY3RlZCgpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdGNvbnN0IGRlbGV0ZVByb2plY3RzTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVQcm9qZWN0cywge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIpO1xuXHRcdFx0cmVzZXRTZWxlY3RlZCgpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdGNvbnN0IGFjdGlvbnMgPSBbXG5cdFx0e1xuXHRcdFx0dGl0bGU6ICdMZWF2ZScsXG5cdFx0XHR0aGVtZTogJ3dhcm5pbmcnLFxuXHRcdFx0aGFzUGVybWlzc2lvbjogWyd1c2VyJywgJ2Jhc2ljJ10sXG5cdFx0XHRpY29uOiBsZWF2ZUljb24sXG5cdFx0XHRtdXRhdGlvbjogKCkgPT4gbGVhdmVQcm9qZWN0c011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZHM6IHNlbGVjdGVkLCB1c2VySWQ6IGN1cnJlbnRVc2VyLmlkIH0pLFxuXHRcdFx0aXNMb2FkaW5nOiBsZWF2ZVByb2plY3RzTXV0YXRpb24uaXNMb2FkaW5nLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGl0bGU6ICdBcmNoaXZlJyxcblx0XHRcdHRoZW1lOiAnc2Vjb25kYXJ5Jyxcblx0XHRcdGhhc1Blcm1pc3Npb246IFsnYWRtaW4nXSxcblx0XHRcdGljb246IGFyY2hpdmVJY29uLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGl0bGU6ICdSZW1vdmUnLFxuXHRcdFx0dGhlbWU6ICdkYW5nZXInLFxuXHRcdFx0aGFzUGVybWlzc2lvbjogWydhZG1pbiddLFxuXHRcdFx0aWNvbjogY2xvc2VJY29uLFxuXHRcdFx0aWNvblNpemU6IDEwLFxuXHRcdFx0bXV0YXRpb246ICgpID0+IGRlbGV0ZVByb2plY3RzTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkczogc2VsZWN0ZWQgfSksXG5cdFx0XHRpc0xvYWRpbmc6IGRlbGV0ZVByb2plY3RzTXV0YXRpb24uaXNMb2FkaW5nLFxuXHRcdH0sXG5cdF07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxoMSBjbGFzc05hbWU9XCJoNSB0ZXh0LXdoaXRlIG1iLTZcIj5Zb3VyIHByb2plY3RzPC9oMT5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHtwcm9qZWN0cy5sZW5ndGggPT09IDAgJiYgKFxuXHRcdFx0XHRcdDxtb3Rpb24ucCB7Li4uRkFERV9JTn0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi0wIHBvc2l0aW9uLWFic29sdXRlXCI+XG5cdFx0XHRcdFx0XHR7YFlvdSBkb24ndCBoYXZlIGFueSBwcm9qZWN0cyB5ZXRgfVxuXHRcdFx0XHRcdDwvbW90aW9uLnA+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgcm93IHJvdy0tZXF1YWxpemVkIGd1dHRlcnMtNSAke3NlbGVjdGVkLmxlbmd0aCA+IDAgJiYgJ2hhcy1zZWxlY3Rpb25zJ31gfT5cblx0XHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0XHR7cHJvamVjdHNcblx0XHRcdFx0XHRcdC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IG5ld1Byb2plY3RJZClcblx0XHRcdFx0XHRcdC5tYXAoKHByb2plY3QsIHByb2plY3RJbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdFx0XHRcdHsuLi5TVEFHR0VSX1VQKHByb2plY3RJbmRleCl9XG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtwcm9qZWN0LmlkfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtMyBjb2wteHhsLTJcIlxuXHRcdFx0XHRcdFx0XHRcdGxheW91dD5cblx0XHRcdFx0XHRcdFx0XHQ8UHJvamVjdCB7Li4ueyBwcm9qZWN0LCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfX0gLz5cblx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7c2VsZWN0ZWQubGVuZ3RoID4gMCAmJiA8QWN0aW9uTWVudSB7Li4ueyBzZWxlY3RlZCwgcmVzZXRTZWxlY3RlZCwgYWN0aW9ucyB9fSAvPn1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0QWRkIH0gZnJvbSBcIi4vUHJvamVjdEFkZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0SW1hZ2UgfSBmcm9tIFwiLi9Qcm9qZWN0SW1hZ2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdE1vZGFsIH0gZnJvbSBcIi4vUHJvamVjdE1vZGFsXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RSZXN1bHRzIH0gZnJvbSBcIi4vUHJvamVjdFJlc3VsdHNcIjtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCBQcm9qZWN0UmV2aWV3TWFya2VyIGZyb20gJy4vUHJvamVjdFJldmlld01hcmtlcic7XG5pbXBvcnQgUHJvamVjdFJldmlld0NvbW1lbnQgZnJvbSAnLi9Qcm9qZWN0UmV2aWV3Q29tbWVudCc7XG5pbXBvcnQgUHJvamVjdFJldmlld0NvbW1lbnRCb3ggZnJvbSAnLi9Qcm9qZWN0UmV2aWV3Q29tbWVudEJveCc7XG5cbi8qIEdsb2JhbCAqL1xuY29uc3QgY3Vyc29yT2Zmc2V0ID0gMTA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXdDYW52YXMoeyB0aXRsZSwgcGhhc2VzID0gW10sIHByb2plY3RJbWFnZUlkIH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgaW1hZ2UsIGlkOiBwaGFzZUlkLCBjb21tZW50cyB9ID0gcGhhc2VzW3BoYXNlcy5sZW5ndGggLSAxXSB8fCB7fTtcblxuXHQvKiBSZWZzICovXG5cdGNvbnN0IHJldmlld1JlZiA9IHVzZVJlZigpO1xuXG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFttYXJrZXJQb3MsIHNldE1hcmtlclBvc10gPSB1c2VTdGF0ZSgpO1xuXHRjb25zdCBbYm94T3Blbiwgc2V0Qm94T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZUJveCA9ICgpID0+IHtcblx0XHRzZXRCb3hPcGVuKCFib3hPcGVuKTtcblx0XHRzZXRNYXJrZXJQb3MobnVsbCk7XG5cdH07XG5cblx0Y29uc3QgcG9zTWFya2VyID0gKHsgY2xpZW50WCwgY2xpZW50WSB9KSA9PiB7XG5cdFx0Y29uc3QgcmV2aWV3UG9zID0gcmV2aWV3UmVmPy5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0c2V0TWFya2VyUG9zKCgpID0+IHtcblx0XHRcdGNvbnN0IHhQZXJjZW50ID0gKChjbGllbnRYIC0gY3Vyc29yT2Zmc2V0KSAvIHJldmlld1Bvcy53aWR0aCkgKiAxMDA7XG5cdFx0XHRjb25zdCB5UGVyY2VudCA9ICgoY2xpZW50WSAtIHJldmlld1Bvcy50b3AgLSBjdXJzb3JPZmZzZXQpIC8gcmV2aWV3UG9zLmhlaWdodCkgKiAxMDA7XG5cblx0XHRcdHJldHVybiB7IHhQZXJjZW50LCB5UGVyY2VudCwgcmV2aWV3UG9zIH07XG5cdFx0fSk7XG5cblx0XHRzZXRCb3hPcGVuKHRydWUpO1xuXHR9O1xuXG5cdC8qIHJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgcmVmPXtyZXZpZXdSZWZ9IGNsYXNzTmFtZT1cInJldmlldyBwb3NpdGlvbi1yZWxhdGl2ZSBteC1uMTIgbWItbjEyIG10LTEyXCI+XG5cdFx0XHQ8aW1nXG5cdFx0XHRcdGNsYXNzTmFtZT1cInJldmlld19faW1hZ2UgaW1nLWZsdWlkIHctMTAwXCJcblx0XHRcdFx0c3JjPXtpbWFnZS5vcmlnaW5hbH1cblx0XHRcdFx0c3JjU2V0PXtgJHtpbWFnZS5vcmlnaW5hbH0gMnhgfVxuXHRcdFx0XHRhbHQ9e3RpdGxlfVxuXHRcdFx0XHRvbkNsaWNrPXtwb3NNYXJrZXJ9XG5cdFx0XHQvPlxuXHRcdFx0e2NvbW1lbnRzLmxlbmd0aCA+IDAgJiZcblx0XHRcdFx0Y29tbWVudHMubWFwKChjb21tZW50LCBjb21tZW50SW5kZXgpID0+IChcblx0XHRcdFx0XHQ8UHJvamVjdFJldmlld0NvbW1lbnQga2V5PXtjb21tZW50SW5kZXh9IHsuLi57IC4uLmNvbW1lbnQsIGNvbW1lbnRJbmRleCwgcmV2aWV3UmVmIH19IC8+XG5cdFx0XHRcdCkpfVxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e21hcmtlclBvcyAmJiAoXG5cdFx0XHRcdFx0PFByb2plY3RSZXZpZXdNYXJrZXIgey4uLnsgLi4ubWFya2VyUG9zIH19PlxuXHRcdFx0XHRcdFx0PFByb2plY3RSZXZpZXdDb21tZW50Qm94IHsuLi57IG1hcmtlclBvcywgYm94T3BlbiwgdG9nZ2xlQm94LCBwaGFzZUlkLCBwcm9qZWN0SW1hZ2VJZCB9fSAvPlxuXHRcdFx0XHRcdDwvUHJvamVjdFJldmlld01hcmtlcj5cblx0XHRcdFx0KX1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEJveCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBEb21haW4gKi9cbmltcG9ydCBQcm9qZWN0UmV2aWV3TWFya2VyIGZyb20gJy4vUHJvamVjdFJldmlld01hcmtlcic7XG5cbi8qIFNlcnZpY2VzICovXG5pbXBvcnQgY2FsY0NvbW1lbnRQb3MgZnJvbSAnLi9zZXJ2aWNlcy9jYWxjQ29tbWVudFBvcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXZpZXdDb21tZW50KHsgYXV0aG9yLCBjb21tZW50LCBwb3NpdGlvbiwgY29tbWVudEluZGV4LCByZXZpZXdSZWYgfSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyB4UGVyY2VudCwgeVBlcmNlbnQgfSA9IHBvc2l0aW9uO1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbYm94T3Blbiwgc2V0Qm94T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IHRvZ2dsZUJveCA9ICgpID0+IHNldEJveE9wZW4oIWJveE9wZW4pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxQcm9qZWN0UmV2aWV3TWFya2VyIHsuLi57IHhQZXJjZW50LCB5UGVyY2VudCwgYXV0aG9yLCBjb21tZW50SW5kZXgsIHRvZ2dsZUNvbW1lbnQ6IHRvZ2dsZUJveCB9fT5cblx0XHRcdDxDb21tZW50IHsuLi57IGNvbW1lbnQsIGF1dGhvciwgYm94T3BlbiwgdG9nZ2xlQm94LCBwb3NpdGlvbiwgcmV2aWV3UmVmIH19IC8+XG5cdFx0PC9Qcm9qZWN0UmV2aWV3TWFya2VyPlxuXHQpO1xufVxuXG5jb25zdCBDb21tZW50ID0gKHsgY29tbWVudCwgYXV0aG9yLCBib3hPcGVuLCB0b2dnbGVCb3gsIHBvc2l0aW9uLCByZXZpZXdSZWYgfSkgPT4ge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgdGl0bGUgPSBhdXRob3IudXNlcm5hbWU7XG5cdGNvbnN0IHN1YnRpdGxlID0gYXV0aG9yLmVtYWlsO1xuXG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFt0cmFuc2Zvcm1lZFBvcywgc2V0VHJhbnNmb3JtZWRQb3NdID0gdXNlU3RhdGUocG9zaXRpb24pO1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgYm94UmVmID0gdXNlUmVmKCk7XG5cblx0LyogRWZmZWN0cyAqL1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChwb3NpdGlvbikge1xuXHRcdFx0c2V0VHJhbnNmb3JtZWRQb3MoKCkgPT4ge1xuXHRcdFx0XHRwb3NpdGlvbi5yZXZpZXdQb3MgPSByZXZpZXdSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRcdFx0cmV0dXJuIGNhbGNDb21tZW50UG9zKGJveFJlZiwgcG9zaXRpb24pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LCBbcG9zaXRpb25dKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8Qm94XG5cdFx0XHRyZW5kZXJPbkJvZHk9e2ZhbHNlfVxuXHRcdFx0YW5pbWF0ZT17ZmFsc2V9XG5cdFx0XHRleHRlbnNpb25DbGFzc2VzPVwicmV2aWV3X19ib3hcIlxuXHRcdFx0ey4uLnsgdGl0bGUsIHN1YnRpdGxlLCBib3hPcGVuLCB0b2dnbGVCb3gsIHVzZXI6IGF1dGhvciwgcG9zaXRpb246IHRyYW5zZm9ybWVkUG9zLCBib3hSZWYgfX0+XG5cdFx0XHR7Y29tbWVudH1cblx0XHQ8L0JveD5cblx0KTtcbn07XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRhcmVhQXV0b3NpemUnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBCb3gsIEJ1dHRvbiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBTZXJ2aWNlcyAqL1xuaW1wb3J0IGNhbGNDb21tZW50UG9zIGZyb20gJy4vc2VydmljZXMvY2FsY0NvbW1lbnRQb3MnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBRVUVSWV9LRVlTLCBhZGRDb21tZW50IH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0NvbW1lbnRCb3goeyBtYXJrZXJQb3MsIGJveE9wZW4sIHRvZ2dsZUJveCwgcGhhc2VJZCwgcHJvamVjdEltYWdlSWQgfSkge1xuXHQvKiBSZWZzICovXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblx0Y29uc3QgYm94UmVmID0gdXNlUmVmKCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHRpdGxlID0gJ0FkZCBhIGNvbW1lbnQnO1xuXHRjb25zdCBwb3NpdGlvbiA9IGNhbGNDb21tZW50UG9zKGJveFJlZiwgbWFya2VyUG9zKTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyOiB1c2VyIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGFkZENvbW1lbnRNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZENvbW1lbnQsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfSU1BR0VfQllfSUQsIHBhcnNlSW50KHByb2plY3RJbWFnZUlkKV0pO1xuXHRcdFx0dG9nZ2xlQm94KCk7XG5cdFx0fSxcblx0fSk7XG5cblx0LyogQ29tcG9uZW50cyAqL1xuXHRjb25zdCBTdWJ0aXRsZUNvbXBvbmVudCA9ICgpID0+IChcblx0XHQ8c3Bhbj5cblx0XHRcdENvbW1lbnQgb3IgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zZWNvbmRhcnlcIj4gQG1lbnRpb24gPC9zcGFuPiBzb21lb25lXG5cdFx0PC9zcGFuPlxuXHQpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxCb3hcblx0XHRcdHJlbmRlck9uQm9keT17ZmFsc2V9XG5cdFx0XHRleHRlbnNpb25DbGFzc2VzPVwicmV2aWV3X19ib3hcIlxuXHRcdFx0ey4uLnsgdGl0bGUsIFN1YnRpdGxlQ29tcG9uZW50LCBib3hPcGVuLCB0b2dnbGVCb3gsIHBvc2l0aW9uLCB1c2VyLCBib3hSZWYgfX0+XG5cdFx0XHQ8Zm9ybVxuXHRcdFx0XHRyZWY9e2Zvcm1SZWZ9XG5cdFx0XHRcdGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIgZmxleC1ncm93LTFcIlxuXHRcdFx0XHRvblN1Ym1pdD17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRhZGRDb21tZW50TXV0YXRpb24ubXV0YXRlKHtcblx0XHRcdFx0XHRcdGZvcm1SZWY6IGZvcm1SZWYsXG5cdFx0XHRcdFx0XHR1c2VySWQ6IHVzZXIuaWQsXG5cdFx0XHRcdFx0XHRwaGFzZUlkOiBwaGFzZUlkLFxuXHRcdFx0XHRcdFx0cG9zaXRpb246IG1hcmtlclBvcyxcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fX0+XG5cdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cImNvbW1lbnRcIj5cblx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdDxUZXh0YXJlYUF1dG9zaXplXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBmb3JtLWNvbnRyb2wtLXRleHRcIlxuXHRcdFx0XHRcdGlkPVwiY29tbWVudFwiXG5cdFx0XHRcdFx0bmFtZT1cImNvbW1lbnRcIlxuXHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNheSBzb21ldGhpbmcgbmljZS4uLlwiXG5cdFx0XHRcdFx0YXV0b0ZvY3VzXG5cdFx0XHRcdC8+XG5cdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHR0aXRsZT1cIlN1Ym1pdFwiXG5cdFx0XHRcdFx0ZXh0ZW5zaW9uQ2xhc3Nlcz1cIm10LTQgdy01MCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcblx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHR7Li4ueyBpc0xvYWRpbmc6IGFkZENvbW1lbnRNdXRhdGlvbi5pc0xvYWRpbmcgfX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZm9ybT5cblx0XHQ8L0JveD5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBFZGl0YWJsZSB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgc3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBlZGl0UHJvamVjdEltYWdlLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld0hlYWRlcih7IGlkLCB0aXRsZSwgZGVzY3JpcHRpb24gfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KHN0YXRpY0NvbnRleHQpO1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogQ2FsbGJhY2tzICovXG5cdGNvbnN0IG11dGF0aW9uT25TdWNjZXNzID0gKCkgPT4ge1xuXHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfSU1BR0VfQllfSUQsIGlkXSk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgbWItNlwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXhsLTZcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3VzZXJSb2xlID09PSAnYWRtaW4nICYmICdlZGl0YWJsZSd9IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMmB9PlxuXHRcdFx0XHRcdDxFZGl0YWJsZVxuXHRcdFx0XHRcdFx0aW5wdXRUeXBlPVwidGl0bGVcIlxuXHRcdFx0XHRcdFx0cHJvamVjdElkPXtpZH1cblx0XHRcdFx0XHRcdGNvbnRlbnQ9e3RpdGxlfVxuXHRcdFx0XHRcdFx0bXV0YXRpb249e2VkaXRQcm9qZWN0SW1hZ2V9XG5cdFx0XHRcdFx0XHRtdXRhdGlvbklkPXtpZH1cblx0XHRcdFx0XHRcdHsuLi57IG11dGF0aW9uT25TdWNjZXNzIH19PlxuXHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cImg1IG1iLTAgdGV4dC13aGl0ZVwiPnt0aXRsZSA/IHRpdGxlIDogJ0FkZCBhIG5pY2UgdGl0bGUnfTwvaDE+XG5cdFx0XHRcdFx0PC9FZGl0YWJsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiAnZWRpdGFibGUnfSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJgfT5cblx0XHRcdFx0XHQ8RWRpdGFibGVcblx0XHRcdFx0XHRcdGlucHV0VHlwZT1cImRlc2NyaXB0aW9uXCJcblx0XHRcdFx0XHRcdGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufVxuXHRcdFx0XHRcdFx0bXV0YXRpb249e2VkaXRQcm9qZWN0SW1hZ2V9XG5cdFx0XHRcdFx0XHRtdXRhdGlvbklkPXtpZH1cblx0XHRcdFx0XHRcdHsuLi57IG11dGF0aW9uT25TdWNjZXNzIH19PlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNzAgbWItMFwiPlxuXHRcdFx0XHRcdFx0XHR7ZGVzY3JpcHRpb24gPyAoXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+e2Rlc2NyaXB0aW9ufTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS00MFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0QWRkIGEgZGVjcmlwdGlvbiAtIHRoZSBwdXJwb3NlLCBjb250ZXh0LCBvYmplY3RpdmVzXG5cdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC9wPlxuXHRcdFx0XHRcdDwvRWRpdGFibGU+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiwgU0NBTEVfRkFERSB9IGZyb20gJy4uLy4uL2FuaW1hdGlvbnMnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0L21haW5Db250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlld01hcmtlcih7IHhQZXJjZW50LCB5UGVyY2VudCwgYXV0aG9yLCBjb21tZW50SW5kZXgsIHRvZ2dsZUNvbW1lbnQsIGNoaWxkcmVuIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBjdXJyZW50VXNlciB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblx0Y29uc3QgdXNlciA9IGF1dGhvciA/IGF1dGhvciA6IGN1cnJlbnRVc2VyO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRsYXlvdXRcblx0XHRcdHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMiB9fVxuXHRcdFx0Y2xhc3NOYW1lPVwicmV2aWV3X19pbnRlcmFjdGlvblwiXG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHQnLS14JzogeFBlcmNlbnQsXG5cdFx0XHRcdCctLXknOiB5UGVyY2VudCxcblx0XHRcdH19XG5cdFx0XHR7Li4uRkFERV9JTn0+XG5cdFx0XHQ8bW90aW9uLmJ1dHRvblxuXHRcdFx0XHR7Li4uU0NBTEVfRkFERX1cblx0XHRcdFx0Y2xhc3NOYW1lPVwicmV2aWV3X19tYXJrZXIgaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0tc2Vjb25kYXJ5IGJ0biBidG4tbGluayB0ZXh0LXJlc2V0XCJcblx0XHRcdFx0c3R5bGU9e3sgJy0tdGhlbWUnOiBgJHt1c2VyLnVzZXJDb2xvcn1gIH19XG5cdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZUNvbW1lbnR9PlxuXHRcdFx0XHR7Y29tbWVudEluZGV4ICYmIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtLXhzXCI+e2NvbW1lbnRJbmRleCArIDF9PC9zcGFuPn1cblx0XHRcdDwvbW90aW9uLmJ1dHRvbj5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RSZXZpZXdIZWFkZXIgfSBmcm9tICcuL1Byb2plY3RSZXZpZXdIZWFkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0UmV2aWV3Q2FudmFzIH0gZnJvbSAnLi9Qcm9qZWN0UmV2aWV3Q2FudmFzJztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGNDb21tZW50UG9zKGJveFJlZiwgbWFya2VyUG9zKSB7XG5cdGNvbnN0IG1hcmtlclNwYWNlciA9IDEwO1xuXHRjb25zdCBtYXJrZXJTaXplID0gMjA7XG5cdGNvbnN0IG9mZnNldCA9IG1hcmtlclNpemUgKyBtYXJrZXJTcGFjZXI7XG5cblx0LyogR2V0IHBvc2l0aW9uIG9mIG1hcmtlciAqL1xuXHRjb25zdCByZXZpZXdQb3MgPSBtYXJrZXJQb3MucmV2aWV3UG9zO1xuXHRjb25zdCB4UGVyY2VudCA9IE51bWJlcihtYXJrZXJQb3MueFBlcmNlbnQpO1xuXHRjb25zdCB5UGVyY2VudCA9IE51bWJlcihtYXJrZXJQb3MueVBlcmNlbnQpO1xuXG5cdC8qIEdldCBkaW1lbnNpb25zIG9mIGN1cnJlbnQgYm94ICovXG5cdGNvbnN0IHsgd2lkdGg6IGJveFdpZHRoID0gNDAwLCBoZWlnaHQ6IGJveEhlaWdodCA9IDIyOCB9ID0gYm94UmVmPy5jdXJyZW50Py5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSB8fCB7fTtcblxuXHQvKiBHZXQgZGltZW5zaW9ucyBvZiBjdXJyZW50IHNjcmVlbiAqL1xuXHRjb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXHRjb25zdCBib3hQZXJjZW50V2lkdGggPSAoYm94V2lkdGggLyBzY3JlZW5XaWR0aCkgKiAxMDA7XG5cblx0Y29uc3Qgc2NyZWVuSGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gcmV2aWV3UG9zLnRvcDtcblx0Y29uc3QgYm94UGVyY2VudEhlaWdodCA9IChib3hIZWlnaHQgLyBzY3JlZW5IZWlnaHQpICogMTAwO1xuXG5cdC8qIFNldCB4IGFuZCB5IHZhbHVlcyB0byBwZXJjZW50YWdlIGVxdWl2ZWxlbnQgdG8gbWFrZSB0aGUgYm94IHJlc3BvbnNpdmUgKi9cblx0bGV0IGxlZnQgPSBvZmZzZXQ7XG5cdGxldCB0b3AgPSBvZmZzZXQ7XG5cblx0LyogQ29tcGVuc2F0ZSBmb3IgdGhlIGJveFdpZHRoIGlmIG1hcmtlciBpcyBhdCBlbmQgb2YgaG9yaXpvbnRhbCBzY3JlZW4gKi9cblx0aWYgKHhQZXJjZW50ICsgYm94UGVyY2VudFdpZHRoID4gMTAwKSB7XG5cdFx0bGVmdCA9IC1ib3hXaWR0aCAtIG1hcmtlclNwYWNlcjtcblx0fVxuXG5cdC8qIENvbXBlbnNhdGUgZm9yIHRoZSBib3hIZWlnaHQgaWYgbWFya2VyIGlzIGF0IGVuZCBvZiB2ZXJ0aWNhbCBzY3JlZW4gKi9cblx0aWYgKHlQZXJjZW50ICsgYm94UGVyY2VudEhlaWdodCA+IDEwMCkge1xuXHRcdHRvcCA9IC1ib3hIZWlnaHQgLSBtYXJrZXJTcGFjZXI7XG5cdH1cblxuXHRyZXR1cm4geyBsZWZ0OiBgJHtsZWZ0fXB4YCwgdG9wOiBgJHt0b3B9cHhgIH07XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIHVzZVNlbGVjdGlvbiB9IGZyb20gJy4vdXNlU2VsZWN0aW9uJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgdXNlUGFnZVRpdGxlIH0gZnJvbSAnLi91c2VQYWdlVGl0bGUnO1xuIiwiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VQYWdlVGl0bGUodGl0bGUsIHVwZGF0ZVByb3BzID0gW10pIHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRkb2N1bWVudC50aXRsZSA9IGAke3RpdGxlID8gdGl0bGUgKyAnIHwgUGFyYWxsZWwgRGFzaGJvYXJkJyA6IGRvY3VtZW50LnRpdGxlfWA7XG5cdH0sIFsuLi51cGRhdGVQcm9wc10pO1xufVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZVNlbGVjdGlvbigpIHtcblx0Y29uc3QgW3NlbGVjdGVkLCBzZXRTZWxlY3RlZF0gPSB1c2VTdGF0ZShbXSk7XG5cblx0Y29uc3QgdXBkYXRlU2VsZWN0ZWQgPSAoaWQpID0+IHtcblx0XHRzZXRTZWxlY3RlZCgoc2VsZWN0ZWQpID0+IHtcblx0XHRcdGlmIChzZWxlY3RlZC5pbmNsdWRlcyhpZCkpIHtcblx0XHRcdFx0cmV0dXJuIHNlbGVjdGVkLmZpbHRlcigoc2VsZWN0ZWRJZCkgPT4gc2VsZWN0ZWRJZCAhPT0gaWQpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gWy4uLnNlbGVjdGVkLCBpZF07XG5cdFx0fSk7XG5cdH07XG5cblx0Y29uc3QgcmVzZXRTZWxlY3RlZCA9ICgpID0+IHNldFNlbGVjdGVkKFtdKTtcblxuXHRyZXR1cm4geyBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQsIHJlc2V0U2VsZWN0ZWQgfTtcbn1cbiIsIi8vIENTU1xuaW1wb3J0ICcuLi9zY3NzL21haW4uc2Nzcyc7XG5cbi8vIFBvbGx5Zmlsc1xuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xuXG4vKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCc7XG5cbi8qIENsaWVudCAqL1xuY29uc3QgY2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KHtcblx0ZGVmYXVsdE9wdGlvbnM6IHtcblx0XHRxdWVyaWVzOiB7XG5cdFx0XHRyZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXG5cdFx0fSxcblx0fSxcbn0pO1xuXG4vKiBSZW5kZXIgKi9cbmNvbnN0IGFwcE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5pZiAoYXBwTm9kZSAhPT0gbnVsbCkge1xuXHRyZW5kZXIoXG5cdFx0PFF1ZXJ5Q2xpZW50UHJvdmlkZXIgey4uLnsgY2xpZW50IH19PlxuXHRcdFx0PEFwcCAvPlxuXHRcdDwvUXVlcnlDbGllbnRQcm92aWRlcj4sXG5cdFx0YXBwTm9kZVxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyB1c2VGb3JtIH0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQWxlcnQsIEhlYWRlciwgQmFja2dyb3VuZCwgQnV0dG9uIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbi8qIFNlcnZpY2VzICovXG5pbXBvcnQgeyBnZXRSb2xlIH0gZnJvbSAnLi4vc2VydmljZXMnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGxvZ2luIH0gZnJvbSAnLi4vYXBpJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZVBhZ2VUaXRsZSB9IGZyb20gJy4uL2hvb2tzJztcblxuLyogUm91dGVzICovXG5pbXBvcnQgeyBST1VURVMgfSBmcm9tICcuLi9yb3V0ZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbih7IHNldEN1cnJlbnRVc2VyLCBzZXRVc2VyUm9sZSB9KSB7XG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgZm9ybVJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIEhvb2tzICovXG5cdHVzZVBhZ2VUaXRsZSgnTG9naW4nKTtcblx0Y29uc3QgaGlzdG9yeSA9IHVzZUhpc3RvcnkoKTtcblx0Y29uc3Qge1xuXHRcdHJlZ2lzdGVyLFxuXHRcdGhhbmRsZVN1Ym1pdCxcblx0XHRmb3JtU3RhdGU6IHsgZXJyb3JzIH0sXG5cdH0gPSB1c2VGb3JtKHsgcmVWYWxpZGF0ZU1vZGU6ICdvbkNoYW5nZScsIG1vZGU6ICdvbkJsdXInIH0pO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBsb2dpbk11dGF0aW9uID0gdXNlTXV0YXRpb24obG9naW4sIHtcblx0XHRvblN1Y2Nlc3M6ICh1c2VyKSA9PiB7XG5cdFx0XHRzZXRDdXJyZW50VXNlcih1c2VyKTtcblx0XHRcdHNldFVzZXJSb2xlKGdldFJvbGUodXNlcikpO1xuXG5cdFx0XHR0b2FzdCg8QWxlcnQgbWVzc2FnZT1cIlN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4hXCIgYXBwZWFyYW5jZT1cInN1Y2Nlc3NcIiAvPik7XG5cdFx0XHRoaXN0b3J5LnB1c2goUk9VVEVTLnByb2plY3RzKTtcblx0XHR9LFxuXHRcdG9uRXJyb3I6IChlcnJvcikgPT4ge1xuXHRcdFx0dG9hc3QoXG5cdFx0XHRcdDxBbGVydFxuXHRcdFx0XHRcdG1lc3NhZ2U9e1xuXHRcdFx0XHRcdFx0ZXJyb3I/LnJlc3BvbnNlPy5kYXRhPy5lcnJvciA/ICdFbWFpbC9wYXNzd29yZCBjb21iaW5hdGlvbiBub3QgZm91bmQhJyA6ICdTb21ldGhpbmcgd2VudCB3cm9uZyEnXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGFwcGVhcmFuY2U9XCJkYW5nZXJcIlxuXHRcdFx0XHQvPlxuXHRcdFx0KTtcblxuXHRcdFx0ZXJyb3JzLmVtYWlsID0geyBtZXNzYWdlOiAnRW1haWwvcGFzc3dvcmQgY29tYmluYXRpb24gbm90IGZvdW5kJyB9O1xuXHRcdFx0ZXJyb3JzLnBhc3N3b3JkID0geyBtZXNzYWdlOiAnRW1haWwvcGFzc3dvcmQgY29tYmluYXRpb24gbm90IGZvdW5kJyB9O1xuXHRcdH0sXG5cdH0pO1xuXG5cdGNvbnN0IG9uU3VibWl0ID0gKCkgPT4gbG9naW5NdXRhdGlvbi5tdXRhdGUoeyBmb3JtUmVmIH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8SGVhZGVyIC8+XG5cdFx0XHQ8bWFpbiBjbGFzc05hbWU9XCJtYWluLWNvbnRlbnRcIj5cblx0XHRcdFx0PEJhY2tncm91bmQgLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwYW5lX19wYW5lbCBwYW5lbCBwYW5lbC0tbG9naW5cIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZWxfX2JvZHlcIj5cblx0XHRcdFx0XHRcdFx0PGgxIGNsYXNzTmFtZT1cInRleHQtdXBwZXJjYXNlIHRleHQtd2hpdGUgbWItMFwiPkxvZ2luPC9oMT5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNzAgdGV4dC13aGl0ZSBtYi02XCI+TG9naW4gd2l0aCB5b3VyIGUtbWFpbCBhbmQgcGFzc3dvcmQ8L3A+XG5cdFx0XHRcdFx0XHRcdDxmb3JtXG5cdFx0XHRcdFx0XHRcdFx0cmVmPXtmb3JtUmVmfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInBhbmVsX19mb3JtIGZvcm1cIlxuXHRcdFx0XHRcdFx0XHRcdG9uU3VibWl0PXtoYW5kbGVTdWJtaXQob25TdWJtaXQpfVxuXHRcdFx0XHRcdFx0XHRcdG5vVmFsaWRhdGU+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0yXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJpbnB1dEVtYWlsXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0RW1haWxcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtlcnJvcnMuZW1haWwgJiYgJ2lzLWludmFsaWQnfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJpbnB1dEVtYWlsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwiZW1haWxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRW1haWxcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGF1dG9Gb2N1c1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcignZW1haWwnLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXF1aXJlZDogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy5lbWFpbCAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3JzLmVtYWlsPy5tZXNzYWdlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdD8gZXJyb3JzLmVtYWlsLm1lc3NhZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0OiAnUGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwnfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJpbnB1dFBhc3N3b3JkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UGFzc3dvcmRcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtlcnJvcnMucGFzc3dvcmQgJiYgJ2lzLWludmFsaWQnfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJpbnB1dFBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRuYW1lPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcigncGFzc3dvcmQnLCB7IHJlcXVpcmVkOiB0cnVlIH0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3JzLnBhc3N3b3JkICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHtlcnJvcnMucGFzc3dvcmQ/Lm1lc3NhZ2Vcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PyBlcnJvcnMucGFzc3dvcmQubWVzc2FnZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ6ICdQbGVhc2UgZW50ZXIgYSBwYXNzd29yZCd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxCdXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGU6ICdMb2cgaW4nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhlbWU6ICdzZWNvbmRhcnknLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2l6ZTogJ21kJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV4dGVuc2lvbkNsYXNzZXM6ICdidG4tYmxvY2sganVzdGlmeS1jb250ZW50LWNlbnRlcicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VibWl0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzTG9hZGluZzogbG9naW5NdXRhdGlvbi5pc0xvYWRpbmcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtd2hpdGUgYnRuLWJsb2NrXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0bz17Uk9VVEVTLnNpZ251cH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT1cInNpZ24gdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJidG5fX3RleHRcIj5TaWduIHVwPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0PC9mb3JtPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9tYWluPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFBhZ2VMb2FkZXIsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IHsgUHJvamVjdERldGFpbEhlYWRlciwgUHJvamVjdERldGFpbEltYWdlcyB9IGZyb20gJy4uL2RvbWFpbi9wcm9qZWN0LWRldGFpbCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZmV0Y2hQcm9qZWN0QnlJZCwgUVVFUllfS0VZUyB9IGZyb20gJy4uL2FwaSc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VQYWdlVGl0bGUgfSBmcm9tICcuLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWwoKSB7XG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBpZDogcHJvamVjdElkIH0gPSB1c2VQYXJhbXMoKTtcblx0Y29uc3QgeyBpc0xvYWRpbmcsIGRhdGEgPSB7fSB9ID0gdXNlUXVlcnkoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcGFyc2VJbnQocHJvamVjdElkKV0sICgpID0+XG5cdFx0ZmV0Y2hQcm9qZWN0QnlJZCh7IHByb2plY3RJZCB9KVxuXHQpO1xuXG5cdC8qIEhvb2tzICovXG5cdHVzZVBhZ2VUaXRsZShkYXRhPy50aXRsZSwgW2RhdGFdKTtcblxuXHQvKiBDb25zdGFudHMgICovXG5cdGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCB1c2VycywgaWQsIGF1dGhvciwgZW1haWwsIHByb2plY3RJbWFnZXMgfSA9IGRhdGE7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PFBhZ2VXcmFwcGVyPlxuXHRcdFx0PFBhZ2VMb2FkZXIgey4uLnsgaXNMb2FkaW5nIH19PlxuXHRcdFx0XHQ8UHJvamVjdERldGFpbEhlYWRlciB7Li4ueyB0aXRsZSwgZGVzY3JpcHRpb24sIHVzZXJzLCBpZCwgYXV0aG9yLCBlbWFpbCB9fSAvPlxuXHRcdFx0XHQ8UHJvamVjdERldGFpbEltYWdlcyB7Li4ueyBwcm9qZWN0SW1hZ2VzLCBwcm9qZWN0SWQ6IGlkIH19IC8+XG5cdFx0XHQ8L1BhZ2VMb2FkZXI+XG5cdFx0PC9QYWdlV3JhcHBlcj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUGFnZUxvYWRlciwgUGFnZVdyYXBwZXIgfSBmcm9tICcuLi9jb21wb25lbnRzJztcblxuLyogRG9tYWluICovXG5pbXBvcnQgeyBQcm9qZWN0UmVzdWx0cywgUHJvamVjdEFkZCB9IGZyb20gJy4uL2RvbWFpbi9wcm9qZWN0LW92ZXJ2aWV3JztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vY29udGV4dC9tYWluQ29udGV4dCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZmV0Y2hQcm9qZWN0c0J5VXNlciwgUVVFUllfS0VZUyB9IGZyb20gJy4uL2FwaSc7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VQYWdlVGl0bGUgfSBmcm9tICcuLi9ob29rcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RPdmVydmlldygpIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW25ld1Byb2plY3RJZCwgc2V0TmV3UHJvamVjdElkXSA9IHVzZVN0YXRlKCk7XG5cblx0LyogSG9va3MgKi9cblx0dXNlUGFnZVRpdGxlKCdQcm9qZWN0cycpO1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyLCB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChTdGF0aWNDb250ZXh0KTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhOiBwcm9qZWN0cyA9IFtdIH0gPSB1c2VRdWVyeShcblx0XHRRVUVSWV9LRVlTLlBST0pFQ1RfQllfVVNFUixcblx0XHQoKSA9PiBmZXRjaFByb2plY3RzQnlVc2VyKHsgdXNlcklkOiBjdXJyZW50VXNlcj8uaWQgfSksXG5cdFx0e1xuXHRcdFx0ZW5hYmxlZDogISFjdXJyZW50VXNlcj8uaWQsXG5cdFx0fVxuXHQpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxQYWdlV3JhcHBlcj5cblx0XHRcdDxQYWdlTG9hZGVyIHsuLi57IGlzTG9hZGluZyB9fT5cblx0XHRcdFx0e3VzZXJSb2xlID09PSAnYWRtaW4nICYmIDxQcm9qZWN0QWRkIHsuLi57IHNldE5ld1Byb2plY3RJZCB9fSAvPn1cblx0XHRcdFx0PFByb2plY3RSZXN1bHRzIHsuLi57IHByb2plY3RzLCBuZXdQcm9qZWN0SWQgfX0gLz5cblx0XHRcdDwvUGFnZUxvYWRlcj5cblx0XHQ8L1BhZ2VXcmFwcGVyPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IHVzZVBhcmFtcyB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFBhZ2VMb2FkZXIsIFBhZ2VXcmFwcGVyIH0gZnJvbSAnLi4vY29tcG9uZW50cyc7XG5cbi8qIERvbWFpbiAqL1xuaW1wb3J0IHsgUHJvamVjdFJldmlld0NhbnZhcywgUHJvamVjdFJldmlld0hlYWRlciB9IGZyb20gJy4uL2RvbWFpbi9wcm9qZWN0LXJldmlldyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZmV0Y2hQcm9qZWN0SW1hZ2VCeUlkLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vYXBpJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZVBhZ2VUaXRsZSB9IGZyb20gJy4uL2hvb2tzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJldmlldygpIHtcblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGlkOiBwcm9qZWN0SW1hZ2VJZCB9ID0gdXNlUGFyYW1zKCk7XG5cdGNvbnN0IHsgaXNMb2FkaW5nLCBkYXRhID0ge30gfSA9IHVzZVF1ZXJ5KFtRVUVSWV9LRVlTLlBST0pFQ1RfSU1BR0VfQllfSUQsIHBhcnNlSW50KHByb2plY3RJbWFnZUlkKV0sICgpID0+XG5cdFx0ZmV0Y2hQcm9qZWN0SW1hZ2VCeUlkKHsgcHJvamVjdEltYWdlSWQgfSlcblx0KTtcblxuXHQvKiBIb29rcyAqL1xuXHR1c2VQYWdlVGl0bGUoZGF0YT8udGl0bGUsIFtkYXRhXSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PFBhZ2VXcmFwcGVyPlxuXHRcdFx0PFBhZ2VMb2FkZXIgey4uLnsgaXNMb2FkaW5nIH19PlxuXHRcdFx0XHQ8UHJvamVjdFJldmlld0hlYWRlciB7Li4uZGF0YX0gLz5cblx0XHRcdFx0PFByb2plY3RSZXZpZXdDYW52YXMgey4uLnsgLi4uZGF0YSwgcHJvamVjdEltYWdlSWQgfX0gLz5cblx0XHRcdDwvUGFnZUxvYWRlcj5cblx0XHQ8L1BhZ2VXcmFwcGVyPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IHVzZUhpc3RvcnkgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XG5pbXBvcnQgeyB1c2VGb3JtLCB1c2VXYXRjaCB9IGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEhlYWRlciwgQmFja2dyb3VuZCwgQWxlcnQsIEJ1dHRvbiB9IGZyb20gJy4uL2NvbXBvbmVudHMnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IHNpZ251cCB9IGZyb20gJy4uL2FwaSc7XG5cbi8qIFJvdXRlcyAqL1xuaW1wb3J0IHsgUk9VVEVTIH0gZnJvbSAnLi4vcm91dGVzJztcblxuLyogSG9va3MgKi9cbmltcG9ydCB7IHVzZVBhZ2VUaXRsZSB9IGZyb20gJy4uL2hvb2tzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnbnVwKHsgc2V0Q3VycmVudFVzZXIgfSkge1xuXHQvKiBSZWZzICovXG5cdGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBIb29rcyAqL1xuXHR1c2VQYWdlVGl0bGUoJ1NpZ251cCcpO1xuXHRjb25zdCBoaXN0b3J5ID0gdXNlSGlzdG9yeSgpO1xuXG5cdGNvbnN0IHtcblx0XHRyZWdpc3Rlcixcblx0XHRoYW5kbGVTdWJtaXQsXG5cdFx0Zm9ybVN0YXRlOiB7IGVycm9ycyB9LFxuXHRcdGNvbnRyb2wsXG5cdH0gPSB1c2VGb3JtKHsgcmVWYWxpZGF0ZU1vZGU6ICdvbkNoYW5nZScsIG1vZGU6ICdvbkJsdXInIH0pO1xuXG5cdGNvbnN0IHBsYWluUGFzc3dvcmQgPSB1c2VXYXRjaCh7XG5cdFx0Y29udHJvbCxcblx0XHRuYW1lOiAncGxhaW5QYXNzd29yZCcsXG5cdFx0ZGVmYXVsdFZhbHVlOiAnJyxcblx0fSk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IHNpZ251cE11dGF0aW9uID0gdXNlTXV0YXRpb24oc2lnbnVwLCB7XG5cdFx0b25TdWNjZXNzOiAodXNlcikgPT4ge1xuXHRcdFx0c2V0Q3VycmVudFVzZXIodXNlcik7XG5cdFx0XHR0b2FzdCg8QWxlcnQgbWVzc2FnZT1cIlN1Y2Nlc3NmdWxseSBsb2dnZWQgaW4hXCIgYXBwZWFyYW5jZT1cInN1Y2Nlc3NcIiAvPik7XG5cdFx0XHRoaXN0b3J5LnB1c2goUk9VVEVTLnByb2plY3RzKTtcblx0XHR9LFxuXHRcdG9uRXJyb3I6IChlcnJvcikgPT4ge1xuXHRcdFx0aWYgKGVycm9yLnJlc3BvbnNlLnN0YXR1cyA9PT0gNTAwKSB7XG5cdFx0XHRcdHRvYXN0KDxBbGVydCBtZXNzYWdlPVwiVGhpcyBlbWFpbCBpcyBhbHJlYWR5IGluIHVzZSFcIiBhcHBlYXJhbmNlPVwiZGFuZ2VyXCIgLz4pO1xuXG5cdFx0XHRcdGZvcm1SZWYuY3VycmVudC5yZXNldCgpO1xuXHRcdFx0fVxuXHRcdH0sXG5cdH0pO1xuXG5cdGNvbnN0IG9uU3VibWl0ID0gKCkgPT4gc2lnbnVwTXV0YXRpb24ubXV0YXRlKHsgZm9ybVJlZiB9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEhlYWRlciAvPlxuXHRcdFx0PG1haW4gY2xhc3NOYW1lPVwibWFpbi1jb250ZW50XCI+XG5cdFx0XHRcdDxCYWNrZ3JvdW5kIC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZVwiPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicGFuZV9fcGFuZWwgcGFuZWwgcGFuZWwtLWxvZ2luXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBhbmVsX19ib2R5XCI+XG5cdFx0XHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXVwcGVyY2FzZSB0ZXh0LXdoaXRlIG1iLTBcIj5TaWduIHVwPC9oMT5cblx0XHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNzAgdGV4dC13aGl0ZSBtYi02XCI+U2lnbiB1cCB3aXRoIHlvdXIgZS1tYWlsIGFuZCBwYXNzd29yZDwvcD5cblx0XHRcdFx0XHRcdFx0PGZvcm1cblx0XHRcdFx0XHRcdFx0XHRyZWY9e2Zvcm1SZWZ9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwicGFuZWxfX2Zvcm0gZm9ybSBtdC02XCJcblx0XHRcdFx0XHRcdFx0XHRvblN1Ym1pdD17aGFuZGxlU3VibWl0KG9uU3VibWl0KX1cblx0XHRcdFx0XHRcdFx0XHRub1ZhbGlkYXRlPlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicmVnaXN0cmF0aW9uX2Zvcm1fdXNlcm5hbWVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRZb3VyIG5hbWVcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkPVwicmVnaXN0cmF0aW9uX2Zvcm1fdXNlcm5hbWVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJ1c2VybmFtZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7ZXJyb3JzLnVzZXJuYW1lICYmICdpcy1pbnZhbGlkJ31gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiRnVsbCBuYW1lXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Li4ucmVnaXN0ZXIoJ3VzZXJuYW1lJywge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYSBuYW1lJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtlcnJvcnMudXNlcm5hbWUgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPntlcnJvcnMudXNlcm5hbWUubWVzc2FnZX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicmVnaXN0cmF0aW9uX2Zvcm1fZW1haWxcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRFbWFpbFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJyZWdpc3RyYXRpb25fZm9ybV9lbWFpbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZT1cImVtYWlsXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtlcnJvcnMuZW1haWwgJiYgJ2lzLWludmFsaWQnfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJFbWFpbFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKCdlbWFpbCcsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlcXVpcmVkOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiB0cnVlLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUGxlYXNlIGVudGVyIGFuIGVtYWlsJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtlcnJvcnMuZW1haWwgJiYgPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e2Vycm9ycy5lbWFpbC5tZXNzYWdlfTwvZGl2Pn1cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJyZWdpc3RyYXRpb25fZm9ybV9wbGFpblBhc3N3b3JkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0UGFzc3dvcmRcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGlucHV0XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZT1cInBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZD1cInJlZ2lzdHJhdGlvbl9mb3JtX3BsYWluUGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwbGFpblBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHtlcnJvcnMucGFzc3dvcmQgJiYgJ2lzLWludmFsaWQnfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey4uLnJlZ2lzdGVyKCdwbGFpblBhc3N3b3JkJywge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdQbGVhc2UgZW50ZXIgYSBwYXNzd29yZCcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bWluTGVuZ3RoOiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiA2LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtZXNzYWdlOiAnUGxlYXNlIGVudGVyIGEgcGFzc3dvcmQgb2YgYXRsZWFzdCA2IGNoYXJhY3RlcnMnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0e2Vycm9ycy5wbGFpblBhc3N3b3JkICYmIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj57ZXJyb3JzLnBsYWluUGFzc3dvcmQubWVzc2FnZX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJsb2dpbi1jb25maXJtLXBhc3N3b3JkXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Q29uZmlybSBwYXNzd29yZFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwicGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke2Vycm9ycy5wYXNzd29yZENvbmZpcm0gJiYgJ2lzLWludmFsaWQnfWB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWQ9XCJsb2dpbi1jb25maXJtLXBhc3N3b3JkXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIkNvbmZpcm0gcGFzc3dvcmRcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJwYXNzd29yZENvbmZpcm1cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi5yZWdpc3RlcigncGFzc3dvcmRDb25maXJtJywge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVxdWlyZWQ6IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1lc3NhZ2U6ICdQbGVhc2UgY29uZmlybSB5b3VyIHBhc3N3b3JkJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWxpZGF0ZTogKHZhbHVlKSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZSA9PT0gcGxhaW5QYXNzd29yZCB8fCAnVGhlIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2gnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0pfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7ZXJyb3JzLnBhc3N3b3JkQ29uZmlybSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+e2Vycm9ycy5wYXNzd29yZENvbmZpcm0ubWVzc2FnZX08L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtMlwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PEJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHsuLi57XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ1NpZ24gdXAnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhlbWU6ICdzZWNvbmRhcnknLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c2l6ZTogJ21kJyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGV4dGVuc2lvbkNsYXNzZXM6ICdidG4tYmxvY2sganVzdGlmeS1jb250ZW50LWNlbnRlcicsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiAnc3VibWl0Jyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlzTG9hZGluZzogc2lnbnVwTXV0YXRpb24uaXNMb2FkaW5nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19XG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxMaW5rXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXdoaXRlIGJ0bi1ibG9ja1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dG89e1JPVVRFUy5sb2dpbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aXRsZT1cInNpZ24gdXBcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJidG5fX3RleHRcIj5Mb2dpbjwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9MaW5rPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdDwvZm9ybT5cblx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvbWFpbj5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgTG9naW4gfSBmcm9tICcuL0xvZ2luJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgU2lnbnVwIH0gZnJvbSAnLi9TaWdudXAnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0T3ZlcnZpZXcgfSBmcm9tICcuL1Byb2plY3RPdmVydmlldyc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3REZXRhaWwgfSBmcm9tICcuL1Byb2plY3REZXRhaWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0UmV2aWV3IH0gZnJvbSAnLi9Qcm9qZWN0UmV2aWV3JztcbiIsIi8qIFBhZ2VzICovXG5pbXBvcnQgeyBQcm9qZWN0T3ZlcnZpZXcsIFByb2plY3REZXRhaWwsIFByb2plY3RSZXZpZXcsIExvZ2luLCBTaWdudXAgfSBmcm9tICcuL3BhZ2VzJztcblxuZXhwb3J0IGNvbnN0IFJPVVRFUyA9IHtcblx0bG9naW46ICcvJyxcblx0c2lnbnVwOiAnL3NpZ251cCcsXG5cdHByb2plY3RzOiAnL3Byb2plY3RzJyxcbn07XG5cbmNvbnN0IHJvdXRlcyA9IFtcblx0e1xuXHRcdG5hbWU6ICdsb2dpbicsXG5cdFx0cGF0aDogJy8nLFxuXHRcdGNvbXBvbmVudDogTG9naW4sXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAnc2lnbnVwJyxcblx0XHRwYXRoOiAnL3NpZ251cCcsXG5cdFx0Y29tcG9uZW50OiBTaWdudXAsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAncHJvamVjdC1vdmVydmlldycsXG5cdFx0cGF0aDogJy9wcm9qZWN0cycsXG5cdFx0Y29tcG9uZW50OiBQcm9qZWN0T3ZlcnZpZXcsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAncHJvamVjdC1kZXRhaWwnLFxuXHRcdHBhdGg6ICcvcHJvamVjdHMvOmlkJyxcblx0XHRjb21wb25lbnQ6IFByb2plY3REZXRhaWwsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAncHJvamVjdC1yZXZpZXcnLFxuXHRcdHBhdGg6ICcvcHJvamVjdHMvOmlkL3Jldmlldy86aWQnLFxuXHRcdGNvbXBvbmVudDogUHJvamVjdFJldmlldyxcblx0fSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcztcbiIsImNvbnN0IFVTRVJfUk9MRVMgPSB7XG5cdFJPTEVfQURNSU46ICdST0xFX0FETUlOJyxcblx0Uk9MRV9VU0VSOiAnUk9MRV9VU0VSJyxcblx0Uk9MRV9VU0VSX0JBU0lDOiAnUk9MRV9VU0VSX0JBU0lDJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJvbGUoeyByb2xlcyB9KSB7XG5cdGlmIChyb2xlcy5pbmNsdWRlcyhVU0VSX1JPTEVTLlJPTEVfQURNSU4pKSByZXR1cm4gJ2FkbWluJztcblx0aWYgKHJvbGVzLmluY2x1ZGVzKFVTRVJfUk9MRVMuUk9MRV9VU0VSKSkgcmV0dXJuICd1c2VyJztcblx0aWYgKHJvbGVzLmluY2x1ZGVzKFVTRVJfUk9MRVMuUk9MRV9VU0VSX0JBU0lDKSkgcmV0dXJuICdiYXNpYyc7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGlzRW1haWwgfSBmcm9tICcuL2lzRW1haWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBnZXRSb2xlIH0gZnJvbSAnLi9nZXRSb2xlJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgcmVzaXplSW1hZ2VzIH0gZnJvbSAnLi9yZXNpemVJbWFnZSc7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0VtYWlsKGVtYWlsKSB7XG4gICAgcmV0dXJuIC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvLnRlc3QoZW1haWwpO1xufVxuIiwiaW1wb3J0IFJlc2l6ZXIgZnJvbSAncmVhY3QtaW1hZ2UtZmlsZS1yZXNpemVyJztcblxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG5cdG1heFdpZHRoOiAzMDAsXG5cdG1heEhlaWdodDogMzAwLFxuXHRxdWFsaXR5OiAxMDAsXG5cdHJvdGF0aW9uOiAwLFxuXHRvdXRwdXRUeXBlOiAnZmlsZScsXG59O1xuXG5hc3luYyBmdW5jdGlvbiByZXNpemVJbWFnZVR5cGUoaW1hZ2UsIG9wdGlvbnMpIHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG5cdFx0UmVzaXplci5pbWFnZUZpbGVSZXNpemVyKFxuXHRcdFx0aW1hZ2UsXG5cdFx0XHRvcHRpb25zLm1heFdpZHRoLFxuXHRcdFx0b3B0aW9ucy5tYXhIZWlnaHQsXG5cdFx0XHRpbWFnZS5wYXRoLnNwbGl0KCcuJykucG9wKCksXG5cdFx0XHRvcHRpb25zLnF1YWxpdHksXG5cdFx0XHRvcHRpb25zLnJvdGF0aW9uLFxuXHRcdFx0KHVyaSkgPT4ge1xuXHRcdFx0XHRyZXNvbHZlKHVyaSk7XG5cdFx0XHR9LFxuXHRcdFx0b3B0aW9ucy5vdXRwdXRUeXBlXG5cdFx0KTtcblx0fSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlc2l6ZUltYWdlKGltYWdlKSB7XG5cdGNvbnN0IHRodW1ibmFpbCA9IGF3YWl0IHJlc2l6ZUltYWdlVHlwZShpbWFnZSwgeyAuLi5kZWZhdWx0T3B0aW9ucywgbWF4V2lkdGg6IDI2OCwgbWF4SGVpZ2h0OiAyMzYgfSk7XG5cdGNvbnN0IHRodW1ibmFpbFJldGluYSA9IGF3YWl0IHJlc2l6ZUltYWdlVHlwZShpbWFnZSwgeyAuLi5kZWZhdWx0T3B0aW9ucywgbWF4V2lkdGg6IDUzNiwgbWF4SGVpZ2h0OiA0NzIgfSk7XG5cblx0cmV0dXJuIHtcblx0XHRvcmlnaW5hbDogaW1hZ2UsXG5cdFx0dGh1bWJuYWlsOiB0aHVtYm5haWwsXG5cdFx0dGh1bWJuYWlsUmV0aW5hOiB0aHVtYm5haWxSZXRpbmEsXG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHJlc2l6ZUltYWdlcyhpbWFnZXMpIHtcblx0cmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKFxuXHRcdGltYWdlcy5tYXAoYXN5bmMgKGltYWdlKSA9PiB7XG5cdFx0XHRyZXR1cm4gYXdhaXQgcmVzaXplSW1hZ2UoaW1hZ2UpO1xuXHRcdH0pXG5cdCk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9