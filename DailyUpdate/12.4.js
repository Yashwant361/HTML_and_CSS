let n = 5;
for (let i = 1; i <= n; i++) {
    let res = "";

    if (i <= Math.ceil(n / 2)) {

        for (let j = 1; j <= n - i + 1; j++) {
            res += i + "  ";
        }

    }
    else {
        let num = n - i + 1; // digits start decreasing again
        for (let j = 1; j <= num; j++) {
            res += num+"  ";

        }
    }
    console.log(res);

}