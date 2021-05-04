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
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _project_overview_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../project-overview/api */ "./assets/app/js/react/project-overview/api.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

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
      className: "container d-flex flex-grow-1 px-0"
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
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
        var user = filteredUsers[focusedUser];

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
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var icons_star_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/star.svg */ "./assets/app/img/icons/star.svg");
/* harmony import */ var icons_star_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_star_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var icons_delete_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! icons/delete.svg */ "./assets/app/img/icons/delete.svg");
/* harmony import */ var icons_delete_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(icons_delete_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _project_overview_api__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../project-overview/api */ "./assets/app/js/react/project-overview/api.js");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/animations */ "./assets/app/js/react/common/animations.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */





/* Assets */



/* Api calls */


/* Animations */


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

  var deleteUserMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_project_overview_api__WEBPACK_IMPORTED_MODULE_7__["deleteUser"], {
    onSuccess: function onSuccess() {
      return queryClient.invalidateQueries([_project_overview_api__WEBPACK_IMPORTED_MODULE_7__["QUERY_KEYS"].PROJECT_BY_ID, projectId]);
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
    src: icons_delete_svg__WEBPACK_IMPORTED_MODULE_6___default.a
  }))), isAuthor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__status user__status--leader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "user__status-icon icon text-tertiary mt-0",
    src: icons_star_svg__WEBPACK_IMPORTED_MODULE_5___default.a
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__["AnimatePresence"], null, isLoading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_animations__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({
    key: "loader",
    className: "position-absolute d-flex"
  }, _common_animations__WEBPACK_IMPORTED_MODULE_8__["SCALE_FADE"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_3__["default"], {
    color: "inherit",
    size: 16
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common_animations__WEBPACK_IMPORTED_MODULE_8__["default"], _extends({
    key: "default"
  }, _common_animations__WEBPACK_IMPORTED_MODULE_8__["SCALE_FADE"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user__initials"
  }, userInitials), children)));
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
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

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common */ "./assets/app/js/react/common/index.js");
/* harmony import */ var _components_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/users */ "./assets/app/js/react/components/users/index.js");
/* harmony import */ var _components_user_add__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/user-add */ "./assets/app/js/react/components/user-add/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    toggleModal: toggleModal,
    domElement: document.body
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modals */ "./assets/app/js/react/project-overview/components/modals/index.js");
/* harmony import */ var icons_add_project_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/add_project.svg */ "./assets/app/img/icons/add_project.svg");
/* harmony import */ var icons_add_project_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_add_project_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ "./assets/app/js/react/project-overview/api.js");
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
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

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX2ltYWdlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9hZGRfcHJvamVjdC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX3VzZXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2Nsb3NlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9kZWxldGUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2VkaXQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL3N0YXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvYWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvb2JqZWN0Zml0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL0JveC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vRHJvcHpvbmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL01vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbW1vbi9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2VyLWFkZC9Vc2VyQWRkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlci1hZGQvVXNlckFkZFNlYXJjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3VzZXItYWRkL1VzZXJBZGRTZWFyY2hSZXN1bHRzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlci1hZGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3VzZXJzL1VzZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2Vycy9Vc2VyU2VsZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlcnMvVXNlcnMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2hlbHBlcnMvZmlsdGVyVXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvaGVscGVycy9pc0VtYWlsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcHJvamVjdC1vdmVydmlldy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvUHJvamVjdE92ZXJ2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9tb2RhbHMvUHJvamVjdE1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9tb2RhbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC1hZGQvUHJvamVjdEFkZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC1hZGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC9Qcm9qZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9wcm9qZWN0L1Byb2plY3RJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC9Qcm9qZWN0TWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC9Qcm9qZWN0UmVzdWx0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOlsiQWxlcnQiLCJlbCIsIkRPTSIsInRvZ2dsZSIsInF1ZXJ5U2VsZWN0b3IiLCJvbkluaXQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJvcGFjaXR5IiwidmlzaWJpbGl0eSIsInRyYW5zZm9ybSIsImFsZXJ0Tm9kZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibm9kZSIsIiQiLCJvYmplY3RGaXRJbWFnZXMiLCJCb3giLCJoZWFkZXIiLCJjb250ZW50IiwiYm94T3BlbiIsInRvZ2dsZUJveCIsImNoaWxkcmVuIiwiY3JlYXRlUG9ydGFsIiwiRkFERV9JTiIsIkZBREVfSU5fVVAiLCJjbG9zZUljb24iLCJib2R5IiwiRHJvcHpvbmUiLCJwcm9qZWN0SWQiLCJwcm9qZWN0SW1hZ2VzIiwiQ09MVU1OX0xBWU9VVCIsInF1ZXJ5Q2xpZW50IiwidXNlUXVlcnlDbGllbnQiLCJ1c2VEcm9wem9uZSIsImFjY2VwdCIsIm5vQ2xpY2siLCJvbkRyb3AiLCJhY2NlcHRlZEZpbGVzIiwidXBkYXRlUHJvamVjdEltYWdlcyIsImltYWdlcyIsImdldFJvb3RQcm9wcyIsImdldElucHV0UHJvcHMiLCJpc0RyYWdBY3RpdmUiLCJhZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24iLCJ1c2VNdXRhdGlvbiIsImFkZFByb2plY3RJbWFnZXMiLCJvblN1Y2Nlc3MiLCJpbnZhbGlkYXRlUXVlcmllcyIsIlFVRVJZX0tFWVMiLCJQUk9KRUNUX0JZX0lEIiwiZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uIiwiZGVsZXRlUHJvamVjdEltYWdlcyIsImFjdGlvbiIsInByb3BzIiwibXV0YXRlIiwibWFwIiwiaW1hZ2VJbmRleCIsImltYWdlIiwidGl0bGUiLCJpZCIsIlNUQUdHRVJfVVAiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImxlbmd0aCIsImlzUGFyZW50RHJhZ0FjdGl2ZSIsIkRyb3B6b25lSW5uZXIiLCJub0RyYWdFdmVudHNCdWJibGluZyIsImFkZEltYWdlSWNvbiIsIk1vZGFsIiwidG9nZ2xlTW9kYWwiLCJkb21FbGVtZW50IiwidmFyaWFudCIsInJlbmRlciIsIlRSQU5TRk9STV9VUCIsIkVBU0UiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImR1cmF0aW9uIiwieSIsInR5cGUiLCJkYW1waW5nIiwic3RpZmZuZXNzIiwiU0NBTEVfRkFERSIsInNjYWxlIiwiaW5kZXgiLCJkZWxheSIsIlNUQUdHRVJfTEVGVCIsIngiLCJBbmltYXRpb25XcmFwcGVyIiwiVXNlckFkZCIsInVzZXJzIiwicHJvamVjdCIsInVzZVN0YXRlIiwic2V0Qm94T3BlbiIsImFkZFVzZXJJY29uIiwiVXNlckFkZFNlYXJjaCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJmb2N1c2VkVXNlciIsInNldEZvY3VzZWRVc2VyIiwidXNlUXVlcnkiLCJHTE9CQUxfVVNFUlMiLCJmZXRjaEdvYmFsVXNlcnMiLCJkYXRhIiwiZ2xvYmFsVXNlcnMiLCJnbG9iYWxVc2Vyc0xvYWRpbmciLCJpc0xvYWRpbmciLCJmaWx0ZXJlZFVzZXJzIiwiZmlsdGVyVXNlcnMiLCJxdWVyeVJlZiIsInVzZVJlZiIsImFkZFVzZXJNdXRhdGlvbiIsImFkZFVzZXIiLCJjdXJyZW50Iiwic2VsZWN0IiwiaGFuZGxlQ2hhbmdlIiwidmFsdWUiLCJ0YXJnZXQiLCJoYW5kbGVPbktleURvd24iLCJpbmNsdWRlcyIsImtleSIsInByZXZlbnREZWZhdWx0IiwidXNlciIsImlzRW1haWwiLCJlbWFpbCIsImhhbmRsZUNsaWNrIiwidXNlck11dGF0aW9uTG9hZGluZyIsIlVzZXJBZGRTZWFyY2hSZXN1bHRzIiwicmVzdWx0cyIsIm5ld1VzZXIiLCJ1c2VybmFtZSIsInVzZXJDb2xvciIsInVzZXJJbmRleCIsIlVzZXIiLCJzaXplIiwiYXV0aG9yIiwidXNlcklkIiwiaXNBdXRob3IiLCJjbGFzc2VzIiwiam9pbiIsImRlbGV0ZVVzZXJNdXRhdGlvbiIsImRlbGV0ZVVzZXIiLCJkZWxldGVJY29uIiwic3Rhckljb24iLCJVc2VyQXZhdGFyIiwidXNlckluaXRpYWxzIiwic3BsaXQiLCJ3b3JkIiwidG9VcHBlckNhc2UiLCJVc2VySW5mbyIsIlVzZXJTZWxlY3QiLCJpc0ZvY3VzZWQiLCJ1c2VFZmZlY3QiLCJoYW5kbGVTdGF0dXMiLCJVc2VycyIsImxheW91dCIsInJlc3QiLCJzbGljZUFtb3VudCIsIkluZmluaXR5Iiwic2xpY2UiLCJsb3dlclF1ZXJ5IiwidG9Mb3dlckNhc2UiLCJleGlzdGluZ1VzZXJzQnlFbWFpbCIsImZpbHRlciIsInRlc3QiLCJQUk9KRUNUX0JZX1VTRVIiLCJmZXRjaFByb2plY3RzQnlVc2VyIiwidXJsIiwiYXhpb3MiLCJnZXQiLCJyZXN1bHQiLCJmZXRjaFByb2plY3RCeUlkIiwiYWRkUHJvamVjdCIsInBvc3QiLCJkZWxldGVQcm9qZWN0IiwiZWRpdFByb2plY3QiLCJmb3JtUmVmIiwicGFyYW1zIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJQcm9qZWN0T3ZlcnZpZXciLCJpc0FkbWluIiwic2V0SXNBZG1pbiIsImF0b2IiLCJsb2NhdGlvbiIsInNlYXJjaCIsInJlcGxhY2UiLCJyb2xlcyIsInByb2plY3RzTG9hZGluZyIsInByb2plY3RzIiwiUHJvamVjdE1vZGFsIiwib25TdWJtaXQiLCJ0aXRsZVBsYWNlaG9sZGVyIiwiZGVzY3JpcHRpb25QbGFjZWhvbGRlciIsImRlc2NyaXB0aW9uIiwicHJvamVjdFRpdGxlIiwic2V0UHJvamVjdFRpdGxlIiwicHJvamVjdERlc2NyaXB0aW9uIiwic2V0UHJvamVjdERlc2NyaXB0aW9uIiwiUHJvamVjdEFkZCIsInNldFByb2plY3RJZCIsIm1vZGFsT3BlbiIsInNldE1vZGFsT3BlbiIsImVuYWJsZWQiLCJhZGRNdXRhdGlvbiIsImVkaXRNdXRhdGlvbiIsIm1pbkhlaWdodCIsImFkZFByb2plY3RJY29uIiwiUHJvamVjdCIsInNsdWciLCJQcm9qZWN0SW1hZ2UiLCJQcm9qZWN0TWVudSIsImRlbGV0ZU11dGF0aW9uIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsInRvZ2dsZU1lbnUiLCJNZW51Qm9keSIsInVwZGF0ZVByb2plY3QiLCJlZGl0SWNvbiIsIk1lbnVJdGVtIiwiaWNvbiIsImNhbGxiYWNrIiwiUHJvamVjdFJlc3VsdHMiLCJwcm9qZWN0SW5kZXgiLCJjbGllbnQiLCJRdWVyeUNsaWVudCIsImRlZmF1bHRPcHRpb25zIiwicXVlcmllcyIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIiwicHJvamVjdE92ZXJ2aWV3Tm9kZSIsImdldEVsZW1lbnRCeUlkIiwiZGF0YXNldCIsInBhcnNsZXlDb25maWciLCJlcnJvckNsYXNzIiwiZXhjbHVkZWQiLCJzdWNjZXNzQ2xhc3MiLCJwYXJzbGV5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7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O0FBQ0EsSUFBTThNLE1BQU0sR0FBRyxJQUFJQyx1REFBSixDQUFnQjtBQUMzQkMsZ0JBQWMsRUFBRTtBQUNaQyxXQUFPLEVBQUU7QUFDTEMsMEJBQW9CLEVBQUU7QUFEakI7QUFERztBQURXLENBQWhCLENBQWY7QUFRQTs7QUFDQSxJQUFNQyxtQkFBbUIsR0FBRzlOLFFBQVEsQ0FBQytOLGNBQVQsQ0FBd0IsaUJBQXhCLENBQTVCOztBQUNBLElBQUlELG1CQUFtQixLQUFLLElBQTVCLEVBQWtDO0FBQzlCaEssMERBQU0sZUFDRiwyREFBQywrREFBRDtBQUEyQjJKLFVBQU0sRUFBTkE7QUFBM0Isa0JBQ0ksMkRBQUMsbUVBQUQsRUFBcUJLLG1CQUFtQixDQUFDRSxPQUF6QyxDQURKLENBREUsRUFJRkYsbUJBSkUsQ0FBTjtBQU1ILEM7Ozs7Ozs7Ozs7OztBQzFCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBLElBQU1HLGFBQWEsR0FBRztBQUNsQkMsWUFBVSxFQUFFLFVBRE07QUFFbEJDLFVBQVEsRUFBRSxvR0FGUTtBQUdsQkMsY0FBWSxFQUFFO0FBSEksQ0FBdEI7QUFNQWhPLDZDQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QmlPLE9BQTVCLENBQW9DSixhQUFwQyxFOzs7Ozs7Ozs7OztBQ1RBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL2FwcC9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9hc3NldHMvYXBwL2pzL21haW4uanNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hZGRfaW1hZ2Uuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FkZF9wcm9qZWN0LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hZGRfdXNlci5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvY2xvc2Uuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2RlbGV0ZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZWRpdC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvc3Rhci5zdmdcIjsiLCJjbGFzcyBBbGVydCB7XG4gICAgY29uc3RydWN0b3IoZWwpIHtcbiAgICAgICAgdGhpcy5ET00gPSB7IGVsIH07XG4gICAgICAgIHRoaXMuRE9NLnRvZ2dsZSA9IHRoaXMuRE9NLmVsLnF1ZXJ5U2VsZWN0b3IoXCIuYWxlcnRfX2J0blwiKTtcblxuICAgICAgICB0aGlzLm9uSW5pdCgpO1xuICAgIH1cbiAgICBvbkluaXQoKSB7XG4gICAgICAgIHRoaXMuRE9NLnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy50b2dnbGUoKSk7XG4gICAgfVxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgdGhpcy5ET00uZWwuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIHRoaXMuRE9NLmVsLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICAgICAgICB0aGlzLkRPTS5lbC5zdHlsZS50cmFuc2Zvcm0gPSBcInRyYW5zbGF0ZVkoMTAwJSlcIjtcbiAgICB9XG59XG5cbmNvbnN0IGFsZXJ0Tm9kZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtYWxlcnRdXCIpO1xuWy4uLmFsZXJ0Tm9kZXNdLmZvckVhY2goKG5vZGUpID0+IG5ldyBBbGVydChub2RlKSk7XG4iLCIvLyBDU1NcbmltcG9ydCAnLi4vc2Nzcy9tYWluLnNjc3MnO1xuXG4vLyBQb2xseWZpbHNcbmltcG9ydCAncmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lJztcblxuLy8gQ29yZVxuaW1wb3J0ICcuL3ZhbGlkYXRpb24nO1xuaW1wb3J0ICcuL2FsZXJ0JztcblxuLy8gUGx1Z2luc1xuaW1wb3J0ICcuL29iamVjdGZpdCc7XG5cbi8vIFJlYWN0XG5pbXBvcnQgJy4vcmVhY3QvcHJvamVjdC1vdmVydmlldydcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgb2JqZWN0Rml0SW1hZ2VzIGZyb20gJ29iamVjdC1maXQtaW1hZ2VzJztcblxuJChmdW5jdGlvbigpIHtcbiAgICBvYmplY3RGaXRJbWFnZXMoKTtcbn0pO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSBcInJlYWN0LXN2Z1wiO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOLCBGQURFX0lOX1VQIH0gZnJvbSBcIi4vYW5pbWF0aW9uc1wiO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSBcImljb25zL2Nsb3NlLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3goeyBoZWFkZXIsIGNvbnRlbnQsIGJveE9wZW4sIHRvZ2dsZUJveCwgY2hpbGRyZW4gfSkge1xuICAgIHJldHVybiBjcmVhdGVQb3J0YWwoXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICB7Ym94T3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiYm94LW92ZXJsYXlcIiB7Li4uRkFERV9JTn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYga2V5PVwiYm94LWNvbnRlbnRcIiBjbGFzc05hbWU9XCJib3hfX2NvbnRlbnQgYm9yZGVyIHAtNVwiIHsuLi5GQURFX0lOX1VQfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94X19oZWFkZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWJhc2VsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0tbGcgbWItMVwiPntoZWFkZXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS02MCBtYi0wXCI+e2NvbnRlbnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fY2xvc2UgYnRuIGJ0bi1saW5rIG1sLWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVCb3h9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTJcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hfX2JvZHkgZC1mbGV4IG10LTRcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPixcbiAgICAgICAgZG9jdW1lbnQuYm9keVxuICAgICk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tIFwicmVhY3Qtc3ZnXCI7XG5pbXBvcnQgeyB1c2VEcm9wem9uZSB9IGZyb20gXCJyZWFjdC1kcm9wem9uZVwiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tIFwiaWNvbnMvY2xvc2Uuc3ZnXCI7XG5pbXBvcnQgYWRkSW1hZ2VJY29uIGZyb20gXCJpY29ucy9hZGRfaW1hZ2Uuc3ZnXCI7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNUQUdHRVJfVVAgfSBmcm9tIFwiLi9hbmltYXRpb25zXCI7XG5cbi8qIEFwaSBjYWxscyAqL1xuaW1wb3J0IHsgYWRkUHJvamVjdEltYWdlcywgZGVsZXRlUHJvamVjdEltYWdlcywgUVVFUllfS0VZUyB9IGZyb20gXCIuLi9wcm9qZWN0LW92ZXJ2aWV3L2FwaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wem9uZSh7IHByb2plY3RJZCwgcHJvamVjdEltYWdlcyB9KSB7XG4gICAgLyogQ29udGFudHMgKi9cbiAgICBjb25zdCBDT0xVTU5fTEFZT1VUID0gXCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXhsLTNcIjtcblxuICAgIC8qIEhvb2tzICovXG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG4gICAgY29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSB9ID0gdXNlRHJvcHpvbmUoe1xuICAgICAgICBhY2NlcHQ6IFwiaW1hZ2UvKlwiLFxuICAgICAgICBub0NsaWNrOiB0cnVlLFxuICAgICAgICBvbkRyb3A6IChhY2NlcHRlZEZpbGVzKSA9PiB1cGRhdGVQcm9qZWN0SW1hZ2VzKFwiYWRkXCIsIHsgaW1hZ2VzOiBhY2NlcHRlZEZpbGVzIH0pLFxuICAgIH0pO1xuXG4gICAgLyogTXV0YXRpb25zICovXG4gICAgY29uc3QgYWRkUHJvamVjdEltYWdlc011dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkUHJvamVjdEltYWdlcywge1xuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0pLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlUHJvamVjdEltYWdlcywge1xuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0pLFxuICAgIH0pO1xuXG4gICAgLyogQ2FsbGJhY2tzICovXG4gICAgY29uc3QgdXBkYXRlUHJvamVjdEltYWdlcyA9IChhY3Rpb24sIHByb3BzKSA9PiB7XG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwiYWRkXCIpIGFkZFByb2plY3RJbWFnZXNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQsIC4uLnByb3BzIH0pO1xuICAgICAgICBpZiAoYWN0aW9uID09PSBcImRlbGV0ZVwiKSBkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkLCAuLi5wcm9wcyB9KTtcbiAgICB9O1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZVwiIHsuLi5nZXRSb290UHJvcHMoKX0+XG4gICAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0tZXF1YWxpemVkIGd1dHRlcnMtNVwiPlxuICAgICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdEltYWdlcy5tYXAoKHsgaW1hZ2UsIHRpdGxlLCBpZCB9LCBpbWFnZUluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBsYXlvdXQgey4uLlNUQUdHRVJfVVAoaW1hZ2VJbmRleCl9IGNsYXNzTmFtZT17Q09MVU1OX0xBWU9VVH0ga2V5PXtpZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZV9fY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZHJvcHpvbmVfX2ltYWdlIGltZy1mbHVpZFwiIHNyYz17aW1hZ2V9IGFsdD17dGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIGRyb3B6b25lX19pbWFnZS1kZWxldGUgcC0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVByb2plY3RJbWFnZXMoXCJkZWxldGVcIiwgeyBpZCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTggdGV4dC1iYXNlIG10LTBcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBrZXk9XCJhZGQtaW1hZ2VcIiB7Li4uU1RBR0dFUl9VUChwcm9qZWN0SW1hZ2VzLmxlbmd0aCl9IGNsYXNzTmFtZT17Q09MVU1OX0xBWU9VVH0gbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3B6b25lSW5uZXIgey4uLnsgdXBkYXRlUHJvamVjdEltYWdlcywgaXNQYXJlbnREcmFnQWN0aXZlOiBpc0RyYWdBY3RpdmUgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbi8qIElubmVyIGRyb3B6b25lICovXG5jb25zdCBEcm9wem9uZUlubmVyID0gKHsgdXBkYXRlUHJvamVjdEltYWdlcywgaXNQYXJlbnREcmFnQWN0aXZlIH0pID0+IHtcbiAgICAvKiBIb29rcyAqL1xuICAgIGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzLCBpc0RyYWdBY3RpdmUgfSA9IHVzZURyb3B6b25lKHtcbiAgICAgICAgYWNjZXB0OiBcImltYWdlLypcIixcbiAgICAgICAgbm9EcmFnRXZlbnRzQnViYmxpbmc6IHRydWUsXG4gICAgICAgIG9uRHJvcDogKGFjY2VwdGVkRmlsZXMpID0+IHVwZGF0ZVByb2plY3RJbWFnZXMoXCJhZGRcIiwgeyBpbWFnZXM6IGFjY2VwdGVkRmlsZXMgfSksXG4gICAgfSk7XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3B6b25lXCIgey4uLmdldFJvb3RQcm9wcygpfT5cbiAgICAgICAgICAgIDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxuICAgICAgICAgICAgPGFydGljbGVcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkcm9wem9uZV9fY29udGFpbmVyIGNhcmQgY2FyZC0tbGluayAke1xuICAgICAgICAgICAgICAgICAgICAoaXNEcmFnQWN0aXZlIHx8IGlzUGFyZW50RHJhZ0FjdGl2ZSkgJiYgXCJpcy1wdWxzaW5nXCJcbiAgICAgICAgICAgICAgICB9IGgtMTAwIG1iLTBgfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgcC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4tdGV4dCBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIHRleHQtd2hpdGUgdGV4dC1tdXRlZC0tNDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS00OFwiIHNyYz17YWRkSW1hZ2VJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0tc20gbXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0RyYWdBY3RpdmUgfHwgaXNQYXJlbnREcmFnQWN0aXZlID8gXCJEcm9wIHRoZSBpbWFnZXNcIiA6IFwiQWRkIHNvbWUgaW1hZ2VzXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiwgVFJBTlNGT1JNX1VQIH0gZnJvbSBcIi4vYW5pbWF0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbCh7IHRvZ2dsZU1vZGFsLCBjaGlsZHJlbiwgZG9tRWxlbWVudCwgdmFyaWFudCA9IFwiZGVmYXVsdFwiIH0pIHtcbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiAoXG4gICAgICAgIDxkaXYga2V5PVwiY3VzdG9tLW1vZGFsXCIgY2xhc3NOYW1lPXtgY3VzdG9tLW1vZGFsIGN1c3RvbS1tb2RhbC0tJHt2YXJpYW50fWB9PlxuICAgICAgICAgICAgPG1vdGlvbi5kaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19vdmVybGF5XCIgb25DbGljaz17dG9nZ2xlTW9kYWx9IHsuLi5GQURFX0lOfSAvPlxuICAgICAgICAgICAgPG1vdGlvbi5hcnRpY2xlIGtleT1cImN1c3RvbS1tb2RhbF9fY29udGVudFwiIGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fY29udGVudFwiIHsuLi5UUkFOU0ZPUk1fVVB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGQtZmxleCBmbGV4LWdyb3ctMSBweC0wXCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uYXJ0aWNsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIGlmIChkb21FbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwocmVuZGVyKCksIGRvbUVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiByZW5kZXIoKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmNvbnN0IEVBU0UgPSBbMC42NSwgMCwgMC4zNSwgMV07XG5cbmNvbnN0IEZBREVfSU4gPSB7XG4gICAgaW5pdGlhbDoge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgIH0sXG4gICAgYW5pbWF0ZToge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgIH0sXG4gICAgZXhpdDoge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgIH0sXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBlYXNlOiBFQVNFLFxuICAgICAgICBkdXJhdGlvbjogMC4yLFxuICAgIH0sXG59O1xuXG5jb25zdCBGQURFX0lOX1VQID0ge1xuICAgIGluaXRpYWw6IHtcbiAgICAgICAgeTogMjAwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgIH0sXG4gICAgYW5pbWF0ZToge1xuICAgICAgICB5OiAwLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgICAgICAgICAgZGFtcGluZzogNDIsXG4gICAgICAgICAgICBzdGlmZm5lc3M6IDgwMCxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGV4aXQ6IHtcbiAgICAgICAgeTogMjAwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgICAgICAgICAgZGFtcGluZzogNDIsXG4gICAgICAgICAgICBzdGlmZm5lc3M6IDEyMDAsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbmNvbnN0IFRSQU5TRk9STV9VUCA9IHtcbiAgICBpbml0aWFsOiB7XG4gICAgICAgIHk6IFwiMTAwJVwiLFxuICAgIH0sXG4gICAgYW5pbWF0ZToge1xuICAgICAgICB5OiBcIjAlXCIsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICAgICAgICBkYW1waW5nOiA0MSxcbiAgICAgICAgICAgIHN0aWZmbmVzczogNjAwLFxuICAgICAgICB9LFxuICAgIH0sXG4gICAgZXhpdDoge1xuICAgICAgICB5OiBcIjEwMCVcIixcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICAgICAgICAgIGRhbXBpbmc6IDQxLFxuICAgICAgICAgICAgc3RpZmZuZXNzOiAxMjAwLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG5jb25zdCBTQ0FMRV9GQURFID0ge1xuICAgIGluaXRpYWw6IHtcbiAgICAgICAgc2NhbGU6IDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgfSxcbiAgICBhbmltYXRlOiB7XG4gICAgICAgIHNjYWxlOiAxLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgIH0sXG4gICAgZXhpdDoge1xuICAgICAgICBzY2FsZTogMCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgZWFzZTogRUFTRSxcbiAgICAgICAgZHVyYXRpb246IDAuMixcbiAgICB9LFxufTtcblxuY29uc3QgU1RBR0dFUl9VUCA9IChpbmRleCA9IDApID0+ICh7XG4gICAgaW5pdGlhbDogeyBvcGFjaXR5OiAwLCB5OiAzNSB9LFxuICAgIGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgeTogMCwgdHJhbnNpdGlvbjogeyB0eXBlOiBcInNwcmluZ1wiLCBkYW1waW5nOiAzMCwgc3RpZmZuZXNzOiA0NTAsIGRlbGF5OiBpbmRleCAqIDAuMDM1IH0gfSxcbiAgICBleGl0OiB7IG9wYWNpdHk6IDAsIHNjYWxlOiAwLjI1LCB0cmFuc2l0aW9uOiB7IHR5cGU6IFwic3ByaW5nXCIsIGRhbXBpbmc6IDMwLCBzdGlmZm5lc3M6IDYwMCB9IH0sXG59KTtcblxuY29uc3QgU1RBR0dFUl9MRUZUID0gKGluZGV4ID0gMCkgPT4gKHtcbiAgICBpbml0aWFsOiB7IG9wYWNpdHk6IDAsIHg6IDEwIH0sXG4gICAgYW5pbWF0ZTogeyBvcGFjaXR5OiAxLCB4OiAwLCB0cmFuc2l0aW9uOiB7IHR5cGU6IFwic3ByaW5nXCIsIGRhbXBpbmc6IDMwLCBzdGlmZm5lc3M6IDMwMCwgZGVsYXk6IGluZGV4ICogMC4wMzUgfSB9LFxuICAgIGV4aXQ6IHsgb3BhY2l0eTogMCwgeDogMTAsIHRyYW5zaXRpb246IHsgdHlwZTogXCJzcHJpbmdcIiwgZGFtcGluZzogMzAsIHN0aWZmbmVzczogNjAwIH0gfSxcbn0pO1xuXG5jb25zdCBBbmltYXRpb25XcmFwcGVyID0gKHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IDxtb3Rpb24uZGl2IHsuLi5wcm9wc30+e2NoaWxkcmVufTwvbW90aW9uLmRpdj47XG5cbmV4cG9ydCB7IEZBREVfSU4sIEZBREVfSU5fVVAsIFRSQU5TRk9STV9VUCwgU0NBTEVfRkFERSwgU1RBR0dFUl9VUCwgU1RBR0dFUl9MRUZUIH07XG5leHBvcnQgZGVmYXVsdCBBbmltYXRpb25XcmFwcGVyO1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBEcm9wem9uZSB9IGZyb20gXCIuL0Ryb3B6b25lXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsIH0gZnJvbSBcIi4vTW9kYWxcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgQm94IH0gZnJvbSBcIi4vQm94XCI7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gXCJyZWFjdC1zdmdcIjtcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkVXNlckljb24gZnJvbSBcImljb25zL2FkZF91c2VyLnN2Z1wiO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBCb3ggfSBmcm9tIFwiLi4vLi4vY29tbW9uXCI7XG5pbXBvcnQgVXNlckFkZFNlYXJjaCBmcm9tIFwiLi9Vc2VyQWRkU2VhcmNoXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBZGQoeyB1c2VycywgcHJvamVjdCB9KSB7XG4gICAgLyogU3RhdGUgKi9cbiAgICBjb25zdCBbYm94T3Blbiwgc2V0Qm94T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvKiBDYWxsYmFja3MgKi9cbiAgICBjb25zdCB0b2dnbGVCb3ggPSAoKSA9PiBzZXRCb3hPcGVuKCFib3hPcGVuKTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmUgbWwtMlwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgdXNlciB1c2VyLS1sZyB1c2VyLS1hZGRcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlQm94fT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1c2VyX19hdmF0YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyX19pbml0aWFsc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19pY29uIGljb24gaWNvbi0tMTIgbXQtMFwiIHNyYz17YWRkVXNlckljb259IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPEJveCBoZWFkZXI9XCJTZWxlY3QgdXNlcnNcIiBjb250ZW50PVwiQ2hvb3NlIHNvbWUgdXNlcnMgdG8gY29sbGFib3JhdGUgd2l0aC5cIiB7Li4ueyBib3hPcGVuLCB0b2dnbGVCb3ggfX0+XG4gICAgICAgICAgICAgICAgPFVzZXJBZGRTZWFyY2ggey4uLnsgdXNlcnMsIHByb2plY3QsIHRvZ2dsZUJveCB9fSAvPlxuICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgVXNlckFkZFNlYXJjaFJlc3VsdHMgZnJvbSAnLi9Vc2VyQWRkU2VhcmNoUmVzdWx0cyc7XG5pbXBvcnQgeyBVc2VycyB9IGZyb20gJy4uL3VzZXJzJztcblxuLyogSGVscGVycyAqL1xuaW1wb3J0IHsgaXNFbWFpbCwgZmlsdGVyVXNlcnMgfSBmcm9tICcuLi8uLi9oZWxwZXJzJztcblxuLyogQXBpIGNhbGxzICovXG5pbXBvcnQgeyBhZGRVc2VyLCBmZXRjaEdvYmFsVXNlcnMsIFFVRVJZX0tFWVMgfSBmcm9tICcuLi8uLi9wcm9qZWN0LW92ZXJ2aWV3L2FwaSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBZGRTZWFyY2goeyB1c2VycywgcHJvamVjdCwgdG9nZ2xlQm94IH0pIHtcblx0LyogU3RhdGUgKi9cblx0Y29uc3QgW3F1ZXJ5LCBzZXRRdWVyeV0gPSB1c2VTdGF0ZSgnJyk7XG5cdGNvbnN0IFtmb2N1c2VkVXNlciwgc2V0Rm9jdXNlZFVzZXJdID0gdXNlU3RhdGUoMCk7XG5cblx0LyogUXVlcmllcyAqL1xuXHRjb25zdCB7IGRhdGE6IGdsb2JhbFVzZXJzID0gW10sIGlzTG9hZGluZzogZ2xvYmFsVXNlcnNMb2FkaW5nIH0gPSB1c2VRdWVyeShcblx0XHRRVUVSWV9LRVlTLkdMT0JBTF9VU0VSUyxcblx0XHRmZXRjaEdvYmFsVXNlcnNcblx0KTtcblxuXHQvKiBDb25zdGFudHMgKi9cblx0Y29uc3QgZmlsdGVyZWRVc2VycyA9IGZpbHRlclVzZXJzKGdsb2JhbFVzZXJzLCB1c2VycywgcXVlcnkpO1xuXG5cdC8qIFJlZnMgKi9cblx0Y29uc3QgcXVlcnlSZWYgPSB1c2VSZWYoKTtcblxuXHQvKiBIb29rcyAqL1xuXHRjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cblx0LyogTXV0YXRpb25zICovXG5cdGNvbnN0IGFkZFVzZXJNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZFVzZXIsIHtcblx0XHRvblN1Y2Nlc3M6ICgpID0+IHtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3QuaWRdKTtcblx0XHRcdHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuR0xPQkFMX1VTRVJTKTtcblxuXHRcdFx0cXVlcnlSZWYuY3VycmVudC5zZWxlY3QoKTtcblx0XHRcdHNldFF1ZXJ5KCcnKTtcblx0XHR9LFxuXHR9KTtcblxuXHQvKiBDYWxsYmFja3MgKi9cblx0Y29uc3QgaGFuZGxlQ2hhbmdlID0gKHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0UXVlcnkodmFsdWUpO1xuXG5cdGNvbnN0IGhhbmRsZU9uS2V5RG93biA9IChldmVudCkgPT4ge1xuXHRcdGlmIChbJ0VudGVyJywgJ1RhYiddLmluY2x1ZGVzKGV2ZW50LmtleSkpIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdGlmIChxdWVyeSAhPT0gJycgJiYgZm9jdXNlZFVzZXIgIT09IG51bGwpIHtcblx0XHRcdFx0Y29uc3QgdXNlciA9IGZpbHRlcmVkVXNlcnNbZm9jdXNlZFVzZXJdO1xuXG5cdFx0XHRcdGlmIChpc0VtYWlsKHVzZXIuZW1haWwpKSB7XG5cdFx0XHRcdFx0YWRkVXNlck11dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZDogcHJvamVjdC5pZCwgZW1haWw6IHVzZXIuZW1haWwgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Y29uc3QgaGFuZGxlQ2xpY2sgPSAoZW1haWwpID0+IHtcblx0XHRpZiAoaXNFbWFpbChlbWFpbCkpIHtcblx0XHRcdGFkZFVzZXJNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQ6IHByb2plY3QuaWQsIGVtYWlsOiBlbWFpbCB9KTtcblx0XHR9XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gZmxleC1ncm93LTFcIj5cblx0XHRcdDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdCB9fSB2YXJpYW50PVwiaW50ZXJhY3RpdmVcIiBzaXplPVwieGxcIiAvPlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuXHRcdFx0XHQ8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJ1c2VyUXVlcnlcIj5cblx0XHRcdFx0XHRTZWFyY2ggbmFtZSBvciBlbWFpbFxuXHRcdFx0XHQ8L2xhYmVsPlxuXHRcdFx0XHQ8aW5wdXRcblx0XHRcdFx0XHRjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIGZvcm0tY29udHJvbC0tc2VhcmNoXCJcblx0XHRcdFx0XHRpZD1cInVzZXJRdWVyeVwiXG5cdFx0XHRcdFx0bmFtZT1cInVzZXJRdWVyeVwiXG5cdFx0XHRcdFx0cGxhY2Vob2xkZXI9XCJTZWFyY2ggbmFtZSBvciBlbWFpbFwiXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIlxuXHRcdFx0XHRcdGF1dG9Gb2N1c1xuXHRcdFx0XHRcdHZhbHVlPXtxdWVyeX1cblx0XHRcdFx0XHRvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuXHRcdFx0XHRcdG9uS2V5RG93bj17aGFuZGxlT25LZXlEb3dufVxuXHRcdFx0XHRcdGF1dG9Db21wbGV0ZT1cIm9mZlwiXG5cdFx0XHRcdFx0cmVmPXtxdWVyeVJlZn1cblx0XHRcdFx0Lz5cblx0XHRcdFx0PFVzZXJBZGRTZWFyY2hSZXN1bHRzXG5cdFx0XHRcdFx0ey4uLntcblx0XHRcdFx0XHRcdGZpbHRlcmVkVXNlcnMsXG5cdFx0XHRcdFx0XHRxdWVyeSxcblx0XHRcdFx0XHRcdGhhbmRsZUNsaWNrLFxuXHRcdFx0XHRcdFx0Zm9jdXNlZFVzZXIsXG5cdFx0XHRcdFx0XHRzZXRGb2N1c2VkVXNlcixcblx0XHRcdFx0XHRcdHVzZXJNdXRhdGlvbkxvYWRpbmc6IGFkZFVzZXJNdXRhdGlvbi5pc0xvYWRpbmcsXG5cdFx0XHRcdFx0XHRnbG9iYWxVc2Vyc0xvYWRpbmcsXG5cdFx0XHRcdFx0fX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG10LTRcIj5cblx0XHRcdFx0PGFcblx0XHRcdFx0XHRocmVmPVwiI1wiXG5cdFx0XHRcdFx0Y2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIHRleHQtLXNtIHRleHQtd2hpdGUgdGV4dC1kZWNvcmF0aW9uLXVuZGVybGluZSB0ZXh0LW11dGVkLS02MFwiXG5cdFx0XHRcdFx0dGl0bGU9XCJSZW1vdmUgYWxsIHVzZXJzXCI+XG5cdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwiYnRuX190ZXh0XCI+UmVtb3ZlIGFsbCB1c2Vyczwvc3Bhbj5cblx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNtIGJ0bi1zZWNvbmRhcnkgbWwtYXV0byBweC04XCIgb25DbGljaz17dG9nZ2xlQm94fT5cblx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJidG5fX3RleHRcIj5Eb25lPC9zcGFuPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvZGl2PlxuXHQpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOIH0gZnJvbSAnLi4vLi4vY29tbW9uL2FuaW1hdGlvbnMnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VyU2VsZWN0IH0gZnJvbSAnLi4vdXNlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQWRkU2VhcmNoUmVzdWx0cyh7XG5cdGZpbHRlcmVkVXNlcnMsXG5cdHF1ZXJ5LFxuXHRoYW5kbGVDbGljayxcblx0Zm9jdXNlZFVzZXIsXG5cdHNldEZvY3VzZWRVc2VyLFxuXHR1c2VyTXV0YXRpb25Mb2FkaW5nLFxuXHRnbG9iYWxVc2Vyc0xvYWRpbmcsXG59KSB7XG5cdC8qIFJlbmRlciBmaWx0ZXJlZCByZXN1bHRzICovXG5cdGNvbnN0IHJlc3VsdHMgPSAoKSA9PiB7XG5cdFx0Y29uc3QgbmV3VXNlciA9IHsgZW1haWw6IHF1ZXJ5LCB1c2VybmFtZTogJ05ldyB1c2VyJywgdXNlckNvbG9yOiAnI0NDMjVFOCcgfTtcblxuXHRcdGlmIChmaWx0ZXJlZFVzZXJzLmxlbmd0aCA+IDApIHtcblx0XHRcdHJldHVybiBmaWx0ZXJlZFVzZXJzLm1hcCgodXNlciwgdXNlckluZGV4KSA9PiAoXG5cdFx0XHRcdDxtb3Rpb24ubGkgey4uLkZBREVfSU59IGtleT17dXNlci5pZH0gY2xhc3NOYW1lPVwibGlzdF9faXRlbSB2ci0zXCI+XG5cdFx0XHRcdFx0PFVzZXJTZWxlY3Rcblx0XHRcdFx0XHRcdHsuLi57IHVzZXIsIHVzZXJJbmRleCwgaGFuZGxlQ2xpY2ssIHNldEZvY3VzZWRVc2VyIH19XG5cdFx0XHRcdFx0XHRpc0ZvY3VzZWQ9e3VzZXJJbmRleCA9PT0gZm9jdXNlZFVzZXIgJiYgcXVlcnl9XG5cdFx0XHRcdFx0XHRpc0xvYWRpbmc9e3VzZXJNdXRhdGlvbkxvYWRpbmd9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9tb3Rpb24ubGk+XG5cdFx0XHQpKTtcblx0XHR9XG5cblx0XHRpZiAoIWdsb2JhbFVzZXJzTG9hZGluZykge1xuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0PG1vdGlvbi5saSB7Li4uRkFERV9JTn0ga2V5PVwiTmV3IHVzZXJcIiBjbGFzc05hbWU9XCJsaXN0X19pdGVtIGlzLWZvY3VzZWQgdnItM1wiPlxuXHRcdFx0XHRcdDxVc2VyU2VsZWN0XG5cdFx0XHRcdFx0XHR7Li4ueyB1c2VyOiBuZXdVc2VyLCBoYW5kbGVDbGljaywgc2V0Rm9jdXNlZFVzZXIgfX1cblx0XHRcdFx0XHRcdGlzRm9jdXNlZD17cXVlcnkubGVuZ3RofVxuXHRcdFx0XHRcdFx0aXNMb2FkaW5nPXt1c2VyTXV0YXRpb25Mb2FkaW5nfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvbW90aW9uLmxpPlxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdHtxdWVyeSAhPT0gJycgJiYgKFxuXHRcdFx0XHQ8bW90aW9uLnVsIHsuLi5GQURFX0lOfSBjbGFzc05hbWU9XCJib3hfX2xpc3QgbGlzdFwiPlxuXHRcdFx0XHRcdHtyZXN1bHRzKCl9XG5cdFx0XHRcdDwvbW90aW9uLnVsPlxuXHRcdFx0KX1cblx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0KTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlckFkZCB9IGZyb20gXCIuL1VzZXJBZGRcIjtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSAncmVhY3QtcXVlcnknO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgc3Rhckljb24gZnJvbSAnaWNvbnMvc3Rhci5zdmcnO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSAnaWNvbnMvZGVsZXRlLnN2Zyc7XG5cbi8qIEFwaSBjYWxscyAqL1xuaW1wb3J0IHsgZGVsZXRlVXNlciwgUVVFUllfS0VZUyB9IGZyb20gJy4uLy4uL3Byb2plY3Qtb3ZlcnZpZXcvYXBpJztcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IEFuaW1hdGlvbldyYXBwZXIsIHsgU0NBTEVfRkFERSB9IGZyb20gJy4uLy4uL2NvbW1vbi9hbmltYXRpb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcih7IHVzZXIsIHByb2plY3QsIHZhcmlhbnQgPSAnZGVmYXVsdCcsIHNpemUgPSAnbWQnIH0pIHtcblx0LyogSG9va3MgKi9cblx0Y29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCB7IGlkOiBwcm9qZWN0SWQsIGF1dGhvciB9ID0gcHJvamVjdDtcblx0Y29uc3QgeyBpZDogdXNlcklkLCBlbWFpbCB9ID0gdXNlcjtcblxuXHRjb25zdCBpc0F1dGhvciA9IGVtYWlsID09PSBhdXRob3I7XG5cdGNvbnN0IGNsYXNzZXMgPSBbJ3VzZXInLCBgdXNlci0tJHtzaXplfWAsIGB1c2VyLS0ke3ZhcmlhbnR9YCwgaXNBdXRob3IgJiYgJ3VzZXItLWF1dGhvciddLmpvaW4oJyAnKTtcblxuXHQvKiBNdXRhdGlvbnMgKi9cblx0Y29uc3QgZGVsZXRlVXNlck11dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlVXNlciwge1xuXHRcdG9uU3VjY2VzczogKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSksXG5cdH0pO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cblx0XHRcdDxVc2VyQXZhdGFyIGlzTG9hZGluZz17ZGVsZXRlVXNlck11dGF0aW9uLmlzTG9hZGluZ30gey4uLnVzZXJ9PlxuXHRcdFx0XHR7dmFyaWFudCA9PT0gJ2ludGVyYWN0aXZlJyAmJiAhaXNBdXRob3IgJiYgKFxuXHRcdFx0XHRcdDxidXR0b25cblx0XHRcdFx0XHRcdGNsYXNzTmFtZT1cInVzZXJfX2FjdGlvbiBidG4gYnRuLWxpbmsgcC0wXCJcblx0XHRcdFx0XHRcdHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdFx0b25DbGljaz17KCkgPT4gZGVsZXRlVXNlck11dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgdXNlcklkIH0pfT5cblx0XHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9fYWN0aW9uLWljb24gaWNvbiBpY29uLS0xNFwiIHNyYz17ZGVsZXRlSWNvbn0gLz5cblx0XHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdFx0KX1cblx0XHRcdDwvVXNlckF2YXRhcj5cblx0XHRcdHtpc0F1dGhvciAmJiAoXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlcl9fc3RhdHVzIHVzZXJfX3N0YXR1cy0tbGVhZGVyXCI+XG5cdFx0XHRcdFx0PFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19zdGF0dXMtaWNvbiBpY29uIHRleHQtdGVydGlhcnkgbXQtMFwiIHNyYz17c3Rhckljb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0KX1cblx0XHQ8L2Rpdj5cblx0KTtcbn1cblxuZXhwb3J0IGNvbnN0IFVzZXJBdmF0YXIgPSAoeyB1c2VybmFtZSwgdXNlckNvbG9yLCBpc0xvYWRpbmcsIGNoaWxkcmVuIH0pID0+IHtcblx0LyogQ29uc3RhbnRzICovXG5cdGNvbnN0IHVzZXJJbml0aWFscyA9IHVzZXJuYW1lLnNwbGl0KCcgJykubWFwKCh3b3JkKSA9PiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkpO1xuXG5cdC8qIFJlbmRlciAqL1xuXHRyZXR1cm4gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlcl9fYXZhdGFyXCIgc3R5bGU9e3sgJy0tdGhlbWUnOiB1c2VyQ29sb3IgfX0+XG5cdFx0XHQ8QW5pbWF0ZVByZXNlbmNlPlxuXHRcdFx0XHR7aXNMb2FkaW5nID8gKFxuXHRcdFx0XHRcdDxBbmltYXRpb25XcmFwcGVyIGtleT1cImxvYWRlclwiIGNsYXNzTmFtZT1cInBvc2l0aW9uLWFic29sdXRlIGQtZmxleFwiIHsuLi5TQ0FMRV9GQURFfT5cblx0XHRcdFx0XHRcdDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwiaW5oZXJpdFwiIHNpemU9ezE2fSAvPlxuXHRcdFx0XHRcdDwvQW5pbWF0aW9uV3JhcHBlcj5cblx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHQ8QW5pbWF0aW9uV3JhcHBlciBrZXk9XCJkZWZhdWx0XCIgey4uLlNDQUxFX0ZBREV9PlxuXHRcdFx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPVwidXNlcl9faW5pdGlhbHNcIj57dXNlckluaXRpYWxzfTwvc3Bhbj5cblx0XHRcdFx0XHRcdHtjaGlsZHJlbn1cblx0XHRcdFx0XHQ8L0FuaW1hdGlvbldyYXBwZXI+XG5cdFx0XHRcdCl9XG5cdFx0XHQ8L0FuaW1hdGVQcmVzZW5jZT5cblx0XHQ8L2Rpdj5cblx0KTtcbn07XG5cbmV4cG9ydCBjb25zdCBVc2VySW5mbyA9ICh7IHVzZXJuYW1lLCBlbWFpbCB9KSA9PiAoXG5cdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIG1sLTNcIj5cblx0XHQ8cCBjbGFzc05hbWU9XCJtYi0wXCI+e3VzZXJuYW1lfTwvcD5cblx0XHQ8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkLS02MCB0ZXh0LS14c1wiPntlbWFpbH08L3A+XG5cdDwvZGl2PlxuKTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tICdyZWFjdC1zdmcnO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRVc2VySWNvbiBmcm9tICdpY29ucy9hZGRfdXNlci5zdmcnO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBVc2VyQXZhdGFyLCBVc2VySW5mbyB9IGZyb20gJy4vVXNlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJTZWxlY3QoeyB1c2VyLCB1c2VySW5kZXgsIGhhbmRsZUNsaWNrLCBpc0ZvY3VzZWQsIHNldEZvY3VzZWRVc2VyLCBpc0xvYWRpbmcgfSkge1xuXHQvKiBFZmZlY3RzICovXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aXNGb2N1c2VkICYmIHNldEZvY3VzZWRVc2VyKHVzZXJJbmRleCk7XG5cdH0sIFtpc0ZvY3VzZWRdKTtcblxuXHR1c2VFZmZlY3QoKCkgPT4ge1xuXHRcdHJldHVybiAoKSA9PiBzZXRGb2N1c2VkVXNlcigwKTtcblx0fSwgW10pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBoYW5kbGVTdGF0dXMgPSAoYWN0aW9uKSA9PiB7XG5cdFx0c2V0Rm9jdXNlZFVzZXIoYWN0aW9uID09PSAnZW50ZXInID8gdXNlckluZGV4IDogMCk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0Y2xhc3NOYW1lPXtgdXNlciB1c2VyLS1zZWxlY3QgJHtpc0ZvY3VzZWQgJiYgJ2lzLWZvY3VzZWQnfSB1c2VyLS14bGB9XG5cdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayh1c2VyLmVtYWlsKX1cblx0XHRcdG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlU3RhdHVzKCdlbnRlcicpfVxuXHRcdFx0b25Nb3VzZUxlYXZlPXsoKSA9PiBoYW5kbGVTdGF0dXMoJ2xlYXZlJyl9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxVc2VyQXZhdGFyIGlzTG9hZGluZz17aXNMb2FkaW5nICYmIGlzRm9jdXNlZH0gey4uLnVzZXJ9IC8+XG5cdFx0XHRcdDxVc2VySW5mbyB7Li4udXNlcn0gLz5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJ1c2VyX19hZGQgdGV4dC1zZWNvbmRhcnkgcm91bmRlZC1jaXJjbGUgbWwtYXV0b1wiPlxuXHRcdFx0XHRcdDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9fYWRkLWljb24gaWNvbiBpY29uLS0xMiB0ZXh0LXNlY29uZGFyeVwiIHNyYz17YWRkVXNlckljb259IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9idXR0b24+XG5cdCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU0NBTEVfRkFERSB9IGZyb20gXCIuLi8uLi9jb21tb24vYW5pbWF0aW9uc1wiO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgVXNlciBmcm9tIFwiLi9Vc2VyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJzKHsgdXNlcnMsIGxheW91dCA9IFwiZnVsbFwiLCAuLi5yZXN0IH0pIHtcbiAgICBjb25zdCBzbGljZUFtb3VudCA9IGxheW91dCA9PT0gXCJtaW5pbWFsXCIgPyA3IDogSW5maW5pdHk7XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBhbGlnbi1pdGVtcy1jZW50ZXIgZ3V0dGVycy0xXCI+XG4gICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICB7dXNlcnMuc2xpY2UoMCwgc2xpY2VBbW91bnQpLm1hcCgodXNlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgbGF5b3V0IHsuLi5TQ0FMRV9GQURFfSBjbGFzc05hbWU9XCJjb2wtYXV0b1wiIGtleT17dXNlci5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXIgey4uLnsgdXNlciwgLi4ucmVzdCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIHtsYXlvdXQgPT09IFwibWluaW1hbFwiICYmIHVzZXJzLmxlbmd0aCA+IDcgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBsYXlvdXQgey4uLlNDQUxFX0ZBREV9IGNsYXNzTmFtZT1cImNvbC1hdXRvXCIga2V5PVwibW9yZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC0teHMgdGV4dC1tdXRlZC0tNzAgbWwtMVwiPisge3VzZXJzLmxlbmd0aCAtIHNsaWNlQW1vdW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlcnMgfSBmcm9tIFwiLi9Vc2Vyc1wiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VyIH0gZnJvbSBcIi4vVXNlclwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VyU2VsZWN0IH0gZnJvbSBcIi4vVXNlclNlbGVjdFwiO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZmlsdGVyVXNlcnMoZ2xvYmFsVXNlcnMsIHVzZXJzLCBxdWVyeSkge1xuICAgIGNvbnN0IGxvd2VyUXVlcnkgPSBxdWVyeS50b0xvd2VyQ2FzZSgpO1xuICAgIGNvbnN0IGV4aXN0aW5nVXNlcnNCeUVtYWlsID0gdXNlcnMubWFwKCh7IGVtYWlsIH0pID0+IGVtYWlsKTtcblxuICAgIGxldCBmaWx0ZXJlZFVzZXJzID0gZ2xvYmFsVXNlcnNcbiAgICAgICAgLmZpbHRlcigoeyBlbWFpbCB9KSA9PiB7XG4gICAgICAgICAgICAvKiBPbmx5IHJldHVybiB1c2VycyB0aGF0IGFyZSBub3QgcGFydCBvZiB0aGUgcHJvamVjdCAqL1xuICAgICAgICAgICAgcmV0dXJuICFleGlzdGluZ1VzZXJzQnlFbWFpbC5pbmNsdWRlcyhlbWFpbCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5maWx0ZXIoKHsgZW1haWwsIHVzZXJuYW1lIH0pID0+IHtcbiAgICAgICAgICAgIC8qIE9ubHkgcmV0dXJuIHVzZXJzIHRoYXQgbWF0Y2ggdGhlIHF1ZXJ5IG9uIGVtYWlsIHx8IHVzZXJuYW1lICovXG4gICAgICAgICAgICByZXR1cm4gZW1haWwudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhsb3dlclF1ZXJ5KSB8fCB1c2VybmFtZS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyUXVlcnkpO1xuICAgICAgICB9KTtcblxuICAgIHJldHVybiBmaWx0ZXJlZFVzZXJzO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBpc0VtYWlsIH0gZnJvbSAnLi9pc0VtYWlsJztcbmV4cG9ydCB7IGRlZmF1bHQgYXMgZmlsdGVyVXNlcnMgfSBmcm9tICcuL2ZpbHRlclVzZXJzJztcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRW1haWwoZW1haWwpIHtcbiAgICByZXR1cm4gL15bXlxcc0BdK0BbXlxcc0BdK1xcLlteXFxzQF0rJC8udGVzdChlbWFpbCk7XG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmV4cG9ydCBjb25zdCBRVUVSWV9LRVlTID0ge1xuICAgIFBST0pFQ1RfQllfVVNFUjogXCJwcm9qZWN0X2J5X3VzZXJcIixcbiAgICBQUk9KRUNUX0JZX0lEOiBcInByb2plY3RfYnlfaWRcIixcbiAgICBHTE9CQUxfVVNFUlM6IFwiZ2xvYmFsX3VzZXJzXCJcbn07XG5cbi8qIFByb2plY3QgcmVsYXRlZCBjYWxscyAqL1xuZXhwb3J0IGNvbnN0IGZldGNoUHJvamVjdHNCeVVzZXIgPSBhc3luYyAoeyB1c2VySWQgfSkgPT4ge1xuICAgIGxldCB1cmwgPSBcIi9hcGkvcHJvamVjdHMvZ2V0XCI7XG4gICAgaWYgKHVzZXJJZCkge1xuICAgICAgICB1cmwgPSBgJHt1cmx9LyR7dXNlcklkfWA7XG4gICAgfVxuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KHVybCk7XG4gICAgcmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFByb2plY3RCeUlkID0gYXN5bmMgKHsgcHJvamVjdElkIH0pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoYC9hcGkvcHJvamVjdC9nZXQvJHtwcm9qZWN0SWR9YCk7XG4gICAgcmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvYXBpL3Byb2plY3RzL2FkZFwiKTtcbiAgICByZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3QgPSBhc3luYyAoeyBwcm9qZWN0SWQgfSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvcHJvamVjdHMvZGVsZXRlLyR7cHJvamVjdElkfWApO1xuICAgIHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZWRpdFByb2plY3QgPSBhc3luYyAoeyBmb3JtUmVmLCBwcm9qZWN0SWQgfSkgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9lZGl0LyR7cHJvamVjdElkfWAsIHBhcmFtcyk7XG4gICAgcmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIFByb2plY3QgaW1hZ2UgcmVsYXRlZCBjYWxscyAqL1xuZXhwb3J0IGNvbnN0IGFkZFByb2plY3RJbWFnZXMgPSBhc3luYyAoeyBwcm9qZWN0SWQsIGltYWdlcyB9KSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiBwYXJhbXMuYXBwZW5kKFwiaW1hZ2VzW11cIiwgaW1hZ2UpKTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvaW1hZ2VzL2FkZC8ke3Byb2plY3RJZH1gLCBwYXJhbXMpO1xuICAgIHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvamVjdEltYWdlcyA9IGFzeW5jICh7IHByb2plY3RJZCwgaWQgfSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvaW1hZ2VzL2RlbGV0ZS8ke3Byb2plY3RJZH1gLCB7IGlkIH0pO1xuICAgIHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBVc2VyIHJlbGF0ZWQgY2FsbHMgKi9cbmV4cG9ydCBjb25zdCBmZXRjaEdvYmFsVXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS91c2Vycy9nZXRcIik7XG4gICAgcmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBhZGRVc2VyID0gYXN5bmMgKHsgcHJvamVjdElkLCBlbWFpbCB9KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS91c2Vycy9hZGQvJHtwcm9qZWN0SWR9YCwgeyBlbWFpbCB9KTtcbiAgICByZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVVzZXIgPSBhc3luYyAoeyBwcm9qZWN0SWQsIHVzZXJJZCB9KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS91c2Vycy9kZWxldGUvJHtwcm9qZWN0SWR9YCwgeyB1c2VySWQgfSk7XG4gICAgcmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzXCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQcm9qZWN0UmVzdWx0cyB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFByb2plY3RBZGQgfSBmcm9tIFwiLi9wcm9qZWN0LWFkZFwiO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOLCBTVEFHR0VSX1VQIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9hbmltYXRpb25zXCI7XG5cbi8qIEFwaSBjYWxscyAqL1xuaW1wb3J0IHsgZmV0Y2hQcm9qZWN0c0J5VXNlciwgUVVFUllfS0VZUyB9IGZyb20gXCIuLi9hcGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdE92ZXJ2aWV3KCkge1xuICAgIC8qIFN0YXRlICovXG4gICAgY29uc3QgW2lzQWRtaW4sIHNldElzQWRtaW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IHVzZXJJZCA9IGF0b2IobG9jYXRpb24uc2VhcmNoLnJlcGxhY2UoXCI/XCIsIFwiXCIpKTtcblxuICAgIC8qIEhvb2tzICovXG4gICAgY29uc3QgeyBpc0xvYWRpbmc6IHByb2plY3RzTG9hZGluZywgZGF0YSA9IHt9IH0gPSB1c2VRdWVyeShcbiAgICAgICAgUVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIsXG4gICAgICAgICgpID0+IGZldGNoUHJvamVjdHNCeVVzZXIoeyB1c2VySWQgfSksXG4gICAgICAgIHtcbiAgICAgICAgICAgIG9uU3VjY2VzczogKHsgdXNlciB9KSA9PiBzZXRJc0FkbWluKHVzZXIucm9sZXMuaW5jbHVkZXMoXCJST0xFX0FETUlOXCIpKSxcbiAgICAgICAgfVxuICAgICk7XG5cbiAgICAvKiBDb25zdGFudHMgICovXG4gICAgY29uc3QgeyBwcm9qZWN0cyA9IFtdIH0gPSBkYXRhO1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAge3Byb2plY3RzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IHsuLi5GQURFX0lOfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lYXJQcm9ncmVzcyBjb2xvcj1cInNlY29uZGFyeVwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICA8UHJvamVjdFJlc3VsdHMgey4uLnsgcHJvamVjdHMgfX0+XG4gICAgICAgICAgICAgICAge2lzQWRtaW4gJiYgIXByb2plY3RzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uU1RBR0dFUl9VUChwcm9qZWN0cy5sZW5ndGgpfVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiYWRkLXByb2plY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC14bC0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0QWRkIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAgICAgICAgICB7IWlzQWRtaW4gJiYgIXByb2plY3RzTG9hZGluZyAmJiBwcm9qZWN0cy5sZW5ndGggPT09IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24ucCB7Li4uU1RBR0dFUl9VUCgpfSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlXCIgbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YFlvdSBkb24ndCBoYXZlIGFueSBwcm9qZWN0cyB5ZXRgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLnA+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvUHJvamVjdFJlc3VsdHM+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0YXJlYUF1dG9zaXplXCI7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gXCJyZWFjdC1zdmdcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tIFwiaWNvbnMvY2xvc2Uuc3ZnXCI7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IE1vZGFsLCBEcm9wem9uZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb25cIjtcbmltcG9ydCB7IFVzZXJzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdXNlcnNcIjtcbmltcG9ydCB7IFVzZXJBZGQgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy91c2VyLWFkZFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0TW9kYWwoe1xuICAgIHByb2plY3QgPSB7fSxcbiAgICB0b2dnbGVNb2RhbCxcbiAgICBvblN1Ym1pdCxcbiAgICB0aXRsZVBsYWNlaG9sZGVyID0gXCJUaGUgcHJvamVjdCBuYW1lXCIsXG4gICAgZGVzY3JpcHRpb25QbGFjZWhvbGRlciA9IFwiV2hhdCdzIHRoaXMgcHJvamVjdCBhYm91dD9cIixcbn0pIHtcbiAgICAvKiBDb25zdGFudHMgICovXG4gICAgY29uc3QgeyBpZDogcHJvamVjdElkID0gbnVsbCwgdGl0bGUgPSBcIlwiLCBkZXNjcmlwdGlvbiA9IFwiXCIsIHByb2plY3RJbWFnZXMgPSBbXSwgdXNlcnMgPSBbXSB9ID0gcHJvamVjdDtcblxuICAgIC8qIFN0YXRlICovXG4gICAgY29uc3QgW3Byb2plY3RUaXRsZSwgc2V0UHJvamVjdFRpdGxlXSA9IHVzZVN0YXRlKHRpdGxlKTtcbiAgICBjb25zdCBbcHJvamVjdERlc2NyaXB0aW9uLCBzZXRQcm9qZWN0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoZGVzY3JpcHRpb24pO1xuXG4gICAgLyogUmVmcyAqL1xuICAgIGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RhbCB7Li4ueyB0b2dnbGVNb2RhbCB9fSBkb21FbGVtZW50PXtkb2N1bWVudC5ib2R5fT5cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgcmVmPXtmb3JtUmVmfVxuICAgICAgICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fZm9ybVwiXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdChmb3JtUmVmKTtcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9faGVhZGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHQtNiBwdC1tZC0xMiBweC02IHBiLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicHJvamVjdFRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtLWNsZWFyIHRleHQtLXhsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJvamVjdFRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGl0bGVQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0UHJvamVjdFRpdGxlKHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Nsb3NlIGJ0biBidG4tbGluayBtbC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fYm9keSBwdC0zIHB4LTYgcGItMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicHJvamVjdERlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgV2hhdCdzIHRoaXMgcHJvamVjdCBhYm91dD9gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhQXV0b3NpemVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC0tdGV4dCBmb3JtLWNvbnRyb2wtLWNsZWFyIG1iLTEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcm9qZWN0RGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZGVzY3JpcHRpb25QbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb2plY3REZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHNldFByb2plY3REZXNjcmlwdGlvbih2YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmUgbWwtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdCB9fSBzaXplPVwibGdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VyQWRkIHsuLi57IHVzZXJzLCBwcm9qZWN0IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wem9uZSB7Li4ueyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZXMgfX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fZm9vdGVyIHB4LTYgcGItNiBwYi1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTAgdy0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy0xIG1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2J0biBidG4gYnRuLWJsb2NrIGJ0bi1zZWNvbmRhcnkgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uc3BhbiBjbGFzc05hbWU9XCJidG4tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2F2ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICApO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0TW9kYWwgfSBmcm9tIFwiLi9Qcm9qZWN0TW9kYWxcIjtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSBcInJlYWN0LXN2Z1wiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSwgdXNlUXVlcnlDbGllbnQgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUHJvamVjdE1vZGFsIH0gZnJvbSBcIi4uL21vZGFsc1wiO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRQcm9qZWN0SWNvbiBmcm9tIFwiaWNvbnMvYWRkX3Byb2plY3Quc3ZnXCI7XG5cbi8qIEFwaSBjYWxscyAqL1xuaW1wb3J0IHsgYWRkUHJvamVjdCwgZmV0Y2hQcm9qZWN0QnlJZCwgUVVFUllfS0VZUywgZWRpdFByb2plY3QgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RBZGQoKSB7XG4gICAgLyogU3RhdGUgKi9cbiAgICBjb25zdCBbcHJvamVjdElkLCBzZXRQcm9qZWN0SWRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8qIEhvb2tzICovXG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG4gICAgLyogUXVlcmllcyAqL1xuICAgIGNvbnN0IHsgZGF0YTogcHJvamVjdCB9ID0gdXNlUXVlcnkoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSwgKCkgPT4gZmV0Y2hQcm9qZWN0QnlJZCh7IHByb2plY3RJZCB9KSwge1xuICAgICAgICBlbmFibGVkOiAhIXByb2plY3RJZCxcbiAgICB9KTtcblxuICAgIC8qIE11dGF0aW9ucyAqL1xuICAgIGNvbnN0IGFkZE11dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkUHJvamVjdCwge1xuICAgICAgICBvblN1Y2Nlc3M6ICh7IGlkIH0pID0+IHNldFByb2plY3RJZChpZCksXG4gICAgfSk7XG5cbiAgICBjb25zdCBlZGl0TXV0YXRpb24gPSB1c2VNdXRhdGlvbihlZGl0UHJvamVjdCwge1xuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHRvZ2dsZU1vZGFsKCksXG4gICAgfSk7XG5cbiAgICAvKiBDYWxsYmFja3MgKi9cbiAgICBjb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgc2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pO1xuXG4gICAgICAgIC8qIE11dGF0ZSBvbiBtb2RhbCBvcGVuICovXG4gICAgICAgIGlmICghbW9kYWxPcGVuKSBhZGRNdXRhdGlvbi5tdXRhdGUoKTtcblxuICAgICAgICAvKiBJbnZhbGlkYXRlIHByb2plY3RfYnlfdXNlciBvbiBjbG9zZSBtb2RhbCAqL1xuICAgICAgICBpZiAobW9kYWxPcGVuKSB7XG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLlBST0pFQ1RfQllfVVNFUik7XG4gICAgICAgICAgICBzZXRQcm9qZWN0SWQobnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZm9ybVJlZikgPT4gZWRpdE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYsIHByb2plY3RJZCB9KTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImNhcmQgY2FyZC0tbGluayBoLTEwMCBtYi0wXCIgc3R5bGU9e3sgbWluSGVpZ2h0OiA0MjcgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgcC0xMFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIHRleHQtZGVjb3JhdGlvbi1ub25lIHN0cmV0Y2hlZC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuLXRleHQgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIHRleHQtbXV0ZWQtLTQwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tNDhcIiBzcmM9e2FkZFByb2plY3RJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0tc20gbXQtMVwiPkFkZCBtb3JlIHByb2plY3RzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+e21vZGFsT3BlbiAmJiA8UHJvamVjdE1vZGFsIHsuLi57IHByb2plY3QsIG9uU3VibWl0LCB0b2dnbGVNb2RhbCB9fSAvPn08L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RBZGQgfSBmcm9tIFwiLi9Qcm9qZWN0QWRkXCI7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgUHJvamVjdEltYWdlIGZyb20gXCIuL1Byb2plY3RJbWFnZVwiO1xuaW1wb3J0IFByb2plY3RNZW51IGZyb20gXCIuL1Byb2plY3RNZW51XCI7XG5pbXBvcnQgeyBVc2VycyB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3VzZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoeyBwcm9qZWN0IH0pIHtcbiAgICAvKiBDb25zdGFudHMgKi9cbiAgICBjb25zdCB7IHNsdWcsIHRpdGxlLCBwcm9qZWN0SW1hZ2VzLCB1c2VycywgYXV0aG9yIH0gPSBwcm9qZWN0O1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGEgaHJlZj17YHByb2plY3RzLyR7c2x1Z31gfSB0aXRsZT17dGl0bGV9IGNsYXNzTmFtZT1cImNhcmQgY2FyZC0tbGluayBjYXJkLS1wcm9kdWN0XCI+XG4gICAgICAgICAgICA8UHJvamVjdEltYWdlIHsuLi57IHByb2plY3RJbWFnZXMgfX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTJcIj57dGl0bGUgPyB0aXRsZSA6IFwiQWRkIGEgbmljZSB0aXRsZVwifTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdDogeyBhdXRob3IgfSwgbGF5b3V0OiBcIm1pbmltYWxcIiB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdE1lbnUgey4uLnsgcHJvamVjdElkOiBwcm9qZWN0LmlkIH19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tIFwicmVhY3Qtc3ZnXCI7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZEltYWdlSWNvbiBmcm9tIFwiaWNvbnMvYWRkX2ltYWdlLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0SW1hZ2UoeyBwcm9qZWN0SW1hZ2VzIH0pIHtcbiAgICAvKiBDb25zdGFudHMgKi9cbiAgICBjb25zdCB7IGltYWdlLCB0aXRsZSB9ID0gcHJvamVjdEltYWdlc1swXSB8fCB7fTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9faW1hZ2UgYm9yZGVyIG0tMlwiPlxuICAgICAgICAgICAge2ltYWdlICYmIDxpbWcgY2xhc3NOYW1lPVwiY2FyZC1pbWctdG9wXCIgc3JjPXtpbWFnZX0gc3JjU2V0PXtgJHtpbWFnZX0gMnhgfSBhbHQ9e3RpdGxlfSAvPn1cbiAgICAgICAgICAgIHshaW1hZ2UgJiYgPFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTQ4IHRleHQtbXV0ZWQtLTQwXCIgc3JjPXthZGRJbWFnZUljb259IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tIFwicmVhY3Qtc3ZnXCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGVkaXRJY29uIGZyb20gXCJpY29ucy9lZGl0LnN2Z1wiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcImljb25zL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBjbG9zZUljb24gZnJvbSBcImljb25zL2Nsb3NlLnN2Z1wiO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTQ0FMRV9GQURFLCBTVEFHR0VSX0xFRlQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2FuaW1hdGlvbnNcIjtcblxuLyogQXBpIGNhbGxzICovXG5pbXBvcnQgeyBRVUVSWV9LRVlTLCBkZWxldGVQcm9qZWN0LCBmZXRjaFByb2plY3RCeUlkLCBlZGl0UHJvamVjdCB9IGZyb20gXCIuLi8uLi9hcGlcIjtcbmltcG9ydCB7IFByb2plY3RNb2RhbCB9IGZyb20gXCIuLi9tb2RhbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdE1lbnUoeyBwcm9qZWN0SWQgfSkge1xuICAgIC8qIEhvb2tzICovXG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG4gICAgLyogTXV0YXRpb25zICovXG4gICAgY29uc3QgZGVsZXRlTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVQcm9qZWN0LCB7XG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZWRpdE11dGF0aW9uID0gdXNlTXV0YXRpb24oZWRpdFByb2plY3QsIHtcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB0b2dnbGVNb2RhbCgpLFxuICAgIH0pO1xuXG4gICAgLyogU3RhdGUgKi9cbiAgICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLyogVG9nZ2xlcyAqL1xuICAgIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiBzZXRNZW51T3BlbighbWVudU9wZW4pO1xuXG4gICAgY29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIHNldE1vZGFsT3BlbighbW9kYWxPcGVuKTtcblxuICAgICAgICBpZiAobW9kYWxPcGVuKSBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLlBST0pFQ1RfQllfVVNFUik7XG4gICAgfTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2FyZF9fbWVudSBtZW51ICR7bWVudU9wZW4gJiYgXCJpcy1hY3RpdmVcIn1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9fd3JhcHBlciBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIHBvc2l0aW9uLXJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZU1lbnUoKTtcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyIGluaXRpYWw9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZW51T3BlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBrZXk9XCJjbG9zZVwiIGNsYXNzTmFtZT1cIm1lbnVfX2RvdHNcIiB7Li4uU0NBTEVfRkFERX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNCB0ZXh0LXdoaXRlXCIgc3JjPXtjbG9zZUljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBrZXk9XCJkb3RzXCIgY2xhc3NOYW1lPVwibWVudV9fZG90c1wiIHsuLi5TQ0FMRV9GQURFfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVudV9fZG90XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZW51X19kb3RcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lbnVfX2RvdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgICAgICB7bWVudU9wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVCb2R5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnsgcHJvamVjdElkLCBlZGl0TXV0YXRpb24sIGRlbGV0ZU11dGF0aW9uLCBtb2RhbE9wZW4sIHRvZ2dsZU1vZGFsLCB0b2dnbGVNZW51IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNvbnN0IE1lbnVCb2R5ID0gKHsgcHJvamVjdElkLCBlZGl0TXV0YXRpb24sIGRlbGV0ZU11dGF0aW9uLCBtb2RhbE9wZW4sIHRvZ2dsZU1vZGFsLCB0b2dnbGVNZW51IH0pID0+IHtcbiAgICAvKiBRdWVyaWVzICovXG4gICAgY29uc3QgeyBkYXRhOiBwcm9qZWN0IH0gPSB1c2VRdWVyeShbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdLCAoKSA9PiBmZXRjaFByb2plY3RCeUlkKHsgcHJvamVjdElkIH0pLCB7XG4gICAgICAgIGVuYWJsZWQ6ICEhcHJvamVjdElkLFxuICAgIH0pO1xuXG4gICAgLyogQ2FsbGJhY2tzICovXG4gICAgY29uc3QgdXBkYXRlUHJvamVjdCA9IChhY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJlZGl0XCIpIHRvZ2dsZU1vZGFsKCk7XG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwiZGVsZXRlXCIpIGRlbGV0ZU11dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZm9ybVJlZikgPT4gZWRpdE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYsIHByb2plY3RJZCB9KTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9fYm9keVwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnVfX2xpc3QgbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBpY29uPXtlZGl0SWNvbn0gaW5kZXg9ezF9IGNhbGxiYWNrPXsoKSA9PiB1cGRhdGVQcm9qZWN0KFwiZWRpdFwiKX0gLz5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gaWNvbj17ZGVsZXRlSWNvbn0gaW5kZXg9ezB9IGNhbGxiYWNrPXsoKSA9PiB1cGRhdGVQcm9qZWN0KFwiZGVsZXRlXCIpfSAvPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2Ugb25FeGl0Q29tcGxldGU9eygpID0+IHRvZ2dsZU1lbnUoKX0+XG4gICAgICAgICAgICAgICAge21vZGFsT3BlbiAmJiA8UHJvamVjdE1vZGFsIHsuLi57IHByb2plY3QsIG9uU3VibWl0LCB0b2dnbGVNb2RhbCB9fSAvPn1cbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuY29uc3QgTWVudUl0ZW0gPSAoeyBpY29uLCBpbmRleCwgY2FsbGJhY2sgfSkgPT4gKFxuICAgIDxtb3Rpb24ubGkgY2xhc3NOYW1lPVwibGlzdF9faXRlbSBtci0yXCIgey4uLlNUQUdHRVJfTEVGVChpbmRleCl9PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgdGV4dC13aGl0ZSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTYgdGV4dC13aGl0ZSBtci0yXCIgc3JjPXtpY29ufSAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L21vdGlvbi5saT5cbik7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNUQUdHRVJfVVAgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJlc3VsdHMoeyBwcm9qZWN0cywgY2hpbGRyZW4gfSkge1xuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiaDUgdGV4dC13aGl0ZSBtYi02XCI+WW91ciBwcm9qZWN0czwvaDE+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctLWVxdWFsaXplZCBndXR0ZXJzLTVcIj5cbiAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgcHJvamVjdEluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5TVEFHR0VSX1VQKHByb2plY3RJbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0IHsuLi57IHByb2plY3QgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0UmVzdWx0cyB9IGZyb20gXCIuL1Byb2plY3RSZXN1bHRzXCI7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IFByb2plY3RPdmVydmlldyBmcm9tIFwiLi9jb21wb25lbnRzL1Byb2plY3RPdmVydmlld1wiO1xuXG4vKiBDbGllbnQgKi9cbmNvbnN0IGNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCh7XG4gICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgcXVlcmllczoge1xuICAgICAgICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxuLyogUmVuZGVyICovXG5jb25zdCBwcm9qZWN0T3ZlcnZpZXdOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0T3ZlcnZpZXdcIik7XG5pZiAocHJvamVjdE92ZXJ2aWV3Tm9kZSAhPT0gbnVsbCkge1xuICAgIHJlbmRlcihcbiAgICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgey4uLnsgY2xpZW50IH19PlxuICAgICAgICAgICAgPFByb2plY3RPdmVydmlldyB7Li4ucHJvamVjdE92ZXJ2aWV3Tm9kZS5kYXRhc2V0fSAvPlxuICAgICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+LFxuICAgICAgICBwcm9qZWN0T3ZlcnZpZXdOb2RlXG4gICAgKTtcbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgJ3BhcnNsZXlqcyc7XG5cbmNvbnN0IHBhcnNsZXlDb25maWcgPSB7XG4gICAgZXJyb3JDbGFzczogJ2lzLWVycm9yJyxcbiAgICBleGNsdWRlZDogJ2lucHV0W3R5cGU9YnV0dG9uXSwgaW5wdXRbdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXJlc2V0XSwgaW5wdXRbdHlwZT1oaWRkZW5dLCBbZGlzYWJsZWRdLCA6aGlkZGVuJyxcbiAgICBzdWNjZXNzQ2xhc3M6ICdpcy1zdWNjZXNzJ1xufTtcblxuJCgnZm9ybTpub3QoW25vdmFsaWRhdGVdKScpLnBhcnNsZXkocGFyc2xleUNvbmZpZyk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9