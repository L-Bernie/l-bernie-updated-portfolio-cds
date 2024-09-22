/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { descriptor as parentDescriptor } from '../floating-menu/floating-menu.js';
import { propTypes as parentPropTypes } from '../floating-menu/floating-menu.js';
export { default as CustomElement } from '../../components/overflow-menu/overflow-menu-body.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = Object.assign({}, parentDescriptor, {});
export var propTypes = Object.assign({}, parentPropTypes, {});
const Component = createReactCustomElementType(
  ''.concat(prefix, '-overflow-menu-body'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
