import { HttpClient } from '@angular/common/http';
import {
  Component,
  Input,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { Observable, single } from 'rxjs';
import { Suit } from '../../suits-module/model/suit';
import { SpacesuitApi } from '../../suits-module/service/spacesuit-api';
import { MissionComponent } from '../mission.component';
import { MissionModel } from '../model/misison.model';
import { SuitRecapComponent } from '../suit-recap/suit-recap.component';
import { SuitStatus } from '../../suits-module/model/suit-status';

@Component({
  selector: 'app-checkup',
  imports: [MissionComponent, MatSidenavModule, SuitRecapComponent, MatDivider],
  templateUrl: './checkup.component.html',
  styleUrl: './checkup.component.less',
})
export class CheckupComponent {
  constructor(suitService: SpacesuitApi, httpClient: HttpClient) {
    this.suitService = suitService;
    this.httpClient = httpClient;
    this.readMissionFile().subscribe((res) => (this.missions = res));
  }
  missions!: MissionModel[];
  suitService: SpacesuitApi;
  httpClient: HttpClient;
  suit!: WritableSignal<Suit>;
  selectedIndex: WritableSignal<number> = signal(-1);
  @Input()
  set suitId(suitId: string) {
    this.suitService.getById(suitId).subscribe((suit$) => {
      this.suit = signal(suit$);
    });
  }
  missionAmount: number[] = [
    ...Array(Math.floor(Math.random() * 9) + 1).keys(),
  ];
  readMissionFile(): Observable<MissionModel[]> {
    return this.httpClient.get<MissionModel[]>('missions.json');
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

  isSuitAvailable(): boolean {
    return this.suit().status === SuitStatus.OPERATIONNEL;
  }
}
