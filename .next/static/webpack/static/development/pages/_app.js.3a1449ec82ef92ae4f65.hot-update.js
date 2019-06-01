webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/ModalBlock.js":
/*!**********************************!*\
  !*** ./components/ModalBlock.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");






var _jsxFileName = "C:\\Users\\baram\\Git\\leket-go\\components\\ModalBlock.js";





var ModalBlock =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(ModalBlock, _React$Component);

  function ModalBlock() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ModalBlock);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(ModalBlock).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(ModalBlock, [{
    key: "render",
    value: function render() {
      var _this = this;

      var modal = this.props.modal;
      var title, body, buttons;

      switch (modal.msg) {
        case 'ASSIGN_TASKS_SUCCESS':
          title = 'הצלחה';
          body = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            },
            __self: this
          }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(modal.entries).length, "                     \u05D4\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E9\u05D5\u05D1\u05E6\u05D5 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4! \u05E0\u05D9\u05EA\u05DF \u05DC\u05E8\u05D0\u05D5\u05EA \u05D0\u05EA \u05DB\u05DC \u05D4\u05E9\u05D9\u05D1\u05D5\u05E6\u05D9\u05DD \u05E9\u05DC\u05DA \u05D1\u05E2\u05DE\u05D5\u05D3 ", react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: "assigned-tasks",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
            onClick: function onClick() {
              return _this.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            },
            __self: this
          }, "\u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD \u05E7\u05E8\u05D5\u05D1\u05D9\u05DD")), ".");
          buttons = [{
            onClick: function onClick() {
              return _this.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'REPORT_FILL':
          title = 'משוב על איסוף שבוצע';
          body = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
            for: "inputGroupSelect01",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 25
            },
            __self: this
          }, "\u05E2\u05D9\u05E7\u05E8\u05D9\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            class: "input-group mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 26
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
            type: "text",
            placeholder: "\u05DB\u05DE\u05D5\u05EA",
            class: "form-control",
            id: "basic-url",
            "aria-describedby": "basic-addon3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 27
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            class: "input-group-append",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            class: "input-group-text",
            id: "basic-addon3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          }, "\u05DE\u05D9\u05DB\u05DC\u05D9\u05DD"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
            for: "inputGroupSelect01",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          }, "\u05EA\u05D5\u05E1\u05E4\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            class: "input-group mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
            type: "text",
            placeholder: "\u05DB\u05DE\u05D5\u05EA",
            class: "form-control",
            id: "basic-url",
            "aria-describedby": "basic-addon3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            class: "input-group-append",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            class: "input-group-text",
            id: "basic-addon3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          }, "\u05DE\u05D9\u05DB\u05DC\u05D9\u05DD"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
            for: "inputGroupSelect01",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          }, "\u05DE\u05D0\u05E4\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            class: "input-group mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
            type: "text",
            placeholder: "\u05DB\u05DE\u05D5\u05EA",
            "aria-label": "First name",
            class: "form-control",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
            class: "custom-select",
            id: "inputGroupSelect03",
            "aria-label": "Example select with button addon",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            selected: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          }, "\u05D1\u05D7\u05D9\u05E8\u05EA \u05E1\u05D5\u05D2"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            value: "1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }, "\u05D0\u05E8\u05D2\u05D6\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            value: "2",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, "\u05E9\u05E7\u05D9\u05D5\u05EA \u05E1\u05D5\u05E4\u05E8"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            value: "3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          }, "\u05E9\u05E7\u05D9\u05DD"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
            for: "inputGroupSelect01",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          }, "\u05DC\u05D7\u05DD"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            class: "input-group mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
            type: "text",
            placeholder: "\u05DB\u05DE\u05D5\u05EA",
            "aria-label": "First name",
            class: "form-control",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
            class: "custom-select",
            id: "inputGroupSelect03",
            "aria-label": "Example select with button addon",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            selected: true,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          }, "\u05D1\u05D7\u05D9\u05E8\u05EA \u05E1\u05D5\u05D2"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            value: "1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          }, "\u05D0\u05E8\u05D2\u05D6\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            value: "2",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          }, "\u05E9\u05E7\u05D9\u05D5\u05EA \u05E1\u05D5\u05E4\u05E8"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            value: "3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, "\u05E9\u05E7\u05D9\u05DD"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            class: "form-group",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 61
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
            for: "exampleFormControlInput1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }, "\u05E2\u05DE\u05D5\u05EA\u05D4"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
            type: "email",
            class: "form-control",
            id: "exampleFormControlInput1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            class: "form-group",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
            for: "exampleFormControlTextarea1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          }, "\u05D4\u05E2\u05E8\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
            class: "form-control",
            id: "exampleFormControlTextarea1",
            rows: "3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            },
            __self: this
          })));
          buttons = [{
            onClick: function onClick() {
              return _this.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'REPORT_UNDONE':
          title = 'משוב על איסוף שלא בוצע';
          body = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 80
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            class: "form-group",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 81
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
            for: "exampleFormControlSelect1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          }, "\u05DE\u05D3\u05D5\u05E2 \u05DC\u05D0 \u05D1\u05D5\u05E6\u05E2 \u05D4\u05D0\u05D9\u05E1\u05D5\u05E3?"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
            class: "form-control",
            id: "exampleFormControlSelect1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 83
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 84
            },
            __self: this
          }, "\u05DC\u05D0 \u05E0\u05D5\u05EA\u05E8 \u05DE\u05D6\u05D5\u05DF"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85
            },
            __self: this
          }, "\u05DC\u05D0 \u05E0\u05E2\u05E0\u05D9\u05EA\u05D9"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86
            },
            __self: this
          }, "\u05E1\u05D9\u05D1\u05D4 \u05D0\u05D7\u05E8\u05EA"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            class: "form-group",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 89
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
            for: "exampleFormControlTextarea1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90
            },
            __self: this
          }, "\u05D4\u05E2\u05E8\u05D5\u05EA \u05E0\u05D5\u05E1\u05E4\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("textarea", {
            class: "form-control",
            id: "exampleFormControlTextarea1",
            rows: "3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 91
            },
            __self: this
          })));
          buttons = [{
            onClick: function onClick() {
              return _this.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'primary',
            text: 'שליחה'
          }, {
            onClick: function onClick() {
              return _this.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'ביטול'
          }];
          break;

        case 'TASK_NOTES':
          title = 'הערות';
          body = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            },
            __self: this
          }, modal.entries.notes);
          buttons = [{
            onClick: function onClick() {
              return _this.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'סגירה'
          }];
          break;

        case 'TASK_CANCEL':
          title = 'הסרת שיבוץ';
          body = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 119
            },
            __self: this
          }, "...");
          buttons = [{
            onClick: function onClick() {
              return _this.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'danger',
            text: 'הסרה'
          }, {
            onClick: function onClick() {
              return _this.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'ביטול'
          }];
          break;

        case 'EDIT_USER':
          title = 'עריכת פרטי משתמש';
          body = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 135
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            class: "form-group",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 136
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
            for: "exampleFormControlSelect1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 137
            },
            __self: this
          }, "\u05E9\u05DD \u05E4\u05E8\u05D8\u05D9"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
            class: "form-control",
            id: "exampleFormControlInput1",
            value: modal.entries.firstName,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
            for: "exampleFormControlSelect1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 139
            },
            __self: this
          }, "\u05E9\u05DD \u05DE\u05E9\u05E4\u05D7\u05D4"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
            class: "form-control",
            id: "exampleFormControlInput1",
            value: modal.entries.lastName,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 140
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
            for: "exampleFormControlSelect1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 141
            },
            __self: this
          }, "\u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
            type: "email",
            class: "form-control",
            id: "exampleFormControlInput1",
            value: modal.entries.email,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 142
            },
            __self: this
          }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "form-group",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 143
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
            htmlFor: "exampleFormControlInput1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 144
            },
            __self: this
          }, "\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D2\u05D5\u05E8\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "input-group mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "input-group-prepend",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 146
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "input-group-text",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 147
            },
            __self: this
          }, "\u05E8\u05D7\u05D5\u05D1")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            "aria-label": "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 149
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "input-group mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 151
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "input-group-prepend",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 152
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "input-group-text",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153
            },
            __self: this
          }, "\u05DE\u05E1\u05E4\u05E8")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            "aria-label": "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 155
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "input-group mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "input-group-prepend",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
            className: "input-group-text",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159
            },
            __self: this
          }, "\u05E2\u05D9\u05E8")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("input", {
            type: "text",
            className: "form-control",
            "aria-label": "",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 161
            },
            __self: this
          }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("label", {
            for: "exampleFormControlSelect1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            },
            __self: this
          }, "\u05D0\u05D6\u05D5\u05E8 \u05E9\u05D9\u05D5\u05DA"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("select", {
            class: "form-control",
            id: "exampleFormControlSelect1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 165
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            },
            __self: this
          }, "\u05E8\u05D0\u05E9\u05D5\u05DF \u05DC\u05E6\u05D9\u05D5\u05DF"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 167
            },
            __self: this
          }, "\u05E8\u05E2\u05E0\u05E0\u05D4"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 168
            },
            __self: this
          }, "\u05EA\u05DC \u05D0\u05D1\u05D9\u05D1"))));
          buttons = [{
            onClick: function onClick() {
              return _this.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'primary',
            text: 'שליחה'
          }, {
            onClick: function onClick() {
              return _this.props.dispatch({
                type: 'CLOSE_MODAL'
              });
            },
            color: 'secondary',
            text: 'ביטול'
          }];
          break;
      }

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
        show: modal.isOpen,
        onHide: function onHide() {
          return _this.props.dispatch({
            type: 'CLOSE_MODAL'
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Modal"].Header, {
        closeButton: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Modal"].Title, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190
        },
        __self: this
      }, title)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Modal"].Body, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        },
        __self: this
      }, body), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Modal"].Footer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        },
        __self: this
      }, buttons.map(function (button) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          variant: button.color,
          onClick: button.onClick,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198
          },
          __self: this
        }, button.text);
      })));
    }
  }]);

  return ModalBlock;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(function (state) {
  return state;
})(ModalBlock));

/***/ })

})
//# sourceMappingURL=_app.js.3a1449ec82ef92ae4f65.hot-update.js.map