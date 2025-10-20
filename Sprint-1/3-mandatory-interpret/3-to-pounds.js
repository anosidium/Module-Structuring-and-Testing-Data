const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
  0,
  penceString.length - 1
);

const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0");
const pounds = paddedPenceNumberString.substring(
  0,
  paddedPenceNumberString.length - 2
);

const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)
  .padEnd(2, "0");

console.log(`£${pounds}.${pence}`);

// This program takes a string representing a price in pence
// The program then builds up a string representing the price in pounds

// You need to do a step-by-step breakdown of each line in this program
// Try and describe the purpose / rationale behind each step

// To begin, we can start with
// 1. const penceString = "399p": initialises a string variable with the value "399p"
// 3. Declares a variable with the value of "399" by truncating the character `p`
// 8. Declares a variable with the value of "399" by prefixing with three `0`
// but does not actually do that because the length of the string is 3 and prefixing three `0` exceeds the length 
// 9. Declares a variable by extracting the 3 pounds from the currency
// by using the substring method starting from the beginning of the string and going up by 1 unit
// 10. Declares a variable by extracting the pence from the currency
// by using the substring method starting from the end of the string and then add 2 `0` but does not do that because it exceeds the length of the string
// 18. Prints the currency by using the pounds variable prefixed with pound sign (£) and the pence variable which are separated with the . character