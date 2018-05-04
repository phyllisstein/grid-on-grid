function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import FullscreenButton from './fullscreen-button';
import { requestFullscreen, exitFullscreen, getFullscreenElement } from '../utils/fullscreen';
var StyledFullscreen =
/*#__PURE__*/
styled(FullscreenButton, {
  target: "etd0kjj0"
})("position:absolute;bottom:10px;right:20px;opacity:0;transition:300ms opacity ease;font-size:30px;color:#fff;&:hover{opacity:1;}");
export var Fullscreen =
/*#__PURE__*/
function (_Component) {
  function Fullscreen() {
    _classCallCheck(this, Fullscreen);

    return _possibleConstructorReturn(this, _getPrototypeOf(Fullscreen).apply(this, arguments));
  }

  _createClass(Fullscreen, [{
    key: "toggleFullscreen",
    value: function toggleFullscreen() {
      if (!getFullscreenElement()) {
        requestFullscreen(document.documentElement);
      } else {
        exitFullscreen();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      return React.createElement(StyledFullscreen, {
        onClick: function onClick() {
          return _this.toggleFullscreen();
        },
        style: this.context.styles.fullscreen,
        viewBox: "0 0 512 512"
      });
    }
  }]);

  _inherits(Fullscreen, _Component);

  return Fullscreen;
}(Component);
Fullscreen.contextTypes = {
  styles: PropTypes.object
};
export default Fullscreen;