import { Component, Input } from '@angular/core';
import { Jugador } from '../../interfaces';

@Component({
  selector: 'app-jugador-card',
  templateUrl: './jugador-card.component.html',
  styleUrls: ['./jugador-card.component.css']
})
export class JugadorCardComponent {

@Input() jugador!: Jugador;

}
