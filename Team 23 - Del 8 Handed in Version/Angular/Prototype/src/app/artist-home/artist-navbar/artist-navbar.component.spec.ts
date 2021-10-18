import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistNavbarComponent } from './artist-navbar.component';

describe('ArtistNavbarComponent', () => {
  let component: ArtistNavbarComponent;
  let fixture: ComponentFixture<ArtistNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
