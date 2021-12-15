"use strict";

// Write a function called count(input) that takes in a string and returns the number of characters.
//     Test to ensure this function will:
// return the accurate length of the string
// return a false in the event the argument given is not a string
// Account for: numbers, booleans, undefined, null

function count(input) {

    if (typeof input === "string") {
        return input.length
    } else {
        return false
    }

}


function countTest() {
    let actualValue = count("Undertale");
    let expectedValue = 9;
    console.log("Expected return value acurate " + (actualValue === expectedValue))

    actualValue = 420
    expectedValue = false
    console.log("Expect to handle numbers as false: " + (actualValue === expectedValue));

    actualValue = true
    expectedValue = false
    console.log("Expected to handle boolean as false: " + (actualValue === expectedValue))

}

countTest();