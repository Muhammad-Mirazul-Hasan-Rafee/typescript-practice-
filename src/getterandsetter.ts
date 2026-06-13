

class BankAccount {
    public readonly userId: number;
    public userName: string;
    protected userBalance: number;

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    };

    // set the balance
    //    addBalance(prevBalance: number){
    //     return this.userBalance = this.userBalance + prevBalance;
    //    };

    // using setter === here we don't need return
    set addBalance(amount: number) {
        this.userBalance = this.userBalance + amount;
    };



    //    get balance  
    // getBalance(){
    //     return this.userBalance;
    // };


    // using getter === here we need return
    get getBalance() {
        return this.userBalance;
    }

};


const accountRafee = new BankAccount(88, "Hasan Rafee" , 3000);
// accountRafee.addBalance(1000); //function call
// console.log(accountRafee.getBalance()); //function call

accountRafee.addBalance = 500;
console.log(accountRafee);
console.log(accountRafee.getBalance);

