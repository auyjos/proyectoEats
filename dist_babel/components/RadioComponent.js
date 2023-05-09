"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Form = _interopRequireDefault(require("react-bootstrap/Form"));
require("./RadioComponent.scss");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function RadioComponent() {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Form["default"], {
    children: ["radio"].map(function (type) {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "mb-3",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Form["default"].Check, {
          type: type,
          id: "elegir",
          label: "Elegido para ti (predeterminado)"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Form["default"].Check, {
          type: type,
          id: "popular",
          label: "M\xE1s popular"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Form["default"].Check, {
          type: type,
          id: "calificacion",
          label: "Calificaci\xF3n"
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Form["default"].Check, {
          type: type,
          id: "entrega",
          label: "Tiempo de entrega"
        })]
      }, "default-".concat(type));
    })
  });
}
var _default = RadioComponent;
exports["default"] = _default;