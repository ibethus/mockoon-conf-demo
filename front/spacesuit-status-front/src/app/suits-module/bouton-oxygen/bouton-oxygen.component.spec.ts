import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonOxygenComponent } from './bouton-oxygen.component';

describe('BoutonOxygenComponent', () => {
  let component: BoutonOxygenComponent;
  let fixture: ComponentFixture<BoutonOxygenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutonOxygenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonOxygenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
