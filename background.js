chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {urlMatches: 'app.intercom.io/a/apps/4hozdnh7/users/'}
      })
      ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});

chrome.webNavigation.onHistoryStateUpdated.addListener(function() {
  chrome.tabs.executeScript(null, {file:"myscript.js"});
});

