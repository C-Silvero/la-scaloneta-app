import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { JugadorComponent } from './pages/jugador/jugador.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { JugadoresRoutingModule } from './jugadores-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { JugadorCardComponent } from './components/jugador-card/jugador-card.component';
import { FormsModule } from '@angular/forms';
import { ImagenPipe } from './pipes/imagen.pipe';
import { DialogComponent } from './components/dialog/dialog.component';


@NgModule({
  declarations: [
    HomeComponent,
    AgregarComponent,
    BuscarComponent,
    DialogComponent,
    JugadorComponent,
    ListadoComponent,
    JugadorCardComponent,
    ImagenPipe,
  ],
  imports: [
    CommonModule,
    JugadoresRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class JugadoresModule { }
