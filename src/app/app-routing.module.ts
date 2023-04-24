import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

// Una ruta es lo que viene despues del primer slash en una url.
// Aqui se guardan los componentes que debe cargar Angular por defecto
// para cada ruta.
// Se debe agregar la directiva <router-outlet> en app-component.html
// para que esto funcione.
const routes: Routes = [
  {
    path: '', // Para la ruta vacia, cargar el componente Home
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
