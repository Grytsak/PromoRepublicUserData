window.onload = function () {
  var userID = +document.querySelector('[data-key="user_id"] [data-content]').textContent;

  if (userID) {
    console.log('userID:', userID);
  }


  chrome.runtime.sendMessage({type: "setID", id: userID});
}

