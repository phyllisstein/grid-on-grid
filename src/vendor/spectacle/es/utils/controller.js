function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } _setPrototypeOf(subClass.prototype, superClass && superClass.prototype); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.getPrototypeOf || function _getPrototypeOf(o) { return o.__proto__; }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Component } from 'react';
import createHistory from 'history/createHashHistory';
import PropTypes from 'prop-types';
import { updateRoute } from '../actions';
import { countSlides } from './slides';
import theme from '../themes/default';
import Context from './context';
var history = createHistory();

var Controller =
/*#__PURE__*/
function (_Component) {
  function Controller(props) {
    var _this;

    _classCallCheck(this, Controller);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Controller).apply(this, arguments));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      print: false
    });

    _this.history = props.history || history;
    return _this;
  }

  _createClass(Controller, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.unlisten = this.history.listen(this._updateRoute.bind(this));
      var location = this.history.location;
      var slideCount = countSlides(this.props.children.props.children);
      this.props.store.dispatch(updateRoute({
        location: location,
        slideCount: slideCount
      }));
    }
  }, {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props !== nextProps || this.state !== nextState;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.unlisten();
    }
  }, {
    key: "_updateRoute",
    value: function _updateRoute(location) {
      var _this2 = this;

      this.setState({
        print: location.search.indexOf('print') !== -1
      }, function () {
        var slideCount = countSlides(_this2.props.children.props.children);

        _this2.props.store.dispatch(updateRoute({
          location: location,
          slideCount: slideCount
        }));
      });
    }
  }, {
    key: "render",
    value: function render() {
      var styles = this.props.theme ? this.props.theme : theme();
      return React.createElement(Context, {
        store: this.props.store,
        history: this.history,
        styles: this.state.print ? styles.print : styles.screen
      }, this.props.children);
    }
  }]);

  _inherits(Controller, _Component);

  return Controller;
}(Component);

_defineProperty(Controller, "propTypes", {
  children: PropTypes.node,
  history: PropTypes.object,
  store: PropTypes.object,
  theme: PropTypes.object
});

export { Controller as default };