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