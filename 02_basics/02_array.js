const cartoon = ['Chota Bheem', 'Motu Paltu', 'Doremon']
const dish = ['Laddu', 'Samosa', 'Choco pie', 'Jalebi']

// cartoon.push(dish) //dish array ek object ki tarah cartoon array me add ho jayega
// console.log(cartoon);

// const allCartoon = cartoon.concat(dish)
// console.log(allCartoon);

// spread operator

const allNewCartoon = [...cartoon, ...dish]
console.log(allNewCartoon);

const anotherArray =[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);

console.log(Array.isArray("Chota Bheem"));
console.log(Array.from("Hitesh"));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

