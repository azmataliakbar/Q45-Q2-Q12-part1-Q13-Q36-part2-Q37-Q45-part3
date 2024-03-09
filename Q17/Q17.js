/* Q17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
of your program.*/



// The original guest list
var guestList3 = [
    "Paul Fernandez",
    "Joseph Fernandez",
    "Ruben Basten",
    "Davis Anthony",
    "Felix Anthony",
    "Peter Angelo",
    "Jonathan Basten"
];

// Printing invitation messages for all guests
guestList3.forEach(function (guest) {
    console.log("\nDear ".concat(guest, ", you are invited to dinner!\n"));
});

// Limit the number of guests based on table capacity
var tableCapacity = 2;
if (guestList3.length > tableCapacity) {
    console.log("\nNote:- Sorry, the table can only accommodate 2 guests.\n");

    // Removing extra guests from the list
    guestList3.splice(tableCapacity);
}

// Print final guest list
console.log("\nFinal guest list:-\n");
guestList3.forEach(function (guest) {
    console.log("\nDear ".concat(guest, ", you are invited to dinner!\n"));
});

// Empty the whole list
guestList3.length = 0;
console.log("\nThe guest list has been emptied:", guestList3);
