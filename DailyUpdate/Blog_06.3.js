// code to sum all strong number

let start = 1;
let totalSum = 0;
let end = 1000;

for (let num = start; num <= end; num++) {
    let temp = num;
    let sum = 0;
    let temp1 = num;

    while (temp1 > 0) {
        let rem = temp1 % 10;
        let cube = Math.pow(rem, 3);
        sum += cube;
        temp1 = Math.trunc(temp1 / 10);
    }
    if(sum === temp){
        totalSum+=sum;
    }

}
console.log(totalSum);


