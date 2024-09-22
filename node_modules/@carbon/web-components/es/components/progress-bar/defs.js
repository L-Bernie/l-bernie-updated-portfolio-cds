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
export let PROGRESS_BAR_STATUS;

/**
 * Size of progress bar.
 */
(function (PROGRESS_BAR_STATUS) {
  PROGRESS_BAR_STATUS["ACTIVE"] = "active";
  PROGRESS_BAR_STATUS["FINISHED"] = "finished";
  PROGRESS_BAR_STATUS["ERROR"] = "error";
})(PROGRESS_BAR_STATUS || (PROGRESS_BAR_STATUS = {}));
export let PROGRESS_BAR_SIZE;

/**
 * Defines the alignment variant of the progress bar.
 */
(function (PROGRESS_BAR_SIZE) {
  PROGRESS_BAR_SIZE["SMALL"] = "small";
  PROGRESS_BAR_SIZE["BIG"] = "big";
})(PROGRESS_BAR_SIZE || (PROGRESS_BAR_SIZE = {}));
export let PROGRESS_BAR_TYPE;
(function (PROGRESS_BAR_TYPE) {
  PROGRESS_BAR_TYPE["DEFAULT"] = "default";
  PROGRESS_BAR_TYPE["INLINE"] = "inline";
  PROGRESS_BAR_TYPE["INDENTED"] = "indented";
})(PROGRESS_BAR_TYPE || (PROGRESS_BAR_TYPE = {}));
//# sourceMappingURL=defs.js.map
