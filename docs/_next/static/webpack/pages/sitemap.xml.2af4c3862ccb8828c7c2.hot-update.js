webpackHotUpdate_N_E("pages/sitemap.xml",{

/***/ "./src/pages/sitemap.xml.jsx":
/*!***********************************!*\
  !*** ./src/pages/sitemap.xml.jsx ***!
  \***********************************/
/*! exports provided: getInitialProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getInitialProps\", function() { return getInitialProps; });\nvar formatDate = function formatDate(timestamp) {\n  var date = new Date(timestamp);\n  return \"\".concat(date.getFullYear(), \"-\").concat(date.getMonth() + 1, \"-\").concat(date.getDate());\n};\n\nvar asOf = function asOf() {\n  return formatDate(new Date());\n};\n\nvar toUrl = function toUrl(host, route) {\n  return \"  <url>\\n    <loc>https://\".concat(host).concat(route, \"</loc>\\n    <lastmod>\").concat(asOf(), \"</lastmod>\\n    <changefreq>daily</changefreq>\\n  </url>\");\n};\n\nvar createSitemap = function createSitemap(host, routes) {\n  return \"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<urlset xmlns=\\\"http://www.sitemaps.org/schemas/sitemap/0.9\\\" xmlns:xsi=\\\"http://www.w3.org/2001/XMLSchema-instance\\\" xsi:schemaLocation=\\\"http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd\\\">\\n\".concat(routes.map(function (route) {\n    return toUrl(host, route);\n  }).join(''), \"\\n  <url>\\n    <loc>https://comcast.github.io/humans.txt</loc>\\n    <lastmod>2020-12-22</lastmod>\\n    <changefreq>monthly</changefreq>\\n  </url>\\n</urlset>\");\n};\n\nvar Sitemap = function Sitemap() {};\n\n_c = Sitemap;\nvar getInitialProps = function getInitialProps(_ref) {\n  var res = _ref.res,\n      req = _ref.req;\n  var routes = ['', '/projects', '/people', '/community', '/events', '/blog'];\n  var sitemap = createSitemap(req.headers.host, routes);\n  res.setHeader('Content-Type', 'text/xml');\n  res.write(sitemap);\n  res.end();\n  return res;\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sitemap);\n\nvar _c;\n\n$RefreshReg$(_c, \"Sitemap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NpdGVtYXAueG1sLmpzeD84ODIzIl0sIm5hbWVzIjpbImZvcm1hdERhdGUiLCJ0aW1lc3RhbXAiLCJkYXRlIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiYXNPZiIsInRvVXJsIiwiaG9zdCIsInJvdXRlIiwiY3JlYXRlU2l0ZW1hcCIsInJvdXRlcyIsIm1hcCIsImpvaW4iLCJTaXRlbWFwIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwicmVxIiwic2l0ZW1hcCIsImhlYWRlcnMiLCJzZXRIZWFkZXIiLCJ3cml0ZSIsImVuZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLENBQUNDLFNBQUQsRUFBZTtBQUNoQyxNQUFNQyxJQUFJLEdBQUcsSUFBSUMsSUFBSixDQUFTRixTQUFULENBQWI7QUFDQSxtQkFBVUMsSUFBSSxDQUFDRSxXQUFMLEVBQVYsY0FBZ0NGLElBQUksQ0FBQ0csUUFBTCxLQUFrQixDQUFsRCxjQUF1REgsSUFBSSxDQUFDSSxPQUFMLEVBQXZEO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFNBQU1QLFVBQVUsQ0FBQyxJQUFJRyxJQUFKLEVBQUQsQ0FBaEI7QUFBQSxDQUFiOztBQUVBLElBQU1LLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDZDQUNLRCxJQURMLFNBQ1lDLEtBRFosa0NBRUNILElBQUksRUFGTDtBQUFBLENBQWQ7O0FBTUEsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDRixJQUFELEVBQU9HLE1BQVA7QUFBQSxrVEFFcEJBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQUNILEtBQUQ7QUFBQSxXQUFXRixLQUFLLENBQUNDLElBQUQsRUFBT0MsS0FBUCxDQUFoQjtBQUFBLEdBQVgsRUFBMENJLElBQTFDLENBQStDLEVBQS9DLENBRm9CO0FBQUEsQ0FBdEI7O0FBVUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTSxDQUFFLENBQXhCOztLQUFNQSxPO0FBRUMsSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFrQjtBQUFBLE1BQWZDLEdBQWUsUUFBZkEsR0FBZTtBQUFBLE1BQVZDLEdBQVUsUUFBVkEsR0FBVTtBQUMvQyxNQUFNTixNQUFNLEdBQUcsQ0FBQyxFQUFELEVBQUssV0FBTCxFQUFrQixTQUFsQixFQUE2QixZQUE3QixFQUEyQyxTQUEzQyxFQUFzRCxPQUF0RCxDQUFmO0FBQ0EsTUFBTU8sT0FBTyxHQUFHUixhQUFhLENBQUNPLEdBQUcsQ0FBQ0UsT0FBSixDQUFZWCxJQUFiLEVBQW1CRyxNQUFuQixDQUE3QjtBQUVBSyxLQUFHLENBQUNJLFNBQUosQ0FBYyxjQUFkLEVBQThCLFVBQTlCO0FBQ0FKLEtBQUcsQ0FBQ0ssS0FBSixDQUFVSCxPQUFWO0FBQ0FGLEtBQUcsQ0FBQ00sR0FBSjtBQUNBLFNBQU9OLEdBQVA7QUFDRCxDQVJNO0FBVVFGLHNFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3NpdGVtYXAueG1sLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm1hdERhdGUgPSAodGltZXN0YW1wKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xuICByZXR1cm4gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke2RhdGUuZ2V0TW9udGgoKSArIDF9LSR7ZGF0ZS5nZXREYXRlKCl9YDtcbn07XG5cbmNvbnN0IGFzT2YgPSAoKSA9PiBmb3JtYXREYXRlKG5ldyBEYXRlKCkpO1xuXG5jb25zdCB0b1VybCA9IChob3N0LCByb3V0ZSkgPT4gYCAgPHVybD5cbiAgICA8bG9jPmh0dHBzOi8vJHtob3N0fSR7cm91dGV9PC9sb2M+XG4gICAgPGxhc3Rtb2Q+JHthc09mKCl9PC9sYXN0bW9kPlxuICAgIDxjaGFuZ2VmcmVxPmRhaWx5PC9jaGFuZ2VmcmVxPlxuICA8L3VybD5gO1xuXG5jb25zdCBjcmVhdGVTaXRlbWFwID0gKGhvc3QsIHJvdXRlcykgPT4gYDw/eG1sIHZlcnNpb249XCIxLjBcIiBlbmNvZGluZz1cIlVURi04XCI/PlxuPHVybHNldCB4bWxucz1cImh0dHA6Ly93d3cuc2l0ZW1hcHMub3JnL3NjaGVtYXMvc2l0ZW1hcC8wLjlcIiB4bWxuczp4c2k9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAxL1hNTFNjaGVtYS1pbnN0YW5jZVwiIHhzaTpzY2hlbWFMb2NhdGlvbj1cImh0dHA6Ly93d3cuc2l0ZW1hcHMub3JnL3NjaGVtYXMvc2l0ZW1hcC8wLjkgaHR0cDovL3d3dy5zaXRlbWFwcy5vcmcvc2NoZW1hcy9zaXRlbWFwLzAuOS9zaXRlbWFwLnhzZFwiPlxuJHtyb3V0ZXMubWFwKChyb3V0ZSkgPT4gdG9VcmwoaG9zdCwgcm91dGUpKS5qb2luKCcnKX1cbiAgPHVybD5cbiAgICA8bG9jPmh0dHBzOi8vY29tY2FzdC5naXRodWIuaW8vaHVtYW5zLnR4dDwvbG9jPlxuICAgIDxsYXN0bW9kPjIwMjAtMTItMjI8L2xhc3Rtb2Q+XG4gICAgPGNoYW5nZWZyZXE+bW9udGhseTwvY2hhbmdlZnJlcT5cbiAgPC91cmw+XG48L3VybHNldD5gO1xuXG5jb25zdCBTaXRlbWFwID0gKCkgPT4ge307XG5cbmV4cG9ydCBjb25zdCBnZXRJbml0aWFsUHJvcHMgPSAoeyByZXMsIHJlcSB9KSA9PiB7XG4gIGNvbnN0IHJvdXRlcyA9IFsnJywgJy9wcm9qZWN0cycsICcvcGVvcGxlJywgJy9jb21tdW5pdHknLCAnL2V2ZW50cycsICcvYmxvZyddO1xuICBjb25zdCBzaXRlbWFwID0gY3JlYXRlU2l0ZW1hcChyZXEuaGVhZGVycy5ob3N0LCByb3V0ZXMpO1xuXG4gIHJlcy5zZXRIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICd0ZXh0L3htbCcpO1xuICByZXMud3JpdGUoc2l0ZW1hcCk7XG4gIHJlcy5lbmQoKTtcbiAgcmV0dXJuIHJlcztcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpdGVtYXA7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/sitemap.xml.jsx\n");

/***/ })

})