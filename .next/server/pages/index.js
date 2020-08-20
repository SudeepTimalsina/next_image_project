module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/sudeep/wisionary-team/next_image_project/src/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nvar Gangnam = function Gangnam(props) {\n  return __jsx(\"svg\", props, __jsx(\"g\", {\n    stroke: \"#000\"\n  }, __jsx(\"path\", {\n    d: \"M56.05 106.57c6.272.118 12.208 3.027 18.435 3.788 6.188.756 12.455.914 18.688.758 5.577-.14 11.163-.606 16.668-1.515 4.955-.82 9.786-2.274 14.647-3.536 1.522-.395 2.979-1.128 4.546-1.263 5.057-.434 10.24.239 15.152 1.516 2.663.692 5.542 1.428 7.576 3.283 3.757 3.427 5.6 8.6 7.323 13.385 1.656 4.597 2.148 9.548 2.778 14.395.48 3.681 2.227 7.702.758 11.112-.734 1.702-2.558 2.882-4.293 3.535-2.522.95-5.434.757-8.081.253-3.334-.636-9.344-4.041-9.344-4.041l-1.01-.253s.387 8.489 1.262 12.627c1.173 5.548 3.273 10.868 5.303 16.162 1.12 2.921 1.992 6.026 3.789 8.587 3.009 4.289 7.674 7.139 11.364 10.859 4.067 4.101 8.58 7.878 11.869 12.627 3.366 4.858 6.537 10.142 7.828 15.91 1.085 4.847.609 10.008-.252 14.9-.942 5.348-2.484 10.764-5.304 15.405-2.473 4.07-6.131 7.376-9.849 10.354-5.363 4.296-11.654 7.3-17.678 10.607-2.97 1.63-5.707 4.706-9.091 4.545-1.587-.075-4.04-2.525-4.04-2.525s-3.601 0-5.304-.505c-4.188-1.24-8.555-2.946-11.617-6.061-.792-.805-1.256-1.931-1.515-3.03-.638-2.704 0-8.334 0-8.334s8.346-6.64 11.869-10.607c1.364-1.537 2.875-3.105 3.535-5.051.623-1.835.782-3.944.253-5.808-.777-2.74-2.592-5.27-4.798-7.072-2.543-2.076-5.887-3.073-9.092-3.788-5.592-1.247-11.445-.909-17.173-.757-6.087.16-12.262.343-18.183 1.768-2.903.698-5.93 1.51-8.333 3.283-1.735 1.28-2.948 3.192-4.041 5.05-1.014 1.725-1.808 3.61-2.273 5.556-.726 3.04-.793 6.22-.758 9.344.101 8.97 2.951 17.8 2.778 26.769-.023 1.19-.505 3.536-.505 3.536l-19.445 7.07s-4.667 1.414-7.07 1.768c-1.752.258-5.304.253-5.304.253s.395-2.867.252-4.293c-.491-4.937-3.788-14.395-3.788-14.395s-3.85-13.026-6.06-19.445c-1.32-3.829-3.406-7.414-4.294-11.364-.685-3.049-1.08-6.236-.757-9.344a19.341 19.341 0 0 1 2.02-6.819c2.503-4.848 10.102-12.879 10.102-12.879s6.452-4.74 7.324-8.333c.163-.675-.11-1.45-.506-2.02-2.038-2.934-5.58-4.595-8.838-6.062-1.266-.57-3.237.122-4.04-1.01-.54-.758-.049-1.898.252-2.778 1.771-5.194 5.698-9.389 8.838-13.89 3.574-5.122 8.092-9.58 11.364-14.9 1.618-2.63 2.729-5.539 4.041-8.333.432-.921 1.263-2.778 1.263-2.778l-.253-1.768s-2.69-.91-3.788-1.768c-2.736-2.135-4.905-5.034-6.566-8.081-2.076-3.81-3.414-8.08-4.04-12.374-.475-3.25-.707-6.708.252-9.85.961-3.148 2.874-6.11 5.303-8.333 1.889-1.729 4.39-2.726 6.819-3.535.971-.324 2.006-.525 3.03-.506z\",\n    strokeLinejoin: \"round\"\n  }), __jsx(\"path\", {\n    d: \"M44.75 291.36l6.313 5.493-2.399 4.04-2.904 4.42s-2.165 2.78-2.715 4.42c-.349 1.041-.61 2.223-.315 3.282.274.985 1.009 1.853 1.83 2.462.701.52 1.592.92 2.463.884 1.618-.068 2.953-1.332 4.42-2.02 1.754-.824 3.46-1.753 5.24-2.526 1.387-.602 3.036-.711 4.23-1.641.63-.492 1.098-1.212 1.388-1.957.37-.95-.009-2.09.38-3.03.353-.86 1.106-1.498 1.704-2.21 1.044-1.244 2.408-2.231 3.283-3.6.701-1.096 1.076-2.372 1.515-3.598.274-.765.752-1.526.694-2.336-.06-.855-.528-1.674-1.073-2.336-.709-.861-2.016-1.087-2.715-1.957-.732-.911-1.02-2.11-1.389-3.22-.143-.431-.315-1.326-.315-1.326z\"\n  }), __jsx(\"path\", {\n    d: \"M51.56 289.97c1.594-2.562 5.486-2.708 8.46-3.22.913-.157 1.984-.414 2.778.063.517.311.753.99.884 1.579.182.824.134 1.745-.19 2.525-.382.924-1.156 1.674-1.957 2.273-1.146.857-2.542 1.36-3.914 1.768-1.184.352-2.494.969-3.662.568-.957-.329-1.666-1.288-2.083-2.21-.462-1.02-.908-2.395-.316-3.346zM66.78 293s-6.162 2.576-9.091 4.167c-2.037 1.106-4.053 2.288-5.872 3.725-.876.692-1.85 1.364-2.399 2.336-.5.884-.891 1.97-.694 2.967.175.888.827 1.705 1.578 2.21 1.13.76 2.615.94 3.977.947.95.005 1.957-.154 2.778-.632 1.16-.673 1.938-1.874 2.715-2.967.693-.974 1.705-3.157 1.705-3.157l-1.579-.063s-.941 1.451-1.578 2.02c-.479.429-1.012.881-1.642 1.01-.708.147-1.69.247-2.146-.315-.425-.524-.08-1.377.126-2.02a4.64 4.64 0 0 1 1.136-1.831c2.05-2.055 4.948-3.036 7.387-4.609 1.148-.74 2.691-1.11 3.41-2.273.267-.433.189-1.515.189-1.515z\",\n    strokeLinejoin: \"round\",\n    fill: \"#fff\"\n  }), __jsx(\"path\", {\n    d: \"M116.96 268.61s-2.616 1.377-3.17 2.634c-.504 1.145-.041 2.518.179 3.75a13.99 13.99 0 0 0 1.116 3.527c.687 1.446 1.803 2.648 2.634 4.018.442.729 1.25 2.232 1.25 2.232s2.288-.532 3.259-.045c1.562.783 2.419 2.624 3.08 4.241.496 1.212-.016 2.719.58 3.884.74 1.442 2.206 2.394 3.483 3.393.8.626 1.605 1.354 2.589 1.607.823.211 1.783.242 2.545-.134.965-.476 1.624-1.489 2.098-2.455.321-.655.456-1.414.446-2.143-.016-1.3-.66-2.516-.893-3.795-.33-1.816-.364-3.679-.714-5.49-.362-1.872-1.428-5.537-1.428-5.537l-10.268-3.214z\"\n  }), __jsx(\"path\", {\n    d: \"M116.96 270.76s.954 2.287 1.786 3.17c1.299 1.379 4.776 3.08 4.776 3.08s2.626 1.668 3.706 2.768c.732.745 1.61 1.523 1.83 2.544.145.668.14 1.593-.401 2.01-.39.3-1.04.14-1.474-.09-1.209-.643-1.486-2.338-2.5-3.259-.83-.755-2.857-1.786-2.857-1.786s1.12 2.166 1.741 3.215c.686 1.158 1.544 2.211 2.188 3.393.5.918.634 2.046 1.294 2.857.256.314.582.658.983.714.643.09 1.248-.38 1.83-.67a14.49 14.49 0 0 0 2.634-1.696c.54-.436 1.253-.814 1.473-1.473.266-.799-.236-1.667-.357-2.5-.16-1.102-.186-2.233-.491-3.304-.165-.577-.272-1.246-.714-1.652-2.336-2.139-9.018-2.99-9.018-2.99l-3.974-2.635zM102.41 130.44c-1.476-.282-3.016.177-4.42.714-1.643.63-2.828 1.516-4.018 2.813-1.27 1.386-3.392 4.509-3.392 4.509l-1.25 2.901s-.22 2.942.178 4.286c.248.836.527 1.366 1.116 2.01.983 1.072 1.838 2.59 3.26 2.9.546.12 1.26-.05 1.606-.49.314-.399.231-1.031.09-1.518-.313-1.075-1.398-1.758-1.965-2.723-.39-.666-.987-1.326-.982-2.098.004-.58.76-1.563.76-1.563s.342-.616.624-.58c.385.05.457.632.625.982.26.539.345 1.147.58 1.696.343.802.787 1.557 1.206 2.322.372.678.573 1.506 1.16 2.009.473.404 1.12.7 1.742.67.664-.033 1.587-.258 1.785-.894.157-.502-.502-.924-.759-1.384-.425-.762-.996-1.456-1.294-2.276a5.745 5.745 0 0 1-.357-1.965c.002-.56-.12-1.294.312-1.651.447-.37 1.741 0 1.741 0s.347 1.015.536 1.517c.339.9.621 1.83 1.071 2.68.312.586.781 1.077 1.117 1.65.218.374.209.94.58 1.162.46.275 1.205.309 1.607-.045.43-.378.406-1.14.268-1.696-.18-.723-1.086-1.087-1.34-1.786-.294-.813-.358-1.755-.133-2.59.106-.394.435-.691.67-1.026.17-.244.462-.295.758-.268.564.05.367.71.536 1.071.22.471.464.935.625 1.429.236.724.146 1.553.491 2.232.234.46.556.949 1.027 1.16.271.123.617.112.893 0 .459-.184.778-.628 1.071-1.026.454-.616.79-1.326 1.027-2.054.224-.688.085-1.471.357-2.142.177-.436.647-.717.804-1.161.208-.591-.072-1.283.134-1.875.147-.425.639-.682.759-1.116.202-.733.07-1.545-.134-2.277-.172-.616-.404-1.285-.893-1.696-.407-.343-.987-.506-1.518-.491-.495.014-1.03.19-1.384.535-.359.349-.152 1.126-.58 1.384-.435.263-1.065.096-1.518-.134-.705-.358-1.037-1.194-1.563-1.785-.413-.465-.74-1.03-1.25-1.384-.697-.484-1.533-.779-2.366-.938zM87.87 115.72c1.485-2.99 6.196-2.555 9.439-3.346 2.229-.544 4.524-.95 6.818-.947 2.328.003 4.695.275 6.913.978 1.848.586 3.659 1.447 5.177 2.652 1.263 1.003 2.287 2.316 3.125 3.693.646 1.06 1.166 2.227 1.421 3.441.193.917.66 2.088.063 2.81-.204.246-.657.294-.947.158-.55-.26-.915-1.579-.915-1.579l-.569-2.146s-.637-1.234-1.104-1.863c-.21-.282-.266-.868-.6-.978-.47-.155-1.079-.222-1.484.063-.25.176-.372.546-.347.852.058.725 1.136 1.862 1.136 1.862l1.074 1.958s1.177 1.79 1.073 2.778c-.065.612-.46 1.27-1.01 1.546-.302.152-.727.12-1.01-.063-.87-.562-1.453-2.746-1.453-2.746s-.963-2.41-1.83-3.346c-.333-.36-1.01-.853-1.01-.853s-.705.232-.758.537c-.146.834 1.024 1.353 1.452 2.083.501.858 1.294 2.684 1.294 2.684s.895 2.133.41 3.03c-.243.451-.879.72-1.389.663-.573-.064-1.357-1.073-1.357-1.073l-1.894-2.841s-1.121-1.962-2.147-2.336c-.492-.18-1.32-.404-1.483.094-.23.7 1.084 1.013 1.515 1.61.532.737 1.294 2.4 1.294 2.4s.749 1.556.505 2.304c-.191.588-.783 1.106-1.389 1.231-1.085.224-3.156-1.042-3.156-1.042l-4.862-2.367-5.84-2.873-3.251-3.472-2.241-3.473s-.988-1.43-.663-2.083z\",\n    fill: \"#fff\"\n  }), __jsx(\"path\", {\n    d: \"M81.14 73.08c-.296.917-.428 1.883-.537 2.841-.091.806-.094 2.43-.094 2.43s1.66-1.982 2.24-3.125c.518-1.017 1.025-2.11 1.074-3.25.045-1.049-.726-3.063-.726-3.063s-1.012 2.146-1.515 3.22c-.148.315-.335.615-.442.947zM87.77 76.42c-.476-.4-1.155-.56-1.547-1.042-.387-.476-.695-1.09-.694-1.704.002-.968.456-1.966 1.105-2.683.824-.912 2.075-1.38 3.25-1.737 1.752-.53 3.668-.894 5.462-.536 1.814.361 3.445 1.468 4.893 2.62.875.696 1.862 1.462 2.21 2.525.266.813.26 1.85-.221 2.557-.133.195-.632.316-.632.316l-1.452-.6 1.547.631s1.46 1.313 1.42 2.178c-.029.644-.655 1.17-1.2 1.516-1.012.643-2.31.693-3.503.82-2.553.274-5.143.087-7.702-.126-1.337-.111-3.13.438-3.978-.6-.4-.489-.179-1.324.095-1.894.322-.672 1.673-1.483 1.673-1.483s-.459-.533-.726-.758z\"\n  }), __jsx(\"path\", {\n    d: \"M91.21 73.01c-.355.094-.725.24-.979.505-.279.293-.14.928-.505 1.105-.4.194-1.025.038-1.294-.316-.382-.503-.204-1.321.063-1.894.233-.5.72-.898 1.231-1.105 1.523-.616 3.307-.474 4.925-.189.795.14 1.46.716 2.241.915.729.186 1.606-.149 2.241.253.524.33 1.035.962.979 1.578-.041.453-.474.904-.915 1.01-1.072.26-2.071-.757-3.094-1.167-.648-.26-1.24-.696-1.926-.821a6.89 6.89 0 0 0-2.967.126zM92.35 77.02c-.99.325-2.715 1.547-2.715 1.547s.293.488.537.6c1.951.895 4.294.213 6.44.126 1.046-.043 3.125-.316 3.125-.316s-.732-1.335-1.358-1.704c-.974-.576-2.215-.54-3.346-.569-.9-.023-1.827.035-2.683.316z\",\n    fill: \"#fff\"\n  }), __jsx(\"path\", {\n    d: \"M93.95 88.1c-.896.881-2.143 3.103-2.143 3.103l2.567-.514s1.303-.829 1.674-1.473c.648-1.124.76-3.817.76-3.817s-1.384 1.585-2.188 2.255c-.207.171-.479.258-.67.446zM101.63 88.52c-.695-.842-1.942-2.612-1.942-2.612s-.447 2.174-.022 3.125c.453 1.016 1.423 1.93 2.5 2.21.538.14 1.63-.357 1.63-.357s-1.492-1.548-2.166-2.366zM96.94 92.16c-.959.382-2.277 2.098-2.277 2.098l-.245.514s1.968-.962 3.035-1.117c.68-.098 2.054.134 2.054.134l1.295.157s-1.312-1.494-2.21-1.808a2.432 2.432 0 0 0-1.652.022z\"\n  }), __jsx(\"path\", {\n    d: \"M104.95 69.57c-1.331-1.342-4.509-3.438-4.509-3.438s2.205 3.154 3.304 4.733c.693.996 2.076 2.99 2.076 2.99l.825 2.411s.546-2.924.112-4.285c-.305-.957-1.1-1.698-1.808-2.411z\",\n    strokeLinejoin: \"round\",\n    strokeLinecap: \"square\"\n  }), __jsx(\"path\", {\n    d: \"M71.01 43.6c-3.237.377-6.1.618-9.138 1.797-2.347.91-4.318 2.605-6.34 4.107a40.06 40.06 0 0 0-4.106 3.482c-1.795 1.753-5 5.625-5 5.625s-1 2.367-.804 3.571c.315 1.924 3.036 5 3.036 5l4.286-7.41 2.143-.893 2.41.982s2.929 5.04 4.91 7.143c1.165 1.234 2.414 2.574 4.019 3.125 1.38.473 2.935.233 4.375 0 2.137-.347 4.271-.997 6.16-2.054 2.103-1.175 3.632-3.168 5.536-4.643 1.62-1.254 3.426-2.261 5-3.571.922-.768 2.59-2.5 2.59-2.5l6.607-.09s3.075 3.057 4.643 4.554c2.116 2.022 3.757 4.786 6.428 5.982 2.346 1.051 5.133 1.073 7.679.714a9.775 9.775 0 0 0 4.107-1.607c1.963-1.346 3.297-3.44 4.821-5.268 1.388-1.664 3.929-5.178 3.929-5.178l.803-.714 3.661 5.446 2.41 2.946.537-2.857-.358-8.75-6.339-3.214s-3.06-2.844-4.91-3.75c-2.82-1.381-6-1.96-9.108-2.41a26.784 26.784 0 0 0-6.16-.18c-1.756.155-3.557.383-5.179 1.072-1.36.578-2.562 1.512-3.66 2.5-.786.706-1.445 1.549-2.054 2.41-.377.534-.982 1.697-.982 1.697l-7.768.09s-2.113-2.928-3.572-3.93c-2.58-1.77-5.657-2.92-8.75-3.392-1.769-.27-4.084-.04-5.862.168z\"\n  }), __jsx(\"path\", {\n    d: \"M52.5 56.02s.138-9.26 1.607-13.571c1.141-3.348 3.272-6.318 5.447-9.107a39.751 39.751 0 0 1 6.964-6.965 41.346 41.346 0 0 1 8.928-5.267c3.357-1.446 6.947-2.346 10.537-3.036 2.643-.509 5.343-.832 8.035-.804 4.197.045 8.489.284 12.5 1.518a36.16 36.16 0 0 1 11.25 5.804c3.363 2.573 6.363 5.762 8.572 9.375 1.822 2.98 3.108 6.371 3.66 9.821.358 2.235-.268 6.786-.268 6.786l7.233 5.625s.09-7.358-.447-10.982c-.47-3.163-1.197-6.327-2.41-9.286-1.083-2.64-2.36-5.305-4.286-7.41-1.327-1.45-3.074-2.495-4.822-3.393-1.121-.577-3.571-1.25-3.571-1.25s.536-4.813-.179-7.054c-.664-2.084-2.02-3.999-3.66-5.446-2.625-2.317-6.062-3.604-9.375-4.732-3.901-1.329-8.03-2.061-12.143-2.322-4.286-.271-8.678-.182-12.857.804-3.933.928-7.684 2.673-11.161 4.732-2.936 1.738-5.597 3.954-8.036 6.34-2.54 2.482-4.755 5.3-6.786 8.213-2.402 3.447-4.653 7.045-6.34 10.893A48.596 48.596 0 0 0 47.59 46.02c-.596 3.256-.625 9.911-.625 9.911l.447 2.59zM49.73 66.02s-.781 9.857.179 14.643c.687 3.43 2.425 6.573 3.928 9.732 1.958 4.114 4.015 8.218 6.607 11.964 1.358 1.962 4.643 5.446 4.643 5.446l-3.84-.535s-3.154-5.144-4.642-7.768c-1.117-1.97-3.214-5.982-3.214-5.982l-3.482-4.465-4.018-2.946s-3.133-2.008-4.197-3.482c-.766-1.062-1.112-2.39-1.428-3.66-.376-1.513-.432-3.09-.536-4.644-.104-1.544-.52-3.156-.09-4.642.617-2.125 2.177-3.896 3.661-5.536.98-1.083 3.393-2.768 3.393-2.768z\"\n  }), __jsx(\"path\", {\n    d: \"M44.82 74.15c.685.212 1.613.304 2.143-.179.872-.793.71-2.305.625-3.482-.109-1.502-.238-3.363-1.429-4.285-.684-.53-2.589-.179-2.589-.179s-1.229 1.873-1.429 2.946c-.196 1.057.268 3.215.268 3.215s1.42 1.657 2.411 1.964zM45.8 77.19c-.947.287-2.143 2.054-2.143 2.054s-.35 1.592-.09 2.321c.243.675 1.43 1.607 1.43 1.607s1.72 1.752 2.678 1.429c.744-.252.896-1.362.982-2.143.11-.998-.355-1.98-.625-2.946-.194-.699-.714-2.054-.714-2.054s-1.026-.417-1.518-.268z\",\n    fill: \"#fff\"\n  }), __jsx(\"path\", {\n    d: \"M133.03 56.2l2.054 10s.69 8.392.535 12.589c-.085 2.306-.26 4.633-.803 6.875-.877 3.615-2.415 7.048-3.929 10.446-1.078 2.42-2.35 4.751-3.66 7.054-.642 1.126-2.054 3.303-2.054 3.303l3.75-1.34s1.926-3.325 2.678-5.088c1.034-2.424 1.62-5.016 2.5-7.5.764-2.158 1.439-4.357 2.411-6.429.408-.869 1.429-2.5 1.429-2.5l2.946-2.59s1.357-.503 1.875-.981c.698-.645 1.206-1.514 1.518-2.411.55-1.584.954-3.377.536-5-.272-1.056-1.875-2.679-1.875-2.679s.98-2.652 1.339-4.018c.394-1.495 1.11-3.022.893-4.553-.173-1.226-.881-2.372-1.696-3.304-.86-.981-2.03-1.685-3.215-2.232-.95-.44-3.035-.804-3.035-.804z\"\n  }), __jsx(\"path\", {\n    d: \"M137.59 58.35l-1.071.714s-.23 3.06.267 4.465c.171.482.71.771.893 1.25.386 1.006-.485 2.542.357 3.214.82.654 2.271.25 3.125-.357.673-.479 1.072-2.232 1.072-2.232s1.03-2.4.714-3.572c-.269-.997-1.196-1.745-2.053-2.321-.969-.652-3.304-1.16-3.304-1.16zM137.5 70.58s.727 3.137.714 4.732c-.014 1.81-.893 5.357-.893 5.357s2.344-.426 3.215-1.16c.968-.817 1.676-2.054 1.875-3.304.233-1.47-.026-3.166-.893-4.375-.482-.672-1.345-1.034-2.143-1.25-.603-.163-1.875 0-1.875 0z\",\n    fill: \"#fff\"\n  })));\n};\n\nGangnam.defaultProps = {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  viewBox: \"0 0 200 320\"\n};\n\nconst Index = () => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(\"div\", {\n    className: \"jsx-2212933993\" + \" \" + \"container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 9\n    }\n  }, __jsx(Gangnam, {\n    className: \"svgStyle\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 13\n    }\n  }), __jsx(\"p\", {\n    className: \"jsx-2212933993\" + \" \" + \"textStyle\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }\n  }, \"Welcome to Next Style ...\")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"2212933993\",\n    __self: undefined\n  }, \".svgStyle{height:300px;}.container{text-align:center;margin-top:20px;}.textStyle{font-size:25px;font-weight:bold;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3N1ZGVlcC93aXNpb25hcnktdGVhbS9uZXh0X2ltYWdlX3Byb2plY3Qvc3JjL3BhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVMyQixBQUc4QixBQUdLLEFBSUgsYUFObkIsRUFPcUIsR0FKRCxjQUtwQixFQUpBIiwiZmlsZSI6Ii9ob21lL3N1ZGVlcC93aXNpb25hcnktdGVhbS9uZXh0X2ltYWdlX3Byb2plY3Qvc3JjL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbmduYW0gZnJvbSBcIi4uLy4uL3B1YmxpYy9nYW5nbmFtLXN0eWxlLnN2Z1wiXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8R2FuZ25hbSBjbGFzc05hbWU9XCJzdmdTdHlsZVwiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0U3R5bGVcIj5XZWxjb21lIHRvIE5leHQgU3R5bGUgLi4uPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICAgIC5zdmdTdHlsZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRleHRTdHlsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il19 */\\n/*@ sourceURL=/home/sudeep/wisionary-team/next_image_project/src/pages/index.js */\"));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvaW5kZXguanM/NDU3MCJdLCJuYW1lcyI6WyJHYW5nbmFtIiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBT0EsTyxZQUFBQSxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLE87Ozs7O0FBRVAsTUFBTUMsS0FBSyxHQUFHLE1BQU07QUFDaEIsU0FDSSxtRUFDQTtBQUFBLHdDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsT0FBRDtBQUFTLGFBQVMsRUFBQyxVQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBLHdDQUFhLFdBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FGSixDQURBO0FBQUE7QUFBQTtBQUFBLG8vQ0FESjtBQXFCSCxDQXRCRDs7QUF3QmVBLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbmduYW0gZnJvbSBcIi4uLy4uL3B1YmxpYy9nYW5nbmFtLXN0eWxlLnN2Z1wiXG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8R2FuZ25hbSBjbGFzc05hbWU9XCJzdmdTdHlsZVwiIC8+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0U3R5bGVcIj5XZWxjb21lIHRvIE5leHQgU3R5bGUgLi4uPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+e2BcbiAgICAgICAgICAgIC5zdmdTdHlsZSB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLnRleHRTdHlsZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });