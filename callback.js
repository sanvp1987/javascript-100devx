const sum =(a,b)=>a+b
const substract =(a,b)=>a-b
const doOperation =(a,b,func)=>func(a,b)

const opVal = doOperation(2,3,sum)
console.log(opVal)

const opValsub = doOperation(10,3,substract)
console.log(opValsub)