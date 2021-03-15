import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Item } from '../../models/item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  items: Item[];
  pizzas: Item[];
  sides: Item[];
  drinks: Item[];

  constructor(private service: MenuService) {
    this.pizzas = this.service.getPizzas();
    this.sides = this.service.getSides();
    this.drinks = this.service.getPizzas();

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

  ngOnInit(): void {}
}
