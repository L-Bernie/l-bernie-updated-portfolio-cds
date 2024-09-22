import _decorate from "@babel/runtime/helpers/esm/decorate";
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * An option group in select box.
 *
 * @element cds-select-item-group
 */
let CDSSelectItemGroup = _decorate([customElement(`${prefix}-select-item-group`)], function (_initialize, _LitElement) {
  class CDSSelectItemGroup extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSelectItemGroup,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "disabled",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "label",
      value() {
        return '';
      }
    }]
  };
}, LitElement);
export default CDSSelectItemGroup;
//# sourceMappingURL=select-item-group.js.map
