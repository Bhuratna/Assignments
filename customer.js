class Customer{

    id;
    name;
    account;

    toString(){
        return "Id is " + this.id + " Name is " + this.name + " account details: " + this.account;
    }

    constructor(id, name, account){
        this.id = id;
        this.name = name;
        this.account = account;
    }

}

class Account{

    balance;

    toString(){
        return "Balance is " + this.balance;
    }

    constructor(balance){
        this.balance = balance;
    }

}

class PrimeAccount extends Account{

    supercoins;

    toString(){
        return "Balance is " + super.toString() + " Supercoins earned is " + this.supercoins;
    }

    constructor(balance, supercoins){
        super(balance);
        this.supercoins = supercoins;
    }

}

let acc1 = new Account(8.0);
let acc2 = new Account(10.4);
let primeAccount1 = new PrimeAccount(68.0, 50);
let primeAccount2 = new PrimeAccount(79.8, 80);
let cust1 = new Customer(1, "A", acc1);
let cust2 = new Customer(2, "B", acc2);
let cust3 = new Customer(3, "C", primeAccount1);
let cust4 = new Customer(4, "D", primeAccount2);

let customers = [cust1, cust2, cust3, cust4];

for(let i=0; i<customers.length; i++){
    console.log(customers[i].toString());
}