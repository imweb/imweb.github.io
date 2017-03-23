/**
 * 负责在线编程 预览的iframe的逻辑
 */

'use strict';

/**
 * 插入js代码
 */
function _handleJavascript(contents) {
  let newScript = document.createElement('script');
  newScript.setAttribute('type', 'text/javascript');
  newScript.text = contents;
  document.getElementsByTagName('head')[0].appendChild(newScript);
}

/**
 * 插入html代码
 * 目前只可以覆盖html内容
 */
function _handleHTML(contents) {
  var newDiv = document.createElement('div');
  newDiv.innerHTML = contents;
  document.getElementsByTagName('body')[0].appendChild(newDiv);
}

/**
 * 插入css代码
 * 参考  http://jonraasch.com/blog/javascript-style-node
 * 动态添加css内容到style节点需要做一些判断来兼容不同浏览器
 */
function _handleCSS(contents) {
  let newCSS = document.createElement('style');
  newCSS.type = 'text/css';
  // IE浏览器
  if (newCSS.styleSheet) {
    newCSS.styleSheet.cssText = contents;
  } else {
    newCSS.appendChild(document.createTextNode(contents))
  };
  document.getElementsByTagName("head")[0].appendChild(newCSS);
}


/**
 * 判断是否是可信的domain
 */
function isTrustedDomain(domain) {
  console.log(domain);
  return domain.indexOf('.ke.qq.com') > -1 || domain === 'http://127.0.0.1:8080';
}

/**
 * Handles any messages received by this iframe.  Will only accept from udacity.com
 * @param event The event for the POST message received by this iframe
 */
function receiveMessage(event) {
  let data = event.data;
  // 如果是信任的域且有数据
  // if (isTrustedDomain(event.origin) && event.data) {
  if (true) {
    if (typeof event.data === 'string') {
      try {
        data = JSON.parse(event.data);
      } catch(e) {
        console.error('message parse error', e);
      }
    }

    let files = data.files || [];
    let unitTest = data.test;

    // 如果有测试用例,则嵌入
    if (unitTest) {
      _handleJavascript(unitTest.value);
    }

    console.log('preview', data);

    // 遍历处理
    for (let i = 0, filesLength = files.length; i < filesLength; i++) {
      let file = files[i] || {};
      let contents = file.value;
      let filename = file.name.split('.');
      // 获取文件格式
      let extension = filename[filename.length -1];
      // 判断文件格式，进行不同处理
      switch (extension){
        case ('js'):
          _handleJavascript(contents);
          break;
        case ('html'):
          _handleHTML(contents);
          break;
        case ('css'):
          _handleCSS(contents);
          break;
      }
    }

    // 如果有测试用例定义的全局方法performSubmission
    if (performSubmission) {
      var result = performSubmission();
      result.messageType = 'evaluate';
      window.parent.postMessage(JSON.stringify(result), '*');
    }
  }
}




/**
 * Posts to the parent that we have been instantiated.  Must be a safe place <3
 */
function postReady() {
  if (window.parent !== window) {
    window.parent.postMessage(JSON.stringify({messageType: 'ready'}), '*');
  }
}

// Do the things we need to do to initialize state
window.addEventListener('message', receiveMessage);
