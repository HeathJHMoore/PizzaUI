import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Item } from 'src/app/models/item';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  subject = new Subject();

  constructor() {}

  sendFoodItem(product) {
    this.subject.next(product);
  }

  getFoodItem() {
    return this.subject.asObservable();
  }
}
