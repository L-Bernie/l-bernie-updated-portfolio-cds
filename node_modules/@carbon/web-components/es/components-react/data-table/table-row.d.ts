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
  /**
   * The event handler for the custom event fired after this radio button changes its checked state.
   */
  onRadioChange?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after this radio button changes its checked state.
   */
  onCheckboxChange?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired before this row is selected/unselected upon a user gesture.
   * Cancellation of this event stops the user-initiated change in selection.
   */
  onBeforeChangeSelection?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired before the expanded state this row is being toggled upon a user gesture.
   * Cancellation of this event stops the user-initiated action of toggling the expanded state.
   */
  onBeforeExpandoToggle?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after the expanded state this row is toggled upon a user gesture.
   */
  onExpandoToggle?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/*[object Object]*/
declare class CDSTableRow extends Component<ComponentProps> {}
export default CDSTableRow;
