import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  signal,
  WritableSignal
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Router } from '@angular/router';
import { HasRolesDirective } from 'keycloak-angular';
import { ToastrService } from 'ngx-toastr';
import { BoutonBatterieComponent } from '../bouton-batterie/bouton-batterie.component';
import { BoutonMaintenanceComponent } from '../bouton-maintenance/bouton-maintenance.component';
import { BoutonMissionComponent } from '../bouton-mission/bouton-mission.component';
import { BoutonOxygenComponent } from '../bouton-oxygen/bouton-oxygen.component';
import { BoutonSuppressionComponent } from '../bouton-suppression/bouton-suppression.component';
import { Suit } from '../model/suit';
import { SuitStatus } from '../model/suit-status';
import { SpacesuitApi } from '../service/spacesuit-api';
import { SuitViewerComponent } from '../suit-viewer/suit-viewer.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-suit',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
    MatIconModule,
    BoutonOxygenComponent,
    BoutonBatterieComponent,
    BoutonMissionComponent,
    BoutonMaintenanceComponent,
    BoutonSuppressionComponent,
    HasRolesDirective,
    SuitViewerComponent,
    MatProgressSpinner
  ],
  templateUrl: './suit.component.html',
  styleUrls: ['./suit.component.scss'],
})
export class SuitComponent {
  private toastr: ToastrService;
  error: WritableSignal<string> = signal("");
  constructor(
    suitService: SpacesuitApi,
    router: Router,
    toastr: ToastrService
  ) {
    this.suitService = suitService;
    this.router = router;
    this.toastr = toastr;
  }
  router: Router;
  suitService: SpacesuitApi;
  suit!: WritableSignal<Suit>;
  loading: WritableSignal<boolean> = signal(true);
  @Input()
  set suitId(suitId: string) {
    this.suitService.getById(suitId).subscribe({
      next: (suit$) => {
      this.suit = signal(suit$);
      this.loading.set(false);
      },
      error: (error) => {
        this.error.set(`Erreur lors de la récupération du clone (statut ${error.status} - ${error.statusText})`);
        this.loading.set(false);
      },
    });
  }

  validateMaintenance($event: boolean) {
    if ($event) {
      let updatedSuit: Suit = { ...this.suit() };
      updatedSuit.status = SuitStatus.EN_MAINTENANCE;
      updatedSuit.lastMaintenanceDate = new Date();
      const nextYear = new Date();
      nextYear.setMonth(new Date().getMonth() + 12);
      updatedSuit.nextMaintenanceDate = nextYear;
      this.suitService.update(updatedSuit.id, updatedSuit).subscribe({
        next: (_) => {
          this.suit.set(updatedSuit);
          this.toastr.success('Clone envoyée en maintenance');
        },
        error: (error) => console.error(error),
      });
    }
  }
  validateBatteryRefill($event: boolean) {
    if ($event) {
      let updatedSuit: Suit = { ...this.suit() };
      updatedSuit.batteryLevel = 100;
      this.suitService.update(updatedSuit.id, updatedSuit).subscribe({
        next: (_) => {
          this.suit.set(updatedSuit);
          this.toastr.success('Batterie changée');
        },
        error: (error) => console.error(error),
      });
    }
  }
  validateOxygenRefill($event: boolean) {
    if ($event) {
      let updatedSuit: Suit = { ...this.suit() };
      updatedSuit.oxygenLevel = 100;
      this.suitService.update(updatedSuit.id, updatedSuit).subscribe({
        next: (_) => {
          this.suit.set(updatedSuit);
          this.toastr.success('Oxygène rechargé');
        },
        error: (error) => console.error(error),
      });
    }
  }
  validateDelete($event: boolean) {
    if ($event) {
      this.suitService.delete(this.suit().id).subscribe({
        next: (_) => {
          this.toastr.warning('Clone supprimé');
          this.router.navigate(['/suits/']);
        },
        error: (error) => console.error(error),
      });
    }
  }
  validateMission($event: boolean) {
    if ($event) {
      this.router.navigate(['/mission/', this.suit().id]);
    }
  }
}
