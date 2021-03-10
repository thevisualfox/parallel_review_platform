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

/***/ "./assets/app/img/icons/add.svg":
/*!**************************************!*\
  !*** ./assets/app/img/icons/add.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/add.svg";

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
/* harmony import */ var _objectfit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./objectfit */ "./assets/app/js/objectfit.js");
/* harmony import */ var _react_project_overview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./react/project-overview */ "./assets/app/js/react/project-overview/index.js");
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
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_5__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */



/* Animations */



/* Assets */


function Box(_ref) {
  var header = _ref.header,
      boxOpen = _ref.boxOpen,
      toggleBox = _ref.toggleBox,
      children = _ref.children;
  return Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], null, boxOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
    key: "box-overlay",
    className: "box-overlay",
    onClick: toggleBox
  }, _animations__WEBPACK_IMPORTED_MODULE_3__["FADE_IN"])), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
    key: "box",
    className: "box border p-5"
  }, _animations__WEBPACK_IMPORTED_MODULE_3__["FADE_IN"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box__header d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-white mb-0"
  }, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "custom-modal__close btn btn-link ml-auto",
    onClick: toggleBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_4__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--14",
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


function Dropzone(_ref) {
  var projectId = _ref.projectId,
      projectImages = _ref.projectImages;

  /* Contants */
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useQueryClient"])();
  var COLUMN_LAYOUT = "col-12 col-md-6 col-lg-4 col-xl-3";
  /* Hooks */

  var addProjectImagesMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_project_overview_api__WEBPACK_IMPORTED_MODULE_8__["addProjectImages"], {
    onSuccess: function onSuccess(_ref2) {
      var images = _ref2.images;
      queryClient.invalidateQueries(_project_overview_api__WEBPACK_IMPORTED_MODULE_8__["API_KEYS"].PBU);
      setImages(images);
    }
  });
  var deleteProjectImagesMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_project_overview_api__WEBPACK_IMPORTED_MODULE_8__["deleteProjectImages"], {
    onSuccess: function onSuccess(_ref3) {
      var images = _ref3.images;
      queryClient.invalidateQueries(_project_overview_api__WEBPACK_IMPORTED_MODULE_8__["API_KEYS"].PBU);
      setImages(images);
    }
  });

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
  /* State */


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(projectImages),
      _useState2 = _slicedToArray(_useState, 2),
      images = _useState2[0],
      setImages = _useState2[1];
  /* Callbaks */


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
  }, images.map(function (_ref4, imageIndex) {
    var image = _ref4.image,
        title = _ref4.title,
        id = _ref4.id;
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
  }, Object(_animations__WEBPACK_IMPORTED_MODULE_7__["STAGGER_UP"])(images.length), {
    className: COLUMN_LAYOUT,
    layout: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropzoneInner, {
    updateProjectImages: updateProjectImages,
    isParentDragActive: isDragActive
  })))));
}
/* Inner dropzone */

var DropzoneInner = function DropzoneInner(_ref5) {
  var updateProjectImages = _ref5.updateProjectImages,
      isParentDragActive = _ref5.isParentDragActive;

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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: "dropzone"
  }, getRootProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", getInputProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "dropzone__container card card--link ".concat((isDragActive || isParentDragActive) && "is-pulsing", " card--transparent h-100 mb-0")
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
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
      key: "custom-modal",
      className: "custom-modal custom-modal--".concat(variant)
    }, _animations__WEBPACK_IMPORTED_MODULE_3__["FADE_IN"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "custom-modal__overlay",
      onClick: toggleModal
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].article, _extends({
      key: "custom-modal__content",
      className: "custom-modal__content"
    }, _animations__WEBPACK_IMPORTED_MODULE_3__["TRANSFORM_UP"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "container px-0"
    }, children)));
  };
  /* Render */


  if (domElement) {
    return Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(render(), domElement);
  }

  return render();
}

/***/ }),

/***/ "./assets/app/js/react/common/Users.jsx":
/*!**********************************************!*\
  !*** ./assets/app/js/react/common/Users.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Users; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var icons_star_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! icons/star.svg */ "./assets/app/img/icons/star.svg");
/* harmony import */ var icons_star_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(icons_star_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var icons_add_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! icons/add.svg */ "./assets/app/img/icons/add.svg");
/* harmony import */ var icons_add_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(icons_add_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Box */ "./assets/app/js/react/common/Box.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Packages */


/* Assts */



/* Components */


function Users(_ref) {
  var users = _ref.users,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "default" : _ref$variant,
      _ref$showAddUser = _ref.showAddUser,
      showAddUser = _ref$showAddUser === void 0 ? false : _ref$showAddUser;

  /* Render */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row gutters-2"
  }, users.map(function (_ref2, userIndex) {
    var roles = _ref2.roles,
        rest = _objectWithoutProperties(_ref2, ["roles"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: userIndex,
      className: "col-auto"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "user user--".concat(variant)
    }, roles.includes("ROLE_ADMIN") && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "user__leader"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
      wrapper: "svg",
      className: "icon icon--6 text-tertiary mt-0",
      src: icons_star_svg__WEBPACK_IMPORTED_MODULE_2___default.a
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserImage, rest)));
  }), showAddUser && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserAdd, {
    variant: variant
  }));
}

var UserImage = function UserImage(_ref3) {
  var username = _ref3.username,
      image = _ref3.image,
      userColor = _ref3.userColor;
  var userInitials = username.split(" ").map(function (word) {
    return word[0];
  });

  if (image) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "user__image img-fluid rounded-circle",
      src: image,
      srcSet: "".concat(image, " 2x"),
      alt: username
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user__image user__image--initials rounded-circle",
    style: {
      backgroundColor: userColor
    }
  }, userInitials);
};

var UserAdd = function UserAdd(_ref4) {
  var variant = _ref4.variant;

  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      boxOpen = _useState2[0],
      setBoxOpen = _useState2[1];
  /* Refs */


  var formRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* Callbacks */

  var toggleBox = function toggleBox() {
    return setBoxOpen(!boxOpen);
  };

  var updateNewUsers = function updateNewUsers(event) {
    event.preventDefault(); // const params = new FormData(formRef.current);
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-link user user--".concat(variant, " user--add"),
    type: "button",
    onClick: toggleBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "user__image user__image--initials rounded-circle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--8 text-white mt-0",
    src: icons_add_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Box__WEBPACK_IMPORTED_MODULE_4__["default"], _extends({
    header: "Add users"
  }, {
    boxOpen: boxOpen,
    toggleBox: toggleBox
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    ref: formRef,
    onSubmit: updateNewUsers
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "addUser"
  }, "Add users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "email",
    className: "form-control form-control-sm",
    id: "addUsers",
    name: "newUser",
    placeholder: "user@domain.nl",
    required: true,
    autoFocus: true
  }))));
};

/***/ }),

/***/ "./assets/app/js/react/common/animations.js":
/*!**************************************************!*\
  !*** ./assets/app/js/react/common/animations.js ***!
  \**************************************************/
/*! exports provided: FADE_IN, TRANSFORM_UP, SCALE_FADE, STAGGER_UP, STAGGER_LEFT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FADE_IN", function() { return FADE_IN; });
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
    ease: EASE
  }
};
var TRANSFORM_UP = {
  initial: {
    y: "100%"
  },
  animate: {
    y: 0
  },
  exit: {
    y: "100%"
  },
  transition: {
    ease: EASE
  }
};
var SCALE_FADE = {
  initial: {
    scale: 0.5,
    opacity: 0
  },
  animate: {
    scale: 1,
    opacity: 1
  },
  exit: {
    scale: 0.5,
    opacity: 0
  },
  transition: {
    ease: EASE,
    duration: 0.1
  }
};

var STAGGER_UP = function STAGGER_UP() {
  var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return {
    initial: {
      opacity: 0,
      y: 25
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        ease: EASE,
        delay: index * 0.035
      }
    },
    exit: {
      opacity: 0,
      y: -25,
      transition: {
        ease: EASE
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
        ease: EASE,
        delay: index * 0.035
      }
    },
    exit: {
      opacity: 0,
      x: 10,
      transition: {
        ease: EASE
      }
    }
  };
};



/***/ }),

/***/ "./assets/app/js/react/common/index.js":
/*!*********************************************!*\
  !*** ./assets/app/js/react/common/index.js ***!
  \*********************************************/
/*! exports provided: Dropzone, Modal, Users */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dropzone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropzone */ "./assets/app/js/react/common/Dropzone.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dropzone", function() { return _Dropzone__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal */ "./assets/app/js/react/common/Modal.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return _Modal__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Users */ "./assets/app/js/react/common/Users.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return _Users__WEBPACK_IMPORTED_MODULE_2__["default"]; });





/***/ }),

/***/ "./assets/app/js/react/project-overview/api.js":
/*!*****************************************************!*\
  !*** ./assets/app/js/react/project-overview/api.js ***!
  \*****************************************************/
/*! exports provided: API_KEYS, fetchProjectsByUser, addProject, deleteProject, editProject, addProjectImages, deleteProjectImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_KEYS", function() { return API_KEYS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchProjectsByUser", function() { return fetchProjectsByUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProject", function() { return addProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProject", function() { return deleteProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editProject", function() { return editProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addProjectImages", function() { return addProjectImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProjectImages", function() { return deleteProjectImages; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var API_KEYS = {
  PBU: "project_by_user"
};
/* Project related calls */

