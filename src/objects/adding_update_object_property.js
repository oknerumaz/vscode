const id = 'xk194ja';
const name = 'Latte';
const price = {
  full: 129,
  sale: 99,
};

const drink = {
  id,
  name,
  price,
};

// ===== Adding(update) new prop ======
drink.brand = 'Mc`Donalds';
drink.name = 'Mocha';

// ====== One-line command ======
function propUpdate(prop, value) {
  drink[prop] = value;
}
propUpdate('brand', 'Mc`Cafe');
propUpdate('name', 'Dark Peach');

console.log(drink);
