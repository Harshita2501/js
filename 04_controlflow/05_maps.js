const coding = ["js","ruby", "java", "python", "cpp"]

coding.forEach(function(val){
    console.log(val);
})

coding.forEach((item) => {
    console.log(item); 
})

function printme(ite){
    console.log(ite);
}

coding.forEach(printme)