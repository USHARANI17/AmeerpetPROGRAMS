function login(){
    var lForm=document.getElementById("log").value;
    var name=document.getElementById("name").value;
    var password=document.getElementById("password").value;
    if(name==="hero"){
        if(password==="hero@123"){
            document.write("welcome to ameerpet technologies");
        }
    }
}
function aqua(){
    document.body.style.color="aqua";
    var color=document.getElementById("log");
}