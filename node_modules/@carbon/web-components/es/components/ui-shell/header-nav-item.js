import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
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

import { ifDefined } from 'lit/directives/if-defined.js';
import { classMap } from 'lit/directives/class-map.js';
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././header.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Header nav item.
 *
 * @element cds-header-nav-item
 * @csspart link The link.
 * @csspart title The title.
 */
let CDSHeaderNavItem = _decorate([customElement(`${prefix}-header-nav-item`)], function (_initialize, _FocusMixin) {
  class CDSHeaderNavItem extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSHeaderNavItem,
    d: [{
      kind: "field",
      decorators: [property()],
      key: "href",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "rel",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "target",
      value: void 0
    }, {
      kind: "field",
      decorators: [property()],
      key: "title",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        attribute: 'is-active'
      })],
      key: "isActive",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: String,
        attribute: 'aria-current'
      })],
      key: "ariaCurrent",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "role",
      value() {
        return 'listitem';
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Link `href`.
       */

      /**
       * The link type.
       */

      /**
       * The link target.
       */

      /**
       * The title.
       */

      /**
       * Applies selected styles to the item if a user sets this to true and `aria-current !== 'page'`.
       */

      /**
       * indicates that this element represents the current item
       */

      /**
       * As child of <ul>, this element must have role of listitem
       */

      function render() {
        const {
          ariaCurrent,
          href,
          isActive,
          title,
          rel,
          target
        } = this;
        const linkClass = classMap({
          [`${prefix}--header__menu-item`]: true,
          [`${prefix}--header__menu-item--current`]: isActive && ariaCurrent !== 'page'
        });
        return html(_t || (_t = _`
      <a
        part="link"
        class="${0}"
        tabindex="0"
        href="${0}"
        rel="${0}"
        target="${0}">
        <span part="title" class="${0}--text-truncate--end"
          ><slot>${0}</slot></span
        >
      </a>
    `), linkClass, ifDefined(href), ifDefined(rel), ifDefined(target), prefix, title);
      }
    }, {
      kind: "field",
      static: true,
      key: "shadowRootOptions",
      value() {
        return _objectSpread(_objectSpread({}, LitElement.shadowRootOptions), {}, {
          delegatesFocus: true
        });
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
}, FocusMixin(LitElement));
export default CDSHeaderNavItem;
//# sourceMappingURL=header-nav-item.js.map
