import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonMissionComponent } from './bouton-mission.component';

describe('BoutonMissionComponent', () => {
  let component: BoutonMissionComponent;
  let fixture: ComponentFixture<BoutonMissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutonMissionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonMissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
