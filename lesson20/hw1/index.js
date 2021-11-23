class Order {
  isConfirmed = false;

  dateCreated = new Date();

  dateConfirmed = null;

  id = Math.random().toString();

  constructor(price, city, type) {
    this.price = price;
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    if (this.isConfirmed !== true) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    return this.type === 'Buy' || this.type === 'Sell';
  }
}

// for example
const prod = new Order(1100, 'Kyiv', 'Sell');
console.log(prod);
console.log(prod.checkPrice());
console.log(prod.isValidType());
console.log(prod.dateConfirmed);
prod.confirmOrder();
console.log(prod.isConfirmed);
console.log(prod.dateConfirmed);
prod.confirmOrder();
console.log(prod.isConfirmed);
console.log(prod.dateConfirmed);
console.log(prod);
prod.confirmOrder();
