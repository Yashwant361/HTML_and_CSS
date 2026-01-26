let n= 5;
for(let i = 1 ; i<= n ;i++){
    let res="";
    for(let j = 1 ; j<=n ; j++){
        if(j===1){
            res+=n-i+1+"  ";
        }
       
        else{
            res+=n+"   "
        }
    }
    console.log(res);
    
}
