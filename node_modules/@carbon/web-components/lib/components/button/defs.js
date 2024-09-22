"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BUTTON_TYPE = exports.BUTTON_TOOLTIP_POSITION = exports.BUTTON_TOOLTIP_ALIGNMENT = exports.BUTTON_SIZE = exports.BUTTON_KIND = void 0;
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
let BUTTON_KIND = exports.BUTTON_KIND = void 0;
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
})(BUTTON_KIND || (exports.BUTTON_KIND = BUTTON_KIND = {}));
let BUTTON_TYPE = exports.BUTTON_TYPE = void 0;
/**
 * Button size.
 */
(function (BUTTON_TYPE) {
  BUTTON_TYPE["BUTTON"] = "button";
  BUTTON_TYPE["RESET"] = "reset";
  BUTTON_TYPE["SUBMIT"] = "submit";
})(BUTTON_TYPE || (exports.BUTTON_TYPE = BUTTON_TYPE = {}));
let BUTTON_SIZE = exports.BUTTON_SIZE = void 0;
/**
 * Button tooltip alignment.
 */
(function (BUTTON_SIZE) {
  BUTTON_SIZE["SMALL"] = "sm";
  BUTTON_SIZE["MEDIUM"] = "md";
  BUTTON_SIZE["LARGE"] = "lg";
  BUTTON_SIZE["EXTRA_LARGE"] = "xl";
  BUTTON_SIZE["EXTRA_EXTRA_LARGE"] = "2xl";
})(BUTTON_SIZE || (exports.BUTTON_SIZE = BUTTON_SIZE = {}));
let BUTTON_TOOLTIP_ALIGNMENT = exports.BUTTON_TOOLTIP_ALIGNMENT = void 0;
/**
 * Button tooltip position.
 */
(function (BUTTON_TOOLTIP_ALIGNMENT) {
  BUTTON_TOOLTIP_ALIGNMENT["START"] = "left";
  BUTTON_TOOLTIP_ALIGNMENT["CENTER"] = "";
  BUTTON_TOOLTIP_ALIGNMENT["END"] = "right";
})(BUTTON_TOOLTIP_ALIGNMENT || (exports.BUTTON_TOOLTIP_ALIGNMENT = BUTTON_TOOLTIP_ALIGNMENT = {}));
let BUTTON_TOOLTIP_POSITION = exports.BUTTON_TOOLTIP_POSITION = void 0;
(function (BUTTON_TOOLTIP_POSITION) {
  BUTTON_TOOLTIP_POSITION["TOP"] = "top";
  BUTTON_TOOLTIP_POSITION["RIGHT"] = "right";
  BUTTON_TOOLTIP_POSITION["BOTTOM"] = "bottom";
  BUTTON_TOOLTIP_POSITION["LEFT"] = "left";
})(BUTTON_TOOLTIP_POSITION || (exports.BUTTON_TOOLTIP_POSITION = BUTTON_TOOLTIP_POSITION = {}));
//# sourceMappingURL=defs.js.map
