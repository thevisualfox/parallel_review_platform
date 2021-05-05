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
/* harmony import */ var _react_project_overview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./react/project-overview */ "./assets/app/js/react/project-overview/index.js");
// CSS
 // Pollyfils

 // Core


 // Plugins

 // React



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
  return /*#__PURE__*/Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], null, boxOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
    className: "box-overlay"
  }, _animations__WEBPACK_IMPORTED_MODULE_4__["FADE_IN"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
    key: "box-content",
    className: "box__content border p-5"
  }, _animations__WEBPACK_IMPORTED_MODULE_4__["FADE_IN_UP"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box__header d-flex align-items-baseline"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text--lg mb-1"
  }, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
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
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var icons_add_image_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! icons/add_image.svg */ "./assets/app/img/icons/add_image.svg");
/* harmony import */ var icons_add_image_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(icons_add_image_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ */ "./assets/app/js/react/common/index.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _project_overview_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../project-overview/api */ "./assets/app/js/react/project-overview/api.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Packages */





/* Assets */



/* Components */


/* Animations */


/* Api calls */


function Dropzone(_ref) {
  var projectId = _ref.projectId,
      projectImages = _ref.projectImages;

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


  var addProjectImagesMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_project_overview_api__WEBPACK_IMPORTED_MODULE_9__["addProjectImages"], {
    onSuccess: function onSuccess() {
      return queryClient.invalidateQueries([_project_overview_api__WEBPACK_IMPORTED_MODULE_9__["QUERY_KEYS"].PROJECT_BY_ID, projectId]);
    }
  });
  var deleteProjectImagesMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_project_overview_api__WEBPACK_IMPORTED_MODULE_9__["deleteProjectImages"], {
    onSuccess: function onSuccess() {
      return queryClient.invalidateQueries([_project_overview_api__WEBPACK_IMPORTED_MODULE_9__["QUERY_KEYS"].PROJECT_BY_ID, projectId]);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["AnimatePresence"], {
    initial: false
  }, projectImages.map(function (_ref2, imageIndex) {
    var image = _ref2.image,
        title = _ref2.title,
        id = _ref2.id;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, _extends({
      layout: true
    }, Object(_animations__WEBPACK_IMPORTED_MODULE_8__["STAGGER_UP"])(imageIndex), {
      className: COLUMN_LAYOUT,
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
          id: id
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "dropzone__image-delete-icon icon-wrapper icon-wrapper--danger mx-auto",
      style: {
        '--size': '50px'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_7__["LoadingWrapper"], {
      loading: deleteProjectImagesMutation.isLoading,
      loaderSize: 20,
      classes: {
        loaderClasses: 'position-absolute d-flex text-danger'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
      wrapper: "svg",
      className: "icon icon--14 text-danger mt-0",
      src: icons_close_svg__WEBPACK_IMPORTED_MODULE_5___default.a
    }))))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, _extends({
    key: "add-image"
  }, Object(_animations__WEBPACK_IMPORTED_MODULE_8__["STAGGER_UP"])(projectImages.length), {
    className: COLUMN_LAYOUT,
    layout: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropzoneInner, {
    addImageLoading: addProjectImagesMutation.isLoading,
    updateProjectImages: updateProjectImages,
    isParentDragActive: isDragActive
  })))));
}
/* Inner dropzone */

var DropzoneInner = function DropzoneInner(_ref3) {
  var addImageLoading = _ref3.addImageLoading,
      updateProjectImages = _ref3.updateProjectImages,
      isParentDragActive = _ref3.isParentDragActive;

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_7__["LoadingWrapper"], {
    loading: addImageLoading,
    classes: {
      loaderClasses: 'position-absolute d-flex text-secondary'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn-text d-flex flex-column align-items-center text-white text-muted--40"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--48",
    src: icons_add_image_svg__WEBPACK_IMPORTED_MODULE_6___default.a
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({
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
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers */ "./assets/app/js/react/helpers/index.js");
/* harmony import */ var _project_overview_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../project-overview/api */ "./assets/app/js/react/project-overview/api.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */


/* Components */



/* Helpers */


/* Api calls */


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


  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(_project_overview_api__WEBPACK_IMPORTED_MODULE_5__["QUERY_KEYS"].GLOBAL_USERS, _project_overview_api__WEBPACK_IMPORTED_MODULE_5__["fetchGobalUsers"]),
      _useQuery$data = _useQuery.data,
      globalUsers = _useQuery$data === void 0 ? [] : _useQuery$data,
      globalUsersLoading = _useQuery.isLoading;
  /* Constants */


  var filteredUsers = Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["filterUsers"])(globalUsers, users, query);
  /* Refs */

  var queryRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* Hooks */

  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useQueryClient"])();
  /* Mutations */

  var addUserMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_1__["useMutation"])(_project_overview_api__WEBPACK_IMPORTED_MODULE_5__["addUser"], {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries([_project_overview_api__WEBPACK_IMPORTED_MODULE_5__["QUERY_KEYS"].PROJECT_BY_ID, project.id]);
      queryClient.invalidateQueries(_project_overview_api__WEBPACK_IMPORTED_MODULE_5__["QUERY_KEYS"].GLOBAL_USERS);
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

        if (Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["isEmail"])(user.email)) {
          addUserMutation.mutate({
            projectId: project.id,
            email: user.email
          });
        }
      }
    }
  };

  var handleClick = function handleClick(email) {
    if (Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["isEmail"])(email)) {
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
    className: "d-flex align-items-center mt-4"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#",
    className: "btn btn-link text--sm text-white text-decoration-underline text-muted--60",
    title: "Remove all users"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn__text"
  }, "Remove all users")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "btn btn-sm btn-secondary ml-auto px-8",
    onClick: toggleBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn__text"
  }, "Done"))));
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
/* harmony import */ var _project_overview_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../project-overview/api */ "./assets/app/js/react/project-overview/api.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common */ "./assets/app/js/react/common/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */



/* Assets */



/* Api calls */


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

  var deleteUserMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_project_overview_api__WEBPACK_IMPORTED_MODULE_5__["deleteUser"], {
    onSuccess: function onSuccess() {
      return queryClient.invalidateQueries([_project_overview_api__WEBPACK_IMPORTED_MODULE_5__["QUERY_KEYS"].PROJECT_BY_ID, projectId]);
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

/***/ "./assets/app/js/react/helpers/index.js":
/*!**********************************************!*\
  !*** ./assets/app/js/react/helpers/index.js ***!
  \**********************************************/
/*! exports provided: isEmail, filterUsers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isEmail */ "./assets/app/js/react/helpers/isEmail.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return _isEmail__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _filterUsers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filterUsers */ "./assets/app/js/react/helpers/filterUsers.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "filterUsers", function() { return _filterUsers__WEBPACK_IMPORTED_MODULE_1__["default"]; });




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

/***/ "./assets/app/js/react/project-overview/api.js":
/*!*****************************************************!*\
  !*** ./assets/app/js/react/project-overview/api.js ***!
  \*****************************************************/
/*! exports provided: QUERY_KEYS, fetchProjectsByUser, fetchProjectById, addProject, deleteProjects, leaveProjects, editProject, addProjectImages, deleteProjectImages, fetchGobalUsers, addUser, deleteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_KEYS", function() { return QUERY_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProjectsByUser", function() { return fetchProjectsByUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProjectById", function() { return fetchProjectById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProject", function() { return addProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProjects", function() { return deleteProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaveProjects", function() { return leaveProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editProject", function() { return editProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProjectImages", function() { return addProjectImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProjectImages", function() { return deleteProjectImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGobalUsers", function() { return fetchGobalUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUser", function() { return addUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var QUERY_KEYS = {
  PROJECT_BY_USER: 'project_by_user',
  PROJECT_BY_ID: 'project_by_id',
  GLOBAL_USERS: 'global_users'
};
/* Project related calls */

var fetchProjectsByUser = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var userId, url, result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userId = _ref.userId;
            url = '/api/projects/get';

            if (userId) {
              url = "".concat(url, "/").concat(userId);
            }

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

  return function fetchProjectsByUser(_x) {
    return _ref2.apply(this, arguments);
  };
}();
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
var editProject = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref10) {
    var formRef, projectId, params, result;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            formRef = _ref10.formRef, projectId = _ref10.projectId;
            params = new FormData(formRef.current);
            _context6.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/projects/edit/".concat(projectId), params);

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
/* Project image related calls */

var addProjectImages = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(_ref12) {
    var projectId, images, params, result;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            projectId = _ref12.projectId, images = _ref12.images;
            params = new FormData();
            images.forEach(function (image) {
              return params.append('images[]', image);
            });
            _context7.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/images/add/".concat(projectId), params);

          case 5:
            result = _context7.sent;
            return _context7.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 7:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function addProjectImages(_x6) {
    return _ref13.apply(this, arguments);
  };
}();
var deleteProjectImages = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(_ref14) {
    var projectId, id, result;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            projectId = _ref14.projectId, id = _ref14.id;
            _context8.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/images/delete/".concat(projectId), {
              id: id
            });

          case 3:
            result = _context8.sent;
            return _context8.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 5:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function deleteProjectImages(_x7) {
    return _ref15.apply(this, arguments);
  };
}();
/* User related calls */

var fetchGobalUsers = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
    var result;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _context9.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('/api/users/get');

          case 2:
            result = _context9.sent;
            return _context9.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 4:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function fetchGobalUsers() {
    return _ref16.apply(this, arguments);
  };
}();
var addUser = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(_ref17) {
    var projectId, email, result;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            projectId = _ref17.projectId, email = _ref17.email;
            _context10.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/users/add/".concat(projectId), {
              email: email
            });

          case 3:
            result = _context10.sent;
            return _context10.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 5:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function addUser(_x8) {
    return _ref18.apply(this, arguments);
  };
}();
var deleteUser = /*#__PURE__*/function () {
  var _ref20 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(_ref19) {
    var projectId, userId, result;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            projectId = _ref19.projectId, userId = _ref19.userId;
            _context11.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/users/delete/".concat(projectId), {
              userId: userId
            });

          case 3:
            result = _context11.sent;
            return _context11.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 5:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function deleteUser(_x9) {
    return _ref20.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./assets/app/js/react/project-overview/components/ProjectOverview.jsx":
/*!*****************************************************************************!*\
  !*** ./assets/app/js/react/project-overview/components/ProjectOverview.jsx ***!
  \*****************************************************************************/
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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ "./assets/app/js/react/project-overview/components/project/index.js");
/* harmony import */ var _project_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-add */ "./assets/app/js/react/project-overview/components/project-add/index.js");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../context */ "./assets/app/js/react/project-overview/context.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api */ "./assets/app/js/react/project-overview/api.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../constants */ "./assets/app/js/react/project-overview/constants.js");
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


/* Api calls */


/* Global constants */


function ProjectOverview() {
  var _currentUser$roles;

  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      currentUser = _useState2[0],
      setCurrentUser = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      newProjectId = _useState4[0],
      setNewProjectId = _useState4[1];
  /* Constants */


  var userId = atob(location.search.replace('?', ''));
  var isAdmin = currentUser === null || currentUser === void 0 ? void 0 : (_currentUser$roles = currentUser.roles) === null || _currentUser$roles === void 0 ? void 0 : _currentUser$roles.includes(_constants__WEBPACK_IMPORTED_MODULE_9__["USER_ROLES"].ROLE_ADMIN);
  /* Hooks */

  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_api__WEBPACK_IMPORTED_MODULE_8__["QUERY_KEYS"].PROJECT_BY_USER, function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_8__["fetchProjectsByUser"])({
      userId: userId
    });
  }, {
    onSuccess: function onSuccess(_ref) {
      var user = _ref.user;
      return setCurrentUser(user);
    }
  }),
      projectsLoading = _useQuery.isLoading,
      _useQuery$data = _useQuery.data,
      data = _useQuery$data === void 0 ? {} : _useQuery$data;
  /* Constants  */


  var _data$projects = data.projects,
      projects = _data$projects === void 0 ? [] : _data$projects;
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_context__WEBPACK_IMPORTED_MODULE_7__["default"].Provider, {
    value: {
      currentUser: currentUser
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], null, projectsLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _common_animations__WEBPACK_IMPORTED_MODULE_6__["FADE_IN"], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "secondary"
  }))), isAdmin && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_project_add__WEBPACK_IMPORTED_MODULE_5__["ProjectAdd"], {
    setNewProjectId: setNewProjectId
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_project__WEBPACK_IMPORTED_MODULE_4__["ProjectResults"], {
    projects: projects,
    newProjectId: newProjectId,
    projectsLoading: projectsLoading
  }));
}

/***/ }),

/***/ "./assets/app/js/react/project-overview/components/modals/ProjectModal.jsx":
/*!*********************************************************************************!*\
  !*** ./assets/app/js/react/project-overview/components/modals/ProjectModal.jsx ***!
  \*********************************************************************************/
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
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common */ "./assets/app/js/react/common/index.js");
/* harmony import */ var _components_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/users */ "./assets/app/js/react/components/users/index.js");
/* harmony import */ var _components_user_add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/user-add */ "./assets/app/js/react/components/user-add/index.js");
/* Packages */




/* Assets */


/* Components */




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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_users__WEBPACK_IMPORTED_MODULE_6__["Users"], {
    users: users,
    project: project,
    size: "lg"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_user_add__WEBPACK_IMPORTED_MODULE_7__["UserAdd"], {
    users: users,
    project: project
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_5__["Dropzone"], {
    projectId: projectId,
    projectImages: projectImages
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

/***/ "./assets/app/js/react/project-overview/components/modals/index.js":
/*!*************************************************************************!*\
  !*** ./assets/app/js/react/project-overview/components/modals/index.js ***!
  \*************************************************************************/
/*! exports provided: ProjectModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectModal */ "./assets/app/js/react/project-overview/components/modals/ProjectModal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectModal", function() { return _ProjectModal__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/app/js/react/project-overview/components/project-add/ProjectAdd.jsx":
/*!************************************************************************************!*\
  !*** ./assets/app/js/react/project-overview/components/project-add/ProjectAdd.jsx ***!
  \************************************************************************************/
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
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals */ "./assets/app/js/react/project-overview/components/modals/index.js");
/* harmony import */ var icons_add_project_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/add_project.svg */ "./assets/app/img/icons/add_project.svg");
/* harmony import */ var icons_add_project_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_add_project_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ "./assets/app/js/react/project-overview/api.js");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/animations */ "./assets/app/js/react/common/animations.js");
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


