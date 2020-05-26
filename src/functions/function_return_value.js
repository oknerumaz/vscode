// ========== Full function ===========
function makeCarPrice(...params) {
  const total = params.reduce((prev, next) => prev + next);
  return total;
}

//Pay attention that arrow function much shorter than full-function. But less readable

// Arrow function
const makeCarPriceArrow = (...params) =>
  params.reduce((prev, next) => prev + next);
console.log(`Total ${makeCarPriceArrow(11, 22, 33, 44)} USD`);
