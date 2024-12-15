class MathOperation{
    static add(x,y){
        return x+y;
    }
    static add(x,y,z){
        return x+y+z;
    }
}
console.log(MathOperation.add(10,20,20));
console.log(MathOperation.add(10,20));
