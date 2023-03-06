import { Pipe, PipeTransform } from '@angular/core';
import { Jugador } from '../interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(jugador: Jugador): string {

    if (!jugador.id) {
      return 'assets/no-image.png'
    } else if ( jugador.imagen ){
      return jugador.imagen
    } else {
      return `assets/heroes/${jugador.id}.jpg`
    }

  }

}
