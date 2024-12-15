//const factorsOf=()=>{              //function without input without return
 // let n=10;
//    for(var i=1;i<=n;i++){
  //      if(n%i===0){
//             console.log(i);
//         }
//     }
// }
// factorsOf();
// console.log("Even numbers");
// const evenOdd=()=>{
//     for(var i=1;i<=50;i++){
//         if(i%2===0){
//             console.log(i);
//         }
//     }
//     console.log("odd numbers are:")
//     for(var i=1;i<=50;i++){
//         if(i%2!=0){
//             console.log(i);
//         }
//     }
// }
// evenOdd();
// const greet=(name)=>{                          //with input without return
//     console.log("welcome mr."+name);
// }
// greet("arjun");
// const length=(name)=>{
//     if(name.length<=3){
//         name="Ameerpet technologies";
//         console.log(name);
//     }else{
//         console.log(name);
//     }
// }
// length("hi");
// const lastDigit=(n)=>{
//     const id=n%10;
//     console.log(id);
// }
// lastDigit(285);
// const removeLastDigit=(n)=>{
//     const id=parseInt(n/10);
//     console.log(id);
// }
// removeLastDigit(285);*/
const reverseNum=(x)=>{
    let rev=0;
    while(x>0){
        let ld=x%10;
        rev=rev*10+ld;
        x=parseInt(x/10);
    }
    console.log(rev);
}
reverseNum(286);
// const add=()=>{
//     let a=10;
//     let b=20;
//     return a+b;
// }
// console.log(add());
const add=()=>10+20;
console.log(add());
const perfect=()=>{              //without input with return
    let n=6;
    x=n;
    let sum=0;
    for(var i=1;i<=x-1;i++){
        if(x%i===0){
            sum=sum+i;
        }
    }if(sum===n){
        return "it is a perfect number:"+n;
    }else{
       return "not a perfect number";
    }
}
console.log(perfect());
const perfectNum=(n)=>{              //with input with return
    x=n;
    let sum=0;
    for(var i=1;i<=x-1;i++){
        if(x%i===0){
            sum=sum+i;
        }
    }if(sum===n){
        return "it is a perfect number:"+n;
    }else{
       return "not a perfect number";
    }
}
console.log(perfectNum(6));    
const sub=(x,y)=>{
    return x-y;
}
console.log(sub(20,10));
const sub1=(x,y)=>x-y;
console.log(sub1(30,10));



