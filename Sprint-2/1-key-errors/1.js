// Predict and explain first...

// Why will an error occur when this program runs?
// =============> write your prediction here

// Because of the variable name collision. The function parameter is called decimalNumber
// but another decimalNumber is declared inside the body of the function.

// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

// =============> write your explanation here

// The console prints: SyntaxError: Identifier 'decimalNumber' has already been declared

// Finally, correct the code to fix the problem
// =============> write your new code here

function percentaged(decimalNumber) {
  return `${decimalNumber * 100}%`;
}