/* Api calls */


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
      projectId: projectId
    });
  };

  var invalidateProject = function invalidateProject() {
    return queryClient.invalidateQueries(_api__WEBPACK_IMPORTED_MODULE_6__["QUERY_KEYS"].PROJECT_BY_USER);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].button, _extends({}, _common_animations__WEBPACK_IMPORTED_MODULE_7__["SCALE_FADE"], {
    key: "add-project",
    type: "button",
    className: "icon-wrapper icon-wrapper--interactive icon-wrapper--default btn btn-link btn--project-add",
    style: {
      '--size': '75px'
    },
    onClick: toggleModal
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--30 text-secondary",
    src: icons_add_project_svg__WEBPACK_IMPORTED_MODULE_5___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], null, modalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modals__WEBPACK_IMPORTED_MODULE_4__["ProjectModal"], {
    project: project,
    updateProject: updateProject,
    toggleModal: toggleModal
  })));
}

/***/ }),

/***/ "./assets/app/js/react/project-overview/components/project-add/index.js":
/*!******************************************************************************!*\
  !*** ./assets/app/js/react/project-overview/components/project-add/index.js ***!
  \******************************************************************************/
/*! exports provided: ProjectAdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectAdd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectAdd */ "./assets/app/js/react/project-overview/components/project-add/ProjectAdd.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectAdd", function() { return _ProjectAdd__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/app/js/react/project-overview/components/project/Project.jsx":
/*!*****************************************************************************!*\
  !*** ./assets/app/js/react/project-overview/components/project/Project.jsx ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Project; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProjectImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectImage */ "./assets/app/js/react/project-overview/components/project/ProjectImage.jsx");
/* harmony import */ var _components_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/users */ "./assets/app/js/react/components/users/index.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var icons_check_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/check.svg */ "./assets/app/img/icons/check.svg");
/* harmony import */ var icons_check_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_check_svg__WEBPACK_IMPORTED_MODULE_4__);
/* Packages */

/* Components */




/* Assets */


function Project(_ref) {
  var project = _ref.project,
      selectedProjects = _ref.selectedProjects,
      updateSelectedProjects = _ref.updateSelectedProjects;

  /* Constants */
  var slug = project.slug,
      title = project.title,
      projectImages = project.projectImages,
      users = project.users,
      author = project.author,
      id = project.id;
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "projects/".concat(slug),
    title: title,
    className: "card card--link card--product ".concat(selectedProjects.includes(id) && 'is-selected')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    projectImages: projectImages
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-2"
  }, title ? title : 'Add a nice title'), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_users__WEBPACK_IMPORTED_MODULE_2__["Users"], {
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
      updateSelectedProjects(id);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_3__["ReactSVG"], {
    wrapper: "svg",
    className: "card__select-icon icon icon--8",
    src: icons_check_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }))));
}

/***/ }),

/***/ "./assets/app/js/react/project-overview/components/project/ProjectActionMenu.jsx":
/*!***************************************************************************************!*\
  !*** ./assets/app/js/react/project-overview/components/project/ProjectActionMenu.jsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectActionMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var icons_leave_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/leave.svg */ "./assets/app/img/icons/leave.svg");
/* harmony import */ var icons_leave_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_leave_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var icons_archive_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! icons/archive.svg */ "./assets/app/img/icons/archive.svg");
/* harmony import */ var icons_archive_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(icons_archive_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api */ "./assets/app/js/react/project-overview/api.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../context */ "./assets/app/js/react/project-overview/context.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../constants */ "./assets/app/js/react/project-overview/constants.js");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common */ "./assets/app/js/react/common/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */




/* Assets */




/* Animations */


/* Api calls */


/* Context */


/* Global constants */



function ProjectActionMenu(_ref) {
  var selectedProjects = _ref.selectedProjects,
      resetSelectedProjects = _ref.resetSelectedProjects;

  /* Hooks */
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useQueryClient"])();

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_context__WEBPACK_IMPORTED_MODULE_9__["default"]),
      currentUser = _useContext.currentUser;
  /* Mutations */


  var leaveProjectsMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_8__["leaveProjects"], {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries(_api__WEBPACK_IMPORTED_MODULE_8__["QUERY_KEYS"].PROJECT_BY_USER);
      resetSelectedProjects();
    }
  });
  var deleteProjectsMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_8__["deleteProjects"], {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries(_api__WEBPACK_IMPORTED_MODULE_8__["QUERY_KEYS"].PROJECT_BY_USER);
      resetSelectedProjects();
    }
  });
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({}, _common_animations__WEBPACK_IMPORTED_MODULE_7__["TRANSFORM_UP"], {
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
    onClick: resetSelectedProjects
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--14",
    src: icons_close_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "ml-2 mb-0"
  }, selectedProjects.length, " selected")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-auto ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "bar__list list d-flex align-items-center"
  }, !currentUser.roles.includes(_constants__WEBPACK_IMPORTED_MODULE_10__["USER_ROLES"].ROLE_ADMIN) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "bar__btn btn btn-link d-flex align-items-center text-decoration-none",
    onClick: function onClick() {
      return leaveProjectsMutation.mutate({
        projectIds: selectedProjects,
        userId: currentUser.id
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-wrapper icon-wrapper--warning icon-wrapper--interactive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_11__["LoadingWrapper"], {
    loading: leaveProjectsMutation.isLoading,
    loaderSize: 12,
    classes: {
      loaderClasses: 'position-absolute d-flex text-warning'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--12 text-warning",
    src: icons_leave_svg__WEBPACK_IMPORTED_MODULE_5___default.a
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn__text text-white ml-2"
  }, "Leave"))), currentUser.roles.includes(_constants__WEBPACK_IMPORTED_MODULE_10__["USER_ROLES"].ROLE_ADMIN) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "bar__btn btn btn-link d-flex align-items-center text-decoration-none"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-wrapper icon-wrapper--default icon-wrapper--interactive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_11__["LoadingWrapper"], {
    loading: leaveProjectsMutation.isLoading,
    loaderSize: 12,
    classes: {
      loaderClasses: 'position-absolute d-flex text-secondary'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--12 text-secondary",
    src: icons_archive_svg__WEBPACK_IMPORTED_MODULE_6___default.a
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn__text text-white ml-2"
  }, "Archive"))), currentUser.roles.includes(_constants__WEBPACK_IMPORTED_MODULE_10__["USER_ROLES"].ROLE_ADMIN) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
    className: "list__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "bar__btn btn btn-link d-flex align-items-center text-decoration-none",
    onClick: function onClick() {
      return deleteProjectsMutation.mutate({
        projectIds: selectedProjects
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "icon-wrapper icon-wrapper--danger icon-wrapper--interactive"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_11__["LoadingWrapper"], {
    loading: deleteProjectsMutation.isLoading,
    loaderSize: 12,
    classes: {
      loaderClasses: 'position-absolute d-flex text-danger'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--10 text-danger",
    src: icons_close_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn__text text-white ml-2"
  }, "Delete"))))))));
}

/***/ }),

/***/ "./assets/app/js/react/project-overview/components/project/ProjectImage.jsx":
/*!**********************************************************************************!*\
  !*** ./assets/app/js/react/project-overview/components/project/ProjectImage.jsx ***!
  \**********************************************************************************/
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

/***/ "./assets/app/js/react/project-overview/components/project/ProjectResults.jsx":
/*!************************************************************************************!*\
  !*** ./assets/app/js/react/project-overview/components/project/ProjectResults.jsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectResults; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./assets/app/js/react/project-overview/components/project/Project.jsx");
/* harmony import */ var _ProjectActionMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProjectActionMenu */ "./assets/app/js/react/project-overview/components/project/ProjectActionMenu.jsx");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/animations */ "./assets/app/js/react/common/animations.js");
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


/* Components */



/* Animations */


function ProjectResults(_ref) {
  var projects = _ref.projects,
      newProjectId = _ref.newProjectId,
      projectsLoading = _ref.projectsLoading;

  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      selectedProjects = _useState2[0],
      setSelectedProjects = _useState2[1];
  /* Callbacks */


  var updateSelectedProjects = function updateSelectedProjects(id) {
    setSelectedProjects(function (projects) {
      if (projects.includes(id)) {
        return projects.filter(function (projectId) {
          return projectId !== id;
        });
      }

      return [].concat(_toConsumableArray(projects), [id]);
    });
  };

  var resetSelectedProjects = function resetSelectedProjects() {
    return setSelectedProjects([]);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "h5 text-white mb-6"
  }, "Your projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, !projectsLoading && projects.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].p, _extends({}, _common_animations__WEBPACK_IMPORTED_MODULE_4__["FADE_IN"], {
    className: "text-white mb-0 position-absolute"
  }), "You don't have any projects yet")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row row--equalized gutters-5 ".concat(selectedProjects.length > 0 && 'has-selections')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, projects.filter(function (project) {
    return project.id !== newProjectId;
  }).map(function (project, projectIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({}, Object(_common_animations__WEBPACK_IMPORTED_MODULE_4__["STAGGER_UP"])(projectIndex), {
      key: project.id,
      className: "col-12 col-md-6 col-lg-4 col-xl-3 col-xxl-2",
      layout: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Project__WEBPACK_IMPORTED_MODULE_2__["default"], {
      project: project,
      selectedProjects: selectedProjects,
      updateSelectedProjects: updateSelectedProjects
    }));
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, selectedProjects.length > 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectActionMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    selectedProjects: selectedProjects,
    resetSelectedProjects: resetSelectedProjects
  })));
}

/***/ }),

/***/ "./assets/app/js/react/project-overview/components/project/index.js":
/*!**************************************************************************!*\
  !*** ./assets/app/js/react/project-overview/components/project/index.js ***!
  \**************************************************************************/
/*! exports provided: ProjectResults */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectResults__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectResults */ "./assets/app/js/react/project-overview/components/project/ProjectResults.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectResults", function() { return _ProjectResults__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./assets/app/js/react/project-overview/constants.js":
/*!***********************************************************!*\
  !*** ./assets/app/js/react/project-overview/constants.js ***!
  \***********************************************************/
/*! exports provided: USER_ROLES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_ROLES", function() { return USER_ROLES; });
var USER_ROLES = {
  ROLE_ADMIN: 'ROLE_ADMIN',
  ROLE_USER: 'ROLE_USER',
  ROLE_USER_BASIC: 'ROLE_USER_BASIC'
};

/***/ }),

/***/ "./assets/app/js/react/project-overview/context.js":
/*!*********************************************************!*\
  !*** ./assets/app/js/react/project-overview/context.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var StaticContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();
/* harmony default export */ __webpack_exports__["default"] = (StaticContext);

/***/ }),

/***/ "./assets/app/js/react/project-overview/index.js":
/*!*******************************************************!*\
  !*** ./assets/app/js/react/project-overview/index.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _components_ProjectOverview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ProjectOverview */ "./assets/app/js/react/project-overview/components/ProjectOverview.jsx");
/* Packages */



/* Components */


/* Client */

var client = new react_query__WEBPACK_IMPORTED_MODULE_2__["QueryClient"]({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});
/* Render */

var projectOverviewNode = document.getElementById("projectOverview");

