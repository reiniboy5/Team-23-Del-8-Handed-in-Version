import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistShowroomComponent } from './artist-showroom.component';

describe('ArtistShowroomComponent', () => {
  let component: ArtistShowroomComponent;
  let fixture: ComponentFixture<ArtistShowroomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistShowroomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistShowroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
