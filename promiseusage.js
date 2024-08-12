// ****************** Promise with SetTimeout *********************
// const delay = (ms) =>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am before Delay")
//         setTimeout(() => {
//             console.log("I am Delay in Promise")
//         }, ms);
//         resolve()
//     })
// }

// const run = async () => {
//     console.log("Waiting")
//     await delay(2000);
//     console.log("Done")
// }

// run() 

// ****************** Promise with SetTimeout *********************

// ****************** Promise with Fetch *********************

// const fetchData = (url)=>{
//     console.log(`url : ${url}`)
//     return fetch(url).then(response =>{
//         if(!response.ok){
//             throw new Error(`HTTP error! Status: ${response.status}`)
//         }
//         return response.json()
//     })
// }

// const run = async ()=>{
//     console.log("Fetching Data...")
//     const data = await fetchData("https://jsonplaceholder.typicode.com/todos/1");
//     console.log(data)
//     console.log("Fetching Data Done.")
// }

// run()
// ****************** Promise with Fetch *********************

// ****************** Promise with Fs.ReadFile *********************
const fs = require("fs").promises

const readFile = async (path) =>{
    const contents = fs.readFile(path,"utf-8")
    return contents;
}

const run = async ()=>{
    console.log("Reading File...")
    const contents = await readFile("a.txt")
    console.log(`File Contents : ${contents}`)
    console.log("File Read Done")
}

run()
// ****************** Promise with Fs.ReadFile *********************
