import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe, switchMap } from 'rxjs';
import { DialogComponent } from '../../components/dialog/dialog.component';
import { Jugador } from '../../interfaces';
import { JugadoresService } from '../../services/jugadores.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  posiciones: string[] = ['Arquero', 'Defensor', 'Mediocampista', 'Delantero']

  jugador: Jugador = {
    id:           '',
    nombre:       '',
    dorsal:       undefined,
    imagen:       '',  
    posicion:     '',
    estadisticas: [
      {
        PJ: 1,
        goles: parseInt(''),
        asistencias: parseInt(''),
        otros: ''
      }
    ]
  }


  constructor(
    private matDialog: MatDialog,
    private _snackBar: MatSnackBar,
    private jugadorService: JugadoresService,
    private activatedRoute: ActivatedRoute,
    private routes: Router
  ){

  }

  ngOnInit(): void {

    if (!this.routes.url.includes('editar')) {
      return
    }

    this.activatedRoute.params
    .pipe (
      switchMap ( ({id}) => this.jugadorService.getJugadorId(id)) 
    ).subscribe(
      (jugador) => this.jugador = jugador
    )
    
  }

  agregarJugador() {

    if ( this.jugador.nombre.trim().length < 3) {
      return
    }

    //editar
    if (this.jugador.id != '') {
      this.jugadorService.actualizarJugador( this.jugador )
      .subscribe(resp => {
        this.openSnackBar('Cambios guardados')
      }
      )
    } else { 
      this.jugadorService.agregarJugador( this.jugador )
      .subscribe(resp =>  {
        this.openSnackBar('Jugador agregado')}
      )
    }

    this.routes.navigate(['/jugadores/listado'])
  }

  borrarJugador(){

    const dialog = this.matDialog.open(DialogComponent, {
      width: '400px',
      height: '180px',
      data: this.jugador
    })

    dialog.afterClosed().subscribe(
      (resp) => {
        if (resp) {
          this.jugadorService.eliminarJugador( this.jugador.id )
          .subscribe(resp => 
            this.openSnackBar('Jugador eliminado')
            )
          this.routes.navigate(['/jugadores/listado'])
        }
      }
    )

  }

  onPosicionSelected (event: MatSelectChange ) {
    this.jugador.posicion = event.value;
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, 'Cerrar', {
      duration: 2500
    })
  }




}
