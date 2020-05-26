const drink = {
  id: 'xk194ja',
  name: 'Latte',
  price: {
    full: 129,
    sale: 99,
  },
};

// Correctly Type-Checking
function getType(obj) {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}

console.log(getType(drink)); // object Object
console.log(getType([])); // object Array
console.log(getType(null)); // object Null
