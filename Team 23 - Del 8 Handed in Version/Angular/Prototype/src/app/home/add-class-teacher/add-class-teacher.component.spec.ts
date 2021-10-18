import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClassTeacherComponent } from './add-class-teacher.component';

describe('AddClassTeacherComponent', () => {
  let component: AddClassTeacherComponent;
  let fixture: ComponentFixture<AddClassTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddClassTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClassTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
