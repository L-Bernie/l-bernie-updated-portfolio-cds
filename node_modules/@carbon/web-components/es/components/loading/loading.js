import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { classMap } from 'lit/directives/class-map.js';
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import { LOADING_TYPE } from './defs';
import getLoadingIcon from './loading-icon';
import styles from "././loading.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Spinner indicating loading state.
 *
 * @element cds-loading
 */
let CDSLoading = _decorate([customElement(`${prefix}-loading`)], function (_initialize, _LitElement) {
  class CDSLoading extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSLoading,
    d: [{
      kind: "field",
      decorators: [property({
        attribute: 'assistive-text'
      })],
      key: "assistiveText",
      value() {
        return 'Loading';
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "type",
      value() {
        return LOADING_TYPE.REGULAR;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "overlay",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "inactive",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * The assistive text for the spinner icon.
       */

      /**
       * Spinner type.
       */

      /**
       * `true` if overlay should be applied.
       */

      /**
       * `true` if spinner should stop.
       */

      function render() {
        const {
          inactive,
          assistiveText,
          type,
          overlay
        } = this;
        const innerClasses = classMap({
          [`${prefix}--loading`]: true,
          [`${prefix}--loading--stop`]: inactive,
          [`${prefix}--loading--small`]: type === LOADING_TYPE.SMALL
        });
        const icon = getLoadingIcon({
          assistiveText,
          type
        });
        return overlay ? html(_t || (_t = _`<div class="${0}">${0}</div>`), innerClasses, icon) : icon;
      }
    }, {
      kind: "field",
      static: true,
      key: "styles",
      value() {
        return styles;
      }
    }]
  };
}, LitElement);
export { LOADING_TYPE };
export default CDSLoading;
//# sourceMappingURL=loading.js.map
