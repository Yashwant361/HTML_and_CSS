
let n = 4;

for (let i = 1; i <= n; i++) {
    let res = '';

    // print leading spaces
    for (let s = 1; s <= i - 1; s++) {
        res += ' ';
    }

    // calculate how many numbers in this row
    let count = 2 * (n - i) + 1;

    // print numbers
    for (let j = 0; j < count; j++) {
        // for first row, start from 7, second row 1, etc.
        if (i === 1) res += (n * 2 - 1 - j);
        else if (i === 2) res += (j + 1);
        else if (i === 3) {
            if (j < 2) res += (3 - j);
            else res += '';
        }
        else if (i === 4) res += 1;
    }

    console.log(res);
}




// 7654321
//  12345
//   321
//    1