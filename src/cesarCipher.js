const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
export function cesarCipher(someString, shiftFactor) {
  let result = "";
  const capitalPos = [];
  const punctPos = [];

  checkCapPos(someString);
  someString = processString(someString);

  for (const letter of someString) {
    let startPos = getStartPos(someString[0], alphabet);
    let newPos = getNewPos(startPos, shiftFactor);
    result = result + alphabet[newPos];
  }
  if (capitalPos.length > 0) {
    result.map((letter) => {
      capitalPos.forEach((index) => {
        if (result.indexOf(letter) === index) {
          result[result.indexOf(letter)] = letter.toUpperCase();
        }
      });
    });
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
function processString(someString) {
  let tempString = "";
  someString = someString.toLowerCase();
  for (let i = 0; i < someString.length; i++) {
    if (alphabet.includes(someString[i])) {
      tempString = tempString + someString[i];
    } else {
      punctPos.push({ pos: i, value: someString[i] });
    }
  }
  return tempString;
}
