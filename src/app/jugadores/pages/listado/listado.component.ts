import { Component, OnInit } from '@angular/core';
import { Jugador } from '../../interfaces';
import { JugadoresService } from '../../services/jugadores.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{

  posiciones: string[] = ['Arquero', 'Defensor', 'Mediocampista', 'Delantero']



  jugadores: Jugador[] = [];
  mostrarJugadoresFiltrados: boolean = false
  jugadoresFiltrados = this.jugadores

  constructor(
    private jugadorService: JugadoresService
  ){

  }

  ngOnInit(): void {
  this.jugadorService.getJugadores().subscribe(
    jugador => this.jugadores = jugador
  )
  }

  getPosicion(posicion: string){
    this.jugadoresFiltrados = 
    this.jugadores.filter(jugador => jugador.posicion === posicion);
    this.mostrarJugadoresFiltrados = true;
  }

  obtenerIcono(posicion: string): string {
    switch(posicion) {
      case 'Arquero':
        return 'pan_tool';
      case 'Defensor':
        return 'shield';
      case 'Mediocampista':
        return 'flash_on';
        case 'Delantero':
        return 'sports_soccer';
      default:
        return '';
    }
  }


}
