import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistBookingsComponent } from './artist-bookings.component';

describe('ArtistBookingsComponent', () => {
  let component: ArtistBookingsComponent;
  let fixture: ComponentFixture<ArtistBookingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistBookingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
