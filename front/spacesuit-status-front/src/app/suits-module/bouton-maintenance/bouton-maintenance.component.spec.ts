import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonMaintenanceComponent } from './bouton-maintenance.component';

describe('BoutonMaintenanceComponent', () => {
  let component: BoutonMaintenanceComponent;
  let fixture: ComponentFixture<BoutonMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutonMaintenanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
