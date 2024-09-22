/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2022, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * The state of `<cds-file-uploader-item>`.
 */
export let FILE_UPLOADER_ITEM_STATE;

/**
 * File uploader item size.
 */
(function (FILE_UPLOADER_ITEM_STATE) {
  FILE_UPLOADER_ITEM_STATE["UPLOADING"] = "uploading";
  FILE_UPLOADER_ITEM_STATE["COMPLETE"] = "complete";
  FILE_UPLOADER_ITEM_STATE["EDIT"] = "edit";
})(FILE_UPLOADER_ITEM_STATE || (FILE_UPLOADER_ITEM_STATE = {}));
export let FILE_UPLOADER_ITEM_SIZE;
(function (FILE_UPLOADER_ITEM_SIZE) {
  FILE_UPLOADER_ITEM_SIZE["SMALL"] = "sm";
  FILE_UPLOADER_ITEM_SIZE["MEDIUM"] = "md";
  FILE_UPLOADER_ITEM_SIZE["LARGE"] = "lg";
})(FILE_UPLOADER_ITEM_SIZE || (FILE_UPLOADER_ITEM_SIZE = {}));
//# sourceMappingURL=defs.js.map
