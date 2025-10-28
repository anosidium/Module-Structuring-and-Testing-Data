// Implement a function repeat
const repeat = require("./repeat");
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should:

// case: repeat String:
// Given a target string str and a positive integer count,
// When the repeat function is called with these inputs,
// Then it should repeat the str count times and return a new string containing the repeated str values.

test("should repeat the string count times", () => {
  const str = "hello";
  const count = 3;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("hellohellohello");
});

// case: handle Count of 1:
// Given a target string str and a count equal to 1,
// When the repeat function is called with these inputs,
// Then it should return the original str without repetition, ensuring that a count of 1 results in no repetition.

test("should repeat the string 1 times", () => {
  const str = "Hello, World!";
  const count = 1;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual(str);
});

// case: Handle Count of 0:
// Given a target string str and a count equal to 0,
// When the repeat function is called with these inputs,
// Then it should return an empty string, ensuring that a count of 0 results in an empty output.

test("should return an empty string for 0 times", () => {
  const str = "Bye, World!";
  const count = 0;
  const repeatedStr = repeat(str, count);
  expect(repeatedStr).toEqual("");
});

// case: Negative Count:
// Given a target string str and a negative integer count,
// When the repeat function is called with these inputs,
// Then it should throw an error or return an appropriate error message, as negative counts are not valid.

test("should throw an error for a negative number", () => {
  expect(() => repeat("Ello!", -1)).toThrow("negative numbers are not valid");
});

// case: count is not a number:
test("should throw an error when count is not a number", () => {
  expect(() => repeat("Hello?", "@")).toThrow("count is not a number");
});
