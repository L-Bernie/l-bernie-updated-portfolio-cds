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
import { prefix } from '../../globals/settings';
import styles from "././tabs.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Skeleton of tabs.
 */
let CDSTabsSkeleton = _decorate([customElement(`${prefix}-tabs-skeleton`)], function (_initialize, _LitElement) {
  class CDSTabsSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSTabsSkeleton,
    d: [{
      kind: "method",
      key: "render",
      value: function render() {
        return html(_t || (_t = _`
      <div class="${0}--tabs-trigger">
        <span class="${0}--tabs-trigger-text"></span>
      </div>
      <ul class="${0}--tabs__nav">
        <slot></slot>
      </ul>
    `), prefix, prefix, prefix);
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
export { CDSTabsSkeleton as default };
//# sourceMappingURL=tabs-skeleton.js.map
