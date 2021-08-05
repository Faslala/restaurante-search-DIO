"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRedux = require("react-redux");

var _styledComponents = require("styled-components");

var _styledReset = require("styled-reset");

var _Home = _interopRequireDefault(require("./pages/Home"));

var _theme = _interopRequireDefault(require("./theme"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function App() {
  return (
    /*#__PURE__*/
    _react.default.createElement(_reactRedux.Provider, {
      store: _Home.default
    },
    /*#__PURE__*/
    _react.default.createElement(_styledComponents.ThemeProvider, {
      theme: _theme.default
    },
    /*#__PURE__*/
    _react.default.createElement(_styledReset.Reset, null),
    /*#__PURE__*/
    _react.default.createElement(_Home.default, null)))
  );
}

var _default = App;
exports.default = _default;