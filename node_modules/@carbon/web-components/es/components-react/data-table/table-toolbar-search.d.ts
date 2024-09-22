/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component } from 'react';
import { ComponentProps as ParentComponentProps } from '../search/search';
export interface ComponentProps extends ParentComponentProps {
  /**
   * The event handler for the custom event fired after the search content is changed upon a user gesture.
   */
  onInput?: (event: CustomEvent) => void;
}
/*[object Object]*/
declare class CDSTableToolbarSearch extends Component<ComponentProps> {}
export default CDSTableToolbarSearch;
