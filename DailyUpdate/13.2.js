let n = 10;
for (let i = 1; i <= n; i++) {
    let res = "";

    //left numbers
    for (let j = 1; j <= i - 1; j++) {
        res += (n - i + j) % 10 + " ";
    }

    res += "0"

    for (let j = i - 1; j >= 1; j--) {
        res +="  "+ (n - i + j) % 10  ;
    }
    console.log(res);

}