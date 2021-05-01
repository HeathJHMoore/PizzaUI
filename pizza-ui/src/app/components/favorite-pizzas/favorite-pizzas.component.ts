import { Component, OnInit } from '@angular/core';
import { PizzaElementService } from 'src/app/services/pizza-element.service';
import { PizzaElement } from 'src/app/models/pizza-element';

@Component({
  selector: 'app-favorite-pizzas',
  templateUrl: './favorite-pizzas.component.html',
  styleUrls: ['./favorite-pizzas.component.scss'],
})
export class FavoritePizzasComponent implements OnInit {
  pizzaElements: PizzaElement[] = [];
  pizzaSizes: PizzaElement[] = [];
  pizzaCrusts: PizzaElement[] = [];
  pizzaCheeses: PizzaElement[] = [];
  pizzaMeats: PizzaElement[] = [];
  pizzaVeggies: PizzaElement[] = [];

  constructor(private elementService: PizzaElementService) {}

  ngOnInit(): void {
    this.elementService.getAllPizzaElements().subscribe((elements) => {
      this.pizzaElements = elements;
      console.log(this.pizzaElements, 'ELEMENTS');
    });

    //get pizza sizes
    this.elementService.getAllPizzaElements().subscribe((elements) => {
      this.pizzaSizes = elements.filter(
        (element) => element.type == 'pizzaSize'
      );
      console.log(this.pizzaSizes, 'SIZES');
    });

    // Get pizza crusts
    this.elementService.getAllPizzaElements().subscribe((elements) => {
      this.pizzaCrusts = elements.filter(
        (element) => element.type == 'pizzaCrust'
      );
      console.log(this.pizzaCrusts);
    });

    // Get pizza cheeses
    this.elementService.getAllPizzaElements().subscribe((elements) => {
      this.pizzaCheeses = elements.filter(
        (element) => element.type == 'pizzaCheese'
      );
      console.log(this.pizzaCheeses);
    });

    // Get pizza meats
    this.elementService.getAllPizzaElements().subscribe((elements) => {
      this.pizzaMeats = elements.filter(
        (element) => element.type == 'pizzaMeat'
      );
      console.log(this.pizzaMeats, 'MEATS');
    });

    // Get pizza veggies
    this.elementService.getAllPizzaElements().subscribe((elements) => {
      this.pizzaVeggies = elements.filter(
        (element) => element.type == 'pizzaVeggie'
      );
      console.log(this.pizzaVeggies, 'Veggies');
    });
  }

  getPizzaSizes() {
    this.pizzaSizes = this.pizzaElements.filter(
      (element) => element.type == 'pizzaSize'
    );
    console.log(this.pizzaSizes, 'sizes');
  }
}
