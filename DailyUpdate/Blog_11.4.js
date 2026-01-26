let n = 4;
let count = 1;
for (let i = 1; i <= n; i++) {
    let res = ""
    for (let j = 1; j <= i; j++) {
        res += count++ +" "
    }
    console.log(res);

}
