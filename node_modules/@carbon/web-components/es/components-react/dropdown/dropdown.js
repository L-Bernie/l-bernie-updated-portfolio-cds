/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export {
  DROPDOWN_KEYBOARD_ACTION,
  DROPDOWN_DIRECTION,
  DROPDOWN_SIZE,
  DROPDOWN_TYPE,
  NAVIGATION_DIRECTION,
} from '././defs.js';
export { default as CustomElement } from '../../components/dropdown/dropdown.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = {
  onBeforeSelect: {
    event: ''.concat(prefix, '-dropdown-beingselected'),
  },
  onSelect: {
    event: ''.concat(prefix, '-dropdown-selected'),
  },
  onBeforeToggle: {
    event: ''.concat(prefix, '-dropdown-beingtoggled'),
  },
  onToggle: {
    event: ''.concat(prefix, '-dropdown-toggled'),
  },
};
export var propTypes = {
  onBeforeSelect: PropTypes.func,
  onSelect: PropTypes.func,
  onBeforeToggle: PropTypes.func,
  onToggle: PropTypes.func,
};
const Component = createReactCustomElementType(
  ''.concat(prefix, '-dropdown'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
