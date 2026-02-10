// 'this' jo h vo current values ki baat kar tha h aur unna access kar tha h 
//  jab globally kuchh na ho tho 'this' node ma {} ya deta h means empty string but ya hum console pa kara tho vo windows deta h means global windows aata h vaha 
const user = {
    username: "harshita",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`); 
        console.log(this);
        
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

function one(){
    console.log(this);
    
}

//++++++++++++++++++++++++++arrow function+++++++++++++++++++++++++++++++++++++++++
// () => {} ya hota h arrow function

// const addtwo = (num1, num2) => {
//     return num1 + num2
// }
// {} ya ho gya tho return likh na h nhi tho nhi likh na
// const addtwo = (num1, num2) => num1 + num2

// const addtwo = (num1, num2) => (num1 + num2)

const addtwo = (num1, num2) => ({username: "harshita"})


console.log(addtwo(3,4));
