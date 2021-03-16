import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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

import { ItemComponent } from './components/menu/item/item.component';
import { MyOrderComponent } from './components/menu/my-order/my-order.component';
import { OrderItemComponent } from './components/menu/my-order/order-item/order-item.component';
import { MenuService } from './services/menu.service';
import { MessengerService } from './services/messenger.service';

const appRoutes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'menu', component: MenuComponent },
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
    ItemComponent,
    MyOrderComponent,
    OrderItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [MenuService, MessengerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
