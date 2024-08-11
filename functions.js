const sumall=(a,b) => console.log(parseInt(a)+b);
sumall("2",3)

const sum=(n)=>{
    let ans = 0
    for(let i = 0; i <= n; i++){
        ans= ans + i;
    }
    return ans;
    // above Loop Code or below Line Only
      //return n *(n+1); //
}

const ons1 = sum(10)
console.log(ons1)
const ons2 = sum(100)
console.log(ons2)
const ons3 = sum(1000)
console.log(ons3) 