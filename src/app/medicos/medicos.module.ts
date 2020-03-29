import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MedicosRoutingModule } from "./medicos-routing.module";
import { MedicosComponent } from "./medicos.component";
import { HeaderComponent } from "./header/header.component";

import { MatTabsModule } from "@angular/material/tabs";
import { MatProgressBarModule } from "@angular/material/progress-bar";

import { AreasComponent } from "./areas/areas.component";
import { ProfesionalesComponent } from "./profesionales/profesionales.component";
import { FiconsModule } from "../ficons.module";

@NgModule({
  declarations: [
    MedicosComponent,
    HeaderComponent,
    AreasComponent,
    ProfesionalesComponent
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    MatTabsModule,
    MatProgressBarModule,
    FiconsModule
  ]
})
export class MedicosModule {}
