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
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./assets/app/js/react/context.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api */ "./assets/app/js/react/api/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers */ "./assets/app/js/react/helpers/index.js");
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

  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_api__WEBPACK_IMPORTED_MODULE_5__["QUERY_KEYS"].CURRENT_USER, function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_5__["fetchCurrentUser"])({
      userId: userId
    });
  }, {
    onSuccess: function onSuccess(_ref) {
      var user = _ref.user;
      setCurrentUser(user);
      setUserRole(Object(_helpers__WEBPACK_IMPORTED_MODULE_6__["getRole"])(user));
    }
  }),
      currentUserLoading = _useQuery.isLoading;
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_4__["default"].Provider, {
    value: {
      currentUser: currentUser,
      userRole: userRole
    }
  }, _routes__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (_ref2) {
    var path = _ref2.path,
        Page = _ref2.page,
        props = _ref2.props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
      key: path,
      path: path,
      exact: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Page, _objectSpread(_objectSpread({}, props), {}, {
      currentUserLoading: currentUserLoading
    })));
  }))));
}

/***/ }),

/***/ "./assets/app/js/react/api/index.js":
/*!******************************************!*\
  !*** ./assets/app/js/react/api/index.js ***!
  \******************************************/
/*! exports provided: fetchProjectsByUser, fetchProjectById, addProject, deleteProjects, leaveProjects, editProject, addProjectImages, deleteProjectImages, editProjectImage, fetchCurrentUser, fetchGobalUsers, addUser, deleteUser, QUERY_KEYS */
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
/*! exports provided: addProjectImages, deleteProjectImages, editProjectImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProjectImages", function() { return addProjectImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProjectImages", function() { return deleteProjectImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editProjectImage", function() { return editProjectImage; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


/* Add projectImage(s) | expects project id and array of images (blob) */

var addProjectImages = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var projectId, images, params, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            projectId = _ref.projectId, images = _ref.images;
            params = new FormData();
            images.forEach(function (image) {
              return params.append('images[]', image);
            });
            _context.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/images/add/".concat(projectId), params);

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

  return function addProjectImages(_x) {
    return _ref2.apply(this, arguments);
  };
}();
/* Delete projectImage(s) | expects project id and array of projectImageIds  */

var deleteProjectImages = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_ref3) {
    var projectId, projectImageIds, params, result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            projectId = _ref3.projectId, projectImageIds = _ref3.projectImageIds;
            params = new FormData();
            projectImageIds.forEach(function (id) {
              return params.append('projectImages[]', id);
            });
            _context2.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/images/delete/".concat(projectId), params);

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

  return function deleteProjectImages(_x2) {
    return _ref4.apply(this, arguments);
  };
}();
/* Edit projectImage | expects formRef object and projectImage id  */

var editProjectImage = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref5) {
    var formRef, id, params, result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            formRef = _ref5.formRef, id = _ref5.id;
            params = new FormData(formRef.current);
            _context3.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/images/edit/".concat(id), params);

          case 4:
            result = _context3.sent;
            return _context3.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function editProjectImage(_x3) {
    return _ref6.apply(this, arguments);
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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */




/* Animations */


/* Assets */


function Box(_ref) {
  var header = _ref.header,
      content = _ref.content,
      boxOpen = _ref.boxOpen,
      toggleBox = _ref.toggleBox,
      children = _ref.children;

  /* TODO: escape event listener */
  return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], null, boxOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
    className: "box-overlay"
  }, _animations__WEBPACK_IMPORTED_MODULE_4__["FADE_IN"], {
    onClick: toggleBox
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
    key: "box-content",
    className: "box__content border p-5"
  }, _animations__WEBPACK_IMPORTED_MODULE_4__["FADE_IN_UP"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box__header d-flex align-items-baseline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text--lg mb-1"
  }, header), content && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-muted--60 mb-0"
  }, content)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "custom-modal__close btn btn-link ml-auto",
    onClick: toggleBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_3__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--12",
    src: icons_close_svg__WEBPACK_IMPORTED_MODULE_5___default.a
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box__body d-flex mt-4"
  }, children)))), document.body);
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
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ */ "./assets/app/js/react/common/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api */ "./assets/app/js/react/api/index.js");
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
      projectImages = _ref.projectImages,
      children = _ref.children;

  /* Contants */
  var COLUMN_LAYOUT = 'col-12 col-md-6 col-lg-4 col-xl-3';
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


  var addProjectImagesMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_8__["addProjectImages"], {
    onSuccess: function onSuccess() {
      return queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_8__["QUERY_KEYS"].PROJECT_BY_ID, projectId]);
    }
  });
  var deleteProjectImagesMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_8__["deleteProjectImages"], {
    onSuccess: function onSuccess() {
      return queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_8__["QUERY_KEYS"].PROJECT_BY_ID, projectId]);
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
  }, getRootProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", getInputProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row row--equalized gutters-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["AnimatePresence"], null, children({
    updateProjectImages: updateProjectImages,
    isLoading: deleteProjectImagesMutation.isLoading
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, _extends({
    key: "add-image"
  }, Object(_animations__WEBPACK_IMPORTED_MODULE_7__["STAGGER_UP"])(projectImages.length), {
    className: COLUMN_LAYOUT,
    layout: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropzoneInner, {
    addImageLoading: addProjectImagesMutation.isLoading,
    updateProjectImages: updateProjectImages,
    isParentDragActive: isDragActive
  })))));
}
/* Inner dropzone */

var DropzoneInner = function DropzoneInner(_ref2) {
  var addImageLoading = _ref2.addImageLoading,
      updateProjectImages = _ref2.updateProjectImages,
      isParentDragActive = _ref2.isParentDragActive;

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
  }, getRootProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", getInputProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "dropzone__container card card--link card--transparent card--pulse ".concat((isDragActive || isParentDragActive) && 'is-pulsing', " h-100 mb-0")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body d-flex align-items-center justify-content-center p-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_6__["LoadingWrapper"], {
    loading: addImageLoading,
    classes: {
      loaderClasses: 'position-absolute d-flex text-secondary'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn-text d-flex flex-column align-items-center text-white text-muted--40"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--48",
    src: icons_add_image_svg__WEBPACK_IMPORTED_MODULE_5___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text--sm mt-1"
  }, isDragActive || isParentDragActive ? 'Drop the images' : 'Add some images'))))));
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
/*! exports provided: Dropzone, Modal, Box, LoadingWrapper */
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


  var header = "Edit ".concat(inputType, "...");
  /* Callbacks */

  var toggleBox = function toggleBox() {
    return setBoxOpen(!boxOpen);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "editable d-flex align-items-center position-relative"
  }, children, userRole === 'admin' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "editable__toggle btn btn-link icon-wrapper icon-wrapper--secondary icon-wrapper--interactive stretched-link ml-2",
    onClick: toggleBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--10 text-secondary",
    src: icons_edit_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    header: header,
    boxOpen: boxOpen,
    toggleBox: toggleBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_EditableBody__WEBPACK_IMPORTED_MODULE_5__["default"], _objectSpread({
    header: header,
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
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api */ "./assets/app/js/react/api/index.js");
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
  var header = _ref.header,
      inputType = _ref.inputType,
      toggleBox = _ref.toggleBox,
      content = _ref.content,
      projectId = _ref.projectId,
      mutation = _ref.mutation,
      mutationId = _ref.mutationId;

  /* Hooks */
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQueryClient"])();
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

  var editMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(mutation, {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries([_api__WEBPACK_IMPORTED_MODULE_2__["QUERY_KEYS"].PROJECT_BY_ID, projectId]);
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
  }, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control form-control-sm",
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
    title: "Done",
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _user_add__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-add */ "./assets/app/js/react/components/user-add/index.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users */ "./assets/app/js/react/components/users/index.js");
/* harmony import */ var _editable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../editable */ "./assets/app/js/react/components/editable/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../context */ "./assets/app/js/react/context.js");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api */ "./assets/app/js/react/api/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */


/* Components */




/* Context */


/* Animations */



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
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row mb-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(userRole === 'admin' && 'editable', " d-flex align-items-center mb-2")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable__WEBPACK_IMPORTED_MODULE_4__["Editable"], {
    inputType: "title",
    projectId: id,
    content: title,
    mutation: _api__WEBPACK_IMPORTED_MODULE_7__["editProject"],
    mutationId: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].h1, _extends({
    key: title
  }, _common_animations__WEBPACK_IMPORTED_MODULE_6__["FADE_IN"], {
    className: "h5 mb-0 text-white"
  }), title ? title : 'Add a nice title'))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "".concat(userRole === 'admin' && 'editable', " d-flex align-items-center mb-2")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable__WEBPACK_IMPORTED_MODULE_4__["Editable"], {
    inputType: "description",
    projectId: id,
    content: description,
    mutation: _api__WEBPACK_IMPORTED_MODULE_7__["editProject"],
    mutationId: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].p, _extends({
    key: description
  }, _common_animations__WEBPACK_IMPORTED_MODULE_6__["FADE_IN"], {
    className: "text-muted--70 mb-0"
  }), description ? description : 'Add a decription about the project')))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
/* harmony import */ var _editable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../editable */ "./assets/app/js/react/components/editable/index.js");
/* harmony import */ var icons_check_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/check.svg */ "./assets/app/img/icons/check.svg");
/* harmony import */ var icons_check_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_check_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api */ "./assets/app/js/react/api/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */




/* Components */


/* Assets */


/* Animations */



function ProjectDetailImage(_ref) {
  var projectImage = _ref.projectImage,
      projectId = _ref.projectId,
      selected = _ref.selected,
      updateSelected = _ref.updateSelected;

  /* Constants */
  var id = projectImage.id,
      title = projectImage.title,
      image = projectImage.image;
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "card card--link card--product ".concat(selected.includes(id) && 'is-selected')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "".concat(id),
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_editable__WEBPACK_IMPORTED_MODULE_4__["Editable"], {
    inputType: "title",
    projectId: projectId,
    content: title,
    mutation: _api__WEBPACK_IMPORTED_MODULE_7__["editProjectImage"],
    mutationId: id
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].p, _extends({}, _common_animations__WEBPACK_IMPORTED_MODULE_6__["FADE_IN"], {
    class: "mb-0"
  }), title))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */



/* Assets */


/* Animations */


/* Components */




/* Hooks */


/* Api */


function ProjectDetailImages(_ref) {
  var projectImages = _ref.projectImages,
      projectId = _ref.projectId;

  /* Hooks */
  var _useSelection = Object(_hooks__WEBPACK_IMPORTED_MODULE_8__["useSelection"])(),
      selected = _useSelection.selected,
      updateSelected = _useSelection.updateSelected,
      resetSelected = _useSelection.resetSelected;

  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQueryClient"])();
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_7__["Dropzone"], {
    projectId: projectId,
    projectImages: projectImages
  }, function () {
    return projectImages.map(function (projectImage, projectImageIndex) {
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
    });
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, selected.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_action_menu__WEBPACK_IMPORTED_MODULE_6__["ActionMenu"], {
    selected: selected,
    resetSelected: resetSelected,
    actions: actions
  })));
}

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
    to: "projects/".concat(id),
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
    className: "icon-wrapper icon-wrapper--interactive icon-wrapper--secondary btn btn-link btn--project-add",
    style: {
      '--size': '75px'
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
      image = _ref2.image,
      title = _ref2.title;
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
    return projectImages.map(function (_ref3, imageIndex) {
      var image = _ref3.image,
          title = _ref3.title,
          id = _ref3.id;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, _extends({
        layout: true
      }, Object(_common_animations__WEBPACK_IMPORTED_MODULE_8__["STAGGER_UP"])(imageIndex), {
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
          '--size': '50px'
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
    });
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
      newProjectId = _ref.newProjectId,
      isLoading = _ref.isLoading;

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
  }, "Your projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, !isLoading && projects.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].p, _extends({}, _common_animations__WEBPACK_IMPORTED_MODULE_5__["FADE_IN"], {
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
    header: "Select users",
    content: "Choose some users to collaborate with.",
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
      project = _ref.project,
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
/*! exports provided: isEmail, filterUsers, updatePageTitle, getRole */
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/index.js");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api */ "./assets/app/js/react/api/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers */ "./assets/app/js/react/helpers/index.js");
/* harmony import */ var _components_project_detail__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/project-detail */ "./assets/app/js/react/components/project-detail/index.js");
/* Packages */





/* Animations */


/* Api */


/* Helpers */


/* Components */


function ProjectDetail(_ref) {
  var currentUserLoading = _ref.currentUserLoading;

  /* Hooks */
  var _useParams = Object(react_router__WEBPACK_IMPORTED_MODULE_2__["useParams"])(),
      projectId = _useParams.id;
  /* Queries */


  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQuery"])([_api__WEBPACK_IMPORTED_MODULE_6__["QUERY_KEYS"].PROJECT_BY_ID, parseInt(projectId)], function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_6__["fetchProjectById"])({
      projectId: projectId
    });
  }, {
    onSuccess: function onSuccess(_ref2) {
      var title = _ref2.title;
      return Object(_helpers__WEBPACK_IMPORTED_MODULE_7__["updatePageTitle"])(title);
    }
  }),
      projectLoading = _useQuery.isLoading,
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
  var isLoading = currentUserLoading || projectLoading;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["AnimatePresence"], null, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, _common_animations__WEBPACK_IMPORTED_MODULE_5__["FADE_IN"], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_4__["default"], {
    color: "secondary"
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_project_detail__WEBPACK_IMPORTED_MODULE_8__["ProjectDetailHeader"], {
    title: title,
    description: description,
    users: users,
    id: id,
    author: author,
    email: email
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_project_detail__WEBPACK_IMPORTED_MODULE_8__["ProjectDetailImages"], {
    projectImages: projectImages,
    projectId: id
  }))));
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
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components_project_overview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/project-overview */ "./assets/app/js/react/components/project-overview/index.js");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context */ "./assets/app/js/react/context.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api */ "./assets/app/js/react/api/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */




/* Components */


/* Animations */


/* Context */


/* Api */


function ProjectOverview(_ref) {
  var currentUserLoading = _ref.currentUserLoading;

  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState2 = _slicedToArray(_useState, 2),
      newProjectId = _useState2[0],
      setNewProjectId = _useState2[1];
  /* Hooks */


  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_6__["default"]),
      currentUser = _useContext.currentUser,
      userRole = _useContext.userRole;
  /* Constants */


  var userId = currentUser !== null && currentUser !== void 0 && currentUser.id ? currentUser.id : atob(location.search.replace('?', ''));
  /* Queries */

  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_api__WEBPACK_IMPORTED_MODULE_7__["QUERY_KEYS"].PROJECT_BY_USER, function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_7__["fetchProjectsByUser"])({
      userId: userId
    });
  }, {
    enabled: !!userId
  }),
      projectsLoading = _useQuery.isLoading,
      _useQuery$data = _useQuery.data,
      data = _useQuery$data === void 0 ? {} : _useQuery$data;
  /* Constants  */


  var _data$projects = data.projects,
      projects = _data$projects === void 0 ? [] : _data$projects;
  var isLoading = currentUserLoading || projectsLoading;
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], null, isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _common_animations__WEBPACK_IMPORTED_MODULE_5__["FADE_IN"], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "secondary"
  }))), userRole === 'admin' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_project_overview__WEBPACK_IMPORTED_MODULE_4__["ProjectAdd"], {
    setNewProjectId: setNewProjectId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_project_overview__WEBPACK_IMPORTED_MODULE_4__["ProjectResults"], {
    projects: projects,
    newProjectId: newProjectId,
    isLoading: isLoading
  }));
}

/***/ }),

/***/ "./assets/app/js/react/pages/index.js":
/*!********************************************!*\
  !*** ./assets/app/js/react/pages/index.js ***!
  \********************************************/
