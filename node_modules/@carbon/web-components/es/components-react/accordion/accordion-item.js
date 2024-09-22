/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { ACCORDION_ITEM_BREAKPOINT } from '././defs.js';
export { default as CustomElement } from '../../components/accordion/accordion-item.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = {
  onBeforeToggle: {
    event: ''.concat(prefix, '-accordion-item-beingtoggled'),
  },
  onToggle: {
    event: ''.concat(prefix, '-accordion-item-toggled'),
  },
};
export var propTypes = {
  onBeforeToggle: PropTypes.func,
  onToggle: PropTypes.func,
};
const Component = createReactCustomElementType(
  ''.concat(prefix, '-accordion-item'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
