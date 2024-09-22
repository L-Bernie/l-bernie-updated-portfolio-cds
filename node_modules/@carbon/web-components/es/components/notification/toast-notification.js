import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t,
  _t2;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
import { NOTIFICATION_TYPE } from './defs';
import CDSInlineNotification from './inline-notification';
import styles from "././toast-notification.css.js";

/**
 * Toast notification.
 *
 * @element cds-toast-notification
 * @slot subtitle - The subtitle.
 * @slot title - The title.
 * @fires cds-notification-beingclosed
 *   The custom event fired before this notification is being closed upon a user gesture.
 *   Cancellation of this event stops the user-initiated action of closing this notification.
 * @fires cds-notification-closed - The custom event fired after this notification is closed upon a user gesture.
 */ /**
     * Toast notification.
     *
     * @element cds-toast-notification
     * @slot subtitle - The subtitle.
     * @slot title - The title.
     * @fires cds-notification-beingclosed
     *   The custom event fired before this notification is being closed upon a user gesture.
     *   Cancellation of this event stops the user-initiated action of closing this notification.
     * @fires cds-notification-closed - The custom event fired after this notification is closed upon a user gesture.
     */
let CDSToastNotification = _decorate([customElement(`${prefix}-toast-notification`)], function (_initialize, _CDSInlineNotificatio) {
  class CDSToastNotification extends _CDSInlineNotificatio {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSToastNotification,
    d: [{
      kind: "field",
      key: "_type",
      value() {
        return NOTIFICATION_TYPE.TOAST;
      }
    }, {
      kind: "method",
      key: "_renderText",
      value: function _renderText() {
        const {
          caption,
          subtitle,
          title,
          _type: type
        } = this;
        return html(_t || (_t = _`
      <div class="${0}--${0}-notification__details">
        <div class="${0}--${0}-notification__title">
          ${0}<slot name="title"></slot>
        </div>
        <div class="${0}--${0}-notification__subtitle">
          ${0}<slot name="subtitle"></slot>
        </div>
        <div class="${0}--${0}-notification__caption">
          ${0}<slot name="caption"></slot>
        </div>
        <slot></slot>
      </div>
    `), prefix, type, prefix, type, title, prefix, type, subtitle, prefix, type, caption);
      }

      /**
       * Specify the caption
       */
    }, {
      kind: "field",
      decorators: [property()],
      key: "caption",
      value() {
        return '';
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          _type: type
        } = this;
        return html(_t2 || (_t2 = _`
      ${0}
      <div class="${0}--${0}-notification__details">
        ${0}
      </div>
      ${0}
    `), this._renderIcon(), prefix, type, this._renderText(), this._renderButton());
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
}, CDSInlineNotification);
export default CDSToastNotification;
//# sourceMappingURL=toast-notification.js.map
