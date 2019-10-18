
const dataURL = "http://www.text.damienasp.com/jsonData.json";
const btnSelect = document.getElementsByTagName("input");
document.querySelector('#img1').src = "http://www.text.damienasp.com/images2/D002b.png";     // set default image

document.getElementById("btn0").style.backgroundColor = "red";          // set default to red.


for (let i = 0; i < btnSelect.length; i += 1) {
    btnSelect[i].addEventListener("click", function (e) {
        console.log("You clicked btn" + i + "! " + event.target.value);    // event.target, this.className

        for (let i = 0; i < btnSelect.length; i += 1) {
            document.querySelector('#btn' + i).style.backgroundColor = "black";
        }
        event.target.style.backgroundColor = "red";     // set color of clicked button
        //$("#img1").fadeOut(700);                      // TEST DELETE LATOR, it works!!!
    })
}


//async function getData(dataURL){
//    const response1 = await fetch(dataURL);
//    const getDataJSON = await response1.json();
//    return getDataJSON;
//}

