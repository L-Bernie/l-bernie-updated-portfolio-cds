/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
import { ComponentProps as ParentComponentProps } from '../text-input/text-input';
export interface ComponentProps extends ParentComponentProps {
  /**
   * The event handler for the custom event fired after the value is changed upon a user gesture.
   */
  onInput?: (event: CustomEvent) => void;
}
/*[object Object]*/
declare class CDSNumberInput extends Component<ComponentProps> {}
export default CDSNumberInput;
