/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { default as CustomElement } from '../../components/data-table/table-row.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = {
  onRadioChange: {
    event: ''.concat(prefix, '-radio-button-changed'),
  },
  onCheckboxChange: {
    event: ''.concat(prefix, '-checkbox-changed'),
  },
  onBeforeChangeSelection: {
    event: ''.concat(prefix, '-table-row-change-selection'),
  },
  onBeforeExpandoToggle: {
    event: ''.concat(prefix, '-table-row-expando-beingtoggled'),
  },
  onExpandoToggle: {
    event: ''.concat(prefix, '-table-row-expando-toggled'),
  },
};
export var propTypes = {
  onRadioChange: PropTypes.func,
  onCheckboxChange: PropTypes.func,
  onBeforeChangeSelection: PropTypes.func,
  onBeforeExpandoToggle: PropTypes.func,
  onExpandoToggle: PropTypes.func,
};
const Component = createReactCustomElementType(
  ''.concat(prefix, '-table-row'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
