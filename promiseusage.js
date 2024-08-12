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

const fetchData = (url)=>{
    console.log(`url : ${url}`)
    return fetch(url).then(response =>{
        if(!response.ok){
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json()
    })
}

const run = async ()=>{
    console.log("Fetching Data...")
    const data = await fetchData("https://jsonplaceholder.typicode.com/todos/1");
    console.log(data)
    console.log("Fetching Data Done.")
}

run()

// ****************** Promise with Fetch *********************