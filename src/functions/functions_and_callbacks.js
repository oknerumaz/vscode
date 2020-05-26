function carPartId(name, fn) {
  const theId = `CAR_PART_x8z0s1`;
  return fn(`${theId}_${name}`);
}

const carPart = carPartId('Left Door', function (id) {
  return `Car Part ID: ${id}`;
});

console.log(carPart);
