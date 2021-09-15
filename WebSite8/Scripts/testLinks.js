
var ipAddress;

var m = new Date();
var dateString =
    m.getFullYear() + " " +
    ("0" + (m.getMonth() + 1)).slice(-2) + " " +
    ("0" + m.getDate()).slice(-2) + " - " +
    ("0" + m.getHours()).slice(-2) + ":" +
    ("0" + m.getMinutes()).slice(-2) + ":" +
    ("0" + m.getSeconds()).slice(-2);


async function getIPFunction() {
    const response = await fetch('http://api.ipify.org/?format=json');
    var data = await response.json();
    ipAddress = data.ip;
    saveToAPI(dateString, ipAddress);
}
getIPFunction();


async function saveToAPI(dateString, address) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "id": dateString,
        "address": address,
        "name": "LINKS",
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
        //.then(result => console.log(result))
        .then(getAPIData())                              
        .catch(error => console.log('error', error));
};