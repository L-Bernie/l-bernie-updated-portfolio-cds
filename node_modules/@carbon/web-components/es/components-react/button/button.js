/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export {
  BUTTON_KIND,
  BUTTON_TYPE,
  BUTTON_SIZE,
  BUTTON_TOOLTIP_ALIGNMENT,
  BUTTON_TOOLTIP_POSITION,
} from '././defs.js';
export { default as CustomElement } from '../../components/button/button.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = {};
export var propTypes = {};
const Component = createReactCustomElementType(
  ''.concat(prefix, '-button'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
