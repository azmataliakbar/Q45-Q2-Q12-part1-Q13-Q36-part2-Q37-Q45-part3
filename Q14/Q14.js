/* Q14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to
invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/


// The guest list
var guestList = ["Asma Maqsood", "Batool Fatima", "Najma Maqbool", "Sara Mumtaz"];

// Function to print invitation message for each guest
function printInvitation(member) {
    console.log("Dear ".concat(member, ",\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\nAzmat Ali Akbar.\n "));
}

// Iterate through the guest list and print invitations
guestList.forEach(function (member) {
    printInvitation(member);
});
