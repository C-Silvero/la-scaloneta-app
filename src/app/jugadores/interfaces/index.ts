export interface Usuario {
    usuario: string;
    email: string;
}

export interface Jugador {
    id:           string;
    nombre:       string;
    dorsal?:       number;
    imagen:       string;  
    posicion:     string;
    estadisticas?: Estadisticas[];
}

export interface Posicion {
    posicion: string;
}

export interface Estadisticas {
    PJ: number,
    goles: number,
    asistencias: number,
    otros: string;
}