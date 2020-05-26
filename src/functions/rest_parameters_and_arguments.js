// Old way
function makeCarPrice() {
  console.log(arguments);
  const total = Array.from(arguments).reduce((prev, next) => {
    console.log('Prev: ' + prev + ' | Next: ' + next);
    return prev + next;
  });
  console.log(`Total: ${total} USD`);
}

makeCarPrice(11, 44, 55, 99, 22);

//New way (ES 2015)
function makeCarPriceRest(...params) {
  const total = params.reduce((prev, next) => {
    return prev + next;
  });

  console.log(`Total: ${total} USD`);
}

makeCarPriceRest(99, 88, 77, 11, 44);
