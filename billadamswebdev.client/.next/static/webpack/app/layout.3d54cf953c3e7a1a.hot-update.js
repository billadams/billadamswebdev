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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_modal_modal_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/modal/modal.module.css */ \"(app-pages-browser)/./src/components/modal/modal.module.css\");\n/* harmony import */ var _components_modal_modal_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_modal_modal_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Modal = /*#__PURE__*/ _s((0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(_c = _s(function Modal(param, ref) {\n    let { onClose, isOpen, children, classes } = param;\n    var _dialogRef_current;\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (dialogRef.current) {\n            dialogRef.current.addEventListener(\"close\", closeDialog);\n        }\n        return ()=>{\n            var _dialogRef_current;\n            (_dialogRef_current = dialogRef.current) === null || _dialogRef_current === void 0 ? void 0 : _dialogRef_current.removeEventListener(\"close\", closeDialog);\n        };\n    });\n    const dialogRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const getClasses = ()=>{\n        return classes ? classes : \"\";\n    };\n    isOpen && ((_dialogRef_current = dialogRef.current) === null || _dialogRef_current === void 0 ? void 0 : _dialogRef_current.showModal());\n    const closeDialog = ()=>{\n        var _dialogRef_current;\n        if (typeof onClose === \"function\") {\n            onClose();\n        }\n        (_dialogRef_current = dialogRef.current) === null || _dialogRef_current === void 0 ? void 0 : _dialogRef_current.close();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"dialog\", {\n        className: \"\".concat((_components_modal_modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().contactDialog), \" \").concat(getClasses()),\n        ref: dialogRef,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_components_modal_modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().closeButtonWrapper),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    ref: ref,\n                    type: \"button\",\n                    id: \"close\",\n                    className: \"\".concat((_components_modal_modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().closeButton), \" primary-button\"),\n                    \"aria-label\": \"close\",\n                    onClick: ()=>onClose(),\n                    formNoValidate: true,\n                    autoFocus: true,\n                    children: \"X\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\billadams\\\\Code\\\\billadamswebdev\\\\billadamswebdev.client\\\\src\\\\components\\\\modal\\\\Modal.tsx\",\n                    lineNumber: 55,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\billadams\\\\Code\\\\billadamswebdev\\\\billadamswebdev.client\\\\src\\\\components\\\\modal\\\\Modal.tsx\",\n                lineNumber: 54,\n                columnNumber: 13\n            }, this),\n            children\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\billadams\\\\Code\\\\billadamswebdev\\\\billadamswebdev.client\\\\src\\\\components\\\\modal\\\\Modal.tsx\",\n        lineNumber: 50,\n        columnNumber: 9\n    }, this);\n}, \"XUkBPnfotu3kgIZROBVlWaGvPUA=\")), \"XUkBPnfotu3kgIZROBVlWaGvPUA=\");\n_c1 = Modal;\n//export function CloseButton({ onClose, forwardRef\n//}: {\n//    onClose: OnCloseFunction;\n//    forwardRef?: React.RefObject<HTMLButtonElement>;\n//}) {\n//    return (\n//        <button\n//            ref={forwardRef}\n//            type='button'\n//            id='close'\n//            className={`${styles.closeButton} primary-button`}\n//            aria-label='close'\n//            onClick={() => onClose()}\n//            formNoValidate\n//            autoFocus\n//        >\n//            X\n//        </button>\n//    )\n//}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c, _c1;\n$RefreshReg$(_c, \"Modal$forwardRef\");\n$RefreshReg$(_c1, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL21vZGFsL01vZGFsLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUllO0FBQzBDO0FBVXpELE1BQU1LLHNCQUFRRixHQUFBQSxpREFBVUEsU0FBZ0MsU0FBU0UsTUFBTSxLQUt0RSxFQUFFQyxHQUFHO1FBTGlFLEVBQ25FQyxPQUFPLEVBQ1BDLE1BQU0sRUFDTkMsUUFBUSxFQUNSQyxPQUFPLEVBQ1YsR0FMc0U7UUF1QnpEQzs7SUFoQlZULGdEQUFTQSxDQUFDO1FBQ04sSUFBSVMsVUFBVUMsT0FBTyxFQUFFO1lBQ25CRCxVQUFVQyxPQUFPLENBQUNDLGdCQUFnQixDQUFDLFNBQVNDO1FBQ2hEO1FBRUEsT0FBTztnQkFDSEg7YUFBQUEscUJBQUFBLFVBQVVDLE9BQU8sY0FBakJELHlDQUFBQSxtQkFBbUJJLG1CQUFtQixDQUFDLFNBQVNEO1FBQ3BEO0lBQ0o7SUFFQSxNQUFNSCxZQUFZViw2Q0FBTUEsQ0FBb0I7SUFFNUMsTUFBTWUsYUFBYTtRQUNmLE9BQU9OLFVBQVVBLFVBQVU7SUFDL0I7SUFFQUYsWUFBVUcscUJBQUFBLFVBQVVDLE9BQU8sY0FBakJELHlDQUFBQSxtQkFBbUJNLFNBQVM7SUFFdEMsTUFBTUgsY0FBYztZQUtoQkg7UUFKQSxJQUFJLE9BQU9KLFlBQVksWUFBWTtZQUMvQkE7UUFDSjtTQUVBSSxxQkFBQUEsVUFBVUMsT0FBTyxjQUFqQkQseUNBQUFBLG1CQUFtQk8sS0FBSztJQUM1QjtJQUVBLHFCQUNJLDhEQUFDQztRQUNHQyxXQUFXLEdBQTJCSixPQUF4QloseUZBQW9CLEVBQUMsS0FBZ0IsT0FBYlk7UUFDdENWLEtBQUtLOzswQkFFTCw4REFBQ1c7Z0JBQUlGLFdBQVdoQiw4RkFBeUI7MEJBQ3JDLDRFQUFDb0I7b0JBQ0dsQixLQUFLQTtvQkFDTG1CLE1BQUs7b0JBQ0xDLElBQUc7b0JBQ0hOLFdBQVcsR0FBc0IsT0FBbkJoQix1RkFBa0IsRUFBQztvQkFDakN3QixjQUFXO29CQUNYQyxTQUFTLElBQU10QjtvQkFDZnVCLGNBQWM7b0JBQ2RDLFNBQVM7OEJBQ1o7Ozs7Ozs7Ozs7O1lBSUp0Qjs7Ozs7OztBQUdiOztBQUVBLG1EQUFtRDtBQUNuRCxNQUFNO0FBQ04sK0JBQStCO0FBQy9CLHNEQUFzRDtBQUN0RCxNQUFNO0FBQ04sY0FBYztBQUNkLGlCQUFpQjtBQUNqQiw4QkFBOEI7QUFDOUIsMkJBQTJCO0FBQzNCLHdCQUF3QjtBQUN4QixnRUFBZ0U7QUFDaEUsZ0NBQWdDO0FBQ2hDLHVDQUF1QztBQUN2Qyw0QkFBNEI7QUFDNUIsdUJBQXVCO0FBQ3ZCLFdBQVc7QUFDWCxlQUFlO0FBQ2YsbUJBQW1CO0FBQ25CLE9BQU87QUFDUCxHQUFHO0FBRUgsK0RBQWVKLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW9kYWwvTW9kYWwudHN4PzliMzIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7XHJcbiAgICB1c2VSZWYsXHJcbiAgICB1c2VFZmZlY3QsXHJcbiAgICBmb3J3YXJkUmVmXHJcbn0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJ0AvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5tb2R1bGUuY3NzJztcclxuXHJcbnR5cGUgT25DbG9zZUZ1bmN0aW9uID0gKCkgPT4gdm9pZDtcclxudHlwZSBNb2RhbFByb3BzID0ge1xyXG4gICAgb25DbG9zZTogKCkgPT4gdm9pZDtcclxuICAgIGlzT3BlbjogYm9vbGVhbjtcclxuICAgIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XHJcbiAgICBjbGFzc2VzPzogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBNb2RhbCA9IGZvcndhcmRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQsIE1vZGFsUHJvcHM+KGZ1bmN0aW9uIE1vZGFsKHtcclxuICAgIG9uQ2xvc2UsXHJcbiAgICBpc09wZW4sXHJcbiAgICBjaGlsZHJlbixcclxuICAgIGNsYXNzZXMsXHJcbn0sIHJlZikge1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGRpYWxvZ1JlZi5jdXJyZW50KSB7XHJcbiAgICAgICAgICAgIGRpYWxvZ1JlZi5jdXJyZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgY2xvc2VEaWFsb2cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZGlhbG9nUmVmLmN1cnJlbnQ/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgY2xvc2VEaWFsb2cpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHVzZVJlZjxIVE1MRGlhbG9nRWxlbWVudD4obnVsbCk7XHJcblxyXG4gICAgY29uc3QgZ2V0Q2xhc3NlcyA9ICgpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBjbGFzc2VzID8gY2xhc3NlcyA6ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGlzT3BlbiAmJiBkaWFsb2dSZWYuY3VycmVudD8uc2hvd01vZGFsKCk7XHJcblxyXG4gICAgY29uc3QgY2xvc2VEaWFsb2cgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBvbkNsb3NlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIG9uQ2xvc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpYWxvZ1JlZi5jdXJyZW50Py5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpYWxvZ1xyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWN0RGlhbG9nfSAke2dldENsYXNzZXMoKX1gfVxyXG4gICAgICAgICAgICByZWY9e2RpYWxvZ1JlZn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2xvc2VCdXR0b25XcmFwcGVyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICByZWY9e3JlZn1cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9J2Nsb3NlJ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNsb3NlQnV0dG9ufSBwcmltYXJ5LWJ1dHRvbmB9XHJcbiAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD0nY2xvc2UnXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25DbG9zZSgpfVxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1Ob1ZhbGlkYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgWFxyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9kaWFsb2c+XHJcbiAgICApO1xyXG59KVxyXG5cclxuLy9leHBvcnQgZnVuY3Rpb24gQ2xvc2VCdXR0b24oeyBvbkNsb3NlLCBmb3J3YXJkUmVmXHJcbi8vfToge1xyXG4vLyAgICBvbkNsb3NlOiBPbkNsb3NlRnVuY3Rpb247XHJcbi8vICAgIGZvcndhcmRSZWY/OiBSZWFjdC5SZWZPYmplY3Q8SFRNTEJ1dHRvbkVsZW1lbnQ+O1xyXG4vL30pIHtcclxuLy8gICAgcmV0dXJuIChcclxuLy8gICAgICAgIDxidXR0b25cclxuLy8gICAgICAgICAgICByZWY9e2ZvcndhcmRSZWZ9XHJcbi8vICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xyXG4vLyAgICAgICAgICAgIGlkPSdjbG9zZSdcclxuLy8gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jbG9zZUJ1dHRvbn0gcHJpbWFyeS1idXR0b25gfVxyXG4vLyAgICAgICAgICAgIGFyaWEtbGFiZWw9J2Nsb3NlJ1xyXG4vLyAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uQ2xvc2UoKX1cclxuLy8gICAgICAgICAgICBmb3JtTm9WYWxpZGF0ZVxyXG4vLyAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4vLyAgICAgICAgPlxyXG4vLyAgICAgICAgICAgIFhcclxuLy8gICAgICAgIDwvYnV0dG9uPlxyXG4vLyAgICApXHJcbi8vfVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsImZvcndhcmRSZWYiLCJzdHlsZXMiLCJNb2RhbCIsInJlZiIsIm9uQ2xvc2UiLCJpc09wZW4iLCJjaGlsZHJlbiIsImNsYXNzZXMiLCJkaWFsb2dSZWYiLCJjdXJyZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsb3NlRGlhbG9nIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImdldENsYXNzZXMiLCJzaG93TW9kYWwiLCJjbG9zZSIsImRpYWxvZyIsImNsYXNzTmFtZSIsImNvbnRhY3REaWFsb2ciLCJkaXYiLCJjbG9zZUJ1dHRvbldyYXBwZXIiLCJidXR0b24iLCJ0eXBlIiwiaWQiLCJjbG9zZUJ1dHRvbiIsImFyaWEtbGFiZWwiLCJvbkNsaWNrIiwiZm9ybU5vVmFsaWRhdGUiLCJhdXRvRm9jdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/modal/Modal.tsx\n"));

/***/ })

});