function countChar(stringOfCharacters, findCharacter) {
  if (typeof stringOfCharacters !== "string") {
    throw new TypeError(
      "The argument for parameter stringOfCharacters is not a String type"
    );
  }

  if (typeof findCharacter !== "string") {
    throw new TypeError(
      "The argument for parameter findCharacter is not a String type"
    );
  }

  if (findCharacter.length !== 1) {
    throw new Error(
      "Parameter findCharacter is must contain a single character"
    );
  }

  return stringOfCharacters.split("").reduce((accumulator, character) => {
    return accumulator + (character === findCharacter ? 1 : 0);
  }, 0);
}

module.exports = countChar;
