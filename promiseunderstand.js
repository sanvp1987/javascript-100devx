const random = (res) =>{
res()
//throw new Error("Error sending")
}
let p = new Promise(random)
p.then(()=>{
    console.log("Promise Completed")
}).catch(()=>[
    console.log("Promise Error")
])

//********************** Above or Below This  **********************

// let p = new Promise((res,rej)=>{
//     //res()
//     rej()
// })
// p.then(()=>{
//     console.log("Promise Completed")
// }).catch(()=>[
//     console.log("Promise Error")
// ])