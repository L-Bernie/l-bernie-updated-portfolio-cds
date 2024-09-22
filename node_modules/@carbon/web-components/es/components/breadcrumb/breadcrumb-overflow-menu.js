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

import { html } from 'lit';
import { prefix } from '../../globals/settings';
import OverflowMenuHorizontal16 from "../../icons/overflow-menu--horizontal/16";
import CDSOverflowMenu from '../overflow-menu/overflow-menu';
import styles from "././breadcrumb.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Overflow menu in breadcrumb.
 *
 * @element cds-breadcrumb-overflow-menu
 */
let CDSBreadcrumbOverflowMenu = _decorate([customElement(`${prefix}-breadcrumb-overflow-menu`)], function (_initialize, _CDSOverflowMenu) {
  class CDSBreadcrumbOverflowMenu extends _CDSOverflowMenu {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSBreadcrumbOverflowMenu,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`
      <slot name="icon">
        ${0}
      </slot>
    `), OverflowMenuHorizontal16({
          class: `${prefix}--overflow-menu__icon`
        }));
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
}, CDSOverflowMenu);
export default CDSBreadcrumbOverflowMenu;
//# sourceMappingURL=breadcrumb-overflow-menu.js.map
