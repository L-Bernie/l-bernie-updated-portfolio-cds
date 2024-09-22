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
   * The event handler for the custom event fired before this notification is being closed upon a user gesture.
   * Cancellation of this event stops the user-initiated action of closing this notification.
   */
  onBeforeClose?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after this notification is closed upon a user gesture.
   */
  onClose?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/*[object Object]*/
declare class CDSInlineNotification extends Component<ComponentProps> {}
export default CDSInlineNotification;
