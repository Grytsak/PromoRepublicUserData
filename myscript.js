var userIdElem = document.querySelector('[data-key="user_id"] [data-content]');

if (userIdElem !== null) {
  var userID = +userIdElem.textContent;

  if (userID) {
    console.log('userID:', userID);

    chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
      if (message.type === "getID") {
          sendResponse(userID);
      }
    });
  }
}










