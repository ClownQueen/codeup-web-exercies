"use strict";

// Mini Exercise
// -Create an array with five strings representing your favorite artists (music or otherwise) and store it in a variable called favoriteArtists
// -Write a function that accepts an array as a parameter and...
// -> logs the first, third, and last elements of that array
// -Invoke your function and pass favoriteArtists as an argument

let favoriteArtists = ['Trixie Mattel', 'The Living Tombestones', 'Abba', 'Jack Stauber', 'Queen']

function nameTheArtists() {
    for (let i = 0; i < favoriteArtists.length; i++){
        console.log(favoriteArtists[i])
    }
}

nameTheArtists();