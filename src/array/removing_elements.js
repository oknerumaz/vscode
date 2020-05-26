// ----
const drinks = ['Lemonade', 'Lime', 'Coffee'];

// immutable way
const index = 0;
const newDrinks = [...drinks.slice(0, index), ...drinks.slice(index + 1)];
const removed = [...drinks.slice(0, index)];
console.log(newDrinks);

// mutable way
drinks.shift(); // remove first item
drinks.pop(); // remove last item

console.log(drinks);
