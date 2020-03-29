import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MedicosComponent } from "./medicos.component";

const routes: Routes = [{ path: "", component: MedicosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicosRoutingModule {}
