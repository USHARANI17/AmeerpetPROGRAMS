function sayHello(){
    console.log("hello");
    console.log("wlcome to nodejs")
}
function sum(){
    let a=2;
    let b=3;
    console.log(a+b);
}
function varEX(){
    if(true){
        var x=10;
    }
    console.log(x);
}
function letEX(){
    if(true){}
        let x=10;
    console.log(x);
}
function constEX(){
    if(true){
        const x=10;
    console.log(x);
    }
}
constEX();
letEX();
varEX();
sum();
sayHello();