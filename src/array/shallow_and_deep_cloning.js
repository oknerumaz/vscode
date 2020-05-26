const drinks = [
  ['Lemonade', 99],
  ['Lime', 99],
  ['Coffee', 99],
  ['Latte', 99],
];

// Shallow cloning | Will mutate array
// 1 - const drinksClone = [...drinks];
// 2 - const drinksClone = drinks.slice();
// 3 - const drinksClone = Array.from(drinks);
// drinksClone[0][0] = 'Cola';

// Deep cloning | Will not mutate array
const drinksClone = JSON.parse(JSON.stringify(drinks));
drinksClone[0][0] = 'Cola';

console.log(drinks);
