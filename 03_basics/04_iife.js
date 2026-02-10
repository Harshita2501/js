// Immediately Invoked Function Expressions(IIFE)
// ()() phele ma hum function likh raha h aur dusra ma hum execution de raha

(function chai(){
    // named IIFE 
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})("harshita");