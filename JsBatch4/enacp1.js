class BankAccount{
    #account;
    #balance;
    
    constructor(account,balance){
        this.#account=account;
        this.#balance=balance;
    }
    setAccount(account){
        this.#account=account;
    }
    getAccount(){
        return this.#account;
    }
    setBalance(balance){
        this.#balance=balance;
    }
    getBalance(){
        return this.#balance;
    }
    withdraw(amount){
        if(this.#balance>500){
            this.#balance=this.#balance-amount;
        }
        console.log("A/c *1578 Debited for Rs."+amount+"on 20-05-2024 11:17:54 by Mob Bk ref no 4095126787 Avl  Bal Rs"+this.#balance);
        console.log(this.#balance);
    }
    deposit(amount1){
        if(amount1>0){
            this.#balance=this.#balance+amount1;
        }
        console.log(this.#balance);
    }

}
const B=new BankAccount(3456789,600);
console.log(B.getAccount());
console.log(B.getBalance());
B.withdraw(600);
B.deposit(4999);
/*B.setAccount(45678909876);
B.setBalance(10000000);
console.log(B.getAccount());
console.log(B.getBalance());*/