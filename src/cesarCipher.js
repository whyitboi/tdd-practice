const alphabet = [..."abcdefghijklmnopqrstuvwxyz"];
export function cesarCipher(someString, shiftFactor) {
  let result = "";
  const capitalPos = [];
  const punctPos = [];

  checkCapPos(someString);

  for (const letter of someString) {
    let startPos = getStartPos(someString, alphabet);
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

function getStartPos(someString, alphabet) {
  return alphabet.indexOf(someString[0]);
}
function checkCapPos(someString) {
  for (const letter of someString) {
    if (letter.toUpperCas()) {
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
  for (const character of someString) {
    if (alphabet.include(character)) {
      tempString = tempString + character;
    } else {
      punctPos.push[someString.indexOf(character)];
    }
  }
  return tempString;
}
