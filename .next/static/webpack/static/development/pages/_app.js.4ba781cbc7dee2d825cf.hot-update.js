webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next-redux-wrapper */ "./node_modules/next-redux-wrapper/es6/index.js");
/* harmony import */ var _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../config/firebaseConfig */ "./config/firebaseConfig.js");
/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Header.js */ "./components/Header.js");
/* harmony import */ var _components_ModalBlock_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/ModalBlock.js */ "./components/ModalBlock.js");









var _jsxFileName = "C:\\Users\\baram\\Git\\leket-go\\pages\\_app.js";









var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'GETTASKSLIST':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state, {
        tasks: [action.taskList]
      });
      break;

    case 'LOGIN':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state, {
        isLoggedIn: true,
        loginErr: false,
        userData: {
          id: action.user.uid
        }
      });

    case 'LOGIN_ERR':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state, {
        isLoggedIn: false,
        loginErr: action.msg
      });

    case 'LOGOUT':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state, {
        isLoggedIn: false,
        firebaseData: false
      });

    case 'OPEN_MODAL':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state, {
        modal: {
          isOpen: true,
          msg: action.msg,
          entries: action.entries
        }
      });

    case 'CLOSE_MODAL':
      return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state, {
        modal: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state.modal, {
          isOpen: false
        })
      });

    default:
      return state;
  }
};

