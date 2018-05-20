﻿function home1() {
    document.getElementById("img1").src = "images2/f300.png";
    document.getElementById("text1").innerText = "These are some of my solutions to the problems on HackerRank that I've solved so far." + "\n" + "\n" + "The screenshots are from rextester (an online IDE where I developed/tested the code) and all of the codes passed all of the test cases in HackerRank." + "\n" + "\n" + "Ex1 = Diagonal Difference" + "\n" + "Ex2 = Time Conversion" + "\n" + "Ex3 = Plus Minus" + "\n" + "Ex4 = Min Max Sum" + "\n" + "Ex5 = Encryption" + "\n" + "\n" + "I shall aim to update this site every time I solve an interesting problem. This website was made using ASP.NET(empty), HTML, CSS and Javascript." + "\n" + "\n" + "Full Portfolio = www.damienbactawar.co.uk";
}

function button1() {
    document.getElementById("img1").src = "images/diagonal difference2.png";
    document.getElementById("text1").innerText = "DIAGONAL DIFFERENCE PROBLEM" + "\n" + "\n" + "There are two inputs, a jagged matrix 'a[][]' and an integer 'n' denoting the number of rows/columns. Below shows the input HackerRank gives (n = 3)." + "\n" + "\n" + "[11,  02,  04]" + "\n" + "[04,  05,  06]" + "\n" + "[10,  08, -12]" + "\n" + "\n" + "[11,    ,    ] = (11) + (05) + (-12) = 4" + "\n" + "[  ,  05,    ]" + "\n" + "[  ,    , -12]" + "\n" + "\n" + "[  ,    ,  04] = (04) + (05) + ( 10) = 19" + "\n" + "[  ,  05,    ]" + "\n" + "[10,    ,    ]" + "\n" + "\n" + "Difference = |(4 - 19)| = 15" + "\n" + "\n" + "The inner loop of the nested for-loop iterates through the row and the outer loop iterates through the column." + "\n" + "\n" + "For this case x1 = 4, x2 = 19 and x3 = 15. ";
}

function button2() {
    document.getElementById("img1").src = "images/timeConversion.png";
    document.getElementById("text1").innerText = "TIME CONVERSION PROBLEM" + "\n" + "\n" + "This problem involved converting an input string such as \"01:45:20PM\" to \"13:45:20\". The question also infomred the user that -" + "\n" + "\n" + "midnight = \"12:00:00AM\" = \"12:00:00\" " + "\n" + "noon     = \"12:00:00PM\" = \"00:00:00\"" + "\n" + "\n" + "Whenever the ninth character of the input string is 'A' then all that has to be changed is to remove the last two characters." + "\n" + "\n" + "Whenever the input's first two characters are '12' and the ninth is 'P' then the first two characters must be changed to '00'." + "\n" + "\n" + "Whenever the input's ninth character is 'P' and the frist two characters are NOT '12', then the hour-numbers must be increased by twelve. My code converts a character-to-string-to-integer. Once a value of 12 has been added the integer is converted back to a character." + "\n" + "\n" + "As you can see in the code I have used four if/else statements.";
}

function button3() {
    document.getElementById("img1").src = "images/PlusMinus.png";
    document.getElementById("text1").innerText = "PLUS MINUS PROBLEM" + "\n" + "\n" + "The input is an array of integers (-4, 3, -9, 0, 4, 1) and the output is three lines, for this input it would be - " + "\n" + "\n" + "0.500000" + "\n" + "0.333333" + "\n" + "0.166667" + "\n" + "\n" + "These numbers are the number of positive, negative and zero numbers divided by the total number of numbers (3/6, 2/6 and 1/6)." + "\n" + "\n" + "POSITIVE =  3,  4,  1" + "\n" + "NEGATIVE = -4, -9 " + "\n" + "ZERO     =  0" + "\n" + "\n" +"The output had to be rounded to six decimal points.";
}

function button4() {
    document.getElementById("img1").src = "images/Mini-Max Sum.png";
    document.getElementById("text1").innerText = "MINI-MAX SUM PROBLEM" + "\n" + "\n" + "The input is an array of integers (1, 2, 3, 4, 5) and the output is (10 14)." + "\n" + "\n" + "2 + 3 + 4 + 5 = 14 (max)" + "\n" + "1 + 3 + 4 + 5 = 13" + "\n" + "1 + 2 + 4 + 5 = 12" + "\n" + "1 + 2 + 3 + 5 = 11" + "\n" + "1 + 2 + 3 + 4 = 10 (min)" + "\n" + "\n" + "The first for-loop calculates the total value of the integer array (1 + 2 + 3 + 4 + 5 = 15)." + "\n" + "\n" + "The numbers in the array are summed, producing a new array (14, 13, 12, 11, 10)." + "\n" + "\n" + "The min and max values are then set to the first value of this array (14)." + "\n" + "\n" + "The final for-loop uses two if statements to determine the minimum and maxium value.";
}

function button5() {
    document.getElementById("img1").src = "images/encryption.png";
    document.getElementById("text1").innerText = "ENCRYPTION PROBLEM" + "\n" + "\n" + "The input string \"haveaniceday\" has 12 characters and sqrt(12) = a number in between 3 and 4. 3 becomes the row number and 4 becomes the column number and the input can be arranged into a grid -" + "\n" + "\n" + "have" + "\n" + "anic" + "\n" + "eday" + "\n" + "\n" + "Then taking the characters veritcally the string becomes \"hae and via ecy\" and this is the output." + "\n" + "\n" + "The first part of the code determines the row and column numbers. If the number of characters is a square number the row and column numbers are equal." + "\n" + "\n" + "The nested for-loop: The inner loop constructs each word (hae), then loads it into a string array, resets some variables, then the outer loop constructs the next word (and)." + "\n" + "\n" + "The last loop concatenates the strings into one. The final string is added after the loop to avoid the extra space.";
}

//home1();
//document.getElementById("img1").src = "images2/f300.png";
//document.getElementById("text1").innerText = "TIme Conversion" + "<br>" + "\n" + "fjfjf";