let n = 5;

for (let i = 1; i <= n; i++) {
    let res = "";
    for (let s = 1; s <= i - 1; s++) {
        res += "  ";
    }
        //  for(let j = n; j>=1 ;j--){
         for(let j = 1; j <= n-i+1 ;j++){
            res+= n-i+1 +" ";
          }
            console.log(res)
}
