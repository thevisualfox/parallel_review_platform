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

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
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
  return Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], null, boxOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var icons_add_image_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! icons/add_image.svg */ "./assets/app/img/icons/add_image.svg");
/* harmony import */ var icons_add_image_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(icons_add_image_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _project_overview_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../project-overview/api */ "./assets/app/js/react/project-overview/api.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Packages */





/* Assets */



/* Animations */


/* Api calls */


function Dropzone(_ref) {
  var projectId = _ref.projectId,
      projectImages = _ref.projectImages;

  /* Contants */
  var COLUMN_LAYOUT = "col-12 col-md-6 col-lg-4 col-xl-3";
  /* Hooks */

  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useQueryClient"])();

  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_2__["useDropzone"])({
    accept: "image/*",
    noClick: true,
    onDrop: function onDrop(acceptedFiles) {
      return updateProjectImages("add", {
        images: acceptedFiles
      });
    }
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive;
  /* Mutations */


  var addProjectImagesMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_project_overview_api__WEBPACK_IMPORTED_MODULE_8__["addProjectImages"], {
    onSuccess: function onSuccess() {
      return queryClient.invalidateQueries([_project_overview_api__WEBPACK_IMPORTED_MODULE_8__["QUERY_KEYS"].PROJECT_BY_ID, projectId]);
    }
  });
  var deleteProjectImagesMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_project_overview_api__WEBPACK_IMPORTED_MODULE_8__["deleteProjectImages"], {
    onSuccess: function onSuccess() {
      return queryClient.invalidateQueries([_project_overview_api__WEBPACK_IMPORTED_MODULE_8__["QUERY_KEYS"].PROJECT_BY_ID, projectId]);
    }
  });
  /* Callbacks */

  var updateProjectImages = function updateProjectImages(action, props) {
    if (action === "add") addProjectImagesMutation.mutate(_objectSpread({
      projectId: projectId
    }, props));
    if (action === "delete") deleteProjectImagesMutation.mutate(_objectSpread({
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
    }, Object(_animations__WEBPACK_IMPORTED_MODULE_7__["STAGGER_UP"])(imageIndex), {
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
        updateProjectImages("delete", {
          id: id
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
      wrapper: "svg",
      className: "icon icon--8 text-base mt-0",
      src: icons_close_svg__WEBPACK_IMPORTED_MODULE_5___default.a
    }))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_3__["motion"].div, _extends({
    key: "add-image"
  }, Object(_animations__WEBPACK_IMPORTED_MODULE_7__["STAGGER_UP"])(projectImages.length), {
    className: COLUMN_LAYOUT,
    layout: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropzoneInner, {
    updateProjectImages: updateProjectImages,
    isParentDragActive: isDragActive
  })))));
}
/* Inner dropzone */

var DropzoneInner = function DropzoneInner(_ref3) {
  var updateProjectImages = _ref3.updateProjectImages,
      isParentDragActive = _ref3.isParentDragActive;

  /* Hooks */
  var _useDropzone2 = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_2__["useDropzone"])({
    accept: "image/*",
    noDragEventsBubbling: true,
    onDrop: function onDrop(acceptedFiles) {
      return updateProjectImages("add", {
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
    className: "dropzone__container card card--link ".concat((isDragActive || isParentDragActive) && "is-pulsing", " h-100 mb-0")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body d-flex align-items-center justify-content-center p-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn-text d-flex flex-column align-items-center text-white text-muted--40"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--48",
    src: icons_add_image_svg__WEBPACK_IMPORTED_MODULE_6___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text--sm mt-1"
  }, isDragActive || isParentDragActive ? "Drop the images" : "Add some images")))));
};

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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
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
      className: "container d-flex flex-grow-1 px-0"
    }, children)));
  };
  /* Render */


  if (domElement) {
    return Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(render(), domElement);
  }

  return render();
}

/***/ }),

/***/ "./assets/app/js/react/common/animations.js":
/*!**************************************************!*\
  !*** ./assets/app/js/react/common/animations.js ***!
  \**************************************************/
/*! exports provided: FADE_IN, FADE_IN_UP, TRANSFORM_UP, SCALE_FADE, STAGGER_UP, STAGGER_LEFT, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FADE_IN", function() { return FADE_IN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FADE_IN_UP", function() { return FADE_IN_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSFORM_UP", function() { return TRANSFORM_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCALE_FADE", function() { return SCALE_FADE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STAGGER_UP", function() { return STAGGER_UP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STAGGER_LEFT", function() { return STAGGER_LEFT; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



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
      type: "spring",
      damping: 42,
      stiffness: 800
    }
  },
  exit: {
    y: 200,
    opacity: 0,
    transition: {
      type: "spring",
      damping: 42,
      stiffness: 1200
    }
  }
};
var TRANSFORM_UP = {
  initial: {
    y: "100%"
  },
  animate: {
    y: "0%",
    transition: {
      type: "spring",
      damping: 41,
      stiffness: 600
    }
  },
  exit: {
    y: "100%",
    transition: {
      type: "spring",
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
        type: "spring",
        damping: 30,
        stiffness: 450,
        delay: index * 0.035
      }
    },
    exit: {
      opacity: 0,
      scale: 0.25,
      transition: {
        type: "spring",
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
        type: "spring",
        damping: 30,
        stiffness: 300,
        delay: index * 0.035
      }
    },
    exit: {
      opacity: 0,
      x: 10,
      transition: {
        type: "spring",
        damping: 30,
        stiffness: 600
      }
    }
  };
};

var AnimationWrapper = function AnimationWrapper(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, props, children);
};


/* harmony default export */ __webpack_exports__["default"] = (AnimationWrapper);

/***/ }),

/***/ "./assets/app/js/react/common/index.js":
/*!*********************************************!*\
  !*** ./assets/app/js/react/common/index.js ***!
  \*********************************************/
/*! exports provided: Dropzone, Modal, Box */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropzone */ "./assets/app/js/react/common/Dropzone.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropzone", function() { return _Dropzone__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./assets/app/js/react/common/Modal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Box */ "./assets/app/js/react/common/Box.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Box", function() { return _Box__WEBPACK_IMPORTED_MODULE_2__["default"]; });





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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_3__["Box"], _extends({
    header: "Select users",
    content: "Choose some users to collaborate with."
  }, {
    boxOpen: boxOpen,
    toggleBox: toggleBox
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UserAddSearch__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState2 = _slicedToArray(_useState, 2),
      query = _useState2[0],
      setQuery = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      focusedUser = _useState4[0],
      setFocusedUser = _useState4[1];
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
      setQuery("");
    }
  });
  /* Callbacks */

  var handleChange = function handleChange(_ref2) {
    var value = _ref2.target.value;
    return setQuery(value);
  };

  var handleOnKeyDown = function handleOnKeyDown(event) {
    if (["Enter", "Tab"].includes(event.key)) {
      event.preventDefault();

      if (query && focusedUser && Object(_helpers__WEBPACK_IMPORTED_MODULE_4__["isEmail"])(focusedUser.email)) {
        addUserMutation.mutate({
          projectId: project.id,
          email: focusedUser.email
        });
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_users__WEBPACK_IMPORTED_MODULE_3__["Users"], _extends({
    users: users,
    project: project
  }, {
    variant: "interactive",
    size: "xl"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    users: users,
    query: query,
    handleClick: handleClick,
    focusedUser: focusedUser,
    setFocusedUser: setFocusedUser,
    userMutationLoading: addUserMutation.isLoading
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users */ "./assets/app/js/react/components/users/index.js");
/* harmony import */ var _project_overview_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../project-overview/api */ "./assets/app/js/react/project-overview/api.js");
/* harmony import */ var _helpers_filterUsers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/filterUsers */ "./assets/app/js/react/helpers/filterUsers.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */



/* Animations */


/* Components */


/* Api calls */


/* Helpers */


function UserAddSearchResults(_ref) {
  var users = _ref.users,
      query = _ref.query,
      handleClick = _ref.handleClick,
      focusedUser = _ref.focusedUser,
      setFocusedUser = _ref.setFocusedUser,
      userMutationLoading = _ref.userMutationLoading;

  /* Queries */
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_project_overview_api__WEBPACK_IMPORTED_MODULE_5__["QUERY_KEYS"].GLOBAL_USERS, _project_overview_api__WEBPACK_IMPORTED_MODULE_5__["fetchGobalUsers"]),
      _useQuery$data = _useQuery.data,
      globalUsers = _useQuery$data === void 0 ? [] : _useQuery$data,
      globalUsersLoading = _useQuery.isLoading;
  /* Constants */


  var filteredUsers = Object(_helpers_filterUsers__WEBPACK_IMPORTED_MODULE_6__["default"])(globalUsers, users, query);
  /* Effects */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (filteredUsers.length > 0 && !userMutationLoading) {
      setFocusedUser(filteredUsers[0]);
    }
  }, [filteredUsers]);
  /* Render filtered results */

  var filteredResults = function filteredResults() {
    var newUser = {
      email: query,
      username: "New user",
      userColor: "#CC25E8"
    };

    if (filteredUsers.length > 0) {
      return filteredUsers.map(function (user) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].li, _extends({}, _common_animations__WEBPACK_IMPORTED_MODULE_3__["FADE_IN"], {
          key: user.id,
          className: "list__item vr-3"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_users__WEBPACK_IMPORTED_MODULE_4__["UserSelect"], _extends({
          user: user,
          handleClick: handleClick,
          setFocusedUser: setFocusedUser
        }, {
          isFocused: user.email === (focusedUser === null || focusedUser === void 0 ? void 0 : focusedUser.email) && query,
          isLoading: userMutationLoading
        })));
      });
    }

    if (!globalUsersLoading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].li, _extends({}, _common_animations__WEBPACK_IMPORTED_MODULE_3__["FADE_IN"], {
        key: "New user",
        className: "list__item is-focused vr-3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_users__WEBPACK_IMPORTED_MODULE_4__["UserSelect"], _extends({
        user: newUser,
        handleClick: handleClick,
        setFocusedUser: setFocusedUser
      }, {
        isFocused: query.length,
        isLoading: userMutationLoading
      })));
    }
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, query && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].ul, _extends({}, _common_animations__WEBPACK_IMPORTED_MODULE_3__["FADE_IN"], {
    className: "box__list list"
  }), filteredResults()));
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
/* Packages */



/* Assets */



/* Api calls */


function User(_ref) {
  var user = _ref.user,
      project = _ref.project,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "default" : _ref$variant,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "md" : _ref$size;

  /* Hooks */
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQueryClient"])();
  /* Constants */

  var projectId = project.id,
      author = project.author;
  var userId = user.id,
      email = user.email;
  var isAuthor = email === author;
  var classes = ["user", "user--".concat(size), "user--".concat(variant), isAuthor && "user--author"].join(" ");
  /* Mutations */

  var deleteUserMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_project_overview_api__WEBPACK_IMPORTED_MODULE_5__["deleteUser"], {
    onSuccess: function onSuccess() {
      return queryClient.invalidateQueries([_project_overview_api__WEBPACK_IMPORTED_MODULE_5__["QUERY_KEYS"].PROJECT_BY_ID, projectId]);
    }
  });
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserAvatar, user, variant === "interactive" && !isAuthor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
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
      children = _ref2.children;

  /* Constants */
  var userInitials = username.split(" ").map(function (word) {
    return word[0].toUpperCase();
  });
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__avatar",
    style: {
      "--theme": userColor
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user__initials"
  }, userInitials), children);
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
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var icons_add_user_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/add_user.svg */ "./assets/app/img/icons/add_user.svg");
/* harmony import */ var icons_add_user_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_add_user_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./User */ "./assets/app/js/react/components/users/User.jsx");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/animations */ "./assets/app/js/react/common/animations.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */




/* Assets */


/* Components */


/* Animations */


function UserSelect(_ref) {
  var user = _ref.user,
      handleClick = _ref.handleClick,
      isFocused = _ref.isFocused,
      setFocusedUser = _ref.setFocusedUser,
      isLoading = _ref.isLoading;

  /* Effects */
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    isFocused && setFocusedUser(user);
  }, [isFocused]);
  /* Callbacks */

  var handleStatus = function handleStatus(action) {
    setFocusedUser(action === "enter" ? user : null);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "user user--select ".concat(isFocused && "is-focused", " user--xl"),
    onClick: function onClick() {
      return handleClick(user.email);
    },
    onMouseEnter: function onMouseEnter() {
      return handleStatus("enter");
    },
    onMouseLeave: function onMouseLeave() {
      return handleStatus("leave");
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_5__["UserAvatar"], user), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_5__["UserInfo"], user), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__add text-secondary rounded-circle ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserStatus, {
    loading: isLoading && isFocused
  }))));
}

