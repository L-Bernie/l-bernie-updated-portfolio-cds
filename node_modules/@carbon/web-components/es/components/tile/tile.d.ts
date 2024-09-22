/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { LitElement } from 'lit';
import { TILE_COLOR_SCHEME } from './defs';
export { TILE_COLOR_SCHEME };
/**
 * Basic tile.
 *
 * @element cds-tile
 */
declare class CDSTile extends LitElement {
    /**
     * `true` if there is a slug.
     */
    protected _hasSlug: boolean;
    /**
     * Handles `slotchange` event.
     */
    protected _handleSlotChange({ target }: Event): void;
    /**
     * The color scheme.
     */
    colorScheme: TILE_COLOR_SCHEME;
    /**
     * Specify if the `Tile` component should be rendered with rounded corners.
     * Only valid when `slug` prop is present
     */
    hasRoundedCorners: boolean;
    updated(): void;
    render(): import("lit-html").TemplateResult<1>;
    /**
     * A selector that will return the slug item.
     */
    static get slugItem(): string;
    static styles: any;
}
export default CDSTile;

//# sourceMappingURL=tile.d.ts.map
