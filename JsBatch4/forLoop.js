function forLoop(){
    for(var i=1;i<=9;i++){
        console.log(i);
    }
    console.log(i);
    console.log("--------------");
}
forLoop();
function reDeclaration(){
var x=10;//redeclaration and modification are possible with var
var x=20;
let a=1;//redeclaration not possible with let but modification is possible
 a=2;
 const c=10;//redeclaration and modification cann't be possible with const console.log(c);
console.log(a);
console.log(x);
}
reDeclaration();
function declaratinIni(){
    var x;
    console.log(x);
    x=100;
    console.log(x);
let a;
console.log(a);
const b=100;
console.log(b);
}
declaratinIni();


