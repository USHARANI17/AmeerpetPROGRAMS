//LOCAL SCOPE
/*function ScopeEx(){
    let msg="Good morning";
    console.log(msg);
}
ScopeEx();*/
//GLOBAL SCOPE
/*let name="usha";
function ScopeEX(){
    console.log(name);
}
ScopeEX();
console.log(name);*/
//block scope
/*if(1){
    var age=23;
    console.log(age);
}
console.log(age);*/
let fname="usha";
function msg(){
    let lname="rani";
    function msg1(){
        if(1){
            let fullName="usharani";
            console.log("i'm from global scope: "+fname);
            console.log("i'm from loacal scope: "+lname);
            console.log("i'm from block scope :"+fullName);
        }
    }
    msg1();
}
msg();
