class Shape{
    calculateArea(){
        throw new Error("Abstarct method");
    }
}
class Circle extends Shape{
    constructor(radius){
        super();
        this.radius=radius;
    }
    calculateArea(){
        var area=3.14*this.radius*this.radius;
        console.log(area);
    }
}
class Square extends Circle{
    constructor(radius){
        super();
        this.radius=radius;
    }
    calculateArea(){
     var area=this.radius*this.radius;
    console.log(`Area of square is${area}`);
    }
}
const C=new Square(20);
C.calculateArea();