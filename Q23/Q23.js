"use strict";
/*Q23: Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test. Your code
should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/


let car = 'subaru';
// Test 1
console.log("\nIs car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// Test 2
console.log("\nIs car == 'toyota'? I predict False.");
console.log(car == 'toyota');

// Test 3
console.log("\nIs car != 'ford'? I predict True.");
console.log(car != 'ford');

// Test 4
console.log("\nIs car === 'subaru'? I predict True.");
console.log(car === 'subaru');

// Test 5
console.log("\nIs car !== 'subaru'? I predict False.");
console.log(car !== 'subaru');

// Test 6
console.log("\nIs car.length > 0? I predict True.");
console.log(car.length > 0);

// Test 7
console.log("\nIs car.length < 5? I predict False.");
console.log(car.length < 5);

// Test 8
console.log("\nIs car.startsWith('s')? I predict True.");
console.log(car.startsWith('s'));

// Test 9
console.log("\nIs car.includes('baru')? I predict True.");
console.log(car.includes('baru'));

// Test 10
console.log("\nIs car.charAt(2) === 'b'? I predict False.");
console.log(car.charAt(2) === 'b');
