const dataURL = "http://www.text.damienasp.com/A01/HR01JSON.json";            // json URL
const btnSelect = document.getElementsByTagName("input");
document.querySelector('#img1').src = "../images2/f300.png";                  // set default image
document.getElementById("btn0").style.backgroundColor = "red";                // set default btn (red)

for (let i = 0; i < btnSelect.length; i += 1) {
    btnSelect[i].addEventListener("click", function (e) {
        console.log("You clicked btn" + i + "! " + event.target.value);       // event.target, this.className

        for (let i = 0; i < btnSelect.length; i += 1) {                           // set all btns to black
            document.querySelector('#btn' + i).style.backgroundColor = "black";
        }
        event.target.style.backgroundColor = "red";                           // set color of button

        $("#img1").fadeOut(500, function () { 

        console.log(getData1(dataURL));                                       // get promise object
        getData1(dataURL).then(function getValue(getDataJSON) {
            console.log(getDataJSON[i].imgString1);
            const IMG = "../" + getDataJSON[i].imgString1;                    // get image
            const TEXT = getDataJSON[i].textBox1.replace(/xxx/g, "\n");       // get text
            document.querySelector('#img1').src = IMG;                        // set image 
            document.querySelector('#text1').value = TEXT;                    // set text    
        }).then($("#img1").fadeIn(700))                                       // fadeIn image
            .catch(error => console.log("Error occurred! " + error));
        });
    })
}

async function getData1(dataURL) {
    const response1 = await fetch(dataURL);
    const getDataJSON = await response1.json();
    return getDataJSON;
};