let n = 5;
for (let i = 1; i <= n; i++) {
    let res = "";
    for (let j = 0; j <i; j++){
        res+=String.fromCharCode(69-j)+" ";
    }
    console.log(res);
    
}