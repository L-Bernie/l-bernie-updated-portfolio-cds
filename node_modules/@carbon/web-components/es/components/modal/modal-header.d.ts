/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit';
/**
 * Modal header.
 *
 * @element cds-modal-header
 */
declare class CDSModalHeader extends LitElement {
    /**
     * `true` if there is a slug.
     */
    protected _hasSlug: boolean;
    /**
     * Handles `slotchange` event.
     */
    protected _handleSlotChange({ target }: Event): void;
    updated(): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * A selector that will return the slug item.
     */
    static get slugItem(): string;
    static styles: any;
}
export default CDSModalHeader;

//# sourceMappingURL=modal-header.d.ts.map
