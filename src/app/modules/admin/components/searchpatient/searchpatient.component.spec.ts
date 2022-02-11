import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchpatientComponent } from './searchpatient.component';

describe('SearchpatientComponent', () => {
  let component: SearchpatientComponent;
  let fixture: ComponentFixture<SearchpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchpatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
