import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistAnnouncementComponent } from './artist-announcement.component';

describe('ArtistAnnouncementComponent', () => {
  let component: ArtistAnnouncementComponent;
  let fixture: ComponentFixture<ArtistAnnouncementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistAnnouncementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistAnnouncementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
