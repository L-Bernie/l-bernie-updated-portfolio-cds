"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TABS_TYPE = exports.TABS_KEYBOARD_ACTION = void 0;
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
let TABS_KEYBOARD_ACTION = exports.TABS_KEYBOARD_ACTION = void 0;
/**
 * Tabs types.
 */
(function (TABS_KEYBOARD_ACTION) {
  TABS_KEYBOARD_ACTION["NONE"] = "none";
  TABS_KEYBOARD_ACTION["NAVIGATING"] = "navigating";
  TABS_KEYBOARD_ACTION["HOME"] = "home";
  TABS_KEYBOARD_ACTION["END"] = "end";
})(TABS_KEYBOARD_ACTION || (exports.TABS_KEYBOARD_ACTION = TABS_KEYBOARD_ACTION = {}));
let TABS_TYPE = exports.TABS_TYPE = void 0;
(function (TABS_TYPE) {
  TABS_TYPE["REGULAR"] = "";
  TABS_TYPE["CONTAINER"] = "container";
  TABS_TYPE["CONTAINED"] = "contained";
})(TABS_TYPE || (exports.TABS_TYPE = TABS_TYPE = {}));
//# sourceMappingURL=defs.js.map
