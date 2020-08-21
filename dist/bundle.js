/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\n  font-family: \\\"Russo One\\\", sans-serif;\\n  margin: 0;\\n  padding: 0;\\n  text-align: center;\\n}\\n\\n#top-backgnd {\\n  height: 50vh;\\n}\\n\\n#backgnd {\\n  background: url(https://wallpapercave.com/wp/SGTFbTV.jpg) center 50%/172% no-repeat;\\n  clip-path: polygon(25% 5%, 50% 0, 75% 5%, 100% 0, 97% 100%, 50% 94%, 3% 100%, 0 0);\\n  color: #fff;\\n  display: flex;\\n  flex-direction: column;\\n  height: 100%;\\n  justify-content: space-around;\\n}\\n#backgnd .input {\\n  border: none;\\n  font-size: 1em;\\n  padding: 8px 15px;\\n}\\n#backgnd #city {\\n  background: #fff7;\\n  border-radius: 5px 0 0 5px;\\n}\\n#backgnd #city:focus {\\n  background: #fffc;\\n}\\n#backgnd #submit {\\n  background: #e8e8e7;\\n  border-radius: 0 5px 5px 0;\\n  cursor: pointer;\\n  margin-left: -5px;\\n}\\n\\n.bottom {\\n  height: 45vh;\\n}\\n.bottom .date {\\n  margin-bottom: 30px;\\n}\\n.bottom #flag {\\n  margin-bottom: -15px;\\n  opacity: 0.6;\\n  width: 80px;\\n  animation: oscill 2s ease-in-out infinite alternate;\\n}\\n@keyframes oscill {\\n  100% {\\n    transform: translateY(3px) rotate(0.01deg);\\n  }\\n}\\n.bottom #cloud {\\n  width: 65%;\\n}\\n.bottom .info-1 {\\n  display: flex;\\n  padding: 30px 0;\\n}\\n.bottom .info-1 .d {\\n  width: 50%;\\n}\\n.bottom .info-1 #degrees {\\n  background: linear-gradient(108deg, #ffb600 50%, #fff7e4 50%);\\n  border: 4px solid #fff7e4;\\n  border-radius: 10px;\\n  cursor: pointer;\\n  margin: 10px auto 20px;\\n  padding: 5px;\\n  width: 50px;\\n}\\n.bottom .info-1 .feels {\\n  padding-bottom: 7px;\\n}\\n.bottom .info-2 {\\n  padding: 30px 0;\\n}\\n\\n.title {\\n  font-size: 3em;\\n}\\n\\n.realTemp {\\n  font-size: 4em;\\n}\\n\\n.t2,\\n.date {\\n  font-size: 1.2em;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.scss */ \"./src/styles/style.scss\");\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _javascript_app_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./javascript/app-controller */ \"./src/javascript/app-controller.js\");\n\n\n\nObject(_javascript_app_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/javascript/api-data.js":
/*!************************************!*\
  !*** ./src/javascript/api-data.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nasync function getTemp(newCity) {\n  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${newCity}&units=metric&appid=550a45bc4aa9613e4687926216e69765`);\n  const weatherData = await response.json();\n  console.log(weatherData);\n  console.log(weatherData.main);\n\n  return {\n    titleDt: weatherData.name,\n    countryDt: weatherData.sys.country,\n    tempDT: weatherData.weather[0].main,\n    feelsDt: weatherData.main.feels_like,\n    maxTempDT: weatherData.main.temp_max,\n    minTempDT: weatherData.main.temp_min,\n    skyDT: weatherData.weather[0].description,\n    cloudDT: weatherData.weather[0].icon,\n    speedDT: weatherData.wind.speed, // m/s\n    humidDT: weatherData.main.humidity, // %\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getTemp);\n\n//# sourceURL=webpack:///./src/javascript/api-data.js?");

/***/ }),

/***/ "./src/javascript/app-controller.js":
/*!******************************************!*\
  !*** ./src/javascript/app-controller.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_work__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-work */ \"./src/javascript/dom-work.js\");\n/* harmony import */ var _api_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api-data */ \"./src/javascript/api-data.js\");\n\n\n\nfunction start() {\n  // const rendered = new Promise((resolve, reject) => {\n  //   // if (elems.body.children[0].children[0].children[1].hasChildNodes()) {\n  //   if (render()) {\n  //     resolve('Basic HTML rendered OK');\n  //   } else {\n  //     reject(new Error('Failed to render'));\n  //   }\n  // });\n\n  Object(_dom_work__WEBPACK_IMPORTED_MODULE_0__[\"render\"])().then((mssg) => console.log(mssg)).then((message) => {\n    console.log('before checking for click');\n    Object(_dom_work__WEBPACK_IMPORTED_MODULE_0__[\"checkForClick\"])();\n    console.log('after checking for click');\n    // console.log(newSearch);\n\n    const newValues = Object(_api_data__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(newSearch);\n\n    Object(_dom_work__WEBPACK_IMPORTED_MODULE_0__[\"updateInfo\"])(newValues);\n\n    console.log(`This is the 'then': ${message}`);\n  });\n\n  console.log('This is the rendered promise variable: ');\n  console.log(Object(_dom_work__WEBPACK_IMPORTED_MODULE_0__[\"render\"])());\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (start);\n\n//# sourceURL=webpack:///./src/javascript/app-controller.js?");

