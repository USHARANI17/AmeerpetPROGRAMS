class RailwayForm{
    fill(name,ticketno){
        this.fname=name;
        this.ticketNo=ticketno;
        console.log("Ms."+this.fname+" yours ticket booked with:"+this.ticketNo);
    }
    submit(){
        console.log("Ms."+this.fname+" yours ticket booked with:"+this.ticketNo);
    }
    console(){
        console.log("Ms."+this.fname+" yours ticket booked with:"+this.ticketNo);
    }
}
const obj=new RailwayForm();
//obj.fill("usha",101);
obj.submit();
obj.console();