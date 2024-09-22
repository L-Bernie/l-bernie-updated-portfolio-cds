/**
 * @license
 *
 * Copyright IBM Corp. 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { spacing } from '@carbon/layout';

/**
 * Stack orientation
 */
export let STACK_ORIENTATION;

/**
 * The steps in the spacing scale
 *
 * @type {Array<number>}
 */
(function (STACK_ORIENTATION) {
  STACK_ORIENTATION["VERTICAL"] = "vertical";
  STACK_ORIENTATION["HORIZONTAL"] = "horizontal";
})(STACK_ORIENTATION || (STACK_ORIENTATION = {}));
export const SPACING_STEPS = Array.from({
  length: spacing.length - 1
}).map((_, step) => {
  return step + 1;
});
//# sourceMappingURL=defs.js.map
