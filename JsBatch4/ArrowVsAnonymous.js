let Person={
    fname:"ameerpet",
    lname:"technologies",
    fullname1:function(){
        console.log(this.fname+ " "+this.lname);
    },
    fullname2:()=>{
        console.log(this.fname+ " "+this.lname);
    }
}
Person.fullname1();
Person.fullname2();
function add(){
    let a=80;
    let b=90;
    console.log(a+b);
}
add();
add.call();
let Person1={
    fname:"ameerpet",
    lname:"technologies",
    fullname1:function(){
        console.log(this.fname+ " "+this.lname);
    }
}
const Person2={
    fname:"hero",
lname:"zero"
}
Person1.fullname1.call(Person2);