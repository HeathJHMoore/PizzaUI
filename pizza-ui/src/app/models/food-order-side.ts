export class FoodOrderSide {
  SideID: number;
  OrderID: number;
  OrderItemIndex: number;

  constructor(sideID, orderID, orderItemIndex) {
    this.SideID = sideID;
    this.OrderID = orderID;
    this.OrderItemIndex = orderItemIndex;
  }
}
