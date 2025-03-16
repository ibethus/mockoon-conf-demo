import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonBatterieComponent } from './bouton-batterie.component';

describe('BoutonBatterieComponent', () => {
  let component: BoutonBatterieComponent;
  let fixture: ComponentFixture<BoutonBatterieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutonBatterieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonBatterieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
