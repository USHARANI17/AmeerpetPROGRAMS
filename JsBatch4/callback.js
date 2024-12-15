//CALLBACK EX1
/*function test(callback){
console.log("hloo");
    callback("usha");
}
function abc(name){
    console.log("i am a callback fun");
    console.log("hii ms.",name);
}
test(abc);
//CALL BACK EX2
function check(even){
    even(6);
}
function even(n){
    if(n%2===0){
        console.log( `${n} is even number`);
    }
    else{
        console.log(`${n} is Odd`);
    }
}
check(even);
//CALLBACK  EXAMPLE3
/*function num(prime){
    prime(15);
}
function prime(x) {
    let count=0;
   for(let i=1;i<=x;i++){
    if(x%i===0){
        count=count+1;
    }
   } 
   if(count===2){
    console.log(`${x} is a prime number`);
   }
   else{
    console.log(`${x} is not a prime number`);
   }
}
num(prime());
//example4
function  test1(a,b,callback){
console.log("my name is",a);
console.log("id",b);
callback(10,20,30);
}
function add(x,y,z){
    let sum=x+y+z;
    console.log(`sum=${sum}`);
}
test1("usha",2017,add);
//CALLBACK EXAMPLE5
function  adding(a,b,c,callback){
   return callback(a,b,c);
}
function sum(x,y,z){
    let result=x+y+z;
    return result;
}
console.log(adding(10,20,30,sum));*/
//CALLBACK EXAMPLE 6
function hlo(rest,...b){
rest(b);
}
function rest(a){
    let sum=0;
for(let i=0;i<=a.length-1;i++){
    sum=sum+a[i];
}
console.log("sum:",sum);
}
hlo(rest,10,20,30,40,50,60);