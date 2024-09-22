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
export let ACCORDION_ITEM_BREAKPOINT;

/**
 * Accordion size.
 */
(function (ACCORDION_ITEM_BREAKPOINT) {
  ACCORDION_ITEM_BREAKPOINT["SMALL"] = "sm";
  ACCORDION_ITEM_BREAKPOINT["MEDIUM"] = "md";
})(ACCORDION_ITEM_BREAKPOINT || (ACCORDION_ITEM_BREAKPOINT = {}));
export let ACCORDION_SIZE;

/**
 * Specify the alignment of the accordion heading title and chevron.
 */
(function (ACCORDION_SIZE) {
  ACCORDION_SIZE["SMALL"] = "sm";
  ACCORDION_SIZE["MEDIUM"] = "md";
  ACCORDION_SIZE["LARGE"] = "lg";
})(ACCORDION_SIZE || (ACCORDION_SIZE = {}));
export let ACCORDION_ALIGNMENT;
(function (ACCORDION_ALIGNMENT) {
  ACCORDION_ALIGNMENT["START"] = "start";
  ACCORDION_ALIGNMENT["END"] = "END";
})(ACCORDION_ALIGNMENT || (ACCORDION_ALIGNMENT = {}));
//# sourceMappingURL=defs.js.map
