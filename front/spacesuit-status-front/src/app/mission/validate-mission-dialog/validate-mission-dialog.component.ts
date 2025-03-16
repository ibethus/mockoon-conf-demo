import { Component, Inject, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
} from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { Validation } from '../model/validation.model';
import { ValidationApi } from '../service/validation-api.service';
import { addLinePipe } from "./breakline-pipe";

@Component({
  selector: 'app-validate-mission-dialog',
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatProgressSpinnerModule,
    addLinePipe
],
  templateUrl: './validate-mission-dialog.component.html',
  styleUrl: './validate-mission-dialog.component.less',
})
export class ValidateMissionDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) data: { action: string; suitId: string },
    validationApi: ValidationApi
  ) {
    this.action = data.action;
    this.suitId = data.suitId;
    this.validationApi = validationApi;
    this.validation = toSignal(this.validationApi.validateSuit(this.suitId));
  }
  action: string;
  suitId: string;
  validationApi: ValidationApi;
  validation: Signal<Validation | undefined>;
  confirm() {
    this.dialogRef.close(true);
  }
  cancel() {
    this.dialogRef.close(false);
  }
}
