// const filterNames = (arr, text) => {
//   return arr.filter((name) => name.includes(text) && name.length > 5);
// };

// console.log(
//   filterNames(['John', 'Olivia', 'Sanya', 'Emanuel', 'Vanya', 'Olesya'], 'ya')
// );

// compact code
const filterNames = (arr, text) =>
  arr.filter((name) => name.includes(text) && name.length > 5);

console.log(
  filterNames(['John', 'Olivia', 'Sanya', 'Emanuel', 'Vanya', 'Olesya'], 'ya')
);
