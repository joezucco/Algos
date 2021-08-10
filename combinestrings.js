// Codewars - Grasshopper - Combine strings
const combineNames = (first, last) => first.concat(" " + last);
//or
const combineNames = (...names) => names.join(" ");
console.log(combineNames("Joe", "Zucco"));
