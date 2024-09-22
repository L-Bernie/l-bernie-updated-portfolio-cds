import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t,
  _t2,
  _t3;
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
import { CODE_SNIPPET_TYPE } from './code-snippet';
import styles from "././code-snippet.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Skeleton of code snippet.
 */
let CDSCodeSnippetSkeleton = _decorate([customElement(`${prefix}-code-snippet-skeleton`)], function (_initialize, _LitElement) {
  class CDSCodeSnippetSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSCodeSnippetSkeleton,
    d: [{
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "type",
      value() {
        return CODE_SNIPPET_TYPE.SINGLE;
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * The type of code snippet. Corresponds to the attribute with the same name.
       */

      function render() {
        return html(_t || (_t = _`
      <div class="${0}--snippet-container">
        ${0}
      </div>
    `), prefix, this.type !== CODE_SNIPPET_TYPE.MULTI ? html(_t2 || (_t2 = _` <span></span> `)) : html(_t3 || (_t3 = _` <span></span><span></span><span></span> `)));
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
export default CDSCodeSnippetSkeleton;
//# sourceMappingURL=code-snippet-skeleton.js.map
