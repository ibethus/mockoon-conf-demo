import { Component, computed, input, Input, Signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { Suit } from '../model/suit';
import { OpenDialogBoutonComponent } from '../../open-dialog-bouton/open-dialog-bouton.component';
import { SuitStatus } from '../model/suit-status';

@Component({
  selector: 'app-bouton-batterie',
  imports: [MatIcon, MatButton, MatTooltip],
  templateUrl: './bouton-batterie.component.html',
  styleUrl: './bouton-batterie.component.less',
})
export class BoutonBatterieComponent extends OpenDialogBoutonComponent {
  override actionMessage: string = 'Remplacer par une batterie pleine (20€)';
  suit = input.required<Suit>();

  maxBattery: Signal<Boolean> = computed(
    () => this.suit().batteryLevel === 100
  );
  isAvailable: Signal<boolean> = computed(
    () => this.suit().status != SuitStatus.EN_MISSION
  );

  tooltipBattery: Signal<string> = computed(() => {
    if (this.suit().status === SuitStatus.EN_MISSION) {
      return 'La clone est en mission';
    } else if (this.maxBattery()) {
      return 'La batterie est déjà chargée';
    }
    return this.actionMessage;
  });
}
