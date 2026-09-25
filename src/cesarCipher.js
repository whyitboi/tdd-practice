const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
export function cesarCipher(someString, shiftFactor) {
  let result;
  const startPos = getStartPos(someString, alphabet);
  const newPos = getNewPos(startPos, shiftFactor);
  return result;
}

function getStartPos(someString, alphabet) {
  return alphabet.indexOf(someString[0]);
}

function getNewPos(startPos, shiftFactor) {
  checkAndWrap(startPos + shiftFactor);
  return alphabet.indexOf(alphabet[startPos + shiftFactor]);

  function checkAndWrap(newPos) {
    if (newPos > 25) {
      startPos = 0;
      shiftFactor = newPos % 26;
    } else if (newPos < 0) {
      startPos = 25;
      shiftFactor = newPos % 26;
    }
  }
}
