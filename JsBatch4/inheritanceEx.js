function Animal(name){
    this.name=name;
}
Animal.prototype.sayHello=function(){
    console.log("heloo..!"+this.name);
}
function Dog(name,breed){
    Animal.call(this,name);   //acts like super keyword //super=accessing all properties
    this.breed=breed;
}
Dog.prototype.bark=function(){
    console.log("bow.........!bow..........");
}
Dog .prototype=Object.create(Animal.prototype);
const a=new Animal("bunty");
const d=new Dog("chintu","street dog");
a.sayHello();
d.sayHello();
//a.bark();
d.bark();
