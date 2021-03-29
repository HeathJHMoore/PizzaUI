import { Item } from 'src/app/models/item';
export class Order {
  orderID: number;
  orderDate: Date;
  orderItems: Item[] = [];

  constructor(ID, date) {
    this.orderID = ID;
    this.orderDate = date;
    this.orderItems = [];
  }
}
