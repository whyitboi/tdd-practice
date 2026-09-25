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
    let finalResult = "";
    for (let i = 0; i < result.length; i++) {
      capitalPos.forEach((index) => {
        if (i === index) {
          finalResult = finalResult + result[i].toUpperCase();
        } else finalResult = finalResult + result[i];
      });
    }
  }

  return result;
}

function getStartPos(letter, alphabet) {
  return alphabet.indexOf(letter);
}
function checkCapPos(someString) {
  for (const letter of someString) {
    if (letter === letter.toUpperCase()) {
      capitalPos.push(someString.indexOf(letter));
    }
  }
}

function getNewPos(startPos, shiftFactor) {
  if (startPos + shiftFactor < 25 && startPos + shiftFactor > 0) {
    return alphabet.indexOf(alphabet[startPos + shiftFactor]);
  } else {
    checkAndWrap(startPos + shiftFactor);
    return alphabet.indexOf(alphabet[startPos + shiftFactor]);
  }
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
