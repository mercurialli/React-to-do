"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\n/* harmony import */ var _components_toDoList_Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/toDoList/Task */ \"./components/toDoList/Task.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction HomePage() {\n    _s();\n    const [tasks, setTasks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleSubmit = (evt)=>{\n        evt.preventDefault();\n        const inputValue = evt.target.taskInput.value.trim();\n        if (inputValue) {\n            const newTask = {\n                id: (0,uuid__WEBPACK_IMPORTED_MODULE_3__.v4)(),\n                title: inputValue\n            };\n            setTasks([\n                ...tasks,\n                newTask\n            ]);\n            evt.target.taskInput.value = \"\";\n        }\n    };\n    const deleteTask = (id)=>{\n        const currentTask = [\n            ...tasks\n        ].filter((item)=>item.id !== id);\n        setTasks(currentTask);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"main\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"taskInput\",\n                            className: \"main-label\",\n                            children: \"New todo:\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\pages\\\\index.jsx\",\n                            lineNumber: 31,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            id: \"taskInput\",\n                            placeholder: \"New todo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\pages\\\\index.jsx\",\n                            lineNumber: 34,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"main-btn\",\n                            type: \"submit\",\n                            children: \"Add todo\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\pages\\\\index.jsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\pages\\\\index.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"ul-container\",\n                    children: tasks.map((task, index)=>{\n                        const { id, title } = task;\n                        console.log({\n                            task\n                        });\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_toDoList_Task__WEBPACK_IMPORTED_MODULE_2__.Task, {\n                            id: id,\n                            title: title\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\pages\\\\index.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 15\n                        }, this);\n                    })\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\pages\\\\index.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\pages\\\\index.jsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\pages\\\\index.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(HomePage, \"+34uIVDBalDkucWnJ7Aj1Xxb0MA=\");\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ0s7QUFDbUI7QUFDTjtBQUVwQyxTQUFTTTs7SUFDdEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdSLCtDQUFRQSxDQUFDLEVBQUU7SUFFckMsTUFBTVMsZUFBZSxDQUFDQztRQUNwQkEsSUFBSUMsY0FBYztRQUNsQixNQUFNQyxhQUFhRixJQUFJRyxNQUFNLENBQUNDLFNBQVMsQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJO1FBQ2xELElBQUlKLFlBQVk7WUFDZCxNQUFNSyxVQUFVO2dCQUNkQyxJQUFJaEIsd0NBQVFBO2dCQUNaaUIsT0FBT1A7WUFDVDtZQUNBSixTQUFTO21CQUFJRDtnQkFBT1U7YUFBUTtZQUM1QlAsSUFBSUcsTUFBTSxDQUFDQyxTQUFTLENBQUNDLEtBQUssR0FBRztRQUMvQjtJQUNGO0lBRUEsTUFBTUssYUFBYSxDQUFDRjtRQUNsQixNQUFNRyxjQUFjO2VBQUlkO1NBQU0sQ0FBQ2UsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtMLEVBQUUsS0FBS0E7UUFDNURWLFNBQVNhO0lBQ1g7SUFFQSxxQkFDRSw4REFBQ0c7UUFBS0MsV0FBVTtrQkFDZCw0RUFBQ0M7WUFBSUQsV0FBVTs7OEJBQ2IsOERBQUNFO29CQUFLQyxVQUFVbkI7O3NDQUNkLDhEQUFDb0I7NEJBQU1DLFNBQVE7NEJBQVlMLFdBQVU7c0NBQWE7Ozs7OztzQ0FHbEQsOERBQUNNOzRCQUFNQyxNQUFLOzRCQUFPZCxJQUFHOzRCQUFZZSxhQUFZOzs7Ozs7c0NBQzlDLDhEQUFDQzs0QkFBT1QsV0FBVTs0QkFBV08sTUFBSztzQ0FBUzs7Ozs7Ozs7Ozs7OzhCQUs3Qyw4REFBQ0c7b0JBQUdWLFdBQVU7OEJBQ1hsQixNQUFNNkIsR0FBRyxDQUFDLENBQUNDLE1BQU1DO3dCQUNoQixNQUFNLEVBQUVwQixFQUFFLEVBQUVDLEtBQUssRUFBRSxHQUFHa0I7d0JBQ3RCRSxRQUFRQyxHQUFHLENBQUM7NEJBQUNIO3dCQUFJO3dCQUNqQixxQkFDRSw4REFBQ2hDLDJEQUFJQTs0QkFBYWEsSUFBSUE7NEJBQUlDLE9BQU9BOzJCQUF0Qm1COzs7OztvQkFHZjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLVjtHQS9Dd0JoQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdjQgYXMgdW5pcXVlSWQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IHsgdXNlRm9ybSwgU3VibWl0SGFuZGxlciB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiLi4vY29tcG9uZW50cy90b0RvTGlzdC9UYXNrXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKCkge1xuICBjb25zdCBbdGFza3MsIHNldFRhc2tzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSAoZXZ0KSA9PiB7XG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgaW5wdXRWYWx1ZSA9IGV2dC50YXJnZXQudGFza0lucHV0LnZhbHVlLnRyaW0oKTtcbiAgICBpZiAoaW5wdXRWYWx1ZSkge1xuICAgICAgY29uc3QgbmV3VGFzayA9IHtcbiAgICAgICAgaWQ6IHVuaXF1ZUlkKCksXG4gICAgICAgIHRpdGxlOiBpbnB1dFZhbHVlLFxuICAgICAgfTtcbiAgICAgIHNldFRhc2tzKFsuLi50YXNrcywgbmV3VGFza10pO1xuICAgICAgZXZ0LnRhcmdldC50YXNrSW5wdXQudmFsdWUgPSBcIlwiO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBkZWxldGVUYXNrID0gKGlkKSA9PiB7XG4gICAgY29uc3QgY3VycmVudFRhc2sgPSBbLi4udGFza3NdLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaWQpO1xuICAgIHNldFRhc2tzKGN1cnJlbnRUYXNrKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGFza0lucHV0XCIgY2xhc3NOYW1lPVwibWFpbi1sYWJlbFwiPlxuICAgICAgICAgICAgTmV3IHRvZG86XG4gICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInRhc2tJbnB1dFwiIHBsYWNlaG9sZGVyPVwiTmV3IHRvZG9cIiAvPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwibWFpbi1idG5cIiB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICBBZGQgdG9kb1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cInVsLWNvbnRhaW5lclwiPlxuICAgICAgICAgIHt0YXNrcy5tYXAoKHRhc2ssIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGlkLCB0aXRsZSB9ID0gdGFzaztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHt0YXNrfSlcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxUYXNrIGtleT17aW5kZXh9IGlkPXtpZH0gdGl0bGU9e3RpdGxlfSAvPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L21haW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ2NCIsInVuaXF1ZUlkIiwidXNlRm9ybSIsIlN1Ym1pdEhhbmRsZXIiLCJUYXNrIiwiSG9tZVBhZ2UiLCJ0YXNrcyIsInNldFRhc2tzIiwiaGFuZGxlU3VibWl0IiwiZXZ0IiwicHJldmVudERlZmF1bHQiLCJpbnB1dFZhbHVlIiwidGFyZ2V0IiwidGFza0lucHV0IiwidmFsdWUiLCJ0cmltIiwibmV3VGFzayIsImlkIiwidGl0bGUiLCJkZWxldGVUYXNrIiwiY3VycmVudFRhc2siLCJmaWx0ZXIiLCJpdGVtIiwibWFpbiIsImNsYXNzTmFtZSIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaHRtbEZvciIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwidWwiLCJtYXAiLCJ0YXNrIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.jsx\n"));

/***/ })

});