let n = 5;
for (let i = 1; i <= n; i++) {
    let res = "";
    for (let s = 1; s <= i - 1; s++) {
        res += "  ";
    }
        for (let j = 1; j <= n - i + 1; j++) {
            res += i + " ";
        }
    
    console.log(res);
}

// let n = 5;

// for (let i = 1; i <= n; i++) {
//   // 1️⃣ print spaces
//   for (let s = 1; s <= i - 1; s++) {
//     process.stdout.write("  ");  // two spaces for alignment
//   }

//   // 2️⃣ print repeating numbers
//   for (let num = 1; num <= n - i + 1; num++) {
//     process.stdout.write(i + " ");
//   }

//   console.log();
// }
