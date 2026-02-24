const coding = ["js","ruby", "java", "python", "cpp"]

// const values = coding.forEach((val)=>{
//     // console.log(val);
//     return val
// })

// console.log(values);

const mynums = [1,2,3,4,5,6,7,8,9,10]

const newnums = mynums.filter(
    (num) => { return num>4}
)
console.log(newnums);
 
const mynumbers = [1,2,3,4,5,6,7,8,9,10]

const newnum = mynumbers.map((num) => { return num + 10})
console.log(newnum);
