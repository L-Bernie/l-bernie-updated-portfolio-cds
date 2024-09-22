/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2020
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
export { CODE_SNIPPET_COLOR_SCHEME, CODE_SNIPPET_TYPE } from '././defs.js';
export { default as CustomElement } from '../../components/code-snippet/code-snippet.js';
import createReactCustomElementType from '../../globals/wrappers/createReactCustomElementType.js';
import PropTypes from 'prop-types';
import { prefix } from '../../globals/settings.js';
export var descriptor = {};
export var propTypes = {};
const Component = createReactCustomElementType(
  ''.concat(prefix, '-code-snippet'),
  descriptor
);
Component.propTypes = propTypes;
export default Component;
