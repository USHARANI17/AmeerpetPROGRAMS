let a=10;
let b=a;
b=b+20;
console.log(a);
console.log(b);
//call by value
function test(x){
    x=x+30;
    console.log(x);
}
let x=25;
test(x);
console.log("x value outside the function" +x);
function testS(y){
y=y+"rani";
console.log(y)
}
let y="usha";
testS(y);

console.log("y value outside the function:"+y);
// call by reference 
let s=[10,20,40,39];
let t=s;
console.log("s",s);
console.log("t",t);
t.push(80);
t.unshift(70);
console.log("after modification:");
console.log("s",s);
console.log("t",t);
// call by reference
function cbr(arr){
arr.push(90);
arr.pop();
arr.unshift(6,2,3,5);
console.log("Array inside the function:",arr);
}
let arr1=[10,20,30,40];
cbr(arr1);
console.log("Array outside the function",arr1);
//call by reference using  object
function obj(student){
student.sid=2001;
console.log("inside:",student);
}
let student={
     sname:"usha",
       sid:2017,
       sage:22
}
obj(student);
console.log("outside:",student);
   