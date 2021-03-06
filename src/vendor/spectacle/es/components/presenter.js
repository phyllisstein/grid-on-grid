function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import { getSlideByIndex } from '../utils/slides';
import { HeaderContainer, EndHeader, PresenterContent, SlideInfo, ContentContainer, PreviewPane, PreviewCurrentSlide, PreviewNextSlide, Notes } from './presenter-components';
import Time from './time';

var Presenter =
/*#__PURE__*/
function (_Component) {
  function Presenter() {
    var _getPrototypeOf2;

    var _temp, _this;

    _classCallCheck(this, Presenter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Presenter)).call.apply(_getPrototypeOf2, [this].concat(args))), _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      notes: {}
    }), _temp));
  }

  _createClass(Presenter, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        updateNotes: this.updateNotes.bind(this)
      };
    }
  }, {
    key: "getCurrentSlide",
    value: function getCurrentSlide() {
      return this.context.store.getState().route.slide;
    }
  }, {
    key: "updateNotes",
    value: function updateNotes(newNotes) {
      var slide = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      var notes = _objectSpread({}, this.state.notes);

      notes[slide || this.getCurrentSlide()] = newNotes;
      this.setState({
        notes: notes
      });
    }
  }, {
    key: "_getSlideByIndex",
    value: function _getSlideByIndex(index) {
      return getSlideByIndex(Children.toArray(this.props.slides), this.props.slideReference, index);
    }
  }, {
    key: "_renderMainSlide",
    value: function _renderMainSlide() {
      var _this$props = this.props,
          slideIndex = _this$props.slideIndex,
          hash = _this$props.hash,
          lastSlideIndex = _this$props.lastSlideIndex;

      var child = this._getSlideByIndex(slideIndex);

      var presenterStyle = {
        position: 'relative'
      };
      return cloneElement(child, {
        dispatch: this.props.dispatch,
        key: slideIndex,
        hash: hash,
        export: this.props.route.params.indexOf('export') !== -1,
        print: this.props.route.params.indexOf('print') !== -1,
        slideIndex: slideIndex,
        lastSlideIndex: lastSlideIndex,
        transition: [],
        transitionIn: [],
        transitionOut: [],
        transitionDuration: 0,
        presenter: true,
        presenterStyle: presenterStyle
      });
    }
  }, {
    key: "_renderNextSlide",
    value: function _renderNextSlide() {
      var _this$props2 = this.props,
          slideIndex = _this$props2.slideIndex,
          lastSlideIndex = _this$props2.lastSlideIndex;
      var presenterStyle = {
        position: 'relative'
      };

      var child = this._getSlideByIndex(slideIndex + 1);

      return child ? cloneElement(child, {
        dispatch: this.props.dispatch,
        export: this.props.route.params.indexOf('export') !== -1,
        print: this.props.route.params.indexOf('print') !== -1,
        key: slideIndex + 1,
        hash: child.props.id || slideIndex + 1,
        slideIndex: slideIndex + 1,
        lastSlideIndex: lastSlideIndex,
        transition: [],
        transitionIn: [],
        transitionOut: [],
        transitionDuration: 0,
        presenterStyle: presenterStyle,
        presenter: true,
        appearOff: true
      }) : React.createElement(EndHeader, null, "END");
    }
  }, {
    key: "_renderNotes",
    value: function _renderNotes() {
      var notes;
      var currentSlide = this.getCurrentSlide();

      if (this.state.notes[currentSlide]) {
        notes = this.state.notes[currentSlide];
      } else {
        var child = this._getSlideByIndex(this.props.slideIndex);

        notes = child.props.notes;
      }

      if (!notes) {
        return false;
      }

      if (typeof notes === 'string') {
        return React.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: notes
          }
        });
      }

      return React.createElement("div", null, notes);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(PresenterContent, null, React.createElement(HeaderContainer, null, React.createElement(SlideInfo, null, "Slide ", this.props.slideIndex + 1, " of", ' ', this.props.slideReference.length), React.createElement(Time, {
        timer: this.props.timer
      })), React.createElement(ContentContainer, null, React.createElement(PreviewPane, null, React.createElement(PreviewCurrentSlide, {
        className: "spectacle-presenter-main"
      }, this._renderMainSlide()), React.createElement(PreviewNextSlide, null, this._renderNextSlide())), React.createElement(Notes, null, this._renderNotes())));
    }
  }]);

  _inherits(Presenter, _Component);

  return Presenter;
}(Component);

_defineProperty(Presenter, "childContextTypes", {
  updateNotes: PropTypes.func
});

export { Presenter as default };
Presenter.propTypes = {
  dispatch: PropTypes.func,
  hash: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lastSlideIndex: PropTypes.number,
  route: PropTypes.object,
  slideIndex: PropTypes.number,
  slideReference: PropTypes.array,
  slides: PropTypes.array,
  timer: PropTypes.bool
};
Presenter.contextTypes = {
  styles: PropTypes.object,
  store: PropTypes.object.isRequired
};