/**Create a function called arrayToString.
    The function takes a parameter called myArray.
    It returns a string that is the concatenation of all the elements in myArray. */

function arrayToString(myArray) {
    let canCatString;
    for (let i = 0; i < myArray.length; i++){
        canCatString += myArray[i]
    }
    return canCatString
}

