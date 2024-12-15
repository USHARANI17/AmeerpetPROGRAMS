//OBJECT DESTRUCTURING
let Person={
    name:"usha",
    age:23,
    job:"developer"
}
//let{name:fname,age,job}=Person;
//let{name,age,job}=Person;
//console.log(name);  
let{name:fname,age,job,adress='mdp'}=Person;
console.log(adress);
//ARRAY DESTRUCTURING
let arr=[1,2,3,4,5,78,89,90];
let[a,b,c,d,e,f,g,h,i]=arr;
console.log(h);