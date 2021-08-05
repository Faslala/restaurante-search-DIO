"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dialog = exports.Overlay = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  max-height: calc(100% - 144px);\n  width: 500px;\n  padding: 24px;\n\n  background-color: #ffffff;\n\n  box-shadow: 0px 0px 32px rgba(78, 89, 131, 0.2);\n  border-radius: 8px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n\n  background: rgba(78, 89, 131, 0.5);  \n  backdrop-filter: blur(5px);\n\n  z-index: 999;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Overlay = _styledComponents.default.div(_templateObject());

exports.Overlay = Overlay;
Overlay.displayName = 'Overlay';

var Dialog = _styledComponents.default.div(_templateObject2());

exports.Dialog = Dialog;
Dialog.displayName = 'Dialog';