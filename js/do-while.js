"use strict";

/*5 cones sold...  // if there are enough cones
Cannot sell you 6 cones I only have 3...  // If there are not enough cones
Yay! I sold them all! // If there are no more cones */

// This is how you get a random number between 50 and 100
//let allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
//let conesSold = Math.floor(Math.random() * 5) + 1;

function sellSomeIceCream() {
// how many cones in inventory
    let allCones = Math.floor(Math.random() * 50) + 50;
//how many cones are requested
    let conesSold;
    do {
        conesSold = Math.floor(Math.random() * 5) + 1;
        console.log("You asked for " + conesSold + " ice cream cones.");
        // make sure we have enough cones to actually sell
        if (conesSold > allCones) {
            console.log("Cannot sell you " + conesSold + " I only have " + allCones)
            continue;
        }

        //subtracting cones requested from inventory
        allCones -= conesSold;
        console.log("There are " + allCones + " still remaining!")

    } while (allCones > 0) /*stop when we run out of cones */{
        console.log(allCones)
    }
}

sellSomeIceCream();