export interface AreaSalud {
  slug: string;
  name: string;
  icon: string;
  medicos: Medico[];
}

export interface Horario {
  start: number | string;
  end: number | string;
  esMediaHora?: boolean;
}

export interface Medico {
  name: string;
  celular: string;
  horarios: Horario[];
}
