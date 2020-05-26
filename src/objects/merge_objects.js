const drink = {
  id: 'xk194ja',
  name: 'Latte',
};

const price = {
  sale: 99,
  full: 129,
};

// const mergeDrink = Object.assign({}, drink, { price });
const mergeDrink = { ...drink, ...{ price } };

console.log(drink, price);
console.log(mergeDrink);
