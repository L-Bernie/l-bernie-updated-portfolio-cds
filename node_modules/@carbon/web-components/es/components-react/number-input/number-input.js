/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { NUMBER_INPUT_VALIDATION_STATUS } from '././defs.js';
import { descriptor as parentDescriptor } from '../text-input/text-input.js';
import { propTypes as parentPropTypes } from '../text-input/text-input.js';
export { default as CustomElement } from '../../components/number-input/number-input.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = Object.assign({}, parentDescriptor, {
  onInput: {
    event: ''.concat(prefix, '-number-input'),
  },
});
export var propTypes = Object.assign({}, parentPropTypes, {
  onInput: PropTypes.func,
});
const Component = createReactCustomElementType(
  ''.concat(prefix, '-number-input'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
