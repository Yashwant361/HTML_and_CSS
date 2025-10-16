let n = 5;
for (let i = 1; i <= n; i++) {
    let res = "";
    for (let s = 1; s <= n - i; s++) {
        res += "  ";
    }
    for (let j = 1; j <= n; j++) {
        if (i + j === n + 1 ||j === n || i === n) {
            res += "* ";
        }
        // if (j === i) {
        //     res += "* ";
        // }
        // else if (i + j === n + 1) {
        //     res += "* ";
        // }
        // if (i === n) {
        //     res += "* ";
        // }
        else {
            res += "  ";
        }
    }
    console.log(res);
}

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let res = "";
//     // Add spaces before the triangle
//     for (let s = 1; s <= n - i; s++) {
//         res += "  ";
//     }
//     // Draw stars
//     for (let j = 1; j <= i; j++) {
//         if (j === 1 || j === i || i === n) {
//             res += "* ";
//         } else {
//             res += "  ";
//         }
//     }
//     console.log(res);
// }


