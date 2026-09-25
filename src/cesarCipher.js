const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
const capitalPos = [];
const punctPos = [];
export function cesarCipher(someString, shiftFactor) {
  let result = "";

  checkCapPos(someString);
  const tempString = someString.toLowerCase();

  for (const letter of tempString) {
    if (alphabet.includes(letter)) {
      let startPos = getStartPos(letter, alphabet);
      let newPos = getNewPos(startPos, shiftFactor);
      result = result + alphabet[newPos];
    } else result = result + letter;
  }
  if (capitalPos.length > 0) {
    for (let i = 0; i < result.length; i++) {
      capitalPos.forEach((index) => {
        if (i === index) {
          result[i] = result[i].toUpperCase();
        }
      });
    }
  }

  return result;
}

function getStartPos(letterPos, alphabet) {
  return alphabet.indexOf(letterPos);
}
function checkCapPos(someString) {
  for (const letter of someString) {
    if (letter.toUpperCase()) {
      capitalPos.push(someString.indexOf(letter));
    }
  }
}

function getNewPos(startPos, shiftFactor) {
  checkAndWrap(startPos + shiftFactor);
  return alphabet.indexOf(alphabet[startPos + shiftFactor]);

  function checkAndWrap(newPos) {
    if (newPos > 25) {
      startPos = 0;
    } else if (newPos < 0) {
      //startPos has to be +1 in negative wrapping
      startPos = 26;
    }
    shiftFactor = newPos % 26;
  }
}
