function creditCardValidator(cardNumber) {
  // Check that the card number contains numbers only
  if (isNaN(cardNumber)) return false;

  // Convert the card number to a string so we can check its digits easily
  let cardNumberString = String(cardNumber);

  // Check that the card number has exactly 16 digits
  if (cardNumberString.length != 16) return false;

  // Check that the last digit is even
  if (cardNumberString[15] % 2 != 0) return false;

  // Calculate the sum of all digits
  const sum = cardNumberString
    .split("")
    .reduce((sum, digit) => (sum += Number(digit)), 0);

  // If the sum of all digits is 16 or less, the card is invalid
  if (sum <= 16) return false;

  // Use Set to filter out duplicate digits
  let uniqueDigits = new Set(cardNumberString);

  // Make sure the card number isn’t made up of all the same digit
  if (uniqueDigits.size < 2) return false;

  // If all conditions pass, the card number is valid
  return true;
}
