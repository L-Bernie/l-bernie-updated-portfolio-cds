import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement, html } from 'lit';
import { property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import WarningFilled16 from "../../icons/warning--filled/16";
import WarningAltFilled16 from "../../icons/warning--alt--filled/16";
import { prefix } from '../../globals/settings';
import ifNonEmpty from '../../globals/directives/if-non-empty';
import { ifDefined } from 'lit/directives/if-defined.js';
import CDSTextInput from '../text-input/text-input';
import styles from "././textarea.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Text area.
 *
 * @element cds-textarea
 * @slot helper-text - The helper text.
 * @slot label-text - The label text.
 * @slot validity-message - The validity message. If present and non-empty, this input shows the UI of its invalid state.
 */
let CDSTextarea = _decorate([customElement(`${prefix}-textarea`)], function (_initialize, _CDSTextInput) {
  class CDSTextarea extends _CDSTextInput {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTextarea,
    d: [{
      kind: "method",
      key: "_handleInput",
      value:
      /**
       * Handles `oninput` event on the `<input>`.
       *
       * @param event The event.
       * @param event.target The event target.
       */
      function _handleInput({
        target
      }) {
        this.value = target.value;
      }

      /**
       * The number of columns for the stextarea to show by default
       */
    }, {
      kind: "field",
      decorators: [property({
        type: Number
      })],
      key: "cols",
      value: void 0
    }, {
      kind: "field",
      decorators: [property()],
      key: "id",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "pattern",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "required",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "rows",
      value() {
        return 4;
      }
    }, {
      kind: "field",
      decorators: [query('textarea')],
      key: "_textarea",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * ID to link the `label` and `textarea`
       */
      /**
       * Pattern to validate the textarea against for HTML validity checking
       */
      /**
       * Boolean property to set the required status
       */
      /**
       * The number of rows for the textarea to show by default
       */
      /**
       * Get a reference to the underlying textarea so we can directly apply values.
       * This lets us fixe a bug where after a user would clear text, the value wouldn't update programmatically
       */
      function render() {
        var _this$value;
        const {
          enableCounter,
          maxCount
        } = this;
        const textCount = (_this$value = this.value) === null || _this$value === void 0 ? void 0 : _this$value.length;
        const invalidIcon = WarningFilled16({
          class: `${prefix}--text-area__invalid-icon`
        });
        const warnIcon = WarningAltFilled16({
          class: `${prefix}--text-area__invalid-icon ${prefix}--text-area__invalid-icon--warning`
        });
        const textareaClasses = classMap({
          [`${prefix}--text-area`]: true,
          [`${prefix}--text-area--warn`]: this.warn,
          [`${prefix}--text-area--invalid`]: this.invalid
        });
        const textareaWrapperClasses = classMap({
          [`${prefix}--text-area__wrapper`]: true,
          [`${prefix}--text-area__wrapper--warn`]: this.warn,
          [`${prefix}--text-area__wrapper--readonly`]: this.readonly,
          [`${prefix}--text-area__wrapper--slug`]: this._hasSlug
        });
        const labelClasses = classMap({
          [`${prefix}--label`]: true,
          [`${prefix}--label--disabled`]: this.disabled
        });
        const helperTextClasses = classMap({
          [`${prefix}--form__helper-text`]: true,
          [`${prefix}--form__helper-text--disabled`]: this.disabled
        });
        const counter = enableCounter && maxCount ? html(_t || (_t = _` <label class="${0}">
            <slot name="label-text">${0}/${0}</slot>
          </label>`), labelClasses, textCount, maxCount) : null;
        const icon = () => {
          if (this.invalid) {
            return invalidIcon;
          } else if (this.warn && !this.invalid) {
            return warnIcon;
          }
          return null;
        };
        return html(_t2 || (_t2 = _`
      <div class="${0}--text-area__label-wrapper">
        ${0}
        ${0}
      </div>
      <div class="${0}" ?data-invalid="${0}">
        ${0}
        <textarea
          autocomplete="${0}"
          ?autofocus="${0}"
          class="${0}"
          cols="${0}"
          ?data-invalid="${0}"
          ?disabled="${0}"
          id="input"
          name="${0}"
          pattern="${0}"
          placeholder="${0}"
          ?readonly="${0}"
          ?required="${0}"
          rows="${0}"
          .value="${0}"
          maxlength="${0}"
          @input="${0}"></textarea>
        <slot name="slug" @slotchange="${0}"></slot>
      </div>
      <div class="${0}" ?hidden="${0}">
        <slot name="helper-text"> ${0} </slot>
      </div>
      <div
        class="${0}--form-requirement"
        ?hidden="${0}">
        <slot name="${0}">
          ${0}
        </slot>
      </div>
    `), prefix, this.hideLabel ? html(_t3 || (_t3 = _``)) : html(_t4 || (_t4 = _`
              <label class="${0}" for="input">
                <slot name="label-text"> ${0} </slot>
              </label>
            `), labelClasses, this.label), counter, textareaWrapperClasses, this.invalid, icon(), this.autocomplete, this.autofocus, textareaClasses, ifDefined(this.cols), this.invalid, this.disabled, ifNonEmpty(this.name), ifNonEmpty(this.pattern), ifNonEmpty(this.placeholder), this.readonly, this.required, ifDefined(this.rows), this.value, ifNonEmpty(this.maxCount), this._handleInput, this._handleSlotChange, helperTextClasses, this.invalid || this.warn, this.helperText, prefix, !this.invalid && !this.warn, this.invalid ? 'invalid-text' : 'warn-text', this.invalid ? this.invalidText : this.warnText);
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
}, CDSTextInput);
export default CDSTextarea;
//# sourceMappingURL=textarea.js.map
