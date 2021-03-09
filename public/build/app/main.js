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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var icons_add_image_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! icons/add_image.svg */ "./assets/app/img/icons/add_image.svg");
/* harmony import */ var icons_add_image_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(icons_add_image_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./animations */ "./assets/app/js/react/common/animations.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */





/* Assets */



/* Animations */


function Dropzone(_ref) {
  var projectId = _ref.projectId,
      projectImages = _ref.projectImages;

  /* Constants */
  var COLUMN_LAYOUT = "col-12 col-md-6 col-lg-4 col-xl-3";
  /* State */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(projectImages),
      _useState2 = _slicedToArray(_useState, 2),
      images = _useState2[0],
      setImages = _useState2[1];
  /* Hooks */


  var _useDropzone = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_3__["useDropzone"])({
    accept: "image/*",
    noClick: true,
    onDrop: function onDrop(acceptedFiles) {
      return addProjectImages(acceptedFiles);
    }
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps,
      isDragActive = _useDropzone.isDragActive;
  /* Callbacks */


  var addProjectImages = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(images) {
      var params, result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              params = new FormData();
              images.forEach(function (image) {
                return params.append("images[]", image);
              });
              _context.prev = 2;
              _context.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/images/add/".concat(projectId), params);

            case 5:
              result = _context.sent;
              if (result.data) setImages(result.data);
              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](2);
              throw new Error(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 9]]);
    }));

    return function addProjectImages(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var deleteProjectImage = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
      var result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/images/delete/".concat(projectId), {
                id: id
              });

            case 3:
              result = _context2.sent;
              if (result.data) setImages(result.data);
              _context2.next = 10;
              break;

            case 7:
              _context2.prev = 7;
              _context2.t0 = _context2["catch"](0);
              throw new Error(_context2.t0);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 7]]);
    }));

    return function deleteProjectImage(_x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", _extends({
    className: "dropzone"
  }, getRootProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", getInputProps()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row row--equalized gutters-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__["AnimatePresence"], {
    initial: false
  }, images.map(function (_ref4, imageIndex) {
    var image = _ref4.image,
        title = _ref4.title,
        id = _ref4.id;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, _extends({
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
        deleteProjectImage(id);
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_2__["ReactSVG"], {
      wrapper: "svg",
      className: "icon icon--8 text-white mt-0",
      src: icons_close_svg__WEBPACK_IMPORTED_MODULE_5___default.a
    }))));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_4__["motion"].div, _extends({
    key: "add-image"
  }, Object(_animations__WEBPACK_IMPORTED_MODULE_7__["STAGGER_UP"])(images.length), {
    className: COLUMN_LAYOUT,
    layout: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DropzoneInner, {
    addProjectImages: addProjectImages,
    isParentDragActive: isDragActive
  })))));
}

var DropzoneInner = function DropzoneInner(_ref5) {
  var addProjectImages = _ref5.addProjectImages,
      isParentDragActive = _ref5.isParentDragActive;

  var _useDropzone2 = Object(react_dropzone__WEBPACK_IMPORTED_MODULE_3__["useDropzone"])({
    accept: "image/*",
    noDragEventsBubbling: true,
    onDrop: function onDrop(acceptedFiles) {
      return addProjectImages(acceptedFiles);
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_2__["ReactSVG"], {
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project */ "./assets/app/js/react/project-overview/components/project/index.js");
/* harmony import */ var _project_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-add */ "./assets/app/js/react/project-overview/components/project-add/index.js");
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../state */ "./assets/app/js/react/project-overview/state.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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


function ProjectOverview() {
  /* State */
  var _useRecoilState = Object(recoil__WEBPACK_IMPORTED_MODULE_3__["useRecoilState"])(_state__WEBPACK_IMPORTED_MODULE_7__["projectsState"]),
      _useRecoilState2 = _slicedToArray(_useRecoilState, 2),
      projects = _useRecoilState2[0],
      setProjects = _useRecoilState2[1];

  var _useRecoilState3 = Object(recoil__WEBPACK_IMPORTED_MODULE_3__["useRecoilState"])(_state__WEBPACK_IMPORTED_MODULE_7__["loadingState"]),
      _useRecoilState4 = _slicedToArray(_useRecoilState3, 2),
      loading = _useRecoilState4[0],
      setLoading = _useRecoilState4[1];

  var setUser = Object(recoil__WEBPACK_IMPORTED_MODULE_3__["useSetRecoilState"])(_state__WEBPACK_IMPORTED_MODULE_7__["userState"]);
  var isAdmin = Object(recoil__WEBPACK_IMPORTED_MODULE_3__["useRecoilValue"])(_state__WEBPACK_IMPORTED_MODULE_7__["adminState"]);
  /* Effects */

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return getProjects();
  }, []);

  var getProjects = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("/api/projects/get");

            case 3:
              result = _context.sent;

              if (result.data) {
                setProjects(result.data.projects);
                setUser(result.data.user);
              }

              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              throw new Error(_context.t0);

            case 10:
              _context.prev = 10;
              setLoading(null);
              return _context.finish(10);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7, 10, 13]]);
    }));

    return function getProjects() {
      return _ref.apply(this, arguments);
    };
  }();

  var editProject = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(formRef, id, callback) {
      var params, result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              params = new FormData(formRef.current);
              _context2.prev = 1;
              setLoading("edit_project");
              _context2.next = 5;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/projects/edit/".concat(id), params);

            case 5:
              result = _context2.sent;

              if (result.data.success) {
                getProjects();
                callback();
              }

              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](1);
              throw new Error(_context2.t0);

            case 12:
              _context2.prev = 12;
              setLoading(null);
              return _context2.finish(12);

            case 15:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[1, 9, 12, 15]]);
    }));

    return function editProject(_x, _x2, _x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  var deleteProject = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(id) {
      var result;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              setLoading("delete_project");
              _context3.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/projects/delete/".concat(id));

            case 4:
              result = _context3.sent;
              if (result.data.success) getProjects();
              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);
              throw new Error(_context3.t0);

            case 11:
              _context3.prev = 11;
              setLoading(null);
              return _context3.finish(11);

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8, 11, 14]]);
    }));

    return function deleteProject(_x4) {
      return _ref3.apply(this, arguments);
    };
  }();
  /* Render */


  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "row row--equalized gutters-5"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], {
    initial: false
  }, projects.map(function (project, projectIndex) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({}, Object(_common_animations__WEBPACK_IMPORTED_MODULE_6__["STAGGER_UP"])(projectIndex), {
      key: project.id,
      className: "col-12 col-md-6 col-lg-4 col-xl-3",
      layout: true
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_project__WEBPACK_IMPORTED_MODULE_4__["Project"], {
      project: project,
      editProject: editProject,
      deleteProject: deleteProject
    }));
  }), isAdmin && loading !== "initial" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({}, Object(_common_animations__WEBPACK_IMPORTED_MODULE_6__["STAGGER_UP"])(projects.length), {
    key: "add-project",
    className: "col-12 col-md-6 col-lg-4 col-xl-3",
    layout: true
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_project_add__WEBPACK_IMPORTED_MODULE_5__["ProjectAdd"], {
    getProjects: getProjects,
    editProject: editProject
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], null, !isAdmin && loading !== "initial" && projects.length === 0 && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].p, _extends({}, Object(_common_animations__WEBPACK_IMPORTED_MODULE_6__["STAGGER_UP"])(), {
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
    onClick: function onClick() {
      return toggleModal("close");
    },
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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "./node_modules/framer-motion/dist/framer-motion.es.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modals */ "./assets/app/js/react/project-overview/components/modals/index.js");
/* harmony import */ var icons_add_project_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/add_project.svg */ "./assets/app/img/icons/add_project.svg");
/* harmony import */ var icons_add_project_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_add_project_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-svg */ "./node_modules/react-svg/dist/react-svg.esm.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/* Packages */



/* Components */


/* Assets */



function ProjectAdd(_ref) {
  var getProjects = _ref.getProjects,
      editProject = _ref.editProject;

  /* State */
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      modalOpen = _useState2[0],
      setModalOpen = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      _useState4 = _slicedToArray(_useState3, 2),
      projectId = _useState4[0],
      setProjectId = _useState4[1];
  /* Callbacks */


  var addProject = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              toggleModal(true);
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("/api/projects/add");

            case 4:
              result = _context.sent;
              if (result.data) setProjectId(result.data.id);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              throw new Error(_context.t0);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));

    return function addProject() {
      return _ref2.apply(this, arguments);
    };
  }();

  var toggleModal = function toggleModal(event) {
    setModalOpen(!modalOpen);
    if (event === "close") getProjects();
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
    onClick: addProject
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "btn-text d-flex flex-column align-items-center text-white text-muted--40"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_5__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--48",
    src: icons_add_project_svg__WEBPACK_IMPORTED_MODULE_4___default.a
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "text--sm mt-1"
  }, "Add more projects")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__["AnimatePresence"], null, modalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modals__WEBPACK_IMPORTED_MODULE_3__["ProjectModal"], _extends({
    toggleModal: toggleModal,
    projectId: projectId
  }, {
    onSubmit: function onSubmit() {
      for (var _len = arguments.length, props = new Array(_len), _key = 0; _key < _len; _key++) {
        props[_key] = arguments[_key];
      }

      return editProject.apply(void 0, props.concat([projectId, toggleModal]));
    }
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
  var project = _ref.project,
      editProject = _ref.editProject,
      deleteProject = _ref.deleteProject;

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
    deleteProject: deleteProject,
    editProject: editProject,
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
/* harmony import */ var icons_edit_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! icons/edit.svg */ "./assets/app/img/icons/edit.svg");
/* harmony import */ var icons_edit_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(icons_edit_svg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var icons_delete_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! icons/delete.svg */ "./assets/app/img/icons/delete.svg");
/* harmony import */ var icons_delete_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(icons_delete_svg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! icons/close.svg */ "./assets/app/img/icons/close.svg");
/* harmony import */ var icons_close_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(icons_close_svg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/animations */ "./assets/app/js/react/common/animations.js");
/* harmony import */ var _modals__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modals */ "./assets/app/js/react/project-overview/components/modals/index.js");
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


