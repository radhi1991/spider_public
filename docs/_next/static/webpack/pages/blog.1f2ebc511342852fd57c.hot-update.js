webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/components/ArticleItem/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/ArticleItem/index.jsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/ArticleItem/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/ArticleItem/index.jsx\",\n    _this = undefined;\n\n/* eslint-disable no-bitwise */\n\n\n\n\nvar ArticleItem = function ArticleItem(_ref) {\n  var title = _ref.title,\n      author = _ref.author,\n      description = _ref.description,\n      date = _ref.date,\n      image = _ref.image,\n      url = _ref.url,\n      defaultImage = _ref.defaultImage;\n\n  var hashCode = function hashCode(s) {\n    return s.split('').reduce(function (a, b) {\n      var newA = (a << 5) - a + b.charCodeAt(0);\n      return newA & newA;\n    }, 0);\n  };\n\n  var intToRGB = function intToRGB(i) {\n    var c = (i & 0x00FFFFFF).toString(16).toUpperCase();\n    return '00000'.substring(0, 6 - c.length) + c;\n  };\n\n  var backgroundImage = \"linear-gradient(0deg, #\".concat(intToRGB(hashCode(title)), \"ee 0%, #\").concat(intToRGB(hashCode(title)), \"aa 100%), url(\\\"\").concat(\"\").concat(defaultImage || '/images/blog/featured.jpg', \"\\\")\");\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"article\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleImage\"],\n      style: {\n        backgroundImage: backgroundImage\n      },\n      children: image && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_image__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        src: \"\".concat(\"\").concat(image),\n        alt: \"\",\n        layout: \"fill\",\n        objectFit: \"cover\",\n        objectPosition: \"center\",\n        loading: \"lazy\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 19\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleMessage\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleTitle\"],\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleLink\"],\n          href: url,\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 38\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleDate\"],\n        children: date\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 44,\n        columnNumber: 9\n      }, _this), author && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleAuthor\"],\n        children: [\"by \", author]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 20\n      }, _this), description && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"articleDescription\"],\n        children: description\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 46,\n        columnNumber: 25\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this)]\n  }, \"articles\".concat(title), true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = ArticleItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ArticleItem);\nArticleItem.propTypes = {\n  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  author: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  date: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  url: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n  defaultImage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"ArticleItem\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZUl0ZW0vaW5kZXguanN4PzY4MTEiXSwibmFtZXMiOlsiQXJ0aWNsZUl0ZW0iLCJ0aXRsZSIsImF1dGhvciIsImRlc2NyaXB0aW9uIiwiZGF0ZSIsImltYWdlIiwidXJsIiwiZGVmYXVsdEltYWdlIiwiaGFzaENvZGUiLCJzIiwic3BsaXQiLCJyZWR1Y2UiLCJhIiwiYiIsIm5ld0EiLCJjaGFyQ29kZUF0IiwiaW50VG9SR0IiLCJpIiwiYyIsInRvU3RyaW5nIiwidG9VcHBlckNhc2UiLCJzdWJzdHJpbmciLCJsZW5ndGgiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwcm9jZXNzIiwiYXJ0aWNsZSIsImFydGljbGVJbWFnZSIsImFydGljbGVNZXNzYWdlIiwiYXJ0aWNsZVRpdGxlIiwiYXJ0aWNsZUxpbmsiLCJhcnRpY2xlRGF0ZSIsImFydGljbGVBdXRob3IiLCJhcnRpY2xlRGVzY3JpcHRpb24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBOztBQVdBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BUWQ7QUFBQSxNQVBKQyxLQU9JLFFBUEpBLEtBT0k7QUFBQSxNQU5KQyxNQU1JLFFBTkpBLE1BTUk7QUFBQSxNQUxKQyxXQUtJLFFBTEpBLFdBS0k7QUFBQSxNQUpKQyxJQUlJLFFBSkpBLElBSUk7QUFBQSxNQUhKQyxLQUdJLFFBSEpBLEtBR0k7QUFBQSxNQUZKQyxHQUVJLFFBRkpBLEdBRUk7QUFBQSxNQURKQyxZQUNJLFFBREpBLFlBQ0k7O0FBQ0osTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsQ0FBRDtBQUFBLFdBQU9BLENBQUMsQ0FBQ0MsS0FBRixDQUFRLEVBQVIsRUFBWUMsTUFBWixDQUFtQixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUFFLFVBQU1DLElBQUksR0FBSSxDQUFDRixDQUFDLElBQUksQ0FBTixJQUFXQSxDQUFaLEdBQWlCQyxDQUFDLENBQUNFLFVBQUYsQ0FBYSxDQUFiLENBQTlCO0FBQStDLGFBQU9ELElBQUksR0FBR0EsSUFBZDtBQUFxQixLQUFuRyxFQUFxRyxDQUFyRyxDQUFQO0FBQUEsR0FBakI7O0FBRUEsTUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsQ0FBRCxFQUFPO0FBQ3RCLFFBQU1DLENBQUMsR0FBRyxDQUFDRCxDQUFDLEdBQUcsVUFBTCxFQUNQRSxRQURPLENBQ0UsRUFERixFQUVQQyxXQUZPLEVBQVY7QUFJQSxXQUFPLFFBQVFDLFNBQVIsQ0FBa0IsQ0FBbEIsRUFBcUIsSUFBSUgsQ0FBQyxDQUFDSSxNQUEzQixJQUFxQ0osQ0FBNUM7QUFDRCxHQU5EOztBQVFBLE1BQU1LLGVBQWUsb0NBQTZCUCxRQUFRLENBQUNSLFFBQVEsQ0FBQ1AsS0FBRCxDQUFULENBQXJDLHFCQUFpRWUsUUFBUSxDQUFDUixRQUFRLENBQUNQLEtBQUQsQ0FBVCxDQUF6RSw2QkFBNEd1QixFQUE1RyxTQUF1SWpCLFlBQVksSUFBSSwyQkFBdkosUUFBckI7QUFFQSxzQkFDRTtBQUFTLGFBQVMsRUFBRWtCLHlEQUFwQjtBQUFBLDRCQUNFO0FBQUssZUFBUyxFQUFFQyw4REFBaEI7QUFBOEIsV0FBSyxFQUFFO0FBQUVILHVCQUFlLEVBQWZBO0FBQUYsT0FBckM7QUFBQSxnQkFDR2xCLEtBQUssaUJBQUkscUVBQUMsaURBQUQ7QUFBTyxXQUFHLFlBQUttQixFQUFMLFNBQWdDbkIsS0FBaEMsQ0FBVjtBQUFtRCxXQUFHLEVBQUMsRUFBdkQ7QUFBMEQsY0FBTSxFQUFDLE1BQWpFO0FBQXdFLGlCQUFTLEVBQUMsT0FBbEY7QUFBMEYsc0JBQWMsRUFBQyxRQUF6RztBQUFrSCxlQUFPLEVBQUM7QUFBMUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURaO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFO0FBQUssZUFBUyxFQUFFc0IsZ0VBQWhCO0FBQUEsOEJBQ0U7QUFBSSxpQkFBUyxFQUFFQyw4REFBZjtBQUFBLCtCQUE2QjtBQUFHLG1CQUFTLEVBQUVDLDZEQUFkO0FBQTJCLGNBQUksRUFBRXZCLEdBQWpDO0FBQUEsb0JBQXVDTDtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUVFO0FBQUcsaUJBQVMsRUFBRTZCLDZEQUFkO0FBQUEsa0JBQTRCMUI7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLEVBR0dGLE1BQU0saUJBQUk7QUFBRyxpQkFBUyxFQUFFNkIsK0RBQWQ7QUFBQSwwQkFBaUM3QixNQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIYixFQUlHQyxXQUFXLGlCQUFJO0FBQUcsaUJBQVMsRUFBRTZCLG9FQUFkO0FBQUEsa0JBQW1DN0I7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBLHVCQUE2Q0YsS0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FsQ0Q7O0tBQU1ELFc7QUFvQ1NBLDBFQUFmO0FBRUFBLFdBQVcsQ0FBQ2lDLFNBQVosR0FBd0I7QUFDdEJoQyxPQUFLLEVBQUVpQyxpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQURGO0FBRXRCbEMsUUFBTSxFQUFFZ0MsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFGSDtBQUd0QmpDLGFBQVcsRUFBRStCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBSFI7QUFJdEJoQyxNQUFJLEVBQUU4QixpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQUpEO0FBS3RCL0IsT0FBSyxFQUFFNkIsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFMRjtBQU10QjlCLEtBQUcsRUFBRTRCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBTkE7QUFPdEI3QixjQUFZLEVBQUUyQixpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQVBULENBQXhCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvQXJ0aWNsZUl0ZW0vaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgbm8tYml0d2lzZSAqL1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcblxuaW1wb3J0IHtcbiAgYXJ0aWNsZSxcbiAgYXJ0aWNsZVRpdGxlLFxuICBhcnRpY2xlTWVzc2FnZSxcbiAgYXJ0aWNsZUF1dGhvcixcbiAgYXJ0aWNsZURlc2NyaXB0aW9uLFxuICBhcnRpY2xlTGluayxcbiAgYXJ0aWNsZUltYWdlLFxuICBhcnRpY2xlRGF0ZSxcbn0gZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJztcblxuY29uc3QgQXJ0aWNsZUl0ZW0gPSAoe1xuICB0aXRsZSxcbiAgYXV0aG9yLFxuICBkZXNjcmlwdGlvbixcbiAgZGF0ZSxcbiAgaW1hZ2UsXG4gIHVybCxcbiAgZGVmYXVsdEltYWdlLFxufSkgPT4ge1xuICBjb25zdCBoYXNoQ29kZSA9IChzKSA9PiBzLnNwbGl0KCcnKS5yZWR1Y2UoKGEsIGIpID0+IHsgY29uc3QgbmV3QSA9ICgoYSA8PCA1KSAtIGEpICsgYi5jaGFyQ29kZUF0KDApOyByZXR1cm4gbmV3QSAmIG5ld0E7IH0sIDApO1xuXG4gIGNvbnN0IGludFRvUkdCID0gKGkpID0+IHtcbiAgICBjb25zdCBjID0gKGkgJiAweDAwRkZGRkZGKVxuICAgICAgLnRvU3RyaW5nKDE2KVxuICAgICAgLnRvVXBwZXJDYXNlKCk7XG5cbiAgICByZXR1cm4gJzAwMDAwJy5zdWJzdHJpbmcoMCwgNiAtIGMubGVuZ3RoKSArIGM7XG4gIH07XG5cbiAgY29uc3QgYmFja2dyb3VuZEltYWdlID0gYGxpbmVhci1ncmFkaWVudCgwZGVnLCAjJHtpbnRUb1JHQihoYXNoQ29kZSh0aXRsZSkpfWVlIDAlLCAjJHtpbnRUb1JHQihoYXNoQ29kZSh0aXRsZSkpfWFhIDEwMCUpLCB1cmwoXCIke3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0ke2RlZmF1bHRJbWFnZSB8fCAnL2ltYWdlcy9ibG9nL2ZlYXR1cmVkLmpwZyd9XCIpYDtcblxuICByZXR1cm4gKFxuICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17YXJ0aWNsZX0ga2V5PXtgYXJ0aWNsZXMke3RpdGxlfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2FydGljbGVJbWFnZX0gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlIH19PlxuICAgICAgICB7aW1hZ2UgJiYgPEltYWdlIHNyYz17YCR7cHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYfSR7aW1hZ2V9YH0gYWx0PVwiXCIgbGF5b3V0PVwiZmlsbFwiIG9iamVjdEZpdD1cImNvdmVyXCIgb2JqZWN0UG9zaXRpb249XCJjZW50ZXJcIiBsb2FkaW5nPVwibGF6eVwiIC8+fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17YXJ0aWNsZU1lc3NhZ2V9PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPXthcnRpY2xlVGl0bGV9PjxhIGNsYXNzTmFtZT17YXJ0aWNsZUxpbmt9IGhyZWY9e3VybH0+e3RpdGxlfTwvYT48L2gzPlxuICAgICAgICA8cCBjbGFzc05hbWU9e2FydGljbGVEYXRlfT57ZGF0ZX08L3A+XG4gICAgICAgIHthdXRob3IgJiYgPHAgY2xhc3NOYW1lPXthcnRpY2xlQXV0aG9yfT5ieSB7YXV0aG9yfTwvcD59XG4gICAgICAgIHtkZXNjcmlwdGlvbiAmJiA8cCBjbGFzc05hbWU9e2FydGljbGVEZXNjcmlwdGlvbn0+e2Rlc2NyaXB0aW9ufTwvcD59XG4gICAgICA8L2Rpdj5cbiAgICA8L2FydGljbGU+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBcnRpY2xlSXRlbTtcblxuQXJ0aWNsZUl0ZW0ucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBhdXRob3I6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGVzY3JpcHRpb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGF0ZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB1cmw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZGVmYXVsdEltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ArticleItem/index.jsx\n");

/***/ })

})