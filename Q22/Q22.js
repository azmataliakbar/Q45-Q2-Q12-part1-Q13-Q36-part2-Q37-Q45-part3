/*Q22:  Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs
to produce an index error. Make sure you correct the error before closing the program.*/


// An array of numbers
var numbers = [1, 2, 3, 4, 5];

// Trying to access an index that doesn't exist (index 10)
var indexErrorExample = numbers[10]; // This will produce an index error

// Correcting the error by accessing an existing index (index 4)
var correctIndexExample = numbers[4]; // This will not produce an error

// Print out the results
console.log("\nInternational Index Error:", indexErrorExample); // This will cause an error
console.log("\nCorrected Index Example:", correctIndexExample); // This will print 5
