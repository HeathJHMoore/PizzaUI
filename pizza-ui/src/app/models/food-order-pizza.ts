export class FoodOrderPizza {
  PizzaID: number;
  OrderID: number;
  OrderItemIndex: number;

  constructor(pizzaID, orderID, orderItemIndex) {
    this.PizzaID = pizzaID;
    this.OrderID = orderID;
    this.OrderItemIndex = orderItemIndex;
  }
}
