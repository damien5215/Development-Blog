$(document).ready(function () {

    var x1 = 700;                                                  // variable sets fadeIn speed
  
    $(".button").click(function () {                               // target by class (button)
        $("#img1").fadeOut(50);                                    // hide image,      $("#img1").css("display", "none");

        $(".button").css("background-color", "black");             // target by class (button) and set all buttons to "black"
        var test1 = $(this).attr('id');                            // get id of .button clicked ("butt2")
        $('#' + test1).css("background-color", "blue");            // set css of clicked-button (blue)

        var getData = new XMLHttpRequest();
      //getData.open('GET', 'http://localhost:57362/jsonData.json');           // JSON file
        getData.open('GET', 'http://www.text.damienasp.com/jsonData.json');    // JSON file
        getData.onload = function () {
            var data1 = JSON.parse(getData.responseText);
            var id = data1[11].buttonArray.indexOf(test1)           // variable holds index-value of clicked-button (2 = "butt2")
            var textJSON = data1[12].textArray2[id].replace(/xxx/g, "\n");    // Contains formatted text 

            console.log(id);
            console.log(data1[id].buttonNum2);
            console.log(data1[id].imgString2);
            //console.log(data1[12].textArray2[id]);                   // Coded string (no formatting)  
            //console.log(textJSON);                                   // Uncoded string (contains formatting)
        
        $("#text1").text(textJSON);                                 // Load text (contains formatting) 
        $("#img1").attr("src", data1[id].imgString2)                // index of button, selects the desired image
        $("#img1").load(data1[id].imgString2);                      // load and set image
        $("#img1").fadeIn(x1);                                      // fade-in image
        };
        getData.send();
    });
});