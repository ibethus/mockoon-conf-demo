import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  input,
  Input,
  OnInit,
  output,
  Signal,
  signal,
  WritableSignal
} from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Observable, catchError, of } from 'rxjs';
import { PlanetDetails } from './model/planet-detail.model';
import { Planet } from './model/planet.model';
import { PlanetsApi } from './service/planets-api.service';

@Component({
  selector: 'mission-component',
  imports: [MatCheckboxModule, CommonModule, MatProgressSpinnerModule],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.less',
})
export class MissionComponent implements AfterViewInit {
  planetsApi: PlanetsApi;
  error: WritableSignal<string> = signal("");
  loading: WritableSignal<boolean> = signal(true);

  constructor(planetsApi: PlanetsApi) {
    this.planetsApi = planetsApi;
  }

  ngAfterViewInit(): void {
    this.planetsApi.getDetails(this.planet.uid).subscribe({
      next: details => {
        this.details.set(details);
        this.loading.set(false);
      },
      error: error => {
        this.error.set(`Erreur lors du chargement des détails (statut ${error.status} - ${error.statusText})`);
        this.loading.set(false);
      }
    });
  }

  @Input() planet!: Planet;
  isSelected = input<boolean>()
  iAmSelected = output<string>();
  details: WritableSignal<PlanetDetails> = signal({} as PlanetDetails);

  emitSelected() {
    this.iAmSelected.emit(this.planet.uid);
  }
}
