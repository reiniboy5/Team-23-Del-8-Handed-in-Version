import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtClassReportComponent } from './art-class-report.component';

describe('ArtClassReportComponent', () => {
  let component: ArtClassReportComponent;
  let fixture: ComponentFixture<ArtClassReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtClassReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtClassReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
