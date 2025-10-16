let n = 5;

for (let i = 1; i <= n; i++) {
    let res = "";
    for (let s = 1; s <= n - i; s++) {
        res += "  "
    }
    for (let j = 1; j <= i; j++) {
        res += "* ";

    }
    console.log(res);

}