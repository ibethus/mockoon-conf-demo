import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuitViewerComponent } from './suit-viewer.component';

describe('SuitViewerComponent', () => {
  let component: SuitViewerComponent;
  let fixture: ComponentFixture<SuitViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuitViewerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuitViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
