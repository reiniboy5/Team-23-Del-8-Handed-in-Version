import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistExhibitionsComponent } from './artist-exhibitions.component';

describe('ArtistExhibitionsComponent', () => {
  let component: ArtistExhibitionsComponent;
  let fixture: ComponentFixture<ArtistExhibitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistExhibitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistExhibitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
