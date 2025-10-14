
let count = 0;

for (let num = 1; num <= 1000; num++) {
    let temp = num;
    let sum = 0;
    let temp1 = num;

    while (temp1 > 0) {
        let rem = temp1 % 10;
        let cube = Math.pow(rem, 3);
        sum += cube;
        temp1 = Math.trunc(temp1 / 10);
    }
    if (sum === temp) {
        count++;
        // console.log(temp);

    }

}
console.log(`Total Armstrong Numbers: ${count}`);

