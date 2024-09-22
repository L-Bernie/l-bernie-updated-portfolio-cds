/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { NAVIGATION_DIRECTION, CONTENT_SWITCHER_SIZE } from '././defs.js';
export { default as CustomElement } from '../../components/content-switcher/content-switcher.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = {
  onBeforeSelect: {
    event: ''.concat(prefix, '-content-switcher-beingselected'),
  },
  onSelect: {
    event: ''.concat(prefix, '-content-switcher-selected'),
  },
};
export var propTypes = {
  onBeforeSelect: PropTypes.func,
  onSelect: PropTypes.func,
};
const Component = createReactCustomElementType(
  ''.concat(prefix, '-content-switcher'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
