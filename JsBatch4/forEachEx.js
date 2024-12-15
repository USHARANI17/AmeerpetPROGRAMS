//ARROW FUNCTION
let arr=[1,2,3,4,56,1,22,3,3,,6,44];
/*let big=arr[0];
arr.forEach((cv)=>{
    if(cv>big){
        big=cv;
    }
})
console.log(`biggest element from the array ${big}`);
let small=arr[0];
arr.forEach((cv)=>{
    if(cv<small){
        small=cv;
    }
})
console.log("smallest element:",small);
let sum=0;
arr.forEach((cv)=>{
    sum=sum+cv;
})
console.log(sum);
//ANONYMOUS FUN
let sum1=0;
arr.forEach(function(cv){
    sum1=sum1+cv;
})
console.log(sum1);
//NAMED FUNCTION
let sum2=0;
function  usha(cv){
    sum2=sum2+cv;
}
arr.forEach(usha);
console.log(sum2);
//ODD  INDEX VALUES
arr.forEach((cv,i,arr)=>{
if(i%2!==0){
    console.log(cv);
}
})*/
//PRIME NUMBER

arr.forEach((cv,i,arr)=>{
    let count=0;
    for(let i=1;i<=cv;i++){
    if(cv%i===0){
        count=count+1;
    }
}
if(count===2){
    console.log("prime",cv);
}
})
//PERFECT NUMBER
arr.forEach((cv)=>{
let n=cv;
let sum=0;
for(let i=1;i<=n-1;i++){
    if(n%i===0){
        sum=sum+i;
    }
}
if(sum===n){
    console.log("perfect num:",n);
}
})
//OBJECT
/*let person={name:"hero",age:22,gender:"male"}
for(let y in person){
    console.log(person[y]);
}
for(let x of person){
    console.log(x);
}*/
let arr1=[1,2,3,4,5,6,7,8];

arr1.forEach((cv)=>{
      cv=cv*2;
      console.log(cv);
})
console.log(arr1);
//EVEN
let newarr=[];
arr1.forEach((cv)=>{
    if(cv%2===0){
        newarr.push(cv);
    }
})
console.log(newarr);


