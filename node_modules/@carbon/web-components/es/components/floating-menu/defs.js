/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * The LTR/RTL direction used for positioning floating menu.
 */
export let FLOATING_MENU_POSITION_DIRECTION;

/**
 * The direction/positioning/orientation choices of floating menu.
 */
(function (FLOATING_MENU_POSITION_DIRECTION) {
  FLOATING_MENU_POSITION_DIRECTION["LTR"] = "ltr";
  FLOATING_MENU_POSITION_DIRECTION["RTL"] = "rtl";
})(FLOATING_MENU_POSITION_DIRECTION || (FLOATING_MENU_POSITION_DIRECTION = {}));
export let FLOATING_MENU_DIRECTION;
(function (FLOATING_MENU_DIRECTION) {
  FLOATING_MENU_DIRECTION["TOP"] = "top";
  FLOATING_MENU_DIRECTION["BOTTOM"] = "bottom";
})(FLOATING_MENU_DIRECTION || (FLOATING_MENU_DIRECTION = {}));
//# sourceMappingURL=defs.js.map
