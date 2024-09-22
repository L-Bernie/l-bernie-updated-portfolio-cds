/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * The keyboard action categories for dropdown.
 */
export let TABS_KEYBOARD_ACTION;

/**
 * Tabs types.
 */
(function (TABS_KEYBOARD_ACTION) {
  TABS_KEYBOARD_ACTION["NONE"] = "none";
  TABS_KEYBOARD_ACTION["NAVIGATING"] = "navigating";
  TABS_KEYBOARD_ACTION["HOME"] = "home";
  TABS_KEYBOARD_ACTION["END"] = "end";
})(TABS_KEYBOARD_ACTION || (TABS_KEYBOARD_ACTION = {}));
export let TABS_TYPE;
(function (TABS_TYPE) {
  TABS_TYPE["REGULAR"] = "";
  TABS_TYPE["CONTAINER"] = "container";
  TABS_TYPE["CONTAINED"] = "contained";
})(TABS_TYPE || (TABS_TYPE = {}));
//# sourceMappingURL=defs.js.map
