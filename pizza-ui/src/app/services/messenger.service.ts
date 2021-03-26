import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessengerService {
  subject = new Subject();
  subject2 = new Subject();

  constructor() {}

  sendFoodItem(product) {
    this.subject.next(product);
  }

  getFoodItem() {
    return this.subject.asObservable();
  }
}
