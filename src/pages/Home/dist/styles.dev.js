"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Wrapper = exports.Carousel = exports.Title = exports.Logo = exports.Search = exports.Container = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _components = require("../../components");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  .slick-slide {\n    margin-right: 16px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-family: ", ";\n  color: ", ";\n  font-size: 24px;\n  font-weight: bold;\n  line-height: 29px;\n  margin: 16px 0;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin: 15px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  background-color: #ffffff;\n  padding: 16px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background-color: ", ";\n  width: 360px;\n  height: 100vh;\n  overflow-y: scroll;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents.default.aside(_templateObject(), function (_ref) {
  var colors = _ref.theme.colors;
  return colors.background;
});

exports.Container = Container;

var Search = _styledComponents.default.section(_templateObject2());

exports.Search = Search;

var Logo = _styledComponents.default.img(_templateObject3());

exports.Logo = Logo;
var Title = (0, _styledComponents.default)(_components.Text)(_templateObject4(), function (props) {
  return props.theme.fonts.regular;
}, function (props) {
  return props.theme.color.text;
});
exports.Title = Title;
var Carousel = (0, _styledComponents.default)(_reactSlick.default)(_templateObject5());
exports.Carousel = Carousel;

var Wrapper = _styledComponents.default.div(_templateObject6());

exports.Wrapper = Wrapper;