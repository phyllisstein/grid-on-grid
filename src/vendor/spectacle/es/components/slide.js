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

/* eslint-disable no-invalid-this, max-statements */
import React from 'react';
import PropTypes from 'prop-types';
import isUndefined from 'lodash/isUndefined';
import isFunction from 'lodash/isFunction';
import { getStyles } from '../utils/base';
import { addFragment } from '../actions';
import stepCounter from '../utils/step-counter';
import { SlideContainer, SlideContent, SlideContentWrapper } from './slide-components';
import { VictoryAnimation } from 'victory-core';
import findIndex from 'lodash/findIndex';

var Slide =
/*#__PURE__*/
function (_React$PureComponent) {
  function Slide() {
    var _this;

    _classCallCheck(this, Slide);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Slide).apply(this, arguments));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      contentScale: 1,
      reverse: false,
      transitioning: true,
      z: 1,
      zoom: 1
    });

    _this.routerCallback = _this.routerCallback.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.setZoom = _this.setZoom.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.transitionDirection = _this.transitionDirection.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getTransitionKeys = _this.getTransitionKeys.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getTransitionStyles = _this.getTransitionStyles.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.getRouteSlideIndex = _this.getRouteSlideIndex.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.stepCounter = stepCounter();
    return _this;
  }

  _createClass(Slide, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        stepCounter: {
          setFragments: this.stepCounter.setFragments
        },
        slideHash: this.props.hash
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.setZoom();
      var slide = this.slideRef;
      var frags = slide.querySelectorAll('.fragment');
      var currentOrder = 0;

      if (frags && frags.length && !this.context.overview) {
        Array.prototype.slice.call(frags, 0).sort(function (lhs, rhs) {
          return parseInt(lhs.dataset.order, 10) - parseInt(rhs.dataset.order, 10);
        }).forEach(function (frag) {
          frag.dataset.fid = currentOrder;

          if (_this2.props.dispatch) {
            _this2.props.dispatch(addFragment({
              className: frag.className || '',
              slide: _this2.props.hash,
              id: "".concat(_this2.props.slideIndex, "-").concat(currentOrder),
              animations: Array.from({
                length: frag.dataset.animCount
              }).fill(_this2.props.lastSlideIndex > _this2.props.slideIndex)
            }));
          }

          currentOrder += 1;
        });
      }

      window.addEventListener('load', this.setZoom);
      window.addEventListener('resize', this.setZoom);

      if (isFunction(this.props.onActive)) {
        this.props.onActive(this.props.slideIndex);
      }

      if (this.props.getAppearStep) {
        /* eslint-disable no-console */
        console.warn('getAppearStep has been deprecated, use getAnimStep instead');
        /* eslint-enable */
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var _this$stepCounter$get = this.stepCounter.getSteps(),
          steps = _this$stepCounter$get.steps,
          slideIndex = _this$stepCounter$get.slideIndex;

      var stepFunc = this.props.getAnimStep || this.props.getAppearStep;

      if (stepFunc) {
        if (slideIndex === this.props.slideIndex) {
          stepFunc(steps);
        }
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('load', this.setZoom);
      window.removeEventListener('resize', this.setZoom);
    }
  }, {
    key: "componentWillEnter",
    value: function componentWillEnter(callback) {
      this.setState({
        transitioning: false,
        reverse: false,
        z: 1
      });
      this.routerCallback(callback);
    }
  }, {
    key: "componentWillAppear",
    value: function componentWillAppear(callback) {
      this.setState({
        transitioning: false,
        reverse: false,
        z: 1
      });
      this.routerCallback(callback);
    }
  }, {
    key: "componentWillLeave",
    value: function componentWillLeave(callback) {
      this.setState({
        transitioning: true,
        reverse: true,
        z: ''
      });
      this.routerCallback(callback);
    }
  }, {
    key: "routerCallback",
    value: function routerCallback(callback) {
      var _this$props = this.props,
          transition = _this$props.transition,
          transitionDuration = _this$props.transitionDuration;

      if (transition.length > 0) {
        setTimeout(function () {
          return callback();
        }, transitionDuration);
      } else {
        callback();
      }
    }
  }, {
    key: "setZoom",
    value: function setZoom() {
      var mobile = window.matchMedia('(max-width: 628px)').matches;
      var content = this.contentRef;

      if (content) {
        var zoom = this.props.viewerScaleMode ? 1 : content.offsetWidth / this.context.contentWidth;
        var contentScaleY = content.parentNode.offsetHeight / this.context.contentHeight;
        var contentScaleX = this.props.viewerScaleMode ? content.parentNode.offsetWidth / this.context.contentWidth : content.parentNode.offsetWidth / this.context.contentHeight;
        var minScale = Math.min(contentScaleY, contentScaleX);
        var contentScale = minScale < 1 ? minScale : 1;

        if (mobile && this.props.viewerScaleMode !== true) {
          contentScale = 1;
        }

        this.setState({
          zoom: zoom > 0.6 ? zoom : 0.6,
          contentScale: contentScale
        });
      }
    }
  }, {
    key: "transitionDirection",
    value: function transitionDirection() {
      var _this$props2 = this.props,
          slideIndex = _this$props2.slideIndex,
          lastSlideIndex = _this$props2.lastSlideIndex;
      var routeSlideIndex = this.getRouteSlideIndex();
      return this.state.reverse ? slideIndex > routeSlideIndex : slideIndex > lastSlideIndex;
    }
  }, {
    key: "getTransitionKeys",
    value: function getTransitionKeys() {
      var _this$props3 = this.props,
          _this$props3$transiti = _this$props3.transition,
          transition = _this$props3$transiti === void 0 ? [] : _this$props3$transiti,
          _this$props3$transiti2 = _this$props3.transitionIn,
          transitionIn = _this$props3$transiti2 === void 0 ? [] : _this$props3$transiti2,
          _this$props3$transiti3 = _this$props3.transitionOut,
          transitionOut = _this$props3$transiti3 === void 0 ? [] : _this$props3$transiti3,
          reverse = this.state.reverse;

      if (reverse && transitionOut.length > 0) {
        return transitionOut;
      } else if (transitionIn.length > 0) {
        return transitionIn;
      }

      return transition;
    } // eslint-disable-next-line

  }, {
    key: "getTransitionStyles",
    value: function getTransitionStyles() {
      var _this3 = this;

      var _this$state = this.state,
          transitioning = _this$state.transitioning,
          z = _this$state.z;
      var transition = this.getTransitionKeys();
      var styles = {
        zIndex: z
      };
      var transformValue = '';

      if (transition.indexOf('fade') !== -1) {
        styles = _objectSpread({}, styles, {
          opacity: transitioning ? 0 : 1
        });
      }

      if (transition.indexOf('zoom') !== -1) {
        transformValue += " scale(".concat(transitioning ? 0.1 : 1.0, ")");
      }

      if (transition.indexOf('slide') !== -1) {
        var offset = this.transitionDirection() ? 100 : -100;
        transformValue += " translate3d(".concat(transitioning ? offset : 0, "%, 0, 0)");
      } else {
        transformValue += ' translate3d(0px, 0px, 0px)';
      }

      if (transition.indexOf('spin') !== -1) {
        var angle = this.transitionDirection() ? 90 : -90;
        transformValue += " rotateY(".concat(transitioning ? angle : 0, "deg)");
      }

      var functionStyles = transition.reduce(function (memo, current) {
        if (isFunction(current)) {
          return _objectSpread({}, memo, current(transitioning, _this3.transitionDirection()));
        }

        return memo;
      }, {});
      return _objectSpread({}, styles, {
        transform: transformValue
      }, functionStyles);
    }
  }, {
    key: "getRouteSlideIndex",
    value: function getRouteSlideIndex() {
      var slideReference = this.props.slideReference;

      var _this$context$store$g = this.context.store.getState(),
          route = _this$context$store$g.route;

      var slide = route.slide;
      var slideIndex = findIndex(slideReference, function (reference) {
        return slide === String(reference.id);
      });
      return Math.max(0, slideIndex);
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var _this$props4 = this.props,
          presenterStyle = _this$props4.presenterStyle,
          children = _this$props4.children,
          transitionDuration = _this$props4.transitionDuration;

      if (!this.props.viewerScaleMode) {
        document.documentElement.style.fontSize = "".concat(16 * this.state.zoom, "px");
      }

      var contentClass = isUndefined(this.props.className) ? '' : this.props.className;
      return React.createElement(VictoryAnimation, {
        data: this.getTransitionStyles(),
        duration: transitionDuration,
        easing: "quadInOut"
      }, function (animatedStyles) {
        return React.createElement(SlideContainer, {
          className: "spectacle-slide",
          innerRef: function innerRef(s) {
            _this4.slideRef = s;
          },
          exportMode: _this4.props.export,
          printMode: _this4.props.print,
          background: _this4.context.styles.global.body.background,
          styles: {
            base: getStyles.call(_this4),
            presenter: presenterStyle
          },
          style: _objectSpread({}, animatedStyles)
        }, React.createElement(SlideContentWrapper, {
          align: _this4.props.align,
          overviewMode: _this4.context.overview
        }, React.createElement(SlideContent, {
          innerRef: function innerRef(c) {
            _this4.contentRef = c;
          },
          className: "".concat(contentClass, " spectacle-content"),
          overviewMode: _this4.context.overview,
          width: _this4.context.contentWidth,
          height: _this4.context.contentHeight,
          scale: _this4.state.contentScale,
          zoom: _this4.state.zoom,
          margin: _this4.props.margin,
          styles: {
            context: _this4.context.styles.components.content
          }
        }, children)));
      });
    }
  }]);

  _inherits(Slide, _React$PureComponent);

  return Slide;
}(React.PureComponent);

Slide.defaultProps = {
  align: 'center center',
  presenterStyle: {},
  style: {},
  viewerScaleMode: false
};
Slide.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  dispatch: PropTypes.func,
  export: PropTypes.bool,
  getAnimStep: PropTypes.func,
  getAppearStep: PropTypes.func,
  hash: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lastSlideIndex: PropTypes.number,
  margin: PropTypes.number,
  notes: PropTypes.any,
  onActive: PropTypes.func,
  presenterStyle: PropTypes.object,
  print: PropTypes.bool,
  slideIndex: PropTypes.number,
  slideReference: PropTypes.array,
  style: PropTypes.object,
  transition: PropTypes.array,
  transitionDuration: PropTypes.number,
  transitionIn: PropTypes.array,
  transitionOut: PropTypes.array,
  viewerScaleMode: PropTypes.bool
};
Slide.contextTypes = {
  styles: PropTypes.object,
  contentWidth: PropTypes.number,
  contentHeight: PropTypes.number,
  export: PropTypes.bool,
  print: PropTypes.object,
  overview: PropTypes.bool,
  store: PropTypes.object
};
Slide.childContextTypes = {
  slideHash: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  stepCounter: PropTypes.shape({
    setFragments: PropTypes.func
  })
};
export default Slide;