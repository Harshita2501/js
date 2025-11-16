console.log(2>1);
console.log(2==1);
//always verify the datatypes because its give wrong output when the datatypes are not same.

// work difference in equality check == and comparsions > < >= <= example:

console.log(null>0);//false
console.log(null == 0);//false
console.log(null>=0);//true because null is convert into number and treated as 0.

//this is only happen in javascript and in typescript it will give error because typescript is a fully ruled language.
//=== in this it checks both value and datatype


//two types: primitive and non primitive(reference)

//primitive: number, string, boolean, null, undefined, symbol, number, bigInt

//non primitive: object, array, function

//typeof operator is used to check datatype of variable

//++++++++++++++++++++++++stack, heap memory++++++++++++++++++++++++++++

// Stack is used for primitive and Heap is used for non primitive.

let myYouTube = "Harshitagarg"

let anothername = myYouTube
anothername = "code with harshita"

console.log(myYouTube);
console.log(anothername);

//in stack memory the value is stored directly in the variable and in heap memory the address of the value is stored in the variable.
// in stack memory its create copy of the value but in heap memory its create copy of the address not the value.

let userOne = {
    email: "user@google.com",
    upi: "user@upi"
}

let userTwo = userOne

userTwo.email = "harshita@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

//in heap memory both the variable point to the same address so when we change the value of one variable the other variable also change because both point to the same address.
//in stack memory both the variable point to different address so when we change the value of one variable the other variable not change because both point to different address.
