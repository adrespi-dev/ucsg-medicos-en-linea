import { Component, OnInit } from "@angular/core";
import { ProfesionalesService } from "./services/profesionales.service";
import { AreaSalud } from "./models";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "ucsg-medicos",
  templateUrl: "./medicos.component.html",
  styleUrls: ["./medicos.component.scss"]
})
export class MedicosComponent implements OnInit {
  selectedIndex = 0;
  isLoading = true;
  areas: AreaSalud[];
  areaSelected: AreaSalud;
  constructor(
    private profesionalesService: ProfesionalesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.areas = this.profesionalesService.areas.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      this.activatedRoute.queryParams.subscribe(params => {
        if (params.areaId) {
          this.areaSelected = this.areas.find(a => a.slug == params.areaId);
          this.selectedIndex = 1;
          this.isLoading = false;
        } else {
          this.selectedIndex = 0;
          this.isLoading = false;
        }
      });
    }, 1000);
  }

  onAreaSelected(area: AreaSalud) {
    this.isLoading = true;
    setTimeout(() => {
      this.areaSelected = area;
      this.isLoading = false;
      this.goToProfesionales(area.name);
    }, 1000);
  }

  goToProfesionales(s) {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { areaId: this.areaSelected.slug },
      queryParamsHandling: "merge"
    });
  }
}
