const arr=[2,4,1,47,8,4,9];
function isEven(x){
    return x%2==0;
}
const output=arr.filter(isEven);
console.log(output);