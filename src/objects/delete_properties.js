const drink = {
  id: 'xk194ja',
  name: 'Latte',
  price: {
    full: 129,
    sale: 89,
  },
};

// Slow operation
delete drink.id;

// 2
drink.id == undefined;
console.log(drink);

// 3 (immutable pattern)
const { price, ...rest } = drink;
console.log(price, rest);
