let n = 5;
for (let i = 1; i <= n; i++) {
    let res = ""
    for (let j = 1; j <= i; j++) {
        if (i == j)
            res += "* ";
        else if (i === n)
            res += "* ";
        else if (j === 1)
            res += "* "
        else
            res += "  ";

    }
    console.log(res)
}
