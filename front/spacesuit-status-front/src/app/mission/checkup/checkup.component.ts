import { HttpClient } from '@angular/common/http';
import {
  Component,
  Input,
  Signal,
  computed,
  signal,
  WritableSignal
} from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Suit } from '../../suits-module/model/suit';
import { SpacesuitApi } from '../../suits-module/service/spacesuit-api';
import { MissionComponent } from '../mission.component';
import { Planet } from '../model/planet.model';
import { PlanetsApi } from '../service/planets-api.service';
import { SuitRecapComponent } from '../suit-recap/suit-recap.component';

@Component({
  selector: 'app-checkup',
  imports: [MissionComponent, MatSidenavModule, SuitRecapComponent],
  templateUrl: './checkup.component.html',
  styleUrl: './checkup.component.less',
})
export class CheckupComponent {
  planets: WritableSignal<Planet[]> = signal([]);
  suit: WritableSignal<Suit> = signal({} as Suit);
  selectedIndex: WritableSignal<number> = signal(-1);
  loaded = computed(() => this.suit().id !== undefined);
  private suitService: SpacesuitApi;
  
  constructor(suitService: SpacesuitApi, planetApi: PlanetsApi) {
    this.suitService = suitService;
    planetApi.findAll().subscribe((planets$) => {
      this.planets.set(planets$);
    });
  }
  
  @Input()
  set suitId(suitId: string) {
    this.suitService.getById(suitId).subscribe((suit$) => {
      this.suit.set(suit$);
    });
  }

  updateCheckBoxes(event: any) {
    if (event - 1 === this.selectedIndex()) {
      this.selectedIndex.set(-1);
    } else {
      this.selectedIndex.set(event - 1);
    }
  }
  
  isMissionSelected(missionIndex: number): boolean {
    return missionIndex === this.selectedIndex();
  }
}
