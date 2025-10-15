let n = 5;
for (let i = 1; i <= n; i++) {
    let res = ""
    for (let j = n ; j >= i; j--) {
        res += `${j}` +" "
        // res += `*` +" "
        // console.log(j);

    }
    console.log(res);

}