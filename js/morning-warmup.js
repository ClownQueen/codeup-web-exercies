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

/** Write a function called reverseString that takes in a string and returns a string
 * that has the characters of the original string in reverse order.
 example: reverseString('hello') - returns 'olleh' */
// function reverseString(input) {
//     let results = "";
//     for (let i = input.length-1; i >= 0; i--){
//         results = results + input[i];
//     }
//     return results;
// }
//
//
// console.log(reverseString("hello"))

/** Write a function called findAverage that takes in an array of integers representing grades and returns the average.
 Example input: [95, 74, 86, 100]
 Example output: 88.75 */

// function findAverage(num) {
//     let sum = 0
//
//     num.forEach(function (num) {
//         sum = sum + num
//     })
//
//     return sum / num.length
//
// }

/** write a function called sumOfSquares(a, b)
 takes 2 parameters called a and b
 returns the sum of the squares of a and b
 i.e., (a to the power of 2) + (b to the power of 2)

 e.g., console.log(sumOfSquares(2, 3));
 will return 13 */

// function sumOfSquares(a, b) {
//     return Math.pow(a, 2) + Math.pow(b, 2)
// }
//
// console.log(sumOfSquares(2,2))