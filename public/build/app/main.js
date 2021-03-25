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
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-query */ "./node_modules/react-query/es/index.js");
/* harmony import */ var icons_star_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! icons/star.svg */ "./assets/app/img/icons/star.svg");
/* harmony import */ var icons_star_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(icons_star_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _project_overview_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../project-overview/api */ "./assets/app/js/react/project-overview/api.js");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/* Packages */



/* Assets */



/* Api calls */


function User(_ref) {
  var user = _ref.user,
      project = _ref.project,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "default" : _ref$variant;

  /* Hooks */
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQueryClient"])();
  /* Constants */

  var projectId = project.projectId,
      author = project.author;

  var userId = user.id,
      email = user.email,
      rest = _objectWithoutProperties(user, ["id", "email"]);

  var isAuthor = email === author;
  var classes = {
    default: "user",
    interactive: "user user--lg"
  };
  /* Mutations */

  var deleteUserMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_project_overview_api__WEBPACK_IMPORTED_MODULE_5__["deleteUser"], {
    onSuccess: function onSuccess() {
      return queryClient.invalidateQueries([_project_overview_api__WEBPACK_IMPORTED_MODULE_5__["QUERY_KEYS"].PROJECT_BY_ID, projectId]);
    }
  });
  /* Render */

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-auto"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes[variant]
  }, isAuthor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "user__toggle user__toggle--leader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--6 text-tertiary mt-0",
    src: icons_star_svg__WEBPACK_IMPORTED_MODULE_3___default.a
  })), variant === "interactive" && !isAuthor && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-link user__toggle user__toggle--delete",
    type: "button",
    onClick: function onClick() {
      deleteUserMutation.mutate({
        projectId: projectId,
        userId: userId
      });
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_1__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--6 text-base mt-0",
    src: icons_close_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(UserImage, rest)));
}

var UserImage = function UserImage(_ref2) {
  var username = _ref2.username,
      image = _ref2.image,
      userColor = _ref2.userColor;

  /* Constants */
  var userInitials = username.split(" ").map(function (word) {
    return word[0].toUpperCase();
  });
  /* Render */

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



/* Assets */


/* Components */


/* Helpers */


/* Api calls */


function UserAdd(_ref) {
  var projectId = _ref.projectId;

  /* Hooks */
  var queryClient = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQueryClient"])();
  /* Mutations */

  var addUserMutation = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(_project_overview_api__WEBPACK_IMPORTED_MODULE_6__["addUser"], {
    onSuccess: function onSuccess() {
      queryClient.invalidateQueries([_project_overview_api__WEBPACK_IMPORTED_MODULE_6__["QUERY_KEYS"].PROJECT_BY_ID, projectId]);
      setValue("");
    }
  });
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
          projectId: projectId,
          email: value
        });
      }
    }
  };
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "position-relative ml-2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-link user user--lg user--add",
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

/* Packages */

/* Components */


function Users(_ref) {
  var users = _ref.users,
      project = _ref.project,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? "default" : _ref$variant;

  /* Render */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row gutters-2"
  }, users.map(function (user, userIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_User__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
      key: userIndex
    }, {
      user: user,
      project: project,
      variant: variant
    }));
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
/*! exports provided: QUERY_KEYS, fetchProjectsByUser, fetchProjectById, addProject, deleteProject, editProject, addProjectImages, deleteProjectImages, addUser, deleteUser */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addUser", function() { return addUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var QUERY_KEYS = {
  PROJECT_BY_USER: "project_by_user",
  PROJECT_BY_ID: "project_by_id"
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

