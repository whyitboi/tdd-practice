const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
export function cesarCipher(someString, shiftFactor) {
  let result;
  const startPos = getStartPosition(someString, alphabet);
  const newPos = getNewPos(startPos, shiftFactor);
  return result;
}

function getStartPosition(someString, alphabet) {
  return alphabet.indexOf(someString[0]);
}

function getNewPos(startPos, shiftFactor) {
  return alphabet.indexOf(alphabet[startPos + shiftFactor]);
}
