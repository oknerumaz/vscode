//Immediately-Invoked Function Expression (IIFE)
const carPartId = ((id) => {
  const theId = id;
  return (name) => `${theId}_${name}`;
})('x19YsHhe');

console.log(carPartId('Windscreen'));
console.log(theId);
