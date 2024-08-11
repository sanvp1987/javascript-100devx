const sum=(n)=>{
    let ans = 0
    for(let i = 0; i <= n; i++){
        ans= ans + i;
    }
    //return n *(n+1);
    return ans;
}

console.log(sum(10))
