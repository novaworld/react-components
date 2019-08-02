'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var Tippy = require('@tippy.js/react');
var Tippy__default = _interopDefault(Tippy);
var reactUseportal = _interopDefault(require('react-useportal'));

function Tooltip(props) {
  return React.createElement(Tippy__default, props);
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function Popover(props) {
  return React.createElement(Tippy__default, _extends({
    animateFill: false,
    interactive: true,
    interactiveBorder: 10,
    animation: "scale",
    theme: "light-border",
    trigger: "click"
  }, props));
}

exports.Tippy = Tippy__default;
Object.defineProperty(exports, 'TippyGroup', {
    enumerable: true,
    get: function () {
        return Tippy.TippyGroup;
    }
});
exports.usePortal = reactUseportal;
exports.Popover = Popover;
exports.Tooltip = Tooltip;
//# sourceMappingURL=react-hooks.cjs.js.map
