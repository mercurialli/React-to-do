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

/***/ "./components/toDoList/Task.jsx":
/*!**************************************!*\
  !*** ./components/toDoList/Task.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: function() { return /* binding */ Task; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _EditTask_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditTask.jsx */ \"./components/toDoList/EditTask.jsx\");\n/* harmony import */ var _icon_edit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon-edit.svg */ \"./components/toDoList/icon-edit.svg\");\n/* harmony import */ var _icon_trash_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon-trash.svg */ \"./components/toDoList/icon-trash.svg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Task(param) {\n    let { task } = param;\n    _s();\n    console.log({\n        task\n    });\n    // const [task, setTask] = useState([]);\n    console.log({\n        task\n    });\n    const [onEdit, setOnEdit] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const deleteTask = (id1)=>{\n        console.log({\n            id: id1\n        });\n        const currentTask = task.filter((task)=>task.id !== task.id);\n        setTimeout(()=>setTask(currentTask), 100);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"ul-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"tasks-list\",\n            children: [\n                title,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>deleteTask(id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _icon_trash_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                        alt: \"delete-icon\",\n                        className: \"delete-icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\components\\\\toDoList\\\\Task.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\components\\\\toDoList\\\\Task.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setOnEdit(true),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _icon_edit_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        alt: \"edit-icon\",\n                        className: \"edit-icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\components\\\\toDoList\\\\Task.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\components\\\\toDoList\\\\Task.jsx\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this),\n                onEdit && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"input-edit\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\components\\\\toDoList\\\\Task.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 10\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setOnEdit(false),\n                            children: \"Save\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\components\\\\toDoList\\\\Task.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 10\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\components\\\\toDoList\\\\Task.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 10\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\components\\\\toDoList\\\\Task.jsx\",\n            lineNumber: 22,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\components\\\\toDoList\\\\Task.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, this);\n} // const currentTask = task.filter((item) => item.id !== id);\n_s(Task, \"0rbG8bbTqgdZC7CuMNzfURleXJo=\");\n_c = Task;\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvRG9MaXN0L1Rhc2suanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNFO0FBQ007QUFDRDtBQUNHO0FBR2xDLFNBQVNLLEtBQUssS0FBTTtRQUFOLEVBQUNDLElBQUksRUFBQyxHQUFOOztJQUNqQkMsUUFBUUMsR0FBRyxDQUFDO1FBQUNGO0lBQUk7SUFDakIsd0NBQXdDO0lBQ3hDQyxRQUFRQyxHQUFHLENBQUM7UUFBQ0Y7SUFBSTtJQUNqQixNQUFNLENBQUNHLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUM7SUFFN0IsTUFBTVUsYUFBYSxDQUFDQztRQUNoQkwsUUFBUUMsR0FBRyxDQUFDO1lBQUNJLElBQUFBO1FBQUU7UUFDbkIsTUFBTUMsY0FBY1AsS0FBS1EsTUFBTSxDQUFDLENBQUNSLE9BQVNBLEtBQUtNLEVBQUUsS0FBS04sS0FBS00sRUFBRTtRQUM3REcsV0FBVyxJQUFNQyxRQUFRSCxjQUFjO0lBQ3ZDO0lBRVoscUJBQ0ksOERBQUNJO1FBQUdDLFdBQVU7a0JBQ1YsNEVBQUNDO1lBQUdELFdBQVU7O2dCQUNiRTs4QkFDRCw4REFBQ0M7b0JBQU9DLFNBQVMsSUFBTVgsV0FBV0M7OEJBQzlCLDRFQUFDWixtREFBS0E7d0JBQ051QixLQUFLbkIsdURBQVNBO3dCQUNkb0IsS0FBSTt3QkFDSk4sV0FBVTs7Ozs7Ozs7Ozs7OEJBR2QsOERBQUNHO29CQUFPQyxTQUFTLElBQU1aLFVBQVU7OEJBQzdCLDRFQUFDVixtREFBS0E7d0JBQ051QixLQUFLcEIsc0RBQU9BO3dCQUNacUIsS0FBSTt3QkFDSk4sV0FBVTs7Ozs7Ozs7Ozs7Z0JBR2JULHdCQUNBLDhEQUFDZ0I7b0JBQUlQLFdBQVU7O3NDQUNmLDhEQUFDUTs0QkFBTUMsTUFBSzs0QkFBT0MsYUFBYVI7Ozs7OztzQ0FDaEMsOERBQUNDOzRCQUFPQyxTQUFTLElBQU1aLFVBQVU7c0NBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWxELEVBRUEsNkRBQTZEO0dBekM3Q0w7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy90b0RvTGlzdC9UYXNrLmpzeD9hZDFmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0VkaXRUYXNrfSBmcm9tIFwiLi9FZGl0VGFzay5qc3hcIlxyXG5pbXBvcnQgZWRpdFNyYyBmcm9tIFwiLi9pY29uLWVkaXQuc3ZnXCI7XHJcbmltcG9ydCBkZWxldGVTcmMgZnJvbSBcIi4vaWNvbi10cmFzaC5zdmdcIjtcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gVGFzayh7dGFza30pe1xyXG4gICAgY29uc29sZS5sb2coe3Rhc2t9KVxyXG4gICAgLy8gY29uc3QgW3Rhc2ssIHNldFRhc2tdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc29sZS5sb2coe3Rhc2t9KVxyXG4gICAgY29uc3QgW29uRWRpdCwgc2V0T25FZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAoaWQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHtpZH0pXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gdGFzay5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IHRhc2suaWQpOyAgIFxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFRhc2soY3VycmVudFRhc2spLCAxMDApO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxucmV0dXJuIChcclxuICAgIDx1bCBjbGFzc05hbWU9XCJ1bC1jb250YWluZXJcIj5cclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGFza3MtbGlzdFwiPlxyXG4gICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRlbGV0ZVRhc2soaWQpfT5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz17ZGVsZXRlU3JjfVxyXG4gICAgICAgICAgICBhbHQ9XCJkZWxldGUtaWNvblwiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbGV0ZS1pY29uXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9uRWRpdCh0cnVlKSB9PlxyXG4gICAgICAgICAgICA8SW1hZ2UgXHJcbiAgICAgICAgICAgIHNyYz17ZWRpdFNyY30gXHJcbiAgICAgICAgICAgIGFsdD1cImVkaXQtaWNvblwiIFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJlZGl0LWljb25cIiBcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICB7b25FZGl0ICYmIFxyXG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWVkaXRcIj5cclxuICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9e3RpdGxlfSAvPlxyXG4gICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldE9uRWRpdChmYWxzZSl9PlNhdmU8L2J1dHRvbj5cclxuICAgICAgIDwvZGl2PlxyXG4gICAgICAgIH1cclxuICAgICAgICA8L2xpPlxyXG4gICAgPC91bD5cclxuICAgIClcclxufVxyXG5cclxuLy8gY29uc3QgY3VycmVudFRhc2sgPSB0YXNrLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaWQpOyJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwiRWRpdFRhc2siLCJlZGl0U3JjIiwiZGVsZXRlU3JjIiwiVGFzayIsInRhc2siLCJjb25zb2xlIiwibG9nIiwib25FZGl0Iiwic2V0T25FZGl0IiwiZGVsZXRlVGFzayIsImlkIiwiY3VycmVudFRhc2siLCJmaWx0ZXIiLCJzZXRUaW1lb3V0Iiwic2V0VGFzayIsInVsIiwiY2xhc3NOYW1lIiwibGkiLCJ0aXRsZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzcmMiLCJhbHQiLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/toDoList/Task.jsx\n"));

/***/ })

});