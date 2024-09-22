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
import { INPUT_SIZE } from '../text-input/text-input';
import styles from "././search.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Skeleton of search.
 */
let CDSSearchSkeleton = _decorate([customElement(`${prefix}-search-skeleton`)], function (_initialize, _LitElement) {
  class CDSSearchSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSearchSkeleton,
    d: [{
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",
      value() {
        return INPUT_SIZE.MEDIUM;
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * The search box size. Corresponds to the attribute with the same name.
       */

      function render() {
        return html(_t || (_t = _`
      <span class="${0}--label"></span>
      <div class="${0}--search-input"></div>
    `), prefix, prefix);
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
export default CDSSearchSkeleton;
//# sourceMappingURL=search-skeleton.js.map
