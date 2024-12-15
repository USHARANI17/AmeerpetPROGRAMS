class Animal{
    name;
    constructor(name){
        this.name=name;
    }
    sayHello(){
        console.log("hello.."+this.name);
    }
}
class Dog extends Animal{
    name;
    breed;
constructor(name,breed){
    super(name);
    this.name=name;
    this.breed=breed;

}
bark(){
    console.log("boww...boww");
}
}
const a=new Animal("bunty");
const d=new Dog("chintu","streetdog");
a.sayHello();
d.sayHello();
d.bark();

