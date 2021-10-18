import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedExhibitionsComponent } from './accepted-exhibitions.component';

describe('AcceptedExhibitionsComponent', () => {
  let component: AcceptedExhibitionsComponent;
  let fixture: ComponentFixture<AcceptedExhibitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcceptedExhibitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptedExhibitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
