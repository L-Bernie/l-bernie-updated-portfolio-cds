/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { TAG_SIZE, TAG_TYPE } from '././defs.js';
export { default as CustomElement } from '../../components/tag/tag.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = {
  onBeforeClose: {
    event: ''.concat(prefix, '-tag-beingclosed'),
  },
  onClose: {
    event: ''.concat(prefix, '-tag-closed'),
  },
};
export var propTypes = {
  onBeforeClose: PropTypes.func,
  onClose: PropTypes.func,
};
const Component = createReactCustomElementType(
  ''.concat(prefix, '-tag'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
