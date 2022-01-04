"use strict";

//prompt for an odd number between 1 and 50

let numberToStopAt = prompt("Pick a number between 1 and 50")

for (let number = 1; number < 50; number++) {
    if (numberToStopAt % 2 !== 1){
        continue;
    }
    console.log("This number is Odd: "  + number)
}

