/*Q16: More Guests: You just found a bigger dinner table, so now more space is
available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a
bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/


// The original guest list
var originalGuestList = [
    "Joseph Fernandez",
    "Ruben Basten",
    "Felix Anthony",
    "Philip Murphy"
];

// Function to print invitation message for each guest
function printInvitation2(guest) {
    console.log("\nDear ".concat(guest, ",\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\nAzmat Ali Akbar.\n"));
}

// Print invitations for the original guest list
console.log("\nOriginal Invitations:-");
originalGuestList.forEach(function (guest) {
    printInvitation2(guest);
});

// The guest who can't make it
var guestWhoCantMakeIt = originalGuestList.pop();
console.log("\nUnfortunately, ".concat(guestWhoCantMakeIt, " can't make it to dinner."));

// The guest who can't make it with a new guest
originalGuestList.push("Peter Angelo");

// Print invitations for the updated guest list
console.log("\nUpdated Invitations:");

originalGuestList.forEach(function (guest) {
    printInvitation2(guest);
});

// About the bigger dinner table
console.log("\nImportant Note:- Good news! We found a bigger dinner table.");

// Adding one new guest to the beginning of the array
originalGuestList.unshift("Paul Fernandez");

// Adding one new guest to the middle of the array
originalGuestList.splice(3, 0, "Davis Anthony");

// Adding one new guest to the end of the list using append
originalGuestList.push("Jonathan Basten");

// Print invitations for the final guest list
console.log("\nNote:- Final Invitations:");
originalGuestList.forEach(function (guest) {
    printInvitation2(guest);
});