var fetchProjectsByUser = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/api/projects/get");

          case 2:
            result = _context.sent;
            return _context.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchProjectsByUser() {
    return _ref.apply(this, arguments);
  };
}();
var addProject = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/projects/add");

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

  return function addProject() {
    return _ref2.apply(this, arguments);
  };
}();
var deleteProject = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_ref3) {
    var projectId, result;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            projectId = _ref3.projectId;
            _context3.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/projects/delete/".concat(projectId));

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

  return function deleteProject(_x) {
    return _ref4.apply(this, arguments);
  };
}();
var editProject = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref5) {
    var formRef, projectId, params, result;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            formRef = _ref5.formRef, projectId = _ref5.projectId;
            params = new FormData(formRef.current);
            _context4.next = 4;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/projects/edit/".concat(projectId), params);

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

  return function editProject(_x2) {
    return _ref6.apply(this, arguments);
  };
}();
/* Project image related calls */

var addProjectImages = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_ref7) {
    var projectId, images, params, result;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            projectId = _ref7.projectId, images = _ref7.images;
            params = new FormData();
            images.forEach(function (image) {
              return params.append("images[]", image);
            });
            _context5.next = 5;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/images/add/".concat(projectId), params);

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

  return function addProjectImages(_x3) {
    return _ref8.apply(this, arguments);
  };
}();
var deleteProjectImages = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_ref9) {
    var projectId, id, result;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            projectId = _ref9.projectId, id = _ref9.id;
            _context6.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/images/delete/".concat(projectId), {
              id: id
            });

          case 3:
            result = _context6.sent;
            return _context6.abrupt("return", result === null || result === void 0 ? void 0 : result.data);

          case 5:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function deleteProjectImages(_x4) {
    return _ref10.apply(this, arguments);
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ "./assets/app/js/react/project-overview/components/project/index.js");
/* harmony import */ var _project_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-add */ "./assets/app/js/react/project-overview/components/project-add/index.js");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state */ "./assets/app/js/react/project-overview/state.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../api */ "./assets/app/js/react/project-overview/api.js");
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


/* Global state */


/* Api calls */


function ProjectOverview() {
  /* State */
  var _useRecoilState = Object(recoil__WEBPACK_IMPORTED_MODULE_3__["useRecoilState"])(_state__WEBPACK_IMPORTED_MODULE_7__["projectsState"]),
      _useRecoilState2 = _slicedToArray(_useRecoilState, 2),
      projects = _useRecoilState2[0],
      setProjects = _useRecoilState2[1];

  var setUser = Object(recoil__WEBPACK_IMPORTED_MODULE_3__["useSetRecoilState"])(_state__WEBPACK_IMPORTED_MODULE_7__["userState"]);
  var isAdmin = Object(recoil__WEBPACK_IMPORTED_MODULE_3__["useRecoilValue"])(_state__WEBPACK_IMPORTED_MODULE_7__["adminState"]);
  /* Hooks */

  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_api__WEBPACK_IMPORTED_MODULE_8__["API_KEYS"].PBU, _api__WEBPACK_IMPORTED_MODULE_8__["fetchProjectsByUser"], {
    onSuccess: function onSuccess(_ref) {
      var projects = _ref.projects,
          user = _ref.user;
      setProjects(projects);
      setUser(user);
    }
  }),
      projectsLoading = _useQuery.isLoading;
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row row--equalized gutters-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], {
    initial: false
  }, projects.map(function (project, projectIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({}, Object(_common_animations__WEBPACK_IMPORTED_MODULE_6__["STAGGER_UP"])(projectIndex), {
      key: project.id,
      className: "col-12 col-md-6 col-lg-4 col-xl-3",
      layout: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_project__WEBPACK_IMPORTED_MODULE_4__["Project"], {
      project: project
    }));
  }), isAdmin && !projectsLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({}, Object(_common_animations__WEBPACK_IMPORTED_MODULE_6__["STAGGER_UP"])(projects.length), {
    key: "add-project",
    className: "col-12 col-md-6 col-lg-4 col-xl-3",
    layout: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_project_add__WEBPACK_IMPORTED_MODULE_5__["ProjectAdd"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, !isAdmin && !projectsLoading && projects.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].p, _extends({}, Object(_common_animations__WEBPACK_IMPORTED_MODULE_6__["STAGGER_UP"])(), {
    className: "col-12 text-white",
    layout: true
  }), "You don't have any projects yet"))));
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
/* harmony import */ var _material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/LinearProgress */ "./node_modules/@material-ui/core/esm/LinearProgress/index.js");
/* harmony import */ var _material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common */ "./assets/app/js/react/common/index.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../state */ "./assets/app/js/react/project-overview/state.js");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/animations */ "./assets/app/js/react/common/animations.js");
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


/* Atoms */


/* Animations */


function ProjectModal(_ref) {
  var toggleModal = _ref.toggleModal,
      projectId = _ref.projectId,
      _onSubmit = _ref.onSubmit,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? "" : _ref$title,
      _ref$description = _ref.description,
      description = _ref$description === void 0 ? "" : _ref$description,
      _ref$projectImages = _ref.projectImages,
      projectImages = _ref$projectImages === void 0 ? [] : _ref$projectImages,
      _ref$users = _ref.users,
      users = _ref$users === void 0 ? [] : _ref$users,
      _ref$titlePlaceholder = _ref.titlePlaceholder,
      titlePlaceholder = _ref$titlePlaceholder === void 0 ? "The project name" : _ref$titlePlaceholder,
      _ref$descriptionPlace = _ref.descriptionPlaceholder,
      descriptionPlaceholder = _ref$descriptionPlace === void 0 ? "What's this project about?" : _ref$descriptionPlace;

  /* Refs */
  var formRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  /* State */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(title),
      _useState2 = _slicedToArray(_useState, 2),
      projectTitle = _useState2[0],
      setProjectTitle = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(description),
      _useState4 = _slicedToArray(_useState3, 2),
      projectDescription = _useState4[0],
      setProjectDescription = _useState4[1];

  var loading = Object(recoil__WEBPACK_IMPORTED_MODULE_5__["useRecoilValue"])(_state__WEBPACK_IMPORTED_MODULE_8__["loadingState"]);
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_7__["Modal"], _extends({
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
    className: "custom-modal__header d-flex align-items-center pt-6 pt-md-12 px-6 pb-6"
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_3__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--14",
    src: icons_close_svg__WEBPACK_IMPORTED_MODULE_6___default.a
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-modal__body px-6 pb-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row gutters-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-6"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "projectDescription"
  }, "What's this project about?"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
    className: "col-auto ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_7__["Users"], _extends({
    users: users,
    formRef: formRef
  }, {
    variant: "lg",
    showAddUser: true
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_7__["Dropzone"], {
    projectId: projectId,
    projectImages: projectImages
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "custom-modal__footer px-6 pb-6 pb-md-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row gutters-0 w-100"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12 col-lg-3 col-xl-2 ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "submit",
    className: "custom-modal__btn btn btn-block btn-sm btn-white d-flex align-items-center justify-content-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].span, {
    className: "btn-text"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, loading ? "Saving..." : "Save")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "btn__loader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__["AnimatePresence"], null, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, _extends({}, _common_animations__WEBPACK_IMPORTED_MODULE_9__["FADE_IN"], {
    key: "loader"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_LinearProgress__WEBPACK_IMPORTED_MODULE_1__["default"], null))))))))));
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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals */ "./assets/app/js/react/project-overview/components/modals/index.js");
/* harmony import */ var icons_add_project_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/add_project.svg */ "./assets/app/img/icons/add_project.svg");
/* harmony import */ var icons_add_project_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_add_project_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api */ "./assets/app/js/react/project-overview/api.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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
  /* Constants */
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQueryClient"])();
  /* State */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalOpen = _useState2[0],
      setModalOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      projectId = _useState4[0],
      setProjectId = _useState4[1];
  /* Hooks */


  var addMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_6__["addProject"], {
    onSuccess: function onSuccess(_ref) {
      var id = _ref.id;
      return setProjectId(id);
    }
  });
  var editMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_6__["editProject"], {
    onSuccess: function onSuccess() {
      return toggleAddModal();
    }
  });
  /* Callbacks */

  var toggleAddModal = function toggleAddModal() {
    setModalOpen(!modalOpen);
    /* Mutate on modal open */

    if (!modalOpen) addMutation.mutate();
    /* Invalidate project_by_user on close modal */

    if (modalOpen) queryClient.invalidateQueries(_api__WEBPACK_IMPORTED_MODULE_6__["API_KEYS"].PBU);
  };

  var onSubmit = function onSubmit(formRef) {
    return editMutation.mutate({
      formRef: formRef,
      projectId: projectId
    });
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
    className: "card card--link card--transparent h-100 mb-0",
    style: {
      minHeight: 385
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body d-flex align-items-center justify-content-center p-10"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-link text-decoration-none stretched-link",
    onClick: toggleAddModal,
    type: "button"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn-text d-flex flex-column align-items-center text-white text-muted--40"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_5__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--48",
    src: icons_add_project_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text--sm mt-1"
  }, "Add more projects")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, modalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modals__WEBPACK_IMPORTED_MODULE_3__["ProjectModal"], _extends({
    toggleModal: toggleAddModal
  }, {
    projectId: projectId,
    onSubmit: onSubmit
  }))));
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
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common */ "./assets/app/js/react/common/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */

/* Components */




