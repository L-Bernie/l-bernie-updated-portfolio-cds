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
import CDSHeaderNavItem from './header-nav-item';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Header submenu item.
 *
 * @element cds-header-menu-item
 */
let CDSHeaderMenuItem = _decorate([customElement(`${prefix}-header-menu-item`)], function (_initialize, _CDSHeaderNavItem) {
  class CDSHeaderMenuItem extends _CDSHeaderNavItem {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSHeaderMenuItem,
    d: []
  };
}, CDSHeaderNavItem);
export default CDSHeaderMenuItem;
//# sourceMappingURL=header-menu-item.js.map
