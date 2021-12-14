"use strict";

console.log("Hello from External Java Script")

alert('Welcome to my Website!')

let favoriteColor = prompt("What's your favorite color?")
alert("I like the color " + favoriteColor + " too!")

let student = 1;
let enrolled = prompt("How many people are in this course?");
let course = student + enrolled
let doesNotConflict = false;

if (course > 17 || doesNotConflict){
    alert("The class is full, choose a different class")
} else {
    alert("You have been put in the class")
}

let bought = prompt("how many items are you buying?")
let expired = confirm("is the product expired?")
let premiumMember = confirm("are you a member?")
if ((bought >= 2) && (expired = false)){
    alert("Your products are ready for checking out.")
} else if(premiumMember){
    alert("Your Products are ready to be checked out.")
} else {
    alert("I'm sorry but you cannot check anything out.")
}