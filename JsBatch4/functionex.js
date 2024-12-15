function greet(){  //without input without return
    const name="hero"; 
    console.log("hello"+name);
}
greet();
function welcome(){
    console.log("welcome to my world");
}
welcome();
function add(a,b){
    let sum=a+b;
    console.log(sum);

}
add(10,20);
function greet1(name){ 
    console.log("wlcome to js mr."+name)
}
greet1("arjun");   
function circleArea(r){ // with input without return
    var area=3.14*r*r;
    console.log( "area of circle" +area);
}circleArea(10); 
function greet2(){
    const name="usha";
    return "hello:  "+name;
}
const message=greet2();
console.log(message);
function factorial(){ //without input with return
    let n=5;
    let fact=1;
    for(var i=1;i<=n;i++){//for(var i=n;i>=1;i--)
         fact=fact*i;
    }
    return fact;
}
const factorial1=factorial(); //with input with return
console.log(factorial1);
function mul(a,b){
    return a*b;
}
console.log(mul(5,4)); //const result=mul(5,4)
                          //clg(result);
function largestVal(a,b){
    if(a<b){
        return  "b is big : " +b;
    }
    else{
        return  "a is big"+a;
    }
}
console.log(largestVal(10,20));