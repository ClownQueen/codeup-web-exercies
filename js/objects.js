"use strict";

/**
 * TODO:
 * Create an object with firstName and lastName properties that are strings
 * with your first and last name. Store this object in a variable named
 * `person`.
 *
 * Example:
 *  > console.log(person.firstName) // "Rick"
 *  > console.log(person.lastName) // "Sanchez"
 */

let person = {};
    person.firstName = 'Micah'
    person.lastName = 'Wood'

console.log("First Name:")
console.log(person.firstName);

console.log("\nLast Name")
console.log(person.lastName);

/**
 * TODO:
 * Add a sayHello method to the person object that returns a greeting using
 * the firstName and lastName properties.
 * console.log the returned message to check your work
 *
 * Example
 * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
 */
person.sayHello = function (){
    console.log("\nHello " + person.firstName + " " + person.lastName);
}
person.sayHello();

/** TODO:
 * HEB has an offer for the shoppers that buy products amounting to
 * more than $200. If a shopper spends more than $200, they get a 12%
 * discount. Write a JS program, using conditionals, that logs to the
 * browser, how much Ryan, Cameron and George need to pay. We know that
 * Cameron bought $180, Ryan $250 and George $320. Your program will have to
 * display a line with the name of the person, the amount before the
 * discount, the discount, if any, and the amount after the discount.
 *
 * Uncomment the lines below to create an array of objects where each object
 * represents one shopper. Use a foreach loop to iterate through the array,
 * and console.log the relevant messages for each person
 */

function printAllAmounts(shoppers){
    for (let i = 0; i < shoppers.length; i++){
        checkOut(shoppers[i])
    }
}

function checkOut(shopping) {
        console.log('\n' + shopping.name + " has an amount of $" + shopping.amount)
        if (shopping.amount > 200){
            console.log("Discount has been added.")
            let totalAmount = shopping.amount - (shopping.amount * discount)
            console.log("The new total is $" + totalAmount)

        } else {
            console.log("Your total is $" + shopping.amount)
        }
}

let shoppers = [];
    // name: 'Cameron', amount: 180,
    // name: 'Ryan', amount: 250,
    // name: 'George', amount: 320

shoppers[0] = {}
shoppers[0].name = 'Cameron';
shoppers[0].amount = 180;

shoppers[1] = {
    name: "Ryan",
    amount: 250
}

shoppers[2] = {
    name: 'George',
    amount: 320
}

let discount = .12

printAllAmounts(shoppers);

/** TODO:
 * Create an array of objects that represent books and store it in a
 * variable named `books`. Each object should have a title and an author
 * property. The author property should be an object with properties
 * `firstName` and `lastName`. Be creative and add at least 5 books to the
 * array
 *
 * Example:
 * > console.log(books[0].title) // "The Salmon of Doubt"
 * > console.log(books[0].author.firstName) // "Douglas"
 * > console.log(books[0].author.lastName) // "Adams"
 */
let books = [];

books[0] = {}
books[0].title = "Frankenweenie"
books[0].firstName = "Elizabeth"
books[0].lastName = "Rudnick"

books[1] = {
    title: "No Home",
    firstName: "Wanan",
    lastName: "N/A"
}

books[2] = {
    title: "Diary of a Wimpy Kid",
    firstName: "Jeff",
    lastName: "Kinney"
}

books[3] = {
    title: "Princess Diary",
    firstName: "Meg",
    lastName: "Cabot"

}

books[4] = {
    title: "Bungo Stray Dogs",
    firstName: "Kafka",
    lastName: "Asagiri"
}

/**
 * TODO:
 * Loop through the books array and output the following information about
 * each book:
 * - the book number (use the index of the book in the array)
 * - the book title
 * - author's full name (first name + last name)
 *
 * Example Console Output:
 *
 *      Book # 1
 *      Title: The Salmon of Doubt
 *      Author: Douglas Adams
 *      ---
 *      Book # 2
 *      Title: Walkaway
 *      Author: Cory Doctorow
 *      ---
 *      Book # 3
 *      Title: A Brief History of Time
 *      Author: Stephen Hawking
 *      ---
 *      ...
 */

books.forEach(function (book) {
    console.log("This book is at index " + books.indexOf(book))
    console.log("\tthis book is called" + book.title);
    console.log("\tThe author is " + book.author.firstName + " "+ book.author.lastName);
})

console.log(books[0].title);

/**
 * Bonus:
 * - Create a function named `createBook` that accepts a title and author
 *   name and returns a book object with the properties described
 *   previously. Refactor your code that creates the books array to instead
 *   use your function.
 * - Create a function named `showBookInfo` that accepts a book object and
 *   outputs the information described above. Refactor your loop to use your
 *   `showBookInfo` function.
 */