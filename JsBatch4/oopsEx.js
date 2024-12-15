class RailwayForm{
    submit(){
        console.log("Your form submitted successfully");
    }
    cancel(){
        console.log("Sorry,your form cancelled");
    }
}
const FirstHeroForm=new RailwayForm();
const SecondHeroForm=new RailwayForm();
/*SecondHeroForm.cancel();
SecondHeroForm.submit();
FirstHeroForm.cancel();
FirstHeroForm.submit();*/
FirstHeroForm['cancel']();
FirstHeroForm['submit']();
SecondHeroForm['cancel']();
SecondHeroForm['submit']();
//x=10;
//console.log(x);
class Login{
    fill(){
        console.log("hloo");
    }
    static submit(){
        console.log("Static Method");
    }
    static cancel(){
        console.log("Static Method");
    }
}
const HeroForm=new Login();
HeroForm.fill();

Login.submit();
Login.cancel();
/*Login['submit']();
Login['cancel']();*/
