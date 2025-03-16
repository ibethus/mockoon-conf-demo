import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateMissionDialogComponent } from './validate-mission-dialog.component';

describe('ValidateMissionDialogComponent', () => {
  let component: ValidateMissionDialogComponent;
  let fixture: ComponentFixture<ValidateMissionDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidateMissionDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateMissionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
