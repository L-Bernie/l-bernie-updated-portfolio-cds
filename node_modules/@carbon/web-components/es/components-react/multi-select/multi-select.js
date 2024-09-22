/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { SELECTION_FEEDBACK_OPTION } from '././defs.js';
export {
  DROPDOWN_SIZE,
  DROPDOWN_TYPE,
  DROPDOWN_DIRECTION,
} from '../dropdown/dropdown.js';
import { descriptor as parentDescriptor } from '../dropdown/dropdown.js';
import { propTypes as parentPropTypes } from '../dropdown/dropdown.js';
export { default as CustomElement } from '../../components/multi-select/multi-select.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = Object.assign({}, parentDescriptor, {
  onBeforeToggle: {
    event: ''.concat(prefix, '-multi-select-beingtoggled'),
  },
  onToggle: {
    event: ''.concat(prefix, '-multi-select-toggled'),
  },
  onBeforeSelect: {
    event: ''.concat(prefix, '-multi-select-beingselected'),
  },
  onSelect: {
    event: ''.concat(prefix, '-multi-select-selected'),
  },
});
export var propTypes = Object.assign({}, parentPropTypes, {
  onBeforeToggle: PropTypes.func,
  onToggle: PropTypes.func,
  onBeforeSelect: PropTypes.func,
  onSelect: PropTypes.func,
});
const Component = createReactCustomElementType(
  ''.concat(prefix, '-multi-select'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
