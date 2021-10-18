import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkShowroomComponent } from './artwork-showroom.component';

describe('ArtworkShowroomComponent', () => {
  let component: ArtworkShowroomComponent;
  let fixture: ComponentFixture<ArtworkShowroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtworkShowroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtworkShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
