"use strict";

// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> only logs *if the iteration number is odd*
function oddNumbers(numbers) {
    for (let i = 1; i <= numbers; i++){
        if (i % 2 === 1){
            console.log("this number is Odd: " + i)
        }
    }
}

oddNumbers(15);

// TODO: MINI EXERCISE
//      Write a function which uses a for-loop and
//      -> accepts the number of times to iterate as a parameter
//      -> logs "This is an even iteration" on the evens
//      -> logs "This is an odd iteration" on the odds
function evenOrOdd(number) {
    for (let a = 0; a < number; a++){
        if (a % 2 === 0){
            console.log("this number is even: " + a)
        } else {
            console.log("this number is odd: " + a)
        }
    }
}

evenOrOdd(16)

// TODO: MINI EXERCISE
//      Make a new version of your getPassword function using a for-loop!
//      -> The purpose of the for-loop is to only allow a maximum number of attempts
//          -> If the max attempt used unsuccessfully, alert the user of such and RETURN or BREAK
//      -> Once the user enters the correct password, use the 'break' keyword to end the loop
//      -> After the loop concludes, alert the use they have entered the correct password

function getPassword() {
    let pw = "Happiness"
    let attempts = 3;
    let userInput = prompt("Please enter Password.")
    for (let o = 1; o < attempts; o++){
        if (userInput !== pw) {
            alert("Password is incorrect")
            userInput = prompt("Please enter Password.")
        } else {
            alert("Welcome Home!")
        }
    }
}

getPassword();