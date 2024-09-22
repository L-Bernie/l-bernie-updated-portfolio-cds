import _objectWithoutProperties from "@babel/runtime/helpers/esm/objectWithoutProperties";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread2";
const _excluded = ["children", "innerRef"];
/**
 * @license
 *
 * Copyright IBM Corp. 2019, 2023
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Component, createElement, forwardRef } from 'react';
import on from '../mixins/on';

/**
 * A descriptor for a React event prop of a custom element.
 */

/**
 * A descriptor for a React prop for an attribute of a custom element.
 */

/**
 * A descriptor for a set of React props for attributes of a custom element.
 */

/**
 * React props for the component `createCustomElementType()` generates.
 */

/**
 * @param refs List of React refs to merge.
 * @returns Merged React ref.
 */
const mergeRefs = (...refs) => el => {
  refs.forEach(ref => {
    // https://github.com/facebook/react/issues/13029#issuecomment-410002316
    if (typeof ref === 'function') {
      ref(el);
    } else if (Object(ref) === ref) {
      // `React.Ref.current` is read-only for regular use case, but we update it here
      ref.current = el;
    }
  });
};

/**
 * @param prop A prop value.
 * @param descriptor A React prop descriptor.
 * @returns The corresponding attribute value for the given prop value.
 */
const convertProp = (prop, descriptor) => {
  if (!descriptor) {
    return prop;
  }
  const {
    event,
    serialize
  } = descriptor;
  if (event) {
    // Events are not set as props, we use DOM `addEventListener()` instead
    return undefined;
  }
  return !serialize ? prop : serialize(prop);
};

/**
 * @param props A set of React props.
 * @param descriptor A set of React prop desciptor.
 * @returns The set of React props to set to a custom element, corresponding to the given React props.
 */
const convertProps = (props, descriptor) => Object.keys(props).reduce((acc, propName) => {
  const {
    [propName]: descriptorItem
  } = descriptor;
  const converted = convertProp(props[propName], descriptorItem);
  const {
    attribute
  } = descriptorItem !== null && descriptorItem !== void 0 ? descriptorItem : {};
  return attribute === false ? acc : _objectSpread(_objectSpread({}, acc), {}, {
    [attribute || propName]: converted
  });
}, {});

/**
 * Attaches listeners of custom events, to a custom element.
 *
 * @param elem The custom element.
 * @param descriptor An object, keyed by prop name, of data that may have custom event names.
 * @param callback A callback function that runs as the custom events fire.
 * @returns A handle that allows to release all event listeners attached.
 */
const attachEventListeners = (elem, descriptor, callback) => {
  const handles = new Set();
  Object.keys(descriptor).forEach(propName => {
    if (descriptor[propName]) {
      const {
        event: eventDescriptor
      } = descriptor[propName];
      const name = Object(eventDescriptor) !== eventDescriptor ? eventDescriptor : eventDescriptor.name;
      const options = Object(eventDescriptor) !== eventDescriptor ? undefined : eventDescriptor.options;
      if (name) {
        handles.add(on(elem, name, event => {
          callback(propName, event);
        }, options));
      }
    }
  });
  return {
    release() {
      handles.forEach(handle => {
        handle.release();
        handles.delete(handle);
      });
      return null;
    }
  };
};

/**
 * @param displayName The tag name of the custom element.
 * @param descriptor A descriptor for a set of React props for attributes of a custom element.
 * @returns A React component working as a wrapper for the given custom element.
 * @example
 * import { render } from 'react-dom';
 * import createCustomElementType, { booleanSerializer } from '/path/to/createCustomElementType';
 *
 * const CDSDropdown = createCustomElementType(`${prefix}-dropdown`, {
 *   disabled: {
 *     // Sets `disabled` attribute when the React prop value is truthy, unsets otherwise
 *     serialize: booleanSerializer,
 *   },
 *   helperText: {
 *     // Maps `helperText` React prop to `helper-text` attribute
 *     attribute: 'helper-text',
 *   },
 *   onBeforeSelect: {
 *     // Sets `onBeforeSelect` React prop value as a listener of `cds-dropdown-beingselected` custom event
 *     event: `${prefix}-dropdown-beingselected`,
 *   },
 * });
 *
 * render(
 *   (
 *     <CDSDropdown
 *       disabled={true}
 *       helperText="some-helper-text"
 *       onBeforeSelect={event => { console.log(`${prefix}-dropdown-beingselected is fired!`, event); }}>
 *       <cds-dropdown-item value="all">Option 1</cds-dropdown-item>
 *       <cds-dropdown-item value="cloudFoundry">Option 2</cds-dropdown-item>
 *       <cds-dropdown-item value="staging">Option 3</cds-dropdown-item>
 *     </CDSDropdown>
 *   )
 *   document.body
 * );
 */
