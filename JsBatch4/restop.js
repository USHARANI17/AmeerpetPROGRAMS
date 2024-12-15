//REST PARAMETERS
function add(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10){
    let sum=a1+a2+a3+a4+a5+a6+a7+a8+a9+a10;
    console.log(sum);
}
add(1,2,3,4,5,6,7,8,9,10);
//FOR
function add1(...a){
    let  sum=0;
    let sum1=0;
    let sum2=0;
    for(let i=0;i<=a.length-1;i++){
        sum=sum+a[i];
    }
    console.log("for",sum);
    //FOR OF LOOP
    for(let y of a){
        sum1=sum1+y;
        }
        console.log("for of",sum1);
        //FOR IN LOOP
        for(let z in a){
            sum2=sum2+a[z];
        }
        console.log("for of:",sum2);
}
add1(1,2,3,4,5,6,7,8,9,10);
//PRIME NUMBER
function prime(...p){
    let count=0;
    for(let i=0;i<=p.length-1;i++){
        let n=p[i];
        for(let j=1;j<=n;j++){
            if(n/j==0){
               count++; 
            }
        }
        if(count==2){
            console.log("prime:",n);
        }
    }
}
prime(2,3,4,15,5,7,13,15,11);
