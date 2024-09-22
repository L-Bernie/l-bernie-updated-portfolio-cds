"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PROGRESS_BAR_TYPE = exports.PROGRESS_BAR_STATUS = exports.PROGRESS_BAR_SIZE = void 0;
/**
 * @license
 *
 * Copyright IBM Corp. 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * Status of progress bar.
 */
let PROGRESS_BAR_STATUS = exports.PROGRESS_BAR_STATUS = void 0;
/**
 * Size of progress bar.
 */
(function (PROGRESS_BAR_STATUS) {
  PROGRESS_BAR_STATUS["ACTIVE"] = "active";
  PROGRESS_BAR_STATUS["FINISHED"] = "finished";
  PROGRESS_BAR_STATUS["ERROR"] = "error";
})(PROGRESS_BAR_STATUS || (exports.PROGRESS_BAR_STATUS = PROGRESS_BAR_STATUS = {}));
let PROGRESS_BAR_SIZE = exports.PROGRESS_BAR_SIZE = void 0;
/**
 * Defines the alignment variant of the progress bar.
 */
(function (PROGRESS_BAR_SIZE) {
  PROGRESS_BAR_SIZE["SMALL"] = "small";
  PROGRESS_BAR_SIZE["BIG"] = "big";
})(PROGRESS_BAR_SIZE || (exports.PROGRESS_BAR_SIZE = PROGRESS_BAR_SIZE = {}));
let PROGRESS_BAR_TYPE = exports.PROGRESS_BAR_TYPE = void 0;
(function (PROGRESS_BAR_TYPE) {
  PROGRESS_BAR_TYPE["DEFAULT"] = "default";
  PROGRESS_BAR_TYPE["INLINE"] = "inline";
  PROGRESS_BAR_TYPE["INDENTED"] = "indented";
})(PROGRESS_BAR_TYPE || (exports.PROGRESS_BAR_TYPE = PROGRESS_BAR_TYPE = {}));
//# sourceMappingURL=defs.js.map
