//ARRAY OPERATIONS USING SPREAD OPERATOR
let arr1=[1,2,3,4];
let arr2=[5,6,7,8];
let arr3=[6,7,8,95,9];
let comarr=[...arr1,...arr2,...arr3];   //combine arrays using spread operator
console.log(comarr);
let arr=[10,203,40,50];
let newarr=[...arr,50,60,70];
console.log(newarr);                 //adding elements  at the end of an array using ...
let newarr1=[111,222,...newarr];          //adding elements  at the begining  of an array using ...
console.log(newarr1);
let fruits=["apple","banana","orange"];
let copy=[...fruits];                     //coping one array into another array using spread op
console.log(copy);
 
//OBJECT OPERATIONS USING SPREAD OPERATOR
let obj1={name:"hero",age:28};
let obj2={job:"developer",salary:"12LPA"};
let comobj={...obj1,...obj2};
console.log(comobj);                 //combine two obj's using spread op
let add={...obj1,id:2017};
console.log(add);                    //adding elements to obj at ending
console.log(obj1.name);
let ad={phn:801230987,...obj1};           //adding element at starting
console.log(ad);
let copyO={...obj2};                      //coping obj                                                        
console.log(copyO);
