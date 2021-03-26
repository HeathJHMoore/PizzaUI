import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { Order } from '../../models/order';
import { FoodOrderPizza } from '../../models/food-order-pizza';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  constructor(private ordersService: OrdersService) {}

  ngOnInit(): void {
    //Testing reception of pizzaOrders
    this.ordersService.getPizzaOrder(1044).subscribe((pizzaOrders) => {
      pizzaOrders.forEach((pizza: FoodOrderPizza) => {
        console.log(pizza);
      });
    });
  }
}
