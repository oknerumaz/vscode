const firstCar = { id: 'x8KszK0' };
const secondCar = { id: 'bc90s1qa' };
const thirdCar = { id: 'h9na65G' };

function carPartId(name, quantity) {
  console.log(`${this.id}_${name}_${quantity}`);
}

const boundThirdCar = carPartId.bind(thirdCar);
boundThirdCar('Widescreen', 15);

// call = c = commas
carPartId.call(firstCar, 'Left Door', 21);

// apply = a = array
carPartId.apply(secondCar, ['Right Door', 12]);
