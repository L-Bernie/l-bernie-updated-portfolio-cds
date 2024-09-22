import _decorate from "@babel/runtime/helpers/esm/decorate";
/**
 * @license
 *
 * Copyright IBM Corp. 2021, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { prefix } from '../../globals/settings';
import CDSButton from '../button/button';
import buttonStyles from "./../button/button.css.js";
import styles from "././modal.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Modal footer button.
 *
 * @element cds-modal-footer-button
 */
let CDSModalFooterButton = _decorate([customElement(`${prefix}-modal-footer-button`)], function (_initialize, _CDSButton) {
  class CDSModalFooterButton extends _CDSButton {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSModalFooterButton,
    d: [{
      kind: "field",
      static: true,
      key: "styles",
      value() {
        return [buttonStyles, styles];
      }
    }]
  };
}, CDSButton);
export default CDSModalFooterButton;
//# sourceMappingURL=modal-footer-button.js.map
