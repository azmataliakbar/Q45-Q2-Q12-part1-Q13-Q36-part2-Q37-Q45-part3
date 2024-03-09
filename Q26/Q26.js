/*Q26: Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/


// Variable to store the alien's color
var alien_color = 'green'; // Change this value to 'yellow' or 'red' to test different scenarios

// Version that runs the if block
if (alien_color === 'green') {
    console.log("\nCongratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("\nCongratulations! You just earned 10 points for shooting an alien that is not green.");
}

// Version that runs the else block
alien_color = 'red'; // Change the value to 'yellow' or 'green' to test different scenarios
if (alien_color === 'green') {
    console.log("\nCongratulations! You just earned 5 points for shooting the green alien.");
}
else {
    console.log("\nCongratulations! You just earned 10 points for shooting an alien that is not green.");
}
