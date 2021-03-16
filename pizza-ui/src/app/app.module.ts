import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersComponent } from './components/orders/orders.component';
import { MenuComponent } from './components/menu/menu.component';
import { FavoritePizzasComponent } from './components/favorite-pizzas/favorite-pizzas.component';
import { NavComponent } from './components/nav/nav.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PizzaComponent } from './components/menu/pizza/pizza.component';
import { SidesComponent } from './components/menu/sides/sides.component';
import { DrinksComponent } from './components/menu/drinks/drinks.component';
import { MenuNavComponent } from './components/menu/menu-nav/menu-nav.component';
import { ItemComponent } from './components/menu/item/item.component';

const appRoutes: Routes = [
  { path: '', component: MenuComponent },
  {
    path: 'menu',
    component: MenuComponent,
    children: [
      { path: 'pizza', component: PizzaComponent },
      { path: 'sides', component: SidesComponent },
      { path: 'drinks', component: DrinksComponent },
    ],
  },
  { path: 'my-orders', component: OrdersComponent },
  { path: 'favorite-pizzas', component: FavoritePizzasComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OrdersComponent,
    FavoritePizzasComponent,
    NavComponent,
    NotFoundComponent,
    PizzaComponent,
    SidesComponent,
    DrinksComponent,
    MenuNavComponent,
    ItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
