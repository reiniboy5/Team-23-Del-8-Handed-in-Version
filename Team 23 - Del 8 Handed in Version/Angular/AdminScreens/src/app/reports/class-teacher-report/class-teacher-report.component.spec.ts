import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassTeacherReportComponent } from './class-teacher-report.component';

describe('ClassTeacherReportComponent', () => {
  let component: ClassTeacherReportComponent;
  let fixture: ComponentFixture<ClassTeacherReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassTeacherReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassTeacherReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
