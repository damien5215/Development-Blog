var container = document.getElementById("container");
var asyncCounter = 0;

async function getAPIData() {

    const response = await fetch('https://getpantry.cloud/apiv1/pantry/5638cc37-8155-4163-ad08-7e4c6de5ee57');
    var data = await response.json();
    var resLength = data.baskets.length;

    var arr = new Array(resLength);

    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(4);
    }

    container.innerHTML = 'LOADING DATA, PLEASE WAIT';
    asyncCounter = 0;

    for (var j = 0; j < data.baskets.length; j++) {
        var dataNo1 = data.baskets[j];
        getAPIDataDisplay(dataNo1, arr, j, resLength);
    }
}
getAPIData();

async function getAPIDataDisplay(dataNo1, arr, j, resLength) {

    const response = await fetch('https://getpantry.cloud/apiv1/pantry/5638cc37-8155-4163-ad08-7e4c6de5ee57/basket/' + dataNo1);
    var data = await response.json();
    asyncCounter++;

    arr[j][0] = data.id;
    arr[j][1] = data.date;
    arr[j][2] = data.movie;
    arr[j][3] = data.name;

    console.log("array id    = " + arr[j][0]);
    console.log("array date  = " + arr[j][1]);
    console.log("array movie = " + arr[j][2]);
    console.log("array name  = " + arr[j][3]);
    console.log("\n");

    if (asyncCounter == resLength) {
        arr.sort();
        console.log("Array is full!");
        container.innerHTML = '';

        for (var i = 0; i < resLength; i++) {
            container.innerHTML += '<div class="container-fluid"><div class="row"><div class="col-xs-2"><p onclick="fillForm(' + arr[i][0] + ')" class="input' + arr[i][0] + '" >' + arr[i][0] +
                '</p></div><div class="col-xs-2"><p class="input' + arr[i][0] + '" >' + arr[i][1] +
                '</p></div><div class="col-xs-4"><p class="input' + arr[i][0] + '" >' + arr[i][2] +
                '</p></div><div class="col-xs-4"><p class="input' + arr[i][0] + '" >' + arr[i][3] +
                '</p></div></div></div><br>';
        }
    }
}

function getFormData() {
    var movieId = document.querySelector("#input1").value;
    var movieDate = document.querySelector("#input2").value;
    var movieName = document.querySelector("#input3").value;
    var moviePlatform = document.querySelector('#input4').value;

    console.log(movieId);
    console.log(movieDate);
    console.log(movieName);
    console.log(moviePlatform);

    saveToAPI(movieId, movieDate, movieName, moviePlatform);
}

async function saveToAPI(movieId, movieDate, movieName, moviePlatform) {

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "id": movieId,
        "date": movieDate,
        "movie": movieName,
        "name": moviePlatform,
        "testPayload": true,
        "keysLength": 5
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://getpantry.cloud/apiv1/pantry/5638cc37-8155-4163-ad08-7e4c6de5ee57/basket/" + movieId, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .then(setTimeout(getAPIData, 600))
        .catch(error => console.log('error', error));
};

function deleteItem() {
    var movieId = document.querySelector("#input1").value;
    deleteBasket(movieId);
}

async function deleteBasket(movieId) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = "";

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("https://getpantry.cloud/apiv1/pantry/5638cc37-8155-4163-ad08-7e4c6de5ee57/basket/" + movieId, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .then(setTimeout(getAPIData, 600))
        .catch(error => console.log('error', error));
};

function fillForm(id) {
    var x = document.getElementsByClassName("input" + id);

    document.querySelector("#input1").value = x[0].innerHTML;   // id
    document.querySelector("#input2").value = x[1].innerHTML;   // date
    document.querySelector("#input3").value = x[2].innerHTML;   // movie
    document.querySelector("#input4").value = x[3].innerHTML;   // name
};

function resetForm() {
    document.querySelector("#input1").value = '';   // id
    document.querySelector("#input2").value = '';   // date
    document.querySelector("#input3").value = '';   // movie
    document.querySelector("#input4").value = '';   // name
};