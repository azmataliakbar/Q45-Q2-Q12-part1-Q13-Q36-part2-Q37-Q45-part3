/*Q29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement,
such as You really like bananas!*/



// Array of favorite fruits
let favorite_fruits: string[] = ['banana', 'apple', 'mango'];

// Checking if 'banana' is in the array
if (favorite_fruits.includes('banana')) {
    console.log("\nYou really like bananas!");
}

// Checking if 'apple' is in the array
if (favorite_fruits.includes('apple')) {
    console.log("\nYou really like apples!");
}

// Checking if 'mango' is in the array
if (favorite_fruits.includes('mango')) {
    console.log("\nYou really like mangoes!");
}

// Checking if 'strawberry' is in the array
if (favorite_fruits.includes('strawberry')) {
    console.log("\nYou really like strawberries!");
}

// Checking if 'pineapple' is in the array
if (favorite_fruits.includes('pineapple')) {
    console.log("\nYou really like pineapples!");
}