function ProjectMenu(_ref) {
  var project = _ref.project,
      deleteProject = _ref.deleteProject,
      editProject = _ref.editProject,
      modalOpen = _ref.modalOpen,
      toggleModal = _ref.toggleModal;

  /* Callbacks */
  var toggleMenu = function toggleMenu() {
    return setMenuOpen(!menuOpen);
  };
  /* Constants */


  var MENU_ITEMS = [{
    name: "edit",
    icon: icons_edit_svg__WEBPACK_IMPORTED_MODULE_3___default.a,
    callback: toggleModal
  }, {
    name: "delete",
    icon: icons_delete_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    callback: deleteProject
  }];
  /* State */

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      menuOpen = _useState2[0],
      setMenuOpen = _useState2[1];
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
  }, _common_animations__WEBPACK_IMPORTED_MODULE_6__["SCALE_FADE"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_2__["ReactSVG"], {
    wrapper: "svg",
    className: "icon icon--14 text-white",
    src: icons_close_svg__WEBPACK_IMPORTED_MODULE_5___default.a
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].div, _extends({
    key: "dots",
    className: "menu__dots"
  }, _common_animations__WEBPACK_IMPORTED_MODULE_6__["SCALE_FADE"]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "menu__dot"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "menu__dot"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "menu__dot"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, menuOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "menu__body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    className: "menu__list list"
  }, MENU_ITEMS.map(function (_ref2, itemIndex) {
    var name = _ref2.name,
        icon = _ref2.icon,
        callback = _ref2.callback;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["motion"].li, _extends({
      key: name,
      className: "list__item mr-2"
    }, Object(_common_animations__WEBPACK_IMPORTED_MODULE_6__["STAGGER_LEFT"])((itemIndex + 1) * -1 + MENU_ITEMS.length + 1)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      className: "btn btn-link text-white d-flex align-items-center",
      onClick: function onClick(event) {
        event.preventDefault();
        callback(project.id);
        toggleMenu();
      },
      type: "button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_svg__WEBPACK_IMPORTED_MODULE_2__["ReactSVG"], {
      wrapper: "svg",
      className: "icon icon--16 text-white mr-2",
      src: icon
    })));
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_1__["AnimatePresence"], null, modalOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_modals__WEBPACK_IMPORTED_MODULE_7__["ProjectModal"], _extends({}, _objectSpread({
    toggleModal: toggleModal,
    projectId: project.id
  }, project), {
    onSubmit: function onSubmit(formRef) {
      return editProject(formRef, project.id, toggleModal);
    }
  })))));
}

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
/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ "./node_modules/recoil/es/recoil.js");
/* harmony import */ var _components_ProjectOverview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ProjectOverview */ "./assets/app/js/react/project-overview/components/ProjectOverview.jsx");
/* Packages */



/* Components */


/* Render */

var projectOverviewNode = document.getElementById("projectOverview");

