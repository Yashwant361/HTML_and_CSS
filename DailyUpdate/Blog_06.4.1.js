// find middle N number of armStrong number
/*
1> First pass: Count all Armstrong numbers in the range.
2> Second pass: Loop again and print only the middle N numbers
3> If total Armstrong numbers = totalCount
4> Middle N numbers start from: Math.floor((totalCount - N) / 2) + 1
5> End at: Math.floor((totalCount + N) / 2)
*/

let totalCount = 0;
let N = 3
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
        totalCount++;
        // console.log(temp);
    }
}
//2nd pass : to print middle N ArmStrong Numbers
let startIndex = Math.floor((totalCount - N) / 2) + 1;
let endIndex = startIndex + N - 1;
let count = 0;

for (let num = 1; num <= 1000; num++) {
    let temp = num;
    let sum = 0;
    let temp1 = num;

    while (temp1 > 0) {
        let rem = temp1 % 10;
        sum += Math.pow(rem, 3);
        temp1 = Math.trunc(temp1 / 10);
    }
    if (sum === temp) {
        count++;
        if (count >= startIndex && count <= endIndex) {
            console.log(temp);

        }
    }




}