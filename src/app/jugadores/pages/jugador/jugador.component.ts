import { Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jugador } from '../../interfaces';
import { JugadoresService } from '../../services/jugadores.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {


  jugador!: Jugador;

  constructor(
    private activatedRoute: ActivatedRoute,
    private jugadorService: JugadoresService
  ){
    
  }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap( ({id}) => this.jugadorService.getJugadorId(id))
    ).subscribe(
      jugador => this.jugador = jugador
    );
  }

}