var addUser = /*#__PURE__*/function () {
  var _ref15 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(_ref14) {
    var projectId, email, result;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            projectId = _ref14.projectId, email = _ref14.email;
            _context8.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/users/add/".concat(projectId), {
              email: email
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

  return function addUser(_x7) {
    return _ref15.apply(this, arguments);
  };
}();
var deleteUser = /*#__PURE__*/function () {
  var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(_ref16) {
    var projectId, userId, result;
    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            projectId = _ref16.projectId, userId = _ref16.userId;
            _context9.next = 3;
            return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post("/api/users/delete/".concat(projectId), {
              userId: userId
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

  return function deleteUser(_x8) {
    return _ref17.apply(this, arguments);
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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project */ "./assets/app/js/react/project-overview/components/project/index.js");
/* harmony import */ var _project_add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-add */ "./assets/app/js/react/project-overview/components/project-add/index.js");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../api */ "./assets/app/js/react/project-overview/api.js");
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

  var _useQuery = Object(react_query__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(_api__WEBPACK_IMPORTED_MODULE_6__["QUERY_KEYS"].PROJECT_BY_USER, function () {
    return Object(_api__WEBPACK_IMPORTED_MODULE_6__["fetchProjectsByUser"])({
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_project__WEBPACK_IMPORTED_MODULE_3__["ProjectResults"], {
    projects: projects
  }, isAdmin && !projectsLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({}, Object(_common_animations__WEBPACK_IMPORTED_MODULE_5__["STAGGER_UP"])(projects.length), {
    key: "add-project",
    className: "col-12 col-md-6 col-lg-4 col-xl-3",
    layout: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_project_add__WEBPACK_IMPORTED_MODULE_4__["ProjectAdd"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "col-12"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, !isAdmin && !projectsLoading && projects.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].p, _extends({}, Object(_common_animations__WEBPACK_IMPORTED_MODULE_5__["STAGGER_UP"])(), {
    className: "text-white",
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
/* harmony import */ var _material_ui_core_TextareaAutosize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material-ui/core/TextareaAutosize */ "./node_modules/@material-ui/core/esm/TextareaAutosize/index.js");
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common */ "./assets/app/js/react/common/index.js");
/* harmony import */ var _components_users__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/users */ "./assets/app/js/react/components/users/index.js");
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
      users = _project$users === void 0 ? [] : _project$users,
      author = project.author;
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
    project: {
      projectId: projectId,
      author: author
    }
  }, {
    variant: "interactive"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_users__WEBPACK_IMPORTED_MODULE_6__["UserAdd"], {
    projectId: projectId
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_common__WEBPACK_IMPORTED_MODULE_5__["Dropzone"], {
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
    className: "card card--link card--transparent h-100 mb-0",
    style: {
      minHeight: 385
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
    className: "mb-3"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_users__WEBPACK_IMPORTED_MODULE_3__["Users"], {
    users: users,
    project: {
      author: author
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProjectMenu__WEBPACK_IMPORTED_MODULE_2__["default"], {
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
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
  }), children));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9hZGRfaW1hZ2Uuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2FkZF9wcm9qZWN0LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvZGVsZXRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9lZGl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9zdGFyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9vYmplY3RmaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vQm94LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbW1vbi9Ecm9wem9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vTW9kYWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL2FuaW1hdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21wb25lbnRzL3VzZXJzL1VzZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2Vycy9Vc2VyQWRkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbXBvbmVudHMvdXNlcnMvVXNlcnMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tcG9uZW50cy91c2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2hlbHBlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9oZWxwZXJzL2lzRW1haWwuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9Qcm9qZWN0T3ZlcnZpZXcuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcHJvamVjdC1vdmVydmlldy9jb21wb25lbnRzL21vZGFscy9Qcm9qZWN0TW9kYWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcHJvamVjdC1vdmVydmlldy9jb21wb25lbnRzL21vZGFscy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9wcm9qZWN0LWFkZC9Qcm9qZWN0QWRkLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9wcm9qZWN0LWFkZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9wcm9qZWN0L1Byb2plY3QuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcHJvamVjdC1vdmVydmlldy9jb21wb25lbnRzL3Byb2plY3QvUHJvamVjdEltYWdlLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9wcm9qZWN0L1Byb2plY3RNZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9wcm9qZWN0L1Byb2plY3RSZXN1bHRzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcvY29tcG9uZW50cy9wcm9qZWN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcHJvamVjdC1vdmVydmlldy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyIkIiwib2JqZWN0Rml0SW1hZ2VzIiwiQm94IiwiaGVhZGVyIiwiYm94T3BlbiIsInRvZ2dsZUJveCIsImNoaWxkcmVuIiwiRkFERV9JTiIsImNsb3NlSWNvbiIsIkRyb3B6b25lIiwicHJvamVjdElkIiwicHJvamVjdEltYWdlcyIsIkNPTFVNTl9MQVlPVVQiLCJxdWVyeUNsaWVudCIsInVzZVF1ZXJ5Q2xpZW50IiwidXNlRHJvcHpvbmUiLCJhY2NlcHQiLCJub0NsaWNrIiwib25Ecm9wIiwiYWNjZXB0ZWRGaWxlcyIsInVwZGF0ZVByb2plY3RJbWFnZXMiLCJpbWFnZXMiLCJnZXRSb290UHJvcHMiLCJnZXRJbnB1dFByb3BzIiwiaXNEcmFnQWN0aXZlIiwiYWRkUHJvamVjdEltYWdlc011dGF0aW9uIiwidXNlTXV0YXRpb24iLCJhZGRQcm9qZWN0SW1hZ2VzIiwib25TdWNjZXNzIiwiaW52YWxpZGF0ZVF1ZXJpZXMiLCJRVUVSWV9LRVlTIiwiUFJPSkVDVF9CWV9JRCIsImRlbGV0ZVByb2plY3RJbWFnZXNNdXRhdGlvbiIsImRlbGV0ZVByb2plY3RJbWFnZXMiLCJhY3Rpb24iLCJwcm9wcyIsIm11dGF0ZSIsIm1hcCIsImltYWdlSW5kZXgiLCJpbWFnZSIsInRpdGxlIiwiaWQiLCJTVEFHR0VSX1VQIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJsZW5ndGgiLCJpc1BhcmVudERyYWdBY3RpdmUiLCJEcm9wem9uZUlubmVyIiwibm9EcmFnRXZlbnRzQnViYmxpbmciLCJhZGRJbWFnZUljb24iLCJNb2RhbCIsInRvZ2dsZU1vZGFsIiwiZG9tRWxlbWVudCIsInZhcmlhbnQiLCJyZW5kZXIiLCJUUkFOU0ZPUk1fVVAiLCJjcmVhdGVQb3J0YWwiLCJFQVNFIiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJlYXNlIiwieSIsIlNDQUxFX0ZBREUiLCJzY2FsZSIsImR1cmF0aW9uIiwiaW5kZXgiLCJkZWxheSIsIlNUQUdHRVJfTEVGVCIsIngiLCJVc2VyIiwidXNlciIsInByb2plY3QiLCJhdXRob3IiLCJ1c2VySWQiLCJlbWFpbCIsInJlc3QiLCJpc0F1dGhvciIsImNsYXNzZXMiLCJkZWZhdWx0IiwiaW50ZXJhY3RpdmUiLCJkZWxldGVVc2VyTXV0YXRpb24iLCJkZWxldGVVc2VyIiwic3Rhckljb24iLCJVc2VySW1hZ2UiLCJ1c2VybmFtZSIsInVzZXJDb2xvciIsInVzZXJJbml0aWFscyIsInNwbGl0Iiwid29yZCIsInRvVXBwZXJDYXNlIiwiYmFja2dyb3VuZENvbG9yIiwiVXNlckFkZCIsImFkZFVzZXJNdXRhdGlvbiIsImFkZFVzZXIiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwic2V0Qm94T3BlbiIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbktleURvd24iLCJpbmNsdWRlcyIsImtleSIsInByZXZlbnREZWZhdWx0IiwiaXNFbWFpbCIsImFkZEljb24iLCJVc2VycyIsInVzZXJzIiwidXNlckluZGV4IiwidGVzdCIsIlBST0pFQ1RfQllfVVNFUiIsImZldGNoUHJvamVjdHNCeVVzZXIiLCJ1cmwiLCJheGlvcyIsImdldCIsInJlc3VsdCIsImRhdGEiLCJmZXRjaFByb2plY3RCeUlkIiwiYWRkUHJvamVjdCIsInBvc3QiLCJkZWxldGVQcm9qZWN0IiwiZWRpdFByb2plY3QiLCJmb3JtUmVmIiwicGFyYW1zIiwiRm9ybURhdGEiLCJjdXJyZW50IiwiZm9yRWFjaCIsImFwcGVuZCIsIlByb2plY3RPdmVydmlldyIsImlzQWRtaW4iLCJzZXRJc0FkbWluIiwiYXRvYiIsImxvY2F0aW9uIiwic2VhcmNoIiwicmVwbGFjZSIsInVzZVF1ZXJ5Iiwicm9sZXMiLCJwcm9qZWN0c0xvYWRpbmciLCJpc0xvYWRpbmciLCJwcm9qZWN0cyIsIlByb2plY3RNb2RhbCIsIm9uU3VibWl0IiwidGl0bGVQbGFjZWhvbGRlciIsImRlc2NyaXB0aW9uUGxhY2Vob2xkZXIiLCJkZXNjcmlwdGlvbiIsInByb2plY3RUaXRsZSIsInNldFByb2plY3RUaXRsZSIsInByb2plY3REZXNjcmlwdGlvbiIsInNldFByb2plY3REZXNjcmlwdGlvbiIsInVzZVJlZiIsImRvY3VtZW50IiwiYm9keSIsIlByb2plY3RBZGQiLCJzZXRQcm9qZWN0SWQiLCJtb2RhbE9wZW4iLCJzZXRNb2RhbE9wZW4iLCJlbmFibGVkIiwiYWRkTXV0YXRpb24iLCJlZGl0TXV0YXRpb24iLCJtaW5IZWlnaHQiLCJhZGRQcm9qZWN0SWNvbiIsIlByb2plY3QiLCJzbHVnIiwiUHJvamVjdEltYWdlIiwic2xpY2UiLCJQcm9qZWN0TWVudSIsImRlbGV0ZU11dGF0aW9uIiwibWVudU9wZW4iLCJzZXRNZW51T3BlbiIsInRvZ2dsZU1lbnUiLCJNZW51Qm9keSIsInVwZGF0ZVByb2plY3QiLCJlZGl0SWNvbiIsImRlbGV0ZUljb24iLCJNZW51SXRlbSIsImljb24iLCJjYWxsYmFjayIsIlByb2plY3RSZXN1bHRzIiwicHJvamVjdEluZGV4IiwiY2xpZW50IiwiUXVlcnlDbGllbnQiLCJkZWZhdWx0T3B0aW9ucyIsInF1ZXJpZXMiLCJyZWZldGNoT25XaW5kb3dGb2N1cyIsInByb2plY3RPdmVydmlld05vZGUiLCJnZXRFbGVtZW50QnlJZCIsImRhdGFzZXQiLCJwYXJzbGV5Q29uZmlnIiwiZXJyb3JDbGFzcyIsImV4Y2x1ZGVkIiwic3VjY2Vzc0NsYXNzIiwiUGFyc2xleSIsImFkZE1lc3NhZ2VzIiwibWluY2hlY2siLCJtYXhjaGVjayIsImNoZWNrIiwic2V0TG9jYWxlIiwiZG9jdW1lbnRFbGVtZW50IiwibGFuZyIsInBhcnNsZXkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLFFBQVEsb0JBQW9CO1FBQzVCO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsaUJBQWlCLDRCQUE0QjtRQUM3QztRQUNBO1FBQ0Esa0JBQWtCLDJCQUEyQjtRQUM3QztRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FB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b0IsRUFBRTtBQURqQjtBQURHO0FBRFcsQ0FBaEIsQ0FBZjtBQVFBOztBQUNBLElBQU1DLG1CQUFtQixHQUFHbEMsUUFBUSxDQUFDbUMsY0FBVCxDQUF3QixpQkFBeEIsQ0FBNUI7O0FBQ0EsSUFBSUQsbUJBQW1CLEtBQUssSUFBNUIsRUFBa0M7QUFDOUJySSwwREFBTSxlQUNGLDJEQUFDLCtEQUFELEVBQXlCO0FBQUVnSSxVQUFNLEVBQU5BO0FBQUYsR0FBekIsZUFDSSwyREFBQyxtRUFBRCxFQUFxQkssbUJBQW1CLENBQUNFLE9BQXpDLENBREosQ0FERSxFQUlGRixtQkFKRSxDQUFOO0FBTUgsQzs7Ozs7Ozs7Ozs7O0FDMUJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUEsSUFBSUcsYUFBYSxHQUFHO0FBQ2hCQyxZQUFVLEVBQUUsVUFESTtBQUVoQkMsVUFBUSxFQUFFLG9HQUZNO0FBR2hCQyxjQUFZLEVBQUU7QUFIRSxDQUFwQjtBQU1BQyxnREFBTyxDQUFDQyxXQUFSLENBQW9CLElBQXBCLEVBQTBCO0FBQ3RCQyxVQUFRLEVBQUUsa0NBRFk7QUFFdEJDLFVBQVEsRUFBRSxpQ0FGWTtBQUd0QkMsT0FBSyxFQUFFO0FBSGUsQ0FBMUIsRUFJR0MsU0FKSCxDQUlhOUMsUUFBUSxDQUFDK0MsZUFBVCxDQUF5QkMsSUFKdEM7QUFNQXpNLDZDQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QjBNLE9BQTVCLENBQW9DWixhQUFwQyxFOzs7Ozs7Ozs7OztBQ2pCQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9hcHAvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vYXNzZXRzL2FwcC9qcy9tYWluLmpzXCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYWRkLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hZGRfaW1hZ2Uuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FkZF9wcm9qZWN0LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jbG9zZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZGVsZXRlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9lZGl0LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9zdGFyLnN2Z1wiOyIsIi8vIENTU1xuaW1wb3J0ICcuLi9zY3NzL21haW4uc2Nzcyc7XG5cbi8vIFBvbGx5Zmlsc1xuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xuXG4vLyBDb3JlXG5pbXBvcnQgJy4vdmFsaWRhdGlvbic7XG5cbi8vIFBsdWdpbnNcbmltcG9ydCAnLi9vYmplY3RmaXQnO1xuXG4vLyBSZWFjdFxuaW1wb3J0ICcuL3JlYWN0L3Byb2plY3Qtb3ZlcnZpZXcnXG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IG9iamVjdEZpdEltYWdlcyBmcm9tICdvYmplY3QtZml0LWltYWdlcyc7XG5cbiQoZnVuY3Rpb24oKSB7XG4gICAgb2JqZWN0Rml0SW1hZ2VzKCk7XG59KTtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4gfSBmcm9tIFwiLi9hbmltYXRpb25zXCI7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gXCJyZWFjdC1zdmdcIjtcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gXCJpY29ucy9jbG9zZS5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm94KHsgaGVhZGVyLCBib3hPcGVuLCB0b2dnbGVCb3gsIGNoaWxkcmVuIH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAge2JveE9wZW4gJiYgKFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGtleT1cImJveFwiIGNsYXNzTmFtZT1cImJveCBib3JkZXIgcC01XCIgey4uLkZBREVfSU59PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveF9faGVhZGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgbWItMFwiPntoZWFkZXJ9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19jbG9zZSBidG4gYnRuLWxpbmsgbWwtYXV0b1wiIG9uQ2xpY2s9e3RvZ2dsZUJveH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTEyXCIgc3JjPXtjbG9zZUljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94X19ib2R5IGQtZmxleCBtdC00XCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tIFwicmVhY3Qtc3ZnXCI7XG5pbXBvcnQgeyB1c2VEcm9wem9uZSB9IGZyb20gXCJyZWFjdC1kcm9wem9uZVwiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlTXV0YXRpb24sIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tIFwiaWNvbnMvY2xvc2Uuc3ZnXCI7XG5pbXBvcnQgYWRkSW1hZ2VJY29uIGZyb20gXCJpY29ucy9hZGRfaW1hZ2Uuc3ZnXCI7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNUQUdHRVJfVVAgfSBmcm9tIFwiLi9hbmltYXRpb25zXCI7XG5cbi8qIEFwaSBjYWxscyAqL1xuaW1wb3J0IHsgYWRkUHJvamVjdEltYWdlcywgZGVsZXRlUHJvamVjdEltYWdlcywgUVVFUllfS0VZUyB9IGZyb20gXCIuLi9wcm9qZWN0LW92ZXJ2aWV3L2FwaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wem9uZSh7IHByb2plY3RJZCwgcHJvamVjdEltYWdlcyB9KSB7XG4gICAgLyogQ29udGFudHMgKi9cbiAgICBjb25zdCBDT0xVTU5fTEFZT1VUID0gXCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXhsLTNcIjtcblxuICAgIC8qIEhvb2tzICovXG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG4gICAgY29uc3QgeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSB9ID0gdXNlRHJvcHpvbmUoe1xuICAgICAgICBhY2NlcHQ6IFwiaW1hZ2UvKlwiLFxuICAgICAgICBub0NsaWNrOiB0cnVlLFxuICAgICAgICBvbkRyb3A6IChhY2NlcHRlZEZpbGVzKSA9PiB1cGRhdGVQcm9qZWN0SW1hZ2VzKFwiYWRkXCIsIHsgaW1hZ2VzOiBhY2NlcHRlZEZpbGVzIH0pLFxuICAgIH0pO1xuXG4gICAgLyogTXV0YXRpb25zICovXG4gICAgY29uc3QgYWRkUHJvamVjdEltYWdlc011dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkUHJvamVjdEltYWdlcywge1xuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0pLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZGVsZXRlUHJvamVjdEltYWdlc011dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlUHJvamVjdEltYWdlcywge1xuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0pLFxuICAgIH0pO1xuXG4gICAgLyogQ2FsbGJhY2tzICovXG4gICAgY29uc3QgdXBkYXRlUHJvamVjdEltYWdlcyA9IChhY3Rpb24sIHByb3BzKSA9PiB7XG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwiYWRkXCIpIGFkZFByb2plY3RJbWFnZXNNdXRhdGlvbi5tdXRhdGUoeyBwcm9qZWN0SWQsIC4uLnByb3BzIH0pO1xuICAgICAgICBpZiAoYWN0aW9uID09PSBcImRlbGV0ZVwiKSBkZWxldGVQcm9qZWN0SW1hZ2VzTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkLCAuLi5wcm9wcyB9KTtcbiAgICB9O1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZVwiIHsuLi5nZXRSb290UHJvcHMoKX0+XG4gICAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0tZXF1YWxpemVkIGd1dHRlcnMtNVwiPlxuICAgICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgaW5pdGlhbD17ZmFsc2V9PlxuICAgICAgICAgICAgICAgICAgICB7cHJvamVjdEltYWdlcy5tYXAoKHsgaW1hZ2UsIHRpdGxlLCBpZCB9LCBpbWFnZUluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBsYXlvdXQgey4uLlNUQUdHRVJfVVAoaW1hZ2VJbmRleCl9IGNsYXNzTmFtZT17Q09MVU1OX0xBWU9VVH0ga2V5PXtpZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZV9fY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZHJvcHpvbmVfX2ltYWdlIGltZy1mbHVpZFwiIHNyYz17aW1hZ2V9IGFsdD17dGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIGRyb3B6b25lX19pbWFnZS1kZWxldGUgcC0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVByb2plY3RJbWFnZXMoXCJkZWxldGVcIiwgeyBpZCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTggdGV4dC1iYXNlIG10LTBcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBrZXk9XCJhZGQtaW1hZ2VcIiB7Li4uU1RBR0dFUl9VUChwcm9qZWN0SW1hZ2VzLmxlbmd0aCl9IGNsYXNzTmFtZT17Q09MVU1OX0xBWU9VVH0gbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3B6b25lSW5uZXIgey4uLnsgdXBkYXRlUHJvamVjdEltYWdlcywgaXNQYXJlbnREcmFnQWN0aXZlOiBpc0RyYWdBY3RpdmUgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbi8qIElubmVyIGRyb3B6b25lICovXG5jb25zdCBEcm9wem9uZUlubmVyID0gKHsgdXBkYXRlUHJvamVjdEltYWdlcywgaXNQYXJlbnREcmFnQWN0aXZlIH0pID0+IHtcbiAgICAvKiBIb29rcyAqL1xuICAgIGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzLCBpc0RyYWdBY3RpdmUgfSA9IHVzZURyb3B6b25lKHtcbiAgICAgICAgYWNjZXB0OiBcImltYWdlLypcIixcbiAgICAgICAgbm9EcmFnRXZlbnRzQnViYmxpbmc6IHRydWUsXG4gICAgICAgIG9uRHJvcDogKGFjY2VwdGVkRmlsZXMpID0+IHVwZGF0ZVByb2plY3RJbWFnZXMoXCJhZGRcIiwgeyBpbWFnZXM6IGFjY2VwdGVkRmlsZXMgfSksXG4gICAgfSk7XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3B6b25lXCIgey4uLmdldFJvb3RQcm9wcygpfT5cbiAgICAgICAgICAgIDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxuICAgICAgICAgICAgPGFydGljbGVcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkcm9wem9uZV9fY29udGFpbmVyIGNhcmQgY2FyZC0tbGluayAke1xuICAgICAgICAgICAgICAgICAgICAoaXNEcmFnQWN0aXZlIHx8IGlzUGFyZW50RHJhZ0FjdGl2ZSkgJiYgXCJpcy1wdWxzaW5nXCJcbiAgICAgICAgICAgICAgICB9IGNhcmQtLXRyYW5zcGFyZW50IGgtMTAwIG1iLTBgfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgcC0xMFwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJidG4tdGV4dCBkLWZsZXggZmxleC1jb2x1bW4gYWxpZ24taXRlbXMtY2VudGVyIHRleHQtd2hpdGUgdGV4dC1tdXRlZC0tNDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS00OFwiIHNyYz17YWRkSW1hZ2VJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0tc20gbXQtMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpc0RyYWdBY3RpdmUgfHwgaXNQYXJlbnREcmFnQWN0aXZlID8gXCJEcm9wIHRoZSBpbWFnZXNcIiA6IFwiQWRkIHNvbWUgaW1hZ2VzXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiwgVFJBTlNGT1JNX1VQIH0gZnJvbSBcIi4vYW5pbWF0aW9uc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb2RhbCh7IHRvZ2dsZU1vZGFsLCBjaGlsZHJlbiwgZG9tRWxlbWVudCwgdmFyaWFudCA9IFwiZGVmYXVsdFwiIH0pIHtcbiAgICBjb25zdCByZW5kZXIgPSAoKSA9PiAoXG4gICAgICAgIDxtb3Rpb24uZGl2IGtleT1cImN1c3RvbS1tb2RhbFwiIGNsYXNzTmFtZT17YGN1c3RvbS1tb2RhbCBjdXN0b20tbW9kYWwtLSR7dmFyaWFudH1gfSB7Li4uRkFERV9JTn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fb3ZlcmxheVwiIG9uQ2xpY2s9e3RvZ2dsZU1vZGFsfSAvPlxuICAgICAgICAgICAgPG1vdGlvbi5hcnRpY2xlIGtleT1cImN1c3RvbS1tb2RhbF9fY29udGVudFwiIGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fY29udGVudFwiIHsuLi5UUkFOU0ZPUk1fVVB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHB4LTBcIj57Y2hpbGRyZW59PC9kaXY+XG4gICAgICAgICAgICA8L21vdGlvbi5hcnRpY2xlPlxuICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgKTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIGlmIChkb21FbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVQb3J0YWwocmVuZGVyKCksIGRvbUVsZW1lbnQpO1xuICAgIH1cblxuICAgIHJldHVybiByZW5kZXIoKTtcbn1cbiIsImNvbnN0IEVBU0UgPSBbMC42NSwgMCwgMC4zNSwgMV07XG5cbmNvbnN0IEZBREVfSU4gPSB7XG4gICAgaW5pdGlhbDoge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgIH0sXG4gICAgYW5pbWF0ZToge1xuICAgICAgICBvcGFjaXR5OiAxLFxuICAgIH0sXG4gICAgZXhpdDoge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgIH0sXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBlYXNlOiBFQVNFLFxuICAgIH0sXG59O1xuXG5jb25zdCBUUkFOU0ZPUk1fVVAgPSB7XG4gICAgaW5pdGlhbDoge1xuICAgICAgICB5OiBcIjEwMCVcIixcbiAgICB9LFxuICAgIGFuaW1hdGU6IHtcbiAgICAgICAgeTogMCxcbiAgICB9LFxuICAgIGV4aXQ6IHtcbiAgICAgICAgeTogXCIxMDAlXCIsXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIGVhc2U6IEVBU0UsXG4gICAgfSxcbn07XG5cbmNvbnN0IFNDQUxFX0ZBREUgPSB7XG4gICAgaW5pdGlhbDoge1xuICAgICAgICBzY2FsZTogMC41LFxuICAgICAgICBvcGFjaXR5OiAwLFxuICAgIH0sXG4gICAgYW5pbWF0ZToge1xuICAgICAgICBzY2FsZTogMSxcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICB9LFxuICAgIGV4aXQ6IHtcbiAgICAgICAgc2NhbGU6IDAuNSxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgZWFzZTogRUFTRSxcbiAgICAgICAgZHVyYXRpb246IDAuMSxcbiAgICB9LFxufTtcblxuY29uc3QgU1RBR0dFUl9VUCA9IChpbmRleCA9IDApID0+ICh7XG4gICAgaW5pdGlhbDogeyBvcGFjaXR5OiAwLCB5OiAyNSB9LFxuICAgIGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgeTogMCwgdHJhbnNpdGlvbjogeyBlYXNlOiBFQVNFLCBkZWxheTogaW5kZXggKiAwLjAzNSB9IH0sXG4gICAgZXhpdDogeyBvcGFjaXR5OiAwLCB5OiAtMjUsIHRyYW5zaXRpb246IHsgZWFzZTogRUFTRSB9IH0sXG59KTtcblxuY29uc3QgU1RBR0dFUl9MRUZUID0gKGluZGV4ID0gMCkgPT4gKHtcbiAgICBpbml0aWFsOiB7IG9wYWNpdHk6IDAsIHg6IDEwIH0sXG4gICAgYW5pbWF0ZTogeyBvcGFjaXR5OiAxLCB4OiAwLCB0cmFuc2l0aW9uOiB7IGVhc2U6IEVBU0UsIGRlbGF5OiBpbmRleCAqIDAuMDM1IH0gfSxcbiAgICBleGl0OiB7IG9wYWNpdHk6IDAsIHg6IDEwLCB0cmFuc2l0aW9uOiB7IGVhc2U6IEVBU0UgfSB9LFxufSk7XG5cbmV4cG9ydCB7IEZBREVfSU4sIFRSQU5TRk9STV9VUCwgU0NBTEVfRkFERSwgU1RBR0dFUl9VUCwgU1RBR0dFUl9MRUZUIH07XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIERyb3B6b25lIH0gZnJvbSBcIi4vRHJvcHpvbmVcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgTW9kYWwgfSBmcm9tIFwiLi9Nb2RhbFwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBCb3ggfSBmcm9tIFwiLi9Cb3hcIjtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gXCJyZWFjdC1zdmdcIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBzdGFySWNvbiBmcm9tIFwiaWNvbnMvc3Rhci5zdmdcIjtcbmltcG9ydCBjbG9zZUljb24gZnJvbSBcImljb25zL2Nsb3NlLnN2Z1wiO1xuXG4vKiBBcGkgY2FsbHMgKi9cbmltcG9ydCB7IGRlbGV0ZVVzZXIsIFFVRVJZX0tFWVMgfSBmcm9tIFwiLi4vLi4vcHJvamVjdC1vdmVydmlldy9hcGlcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcih7IHVzZXIsIHByb2plY3QsIHZhcmlhbnQgPSBcImRlZmF1bHRcIiB9KSB7XG4gICAgLyogSG9va3MgKi9cbiAgICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XG5cbiAgICAvKiBDb25zdGFudHMgKi9cbiAgICBjb25zdCB7IHByb2plY3RJZCwgYXV0aG9yIH0gPSBwcm9qZWN0O1xuICAgIGNvbnN0IHsgaWQ6IHVzZXJJZCwgZW1haWwsIC4uLnJlc3QgfSA9IHVzZXI7XG4gICAgY29uc3QgaXNBdXRob3IgPSBlbWFpbCA9PT0gYXV0aG9yO1xuXG4gICAgY29uc3QgY2xhc3NlcyA9IHtcbiAgICAgICAgZGVmYXVsdDogXCJ1c2VyXCIsXG4gICAgICAgIGludGVyYWN0aXZlOiBcInVzZXIgdXNlci0tbGdcIixcbiAgICB9O1xuXG4gICAgLyogTXV0YXRpb25zICovXG4gICAgY29uc3QgZGVsZXRlVXNlck11dGF0aW9uID0gdXNlTXV0YXRpb24oZGVsZXRlVXNlciwge1xuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKFtRVUVSWV9LRVlTLlBST0pFQ1RfQllfSUQsIHByb2plY3RJZF0pLFxuICAgIH0pO1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0b1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXNbdmFyaWFudF19PlxuICAgICAgICAgICAgICAgIHtpc0F1dGhvciAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcl9fdG9nZ2xlIHVzZXJfX3RvZ2dsZS0tbGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tNiB0ZXh0LXRlcnRpYXJ5IG10LTBcIiBzcmM9e3N0YXJJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHt2YXJpYW50ID09PSBcImludGVyYWN0aXZlXCIgJiYgIWlzQXV0aG9yICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIHVzZXJfX3RvZ2dsZSB1c2VyX190b2dnbGUtLWRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVVc2VyTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkLCB1c2VySWQgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS02IHRleHQtYmFzZSBtdC0wXCIgc3JjPXtjbG9zZUljb259IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPFVzZXJJbWFnZSB7Li4ucmVzdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jb25zdCBVc2VySW1hZ2UgPSAoeyB1c2VybmFtZSwgaW1hZ2UsIHVzZXJDb2xvciB9KSA9PiB7XG4gICAgLyogQ29uc3RhbnRzICovXG4gICAgY29uc3QgdXNlckluaXRpYWxzID0gdXNlcm5hbWUuc3BsaXQoXCIgXCIpLm1hcCgod29yZCkgPT4gd29yZFswXS50b1VwcGVyQ2FzZSgpKTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIGlmIChpbWFnZSkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJ1c2VyX19pbWFnZSBpbWctZmx1aWQgcm91bmRlZC1jaXJjbGVcIiBzcmM9e2ltYWdlfSBzcmNTZXQ9e2Ake2ltYWdlfSAyeGB9IGFsdD17dXNlcm5hbWV9IC8+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlcl9faW1hZ2UgdXNlcl9faW1hZ2UtLWluaXRpYWxzIHJvdW5kZWQtY2lyY2xlXCIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiB1c2VyQ29sb3IgfX0+XG4gICAgICAgICAgICB7dXNlckluaXRpYWxzfVxuICAgICAgICA8L3NwYW4+XG4gICAgKTtcbn07XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gXCJyZWFjdC1zdmdcIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRJY29uIGZyb20gXCJpY29ucy9hZGQuc3ZnXCI7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IEJveCB9IGZyb20gXCIuLi8uLi9jb21tb25cIjtcblxuLyogSGVscGVycyAqL1xuaW1wb3J0IHsgaXNFbWFpbCB9IGZyb20gXCIuLi8uLi9oZWxwZXJzXCI7XG5cbi8qIEFwaSBjYWxscyAqL1xuaW1wb3J0IHsgYWRkVXNlciwgUVVFUllfS0VZUyB9IGZyb20gXCIuLi8uLi9wcm9qZWN0LW92ZXJ2aWV3L2FwaVwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyQWRkKHsgcHJvamVjdElkIH0pIHtcbiAgICAvKiBIb29rcyAqL1xuICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcblxuICAgIC8qIE11dGF0aW9ucyAqL1xuICAgIGNvbnN0IGFkZFVzZXJNdXRhdGlvbiA9IHVzZU11dGF0aW9uKGFkZFVzZXIsIHtcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdKTtcbiAgICAgICAgICAgIHNldFZhbHVlKFwiXCIpO1xuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgLyogU3RhdGUgKi9cbiAgICBjb25zdCBbYm94T3Blbiwgc2V0Qm94T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICAgIC8qIENhbGxiYWNrcyAqL1xuICAgIGNvbnN0IHRvZ2dsZUJveCA9ICgpID0+IHNldEJveE9wZW4oIWJveE9wZW4pO1xuXG4gICAgY29uc3Qgb25DaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgc2V0VmFsdWUoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25LZXlEb3duID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChbXCJFbnRlclwiLCBcIlRhYlwiXS5pbmNsdWRlcyhldmVudC5rZXkpKSB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBpZiAoaXNFbWFpbCh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBhZGRVc2VyTXV0YXRpb24ubXV0YXRlKHsgcHJvamVjdElkLCBlbWFpbDogdmFsdWUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZSBtbC0yXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayB1c2VyIHVzZXItLWxnIHVzZXItLWFkZFwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0b2dnbGVCb3h9PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXJfX2ltYWdlIHVzZXJfX2ltYWdlLS1pbml0aWFscyByb3VuZGVkLWNpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tOCB0ZXh0LXdoaXRlIG10LTBcIiBzcmM9e2FkZEljb259IC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8Qm94IGhlYWRlcj1cIlNoYXJlIHdpdGggc29tZW9uZVwiIHsuLi57IGJveE9wZW4sIHRvZ2dsZUJveCB9fT5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJhZGRVc2VyXCI+XG4gICAgICAgICAgICAgICAgICAgIEFkZCB1c2Vyc1xuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gZm9ybS1jb250cm9sLS1jbGVhclwiXG4gICAgICAgICAgICAgICAgICAgIGlkPVwibmV3VXNlcnNcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmV3VXNlcnNcIlxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJAZG9tYWluLmNvbVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICAgICAgICB7Li4ueyB2YWx1ZSwgb25DaGFuZ2UsIG9uS2V5RG93biB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCBVc2VyIGZyb20gXCIuL1VzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcnMoeyB1c2VycywgcHJvamVjdCwgdmFyaWFudCA9IFwiZGVmYXVsdFwiIH0pIHtcbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTJcIj5cbiAgICAgICAgICAgIHt1c2Vycy5tYXAoKHVzZXIsIHVzZXJJbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiA8VXNlciBrZXk9e3VzZXJJbmRleH0gey4uLnsgdXNlciwgcHJvamVjdCwgdmFyaWFudCB9fSAvPjtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBVc2VycyB9IGZyb20gXCIuL1VzZXJzXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXIgfSBmcm9tIFwiLi9Vc2VyXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIFVzZXJBZGQgfSBmcm9tIFwiLi9Vc2VyQWRkXCI7XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIGlzRW1haWwgfSBmcm9tIFwiLi9pc0VtYWlsXCI7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0VtYWlsKGVtYWlsKSB7XG4gICAgcmV0dXJuIC9eW15cXHNAXStAW15cXHNAXStcXC5bXlxcc0BdKyQvLnRlc3QoZW1haWwpO1xufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgY29uc3QgUVVFUllfS0VZUyA9IHtcbiAgICBQUk9KRUNUX0JZX1VTRVI6IFwicHJvamVjdF9ieV91c2VyXCIsXG4gICAgUFJPSkVDVF9CWV9JRDogXCJwcm9qZWN0X2J5X2lkXCIsXG59O1xuXG4vKiBQcm9qZWN0IHJlbGF0ZWQgY2FsbHMgKi9cbmV4cG9ydCBjb25zdCBmZXRjaFByb2plY3RzQnlVc2VyID0gYXN5bmMgKHsgdXNlcklkIH0pID0+IHtcbiAgICBsZXQgdXJsID0gXCIvYXBpL3Byb2plY3RzL2dldFwiO1xuICAgIGlmICh1c2VySWQpIHtcbiAgICAgICAgdXJsID0gYCR7dXJsfS8ke3VzZXJJZH1gO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLmdldCh1cmwpO1xuICAgIHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hQcm9qZWN0QnlJZCA9IGFzeW5jICh7IHByb2plY3RJZCB9KSA9PiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KGAvYXBpL3Byb2plY3QvZ2V0LyR7cHJvamVjdElkfWApO1xuICAgIHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG5leHBvcnQgY29uc3QgYWRkUHJvamVjdCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KFwiL2FwaS9wcm9qZWN0cy9hZGRcIik7XG4gICAgcmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVQcm9qZWN0ID0gYXN5bmMgKHsgcHJvamVjdElkIH0pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3Byb2plY3RzL2RlbGV0ZS8ke3Byb2plY3RJZH1gKTtcbiAgICByZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGVkaXRQcm9qZWN0ID0gYXN5bmMgKHsgZm9ybVJlZiwgcHJvamVjdElkIH0pID0+IHtcbiAgICBjb25zdCBwYXJhbXMgPSBuZXcgRm9ybURhdGEoZm9ybVJlZi5jdXJyZW50KTtcblxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvcHJvamVjdHMvZWRpdC8ke3Byb2plY3RJZH1gLCBwYXJhbXMpO1xuICAgIHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuXG4vKiBQcm9qZWN0IGltYWdlIHJlbGF0ZWQgY2FsbHMgKi9cbmV4cG9ydCBjb25zdCBhZGRQcm9qZWN0SW1hZ2VzID0gYXN5bmMgKHsgcHJvamVjdElkLCBpbWFnZXMgfSkgPT4ge1xuICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4gcGFyYW1zLmFwcGVuZChcImltYWdlc1tdXCIsIGltYWdlKSk7XG5cbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2ltYWdlcy9hZGQvJHtwcm9qZWN0SWR9YCwgcGFyYW1zKTtcbiAgICByZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlbGV0ZVByb2plY3RJbWFnZXMgPSBhc3luYyAoeyBwcm9qZWN0SWQsIGlkIH0pID0+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2ltYWdlcy9kZWxldGUvJHtwcm9qZWN0SWR9YCwgeyBpZCB9KTtcbiAgICByZXR1cm4gcmVzdWx0Py5kYXRhO1xufTtcblxuLyogVXNlciByZWxhdGVkIGNhbGxzICovXG5leHBvcnQgY29uc3QgYWRkVXNlciA9IGFzeW5jICh7IHByb2plY3RJZCwgZW1haWwgfSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvdXNlcnMvYWRkLyR7cHJvamVjdElkfWAsIHsgZW1haWwgfSk7XG4gICAgcmV0dXJuIHJlc3VsdD8uZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWxldGVVc2VyID0gYXN5bmMgKHsgcHJvamVjdElkLCB1c2VySWQgfSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvdXNlcnMvZGVsZXRlLyR7cHJvamVjdElkfWAsIHsgdXNlcklkIH0pO1xuICAgIHJldHVybiByZXN1bHQ/LmRhdGE7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUHJvamVjdFJlc3VsdHMgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBQcm9qZWN0QWRkIH0gZnJvbSBcIi4vcHJvamVjdC1hZGRcIjtcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU1RBR0dFUl9VUCB9IGZyb20gXCIuLi8uLi9jb21tb24vYW5pbWF0aW9uc1wiO1xuXG4vKiBBcGkgY2FsbHMgKi9cbmltcG9ydCB7IGZldGNoUHJvamVjdHNCeVVzZXIsIFFVRVJZX0tFWVMgfSBmcm9tIFwiLi4vYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RPdmVydmlldygpIHtcbiAgICAvKiBTdGF0ZSAqL1xuICAgIGNvbnN0IFtpc0FkbWluLCBzZXRJc0FkbWluXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCB1c2VySWQgPSBhdG9iKGxvY2F0aW9uLnNlYXJjaC5yZXBsYWNlKFwiP1wiLCBcIlwiKSk7XG5cbiAgICAvKiBIb29rcyAqL1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nOiBwcm9qZWN0c0xvYWRpbmcsIGRhdGEgPSB7fSB9ID0gdXNlUXVlcnkoXG4gICAgICAgIFFVRVJZX0tFWVMuUFJPSkVDVF9CWV9VU0VSLFxuICAgICAgICAoKSA9PiBmZXRjaFByb2plY3RzQnlVc2VyKHsgdXNlcklkIH0pLFxuICAgICAgICB7XG4gICAgICAgICAgICBvblN1Y2Nlc3M6ICh7IHVzZXIgfSkgPT4gc2V0SXNBZG1pbih1c2VyLnJvbGVzLmluY2x1ZGVzKFwiUk9MRV9BRE1JTlwiKSksXG4gICAgICAgIH1cbiAgICApO1xuXG4gICAgLyogQ29uc3RhbnRzICAqL1xuICAgIGNvbnN0IHsgcHJvamVjdHMgPSBbXSB9ID0gZGF0YTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxQcm9qZWN0UmVzdWx0cyB7Li4ueyBwcm9qZWN0cyB9fT5cbiAgICAgICAgICAgIHtpc0FkbWluICYmICFwcm9qZWN0c0xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgIHsuLi5TVEFHR0VSX1VQKHByb2plY3RzLmxlbmd0aCl9XG4gICAgICAgICAgICAgICAgICAgIGtleT1cImFkZC1wcm9qZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC14bC0zXCJcbiAgICAgICAgICAgICAgICAgICAgbGF5b3V0PlxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdEFkZCAvPlxuICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAgICAgIHshaXNBZG1pbiAmJiAhcHJvamVjdHNMb2FkaW5nICYmIHByb2plY3RzLmxlbmd0aCA9PT0gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLnAgey4uLlNUQUdHRVJfVVAoKX0gY2xhc3NOYW1lPVwidGV4dC13aGl0ZVwiIGxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YFlvdSBkb24ndCBoYXZlIGFueSBwcm9qZWN0cyB5ZXRgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24ucD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Byb2plY3RSZXN1bHRzPlxuICAgICk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBUZXh0YXJlYUF1dG9zaXplIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0YXJlYUF1dG9zaXplXCI7XG5pbXBvcnQgeyBSZWFjdFNWRyB9IGZyb20gXCJyZWFjdC1zdmdcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGNsb3NlSWNvbiBmcm9tIFwiaWNvbnMvY2xvc2Uuc3ZnXCI7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IE1vZGFsLCBEcm9wem9uZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb25cIjtcbmltcG9ydCB7IFVzZXJBZGQsIFVzZXJzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvdXNlcnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdE1vZGFsKHtcbiAgICBwcm9qZWN0ID0ge30sXG4gICAgdG9nZ2xlTW9kYWwsXG4gICAgb25TdWJtaXQsXG4gICAgdGl0bGVQbGFjZWhvbGRlciA9IFwiVGhlIHByb2plY3QgbmFtZVwiLFxuICAgIGRlc2NyaXB0aW9uUGxhY2Vob2xkZXIgPSBcIldoYXQncyB0aGlzIHByb2plY3QgYWJvdXQ/XCIsXG59KSB7XG4gICAgLyogQ29uc3RhbnRzICAqL1xuICAgIGNvbnN0IHsgaWQ6IHByb2plY3RJZCA9IG51bGwsIHRpdGxlID0gXCJcIiwgZGVzY3JpcHRpb24gPSBcIlwiLCBwcm9qZWN0SW1hZ2VzID0gW10sIHVzZXJzID0gW10sIGF1dGhvciB9ID0gcHJvamVjdDtcblxuICAgIC8qIFN0YXRlICovXG4gICAgY29uc3QgW3Byb2plY3RUaXRsZSwgc2V0UHJvamVjdFRpdGxlXSA9IHVzZVN0YXRlKHRpdGxlKTtcbiAgICBjb25zdCBbcHJvamVjdERlc2NyaXB0aW9uLCBzZXRQcm9qZWN0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoZGVzY3JpcHRpb24pO1xuXG4gICAgLyogUmVmcyAqL1xuICAgIGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxNb2RhbCB7Li4ueyB0b2dnbGVNb2RhbCB9fSBkb21FbGVtZW50PXtkb2N1bWVudC5ib2R5fT5cbiAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgcmVmPXtmb3JtUmVmfVxuICAgICAgICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fZm9ybVwiXG4gICAgICAgICAgICAgICAgb25TdWJtaXQ9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdChmb3JtUmVmKTtcbiAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9faGVhZGVyIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgcHQtNiBwdC1tZC0xMiBweC02IHBiLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicHJvamVjdFRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdFRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtLWNsZWFyIHRleHQtLXhsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicHJvamVjdFRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ0aXRsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17dGl0bGVQbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwcm9qZWN0VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0UHJvamVjdFRpdGxlKHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2Nsb3NlIGJ0biBidG4tbGluayBtbC1hdXRvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJDbG9zZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNb2RhbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRhYkluZGV4PVwiLTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fYm9keSBwdC0zIHB4LTYgcGItMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZ3V0dGVycy0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC02XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwicHJvamVjdERlc2NyaXB0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtgV2hhdCdzIHRoaXMgcHJvamVjdCBhYm91dD9gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRhcmVhQXV0b3NpemVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC0tdGV4dCBmb3JtLWNvbnRyb2wtLWNsZWFyIG1iLTEwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcm9qZWN0RGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17ZGVzY3JpcHRpb25QbGFjZWhvbGRlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb2plY3REZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHNldFByb2plY3REZXNjcmlwdGlvbih2YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtYXV0byBkLWZsZXggYWxpZ24taXRlbXMtYmFzZWxpbmUgbWwtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VycyB7Li4ueyB1c2VycywgcHJvamVjdDogeyBwcm9qZWN0SWQsIGF1dGhvciB9IH19IHZhcmlhbnQ9XCJpbnRlcmFjdGl2ZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJBZGQgey4uLnsgcHJvamVjdElkIH19IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxEcm9wem9uZSB7Li4ueyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZXMgfX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fZm9vdGVyIHB4LTYgcGItNiBwYi1tZC0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTAgdy0xMDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1sZy0zIGNvbC14bC0yIG1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2J0biBidG4gYnRuLWJsb2NrIGJ0bi1zbSBidG4td2hpdGUgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uc3BhbiBjbGFzc05hbWU9XCJidG4tdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+U2F2ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICApO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0TW9kYWwgfSBmcm9tIFwiLi9Qcm9qZWN0TW9kYWxcIjtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSBcInJlYWN0LXN2Z1wiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZU11dGF0aW9uLCB1c2VRdWVyeSwgdXNlUXVlcnlDbGllbnQgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUHJvamVjdE1vZGFsIH0gZnJvbSBcIi4uL21vZGFsc1wiO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBhZGRQcm9qZWN0SWNvbiBmcm9tIFwiaWNvbnMvYWRkX3Byb2plY3Quc3ZnXCI7XG5cbi8qIEFwaSBjYWxscyAqL1xuaW1wb3J0IHsgYWRkUHJvamVjdCwgZmV0Y2hQcm9qZWN0QnlJZCwgUVVFUllfS0VZUywgZWRpdFByb2plY3QgfSBmcm9tIFwiLi4vLi4vYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RBZGQoKSB7XG4gICAgLyogU3RhdGUgKi9cbiAgICBjb25zdCBbcHJvamVjdElkLCBzZXRQcm9qZWN0SWRdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIC8qIEhvb2tzICovXG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG4gICAgLyogUXVlcmllcyAqL1xuICAgIGNvbnN0IHsgZGF0YTogcHJvamVjdCB9ID0gdXNlUXVlcnkoW1FVRVJZX0tFWVMuUFJPSkVDVF9CWV9JRCwgcHJvamVjdElkXSwgKCkgPT4gZmV0Y2hQcm9qZWN0QnlJZCh7IHByb2plY3RJZCB9KSwge1xuICAgICAgICBlbmFibGVkOiAhIXByb2plY3RJZCxcbiAgICB9KTtcblxuICAgIC8qIE11dGF0aW9ucyAqL1xuICAgIGNvbnN0IGFkZE11dGF0aW9uID0gdXNlTXV0YXRpb24oYWRkUHJvamVjdCwge1xuICAgICAgICBvblN1Y2Nlc3M6ICh7IGlkIH0pID0+IHNldFByb2plY3RJZChpZCksXG4gICAgfSk7XG5cbiAgICBjb25zdCBlZGl0TXV0YXRpb24gPSB1c2VNdXRhdGlvbihlZGl0UHJvamVjdCwge1xuICAgICAgICBvblN1Y2Nlc3M6ICgpID0+IHRvZ2dsZU1vZGFsKCksXG4gICAgfSk7XG5cbiAgICAvKiBDYWxsYmFja3MgKi9cbiAgICBjb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHtcbiAgICAgICAgc2V0TW9kYWxPcGVuKCFtb2RhbE9wZW4pO1xuXG4gICAgICAgIC8qIE11dGF0ZSBvbiBtb2RhbCBvcGVuICovXG4gICAgICAgIGlmICghbW9kYWxPcGVuKSBhZGRNdXRhdGlvbi5tdXRhdGUoKTtcblxuICAgICAgICAvKiBJbnZhbGlkYXRlIHByb2plY3RfYnlfdXNlciBvbiBjbG9zZSBtb2RhbCAqL1xuICAgICAgICBpZiAobW9kYWxPcGVuKSB7XG4gICAgICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLlBST0pFQ1RfQllfVVNFUik7XG4gICAgICAgICAgICBzZXRQcm9qZWN0SWQobnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZm9ybVJlZikgPT4gZWRpdE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYsIHByb2plY3RJZCB9KTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImNhcmQgY2FyZC0tbGluayBjYXJkLS10cmFuc3BhcmVudCBoLTEwMCBtYi0wXCIgc3R5bGU9e3sgbWluSGVpZ2h0OiAzODUgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgcC0xMFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIHRleHQtZGVjb3JhdGlvbi1ub25lIHN0cmV0Y2hlZC1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlTW9kYWx9XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuLXRleHQgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIHRleHQtbXV0ZWQtLTQwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tNDhcIiBzcmM9e2FkZFByb2plY3RJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0tc20gbXQtMVwiPkFkZCBtb3JlIHByb2plY3RzPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+e21vZGFsT3BlbiAmJiA8UHJvamVjdE1vZGFsIHsuLi57IHByb2plY3QsIG9uU3VibWl0LCB0b2dnbGVNb2RhbCB9fSAvPn08L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICk7XG59XG4iLCJleHBvcnQgeyBkZWZhdWx0IGFzIFByb2plY3RBZGQgfSBmcm9tIFwiLi9Qcm9qZWN0QWRkXCI7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgUHJvamVjdEltYWdlIGZyb20gXCIuL1Byb2plY3RJbWFnZVwiO1xuaW1wb3J0IFByb2plY3RNZW51IGZyb20gXCIuL1Byb2plY3RNZW51XCI7XG5pbXBvcnQgeyBVc2VycyB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL3VzZXJzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoeyBwcm9qZWN0IH0pIHtcbiAgICAvKiBDb25zdGFudHMgKi9cbiAgICBjb25zdCB7IHNsdWcsIHRpdGxlLCBwcm9qZWN0SW1hZ2VzLCB1c2VycywgYXV0aG9yIH0gPSBwcm9qZWN0O1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGEgaHJlZj17YHByb2plY3RzLyR7c2x1Z31gfSB0aXRsZT17dGl0bGV9IGNsYXNzTmFtZT1cImNhcmQgY2FyZC0tbGluayBjYXJkLS1wcm9kdWN0XCI+XG4gICAgICAgICAgICA8UHJvamVjdEltYWdlIHsuLi57IHByb2plY3RJbWFnZXMgfX0gLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTNcIj57dGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFVzZXJzIHsuLi57IHVzZXJzLCBwcm9qZWN0OiB7IGF1dGhvciB9IH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdE1lbnUgey4uLnsgcHJvamVjdElkOiBwcm9qZWN0LmlkIH19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0SW1hZ2UoeyBwcm9qZWN0SW1hZ2VzIH0pIHtcbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gcHJvamVjdEltYWdlcy5zbGljZSgwLCAxKS5tYXAoKHsgaW1hZ2UsIHRpdGxlIH0sIGltYWdlSW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2ltYWdlSW5kZXh9IGNsYXNzTmFtZT1cImNhcmRfX2ltYWdlIGhhcy1vdmVybGF5IG0tMlwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e2ltYWdlfSBzcmNTZXQ9e2Ake2ltYWdlfSAyeGB9IGFsdD17dGl0bGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICkpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tIFwicmVhY3Qtc3ZnXCI7XG5pbXBvcnQgeyB1c2VNdXRhdGlvbiwgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGVkaXRJY29uIGZyb20gXCJpY29ucy9lZGl0LnN2Z1wiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcImljb25zL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBjbG9zZUljb24gZnJvbSBcImljb25zL2Nsb3NlLnN2Z1wiO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTQ0FMRV9GQURFLCBTVEFHR0VSX0xFRlQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2FuaW1hdGlvbnNcIjtcblxuLyogQXBpIGNhbGxzICovXG5pbXBvcnQgeyBRVUVSWV9LRVlTLCBkZWxldGVQcm9qZWN0LCBmZXRjaFByb2plY3RCeUlkLCBlZGl0UHJvamVjdCB9IGZyb20gXCIuLi8uLi9hcGlcIjtcbmltcG9ydCB7IFByb2plY3RNb2RhbCB9IGZyb20gXCIuLi9tb2RhbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdE1lbnUoeyBwcm9qZWN0SWQgfSkge1xuICAgIC8qIEhvb2tzICovXG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xuXG4gICAgLyogTXV0YXRpb25zICovXG4gICAgY29uc3QgZGVsZXRlTXV0YXRpb24gPSB1c2VNdXRhdGlvbihkZWxldGVQcm9qZWN0LCB7XG4gICAgICAgIG9uU3VjY2VzczogKCkgPT4gcXVlcnlDbGllbnQuaW52YWxpZGF0ZVF1ZXJpZXMoUVVFUllfS0VZUy5QUk9KRUNUX0JZX1VTRVIpLFxuICAgIH0pO1xuXG4gICAgY29uc3QgZWRpdE11dGF0aW9uID0gdXNlTXV0YXRpb24oZWRpdFByb2plY3QsIHtcbiAgICAgICAgb25TdWNjZXNzOiAoKSA9PiB0b2dnbGVNb2RhbCgpLFxuICAgIH0pO1xuXG4gICAgLyogU3RhdGUgKi9cbiAgICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbbW9kYWxPcGVuLCBzZXRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gICAgLyogVG9nZ2xlcyAqL1xuICAgIGNvbnN0IHRvZ2dsZU1lbnUgPSAoKSA9PiBzZXRNZW51T3BlbighbWVudU9wZW4pO1xuXG4gICAgY29uc3QgdG9nZ2xlTW9kYWwgPSAoKSA9PiB7XG4gICAgICAgIHNldE1vZGFsT3BlbighbW9kYWxPcGVuKTtcblxuICAgICAgICBpZiAobW9kYWxPcGVuKSBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyhRVUVSWV9LRVlTLlBST0pFQ1RfQllfVVNFUik7XG4gICAgfTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY2FyZF9fbWVudSBtZW51ICR7bWVudU9wZW4gJiYgXCJpcy1hY3RpdmVcIn1gfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9fd3JhcHBlciBwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIHBvc2l0aW9uLXJlbGF0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZU1lbnUoKTtcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2UgZXhpdEJlZm9yZUVudGVyIGluaXRpYWw9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHttZW51T3BlbiA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBrZXk9XCJjbG9zZVwiIGNsYXNzTmFtZT1cIm1lbnVfX2RvdHNcIiB7Li4uU0NBTEVfRkFERX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNCB0ZXh0LXdoaXRlXCIgc3JjPXtjbG9zZUljb259IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBrZXk9XCJkb3RzXCIgY2xhc3NOYW1lPVwibWVudV9fZG90c1wiIHsuLi5TQ0FMRV9GQURFfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVudV9fZG90XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZW51X19kb3RcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lbnVfX2RvdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgICAgICB7bWVudU9wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVCb2R5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey4uLnsgcHJvamVjdElkLCBlZGl0TXV0YXRpb24sIGRlbGV0ZU11dGF0aW9uLCBtb2RhbE9wZW4sIHRvZ2dsZU1vZGFsLCB0b2dnbGVNZW51IH19XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmNvbnN0IE1lbnVCb2R5ID0gKHsgcHJvamVjdElkLCBlZGl0TXV0YXRpb24sIGRlbGV0ZU11dGF0aW9uLCBtb2RhbE9wZW4sIHRvZ2dsZU1vZGFsLCB0b2dnbGVNZW51IH0pID0+IHtcbiAgICAvKiBRdWVyaWVzICovXG4gICAgY29uc3QgeyBkYXRhOiBwcm9qZWN0IH0gPSB1c2VRdWVyeShbUVVFUllfS0VZUy5QUk9KRUNUX0JZX0lELCBwcm9qZWN0SWRdLCAoKSA9PiBmZXRjaFByb2plY3RCeUlkKHsgcHJvamVjdElkIH0pLCB7XG4gICAgICAgIGVuYWJsZWQ6ICEhcHJvamVjdElkLFxuICAgIH0pO1xuXG4gICAgLyogQ2FsbGJhY2tzICovXG4gICAgY29uc3QgdXBkYXRlUHJvamVjdCA9IChhY3Rpb24pID0+IHtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJlZGl0XCIpIHRvZ2dsZU1vZGFsKCk7XG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwiZGVsZXRlXCIpIGRlbGV0ZU11dGF0aW9uLm11dGF0ZSh7IHByb2plY3RJZCB9KTtcbiAgICB9O1xuXG4gICAgY29uc3Qgb25TdWJtaXQgPSAoZm9ybVJlZikgPT4gZWRpdE11dGF0aW9uLm11dGF0ZSh7IGZvcm1SZWYsIHByb2plY3RJZCB9KTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9fYm9keVwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1lbnVfX2xpc3QgbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxNZW51SXRlbSBpY29uPXtlZGl0SWNvbn0gaW5kZXg9ezF9IGNhbGxiYWNrPXsoKSA9PiB1cGRhdGVQcm9qZWN0KFwiZWRpdFwiKX0gLz5cbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gaWNvbj17ZGVsZXRlSWNvbn0gaW5kZXg9ezB9IGNhbGxiYWNrPXsoKSA9PiB1cGRhdGVQcm9qZWN0KFwiZGVsZXRlXCIpfSAvPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2Ugb25FeGl0Q29tcGxldGU9eygpID0+IHRvZ2dsZU1lbnUoKX0+XG4gICAgICAgICAgICAgICAge21vZGFsT3BlbiAmJiA8UHJvamVjdE1vZGFsIHsuLi57IHByb2plY3QsIG9uU3VibWl0LCB0b2dnbGVNb2RhbCB9fSAvPn1cbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufTtcblxuY29uc3QgTWVudUl0ZW0gPSAoeyBpY29uLCBpbmRleCwgY2FsbGJhY2sgfSkgPT4gKFxuICAgIDxtb3Rpb24ubGkgY2xhc3NOYW1lPVwibGlzdF9faXRlbSBtci0yXCIgey4uLlNUQUdHRVJfTEVGVChpbmRleCl9PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgdGV4dC13aGl0ZSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTYgdGV4dC13aGl0ZSBtci0yXCIgc3JjPXtpY29ufSAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICA8L21vdGlvbi5saT5cbik7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IFNUQUdHRVJfVVAgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdFJlc3VsdHMoeyBwcm9qZWN0cywgY2hpbGRyZW4gfSkge1xuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHJvdy0tZXF1YWxpemVkIGd1dHRlcnMtNVwiPlxuICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCwgcHJvamVjdEluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4uU1RBR0dFUl9VUChwcm9qZWN0SW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtwcm9qZWN0LmlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC14bC0zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9qZWN0IHsuLi57IHByb2plY3QgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBQcm9qZWN0UmVzdWx0cyB9IGZyb20gXCIuL1Byb2plY3RSZXN1bHRzXCI7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIgfSBmcm9tIFwicmVhY3QtcXVlcnlcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IFByb2plY3RPdmVydmlldyBmcm9tIFwiLi9jb21wb25lbnRzL1Byb2plY3RPdmVydmlld1wiO1xuXG4vKiBDbGllbnQgKi9cbmNvbnN0IGNsaWVudCA9IG5ldyBRdWVyeUNsaWVudCh7XG4gICAgZGVmYXVsdE9wdGlvbnM6IHtcbiAgICAgICAgcXVlcmllczoge1xuICAgICAgICAgICAgcmVmZXRjaE9uV2luZG93Rm9jdXM6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0sXG59KTtcblxuLyogUmVuZGVyICovXG5jb25zdCBwcm9qZWN0T3ZlcnZpZXdOb2RlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0T3ZlcnZpZXdcIik7XG5pZiAocHJvamVjdE92ZXJ2aWV3Tm9kZSAhPT0gbnVsbCkge1xuICAgIHJlbmRlcihcbiAgICAgICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgey4uLnsgY2xpZW50IH19PlxuICAgICAgICAgICAgPFByb2plY3RPdmVydmlldyB7Li4ucHJvamVjdE92ZXJ2aWV3Tm9kZS5kYXRhc2V0fSAvPlxuICAgICAgICA8L1F1ZXJ5Q2xpZW50UHJvdmlkZXI+LFxuICAgICAgICBwcm9qZWN0T3ZlcnZpZXdOb2RlXG4gICAgKTtcbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgUGFyc2xleSBmcm9tICdwYXJzbGV5anMnO1xuXG5pbXBvcnQgJ3BhcnNsZXlqcy9kaXN0L2kxOG4vbmwnO1xuXG52YXIgcGFyc2xleUNvbmZpZyA9IHtcbiAgICBlcnJvckNsYXNzOiAnaXMtZXJyb3InLFxuICAgIGV4Y2x1ZGVkOiAnaW5wdXRbdHlwZT1idXR0b25dLCBpbnB1dFt0eXBlPXN1Ym1pdF0sIGlucHV0W3R5cGU9cmVzZXRdLCBpbnB1dFt0eXBlPWhpZGRlbl0sIFtkaXNhYmxlZF0sIDpoaWRkZW4nLFxuICAgIHN1Y2Nlc3NDbGFzczogJ2lzLXN1Y2Nlc3MnXG59O1xuXG5QYXJzbGV5LmFkZE1lc3NhZ2VzKCdubCcsIHtcbiAgICBtaW5jaGVjazogJ1NlbGVjdGVlciB0ZW5taW5zdGUgJXMgb3B0aWUocykuJyxcbiAgICBtYXhjaGVjazogJ1NlbGVjdGVlciBtYXhpbWFhbCAlcyBvcHRpZShzKS4nLFxuICAgIGNoZWNrOiAnU2VsZWN0ZWVyIHR1c3NlbiAlcyBlbiAlcyBvcHRpZShzKS4nXG59KS5zZXRMb2NhbGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcpO1xuXG4kKCdmb3JtOm5vdChbbm92YWxpZGF0ZV0pJykucGFyc2xleShwYXJzbGV5Q29uZmlnKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=