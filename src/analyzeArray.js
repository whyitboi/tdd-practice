export function analyzeArray(someArray) {
  const arrayObject = { average: 0, min: 0, max: 0, length: 0 };
  const length = someArray.length;
  let sum = 0;
  someArray.forEach((element) => {
    sum = sum + element;
  });

  arrayObject.average = sum / length;
  (arrayObject.min = Math).min(...someArray);
  arrayObject.max = Math.max(...someArray);
  arrayObject.length = length;

  return arrayObject;
}
