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

const appRoutes: Routes = [
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
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
