
let a = 300 //ya global scope h 
//block scope anf global scope 
if(true){
    let a = 10  // value issi block ka andar rhaa gyi
    const b = 20 //same as above
    var c = 30 // ya bahar de gya value iss liya iss ka use nhi kar tha kyuki ya problem create kar tha h
}
{} //yahi scope h    
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "harshita"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
    
}

one()

//++++++++++++++++++++++++++++++interesting++++++++++++++++++++++++++++

function addone(num){
     return num+1
}

addone(5)

