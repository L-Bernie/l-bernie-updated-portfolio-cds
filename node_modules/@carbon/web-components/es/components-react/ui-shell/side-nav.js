/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { SIDE_NAV_COLLAPSE_MODE, SIDE_NAV_USAGE_MODE } from '././defs.js';
export { default as CustomElement } from '../../components/ui-shell/side-nav.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = {
  onButtonToggle: {
    event: ''.concat(prefix, '-header-menu-button-toggled'),
  },
};
export var propTypes = {
  onButtonToggle: PropTypes.func,
};
const Component = createReactCustomElementType(
  ''.concat(prefix, '-side-nav'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
