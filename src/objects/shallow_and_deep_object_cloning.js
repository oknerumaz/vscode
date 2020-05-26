const drink = {
  id: 'xk194ja',
  name: 'Latte',
  price: {
    full: 129,
    sale: 89,
  },
};

// ===== Shallow copy ==== (Copies only top-level. Price {} - will not be copied)
// 1 - const drinkClone = Object.assign({}, drink);
// 2 - const drinkClone = { ...drink };

// ===== Deep copy =====
const drinkStringified = JSON.stringify(drink);
const drinkClone = JSON.parse(drinkStringified);
drinkClone.id = 'abcd';
drinkClone.name = 'Mocha';
drinkClone.price['sale'] = 100;

console.log(drink);
