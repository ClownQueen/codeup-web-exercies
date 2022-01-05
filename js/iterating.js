 "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */

    let names = ['Dollie', 'Pj', 'Selah', 'Zion']

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */

    console.log(names.length)

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(names[0])
    console.log(names[1])
    console.log(names[2])
    console.log(names[3])

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */

 console.log("Using a For Loop:");
    function rollCall() {
        for (let i = 0; i < names.length; i++){
            console.log(names[i])
        }
    }

    rollCall();

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */

 console.log("using forEach loop:");
    names.forEach(function (name) {
        console.log(name);
    })

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */

 console.log("function calling specific arrays points:");
function firstOnes(coolArray){
    return coolArray[0];
}

function secondOnes(coolArray) {
    return coolArray[1];
}

function lastOne(coolArray){
    let lastIndex = coolArray.length -1
    return coolArray[lastIndex]
}

 console.log(firstOnes(names));
 console.log(secondOnes(names));
 console.log(lastOne(names));