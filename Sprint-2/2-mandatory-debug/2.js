// Predict and explain first...

// Predict the output of the following code:
// =============> Write your prediction here

// It will convert 103 number into a String representation and then will either do no manipulations or invert the string

const num = 103;

function getLastDigit(digit) {
  return digit.toString().slice(-1);
}

console.log(`The last digit of 42 is ${getLastDigit(42)}`);
console.log(`The last digit of 105 is ${getLastDigit(105)}`);
console.log(`The last digit of 806 is ${getLastDigit(806)}`);

// Now run the code and compare the output to your prediction
// =============> write the output here
// Explain why the output is the way it is
// =============> write your explanation here
// Finally, correct the code to fix the problem
// =============> write your new code here

// This program should tell the user the last digit of each number.
// Explain why getLastDigit is not working properly - correct the problem

// The function getLastDigit() has no parameters and referenced a globally scoped constant `num`.
// In order for it to `work properly`, a parameter is required and referencing it in order to
// return an expected value