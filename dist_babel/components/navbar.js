"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Container = _interopRequireDefault(require("react-bootstrap/Container"));
var _Nav = _interopRequireDefault(require("react-bootstrap/Nav"));
var _Navbar = _interopRequireDefault(require("react-bootstrap/Navbar"));
var _Image = _interopRequireDefault(require("react-bootstrap/Image"));
var _Form = _interopRequireDefault(require("react-bootstrap/Form"));
var _Button = _interopRequireDefault(require("react-bootstrap/Button"));
var _reactBurgerMenu = require("react-burger-menu");
require("./navbar.scss");
var _NavDropdown = _interopRequireDefault(require("react-bootstrap/NavDropdown"));
var _HamburguerMenu = _interopRequireDefault(require("./HamburguerMenu"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function NavbarComponent(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Navbar["default"], {
      bg: "light",
      variant: "light",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container["default"], {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Nav["default"].Link, {}), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Navbar["default"].Brand, {
          href: "#home",
          children: [" ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Image["default"], {
            className: "icono-imagen",
            src: "https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/97c43f8974e6c876.svg",
            fluid: true
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Nav["default"], {
          className: "me-auto",
          children: props.children
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Form["default"], {
          className: "d-flex"
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {})]
  });
}
var _default = NavbarComponent;
exports["default"] = _default;