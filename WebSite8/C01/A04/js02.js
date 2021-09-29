const dataURL = "http://www.text.damienasp.com/C01/A04/HR02JSON.json";
var dataArray = [];
const btnSelect = document.getElementsByTagName("input");

// set default image and default btn (red)
document.querySelector('#img1').src = "../../images2/f300.png";               
document.getElementById("btn0").style.backgroundColor = "red";                

// get data from JSON file
getData1(dataURL).then(function getValue(getDataJSON) {
    dataArray = getDataJSON;
    console.log(dataArray);
})

async function getData1(dataURL) {
    const response1 = await fetch(dataURL);
    const getDataJSON = await response1.json();
    return getDataJSON;
};

for (let i = 0; i < btnSelect.length; i += 1) {
    btnSelect[i].addEventListener("click", function (e) {
        // button clicked
        console.log("You clicked btn" + i + "! " + event.target.value);

        // set all btns to black
        for (let i = 0; i < btnSelect.length; i += 1) {                           
            document.querySelector('#btn' + i).style.backgroundColor = "black";
        }

        // set color of clicked button
        event.target.style.backgroundColor = "red";                           

        // get and set image and text
        $("#img1").fadeOut(500, function () { 
            const IMG = "../" + dataArray[i].imgString1;                      
            const TEXT = dataArray[i].textBox1.replace(/xxx/g, "\n");         
            document.querySelector('#img1').src = IMG;                         
            document.querySelector('#text1').value = TEXT;                    
        });
        $("#img1").fadeIn(700);
    })
}