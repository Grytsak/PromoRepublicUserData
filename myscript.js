// window.onload = function () {
    var userID = +document.querySelector('[data-key="user_id"] [data-content]').textContent;

    if (userID) {
        console.log('userID:', userID);
        chrome.runtime.sendMessage({type: "setID", id: userID});
    }

// var Http = new XMLHttpRequest();
// var url='https://reqres.in/api/users/2';
// Http.open("GET", url);
// Http.send();
// Http.onreadystatechange= function(e) {
//     if (this.readyState == 4 && this.status == 200) {
//         console.log('responseText:', Http.responseText)
//     }
// }


fetch('https://reqres.in/api/users/2').then(response => {
    let data = response.json();
    console.log('data:', data.data);
});

// }

console.log("window.history.length:", window.history.length);

