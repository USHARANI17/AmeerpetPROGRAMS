const person={
    fname:"Ameerpet",
    lname:"Technologes",
    fullName:function(){
          console.log(person.fname+ " "+this.lname);
    }
,greet:function(){
return "hiii";
}
}
person.fullName();
console.log(person.greet());

