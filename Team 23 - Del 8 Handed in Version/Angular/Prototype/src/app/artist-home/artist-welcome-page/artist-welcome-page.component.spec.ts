import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistWelcomePageComponent } from './artist-welcome-page.component';

describe('ArtistWelcomePageComponent', () => {
  let component: ArtistWelcomePageComponent;
  let fixture: ComponentFixture<ArtistWelcomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistWelcomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistWelcomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