var UserStatus = function UserStatus(_ref2) {
  var loading = _ref2.loading;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_animations__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
    key: "loader",
    className: "position-absolute d-flex"
  }, _common_animations__WEBPACK_IMPORTED_MODULE_6__["SCALE_FADE"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "inherit",
    size: 12
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_animations__WEBPACK_IMPORTED_MODULE_6__["default"], _extends({
    key: "default",
    className: "position-absolute d-flex"
  }, _common_animations__WEBPACK_IMPORTED_MODULE_6__["SCALE_FADE"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_3__["ReactSVG"], {
    wrapper: "svg",
    className: "user__add-icon icon icon--12 text-secondary",
    src: icons_add_user_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  })));
};

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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./User */ "./assets/app/js/react/components/users/User.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_0__["AnimatePresence"], {
    initial: false
  }, users.slice(0, sliceAmount).map(function (user) {
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
/*! exports provided: isEmail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isEmail */ "./assets/app/js/react/helpers/isEmail.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEmail", function() { return _isEmail__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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
/*! exports provided: QUERY_KEYS, fetchProjectsByUser, fetchProjectById, addProject, deleteProject, editProject, addProjectImages, deleteProjectImages, fetchGobalUsers, addUser, deleteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUERY_KEYS", function() { return QUERY_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProjectsByUser", function() { return fetchProjectsByUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProjectById", function() { return fetchProjectById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProject", function() { return addProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProject", function() { return deleteProject; });
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
  PROJECT_BY_USER: "project_by_user",
  PROJECT_BY_ID: "project_by_id",
  GLOBAL_USERS: "global_users"
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
            url = "/api/projects/get";

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
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/projects/add");

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
var deleteProject = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref6) {
    var projectId, result;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            projectId = _ref6.projectId;
            _context4.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/projects/delete/".concat(projectId));

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

  return function deleteProject(_x3) {
    return _ref7.apply(this, arguments);
  };
}();
var editProject = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref8) {
    var formRef, projectId, params, result;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            formRef = _ref8.formRef, projectId = _ref8.projectId;
            params = new FormData(formRef.current);
            _context5.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/projects/edit/".concat(projectId), params);

          case 4:
            result = _context5.sent;
            return _context5.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 6:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function editProject(_x4) {
    return _ref9.apply(this, arguments);
  };
}();
/* Project image related calls */

var addProjectImages = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref10) {
    var projectId, images, params, result;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            projectId = _ref10.projectId, images = _ref10.images;
            params = new FormData();
            images.forEach(function (image) {
              return params.append("images[]", image);
            });
            _context6.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/images/add/".concat(projectId), params);

          case 5:
            result = _context6.sent;
            return _context6.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 7:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function addProjectImages(_x5) {
    return _ref11.apply(this, arguments);
  };
}();
var deleteProjectImages = /*#__PURE__*/function () {
  var _ref13 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(_ref12) {
    var projectId, id, result;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            projectId = _ref12.projectId, id = _ref12.id;
            _context7.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/images/delete/".concat(projectId), {
              id: id
            });

          case 3:
            result = _context7.sent;
            return _context7.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 5:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function deleteProjectImages(_x6) {
    return _ref13.apply(this, arguments);
  };
}();
/* User related calls */

var fetchGobalUsers = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
    var result;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/users/get");

          case 2:
            result = _context8.sent;
            return _context8.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function fetchGobalUsers() {
    return _ref14.apply(this, arguments);
  };
}();
var addUser = /*#__PURE__*/function () {
  var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(_ref15) {
    var projectId, email, result;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            projectId = _ref15.projectId, email = _ref15.email;
            _context9.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/users/add/".concat(projectId), {
              email: email
            });

          case 3:
            result = _context9.sent;
            return _context9.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 5:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function addUser(_x7) {
    return _ref16.apply(this, arguments);
  };
}();
var deleteUser = /*#__PURE__*/function () {
  var _ref18 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(_ref17) {
    var projectId, userId, result;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            projectId = _ref17.projectId, userId = _ref17.userId;
            _context10.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/users/delete/".concat(projectId), {
              userId: userId
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

  return function deleteUser(_x8) {
    return _ref18.apply(this, arguments);
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ "./assets/app/js/react/project-overview/components/project/index.js");
/* harmony import */ var _project_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-add */ "./assets/app/js/react/project-overview/components/project-add/index.js");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../api */ "./assets/app/js/react/project-overview/api.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */




/* Components */



/* Animations */


/* Api calls */


function ProjectOverview() {
  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      isAdmin = _useState2[0],
      setIsAdmin = _useState2[1];

  var userId = atob(location.search.replace("?", ""));
  /* Hooks */

  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useQuery"])(_api__WEBPACK_IMPORTED_MODULE_7__["QUERY_KEYS"].PROJECT_BY_USER, function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_7__["fetchProjectsByUser"])({
      userId: userId
    });
  }, {
    onSuccess: function onSuccess(_ref) {
      var user = _ref.user;
      return setIsAdmin(user.roles.includes("ROLE_ADMIN"));
    }
  }),
      projectsLoading = _useQuery.isLoading,
      _useQuery$data = _useQuery.data,
      data = _useQuery$data === void 0 ? {} : _useQuery$data;
  /* Constants  */


  var _data$projects = data.projects,
      projects = _data$projects === void 0 ? [] : _data$projects;
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], null, projectsLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _common_animations__WEBPACK_IMPORTED_MODULE_6__["FADE_IN"], /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_1__["default"], {
    color: "secondary"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_project__WEBPACK_IMPORTED_MODULE_4__["ProjectResults"], {
    projects: projects
  }, isAdmin && !projectsLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({}, Object(_common_animations__WEBPACK_IMPORTED_MODULE_6__["STAGGER_UP"])(projects.length), {
    key: "add-project",
    className: "col-12 col-md-6 col-lg-4 col-xl-3",
    layout: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_project_add__WEBPACK_IMPORTED_MODULE_5__["ProjectAdd"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], null, !isAdmin && !projectsLoading && projects.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].p, _extends({}, Object(_common_animations__WEBPACK_IMPORTED_MODULE_6__["STAGGER_UP"])(), {
    className: "text-white",
    layout: true
  }), "You don't have any projects yet")))));
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common */ "./assets/app/js/react/common/index.js");
/* harmony import */ var _components_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/users */ "./assets/app/js/react/components/users/index.js");
/* harmony import */ var _components_user_add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/user-add */ "./assets/app/js/react/components/user-add/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */




/* Assets */


/* Components */




function ProjectModal(_ref) {
  var _ref$project = _ref.project,
      project = _ref$project === void 0 ? {} : _ref$project,
      toggleModal = _ref.toggleModal,
      _onSubmit = _ref.onSubmit,
      _ref$titlePlaceholder = _ref.titlePlaceholder,
      titlePlaceholder = _ref$titlePlaceholder === void 0 ? "The project name" : _ref$titlePlaceholder,
      _ref$descriptionPlace = _ref.descriptionPlaceholder,
      descriptionPlaceholder = _ref$descriptionPlace === void 0 ? "What's this project about?" : _ref$descriptionPlace;

  /* Constants  */
  var _project$id = project.id,
      projectId = _project$id === void 0 ? null : _project$id,
      _project$title = project.title,
      title = _project$title === void 0 ? "" : _project$title,
      _project$description = project.description,
      description = _project$description === void 0 ? "" : _project$description,
      _project$projectImage = project.projectImages,
      projectImages = _project$projectImage === void 0 ? [] : _project$projectImage,
      _project$users = project.users,
      users = _project$users === void 0 ? [] : _project$users;
  /* State */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(title),
      _useState2 = _slicedToArray(_useState, 2),
      projectTitle = _useState2[0],
      setProjectTitle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(description),
      _useState4 = _slicedToArray(_useState3, 2),
      projectDescription = _useState4[0],
      setProjectDescription = _useState4[1];
  /* Refs */


  var formRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_5__["Modal"], _extends({
    toggleModal: toggleModal
  }, {
    domElement: document.body
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    ref: formRef,
    method: "POST",
    className: "custom-modal__form",
    onSubmit: function onSubmit(event) {
      event.preventDefault();

      _onSubmit(formRef);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-modal__header d-flex align-items-center pt-6 pt-md-12 px-6 pb-3"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "projectTitle"
  }, projectTitle), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "text",
    className: "form-control form-control--clear text--xl",
    id: "projectTitle",
    name: "title",
    placeholder: titlePlaceholder,
    value: projectTitle,
    onChange: function onChange(_ref2) {
      var value = _ref2.target.value;
      return setProjectTitle(value);
    },
    required: true,
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
    className: "custom-modal__body pt-3 px-6 pb-12"
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
    placeholder: descriptionPlaceholder,
    value: projectDescription,
    onChange: function onChange(_ref3) {
      var value = _ref3.target.value;
      return setProjectDescription(value);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-auto d-flex align-items-baseline ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_users__WEBPACK_IMPORTED_MODULE_6__["Users"], _extends({
    users: users,
    project: project
  }, {
    size: "lg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_user_add__WEBPACK_IMPORTED_MODULE_7__["UserAdd"], {
    users: users,
    project: project
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_5__["Dropzone"], {
    projectId: projectId,
    projectImages: projectImages
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-modal__footer px-6 pb-6 pb-md-12"
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals */ "./assets/app/js/react/project-overview/components/modals/index.js");
/* harmony import */ var icons_add_project_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/add_project.svg */ "./assets/app/img/icons/add_project.svg");
/* harmony import */ var icons_add_project_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_add_project_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ "./assets/app/js/react/project-overview/api.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */




/* Components */


/* Assets */


/* Api calls */


function ProjectAdd() {
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
  /* Mutations */


  var addMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_6__["addProject"], {
    onSuccess: function onSuccess(_ref) {
      var id = _ref.id;
      return setProjectId(id);
    }
  });
  var editMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_6__["editProject"], {
    onSuccess: function onSuccess() {
      return toggleModal();
    }
  });
  /* Callbacks */

  var toggleModal = function toggleModal() {
    setModalOpen(!modalOpen);
    /* Mutate on modal open */

    if (!modalOpen) addMutation.mutate();
    /* Invalidate project_by_user on close modal */

    if (modalOpen) {
      queryClient.invalidateQueries(_api__WEBPACK_IMPORTED_MODULE_6__["QUERY_KEYS"].PROJECT_BY_USER);
      setProjectId(null);
    }
  };

  var onSubmit = function onSubmit(formRef) {
    return editMutation.mutate({
      formRef: formRef,
      projectId: projectId
    });
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "card card--link h-100 mb-0",
    style: {
      minHeight: 427
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body d-flex align-items-center justify-content-center p-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-link text-decoration-none stretched-link",
    onClick: toggleModal,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn-text d-flex flex-column align-items-center text-white text-muted--40"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--48",
    src: icons_add_project_svg__WEBPACK_IMPORTED_MODULE_5___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text--sm mt-1"
  }, "Add more projects")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], null, modalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modals__WEBPACK_IMPORTED_MODULE_4__["ProjectModal"], {
    project: project,
    onSubmit: onSubmit,
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
/* harmony import */ var _ProjectMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectMenu */ "./assets/app/js/react/project-overview/components/project/ProjectMenu.jsx");
/* harmony import */ var _components_users__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/users */ "./assets/app/js/react/components/users/index.js");
/* Packages */

/* Components */




function Project(_ref) {
  var project = _ref.project;

  /* Constants */
  var slug = project.slug,
      title = project.title,
      projectImages = project.projectImages,
      users = project.users,
      author = project.author;
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "projects/".concat(slug),
    title: title,
    className: "card card--link card--product"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectImage__WEBPACK_IMPORTED_MODULE_1__["default"], {
    projectImages: projectImages
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex justify-content-between"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex flex-column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "mb-2"
  }, title ? title : "Add a nice title"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_users__WEBPACK_IMPORTED_MODULE_3__["Users"], {
    users: users,
    project: {
      author: author
    },
    layout: "minimal"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    projectId: project.id
  }))));
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

/***/ "./assets/app/js/react/project-overview/components/project/ProjectMenu.jsx":
/*!*********************************************************************************!*\
  !*** ./assets/app/js/react/project-overview/components/project/ProjectMenu.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProjectMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var icons_edit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/edit.svg */ "./assets/app/img/icons/edit.svg");
