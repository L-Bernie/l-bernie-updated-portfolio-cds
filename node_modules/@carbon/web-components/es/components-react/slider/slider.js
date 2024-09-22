/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/slider/slider.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = {
  onChange: {
    event: ''.concat(prefix, '-slider-changed'),
  },
  onChangeInput: {
    event: ''.concat(prefix, '-slider-input-changed'),
  },
};
export var propTypes = {
  onChange: PropTypes.func,
  onChangeInput: PropTypes.func,
};
const Component = createReactCustomElementType(
  ''.concat(prefix, '-slider'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
