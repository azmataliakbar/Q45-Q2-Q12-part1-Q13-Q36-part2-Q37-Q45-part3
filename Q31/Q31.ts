/*Q31: No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.*/


let myAge: number = 20; // You can change the value of age here

if (myAge >= 0.00274 && myAge < 2) {
    console.log("\nThe person is a baby.");
} else if (myAge >= 2 && myAge < 4) {
    console.log("\nThe person is a toddler.");
} else if (myAge >= 4 && myAge < 13) {
    console.log("\nThe person is a kid.");
} else if (myAge>= 13 && myAge < 20) {
    console.log("\nThe person is a teenager.");
} else if (myAge >= 20 && myAge < 65) {
    console.log("\nThe person is an adult.");
} else if (myAge >= 65) {
    console.log("\nThe person is an elder.");
} else {
    console.log("\nInvalid age.");
}



let users: string[] = ["Alice", "Bob", "Catherine"]; // Assuming this is your array of users

if (users.length === 0) {
    console.log("\nUser array is empty [], We need to find some users!");
} else {
    users = [];// Removing all usernames from the array
    console.log(`\nAll user names have been removed. ${users}`);

}
