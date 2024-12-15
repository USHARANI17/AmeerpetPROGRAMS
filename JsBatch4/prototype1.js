/*const person={
    name:"usha",
    age:22,
    gender:"female"
}
var prototype1={
    walk:()=>{
        console.log("  I am walking method,from prototype");
    }
}
person.__proto__=prototype1;
person.walk();*/

const usha={
    sname:"usha",
    id:2017,
    email:"usha@gmail.com",
    course:"java",
    details:()=>{
        console.log("student details");
    }
}
const prototype1={
    accountNo:1123235167,
    village:"mahammadhapur",
    bankName:"unionBank",
    details1:()=>{
        console.log("Bank details");
    }
}
const prototype2={
    run:function(){
    console.log("i am run method");
    } 
}
usha.__proto__=prototype1;
prototype1.__proto__=prototype2;
usha.run();