const createReactCustomElementType = (displayName, descriptor) => {
  /**
   * Array of React prop names that should be mapped to DOM properties instead of attributes.
   */
  const nonAttributeProps = Object.keys(descriptor).filter(propName => {
    const {
      [propName]: descriptorItem
    } = descriptor;
    const {
      attribute
    } = descriptorItem !== null && descriptorItem !== void 0 ? descriptorItem : {};
    return attribute === false;
  });

  /**
   * A React component working as a wrapper for the custom element.
   */
  class CustomElementType extends Component {
    constructor(...args) {
      super(...args);
      /**
       * The element.
       */
      _defineProperty(this, "_elem", null);
      /**
       * The handle that allows to release all event listeners attached to this custom element.
       */
      _defineProperty(this, "_eventListenersHandle", null);
      /**
       * The callback function that runs as the custom events fire.
       *
       * @param propName The React prop name associated with the event listener.
       * @param event The event.
       */
      _defineProperty(this, "_handleEvent", (propName, event) => {
        const {
          [propName]: listener
        } = this.props;
        if (listener) {
          listener.call(event.currentTarget, event);
        }
      });
      /**
       * Handles getting/losing the React `ref` object of this custom element.
       *
       * @param elem The custom element.
       */
      _defineProperty(this, "_handleElemRef", elem => {
        this._elem = elem;
        if (this._eventListenersHandle) {
          this._eventListenersHandle.release();
          this._eventListenersHandle = null;
        }
        if (elem) {
          this._eventListenersHandle = attachEventListeners(elem, descriptor, this._handleEvent);
        }
      });
    }
    /**
     * Reflects change in React props to DOM properties.
     *
     * @param prevProps The previous props.
     */
    updateProps(prevProps = {}) {
      const {
        props,
        _elem: elem
      } = this;
      nonAttributeProps.forEach(propName => {
        const {
          [propName]: prevValue
        } = prevProps;
        const {
          [propName]: value
        } = props;
        if (prevValue !== value) {
          elem[propName] = value;
        }
      });
    }
    componentDidMount() {
      this.updateProps();
    }
    componentDidUpdate(prevProps) {
      this.updateProps(prevProps);
    }
    render() {
      // eslint-disable-next-line react/prop-types
      const _this$props = this.props,
        {
          children,
          innerRef
        } = _this$props,
        props = _objectWithoutProperties(_this$props, _excluded);
      const mergedRef = mergeRefs(innerRef, this._handleElemRef);
      return createElement(displayName, _objectSpread({
        ref: mergedRef
      }, convertProps(props, descriptor)), children);
    }
  }

  // eslint-disable-next-line react/display-name
  return forwardRef((props, ref) => createElement(CustomElementType, _objectSpread(_objectSpread({}, props), {}, {
    innerRef: ref
  })));
};

/**
 * @param value A React prop value.
 * @returns Serialized version of React prop value, as a boolean attribute in a custom element.
 */
export const booleanSerializer = value => !value ? undefined : '';

/**
 * @param value A React prop value.
 * @returns Serialized version of React prop value, as a number attribute in a custom element.
 */
export const numberSerializer = value => value == null ? value : String(value);

/**
 * @param value A React prop value.
 * @returns Serialized version of React prop value, as a object attribute in a custom element.
 */
export const objectSerializer = value => value == null ? value : JSON.stringify(value);
export default createReactCustomElementType;
//# sourceMappingURL=createReactCustomElementType.js.map
