/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { TABLE_SIZE } from '././defs.js';
export { default as CustomElement } from '../../components/data-table/table.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = {
  onBeforeSort: {
    event: ''.concat(prefix, '-table-header-cell-sort'),
  },
  onSearchInput: {
    event: ''.concat(prefix, '-search-input'),
  },
  onBeforeChangeSelectionAll: {
    event: ''.concat(prefix, '-table-change-selection-all'),
  },
  onBeforeChangeSelection: {
    event: ''.concat(prefix, '-table-row-change-selection'),
  },
  onClickCancel: {
    event: ''.concat(prefix, '-table-batch-actions-cancel-clicked'),
  },
  onExpandoToggle: {
    event: ''.concat(prefix, '-table-row-expando-toggled'),
  },
  onTableRowSelect: {
    event: ''.concat(prefix, '-table-row-selected'),
  },
  onTableRowSelectAll: {
    event: ''.concat(prefix, '-table-row-all-selected'),
  },
  onTableSorted: {
    event: ''.concat(prefix, '-table-sorted'),
  },
  onTableFiltered: {
    event: ''.concat(prefix, '-table-filtered'),
  },
};
export var propTypes = {
  onBeforeSort: PropTypes.func,
  onSearchInput: PropTypes.func,
  onBeforeChangeSelectionAll: PropTypes.func,
  onBeforeChangeSelection: PropTypes.func,
  onClickCancel: PropTypes.func,
  onExpandoToggle: PropTypes.func,
  onTableRowSelect: PropTypes.func,
  onTableRowSelectAll: PropTypes.func,
  onTableSorted: PropTypes.func,
  onTableFiltered: PropTypes.func,
};
const Component = createReactCustomElementType(
  ''.concat(prefix, '-table'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
