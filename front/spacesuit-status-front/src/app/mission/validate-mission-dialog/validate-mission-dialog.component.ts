import { Component, Inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';

@Component({
  selector: 'app-validate-mission-dialog',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatProgressSpinnerModule,
  ],
  templateUrl: './validate-mission-dialog.component.html',
  styleUrl: './validate-mission-dialog.component.less',
})
export class ValidateMissionDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: { action: string; suitId: string },
  ) {
    this.action = data.action;
    this.suitId = data.suitId;
  }
  action: string;
  suitId: string;
  confirm() {
    this.dialogRef.close(true);
  }
  cancel() {
    this.dialogRef.close(false);
  }
}
