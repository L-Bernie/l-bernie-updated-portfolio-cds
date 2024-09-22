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
   * The event handler for the custom event fired before a content switcher item is selected upon a user gesture.
   * Cancellation of this event stops changing the user-initiated selection.
   */
  onBeforeSelect?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after a a content switcher item is selected upon a user gesture.
   */
  onSelect?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
declare class CDSContentSwitcher extends Component<ComponentProps> {}
export default CDSContentSwitcher;
