//DATE CLASS

let cd=new Date;
let date=cd.getDate();           //getDate
console.log(date);
let year=cd.getFullYear();           //year
console.log(year);
let month=cd.getMonth()+1;            //month
console.log(month);
console.log(`YEAR : ${year}  MONTH : ${month}  DAY: ${date}`);
let hours=cd.getHours();
console.log(hours);
let min=cd.getMinutes();
console.log(min);
let sec=cd.getSeconds();
console.log(sec);
let milsec=cd.getMilliseconds();
console.log(milsec);
console.log(`year :${year}
month : ${month}
Day : ${date}
Hours : ${hours}
Minutes : ${min}
Seconds : ${sec}
Milliseconds : ${milsec}
`);
let fulldateinstring=cd.toDateString();
console.log(fulldateinstring);
let fulldate=cd.toLocaleDateString();
console.log(fulldate);
let time=cd.toLocaleTimeString();
console.log(time);
console.log(cd);
let cd1=new Date(2028,4,5,3,20,20,900);
console.log(cd1);