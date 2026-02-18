//for of

const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
}

//Maps

const map = new Map()
map.set('In', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map); 

for(const [key, vlaue] of map){
    console.log(key, ':-', value);
}

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// forin

for (const key in myObject) {
    console.log(key); //js, cpp
    console.log(myObject[key]); //javascript, c++
} 