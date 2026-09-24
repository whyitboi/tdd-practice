export function reverseString(someString) {
  let reversedString = "";
  for (let i = someString.length; i >= 1; i--) {
    reversedString = reversedString + someString[i - 1];
  }
  return reversedString;
}
