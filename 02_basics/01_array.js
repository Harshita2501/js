const myArr =[1,2,3,4]
const myArr2 =new Array(1, 2, 3, 4,)
console.log(myArr[0]);

// Array methods

myArr.push(6);
myArr.pop();
console.log(myArr);

myArr.unshift(9); //front ma aati h value
myArr.shift(); //front vali value remove kare


console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join();
console.log(myArr);
console.log(newArr);

// slice, splice

console.log("a", myArr);

const my1 = myArr.slice(1,3); //ya array ko manuplicate nahi karta

console.log(my1);
console.log("b", myArr); //[0,1,2,3,4,5]

const my2 = myArr.splice(1,3); //ya array ko manuplicate karta h 
console.log("c", myArr); //[0, 4, 5]
console.log(my2);

