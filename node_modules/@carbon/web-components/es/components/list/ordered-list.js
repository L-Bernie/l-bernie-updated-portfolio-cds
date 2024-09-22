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

import { classMap } from 'lit/directives/class-map.js';
import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import CDSUnorderedList from './unordered-list';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Ordered list.
 */
let CDSOrderedList = _decorate([customElement(`${prefix}-ordered-list`)], function (_initialize, _CDSUnorderedList) {
  class CDSOrderedList extends _CDSUnorderedList {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSOrderedList,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "native",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Specify whether the ordered list should use native list styles instead of
       * custom counter
       */

      function render() {
        const classes = classMap({
          [`${prefix}--list--ordered`]: !this.native,
          [`${prefix}--list--ordered--native`]: this.native,
          [`${prefix}--list--nested`]: this.getAttribute('slot') === 'nested',
          [`${prefix}--list--expressive`]: this.isExpressive
        });
        return html(_t || (_t = _`
      <ol class="${0}">
        <slot></slot>
      </ol>
    `), classes);
      }
    }]
  };
}, CDSUnorderedList);
export default CDSOrderedList;
//# sourceMappingURL=ordered-list.js.map
