export class FoodOrderDrink {
  DrinkID: number;
  OrderID: number;
  OrderItemIndex: number;

  constructor(drinkID, orderID, orderItemIndex) {
    this.DrinkID = drinkID;
    this.OrderID = orderID;
    this.OrderItemIndex = orderItemIndex;
  }
}
