import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyExhibitionComponent } from './apply-exhibition.component';

describe('ApplyExhibitionComponent', () => {
  let component: ApplyExhibitionComponent;
  let fixture: ComponentFixture<ApplyExhibitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyExhibitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyExhibitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
