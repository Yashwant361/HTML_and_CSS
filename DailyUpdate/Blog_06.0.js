// let num  =  9474;
let num  =  371;
let temp = num;
let sum = 0;

let powerDig = 0;
let t = num;
while(t > 0){
    t = Math.trunc(t/10);
    powerDig++;
}

while(num>0){
    let rem = num%10;
    let cube = Math.pow(rem,powerDig);
    sum +=cube;
    num = Math.trunc(num/10);
}
    if(temp === sum){
        console.log("yes")
    }
    else
        console.log("No")