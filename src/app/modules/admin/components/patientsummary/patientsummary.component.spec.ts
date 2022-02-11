import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientsummaryComponent } from './patientsummary.component';

describe('PatientsummaryComponent', () => {
  let component: PatientsummaryComponent;
  let fixture: ComponentFixture<PatientsummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientsummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
