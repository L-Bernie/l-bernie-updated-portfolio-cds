/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export {
  DATE_PICKER_INPUT_COLOR_SCHEME,
  DATE_PICKER_INPUT_KIND,
} from '././defs.js';
export { default as CustomElement } from '../../components/date-picker/date-picker-input.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = {};
export var propTypes = {};
const Component = createReactCustomElementType(
  ''.concat(prefix, '-date-picker-input'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
