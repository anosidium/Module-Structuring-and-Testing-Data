// Predict and explain first...

// =============> write your prediction here

// The function prints to the console by multiplying the parameter `a` and `b`

function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`);

// =============> write your explanation here

// I missed line 11, the function does indeed prints to the console but returns nothing
// which explains `undefined` in the string interpolation of the function

// Finally, correct the code to fix the problem
//  =============> write your new code here

function product(a, b) {
  return a * b;
}
