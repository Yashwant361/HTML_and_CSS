
// range (1 to 1000) so it checks every number, not just one.

// let num = 371;
let start = 1;
let end = 1000;

for (let num = start; num <= end; num++) {
    let temp = num;
    let sum = 0;
    let num1 = num;

    while (num1 > 0) {
        let rem = num1 % 10;
        let cube = Math.pow(rem, 3);
        sum += cube;
        num1 = Math.trunc(num1 / 10);
    }
    if (sum === temp) {
        console.log(temp);

    }
}
