// Edabit - Two Makes Ten
function makesTen(a, b) {
  if (a === 10) {
    return true;
  } else if (b === 10) {
    return true;
  } else if (a + b === 10) {
    return true;
  } else return false;
}
console.log(makesTen(10, 1));
