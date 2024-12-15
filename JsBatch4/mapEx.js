/*let fruits=["apple","banana","kiwi","orange"];
fruits.map((cv,i,arr)=>{
    console.log(`current value:${cv} index:${i} array:${arr}`);
})
let numbers=[1,2,3,4,5,6];
const newarr=numbers.map((cv,i,arr)=>{
    return cv*2;
})
console.log(newarr);
const Arr=numbers.map((cv,i,arr)=>{
    return cv*i;
})
console.log(Arr);

console.log(numbers);
const newA=fruits.map((cv,i,arr)=>{
return cv.toUpperCase();
})
console.log(newA);*/
let fruits=["apple","banana","orange","papaya","kiwi"];
const newArr=fruits.map((cv,i,arr)=>{
    return `${cv} : ${cv.length}`;
})
console.log(newArr);
