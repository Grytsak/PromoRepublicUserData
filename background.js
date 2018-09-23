chrome.runtime.onMessage.addListener(
  function(message, sender, sendResponse) {
    switch(message.type) {
      case "setID":
        sendResponse(id);
        break;
      default:
        console.error("Unrecognised message: ", message);
    }
  }
);

chrome.webNavigation.onHistoryStateUpdated.addListener(function() {
    chrome.tabs.executeScript(null, {file:"myscript.js"});
});

chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log("The color is green.");
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        // pageUrl: {hostEquals: 'developer.chrome.com'},
        pageUrl: {urlMatches: 'app.intercom.io/a/apps/4hozdnh7/users/'}
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
