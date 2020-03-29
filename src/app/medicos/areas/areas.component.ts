import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AreaSalud } from "../models";

@Component({
  selector: "ucsg-areas",
  templateUrl: "./areas.component.html",
  styleUrls: ["./areas.component.scss"]
})
export class AreasComponent implements OnInit {
  @Input() areas: AreaSalud[] = [];

  @Output() areaSelected = new EventEmitter<AreaSalud>();

  constructor() {}

  ngOnInit(): void {}
}
