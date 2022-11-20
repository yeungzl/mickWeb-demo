import {omit} from 'loadsh';

export const getName = (name) => {
  return `${name}---烽火戏诸侯`;
};

export function printMe() {
  const obj = { a: 1, b: 2, c: 3, d: 4 };
  console.log(omit(obj, 'b'));
}


