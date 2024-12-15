let arr=[1,2,3,4,5,67,8,9,10];
let newarr=arr.slice(1,5);
console.log(newarr);                      //slice
console.log(arr.slice(0,6));
let name=['usha','chinnu','milky','manu','anu','hadya'];
let n=name.splice(3,2);                    
console.log(name);                           //splice
console.log(n);
 let add=name.splice(3,1,'asha','chikki');
 console.log(name);
 let arr0=[1,2,34,5,6,78,89,1,23,90];
console.log(arr0.includes(2));