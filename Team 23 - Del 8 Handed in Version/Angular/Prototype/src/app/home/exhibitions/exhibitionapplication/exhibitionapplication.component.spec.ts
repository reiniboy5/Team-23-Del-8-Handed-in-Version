import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhibitionapplicationComponent } from './exhibitionapplication.component';

describe('ExhibitionapplicationComponent', () => {
  let component: ExhibitionapplicationComponent;
  let fixture: ComponentFixture<ExhibitionapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExhibitionapplicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExhibitionapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
