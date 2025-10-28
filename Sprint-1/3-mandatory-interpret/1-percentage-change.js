let carPrice = "10,000";
let priceAfterOneYear = "8,543";

carPrice = Number(carPrice.replaceAll(",", ""));
priceAfterOneYear = Number(priceAfterOneYear.replaceAll(",", ""));

const priceDifference = carPrice - priceAfterOneYear;
const percentageChange = (priceDifference / carPrice) * 100;

console.log(`The percentage change is ${percentageChange}`);

// Read the code and then answer the questions below

// a) How many function calls are there in this file? Write down all the lines where a function call is made
// Line 4, 5, 10

// b) Run the code and identify the line where the error is coming from - why is this error occurring? How can you fix this problem?
// It's missing a comma between the arguments at line 5 in replaceAll() method

// c) Identify all the lines that are variable reassignment statements
// Line 4, 5

// d) Identify all the lines that are variable declarations
// Line 1, 2

// e) Describe what the expression Number(carPrice.replaceAll(",","")) is doing - what is the purpose of this expression?
// Its purpose is to replace a substring with another string and then convert it into a number, in this case, replaces a command (",") with an empty string ("")
// In other words, remove the comma (",") in the string and then convert it into a number
