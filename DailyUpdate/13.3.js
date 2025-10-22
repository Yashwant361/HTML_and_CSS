let n = 5;
for (let i = 1; i <= n; i++) {
    let res = "";

    // for (let j = 1; j <= i; j++) {
    //     res += j + " ";
    // }
    // for (let s = 1; s <= 2 * (n - i); s++) {
    //     res += "_ "; // double space for alignment
    // }

    // for (let j = i; j >= 1; j--) {
    //     res += j + " ";
    // }

    for (let s = 1; s <= 2 * (n - i); s++) {
        res += "  "; // double space for alignment
    }
    for (let j = i; j >= 1; j--) {
        res += j + " ";
    }
    console.log(res);

}