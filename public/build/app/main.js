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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _users__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users */ "./assets/app/js/react/components/users/index.js");
/* harmony import */ var _project_overview_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../project-overview/api */ "./assets/app/js/react/project-overview/api.js");
/* harmony import */ var _helpers_filterUsers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../helpers/filterUsers */ "./assets/app/js/react/helpers/filterUsers.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  /* State */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      hoveredUser = _useState2[0],
      setHoveredUser = _useState2[1];
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
      username: 'New user',
      userColor: '#CC25E8'
    };

    if (filteredUsers.length > 0) {
      return filteredUsers.map(function (user) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].li, _extends({}, _common_animations__WEBPACK_IMPORTED_MODULE_3__["FADE_IN"], {
          key: user.id,
          className: "list__item vr-3"
        }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_users__WEBPACK_IMPORTED_MODULE_4__["UserSelect"], {
          user: user,
          handleClick: handleClick,
          setFocusedUser: setFocusedUser,
          setHoveredUser: setHoveredUser,
          isFocused: user.email === (focusedUser === null || focusedUser === void 0 ? void 0 : focusedUser.email) && query && !hoveredUser,
          isLoading: userMutationLoading
        }));
      });
    }

    if (!globalUsersLoading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].li, _extends({}, _common_animations__WEBPACK_IMPORTED_MODULE_3__["FADE_IN"], {
        key: "New user",
        className: "list__item is-focused vr-3"
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_users__WEBPACK_IMPORTED_MODULE_4__["UserSelect"], {
        user: newUser,
        handleClick: handleClick,
        setFocusedUser: setFocusedUser,
        setHoveredUser: setHoveredUser,
        isFocused: query.length,
        isLoading: userMutationLoading
      }));
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/es/index.js");
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
      setHoveredUser = _ref.setHoveredUser,
      isLoading = _ref.isLoading;

  /* Effects */
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    isFocused && setFocusedUser(user);
  }, [isFocused]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      setFocusedUser(null);
      setHoveredUser(false);
    };
  }, []);
  /* Callbacks */

  var handleStatus = function handleStatus(action) {
    setFocusedUser(action === 'enter' ? user : null);
    setHoveredUser(action === 'enter');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX2ltYWdlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9hZGRfcHJvamVjdC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkX3VzZXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2Nsb3NlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9kZWxldGUuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2VkaXQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL3N0YXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvYWxlcnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvb2JqZWN0Zml0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL0JveC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vRHJvcHpvbmUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL01vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbW1vbi9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2VyLWFkZC9Vc2VyQWRkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlci1hZGQvVXNlckFkZFNlYXJjaC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3VzZXItYWRkL1VzZXJBZGRTZWFyY2hSZXN1bHRzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlci1hZGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3VzZXJzL1VzZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2Vycy9Vc2VyU2VsZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlcnMvVXNlcnMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2hlbHBlcnMvZmlsdGVyVXNlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9oZWxwZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvaGVscGVycy9pc0VtYWlsLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcHJvamVjdC1vdmVydmlldy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvUHJvamVjdE92ZXJ2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9tb2RhbHMvUHJvamVjdE1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9tb2RhbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC1hZGQvUHJvamVjdEFkZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC1hZGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC9Qcm9qZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9wcm9qZWN0L1Byb2plY3RJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC9Qcm9qZWN0TWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC9Qcm9qZWN0UmVzdWx0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOlsiQWxlcnQiLCJlbCIsIkRPTSIsInRvZ2dsZSIsInF1ZXJ5U2VsZWN0b3IiLCJvbkluaXQiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJvcGFjaXR5IiwidmlzaWJpbGl0eSIsInRyYW5zZm9ybSIsImFsZXJ0Tm9kZXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwibm9kZSIsIiQiLCJvYmplY3RGaXRJbWFnZXMiLCJCb3giLCJoZWFkZXIiLCJjb250ZW50IiwiYm94T3BlbiIsInRvZ2dsZUJveCIsImNoaWxkcmVuIiwiY3JlYXRlUG9ydGFsIiwiRkFERV9JTiIsIkZBREVfSU5fVVAiLCJjbG9zZUljb24iLCJib2R5IiwiRHJvcHpvbmUiLCJwcm9qZWN0SWQiLCJwcm9qZWN0SW1hZ2VzIiwiQ09MVU1OX0xBWU9VVCIsInF1ZXJ5Q2xpZW50IiwidXNlUXVlcnlDbGllbnQiLCJ1c2VEcm9wem9uZSIsImFjY2VwdCIsIm5vQ2xpY2siLCJvbkRyb3AiLCJhY2NlcHRlZEZpbGVzIiwidXBkYXRlUHJvamVjdEltYWdlcyIsImltYWdlcyIsImdldFJvb3RQcm9wcyIsImdldElucHV0UHJvcHMiLCJpc0RyYWdBY3RpdmUiLCJhZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24iLCJ1c2VNdXRhdGlvbiIsImFkZFByb2plY3RJbWFnZXMiLCJvblN1Y2Nlc3MiLCJpbnZhbGlkYXRlUXVlcmllcyIsIlFVRVJZX0tFWVMiLCJQUk9KRUNUX0JZX0lEIiwiZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uIiwiZGVsZXRlUHJvamVjdEltYWdlcyIsImFjdGlvbiIsInByb3BzIiwibXV0YXRlIiwibWFwIiwiaW1hZ2VJbmRleCIsImltYWdlIiwidGl0bGUiLCJpZCIsIlNUQUdHRVJfVVAiLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsImxlbmd0aCIsImlzUGFyZW50RHJhZ0FjdGl2ZSIsIkRyb3B6b25lSW5uZXIiLCJub0RyYWdFdmVudHNCdWJibGluZyIsImFkZEltYWdlSWNvbiIsIk1vZGFsIiwidG9nZ2xlTW9kYWwiLCJkb21FbGVtZW50IiwidmFyaWFudCIsInJlbmRlciIsIlRSQU5TRk9STV9VUCIsIkVBU0UiLCJpbml0aWFsIiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImR1cmF0aW9uIiwieSIsInR5cGUiLCJkYW1waW5nIiwic3RpZmZuZXNzIiwiU0NBTEVfRkFERSIsInNjYWxlIiwiaW5kZXgiLCJkZWxheSIsIlNUQUdHRVJfTEVGVCIsIngiLCJBbmltYXRpb25XcmFwcGVyIiwiVXNlckFkZCIsInVzZXJzIiwicHJvamVjdCIsInVzZVN0YXRlIiwic2V0Qm94T3BlbiIsImFkZFVzZXJJY29uIiwiVXNlckFkZFNlYXJjaCIsInF1ZXJ5Iiwic2V0UXVlcnkiLCJmb2N1c2VkVXNlciIsInNldEZvY3VzZWRVc2VyIiwicXVlcnlSZWYiLCJ1c2VSZWYiLCJhZGRVc2VyTXV0YXRpb24iLCJhZGRVc2VyIiwiR0xPQkFMX1VTRVJTIiwiY3VycmVudCIsInNlbGVjdCIsImhhbmRsZUNoYW5nZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlT25LZXlEb3duIiwiaW5jbHVkZXMiLCJrZXkiLCJwcmV2ZW50RGVmYXVsdCIsImlzRW1haWwiLCJlbWFpbCIsImhhbmRsZUNsaWNrIiwidXNlck11dGF0aW9uTG9hZGluZyIsImlzTG9hZGluZyIsIlVzZXJBZGRTZWFyY2hSZXN1bHRzIiwidXNlUXVlcnkiLCJmZXRjaEdvYmFsVXNlcnMiLCJkYXRhIiwiZ2xvYmFsVXNlcnMiLCJnbG9iYWxVc2Vyc0xvYWRpbmciLCJmaWx0ZXJlZFVzZXJzIiwiZmlsdGVyVXNlcnMiLCJob3ZlcmVkVXNlciIsInNldEhvdmVyZWRVc2VyIiwidXNlRWZmZWN0IiwiZmlsdGVyZWRSZXN1bHRzIiwibmV3VXNlciIsInVzZXJuYW1lIiwidXNlckNvbG9yIiwidXNlciIsIlVzZXIiLCJzaXplIiwiYXV0aG9yIiwidXNlcklkIiwiaXNBdXRob3IiLCJjbGFzc2VzIiwiam9pbiIsImRlbGV0ZVVzZXJNdXRhdGlvbiIsImRlbGV0ZVVzZXIiLCJkZWxldGVJY29uIiwic3Rhckljb24iLCJVc2VyQXZhdGFyIiwidXNlckluaXRpYWxzIiwic3BsaXQiLCJ3b3JkIiwidG9VcHBlckNhc2UiLCJVc2VySW5mbyIsIlVzZXJTZWxlY3QiLCJpc0ZvY3VzZWQiLCJoYW5kbGVTdGF0dXMiLCJVc2VyU3RhdHVzIiwibG9hZGluZyIsIlVzZXJzIiwibGF5b3V0IiwicmVzdCIsInNsaWNlQW1vdW50IiwiSW5maW5pdHkiLCJzbGljZSIsImxvd2VyUXVlcnkiLCJ0b0xvd2VyQ2FzZSIsImV4aXN0aW5nVXNlcnNCeUVtYWlsIiwiZmlsdGVyIiwidGVzdCIsIlBST0pFQ1RfQllfVVNFUiIsImZldGNoUHJvamVjdHNCeVVzZXIiLCJ1cmwiLCJheGlvcyIsImdldCIsInJlc3VsdCIsImZldGNoUHJvamVjdEJ5SWQiLCJhZGRQcm9qZWN0IiwicG9zdCIsImRlbGV0ZVByb2plY3QiLCJlZGl0UHJvamVjdCIsImZvcm1SZWYiLCJwYXJhbXMiLCJGb3JtRGF0YSIsImFwcGVuZCIsIlByb2plY3RPdmVydmlldyIsImlzQWRtaW4iLCJzZXRJc0FkbWluIiwiYXRvYiIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsInJvbGVzIiwicHJvamVjdHNMb2FkaW5nIiwicHJvamVjdHMiLCJQcm9qZWN0TW9kYWwiLCJvblN1Ym1pdCIsInRpdGxlUGxhY2Vob2xkZXIiLCJkZXNjcmlwdGlvblBsYWNlaG9sZGVyIiwiZGVzY3JpcHRpb24iLCJwcm9qZWN0VGl0bGUiLCJzZXRQcm9qZWN0VGl0bGUiLCJwcm9qZWN0RGVzY3JpcHRpb24iLCJzZXRQcm9qZWN0RGVzY3JpcHRpb24iLCJQcm9qZWN0QWRkIiwic2V0UHJvamVjdElkIiwibW9kYWxPcGVuIiwic2V0TW9kYWxPcGVuIiwiZW5hYmxlZCIsImFkZE11dGF0aW9uIiwiZWRpdE11dGF0aW9uIiwibWluSGVpZ2h0IiwiYWRkUHJvamVjdEljb24iLCJQcm9qZWN0Iiwic2x1ZyIsIlByb2plY3RJbWFnZSIsIlByb2plY3RNZW51IiwiZGVsZXRlTXV0YXRpb24iLCJtZW51T3BlbiIsInNldE1lbnVPcGVuIiwidG9nZ2xlTWVudSIsIk1lbnVCb2R5IiwidXBkYXRlUHJvamVjdCIsImVkaXRJY29uIiwiTWVudUl0ZW0iLCJpY29uIiwiY2FsbGJhY2siLCJQcm9qZWN0UmVzdWx0cyIsInByb2plY3RJbmRleCIsImNsaWVudCIsIlF1ZXJ5Q2xpZW50IiwiZGVmYXVsdE9wdGlvbnMiLCJxdWVyaWVzIiwicmVmZXRjaE9uV2luZG93Rm9jdXMiLCJwcm9qZWN0T3ZlcnZpZXdOb2RlIiwiZ2V0RWxlbWVudEJ5SWQiLCJkYXRhc2V0IiwicGFyc2xleUNvbmZpZyIsImVycm9yQ2xhc3MiLCJleGNsdWRlZCIsInN1Y2Nlc3NDbGFzcyIsInBhcnNsZXkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFB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QUFRLEVBQUUsb0dBRlE7QUFHbEJDLGNBQVksRUFBRTtBQUhJLENBQXRCO0FBTUFuTyw2Q0FBQyxDQUFDLHdCQUFELENBQUQsQ0FBNEJvTyxPQUE1QixDQUFvQ0osYUFBcEMsRTs7Ozs7Ozs7Ozs7QUNUQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9hcHAvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vYXNzZXRzL2FwcC9qcy9tYWluLmpzXCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYWRkX2ltYWdlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hZGRfcHJvamVjdC5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYWRkX3VzZXIuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Nsb3NlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9kZWxldGUuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2VkaXQuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3N0YXIuc3ZnXCI7IiwiY2xhc3MgQWxlcnQge1xuICAgIGNvbnN0cnVjdG9yKGVsKSB7XG4gICAgICAgIHRoaXMuRE9NID0geyBlbCB9O1xuICAgICAgICB0aGlzLkRPTS50b2dnbGUgPSB0aGlzLkRPTS5lbC5xdWVyeVNlbGVjdG9yKFwiLmFsZXJ0X19idG5cIik7XG5cbiAgICAgICAgdGhpcy5vbkluaXQoKTtcbiAgICB9XG4gICAgb25Jbml0KCkge1xuICAgICAgICB0aGlzLkRPTS50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMudG9nZ2xlKCkpO1xuICAgIH1cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIHRoaXMuRE9NLmVsLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICB0aGlzLkRPTS5lbC5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgICAgICAgdGhpcy5ET00uZWwuc3R5bGUudHJhbnNmb3JtID0gXCJ0cmFuc2xhdGVZKDEwMCUpXCI7XG4gICAgfVxufVxuXG5jb25zdCBhbGVydE5vZGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWFsZXJ0XVwiKTtcblsuLi5hbGVydE5vZGVzXS5mb3JFYWNoKChub2RlKSA9PiBuZXcgQWxlcnQobm9kZSkpO1xuIiwiLy8gQ1NTXG5pbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcblxuLy8gUG9sbHlmaWxzXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5cbi8vIENvcmVcbmltcG9ydCAnLi92YWxpZGF0aW9uJztcbmltcG9ydCAnLi9hbGVydCc7XG5cbi8vIFBsdWdpbnNcbmltcG9ydCAnLi9vYmplY3RmaXQnO1xuXG4vLyBSZWFjdFxuaW1wb3J0ICcuL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcnXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IG9iamVjdEZpdEltYWdlcyBmcm9tICdvYmplY3QtZml0LWltYWdlcyc7XG5cbiQoZnVuY3Rpb24oKSB7XG4gICAgb2JqZWN0Rml0SW1hZ2VzKCk7XG59KTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gXCJyZWFjdC1zdmdcIjtcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiwgRkFERV9JTl9VUCB9IGZyb20gXCIuL2FuaW1hdGlvbnNcIjtcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gXCJpY29ucy9jbG9zZS5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm94KHsgaGVhZGVyLCBjb250ZW50LCBib3hPcGVuLCB0b2dnbGVCb3gsIGNoaWxkcmVuIH0pIHtcbiAgICByZXR1cm4gY3JlYXRlUG9ydGFsKFxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAge2JveE9wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImJveC1vdmVybGF5XCIgey4uLkZBREVfSU59IC8+XG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGtleT1cImJveC1jb250ZW50XCIgY2xhc3NOYW1lPVwiYm94X19jb250ZW50IGJvcmRlciBwLTVcIiB7Li4uRkFERV9JTl9VUH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveF9faGVhZGVyIGQtZmxleCBhbGlnbi1pdGVtcy1iYXNlbGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtLWxnIG1iLTFcIj57aGVhZGVyfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNjAgbWItMFwiPntjb250ZW50fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Nsb3NlIGJ0biBidG4tbGluayBtbC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlQm94fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEyXCIgc3JjPXtjbG9zZUljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94X19ib2R5IGQtZmxleCBtdC00XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT4sXG4gICAgICAgIGRvY3VtZW50LmJvZHlcbiAgICApO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSBcInJlYWN0LXN2Z1wiO1xuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tIFwicmVhY3QtZHJvcHpvbmVcIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSBcImljb25zL2Nsb3NlLnN2Z1wiO1xuaW1wb3J0IGFkZEltYWdlSWNvbiBmcm9tIFwiaWNvbnMvYWRkX2ltYWdlLnN2Z1wiO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTVEFHR0VSX1VQIH0gZnJvbSBcIi4vYW5pbWF0aW9uc1wiO1xuXG4vKiBBcGkgY2FsbHMgKi9cbmltcG9ydCB7IGFkZFByb2plY3RJbWFnZXMsIGRlbGV0ZVByb2plY3RJbWFnZXMsIFFVRVJZX0tFWVMgfSBmcm9tIFwiLi4vcHJvamVjdC1vdmVydmlldy9hcGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcHpvbmUoeyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZXMgfSkge1xuICAgIC8qIENvbnRhbnRzICovXG4gICAgY29uc3QgQ09MVU1OX0xBWU9VVCA9IFwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC14bC0zXCI7XG5cbiAgICAvKiBIb29rcyAqL1xuICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuICAgIGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzLCBpc0RyYWdBY3RpdmUgfSA9IHVzZURyb3B6b25lKHtcbiAgICAgICAgYWNjZXB0OiBcImltYWdlLypcIixcbiAgICAgICAgbm9DbGljazogdHJ1ZSxcbiAgICAgICAgb25Ecm9wOiAoYWNjZXB0ZWRGaWxlcykgPT4gdXBkYXRlUHJvamVjdEltYWdlcyhcImFkZFwiLCB7IGltYWdlczogYWNjZXB0ZWRGaWxlcyB9KSxcbiAgICB9KTtcblxuICAgIC8qIE11dGF0aW9ucyAqL1xuICAgIGNvbnN0IGFkZFByb2plY3RJbWFnZXNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZFByb2plY3RJbWFnZXMsIHtcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGRlbGV0ZVByb2plY3RJbWFnZXMsIHtcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKSxcbiAgICB9KTtcblxuICAgIC8qIENhbGxiYWNrcyAqL1xuICAgIGNvbnN0IHVwZGF0ZVByb2plY3RJbWFnZXMgPSAoYWN0aW9uLCBwcm9wcykgPT4ge1xuICAgICAgICBpZiAoYWN0aW9uID09PSBcImFkZFwiKSBhZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkLCAuLi5wcm9wcyB9KTtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJkZWxldGVcIikgZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgLi4ucHJvcHMgfSk7XG4gICAgfTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcHpvbmVcIiB7Li4uZ2V0Um9vdFByb3BzKCl9PlxuICAgICAgICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctLWVxdWFsaXplZCBndXR0ZXJzLTVcIj5cbiAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3RJbWFnZXMubWFwKCh7IGltYWdlLCB0aXRsZSwgaWQgfSwgaW1hZ2VJbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgbGF5b3V0IHsuLi5TVEFHR0VSX1VQKGltYWdlSW5kZXgpfSBjbGFzc05hbWU9e0NPTFVNTl9MQVlPVVR9IGtleT17aWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcHpvbmVfX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImRyb3B6b25lX19pbWFnZSBpbWctZmx1aWRcIiBzcmM9e2ltYWdlfSBhbHQ9e3RpdGxlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBkcm9wem9uZV9faW1hZ2UtZGVsZXRlIHAtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQcm9qZWN0SW1hZ2VzKFwiZGVsZXRlXCIsIHsgaWQgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS04IHRleHQtYmFzZSBtdC0wXCIgc3JjPXtjbG9zZUljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYga2V5PVwiYWRkLWltYWdlXCIgey4uLlNUQUdHRVJfVVAocHJvamVjdEltYWdlcy5sZW5ndGgpfSBjbGFzc05hbWU9e0NPTFVNTl9MQVlPVVR9IGxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wem9uZUlubmVyIHsuLi57IHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzUGFyZW50RHJhZ0FjdGl2ZTogaXNEcmFnQWN0aXZlIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG4vKiBJbm5lciBkcm9wem9uZSAqL1xuY29uc3QgRHJvcHpvbmVJbm5lciA9ICh7IHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzUGFyZW50RHJhZ0FjdGl2ZSB9KSA9PiB7XG4gICAgLyogSG9va3MgKi9cbiAgICBjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcywgaXNEcmFnQWN0aXZlIH0gPSB1c2VEcm9wem9uZSh7XG4gICAgICAgIGFjY2VwdDogXCJpbWFnZS8qXCIsXG4gICAgICAgIG5vRHJhZ0V2ZW50c0J1YmJsaW5nOiB0cnVlLFxuICAgICAgICBvbkRyb3A6IChhY2NlcHRlZEZpbGVzKSA9PiB1cGRhdGVQcm9qZWN0SW1hZ2VzKFwiYWRkXCIsIHsgaW1hZ2VzOiBhY2NlcHRlZEZpbGVzIH0pLFxuICAgIH0pO1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZVwiIHsuLi5nZXRSb290UHJvcHMoKX0+XG4gICAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cbiAgICAgICAgICAgIDxhcnRpY2xlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHJvcHpvbmVfX2NvbnRhaW5lciBjYXJkIGNhcmQtLWxpbmsgJHtcbiAgICAgICAgICAgICAgICAgICAgKGlzRHJhZ0FjdGl2ZSB8fCBpc1BhcmVudERyYWdBY3RpdmUpICYmIFwiaXMtcHVsc2luZ1wiXG4gICAgICAgICAgICAgICAgfSBoLTEwMCBtYi0wYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHAtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuLXRleHQgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIHRleHQtbXV0ZWQtLTQwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tNDhcIiBzcmM9e2FkZEltYWdlSWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtLXNtIG10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNEcmFnQWN0aXZlIHx8IGlzUGFyZW50RHJhZ0FjdGl2ZSA/IFwiRHJvcCB0aGUgaW1hZ2VzXCIgOiBcIkFkZCBzb21lIGltYWdlc1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4sIFRSQU5TRk9STV9VUCB9IGZyb20gXCIuL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwoeyB0b2dnbGVNb2RhbCwgY2hpbGRyZW4sIGRvbUVsZW1lbnQsIHZhcmlhbnQgPSBcImRlZmF1bHRcIiB9KSB7XG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT1cImN1c3RvbS1tb2RhbFwiIGNsYXNzTmFtZT17YGN1c3RvbS1tb2RhbCBjdXN0b20tbW9kYWwtLSR7dmFyaWFudH1gfT5cbiAgICAgICAgICAgIDxtb3Rpb24uZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fb3ZlcmxheVwiIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfSB7Li4uRkFERV9JTn0gLz5cbiAgICAgICAgICAgIDxtb3Rpb24uYXJ0aWNsZSBrZXk9XCJjdXN0b20tbW9kYWxfX2NvbnRlbnRcIiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2NvbnRlbnRcIiB7Li4uVFJBTlNGT1JNX1VQfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBkLWZsZXggZmxleC1ncm93LTEgcHgtMFwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmFydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICBpZiAoZG9tRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKHJlbmRlcigpLCBkb21FbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVuZGVyKCk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5jb25zdCBFQVNFID0gWzAuNjUsIDAsIDAuMzUsIDFdO1xuXG5jb25zdCBGQURFX0lOID0ge1xuICAgIGluaXRpYWw6IHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICB9LFxuICAgIGFuaW1hdGU6IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICB9LFxuICAgIGV4aXQ6IHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgZWFzZTogRUFTRSxcbiAgICAgICAgZHVyYXRpb246IDAuMixcbiAgICB9LFxufTtcblxuY29uc3QgRkFERV9JTl9VUCA9IHtcbiAgICBpbml0aWFsOiB7XG4gICAgICAgIHk6IDIwMCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICB9LFxuICAgIGFuaW1hdGU6IHtcbiAgICAgICAgeTogMCxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICAgICAgICAgIGRhbXBpbmc6IDQyLFxuICAgICAgICAgICAgc3RpZmZuZXNzOiA4MDAsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBleGl0OiB7XG4gICAgICAgIHk6IDIwMCxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogXCJzcHJpbmdcIixcbiAgICAgICAgICAgIGRhbXBpbmc6IDQyLFxuICAgICAgICAgICAgc3RpZmZuZXNzOiAxMjAwLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG5jb25zdCBUUkFOU0ZPUk1fVVAgPSB7XG4gICAgaW5pdGlhbDoge1xuICAgICAgICB5OiBcIjEwMCVcIixcbiAgICB9LFxuICAgIGFuaW1hdGU6IHtcbiAgICAgICAgeTogXCIwJVwiLFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBcInNwcmluZ1wiLFxuICAgICAgICAgICAgZGFtcGluZzogNDEsXG4gICAgICAgICAgICBzdGlmZm5lc3M6IDYwMCxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGV4aXQ6IHtcbiAgICAgICAgeTogXCIxMDAlXCIsXG4gICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IFwic3ByaW5nXCIsXG4gICAgICAgICAgICBkYW1waW5nOiA0MSxcbiAgICAgICAgICAgIHN0aWZmbmVzczogMTIwMCxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuY29uc3QgU0NBTEVfRkFERSA9IHtcbiAgICBpbml0aWFsOiB7XG4gICAgICAgIHNjYWxlOiAwLFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgIH0sXG4gICAgYW5pbWF0ZToge1xuICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICB9LFxuICAgIGV4aXQ6IHtcbiAgICAgICAgc2NhbGU6IDAsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIGVhc2U6IEVBU0UsXG4gICAgICAgIGR1cmF0aW9uOiAwLjIsXG4gICAgfSxcbn07XG5cbmNvbnN0IFNUQUdHRVJfVVAgPSAoaW5kZXggPSAwKSA9PiAoe1xuICAgIGluaXRpYWw6IHsgb3BhY2l0eTogMCwgeTogMzUgfSxcbiAgICBhbmltYXRlOiB7IG9wYWNpdHk6IDEsIHk6IDAsIHRyYW5zaXRpb246IHsgdHlwZTogXCJzcHJpbmdcIiwgZGFtcGluZzogMzAsIHN0aWZmbmVzczogNDUwLCBkZWxheTogaW5kZXggKiAwLjAzNSB9IH0sXG4gICAgZXhpdDogeyBvcGFjaXR5OiAwLCBzY2FsZTogMC4yNSwgdHJhbnNpdGlvbjogeyB0eXBlOiBcInNwcmluZ1wiLCBkYW1waW5nOiAzMCwgc3RpZmZuZXNzOiA2MDAgfSB9LFxufSk7XG5cbmNvbnN0IFNUQUdHRVJfTEVGVCA9IChpbmRleCA9IDApID0+ICh7XG4gICAgaW5pdGlhbDogeyBvcGFjaXR5OiAwLCB4OiAxMCB9LFxuICAgIGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgeDogMCwgdHJhbnNpdGlvbjogeyB0eXBlOiBcInNwcmluZ1wiLCBkYW1waW5nOiAzMCwgc3RpZmZuZXNzOiAzMDAsIGRlbGF5OiBpbmRleCAqIDAuMDM1IH0gfSxcbiAgICBleGl0OiB7IG9wYWNpdHk6IDAsIHg6IDEwLCB0cmFuc2l0aW9uOiB7IHR5cGU6IFwic3ByaW5nXCIsIGRhbXBpbmc6IDMwLCBzdGlmZm5lc3M6IDYwMCB9IH0sXG59KTtcblxuY29uc3QgQW5pbWF0aW9uV3JhcHBlciA9ICh7IGNoaWxkcmVuLCAuLi5wcm9wcyB9KSA9PiA8bW90aW9uLmRpdiB7Li4ucHJvcHN9PntjaGlsZHJlbn08L21vdGlvbi5kaXY+O1xuXG5leHBvcnQgeyBGQURFX0lOLCBGQURFX0lOX1VQLCBUUkFOU0ZPUk1fVVAsIFNDQUxFX0ZBREUsIFNUQUdHRVJfVVAsIFNUQUdHRVJfTEVGVCB9O1xuZXhwb3J0IGRlZmF1bHQgQW5pbWF0aW9uV3JhcHBlcjtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcHpvbmUgfSBmcm9tIFwiLi9Ecm9wem9uZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RhbCB9IGZyb20gXCIuL01vZGFsXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJveCB9IGZyb20gXCIuL0JveFwiO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tIFwicmVhY3Qtc3ZnXCI7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZFVzZXJJY29uIGZyb20gXCJpY29ucy9hZGRfdXNlci5zdmdcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4uLy4uL2NvbW1vblwiO1xuaW1wb3J0IFVzZXJBZGRTZWFyY2ggZnJvbSBcIi4vVXNlckFkZFNlYXJjaFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQWRkKHsgdXNlcnMsIHByb2plY3QgfSkge1xuICAgIC8qIFN0YXRlICovXG4gICAgY29uc3QgW2JveE9wZW4sIHNldEJveE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLyogQ2FsbGJhY2tzICovXG4gICAgY29uc3QgdG9nZ2xlQm94ID0gKCkgPT4gc2V0Qm94T3BlbighYm94T3Blbik7XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlIG1sLTJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIHVzZXIgdXNlci0tbGcgdXNlci0tYWRkXCIgdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZUJveH0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlcl9fYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcl9faW5pdGlhbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9faWNvbiBpY29uIGljb24tLTEyIG10LTBcIiBzcmM9e2FkZFVzZXJJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxCb3ggaGVhZGVyPVwiU2VsZWN0IHVzZXJzXCIgY29udGVudD1cIkNob29zZSBzb21lIHVzZXJzIHRvIGNvbGxhYm9yYXRlIHdpdGguXCIgey4uLnsgYm94T3BlbiwgdG9nZ2xlQm94IH19PlxuICAgICAgICAgICAgICAgIDxVc2VyQWRkU2VhcmNoIHsuLi57IHVzZXJzLCBwcm9qZWN0LCB0b2dnbGVCb3ggfX0gLz5cbiAgICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IFVzZXJBZGRTZWFyY2hSZXN1bHRzIGZyb20gXCIuL1VzZXJBZGRTZWFyY2hSZXN1bHRzXCI7XG5pbXBvcnQgeyBVc2VycyB9IGZyb20gXCIuLi91c2Vyc1wiO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBpc0VtYWlsIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnNcIjtcblxuLyogQXBpIGNhbGxzICovXG5pbXBvcnQgeyBhZGRVc2VyLCBRVUVSWV9LRVlTIH0gZnJvbSBcIi4uLy4uL3Byb2plY3Qtb3ZlcnZpZXcvYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBZGRTZWFyY2goeyB1c2VycywgcHJvamVjdCwgdG9nZ2xlQm94IH0pIHtcbiAgICAvKiBTdGF0ZSAqL1xuICAgIGNvbnN0IFtxdWVyeSwgc2V0UXVlcnldID0gdXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgW2ZvY3VzZWRVc2VyLCBzZXRGb2N1c2VkVXNlcl0gPSB1c2VTdGF0ZSgpO1xuXG4gICAgLyogUmVmcyAqL1xuICAgIGNvbnN0IHF1ZXJ5UmVmID0gdXNlUmVmKCk7XG5cbiAgICAvKiBIb29rcyAqL1xuICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuICAgIC8qIE11dGF0aW9ucyAqL1xuICAgIGNvbnN0IGFkZFVzZXJNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZFVzZXIsIHtcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0LmlkXSk7XG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLkdMT0JBTF9VU0VSUyk7XG5cbiAgICAgICAgICAgIHF1ZXJ5UmVmLmN1cnJlbnQuc2VsZWN0KCk7XG4gICAgICAgICAgICBzZXRRdWVyeShcIlwiKTtcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8qIENhbGxiYWNrcyAqL1xuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9ICh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHNldFF1ZXJ5KHZhbHVlKTtcblxuICAgIGNvbnN0IGhhbmRsZU9uS2V5RG93biA9IChldmVudCkgPT4ge1xuICAgICAgICBpZiAoW1wiRW50ZXJcIiwgXCJUYWJcIl0uaW5jbHVkZXMoZXZlbnQua2V5KSkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKHF1ZXJ5ICYmIGZvY3VzZWRVc2VyICYmIGlzRW1haWwoZm9jdXNlZFVzZXIuZW1haWwpKSB7XG4gICAgICAgICAgICAgICAgYWRkVXNlck11dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZDogcHJvamVjdC5pZCwgZW1haWw6IGZvY3VzZWRVc2VyLmVtYWlsIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGVtYWlsKSA9PiB7XG4gICAgICAgIGlmIChpc0VtYWlsKGVtYWlsKSkge1xuICAgICAgICAgICAgYWRkVXNlck11dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZDogcHJvamVjdC5pZCwgZW1haWw6IGVtYWlsIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uIGZsZXgtZ3Jvdy0xXCI+XG4gICAgICAgICAgICA8VXNlcnMgey4uLnsgdXNlcnMsIHByb2plY3QgfX0gdmFyaWFudD1cImludGVyYWN0aXZlXCIgc2l6ZT1cInhsXCIgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJ1c2VyUXVlcnlcIj5cbiAgICAgICAgICAgICAgICAgICAgU2VhcmNoIG5hbWUgb3IgZW1haWxcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIGZvcm0tY29udHJvbC0tc2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VyUXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlclF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggbmFtZSBvciBlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtxdWVyeX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVPbktleURvd259XG4gICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgICAgICAgICAgIHJlZj17cXVlcnlSZWZ9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8VXNlckFkZFNlYXJjaFJlc3VsdHNcbiAgICAgICAgICAgICAgICAgICAgey4uLntcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGljayxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzZWRVc2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Rm9jdXNlZFVzZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyTXV0YXRpb25Mb2FkaW5nOiBhZGRVc2VyTXV0YXRpb24uaXNMb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtdC00XCI+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgdGV4dC0tc20gdGV4dC13aGl0ZSB0ZXh0LWRlY29yYXRpb24tdW5kZXJsaW5lIHRleHQtbXV0ZWQtLTYwXCJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJSZW1vdmUgYWxsIHVzZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0bl9fdGV4dFwiPlJlbW92ZSBhbGwgdXNlcnM8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc20gYnRuLXNlY29uZGFyeSBtbC1hdXRvIHB4LThcIiBvbkNsaWNrPXt0b2dnbGVCb3h9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG5fX3RleHRcIj5Eb25lPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tICdyZWFjdC1xdWVyeSc7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4gfSBmcm9tICcuLi8uLi9jb21tb24vYW5pbWF0aW9ucyc7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFVzZXJTZWxlY3QgfSBmcm9tICcuLi91c2Vycyc7XG5cbi8qIEFwaSBjYWxscyAqL1xuaW1wb3J0IHsgZmV0Y2hHb2JhbFVzZXJzLCBRVUVSWV9LRVlTIH0gZnJvbSAnLi4vLi4vcHJvamVjdC1vdmVydmlldy9hcGknO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgZmlsdGVyVXNlcnMgZnJvbSAnLi4vLi4vaGVscGVycy9maWx0ZXJVc2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBZGRTZWFyY2hSZXN1bHRzKHtcblx0dXNlcnMsXG5cdHF1ZXJ5LFxuXHRoYW5kbGVDbGljayxcblx0Zm9jdXNlZFVzZXIsXG5cdHNldEZvY3VzZWRVc2VyLFxuXHR1c2VyTXV0YXRpb25Mb2FkaW5nLFxufSkge1xuXHQvKiBRdWVyaWVzICovXG5cdGNvbnN0IHsgZGF0YTogZ2xvYmFsVXNlcnMgPSBbXSwgaXNMb2FkaW5nOiBnbG9iYWxVc2Vyc0xvYWRpbmcgfSA9IHVzZVF1ZXJ5KFxuXHRcdFFVRVJZX0tFWVMuR0xPQkFMX1VTRVJTLFxuXHRcdGZldGNoR29iYWxVc2Vyc1xuXHQpO1xuXG5cdC8qIENvbnN0YW50cyAqL1xuXHRjb25zdCBmaWx0ZXJlZFVzZXJzID0gZmlsdGVyVXNlcnMoZ2xvYmFsVXNlcnMsIHVzZXJzLCBxdWVyeSk7XG5cbiAgICAvKiBTdGF0ZSAqL1xuXHRjb25zdCBbaG92ZXJlZFVzZXIsIHNldEhvdmVyZWRVc2VyXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuXHQvKiBFZmZlY3RzICovXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aWYgKGZpbHRlcmVkVXNlcnMubGVuZ3RoID4gMCAmJiAhdXNlck11dGF0aW9uTG9hZGluZykge1xuXHRcdFx0c2V0Rm9jdXNlZFVzZXIoZmlsdGVyZWRVc2Vyc1swXSk7XG5cdFx0fVxuXHR9LCBbZmlsdGVyZWRVc2Vyc10pO1xuXG5cdC8qIFJlbmRlciBmaWx0ZXJlZCByZXN1bHRzICovXG5cdGNvbnN0IGZpbHRlcmVkUmVzdWx0cyA9ICgpID0+IHtcblx0XHRjb25zdCBuZXdVc2VyID0geyBlbWFpbDogcXVlcnksIHVzZXJuYW1lOiAnTmV3IHVzZXInLCB1c2VyQ29sb3I6ICcjQ0MyNUU4JyB9O1xuXG5cdFx0aWYgKGZpbHRlcmVkVXNlcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0cmV0dXJuIGZpbHRlcmVkVXNlcnMubWFwKCh1c2VyKSA9PiAoXG5cdFx0XHRcdDxtb3Rpb24ubGkgey4uLkZBREVfSU59IGtleT17dXNlci5pZH0gY2xhc3NOYW1lPVwibGlzdF9faXRlbSB2ci0zXCI+XG5cdFx0XHRcdFx0PFVzZXJTZWxlY3Rcblx0XHRcdFx0XHRcdHsuLi57IHVzZXIsIGhhbmRsZUNsaWNrLCBzZXRGb2N1c2VkVXNlciwgc2V0SG92ZXJlZFVzZXIgfX1cblx0XHRcdFx0XHRcdGlzRm9jdXNlZD17dXNlci5lbWFpbCA9PT0gZm9jdXNlZFVzZXI/LmVtYWlsICYmIHF1ZXJ5ICYmICFob3ZlcmVkVXNlcn1cblx0XHRcdFx0XHRcdGlzTG9hZGluZz17dXNlck11dGF0aW9uTG9hZGluZ31cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHQ8L21vdGlvbi5saT5cblx0XHRcdCkpO1xuXHRcdH1cblxuXHRcdGlmICghZ2xvYmFsVXNlcnNMb2FkaW5nKSB7XG5cdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8bW90aW9uLmxpIHsuLi5GQURFX0lOfSBrZXk9XCJOZXcgdXNlclwiIGNsYXNzTmFtZT1cImxpc3RfX2l0ZW0gaXMtZm9jdXNlZCB2ci0zXCI+XG5cdFx0XHRcdFx0PFVzZXJTZWxlY3Rcblx0XHRcdFx0XHRcdHsuLi57IHVzZXI6IG5ld1VzZXIsIGhhbmRsZUNsaWNrLCBzZXRGb2N1c2VkVXNlciwgc2V0SG92ZXJlZFVzZXIgfX1cblx0XHRcdFx0XHRcdGlzRm9jdXNlZD17cXVlcnkubGVuZ3RofVxuXHRcdFx0XHRcdFx0aXNMb2FkaW5nPXt1c2VyTXV0YXRpb25Mb2FkaW5nfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvbW90aW9uLmxpPlxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PEFuaW1hdGVQcmVzZW5jZT5cblx0XHRcdHtxdWVyeSAmJiAoXG5cdFx0XHRcdDxtb3Rpb24udWwgey4uLkZBREVfSU59IGNsYXNzTmFtZT1cImJveF9fbGlzdCBsaXN0XCI+XG5cdFx0XHRcdFx0e2ZpbHRlcmVkUmVzdWx0cygpfVxuXHRcdFx0XHQ8L21vdGlvbi51bD5cblx0XHRcdCl9XG5cdFx0PC9BbmltYXRlUHJlc2VuY2U+XG5cdCk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJBZGQgfSBmcm9tIFwiLi9Vc2VyQWRkXCI7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tIFwicmVhY3Qtc3ZnXCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuLyogQXNzZXRzICovXG5pbXBvcnQgc3Rhckljb24gZnJvbSBcImljb25zL3N0YXIuc3ZnXCI7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiaWNvbnMvZGVsZXRlLnN2Z1wiO1xuXG4vKiBBcGkgY2FsbHMgKi9cbmltcG9ydCB7IGRlbGV0ZVVzZXIsIFFVRVJZX0tFWVMgfSBmcm9tIFwiLi4vLi4vcHJvamVjdC1vdmVydmlldy9hcGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcih7IHVzZXIsIHByb2plY3QsIHZhcmlhbnQgPSBcImRlZmF1bHRcIiwgc2l6ZSA9IFwibWRcIiB9KSB7XG4gICAgLyogSG9va3MgKi9cbiAgICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cbiAgICAvKiBDb25zdGFudHMgKi9cbiAgICBjb25zdCB7IGlkOiBwcm9qZWN0SWQsIGF1dGhvciB9ID0gcHJvamVjdDtcbiAgICBjb25zdCB7IGlkOiB1c2VySWQsIGVtYWlsIH0gPSB1c2VyO1xuXG4gICAgY29uc3QgaXNBdXRob3IgPSBlbWFpbCA9PT0gYXV0aG9yO1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbXCJ1c2VyXCIsIGB1c2VyLS0ke3NpemV9YCwgYHVzZXItLSR7dmFyaWFudH1gLCBpc0F1dGhvciAmJiBcInVzZXItLWF1dGhvclwiXS5qb2luKFwiIFwiKTtcblxuICAgIC8qIE11dGF0aW9ucyAqL1xuICAgIGNvbnN0IGRlbGV0ZVVzZXJNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGRlbGV0ZVVzZXIsIHtcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKSxcbiAgICB9KTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzfT5cbiAgICAgICAgICAgIDxVc2VyQXZhdGFyIHsuLi51c2VyfT5cbiAgICAgICAgICAgICAgICB7dmFyaWFudCA9PT0gXCJpbnRlcmFjdGl2ZVwiICYmICFpc0F1dGhvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVzZXJfX2FjdGlvbiBidG4gYnRuLWxpbmsgcC0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZGVsZXRlVXNlck11dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgdXNlcklkIH0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwidXNlcl9fYWN0aW9uLWljb24gaWNvbiBpY29uLS0xNFwiIHNyYz17ZGVsZXRlSWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvVXNlckF2YXRhcj5cbiAgICAgICAgICAgIHtpc0F1dGhvciAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyX19zdGF0dXMgdXNlcl9fc3RhdHVzLS1sZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJ1c2VyX19zdGF0dXMtaWNvbiBpY29uIHRleHQtdGVydGlhcnkgbXQtMFwiIHNyYz17c3Rhckljb259IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5leHBvcnQgY29uc3QgVXNlckF2YXRhciA9ICh7IHVzZXJuYW1lLCB1c2VyQ29sb3IsIGNoaWxkcmVuIH0pID0+IHtcbiAgICAvKiBDb25zdGFudHMgKi9cbiAgICBjb25zdCB1c2VySW5pdGlhbHMgPSB1c2VybmFtZS5zcGxpdChcIiBcIikubWFwKCh3b3JkKSA9PiB3b3JkWzBdLnRvVXBwZXJDYXNlKCkpO1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyX19hdmF0YXJcIiBzdHlsZT17eyBcIi0tdGhlbWVcIjogdXNlckNvbG9yIH19PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlcl9faW5pdGlhbHNcIj57dXNlckluaXRpYWxzfTwvc3Bhbj5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBjb25zdCBVc2VySW5mbyA9ICh7IHVzZXJuYW1lLCBlbWFpbCB9KSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW4gbWwtM1wiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0wXCI+e3VzZXJuYW1lfTwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZC0tNjAgdGV4dC0teHNcIj57ZW1haWx9PC9wPlxuICAgIDwvZGl2PlxuKTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcyc7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tICdmcmFtZXItbW90aW9uJztcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSAncmVhY3Qtc3ZnJztcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkVXNlckljb24gZnJvbSAnaWNvbnMvYWRkX3VzZXIuc3ZnJztcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgVXNlckF2YXRhciwgVXNlckluZm8gfSBmcm9tICcuL1VzZXInO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgQW5pbWF0aW9uV3JhcHBlciwgeyBTQ0FMRV9GQURFIH0gZnJvbSAnLi4vLi4vY29tbW9uL2FuaW1hdGlvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyU2VsZWN0KHsgdXNlciwgaGFuZGxlQ2xpY2ssIGlzRm9jdXNlZCwgc2V0Rm9jdXNlZFVzZXIsIHNldEhvdmVyZWRVc2VyLCBpc0xvYWRpbmcgfSkge1xuXHQvKiBFZmZlY3RzICovXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cdFx0aXNGb2N1c2VkICYmIHNldEZvY3VzZWRVc2VyKHVzZXIpO1xuXHR9LCBbaXNGb2N1c2VkXSk7XG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0c2V0Rm9jdXNlZFVzZXIobnVsbCk7XG5cdFx0XHRzZXRIb3ZlcmVkVXNlcihmYWxzZSk7XG5cdFx0fTtcblx0fSwgW10pO1xuXG5cdC8qIENhbGxiYWNrcyAqL1xuXHRjb25zdCBoYW5kbGVTdGF0dXMgPSAoYWN0aW9uKSA9PiB7XG5cdFx0c2V0Rm9jdXNlZFVzZXIoYWN0aW9uID09PSAnZW50ZXInID8gdXNlciA6IG51bGwpO1xuXHRcdHNldEhvdmVyZWRVc2VyKGFjdGlvbiA9PT0gJ2VudGVyJyk7XG5cdH07XG5cblx0LyogUmVuZGVyICovXG5cdHJldHVybiAoXG5cdFx0PGJ1dHRvblxuXHRcdFx0Y2xhc3NOYW1lPXtgdXNlciB1c2VyLS1zZWxlY3QgJHtpc0ZvY3VzZWQgJiYgJ2lzLWZvY3VzZWQnfSB1c2VyLS14bGB9XG5cdFx0XHRvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayh1c2VyLmVtYWlsKX1cblx0XHRcdG9uTW91c2VFbnRlcj17KCkgPT4gaGFuZGxlU3RhdHVzKCdlbnRlcicpfVxuXHRcdFx0b25Nb3VzZUxlYXZlPXsoKSA9PiBoYW5kbGVTdGF0dXMoJ2xlYXZlJyl9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG5cdFx0XHRcdDxVc2VyQXZhdGFyIHsuLi51c2VyfSAvPlxuXHRcdFx0XHQ8VXNlckluZm8gey4uLnVzZXJ9IC8+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidXNlcl9fYWRkIHRleHQtc2Vjb25kYXJ5IHJvdW5kZWQtY2lyY2xlIG1sLWF1dG9cIj5cblx0XHRcdFx0XHQ8VXNlclN0YXR1cyBsb2FkaW5nPXtpc0xvYWRpbmcgJiYgaXNGb2N1c2VkfSAvPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvZGl2PlxuXHRcdDwvYnV0dG9uPlxuXHQpO1xufVxuXG5jb25zdCBVc2VyU3RhdHVzID0gKHsgbG9hZGluZyB9KSA9PiAoXG5cdDxBbmltYXRlUHJlc2VuY2U+XG5cdFx0e2xvYWRpbmcgPyAoXG5cdFx0XHQ8QW5pbWF0aW9uV3JhcHBlciBrZXk9XCJsb2FkZXJcIiBjbGFzc05hbWU9XCJwb3NpdGlvbi1hYnNvbHV0ZSBkLWZsZXhcIiB7Li4uU0NBTEVfRkFERX0+XG5cdFx0XHRcdDxDaXJjdWxhclByb2dyZXNzIGNvbG9yPVwiaW5oZXJpdFwiIHNpemU9ezEyfSAvPlxuXHRcdFx0PC9BbmltYXRpb25XcmFwcGVyPlxuXHRcdCkgOiAoXG5cdFx0XHQ8QW5pbWF0aW9uV3JhcHBlciBrZXk9XCJkZWZhdWx0XCIgY2xhc3NOYW1lPVwicG9zaXRpb24tYWJzb2x1dGUgZC1mbGV4XCIgey4uLlNDQUxFX0ZBREV9PlxuXHRcdFx0XHQ8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cInVzZXJfX2FkZC1pY29uIGljb24gaWNvbi0tMTIgdGV4dC1zZWNvbmRhcnlcIiBzcmM9e2FkZFVzZXJJY29ufSAvPlxuXHRcdFx0PC9BbmltYXRpb25XcmFwcGVyPlxuXHRcdCl9XG5cdDwvQW5pbWF0ZVByZXNlbmNlPlxuKTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTQ0FMRV9GQURFIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9hbmltYXRpb25zXCI7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBVc2VyIGZyb20gXCIuL1VzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcnMoeyB1c2VycywgbGF5b3V0ID0gXCJmdWxsXCIsIC4uLnJlc3QgfSkge1xuICAgIGNvbnN0IHNsaWNlQW1vdW50ID0gbGF5b3V0ID09PSBcIm1pbmltYWxcIiA/IDcgOiBJbmZpbml0eTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBndXR0ZXJzLTFcIj5cbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgIHt1c2Vycy5zbGljZSgwLCBzbGljZUFtb3VudCkubWFwKCh1c2VyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBsYXlvdXQgey4uLlNDQUxFX0ZBREV9IGNsYXNzTmFtZT1cImNvbC1hdXRvXCIga2V5PXt1c2VyLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlciB7Li4ueyB1c2VyLCAuLi5yZXN0IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAge2xheW91dCA9PT0gXCJtaW5pbWFsXCIgJiYgdXNlcnMubGVuZ3RoID4gNyAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGxheW91dCB7Li4uU0NBTEVfRkFERX0gY2xhc3NOYW1lPVwiY29sLWF1dG9cIiBrZXk9XCJtb3JlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LS14cyB0ZXh0LW11dGVkLS03MCBtbC0xXCI+KyB7dXNlcnMubGVuZ3RoIC0gc2xpY2VBbW91bnR9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VycyB9IGZyb20gXCIuL1VzZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXIgfSBmcm9tIFwiLi9Vc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJTZWxlY3QgfSBmcm9tIFwiLi9Vc2VyU2VsZWN0XCI7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmaWx0ZXJVc2VycyhnbG9iYWxVc2VycywgdXNlcnMsIHF1ZXJ5KSB7XG4gICAgY29uc3QgbG93ZXJRdWVyeSA9IHF1ZXJ5LnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgZXhpc3RpbmdVc2Vyc0J5RW1haWwgPSB1c2Vycy5tYXAoKHsgZW1haWwgfSkgPT4gZW1haWwpO1xuXG4gICAgbGV0IGZpbHRlcmVkVXNlcnMgPSBnbG9iYWxVc2Vyc1xuICAgICAgICAuZmlsdGVyKCh7IGVtYWlsIH0pID0+IHtcbiAgICAgICAgICAgIC8qIE9ubHkgcmV0dXJuIHVzZXJzIHRoYXQgYXJlIG5vdCBwYXJ0IG9mIHRoZSBwcm9qZWN0ICovXG4gICAgICAgICAgICByZXR1cm4gIWV4aXN0aW5nVXNlcnNCeUVtYWlsLmluY2x1ZGVzKGVtYWlsKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbHRlcigoeyBlbWFpbCwgdXNlcm5hbWUgfSkgPT4ge1xuICAgICAgICAgICAgLyogT25seSByZXR1cm4gdXNlcnMgdGhhdCBtYXRjaCB0aGUgcXVlcnkgb24gZW1haWwgfHwgdXNlcm5hbWUgKi9cbiAgICAgICAgICAgIHJldHVybiBlbWFpbC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKGxvd2VyUXVlcnkpIHx8IHVzZXJuYW1lLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMobG93ZXJRdWVyeSk7XG4gICAgICAgIH0pO1xuXG4gICAgcmV0dXJuIGZpbHRlcmVkVXNlcnM7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGlzRW1haWwgfSBmcm9tIFwiLi9pc0VtYWlsXCI7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0VtYWlsKGVtYWlsKSB7XG4gICAgcmV0dXJuIC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvLnRlc3QoZW1haWwpO1xufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgY29uc3QgUVVFUllfS0VZUyA9IHtcbiAgICBQUk9KRUNUX0JZX1VTRVI6IFwicHJvamVjdF9ieV91c2VyXCIsXG4gICAgUFJPSkVDVF9CWV9JRDogXCJwcm9qZWN0X2J5X2lkXCIsXG4gICAgR0xPQkFMX1VTRVJTOiBcImdsb2JhbF91c2Vyc1wiXG59O1xuXG4vKiBQcm9qZWN0IHJlbGF0ZWQgY2FsbHMgKi9cbmV4cG9ydCBjb25zdCBmZXRjaFByb2plY3RzQnlVc2VyID0gYXN5bmMgKHsgdXNlcklkIH0pID0+IHtcbiAgICBsZXQgdXJsID0gXCIvYXBpL3Byb2plY3RzL2dldFwiO1xuICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgdXJsID0gYCR7dXJsfS8ke3VzZXJJZH1gO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuICAgIHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9qZWN0QnlJZCA9IGFzeW5jICh7IHByb2plY3RJZCB9KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2plY3QvZ2V0LyR7cHJvamVjdElkfWApO1xuICAgIHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9wcm9qZWN0cy9hZGRcIik7XG4gICAgcmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9qZWN0ID0gYXN5bmMgKHsgcHJvamVjdElkIH0pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3Byb2plY3RzL2RlbGV0ZS8ke3Byb2plY3RJZH1gKTtcbiAgICByZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGVkaXRQcm9qZWN0ID0gYXN5bmMgKHsgZm9ybVJlZiwgcHJvamVjdElkIH0pID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybVJlZi5jdXJyZW50KTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvcHJvamVjdHMvZWRpdC8ke3Byb2plY3RJZH1gLCBwYXJhbXMpO1xuICAgIHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBQcm9qZWN0IGltYWdlIHJlbGF0ZWQgY2FsbHMgKi9cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0SW1hZ2VzID0gYXN5bmMgKHsgcHJvamVjdElkLCBpbWFnZXMgfSkgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4gcGFyYW1zLmFwcGVuZChcImltYWdlc1tdXCIsIGltYWdlKSk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2ltYWdlcy9hZGQvJHtwcm9qZWN0SWR9YCwgcGFyYW1zKTtcbiAgICByZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3RJbWFnZXMgPSBhc3luYyAoeyBwcm9qZWN0SWQsIGlkIH0pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2ltYWdlcy9kZWxldGUvJHtwcm9qZWN0SWR9YCwgeyBpZCB9KTtcbiAgICByZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogVXNlciByZWxhdGVkIGNhbGxzICovXG5leHBvcnQgY29uc3QgZmV0Y2hHb2JhbFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldChcIi9hcGkvdXNlcnMvZ2V0XCIpO1xuICAgIHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkVXNlciA9IGFzeW5jICh7IHByb2plY3RJZCwgZW1haWwgfSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvdXNlcnMvYWRkLyR7cHJvamVjdElkfWAsIHsgZW1haWwgfSk7XG4gICAgcmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKHsgcHJvamVjdElkLCB1c2VySWQgfSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvdXNlcnMvZGVsZXRlLyR7cHJvamVjdElkfWAsIHsgdXNlcklkIH0pO1xuICAgIHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzc1wiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUHJvamVjdFJlc3VsdHMgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBQcm9qZWN0QWRkIH0gZnJvbSBcIi4vcHJvamVjdC1hZGRcIjtcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiwgU1RBR0dFUl9VUCB9IGZyb20gXCIuLi8uLi9jb21tb24vYW5pbWF0aW9uc1wiO1xuXG4vKiBBcGkgY2FsbHMgKi9cbmltcG9ydCB7IGZldGNoUHJvamVjdHNCeVVzZXIsIFFVRVJZX0tFWVMgfSBmcm9tIFwiLi4vYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RPdmVydmlldygpIHtcbiAgICAvKiBTdGF0ZSAqL1xuICAgIGNvbnN0IFtpc0FkbWluLCBzZXRJc0FkbWluXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB1c2VySWQgPSBhdG9iKGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKFwiP1wiLCBcIlwiKSk7XG5cbiAgICAvKiBIb29rcyAqL1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nOiBwcm9qZWN0c0xvYWRpbmcsIGRhdGEgPSB7fSB9ID0gdXNlUXVlcnkoXG4gICAgICAgIFFVRVJZX0tFWVMuUFJPSkVDVF9CWV9VU0VSLFxuICAgICAgICAoKSA9PiBmZXRjaFByb2plY3RzQnlVc2VyKHsgdXNlcklkIH0pLFxuICAgICAgICB7XG4gICAgICAgICAgICBvblN1Y2Nlc3M6ICh7IHVzZXIgfSkgPT4gc2V0SXNBZG1pbih1c2VyLnJvbGVzLmluY2x1ZGVzKFwiUk9MRV9BRE1JTlwiKSksXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgLyogQ29uc3RhbnRzICAqL1xuICAgIGNvbnN0IHsgcHJvamVjdHMgPSBbXSB9ID0gZGF0YTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgIHtwcm9qZWN0c0xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiB7Li4uRkFERV9JTn0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluZWFyUHJvZ3Jlc3MgY29sb3I9XCJzZWNvbmRhcnlcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgPFByb2plY3RSZXN1bHRzIHsuLi57IHByb2plY3RzIH19PlxuICAgICAgICAgICAgICAgIHtpc0FkbWluICYmICFwcm9qZWN0c0xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgey4uLlNUQUdHRVJfVVAocHJvamVjdHMubGVuZ3RoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImFkZC1wcm9qZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdEFkZCAvPlxuICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgeyFpc0FkbWluICYmICFwcm9qZWN0c0xvYWRpbmcgJiYgcHJvamVjdHMubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnAgey4uLlNUQUdHRVJfVVAoKX0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIGxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2BZb3UgZG9uJ3QgaGF2ZSBhbnkgcHJvamVjdHMgeWV0YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5wPlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L1Byb2plY3RSZXN1bHRzPlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dGFyZWFBdXRvc2l6ZVwiO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tIFwicmVhY3Qtc3ZnXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSBcImljb25zL2Nsb3NlLnN2Z1wiO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBNb2RhbCwgRHJvcHpvbmUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uXCI7XG5pbXBvcnQgeyBVc2VycyB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3VzZXJzXCI7XG5pbXBvcnQgeyBVc2VyQWRkIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdXNlci1hZGRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdE1vZGFsKHtcbiAgICBwcm9qZWN0ID0ge30sXG4gICAgdG9nZ2xlTW9kYWwsXG4gICAgb25TdWJtaXQsXG4gICAgdGl0bGVQbGFjZWhvbGRlciA9IFwiVGhlIHByb2plY3QgbmFtZVwiLFxuICAgIGRlc2NyaXB0aW9uUGxhY2Vob2xkZXIgPSBcIldoYXQncyB0aGlzIHByb2plY3QgYWJvdXQ/XCIsXG59KSB7XG4gICAgLyogQ29uc3RhbnRzICAqL1xuICAgIGNvbnN0IHsgaWQ6IHByb2plY3RJZCA9IG51bGwsIHRpdGxlID0gXCJcIiwgZGVzY3JpcHRpb24gPSBcIlwiLCBwcm9qZWN0SW1hZ2VzID0gW10sIHVzZXJzID0gW10gfSA9IHByb2plY3Q7XG5cbiAgICAvKiBTdGF0ZSAqL1xuICAgIGNvbnN0IFtwcm9qZWN0VGl0bGUsIHNldFByb2plY3RUaXRsZV0gPSB1c2VTdGF0ZSh0aXRsZSk7XG4gICAgY29uc3QgW3Byb2plY3REZXNjcmlwdGlvbiwgc2V0UHJvamVjdERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKGRlc2NyaXB0aW9uKTtcblxuICAgIC8qIFJlZnMgKi9cbiAgICBjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8TW9kYWwgey4uLnsgdG9nZ2xlTW9kYWwgfX0gZG9tRWxlbWVudD17ZG9jdW1lbnQuYm9keX0+XG4gICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgIHJlZj17Zm9ybVJlZn1cbiAgICAgICAgICAgICAgICBtZXRob2Q9XCJQT1NUXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Zvcm1cIlxuICAgICAgICAgICAgICAgIG9uU3VibWl0PXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgb25TdWJtaXQoZm9ybVJlZik7XG4gICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2hlYWRlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIHB0LTYgcHQtbWQtMTIgcHgtNiBwYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInByb2plY3RUaXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb2plY3RUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLS1jbGVhciB0ZXh0LS14bFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByb2plY3RUaXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3RpdGxlUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvamVjdFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHNldFByb2plY3RUaXRsZSh2YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19jbG9zZSBidG4gYnRuLWxpbmsgbWwtYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLWRpc21pc3M9XCJtb2RhbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiQ2xvc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD1cIi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTRcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2JvZHkgcHQtMyBweC02IHBiLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInByb2plY3REZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YFdoYXQncyB0aGlzIHByb2plY3QgYWJvdXQ/YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYUF1dG9zaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtLXRleHQgZm9ybS1jb250cm9sLS1jbGVhciBtYi0xMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJvamVjdERlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Rlc2NyaXB0aW9uUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0RGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBzZXRQcm9qZWN0RGVzY3JpcHRpb24odmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gZC1mbGV4IGFsaWduLWl0ZW1zLWJhc2VsaW5lIG1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlcnMgey4uLnsgdXNlcnMsIHByb2plY3QgfX0gc2l6ZT1cImxnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlckFkZCB7Li4ueyB1c2VycywgcHJvamVjdCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8RHJvcHpvbmUgey4uLnsgcHJvamVjdElkLCBwcm9qZWN0SW1hZ2VzIH19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Zvb3RlciBweC02IHBiLTYgcGItbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0wIHctMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctMSBtbC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19idG4gYnRuIGJ0bi1ibG9jayBidG4tc2Vjb25kYXJ5IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnNwYW4gY2xhc3NOYW1lPVwiYnRuLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlNhdmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgKTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdE1vZGFsIH0gZnJvbSBcIi4vUHJvamVjdE1vZGFsXCI7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gXCJyZWFjdC1zdmdcIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFByb2plY3RNb2RhbCB9IGZyb20gXCIuLi9tb2RhbHNcIjtcblxuLyogQXNzZXRzICovXG5pbXBvcnQgYWRkUHJvamVjdEljb24gZnJvbSBcImljb25zL2FkZF9wcm9qZWN0LnN2Z1wiO1xuXG4vKiBBcGkgY2FsbHMgKi9cbmltcG9ydCB7IGFkZFByb2plY3QsIGZldGNoUHJvamVjdEJ5SWQsIFFVRVJZX0tFWVMsIGVkaXRQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0QWRkKCkge1xuICAgIC8qIFN0YXRlICovXG4gICAgY29uc3QgW3Byb2plY3RJZCwgc2V0UHJvamVjdElkXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvKiBIb29rcyAqL1xuICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuICAgIC8qIFF1ZXJpZXMgKi9cbiAgICBjb25zdCB7IGRhdGE6IHByb2plY3QgfSA9IHVzZVF1ZXJ5KFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0sICgpID0+IGZldGNoUHJvamVjdEJ5SWQoeyBwcm9qZWN0SWQgfSksIHtcbiAgICAgICAgZW5hYmxlZDogISFwcm9qZWN0SWQsXG4gICAgfSk7XG5cbiAgICAvKiBNdXRhdGlvbnMgKi9cbiAgICBjb25zdCBhZGRNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZFByb2plY3QsIHtcbiAgICAgICAgb25TdWNjZXNzOiAoeyBpZCB9KSA9PiBzZXRQcm9qZWN0SWQoaWQpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZWRpdE11dGF0aW9uID0gdXNlTXV0YXRpb24oZWRpdFByb2plY3QsIHtcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB0b2dnbGVNb2RhbCgpLFxuICAgIH0pO1xuXG4gICAgLyogQ2FsbGJhY2tzICovXG4gICAgY29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIHNldE1vZGFsT3BlbighbW9kYWxPcGVuKTtcblxuICAgICAgICAvKiBNdXRhdGUgb24gbW9kYWwgb3BlbiAqL1xuICAgICAgICBpZiAoIW1vZGFsT3BlbikgYWRkTXV0YXRpb24ubXV0YXRlKCk7XG5cbiAgICAgICAgLyogSW52YWxpZGF0ZSBwcm9qZWN0X2J5X3VzZXIgb24gY2xvc2UgbW9kYWwgKi9cbiAgICAgICAgaWYgKG1vZGFsT3Blbikge1xuICAgICAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIpO1xuICAgICAgICAgICAgc2V0UHJvamVjdElkKG51bGwpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IG9uU3VibWl0ID0gKGZvcm1SZWYpID0+IGVkaXRNdXRhdGlvbi5tdXRhdGUoeyBmb3JtUmVmLCBwcm9qZWN0SWQgfSk7XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJjYXJkIGNhcmQtLWxpbmsgaC0xMDAgbWItMFwiIHN0eWxlPXt7IG1pbkhlaWdodDogNDI3IH19PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHAtMTBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayB0ZXh0LWRlY29yYXRpb24tbm9uZSBzdHJldGNoZWQtbGlua1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0bi10ZXh0IGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSB0ZXh0LW11dGVkLS00MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTQ4XCIgc3JjPXthZGRQcm9qZWN0SWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtLXNtIG10LTFcIj5BZGQgbW9yZSBwcm9qZWN0czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPnttb2RhbE9wZW4gJiYgPFByb2plY3RNb2RhbCB7Li4ueyBwcm9qZWN0LCBvblN1Ym1pdCwgdG9nZ2xlTW9kYWwgfX0gLz59PC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0QWRkIH0gZnJvbSBcIi4vUHJvamVjdEFkZFwiO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IFByb2plY3RJbWFnZSBmcm9tIFwiLi9Qcm9qZWN0SW1hZ2VcIjtcbmltcG9ydCBQcm9qZWN0TWVudSBmcm9tIFwiLi9Qcm9qZWN0TWVudVwiO1xuaW1wb3J0IHsgVXNlcnMgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy91c2Vyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KHsgcHJvamVjdCB9KSB7XG4gICAgLyogQ29uc3RhbnRzICovXG4gICAgY29uc3QgeyBzbHVnLCB0aXRsZSwgcHJvamVjdEltYWdlcywgdXNlcnMsIGF1dGhvciB9ID0gcHJvamVjdDtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhIGhyZWY9e2Bwcm9qZWN0cy8ke3NsdWd9YH0gdGl0bGU9e3RpdGxlfSBjbGFzc05hbWU9XCJjYXJkIGNhcmQtLWxpbmsgY2FyZC0tcHJvZHVjdFwiPlxuICAgICAgICAgICAgPFByb2plY3RJbWFnZSB7Li4ueyBwcm9qZWN0SW1hZ2VzIH19IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yXCI+e3RpdGxlID8gdGl0bGUgOiBcIkFkZCBhIG5pY2UgdGl0bGVcIn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlcnMgey4uLnsgdXNlcnMsIHByb2plY3Q6IHsgYXV0aG9yIH0sIGxheW91dDogXCJtaW5pbWFsXCIgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3RNZW51IHsuLi57IHByb2plY3RJZDogcHJvamVjdC5pZCB9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYT5cbiAgICApO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSBcInJlYWN0LXN2Z1wiO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRJbWFnZUljb24gZnJvbSBcImljb25zL2FkZF9pbWFnZS5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdEltYWdlKHsgcHJvamVjdEltYWdlcyB9KSB7XG4gICAgLyogQ29uc3RhbnRzICovXG4gICAgY29uc3QgeyBpbWFnZSwgdGl0bGUgfSA9IHByb2plY3RJbWFnZXNbMF0gfHwge307XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ltYWdlIGJvcmRlciBtLTJcIj5cbiAgICAgICAgICAgIHtpbWFnZSAmJiA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz17aW1hZ2V9IHNyY1NldD17YCR7aW1hZ2V9IDJ4YH0gYWx0PXt0aXRsZX0gLz59XG4gICAgICAgICAgICB7IWltYWdlICYmIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS00OCB0ZXh0LW11dGVkLS00MFwiIHNyYz17YWRkSW1hZ2VJY29ufSAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSBcInJlYWN0LXN2Z1wiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5LCB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBlZGl0SWNvbiBmcm9tIFwiaWNvbnMvZWRpdC5zdmdcIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCJpY29ucy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgY2xvc2VJY29uIGZyb20gXCJpY29ucy9jbG9zZS5zdmdcIjtcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU0NBTEVfRkFERSwgU1RBR0dFUl9MRUZUIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9hbmltYXRpb25zXCI7XG5cbi8qIEFwaSBjYWxscyAqL1xuaW1wb3J0IHsgUVVFUllfS0VZUywgZGVsZXRlUHJvamVjdCwgZmV0Y2hQcm9qZWN0QnlJZCwgZWRpdFByb2plY3QgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XG5pbXBvcnQgeyBQcm9qZWN0TW9kYWwgfSBmcm9tIFwiLi4vbW9kYWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RNZW51KHsgcHJvamVjdElkIH0pIHtcbiAgICAvKiBIb29rcyAqL1xuICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuICAgIC8qIE11dGF0aW9ucyAqL1xuICAgIGNvbnN0IGRlbGV0ZU11dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlUHJvamVjdCwge1xuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFFVRVJZX0tFWVMuUFJPSkVDVF9CWV9VU0VSKSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGVkaXRNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGVkaXRQcm9qZWN0LCB7XG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4gdG9nZ2xlTW9kYWwoKSxcbiAgICB9KTtcblxuICAgIC8qIFN0YXRlICovXG4gICAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8qIFRvZ2dsZXMgKi9cbiAgICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4gc2V0TWVudU9wZW4oIW1lbnVPcGVuKTtcblxuICAgIGNvbnN0IHRvZ2dsZU1vZGFsID0gKCkgPT4ge1xuICAgICAgICBzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbik7XG5cbiAgICAgICAgaWYgKG1vZGFsT3BlbikgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIpO1xuICAgIH07XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNhcmRfX21lbnUgbWVudSAke21lbnVPcGVuICYmIFwiaXMtYWN0aXZlXCJ9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfX3dyYXBwZXIgcG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBwb3NpdGlvbi1yZWxhdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVNZW51KCk7XG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlciBpbml0aWFsPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVudU9wZW4gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYga2V5PVwiY2xvc2VcIiBjbGFzc05hbWU9XCJtZW51X19kb3RzXCIgey4uLlNDQUxFX0ZBREV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTQgdGV4dC13aGl0ZVwiIHNyYz17Y2xvc2VJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYga2V5PVwiZG90c1wiIGNsYXNzTmFtZT1cIm1lbnVfX2RvdHNcIiB7Li4uU0NBTEVfRkFERX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lbnVfX2RvdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVudV9fZG90XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZW51X19kb3RcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICAgICAge21lbnVPcGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51Qm9keVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi57IHByb2plY3RJZCwgZWRpdE11dGF0aW9uLCBkZWxldGVNdXRhdGlvbiwgbW9kYWxPcGVuLCB0b2dnbGVNb2RhbCwgdG9nZ2xlTWVudSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jb25zdCBNZW51Qm9keSA9ICh7IHByb2plY3RJZCwgZWRpdE11dGF0aW9uLCBkZWxldGVNdXRhdGlvbiwgbW9kYWxPcGVuLCB0b2dnbGVNb2RhbCwgdG9nZ2xlTWVudSB9KSA9PiB7XG4gICAgLyogUXVlcmllcyAqL1xuICAgIGNvbnN0IHsgZGF0YTogcHJvamVjdCB9ID0gdXNlUXVlcnkoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSwgKCkgPT4gZmV0Y2hQcm9qZWN0QnlJZCh7IHByb2plY3RJZCB9KSwge1xuICAgICAgICBlbmFibGVkOiAhIXByb2plY3RJZCxcbiAgICB9KTtcblxuICAgIC8qIENhbGxiYWNrcyAqL1xuICAgIGNvbnN0IHVwZGF0ZVByb2plY3QgPSAoYWN0aW9uKSA9PiB7XG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwiZWRpdFwiKSB0b2dnbGVNb2RhbCgpO1xuICAgICAgICBpZiAoYWN0aW9uID09PSBcImRlbGV0ZVwiKSBkZWxldGVNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IG9uU3VibWl0ID0gKGZvcm1SZWYpID0+IGVkaXRNdXRhdGlvbi5tdXRhdGUoeyBmb3JtUmVmLCBwcm9qZWN0SWQgfSk7XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfX2JvZHlcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51X19saXN0IGxpc3RcIj5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gaWNvbj17ZWRpdEljb259IGluZGV4PXsxfSBjYWxsYmFjaz17KCkgPT4gdXBkYXRlUHJvamVjdChcImVkaXRcIil9IC8+XG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIGljb249e2RlbGV0ZUljb259IGluZGV4PXswfSBjYWxsYmFjaz17KCkgPT4gdXBkYXRlUHJvamVjdChcImRlbGV0ZVwiKX0gLz5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIG9uRXhpdENvbXBsZXRlPXsoKSA9PiB0b2dnbGVNZW51KCl9PlxuICAgICAgICAgICAgICAgIHttb2RhbE9wZW4gJiYgPFByb2plY3RNb2RhbCB7Li4ueyBwcm9qZWN0LCBvblN1Ym1pdCwgdG9nZ2xlTW9kYWwgfX0gLz59XG4gICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG5cbmNvbnN0IE1lbnVJdGVtID0gKHsgaWNvbiwgaW5kZXgsIGNhbGxiYWNrIH0pID0+IChcbiAgICA8bW90aW9uLmxpIGNsYXNzTmFtZT1cImxpc3RfX2l0ZW0gbXItMlwiIHsuLi5TVEFHR0VSX0xFRlQoaW5kZXgpfT5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIHRleHQtd2hpdGUgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgPFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTE2IHRleHQtd2hpdGUgbXItMlwiIHNyYz17aWNvbn0gLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgPC9tb3Rpb24ubGk+XG4pO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTVEFHR0VSX1VQIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9hbmltYXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RSZXN1bHRzKHsgcHJvamVjdHMsIGNoaWxkcmVuIH0pIHtcbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImg1IHRleHQtd2hpdGUgbWItNlwiPllvdXIgcHJvamVjdHM8L2gxPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LS1lcXVhbGl6ZWQgZ3V0dGVycy01XCI+XG4gICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIHByb2plY3RJbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uU1RBR0dFUl9VUChwcm9qZWN0SW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXhsLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdCB7Li4ueyBwcm9qZWN0IH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdFJlc3VsdHMgfSBmcm9tIFwiLi9Qcm9qZWN0UmVzdWx0c1wiO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IFF1ZXJ5Q2xpZW50LCBRdWVyeUNsaWVudFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBQcm9qZWN0T3ZlcnZpZXcgZnJvbSBcIi4vY29tcG9uZW50cy9Qcm9qZWN0T3ZlcnZpZXdcIjtcblxuLyogQ2xpZW50ICovXG5jb25zdCBjbGllbnQgPSBuZXcgUXVlcnlDbGllbnQoe1xuICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9LFxufSk7XG5cbi8qIFJlbmRlciAqL1xuY29uc3QgcHJvamVjdE92ZXJ2aWV3Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE92ZXJ2aWV3XCIpO1xuaWYgKHByb2plY3RPdmVydmlld05vZGUgIT09IG51bGwpIHtcbiAgICByZW5kZXIoXG4gICAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIHsuLi57IGNsaWVudCB9fT5cbiAgICAgICAgICAgIDxQcm9qZWN0T3ZlcnZpZXcgey4uLnByb2plY3RPdmVydmlld05vZGUuZGF0YXNldH0gLz5cbiAgICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPixcbiAgICAgICAgcHJvamVjdE92ZXJ2aWV3Tm9kZVxuICAgICk7XG59XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0ICdwYXJzbGV5anMnO1xuXG5jb25zdCBwYXJzbGV5Q29uZmlnID0ge1xuICAgIGVycm9yQ2xhc3M6ICdpcy1lcnJvcicsXG4gICAgZXhjbHVkZWQ6ICdpbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0sIGlucHV0W3R5cGU9aGlkZGVuXSwgW2Rpc2FibGVkXSwgOmhpZGRlbicsXG4gICAgc3VjY2Vzc0NsYXNzOiAnaXMtc3VjY2Vzcydcbn07XG5cbiQoJ2Zvcm06bm90KFtub3ZhbGlkYXRlXSknKS5wYXJzbGV5KHBhcnNsZXlDb25maWcpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==