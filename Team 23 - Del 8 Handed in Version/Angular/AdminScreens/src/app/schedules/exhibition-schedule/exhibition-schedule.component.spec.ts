import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionScheduleComponent } from './exhibition-schedule.component';

describe('ExhibitionScheduleComponent', () => {
  let component: ExhibitionScheduleComponent;
  let fixture: ComponentFixture<ExhibitionScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhibitionScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
