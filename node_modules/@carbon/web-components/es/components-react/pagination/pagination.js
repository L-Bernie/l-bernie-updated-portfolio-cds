/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/pagination/pagination.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = {
  onChangeCurrent: {
    event: ''.concat(prefix, '-pagination-changed-current'),
  },
  onChangeSelect: {
    event: ''.concat(prefix, '-select-selected'),
  },
};
export var propTypes = {
  onChangeCurrent: PropTypes.func,
  onChangeSelect: PropTypes.func,
};
const Component = createReactCustomElementType(
  ''.concat(prefix, '-pagination'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
