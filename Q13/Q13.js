"use strict";
/*13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”*/
// Define an array of favorite transportation examples
let transportation = ["Honda electric bike", "Kawasaki mountain bike", "Suzuki road bike"];
// Print statements about each item in the list
for (let i = 0; i < transportation.length; i++) {
    console.log(`\nI would like to own a ${transportation[i]}.`);
}
;
// Example 2
let vehicles = ["KIA Sportage car", "Suzuki Swift car", "Toyota Corolla car"];
vehicles.map((items) => console.log(`\nI would like to own a ${items}.`));
