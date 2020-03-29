import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { AreaSalud, Medico } from "../models";

interface MedicoExtend extends Medico {
  estaAtendiendo: boolean;
  horariosStr: string[];
}

@Component({
  selector: "ucsg-profesionales",
  templateUrl: "./profesionales.component.html",
  styleUrls: ["./profesionales.component.scss"]
})
export class ProfesionalesComponent implements OnInit, OnChanges {
  @Input() area: AreaSalud;
  medicos: MedicoExtend[];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.area.currentValue) {
      this.populateMedicos();
    }
  }

  populateMedicos() {
    const now = new Date();
    const ectHour = now.getUTCHours() - 5;
    this.medicos = this.area.medicos.map(m => {
      const horarioEncontrado = m.horarios.find(
        h => ectHour >= h.start && ectHour <= h.end
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
    });
  }

  ngOnInit(): void {
    // this.populateMedicos();
  }

  escribirEnWS(celular: string) {
    const formattedPhone = "593" + celular.substring(1, celular.length);
    const url = `whatsapp://send?phone=${formattedPhone}&text=hola`;
    window.open(url, "_self");
  }

  llamar(celular: string) {
    const url = `tel:${celular}`;
    window.open(url, "_self");
  }
}
