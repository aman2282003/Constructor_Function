function BankAccount(accountNumber, namee, type, balance){
    this.accountNumber = accountNumber;
    this.namee = namee;
    this.type = type;
    this.balance = balance;    
    }
//  function of deposite
    function deposite(add_amount){
        this.balance = this.balance+add_amount
    }

// function of withdraw
    function withdraw(withdraw_amount){
        if(withdraw_amount<=this.balance){
            this.balance = this.balance-withdraw_amount
        }
        else{
            console.log("insufficent balance")
        }
    }
// function of checking balance
    function check_balance(){
        console.log(this.balance)
    }
// function for checking account is active or not 
    function check_active(){
        if(this.balance >1000){
            return true
        }
        else{
            return false
        }
    }


let p1 = new BankAccount(1111111, "Aman_singh","saving",56000);
let p2 = new BankAccount(2222222, "Ayush_singh","current",8000);
let p3 = new BankAccount(3333333, "Ashish_singh","curent",0);
let p4 = new BankAccount(4444444, "sonam_singh","current",560);
let p5 = new BankAccount(5555555, "Anamika_singh","saving",99000);
    

let accounts = [p1, p2, p3, p4, p5];

function getTotalBalance() {
    let totalBalance = 0;
    for (let i = 0; i < accounts.length; i++) {
        let account = accounts[i];
        if (check_active.call(account)) {
            totalBalance += account.balance;
        }
    }
    return totalBalance;
}

let totalActiveBalance = getTotalBalance();
console.log("Total balance of all active accounts:", totalActiveBalance);

// deposite function invoked by p3
deposite.call(p3,5000)
console.log(p3)


// withdraw function invoked by p1
withdraw.call(p1,20000000)
console.log(p1)

// check_balance function invoked by p4
check_balance.call(p4)


// check_active function invoked by p5
let chek = check_active.call(p4)
console.log(chek)

