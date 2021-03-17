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
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_4__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/* Packages */


/* Animations */



/* Assets */


function Box(_ref) {
  var header = _ref.header,
      boxOpen = _ref.boxOpen,
      toggleBox = _ref.toggleBox,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, boxOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({
    key: "box",
    className: "box border p-5"
  }, _animations__WEBPACK_IMPORTED_MODULE_2__["FADE_IN"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box__header d-flex align-items-center"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "text-white mb-0"
  }, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    type: "button",
    className: "custom-modal__close btn btn-link ml-auto",
    onClick: toggleBox
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_3__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--12",
    src: icons_close_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box__body d-flex mt-4"
  }, children)));
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
  var id = _ref.id,
      projectImages = _ref.projectImages;

  /* Contants */
  var COLUMN_LAYOUT = "col-12 col-md-6 col-lg-4 col-xl-3";
  /* Hooks */

  var addProjectImagesMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_project_overview_api__WEBPACK_IMPORTED_MODULE_8__["addProjectImages"], {
    onSuccess: function onSuccess(_ref2) {
      var images = _ref2.images;
      return setImages(images);
    }
  });
  var deleteProjectImagesMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_4__["useMutation"])(_project_overview_api__WEBPACK_IMPORTED_MODULE_8__["deleteProjectImages"], {
    onSuccess: function onSuccess(_ref3) {
      var images = _ref3.images;
      return setImages(images);
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
  /* Callbacks */


  var updateProjectImages = function updateProjectImages(action, props) {
    if (action === "add") addProjectImagesMutation.mutate(_objectSpread({
      projectId: id
    }, props));
    if (action === "delete") deleteProjectImagesMutation.mutate(_objectSpread({
      projectId: id
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

/***/ "./assets/app/js/react/components/users/User.jsx":
/*!*******************************************************!*\
  !*** ./assets/app/js/react/components/users/User.jsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var icons_star_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! icons/star.svg */ "./assets/app/img/icons/star.svg");
/* harmony import */ var icons_star_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(icons_star_svg__WEBPACK_IMPORTED_MODULE_2__);
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Packages */


/* Assts */


function User(_ref) {
  var roles = _ref.roles,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "default" : _ref$variant,
      rest = _objectWithoutProperties(_ref, ["roles", "variant"]);

  /* Render */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
}

var UserImage = function UserImage(_ref2) {
  var username = _ref2.username,
      image = _ref2.image,
      userColor = _ref2.userColor;
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

/***/ }),

/***/ "./assets/app/js/react/components/users/UserAdd.jsx":
/*!**********************************************************!*\
  !*** ./assets/app/js/react/components/users/UserAdd.jsx ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UserAdd; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var icons_add_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! icons/add.svg */ "./assets/app/img/icons/add.svg");
/* harmony import */ var icons_add_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(icons_add_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common */ "./assets/app/js/react/common/index.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../helpers */ "./assets/app/js/react/helpers/index.js");
/* harmony import */ var _project_overview_api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../project-overview/api */ "./assets/app/js/react/project-overview/api.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */



/* Assts */


/* Components */


/* Helpers */


/* Api calls */


function UserAdd(_ref) {
  var variant = _ref.variant;

  /* Hooks */
  var addUserMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_project_overview_api__WEBPACK_IMPORTED_MODULE_6__["addUser"]);
  /* State */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      boxOpen = _useState2[0],
      setBoxOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      value = _useState4[0],
      setValue = _useState4[1];
  /* Callbacks */


  var toggleBox = function toggleBox() {
    return setBoxOpen(!boxOpen);
  };

  var onChange = function onChange(event) {
    setValue(event.target.value);
  };

  var onKeyDown = function onKeyDown(event) {
    if (["Enter", "Tab"].includes(event.key)) {
      event.preventDefault();

      if (Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["isEmail"])(value)) {
        addUserMutation.mutate({
          email: value
        });
        setValue("");
      }
    }
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative ml-2"
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
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_4__["Box"], _extends({
    header: "Share with someone"
  }, {
    boxOpen: boxOpen,
    toggleBox: toggleBox
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
    className: "sr-only",
    htmlFor: "addUser"
  }, "Add users"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", _extends({
    className: "form-control form-control-sm form-control--clear",
    id: "newUsers",
    name: "newUsers",
    placeholder: "user@domain.com",
    type: "email",
    autoFocus: true
  }, {
    value: value,
    onChange: onChange,
    onKeyDown: onKeyDown
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./assets/app/js/react/components/users/User.jsx");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* Packages */

/* Components */


function Users(_ref) {
  var users = _ref.users,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "default" : _ref$variant;

  /* Render */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row gutters-2"
  }, users.map(function (user, userIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      key: userIndex
    }, _objectSpread(_objectSpread({}, user), {}, {
      variant: variant
    })));
  }));
}

/***/ }),

/***/ "./assets/app/js/react/components/users/index.js":
/*!*******************************************************!*\
  !*** ./assets/app/js/react/components/users/index.js ***!
  \*******************************************************/
/*! exports provided: Users, User, UserAdd */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Users */ "./assets/app/js/react/components/users/Users.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Users", function() { return _Users__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./assets/app/js/react/components/users/User.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _User__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _UserAdd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserAdd */ "./assets/app/js/react/components/users/UserAdd.jsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserAdd", function() { return _UserAdd__WEBPACK_IMPORTED_MODULE_2__["default"]; });





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
/*! exports provided: API_KEYS, fetchProjectsByUser, addProject, deleteProject, editProject, addProjectImages, deleteProjectImages, addUser, deleteUser */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUser", function() { return addUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
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
/* User related calls */

