const id = 'x98hazz1';
const name = 'Latte';
const price = '3$';

const someKey = 'name';

const drink = {
  id,
  [someKey]: name,
  price,
  getDrinkDetails: function () {
    return `Drink ${this.name} (${this.price})`;
  },
};

console.log(drink);
