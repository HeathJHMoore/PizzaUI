import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { Observable } from 'rxjs';
import { FoodOrderPizza } from '../models/food-order-pizza';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  postOrder(): Observable<Order[]> {
    return this.http.post<Order[]>('https://localhost:44314/api/order', null);
  }

  postPizzaOrder(FOP: FoodOrderPizza) {
    return this.http.post('https://localhost:44314/api/orderpizza', FOP);
  }
}
