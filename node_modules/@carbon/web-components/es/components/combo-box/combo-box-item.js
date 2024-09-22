import _decorate from "@babel/runtime/helpers/esm/decorate";
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { prefix } from '../../globals/settings';
import CDSDropdownItem from '../dropdown/dropdown-item';
import styles from "././combo-box.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Combo box item.
 *
 * @element cds-combo-box-item
 */
let CDSComboBoxItem = _decorate([customElement(`${prefix}-combo-box-item`)], function (_initialize, _CDSDropdownItem) {
  class CDSComboBoxItem extends _CDSDropdownItem {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSComboBoxItem,
    d: [{
      kind: "field",
      static: true,
      key: "styles",
      value() {
        return styles;
      }
    }]
  };
}, CDSDropdownItem);
export default CDSComboBoxItem;
//# sourceMappingURL=combo-box-item.js.map
