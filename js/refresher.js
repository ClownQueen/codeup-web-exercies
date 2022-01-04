"use strict";

/* Write a function called add(num1, num2) which returns the sum of a and b
Write a function named square(numToSqr) which takes in a number (numToSqr) and returns the number multiplied by itself
Write a function called sumOfSquares(a, b).
You should find the square of a, then the square of b.
Invoke add(num1, num2) and pass the new squared values in as arguments. */

function add(num1, num2) {
    return num1 + num2;
}

console.log(add(12, 3));

function square(numToSqr) {
    return numToSqr * numToSqr
}

console.log(square(5))

function sumOfSquare(a , b) {
    return add(square(a), square(b))
}

console.log(sumOfSquare(2, 3))


/* FIZZ-BUZZ
Write a function named getFizzBuzz(startingNum) which performs the following actions:
If startingNum is divisible by 3
console log "fizz"
Else, if startingNum is divisible by 5
console log "buzz"
If startingNum is divisible by 3 AND divisible by 5
return a string which says "FIZZ BUZZ"
Thinking about getFizzBuzz(startingNum), let's console log the return value of this function
What if getFizzBuzz doesn't return a value (VOID)?
How do you want to handle that? */

function getFizzBuzz(startingNum) {
    if (startingNum % 3 === 0 && startingNum % 5 === 0) {
        console.log("FIZZ BUZZ")
    }else if (startingNum % 3 === 0){
        console.log("Fizz")
    } else if (startingNum % 5 === 0){
        console.log("Buzz")
    }else if (startingNum % 3 !== 0 && startingNum % 5 !== 0){
        console.log("unidentified numbers found here")
    }
}

getFizzBuzz(15);


/* Define a function named getPassword() which performs the following actions:
Using prompt(), alert(), variables, and a while-loop, ask the user to input their
 password until their entry matches your hard-coded password value.
HINT: start by defining the correct password and don't forget to link your html file */

/* function getPassword() {
    let password = "NoahWood";
    let userInput = prompt("Input Password")
    let attemps = 1
    while (userInput !== password && attemps < 3) {
        alert("incorrect password.")
        userInput = prompt("Input Password")
        attemps++;
    }
    if (attemps > 2) {
        alert("You can't try anymore.");
    } else {
        alert("Welcome Home!")
    }
}

getPassword(); */

/* function getPassword() {
    let answer = "Bruno";
    let guess;
     while(guess !== answer);{
        guess = prompt("Enter your password: ");
    }
    console.log("done")
}

getPassword(); */

/* Write a function named getMeaningOfLife which accepts one parameter, meaningfulNum.
This function will use a while-loop to compare its current number (a variable named counter) against the meaningfulNum.
While the counter is not equivalent to the meaningfulNum, continue the loop.
Once that condition is broken, console log a string telling the user "The meaning of life, the universe,
and everything is [your meaningful number]"

Thinking about the above function, getMeaningOfLife, let’s ask a question: What happens if the value
of meaningfulNum is a non-numeric?

Write some code to account for this case. How the function handles the situation is up to you!
Let’s continue with getMeaningOfLife: If the value of meaningfulNum happens to be 42,
console log a separate message at the end of the function to say: "Did you bring your towel?"
 */

function getMeaningOfLife(meaningfulNum) {
    let counter = 0;

    meaningfulNum = parseInt(meaningfulNum)

    if (meaningfulNum)
    while (meaningfulNum !== counter){
        counter++;
    }
    console.log("The meaning of life, the universe, and everything is " + meaningfulNum + ".")
    if (counter === 42){
        console.log("Did you bring your towel?")
    }
}

getMeaningOfLife(50)