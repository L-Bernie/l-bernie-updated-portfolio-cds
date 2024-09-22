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
import styles from "././textarea.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Skeleton of text area.
 */
let CDSTextareaSkeleton = _decorate([customElement(`${prefix}-textarea-skeleton`)], function (_initialize, _LitElement) {
  class CDSTextareaSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTextareaSkeleton,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`
      <span class="${0}--label ${0}--skeleton"></span>
      <div class="${0}--skeleton ${0}--text-area"></div>
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
export default CDSTextareaSkeleton;
//# sourceMappingURL=textarea-skeleton.js.map
