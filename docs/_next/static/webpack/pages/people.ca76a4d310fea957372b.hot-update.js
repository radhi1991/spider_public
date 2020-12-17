webpackHotUpdate_N_E("pages/people",{

/***/ "./src/shared/backgroundImage.js":
/*!***************************************!*\
  !*** ./src/shared/backgroundImage.js ***!
  \***************************************/
/*! exports provided: backgroundImage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"backgroundImage\", function() { return backgroundImage; });\n/* eslint-disable no-bitwise */\nvar hashCode = function hashCode(s) {\n  return s.split('').reduce(function (a, b) {\n    var newA = (a << 5) - a + b.charCodeAt(0);\n    return newA & newA;\n  }, 0);\n};\n\nvar intToRGB = function intToRGB(i) {\n  var c = (i & 0x00FFFFFF).toString(16).toUpperCase();\n  return '00000'.substring(0, 6 - c.length) + c;\n};\n\nvar backgroundImage = function backgroundImage(title, image, defaultImage) {\n  return !image ? \"linear-gradient(0deg, #\".concat(intToRGB(hashCode(title)), \"ee 0%, #\").concat(intToRGB(hashCode(title)), \"aa 100%), url(\\\"\").concat(\"\").concat(defaultImage || '/images/blog/featured.jpg', \"\\\")\") : image;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (backgroundImage);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NoYXJlZC9iYWNrZ3JvdW5kSW1hZ2UuanM/MzhjNyJdLCJuYW1lcyI6WyJoYXNoQ29kZSIsInMiLCJzcGxpdCIsInJlZHVjZSIsImEiLCJiIiwibmV3QSIsImNoYXJDb2RlQXQiLCJpbnRUb1JHQiIsImkiLCJjIiwidG9TdHJpbmciLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsImxlbmd0aCIsImJhY2tncm91bmRJbWFnZSIsInRpdGxlIiwiaW1hZ2UiLCJkZWZhdWx0SW1hZ2UiLCJwcm9jZXNzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFDQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFEO0FBQUEsU0FBT0EsQ0FBQyxDQUFDQyxLQUFGLENBQVEsRUFBUixFQUFZQyxNQUFaLENBQW1CLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQUUsUUFBTUMsSUFBSSxHQUFJLENBQUNGLENBQUMsSUFBSSxDQUFOLElBQVdBLENBQVosR0FBaUJDLENBQUMsQ0FBQ0UsVUFBRixDQUFhLENBQWIsQ0FBOUI7QUFBK0MsV0FBT0QsSUFBSSxHQUFHQSxJQUFkO0FBQXFCLEdBQW5HLEVBQXFHLENBQXJHLENBQVA7QUFBQSxDQUFqQjs7QUFFQSxJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxDQUFELEVBQU87QUFDdEIsTUFBTUMsQ0FBQyxHQUFHLENBQUNELENBQUMsR0FBRyxVQUFMLEVBQ1BFLFFBRE8sQ0FDRSxFQURGLEVBRVBDLFdBRk8sRUFBVjtBQUlBLFNBQU8sUUFBUUMsU0FBUixDQUFrQixDQUFsQixFQUFxQixJQUFJSCxDQUFDLENBQUNJLE1BQTNCLElBQXFDSixDQUE1QztBQUNELENBTkQ7O0FBUU8sSUFBTUssZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVFDLEtBQVIsRUFBZUMsWUFBZjtBQUFBLFNBQWlDLENBQUNELEtBQUQsb0NBQ2xDVCxRQUFRLENBQUNSLFFBQVEsQ0FBQ2dCLEtBQUQsQ0FBVCxDQUQwQixxQkFDRVIsUUFBUSxDQUFDUixRQUFRLENBQUNnQixLQUFELENBQVQsQ0FEViw2QkFDNkNHLEVBRDdDLFNBQ3dFRCxZQUFZLElBQUksMkJBRHhGLFdBRTVERCxLQUYyQjtBQUFBLENBQXhCO0FBS1FGLDhFQUFmIiwiZmlsZSI6Ii4vc3JjL3NoYXJlZC9iYWNrZ3JvdW5kSW1hZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBuby1iaXR3aXNlICovXG5jb25zdCBoYXNoQ29kZSA9IChzKSA9PiBzLnNwbGl0KCcnKS5yZWR1Y2UoKGEsIGIpID0+IHsgY29uc3QgbmV3QSA9ICgoYSA8PCA1KSAtIGEpICsgYi5jaGFyQ29kZUF0KDApOyByZXR1cm4gbmV3QSAmIG5ld0E7IH0sIDApO1xuXG5jb25zdCBpbnRUb1JHQiA9IChpKSA9PiB7XG4gIGNvbnN0IGMgPSAoaSAmIDB4MDBGRkZGRkYpXG4gICAgLnRvU3RyaW5nKDE2KVxuICAgIC50b1VwcGVyQ2FzZSgpO1xuXG4gIHJldHVybiAnMDAwMDAnLnN1YnN0cmluZygwLCA2IC0gYy5sZW5ndGgpICsgYztcbn07XG5cbmV4cG9ydCBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSAodGl0bGUsIGltYWdlLCBkZWZhdWx0SW1hZ2UpID0+ICghaW1hZ2VcbiAgPyBgbGluZWFyLWdyYWRpZW50KDBkZWcsICMke2ludFRvUkdCKGhhc2hDb2RlKHRpdGxlKSl9ZWUgMCUsICMke2ludFRvUkdCKGhhc2hDb2RlKHRpdGxlKSl9YWEgMTAwJSksIHVybChcIiR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfSR7ZGVmYXVsdEltYWdlIHx8ICcvaW1hZ2VzL2Jsb2cvZmVhdHVyZWQuanBnJ31cIilgXG4gIDogaW1hZ2Vcbik7XG5cbmV4cG9ydCBkZWZhdWx0IGJhY2tncm91bmRJbWFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/shared/backgroundImage.js\n");

/***/ })

})