function add(){
    console.log(10+20);
}
const sum=add.bind();
sum();

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
const Details=Person1.fullname1.bind(Person2);
Details();