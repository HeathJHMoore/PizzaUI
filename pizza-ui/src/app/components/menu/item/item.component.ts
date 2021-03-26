import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../../../models/item';
import { MessengerService } from '../../../services/messenger.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() foodItem: Item;
  constructor(private message: MessengerService) {}

  ngOnInit(): void {}

  handleAddToCart() {
    this.message.sendFoodItem(this.foodItem);
  }
}
