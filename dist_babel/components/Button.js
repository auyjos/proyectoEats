"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ToggleButtonComponent;
var _react = _interopRequireWildcard(require("react"));
var _ButtonGroup = _interopRequireDefault(require("react-bootstrap/ButtonGroup"));
var _ToggleButton = _interopRequireDefault(require("react-bootstrap/ToggleButton"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ToggleButtonComponent() {
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    checked = _useState2[0],
    setChecked = _useState2[1];
  var _useState3 = (0, _react.useState)("1"),
    _useState4 = _slicedToArray(_useState3, 2),
    radioValue = _useState4[0],
    setRadioValue = _useState4[1];
  var radios = [{
    name: "Active",
    value: "1"
  }, {
    name: "Radio",
    value: "2"
  }, {
    name: "Radio",
    value: "3"
  }];
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_jsxRuntime.Fragment, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonGroup["default"], {
      className: "mb-2",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ToggleButton["default"], {
        id: "toggle-check",
        type: "checkbox",
        variant: "secondary",
        checked: checked,
        value: "1",
        onChange: function onChange(e) {
          return setChecked(e.currentTarget.checked);
        },
        children: "Checked"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonGroup["default"], {
      className: "mb-2",
      children: radios.map(function (radio, idx) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ToggleButton["default"], {
          id: "radio-".concat(idx),
          type: "radio",
          variant: "secondary",
          name: "radio",
          value: radio.value,
          checked: radioValue === radio.value,
          onChange: function onChange(e) {
            return setRadioValue(e.currentTarget.value);
          },
          children: radio.name
        }, idx);
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ToggleButton["default"], {
      className: "mb-2",
      id: "toggle-check",
      type: "checkbox",
      variant: "outline-primary",
      checked: checked,
      value: "1",
      onChange: function onChange(e) {
        return setChecked(e.currentTarget.checked);
      },
      children: "Checked"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("br", {}), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonGroup["default"], {
      children: radios.map(function (radio, idx) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_ToggleButton["default"], {
          id: "radio-".concat(idx),
          type: "radio",
          variant: idx % 2 ? "outline-success" : "outline-danger",
          name: "radio",
          value: radio.value,
          checked: radioValue === radio.value,
          onChange: function onChange(e) {
            return setRadioValue(e.currentTarget.value);
          },
          children: radio.name
        }, idx);
      })
    })]
  });
}
render( /*#__PURE__*/(0, _jsxRuntime.jsx)(ToggleButtonComponent, {}));