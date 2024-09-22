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
   * The event handler for the custom event fired after a radio tile changes its selected state.
   */
  onCurrentRadioTileSelection?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after a radio tile changes its selected state.
   */
  onCurrentSelectableTilesSelection?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/*[object Object]*/
declare class CDSTileGroup extends Component<ComponentProps> {}
export default CDSTileGroup;
