export interface AreaSalud {
  slug: string;
  name: string;
  icon: string;
  medicosAtendiendo?: number;
  medicos: Medico[];
}

export interface Horario {
  start: number;
  end: number;
  esMediaHora?: boolean;
}

export interface Medico {
  horarios: Horario[];
  estaAtendiendo?: boolean;
  horariosStr?: string[];
}
