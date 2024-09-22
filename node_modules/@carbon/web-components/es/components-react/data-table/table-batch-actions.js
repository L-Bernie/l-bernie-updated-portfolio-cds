/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/data-table/table-batch-actions.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = {
  onClickCancel: {
    event: ''.concat(prefix, '-table-batch-actions-cancel-clicked'),
  },
};
export var propTypes = {
  onClickCancel: PropTypes.func,
};
const Component = createReactCustomElementType(
  ''.concat(prefix, '-table-batch-actions'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
