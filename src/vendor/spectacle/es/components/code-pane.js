function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getStyles } from '../utils/base';
import styled from 'react-emotion'; // import '../utils/prism-import';

import { Editor } from 'react-live';
var StyledWrapper =
/*#__PURE__*/
styled("div", {
  target: "e11ic5hg0"
})(function (props) {
  return props.styles;
});
var StyledEditor =
/*#__PURE__*/
styled(function (_ref) {
  var _ = _ref.syntaxStyles,
      __ = _ref.prismTheme,
      rest = _objectWithoutProperties(_ref, ["syntaxStyles", "prismTheme"]);

  return React.createElement(Editor, rest);
}, {
  target: "e11ic5hg1"
})("&&{", function (props) {
  return props.syntaxStyles;
}, "\n\n    &.builtin-prism-theme{", function (props) {
  return props.prismTheme;
}, "}}");

var CodePane =
/*#__PURE__*/
function (_Component) {
  function CodePane() {
    _classCallCheck(this, CodePane);

    return _possibleConstructorReturn(this, _getPrototypeOf(CodePane).apply(this, arguments));
  }

  _createClass(CodePane, [{
    key: "handleEditorEvent",
    value: function handleEditorEvent(evt) {
      evt.stopPropagation();
    }
  }, {
    key: "render",
    value: function render() {
      var useDarkTheme = this.props.theme === 'dark';
      var externalPrismTheme = this.props.theme === 'external';
      var className = "language-".concat(this.props.lang, " ").concat(externalPrismTheme ? '' : 'builtin-prism-theme', " ").concat(this.props.className);
      var wrapperStyles = [this.context.styles.components.codePane, getStyles.call(this), this.props.style];
      return React.createElement(StyledWrapper, {
        className: this.props.className,
        styles: wrapperStyles
      }, React.createElement(StyledEditor, {
        className: className,
        code: this.props.source,
        language: this.props.lang,
        contentEditable: this.props.contentEditable,
        syntaxStyles: this.context.styles.components.syntax,
        prismTheme: this.context.styles.prism[useDarkTheme ? 'dark' : 'light'],
        onKeyDown: this.handleEditorEvent,
        onKeyUp: this.handleEditorEvent,
        onClick: this.handleEditorEvent
      }));
    }
  }]);

  _inherits(CodePane, _Component);

  return CodePane;
}(Component);

export { CodePane as default };
CodePane.contextTypes = {
  styles: PropTypes.object,
  store: PropTypes.object
};
CodePane.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  contentEditable: PropTypes.bool,
  lang: PropTypes.string,
  source: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.oneOf(['dark', 'light', 'external'])
};
CodePane.defaultProps = {
  className: '',
  contentEditable: false,
  lang: 'markup',
  source: '',
  theme: 'dark'
};