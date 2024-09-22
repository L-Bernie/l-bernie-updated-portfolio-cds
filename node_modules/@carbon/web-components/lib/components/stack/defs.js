"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STACK_ORIENTATION = exports.SPACING_STEPS = void 0;
var _layout = require("@carbon/layout");
/**
 * @license
 *
 * Copyright IBM Corp. 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * Stack orientation
 */
let STACK_ORIENTATION = exports.STACK_ORIENTATION = void 0;
/**
 * The steps in the spacing scale
 *
 * @type {Array<number>}
 */
(function (STACK_ORIENTATION) {
  STACK_ORIENTATION["VERTICAL"] = "vertical";
  STACK_ORIENTATION["HORIZONTAL"] = "horizontal";
})(STACK_ORIENTATION || (exports.STACK_ORIENTATION = STACK_ORIENTATION = {}));
const SPACING_STEPS = exports.SPACING_STEPS = Array.from({
  length: _layout.spacing.length - 1
}).map((_, step) => {
  return step + 1;
});
//# sourceMappingURL=defs.js.map
