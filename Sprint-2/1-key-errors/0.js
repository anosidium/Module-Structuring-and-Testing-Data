// Predict and explain first...
//  =============> write your prediction here

// I predict that the function will capitalise the first character of the string
// And then return a string using string interpolation using the first character of the string
// and a slice of the remaining characters of the string excluding the first character.

// call the function capitalise with a string input
// interpret the error message and figure out why an error is occurring

function capitalise(str) {
  let str = `${str[0].toUpperCase()}${str.slice(1)}`;
  return str;
}

// =============> write your explanation here

// An error is thrown because of the variable name collision. The function has a parameter called `str`
// but in the body of the function, a variable `str` is declared and that conflicts with the parameter.

// =============> write your new code here

function upperCased(string) {
  const capitalised = `${string[0].toUpperCase()}${string.slice(1)}`;
  return capitalised;
}