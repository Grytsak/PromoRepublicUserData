const serverData = document.getElementById('serverData');


chrome.runtime.sendMessage({ type: "getData" }, function (data) {
  serverData.innerHTML = data;
});


chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  chrome.tabs.sendMessage(tabs[0].id, { type: "getID" }, function (id) {
    const body = document.body;
    let rootUrl = `https://app.promorepublic.com/admin/users/userInfo/${id}?search_by=user_id`;

    fetch(rootUrl)
      .then( (response) => {
        if (response.status == 200) {
          return response.text();
        } else {
          throw new Error('Page not found');
        }
      })
      .then((data) => {
        body.innerHTML = data;
      })
      .catch((err) => {
        console.log('ERROR: ', err.message);
      });
  });
});










