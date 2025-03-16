import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenDialogBoutonComponent } from './open-dialog-bouton.component';

describe('OpenDialogBoutonComponent', () => {
  let component: OpenDialogBoutonComponent;
  let fixture: ComponentFixture<OpenDialogBoutonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpenDialogBoutonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenDialogBoutonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
