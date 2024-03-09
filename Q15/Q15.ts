/* Q15: Changing Guest List: You just heard that one of your guests can’t make the
dinner, so you need to send out a new set of invitations. You’ll have to think of
someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the
end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with
the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still
in your list.*/

// The original guest list
let originalGuestList1: string[] = ["Asma Maqsood", "Batool Fatima", "Najma Maqbool", "Sara Mumtaz"];

// Function to print invitation message for each guest
function printInvitation1(guest: string): void {
  console.log(`\nDear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\nPlease let me know if you can attend.\nBest regards,\nAzmat Ali Akbar`);
}

// Print invitations for the original guest list
console.log("\nOriginal Invitations:");
originalGuestList1.forEach(guest => {
  printInvitation1(guest);
});

// The guest who can't make it
const guestWhoCantMakeIt1: string = originalGuestList1.pop()!;
console.log(`\nNote:- Unfortunately, ${guestWhoCantMakeIt1} can't make it to dinner.\n`);

// The guest who can't make it with a new guest
originalGuestList1.push("Mumtaz Alam");

// Print invitations for the updated guest list
console.log("\nUpdated Final Invitations:");
originalGuestList1.forEach(guest => {
  printInvitation1(guest);
});
