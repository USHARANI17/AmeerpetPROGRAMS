for(var i=1;i<=5;i++){
    var L="";
    for(var s=5;s>i;s--){
        L+=" ";
    }
    for(var j=1;j<=i;j++){
        L+=j;
    }
    for(var k=i-1;k>=1;k--){  
        // 1    
       // 121
      // 12321
     // 1234321
    // 123454321
        L+=k;
    }
    console.log(L);
}
console.log("---------------");
for(var i=5;i>=1;i--){
    var A="";
    for(var s=1;s<i;s++){
        A+=" ";
    }
    for(var j=5;j>=i;j--){
        A+=j;
    }  
    for(var k=i+1;k<=5;k++){
        A+=k;
    }
   console.log(A);
}
console.log("------------");
for(var i=5;i>=1;i--){
    var M="";
    for(var s=5;s>i;s--){
        M+=" ";
    }
    for(var j=1;j<=i;j++){
        M+=j;
    }
    for(var k=i-1;k>=1;k--){
        M+=k;
    }
    console.log(M);
}
console.log("----------------");
for(var i=1;i<=5;i++){
    var Q="";
    for(var s=1;s<=i-1;s++){
        Q+=" ";
    }
    for(var j=5;j>=i;j--){
        Q+=j;
    }
    for(var k=i+1;k<=5;k++){
        Q+=k;
    }
    console.log(Q);
}
console.log("----------------");
for(var i=1;i<=5;i++){
    var P="";
    for(var s=1;s<i;s++){
        P+=" ";
    }
    for(var j=i;j<=5;j++){
        P+=j;
    }
    for(var k=4;k>=i;k--){
        P+=k;
    }
    console.log(P);
}
console.log("--------------------");
for(var i=5;i>=1;i--){
    var B="";
    for(var s=5;s>i;s--){
        B+=" ";
    }
    for(var j=i;j>=1;j--){
        B+=j;
    }
    for(var k=2;k<=i;k++){
        B+=k;
    }
    console.log(B);
}
