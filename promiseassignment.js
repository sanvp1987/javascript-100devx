
const mypromise1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("My Promise 1")
    }, 2000);
})


const mypromise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("My Promise 2")
    },3000)
})

