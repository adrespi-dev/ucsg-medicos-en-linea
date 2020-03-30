import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { AreaSalud, Medico } from "../models";

@Component({
  selector: "ucsg-profesionales",
  templateUrl: "./profesionales.component.html",
  styleUrls: ["./profesionales.component.scss"]
})
export class ProfesionalesComponent implements OnInit, OnChanges {
  @Input() area: AreaSalud;
  medicos: Medico[];

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.area.currentValue) {
      this.populateMedicos();
    }
  }

  populateMedicos() {
    this.medicos = this.area.medicos;
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
