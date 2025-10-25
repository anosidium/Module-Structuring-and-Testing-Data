const getOrdinalNumber = require("./get-ordinal-number");
// In this week's prep, we started implementing getOrdinalNumber

// continue testing and implementing getOrdinalNumber for additional cases
// Write your tests using Jest - remember to run your tests often for continual feedback

// Case 1: Identify the ordinal number for 1
// When the number is 1,
// Then the function should return "1st"

test("should return '@' for ", () => {
  expect(getOrdinalNumber("@")).toEqual("");
});

test("should return '0' for 0", () => {
  expect(getOrdinalNumber(0)).toEqual("0");
});

test("should return '11th' for 11", () => {
  expect(getOrdinalNumber(11)).toEqual("11th");
});

test("should return '-11th' for -11", () => {
  expect(getOrdinalNumber(-11)).toEqual("-11th");
});

test("should return `22nd` for 22", () => {
  expect(getOrdinalNumber(22)).toEqual("22nd");
});

test("should return `123rd` for 123", () => {
  expect(getOrdinalNumber(123)).toEqual("123rd");
});

test("should return '1234th' for 1234", () => {
  expect(getOrdinalNumber(1234)).toEqual("1234th");
});

test("should return '12345th' for 12345", () => {
  expect(getOrdinalNumber(12345)).toEqual("12345th");
});

test("should return '123456th' for 123456", () => {
  expect(getOrdinalNumber(123456)).toEqual("123456th");
});

test("should return '1234567th' for 1234567", () => {
  expect(getOrdinalNumber(1234567)).toEqual("1234567th");
});

test("should return '12345678th' for 12345678", () => {
  expect(getOrdinalNumber(12345678)).toEqual("12345678th");
});

test("should return '123456789th' for 123456789", () => {
  expect(getOrdinalNumber(123456789)).toEqual("123456789th");
});

test("should return '1234567890' for 1234567890th", () => {
  expect(getOrdinalNumber(1234567890)).toEqual("1234567890th");
});
