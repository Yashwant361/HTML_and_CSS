// let num  =  9474;
let num  =  371;
let temp = num;
let sum = 0;

while(num>0){
    let rem = num%10;
    let cube = Math.pow(rem,3);
    sum +=cube;
    num = Math.trunc(num/10);
}
    if(temp === sum){
        console.log("yes")
    }
    else
        console.log("No")