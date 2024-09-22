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
import { prefix } from '../../globals/settings';
import styles from "././radio-button.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Skeleton of radio button.
 */
let CDSRadioButtonSkeleton = _decorate([customElement(`${prefix}-radio-button-skeleton`)], function (_initialize, _LitElement) {
  class CDSRadioButtonSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSRadioButtonSkeleton,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`
      <div class="${0}--radio-button ${0}--skeleton"></div>
      <span class="${0}--radio-button__label ${0}--skeleton"></span>
    `), prefix, prefix, prefix, prefix);
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
export default CDSRadioButtonSkeleton;
//# sourceMappingURL=radio-button-skeleton.js.map
