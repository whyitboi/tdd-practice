export function cesarCipher(someString, shiftFactor) {
  const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
  let result;
  const startPos = getStartPosition(someString, alphabet);
  return result;
}

function getStartPosition(someString, alphabet) {
  for (let i = 0; i <= someString.length; i++) {
    alphabet.find((letter) => {
      if (letter === someString[0]) {
        return alphabet.findIndexOf(letter);
      }
    });
  }
}
