//using DOT operator
const car=new Object(); //create car object
car.make='toyota';
car.model='camry';
car.year=2022;
car.color='blue';
//access and print elements
console.log("Make:"+car.make);
console.log("Model:"+car.model);
console.log("year:"+car.year);
console.log("color:"+car.color);
//modify elements
car.year=2023;
car.color='red';
console.log(car);
//delete elements
delete car.color;
console.log("After deleting color property:");
console.log(car);
console.log(car.color);
//Using object() and Bracket Notation
const car=new Object();
car["make"]="toyota";
car["model"]="camry";
car["year"]=2022;
car["color"]="black";


