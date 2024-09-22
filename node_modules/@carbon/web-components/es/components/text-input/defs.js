/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

export { FORM_ELEMENT_COLOR_SCHEME as INPUT_COLOR_SCHEME } from '../../globals/shared-enums';

/**
 * Input size.
 */
export let INPUT_SIZE;

/**
 * Input tooltop alignment
 */
(function (INPUT_SIZE) {
  INPUT_SIZE["SMALL"] = "sm";
  INPUT_SIZE["MEDIUM"] = "md";
  INPUT_SIZE["LARGE"] = "lg";
  INPUT_SIZE["EXTRA_LARGE"] = "xl";
})(INPUT_SIZE || (INPUT_SIZE = {}));
export let INPUT_TOOLTIP_ALIGNMENT;

/**
 * Input tooltop direction
 */
(function (INPUT_TOOLTIP_ALIGNMENT) {
  INPUT_TOOLTIP_ALIGNMENT["START"] = "start";
  INPUT_TOOLTIP_ALIGNMENT["CENTER"] = "center";
  INPUT_TOOLTIP_ALIGNMENT["END"] = "end";
})(INPUT_TOOLTIP_ALIGNMENT || (INPUT_TOOLTIP_ALIGNMENT = {}));
export let INPUT_TOOLTIP_DIRECTION;

/**
 * Supported input types.
 *
 * For this component we only support textual types
 */
(function (INPUT_TOOLTIP_DIRECTION) {
  INPUT_TOOLTIP_DIRECTION["TOP"] = "top";
  INPUT_TOOLTIP_DIRECTION["RIGHT"] = "right";
  INPUT_TOOLTIP_DIRECTION["BOTTOM"] = "bottom";
  INPUT_TOOLTIP_DIRECTION["LEFT"] = "left";
})(INPUT_TOOLTIP_DIRECTION || (INPUT_TOOLTIP_DIRECTION = {}));
export let INPUT_TYPE;
(function (INPUT_TYPE) {
  INPUT_TYPE["EMAIL"] = "email";
  INPUT_TYPE["PASSWORD"] = "password";
  INPUT_TYPE["TEL"] = "tel";
  INPUT_TYPE["TEXT"] = "text";
  INPUT_TYPE["URL"] = "url";
})(INPUT_TYPE || (INPUT_TYPE = {}));
//# sourceMappingURL=defs.js.map
