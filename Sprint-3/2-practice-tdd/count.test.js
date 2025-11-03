// implement a function countChar that counts the number of times a character occurs in a string
const countChar = require("./count");
// Given a string str and a single character char to search for,
// When the countChar function is called with these inputs,
// Then it should:

// Scenario: Multiple Occurrences
// Given the input string str,
// And a character char that may occur multiple times with overlaps within str (e.g., 'a' in 'aaaaa'),
// When the function is called with these inputs,
// Then it should correctly count overlapping occurrences of char (e.g., 'a' appears five times in 'aaaaa').

test("should count multiple occurrences of a character", () => {
  const str = "aaaaa";
  const char = "a";
  const count = countChar(str, char);
  expect(count).toEqual(5);
});

// Scenario: No Occurrences
// Given the input string str,
// And a character char that does not exist within the case-sensitive str,
// When the function is called with these inputs,
// Then it should return 0, indicating that no occurrences of the char were found in the case-sensitive str.

test("should count no occurrences of z characters", () => {
  const str = "aaaaa";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should return 0 for an empty string and a non-empty character", () => {
  const str = "";
  const char = "z";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should return 0 for an empty string and a whitespace character", () => {
  const str = "";
  const char = " ";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("should return 0 when the string contains the character in a different case", () => {
  const str = "aBcDeF";
  const char = "A";
  const count = countChar(str, char);
  expect(count).toEqual(0);
});

test("throws error when the first argument is not a string", () => {
  expect(() => countChar(1234, "1")).toThrow(
    "The argument for parameter stringOfCharacters is not a String type"
  );
});

test("throws error when the second argument is not a string", () => {
  expect(() => countChar("1234", 1)).toThrow(
    "The argument for parameter findCharacter is not a String type"
  );
});

test("throws error when second argument is longer than one character", () => {
  expect(() => countChar("1234", "12")).toThrow(
    "Parameter findCharacter is must contain a single character"
  );
});
