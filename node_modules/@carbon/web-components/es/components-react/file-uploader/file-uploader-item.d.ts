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
   * The event handler for the custom event fired before this file uplodaer item is being deleted upon a user gesture.
   * Cancellation of this event stops the user-initiated action of deleting this file uploader item.
   */
  onBeforeDelete?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after this file uplodaer item is deleted upon a user gesture.
   */
  onDelete?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/*[object Object]*/
declare class CDSFileUploaderItem extends Component<ComponentProps> {}
export default CDSFileUploaderItem;