var initialState = {
  loginErr: false,
  isLoggedIn: _config_firebaseConfig__WEBPACK_IMPORTED_MODULE_14__["default"].auth().isLoggedIn ? true : false,
  userData: {
    isManager: true,
    id: '0eIEtquyi0a2bnrZScfk3lq3sqE3',
    firstName: 'בר',
    lastName: 'עמיר',
    street: 'ראובן ובת שבע 7',
    city: 'ראשון לציון',
    region: 'ראשון לציון',
    email: 'baramir@mail.tau.ac.il',
    phone: '0523668566',
    tz: '204712863'
  },
  modal: {
    isOpen: false
  },
  unassignedTasks: [{
    id: '7-26.05.19',
    city: "רעננה",
    contactName: "אושרית",
    contactNumber: "0545-213168",
    date: "26.05.19",
    day: "ג'",
    geolocation: "32.196537, 34.880737",
    name: "זקס בייקרי רעננה",
    notes: "נא לא לאחר",
    region: "שרון",
    reportFilled: "FALSE",
    taskId: "7",
    time: "21:20",
    volunteerUid: null
  }, {
    id: '7-26.05.195436',
    city: "רננות",
    contactName: "אושרית",
    contactNumber: "0545-213168",
    date: "26.05.19",
    day: "ג'",
    geolocation: "32.196537, 34.880737",
    name: "זקס בייקרי רעננה",
    notes: "נא לא לאחר",
    region: "שרון",
    reportFilled: "FALSE",
    taskId: "7",
    time: "21:20",
    volunteerUid: null
  }, {
    id: '7-26.05.199990',
    city: "בננה",
    contactName: "אושרית",
    contactNumber: "0545-213168",
    date: "26.05.19",
    day: "ג'",
    geolocation: "32.196537, 34.880737",
    name: "זקס בייקרי רעננה",
    notes: "נא לא לאחר",
    region: "שרון",
    reportFilled: "FALSE",
    taskId: "7",
    time: "21:20",
    volunteerUid: null
  }],
  assignedTasks: [{
    id: '7-26.05.19',
    city: "ראשון לציון",
    contactName: "אושרית",
    contactNumber: "0545-213168",
    date: "26.05.19",
    day: "ג'",
    geolocation: "32.196537, 34.880737",
    name: "זקס בייקרי רעננה",
    notes: "נא לא לאחר",
    region: "שרון",
    reportFilled: "FALSE",
    taskId: "7",
    time: "21:20",
    volunteerUid: "0eIEtquyi0a2bnrZScfk3lq3sqE3"
  }],
  taskReports: [{
    id: '7-26.05.19',
    city: "מודיעין",
    contactName: "אושרית",
    contactNumber: "0545-213168",
    date: "26.05.19",
    day: "ג'",
    geolocation: "32.196537, 34.880737",
    name: "זקס בייקרי רעננה",
    notes: "נא לא לאחר",
    region: "שרון",
    reportFilled: "FALSE",
    taskId: "7",
    time: "21:20",
    volunteerUid: "0eIEtquyi0a2bnrZScfk3lq3sqE3"
  }],
  users: [{
    id: '0eIEtquyi0a2bnrZScfk3lq3sqE3',
    isManager: true,
    firstName: 'בר',
    lastName: 'עמיר',
    region: 'ראשון לציון',
    email: 'baramir@mail.tau.ac.il',
    tz: '204712863',
    street: 'ראובן ובת שבע 7',
    city: 'ראשון לציון',
    phone: '0523668566'
  }, {
    id: 'hBlwG5ccrLgmWsLqOyAyztQYsun1',
    isManager: true,
    firstName: 'מתן',
    lastName: "\u05D5\u05D9\u05DC\u05E6'\u05D9\u05E7",
    region: 'שרון',
    email: 'matanwilchek@gmail.com',
    tz: '204712863',
    street: 'ראובן ובת שבע 7',
    city: 'ראשון לציון',
    phone: '0523668566'
  }],
  regionalTasks: [{
    id: '7-26.05.19',
    city: "רעננה",
    contactName: "אושרית",
    contactNumber: "0545-213168",
    date: "26.05.19",
    day: "ג'",
    geolocation: "32.196537, 34.880737",
    name: "זקס בייקרי רעננה",
    notes: "נא לא לאחר",
    region: "שרון",
    reportFilled: "FALSE",
    taskId: "7",
    time: "21:20",
    volunteerUid: "0eIEtquyi0a2bnrZScfk3lq3sqE3"
  }, {
    id: '7-26.05.195436',
    city: "רעננה",
    contactName: "אושרית",
    contactNumber: "0545-213168",
    date: "26.05.19",
    day: "ג'",
    geolocation: "32.196537, 34.880737",
    name: "זקס בייקרי רעננה",
    notes: "נא לא לאחר",
    region: "שרון",
    reportFilled: "FALSE",
    taskId: "7",
    time: "21:20",
    volunteerUid: "0eIEtquyi0a2bnrZScfk3lq3sqE3"
  }, {
    id: '7-26.05.199990',
    city: "רעננה",
    contactName: "אושרית",
    contactNumber: "0545-213168",
    date: "26.05.19",
    day: "ג'",
    geolocation: "32.196537, 34.880737",
    name: "זקס בייקרי רעננה",
    notes: "נא לא לאחר",
    region: "שרון",
    reportFilled: "FALSE",
    taskId: "7",
    time: "21:20",
    volunteerUid: "0eIEtquyi0a2bnrZScfk3lq3sqE3"
  }]
};

var makeStore = function makeStore(initialState, options) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_10__["createStore"])(reducer, initialState);
};

firebase.auth().onAuthStateChanged(function (user) {
  if (user) {} else {}
});

var MyApp =
/*#__PURE__*/
function (_App) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(MyApp, _App);

  function MyApp() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, MyApp);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(MyApp).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(MyApp, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          store = _this$props.store;
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_12__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_11__["Provider"], {
        store: store,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Header_js__WEBPACK_IMPORTED_MODULE_15__["default"], {
        isHidden: isHidden,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_ModalBlock_js__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__["default"])({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245
        },
        __self: this
      }))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
        var Component, ctx, pageProps;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                Component = _ref.Component, ctx = _ref.ctx;

                if (!Component.getInitialProps) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return Component.getInitialProps(ctx);

              case 4:
                _context.t0 = _context.sent;
                _context.next = 8;
                break;

              case 7:
                _context.t0 = {};

              case 8:
                pageProps = _context.t0;
                return _context.abrupt("return", {
                  pageProps: pageProps
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return MyApp;
}(next_app__WEBPACK_IMPORTED_MODULE_12___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_13__["default"])(makeStore)(MyApp));

/***/ })

})
//# sourceMappingURL=_app.js.4ba781cbc7dee2d825cf.hot-update.js.map