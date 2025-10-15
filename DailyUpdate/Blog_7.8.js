let n= 5;
for(let i = 1 ; i<= n ; i++){
    let res="";
    for(let s = 1 ; s<= i-1;s++){
        res+=" ";
    }
    for(let j = n ; j>=i ; j--){
        res+= j+ "  "
    }
    console.log(res)
}
// let n = 5;

// for (let i = 1; i <= n; i++) {
//     // 1️⃣ print spaces
//     for (let s = 1; s <= i - 1; s++) {
//         process.stdout.write("  "); // two spaces for alignment
//     }

//     // 2️⃣ print numbers
//     for (let j = n; j >= i; j--) {
//         process.stdout.write(j + " ");
//     }

//     console.log();
// }

