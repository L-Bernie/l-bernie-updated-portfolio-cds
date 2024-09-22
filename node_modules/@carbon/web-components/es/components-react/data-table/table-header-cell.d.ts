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
   * The event handler for the custom event fired before a new sort direction is set upon a user gesture.
   * Cancellation of this event stops the user-initiated change in sort direction.
   */
  onBeforeSort?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/*[object Object]*/
declare class CDSTableHeaderCell extends Component<ComponentProps> {}
export default CDSTableHeaderCell;
