/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export {
  PROGRESS_BAR_SIZE,
  PROGRESS_BAR_STATUS,
  PROGRESS_BAR_TYPE,
} from '././defs.js';
export { default as CustomElement } from '../../components/progress-bar/progress-bar.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = {};
export var propTypes = {};
const Component = createReactCustomElementType(
  ''.concat(prefix, '-progress-bar'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
