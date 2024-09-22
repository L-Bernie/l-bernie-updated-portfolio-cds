/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { TABS_KEYBOARD_ACTION, TABS_TYPE } from '././defs.js';
export { NAVIGATION_DIRECTION } from '../content-switcher/content-switcher.js';
import { descriptor as parentDescriptor } from '../content-switcher/content-switcher.js';
import { propTypes as parentPropTypes } from '../content-switcher/content-switcher.js';
export { default as CustomElement } from '../../components/tabs/tabs.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = Object.assign({}, parentDescriptor, {
  onBeforeSelect: {
    event: ''.concat(prefix, '-tabs-beingselected'),
  },
  onSelect: {
    event: ''.concat(prefix, '-tabs-selected'),
  },
});
export var propTypes = Object.assign({}, parentPropTypes, {
  onBeforeSelect: PropTypes.func,
  onSelect: PropTypes.func,
});
const Component = createReactCustomElementType(
  ''.concat(prefix, '-tabs'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
