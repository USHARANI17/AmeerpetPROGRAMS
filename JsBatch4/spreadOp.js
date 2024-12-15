//spread operator using array
let a=[10,20,30,40];
let b=[...a];
console.log(a);
console.log(b);
b.push(80);
b.unshift(9,80);
console.log("after modification");
console.log(a);
console.log(b);
//spread operator using object
let person={ name:"halo"}
let student={...person};
console.log(person);
console.log(student);
student.age=22;
console.log(person);
console.log(student);
let ori=["apple","banana","orange"];
let copy=ori;
let copy1=[...ori];
console.log(ori===copy);
console.log(ori===copy1);


