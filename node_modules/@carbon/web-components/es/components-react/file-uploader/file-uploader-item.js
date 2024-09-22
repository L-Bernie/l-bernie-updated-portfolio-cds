/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { FILE_UPLOADER_ITEM_SIZE, FILE_UPLOADER_ITEM_STATE } from '././defs.js';
export { default as CustomElement } from '../../components/file-uploader/file-uploader-item.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = {
  onBeforeDelete: {
    event: ''.concat(prefix, '-file-uploader-item-beingdeleted'),
  },
  onDelete: {
    event: ''.concat(prefix, '-file-uploader-item-deleted'),
  },
};
export var propTypes = {
  onBeforeDelete: PropTypes.func,
  onDelete: PropTypes.func,
};
const Component = createReactCustomElementType(
  ''.concat(prefix, '-file-uploader-item'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
