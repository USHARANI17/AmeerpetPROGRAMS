class Person{
    #name;
    #age;
    constructor(name,age){
        this.#name=name;
        this.#age=age;
    }
    setName(name){
        this.#name=name;
    }
    getName(){
        return this.#name;
    }
    setAge(age){
        this.#age=age;
    }
    getAge(){
        return this.#age;
    }
}

const p=new Person("usha",22);
console.log(p.getName());
console.log(p.getAge());
p.setName("rani");
p.setAge(23);
console.log(p.getName());
console.log(p.getAge());