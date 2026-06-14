// Encapsulation = hide in a place


class BankAccount{
    public readonly userId: number;
    public userName: string;
    protected userBalance: number;

    constructor(userId:number, userName:string, userBalance:number){
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    };

   public addBalance(prevBalance: number){
    this.userBalance = this.userBalance + prevBalance;
   };

   callHiddenMethod(balance:number){
    this.addBalance(balance);
   }

};

class StudentAccount extends BankAccount{
    test(){
        this.userBalance
    }

}

const accountRafee = new BankAccount(88, "Hasan Rafee" , 3000);
accountRafee.addBalance(1000);
console.log(accountRafee);

