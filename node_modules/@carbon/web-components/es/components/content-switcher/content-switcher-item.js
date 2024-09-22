import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t,
  _t2,
  _t3;
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { LitElement, html } from 'lit';
import { property } from 'lit/decorators.js';
import { prefix } from '../../globals/settings';
import FocusMixin from '../../globals/mixins/focus';
import styles from "././content-switcher.css.js";
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';

/**
 * Content switcher button.
 *
 * @element cds-content-switcher-item
 */
let CDSContentSwitcherItem = _decorate([customElement(`${prefix}-content-switcher-item`)], function (_initialize, _FocusMixin) {
  class CDSContentSwitcherItem extends _FocusMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSContentSwitcherItem,
    d: [{
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "disabled",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'hide-divider'
      })],
      key: "hideDivider",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "selected",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property()],
      key: "target",
      value: void 0
    }, {
      kind: "field",
      decorators: [property()],
      key: "value",
      value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "icon",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        type: String
      })],
      key: "align",
      value() {
        return 'top';
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'close-on-activation',
        reflect: true,
        type: Boolean
      })],
      key: "closeOnActivation",
      value() {
        return true;
      }
    }, {
      kind: "field",
      key: "enterDelayMs",
      value() {
        return 100;
      }
    }, {
      kind: "field",
      key: "leaveDelayMs",
      value() {
        return 100;
      }
    }, {
      kind: "method",
      key: "updated",
      value:
      /**
       * `true` if this content switcher item should be disabled.
       */

      /**
       * `true` to hide the divider at the left.
       *
       * @private
       */

      /**
       * `true` if the content switcher button should be selected.
       *
       * @private
       */

      /**
       * The element ID of target panel.
       */

      /**
       * The `value` attribute that is set to the parent `<cds-content-switcher>`
       * when this content switcher item is selected.
       */

      /**
       * `true` if the content switcher button should be icon-only.
       */

      /**
       * Specify how the trigger should align with the tooltip for icon-only
       * switcher item
       */

      /**
       * Determines whether the tooltip should close when inner content is
       * activated (click, Enter or Space)
       */

      /**
       * Specify the duration in milliseconds to delay before displaying the
       * tooltip for icon-only switcher item
       */

      /**
       * Specify the duration in milliseconds to delay before hiding the tooltip
       * for icon-only switcher-item
       *
       * TODO: match upstream value once #10471 is resolved
       */

      function updated(changedProperties) {
        if (changedProperties) {
          var _this$shadowRoot;
          (_this$shadowRoot = this.shadowRoot) === null || _this$shadowRoot === void 0 || (_this$shadowRoot = _this$shadowRoot.querySelector(`${prefix}-tooltip`)) === null || _this$shadowRoot === void 0 || (_this$shadowRoot = _this$shadowRoot.shadowRoot) === null || _this$shadowRoot === void 0 || (_this$shadowRoot = _this$shadowRoot.querySelector(`.${prefix}--tooltip`)) === null || _this$shadowRoot === void 0 || _this$shadowRoot.classList.add(`${prefix}--icon-tooltip`);
        }
      }

      // eslint-disable-next-line class-methods-use-this
    }, {
      kind: "method",
      key: "_renderTooltipContent",
      value: function _renderTooltipContent() {
        return html(_t || (_t = _`
      <cds-tooltip-content>
        <slot name="tooltip-content"></slot>
      </cds-tooltip-content>
    `));
      }
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProperties) {
        if (changedProperties.has('selected') || changedProperties.has('target')) {
          const {
            selected,
            target
          } = this;
          if (target) {
            const doc = this.getRootNode();
            // `doc` can be an element if such element is orphaned
            const targetNode = doc === null || doc === void 0 ? void 0 : doc.getElementById(target);
            targetNode === null || targetNode === void 0 || targetNode.toggleAttribute('hidden', !selected);
          }
        }
        return true;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        const {
          disabled,
          selected,
          target
        } = this;
        const className = classMap({
          [`${prefix}--content-switcher-btn`]: true,
          [`${prefix}--content-switcher--selected`]: selected
        });
        const switcherItem = html(_t2 || (_t2 = _`<button
      type="button"
      role="tab"
      class="${0}"
      ?disabled="${0}"
      tabindex="${0}"
      aria-controls="${0}"
      aria-selected="${0}">
      <span class="${0}--content-switcher__label"><slot></slot></span>
    </button>`), className, disabled, selected ? '0' : '-1', ifDefined(target), Boolean(selected), prefix);
        if (this.icon) {
          const {
            align,
            closeOnActivation,
            enterDelayMs,
            leaveDelayMs
          } = this;
          return html(_t3 || (_t3 = _`<cds-tooltip
        align=${0}
        close-on-activation="${0}"
        enter-delay-ms=${0}
        leave-delay-ms=${0}>
        ${0} ${0}
      </cds-tooltip>`), align, closeOnActivation, enterDelayMs, leaveDelayMs, switcherItem, this._renderTooltipContent());
        }
        return switcherItem;
      }
    }, {
      kind: "field",
      static: true,
      key: "shadowRootOptions",
      value() {
        return _objectSpread(_objectSpread({}, LitElement.shadowRootOptions), {}, {
          delegatesFocus: true
        });
      }
    }, {
      kind: "field",
      static: true,
      key: "styles",
      value() {
        return styles;
      }
    }]
  };
}, FocusMixin(LitElement));
export { CDSContentSwitcherItem as default };
//# sourceMappingURL=content-switcher-item.js.map