if (projectOverviewNode !== null) {
  Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_query__WEBPACK_IMPORTED_MODULE_2__["QueryClientProvider"], {
    client: client
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProjectOverview__WEBPACK_IMPORTED_MODULE_3__["default"], projectOverviewNode.dataset)), projectOverviewNode);
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX2ltYWdlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9hZGRfcHJvamVjdC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX3VzZXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2FyY2hpdmUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2NoZWNrLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvZGVsZXRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9sZWF2ZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvc3Rhci5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9hbGVydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9vYmplY3RmaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vQm94LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbW1vbi9Ecm9wem9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vTG9hZGluZ1dyYXBwZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL01vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbW1vbi9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2VyLWFkZC9Vc2VyQWRkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlci1hZGQvVXNlckFkZFNlYXJjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3VzZXItYWRkL1VzZXJBZGRTZWFyY2hSZXN1bHRzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlci1hZGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3VzZXJzL1VzZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2Vycy9Vc2VyU2VsZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlcnMvVXNlcnMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2hlbHBlcnMvZmlsdGVyVXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvaGVscGVycy9pc0VtYWlsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcHJvamVjdC1vdmVydmlldy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvUHJvamVjdE92ZXJ2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9tb2RhbHMvUHJvamVjdE1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9tb2RhbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC1hZGQvUHJvamVjdEFkZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC1hZGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC9Qcm9qZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9wcm9qZWN0L1Byb2plY3RBY3Rpb25NZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9wcm9qZWN0L1Byb2plY3RJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC9Qcm9qZWN0UmVzdWx0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcHJvamVjdC1vdmVydmlldy9jb250ZXh0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcHJvamVjdC1vdmVydmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJBbGVydCIsImVsIiwiRE9NIiwidG9nZ2xlIiwicXVlcnlTZWxlY3RvciIsIm9uSW5pdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzdHlsZSIsIm9wYWNpdHkiLCJ2aXNpYmlsaXR5IiwidHJhbnNmb3JtIiwiYWxlcnROb2RlcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJub2RlIiwiJCIsIm9iamVjdEZpdEltYWdlcyIsIkJveCIsImhlYWRlciIsImNvbnRlbnQiLCJib3hPcGVuIiwidG9nZ2xlQm94IiwiY2hpbGRyZW4iLCJjcmVhdGVQb3J0YWwiLCJGQURFX0lOIiwiRkFERV9JTl9VUCIsImNsb3NlSWNvbiIsImJvZHkiLCJEcm9wem9uZSIsInByb2plY3RJZCIsInByb2plY3RJbWFnZXMiLCJDT0xVTU5fTEFZT1VUIiwicXVlcnlDbGllbnQiLCJ1c2VRdWVyeUNsaWVudCIsInVzZURyb3B6b25lIiwiYWNjZXB0Iiwibm9DbGljayIsIm9uRHJvcCIsImFjY2VwdGVkRmlsZXMiLCJ1cGRhdGVQcm9qZWN0SW1hZ2VzIiwiaW1hZ2VzIiwiZ2V0Um9vdFByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImlzRHJhZ0FjdGl2ZSIsImFkZFByb2plY3RJbWFnZXNNdXRhdGlvbiIsInVzZU11dGF0aW9uIiwiYWRkUHJvamVjdEltYWdlcyIsIm9uU3VjY2VzcyIsImludmFsaWRhdGVRdWVyaWVzIiwiUVVFUllfS0VZUyIsIlBST0pFQ1RfQllfSUQiLCJkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24iLCJkZWxldGVQcm9qZWN0SW1hZ2VzIiwiYWN0aW9uIiwicHJvcHMiLCJtdXRhdGUiLCJtYXAiLCJpbWFnZUluZGV4IiwiaW1hZ2UiLCJ0aXRsZSIsImlkIiwiU1RBR0dFUl9VUCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiaXNMb2FkaW5nIiwibG9hZGVyQ2xhc3NlcyIsImxlbmd0aCIsImlzUGFyZW50RHJhZ0FjdGl2ZSIsIkRyb3B6b25lSW5uZXIiLCJhZGRJbWFnZUxvYWRpbmciLCJub0RyYWdFdmVudHNCdWJibGluZyIsImFkZEltYWdlSWNvbiIsIkxvYWRpbmdXcmFwcGVyIiwibG9hZGluZyIsImxvYWRlclNpemUiLCJjbGFzc2VzIiwiZGVmYXVsdENsYXNzZXMiLCJTQ0FMRV9GQURFIiwiTW9kYWwiLCJ0b2dnbGVNb2RhbCIsImRvbUVsZW1lbnQiLCJ2YXJpYW50IiwicmVuZGVyIiwiVFJBTlNGT1JNX1VQIiwiRUFTRSIsImluaXRpYWwiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJlYXNlIiwiZHVyYXRpb24iLCJ5IiwidHlwZSIsImRhbXBpbmciLCJzdGlmZm5lc3MiLCJzY2FsZSIsImluZGV4IiwiZGVsYXkiLCJTVEFHR0VSX0xFRlQiLCJ4IiwiVXNlckFkZCIsInVzZXJzIiwicHJvamVjdCIsInVzZVN0YXRlIiwic2V0Qm94T3BlbiIsImFkZFVzZXJJY29uIiwiVXNlckFkZFNlYXJjaCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJmb2N1c2VkVXNlciIsInNldEZvY3VzZWRVc2VyIiwidXNlUXVlcnkiLCJHTE9CQUxfVVNFUlMiLCJmZXRjaEdvYmFsVXNlcnMiLCJkYXRhIiwiZ2xvYmFsVXNlcnMiLCJnbG9iYWxVc2Vyc0xvYWRpbmciLCJmaWx0ZXJlZFVzZXJzIiwiZmlsdGVyVXNlcnMiLCJxdWVyeVJlZiIsInVzZVJlZiIsImFkZFVzZXJNdXRhdGlvbiIsImFkZFVzZXIiLCJjdXJyZW50Iiwic2VsZWN0IiwiaGFuZGxlQ2hhbmdlIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVPbktleURvd24iLCJpbmNsdWRlcyIsImtleSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsImlzRW1haWwiLCJlbWFpbCIsImhhbmRsZUNsaWNrIiwidXNlck11dGF0aW9uTG9hZGluZyIsIlVzZXJBZGRTZWFyY2hSZXN1bHRzIiwicmVzdWx0cyIsIm5ld1VzZXIiLCJ1c2VybmFtZSIsInVzZXJDb2xvciIsInVzZXJJbmRleCIsIlVzZXIiLCJzaXplIiwiYXV0aG9yIiwidXNlcklkIiwiaXNBdXRob3IiLCJqb2luIiwiZGVsZXRlVXNlck11dGF0aW9uIiwiZGVsZXRlVXNlciIsImRlbGV0ZUljb24iLCJzdGFySWNvbiIsIlVzZXJBdmF0YXIiLCJ1c2VySW5pdGlhbHMiLCJzcGxpdCIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsIlVzZXJJbmZvIiwiVXNlclNlbGVjdCIsImlzRm9jdXNlZCIsInVzZUVmZmVjdCIsImhhbmRsZVN0YXR1cyIsIlVzZXJzIiwibGF5b3V0IiwicmVzdCIsInNsaWNlQW1vdW50IiwiSW5maW5pdHkiLCJzbGljZSIsImxvd2VyUXVlcnkiLCJ0b0xvd2VyQ2FzZSIsImV4aXN0aW5nVXNlcnNCeUVtYWlsIiwiZmlsdGVyIiwidGVzdCIsIlBST0pFQ1RfQllfVVNFUiIsImZldGNoUHJvamVjdHNCeVVzZXIiLCJ1cmwiLCJheGlvcyIsImdldCIsInJlc3VsdCIsImZldGNoUHJvamVjdEJ5SWQiLCJhZGRQcm9qZWN0IiwicG9zdCIsImRlbGV0ZVByb2plY3RzIiwicHJvamVjdElkcyIsInBhcmFtcyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwibGVhdmVQcm9qZWN0cyIsImVkaXRQcm9qZWN0IiwiZm9ybVJlZiIsIlByb2plY3RPdmVydmlldyIsImN1cnJlbnRVc2VyIiwic2V0Q3VycmVudFVzZXIiLCJuZXdQcm9qZWN0SWQiLCJzZXROZXdQcm9qZWN0SWQiLCJhdG9iIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZXBsYWNlIiwiaXNBZG1pbiIsInJvbGVzIiwiVVNFUl9ST0xFUyIsIlJPTEVfQURNSU4iLCJwcm9qZWN0c0xvYWRpbmciLCJwcm9qZWN0cyIsIlByb2plY3RNb2RhbCIsInVwZGF0ZVByb2plY3QiLCJQcm9qZWN0QWRkIiwic2V0UHJvamVjdElkIiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwiZW5hYmxlZCIsImFkZE11dGF0aW9uIiwiZWRpdE11dGF0aW9uIiwiaW52YWxpZGF0ZVByb2plY3QiLCJzZXRUaW1lb3V0IiwiYWRkUHJvamVjdEljb24iLCJQcm9qZWN0Iiwic2VsZWN0ZWRQcm9qZWN0cyIsInVwZGF0ZVNlbGVjdGVkUHJvamVjdHMiLCJzbHVnIiwiY2hlY2tJY29uIiwiUHJvamVjdEFjdGlvbk1lbnUiLCJyZXNldFNlbGVjdGVkUHJvamVjdHMiLCJ1c2VDb250ZXh0IiwiU3RhdGljQ29udGV4dCIsImxlYXZlUHJvamVjdHNNdXRhdGlvbiIsImRlbGV0ZVByb2plY3RzTXV0YXRpb24iLCJsZWF2ZUljb24iLCJhcmNoaXZlSWNvbiIsIlByb2plY3RJbWFnZSIsIlByb2plY3RSZXN1bHRzIiwic2V0U2VsZWN0ZWRQcm9qZWN0cyIsInByb2plY3RJbmRleCIsIlJPTEVfVVNFUiIsIlJPTEVfVVNFUl9CQVNJQyIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsImNsaWVudCIsIlF1ZXJ5Q2xpZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJxdWVyaWVzIiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJwcm9qZWN0T3ZlcnZpZXdOb2RlIiwiZ2V0RWxlbWVudEJ5SWQiLCJkYXRhc2V0IiwicGFyc2xleUNvbmZpZyIsImVycm9yQ2xhc3MiLCJleGNsdWRlZCIsInN1Y2Nlc3NDbGFzcyIsInBhcnNsZXkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7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QVUsRUFBRSxVQURNO0FBRWxCQyxVQUFRLEVBQUUsb0dBRlE7QUFHbEJDLGNBQVksRUFBRTtBQUhJLENBQXRCO0FBTUEzTyw2Q0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEI0TyxPQUE1QixDQUFvQ0osYUFBcEMsRTs7Ozs7Ozs7Ozs7QUNUQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9hcHAvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vYXNzZXRzL2FwcC9qcy9tYWluLmpzXCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYWRkX2ltYWdlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hZGRfcHJvamVjdC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYWRkX3VzZXIuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FyY2hpdmUuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2NoZWNrLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jbG9zZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZGVsZXRlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9sZWF2ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvc3Rhci5zdmdcIjsiLCJjbGFzcyBBbGVydCB7XG4gICAgY29uc3RydWN0b3IoZWwpIHtcbiAgICAgICAgdGhpcy5ET00gPSB7IGVsIH07XG4gICAgICAgIHRoaXMuRE9NLnRvZ2dsZSA9IHRoaXMuRE9NLmVsLnF1ZXJ5U2VsZWN0b3IoXCIuYWxlcnRfX2J0blwiKTtcblxuICAgICAgICB0aGlzLm9uSW5pdCgpO1xuICAgIH1cbiAgICBvbkluaXQoKSB7XG4gICAgICAgIHRoaXMuRE9NLnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy50b2dnbGUoKSk7XG4gICAgfVxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5ET00uZWwuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuRE9NLmVsLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICB0aGlzLkRPTS5lbC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoMTAwJSlcIjtcbiAgICB9XG59XG5cbmNvbnN0IGFsZXJ0Tm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYWxlcnRdXCIpO1xuWy4uLmFsZXJ0Tm9kZXNdLmZvckVhY2goKG5vZGUpID0+IG5ldyBBbGVydChub2RlKSk7XG4iLCIvLyBDU1NcbmltcG9ydCAnLi4vc2Nzcy9tYWluLnNjc3MnO1xuXG4vLyBQb2xseWZpbHNcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcblxuLy8gQ29yZVxuaW1wb3J0ICcuL3ZhbGlkYXRpb24nO1xuaW1wb3J0ICcuL2FsZXJ0JztcblxuLy8gUGx1Z2luc1xuaW1wb3J0ICcuL29iamVjdGZpdCc7XG5cbi8vIFJlYWN0XG5pbXBvcnQgJy4vcmVhY3QvcHJvamVjdC1vdmVydmlldydcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgb2JqZWN0Rml0SW1hZ2VzIGZyb20gJ29iamVjdC1maXQtaW1hZ2VzJztcblxuJChmdW5jdGlvbigpIHtcbiAgICBvYmplY3RGaXRJbWFnZXMoKTtcbn0pO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSBcInJlYWN0LXN2Z1wiO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOLCBGQURFX0lOX1VQIH0gZnJvbSBcIi4vYW5pbWF0aW9uc1wiO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSBcImljb25zL2Nsb3NlLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3goeyBoZWFkZXIsIGNvbnRlbnQsIGJveE9wZW4sIHRvZ2dsZUJveCwgY2hpbGRyZW4gfSkge1xuICAgIHJldHVybiBjcmVhdGVQb3J0YWwoXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICB7Ym94T3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYm94LW92ZXJsYXlcIiB7Li4uRkFERV9JTn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYga2V5PVwiYm94LWNvbnRlbnRcIiBjbGFzc05hbWU9XCJib3hfX2NvbnRlbnQgYm9yZGVyIHAtNVwiIHsuLi5GQURFX0lOX1VQfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94X19oZWFkZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWJhc2VsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0tbGcgbWItMVwiPntoZWFkZXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS02MCBtYi0wXCI+e2NvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fY2xvc2UgYnRuIGJ0bi1saW5rIG1sLWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVCb3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTJcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hfX2JvZHkgZC1mbGV4IG10LTRcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPixcbiAgICAgICAgZG9jdW1lbnQuYm9keVxuICAgICk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSAncmVhY3QtZHJvcHpvbmUnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gJ2ljb25zL2Nsb3NlLnN2Zyc7XG5pbXBvcnQgYWRkSW1hZ2VJY29uIGZyb20gJ2ljb25zL2FkZF9pbWFnZS5zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBMb2FkaW5nV3JhcHBlciB9IGZyb20gJy4vJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU1RBR0dFUl9VUCB9IGZyb20gJy4vYW5pbWF0aW9ucyc7XG5cbi8qIEFwaSBjYWxscyAqL1xuaW1wb3J0IHsgYWRkUHJvamVjdEltYWdlcywgZGVsZXRlUHJvamVjdEltYWdlcywgUVVFUllfS0VZUyB9IGZyb20gJy4uL3Byb2plY3Qtb3ZlcnZpZXcvYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcHpvbmUoeyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZXMgfSkge1xuXHQvKiBDb250YW50cyAqL1xuXHRjb25zdCBDT0xVTU5fTEFZT1VUID0gJ2NvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtMyc7XG5cblx0LyogSG9va3MgKi9cblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzLCBpc0RyYWdBY3RpdmUgfSA9IHVzZURyb3B6b25lKHtcblx0XHRhY2NlcHQ6ICdpbWFnZS8qJyxcblx0XHRub0NsaWNrOiB0cnVlLFxuXHRcdG9uRHJvcDogKGFjY2VwdGVkRmlsZXMpID0+IHVwZGF0ZVByb2plY3RJbWFnZXMoJ2FkZCcsIHsgaW1hZ2VzOiBhY2NlcHRlZEZpbGVzIH0pLFxuXHR9KTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgYWRkUHJvamVjdEltYWdlc011dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkUHJvamVjdEltYWdlcywge1xuXHRcdG9uU3VjY2VzczogKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSksXG5cdH0pO1xuXG5cdGNvbnN0IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGRlbGV0ZVByb2plY3RJbWFnZXMsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0pLFxuXHR9KTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgdXBkYXRlUHJvamVjdEltYWdlcyA9IChhY3Rpb24sIHByb3BzKSA9PiB7XG5cdFx0aWYgKGFjdGlvbiA9PT0gJ2FkZCcpIGFkZFByb2plY3RJbWFnZXNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQsIC4uLnByb3BzIH0pO1xuXHRcdGlmIChhY3Rpb24gPT09ICdkZWxldGUnKSBkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkLCAuLi5wcm9wcyB9KTtcblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImRyb3B6b25lXCIgey4uLmdldFJvb3RQcm9wcygpfT5cblx0XHRcdDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LS1lcXVhbGl6ZWQgZ3V0dGVycy01XCI+XG5cdFx0XHRcdDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9PlxuXHRcdFx0XHRcdHtwcm9qZWN0SW1hZ2VzLm1hcCgoeyBpbWFnZSwgdGl0bGUsIGlkIH0sIGltYWdlSW5kZXgpID0+IChcblx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2IGxheW91dCB7Li4uU1RBR0dFUl9VUChpbWFnZUluZGV4KX0gY2xhc3NOYW1lPXtDT0xVTU5fTEFZT1VUfSBrZXk9e2lkfT5cblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZV9fY29udGFpbmVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGltZyBjbGFzc05hbWU9XCJkcm9wem9uZV9faW1hZ2UgaW1nLWZsdWlkXCIgc3JjPXtpbWFnZX0gYWx0PXt0aXRsZX0gLz5cblx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBkcm9wem9uZV9faW1hZ2UtZGVsZXRlIHAtMFwiXG5cdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVwZGF0ZVByb2plY3RJbWFnZXMoJ2RlbGV0ZScsIHsgaWQgfSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiZHJvcHpvbmVfX2ltYWdlLWRlbGV0ZS1pY29uIGljb24td3JhcHBlciBpY29uLXdyYXBwZXItLWRhbmdlciBteC1hdXRvXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU9e3sgJy0tc2l6ZSc6ICc1MHB4JyB9fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PExvYWRpbmdXcmFwcGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9hZGluZz17ZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uLmlzTG9hZGluZ31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkZXJTaXplPXsyMH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc2VzPXt7IGxvYWRlckNsYXNzZXM6ICdwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXggdGV4dC1kYW5nZXInIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxSZWFjdFNWR1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d3JhcHBlcj1cInN2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpY29uIGljb24tLTE0IHRleHQtZGFuZ2VyIG10LTBcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXtjbG9zZUljb259XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Mb2FkaW5nV3JhcHBlcj5cblx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHQ8bW90aW9uLmRpdiBrZXk9XCJhZGQtaW1hZ2VcIiB7Li4uU1RBR0dFUl9VUChwcm9qZWN0SW1hZ2VzLmxlbmd0aCl9IGNsYXNzTmFtZT17Q09MVU1OX0xBWU9VVH0gbGF5b3V0PlxuXHRcdFx0XHRcdFx0PERyb3B6b25lSW5uZXJcblx0XHRcdFx0XHRcdFx0YWRkSW1hZ2VMb2FkaW5nPXthZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24uaXNMb2FkaW5nfVxuXHRcdFx0XHRcdFx0XHR7Li4ueyB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc1BhcmVudERyYWdBY3RpdmU6IGlzRHJhZ0FjdGl2ZSB9fVxuXHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG5cbi8qIElubmVyIGRyb3B6b25lICovXG5jb25zdCBEcm9wem9uZUlubmVyID0gKHsgYWRkSW1hZ2VMb2FkaW5nLCB1cGRhdGVQcm9qZWN0SW1hZ2VzLCBpc1BhcmVudERyYWdBY3RpdmUgfSkgPT4ge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcywgaXNEcmFnQWN0aXZlIH0gPSB1c2VEcm9wem9uZSh7XG5cdFx0YWNjZXB0OiAnaW1hZ2UvKicsXG5cdFx0bm9EcmFnRXZlbnRzQnViYmxpbmc6IHRydWUsXG5cdFx0b25Ecm9wOiAoYWNjZXB0ZWRGaWxlcykgPT4gdXBkYXRlUHJvamVjdEltYWdlcygnYWRkJywgeyBpbWFnZXM6IGFjY2VwdGVkRmlsZXMgfSksXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwiZHJvcHpvbmVcIiB7Li4uZ2V0Um9vdFByb3BzKCl9PlxuXHRcdFx0PGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG5cdFx0XHQ8YXJ0aWNsZVxuXHRcdFx0XHRjbGFzc05hbWU9e2Bkcm9wem9uZV9fY29udGFpbmVyIGNhcmQgY2FyZC0tbGluayBjYXJkLS10cmFuc3BhcmVudCBjYXJkLS1wdWxzZSAke1xuXHRcdFx0XHRcdChpc0RyYWdBY3RpdmUgfHwgaXNQYXJlbnREcmFnQWN0aXZlKSAmJiAnaXMtcHVsc2luZydcblx0XHRcdFx0fSBoLTEwMCBtYi0wYH0+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBwLTEwXCI+XG5cdFx0XHRcdFx0PExvYWRpbmdXcmFwcGVyXG5cdFx0XHRcdFx0XHRsb2FkaW5nPXthZGRJbWFnZUxvYWRpbmd9XG5cdFx0XHRcdFx0XHRjbGFzc2VzPXt7IGxvYWRlckNsYXNzZXM6ICdwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXggdGV4dC1zZWNvbmRhcnknIH19PlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYnRuLXRleHQgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIHRleHQtbXV0ZWQtLTQwXCI+XG5cdFx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS00OFwiIHNyYz17YWRkSW1hZ2VJY29ufSAvPlxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LS1zbSBtdC0xXCI+XG5cdFx0XHRcdFx0XHRcdFx0e2lzRHJhZ0FjdGl2ZSB8fCBpc1BhcmVudERyYWdBY3RpdmUgPyAnRHJvcCB0aGUgaW1hZ2VzJyA6ICdBZGQgc29tZSBpbWFnZXMnfVxuXHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PC9Mb2FkaW5nV3JhcHBlcj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2FydGljbGU+XG5cdFx0PC9kaXY+XG5cdCk7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNDQUxFX0ZBREUgfSBmcm9tICcuL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nV3JhcHBlcih7IGxvYWRpbmcsIGNoaWxkcmVuLCBsb2FkZXJTaXplID0gNDAsIGNsYXNzZXMgPSB7fSB9KSB7XG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IGxvYWRlckNsYXNzZXMgPSAncG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4JywgZGVmYXVsdENsYXNzZXMgPSAnJyB9ID0gY2xhc3NlcztcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0e2xvYWRpbmcgPyAoXG5cdFx0XHRcdDxtb3Rpb24uZGl2IGtleT1cImxvYWRlclwiIGNsYXNzTmFtZT17bG9hZGVyQ2xhc3Nlc30gey4uLlNDQUxFX0ZBREV9PlxuXHRcdFx0XHRcdDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwiaW5oZXJpdFwiIHNpemU9e2xvYWRlclNpemV9IC8+XG5cdFx0XHRcdDwvbW90aW9uLmRpdj5cblx0XHRcdCkgOiAoXG5cdFx0XHRcdDxtb3Rpb24uZGl2IGtleT1cImRlZmF1bHRcIiBjbGFzc05hbWU9e2RlZmF1bHRDbGFzc2VzfSB7Li4uU0NBTEVfRkFERX0+XG5cdFx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHQpfVxuXHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4sIFRSQU5TRk9STV9VUCB9IGZyb20gXCIuL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwoeyB0b2dnbGVNb2RhbCwgY2hpbGRyZW4sIGRvbUVsZW1lbnQsIHZhcmlhbnQgPSBcImRlZmF1bHRcIiB9KSB7XG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT1cImN1c3RvbS1tb2RhbFwiIGNsYXNzTmFtZT17YGN1c3RvbS1tb2RhbCBjdXN0b20tbW9kYWwtLSR7dmFyaWFudH1gfT5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fb3ZlcmxheVwiIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfSB7Li4uRkFERV9JTn0gLz5cbiAgICAgICAgICAgIDxtb3Rpb24uYXJ0aWNsZSBrZXk9XCJjdXN0b20tbW9kYWxfX2NvbnRlbnRcIiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2NvbnRlbnRcIiB7Li4uVFJBTlNGT1JNX1VQfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBkLWZsZXggZmxleC1ncm93LTFcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5hcnRpY2xlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgaWYgKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChyZW5kZXIoKSwgZG9tRWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlcigpO1xufVxuIiwiY29uc3QgRUFTRSA9IFswLjY1LCAwLCAwLjM1LCAxXTtcblxuY29uc3QgRkFERV9JTiA9IHtcblx0aW5pdGlhbDoge1xuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdGFuaW1hdGU6IHtcblx0XHRvcGFjaXR5OiAxLFxuXHR9LFxuXHRleGl0OiB7XG5cdFx0b3BhY2l0eTogMCxcblx0fSxcblx0dHJhbnNpdGlvbjoge1xuXHRcdGVhc2U6IEVBU0UsXG5cdFx0ZHVyYXRpb246IDAuMixcblx0fSxcbn07XG5cbmNvbnN0IEZBREVfSU5fVVAgPSB7XG5cdGluaXRpYWw6IHtcblx0XHR5OiAyMDAsXG5cdFx0b3BhY2l0eTogMCxcblx0fSxcblx0YW5pbWF0ZToge1xuXHRcdHk6IDAsXG5cdFx0b3BhY2l0eTogMSxcblx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHR0eXBlOiAnc3ByaW5nJyxcblx0XHRcdGRhbXBpbmc6IDQyLFxuXHRcdFx0c3RpZmZuZXNzOiA4MDAsXG5cdFx0fSxcblx0fSxcblx0ZXhpdDoge1xuXHRcdHk6IDIwMCxcblx0XHRvcGFjaXR5OiAwLFxuXHRcdHRyYW5zaXRpb246IHtcblx0XHRcdHR5cGU6ICdzcHJpbmcnLFxuXHRcdFx0ZGFtcGluZzogNDIsXG5cdFx0XHRzdGlmZm5lc3M6IDEyMDAsXG5cdFx0fSxcblx0fSxcbn07XG5cbmNvbnN0IFRSQU5TRk9STV9VUCA9IHtcblx0aW5pdGlhbDoge1xuXHRcdHk6ICcxMDAlJyxcblx0fSxcblx0YW5pbWF0ZToge1xuXHRcdHk6ICcwJScsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0MSxcblx0XHRcdHN0aWZmbmVzczogNjAwLFxuXHRcdH0sXG5cdH0sXG5cdGV4aXQ6IHtcblx0XHR5OiAnMTAwJScsXG5cdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0dHlwZTogJ3NwcmluZycsXG5cdFx0XHRkYW1waW5nOiA0MSxcblx0XHRcdHN0aWZmbmVzczogMTIwMCxcblx0XHR9LFxuXHR9LFxufTtcblxuY29uc3QgU0NBTEVfRkFERSA9IHtcblx0aW5pdGlhbDoge1xuXHRcdHNjYWxlOiAwLFxuXHRcdG9wYWNpdHk6IDAsXG5cdH0sXG5cdGFuaW1hdGU6IHtcblx0XHRzY2FsZTogMSxcblx0XHRvcGFjaXR5OiAxLFxuXHR9LFxuXHRleGl0OiB7XG5cdFx0c2NhbGU6IDAsXG5cdFx0b3BhY2l0eTogMCxcblx0fSxcblx0dHJhbnNpdGlvbjoge1xuXHRcdGVhc2U6IEVBU0UsXG5cdFx0ZHVyYXRpb246IDAuMixcblx0fSxcbn07XG5cbmNvbnN0IFNUQUdHRVJfVVAgPSAoaW5kZXggPSAwKSA9PiAoe1xuXHRpbml0aWFsOiB7IG9wYWNpdHk6IDAsIHk6IDM1IH0sXG5cdGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgeTogMCwgdHJhbnNpdGlvbjogeyB0eXBlOiAnc3ByaW5nJywgZGFtcGluZzogMzAsIHN0aWZmbmVzczogNDUwLCBkZWxheTogaW5kZXggKiAwLjAzNSB9IH0sXG5cdGV4aXQ6IHsgb3BhY2l0eTogMCwgc2NhbGU6IDAuMjUsIHRyYW5zaXRpb246IHsgdHlwZTogJ3NwcmluZycsIGRhbXBpbmc6IDMwLCBzdGlmZm5lc3M6IDYwMCB9IH0sXG59KTtcblxuY29uc3QgU1RBR0dFUl9MRUZUID0gKGluZGV4ID0gMCkgPT4gKHtcblx0aW5pdGlhbDogeyBvcGFjaXR5OiAwLCB4OiAxMCB9LFxuXHRhbmltYXRlOiB7IG9wYWNpdHk6IDEsIHg6IDAsIHRyYW5zaXRpb246IHsgdHlwZTogJ3NwcmluZycsIGRhbXBpbmc6IDMwLCBzdGlmZm5lc3M6IDMwMCwgZGVsYXk6IGluZGV4ICogMC4wMzUgfSB9LFxuXHRleGl0OiB7IG9wYWNpdHk6IDAsIHg6IDEwLCB0cmFuc2l0aW9uOiB7IHR5cGU6ICdzcHJpbmcnLCBkYW1waW5nOiAzMCwgc3RpZmZuZXNzOiA2MDAgfSB9LFxufSk7XG5cbmV4cG9ydCB7IEZBREVfSU4sIEZBREVfSU5fVVAsIFRSQU5TRk9STV9VUCwgU0NBTEVfRkFERSwgU1RBR0dFUl9VUCwgU1RBR0dFUl9MRUZUIH07XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIERyb3B6b25lIH0gZnJvbSAnLi9Ecm9wem9uZSc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsIH0gZnJvbSAnLi9Nb2RhbCc7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJveCB9IGZyb20gJy4vQm94JztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuL0xvYWRpbmdXcmFwcGVyJztcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSBcInJlYWN0LXN2Z1wiO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRVc2VySWNvbiBmcm9tIFwiaWNvbnMvYWRkX3VzZXIuc3ZnXCI7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEJveCB9IGZyb20gXCIuLi8uLi9jb21tb25cIjtcbmltcG9ydCBVc2VyQWRkU2VhcmNoIGZyb20gXCIuL1VzZXJBZGRTZWFyY2hcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckFkZCh7IHVzZXJzLCBwcm9qZWN0IH0pIHtcbiAgICAvKiBTdGF0ZSAqL1xuICAgIGNvbnN0IFtib3hPcGVuLCBzZXRCb3hPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8qIENhbGxiYWNrcyAqL1xuICAgIGNvbnN0IHRvZ2dsZUJveCA9ICgpID0+IHNldEJveE9wZW4oIWJveE9wZW4pO1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtbC0yXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayB1c2VyIHVzZXItLWxnIHVzZXItLWFkZFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0b2dnbGVCb3h9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXJfX2F2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJfX2luaXRpYWxzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cInVzZXJfX2ljb24gaWNvbiBpY29uLS0xMiBtdC0wXCIgc3JjPXthZGRVc2VySWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8Qm94IGhlYWRlcj1cIlNlbGVjdCB1c2Vyc1wiIGNvbnRlbnQ9XCJDaG9vc2Ugc29tZSB1c2VycyB0byBjb2xsYWJvcmF0ZSB3aXRoLlwiIHsuLi57IGJveE9wZW4sIHRvZ2dsZUJveCB9fT5cbiAgICAgICAgICAgICAgICA8VXNlckFkZFNlYXJjaCB7Li4ueyB1c2VycywgcHJvamVjdCwgdG9nZ2xlQm94IH19IC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBVc2VyQWRkU2VhcmNoUmVzdWx0cyBmcm9tICcuL1VzZXJBZGRTZWFyY2hSZXN1bHRzJztcbmltcG9ydCB7IFVzZXJzIH0gZnJvbSAnLi4vdXNlcnMnO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBpc0VtYWlsLCBmaWx0ZXJVc2VycyB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG4vKiBBcGkgY2FsbHMgKi9cbmltcG9ydCB7IGFkZFVzZXIsIGZldGNoR29iYWxVc2VycywgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL3Byb2plY3Qtb3ZlcnZpZXcvYXBpJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlckFkZFNlYXJjaCh7IHVzZXJzLCBwcm9qZWN0LCB0b2dnbGVCb3ggfSkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbcXVlcnksIHNldFF1ZXJ5XSA9IHVzZVN0YXRlKCcnKTtcblx0Y29uc3QgW2ZvY3VzZWRVc2VyLCBzZXRGb2N1c2VkVXNlcl0gPSB1c2VTdGF0ZSgwKTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgZGF0YTogZ2xvYmFsVXNlcnMgPSBbXSwgaXNMb2FkaW5nOiBnbG9iYWxVc2Vyc0xvYWRpbmcgfSA9IHVzZVF1ZXJ5KFxuXHRcdFFVRVJZX0tFWVMuR0xPQkFMX1VTRVJTLFxuXHRcdGZldGNoR29iYWxVc2Vyc1xuXHQpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCBmaWx0ZXJlZFVzZXJzID0gZmlsdGVyVXNlcnMoZ2xvYmFsVXNlcnMsIHVzZXJzLCBxdWVyeSk7XG5cblx0LyogUmVmcyAqL1xuXHRjb25zdCBxdWVyeVJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgYWRkVXNlck11dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkVXNlciwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdC5pZF0pO1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5HTE9CQUxfVVNFUlMpO1xuXG5cdFx0XHRxdWVyeVJlZi5jdXJyZW50LnNlbGVjdCgpO1xuXHRcdFx0c2V0UXVlcnkoJycpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBoYW5kbGVDaGFuZ2UgPSAoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBzZXRRdWVyeSh2YWx1ZSk7XG5cblx0Y29uc3QgaGFuZGxlT25LZXlEb3duID0gKGV2ZW50KSA9PiB7XG5cdFx0aWYgKFsnRW50ZXInLCAnVGFiJ10uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0aWYgKHF1ZXJ5ICE9PSAnJyAmJiBmb2N1c2VkVXNlciAhPT0gbnVsbCkge1xuXHRcdFx0XHRjb25zdCB1c2VyID0gZm9jdXNlZFVzZXIgaW4gZmlsdGVyZWRVc2VycyA/IGZpbHRlcmVkVXNlcnNbZm9jdXNlZFVzZXJdIDogZm9jdXNlZFVzZXI7XG5cblx0XHRcdFx0aWYgKGlzRW1haWwodXNlci5lbWFpbCkpIHtcblx0XHRcdFx0XHRhZGRVc2VyTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkOiBwcm9qZWN0LmlkLCBlbWFpbDogdXNlci5lbWFpbCB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcblxuXHRjb25zdCBoYW5kbGVDbGljayA9IChlbWFpbCkgPT4ge1xuXHRcdGlmIChpc0VtYWlsKGVtYWlsKSkge1xuXHRcdFx0YWRkVXNlck11dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZDogcHJvamVjdC5pZCwgZW1haWw6IGVtYWlsIH0pO1xuXHRcdH1cblx0fTtcblxuXHQvKiBSZW5kZXIgKi9cblx0cmV0dXJuIChcblx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBmbGV4LWdyb3ctMVwiPlxuXHRcdFx0PFVzZXJzIHsuLi57IHVzZXJzLCBwcm9qZWN0IH19IHZhcmlhbnQ9XCJpbnRlcmFjdGl2ZVwiIHNpemU9XCJ4bFwiIC8+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XG5cdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInVzZXJRdWVyeVwiPlxuXHRcdFx0XHRcdFNlYXJjaCBuYW1lIG9yIGVtYWlsXG5cdFx0XHRcdDwvbGFiZWw+XG5cdFx0XHRcdDxpbnB1dFxuXHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gZm9ybS1jb250cm9sLS1zZWFyY2hcIlxuXHRcdFx0XHRcdGlkPVwidXNlclF1ZXJ5XCJcblx0XHRcdFx0XHRuYW1lPVwidXNlclF1ZXJ5XCJcblx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlNlYXJjaCBuYW1lIG9yIGVtYWlsXCJcblx0XHRcdFx0XHR0eXBlPVwidGV4dFwiXG5cdFx0XHRcdFx0YXV0b0ZvY3VzXG5cdFx0XHRcdFx0dmFsdWU9e3F1ZXJ5fVxuXHRcdFx0XHRcdG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG5cdFx0XHRcdFx0b25LZXlEb3duPXtoYW5kbGVPbktleURvd259XG5cdFx0XHRcdFx0YXV0b0NvbXBsZXRlPVwib2ZmXCJcblx0XHRcdFx0XHRyZWY9e3F1ZXJ5UmVmfVxuXHRcdFx0XHQvPlxuXHRcdFx0XHQ8VXNlckFkZFNlYXJjaFJlc3VsdHNcblx0XHRcdFx0XHR7Li4ue1xuXHRcdFx0XHRcdFx0ZmlsdGVyZWRVc2Vycyxcblx0XHRcdFx0XHRcdHF1ZXJ5LFxuXHRcdFx0XHRcdFx0aGFuZGxlQ2xpY2ssXG5cdFx0XHRcdFx0XHRmb2N1c2VkVXNlcixcblx0XHRcdFx0XHRcdHNldEZvY3VzZWRVc2VyLFxuXHRcdFx0XHRcdFx0dXNlck11dGF0aW9uTG9hZGluZzogYWRkVXNlck11dGF0aW9uLmlzTG9hZGluZyxcblx0XHRcdFx0XHRcdGdsb2JhbFVzZXJzTG9hZGluZyxcblx0XHRcdFx0XHR9fVxuXHRcdFx0XHQvPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbXQtNFwiPlxuXHRcdFx0XHQ8YVxuXHRcdFx0XHRcdGhyZWY9XCIjXCJcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgdGV4dC0tc20gdGV4dC13aGl0ZSB0ZXh0LWRlY29yYXRpb24tdW5kZXJsaW5lIHRleHQtbXV0ZWQtLTYwXCJcblx0XHRcdFx0XHR0aXRsZT1cIlJlbW92ZSBhbGwgdXNlcnNcIj5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJidG5fX3RleHRcIj5SZW1vdmUgYWxsIHVzZXJzPC9zcGFuPlxuXHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXNlY29uZGFyeSBtbC1hdXRvIHB4LThcIiBvbkNsaWNrPXt0b2dnbGVCb3h9PlxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImJ0bl9fdGV4dFwiPkRvbmU8L3NwYW4+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4gfSBmcm9tICcuLi8uLi9jb21tb24vYW5pbWF0aW9ucyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXJTZWxlY3QgfSBmcm9tICcuLi91c2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBZGRTZWFyY2hSZXN1bHRzKHtcblx0ZmlsdGVyZWRVc2Vycyxcblx0cXVlcnksXG5cdGhhbmRsZUNsaWNrLFxuXHRmb2N1c2VkVXNlcixcblx0c2V0Rm9jdXNlZFVzZXIsXG5cdHVzZXJNdXRhdGlvbkxvYWRpbmcsXG5cdGdsb2JhbFVzZXJzTG9hZGluZyxcbn0pIHtcblx0LyogUmVuZGVyIGZpbHRlcmVkIHJlc3VsdHMgKi9cblx0Y29uc3QgcmVzdWx0cyA9ICgpID0+IHtcblx0XHRjb25zdCBuZXdVc2VyID0geyBlbWFpbDogcXVlcnksIHVzZXJuYW1lOiAnTmV3IHVzZXInLCB1c2VyQ29sb3I6ICcjQ0MyNUU4JyB9O1xuXG5cdFx0aWYgKGZpbHRlcmVkVXNlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIGZpbHRlcmVkVXNlcnMubWFwKCh1c2VyLCB1c2VySW5kZXgpID0+IChcblx0XHRcdFx0PG1vdGlvbi5saSB7Li4uRkFERV9JTn0ga2V5PXt1c2VyLmlkfSBjbGFzc05hbWU9XCJsaXN0X19pdGVtIHZyLTNcIj5cblx0XHRcdFx0XHQ8VXNlclNlbGVjdFxuXHRcdFx0XHRcdFx0ey4uLnsgdXNlciwgdXNlckluZGV4LCBoYW5kbGVDbGljaywgc2V0Rm9jdXNlZFVzZXIgfX1cblx0XHRcdFx0XHRcdGlzRm9jdXNlZD17dXNlckluZGV4ID09PSBmb2N1c2VkVXNlciAmJiBxdWVyeX1cblx0XHRcdFx0XHRcdGlzTG9hZGluZz17dXNlck11dGF0aW9uTG9hZGluZ31cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L21vdGlvbi5saT5cblx0XHRcdCkpO1xuXHRcdH1cblxuXHRcdGlmICghZ2xvYmFsVXNlcnNMb2FkaW5nKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8bW90aW9uLmxpIHsuLi5GQURFX0lOfSBrZXk9XCJOZXcgdXNlclwiIGNsYXNzTmFtZT1cImxpc3RfX2l0ZW0gaXMtZm9jdXNlZCB2ci0zXCI+XG5cdFx0XHRcdFx0PFVzZXJTZWxlY3Rcblx0XHRcdFx0XHRcdHsuLi57IHVzZXI6IG5ld1VzZXIsIHVzZXJJbmRleDogbmV3VXNlciwgaGFuZGxlQ2xpY2ssIHNldEZvY3VzZWRVc2VyIH19XG5cdFx0XHRcdFx0XHRpc0ZvY3VzZWQ9e3F1ZXJ5Lmxlbmd0aH1cblx0XHRcdFx0XHRcdGlzTG9hZGluZz17dXNlck11dGF0aW9uTG9hZGluZ31cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L21vdGlvbi5saT5cblx0XHRcdCk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHR7cXVlcnkgIT09ICcnICYmIChcblx0XHRcdFx0PG1vdGlvbi51bCB7Li4uRkFERV9JTn0gY2xhc3NOYW1lPVwiYm94X19saXN0IGxpc3RcIj5cblx0XHRcdFx0XHR7cmVzdWx0cygpfVxuXHRcdFx0XHQ8L21vdGlvbi51bD5cblx0XHRcdCl9XG5cdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJBZGQgfSBmcm9tIFwiLi9Vc2VyQWRkXCI7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gJ3JlYWN0LXF1ZXJ5JztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgc3Rhckljb24gZnJvbSAnaWNvbnMvc3Rhci5zdmcnO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnaWNvbnMvZGVsZXRlLnN2Zyc7XG5cbi8qIEFwaSBjYWxscyAqL1xuaW1wb3J0IHsgZGVsZXRlVXNlciwgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL3Byb2plY3Qtb3ZlcnZpZXcvYXBpJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTG9hZGluZ1dyYXBwZXIgfSBmcm9tICcuLi8uLi9jb21tb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyKHsgdXNlciwgcHJvamVjdCwgdmFyaWFudCA9ICdkZWZhdWx0Jywgc2l6ZSA9ICdtZCcgfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgaWQ6IHByb2plY3RJZCwgYXV0aG9yIH0gPSBwcm9qZWN0O1xuXHRjb25zdCB7IGlkOiB1c2VySWQsIGVtYWlsIH0gPSB1c2VyO1xuXG5cdGNvbnN0IGlzQXV0aG9yID0gZW1haWwgPT09IGF1dGhvcjtcblx0Y29uc3QgY2xhc3NlcyA9IFsndXNlcicsIGB1c2VyLS0ke3NpemV9YCwgYHVzZXItLSR7dmFyaWFudH1gLCBpc0F1dGhvciAmJiAndXNlci0tYXV0aG9yJ10uam9pbignICcpO1xuXG5cdC8qIE11dGF0aW9ucyAqL1xuXHRjb25zdCBkZWxldGVVc2VyTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVVc2VyLCB7XG5cdFx0b25TdWNjZXNzOiAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKSxcblx0fSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuXHRcdFx0PFVzZXJBdmF0YXIgaXNMb2FkaW5nPXtkZWxldGVVc2VyTXV0YXRpb24uaXNMb2FkaW5nfSB7Li4udXNlcn0+XG5cdFx0XHRcdHt2YXJpYW50ID09PSAnaW50ZXJhY3RpdmUnICYmICFpc0F1dGhvciAmJiAoXG5cdFx0XHRcdFx0PGJ1dHRvblxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwidXNlcl9fYWN0aW9uIGJ0biBidG4tbGluayBwLTBcIlxuXHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PiBkZWxldGVVc2VyTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkLCB1c2VySWQgfSl9PlxuXHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19hY3Rpb24taWNvbiBpY29uIGljb24tLTE0XCIgc3JjPXtkZWxldGVJY29ufSAvPlxuXHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9Vc2VyQXZhdGFyPlxuXHRcdFx0e2lzQXV0aG9yICYmIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19zdGF0dXMgdXNlcl9fc3RhdHVzLS1sZWFkZXJcIj5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cInVzZXJfX3N0YXR1cy1pY29uIGljb24gdGV4dC10ZXJ0aWFyeSBtdC0wXCIgc3JjPXtzdGFySWNvbn0gLz5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQpfVxuXHRcdDwvZGl2PlxuXHQpO1xufVxuXG5leHBvcnQgY29uc3QgVXNlckF2YXRhciA9ICh7IHVzZXJuYW1lLCB1c2VyQ29sb3IsIGlzTG9hZGluZywgY2hpbGRyZW4gfSkgPT4ge1xuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgdXNlckluaXRpYWxzID0gdXNlcm5hbWUuc3BsaXQoJyAnKS5tYXAoKHdvcmQpID0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19hdmF0YXJcIiBzdHlsZT17eyAnLS10aGVtZSc6IHVzZXJDb2xvciB9fT5cblx0XHRcdDxMb2FkaW5nV3JhcHBlciBsb2FkaW5nPXtpc0xvYWRpbmd9IGxvYWRlclNpemU9ezE2fT5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidXNlcl9faW5pdGlhbHNcIj57dXNlckluaXRpYWxzfTwvc3Bhbj5cblx0XHRcdFx0e2NoaWxkcmVufVxuXHRcdFx0PC9Mb2FkaW5nV3JhcHBlcj5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBVc2VySW5mbyA9ICh7IHVzZXJuYW1lLCBlbWFpbCB9KSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1sLTNcIj5cblx0XHQ8cCBjbGFzc05hbWU9XCJtYi0wXCI+e3VzZXJuYW1lfTwvcD5cblx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS02MCB0ZXh0LS14c1wiPntlbWFpbH08L3A+XG5cdDwvZGl2PlxuKTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRVc2VySWNvbiBmcm9tICdpY29ucy9hZGRfdXNlci5zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VyQXZhdGFyLCBVc2VySW5mbyB9IGZyb20gJy4vVXNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJTZWxlY3QoeyB1c2VyLCB1c2VySW5kZXgsIGhhbmRsZUNsaWNrLCBpc0ZvY3VzZWQsIHNldEZvY3VzZWRVc2VyLCBpc0xvYWRpbmcgfSkge1xuXHQvKiBFZmZlY3RzICovXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aXNGb2N1c2VkICYmIHNldEZvY3VzZWRVc2VyKHVzZXJJbmRleCk7XG5cdH0sIFtpc0ZvY3VzZWRdKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHJldHVybiAoKSA9PiBzZXRGb2N1c2VkVXNlcigwKTtcblx0fSwgW10pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBoYW5kbGVTdGF0dXMgPSAoYWN0aW9uKSA9PiB7XG5cdFx0c2V0Rm9jdXNlZFVzZXIoYWN0aW9uID09PSAnZW50ZXInID8gdXNlckluZGV4IDogMCk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0Y2xhc3NOYW1lPXtgdXNlciB1c2VyLS1zZWxlY3QgJHtpc0ZvY3VzZWQgJiYgJ2lzLWZvY3VzZWQnfSB1c2VyLS14bGB9XG5cdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayh1c2VyLmVtYWlsKX1cblx0XHRcdG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlU3RhdHVzKCdlbnRlcicpfVxuXHRcdFx0b25Nb3VzZUxlYXZlPXsoKSA9PiBoYW5kbGVTdGF0dXMoJ2xlYXZlJyl9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxVc2VyQXZhdGFyIGlzTG9hZGluZz17aXNMb2FkaW5nICYmIGlzRm9jdXNlZH0gey4uLnVzZXJ9IC8+XG5cdFx0XHRcdDxVc2VySW5mbyB7Li4udXNlcn0gLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19hZGQgdGV4dC1zZWNvbmRhcnkgcm91bmRlZC1jaXJjbGUgbWwtYXV0b1wiPlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9fYWRkLWljb24gaWNvbiBpY29uLS0xMiB0ZXh0LXNlY29uZGFyeVwiIHNyYz17YWRkVXNlckljb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9idXR0b24+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU0NBTEVfRkFERSB9IGZyb20gXCIuLi8uLi9jb21tb24vYW5pbWF0aW9uc1wiO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJzKHsgdXNlcnMsIGxheW91dCA9IFwiZnVsbFwiLCAuLi5yZXN0IH0pIHtcbiAgICBjb25zdCBzbGljZUFtb3VudCA9IGxheW91dCA9PT0gXCJtaW5pbWFsXCIgPyA3IDogSW5maW5pdHk7XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgZ3V0dGVycy0xXCI+XG4gICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgIHt1c2Vycy5zbGljZSgwLCBzbGljZUFtb3VudCkubWFwKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBsYXlvdXQgey4uLlNDQUxFX0ZBREV9IGNsYXNzTmFtZT1cImNvbC1hdXRvXCIga2V5PXt1c2VyLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlciB7Li4ueyB1c2VyLCAuLi5yZXN0IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAge2xheW91dCA9PT0gXCJtaW5pbWFsXCIgJiYgdXNlcnMubGVuZ3RoID4gNyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGxheW91dCB7Li4uU0NBTEVfRkFERX0gY2xhc3NOYW1lPVwiY29sLWF1dG9cIiBrZXk9XCJtb3JlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LS14cyB0ZXh0LW11dGVkLS03MCBtbC0xXCI+KyB7dXNlcnMubGVuZ3RoIC0gc2xpY2VBbW91bnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VycyB9IGZyb20gXCIuL1VzZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXIgfSBmcm9tIFwiLi9Vc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJTZWxlY3QgfSBmcm9tIFwiLi9Vc2VyU2VsZWN0XCI7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaWx0ZXJVc2VycyhnbG9iYWxVc2VycywgdXNlcnMsIHF1ZXJ5KSB7XG4gICAgY29uc3QgbG93ZXJRdWVyeSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgZXhpc3RpbmdVc2Vyc0J5RW1haWwgPSB1c2Vycy5tYXAoKHsgZW1haWwgfSkgPT4gZW1haWwpO1xuXG4gICAgbGV0IGZpbHRlcmVkVXNlcnMgPSBnbG9iYWxVc2Vyc1xuICAgICAgICAuZmlsdGVyKCh7IGVtYWlsIH0pID0+IHtcbiAgICAgICAgICAgIC8qIE9ubHkgcmV0dXJuIHVzZXJzIHRoYXQgYXJlIG5vdCBwYXJ0IG9mIHRoZSBwcm9qZWN0ICovXG4gICAgICAgICAgICByZXR1cm4gIWV4aXN0aW5nVXNlcnNCeUVtYWlsLmluY2x1ZGVzKGVtYWlsKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbHRlcigoeyBlbWFpbCwgdXNlcm5hbWUgfSkgPT4ge1xuICAgICAgICAgICAgLyogT25seSByZXR1cm4gdXNlcnMgdGhhdCBtYXRjaCB0aGUgcXVlcnkgb24gZW1haWwgfHwgdXNlcm5hbWUgKi9cbiAgICAgICAgICAgIHJldHVybiBlbWFpbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyUXVlcnkpIHx8IHVzZXJuYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJRdWVyeSk7XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbHRlcmVkVXNlcnM7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGlzRW1haWwgfSBmcm9tICcuL2lzRW1haWwnO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBmaWx0ZXJVc2VycyB9IGZyb20gJy4vZmlsdGVyVXNlcnMnO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNFbWFpbChlbWFpbCkge1xuICAgIHJldHVybiAvXlteXFxzQF0rQFteXFxzQF0rXFwuW15cXHNAXSskLy50ZXN0KGVtYWlsKTtcbn1cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmV4cG9ydCBjb25zdCBRVUVSWV9LRVlTID0ge1xuXHRQUk9KRUNUX0JZX1VTRVI6ICdwcm9qZWN0X2J5X3VzZXInLFxuXHRQUk9KRUNUX0JZX0lEOiAncHJvamVjdF9ieV9pZCcsXG5cdEdMT0JBTF9VU0VSUzogJ2dsb2JhbF91c2VycycsXG59O1xuXG4vKiBQcm9qZWN0IHJlbGF0ZWQgY2FsbHMgKi9cbmV4cG9ydCBjb25zdCBmZXRjaFByb2plY3RzQnlVc2VyID0gYXN5bmMgKHsgdXNlcklkIH0pID0+IHtcblx0bGV0IHVybCA9ICcvYXBpL3Byb2plY3RzL2dldCc7XG5cdGlmICh1c2VySWQpIHtcblx0XHR1cmwgPSBgJHt1cmx9LyR7dXNlcklkfWA7XG5cdH1cblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQodXJsKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2plY3RCeUlkID0gYXN5bmMgKHsgcHJvamVjdElkIH0pID0+IHtcblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2plY3QvZ2V0LyR7cHJvamVjdElkfWApO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3QgPSBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoJy9hcGkvcHJvamVjdHMvYWRkJyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvamVjdHMgPSBhc3luYyAoeyBwcm9qZWN0SWRzIH0pID0+IHtcblx0Y29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG5cdHByb2plY3RJZHMuZm9yRWFjaCgoaWQpID0+IHBhcmFtcy5hcHBlbmQoJ3Byb2plY3RzW10nLCBpZCkpO1xuXG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvcHJvamVjdHMvZGVsZXRlYCwgcGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGxlYXZlUHJvamVjdHMgPSBhc3luYyAoeyBwcm9qZWN0SWRzLCB1c2VySWQgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcblx0cHJvamVjdElkcy5mb3JFYWNoKChpZCkgPT4gcGFyYW1zLmFwcGVuZCgncHJvamVjdHNbXScsIGlkKSk7XG5cblx0Y29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9sZWF2ZS8ke3VzZXJJZH1gLCBwYXJhbXMpO1xuXG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZWRpdFByb2plY3QgPSBhc3luYyAoeyBmb3JtUmVmLCBwcm9qZWN0SWQgfSkgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybVJlZi5jdXJyZW50KTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3Byb2plY3RzL2VkaXQvJHtwcm9qZWN0SWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIFByb2plY3QgaW1hZ2UgcmVsYXRlZCBjYWxscyAqL1xuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RJbWFnZXMgPSBhc3luYyAoeyBwcm9qZWN0SWQsIGltYWdlcyB9KSA9PiB7XG5cdGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuXHRpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHBhcmFtcy5hcHBlbmQoJ2ltYWdlc1tdJywgaW1hZ2UpKTtcblxuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2ltYWdlcy9hZGQvJHtwcm9qZWN0SWR9YCwgcGFyYW1zKTtcblx0cmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9qZWN0SW1hZ2VzID0gYXN5bmMgKHsgcHJvamVjdElkLCBpZCB9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvaW1hZ2VzL2RlbGV0ZS8ke3Byb2plY3RJZH1gLCB7IGlkIH0pO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogVXNlciByZWxhdGVkIGNhbGxzICovXG5leHBvcnQgY29uc3QgZmV0Y2hHb2JhbFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvdXNlcnMvZ2V0Jyk7XG5cdHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkVXNlciA9IGFzeW5jICh7IHByb2plY3RJZCwgZW1haWwgfSkgPT4ge1xuXHRjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3VzZXJzL2FkZC8ke3Byb2plY3RJZH1gLCB7IGVtYWlsIH0pO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAoeyBwcm9qZWN0SWQsIHVzZXJJZCB9KSA9PiB7XG5cdGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvdXNlcnMvZGVsZXRlLyR7cHJvamVjdElkfWAsIHsgdXNlcklkIH0pO1xuXHRyZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluZWFyUHJvZ3Jlc3MnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQcm9qZWN0UmVzdWx0cyB9IGZyb20gJy4vcHJvamVjdCc7XG5pbXBvcnQgeyBQcm9qZWN0QWRkIH0gZnJvbSAnLi9wcm9qZWN0LWFkZCc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4gfSBmcm9tICcuLi8uLi9jb21tb24vYW5pbWF0aW9ucyc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uL2NvbnRleHQnO1xuXG4vKiBBcGkgY2FsbHMgKi9cbmltcG9ydCB7IGZldGNoUHJvamVjdHNCeVVzZXIsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi9hcGknO1xuXG4vKiBHbG9iYWwgY29uc3RhbnRzICovXG5pbXBvcnQgeyBVU0VSX1JPTEVTIH0gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdE92ZXJ2aWV3KCkge1xuXHQvKiBTdGF0ZSAqL1xuXHRjb25zdCBbY3VycmVudFVzZXIsIHNldEN1cnJlbnRVc2VyXSA9IHVzZVN0YXRlKFtdKTtcblx0Y29uc3QgW25ld1Byb2plY3RJZCwgc2V0TmV3UHJvamVjdElkXSA9IHVzZVN0YXRlKCk7XG5cblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHVzZXJJZCA9IGF0b2IobG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoJz8nLCAnJykpO1xuXHRjb25zdCBpc0FkbWluID0gY3VycmVudFVzZXI/LnJvbGVzPy5pbmNsdWRlcyhVU0VSX1JPTEVTLlJPTEVfQURNSU4pO1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHsgaXNMb2FkaW5nOiBwcm9qZWN0c0xvYWRpbmcsIGRhdGEgPSB7fSB9ID0gdXNlUXVlcnkoXG5cdFx0UVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIsXG5cdFx0KCkgPT4gZmV0Y2hQcm9qZWN0c0J5VXNlcih7IHVzZXJJZCB9KSxcblx0XHR7XG5cdFx0XHRvblN1Y2Nlc3M6ICh7IHVzZXIgfSkgPT4gc2V0Q3VycmVudFVzZXIodXNlciksXG5cdFx0fVxuXHQpO1xuXG5cdC8qIENvbnN0YW50cyAgKi9cblx0Y29uc3QgeyBwcm9qZWN0cyA9IFtdIH0gPSBkYXRhO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxTdGF0aWNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IGN1cnJlbnRVc2VyIH19PlxuXHRcdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdFx0e3Byb2plY3RzTG9hZGluZyAmJiAoXG5cdFx0XHRcdFx0PG1vdGlvbi5kaXYgey4uLkZBREVfSU59PlxuXHRcdFx0XHRcdFx0PExpbmVhclByb2dyZXNzIGNvbG9yPVwic2Vjb25kYXJ5XCIgLz5cblx0XHRcdFx0XHQ8L21vdGlvbi5kaXY+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdHtpc0FkbWluICYmIDxQcm9qZWN0QWRkIHsuLi57IHNldE5ld1Byb2plY3RJZCB9fSAvPn1cblx0XHRcdDxQcm9qZWN0UmVzdWx0cyB7Li4ueyBwcm9qZWN0cywgbmV3UHJvamVjdElkLCBwcm9qZWN0c0xvYWRpbmcgfX0gLz5cblx0XHQ8L1N0YXRpY0NvbnRleHQuUHJvdmlkZXI+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRhcmVhQXV0b3NpemUnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tICdpY29ucy9jbG9zZS5zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBNb2RhbCwgRHJvcHpvbmUgfSBmcm9tICcuLi8uLi8uLi9jb21tb24nO1xuaW1wb3J0IHsgVXNlcnMgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3VzZXJzJztcbmltcG9ydCB7IFVzZXJBZGQgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3VzZXItYWRkJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdE1vZGFsKHsgcHJvamVjdCA9IHt9LCB1cGRhdGVQcm9qZWN0LCB0b2dnbGVNb2RhbCB9KSB7XG5cdC8qIENvbnN0YW50cyAgKi9cblx0Y29uc3QgeyBpZDogcHJvamVjdElkID0gbnVsbCwgdGl0bGUgPSAnJywgcHJvamVjdEltYWdlcyA9IFtdLCB1c2VycyA9IFtdIH0gPSBwcm9qZWN0O1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgZm9ybVJlZiA9IHVzZVJlZigpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxNb2RhbCB7Li4ueyB0b2dnbGVNb2RhbCB9fSBkb21FbGVtZW50PXtkb2N1bWVudC5ib2R5fT5cblx0XHRcdDxmb3JtXG5cdFx0XHRcdHJlZj17Zm9ybVJlZn1cblx0XHRcdFx0bWV0aG9kPVwiUE9TVFwiXG5cdFx0XHRcdGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fZm9ybVwiXG5cdFx0XHRcdG9uU3VibWl0PXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdHRvZ2dsZU1vZGFsKCk7XG5cdFx0XHRcdH19PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9faGVhZGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHQtNiBwdC1tZC0xMiBwYi0zXCI+XG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicHJvamVjdFRpdGxlXCI+XG5cdFx0XHRcdFx0XHR7dGl0bGV9XG5cdFx0XHRcdFx0PC9sYWJlbD5cblx0XHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRcdHR5cGU9XCJ0ZXh0XCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtLWNsZWFyIHRleHQtLXhsXCJcblx0XHRcdFx0XHRcdGlkPVwicHJvamVjdFRpdGxlXCJcblx0XHRcdFx0XHRcdG5hbWU9XCJ0aXRsZVwiXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cIlRoZSBwcm9qZWN0IG5hbWVcIlxuXHRcdFx0XHRcdFx0b25CbHVyPXsoKSA9PiB1cGRhdGVQcm9qZWN0KGZvcm1SZWYpfVxuXHRcdFx0XHRcdFx0YXV0b0ZvY3VzXG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHR0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fY2xvc2UgYnRuIGJ0bi1saW5rIG1sLWF1dG9cIlxuXHRcdFx0XHRcdFx0ZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxuXHRcdFx0XHRcdFx0YXJpYS1sYWJlbD1cIkNsb3NlXCJcblx0XHRcdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfVxuXHRcdFx0XHRcdFx0dGFiSW5kZXg9XCItMVwiPlxuXHRcdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTE0XCIgc3JjPXtjbG9zZUljb259IC8+XG5cdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fYm9keSBwdC0zIHBiLTEyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0yXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInByb2plY3REZXNjcmlwdGlvblwiPlxuXHRcdFx0XHRcdFx0XHRcdHtgV2hhdCdzIHRoaXMgcHJvamVjdCBhYm91dD9gfVxuXHRcdFx0XHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHRcdFx0XHQ8VGV4dGFyZWFBdXRvc2l6ZVxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtLXRleHQgZm9ybS1jb250cm9sLS1jbGVhciBtYi0xMFwiXG5cdFx0XHRcdFx0XHRcdFx0aWQ9XCJwcm9qZWN0RGVzY3JpcHRpb25cIlxuXHRcdFx0XHRcdFx0XHRcdG5hbWU9XCJkZXNjcmlwdGlvblwiXG5cdFx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJXaGF0J3MgdGhpcyBwcm9qZWN0IGFib3V0P1wiXG5cdFx0XHRcdFx0XHRcdFx0b25CbHVyPXsoKSA9PiB1cGRhdGVQcm9qZWN0KGZvcm1SZWYpfVxuXHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIGQtZmxleCBhbGlnbi1pdGVtcy1iYXNlbGluZSBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0XHRcdDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdCB9fSBzaXplPVwibGdcIiAvPlxuXHRcdFx0XHRcdFx0XHQ8VXNlckFkZCB7Li4ueyB1c2VycywgcHJvamVjdCB9fSAvPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PERyb3B6b25lIHsuLi57IHByb2plY3RJZCwgcHJvamVjdEltYWdlcyB9fSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Zvb3RlciBwYi02IHBiLW1kLTEyXCI+XG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0wIHctMTAwXCI+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctMSBtbC1hdXRvXCI+XG5cdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHR0eXBlPVwic3VibWl0XCJcblx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2J0biBidG4gYnRuLWJsb2NrIGJ0bi1zZWNvbmRhcnkgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdFx0PG1vdGlvbi5zcGFuIGNsYXNzTmFtZT1cImJ0bi10ZXh0XCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5TYXZlPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdDwvbW90aW9uLnNwYW4+XG5cdFx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9mb3JtPlxuXHRcdDwvTW9kYWw+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RNb2RhbCB9IGZyb20gXCIuL1Byb2plY3RNb2RhbFwiO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSwgdXNlUXVlcnlDbGllbnQgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFByb2plY3RNb2RhbCB9IGZyb20gJy4uL21vZGFscyc7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZFByb2plY3RJY29uIGZyb20gJ2ljb25zL2FkZF9wcm9qZWN0LnN2Zyc7XG5cbi8qIEFwaSBjYWxscyAqL1xuaW1wb3J0IHsgYWRkUHJvamVjdCwgUVVFUllfS0VZUywgZWRpdFByb2plY3QsIGZldGNoUHJvamVjdEJ5SWQgfSBmcm9tICcuLi8uLi9hcGknO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTQ0FMRV9GQURFIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0QWRkKHsgc2V0TmV3UHJvamVjdElkIH0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW3Byb2plY3RJZCwgc2V0UHJvamVjdElkXSA9IHVzZVN0YXRlKG51bGwpO1xuXHRjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG5cdC8qIEhvb2tzICovXG5cdGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgZGF0YTogcHJvamVjdCB9ID0gdXNlUXVlcnkoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSwgKCkgPT4gZmV0Y2hQcm9qZWN0QnlJZCh7IHByb2plY3RJZCB9KSwge1xuXHRcdGVuYWJsZWQ6ICEhcHJvamVjdElkLFxuXHR9KTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHNldE5ld1Byb2plY3RJZChwcm9qZWN0SWQpO1xuXHR9LCBbcHJvamVjdElkXSk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGFkZE11dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkUHJvamVjdCwge1xuXHRcdG9uU3VjY2VzczogKHsgaWQgfSkgPT4gc2V0UHJvamVjdElkKGlkKSxcblx0fSk7XG5cblx0Y29uc3QgZWRpdE11dGF0aW9uID0gdXNlTXV0YXRpb24oZWRpdFByb2plY3QsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IGludmFsaWRhdGVQcm9qZWN0KCksXG5cdH0pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHtcblx0XHRzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbik7XG5cblx0XHQvKiBNdXRhdGUgb24gbW9kYWwgb3BlbiAqL1xuXHRcdGlmICghbW9kYWxPcGVuKSBhZGRNdXRhdGlvbi5tdXRhdGUoKTtcblxuXHRcdC8qIFJlc2V0IGlkIG9uIGNsb3NlIG1vZGFsICovXG5cdFx0aWYgKG1vZGFsT3Blbikge1xuXHRcdFx0c2V0VGltZW91dCgoKSA9PiB7XG5cdFx0XHRcdHNldFByb2plY3RJZChudWxsKTtcblx0XHRcdH0sIDI1MCk7XG5cblx0XHRcdGludmFsaWRhdGVQcm9qZWN0KCk7XG5cdFx0fVxuXHR9O1xuXG5cdGNvbnN0IHVwZGF0ZVByb2plY3QgPSAoZm9ybVJlZikgPT4gZWRpdE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYsIHByb2plY3RJZCB9KTtcblx0Y29uc3QgaW52YWxpZGF0ZVByb2plY3QgPSAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLlBST0pFQ1RfQllfVVNFUik7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PD5cblx0XHRcdDxtb3Rpb24uYnV0dG9uXG5cdFx0XHRcdHsuLi5TQ0FMRV9GQURFfVxuXHRcdFx0XHRrZXk9XCJhZGQtcHJvamVjdFwiXG5cdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRjbGFzc05hbWU9XCJpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1pbnRlcmFjdGl2ZSBpY29uLXdyYXBwZXItLWRlZmF1bHQgYnRuIGJ0bi1saW5rIGJ0bi0tcHJvamVjdC1hZGRcIlxuXHRcdFx0XHRzdHlsZT17eyAnLS1zaXplJzogJzc1cHgnIH19XG5cdFx0XHRcdG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfT5cblx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTMwIHRleHQtc2Vjb25kYXJ5XCIgc3JjPXthZGRQcm9qZWN0SWNvbn0gLz5cblx0XHRcdDwvbW90aW9uLmJ1dHRvbj5cblx0XHRcdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0XHRcdHttb2RhbE9wZW4gJiYgPFByb2plY3RNb2RhbCB7Li4ueyBwcm9qZWN0LCB1cGRhdGVQcm9qZWN0LCB0b2dnbGVNb2RhbCB9fSAvPn1cblx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdDwvPlxuXHQpO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0QWRkIH0gZnJvbSBcIi4vUHJvamVjdEFkZFwiO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBQcm9qZWN0SW1hZ2UgZnJvbSAnLi9Qcm9qZWN0SW1hZ2UnO1xuaW1wb3J0IHsgVXNlcnMgfSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL3VzZXJzJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2hlY2tJY29uIGZyb20gJ2ljb25zL2NoZWNrLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoeyBwcm9qZWN0LCBzZWxlY3RlZFByb2plY3RzLCB1cGRhdGVTZWxlY3RlZFByb2plY3RzIH0pIHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHsgc2x1ZywgdGl0bGUsIHByb2plY3RJbWFnZXMsIHVzZXJzLCBhdXRob3IsIGlkIH0gPSBwcm9qZWN0O1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxhXG5cdFx0XHRocmVmPXtgcHJvamVjdHMvJHtzbHVnfWB9XG5cdFx0XHR0aXRsZT17dGl0bGV9XG5cdFx0XHRjbGFzc05hbWU9e2BjYXJkIGNhcmQtLWxpbmsgY2FyZC0tcHJvZHVjdCAke3NlbGVjdGVkUHJvamVjdHMuaW5jbHVkZXMoaWQpICYmICdpcy1zZWxlY3RlZCd9YH0+XG5cdFx0XHQ8UHJvamVjdEltYWdlIHsuLi57IHByb2plY3RJbWFnZXMgfX0gLz5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uXCI+XG5cdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWItMlwiPnt0aXRsZSA/IHRpdGxlIDogJ0FkZCBhIG5pY2UgdGl0bGUnfTwvcD5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdDogeyBhdXRob3IgfSwgbGF5b3V0OiAnbWluaW1hbCcgfX0gLz5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fc2VsZWN0XCI+XG5cdFx0XHRcdDxkaXZcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJjYXJkX19zZWxlY3QtdG9nZ2xlXCJcblx0XHRcdFx0XHRvbkNsaWNrPXsoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHR1cGRhdGVTZWxlY3RlZFByb2plY3RzKGlkKTtcblx0XHRcdFx0XHR9fT5cblx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImNhcmRfX3NlbGVjdC1pY29uIGljb24gaWNvbi0tOFwiIHNyYz17Y2hlY2tJY29ufSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvYT5cblx0KTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSAnaWNvbnMvY2xvc2Uuc3ZnJztcbmltcG9ydCBsZWF2ZUljb24gZnJvbSAnaWNvbnMvbGVhdmUuc3ZnJztcbmltcG9ydCBhcmNoaXZlSWNvbiBmcm9tICdpY29ucy9hcmNoaXZlLnN2Zyc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFRSQU5TRk9STV9VUCB9IGZyb20gJy4uLy4uLy4uL2NvbW1vbi9hbmltYXRpb25zJztcblxuLyogQXBpIGNhbGxzICovXG5pbXBvcnQgeyBkZWxldGVQcm9qZWN0cywgbGVhdmVQcm9qZWN0cywgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL2FwaSc7XG5cbi8qIENvbnRleHQgKi9cbmltcG9ydCBTdGF0aWNDb250ZXh0IGZyb20gJy4uLy4uL2NvbnRleHQnO1xuXG4vKiBHbG9iYWwgY29uc3RhbnRzICovXG5pbXBvcnQgeyBVU0VSX1JPTEVTIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzJztcbmltcG9ydCB7IExvYWRpbmdXcmFwcGVyIH0gZnJvbSAnLi4vLi4vLi4vY29tbW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdEFjdGlvbk1lbnUoeyBzZWxlY3RlZFByb2plY3RzLCByZXNldFNlbGVjdGVkUHJvamVjdHMgfSkge1xuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cdGNvbnN0IHsgY3VycmVudFVzZXIgfSA9IHVzZUNvbnRleHQoU3RhdGljQ29udGV4dCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGxlYXZlUHJvamVjdHNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGxlYXZlUHJvamVjdHMsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuUFJPSkVDVF9CWV9VU0VSKTtcblx0XHRcdHJlc2V0U2VsZWN0ZWRQcm9qZWN0cygpO1xuXHRcdH0sXG5cdH0pO1xuXG5cdGNvbnN0IGRlbGV0ZVByb2plY3RzTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVQcm9qZWN0cywge1xuXHRcdG9uU3VjY2VzczogKCkgPT4ge1xuXHRcdFx0cXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIpO1xuXHRcdFx0cmVzZXRTZWxlY3RlZFByb2plY3RzKCk7XG5cdFx0fSxcblx0fSk7XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PG1vdGlvbi5kaXYgey4uLlRSQU5TRk9STV9VUH0gY2xhc3NOYW1lPVwiYmFyIGJhci0tcHJvamVjdFwiPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cblx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0dHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJhcl9fYnRuIGJ0biBidG4tbGluayBkLWlubGluZS1mbGV4IHRleHQtd2hpdGVcIlxuXHRcdFx0XHRcdFx0XHRvbkNsaWNrPXtyZXNldFNlbGVjdGVkUHJvamVjdHN9PlxuXHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTRcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cblx0XHRcdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHRcdFx0PHAgY2xhc3NOYW1lPVwibWwtMiBtYi0wXCI+e3NlbGVjdGVkUHJvamVjdHMubGVuZ3RofSBzZWxlY3RlZDwvcD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIG1sLWF1dG9cIj5cblx0XHRcdFx0XHRcdDx1bCBjbGFzc05hbWU9XCJiYXJfX2xpc3QgbGlzdCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdFx0XHRcdHshY3VycmVudFVzZXIucm9sZXMuaW5jbHVkZXMoVVNFUl9ST0xFUy5ST0xFX0FETUlOKSAmJiAoXG5cdFx0XHRcdFx0XHRcdFx0PGxpIGNsYXNzTmFtZT1cImxpc3RfX2l0ZW1cIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYmFyX19idG4gYnRuIGJ0bi1saW5rIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC1kZWNvcmF0aW9uLW5vbmVcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvbkNsaWNrPXsoKSA9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxlYXZlUHJvamVjdHNNdXRhdGlvbi5tdXRhdGUoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cHJvamVjdElkczogc2VsZWN0ZWRQcm9qZWN0cyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVzZXJJZDogY3VycmVudFVzZXIuaWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS13YXJuaW5nIGljb24td3JhcHBlci0taW50ZXJhY3RpdmVcIj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8TG9hZGluZ1dyYXBwZXJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGxvYWRpbmc9e2xlYXZlUHJvamVjdHNNdXRhdGlvbi5pc0xvYWRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkZXJTaXplPXsxMn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzZXM9e3sgbG9hZGVyQ2xhc3NlczogJ3Bvc2l0aW9uLWFic29sdXRlIGQtZmxleCB0ZXh0LXdhcm5pbmcnIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdyYXBwZXI9XCJzdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpY29uIGljb24tLTEyIHRleHQtd2FybmluZ1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNyYz17bGVhdmVJY29ufVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Lz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xvYWRpbmdXcmFwcGVyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYnRuX190ZXh0IHRleHQtd2hpdGUgbWwtMlwiPkxlYXZlPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0e2N1cnJlbnRVc2VyLnJvbGVzLmluY2x1ZGVzKFVTRVJfUk9MRVMuUk9MRV9BRE1JTikgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJsaXN0X19pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJhcl9fYnRuIGJ0biBidG4tbGluayBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHRleHQtZGVjb3JhdGlvbi1ub25lXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaWNvbi13cmFwcGVyIGljb24td3JhcHBlci0tZGVmYXVsdCBpY29uLXdyYXBwZXItLWludGVyYWN0aXZlXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PExvYWRpbmdXcmFwcGVyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkaW5nPXtsZWF2ZVByb2plY3RzTXV0YXRpb24uaXNMb2FkaW5nfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9hZGVyU2l6ZT17MTJ9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc2VzPXt7IGxvYWRlckNsYXNzZXM6ICdwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXggdGV4dC1zZWNvbmRhcnknIH19PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFJlYWN0U1ZHXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdyYXBwZXI9XCJzdmdcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzc05hbWU9XCJpY29uIGljb24tLTEyIHRleHQtc2Vjb25kYXJ5XCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3JjPXthcmNoaXZlSWNvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Mb2FkaW5nV3JhcHBlcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImJ0bl9fdGV4dCB0ZXh0LXdoaXRlIG1sLTJcIj5BcmNoaXZlPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0e2N1cnJlbnRVc2VyLnJvbGVzLmluY2x1ZGVzKFVTRVJfUk9MRVMuUk9MRV9BRE1JTikgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdDxsaSBjbGFzc05hbWU9XCJsaXN0X19pdGVtXCI+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8YnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImJhcl9fYnRuIGJ0biBidG4tbGluayBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHRleHQtZGVjb3JhdGlvbi1ub25lXCJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGVsZXRlUHJvamVjdHNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWRzOiBzZWxlY3RlZFByb2plY3RzIH0pfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJpY29uLXdyYXBwZXIgaWNvbi13cmFwcGVyLS1kYW5nZXIgaWNvbi13cmFwcGVyLS1pbnRlcmFjdGl2ZVwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxMb2FkaW5nV3JhcHBlclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bG9hZGluZz17ZGVsZXRlUHJvamVjdHNNdXRhdGlvbi5pc0xvYWRpbmd9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRsb2FkZXJTaXplPXsxMn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzZXM9e3sgbG9hZGVyQ2xhc3NlczogJ3Bvc2l0aW9uLWFic29sdXRlIGQtZmxleCB0ZXh0LWRhbmdlcicgfX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8UmVhY3RTVkdcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d3JhcHBlcj1cInN2Z1wiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTAgdGV4dC1kYW5nZXJcIlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRzcmM9e2Nsb3NlSWNvbn1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9Mb2FkaW5nV3JhcHBlcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cImJ0bl9fdGV4dCB0ZXh0LXdoaXRlIG1sLTJcIj5EZWxldGU8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHQpfVxuXHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0XHQ8L2Rpdj5cblx0XHQ8L21vdGlvbi5kaXY+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tIFwicmVhY3Qtc3ZnXCI7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZEltYWdlSWNvbiBmcm9tIFwiaWNvbnMvYWRkX2ltYWdlLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0SW1hZ2UoeyBwcm9qZWN0SW1hZ2VzIH0pIHtcbiAgICAvKiBDb25zdGFudHMgKi9cbiAgICBjb25zdCB7IGltYWdlLCB0aXRsZSB9ID0gcHJvamVjdEltYWdlc1swXSB8fCB7fTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9faW1hZ2UgYm9yZGVyIG0tMlwiPlxuICAgICAgICAgICAge2ltYWdlICYmIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPXtpbWFnZX0gc3JjU2V0PXtgJHtpbWFnZX0gMnhgfSBhbHQ9e3RpdGxlfSAvPn1cbiAgICAgICAgICAgIHshaW1hZ2UgJiYgPFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTQ4IHRleHQtbXV0ZWQtLTQwXCIgc3JjPXthZGRJbWFnZUljb259IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgUHJvamVjdEFjdGlvbk1lbnUgZnJvbSAnLi9Qcm9qZWN0QWN0aW9uTWVudSc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4sIFNUQUdHRVJfVVAgfSBmcm9tICcuLi8uLi8uLi9jb21tb24vYW5pbWF0aW9ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXN1bHRzKHsgcHJvamVjdHMsIG5ld1Byb2plY3RJZCwgcHJvamVjdHNMb2FkaW5nIH0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW3NlbGVjdGVkUHJvamVjdHMsIHNldFNlbGVjdGVkUHJvamVjdHNdID0gdXNlU3RhdGUoW10pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCB1cGRhdGVTZWxlY3RlZFByb2plY3RzID0gKGlkKSA9PiB7XG5cdFx0c2V0U2VsZWN0ZWRQcm9qZWN0cygocHJvamVjdHMpID0+IHtcblx0XHRcdGlmIChwcm9qZWN0cy5pbmNsdWRlcyhpZCkpIHtcblx0XHRcdFx0cmV0dXJuIHByb2plY3RzLmZpbHRlcigocHJvamVjdElkKSA9PiBwcm9qZWN0SWQgIT09IGlkKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIFsuLi5wcm9qZWN0cywgaWRdO1xuXHRcdH0pO1xuXHR9O1xuXG5cdGNvbnN0IHJlc2V0U2VsZWN0ZWRQcm9qZWN0cyA9ICgpID0+IHNldFNlbGVjdGVkUHJvamVjdHMoW10pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDw+XG5cdFx0XHQ8aDEgY2xhc3NOYW1lPVwiaDUgdGV4dC13aGl0ZSBtYi02XCI+WW91ciBwcm9qZWN0czwvaDE+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7IXByb2plY3RzTG9hZGluZyAmJiBwcm9qZWN0cy5sZW5ndGggPT09IDAgJiYgKFxuXHRcdFx0XHRcdDxtb3Rpb24ucCB7Li4uRkFERV9JTn0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi0wIHBvc2l0aW9uLWFic29sdXRlXCI+XG5cdFx0XHRcdFx0XHR7YFlvdSBkb24ndCBoYXZlIGFueSBwcm9qZWN0cyB5ZXRgfVxuXHRcdFx0XHRcdDwvbW90aW9uLnA+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtgcm93IHJvdy0tZXF1YWxpemVkIGd1dHRlcnMtNSAke3NlbGVjdGVkUHJvamVjdHMubGVuZ3RoID4gMCAmJiAnaGFzLXNlbGVjdGlvbnMnfWB9PlxuXHRcdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHRcdHtwcm9qZWN0c1xuXHRcdFx0XHRcdFx0LmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCAhPT0gbmV3UHJvamVjdElkKVxuXHRcdFx0XHRcdFx0Lm1hcCgocHJvamVjdCwgcHJvamVjdEluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHRcdDxtb3Rpb24uZGl2XG5cdFx0XHRcdFx0XHRcdFx0ey4uLlNUQUdHRVJfVVAocHJvamVjdEluZGV4KX1cblx0XHRcdFx0XHRcdFx0XHRrZXk9e3Byb2plY3QuaWR9XG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC14bC0zIGNvbC14eGwtMlwiXG5cdFx0XHRcdFx0XHRcdFx0bGF5b3V0PlxuXHRcdFx0XHRcdFx0XHRcdDxQcm9qZWN0IHsuLi57IHByb2plY3QsIHNlbGVjdGVkUHJvamVjdHMsIHVwZGF0ZVNlbGVjdGVkUHJvamVjdHMgfX0gLz5cblx0XHRcdFx0XHRcdFx0PC9tb3Rpb24uZGl2PlxuXHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdDwvQW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7c2VsZWN0ZWRQcm9qZWN0cy5sZW5ndGggPiAwICYmIDxQcm9qZWN0QWN0aW9uTWVudSB7Li4ueyBzZWxlY3RlZFByb2plY3RzLCByZXNldFNlbGVjdGVkUHJvamVjdHMgfX0gLz59XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHQ8Lz5cblx0KTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdFJlc3VsdHMgfSBmcm9tIFwiLi9Qcm9qZWN0UmVzdWx0c1wiO1xuIiwiZXhwb3J0IGNvbnN0IFVTRVJfUk9MRVMgPSB7XG5cdFJPTEVfQURNSU46ICdST0xFX0FETUlOJyxcblx0Uk9MRV9VU0VSOiAnUk9MRV9VU0VSJyxcblx0Uk9MRV9VU0VSX0JBU0lDOiAnUk9MRV9VU0VSX0JBU0lDJyxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBTdGF0aWNDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCgpO1xuZXhwb3J0IGRlZmF1bHQgU3RhdGljQ29udGV4dDtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgUHJvamVjdE92ZXJ2aWV3IGZyb20gXCIuL2NvbXBvbmVudHMvUHJvamVjdE92ZXJ2aWV3XCI7XG5cbi8qIENsaWVudCAqL1xuY29uc3QgY2xpZW50ID0gbmV3IFF1ZXJ5Q2xpZW50KHtcbiAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICBxdWVyaWVzOiB7XG4gICAgICAgICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSxcbn0pO1xuXG4vKiBSZW5kZXIgKi9cbmNvbnN0IHByb2plY3RPdmVydmlld05vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RPdmVydmlld1wiKTtcbmlmIChwcm9qZWN0T3ZlcnZpZXdOb2RlICE9PSBudWxsKSB7XG4gICAgcmVuZGVyKFxuICAgICAgICA8UXVlcnlDbGllbnRQcm92aWRlciB7Li4ueyBjbGllbnQgfX0+XG4gICAgICAgICAgICA8UHJvamVjdE92ZXJ2aWV3IHsuLi5wcm9qZWN0T3ZlcnZpZXdOb2RlLmRhdGFzZXR9IC8+XG4gICAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj4sXG4gICAgICAgIHByb2plY3RPdmVydmlld05vZGVcbiAgICApO1xufVxuIiwiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCAncGFyc2xleWpzJztcblxuY29uc3QgcGFyc2xleUNvbmZpZyA9IHtcbiAgICBlcnJvckNsYXNzOiAnaXMtZXJyb3InLFxuICAgIGV4Y2x1ZGVkOiAnaW5wdXRbdHlwZT1idXR0b25dLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9cmVzZXRdLCBpbnB1dFt0eXBlPWhpZGRlbl0sIFtkaXNhYmxlZF0sIDpoaWRkZW4nLFxuICAgIHN1Y2Nlc3NDbGFzczogJ2lzLXN1Y2Nlc3MnXG59O1xuXG4kKCdmb3JtOm5vdChbbm92YWxpZGF0ZV0pJykucGFyc2xleShwYXJzbGV5Q29uZmlnKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=