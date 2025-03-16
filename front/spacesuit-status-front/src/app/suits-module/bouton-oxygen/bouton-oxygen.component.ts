import { Component, computed, input, Input, Signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { OpenDialogBoutonComponent } from '../../open-dialog-bouton/open-dialog-bouton.component';
import { Suit } from '../model/suit';
import { SuitStatus } from '../model/suit-status';

@Component({
  selector: 'app-bouton-oxygen',
  imports: [MatIcon, MatButton, MatTooltip],
  templateUrl: './bouton-oxygen.component.html',
  styleUrl: './bouton-oxygen.component.less',
})
export class BoutonOxygenComponent extends OpenDialogBoutonComponent {
  override actionMessage: string = `Recharger en oxygène`;
  suit = input.required<Suit>();

  maxOxygen: Signal<Boolean> = computed(() => this.suit().oxygenLevel === 100);
  isAvailable: Signal<boolean> = computed(
    () => this.suit().status != SuitStatus.EN_MISSION
  );
  oxygenPrice: Signal<Number> = computed(
    () => (100 - this.suit().oxygenLevel) * 0.12
  );
  tooltipOxygen: Signal<string> = computed(() => {
    if (this.suit().status === SuitStatus.EN_MISSION) {
      return 'La clone est en mission';
    }
    if (this.maxOxygen()) {
      return "La réserve d'oxygène est pleine";
    }
    return `Recharger en oxygène (${this.oxygenPrice()} €)`;
  });
}
