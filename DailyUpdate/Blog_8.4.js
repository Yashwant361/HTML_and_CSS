let n= 5;

for(let i = 1 ; i<= n ; i++){
    let res="";
    for(let j = 1 ; j<=n;j++){
        if(i===1 ){
            res+="* ";
        }
        else if(j===1){
            res+="* ";
        }
        else if (i+j ===n+1){
            res+="* ";
        }
        else{
            res+="  ";
        }
    }
    console.log(res);
    

}