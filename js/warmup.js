//Requirements:
//their credit score must be OVER 680 AND have at least $4000 on-hand
//OR, they must have at least $10000 on-hand

//Scenario:
//I have $12000 on-hand but have a 590 credit score. I get a loan.
//I have $5000 on-hand with a 720 credit score. I got a loan.
//I have $3000 on-hand with a 720 credit score. I do not get a loan.
//I have $9000 on-hand with a 590 credit score. I do not get a loan.

//let creditScore = 590;
//let cashOnHand = 10000;

//if (creditScore >= 680 && cashOnHand >= 4000){
//    console.log("You are qualified for a loan")
//} else if (cashOnHand >= 10000) {
//    console.log("you are qualified for a loan")
//} else {
//    console.log("I am sorry but you're not qualified for a loan")
//}

//function isFive(number) {
//    if (number === 5){
//        console.log("That's a fact!")
//    } else {
//        console.log("Your just wrong.")
//    }
//}

//isFive(5)

//Make a function named isMultipleOfThree that takes in an input
// and returns a boolean indicating whether or not the input is a multiple of three.

function isMultipleOfThree(num) {
    if (num % 3 === 0){
        return true
    } else {
        return false
    }
}

console.log(isMultipleOfThree(17))