let a = 1;
console.log(a);

let b = a++;
console.log(b);

let c = ++a;
console.log(c);

let d = "hello";
console.log(d++);

let e = false;
console.log(e++);

let price = 2.7
console.log(price.toFixed(2));

console.log(isNaN(0));
console.log(isNaN(1));
console.log(isNaN("string"));
console.log(isNaN("0"));
console.log(isNaN("1"));
console.log(isNaN("3.145"));
console.log(isNaN(Number.MAX_VALUE));
console.log(isNaN(Infinity));
console.log(isNaN("true"));
console.log(isNaN(true));
console.log(isNaN("false"));
console.log(isNaN(false));
console.log(!true)
console.log(!false)
console.log(!!true)
console.log(!!false)
console.log(!!0)
console.log(!!-0)
console.log(!!1)
console.log(!!-1)
console.log(!!0.1)
console.log(!!"hello")
console.log(!!"")
console.log(!!'')
console.log(!!"false")
console.log(!!"0")

let sample = "Hello Codeup, "

console.log(sample.length)

console.log(sample.toUpperCase())

console.log(sample.toLowerCase())

sample = sample + "Students"
console.log(sample)

console.log(sample.replace("Students", "Class"))

console.log(sample.indexOf("c"))

console.log(sample.indexOf("C"))

console.log(sample.substring(sample.indexOf("C"), 12))

let littleMermaid = 3;
let brotherBear = 5;
let hercules = 1;

let rentMoney = 3;

let Total = (littleMermaid * rentMoney) + (brotherBear * rentMoney) + (hercules * rentMoney)

console.log("You will have to pay $" + Total)

let googlePay = 400;
let amazonPay = 380;
let facebookPay = 350;

let googleHours = 6;
let amazonHours = 4;
let facebookHours = 10;

console.log("you have made " + (googlePay * googleHours + amazonPay * amazonHours + facebookPay * facebookHours) + " dollars");

let student = 1;
let enrolled = 15;
let course = student + enrolled
let doesNotConflict = false;

if (course > 17 || doesNotConflict){
    console.log("The class is full, choose a different class")
} else {
    console.log("You have been put in the class")
}

let bought = 2
let expired = false
let premiumMember = true
if ((bought >= 2) && (expired = false)){
    console.log("Your products are ready for checking out.")
} else if(premiumMember){
    console.log("Your Products are ready to be checked out.")
} else {
    console.log("I'm sorry but you cannot check anything out.")
}

