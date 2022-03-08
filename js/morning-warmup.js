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

/** Write a function called whichStringIsLonger() that takes two parameters and returns one of 4 values:
 returns "first" if the first string parameter is longer
 returns "second" if the second parameter is longer
 returns "neither" if they are the same length
 returns false if either or both of the parameters are not strings */

// function whichStringIsLonger(a,b){
//     while (typeof a === "string" && typeof b === "string"){
//         if (a.length >  b.length){
//             return "first is longer"
//         } else if (a.length < b.length){
//             return "second is longer"
//         } else {
//             return "neither, they are the same length"
//         }
//     }
//     return false
// }
// console.log(whichStringIsLonger("bobby", "lou")); // returns first
// console.log(whichStringIsLonger("bob", "louise")); // returns second
// console.log(whichStringIsLonger("bob", "lou")); // returns neither
// console.log(whichStringIsLonger("bobby", 2)); // returns false
// console.log(whichStringIsLonger(1, "lou")); // returns false

/** Write a function called convertLowHighToObject that takes in a string  that represents the low and high temperature in this format '35, 42'
 *  (assuming low will always be the left value and high the right) and returns an object with the properties 'low' and 'high'
 *  with the values of those respective properties set to the corresponding values in the input string.
 NOTE: the values in the object should be of the number type
 Example input: '35, 42'
 Example return: {low: 35, high: 42} */

// function convertLowHighToObject(string) {
//     let lowHighArr = string.split(',')
//     return{
//         low: parseInt(lowHighArr[0]),
//         high: parseInt(lowHighArr[1])
//     }
// }
//
// console.log(convertLowHighToObject('50, 12'))

/** Write a function called countDuplicates that takes in a string and returns an object that contains the count for each letter
 * within the given string. ex: countDuplicates("adsjfdsfsfjsdjfhacabcsbajda")
 returns { a: 5, d: 4, s: 5, j: 4, f: 4, h: 1, c: 2, b: 2 } */

// function countDuplicates(str) {
//     let characterCount = {}
//     let count = 1;
//     for (let i = 0; i < str.length; i++) {
//         if (!(str[i] in characterCount)){
//             characterCount[str[i]] = count;
//         } else {
//             characterCount[str[i]] = characterCount[str[i]] + 1;
//         }
//     }
//     return characterCount;
// }
//
// console.log(countDuplicates("Mikewazawski"))

/** Write a function called makePerson. It takes 2 arguments: personName and age.
 personName must be at least 1 character long. age must be between 1 and 150.
 If either of the parameters is invalid, output an appropriate message to the console and return FALSE.
 If both parameters are valid, return an object containing personName and age.
 E.g.,
 console.log(makePerson("Bob", 30)); // outputs {personName:"Bob", age:30}
 console.log(makePerson("", 30));
 // outputs:
 Person name cannot be blank
 false */

// function makePerson(personName, personAge) {
//     if (personName === ""){
//         console.log("Please enter a name.")
//         return false
//     }
//     if (personAge < 1 || personAge > 50){
//         console.log("Make sure you have the correct age.")
//         return false
//     }
//     return {personName, personAge}
// }
//
// console.log(makePerson("Bob", 30))
// console.log(makePerson("", 30))
//
// console.log(makePerson("Pj", 15))
// console.log(makePerson("Mikey", -20))