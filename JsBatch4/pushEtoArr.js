let arr=[10,20,30,40];
console.log(arr);
arr.push(50);
console.log(arr);
let fruits=['apple','banana','Orange','grapes','dragonfruit'];
console.log(fruits);
  lastelement =fruits.pop();
console.log(lastelement);
let days=['monday','tuesday','wednesday','thurday','friday','saturday','sunday'];
console.log(days);
let fele=days.shift();
console.log(days);
console.log(fele);//monday
console.log(days.pop());//sunday
days.unshift("hero","zero");
console.log(days);
let number=[10,40,56,80,40,67,20,304,45,3,20];
let index=number.indexOf(20);
console.log(index);
let ind=number.lastIndexOf(20);
console.log(ind);
let num=[10,20,30,40,50,60,70,770,80,90];
console.log(num);
num.reverse();
console.log(num);
let fruit=['cherry','apple','banana','orange','grapes','dragonfruit'];
fruit.sort();
console.log(fruit);
let num1=[10,20,30,40,50,60,70,770,80,90];
num1.sort();
console.log(num1);
console.log(Array.isArray(num1));
let num2=3;
console.log(Array.isArray(num2));
let num0=[1,2,3,4];
let num00=[5,6,7,7];
let combine=num0.concat(num00,num1);
console.log(combine);

console.log(num0.join('')); 

