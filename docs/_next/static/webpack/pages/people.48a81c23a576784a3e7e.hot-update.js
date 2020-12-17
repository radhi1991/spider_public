webpackHotUpdate_N_E("pages/people",{

/***/ "./src/components/Profile/index.jsx":
/*!******************************************!*\
  !*** ./src/components/Profile/index.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_shared_backgroundImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/shared/backgroundImage */ \"./src/shared/backgroundImage.js\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Profile/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/Profile/index.jsx\",\n    _this = undefined;\n\n\n\n\n\nvar Profile = function Profile(_ref) {\n  var _person$connect;\n\n  var person = _ref.person,\n      defaultImage = _ref.defaultImage;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"profile\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"image\"],\n      style: {\n        backgroundImage: Object(src_shared_backgroundImage__WEBPACK_IMPORTED_MODULE_2__[\"backgroundImage\"])(person.name, person.image, defaultImage)\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"title\"],\n      children: [person.name, \" \", person.image]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"description\"],\n      children: person.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_3__[\"socialLinks\"],\n      children: (_person$connect = person.connect) === null || _person$connect === void 0 ? void 0 : _person$connect.map(function (social) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n          href: social.link,\n          title: \"\".concat(social.name, \": \").concat(person.name),\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: \"vh\",\n            children: [person.name, \" at \", social.name]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 18,\n            columnNumber: 141\n          }, _this)\n        }, \"\".concat(person.name, \"_\").concat(social.name), false, {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 40\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nProfile.propTypes = {\n  person: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    bio: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    connect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n      name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n      link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n    }))\n  }).isRequired,\n  defaultImage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Profile\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUHJvZmlsZS9pbmRleC5qc3g/NTNhZSJdLCJuYW1lcyI6WyJQcm9maWxlIiwicGVyc29uIiwiZGVmYXVsdEltYWdlIiwicHJvZmlsZSIsImltYWdlIiwiYmFja2dyb3VuZEltYWdlIiwibmFtZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJzb2NpYWxMaW5rcyIsImNvbm5lY3QiLCJtYXAiLCJzb2NpYWwiLCJsaW5rIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic2hhcGUiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwiYmlvIiwiYXJyYXlPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTs7QUFRQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBOztBQUFBLE1BQUdDLE1BQUgsUUFBR0EsTUFBSDtBQUFBLE1BQVdDLFlBQVgsUUFBV0EsWUFBWDtBQUFBLHNCQUNkO0FBQVMsYUFBUyxFQUFFQyx5REFBcEI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBRUMsdURBQWhCO0FBQXVCLFdBQUssRUFBRTtBQUFFQyx1QkFBZSxFQUFFQSxrRkFBZSxDQUFDSixNQUFNLENBQUNLLElBQVIsRUFBY0wsTUFBTSxDQUFDRyxLQUFyQixFQUE0QkYsWUFBNUI7QUFBbEM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSSxlQUFTLEVBQUVLLHVEQUFmO0FBQUEsaUJBQXVCTixNQUFNLENBQUNLLElBQTlCLE9BQXFDTCxNQUFNLENBQUNHLEtBQTVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGLGVBR0U7QUFBRyxlQUFTLEVBQUVJLDZEQUFkO0FBQUEsZ0JBQTRCUCxNQUFNLENBQUNNO0FBQW5DO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFIRixlQUlFO0FBQUssZUFBUyxFQUFFRSw2REFBaEI7QUFBQSxtQ0FDR1IsTUFBTSxDQUFDUyxPQURWLG9EQUNHLGdCQUFnQkMsR0FBaEIsQ0FBb0IsVUFBQ0MsTUFBRDtBQUFBLDRCQUFZO0FBQUcsY0FBSSxFQUFFQSxNQUFNLENBQUNDLElBQWhCO0FBQXNCLGVBQUssWUFBS0QsTUFBTSxDQUFDTixJQUFaLGVBQXFCTCxNQUFNLENBQUNLLElBQTVCLENBQTNCO0FBQUEsaUNBQXFHO0FBQU0scUJBQVMsRUFBQyxJQUFoQjtBQUFBLHVCQUFzQkwsTUFBTSxDQUFDSyxJQUE3QixVQUF1Q00sTUFBTSxDQUFDTixJQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBckcscUJBQXVFTCxNQUFNLENBQUNLLElBQTlFLGNBQXNGTSxNQUFNLENBQUNOLElBQTdGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVo7QUFBQSxPQUFwQjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FEYztBQUFBLENBQWhCOztLQUFNTixPO0FBV1NBLHNFQUFmO0FBRUFBLE9BQU8sQ0FBQ2MsU0FBUixHQUFvQjtBQUNsQmIsUUFBTSxFQUFFYyxpREFBUyxDQUFDQyxLQUFWLENBQWdCO0FBQ3RCVixRQUFJLEVBQUVTLGlEQUFTLENBQUNFLE1BQVYsQ0FBaUJDLFVBREQ7QUFFdEJYLFNBQUssRUFBRVEsaURBQVMsQ0FBQ0UsTUFBVixDQUFpQkMsVUFGRjtBQUd0QmQsU0FBSyxFQUFFVyxpREFBUyxDQUFDRSxNQUhLO0FBSXRCRSxPQUFHLEVBQUVKLGlEQUFTLENBQUNFLE1BSk87QUFLdEJQLFdBQU8sRUFBRUssaURBQVMsQ0FBQ0ssT0FBVixDQUFrQkwsaURBQVMsQ0FBQ0MsS0FBVixDQUFnQjtBQUN6Q1YsVUFBSSxFQUFFUyxpREFBUyxDQUFDRSxNQUFWLENBQWlCQyxVQURrQjtBQUV6Q0wsVUFBSSxFQUFFRSxpREFBUyxDQUFDRSxNQUFWLENBQWlCQztBQUZrQixLQUFoQixDQUFsQjtBQUxhLEdBQWhCLEVBU0xBLFVBVmU7QUFXbEJoQixjQUFZLEVBQUVhLGlEQUFTLENBQUNFO0FBWE4sQ0FBcEIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Qcm9maWxlL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBiYWNrZ3JvdW5kSW1hZ2UgfSBmcm9tICdzcmMvc2hhcmVkL2JhY2tncm91bmRJbWFnZSc7XG5cbmltcG9ydCB7XG4gIHByb2ZpbGUsXG4gIHRpdGxlLFxuICBpbWFnZSxcbiAgZGVzY3JpcHRpb24sXG4gIHNvY2lhbExpbmtzLFxufSBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBQcm9maWxlID0gKHsgcGVyc29uLCBkZWZhdWx0SW1hZ2UgfSkgPT4gKFxuICA8YXJ0aWNsZSBjbGFzc05hbWU9e3Byb2ZpbGV9PlxuICAgIDxkaXYgY2xhc3NOYW1lPXtpbWFnZX0gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBiYWNrZ3JvdW5kSW1hZ2UocGVyc29uLm5hbWUsIHBlcnNvbi5pbWFnZSwgZGVmYXVsdEltYWdlKSB9fSAvPlxuICAgIDxoNCBjbGFzc05hbWU9e3RpdGxlfT57cGVyc29uLm5hbWV9IHtwZXJzb24uaW1hZ2V9PC9oND5cbiAgICA8cCBjbGFzc05hbWU9e2Rlc2NyaXB0aW9ufT57cGVyc29uLnRpdGxlfTwvcD5cbiAgICA8ZGl2IGNsYXNzTmFtZT17c29jaWFsTGlua3N9PlxuICAgICAge3BlcnNvbi5jb25uZWN0Py5tYXAoKHNvY2lhbCkgPT4gPGEgaHJlZj17c29jaWFsLmxpbmt9IHRpdGxlPXtgJHtzb2NpYWwubmFtZX06ICR7cGVyc29uLm5hbWV9YH0ga2V5PXtgJHtwZXJzb24ubmFtZX1fJHtzb2NpYWwubmFtZX1gfT48c3BhbiBjbGFzc05hbWU9XCJ2aFwiPntwZXJzb24ubmFtZX0gYXQge3NvY2lhbC5uYW1lfTwvc3Bhbj48L2E+KX1cbiAgICA8L2Rpdj5cbiAgPC9hcnRpY2xlPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTtcblxuUHJvZmlsZS5wcm9wVHlwZXMgPSB7XG4gIHBlcnNvbjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBiaW86IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY29ubmVjdDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICAgIGxpbms6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICB9KSksXG4gIH0pLmlzUmVxdWlyZWQsXG4gIGRlZmF1bHRJbWFnZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Profile/index.jsx\n");

/***/ })

})