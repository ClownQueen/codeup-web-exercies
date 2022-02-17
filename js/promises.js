"use strict";

/** Create a function that accepts a GitHub username, and returns a promise
 that resolves returning just the date of the last commit that user made. */

const gitHubPromise = fetch('https://api.github.com/repos/ClownQueen/codeup-web-exercises/commits', {headers: {'Authorization': `token ${PROMISE_API_KEY}`}})
    .then(response => response.json())
    .catch(error => console.error(error));
    console.log(gitHubPromise)

function wait(num){
        return new Promise((resolve, reject) => setTimeout(() =>{
            resolve("you\'ll see this within " + (num/1000) + " second(s)."), num;
        }));
}

wait(4000).then(() =>{
    console.log(`You'll see this after 4 seconds`)
});