/* harmony import */ var icons_edit_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_edit_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var icons_delete_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/delete.svg */ "./assets/app/img/icons/delete.svg");
/* harmony import */ var icons_delete_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_delete_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../api */ "./assets/app/js/react/project-overview/api.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modals */ "./assets/app/js/react/project-overview/components/modals/index.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */




/* Assets */




/* Animations */


/* Api calls */



function ProjectMenu(_ref) {
  var projectId = _ref.projectId;

  /* Hooks */
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useQueryClient"])();
  /* Mutations */

  var deleteMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_8__["deleteProject"], {
    onSuccess: function onSuccess() {
      return queryClient.invalidateQueries(_api__WEBPACK_IMPORTED_MODULE_8__["QUERY_KEYS"].PROJECT_BY_USER);
    }
  });
  var editMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_8__["editProject"], {
    onSuccess: function onSuccess() {
      return toggleModal();
    }
  });
  /* State */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      menuOpen = _useState2[0],
      setMenuOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      modalOpen = _useState4[0],
      setModalOpen = _useState4[1];
  /* Toggles */


  var toggleMenu = function toggleMenu() {
    return setMenuOpen(!menuOpen);
  };

  var toggleModal = function toggleModal() {
    setModalOpen(!modalOpen);
    if (modalOpen) queryClient.invalidateQueries(_api__WEBPACK_IMPORTED_MODULE_8__["QUERY_KEYS"].PROJECT_BY_USER);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card__menu menu ".concat(menuOpen && "is-active")
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu__wrapper position-relative"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-link position-relative",
    type: "button",
    onClick: function onClick(event) {
      event.preventDefault();
      toggleMenu();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], {
    exitBeforeEnter: true,
    initial: false
  }, menuOpen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({
    key: "close",
    className: "menu__dots"
  }, _common_animations__WEBPACK_IMPORTED_MODULE_7__["SCALE_FADE"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_2__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--14 text-white",
    src: icons_close_svg__WEBPACK_IMPORTED_MODULE_6___default.a
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({
    key: "dots",
    className: "menu__dots"
  }, _common_animations__WEBPACK_IMPORTED_MODULE_7__["SCALE_FADE"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "menu__dot"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "menu__dot"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "menu__dot"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, menuOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuBody, {
    projectId: projectId,
    editMutation: editMutation,
    deleteMutation: deleteMutation,
    modalOpen: modalOpen,
    toggleModal: toggleModal,
    toggleMenu: toggleMenu
  }))));
}

var MenuBody = function MenuBody(_ref2) {
  var projectId = _ref2.projectId,
      editMutation = _ref2.editMutation,
      deleteMutation = _ref2.deleteMutation,
      modalOpen = _ref2.modalOpen,
      toggleModal = _ref2.toggleModal,
      toggleMenu = _ref2.toggleMenu;

  /* Queries */
  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useQuery"])([_api__WEBPACK_IMPORTED_MODULE_8__["QUERY_KEYS"].PROJECT_BY_ID, projectId], function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_8__["fetchProjectById"])({
      projectId: projectId
    });
  }, {
    enabled: !!projectId
  }),
      project = _useQuery.data;
  /* Callbacks */


  var updateProject = function updateProject(action) {
    if (action === "edit") toggleModal();
    if (action === "delete") deleteMutation.mutate({
      projectId: projectId
    });
  };

  var onSubmit = function onSubmit(formRef) {
    return editMutation.mutate({
      formRef: formRef,
      projectId: projectId
    });
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "menu__list list"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
    icon: icons_edit_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    index: 1,
    callback: function callback() {
      return updateProject("edit");
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
    icon: icons_delete_svg__WEBPACK_IMPORTED_MODULE_5___default.a,
    index: 0,
    callback: function callback() {
      return updateProject("delete");
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], {
    onExitComplete: function onExitComplete() {
      return toggleMenu();
    }
  }, modalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modals__WEBPACK_IMPORTED_MODULE_9__["ProjectModal"], {
    project: project,
    onSubmit: onSubmit,
    toggleModal: toggleModal
  })));
};

var MenuItem = function MenuItem(_ref3) {
  var icon = _ref3.icon,
      index = _ref3.index,
      callback = _ref3.callback;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].li, _extends({
    className: "list__item mr-2"
  }, Object(_common_animations__WEBPACK_IMPORTED_MODULE_7__["STAGGER_LEFT"])(index)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-link text-white d-flex align-items-center",
    onClick: function onClick(event) {
      event.preventDefault();
      callback();
    },
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_2__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--16 text-white mr-2",
    src: icon
  })));
};

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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./assets/app/js/react/project-overview/components/project/Project.jsx");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/animations */ "./assets/app/js/react/common/animations.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */


/* Components */


/* Animations */


