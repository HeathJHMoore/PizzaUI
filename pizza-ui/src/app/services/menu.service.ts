import { Injectable } from '@angular/core';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  pizzas: Item[] = [
    new Item(
      1,
      'Cheese Pizza',
      10.5,
      'Delicious Cheese Pizza With Tomato Sauce and a Thin Crust',
      'https://www.pizzahut.com/assets/w/tile/thor/pizza_Cheese.png'
    ),
    new Item(
      2,
      'Pepperoni Pizza',
      11.25,
      'Delicious Pepperoni Pizza With Tomato Sauce and a Thin Crust',
      'https://www.pizzahut.com/assets/w/tile/thor/pizza_Pepperoni.png'
    ),
    new Item(
      1,
      'Cheese Pizza',
      10.5,
      'Delicious Cheese Pizza With Tomato Sauce and a Thin Crust',
      'https://www.pizzahut.com/assets/w/tile/thor/pizza_Cheese.png'
    ),
    new Item(
      2,
      'Pepperoni Pizza',
      11.25,
      'Delicious Pepperoni Pizza With Tomato Sauce and a Thin Crust',
      'https://www.pizzahut.com/assets/w/tile/thor/pizza_Pepperoni.png'
    ),
    new Item(
      1,
      'Cheese Pizza',
      10.5,
      'Delicious Cheese Pizza With Tomato Sauce and a Thin Crust',
      'https://www.pizzahut.com/assets/w/tile/thor/pizza_Cheese.png'
    ),
    new Item(
      2,
      'Pepperoni Pizza',
      11.25,
      'Delicious Pepperoni Pizza With Tomato Sauce and a Thin Crust',
      'https://www.pizzahut.com/assets/w/tile/thor/pizza_Pepperoni.png'
    ),
    new Item(
      1,
      'Cheese Pizza',
      10.5,
      'Delicious Cheese Pizza With Tomato Sauce and a Thin Crust',
      'https://www.pizzahut.com/assets/w/tile/thor/pizza_Cheese.png'
    ),
    new Item(
      2,
      'Pepperoni Pizza',
      11.25,
      'Delicious Pepperoni Pizza With Tomato Sauce and a Thin Crust',
      'https://www.pizzahut.com/assets/w/tile/thor/pizza_Pepperoni.png'
    ),
  ];

  sides: Item[] = [
    new Item(
      3,
      'Wings',
      8.75,
      'Eating these classic, crispy bone-in wings is the easy part. Choosing from Teriyaki, Garlic Parmesan, Honey BBQ or our Lemon Pepper…well, good luck there.',
      'https://www.pizzahut.com/assets/w/tile/thor/wings_6BIWings.png'
    ),
    new Item(
      4,
      'BreadSticks',
      6.5,
      'Nobody does breadsticks like the Hut. Crispy-on-the-outside, soft-on-the-inside, and seasoned with garlic and parmesan, they are',
      'https://www.pizzahut.com/assets/w/tile/thor/sides_Breadsticks_Marinara.png'
    ),
    new Item(
      8.75,
      'Wings',
      10.5,
      'Eating these classic, crispy bone-in wings is the easy part. Choosing from Teriyaki, Garlic Parmesan, Honey BBQ or our Lemon Pepper…well, good luck there.',
      'https://www.pizzahut.com/assets/w/tile/thor/wings_6BIWings.png'
    ),
    new Item(
      4,
      'BreadSticks',
      6.5,
      'Nobody does breadsticks like the Hut. Crispy-on-the-outside, soft-on-the-inside, and seasoned with garlic and parmesan, they are',
      'https://www.pizzahut.com/assets/w/tile/thor/sides_Breadsticks_Marinara.png'
    ),
    new Item(
      3,
      'Wings',
      8.75,
      'Eating these classic, crispy bone-in wings is the easy part. Choosing from Teriyaki, Garlic Parmesan, Honey BBQ or our Lemon Pepper…well, good luck there.',
      'https://www.pizzahut.com/assets/w/tile/thor/wings_6BIWings.png'
    ),
    new Item(
      4,
      'BreadSticks',
      6.5,
      'Nobody does breadsticks like the Hut. Crispy-on-the-outside, soft-on-the-inside, and seasoned with garlic and parmesan, they are',
      'https://www.pizzahut.com/assets/w/tile/thor/sides_Breadsticks_Marinara.png'
    ),
  ];
  drinks: Item[] = [
    new Item(
      5,
      'Pepsi',
      2.5,
      'Eating these classic, crispy bone-in wings is the easy part. Choosing from Teriyaki, Garlic Parmesan, Honey BBQ or our Lemon Pepper…well, good luck there.',
      'https://www.pizzahut.com/assets/w/tile/thor/drinks_Pepsi_logo.png'
    ),
    new Item(
      6,
      'Sierra Mist',
      0.5,
      'Nobody does breadsticks like the Hut. Crispy-on-the-outside, soft-on-the-inside, and seasoned with garlic and parmesan, they are',
      'https://www.pizzahut.com/assets/w/tile/thor/Drinks_SierraMist.png'
    ),
    new Item(
      5,
      'Pepsi',
      2.5,
      'Eating these classic, crispy bone-in wings is the easy part. Choosing from Teriyaki, Garlic Parmesan, Honey BBQ or our Lemon Pepper…well, good luck there.',
      'https://www.pizzahut.com/assets/w/tile/thor/drinks_Pepsi_logo.png'
    ),
    new Item(
      6,
      'Sierra Mist',
      0.5,
      'Nobody does breadsticks like the Hut. Crispy-on-the-outside, soft-on-the-inside, and seasoned with garlic and parmesan, they are',
      'https://www.pizzahut.com/assets/w/tile/thor/Drinks_SierraMist.png'
    ),
    new Item(
      5,
      'Pepsi',
      2.5,
      'Eating these classic, crispy bone-in wings is the easy part. Choosing from Teriyaki, Garlic Parmesan, Honey BBQ or our Lemon Pepper…well, good luck there.',
      'https://www.pizzahut.com/assets/w/tile/thor/drinks_Pepsi_logo.png'
    ),
    new Item(
      6,
      'Sierra Mist',
      0.5,
      'Nobody does breadsticks like the Hut. Crispy-on-the-outside, soft-on-the-inside, and seasoned with garlic and parmesan, they are',
      'https://www.pizzahut.com/assets/w/tile/thor/Drinks_SierraMist.png'
    ),
  ];

  constructor() {}

  getPizzas(): Item[] {
    //TODO: Populate the pizzas using an API & return an observable
    return this.pizzas;
  }

  getSides(): Item[] {
    return this.sides;
  }

  getDrinks(): Item[] {
    return this.drinks;
  }
}
