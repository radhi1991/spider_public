webpackHotUpdate_N_E("pages/sitemap.xml",{

/***/ "./src/pages/sitemap.xml.jsx":
/*!***********************************!*\
  !*** ./src/pages/sitemap.xml.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {var _this = undefined;\n\nvar formatDate = function formatDate(timestamp) {\n  var date = new Date(timestamp);\n  return \"\".concat(date.getFullYear(), \"-\").concat((\"0\" + (_this.getMonth() + 1)).slice(-2), \"-\").concat(date.getDate());\n};\n\nvar asOf = function asOf() {\n  return formatDate(new Date());\n};\n\nvar toUrl = function toUrl(host, route) {\n  return \"  <url>\\n    <loc>https://\".concat(host).concat(route, \"</loc>\\n    <lastmod>\").concat(asOf(), \"</lastmod>\\n    <changefreq>daily</changefreq>\\n  </url>\");\n};\n\nvar createSitemap = function createSitemap(host, routes) {\n  return \"<?xml version=\\\"1.0\\\" encoding=\\\"UTF-8\\\"?>\\n<urlset xmlns=\\\"http://www.sitemaps.org/schemas/sitemap/0.9\\\" xmlns:xsi=\\\"http://www.w3.org/2001/XMLSchema-instance\\\" xsi:schemaLocation=\\\"http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd\\\">\\n\".concat(routes.map(function (route) {\n    return toUrl(host, route);\n  }).join(''), \"\\n  <url>\\n    <loc>https://comcast.github.io/humans.txt</loc>\\n    <lastmod>2020-12-22</lastmod>\\n    <changefreq>monthly</changefreq>\\n  </url>\\n</urlset>\");\n};\n\nvar Sitemap = function Sitemap() {};\n\n_c = Sitemap;\n\nSitemap.getInitialProps = function (_ref) {\n  var res = _ref.res,\n      req = _ref.req;\n  var routes = ['', '/projects', '/people', '/community', '/events', '/blog'];\n  var sitemap = createSitemap(req.headers.host, routes);\n  res.setHeader('Content-Type', 'text/xml');\n  res.write(sitemap);\n  res.end();\n  return res;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sitemap);\n\nvar _c;\n\n$RefreshReg$(_c, \"Sitemap\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3NpdGVtYXAueG1sLmpzeD84ODIzIl0sIm5hbWVzIjpbImZvcm1hdERhdGUiLCJ0aW1lc3RhbXAiLCJkYXRlIiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJzbGljZSIsImdldERhdGUiLCJhc09mIiwidG9VcmwiLCJob3N0Iiwicm91dGUiLCJjcmVhdGVTaXRlbWFwIiwicm91dGVzIiwibWFwIiwiam9pbiIsIlNpdGVtYXAiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJyZXEiLCJzaXRlbWFwIiwiaGVhZGVycyIsInNldEhlYWRlciIsIndyaXRlIiwiZW5kIl0sIm1hcHBpbmdzIjoiOzs7QUFBQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxTQUFELEVBQWU7QUFDaEMsTUFBTUMsSUFBSSxHQUFHLElBQUlDLElBQUosQ0FBU0YsU0FBVCxDQUFiO0FBQ0EsbUJBQVVDLElBQUksQ0FBQ0UsV0FBTCxFQUFWLGNBQWdDLENBQUMsT0FBTyxLQUFJLENBQUNDLFFBQUwsS0FBa0IsQ0FBekIsQ0FBRCxFQUE4QkMsS0FBOUIsQ0FBb0MsQ0FBQyxDQUFyQyxDQUFoQyxjQUEyRUosSUFBSSxDQUFDSyxPQUFMLEVBQTNFO0FBQ0QsQ0FIRDs7QUFLQSxJQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLFNBQU1SLFVBQVUsQ0FBQyxJQUFJRyxJQUFKLEVBQUQsQ0FBaEI7QUFBQSxDQUFiOztBQUVBLElBQU1NLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDZDQUNLRCxJQURMLFNBQ1lDLEtBRFosa0NBRUNILElBQUksRUFGTDtBQUFBLENBQWQ7O0FBTUEsSUFBTUksYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDRixJQUFELEVBQU9HLE1BQVA7QUFBQSxrVEFFcEJBLE1BQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQUNILEtBQUQ7QUFBQSxXQUFXRixLQUFLLENBQUNDLElBQUQsRUFBT0MsS0FBUCxDQUFoQjtBQUFBLEdBQVgsRUFBMENJLElBQTFDLENBQStDLEVBQS9DLENBRm9CO0FBQUEsQ0FBdEI7O0FBVUEsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBTSxDQUFFLENBQXhCOztLQUFNQSxPOztBQUVOQSxPQUFPLENBQUNDLGVBQVIsR0FBMEIsZ0JBQWtCO0FBQUEsTUFBZkMsR0FBZSxRQUFmQSxHQUFlO0FBQUEsTUFBVkMsR0FBVSxRQUFWQSxHQUFVO0FBQzFDLE1BQU1OLE1BQU0sR0FBRyxDQUFDLEVBQUQsRUFBSyxXQUFMLEVBQWtCLFNBQWxCLEVBQTZCLFlBQTdCLEVBQTJDLFNBQTNDLEVBQXNELE9BQXRELENBQWY7QUFDQSxNQUFNTyxPQUFPLEdBQUdSLGFBQWEsQ0FBQ08sR0FBRyxDQUFDRSxPQUFKLENBQVlYLElBQWIsRUFBbUJHLE1BQW5CLENBQTdCO0FBRUFLLEtBQUcsQ0FBQ0ksU0FBSixDQUFjLGNBQWQsRUFBOEIsVUFBOUI7QUFDQUosS0FBRyxDQUFDSyxLQUFKLENBQVVILE9BQVY7QUFDQUYsS0FBRyxDQUFDTSxHQUFKO0FBQ0EsU0FBT04sR0FBUDtBQUNELENBUkQ7O0FBVWVGLHNFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL3NpdGVtYXAueG1sLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGZvcm1hdERhdGUgPSAodGltZXN0YW1wKSA9PiB7XG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aW1lc3RhbXApO1xuICByZXR1cm4gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0keyhcIjBcIiArICh0aGlzLmdldE1vbnRoKCkgKyAxKSkuc2xpY2UoLTIpfS0ke2RhdGUuZ2V0RGF0ZSgpfWA7XG59O1xuXG5jb25zdCBhc09mID0gKCkgPT4gZm9ybWF0RGF0ZShuZXcgRGF0ZSgpKTtcblxuY29uc3QgdG9VcmwgPSAoaG9zdCwgcm91dGUpID0+IGAgIDx1cmw+XG4gICAgPGxvYz5odHRwczovLyR7aG9zdH0ke3JvdXRlfTwvbG9jPlxuICAgIDxsYXN0bW9kPiR7YXNPZigpfTwvbGFzdG1vZD5cbiAgICA8Y2hhbmdlZnJlcT5kYWlseTwvY2hhbmdlZnJlcT5cbiAgPC91cmw+YDtcblxuY29uc3QgY3JlYXRlU2l0ZW1hcCA9IChob3N0LCByb3V0ZXMpID0+IGA8P3htbCB2ZXJzaW9uPVwiMS4wXCIgZW5jb2Rpbmc9XCJVVEYtOFwiPz5cbjx1cmxzZXQgeG1sbnM9XCJodHRwOi8vd3d3LnNpdGVtYXBzLm9yZy9zY2hlbWFzL3NpdGVtYXAvMC45XCIgeG1sbnM6eHNpPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMS9YTUxTY2hlbWEtaW5zdGFuY2VcIiB4c2k6c2NoZW1hTG9jYXRpb249XCJodHRwOi8vd3d3LnNpdGVtYXBzLm9yZy9zY2hlbWFzL3NpdGVtYXAvMC45IGh0dHA6Ly93d3cuc2l0ZW1hcHMub3JnL3NjaGVtYXMvc2l0ZW1hcC8wLjkvc2l0ZW1hcC54c2RcIj5cbiR7cm91dGVzLm1hcCgocm91dGUpID0+IHRvVXJsKGhvc3QsIHJvdXRlKSkuam9pbignJyl9XG4gIDx1cmw+XG4gICAgPGxvYz5odHRwczovL2NvbWNhc3QuZ2l0aHViLmlvL2h1bWFucy50eHQ8L2xvYz5cbiAgICA8bGFzdG1vZD4yMDIwLTEyLTIyPC9sYXN0bW9kPlxuICAgIDxjaGFuZ2VmcmVxPm1vbnRobHk8L2NoYW5nZWZyZXE+XG4gIDwvdXJsPlxuPC91cmxzZXQ+YDtcblxuY29uc3QgU2l0ZW1hcCA9ICgpID0+IHt9O1xuXG5TaXRlbWFwLmdldEluaXRpYWxQcm9wcyA9ICh7IHJlcywgcmVxIH0pID0+IHtcbiAgY29uc3Qgcm91dGVzID0gWycnLCAnL3Byb2plY3RzJywgJy9wZW9wbGUnLCAnL2NvbW11bml0eScsICcvZXZlbnRzJywgJy9ibG9nJ107XG4gIGNvbnN0IHNpdGVtYXAgPSBjcmVhdGVTaXRlbWFwKHJlcS5oZWFkZXJzLmhvc3QsIHJvdXRlcyk7XG5cbiAgcmVzLnNldEhlYWRlcignQ29udGVudC1UeXBlJywgJ3RleHQveG1sJyk7XG4gIHJlcy53cml0ZShzaXRlbWFwKTtcbiAgcmVzLmVuZCgpO1xuICByZXR1cm4gcmVzO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2l0ZW1hcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/sitemap.xml.jsx\n");

/***/ })

})