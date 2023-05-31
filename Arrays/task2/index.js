const numbers = [11, 22, 33, 55, 66];

function sum(numbers) {
  let sumOfNumbers = 0;

  for (let i = 0; i < numbers.length; i++) {
    sumOfNumbers += numbers[i];
  }
  return sumOfNumbers;
}
const sumOfElements = sum(numbers);
console.log('Result: ' + sumOfElements);

// const numbers = [11, 22, 33, 55, 66];

// const arr = numbers;

// arr[2] = 17;
// console.log(numbers);
