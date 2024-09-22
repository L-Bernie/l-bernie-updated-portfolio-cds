/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { FORM_ELEMENT_COLOR_SCHEME as TILE_COLOR_SCHEME } from '../../globals/shared-enums.js';
export { default as CustomElement } from '../../components/file-uploader/file-uploader-drop-container.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = {
  onChange: {
    event: ''.concat(prefix, '-file-uploader-drop-container-changed'),
  },
};
export var propTypes = {
  onChange: PropTypes.func,
};
const Component = createReactCustomElementType(
  ''.concat(prefix, '-file-uploader-drop-container'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
