"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Button = _interopRequireDefault(require("react-bootstrap/Button"));
var _Card = _interopRequireDefault(require("react-bootstrap/Card"));
var _Badge = _interopRequireDefault(require("react-bootstrap/Badge"));
require("./CardComponent.scss");
var _Image = _interopRequireDefault(require("react-bootstrap/Image"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function CardComponent(props) {
  console.log(props);
  var card = props.card;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card["default"], {
    className: "bg-dark text-white",
    children: [card.img && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Card["default"].Img, {
      src: card.img
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card["default"].ImgOverlay, {
      className: "img-overlay",
      children: [card.tituloBadge && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge["default"], {
        pill: true,
        bg: "success",
        children: card.tituloBadge
      }), card.tituloboton && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Image["default"], {
        className: "imagen-corazon",
        src: card.tituloboton
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Card["default"].Body, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("h4", {
        children: [card.body, " ", /*#__PURE__*/(0, _jsxRuntime.jsxs)("small", {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Badge["default"], {
            pill: true,
            bg: "secondary",
            children: card.rating
          }), " "]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        children: [card.desc, " ", card.costo, " ", card.tiempo]
      })]
    })]
  });
}
var _default = CardComponent;
exports["default"] = _default;