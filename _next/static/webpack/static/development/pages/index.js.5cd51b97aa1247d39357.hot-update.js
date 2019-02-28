webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "../node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "../node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "../node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ramda */ "../node_modules/ramda/es/index.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recompose/compose */ "../node_modules/recompose/compose.js");
/* harmony import */ var recompose_compose__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(recompose_compose__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _functions_createKeyBindings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../functions/createKeyBindings */ "./functions/createKeyBindings.js");

var _jsxFileName = "/Users/line/Documents/video-player/src/pages/index.jsx";


/* eslint-disable jsx-a11y/media-has-caption, react/jsx-one-expression-per-line */

/* eslint-disable react/prop-types */






var fn = function fn(_ref) {
  var router = _ref.router;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(ramda__WEBPACK_IMPORTED_MODULE_4__["pathOr"](null, ['query', 'src'])(router)),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      src = _useState2[0],
      setSrc = _useState2[1];

  var videoRef = react__WEBPACK_IMPORTED_MODULE_2___default.a.createRef();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    return Object(_functions_createKeyBindings__WEBPACK_IMPORTED_MODULE_6__["default"])({
      ref: videoRef
    });
  });

  var onChange = function onChange(e) {
    var url = URL.createObjectURL(e.target.files[0]);
    setSrc(url);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3582941474" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, src && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("video", {
    autoPlay: true,
    controls: true,
    src: src,
    ref: videoRef,
    className: "jsx-3582941474" + " " + "video-player",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), !src && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3582941474" + " " + "upload",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "file",
    onChange: onChange,
    className: "jsx-3582941474",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3713362791",
    __self: this
  }, ".container.jsx-3582941474{text-align:center;padding:5% 0;overflow:hidden;}.video-player.jsx-3582941474{width:80vw;}.upload.jsx-3582941474{width:80vw;height:60vh;border:3px dashed #ccc;margin:0 auto;}.upload.jsx-3582941474>input.jsx-3582941474{width:100%;height:100%;opacity:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW5lL0RvY3VtZW50cy92aWRlby1wbGF5ZXIvc3JjL3BhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QlMsQUFHK0IsQUFLUCxBQUdBLEFBTUEsV0FSYixBQUdjLEFBTUEsT0FkQyxLQVNVLEFBTWIsUUFkTSxFQWVsQixhQU5nQixDQVJoQixhQVNBIiwiZmlsZSI6Ii9Vc2Vycy9saW5lL0RvY3VtZW50cy92aWRlby1wbGF5ZXIvc3JjL3BhZ2VzL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L21lZGlhLWhhcy1jYXB0aW9uLCByZWFjdC9qc3gtb25lLWV4cHJlc3Npb24tcGVyLWxpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnO1xuaW1wb3J0IGNvbXBvc2UgZnJvbSAncmVjb21wb3NlL2NvbXBvc2UnO1xuXG5pbXBvcnQgY3JlYXRlS2V5QmluZGluZ3MgZnJvbSAnLi4vZnVuY3Rpb25zL2NyZWF0ZUtleUJpbmRpbmdzJztcblxuY29uc3QgZm4gPSAoeyByb3V0ZXIgfSkgPT4ge1xuICBjb25zdCBbc3JjLCBzZXRTcmNdID0gdXNlU3RhdGUoUi5wYXRoT3IobnVsbCwgWydxdWVyeScsICdzcmMnXSkocm91dGVyKSk7XG4gIGNvbnN0IHZpZGVvUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZUtleUJpbmRpbmdzKHsgcmVmOiB2aWRlb1JlZiB9KTtcbiAgfSk7XG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICBzZXRTcmModXJsKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAge3NyYyAmJiA8dmlkZW8gY2xhc3NOYW1lPVwidmlkZW8tcGxheWVyXCIgYXV0b1BsYXkgY29udHJvbHMgc3JjPXtzcmN9IHJlZj17dmlkZW9SZWZ9IC8+fVxuICAgICAgICB7IXNyYyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUlIDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudmlkZW8tcGxheWVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudXBsb2FkIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggZGFzaGVkICNjY2M7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnVwbG9hZCA+IGlucHV0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZSh3aXRoUm91dGVyKShmbik7XG4iXX0= */\n/*@ sourceURL=/Users/line/Documents/video-player/src/pages/index.jsx */"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2620733868",
    __self: this
  }, "body{background-color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW5lL0RvY3VtZW50cy92aWRlby1wbGF5ZXIvc3JjL3BhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRFMsQUFHb0MsdUJBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9saW5lL0RvY3VtZW50cy92aWRlby1wbGF5ZXIvc3JjL3BhZ2VzL2luZGV4LmpzeCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGpzeC1hMTF5L21lZGlhLWhhcy1jYXB0aW9uLCByZWFjdC9qc3gtb25lLWV4cHJlc3Npb24tcGVyLWxpbmUgKi9cbi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCAqIGFzIFIgZnJvbSAncmFtZGEnO1xuaW1wb3J0IGNvbXBvc2UgZnJvbSAncmVjb21wb3NlL2NvbXBvc2UnO1xuXG5pbXBvcnQgY3JlYXRlS2V5QmluZGluZ3MgZnJvbSAnLi4vZnVuY3Rpb25zL2NyZWF0ZUtleUJpbmRpbmdzJztcblxuY29uc3QgZm4gPSAoeyByb3V0ZXIgfSkgPT4ge1xuICBjb25zdCBbc3JjLCBzZXRTcmNdID0gdXNlU3RhdGUoUi5wYXRoT3IobnVsbCwgWydxdWVyeScsICdzcmMnXSkocm91dGVyKSk7XG4gIGNvbnN0IHZpZGVvUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgcmV0dXJuIGNyZWF0ZUtleUJpbmRpbmdzKHsgcmVmOiB2aWRlb1JlZiB9KTtcbiAgfSk7XG4gIGNvbnN0IG9uQ2hhbmdlID0gKGUpID0+IHtcbiAgICBjb25zdCB1cmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICBzZXRTcmModXJsKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAge3NyYyAmJiA8dmlkZW8gY2xhc3NOYW1lPVwidmlkZW8tcGxheWVyXCIgYXV0b1BsYXkgY29udHJvbHMgc3JjPXtzcmN9IHJlZj17dmlkZW9SZWZ9IC8+fVxuICAgICAgICB7IXNyYyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1cGxvYWRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAge2BcbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUlIDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudmlkZW8tcGxheWVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudXBsb2FkIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggZGFzaGVkICNjY2M7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnVwbG9hZCA+IGlucHV0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHN0eWxlIGdsb2JhbCBqc3g+XG4gICAgICAgIHtgXG4gICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZSh3aXRoUm91dGVyKShmbik7XG4iXX0= */\n/*@ sourceURL=/Users/line/Documents/video-player/src/pages/index.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_5___default()(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(fn));

/***/ })

})
//# sourceMappingURL=index.js.5cd51b97aa1247d39357.hot-update.js.map