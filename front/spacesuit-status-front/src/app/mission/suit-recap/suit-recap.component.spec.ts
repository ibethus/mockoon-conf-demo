import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitRecapComponent } from './suit-recap.component';

describe('SuitRecapComponent', () => {
  let component: SuitRecapComponent;
  let fixture: ComponentFixture<SuitRecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuitRecapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuitRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
