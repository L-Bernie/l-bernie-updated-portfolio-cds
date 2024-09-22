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
import styles from "././modal.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Modal label.
 *
 * @element cds-modal-label
 */
let CDSModalLabel = _decorate([customElement(`${prefix}-modal-label`)], function (_initialize, _LitElement) {
  class CDSModalLabel extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSModalLabel,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _` <slot></slot> `));
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
export default CDSModalLabel;
//# sourceMappingURL=modal-label.js.map
