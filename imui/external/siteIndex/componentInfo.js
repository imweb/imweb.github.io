define('external/siteIndex/componentInfo.tpl', function(require, exports, module) {

  /**
   * 构建的时候编译组件信息
   * @author jero
   * @date 2016-08-17
   */
  
  
  module.exports = {
  
    button: {
      name: 'Button',
      path: '/components/button',
      demo: require('components/button/demo/demo.jsx').default // babel 编过后必须加个 default
    },
  
    dialog: {
      name: 'Dialog',
      path: '/components/dialog',
      demo: require('components/dialog/demo/demo.jsx').default // babel 编过后必须加个 default
    },
  
    icon: {
      name: 'Icon',
      path: '/components/icon',
      demo: require('components/icon/demo/demo.jsx').default // babel 编过后必须加个 default
    },
  
    tab: {
      name: 'Tab',
      path: '/components/tab',
      demo: require('components/tab/demo/demo.jsx').default // babel 编过后必须加个 default
    },
  
  };
  

});
