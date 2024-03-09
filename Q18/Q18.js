/*Q18: Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its
order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.*/


var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};

// Define an array of places to visit
var placesToVisit = [
    "Sky Tree, Tokyo",
    "Opera House, Sydney",
    "Eiffel Tower, Paris",
    "Times Square, New York",
    "Great Wall, Beijing",
];

// Print the array in its original order
console.log("\nStep 1: Original Order:");
console.log(placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("\nStep 2: Alphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort());

// Show that the array is still in its original order
console.log("\nStep 3: Array is still in original order:");
console.log(placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nStep 4: Reverse Alphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());

// Show that the array is still in its original order
console.log("\nStep 5: Array is still in original order:");
console.log(placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("\nStep 6: Reversed Order:");
console.log(placesToVisit);

// Reverse the order of the list again to restore original order
placesToVisit.reverse();
console.log("\nStep 7: Array is back to its original order:");
console.log(placesToVisit);

// Sort the array in alphabetical order
placesToVisit.sort();

console.log("\nStep 8: Sorted in Alphabetical Order:");
console.log(placesToVisit);

// Sort the array in reverse alphabetical order
console.log("\nStep 8: Reverse Alphabetical Order:");
console.log(__spreadArray([], placesToVisit, true).sort().reverse());
