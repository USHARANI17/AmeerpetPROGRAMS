let M=new Map();
M.set("name","usha");
M.set("age",23); //ADDING ELEMENTS
console.log(M);
console.log(M.has("name")); //HAS
M.delete("name");
console.log("after deleting element",M);          //DELETE ELEMENT
console.log(M.size);
M.clear();
console.log(M);
let map=new Map();
map.set("name","usharani");
map.set("age",23);
map.set("job","SD");
console.log(map);
let arr=[...map];         //CONVERTING ARRAY
console.log(arr)


