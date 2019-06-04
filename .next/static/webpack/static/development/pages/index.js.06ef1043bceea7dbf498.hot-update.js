webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/TableBlock.js":
/*!**********************************!*\
  !*** ./components/TableBlock.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Entry__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Entry */ "./components/Entry.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/es/index.js");
/* harmony import */ var _dbActions_setAssignedTasks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../dbActions/setAssignedTasks */ "./dbActions/setAssignedTasks.js");







var _jsxFileName = "C:\\Users\\baram\\Git\\leket-go\\components\\TableBlock.js";






var TableBlock =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(TableBlock, _React$Component);

  function TableBlock(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TableBlock);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(TableBlock).call(this, props));
    _this.state = {
      tableColumns: _this.getTableColumns(),
      entrySelectedCounter: 0,
      selectedEntries: {},
      columnNames: {
        'actions': 'פעולות',
        'date': 'תאריך',
        'time': 'שעה',
        'city': 'עיר',
        'fullAddress': 'כתובת',
        'name': 'ספק',
        'uid': 'uid',
        'firstName': 'שם פרטי',
        'lastName': 'שם משפחה',
        'region': 'אזור',
        'email': 'דוא"ל',
        'tz': 'תעודת זהות',
        'street': 'רחוב',
        'contactName': 'שם',
        'contactNumber': 'טלפון',
        'checkBox': '',
        'phone': 'טלפון'
      },
      searchValue: '',
      searchField: 'firstName'
    };
    _this.selectCallback = _this.selectCallback.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.cancelSelection = _this.cancelSelection.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    _this.assignTasks = _this.assignTasks.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(TableBlock, [{
    key: "getTableColumns",
    value: function getTableColumns() {
      switch (this.props.page) {
        case 'index':
          return ['checkBox', 'date', 'time', 'city', 'name'];

        case 'assignedTasks':
          return ['date', 'time', 'fullAddress', 'name', 'contactName', 'contactNumber', 'actions'];

        case 'taskReports':
          return ['date', 'street', 'city', 'name', 'actions'];

        case 'adminUsers':
          return ['tz', 'firstName', 'lastName', 'email', 'phone', 'region', 'actions'];

        case 'adminTasks':
          return ['date', 'time', 'street', 'city', 'name', 'actions'];

        default:
          break;
      }
    }
  }, {
    key: "selectCallback",
    value: function selectCallback(entry, isSelected) {
      var newSelectedEntries = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state.selectedEntries);

      if (isSelected) {
        newSelectedEntries[entry.id] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, entry);
        this.setState({
          entrySelectedCounter: this.state.entrySelectedCounter + 1,
          selectedEntries: newSelectedEntries
        });
      } else {
        delete newSelectedEntries[entry.id];
        this.setState({
          entrySelectedCounter: this.state.entrySelectedCounter - 1,
          selectedEntries: newSelectedEntries
        });
      }
    }
  }, {
    key: "cancelSelection",
    value: function cancelSelection() {
      this.setState({
        entrySelectedCounter: 0,
        selectedEntries: {}
      });
    }
  }, {
    key: "assignTasks",
    value: function assignTasks() {
      var taskIDs = [];

      for (var taskID in this.state.selectedEntries) {
        taskIDs.push(taskID);
      }

      Object(_dbActions_setAssignedTasks__WEBPACK_IMPORTED_MODULE_11__["default"])(this.props, taskIDs, this.state.entrySelectedCounter, this.state.selectedEntries);
    }
  }, {
    key: "handleChangeForm",
    value: function handleChangeForm(event) {
      var fleldVal = event.target.value;
      this.setState({
        searchValue: fleldVal
      });
    }
  }, {
    key: "handleChangeDropDown",
    value: function handleChangeDropDown(event) {
      var fleldVal = event.target.value;

      switch (fleldVal) {
        case 'שם מלא':
          this.setState({
            searchField: 'firstName'
          });
          break;

        case 'תעודת זהות':
          this.setState({
            searchField: 'tz'
          });
          break;

        case 'כתובת מגורים':
          this.setState({
            searchField: 'region'
          });
          break;

        case 'מספר טלפון':
          this.setState({
            searchField: 'phone'
          });
          break;

        case 'דואר אלקטרוני':
          this.setState({
            searchField: 'email'
          });
          break;

        default:
          break;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.data.length == 0) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: "/static/nothing.png",
          width: "100",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          style: {
            fontSize: '20px',
            marginTop: '10px'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }, "\u05D4\u05DE\u05DE\u05DE... \u05D0\u05D9\u05DF \u05DB\u05D0\u05DF \u05DB\u05DC\u05D5\u05DD")));
      } else {
        var actionsBar = '';

        if (this.props.isSelectable && this.state.entrySelectedCounter > 0) {
          actionsBar = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Navbar"], {
            bg: "light",
            fixed: "bottom",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 147
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["ButtonGroup"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 148
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
            onClick: this.assignTasks,
            variant: "primary",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 149
            },
            __self: this
          }, "\u05E9\u05D9\u05D1\u05D5\u05E5 ", this.state.entrySelectedCounter, " \u05D0\u05D9\u05E1\u05D5\u05E4\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Button"], {
            onClick: this.cancelSelection,
            variant: "secondary",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 150
            },
            __self: this
          }, "\u05D1\u05D9\u05D8\u05D5\u05DC")));
        }

        if (this.props.isSearchable && this.props.page == 'adminUsers') {
          actionsBar = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Navbar"], {
            bg: "light",
            fixed: "bottom",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 158
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 159
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "btn-group",
            role: "group",
            "aria-label": "Basic example",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 160
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
            style: {
              whiteSpace: 'nowrap'
            },
            type: "button",
            className: "btn btn-primary",
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'ADD_USER',
                entries: _this2.props.entry
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 161
            },
            __self: this
          }, "\u05D4\u05D5\u05E1\u05E4\u05EA \u05DE\u05EA\u05E0\u05D3\u05D1"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
            style: {
              whiteSpace: 'nowrap'
            },
            type: "button",
            className: "btn btn-secondary",
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'ADD_USER_CSV',
                entries: _this2.props.entry
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 162
            },
            __self: this
          }, "\u05D4\u05D5\u05E1\u05E4\u05D4 \u05DE\u05E7\u05D5\u05D1\u05E5"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 164
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
            className: "mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 165
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
            as: "select",
            variant: "outline-secondary",
            title: "Dropdown",
            drop: "up",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 166
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 171
            },
            __self: this
          }, "\u05E9\u05DD \u05DE\u05DC\u05D0"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 172
            },
            __self: this
          }, "\u05EA\u05E2\u05D5\u05D3\u05EA \u05D6\u05D4\u05D5\u05EA"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            },
            __self: this
          }, "\u05DB\u05EA\u05D5\u05D1\u05EA \u05DE\u05D2\u05D5\u05E8\u05D9\u05DD"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 174
            },
            __self: this
          }, "\u05DE\u05E1\u05E4\u05E8 \u05D8\u05DC\u05E4\u05D5\u05DF"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 175
            },
            __self: this
          }, "\u05D3\u05D5\u05D0\u05E8 \u05D0\u05DC\u05E7\u05D8\u05E8\u05D5\u05E0\u05D9")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["FormControl"], {
            "aria-describedby": "basic-addon1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 177
            },
            __self: this
          }))))));
        }

        if (this.props.isSearchable && this.props.page == 'adminTasks') {
          actionsBar = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Navbar"], {
            bg: "light",
            fixed: "bottom",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 186
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 187
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Row"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 188
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 189
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
            className: "btn-group",
            role: "group",
            "aria-label": "Basic example",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 190
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
            style: {
              whiteSpace: 'nowrap'
            },
            type: "button",
            className: "btn btn-primary",
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'ADD_TASK',
                entries: _this2.props.entry
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 191
            },
            __self: this
          }, "\u05D4\u05D5\u05E1\u05E4\u05EA \u05D0\u05D9\u05E1\u05D5\u05E3"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
            style: {
              whiteSpace: 'nowrap'
            },
            type: "button",
            className: "btn btn-secondary",
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'ADD_TASK_CSV',
                entries: _this2.props.entry
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 192
            },
            __self: this
          }, "\u05D4\u05D5\u05E1\u05E4\u05D4 \u05DE\u05E7\u05D5\u05D1\u05E5"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("button", {
            style: {
              whiteSpace: 'nowrap'
            },
            type: "button",
            className: "btn btn-secondary",
            onClick: function onClick() {
              return _this2.props.dispatch({
                type: 'OPEN_MODAL',
                msg: 'EXPORT_TASK_CSV',
                entries: _this2.props.entry
              });
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 193
            },
            __self: this
          }, "\u05D9\u05D9\u05E6\u05D5\u05D0 \u05D3\u05D5\u05D7"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Col"], {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 196
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["InputGroup"], {
            className: "mb-3",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 197
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Form"].Control, {
            as: "select",
            variant: "outline-secondary",
            title: "Dropdown",
            drop: "up",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 198
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 203
            },
            __self: this
          }, "\u05E1\u05E4\u05E7"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 204
            },
            __self: this
          }, "\u05DB\u05EA\u05D5\u05D1\u05EA"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 205
            },
            __self: this
          }, "\u05D0\u05D9\u05E9 \u05E7\u05E9\u05E8"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("option", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 206
            },
            __self: this
          }, "\u05D8\u05DC\u05E4\u05D5\u05DF")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["FormControl"], {
            "aria-describedby": "basic-addon1",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 208
            },
            __self: this
          }))))));
        }

        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "table-responsive",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 217
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_bootstrap__WEBPACK_IMPORTED_MODULE_10__["Table"], {
          hover: true,
          responsive: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 218
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("thead", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 219
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tr", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 220
          },
          __self: this
        }, this.state.tableColumns.map(function (column) {
          switch (column) {
            default:
              return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("th", {
                scope: "col",
                key: column,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 225
                },
                __self: this
              }, _this2.state.columnNames[column]);
          }
        }))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("tbody", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231
          },
          __self: this
        }, this.props.data.map(function (entry) {
          var isSelected = false;
          var ret = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Entry__WEBPACK_IMPORTED_MODULE_8__["default"], {
            page: _this2.props.page,
            isSelected: isSelected,
            isSelectable: _this2.props.isSelectable,
            type: _this2.props.type,
            key: entry.id,
            selectCallback: _this2.selectCallback,
            entry: entry,
            tableColumns: _this2.state.tableColumns,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 234
            },
            __self: this
          });
          if (_this2.state.selectedEntries[entry.id]) isSelected = true;

          if (_this2.props.isSearchable) {
            for (var key in entry) {
              if (key == _this2.state.searchField) if (entry[key].startsWith(_this2.state.searchValue)) return ret;
            }
          } else return ret;
        }))), actionsBar);
      }
    }
  }]);

  return TableBlock;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(function (state) {
  return state;
})(TableBlock));

/***/ })

})
//# sourceMappingURL=index.js.06ef1043bceea7dbf498.hot-update.js.map