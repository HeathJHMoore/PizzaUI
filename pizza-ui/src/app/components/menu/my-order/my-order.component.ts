import { Component, OnInit } from '@angular/core';
import { Item } from '../../../models/item';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss'],
})
export class MyOrderComponent implements OnInit {
  orderTotal: number = 0;
  orderItemNum: number = 0;
  orderItems: Item[] = [
    new Item(
      1,
      'Cheese Pizza',
      10.5,
      'Delicious Cheese Pizza With Tomato Sauce and a Thin Crust',
      'https://www.pizzahut.com/assets/w/tile/thor/pizza_Cheese.png'
    ),
    new Item(
      2,
      'Pepperoni Pizza',
      10.5,
      'Delicious Pepperoni Pizza With Tomato Sauce and a Thin Crust',
      'https://www.pizzahut.com/assets/w/tile/thor/pizza_Pepperoni.png'
    ),
    new Item(
      1,
      'Cheese Pizza',
      10.5,
      'Delicious Cheese Pizza With Tomato Sauce and a Thin Crust',
      'https://www.pizzahut.com/assets/w/tile/thor/pizza_Cheese.png'
    ),
    new Item(
      2,
      'Pepperoni Pizza',
      10.5,
      'Delicious Pepperoni Pizza With Tomato Sauce and a Thin Crust',
      'https://www.pizzahut.com/assets/w/tile/thor/pizza_Pepperoni.png'
    ),
    new Item(
      1,
      'Cheese Pizza',
      10.5,
      'Delicious Cheese Pizza With Tomato Sauce and a Thin Crust',
      'https://www.pizzahut.com/assets/w/tile/thor/pizza_Cheese.png'
    ),
    new Item(
      2,
      'Pepperoni Pizza',
      10.5,
      'Delicious Pepperoni Pizza With Tomato Sauce and a Thin Crust',
      'https://www.pizzahut.com/assets/w/tile/thor/pizza_Pepperoni.png'
    ),
    new Item(
      1,
      'Cheese Pizza',
      10.5,
      'Delicious Cheese Pizza With Tomato Sauce and a Thin Crust',
      'https://www.pizzahut.com/assets/w/tile/thor/pizza_Cheese.png'
    ),
    new Item(
      2,
      'Pepperoni Pizza',
      10.5,
      'Delicious Pepperoni Pizza With Tomato Sauce and a Thin Crust',
      'https://www.pizzahut.com/assets/w/tile/thor/pizza_Pepperoni.png'
    ),
  ];
  constructor() {}

  ngOnInit(): void {
    this.orderItems.forEach((item: Item) => (this.orderTotal += item.price));
  }
}
