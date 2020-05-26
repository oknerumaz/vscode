const drinks = ['Lemonade', 'Lime', 'Coffee'];

// 1) indexOf
const index = drinks.indexOf('Lime');
if (index !== -1) {
  console.log(drinks[index]);
}

// 2) included
const included = drinks.includes('Coffee');
console.log(included);

// 3) findIndex (for more complex data structure)
const drinksWithId = [
  { id: 1, name: 'Lemonade' },
  { id: 2, name: 'Lime' },
  { id: 3, name: 'Coffee' },
];

const idIndex = drinksWithId.findIndex((value) => value.name === 'Coffee');
console.log(drinksWithId[idIndex]);

// 4) find
const foundItem = drinksWithId.find((value) => value.name === 'Coffee');
console.log(foundItem);
