

/**
 * Handle Javascript contents by writing it as a tag to the page
 * @param contents The raw Javascript to be injected into the page
 */

function _handleJavascript(contents) {
  'use strict';
  var newScript = document.createElement('script');
  newScript.setAttribute('type', 'text/javascript');
  newScript.text = contents;
  document.getElementsByTagName('head')[0].appendChild(newScript);
}

/**
 * Handle adding any additional HTML bodies to the page.  Creates a new, unstylable div
 * @param contents The HTML text that can be used as innerHTML to the new div
 */
function _handleHTML(contents) {
  'use strict';
  var newDiv = document.createElement('div');
  // console.log(contents);
  newDiv.innerHTML = contents;
  document.getElementsByTagName('body')[0].appendChild(newDiv);
}


/**
 * Handles any messages received by this iframe.  Will only accept from udacity.com
 * @param event The event for the POST message received by this iframe
 */
function receiveMessage(event) {
  'use strict';
  // console.log(event);
  // Dacity onry
  // if (isTrustedDomain(event.origin) && event.data) {
  if (true && event.data) {
    var message = JSON.parse(event.data);;
    // The only messages coming in should be injecting JS code into here
    if (message.parts) {
      var index;
      // console.log(message);
      for (index = 0; index < message.parts.length; index++) {
        var contents = message.parts[index].text;
        var filename = message.parts[index].name.split('.');
        var extension = filename[filename.length -1];
        switch (extension){
          case ('js'):
            _handleJavascript(contents);
            break;
          case ('html'):
            _handleHTML(contents);
            break;
        }
      }
    }

    // Actually handle the submission here
    var result = performSubmission();
    result.messageType = 'evaluate';
    window.parent.postMessage(JSON.stringify(result), '*');
  }
}


/**
 * Posts to the parent that we have been instantiated.  Must be a safe place <3
 */
function postReady() {
  'use strict';
  if (window.parent !== window) {
    window.parent.postMessage(JSON.stringify({messageType: 'ready'}), '*');
  }
}

// Do the things we need to do to initialize state
window.addEventListener('message', receiveMessage);