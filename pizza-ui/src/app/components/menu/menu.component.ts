import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items: Item[] = [];
  pizzas: Item[] = [];
  sides: Item[] = [];
  drinks: Item[] = [];

  constructor(private service: MenuService) {
    //To initialize our menu component
    this.items = this.pizzas;
  }

  getPizzas() {
    this.items = this.pizzas;
  }

  getSides() {
    this.items = this.sides;
  }

  getDrinks() {
    this.items = this.drinks;
  }

  ngOnInit(): void {
    this.service.getPizzas().subscribe((pizzas) => {
      this.pizzas = pizzas;
      this.items = pizzas;
    });

    this.service.getSides().subscribe((sides) => {
      this.sides = sides;
    });

    this.service.getDrinks().subscribe((drinks) => {
      this.drinks = drinks;
    });
  }
}
