// 'this' jo h vo current values ki baat kar tha h aur unna access kar tha h 
//  jab globally kuchh na ho tho 'this' node ma {} ya deta h means empty string but ya hum console pa kara tho vo window object deta h means global windows aata h vaha 
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

// javascript execution context 
// javascript jo h vo code line by line run kar thi h  
// global execution context (this ka andar sara memory hoti h iss ki )
// function execution context 
// eval execution context (ya properties hi hota h global ki )

// two phases
// memory Creation Phase
// execution Phase

// example let val1 = 10
//  let val2 = 5
// function addNum(num1, num2){
// let total = num1+ num2
// return total
// }
// let result1 = addNum(val1, val2)
// let result2 = addNum(10,3)

// function always create new execution environment in execution phase

// kaisa execution hota h uss ka process 
// global execution -> memory phase -> execution phase
// global ki values sari this ma jati h ->
// memory phase ma val1-undefined, val2-undefined, addNum-defination, result1-undefined, result2-undefined->
// execution Phase ma val1-10, val2-5,addNum aapna naya execution environment bana gya(new variable environment + Execution thread(iss ma frr sa memory phase aur execution phase bana gya kyuki global phase bss ek baar hi aata h))
// 
// function new space bana tha h jab uss ka kaam ho jata h vo ussa delete kar deta h means function jitni baar call ho gya vo utni baar new environment bana gya aapna
// ya line7 ka liya h  addNum-> memory phase-> val1-undefined, val2-undefined, total-undefined
// execution phase-> num1-10, num2-5, total-15
//  ya value upar execution phase ma jaa ka result1- 15 ho jaygaa
// ya sara kaam frr sa ho gya then result2- 13 ho jaygaa

// call stack means values kon si values hum bula rahaa h execution ka liya
