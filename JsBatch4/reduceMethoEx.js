let arr=[1,2,3,4,5,6,7,8,9,10];
arr.reduce((ac,cv,i,arr)=>{
    console.log(ac,cv,i,arr)
},10);
const sum=arr.reduce((ac,cv)=>{
    return ac+cv;
},0);
console.log("sum of arr",sum);
let arr1=[1,2,3];
const mul=arr1.reduce((ac,cv)=>{
    return ac*cv;
},2);
console.log(mul);
//LARGEST VALUE
let large=[12,6,40,30,20,5];
let max=0;
let newArr=large.reduce((ac,cv)=>{
    return  Math.max(ac,cv);
},max);
console.log(newArr);
//MINIMUM VALUES
let iv=Infinity;
let small=large.reduce((ac,cv)=>{
   // return Math.min(ac,cv);
   if(cv<ac){                                                                                                                                                                                   
    ac=cv;
   }
   return ac;
},iv);
console.log(small);