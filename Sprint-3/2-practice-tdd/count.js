function countChar(stringOfCharacters, findCharacter) {
  return stringOfCharacters.split("").reduce((accumulator, character) => {
    return accumulator + (character === findCharacter ? 1 : 0);
  }, 0);
}

module.exports = countChar;
