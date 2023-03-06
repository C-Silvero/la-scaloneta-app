import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { Jugador } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {

  
  constructor(
    private http: HttpClient
  ) { }

  getJugadores(): Observable<Jugador[]>{
  return this.http.get<Jugador[]>('http://localhost:3000/jugadores')
  }

  getJugadorId( id: string): Observable<Jugador>{
    return this.http.get<Jugador>(`http://localhost:3000/jugadores/${id}`)
  }

  getRecomendacion( termino: string): Observable<Jugador[]>{
    return this.http.get<Jugador[]>(`http://localhost:3000/jugadores?q=${termino}&_limit=5`)
  }

  agregarJugador( jugador: Jugador ): Observable<Jugador> {
    return this.http.post<Jugador>(`http://localhost:3000/jugadores`, jugador);
  }

  actualizarJugador( jugador: Jugador ): Observable<Jugador> {
    return this.http.put<Jugador>(`http://localhost:3000/jugadores/${jugador.id}`, jugador);
  }

  eliminarJugador( id: string ): Observable<any>{
    return this.http.delete<any>(`http://localhost:3000/jugadores/${id}`)
  }


}
