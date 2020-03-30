import { Injectable } from "@angular/core";
import { AreaSalud, Medico } from "../models";
import { areas } from "./areas";

@Injectable({
  providedIn: "root"
})
export class ProfesionalesService {
  ectHour = new Date().getUTCHours() - 5;

  constructor() {}

  getAreasSalud(): AreaSalud[] {
    return areas
      .map(area => {
        const medicos = area.medicos
          .sort((a, b) => a.horarios[0].start - b.horarios[0].end)
          .map(m => this.mapMedico(m));
        return {
          slug: area.slug,
          name: area.name,
          icon: area.icon,
          medicos: medicos,
          medicosAtendiendo: medicos.filter(m => m.estaAtendiendo).length
        };
      })
      .sort((a, b) => a.name.localeCompare(b.name));
  }

  mapMedico(m: Medico) {
    const horarioEncontrado = m.horarios.find(
      h => this.ectHour >= h.start && this.ectHour <= h.end
    );
    const estaAtendiendo = horarioEncontrado != null;
    const horariosStr = m.horarios.map(h => {
      const minutes = h.esMediaHora ? "30" : "00";
      const hoursStart = h.start < 10 ? `0${h.start}` : h.start.toString();
      const start = `${hoursStart}:${minutes}`;

      const hoursEnd = h.end < 10 ? `0${h.end}` : h.end.toString();
      const end = `${hoursEnd}:${minutes}`;

      return `${start} - ${end}`;
    });
    return {
      ...m,
      estaAtendiendo: estaAtendiendo,
      horariosStr: horariosStr
    };
  }
}
