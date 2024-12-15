function emailId(){
        var email=document.getElementById("mail").value;
    if(email!==""){
    if(email.length>6 &&email.includes("@gmail.com"))
        document.writeln("thank you for registration ");
    else
        document.write("please enter valid email address..!");
    
    }else{
    document.writeln("Email box should not be empty!..");
    }
}