function ProjectResults(_ref) {
  var projects = _ref.projects,
      children = _ref.children;

  /* Render */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "h5 text-white mb-6"
  }, "Your projects"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row row--equalized gutters-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], {
    initial: false
  }, projects.map(function (project, projectIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({}, Object(_common_animations__WEBPACK_IMPORTED_MODULE_3__["STAGGER_UP"])(projectIndex), {
      key: project.id,
      className: "col-12 col-md-6 col-lg-4 col-xl-3",
      layout: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Project__WEBPACK_IMPORTED_MODULE_2__["default"], {
      project: project
    }));
  }), children)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX2ltYWdlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9hZGRfcHJvamVjdC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX3VzZXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2Nsb3NlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9kZWxldGUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2VkaXQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL3N0YXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvYWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvb2JqZWN0Zml0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL0JveC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vRHJvcHpvbmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL01vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbW1vbi9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2VyLWFkZC9Vc2VyQWRkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlci1hZGQvVXNlckFkZFNlYXJjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3VzZXItYWRkL1VzZXJBZGRTZWFyY2hSZXN1bHRzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlci1hZGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3VzZXJzL1VzZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2Vycy9Vc2VyU2VsZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlcnMvVXNlcnMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2hlbHBlcnMvZmlsdGVyVXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvaGVscGVycy9pc0VtYWlsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcHJvamVjdC1vdmVydmlldy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvUHJvamVjdE92ZXJ2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9tb2RhbHMvUHJvamVjdE1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9tb2RhbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC1hZGQvUHJvamVjdEFkZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC1hZGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC9Qcm9qZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9wcm9qZWN0L1Byb2plY3RJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC9Qcm9qZWN0TWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC9Qcm9qZWN0UmVzdWx0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOlsiQWxlcnQiLCJlbCIsIkRPTSIsInRvZ2dsZSIsInF1ZXJ5U2VsZWN0b3IiLCJvbkluaXQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJvcGFjaXR5IiwidmlzaWJpbGl0eSIsInRyYW5zZm9ybSIsImFsZXJ0Tm9kZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibm9kZSIsIiQiLCJvYmplY3RGaXRJbWFnZXMiLCJCb3giLCJoZWFkZXIiLCJjb250ZW50IiwiYm94T3BlbiIsInRvZ2dsZUJveCIsImNoaWxkcmVuIiwiY3JlYXRlUG9ydGFsIiwiRkFERV9JTiIsIkZBREVfSU5fVVAiLCJjbG9zZUljb24iLCJib2R5IiwiRHJvcHpvbmUiLCJwcm9qZWN0SWQiLCJwcm9qZWN0SW1hZ2VzIiwiQ09MVU1OX0xBWU9VVCIsInF1ZXJ5Q2xpZW50IiwidXNlUXVlcnlDbGllbnQiLCJ1c2VEcm9wem9uZSIsImFjY2VwdCIsIm5vQ2xpY2siLCJvbkRyb3AiLCJhY2NlcHRlZEZpbGVzIiwidXBkYXRlUHJvamVjdEltYWdlcyIsImltYWdlcyIsImdldFJvb3RQcm9wcyIsImdldElucHV0UHJvcHMiLCJpc0RyYWdBY3RpdmUiLCJhZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24iLCJ1c2VNdXRhdGlvbiIsImFkZFByb2plY3RJbWFnZXMiLCJvblN1Y2Nlc3MiLCJpbnZhbGlkYXRlUXVlcmllcyIsIlFVRVJZX0tFWVMiLCJQUk9KRUNUX0JZX0lEIiwiZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uIiwiZGVsZXRlUHJvamVjdEltYWdlcyIsImFjdGlvbiIsInByb3BzIiwibXV0YXRlIiwibWFwIiwiaW1hZ2VJbmRleCIsImltYWdlIiwidGl0bGUiLCJpZCIsIlNUQUdHRVJfVVAiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImxlbmd0aCIsImlzUGFyZW50RHJhZ0FjdGl2ZSIsIkRyb3B6b25lSW5uZXIiLCJub0RyYWdFdmVudHNCdWJibGluZyIsImFkZEltYWdlSWNvbiIsIk1vZGFsIiwidG9nZ2xlTW9kYWwiLCJkb21FbGVtZW50IiwidmFyaWFudCIsInJlbmRlciIsIlRSQU5TRk9STV9VUCIsIkVBU0UiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImR1cmF0aW9uIiwieSIsInR5cGUiLCJkYW1waW5nIiwic3RpZmZuZXNzIiwiU0NBTEVfRkFERSIsInNjYWxlIiwiaW5kZXgiLCJkZWxheSIsIlNUQUdHRVJfTEVGVCIsIngiLCJBbmltYXRpb25XcmFwcGVyIiwiVXNlckFkZCIsInVzZXJzIiwicHJvamVjdCIsInVzZVN0YXRlIiwic2V0Qm94T3BlbiIsImFkZFVzZXJJY29uIiwiVXNlckFkZFNlYXJjaCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJmb2N1c2VkVXNlciIsInNldEZvY3VzZWRVc2VyIiwicXVlcnlSZWYiLCJ1c2VSZWYiLCJhZGRVc2VyTXV0YXRpb24iLCJhZGRVc2VyIiwiR0xPQkFMX1VTRVJTIiwiY3VycmVudCIsInNlbGVjdCIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlT25LZXlEb3duIiwiaW5jbHVkZXMiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImlzRW1haWwiLCJlbWFpbCIsImhhbmRsZUNsaWNrIiwidXNlck11dGF0aW9uTG9hZGluZyIsImlzTG9hZGluZyIsIlVzZXJBZGRTZWFyY2hSZXN1bHRzIiwidXNlUXVlcnkiLCJmZXRjaEdvYmFsVXNlcnMiLCJkYXRhIiwiZ2xvYmFsVXNlcnMiLCJnbG9iYWxVc2Vyc0xvYWRpbmciLCJmaWx0ZXJlZFVzZXJzIiwiZmlsdGVyVXNlcnMiLCJ1c2VFZmZlY3QiLCJmaWx0ZXJlZFJlc3VsdHMiLCJuZXdVc2VyIiwidXNlcm5hbWUiLCJ1c2VyQ29sb3IiLCJ1c2VyIiwiVXNlciIsInNpemUiLCJhdXRob3IiLCJ1c2VySWQiLCJpc0F1dGhvciIsImNsYXNzZXMiLCJqb2luIiwiZGVsZXRlVXNlck11dGF0aW9uIiwiZGVsZXRlVXNlciIsImRlbGV0ZUljb24iLCJzdGFySWNvbiIsIlVzZXJBdmF0YXIiLCJ1c2VySW5pdGlhbHMiLCJzcGxpdCIsIndvcmQiLCJ0b1VwcGVyQ2FzZSIsIlVzZXJJbmZvIiwiVXNlclNlbGVjdCIsImlzRm9jdXNlZCIsImhhbmRsZVN0YXR1cyIsIlVzZXJTdGF0dXMiLCJsb2FkaW5nIiwiVXNlcnMiLCJsYXlvdXQiLCJyZXN0Iiwic2xpY2VBbW91bnQiLCJJbmZpbml0eSIsInNsaWNlIiwibG93ZXJRdWVyeSIsInRvTG93ZXJDYXNlIiwiZXhpc3RpbmdVc2Vyc0J5RW1haWwiLCJmaWx0ZXIiLCJ0ZXN0IiwiUFJPSkVDVF9CWV9VU0VSIiwiZmV0Y2hQcm9qZWN0c0J5VXNlciIsInVybCIsImF4aW9zIiwiZ2V0IiwicmVzdWx0IiwiZmV0Y2hQcm9qZWN0QnlJZCIsImFkZFByb2plY3QiLCJwb3N0IiwiZGVsZXRlUHJvamVjdCIsImVkaXRQcm9qZWN0IiwiZm9ybVJlZiIsInBhcmFtcyIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiUHJvamVjdE92ZXJ2aWV3IiwiaXNBZG1pbiIsInNldElzQWRtaW4iLCJhdG9iIiwibG9jYXRpb24iLCJzZWFyY2giLCJyZXBsYWNlIiwicm9sZXMiLCJwcm9qZWN0c0xvYWRpbmciLCJwcm9qZWN0cyIsIlByb2plY3RNb2RhbCIsIm9uU3VibWl0IiwidGl0bGVQbGFjZWhvbGRlciIsImRlc2NyaXB0aW9uUGxhY2Vob2xkZXIiLCJkZXNjcmlwdGlvbiIsInByb2plY3RUaXRsZSIsInNldFByb2plY3RUaXRsZSIsInByb2plY3REZXNjcmlwdGlvbiIsInNldFByb2plY3REZXNjcmlwdGlvbiIsIlByb2plY3RBZGQiLCJzZXRQcm9qZWN0SWQiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJlbmFibGVkIiwiYWRkTXV0YXRpb24iLCJlZGl0TXV0YXRpb24iLCJtaW5IZWlnaHQiLCJhZGRQcm9qZWN0SWNvbiIsIlByb2plY3QiLCJzbHVnIiwiUHJvamVjdEltYWdlIiwiUHJvamVjdE1lbnUiLCJkZWxldGVNdXRhdGlvbiIsIm1lbnVPcGVuIiwic2V0TWVudU9wZW4iLCJ0b2dnbGVNZW51IiwiTWVudUJvZHkiLCJ1cGRhdGVQcm9qZWN0IiwiZWRpdEljb24iLCJNZW51SXRlbSIsImljb24iLCJjYWxsYmFjayIsIlByb2plY3RSZXN1bHRzIiwicHJvamVjdEluZGV4IiwiY2xpZW50IiwiUXVlcnlDbGllbnQiLCJkZWZhdWx0T3B0aW9ucyIsInF1ZXJpZXMiLCJyZWZldGNoT25XaW5kb3dGb2N1cyIsInByb2plY3RPdmVydmlld05vZGUiLCJnZXRFbGVtZW50QnlJZCIsImRhdGFzZXQiLCJwYXJzbGV5Q29uZmlnIiwiZXJyb3JDbGFzcyIsImV4Y2x1ZGVkIiwic3VjY2Vzc0NsYXNzIiwicGFyc2xleSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFB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T05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9hcHAvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vYXNzZXRzL2FwcC9qcy9tYWluLmpzXCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYWRkX2ltYWdlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hZGRfcHJvamVjdC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYWRkX3VzZXIuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Nsb3NlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9kZWxldGUuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2VkaXQuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3N0YXIuc3ZnXCI7IiwiY2xhc3MgQWxlcnQge1xuICAgIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgICAgIHRoaXMuRE9NID0geyBlbCB9O1xuICAgICAgICB0aGlzLkRPTS50b2dnbGUgPSB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKFwiLmFsZXJ0X19idG5cIik7XG5cbiAgICAgICAgdGhpcy5vbkluaXQoKTtcbiAgICB9XG4gICAgb25Jbml0KCkge1xuICAgICAgICB0aGlzLkRPTS50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMudG9nZ2xlKCkpO1xuICAgIH1cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuRE9NLmVsLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLkRPTS5lbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgdGhpcy5ET00uZWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDEwMCUpXCI7XG4gICAgfVxufVxuXG5jb25zdCBhbGVydE5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFsZXJ0XVwiKTtcblsuLi5hbGVydE5vZGVzXS5mb3JFYWNoKChub2RlKSA9PiBuZXcgQWxlcnQobm9kZSkpO1xuIiwiLy8gQ1NTXG5pbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcblxuLy8gUG9sbHlmaWxzXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5cbi8vIENvcmVcbmltcG9ydCAnLi92YWxpZGF0aW9uJztcbmltcG9ydCAnLi9hbGVydCc7XG5cbi8vIFBsdWdpbnNcbmltcG9ydCAnLi9vYmplY3RmaXQnO1xuXG4vLyBSZWFjdFxuaW1wb3J0ICcuL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcnXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IG9iamVjdEZpdEltYWdlcyBmcm9tICdvYmplY3QtZml0LWltYWdlcyc7XG5cbiQoZnVuY3Rpb24oKSB7XG4gICAgb2JqZWN0Rml0SW1hZ2VzKCk7XG59KTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gXCJyZWFjdC1zdmdcIjtcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiwgRkFERV9JTl9VUCB9IGZyb20gXCIuL2FuaW1hdGlvbnNcIjtcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gXCJpY29ucy9jbG9zZS5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm94KHsgaGVhZGVyLCBjb250ZW50LCBib3hPcGVuLCB0b2dnbGVCb3gsIGNoaWxkcmVuIH0pIHtcbiAgICByZXR1cm4gY3JlYXRlUG9ydGFsKFxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAge2JveE9wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImJveC1vdmVybGF5XCIgey4uLkZBREVfSU59IC8+XG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGtleT1cImJveC1jb250ZW50XCIgY2xhc3NOYW1lPVwiYm94X19jb250ZW50IGJvcmRlciBwLTVcIiB7Li4uRkFERV9JTl9VUH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveF9faGVhZGVyIGQtZmxleCBhbGlnbi1pdGVtcy1iYXNlbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtLWxnIG1iLTFcIj57aGVhZGVyfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNjAgbWItMFwiPntjb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Nsb3NlIGJ0biBidG4tbGluayBtbC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlQm94fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEyXCIgc3JjPXtjbG9zZUljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94X19ib2R5IGQtZmxleCBtdC00XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT4sXG4gICAgICAgIGRvY3VtZW50LmJvZHlcbiAgICApO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSBcInJlYWN0LXN2Z1wiO1xuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tIFwicmVhY3QtZHJvcHpvbmVcIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSBcImljb25zL2Nsb3NlLnN2Z1wiO1xuaW1wb3J0IGFkZEltYWdlSWNvbiBmcm9tIFwiaWNvbnMvYWRkX2ltYWdlLnN2Z1wiO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTVEFHR0VSX1VQIH0gZnJvbSBcIi4vYW5pbWF0aW9uc1wiO1xuXG4vKiBBcGkgY2FsbHMgKi9cbmltcG9ydCB7IGFkZFByb2plY3RJbWFnZXMsIGRlbGV0ZVByb2plY3RJbWFnZXMsIFFVRVJZX0tFWVMgfSBmcm9tIFwiLi4vcHJvamVjdC1vdmVydmlldy9hcGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcHpvbmUoeyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZXMgfSkge1xuICAgIC8qIENvbnRhbnRzICovXG4gICAgY29uc3QgQ09MVU1OX0xBWU9VVCA9IFwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC14bC0zXCI7XG5cbiAgICAvKiBIb29rcyAqL1xuICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuICAgIGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzLCBpc0RyYWdBY3RpdmUgfSA9IHVzZURyb3B6b25lKHtcbiAgICAgICAgYWNjZXB0OiBcImltYWdlLypcIixcbiAgICAgICAgbm9DbGljazogdHJ1ZSxcbiAgICAgICAgb25Ecm9wOiAoYWNjZXB0ZWRGaWxlcykgPT4gdXBkYXRlUHJvamVjdEltYWdlcyhcImFkZFwiLCB7IGltYWdlczogYWNjZXB0ZWRGaWxlcyB9KSxcbiAgICB9KTtcblxuICAgIC8qIE11dGF0aW9ucyAqL1xuICAgIGNvbnN0IGFkZFByb2plY3RJbWFnZXNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZFByb2plY3RJbWFnZXMsIHtcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGRlbGV0ZVByb2plY3RJbWFnZXMsIHtcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKSxcbiAgICB9KTtcblxuICAgIC8qIENhbGxiYWNrcyAqL1xuICAgIGNvbnN0IHVwZGF0ZVByb2plY3RJbWFnZXMgPSAoYWN0aW9uLCBwcm9wcykgPT4ge1xuICAgICAgICBpZiAoYWN0aW9uID09PSBcImFkZFwiKSBhZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkLCAuLi5wcm9wcyB9KTtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJkZWxldGVcIikgZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgLi4ucHJvcHMgfSk7XG4gICAgfTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcHpvbmVcIiB7Li4uZ2V0Um9vdFByb3BzKCl9PlxuICAgICAgICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctLWVxdWFsaXplZCBndXR0ZXJzLTVcIj5cbiAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3RJbWFnZXMubWFwKCh7IGltYWdlLCB0aXRsZSwgaWQgfSwgaW1hZ2VJbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgbGF5b3V0IHsuLi5TVEFHR0VSX1VQKGltYWdlSW5kZXgpfSBjbGFzc05hbWU9e0NPTFVNTl9MQVlPVVR9IGtleT17aWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcHpvbmVfX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImRyb3B6b25lX19pbWFnZSBpbWctZmx1aWRcIiBzcmM9e2ltYWdlfSBhbHQ9e3RpdGxlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBkcm9wem9uZV9faW1hZ2UtZGVsZXRlIHAtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQcm9qZWN0SW1hZ2VzKFwiZGVsZXRlXCIsIHsgaWQgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS04IHRleHQtYmFzZSBtdC0wXCIgc3JjPXtjbG9zZUljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYga2V5PVwiYWRkLWltYWdlXCIgey4uLlNUQUdHRVJfVVAocHJvamVjdEltYWdlcy5sZW5ndGgpfSBjbGFzc05hbWU9e0NPTFVNTl9MQVlPVVR9IGxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wem9uZUlubmVyIHsuLi57IHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzUGFyZW50RHJhZ0FjdGl2ZTogaXNEcmFnQWN0aXZlIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG4vKiBJbm5lciBkcm9wem9uZSAqL1xuY29uc3QgRHJvcHpvbmVJbm5lciA9ICh7IHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzUGFyZW50RHJhZ0FjdGl2ZSB9KSA9PiB7XG4gICAgLyogSG9va3MgKi9cbiAgICBjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcywgaXNEcmFnQWN0aXZlIH0gPSB1c2VEcm9wem9uZSh7XG4gICAgICAgIGFjY2VwdDogXCJpbWFnZS8qXCIsXG4gICAgICAgIG5vRHJhZ0V2ZW50c0J1YmJsaW5nOiB0cnVlLFxuICAgICAgICBvbkRyb3A6IChhY2NlcHRlZEZpbGVzKSA9PiB1cGRhdGVQcm9qZWN0SW1hZ2VzKFwiYWRkXCIsIHsgaW1hZ2VzOiBhY2NlcHRlZEZpbGVzIH0pLFxuICAgIH0pO1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZVwiIHsuLi5nZXRSb290UHJvcHMoKX0+XG4gICAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cbiAgICAgICAgICAgIDxhcnRpY2xlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHJvcHpvbmVfX2NvbnRhaW5lciBjYXJkIGNhcmQtLWxpbmsgJHtcbiAgICAgICAgICAgICAgICAgICAgKGlzRHJhZ0FjdGl2ZSB8fCBpc1BhcmVudERyYWdBY3RpdmUpICYmIFwiaXMtcHVsc2luZ1wiXG4gICAgICAgICAgICAgICAgfSBoLTEwMCBtYi0wYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHAtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuLXRleHQgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIHRleHQtbXV0ZWQtLTQwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tNDhcIiBzcmM9e2FkZEltYWdlSWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtLXNtIG10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNEcmFnQWN0aXZlIHx8IGlzUGFyZW50RHJhZ0FjdGl2ZSA/IFwiRHJvcCB0aGUgaW1hZ2VzXCIgOiBcIkFkZCBzb21lIGltYWdlc1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4sIFRSQU5TRk9STV9VUCB9IGZyb20gXCIuL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwoeyB0b2dnbGVNb2RhbCwgY2hpbGRyZW4sIGRvbUVsZW1lbnQsIHZhcmlhbnQgPSBcImRlZmF1bHRcIiB9KSB7XG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT1cImN1c3RvbS1tb2RhbFwiIGNsYXNzTmFtZT17YGN1c3RvbS1tb2RhbCBjdXN0b20tbW9kYWwtLSR7dmFyaWFudH1gfT5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fb3ZlcmxheVwiIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfSB7Li4uRkFERV9JTn0gLz5cbiAgICAgICAgICAgIDxtb3Rpb24uYXJ0aWNsZSBrZXk9XCJjdXN0b20tbW9kYWxfX2NvbnRlbnRcIiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2NvbnRlbnRcIiB7Li4uVFJBTlNGT1JNX1VQfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXggZmxleC1ncm93LTEgcHgtMFwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmFydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICBpZiAoZG9tRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKHJlbmRlcigpLCBkb21FbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVuZGVyKCk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBFQVNFID0gWzAuNjUsIDAsIDAuMzUsIDFdO1xuXG5jb25zdCBGQURFX0lOID0ge1xuICAgIGluaXRpYWw6IHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICB9LFxuICAgIGFuaW1hdGU6IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICB9LFxuICAgIGV4aXQ6IHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgZWFzZTogRUFTRSxcbiAgICAgICAgZHVyYXRpb246IDAuMixcbiAgICB9LFxufTtcblxuY29uc3QgRkFERV9JTl9VUCA9IHtcbiAgICBpbml0aWFsOiB7XG4gICAgICAgIHk6IDIwMCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICB9LFxuICAgIGFuaW1hdGU6IHtcbiAgICAgICAgeTogMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICAgICAgICAgIGRhbXBpbmc6IDQyLFxuICAgICAgICAgICAgc3RpZmZuZXNzOiA4MDAsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBleGl0OiB7XG4gICAgICAgIHk6IDIwMCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICAgICAgICAgIGRhbXBpbmc6IDQyLFxuICAgICAgICAgICAgc3RpZmZuZXNzOiAxMjAwLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG5jb25zdCBUUkFOU0ZPUk1fVVAgPSB7XG4gICAgaW5pdGlhbDoge1xuICAgICAgICB5OiBcIjEwMCVcIixcbiAgICB9LFxuICAgIGFuaW1hdGU6IHtcbiAgICAgICAgeTogXCIwJVwiLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgICAgICAgICAgZGFtcGluZzogNDEsXG4gICAgICAgICAgICBzdGlmZm5lc3M6IDYwMCxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGV4aXQ6IHtcbiAgICAgICAgeTogXCIxMDAlXCIsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICAgICAgICBkYW1waW5nOiA0MSxcbiAgICAgICAgICAgIHN0aWZmbmVzczogMTIwMCxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuY29uc3QgU0NBTEVfRkFERSA9IHtcbiAgICBpbml0aWFsOiB7XG4gICAgICAgIHNjYWxlOiAwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgIH0sXG4gICAgYW5pbWF0ZToge1xuICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICB9LFxuICAgIGV4aXQ6IHtcbiAgICAgICAgc2NhbGU6IDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIGVhc2U6IEVBU0UsXG4gICAgICAgIGR1cmF0aW9uOiAwLjIsXG4gICAgfSxcbn07XG5cbmNvbnN0IFNUQUdHRVJfVVAgPSAoaW5kZXggPSAwKSA9PiAoe1xuICAgIGluaXRpYWw6IHsgb3BhY2l0eTogMCwgeTogMzUgfSxcbiAgICBhbmltYXRlOiB7IG9wYWNpdHk6IDEsIHk6IDAsIHRyYW5zaXRpb246IHsgdHlwZTogXCJzcHJpbmdcIiwgZGFtcGluZzogMzAsIHN0aWZmbmVzczogNDUwLCBkZWxheTogaW5kZXggKiAwLjAzNSB9IH0sXG4gICAgZXhpdDogeyBvcGFjaXR5OiAwLCBzY2FsZTogMC4yNSwgdHJhbnNpdGlvbjogeyB0eXBlOiBcInNwcmluZ1wiLCBkYW1waW5nOiAzMCwgc3RpZmZuZXNzOiA2MDAgfSB9LFxufSk7XG5cbmNvbnN0IFNUQUdHRVJfTEVGVCA9IChpbmRleCA9IDApID0+ICh7XG4gICAgaW5pdGlhbDogeyBvcGFjaXR5OiAwLCB4OiAxMCB9LFxuICAgIGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgeDogMCwgdHJhbnNpdGlvbjogeyB0eXBlOiBcInNwcmluZ1wiLCBkYW1waW5nOiAzMCwgc3RpZmZuZXNzOiAzMDAsIGRlbGF5OiBpbmRleCAqIDAuMDM1IH0gfSxcbiAgICBleGl0OiB7IG9wYWNpdHk6IDAsIHg6IDEwLCB0cmFuc2l0aW9uOiB7IHR5cGU6IFwic3ByaW5nXCIsIGRhbXBpbmc6IDMwLCBzdGlmZm5lc3M6IDYwMCB9IH0sXG59KTtcblxuY29uc3QgQW5pbWF0aW9uV3JhcHBlciA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiA8bW90aW9uLmRpdiB7Li4ucHJvcHN9PntjaGlsZHJlbn08L21vdGlvbi5kaXY+O1xuXG5leHBvcnQgeyBGQURFX0lOLCBGQURFX0lOX1VQLCBUUkFOU0ZPUk1fVVAsIFNDQUxFX0ZBREUsIFNUQUdHRVJfVVAsIFNUQUdHRVJfTEVGVCB9O1xuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uV3JhcHBlcjtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcHpvbmUgfSBmcm9tIFwiLi9Ecm9wem9uZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RhbCB9IGZyb20gXCIuL01vZGFsXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJveCB9IGZyb20gXCIuL0JveFwiO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tIFwicmVhY3Qtc3ZnXCI7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZFVzZXJJY29uIGZyb20gXCJpY29ucy9hZGRfdXNlci5zdmdcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4uLy4uL2NvbW1vblwiO1xuaW1wb3J0IFVzZXJBZGRTZWFyY2ggZnJvbSBcIi4vVXNlckFkZFNlYXJjaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQWRkKHsgdXNlcnMsIHByb2plY3QgfSkge1xuICAgIC8qIFN0YXRlICovXG4gICAgY29uc3QgW2JveE9wZW4sIHNldEJveE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLyogQ2FsbGJhY2tzICovXG4gICAgY29uc3QgdG9nZ2xlQm94ID0gKCkgPT4gc2V0Qm94T3BlbighYm94T3Blbik7XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIG1sLTJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIHVzZXIgdXNlci0tbGcgdXNlci0tYWRkXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZUJveH0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlcl9fYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcl9faW5pdGlhbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9faWNvbiBpY29uIGljb24tLTEyIG10LTBcIiBzcmM9e2FkZFVzZXJJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxCb3ggaGVhZGVyPVwiU2VsZWN0IHVzZXJzXCIgY29udGVudD1cIkNob29zZSBzb21lIHVzZXJzIHRvIGNvbGxhYm9yYXRlIHdpdGguXCIgey4uLnsgYm94T3BlbiwgdG9nZ2xlQm94IH19PlxuICAgICAgICAgICAgICAgIDxVc2VyQWRkU2VhcmNoIHsuLi57IHVzZXJzLCBwcm9qZWN0LCB0b2dnbGVCb3ggfX0gLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IFVzZXJBZGRTZWFyY2hSZXN1bHRzIGZyb20gXCIuL1VzZXJBZGRTZWFyY2hSZXN1bHRzXCI7XG5pbXBvcnQgeyBVc2VycyB9IGZyb20gXCIuLi91c2Vyc1wiO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBpc0VtYWlsIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnNcIjtcblxuLyogQXBpIGNhbGxzICovXG5pbXBvcnQgeyBhZGRVc2VyLCBRVUVSWV9LRVlTIH0gZnJvbSBcIi4uLy4uL3Byb2plY3Qtb3ZlcnZpZXcvYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBZGRTZWFyY2goeyB1c2VycywgcHJvamVjdCwgdG9nZ2xlQm94IH0pIHtcbiAgICAvKiBTdGF0ZSAqL1xuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2ZvY3VzZWRVc2VyLCBzZXRGb2N1c2VkVXNlcl0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgLyogUmVmcyAqL1xuICAgIGNvbnN0IHF1ZXJ5UmVmID0gdXNlUmVmKCk7XG5cbiAgICAvKiBIb29rcyAqL1xuICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuICAgIC8qIE11dGF0aW9ucyAqL1xuICAgIGNvbnN0IGFkZFVzZXJNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZFVzZXIsIHtcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0LmlkXSk7XG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLkdMT0JBTF9VU0VSUyk7XG5cbiAgICAgICAgICAgIHF1ZXJ5UmVmLmN1cnJlbnQuc2VsZWN0KCk7XG4gICAgICAgICAgICBzZXRRdWVyeShcIlwiKTtcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8qIENhbGxiYWNrcyAqL1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHNldFF1ZXJ5KHZhbHVlKTtcblxuICAgIGNvbnN0IGhhbmRsZU9uS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoW1wiRW50ZXJcIiwgXCJUYWJcIl0uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKHF1ZXJ5ICYmIGZvY3VzZWRVc2VyICYmIGlzRW1haWwoZm9jdXNlZFVzZXIuZW1haWwpKSB7XG4gICAgICAgICAgICAgICAgYWRkVXNlck11dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZDogcHJvamVjdC5pZCwgZW1haWw6IGZvY3VzZWRVc2VyLmVtYWlsIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGVtYWlsKSA9PiB7XG4gICAgICAgIGlmIChpc0VtYWlsKGVtYWlsKSkge1xuICAgICAgICAgICAgYWRkVXNlck11dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZDogcHJvamVjdC5pZCwgZW1haWw6IGVtYWlsIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtZ3Jvdy0xXCI+XG4gICAgICAgICAgICA8VXNlcnMgey4uLnsgdXNlcnMsIHByb2plY3QgfX0gdmFyaWFudD1cImludGVyYWN0aXZlXCIgc2l6ZT1cInhsXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJ1c2VyUXVlcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgU2VhcmNoIG5hbWUgb3IgZW1haWxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIGZvcm0tY29udHJvbC0tc2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VyUXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlclF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggbmFtZSBvciBlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVPbktleURvd259XG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cXVlcnlSZWZ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VXNlckFkZFNlYXJjaFJlc3VsdHNcbiAgICAgICAgICAgICAgICAgICAgey4uLntcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGljayxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzZWRVc2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9jdXNlZFVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyTXV0YXRpb25Mb2FkaW5nOiBhZGRVc2VyTXV0YXRpb24uaXNMb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtdC00XCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgdGV4dC0tc20gdGV4dC13aGl0ZSB0ZXh0LWRlY29yYXRpb24tdW5kZXJsaW5lIHRleHQtbXV0ZWQtLTYwXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZW1vdmUgYWxsIHVzZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0bl9fdGV4dFwiPlJlbW92ZSBhbGwgdXNlcnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXNlY29uZGFyeSBtbC1hdXRvIHB4LThcIiBvbkNsaWNrPXt0b2dnbGVCb3h9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG5fX3RleHRcIj5Eb25lPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gXCIuLi8uLi9jb21tb24vYW5pbWF0aW9uc1wiO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VyU2VsZWN0IH0gZnJvbSBcIi4uL3VzZXJzXCI7XG5cbi8qIEFwaSBjYWxscyAqL1xuaW1wb3J0IHsgZmV0Y2hHb2JhbFVzZXJzLCBRVUVSWV9LRVlTIH0gZnJvbSBcIi4uLy4uL3Byb2plY3Qtb3ZlcnZpZXcvYXBpXCI7XG5cbi8qIEhlbHBlcnMgKi9cbmltcG9ydCBmaWx0ZXJVc2VycyBmcm9tIFwiLi4vLi4vaGVscGVycy9maWx0ZXJVc2Vyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQWRkU2VhcmNoUmVzdWx0cyh7XG4gICAgdXNlcnMsXG4gICAgcXVlcnksXG4gICAgaGFuZGxlQ2xpY2ssXG4gICAgZm9jdXNlZFVzZXIsXG4gICAgc2V0Rm9jdXNlZFVzZXIsXG4gICAgdXNlck11dGF0aW9uTG9hZGluZyxcbn0pIHtcbiAgICAvKiBRdWVyaWVzICovXG4gICAgY29uc3QgeyBkYXRhOiBnbG9iYWxVc2VycyA9IFtdLCBpc0xvYWRpbmc6IGdsb2JhbFVzZXJzTG9hZGluZyB9ID0gdXNlUXVlcnkoXG4gICAgICAgIFFVRVJZX0tFWVMuR0xPQkFMX1VTRVJTLFxuICAgICAgICBmZXRjaEdvYmFsVXNlcnNcbiAgICApO1xuXG4gICAgLyogQ29uc3RhbnRzICovXG4gICAgY29uc3QgZmlsdGVyZWRVc2VycyA9IGZpbHRlclVzZXJzKGdsb2JhbFVzZXJzLCB1c2VycywgcXVlcnkpO1xuXG4gICAgLyogRWZmZWN0cyAqL1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChmaWx0ZXJlZFVzZXJzLmxlbmd0aCA+IDAgJiYgIXVzZXJNdXRhdGlvbkxvYWRpbmcpIHtcbiAgICAgICAgICAgIHNldEZvY3VzZWRVc2VyKGZpbHRlcmVkVXNlcnNbMF0pO1xuICAgICAgICB9XG4gICAgfSwgW2ZpbHRlcmVkVXNlcnNdKTtcblxuICAgIC8qIFJlbmRlciBmaWx0ZXJlZCByZXN1bHRzICovXG4gICAgY29uc3QgZmlsdGVyZWRSZXN1bHRzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBuZXdVc2VyID0geyBlbWFpbDogcXVlcnksIHVzZXJuYW1lOiBcIk5ldyB1c2VyXCIsIHVzZXJDb2xvcjogXCIjQ0MyNUU4XCIgfTtcblxuICAgICAgICBpZiAoZmlsdGVyZWRVc2Vycy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyZWRVc2Vycy5tYXAoKHVzZXIpID0+IChcbiAgICAgICAgICAgICAgICA8bW90aW9uLmxpIHsuLi5GQURFX0lOfSBrZXk9e3VzZXIuaWR9IGNsYXNzTmFtZT1cImxpc3RfX2l0ZW0gdnItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8VXNlclNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnsgdXNlciwgaGFuZGxlQ2xpY2ssIHNldEZvY3VzZWRVc2VyIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZvY3VzZWQ9e3VzZXIuZW1haWwgPT09IGZvY3VzZWRVc2VyPy5lbWFpbCAmJiBxdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17dXNlck11dGF0aW9uTG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5saT5cbiAgICAgICAgICAgICkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFnbG9iYWxVc2Vyc0xvYWRpbmcpIHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi5saSB7Li4uRkFERV9JTn0ga2V5PVwiTmV3IHVzZXJcIiBjbGFzc05hbWU9XCJsaXN0X19pdGVtIGlzLWZvY3VzZWQgdnItM1wiPlxuICAgICAgICAgICAgICAgICAgICA8VXNlclNlbGVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLnsgdXNlcjogbmV3VXNlciwgaGFuZGxlQ2xpY2ssIHNldEZvY3VzZWRVc2VyIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZvY3VzZWQ9e3F1ZXJ5Lmxlbmd0aH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTG9hZGluZz17dXNlck11dGF0aW9uTG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L21vdGlvbi5saT5cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIHtxdWVyeSAmJiAoXG4gICAgICAgICAgICAgICAgPG1vdGlvbi51bCB7Li4uRkFERV9JTn0gY2xhc3NOYW1lPVwiYm94X19saXN0IGxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAge2ZpbHRlcmVkUmVzdWx0cygpfVxuICAgICAgICAgICAgICAgIDwvbW90aW9uLnVsPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgKTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlckFkZCB9IGZyb20gXCIuL1VzZXJBZGRcIjtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gXCJyZWFjdC1zdmdcIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBzdGFySWNvbiBmcm9tIFwiaWNvbnMvc3Rhci5zdmdcIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCJpY29ucy9kZWxldGUuc3ZnXCI7XG5cbi8qIEFwaSBjYWxscyAqL1xuaW1wb3J0IHsgZGVsZXRlVXNlciwgUVVFUllfS0VZUyB9IGZyb20gXCIuLi8uLi9wcm9qZWN0LW92ZXJ2aWV3L2FwaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyKHsgdXNlciwgcHJvamVjdCwgdmFyaWFudCA9IFwiZGVmYXVsdFwiLCBzaXplID0gXCJtZFwiIH0pIHtcbiAgICAvKiBIb29rcyAqL1xuICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuICAgIC8qIENvbnN0YW50cyAqL1xuICAgIGNvbnN0IHsgaWQ6IHByb2plY3RJZCwgYXV0aG9yIH0gPSBwcm9qZWN0O1xuICAgIGNvbnN0IHsgaWQ6IHVzZXJJZCwgZW1haWwgfSA9IHVzZXI7XG5cbiAgICBjb25zdCBpc0F1dGhvciA9IGVtYWlsID09PSBhdXRob3I7XG4gICAgY29uc3QgY2xhc3NlcyA9IFtcInVzZXJcIiwgYHVzZXItLSR7c2l6ZX1gLCBgdXNlci0tJHt2YXJpYW50fWAsIGlzQXV0aG9yICYmIFwidXNlci0tYXV0aG9yXCJdLmpvaW4oXCIgXCIpO1xuXG4gICAgLyogTXV0YXRpb25zICovXG4gICAgY29uc3QgZGVsZXRlVXNlck11dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlVXNlciwge1xuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0pLFxuICAgIH0pO1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXN9PlxuICAgICAgICAgICAgPFVzZXJBdmF0YXIgey4uLnVzZXJ9PlxuICAgICAgICAgICAgICAgIHt2YXJpYW50ID09PSBcImludGVyYWN0aXZlXCIgJiYgIWlzQXV0aG9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlcl9fYWN0aW9uIGJ0biBidG4tbGluayBwLTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBkZWxldGVVc2VyTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkLCB1c2VySWQgfSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19hY3Rpb24taWNvbiBpY29uIGljb24tLTE0XCIgc3JjPXtkZWxldGVJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9Vc2VyQXZhdGFyPlxuICAgICAgICAgICAge2lzQXV0aG9yICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJfX3N0YXR1cyB1c2VyX19zdGF0dXMtLWxlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cInVzZXJfX3N0YXR1cy1pY29uIGljb24gdGV4dC10ZXJ0aWFyeSBtdC0wXCIgc3JjPXtzdGFySWNvbn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBjb25zdCBVc2VyQXZhdGFyID0gKHsgdXNlcm5hbWUsIHVzZXJDb2xvciwgY2hpbGRyZW4gfSkgPT4ge1xuICAgIC8qIENvbnN0YW50cyAqL1xuICAgIGNvbnN0IHVzZXJJbml0aWFscyA9IHVzZXJuYW1lLnNwbGl0KFwiIFwiKS5tYXAoKHdvcmQpID0+IHdvcmRbMF0udG9VcHBlckNhc2UoKSk7XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJfX2F2YXRhclwiIHN0eWxlPXt7IFwiLS10aGVtZVwiOiB1c2VyQ29sb3IgfX0+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyX19pbml0aWFsc1wiPnt1c2VySW5pdGlhbHN9PC9zcGFuPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuZXhwb3J0IGNvbnN0IFVzZXJJbmZvID0gKHsgdXNlcm5hbWUsIGVtYWlsIH0pID0+IChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtbiBtbC0zXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTBcIj57dXNlcm5hbWV9PC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS02MCB0ZXh0LS14c1wiPntlbWFpbH08L3A+XG4gICAgPC9kaXY+XG4pO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzXCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tIFwicmVhY3Qtc3ZnXCI7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZFVzZXJJY29uIGZyb20gXCJpY29ucy9hZGRfdXNlci5zdmdcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlckF2YXRhciwgVXNlckluZm8gfSBmcm9tIFwiLi9Vc2VyXCI7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCBBbmltYXRpb25XcmFwcGVyLCB7IFNDQUxFX0ZBREUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlclNlbGVjdCh7IHVzZXIsIGhhbmRsZUNsaWNrLCBpc0ZvY3VzZWQsIHNldEZvY3VzZWRVc2VyLCBpc0xvYWRpbmcgfSkge1xuICAgIC8qIEVmZmVjdHMgKi9cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpc0ZvY3VzZWQgJiYgc2V0Rm9jdXNlZFVzZXIodXNlcik7XG4gICAgfSwgW2lzRm9jdXNlZF0pO1xuXG4gICAgLyogQ2FsbGJhY2tzICovXG4gICAgY29uc3QgaGFuZGxlU3RhdHVzID0gKGFjdGlvbikgPT4ge1xuICAgICAgICBzZXRGb2N1c2VkVXNlcihhY3Rpb24gPT09IFwiZW50ZXJcIiA/IHVzZXIgOiBudWxsKTtcbiAgICB9O1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgdXNlciB1c2VyLS1zZWxlY3QgJHtpc0ZvY3VzZWQgJiYgXCJpcy1mb2N1c2VkXCJ9IHVzZXItLXhsYH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKHVzZXIuZW1haWwpfVxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBoYW5kbGVTdGF0dXMoXCJlbnRlclwiKX1cbiAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4gaGFuZGxlU3RhdHVzKFwibGVhdmVcIil9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgPFVzZXJBdmF0YXIgey4uLnVzZXJ9IC8+XG4gICAgICAgICAgICAgICAgPFVzZXJJbmZvIHsuLi51c2VyfSAvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcl9fYWRkIHRleHQtc2Vjb25kYXJ5IHJvdW5kZWQtY2lyY2xlIG1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgPFVzZXJTdGF0dXMgbG9hZGluZz17aXNMb2FkaW5nICYmIGlzRm9jdXNlZH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2J1dHRvbj5cbiAgICApO1xufVxuXG5jb25zdCBVc2VyU3RhdHVzID0gKHsgbG9hZGluZyB9KSA9PiAoXG4gICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgICAgICA8QW5pbWF0aW9uV3JhcHBlciBrZXk9XCJsb2FkZXJcIiBjbGFzc05hbWU9XCJwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXhcIiB7Li4uU0NBTEVfRkFERX0+XG4gICAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3MgY29sb3I9XCJpbmhlcml0XCIgc2l6ZT17MTJ9IC8+XG4gICAgICAgICAgICA8L0FuaW1hdGlvbldyYXBwZXI+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgICA8QW5pbWF0aW9uV3JhcHBlciBrZXk9XCJkZWZhdWx0XCIgY2xhc3NOYW1lPVwicG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4XCIgey4uLlNDQUxFX0ZBREV9PlxuICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9fYWRkLWljb24gaWNvbiBpY29uLS0xMiB0ZXh0LXNlY29uZGFyeVwiIHNyYz17YWRkVXNlckljb259IC8+XG4gICAgICAgICAgICA8L0FuaW1hdGlvbldyYXBwZXI+XG4gICAgICAgICl9XG4gICAgPC9BbmltYXRlUHJlc2VuY2U+XG4pO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFNDQUxFX0ZBREUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2FuaW1hdGlvbnNcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4vVXNlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2Vycyh7IHVzZXJzLCBsYXlvdXQgPSBcImZ1bGxcIiwgLi4ucmVzdCB9KSB7XG4gICAgY29uc3Qgc2xpY2VBbW91bnQgPSBsYXlvdXQgPT09IFwibWluaW1hbFwiID8gNyA6IEluZmluaXR5O1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIGd1dHRlcnMtMVwiPlxuICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAge3VzZXJzLnNsaWNlKDAsIHNsaWNlQW1vdW50KS5tYXAoKHVzZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGxheW91dCB7Li4uU0NBTEVfRkFERX0gY2xhc3NOYW1lPVwiY29sLWF1dG9cIiBrZXk9e3VzZXIuaWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyIHsuLi57IHVzZXIsIC4uLnJlc3QgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICB7bGF5b3V0ID09PSBcIm1pbmltYWxcIiAmJiB1c2Vycy5sZW5ndGggPiA3ICYmIChcbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgbGF5b3V0IHsuLi5TQ0FMRV9GQURFfSBjbGFzc05hbWU9XCJjb2wtYXV0b1wiIGtleT1cIm1vcmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtLXhzIHRleHQtbXV0ZWQtLTcwIG1sLTFcIj4rIHt1c2Vycy5sZW5ndGggLSBzbGljZUFtb3VudH08L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJzIH0gZnJvbSBcIi4vVXNlcnNcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlciB9IGZyb20gXCIuL1VzZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlclNlbGVjdCB9IGZyb20gXCIuL1VzZXJTZWxlY3RcIjtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbHRlclVzZXJzKGdsb2JhbFVzZXJzLCB1c2VycywgcXVlcnkpIHtcbiAgICBjb25zdCBsb3dlclF1ZXJ5ID0gcXVlcnkudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCBleGlzdGluZ1VzZXJzQnlFbWFpbCA9IHVzZXJzLm1hcCgoeyBlbWFpbCB9KSA9PiBlbWFpbCk7XG5cbiAgICBsZXQgZmlsdGVyZWRVc2VycyA9IGdsb2JhbFVzZXJzXG4gICAgICAgIC5maWx0ZXIoKHsgZW1haWwgfSkgPT4ge1xuICAgICAgICAgICAgLyogT25seSByZXR1cm4gdXNlcnMgdGhhdCBhcmUgbm90IHBhcnQgb2YgdGhlIHByb2plY3QgKi9cbiAgICAgICAgICAgIHJldHVybiAhZXhpc3RpbmdVc2Vyc0J5RW1haWwuaW5jbHVkZXMoZW1haWwpO1xuICAgICAgICB9KVxuICAgICAgICAuZmlsdGVyKCh7IGVtYWlsLCB1c2VybmFtZSB9KSA9PiB7XG4gICAgICAgICAgICAvKiBPbmx5IHJldHVybiB1c2VycyB0aGF0IG1hdGNoIHRoZSBxdWVyeSBvbiBlbWFpbCB8fCB1c2VybmFtZSAqL1xuICAgICAgICAgICAgcmV0dXJuIGVtYWlsLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJRdWVyeSkgfHwgdXNlcm5hbWUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclF1ZXJ5KTtcbiAgICAgICAgfSk7XG5cbiAgICByZXR1cm4gZmlsdGVyZWRVc2Vycztcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgaXNFbWFpbCB9IGZyb20gXCIuL2lzRW1haWxcIjtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRW1haWwoZW1haWwpIHtcbiAgICByZXR1cm4gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC8udGVzdChlbWFpbCk7XG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBRVUVSWV9LRVlTID0ge1xuICAgIFBST0pFQ1RfQllfVVNFUjogXCJwcm9qZWN0X2J5X3VzZXJcIixcbiAgICBQUk9KRUNUX0JZX0lEOiBcInByb2plY3RfYnlfaWRcIixcbiAgICBHTE9CQUxfVVNFUlM6IFwiZ2xvYmFsX3VzZXJzXCJcbn07XG5cbi8qIFByb2plY3QgcmVsYXRlZCBjYWxscyAqL1xuZXhwb3J0IGNvbnN0IGZldGNoUHJvamVjdHNCeVVzZXIgPSBhc3luYyAoeyB1c2VySWQgfSkgPT4ge1xuICAgIGxldCB1cmwgPSBcIi9hcGkvcHJvamVjdHMvZ2V0XCI7XG4gICAgaWYgKHVzZXJJZCkge1xuICAgICAgICB1cmwgPSBgJHt1cmx9LyR7dXNlcklkfWA7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gICAgcmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2plY3RCeUlkID0gYXN5bmMgKHsgcHJvamVjdElkIH0pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcHJvamVjdC9nZXQvJHtwcm9qZWN0SWR9YCk7XG4gICAgcmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL3Byb2plY3RzL2FkZFwiKTtcbiAgICByZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3QgPSBhc3luYyAoeyBwcm9qZWN0SWQgfSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvcHJvamVjdHMvZGVsZXRlLyR7cHJvamVjdElkfWApO1xuICAgIHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZWRpdFByb2plY3QgPSBhc3luYyAoeyBmb3JtUmVmLCBwcm9qZWN0SWQgfSkgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9lZGl0LyR7cHJvamVjdElkfWAsIHBhcmFtcyk7XG4gICAgcmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIFByb2plY3QgaW1hZ2UgcmVsYXRlZCBjYWxscyAqL1xuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RJbWFnZXMgPSBhc3luYyAoeyBwcm9qZWN0SWQsIGltYWdlcyB9KSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiBwYXJhbXMuYXBwZW5kKFwiaW1hZ2VzW11cIiwgaW1hZ2UpKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvaW1hZ2VzL2FkZC8ke3Byb2plY3RJZH1gLCBwYXJhbXMpO1xuICAgIHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvamVjdEltYWdlcyA9IGFzeW5jICh7IHByb2plY3RJZCwgaWQgfSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvaW1hZ2VzL2RlbGV0ZS8ke3Byb2plY3RJZH1gLCB7IGlkIH0pO1xuICAgIHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBVc2VyIHJlbGF0ZWQgY2FsbHMgKi9cbmV4cG9ydCBjb25zdCBmZXRjaEdvYmFsVXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS91c2Vycy9nZXRcIik7XG4gICAgcmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRVc2VyID0gYXN5bmMgKHsgcHJvamVjdElkLCBlbWFpbCB9KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS91c2Vycy9hZGQvJHtwcm9qZWN0SWR9YCwgeyBlbWFpbCB9KTtcbiAgICByZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAoeyBwcm9qZWN0SWQsIHVzZXJJZCB9KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS91c2Vycy9kZWxldGUvJHtwcm9qZWN0SWR9YCwgeyB1c2VySWQgfSk7XG4gICAgcmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzXCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQcm9qZWN0UmVzdWx0cyB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFByb2plY3RBZGQgfSBmcm9tIFwiLi9wcm9qZWN0LWFkZFwiO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOLCBTVEFHR0VSX1VQIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9hbmltYXRpb25zXCI7XG5cbi8qIEFwaSBjYWxscyAqL1xuaW1wb3J0IHsgZmV0Y2hQcm9qZWN0c0J5VXNlciwgUVVFUllfS0VZUyB9IGZyb20gXCIuLi9hcGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdE92ZXJ2aWV3KCkge1xuICAgIC8qIFN0YXRlICovXG4gICAgY29uc3QgW2lzQWRtaW4sIHNldElzQWRtaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHVzZXJJZCA9IGF0b2IobG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoXCI/XCIsIFwiXCIpKTtcblxuICAgIC8qIEhvb2tzICovXG4gICAgY29uc3QgeyBpc0xvYWRpbmc6IHByb2plY3RzTG9hZGluZywgZGF0YSA9IHt9IH0gPSB1c2VRdWVyeShcbiAgICAgICAgUVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIsXG4gICAgICAgICgpID0+IGZldGNoUHJvamVjdHNCeVVzZXIoeyB1c2VySWQgfSksXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9uU3VjY2VzczogKHsgdXNlciB9KSA9PiBzZXRJc0FkbWluKHVzZXIucm9sZXMuaW5jbHVkZXMoXCJST0xFX0FETUlOXCIpKSxcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICAvKiBDb25zdGFudHMgICovXG4gICAgY29uc3QgeyBwcm9qZWN0cyA9IFtdIH0gPSBkYXRhO1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAge3Byb2plY3RzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IHsuLi5GQURFX0lOfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lYXJQcm9ncmVzcyBjb2xvcj1cInNlY29uZGFyeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICA8UHJvamVjdFJlc3VsdHMgey4uLnsgcHJvamVjdHMgfX0+XG4gICAgICAgICAgICAgICAge2lzQWRtaW4gJiYgIXByb2plY3RzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uU1RBR0dFUl9VUChwcm9qZWN0cy5sZW5ndGgpfVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiYWRkLXByb2plY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC14bC0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0QWRkIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IWlzQWRtaW4gJiYgIXByb2plY3RzTG9hZGluZyAmJiBwcm9qZWN0cy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24ucCB7Li4uU1RBR0dFUl9VUCgpfSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YFlvdSBkb24ndCBoYXZlIGFueSBwcm9qZWN0cyB5ZXRgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLnA+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUHJvamVjdFJlc3VsdHM+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0YXJlYUF1dG9zaXplXCI7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gXCJyZWFjdC1zdmdcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tIFwiaWNvbnMvY2xvc2Uuc3ZnXCI7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IE1vZGFsLCBEcm9wem9uZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb25cIjtcbmltcG9ydCB7IFVzZXJzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdXNlcnNcIjtcbmltcG9ydCB7IFVzZXJBZGQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy91c2VyLWFkZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0TW9kYWwoe1xuICAgIHByb2plY3QgPSB7fSxcbiAgICB0b2dnbGVNb2RhbCxcbiAgICBvblN1Ym1pdCxcbiAgICB0aXRsZVBsYWNlaG9sZGVyID0gXCJUaGUgcHJvamVjdCBuYW1lXCIsXG4gICAgZGVzY3JpcHRpb25QbGFjZWhvbGRlciA9IFwiV2hhdCdzIHRoaXMgcHJvamVjdCBhYm91dD9cIixcbn0pIHtcbiAgICAvKiBDb25zdGFudHMgICovXG4gICAgY29uc3QgeyBpZDogcHJvamVjdElkID0gbnVsbCwgdGl0bGUgPSBcIlwiLCBkZXNjcmlwdGlvbiA9IFwiXCIsIHByb2plY3RJbWFnZXMgPSBbXSwgdXNlcnMgPSBbXSB9ID0gcHJvamVjdDtcblxuICAgIC8qIFN0YXRlICovXG4gICAgY29uc3QgW3Byb2plY3RUaXRsZSwgc2V0UHJvamVjdFRpdGxlXSA9IHVzZVN0YXRlKHRpdGxlKTtcbiAgICBjb25zdCBbcHJvamVjdERlc2NyaXB0aW9uLCBzZXRQcm9qZWN0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoZGVzY3JpcHRpb24pO1xuXG4gICAgLyogUmVmcyAqL1xuICAgIGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RhbCB7Li4ueyB0b2dnbGVNb2RhbCB9fSBkb21FbGVtZW50PXtkb2N1bWVudC5ib2R5fT5cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgcmVmPXtmb3JtUmVmfVxuICAgICAgICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fZm9ybVwiXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdChmb3JtUmVmKTtcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9faGVhZGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHQtNiBwdC1tZC0xMiBweC02IHBiLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicHJvamVjdFRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtLWNsZWFyIHRleHQtLXhsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJvamVjdFRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGl0bGVQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0UHJvamVjdFRpdGxlKHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Nsb3NlIGJ0biBidG4tbGluayBtbC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fYm9keSBwdC0zIHB4LTYgcGItMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicHJvamVjdERlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgV2hhdCdzIHRoaXMgcHJvamVjdCBhYm91dD9gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhQXV0b3NpemVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC0tdGV4dCBmb3JtLWNvbnRyb2wtLWNsZWFyIG1iLTEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcm9qZWN0RGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZGVzY3JpcHRpb25QbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb2plY3REZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHNldFByb2plY3REZXNjcmlwdGlvbih2YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmUgbWwtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdCB9fSBzaXplPVwibGdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyQWRkIHsuLi57IHVzZXJzLCBwcm9qZWN0IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wem9uZSB7Li4ueyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZXMgfX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fZm9vdGVyIHB4LTYgcGItNiBwYi1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTAgdy0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy0xIG1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2J0biBidG4gYnRuLWJsb2NrIGJ0bi1zZWNvbmRhcnkgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uc3BhbiBjbGFzc05hbWU9XCJidG4tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2F2ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICApO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0TW9kYWwgfSBmcm9tIFwiLi9Qcm9qZWN0TW9kYWxcIjtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSBcInJlYWN0LXN2Z1wiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSwgdXNlUXVlcnlDbGllbnQgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUHJvamVjdE1vZGFsIH0gZnJvbSBcIi4uL21vZGFsc1wiO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRQcm9qZWN0SWNvbiBmcm9tIFwiaWNvbnMvYWRkX3Byb2plY3Quc3ZnXCI7XG5cbi8qIEFwaSBjYWxscyAqL1xuaW1wb3J0IHsgYWRkUHJvamVjdCwgZmV0Y2hQcm9qZWN0QnlJZCwgUVVFUllfS0VZUywgZWRpdFByb2plY3QgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RBZGQoKSB7XG4gICAgLyogU3RhdGUgKi9cbiAgICBjb25zdCBbcHJvamVjdElkLCBzZXRQcm9qZWN0SWRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8qIEhvb2tzICovXG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG4gICAgLyogUXVlcmllcyAqL1xuICAgIGNvbnN0IHsgZGF0YTogcHJvamVjdCB9ID0gdXNlUXVlcnkoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSwgKCkgPT4gZmV0Y2hQcm9qZWN0QnlJZCh7IHByb2plY3RJZCB9KSwge1xuICAgICAgICBlbmFibGVkOiAhIXByb2plY3RJZCxcbiAgICB9KTtcblxuICAgIC8qIE11dGF0aW9ucyAqL1xuICAgIGNvbnN0IGFkZE11dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkUHJvamVjdCwge1xuICAgICAgICBvblN1Y2Nlc3M6ICh7IGlkIH0pID0+IHNldFByb2plY3RJZChpZCksXG4gICAgfSk7XG5cbiAgICBjb25zdCBlZGl0TXV0YXRpb24gPSB1c2VNdXRhdGlvbihlZGl0UHJvamVjdCwge1xuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHRvZ2dsZU1vZGFsKCksXG4gICAgfSk7XG5cbiAgICAvKiBDYWxsYmFja3MgKi9cbiAgICBjb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgc2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pO1xuXG4gICAgICAgIC8qIE11dGF0ZSBvbiBtb2RhbCBvcGVuICovXG4gICAgICAgIGlmICghbW9kYWxPcGVuKSBhZGRNdXRhdGlvbi5tdXRhdGUoKTtcblxuICAgICAgICAvKiBJbnZhbGlkYXRlIHByb2plY3RfYnlfdXNlciBvbiBjbG9zZSBtb2RhbCAqL1xuICAgICAgICBpZiAobW9kYWxPcGVuKSB7XG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLlBST0pFQ1RfQllfVVNFUik7XG4gICAgICAgICAgICBzZXRQcm9qZWN0SWQobnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZm9ybVJlZikgPT4gZWRpdE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYsIHByb2plY3RJZCB9KTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImNhcmQgY2FyZC0tbGluayBoLTEwMCBtYi0wXCIgc3R5bGU9e3sgbWluSGVpZ2h0OiA0MjcgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgcC0xMFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIHRleHQtZGVjb3JhdGlvbi1ub25lIHN0cmV0Y2hlZC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuLXRleHQgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIHRleHQtbXV0ZWQtLTQwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tNDhcIiBzcmM9e2FkZFByb2plY3RJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0tc20gbXQtMVwiPkFkZCBtb3JlIHByb2plY3RzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+e21vZGFsT3BlbiAmJiA8UHJvamVjdE1vZGFsIHsuLi57IHByb2plY3QsIG9uU3VibWl0LCB0b2dnbGVNb2RhbCB9fSAvPn08L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RBZGQgfSBmcm9tIFwiLi9Qcm9qZWN0QWRkXCI7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgUHJvamVjdEltYWdlIGZyb20gXCIuL1Byb2plY3RJbWFnZVwiO1xuaW1wb3J0IFByb2plY3RNZW51IGZyb20gXCIuL1Byb2plY3RNZW51XCI7XG5pbXBvcnQgeyBVc2VycyB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3VzZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoeyBwcm9qZWN0IH0pIHtcbiAgICAvKiBDb25zdGFudHMgKi9cbiAgICBjb25zdCB7IHNsdWcsIHRpdGxlLCBwcm9qZWN0SW1hZ2VzLCB1c2VycywgYXV0aG9yIH0gPSBwcm9qZWN0O1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGEgaHJlZj17YHByb2plY3RzLyR7c2x1Z31gfSB0aXRsZT17dGl0bGV9IGNsYXNzTmFtZT1cImNhcmQgY2FyZC0tbGluayBjYXJkLS1wcm9kdWN0XCI+XG4gICAgICAgICAgICA8UHJvamVjdEltYWdlIHsuLi57IHByb2plY3RJbWFnZXMgfX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTJcIj57dGl0bGUgPyB0aXRsZSA6IFwiQWRkIGEgbmljZSB0aXRsZVwifTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdDogeyBhdXRob3IgfSwgbGF5b3V0OiBcIm1pbmltYWxcIiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdE1lbnUgey4uLnsgcHJvamVjdElkOiBwcm9qZWN0LmlkIH19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tIFwicmVhY3Qtc3ZnXCI7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZEltYWdlSWNvbiBmcm9tIFwiaWNvbnMvYWRkX2ltYWdlLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0SW1hZ2UoeyBwcm9qZWN0SW1hZ2VzIH0pIHtcbiAgICAvKiBDb25zdGFudHMgKi9cbiAgICBjb25zdCB7IGltYWdlLCB0aXRsZSB9ID0gcHJvamVjdEltYWdlc1swXSB8fCB7fTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9faW1hZ2UgYm9yZGVyIG0tMlwiPlxuICAgICAgICAgICAge2ltYWdlICYmIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPXtpbWFnZX0gc3JjU2V0PXtgJHtpbWFnZX0gMnhgfSBhbHQ9e3RpdGxlfSAvPn1cbiAgICAgICAgICAgIHshaW1hZ2UgJiYgPFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTQ4IHRleHQtbXV0ZWQtLTQwXCIgc3JjPXthZGRJbWFnZUljb259IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tIFwicmVhY3Qtc3ZnXCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGVkaXRJY29uIGZyb20gXCJpY29ucy9lZGl0LnN2Z1wiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcImljb25zL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBjbG9zZUljb24gZnJvbSBcImljb25zL2Nsb3NlLnN2Z1wiO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTQ0FMRV9GQURFLCBTVEFHR0VSX0xFRlQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2FuaW1hdGlvbnNcIjtcblxuLyogQXBpIGNhbGxzICovXG5pbXBvcnQgeyBRVUVSWV9LRVlTLCBkZWxldGVQcm9qZWN0LCBmZXRjaFByb2plY3RCeUlkLCBlZGl0UHJvamVjdCB9IGZyb20gXCIuLi8uLi9hcGlcIjtcbmltcG9ydCB7IFByb2plY3RNb2RhbCB9IGZyb20gXCIuLi9tb2RhbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdE1lbnUoeyBwcm9qZWN0SWQgfSkge1xuICAgIC8qIEhvb2tzICovXG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG4gICAgLyogTXV0YXRpb25zICovXG4gICAgY29uc3QgZGVsZXRlTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVQcm9qZWN0LCB7XG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZWRpdE11dGF0aW9uID0gdXNlTXV0YXRpb24oZWRpdFByb2plY3QsIHtcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB0b2dnbGVNb2RhbCgpLFxuICAgIH0pO1xuXG4gICAgLyogU3RhdGUgKi9cbiAgICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLyogVG9nZ2xlcyAqL1xuICAgIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiBzZXRNZW51T3BlbighbWVudU9wZW4pO1xuXG4gICAgY29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIHNldE1vZGFsT3BlbighbW9kYWxPcGVuKTtcblxuICAgICAgICBpZiAobW9kYWxPcGVuKSBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLlBST0pFQ1RfQllfVVNFUik7XG4gICAgfTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2FyZF9fbWVudSBtZW51ICR7bWVudU9wZW4gJiYgXCJpcy1hY3RpdmVcIn1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9fd3JhcHBlciBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIHBvc2l0aW9uLXJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZU1lbnUoKTtcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyIGluaXRpYWw9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZW51T3BlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBrZXk9XCJjbG9zZVwiIGNsYXNzTmFtZT1cIm1lbnVfX2RvdHNcIiB7Li4uU0NBTEVfRkFERX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNCB0ZXh0LXdoaXRlXCIgc3JjPXtjbG9zZUljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBrZXk9XCJkb3RzXCIgY2xhc3NOYW1lPVwibWVudV9fZG90c1wiIHsuLi5TQ0FMRV9GQURFfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVudV9fZG90XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZW51X19kb3RcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lbnVfX2RvdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgICAgICB7bWVudU9wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVCb2R5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnsgcHJvamVjdElkLCBlZGl0TXV0YXRpb24sIGRlbGV0ZU11dGF0aW9uLCBtb2RhbE9wZW4sIHRvZ2dsZU1vZGFsLCB0b2dnbGVNZW51IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNvbnN0IE1lbnVCb2R5ID0gKHsgcHJvamVjdElkLCBlZGl0TXV0YXRpb24sIGRlbGV0ZU11dGF0aW9uLCBtb2RhbE9wZW4sIHRvZ2dsZU1vZGFsLCB0b2dnbGVNZW51IH0pID0+IHtcbiAgICAvKiBRdWVyaWVzICovXG4gICAgY29uc3QgeyBkYXRhOiBwcm9qZWN0IH0gPSB1c2VRdWVyeShbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdLCAoKSA9PiBmZXRjaFByb2plY3RCeUlkKHsgcHJvamVjdElkIH0pLCB7XG4gICAgICAgIGVuYWJsZWQ6ICEhcHJvamVjdElkLFxuICAgIH0pO1xuXG4gICAgLyogQ2FsbGJhY2tzICovXG4gICAgY29uc3QgdXBkYXRlUHJvamVjdCA9IChhY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJlZGl0XCIpIHRvZ2dsZU1vZGFsKCk7XG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwiZGVsZXRlXCIpIGRlbGV0ZU11dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZm9ybVJlZikgPT4gZWRpdE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYsIHByb2plY3RJZCB9KTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9fYm9keVwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnVfX2xpc3QgbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBpY29uPXtlZGl0SWNvbn0gaW5kZXg9ezF9IGNhbGxiYWNrPXsoKSA9PiB1cGRhdGVQcm9qZWN0KFwiZWRpdFwiKX0gLz5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gaWNvbj17ZGVsZXRlSWNvbn0gaW5kZXg9ezB9IGNhbGxiYWNrPXsoKSA9PiB1cGRhdGVQcm9qZWN0KFwiZGVsZXRlXCIpfSAvPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2Ugb25FeGl0Q29tcGxldGU9eygpID0+IHRvZ2dsZU1lbnUoKX0+XG4gICAgICAgICAgICAgICAge21vZGFsT3BlbiAmJiA8UHJvamVjdE1vZGFsIHsuLi57IHByb2plY3QsIG9uU3VibWl0LCB0b2dnbGVNb2RhbCB9fSAvPn1cbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuY29uc3QgTWVudUl0ZW0gPSAoeyBpY29uLCBpbmRleCwgY2FsbGJhY2sgfSkgPT4gKFxuICAgIDxtb3Rpb24ubGkgY2xhc3NOYW1lPVwibGlzdF9faXRlbSBtci0yXCIgey4uLlNUQUdHRVJfTEVGVChpbmRleCl9PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgdGV4dC13aGl0ZSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTYgdGV4dC13aGl0ZSBtci0yXCIgc3JjPXtpY29ufSAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L21vdGlvbi5saT5cbik7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNUQUdHRVJfVVAgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJlc3VsdHMoeyBwcm9qZWN0cywgY2hpbGRyZW4gfSkge1xuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaDUgdGV4dC13aGl0ZSBtYi02XCI+WW91ciBwcm9qZWN0czwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctLWVxdWFsaXplZCBndXR0ZXJzLTVcIj5cbiAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgcHJvamVjdEluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5TVEFHR0VSX1VQKHByb2plY3RJbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0IHsuLi57IHByb2plY3QgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0UmVzdWx0cyB9IGZyb20gXCIuL1Byb2plY3RSZXN1bHRzXCI7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IFByb2plY3RPdmVydmlldyBmcm9tIFwiLi9jb21wb25lbnRzL1Byb2plY3RPdmVydmlld1wiO1xuXG4vKiBDbGllbnQgKi9cbmNvbnN0IGNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCh7XG4gICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgcXVlcmllczoge1xuICAgICAgICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxuLyogUmVuZGVyICovXG5jb25zdCBwcm9qZWN0T3ZlcnZpZXdOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0T3ZlcnZpZXdcIik7XG5pZiAocHJvamVjdE92ZXJ2aWV3Tm9kZSAhPT0gbnVsbCkge1xuICAgIHJlbmRlcihcbiAgICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgey4uLnsgY2xpZW50IH19PlxuICAgICAgICAgICAgPFByb2plY3RPdmVydmlldyB7Li4ucHJvamVjdE92ZXJ2aWV3Tm9kZS5kYXRhc2V0fSAvPlxuICAgICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+LFxuICAgICAgICBwcm9qZWN0T3ZlcnZpZXdOb2RlXG4gICAgKTtcbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ3BhcnNsZXlqcyc7XG5cbmNvbnN0IHBhcnNsZXlDb25maWcgPSB7XG4gICAgZXJyb3JDbGFzczogJ2lzLWVycm9yJyxcbiAgICBleGNsdWRlZDogJ2lucHV0W3R5cGU9YnV0dG9uXSwgaW5wdXRbdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXJlc2V0XSwgaW5wdXRbdHlwZT1oaWRkZW5dLCBbZGlzYWJsZWRdLCA6aGlkZGVuJyxcbiAgICBzdWNjZXNzQ2xhc3M6ICdpcy1zdWNjZXNzJ1xufTtcblxuJCgnZm9ybTpub3QoW25vdmFsaWRhdGVdKScpLnBhcnNsZXkocGFyc2xleUNvbmZpZyk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9