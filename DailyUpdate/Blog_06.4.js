//Find First N Armstrong Numbers
let count = 0;
let N = 3


// for (let num = 1; true; num++) { // First N number of armStrong
for (let num = 1000; num >= 1; num--) { // Last N number of armStrong 
    let temp = num;
    let sum = 0;
    let temp1 = num;

    while (temp1 > 0) {
        let rem = temp1 % 10;
        let cube = Math.pow(rem, 3);
        sum += cube;
        temp1 = Math.trunc(temp1 / 10);
    }
    if (temp === sum) {
        console.log(temp);

        count++
    }
    if (count === N)
        break;

}