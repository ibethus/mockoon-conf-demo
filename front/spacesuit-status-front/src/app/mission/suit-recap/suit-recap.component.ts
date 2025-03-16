import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  Input,
  input,
  WritableSignal
} from '@angular/core';
import { MatDivider } from '@angular/material/divider';
import { MatIcon } from '@angular/material/icon';
import { MatProgressBar } from '@angular/material/progress-bar';
import { Suit } from '../../suits-module/model/suit';
import { SuitStatus } from '../../suits-module/model/suit-status';
import { SpacesuitApi } from '../../suits-module/service/spacesuit-api';
import { ValidateMissionButtonComponent } from '../validate-mission-button/validate-mission-button.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-suit-recap',
  imports: [
    MatDivider,
    MatIcon,
    MatProgressBar,
    CommonModule,
    ValidateMissionButtonComponent,
  ],
  templateUrl: './suit-recap.component.html',
  styleUrl: './suit-recap.component.scss',
})
export class SuitRecapComponent {
  constructor(suitService: SpacesuitApi, toastr: ToastrService) {
    this.suitService = suitService;
    this.toastr = toastr;
  }
  toastr: ToastrService;
  suitService: SpacesuitApi;
  @Input() suit!: WritableSignal<Suit>;
  missionSelected = input<number>();
  suitAvailable = computed(
    () => this.suit().status === SuitStatus.OPERATIONNEL
  );
  registerValidation(event: boolean) {
    if (event) {
      let updatedSuit: Suit = { ...this.suit() };
      updatedSuit.status = SuitStatus.EN_MISSION;
      this.suitService.update(updatedSuit.id, updatedSuit).subscribe({
        next: (_) => {
          this.suit.set(updatedSuit);
          this.toastr.success("Vers l'infini et au-delà !")
        },
        error: (error) => console.error(error),
      });
    }
  }
}
