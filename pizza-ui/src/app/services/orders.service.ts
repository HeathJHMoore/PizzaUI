import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from '../models/order';
import { Observable } from 'rxjs';
import { FoodOrderPizza } from '../models/food-order-pizza';
import { FoodOrderSide } from '../models/food-order-side';
import { FoodOrderDrink } from '../models/food-order-drink';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  getAllOrders(): Observable<Order[]> {
    return this.http.get<Order[]>('https://localhost:44314/api/order');
  }

  postOrder(): Observable<Order[]> {
    return this.http.post<Order[]>('https://localhost:44314/api/order', null);
  }

  postPizzaOrder(FOP: FoodOrderPizza) {
    return this.http.post('https://localhost:44314/api/orderpizza', FOP);
  }

  postSideOrder(FOS: FoodOrderSide) {
    return this.http.post('https://localhost:44314/api/orderside', FOS);
  }

  postDrinkOrder(FOD: FoodOrderDrink) {
    return this.http.post('https://localhost:44314/api/orderdrink', FOD);
  }

  getPizzaOrder(orderID: number): Observable<FoodOrderPizza[]> {
    return this.http.get<FoodOrderPizza[]>(
      'https://localhost:44314/api/orderpizza/' + orderID
    );
  }
}
