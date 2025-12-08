let n = 5;
for (let i = 1; i <= n; i++) {
    let res = "";
    for (let j = 1; j <= 2 * (n - i) + 1; j++) {
        res += j + " ";
    }
    console.log(res)

}