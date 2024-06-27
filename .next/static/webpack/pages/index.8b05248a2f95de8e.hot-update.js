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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Task: function() { return /* binding */ Task; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _EditTask_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EditTask.jsx */ \"./components/toDoList/EditTask.jsx\");\n/* harmony import */ var _icon_edit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon-edit.svg */ \"./components/toDoList/icon-edit.svg\");\n/* harmony import */ var _icon_trash_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icon-trash.svg */ \"./components/toDoList/icon-trash.svg\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Task(param) {\n    let { id, title } = param;\n    _s();\n    console.log({\n        id,\n        title\n    });\n    const [task, setTask] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [onEdit, setOnEdit] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const deleteTask = (id)=>{\n        console.log({\n            id\n        });\n        const currentTask = task.filter((task)=>task.id !== id);\n        setTask(currentTask);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: \"ul-container\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n            className: \"tasks-list\",\n            children: [\n                title,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>deleteTask(id),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _icon_trash_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                        alt: \"delete-icon\",\n                        className: \"delete-icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\components\\\\toDoList\\\\Task.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\components\\\\toDoList\\\\Task.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>setOnEdit(true),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: _icon_edit_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        alt: \"edit-icon\",\n                        className: \"edit-icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\components\\\\toDoList\\\\Task.jsx\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\components\\\\toDoList\\\\Task.jsx\",\n                    lineNumber: 30,\n                    columnNumber: 9\n                }, this),\n                onEdit && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"input-edit\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\components\\\\toDoList\\\\Task.jsx\",\n                            lineNumber: 39,\n                            columnNumber: 10\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>setOnEdit(false),\n                            children: \"Save\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\components\\\\toDoList\\\\Task.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 10\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\components\\\\toDoList\\\\Task.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 10\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\components\\\\toDoList\\\\Task.jsx\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\nina.terentyeva\\\\Desktop\\\\React-to-do-list\\\\components\\\\toDoList\\\\Task.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n} // const currentTask = task.filter((item) => item.id !== id);\n_s(Task, \"d4Y8AZESaZeUbt1ni3pC92fPWnM=\");\n_c = Task;\nvar _c;\n$RefreshReg$(_c, \"Task\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3RvRG9MaXN0L1Rhc2suanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNFO0FBQ007QUFDRDtBQUNHO0FBR2xDLFNBQVNLLEtBQUssS0FBVztRQUFYLEVBQUNDLEVBQUUsRUFBRUMsS0FBSyxFQUFDLEdBQVg7O0lBQ2pCQyxRQUFRQyxHQUFHLENBQUM7UUFBQ0g7UUFBSUM7SUFBSztJQUN0QixNQUFNLENBQUNHLE1BQU1DLFFBQVEsR0FBR1YsK0NBQVFBLENBQUMsRUFBRTtJQUNuQyxNQUFNLENBQUNXLFFBQVFDLFVBQVUsR0FBR1osK0NBQVFBLENBQUM7SUFFN0IsTUFBTWEsYUFBYSxDQUFDUjtRQUNoQkUsUUFBUUMsR0FBRyxDQUFDO1lBQUNIO1FBQUU7UUFDbkIsTUFBTVMsY0FBY0wsS0FBS00sTUFBTSxDQUFDLENBQUNOLE9BQVNBLEtBQUtKLEVBQUUsS0FBS0E7UUFDdERLLFFBQVFJO0lBQ1I7SUFFWixxQkFDSSw4REFBQ0U7UUFBR0MsV0FBVTtrQkFDViw0RUFBQ0M7WUFBR0QsV0FBVTs7Z0JBQ2JYOzhCQUNELDhEQUFDYTtvQkFBT0MsU0FBUyxJQUFNUCxXQUFXUjs4QkFDOUIsNEVBQUNOLG1EQUFLQTt3QkFDTnNCLEtBQUtsQix1REFBU0E7d0JBQ2RtQixLQUFJO3dCQUNKTCxXQUFVOzs7Ozs7Ozs7Ozs4QkFHZCw4REFBQ0U7b0JBQU9DLFNBQVMsSUFBTVIsVUFBVTs4QkFDN0IsNEVBQUNiLG1EQUFLQTt3QkFDTnNCLEtBQUtuQixzREFBT0E7d0JBQ1pvQixLQUFJO3dCQUNKTCxXQUFVOzs7Ozs7Ozs7OztnQkFHYk4sd0JBQ0EsOERBQUNZO29CQUFJTixXQUFVOztzQ0FDZiw4REFBQ087NEJBQU1DLE1BQUs7NEJBQU9DLGFBQWFwQjs7Ozs7O3NDQUNoQyw4REFBQ2E7NEJBQU9DLFNBQVMsSUFBTVIsVUFBVTtzQ0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNbEQsRUFFQSw2REFBNkQ7R0F4QzdDUjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3RvRG9MaXN0L1Rhc2suanN4P2FkMWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7RWRpdFRhc2t9IGZyb20gXCIuL0VkaXRUYXNrLmpzeFwiXHJcbmltcG9ydCBlZGl0U3JjIGZyb20gXCIuL2ljb24tZWRpdC5zdmdcIjtcclxuaW1wb3J0IGRlbGV0ZVNyYyBmcm9tIFwiLi9pY29uLXRyYXNoLnN2Z1wiO1xyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUYXNrKHtpZCwgdGl0bGV9KXtcclxuICAgIGNvbnNvbGUubG9nKHtpZCwgdGl0bGV9KVxyXG4gICAgY29uc3QgW3Rhc2ssIHNldFRhc2tdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgY29uc3QgW29uRWRpdCwgc2V0T25FZGl0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZVRhc2sgPSAoaWQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHtpZH0pXHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gdGFzay5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IGlkKTsgICBcclxuICAgICAgICAgICAgc2V0VGFzayhjdXJyZW50VGFzayk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG5yZXR1cm4gKFxyXG4gICAgPHVsIGNsYXNzTmFtZT1cInVsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJ0YXNrcy1saXN0XCI+XHJcbiAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlVGFzayhpZCl9PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXtkZWxldGVTcmN9XHJcbiAgICAgICAgICAgIGFsdD1cImRlbGV0ZS1pY29uXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVsZXRlLWljb25cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0T25FZGl0KHRydWUpIH0+XHJcbiAgICAgICAgICAgIDxJbWFnZSBcclxuICAgICAgICAgICAgc3JjPXtlZGl0U3JjfSBcclxuICAgICAgICAgICAgYWx0PVwiZWRpdC1pY29uXCIgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImVkaXQtaWNvblwiIFxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIHtvbkVkaXQgJiYgXHJcbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZWRpdFwiPlxyXG4gICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj17dGl0bGV9IC8+XHJcbiAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gc2V0T25FZGl0KGZhbHNlKX0+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgPC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICA8L3VsPlxyXG4gICAgKVxyXG59XHJcblxyXG4vLyBjb25zdCBjdXJyZW50VGFzayA9IHRhc2suZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBpZCk7Il0sIm5hbWVzIjpbIkltYWdlIiwidXNlU3RhdGUiLCJFZGl0VGFzayIsImVkaXRTcmMiLCJkZWxldGVTcmMiLCJUYXNrIiwiaWQiLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJ0YXNrIiwic2V0VGFzayIsIm9uRWRpdCIsInNldE9uRWRpdCIsImRlbGV0ZVRhc2siLCJjdXJyZW50VGFzayIsImZpbHRlciIsInVsIiwiY2xhc3NOYW1lIiwibGkiLCJidXR0b24iLCJvbkNsaWNrIiwic3JjIiwiYWx0IiwiZGl2IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/toDoList/Task.jsx\n"));

/***/ })

});