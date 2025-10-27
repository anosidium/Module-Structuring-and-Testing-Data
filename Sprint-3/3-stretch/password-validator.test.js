/* 
Password Validation

Write a program that should check if a password is valid
and returns a boolean

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one of the following non-alphanumeric symbols: ("!", "#", "$", "%", ".", "*", "&")
- Must not be any previous password in the passwords array. 

You must breakdown this problem in order to solve it. Find one test case first and get that working
*/
const isValidPassword = require("./password-validator");

test("invalid password (numbers only)", () => {
  // Arrange
  const password = "12345";
  // Act
  const result = isValidPassword(password);
  // Assert
  expect(result).toEqual(false);
});

test("invalid password (lowercase letters only)", () => {
  const password = "abcde";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

test("invalid password (uppercase letters only)", () => {
  const password = "QWERTY";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

test("invalid password (non-alphanumeric symbols only)", () => {
  const password = "!#$%.*&!";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

test("valid password", () => {
  const password = "aB1!cD";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});

test("duplicate password", () => {
  const password = "aB1!cD";
  const result = isValidPassword(password);
  expect(result).toEqual(false);
});

test("new valid password", () => {
  const password = "zX1$2£€";
  const result = isValidPassword(password);
  expect(result).toEqual(true);
});
