let n = 5;
for (let i = 1; i <= n; i++) {
    let res = "";
    for (let j = 1; j <= i; j++) {
        if (i % 2 === 1) {
            res += "1";
        }
        else {
            res += "0";
        }
        if (j !==i) {
            res += "  ";

        }
    }
    console.log(res);
}
