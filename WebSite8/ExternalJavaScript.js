function home1() {
    document.getElementById("img1").src = "images2/f300.png";
    document.getElementById("text1").innerText = "These are some of my solutions to the problems on HackerRank that I've solved so far." + "\n" + "\n" + "The screenshots are from rextester (an online IDE where I developed/tested the code) and all of the codes passed all of the test cases in HackerRank." + "\n" + "\n" + "Ex1 = Diagonal Difference" + "\n" + "Ex2 = Time Conversion" + "\n" + "Ex3 = Plus Minus" + "\n" + "Ex4 = Min Max Sum" + "\n" + "Ex5 = Encryption" + "\n" + "Ex6 = Beautiful Days" + "\n" + "Ex7 = Circular Array Rotation" + "\n" + "\n" + "I shall aim to update this site every time I solve an interesting problem. This website was made using ASP.NET(empty), HTML, CSS and JavaScript." + "\n" + "\n" + "Full Portfolio = www.damienbactawar.co.uk";
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

function button6() {
    document.getElementById("img1").src = "images/BeautifulDays.png";
    document.getElementById("text1").innerText = "BEAUTIFUL DAYS PROBLEM" + "\n" + "\n" + "The input = 3 integers i(20), j(23) and k(6)." + "\n" + "\n" + "|(20 - 02) / 6| = 3" + "\n" + "|(21 - 12) / 6| = 1.5" + "\n" + "|(22 - 22) / 6| = 0" + "\n" + "|(23 - 32) / 6| = 1.5" + "\n" + "\n" + "The code looks at a range of integers (20, 21, 22, 23), subtracts them from their reverse (02, 12, 22, 32), divides by an integer (k=6) and the absolute is taken. If the result is an integer then it is counted as a beauitful day." + "\n" + "\n" + "The first part of the code converts the integer (20) into a string (\"20\"), into a char-array({'2','0'}), reverses the array ({'0','2'}), into a string (\"02\") and then finally into an integer (02)." + "\n" + "\n" + "The next part of the code performs the calculation, counts the number of whole numbers (integers) and returns the result which is 2 in this case (3 and 0).";
}

function button7() {
    document.getElementById("img1").src = "images/circularArrayRotation.png";
    document.getElementById("text1").innerText = "CIRCULAR ARRAY ROTATION PROBLEM" + "\n" + "\n" + "The input is an array {1,2,3,4,5}, it has to be shifted to the right twice (int k = 2) and we want the first three numbers (int [] m = {0,1,2}) in the rotated array. The output for this input are the numbers 4, 5 and 1." + "\n" + "\n" + "IF statement - If the rotation number is > input array size the rotation number is converted into a number which is <= the input array size. For this example, if k = 7, k would become 2 (7 % 5). This is equivalent because the circular array is periodic." + "\n" + "\n" + "Two empty arrays are created and the input array is split into two parts ({1,2,3} and {4,5})." + "\n" + "\n" + "The first two for-loops fill one of the empty arrays with the input rotated by k (2) and the array becomes {4,5,1,2,3}." + "\n" + "\n" + "The final for-loop fills the other empty array with the desired elements (int[] m = {0,1,2,}), so the array becomes {4,5,1} and this array is returned.";
}

//home1();
//document.getElementById("img1").src = "images2/f300.png";
//document.getElementById("text1").innerText = "TIme Conversion" + "<br>" + "\n" + "fjfjf";