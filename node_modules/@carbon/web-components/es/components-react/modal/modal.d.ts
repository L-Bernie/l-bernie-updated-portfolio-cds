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
   * The event handler for the custom event fired before this modal is being closed upon a user gesture.
   * Cancellation of this event stops the user-initiated action of closing this modal.
   */
  onBeforeClose?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after this modal is closed upon a user gesture.
   */
  onClose?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/*[object Object]*/
declare class CDSModal extends Component<ComponentProps> {}
export default CDSModal;
