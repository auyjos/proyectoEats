"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _Container = _interopRequireDefault(require("react-bootstrap/Container"));
var _Nav = _interopRequireDefault(require("react-bootstrap/Nav"));
var _Navbar = _interopRequireDefault(require("react-bootstrap/Navbar"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function NavbarComponent() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_Navbar["default"], {
    bg: "dark",
    variant: "dark"
  }, /*#__PURE__*/React.createElement(_Container["default"], null, /*#__PURE__*/React.createElement(_Navbar["default"].Brand, {
    href: "#home"
  }, "Navbar"), /*#__PURE__*/React.createElement(_Nav["default"], {
    className: "me-auto"
  }, /*#__PURE__*/React.createElement(_Nav["default"].Link, {
    href: "#home"
  }, "Home"), /*#__PURE__*/React.createElement(_Nav["default"].Link, {
    href: "#features"
  }, "Features"), /*#__PURE__*/React.createElement(_Nav["default"].Link, {
    href: "#pricing"
  }, "Pricing")))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_Navbar["default"], {
    bg: "primary",
    variant: "dark"
  }, /*#__PURE__*/React.createElement(_Container["default"], null, /*#__PURE__*/React.createElement(_Navbar["default"].Brand, {
    href: "#home"
  }, "Navbar"), /*#__PURE__*/React.createElement(_Nav["default"], {
    className: "me-auto"
  }, /*#__PURE__*/React.createElement(_Nav["default"].Link, {
    href: "#home"
  }, "Home"), /*#__PURE__*/React.createElement(_Nav["default"].Link, {
    href: "#features"
  }, "Features"), /*#__PURE__*/React.createElement(_Nav["default"].Link, {
    href: "#pricing"
  }, "Pricing")))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement(_Navbar["default"], {
    bg: "light",
    variant: "light"
  }, /*#__PURE__*/React.createElement(_Container["default"], null, /*#__PURE__*/React.createElement(_Navbar["default"].Brand, {
    href: "#home"
  }, "Navbar"), /*#__PURE__*/React.createElement(_Nav["default"], {
    className: "me-auto"
  }, /*#__PURE__*/React.createElement(_Nav["default"].Link, {
    href: "#home"
  }, "Home"), /*#__PURE__*/React.createElement(_Nav["default"].Link, {
    href: "#features"
  }, "Features"), /*#__PURE__*/React.createElement(_Nav["default"].Link, {
    href: "#pricing"
  }, "Pricing")))));
}
var _default = NavbarComponent;
exports["default"] = _default;