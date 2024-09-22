"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TABLE_SORT_DIRECTION = exports.TABLE_SORT_CYCLES = exports.TABLE_SORT_CYCLE = exports.TABLE_SIZE = void 0;
/**
 * @license
 *
 * Copyright IBM Corp. 2020, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * Table size.
 */
let TABLE_SIZE = exports.TABLE_SIZE = void 0;
/**
 * Table sort state.
 */
(function (TABLE_SIZE) {
  TABLE_SIZE["XS"] = "xs";
  TABLE_SIZE["SM"] = "sm";
  TABLE_SIZE["MD"] = "md";
  TABLE_SIZE["LG"] = "lg";
  TABLE_SIZE["XL"] = "xl";
})(TABLE_SIZE || (exports.TABLE_SIZE = TABLE_SIZE = {}));
let TABLE_SORT_DIRECTION = exports.TABLE_SORT_DIRECTION = void 0;
/**
 * Table sort cycle.
 */
(function (TABLE_SORT_DIRECTION) {
  TABLE_SORT_DIRECTION["NONE"] = "none";
  TABLE_SORT_DIRECTION["ASCENDING"] = "ascending";
  TABLE_SORT_DIRECTION["DESCENDING"] = "descending";
})(TABLE_SORT_DIRECTION || (exports.TABLE_SORT_DIRECTION = TABLE_SORT_DIRECTION = {}));
let TABLE_SORT_CYCLE = exports.TABLE_SORT_CYCLE = void 0;
/**
 * Mapping of table sort cycles to table sort states.
 */
(function (TABLE_SORT_CYCLE) {
  TABLE_SORT_CYCLE["BI_STATES_FROM_ASCENDING"] = "bi-states-from-ascending";
  TABLE_SORT_CYCLE["BI_STATES_FROM_DESCENDING"] = "bi-states-from-descending";
  TABLE_SORT_CYCLE["TRI_STATES_FROM_ASCENDING"] = "tri-states-from-ascending";
  TABLE_SORT_CYCLE["TRI_STATES_FROM_DESCENDING"] = "tri-states-from-descending";
})(TABLE_SORT_CYCLE || (exports.TABLE_SORT_CYCLE = TABLE_SORT_CYCLE = {}));
const TABLE_SORT_CYCLES = exports.TABLE_SORT_CYCLES = {
  [TABLE_SORT_CYCLE.BI_STATES_FROM_ASCENDING]: [TABLE_SORT_DIRECTION.ASCENDING, TABLE_SORT_DIRECTION.DESCENDING],
  [TABLE_SORT_CYCLE.BI_STATES_FROM_DESCENDING]: [TABLE_SORT_DIRECTION.DESCENDING, TABLE_SORT_DIRECTION.ASCENDING],
  [TABLE_SORT_CYCLE.TRI_STATES_FROM_ASCENDING]: [TABLE_SORT_DIRECTION.NONE, TABLE_SORT_DIRECTION.ASCENDING, TABLE_SORT_DIRECTION.DESCENDING],
  [TABLE_SORT_CYCLE.TRI_STATES_FROM_DESCENDING]: [TABLE_SORT_DIRECTION.NONE, TABLE_SORT_DIRECTION.DESCENDING, TABLE_SORT_DIRECTION.ASCENDING]
};
//# sourceMappingURL=defs.js.map
