/*25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

• Write an if statement to test whether the alien’s color is green. If it is, print
a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that
fails. (The version that fails will have no output.)*/

// Variable to store the alien's color
let alien_color5: string = 'green'; // Change this value to 'yellow' or 'red' to test different scenarios

// Version that passes the if test
if (alien_color5 === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}

// Version that fails the if test (no output)
if (alien_color5 === 'red') {
    console.log();
}

// Version that fails the if test (no output)
if (alien_color5 === 'yellow') {
  console.log();
}
