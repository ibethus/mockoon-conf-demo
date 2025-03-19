import { Component, computed, input, Signal } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { OpenDialogBoutonComponent } from '../../open-dialog-bouton/open-dialog-bouton.component';
import { ValidateMissionDialogComponent } from '../validate-mission-dialog/validate-mission-dialog.component';

@Component({
  selector: 'app-validate-mission-button',
  imports: [MatIcon, MatButton, MatTooltip],
  templateUrl: './validate-mission-button.component.html',
  styleUrl: './validate-mission-button.component.less',
})
export class ValidateMissionButtonComponent extends OpenDialogBoutonComponent {
  override actionMessage: string =
    "Valider l'envoi du clone sur cette planète";
  suitId = input<string>();
  missionSelected = input<number>();
  suitAvailable = input<boolean>();
  toolip: Signal<string> = computed(() => {
    if (!this.suitAvailable()) {
      return "Le clone n'est pas disponible";
    } else if (this.missionSelected() === -1) {
      return 'Veuillez sélectionner une planète';
    }
    return this.actionMessage + ' ?';
  });
  disabled: Signal<boolean> = computed(
    () => this.missionSelected() === -1 || !(this.suitAvailable() ?? false)
  );
  override openDialog() {
    const dialogRef = this.dialog.open(ValidateMissionDialogComponent, {
      data: { action: this.actionMessage, suitId: this.suitId() },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.validateAction.emit(true);
      }
    });
  }
}
