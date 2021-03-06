function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

import React, { cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import { getSlideByIndex } from '../utils/slides';
import styled from 'react-emotion';
var StyledExport =
/*#__PURE__*/
styled("div", {
  target: "e1i58j6t0"
})("height:100%;width:100%;");

var Export =
/*#__PURE__*/
function (_Component) {
  function Export() {
    _classCallCheck(this, Export);

    return _possibleConstructorReturn(this, _getPrototypeOf(Export).apply(this, arguments));
  }

  _createClass(Export, [{
    key: "_renderSlides",
    value: function _renderSlides() {
      var _this = this;

      return this.props.slideReference.map(function (reference, index) {
        var slide = getSlideByIndex(_this.props.slides, _this.props.slideReference, index);
        return cloneElement(slide, {
          key: index,
          slideIndex: index,
          export: _this.props.route.params.indexOf('export') !== -1,
          print: _this.props.route.params.indexOf('print') !== -1,
          transition: [],
          transitionIn: [],
          transitionOut: [],
          transitionDuration: 0
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(StyledExport, null, this._renderSlides());
    }
  }]);

  _inherits(Export, _Component);

  return Export;
}(Component);

export { Export as default };
Export.propTypes = {
  route: PropTypes.object,
  slideReference: PropTypes.array,
  slides: PropTypes.array
};
Export.contextTypes = {
  styles: PropTypes.object
};