import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonSuppressionComponent } from './bouton-suppression.component';

describe('BoutonSuppressionComponent', () => {
  let component: BoutonSuppressionComponent;
  let fixture: ComponentFixture<BoutonSuppressionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutonSuppressionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonSuppressionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
