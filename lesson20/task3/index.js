class Wallet {
  _balance = 0;

  getBalance() {
    return this._balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  withdraw(amount) {
    if (amount > this._balance) {
      console.log(`No enough funds`);
      return;
    }

    this._balance -= amount;
  }
}

// ** for example
const fff = new Wallet();
console.log(fff._balance);
fff.deposit(26);
console.log(fff._balance);
fff.withdraw(14);
console.log(fff._balance);
fff.withdraw(63);
console.log(fff._balance);
