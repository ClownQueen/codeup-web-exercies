"use strict";

/** FOR LOOPS
* Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table
 for that number (just multiply by the numbers 1 through 10) */

function showMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++){
        console.log(number + " x " + i + " = " + (number * i));

    }
}

showMultiplicationTable(5)

/*Use a for loop and the code from the previous lessons to generate 10 random numbers
 between 20 and 200 and output to the console whether each number is odd or even */

function evenAndOdds() {
    let randomNumber = 0
    for (let i = 1; i <= 10; i++) {
        randomNumber = Math.floor(Math.random() * 180) + 20; //generate numbers between 20 and 200
        if (randomNumber % 2 === 0) {
            console.log(randomNumber + " is a even number.");
        } else {
            console.log(randomNumber + " is a odd number.");
        }
    }
}

evenAndOdds();

/* Create a for loop that uses console.log to create the output shown below.
1
22
333
4444
55555
666666
7777777
88888888
999999999
 */

let s = "";
//First for loop going 1 to 9
for (let i = 1; i < 10; i++){
    // console.log("this is i " + i)
    //Inner loop starting at i and decrementing to 0
    //This means i=1 will run once, i=2 will run twice, etc.
    for (let j = i; j > 0; j--){

        //Append our current outer loop iteration to the empty string.
        s += i
        // console.log("this is j " + j )
        // console.log("this is s " + s)
    }
    //Log the entire completed string
    console.log(s)
    //Reset the string for next iteration
    s = "";
}


let str = ""

/* Create a for loop that uses console.log to create the output shown below.
100
95
90
85
80
75
70
65
60
55
50
45
40
35
30
25
20
15
10
5
 */

for (let i = 100; i > 0; i -= 5) {
    console.log(i)
}