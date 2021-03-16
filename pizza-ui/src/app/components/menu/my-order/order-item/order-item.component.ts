import { Component, OnInit, Input } from '@angular/core';
import { Item } from 'src/app/models/item';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.scss'],
})
export class OrderItemComponent implements OnInit {
  @Input() orderItem: Item;

  constructor() {}

  ngOnInit(): void {}
}
