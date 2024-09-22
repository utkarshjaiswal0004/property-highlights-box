/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Header.tsx":
/*!*******************************!*\
  !*** ./components/Header.tsx ***!
  \*******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./components/HighlightList.tsx":
/*!**************************************!*\
  !*** ./components/HighlightList.tsx ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./components/Home.tsx":
/*!*****************************!*\
  !*** ./components/Home.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_dnd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dnd */ \"(app-pages-browser)/./node_modules/react-dnd/dist/core/DndProvider.js\");\n/* harmony import */ var react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-dnd-html5-backend */ \"(app-pages-browser)/./node_modules/react-dnd-html5-backend/dist/index.js\");\n/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! immutability-helper */ \"(app-pages-browser)/./node_modules/immutability-helper/index.js\");\n/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/page.module.css */ \"(app-pages-browser)/./app/page.module.css\");\n/* harmony import */ var _app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_app_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ \"(app-pages-browser)/./components/Header.tsx\");\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Header__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _HighlightList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HighlightList */ \"(app-pages-browser)/./components/HighlightList.tsx\");\n/* harmony import */ var _HighlightList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_HighlightList__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _service_highlightService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/highlightService */ \"(app-pages-browser)/./service/highlightService.ts\");\n// Home.tsx\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst debounce = (func, delay)=>{\n    let timeoutId;\n    return function() {\n        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){\n            args[_key] = arguments[_key];\n        }\n        if (timeoutId) {\n            clearTimeout(timeoutId);\n        }\n        timeoutId = setTimeout(()=>{\n            func(...args);\n        }, delay);\n    };\n};\nconst Home = ()=>{\n    _s();\n    const [highlights, setHighlights] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchHighlights = async ()=>{\n            const savedHighlights = await (0,_service_highlightService__WEBPACK_IMPORTED_MODULE_6__.getHighlights)();\n            console.log(savedHighlights);\n            setHighlights(savedHighlights);\n        };\n        fetchHighlights();\n    }, []);\n    const addHighlight = async ()=>{\n        const newHighlight = {\n            text: \"\",\n            sequence: highlights.length + 1\n        };\n        const createdHighlight = await (0,_service_highlightService__WEBPACK_IMPORTED_MODULE_6__.createHighlight)(newHighlight.text, newHighlight.sequence);\n        setHighlights((prev)=>[\n                ...prev,\n                {\n                    _id: createdHighlight._id,\n                    info: createdHighlight.info,\n                    sequence: createdHighlight.sequence\n                }\n            ]);\n    };\n    const updateHighlight = async (id, text)=>{\n        const highlightToUpdate = highlights.find((h)=>h._id === id);\n        if (highlightToUpdate) {\n            try {\n                const updatedHighlight = await (0,_service_highlightService__WEBPACK_IMPORTED_MODULE_6__.updateHighlight)(id, text, highlightToUpdate.sequence);\n                setHighlights((prev)=>prev.map((h)=>h._id === id ? {\n                            ...h,\n                            info: updatedHighlight.info\n                        } : h));\n            } catch (error) {\n                console.error(\"Error updating highlight:\", error);\n            }\n        }\n    };\n    const debounceUpdateHighlight = debounce(updateHighlight, 1000);\n    const handleTextChange = (id, text)=>{\n        const highlightToUpdate = highlights.find((h)=>h._id === id);\n        if (highlightToUpdate) {\n            setHighlights((prev)=>prev.map((h)=>h._id === id ? {\n                        ...h,\n                        info: text\n                    } : h));\n            debounceUpdateHighlight(id, text);\n        }\n    };\n    const deleteHighlight = async (id)=>{\n        await (0,_service_highlightService__WEBPACK_IMPORTED_MODULE_6__.deleteHighlight)(id);\n        setHighlights((prev)=>prev.filter((h)=>h._id !== id));\n    };\n    const moveHighlight = async (dragIndex, hoverIndex)=>{\n        const draggedHighlight = highlights[dragIndex];\n        const updatedHighlights = immutability_helper__WEBPACK_IMPORTED_MODULE_2___default()(highlights, {\n            $splice: [\n                [\n                    dragIndex,\n                    1\n                ],\n                [\n                    hoverIndex,\n                    0,\n                    draggedHighlight\n                ]\n            ]\n        });\n        setHighlights(updatedHighlights);\n        const highlightIds = updatedHighlights.map((h)=>h._id);\n        try {\n            await (0,_service_highlightService__WEBPACK_IMPORTED_MODULE_6__.reorderHighlights)(highlightIds);\n        } catch (error) {\n            console.error(\"Error reordering highlights:\", error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_dnd__WEBPACK_IMPORTED_MODULE_7__.DndProvider, {\n        backend: react_dnd_html5_backend__WEBPACK_IMPORTED_MODULE_8__.HTML5Backend,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_app_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_Header__WEBPACK_IMPORTED_MODULE_4___default()), {\n                    addHighlight: addHighlight\n                }, void 0, false, {\n                    fileName: \"/Users/utkarshjaiswal/Desktop/projects/sample_test/gorrin_system/property_highlight_box/frontend/components/Home.tsx\",\n                    lineNumber: 126,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_HighlightList__WEBPACK_IMPORTED_MODULE_5___default()), {\n                    highlights: highlights,\n                    moveHighlight: moveHighlight,\n                    updateHighlight: handleTextChange,\n                    deleteHighlight: deleteHighlight\n                }, void 0, false, {\n                    fileName: \"/Users/utkarshjaiswal/Desktop/projects/sample_test/gorrin_system/property_highlight_box/frontend/components/Home.tsx\",\n                    lineNumber: 127,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/utkarshjaiswal/Desktop/projects/sample_test/gorrin_system/property_highlight_box/frontend/components/Home.tsx\",\n            lineNumber: 125,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/utkarshjaiswal/Desktop/projects/sample_test/gorrin_system/property_highlight_box/frontend/components/Home.tsx\",\n        lineNumber: 124,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Home, \"Vg24pkVvFhvvKvQbjgaSSu/Xsa8=\");\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTNCLGNBQWM0QjtRQUVkLE1BQU1FLGVBQWVGLGtCQUFrQlQsR0FBRyxDQUFDLENBQUNGLElBQU1BLEVBQUVMLEdBQUc7UUFDdkQsSUFBSTtZQUNGLE1BQU10Qiw0RUFBb0JBLENBQUN3QztRQUM3QixFQUFFLE9BQU9WLE9BQU87WUFDZGpCLFFBQVFpQixLQUFLLENBQUMsZ0NBQWdDQTtRQUNoRDtJQUNGO0lBRUEscUJBQ0UsOERBQUMzQyxrREFBV0E7UUFBQ3NELFNBQVNyRCxpRUFBWUE7a0JBQ2hDLDRFQUFDc0Q7WUFBSUMsV0FBV3JELHVFQUFnQjs7OEJBQzlCLDhEQUFDQyxnREFBTUE7b0JBQUN3QixjQUFjQTs7Ozs7OzhCQUN0Qiw4REFBQ3ZCLHVEQUFhQTtvQkFDWmlCLFlBQVlBO29CQUNaeUIsZUFBZUE7b0JBQ2Z2QyxpQkFBaUJxQztvQkFDakJuQyxpQkFBaUJBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUszQjtHQWpHTVc7S0FBQUE7QUFtR04sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ib21lLnRzeD9lNWU1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEhvbWUudHN4XG5cInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IERuZFByb3ZpZGVyIH0gZnJvbSBcInJlYWN0LWRuZFwiO1xuaW1wb3J0IHsgSFRNTDVCYWNrZW5kIH0gZnJvbSBcInJlYWN0LWRuZC1odG1sNS1iYWNrZW5kXCI7XG5pbXBvcnQgdXBkYXRlIGZyb20gXCJpbW11dGFiaWxpdHktaGVscGVyXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9hcHAvcGFnZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xuaW1wb3J0IEhpZ2hsaWdodExpc3QgZnJvbSBcIi4vSGlnaGxpZ2h0TGlzdFwiO1xuaW1wb3J0IHtcbiAgY3JlYXRlSGlnaGxpZ2h0LFxuICBnZXRIaWdobGlnaHRzLFxuICB1cGRhdGVIaWdobGlnaHQgYXMgYXBpVXBkYXRlSGlnaGxpZ2h0LFxuICBkZWxldGVIaWdobGlnaHQgYXMgYXBpRGVsZXRlSGlnaGxpZ2h0LFxuICByZW9yZGVySGlnaGxpZ2h0cyBhcyBhcGlSZW9yZGVySGlnaGxpZ2h0cyxcbn0gZnJvbSBcIi4uL3NlcnZpY2UvaGlnaGxpZ2h0U2VydmljZVwiO1xuXG5pbnRlcmZhY2UgSGlnaGxpZ2h0IHtcbiAgX2lkOiBzdHJpbmc7XG4gIGluZm86IHN0cmluZztcbiAgc2VxdWVuY2U6IG51bWJlcjtcbn1cblxuY29uc3QgZGVib3VuY2UgPSAoZnVuYzogRnVuY3Rpb24sIGRlbGF5OiBudW1iZXIpID0+IHtcbiAgbGV0IHRpbWVvdXRJZDogTm9kZUpTLlRpbWVvdXQ7XG5cbiAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICh0aW1lb3V0SWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIH1cblxuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZnVuYyguLi5hcmdzKTtcbiAgICB9LCBkZWxheSk7XG4gIH07XG59O1xuXG5jb25zdCBIb21lOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW2hpZ2hsaWdodHMsIHNldEhpZ2hsaWdodHNdID0gdXNlU3RhdGU8SGlnaGxpZ2h0W10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoSGlnaGxpZ2h0cyA9IGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHNhdmVkSGlnaGxpZ2h0cyA9IGF3YWl0IGdldEhpZ2hsaWdodHMoKTtcbiAgICAgIGNvbnNvbGUubG9nKHNhdmVkSGlnaGxpZ2h0cyk7XG4gICAgICBzZXRIaWdobGlnaHRzKHNhdmVkSGlnaGxpZ2h0cyk7XG4gICAgfTtcbiAgICBmZXRjaEhpZ2hsaWdodHMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGFkZEhpZ2hsaWdodCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBuZXdIaWdobGlnaHQgPSB7IHRleHQ6IFwiXCIsIHNlcXVlbmNlOiBoaWdobGlnaHRzLmxlbmd0aCArIDEgfTtcbiAgICBjb25zdCBjcmVhdGVkSGlnaGxpZ2h0ID0gYXdhaXQgY3JlYXRlSGlnaGxpZ2h0KFxuICAgICAgbmV3SGlnaGxpZ2h0LnRleHQsXG4gICAgICBuZXdIaWdobGlnaHQuc2VxdWVuY2VcbiAgICApO1xuICAgIHNldEhpZ2hsaWdodHMoKHByZXYpID0+IFtcbiAgICAgIC4uLnByZXYsXG4gICAgICB7XG4gICAgICAgIF9pZDogY3JlYXRlZEhpZ2hsaWdodC5faWQsXG4gICAgICAgIGluZm86IGNyZWF0ZWRIaWdobGlnaHQuaW5mbyxcbiAgICAgICAgc2VxdWVuY2U6IGNyZWF0ZWRIaWdobGlnaHQuc2VxdWVuY2UsXG4gICAgICB9LFxuICAgIF0pO1xuICB9O1xuXG4gIGNvbnN0IHVwZGF0ZUhpZ2hsaWdodCA9IGFzeW5jIChpZDogc3RyaW5nLCB0ZXh0OiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBoaWdobGlnaHRUb1VwZGF0ZSA9IGhpZ2hsaWdodHMuZmluZCgoaCkgPT4gaC5faWQgPT09IGlkKTtcbiAgICBpZiAoaGlnaGxpZ2h0VG9VcGRhdGUpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHVwZGF0ZWRIaWdobGlnaHQgPSBhd2FpdCBhcGlVcGRhdGVIaWdobGlnaHQoXG4gICAgICAgICAgaWQsXG4gICAgICAgICAgdGV4dCxcbiAgICAgICAgICBoaWdobGlnaHRUb1VwZGF0ZS5zZXF1ZW5jZVxuICAgICAgICApO1xuICAgICAgICBzZXRIaWdobGlnaHRzKChwcmV2KSA9PlxuICAgICAgICAgIHByZXYubWFwKChoKSA9PlxuICAgICAgICAgICAgaC5faWQgPT09IGlkID8geyAuLi5oLCBpbmZvOiB1cGRhdGVkSGlnaGxpZ2h0LmluZm8gfSA6IGhcbiAgICAgICAgICApXG4gICAgICAgICk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgdXBkYXRpbmcgaGlnaGxpZ2h0OlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGRlYm91bmNlVXBkYXRlSGlnaGxpZ2h0ID0gZGVib3VuY2UodXBkYXRlSGlnaGxpZ2h0LCAxMDAwKTtcblxuICBjb25zdCBoYW5kbGVUZXh0Q2hhbmdlID0gKGlkOiBzdHJpbmcsIHRleHQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGhpZ2hsaWdodFRvVXBkYXRlID0gaGlnaGxpZ2h0cy5maW5kKChoKSA9PiBoLl9pZCA9PT0gaWQpO1xuICAgIGlmIChoaWdobGlnaHRUb1VwZGF0ZSkge1xuICAgICAgc2V0SGlnaGxpZ2h0cygocHJldikgPT5cbiAgICAgICAgcHJldi5tYXAoKGgpID0+IChoLl9pZCA9PT0gaWQgPyB7IC4uLmgsIGluZm86IHRleHQgfSA6IGgpKVxuICAgICAgKTtcbiAgICAgIGRlYm91bmNlVXBkYXRlSGlnaGxpZ2h0KGlkLCB0ZXh0KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlSGlnaGxpZ2h0ID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgICBhd2FpdCBhcGlEZWxldGVIaWdobGlnaHQoaWQpO1xuICAgIHNldEhpZ2hsaWdodHMoKHByZXYpID0+IHByZXYuZmlsdGVyKChoKSA9PiBoLl9pZCAhPT0gaWQpKTtcbiAgfTtcblxuICBjb25zdCBtb3ZlSGlnaGxpZ2h0ID0gYXN5bmMgKGRyYWdJbmRleDogbnVtYmVyLCBob3ZlckluZGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBkcmFnZ2VkSGlnaGxpZ2h0ID0gaGlnaGxpZ2h0c1tkcmFnSW5kZXhdO1xuICAgIGNvbnN0IHVwZGF0ZWRIaWdobGlnaHRzID0gdXBkYXRlKGhpZ2hsaWdodHMsIHtcbiAgICAgICRzcGxpY2U6IFtcbiAgICAgICAgW2RyYWdJbmRleCwgMV0sXG4gICAgICAgIFtob3ZlckluZGV4LCAwLCBkcmFnZ2VkSGlnaGxpZ2h0XSxcbiAgICAgIF0sXG4gICAgfSk7XG5cbiAgICBzZXRIaWdobGlnaHRzKHVwZGF0ZWRIaWdobGlnaHRzKTtcblxuICAgIGNvbnN0IGhpZ2hsaWdodElkcyA9IHVwZGF0ZWRIaWdobGlnaHRzLm1hcCgoaCkgPT4gaC5faWQpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBhcGlSZW9yZGVySGlnaGxpZ2h0cyhoaWdobGlnaHRJZHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVvcmRlcmluZyBoaWdobGlnaHRzOlwiLCBlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPERuZFByb3ZpZGVyIGJhY2tlbmQ9e0hUTUw1QmFja2VuZH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgIDxIZWFkZXIgYWRkSGlnaGxpZ2h0PXthZGRIaWdobGlnaHR9IC8+XG4gICAgICAgIDxIaWdobGlnaHRMaXN0XG4gICAgICAgICAgaGlnaGxpZ2h0cz17aGlnaGxpZ2h0c31cbiAgICAgICAgICBtb3ZlSGlnaGxpZ2h0PXttb3ZlSGlnaGxpZ2h0fVxuICAgICAgICAgIHVwZGF0ZUhpZ2hsaWdodD17aGFuZGxlVGV4dENoYW5nZX1cbiAgICAgICAgICBkZWxldGVIaWdobGlnaHQ9e2RlbGV0ZUhpZ2hsaWdodH1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvRG5kUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJEbmRQcm92aWRlciIsIkhUTUw1QmFja2VuZCIsInVwZGF0ZSIsInN0eWxlcyIsIkhlYWRlciIsIkhpZ2hsaWdodExpc3QiLCJjcmVhdGVIaWdobGlnaHQiLCJnZXRIaWdobGlnaHRzIiwidXBkYXRlSGlnaGxpZ2h0IiwiYXBpVXBkYXRlSGlnaGxpZ2h0IiwiZGVsZXRlSGlnaGxpZ2h0IiwiYXBpRGVsZXRlSGlnaGxpZ2h0IiwicmVvcmRlckhpZ2hsaWdodHMiLCJhcGlSZW9yZGVySGlnaGxpZ2h0cyIsImRlYm91bmNlIiwiZnVuYyIsImRlbGF5IiwidGltZW91dElkIiwiYXJncyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJIb21lIiwiaGlnaGxpZ2h0cyIsInNldEhpZ2hsaWdodHMiLCJmZXRjaEhpZ2hsaWdodHMiLCJzYXZlZEhpZ2hsaWdodHMiLCJjb25zb2xlIiwibG9nIiwiYWRkSGlnaGxpZ2h0IiwibmV3SGlnaGxpZ2h0IiwidGV4dCIsInNlcXVlbmNlIiwibGVuZ3RoIiwiY3JlYXRlZEhpZ2hsaWdodCIsInByZXYiLCJfaWQiLCJpbmZvIiwiaWQiLCJoaWdobGlnaHRUb1VwZGF0ZSIsImZpbmQiLCJoIiwidXBkYXRlZEhpZ2hsaWdodCIsIm1hcCIsImVycm9yIiwiZGVib3VuY2VVcGRhdGVIaWdobGlnaHQiLCJoYW5kbGVUZXh0Q2hhbmdlIiwiZmlsdGVyIiwibW92ZUhpZ2hsaWdodCIsImRyYWdJbmRleCIsImhvdmVySW5kZXgiLCJkcmFnZ2VkSGlnaGxpZ2h0IiwidXBkYXRlZEhpZ2hsaWdodHMiLCIkc3BsaWNlIiwiaGlnaGxpZ2h0SWRzIiwiYmFja2VuZCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Home.tsx\n"));

/***/ })

});