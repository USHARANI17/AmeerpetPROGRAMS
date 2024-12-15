const arr=[2,3,5,1,6,7];
const output=arr.map((x)=> x*2
);
console.log(output);
const output1=arr.map(function binary(x){
    return x.toString(2);
}
);
console.log(output1);
