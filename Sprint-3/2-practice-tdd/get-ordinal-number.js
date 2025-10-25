function getOrdinalNumber(num) {
  if (isNaN(num)) {
    return "";
  }

  const numberString = String(num);
  const lastDigit = Number(numberString.slice(-1));
  const lastDigits = Number(numberString.slice(-2));
  let ordinal;

  console.log("lastDigits", lastDigits);

  if (num === 0) {
    ordinal = "";
  } else if (lastDigits === 11) {
    ordinal = "th";
  } else if (lastDigit === 1) {
    ordinal = "st";
  } else if (lastDigit === 2) {
    ordinal = "nd";
  } else if (lastDigit === 3) {
    ordinal = "rd";
  } else {
    ordinal = "th";
  }

  return `${num}${ordinal}`;
}

module.exports = getOrdinalNumber;
