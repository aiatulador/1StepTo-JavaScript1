var input = prompt("Enter Number upto");

for(var i=1;i<=input;i++){
    if(i==1){
        console.log(i)
    }
    else{
         var checkPrime =0;
        for(var j = 1;j<=input;j++){
            
            if(i%j==0)
                checkPrime ++;
        }
      if(checkPrime==2){
        console.log(i)
    }
    }
}
    
