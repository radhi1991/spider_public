webpackHotUpdate_N_E("pages/blog",{

/***/ "./src/components/Pagination/index.jsx":
/*!*********************************************!*\
  !*** ./src/components/Pagination/index.jsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Pagination/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/Pagination/index.jsx\",\n    _this = undefined;\n\n\n\n\nvar paginate = function paginate(currentPage, endPage, onPageSelect) {\n  var n = 0;\n  var pages = [];\n\n  while (n < endPage) {\n    if (currentPage >= 4 && n === 1 || n > 4 && currentPage <= endPage - 5 && (n + 1) % 5 === 0 || n >= currentPage + 2 && n <= currentPage - 2) {\n      pages.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"page\"],\n        children: \"\\u2026\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 18\n      }, _this));\n    }\n\n    if (n === 0 || n < 5 && currentPage < 3 || n <= currentPage + 2 && n >= currentPage - 2 || (n + 1) % 5 === 0 || n > 4 && currentPage >= endPage - 4) {\n      pages.push( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        type: \"button\",\n        onClick: function onClick(e) {\n          return onPageSelect(e);\n        },\n        value: n,\n        className: \"\".concat(_style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"page\"], \" \").concat(currentPage === n ? _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"selected\"] : null),\n        children: n + 1\n      }, \"button\".concat(n), false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 18\n      }, _this));\n    }\n\n    n += 1;\n  }\n\n  return pages;\n};\n\nvar Pagination = function Pagination(_ref) {\n  var itemType = _ref.itemType,\n      count = _ref.count,\n      currentPage = _ref.currentPage,\n      onPageSelect = _ref.onPageSelect;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"pagination\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"repoCount\"],\n      children: [count, \" \", count === 1 ? itemType[0] : itemType[1]]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }, _this), count > 10 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"paginationButtons\"],\n      children: [\"\\u2190\", paginate(parseInt(currentPage, 10), Math.ceil(count / 10), onPageSelect), \"\\u2192\"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      className: _style_module_css__WEBPACK_IMPORTED_MODULE_2__[\"pagesCount\"],\n      children: [\"page \", parseInt(currentPage, 10) + 1, \" of \", Math.ceil(count / 10)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = Pagination;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Pagination);\nPagination.propTypes = {\n  itemType: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired).isRequired,\n  count: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n  currentPage: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number.isRequired,\n  onPageSelect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Pagination\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvUGFnaW5hdGlvbi9pbmRleC5qc3g/ZjE2MCJdLCJuYW1lcyI6WyJwYWdpbmF0ZSIsImN1cnJlbnRQYWdlIiwiZW5kUGFnZSIsIm9uUGFnZVNlbGVjdCIsIm4iLCJwYWdlcyIsInB1c2giLCJwYWdlIiwiZSIsInNlbGVjdGVkIiwiUGFnaW5hdGlvbiIsIml0ZW1UeXBlIiwiY291bnQiLCJwYWdpbmF0aW9uIiwicmVwb0NvdW50IiwicGFnaW5hdGlvbkJ1dHRvbnMiLCJwYXJzZUludCIsIk1hdGgiLCJjZWlsIiwicGFnZXNDb3VudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTs7QUFTQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxXQUFELEVBQWNDLE9BQWQsRUFBdUJDLFlBQXZCLEVBQXdDO0FBQ3ZELE1BQUlDLENBQUMsR0FBRyxDQUFSO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLEVBQWQ7O0FBRUEsU0FBT0QsQ0FBQyxHQUFHRixPQUFYLEVBQW9CO0FBQ2xCLFFBQU1ELFdBQVcsSUFBSSxDQUFoQixJQUNGRyxDQUFDLEtBQUssQ0FETCxJQUVDQSxDQUFDLEdBQUcsQ0FBSixJQUFTSCxXQUFXLElBQUlDLE9BQU8sR0FBRyxDQUFuQyxJQUNBLENBQUNFLENBQUMsR0FBRyxDQUFMLElBQVUsQ0FBVixLQUFnQixDQUhoQixJQUlDQSxDQUFDLElBQUlILFdBQVcsR0FBRyxDQUFwQixJQUEyQkcsQ0FBQyxJQUFJSCxXQUFXLEdBQUcsQ0FKbEQsRUFJdUQ7QUFDckRJLFdBQUssQ0FBQ0MsSUFBTixlQUFXO0FBQU0saUJBQVMsRUFBRUMsc0RBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQVg7QUFDRDs7QUFDRCxRQUFLSCxDQUFDLEtBQUssQ0FBUCxJQUNBQSxDQUFDLEdBQUcsQ0FBSixJQUFTSCxXQUFXLEdBQUcsQ0FEdkIsSUFFQ0csQ0FBQyxJQUFJSCxXQUFXLEdBQUcsQ0FBcEIsSUFBMkJHLENBQUMsSUFBSUgsV0FBVyxHQUFHLENBRjlDLElBR0EsQ0FBQ0csQ0FBQyxHQUFHLENBQUwsSUFBVSxDQUFWLEtBQWdCLENBSGhCLElBSUFBLENBQUMsR0FBRyxDQUFKLElBQVNILFdBQVcsSUFBSUMsT0FBTyxHQUFHLENBSnRDLEVBSTBDO0FBQ3hDRyxXQUFLLENBQUNDLElBQU4sZUFBVztBQUFRLFlBQUksRUFBQyxRQUFiO0FBQXNCLGVBQU8sRUFBRSxpQkFBQ0UsQ0FBRDtBQUFBLGlCQUFPTCxZQUFZLENBQUNLLENBQUQsQ0FBbkI7QUFBQSxTQUEvQjtBQUF1RCxhQUFLLEVBQUVKLENBQTlEO0FBQW9GLGlCQUFTLFlBQUtHLHNEQUFMLGNBQWFOLFdBQVcsS0FBS0csQ0FBaEIsR0FBb0JLLDBEQUFwQixHQUErQixJQUE1QyxDQUE3RjtBQUFBLGtCQUFrSkwsQ0FBQyxHQUFHO0FBQXRKLHlCQUErRUEsQ0FBL0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFYO0FBQ0Q7O0FBQ0RBLEtBQUMsSUFBSSxDQUFMO0FBQ0Q7O0FBQ0QsU0FBT0MsS0FBUDtBQUNELENBdEJEOztBQXdCQSxJQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLE1BQ2pCQyxRQURpQixRQUNqQkEsUUFEaUI7QUFBQSxNQUVqQkMsS0FGaUIsUUFFakJBLEtBRmlCO0FBQUEsTUFHakJYLFdBSGlCLFFBR2pCQSxXQUhpQjtBQUFBLE1BSWpCRSxZQUppQixRQUlqQkEsWUFKaUI7QUFBQSxzQkFNakI7QUFBSyxhQUFTLEVBQUVVLDREQUFoQjtBQUFBLDRCQUNFO0FBQUcsZUFBUyxFQUFFQywyREFBZDtBQUFBLGlCQUEwQkYsS0FBMUIsT0FBa0NBLEtBQUssS0FBSyxDQUFWLEdBQWNELFFBQVEsQ0FBQyxDQUFELENBQXRCLEdBQTRCQSxRQUFRLENBQUMsQ0FBRCxDQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHQyxLQUFLLEdBQUcsRUFBUixpQkFDQztBQUFHLGVBQVMsRUFBRUcsbUVBQWQ7QUFBQSwyQkFFR2YsUUFBUSxDQUFDZ0IsUUFBUSxDQUFDZixXQUFELEVBQWMsRUFBZCxDQUFULEVBQTRCZ0IsSUFBSSxDQUFDQyxJQUFMLENBQVVOLEtBQUssR0FBRyxFQUFsQixDQUE1QixFQUFtRFQsWUFBbkQsQ0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFISixlQVNFO0FBQUcsZUFBUyxFQUFFZ0IsNERBQWQ7QUFBQSwwQkFBZ0NILFFBQVEsQ0FBQ2YsV0FBRCxFQUFjLEVBQWQsQ0FBUixHQUE0QixDQUE1RCxVQUFtRWdCLElBQUksQ0FBQ0MsSUFBTCxDQUFVTixLQUFLLEdBQUcsRUFBbEIsQ0FBbkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBTmlCO0FBQUEsQ0FBbkI7O0tBQU1GLFU7QUFtQlNBLHlFQUFmO0FBRUFBLFVBQVUsQ0FBQ1UsU0FBWCxHQUF1QjtBQUNyQlQsVUFBUSxFQUFFVSxpREFBUyxDQUFDQyxPQUFWLENBQWtCRCxpREFBUyxDQUFDRSxNQUFWLENBQWlCQyxVQUFuQyxFQUErQ0EsVUFEcEM7QUFFckJaLE9BQUssRUFBRVMsaURBQVMsQ0FBQ0ksTUFBVixDQUFpQkQsVUFGSDtBQUdyQnZCLGFBQVcsRUFBRW9CLGlEQUFTLENBQUNJLE1BQVYsQ0FBaUJELFVBSFQ7QUFJckJyQixjQUFZLEVBQUVrQixpREFBUyxDQUFDSyxJQUFWLENBQWVGO0FBSlIsQ0FBdkIiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9QYWdpbmF0aW9uL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7XG4gIHBhZ2luYXRpb24sXG4gIHBhZ2UsXG4gIHJlcG9Db3VudCxcbiAgcGFnaW5hdGlvbkJ1dHRvbnMsXG4gIHBhZ2VzQ291bnQsXG4gIHNlbGVjdGVkLFxufSBmcm9tICcuL3N0eWxlLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBwYWdpbmF0ZSA9IChjdXJyZW50UGFnZSwgZW5kUGFnZSwgb25QYWdlU2VsZWN0KSA9PiB7XG4gIGxldCBuID0gMDtcbiAgY29uc3QgcGFnZXMgPSBbXTtcblxuICB3aGlsZSAobiA8IGVuZFBhZ2UpIHtcbiAgICBpZiAoKChjdXJyZW50UGFnZSA+PSA0KVxuICAgICYmIG4gPT09IDEpXG4gICAgfHwgKChuID4gNCAmJiBjdXJyZW50UGFnZSA8PSBlbmRQYWdlIC0gNSlcbiAgICAmJiAoKG4gKyAxKSAlIDUgPT09IDApKVxuICAgIHx8ICgobiA+PSBjdXJyZW50UGFnZSArIDIpICYmIChuIDw9IGN1cnJlbnRQYWdlIC0gMikpKSB7XG4gICAgICBwYWdlcy5wdXNoKDxzcGFuIGNsYXNzTmFtZT17cGFnZX0+JmhlbGxpcDs8L3NwYW4+KTtcbiAgICB9XG4gICAgaWYgKChuID09PSAwKVxuICAgIHx8IChuIDwgNSAmJiBjdXJyZW50UGFnZSA8IDMpXG4gICAgfHwgKChuIDw9IGN1cnJlbnRQYWdlICsgMikgJiYgKG4gPj0gY3VycmVudFBhZ2UgLSAyKSlcbiAgICB8fCAoKG4gKyAxKSAlIDUgPT09IDApXG4gICAgfHwgKG4gPiA0ICYmIGN1cnJlbnRQYWdlID49IGVuZFBhZ2UgLSA0KSkge1xuICAgICAgcGFnZXMucHVzaCg8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoZSkgPT4gb25QYWdlU2VsZWN0KGUpfSB2YWx1ZT17bn0ga2V5PXtgYnV0dG9uJHtufWB9IGNsYXNzTmFtZT17YCR7cGFnZX0gJHtjdXJyZW50UGFnZSA9PT0gbiA/IHNlbGVjdGVkIDogbnVsbH1gfT57biArIDF9PC9idXR0b24+KTtcbiAgICB9XG4gICAgbiArPSAxO1xuICB9XG4gIHJldHVybiBwYWdlcztcbn07XG5cbmNvbnN0IFBhZ2luYXRpb24gPSAoe1xuICBpdGVtVHlwZSxcbiAgY291bnQsXG4gIGN1cnJlbnRQYWdlLFxuICBvblBhZ2VTZWxlY3QsXG59KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPXtwYWdpbmF0aW9ufT5cbiAgICA8cCBjbGFzc05hbWU9e3JlcG9Db3VudH0+e2NvdW50fSB7Y291bnQgPT09IDEgPyBpdGVtVHlwZVswXSA6IGl0ZW1UeXBlWzFdfTwvcD5cbiAgICB7Y291bnQgPiAxMCAmJiAoXG4gICAgICA8cCBjbGFzc05hbWU9e3BhZ2luYXRpb25CdXR0b25zfT5cbiAgICAgICAgJmxhcnI7XG4gICAgICAgIHtwYWdpbmF0ZShwYXJzZUludChjdXJyZW50UGFnZSwgMTApLCBNYXRoLmNlaWwoY291bnQgLyAxMCksIG9uUGFnZVNlbGVjdCl9XG4gICAgICAgICZyYXJyO1xuICAgICAgPC9wPlxuICAgICl9XG4gICAgPHAgY2xhc3NOYW1lPXtwYWdlc0NvdW50fT5wYWdlIHtwYXJzZUludChjdXJyZW50UGFnZSwgMTApICsgMX0gb2Yge01hdGguY2VpbChjb3VudCAvIDEwKX08L3A+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcblxuUGFnaW5hdGlvbi5wcm9wVHlwZXMgPSB7XG4gIGl0ZW1UeXBlOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQpLmlzUmVxdWlyZWQsXG4gIGNvdW50OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGN1cnJlbnRQYWdlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG9uUGFnZVNlbGVjdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Pagination/index.jsx\n");

/***/ })

})