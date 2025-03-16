import { CommonModule } from '@angular/common';
import {
  Component,
  OnInit,
  signal,
  ViewChild,
  WritableSignal,
} from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
  MatProgressSpinner
} from '@angular/material/progress-spinner';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { Suit } from '../model/suit';
import { SpacesuitApi } from '../service/spacesuit-api';
import { MatPaginator, MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-suits',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatProgressBarModule,
    MatSortModule,
    RouterModule,
    MatProgressSpinner,
    MatPaginatorModule,
  ],
  templateUrl: './suits.component.html',
  styleUrl: './suits.component.scss',
})
export class SuitsComponent implements OnInit {
  loading: WritableSignal<boolean> = signal(true);
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  suits = new MatTableDataSource<Suit>();
  displayedColumns: string[] = [
    'serialNumber',
    'status',
    'batteryLevel',
    'oxygenLevel',
    'accuracy',
  ];
  totalElements: number = 0;
  pageIndex = 0;
  pageSize = 10;
  sortDirection = '';
  sortField = '';

  constructor(private suitService: SpacesuitApi) {
    // Définition de la logique de tri personnalisée
    this.suits.sortingDataAccessor = (
      suit: Suit,
      property: string
    ): string | number => {
      switch (property) {
        case 'accuracy':
          return suit.accuracy.min; // Tri basé uniquement sur la température minimale
        default:
          return suit[
            property as keyof Pick<
              Suit,
              'serialNumber' | 'status' | 'batteryLevel' | 'oxygenLevel'
            >
          ];
      }
    };
  }

  ngOnInit(): void {
    this.loadSuits();
  }

  ngAfterViewInit() {
    // Attendre que les ViewChild soient initialisés
    if (this.paginator && this.sort) {
      // Combiner les observables de pagination et de tri
      this.paginator.page.subscribe(() => this.loadSuits());
      this.sort.sortChange.subscribe(() => {
        if (this.paginator) {
          this.pageIndex = 1;
        }
        this.loadSuits();
      });

      // Initial sort
      this.suits.sort = this.sort;
    }
  }

  loadSuits(): void {    
    const sort = this.sortField ? `${this.sortField},${this.sortDirection}` : '';
    this.suitService.getAll(this.pageIndex, this.pageSize, sort).subscribe({
      next: (response) => {
        console.log(response.body);
        this.suits.data = response.body ?? [];
        this.suits.sort = this.sort;
        this.totalElements = parseInt(response.headers.get('X-Total-Count')?? "0");
        this.loading.set(false);
      },
      error: () => this.loading.set(false)
    });
  }

  handlePageEvent(event: PageEvent) {
    this.pageIndex = event.pageIndex+1;
    this.pageSize = event.pageSize;
    this.loadSuits();
  }
}
