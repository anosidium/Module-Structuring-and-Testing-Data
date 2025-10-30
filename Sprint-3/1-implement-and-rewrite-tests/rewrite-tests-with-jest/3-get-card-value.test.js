// This statement loads the getCardValue function you wrote in the implement directory.
// We will use the same function, but write tests for it using Jest in this file.
const getCardValue = require("../implement/3-get-card-value");

test("should return 11 for Ace of Spades", () => {
  const aceofSpades = getCardValue("A♠");
  expect(aceofSpades).toEqual(11);
});

// Case 2: Handle Number Cards (2-10):
for (let i = 2; i <= 10; i++) {
  test(`should return ${i} for a number card ${i}♥`, () => {
    const card = getCardValue(`${i}♥`);
    expect(card).toEqual(i);
  });
}

// Case 3: Handle Face Cards (J, Q, K):
const faceCards = ["J", "Q", "K"];

for (let faceCard of faceCards) {
  test(`should return 10 for a card card ${faceCard}♢`, () => {
    const card = getCardValue(`${faceCard}♢`);
    expect(card).toEqual(10);
  });
}

// Case 4: Handle Ace (A):
test("should return 11 for an Ace", () => {
  const ace = getCardValue("A♠");
  expect(ace).toEqual(11);
});

// Case 5: Handle Invalid Cards:
test("should return `Invalid card rank.` for an invalid card", () => {
  expect(() => getCardValue("@").toThrow("Invalid card rank."));
});