function Project(_ref) {
  var project = _ref.project;

  /* Constants */
  var slug = project.slug,
      title = project.title,
      projectImages = project.projectImages,
      users = project.users;
  /* State */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalOpen = _useState2[0],
      setModalOpen = _useState2[1];
  /* Callbacks */


  var toggleModal = function toggleModal() {
    return setModalOpen(!modalOpen);
  };
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
    className: "mb-3"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_3__["Users"], {
    users: users
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
    project: project,
    modalOpen: modalOpen,
    toggleModal: toggleModal
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
/* Packages */

function ProjectImage(_ref) {
  var projectImages = _ref.projectImages;

  /* Render */
  return projectImages.slice(0, 1).map(function (_ref2, imageIndex) {
    var image = _ref2.image,
        title = _ref2.title;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: imageIndex,
      className: "card__image has-overlay m-2"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      className: "card-img-top",
      src: image,
      srcSet: "".concat(image, " 2x"),
      alt: title
    }));
  });
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
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modals */ "./assets/app/js/react/project-overview/components/modals/index.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../api */ "./assets/app/js/react/project-overview/api.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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


/* Components */


/* Api calls */


function ProjectMenu(_ref) {
  var project = _ref.project;

  /* Constants */
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useQueryClient"])();
  var projectId = project.id;
  /* Hooks */

  var deleteMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_9__["deleteProject"], {
    onSuccess: function onSuccess() {
      return queryClient.invalidateQueries(_api__WEBPACK_IMPORTED_MODULE_9__["API_KEYS"].PBU);
    }
  });
  var editMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_3__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_9__["editProject"], {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries(_api__WEBPACK_IMPORTED_MODULE_9__["API_KEYS"].PBU);
      toggleEditModal();
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

  var toggleEditModal = function toggleEditModal() {
    setMenuOpen(false);
    setModalOpen(!modalOpen);
  };
  /* Callbacks */


  var onSubmit = function onSubmit(formRef) {
    return editMutation.mutate({
      formRef: formRef,
      projectId: projectId
    });
  };

  var updateProject = function updateProject(action) {
    if (action === "edit") toggleEditModal();
    if (action === "delete") deleteMutation.mutate({
      projectId: project.id
    });
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
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, menuOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, modalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modals__WEBPACK_IMPORTED_MODULE_8__["ProjectModal"], _extends({
    toggleModal: toggleEditModal
  }, _objectSpread(_objectSpread({}, project), {}, {
    projectId: projectId,
    onSubmit: onSubmit
  }))))));
}

var MenuItem = function MenuItem(_ref2) {
  var icon = _ref2.icon,
      index = _ref2.index,
      callback = _ref2.callback;
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

/***/ "./assets/app/js/react/project-overview/components/project/index.js":
/*!**************************************************************************!*\
  !*** ./assets/app/js/react/project-overview/components/project/index.js ***!
  \**************************************************************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./assets/app/js/react/project-overview/components/project/Project.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return _Project__WEBPACK_IMPORTED_MODULE_0__["default"]; });



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
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _components_ProjectOverview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ProjectOverview */ "./assets/app/js/react/project-overview/components/ProjectOverview.jsx");
/* Packages */




/* Components */


/* Client */

var client = new react_query__WEBPACK_IMPORTED_MODULE_2__["QueryClient"]();
/* Render */

var projectOverviewNode = document.getElementById("projectOverview");

if (projectOverviewNode !== null) {
  Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recoil__WEBPACK_IMPORTED_MODULE_3__["RecoilRoot"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_query__WEBPACK_IMPORTED_MODULE_2__["QueryClientProvider"], {
    client: client
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProjectOverview__WEBPACK_IMPORTED_MODULE_4__["default"], projectOverviewNode.dataset))), projectOverviewNode);
}

/***/ }),

/***/ "./assets/app/js/react/project-overview/state.js":
/*!*******************************************************!*\
  !*** ./assets/app/js/react/project-overview/state.js ***!
  \*******************************************************/
/*! exports provided: loadingState, userState, adminState, successState, projectsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingState", function() { return loadingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userState", function() { return userState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminState", function() { return adminState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successState", function() { return successState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "projectsState", function() { return projectsState; });
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");

var loadingState = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "loadingState",
  default: "initial"
});
var userState = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "userState",
  default: {}
});
var successState = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "successState",
  default: false
});
var projectsState = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["atom"])({
  key: "projectsState",
  default: []
});
var adminState = Object(recoil__WEBPACK_IMPORTED_MODULE_0__["selector"])({
  key: "adminState",
  get: function get(_ref) {
    var _get = _ref.get;

    var user = _get(userState);

    if (user !== null && user !== void 0 && user.roles) {
      return user.roles.includes("ROLE_ADMIN");
    }

    return false;
  }
});


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
/* harmony import */ var parsleyjs_dist_i18n_nl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! parsleyjs/dist/i18n/nl */ "./node_modules/parsleyjs/dist/i18n/nl.js");
/* harmony import */ var parsleyjs_dist_i18n_nl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(parsleyjs_dist_i18n_nl__WEBPACK_IMPORTED_MODULE_2__);



