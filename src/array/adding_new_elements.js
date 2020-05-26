// beginning
//drinks.unshift('Water');
console.log(['Water', ...drinks]);

// middle
const index = 1;
console.log([
  ...drinks.splice(0, index),
  'Mojito',
  ...drinks.splice(index - 1),
]);

// end
//drinks.push('Cola');
console.log([...drinks, 'Beer']);

console.log(drinks);
