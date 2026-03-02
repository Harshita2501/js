const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynums.map((num) => num+10)

const newnums = mynums
                .map((num) => num*10)
                .map((num) => num+1)
                .filter((num) => num >= 40)
console.log(newnums);

//////reduce//////

const nums = [1,2,3,4]

// const total = nums.reduce(function(acc,cu){
//     return acc+cu
// },0)

const total = nums.reduce((acc,cu) => acc+cu,0)

console.log(total);
