/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/tile/tile-group.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = {
  onCurrentRadioTileSelection: {
    event: ''.concat(prefix, '-current-radio-tile-selection'),
  },
  onCurrentSelectableTilesSelection: {
    event: ''.concat(prefix, '-current-selectable-tile-selections'),
  },
};
export var propTypes = {
  onCurrentRadioTileSelection: PropTypes.func,
  onCurrentSelectableTilesSelection: PropTypes.func,
};
const Component = createReactCustomElementType(
  ''.concat(prefix, '-tile-group'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
