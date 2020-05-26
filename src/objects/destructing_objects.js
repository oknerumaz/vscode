const drink = {
  id: 'x98hazz1',
  name: 'Latte',
  price: {
    sale: 99,
    full: 129,
  },
};

// Old style
const myDrinkId = drink.id;
const myDrinkName = drink.name;
const myDrinkSalePrice = drink.price.sale;
console.log(myDrinkId, myDrinkName, myDrinkSalePrice);

// New ES2015 style
const {
  //id,
  price: { full },
  ...rest
} = drink;
console.log(full, rest);
