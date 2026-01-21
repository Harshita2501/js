// simgleton

// object literal

const mySym = Symbol("key1")

const jsUser = {
    name: "Harshita", 
    age: 20,
    [mySym]: "myKey1",
    location: "Mohali",
    lastLoginDays: ["Monday","saturday"]
}

console.log(jsUser.name);
console.log(jsUser["location"]);
console.log(typeof jsUser[mySym]);


jsUser.location = "Punjab"
//Object.freeze(jsUser) // to make object immutable
jsUser.location = "Chandigarh" // will not work
console.log(jsUser);

jsUser.greeting = function(){
    console.log("Hello JS user");
}


jsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