if (projectOverviewNode !== null) {
  Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["render"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(recoil__WEBPACK_IMPORTED_MODULE_2__["RecoilRoot"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ProjectOverview__WEBPACK_IMPORTED_MODULE_3__["default"], projectOverviewNode.dataset)), projectOverviewNode);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvYWRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9hZGRfaW1hZ2Uuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvaW1nL2ljb25zL2FkZF9wcm9qZWN0LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9jbG9zZS5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9pbWcvaWNvbnMvZGVsZXRlLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9lZGl0LnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2ltZy9pY29ucy9zdGFyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9vYmplY3RmaXQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vQm94LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbW1vbi9Ecm9wem9uZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9jb21tb24vTW9kYWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL1VzZXJzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3JlYWN0L2NvbW1vbi9hbmltYXRpb25zLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvY29tbW9uL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcHJvamVjdC1vdmVydmlldy9jb21wb25lbnRzL1Byb2plY3RPdmVydmlldy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvbW9kYWxzL1Byb2plY3RNb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvbW9kYWxzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcHJvamVjdC1vdmVydmlldy9jb21wb25lbnRzL3Byb2plY3QtYWRkL1Byb2plY3RBZGQuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcHJvamVjdC1vdmVydmlldy9jb21wb25lbnRzL3Byb2plY3QtYWRkL2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcHJvamVjdC1vdmVydmlldy9jb21wb25lbnRzL3Byb2plY3QvUHJvamVjdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2NvbXBvbmVudHMvcHJvamVjdC9Qcm9qZWN0SW1hZ2UuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcHJvamVjdC1vdmVydmlldy9jb21wb25lbnRzL3Byb2plY3QvUHJvamVjdE1lbnUuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcHJvamVjdC1vdmVydmlldy9jb21wb25lbnRzL3Byb2plY3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9qcy9yZWFjdC9wcm9qZWN0LW92ZXJ2aWV3L2luZGV4LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9hcHAvanMvcmVhY3QvcHJvamVjdC1vdmVydmlldy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwL2pzL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2FwcC9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyIkIiwib2JqZWN0Rml0SW1hZ2VzIiwiQm94IiwiaGVhZGVyIiwiYm94T3BlbiIsInRvZ2dsZUJveCIsImNoaWxkcmVuIiwiY3JlYXRlUG9ydGFsIiwiRkFERV9JTiIsImNsb3NlSWNvbiIsImRvY3VtZW50IiwiYm9keSIsIkRyb3B6b25lIiwicHJvamVjdElkIiwicHJvamVjdEltYWdlcyIsIkNPTFVNTl9MQVlPVVQiLCJ1c2VTdGF0ZSIsImltYWdlcyIsInNldEltYWdlcyIsInVzZURyb3B6b25lIiwiYWNjZXB0Iiwibm9DbGljayIsIm9uRHJvcCIsImFjY2VwdGVkRmlsZXMiLCJhZGRQcm9qZWN0SW1hZ2VzIiwiZ2V0Um9vdFByb3BzIiwiZ2V0SW5wdXRQcm9wcyIsImlzRHJhZ0FjdGl2ZSIsInBhcmFtcyIsIkZvcm1EYXRhIiwiZm9yRWFjaCIsImltYWdlIiwiYXBwZW5kIiwiYXhpb3MiLCJwb3N0IiwicmVzdWx0IiwiZGF0YSIsIkVycm9yIiwiZGVsZXRlUHJvamVjdEltYWdlIiwiaWQiLCJtYXAiLCJpbWFnZUluZGV4IiwidGl0bGUiLCJTVEFHR0VSX1VQIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJsZW5ndGgiLCJpc1BhcmVudERyYWdBY3RpdmUiLCJEcm9wem9uZUlubmVyIiwibm9EcmFnRXZlbnRzQnViYmxpbmciLCJhZGRJbWFnZUljb24iLCJNb2RhbCIsInRvZ2dsZU1vZGFsIiwiZG9tRWxlbWVudCIsInZhcmlhbnQiLCJyZW5kZXIiLCJUUkFOU0ZPUk1fVVAiLCJVc2VycyIsInVzZXJzIiwic2hvd0FkZFVzZXIiLCJ1c2VySW5kZXgiLCJyb2xlcyIsInJlc3QiLCJpbmNsdWRlcyIsInN0YXJJY29uIiwiVXNlckltYWdlIiwidXNlcm5hbWUiLCJ1c2VyQ29sb3IiLCJ1c2VySW5pdGlhbHMiLCJzcGxpdCIsIndvcmQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJVc2VyQWRkIiwic2V0Qm94T3BlbiIsImZvcm1SZWYiLCJ1c2VSZWYiLCJ1cGRhdGVOZXdVc2VycyIsInByZXZlbnREZWZhdWx0IiwiYWRkSWNvbiIsIkVBU0UiLCJpbml0aWFsIiwib3BhY2l0eSIsImFuaW1hdGUiLCJleGl0IiwidHJhbnNpdGlvbiIsImVhc2UiLCJ5IiwiU0NBTEVfRkFERSIsInNjYWxlIiwiZHVyYXRpb24iLCJpbmRleCIsImRlbGF5IiwiU1RBR0dFUl9MRUZUIiwieCIsIlByb2plY3RPdmVydmlldyIsInVzZVJlY29pbFN0YXRlIiwicHJvamVjdHNTdGF0ZSIsInByb2plY3RzIiwic2V0UHJvamVjdHMiLCJsb2FkaW5nU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInNldFVzZXIiLCJ1c2VTZXRSZWNvaWxTdGF0ZSIsInVzZXJTdGF0ZSIsImlzQWRtaW4iLCJ1c2VSZWNvaWxWYWx1ZSIsImFkbWluU3RhdGUiLCJ1c2VFZmZlY3QiLCJnZXRQcm9qZWN0cyIsImdldCIsInVzZXIiLCJlZGl0UHJvamVjdCIsImNhbGxiYWNrIiwiY3VycmVudCIsInN1Y2Nlc3MiLCJkZWxldGVQcm9qZWN0IiwicHJvamVjdCIsInByb2plY3RJbmRleCIsIlByb2plY3RNb2RhbCIsIm9uU3VibWl0IiwiZGVzY3JpcHRpb24iLCJ0aXRsZVBsYWNlaG9sZGVyIiwiZGVzY3JpcHRpb25QbGFjZWhvbGRlciIsInByb2plY3RUaXRsZSIsInNldFByb2plY3RUaXRsZSIsInByb2plY3REZXNjcmlwdGlvbiIsInNldFByb2plY3REZXNjcmlwdGlvbiIsInZhbHVlIiwidGFyZ2V0IiwiUHJvamVjdEFkZCIsIm1vZGFsT3BlbiIsInNldE1vZGFsT3BlbiIsInNldFByb2plY3RJZCIsImFkZFByb2plY3QiLCJtaW5IZWlnaHQiLCJhZGRQcm9qZWN0SWNvbiIsInByb3BzIiwiUHJvamVjdCIsInNsdWciLCJQcm9qZWN0SW1hZ2UiLCJzbGljZSIsIlByb2plY3RNZW51IiwidG9nZ2xlTWVudSIsInNldE1lbnVPcGVuIiwibWVudU9wZW4iLCJNRU5VX0lURU1TIiwibmFtZSIsImljb24iLCJlZGl0SWNvbiIsImRlbGV0ZUljb24iLCJpdGVtSW5kZXgiLCJwcm9qZWN0T3ZlcnZpZXdOb2RlIiwiZ2V0RWxlbWVudEJ5SWQiLCJkYXRhc2V0IiwiYXRvbSIsImtleSIsImRlZmF1bHQiLCJzdWNjZXNzU3RhdGUiLCJzZWxlY3RvciIsInBhcnNsZXlDb25maWciLCJlcnJvckNsYXNzIiwiZXhjbHVkZWQiLCJzdWNjZXNzQ2xhc3MiLCJQYXJzbGV5IiwiYWRkTWVzc2FnZXMiLCJtaW5jaGVjayIsIm1heGNoZWNrIiwiY2hlY2siLCJzZXRMb2NhbGUiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwicGFyc2xleSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxpQkFBaUIsNEJBQTRCO1FBQzdDO1FBQ0E7UUFDQSxrQkFBa0IsMkJBQTJCO1FBQzdDO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztR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QkFBYTtBQUFBLFFBQVZBLElBQVUsUUFBVkEsR0FBVTs7QUFDZCxRQUFNQyxJQUFJLEdBQUdELElBQUcsQ0FBQ04sU0FBRCxDQUFoQjs7QUFFQSxRQUFJTyxJQUFKLGFBQUlBLElBQUosZUFBSUEsSUFBSSxDQUFFbEQsS0FBVixFQUFpQjtBQUNiLGFBQU9rRCxJQUFJLENBQUNsRCxLQUFMLENBQVdFLFFBQVgsQ0FBb0IsWUFBcEIsQ0FBUDtBQUNIOztBQUVELFdBQU8sS0FBUDtBQUNIO0FBVnVCLENBQUQsQ0FBM0I7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFFQSxJQUFJaUcsYUFBYSxHQUFHO0FBQ2hCQyxZQUFVLEVBQUUsVUFESTtBQUVoQkMsVUFBUSxFQUFFLG9HQUZNO0FBR2hCQyxjQUFZLEVBQUU7QUFIRSxDQUFwQjtBQU1BQyxnREFBTyxDQUFDQyxXQUFSLENBQW9CLElBQXBCLEVBQTBCO0FBQ3RCQyxVQUFRLEVBQUUsa0NBRFk7QUFFdEJDLFVBQVEsRUFBRSxpQ0FGWTtBQUd0QkMsT0FBSyxFQUFFO0FBSGUsQ0FBMUIsRUFJR0MsU0FKSCxDQUlhL0osUUFBUSxDQUFDZ0ssZUFBVCxDQUF5QkMsSUFKdEM7QUFNQTNLLDZDQUFDLENBQUMsd0JBQUQsQ0FBRCxDQUE0QjRLLE9BQTVCLENBQW9DWixhQUFwQyxFOzs7Ozs7Ozs7OztBQ2pCQSx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuXG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcIm1haW5cIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9idWlsZC9hcHAvXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vYXNzZXRzL2FwcC9qcy9tYWluLmpzXCIsXCJ2ZW5kb3Jzfm1haW5cIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYWRkLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9hZGRfaW1hZ2Uuc3ZnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2FkZF9wcm9qZWN0LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9jbG9zZS5zdmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvZGVsZXRlLnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9lZGl0LnN2Z1wiOyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9zdGFyLnN2Z1wiOyIsIi8vIENTU1xuaW1wb3J0ICcuLi9zY3NzL21haW4uc2Nzcyc7XG5cbi8vIFBvbGx5Zmlsc1xuaW1wb3J0ICdyZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUnO1xuXG4vLyBDb3JlXG5pbXBvcnQgJy4vdmFsaWRhdGlvbic7XG5cbi8vIFBsdWdpbnNcbmltcG9ydCAnLi9vYmplY3RmaXQnO1xuXG5cbi8vIFJlYWN0XG5pbXBvcnQgJy4vcmVhY3QvcHJvamVjdC1vdmVydmlldydcbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgb2JqZWN0Rml0SW1hZ2VzIGZyb20gJ29iamVjdC1maXQtaW1hZ2VzJztcblxuJChmdW5jdGlvbigpIHtcbiAgICBvYmplY3RGaXRJbWFnZXMoKTtcbn0pO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgRkFERV9JTiB9IGZyb20gXCIuL2FuaW1hdGlvbnNcIjtcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSBcInJlYWN0LXN2Z1wiO1xuXG4vKiBBc3NldHMgKi9cbmltcG9ydCBjbG9zZUljb24gZnJvbSBcImljb25zL2Nsb3NlLnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb3goeyBoZWFkZXIsIGJveE9wZW4sIHRvZ2dsZUJveCwgY2hpbGRyZW4gfSkge1xuICAgIHJldHVybiBjcmVhdGVQb3J0YWwoXG4gICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICB7Ym94T3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYga2V5PVwiYm94LW92ZXJsYXlcIiBjbGFzc05hbWU9XCJib3gtb3ZlcmxheVwiIG9uQ2xpY2s9e3RvZ2dsZUJveH0gey4uLkZBREVfSU59IC8+XG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGtleT1cImJveFwiIGNsYXNzTmFtZT1cImJveCBib3JkZXIgcC01XCIgey4uLkZBREVfSU59PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3hfX2hlYWRlciBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBtYi0wXCI+e2hlYWRlcn08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19jbG9zZSBidG4gYnRuLWxpbmsgbWwtYXV0b1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZUJveH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS0xNFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveF9fYm9keSBkLWZsZXggbXQtNFwiPntjaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+LFxuICAgICAgICBkb2N1bWVudC5ib2R5XG4gICAgKTtcbn1cbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSBcInJlYWN0LXN2Z1wiO1xuaW1wb3J0IHsgdXNlRHJvcHpvbmUgfSBmcm9tIFwicmVhY3QtZHJvcHpvbmVcIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gXCJpY29ucy9jbG9zZS5zdmdcIjtcbmltcG9ydCBhZGRJbWFnZUljb24gZnJvbSBcImljb25zL2FkZF9pbWFnZS5zdmdcIjtcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU1RBR0dFUl9VUCB9IGZyb20gXCIuL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcHpvbmUoeyBwcm9qZWN0SWQsIHByb2plY3RJbWFnZXMgfSkge1xuICAgIC8qIENvbnN0YW50cyAqL1xuICAgIGNvbnN0IENPTFVNTl9MQVlPVVQgPSBcImNvbC0xMiBjb2wtbWQtNiBjb2wtbGctNCBjb2wteGwtM1wiO1xuXG4gICAgLyogU3RhdGUgKi9cbiAgICBjb25zdCBbaW1hZ2VzLCBzZXRJbWFnZXNdID0gdXNlU3RhdGUocHJvamVjdEltYWdlcyk7XG5cbiAgICAvKiBIb29rcyAqL1xuICAgIGNvbnN0IHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzLCBpc0RyYWdBY3RpdmUgfSA9IHVzZURyb3B6b25lKHtcbiAgICAgICAgYWNjZXB0OiBcImltYWdlLypcIixcbiAgICAgICAgbm9DbGljazogdHJ1ZSxcbiAgICAgICAgb25Ecm9wOiAoYWNjZXB0ZWRGaWxlcykgPT4gYWRkUHJvamVjdEltYWdlcyhhY2NlcHRlZEZpbGVzKSxcbiAgICB9KTtcblxuICAgIC8qIENhbGxiYWNrcyAqL1xuICAgIGNvbnN0IGFkZFByb2plY3RJbWFnZXMgPSBhc3luYyAoaW1hZ2VzKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHBhcmFtcy5hcHBlbmQoXCJpbWFnZXNbXVwiLCBpbWFnZSkpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL2ltYWdlcy9hZGQvJHtwcm9qZWN0SWR9YCwgcGFyYW1zKTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhKSBzZXRJbWFnZXMocmVzdWx0LmRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCBkZWxldGVQcm9qZWN0SW1hZ2UgPSBhc3luYyAoaWQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGF4aW9zLnBvc3QoYC9hcGkvaW1hZ2VzL2RlbGV0ZS8ke3Byb2plY3RJZH1gLCB7IGlkIH0pO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEpIHNldEltYWdlcyhyZXN1bHQuZGF0YSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcHpvbmVcIiB7Li4uZ2V0Um9vdFByb3BzKCl9PlxuICAgICAgICAgICAgPGlucHV0IHsuLi5nZXRJbnB1dFByb3BzKCl9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyByb3ctLWVxdWFsaXplZCBndXR0ZXJzLTVcIj5cbiAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGluaXRpYWw9e2ZhbHNlfT5cbiAgICAgICAgICAgICAgICAgICAge2ltYWdlcy5tYXAoKHsgaW1hZ2UsIHRpdGxlLCBpZCB9LCBpbWFnZUluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiBsYXlvdXQgey4uLlNUQUdHRVJfVVAoaW1hZ2VJbmRleCl9IGNsYXNzTmFtZT17Q09MVU1OX0xBWU9VVH0ga2V5PXtpZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZV9fY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiZHJvcHpvbmVfX2ltYWdlIGltZy1mbHVpZFwiIHNyYz17aW1hZ2V9IGFsdD17dGl0bGV9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIGRyb3B6b25lX19pbWFnZS1kZWxldGUgcC0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVByb2plY3RJbWFnZShpZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS04IHRleHQtd2hpdGUgbXQtMFwiIHNyYz17Y2xvc2VJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDxtb3Rpb24uZGl2IGtleT1cImFkZC1pbWFnZVwiIHsuLi5TVEFHR0VSX1VQKGltYWdlcy5sZW5ndGgpfSBjbGFzc05hbWU9e0NPTFVNTl9MQVlPVVR9IGxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wem9uZUlubmVyIHsuLi57IGFkZFByb2plY3RJbWFnZXMsIGlzUGFyZW50RHJhZ0FjdGl2ZTogaXNEcmFnQWN0aXZlIH19IC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jb25zdCBEcm9wem9uZUlubmVyID0gKHsgYWRkUHJvamVjdEltYWdlcywgaXNQYXJlbnREcmFnQWN0aXZlIH0pID0+IHtcbiAgICBjb25zdCB7IGdldFJvb3RQcm9wcywgZ2V0SW5wdXRQcm9wcywgaXNEcmFnQWN0aXZlIH0gPSB1c2VEcm9wem9uZSh7XG4gICAgICAgIGFjY2VwdDogXCJpbWFnZS8qXCIsXG4gICAgICAgIG5vRHJhZ0V2ZW50c0J1YmJsaW5nOiB0cnVlLFxuICAgICAgICBvbkRyb3A6IChhY2NlcHRlZEZpbGVzKSA9PiBhZGRQcm9qZWN0SW1hZ2VzKGFjY2VwdGVkRmlsZXMpLFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZVwiIHsuLi5nZXRSb290UHJvcHMoKX0+XG4gICAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cbiAgICAgICAgICAgIDxhcnRpY2xlXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHJvcHpvbmVfX2NvbnRhaW5lciBjYXJkIGNhcmQtLWxpbmsgJHtcbiAgICAgICAgICAgICAgICAgICAgKGlzRHJhZ0FjdGl2ZSB8fCBpc1BhcmVudERyYWdBY3RpdmUpICYmIFwiaXMtcHVsc2luZ1wiXG4gICAgICAgICAgICAgICAgfSBjYXJkLS10cmFuc3BhcmVudCBoLTEwMCBtYi0wYH0+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHAtMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnRuLXRleHQgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLWNlbnRlciB0ZXh0LXdoaXRlIHRleHQtbXV0ZWQtLTQwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tNDhcIiBzcmM9e2FkZEltYWdlSWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtLXNtIG10LTFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXNEcmFnQWN0aXZlIHx8IGlzUGFyZW50RHJhZ0FjdGl2ZSA/IFwiRHJvcCB0aGUgaW1hZ2VzXCIgOiBcIkFkZCBzb21lIGltYWdlc1wifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGNyZWF0ZVBvcnRhbCB9IGZyb20gXCJyZWFjdC1kb21cIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbi8qIEFuaW1hdGlvbnMgKi9cbmltcG9ydCB7IEZBREVfSU4sIFRSQU5TRk9STV9VUCB9IGZyb20gXCIuL2FuaW1hdGlvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTW9kYWwoeyB0b2dnbGVNb2RhbCwgY2hpbGRyZW4sIGRvbUVsZW1lbnQsIHZhcmlhbnQgPSBcImRlZmF1bHRcIiB9KSB7XG4gICAgY29uc3QgcmVuZGVyID0gKCkgPT4gKFxuICAgICAgICA8bW90aW9uLmRpdiBrZXk9XCJjdXN0b20tbW9kYWxcIiBjbGFzc05hbWU9e2BjdXN0b20tbW9kYWwgY3VzdG9tLW1vZGFsLS0ke3ZhcmlhbnR9YH0gey4uLkZBREVfSU59PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX292ZXJsYXlcIiBvbkNsaWNrPXt0b2dnbGVNb2RhbH0gLz5cbiAgICAgICAgICAgIDxtb3Rpb24uYXJ0aWNsZSBrZXk9XCJjdXN0b20tbW9kYWxfX2NvbnRlbnRcIiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2NvbnRlbnRcIiB7Li4uVFJBTlNGT1JNX1VQfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBweC0wXCI+e2NoaWxkcmVufTwvZGl2PlxuICAgICAgICAgICAgPC9tb3Rpb24uYXJ0aWNsZT5cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICk7XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICBpZiAoZG9tRWxlbWVudCkge1xuICAgICAgICByZXR1cm4gY3JlYXRlUG9ydGFsKHJlbmRlcigpLCBkb21FbGVtZW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVuZGVyKCk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSBcInJlYWN0LXN2Z1wiO1xuXG4vKiBBc3N0cyAqL1xuaW1wb3J0IHN0YXJJY29uIGZyb20gXCJpY29ucy9zdGFyLnN2Z1wiO1xuaW1wb3J0IGFkZEljb24gZnJvbSBcImljb25zL2FkZC5zdmdcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IEJveCBmcm9tIFwiLi9Cb3hcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVXNlcnMoeyB1c2VycywgdmFyaWFudCA9IFwiZGVmYXVsdFwiLCBzaG93QWRkVXNlciA9IGZhbHNlIH0pIHtcbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTJcIj5cbiAgICAgICAgICAgIHt1c2Vycy5tYXAoKHsgcm9sZXMsIC4uLnJlc3QgfSwgdXNlckluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3VzZXJJbmRleH0gY2xhc3NOYW1lPVwiY29sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdXNlciB1c2VyLS0ke3ZhcmlhbnR9YH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3JvbGVzLmluY2x1ZGVzKFwiUk9MRV9BRE1JTlwiKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcl9fbGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3cmFwcGVyPVwic3ZnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tLTYgdGV4dC10ZXJ0aWFyeSBtdC0wXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3N0YXJJY29ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlckltYWdlIHsuLi5yZXN0fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIHtzaG93QWRkVXNlciAmJiA8VXNlckFkZCB7Li4ueyB2YXJpYW50IH19IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuXG5jb25zdCBVc2VySW1hZ2UgPSAoeyB1c2VybmFtZSwgaW1hZ2UsIHVzZXJDb2xvciB9KSA9PiB7XG4gICAgY29uc3QgdXNlckluaXRpYWxzID0gdXNlcm5hbWUuc3BsaXQoXCIgXCIpLm1hcCgod29yZCkgPT4gd29yZFswXSk7XG5cbiAgICBpZiAoaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidXNlcl9faW1hZ2UgaW1nLWZsdWlkIHJvdW5kZWQtY2lyY2xlXCIgc3JjPXtpbWFnZX0gc3JjU2V0PXtgJHtpbWFnZX0gMnhgfSBhbHQ9e3VzZXJuYW1lfSAvPlxuICAgICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVzZXJfX2ltYWdlIHVzZXJfX2ltYWdlLS1pbml0aWFscyByb3VuZGVkLWNpcmNsZVwiIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogdXNlckNvbG9yIH19PlxuICAgICAgICAgICAge3VzZXJJbml0aWFsc31cbiAgICAgICAgPC9zcGFuPlxuICAgICk7XG59O1xuXG5jb25zdCBVc2VyQWRkID0gKHsgdmFyaWFudCB9KSA9PiB7XG4gICAgLyogU3RhdGUgKi9cbiAgICBjb25zdCBbYm94T3Blbiwgc2V0Qm94T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvKiBSZWZzICovXG4gICAgY29uc3QgZm9ybVJlZiA9IHVzZVJlZigpO1xuXG4gICAgLyogQ2FsbGJhY2tzICovXG4gICAgY29uc3QgdG9nZ2xlQm94ID0gKCkgPT4gc2V0Qm94T3BlbighYm94T3Blbik7XG5cbiAgICBjb25zdCB1cGRhdGVOZXdVc2VycyA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuICAgIH07XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17YGJ0biBidG4tbGluayB1c2VyIHVzZXItLSR7dmFyaWFudH0gdXNlci0tYWRkYH0gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZUJveH0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidXNlcl9faW1hZ2UgdXNlcl9faW1hZ2UtLWluaXRpYWxzIHJvdW5kZWQtY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWRyB3cmFwcGVyPVwic3ZnXCIgY2xhc3NOYW1lPVwiaWNvbiBpY29uLS04IHRleHQtd2hpdGUgbXQtMFwiIHNyYz17YWRkSWNvbn0gLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxCb3ggaGVhZGVyPVwiQWRkIHVzZXJzXCIgey4uLnsgYm94T3BlbiwgdG9nZ2xlQm94IH19PlxuICAgICAgICAgICAgICAgIDxmb3JtIHJlZj17Zm9ybVJlZn0gb25TdWJtaXQ9e3VwZGF0ZU5ld1VzZXJzfT5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInNyLW9ubHlcIiBodG1sRm9yPVwiYWRkVXNlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWRkIHVzZXJzXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc21cIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJhZGRVc2Vyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmV3VXNlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInVzZXJAZG9tYWluLm5sXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvRm9jdXNcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn07XG4iLCJjb25zdCBFQVNFID0gWzAuNjUsIDAsIDAuMzUsIDFdO1xuXG5jb25zdCBGQURFX0lOID0ge1xuICAgIGluaXRpYWw6IHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICB9LFxuICAgIGFuaW1hdGU6IHtcbiAgICAgICAgb3BhY2l0eTogMSxcbiAgICB9LFxuICAgIGV4aXQ6IHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICB9LFxuICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgZWFzZTogRUFTRSxcbiAgICB9LFxufTtcblxuY29uc3QgVFJBTlNGT1JNX1VQID0ge1xuICAgIGluaXRpYWw6IHtcbiAgICAgICAgeTogXCIxMDAlXCIsXG4gICAgfSxcbiAgICBhbmltYXRlOiB7XG4gICAgICAgIHk6IDAsXG4gICAgfSxcbiAgICBleGl0OiB7XG4gICAgICAgIHk6IFwiMTAwJVwiLFxuICAgIH0sXG4gICAgdHJhbnNpdGlvbjoge1xuICAgICAgICBlYXNlOiBFQVNFLFxuICAgIH0sXG59O1xuXG5jb25zdCBTQ0FMRV9GQURFID0ge1xuICAgIGluaXRpYWw6IHtcbiAgICAgICAgc2NhbGU6IDAuNSxcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICB9LFxuICAgIGFuaW1hdGU6IHtcbiAgICAgICAgc2NhbGU6IDEsXG4gICAgICAgIG9wYWNpdHk6IDEsXG4gICAgfSxcbiAgICBleGl0OiB7XG4gICAgICAgIHNjYWxlOiAwLjUsXG4gICAgICAgIG9wYWNpdHk6IDAsXG4gICAgfSxcbiAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgIGVhc2U6IEVBU0UsXG4gICAgICAgIGR1cmF0aW9uOiAwLjEsXG4gICAgfSxcbn07XG5cbmNvbnN0IFNUQUdHRVJfVVAgPSAoaW5kZXggPSAwKSA9PiAoe1xuICAgIGluaXRpYWw6IHsgb3BhY2l0eTogMCwgeTogMjUgfSxcbiAgICBhbmltYXRlOiB7IG9wYWNpdHk6IDEsIHk6IDAsIHRyYW5zaXRpb246IHsgZWFzZTogRUFTRSwgZGVsYXk6IGluZGV4ICogMC4wMzUgfSB9LFxuICAgIGV4aXQ6IHsgb3BhY2l0eTogMCwgeTogLTI1LCB0cmFuc2l0aW9uOiB7IGVhc2U6IEVBU0UgfSB9LFxufSk7XG5cbmNvbnN0IFNUQUdHRVJfTEVGVCA9IChpbmRleCA9IDApID0+ICh7XG4gICAgaW5pdGlhbDogeyBvcGFjaXR5OiAwLCB4OiAxMCB9LFxuICAgIGFuaW1hdGU6IHsgb3BhY2l0eTogMSwgeDogMCwgdHJhbnNpdGlvbjogeyBlYXNlOiBFQVNFLCBkZWxheTogaW5kZXggKiAwLjAzNSB9IH0sXG4gICAgZXhpdDogeyBvcGFjaXR5OiAwLCB4OiAxMCwgdHJhbnNpdGlvbjogeyBlYXNlOiBFQVNFIH0gfSxcbn0pO1xuXG5leHBvcnQgeyBGQURFX0lOLCBUUkFOU0ZPUk1fVVAsIFNDQUxFX0ZBREUsIFNUQUdHRVJfVVAsIFNUQUdHRVJfTEVGVCB9O1xuIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBEcm9wem9uZSB9IGZyb20gXCIuL0Ryb3B6b25lXCI7XG5leHBvcnQgeyBkZWZhdWx0IGFzIE1vZGFsIH0gZnJvbSBcIi4vTW9kYWxcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgVXNlcnMgfSBmcm9tIFwiLi9Vc2Vyc1wiO1xuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlLCB1c2VSZWNvaWxWYWx1ZSwgdXNlU2V0UmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5cbi8qIENvbXBvbmVudHMgKi9cbmltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5pbXBvcnQgeyBQcm9qZWN0QWRkIH0gZnJvbSBcIi4vcHJvamVjdC1hZGRcIjtcblxuLyogQW5pbWF0aW9ucyAqL1xuaW1wb3J0IHsgU1RBR0dFUl9VUCB9IGZyb20gXCIuLi8uLi9jb21tb24vYW5pbWF0aW9uc1wiO1xuXG4vKiBHbG9iYWwgc3RhdGUgKi9cbmltcG9ydCB7IGFkbWluU3RhdGUsIGxvYWRpbmdTdGF0ZSwgcHJvamVjdHNTdGF0ZSwgdXNlclN0YXRlIH0gZnJvbSBcIi4uL3N0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RPdmVydmlldygpIHtcbiAgICAvKiBTdGF0ZSAqL1xuICAgIGNvbnN0IFtwcm9qZWN0cywgc2V0UHJvamVjdHNdID0gdXNlUmVjb2lsU3RhdGUocHJvamVjdHNTdGF0ZSk7XG4gICAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlUmVjb2lsU3RhdGUobG9hZGluZ1N0YXRlKTtcbiAgICBjb25zdCBzZXRVc2VyID0gdXNlU2V0UmVjb2lsU3RhdGUodXNlclN0YXRlKTtcbiAgICBjb25zdCBpc0FkbWluID0gdXNlUmVjb2lsVmFsdWUoYWRtaW5TdGF0ZSk7XG5cbiAgICAvKiBFZmZlY3RzICovXG4gICAgdXNlRWZmZWN0KCgpID0+IGdldFByb2plY3RzKCksIFtdKTtcblxuICAgIGNvbnN0IGdldFByb2plY3RzID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MuZ2V0KFwiL2FwaS9wcm9qZWN0cy9nZXRcIik7XG5cbiAgICAgICAgICAgIGlmIChyZXN1bHQuZGF0YSkge1xuICAgICAgICAgICAgICAgIHNldFByb2plY3RzKHJlc3VsdC5kYXRhLnByb2plY3RzKTtcbiAgICAgICAgICAgICAgICBzZXRVc2VyKHJlc3VsdC5kYXRhLnVzZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcobnVsbCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZWRpdFByb2plY3QgPSBhc3luYyAoZm9ybVJlZiwgaWQsIGNhbGxiYWNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcmFtcyA9IG5ldyBGb3JtRGF0YShmb3JtUmVmLmN1cnJlbnQpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKFwiZWRpdF9wcm9qZWN0XCIpO1xuXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBheGlvcy5wb3N0KGAvYXBpL3Byb2plY3RzL2VkaXQvJHtpZH1gLCBwYXJhbXMpO1xuXG4gICAgICAgICAgICBpZiAocmVzdWx0LmRhdGEuc3VjY2Vzcykge1xuICAgICAgICAgICAgICAgIGdldFByb2plY3RzKCk7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvcik7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICBzZXRMb2FkaW5nKG51bGwpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBhc3luYyAoaWQpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHNldExvYWRpbmcoXCJkZWxldGVfcHJvamVjdFwiKTtcblxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChgL2FwaS9wcm9qZWN0cy9kZWxldGUvJHtpZH1gKTtcblxuICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhLnN1Y2Nlc3MpIGdldFByb2plY3RzKCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xuICAgICAgICB9IGZpbmFsbHkge1xuICAgICAgICAgICAgc2V0TG9hZGluZyhudWxsKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcm93LS1lcXVhbGl6ZWQgZ3V0dGVycy01XCI+XG4gICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZSBpbml0aWFsPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QsIHByb2plY3RJbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uU1RBR0dFUl9VUChwcm9qZWN0SW5kZXgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17cHJvamVjdC5pZH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXhsLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdCB7Li4ueyBwcm9qZWN0LCBlZGl0UHJvamVjdCwgZGVsZXRlUHJvamVjdCB9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAge2lzQWRtaW4gJiYgbG9hZGluZyAhPT0gXCJpbml0aWFsXCIgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Li4uU1RBR0dFUl9VUChwcm9qZWN0cy5sZW5ndGgpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT1cImFkZC1wcm9qZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtMTIgY29sLW1kLTYgY29sLWxnLTQgY29sLXhsLTNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UHJvamVjdEFkZCB7Li4ueyBnZXRQcm9qZWN0cywgZWRpdFByb2plY3QgfX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgICAgICB7IWlzQWRtaW4gJiYgbG9hZGluZyAhPT0gXCJpbml0aWFsXCIgJiYgcHJvamVjdHMubGVuZ3RoID09PSAwICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtb3Rpb24ucCB7Li4uU1RBR0dFUl9VUCgpfSBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC13aGl0ZVwiIGxheW91dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YFlvdSBkb24ndCBoYXZlIGFueSBwcm9qZWN0cyB5ZXRgfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24ucD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluZWFyUHJvZ3Jlc3MgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL0xpbmVhclByb2dyZXNzXCI7XG5pbXBvcnQgVGV4dGFyZWFBdXRvc2l6ZSBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dGFyZWFBdXRvc2l6ZVwiO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tIFwicmVhY3Qtc3ZnXCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UsIG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgeyB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gXCJyZWNvaWxcIjtcblxuLyogQXNzZXRzICovXG5pbXBvcnQgY2xvc2VJY29uIGZyb20gXCJpY29ucy9jbG9zZS5zdmdcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgTW9kYWwsIERyb3B6b25lLCBVc2VycyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb25cIjtcblxuLyogQXRvbXMgKi9cbmltcG9ydCB7IGxvYWRpbmdTdGF0ZSB9IGZyb20gXCIuLi8uLi9zdGF0ZVwiO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBGQURFX0lOIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9hbmltYXRpb25zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RNb2RhbCh7XG4gICAgdG9nZ2xlTW9kYWwsXG4gICAgcHJvamVjdElkLFxuICAgIG9uU3VibWl0LFxuICAgIHRpdGxlID0gXCJcIixcbiAgICBkZXNjcmlwdGlvbiA9IFwiXCIsXG4gICAgcHJvamVjdEltYWdlcyA9IFtdLFxuICAgIHVzZXJzID0gW10sXG4gICAgdGl0bGVQbGFjZWhvbGRlciA9IFwiVGhlIHByb2plY3QgbmFtZVwiLFxuICAgIGRlc2NyaXB0aW9uUGxhY2Vob2xkZXIgPSBcIldoYXQncyB0aGlzIHByb2plY3QgYWJvdXQ/XCIsXG59KSB7XG4gICAgLyogUmVmcyAqL1xuICAgIGNvbnN0IGZvcm1SZWYgPSB1c2VSZWYoKTtcblxuICAgIC8qIFN0YXRlICovXG4gICAgY29uc3QgW3Byb2plY3RUaXRsZSwgc2V0UHJvamVjdFRpdGxlXSA9IHVzZVN0YXRlKHRpdGxlKTtcbiAgICBjb25zdCBbcHJvamVjdERlc2NyaXB0aW9uLCBzZXRQcm9qZWN0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoZGVzY3JpcHRpb24pO1xuICAgIGNvbnN0IGxvYWRpbmcgPSB1c2VSZWNvaWxWYWx1ZShsb2FkaW5nU3RhdGUpO1xuXG4gICAgLyogUmVuZGVyICovXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsIHsuLi57IHRvZ2dsZU1vZGFsIH19IGRvbUVsZW1lbnQ9e2RvY3VtZW50LmJvZHl9PlxuICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICByZWY9e2Zvcm1SZWZ9XG4gICAgICAgICAgICAgICAgbWV0aG9kPVwiUE9TVFwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19mb3JtXCJcbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIG9uU3VibWl0KGZvcm1SZWYpO1xuICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19oZWFkZXIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBwdC02IHB0LW1kLTEyIHB4LTYgcGItNlwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJwcm9qZWN0VGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9qZWN0VGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC0tY2xlYXIgdGV4dC0teGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwcm9qZWN0VGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXt0aXRsZVBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Byb2plY3RUaXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBzZXRQcm9qZWN0VGl0bGUodmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fY2xvc2UgYnRuIGJ0bi1saW5rIG1sLWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1kaXNtaXNzPVwibW9kYWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRvZ2dsZU1vZGFsKFwiY2xvc2VcIil9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YWJJbmRleD1cIi0xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTRcIiBzcmM9e2Nsb3NlSWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tbW9kYWxfX2JvZHkgcHgtNiBwYi0xMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBndXR0ZXJzLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwic3Itb25seVwiIGh0bWxGb3I9XCJwcm9qZWN0RGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2BXaGF0J3MgdGhpcyBwcm9qZWN0IGFib3V0P2B9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dGFyZWFBdXRvc2l6ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLS10ZXh0IGZvcm0tY29udHJvbC0tY2xlYXIgbWItMTBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInByb2plY3REZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPXtkZXNjcmlwdGlvblBsYWNlaG9sZGVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cHJvamVjdERlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0UHJvamVjdERlc2NyaXB0aW9uKHZhbHVlKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1hdXRvIG1sLWF1dG9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VXNlcnMgey4uLnsgdXNlcnMsIGZvcm1SZWYgfX0gdmFyaWFudD1cImxnXCIgc2hvd0FkZFVzZXIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPERyb3B6b25lIHsuLi57IHByb2plY3RJZCwgcHJvamVjdEltYWdlcyB9fSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY3VzdG9tLW1vZGFsX19mb290ZXIgcHgtNiBwYi02IHBiLW1kLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGd1dHRlcnMtMCB3LTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLWxnLTMgY29sLXhsLTIgbWwtYXV0b1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1c3RvbS1tb2RhbF9fYnRuIGJ0biBidG4tYmxvY2sgYnRuLXNtIGJ0bi13aGl0ZSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5zcGFuIGNsYXNzTmFtZT1cImJ0bi10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57bG9hZGluZyA/IFwiU2F2aW5nLi4uXCIgOiBcIlNhdmVcIn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLnNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuX19sb2FkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bW90aW9uLmRpdiB7Li4uRkFERV9JTn0ga2V5PVwibG9hZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluZWFyUHJvZ3Jlc3MgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgKTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdE1vZGFsIH0gZnJvbSBcIi4vUHJvamVjdE1vZGFsXCI7XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgeyBQcm9qZWN0TW9kYWwgfSBmcm9tIFwiLi4vbW9kYWxzXCI7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGFkZFByb2plY3RJY29uIGZyb20gXCJpY29ucy9hZGRfcHJvamVjdC5zdmdcIjtcbmltcG9ydCB7IFJlYWN0U1ZHIH0gZnJvbSBcInJlYWN0LXN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0QWRkKHsgZ2V0UHJvamVjdHMsIGVkaXRQcm9qZWN0IH0pIHtcbiAgICAvKiBTdGF0ZSAqL1xuICAgIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3Byb2plY3RJZCwgc2V0UHJvamVjdElkXSA9IHVzZVN0YXRlKCk7XG5cbiAgICAvKiBDYWxsYmFja3MgKi9cbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgICB0b2dnbGVNb2RhbCh0cnVlKTtcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgYXhpb3MucG9zdChcIi9hcGkvcHJvamVjdHMvYWRkXCIpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5kYXRhKSBzZXRQcm9qZWN0SWQocmVzdWx0LmRhdGEuaWQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjb25zdCB0b2dnbGVNb2RhbCA9IChldmVudCkgPT4ge1xuICAgICAgICBzZXRNb2RhbE9wZW4oIW1vZGFsT3Blbik7XG5cbiAgICAgICAgaWYgKGV2ZW50ID09PSBcImNsb3NlXCIpIGdldFByb2plY3RzKCk7XG4gICAgfTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImNhcmQgY2FyZC0tbGluayBjYXJkLS10cmFuc3BhcmVudCBoLTEwMCBtYi0wXCIgc3R5bGU9e3sgbWluSGVpZ2h0OiAzODUgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgcC0xMFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIHRleHQtZGVjb3JhdGlvbi1ub25lIHN0cmV0Y2hlZC1saW5rXCIgb25DbGljaz17YWRkUHJvamVjdH0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ0bi10ZXh0IGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1jZW50ZXIgdGV4dC13aGl0ZSB0ZXh0LW11dGVkLS00MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0U1ZHIHdyYXBwZXI9XCJzdmdcIiBjbGFzc05hbWU9XCJpY29uIGljb24tLTQ4XCIgc3JjPXthZGRQcm9qZWN0SWNvbn0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtLXNtIG10LTFcIj5BZGQgbW9yZSBwcm9qZWN0czwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgIHttb2RhbE9wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICA8UHJvamVjdE1vZGFsXG4gICAgICAgICAgICAgICAgICAgICAgICB7Li4ueyB0b2dnbGVNb2RhbCwgcHJvamVjdElkIH19XG4gICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KC4uLnByb3BzKSA9PiBlZGl0UHJvamVjdCguLi5wcm9wcywgcHJvamVjdElkLCB0b2dnbGVNb2RhbCl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgKTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdEFkZCB9IGZyb20gXCIuL1Byb2plY3RBZGRcIjtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IFByb2plY3RJbWFnZSBmcm9tIFwiLi9Qcm9qZWN0SW1hZ2VcIjtcbmltcG9ydCBQcm9qZWN0TWVudSBmcm9tIFwiLi9Qcm9qZWN0TWVudVwiO1xuaW1wb3J0IHsgVXNlcnMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoeyBwcm9qZWN0LCBlZGl0UHJvamVjdCwgZGVsZXRlUHJvamVjdCB9KSB7XG4gICAgLyogQ29uc3RhbnRzICovXG4gICAgY29uc3QgeyBzbHVnLCB0aXRsZSwgcHJvamVjdEltYWdlcywgdXNlcnMgfSA9IHByb2plY3Q7XG5cbiAgICAvKiBTdGF0ZSAqL1xuICAgIGNvbnN0IFttb2RhbE9wZW4sIHNldE1vZGFsT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvKiBDYWxsYmFja3MgKi9cbiAgICBjb25zdCB0b2dnbGVNb2RhbCA9ICgpID0+IHNldE1vZGFsT3BlbighbW9kYWxPcGVuKTtcblxuICAgIC8qIFJlbmRlciAqL1xuICAgIHJldHVybiAoXG4gICAgICAgIDxhIGhyZWY9e2Bwcm9qZWN0cy8ke3NsdWd9YH0gdGl0bGU9e3RpdGxlfSBjbGFzc05hbWU9XCJjYXJkIGNhcmQtLWxpbmsgY2FyZC0tcHJvZHVjdFwiPlxuICAgICAgICAgICAgPFByb2plY3RJbWFnZSB7Li4ueyBwcm9qZWN0SW1hZ2VzIH19IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0zXCI+e3RpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxVc2VycyB7Li4ueyB1c2VycyB9fSAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPFByb2plY3RNZW51IHsuLi57IHByb2plY3QsIGRlbGV0ZVByb2plY3QsIGVkaXRQcm9qZWN0LCBtb2RhbE9wZW4sIHRvZ2dsZU1vZGFsIH19IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICk7XG59XG4iLCIvKiBQYWNrYWdlcyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0SW1hZ2UoeyBwcm9qZWN0SW1hZ2VzIH0pIHtcbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gcHJvamVjdEltYWdlcy5zbGljZSgwLCAxKS5tYXAoKHsgaW1hZ2UsIHRpdGxlIH0sIGltYWdlSW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2ltYWdlSW5kZXh9IGNsYXNzTmFtZT1cImNhcmRfX2ltYWdlIGhhcy1vdmVybGF5IG0tMlwiPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjYXJkLWltZy10b3BcIiBzcmM9e2ltYWdlfSBzcmNTZXQ9e2Ake2ltYWdlfSAyeGB9IGFsdD17dGl0bGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICkpO1xufVxuIiwiLyogUGFja2FnZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQW5pbWF0ZVByZXNlbmNlLCBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuaW1wb3J0IHsgUmVhY3RTVkcgfSBmcm9tIFwicmVhY3Qtc3ZnXCI7XG5cbi8qIEFzc2V0cyAqL1xuaW1wb3J0IGVkaXRJY29uIGZyb20gXCJpY29ucy9lZGl0LnN2Z1wiO1xuaW1wb3J0IGRlbGV0ZUljb24gZnJvbSBcImljb25zL2RlbGV0ZS5zdmdcIjtcbmltcG9ydCBjbG9zZUljb24gZnJvbSBcImljb25zL2Nsb3NlLnN2Z1wiO1xuXG4vKiBBbmltYXRpb25zICovXG5pbXBvcnQgeyBTQ0FMRV9GQURFLCBTVEFHR0VSX0xFRlQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2FuaW1hdGlvbnNcIjtcblxuLyogQ29tcG9uZW50cyAqL1xuaW1wb3J0IHsgUHJvamVjdE1vZGFsIH0gZnJvbSBcIi4uL21vZGFsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0TWVudSh7IHByb2plY3QsIGRlbGV0ZVByb2plY3QsIGVkaXRQcm9qZWN0LCBtb2RhbE9wZW4sIHRvZ2dsZU1vZGFsIH0pIHtcbiAgICAvKiBDYWxsYmFja3MgKi9cbiAgICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4gc2V0TWVudU9wZW4oIW1lbnVPcGVuKTtcblxuICAgIC8qIENvbnN0YW50cyAqL1xuICAgIGNvbnN0IE1FTlVfSVRFTVMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiZWRpdFwiLFxuICAgICAgICAgICAgaWNvbjogZWRpdEljb24sXG4gICAgICAgICAgICBjYWxsYmFjazogdG9nZ2xlTW9kYWwsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiZGVsZXRlXCIsXG4gICAgICAgICAgICBpY29uOiBkZWxldGVJY29uLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGRlbGV0ZVByb2plY3QsXG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgIC8qIFN0YXRlICovXG4gICAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICAvKiBSZW5kZXIgKi9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNhcmRfX21lbnUgbWVudSAke21lbnVPcGVuICYmIFwiaXMtYWN0aXZlXCJ9YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfX3dyYXBwZXIgcG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayBwb3NpdGlvbi1yZWxhdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVNZW51KCk7XG4gICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICA8QW5pbWF0ZVByZXNlbmNlIGV4aXRCZWZvcmVFbnRlciBpbml0aWFsPXtmYWxzZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7bWVudU9wZW4gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYga2V5PVwiY2xvc2VcIiBjbGFzc05hbWU9XCJtZW51X19kb3RzXCIgey4uLlNDQUxFX0ZBREV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RTVkcgd3JhcHBlcj1cInN2Z1wiIGNsYXNzTmFtZT1cImljb24gaWNvbi0tMTQgdGV4dC13aGl0ZVwiIHNyYz17Y2xvc2VJY29ufSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5kaXYga2V5PVwiZG90c1wiIGNsYXNzTmFtZT1cIm1lbnVfX2RvdHNcIiB7Li4uU0NBTEVfRkFERX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1lbnVfX2RvdFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWVudV9fZG90XCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtZW51X19kb3RcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgICAgICAgICAgICAgICAge21lbnVPcGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9fYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJtZW51X19saXN0IGxpc3RcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge01FTlVfSVRFTVMubWFwKCh7IG5hbWUsIGljb24sIGNhbGxiYWNrIH0sIGl0ZW1JbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5saVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXN0X19pdGVtIG1yLTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi5TVEFHR0VSX0xFRlQoKGl0ZW1JbmRleCArIDEpICogLTEgKyBNRU5VX0lURU1TLmxlbmd0aCArIDEpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayB0ZXh0LXdoaXRlIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHByb2plY3QuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTWVudSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFNWR1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlcj1cInN2Z1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpY29uIGljb24tLTE2IHRleHQtd2hpdGUgbXItMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ljb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21vdGlvbi5saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgICAgICAgICAgIDxBbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICAgICAgICAgIHttb2RhbE9wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFByb2plY3RNb2RhbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsuLi57IHRvZ2dsZU1vZGFsLCBwcm9qZWN0SWQ6IHByb2plY3QuaWQsIC4uLnByb2plY3QgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblN1Ym1pdD17KGZvcm1SZWYpID0+IGVkaXRQcm9qZWN0KGZvcm1SZWYsIHByb2plY3QuaWQsIHRvZ2dsZU1vZGFsKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9BbmltYXRlUHJlc2VuY2U+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiIsImV4cG9ydCB7IGRlZmF1bHQgYXMgUHJvamVjdCB9IGZyb20gXCIuL1Byb2plY3RcIjtcbiIsIi8qIFBhY2thZ2VzICovXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tIFwicmVhY3QtZG9tXCI7XG5pbXBvcnQgeyBSZWNvaWxSb290IH0gZnJvbSBcInJlY29pbFwiO1xuXG4vKiBDb21wb25lbnRzICovXG5pbXBvcnQgUHJvamVjdE92ZXJ2aWV3IGZyb20gXCIuL2NvbXBvbmVudHMvUHJvamVjdE92ZXJ2aWV3XCI7XG5cbi8qIFJlbmRlciAqL1xuY29uc3QgcHJvamVjdE92ZXJ2aWV3Tm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdE92ZXJ2aWV3XCIpO1xuaWYgKHByb2plY3RPdmVydmlld05vZGUgIT09IG51bGwpIHtcbiAgICByZW5kZXIoXG4gICAgICAgIDxSZWNvaWxSb290PlxuICAgICAgICAgICAgPFByb2plY3RPdmVydmlldyB7Li4ucHJvamVjdE92ZXJ2aWV3Tm9kZS5kYXRhc2V0fSAvPlxuICAgICAgICA8L1JlY29pbFJvb3Q+LFxuICAgICAgICBwcm9qZWN0T3ZlcnZpZXdOb2RlXG4gICAgKTtcbn1cbiIsImltcG9ydCB7IGF0b20sIHNlbGVjdG9yIH0gZnJvbSBcInJlY29pbFwiO1xuXG5jb25zdCBsb2FkaW5nU3RhdGUgPSBhdG9tKHtcbiAgICBrZXk6IFwibG9hZGluZ1N0YXRlXCIsXG4gICAgZGVmYXVsdDogXCJpbml0aWFsXCIsXG59KTtcblxuY29uc3QgdXNlclN0YXRlID0gYXRvbSh7XG4gICAga2V5OiBcInVzZXJTdGF0ZVwiLFxuICAgIGRlZmF1bHQ6IHt9LFxufSk7XG5cbmNvbnN0IHN1Y2Nlc3NTdGF0ZSA9IGF0b20oe1xuICAgIGtleTogXCJzdWNjZXNzU3RhdGVcIixcbiAgICBkZWZhdWx0OiBmYWxzZSxcbn0pO1xuXG5jb25zdCBwcm9qZWN0c1N0YXRlID0gYXRvbSh7XG4gICAga2V5OiBcInByb2plY3RzU3RhdGVcIixcbiAgICBkZWZhdWx0OiBbXSxcbn0pO1xuXG5jb25zdCBhZG1pblN0YXRlID0gc2VsZWN0b3Ioe1xuICAgIGtleTogXCJhZG1pblN0YXRlXCIsXG4gICAgZ2V0OiAoeyBnZXQgfSkgPT4ge1xuICAgICAgICBjb25zdCB1c2VyID0gZ2V0KHVzZXJTdGF0ZSk7XG5cbiAgICAgICAgaWYgKHVzZXI/LnJvbGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gdXNlci5yb2xlcy5pbmNsdWRlcyhcIlJPTEVfQURNSU5cIik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcbn0pO1xuXG5leHBvcnQgeyBsb2FkaW5nU3RhdGUsIHVzZXJTdGF0ZSwgYWRtaW5TdGF0ZSwgc3VjY2Vzc1N0YXRlLCBwcm9qZWN0c1N0YXRlIH07XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IFBhcnNsZXkgZnJvbSAncGFyc2xleWpzJztcblxuaW1wb3J0ICdwYXJzbGV5anMvZGlzdC9pMThuL25sJztcblxudmFyIHBhcnNsZXlDb25maWcgPSB7XG4gICAgZXJyb3JDbGFzczogJ2lzLWVycm9yJyxcbiAgICBleGNsdWRlZDogJ2lucHV0W3R5cGU9YnV0dG9uXSwgaW5wdXRbdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXJlc2V0XSwgaW5wdXRbdHlwZT1oaWRkZW5dLCBbZGlzYWJsZWRdLCA6aGlkZGVuJyxcbiAgICBzdWNjZXNzQ2xhc3M6ICdpcy1zdWNjZXNzJ1xufTtcblxuUGFyc2xleS5hZGRNZXNzYWdlcygnbmwnLCB7XG4gICAgbWluY2hlY2s6ICdTZWxlY3RlZXIgdGVubWluc3RlICVzIG9wdGllKHMpLicsXG4gICAgbWF4Y2hlY2s6ICdTZWxlY3RlZXIgbWF4aW1hYWwgJXMgb3B0aWUocykuJyxcbiAgICBjaGVjazogJ1NlbGVjdGVlciB0dXNzZW4gJXMgZW4gJXMgb3B0aWUocykuJ1xufSkuc2V0TG9jYWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5sYW5nKTtcblxuJCgnZm9ybTpub3QoW25vdmFsaWRhdGVdKScpLnBhcnNsZXkocGFyc2xleUNvbmZpZyk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9