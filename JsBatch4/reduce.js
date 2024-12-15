const arr=[1,3,2,5,8,4];
//sum
function findSum(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        sum=sum+arr[i];
    }
    return sum;
}
console.log(findSum(arr));
const output=arr.reduce(function (acc,curr){
    acc=acc+curr;
    return acc;
},0);
console.log(output);
const user=[
    {firstName:"usha",lastName:"Rani",age:23},
    {firstName:"pushpa",lastName:"Latha",age:23},
    {firstName:"Manvitha",lastName:"Reddy",age:8},
    {firstName:"Shivathmika",lastName:"Reddy",age:6}
];
// acc={23:1 ,8:1,6:1}
const output1=user.reduce(function (acc,curr){
    if(acc[curr.age]){
        acc[curr.age]=++acc[curr.age];
    }
    else{
        acc[curr.age]=1;
    }
    return acc;
},{});
console.log(output1);
//["usha","pushpa"]
const output3=user.filter((x)=>x.age>20).map((x)=> x.firstName);
const output4=user.reduce(function (acc,curr){
    if(curr.age>20){
       acc.push(curr.firstName);
    }
    return acc;
},[]);
console.log(output3);
console.log(output4);
