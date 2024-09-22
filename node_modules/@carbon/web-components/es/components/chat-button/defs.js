/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2024
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Chat Button size.
 */
export let CHAT_BUTTON_SIZE;

/**
 * Chat button kind.
 */
(function (CHAT_BUTTON_SIZE) {
  CHAT_BUTTON_SIZE["SMALL"] = "sm";
  CHAT_BUTTON_SIZE["MEDIUM"] = "md";
  CHAT_BUTTON_SIZE["LARGE"] = "lg";
})(CHAT_BUTTON_SIZE || (CHAT_BUTTON_SIZE = {}));
export let CHAT_BUTTON_KIND;
(function (CHAT_BUTTON_KIND) {
  CHAT_BUTTON_KIND["PRIMARY"] = "primary";
  CHAT_BUTTON_KIND["SECONDARY"] = "secondary";
  CHAT_BUTTON_KIND["TERTIARY"] = "tertiary";
  CHAT_BUTTON_KIND["GHOST"] = "ghost";
  CHAT_BUTTON_KIND["DANGER"] = "danger";
})(CHAT_BUTTON_KIND || (CHAT_BUTTON_KIND = {}));
//# sourceMappingURL=defs.js.map
