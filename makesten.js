// Edabit - Two Makes Ten
// function makesTen(a, b) {
//   if (a === 10) {
//     return true;
//   } else if (b === 10) {
//     return true;
//   } else if (a + b === 10) {
//     return true;
//   } else return false;
// }

// Refactor
const makesTen = (a, b) => [a, b, a + b].includes(10);
console.log(makesTen(11, 1));