import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionReportComponent } from './exhibition-report.component';

describe('ExhibitionReportComponent', () => {
  let component: ExhibitionReportComponent;
  let fixture: ComponentFixture<ExhibitionReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhibitionReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
