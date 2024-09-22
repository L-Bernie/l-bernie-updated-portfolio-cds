import _decorate from "@babel/runtime/helpers/esm/decorate";
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import CDSButton from '../button/button';
import styles from "././slug.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Slug action button.
 *
 * @element cds-slug-action-button
 */
let CDSSlugActionButton = _decorate([customElement(`${prefix}-slug-action-button`)], function (_initialize, _CDSButton) {
  class CDSSlugActionButton extends _CDSButton {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSlugActionButton,
    d: [{
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "slot",
      value() {
        return 'actions';
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
}, CDSButton);
export { CDSSlugActionButton as default };
//# sourceMappingURL=slug-action-button.js.map
