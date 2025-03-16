import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidateMissionButtonComponent } from './validate-mission-button.component';

describe('ValidateMissionButtonComponent', () => {
  let component: ValidateMissionButtonComponent;
  let fixture: ComponentFixture<ValidateMissionButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidateMissionButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidateMissionButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
