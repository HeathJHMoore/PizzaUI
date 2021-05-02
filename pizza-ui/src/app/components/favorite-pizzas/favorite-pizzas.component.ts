import { Component, OnInit } from '@angular/core';
import { PizzaElementService } from 'src/app/services/pizza-element.service';
import { PizzaElement } from 'src/app/models/pizza-element';
import { CustomPizza } from 'src/app/models/custom-pizza';

@Component({
  selector: 'app-favorite-pizzas',
  templateUrl: './favorite-pizzas.component.html',
  styleUrls: ['./favorite-pizzas.component.scss'],
})
export class FavoritePizzasComponent implements OnInit {
  chosenElements: PizzaElement[] = [];
  pizzaSizes: PizzaElement[] = [];
  pizzaCrusts: PizzaElement[] = [];
  pizzaCheeses: PizzaElement[] = [];
  pizzaMeats: PizzaElement[] = [];
  pizzaVeggies: PizzaElement[] = [];
  pizzaPrice: number = 0;

  constructor(private elementService: PizzaElementService) {}

  ngOnInit(): void {
    //get pizza sizes
    this.elementService.getAllPizzaElements().subscribe((elements) => {
      this.pizzaSizes = elements.filter(
        (element) => element.type == 'pizzaSize'
      );
    });

    // Get pizza crusts
    this.elementService.getAllPizzaElements().subscribe((elements) => {
      this.pizzaCrusts = elements.filter(
        (element) => element.type == 'pizzaCrust'
      );
    });

    // Get pizza cheeses
    this.elementService.getAllPizzaElements().subscribe((elements) => {
      this.pizzaCheeses = elements.filter(
        (element) => element.type == 'pizzaCheese'
      );
    });

    // Get pizza meats
    this.elementService.getAllPizzaElements().subscribe((elements) => {
      this.pizzaMeats = elements.filter(
        (element) => element.type == 'pizzaMeat'
      );
    });

    // Get pizza veggies
    this.elementService.getAllPizzaElements().subscribe((elements) => {
      this.pizzaVeggies = elements.filter(
        (element) => element.type == 'pizzaVeggie'
      );
    });
  }

  sizeChange(size: PizzaElement) {
    this.chosenElements = this.chosenElements.filter(
      (element) => element.type != 'pizzaSize'
    );
    this.chosenElements.push(size);

    this.chosenElements.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      } else if (a.id < b.id) {
        return -1;
      } else {
        return 0;
      }
    });
    this.calculatePrice();
  }
  crustChange(crust: PizzaElement) {
    this.chosenElements = this.chosenElements.filter(
      (element) => element.type != 'pizzaCrust'
    );
    this.chosenElements.push(crust);

    this.chosenElements.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      } else if (a.id < b.id) {
        return -1;
      } else {
        return 0;
      }
    });
    this.calculatePrice();
  }
  cheeseChange(cheese: PizzaElement) {
    this.chosenElements = this.chosenElements.filter(
      (element) => element.type != 'pizzaCheese'
    );
    this.chosenElements.push(cheese);
    this.chosenElements.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      } else if (a.id < b.id) {
        return -1;
      } else {
        return 0;
      }
    });

    this.calculatePrice();
  }
  meatChange(meat: PizzaElement, isChecked: boolean) {
    if (isChecked) {
      this.chosenElements.push(meat);
    } else {
      this.chosenElements = this.chosenElements.filter(
        (element) => element.id != meat.id
      );
    }

    this.chosenElements.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      } else if (a.id < b.id) {
        return -1;
      } else {
        return 0;
      }
    });

    this.calculatePrice();
  }

  veggieChange(veggie: PizzaElement, isChecked: boolean) {
    if (isChecked) {
      this.chosenElements.push(veggie);
    } else {
      this.chosenElements = this.chosenElements.filter(
        (element) => element.id != veggie.id
      );
    }

    this.chosenElements.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      } else if (a.id < b.id) {
        return -1;
      } else {
        return 0;
      }
    });
    this.calculatePrice();
    console.log(this.createDescription());
  }

  calculatePrice() {
    let sum = 0;
    this.chosenElements.forEach((element) => {
      sum += element.price;
    });
    this.pizzaPrice = sum;
  }

  createDescription(): string {
    let description = '';

    this.chosenElements.forEach((element) => {
      description += element.name + ', ';
    });

    return description.slice(0, description.length - 2);
  }

  submit(f) {
    let pizza = new CustomPizza(
      f.value.pizzaName,
      this.pizzaPrice,
      this.createDescription(),
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa0ayEI3zJt8vZWkaCRczg7NzGL61BveTSpA&usqp=CAU'
    );

    this.elementService.postPizza(pizza).subscribe();
  }
}
