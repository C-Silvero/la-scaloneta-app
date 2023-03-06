import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HomeComponent } from './pages/home/home.component';
import { JugadorComponent } from './pages/jugador/jugador.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [

  {path: '' , component: HomeComponent, 
  children: [  
    {path: 'listado', component: ListadoComponent},
    {path: 'jugador/:id', component: JugadorComponent },
    {path: 'agregar', component: AgregarComponent },
    {path: 'editar/:id', component: AgregarComponent},
    {path: 'buscar', component: BuscarComponent },
    {path: '**', redirectTo: 'listado'}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JugadoresRoutingModule { }
