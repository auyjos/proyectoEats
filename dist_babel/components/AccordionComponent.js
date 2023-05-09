"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Accordion = _interopRequireDefault(require("react-bootstrap/Accordion"));
require("./AccordionComponent.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function AccordionComponent(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Accordion["default"], {
    defaultActiveKey: "0",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Accordion["default"].Item, {
      eventKey: "0",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Accordion["default"].Header, {
        children: props.Name
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Accordion["default"].Body, {
        children: props.children
      })]
    })
  });
}
var _default = AccordionComponent;
exports["default"] = _default;