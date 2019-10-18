$(document).ready(function () {
  
    $(".button").click(function () {                               // target by class (button)

        $(".button").css("background-color", "black");             // target by class (button) and set all buttons to "black"
        var test1 = $(this).attr('id');                            // get id of .button clicked ("butt2")
        $('#' + test1).css("background-color", "blue");            // set css of clicked-button (blue)

        var getData = new XMLHttpRequest();
      //getData.open('GET', 'http://localhost:57362/jsonData.json');           // JSON file
        getData.open('GET', 'http://www.text.damienasp.com/jsonData.json');    // JSON file
        getData.onload = function () {
            var data1 = JSON.parse(getData.responseText);
            var id = data1[11].buttonArray.indexOf(test1)                    // holds index-value of clicked-button (2 = "butt2")
            var textJSON = data1[12].textArray2[id].replace(/xxx/g, "\n");   // contains formatted text 
            $("#img2").attr("src", data1[id].imgString2);                    // set img2 (hidden by CSS), stores in cache early

            console.log(id);
            console.log(data1[id].buttonNum2);
            console.log(data1[id].imgString2);
            //console.log(data1[12].textArray2[id]);                   // coded string (no formatting)  
            //console.log(textJSON);                                   // uncoded string (contains formatting)
        
            $("#img1").fadeOut(500, function(){
                $("#text1").text(textJSON);                                 // load text (contains formatting) 
                $("#img1").attr("src", data1[id].imgString2);               // index of button, selects the desired image
                $("#img1").fadeIn(700);
                console.log("New text and image set.");
            });               
        };                           
        getData.send();
    });           
});