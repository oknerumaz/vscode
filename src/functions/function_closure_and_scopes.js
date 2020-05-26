// Use 'theId' only ones and then use is to identify what part we want to create
function makeCarPartId(id) {
  const theId = `CAR_PART_${id}`;
  return function (name) {
    return `${theId}_${name.toUpperCase()}`;
  };
}

const carPartId = makeCarPartId('x8YdsZ12');
console.log(carPartId('Left door'));
console.log(carPartId('Right door'));
console.log(carPartId('Windscreen'));
