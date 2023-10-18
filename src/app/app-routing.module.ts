import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
  // Otras rutas
  { path: 'mi-componente', component: MiComponenteComponent },
  { path: 'about-me', component: AboutMeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
