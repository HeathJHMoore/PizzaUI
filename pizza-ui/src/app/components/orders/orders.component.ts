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

    this.ordersService.getAllOrders().subscribe((orders) => {
      //console.log(orders);

      //LOOP THROUGH ORDERS

      orders.forEach((order) => {
        var tempOrder = new Order(order.orderID, order.orderDate);
        //ADD pizza items to orders' orderItems list
        this.ordersService
          .getPizzaOrder(order.orderID)
          .subscribe((FoodOrderPizzas) => {
            FoodOrderPizzas.forEach((FOP) => {
              this.pizzas.forEach((pizza) => {
                if (FOP.PizzaID == pizza.id) {
                  tempOrder.orderItems.push(
                    new Item(
                      pizza.id,
                      pizza.name,
                      pizza.price,
                      pizza.description,
                      pizza.imgURL,
                      pizza.type,
                      FOP.OrderItemIndex
                    )
                  );
                }
              });
            });
          });

        //ADD side items to orders' orderItems list
        this.ordersService
          .getSideOrder(order.orderID)
          .subscribe((FoodOrderSides) => {
            FoodOrderSides.forEach((FOS) => {
              this.sides.forEach((side) => {
                if (FOS.SideID == side.id) {
                  tempOrder.orderItems.push(
                    new Item(
                      side.id,
                      side.name,
                      side.price,
                      side.description,
                      side.imgURL,
                      side.type,
                      FOS.OrderItemIndex
                    )
                  );
                }
              });
            });
          });

        //ADD drink items to orders' orderItems list
        this.ordersService
          .getDrinkOrder(order.orderID)
          .subscribe((FoodOrderDrinks) => {
            FoodOrderDrinks.forEach((FOD) => {
              //Get drink item that matches the drinkID in FoodOrderDrink object
              this.drinks.forEach((drink) => {
                if (FOD.DrinkID == drink.id) {
                  tempOrder.orderItems.push(
                    new Item(
                      drink.id,
                      drink.name,
                      drink.price,
                      drink.description,
                      drink.imgURL,
                      drink.type,
                      FOD.OrderItemIndex
                    )
                  );
                }
              });
            });

            this.orders.push(tempOrder);
          });
      });

      //END OF A SINGLE ORDER'S LOOP^
    });
  }

  ngOnInit(): void {}
}
