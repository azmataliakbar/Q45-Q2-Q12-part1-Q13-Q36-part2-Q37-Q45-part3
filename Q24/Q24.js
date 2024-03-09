"use strict";
/*Q24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/


let car2 = 'subaru';

// Tests for equality and inequality with strings
console.log("\nIs 'apple' equal to 'apple'? I predict True.");
console.log('apple' === 'apple'); // True

console.log("\nIs car !== 'subaru'? I predict False.");
console.log(car2 !== 'subaru'); // False

// Tests using the lower case function
console.log("\nIs 'HELLO' equal to 'hello'? I predict True.");
console.log('HELLO'.toLowerCase() === 'hello'); // True

// Numerical tests
console.log("\nIs 10 greater than 5? I predict True.");
console.log(10 > 5); // True

console.log("\nIs 7 less than 10? I predict True.");
console.log(7 < 10); // True

console.log("\nIs 10 greater than or equal to 10? I predict True.");
console.log(10 >= 10); // True

console.log("\nIs 5 less than or equal to 3? I predict False.");
console.log(5 <= 3); // False

// Tests using "and" and "or" operators
console.log("\nIs true and false? I predict False.");
console.log(true && false); // False

console.log("\nIs true or false? I predict True.");
console.log(true || false); // True

// Test whether an item is in an array
const numbers5 = [1, 2, 3, 4, 5];
console.log("\nIs 3 in the numbers array? I predict True.");
console.log(numbers5.includes(3)); // True

// Test whether an item is not in an array
console.log("\nIs 6 not in the numbers array? I predict True.");
console.log(!numbers5.includes(6)); // True
