//PRIME NUMBER USING REST OPERATOR
function prime(...p){
    for(let i=0;i<=p.length-1;i++){
        let n=p[i];
        let count=0;
        for(let j=1;j<=n;j++){
            if(n%j===0){
                count=count+1; 
            }
        }
        if(count===2){
            console.log("prime:",n);
        }
    }
}
prime(2,3,4,15,5,7,13,15,11);
//PERFECT NUMBER USING REST OPERATOR
function perfect(...per){
for(let j=0;j<=per.length-1;j++){
let n=per[j];
let sum=0;
for(let i=1;i<=n-1;i++){
    if(n%i===0){
        sum=sum+i;
    }
}
if(sum===n){
    console.log("perfect num:",n);
}
}
}
perfect(6,496,28,865,109876);