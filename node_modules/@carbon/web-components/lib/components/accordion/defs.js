"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ACCORDION_SIZE = exports.ACCORDION_ITEM_BREAKPOINT = exports.ACCORDION_ALIGNMENT = void 0;
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * Breakpoints for accordion items. It's different from one in `@carbon/layout` library.
 */
let ACCORDION_ITEM_BREAKPOINT = exports.ACCORDION_ITEM_BREAKPOINT = void 0;
/**
 * Accordion size.
 */
(function (ACCORDION_ITEM_BREAKPOINT) {
  ACCORDION_ITEM_BREAKPOINT["SMALL"] = "sm";
  ACCORDION_ITEM_BREAKPOINT["MEDIUM"] = "md";
})(ACCORDION_ITEM_BREAKPOINT || (exports.ACCORDION_ITEM_BREAKPOINT = ACCORDION_ITEM_BREAKPOINT = {}));
let ACCORDION_SIZE = exports.ACCORDION_SIZE = void 0;
/**
 * Specify the alignment of the accordion heading title and chevron.
 */
(function (ACCORDION_SIZE) {
  ACCORDION_SIZE["SMALL"] = "sm";
  ACCORDION_SIZE["MEDIUM"] = "md";
  ACCORDION_SIZE["LARGE"] = "lg";
})(ACCORDION_SIZE || (exports.ACCORDION_SIZE = ACCORDION_SIZE = {}));
let ACCORDION_ALIGNMENT = exports.ACCORDION_ALIGNMENT = void 0;
(function (ACCORDION_ALIGNMENT) {
  ACCORDION_ALIGNMENT["START"] = "start";
  ACCORDION_ALIGNMENT["END"] = "END";
})(ACCORDION_ALIGNMENT || (exports.ACCORDION_ALIGNMENT = ACCORDION_ALIGNMENT = {}));
//# sourceMappingURL=defs.js.map