/***/ }),

/***/ "./src/javascript/dom-work.js":
/*!************************************!*\
  !*** ./src/javascript/dom-work.js ***!
  \************************************/
/*! exports provided: render, elems, checkForClick, updateInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"elems\", function() { return elems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkForClick\", function() { return checkForClick; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateInfo\", function() { return updateInfo; });\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout */ \"./src/javascript/layout.js\");\n\n\nconst elems = () => {\n  return {\n    body: document.body,\n    city: document.querySelector('#city'),\n    bttn: document.querySelector('#submit'),\n    title: document.querySelector('.title'),\n    date: document.querySelector('.date'),\n    cloud: document.querySelector('#cloud'),\n    sky: document.querySelector('#sky'),\n    rTemp: document.querySelector('.realTemp'),\n    feels: document.querySelector('.feels'),\n    maxTemp: document.querySelector('.maxTemp'),\n    minTemp: document.querySelector('.minTemp'),\n    speed: document.querySelector('#speed'),\n    humid: document.querySelector('#humidity'),\n  };\n};\n\nconst render = () => {\n  document.body.innerHTML = _layout__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n  setTimeout(() => {}, 100000);\n  console.log(elems());\n\n  return new Promise((resolve) => {\n    if (elems().body.childElementCount > 1) {\n      resolve('Rendered successfully');\n    }\n  });\n};\n\nconst checkForClick = () => {\n  let cityName = '';\n  // elems.bttn.addEventListener('click', clickedBttn);\n\n  elems().bttn.onclick = (e) => {\n    console.log('Button got clicked');\n    console.log(e);\n    cityName = elems().city.value;\n  };\n\n  return cityName;\n};\n\nconst updateInfo = (values) => {\n  elems().title.innerHTML = `${values.titleDt}, ${values.countryDt}`;\n  elems().rTemp.innerHTML = values.tempDT;\n  elems().feels.innerHTML = values.feelsDt;\n  elems().maxTemp.innerHTML = values.maxTempDT;\n  elems().minTemp.innerHTML = values.minTempDT;\n  elems().sky.innerHTML = values.skyDT;\n  elems().cloud.innerHTML = values.cloudDT;\n  elems().speed.innerHTML = values.speedDT;\n  elems().humid.innerHTML = values.humidDT;\n};\n\n\n\n\n// let f = document.querySelector('#flag');\n// f.onclick = () => console.log('flag was clicked');\n\n//# sourceURL=webpack:///./src/javascript/dom-work.js?");

/***/ }),

/***/ "./src/javascript/layout.js":
/*!**********************************!*\
  !*** ./src/javascript/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst layout = `\n<div id=\"top-backgnd\">\n    <div id=\"backgnd\">\n      <h1 class=\"title\">WEATHER APP</h1>\n      <form>\n        <input id=\"city\" class=\"input\" type=\"city\" placeholder=\"CITY\" required>\n        <button id=\"submit\" class=\"input\" type=\"button\">&#x1f50d;</button>\n      </form>\n    </div>\n  </div>\n  <div class=\"bottom\">\n    <h4 class=\"date\">August 19, 2020 <img id=\"flag\" src=\"https://flagpedia.net/data/flags/w580/mx.png\" alt=\"\"></h4>\n    <div class=\"info-1\">\n      <div id=\"clouds\" class=\"d\">\n        <p>Sky</p>\n        <img id=\"cloud\" src=\"https://openweathermap.org/img/wn/04d@4x.png\" alt=\"\">\n        <p id=\"sky\">broken clouds</p>\n      </div>\n      <div id=\"temp\" class=\"d\">\n        <p class=\"realTemp\">18°</p>\n        <div id=\"degrees\">\n          <span id=\"degc\">C</span>/\n          <span id=\"degf\">F</span>\n        </div>\n        <p class=\"feels\">Feels like: <span class=\"temp2\">12°</span></p>\n        <p class=\"max-min\"><span class=\"maxTemp t2\">26°</span> / <span class=\"minTemp t2\">26°</span></p>\n      </div>\n    </div>\n    <div class=\"info-2\">\n      <p id=\"speed\">1008 m/s</p>\n      <p id=\"humidity\">88%</p>\n    </div>\n  </div>\n`;\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (layout);\n\n//# sourceURL=webpack:///./src/javascript/layout.js?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles/style.scss?");

/***/ })

/******/ });