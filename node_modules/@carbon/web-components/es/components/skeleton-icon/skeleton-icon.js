import _decorate from "@babel/runtime/helpers/esm/decorate";
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { LitElement } from 'lit';
import { prefix } from '../../globals/settings';
import styles from "././skeleton-icon.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Skeleton icon.
 *
 * @element cds-skeleton-icon
 */
let CDSSkeletonIcon = _decorate([customElement(`${prefix}-skeleton-icon`)], function (_initialize, _LitElement) {
  class CDSSkeletonIcon extends _LitElement {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSSkeletonIcon,
    d: [{
      kind: "field",
      static: true,
      key: "styles",
      value() {
        return styles;
      }
    }]
  };
}, LitElement);
export default CDSSkeletonIcon;
//# sourceMappingURL=skeleton-icon.js.map
