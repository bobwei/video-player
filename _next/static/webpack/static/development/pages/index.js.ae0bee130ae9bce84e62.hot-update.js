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
    className: "jsx-75196000" + " " + "container",
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
    className: "jsx-75196000" + " " + "video-player",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), !src && react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-75196000" + " " + "upload",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
    type: "file",
    onChange: onChange,
    className: "jsx-75196000",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "75196000",
    __self: this
  }, "body.jsx-75196000{background-color:red;}.container.jsx-75196000{text-align:center;padding:5% 0;overflow:hidden;}.video-player.jsx-75196000{width:80vw;}.upload.jsx-75196000{width:80vw;height:60vh;border:3px dashed #ccc;margin:0 auto;}.upload.jsx-75196000>input.jsx-75196000{width:100%;height:100%;opacity:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saW5lL0RvY3VtZW50cy92aWRlby1wbGF5ZXIvc3JjL3BhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QlMsQUFHa0MsQUFHSCxBQUtQLEFBR0EsQUFNQSxXQVJiLEFBR2MsQUFNQSxPQWRDLEdBSGYsRUFZeUIsQUFNYixRQWRNLEVBZWxCLGFBTmdCLENBUmhCLGFBU0EiLCJmaWxlIjoiL1VzZXJzL2xpbmUvRG9jdW1lbnRzL3ZpZGVvLXBsYXllci9zcmMvcGFnZXMvaW5kZXguanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUganN4LWExMXkvbWVkaWEtaGFzLWNhcHRpb24sIHJlYWN0L2pzeC1vbmUtZXhwcmVzc2lvbi1wZXItbGluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqL1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0ICogYXMgUiBmcm9tICdyYW1kYSc7XG5pbXBvcnQgY29tcG9zZSBmcm9tICdyZWNvbXBvc2UvY29tcG9zZSc7XG5cbmltcG9ydCBjcmVhdGVLZXlCaW5kaW5ncyBmcm9tICcuLi9mdW5jdGlvbnMvY3JlYXRlS2V5QmluZGluZ3MnO1xuXG5jb25zdCBmbiA9ICh7IHJvdXRlciB9KSA9PiB7XG4gIGNvbnN0IFtzcmMsIHNldFNyY10gPSB1c2VTdGF0ZShSLnBhdGhPcihudWxsLCBbJ3F1ZXJ5JywgJ3NyYyddKShyb3V0ZXIpKTtcbiAgY29uc3QgdmlkZW9SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gY3JlYXRlS2V5QmluZGluZ3MoeyByZWY6IHZpZGVvUmVmIH0pO1xuICB9KTtcbiAgY29uc3Qgb25DaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZS50YXJnZXQuZmlsZXNbMF0pO1xuICAgIHNldFNyYyh1cmwpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICB7c3JjICYmIDx2aWRlbyBjbGFzc05hbWU9XCJ2aWRlby1wbGF5ZXJcIiBhdXRvUGxheSBjb250cm9scyBzcmM9e3NyY30gcmVmPXt2aWRlb1JlZn0gLz59XG4gICAgICAgIHshc3JjICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PlxuICAgICAgICB7YFxuICAgICAgICAgIGJvZHkge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDUlIDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudmlkZW8tcGxheWVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudXBsb2FkIHtcbiAgICAgICAgICAgIHdpZHRoOiA4MHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICAgICAgYm9yZGVyOiAzcHggZGFzaGVkICNjY2M7XG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICB9XG4gICAgICAgICAgLnVwbG9hZCA+IGlucHV0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9XG4gICAgICA8L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY29tcG9zZSh3aXRoUm91dGVyKShmbik7XG4iXX0= */\n/*@ sourceURL=/Users/line/Documents/video-player/src/pages/index.jsx */"));
};

/* harmony default export */ __webpack_exports__["default"] = (recompose_compose__WEBPACK_IMPORTED_MODULE_5___default()(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(fn));

/***/ })

})
//# sourceMappingURL=index.js.ae0bee130ae9bce84e62.hot-update.js.map