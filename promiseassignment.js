
// const mypromise1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("My Promise 1")
//     }, 2000);
// })


// const mypromise2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("My Promise 2")
//     },3000)
// })

// Promise.all([mypromise1,mypromise2])
// .then( 
//     console.log("first")
// )

//******************************* Reacd Content of File in Promise *********************/
// const fs = require('fs').promises
// const readfile = (filepath) =>{
//     return new Promise((resolve,reject)=>{
//        const contents = fs.readFile(filepath,'utf-8')
//        resolve(contents)
//     })
// }
// readfile("a.txt").then((data)=>{
//     console.log(data)
// })

/////// ************************* Or 

// const fs = require('fs').promises
// const readFile = (filename) =>{
//     return new Promise((resolve,reject)=>{
//        const con = fs.readFile(filename,'utf-8')
//        resolve(con)
//     })
// }

// const p = readFile("a.txt");
// const callback = (contents) =>{
//     console.log(`I am Finally Callback Called : ${contents}`)
// }

// p.then(callback)

/////// ************************* Or 
//Fs read file with callback of in promise passing function

const fs = require('fs')

const completeyourreading = (sendTheFinalArgumenthere)=>{
   fs.readFile("a.txt","utf-8",(err,data)=>{
        sendTheFinalArgumenthere(data)
    })
}

const readFile = (filename) =>{
    return new Promise(completeyourreading)
}

const p = readFile();
const callback = (contents) =>{
    console.log(`I am Finally Callback Called : ${contents}`)
}

p.then(callback)
// ****************** Below is the async await way of read file content ****************** 


// const fs = require('fs').promises;

// const readFile = async (filepath) => {
//     try {
//         const contents = await fs.readFile(filepath, 'utf-8');
//         return contents;
//     } catch (error) {
//         console.error(`Error reading file: ${error}`);
//     }
// }

// (async () => {
//     const data = await readFile("a.txt");
//     console.log(data);
// })();

