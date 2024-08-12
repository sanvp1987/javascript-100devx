const timeout=()=>{console.log("Click the button")}

console.log("Hi")
setTimeout(timeout, 1000);
console.log("Welcome to Loupe.")
 
let c = 0
for (let i = 0; i < 10000000000; i++) {
    c = c + 1;
}
console.log("Expensive Operation Done ! ",c)

// Hi
// Welcome to Loupe.
// Expensive Operation Done !  10000000000
// Click the button