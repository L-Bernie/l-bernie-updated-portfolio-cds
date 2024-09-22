/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export {
  INPUT_COLOR_SCHEME,
  INPUT_SIZE,
  INPUT_TOOLTIP_ALIGNMENT,
  INPUT_TOOLTIP_DIRECTION,
  INPUT_TYPE,
} from '././defs.js';
export { default as CustomElement } from '../../components/text-input/text-input.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = {};
export var propTypes = {};
const Component = createReactCustomElementType(
  ''.concat(prefix, '-text-input'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
