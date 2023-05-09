"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Button = _interopRequireDefault(require("react-bootstrap/Button"));
var _Card = _interopRequireDefault(require("react-bootstrap/Card"));
var _Container = _interopRequireDefault(require("react-bootstrap/Container"));
var _Row = _interopRequireDefault(require("react-bootstrap/Row"));
var _Col = _interopRequireDefault(require("react-bootstrap/Col"));
var _Badge = _interopRequireDefault(require("react-bootstrap/Badge"));
require("./CardOfertasComponent.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function CardOfertas(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card["default"], {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card["default"].Body, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Row["default"], {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Col["default"], {
          xs: 7,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Card["default"].Text, {
            children: props.children
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge["default"], {
            pill: true,
            bg: "light",
            text: "dark",
            children: "Dale click aqu\xED \u2192"
          }), " "]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Col["default"], {
          xs: 5,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card["default"].Img, {
            variant: "top",
            src: props.img
          })
        })]
      })
    })
  });
}
var _default = CardOfertas;
exports["default"] = _default;