import { Component, input, Input, WritableSignal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { OpenDialogBoutonComponent } from '../../open-dialog-bouton/open-dialog-bouton.component';
import { Suit } from '../model/suit';

@Component({
  selector: 'app-bouton-suppression',
  imports: [MatIcon, MatButton, MatTooltip],
  templateUrl: './bouton-suppression.component.html',
  styleUrl: './bouton-suppression.component.less',
})
export class BoutonSuppressionComponent extends OpenDialogBoutonComponent {
  override actionMessage: string = 'Supprimer la clone ?';
  tooltipSupression(): string {
    return this.actionMessage;
  }
  suit = input.required<Suit>();
}
