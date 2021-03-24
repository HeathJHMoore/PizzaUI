import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  baseURL: string = 'https://localhost:44314';
  pizzaURL: string = this.baseURL + '/api/pizza';
  sideURL: string = this.baseURL + '/api/side';
  drinkURL: string = this.baseURL + '/api/drink';
  constructor(private http: HttpClient) {}

  getPizzas(): Observable<Item[]> {
    //TODO: Populate the pizzas using an API & return an observable
    return this.http.get<Item[]>(this.pizzaURL);
  }

  getSides(): Observable<Item[]> {
    return this.http.get<Item[]>(this.sideURL);
  }

  getDrinks(): Observable<Item[]> {
    return this.http.get<Item[]>(this.drinkURL);
  }

  postDep(val: any) {
    this.http.post(this.baseURL + '/api/values', val).subscribe();
  }
}
