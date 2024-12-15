for(var i=1;i<=5;i++){
    let output="";
    for(var s=1;s<=5-i;s++){
        output+=" ";
    }
    for(var j=1;j<=i;j++){
        output+=j;
    }
    console.log(output);
}
console.log("--------------------");
for(var i=5;i>=1;i--){
    let O="";
    for(var s=1;s<=5-i;s++){
        O+=" ";
    }
    for(var j=1;j<=i;j++){
        O+=j;
    }
    console.log(O);
}
console.log("--------------------");
for(var i=1;i<=5;i++){
    let S="";
    for(var s=1;s<=i-1;s++){
        S+=" ";
    }
    for(var j=i;j<=5;j++){
        S+=j;
    }
    console.log(S);
}
console.log("--------------------");
for(var i=5;i>=1;i--){
    let K="";
    for(var s=1;s<=i-1;s++){
        K+=" ";
    }
    for(var j=5;j>=i;j--){
        K+=j;
    }
    console.log(K);
}
