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

/***/ "./components/Headline.jsx":
/*!*********************************!*\
  !*** ./components/Headline.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Headline_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/Headline.module.css */ \"./styles/Headline.module.css\");\n/* harmony import */ var _styles_Headline_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Headline_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_material_Divider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/Divider */ \"./node_modules/@mui/material/Divider/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Headline = (param)=>{\n    let { data, className } = param;\n    _s();\n    const [articleData, setArticleData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [cmsUrl, setCmsUrl] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchData = async ()=>{\n            try {\n                const resolvedData = await data;\n                setArticleData(resolvedData);\n            } catch (error) {\n                console.error(\"Error fetching article data:\", error);\n            }\n        };\n        fetchData();\n    }, [\n        data\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchCmsUrl = async ()=>{\n            try {\n                if (articleData && articleData.imgId) {\n                    const cmsResponse = await fetch(\"https://cdn.contentful.com/spaces/vdnl4md1xpsv/assets/\".concat(articleData.imgId, \"?access_token=tB7F-mUWmn1dxWECof7Jnq7G_SfXUqreWmM6oG4KvK8\"));\n                    const imageData = await cmsResponse.json();\n                    const url = imageData.fields.file.url;\n                    setCmsUrl(url);\n                }\n            } catch (error) {\n                console.error(\"Error fetching image data:\", error);\n            }\n        };\n        fetchCmsUrl();\n    }, [\n        articleData\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Headline_module_css__WEBPACK_IMPORTED_MODULE_2___default().container), \" \").concat(className),\n        children: articleData && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    className: (_styles_Headline_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),\n                    children: articleData.title\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\components\\\\Headline.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: (_styles_Headline_module_css__WEBPACK_IMPORTED_MODULE_2___default().description),\n                    children: articleData.description\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\components\\\\Headline.jsx\",\n                    lineNumber: 46,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: cmsUrl,\n                    className: (_styles_Headline_module_css__WEBPACK_IMPORTED_MODULE_2___default().image),\n                    alt: \"\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\components\\\\Headline.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\components\\\\Headline.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Divider__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    className: (_styles_Headline_module_css__WEBPACK_IMPORTED_MODULE_2___default().hlDivider)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\components\\\\Headline.jsx\",\n                    lineNumber: 48,\n                    columnNumber: 16\n                }, undefined)\n            ]\n        }, void 0, true)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\oracl\\\\Documents\\\\repos\\\\test-projects\\\\temecula-tribune\\\\components\\\\Headline.jsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Headline, \"67dU58EHWmtPn9KgZp3lBXaBVYc=\");\n_c = Headline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Headline);\nvar _c;\n$RefreshReg$(_c, \"Headline\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRsaW5lLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQW1EO0FBQ0E7QUFDUDtBQUU1QyxNQUFNSyxXQUFXO1FBQUMsRUFBRUMsSUFBSSxFQUFFQyxTQUFTLEVBQUU7O0lBQ25DLE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUMvQyxNQUFNLENBQUNRLFFBQVFDLFVBQVUsR0FBR1QsK0NBQVFBLENBQUM7SUFFckNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVcsWUFBWTtZQUNoQixJQUFJO2dCQUNGLE1BQU1DLGVBQWUsTUFBTVA7Z0JBQzNCRyxlQUFlSTtZQUNqQixFQUFFLE9BQU9DLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyxnQ0FBZ0NBO1lBQ2hEO1FBQ0Y7UUFDQUY7SUFDRixHQUFHO1FBQUNOO0tBQUs7SUFFVEwsZ0RBQVNBLENBQUM7UUFDUixNQUFNZSxjQUFjO1lBQ2xCLElBQUk7Z0JBQ0YsSUFBSVIsZUFBZUEsWUFBWVMsS0FBSyxFQUFFO29CQUNwQyxNQUFNQyxjQUFjLE1BQU1DLE1BQ3hCLHlEQUEyRSxPQUFsQlgsWUFBWVMsS0FBSyxFQUFDO29CQUU3RSxNQUFNRyxZQUFZLE1BQU1GLFlBQVlHLElBQUk7b0JBQ3hDLE1BQU1DLE1BQU1GLFVBQVVHLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDRixHQUFHO29CQUNyQ1gsVUFBVVc7Z0JBQ1o7WUFDRixFQUFFLE9BQU9SLE9BQU87Z0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw4QkFBOEJBO1lBQzlDO1FBQ0Y7UUFDQUU7SUFDRixHQUFHO1FBQUNSO0tBQVk7SUFFaEIscUJBQ0UsOERBQUNpQjtRQUFJbEIsV0FBVyxHQUF1QkEsT0FBcEJKLDhFQUFnQixFQUFDLEtBQWEsT0FBVkk7a0JBRXBDQyw2QkFDQzs7OEJBRUUsOERBQUNtQjtvQkFBR3BCLFdBQVdKLDBFQUFZOzhCQUFHSyxZQUFZb0IsS0FBSzs7Ozs7OzhCQUMvQyw4REFBQ0M7b0JBQUV0QixXQUFXSixnRkFBa0I7OEJBQUdLLFlBQVlzQixXQUFXOzs7Ozs7OEJBQzFELDhEQUFDQztvQkFBSUMsS0FBS3RCO29CQUFRSCxXQUFXSiwwRUFBWTtvQkFBRStCLEtBQUk7Ozs7Ozs4QkFDL0MsOERBQUNDOzs7Ozs4QkFBSSw4REFBQy9CLDZEQUFPQTtvQkFBQ0csV0FBV0osOEVBQWdCOzs7Ozs7Ozs7Ozs7O0FBS25EO0dBaERNRTtLQUFBQTtBQWtETiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0hlYWRsaW5lLmpzeD84MWRiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9IZWFkbGluZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtdWkvbWF0ZXJpYWwvRGl2aWRlcic7XHJcblxyXG5jb25zdCBIZWFkbGluZSA9ICh7IGRhdGEsIGNsYXNzTmFtZSB9KSA9PiB7XHJcbiAgY29uc3QgW2FydGljbGVEYXRhLCBzZXRBcnRpY2xlRGF0YV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbY21zVXJsLCBzZXRDbXNVcmxdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzb2x2ZWREYXRhID0gYXdhaXQgZGF0YTtcclxuICAgICAgICBzZXRBcnRpY2xlRGF0YShyZXNvbHZlZERhdGEpO1xyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBhcnRpY2xlIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGZldGNoRGF0YSgpO1xyXG4gIH0sIFtkYXRhXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBmZXRjaENtc1VybCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBpZiAoYXJ0aWNsZURhdGEgJiYgYXJ0aWNsZURhdGEuaW1nSWQpIHtcclxuICAgICAgICAgIGNvbnN0IGNtc1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICAgIGBodHRwczovL2Nkbi5jb250ZW50ZnVsLmNvbS9zcGFjZXMvdmRubDRtZDF4cHN2L2Fzc2V0cy8ke2FydGljbGVEYXRhLmltZ0lkfT9hY2Nlc3NfdG9rZW49dEI3Ri1tVVdtbjFkeFdFQ29mN0pucTdHX1NmWFVxcmVXbU02b0c0S3ZLOGBcclxuICAgICAgICAgICk7XHJcbiAgICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBhd2FpdCBjbXNSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICBjb25zdCB1cmwgPSBpbWFnZURhdGEuZmllbGRzLmZpbGUudXJsO1xyXG4gICAgICAgICAgc2V0Q21zVXJsKHVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyBpbWFnZSBkYXRhOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBmZXRjaENtc1VybCgpO1xyXG4gIH0sIFthcnRpY2xlRGF0YV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7Y2xhc3NOYW1lfWB9PlxyXG4gICAgICB7LyogdXNlIHNob3J0LWNpcmN1aXQgZXZhbHVhdGlvbiAgKi99XHJcbiAgICAgIHthcnRpY2xlRGF0YSAmJiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICBcclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+e2FydGljbGVEYXRhLnRpdGxlfTwvaDI+XHJcbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+e2FydGljbGVEYXRhLmRlc2NyaXB0aW9ufTwvcD5cclxuICAgICAgICAgIDxpbWcgc3JjPXtjbXNVcmx9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlfSBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgPGJyLz48RGl2aWRlciBjbGFzc05hbWU9e3N0eWxlcy5obERpdmlkZXJ9Lz5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIZWFkbGluZTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJEaXZpZGVyIiwiSGVhZGxpbmUiLCJkYXRhIiwiY2xhc3NOYW1lIiwiYXJ0aWNsZURhdGEiLCJzZXRBcnRpY2xlRGF0YSIsImNtc1VybCIsInNldENtc1VybCIsImZldGNoRGF0YSIsInJlc29sdmVkRGF0YSIsImVycm9yIiwiY29uc29sZSIsImZldGNoQ21zVXJsIiwiaW1nSWQiLCJjbXNSZXNwb25zZSIsImZldGNoIiwiaW1hZ2VEYXRhIiwianNvbiIsInVybCIsImZpZWxkcyIsImZpbGUiLCJkaXYiLCJjb250YWluZXIiLCJoMiIsInRpdGxlIiwicCIsImRlc2NyaXB0aW9uIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJiciIsImhsRGl2aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Headline.jsx\n"));

/***/ })

});