chrome.runtime.onInstalled.addListener(function() {
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

chrome.webNavigation.onHistoryStateUpdated.addListener(function() {
  chrome.tabs.executeScript(null, {file:"myscript.js"});
});

// chrome.runtime.onMessage.addListener(
//   function(message, sender, sendResponse) {
//     switch(message.type) {
//       case "getData": {
//         let rootUrl = `https://app.promorepublic.com/admin/users/userInfo/5?search_by=user_id`;
//
//         fetch(rootUrl)
//           .then(function (response) {
//             if (response.status == 200) {
//               alert(response.text());
//               return response.text();
//             } else {
//               throw new Error('Invalid user ID');
//             }
//           })
//           .then((data) => {
//             sendResponse(data);
//           })
//           .catch((err) => {
//             console.log('ERROR: ', err.message);
//           });
//       }
//         break;
//       default:
//         console.error("Unrecognised message: ", message);
//     }
//   }
// );