/*! exports provided: ProjectOverview, ProjectDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectOverview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectOverview */ "./assets/app/js/react/pages/ProjectOverview.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectOverview", function() { return _ProjectOverview__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ProjectDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectDetail */ "./assets/app/js/react/pages/ProjectDetail.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectDetail", function() { return _ProjectDetail__WEBPACK_IMPORTED_MODULE_1__["default"]; });




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
  page: _pages__WEBPACK_IMPORTED_MODULE_0__["ProjectOverview"]
}, {
  name: 'project-detail',
  path: '/projects/:id',
  page: _pages__WEBPACK_IMPORTED_MODULE_0__["ProjectDetail"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX2ltYWdlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9hZGRfcHJvamVjdC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX3VzZXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2FyY2hpdmUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2NoZWNrLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvZGVsZXRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9lZGl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9sZWF2ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvc3Rhci5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9hbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9vYmplY3RmaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9BcHAuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvYXBpL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvYXBpL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9hcGkvcHJvamVjdEltYWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvYXBpL3VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vQm94LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbW1vbi9Ecm9wem9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vTG9hZGluZ1dyYXBwZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL01vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbW1vbi9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9hY3Rpb24tbWVudS9BY3Rpb25NZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvYWN0aW9uLW1lbnUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL2VkaXRhYmxlL0VkaXRhYmxlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvZWRpdGFibGUvRWRpdGFibGVCb2R5LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvZWRpdGFibGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3Byb2plY3QtZGV0YWlsL1Byb2plY3REZXRhaWxIZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbC9Qcm9qZWN0RGV0YWlsSW1hZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9wcm9qZWN0LWRldGFpbC9Qcm9qZWN0RGV0YWlsSW1hZ2VzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvcHJvamVjdC1kZXRhaWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3Byb2plY3Qtb3ZlcnZpZXcvUHJvamVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3Byb2plY3Qtb3ZlcnZpZXcvUHJvamVjdEFkZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3Byb2plY3Qtb3ZlcnZpZXcvUHJvamVjdEltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvcHJvamVjdC1vdmVydmlldy9Qcm9qZWN0TW9kYWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy9wcm9qZWN0LW92ZXJ2aWV3L1Byb2plY3RSZXN1bHRzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvcHJvamVjdC1vdmVydmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlci1hZGQvVXNlckFkZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3VzZXItYWRkL1VzZXJBZGRTZWFyY2guanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2VyLWFkZC9Vc2VyQWRkU2VhcmNoUmVzdWx0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3VzZXItYWRkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2Vycy9Vc2VyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlcnMvVXNlclNlbGVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3VzZXJzL1VzZXJzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb250ZXh0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvZWxlbWVudHMvQnV0dG9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2VsZW1lbnRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvaGVscGVycy9maWx0ZXJVc2Vycy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2hlbHBlcnMvZ2V0Um9sZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9oZWxwZXJzL2lzRW1haWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9oZWxwZXJzL3VwZGF0ZVBhZ2VUaXRsZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2hvb2tzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvaG9va3MvdXNlU2VsZWN0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcGFnZXMvUHJvamVjdERldGFpbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wYWdlcy9Qcm9qZWN0T3ZlcnZpZXcuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOlsiQWxlcnQiLCJlbCIsIkRPTSIsInRvZ2dsZSIsInF1ZXJ5U2VsZWN0b3IiLCJvbkluaXQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJvcGFjaXR5IiwidmlzaWJpbGl0eSIsInRyYW5zZm9ybSIsImFsZXJ0Tm9kZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibm9kZSIsImNsaWVudCIsIlF1ZXJ5Q2xpZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJxdWVyaWVzIiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJhcHBOb2RlIiwiZ2V0RWxlbWVudEJ5SWQiLCJyZW5kZXIiLCIkIiwib2JqZWN0Rml0SW1hZ2VzIiwiQXBwIiwidXNlU3RhdGUiLCJjdXJyZW50VXNlciIsInNldEN1cnJlbnRVc2VyIiwidXNlclJvbGUiLCJzZXRVc2VyUm9sZSIsInVzZXJJZCIsImF0b2IiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlcGxhY2UiLCJ1c2VRdWVyeSIsIlFVRVJZX0tFWVMiLCJDVVJSRU5UX1VTRVIiLCJmZXRjaEN1cnJlbnRVc2VyIiwib25TdWNjZXNzIiwidXNlciIsImdldFJvbGUiLCJjdXJyZW50VXNlckxvYWRpbmciLCJpc0xvYWRpbmciLCJyb3V0ZXMiLCJtYXAiLCJwYXRoIiwiUGFnZSIsInBhZ2UiLCJwcm9wcyIsIlBST0pFQ1RfQllfVVNFUiIsIlBST0pFQ1RfQllfSUQiLCJHTE9CQUxfVVNFUlMiLCJmZXRjaFByb2plY3RzQnlVc2VyIiwiYXhpb3MiLCJnZXQiLCJyZXN1bHQiLCJkYXRhIiwiZmV0Y2hQcm9qZWN0QnlJZCIsInByb2plY3RJZCIsImFkZFByb2plY3QiLCJwb3N0IiwiZGVsZXRlUHJvamVjdHMiLCJwcm9qZWN0SWRzIiwicGFyYW1zIiwiRm9ybURhdGEiLCJpZCIsImFwcGVuZCIsImxlYXZlUHJvamVjdHMiLCJlZGl0UHJvamVjdCIsImZvcm1SZWYiLCJjdXJyZW50IiwiYWRkUHJvamVjdEltYWdlcyIsImltYWdlcyIsImltYWdlIiwiZGVsZXRlUHJvamVjdEltYWdlcyIsInByb2plY3RJbWFnZUlkcyIsImVkaXRQcm9qZWN0SW1hZ2UiLCJ1cmwiLCJmZXRjaEdvYmFsVXNlcnMiLCJhZGRVc2VyIiwiZW1haWwiLCJkZWxldGVVc2VyIiwiQm94IiwiaGVhZGVyIiwiY29udGVudCIsImJveE9wZW4iLCJ0b2dnbGVCb3giLCJjaGlsZHJlbiIsImNyZWF0ZVBvcnRhbCIsIkZBREVfSU4iLCJGQURFX0lOX1VQIiwiY2xvc2VJY29uIiwiYm9keSIsIkRyb3B6b25lIiwicHJvamVjdEltYWdlcyIsIkNPTFVNTl9MQVlPVVQiLCJxdWVyeUNsaWVudCIsInVzZVF1ZXJ5Q2xpZW50IiwidXNlRHJvcHpvbmUiLCJhY2NlcHQiLCJub0NsaWNrIiwib25Ecm9wIiwiYWNjZXB0ZWRGaWxlcyIsInVwZGF0ZVByb2plY3RJbWFnZXMiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiaXNEcmFnQWN0aXZlIiwiYWRkUHJvamVjdEltYWdlc011dGF0aW9uIiwidXNlTXV0YXRpb24iLCJpbnZhbGlkYXRlUXVlcmllcyIsImRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbiIsImFjdGlvbiIsIm11dGF0ZSIsIlNUQUdHRVJfVVAiLCJsZW5ndGgiLCJpc1BhcmVudERyYWdBY3RpdmUiLCJEcm9wem9uZUlubmVyIiwiYWRkSW1hZ2VMb2FkaW5nIiwibm9EcmFnRXZlbnRzQnViYmxpbmciLCJsb2FkZXJDbGFzc2VzIiwiYWRkSW1hZ2VJY29uIiwiTG9hZGluZ1dyYXBwZXIiLCJsb2FkaW5nIiwibG9hZGVyU2l6ZSIsImNsYXNzZXMiLCJkZWZhdWx0Q2xhc3NlcyIsIlNDQUxFX0ZBREUiLCJNb2RhbCIsInRvZ2dsZU1vZGFsIiwiZG9tRWxlbWVudCIsInZhcmlhbnQiLCJUUkFOU0ZPUk1fVVAiLCJFQVNFIiwiaW5pdGlhbCIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsInkiLCJ0eXBlIiwiZGFtcGluZyIsInN0aWZmbmVzcyIsInNjYWxlIiwiaW5kZXgiLCJkZWxheSIsIlNUQUdHRVJfTEVGVCIsIngiLCJBY3Rpb25NZW51Iiwic2VsZWN0ZWQiLCJyZXNldFNlbGVjdGVkIiwiYWN0aW9ucyIsInVzZUNvbnRleHQiLCJTdGF0aWNDb250ZXh0IiwiYWN0aW9uSW5kZXgiLCJ0aXRsZSIsInRoZW1lIiwiaGFzUGVybWlzc2lvbiIsImljb24iLCJpY29uU2l6ZSIsIm11dGF0aW9uIiwiaW5jbHVkZXMiLCJFZGl0YWJsZSIsImlucHV0VHlwZSIsInJlc3QiLCJzZXRCb3hPcGVuIiwiZWRpdEljb24iLCJFZGl0YWJsZUJvZHkiLCJtdXRhdGlvbklkIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZVJlZiIsImlucHV0UmVmIiwidXNlRWZmZWN0Iiwic2VsZWN0IiwiZWRpdE11dGF0aW9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsIlByb2plY3REZXRhaWxIZWFkZXIiLCJkZXNjcmlwdGlvbiIsInVzZXJzIiwiYXV0aG9yIiwicHJvamVjdCIsInN0YXRpY0NvbnRleHQiLCJQcm9qZWN0RGV0YWlsSW1hZ2UiLCJwcm9qZWN0SW1hZ2UiLCJ1cGRhdGVTZWxlY3RlZCIsImNoZWNrSWNvbiIsIlByb2plY3REZXRhaWxJbWFnZXMiLCJ1c2VTZWxlY3Rpb24iLCJkZWxldGVJY29uIiwicHJvamVjdEltYWdlSW5kZXgiLCJQcm9qZWN0IiwibGF5b3V0IiwiUHJvamVjdEFkZCIsInNldE5ld1Byb2plY3RJZCIsInNldFByb2plY3RJZCIsIm1vZGFsT3BlbiIsInNldE1vZGFsT3BlbiIsImVuYWJsZWQiLCJhZGRNdXRhdGlvbiIsImludmFsaWRhdGVQcm9qZWN0Iiwic2V0VGltZW91dCIsInVwZGF0ZVByb2plY3QiLCJhZGRQcm9qZWN0SWNvbiIsIlByb2plY3RJbWFnZSIsIlByb2plY3RNb2RhbCIsImltYWdlSW5kZXgiLCJzdG9wUHJvcGFnYXRpb24iLCJQcm9qZWN0UmVzdWx0cyIsInByb2plY3RzIiwibmV3UHJvamVjdElkIiwibGVhdmVQcm9qZWN0c011dGF0aW9uIiwiZGVsZXRlUHJvamVjdHNNdXRhdGlvbiIsImxlYXZlSWNvbiIsImFyY2hpdmVJY29uIiwiZmlsdGVyIiwicHJvamVjdEluZGV4IiwiVXNlckFkZCIsImFkZFVzZXJJY29uIiwiVXNlckFkZFNlYXJjaCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJmb2N1c2VkVXNlciIsInNldEZvY3VzZWRVc2VyIiwiZ2xvYmFsVXNlcnMiLCJnbG9iYWxVc2Vyc0xvYWRpbmciLCJmaWx0ZXJlZFVzZXJzIiwiZmlsdGVyVXNlcnMiLCJxdWVyeVJlZiIsImFkZFVzZXJNdXRhdGlvbiIsImhhbmRsZUNoYW5nZSIsImhhbmRsZU9uS2V5RG93biIsImtleSIsImlzRW1haWwiLCJoYW5kbGVDbGljayIsInVzZXJNdXRhdGlvbkxvYWRpbmciLCJVc2VyQWRkU2VhcmNoUmVzdWx0cyIsInJlc3VsdHMiLCJuZXdVc2VyIiwidXNlcm5hbWUiLCJ1c2VyQ29sb3IiLCJ1c2VySW5kZXgiLCJVc2VyIiwic2l6ZSIsImlzQXV0aG9yIiwiam9pbiIsImRlbGV0ZVVzZXJNdXRhdGlvbiIsInN0YXJJY29uIiwiVXNlckF2YXRhciIsInVzZXJJbml0aWFscyIsInNwbGl0Iiwid29yZCIsInRvVXBwZXJDYXNlIiwiVXNlckluZm8iLCJVc2VyU2VsZWN0IiwiaXNGb2N1c2VkIiwiaGFuZGxlU3RhdHVzIiwiVXNlcnMiLCJzbGljZUFtb3VudCIsIkluZmluaXR5Iiwic2xpY2UiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJCdXR0b24iLCJleHRlbnNpb25DbGFzc2VzIiwib25DbGljayIsImhlaWdodCIsImxvd2VyUXVlcnkiLCJ0b0xvd2VyQ2FzZSIsImV4aXN0aW5nVXNlcnNCeUVtYWlsIiwiVVNFUl9ST0xFUyIsIlJPTEVfQURNSU4iLCJST0xFX1VTRVIiLCJST0xFX1VTRVJfQkFTSUMiLCJyb2xlcyIsInRlc3QiLCJ1cGRhdGVQYWdlVGl0bGUiLCJzZXRTZWxlY3RlZCIsInNlbGVjdGVkSWQiLCJQcm9qZWN0RGV0YWlsIiwidXNlUGFyYW1zIiwicGFyc2VJbnQiLCJwcm9qZWN0TG9hZGluZyIsIlByb2plY3RPdmVydmlldyIsInByb2plY3RzTG9hZGluZyIsIm5hbWUiLCJwYXJzbGV5Q29uZmlnIiwiZXJyb3JDbGFzcyIsImV4Y2x1ZGVkIiwic3VjY2Vzc0NsYXNzIiwicGFyc2xleSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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QUNkO0FBQ0NvUCxNQUFJLEVBQUUsa0JBRFA7QUFFQ2xQLE1BQUksRUFBRSxXQUZQO0FBR0NFLE1BQUksRUFBRThPLHNEQUFlQTtBQUh0QixDQURjLEVBTWQ7QUFDQ0UsTUFBSSxFQUFFLGdCQURQO0FBRUNsUCxNQUFJLEVBQUUsZUFGUDtBQUdDRSxNQUFJLEVBQUUwTyxvREFBYUE7QUFIcEIsQ0FOYyxDQUFmO0FBYWU5TyxxRUFBZixFOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxJQUFNcVAsYUFBYSxHQUFHO0FBQ2xCQyxZQUFVLEVBQUUsVUFETTtBQUVsQkMsVUFBUSxFQUFFLG9HQUZRO0FBR2xCQyxjQUFZLEVBQUU7QUFISSxDQUF0QjtBQU1BOVEsNkNBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCK1EsT0FBNUIsQ0FBb0NKLGFBQXBDLEU7Ozs7Ozs7Ozs7O0FDVEEsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJtYWluXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYnVpbGQvYXBwL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2Fzc2V0cy9hcHAvanMvbWFpbi5qc1wiLFwidmVuZG9yc35tYWluXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FkZF9pbWFnZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYWRkX3Byb2plY3Quc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FkZF91c2VyLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hcmNoaXZlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jaGVjay5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY2xvc2Uuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2RlbGV0ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZWRpdC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbGVhdmUuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3N0YXIuc3ZnXCI7IiwiY2xhc3MgQWxlcnQge1xuICAgIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgICAgIHRoaXMuRE9NID0geyBlbCB9O1xuICAgICAgICB0aGlzLkRPTS50b2dnbGUgPSB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKFwiLmFsZXJ0X19idG5cIik7XG5cbiAgICAgICAgdGhpcy5vbkluaXQoKTtcbiAgICB9XG4gICAgb25Jbml0KCkge1xuICAgICAgICB0aGlzLkRPTS50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMudG9nZ2xlKCkpO1xuICAgIH1cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuRE9NLmVsLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLkRPTS5lbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgdGhpcy5ET00uZWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDEwMCUpXCI7XG4gICAgfVxufVxuXG5jb25zdCBhbGVydE5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFsZXJ0XVwiKTtcblsuLi5hbGVydE5vZGVzXS5mb3JFYWNoKChub2RlKSA9PiBuZXcgQWxlcnQobm9kZSkpO1xuIiwiLy8gQ1NTXG5pbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcblxuLy8gUG9sbHlmaWxzXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5cbi8vIENvcmVcbmltcG9ydCAnLi92YWxpZGF0aW9uJztcbmltcG9ydCAnLi9hbGVydCc7XG5cbi8vIFBsdWdpbnNcbmltcG9ydCAnLi9vYmplY3RmaXQnO1xuXG4vKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IEFwcCBmcm9tICcuL3JlYWN0L0FwcCc7XG5cbi8qIENsaWVudCAqL1xuY29uc3QgY2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KHtcblx0ZGVmYXVsdE9wdGlvbnM6IHtcblx0XHRxdWVyaWVzOiB7XG5cdFx0XHRyZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXG5cdFx0fSxcblx0fSxcbn0pO1xuXG4vKiBSZW5kZXIgKi9cbmNvbnN0IGFwcE5vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyk7XG5pZiAoYXBwTm9kZSAhPT0gbnVsbCkge1xuXHRyZW5kZXIoXG5cdFx0PFF1ZXJ5Q2xpZW50UHJvdmlkZXIgey4uLnsgY2xpZW50IH19PlxuXHRcdFx0PEFwcCAvPlxuXHRcdDwvUXVlcnlDbGllbnRQcm92aWRlcj4sXG5cdFx0YXBwTm9kZVxuXHQpO1xufVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBvYmplY3RGaXRJbWFnZXMgZnJvbSAnb2JqZWN0LWZpdC1pbWFnZXMnO1xuXG4kKGZ1bmN0aW9uKCkge1xuICAgIG9iamVjdEZpdEltYWdlcygpO1xufSk7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFN3aXRjaCwgUm91dGUgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi9jb250ZXh0JztcblxuLyogQXBpICovXG5pbXBvcnQgeyBmZXRjaEN1cnJlbnRVc2VyLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi9hcGknO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBnZXRSb2xlIH0gZnJvbSAnLi9oZWxwZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKFtdKTtcblx0Y29uc3QgW3VzZXJSb2xlLCBzZXRVc2VyUm9sZV0gPSB1c2VTdGF0ZShbXSk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHVzZXJJZCA9IGF0b2IobG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCAnJykpO1xuXG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBpc0xvYWRpbmc6IGN1cnJlbnRVc2VyTG9hZGluZyB9ID0gdXNlUXVlcnkoUVVFUllfS0VZUy5DVVJSRU5UX1VTRVIsICgpID0+IGZldGNoQ3VycmVudFVzZXIoeyB1c2VySWQgfSksIHtcblx0XHRvblN1Y2Nlc3M6ICh7IHVzZXIgfSkgPT4ge1xuXHRcdFx0c2V0Q3VycmVudFVzZXIodXNlcik7XG5cdFx0XHRzZXRVc2VyUm9sZShnZXRSb2xlKHVzZXIpKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8Um91dGVyPlxuXHRcdFx0PFN3aXRjaD5cblx0XHRcdFx0PFN0YXRpY0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgY3VycmVudFVzZXIsIHVzZXJSb2xlIH19PlxuXHRcdFx0XHRcdHtyb3V0ZXMubWFwKCh7IHBhdGgsIHBhZ2U6IFBhZ2UsIHByb3BzIH0pID0+IChcblx0XHRcdFx0XHRcdDxSb3V0ZSBrZXk9e3BhdGh9IHBhdGg9e3BhdGh9IGV4YWN0PlxuXHRcdFx0XHRcdFx0XHQ8UGFnZSB7Li4ueyAuLi5wcm9wcywgY3VycmVudFVzZXJMb2FkaW5nIH19IC8+XG5cdFx0XHRcdFx0XHQ8L1JvdXRlPlxuXHRcdFx0XHRcdCkpfVxuXHRcdFx0XHQ8L1N0YXRpY0NvbnRleHQuUHJvdmlkZXI+XG5cdFx0XHQ8L1N3aXRjaD5cblx0XHQ8L1JvdXRlcj5cblx0KTtcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vcHJvamVjdCc7XG5leHBvcnQgKiBmcm9tICcuL3Byb2plY3RJbWFnZSc7XG5leHBvcnQgKiBmcm9tICcuL3VzZXInO1xuXG5leHBvcnQgY29uc3QgUVVFUllfS0VZUyA9IHtcblx0Q1VSUkVOVF9VU0VSOiAnY3VycmVudF91c2VyJyxcblx0UFJPSkVDVF9CWV9VU0VSOiAncHJvamVjdF9ieV91c2VyJyxcblx0UFJPSkVDVF9CWV9JRDogJ3Byb2plY3RfYnlfaWQnLFxuXHRHTE9CQUxfVVNFUlM6ICdnbG9iYWxfdXNlcnMnLFxufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8qIEZldGNoIHByb2plY3RzIGJ5IHVzZXIgfCBleHBlY3RzIHVzZXIgaWQgKi9cbmV4cG9ydCBjb25zdCBmZXRjaFByb2plY3RzQnlVc2VyID0gYXN5bmMgKHsgdXNlcklkIH0pID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2plY3RzL2dldC8ke3VzZXJJZH1gKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIEZldGNoIHByb2plY3RzIGJ5IGlkIHwgZXhwZWN0cyBwcm9qZWN0IGlkICovXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9qZWN0QnlJZCA9IGFzeW5jICh7IHByb2plY3RJZCB9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChgL2FwaS9wcm9qZWN0L2dldC8ke3Byb2plY3RJZH1gKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIEFkZCBwcm9qZWN0ICovXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdCA9IGFzeW5jICgpID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdCgnL2FwaS9wcm9qZWN0cy9hZGQnKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIERlbGV0ZSBwcm9qZWN0KHMpIHwgZXhwZWN0cyBhcnJheSBvZiBwcm9qZWN0SWRzICAqL1xuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3RzID0gYXN5bmMgKHsgcHJvamVjdElkcyB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuXHRwcm9qZWN0SWRzLmZvckVhY2goKGlkKSA9PiBwYXJhbXMuYXBwZW5kKCdwcm9qZWN0c1tdJywgaWQpKTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3Byb2plY3RzL2RlbGV0ZWAsIHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIExlYXZlIHByb2plY3QocykgfCBleHBlY3RzIGFycmF5IG9mIHByb2plY3RJZHMgYW5kIHVzZXIgaWQgICovXG5leHBvcnQgY29uc3QgbGVhdmVQcm9qZWN0cyA9IGFzeW5jICh7IHByb2plY3RJZHMsIHVzZXJJZCB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuXHRwcm9qZWN0SWRzLmZvckVhY2goKGlkKSA9PiBwYXJhbXMuYXBwZW5kKCdwcm9qZWN0c1tdJywgaWQpKTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3Byb2plY3RzL2xlYXZlLyR7dXNlcklkfWAsIHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIEVkaXQgcHJvamVjdCB8IGV4cGVjdHMgZm9ybURhdGEgb2JqZWN0IGFuZCBwcm9qZWN0IGlkICAqL1xuZXhwb3J0IGNvbnN0IGVkaXRQcm9qZWN0ID0gYXN5bmMgKHsgZm9ybVJlZiwgaWQgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybVJlZi5jdXJyZW50KTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3Byb2plY3RzL2VkaXQvJHtpZH1gLCBwYXJhbXMpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbi8qIEFkZCBwcm9qZWN0SW1hZ2UocykgfCBleHBlY3RzIHByb2plY3QgaWQgYW5kIGFycmF5IG9mIGltYWdlcyAoYmxvYikgKi9cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0SW1hZ2VzID0gYXN5bmMgKHsgcHJvamVjdElkLCBpbWFnZXMgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblx0aW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiBwYXJhbXMuYXBwZW5kKCdpbWFnZXNbXScsIGltYWdlKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9pbWFnZXMvYWRkLyR7cHJvamVjdElkfWAsIHBhcmFtcyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBEZWxldGUgcHJvamVjdEltYWdlKHMpIHwgZXhwZWN0cyBwcm9qZWN0IGlkIGFuZCBhcnJheSBvZiBwcm9qZWN0SW1hZ2VJZHMgICovXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvamVjdEltYWdlcyA9IGFzeW5jICh7IHByb2plY3RJZCwgcHJvamVjdEltYWdlSWRzIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5cdHByb2plY3RJbWFnZUlkcy5mb3JFYWNoKChpZCkgPT4gcGFyYW1zLmFwcGVuZCgncHJvamVjdEltYWdlc1tdJywgaWQpKTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2ltYWdlcy9kZWxldGUvJHtwcm9qZWN0SWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIEVkaXQgcHJvamVjdEltYWdlIHwgZXhwZWN0cyBmb3JtUmVmIG9iamVjdCBhbmQgcHJvamVjdEltYWdlIGlkICAqL1xuZXhwb3J0IGNvbnN0IGVkaXRQcm9qZWN0SW1hZ2UgPSBhc3luYyAoeyBmb3JtUmVmLCBpZCB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvaW1hZ2VzL2VkaXQvJHtpZH1gLCBwYXJhbXMpO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuLyogRmV0Y2ggY3VycmVudCAobG9nZ2VkIGluKSB1c2VyIHwgZXhwZWN0cyB1c2VyIGlkICovXG5leHBvcnQgY29uc3QgZmV0Y2hDdXJyZW50VXNlciA9IGFzeW5jICh7IHVzZXJJZCB9KSA9PiB7XG5cdGxldCB1cmwgPSAnL2FwaS91c2Vycy9nZXQnO1xuXHRpZiAodXNlcklkKSB1cmwgPSBgJHt1cmx9LyR7dXNlcklkfWA7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBGZXRjaCBhbGwgdXNlcnMgaW4gZGIgKi9cbmV4cG9ydCBjb25zdCBmZXRjaEdvYmFsVXNlcnMgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS91c2Vycy9nZXQvYWxsJyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBBZGQgdXNlciB0byBwcm9qZWN0IHwgZXhwZWN0cyBwcm9qZWN0IGlkIGFuZCB1c2VyIGVtYWlsICovXG5leHBvcnQgY29uc3QgYWRkVXNlciA9IGFzeW5jICh7IHByb2plY3RJZCwgZW1haWwgfSkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3VzZXJzL2FkZC8ke3Byb2plY3RJZH1gLCB7IGVtYWlsIH0pO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogRGVsZXRlIHVzZXIgZnJvbSBwcm9qZWN0IHwgZXhwZWN0cyBwcm9qZWN0IGlkIGFuZCB1c2VyIGlkICovXG5leHBvcnQgY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jICh7IHByb2plY3RJZCwgdXNlcklkIH0pID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS91c2Vycy9kZWxldGUvJHtwcm9qZWN0SWR9YCwgeyB1c2VySWQgfSk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiwgRkFERV9JTl9VUCB9IGZyb20gJy4vYW5pbWF0aW9ucyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3goeyBoZWFkZXIsIGNvbnRlbnQsIGJveE9wZW4sIHRvZ2dsZUJveCwgY2hpbGRyZW4gfSkge1xuXHQvKiBUT0RPOiBlc2NhcGUgZXZlbnQgbGlzdGVuZXIgKi9cblx0cmV0dXJuIGNyZWF0ZVBvcnRhbChcblx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0e2JveE9wZW4gJiYgKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImJveFwiPlxuXHRcdFx0XHRcdDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImJveC1vdmVybGF5XCIgey4uLkZBREVfSU59IG9uQ2xpY2s9e3RvZ2dsZUJveH0gLz5cblx0XHRcdFx0XHQ8bW90aW9uLmRpdiBrZXk9XCJib3gtY29udGVudFwiIGNsYXNzTmFtZT1cImJveF9fY29udGVudCBib3JkZXIgcC01XCIgey4uLkZBREVfSU5fVVB9PlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJib3hfX2hlYWRlciBkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmVcIj5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW5cIj5cblx0XHRcdFx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LS1sZyBtYi0xXCI+e2hlYWRlcn08L3A+XG5cdFx0XHRcdFx0XHRcdFx0e2NvbnRlbnQgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNjAgbWItMFwiPntjb250ZW50fTwvcD59XG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19jbG9zZSBidG4gYnRuLWxpbmsgbWwtYXV0b1wiXG5cdFx0XHRcdFx0XHRcdFx0b25DbGljaz17dG9nZ2xlQm94fT5cblx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTJcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cblx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYm94X19ib2R5IGQtZmxleCBtdC00XCI+e2NoaWxkcmVufTwvZGl2PlxuXHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpfVxuXHRcdDwvQW5pbWF0ZVByZXNlbmNlPixcblx0XHRkb2N1bWVudC5ib2R5XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSAncmVhY3QtZHJvcHpvbmUnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkSW1hZ2VJY29uIGZyb20gJ2ljb25zL2FkZF9pbWFnZS5zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBMb2FkaW5nV3JhcHBlciB9IGZyb20gJy4vJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU1RBR0dFUl9VUCB9IGZyb20gJy4vYW5pbWF0aW9ucyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgYWRkUHJvamVjdEltYWdlcywgZGVsZXRlUHJvamVjdEltYWdlcywgUVVFUllfS0VZUyB9IGZyb20gJy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3B6b25lKHsgcHJvamVjdElkLCBwcm9qZWN0SW1hZ2VzLCBjaGlsZHJlbiB9KSB7XG5cdC8qIENvbnRhbnRzICovXG5cdGNvbnN0IENPTFVNTl9MQVlPVVQgPSAnY29sLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC14bC0zJztcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0Y29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSB9ID0gdXNlRHJvcHpvbmUoe1xuXHRcdGFjY2VwdDogJ2ltYWdlLyonLFxuXHRcdG5vQ2xpY2s6IHRydWUsXG5cdFx0b25Ecm9wOiAoYWNjZXB0ZWRGaWxlcykgPT4gdXBkYXRlUHJvamVjdEltYWdlcygnYWRkJywgeyBpbWFnZXM6IGFjY2VwdGVkRmlsZXMgfSksXG5cdH0pO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBhZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24gPSB1c2VNdXRhdGlvbihhZGRQcm9qZWN0SW1hZ2VzLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKSxcblx0fSk7XG5cblx0Y29uc3QgZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlUHJvamVjdEltYWdlcywge1xuXHRcdG9uU3VjY2VzczogKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSksXG5cdH0pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB1cGRhdGVQcm9qZWN0SW1hZ2VzID0gKGFjdGlvbiwgcHJvcHMpID0+IHtcblx0XHRpZiAoYWN0aW9uID09PSAnYWRkJykgYWRkUHJvamVjdEltYWdlc011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgLi4ucHJvcHMgfSk7XG5cdFx0aWYgKGFjdGlvbiA9PT0gJ2RlbGV0ZScpIGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQsIC4uLnByb3BzIH0pO1xuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZHJvcHpvbmVcIiB7Li4uZ2V0Um9vdFByb3BzKCl9PlxuXHRcdFx0PGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctLWVxdWFsaXplZCBndXR0ZXJzLTVcIj5cblx0XHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0XHR7Y2hpbGRyZW4oeyB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc0xvYWRpbmc6IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbi5pc0xvYWRpbmcgfSl9XG5cdFx0XHRcdFx0PG1vdGlvbi5kaXYga2V5PVwiYWRkLWltYWdlXCIgey4uLlNUQUdHRVJfVVAocHJvamVjdEltYWdlcy5sZW5ndGgpfSBjbGFzc05hbWU9e0NPTFVNTl9MQVlPVVR9IGxheW91dD5cblx0XHRcdFx0XHRcdDxEcm9wem9uZUlubmVyXG5cdFx0XHRcdFx0XHRcdGFkZEltYWdlTG9hZGluZz17YWRkUHJvamVjdEltYWdlc011dGF0aW9uLmlzTG9hZGluZ31cblx0XHRcdFx0XHRcdFx0ey4uLnsgdXBkYXRlUHJvamVjdEltYWdlcywgaXNQYXJlbnREcmFnQWN0aXZlOiBpc0RyYWdBY3RpdmUgfX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG4vKiBJbm5lciBkcm9wem9uZSAqL1xuY29uc3QgRHJvcHpvbmVJbm5lciA9ICh7IGFkZEltYWdlTG9hZGluZywgdXBkYXRlUHJvamVjdEltYWdlcywgaXNQYXJlbnREcmFnQWN0aXZlIH0pID0+IHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSB9ID0gdXNlRHJvcHpvbmUoe1xuXHRcdGFjY2VwdDogJ2ltYWdlLyonLFxuXHRcdG5vRHJhZ0V2ZW50c0J1YmJsaW5nOiB0cnVlLFxuXHRcdG9uRHJvcDogKGFjY2VwdGVkRmlsZXMpID0+IHVwZGF0ZVByb2plY3RJbWFnZXMoJ2FkZCcsIHsgaW1hZ2VzOiBhY2NlcHRlZEZpbGVzIH0pLFxuXHR9KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3B6b25lXCIgey4uLmdldFJvb3RQcm9wcygpfT5cblx0XHRcdDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxuXHRcdFx0PGFydGljbGVcblx0XHRcdFx0Y2xhc3NOYW1lPXtgZHJvcHpvbmVfX2NvbnRhaW5lciBjYXJkIGNhcmQtLWxpbmsgY2FyZC0tdHJhbnNwYXJlbnQgY2FyZC0tcHVsc2UgJHtcblx0XHRcdFx0XHQoaXNEcmFnQWN0aXZlIHx8IGlzUGFyZW50RHJhZ0FjdGl2ZSkgJiYgJ2lzLXB1bHNpbmcnXG5cdFx0XHRcdH0gaC0xMDAgbWItMGB9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgcC0xMFwiPlxuXHRcdFx0XHRcdDxMb2FkaW5nV3JhcHBlclxuXHRcdFx0XHRcdFx0bG9hZGluZz17YWRkSW1hZ2VMb2FkaW5nfVxuXHRcdFx0XHRcdFx0Y2xhc3Nlcz17eyBsb2FkZXJDbGFzc2VzOiAncG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4IHRleHQtc2Vjb25kYXJ5JyB9fT5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImJ0bi10ZXh0IGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSB0ZXh0LW11dGVkLS00MFwiPlxuXHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tNDhcIiBzcmM9e2FkZEltYWdlSWNvbn0gLz5cblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidGV4dC0tc20gbXQtMVwiPlxuXHRcdFx0XHRcdFx0XHRcdHtpc0RyYWdBY3RpdmUgfHwgaXNQYXJlbnREcmFnQWN0aXZlID8gJ0Ryb3AgdGhlIGltYWdlcycgOiAnQWRkIHNvbWUgaW1hZ2VzJ31cblx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9hcnRpY2xlPlxuXHRcdDwvZGl2PlxuXHQpO1xufTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTQ0FMRV9GQURFIH0gZnJvbSAnLi9hbmltYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZ1dyYXBwZXIoeyBsb2FkaW5nLCBjaGlsZHJlbiwgbG9hZGVyU2l6ZSA9IDQwLCBjbGFzc2VzID0ge30gfSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyBsb2FkZXJDbGFzc2VzID0gJ3Bvc2l0aW9uLWFic29sdXRlIGQtZmxleCcsIGRlZmF1bHRDbGFzc2VzID0gJycgfSA9IGNsYXNzZXM7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0+XG5cdFx0XHR7bG9hZGluZyA/IChcblx0XHRcdFx0PG1vdGlvbi5kaXYga2V5PVwibG9hZGVyXCIgY2xhc3NOYW1lPXtsb2FkZXJDbGFzc2VzfSB7Li4uU0NBTEVfRkFERX0+XG5cdFx0XHRcdFx0PENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9XCJpbmhlcml0XCIgc2l6ZT17bG9hZGVyU2l6ZX0gLz5cblx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0KSA6IChcblx0XHRcdFx0PG1vdGlvbi5kaXYga2V5PVwiZGVmYXVsdFwiIGNsYXNzTmFtZT17ZGVmYXVsdENsYXNzZXN9IHsuLi5TQ0FMRV9GQURFfT5cblx0XHRcdFx0XHR7Y2hpbGRyZW59XG5cdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdCl9XG5cdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiwgVFJBTlNGT1JNX1VQIH0gZnJvbSBcIi4vYW5pbWF0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbCh7IHRvZ2dsZU1vZGFsLCBjaGlsZHJlbiwgZG9tRWxlbWVudCwgdmFyaWFudCA9IFwiZGVmYXVsdFwiIH0pIHtcbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PVwiY3VzdG9tLW1vZGFsXCIgY2xhc3NOYW1lPXtgY3VzdG9tLW1vZGFsIGN1c3RvbS1tb2RhbC0tJHt2YXJpYW50fWB9PlxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19vdmVybGF5XCIgb25DbGljaz17dG9nZ2xlTW9kYWx9IHsuLi5GQURFX0lOfSAvPlxuICAgICAgICAgICAgPG1vdGlvbi5hcnRpY2xlIGtleT1cImN1c3RvbS1tb2RhbF9fY29udGVudFwiIGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fY29udGVudFwiIHsuLi5UUkFOU0ZPUk1fVVB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIGQtZmxleCBmbGV4LWdyb3ctMVwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmFydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICBpZiAoZG9tRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKHJlbmRlcigpLCBkb21FbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVuZGVyKCk7XG59XG4iLCJjb25zdCBFQVNFID0gWzAuNjUsIDAsIDAuMzUsIDFdO1xuXG5jb25zdCBGQURFX0lOID0ge1xuXHRpbml0aWFsOiB7XG5cdFx0b3BhY2l0eTogMCxcblx0fSxcblx0YW5pbWF0ZToge1xuXHRcdG9wYWNpdHk6IDEsXG5cdH0sXG5cdGV4aXQ6IHtcblx0XHRvcGFjaXR5OiAwLFxuXHR9LFxuXHR0cmFuc2l0aW9uOiB7XG5cdFx0ZWFzZTogRUFTRSxcblx0XHRkdXJhdGlvbjogMC4yLFxuXHR9LFxufTtcblxuY29uc3QgRkFERV9JTl9VUCA9IHtcblx0aW5pdGlhbDoge1xuXHRcdHk6IDIwMCxcblx0XHRvcGFjaXR5OiAwLFxuXHR9LFxuXHRhbmltYXRlOiB7XG5cdFx0eTogMCxcblx0XHRvcGFjaXR5OiAxLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdHR5cGU6ICdzcHJpbmcnLFxuXHRcdFx0ZGFtcGluZzogNDIsXG5cdFx0XHRzdGlmZm5lc3M6IDgwMCxcblx0XHR9LFxuXHR9LFxuXHRleGl0OiB7XG5cdFx0eTogMjAwLFxuXHRcdG9wYWNpdHk6IDAsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0Mixcblx0XHRcdHN0aWZmbmVzczogMTIwMCxcblx0XHR9LFxuXHR9LFxufTtcblxuY29uc3QgVFJBTlNGT1JNX1VQID0ge1xuXHRpbml0aWFsOiB7XG5cdFx0eTogJzEwMCUnLFxuXHR9LFxuXHRhbmltYXRlOiB7XG5cdFx0eTogJzAlJyxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3ByaW5nJyxcblx0XHRcdGRhbXBpbmc6IDQxLFxuXHRcdFx0c3RpZmZuZXNzOiA2MDAsXG5cdFx0fSxcblx0fSxcblx0ZXhpdDoge1xuXHRcdHk6ICcxMDAlJyxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3ByaW5nJyxcblx0XHRcdGRhbXBpbmc6IDQxLFxuXHRcdFx0c3RpZmZuZXNzOiAxMjAwLFxuXHRcdH0sXG5cdH0sXG59O1xuXG5jb25zdCBTQ0FMRV9GQURFID0ge1xuXHRpbml0aWFsOiB7XG5cdFx0c2NhbGU6IDAsXG5cdFx0b3BhY2l0eTogMCxcblx0fSxcblx0YW5pbWF0ZToge1xuXHRcdHNjYWxlOiAxLFxuXHRcdG9wYWNpdHk6IDEsXG5cdH0sXG5cdGV4aXQ6IHtcblx0XHRzY2FsZTogMCxcblx0XHRvcGFjaXR5OiAwLFxuXHR9LFxuXHR0cmFuc2l0aW9uOiB7XG5cdFx0ZWFzZTogRUFTRSxcblx0XHRkdXJhdGlvbjogMC4yLFxuXHR9LFxufTtcblxuY29uc3QgU1RBR0dFUl9VUCA9IChpbmRleCA9IDApID0+ICh7XG5cdGluaXRpYWw6IHsgb3BhY2l0eTogMCwgeTogMzUgfSxcblx0YW5pbWF0ZTogeyBvcGFjaXR5OiAxLCB5OiAwLCB0cmFuc2l0aW9uOiB7IHR5cGU6ICdzcHJpbmcnLCBkYW1waW5nOiAzMCwgc3RpZmZuZXNzOiA0NTAsIGRlbGF5OiBpbmRleCAqIDAuMDM1IH0gfSxcblx0ZXhpdDogeyBvcGFjaXR5OiAwLCBzY2FsZTogMC4yNSwgdHJhbnNpdGlvbjogeyB0eXBlOiAnc3ByaW5nJywgZGFtcGluZzogMzAsIHN0aWZmbmVzczogNjAwIH0gfSxcbn0pO1xuXG5jb25zdCBTVEFHR0VSX0xFRlQgPSAoaW5kZXggPSAwKSA9PiAoe1xuXHRpbml0aWFsOiB7IG9wYWNpdHk6IDAsIHg6IDEwIH0sXG5cdGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgeDogMCwgdHJhbnNpdGlvbjogeyB0eXBlOiAnc3ByaW5nJywgZGFtcGluZzogMzAsIHN0aWZmbmVzczogMzAwLCBkZWxheTogaW5kZXggKiAwLjAzNSB9IH0sXG5cdGV4aXQ6IHsgb3BhY2l0eTogMCwgeDogMTAsIHRyYW5zaXRpb246IHsgdHlwZTogJ3NwcmluZycsIGRhbXBpbmc6IDMwLCBzdGlmZm5lc3M6IDYwMCB9IH0sXG59KTtcblxuZXhwb3J0IHsgRkFERV9JTiwgRkFERV9JTl9VUCwgVFJBTlNGT1JNX1VQLCBTQ0FMRV9GQURFLCBTVEFHR0VSX1VQLCBTVEFHR0VSX0xFRlQgfTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcHpvbmUgfSBmcm9tICcuL0Ryb3B6b25lJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kYWwgfSBmcm9tICcuL01vZGFsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm94IH0gZnJvbSAnLi9Cb3gnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBMb2FkaW5nV3JhcHBlciB9IGZyb20gJy4vTG9hZGluZ1dyYXBwZXInO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBUUkFOU0ZPUk1fVVAgfSBmcm9tICcuLi8uLi9jb21tb24vYW5pbWF0aW9ucyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IExvYWRpbmdXcmFwcGVyIH0gZnJvbSAnLi4vLi4vY29tbW9uJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjdGlvbk1lbnUoeyBzZWxlY3RlZCwgcmVzZXRTZWxlY3RlZCwgYWN0aW9ucyB9KSB7XG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgdXNlclJvbGUgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXYgey4uLlRSQU5TRk9STV9VUH0gY2xhc3NOYW1lPVwiYmFyIGJhci0tcHJvamVjdFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJhcl9fYnRuIGJ0biBidG4tbGluayBkLWlubGluZS1mbGV4IHRleHQtd2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtyZXNldFNlbGVjdGVkfT5cblx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTE0XCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdDxwIGNsYXNzTmFtZT1cIm1sLTIgbWItMFwiPntzZWxlY3RlZC5sZW5ndGh9IHNlbGVjdGVkPC9wPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gbWwtYXV0b1wiPlxuXHRcdFx0XHRcdFx0PHVsIGNsYXNzTmFtZT1cImJhcl9fbGlzdCBsaXN0IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdFx0e2FjdGlvbnMubWFwKFxuXHRcdFx0XHRcdFx0XHRcdChcblx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGl0bGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoZW1lLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoYXNQZXJtaXNzaW9uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uU2l6ZSA9IDEyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtdXRhdGlvbiA9ICgpID0+IHt9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpc0xvYWRpbmcgPSBmYWxzZSxcblx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRhY3Rpb25JbmRleFxuXHRcdFx0XHRcdFx0XHRcdCkgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGhhc1Blcm1pc3Npb24uaW5jbHVkZXModXNlclJvbGUpKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17YWN0aW9uSW5kZXh9IGNsYXNzTmFtZT1cImxpc3RfX2l0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmFyX19idG4gYnRuIGJ0bi1saW5rIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXttdXRhdGlvbn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS0ke3RoZW1lfSBpY29uLXdyYXBwZXItLWludGVyYWN0aXZlYH0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExvYWRpbmdXcmFwcGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkaW5nPXtpc0xvYWRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkZXJTaXplPXsxMn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzZXM9e3tcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9hZGVyQ2xhc3NlczogYHBvc2l0aW9uLWFic29sdXRlIGQtZmxleCB0ZXh0LSR7dGhlbWV9YCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdyYXBwZXI9XCJzdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9e2BpY29uIGljb24tLSR7aWNvblNpemV9IHRleHQtJHt0aGVtZX1gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2ljb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvTG9hZGluZ1dyYXBwZXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJidG5fX3RleHQgdGV4dC13aGl0ZSBtbC0yXCI+e3RpdGxlfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEFjdGlvbk1lbnUgfSBmcm9tICcuL0FjdGlvbk1lbnUnO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQm94IH0gZnJvbSAnLi4vLi4vY29tbW9uJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgZWRpdEljb24gZnJvbSAnaWNvbnMvZWRpdC5zdmcnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgU3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IEVkaXRhYmxlQm9keSBmcm9tICcuL0VkaXRhYmxlQm9keSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVkaXRhYmxlKHsgaW5wdXRUeXBlLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtib3hPcGVuLCBzZXRCb3hPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCBoZWFkZXIgPSBgRWRpdCAke2lucHV0VHlwZX0uLi5gO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB0b2dnbGVCb3ggPSAoKSA9PiBzZXRCb3hPcGVuKCFib3hPcGVuKTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImVkaXRhYmxlIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcG9zaXRpb24tcmVsYXRpdmVcIj5cblx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiAoXG5cdFx0XHRcdDw+XG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZWRpdGFibGVfX3RvZ2dsZSBidG4gYnRuLWxpbmsgaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0tc2Vjb25kYXJ5IGljb24td3JhcHBlci0taW50ZXJhY3RpdmUgc3RyZXRjaGVkLWxpbmsgbWwtMlwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXt0b2dnbGVCb3h9PlxuXHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEwIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXtlZGl0SWNvbn0gLz5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHQ8Qm94IHsuLi57IGhlYWRlciwgYm94T3BlbiwgdG9nZ2xlQm94IH19PlxuXHRcdFx0XHRcdFx0PEVkaXRhYmxlQm9keSB7Li4ueyBoZWFkZXIsIGlucHV0VHlwZSwgdG9nZ2xlQm94LCAuLi5yZXN0IH19IC8+XG5cdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdDwvPlxuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcbmltcG9ydCB7IFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9hcGknO1xuXG4vKiBFbGVtZW50cyAqL1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFZGl0YWJsZUJvZHkoeyBoZWFkZXIsIGlucHV0VHlwZSwgdG9nZ2xlQm94LCBjb250ZW50LCBwcm9qZWN0SWQsIG11dGF0aW9uLCBtdXRhdGlvbklkIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFt2YWx1ZSwgc2V0VmFsdWVdID0gdXNlU3RhdGUoY29udGVudCk7XG5cblx0LyogUmVmcyAqL1xuXHRjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cdGNvbnN0IGlucHV0UmVmID0gdXNlUmVmKCk7XG5cblx0LyogRWZmZWN0cyAqL1xuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdGlmIChpbnB1dFJlZj8uY3VycmVudCkgaW5wdXRSZWY/LmN1cnJlbnQ/LnNlbGVjdCgpO1xuXHR9LCBbXSk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGVkaXRNdXRhdGlvbiA9IHVzZU11dGF0aW9uKG11dGF0aW9uLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiB7XG5cdFx0XHRxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKTtcblx0XHRcdHRvZ2dsZUJveCgpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxmb3JtXG5cdFx0XHRyZWY9e2Zvcm1SZWZ9XG5cdFx0XHRjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIGZsZXgtZ3Jvdy0xXCJcblx0XHRcdG9uU3VibWl0PXsoZXZlbnQpID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0ZWRpdE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYsIGlkOiBtdXRhdGlvbklkIH0pO1xuXHRcdFx0fX0+XG5cdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9e2lucHV0VHlwZX0+XG5cdFx0XHRcdHtoZWFkZXJ9XG5cdFx0XHQ8L2xhYmVsPlxuXHRcdFx0PGlucHV0XG5cdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuXHRcdFx0XHRpZD17aW5wdXRUeXBlfVxuXHRcdFx0XHRuYW1lPXtpbnB1dFR5cGV9XG5cdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0dmFsdWU9e3ZhbHVlfVxuXHRcdFx0XHRvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0VmFsdWUodmFsdWUpfVxuXHRcdFx0XHRyZWY9e2lucHV0UmVmfVxuXHRcdFx0Lz5cblx0XHRcdDxCdXR0b25cblx0XHRcdFx0dGl0bGU9XCJEb25lXCJcblx0XHRcdFx0ZXh0ZW5zaW9uQ2xhc3Nlcz1cIm10LTQgdy01MCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJcblx0XHRcdFx0aXNMb2FkaW5nPXtlZGl0TXV0YXRpb24uaXNMb2FkaW5nfVxuXHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdC8+XG5cdFx0PC9mb3JtPlxuXHQpO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBFZGl0YWJsZSB9IGZyb20gJy4vRWRpdGFibGUnO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXJBZGQgfSBmcm9tICcuLi91c2VyLWFkZCc7XG5pbXBvcnQgeyBVc2VycyB9IGZyb20gJy4uL3VzZXJzJztcbmltcG9ydCB7IEVkaXRhYmxlIH0gZnJvbSAnLi4vZWRpdGFibGUnO1xuXG4vKiBDb250ZXh0ICovXG5pbXBvcnQgc3RhdGljQ29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0JztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4uLy4uL2NvbW1vbi9hbmltYXRpb25zJztcbmltcG9ydCB7IGVkaXRQcm9qZWN0IH0gZnJvbSAnLi4vLi4vYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdERldGFpbEhlYWRlcih7IHRpdGxlLCBkZXNjcmlwdGlvbiwgdXNlcnMsIGlkLCBhdXRob3IsIGVtYWlsIH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHByb2plY3QgPSB7IGlkLCBhdXRob3IsIGVtYWlsIH07XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyB1c2VyUm9sZSB9ID0gdXNlQ29udGV4dChzdGF0aWNDb250ZXh0KTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBtYi02XCI+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctNlwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17YCR7dXNlclJvbGUgPT09ICdhZG1pbicgJiYgJ2VkaXRhYmxlJ30gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yYH0+XG5cdFx0XHRcdFx0PEVkaXRhYmxlIGlucHV0VHlwZT1cInRpdGxlXCIgcHJvamVjdElkPXtpZH0gY29udGVudD17dGl0bGV9IG11dGF0aW9uPXtlZGl0UHJvamVjdH0gbXV0YXRpb25JZD17aWR9PlxuXHRcdFx0XHRcdFx0PG1vdGlvbi5oMSBrZXk9e3RpdGxlfSB7Li4uRkFERV9JTn0gY2xhc3NOYW1lPVwiaDUgbWItMCB0ZXh0LXdoaXRlXCI+XG5cdFx0XHRcdFx0XHRcdHt0aXRsZSA/IHRpdGxlIDogJ0FkZCBhIG5pY2UgdGl0bGUnfVxuXHRcdFx0XHRcdFx0PC9tb3Rpb24uaDE+XG5cdFx0XHRcdFx0PC9FZGl0YWJsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgJHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiAnZWRpdGFibGUnfSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJgfT5cblx0XHRcdFx0XHQ8RWRpdGFibGVcblx0XHRcdFx0XHRcdGlucHV0VHlwZT1cImRlc2NyaXB0aW9uXCJcblx0XHRcdFx0XHRcdHByb2plY3RJZD17aWR9XG5cdFx0XHRcdFx0XHRjb250ZW50PXtkZXNjcmlwdGlvbn1cblx0XHRcdFx0XHRcdG11dGF0aW9uPXtlZGl0UHJvamVjdH1cblx0XHRcdFx0XHRcdG11dGF0aW9uSWQ9e2lkfT5cblx0XHRcdFx0XHRcdDxtb3Rpb24ucCBrZXk9e2Rlc2NyaXB0aW9ufSB7Li4uRkFERV9JTn0gY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNzAgbWItMFwiPlxuXHRcdFx0XHRcdFx0XHR7ZGVzY3JpcHRpb24gPyBkZXNjcmlwdGlvbiA6ICdBZGQgYSBkZWNyaXB0aW9uIGFib3V0IHRoZSBwcm9qZWN0J31cblx0XHRcdFx0XHRcdDwvbW90aW9uLnA+XG5cdFx0XHRcdFx0PC9FZGl0YWJsZT5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gZC1mbGV4IGFsaWduLWl0ZW1zLWJhc2VsaW5lIG1sLWF1dG9cIj5cblx0XHRcdFx0PFVzZXJzIHsuLi57IHVzZXJzLCBwcm9qZWN0IH19IHNpemU9XCJsZ1wiIC8+XG5cdFx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiA8VXNlckFkZCB7Li4ueyB1c2VycywgcHJvamVjdCB9fSAvPn1cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgRWRpdGFibGUgfSBmcm9tICcuLi9lZGl0YWJsZSc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNoZWNrSWNvbiBmcm9tICdpY29ucy9jaGVjay5zdmcnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOIH0gZnJvbSAnLi4vLi4vY29tbW9uL2FuaW1hdGlvbnMnO1xuaW1wb3J0IHsgZWRpdFByb2plY3RJbWFnZSB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWxJbWFnZSh7IHByb2plY3RJbWFnZSwgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyBpZCwgdGl0bGUsIGltYWdlIH0gPSBwcm9qZWN0SW1hZ2U7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGFydGljbGUgY2xhc3NOYW1lPXtgY2FyZCBjYXJkLS1saW5rIGNhcmQtLXByb2R1Y3QgJHtzZWxlY3RlZC5pbmNsdWRlcyhpZCkgJiYgJ2lzLXNlbGVjdGVkJ31gfT5cblx0XHRcdDxMaW5rIHRvPXtgJHtpZH1gfSB0aXRsZT17dGl0bGV9PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ltYWdlIGJvcmRlciBtLTJcIj5cblx0XHRcdFx0XHQ8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz17aW1hZ2V9IHNyY1NldD17YCR7aW1hZ2V9IDJ4YH0gYWx0PXt0aXRsZX0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L0xpbms+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuXHRcdFx0XHQ8RWRpdGFibGVcblx0XHRcdFx0XHRpbnB1dFR5cGU9XCJ0aXRsZVwiXG5cdFx0XHRcdFx0cHJvamVjdElkPXtwcm9qZWN0SWR9XG5cdFx0XHRcdFx0Y29udGVudD17dGl0bGV9XG5cdFx0XHRcdFx0bXV0YXRpb249e2VkaXRQcm9qZWN0SW1hZ2V9XG5cdFx0XHRcdFx0bXV0YXRpb25JZD17aWR9PlxuXHRcdFx0XHRcdDxtb3Rpb24ucCB7Li4uRkFERV9JTn0gY2xhc3M9XCJtYi0wXCI+XG5cdFx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdFx0PC9tb3Rpb24ucD5cblx0XHRcdFx0PC9FZGl0YWJsZT5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX19zZWxlY3RcIj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC10b2dnbGVcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHVwZGF0ZVNlbGVjdGVkKGlkKTtcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC1pY29uIGljb24gaWNvbi0tOFwiIHNyYz17Y2hlY2tJY29ufSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvYXJ0aWNsZT5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTVEFHR0VSX1VQIH0gZnJvbSAnLi4vLi4vY29tbW9uL2FuaW1hdGlvbnMnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgUHJvamVjdERldGFpbEltYWdlIGZyb20gJy4vUHJvamVjdERldGFpbEltYWdlJztcbmltcG9ydCB7IEFjdGlvbk1lbnUgfSBmcm9tICcuLi9hY3Rpb24tbWVudSc7XG5pbXBvcnQgeyBEcm9wem9uZSB9IGZyb20gJy4uLy4uL2NvbW1vbic7XG5cbi8qIEhvb2tzICovXG5pbXBvcnQgeyB1c2VTZWxlY3Rpb24gfSBmcm9tICcuLi8uLi9ob29rcyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZGVsZXRlUHJvamVjdEltYWdlcywgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3REZXRhaWxJbWFnZXMoeyBwcm9qZWN0SW1hZ2VzLCBwcm9qZWN0SWQgfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IHNlbGVjdGVkLCB1cGRhdGVTZWxlY3RlZCwgcmVzZXRTZWxlY3RlZCB9ID0gdXNlU2VsZWN0aW9uKCk7XG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlUHJvamVjdEltYWdlcywge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSk7XG5cdFx0XHRyZXNldFNlbGVjdGVkKCk7XG5cdFx0fSxcblx0fSk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IGFjdGlvbnMgPSBbXG5cdFx0e1xuXHRcdFx0dGl0bGU6ICdSZW1vdmUnLFxuXHRcdFx0dGhlbWU6ICdkYW5nZXInLFxuXHRcdFx0aGFzUGVybWlzc2lvbjogWydhZG1pbiddLFxuXHRcdFx0aWNvbjogZGVsZXRlSWNvbixcblx0XHRcdGljb25TaXplOiAxMCxcblx0XHRcdG11dGF0aW9uOiAoKSA9PiBkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkLCBwcm9qZWN0SW1hZ2VJZHM6IHNlbGVjdGVkIH0pLFxuXHRcdFx0aXNMb2FkaW5nOiBkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24uaXNMb2FkaW5nLFxuXHRcdH0sXG5cdF07XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Ake3NlbGVjdGVkLmxlbmd0aCA+IDAgJiYgJ2hhcy1zZWxlY3Rpb25zJ31gfT5cblx0XHRcdFx0PERyb3B6b25lIHsuLi57IHByb2plY3RJZCwgcHJvamVjdEltYWdlcyB9fT5cblx0XHRcdFx0XHR7KCkgPT5cblx0XHRcdFx0XHRcdHByb2plY3RJbWFnZXMubWFwKChwcm9qZWN0SW1hZ2UsIHByb2plY3RJbWFnZUluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0XHRcdFx0ey4uLlNUQUdHRVJfVVAocHJvamVjdEltYWdlSW5kZXgpfVxuXHRcdFx0XHRcdFx0XHRcdGtleT17cHJvamVjdEltYWdlLmlkfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtMyBjb2wteHhsLTJcIlxuXHRcdFx0XHRcdFx0XHRcdGxheW91dD5cblx0XHRcdFx0XHRcdFx0XHQ8UHJvamVjdERldGFpbEltYWdlIHsuLi57IHByb2plY3RJbWFnZSwgcHJvamVjdElkLCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfX0gLz5cblx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0KSlcblx0XHRcdFx0XHR9XG5cdFx0XHRcdDwvRHJvcHpvbmU+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHtzZWxlY3RlZC5sZW5ndGggPiAwICYmIDxBY3Rpb25NZW51IHsuLi57IHNlbGVjdGVkLCByZXNldFNlbGVjdGVkLCBhY3Rpb25zIH19IC8+fVxuXHRcdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3REZXRhaWxIZWFkZXIgfSBmcm9tICcuL1Byb2plY3REZXRhaWxIZWFkZXInO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0RGV0YWlsSW1hZ2VzIH0gZnJvbSAnLi9Qcm9qZWN0RGV0YWlsSW1hZ2VzJztcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQcm9qZWN0SW1hZ2UgfSBmcm9tICcuLyc7XG5pbXBvcnQgeyBVc2VycyB9IGZyb20gJy4uL3VzZXJzJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2hlY2tJY29uIGZyb20gJ2ljb25zL2NoZWNrLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoeyBwcm9qZWN0LCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfSkge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgeyB0aXRsZSwgcHJvamVjdEltYWdlcywgdXNlcnMsIGF1dGhvciwgaWQgfSA9IHByb2plY3Q7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PExpbmtcblx0XHRcdHRvPXtgcHJvamVjdHMvJHtpZH1gfVxuXHRcdFx0dGl0bGU9e3RpdGxlfVxuXHRcdFx0Y2xhc3NOYW1lPXtgY2FyZCBjYXJkLS1saW5rIGNhcmQtLXByb2R1Y3QgJHtzZWxlY3RlZC5pbmNsdWRlcyhpZCkgJiYgJ2lzLXNlbGVjdGVkJ31gfT5cblx0XHRcdDxQcm9qZWN0SW1hZ2Ugey4uLnsgcHJvamVjdEltYWdlcyB9fSAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW5cIj5cblx0XHRcdFx0XHQ8cCBjbGFzc05hbWU9XCJtYi0yXCI+e3RpdGxlID8gdGl0bGUgOiAnQWRkIGEgbmljZSB0aXRsZSd9PC9wPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuXHRcdFx0XHRcdFx0PFVzZXJzIHsuLi57IHVzZXJzLCBwcm9qZWN0OiB7IGF1dGhvciB9LCBsYXlvdXQ6ICdtaW5pbWFsJyB9fSAvPlxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjYXJkX19zZWxlY3RcIj5cblx0XHRcdFx0PGRpdlxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC10b2dnbGVcIlxuXHRcdFx0XHRcdG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdHVwZGF0ZVNlbGVjdGVkKGlkKTtcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC1pY29uIGljb24gaWNvbi0tOFwiIHNyYz17Y2hlY2tJY29ufSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvTGluaz5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQcm9qZWN0TW9kYWwgfSBmcm9tICcuLyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZFByb2plY3RJY29uIGZyb20gJ2ljb25zL2FkZF9wcm9qZWN0LnN2Zyc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgYWRkUHJvamVjdCwgUVVFUllfS0VZUywgZWRpdFByb2plY3QsIGZldGNoUHJvamVjdEJ5SWQgfSBmcm9tICcuLi8uLi9hcGknO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTQ0FMRV9GQURFIH0gZnJvbSAnLi4vLi4vY29tbW9uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0QWRkKHsgc2V0TmV3UHJvamVjdElkIH0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW3Byb2plY3RJZCwgc2V0UHJvamVjdElkXSA9IHVzZVN0YXRlKG51bGwpO1xuXHRjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgZGF0YTogcHJvamVjdCB9ID0gdXNlUXVlcnkoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSwgKCkgPT4gZmV0Y2hQcm9qZWN0QnlJZCh7IHByb2plY3RJZCB9KSwge1xuXHRcdGVuYWJsZWQ6ICEhcHJvamVjdElkLFxuXHR9KTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldE5ld1Byb2plY3RJZChwcm9qZWN0SWQpO1xuXHR9LCBbcHJvamVjdElkXSk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGFkZE11dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkUHJvamVjdCwge1xuXHRcdG9uU3VjY2VzczogKHsgaWQgfSkgPT4gc2V0UHJvamVjdElkKGlkKSxcblx0fSk7XG5cblx0Y29uc3QgZWRpdE11dGF0aW9uID0gdXNlTXV0YXRpb24oZWRpdFByb2plY3QsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IGludmFsaWRhdGVQcm9qZWN0KCksXG5cdH0pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHtcblx0XHRzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbik7XG5cblx0XHQvKiBNdXRhdGUgb24gbW9kYWwgb3BlbiAqL1xuXHRcdGlmICghbW9kYWxPcGVuKSBhZGRNdXRhdGlvbi5tdXRhdGUoKTtcblxuXHRcdC8qIFJlc2V0IGlkIG9uIGNsb3NlIG1vZGFsICovXG5cdFx0aWYgKG1vZGFsT3Blbikge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNldFByb2plY3RJZChudWxsKTtcblx0XHRcdH0sIDI1MCk7XG5cblx0XHRcdGludmFsaWRhdGVQcm9qZWN0KCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHVwZGF0ZVByb2plY3QgPSAoZm9ybVJlZikgPT4gZWRpdE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYsIGlkOiBwcm9qZWN0SWQgfSk7XG5cdGNvbnN0IGludmFsaWRhdGVQcm9qZWN0ID0gKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8bW90aW9uLmJ1dHRvblxuXHRcdFx0XHR7Li4uU0NBTEVfRkFERX1cblx0XHRcdFx0a2V5PVwiYWRkLXByb2plY3RcIlxuXHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0taW50ZXJhY3RpdmUgaWNvbi13cmFwcGVyLS1zZWNvbmRhcnkgYnRuIGJ0bi1saW5rIGJ0bi0tcHJvamVjdC1hZGRcIlxuXHRcdFx0XHRzdHlsZT17eyAnLS1zaXplJzogJzc1cHgnIH19XG5cdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfT5cblx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTMwIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXthZGRQcm9qZWN0SWNvbn0gLz5cblx0XHRcdDwvbW90aW9uLmJ1dHRvbj5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHttb2RhbE9wZW4gJiYgPFByb2plY3RNb2RhbCB7Li4ueyBwcm9qZWN0LCB1cGRhdGVQcm9qZWN0LCB0b2dnbGVNb2RhbCB9fSAvPn1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSBcInJlYWN0LXN2Z1wiO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRJbWFnZUljb24gZnJvbSBcImljb25zL2FkZF9pbWFnZS5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdEltYWdlKHsgcHJvamVjdEltYWdlcyB9KSB7XG4gICAgLyogQ29uc3RhbnRzICovXG4gICAgY29uc3QgeyBpbWFnZSwgdGl0bGUgfSA9IHByb2plY3RJbWFnZXNbMF0gfHwge307XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ltYWdlIGJvcmRlciBtLTJcIj5cbiAgICAgICAgICAgIHtpbWFnZSAmJiA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz17aW1hZ2V9IHNyY1NldD17YCR7aW1hZ2V9IDJ4YH0gYWx0PXt0aXRsZX0gLz59XG4gICAgICAgICAgICB7IWltYWdlICYmIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS00OCB0ZXh0LW11dGVkLS00MFwiIHNyYz17YWRkSW1hZ2VJY29ufSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dGFyZWFBdXRvc2l6ZSc7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gJ3JlYWN0LXN2Zyc7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gJ2ljb25zL2Nsb3NlLnN2Zyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IE1vZGFsLCBEcm9wem9uZSwgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuLi8uLi9jb21tb24nO1xuaW1wb3J0IHsgVXNlcnMgfSBmcm9tICcuLi91c2Vycyc7XG5pbXBvcnQgeyBVc2VyQWRkIH0gZnJvbSAnLi4vdXNlci1hZGQnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTVEFHR0VSX1VQIH0gZnJvbSAnLi4vLi4vY29tbW9uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0TW9kYWwoeyBwcm9qZWN0ID0ge30sIHVwZGF0ZVByb2plY3QsIHRvZ2dsZU1vZGFsIH0pIHtcblx0LyogQ29uc3RhbnRzICAqL1xuXHRjb25zdCB7IGlkOiBwcm9qZWN0SWQgPSBudWxsLCB0aXRsZSA9ICcnLCBwcm9qZWN0SW1hZ2VzID0gW10sIHVzZXJzID0gW10gfSA9IHByb2plY3Q7XG5cblx0LyogUmVmcyAqL1xuXHRjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PE1vZGFsIHsuLi57IHRvZ2dsZU1vZGFsIH19IGRvbUVsZW1lbnQ9e2RvY3VtZW50LmJvZHl9PlxuXHRcdFx0PGZvcm1cblx0XHRcdFx0cmVmPXtmb3JtUmVmfVxuXHRcdFx0XHRtZXRob2Q9XCJQT1NUXCJcblx0XHRcdFx0Y2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19mb3JtXCJcblx0XHRcdFx0b25TdWJtaXQ9eyhldmVudCkgPT4ge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0dG9nZ2xlTW9kYWwoKTtcblx0XHRcdFx0fX0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19oZWFkZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBwdC02IHB0LW1kLTEyIHBiLTNcIj5cblx0XHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJwcm9qZWN0VGl0bGVcIj5cblx0XHRcdFx0XHRcdHt0aXRsZX1cblx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC0tY2xlYXIgdGV4dC0teGxcIlxuXHRcdFx0XHRcdFx0aWQ9XCJwcm9qZWN0VGl0bGVcIlxuXHRcdFx0XHRcdFx0bmFtZT1cInRpdGxlXCJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwiVGhlIHByb2plY3QgbmFtZVwiXG5cdFx0XHRcdFx0XHRvbkJsdXI9eygpID0+IHVwZGF0ZVByb2plY3QoZm9ybVJlZil9XG5cdFx0XHRcdFx0XHRhdXRvRm9jdXNcblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19jbG9zZSBidG4gYnRuLWxpbmsgbWwtYXV0b1wiXG5cdFx0XHRcdFx0XHRkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG5cdFx0XHRcdFx0XHRhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuXHRcdFx0XHRcdFx0b25DbGljaz17dG9nZ2xlTW9kYWx9XG5cdFx0XHRcdFx0XHR0YWJJbmRleD1cIi0xXCI+XG5cdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTRcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19ib2R5IHB0LTMgcGItMTJcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTJcIj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cblx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicHJvamVjdERlc2NyaXB0aW9uXCI+XG5cdFx0XHRcdFx0XHRcdFx0e2BXaGF0J3MgdGhpcyBwcm9qZWN0IGFib3V0P2B9XG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdFx0XHRcdDxUZXh0YXJlYUF1dG9zaXplXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC0tdGV4dCBmb3JtLWNvbnRyb2wtLWNsZWFyIG1iLTEwXCJcblx0XHRcdFx0XHRcdFx0XHRpZD1cInByb2plY3REZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0bmFtZT1cImRlc2NyaXB0aW9uXCJcblx0XHRcdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIldoYXQncyB0aGlzIHByb2plY3QgYWJvdXQ/XCJcblx0XHRcdFx0XHRcdFx0XHRvbkJsdXI9eygpID0+IHVwZGF0ZVByb2plY3QoZm9ybVJlZil9XG5cdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gZC1mbGV4IGFsaWduLWl0ZW1zLWJhc2VsaW5lIG1sLWF1dG9cIj5cblx0XHRcdFx0XHRcdFx0PFVzZXJzIHsuLi57IHVzZXJzLCBwcm9qZWN0IH19IHNpemU9XCJsZ1wiIC8+XG5cdFx0XHRcdFx0XHRcdDxVc2VyQWRkIHsuLi57IHVzZXJzLCBwcm9qZWN0IH19IC8+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8RHJvcHpvbmUgey4uLnsgcHJvamVjdElkLCBwcm9qZWN0SW1hZ2VzIH19PlxuXHRcdFx0XHRcdFx0eyh7IHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzTG9hZGluZyB9KSA9PlxuXHRcdFx0XHRcdFx0XHRwcm9qZWN0SW1hZ2VzLm1hcCgoeyBpbWFnZSwgdGl0bGUsIGlkIH0sIGltYWdlSW5kZXgpID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdFx0XHRcdFx0bGF5b3V0XG5cdFx0XHRcdFx0XHRcdFx0XHR7Li4uU1RBR0dFUl9VUChpbWFnZUluZGV4KX1cblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtMyBjb2wteHhsLTJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0a2V5PXtpZH0+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3B6b25lX19jb250YWluZXJcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJkcm9wem9uZV9faW1hZ2UgaW1nLWZsdWlkXCIgc3JjPXtpbWFnZX0gYWx0PXt0aXRsZX0gLz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBkcm9wem9uZV9faW1hZ2UtZGVsZXRlIHAtMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZVByb2plY3RJbWFnZXMoJ2RlbGV0ZScsIHsgcHJvamVjdEltYWdlSWRzOiBbaWRdIH0pO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImRyb3B6b25lX19pbWFnZS1kZWxldGUtaWNvbiBpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1kYW5nZXIgbXgtYXV0b1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzdHlsZT17eyAnLS1zaXplJzogJzUwcHgnIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExvYWRpbmdXcmFwcGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvYWRpbmc9e2lzTG9hZGluZ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9hZGVyU2l6ZT17MjB9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzZXM9e3sgbG9hZGVyQ2xhc3NlczogJ3Bvc2l0aW9uLWFic29sdXRlIGQtZmxleCB0ZXh0LWRhbmdlcicgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxSZWFjdFNWR1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdyYXBwZXI9XCJzdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTQgdGV4dC1kYW5nZXIgbXQtMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtjbG9zZUljb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xvYWRpbmdXcmFwcGVyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHRcdFx0KSlcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQ8L0Ryb3B6b25lPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Zvb3RlciBwYi02IHBiLW1kLTEyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0wIHctMTAwXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctMSBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2J0biBidG4gYnRuLWJsb2NrIGJ0bi1zZWNvbmRhcnkgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG1vdGlvbi5zcGFuIGNsYXNzTmFtZT1cImJ0bi10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5TYXZlPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvbW90aW9uLnNwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvTW9kYWw+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi8nO1xuaW1wb3J0IHsgQWN0aW9uTWVudSB9IGZyb20gJy4uL2FjdGlvbi1tZW51JztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiwgU1RBR0dFUl9VUCB9IGZyb20gJy4uLy4uL2NvbW1vbi9hbmltYXRpb25zJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gJ2ljb25zL2Nsb3NlLnN2Zyc7XG5pbXBvcnQgbGVhdmVJY29uIGZyb20gJ2ljb25zL2xlYXZlLnN2Zyc7XG5pbXBvcnQgYXJjaGl2ZUljb24gZnJvbSAnaWNvbnMvYXJjaGl2ZS5zdmcnO1xuXG4vKiBIb29rcyAqL1xuaW1wb3J0IHsgdXNlU2VsZWN0aW9uIH0gZnJvbSAnLi4vLi4vaG9va3MnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGRlbGV0ZVByb2plY3RzLCBsZWF2ZVByb2plY3RzLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vLi4vY29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXN1bHRzKHsgcHJvamVjdHMsIG5ld1Byb2plY3RJZCwgaXNMb2FkaW5nIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQsIHJlc2V0U2VsZWN0ZWQgfSA9IHVzZVNlbGVjdGlvbigpO1xuXHRjb25zdCB7IGN1cnJlbnRVc2VyIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGxlYXZlUHJvamVjdHNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGxlYXZlUHJvamVjdHMsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuUFJPSkVDVF9CWV9VU0VSKTtcblx0XHRcdHJlc2V0U2VsZWN0ZWQoKTtcblx0XHR9LFxuXHR9KTtcblxuXHRjb25zdCBkZWxldGVQcm9qZWN0c011dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlUHJvamVjdHMsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuUFJPSkVDVF9CWV9VU0VSKTtcblx0XHRcdHJlc2V0U2VsZWN0ZWQoKTtcblx0XHR9LFxuXHR9KTtcblxuXHRjb25zdCBhY3Rpb25zID0gW1xuXHRcdHtcblx0XHRcdHRpdGxlOiAnTGVhdmUnLFxuXHRcdFx0dGhlbWU6ICd3YXJuaW5nJyxcblx0XHRcdGhhc1Blcm1pc3Npb246IFsndXNlcicsICdiYXNpYyddLFxuXHRcdFx0aWNvbjogbGVhdmVJY29uLFxuXHRcdFx0bXV0YXRpb246ICgpID0+IGxlYXZlUHJvamVjdHNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWRzOiBzZWxlY3RlZCwgdXNlcklkOiBjdXJyZW50VXNlci5pZCB9KSxcblx0XHRcdGlzTG9hZGluZzogbGVhdmVQcm9qZWN0c011dGF0aW9uLmlzTG9hZGluZyxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiAnQXJjaGl2ZScsXG5cdFx0XHR0aGVtZTogJ3NlY29uZGFyeScsXG5cdFx0XHRoYXNQZXJtaXNzaW9uOiBbJ2FkbWluJ10sXG5cdFx0XHRpY29uOiBhcmNoaXZlSWNvbixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRpdGxlOiAnUmVtb3ZlJyxcblx0XHRcdHRoZW1lOiAnZGFuZ2VyJyxcblx0XHRcdGhhc1Blcm1pc3Npb246IFsnYWRtaW4nXSxcblx0XHRcdGljb246IGNsb3NlSWNvbixcblx0XHRcdGljb25TaXplOiAxMCxcblx0XHRcdG11dGF0aW9uOiAoKSA9PiBkZWxldGVQcm9qZWN0c011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZHM6IHNlbGVjdGVkIH0pLFxuXHRcdFx0aXNMb2FkaW5nOiBkZWxldGVQcm9qZWN0c011dGF0aW9uLmlzTG9hZGluZyxcblx0XHR9LFxuXHRdO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8aDEgY2xhc3NOYW1lPVwiaDUgdGV4dC13aGl0ZSBtYi02XCI+WW91ciBwcm9qZWN0czwvaDE+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7IWlzTG9hZGluZyAmJiBwcm9qZWN0cy5sZW5ndGggPT09IDAgJiYgKFxuXHRcdFx0XHRcdDxtb3Rpb24ucCB7Li4uRkFERV9JTn0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi0wIHBvc2l0aW9uLWFic29sdXRlXCI+XG5cdFx0XHRcdFx0XHR7YFlvdSBkb24ndCBoYXZlIGFueSBwcm9qZWN0cyB5ZXRgfVxuXHRcdFx0XHRcdDwvbW90aW9uLnA+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgcm93IHJvdy0tZXF1YWxpemVkIGd1dHRlcnMtNSAke3NlbGVjdGVkLmxlbmd0aCA+IDAgJiYgJ2hhcy1zZWxlY3Rpb25zJ31gfT5cblx0XHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0XHR7cHJvamVjdHNcblx0XHRcdFx0XHRcdC5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IG5ld1Byb2plY3RJZClcblx0XHRcdFx0XHRcdC5tYXAoKHByb2plY3QsIHByb2plY3RJbmRleCkgPT4gKFxuXHRcdFx0XHRcdFx0XHQ8bW90aW9uLmRpdlxuXHRcdFx0XHRcdFx0XHRcdHsuLi5TVEFHR0VSX1VQKHByb2plY3RJbmRleCl9XG5cdFx0XHRcdFx0XHRcdFx0a2V5PXtwcm9qZWN0LmlkfVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtMyBjb2wteHhsLTJcIlxuXHRcdFx0XHRcdFx0XHRcdGxheW91dD5cblx0XHRcdFx0XHRcdFx0XHQ8UHJvamVjdCB7Li4ueyBwcm9qZWN0LCBzZWxlY3RlZCwgdXBkYXRlU2VsZWN0ZWQgfX0gLz5cblx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7c2VsZWN0ZWQubGVuZ3RoID4gMCAmJiA8QWN0aW9uTWVudSB7Li4ueyBzZWxlY3RlZCwgcmVzZXRTZWxlY3RlZCwgYWN0aW9ucyB9fSAvPn1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0IH0gZnJvbSBcIi4vUHJvamVjdFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0QWRkIH0gZnJvbSBcIi4vUHJvamVjdEFkZFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0SW1hZ2UgfSBmcm9tIFwiLi9Qcm9qZWN0SW1hZ2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdE1vZGFsIH0gZnJvbSBcIi4vUHJvamVjdE1vZGFsXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RSZXN1bHRzIH0gZnJvbSBcIi4vUHJvamVjdFJlc3VsdHNcIjtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSBcInJlYWN0LXN2Z1wiO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRVc2VySWNvbiBmcm9tIFwiaWNvbnMvYWRkX3VzZXIuc3ZnXCI7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEJveCB9IGZyb20gXCIuLi8uLi9jb21tb25cIjtcbmltcG9ydCBVc2VyQWRkU2VhcmNoIGZyb20gXCIuL1VzZXJBZGRTZWFyY2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckFkZCh7IHVzZXJzLCBwcm9qZWN0IH0pIHtcbiAgICAvKiBTdGF0ZSAqL1xuICAgIGNvbnN0IFtib3hPcGVuLCBzZXRCb3hPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8qIENhbGxiYWNrcyAqL1xuICAgIGNvbnN0IHRvZ2dsZUJveCA9ICgpID0+IHNldEJveE9wZW4oIWJveE9wZW4pO1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtbC0yXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayB1c2VyIHVzZXItLWxnIHVzZXItLWFkZFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0b2dnbGVCb3h9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXJfX2F2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJfX2luaXRpYWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cInVzZXJfX2ljb24gaWNvbiBpY29uLS0xMiBtdC0wXCIgc3JjPXthZGRVc2VySWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8Qm94IGhlYWRlcj1cIlNlbGVjdCB1c2Vyc1wiIGNvbnRlbnQ9XCJDaG9vc2Ugc29tZSB1c2VycyB0byBjb2xsYWJvcmF0ZSB3aXRoLlwiIHsuLi57IGJveE9wZW4sIHRvZ2dsZUJveCB9fT5cbiAgICAgICAgICAgICAgICA8VXNlckFkZFNlYXJjaCB7Li4ueyB1c2VycywgcHJvamVjdCwgdG9nZ2xlQm94IH19IC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBVc2VyQWRkU2VhcmNoUmVzdWx0cyBmcm9tICcuL1VzZXJBZGRTZWFyY2hSZXN1bHRzJztcbmltcG9ydCB7IFVzZXJzIH0gZnJvbSAnLi4vdXNlcnMnO1xuXG4vKiBFbGVtZW50cyAqL1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vLi4vZWxlbWVudHMnO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBpc0VtYWlsLCBmaWx0ZXJVc2VycyB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGFkZFVzZXIsIGZldGNoR29iYWxVc2VycywgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBZGRTZWFyY2goeyB1c2VycywgcHJvamVjdCwgdG9nZ2xlQm94IH0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtmb2N1c2VkVXNlciwgc2V0Rm9jdXNlZFVzZXJdID0gdXNlU3RhdGUoMCk7XG5cblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGRhdGE6IGdsb2JhbFVzZXJzID0gW10sIGlzTG9hZGluZzogZ2xvYmFsVXNlcnNMb2FkaW5nIH0gPSB1c2VRdWVyeShcblx0XHRRVUVSWV9LRVlTLkdMT0JBTF9VU0VSUyxcblx0XHRmZXRjaEdvYmFsVXNlcnNcblx0KTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgZmlsdGVyZWRVc2VycyA9IGZpbHRlclVzZXJzKGdsb2JhbFVzZXJzLCB1c2VycywgcXVlcnkpO1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgcXVlcnlSZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGFkZFVzZXJNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZFVzZXIsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3QuaWRdKTtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuR0xPQkFMX1VTRVJTKTtcblxuXHRcdFx0cXVlcnlSZWYuY3VycmVudC5zZWxlY3QoKTtcblx0XHRcdHNldFF1ZXJ5KCcnKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0UXVlcnkodmFsdWUpO1xuXG5cdGNvbnN0IGhhbmRsZU9uS2V5RG93biA9IChldmVudCkgPT4ge1xuXHRcdGlmIChbJ0VudGVyJywgJ1RhYiddLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGlmIChxdWVyeSAhPT0gJycgJiYgZm9jdXNlZFVzZXIgIT09IG51bGwpIHtcblx0XHRcdFx0Y29uc3QgdXNlciA9IGZvY3VzZWRVc2VyIGluIGZpbHRlcmVkVXNlcnMgPyBmaWx0ZXJlZFVzZXJzW2ZvY3VzZWRVc2VyXSA6IGZvY3VzZWRVc2VyO1xuXG5cdFx0XHRcdGlmIChpc0VtYWlsKHVzZXIuZW1haWwpKSB7XG5cdFx0XHRcdFx0YWRkVXNlck11dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZDogcHJvamVjdC5pZCwgZW1haWw6IHVzZXIuZW1haWwgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoZW1haWwpID0+IHtcblx0XHRpZiAoaXNFbWFpbChlbWFpbCkpIHtcblx0XHRcdGFkZFVzZXJNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQ6IHByb2plY3QuaWQsIGVtYWlsOiBlbWFpbCB9KTtcblx0XHR9XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1ncm93LTFcIj5cblx0XHRcdDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdCB9fSB2YXJpYW50PVwiaW50ZXJhY3RpdmVcIiBzaXplPVwieGxcIiAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuXHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJ1c2VyUXVlcnlcIj5cblx0XHRcdFx0XHRTZWFyY2ggbmFtZSBvciBlbWFpbFxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIGZvcm0tY29udHJvbC0tc2VhcmNoXCJcblx0XHRcdFx0XHRpZD1cInVzZXJRdWVyeVwiXG5cdFx0XHRcdFx0bmFtZT1cInVzZXJRdWVyeVwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTZWFyY2ggbmFtZSBvciBlbWFpbFwiXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdGF1dG9Gb2N1c1xuXHRcdFx0XHRcdHZhbHVlPXtxdWVyeX1cblx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdG9uS2V5RG93bj17aGFuZGxlT25LZXlEb3dufVxuXHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cIm9mZlwiXG5cdFx0XHRcdFx0cmVmPXtxdWVyeVJlZn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PFVzZXJBZGRTZWFyY2hSZXN1bHRzXG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdGZpbHRlcmVkVXNlcnMsXG5cdFx0XHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0XHRcdGhhbmRsZUNsaWNrLFxuXHRcdFx0XHRcdFx0Zm9jdXNlZFVzZXIsXG5cdFx0XHRcdFx0XHRzZXRGb2N1c2VkVXNlcixcblx0XHRcdFx0XHRcdHVzZXJNdXRhdGlvbkxvYWRpbmc6IGFkZFVzZXJNdXRhdGlvbi5pc0xvYWRpbmcsXG5cdFx0XHRcdFx0XHRnbG9iYWxVc2Vyc0xvYWRpbmcsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNFwiPlxuXHRcdFx0XHQ8QnV0dG9uIHRpdGxlPVwiRG9uZVwiIG9uQ2xpY2s9e3RvZ2dsZUJveH0gZXh0ZW5zaW9uQ2xhc3Nlcz1cInctNTAganVzdGlmeS1jb250ZW50LWNlbnRlclwiIC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L2Rpdj5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4uLy4uL2NvbW1vbi9hbmltYXRpb25zJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlclNlbGVjdCB9IGZyb20gJy4uL3VzZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckFkZFNlYXJjaFJlc3VsdHMoe1xuXHRmaWx0ZXJlZFVzZXJzLFxuXHRxdWVyeSxcblx0aGFuZGxlQ2xpY2ssXG5cdGZvY3VzZWRVc2VyLFxuXHRzZXRGb2N1c2VkVXNlcixcblx0dXNlck11dGF0aW9uTG9hZGluZyxcblx0Z2xvYmFsVXNlcnNMb2FkaW5nLFxufSkge1xuXHQvKiBSZW5kZXIgZmlsdGVyZWQgcmVzdWx0cyAqL1xuXHRjb25zdCByZXN1bHRzID0gKCkgPT4ge1xuXHRcdGNvbnN0IG5ld1VzZXIgPSB7IGVtYWlsOiBxdWVyeSwgdXNlcm5hbWU6ICdOZXcgdXNlcicsIHVzZXJDb2xvcjogJyNDQzI1RTgnIH07XG5cblx0XHRpZiAoZmlsdGVyZWRVc2Vycy5sZW5ndGggPiAwKSB7XG5cdFx0XHRyZXR1cm4gZmlsdGVyZWRVc2Vycy5tYXAoKHVzZXIsIHVzZXJJbmRleCkgPT4gKFxuXHRcdFx0XHQ8bW90aW9uLmxpIHsuLi5GQURFX0lOfSBrZXk9e3VzZXIuaWR9IGNsYXNzTmFtZT1cImxpc3RfX2l0ZW0gdnItM1wiPlxuXHRcdFx0XHRcdDxVc2VyU2VsZWN0XG5cdFx0XHRcdFx0XHR7Li4ueyB1c2VyLCB1c2VySW5kZXgsIGhhbmRsZUNsaWNrLCBzZXRGb2N1c2VkVXNlciB9fVxuXHRcdFx0XHRcdFx0aXNGb2N1c2VkPXt1c2VySW5kZXggPT09IGZvY3VzZWRVc2VyICYmIHF1ZXJ5fVxuXHRcdFx0XHRcdFx0aXNMb2FkaW5nPXt1c2VyTXV0YXRpb25Mb2FkaW5nfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvbW90aW9uLmxpPlxuXHRcdFx0KSk7XG5cdFx0fVxuXG5cdFx0aWYgKCFnbG9iYWxVc2Vyc0xvYWRpbmcpIHtcblx0XHRcdHJldHVybiAoXG5cdFx0XHRcdDxtb3Rpb24ubGkgey4uLkZBREVfSU59IGtleT1cIk5ldyB1c2VyXCIgY2xhc3NOYW1lPVwibGlzdF9faXRlbSBpcy1mb2N1c2VkIHZyLTNcIj5cblx0XHRcdFx0XHQ8VXNlclNlbGVjdFxuXHRcdFx0XHRcdFx0ey4uLnsgdXNlcjogbmV3VXNlciwgdXNlckluZGV4OiBuZXdVc2VyLCBoYW5kbGVDbGljaywgc2V0Rm9jdXNlZFVzZXIgfX1cblx0XHRcdFx0XHRcdGlzRm9jdXNlZD17cXVlcnkubGVuZ3RofVxuXHRcdFx0XHRcdFx0aXNMb2FkaW5nPXt1c2VyTXV0YXRpb25Mb2FkaW5nfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvbW90aW9uLmxpPlxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdHtxdWVyeSAhPT0gJycgJiYgKFxuXHRcdFx0XHQ8bW90aW9uLnVsIHsuLi5GQURFX0lOfSBjbGFzc05hbWU9XCJib3hfX2xpc3QgbGlzdFwiPlxuXHRcdFx0XHRcdHtyZXN1bHRzKCl9XG5cdFx0XHRcdDwvbW90aW9uLnVsPlxuXHRcdFx0KX1cblx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0KTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlckFkZCB9IGZyb20gXCIuL1VzZXJBZGRcIjtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBzdGFySWNvbiBmcm9tICdpY29ucy9zdGFyLnN2Zyc7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tICdpY29ucy9kZWxldGUuc3ZnJztcblxuLyogQXBpICovXG5pbXBvcnQgeyBkZWxldGVVc2VyLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vYXBpJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuLi8uLi9jb21tb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyKHsgdXNlciwgcHJvamVjdCwgdmFyaWFudCA9ICdkZWZhdWx0Jywgc2l6ZSA9ICdtZCcgfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJZCwgYXV0aG9yIH0gPSBwcm9qZWN0O1xuXHRjb25zdCB7IGlkOiB1c2VySWQsIGVtYWlsIH0gPSB1c2VyO1xuXG5cdGNvbnN0IGlzQXV0aG9yID0gZW1haWwgPT09IGF1dGhvcjtcblx0Y29uc3QgY2xhc3NlcyA9IFsndXNlcicsIGB1c2VyLS0ke3NpemV9YCwgYHVzZXItLSR7dmFyaWFudH1gLCBpc0F1dGhvciAmJiAndXNlci0tYXV0aG9yJ10uam9pbignICcpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBkZWxldGVVc2VyTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVVc2VyLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKSxcblx0fSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuXHRcdFx0PFVzZXJBdmF0YXIgaXNMb2FkaW5nPXtkZWxldGVVc2VyTXV0YXRpb24uaXNMb2FkaW5nfSB7Li4udXNlcn0+XG5cdFx0XHRcdHt2YXJpYW50ID09PSAnaW50ZXJhY3RpdmUnICYmICFpc0F1dGhvciAmJiAoXG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidXNlcl9fYWN0aW9uIGJ0biBidG4tbGluayBwLTBcIlxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkZWxldGVVc2VyTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkLCB1c2VySWQgfSl9PlxuXHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19hY3Rpb24taWNvbiBpY29uIGljb24tLTE0XCIgc3JjPXtkZWxldGVJY29ufSAvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9Vc2VyQXZhdGFyPlxuXHRcdFx0e2lzQXV0aG9yICYmIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19zdGF0dXMgdXNlcl9fc3RhdHVzLS1sZWFkZXJcIj5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cInVzZXJfX3N0YXR1cy1pY29uIGljb24gdGV4dC10ZXJ0aWFyeSBtdC0wXCIgc3JjPXtzdGFySWNvbn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgY29uc3QgVXNlckF2YXRhciA9ICh7IHVzZXJuYW1lLCB1c2VyQ29sb3IsIGlzTG9hZGluZywgY2hpbGRyZW4gfSkgPT4ge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgdXNlckluaXRpYWxzID0gdXNlcm5hbWUuc3BsaXQoJyAnKS5tYXAoKHdvcmQpID0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19hdmF0YXJcIiBzdHlsZT17eyAnLS10aGVtZSc6IHVzZXJDb2xvciB9fT5cblx0XHRcdDxMb2FkaW5nV3JhcHBlciBsb2FkaW5nPXtpc0xvYWRpbmd9IGxvYWRlclNpemU9ezE2fT5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidXNlcl9faW5pdGlhbHNcIj57dXNlckluaXRpYWxzfTwvc3Bhbj5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9Mb2FkaW5nV3JhcHBlcj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBVc2VySW5mbyA9ICh7IHVzZXJuYW1lLCBlbWFpbCB9KSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1sLTNcIj5cblx0XHQ8cCBjbGFzc05hbWU9XCJtYi0wXCI+e3VzZXJuYW1lfTwvcD5cblx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS02MCB0ZXh0LS14c1wiPntlbWFpbH08L3A+XG5cdDwvZGl2PlxuKTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRVc2VySWNvbiBmcm9tICdpY29ucy9hZGRfdXNlci5zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VyQXZhdGFyLCBVc2VySW5mbyB9IGZyb20gJy4vVXNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJTZWxlY3QoeyB1c2VyLCB1c2VySW5kZXgsIGhhbmRsZUNsaWNrLCBpc0ZvY3VzZWQsIHNldEZvY3VzZWRVc2VyLCBpc0xvYWRpbmcgfSkge1xuXHQvKiBFZmZlY3RzICovXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aXNGb2N1c2VkICYmIHNldEZvY3VzZWRVc2VyKHVzZXJJbmRleCk7XG5cdH0sIFtpc0ZvY3VzZWRdKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHJldHVybiAoKSA9PiBzZXRGb2N1c2VkVXNlcigwKTtcblx0fSwgW10pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBoYW5kbGVTdGF0dXMgPSAoYWN0aW9uKSA9PiB7XG5cdFx0c2V0Rm9jdXNlZFVzZXIoYWN0aW9uID09PSAnZW50ZXInID8gdXNlckluZGV4IDogMCk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0Y2xhc3NOYW1lPXtgdXNlciB1c2VyLS1zZWxlY3QgJHtpc0ZvY3VzZWQgJiYgJ2lzLWZvY3VzZWQnfSB1c2VyLS14bGB9XG5cdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayh1c2VyLmVtYWlsKX1cblx0XHRcdG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlU3RhdHVzKCdlbnRlcicpfVxuXHRcdFx0b25Nb3VzZUxlYXZlPXsoKSA9PiBoYW5kbGVTdGF0dXMoJ2xlYXZlJyl9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxVc2VyQXZhdGFyIGlzTG9hZGluZz17aXNMb2FkaW5nICYmIGlzRm9jdXNlZH0gey4uLnVzZXJ9IC8+XG5cdFx0XHRcdDxVc2VySW5mbyB7Li4udXNlcn0gLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19hZGQgdGV4dC1zZWNvbmRhcnkgcm91bmRlZC1jaXJjbGUgbWwtYXV0b1wiPlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9fYWRkLWljb24gaWNvbiBpY29uLS0xMiB0ZXh0LXNlY29uZGFyeVwiIHNyYz17YWRkVXNlckljb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9idXR0b24+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU0NBTEVfRkFERSB9IGZyb20gXCIuLi8uLi9jb21tb24vYW5pbWF0aW9uc1wiO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJzKHsgdXNlcnMsIGxheW91dCA9IFwiZnVsbFwiLCAuLi5yZXN0IH0pIHtcbiAgICBjb25zdCBzbGljZUFtb3VudCA9IGxheW91dCA9PT0gXCJtaW5pbWFsXCIgPyA3IDogSW5maW5pdHk7XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgZ3V0dGVycy0xXCI+XG4gICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgIHt1c2Vycy5zbGljZSgwLCBzbGljZUFtb3VudCkubWFwKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBsYXlvdXQgey4uLlNDQUxFX0ZBREV9IGNsYXNzTmFtZT1cImNvbC1hdXRvXCIga2V5PXt1c2VyLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlciB7Li4ueyB1c2VyLCAuLi5yZXN0IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAge2xheW91dCA9PT0gXCJtaW5pbWFsXCIgJiYgdXNlcnMubGVuZ3RoID4gNyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGxheW91dCB7Li4uU0NBTEVfRkFERX0gY2xhc3NOYW1lPVwiY29sLWF1dG9cIiBrZXk9XCJtb3JlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LS14cyB0ZXh0LW11dGVkLS03MCBtbC0xXCI+KyB7dXNlcnMubGVuZ3RoIC0gc2xpY2VBbW91bnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VycyB9IGZyb20gXCIuL1VzZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXIgfSBmcm9tIFwiLi9Vc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJTZWxlY3QgfSBmcm9tIFwiLi9Vc2VyU2VsZWN0XCI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTdGF0aWNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuZXhwb3J0IGRlZmF1bHQgU3RhdGljQ29udGV4dDtcbiIsIi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExvYWRpbmdXcmFwcGVyIH0gZnJvbSAnLi4vY29tbW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uKHtcblx0dGl0bGUsXG5cdHR5cGUgPSAnYnV0dG9uJyxcblx0dGhlbWUgPSAnc2Vjb25kYXJ5Jyxcblx0c2l6ZSA9ICdzbScsXG5cdGV4dGVuc2lvbkNsYXNzZXMgPSAnJyxcblx0b25DbGljayA9ICgpID0+IHt9LFxuXHRpc0xvYWRpbmcgPSBmYWxzZSxcbn0pIHtcblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5idXR0b25cblx0XHRcdGxheW91dFxuXHRcdFx0Y2xhc3NOYW1lPXtgYnRuIGJ0bi0ke3NpemV9IGJ0bi0ke3RoZW1lfSAke2V4dGVuc2lvbkNsYXNzZXN9IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJgfVxuXHRcdFx0ey4uLnsgdHlwZSwgb25DbGljayB9fVxuXHRcdFx0c3R5bGU9e3sgaGVpZ2h0OiAzNSB9fT5cblx0XHRcdDxMb2FkaW5nV3JhcHBlclxuXHRcdFx0XHRsb2FkaW5nPXtpc0xvYWRpbmd9XG5cdFx0XHRcdGxvYWRlclNpemU9ezE2fVxuXHRcdFx0XHRjbGFzc2VzPXt7IGxvYWRlckNsYXNzZXM6ICdwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXggdGV4dC1zZWNvbmRhcnknIH19PlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJidG5fX3RleHRcIj57dGl0bGV9PC9zcGFuPlxuXHRcdFx0PC9Mb2FkaW5nV3JhcHBlcj5cblx0XHQ8L21vdGlvbi5idXR0b24+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIEJ1dHRvbiB9IGZyb20gJy4vQnV0dG9uJztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbHRlclVzZXJzKGdsb2JhbFVzZXJzLCB1c2VycywgcXVlcnkpIHtcbiAgICBjb25zdCBsb3dlclF1ZXJ5ID0gcXVlcnkudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBleGlzdGluZ1VzZXJzQnlFbWFpbCA9IHVzZXJzLm1hcCgoeyBlbWFpbCB9KSA9PiBlbWFpbCk7XG5cbiAgICBsZXQgZmlsdGVyZWRVc2VycyA9IGdsb2JhbFVzZXJzXG4gICAgICAgIC5maWx0ZXIoKHsgZW1haWwgfSkgPT4ge1xuICAgICAgICAgICAgLyogT25seSByZXR1cm4gdXNlcnMgdGhhdCBhcmUgbm90IHBhcnQgb2YgdGhlIHByb2plY3QgKi9cbiAgICAgICAgICAgIHJldHVybiAhZXhpc3RpbmdVc2Vyc0J5RW1haWwuaW5jbHVkZXMoZW1haWwpO1xuICAgICAgICB9KVxuICAgICAgICAuZmlsdGVyKCh7IGVtYWlsLCB1c2VybmFtZSB9KSA9PiB7XG4gICAgICAgICAgICAvKiBPbmx5IHJldHVybiB1c2VycyB0aGF0IG1hdGNoIHRoZSBxdWVyeSBvbiBlbWFpbCB8fCB1c2VybmFtZSAqL1xuICAgICAgICAgICAgcmV0dXJuIGVtYWlsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJRdWVyeSkgfHwgdXNlcm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclF1ZXJ5KTtcbiAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gZmlsdGVyZWRVc2Vycztcbn1cbiIsImNvbnN0IFVTRVJfUk9MRVMgPSB7XG5cdFJPTEVfQURNSU46ICdST0xFX0FETUlOJyxcblx0Uk9MRV9VU0VSOiAnUk9MRV9VU0VSJyxcblx0Uk9MRV9VU0VSX0JBU0lDOiAnUk9MRV9VU0VSX0JBU0lDJyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFJvbGUoeyByb2xlcyB9KSB7XG5cdGlmIChyb2xlcy5pbmNsdWRlcyhVU0VSX1JPTEVTLlJPTEVfQURNSU4pKSByZXR1cm4gJ2FkbWluJztcblx0aWYgKHJvbGVzLmluY2x1ZGVzKFVTRVJfUk9MRVMuUk9MRV9VU0VSKSkgcmV0dXJuICd1c2VyJztcblx0aWYgKHJvbGVzLmluY2x1ZGVzKFVTRVJfUk9MRVMuUk9MRV9VU0VSX0JBU0lDKSkgcmV0dXJuICdiYXNpYyc7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGlzRW1haWwgfSBmcm9tICcuL2lzRW1haWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaWx0ZXJVc2VycyB9IGZyb20gJy4vZmlsdGVyVXNlcnMnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB1cGRhdGVQYWdlVGl0bGUgfSBmcm9tICcuL3VwZGF0ZVBhZ2VUaXRsZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIGdldFJvbGUgfSBmcm9tICcuL2dldFJvbGUnO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNFbWFpbChlbWFpbCkge1xuICAgIHJldHVybiAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLy50ZXN0KGVtYWlsKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwZGF0ZVBhZ2VUaXRsZSh0aXRsZSkge1xuXHRkb2N1bWVudC50aXRsZSA9IGBQYXJhbGxlbCBEYXNoYm9hcmQgfCAke3RpdGxlfWA7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIHVzZVNlbGVjdGlvbiB9IGZyb20gJy4vdXNlU2VsZWN0aW9uJztcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB1c2VTZWxlY3Rpb24oKSB7XG5cdGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGUoW10pO1xuXG5cdGNvbnN0IHVwZGF0ZVNlbGVjdGVkID0gKGlkKSA9PiB7XG5cdFx0c2V0U2VsZWN0ZWQoKHNlbGVjdGVkKSA9PiB7XG5cdFx0XHRpZiAoc2VsZWN0ZWQuaW5jbHVkZXMoaWQpKSB7XG5cdFx0XHRcdHJldHVybiBzZWxlY3RlZC5maWx0ZXIoKHNlbGVjdGVkSWQpID0+IHNlbGVjdGVkSWQgIT09IGlkKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFsuLi5zZWxlY3RlZCwgaWRdO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlc2V0U2VsZWN0ZWQgPSAoKSA9PiBzZXRTZWxlY3RlZChbXSk7XG5cblx0cmV0dXJuIHsgc2VsZWN0ZWQsIHVwZGF0ZVNlbGVjdGVkLCByZXNldFNlbGVjdGVkIH07XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3MnO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOIH0gZnJvbSAnLi4vY29tbW9uL2FuaW1hdGlvbnMnO1xuXG4vKiBBcGkgKi9cbmltcG9ydCB7IGZldGNoUHJvamVjdEJ5SWQsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi9hcGknO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyB1cGRhdGVQYWdlVGl0bGUgfSBmcm9tICcuLi9oZWxwZXJzJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUHJvamVjdERldGFpbEhlYWRlciwgUHJvamVjdERldGFpbEltYWdlcyB9IGZyb20gJy4uL2NvbXBvbmVudHMvcHJvamVjdC1kZXRhaWwnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0RGV0YWlsKHsgY3VycmVudFVzZXJMb2FkaW5nIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgeyBpZDogcHJvamVjdElkIH0gPSB1c2VQYXJhbXMoKTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgaXNMb2FkaW5nOiBwcm9qZWN0TG9hZGluZywgZGF0YSA9IHt9IH0gPSB1c2VRdWVyeShcblx0XHRbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwYXJzZUludChwcm9qZWN0SWQpXSxcblx0XHQoKSA9PiBmZXRjaFByb2plY3RCeUlkKHsgcHJvamVjdElkIH0pLFxuXHRcdHtcblx0XHRcdG9uU3VjY2VzczogKHsgdGl0bGUgfSkgPT4gdXBkYXRlUGFnZVRpdGxlKHRpdGxlKSxcblx0XHR9XG5cdCk7XG5cblx0LyogQ29uc3RhbnRzICAqL1xuXHRjb25zdCB7IHRpdGxlLCBkZXNjcmlwdGlvbiwgdXNlcnMsIGlkLCBhdXRob3IsIGVtYWlsLCBwcm9qZWN0SW1hZ2VzIH0gPSBkYXRhO1xuXHRjb25zdCBpc0xvYWRpbmcgPSBjdXJyZW50VXNlckxvYWRpbmcgfHwgcHJvamVjdExvYWRpbmc7XG5cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e2lzTG9hZGluZyA/IChcblx0XHRcdFx0XHQ8bW90aW9uLmRpdiB7Li4uRkFERV9JTn0+XG5cdFx0XHRcdFx0XHQ8TGluZWFyUHJvZ3Jlc3MgY29sb3I9XCJzZWNvbmRhcnlcIiAvPlxuXHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8PlxuXHRcdFx0XHRcdFx0PFByb2plY3REZXRhaWxIZWFkZXIgey4uLnsgdGl0bGUsIGRlc2NyaXB0aW9uLCB1c2VycywgaWQsIGF1dGhvciwgZW1haWwgfX0gLz5cblx0XHRcdFx0XHRcdDxQcm9qZWN0RGV0YWlsSW1hZ2VzIHsuLi57IHByb2plY3RJbWFnZXMsIHByb2plY3RJZDogaWQgfX0gLz5cblx0XHRcdFx0XHQ8Lz5cblx0XHRcdFx0KX1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5lYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzcyc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFByb2plY3RSZXN1bHRzLCBQcm9qZWN0QWRkIH0gZnJvbSAnLi4vY29tcG9uZW50cy9wcm9qZWN0LW92ZXJ2aWV3JztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gJy4uL2NvbW1vbi9hbmltYXRpb25zJztcblxuLyogQ29udGV4dCAqL1xuaW1wb3J0IFN0YXRpY0NvbnRleHQgZnJvbSAnLi4vY29udGV4dCc7XG5cbi8qIEFwaSAqL1xuaW1wb3J0IHsgZmV0Y2hQcm9qZWN0c0J5VXNlciwgUVVFUllfS0VZUyB9IGZyb20gJy4uL2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RPdmVydmlldyh7IGN1cnJlbnRVc2VyTG9hZGluZyB9KSB7XG5cdC8qIFN0YXRlICovXG5cdGNvbnN0IFtuZXdQcm9qZWN0SWQsIHNldE5ld1Byb2plY3RJZF0gPSB1c2VTdGF0ZSgpO1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgY3VycmVudFVzZXIsIHVzZXJSb2xlIH0gPSB1c2VDb250ZXh0KFN0YXRpY0NvbnRleHQpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB1c2VySWQgPSBjdXJyZW50VXNlcj8uaWQgPyBjdXJyZW50VXNlci5pZCA6IGF0b2IobG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCAnJykpO1xuXG5cdC8qIFF1ZXJpZXMgKi9cblx0Y29uc3QgeyBpc0xvYWRpbmc6IHByb2plY3RzTG9hZGluZywgZGF0YSA9IHt9IH0gPSB1c2VRdWVyeShcblx0XHRRVUVSWV9LRVlTLlBST0pFQ1RfQllfVVNFUixcblx0XHQoKSA9PiBmZXRjaFByb2plY3RzQnlVc2VyKHsgdXNlcklkIH0pLFxuXHRcdHtcblx0XHRcdGVuYWJsZWQ6ICEhdXNlcklkLFxuXHRcdH1cblx0KTtcblxuXHQvKiBDb25zdGFudHMgICovXG5cdGNvbnN0IHsgcHJvamVjdHMgPSBbXSB9ID0gZGF0YTtcblx0Y29uc3QgaXNMb2FkaW5nID0gY3VycmVudFVzZXJMb2FkaW5nIHx8IHByb2plY3RzTG9hZGluZztcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8PlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e2lzTG9hZGluZyAmJiAoXG5cdFx0XHRcdFx0PG1vdGlvbi5kaXYgey4uLkZBREVfSU59PlxuXHRcdFx0XHRcdFx0PExpbmVhclByb2dyZXNzIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cblx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdHt1c2VyUm9sZSA9PT0gJ2FkbWluJyAmJiA8UHJvamVjdEFkZCB7Li4ueyBzZXROZXdQcm9qZWN0SWQgfX0gLz59XG5cdFx0XHQ8UHJvamVjdFJlc3VsdHMgey4uLnsgcHJvamVjdHMsIG5ld1Byb2plY3RJZCwgaXNMb2FkaW5nIH19IC8+XG5cdFx0PC8+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RPdmVydmlldyB9IGZyb20gJy4vUHJvamVjdE92ZXJ2aWV3JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdERldGFpbCB9IGZyb20gJy4vUHJvamVjdERldGFpbCc7XG4iLCIvKiBQYWdlcyAqL1xuaW1wb3J0IHsgUHJvamVjdE92ZXJ2aWV3LCBQcm9qZWN0RGV0YWlsIH0gZnJvbSAnLi9wYWdlcyc7XG5cbmNvbnN0IHJvdXRlcyA9IFtcblx0e1xuXHRcdG5hbWU6ICdwcm9qZWN0LW92ZXJ2aWV3Jyxcblx0XHRwYXRoOiAnL3Byb2plY3RzJyxcblx0XHRwYWdlOiBQcm9qZWN0T3ZlcnZpZXcsXG5cdH0sXG5cdHtcblx0XHRuYW1lOiAncHJvamVjdC1kZXRhaWwnLFxuXHRcdHBhdGg6ICcvcHJvamVjdHMvOmlkJyxcblx0XHRwYWdlOiBQcm9qZWN0RGV0YWlsLFxuXHR9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAncGFyc2xleWpzJztcblxuY29uc3QgcGFyc2xleUNvbmZpZyA9IHtcbiAgICBlcnJvckNsYXNzOiAnaXMtZXJyb3InLFxuICAgIGV4Y2x1ZGVkOiAnaW5wdXRbdHlwZT1idXR0b25dLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9cmVzZXRdLCBpbnB1dFt0eXBlPWhpZGRlbl0sIFtkaXNhYmxlZF0sIDpoaWRkZW4nLFxuICAgIHN1Y2Nlc3NDbGFzczogJ2lzLXN1Y2Nlc3MnXG59O1xuXG4kKCdmb3JtOm5vdChbbm92YWxpZGF0ZV0pJykucGFyc2xleShwYXJzbGV5Q29uZmlnKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=