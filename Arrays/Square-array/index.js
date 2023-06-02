const numbers = [1, 10, 9, 11];
function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const squareArr = arr.map((num) => num ** 2);
  return squareArr;
}

const result = squareArray(numbers);

console.log(numbers);
console.log(result);
