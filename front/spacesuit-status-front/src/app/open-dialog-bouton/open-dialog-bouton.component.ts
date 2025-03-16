import { Component, output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-open-dialog-bouton',
  imports: [],
  template: '',
})
export abstract class OpenDialogBoutonComponent {
  validateAction = output<boolean>();
  readonly dialog!: MatDialog;
  constructor(dialog: MatDialog) {
    this.dialog = dialog;
  }
  abstract readonly actionMessage: string;
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: { action: this.actionMessage },
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result === true) {
        this.validateAction.emit(true);
      }
    });
  }
}
