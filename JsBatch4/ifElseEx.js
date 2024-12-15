if({}){
    console.log("empty array");
}
let arr=[1,2,3,4,5,6,7,8,9,10];
let newarr=arr.filter((cv)=>{
   if(cv%2){
    return cv;
   }
});
console.log(newarr);
console.log(arr.filter((cv)=>cv%2))