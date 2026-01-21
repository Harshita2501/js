//const tinderUser = new Object() ya singelton object h 
const tinderUser = {}
// ya non singleton object h

tinderUser.id = "123abc"
tinderUser.name = "Hitesh"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); //sirf keys aa jayagi
// console.log(Object.values(tinderUser)); //sirf values aa jayagi
// console.log(Object.entries(tinderUser)); //sari enteries aa jayagi vo bhi array ma
console.log(tinderUser.hasOwnProperty('isloggedIn')); //true


const regularUser ={
    email: "harshita@gmail.com",
    fullname:{
        userFullname: {
            firstname:"Harshita",
            lastname: "kumari"
        }
    }
}

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userFullname.firstname);

const obj1 = {1: "a",2:"b"}
const obj2 = {3: "c",4:"d"}

const obj4 = {...obj1,...obj2}
// console.log(obj4);
const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

// when data come from database
const data = [
    {
        id:"1",
        email: "h@gmail.com"
    },
    {
        id:"2",
        email: "b@gmail.com"
    },
    {
        id:"3",
        email: "c@gmail.com"
    }
]

//  console.log(data[1].email);

const course ={
    coursename: "js in hindi",
    price: 999,
    courseInstructor: "Harshita"
}
// course.courseInstructor // mutating object
const{courseInstructor: instructor} = course //object destructuring

console.log(courseInstructor); //error
console.log(instructor);

// this is for react yaha destructing ki gyi h yaha props.company aaya na but usa destructed kar ka company likh diya h
const navbar = ({company}) => {

}
navbar({company: "amazon"})

// api in json introduction 

// ya api object ki format ma h
// {
//     "name": "Harshita",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// ya api array ki format ma h
[
    {},
    {}
]
