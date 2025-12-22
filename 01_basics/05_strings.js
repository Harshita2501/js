const name ="Harshita"
const repocount = 40
// console.log(name + repocount);

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
// string interpolation

const gameName = new String('harshita')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.trim());
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

console.log(gameName.toLowerCase());

const newString = gameName.substring(0,4)
console.log(newString);
console.log(gameName.slice(-8,2));


const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('hitesh','harshita'));

