import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProyectComponent } from './proyect/proyect.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'proyectos', component: ProyectComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
  })

export class AppRoutingModule { }