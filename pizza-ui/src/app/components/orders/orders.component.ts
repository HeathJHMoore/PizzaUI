import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';
import { Order } from 'src/app/models/order';
import { FoodOrderPizza } from 'src/app/models/food-order-pizza';
import { Item } from 'src/app/models/item';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit {
  items: Item[] = [];
  pizzas: Item[] = [];
  sides: Item[] = [];
  drinks: Item[] = [];

  orders: Order[] = [];

  constructor(private ordersService: OrdersService, private menu: MenuService) {
    this.menu.getPizzas().subscribe((pizzas) => {
      pizzas.forEach((pizza: Item) => {
        pizza.type = 'pizza';
      });
      this.pizzas = pizzas;
    });

    this.menu.getSides().subscribe((sides) => {
      sides.forEach((side: Item) => {
        side.type = 'side';
      });
      this.sides = sides;
    });

    this.menu.getDrinks().subscribe((drinks) => {
      drinks.forEach((drink: Item) => {
        drink.type = 'drink';
      });
      this.drinks = drinks;
    });

    //After completion, try moving this to ngOninit
    this.ordersService.getAllOrders().subscribe((orders) => {
      orders.forEach((order) => {
        var tempOrder = new Order(order.orderID, order.orderDate);
        //ADD pizza items to orders' orderItems list
        this.ordersService
          .getPizzaOrder(order.orderID)
          .subscribe((FoodOrderPizzas) => {
            //console.log(FoodOrderPizzas);
            FoodOrderPizzas.forEach((FOP) => {
              var item: Item;

              //Get pizza item that matches the pizzaID in FoodOrderPizza object
              item = this.pizzas.find(function (pizza): Item {
                if (FOP.PizzaID == pizza.id) {
                  return pizza;
                }
              });
              item.orderItemIndex = FOP.OrderItemIndex;
              tempOrder.orderItems.push(item);
            });

            this.orders.push(tempOrder);
          });
      });
    });
  }

  ngOnInit(): void {}
}
