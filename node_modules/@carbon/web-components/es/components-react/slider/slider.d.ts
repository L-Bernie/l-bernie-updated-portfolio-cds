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
   * The event handler for the custom event fired after the value is changed by user gesture.
   */
  onChange?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after the value is changed in `<cds-slider-input>` by user gesture.
   */
  onChangeInput?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/*[object Object]*/
declare class CDSSlider extends Component<ComponentProps> {}
export default CDSSlider;
