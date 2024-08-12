// const sum =(a,b)=>a+b
// const substract =(a,b)=>a-b
// const doOperation =(a,b,func)=>func(a,b)

// const opVal = doOperation(2,3,sum)
// console.log(opVal)

// const opValsub = doOperation(10,3,substract)
// console.log(opValsub)

const fs = require("fs") 

const print=(err,data)=>{
    if(err){
        console.log("File Not Found",err)
    }
    else{
        console.log(data)
    }
}

const contents1 = fs.readFile("a.txt","utf-8",print) // it works asynchronous
//console.log(contents1) 

const contents2 = fs.readFile("b.txt","utf-8",print) // it works asynchronous

setTimeout(() => {
    console.log("Hello") 
}, 0); 

setTimeout(() => {
    console.log("Done")
}, 2000); 
//console.log(contents2) 