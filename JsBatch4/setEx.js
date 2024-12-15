let s=new Set();
s.add(4);
s.add(5);
s.add(6);
for(var i=1;i<=10;i++){
    s.add(i);
}
console.log(s);
console.log(s.has(5));
console.log(s.has(25));
console.log("before",s);
s.delete(6);
console.log("After",s);
let A=new Set([1,2,2,34,6,898,3654,123]);
console.log(A);
console.log(A.size);
console.log(A.clear()); //method doesn't return anything i.e., it returns  undefind
console.log(A);
let B=new Set();
for(var i=1;i<=10;i++){
    B.add(i);
}
console.log(B);
//COVERTING
let arr=[...B]
console.log(arr.push(10));
console.log(arr);


