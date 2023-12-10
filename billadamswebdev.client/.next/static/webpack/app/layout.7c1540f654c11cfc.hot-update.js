"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/components/modal/Modal.tsx":
/*!****************************************!*\
  !*** ./src/components/modal/Modal.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CloseButton: function() { return /* binding */ CloseButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_modal_modal_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/modal/modal.module.css */ \"(app-pages-browser)/./src/components/modal/modal.module.css\");\n/* harmony import */ var _components_modal_modal_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_modal_modal_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Modal = /*#__PURE__*/ _s((0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = _s(function Modal(param, param1) {\n    let { onClose, isOpen, children, classes } = param, { ref } = param1;\n    var _dialogRef_current;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (dialogRef.current) {\n            dialogRef.current.addEventListener(\"close\", closeDialog);\n        }\n        return ()=>{\n            var _dialogRef_current;\n            (_dialogRef_current = dialogRef.current) === null || _dialogRef_current === void 0 ? void 0 : _dialogRef_current.removeEventListener(\"close\", closeDialog);\n        };\n    });\n    const dialogRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const getClasses = ()=>{\n        return classes ? classes : \"\";\n    };\n    isOpen && ((_dialogRef_current = dialogRef.current) === null || _dialogRef_current === void 0 ? void 0 : _dialogRef_current.showModal());\n    const closeDialog = ()=>{\n        var _dialogRef_current;\n        if (typeof onClose === \"function\") {\n            onClose();\n        }\n        (_dialogRef_current = dialogRef.current) === null || _dialogRef_current === void 0 ? void 0 : _dialogRef_current.close();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dialog\", {\n        className: \"\".concat((_components_modal_modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().contactDialog), \" \").concat(getClasses()),\n        ref: dialogRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_modal_modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().closeButtonWrapper),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CloseButton, {\n                    onClose: ()=>closeDialog()\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\billadams\\\\Code\\\\billadamswebdev\\\\billadamswebdev.client\\\\src\\\\components\\\\modal\\\\Modal.tsx\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\billadams\\\\Code\\\\billadamswebdev\\\\billadamswebdev.client\\\\src\\\\components\\\\modal\\\\Modal.tsx\",\n                lineNumber: 64,\n                columnNumber: 13\n            }, this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\billadams\\\\Code\\\\billadamswebdev\\\\billadamswebdev.client\\\\src\\\\components\\\\modal\\\\Modal.tsx\",\n        lineNumber: 60,\n        columnNumber: 9\n    }, this);\n}, \"XUkBPnfotu3kgIZROBVlWaGvPUA=\")), \"XUkBPnfotu3kgIZROBVlWaGvPUA=\");\n_c1 = Modal;\nfunction CloseButton(param) {\n    let { onClose, forwardRef } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        ref: forwardRef,\n        type: \"button\",\n        id: \"close\",\n        className: \"\".concat((_components_modal_modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().closeButton), \" primary-button\"),\n        \"aria-label\": \"close\",\n        onClick: ()=>onClose(),\n        formNoValidate: true,\n        autoFocus: true,\n        children: \"X\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\billadams\\\\Code\\\\billadamswebdev\\\\billadamswebdev.client\\\\src\\\\components\\\\modal\\\\Modal.tsx\",\n        lineNumber: 78,\n        columnNumber: 9\n    }, this);\n}\n_c2 = CloseButton;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Modal$forwardRef\");\n$RefreshReg$(_c1, \"Modal\");\n$RefreshReg$(_c2, \"CloseButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL21vZGFsL01vZGFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUllO0FBQzBDO0FBVXpELE1BQU1LLHNCQUFRRixHQUFBQSxpREFBVUEsU0FBZ0MsU0FBU0UsTUFBTSxLQVVsRSxFQUFFLE1BS0Y7UUFma0UsRUFDbkVDLE9BQU8sRUFDUEMsTUFBTSxFQUNOQyxRQUFRLEVBQ1JDLE9BQU8sRUFNTixHQVZrRSxPQVVoRSxFQUNDQyxHQUFHLEVBSU4sR0FMRTtRQXVCT0M7O0lBaEJWVCxnREFBU0EsQ0FBQztRQUNOLElBQUlTLFVBQVVDLE9BQU8sRUFBRTtZQUNuQkQsVUFBVUMsT0FBTyxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFTQztRQUNoRDtRQUVBLE9BQU87Z0JBQ0hIO2FBQUFBLHFCQUFBQSxVQUFVQyxPQUFPLGNBQWpCRCx5Q0FBQUEsbUJBQW1CSSxtQkFBbUIsQ0FBQyxTQUFTRDtRQUNwRDtJQUNKO0lBRUEsTUFBTUgsWUFBWVYsNkNBQU1BLENBQW9CO0lBRTVDLE1BQU1lLGFBQWE7UUFDZixPQUFPUCxVQUFVQSxVQUFVO0lBQy9CO0lBRUFGLFlBQVVJLHFCQUFBQSxVQUFVQyxPQUFPLGNBQWpCRCx5Q0FBQUEsbUJBQW1CTSxTQUFTO0lBRXRDLE1BQU1ILGNBQWM7WUFLaEJIO1FBSkEsSUFBSSxPQUFPTCxZQUFZLFlBQVk7WUFDL0JBO1FBQ0o7U0FFQUsscUJBQUFBLFVBQVVDLE9BQU8sY0FBakJELHlDQUFBQSxtQkFBbUJPLEtBQUs7SUFDNUI7SUFFQSxxQkFDSSw4REFBQ0M7UUFDR0MsV0FBVyxHQUEyQkosT0FBeEJaLHlGQUFvQixFQUFDLEtBQWdCLE9BQWJZO1FBQ3RDTixLQUFLQzs7MEJBRUwsOERBQUNXO2dCQUFJRixXQUFXaEIsOEZBQXlCOzBCQUNyQyw0RUFBQ29CO29CQUFZbEIsU0FBUyxJQUFNUTs7Ozs7Ozs7Ozs7WUFFL0JOOzs7Ozs7O0FBR2I7O0FBRU8sU0FBU2dCLFlBQVksS0FJM0I7UUFKMkIsRUFBRWxCLE9BQU8sRUFBRUgsVUFBVSxFQUloRCxHQUoyQjtJQUt4QixxQkFDSSw4REFBQ3NCO1FBQ0dmLEtBQUtQO1FBQ0x1QixNQUFLO1FBQ0xDLElBQUc7UUFDSFAsV0FBVyxHQUFzQixPQUFuQmhCLHVGQUFrQixFQUFDO1FBQ2pDeUIsY0FBVztRQUNYQyxTQUFTLElBQU14QjtRQUNmeUIsY0FBYztRQUNkQyxTQUFTO2tCQUNaOzs7Ozs7QUFJVDtNQW5CZ0JSO0FBcUJoQiwrREFBZW5CLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvTW9kYWwudHN4PzliMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XHJcbiAgICB1c2VSZWYsXHJcbiAgICB1c2VFZmZlY3QsXHJcbiAgICBmb3J3YXJkUmVmXHJcbn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0AvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5tb2R1bGUuY3NzJztcclxuXHJcbnR5cGUgT25DbG9zZUZ1bmN0aW9uID0gKCkgPT4gdm9pZDtcclxudHlwZSBNb2RhbFByb3BzID0ge1xyXG4gICAgb25DbG9zZTogKCkgPT4gdm9pZDtcclxuICAgIGlzT3BlbjogYm9vbGVhbjtcclxuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBNb2RhbCA9IGZvcndhcmRSZWY8TW9kYWxQcm9wcywgSFRNTEJ1dHRvbkVsZW1lbnQ+KGZ1bmN0aW9uIE1vZGFsKHtcclxuICAgIG9uQ2xvc2UsXHJcbiAgICBpc09wZW4sXHJcbiAgICBjaGlsZHJlbixcclxuICAgIGNsYXNzZXMsXHJcbn06IHtcclxuICAgIG9uQ2xvc2U6IE9uQ2xvc2VGdW5jdGlvbjtcclxuICAgIGlzT3BlbjogYm9vbGVhbjtcclxuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICAgICAgY2xhc3Nlcz86IHN0cmluZztcclxuICAgIH0sIHtcclxuICAgICAgICByZWZcclxufToge1xyXG4gICAgICAgIHJlZjogUmVhY3QuUmVmT2JqZWN0PEhUTUxCdXR0b25FbGVtZW50PjtcclxuXHJcbiAgICB9KSB7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAoZGlhbG9nUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgZGlhbG9nUmVmLmN1cnJlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCBjbG9zZURpYWxvZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgICBkaWFsb2dSZWYuY3VycmVudD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xvc2UnLCBjbG9zZURpYWxvZyk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgZGlhbG9nUmVmID0gdXNlUmVmPEhUTUxEaWFsb2dFbGVtZW50PihudWxsKTtcclxuXHJcbiAgICBjb25zdCBnZXRDbGFzc2VzID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGNsYXNzZXMgPyBjbGFzc2VzIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgaXNPcGVuICYmIGRpYWxvZ1JlZi5jdXJyZW50Py5zaG93TW9kYWwoKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZURpYWxvZyA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBpZiAodHlwZW9mIG9uQ2xvc2UgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgb25DbG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlhbG9nUmVmLmN1cnJlbnQ/LmNsb3NlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGlhbG9nXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhY3REaWFsb2d9ICR7Z2V0Q2xhc3NlcygpfWB9XHJcbiAgICAgICAgICAgIHJlZj17ZGlhbG9nUmVmfVxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jbG9zZUJ1dHRvbldyYXBwZXJ9PlxyXG4gICAgICAgICAgICAgICAgPENsb3NlQnV0dG9uIG9uQ2xvc2U9eygpID0+IGNsb3NlRGlhbG9nKCl9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaWFsb2c+XHJcbiAgICApO1xyXG59KVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIENsb3NlQnV0dG9uKHsgb25DbG9zZSwgZm9yd2FyZFJlZlxyXG59OiB7XHJcbiAgICBvbkNsb3NlOiBPbkNsb3NlRnVuY3Rpb247XHJcbiAgICAgICAgZm9yd2FyZFJlZj86IFJlYWN0LlJlZk9iamVjdDxIVE1MQnV0dG9uRWxlbWVudD47XHJcbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICByZWY9e2ZvcndhcmRSZWZ9XHJcbiAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcclxuICAgICAgICAgICAgaWQ9J2Nsb3NlJ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jbG9zZUJ1dHRvbn0gcHJpbWFyeS1idXR0b25gfVxyXG4gICAgICAgICAgICBhcmlhLWxhYmVsPSdjbG9zZSdcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbG9zZSgpfVxyXG4gICAgICAgICAgICBmb3JtTm9WYWxpZGF0ZVxyXG4gICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIFhcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsImZvcndhcmRSZWYiLCJzdHlsZXMiLCJNb2RhbCIsIm9uQ2xvc2UiLCJpc09wZW4iLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJyZWYiLCJkaWFsb2dSZWYiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlRGlhbG9nIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdldENsYXNzZXMiLCJzaG93TW9kYWwiLCJjbG9zZSIsImRpYWxvZyIsImNsYXNzTmFtZSIsImNvbnRhY3REaWFsb2ciLCJkaXYiLCJjbG9zZUJ1dHRvbldyYXBwZXIiLCJDbG9zZUJ1dHRvbiIsImJ1dHRvbiIsInR5cGUiLCJpZCIsImNsb3NlQnV0dG9uIiwiYXJpYS1sYWJlbCIsIm9uQ2xpY2siLCJmb3JtTm9WYWxpZGF0ZSIsImF1dG9Gb2N1cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/modal/Modal.tsx\n"));

/***/ })

});