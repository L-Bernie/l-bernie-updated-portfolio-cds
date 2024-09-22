/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Button kind.
 */
export let BUTTON_KIND;

/**
 * Button type.
 */
(function (BUTTON_KIND) {
  BUTTON_KIND["PRIMARY"] = "primary";
  BUTTON_KIND["SECONDARY"] = "secondary";
  BUTTON_KIND["TERTIARY"] = "tertiary";
  BUTTON_KIND["GHOST"] = "ghost";
  BUTTON_KIND["DANGER"] = "danger";
  BUTTON_KIND["DANGER_PRIMARY"] = "danger-primary";
  BUTTON_KIND["DANGER_TERTIARY"] = "danger-tertiary";
  BUTTON_KIND["DANGER_GHOST"] = "danger-ghost";
})(BUTTON_KIND || (BUTTON_KIND = {}));
export let BUTTON_TYPE;

/**
 * Button size.
 */
(function (BUTTON_TYPE) {
  BUTTON_TYPE["BUTTON"] = "button";
  BUTTON_TYPE["RESET"] = "reset";
  BUTTON_TYPE["SUBMIT"] = "submit";
})(BUTTON_TYPE || (BUTTON_TYPE = {}));
export let BUTTON_SIZE;

/**
 * Button tooltip alignment.
 */
(function (BUTTON_SIZE) {
  BUTTON_SIZE["SMALL"] = "sm";
  BUTTON_SIZE["MEDIUM"] = "md";
  BUTTON_SIZE["LARGE"] = "lg";
  BUTTON_SIZE["EXTRA_LARGE"] = "xl";
  BUTTON_SIZE["EXTRA_EXTRA_LARGE"] = "2xl";
})(BUTTON_SIZE || (BUTTON_SIZE = {}));
export let BUTTON_TOOLTIP_ALIGNMENT;

/**
 * Button tooltip position.
 */
(function (BUTTON_TOOLTIP_ALIGNMENT) {
  BUTTON_TOOLTIP_ALIGNMENT["START"] = "left";
  BUTTON_TOOLTIP_ALIGNMENT["CENTER"] = "";
  BUTTON_TOOLTIP_ALIGNMENT["END"] = "right";
})(BUTTON_TOOLTIP_ALIGNMENT || (BUTTON_TOOLTIP_ALIGNMENT = {}));
export let BUTTON_TOOLTIP_POSITION;
(function (BUTTON_TOOLTIP_POSITION) {
  BUTTON_TOOLTIP_POSITION["TOP"] = "top";
  BUTTON_TOOLTIP_POSITION["RIGHT"] = "right";
  BUTTON_TOOLTIP_POSITION["BOTTOM"] = "bottom";
  BUTTON_TOOLTIP_POSITION["LEFT"] = "left";
})(BUTTON_TOOLTIP_POSITION || (BUTTON_TOOLTIP_POSITION = {}));
//# sourceMappingURL=defs.js.map
