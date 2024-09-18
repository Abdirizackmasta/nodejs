const eventEmitter = require("node:events");

class PizzaShop extends eventEmitter  {
  constructor() {
    super();
    this.orderNumber = 0;
  }
  order(size, topping) {
    this.orderNumber++;
    this.emit("order", size,topping)
  }
  displayOrderNumber() {
    console.log(`current order number: ${this.orderNumber}`);
  }
}

module.exports = PizzaShop;
