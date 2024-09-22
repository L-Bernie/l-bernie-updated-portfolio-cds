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
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import styles from "././data-table.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Table toolbar content.
 *
 * @element cds-table-toolbar-content
 */
let CDSTableToolbarContent = _decorate([customElement(`${prefix}-table-toolbar-content`)], function (_initialize, _LitElement) {
  class CDSTableToolbarContent extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTableToolbarContent,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'has-batch-actions'
      })],
      key: "hasBatchActions",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",
      value: void 0
    }, {
      kind: "method",
      key: "updated",
      value:
      /**
       * `true` if this batch actions bar is active.
       */

      /**
       * Table toolbar contents size
       */

      function updated(changedProperties) {
        if (changedProperties.has('hasBatchActions')) {
          this.setAttribute('tabindex', `${this.hasBatchActions ? '-1' : ''}`);
        }
        if (changedProperties.has('size')) {
          [...this.children].forEach(e => {
            const size = this.size === 'xs' ? 'sm' : this.size === 'md' || this.size === 'xl' ? 'lg' : this.size;
            e.setAttribute('size', size);
          });
        }
      }
    }, {
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
export default CDSTableToolbarContent;
//# sourceMappingURL=table-toolbar-content.js.map
