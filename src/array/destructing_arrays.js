const drinks = [
  ['Lemonade', 99],
  ['Lime', 99],
  ['Peach', 99],
  ['Coffee', 199],
];

const [one, [, b], ...rest] = drinks;

console.log(one, b, rest);
