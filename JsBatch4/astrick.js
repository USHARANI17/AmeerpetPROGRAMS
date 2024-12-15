for(var i=1;i<=5;i++){
    var O="";
    for(var s=5;s>i;s--){
        O+=" ";
    }
    for(var j=i;j>=1;j--){
        O+="*";
    }
    for(var k=2;k<=i;k++){
        O+="*";
    }
    console.log(O);
}
console.log("------------------");
for(var i=5;i>=1;i--){
    var A="";
    for(var s=1;s<i;s++){
        A+=" ";
    }
    for(var j=i;j<=5;j++){
        A+="*";
    }
    for(var k=4;k>=i;k--){
        A+="*";
    }
    console.log(A);
}