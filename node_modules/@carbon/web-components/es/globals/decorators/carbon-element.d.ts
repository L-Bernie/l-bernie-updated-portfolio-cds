/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { ClassDescriptor } from '@lit/reactive-element/decorators/base.js';
/**
 * Allow for custom element classes with private constructors
 */
type CustomElementClass = Omit<typeof HTMLElement, 'new'>;
/**
 * Class decorator factory that defines the decorated class as a custom element.
 *
 * ```js
 * @customElement('my-element')
 * class MyElement extends LitElement {
 *   render() {
 *     return html``;
 *   }
 * }
 * ```
 *
 * @category Decorator
 * @param tagName The tag name of the custom element to define.
 */
export declare const carbonElement: (tagName: string) => (classOrDescriptor: CustomElementClass | ClassDescriptor) => any;
export {};

//# sourceMappingURL=carbon-element.d.ts.map
