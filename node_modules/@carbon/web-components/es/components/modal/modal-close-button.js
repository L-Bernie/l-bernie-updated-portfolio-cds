import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
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

import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import Close20 from "../../icons/close/20";
import { prefix } from '../../globals/settings';
import { ifDefined } from 'lit/directives/if-defined.js';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././modal.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Modal close button.
 *
 * @element cds-modal-close-button
 * @csspart button The button.
 * @csspart close-icon The close icon.
 */
let CDSModalCloseButton = _decorate([customElement(`${prefix}-modal-close-button`)], function (_initialize, _FocusMixin) {
  class CDSModalCloseButton extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSModalCloseButton,
    d: [{
      kind: "field",
      decorators: [property({
        attribute: 'close-button-label'
      })],
      key: "closeButtonLabel",
      value() {
        return 'Close';
      }
    }, {
      kind: "method",
      key: "updated",
      value:
      /**
       * Specify a label for the close button of the modal; defaults to close
       */

      function updated() {
        var _this$parentElement;
        (_this$parentElement = this.parentElement) === null || _this$parentElement === void 0 || _this$parentElement.setAttribute('close-button', '');
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          closeButtonLabel
        } = this;
        return html(_t || (_t = _`
      <button
        part="button"
        aria-label="${0}"
        class="${0}--modal-close"
        title="${0}">
        ${0}
      </button>
    `), ifDefined(closeButtonLabel), prefix, ifDefined(closeButtonLabel), Close20({
          part: 'close-icon',
          class: `${prefix}--modal-close__icon`
        }));
      }
    }, {
      kind: "field",
      static: true,
      key: "shadowRootOptions",
      value() {
        return _objectSpread(_objectSpread({}, LitElement.shadowRootOptions), {}, {
          delegatesFocus: true
        });
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
}, FocusMixin(LitElement));
export default CDSModalCloseButton;
//# sourceMappingURL=modal-close-button.js.map
