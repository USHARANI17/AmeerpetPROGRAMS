class Animal{
    sound(){
        console.log("i am sound");
    }
}
class Dog extends Animal{
    sound(){
        console.log("bow bowww");
    }
}
class Cat extends Dog{
    sound(){
        console.log("mewww meww");
    }
}
const C=new Cat();
const D=new Dog();
const A=new Animal();
C.sound();
D.sound();
A.sound();