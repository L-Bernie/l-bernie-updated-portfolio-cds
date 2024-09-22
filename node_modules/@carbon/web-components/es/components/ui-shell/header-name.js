import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t,
  _t2;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { ifDefined } from 'lit/directives/if-defined.js';
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././header.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * The product name UI in header nav.
 *
 * @element cds-header-name
 * @csspart link The link.
 * @csspart prefix The prefix content.
 */
let CDSHeaderName = _decorate([customElement(`${prefix}-header-name`)], function (_initialize, _FocusMixin) {
  class CDSHeaderName extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSHeaderName,
    d: [{
      kind: "field",
      decorators: [property()],
      key: "href",
      value: void 0
    }, {
      kind: "field",
      decorators: [property()],
      key: "prefix",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Link `href`.
       */

      /**
       * The product name prefix.
       */

      function render() {
        const {
          href,
          prefix: namePrefix
        } = this;
        const namePrefixPart = !namePrefix ? undefined : html(_t || (_t = _`
          <span part="prefix" class="${0}--header__name--prefix"
            >${0}</span
          >
        `), prefix, namePrefix);
        return html(_t2 || (_t2 = _`
      <a part="link" class="${0}--header__name" href="${0}"
        >${0}&nbsp;<slot></slot
      ></a>
    `), prefix, ifDefined(href), namePrefixPart);
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
export default CDSHeaderName;
//# sourceMappingURL=header-name.js.map
