import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistExhibitionComponent } from './artist-exhibition.component';

describe('ArtistExhibitionComponent', () => {
  let component: ArtistExhibitionComponent;
  let fixture: ComponentFixture<ArtistExhibitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistExhibitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistExhibitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
