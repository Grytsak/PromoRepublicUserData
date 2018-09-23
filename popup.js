let getUserData = document.getElementById('getUserData');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

getUserData.onclick = function(element) {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {type: "getId"}, function(id) {
        if(typeof id == "undefined") {
          // That's kind of bad
          if(chrome.runtime.lastError) {
            // We couldn't talk to the content script, probably it's not there
          }
        } else {
          // Use count
          alert(id);
      }
    });
  });
};

console.log('pospup.js');