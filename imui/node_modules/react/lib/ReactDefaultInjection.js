define('node_modules/react/lib/ReactDefaultInjection', function(require, exports, module) {

  /**
   * Copyright 2013-present, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule ReactDefaultInjection
   */
  
  'use strict';
  
  var BeforeInputEventPlugin = require('node_modules/react/lib/BeforeInputEventPlugin');
  var ChangeEventPlugin = require('node_modules/react/lib/ChangeEventPlugin');
  var DefaultEventPluginOrder = require('node_modules/react/lib/DefaultEventPluginOrder');
  var EnterLeaveEventPlugin = require('node_modules/react/lib/EnterLeaveEventPlugin');
  var HTMLDOMPropertyConfig = require('node_modules/react/lib/HTMLDOMPropertyConfig');
  var ReactComponentBrowserEnvironment = require('node_modules/react/lib/ReactComponentBrowserEnvironment');
  var ReactDOMComponent = require('node_modules/react/lib/ReactDOMComponent');
  var ReactDOMComponentTree = require('node_modules/react/lib/ReactDOMComponentTree');
  var ReactDOMEmptyComponent = require('node_modules/react/lib/ReactDOMEmptyComponent');
  var ReactDOMTreeTraversal = require('node_modules/react/lib/ReactDOMTreeTraversal');
  var ReactDOMTextComponent = require('node_modules/react/lib/ReactDOMTextComponent');
  var ReactDefaultBatchingStrategy = require('node_modules/react/lib/ReactDefaultBatchingStrategy');
  var ReactEventListener = require('node_modules/react/lib/ReactEventListener');
  var ReactInjection = require('node_modules/react/lib/ReactInjection');
  var ReactReconcileTransaction = require('node_modules/react/lib/ReactReconcileTransaction');
  var SVGDOMPropertyConfig = require('node_modules/react/lib/SVGDOMPropertyConfig');
  var SelectEventPlugin = require('node_modules/react/lib/SelectEventPlugin');
  var SimpleEventPlugin = require('node_modules/react/lib/SimpleEventPlugin');
  
  var alreadyInjected = false;
  
  function inject() {
    if (alreadyInjected) {
      // TODO: This is currently true because these injections are shared between
      // the client and the server package. They should be built independently
      // and not share any injection state. Then this problem will be solved.
      return;
    }
    alreadyInjected = true;
  
    ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener);
  
    /**
     * Inject modules for resolving DOM hierarchy and plugin ordering.
     */
    ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
    ReactInjection.EventPluginUtils.injectComponentTree(ReactDOMComponentTree);
    ReactInjection.EventPluginUtils.injectTreeTraversal(ReactDOMTreeTraversal);
  
    /**
     * Some important event plugins included by default (without having to require
     * them).
     */
    ReactInjection.EventPluginHub.injectEventPluginsByName({
      SimpleEventPlugin: SimpleEventPlugin,
      EnterLeaveEventPlugin: EnterLeaveEventPlugin,
      ChangeEventPlugin: ChangeEventPlugin,
      SelectEventPlugin: SelectEventPlugin,
      BeforeInputEventPlugin: BeforeInputEventPlugin
    });
  
    ReactInjection.HostComponent.injectGenericComponentClass(ReactDOMComponent);
  
    ReactInjection.HostComponent.injectTextComponentClass(ReactDOMTextComponent);
  
    ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
    ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);
  
    ReactInjection.EmptyComponent.injectEmptyComponentFactory(function (instantiate) {
      return new ReactDOMEmptyComponent(instantiate);
    });
  
    ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);
    ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);
  
    ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);
  }
  
  module.exports = {
    inject: inject
  };

});
