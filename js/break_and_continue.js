"use strict";

//prompt for an odd number between 1 and 50

do{
    var numToSkip = parseInt(prompt("PLease enter a number between 1 and 50"));
    if ((numToSkip) > 1 && (numToSkip) < 50){
        break;
    }
} while (((numToSkip) <= 1 || (numToSkip) >= 50) || !numToSkip)
for (let i = 0; i < 50; i++) {
    if (i === parseInt(numToSkip)) {
        console.log("yikes skipping number: " + i);
        continue;
    }
    if (i % 2 !== 0){
        console.log("here is an odd number"  + i)
    }
}
