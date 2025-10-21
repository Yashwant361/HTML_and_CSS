let n = 3;
let num = 1;

for (let i = 1; i <= n; i++) {
    let res = "";

    // space 
    for (let s = 1; s <= n - i; s++) {
        res += " ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
        res += num;
        num++;
    }
    console.log(res);
}