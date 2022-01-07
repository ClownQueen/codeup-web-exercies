"use strict";

/*** MINI EXERCISE 10 minutes ***
Declare an array of two objects for movies
    that have the following member values:
    title (string)
year released (int)
rating (string)
director (string)
imdb rating (decimal)
academy award win (boolean)

write a printMovie function that takes a movie as a parameter and prints its info.
    call it with each of your array elements.
    write a printMovies function that takes an array as a parameter,
 iterates over the array, and calls printMovie on each of the array elements */

/*** Continuing MINI EXERCISE until lunch ***
 Change the director member of your movies to an object
 with firstName and lastName members
 Make an array member for your movies called genres.
 It is an array of string elements where each element
 is one of your movies’ genres from imdb.com
 and change your printMovie function */

/*** last part of MINI EXERCISE ***
 Add a rate(rating) function to each of your movie objects.
 The function takes an int parameter called rating
 Modify rate(rating) to set a myRating property on that object
 modify printMovie to display myRating for each movie */


 function printAllMovies(movies) {
    for (let i = 0; i < movies.length; i++) {
        printMovie(movies[i]);
    }
}

function printMovie(movie) {
    console.log("\nTitle: " + movie.title);
    console.log("Year Released: " + movie.yearRelease);
    console.log("Movie Rating: " + movie.rating);
    console.log("Movie Director: " + movie.director);
    console.log("Movie's IMDB Rating: " + movie.imbdRating);
    console.log("Movie winning a Award: " + movie.academyAward);
}

let movies = [];

movies[0] = {};
movies[0].title = 'Encanto';
movies[0].yearRelease = 2021;
movies[0].rating = 'PG';
movies[0].director = 'Jared Bush';
movies[0].imbdRating = 7.3;
movies[0].academyAward = true;


movies[1] = {
    title: 'Scream',
    yearRelease: 1996,
    rating: 'R',
    director: 'Wes Craven',
    imbdRating: 7.3,
    academyAward: true
}

movies[2] = {
    title: 'Halloween Kills',
    yearRelease: 2021,
    rating: 'R',
    director: 'David Gordon Green',
    imbdRating: 5.6,
    academyAward: false
}


printAllMovies(movies);

