import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { classMap } from 'lit/directives/class-map.js';
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import { CHAT_BUTTON_SIZE } from './defs';
import styles from "././chat-button.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { CHAT_BUTTON_SIZE };
/**
 * Chat button skeleton.
 *
 * @element cds-chat-button-skeleton
 */
let CDSChatButtonSkeleton = _decorate([customElement(`${prefix}-chat-button-skeleton`)], function (_initialize, _LitElement) {
  class CDSChatButtonSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSChatButtonSkeleton,
    d: [{
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",
      value() {
        return CHAT_BUTTON_SIZE.LARGE;
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Specify the size of the `ChatButtonSkeleton`, from the following list of sizes: 'sm', 'md', 'lg'
       */

      function render() {
        const skeletonClasses = classMap({
          [`${prefix}--skeleton`]: true,
          [`${prefix}--btn`]: true,
          [`${prefix}--chat-btn`]: true,
          [`${prefix}--layout--size-${this.size}`]: this.size
        });
        return html(_t || (_t = _` <div class="${0}"></div> `), skeletonClasses);
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
export default CDSChatButtonSkeleton;
//# sourceMappingURL=chat-button-skeleton.js.map
