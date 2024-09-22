/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
import { ComponentProps as ParentComponentProps } from '../dropdown/dropdown';
export interface ComponentProps extends ParentComponentProps {
  /**
   * The event handler for the custom event fired before this multi select item is being toggled upon a user gesture.
   * Cancellation of this event stops the user-initiated action of toggling this multi select item.
   */
  onBeforeToggle?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after this multi select item is toggled upon a user gesture.
   */
  onToggle?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired before a multi select item is selected upon a user gesture.
   * Cancellation of this event stops changing the user-initiated selection.
   */
  onBeforeSelect?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after a a multi select item is selected upon a user gesture.
   */
  onSelect?: (event: CustomEvent) => void;
}
/*[object Object]*/
declare class CDSMultiSelect extends Component<ComponentProps> {}
export default CDSMultiSelect;
