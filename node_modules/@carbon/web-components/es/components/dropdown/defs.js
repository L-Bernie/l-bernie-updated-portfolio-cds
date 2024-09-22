/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export { FORM_ELEMENT_COLOR_SCHEME as DROPDOWN_COLOR_SCHEME } from '../../globals/shared-enums';

/**
 * Navigation direction, associated with key symbols.
 */
export const NAVIGATION_DIRECTION = {
  Up: -1,
  ArrowUp: -1,
  Down: 1,
  ArrowDown: 1
};

/**
 * The keyboard action categories for dropdown.
 */
export let DROPDOWN_KEYBOARD_ACTION;

/**
 * Dropdown size.
 */
(function (DROPDOWN_KEYBOARD_ACTION) {
  DROPDOWN_KEYBOARD_ACTION["NONE"] = "none";
  DROPDOWN_KEYBOARD_ACTION["CLOSING"] = "closing";
  DROPDOWN_KEYBOARD_ACTION["NAVIGATING"] = "navigating";
  DROPDOWN_KEYBOARD_ACTION["TRIGGERING"] = "triggering";
})(DROPDOWN_KEYBOARD_ACTION || (DROPDOWN_KEYBOARD_ACTION = {}));
export let DROPDOWN_SIZE;

/**
 * Dropdown types.
 */
(function (DROPDOWN_SIZE) {
  DROPDOWN_SIZE["SMALL"] = "sm";
  DROPDOWN_SIZE["MEDIUM"] = "md";
  DROPDOWN_SIZE["LARGE"] = "lg";
})(DROPDOWN_SIZE || (DROPDOWN_SIZE = {}));
export let DROPDOWN_TYPE;

/**
 * Dropdown direction.
 */
(function (DROPDOWN_TYPE) {
  DROPDOWN_TYPE["DEFAULT"] = "";
  DROPDOWN_TYPE["INLINE"] = "inline";
})(DROPDOWN_TYPE || (DROPDOWN_TYPE = {}));
export let DROPDOWN_DIRECTION;
(function (DROPDOWN_DIRECTION) {
  DROPDOWN_DIRECTION["TOP"] = "top";
  DROPDOWN_DIRECTION["BOTTOM"] = "bottom";
})(DROPDOWN_DIRECTION || (DROPDOWN_DIRECTION = {}));
//# sourceMappingURL=defs.js.map
