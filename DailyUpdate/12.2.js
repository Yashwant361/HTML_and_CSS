let n = 5;
for (let i = 1; i <= n; i++) {
    let res = "";

    //left numbers
    for (let j = 1; j <= (n - i) + 1; j++) {
        res += j + "  ";
    } 

    //stars
    for(let s = 1 ; s<=2*(i-1);s++){
        res+="*"+"  ";
    }

    //right numbers
    for(let j = n-i+1 ; j>=1 ; j--){
        res+=j+"  ";
    } 
    console.log(res)
}