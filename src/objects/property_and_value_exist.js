const drink = {
  id: 'x89fj9s',
  name: 'Latte',
  price: {
    sale: 99,
    full: 129,
  },
  hasOwnProperty() {
    return false;
  },
};

// ========== Value exists ==========
if (drink.id) {
  //TODO something if id exist
  console.log(drink.id);
}

for (const prop in drink) {
  if (drink[prop] === 'Latte') {
    console.log(drink[prop]);
  }
}

const hasLatte = Object.values(drink).includes('Latte');
console.log(hasLatte);

// ========= Property exist ==========
console.log(drink.hasOwnProperty('name'));

// Bulletproof check from Object-parent class
console.log(Object.prototype.hasOwnProperty.call(drink, 'name'));

// The most time-hard method
console.log(Object.keys(drink).includes('name'));
