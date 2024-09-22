/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/ui-shell/header-menu-button.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = {
  onToggle: {
    event: ''.concat(prefix, '-header-menu-button-toggled'),
  },
};
export var propTypes = {
  onToggle: PropTypes.func,
};
const Component = createReactCustomElementType(
  ''.concat(prefix, '-header-menu-button'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
