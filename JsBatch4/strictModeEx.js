//y=10;
//console.log(y);
//"use strict"
/*x=10; //error : x is not define
console.log(x);
let y="hero";
//delete y;  //ERROR: 'delete' cannot be called on an identifier in strict mode
console.log(y);
//FUNCTION
function mul(a,a){
    console.log(a*a); // ERROR: Duplicate parameter name not allowed in this context
}
mul(10,20);*/
/*let num=0127; //SyntaxError: Octal literals are not allowed in strict mode.
console.log(num);*/
/*function abc(){
    "use strict"
    x=10;
    console.log(x);
}
//abc();
y="hero";
console.log(y);*/
"use strict"
function abc(){
    console.log(this); //window obj
}
abc();