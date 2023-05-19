import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodPageComponent } from './food-page/food-page.component';
import { CartPageComponent } from './cart-page/cart-page.component';

// Una ruta es lo que viene despues del primer slash en una url.
// Aqui se guardan los componentes que debe cargar Angular por defecto
// para cada ruta.
// Se debe agregar la directiva <router-outlet> en app-component.html
// para que esto funcione.
const routes: Routes = [
  {
    path: '', // Para la ruta vacia, cargar el componente Home
    component: HomeComponent
  },
  {
    path: 'search/:searchTerm', // searchTerm es un parametro
    component: HomeComponent
  },
  {
    path: 'tag/:tag', // searchTerm es un parametro
    component: HomeComponent
  },
  {
    path: 'item/:id',
    component: FoodPageComponent
  },
  {
    path: 'cart-page',
    component: CartPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
