/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
export interface ComponentProps {
  /* eslint-enable no-constant-condition */
  /**
   * The event handler for the custom event fired before a new sort direction is set upon a user gesture.
   * Cancellation of this event stops the user-initiated change in sort direction.
   */
  onBeforeSort?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired during search bar input
   */
  onSearchInput?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired before header row is selected/unselected upon a user gesture.
   */
  onBeforeChangeSelectionAll?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired before a row is selected/unselected upon a user gesture.
   */
  onBeforeChangeSelection?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after the Cancel button is clicked.
   */
  onClickCancel?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after the expanded state a row is toggled upon a user gesture.
   */
  onExpandoToggle?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after a row has been selected
   */
  onTableRowSelect?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after all rows have been selected
   */
  onTableRowSelectAll?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after the table has been sorted
   */
  onTableSorted?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after the table has been filtered containing remaining rows.
   */
  onTableFiltered?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/*[object Object]*/
declare class CDSTable extends Component<ComponentProps> {}
export default CDSTable;
