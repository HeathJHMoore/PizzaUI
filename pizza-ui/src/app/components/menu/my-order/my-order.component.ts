import { Component, OnInit } from '@angular/core';
import { Item } from '../../../models/item';
import { MessengerService } from '../../../services/messenger.service';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss'],
})
export class MyOrderComponent implements OnInit {
  orderTotal: number = 0;
  orderItems: Item[] = [];
  constructor(private message: MessengerService) {}

  onSubmitOrder(orderItems) {
    console.log(orderItems);
    this.orderTotal = 0;
    this.orderItems = [];
  }

  ngOnInit(): void {
    this.message.getMessage().subscribe((product: Item) => {
      this.orderItems.push(product);
      this.orderTotal = 0;
      this.orderItems.forEach((item: Item) => (this.orderTotal += item.price));
    });
  }
}
