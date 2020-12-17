webpackHotUpdate_N_E("pages/people",{

/***/ "./src/components/Profile/index.jsx":
/*!******************************************!*\
  !*** ./src/components/Profile/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_shared_backgroundImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/backgroundImage */ \"./src/shared/backgroundImage.js\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Profile/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/Profile/index.jsx\",\n    _this = undefined;\n\n\n\n\n\nvar Profile = function Profile(_ref) {\n  var _person$connect;\n\n  var person = _ref.person,\n      defaultImage = _ref.defaultImage;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"profile\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"image\"],\n      style: {\n        backgroundImage: Object(src_shared_backgroundImage__WEBPACK_IMPORTED_MODULE_2__[\"backgroundImage\"])(person.name, person.image, defaultImage)\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"title\"],\n      children: person.name\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"description\"],\n      children: person.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"socialLinks\"],\n      children: (_person$connect = person.connect) === null || _person$connect === void 0 ? void 0 : _person$connect.map(function (social) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: social.link,\n          title: \"\".concat(social.name, \": \").concat(person.name),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: \"vh\",\n            children: [person.name, \" at \", social.name]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 19,\n            columnNumber: 141\n          }, _this)\n        }, \"\".concat(person.name, \"_\").concat(social.name), false, {\n          fileName: _jsxFileName,\n          lineNumber: 19,\n          columnNumber: 40\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nProfile.propTypes = {\n  person: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    bio: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    connect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n      name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n      link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n    }))\n  }).isRequired,\n  defaultImage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Profile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9pbmRleC5qc3g/NTNhZSJdLCJuYW1lcyI6WyJQcm9maWxlIiwicGVyc29uIiwiZGVmYXVsdEltYWdlIiwicHJvZmlsZSIsImltYWdlIiwiYmFja2dyb3VuZEltYWdlIiwibmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzb2NpYWxMaW5rcyIsImNvbm5lY3QiLCJtYXAiLCJzb2NpYWwiLCJsaW5rIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYmlvIiwiYXJyYXlPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFRQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBOztBQUFBLE1BQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLE1BQVdDLFlBQVgsUUFBV0EsWUFBWDtBQUFBLHNCQUNkO0FBQVMsYUFBUyxFQUFFQyx5REFBcEI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUMsdURBQWhCO0FBQXVCLFdBQUssRUFBRTtBQUFFQyx1QkFBZSxFQUFFQSxrRkFBZSxDQUFDSixNQUFNLENBQUNLLElBQVIsRUFBY0wsTUFBTSxDQUFDRyxLQUFyQixFQUE0QkYsWUFBNUI7QUFBbEM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBR0U7QUFBSSxlQUFTLEVBQUVLLHVEQUFmO0FBQUEsZ0JBQXVCTixNQUFNLENBQUNLO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFO0FBQUcsZUFBUyxFQUFFRSw2REFBZDtBQUFBLGdCQUE0QlAsTUFBTSxDQUFDTTtBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFLRTtBQUFLLGVBQVMsRUFBRUUsNkRBQWhCO0FBQUEsbUNBQ0dSLE1BQU0sQ0FBQ1MsT0FEVixvREFDRyxnQkFBZ0JDLEdBQWhCLENBQW9CLFVBQUNDLE1BQUQ7QUFBQSw0QkFBWTtBQUFHLGNBQUksRUFBRUEsTUFBTSxDQUFDQyxJQUFoQjtBQUFzQixlQUFLLFlBQUtELE1BQU0sQ0FBQ04sSUFBWixlQUFxQkwsTUFBTSxDQUFDSyxJQUE1QixDQUEzQjtBQUFBLGlDQUFxRztBQUFNLHFCQUFTLEVBQUMsSUFBaEI7QUFBQSx1QkFBc0JMLE1BQU0sQ0FBQ0ssSUFBN0IsVUFBdUNNLE1BQU0sQ0FBQ04sSUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJHLHFCQUF1RUwsTUFBTSxDQUFDSyxJQUE5RSxjQUFzRk0sTUFBTSxDQUFDTixJQUE3RjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFaO0FBQUEsT0FBcEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGM7QUFBQSxDQUFoQjs7S0FBTU4sTztBQVlTQSxzRUFBZjtBQUVBQSxPQUFPLENBQUNjLFNBQVIsR0FBb0I7QUFDbEJiLFFBQU0sRUFBRWMsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQjtBQUN0QlYsUUFBSSxFQUFFUyxpREFBUyxDQUFDRSxNQUFWLENBQWlCQyxVQUREO0FBRXRCWCxTQUFLLEVBQUVRLGlEQUFTLENBQUNFLE1BQVYsQ0FBaUJDLFVBRkY7QUFHdEJkLFNBQUssRUFBRVcsaURBQVMsQ0FBQ0UsTUFISztBQUl0QkUsT0FBRyxFQUFFSixpREFBUyxDQUFDRSxNQUpPO0FBS3RCUCxXQUFPLEVBQUVLLGlEQUFTLENBQUNLLE9BQVYsQ0FBa0JMLGlEQUFTLENBQUNDLEtBQVYsQ0FBZ0I7QUFDekNWLFVBQUksRUFBRVMsaURBQVMsQ0FBQ0UsTUFBVixDQUFpQkMsVUFEa0I7QUFFekNMLFVBQUksRUFBRUUsaURBQVMsQ0FBQ0UsTUFBVixDQUFpQkM7QUFGa0IsS0FBaEIsQ0FBbEI7QUFMYSxHQUFoQixFQVNMQSxVQVZlO0FBV2xCaEIsY0FBWSxFQUFFYSxpREFBUyxDQUFDRTtBQVhOLENBQXBCIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9pbmRleC5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgYmFja2dyb3VuZEltYWdlIH0gZnJvbSAnc3JjL3NoYXJlZC9iYWNrZ3JvdW5kSW1hZ2UnO1xuXG5pbXBvcnQge1xuICBwcm9maWxlLFxuICB0aXRsZSxcbiAgaW1hZ2UsXG4gIGRlc2NyaXB0aW9uLFxuICBzb2NpYWxMaW5rcyxcbn0gZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJztcblxuY29uc3QgUHJvZmlsZSA9ICh7IHBlcnNvbiwgZGVmYXVsdEltYWdlIH0pID0+IChcbiAgPGFydGljbGUgY2xhc3NOYW1lPXtwcm9maWxlfT5cbiAgICA8ZGl2IGNsYXNzTmFtZT17aW1hZ2V9IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYmFja2dyb3VuZEltYWdlKHBlcnNvbi5uYW1lLCBwZXJzb24uaW1hZ2UsIGRlZmF1bHRJbWFnZSkgfX0+XG4gICAgPC9kaXY+XG4gICAgPGg0IGNsYXNzTmFtZT17dGl0bGV9PntwZXJzb24ubmFtZX08L2g0PlxuICAgIDxwIGNsYXNzTmFtZT17ZGVzY3JpcHRpb259PntwZXJzb24udGl0bGV9PC9wPlxuICAgIDxkaXYgY2xhc3NOYW1lPXtzb2NpYWxMaW5rc30+XG4gICAgICB7cGVyc29uLmNvbm5lY3Q/Lm1hcCgoc29jaWFsKSA9PiA8YSBocmVmPXtzb2NpYWwubGlua30gdGl0bGU9e2Ake3NvY2lhbC5uYW1lfTogJHtwZXJzb24ubmFtZX1gfSBrZXk9e2Ake3BlcnNvbi5uYW1lfV8ke3NvY2lhbC5uYW1lfWB9PjxzcGFuIGNsYXNzTmFtZT1cInZoXCI+e3BlcnNvbi5uYW1lfSBhdCB7c29jaWFsLm5hbWV9PC9zcGFuPjwvYT4pfVxuICAgIDwvZGl2PlxuICA8L2FydGljbGU+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlO1xuXG5Qcm9maWxlLnByb3BUeXBlcyA9IHtcbiAgcGVyc29uOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJpbzogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjb25uZWN0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgICAgbGluazogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIH0pKSxcbiAgfSkuaXNSZXF1aXJlZCxcbiAgZGVmYXVsdEltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Profile/index.jsx\n");

/***/ })

})