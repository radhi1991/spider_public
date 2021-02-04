webpackHotUpdate_N_E("pages/sitemap.xml",{

/***/ "./src/pages/sitemap.xml.jsx":
/*!***********************************!*\
  !*** ./src/pages/sitemap.xml.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {var formatDate = function formatDate(timestamp) {\n  var date = new Date(timestamp);\n  return \"\".concat(date.getFullYear(), \"-\").concat(date.getMonth() + 1, \"-\").concat(date.getDate());\n};\n\nvar asOf = function asOf() {\n  return formatDate(new Date());\n};\n\nvar toUrl = function toUrl(host, route) {\n  return \"  <url>\\n    <loc>http://www.\".concat(host).concat(route, \"</loc>\\n    <lastmod>\").concat(asOf(), \"</lastmod>\\n    <changefreq>monthly</changefreq>\\n  </url>\");\n};\n\nvar createSitemap = function createSitemap(host, routes) {\n  return \"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<urlset xmlns=\\\"http://www.sitemaps.org/schemas/sitemap/0.9\\\">\\n\".concat(routes.map(function (route) {\n    return toUrl(host, route);\n  }).join(''), \"\\n  <url>\\n    <loc>https://comcast.github.io/humans.txt</loc>\\n    <lastmod>2020-12-22</lastmod>\\n    <changefreq>monthly</changefreq>\\n  </url>\\n</urlset>\");\n};\n\nvar Sitemap = function Sitemap() {};\n\n_c = Sitemap;\n\nSitemap.getInitialProps = function (_ref) {\n  var res = _ref.res,\n      req = _ref.req;\n  var routes = ['', '/projects', '/people', '/community', '/events', '/blog'];\n  var sitemap = createSitemap(req.headers.host, routes);\n  res.setHeader('Content-Type', 'text/xml');\n  res.write(sitemap);\n  res.end();\n  return res;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sitemap);\n\nvar _c;\n\n$RefreshReg$(_c, \"Sitemap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NpdGVtYXAueG1sLmpzeD84ODIzIl0sIm5hbWVzIjpbImZvcm1hdERhdGUiLCJ0aW1lc3RhbXAiLCJkYXRlIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiYXNPZiIsInRvVXJsIiwiaG9zdCIsInJvdXRlIiwiY3JlYXRlU2l0ZW1hcCIsInJvdXRlcyIsIm1hcCIsImpvaW4iLCJTaXRlbWFwIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwicmVxIiwic2l0ZW1hcCIsImhlYWRlcnMiLCJzZXRIZWFkZXIiLCJ3cml0ZSIsImVuZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxrREFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsU0FBRCxFQUFlO0FBQ2hDLE1BQU1DLElBQUksR0FBRyxJQUFJQyxJQUFKLENBQVNGLFNBQVQsQ0FBYjtBQUNBLG1CQUFVQyxJQUFJLENBQUNFLFdBQUwsRUFBVixjQUFnQ0YsSUFBSSxDQUFDRyxRQUFMLEtBQWtCLENBQWxELGNBQXVESCxJQUFJLENBQUNJLE9BQUwsRUFBdkQ7QUFDRCxDQUhEOztBQUtBLElBQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsU0FBTVAsVUFBVSxDQUFDLElBQUlHLElBQUosRUFBRCxDQUFoQjtBQUFBLENBQWI7O0FBRUEsSUFBTUssS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQO0FBQUEsZ0RBQ1FELElBRFIsU0FDZUMsS0FEZixrQ0FFQ0gsSUFBSSxFQUZMO0FBQUEsQ0FBZDs7QUFNQSxJQUFNSSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNGLElBQUQsRUFBT0csTUFBUDtBQUFBLCtIQUVwQkEsTUFBTSxDQUFDQyxHQUFQLENBQVcsVUFBQ0gsS0FBRDtBQUFBLFdBQVdGLEtBQUssQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLENBQWhCO0FBQUEsR0FBWCxFQUEwQ0ksSUFBMUMsQ0FBK0MsRUFBL0MsQ0FGb0I7QUFBQSxDQUF0Qjs7QUFVQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFNLENBQUUsQ0FBeEI7O0tBQU1BLE87O0FBRU5BLE9BQU8sQ0FBQ0MsZUFBUixHQUEwQixnQkFBa0I7QUFBQSxNQUFmQyxHQUFlLFFBQWZBLEdBQWU7QUFBQSxNQUFWQyxHQUFVLFFBQVZBLEdBQVU7QUFDMUMsTUFBTU4sTUFBTSxHQUFHLENBQUMsRUFBRCxFQUFLLFdBQUwsRUFBa0IsU0FBbEIsRUFBNkIsWUFBN0IsRUFBMkMsU0FBM0MsRUFBc0QsT0FBdEQsQ0FBZjtBQUNBLE1BQU1PLE9BQU8sR0FBR1IsYUFBYSxDQUFDTyxHQUFHLENBQUNFLE9BQUosQ0FBWVgsSUFBYixFQUFtQkcsTUFBbkIsQ0FBN0I7QUFFQUssS0FBRyxDQUFDSSxTQUFKLENBQWMsY0FBZCxFQUE4QixVQUE5QjtBQUNBSixLQUFHLENBQUNLLEtBQUosQ0FBVUgsT0FBVjtBQUNBRixLQUFHLENBQUNNLEdBQUo7QUFDQSxTQUFPTixHQUFQO0FBQ0QsQ0FSRDs7QUFVZUYsc0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvc2l0ZW1hcC54bWwuanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZm9ybWF0RGF0ZSA9ICh0aW1lc3RhbXApID0+IHtcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRpbWVzdGFtcCk7XG4gIHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7ZGF0ZS5nZXRNb250aCgpICsgMX0tJHtkYXRlLmdldERhdGUoKX1gO1xufTtcblxuY29uc3QgYXNPZiA9ICgpID0+IGZvcm1hdERhdGUobmV3IERhdGUoKSk7XG5cbmNvbnN0IHRvVXJsID0gKGhvc3QsIHJvdXRlKSA9PiBgICA8dXJsPlxuICAgIDxsb2M+aHR0cDovL3d3dy4ke2hvc3R9JHtyb3V0ZX08L2xvYz5cbiAgICA8bGFzdG1vZD4ke2FzT2YoKX08L2xhc3Rtb2Q+XG4gICAgPGNoYW5nZWZyZXE+bW9udGhseTwvY2hhbmdlZnJlcT5cbiAgPC91cmw+YDtcblxuY29uc3QgY3JlYXRlU2l0ZW1hcCA9IChob3N0LCByb3V0ZXMpID0+IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbjx1cmxzZXQgeG1sbnM9XCJodHRwOi8vd3d3LnNpdGVtYXBzLm9yZy9zY2hlbWFzL3NpdGVtYXAvMC45XCI+XG4ke3JvdXRlcy5tYXAoKHJvdXRlKSA9PiB0b1VybChob3N0LCByb3V0ZSkpLmpvaW4oJycpfVxuICA8dXJsPlxuICAgIDxsb2M+aHR0cHM6Ly9jb21jYXN0LmdpdGh1Yi5pby9odW1hbnMudHh0PC9sb2M+XG4gICAgPGxhc3Rtb2Q+MjAyMC0xMi0yMjwvbGFzdG1vZD5cbiAgICA8Y2hhbmdlZnJlcT5tb250aGx5PC9jaGFuZ2VmcmVxPlxuICA8L3VybD5cbjwvdXJsc2V0PmA7XG5cbmNvbnN0IFNpdGVtYXAgPSAoKSA9PiB7fTtcblxuU2l0ZW1hcC5nZXRJbml0aWFsUHJvcHMgPSAoeyByZXMsIHJlcSB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlcyA9IFsnJywgJy9wcm9qZWN0cycsICcvcGVvcGxlJywgJy9jb21tdW5pdHknLCAnL2V2ZW50cycsICcvYmxvZyddO1xuICBjb25zdCBzaXRlbWFwID0gY3JlYXRlU2l0ZW1hcChyZXEuaGVhZGVycy5ob3N0LCByb3V0ZXMpO1xuXG4gIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L3htbCcpO1xuICByZXMud3JpdGUoc2l0ZW1hcCk7XG4gIHJlcy5lbmQoKTtcbiAgcmV0dXJuIHJlcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpdGVtYXA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/sitemap.xml.jsx\n");

/***/ })

})