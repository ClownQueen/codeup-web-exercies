"use strict";

/**Create a function called arrayToString.
 The function takes a parameter called myArray.
 It returns a string that is the concatenation of all the elements in myArray. */

// function arrayToString(myArray) {
//     let canCatString = "";
//     for (let i = 0; i < myArray.length; i++){
//         canCatString += myArray[i]
//     }
//     return canCatString
// }

/** Define a function named removeAll(array, value) that takes in two arguments. The first argument should be an array and the second argument should be a value you wish to remove
 Given the following array as an argument (do not define this array inside your function - pass it in as an argument)
 var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
 removeAll(bugs, "ant") should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]
 removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]
 removeAll(bugs, "roach") should return the original array b/c “roach” has no occurrances. */

//let bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];

// function removeAll(myArray, removingValue) {
//     let filteredArr = [];
//     for (let i = 0; i < myArray.length; i++){
//         if (myArray[i] !== removingValue){
//             filteredArr.push(myArray[i]);
//         }
//     }
//     return filteredArr;
// }
//
// console.log(removeAll(bugs, 'ant'))

/** Write a JS function called getNthCat that takes an array of cat objects as a first parameter called cats, and n as a second parameter.
 The function returns the cat object at index n in the cats array. */

// let myCats = [
//     {
//         catName: "Fifi",
//         age: 5
//     },
//     {
//         catName: "Fluffy",
//         age: 3
//     },
//     {
//         catName: "Abby",
//         age: 7
//     }
// ];

// function getNthCat(cats, n) {
//     return cats[n]
// }
//
// // print out the cat at index 1
// console.log(getNthCat(myCats, 1));