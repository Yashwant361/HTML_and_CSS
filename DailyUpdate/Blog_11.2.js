let n = 5;
for (let i = 1; i <= n; i++) {
    let res = "";
    for (let j = 1; j <= i; j++) {
        // let value = 2 * j - 1 + ((i + 1) % 2);
        // res += value + "  ";
        if(i%2 !=0){
            res+=2 * j - 1;
        }
        else{
            res+= 2*j;
        }
        res+="  "

    }
    console.log(res);

}