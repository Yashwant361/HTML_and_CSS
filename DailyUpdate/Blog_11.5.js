let n = 5;
for (let i = 1; i <= n; i++) {
    let res = "";
    let prev = i;

    for (let j = 1; j <= i; j++) {
        res += prev + " ";
        prev += n - j;
    }
    console.log(res);

}
