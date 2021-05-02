import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PizzaElement } from 'src/app/models/pizza-element';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { CustomPizza } from 'src/app/models/custom-pizza';

@Injectable({
  providedIn: 'root',
})
export class PizzaElementService {
  private pizzaElementURL = '';

  constructor(private http: HttpClient) {}

  //Get pizzaElements
  getAllPizzaElements(): Observable<PizzaElement[]> {
    return this.http
      .get<PizzaElement[]>('https://localhost:44314/api/pizzaElement')
      .pipe(
        map((data) => {
          const pizzaElements: PizzaElement[] = [];
          for (const i in data) {
            pizzaElements.push(data[i]);
          }
          return pizzaElements;
        })
      );
  }

  getAllPizzaSizes() {
    this.getAllPizzaElements().subscribe((data) => {
      const pizzaSizeArray: PizzaElement[] = data.filter(
        (element) => element.type == 'pizzaSize'
      );
      return pizzaSizeArray;
    });
  }

  postPizza(pizza: CustomPizza) {
    return this.http.post('https://localhost:44314/api/pizza', pizza);
  }
}
