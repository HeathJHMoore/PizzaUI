import { Component, OnInit } from '@angular/core';
import { Item } from '../../../models/item';
import { Order } from '../../../models/order';
import { MessengerService } from '../../../services/messenger.service';
import { OrdersService } from '../../../services/orders.service';
import { FoodOrderPizza } from '../../../models/food-order-pizza';
import { FoodOrderSide } from '../../../models/food-order-side';
import { FoodOrderDrink } from '../../../models/food-order-drink';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss'],
})
export class MyOrderComponent implements OnInit {
  orderTotal: number = 0;
  orderItems: Item[] = [];
  mostRecentOrderId: number = 0;
  FoodOrderP: FoodOrderPizza;
  FoodOrderS: FoodOrderSide;
  FoodOrderD: FoodOrderDrink;

  constructor(
    private message: MessengerService,
    private orderService: OrdersService
  ) {}

  ngOnInit(): void {
    this.message.getMessage().subscribe((product: Item) => {
      this.orderItems.push(product);
      this.orderTotal = 0;
      this.orderItems.forEach((item: Item) => (this.orderTotal += item.price));
    });
  }

  onSubmitOrder(orderItems: Item[]) {
    //Create order
    if (orderItems.length != 0) {
      //Create an Order object and get its ID
      this.orderService.postOrder().subscribe((response) => {
        this.mostRecentOrderId = response[0].orderID;
        orderItems.forEach((item: Item) => {
          if (item.type == 'pizza') {
            this.FoodOrderP = new FoodOrderPizza(
              item.id,
              this.mostRecentOrderId
            );
            this.orderService.postPizzaOrder(this.FoodOrderP).subscribe();
          } else if (item.type == 'side') {
            this.FoodOrderS = new FoodOrderSide(
              item.id,
              this.mostRecentOrderId
            );
            this.orderService.postSideOrder(this.FoodOrderS).subscribe();
          } else if (item.type == 'drink') {
            this.FoodOrderD = new FoodOrderDrink(
              item.id,
              this.mostRecentOrderId
            );
            this.orderService.postDrinkOrder(this.FoodOrderD).subscribe();
          }
        });
      });

      this.orderTotal = 0;
      this.orderItems = [];
    } else {
      console.log('Your list of orders is empty!!! Buy something');
    }
  }
}