var parsleyConfig = {
  errorClass: 'is-error',
  excluded: 'input[type=button], input[type=submit], input[type=reset], input[type=hidden], [disabled], :hidden',
  successClass: 'is-success'
};
parsleyjs__WEBPACK_IMPORTED_MODULE_1___default.a.addMessages('nl', {
  mincheck: 'Selecteer tenminste %s optie(s).',
  maxcheck: 'Selecteer maximaal %s optie(s).',
  check: 'Selecteer tussen %s en %s optie(s).'
}).setLocale(document.documentElement.lang);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9hZGRfaW1hZ2Uuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2FkZF9wcm9qZWN0LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvZGVsZXRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9lZGl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9zdGFyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9vYmplY3RmaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vQm94LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbW1vbi9Ecm9wem9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vTW9kYWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL1VzZXJzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbW1vbi9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcHJvamVjdC1vdmVydmlldy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvUHJvamVjdE92ZXJ2aWV3LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9tb2RhbHMvUHJvamVjdE1vZGFsLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9tb2RhbHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC1hZGQvUHJvamVjdEFkZC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC1hZGQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC9Qcm9qZWN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9wcm9qZWN0L1Byb2plY3RJbWFnZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC9Qcm9qZWN0TWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L3N0YXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbIiQiLCJvYmplY3RGaXRJbWFnZXMiLCJCb3giLCJoZWFkZXIiLCJib3hPcGVuIiwidG9nZ2xlQm94IiwiY2hpbGRyZW4iLCJjcmVhdGVQb3J0YWwiLCJGQURFX0lOIiwiY2xvc2VJY29uIiwiZG9jdW1lbnQiLCJib2R5IiwiRHJvcHpvbmUiLCJwcm9qZWN0SWQiLCJwcm9qZWN0SW1hZ2VzIiwicXVlcnlDbGllbnQiLCJ1c2VRdWVyeUNsaWVudCIsIkNPTFVNTl9MQVlPVVQiLCJhZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24iLCJ1c2VNdXRhdGlvbiIsImFkZFByb2plY3RJbWFnZXMiLCJvblN1Y2Nlc3MiLCJpbWFnZXMiLCJpbnZhbGlkYXRlUXVlcmllcyIsIkFQSV9LRVlTIiwiUEJVIiwic2V0SW1hZ2VzIiwiZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uIiwiZGVsZXRlUHJvamVjdEltYWdlcyIsInVzZURyb3B6b25lIiwiYWNjZXB0Iiwibm9DbGljayIsIm9uRHJvcCIsImFjY2VwdGVkRmlsZXMiLCJ1cGRhdGVQcm9qZWN0SW1hZ2VzIiwiZ2V0Um9vdFByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImlzRHJhZ0FjdGl2ZSIsInVzZVN0YXRlIiwiYWN0aW9uIiwicHJvcHMiLCJtdXRhdGUiLCJtYXAiLCJpbWFnZUluZGV4IiwiaW1hZ2UiLCJ0aXRsZSIsImlkIiwiU1RBR0dFUl9VUCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwibGVuZ3RoIiwiaXNQYXJlbnREcmFnQWN0aXZlIiwiRHJvcHpvbmVJbm5lciIsIm5vRHJhZ0V2ZW50c0J1YmJsaW5nIiwiYWRkSW1hZ2VJY29uIiwiTW9kYWwiLCJ0b2dnbGVNb2RhbCIsImRvbUVsZW1lbnQiLCJ2YXJpYW50IiwicmVuZGVyIiwiVFJBTlNGT1JNX1VQIiwiVXNlcnMiLCJ1c2VycyIsInNob3dBZGRVc2VyIiwidXNlckluZGV4Iiwicm9sZXMiLCJyZXN0IiwiaW5jbHVkZXMiLCJzdGFySWNvbiIsIlVzZXJJbWFnZSIsInVzZXJuYW1lIiwidXNlckNvbG9yIiwidXNlckluaXRpYWxzIiwic3BsaXQiLCJ3b3JkIiwiYmFja2dyb3VuZENvbG9yIiwiVXNlckFkZCIsInNldEJveE9wZW4iLCJmb3JtUmVmIiwidXNlUmVmIiwidXBkYXRlTmV3VXNlcnMiLCJwcmV2ZW50RGVmYXVsdCIsImFkZEljb24iLCJFQVNFIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJlYXNlIiwieSIsIlNDQUxFX0ZBREUiLCJzY2FsZSIsImR1cmF0aW9uIiwiaW5kZXgiLCJkZWxheSIsIlNUQUdHRVJfTEVGVCIsIngiLCJmZXRjaFByb2plY3RzQnlVc2VyIiwiYXhpb3MiLCJnZXQiLCJyZXN1bHQiLCJkYXRhIiwiYWRkUHJvamVjdCIsInBvc3QiLCJkZWxldGVQcm9qZWN0IiwiZWRpdFByb2plY3QiLCJwYXJhbXMiLCJGb3JtRGF0YSIsImN1cnJlbnQiLCJmb3JFYWNoIiwiYXBwZW5kIiwiUHJvamVjdE92ZXJ2aWV3IiwidXNlUmVjb2lsU3RhdGUiLCJwcm9qZWN0c1N0YXRlIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsInNldFVzZXIiLCJ1c2VTZXRSZWNvaWxTdGF0ZSIsInVzZXJTdGF0ZSIsImlzQWRtaW4iLCJ1c2VSZWNvaWxWYWx1ZSIsImFkbWluU3RhdGUiLCJ1c2VRdWVyeSIsInVzZXIiLCJwcm9qZWN0c0xvYWRpbmciLCJpc0xvYWRpbmciLCJwcm9qZWN0IiwicHJvamVjdEluZGV4IiwiUHJvamVjdE1vZGFsIiwib25TdWJtaXQiLCJkZXNjcmlwdGlvbiIsInRpdGxlUGxhY2Vob2xkZXIiLCJkZXNjcmlwdGlvblBsYWNlaG9sZGVyIiwicHJvamVjdFRpdGxlIiwic2V0UHJvamVjdFRpdGxlIiwicHJvamVjdERlc2NyaXB0aW9uIiwic2V0UHJvamVjdERlc2NyaXB0aW9uIiwibG9hZGluZyIsImxvYWRpbmdTdGF0ZSIsInZhbHVlIiwidGFyZ2V0IiwiUHJvamVjdEFkZCIsIm1vZGFsT3BlbiIsInNldE1vZGFsT3BlbiIsInNldFByb2plY3RJZCIsImFkZE11dGF0aW9uIiwiZWRpdE11dGF0aW9uIiwidG9nZ2xlQWRkTW9kYWwiLCJtaW5IZWlnaHQiLCJhZGRQcm9qZWN0SWNvbiIsIlByb2plY3QiLCJzbHVnIiwiUHJvamVjdEltYWdlIiwic2xpY2UiLCJQcm9qZWN0TWVudSIsImRlbGV0ZU11dGF0aW9uIiwidG9nZ2xlRWRpdE1vZGFsIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsInRvZ2dsZU1lbnUiLCJ1cGRhdGVQcm9qZWN0IiwiZWRpdEljb24iLCJkZWxldGVJY29uIiwiTWVudUl0ZW0iLCJpY29uIiwiY2FsbGJhY2siLCJjbGllbnQiLCJRdWVyeUNsaWVudCIsInByb2plY3RPdmVydmlld05vZGUiLCJnZXRFbGVtZW50QnlJZCIsImRhdGFzZXQiLCJhdG9tIiwia2V5IiwiZGVmYXVsdCIsInN1Y2Nlc3NTdGF0ZSIsInNlbGVjdG9yIiwicGFyc2xleUNvbmZpZyIsImVycm9yQ2xhc3MiLCJleGNsdWRlZCIsInN1Y2Nlc3NDbGFzcyIsIlBhcnNsZXkiLCJhZGRNZXNzYWdlcyIsIm1pbmNoZWNrIiwibWF4Y2hlY2siLCJjaGVjayIsInNldExvY2FsZSIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJwYXJzbGV5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSxRQUFRLG9CQUFvQjtRQUM1QjtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGlCQUFpQiw0QkFBNEI7UUFDN0M7UUFDQTtRQUNBLGtCQUFrQiwyQkFBMkI7UUFDN0M7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtR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QUFJLENBQUUzRCxLQUFWLEVBQWlCO0FBQ2IsYUFBTzJELElBQUksQ0FBQzNELEtBQUwsQ0FBV0UsUUFBWCxDQUFvQixZQUFwQixDQUFQO0FBQ0g7O0FBRUQsV0FBTyxLQUFQO0FBQ0g7QUFWdUIsQ0FBRCxDQUEzQjs7Ozs7Ozs7Ozs7OztBQ3RCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBLElBQUk4RyxhQUFhLEdBQUc7QUFDaEJDLFlBQVUsRUFBRSxVQURJO0FBRWhCQyxVQUFRLEVBQUUsb0dBRk07QUFHaEJDLGNBQVksRUFBRTtBQUhFLENBQXBCO0FBTUFDLGdEQUFPLENBQUNDLFdBQVIsQ0FBb0IsSUFBcEIsRUFBMEI7QUFDdEJDLFVBQVEsRUFBRSxrQ0FEWTtBQUV0QkMsVUFBUSxFQUFFLGlDQUZZO0FBR3RCQyxPQUFLLEVBQUU7QUFIZSxDQUExQixFQUlHQyxTQUpILENBSWFoTCxRQUFRLENBQUNpTCxlQUFULENBQXlCQyxJQUp0QztBQU1BNUwsNkNBQUMsQ0FBQyx3QkFBRCxDQUFELENBQTRCNkwsT0FBNUIsQ0FBb0NaLGFBQXBDLEU7Ozs7Ozs7Ozs7O0FDakJBLHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG5cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwibWFpblwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2J1aWxkL2FwcC9cIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9hc3NldHMvYXBwL2pzL21haW4uanNcIixcInZlbmRvcnN+bWFpblwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hZGQuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FkZF9pbWFnZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYWRkX3Byb2plY3Quc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2Nsb3NlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9kZWxldGUuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2VkaXQuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3N0YXIuc3ZnXCI7IiwiLy8gQ1NTXG5pbXBvcnQgJy4uL3Njc3MvbWFpbi5zY3NzJztcblxuLy8gUG9sbHlmaWxzXG5pbXBvcnQgJ3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZSc7XG5cbi8vIENvcmVcbmltcG9ydCAnLi92YWxpZGF0aW9uJztcblxuLy8gUGx1Z2luc1xuaW1wb3J0ICcuL29iamVjdGZpdCc7XG5cbi8vIFJlYWN0XG5pbXBvcnQgJy4vcmVhY3QvcHJvamVjdC1vdmVydmlldydcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgb2JqZWN0Rml0SW1hZ2VzIGZyb20gJ29iamVjdC1maXQtaW1hZ2VzJztcblxuJChmdW5jdGlvbigpIHtcbiAgICBvYmplY3RGaXRJbWFnZXMoKTtcbn0pO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gXCIuL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSBcInJlYWN0LXN2Z1wiO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSBcImljb25zL2Nsb3NlLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3goeyBoZWFkZXIsIGJveE9wZW4sIHRvZ2dsZUJveCwgY2hpbGRyZW4gfSkge1xuICAgIHJldHVybiBjcmVhdGVQb3J0YWwoXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICB7Ym94T3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYga2V5PVwiYm94LW92ZXJsYXlcIiBjbGFzc05hbWU9XCJib3gtb3ZlcmxheVwiIG9uQ2xpY2s9e3RvZ2dsZUJveH0gey4uLkZBREVfSU59IC8+XG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGtleT1cImJveFwiIGNsYXNzTmFtZT1cImJveCBib3JkZXIgcC01XCIgey4uLkZBREVfSU59PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hfX2hlYWRlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi0wXCI+e2hlYWRlcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19jbG9zZSBidG4gYnRuLWxpbmsgbWwtYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUJveH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveF9fYm9keSBkLWZsZXggbXQtNFwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+LFxuICAgICAgICBkb2N1bWVudC5ib2R5XG4gICAgKTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSBcInJlYWN0LXN2Z1wiO1xuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tIFwicmVhY3QtZHJvcHpvbmVcIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSBcImljb25zL2Nsb3NlLnN2Z1wiO1xuaW1wb3J0IGFkZEltYWdlSWNvbiBmcm9tIFwiaWNvbnMvYWRkX2ltYWdlLnN2Z1wiO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTVEFHR0VSX1VQIH0gZnJvbSBcIi4vYW5pbWF0aW9uc1wiO1xuXG4vKiBBcGkgY2FsbHMgKi9cbmltcG9ydCB7IGFkZFByb2plY3RJbWFnZXMsIEFQSV9LRVlTLCBkZWxldGVQcm9qZWN0SW1hZ2VzIH0gZnJvbSBcIi4uL3Byb2plY3Qtb3ZlcnZpZXcvYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3B6b25lKHsgcHJvamVjdElkLCBwcm9qZWN0SW1hZ2VzIH0pIHtcbiAgICAvKiBDb250YW50cyAqL1xuICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgICBjb25zdCBDT0xVTU5fTEFZT1VUID0gXCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXhsLTNcIjtcblxuICAgIC8qIEhvb2tzICovXG4gICAgY29uc3QgYWRkUHJvamVjdEltYWdlc011dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkUHJvamVjdEltYWdlcywge1xuICAgICAgICBvblN1Y2Nlc3M6ICh7IGltYWdlcyB9KSA9PiB7XG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhBUElfS0VZUy5QQlUpO1xuICAgICAgICAgICAgc2V0SW1hZ2VzKGltYWdlcyk7XG4gICAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVQcm9qZWN0SW1hZ2VzLCB7XG4gICAgICAgIG9uU3VjY2VzczogKHsgaW1hZ2VzIH0pID0+IHtcbiAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKEFQSV9LRVlTLlBCVSk7XG4gICAgICAgICAgICBzZXRJbWFnZXMoaW1hZ2VzKTtcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzLCBpc0RyYWdBY3RpdmUgfSA9IHVzZURyb3B6b25lKHtcbiAgICAgICAgYWNjZXB0OiBcImltYWdlLypcIixcbiAgICAgICAgbm9DbGljazogdHJ1ZSxcbiAgICAgICAgb25Ecm9wOiAoYWNjZXB0ZWRGaWxlcykgPT4gdXBkYXRlUHJvamVjdEltYWdlcyhcImFkZFwiLCB7IGltYWdlczogYWNjZXB0ZWRGaWxlcyB9KSxcbiAgICB9KTtcblxuICAgIC8qIFN0YXRlICovXG4gICAgY29uc3QgW2ltYWdlcywgc2V0SW1hZ2VzXSA9IHVzZVN0YXRlKHByb2plY3RJbWFnZXMpO1xuXG4gICAgLyogQ2FsbGJha3MgKi9cbiAgICBjb25zdCB1cGRhdGVQcm9qZWN0SW1hZ2VzID0gKGFjdGlvbiwgcHJvcHMpID0+IHtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJhZGRcIikgYWRkUHJvamVjdEltYWdlc011dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCwgLi4ucHJvcHMgfSk7XG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwiZGVsZXRlXCIpIGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQsIC4uLnByb3BzIH0pO1xuICAgIH07XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3B6b25lXCIgey4uLmdldFJvb3RQcm9wcygpfT5cbiAgICAgICAgICAgIDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LS1lcXVhbGl6ZWQgZ3V0dGVycy01XCI+XG4gICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgIHtpbWFnZXMubWFwKCh7IGltYWdlLCB0aXRsZSwgaWQgfSwgaW1hZ2VJbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgbGF5b3V0IHsuLi5TVEFHR0VSX1VQKGltYWdlSW5kZXgpfSBjbGFzc05hbWU9e0NPTFVNTl9MQVlPVVR9IGtleT17aWR9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcHpvbmVfX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImRyb3B6b25lX19pbWFnZSBpbWctZmx1aWRcIiBzcmM9e2ltYWdlfSBhbHQ9e3RpdGxlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBkcm9wem9uZV9faW1hZ2UtZGVsZXRlIHAtMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVQcm9qZWN0SW1hZ2VzKFwiZGVsZXRlXCIsIHsgaWQgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS04IHRleHQtYmFzZSBtdC0wXCIgc3JjPXtjbG9zZUljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYga2V5PVwiYWRkLWltYWdlXCIgey4uLlNUQUdHRVJfVVAoaW1hZ2VzLmxlbmd0aCl9IGNsYXNzTmFtZT17Q09MVU1OX0xBWU9VVH0gbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3B6b25lSW5uZXIgey4uLnsgdXBkYXRlUHJvamVjdEltYWdlcywgaXNQYXJlbnREcmFnQWN0aXZlOiBpc0RyYWdBY3RpdmUgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbi8qIElubmVyIGRyb3B6b25lICovXG5jb25zdCBEcm9wem9uZUlubmVyID0gKHsgdXBkYXRlUHJvamVjdEltYWdlcywgaXNQYXJlbnREcmFnQWN0aXZlIH0pID0+IHtcbiAgICBjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcywgaXNEcmFnQWN0aXZlIH0gPSB1c2VEcm9wem9uZSh7XG4gICAgICAgIGFjY2VwdDogXCJpbWFnZS8qXCIsXG4gICAgICAgIG5vRHJhZ0V2ZW50c0J1YmJsaW5nOiB0cnVlLFxuICAgICAgICBvbkRyb3A6IChhY2NlcHRlZEZpbGVzKSA9PiB1cGRhdGVQcm9qZWN0SW1hZ2VzKFwiYWRkXCIsIHsgaW1hZ2VzOiBhY2NlcHRlZEZpbGVzIH0pLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZVwiIHsuLi5nZXRSb290UHJvcHMoKX0+XG4gICAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cbiAgICAgICAgICAgIDxhcnRpY2xlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHJvcHpvbmVfX2NvbnRhaW5lciBjYXJkIGNhcmQtLWxpbmsgJHtcbiAgICAgICAgICAgICAgICAgICAgKGlzRHJhZ0FjdGl2ZSB8fCBpc1BhcmVudERyYWdBY3RpdmUpICYmIFwiaXMtcHVsc2luZ1wiXG4gICAgICAgICAgICAgICAgfSBjYXJkLS10cmFuc3BhcmVudCBoLTEwMCBtYi0wYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHAtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuLXRleHQgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIHRleHQtbXV0ZWQtLTQwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tNDhcIiBzcmM9e2FkZEltYWdlSWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtLXNtIG10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNEcmFnQWN0aXZlIHx8IGlzUGFyZW50RHJhZ0FjdGl2ZSA/IFwiRHJvcCB0aGUgaW1hZ2VzXCIgOiBcIkFkZCBzb21lIGltYWdlc1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4sIFRSQU5TRk9STV9VUCB9IGZyb20gXCIuL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwoeyB0b2dnbGVNb2RhbCwgY2hpbGRyZW4sIGRvbUVsZW1lbnQsIHZhcmlhbnQgPSBcImRlZmF1bHRcIiB9KSB7XG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4gKFxuICAgICAgICA8bW90aW9uLmRpdiBrZXk9XCJjdXN0b20tbW9kYWxcIiBjbGFzc05hbWU9e2BjdXN0b20tbW9kYWwgY3VzdG9tLW1vZGFsLS0ke3ZhcmlhbnR9YH0gey4uLkZBREVfSU59PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX292ZXJsYXlcIiBvbkNsaWNrPXt0b2dnbGVNb2RhbH0gLz5cbiAgICAgICAgICAgIDxtb3Rpb24uYXJ0aWNsZSBrZXk9XCJjdXN0b20tbW9kYWxfX2NvbnRlbnRcIiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2NvbnRlbnRcIiB7Li4uVFJBTlNGT1JNX1VQfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC0wXCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uYXJ0aWNsZT5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICk7XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICBpZiAoZG9tRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKHJlbmRlcigpLCBkb21FbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVuZGVyKCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSBcInJlYWN0LXN2Z1wiO1xuXG4vKiBBc3N0cyAqL1xuaW1wb3J0IHN0YXJJY29uIGZyb20gXCJpY29ucy9zdGFyLnN2Z1wiO1xuaW1wb3J0IGFkZEljb24gZnJvbSBcImljb25zL2FkZC5zdmdcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcnMoeyB1c2VycywgdmFyaWFudCA9IFwiZGVmYXVsdFwiLCBzaG93QWRkVXNlciA9IGZhbHNlIH0pIHtcbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTJcIj5cbiAgICAgICAgICAgIHt1c2Vycy5tYXAoKHsgcm9sZXMsIC4uLnJlc3QgfSwgdXNlckluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3VzZXJJbmRleH0gY2xhc3NOYW1lPVwiY29sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdXNlciB1c2VyLS0ke3ZhcmlhbnR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3JvbGVzLmluY2x1ZGVzKFwiUk9MRV9BRE1JTlwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcl9fbGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyPVwic3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tLTYgdGV4dC10ZXJ0aWFyeSBtdC0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3N0YXJJY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlckltYWdlIHsuLi5yZXN0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHtzaG93QWRkVXNlciAmJiA8VXNlckFkZCB7Li4ueyB2YXJpYW50IH19IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jb25zdCBVc2VySW1hZ2UgPSAoeyB1c2VybmFtZSwgaW1hZ2UsIHVzZXJDb2xvciB9KSA9PiB7XG4gICAgY29uc3QgdXNlckluaXRpYWxzID0gdXNlcm5hbWUuc3BsaXQoXCIgXCIpLm1hcCgod29yZCkgPT4gd29yZFswXSk7XG5cbiAgICBpZiAoaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidXNlcl9faW1hZ2UgaW1nLWZsdWlkIHJvdW5kZWQtY2lyY2xlXCIgc3JjPXtpbWFnZX0gc3JjU2V0PXtgJHtpbWFnZX0gMnhgfSBhbHQ9e3VzZXJuYW1lfSAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXJfX2ltYWdlIHVzZXJfX2ltYWdlLS1pbml0aWFscyByb3VuZGVkLWNpcmNsZVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogdXNlckNvbG9yIH19PlxuICAgICAgICAgICAge3VzZXJJbml0aWFsc31cbiAgICAgICAgPC9zcGFuPlxuICAgICk7XG59O1xuXG5jb25zdCBVc2VyQWRkID0gKHsgdmFyaWFudCB9KSA9PiB7XG4gICAgLyogU3RhdGUgKi9cbiAgICBjb25zdCBbYm94T3Blbiwgc2V0Qm94T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvKiBSZWZzICovXG4gICAgY29uc3QgZm9ybVJlZiA9IHVzZVJlZigpO1xuXG4gICAgLyogQ2FsbGJhY2tzICovXG4gICAgY29uc3QgdG9nZ2xlQm94ID0gKCkgPT4gc2V0Qm94T3BlbighYm94T3Blbik7XG5cbiAgICBjb25zdCB1cGRhdGVOZXdVc2VycyA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuICAgIH07XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGJ0biBidG4tbGluayB1c2VyIHVzZXItLSR7dmFyaWFudH0gdXNlci0tYWRkYH0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZUJveH0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlcl9faW1hZ2UgdXNlcl9faW1hZ2UtLWluaXRpYWxzIHJvdW5kZWQtY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS04IHRleHQtd2hpdGUgbXQtMFwiIHNyYz17YWRkSWNvbn0gLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxCb3ggaGVhZGVyPVwiQWRkIHVzZXJzXCIgey4uLnsgYm94T3BlbiwgdG9nZ2xlQm94IH19PlxuICAgICAgICAgICAgICAgIDxmb3JtIHJlZj17Zm9ybVJlZn0gb25TdWJtaXQ9e3VwZGF0ZU5ld1VzZXJzfT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwiYWRkVXNlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHVzZXJzXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhZGRVc2Vyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmV3VXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJAZG9tYWluLm5sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iLCJjb25zdCBFQVNFID0gWzAuNjUsIDAsIDAuMzUsIDFdO1xuXG5jb25zdCBGQURFX0lOID0ge1xuICAgIGluaXRpYWw6IHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICB9LFxuICAgIGFuaW1hdGU6IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICB9LFxuICAgIGV4aXQ6IHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgZWFzZTogRUFTRSxcbiAgICB9LFxufTtcblxuY29uc3QgVFJBTlNGT1JNX1VQID0ge1xuICAgIGluaXRpYWw6IHtcbiAgICAgICAgeTogXCIxMDAlXCIsXG4gICAgfSxcbiAgICBhbmltYXRlOiB7XG4gICAgICAgIHk6IDAsXG4gICAgfSxcbiAgICBleGl0OiB7XG4gICAgICAgIHk6IFwiMTAwJVwiLFxuICAgIH0sXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBlYXNlOiBFQVNFLFxuICAgIH0sXG59O1xuXG5jb25zdCBTQ0FMRV9GQURFID0ge1xuICAgIGluaXRpYWw6IHtcbiAgICAgICAgc2NhbGU6IDAuNSxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICB9LFxuICAgIGFuaW1hdGU6IHtcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgfSxcbiAgICBleGl0OiB7XG4gICAgICAgIHNjYWxlOiAwLjUsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIGVhc2U6IEVBU0UsXG4gICAgICAgIGR1cmF0aW9uOiAwLjEsXG4gICAgfSxcbn07XG5cbmNvbnN0IFNUQUdHRVJfVVAgPSAoaW5kZXggPSAwKSA9PiAoe1xuICAgIGluaXRpYWw6IHsgb3BhY2l0eTogMCwgeTogMjUgfSxcbiAgICBhbmltYXRlOiB7IG9wYWNpdHk6IDEsIHk6IDAsIHRyYW5zaXRpb246IHsgZWFzZTogRUFTRSwgZGVsYXk6IGluZGV4ICogMC4wMzUgfSB9LFxuICAgIGV4aXQ6IHsgb3BhY2l0eTogMCwgeTogLTI1LCB0cmFuc2l0aW9uOiB7IGVhc2U6IEVBU0UgfSB9LFxufSk7XG5cbmNvbnN0IFNUQUdHRVJfTEVGVCA9IChpbmRleCA9IDApID0+ICh7XG4gICAgaW5pdGlhbDogeyBvcGFjaXR5OiAwLCB4OiAxMCB9LFxuICAgIGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgeDogMCwgdHJhbnNpdGlvbjogeyBlYXNlOiBFQVNFLCBkZWxheTogaW5kZXggKiAwLjAzNSB9IH0sXG4gICAgZXhpdDogeyBvcGFjaXR5OiAwLCB4OiAxMCwgdHJhbnNpdGlvbjogeyBlYXNlOiBFQVNFIH0gfSxcbn0pO1xuXG5leHBvcnQgeyBGQURFX0lOLCBUUkFOU0ZPUk1fVVAsIFNDQUxFX0ZBREUsIFNUQUdHRVJfVVAsIFNUQUdHRVJfTEVGVCB9O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBEcm9wem9uZSB9IGZyb20gXCIuL0Ryb3B6b25lXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsIH0gZnJvbSBcIi4vTW9kYWxcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlcnMgfSBmcm9tIFwiLi9Vc2Vyc1wiO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgY29uc3QgQVBJX0tFWVMgPSB7XG4gICAgUEJVOiBcInByb2plY3RfYnlfdXNlclwiLFxufTtcblxuLyogUHJvamVjdCByZWxhdGVkIGNhbGxzICovXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9qZWN0c0J5VXNlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL3Byb2plY3RzL2dldFwiKTtcbiAgICByZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvcHJvamVjdHMvYWRkXCIpO1xuICAgIHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvamVjdCA9IGFzeW5jICh7IHByb2plY3RJZCB9KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9kZWxldGUvJHtwcm9qZWN0SWR9YCk7XG4gICAgcmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBlZGl0UHJvamVjdCA9IGFzeW5jICh7IGZvcm1SZWYsIHByb2plY3RJZCB9KSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKGZvcm1SZWYuY3VycmVudCk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3Byb2plY3RzL2VkaXQvJHtwcm9qZWN0SWR9YCwgcGFyYW1zKTtcbiAgICByZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogUHJvamVjdCBpbWFnZSByZWxhdGVkIGNhbGxzICovXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdEltYWdlcyA9IGFzeW5jICh7IHByb2plY3RJZCwgaW1hZ2VzIH0pID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHBhcmFtcy5hcHBlbmQoXCJpbWFnZXNbXVwiLCBpbWFnZSkpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9pbWFnZXMvYWRkLyR7cHJvamVjdElkfWAsIHBhcmFtcyk7XG4gICAgcmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9qZWN0SW1hZ2VzID0gYXN5bmMgKHsgcHJvamVjdElkLCBpZCB9KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9pbWFnZXMvZGVsZXRlLyR7cHJvamVjdElkfWAsIHsgaWQgfSk7XG4gICAgcmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlLCB1c2VSZWNvaWxWYWx1ZSwgdXNlU2V0UmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBQcm9qZWN0QWRkIH0gZnJvbSBcIi4vcHJvamVjdC1hZGRcIjtcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU1RBR0dFUl9VUCB9IGZyb20gXCIuLi8uLi9jb21tb24vYW5pbWF0aW9uc1wiO1xuXG4vKiBHbG9iYWwgc3RhdGUgKi9cbmltcG9ydCB7IGFkbWluU3RhdGUsIHByb2plY3RzU3RhdGUsIHVzZXJTdGF0ZSB9IGZyb20gXCIuLi9zdGF0ZVwiO1xuXG4vKiBBcGkgY2FsbHMgKi9cbmltcG9ydCB7IEFQSV9LRVlTLCBmZXRjaFByb2plY3RzQnlVc2VyIH0gZnJvbSBcIi4uL2FwaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0T3ZlcnZpZXcoKSB7XG4gICAgLyogU3RhdGUgKi9cbiAgICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVJlY29pbFN0YXRlKHByb2plY3RzU3RhdGUpO1xuICAgIGNvbnN0IHNldFVzZXIgPSB1c2VTZXRSZWNvaWxTdGF0ZSh1c2VyU3RhdGUpO1xuICAgIGNvbnN0IGlzQWRtaW4gPSB1c2VSZWNvaWxWYWx1ZShhZG1pblN0YXRlKTtcblxuICAgIC8qIEhvb2tzICovXG4gICAgY29uc3QgeyBpc0xvYWRpbmc6IHByb2plY3RzTG9hZGluZyB9ID0gdXNlUXVlcnkoQVBJX0tFWVMuUEJVLCBmZXRjaFByb2plY3RzQnlVc2VyLCB7XG4gICAgICAgIG9uU3VjY2VzczogKHsgcHJvamVjdHMsIHVzZXIgfSkgPT4ge1xuICAgICAgICAgICAgc2V0UHJvamVjdHMocHJvamVjdHMpO1xuICAgICAgICAgICAgc2V0VXNlcih1c2VyKTtcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctLWVxdWFsaXplZCBndXR0ZXJzLTVcIj5cbiAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgcHJvamVjdEluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5TVEFHR0VSX1VQKHByb2plY3RJbmRleCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0IHsuLi57IHByb2plY3QgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIHtpc0FkbWluICYmICFwcm9qZWN0c0xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uU1RBR0dFUl9VUChwcm9qZWN0cy5sZW5ndGgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImFkZC1wcm9qZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXhsLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdEFkZCAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAgICAgIHshaXNBZG1pbiAmJiAhcHJvamVjdHNMb2FkaW5nICYmIHByb2plY3RzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnAgey4uLlNUQUdHRVJfVVAoKX0gY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtd2hpdGVcIiBsYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2BZb3UgZG9uJ3QgaGF2ZSBhbnkgcHJvamVjdHMgeWV0YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLnA+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmVhclByb2dyZXNzIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9MaW5lYXJQcm9ncmVzc1wiO1xuaW1wb3J0IFRleHRhcmVhQXV0b3NpemUgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRhcmVhQXV0b3NpemVcIjtcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSBcInJlYWN0LXN2Z1wiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlUmVjb2lsVmFsdWUgfSBmcm9tIFwicmVjb2lsXCI7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tIFwiaWNvbnMvY2xvc2Uuc3ZnXCI7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IE1vZGFsLCBEcm9wem9uZSwgVXNlcnMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uXCI7XG5cbi8qIEF0b21zICovXG5pbXBvcnQgeyBsb2FkaW5nU3RhdGUgfSBmcm9tIFwiLi4vLi4vc3RhdGVcIjtcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vYW5pbWF0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0TW9kYWwoe1xuICAgIHRvZ2dsZU1vZGFsLFxuICAgIHByb2plY3RJZCxcbiAgICBvblN1Ym1pdCxcbiAgICB0aXRsZSA9IFwiXCIsXG4gICAgZGVzY3JpcHRpb24gPSBcIlwiLFxuICAgIHByb2plY3RJbWFnZXMgPSBbXSxcbiAgICB1c2VycyA9IFtdLFxuICAgIHRpdGxlUGxhY2Vob2xkZXIgPSBcIlRoZSBwcm9qZWN0IG5hbWVcIixcbiAgICBkZXNjcmlwdGlvblBsYWNlaG9sZGVyID0gXCJXaGF0J3MgdGhpcyBwcm9qZWN0IGFib3V0P1wiLFxufSkge1xuICAgIC8qIFJlZnMgKi9cbiAgICBjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cbiAgICAvKiBTdGF0ZSAqL1xuICAgIGNvbnN0IFtwcm9qZWN0VGl0bGUsIHNldFByb2plY3RUaXRsZV0gPSB1c2VTdGF0ZSh0aXRsZSk7XG4gICAgY29uc3QgW3Byb2plY3REZXNjcmlwdGlvbiwgc2V0UHJvamVjdERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKGRlc2NyaXB0aW9uKTtcbiAgICBjb25zdCBsb2FkaW5nID0gdXNlUmVjb2lsVmFsdWUobG9hZGluZ1N0YXRlKTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RhbCB7Li4ueyB0b2dnbGVNb2RhbCB9fSBkb21FbGVtZW50PXtkb2N1bWVudC5ib2R5fT5cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgcmVmPXtmb3JtUmVmfVxuICAgICAgICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fZm9ybVwiXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdChmb3JtUmVmKTtcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9faGVhZGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHQtNiBwdC1tZC0xMiBweC02IHBiLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicHJvamVjdFRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtLWNsZWFyIHRleHQtLXhsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJvamVjdFRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGl0bGVQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0UHJvamVjdFRpdGxlKHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Nsb3NlIGJ0biBidG4tbGluayBtbC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fYm9keSBweC02IHBiLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInByb2plY3REZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YFdoYXQncyB0aGlzIHByb2plY3QgYWJvdXQ/YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYUF1dG9zaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtLXRleHQgZm9ybS1jb250cm9sLS1jbGVhciBtYi0xMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJvamVjdERlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Rlc2NyaXB0aW9uUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0RGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBzZXRQcm9qZWN0RGVzY3JpcHRpb24odmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gbWwtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VycyB7Li4ueyB1c2VycywgZm9ybVJlZiB9fSB2YXJpYW50PVwibGdcIiBzaG93QWRkVXNlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8RHJvcHpvbmUgey4uLnsgcHJvamVjdElkLCBwcm9qZWN0SW1hZ2VzIH19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Zvb3RlciBweC02IHBiLTYgcGItbWQtMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0wIHctMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbGctMyBjb2wteGwtMiBtbC1hdXRvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19idG4gYnRuIGJ0bi1ibG9jayBidG4tc20gYnRuLXdoaXRlIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnNwYW4gY2xhc3NOYW1lPVwiYnRuLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPntsb2FkaW5nID8gXCJTYXZpbmcuLi5cIiA6IFwiU2F2ZVwifTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidG5fX2xvYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IHsuLi5GQURFX0lOfSBrZXk9XCJsb2FkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5lYXJQcm9ncmVzcyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICApO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0TW9kYWwgfSBmcm9tIFwiLi9Qcm9qZWN0TW9kYWxcIjtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUHJvamVjdE1vZGFsIH0gZnJvbSBcIi4uL21vZGFsc1wiO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRQcm9qZWN0SWNvbiBmcm9tIFwiaWNvbnMvYWRkX3Byb2plY3Quc3ZnXCI7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gXCJyZWFjdC1zdmdcIjtcblxuLyogQXBpIGNhbGxzICovXG5pbXBvcnQgeyBhZGRQcm9qZWN0LCBBUElfS0VZUywgZWRpdFByb2plY3QgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RBZGQoKSB7XG4gICAgLyogQ29uc3RhbnRzICovXG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG4gICAgLyogU3RhdGUgKi9cbiAgICBjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtwcm9qZWN0SWQsIHNldFByb2plY3RJZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvKiBIb29rcyAqL1xuICAgIGNvbnN0IGFkZE11dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkUHJvamVjdCwge1xuICAgICAgICBvblN1Y2Nlc3M6ICh7IGlkIH0pID0+IHNldFByb2plY3RJZChpZCksXG4gICAgfSk7XG5cbiAgICBjb25zdCBlZGl0TXV0YXRpb24gPSB1c2VNdXRhdGlvbihlZGl0UHJvamVjdCwge1xuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHRvZ2dsZUFkZE1vZGFsKCksXG4gICAgfSk7XG5cbiAgICAvKiBDYWxsYmFja3MgKi9cbiAgICBjb25zdCB0b2dnbGVBZGRNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgc2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pO1xuXG4gICAgICAgIC8qIE11dGF0ZSBvbiBtb2RhbCBvcGVuICovXG4gICAgICAgIGlmICghbW9kYWxPcGVuKSBhZGRNdXRhdGlvbi5tdXRhdGUoKTtcblxuICAgICAgICAvKiBJbnZhbGlkYXRlIHByb2plY3RfYnlfdXNlciBvbiBjbG9zZSBtb2RhbCAqL1xuICAgICAgICBpZiAobW9kYWxPcGVuKSBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhBUElfS0VZUy5QQlUpO1xuICAgIH07XG5cbiAgICBjb25zdCBvblN1Ym1pdCA9IChmb3JtUmVmKSA9PiBlZGl0TXV0YXRpb24ubXV0YXRlKHsgZm9ybVJlZiwgcHJvamVjdElkIH0pO1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLS1saW5rIGNhcmQtLXRyYW5zcGFyZW50IGgtMTAwIG1iLTBcIiBzdHlsZT17eyBtaW5IZWlnaHQ6IDM4NSB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBwLTEwXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgdGV4dC1kZWNvcmF0aW9uLW5vbmUgc3RyZXRjaGVkLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVBZGRNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4tdGV4dCBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIHRleHQtd2hpdGUgdGV4dC1tdXRlZC0tNDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS00OFwiIHNyYz17YWRkUHJvamVjdEljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LS1zbSBtdC0xXCI+QWRkIG1vcmUgcHJvamVjdHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICB7bW9kYWxPcGVuICYmIDxQcm9qZWN0TW9kYWwgdG9nZ2xlTW9kYWw9e3RvZ2dsZUFkZE1vZGFsfSB7Li4ueyBwcm9qZWN0SWQsIG9uU3VibWl0IH19IC8+fVxuICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICApO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0QWRkIH0gZnJvbSBcIi4vUHJvamVjdEFkZFwiO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgUHJvamVjdEltYWdlIGZyb20gXCIuL1Byb2plY3RJbWFnZVwiO1xuaW1wb3J0IFByb2plY3RNZW51IGZyb20gXCIuL1Byb2plY3RNZW51XCI7XG5pbXBvcnQgeyBVc2VycyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdCh7IHByb2plY3QgfSkge1xuICAgIC8qIENvbnN0YW50cyAqL1xuICAgIGNvbnN0IHsgc2x1ZywgdGl0bGUsIHByb2plY3RJbWFnZXMsIHVzZXJzIH0gPSBwcm9qZWN0O1xuXG4gICAgLyogU3RhdGUgKi9cbiAgICBjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLyogQ2FsbGJhY2tzICovXG4gICAgY29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiBzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbik7XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8YSBocmVmPXtgcHJvamVjdHMvJHtzbHVnfWB9IHRpdGxlPXt0aXRsZX0gY2xhc3NOYW1lPVwiY2FyZCBjYXJkLS1saW5rIGNhcmQtLXByb2R1Y3RcIj5cbiAgICAgICAgICAgIDxQcm9qZWN0SW1hZ2Ugey4uLnsgcHJvamVjdEltYWdlcyB9fSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItM1wiPnt0aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VXNlcnMgey4uLnsgdXNlcnMgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0TWVudSB7Li4ueyBwcm9qZWN0LCBtb2RhbE9wZW4sIHRvZ2dsZU1vZGFsIH19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0SW1hZ2UoeyBwcm9qZWN0SW1hZ2VzIH0pIHtcbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gcHJvamVjdEltYWdlcy5zbGljZSgwLCAxKS5tYXAoKHsgaW1hZ2UsIHRpdGxlIH0sIGltYWdlSW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2ltYWdlSW5kZXh9IGNsYXNzTmFtZT1cImNhcmRfX2ltYWdlIGhhcy1vdmVybGF5IG0tMlwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e2ltYWdlfSBzcmNTZXQ9e2Ake2ltYWdlfSAyeGB9IGFsdD17dGl0bGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICkpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tIFwicmVhY3Qtc3ZnXCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnlDbGllbnQgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuLyogQXNzZXRzICovXG5pbXBvcnQgZWRpdEljb24gZnJvbSBcImljb25zL2VkaXQuc3ZnXCI7XG5pbXBvcnQgZGVsZXRlSWNvbiBmcm9tIFwiaWNvbnMvZGVsZXRlLnN2Z1wiO1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tIFwiaWNvbnMvY2xvc2Uuc3ZnXCI7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNDQUxFX0ZBREUsIFNUQUdHRVJfTEVGVCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vYW5pbWF0aW9uc1wiO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQcm9qZWN0TW9kYWwgfSBmcm9tIFwiLi4vbW9kYWxzXCI7XG5cbi8qIEFwaSBjYWxscyAqL1xuaW1wb3J0IHsgQVBJX0tFWVMsIGRlbGV0ZVByb2plY3QsIGVkaXRQcm9qZWN0IH0gZnJvbSBcIi4uLy4uL2FwaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0TWVudSh7IHByb2plY3QgfSkge1xuICAgIC8qIENvbnN0YW50cyAqL1xuICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcbiAgICBjb25zdCB7IGlkOiBwcm9qZWN0SWQgfSA9IHByb2plY3Q7XG5cbiAgICAvKiBIb29rcyAqL1xuICAgIGNvbnN0IGRlbGV0ZU11dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlUHJvamVjdCwge1xuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKEFQSV9LRVlTLlBCVSksXG4gICAgfSk7XG5cbiAgICBjb25zdCBlZGl0TXV0YXRpb24gPSB1c2VNdXRhdGlvbihlZGl0UHJvamVjdCwge1xuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHtcbiAgICAgICAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKEFQSV9LRVlTLlBCVSk7XG4gICAgICAgICAgICB0b2dnbGVFZGl0TW9kYWwoKTtcbiAgICAgICAgfSxcbiAgICB9KTtcblxuICAgIC8qIFN0YXRlICovXG4gICAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8qIFRvZ2dsZXMgKi9cbiAgICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4gc2V0TWVudU9wZW4oIW1lbnVPcGVuKTtcblxuICAgIGNvbnN0IHRvZ2dsZUVkaXRNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgc2V0TWVudU9wZW4oZmFsc2UpO1xuICAgICAgICBzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbik7XG4gICAgfTtcblxuICAgIC8qIENhbGxiYWNrcyAqL1xuICAgIGNvbnN0IG9uU3VibWl0ID0gKGZvcm1SZWYpID0+IGVkaXRNdXRhdGlvbi5tdXRhdGUoeyBmb3JtUmVmLCBwcm9qZWN0SWQgfSk7XG5cbiAgICBjb25zdCB1cGRhdGVQcm9qZWN0ID0gKGFjdGlvbikgPT4ge1xuICAgICAgICBpZiAoYWN0aW9uID09PSBcImVkaXRcIikgdG9nZ2xlRWRpdE1vZGFsKCk7XG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwiZGVsZXRlXCIpIGRlbGV0ZU11dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZDogcHJvamVjdC5pZCB9KTtcbiAgICB9O1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BjYXJkX19tZW51IG1lbnUgJHttZW51T3BlbiAmJiBcImlzLWFjdGl2ZVwifWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51X193cmFwcGVyIHBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgcG9zaXRpb24tcmVsYXRpdmVcIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTWVudSgpO1xuICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBleGl0QmVmb3JlRW50ZXIgaW5pdGlhbD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICAgICAge21lbnVPcGVuID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGtleT1cImNsb3NlXCIgY2xhc3NOYW1lPVwibWVudV9fZG90c1wiIHsuLi5TQ0FMRV9GQURFfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTE0IHRleHQtd2hpdGVcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGtleT1cImRvdHNcIiBjbGFzc05hbWU9XCJtZW51X19kb3RzXCIgey4uLlNDQUxFX0ZBREV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZW51X19kb3RcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lbnVfX2RvdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVudV9fZG90XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAgICAgIHttZW51T3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfX2JvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibWVudV9fbGlzdCBsaXN0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSBpY29uPXtlZGl0SWNvbn0gaW5kZXg9ezF9IGNhbGxiYWNrPXsoKSA9PiB1cGRhdGVQcm9qZWN0KFwiZWRpdFwiKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGljb249e2RlbGV0ZUljb259IGluZGV4PXswfSBjYWxsYmFjaz17KCkgPT4gdXBkYXRlUHJvamVjdChcImRlbGV0ZVwiKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICAgICAge21vZGFsT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdE1vZGFsIHRvZ2dsZU1vZGFsPXt0b2dnbGVFZGl0TW9kYWx9IHsuLi57IC4uLnByb2plY3QsIHByb2plY3RJZCwgb25TdWJtaXQgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jb25zdCBNZW51SXRlbSA9ICh7IGljb24sIGluZGV4LCBjYWxsYmFjayB9KSA9PiAoXG4gICAgPG1vdGlvbi5saSBjbGFzc05hbWU9XCJsaXN0X19pdGVtIG1yLTJcIiB7Li4uU1RBR0dFUl9MRUZUKGluZGV4KX0+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayB0ZXh0LXdoaXRlIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNiB0ZXh0LXdoaXRlIG1yLTJcIiBzcmM9e2ljb259IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvbW90aW9uLmxpPlxuKTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdCB9IGZyb20gXCIuL1Byb2plY3RcIjtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgUmVjb2lsUm9vdCB9IGZyb20gXCJyZWNvaWxcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IFByb2plY3RPdmVydmlldyBmcm9tIFwiLi9jb21wb25lbnRzL1Byb2plY3RPdmVydmlld1wiO1xuXG4vKiBDbGllbnQgKi9cbmNvbnN0IGNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuXG4vKiBSZW5kZXIgKi9cbmNvbnN0IHByb2plY3RPdmVydmlld05vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RPdmVydmlld1wiKTtcbmlmIChwcm9qZWN0T3ZlcnZpZXdOb2RlICE9PSBudWxsKSB7XG4gICAgcmVuZGVyKFxuICAgICAgICA8UmVjb2lsUm9vdD5cbiAgICAgICAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIHsuLi57IGNsaWVudCB9fT5cbiAgICAgICAgICAgICAgICA8UHJvamVjdE92ZXJ2aWV3IHsuLi5wcm9qZWN0T3ZlcnZpZXdOb2RlLmRhdGFzZXR9IC8+XG4gICAgICAgICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgICAgIDwvUmVjb2lsUm9vdD4sXG4gICAgICAgIHByb2plY3RPdmVydmlld05vZGVcbiAgICApO1xufVxuIiwiaW1wb3J0IHsgYXRvbSwgc2VsZWN0b3IgfSBmcm9tIFwicmVjb2lsXCI7XG5cbmNvbnN0IGxvYWRpbmdTdGF0ZSA9IGF0b20oe1xuICAgIGtleTogXCJsb2FkaW5nU3RhdGVcIixcbiAgICBkZWZhdWx0OiBcImluaXRpYWxcIixcbn0pO1xuXG5jb25zdCB1c2VyU3RhdGUgPSBhdG9tKHtcbiAgICBrZXk6IFwidXNlclN0YXRlXCIsXG4gICAgZGVmYXVsdDoge30sXG59KTtcblxuY29uc3Qgc3VjY2Vzc1N0YXRlID0gYXRvbSh7XG4gICAga2V5OiBcInN1Y2Nlc3NTdGF0ZVwiLFxuICAgIGRlZmF1bHQ6IGZhbHNlLFxufSk7XG5cbmNvbnN0IHByb2plY3RzU3RhdGUgPSBhdG9tKHtcbiAgICBrZXk6IFwicHJvamVjdHNTdGF0ZVwiLFxuICAgIGRlZmF1bHQ6IFtdLFxufSk7XG5cbmNvbnN0IGFkbWluU3RhdGUgPSBzZWxlY3Rvcih7XG4gICAga2V5OiBcImFkbWluU3RhdGVcIixcbiAgICBnZXQ6ICh7IGdldCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHVzZXIgPSBnZXQodXNlclN0YXRlKTtcblxuICAgICAgICBpZiAodXNlcj8ucm9sZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VyLnJvbGVzLmluY2x1ZGVzKFwiUk9MRV9BRE1JTlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9LFxufSk7XG5cbmV4cG9ydCB7IGxvYWRpbmdTdGF0ZSwgdXNlclN0YXRlLCBhZG1pblN0YXRlLCBzdWNjZXNzU3RhdGUsIHByb2plY3RzU3RhdGUgfTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgUGFyc2xleSBmcm9tICdwYXJzbGV5anMnO1xuXG5pbXBvcnQgJ3BhcnNsZXlqcy9kaXN0L2kxOG4vbmwnO1xuXG52YXIgcGFyc2xleUNvbmZpZyA9IHtcbiAgICBlcnJvckNsYXNzOiAnaXMtZXJyb3InLFxuICAgIGV4Y2x1ZGVkOiAnaW5wdXRbdHlwZT1idXR0b25dLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9cmVzZXRdLCBpbnB1dFt0eXBlPWhpZGRlbl0sIFtkaXNhYmxlZF0sIDpoaWRkZW4nLFxuICAgIHN1Y2Nlc3NDbGFzczogJ2lzLXN1Y2Nlc3MnXG59O1xuXG5QYXJzbGV5LmFkZE1lc3NhZ2VzKCdubCcsIHtcbiAgICBtaW5jaGVjazogJ1NlbGVjdGVlciB0ZW5taW5zdGUgJXMgb3B0aWUocykuJyxcbiAgICBtYXhjaGVjazogJ1NlbGVjdGVlciBtYXhpbWFhbCAlcyBvcHRpZShzKS4nLFxuICAgIGNoZWNrOiAnU2VsZWN0ZWVyIHR1c3NlbiAlcyBlbiAlcyBvcHRpZShzKS4nXG59KS5zZXRMb2NhbGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcpO1xuXG4kKCdmb3JtOm5vdChbbm92YWxpZGF0ZV0pJykucGFyc2xleShwYXJzbGV5Q29uZmlnKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=