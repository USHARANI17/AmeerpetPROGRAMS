class Person{
    constructor(){
        console.log("i am constructor");
    }
}
const p=new Person;
const p1=new Person();
class RailwayForm{
    constructor(name,ticketno){
        this.fname=name;
        this.ticketNo=ticketno;
        console.log("Mr/Ms."+this.fname+" your ticket booked with ticket number"+this.ticketNo);
    }
    submit(){
        console.log("Mr/Ms."+this.fname+" your ticket booked successfully with number"+this.ticketNo);
    }
    cancel(){
        console.log("Mr/Ms."+this.fname+"  your ticket cancelled"+this.ticketNo);
    }
    showdetails(){
        console.log("Mr/Ms."+this.fname+" your ticket booked with ticket number"+this.ticketNo);
    }
}
const r=new RailwayForm("usha",567654);
r.submit();
r.cancel();
r.showdetails();
class Person1{
        name;
        graduation;
        village;
    constructor(name1,graduation1,village1){
        this.name=name1;
        this.graduation=graduation1;
        this.village=village1;
    }
    greet(){
        console.log("hello Mr/Ms"+this.name+ " graduation:"+this.graduation+"village"+this.village)
    }
    myDetails(){
        console.log("my name is: "+this.name);
        console.log("qualification : "+this.graduation);
        console.log("i'm from : "+this.village);
    }
}
const P=new Person1("usha","MCA","siddipet");
P.greet();
P.myDetails(); 

