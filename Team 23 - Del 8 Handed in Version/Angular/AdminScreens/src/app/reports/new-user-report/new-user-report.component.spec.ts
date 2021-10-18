import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUserReportComponent } from './new-user-report.component';

describe('NewUserReportComponent', () => {
  let component: NewUserReportComponent;
  let fixture: ComponentFixture<NewUserReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUserReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUserReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
