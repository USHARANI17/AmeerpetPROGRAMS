const sayHello=function(){
    console.log("hellooo");//without input without return
}
sayHello();
const small=function(){
    var a=20;
    var b=30;
    var c=40;
    if(a<b&&a<c){
        console.log("a is small:"+a);
    }else if(b<c){
        console.log("b is small:"+b);
    }else{
        console.log("c is small:"+c);
    }
    }
    small();
    console.log(1=="1");
    console.log(1==="1");
    const findTypeOf=function(a){  //with input without return
        if(typeof a==="number"){
            console.log(a+ "is number");
        }else if(typeof a==="boolean"){
            console.log(a+"is boolean");
        }else if(typeof a==="string"){
            console.log(a+ " is string")
        if(a.length>1){
            console.log(a+" is word");
        }else{
            console.log(a+ " is letter");
        }
    } 
    }
    findTypeOf(9);
    findTypeOf(true);
    findTypeOf(false);
    findTypeOf("hero");
    findTypeOf("a");
    const table=function(n){
        for(var i=1;i<=10;i++){
            console.log(n+"*"+i+"="+(n*i));
        }
    }
    table(7);
    const result=function(){  //without input with return
        let a=10;
        let b=80;
        let sum=a+b;
        return "sum of given numbers"+sum;
    }
    console.log(result());
    const evneNum=function(){   //without input with return
        var sum=0;
        for(var i=1;i<=10;i++){
            if(i%2===0){
            sum=sum+i;
            }
        }return "sum of even numbers"+sum;
    }
    console.log(evneNum());
                                  //with input with return
    const evneOrOdd=function(n){
        if(n%2===0){
            return n+" is even";
        }else{
            return n+ "is odd";
        }
    }
    console.log(evneOrOdd(6));
    const primeNum=function(x){
        var count=0;
        for(var i=1;i<=100;i++){
            if(x%i===0){
                count++;
            }
        }
        if(count===2){
            return x+"is  prime";
        }else{
            return x+ " is not a prime";
        }
    }
    console.log(primeNum(7));

