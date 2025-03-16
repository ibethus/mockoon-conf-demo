import {
  Component,
  input,
  Input,
  output
} from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MissionModel } from './model/misison.model';

@Component({
  selector: 'app-mission',
  imports: [MatCheckboxModule],
  templateUrl: './mission.component.html',
  styleUrl: './mission.component.less',
})
export class MissionComponent {
  @Input() planetId!: number;
  @Input() mission!: MissionModel;
  isSelected = input<boolean>()
  iAmSelected = output<number>();
  missionName!: string;
  planetName!: string;
  imgSource(): string {
    return '/planet' + this.planetId + '.svg';
  }
  emitSelected(){
    this.iAmSelected.emit(this.planetId);
  }
}
