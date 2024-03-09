/*Q32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/


// Current users list
let current_users: string[] = ["john", "emma", "alex", "sarah", "mike"];

// New users list
let new_users: string[] = ["emily", "alex", "chris", "MIKE", "sam"];


// Loop through new users to check for availability
for (let i = 0; i < new_users.length; i++) {
    let usernameTaken: boolean = false; // to track whether a username is taken already taken or not.
    for (let j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) { // convert new_user in lowerCase to perform a case in sensitive comparison with current_user
            usernameTaken = true; // it means that we found matching username which is available
            break; // if found matching username then stop searching
        }
    }
    if (usernameTaken) {
        console.log(`\nSorry, the username '${new_users[i]}' is already taken. Please enter a new username.\n`);
    } else {
        console.log(`\nCongratulations! The username '${new_users[i]}' is available.\n`);
    }
}
