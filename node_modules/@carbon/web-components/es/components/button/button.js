import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
import _decorate from "@babel/runtime/helpers/esm/decorate";
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4,
  _t5;
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
import { BUTTON_KIND, BUTTON_TYPE, BUTTON_SIZE, BUTTON_TOOLTIP_ALIGNMENT, BUTTON_TOOLTIP_POSITION } from './defs';
import styles from "././button.css.js";
import HostListener from '../../globals/decorators/host-listener';
import HostListenerMixin from '../../globals/mixins/host-listener';
import { carbonElement as customElement } from '../../globals/decorators/carbon-element';
export { BUTTON_KIND, BUTTON_TYPE, BUTTON_SIZE, BUTTON_TOOLTIP_ALIGNMENT, BUTTON_TOOLTIP_POSITION };

/**
 * Button.
 *
 * @element cds-button
 * @csspart button The button.
 */
let CDSButton = _decorate([customElement(`${prefix}-button`)], function (_initialize, _HostListenerMixin) {
  class CDSButton extends _HostListenerMixin {
    constructor(...args) {
      super(...args);
      _initialize(this);
    }
  }
  return {
    F: CDSButton,
    d: [{
      kind: "field",
      key: "_hasIcon",
      value() {
        return false;
      }
    }, {
      kind: "method",
      key: "_handleSlotChange",
      value:
      /**
       * `true` if there is an icon.
       */

      /**
       * Handles `slotchange` event.
       */
      function _handleSlotChange({
        target
      }) {
        const {
          name
        } = target;
        const hasContent = target.assignedNodes().some(node => node.nodeType !== Node.TEXT_NODE || node.textContent.trim());
        this[name === 'icon' ? '_hasIcon' : 'hasMainContent'] = hasContent;
        this.requestUpdate();
      }
    }, {
      kind: "method",
      decorators: [HostListener('click', {
        capture: true
      })],
      key: "_handleDisabledClick",
      value: function _handleDisabledClick(event) {
        const {
          disabled
        } = this;
        if (disabled) {
          event.stopPropagation();
        }
      }
    }, {
      kind: "field",
      decorators: [HostListener('mouseover')],
      key: "_handleOver",
      value() {
        return () => {
          this.openTooltip = true;
        };
      }
    }, {
      kind: "field",
      decorators: [HostListener('mouseout')],
      key: "_handleHoverOut",
      value() {
        return async () => {
          this.openTooltip = false;
        };
      }
    }, {
      kind: "field",
      decorators: [HostListener('focus')],
      key: "_handleFocus",
      value() {
        return async () => {
          this.openTooltip = true;
        };
      }
    }, {
      kind: "field",
      decorators: [HostListener('focusout')],
      key: "_handleFocusout",
      value() {
        return async () => {
          this.openTooltip = false;
        };
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "autofocus",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true,
        attribute: 'batch-action'
      })],
      key: "batchAction",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'button-class-name'
      })],
      key: "buttonClassName",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'danger-descriptor'
      })],
      key: "dangerDescriptor",
      value: void 0
    }, {
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
        reflect: true
      })],
      key: "download",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'has-main-content',
        type: Boolean
      })],
      key: "hasMainContent",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "href",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "hreflang",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "isExpressive",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean,
        reflect: true
      })],
      key: "isSelected",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "kind",
      value() {
        return BUTTON_KIND.PRIMARY;
      }
    }, {
      kind: "field",
      decorators: [property({
        attribute: 'link-role'
      })],
      key: "linkRole",
      value() {
        return 'button';
      }
    }, {
      kind: "field",
      decorators: [property({
        type: Boolean
      })],
      key: "openTooltip",
      value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "ping",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "rel",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "size",
      value() {
        return 'lg';
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "target",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'tooltip-alignment'
      })],
      key: "tooltipAlignment",
      value() {
        return BUTTON_TOOLTIP_ALIGNMENT.CENTER;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'tooltip-position'
      })],
      key: "tooltipPosition",
      value() {
        return BUTTON_TOOLTIP_POSITION.TOP;
      }
    }, {
      kind: "field",
      decorators: [property({
        reflect: true,
        attribute: 'tooltip-text'
      })],
      key: "tooltipText",
      value: void 0
    }, {
      kind: "field",
      decorators: [property({
        reflect: true
      })],
      key: "type",
      value() {
        return BUTTON_TYPE.BUTTON;
      }
    }, {
      kind: "method",
      key: "render",
      value:
      /**
       * Handles `keydown` event on this element.
       */
      /**
       * Handles `keydown` event on this element.
       * Space & enter will toggle state, Escape will only close.
       */
      /**
       * Handles `keydown` event on this element.
       * Space & enter will toggle state, Escape will only close.
       */
      /**
       * `true` if the button should have input focus when the page loads.
       */
      /**
       * `true` if the button is being used within a data table batch action toolbar
       */
      /**
       * Specify an optional className to be added to your Button
       */
      /**
       * Specify the message read by screen readers for the danger button variant
       */
      /**
       * `true` if the button should be disabled.
       */
      /**
       * The default file name, used if this button is rendered as `<a>`.
       */
      /**
       * `true` if there is a non-icon content.
       */
      /**
       * Link `href`. If present, this button is rendered as `<a>`.
       */
      /**
       * The language of what `href` points to, if this button is rendered as `<a>`.
       */
      /**
       * `true` if expressive theme enabled.
       */
      /**
       * Specify whether the Button is currently selected.
       * Only applies to the Ghost variant.
       */
      /**
       * Button kind.
       */
      /**
       * The a11y role for `<a>`.
       */
      /**
       * Boolean to determine if tooltip is open.
       */
      /**
       * URLs to ping, if this button is rendered as `<a>`.
       */
      /**
       * The link type, if this button is rendered as `<a>`.
       */
      /**
       * Button size.
       */
      /**
       * The link target, if this button is rendered as `<a>`.
       */
      /**
       * Specify the alignment of the tooltip to the icon-only button.
       * Can be one of: start, center, or end.
       */
      /**
       * Specify the direction of the tooltip for icon-only buttons.
       * Can be either top, right, bottom, or left.
       */
      /**
       * Specify the direction of the tooltip for icon-only buttons.
       * Can be either top, right, bottom, or left.
       */
      /**
       * Button type.
       */
      function render() {
        const {
          autofocus,
          buttonClassName,
          dangerDescriptor,
          disabled,
          download,
          href,
          hreflang,
          kind,
          isExpressive,
          isSelected,
          linkRole,
          openTooltip,
          ping,
          rel,
          size,
          target,
          tooltipAlignment,
          tooltipPosition,
          tooltipText,
          type,
          _hasIcon: hasIcon,
          hasMainContent,
          _handleSlotChange: handleSlotChange
        } = this;
        let defaultClasses = {
          [`${prefix}--btn`]: true,
          [`${prefix}--btn--${kind}`]: kind,
          [`${prefix}--btn--disabled`]: disabled,
          [`${prefix}--btn--icon-only`]: hasIcon && !hasMainContent,
          [`${prefix}--btn--${size}`]: size,
          [`${prefix}--layout--size-${size}`]: size,
          [`${prefix}-ce--btn--has-icon`]: hasIcon,
          [`${prefix}--btn--expressive`]: isExpressive,
          [`${prefix}--btn--selected`]: isSelected && kind === 'ghost'
        };
        if (buttonClassName) {
          const outputObject = {};
          buttonClassName === null || buttonClassName === void 0 || buttonClassName.split(' ').forEach(element => {
            outputObject[element] = true;
          });
          defaultClasses = _objectSpread(_objectSpread({}, defaultClasses), outputObject);
        }
        const classes = classMap(defaultClasses);
        const isDanger = kind.includes('danger');
        if (href) {
          return disabled ? html(_t || (_t = _`
            <p id="button" part="button" class="${0}">
              <slot @slotchange="${0}"></slot>
              <slot name="icon" @slotchange="${0}"></slot>
            </p>
          `), classes, handleSlotChange, handleSlotChange) : html(_t2 || (_t2 = _`
            <a
              id="button"
              part="button"
              role="${0}"
              class="${0}"
              download="${0}"
              href="${0}"
              hreflang="${0}"
              ping="${0}"
              rel="${0}"
              target="${0}"
              type="${0}">
              <slot @slotchange="${0}"></slot>
              <slot name="icon" @slotchange="${0}"></slot>
            </a>
          `), ifDefined(linkRole), classes, ifDefined(download), ifDefined(href), ifDefined(hreflang), ifDefined(ping), ifDefined(rel), ifDefined(target), ifDefined(type), handleSlotChange, handleSlotChange);
        }
        const alignmentClass = tooltipAlignment && (tooltipPosition === BUTTON_TOOLTIP_POSITION.TOP || tooltipPosition === BUTTON_TOOLTIP_POSITION.BOTTOM) ? `-${tooltipAlignment}` : '';
        const tooltipClasses = classMap({
          [`${prefix}--popover-container`]: true,
          [`${prefix}--popover--caret`]: true,
          [`${prefix}--popover--high-contrast`]: true,
          [`${prefix}--tooltip`]: true,
          [`${prefix}--icon-tooltip`]: hasIcon,
          [`${prefix}--popover--open`]: openTooltip,
          [`${prefix}--popover--${tooltipPosition}${alignmentClass}`]: tooltipText
        });
        return tooltipText && !disabled ? html(_t3 || (_t3 = _`
          <span class="${0}">
            <button
              id="button"
              part="button"
              class="${0}"
              ?autofocus="${0}"
              ?disabled="${0}"
              type="${0}"
              aria-label="${0}">
              <slot @slotchange="${0}"></slot>
              <slot name="icon" @slotchange="${0}"></slot>
            </button>
            <span class="${0}--popover">
              <span
                class="${0}--popover-content ${0}--tooltip-content">
                ${0}
              </span>
              <span class="${0}--popover-caret"></span>
            </span>
          </span>
        `), tooltipClasses, classes, autofocus, disabled, ifDefined(type), ifDefined(tooltipText), handleSlotChange, handleSlotChange, prefix, prefix, prefix, tooltipText, prefix) : html(_t4 || (_t4 = _`
          <button
            id="button"
            part="button"
            class="${0}"
            ?autofocus="${0}"
            ?disabled="${0}"
            type="${0}">
            ${0}
            <slot @slotchange="${0}"></slot>
            <slot name="icon" @slotchange="${0}"></slot>
          </button>
        `), classes, autofocus, disabled, ifDefined(type), isDanger ? html(_t5 || (_t5 = _`<span class="${0}--visually-hidden"
                  >${0}</span
                >`), prefix, dangerDescriptor) : ``, handleSlotChange, handleSlotChange);
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
}, HostListenerMixin(FocusMixin(LitElement)));
export default CDSButton;
//# sourceMappingURL=button.js.map
