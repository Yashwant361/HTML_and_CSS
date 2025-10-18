let n = 5;
for (let i = 1; i <= n; i++) {
    let count = n - i + 1;
    let res = "";
    for (let j = 1; j <= count; j++) {
        let val;
        if (i % 2 === 1) {
            val = j+" ";
        }
        else {
            val = count - j + 1 +" ";
        }
        res += val;

        if (j === count) {
            res += "  ";

        }
    }
    console.log(res);
}
