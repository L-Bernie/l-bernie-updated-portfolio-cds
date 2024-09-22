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
import { prefix } from '../../globals/settings';
import { DATE_PICKER_INPUT_KIND } from './date-picker-input';
import styles from "././date-picker.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Skeleton version of the input box for date picker.
 */
let CDSDatePickerInputSkeleton = _decorate([customElement(`${prefix}-date-picker-input-skeleton`)], function (_initialize, _LitElement) {
  class CDSDatePickerInputSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSDatePickerInputSkeleton,
    d: [{
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "kind",
      value() {
        return DATE_PICKER_INPUT_KIND.SIMPLE;
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Date picker input kind. Corresponds to the attribute with the same name.
       */

      function render() {
        return html(_t || (_t = _`
      <span class="${0}--label"></span>
      <div class="${0}--date-picker__input ${0}--skeleton"></div>
    `), prefix, prefix, prefix);
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
export default CDSDatePickerInputSkeleton;
//# sourceMappingURL=date-picker-input-skeleton.js.map
