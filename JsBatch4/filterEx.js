let fruits=["apple","banana","orange","papaya","kiwi"];
fruits.filter(function(cv,i,arr){
    console.log(cv.toUpperCase());
})
/*fruits.filter((cv,i,arr)=>{
    console.log(cv,i,arr);
})
//EXAMPLE2
//ARROW
let num=[1,2,3,4,5,6];
const even=num.filter((cv,i,arr)=>{
    if(cv%2===0){
        return cv;
    }
})
console.log(even);
console.log(num);
//ANONYMOUS FUN
const even1=num.filter(function(cv,i,arr){
    if(cv%2===0){
        return cv;
    }
})
console.log(even1);
console.log(num);
//NAMED FUN
const even2=num.filter(function usha(cv,i,arr){
    if(cv%2===0){
        return cv;
    }
})
console.log("named",even2);*/
let A=[1,2,3,4,5,6,78,90,90];
//Arrow fun in single line
console.log(A.filter(cv=>cv%2===0));

