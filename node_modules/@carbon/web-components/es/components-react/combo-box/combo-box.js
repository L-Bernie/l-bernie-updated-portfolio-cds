/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { DROPDOWN_DIRECTION, DROPDOWN_SIZE } from '../dropdown/dropdown.js';
import { descriptor as parentDescriptor } from '../dropdown/dropdown.js';
import { propTypes as parentPropTypes } from '../dropdown/dropdown.js';
export { default as CustomElement } from '../../components/combo-box/combo-box.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = Object.assign({}, parentDescriptor, {
  onBeforeToggle: {
    event: ''.concat(prefix, '-combo-box-beingtoggled'),
  },
  onToggle: {
    event: ''.concat(prefix, '-combo-box-toggled'),
  },
  onBeforeSelect: {
    event: ''.concat(prefix, '-combo-box-beingselected'),
  },
  onSelect: {
    event: ''.concat(prefix, '-combo-box-selected'),
  },
});
export var propTypes = Object.assign({}, parentPropTypes, {
  onBeforeToggle: PropTypes.func,
  onToggle: PropTypes.func,
  onBeforeSelect: PropTypes.func,
  onSelect: PropTypes.func,
});
const Component = createReactCustomElementType(
  ''.concat(prefix, '-combo-box'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
