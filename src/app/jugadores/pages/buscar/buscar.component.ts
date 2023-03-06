import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Jugador } from '../../interfaces';
import { JugadoresService } from '../../services/jugadores.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  
  jugadores: Jugador[] = []
  termino: string = ''
  jugadorSeleccionado!: Jugador;

  constructor(
    private jugadorService: JugadoresService
  ){

  }
  ngOnInit(): void {

  }


  buscar(){
    this.jugadorService.getRecomendacion( this.termino.trim() )
      .subscribe( jugador => this.jugadores = jugador)
  }

  opcionSeleccionada( event: MatAutocompleteSelectedEvent ){
    const jugador : Jugador = event.option.value;
    this.termino = jugador.nombre
  
    if ( !jugador ) { return }

    this.jugadorService.getJugadorId( jugador.id )
    .subscribe( resp => this.jugadorSeleccionado = resp)
  
  }

}
