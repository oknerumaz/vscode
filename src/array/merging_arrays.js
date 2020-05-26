const drinks = [
  ['Lemonade', 99],
  ['Lime', 99],
  ['Coffee', 99],
  ['Latte', 99],
];

// const newDrinks = [
//   ['Mocha', 99],
//   ['Cold Milk', 99],
// ];

const newDrinks = ['Mocha', 99];

// Merge | For multi-dimensional arrays
// 1 - const merged = drinks.concat(newDrinks);
// 2 - const merged = [...drinks, ...newDrinks];

// Merge | For simple array
const merged = [...drinks, newDrinks];

console.log(merged);
console.log(drinks);
console.log(newDrinks);
