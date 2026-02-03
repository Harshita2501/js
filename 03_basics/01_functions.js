console.log("H");
console.log("A");
console.log("R");
console.log("S");
console.log("H");
console.log("I");

function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("R");
    console.log("S");
    console.log("H");
    console.log("I");
}

sayMyName()//phele refernce h aur frr () ya ussa call kar rha h

function addTwoNumbers(number1,number2){ //ya jo number1 h vo h parmeters
    console.log(number1 + number2); 
}

addTwoNumbers(3,4) //ya jo h vo h arguments
//ya vala tarika sahii h but problem h ki hum dusri kisi element ma iss ki value enter nhi kar sakta vo undefined ho gya

function addTwonumbers(Number1, Number2){
    // let result = Number1 + Number2
    // return result
    return Number1 + Number2
}

const result = addTwonumbers(3,7)

console.log("Result:", result);

function loginUserMessage(username){
    if(username === undefined){
        //!username is equal to undefined tho ya bhi likh sakta h hum
        console.log("Please enter a username");
        return //ya iss liya likha h kyuki huma aaga vala return nhi kar vana h 
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("harshita"));
//  next video
function calculateCartPrice(val1, ...num1){ // rest operater or spread operater same h bss kaha use ho raha h uss pa depend kar tha h vo ki kyaa h 
     return num1
     //rest operater means h ki jitna values add kar ni h kar lo 
}
//num1 ya aaga kuchh values likhh de tho vo values le ka gayab ho jata h means uss ma store ho jati h

console.log(calculateCartPrice(200,400,500,5000,600,700,800));

const user = {
    username: "Harshita",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "harshi",
    price: 399
})

const myNewArray = [200,300,400]

function handleArray(anyarray){
    return anyarray[1]
}

// console.log(handleArray(myNewArray));
console.log(handleArray([200,300,400,500]));

