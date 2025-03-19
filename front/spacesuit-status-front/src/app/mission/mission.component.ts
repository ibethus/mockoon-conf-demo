import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  input,
  Input,
  OnInit,
  output
} from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Observable } from 'rxjs';
import { PlanetDetails } from './model/planet-detail.model';
import { Planet } from './model/planet.model';
import { PlanetsApi } from './service/planets-api.service';

@Component({
  selector: 'mission-component',
  imports: [MatCheckboxModule, CommonModule],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.less',
})
export class MissionComponent implements AfterViewInit {
  planetsApi: PlanetsApi;
  constructor(planetsApi: PlanetsApi) {
    this.planetsApi = planetsApi;
  }
  ngAfterViewInit(): void {
    this.details = this.planetsApi.getDetails(this.planet.uid);
  }
  @Input() planet!: Planet;
  isSelected = input<boolean>()
  iAmSelected = output<string>();
  details!: Observable<PlanetDetails>;
  emitSelected() {
    this.iAmSelected.emit(this.planet.uid);
  }
}
