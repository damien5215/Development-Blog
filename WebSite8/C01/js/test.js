
var ipAddress;
var container = document.getElementById("container");

var m = new Date();
var dateString =
    m.getUTCFullYear() +
    ("0" + (m.getUTCMonth() + 1)).slice(-2) +
    ("0" + m.getUTCDate()).slice(-2) +
    ("0" + m.getUTCHours()).slice(-2) +
    ("0" + m.getUTCMinutes()).slice(-2) +
    ("0" + m.getUTCSeconds()).slice(-2);


async function getIPFunction() {
    const response = await fetch('http://api.ipify.org/?format=json');
    var data = await response.json();
    ipAddress = data.ip;
    console.log("Test");
    saveToAPI(dateString, ipAddress);
}
getIPFunction();


async function saveToAPI(dateString, address) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "id": dateString,
        "address": address,
        "name": "HOME",
        "testPayload": true,
        "keysLength": 5
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://getpantry.cloud/apiv1/pantry/630f829e-1c3f-4661-8933-087650a21caa/basket/" + address, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .then(getAPIData())                               // delete if it doesn't work
        .catch(error => console.log('error', error));
};



async function getAPIData() {

    const response = await fetch('https://getpantry.cloud/apiv1/pantry/630f829e-1c3f-4661-8933-087650a21caa/');
    var data = await response.json();

    for (var i = 0; i < data.baskets.length; i++) {
        var dataNo1 = data.baskets[i];
        getAPIDataDisplay(dataNo1);
    }
}

async function getAPIDataDisplay(dataNo1) {

    const response = await fetch('https://getpantry.cloud/apiv1/pantry/630f829e-1c3f-4661-8933-087650a21caa/basket/' + dataNo1);
    var data = await response.json();

    console.log(data.id);
    console.log(data.address);
    console.log(data.name);

    container.innerHTML += '<div class="container-fluid"><div class="row"><div class="col-xs-4"><p id="newContent">' + data.address +
        '</p></div><div class="col-xs-4"><p id="newQuote">' + data.id +
        '</p></div><div class="col-xs-4"><p id="newQuote">' + data.name +
        '</p></div></div></div><br>';

}