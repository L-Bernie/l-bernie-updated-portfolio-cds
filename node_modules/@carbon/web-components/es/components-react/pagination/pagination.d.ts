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
   * The event handler for the custom event fired after the current row number is changed.
   */
  onChangeCurrent?: (event: CustomEvent) => void;
  /**
   * The event handler for the custom event fired after the number of rows per page is changed from `<cds-page-sizes-select>`.
   */
  onChangeSelect?: (event: CustomEvent) => void;
  [prop: string]: unknown;
}
/*[object Object]*/
declare class CDSPagination extends Component<ComponentProps> {}
export default CDSPagination;
