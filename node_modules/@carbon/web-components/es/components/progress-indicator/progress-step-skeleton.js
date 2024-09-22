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
import styles from "././progress-indicator.css.js";
import CircleDash from "../../icons/circle-dash/16";
import '../skeleton-text';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Skeleton of progress step.
 */
let CDSProgressStepSkeleton = _decorate([customElement(`${prefix}-progress-step-skeleton`)], function (_initialize, _LitElement) {
  class CDSProgressStepSkeleton extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSProgressStepSkeleton,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "vertical",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * `true` if the progress indicator should be vertical. Corresponds to the attribute with the same name.
       */

      function render() {
        return html(_t || (_t = _`
      <div
        class="${0}--progress-step-button ${0}--progress-step-button--unclickable">
        ${0}
        <p class="${0}--progress-label">
          <cds-skeleton-text width="40px" linecount="1"></cds-skeleton-text>
        </p>
        <span class="${0}--progress-line"></span>
      </div>
    `), prefix, prefix, CircleDash(), prefix, prefix);
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
export { CDSProgressStepSkeleton as default };
//# sourceMappingURL=progress-step-skeleton.js.map
