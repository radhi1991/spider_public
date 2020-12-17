webpackHotUpdate_N_E("pages/people",{

/***/ "./src/components/Event/index.jsx":
/*!****************************************!*\
  !*** ./src/components/Event/index.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var src_components_ArticleItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/components/ArticleItem */ \"./src/components/ArticleItem/index.jsx\");\n/* harmony import */ var src_components_Profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/components/Profile */ \"./src/components/Profile/index.jsx\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.module.css */ \"./src/components/Event/style.module.css\");\n/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/nlilly200/dev/comcast.github.io/src/components/Event/index.jsx\",\n    _this = undefined;\n\n\n\n\n\n\nvar Event = function Event(_ref) {\n  var events = _ref.events,\n      talks = _ref.talks,\n      speakers = _ref.speakers;\n  console.log('...');\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: events.map(function (event) {\n      var backgroundImage = \"linear-gradient(0deg, #000c 0%, #0006 100%), url(\".concat(\"\").concat(event.image, \")\");\n      var keynote = talks.filter(function (talk) {\n        return talk.title === event.keynote;\n      });\n      var selectedTalks = talks.filter(function (talk) {\n        return event.specificTalks.includes(talk.title);\n      });\n      var selectedSpeakers = speakers.filter(function (speaker) {\n        return selectedTalks.map(function (talk) {\n          return talk.author.includes(speaker.name);\n        }).includes(true);\n      });\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n        className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"conference\"],\n        style: {\n          backgroundImage: backgroundImage\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n          id: \"conference\",\n          className: \"section__title\",\n          children: [event.title, \": \", event.confTopic]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"card\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"overview\"],\n            children: event.openingRemarksOverview\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n            children: event.openingRemarksDescription\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: \"Keynote\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 33,\n          columnNumber: 15\n        }, _this), keynote.map(function (talk) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"article\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"card\"],\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_ArticleItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n              title: talk.title,\n              author: talk.author,\n              description: talk.description,\n              date: talk.date,\n              image: talk.image,\n              url: talk.url,\n              defaultImage: event.image\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 19\n            }, _this)\n          }, \"keynote_\".concat(talk.title), false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 17\n          }, _this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: \"Topic Talks\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 15\n        }, _this), selectedTalks.map(function (talk) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"card\"],\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_ArticleItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n              title: talk.title,\n              author: talk.author,\n              description: talk.description,\n              date: talk.date,\n              image: talk.image,\n              url: talk.url,\n              defaultImage: event.image\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 19\n            }, _this)\n          }, \"talks_\".concat(talk.title), false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 17\n          }, _this);\n        }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n          children: \"Speakers\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n          className: \"\".concat(_style_module_css__WEBPACK_IMPORTED_MODULE_4__[\"speakerList\"], \" profiles\"),\n          children: selectedSpeakers.map(function (speaker) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(src_components_Profile__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              person: speaker,\n              defaultImage: event.image\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 64,\n              columnNumber: 19\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 15\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 13\n      }, _this);\n    })\n  }, void 0, false);\n};\n\n_c = Event;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Event);\nEvent.propTypes = {\n  events: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    specificTalks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired).isRequired\n  })).isRequired,\n  talks: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({})).isRequired,\n  speakers: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n    name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n    image: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    bio: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,\n    connect: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({\n      name: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,\n      link: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired\n    }))\n  })).isRequired\n};\n\nvar _c;\n\n$RefreshReg$(_c, \"Event\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRXZlbnQvaW5kZXguanN4PzdiZjciXSwibmFtZXMiOlsiRXZlbnQiLCJldmVudHMiLCJ0YWxrcyIsInNwZWFrZXJzIiwiY29uc29sZSIsImxvZyIsIm1hcCIsImV2ZW50IiwiYmFja2dyb3VuZEltYWdlIiwicHJvY2VzcyIsImltYWdlIiwia2V5bm90ZSIsImZpbHRlciIsInRhbGsiLCJ0aXRsZSIsInNlbGVjdGVkVGFsa3MiLCJzcGVjaWZpY1RhbGtzIiwiaW5jbHVkZXMiLCJzZWxlY3RlZFNwZWFrZXJzIiwic3BlYWtlciIsImF1dGhvciIsIm5hbWUiLCJjb25mZXJlbmNlIiwiY29uZlRvcGljIiwiY2FyZCIsIm92ZXJ2aWV3Iiwib3BlbmluZ1JlbWFya3NPdmVydmlldyIsIm9wZW5pbmdSZW1hcmtzRGVzY3JpcHRpb24iLCJkZXNjcmlwdGlvbiIsImRhdGUiLCJ1cmwiLCJzcGVha2VyTGlzdCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImFycmF5T2YiLCJzaGFwZSIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJiaW8iLCJjb25uZWN0IiwibGluayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7O0FBT0EsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsT0FBaUM7QUFBQSxNQUE5QkMsTUFBOEIsUUFBOUJBLE1BQThCO0FBQUEsTUFBdEJDLEtBQXNCLFFBQXRCQSxLQUFzQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTtBQUM3Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksS0FBWjtBQUVBLHNCQUNFO0FBQUEsY0FFSUosTUFBTSxDQUFDSyxHQUFQLENBQVcsVUFBQ0MsS0FBRCxFQUFXO0FBQ3BCLFVBQU1DLGVBQWUsOERBQXVEQyxFQUF2RCxTQUFrRkYsS0FBSyxDQUFDRyxLQUF4RixNQUFyQjtBQUNBLFVBQU1DLE9BQU8sR0FBR1QsS0FBSyxDQUFDVSxN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LFVBRmtCO0FBRzFDM0IsU0FBSyxFQUFFdUIsaURBQVMsQ0FBQ0csTUFIeUI7QUFJMUNFLE9BQUcsRUFBRUwsaURBQVMsQ0FBQ0csTUFKMkI7QUFLMUNHLFdBQU8sRUFBRU4saURBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsaURBQVMsQ0FBQ0UsS0FBVixDQUFnQjtBQUN6Q2QsVUFBSSxFQUFFWSxpREFBUyxDQUFDRyxNQUFWLENBQWlCQyxVQURrQjtBQUV6Q0csVUFBSSxFQUFFUCxpREFBUyxDQUFDRyxNQUFWLENBQWlCQztBQUZrQixLQUFoQixDQUFsQjtBQUxpQyxHQUFoQixDQUFsQixFQVNOQTtBQWpCWSxDQUFsQiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL0V2ZW50L2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQXJ0aWNsZUl0ZW0gZnJvbSAnc3JjL2NvbXBvbmVudHMvQXJ0aWNsZUl0ZW0nO1xuaW1wb3J0IFByb2ZpbGUgZnJvbSAnc3JjL2NvbXBvbmVudHMvUHJvZmlsZSc7XG5cbmltcG9ydCB7XG4gIGNvbmZlcmVuY2UsXG4gIGNhcmQsXG4gIG92ZXJ2aWV3LFxuICBzcGVha2VyTGlzdCxcbn0gZnJvbSAnLi9zdHlsZS5tb2R1bGUuY3NzJztcblxuY29uc3QgRXZlbnQgPSAoeyBldmVudHMsIHRhbGtzLCBzcGVha2VycyB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKCcuLi4nKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7XG4gICAgICAgIGV2ZW50cy5tYXAoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgYmFja2dyb3VuZEltYWdlID0gYGxpbmVhci1ncmFkaWVudCgwZGVnLCAjMDAwYyAwJSwgIzAwMDYgMTAwJSksIHVybCgke3Byb2Nlc3MuZW52LkFTU0VUX1BSRUZJWH0ke2V2ZW50LmltYWdlfSlgO1xuICAgICAgICAgIGNvbnN0IGtleW5vdGUgPSB0YWxrcy5maWx0ZXIoKHRhbGspID0+IHRhbGsudGl0bGUgPT09IGV2ZW50LmtleW5vdGUpO1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkVGFsa3MgPSB0YWxrcy5maWx0ZXIoKHRhbGspID0+IGV2ZW50LnNwZWNpZmljVGFsa3MuaW5jbHVkZXModGFsay50aXRsZSkpO1xuICAgICAgICAgIGNvbnN0IHNlbGVjdGVkU3BlYWtlcnMgPSBzcGVha2Vycy5maWx0ZXIoKHNwZWFrZXIpID0+IChcbiAgICAgICAgICAgIHNlbGVjdGVkVGFsa3MubWFwKCh0YWxrKSA9PiB0YWxrLmF1dGhvci5pbmNsdWRlcyhzcGVha2VyLm5hbWUpKS5pbmNsdWRlcyh0cnVlKVxuICAgICAgICAgICkpO1xuXG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT17Y29uZmVyZW5jZX0gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlIH19PlxuICAgICAgICAgICAgICA8aDIgaWQ9XCJjb25mZXJlbmNlXCIgY2xhc3NOYW1lPVwic2VjdGlvbl9fdGl0bGVcIj57ZXZlbnQudGl0bGV9OiB7ZXZlbnQuY29uZlRvcGljfTwvaDI+XG4gICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2FyZH0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtvdmVydmlld30+e2V2ZW50Lm9wZW5pbmdSZW1hcmtzT3ZlcnZpZXd9PC9wPlxuICAgICAgICAgICAgICAgIDxwPntldmVudC5vcGVuaW5nUmVtYXJrc0Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICA8aDM+S2V5bm90ZTwvaDM+XG4gICAgICAgICAgICAgIHtrZXlub3RlLm1hcCgodGFsaykgPT4gKFxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIGtleT17YGtleW5vdGVfJHt0YWxrLnRpdGxlfWB9IGNsYXNzTmFtZT17Y2FyZH0+XG4gICAgICAgICAgICAgICAgICA8QXJ0aWNsZUl0ZW1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3RhbGsudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgIGF1dGhvcj17dGFsay5hdXRob3J9XG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXt0YWxrLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgICAgICAgICBkYXRlPXt0YWxrLmRhdGV9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXt0YWxrLmltYWdlfVxuICAgICAgICAgICAgICAgICAgICB1cmw9e3RhbGsudXJsfVxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0SW1hZ2U9e2V2ZW50LmltYWdlfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8aDM+VG9waWMgVGFsa3M8L2gzPlxuICAgICAgICAgICAgICB7c2VsZWN0ZWRUYWxrcy5tYXAoKHRhbGspID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17YHRhbGtzXyR7dGFsay50aXRsZX1gfSBjbGFzc05hbWU9e2NhcmR9PlxuICAgICAgICAgICAgICAgICAgPEFydGljbGVJdGVtXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXt0YWxrLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICBhdXRob3I9e3RhbGsuYXV0aG9yfVxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17dGFsay5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgZGF0ZT17dGFsay5kYXRlfVxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17dGFsay5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgdXJsPXt0YWxrLnVybH1cbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdEltYWdlPXtldmVudC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8aDM+U3BlYWtlcnM8L2gzPlxuICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e2Ake3NwZWFrZXJMaXN0fSBwcm9maWxlc2B9PlxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZFNwZWFrZXJzLm1hcCgoc3BlYWtlcikgPT4gKFxuICAgICAgICAgICAgICAgICAgPFByb2ZpbGUgcGVyc29uPXtzcGVha2VyfSBkZWZhdWx0SW1hZ2U9e2V2ZW50LmltYWdlfSAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEV2ZW50O1xuXG5FdmVudC5wcm9wVHlwZXMgPSB7XG4gIGV2ZW50czogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHNwZWNpZmljVGFsa3M6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCkuaXNSZXF1aXJlZCxcbiAgfSkpLmlzUmVxdWlyZWQsXG4gIHRhbGtzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIFxuICB9KSkuaXNSZXF1aXJlZCxcbiAgc3BlYWtlcnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYmlvOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGNvbm5lY3Q6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgICBsaW5rOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgfSkpLFxuICB9KSkuaXNSZXF1aXJlZCxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Event/index.jsx\n");

/***/ })

})