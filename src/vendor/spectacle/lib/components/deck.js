"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactRedux = require("react-redux");

var _store = _interopRequireDefault(require("../store"));

var _controller = _interopRequireDefault(require("../utils/controller"));

var _manager = _interopRequireDefault(require("./manager"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var store = (0, _store.default)();

var Deck =
/*#__PURE__*/
function (_Component) {
  function Deck() {
    _classCallCheck(this, Deck);

    return _possibleConstructorReturn(this, _getPrototypeOf(Deck).apply(this, arguments));
  }

  _createClass(Deck, [{
    key: "render",
    value: function render() {
      return _react.default.createElement(_reactRedux.Provider, {
        store: store
      }, _react.default.createElement(_controller.default, {
        theme: this.props.theme,
        store: store,
        history: this.props.history
      }, _react.default.createElement(_manager.default, this.props, this.props.children)));
    }
  }]);

  _inherits(Deck, _Component);

  return Deck;
}(_react.Component);

exports.default = Deck;

_defineProperty(_defineProperty(Deck, "displayName", 'Deck'), "propTypes", {
  autoplay: _propTypes.default.bool,
  autoplayDuration: _propTypes.default.number,
  children: _propTypes.default.node,
  controls: _propTypes.default.bool,
  globalStyles: _propTypes.default.bool,
  history: _propTypes.default.object,
  progress: _propTypes.default.oneOf(['pacman', 'bar', 'number', 'none']),
  theme: _propTypes.default.object,
  transition: _propTypes.default.array,
  transitionDuration: _propTypes.default.number
});