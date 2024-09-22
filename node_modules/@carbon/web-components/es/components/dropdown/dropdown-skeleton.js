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
import styles from "././dropdown.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Skeleton version of dropdown.
 */
let CDSDropdownSkeleton = _decorate([customElement(`${prefix}-dropdown-skeleton`)], function (_initialize, _LitElement) {
  class CDSDropdownSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSDropdownSkeleton,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`
      <div
        class="${0}--skeleton ${0}--dropdown-v2 ${0}--list-box ${0}--form-item">
        <div class="${0}--list-box__field">
          <span class="${0}--list-box__label"></span>
        </div>
      </div>
    `), prefix, prefix, prefix, prefix, prefix, prefix);
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
export default CDSDropdownSkeleton;
//# sourceMappingURL=dropdown-skeleton.js.map
