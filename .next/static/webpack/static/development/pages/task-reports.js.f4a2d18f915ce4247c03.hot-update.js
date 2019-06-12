webpackHotUpdate("static\\development\\pages\\task-reports.js",{

/***/ "./pages/task-reports.js":
/*!*******************************!*\
  !*** ./pages/task-reports.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_TableBlock_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TableBlock.js */ "./components/TableBlock.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _dbActions_checkAuth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../dbActions/checkAuth */ "./dbActions/checkAuth.js");
/* harmony import */ var _loading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loading */ "./pages/loading.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");






var _jsxFileName = "C:\\Users\\baram\\Git\\leket-go\\pages\\task-reports.js";








var Task_reports =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Task_reports, _Component);

  function Task_reports(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Task_reports);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Task_reports).call(this, props));
    _this.state = {};
    _this.toList = _this.toList.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.toCards = _this.toCards.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Task_reports, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      Object(_dbActions_checkAuth__WEBPACK_IMPORTED_MODULE_10__["default"])(this.props.dispatch);
    }
  }, {
    key: "toList",
    value: function toList() {
      this.props.dispatch({
        type: 'TASK_LIST_VIEW'
      });
    }
  }, {
    key: "toCards",
    value: function toCards() {
      this.props.dispatch({
        type: 'TASK_CARDS_VIEW'
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      console.log(this.props);

      if (!this.props.authChecked || !this.props.isLoggedIn) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_loading__WEBPACK_IMPORTED_MODULE_11__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "wrapper d-flex justify-content-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("main", {
        className: "m-2",
        style: {
          paddingBottom: '3rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        className: "mb-4 mt-4 d-flex flex-row justify-content-between align-items-center",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("img", {
        src: "/static/report.png",
        width: "60",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }), "\u05DE\u05D9\u05DC\u05D5\u05D9 \u05DE\u05E9\u05D5\u05D1"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["ButtonGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        onClick: function onClick() {
          return _this2.toList();
        },
        variant: !this.props.tasksCardView ? 'primary' : 'outline-secondary',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        class: "fas fa-list nm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        onClick: function onClick() {
          return _this2.toCards();
        },
        variant: this.props.tasksCardView ? 'primary' : 'outline-secondary',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("i", {
        class: "far fa-clone nm",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_TableBlock_js__WEBPACK_IMPORTED_MODULE_7__["default"], {
        tableTasksCardView: this.props.tasksCardView,
        data: this.props.taskReports,
        page: "taskReports",
        type: "tasks",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      })))));
    }
  }]);

  return Task_reports;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(function (state) {
  return state;
})(Task_reports));

/***/ })

})
//# sourceMappingURL=task-reports.js.f4a2d18f915ce4247c03.hot-update.js.map