var addUser = /*#__PURE__*/function () {
  var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(_ref11) {
    var projectId, user, result;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            projectId = _ref11.projectId, user = _ref11.user;
            _context7.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/users/add/".concat(projectId), user);

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

  return function addUser(_x5) {
    return _ref12.apply(this, arguments);
  };
}();
var deleteUser = /*#__PURE__*/function () {
  var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(_ref13) {
    var projectId, id, result;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            projectId = _ref13.projectId, id = _ref13.id;
            _context8.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/users/delete/".concat(projectId), id);

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

  return function deleteUser(_x6) {
    return _ref14.apply(this, arguments);
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
/* harmony import */ var _components_users__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/users */ "./assets/app/js/react/components/users/index.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../state */ "./assets/app/js/react/project-overview/state.js");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/animations */ "./assets/app/js/react/common/animations.js");
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
      id = _ref.id,
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

  var loading = Object(recoil__WEBPACK_IMPORTED_MODULE_5__["useRecoilValue"])(_state__WEBPACK_IMPORTED_MODULE_9__["loadingState"]);
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
    className: "col-auto d-flex align-items-baseline ml-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_users__WEBPACK_IMPORTED_MODULE_8__["Users"], _extends({
    users: users
  }, {
    variant: "lg"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_users__WEBPACK_IMPORTED_MODULE_8__["UserAdd"], {
    variant: "lg"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_7__["Dropzone"], {
    id: id,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__["AnimatePresence"], null, loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, _extends({}, _common_animations__WEBPACK_IMPORTED_MODULE_10__["FADE_IN"], {
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
      project = _useState4[0],
      setProject = _useState4[1];
  /* Hooks */


  var addMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_api__WEBPACK_IMPORTED_MODULE_6__["addProject"], {
    onSuccess: function onSuccess(_ref) {
      var project = _ref.project;
      return setProject(project);
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
      projectId: project.id
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
  }, _objectSpread(_objectSpread({}, project), {}, {
    onSubmit: onSubmit
  })))));
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
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_users__WEBPACK_IMPORTED_MODULE_3__["Users"], {
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
/*! exports provided: loadingState, userState, adminState, projectsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingState", function() { return loadingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userState", function() { return userState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminState", function() { return adminState; });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9hZGRfaW1hZ2Uuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2FkZF9wcm9qZWN0LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvZGVsZXRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9lZGl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9zdGFyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9vYmplY3RmaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vQm94LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbW1vbi9Ecm9wem9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vTW9kYWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL2FuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3VzZXJzL1VzZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2Vycy9Vc2VyQWRkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlcnMvVXNlcnMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9oZWxwZXJzL2lzRW1haWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9Qcm9qZWN0T3ZlcnZpZXcuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcHJvamVjdC1vdmVydmlldy9jb21wb25lbnRzL21vZGFscy9Qcm9qZWN0TW9kYWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcHJvamVjdC1vdmVydmlldy9jb21wb25lbnRzL21vZGFscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9wcm9qZWN0LWFkZC9Qcm9qZWN0QWRkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9wcm9qZWN0LWFkZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9wcm9qZWN0L1Byb2plY3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcHJvamVjdC1vdmVydmlldy9jb21wb25lbnRzL3Byb2plY3QvUHJvamVjdEltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9wcm9qZWN0L1Byb2plY3RNZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9wcm9qZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcHJvamVjdC1vdmVydmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy92YWxpZGF0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOlsiJCIsIm9iamVjdEZpdEltYWdlcyIsIkJveCIsImhlYWRlciIsImJveE9wZW4iLCJ0b2dnbGVCb3giLCJjaGlsZHJlbiIsIkZBREVfSU4iLCJjbG9zZUljb24iLCJEcm9wem9uZSIsImlkIiwicHJvamVjdEltYWdlcyIsIkNPTFVNTl9MQVlPVVQiLCJhZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24iLCJ1c2VNdXRhdGlvbiIsImFkZFByb2plY3RJbWFnZXMiLCJvblN1Y2Nlc3MiLCJpbWFnZXMiLCJzZXRJbWFnZXMiLCJkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24iLCJkZWxldGVQcm9qZWN0SW1hZ2VzIiwidXNlRHJvcHpvbmUiLCJhY2NlcHQiLCJub0NsaWNrIiwib25Ecm9wIiwiYWNjZXB0ZWRGaWxlcyIsInVwZGF0ZVByb2plY3RJbWFnZXMiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiaXNEcmFnQWN0aXZlIiwidXNlU3RhdGUiLCJhY3Rpb24iLCJwcm9wcyIsIm11dGF0ZSIsInByb2plY3RJZCIsIm1hcCIsImltYWdlSW5kZXgiLCJpbWFnZSIsInRpdGxlIiwiU1RBR0dFUl9VUCIsImV2ZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwibGVuZ3RoIiwiaXNQYXJlbnREcmFnQWN0aXZlIiwiRHJvcHpvbmVJbm5lciIsIm5vRHJhZ0V2ZW50c0J1YmJsaW5nIiwiYWRkSW1hZ2VJY29uIiwiTW9kYWwiLCJ0b2dnbGVNb2RhbCIsImRvbUVsZW1lbnQiLCJ2YXJpYW50IiwicmVuZGVyIiwiVFJBTlNGT1JNX1VQIiwiY3JlYXRlUG9ydGFsIiwiRUFTRSIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsInkiLCJTQ0FMRV9GQURFIiwic2NhbGUiLCJkdXJhdGlvbiIsImluZGV4IiwiZGVsYXkiLCJTVEFHR0VSX0xFRlQiLCJ4IiwiVXNlciIsInJvbGVzIiwicmVzdCIsImluY2x1ZGVzIiwic3Rhckljb24iLCJVc2VySW1hZ2UiLCJ1c2VybmFtZSIsInVzZXJDb2xvciIsInVzZXJJbml0aWFscyIsInNwbGl0Iiwid29yZCIsImJhY2tncm91bmRDb2xvciIsIlVzZXJBZGQiLCJhZGRVc2VyTXV0YXRpb24iLCJhZGRVc2VyIiwic2V0Qm94T3BlbiIsInZhbHVlIiwic2V0VmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsIm9uS2V5RG93biIsImtleSIsInByZXZlbnREZWZhdWx0IiwiaXNFbWFpbCIsImVtYWlsIiwiYWRkSWNvbiIsIlVzZXJzIiwidXNlcnMiLCJ1c2VyIiwidXNlckluZGV4IiwidGVzdCIsIkFQSV9LRVlTIiwiUEJVIiwiZmV0Y2hQcm9qZWN0c0J5VXNlciIsImF4aW9zIiwiZ2V0IiwicmVzdWx0IiwiZGF0YSIsImFkZFByb2plY3QiLCJwb3N0IiwiZGVsZXRlUHJvamVjdCIsImVkaXRQcm9qZWN0IiwiZm9ybVJlZiIsInBhcmFtcyIsIkZvcm1EYXRhIiwiY3VycmVudCIsImZvckVhY2giLCJhcHBlbmQiLCJkZWxldGVVc2VyIiwiUHJvamVjdE92ZXJ2aWV3IiwidXNlUmVjb2lsU3RhdGUiLCJwcm9qZWN0c1N0YXRlIiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsInNldFVzZXIiLCJ1c2VTZXRSZWNvaWxTdGF0ZSIsInVzZXJTdGF0ZSIsImlzQWRtaW4iLCJ1c2VSZWNvaWxWYWx1ZSIsImFkbWluU3RhdGUiLCJ1c2VRdWVyeSIsInByb2plY3RzTG9hZGluZyIsImlzTG9hZGluZyIsInByb2plY3QiLCJwcm9qZWN0SW5kZXgiLCJQcm9qZWN0TW9kYWwiLCJvblN1Ym1pdCIsImRlc2NyaXB0aW9uIiwidGl0bGVQbGFjZWhvbGRlciIsImRlc2NyaXB0aW9uUGxhY2Vob2xkZXIiLCJ1c2VSZWYiLCJwcm9qZWN0VGl0bGUiLCJzZXRQcm9qZWN0VGl0bGUiLCJwcm9qZWN0RGVzY3JpcHRpb24iLCJzZXRQcm9qZWN0RGVzY3JpcHRpb24iLCJsb2FkaW5nIiwibG9hZGluZ1N0YXRlIiwiZG9jdW1lbnQiLCJib2R5IiwiUHJvamVjdEFkZCIsInF1ZXJ5Q2xpZW50IiwidXNlUXVlcnlDbGllbnQiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJzZXRQcm9qZWN0IiwiYWRkTXV0YXRpb24iLCJlZGl0TXV0YXRpb24iLCJ0b2dnbGVBZGRNb2RhbCIsImludmFsaWRhdGVRdWVyaWVzIiwibWluSGVpZ2h0IiwiYWRkUHJvamVjdEljb24iLCJQcm9qZWN0Iiwic2x1ZyIsIlByb2plY3RJbWFnZSIsInNsaWNlIiwiUHJvamVjdE1lbnUiLCJkZWxldGVNdXRhdGlvbiIsInRvZ2dsZUVkaXRNb2RhbCIsIm1lbnVPcGVuIiwic2V0TWVudU9wZW4iLCJ0b2dnbGVNZW51IiwidXBkYXRlUHJvamVjdCIsImVkaXRJY29uIiwiZGVsZXRlSWNvbiIsIk1lbnVJdGVtIiwiaWNvbiIsImNhbGxiYWNrIiwiY2xpZW50IiwiUXVlcnlDbGllbnQiLCJwcm9qZWN0T3ZlcnZpZXdOb2RlIiwiZ2V0RWxlbWVudEJ5SWQiLCJkYXRhc2V0IiwiYXRvbSIsImRlZmF1bHQiLCJzZWxlY3RvciIsInBhcnNsZXlDb25maWciLCJlcnJvckNsYXNzIiwiZXhjbHVkZWQiLCJzdWNjZXNzQ2xhc3MiLCJQYXJzbGV5IiwiYWRkTWVzc2FnZXMiLCJtaW5jaGVjayIsIm1heGNoZWNrIiwiY2hlY2siLCJzZXRMb2NhbGUi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QUF5QkMsSUFKdEM7QUFNQW5NLDZDQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0Qm9NLE9BQTVCLENBQW9DWixhQUFwQyxFOzs7Ozs7Ozs7OztBQ2pCQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9hcHAvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vYXNzZXRzL2FwcC9qcy9tYWluLmpzXCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYWRkLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hZGRfaW1hZ2Uuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FkZF9wcm9qZWN0LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jbG9zZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZGVsZXRlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9lZGl0LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9zdGFyLnN2Z1wiOyIsIi8vIENTU1xuaW1wb3J0ICcuLi9zY3NzL21haW4uc2Nzcyc7XG5cbi8vIFBvbGx5Zmlsc1xuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xuXG4vLyBDb3JlXG5pbXBvcnQgJy4vdmFsaWRhdGlvbic7XG5cbi8vIFBsdWdpbnNcbmltcG9ydCAnLi9vYmplY3RmaXQnO1xuXG4vLyBSZWFjdFxuaW1wb3J0ICcuL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcnXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IG9iamVjdEZpdEltYWdlcyBmcm9tICdvYmplY3QtZml0LWltYWdlcyc7XG5cbiQoZnVuY3Rpb24oKSB7XG4gICAgb2JqZWN0Rml0SW1hZ2VzKCk7XG59KTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4gfSBmcm9tIFwiLi9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gXCJyZWFjdC1zdmdcIjtcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gXCJpY29ucy9jbG9zZS5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm94KHsgaGVhZGVyLCBib3hPcGVuLCB0b2dnbGVCb3gsIGNoaWxkcmVuIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAge2JveE9wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGtleT1cImJveFwiIGNsYXNzTmFtZT1cImJveCBib3JkZXIgcC01XCIgey4uLkZBREVfSU59PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveF9faGVhZGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbWItMFwiPntoZWFkZXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19jbG9zZSBidG4gYnRuLWxpbmsgbWwtYXV0b1wiIG9uQ2xpY2s9e3RvZ2dsZUJveH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEyXCIgc3JjPXtjbG9zZUljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94X19ib2R5IGQtZmxleCBtdC00XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gXCJyZWFjdC1zdmdcIjtcbmltcG9ydCB7IHVzZURyb3B6b25lIH0gZnJvbSBcInJlYWN0LWRyb3B6b25lXCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSBcImljb25zL2Nsb3NlLnN2Z1wiO1xuaW1wb3J0IGFkZEltYWdlSWNvbiBmcm9tIFwiaWNvbnMvYWRkX2ltYWdlLnN2Z1wiO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTVEFHR0VSX1VQIH0gZnJvbSBcIi4vYW5pbWF0aW9uc1wiO1xuXG4vKiBBcGkgY2FsbHMgKi9cbmltcG9ydCB7IGFkZFByb2plY3RJbWFnZXMsIGRlbGV0ZVByb2plY3RJbWFnZXMgfSBmcm9tIFwiLi4vcHJvamVjdC1vdmVydmlldy9hcGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcHpvbmUoeyBpZCwgcHJvamVjdEltYWdlcyB9KSB7XG4gICAgLyogQ29udGFudHMgKi9cbiAgICBjb25zdCBDT0xVTU5fTEFZT1VUID0gXCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXhsLTNcIjtcblxuICAgIC8qIEhvb2tzICovXG4gICAgY29uc3QgYWRkUHJvamVjdEltYWdlc011dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkUHJvamVjdEltYWdlcywge1xuICAgICAgICBvblN1Y2Nlc3M6ICh7IGltYWdlcyB9KSA9PiBzZXRJbWFnZXMoaW1hZ2VzKSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGRlbGV0ZVByb2plY3RJbWFnZXMsIHtcbiAgICAgICAgb25TdWNjZXNzOiAoeyBpbWFnZXMgfSkgPT4gc2V0SW1hZ2VzKGltYWdlcyksXG4gICAgfSk7XG5cbiAgICBjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcywgaXNEcmFnQWN0aXZlIH0gPSB1c2VEcm9wem9uZSh7XG4gICAgICAgIGFjY2VwdDogXCJpbWFnZS8qXCIsXG4gICAgICAgIG5vQ2xpY2s6IHRydWUsXG4gICAgICAgIG9uRHJvcDogKGFjY2VwdGVkRmlsZXMpID0+IHVwZGF0ZVByb2plY3RJbWFnZXMoXCJhZGRcIiwgeyBpbWFnZXM6IGFjY2VwdGVkRmlsZXMgfSksXG4gICAgfSk7XG5cbiAgICAvKiBTdGF0ZSAqL1xuICAgIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShwcm9qZWN0SW1hZ2VzKTtcblxuICAgIC8qIENhbGxiYWNrcyAqL1xuICAgIGNvbnN0IHVwZGF0ZVByb2plY3RJbWFnZXMgPSAoYWN0aW9uLCBwcm9wcykgPT4ge1xuICAgICAgICBpZiAoYWN0aW9uID09PSBcImFkZFwiKSBhZGRQcm9qZWN0SW1hZ2VzTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkOiBpZCwgLi4ucHJvcHMgfSk7XG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwiZGVsZXRlXCIpIGRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQ6IGlkLCAuLi5wcm9wcyB9KTtcbiAgICB9O1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZVwiIHsuLi5nZXRSb290UHJvcHMoKX0+XG4gICAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0tZXF1YWxpemVkIGd1dHRlcnMtNVwiPlxuICAgICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICB7aW1hZ2VzLm1hcCgoeyBpbWFnZSwgdGl0bGUsIGlkIH0sIGltYWdlSW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGxheW91dCB7Li4uU1RBR0dFUl9VUChpbWFnZUluZGV4KX0gY2xhc3NOYW1lPXtDT0xVTU5fTEFZT1VUfSBrZXk9e2lkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3B6b25lX19jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJkcm9wem9uZV9faW1hZ2UgaW1nLWZsdWlkXCIgc3JjPXtpbWFnZX0gYWx0PXt0aXRsZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgZHJvcHpvbmVfX2ltYWdlLWRlbGV0ZSBwLTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUHJvamVjdEltYWdlcyhcImRlbGV0ZVwiLCB7IGlkIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tOCB0ZXh0LWJhc2UgbXQtMFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGtleT1cImFkZC1pbWFnZVwiIHsuLi5TVEFHR0VSX1VQKGltYWdlcy5sZW5ndGgpfSBjbGFzc05hbWU9e0NPTFVNTl9MQVlPVVR9IGxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wem9uZUlubmVyIHsuLi57IHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzUGFyZW50RHJhZ0FjdGl2ZTogaXNEcmFnQWN0aXZlIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG4vKiBJbm5lciBkcm9wem9uZSAqL1xuY29uc3QgRHJvcHpvbmVJbm5lciA9ICh7IHVwZGF0ZVByb2plY3RJbWFnZXMsIGlzUGFyZW50RHJhZ0FjdGl2ZSB9KSA9PiB7XG4gICAgY29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSB9ID0gdXNlRHJvcHpvbmUoe1xuICAgICAgICBhY2NlcHQ6IFwiaW1hZ2UvKlwiLFxuICAgICAgICBub0RyYWdFdmVudHNCdWJibGluZzogdHJ1ZSxcbiAgICAgICAgb25Ecm9wOiAoYWNjZXB0ZWRGaWxlcykgPT4gdXBkYXRlUHJvamVjdEltYWdlcyhcImFkZFwiLCB7IGltYWdlczogYWNjZXB0ZWRGaWxlcyB9KSxcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcHpvbmVcIiB7Li4uZ2V0Um9vdFByb3BzKCl9PlxuICAgICAgICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG4gICAgICAgICAgICA8YXJ0aWNsZVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRyb3B6b25lX19jb250YWluZXIgY2FyZCBjYXJkLS1saW5rICR7XG4gICAgICAgICAgICAgICAgICAgIChpc0RyYWdBY3RpdmUgfHwgaXNQYXJlbnREcmFnQWN0aXZlKSAmJiBcImlzLXB1bHNpbmdcIlxuICAgICAgICAgICAgICAgIH0gY2FyZC0tdHJhbnNwYXJlbnQgaC0xMDAgbWItMGB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBwLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0bi10ZXh0IGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSB0ZXh0LW11dGVkLS00MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTQ4XCIgc3JjPXthZGRJbWFnZUljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LS1zbSBtdC0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2lzRHJhZ0FjdGl2ZSB8fCBpc1BhcmVudERyYWdBY3RpdmUgPyBcIkRyb3AgdGhlIGltYWdlc1wiIDogXCJBZGQgc29tZSBpbWFnZXNcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjcmVhdGVQb3J0YWwgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOLCBUUkFOU0ZPUk1fVVAgfSBmcm9tIFwiLi9hbmltYXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsKHsgdG9nZ2xlTW9kYWwsIGNoaWxkcmVuLCBkb21FbGVtZW50LCB2YXJpYW50ID0gXCJkZWZhdWx0XCIgfSkge1xuICAgIGNvbnN0IHJlbmRlciA9ICgpID0+IChcbiAgICAgICAgPG1vdGlvbi5kaXYga2V5PVwiY3VzdG9tLW1vZGFsXCIgY2xhc3NOYW1lPXtgY3VzdG9tLW1vZGFsIGN1c3RvbS1tb2RhbC0tJHt2YXJpYW50fWB9IHsuLi5GQURFX0lOfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19vdmVybGF5XCIgb25DbGljaz17dG9nZ2xlTW9kYWx9IC8+XG4gICAgICAgICAgICA8bW90aW9uLmFydGljbGUga2V5PVwiY3VzdG9tLW1vZGFsX19jb250ZW50XCIgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19jb250ZW50XCIgey4uLlRSQU5TRk9STV9VUH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcHgtMFwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgIDwvbW90aW9uLmFydGljbGU+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICApO1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgaWYgKGRvbUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVBvcnRhbChyZW5kZXIoKSwgZG9tRWxlbWVudCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlbmRlcigpO1xufVxuIiwiY29uc3QgRUFTRSA9IFswLjY1LCAwLCAwLjM1LCAxXTtcblxuY29uc3QgRkFERV9JTiA9IHtcbiAgICBpbml0aWFsOiB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgfSxcbiAgICBhbmltYXRlOiB7XG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgfSxcbiAgICBleGl0OiB7XG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIGVhc2U6IEVBU0UsXG4gICAgfSxcbn07XG5cbmNvbnN0IFRSQU5TRk9STV9VUCA9IHtcbiAgICBpbml0aWFsOiB7XG4gICAgICAgIHk6IFwiMTAwJVwiLFxuICAgIH0sXG4gICAgYW5pbWF0ZToge1xuICAgICAgICB5OiAwLFxuICAgIH0sXG4gICAgZXhpdDoge1xuICAgICAgICB5OiBcIjEwMCVcIixcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgZWFzZTogRUFTRSxcbiAgICB9LFxufTtcblxuY29uc3QgU0NBTEVfRkFERSA9IHtcbiAgICBpbml0aWFsOiB7XG4gICAgICAgIHNjYWxlOiAwLjUsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgfSxcbiAgICBhbmltYXRlOiB7XG4gICAgICAgIHNjYWxlOiAxLFxuICAgICAgICBvcGFjaXR5OiAxLFxuICAgIH0sXG4gICAgZXhpdDoge1xuICAgICAgICBzY2FsZTogMC41LFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgIH0sXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBlYXNlOiBFQVNFLFxuICAgICAgICBkdXJhdGlvbjogMC4xLFxuICAgIH0sXG59O1xuXG5jb25zdCBTVEFHR0VSX1VQID0gKGluZGV4ID0gMCkgPT4gKHtcbiAgICBpbml0aWFsOiB7IG9wYWNpdHk6IDAsIHk6IDI1IH0sXG4gICAgYW5pbWF0ZTogeyBvcGFjaXR5OiAxLCB5OiAwLCB0cmFuc2l0aW9uOiB7IGVhc2U6IEVBU0UsIGRlbGF5OiBpbmRleCAqIDAuMDM1IH0gfSxcbiAgICBleGl0OiB7IG9wYWNpdHk6IDAsIHk6IC0yNSwgdHJhbnNpdGlvbjogeyBlYXNlOiBFQVNFIH0gfSxcbn0pO1xuXG5jb25zdCBTVEFHR0VSX0xFRlQgPSAoaW5kZXggPSAwKSA9PiAoe1xuICAgIGluaXRpYWw6IHsgb3BhY2l0eTogMCwgeDogMTAgfSxcbiAgICBhbmltYXRlOiB7IG9wYWNpdHk6IDEsIHg6IDAsIHRyYW5zaXRpb246IHsgZWFzZTogRUFTRSwgZGVsYXk6IGluZGV4ICogMC4wMzUgfSB9LFxuICAgIGV4aXQ6IHsgb3BhY2l0eTogMCwgeDogMTAsIHRyYW5zaXRpb246IHsgZWFzZTogRUFTRSB9IH0sXG59KTtcblxuZXhwb3J0IHsgRkFERV9JTiwgVFJBTlNGT1JNX1VQLCBTQ0FMRV9GQURFLCBTVEFHR0VSX1VQLCBTVEFHR0VSX0xFRlQgfTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgRHJvcHpvbmUgfSBmcm9tIFwiLi9Ecm9wem9uZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBNb2RhbCB9IGZyb20gXCIuL01vZGFsXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIEJveCB9IGZyb20gXCIuL0JveFwiO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyAgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSBcInJlYWN0LXN2Z1wiO1xuXG4vKiBBc3N0cyAqL1xuaW1wb3J0IHN0YXJJY29uIGZyb20gXCJpY29ucy9zdGFyLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyKHsgcm9sZXMsIHZhcmlhbnQgPSBcImRlZmF1bHRcIiwgLi4ucmVzdCB9KSB7XG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0b1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B1c2VyIHVzZXItLSR7dmFyaWFudH1gfT5cbiAgICAgICAgICAgICAgICB7cm9sZXMuaW5jbHVkZXMoXCJST0xFX0FETUlOXCIpICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1c2VyX19sZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS02IHRleHQtdGVydGlhcnkgbXQtMFwiIHNyYz17c3Rhckljb259IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPFVzZXJJbWFnZSB7Li4ucmVzdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jb25zdCBVc2VySW1hZ2UgPSAoeyB1c2VybmFtZSwgaW1hZ2UsIHVzZXJDb2xvciB9KSA9PiB7XG4gICAgY29uc3QgdXNlckluaXRpYWxzID0gdXNlcm5hbWUuc3BsaXQoXCIgXCIpLm1hcCgod29yZCkgPT4gd29yZFswXSk7XG5cbiAgICBpZiAoaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidXNlcl9faW1hZ2UgaW1nLWZsdWlkIHJvdW5kZWQtY2lyY2xlXCIgc3JjPXtpbWFnZX0gc3JjU2V0PXtgJHtpbWFnZX0gMnhgfSBhbHQ9e3VzZXJuYW1lfSAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXJfX2ltYWdlIHVzZXJfX2ltYWdlLS1pbml0aWFscyByb3VuZGVkLWNpcmNsZVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogdXNlckNvbG9yIH19PlxuICAgICAgICAgICAge3VzZXJJbml0aWFsc31cbiAgICAgICAgPC9zcGFuPlxuICAgICk7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tIFwicmVhY3Qtc3ZnXCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG4vKiBBc3N0cyAqL1xuaW1wb3J0IGFkZEljb24gZnJvbSBcImljb25zL2FkZC5zdmdcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgQm94IH0gZnJvbSBcIi4uLy4uL2NvbW1vblwiO1xuXG4vKiBIZWxwZXJzICovXG5pbXBvcnQgeyBpc0VtYWlsIH0gZnJvbSBcIi4uLy4uL2hlbHBlcnNcIjtcblxuLyogQXBpIGNhbGxzICovXG5pbXBvcnQgeyBhZGRVc2VyIH0gZnJvbSBcIi4uLy4uL3Byb2plY3Qtb3ZlcnZpZXcvYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFVzZXJBZGQoeyB2YXJpYW50IH0pIHtcbiAgICAvKiBIb29rcyAqL1xuICAgIGNvbnN0IGFkZFVzZXJNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZFVzZXIpO1xuXG4gICAgLyogU3RhdGUgKi9cbiAgICBjb25zdCBbYm94T3Blbiwgc2V0Qm94T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIC8qIENhbGxiYWNrcyAqL1xuICAgIGNvbnN0IHRvZ2dsZUJveCA9ICgpID0+IHNldEJveE9wZW4oIWJveE9wZW4pO1xuXG4gICAgY29uc3Qgb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25LZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChbXCJFbnRlclwiLCBcIlRhYlwiXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoaXNFbWFpbCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBhZGRVc2VyTXV0YXRpb24ubXV0YXRlKHsgZW1haWw6IHZhbHVlIH0pO1xuICAgICAgICAgICAgICAgIHNldFZhbHVlKFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmUgbWwtMlwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2BidG4gYnRuLWxpbmsgdXNlciB1c2VyLS0ke3ZhcmlhbnR9IHVzZXItLWFkZGB9IHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0b2dnbGVCb3h9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXJfX2ltYWdlIHVzZXJfX2ltYWdlLS1pbml0aWFscyByb3VuZGVkLWNpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tOCB0ZXh0LXdoaXRlIG10LTBcIiBzcmM9e2FkZEljb259IC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8Qm94IGhlYWRlcj1cIlNoYXJlIHdpdGggc29tZW9uZVwiIHsuLi57IGJveE9wZW4sIHRvZ2dsZUJveCB9fT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJhZGRVc2VyXCI+XG4gICAgICAgICAgICAgICAgICAgIEFkZCB1c2Vyc1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gZm9ybS1jb250cm9sLS1jbGVhclwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibmV3VXNlcnNcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmV3VXNlcnNcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJAZG9tYWluLmNvbVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICAgICAgICB7Li4ueyB2YWx1ZSwgb25DaGFuZ2UsIG9uS2V5RG93biB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBVc2VyIGZyb20gXCIuL1VzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcnMoeyB1c2VycywgdmFyaWFudCA9IFwiZGVmYXVsdFwiIH0pIHtcbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTJcIj5cbiAgICAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXIsIHVzZXJJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8VXNlciBrZXk9e3VzZXJJbmRleH0gey4uLnsgLi4udXNlciwgdmFyaWFudCB9fSAvPjtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VycyB9IGZyb20gXCIuL1VzZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXIgfSBmcm9tIFwiLi9Vc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJBZGQgfSBmcm9tIFwiLi9Vc2VyQWRkXCI7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGlzRW1haWwgfSBmcm9tIFwiLi9pc0VtYWlsXCI7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0VtYWlsKGVtYWlsKSB7XG4gICAgcmV0dXJuIC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvLnRlc3QoZW1haWwpO1xufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgY29uc3QgQVBJX0tFWVMgPSB7XG4gICAgUEJVOiBcInByb2plY3RfYnlfdXNlclwiLFxufTtcblxuLyogUHJvamVjdCByZWxhdGVkIGNhbGxzICovXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9qZWN0c0J5VXNlciA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5nZXQoXCIvYXBpL3Byb2plY3RzL2dldFwiKTtcbiAgICByZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGFkZFByb2plY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvcHJvamVjdHMvYWRkXCIpO1xuICAgIHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlUHJvamVjdCA9IGFzeW5jICh7IHByb2plY3RJZCB9KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9kZWxldGUvJHtwcm9qZWN0SWR9YCk7XG4gICAgcmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBlZGl0UHJvamVjdCA9IGFzeW5jICh7IGZvcm1SZWYsIHByb2plY3RJZCB9KSA9PiB7XG4gICAgY29uc3QgcGFyYW1zID0gbmV3IEZvcm1EYXRhKGZvcm1SZWYuY3VycmVudCk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3Byb2plY3RzL2VkaXQvJHtwcm9qZWN0SWR9YCwgcGFyYW1zKTtcbiAgICByZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogUHJvamVjdCBpbWFnZSByZWxhdGVkIGNhbGxzICovXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdEltYWdlcyA9IGFzeW5jICh7IHByb2plY3RJZCwgaW1hZ2VzIH0pID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHBhcmFtcy5hcHBlbmQoXCJpbWFnZXNbXVwiLCBpbWFnZSkpO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9pbWFnZXMvYWRkLyR7cHJvamVjdElkfWAsIHBhcmFtcyk7XG4gICAgcmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9qZWN0SW1hZ2VzID0gYXN5bmMgKHsgcHJvamVjdElkLCBpZCB9KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9pbWFnZXMvZGVsZXRlLyR7cHJvamVjdElkfWAsIHsgaWQgfSk7XG4gICAgcmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbi8qIFVzZXIgcmVsYXRlZCBjYWxscyAqL1xuZXhwb3J0IGNvbnN0IGFkZFVzZXIgPSBhc3luYyAoeyBwcm9qZWN0SWQsIHVzZXIgfSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvdXNlcnMvYWRkLyR7cHJvamVjdElkfWAsIHVzZXIpO1xuICAgIHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZGVsZXRlVXNlciA9IGFzeW5jICh7IHByb2plY3RJZCwgaWQgfSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvdXNlcnMvZGVsZXRlLyR7cHJvamVjdElkfWAsIGlkKTtcbiAgICByZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUsIHVzZVJlY29pbFZhbHVlLCB1c2VTZXRSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IFByb2plY3RBZGQgfSBmcm9tIFwiLi9wcm9qZWN0LWFkZFwiO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTVEFHR0VSX1VQIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9hbmltYXRpb25zXCI7XG5cbi8qIEdsb2JhbCBzdGF0ZSAqL1xuaW1wb3J0IHsgYWRtaW5TdGF0ZSwgcHJvamVjdHNTdGF0ZSwgdXNlclN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5cbi8qIEFwaSBjYWxscyAqL1xuaW1wb3J0IHsgQVBJX0tFWVMsIGZldGNoUHJvamVjdHNCeVVzZXIgfSBmcm9tIFwiLi4vYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RPdmVydmlldygpIHtcbiAgICAvKiBTdGF0ZSAqL1xuICAgIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlUmVjb2lsU3RhdGUocHJvamVjdHNTdGF0ZSk7XG4gICAgY29uc3Qgc2V0VXNlciA9IHVzZVNldFJlY29pbFN0YXRlKHVzZXJTdGF0ZSk7XG4gICAgY29uc3QgaXNBZG1pbiA9IHVzZVJlY29pbFZhbHVlKGFkbWluU3RhdGUpO1xuXG4gICAgLyogSG9va3MgKi9cbiAgICBjb25zdCB7IGlzTG9hZGluZzogcHJvamVjdHNMb2FkaW5nIH0gPSB1c2VRdWVyeShBUElfS0VZUy5QQlUsIGZldGNoUHJvamVjdHNCeVVzZXIsIHtcbiAgICAgICAgb25TdWNjZXNzOiAoeyBwcm9qZWN0cywgdXNlciB9KSA9PiB7XG4gICAgICAgICAgICBzZXRQcm9qZWN0cyhwcm9qZWN0cyk7XG4gICAgICAgICAgICBzZXRVc2VyKHVzZXIpO1xuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0tZXF1YWxpemVkIGd1dHRlcnMtNVwiPlxuICAgICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdHMubWFwKChwcm9qZWN0LCBwcm9qZWN0SW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLlNUQUdHRVJfVVAocHJvamVjdEluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e3Byb2plY3QuaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC14bC0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXlvdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3Qgey4uLnsgcHJvamVjdCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAge2lzQWRtaW4gJiYgIXByb2plY3RzTG9hZGluZyAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5TVEFHR0VSX1VQKHByb2plY3RzLmxlbmd0aCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PVwiYWRkLXByb2plY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0QWRkIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICAgICAgeyFpc0FkbWluICYmICFwcm9qZWN0c0xvYWRpbmcgJiYgcHJvamVjdHMubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24ucCB7Li4uU1RBR0dFUl9VUCgpfSBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC13aGl0ZVwiIGxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YFlvdSBkb24ndCBoYXZlIGFueSBwcm9qZWN0cyB5ZXRgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24ucD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzXCI7XG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dGFyZWFBdXRvc2l6ZVwiO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tIFwicmVhY3Qtc3ZnXCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gXCJyZWNvaWxcIjtcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gXCJpY29ucy9jbG9zZS5zdmdcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTW9kYWwsIERyb3B6b25lIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vblwiO1xuaW1wb3J0IHsgVXNlckFkZCwgVXNlcnMgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy91c2Vyc1wiO1xuXG4vKiBBdG9tcyAqL1xuaW1wb3J0IHsgbG9hZGluZ1N0YXRlIH0gZnJvbSBcIi4uLy4uL3N0YXRlXCI7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdE1vZGFsKHtcbiAgICB0b2dnbGVNb2RhbCxcbiAgICBpZCxcbiAgICBvblN1Ym1pdCxcbiAgICB0aXRsZSA9IFwiXCIsXG4gICAgZGVzY3JpcHRpb24gPSBcIlwiLFxuICAgIHByb2plY3RJbWFnZXMgPSBbXSxcbiAgICB1c2VycyA9IFtdLFxuICAgIHRpdGxlUGxhY2Vob2xkZXIgPSBcIlRoZSBwcm9qZWN0IG5hbWVcIixcbiAgICBkZXNjcmlwdGlvblBsYWNlaG9sZGVyID0gXCJXaGF0J3MgdGhpcyBwcm9qZWN0IGFib3V0P1wiLFxufSkge1xuICAgIC8qIFJlZnMgKi9cbiAgICBjb25zdCBmb3JtUmVmID0gdXNlUmVmKCk7XG5cbiAgICAvKiBTdGF0ZSAqL1xuICAgIGNvbnN0IFtwcm9qZWN0VGl0bGUsIHNldFByb2plY3RUaXRsZV0gPSB1c2VTdGF0ZSh0aXRsZSk7XG4gICAgY29uc3QgW3Byb2plY3REZXNjcmlwdGlvbiwgc2V0UHJvamVjdERlc2NyaXB0aW9uXSA9IHVzZVN0YXRlKGRlc2NyaXB0aW9uKTtcbiAgICBjb25zdCBsb2FkaW5nID0gdXNlUmVjb2lsVmFsdWUobG9hZGluZ1N0YXRlKTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RhbCB7Li4ueyB0b2dnbGVNb2RhbCB9fSBkb21FbGVtZW50PXtkb2N1bWVudC5ib2R5fT5cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgcmVmPXtmb3JtUmVmfVxuICAgICAgICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fZm9ybVwiXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdChmb3JtUmVmKTtcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9faGVhZGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHQtNiBwdC1tZC0xMiBweC02IHBiLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicHJvamVjdFRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtLWNsZWFyIHRleHQtLXhsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJvamVjdFRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGl0bGVQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0UHJvamVjdFRpdGxlKHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Nsb3NlIGJ0biBidG4tbGluayBtbC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fYm9keSBweC02IHBiLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtNlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJzci1vbmx5XCIgaHRtbEZvcj1cInByb2plY3REZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YFdoYXQncyB0aGlzIHByb2plY3QgYWJvdXQ/YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0YXJlYUF1dG9zaXplXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtLXRleHQgZm9ybS1jb250cm9sLS1jbGVhciBtYi0xMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJvamVjdERlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9e2Rlc2NyaXB0aW9uUGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0RGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBzZXRQcm9qZWN0RGVzY3JpcHRpb24odmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWF1dG8gZC1mbGV4IGFsaWduLWl0ZW1zLWJhc2VsaW5lIG1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlcnMgey4uLnsgdXNlcnMgfX0gdmFyaWFudD1cImxnXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlckFkZCB2YXJpYW50PVwibGdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8RHJvcHpvbmUgey4uLnsgaWQsIHByb2plY3RJbWFnZXMgfX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fZm9vdGVyIHB4LTYgcGItNiBwYi1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTAgdy0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy0zIGNvbC14bC0yIG1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2J0biBidG4gYnRuLWJsb2NrIGJ0bi1zbSBidG4td2hpdGUgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uc3BhbiBjbGFzc05hbWU9XCJidG4tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2xvYWRpbmcgPyBcIlNhdmluZy4uLlwiIDogXCJTYXZlXCJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bl9fbG9hZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYgey4uLkZBREVfSU59IGtleT1cImxvYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmVhclByb2dyZXNzIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L01vZGFsPlxuICAgICk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RNb2RhbCB9IGZyb20gXCIuL1Byb2plY3RNb2RhbFwiO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQcm9qZWN0TW9kYWwgfSBmcm9tIFwiLi4vbW9kYWxzXCI7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZFByb2plY3RJY29uIGZyb20gXCJpY29ucy9hZGRfcHJvamVjdC5zdmdcIjtcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSBcInJlYWN0LXN2Z1wiO1xuXG4vKiBBcGkgY2FsbHMgKi9cbmltcG9ydCB7IGFkZFByb2plY3QsIEFQSV9LRVlTLCBlZGl0UHJvamVjdCB9IGZyb20gXCIuLi8uLi9hcGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdEFkZCgpIHtcbiAgICAvKiBDb25zdGFudHMgKi9cbiAgICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cbiAgICAvKiBTdGF0ZSAqL1xuICAgIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Byb2plY3QsIHNldFByb2plY3RdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLyogSG9va3MgKi9cbiAgICBjb25zdCBhZGRNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZFByb2plY3QsIHtcbiAgICAgICAgb25TdWNjZXNzOiAoeyBwcm9qZWN0IH0pID0+IHNldFByb2plY3QocHJvamVjdCksXG4gICAgfSk7XG5cbiAgICBjb25zdCBlZGl0TXV0YXRpb24gPSB1c2VNdXRhdGlvbihlZGl0UHJvamVjdCwge1xuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHRvZ2dsZUFkZE1vZGFsKCksXG4gICAgfSk7XG5cbiAgICAvKiBDYWxsYmFja3MgKi9cbiAgICBjb25zdCB0b2dnbGVBZGRNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgc2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pO1xuXG4gICAgICAgIC8qIE11dGF0ZSBvbiBtb2RhbCBvcGVuICovXG4gICAgICAgIGlmICghbW9kYWxPcGVuKSBhZGRNdXRhdGlvbi5tdXRhdGUoKTtcblxuICAgICAgICAvKiBJbnZhbGlkYXRlIHByb2plY3RfYnlfdXNlciBvbiBjbG9zZSBtb2RhbCAqL1xuICAgICAgICBpZiAobW9kYWxPcGVuKSBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhBUElfS0VZUy5QQlUpO1xuICAgIH07XG5cbiAgICBjb25zdCBvblN1Ym1pdCA9IChmb3JtUmVmKSA9PiBlZGl0TXV0YXRpb24ubXV0YXRlKHsgZm9ybVJlZiwgcHJvamVjdElkOiBwcm9qZWN0LmlkIH0pO1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFydGljbGUgY2xhc3NOYW1lPVwiY2FyZCBjYXJkLS1saW5rIGNhcmQtLXRyYW5zcGFyZW50IGgtMTAwIG1iLTBcIiBzdHlsZT17eyBtaW5IZWlnaHQ6IDM4NSB9fT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBwLTEwXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgdGV4dC1kZWNvcmF0aW9uLW5vbmUgc3RyZXRjaGVkLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVBZGRNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4tdGV4dCBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIHRleHQtd2hpdGUgdGV4dC1tdXRlZC0tNDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS00OFwiIHNyYz17YWRkUHJvamVjdEljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LS1zbSBtdC0xXCI+QWRkIG1vcmUgcHJvamVjdHM8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICB7bW9kYWxPcGVuICYmIDxQcm9qZWN0TW9kYWwgdG9nZ2xlTW9kYWw9e3RvZ2dsZUFkZE1vZGFsfSB7Li4ueyAuLi5wcm9qZWN0LCBvblN1Ym1pdCB9fSAvPn1cbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgKTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdEFkZCB9IGZyb20gXCIuL1Byb2plY3RBZGRcIjtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IFByb2plY3RJbWFnZSBmcm9tIFwiLi9Qcm9qZWN0SW1hZ2VcIjtcbmltcG9ydCBQcm9qZWN0TWVudSBmcm9tIFwiLi9Qcm9qZWN0TWVudVwiO1xuaW1wb3J0IHsgVXNlcnMgfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy91c2Vyc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KHsgcHJvamVjdCB9KSB7XG4gICAgLyogQ29uc3RhbnRzICovXG4gICAgY29uc3QgeyBzbHVnLCB0aXRsZSwgcHJvamVjdEltYWdlcywgdXNlcnMgfSA9IHByb2plY3Q7XG5cbiAgICAvKiBTdGF0ZSAqL1xuICAgIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvKiBDYWxsYmFja3MgKi9cbiAgICBjb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHNldE1vZGFsT3BlbighbW9kYWxPcGVuKTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhIGhyZWY9e2Bwcm9qZWN0cy8ke3NsdWd9YH0gdGl0bGU9e3RpdGxlfSBjbGFzc05hbWU9XCJjYXJkIGNhcmQtLWxpbmsgY2FyZC0tcHJvZHVjdFwiPlxuICAgICAgICAgICAgPFByb2plY3RJbWFnZSB7Li4ueyBwcm9qZWN0SW1hZ2VzIH19IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0zXCI+e3RpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VycyB7Li4ueyB1c2VycyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3RNZW51IHsuLi57IHByb2plY3QsIG1vZGFsT3BlbiwgdG9nZ2xlTW9kYWwgfX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2E+XG4gICAgKTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RJbWFnZSh7IHByb2plY3RJbWFnZXMgfSkge1xuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiBwcm9qZWN0SW1hZ2VzLnNsaWNlKDAsIDEpLm1hcCgoeyBpbWFnZSwgdGl0bGUgfSwgaW1hZ2VJbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW1hZ2VJbmRleH0gY2xhc3NOYW1lPVwiY2FyZF9faW1hZ2UgaGFzLW92ZXJsYXkgbS0yXCI+XG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImNhcmQtaW1nLXRvcFwiIHNyYz17aW1hZ2V9IHNyY1NldD17YCR7aW1hZ2V9IDJ4YH0gYWx0PXt0aXRsZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKSk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gXCJyZWFjdC1zdmdcIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBlZGl0SWNvbiBmcm9tIFwiaWNvbnMvZWRpdC5zdmdcIjtcbmltcG9ydCBkZWxldGVJY29uIGZyb20gXCJpY29ucy9kZWxldGUuc3ZnXCI7XG5pbXBvcnQgY2xvc2VJY29uIGZyb20gXCJpY29ucy9jbG9zZS5zdmdcIjtcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU0NBTEVfRkFERSwgU1RBR0dFUl9MRUZUIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9hbmltYXRpb25zXCI7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFByb2plY3RNb2RhbCB9IGZyb20gXCIuLi9tb2RhbHNcIjtcblxuLyogQXBpIGNhbGxzICovXG5pbXBvcnQgeyBBUElfS0VZUywgZGVsZXRlUHJvamVjdCwgZWRpdFByb2plY3QgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RNZW51KHsgcHJvamVjdCB9KSB7XG4gICAgLyogQ29uc3RhbnRzICovXG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuICAgIGNvbnN0IHsgaWQ6IHByb2plY3RJZCB9ID0gcHJvamVjdDtcblxuICAgIC8qIEhvb2tzICovXG4gICAgY29uc3QgZGVsZXRlTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVQcm9qZWN0LCB7XG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoQVBJX0tFWVMuUEJVKSxcbiAgICB9KTtcblxuICAgIGNvbnN0IGVkaXRNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGVkaXRQcm9qZWN0LCB7XG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4ge1xuICAgICAgICAgICAgcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoQVBJX0tFWVMuUEJVKTtcbiAgICAgICAgICAgIHRvZ2dsZUVkaXRNb2RhbCgpO1xuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgLyogU3RhdGUgKi9cbiAgICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLyogVG9nZ2xlcyAqL1xuICAgIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiBzZXRNZW51T3BlbighbWVudU9wZW4pO1xuXG4gICAgY29uc3QgdG9nZ2xlRWRpdE1vZGFsID0gKCkgPT4ge1xuICAgICAgICBzZXRNZW51T3BlbihmYWxzZSk7XG4gICAgICAgIHNldE1vZGFsT3BlbighbW9kYWxPcGVuKTtcbiAgICB9O1xuXG4gICAgLyogQ2FsbGJhY2tzICovXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZm9ybVJlZikgPT4gZWRpdE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYsIHByb2plY3RJZCB9KTtcblxuICAgIGNvbnN0IHVwZGF0ZVByb2plY3QgPSAoYWN0aW9uKSA9PiB7XG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwiZWRpdFwiKSB0b2dnbGVFZGl0TW9kYWwoKTtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJkZWxldGVcIikgZGVsZXRlTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkOiBwcm9qZWN0LmlkIH0pO1xuICAgIH07XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNhcmRfX21lbnUgbWVudSAke21lbnVPcGVuICYmIFwiaXMtYWN0aXZlXCJ9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfX3dyYXBwZXIgcG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBwb3NpdGlvbi1yZWxhdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVNZW51KCk7XG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlciBpbml0aWFsPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVudU9wZW4gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYga2V5PVwiY2xvc2VcIiBjbGFzc05hbWU9XCJtZW51X19kb3RzXCIgey4uLlNDQUxFX0ZBREV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTQgdGV4dC13aGl0ZVwiIHNyYz17Y2xvc2VJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYga2V5PVwiZG90c1wiIGNsYXNzTmFtZT1cIm1lbnVfX2RvdHNcIiB7Li4uU0NBTEVfRkFERX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lbnVfX2RvdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVudV9fZG90XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZW51X19kb3RcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICAgICAge21lbnVPcGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51X19saXN0IGxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGljb249e2VkaXRJY29ufSBpbmRleD17MX0gY2FsbGJhY2s9eygpID0+IHVwZGF0ZVByb2plY3QoXCJlZGl0XCIpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gaWNvbj17ZGVsZXRlSWNvbn0gaW5kZXg9ezB9IGNhbGxiYWNrPXsoKSA9PiB1cGRhdGVQcm9qZWN0KFwiZGVsZXRlXCIpfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgICAgICB7bW9kYWxPcGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0TW9kYWwgdG9nZ2xlTW9kYWw9e3RvZ2dsZUVkaXRNb2RhbH0gey4uLnsgLi4ucHJvamVjdCwgb25TdWJtaXQgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jb25zdCBNZW51SXRlbSA9ICh7IGljb24sIGluZGV4LCBjYWxsYmFjayB9KSA9PiAoXG4gICAgPG1vdGlvbi5saSBjbGFzc05hbWU9XCJsaXN0X19pdGVtIG1yLTJcIiB7Li4uU1RBR0dFUl9MRUZUKGluZGV4KX0+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayB0ZXh0LXdoaXRlIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNiB0ZXh0LXdoaXRlIG1yLTJcIiBzcmM9e2ljb259IC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgIDwvbW90aW9uLmxpPlxuKTtcbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdCB9IGZyb20gXCIuL1Byb2plY3RcIjtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBRdWVyeUNsaWVudCwgUXVlcnlDbGllbnRQcm92aWRlciB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgUmVjb2lsUm9vdCB9IGZyb20gXCJyZWNvaWxcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IFByb2plY3RPdmVydmlldyBmcm9tIFwiLi9jb21wb25lbnRzL1Byb2plY3RPdmVydmlld1wiO1xuXG4vKiBDbGllbnQgKi9cbmNvbnN0IGNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCgpO1xuXG4vKiBSZW5kZXIgKi9cbmNvbnN0IHByb2plY3RPdmVydmlld05vZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RPdmVydmlld1wiKTtcbmlmIChwcm9qZWN0T3ZlcnZpZXdOb2RlICE9PSBudWxsKSB7XG4gICAgcmVuZGVyKFxuICAgICAgICA8UmVjb2lsUm9vdD5cbiAgICAgICAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIHsuLi57IGNsaWVudCB9fT5cbiAgICAgICAgICAgICAgICA8UHJvamVjdE92ZXJ2aWV3IHsuLi5wcm9qZWN0T3ZlcnZpZXdOb2RlLmRhdGFzZXR9IC8+XG4gICAgICAgICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+XG4gICAgICAgIDwvUmVjb2lsUm9vdD4sXG4gICAgICAgIHByb2plY3RPdmVydmlld05vZGVcbiAgICApO1xufVxuIiwiaW1wb3J0IHsgYXRvbSwgc2VsZWN0b3IgfSBmcm9tIFwicmVjb2lsXCI7XG5cbmNvbnN0IGxvYWRpbmdTdGF0ZSA9IGF0b20oe1xuICAgIGtleTogXCJsb2FkaW5nU3RhdGVcIixcbiAgICBkZWZhdWx0OiBcImluaXRpYWxcIixcbn0pO1xuXG5jb25zdCB1c2VyU3RhdGUgPSBhdG9tKHtcbiAgICBrZXk6IFwidXNlclN0YXRlXCIsXG4gICAgZGVmYXVsdDoge30sXG59KTtcblxuY29uc3QgcHJvamVjdHNTdGF0ZSA9IGF0b20oe1xuICAgIGtleTogXCJwcm9qZWN0c1N0YXRlXCIsXG4gICAgZGVmYXVsdDogW10sXG59KTtcblxuY29uc3QgYWRtaW5TdGF0ZSA9IHNlbGVjdG9yKHtcbiAgICBrZXk6IFwiYWRtaW5TdGF0ZVwiLFxuICAgIGdldDogKHsgZ2V0IH0pID0+IHtcbiAgICAgICAgY29uc3QgdXNlciA9IGdldCh1c2VyU3RhdGUpO1xuXG4gICAgICAgIGlmICh1c2VyPy5yb2xlcykge1xuICAgICAgICAgICAgcmV0dXJuIHVzZXIucm9sZXMuaW5jbHVkZXMoXCJST0xFX0FETUlOXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG59KTtcblxuZXhwb3J0IHsgbG9hZGluZ1N0YXRlLCB1c2VyU3RhdGUsIGFkbWluU3RhdGUsIHByb2plY3RzU3RhdGUgfTtcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgUGFyc2xleSBmcm9tICdwYXJzbGV5anMnO1xuXG5pbXBvcnQgJ3BhcnNsZXlqcy9kaXN0L2kxOG4vbmwnO1xuXG52YXIgcGFyc2xleUNvbmZpZyA9IHtcbiAgICBlcnJvckNsYXNzOiAnaXMtZXJyb3InLFxuICAgIGV4Y2x1ZGVkOiAnaW5wdXRbdHlwZT1idXR0b25dLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9cmVzZXRdLCBpbnB1dFt0eXBlPWhpZGRlbl0sIFtkaXNhYmxlZF0sIDpoaWRkZW4nLFxuICAgIHN1Y2Nlc3NDbGFzczogJ2lzLXN1Y2Nlc3MnXG59O1xuXG5QYXJzbGV5LmFkZE1lc3NhZ2VzKCdubCcsIHtcbiAgICBtaW5jaGVjazogJ1NlbGVjdGVlciB0ZW5taW5zdGUgJXMgb3B0aWUocykuJyxcbiAgICBtYXhjaGVjazogJ1NlbGVjdGVlciBtYXhpbWFhbCAlcyBvcHRpZShzKS4nLFxuICAgIGNoZWNrOiAnU2VsZWN0ZWVyIHR1c3NlbiAlcyBlbiAlcyBvcHRpZShzKS4nXG59KS5zZXRMb2NhbGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcpO1xuXG4kKCdmb3JtOm5vdChbbm92YWxpZGF0ZV0pJykucGFyc2xleShwYXJzbGV5Q29uZmlnKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=