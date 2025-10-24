let n = 4;

for (let i = 1; i <= n; i++) {
    let res = "";

    // print leading spaces
    for (let s = 1; s <= n - i; s++) {
        res += " ";
    }

    // print numbers and stars
    let num = 1;
    for (let j = 1; j <= i; j++) {
        res += num;

        // add star if not last number in row
        if (j != i) {
            res += "*";
        }

        // increment number by 2 for next number
        num += 2;
    }

    console.log(res);
}
