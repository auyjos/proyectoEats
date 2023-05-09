"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _jsxRuntime = require("react/jsx-runtime");
var SearchBar = function SearchBar(_ref) {
  var keyword = _ref.keyword,
    _onChange = _ref.onChange;
  var BarStyle = {
    width: "20rem",
    background: "#F0F0F0",
    border: "none",
    padding: "0.5rem"
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
    style: BarStyle,
    value: keyword,
    placeholder: "Comida, productos del supermercado, bebidas,etc",
    onChange: function onChange(e) {
      return _onChange(e.target.value);
    }
  }, "search-bar");
};
var _default = SearchBar;
exports["default"] = _default;