import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Item } from '../../models/item';
import { Department } from '../../models/department';

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
    this.addDepartment();
  }

  //REMEMBER TO GET RID OF THIS!!!!!!!!!!!!!!!!!   HEY !!!!!!!!!!!!!!!!!!!!! GET RID OF THIS !!!

  addDepartment() {
    var val: Department = new Department('Teeth');
    this.service.postDep(val).subscribe((response) => {
      response.forEach((resp: Department) => {
        console.log(resp.DepartmentId);
      });
    });
  }

  ngOnInit(): void {
    this.service.getPizzas().subscribe((pizzas) => {
      pizzas.forEach((pizza: Item) => {
        pizza.type = 'pizza';
      });
      this.pizzas = pizzas;
      this.items = pizzas;
    });

    this.service.getSides().subscribe((sides) => {
      sides.forEach((side: Item) => {
        side.type = 'side';
      });
      this.sides = sides;
    });

    this.service.getDrinks().subscribe((drinks) => {
      drinks.forEach((drink: Item) => {
        drink.type = 'drink';
      });
      this.drinks = drinks;
    });
  }
}
