import React from 'react';
import Tippy from '@tippy.js/react';
export { default as Tippy, TippyGroup } from '@tippy.js/react';
export { default as usePortal } from 'react-useportal';

function Tooltip(props) {
  return React.createElement(Tippy, props);
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
  return React.createElement(Tippy, _extends({
    animateFill: false,
    interactive: true,
    interactiveBorder: 10,
    animation: "scale",
    theme: "light-border",
    trigger: "click"
  }, props));
}

export { Popover, Tooltip };
//# sourceMappingURL=react-hooks.es.js.map
