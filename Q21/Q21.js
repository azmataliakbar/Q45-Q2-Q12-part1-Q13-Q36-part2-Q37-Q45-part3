/*Q21: They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.*/


// Objects containing different items
var items = [
    { name: "Laptop", category: "Electronics", price: 1200 },
    { name: "Backpack", category: "Fashion", price: 50 },
    { name: "Book", category: "Education", price: 20 },
    { name: "Headphones", category: "Electronics", price: 100 },
    { name: "Sunglasses", category: "Fashion", price: 80 }
];

// Print out the items
console.log("\nItems:");
items.forEach(function (item) {
    console.log("\n".concat(item.name, " -: Category: ").concat(item.category, ", Price: $").concat(item.price));
});
