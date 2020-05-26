const drink = {
  id: 'xhs8Pla',
  name: 'Latte',
  price: {
    full: 129,
    sale: 99,
  },
};

// Imperative Object Iteration
for (const prop in drink) {
  const value = drink[prop];
  if (Object.prototype.toString.call(value) === '[object Object]') {
    for (const key in value) {
      console.log(key);
    }
  }
}

// Declarative Object Iteration
Object.keys(drink).forEach(function (prop) {
  console.log(drink[prop]);
});
