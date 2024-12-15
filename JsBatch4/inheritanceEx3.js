class Vehicle{
    model;
    made;
    year;
    constructor(model,made,year){
        this.model=model;
        this.made=made;
        this.year=year;
    }
launching(){
    console.log(`${this.model} is made in ${this.made} is going to launch in the year of ${this.year}`);
}
stopping(){
    console.log(`due to some reasond ${this.model} is going to shunt down in the year ${this.year} of ${this.year}`);
}

}
class Car extends Vehicle{
    modifying(){
        console.log(`modification of car completed`);
    }
    stopping(){
        console.log(`${this.made} is not going to stop its production`);
    }
}
const c=new Car('toyota','India',2025);
c.launching();
c.stopping();
c.modifying();