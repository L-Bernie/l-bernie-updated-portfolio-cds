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
   * The event handler for the custom event when Flatpickr throws an error.
   */
  onFlatpickrError?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired on this element when Flatpickr updates its value.
   */
  onChange?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/*[object Object]*/
declare class CDSDatePicker extends Component<ComponentProps> {}
export default CDSDatePicker;
