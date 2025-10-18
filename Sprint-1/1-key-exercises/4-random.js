const minimum = 1;
const maximum = 100;

const num = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

// In this exercise, you will need to work out what num represents?
// Try breaking down the expression and using documentation to explain what it means
// It will help to think about the order in which expressions are evaluated
// Try logging the value of num and running the program several times to build an idea of what the program is doing

// num represents a random number in an inclusive range from 1 to 100
// First, it starts with 100 - 1 + 1, which is equals to 100
// Secondly, it multiply with Math.random(), which the function returns any number between 0 and 1, inclusive.
// Thirdly, Math.floor() rounds down and returns the largest integer less than or equal to a given number
// Finally, it adds 1